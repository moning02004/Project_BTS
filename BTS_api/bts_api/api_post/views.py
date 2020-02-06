from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Post, PostComment
from .serializers import PostSerializer, PostCommentSerializer
from api_user.models import User


class PostAPI(APIView):

    def get(self, request, pk=None):
        post_list = Post.objects.select_related('author').all().order_by('updated').reverse()
        if pk is not None:
            post_list = post_list.filter(pk=int(pk))

        response = list()
        for x in post_list:
            response.append(PostSerializer(x).data)
        return Response(response, status=status.HTTP_200_OK)

    def post(self, request):
        try:
            title = request.data.get('title')
            author = request.data.get('author')
            content = request.data.get('content')

            Post.objects.create(
                title=title,
                content=content,
                author=User.objects.get(pk=int(author))
            )
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            post = Post.objects.get(pk=int(pk))
            post.title = request.data.get('title')
            post.content = request.data.get('content')
            post.save()
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        assert pk is not None

        try:
            Post.objects.get(pk=int(pk)).delete()
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)


class CommentAPI(APIView):

    def get(self, request, pk=None):
        assert request.GET.get('page') is not None

        page = int(request.GET.get('page'))

        post = Post.objects.select_related('author').get(pk=int(pk))
        post_list = post.postcomment_set.all().order_by('updated').reverse()
        post_list = post_list[(page-1)*5:page*5]

        response = list()
        for x in post_list:
            response.append(PostCommentSerializer(x).data)

        return Response(response, status=status.HTTP_200_OK)

    def post(self, request, pk=None):
        try:
            post = request.data.get('post')
            author = request.data.get('author')
            content = request.data.get('content')

            PostComment.objects.create(
                post=Post.objects.get(pk=int(post)),
                author=User.objects.get(pk=author),
                content=content
            )
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        assert pk is not None

        try:
            PostComment.objects.get(pk=pk).delete()
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)