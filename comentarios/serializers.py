from rest_framework import serializers
from .models import Comentario

class ComentarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comentario
        fields = ('pk', 'fk_user','fk_producto','text_comentario','date_publication')