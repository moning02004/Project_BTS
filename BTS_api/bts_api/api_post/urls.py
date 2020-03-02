from django.urls import path

from . import views


urlpatterns = [
    path('', views.PostAPI.as_view()),  # get
    path('<int:pk>/', views.PostDetailAPI.as_view()),  # get
    path('register/', views.PostCreateAPI.as_view()),  # post
    path('edit/<int:pk>/', views.PostUpdateAPI.as_view()),  # patch
    path('delete/<int:pk>/', views.PostDestroyAPI.as_view()),  # delete

    path('comment/register/', views.CommentCreateAPI.as_view()),
    path('comment/edit/<int:pk>/', views.CommentUpdateAPI.as_view()),
    path('comment/delete/<int:pk>/', views.CommentDestroyAPI.as_view()),
]
