import cv2
import numpy as np
import imageio
import scipy.misc as misc
from scipy.misc import imresize
from PIL import Image

def normalize_image(img):
    """
    Make image zero centered and in between (-1, 1)
    """
    normalized = (img / 127.5) - 1.
    return normalized

def tight_crop_image(img, verbose=False, resize_fix=False):
    img_size = 255 * img.shape[0]
    full_white = img_size
    col_sum = np.where(full_white - np.sum(img, axis=0) > 1)
    row_sum = np.where(full_white - np.sum(img, axis=1) > 1)
    y1, y2 = row_sum[0][0], row_sum[0][-1]
    x1, x2 = col_sum[0][0], col_sum[0][-1]
    cropped_image = img[y1:y2, x1:x2]
    cropped_image_size = cropped_image.shape
    
    if verbose:
        print('(left x1, top y1):', (x1, y1))
        print('(right x2, bottom y2):', (x2, y2))
        print('cropped_image size:', cropped_image_size)
        
    if type(resize_fix) == int:
        origin_h, origin_w = cropped_image.shape
        if origin_h > origin_w:
            resize_w = int(origin_w * (resize_fix / origin_h))
            resize_h = resize_fix
        else:
            resize_h = int(origin_h * (resize_fix / origin_w))
            resize_w = resize_fix
        if verbose:
            print('resize_h:', resize_h)
            print('resize_w:', resize_w, \
                  '[origin_w %d / origin_h %d * target_h %d]' % (origin_w, origin_h, target_h))
        
        # resize
        cropped_image = imresize(cropped_image, (resize_h, resize_w))
        cropped_image = normalize_image(cropped_image)
        cropped_image_size = cropped_image.shape
        if verbose:
            print('resized_image size:', cropped_image_size)
        
    elif type(resize_fix) == float:
        origin_h, origin_w = cropped_image.shape
        resize_h, resize_w = int(origin_h * resize_fix), int(origin_w * resize_fix)
        if resize_h > 120:
            resize_h = 120
            resize_w = int(resize_w * 120 / resize_h)
        if resize_w > 120:
            resize_w = 120
            resize_h = int(resize_h * 120 / resize_w)
        if verbose:
            print('resize_h:', resize_h)
            print('resize_w:', resize_w)
        
        # resize
        cropped_image = imresize(cropped_image, (resize_h, resize_w))
        cropped_image = normalize_image(cropped_image)
        cropped_image_size = cropped_image.shape
        if verbose:
            print('resized_image size:', cropped_image_size)
    
    return cropped_image


def add_padding(img, image_size=128, verbose=False, pad_value=None):
    height, width = img.shape
    if not pad_value:
        pad_value = img[0][0]
    if verbose:
        print('original cropped image size:', img.shape)
    
    # Adding padding of x axis - left, right
    pad_x_width = (image_size - width) // 2
    pad_x = np.full((height, pad_x_width), pad_value, dtype=np.float32)
    img = np.concatenate((pad_x, img), axis=1)
    img = np.concatenate((img, pad_x), axis=1)
    
    width = img.shape[1]

    # Adding padding of y axis - top, bottom
    pad_y_height = (image_size - height) // 2
    pad_y = np.full((pad_y_height, width), pad_value, dtype=np.float32)
    img = np.concatenate((pad_y, img), axis=0)
    img = np.concatenate((img, pad_y), axis=0)
    
    # Match to original image size
    width = img.shape[1]
    if img.shape[0] % 2:
        pad = np.full((1, width), pad_value, dtype=np.float32)
        img = np.concatenate((pad, img), axis=0)
    height = img.shape[0]
    if img.shape[1] % 2:
        pad = np.full((height, 1), pad_value, dtype=np.float32)
        img = np.concatenate((pad, img), axis=1)

    if verbose:
        print('final image size:', img.shape)
    
    return img


def centering_image(img, image_size=128, verbose=False, resize_fix=False, pad_value=None):
    if img.shape[0] < img.shape[1]:
        img = cv2.resize(img, dsize=(img.shape[1], img.shape[1]), interpolation=cv2.INTER_CUBIC)
    else:
        img = cv2.resize(img, dsize=(img.shape[0], img.shape[0]), interpolation=cv2.INTER_CUBIC)

    if not pad_value:
        pad_value = img[0][0]
    cropped_image = tight_crop_image(img, verbose=verbose, resize_fix=resize_fix)
    # x, y = cropped_image.shape[0], cropped_image.shape[1]

    # if x >= y:
    #     diff = 128 / x
    #     centered_image = cv2.resize(cropped_image, dsize=(int(diff * y), 128), interpolation=cv2.INTER_CUBIC)
    # else:
    #     diff = 128 / y
    #     centered_image = cv2.resize(cropped_image, dsize=(128, int(diff * x)), interpolation=cv2.INTER_CUBIC)

    centered_image = add_padding(cropped_image, image_size=image_size, verbose=verbose, pad_value=pad_value)
    
    return centered_image

# template_path 는 파일 들어가는 경로까지만, first & second pic name에는 파일 이름이랑 확장자만
def template_process(template_path = './ori_handwriting/', pic_name = 'test.jpg'):
    # 28자 전용
    # char_list = ['가', '깩', '냒', '댻', '떤', '렍', '멶', '볟', '뽈', '솱', '쐚', '욃', '죬', '쭕', '춾', '퀧', '튐', '퓹', '흢', '긧', '낐', '낭', '댖', '땿', '럨', '멑', '벺', '뼣']

    # 48자 전용
    char_list = ['가', '깩', '냒', '댻', '떤', '렍', '멶', '볟', '뽈', '솱', '쐚', '욃', '죬', '쭕', '춾', '퀧', '튐', '퓹', '흢', '긧', '낐', '낭', '댖', '땿', '럨', '멑', '벺', '뼣', '괗', '꽅', '녳', '뎢', '뗐', '럿', '먭', '뱛', '뺊', '삸', '싧', '씕', '읃', '쥲', '쮠', '췏', '쿽', '툫', '푚', '횈']

    SAVE_PATH = "./ori_handwriting/centered_pic/"

    # 첫번째 페이지
    temp_img = cv2.imread(template_path + pic_name, flags = cv2.IMREAD_GRAYSCALE)
    kernel = np.ones((3, 3), np.uint8)
    temp_img = cv2.erode(temp_img, kernel, iterations=1)

    height_crop_range = int(temp_img.shape[0] / 12)
    height_margin = int(height_crop_range / 7)

    width_crop_range = int(temp_img.shape[1] / 8)
    width_margin = int(width_crop_range / 7)

    # crop and centering
    for i, char in enumerate(char_list):
        crop_img = np.zeros((height_crop_range, width_crop_range))
        if i % 4 == 0:
            crop_img = temp_img[int(i / 4) * height_crop_range + height_margin : (int(i / 4) + 1) * height_crop_range - height_margin, width_crop_range + width_margin : 2 * width_crop_range - width_margin]
        elif i % 4 == 1:
            crop_img = temp_img[int(i / 4) * height_crop_range + height_margin : (int(i / 4) + 1) * height_crop_range - height_margin, 3 * width_crop_range + width_margin : 4 * width_crop_range - width_margin]
        elif i % 4 == 2:
            crop_img = temp_img[int(i / 4) * height_crop_range + height_margin : (int(i / 4) + 1) * height_crop_range - height_margin, 5 * width_crop_range + width_margin : 6 * width_crop_range - width_margin]
        else:
            crop_img = temp_img[int(i / 4) * height_crop_range + height_margin : (int(i / 4) + 1) * height_crop_range - height_margin, 7 * width_crop_range + width_margin : -width_margin]
        
        crop_img = cv2.resize(crop_img, dsize=(128, 128), interpolation=cv2.INTER_CUBIC)
        ret, crop_img = cv2.threshold(crop_img, 127, 255, cv2.THRESH_BINARY)
        crop_img = centering_image(crop_img, verbose=False, pad_value=255)
        char_code = char.encode('raw_unicode_escape').decode('utf-8')[2:].upper()

        cv2.imwrite(SAVE_PATH + char_code + '.png', crop_img)
    
    return True

if __name__ == "__main__":
    template_process('./ori_handwriting/', 'test.png')
    # D:/KFC/KFC/kfcdjangoserver/uploads/1.png