from django.urls import path

from . import views


urlpatterns = [
    path('', views.AlbumAPI.as_view()),  # get
    path('<int:pk>/', views.AlbumDetailAPI.as_view()),  # get
    path('register/', views.AlbumCreateAPI.as_view()),  # post
    # path('edit/<int:pk>/', views.AlbumUpdateAPI.as_view()),  # patch
    path('delete/<int:pk>/', views.AlbumDestroyAPI.as_view()),  # delete

    path('comment/register/', views.AlbumCommentCreateAPI.as_view()),
    path('comment/edit/<int:pk>/', views.CommentUpdateAPI.as_view()),
    path('comment/delete/<int:pk>/', views.CommentDestroyAPI.as_view()),

    path('comment/like/register/', views.CommentLikeAPI.as_view()),
    path('comment/dislike/register/', views.CommentDislikeAPI.as_view()),
    path('comment/police/register/', views.CommentPoliceAPI.as_view()),

    path('comment/police/handle/<int:pk>/', views.CommentPoliceHandleAPI.as_view()),
    path('comment/police/confirm/<int:pk>/', views.CommentPoliceConfirmAPI.as_view()),
    path('comment/police/delete/<int:pk>/', views.PoliceDestroyAPI.as_view()),
    path('comment/police/', views.PoliceAPI.as_view()),
    path('comment/police/<int:pk>/', views.PoliceDetailAPI.as_view()),
]
