import os

def path():
  dir_path = os.path.realpath(__file__)

  path_list = dir_path.split('\\')
  for i in range(len(path_list)-1, 0, -1):
    if(path_list[i] != "kfcdjangoserver"):
      path_list.pop()
    else:
      path_list.pop()
      break
  return '\\'.join(path_list)