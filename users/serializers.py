from django.contrib.auth.models import User


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