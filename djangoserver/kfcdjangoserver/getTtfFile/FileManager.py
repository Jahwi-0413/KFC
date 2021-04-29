import os

def handle_ttf_file(file, test=False):
    # base_dir= os.path.dirname(os.path.realpath(__file__))
    base_dir = 'D:/4학년 1학기/창융2/sc/kfcproject/reactapp/src/resources/fonts'
    save_path = os.path.join(base_dir, file.name)

    with open(save_path, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)
    
    savedFile = base_dir + '/1.ttf'
    os.rename(savedFile, base_dir + '/1_used.ttf')
    print(save_path)
    os.rename(save_path, savedFile)