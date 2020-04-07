from rest_framework import viewsets
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, CreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.serializers import ModelSerializer

from .models import Post, PostComment, PostPoint
from .serializers import PostListSerializer, PostDetailSerializer, PostUpdateSerializer, \
    PostCreateSerializer, CommentCreateSerializer, CommentUpdateSerializer, PointListSerializer


class PostListViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Post.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return PostListSerializer
        elif self.action == 'create':
            if self.request.user.id == int(self.request.POST.get('author')):
                return PostCreateSerializer
        self.permission_denied(self.request)


class PostDetailViewSet(viewsets.ModelViewSet):

    def get_queryset(self):
        return Post.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return PostDetailSerializer
        elif self.action == 'partial_update':
            return PostUpdateSerializer
        elif self.action == 'destroy':
            return ModelSerializer


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


class PointAPI(ListAPIView):
    queryset = PostPoint.objects.all()
    serializer_class = PointListSerializer
