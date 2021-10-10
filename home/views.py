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
    return render(request, "home/blogHome.html", {
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
    return render(request, f"home/blog.html", {
        "lang": lang,
        "section": article.idName,
        "blog": article
    })


def test(request, lang):
    return render(request, "home/test.html", {
        "lang": lang
    })

def project(request, lang):
    return render(request, "home/projectHome.html", {
        "lang": lang
    })

def website(request, lang):
    return render(request, "home/project.html", {
        "lang": lang,
        "proj": "website",
        "proj_img": "website.png"
    })

def constructor(request, lang):
    return render(request, "home/project.html", {
        "lang": lang,
        "proj": "ctor",
        "proj_img": "ctor.jpeg"
    })

def algorithm(request, lang):
    return render(request, "home/project.html", {
        "lang": lang,
        "proj": "algo",
        "proj_img": "algo.jpeg"
    })

def gameOfLife(request, lang):
    return render(request, "home/project.html", {
        "lang": lang,
        "proj": "gameOfLife",
        "proj_img": "gameOfLife.jpeg"
    })

def testing(request, lang):
    return render(request, "home/project.html", {
        "lang": lang,
        "proj": "testing",
        "proj_img": "testing.jpeg"
    })

def classifier(request, lang):
    return render(request, "home/project.html", {
        "lang": lang,
        "proj": "classifier",
        "projImg": "classifier.png"
    })

def fitness(request, lang):
    return render(request, "home/project.html", {
        "lang": lang,
        "proj": "fitness",
        "proj_img": "fitness.png"
    })

def projectTest(request, lang):
    return render(request, "home/constructor.html", {
        "lang": lang
    })