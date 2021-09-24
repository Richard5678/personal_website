from django.shortcuts import render
from django.http import HttpResponse

from .models import Article

def default(request):
    return render(request, "home/index.html", {
        "lang": 'en',
        "section": "index"
    })

# Create your views here.
def index(request, lang):
    return render(request, "home/index.html", {
        "lang": lang,
        "section": "index"
    })

def blog(request, lang):
    return render(request, "home/blog.html", {
        "articles": Article.objects.all(),
        "lang": lang,
        "en": lang=='en',
        "section": "blog"
    })

def bank(request, lang):
    return render(request, "home/bank.html", {
        "lang": lang,
        "section": "bank"
    })

def wechat(request, lang):
    return render(request, "home/wechat.html", {
        "lang": lang,
        "section": "wechat"
    })

def first(request, lang):
    return render(request, "home/first.html", {
        "lang": lang,
        "section": "first"
    })

def article(request, article_id, lang):
    article = Article.objects.get(pk=article_id)
    return render(request, f"home/{ article.idName }.html", {
        "lang": lang,
        "section": "false"
    })


def test(request, lang):
    return render(request, "home/test.html", {
        "lang": lang
    })