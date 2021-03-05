from django.contrib.auth.models import User

from django.contrib.auth import password_validation, authenticate


from rest_framework import serializers
from rest_framework.authtoken.models import Token

from rest_framework import serializers
from .models import Profile



"""Serializer del modelo Profile usado para crear los datos de perfil en la db"""
class ProfileCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Profile
        fields = (
            'user_id',
            'birthday',
            'gender',
            'notifications',
            'phone_number',
            'credit_card',
            'phone_prefix', 
            'phone_number',
            'picture',
            'address_nickname',
            'address_name',
            'address_1',
            'address_2',
            'city',
            'zip_code',
            'country',
            'state',
            'default_shipping_address',
            'shippingAddres'

        )

"""Serializer del modelo User usado para crear los datos de perfil en la db"""
class UserCreateSerializer(serializers.ModelSerializer):
    profile = ProfileCreateSerializer(read_only=True)
    class Meta:
        model = User
        
        fields = ('id', 'username', 'password', 'first_name','last_name', 'email', 'profile')

class UserUpdateSerializer(serializers.ModelSerializer):
    profile = ProfileCreateSerializer(read_only=True)
    class Meta:
        model = User
        
        fields = ('id', 'username', 'first_name','last_name', 'email', 'profile')


class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user_id', 'credit_card', 'phone_prefix', 'phone_number')


""" Serializer del modelo  """
class ProfileCompraSerializer(serializers.ModelSerializer):

        class Meta:
            model =Profile

            fields=('phone_number','shippingAddres','shippingCity','shippingCountry')

            



class UserCompraSerializer(serializers.ModelSerializer):
    
    profile=ProfileCompraSerializer(read_only=True)

    class Meta:
        model=User

        fields=('username', 'firs_name','last_name','email','profile')




class UserModelSerializer(serializers.ModelSerializer):

    class Meta:

        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
            'email',
            'password',
        )

class UserLoginSerializer(serializers.Serializer):

    # Campos que vamos a requerir
    email= serializers.EmailField()
    password = serializers.CharField()

    # Primero validamos los datos
    def validate(self, data):
        # authenticate recibe las credenciales, si son válidas devuelve el objeto del usuario
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise serializers.ValidationError('Las credenciales no son válidas')

        # Guardamos el usuario en el contexto para posteriormente en create recuperar el token
        self.context['user'] = user
        return data

    def create(self, data):
        """Generar o recuperar token."""
        token, created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'], token.key