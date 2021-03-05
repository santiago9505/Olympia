from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from compras.models import Compra
from .serializers import *

@api_view(['POST'])
def create_ord_compra(request):
    if resquest.method=='POST':
        serializer=OrdenCompraSerializer(data=resquest.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def data_compra(request,user_id):
    if request.method == 'GET':
        data = Compra.objects.filter(pk=user_id)
        serializer =OrdeCompraSerializer(data, context={'request': request}, many=True)
        
        return Response(serializer.data)
