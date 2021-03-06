from rest_framework import serializers
from .models import Producto
from .models import Comentario




class ComentarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comentario
        fields = ('user','producto','texto','date')

class SaveProductoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Producto
        fields = ('name', 'price', 'description', 'stok', 'img_url','tag_use')


class ProductoSerializer(serializers.ModelSerializer):
    coment=ComentarioSerializer(read_only=True, many=True)

    class Meta:
        model = Producto
        fields = ('pk', 'name', 'price', 'description', 'stok', 'img_url','tag_use','coment')


class ProductoCompraSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Producto
        fields = ('__all__')




