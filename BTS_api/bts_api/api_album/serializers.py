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
    music_set = serializers.ListField()

    def create(self, validated_data):
        thumbnail, title, content, created, category, genre, music_set = validated_data.values()
        print(title, music_set)
        for x in music_set:
            x['album'] = 4
            music = MusicSerializer(data=x)
            if music.is_valid():
                print(music.data)
        return validated_data

    class Meta:
        model = Album
        fields = ('thumbnail', 'title', 'content', 'created', 'category', 'genre', 'music_set')
