from django.contrib import admin

from .models import PostComment, Post, PostPoint

admin.site.register(Post)
admin.site.register(PostComment)
admin.site.register(PostPoint)