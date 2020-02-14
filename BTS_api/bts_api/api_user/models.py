from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    username = models.EmailField(unique=True, null=False, blank=False)
    nickname = models.CharField(max_length=50)
    grade = models.CharField(max_length=10, default='Bronze')
    point = models.SmallIntegerField(default=0)
