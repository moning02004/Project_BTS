from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class AlbumAPI(APIView):

    def get(self, request):
        print(request.data)
        return Response(status=status.HTTP_200_OK)

    def post(self, request):
        print(request.data)
        return Response(status=status.HTTP_200_OK)

    def put(self, request):
        print(request.data)
        return Response(status=status.HTTP_200_OK)

    def delete(self, request):
        print(request.data)
        return Response(status=status.HTTP_200_OK)


class CommentAPI(APIView):

    def post(self, request):
        print(request.data)
        return Response(status=status.HTTP_200_OK)

    def put(self, request):
        print(request.data)
        return Response(status=status.HTTP_200_OK)
