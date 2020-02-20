from rest_framework import status
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.mixins import UpdateModelMixin
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User
from .serializers import UserRegisterSerializer, UserUpdateSerializer


class UserRegisterAPI(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer

    def create(self, request, *args, **kwargs):
        return super(UserRegisterAPI, self).create(request, *args, **kwargs)


class UserUpdateAPI(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserUpdateSerializer

    def partial_update(self, request, *args, **kwargs):
        return super(UserUpdateAPI, self).partial_update(request, *args, **kwargs)