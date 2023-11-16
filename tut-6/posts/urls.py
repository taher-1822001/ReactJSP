from . import views
from django.urls import path
urlpatterns = [
    path("homepage/", views.homepage, name='home page'),
    path("", views.getposts, name='posts'),
    path("<int:post_index>", views.postDetails, name='post details')
]