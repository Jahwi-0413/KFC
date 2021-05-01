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

def save_image_file(file):
  base_dir = os.path.join(path(), 'kfcdjangoserver\\uploads') # 서버 프로젝트의 uploads 폴더에 이미지 저장
  save_path = os.path.join(base_dir, file.name)

  with open(save_path, 'wb+') as destination:
    for chunk in file.chunks():
      destination.write(chunk)
    
  ext = (file.name)[::-1][0:3][::-1] # 확장자 자르기
  savedFile = base_dir + '/1.' + ext
  os.rename(savedFile, base_dir + '/1_used.' + ext)
  removeFile = base_dir + '/1_used.' + ext
  os.rename(save_path, savedFile)
  os.remove(removeFile)