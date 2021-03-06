from django.contrib.auth import authenticate
from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Profile
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
        serializer = UserUpdateSerializer(data=request.data)
        profile_data = request.data.pop("profile")
        data = User.objects.get(username=request.data["username"])

        profile = Profile.objects.get(user_id = data.pk)
        if profile != None:

            profile.phone_prefix = profile_data["phone_prefix"]
            profile.phone_number = profile_data["phone_number"]
            profile.credit_card = profile_data["credit_card"]

            profile.picture = profile_data["picture"]

            profile.address_nickname = profile_data["address_nickname"]
            profile.address_name = profile_data["address_name"]
            profile.address_1 = profile_data["address_1"]
            profile.address_2 = profile_data["address_2"]
            profile.city = profile_data["city"]
            profile.zip_code = profile_data["zip_code"]
            profile.country = profile_data["country"]
            profile.state = profile_data["state"]
            profile.shippingAddres = profile.address_nickname + " " + profile.address_name + " " + profile.address_1 + " " + profile.address_2 + " " + profile.city + " " + profile.zip_code

            profile.save()

            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def users_filtrados(request,username):

    if request.method=='GET':
        try:
            data = User.objects.filter(username=username)
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer=UserCreateSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)










