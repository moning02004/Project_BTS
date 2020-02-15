from django.contrib.auth import get_user_model
from django.db import models


def file_path(instance, filename):
    return '{}/{}/{}'.format(instance.category.name, instance.title, filename)


class Category(models.Model):
    keyword = models.CharField(max_length=10, primary_key=True)


class Genre(models.Model):
    keyword = models.CharField(max_length=10, primary_key=True)


class Album(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    genre = models.ManyToManyField(Genre, through='ByGenre', through_fields=('album', 'genre'))

    thumbnail = models.ImageField(upload_to=file_path, null=True, blank=True)
    title = models.CharField(max_length=150)
    created = models.DateTimeField(null=False, blank=False)
    content = models.TextField()


class Music(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    track = models.SmallIntegerField(default=1)
    name = models.CharField(max_length=100)
    is_title = models.BooleanField(default=False)


class AlbumComment(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)


class Police(models.Model):
    comment = models.ForeignKey(AlbumComment, on_delete=models.CASCADE)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    reason = models.TextField()
    created = models.DateTimeField(auto_now_add=True)


class Dislike(models.Model):
    comment = models.ForeignKey(AlbumComment, on_delete=models.CASCADE)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)


class like(models.Model):
    comment = models.ForeignKey(AlbumComment, on_delete=models.CASCADE)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)


class ByGenre(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
