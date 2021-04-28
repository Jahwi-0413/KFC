import json
from collections import OrderedDict
import os

SVG_PATH = './svgs/'
svg_list = os.listdir(SVG_PATH)

meta_data = OrderedDict()
style = ""

whole_data = OrderedDict()
meta_data["fonts"] = ["example"]
meta_data["chars"] = []

for svg in svg_list:
    style = ('\\u' + svg.lower()[:4]).encode('raw_unicode_escape').decode('raw_unicode_escape').encode('cp949').decode('cp949')
    meta_data["chars"].append(style)

whole_data["train"] = meta_data
whole_data["valid"] = meta_data

with open('test.json', 'w', encoding='utf-8') as make_file:
    json.dump(whole_data, make_file, ensure_ascii=True)