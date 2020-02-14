from django.urls import path

from . import views


urlpatterns = [
    path('', views.PostAPI.as_view()),  # get
    path('<int:pk>/', views.PostAPI.as_view()),  # get
    path('new/', views.PostAPI.as_view()),  # post
    path('edit/<int:pk>/', views.PostAPI.as_view()),  # put
    path('delete/', views.PostAPI.as_view()),  # delete

    path('<int:pk>/comment/', views.CommentAPI.as_view()),  # get (param : page)
    path('<int:pk>/comment/new/', views.CommentAPI.as_view()),  # post
    path('<int:pk>/comment/delete/', views.CommentAPI.as_view()),  # delete
]
