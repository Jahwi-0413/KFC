import os
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST
from . import FileManager as fm
from .utils import processfinder

@require_POST
@csrf_exempt
def getTtfFile(request):
  file = request.FILES['ttf_file']
  fm.handle_ttf_file(file)
  response = HttpResponse("ok")
  response.status_code = 200
  return response

@require_POST
@csrf_exempt
def getTemplateImage(request):
  file = request.FILES['file']
  filename = fm.save_image_file(file)
  fm.save_ttf_file(filename, True)
  response = HttpResponse("ok")
  response.status_code = 200
  return response
  
@require_POST
@csrf_exempt
def getSentenceImage(request):
  file = request.FILES['file']
  filename = fm.save_image_file(file)
  fm.save_ttf_file(filename, False)
  response = HttpResponse("ok")
  response.status_code = 200
  return response

@require_GET
@csrf_exempt
def rebuildProcess(request):
  tasklist = processfinder()
  os.system("python d:/KFC/KFC/kfcdjangoserver/manage.py runserver")
  for task in tasklist:
    os.system("taskkill /f /pid " + task)

  response = HttpResponse("ok")
  response.status_code = 200
  return response