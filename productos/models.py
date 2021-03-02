from django.db import models

# Create your models here.
class Producto(models.Model):
    Name=models.CharField(max_length=50)

    price=models.CharField(max_length=10)

    description=models.TextField()

    stok=models.CharField(max_length=10)

    img_url=models.ImageField(upload_to='productos/images',)

    product_choices=[
        ('Moda','Productos de Moda'),
        ('Limpieza', 'Productos de Limpieza'),
        ('Manufactura','Productos de Manufactura')
    ]
    tag_use=models.CharField(choices=product_choices, max_length=50)
    
    

    def __str__(self):
        return self.name