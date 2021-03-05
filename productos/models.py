from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Producto(models.Model):
    name=models.CharField(max_length=50)

    price=models.CharField(max_length=10)

    currency=models.CharField(max_length=3, default='USD')

    description=models.TextField()

    stok=models.CharField(max_length=10)

    img_url=models.ImageField(upload_to='./productos/images',)

    product_choices=[
        ('Moda','Productos de Moda'),
        ('Limpieza', 'Productos de Limpieza'),
        ('Manufactura','Productos de Manufactura')
    ]
    tag_use=models.CharField(choices=product_choices, max_length=50)
    
    

    def __str__(self):
        return self.name


class Comentario(models.Model):

    user=models.ForeignKey(User, on_delete=models.CASCADE)
    producto=models.ForeignKey(Producto, related_name='coment', on_delete=models.CASCADE)
    texto=models.CharField(max_length=300)
    date=models.DateField(auto_now_add=True)

    def __str__(self):
        return self.texto


class Cupones(models.Model):

    cupon_name=models.CharField(max_length=10)
    descuento=models.DecimalField(max_digits=5,decimal_places=2, default=0.00)


