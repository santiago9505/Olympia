from rest_framework import serializers
from .models import Compra

from users.serializers import UserSerializer




class CompraSerializer(serializers.ModelSerializer):

    data_user=UserSerializer(read_only=True)
    class Meta:
        model=Compra
        fields=('pk',
        'shippingAddres',
        'shippingCity',
        'shippingCountry',
        'currency',
        'signature',
        'tax',
        'taxReturnBase',
        'merchanID',
        'referenceCode','data_user')