from rest_framework import serializers
from .models import Compra
from django.contrib.auth.models import User
from productos.models import Producto

from users.serializers import UserCreateSerializer
from users.serializers import UserCompraSerializer
from productos.serializers import ProductoCompraSerializer, ProductoSerializer



class OrdenCompraSerializer(serializers.ModelSerializer):
    price=serializers.ReadOnlyField(source='product.price')
    product_name=serializers.ReadOnlyField(source='product.name')
    user_name=serializers.ReadOnlyField(source='user.username')
    last_name=serializers.ReadOnlyField(source='user.last_name')
    user_email=serializers.ReadOnlyField(source='user.email')
    phone_number=serializers.ReadOnlyField(source='profile.phone_number')
    city=serializers.ReadOnlyField(source='profile.city')
    country=serializers.ReadOnlyField(source='profile.country')
    shippingAddres=serializers.ReadOnlyField(source='profile.shippingAddres')

    zip_code=serializers.ReadOnlyField(source='profile.zip_code')

    class Meta:
        model=Compra
        fields=('product',
        'merchanID',
        'referenceCode',
        'price',
        'product_name',
        'user_name',
        'last_name',
        'user_email',
        'phone_number',
        'city',
        'country',
        'shippingAddres',
        'zip_code')
