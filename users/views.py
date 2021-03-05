from django.contrib.auth import authenticate

#models
from django.contrib.auth.models import User
from .models import Profile

# Django REST Framework
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import status, viewsets
from rest_framework.decorators import action

# Serializers
from users.serializers import UserLoginSerializer, UserModelSerializer
from .serializers import *


# Create your views here.

@api_view(['GET', 'POST', 'PUT'])
def user_list(request):
    try:
        data = User.objects.all()
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserCreateSerializer(data, context={'request': request}, many=True)
        
        return Response(serializer.data)

    elif request.method == 'POST':
        
        serializer = UserCreateSerializer(data=request.data)
        profile_data = request.data.pop("profile")
        
        
        if serializer.is_valid():
            user = User.objects.create_user(**request.data)
            profile_serializer = ProfileCreateSerializer(data=profile_data)
            
            if profile_serializer.is_valid():
                profile = Profile(user=user, **profile_data)
                profile.save()

            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PUT':
        
        serializer = UserCreateSerializer(data=request.data)
        data = User.objects.filter(username=serializer.data)
        profile_data = request.data.pop("profile")

        if serializer.is_valid():
            profile_serializer = ProfileCreateSerializer(data=profile_data)
            # profile = Profile(**profile_data)
            # profile.save()
            if profile_serializer.is_valid():
                profile_serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def users_filtrados(request,username):
    try:
        data = User.objects.filter(username=username)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method=='GET':
            serializer=UserCreateSerializer(data, context={'request': request}, many=True)

            return Response(serializer.data)

        # elif request.method == 'PUT':
            
        #     serializer_profile = ProfileCreateSerializer(data=request.data)
        #     if serializer_profile.is_valid():
        #         profile.credit_card = request.data["credit_card"]
        #         profile.prefix_number = request.data["prefix_number"]
        #         profile.phone_number = request.data["phone_number"]
        #         profile.save()

        #     return Response(data, status=status.HTTP_201_CREATED)



class UserViewSet(viewsets.GenericViewSet):

    queryset = User.objects.filter(is_active=True)
    serializer_class = UserModelSerializer

    # Detail define si es una petición de detalle o no, en methods añadimos el método permitido, en nuestro caso solo vamos a permitir post
    @action(detail=False, methods=['post'])
    def login(self, request):
        """User sign in."""
        print(request.data)
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        data = {
            'user': UserModelSerializer(user).data,
            'access_token': token
        }
        return Response(data, status=status.HTTP_201_CREATED)       

            


