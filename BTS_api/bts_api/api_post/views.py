from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, CreateAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer
from rest_framework.views import APIView

from .models import Post, PostComment
from .serializers import PostCommentSerializer, PostListSerializer, PostDetailSerializer, PostUpdateSerializer, \
    PostCreateSerializer
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

            author = User.objects.get(pk=int(author))
            PostComment.objects.create()
            author.point += 5
            author.grade = 'Bronze' if 0 <= author.point < 100 else 'Silver' if 1000 <= author.point < 1000 else 'Gold'
            author.save()
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