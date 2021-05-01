from template_preprocess import template_process
from make_fonts import make_font
from multiprocessing import freeze_support
import os

# 템플릿 사진 경로랑 파일명을 받고 생성 된 폰트 절대경로를 반환
def font_make(template_path = './ori_handwriting/', pic_name = 'test.jpg'):
    PATH = os.getcwd()

    os.chdir('D:/KFC/KFC/fonts_maker')
    template_process(template_path, pic_name)
    result_path = make_font()

    os.chdir(PATH)

    return result_path

if __name__ == '__main__':
    freeze_support()

    print(font_make())