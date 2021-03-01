from django.db import models

# Create your models here.
class Producto(models.Model):
    Name=models.CharField(max_length=50)

    price=models.FloatField()

    description=models.TextField()

    stok=models.IntegerField()

    img_url=models.ImageField(upload_to='productos/images')

    product_choices=[
        ('moda','Productos de moda'),
        ('aseo', 'Productos de aseo personal')
        ('manufactura','Productos de manufactura')
    ]
    tag_use=models.CharField(choices=product_choices)
    
    

    def __str__(self):
        return self.name