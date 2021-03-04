from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Producto
from .serializers import *

@api_view(['GET', 'POST'])
def productos_list(request):
    if request.method == 'GET':
        data = Producto.objects.all()
        serializer =ProductoSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    
    elif request.method =='POST':

        serializer=SaveProductoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['GET'])
def productos_filtrados(request,product_type):
        if request.method=='GET':
            try:
                data = Producto.objects.filter(tag_use=product_type)
            except Producto.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)

            serializer =ProductoSerializer(data, context={'request': request}, many=True)

            return Response(serializer.data)


@api_view(['POST'])
def coment_save(resquest):
    if resquest.method=='POST':
        serializer=ComentarioSerializer(data=resquest.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)