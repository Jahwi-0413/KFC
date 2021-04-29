from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

from .import FileManager as fm

@require_POST
@csrf_exempt
def getTtfFile(request):
  file = request.FILES['ttf_file']
  print(file)
  fm.handle_ttf_file(file)
  response = HttpResponse("ok")
  response.status_code = 200
  return response