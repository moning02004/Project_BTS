from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Album, Category, Genre
from .serializers import AlbumSerializer, AlbumCreateSerializer, AlbumDetailSerializer, AlbumCategorySerializer, \
    AlbumGenreSerializer


class AlbumAPI(ListAPIView):
    serializer_class = AlbumSerializer

    def get_queryset(self):
        category = self.request.GET.get('category')
        response = Album.objects.select_related('category').prefetch_related('genre').all().order_by('created')
        return response.filter(category=category) if category else response


class AlbumDetailAPI(RetrieveAPIView):
    queryset = Album.objects.select_related('category').prefetch_related('genre').all()
    serializer_class = AlbumDetailSerializer

    def get(self, request, *args, **kwargs):
        print(AlbumDetailSerializer())
        return super(AlbumDetailAPI,self).get(request, *args, **kwargs)


class AlbumCreateAPI(CreateAPIView):
    queryset = Album.objects.select_related('category').prefetch_related('genre').all()
    serializer_class = AlbumCreateSerializer

    def create(self, request, *args, **kwargs):
        return super(AlbumCreateAPI, self).create(request, *args, **kwargs)


class AlbumCategoryAPI(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = AlbumCategorySerializer


class AlbumGenreAPI(ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = AlbumGenreSerializer


class CommentAPI(APIView):

    def post(self, request):
        print(request.data)
        return Response(status=status.HTTP_200_OK)

    def put(self, request):
        print(request.data)
        return Response(status=status.HTTP_200_OK)
