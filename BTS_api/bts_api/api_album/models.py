from django.contrib.auth import get_user_model
from django.db import models

from api_user.models import User


def file_path(instance, filename):
    return 'thumbnail/{}'.format(filename)


class Category(models.Model):
    keyword = models.CharField(max_length=20, primary_key=True)


class Genre(models.Model):
    keyword = models.CharField(max_length=20, primary_key=True)


class Album(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    genre = models.ManyToManyField(Genre, through='ByGenre', through_fields=('album', 'genre'))

    thumbnail = models.ImageField(upload_to=file_path, null=True, blank=True)
    title = models.CharField(max_length=150)
    created = models.DateField(null=False, blank=False)
    content = models.TextField()

    def __str__(self):
        return self.title


class Music(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    track = models.SmallIntegerField(default=1)
    name = models.CharField(max_length=100)
    is_title = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class AlbumComment(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)


class Police(models.Model):
    comment = models.ForeignKey(AlbumComment, on_delete=models.CASCADE)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    reason = models.TextField()
    admin_confirm = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)


class Dislike(models.Model):
    comment = models.ForeignKey(AlbumComment, on_delete=models.CASCADE)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)


class Like(models.Model):
    comment = models.ForeignKey(AlbumComment, on_delete=models.CASCADE)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)


class ByGenre(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
