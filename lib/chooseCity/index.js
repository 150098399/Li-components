import { defineComponent as J, ref as t, onMounted as K, resolveComponent as u, openBlock as e, createBlock as k, withCtx as i, createElementVNode as v, toDisplayString as y, createVNode as d, normalizeClass as Q, createElementBlock as s, Fragment as p, renderList as g, createCommentVNode as E, createTextVNode as G } from "vue";
const R = {
  cities: {
    A: [
      {
        id: 107,
        name: "阿坝",
        spell: "aba"
      },
      {
        id: 374,
        name: "阿克苏",
        spell: "akesu"
      },
      {
        id: 267,
        name: "阿拉善",
        spell: "alashan"
      },
      {
        id: 382,
        name: "阿勒泰",
        spell: "aletai"
      },
      {
        id: 397,
        name: "澳门",
        spell: "aomeny"
      },
      {
        id: 307,
        name: "安康",
        spell: "ankang"
      },
      {
        id: 227,
        name: "安庆",
        spell: "anqing"
      },
      {
        id: 127,
        name: "鞍山",
        spell: "anshan"
      },
      {
        id: 120,
        name: "安顺",
        spell: "anshun"
      },
      {
        id: 173,
        name: "安阳",
        spell: "anyang"
      }
    ],
    B: [
      {
        id: 196,
        name: "白城",
        spell: "baicheng"
      },
      {
        id: 247,
        name: "百色",
        spell: "baise"
      },
      {
        id: 4052,
        name: "白沙",
        spell: "baisha"
      },
      {
        id: 194,
        name: "白山",
        spell: "baishan"
      },
      {
        id: 157,
        name: "保定",
        spell: "baoding"
      },
      {
        id: 302,
        name: "宝鸡",
        spell: "baoji"
      },
      {
        id: 360,
        name: "保山",
        spell: "baoshan"
      },
      {
        id: 4054,
        name: "保亭",
        spell: "baoting"
      },
      {
        id: 257,
        name: "包头",
        spell: "baotou"
      },
      {
        id: 263,
        name: "巴彦淖尔",
        spell: "bayannaoer"
      },
      {
        id: 377,
        name: "巴音郭楞",
        spell: "bayinguoleng"
      },
      {
        id: 105,
        name: "巴中",
        spell: "bazhong"
      },
      {
        id: 251,
        name: "北海",
        spell: "beihai"
      },
      {
        id: 48,
        name: "北京",
        spell: "beijing"
      },
      {
        id: 225,
        name: "蚌埠",
        spell: "bengbu"
      },
      {
        id: 134,
        name: "本溪",
        spell: "benxiln"
      },
      {
        id: 122,
        name: "毕节",
        spell: "bijie"
      },
      {
        id: 214,
        name: "滨州",
        spell: "binzhou"
      },
      {
        id: 379,
        name: "博尔塔拉",
        spell: "boertala"
      },
      {
        id: 236,
        name: "亳州",
        spell: "bozhou"
      }
    ],
    C: [
      {
        id: 159,
        name: "沧州",
        spell: "cangzhou"
      },
      {
        id: 189,
        name: "长春",
        spell: "changchun"
      },
      {
        id: 338,
        name: "常德",
        spell: "changde"
      },
      {
        id: 378,
        name: "昌吉",
        spell: "changji"
      },
      {
        id: 4051,
        name: "昌江",
        spell: "changjiang"
      },
      {
        id: 63,
        name: "长沙",
        spell: "changsha"
      },
      {
        id: 272,
        name: "长治",
        spell: "changzhi"
      },
      {
        id: 21,
        name: "常州",
        spell: "changzhou"
      },
      {
        id: 83,
        name: "潮州",
        spell: "chaozhou"
      },
      {
        id: 158,
        name: "承德",
        spell: "chengde"
      },
      {
        id: 10,
        name: "成都",
        spell: "chengdu"
      },
      {
        id: 4047,
        name: "澄迈",
        spell: "chengmai"
      },
      {
        id: 339,
        name: "郴州",
        spell: "chenzhou"
      },
      {
        id: 259,
        name: "赤峰",
        spell: "chifeng"
      },
      {
        id: 237,
        name: "池州",
        spell: "chizhou"
      },
      {
        id: 22,
        name: "重庆",
        spell: "chongqing"
      },
      {
        id: 254,
        name: "崇左",
        spell: "chongzuo"
      },
      {
        id: 365,
        name: "楚雄",
        spell: "chuxiong"
      },
      {
        id: 228,
        name: "滁州",
        spell: "chuzhou"
      }
    ],
    D: [
      {
        id: 36,
        name: "大理州",
        spell: "dali"
      },
      {
        id: 18,
        name: "大连",
        spell: "dalian"
      },
      {
        id: 129,
        name: "丹东",
        spell: "dandong"
      },
      {
        id: 3973,
        name: "儋州",
        spell: "danzhou"
      },
      {
        id: 202,
        name: "大庆",
        spell: "daqing"
      },
      {
        id: 270,
        name: "大同",
        spell: "datong"
      },
      {
        id: 209,
        name: "大兴安岭",
        spell: "daxinganling"
      },
      {
        id: 96,
        name: "达州",
        spell: "dazhou"
      },
      {
        id: 366,
        name: "德宏",
        spell: "dehong"
      },
      {
        id: 91,
        name: "德阳",
        spell: "deyang"
      },
      {
        id: 219,
        name: "德州",
        spell: "dezhou"
      },
      {
        id: 4049,
        name: "定安",
        spell: "dingan"
      },
      {
        id: 296,
        name: "定西",
        spell: "dingxi"
      },
      {
        id: 4062,
        name: "东方",
        spell: "dongfang"
      },
      {
        id: 73,
        name: "东莞",
        spell: "dongguan"
      },
      {
        id: 211,
        name: "东营",
        spell: "dongying"
      },
      {
        id: 368,
        name: "迪庆",
        spell: "diqing"
      }
    ],
    E: [
      {
        id: 261,
        name: "鄂尔多斯",
        spell: "eerduosi"
      },
      {
        id: 330,
        name: "恩施",
        spell: "enshih"
      },
      {
        id: 323,
        name: "鄂州",
        spell: "ezhou"
      }
    ],
    F: [
      {
        id: 252,
        name: "防城港",
        spell: "fangchenggang"
      },
      {
        id: 68,
        name: "佛山",
        spell: "foshan"
      },
      {
        id: 128,
        name: "抚顺",
        spell: "fushunl"
      },
      {
        id: 229,
        name: "阜阳",
        spell: "fuyanga"
      },
      {
        id: 145,
        name: "福州",
        spell: "fuzhou"
      },
      {
        id: 355,
        name: "抚州",
        spell: "fuzhou2"
      }
    ],
    G: [
      {
        id: 299,
        name: "甘南",
        spell: "gannan"
      },
      {
        id: 352,
        name: "赣州",
        spell: "ganzhou"
      },
      {
        id: 108,
        name: "甘孜",
        spell: "ganzi"
      },
      {
        id: 3996,
        name: "高雄",
        spell: "gaoxiong"
      },
      {
        id: 102,
        name: "广安",
        spell: "guangan"
      },
      {
        id: 99,
        name: "广元",
        spell: "guangyuan"
      },
      {
        id: 45,
        name: "广州",
        spell: "guangzhou"
      },
      {
        id: 245,
        name: "贵港",
        spell: "guigang"
      },
      {
        id: 32,
        name: "桂林",
        spell: "guilin"
      },
      {
        id: 117,
        name: "贵阳",
        spell: "guiyang"
      },
      {
        id: 285,
        name: "固原",
        spell: "guyuann"
      }
    ],
    H: [
      {
        id: 64,
        name: "哈尔滨",
        spell: "haerbin"
      },
      {
        id: 311,
        name: "海北",
        spell: "haibeiqh"
      },
      {
        id: 310,
        name: "海东",
        spell: "haidong"
      },
      {
        id: 255,
        name: "海口",
        spell: "haikou"
      },
      {
        id: 313,
        name: "海南州",
        spell: "hainanzhou"
      },
      {
        id: 316,
        name: "海西",
        spell: "haixi"
      },
      {
        id: 372,
        name: "哈密",
        spell: "hami"
      },
      {
        id: 155,
        name: "邯郸",
        spell: "handan"
      },
      {
        id: 7,
        name: "杭州",
        spell: "hangzhou"
      },
      {
        id: 305,
        name: "汉中",
        spell: "hanzhong"
      },
      {
        id: 171,
        name: "鹤壁",
        spell: "hebi"
      },
      {
        id: 248,
        name: "河池",
        spell: "hechi"
      },
      {
        id: 50,
        name: "合肥",
        spell: "hefei"
      },
      {
        id: 205,
        name: "黑河",
        spell: "heihe"
      },
      {
        id: 161,
        name: "衡水",
        spell: "hengshui"
      },
      {
        id: 335,
        name: "衡阳",
        spell: "hengyang"
      },
      {
        id: 80,
        name: "河源",
        spell: "heyuan"
      },
      {
        id: 221,
        name: "菏泽",
        spell: "heze"
      },
      {
        id: 253,
        name: "贺州",
        spell: "hezhou"
      },
      {
        id: 364,
        name: "红河州",
        spell: "honghezhou"
      },
      {
        id: 140,
        name: "淮安",
        spell: "huaian"
      },
      {
        id: 234,
        name: "淮北",
        spell: "huaibei"
      },
      {
        id: 344,
        name: "怀化",
        spell: "huaihua"
      },
      {
        id: 233,
        name: "淮南",
        spell: "huainan"
      },
      {
        id: 3997,
        name: "花莲",
        spell: "hualian"
      },
      {
        id: 327,
        name: "黄冈",
        spell: "huanggang"
      },
      {
        id: 312,
        name: "黄南",
        spell: "huangnan"
      },
      {
        id: 6,
        name: "黄山",
        spell: "huangshan"
      },
      {
        id: 317,
        name: "黄石",
        spell: "huangshi"
      },
      {
        id: 256,
        name: "呼和浩特",
        spell: "huhehaote"
      },
      {
        id: 72,
        name: "惠州",
        spell: "huizhou"
      },
      {
        id: 133,
        name: "葫芦岛",
        spell: "huludao"
      },
      {
        id: 262,
        name: "呼伦贝尔",
        spell: "hulunbeier"
      },
      {
        id: 111,
        name: "湖州",
        spell: "huzhou"
      }
    ],
    J: [
      {
        id: 204,
        name: "佳木斯",
        spell: "jiamusi"
      },
      {
        id: 353,
        name: "吉安",
        spell: "jian"
      },
      {
        id: 70,
        name: "江门",
        spell: "jiangmen"
      },
      {
        id: 170,
        name: "焦作",
        spell: "jiaozuo"
      },
      {
        id: 110,
        name: "嘉兴",
        spell: "jiaxing"
      },
      {
        id: 4e3,
        name: "嘉义",
        spell: "jiayi"
      },
      {
        id: 300,
        name: "嘉峪关",
        spell: "jiayuguan"
      },
      {
        id: 84,
        name: "揭阳",
        spell: "jieyang"
      },
      {
        id: 190,
        name: "吉林",
        spell: "jilinj"
      },
      {
        id: 3998,
        name: "基隆",
        spell: "jilong"
      },
      {
        id: 19,
        name: "济南",
        spell: "jinan"
      },
      {
        id: 288,
        name: "金昌",
        spell: "jinchang"
      },
      {
        id: 273,
        name: "晋城",
        spell: "jincheng"
      },
      {
        id: 347,
        name: "景德镇",
        spell: "jingdezhen"
      },
      {
        id: 322,
        name: "荆门",
        spell: "jingmen"
      },
      {
        id: 320,
        name: "荆州",
        spell: "jingzhou"
      },
      {
        id: 113,
        name: "金华",
        spell: "jinhua"
      },
      {
        id: 215,
        name: "济宁",
        spell: "jining"
      },
      {
        id: 4027,
        name: "金门",
        spell: "jinmen"
      },
      {
        id: 275,
        name: "晋中",
        spell: "jinzhong"
      },
      {
        id: 130,
        name: "锦州",
        spell: "jinzhou"
      },
      {
        id: 349,
        name: "九江",
        spell: "jiujiangjx"
      },
      {
        id: 294,
        name: "酒泉",
        spell: "jiuquan"
      },
      {
        id: 199,
        name: "鸡西",
        spell: "jixi"
      },
      {
        id: 176,
        name: "济源",
        spell: "jiyuan"
      }
    ],
    K: [
      {
        id: 177,
        name: "开封",
        spell: "kaifeng"
      },
      {
        id: 375,
        name: "喀什",
        spell: "kashi"
      },
      {
        id: 370,
        name: "克拉玛依",
        spell: "kelamayi"
      },
      {
        id: 31,
        name: "昆明",
        spell: "kunming"
      }
    ],
    L: [
      {
        id: 249,
        name: "来宾",
        spell: "laibin"
      },
      {
        id: 213,
        name: "莱芜",
        spell: "laiwu"
      },
      {
        id: 160,
        name: "廊坊",
        spell: "langfang"
      },
      {
        id: 287,
        name: "兰州",
        spell: "lanzhou"
      },
      {
        id: 389,
        name: "拉萨",
        spell: "lasa"
      },
      {
        id: 3993,
        name: "乐东",
        spell: "ledongxian"
      },
      {
        id: 93,
        name: "乐山",
        spell: "leshan"
      },
      {
        id: 97,
        name: "凉山",
        spell: "liangshan"
      },
      {
        id: 39,
        name: "连云港",
        spell: "lianyungang"
      },
      {
        id: 220,
        name: "聊城",
        spell: "liaocheng"
      },
      {
        id: 12,
        name: "丽江",
        spell: "lijiang"
      },
      {
        id: 278,
        name: "临汾",
        spell: "linfen"
      },
      {
        id: 4048,
        name: "临高",
        spell: "lingao"
      },
      {
        id: 5,
        name: "陵水(三亚)",
        spell: "lingshui"
      },
      {
        id: 298,
        name: "临夏",
        spell: "linxia"
      },
      {
        id: 218,
        name: "临沂",
        spell: "linyi"
      },
      {
        id: 395,
        name: "林芝",
        spell: "linzhi"
      },
      {
        id: 116,
        name: "丽水",
        spell: "lishuiz"
      },
      {
        id: 232,
        name: "六安",
        spell: "liuan"
      },
      {
        id: 118,
        name: "六盘水",
        spell: "liupanshui"
      },
      {
        id: 242,
        name: "柳州",
        spell: "liuzhou"
      },
      {
        id: 297,
        name: "陇南",
        spell: "longnan"
      },
      {
        id: 151,
        name: "龙岩",
        spell: "longyan"
      },
      {
        id: 341,
        name: "娄底",
        spell: "loudi"
      },
      {
        id: 174,
        name: "漯河",
        spell: "luohe"
      },
      {
        id: 168,
        name: "洛阳",
        spell: "luoyang"
      },
      {
        id: 90,
        name: "泸州",
        spell: "luzhou"
      },
      {
        id: 279,
        name: "吕梁",
        spell: "lvliang"
      }
    ],
    M: [
      {
        id: 226,
        name: "马鞍山",
        spell: "maanshan"
      },
      {
        id: 71,
        name: "茂名",
        spell: "maoming"
      },
      {
        id: 103,
        name: "眉山",
        spell: "meishan"
      },
      {
        id: 78,
        name: "梅州",
        spell: "meizhou1"
      },
      {
        id: 92,
        name: "绵阳",
        spell: "mianyang"
      },
      {
        id: 4001,
        name: "苗栗",
        spell: "miaoli"
      },
      {
        id: 208,
        name: "牡丹江",
        spell: "mudanjiang"
      }
    ],
    N: [
      {
        id: 346,
        name: "南昌",
        spell: "nanchang"
      },
      {
        id: 94,
        name: "南充",
        spell: "nanchong"
      },
      {
        id: 9,
        name: "南京",
        spell: "nanjing"
      },
      {
        id: 250,
        name: "南宁",
        spell: "nanning"
      },
      {
        id: 52,
        name: "南通",
        spell: "nantong"
      },
      {
        id: 150,
        name: "南平",
        spell: "nanping"
      },
      {
        id: 4002,
        name: "南投",
        spell: "nantou1"
      },
      {
        id: 175,
        name: "南阳",
        spell: "nanyang"
      },
      {
        id: 101,
        name: "内江",
        spell: "neijiang"
      },
      {
        id: 16,
        name: "宁波",
        spell: "ningbo"
      },
      {
        id: 152,
        name: "宁德",
        spell: "ningde"
      },
      {
        id: 367,
        name: "怒江",
        spell: "nujiang"
      }
    ],
    P: [
      {
        id: 132,
        name: "盘锦",
        spell: "panjin"
      },
      {
        id: 98,
        name: "攀枝花",
        spell: "panzhihua"
      },
      {
        id: 4003,
        name: "澎湖",
        spell: "penghu"
      },
      {
        id: 169,
        name: "平顶山",
        spell: "pingdingshan"
      },
      {
        id: 4004,
        name: "屏东（垦丁）",
        spell: "pingdong"
      },
      {
        id: 293,
        name: "平凉",
        spell: "pingliang"
      },
      {
        id: 348,
        name: "萍乡",
        spell: "pingxiang"
      },
      {
        id: 61,
        name: "普洱",
        spell: "puer"
      },
      {
        id: 146,
        name: "莆田",
        spell: "putian"
      },
      {
        id: 178,
        name: "濮阳",
        spell: "puyang"
      }
    ],
    Q: [
      {
        id: 124,
        name: "黔东南",
        spell: "qiandongnan"
      },
      {
        id: 125,
        name: "黔南",
        spell: "qiannan"
      },
      {
        id: 123,
        name: "黔西南",
        spell: "qianxinan"
      },
      {
        id: 8,
        name: "青岛",
        spell: "qingdao"
      },
      {
        id: 82,
        name: "清远",
        spell: "qingyuan"
      },
      {
        id: 65,
        name: "秦皇岛",
        spell: "qinhuangdao"
      },
      {
        id: 244,
        name: "钦州",
        spell: "qinzhou"
      },
      {
        id: 407,
        name: "琼海",
        spell: "qionghai"
      },
      {
        id: 4053,
        name: "琼中",
        spell: "qiongzhong"
      },
      {
        id: 198,
        name: "齐齐哈尔",
        spell: "qiqihaer"
      },
      {
        id: 148,
        name: "泉州",
        spell: "quanzhou"
      },
      {
        id: 358,
        name: "曲靖",
        spell: "qujing"
      },
      {
        id: 114,
        name: "衢州",
        spell: "quzhouzj"
      }
    ],
    R: [
      {
        id: 392,
        name: "日喀则",
        spell: "rikaze"
      },
      {
        id: 217,
        name: "日照",
        spell: "rizhao"
      }
    ],
    S: [
      {
        id: 180,
        name: "三门峡",
        spell: "sanmenxia"
      },
      {
        id: 147,
        name: "三明",
        spell: "sanming"
      },
      {
        id: 1,
        name: "三亚",
        spell: "sanya"
      },
      {
        id: 23,
        name: "上海",
        spell: "shanghai"
      },
      {
        id: 308,
        name: "商洛",
        spell: "shangluo"
      },
      {
        id: 181,
        name: "商丘",
        spell: "shangqiu"
      },
      {
        id: 356,
        name: "上饶",
        spell: "shangrao"
      },
      {
        id: 69,
        name: "汕头",
        spell: "shantou"
      },
      {
        id: 79,
        name: "汕尾",
        spell: "shanwei"
      },
      {
        id: 75,
        name: "韶关",
        spell: "shaoguan"
      },
      {
        id: 112,
        name: "绍兴",
        spell: "shaoxing"
      },
      {
        id: 336,
        name: "邵阳",
        spell: "shaoyang"
      },
      {
        id: 332,
        name: "神农架",
        spell: "shennongjia"
      },
      {
        id: 126,
        name: "沈阳",
        spell: "shenyang"
      },
      {
        id: 49,
        name: "深圳",
        spell: "shenzhen"
      },
      {
        id: 383,
        name: "石河子",
        spell: "shihezi"
      },
      {
        id: 153,
        name: "石家庄",
        spell: "shijiazhuang"
      },
      {
        id: 319,
        name: "十堰",
        spell: "shiyan"
      },
      {
        id: 283,
        name: "石嘴山",
        spell: "shizuishan"
      },
      {
        id: 201,
        name: "双鸭山",
        spell: "shuangyashan"
      },
      {
        id: 191,
        name: "四平",
        spell: "siping"
      },
      {
        id: 195,
        name: "松原",
        spell: "songyuan"
      },
      {
        id: 100,
        name: "遂宁",
        spell: "suiningsc"
      },
      {
        id: 329,
        name: "随州",
        spell: "suizhou"
      },
      {
        id: 142,
        name: "宿迁",
        spell: "suqian"
      },
      {
        id: 11,
        name: "苏州",
        spell: "suzhou"
      },
      {
        id: 230,
        name: "宿州",
        spell: "suzhouanhui"
      }
    ],
    T: [
      {
        id: 216,
        name: "泰安",
        spell: "taian"
      },
      {
        id: 4005,
        name: "台北",
        spell: "taibei"
      },
      {
        id: 4006,
        name: "台东",
        spell: "taidong"
      },
      {
        id: 4007,
        name: "台南",
        spell: "tainan"
      },
      {
        id: 269,
        name: "太原",
        spell: "taiyuan"
      },
      {
        id: 4008,
        name: "台中",
        spell: "taizhong"
      },
      {
        id: 141,
        name: "泰州",
        spell: "taizhou1"
      },
      {
        id: 115,
        name: "台州",
        spell: "taizhou"
      },
      {
        id: 154,
        name: "唐山",
        spell: "tangshan"
      },
      {
        id: 4009,
        name: "桃园",
        spell: "taoyuan1"
      },
      {
        id: 66,
        name: "天津",
        spell: "tianjin"
      },
      {
        id: 290,
        name: "天水",
        spell: "tianshui"
      },
      {
        id: 136,
        name: "铁岭",
        spell: "tieling"
      },
      {
        id: 193,
        name: "通化",
        spell: "tonghua"
      },
      {
        id: 260,
        name: "通辽",
        spell: "tongliao"
      },
      {
        id: 235,
        name: "铜陵",
        spell: "tongling"
      },
      {
        id: 121,
        name: "铜仁",
        spell: "tongrenshi"
      },
      {
        id: 371,
        name: "吐鲁番",
        spell: "tulufan"
      },
      {
        id: 386,
        name: "图木舒克",
        spell: "tumushuke"
      }
    ],
    W: [
      {
        id: 43,
        name: "万宁",
        spell: "wanning"
      },
      {
        id: 212,
        name: "潍坊",
        spell: "weifang"
      },
      {
        id: 30,
        name: "威海",
        spell: "weihai"
      },
      {
        id: 304,
        name: "渭南",
        spell: "weinan"
      },
      {
        id: 4,
        name: "文昌",
        spell: "wenchang"
      },
      {
        id: 363,
        name: "文山",
        spell: "wenshan"
      },
      {
        id: 109,
        name: "温州",
        spell: "wenzhou"
      },
      {
        id: 258,
        name: "乌海",
        spell: "wuhai"
      },
      {
        id: 55,
        name: "武汉",
        spell: "wuhan"
      },
      {
        id: 53,
        name: "芜湖",
        spell: "wuhu"
      },
      {
        id: 387,
        name: "五家渠",
        spell: "wujiaqu"
      },
      {
        id: 264,
        name: "乌兰察布",
        spell: "wulanchabu"
      },
      {
        id: 369,
        name: "乌鲁木齐",
        spell: "wulumuqi"
      },
      {
        id: 291,
        name: "武威",
        spell: "wuwei"
      },
      {
        id: 14,
        name: "无锡",
        spell: "wuxi"
      },
      {
        id: 3,
        name: "五指山",
        spell: "wuzhishan"
      },
      {
        id: 284,
        name: "吴忠",
        spell: "wuzhong"
      },
      {
        id: 243,
        name: "梧州",
        spell: "wuzhou"
      }
    ],
    X: [
      {
        id: 33,
        name: "厦门",
        spell: "xiamen"
      },
      {
        id: 17,
        name: "西安",
        spell: "xian"
      },
      {
        id: 396,
        name: "香港",
        spell: "xianggang"
      },
      {
        id: 334,
        name: "湘潭",
        spell: "xiangtanhn"
      },
      {
        id: 345,
        name: "湘西",
        spell: "xiangxi"
      },
      {
        id: 4031,
        name: "襄阳",
        spell: "xiangyang"
      },
      {
        id: 328,
        name: "咸宁",
        spell: "xianning"
      },
      {
        id: 324,
        name: "仙桃",
        spell: "xiantao"
      },
      {
        id: 303,
        name: "咸阳",
        spell: "xianyang"
      },
      {
        id: 326,
        name: "孝感",
        spell: "xiaogan"
      },
      {
        id: 266,
        name: "锡林郭勒",
        spell: "xilinguole"
      },
      {
        id: 265,
        name: "兴安盟",
        spell: "xinganmeng"
      },
      {
        id: 156,
        name: "邢台",
        spell: "xingtai"
      },
      {
        id: 309,
        name: "西宁",
        spell: "xining"
      },
      {
        id: 4010,
        name: "新北",
        spell: "xintai1"
      },
      {
        id: 172,
        name: "新乡",
        spell: "xinxiang"
      },
      {
        id: 182,
        name: "信阳",
        spell: "xinyang"
      },
      {
        id: 350,
        name: "新余",
        spell: "xinyu"
      },
      {
        id: 277,
        name: "忻州",
        spell: "xinzhousx"
      },
      {
        id: 4012,
        name: "新竹",
        spell: "xinzhu"
      },
      {
        id: 58,
        name: "西双版纳",
        spell: "xishuangbanna"
      },
      {
        id: 238,
        name: "宣城",
        spell: "xuancheng"
      },
      {
        id: 179,
        name: "许昌",
        spell: "xuchangh"
      },
      {
        id: 139,
        name: "徐州",
        spell: "xuzhou"
      }
    ],
    Y: [
      {
        id: 104,
        name: "雅安",
        spell: "yaan"
      },
      {
        id: 25,
        name: "延安",
        spell: "yanan"
      },
      {
        id: 197,
        name: "延边",
        spell: "yanbian"
      },
      {
        id: 54,
        name: "盐城",
        spell: "yancheng"
      },
      {
        id: 81,
        name: "阳江",
        spell: "yangjiang"
      },
      {
        id: 271,
        name: "阳泉",
        spell: "yangquan"
      },
      {
        id: 26,
        name: "扬州",
        spell: "yangzhou"
      },
      {
        id: 44,
        name: "烟台",
        spell: "yantai"
      },
      {
        id: 95,
        name: "宜宾",
        spell: "yibin"
      },
      {
        id: 321,
        name: "宜昌",
        spell: "yichang"
      },
      {
        id: 203,
        name: "伊春",
        spell: "yichun"
      },
      {
        id: 354,
        name: "宜春",
        spell: "yichunj"
      },
      {
        id: 4013,
        name: "宜兰",
        spell: "yilan1"
      },
      {
        id: 380,
        name: "伊犁",
        spell: "yili1"
      },
      {
        id: 282,
        name: "银川",
        spell: "yinchuan"
      },
      {
        id: 35,
        name: "营口",
        spell: "yingkou"
      },
      {
        id: 351,
        name: "鹰潭",
        spell: "yingtan"
      },
      {
        id: 343,
        name: "益阳",
        spell: "yiyang"
      },
      {
        id: 340,
        name: "永州",
        spell: "yongzhou"
      },
      {
        id: 337,
        name: "岳阳",
        spell: "yueyang"
      },
      {
        id: 246,
        name: "玉林",
        spell: "yulin"
      },
      {
        id: 306,
        name: "榆林",
        spell: "yulinshi"
      },
      {
        id: 276,
        name: "运城",
        spell: "yunchengsx"
      },
      {
        id: 85,
        name: "云浮",
        spell: "yunfu"
      },
      {
        id: 4014,
        name: "云林",
        spell: "yunlin"
      },
      {
        id: 315,
        name: "玉树",
        spell: "yushu"
      },
      {
        id: 359,
        name: "玉溪",
        spell: "yuxi"
      }
    ],
    Z: [
      {
        id: 38,
        name: "枣庄",
        spell: "zaozhuang"
      },
      {
        id: 342,
        name: "张家界",
        spell: "zhangjiajie"
      },
      {
        id: 60,
        name: "张家口",
        spell: "zhangjiakou"
      },
      {
        id: 292,
        name: "张掖",
        spell: "zhangye"
      },
      {
        id: 149,
        name: "漳州",
        spell: "zhangzhou"
      },
      {
        id: 76,
        name: "湛江",
        spell: "zhanjiang"
      },
      {
        id: 77,
        name: "肇庆",
        spell: "zhaoqing"
      },
      {
        id: 361,
        name: "昭通",
        spell: "zhaotong"
      },
      {
        id: 167,
        name: "郑州",
        spell: "zhengzhou"
      },
      {
        id: 27,
        name: "镇江",
        spell: "zhenjiang"
      },
      {
        id: 74,
        name: "中山",
        spell: "zhongshan"
      },
      {
        id: 286,
        name: "中卫",
        spell: "zhongwei"
      },
      {
        id: 183,
        name: "周口",
        spell: "zhoukou"
      },
      {
        id: 20,
        name: "舟山",
        spell: "zhoushan"
      },
      {
        id: 51,
        name: "珠海",
        spell: "zhuhai"
      },
      {
        id: 184,
        name: "驻马店",
        spell: "zhumadian"
      },
      {
        id: 333,
        name: "株洲",
        spell: "zhuzhou"
      },
      {
        id: 210,
        name: "淄博",
        spell: "zibo"
      },
      {
        id: 89,
        name: "自贡",
        spell: "zigong"
      },
      {
        id: 106,
        name: "资阳",
        spell: "ziyangsc"
      },
      {
        id: 119,
        name: "遵义",
        spell: "zunyi"
      }
    ]
  }
}, W = [
  {
    name: "安徽",
    id: "A",
    data: [
      "合肥",
      "芜湖",
      "蚌埠",
      "淮南",
      "马鞍山",
      "淮北",
      "铜陵",
      "安庆",
      "黄山",
      "滁州",
      "阜阳",
      "宿州",
      "六安",
      "亳州",
      "池州",
      "宣城"
    ]
  }
], X = [
  {
    name: "重庆",
    id: "C",
    data: [
      "重庆城区",
      "重庆郊县"
    ]
  }
], Y = [
  {
    name: "贵州",
    id: "G",
    data: [
      "贵阳",
      "六盘水",
      "遵义",
      "安顺",
      "毕节",
      "铜仁",
      "黔西南",
      "黔东南",
      "黔南"
    ]
  }
], Z = {
  A: W,
  C: X,
  G: Y
}, ee = { class: "result" }, le = { class: "container" }, ne = { class: "city" }, ae = ["onClick"], ie = ["onClick"], se = { class: "province" }, de = ["onClick"], me = ["onClick"], pe = /* @__PURE__ */ J({
  __name: "index",
  emits: ["changeCity", "changeProvince"],
  setup(x, { emit: w }) {
    const c = w, z = t("请选择"), r = t(!1), f = t("按省份"), C = t(""), b = t(R.cities), V = t(Z), j = t([]), I = t([]), $ = (l) => {
      z.value = l.name, r.value = !1, c("changeCity", l);
    }, M = (l) => {
      z.value = l, r.value = !1, c("changeProvince", l);
    }, B = (l) => {
      const n = document.getElementById(l);
      n && n.scrollIntoView();
    }, S = (l) => {
      const n = Object.values(b.value).flat(1 / 0);
      l === "" ? j.value = n : f.value === "按城市" ? j.value = n.filter((h) => h.name.includes(l) || h.spell.includes(l)) : j.value = n.filter((h) => h.name.includes(l));
    }, U = (l) => {
      const n = I.value.find((h) => h.id === l);
      z.value = n.name, f.value === "按城市" ? c("changeCity", n) : c("changeProvince", n.name);
    };
    return K(() => {
      const l = Object.values(b.value).flat(1 / 0);
      j.value = l, I.value = l;
    }), (l, n) => {
      const h = u("el-icon-arrowdown"), N = u("el-radio-button"), D = u("el-radio-group"), _ = u("el-col"), F = u("el-option"), L = u("el-select"), q = u("el-row"), O = u("el-scrollbar"), T = u("el-popover");
      return e(), k(T, {
        visible: r.value,
        "onUpdate:visible": n[2] || (n[2] = (a) => r.value = a),
        placement: "bottom-start",
        width: 430,
        trigger: "click"
      }, {
        reference: i(() => [
          v("div", ee, [
            v(
              "div",
              null,
              y(z.value),
              1
              /* TEXT */
            ),
            v("div", null, [
              d(h, {
                class: Q({ rotate: r.value })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        default: i(() => [
          v("div", le, [
            d(q, null, {
              default: i(() => [
                d(_, { span: 8 }, {
                  default: i(() => [
                    d(D, {
                      modelValue: f.value,
                      "onUpdate:modelValue": n[0] || (n[0] = (a) => f.value = a),
                      size: "small"
                    }, {
                      default: i(() => [
                        d(N, { label: "按城市" }),
                        d(N, { label: "按省份" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                d(_, {
                  offset: 1,
                  span: 15
                }, {
                  default: i(() => [
                    d(L, {
                      modelValue: C.value,
                      "onUpdate:modelValue": n[1] || (n[1] = (a) => C.value = a),
                      placeholder: "请搜索城市",
                      size: "small",
                      filterable: "",
                      "filter-method": S,
                      onChange: U
                    }, {
                      default: i(() => [
                        (e(!0), s(
                          p,
                          null,
                          g(j.value, (a) => (e(), k(F, {
                            key: a.id,
                            label: a.name,
                            value: a.id
                          }, null, 8, ["label", "value"]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }),
            E(" 按城市 "),
            f.value === "按城市" ? (e(), s(
              p,
              { key: 0 },
              [
                v("div", ne, [
                  (e(!0), s(
                    p,
                    null,
                    g(b.value, (a, m) => (e(), s("div", {
                      class: "city-item",
                      key: m,
                      onClick: (o) => B(m)
                    }, y(m), 9, ae))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                d(O, { "max-height": "300px" }, {
                  default: i(() => [
                    (e(!0), s(
                      p,
                      null,
                      g(b.value, (a, m) => (e(), k(q, {
                        key: m,
                        style: { "margin-bottom": "10px" },
                        id: m
                      }, {
                        default: i(() => [
                          d(
                            _,
                            { span: 2 },
                            {
                              default: i(() => [
                                G(
                                  y(m) + ":",
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          ),
                          d(
                            _,
                            {
                              span: 22,
                              class: "city-name"
                            },
                            {
                              default: i(() => [
                                (e(!0), s(
                                  p,
                                  null,
                                  g(a, (o) => (e(), s("div", {
                                    class: "city-name-item",
                                    key: o.id,
                                    onClick: (P) => $(o)
                                  }, y(o.name), 9, ie))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["id"]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (e(), s(
              p,
              { key: 1 },
              [
                E(" 按省份 "),
                v("div", se, [
                  (e(!0), s(
                    p,
                    null,
                    g(Object.keys(V.value), (a, m) => (e(), s("div", {
                      class: "province-item",
                      key: m,
                      onClick: (o) => B(a)
                    }, y(a), 9, de))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                d(O, { "max-height": "300px" }, {
                  default: i(() => [
                    (e(!0), s(
                      p,
                      null,
                      g(Object.values(V.value), (a, m) => (e(), s(
                        p,
                        { key: m },
                        [
                          (e(!0), s(
                            p,
                            null,
                            g(a, (o, P) => (e(), k(q, {
                              key: P,
                              style: { "margin-bottom": "10px" },
                              id: o.id
                            }, {
                              default: i(() => [
                                d(
                                  _,
                                  { span: 3 },
                                  {
                                    default: i(() => [
                                      G(
                                        y(o.name) + ":",
                                        1
                                        /* TEXT */
                                      )
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                ),
                                d(
                                  _,
                                  {
                                    span: 21,
                                    class: "province-name"
                                  },
                                  {
                                    default: i(() => [
                                      (e(!0), s(
                                        p,
                                        null,
                                        g(o.data, (A, H) => (e(), s("div", {
                                          class: "province-name-item",
                                          key: H,
                                          onClick: (he) => M(A)
                                        }, y(A), 9, me))),
                                        128
                                        /* KEYED_FRAGMENT */
                                      ))
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["id"]))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["visible"]);
    };
  }
});
const oe = (x, w) => {
  const c = x.__vccOpts || x;
  for (const [z, r] of w)
    c[z] = r;
  return c;
}, ue = /* @__PURE__ */ oe(pe, [["__scopeId", "data-v-054547c4"]]), ge = {
  install(x) {
    x.component("m-choose-city", ue);
  }
};
export {
  ge as default
};
