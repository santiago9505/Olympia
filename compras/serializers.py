from rest_framework import serializers
from .models import Compra

from users.serializers import UserSerializer
from users.serializers import UserCompraSerializer
from productos.serializers import ProductoCompraSerializer




class OrdenCompraSerializer(serializers.ModelSerializer):

    data_user=UserCompraSerializer(read_only=True)
    data_product=ProductoCompraSerializer(read_only=True)

    class Meta:
        model=Compra
        fields=(
        'data_product',
        'cantidad',
        'data_user')