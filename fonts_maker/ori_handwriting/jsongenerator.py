import json
from collections import OrderedDict
import os

def gen_json(svg_path = './ori_handwriting/svgs/', json_save_name = 'original.json', font_save_name = "./datasets/dumps/example.ttf"):
    whole_data = OrderedDict()

    glyph_data = OrderedDict()

    PATH = svg_path
    svg_list = os.listdir(PATH)

    for svg in svg_list:
        svg_name = svg[:4].lower()
        glyph_data['0x' + svg_name] = {"src":PATH + svg, "width":128}

    whole_data["props"] = {
        "ascent":96,
        "descent":32,
        "em":128,
        "encoding":"UnicodeFull",
        "lang":"Korean",
        "family":"Example",
        "style":"Regular",
        "familyname":"Example",
        "fontname":"Example-Regular",
        "fullname":"Example Regular"
    }
    whole_data["glyphs"] = glyph_data
    whole_data["snft_names"] = [
        [
            "Korean",
            "Copyright",
            "Copyright (c) 2014 by Nobody"
        ],
        [
            "Korean",
            "Family",
            "Example"
        ],
        [
            "Korean",
            "SubFamily",
            "Regular"
        ],
        [
            "Korean",
            "UniqueID",
            "Example 2014-12-04"
        ],
        [
            "Korean",
            "Fullname",
            "Example Regular"
        ],
        [
            "Korean",
            "Version",
            "Version 001.000"
        ],
        [
            "Korean",
            "PostScriptName",
            "Example-Regular"
        ]
    ]
    whole_data["input"] = "."
    whole_data["output"] = [
        font_save_name,
    ]

    with open(json_save_name, 'w', encoding='utf-8') as make_file:
        json.dump(whole_data, make_file, ensure_ascii=False, indent="\t")