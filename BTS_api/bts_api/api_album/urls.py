from django.urls import path

from . import views

urlpatterns= [
    path('', views.AlbumAPI.as_view()),  # get
    path('<int:pk>/', views.AlbumDetailAPI.as_view()),  # get
    path('register/', views.AlbumCreateAPI.as_view()),  # post
    path('edit/<int:pk>/', views.AlbumAPI.as_view()),  # patch
    path('detail/<int:pk>/', views.AlbumAPI.as_view()),  # get
    path('delete/', views.AlbumAPI.as_view()),  # delete

    path('comment/register/', views.AlbumCommentCreateAPI.as_view()),
    path('comment/edit/<int:pk>/', views.CommentUpdateAPI.as_view()),
    path('comment/delete/<int:pk>/', views.CommentDestroyAPI.as_view()),

    path('comment/like/', views.CommentLikeAPI.as_view()),
    path('comment/dislike/', views.CommentDislikeAPI.as_view()),
    path('comment/police/', views.CommentPoliceAPI.as_view()),

    path('police/', views.PoliceAPI.as_view()),
]
