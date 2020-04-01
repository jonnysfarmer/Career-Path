from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED
from .models import Company, Job
from .serializers import CompanySerializer, JobSerializer, UserSerializer

from django.conf import settings                                                                                                                                           
from django.http import HttpResponse
# Create your views here.

class CompanyListView(APIView):

    def get(self, _request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        company = CompanySerializer(data=request.data)
        if company.is_valid():
            company.save()
            return Response(company.data, status=HTTP_201_CREATED)
        return Response(company.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)