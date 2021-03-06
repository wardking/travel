import Mock from 'mockjs'

// Mock.mock("url",'type',dataRes);
Mock.mock("/getHomeInfo", 'get', {
    swiperList: [
        { id: "0001", imgUrl: "http://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg" },
        { id: "0002", imgUrl: "http://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg" }
    ],
    iconList: [
        {
            id: "0001",
            imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
            desc: "酒店",
        },
        {
            id: "0002",
            imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
            desc: "机票",
        },
        {
            id: "0003",
            imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
            desc: "火车票",
        },
        {
            id: "0004",
            imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
            desc: "度假",
        },
        {
            id: "0005",
            imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
            desc: "景点门票",
        },
        {
            id: "0006",
            imgUrl:
                "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
            desc: "海外酒店",
        },
        {
            id: "0007",
            imgUrl:
                "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
            desc: "低价机票",
        },
        {
            id: "0008",
            imgUrl:
                "https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
            desc: "汽车船票",
        },
        {
            id: "0009",
            imgUrl:
                "https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",
            desc: "攻略",
        }
    ],
    recommendList: [
        {
            id: "0001",
            imgUrl: "//img1.qunarzz.com/sight/p0/2004/9e/9e83583ec8d88c0fa3.water.jpg_256x160_b89fbe7e.jpg",
            title: "广州街香港街",
            desc: "再现1840年前后的羊城旧貌和香江风韵"
        },
        {
            id: "0002",
            imgUrl: "//img1.qunarzz.com/sight/p0/1912/78/78fdc5a98b55aaefa3.water.jpg_256x160_5483dbb5.jpg",
            title: "香港迪士尼乐园",
            desc: "身临其境感受童话王国"
        },
        {
            id: "0003",
            imgUrl: "//img1.qunarzz.com/sight/p0/2001/8d/8d7226ecdd14ab82a3.water.jpg_256x160_1d6fb731.jpg",
            title: "香港海洋公园",
            desc: "妙趣横生的大型主题公园"
        },
        {
            id: "0004",
            imgUrl: "//img1.qunarzz.com/sight/p0/1501/18/181cff1e8af11041.water.jpg_256x160_aa461578.jpg",
            title: "维多利亚海港",
            desc: "美轮美奂的世界夜景，港阔水深的天然良港"
        }
    ],
    weekendList: [
        {
            id: "0001",
            imgUrl:
                "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg",
            title: "马尼拉湾",
            desc: "驾一叶扁舟，寻瓯江往事",
        },
        {
            id: "0002",
            imgUrl:
                "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg",
            title: "马尼拉湾",
            desc: "不负嵊夏好时光，泗乎太安逸",
        },
        {
            id: "0003",
            imgUrl:
                "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c2ae82fcc9fa11fa253e5919c49bcfbf.jpg",
            title: "马尼拉湾",
            desc: "探访日本，一部家庭旅行画册",
        },
        {
            id: "0004",
            imgUrl:
                "//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg",
            title: "马尼拉湾",
            desc: "厦门，带娃出行与幸福同行",
        }
    ],
});
Mock.mock("/getCityInfo", 'get', {
    "hotCities": [{
        "id": 216,
        "spell": "beijing",
        "name": "北京"
    }, {
        "id": 1910,
        "spell": "shanghai",
        "name": "上海"
    }, {
        "id": 1904,
        "spell": "sanya",
        "name": "三亚"
    }, {
        "id": 2410,
        "spell": "xianggang",
        "name": "香港"
    }, {
        "id": 810,
        "spell": "hangzhou",
        "name": "杭州"
    }, {
        "id": 708,
        "spell": "guangzhou",
        "name": "广州"
    }, {
        "id": 310,
        "spell": "chengdu",
        "name": "成都"
    }, {
        "id": 1915,
        "spell": "shenzhen",
        "name": "深圳"
    }, {
        "id": 1926,
        "spell": "suzhou",
        "name": "苏州"
    }, {
        "id": 711,
        "spell": "guilin",
        "name": "桂林"
    }, {
        "id": 2402,
        "spell": "xian",
        "name": "西安"
    }, {
        "id": 2401,
        "spell": "xiamen",
        "name": "厦门                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           "
    }],
    "cities": {
        "A": [{
            "id": 101,
            "spell": "abazangzuqiangzuzizhizhou",
            "name": "阿坝州"
        }, {
            "id": 102,
            "spell": "akesudiqu",
            "name": "阿克苏"
        }, {
            "id": 103,
            "spell": "alaer",
            "name": "阿拉尔"
        }, {
            "id": 104,
            "spell": "alashanmeng",
            "name": "阿拉善盟"
        }, {
            "id": 105,
            "spell": "aletai",
            "name": "阿勒泰"
        }, {
            "id": 106,
            "spell": "ali",
            "name": "阿里"
        }, {
            "id": 107,
            "spell": "ankang",
            "name": "安康"
        }, {
            "id": 108,
            "spell": "anqing",
            "name": "安庆"
        }, {
            "id": 109,
            "spell": "anshun",
            "name": "安顺"
        }, {
            "id": 110,
            "spell": "anyang",
            "name": "安阳"
        }, {
            "id": 111,
            "spell": "anshan",
            "name": "鞍山"
        }, {
            "id": 112,
            "spell": "aomen",
            "name": "澳门"
        }],
        "B": [{
            "id": 201,
            "spell": "bayanzhuoer",
            "name": "巴彦卓尔"
        }, {
            "id": 202,
            "spell": "bayinguole",
            "name": "巴音郭勒"
        }, {
            "id": 203,
            "spell": "bazhong",
            "name": "巴中"
        }, {
            "id": 204,
            "spell": "baicheng",
            "name": "白城"
        }, {
            "id": 205,
            "spell": "baisha",
            "name": "白沙"
        }, {
            "id": 206,
            "spell": "baishan",
            "name": "白山"
        }, {
            "id": 207,
            "spell": "baiyin",
            "name": "白银"
        }, {
            "id": 208,
            "spell": "baise",
            "name": "百色"
        }, {
            "id": 209,
            "spell": "bengbu",
            "name": "蚌埠"
        }, {
            "id": 210,
            "spell": "baotou",
            "name": "包头"
        }, {
            "id": 211,
            "spell": "baoji",
            "name": "宝鸡"
        }, {
            "id": 212,
            "spell": "baoding",
            "name": "保定"
        }, {
            "id": 213,
            "spell": "baoshan",
            "name": "保山"
        }, {
            "id": 214,
            "spell": "baoting",
            "name": "保亭"
        }, {
            "id": 215,
            "spell": "beihai",
            "name": "北海"
        }, {
            "id": 216,
            "spell": "beijing",
            "name": "北京"
        }, {
            "id": 271,
            "spell": "benxi",
            "name": "本溪"
        }, {
            "id": 218,
            "spell": "bijie",
            "name": "毕节"
        }, {
            "id": 219,
            "spell": "binzhou",
            "name": "滨州"
        }, {
            "id": 220,
            "spell": "bozhou",
            "name": "亳州"
        }, {
            "id": 221,
            "spell": "boertala",
            "name": "博尔塔拉"
        }],
        "C": [{
            "id": 301,
            "spell": "cangzhou",
            "name": "沧州"
        }, {
            "id": 302,
            "spell": "changdu",
            "name": "昌都"
        }, {
            "id": 303,
            "spell": "changji",
            "name": "昌吉"
        }, {
            "id": 304,
            "spell": "changde",
            "name": "常德"
        }, {
            "id": 305,
            "spell": "changzhou",
            "name": "常州"
        }, {
            "id": 306,
            "spell": "chaohu",
            "name": "巢湖"
        }, {
            "id": 307,
            "spell": "chaoyang",
            "name": "朝阳"
        }, {
            "id": 308,
            "spell": "chaozhou",
            "name": "潮州"
        }, {
            "id": 309,
            "spell": "chenzhou",
            "name": "郴州"
        }, {
            "id": 310,
            "spell": "chengdu",
            "name": "成都"
        }, {
            "id": 311,
            "spell": "chengde",
            "name": "承德"
        }, {
            "id": 312,
            "spell": "chengmai",
            "name": "澄迈"
        }, {
            "id": 313,
            "spell": "chizhou",
            "name": "池州"
        }, {
            "id": 314,
            "spell": "chifeng",
            "name": "赤峰"
        }, {
            "id": 315,
            "spell": "chongzuo",
            "name": "崇左"
        }, {
            "id": 316,
            "spell": "chuzhou",
            "name": "滁州"
        }, {
            "id": 317,
            "spell": "chuxiong",
            "name": "楚雄"
        }, {
            "id": 318,
            "spell": "changchun",
            "name": "长春"
        }, {
            "id": 319,
            "spell": "changgeshi",
            "name": "长葛市"
        }, {
            "id": 320,
            "spell": "changsha",
            "name": "长沙"
        }, {
            "id": 321,
            "spell": "changzhi",
            "name": "长治"
        }, {
            "id": 322,
            "spell": "chongqing",
            "name": "重庆"
        }],
        "D": [{
            "id": 401,
            "spell": "dazhou",
            "name": "达州"
        }, {
            "id": 402,
            "spell": "dali",
            "name": "大理"
        }, {
            "id": 403,
            "spell": "dalian",
            "name": "大连"
        }, {
            "id": 404,
            "spell": "daqing",
            "name": "大庆"
        }, {
            "id": 405,
            "spell": "datong",
            "name": "大同"
        }, {
            "id": 406,
            "spell": "daxinganling",
            "name": "大兴安岭"
        }, {
            "id": 407,
            "spell": "dandong",
            "name": "丹东"
        }, {
            "id": 408,
            "spell": "danzhou",
            "name": "儋州"
        }, {
            "id": 409,
            "spell": "danshui",
            "name": "淡水"
        }, {
            "id": 410,
            "spell": "dehong",
            "name": "德宏"
        }, {
            "id": 411,
            "spell": "deyang",
            "name": "德阳"
        }, {
            "id": 412,
            "spell": "dezhoushi",
            "name": "德州市"
        }, {
            "id": 413,
            "spell": "deqing",
            "name": "德庆"
        }, {
            "id": 414,
            "spell": "dingan",
            "name": "定安"
        }, {
            "id": 415,
            "spell": "dingxi",
            "name": "定西"
        }, {
            "id": 416,
            "spell": "dongfang",
            "name": "东方"
        }, {
            "id": 417,
            "spell": "dongguan",
            "name": "东莞"
        }, {
            "id": 418,
            "spell": "dongying",
            "name": "东营"
        }, {
            "id": 419,
            "spell": "dunhuangshi",
            "name": "敦煌市"
        }],
        "E": [{
            "id": 501,
            "spell": "eerduosi",
            "name": "鄂尔多斯"
        }, {
            "id": 502,
            "spell": "ezhou",
            "name": "鄂州"
        }, {
            "id": 503,
            "spell": "enshi",
            "name": "恩施"
        }],
        "F": [{
            "id": 601,
            "spell": "fangchenggang",
            "name": "防城港"
        }, {
            "id": 602,
            "spell": "foshan",
            "name": "佛山"
        }, {
            "id": 603,
            "spell": "fuzhou",
            "name": "福州"
        }, {
            "id": 604,
            "spell": "fushun",
            "name": "抚顺"
        }, {
            "id": 605,
            "spell": "fuzhou",
            "name": "抚州"
        }, {
            "id": 606,
            "spell": "fuxin",
            "name": "阜新"
        }, {
            "id": 607,
            "spell": "fuyang",
            "name": "阜阳"
        }],
        "G": [{
            "id": 701,
            "spell": "gannan",
            "name": "甘南"
        }, {
            "id": 702,
            "spell": "ganzizhou",
            "name": "甘孜州"
        }, {
            "id": 703,
            "spell": "ganzhou",
            "name": "赣州"
        }, {
            "id": 704,
            "spell": "gaoxiong",
            "name": "高雄"
        }, {
            "id": 705,
            "spell": "guyuan",
            "name": "固原"
        }, {
            "id": 706,
            "spell": "guangan",
            "name": "广安"
        }, {
            "id": 707,
            "spell": "guangyuan",
            "name": "广元"
        }, {
            "id": 708,
            "spell": "guangzhou",
            "name": "广州"
        }, {
            "id": 709,
            "spell": "guigang",
            "name": "贵港"
        }, {
            "id": 710,
            "spell": "guiyang",
            "name": "贵阳"
        }, {
            "id": 711,
            "spell": "guilin",
            "name": "桂林"
        }, {
            "id": 712,
            "spell": "guoluozangzuzizhizhou",
            "name": "果洛藏族自治州"
        }],
        "H": [{
            "id": 801,
            "spell": "haerbin",
            "name": "哈尔滨"
        }, {
            "id": 802,
            "spell": "hami",
            "name": "哈密"
        }, {
            "id": 803,
            "spell": "haibeizangzuzizhizhou",
            "name": "海北藏族自治州"
        }, {
            "id": 804,
            "spell": "haidongdiqu",
            "name": "海东地区"
        }, {
            "id": 805,
            "spell": "haikou",
            "name": "海口"
        }, {
            "id": 806,
            "spell": "hainanzangzuzizhizhou",
            "name": "海南藏族自治州"
        }, {
            "id": 807,
            "spell": "haiximengguzuzangzuzizhizhou",
            "name": "海西蒙古族藏族自治州"
        }, {
            "id": 808,
            "spell": "handan",
            "name": "邯郸"
        }, {
            "id": 809,
            "spell": "hanzhong",
            "name": "汉中"
        }, {
            "id": 810,
            "spell": "hangzhou",
            "name": "杭州"
        }, {
            "id": 811,
            "spell": "hefei",
            "name": "合肥"
        }, {
            "id": 812,
            "spell": "hetian",
            "name": "和田"
        }, {
            "id": 813,
            "spell": "hechi",
            "name": "河池"
        }, {
            "id": 814,
            "spell": "heyuan",
            "name": "河源"
        }, {
            "id": 815,
            "spell": "heze",
            "name": "菏泽"
        }, {
            "id": 816,
            "spell": "hezhou",
            "name": "贺州"
        }, {
            "id": 817,
            "spell": "hebi",
            "name": "鹤壁"
        }, {
            "id": 818,
            "spell": "hegang",
            "name": "鹤岗"
        }, {
            "id": 819,
            "spell": "heihe",
            "name": "黑河"
        }, {
            "id": 820,
            "spell": "hengshui",
            "name": "衡水"
        }, {
            "id": 821,
            "spell": "hengyang",
            "name": "衡阳"
        }, {
            "id": 822,
            "spell": "honghe",
            "name": "红河"
        }, {
            "id": 823,
            "spell": "huhehaote",
            "name": "呼和浩特"
        }, {
            "id": 824,
            "spell": "hulunbeier",
            "name": "呼伦贝尔"
        }, {
            "id": 825,
            "spell": "huludao",
            "name": "葫芦岛"
        }, {
            "id": 826,
            "spell": "huzhou",
            "name": "湖州"
        }, {
            "id": 827,
            "spell": "hualian",
            "name": "花莲"
        }, {
            "id": 828,
            "spell": "huaihua",
            "name": "怀化"
        }, {
            "id": 829,
            "spell": "huaian",
            "name": "淮安"
        }, {
            "id": 830,
            "spell": "huaibei",
            "name": "淮北"
        }, {
            "id": 831,
            "spell": "huainan",
            "name": "淮南"
        }, {
            "id": 832,
            "spell": "huanggang",
            "name": "黄冈"
        }, {
            "id": 833,
            "spell": "huangnanzangzuzizhizhou",
            "name": "黄南藏族自治州"
        }, {
            "id": 834,
            "spell": "huangshanshi",
            "name": "黄山市"
        }, {
            "id": 835,
            "spell": "huangshi",
            "name": "黄石"
        }, {
            "id": 836,
            "spell": "huizhou",
            "name": "惠州"
        }],
        "J": [{
            "id": 1001,
            "spell": "jixi",
            "name": "鸡西"
        }, {
            "id": 1002,
            "spell": "jilong",
            "name": "基隆"
        }, {
            "id": 1003,
            "spell": "jian",
            "name": "吉安"
        }, {
            "id": 1004,
            "spell": "jilin",
            "name": "吉林"
        }, {
            "id": 1005,
            "spell": "jinan",
            "name": "济南"
        }, {
            "id": 1006,
            "spell": "jining",
            "name": "济宁"
        }, {
            "id": 1007,
            "spell": "jiyuan",
            "name": "济源"
        }, {
            "id": 1008,
            "spell": "jiamusi",
            "name": "佳木斯"
        }, {
            "id": 1009,
            "spell": "jiaxing",
            "name": "嘉兴"
        }, {
            "id": 1010,
            "spell": "jiayi",
            "name": "嘉义"
        }, {
            "id": 1011,
            "spell": "jiayuguan",
            "name": "嘉峪关"
        }, {
            "id": 1012,
            "spell": "jiangmen",
            "name": "江门"
        }, {
            "id": 1013,
            "spell": "jiaozuo",
            "name": "焦作"
        }, {
            "id": 1014,
            "spell": "jieyang",
            "name": "揭阳"
        }, {
            "id": 1015,
            "spell": "jinchang",
            "name": "金昌"
        }, {
            "id": 1016,
            "spell": "jinhua",
            "name": "金华"
        }, {
            "id": 1017,
            "spell": "jinzhou",
            "name": "锦州"
        }, {
            "id": 1018,
            "spell": "jincheng",
            "name": "晋城"
        }, {
            "id": 1019,
            "spell": "jinzhong",
            "name": "晋中"
        }, {
            "id": 1020,
            "spell": "jingmen",
            "name": "荆门"
        }, {
            "id": 1021,
            "spell": "jingzhou",
            "name": "荆州"
        }, {
            "id": 1022,
            "spell": "jingdezhen",
            "name": "景德镇"
        }, {
            "id": 1023,
            "spell": "jiujiang",
            "name": "九江"
        }, {
            "id": 1024,
            "spell": "jiuquan",
            "name": "酒泉"
        }],
        "K": [{
            "id": 1101,
            "spell": "kashi",
            "name": "喀什"
        }, {
            "id": 1102,
            "spell": "kaifeng",
            "name": "开封"
        }, {
            "id": 1103,
            "spell": "kelamayi",
            "name": "克拉玛依"
        }, {
            "id": 1104,
            "spell": "kezilesu",
            "name": "克孜勒苏"
        }, {
            "id": 1105,
            "spell": "kezilesukeerke",
            "name": "克孜勒苏柯尔克"
        }, {
            "id": 1106,
            "spell": "kunming",
            "name": "昆明"
        }],
        "L": [{
            "id": 1201,
            "spell": "lasa",
            "name": "拉萨"
        }, {
            "id": 1202,
            "spell": "laibin",
            "name": "来宾"
        }, {
            "id": 1203,
            "spell": "laiwu",
            "name": "莱芜"
        }, {
            "id": 1204,
            "spell": "laizhoushi",
            "name": "莱州市"
        }, {
            "id": 1205,
            "spell": "lanzhou",
            "name": "兰州"
        }, {
            "id": 1206,
            "spell": "langfang",
            "name": "廊坊"
        }, {
            "id": 1207,
            "spell": "ledong",
            "name": "乐东"
        }, {
            "id": 1208,
            "spell": "leshan",
            "name": "乐山"
        }, {
            "id": 1209,
            "spell": "lijiang",
            "name": "丽江"
        }, {
            "id": 1210,
            "spell": "lishui",
            "name": "丽水"
        }, {
            "id": 1211,
            "spell": "lianyungang",
            "name": "连云港"
        }, {
            "id": 1212,
            "spell": "liangshanzhou",
            "name": "凉山州"
        }, {
            "id": 1213,
            "spell": "liaoyang",
            "name": "辽阳"
        }, {
            "id": 1214,
            "spell": "liaoyuan",
            "name": "辽源"
        }, {
            "id": 1215,
            "spell": "liaocheng",
            "name": "聊城"
        }, {
            "id": 1216,
            "spell": "linzhi",
            "name": "林芝"
        }, {
            "id": 1217,
            "spell": "lincang",
            "name": "临沧"
        }, {
            "id": 1218,
            "spell": "linfen",
            "name": "临汾"
        }, {
            "id": 1219,
            "spell": "lingao",
            "name": "临高"
        }, {
            "id": 1220,
            "spell": "linxia",
            "name": "临夏"
        }, {
            "id": 1221,
            "spell": "linyi",
            "name": "临沂"
        }, {
            "id": 1222,
            "spell": "lingshui",
            "name": "陵水"
        }, {
            "id": 1223,
            "spell": "liuzhou",
            "name": "柳州"
        }, {
            "id": 1224,
            "spell": "liuan",
            "name": "六安"
        }, {
            "id": 1225,
            "spell": "liupanshui",
            "name": "六盘水"
        }, {
            "id": 1226,
            "spell": "longyan",
            "name": "龙岩"
        }, {
            "id": 1227,
            "spell": "longnan",
            "name": "陇南"
        }, {
            "id": 1228,
            "spell": "loudi",
            "name": "娄底"
        }, {
            "id": 1229,
            "spell": "luzhou",
            "name": "泸州"
        }, {
            "id": 1230,
            "spell": "luoyang",
            "name": "洛阳"
        }, {
            "id": 1231,
            "spell": "luohe",
            "name": "漯河"
        }, {
            "id": 1232,
            "spell": "lvliang",
            "name": "吕梁"
        }],
        "M": [{
            "id": 1301,
            "spell": "maanshan",
            "name": "马鞍山"
        }, {
            "id": 1302,
            "spell": "maoming",
            "name": "茂名"
        }, {
            "id": 1303,
            "spell": "meishan",
            "name": "眉山"
        }, {
            "id": 1304,
            "spell": "meizhou",
            "name": "梅州"
        }, {
            "id": 1305,
            "spell": "mianyang",
            "name": "绵阳"
        }, {
            "id": 1306,
            "spell": "miaoli",
            "name": "苗栗"
        }, {
            "id": 1307,
            "spell": "mudanjiang",
            "name": "牡丹江"
        }],
        "N": [{
            "id": 1401,
            "spell": "naqu",
            "name": "那曲"
        }, {
            "id": 1402,
            "spell": "nanchang",
            "name": "南昌"
        }, {
            "id": 1403,
            "spell": "nanchong",
            "name": "南充"
        }, {
            "id": 1404,
            "spell": "nanjing",
            "name": "南京"
        }, {
            "id": 1405,
            "spell": "nanning",
            "name": "南宁"
        }, {
            "id": 1406,
            "spell": "nanping",
            "name": "南平"
        }, {
            "id": 1407,
            "spell": "nantong",
            "name": "南通"
        }, {
            "id": 1408,
            "spell": "nantou",
            "name": "南投"
        }, {
            "id": 1409,
            "spell": "nanyang",
            "name": "南阳"
        }, {
            "id": 1410,
            "spell": "neijiang",
            "name": "内江"
        }, {
            "id": 1411,
            "spell": "ningbo",
            "name": "宁波"
        }, {
            "id": 1412,
            "spell": "ningde",
            "name": "宁德"
        }, {
            "id": 1413,
            "spell": "nujiang",
            "name": "怒江"
        }],
        "P": [{
            "id": 1601,
            "spell": "panzhihua",
            "name": "攀枝花"
        }, {
            "id": 1602,
            "spell": "panjin",
            "name": "盘锦"
        }, {
            "id": 1603,
            "spell": "pingdingshan",
            "name": "平顶山"
        }, {
            "id": 1604,
            "spell": "pinghu",
            "name": "平湖"
        }, {
            "id": 1605,
            "spell": "pingliang",
            "name": "平凉"
        }, {
            "id": 1606,
            "spell": "pingdong",
            "name": "屏东"
        }, {
            "id": 1607,
            "spell": "pingxiang",
            "name": "萍乡"
        }, {
            "id": 1608,
            "spell": "putian",
            "name": "莆田"
        }, {
            "id": 1609,
            "spell": "puyang",
            "name": "濮阳"
        }, {
            "id": 1610,
            "spell": "puning",
            "name": "普宁"
        }, {
            "id": 1003,
            "spell": "puer",
            "name": "普洱"
        }],
        "Q": [{
            "id": 1701,
            "spell": "qitaihe",
            "name": "七台河"
        }, {
            "id": 1702,
            "spell": "qiqihaer",
            "name": "齐齐哈尔"
        }, {
            "id": 1703,
            "spell": "qianjiang",
            "name": "潜江"
        }, {
            "id": 1704,
            "spell": "qiandongnan",
            "name": "黔东南"
        }, {
            "id": 1705,
            "spell": "qiannan",
            "name": "黔南"
        }, {
            "id": 1706,
            "spell": "qianxinan",
            "name": "黔西南"
        }, {
            "id": 1707,
            "spell": "qinzhou",
            "name": "钦州"
        }, {
            "id": 1708,
            "spell": "qinhuangdao",
            "name": "秦皇岛"
        }, {
            "id": 1709,
            "spell": "qingdao",
            "name": "青岛"
        }, {
            "id": 1710,
            "spell": "qingyuan",
            "name": "清远"
        }, {
            "id": 1711,
            "spell": "qingyang",
            "name": "庆阳"
        }, {
            "id": 1712,
            "spell": "qionghai",
            "name": "琼海"
        }, {
            "id": 1713,
            "spell": "qiongzhong",
            "name": "琼中"
        }, {
            "id": 1714,
            "spell": "quzhou",
            "name": "衢州"
        }, {
            "id": 1715,
            "spell": "qujing",
            "name": "曲靖"
        }, {
            "id": 1716,
            "spell": "quanzhou",
            "name": "泉州"
        }],
        "R": [{
            "id": 1801,
            "spell": "rikaze",
            "name": "日喀则"
        }, {
            "id": 1802,
            "spell": "rizhao",
            "name": "日照"
        }, {
            "id": 1803,
            "spell": "ruijinshi",
            "name": "瑞金市"
        }],
        "S": [{
            "id": 1901,
            "spell": "sanmenxia",
            "name": "三门峡"
        }, {
            "id": 1902,
            "spell": "sanming",
            "name": "三明"
        }, {
            "id": 1903,
            "spell": "sansha",
            "name": "三沙"
        }, {
            "id": 1904,
            "spell": "sanya",
            "name": "三亚"
        }, {
            "id": 1905,
            "spell": "shannan",
            "name": "山南"
        }, {
            "id": 1906,
            "spell": "shantou",
            "name": "汕头"
        }, {
            "id": 1907,
            "spell": "shanwei",
            "name": "汕尾"
        }, {
            "id": 1908,
            "spell": "shangluo",
            "name": "商洛"
        }, {
            "id": 1909,
            "spell": "shangqiu",
            "name": "商丘"
        }, {
            "id": 1910,
            "spell": "shanghai",
            "name": "上海"
        }, {
            "id": 1911,
            "spell": "shangrao",
            "name": "上饶"
        }, {
            "id": 1912,
            "spell": "shaoguan",
            "name": "韶关"
        }, {
            "id": 1913,
            "spell": "shaoyang",
            "name": "邵阳"
        }, {
            "id": 1914,
            "spell": "shaoxing",
            "name": "绍兴"
        }, {
            "id": 1915,
            "spell": "shenzhen",
            "name": "深圳"
        }, {
            "id": 1916,
            "spell": "shennongjia",
            "name": "神农架"
        }, {
            "id": 1917,
            "spell": "shenyang",
            "name": "沈阳"
        }, {
            "id": 1918,
            "spell": "shiyan",
            "name": "十堰"
        }, {
            "id": 1919,
            "spell": "shihezi",
            "name": "石河子"
        }, {
            "id": 1920,
            "spell": "shijiazhuang",
            "name": "石家庄"
        }, {
            "id": 1921,
            "spell": "shizuishan",
            "name": "石嘴山"
        }, {
            "id": 1922,
            "spell": "shuangyashan",
            "name": "双鸭山"
        }, {
            "id": 1923,
            "spell": "shuozhou",
            "name": "朔州"
        }, {
            "id": 1924,
            "spell": "siping",
            "name": "四平"
        }, {
            "id": 1925,
            "spell": "songyuan",
            "name": "松原"
        }, {
            "id": 1926,
            "spell": "suzhou",
            "name": "苏州"
        }, {
            "id": 1927,
            "spell": "suihua",
            "name": "绥化"
        }, {
            "id": 1928,
            "spell": "suizhou",
            "name": "随州"
        }, {
            "id": 1929,
            "spell": "suining",
            "name": "遂宁"
        }, {
            "id": 1930,
            "spell": "suqian",
            "name": "宿迁"
        }, {
            "id": 1931,
            "spell": "suzhou",
            "name": "宿州"
        }],
        "T": [{
            "id": 2001,
            "spell": "tachengdiqu",
            "name": "塔城地区"
        }, {
            "id": 2002,
            "spell": "taibei",
            "name": "台北"
        }, {
            "id": 2003,
            "spell": "taidong",
            "name": "台东"
        }, {
            "id": 2004,
            "spell": "tainan",
            "name": "台南"
        }, {
            "id": 2005,
            "spell": "taishanshi",
            "name": "台山市"
        }, {
            "id": 2006,
            "spell": "taizhong",
            "name": "台中"
        }, {
            "id": 2007,
            "spell": "taizhou",
            "name": "台州"
        }, {
            "id": 2008,
            "spell": "taiyuan",
            "name": "太原"
        }, {
            "id": 2009,
            "spell": "taian",
            "name": "泰安"
        }, {
            "id": 2010,
            "spell": "taizhou",
            "name": "泰州"
        }, {
            "id": 2011,
            "spell": "tangshan",
            "name": "唐山"
        }, {
            "id": 2012,
            "spell": "taoyuan",
            "name": "桃园"
        }, {
            "id": 2013,
            "spell": "tianjin",
            "name": "天津"
        }, {
            "id": 2014,
            "spell": "tianmen",
            "name": "天门"
        }, {
            "id": 2015,
            "spell": "tianshui",
            "name": "天水"
        }, {
            "id": 2016,
            "spell": "tieling",
            "name": "铁岭"
        }, {
            "id": 2017,
            "spell": "tonghua",
            "name": "通化"
        }, {
            "id": 2018,
            "spell": "tongliao",
            "name": "通辽"
        }, {
            "id": 2019,
            "spell": "tongchuan",
            "name": "铜川"
        }, {
            "id": 2020,
            "spell": "tongling",
            "name": "铜陵"
        }, {
            "id": 2021,
            "spell": "tongren",
            "name": "铜仁"
        }, {
            "id": 2022,
            "spell": "tumushuke",
            "name": "图木舒克"
        }, {
            "id": 2023,
            "spell": "tulufan",
            "name": "吐鲁番"
        }, {
            "id": 2024,
            "spell": "tunchang",
            "name": "屯昌"
        }],
        "W": [{
            "id": 2301,
            "spell": "wanning",
            "name": "万宁"
        }, {
            "id": 2302,
            "spell": "weihai",
            "name": "威海"
        }, {
            "id": 2303,
            "spell": "weifang",
            "name": "潍坊"
        }, {
            "id": 2304,
            "spell": "weinan",
            "name": "渭南"
        }, {
            "id": 2305,
            "spell": "wenzhou",
            "name": "温州"
        }, {
            "id": 2306,
            "spell": "wenchang",
            "name": "文昌"
        }, {
            "id": 2307,
            "spell": "wenshan",
            "name": "文山"
        }, {
            "id": 2308,
            "spell": "wuhai",
            "name": "乌海"
        }, {
            "id": 2309,
            "spell": "wulanchabu",
            "name": "乌兰察布"
        }, {
            "id": 2310,
            "spell": "wulumuqi",
            "name": "乌鲁木齐"
        }, {
            "id": 2311,
            "spell": "wuxi",
            "name": "无锡"
        }, {
            "id": 2312,
            "spell": "wuhu",
            "name": "芜湖"
        }, {
            "id": 2313,
            "spell": "wuzhong",
            "name": "吴忠"
        }, {
            "id": 2314,
            "spell": "wuzhou",
            "name": "梧州"
        }, {
            "id": 2315,
            "spell": "wujiaqushi",
            "name": "五家渠市"
        }, {
            "id": 2316,
            "spell": "wuzhishan",
            "name": "五指山"
        }, {
            "id": 2317,
            "spell": "wuhan",
            "name": "武汉"
        }, {
            "id": 2318,
            "spell": "wuwei",
            "name": "武威"
        }],
        "X": [{
            "id": 2401,
            "spell": "xiamen",
            "name": "厦门"
        }, {
            "id": 2402,
            "spell": "xian",
            "name": "西安"
        }, {
            "id": 2403,
            "spell": "xinanzhongshaqundao",
            "name": "西南中沙群岛"
        }, {
            "id": 2404,
            "spell": "xining",
            "name": "西宁"
        }, {
            "id": 2405,
            "spell": "xishuangbanna",
            "name": "西双版纳"
        }, {
            "id": 2406,
            "spell": "xilinguolemeng",
            "name": "锡林郭勒盟"
        }, {
            "id": 2407,
            "spell": "xiantao",
            "name": "仙桃"
        }, {
            "id": 2408,
            "spell": "xianning",
            "name": "咸宁"
        }, {
            "id": 2409,
            "spell": "xianyang",
            "name": "咸阳"
        }, {
            "id": 2410,
            "spell": "xianggang",
            "name": "香港"
        }, {
            "id": 2411,
            "spell": "xiangtan",
            "name": "湘潭"
        }, {
            "id": 2412,
            "spell": "xiangxi",
            "name": "湘西"
        }, {
            "id": 2413,
            "spell": "xiangfan",
            "name": "襄樊"
        }, {
            "id": 2414,
            "spell": "xiangyang",
            "name": "襄阳"
        }, {
            "id": 2415,
            "spell": "xiaogan",
            "name": "孝感"
        }, {
            "id": 2416,
            "spell": "xinzhou",
            "name": "忻州"
        }, {
            "id": 2417,
            "spell": "xinbei",
            "name": "新北"
        }, {
            "id": 2418,
            "spell": "xinxiang",
            "name": "新乡"
        }, {
            "id": 2419,
            "spell": "xinyu",
            "name": "新余"
        }, {
            "id": 2420,
            "spell": "xinzhu",
            "name": "新竹"
        }, {
            "id": 2421,
            "spell": "xinyang",
            "name": "信阳"
        }, {
            "id": 2422,
            "spell": "xingtai",
            "name": "邢台"
        }, {
            "id": 2423,
            "spell": "xinganmeng",
            "name": "兴安盟"
        }, {
            "id": 2424,
            "spell": "xuzhou",
            "name": "徐州"
        }, {
            "id": 2425,
            "spell": "xuchang",
            "name": "许昌"
        }, {
            "id": 2426,
            "spell": "xuancheng",
            "name": "宣城"
        }],
        "Y": [{
            "id": 2501,
            "spell": "yaan",
            "name": "雅安"
        }, {
            "id": 2502,
            "spell": "yantai",
            "name": "烟台"
        }, {
            "id": 2503,
            "spell": "yanan",
            "name": "延安"
        }, {
            "id": 2504,
            "spell": "yanbian",
            "name": "延边"
        }, {
            "id": 2505,
            "spell": "yancheng",
            "name": "盐城"
        }, {
            "id": 2506,
            "spell": "yangzhou",
            "name": "扬州"
        }, {
            "id": 2507,
            "spell": "yangjiang",
            "name": "阳江"
        }, {
            "id": 2508,
            "spell": "yangquan",
            "name": "阳泉"
        }, {
            "id": 2509,
            "spell": "yichun",
            "name": "伊春"
        }, {
            "id": 2510,
            "spell": "yili",
            "name": "伊犁"
        }, {
            "id": 2511,
            "spell": "yilihasakezizhizhou",
            "name": "伊犁哈萨克自治州"
        }, {
            "id": 2512,
            "spell": "yibin",
            "name": "宜宾"
        }, {
            "id": 2513,
            "spell": "yichang",
            "name": "宜昌"
        }, {
            "id": 2514,
            "spell": "yichun",
            "name": "宜春"
        }, {
            "id": 2515,
            "spell": "yilan",
            "name": "宜兰"
        }, {
            "id": 2516,
            "spell": "yiyang",
            "name": "益阳"
        }, {
            "id": 2517,
            "spell": "yinchuan",
            "name": "银川"
        }, {
            "id": 2518,
            "spell": "yingtan",
            "name": "鹰潭"
        }, {
            "id": 2519,
            "spell": "yingkou",
            "name": "营口"
        }, {
            "id": 2520,
            "spell": "yongzhou",
            "name": "永州"
        }, {
            "id": 2521,
            "spell": "yulin",
            "name": "榆林"
        }, {
            "id": 2522,
            "spell": "yulin",
            "name": "玉林"
        }, {
            "id": 2523,
            "spell": "yushuzangzuzizhizhou",
            "name": "玉树藏族自治州"
        }, {
            "id": 2534,
            "spell": "yuxi",
            "name": "玉溪"
        }, {
            "id": 2525,
            "spell": "yueyang",
            "name": "岳阳"
        }, {
            "id": 2526,
            "spell": "yunfu",
            "name": "云浮"
        }, {
            "id": 2527,
            "spell": "yunlin",
            "name": "云林"
        }, {
            "id": 2528,
            "spell": "yuncheng",
            "name": "运城"
        }],
        "Z": [{
            "id": 2601,
            "spell": "zaozhuang",
            "name": "枣庄"
        }, {
            "id": 2602,
            "spell": "zhanjiang",
            "name": "湛江"
        }, {
            "id": 2603,
            "spell": "zhangjiajie",
            "name": "张家界"
        }, {
            "id": 2604,
            "spell": "zhangjiakou",
            "name": "张家口"
        }, {
            "id": 2605,
            "spell": "zhangye",
            "name": "张掖"
        }, {
            "id": 2606,
            "spell": "zhanghua",
            "name": "彰化"
        }, {
            "id": 2607,
            "spell": "zhangzhou",
            "name": "漳州"
        }, {
            "id": 2608,
            "spell": "zhaotong",
            "name": "昭通"
        }, {
            "id": 2609,
            "spell": "zhaoqing",
            "name": "肇庆"
        }, {
            "id": 2610,
            "spell": "zhenjiang",
            "name": "镇江"
        }, {
            "id": 2611,
            "spell": "zhengzhou",
            "name": "郑州"
        }, {
            "id": 2612,
            "spell": "zhongshan",
            "name": "中山"
        }, {
            "id": 2613,
            "spell": "zhongwei",
            "name": "中卫"
        }, {
            "id": 2614,
            "spell": "zhoushan",
            "name": "舟山"
        }, {
            "id": 2615,
            "spell": "zhoukou",
            "name": "周口"
        }, {
            "id": 2616,
            "spell": "zhuhai",
            "name": "珠海"
        }, {
            "id": 2617,
            "spell": "zhuzhou",
            "name": "株洲"
        }, {
            "id": 2618,
            "spell": "zhumadian",
            "name": "驻马店"
        }, {
            "id": 2619,
            "spell": "ziyang",
            "name": "资阳"
        }, {
            "id": 2620,
            "spell": "zibo",
            "name": "淄博"
        }, {
            "id": 2621,
            "spell": "zigong",
            "name": "自贡"
        }, {
            "id": 2622,
            "spell": "zunyi",
            "name": "遵义"
        }]
    }
});
Mock.mock(/\/getDetailInfo[\s\S]*?/, 'get', {
    
        "id": "0001",
        "sightName": "武隆天坑地缝国家地质公园(AAAAA景区)",
        "bannerImg": "http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_600x330_9eb9410c.jpg",
        "gallaryImgs": [
            "http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_350x240_40073ef0.jpg",
            "http://img1.qunarzz.com/sight/p0/201401/17/72e8ef351fc2129b8e1911fc9d8a6fc3.jpg_350x240_b33f4023.jpg",
            "http://img1.qunarzz.com/sight/p0/201401/17/849db06904ffe8c7997a2ba85f78672f.jpg_350x240_c73295d7.jpg",
            "http://img1.qunarzz.com/sight/p0/201401/17/3162227fc2c70b05292d7c89259983e3.jpg_350x240_00d77f81.jpg"
        ],
        "priceType": [
            {
                "name": "成人票",
                "children": [
                    {
                        "name": "成人组团联票",
                        "children": [
                            {
                                "name": "成人组团 - 大型团体联票"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "学生票",
                "children": [
                    {
                        "name": "学生组团票"
                    },
                    {
                        "name": "大学生(学生证)优惠票"
                    }
                ]
            },
            {
                "name": "儿童票"
            },
            {
                "name": "特惠票",
                "children": [
                    {
                        "name": "退伍军人票"
                    },
                    {
                        "name": "老年人票"
                    },
                    {
                        "name": "残疾人票"
                    }
                ]
            }
        ]
    },
    {
        "id": "0002",
        "sightName": "重庆柏联温泉",
        "bannerImg": "http://img1.qunarzz.com/sight/p0/201401/29/8e60d7bb448bc8d4652efb382324076f.jpg_600x330_6bbc3349.jpg",
        "gallaryImgs": [
            "http://img1.qunarzz.com/sight/p0/201401/29/8e60d7bb448bc8d4652efb382324076f.jpg_350x240_19f897b1.jpg",
            "http://img1.qunarzz.com/sight/p0/201401/29/f4e8fc8ecb69625c6c5ecc7a96c285e4.jpg_350x240_61840051.jpg",
            "http://img1.qunarzz.com/sight/p0/1411/59/51e6bc8b9b8a24b05be103f0b097676d.water.jpg_350x240_5a81a022.jpg",
            "http://img1.qunarzz.com/sight/p0/1411/6b/3c0f516dd29020e7a27e876f62206b6a.water.jpg_350x240_91b04228.jpg",
            "http://img1.qunarzz.com/sight/p0/1408/29/2f35cebcac3b75c0d5131c6d293f7679.jpg_350x240_c2160f31.jpg",
            "http://img1.qunarzz.com/sight/p0/201401/29/d8e051a97e6727724499143010b1ac39.jpg_350x240_cdf2f29a.jpg",
            "http://img1.qunarzz.com/sight/p0/201401/29/560939ab2be4397b4083b7af75d1f838.jpg_350x240_2dc3004d.jpg",
            "http://img1.qunarzz.com/sight/p0/1501/3c/3c36b64e0f83627c.water.jpg_350x240_63c1d401.jpg"
        ],
        "priceType": [
            {
                "name": "成人票",
                "children": [
                    {
                        "name": "成人组团联票",
                        "children": [
                            {
                                "name": "成人组团 - 大型团体联票"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "儿童票"
            },
            {
                "name": "特惠票",
                "children": [
                    {
                        "name": "退伍军人票"
                    },
                    {
                        "name": "老年人票"
                    }
                ]
            }
        ]
    },
    {
        "id": "0003",
        "sightName": "梦幻奥陶纪",
        "bannerImg": "http://img1.qunarzz.com/sight/p0/1707/c5/c568c1adf9b18efa3.img.jpg_600x330_199e968e.jpg",
        "gallaryImgs": [
            "http://img1.qunarzz.com/sight/p0/1707/c5/c568c1adf9b18efa3.img.jpg_350x240_f3408757.jpg",
            "http://img1.qunarzz.com/sight/p0/1803/73/73c19796227a9ddda3.img.jpg_350x240_0be7df73.jpg",
            "http://img1.qunarzz.com/sight/p0/1803/b9/b9bc15fc941a2e8ba3.img.jpg_350x240_9661e152.jpg",
            "http://img1.qunarzz.com/sight/p0/1803/e0/e06593616adaa606a3.img.jpg_350x240_3d102c41.jpg",
            "http://img1.qunarzz.com/sight/p0/1803/29/291e280292d5b8fa3.img.jpg_350x240_f6015021.jpg",
            "http://img1.qunarzz.com/sight/p0/1803/b2/b217402e197ab999a3.img.jpg_350x240_f7e9fa40.jpg",
            "http://img1.qunarzz.com/sight/p0/1803/2f/2fb7c5ac72da4a21a3.img.jpg_350x240_69117de1.jpg",
            "http://img1.qunarzz.com/sight/p0/1803/7f/7f76368c17307b85a3.img.jpg_350x240_8e2496d6.jpg",
            "http://img1.qunarzz.com/sight/p0/1803/2c/2c36393a5aa211dba3.img.jpg_350x240_af835876.jpg",
            "http://img1.qunarzz.com/sight/p0/1707/81/819491b2613f0a84a3.img.jpg_350x240_617de618.jpg",
            "http://img1.qunarzz.com/sight/p0/1707/5b/5bd0395e02644459a3.img.png_350x240_1efd0da6.png",
            "http://img1.qunarzz.com/sight/p0/1707/10/103668be75a61809a3.img.png_350x240_7e879ce0.png",
            "http://img1.qunarzz.com/sight/p0/1707/cd/cd5bda74bcefba5ca3.img.jpg_350x240_01eef836.jpg",
            "http://img1.qunarzz.com/sight/p0/1707/d8/d8bbe86c45d54821a3.img.jpg_350x240_dd443247.jpg",
            "http://img1.qunarzz.com/sight/p0/1707/35/35cd9fc51dc6b561a3.img.jpg_350x240_4f4dccdf.jpg",
            "http://img1.qunarzz.com/sight/p0/1707/e8/e83fd9f1137466a5a3.img.jpg_350x240_c424cbef.jpg"
        ],
        "priceType": [
            {
                "name": "成人票",
                "children": [
                    {
                        "name": "成人组团联票",
                        "children": [
                            {
                                "name": "成人组团 - 大型团体联票"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "学生票",
                "children": [
                    {
                        "name": "学生组团票"
                    },
                    {
                        "name": "大学生(学生证)优惠票"
                    }
                ]
            },
            {
                "name": "儿童票"
            },
            {
                "name": "特惠票",
                "children": [
                    {
                        "name": "退伍军人票"
                    },
                    {
                        "name": "老年人票"
                    },
                    {
                        "name": "残疾人票"
                    }
                ]
            }
        ]
    },
    {
        "id": "0004",
        "sightName": "酉阳桃花源",
        "bannerImg": "http://img1.qunarzz.com/sight/p0/1708/ef/ef538bb8d9911483a3.img.jpg_600x330_c3a0d8fa.jpg",
        "gallaryImgs": [
            "http://img1.qunarzz.com/sight/p0/1708/ef/ef538bb8d9911483a3.img.jpg_350x240_420b2203.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/2b/2bc2dad4898a2bb4a3.img.jpg_350x240_9ff7aa55.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/bf/bf03742ef7966762a3.img.jpg_350x240_5dc03ee4.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/99/99e190e5a1d97276a3.img.jpg_350x240_e6a5f591.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/ea/ea6f5a2acfdb527ea3.img.jpg_350x240_0b5298e8.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/7d/7daddb8ce28b9d1ea3.img.jpg_350x240_c580903d.jpg",
            "http://img1.qunarzz.com/sight/p0/1505/c3/c3037e8701c7292d.water.jpg_350x240_f86e2b80.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/57/5713263c6cdec4d0a3.img.jpg_350x240_4d275ae6.jpg",
            "http://img1.qunarzz.com/sight/p0/1507/5f/5f64faa1cd3c2d89.img.jpg_350x240_befae8a1.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/b4/b4ea2cefb04e4965a3.img.jpg_350x240_9afa1a9a.jpg",
            "http://img1.qunarzz.com/sight/p0/1507/e4/e428cb316753baf1.img.jpg_350x240_564a53e8.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/f6/f6c24194ba10c844a3.img.jpg_350x240_8489afef.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/4c/4c2cd755ee7797fba3.img.jpg_350x240_d6edc04a.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/9e/9e3ee4db2c7f354ba3.img.jpg_350x240_6c6e4cef.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/96/966c7761e5cad3cda3.img.jpg_350x240_d0f54648.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/60/601d8a8be25e3e36a3.img.jpg_350x240_fdc62b50.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/85/856d7ae25b28cc6ca3.img.jpg_350x240_73160e34.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/7a/7ac0366e5c10586ca3.img.jpg_350x240_12afe5a8.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/54/542e9d36ae143d1fa3.img.jpg_350x240_38b401de.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/49/49efb2d852ad502ea3.img.jpg_350x240_ad322125.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/bd/bd5db408fe91f73a3.img.jpg_350x240_cf2879a9.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/bf/bf4c3ce1281d2eb3a3.img.jpg_350x240_28e977cb.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/62/627dc2836e36fec0a3.img.jpg_350x240_f2650c73.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/ed/ed4304b7f7dfa3cea3.img.jpg_350x240_153556ed.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/3c/3ccd783da2fcabda3.img.jpg_350x240_f6eada3c.jpg",
            "http://img1.qunarzz.com/sight/p0/1708/ec/ec9491dfc86fa8a2a3.img.jpg_350x240_9a039570.jpg"
        ],
        "priceType": [
            {
                "name": "成人票",
                "children": [
                    {
                        "name": "成人组团联票"
                    }
                ]
            },
            {
                "name": "儿童票"
            },
            {
                "name": "特惠票",
                "children": [
                    {
                        "name": "退伍军人票"
                    },
                    {
                        "name": "老年人票"
                    }
                ]
            }
        ]
    },
    {
        "id": "0005",
        "sightName": "黑山谷",
        "bannerImg": "http://img1.qunarzz.com/sight/p0/201305/08/8638c7dbd656cafac8d65eac.jpg_600x330_af87cf27.jpg",
        "gallaryImgs": [
            "http://img1.qunarzz.com/sight/p0/201305/08/8638c7dbd656cafac8d65eac.jpg_350x240_3cc0cbe4.jpg",
            "http://img1.qunarzz.com/sight/p0/1603/fe/fee344a10a57e65a90.water.jpg_350x240_adc37100.jpg",
            "http://img1.qunarzz.com/wugc/p58/201306/06/4b7c95616039702f93835fbb.jpg_350x240_cff52b6d.jpg",
            "http://img1.qunarzz.com/sight/p0/201305/10/51f35174fff7cec5c8d65eac.jpg_350x240_629b8d55.jpg",
            "http://img1.qunarzz.com/sight/p0/201305/10/086710f494ba444cc8d65eac.jpg_350x240_c9b4422b.jpg",
            "http://img1.qunarzz.com/sight/p0/1507/9b/24cbe6e536a8306ffe17bad4937e61bc.water.jpg_350x240_99e4adca.jpg",
            "http://img1.qunarzz.com/sight/p0/1507/fd/b6860e6ffac4fa792546527da013552c.water.jpg_350x240_37d8b18c.jpg"
        ],
        "priceType": [
            {
                "name": "成人票",
                "children": [
                    {
                        "name": "成人组团联票",
                        "children": [
                            {
                                "name": "成人组团 - 大型团体联票"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "儿童票"
            },
            {
                "name": "特惠票",
                "children": [
                    {
                        "name": "退伍军人票"
                    },
                    {
                        "name": "老年人票"
                    }
                ]
            },
            {
                "name": "本地年票",
                "children": [
                    {
                        "name": "一年票"
                    },
                    {
                        "name": "二年票(优惠)"
                    }
                ]
            }
        ]
    },
    {
        "id": "0006",
        "sightName": "重庆欢乐谷",
        "bannerImg": "http://img1.qunarzz.com/sight/p0/1709/7b/7bf5984d7e6a3c2da3.img.jpg_600x330_c6e086d3.jpg",
        "gallaryImgs": [
            "http://img1.qunarzz.com/sight/p0/1709/7b/7bf5984d7e6a3c2da3.img.jpg_350x240_48d80d88.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/39/39b5b5a87f82aac2a3.img.jpg_350x240_7ee37c0e.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/17/1795c6ab21a4cf8aa3.img.jpg_350x240_3cbad75d.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/32/3225e0be43eec8aba3.img.jpg_350x240_8e1ce507.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/e4/e4b97c2fbb4e696a3.img.png_350x240_65dca2e7.png",
            "http://img1.qunarzz.com/sight/p0/1709/cc/cce6bf0aa9b8530da3.img.jpg_350x240_f5c53e4b.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/9c/9c715cadb75bbaafa3.img.jpg_350x240_9be5b4b8.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/1d/1d4124a7ca205ab6a3.img.png_350x240_4c71d1d7.png",
            "http://img1.qunarzz.com/sight/p0/1709/64/64b4f1b7a5201f02a3.img.jpg_350x240_2a3649c1.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/a5/a530e96a42a0bb61a3.img.jpg_350x240_ff38b672.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/8f/8f0e04eb414ca850a3.img.jpg_350x240_56f09286.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/12/123503f5773e3eeaa3.img.jpg_350x240_c7846ab4.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/4a/4a7443c5f2cce1dca3.img.jpg_350x240_2e0b330e.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/6d/6d618c054dbee616a3.img.jpg_350x240_6bd0cb3f.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/dd/dd1c7209264d4b7ba3.img.jpg_350x240_786dba21.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/50/505b2fd4666d23aba3.img.jpg_350x240_70fc3c8d.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/59/59d80988e0b92c43a3.img.jpg_350x240_3c9d83c4.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/be/bee110fb54b1cc07a3.img.jpg_350x240_20807f07.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/a0/a096de3d4646a5a6a3.img.jpg_350x240_04b581f2.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/3a/3a654cfc7cfab8bba3.img.png_350x240_57e06fb6.png",
            "http://img1.qunarzz.com/sight/p0/1709/23/23080213c2d1a9fea3.img.jpg_350x240_4245c194.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/ab/ab3c9cfbd8174619a3.img.jpg_350x240_efe3e1d5.jpg",
            "http://img1.qunarzz.com/sight/p0/1709/29/29f69aaaa6973ec7a3.img.png_350x240_b3fffa2a.png"
        ],
        "priceType": [
            {
                "name": "成人票",
                "children": [
                    {
                        "name": "成人组团联票",
                        "children": [
                            {
                                "name": "成人组团 - 大型团体联票"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "儿童票"
            },
            {
                "name": "特惠票",
                "children": [
                    {
                        "name": "退伍军人票"
                    },
                    {
                        "name": "老年人票"
                    }
                ]
            },
            {
                "name": "月票"
            },
            {
                "name": "季票",
                "children": [
                    {
                        "name": "旺季"
                    },
                    {
                        "name": "淡季"
                    }
                ]
            },
            {
                "name": "年票",
                "children": [
                    {
                        "name": "半年票"
                    },
                    {
                        "name": "一年票"
                    },
                    {
                        "name": "二年票"
                    },
                    {
                        "name": "五年票"
                    }
                ]
            }
        ]
    }

)