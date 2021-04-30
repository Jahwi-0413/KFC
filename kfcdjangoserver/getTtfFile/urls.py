from django.urls import path

from . import views

urlpatterns = [
    path('', views.getTtfFile, name='getTtfFile'),
]