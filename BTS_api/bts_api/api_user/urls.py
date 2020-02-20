from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from . import views

urlpatterns= [
    path('login/', obtain_jwt_token),
    path('register/', views.UserRegisterAPI.as_view()),
    path('check/', views.UserCheckAPI.as_view()),
    path('edit/<int:pk>/', views.UserUpdateAPI.as_view()),
    path('delete/<int:pk>/', views.UserUpdateAPI.as_view())
]
