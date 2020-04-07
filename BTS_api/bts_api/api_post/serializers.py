from rest_framework import serializers

from api_user.serializers import UserInfoSerializer
from .models import Post, PostComment, PostPoint


class CommentSerializer(serializers.ModelSerializer):
    author = UserInfoSerializer(read_only=True)
    created = serializers.DateTimeField(format="%Y-%m-%d %H:%M")

    class Meta:
        model = PostComment
        fields = ('id', 'post', 'author', 'content', 'created')


class PostListSerializer(serializers.ModelSerializer):
    count_comment = serializers.SerializerMethodField('count', read_only=True)
    author = UserInfoSerializer(read_only=True)
    created = serializers.DateTimeField(format="%Y-%m-%d %H:%M")

    def count(self, obj):
        return len(obj.postcomment_set.all())

    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'created', 'author', 'count_comment')


class PostDetailSerializer(serializers.ModelSerializer):
    author = UserInfoSerializer(read_only=True)
    postcomment_set = serializers.SerializerMethodField('get_post_comment')
    created = serializers.DateTimeField(format="%Y-%m-%d %H:%M")

    def get_post_comment(self, instance):
        return CommentSerializer(instance.postcomment_set.all().order_by('-created'), read_only=True, many=True).data

    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'content', 'created', 'postcomment_set')


class PostUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'content')

    def update(self, instance, validated_data):
        instance.set_attr(validated_data)
        instance.save()
        return instance


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'content')

    def create(self, validated_data):
        post = Post()
        post.set_attr(validated_data)
        post.save()

        author = post.author
        PostPoint.objects.create(user=author, point=10, reason=f"{post.title}의 게시글 작성")

        author.point += 10
        author.save()
        return validated_data


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComment
        fields = ('post', 'author', 'content')

    def create(self, validated_data):
        post = validated_data.get('post')
        author = validated_data.get('author')
        content = validated_data.get('content')

        PostComment.objects.create(post=post, author=author, content=content)
        PostPoint.objects.create(user=author, point=5, reason=f"{post.title}의 댓글 작성")
        author.point += 5
        author.save()
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


class PointListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostPoint
        fields = ('id', 'user', 'point')
