from django.db import models

# Create your models here.
class Article(models.Model):
    titleEn = models.TextField()
    titleZh = models.TextField()
    idName = models.TextField()
    date = models.TextField()
    introEn = models.TextField()
    introZh = models.TextField()
