# Generated by Django 3.2.6 on 2021-09-14 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_article_idname'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='lang',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
