import json
from collections import OrderedDict
import os

def gen_meta():
    SVG_PATH = './ori_handwriting/svgs/'
    svg_list = os.listdir(SVG_PATH)

    meta_data = OrderedDict()
    target = ""
    style = ""

    for i in range(0xAC00, 0xD79F):
        target += ('\\u' + hex(i)[2:]).encode('raw_unicode_escape').decode('raw_unicode_escape').encode('cp949').decode('cp949')

    for svg in svg_list:
        style += ('\\u' + svg.lower()[:4]).encode('raw_unicode_escape').decode('raw_unicode_escape').encode('cp949').decode('cp949')

    meta_data["target_chars"] = target
    meta_data["style_chars"] = style
    meta_data["fonts"] = ["example.ttf"]

    with open('./meta/kor-unrefined.json', 'w', encoding='utf-8') as make_file:
        json.dump(meta_data, make_file, ensure_ascii=True)