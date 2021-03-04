from django.contrib.auth.models import User

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
        )


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    class Meta:
        model = User
        
        fields = ('id', 'username', 'first_name','last_name', 'email', 'profile')
        # exclude=['password']