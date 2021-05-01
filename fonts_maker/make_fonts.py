import ori_handwriting.transparent as transparent
import ori_handwriting.make_svg as make_svg
import ori_handwriting.jsongenerator as jsongenerator
from multiprocessing import freeze_support
import time
import cv2
import os
import tqdm

hw_pic_path = './ori_handwriting/centered_pic/'
hw_transparent_path = './ori_handwriting/transparented/'
hw_svg_path = './ori_handwriting/svgs/'
hw_json_name = 'original.json'
hw_font_path = './datasets/dumps/example.ttf'

rst_pic_path = './result/KFC-200000/example.ttf/'
rst_transparent_path = rst_pic_path + 'transparented/'
rst_svg_path = './result/KFC-200000/svg/'
rst_json_name = 'result.json'
rst_font_path = 'result.ttf'

if __name__ == '__main__':
    start_time = time.time()
    
    freeze_support()
    transparent.transparent_img(hw_pic_path, hw_transparent_path)
    flag = make_svg.gen_svg(hw_transparent_path, hw_svg_path)

    while True:
        if flag:
            jsongenerator.gen_json(hw_svg_path, hw_json_name, hw_font_path)
            break

    os.system("fontforge -script svgs2ttf.py original.json")
    os.system("python prepare_dataset.py kor datasets/dumps meta/kor_split.json datasets/dumps")
    os.system("python evaluator.py KFC ./pretrained/korean-handwriting.pth ./result cfgs/kor.yaml --mode user-study-save")

    os.remove("./datasets/dumps/example.hdf5")

    PATH = os.listdir(rst_pic_path)
    for img in tqdm.tqdm(PATH):
        if os.path.isdir(rst_pic_path + img):
            continue
        image = cv2.imread(rst_pic_path + img, flags = cv2.IMREAD_GRAYSCALE)
        image = cv2.resize(image, dsize=(0, 0), fx=0.8, fy=1, interpolation=cv2.INTER_CUBIC)
        cv2.imwrite(rst_pic_path + img, image)

    transparent.transparent_img(rst_pic_path, rst_transparent_path, True)
    flag = make_svg.gen_svg(rst_transparent_path, rst_svg_path)

    while True:
        if flag:
            jsongenerator.gen_json(rst_svg_path, rst_json_name, rst_font_path)
            break

    os.system("fontforge -script svgs2ttf.py result.json")

    print("total %s sec" % (time.time() - start_time))