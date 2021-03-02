
#Django imports
from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Profile(models.Model):
    """ Profile model 
    Proxy model that extends the base data with more info
    """

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    phone_prefix_choices = [
        ('MX', '+52'),
        ('CO', '+57'),
        ('PE', '+51'),
    ]

    phone_prefix = models.CharField(max_length=4, blank=True)


    phone_number = models.CharField(max_length=20, blank=True)

    picture = models.ImageField(
        upload_to = 'users/pictures',
        blank = True,
        null = True 
    )

    birthday = models.DateField(blank=True)

    gender_choices = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('undefined', 'Prefer not to say'),
        ('empty', ''),
    ]

    gender = models.CharField(
        max_length=20,
        choices=gender_choices,
        default='empty', 
        blank=True,

    )

    notifications = models.BooleanField()



    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)


    def __str__(self):
        """Return username"""
        return self.user.username

    
