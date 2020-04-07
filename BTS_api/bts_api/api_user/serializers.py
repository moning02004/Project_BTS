from rest_framework import serializers

from .models import User


class UserListSerializer(serializers.ModelSerializer):
    def get_author(self, obj):
        return obj.author.nickname

    class Meta:
        model = User
        fields = ('id', 'username', 'nickname', 'grade', 'point')


class UserCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', )


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'nickname')

    def create(self, validated_data):
        user = User()
        user.set_attr(validated_data)
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


class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'nickname', 'grade', 'point')