import pytesseract
from pytesseract import Output
import cv2
import numpy as np
from template_preprocess import centering_image

def split(pic_path = './', pic_name = '25383.jpg'):
    img = cv2.imread(pic_path + pic_name, flags=cv2.IMREAD_GRAYSCALE)
    answer = pytesseract.image_to_string(img, lang='kor', config='--psm 6 --oem 1 --tessdata-dir ./tessdata')
    img2 = cv2.erode(img, np.ones((9, 9)))
    d = pytesseract.image_to_boxes(img2, lang='kor', output_type=Output.DICT, config='--psm 6 --oem 0')
    print(answer)
    answer = "옛적볶은큰뻐꾸기값품삯요청을읽어놓고는잊었죠특히쓴돼지귀겉핥는내친구와앉아뚫은돛옆부엌에갇힌삶얘기를외곬마냥읊던짧은웨딩다큐는권하지않았습니다"

    height = img.shape[0]

    n_boxes = len(d['char'])

    print(n_boxes == len(answer))

    for i in range(n_boxes):
        (x, y, w, h) = (d['left'][i], height - d['bottom'][i], d['right'][i], height - d['top'][i])
        crop_img = img[ h:y , x:w ]
        print(crop_img.shape)
        # crop_img = cv2.resize(crop_img, dsize=(128, 128), interpolation=cv2.INTER_CUBIC)
        ret, crop_img = cv2.threshold(crop_img, 150, 255, cv2.THRESH_BINARY)
        crop_img = centering_image(crop_img, verbose=False, pad_value=255)
        char_code = answer[i].encode('raw_unicode_escape').decode('utf-8')[2:].upper()

        cv2.imwrite('./ori_handwriting/centered_pic/' + char_code + '.png', crop_img)

if __name__ == "__main__":
    split()