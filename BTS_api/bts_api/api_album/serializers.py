import json

from rest_framework import serializers

from .models import Album, Genre, Music, Category, AlbumComment


class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ('album', 'track', 'name', 'is_title')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumComment
        fields = ('album', 'author', 'content', 'created')


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


class AlbumGenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('keyword', )


class AlbumCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('keyword',)


class AlbumCreateSerializer(serializers.ModelSerializer):
    genre = serializers.CharField(max_length=100)
    music_list = serializers.ListField()

    class Meta:
        model = Album
        fields = ('thumbnail', 'title', 'content', 'created', 'category', 'genre', 'music_list')

    def create(self, validated_data):
        thumbnail, title, content, created, category, genre, music_list = validated_data.values()
        album = Album.objects.create(
            thumbnail=thumbnail,
            title=title,
            content=content,
            created=created,
            category=category
        )
        album.genre.add(genre)

        music_list = json.loads(music_list[0])
        for x in music_list:
            x['album'] = album.id
            music = MusicSerializer(data=x)
            if music.is_valid():
                music.save()
        return validated_data


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumComment
        fields = ('album', 'author', 'content')

    def create(self, validated_data):
        album, author, content = validated_data.values()
        AlbumComment.objects.create(album=album, author=author, content=content)
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