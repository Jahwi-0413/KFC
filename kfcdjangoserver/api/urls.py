from django.urls import path

from . import views

urlpatterns = [
  path('resTTF/', views.getTtfFile),
  path('resTemplate/', views.getTemplateImage),
  path('resSentence/', views.getSentenceImage),
]