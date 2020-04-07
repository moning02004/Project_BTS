from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

from . import views

user_list = views.UserListViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
user_detail = views.UserDetailViewSet.as_view({
    'get': 'retrieve',
    'patch': 'partial_update',
    'delete': 'destroy',
})

urlpatterns = [
    path('', user_list),
    path('<int:pk>/', user_detail),
    path('signin/', obtain_jwt_token),
    path('refresh/', refresh_jwt_token),
    path('verify/', verify_jwt_token),
    path('check/', views.UserCheckAPI.as_view()),
]
