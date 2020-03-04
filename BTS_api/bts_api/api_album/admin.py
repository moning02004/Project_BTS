from django.contrib import admin

from .models import Album, Genre, AlbumComment, Category, Dislike, Like, Music, Police

admin.site.register(Genre)
admin.site.register(Album)
admin.site.register(AlbumComment)
admin.site.register(Category)
admin.site.register(Dislike)
admin.site.register(Like)
admin.site.register(Music)
admin.site.register(Police)
