from django.urls import path

from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path("", views.default, name="index"),
    path("<str:lang>", views.index, name="index"),
    path("wechat/<str:lang>", views.wechat, name="wechat"),
    path("blog/<str:lang>", views.blog, name="blog"),
    path("blog/bank/<str:lang>", views.bank, name="bank"),
    path("blog/first/<str:lang>", views.first, name="first"),
    path("blog/<str:article_id>/<str:lang>", views.article, name="article"),
    path("test/<str:lang>", views.test, name="test"),
    path("project/<str:lang>", views.project, name="project"),
    path("project/website/<str:lang>", views.website, name="website"),
    path("project/constructor/<str:lang>", views.constructor, name="ctor"),
    path("project/algorithm/<str:lang>", views.algorithm, name="algorithm")
]
