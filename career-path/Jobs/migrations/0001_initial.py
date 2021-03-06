# Generated by Django 3.0.4 on 2020-04-01 14:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=200)),
                ('industry', models.CharField(max_length=200)),
                ('location', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300)),
                ('experience', models.IntegerField(blank=True, null=True)),
                ('job', models.CharField(choices=[('m&a', 'Mergers & Acquisitions'), ('pe', 'Private Equity'), ('manconsult', 'Management Consultant'), ('corp', 'Corporate')], max_length=40)),
                ('sector', models.CharField(choices=[('tmt', 'Telecommunications, Media and Technology'), ('infra', 'Infrastructure'), ('fig', 'Financial Services')], max_length=40)),
                ('active', models.BooleanField(default=False)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comapny', to='Jobs.Company')),
                ('shortlist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
