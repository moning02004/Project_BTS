from rest_framework import serializers

from .models import Post, PostComment


class PostSerializer(serializers.ModelSerializer):
    count_comment = serializers.SerializerMethodField('count', read_only=True)
    username = serializers.SerializerMethodField('author', read_only=True)

    def count(self, obj):
        return len(obj.postcomment_set.all())

    def author(self, obj):
        return obj.author.nickname

    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'updated', 'username', 'count_comment')


class PostCommentSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('author', read_only=True)

    def author(self, obj):
        return obj.author.nickname

    class Meta:
        model = PostComment
        fields = ('id', 'username', 'content', 'updated')