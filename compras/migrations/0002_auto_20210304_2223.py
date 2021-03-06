# Generated by Django 3.1.7 on 2021-03-05 03:23

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('compras', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='compra',
            name='merchanID',
            field=models.IntegerField(default=921610),
        ),
        migrations.AlterField(
            model_name='compra',
            name='referenceCode',
            field=models.UUIDField(default=uuid.uuid4, editable=False),
        ),
    ]
