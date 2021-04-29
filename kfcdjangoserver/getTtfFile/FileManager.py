import os

def handle_ttf_file(file, test=False):
    # base_dir= os.path.dirname(os.path.realpath(__file__))
    base_dir = 'D:/4학년 1학기/창융2/sc/kfcproject/reactapp/src/resources/fonts' #이건 내 환경에서만 돌아가는거라 파일 탐색하는 함수라도 만들어서 바꿔야됨
    save_path = os.path.join(base_dir, file.name)

    with open(save_path, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)
    
    savedFile = base_dir + '/1.ttf' #reactapp에 있는 ttf파일
    os.rename(savedFile, base_dir + '/1_used.ttf')      #reactpapp에 있는 ttf파일 이름을 바꾸고
    print(save_path)
    os.rename(save_path, savedFile)     #사용자가 입력한 ttf파일을 reactapp에 있던 ttf파일로 