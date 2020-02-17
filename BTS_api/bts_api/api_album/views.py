from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Album
from .serializers import AlbumSerializer, AlbumCreateSerializer, AlbumDetailSerializer


class AlbumAPI(ListAPIView):
    serializer_class = AlbumSerializer

    def get_queryset(self):
        category = self.request.GET.get('category')
        response = Album.objects.select_related('category').prefetch_related('genre').all().order_by('created')
        return response.filter(category=category) if category else response


class AlbumDetailAPI(RetrieveAPIView):
    queryset = Album.objects.select_related('category').prefetch_related('genre').all()
    serializer_class = AlbumDetailSerializer


class AlbumCreateAPI(CreateAPIView):
    queryset = Album.objects.select_related('category').prefetch_related('genre').all()
    serializer_class = AlbumCreateSerializer

    def create(self, request, *args, **kwargs):
        return super(AlbumCreateAPI, self).create(request, *args, **kwargs)


class CommentAPI(APIView):

    def post(self, request):
        print(request.data)
        return Response(status=status.HTTP_200_OK)

    def put(self, request):
        print(request.data)
        return Response(status=status.HTTP_200_OK)
