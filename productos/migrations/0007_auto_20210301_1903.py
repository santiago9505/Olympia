# Generated by Django 3.1.7 on 2021-03-02 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0006_auto_20210301_1832'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='tag_use',
            field=models.CharField(choices=[('Moda', 'Productos de moda'), ('Productos de limpieza', 'Productos de aseo personal'), ('Manufactura', 'Productos de manufactura')], max_length=50),
        ),
    ]
