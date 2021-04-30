from django.urls import path

from . import views

urlpatterns = [
    path('', views.getTtfFile),
    path('revertFile/', views.revertFile)
]