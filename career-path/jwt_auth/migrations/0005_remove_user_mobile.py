# Generated by Django 3.0.4 on 2020-04-01 14:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0004_auto_20200108_1614'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='mobile',
        ),
    ]
