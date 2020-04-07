from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    username = models.EmailField(unique=True, null=False, blank=False)
    nickname = models.CharField(max_length=50)
    grade = models.CharField(max_length=10, default='Bronze')
    point = models.SmallIntegerField(default=0)

    def __str__(self):
        return self.username

    def set_attr(self, validated_data):
        for key, value in validated_data.items():
            setattr(self, key, value) if key != 'password' else self.set_password(value)
