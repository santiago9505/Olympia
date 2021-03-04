from django.db import models
from django.contrib.auth.models import User
from users.models import Profile
from productos.models import Producto
# Create your models here.

class Compra(models.Model):

    #data of product

    product=models.ForeignKey(Producto, related_name='data_product', on_delete=models.CASCADE)

    # description=models.CharField(max_length=255)
    # amount=models.DecimalField(max_digits=14, decimal_places=2)

    #data of buyer-->user
    user=models.ForeignKey(User,related_name='data_user', on_delete=models.CASCADE)
    # accountID=models.IntegerField(max_length=6)
    # buyerFullName=models.CharField(max_length=120)
    # buyerEmail=models.EmailField(max_length=255)
    profile=models.ForeignKey(Profile, related_name='data_profile', on_delete=models.CASCADE)

    #telephone=models.CharField(max_length=20, requiered=True)

    #data of purchase
    shippingAddres=models.CharField(max_length=255)
    shippingCity=models.CharField(max_length=50 )
    shippingCountry=models.CharField(max_length=50)
    currency=models.CharField(max_length=3)
    signature=models.CharField(max_length=255)
    tax=models.DecimalField(max_digits=14, decimal_places=2)
    taxReturnBase=models.DecimalField(max_digits=32,decimal_places=2, default=0)
    merchanID=models.IntegerField()
    referenceCode=models.CharField(max_length=255)



    

