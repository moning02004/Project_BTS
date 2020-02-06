from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User


class UserRegisterAPI(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        nickname = request.data.get('nickname')

        print(request.data)
        # username check button
        if password is None:
            stat = status.HTTP_400_BAD_REQUEST if User.objects.filter(username=username).exists() else status.HTTP_200_OK
        else:
            user = User.objects.create(username=username, nickname=nickname)
            user.set_password(password)
            user.save()
            stat = status.HTTP_200_OK
        return Response(status=stat)

    def put(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        nickname = request.data.get('nickname')

        user = User.objects.get(username=username)
        if password is not None:
            user.set_password(password)
        elif nickname is not None:
            user.nickname = nickname
        user.save()

        return Response(status=status.HTTP_200_OK)
