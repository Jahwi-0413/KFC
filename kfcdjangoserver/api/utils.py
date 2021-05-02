import os

 # 프로젝트 경로 반환 #
def pathfinder():
  return os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__)))))

 # 확장자 반환 #
def extfinder(file_name):
  return file_name[::-1][0:3][::-1]