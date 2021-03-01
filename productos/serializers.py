from rest_framework import serializers
from .models import Producto

class ProductoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Producto
        fields = ('pk', 'name', 'price', 'description', 'stock', 'img_url','tag_use')