from django.db import models
from django.contrib.auth.models import User
from users.models import Profile
from productos.models import Producto
# Create your models here.

class Compra(models.Model):

    #data of product

    product=models.ForeignKey(Producto, related_name='data_product', on_delete=models.CASCADE)

    cantidad=models.PositiveIntegerField()
    # description=models.CharField(max_length=255)
    # amount=models.DecimalField(max_digits=14, decimal_places=2)

    #data of buyer-->user
    user=models.ForeignKey(User,related_name='data_user', on_delete=models.CASCADE)
    # accountID=models.IntegerField(max_length=6)
    # buyerFullName=models.CharField(max_length=120)
    # buyerEmail=models.EmailField(max_length=255)
    profile=models.ForeignKey(Profile, related_name='data_profile', on_delete=models.CASCADE)

    #producto modena

    merchanID=models.IntegerField(default=12345)

    referenceCode=models.CharField(max_length=30, default='esteesuncodigode')



    

