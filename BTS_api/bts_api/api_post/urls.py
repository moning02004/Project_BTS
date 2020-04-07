from django.urls import path

from . import views


post_list = views.PostListViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
post_detail = views.PostDetailViewSet.as_view({
    'get': 'retrieve',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    path('', post_list),  # get
    path('<int:pk>/', post_detail),  # get

    path('comment/register/', views.CommentCreateAPI.as_view()),
    path('comment/edit/<int:pk>/', views.CommentUpdateAPI.as_view()),
    path('comment/delete/<int:pk>/', views.CommentDestroyAPI.as_view()),

    path('points/', views.PointAPI.as_view()),
]
