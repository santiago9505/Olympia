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
        #     password = validated_data.pop('password')
        #     user = User(**validated_data)
        #     user.set_password(password)
        #     user.save()
        #     return user