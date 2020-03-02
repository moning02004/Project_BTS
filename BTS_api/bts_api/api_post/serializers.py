from rest_framework import serializers

from .models import Post, PostComment
from api_user.serializers import UserInfoSerializer


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = ('post', 'author', 'content', 'created')


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
    postcomment_set = CommentSerializer(read_only=True, many=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'content', 'created', 'postcomment_set')


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


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = ('post', 'author', 'content')

    def create(self, validated_data):
        return validated_data


class CommentUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = ('post', 'author', 'content')

    def update(self, instance, validated_data):
        content = validated_data.get('content')

        if content is not None:
            instance.content = content
        instance.save()
        return instance
