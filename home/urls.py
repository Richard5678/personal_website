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
    path("project/algorithm/<str:lang>", views.algorithm, name="algorithm"),
    path("project/ml/<str:lang>", views.ml, name="ml"),
    path("project/gomoku/<str:lang>", views.gomoku, name="gomoku"),
    path("project/gameoflife/<str:lang>", views.gameOfLife, name="gameOfLife"),
    path("project/testing/<str:lang>", views.testing, name="testing"),
    path("project/classifier/<str:lang>", views.classifier, name="classifier"),
    path("project/fitness/<str:lang>", views.fitness, name="fitness"),
    path("proj/test/<str:lang>", views.projectTest, name="projectTest")
]
