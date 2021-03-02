from django.db import models
from productos.models import Producto


# Create your models here.
class Comentario(models.Model):

    fk_producto=models.ForeignKey()
    text_comentario=models.CharField(max_length=250)
    date_publication=models.DateField(auto_now=True)

    def __str__(self):
        return self.name