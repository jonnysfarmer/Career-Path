from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Company, Job
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class CompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = ('id', 'company', 'industry', 'location')

class JobSerializer(serializers.ModelSerializer)

    class Meta:
        model = Job
        fields = ('id', 'company', 'title', 'experience', 'job', 'sector', 'shortlist', 'applied', 'active' )
