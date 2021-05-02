import os
from .utils import pathfinder, extfinder
import sys
sys.path.append(os.path.join(pathfinder(), 'fonts_maker'))
  
import font_maker
import shutil

def handle_ttf_file(file, test=False):
  base_dir = os.path.join(pathfinder(), 'reactapp\\src\\resources\\fonts')
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
  base_dir = os.path.join(pathfinder(), 'kfcdjangoserver\\uploads') # 서버 프로젝트의 uploads 폴더에 이미지 저장
  save_path = os.path.join(base_dir, file.name)

  with open(save_path, 'wb+') as destination:
    for chunk in file.chunks():
      destination.write(chunk)
    
  ext = extfinder(file.name) # 확장자 자르기
  savedFile = base_dir + '/1.' + ext
  os.rename(savedFile, base_dir + '/1_used.' + ext)
  removeFile = base_dir + '/1_used.' + ext
  os.rename(save_path, savedFile)
  os.remove(removeFile)
  return file.name

def save_ttf_file(imagename):
  font_file_path = font_maker.font_make('/uploads/', '1.'+extfinder(imagename)) #결과 파일 경로

  base_dir = os.path.join(pathfinder(), 'reactapp\\src\\resources\\resultfonts')
  saved_file = os.path.join(base_dir, 'font-file.ttf')
  os.remove(saved_file) #원래 있던 font_file.ttf 삭제
  shutil.move(font_file_path, base_dir + '\\' + 'font-file.ttf')