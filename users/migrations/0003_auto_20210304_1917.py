# Generated by Django 3.1.7 on 2021-03-05 00:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20210303_0225'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='shippingAddres',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='profile',
            name='shippingCity',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='profile',
            name='shippingCountry',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='profile',
            name='notifications',
            field=models.BooleanField(default=True),
        ),
    ]