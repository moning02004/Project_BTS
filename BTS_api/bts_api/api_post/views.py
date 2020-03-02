from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, CreateAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer
from rest_framework.views import APIView

from .models import Post, PostComment
from .serializers import PostListSerializer, PostDetailSerializer, PostUpdateSerializer, \
    PostCreateSerializer, CommentCreateSerializer, CommentUpdateSerializer
from api_user.models import User


class PostAPI(ListAPIView):
    serializer_class = PostListSerializer

    def get_queryset(self):
        return Post.objects.all().order_by('created').reverse()


class PostDetailAPI(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer


class PostUpdateAPI(RetrieveAPIView, UpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostUpdateSerializer

    def partial_update(self, request, *args, **kwargs):
        return super(PostUpdateAPI, self).partial_update(request, *args, **kwargs)


class PostCreateAPI(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostCreateSerializer

    def create(self, request, *args, **kwargs):
        return super(PostCreateAPI, self).create(request, *args, **kwargs)


class PostDestroyAPI(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = ModelSerializer


class CommentCreateAPI(CreateAPIView):
    queryset = PostComment.objects.all()
    serializer_class = CommentCreateSerializer

    def create(self, request, *args, **kwargs):
        return super(CommentCreateAPI, self).create(request, *args, **kwargs)


class CommentUpdateAPI(RetrieveAPIView, UpdateAPIView):
    queryset = PostComment.objects.all()
    serializer_class = CommentUpdateSerializer

    def partial_update(self, request, *args, **kwargs):
        return super(CommentUpdateAPI, self).partial_update(request, *args, **kwargs)


class CommentDestroyAPI(DestroyAPIView):
    queryset = PostComment.objects.all()
    serializer_class = ModelSerializer