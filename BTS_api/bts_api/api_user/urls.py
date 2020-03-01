from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from . import views

urlpatterns= [
    path('', views.UserAPI.as_view()),  # get
    path('signin/', obtain_jwt_token),
    path('signup/', views.UserRegisterAPI.as_view()),
    path('profile/<int:pk>/', views.UserInfoAPI.as_view()),
    path('check/', views.UserCheckAPI.as_view()),
    path('edit/<int:pk>/', views.UserUpdateAPI.as_view()),
    path('delete/<int:pk>/', views.UserDestroyAPI.as_view())
]
