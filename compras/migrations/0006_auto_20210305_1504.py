# Generated by Django 3.1.7 on 2021-03-05 20:04

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('compras', '0005_auto_20210305_1503'),
    ]

    operations = [
        migrations.AlterField(
            model_name='compra',
            name='referenceCode',
            field=models.CharField(blank=True, default=uuid.uuid4, max_length=40, unique=True),
        ),
    ]
