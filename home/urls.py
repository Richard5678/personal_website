from django.urls import path

from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path("<str:lang>", views.index, name="index"),
    path("wechat/<str:lang>", views.wechat, name="wechat"),
    path("blog/<str:lang>", views.blog, name="blog"),
    path("blog/bank/<str:lang>", views.bank, name="bank"),
    path("blog/first/<str:lang>", views.first, name="first"),
    path("blog/<str:article_id>/<str:lang>", views.article, name="article"),
    path("test/<str:lang>", views.test, name="test")
]
