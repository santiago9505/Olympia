from rest_framework import serializers
from .models import Producto
from .models import Comentario




class ComentarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comentario
        fields = ('user','producto','texto','date')


class ProductoSerializer(serializers.ModelSerializer):
    coment=ComentarioSerializer(read_only=True, many=True)

    class Meta:
        model = Producto
        fields = ('pk', 'Name', 'price', 'description', 'stok', 'img_url','tag_use','coment')




