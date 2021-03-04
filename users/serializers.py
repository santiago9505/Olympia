from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from rest_framework import serializers
from .models import Profile



class ProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Profile
        fields = (
            'user_id',
            'phone_prefix',
            'phone_number',
            'picture',
            'birthday',
            'gender',
            'created',
            'modified',
            'notifications'
        )


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    class Meta:
        model = User
        
        fields = ('id', 'username', 'password', 'first_name','last_name', 'email', 'profile')
        # extra_kwargs = {'password': {'write_only': True}}
        # def create(self, validated_data):
        #     user = User.objects.create(
        #         email=validated_data['email'],
        #         username=validated_data['username'],
        #         password = make_password(validated_data['password'])
        #     )
        #     user.set_password(validated_data['password'])
        #     user.save()
        #     return user