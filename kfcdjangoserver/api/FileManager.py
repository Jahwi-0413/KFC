import os

from .pathfinder import path

def handle_ttf_file(file, test=False):
  base_dir = os.path.join(path(), 'reactapp\\src\\resources\\fonts')
  save_path = os.path.join(base_dir, file.name)

  with open(save_path, 'wb+') as destination:
    for chunk in file.chunks():
      destination.write(chunk)
    
  savedFile = base_dir + '/1.ttf' #reactapp에 있는 ttf파일
  os.rename(savedFile, base_dir + '/1_used.ttf')      #reactpapp에 있는 ttf파일 이름을 바꾸고
  removeFile = base_dir + '/1_used.ttf'
  os.rename(save_path, savedFile)     #사용자가 입력한 ttf파일을 reactapp에 있던 ttf파일로 
  os.remove(removeFile)
