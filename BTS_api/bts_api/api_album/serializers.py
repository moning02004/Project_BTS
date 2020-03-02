import json

from rest_framework import serializers

from .models import Album, Genre, Music, Category


class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = ('album', 'track', 'name', 'is_title')


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'thumbnail', 'title', 'created', 'category')


class AlbumDetailSerializer(serializers.ModelSerializer):
    genre = serializers.SerializerMethodField('get_genre')
    music_set = MusicSerializer(many=True, read_only=True)

    def get_genre(self, obj):
        return ','.join([x.keyword for x in obj.genre.all()])

    class Meta:
        model = Album
        fields = ('id', 'thumbnail', 'title', 'created', 'category', 'content', 'genre', 'music_set')


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
