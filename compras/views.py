from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from compras.models import Compra
from .serializers import *

@api_view(['GET'])
def data_compra(request):
    if request.method == 'GET':
        data = Compra.objects.filter()
        serializer =ProductoSerializer(data, context={'request': request}, many=True)
        
        return Response(serializer.data)



@api_view(['POST'])
def generar_compra(request):
    if request.method == 'POST':
        data = Compra.objects.filter()
        serializer =OrdenCompraSerializer(data, context={'request': request}, many=True)
        
        return Response(serializer.data)
