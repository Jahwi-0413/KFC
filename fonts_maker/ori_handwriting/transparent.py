from PIL import Image
import os
import tqdm
 
PATH = './ori_handwriting/centered_pic/'
SAVE_PATH = './ori_handwriting/transparented/'

def transparent_img(img_path = PATH, out_path = SAVE_PATH, is_result = False):
    pic_list = os.listdir(img_path)

    for pic in tqdm.tqdm(pic_list):
        if os.path.isdir(img_path + pic):
            continue

        img = Image.open(img_path + pic)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        cutOff = 20
        
        for item in datas:
            if item[0] >= cutOff and item[1] >= cutOff and item[2] >= cutOff:
                newData.append((255, 255, 255, 0))
                # RGB의 각 요소가 모두 cutOff 이상이면 transparent하게 바꿔줍니다.
            else:
                newData.append((0, 0, 0, 255))
                # 나머지 요소는 변경하지 않습니다.
        
        img.putdata(newData)

        if is_result:
            img.save(out_path + pic.replace('example.ttf_', ""), "PNG") # PNG 포맷으로 저장합니다.
        else:
            img.save(out_path + pic, "PNG")