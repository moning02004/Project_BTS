# Generated by Django 3.0.2 on 2020-02-03 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_user', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='grade',
        ),
        migrations.AddField(
            model_name='user',
            name='position',
            field=models.CharField(default='Bronze', max_length=10),
        ),
    ]
