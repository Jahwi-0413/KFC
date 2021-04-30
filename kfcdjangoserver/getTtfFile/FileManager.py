import os

# os.chdir('../../') #작업경로 바꾸는 명령어인데 안먹힘
base_dir = 'D:/4학년 1학기/창융2/sc/kfcproject/reactapp/src/resources/fonts'#상대경로가 안먹혀서..
def handle_ttf_file(file, test=False):  
    save_path = os.path.join(base_dir, file.name)

    with open(save_path, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)
    
    savedFile = base_dir + '/1.ttf' #reactapp에 있는 ttf파일
    os.rename(savedFile, base_dir + '/1_used.ttf')      #reactpapp에 있는 ttf파일 이름을 바꾸고
    print(save_path)
    os.rename(save_path, savedFile)     #사용자가 입력한 ttf파일을 reactapp에 있던 ttf파일로 

def revertFileName():
    savedFile = base_dir + '/1_used.ttf'
    os.remove(savedFile)
