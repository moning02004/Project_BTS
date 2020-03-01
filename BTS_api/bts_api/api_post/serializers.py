from rest_framework import serializers

from .models import Post, PostComment
from api_user.serializers import UserInfoSerializer


class PostListSerializer(serializers.ModelSerializer):
    count_comment = serializers.SerializerMethodField('count', read_only=True)
    author = serializers.SerializerMethodField('get_author', read_only=True)

    def count(self, obj):
        return len(obj.postcomment_set.all())

    def get_author(self, obj):
        return obj.author.nickname

    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'created', 'author', 'count_comment')


class PostDetailSerializer(serializers.ModelSerializer):
    author = UserInfoSerializer(read_only=True)
    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'content', 'created')


class PostUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'content')

    def update(self, instance, validated_data):
        title = validated_data.get('title')
        content = validated_data.get('content')

        if title is not None:
            instance.title = title
        if content is not None:
            instance.content = content
        instance.save()
        return instance


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'content')

    def create(self, validated_data):
        title, author, content = validated_data.values()
        Post.objects.create(title=title, author=author, content=content)
        return validated_data


class PostDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('__all__', )


class PostCommentSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('author', read_only=True)

    def author(self, obj):
        return obj.author.nickname

    class Meta:
        model = PostComment
        fields = ('id', 'username', 'content', 'updated')