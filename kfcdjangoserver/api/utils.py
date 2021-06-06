import os, subprocess

 # 프로젝트 경로 반환 #
def pathfinder():
  return os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__)))))

 # 확장자 반환 #
def extfinder(file_name):
  return file_name[::-1][0:3][::-1]

def processfinder():
  lines = [line.split() for line in subprocess.check_output("tasklist").splitlines()]
  find = []
  for l in lines[3:]:
    l[0] = l[0].decode("utf-8")
    if l[0] == "python.exe":
      find.append(l[1].decode("utf-8"))

  return find