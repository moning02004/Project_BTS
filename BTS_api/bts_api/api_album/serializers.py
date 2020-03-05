import json

from django.http import HttpResponseBadRequest
from rest_framework import serializers
from rest_framework.response import Response

from .models import Album, Music, AlbumComment, Like, Dislike, Police
from api_user.serializers import UserInfoSerializer


class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ('album', 'track', 'name', 'is_title')


class CommentLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('comment', 'author')

    def create(self, validated_data):
        comment = validated_data.get('comment')
        author = validated_data.get('author')

        if comment.dislike_set.filter(author=author).exists():
            raise serializers.ValidationError({"message": "Not allowed"})

        if not comment.like_set.filter(author=author).exists():
            Like.objects.create(comment=comment, author=author)
        else:
            Like.objects.get(comment=comment, author=author).delete()
            raise serializers.ValidationError({"message": "delete"})
        return validated_data


class CommentDislikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dislike
        fields = ('comment', 'author')

    def create(self, validated_data):
        comment = validated_data.get('comment')
        author = validated_data.get('author')

        if comment.like_set.filter(author=author).exists():
            raise serializers.ValidationError({"message": "Not allowed"})

        if not comment.dislike_set.filter(author=author).exists():
            Dislike.objects.create(comment=comment, author=author)
        else:
            Dislike.objects.get(comment=comment, author=author).delete()
            raise serializers.ValidationError({"message": "delete"})
        return validated_data


class CommentSerializer(serializers.ModelSerializer):
    author = UserInfoSerializer(read_only=True)
    like_set = CommentLikeSerializer(many=True, read_only=True)
    dislike_set = CommentDislikeSerializer(many=True, read_only=True)
    created = serializers.DateTimeField(format="%Y-%m-%d %H:%M")

    class Meta:
        model = AlbumComment
        fields = ('id', 'album', 'author', 'content', 'created', 'like_set', 'dislike_set')


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'thumbnail', 'title', 'created', 'category')


class AlbumDetailSerializer(serializers.ModelSerializer):
    genre = serializers.SerializerMethodField('get_genre')
    music_set = MusicSerializer(many=True, read_only=True)
    albumcomment_set = CommentSerializer(many=True, read_only=True)

    def get_genre(self, obj):
        return ','.join([x.keyword for x in obj.genre.all()])

    class Meta:
        model = Album
        fields = ('id', 'thumbnail', 'title', 'created', 'category', 'content', 'genre', 'music_set', 'albumcomment_set')


class AlbumCreateSerializer(serializers.ModelSerializer):
    genre = serializers.CharField(max_length=100)
    music_list = serializers.ListField()

    class Meta:
        model = Album
        fields = ('title', 'category', 'genre', 'created', 'content', 'music_list', 'thumbnail')

    def create(self, validated_data):
        title, category, genre, created, content, music_set, thumbnail = validated_data.values()
        album = Album.objects.create(
            thumbnail=thumbnail,
            title=title,
            content=content,
            created=created,
            category=category
        )
        album.genre.add(genre)

        music_set = json.loads(music_set[0])
        for x in music_set:
            x['album'] = album.id
            music = MusicSerializer(data=x)
            if music.is_valid():
                music.save()
        return validated_data


class AlbumUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'title', 'category', 'genre', 'created', 'content', 'music_set', 'thumbnail')

    def update(self, instance, validated_data):
        print(validated_data)
        for key, value in validated_data.items():
            print(key)
            if value is not None:
                if key not in ('genre', 'music_set'):
                    setattr(instance, key, value)
                elif key == "genre":
                    instance.genre.clear()
                    instance.genre.add(value)
                elif key == "music_set":
                    for x in value:
                        print(x)
                        x['album'] = instance.id
                        music = MusicSerializer(data=x)
                        if music.is_valid():
                            print()
        instance.save()
        return instance


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumComment
        fields = ('album', 'author', 'content')

    def create(self, validated_data):
        album, author, content = validated_data.values()
        AlbumComment.objects.create(album=album, author=author, content=content)
        author.point += 5
        author.save()
        return validated_data


class CommentUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumComment
        fields = ('id', 'album', 'author', 'content')

    def update(self, instance, validated_data):
        content = validated_data.get('content')

        if content is not None:
            instance.content = content
        instance.save()
        return instance


class CommentPoliceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Police
        fields = ('id', 'comment', 'author', 'reason', 'admin_confirm')

    def create(self, validated_data):
        comment = validated_data.get('comment')
        author = validated_data.get('author')
        reason = validated_data.get('reason')

        if not comment.police_set.filter(author=author).exists():
            Police.objects.create(comment=comment, author=author, reason=reason)
        else:
            raise serializers.ValidationError({"message": "Not allowed"})
        return validated_data


class PoliceUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Police
        fields = ('id', 'comment', 'author', 'reason', 'admin_confirm')

    def update(self, instance, validated_data):
        instance.admin_confirm = True
        instance.save()
        return instance


class PoliceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Police
        fields = ('id', 'comment', 'author', 'reason', 'created')


class PoliceHandleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Police
        fields = ('id', 'comment', 'author', 'reason')

    def update(self, instance, validated_data):
        print(instance)
        comment = instance.comment
        comment.delete()
        return instance
