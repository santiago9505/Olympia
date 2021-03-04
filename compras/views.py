from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from compras.models import Compra
from .serializers import *

@api_view(['GET'])
def data_compra(request):
    if request.method == 'GET':
        data = Producto.objects.all()
        serializer =ProductoSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
