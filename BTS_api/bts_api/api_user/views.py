from rest_framework import viewsets
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer

from .models import User
from .serializers import UserRegisterSerializer, UserUpdateSerializer, UserCheckSerializer, UserInfoSerializer, \
    UserListSerializer


class UserCheckAPI(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserCheckSerializer

    def post(self, request):
        username = request.data.get('username')
        try:
            User.objects.get(username=username)
            return Response({'message': 'Error'})
        except:
            return Response({'message': 'OK'})


class UserListViewSet(viewsets.ModelViewSet):

    def get_queryset(self):
        return User.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return UserListSerializer
        elif self.action == 'create':
            return UserRegisterSerializer


class UserDetailViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return User.objects.none if self.kwargs.get('pk') != self.request.user.id else User.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return UserInfoSerializer
        elif self.action == 'partial_update':
            return UserUpdateSerializer
        elif self.action == 'destroy':
            return ModelSerializer
