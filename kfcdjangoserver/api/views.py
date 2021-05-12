from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from . import FileManager as fm

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
  fm.save_ttf_file(filename)
  response = HttpResponse("ok")
  response.status_code = 200
  return response
  
@require_POST
@csrf_exempt
def getSentenceImage(request):
  file = request.FILES['file']
  fm.save_image_file(file)
  response = HttpResponse("ok")
  response.status_code = 200
  return response