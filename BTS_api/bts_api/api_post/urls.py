from django.urls import path

from . import views


urlpatterns = [
    path('', views.PostAPI.as_view()),  # get
    path('<int:pk>/', views.PostDetailAPI.as_view()),  # get
    path('register/', views.PostCreateAPI.as_view()),  # post
    path('edit/<int:pk>/', views.PostUpdateAPI.as_view()),  # patch
    path('delete/<int:pk>/', views.PostDestroyAPI.as_view()),  # delete

    path('<int:pk>/comment/', views.CommentAPI.as_view()),  # get (param : page)
    path('<int:pk>/comment/new/', views.CommentAPI.as_view()),  # post
    path('<int:pk>/comment/delete/', views.CommentAPI.as_view()),  # delete
]
