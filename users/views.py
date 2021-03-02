from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Profile
from .serializers import *
# Create your views here.
@api_view(['GET', 'POST'])
def user_profile(request):
    if request.method == 'GET':
        data = Profile.objects.first()
        serializer = ProfileSerializer(data, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)