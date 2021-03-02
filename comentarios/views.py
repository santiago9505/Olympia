from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Comentario
from .serializers import *



@api_view(['GET'])
def comentarios_filtrados(request,product_id):
        if request.method=='GET':
            try:
                data = Comentario.objects.filter(fk_producto=product_id)
            except Comentario.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)

            serializer =ComentarioSerializer(data, context={'request': request}, many=True)

            return Response(serializer.data)
