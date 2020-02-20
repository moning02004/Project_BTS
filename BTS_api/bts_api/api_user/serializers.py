from rest_framework import serializers

from .models import User


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'nickname')

    def create(self, validated_data):
        username = validated_data.get('username')
        nickname = validated_data.get('nickname')

        user = User(username=username, nickname=nickname)
        user.set_password(validated_data.get('password'))
        user.save()
        return validated_data


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'username', 'password', 'nickname')

    def update(self, instance, validated_data):
        nickname = validated_data.get('nickname')
        password = validated_data.get('password')

        if nickname is not None:
            instance.nickname = nickname
        if password is not None:
            instance.set_password(password)
        return instance
