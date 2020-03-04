from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, CreateAPIView, UpdateAPIView, \
    DestroyAPIView
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer
from rest_framework.views import APIView

from .models import Album, Category, Genre, AlbumComment, Like, Police
from .serializers import AlbumSerializer, AlbumCreateSerializer, AlbumDetailSerializer, CommentSerializer, \
    CommentCreateSerializer, CommentUpdateSerializer, \
    CommentLikeSerializer, CommentDislikeSerializer, CommentPoliceSerializer, PoliceSerializer


class AlbumAPI(ListAPIView):
    serializer_class = AlbumSerializer

    def get_queryset(self):
        category = self.request.GET.get('category')
        response = Album.objects.select_related('category').prefetch_related('genre').all().order_by('created')
        return response.filter(category=category) if category else response


class AlbumDetailAPI(RetrieveAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumDetailSerializer


class AlbumCreateAPI(CreateAPIView):
    queryset = Album.objects.select_related('category').prefetch_related('genre').all()
    serializer_class = AlbumCreateSerializer

    def create(self, request, *args, **kwargs):
        return super(AlbumCreateAPI, self).create(request, *args, **kwargs)


class AlbumCommentAPI(ListAPIView):
    queryset = AlbumComment.objects.all()
    serializer_class = CommentSerializer


class AlbumCommentCreateAPI(CreateAPIView):
    queryset = AlbumComment.objects.all()
    serializer_class = CommentCreateSerializer

    def create(self, request, *args, **kwargs):
        return super(AlbumCommentCreateAPI, self).create(request, *args, **kwargs)


class CommentUpdateAPI(RetrieveAPIView, UpdateAPIView):
    queryset = AlbumComment.objects.all()
    serializer_class = CommentUpdateSerializer

    def partial_update(self, request, *args, **kwargs):
        return super(CommentUpdateAPI, self).partial_update(request, *args, **kwargs)


class CommentDestroyAPI(DestroyAPIView):
    queryset = AlbumComment.objects.all()
    serializer_class = ModelSerializer


class CommentLikeAPI(CreateAPIView):
    queryset = AlbumComment.objects.all()
    serializer_class = CommentLikeSerializer

    def create(self, request, *args, **kwargs):
        response = super(CommentLikeAPI, self).create(request, *args, **kwargs)
        return Response({'message': 'create'})


class CommentDislikeAPI(CreateAPIView):
    queryset = AlbumComment.objects.all()
    serializer_class = CommentDislikeSerializer

    def create(self, request, *args, **kwargs):
        super(CommentDislikeAPI, self).create(request, *args, **kwargs)
        return Response({'message': 'create'})


class CommentPoliceAPI(CreateAPIView):
    queryset = AlbumComment.objects.all()
    serializer_class = CommentPoliceSerializer

    def create(self, request, *args, **kwargs):
        super(CommentPoliceAPI, self).create(request, *args, **kwargs)
        return Response({'message': 'create'})


class PoliceAPI(ListAPIView):
    queryset = Police.objects.all()
    serializer_class = PoliceSerializer
