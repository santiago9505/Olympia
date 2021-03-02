from django.contrib.auth.models import User

from rest_framework import serializers
from .models import Profile

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'pk', 
            'username',
            'first_name', 
            'last_name', 
            'email', 
            'is_active',
        )

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
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
            'user',
        )

