import { defineComponent as F, ref as y, watch as R, resolveComponent as M, openBlock as c, createElementBlock as l, createVNode as x, withCtx as z, Fragment as B, renderList as P, createBlock as b, createElementVNode as d, createStaticVNode as u1, unref as w, getCurrentScope as h1, onScopeDispose as v1, readonly as p1, getCurrentInstance as xe, onMounted as ye, nextTick as f1, warn as g1, inject as Oe, computed as T, isRef as w1, provide as $1, renderSlot as Q, mergeProps as G, normalizeClass as J, Transition as g0, withDirectives as w0, toDisplayString as I, vShow as $0, shallowReactive as z1, normalizeStyle as Ve, createCommentVNode as O, resolveDynamicComponent as K, withModifiers as x1, isVNode as a2, render as V2, useSlots as y1, createTextVNode as Ke, useAttrs as C1 } from "vue";
const A2 = [
  {
    code: "11",
    name: "北京市",
    children: [
      {
        code: "1101",
        name: "市辖区",
        children: [
          {
            code: "110101",
            name: "东城区"
          },
          {
            code: "110102",
            name: "西城区"
          },
          {
            code: "110105",
            name: "朝阳区"
          },
          {
            code: "110106",
            name: "丰台区"
          },
          {
            code: "110107",
            name: "石景山区"
          },
          {
            code: "110108",
            name: "海淀区"
          },
          {
            code: "110109",
            name: "门头沟区"
          },
          {
            code: "110111",
            name: "房山区"
          },
          {
            code: "110112",
            name: "通州区"
          },
          {
            code: "110113",
            name: "顺义区"
          },
          {
            code: "110114",
            name: "昌平区"
          },
          {
            code: "110115",
            name: "大兴区"
          },
          {
            code: "110116",
            name: "怀柔区"
          },
          {
            code: "110117",
            name: "平谷区"
          },
          {
            code: "110118",
            name: "密云区"
          },
          {
            code: "110119",
            name: "延庆区"
          }
        ]
      }
    ]
  },
  {
    code: "12",
    name: "天津市",
    children: [
      {
        code: "1201",
        name: "市辖区",
        children: [
          {
            code: "120101",
            name: "和平区"
          },
          {
            code: "120102",
            name: "河东区"
          },
          {
            code: "120103",
            name: "河西区"
          },
          {
            code: "120104",
            name: "南开区"
          },
          {
            code: "120105",
            name: "河北区"
          },
          {
            code: "120106",
            name: "红桥区"
          },
          {
            code: "120110",
            name: "东丽区"
          },
          {
            code: "120111",
            name: "西青区"
          },
          {
            code: "120112",
            name: "津南区"
          },
          {
            code: "120113",
            name: "北辰区"
          },
          {
            code: "120114",
            name: "武清区"
          },
          {
            code: "120115",
            name: "宝坻区"
          },
          {
            code: "120116",
            name: "滨海新区"
          },
          {
            code: "120117",
            name: "宁河区"
          },
          {
            code: "120118",
            name: "静海区"
          },
          {
            code: "120119",
            name: "蓟州区"
          }
        ]
      }
    ]
  },
  {
    code: "13",
    name: "河北省",
    children: [
      {
        code: "1301",
        name: "石家庄市",
        children: [
          {
            code: "130102",
            name: "长安区"
          },
          {
            code: "130104",
            name: "桥西区"
          },
          {
            code: "130105",
            name: "新华区"
          },
          {
            code: "130107",
            name: "井陉矿区"
          },
          {
            code: "130108",
            name: "裕华区"
          },
          {
            code: "130109",
            name: "藁城区"
          },
          {
            code: "130110",
            name: "鹿泉区"
          },
          {
            code: "130111",
            name: "栾城区"
          },
          {
            code: "130121",
            name: "井陉县"
          },
          {
            code: "130123",
            name: "正定县"
          },
          {
            code: "130125",
            name: "行唐县"
          },
          {
            code: "130126",
            name: "灵寿县"
          },
          {
            code: "130127",
            name: "高邑县"
          },
          {
            code: "130128",
            name: "深泽县"
          },
          {
            code: "130129",
            name: "赞皇县"
          },
          {
            code: "130130",
            name: "无极县"
          },
          {
            code: "130131",
            name: "平山县"
          },
          {
            code: "130132",
            name: "元氏县"
          },
          {
            code: "130133",
            name: "赵县"
          },
          {
            code: "130171",
            name: "石家庄高新技术产业开发区"
          },
          {
            code: "130172",
            name: "石家庄循环化工园区"
          },
          {
            code: "130181",
            name: "辛集市"
          },
          {
            code: "130183",
            name: "晋州市"
          },
          {
            code: "130184",
            name: "新乐市"
          }
        ]
      },
      {
        code: "1302",
        name: "唐山市",
        children: [
          {
            code: "130202",
            name: "路南区"
          },
          {
            code: "130203",
            name: "路北区"
          },
          {
            code: "130204",
            name: "古冶区"
          },
          {
            code: "130205",
            name: "开平区"
          },
          {
            code: "130207",
            name: "丰南区"
          },
          {
            code: "130208",
            name: "丰润区"
          },
          {
            code: "130209",
            name: "曹妃甸区"
          },
          {
            code: "130224",
            name: "滦南县"
          },
          {
            code: "130225",
            name: "乐亭县"
          },
          {
            code: "130227",
            name: "迁西县"
          },
          {
            code: "130229",
            name: "玉田县"
          },
          {
            code: "130271",
            name: "河北唐山芦台经济开发区"
          },
          {
            code: "130272",
            name: "唐山市汉沽管理区"
          },
          {
            code: "130273",
            name: "唐山高新技术产业开发区"
          },
          {
            code: "130274",
            name: "河北唐山海港经济开发区"
          },
          {
            code: "130281",
            name: "遵化市"
          },
          {
            code: "130283",
            name: "迁安市"
          },
          {
            code: "130284",
            name: "滦州市"
          }
        ]
      },
      {
        code: "1303",
        name: "秦皇岛市",
        children: [
          {
            code: "130302",
            name: "海港区"
          },
          {
            code: "130303",
            name: "山海关区"
          },
          {
            code: "130304",
            name: "北戴河区"
          },
          {
            code: "130306",
            name: "抚宁区"
          },
          {
            code: "130321",
            name: "青龙满族自治县"
          },
          {
            code: "130322",
            name: "昌黎县"
          },
          {
            code: "130324",
            name: "卢龙县"
          },
          {
            code: "130371",
            name: "秦皇岛市经济技术开发区"
          },
          {
            code: "130372",
            name: "北戴河新区"
          }
        ]
      },
      {
        code: "1304",
        name: "邯郸市",
        children: [
          {
            code: "130402",
            name: "邯山区"
          },
          {
            code: "130403",
            name: "丛台区"
          },
          {
            code: "130404",
            name: "复兴区"
          },
          {
            code: "130406",
            name: "峰峰矿区"
          },
          {
            code: "130407",
            name: "肥乡区"
          },
          {
            code: "130408",
            name: "永年区"
          },
          {
            code: "130423",
            name: "临漳县"
          },
          {
            code: "130424",
            name: "成安县"
          },
          {
            code: "130425",
            name: "大名县"
          },
          {
            code: "130426",
            name: "涉县"
          },
          {
            code: "130427",
            name: "磁县"
          },
          {
            code: "130430",
            name: "邱县"
          },
          {
            code: "130431",
            name: "鸡泽县"
          },
          {
            code: "130432",
            name: "广平县"
          },
          {
            code: "130433",
            name: "馆陶县"
          },
          {
            code: "130434",
            name: "魏县"
          },
          {
            code: "130435",
            name: "曲周县"
          },
          {
            code: "130471",
            name: "邯郸经济技术开发区"
          },
          {
            code: "130473",
            name: "邯郸冀南新区"
          },
          {
            code: "130481",
            name: "武安市"
          }
        ]
      },
      {
        code: "1305",
        name: "邢台市",
        children: [
          {
            code: "130502",
            name: "襄都区"
          },
          {
            code: "130503",
            name: "信都区"
          },
          {
            code: "130505",
            name: "任泽区"
          },
          {
            code: "130506",
            name: "南和区"
          },
          {
            code: "130522",
            name: "临城县"
          },
          {
            code: "130523",
            name: "内丘县"
          },
          {
            code: "130524",
            name: "柏乡县"
          },
          {
            code: "130525",
            name: "隆尧县"
          },
          {
            code: "130528",
            name: "宁晋县"
          },
          {
            code: "130529",
            name: "巨鹿县"
          },
          {
            code: "130530",
            name: "新河县"
          },
          {
            code: "130531",
            name: "广宗县"
          },
          {
            code: "130532",
            name: "平乡县"
          },
          {
            code: "130533",
            name: "威县"
          },
          {
            code: "130534",
            name: "清河县"
          },
          {
            code: "130535",
            name: "临西县"
          },
          {
            code: "130571",
            name: "河北邢台经济开发区"
          },
          {
            code: "130581",
            name: "南宫市"
          },
          {
            code: "130582",
            name: "沙河市"
          }
        ]
      },
      {
        code: "1306",
        name: "保定市",
        children: [
          {
            code: "130602",
            name: "竞秀区"
          },
          {
            code: "130606",
            name: "莲池区"
          },
          {
            code: "130607",
            name: "满城区"
          },
          {
            code: "130608",
            name: "清苑区"
          },
          {
            code: "130609",
            name: "徐水区"
          },
          {
            code: "130623",
            name: "涞水县"
          },
          {
            code: "130624",
            name: "阜平县"
          },
          {
            code: "130626",
            name: "定兴县"
          },
          {
            code: "130627",
            name: "唐县"
          },
          {
            code: "130628",
            name: "高阳县"
          },
          {
            code: "130629",
            name: "容城县"
          },
          {
            code: "130630",
            name: "涞源县"
          },
          {
            code: "130631",
            name: "望都县"
          },
          {
            code: "130632",
            name: "安新县"
          },
          {
            code: "130633",
            name: "易县"
          },
          {
            code: "130634",
            name: "曲阳县"
          },
          {
            code: "130635",
            name: "蠡县"
          },
          {
            code: "130636",
            name: "顺平县"
          },
          {
            code: "130637",
            name: "博野县"
          },
          {
            code: "130638",
            name: "雄县"
          },
          {
            code: "130671",
            name: "保定高新技术产业开发区"
          },
          {
            code: "130672",
            name: "保定白沟新城"
          },
          {
            code: "130681",
            name: "涿州市"
          },
          {
            code: "130682",
            name: "定州市"
          },
          {
            code: "130683",
            name: "安国市"
          },
          {
            code: "130684",
            name: "高碑店市"
          }
        ]
      },
      {
        code: "1307",
        name: "张家口市",
        children: [
          {
            code: "130702",
            name: "桥东区"
          },
          {
            code: "130703",
            name: "桥西区"
          },
          {
            code: "130705",
            name: "宣化区"
          },
          {
            code: "130706",
            name: "下花园区"
          },
          {
            code: "130708",
            name: "万全区"
          },
          {
            code: "130709",
            name: "崇礼区"
          },
          {
            code: "130722",
            name: "张北县"
          },
          {
            code: "130723",
            name: "康保县"
          },
          {
            code: "130724",
            name: "沽源县"
          },
          {
            code: "130725",
            name: "尚义县"
          },
          {
            code: "130726",
            name: "蔚县"
          },
          {
            code: "130727",
            name: "阳原县"
          },
          {
            code: "130728",
            name: "怀安县"
          },
          {
            code: "130730",
            name: "怀来县"
          },
          {
            code: "130731",
            name: "涿鹿县"
          },
          {
            code: "130732",
            name: "赤城县"
          },
          {
            code: "130771",
            name: "张家口经济开发区"
          },
          {
            code: "130772",
            name: "张家口市察北管理区"
          },
          {
            code: "130773",
            name: "张家口市塞北管理区"
          }
        ]
      },
      {
        code: "1308",
        name: "承德市",
        children: [
          {
            code: "130802",
            name: "双桥区"
          },
          {
            code: "130803",
            name: "双滦区"
          },
          {
            code: "130804",
            name: "鹰手营子矿区"
          },
          {
            code: "130821",
            name: "承德县"
          },
          {
            code: "130822",
            name: "兴隆县"
          },
          {
            code: "130824",
            name: "滦平县"
          },
          {
            code: "130825",
            name: "隆化县"
          },
          {
            code: "130826",
            name: "丰宁满族自治县"
          },
          {
            code: "130827",
            name: "宽城满族自治县"
          },
          {
            code: "130828",
            name: "围场满族蒙古族自治县"
          },
          {
            code: "130871",
            name: "承德高新技术产业开发区"
          },
          {
            code: "130881",
            name: "平泉市"
          }
        ]
      },
      {
        code: "1309",
        name: "沧州市",
        children: [
          {
            code: "130902",
            name: "新华区"
          },
          {
            code: "130903",
            name: "运河区"
          },
          {
            code: "130921",
            name: "沧县"
          },
          {
            code: "130922",
            name: "青县"
          },
          {
            code: "130923",
            name: "东光县"
          },
          {
            code: "130924",
            name: "海兴县"
          },
          {
            code: "130925",
            name: "盐山县"
          },
          {
            code: "130926",
            name: "肃宁县"
          },
          {
            code: "130927",
            name: "南皮县"
          },
          {
            code: "130928",
            name: "吴桥县"
          },
          {
            code: "130929",
            name: "献县"
          },
          {
            code: "130930",
            name: "孟村回族自治县"
          },
          {
            code: "130971",
            name: "河北沧州经济开发区"
          },
          {
            code: "130972",
            name: "沧州高新技术产业开发区"
          },
          {
            code: "130973",
            name: "沧州渤海新区"
          },
          {
            code: "130981",
            name: "泊头市"
          },
          {
            code: "130982",
            name: "任丘市"
          },
          {
            code: "130983",
            name: "黄骅市"
          },
          {
            code: "130984",
            name: "河间市"
          }
        ]
      },
      {
        code: "1310",
        name: "廊坊市",
        children: [
          {
            code: "131002",
            name: "安次区"
          },
          {
            code: "131003",
            name: "广阳区"
          },
          {
            code: "131022",
            name: "固安县"
          },
          {
            code: "131023",
            name: "永清县"
          },
          {
            code: "131024",
            name: "香河县"
          },
          {
            code: "131025",
            name: "大城县"
          },
          {
            code: "131026",
            name: "文安县"
          },
          {
            code: "131028",
            name: "大厂回族自治县"
          },
          {
            code: "131071",
            name: "廊坊经济技术开发区"
          },
          {
            code: "131081",
            name: "霸州市"
          },
          {
            code: "131082",
            name: "三河市"
          }
        ]
      },
      {
        code: "1311",
        name: "衡水市",
        children: [
          {
            code: "131102",
            name: "桃城区"
          },
          {
            code: "131103",
            name: "冀州区"
          },
          {
            code: "131121",
            name: "枣强县"
          },
          {
            code: "131122",
            name: "武邑县"
          },
          {
            code: "131123",
            name: "武强县"
          },
          {
            code: "131124",
            name: "饶阳县"
          },
          {
            code: "131125",
            name: "安平县"
          },
          {
            code: "131126",
            name: "故城县"
          },
          {
            code: "131127",
            name: "景县"
          },
          {
            code: "131128",
            name: "阜城县"
          },
          {
            code: "131171",
            name: "河北衡水高新技术产业开发区"
          },
          {
            code: "131172",
            name: "衡水滨湖新区"
          },
          {
            code: "131182",
            name: "深州市"
          }
        ]
      }
    ]
  },
  {
    code: "14",
    name: "山西省",
    children: [
      {
        code: "1401",
        name: "太原市",
        children: [
          {
            code: "140105",
            name: "小店区"
          },
          {
            code: "140106",
            name: "迎泽区"
          },
          {
            code: "140107",
            name: "杏花岭区"
          },
          {
            code: "140108",
            name: "尖草坪区"
          },
          {
            code: "140109",
            name: "万柏林区"
          },
          {
            code: "140110",
            name: "晋源区"
          },
          {
            code: "140121",
            name: "清徐县"
          },
          {
            code: "140122",
            name: "阳曲县"
          },
          {
            code: "140123",
            name: "娄烦县"
          },
          {
            code: "140171",
            name: "山西转型综合改革示范区"
          },
          {
            code: "140181",
            name: "古交市"
          }
        ]
      },
      {
        code: "1402",
        name: "大同市",
        children: [
          {
            code: "140212",
            name: "新荣区"
          },
          {
            code: "140213",
            name: "平城区"
          },
          {
            code: "140214",
            name: "云冈区"
          },
          {
            code: "140215",
            name: "云州区"
          },
          {
            code: "140221",
            name: "阳高县"
          },
          {
            code: "140222",
            name: "天镇县"
          },
          {
            code: "140223",
            name: "广灵县"
          },
          {
            code: "140224",
            name: "灵丘县"
          },
          {
            code: "140225",
            name: "浑源县"
          },
          {
            code: "140226",
            name: "左云县"
          },
          {
            code: "140271",
            name: "山西大同经济开发区"
          }
        ]
      },
      {
        code: "1403",
        name: "阳泉市",
        children: [
          {
            code: "140302",
            name: "城区"
          },
          {
            code: "140303",
            name: "矿区"
          },
          {
            code: "140311",
            name: "郊区"
          },
          {
            code: "140321",
            name: "平定县"
          },
          {
            code: "140322",
            name: "盂县"
          }
        ]
      },
      {
        code: "1404",
        name: "长治市",
        children: [
          {
            code: "140403",
            name: "潞州区"
          },
          {
            code: "140404",
            name: "上党区"
          },
          {
            code: "140405",
            name: "屯留区"
          },
          {
            code: "140406",
            name: "潞城区"
          },
          {
            code: "140423",
            name: "襄垣县"
          },
          {
            code: "140425",
            name: "平顺县"
          },
          {
            code: "140426",
            name: "黎城县"
          },
          {
            code: "140427",
            name: "壶关县"
          },
          {
            code: "140428",
            name: "长子县"
          },
          {
            code: "140429",
            name: "武乡县"
          },
          {
            code: "140430",
            name: "沁县"
          },
          {
            code: "140431",
            name: "沁源县"
          }
        ]
      },
      {
        code: "1405",
        name: "晋城市",
        children: [
          {
            code: "140502",
            name: "城区"
          },
          {
            code: "140521",
            name: "沁水县"
          },
          {
            code: "140522",
            name: "阳城县"
          },
          {
            code: "140524",
            name: "陵川县"
          },
          {
            code: "140525",
            name: "泽州县"
          },
          {
            code: "140581",
            name: "高平市"
          }
        ]
      },
      {
        code: "1406",
        name: "朔州市",
        children: [
          {
            code: "140602",
            name: "朔城区"
          },
          {
            code: "140603",
            name: "平鲁区"
          },
          {
            code: "140621",
            name: "山阴县"
          },
          {
            code: "140622",
            name: "应县"
          },
          {
            code: "140623",
            name: "右玉县"
          },
          {
            code: "140671",
            name: "山西朔州经济开发区"
          },
          {
            code: "140681",
            name: "怀仁市"
          }
        ]
      },
      {
        code: "1407",
        name: "晋中市",
        children: [
          {
            code: "140702",
            name: "榆次区"
          },
          {
            code: "140703",
            name: "太谷区"
          },
          {
            code: "140721",
            name: "榆社县"
          },
          {
            code: "140722",
            name: "左权县"
          },
          {
            code: "140723",
            name: "和顺县"
          },
          {
            code: "140724",
            name: "昔阳县"
          },
          {
            code: "140725",
            name: "寿阳县"
          },
          {
            code: "140727",
            name: "祁县"
          },
          {
            code: "140728",
            name: "平遥县"
          },
          {
            code: "140729",
            name: "灵石县"
          },
          {
            code: "140781",
            name: "介休市"
          }
        ]
      },
      {
        code: "1408",
        name: "运城市",
        children: [
          {
            code: "140802",
            name: "盐湖区"
          },
          {
            code: "140821",
            name: "临猗县"
          },
          {
            code: "140822",
            name: "万荣县"
          },
          {
            code: "140823",
            name: "闻喜县"
          },
          {
            code: "140824",
            name: "稷山县"
          },
          {
            code: "140825",
            name: "新绛县"
          },
          {
            code: "140826",
            name: "绛县"
          },
          {
            code: "140827",
            name: "垣曲县"
          },
          {
            code: "140828",
            name: "夏县"
          },
          {
            code: "140829",
            name: "平陆县"
          },
          {
            code: "140830",
            name: "芮城县"
          },
          {
            code: "140881",
            name: "永济市"
          },
          {
            code: "140882",
            name: "河津市"
          }
        ]
      },
      {
        code: "1409",
        name: "忻州市",
        children: [
          {
            code: "140902",
            name: "忻府区"
          },
          {
            code: "140921",
            name: "定襄县"
          },
          {
            code: "140922",
            name: "五台县"
          },
          {
            code: "140923",
            name: "代县"
          },
          {
            code: "140924",
            name: "繁峙县"
          },
          {
            code: "140925",
            name: "宁武县"
          },
          {
            code: "140926",
            name: "静乐县"
          },
          {
            code: "140927",
            name: "神池县"
          },
          {
            code: "140928",
            name: "五寨县"
          },
          {
            code: "140929",
            name: "岢岚县"
          },
          {
            code: "140930",
            name: "河曲县"
          },
          {
            code: "140931",
            name: "保德县"
          },
          {
            code: "140932",
            name: "偏关县"
          },
          {
            code: "140971",
            name: "五台山风景名胜区"
          },
          {
            code: "140981",
            name: "原平市"
          }
        ]
      },
      {
        code: "1410",
        name: "临汾市",
        children: [
          {
            code: "141002",
            name: "尧都区"
          },
          {
            code: "141021",
            name: "曲沃县"
          },
          {
            code: "141022",
            name: "翼城县"
          },
          {
            code: "141023",
            name: "襄汾县"
          },
          {
            code: "141024",
            name: "洪洞县"
          },
          {
            code: "141025",
            name: "古县"
          },
          {
            code: "141026",
            name: "安泽县"
          },
          {
            code: "141027",
            name: "浮山县"
          },
          {
            code: "141028",
            name: "吉县"
          },
          {
            code: "141029",
            name: "乡宁县"
          },
          {
            code: "141030",
            name: "大宁县"
          },
          {
            code: "141031",
            name: "隰县"
          },
          {
            code: "141032",
            name: "永和县"
          },
          {
            code: "141033",
            name: "蒲县"
          },
          {
            code: "141034",
            name: "汾西县"
          },
          {
            code: "141081",
            name: "侯马市"
          },
          {
            code: "141082",
            name: "霍州市"
          }
        ]
      },
      {
        code: "1411",
        name: "吕梁市",
        children: [
          {
            code: "141102",
            name: "离石区"
          },
          {
            code: "141121",
            name: "文水县"
          },
          {
            code: "141122",
            name: "交城县"
          },
          {
            code: "141123",
            name: "兴县"
          },
          {
            code: "141124",
            name: "临县"
          },
          {
            code: "141125",
            name: "柳林县"
          },
          {
            code: "141126",
            name: "石楼县"
          },
          {
            code: "141127",
            name: "岚县"
          },
          {
            code: "141128",
            name: "方山县"
          },
          {
            code: "141129",
            name: "中阳县"
          },
          {
            code: "141130",
            name: "交口县"
          },
          {
            code: "141181",
            name: "孝义市"
          },
          {
            code: "141182",
            name: "汾阳市"
          }
        ]
      }
    ]
  },
  {
    code: "15",
    name: "内蒙古自治区",
    children: [
      {
        code: "1501",
        name: "呼和浩特市",
        children: [
          {
            code: "150102",
            name: "新城区"
          },
          {
            code: "150103",
            name: "回民区"
          },
          {
            code: "150104",
            name: "玉泉区"
          },
          {
            code: "150105",
            name: "赛罕区"
          },
          {
            code: "150121",
            name: "土默特左旗"
          },
          {
            code: "150122",
            name: "托克托县"
          },
          {
            code: "150123",
            name: "和林格尔县"
          },
          {
            code: "150124",
            name: "清水河县"
          },
          {
            code: "150125",
            name: "武川县"
          },
          {
            code: "150172",
            name: "呼和浩特经济技术开发区"
          }
        ]
      },
      {
        code: "1502",
        name: "包头市",
        children: [
          {
            code: "150202",
            name: "东河区"
          },
          {
            code: "150203",
            name: "昆都仑区"
          },
          {
            code: "150204",
            name: "青山区"
          },
          {
            code: "150205",
            name: "石拐区"
          },
          {
            code: "150206",
            name: "白云鄂博矿区"
          },
          {
            code: "150207",
            name: "九原区"
          },
          {
            code: "150221",
            name: "土默特右旗"
          },
          {
            code: "150222",
            name: "固阳县"
          },
          {
            code: "150223",
            name: "达尔罕茂明安联合旗"
          },
          {
            code: "150271",
            name: "包头稀土高新技术产业开发区"
          }
        ]
      },
      {
        code: "1503",
        name: "乌海市",
        children: [
          {
            code: "150302",
            name: "海勃湾区"
          },
          {
            code: "150303",
            name: "海南区"
          },
          {
            code: "150304",
            name: "乌达区"
          }
        ]
      },
      {
        code: "1504",
        name: "赤峰市",
        children: [
          {
            code: "150402",
            name: "红山区"
          },
          {
            code: "150403",
            name: "元宝山区"
          },
          {
            code: "150404",
            name: "松山区"
          },
          {
            code: "150421",
            name: "阿鲁科尔沁旗"
          },
          {
            code: "150422",
            name: "巴林左旗"
          },
          {
            code: "150423",
            name: "巴林右旗"
          },
          {
            code: "150424",
            name: "林西县"
          },
          {
            code: "150425",
            name: "克什克腾旗"
          },
          {
            code: "150426",
            name: "翁牛特旗"
          },
          {
            code: "150428",
            name: "喀喇沁旗"
          },
          {
            code: "150429",
            name: "宁城县"
          },
          {
            code: "150430",
            name: "敖汉旗"
          }
        ]
      },
      {
        code: "1505",
        name: "通辽市",
        children: [
          {
            code: "150502",
            name: "科尔沁区"
          },
          {
            code: "150521",
            name: "科尔沁左翼中旗"
          },
          {
            code: "150522",
            name: "科尔沁左翼后旗"
          },
          {
            code: "150523",
            name: "开鲁县"
          },
          {
            code: "150524",
            name: "库伦旗"
          },
          {
            code: "150525",
            name: "奈曼旗"
          },
          {
            code: "150526",
            name: "扎鲁特旗"
          },
          {
            code: "150571",
            name: "通辽经济技术开发区"
          },
          {
            code: "150581",
            name: "霍林郭勒市"
          }
        ]
      },
      {
        code: "1506",
        name: "鄂尔多斯市",
        children: [
          {
            code: "150602",
            name: "东胜区"
          },
          {
            code: "150603",
            name: "康巴什区"
          },
          {
            code: "150621",
            name: "达拉特旗"
          },
          {
            code: "150622",
            name: "准格尔旗"
          },
          {
            code: "150623",
            name: "鄂托克前旗"
          },
          {
            code: "150624",
            name: "鄂托克旗"
          },
          {
            code: "150625",
            name: "杭锦旗"
          },
          {
            code: "150626",
            name: "乌审旗"
          },
          {
            code: "150627",
            name: "伊金霍洛旗"
          }
        ]
      },
      {
        code: "1507",
        name: "呼伦贝尔市",
        children: [
          {
            code: "150702",
            name: "海拉尔区"
          },
          {
            code: "150703",
            name: "扎赉诺尔区"
          },
          {
            code: "150721",
            name: "阿荣旗"
          },
          {
            code: "150722",
            name: "莫力达瓦达斡尔族自治旗"
          },
          {
            code: "150723",
            name: "鄂伦春自治旗"
          },
          {
            code: "150724",
            name: "鄂温克族自治旗"
          },
          {
            code: "150725",
            name: "陈巴尔虎旗"
          },
          {
            code: "150726",
            name: "新巴尔虎左旗"
          },
          {
            code: "150727",
            name: "新巴尔虎右旗"
          },
          {
            code: "150781",
            name: "满洲里市"
          },
          {
            code: "150782",
            name: "牙克石市"
          },
          {
            code: "150783",
            name: "扎兰屯市"
          },
          {
            code: "150784",
            name: "额尔古纳市"
          },
          {
            code: "150785",
            name: "根河市"
          }
        ]
      },
      {
        code: "1508",
        name: "巴彦淖尔市",
        children: [
          {
            code: "150802",
            name: "临河区"
          },
          {
            code: "150821",
            name: "五原县"
          },
          {
            code: "150822",
            name: "磴口县"
          },
          {
            code: "150823",
            name: "乌拉特前旗"
          },
          {
            code: "150824",
            name: "乌拉特中旗"
          },
          {
            code: "150825",
            name: "乌拉特后旗"
          },
          {
            code: "150826",
            name: "杭锦后旗"
          }
        ]
      },
      {
        code: "1509",
        name: "乌兰察布市",
        children: [
          {
            code: "150902",
            name: "集宁区"
          },
          {
            code: "150921",
            name: "卓资县"
          },
          {
            code: "150922",
            name: "化德县"
          },
          {
            code: "150923",
            name: "商都县"
          },
          {
            code: "150924",
            name: "兴和县"
          },
          {
            code: "150925",
            name: "凉城县"
          },
          {
            code: "150926",
            name: "察哈尔右翼前旗"
          },
          {
            code: "150927",
            name: "察哈尔右翼中旗"
          },
          {
            code: "150928",
            name: "察哈尔右翼后旗"
          },
          {
            code: "150929",
            name: "四子王旗"
          },
          {
            code: "150981",
            name: "丰镇市"
          }
        ]
      },
      {
        code: "1522",
        name: "兴安盟",
        children: [
          {
            code: "152201",
            name: "乌兰浩特市"
          },
          {
            code: "152202",
            name: "阿尔山市"
          },
          {
            code: "152221",
            name: "科尔沁右翼前旗"
          },
          {
            code: "152222",
            name: "科尔沁右翼中旗"
          },
          {
            code: "152223",
            name: "扎赉特旗"
          },
          {
            code: "152224",
            name: "突泉县"
          }
        ]
      },
      {
        code: "1525",
        name: "锡林郭勒盟",
        children: [
          {
            code: "152501",
            name: "二连浩特市"
          },
          {
            code: "152502",
            name: "锡林浩特市"
          },
          {
            code: "152522",
            name: "阿巴嘎旗"
          },
          {
            code: "152523",
            name: "苏尼特左旗"
          },
          {
            code: "152524",
            name: "苏尼特右旗"
          },
          {
            code: "152525",
            name: "东乌珠穆沁旗"
          },
          {
            code: "152526",
            name: "西乌珠穆沁旗"
          },
          {
            code: "152527",
            name: "太仆寺旗"
          },
          {
            code: "152528",
            name: "镶黄旗"
          },
          {
            code: "152529",
            name: "正镶白旗"
          },
          {
            code: "152530",
            name: "正蓝旗"
          },
          {
            code: "152531",
            name: "多伦县"
          },
          {
            code: "152571",
            name: "乌拉盖管理区管委会"
          }
        ]
      },
      {
        code: "1529",
        name: "阿拉善盟",
        children: [
          {
            code: "152921",
            name: "阿拉善左旗"
          },
          {
            code: "152922",
            name: "阿拉善右旗"
          },
          {
            code: "152923",
            name: "额济纳旗"
          },
          {
            code: "152971",
            name: "内蒙古阿拉善高新技术产业开发区"
          }
        ]
      }
    ]
  },
  {
    code: "21",
    name: "辽宁省",
    children: [
      {
        code: "2101",
        name: "沈阳市",
        children: [
          {
            code: "210102",
            name: "和平区"
          },
          {
            code: "210103",
            name: "沈河区"
          },
          {
            code: "210104",
            name: "大东区"
          },
          {
            code: "210105",
            name: "皇姑区"
          },
          {
            code: "210106",
            name: "铁西区"
          },
          {
            code: "210111",
            name: "苏家屯区"
          },
          {
            code: "210112",
            name: "浑南区"
          },
          {
            code: "210113",
            name: "沈北新区"
          },
          {
            code: "210114",
            name: "于洪区"
          },
          {
            code: "210115",
            name: "辽中区"
          },
          {
            code: "210123",
            name: "康平县"
          },
          {
            code: "210124",
            name: "法库县"
          },
          {
            code: "210181",
            name: "新民市"
          }
        ]
      },
      {
        code: "2102",
        name: "大连市",
        children: [
          {
            code: "210202",
            name: "中山区"
          },
          {
            code: "210203",
            name: "西岗区"
          },
          {
            code: "210204",
            name: "沙河口区"
          },
          {
            code: "210211",
            name: "甘井子区"
          },
          {
            code: "210212",
            name: "旅顺口区"
          },
          {
            code: "210213",
            name: "金州区"
          },
          {
            code: "210214",
            name: "普兰店区"
          },
          {
            code: "210224",
            name: "长海县"
          },
          {
            code: "210281",
            name: "瓦房店市"
          },
          {
            code: "210283",
            name: "庄河市"
          }
        ]
      },
      {
        code: "2103",
        name: "鞍山市",
        children: [
          {
            code: "210302",
            name: "铁东区"
          },
          {
            code: "210303",
            name: "铁西区"
          },
          {
            code: "210304",
            name: "立山区"
          },
          {
            code: "210311",
            name: "千山区"
          },
          {
            code: "210321",
            name: "台安县"
          },
          {
            code: "210323",
            name: "岫岩满族自治县"
          },
          {
            code: "210381",
            name: "海城市"
          }
        ]
      },
      {
        code: "2104",
        name: "抚顺市",
        children: [
          {
            code: "210402",
            name: "新抚区"
          },
          {
            code: "210403",
            name: "东洲区"
          },
          {
            code: "210404",
            name: "望花区"
          },
          {
            code: "210411",
            name: "顺城区"
          },
          {
            code: "210421",
            name: "抚顺县"
          },
          {
            code: "210422",
            name: "新宾满族自治县"
          },
          {
            code: "210423",
            name: "清原满族自治县"
          }
        ]
      },
      {
        code: "2105",
        name: "本溪市",
        children: [
          {
            code: "210502",
            name: "平山区"
          },
          {
            code: "210503",
            name: "溪湖区"
          },
          {
            code: "210504",
            name: "明山区"
          },
          {
            code: "210505",
            name: "南芬区"
          },
          {
            code: "210521",
            name: "本溪满族自治县"
          },
          {
            code: "210522",
            name: "桓仁满族自治县"
          }
        ]
      },
      {
        code: "2106",
        name: "丹东市",
        children: [
          {
            code: "210602",
            name: "元宝区"
          },
          {
            code: "210603",
            name: "振兴区"
          },
          {
            code: "210604",
            name: "振安区"
          },
          {
            code: "210624",
            name: "宽甸满族自治县"
          },
          {
            code: "210681",
            name: "东港市"
          },
          {
            code: "210682",
            name: "凤城市"
          }
        ]
      },
      {
        code: "2107",
        name: "锦州市",
        children: [
          {
            code: "210702",
            name: "古塔区"
          },
          {
            code: "210703",
            name: "凌河区"
          },
          {
            code: "210711",
            name: "太和区"
          },
          {
            code: "210726",
            name: "黑山县"
          },
          {
            code: "210727",
            name: "义县"
          },
          {
            code: "210781",
            name: "凌海市"
          },
          {
            code: "210782",
            name: "北镇市"
          }
        ]
      },
      {
        code: "2108",
        name: "营口市",
        children: [
          {
            code: "210802",
            name: "站前区"
          },
          {
            code: "210803",
            name: "西市区"
          },
          {
            code: "210804",
            name: "鲅鱼圈区"
          },
          {
            code: "210811",
            name: "老边区"
          },
          {
            code: "210881",
            name: "盖州市"
          },
          {
            code: "210882",
            name: "大石桥市"
          }
        ]
      },
      {
        code: "2109",
        name: "阜新市",
        children: [
          {
            code: "210902",
            name: "海州区"
          },
          {
            code: "210903",
            name: "新邱区"
          },
          {
            code: "210904",
            name: "太平区"
          },
          {
            code: "210905",
            name: "清河门区"
          },
          {
            code: "210911",
            name: "细河区"
          },
          {
            code: "210921",
            name: "阜新蒙古族自治县"
          },
          {
            code: "210922",
            name: "彰武县"
          }
        ]
      },
      {
        code: "2110",
        name: "辽阳市",
        children: [
          {
            code: "211002",
            name: "白塔区"
          },
          {
            code: "211003",
            name: "文圣区"
          },
          {
            code: "211004",
            name: "宏伟区"
          },
          {
            code: "211005",
            name: "弓长岭区"
          },
          {
            code: "211011",
            name: "太子河区"
          },
          {
            code: "211021",
            name: "辽阳县"
          },
          {
            code: "211081",
            name: "灯塔市"
          }
        ]
      },
      {
        code: "2111",
        name: "盘锦市",
        children: [
          {
            code: "211102",
            name: "双台子区"
          },
          {
            code: "211103",
            name: "兴隆台区"
          },
          {
            code: "211104",
            name: "大洼区"
          },
          {
            code: "211122",
            name: "盘山县"
          }
        ]
      },
      {
        code: "2112",
        name: "铁岭市",
        children: [
          {
            code: "211202",
            name: "银州区"
          },
          {
            code: "211204",
            name: "清河区"
          },
          {
            code: "211221",
            name: "铁岭县"
          },
          {
            code: "211223",
            name: "西丰县"
          },
          {
            code: "211224",
            name: "昌图县"
          },
          {
            code: "211281",
            name: "调兵山市"
          },
          {
            code: "211282",
            name: "开原市"
          }
        ]
      },
      {
        code: "2113",
        name: "朝阳市",
        children: [
          {
            code: "211302",
            name: "双塔区"
          },
          {
            code: "211303",
            name: "龙城区"
          },
          {
            code: "211321",
            name: "朝阳县"
          },
          {
            code: "211322",
            name: "建平县"
          },
          {
            code: "211324",
            name: "喀喇沁左翼蒙古族自治县"
          },
          {
            code: "211381",
            name: "北票市"
          },
          {
            code: "211382",
            name: "凌源市"
          }
        ]
      },
      {
        code: "2114",
        name: "葫芦岛市",
        children: [
          {
            code: "211402",
            name: "连山区"
          },
          {
            code: "211403",
            name: "龙港区"
          },
          {
            code: "211404",
            name: "南票区"
          },
          {
            code: "211421",
            name: "绥中县"
          },
          {
            code: "211422",
            name: "建昌县"
          },
          {
            code: "211481",
            name: "兴城市"
          }
        ]
      }
    ]
  },
  {
    code: "22",
    name: "吉林省",
    children: [
      {
        code: "2201",
        name: "长春市",
        children: [
          {
            code: "220102",
            name: "南关区"
          },
          {
            code: "220103",
            name: "宽城区"
          },
          {
            code: "220104",
            name: "朝阳区"
          },
          {
            code: "220105",
            name: "二道区"
          },
          {
            code: "220106",
            name: "绿园区"
          },
          {
            code: "220112",
            name: "双阳区"
          },
          {
            code: "220113",
            name: "九台区"
          },
          {
            code: "220122",
            name: "农安县"
          },
          {
            code: "220171",
            name: "长春经济技术开发区"
          },
          {
            code: "220172",
            name: "长春净月高新技术产业开发区"
          },
          {
            code: "220173",
            name: "长春高新技术产业开发区"
          },
          {
            code: "220174",
            name: "长春汽车经济技术开发区"
          },
          {
            code: "220182",
            name: "榆树市"
          },
          {
            code: "220183",
            name: "德惠市"
          },
          {
            code: "220184",
            name: "公主岭市"
          }
        ]
      },
      {
        code: "2202",
        name: "吉林市",
        children: [
          {
            code: "220202",
            name: "昌邑区"
          },
          {
            code: "220203",
            name: "龙潭区"
          },
          {
            code: "220204",
            name: "船营区"
          },
          {
            code: "220211",
            name: "丰满区"
          },
          {
            code: "220221",
            name: "永吉县"
          },
          {
            code: "220271",
            name: "吉林经济开发区"
          },
          {
            code: "220272",
            name: "吉林高新技术产业开发区"
          },
          {
            code: "220273",
            name: "吉林中国新加坡食品区"
          },
          {
            code: "220281",
            name: "蛟河市"
          },
          {
            code: "220282",
            name: "桦甸市"
          },
          {
            code: "220283",
            name: "舒兰市"
          },
          {
            code: "220284",
            name: "磐石市"
          }
        ]
      },
      {
        code: "2203",
        name: "四平市",
        children: [
          {
            code: "220302",
            name: "铁西区"
          },
          {
            code: "220303",
            name: "铁东区"
          },
          {
            code: "220322",
            name: "梨树县"
          },
          {
            code: "220323",
            name: "伊通满族自治县"
          },
          {
            code: "220382",
            name: "双辽市"
          }
        ]
      },
      {
        code: "2204",
        name: "辽源市",
        children: [
          {
            code: "220402",
            name: "龙山区"
          },
          {
            code: "220403",
            name: "西安区"
          },
          {
            code: "220421",
            name: "东丰县"
          },
          {
            code: "220422",
            name: "东辽县"
          }
        ]
      },
      {
        code: "2205",
        name: "通化市",
        children: [
          {
            code: "220502",
            name: "东昌区"
          },
          {
            code: "220503",
            name: "二道江区"
          },
          {
            code: "220521",
            name: "通化县"
          },
          {
            code: "220523",
            name: "辉南县"
          },
          {
            code: "220524",
            name: "柳河县"
          },
          {
            code: "220581",
            name: "梅河口市"
          },
          {
            code: "220582",
            name: "集安市"
          }
        ]
      },
      {
        code: "2206",
        name: "白山市",
        children: [
          {
            code: "220602",
            name: "浑江区"
          },
          {
            code: "220605",
            name: "江源区"
          },
          {
            code: "220621",
            name: "抚松县"
          },
          {
            code: "220622",
            name: "靖宇县"
          },
          {
            code: "220623",
            name: "长白朝鲜族自治县"
          },
          {
            code: "220681",
            name: "临江市"
          }
        ]
      },
      {
        code: "2207",
        name: "松原市",
        children: [
          {
            code: "220702",
            name: "宁江区"
          },
          {
            code: "220721",
            name: "前郭尔罗斯蒙古族自治县"
          },
          {
            code: "220722",
            name: "长岭县"
          },
          {
            code: "220723",
            name: "乾安县"
          },
          {
            code: "220771",
            name: "吉林松原经济开发区"
          },
          {
            code: "220781",
            name: "扶余市"
          }
        ]
      },
      {
        code: "2208",
        name: "白城市",
        children: [
          {
            code: "220802",
            name: "洮北区"
          },
          {
            code: "220821",
            name: "镇赉县"
          },
          {
            code: "220822",
            name: "通榆县"
          },
          {
            code: "220871",
            name: "吉林白城经济开发区"
          },
          {
            code: "220881",
            name: "洮南市"
          },
          {
            code: "220882",
            name: "大安市"
          }
        ]
      },
      {
        code: "2224",
        name: "延边朝鲜族自治州",
        children: [
          {
            code: "222401",
            name: "延吉市"
          },
          {
            code: "222402",
            name: "图们市"
          },
          {
            code: "222403",
            name: "敦化市"
          },
          {
            code: "222404",
            name: "珲春市"
          },
          {
            code: "222405",
            name: "龙井市"
          },
          {
            code: "222406",
            name: "和龙市"
          },
          {
            code: "222424",
            name: "汪清县"
          },
          {
            code: "222426",
            name: "安图县"
          }
        ]
      }
    ]
  },
  {
    code: "23",
    name: "黑龙江省",
    children: [
      {
        code: "2301",
        name: "哈尔滨市",
        children: [
          {
            code: "230102",
            name: "道里区"
          },
          {
            code: "230103",
            name: "南岗区"
          },
          {
            code: "230104",
            name: "道外区"
          },
          {
            code: "230108",
            name: "平房区"
          },
          {
            code: "230109",
            name: "松北区"
          },
          {
            code: "230110",
            name: "香坊区"
          },
          {
            code: "230111",
            name: "呼兰区"
          },
          {
            code: "230112",
            name: "阿城区"
          },
          {
            code: "230113",
            name: "双城区"
          },
          {
            code: "230123",
            name: "依兰县"
          },
          {
            code: "230124",
            name: "方正县"
          },
          {
            code: "230125",
            name: "宾县"
          },
          {
            code: "230126",
            name: "巴彦县"
          },
          {
            code: "230127",
            name: "木兰县"
          },
          {
            code: "230128",
            name: "通河县"
          },
          {
            code: "230129",
            name: "延寿县"
          },
          {
            code: "230183",
            name: "尚志市"
          },
          {
            code: "230184",
            name: "五常市"
          }
        ]
      },
      {
        code: "2302",
        name: "齐齐哈尔市",
        children: [
          {
            code: "230202",
            name: "龙沙区"
          },
          {
            code: "230203",
            name: "建华区"
          },
          {
            code: "230204",
            name: "铁锋区"
          },
          {
            code: "230205",
            name: "昂昂溪区"
          },
          {
            code: "230206",
            name: "富拉尔基区"
          },
          {
            code: "230207",
            name: "碾子山区"
          },
          {
            code: "230208",
            name: "梅里斯达斡尔族区"
          },
          {
            code: "230221",
            name: "龙江县"
          },
          {
            code: "230223",
            name: "依安县"
          },
          {
            code: "230224",
            name: "泰来县"
          },
          {
            code: "230225",
            name: "甘南县"
          },
          {
            code: "230227",
            name: "富裕县"
          },
          {
            code: "230229",
            name: "克山县"
          },
          {
            code: "230230",
            name: "克东县"
          },
          {
            code: "230231",
            name: "拜泉县"
          },
          {
            code: "230281",
            name: "讷河市"
          }
        ]
      },
      {
        code: "2303",
        name: "鸡西市",
        children: [
          {
            code: "230302",
            name: "鸡冠区"
          },
          {
            code: "230303",
            name: "恒山区"
          },
          {
            code: "230304",
            name: "滴道区"
          },
          {
            code: "230305",
            name: "梨树区"
          },
          {
            code: "230306",
            name: "城子河区"
          },
          {
            code: "230307",
            name: "麻山区"
          },
          {
            code: "230321",
            name: "鸡东县"
          },
          {
            code: "230381",
            name: "虎林市"
          },
          {
            code: "230382",
            name: "密山市"
          }
        ]
      },
      {
        code: "2304",
        name: "鹤岗市",
        children: [
          {
            code: "230402",
            name: "向阳区"
          },
          {
            code: "230403",
            name: "工农区"
          },
          {
            code: "230404",
            name: "南山区"
          },
          {
            code: "230405",
            name: "兴安区"
          },
          {
            code: "230406",
            name: "东山区"
          },
          {
            code: "230407",
            name: "兴山区"
          },
          {
            code: "230421",
            name: "萝北县"
          },
          {
            code: "230422",
            name: "绥滨县"
          }
        ]
      },
      {
        code: "2305",
        name: "双鸭山市",
        children: [
          {
            code: "230502",
            name: "尖山区"
          },
          {
            code: "230503",
            name: "岭东区"
          },
          {
            code: "230505",
            name: "四方台区"
          },
          {
            code: "230506",
            name: "宝山区"
          },
          {
            code: "230521",
            name: "集贤县"
          },
          {
            code: "230522",
            name: "友谊县"
          },
          {
            code: "230523",
            name: "宝清县"
          },
          {
            code: "230524",
            name: "饶河县"
          }
        ]
      },
      {
        code: "2306",
        name: "大庆市",
        children: [
          {
            code: "230602",
            name: "萨尔图区"
          },
          {
            code: "230603",
            name: "龙凤区"
          },
          {
            code: "230604",
            name: "让胡路区"
          },
          {
            code: "230605",
            name: "红岗区"
          },
          {
            code: "230606",
            name: "大同区"
          },
          {
            code: "230621",
            name: "肇州县"
          },
          {
            code: "230622",
            name: "肇源县"
          },
          {
            code: "230623",
            name: "林甸县"
          },
          {
            code: "230624",
            name: "杜尔伯特蒙古族自治县"
          },
          {
            code: "230671",
            name: "大庆高新技术产业开发区"
          }
        ]
      },
      {
        code: "2307",
        name: "伊春市",
        children: [
          {
            code: "230717",
            name: "伊美区"
          },
          {
            code: "230718",
            name: "乌翠区"
          },
          {
            code: "230719",
            name: "友好区"
          },
          {
            code: "230722",
            name: "嘉荫县"
          },
          {
            code: "230723",
            name: "汤旺县"
          },
          {
            code: "230724",
            name: "丰林县"
          },
          {
            code: "230725",
            name: "大箐山县"
          },
          {
            code: "230726",
            name: "南岔县"
          },
          {
            code: "230751",
            name: "金林区"
          },
          {
            code: "230781",
            name: "铁力市"
          }
        ]
      },
      {
        code: "2308",
        name: "佳木斯市",
        children: [
          {
            code: "230803",
            name: "向阳区"
          },
          {
            code: "230804",
            name: "前进区"
          },
          {
            code: "230805",
            name: "东风区"
          },
          {
            code: "230811",
            name: "郊区"
          },
          {
            code: "230822",
            name: "桦南县"
          },
          {
            code: "230826",
            name: "桦川县"
          },
          {
            code: "230828",
            name: "汤原县"
          },
          {
            code: "230881",
            name: "同江市"
          },
          {
            code: "230882",
            name: "富锦市"
          },
          {
            code: "230883",
            name: "抚远市"
          }
        ]
      },
      {
        code: "2309",
        name: "七台河市",
        children: [
          {
            code: "230902",
            name: "新兴区"
          },
          {
            code: "230903",
            name: "桃山区"
          },
          {
            code: "230904",
            name: "茄子河区"
          },
          {
            code: "230921",
            name: "勃利县"
          }
        ]
      },
      {
        code: "2310",
        name: "牡丹江市",
        children: [
          {
            code: "231002",
            name: "东安区"
          },
          {
            code: "231003",
            name: "阳明区"
          },
          {
            code: "231004",
            name: "爱民区"
          },
          {
            code: "231005",
            name: "西安区"
          },
          {
            code: "231025",
            name: "林口县"
          },
          {
            code: "231081",
            name: "绥芬河市"
          },
          {
            code: "231083",
            name: "海林市"
          },
          {
            code: "231084",
            name: "宁安市"
          },
          {
            code: "231085",
            name: "穆棱市"
          },
          {
            code: "231086",
            name: "东宁市"
          }
        ]
      },
      {
        code: "2311",
        name: "黑河市",
        children: [
          {
            code: "231102",
            name: "爱辉区"
          },
          {
            code: "231123",
            name: "逊克县"
          },
          {
            code: "231124",
            name: "孙吴县"
          },
          {
            code: "231181",
            name: "北安市"
          },
          {
            code: "231182",
            name: "五大连池市"
          },
          {
            code: "231183",
            name: "嫩江市"
          }
        ]
      },
      {
        code: "2312",
        name: "绥化市",
        children: [
          {
            code: "231202",
            name: "北林区"
          },
          {
            code: "231221",
            name: "望奎县"
          },
          {
            code: "231222",
            name: "兰西县"
          },
          {
            code: "231223",
            name: "青冈县"
          },
          {
            code: "231224",
            name: "庆安县"
          },
          {
            code: "231225",
            name: "明水县"
          },
          {
            code: "231226",
            name: "绥棱县"
          },
          {
            code: "231281",
            name: "安达市"
          },
          {
            code: "231282",
            name: "肇东市"
          },
          {
            code: "231283",
            name: "海伦市"
          }
        ]
      },
      {
        code: "2327",
        name: "大兴安岭地区",
        children: [
          {
            code: "232701",
            name: "漠河市"
          },
          {
            code: "232721",
            name: "呼玛县"
          },
          {
            code: "232722",
            name: "塔河县"
          },
          {
            code: "232761",
            name: "加格达奇区"
          },
          {
            code: "232762",
            name: "松岭区"
          },
          {
            code: "232763",
            name: "新林区"
          },
          {
            code: "232764",
            name: "呼中区"
          }
        ]
      }
    ]
  },
  {
    code: "31",
    name: "上海市",
    children: [
      {
        code: "3101",
        name: "市辖区",
        children: [
          {
            code: "310101",
            name: "黄浦区"
          },
          {
            code: "310104",
            name: "徐汇区"
          },
          {
            code: "310105",
            name: "长宁区"
          },
          {
            code: "310106",
            name: "静安区"
          },
          {
            code: "310107",
            name: "普陀区"
          },
          {
            code: "310109",
            name: "虹口区"
          },
          {
            code: "310110",
            name: "杨浦区"
          },
          {
            code: "310112",
            name: "闵行区"
          },
          {
            code: "310113",
            name: "宝山区"
          },
          {
            code: "310114",
            name: "嘉定区"
          },
          {
            code: "310115",
            name: "浦东新区"
          },
          {
            code: "310116",
            name: "金山区"
          },
          {
            code: "310117",
            name: "松江区"
          },
          {
            code: "310118",
            name: "青浦区"
          },
          {
            code: "310120",
            name: "奉贤区"
          },
          {
            code: "310151",
            name: "崇明区"
          }
        ]
      }
    ]
  },
  {
    code: "32",
    name: "江苏省",
    children: [
      {
        code: "3201",
        name: "南京市",
        children: [
          {
            code: "320102",
            name: "玄武区"
          },
          {
            code: "320104",
            name: "秦淮区"
          },
          {
            code: "320105",
            name: "建邺区"
          },
          {
            code: "320106",
            name: "鼓楼区"
          },
          {
            code: "320111",
            name: "浦口区"
          },
          {
            code: "320113",
            name: "栖霞区"
          },
          {
            code: "320114",
            name: "雨花台区"
          },
          {
            code: "320115",
            name: "江宁区"
          },
          {
            code: "320116",
            name: "六合区"
          },
          {
            code: "320117",
            name: "溧水区"
          },
          {
            code: "320118",
            name: "高淳区"
          }
        ]
      },
      {
        code: "3202",
        name: "无锡市",
        children: [
          {
            code: "320205",
            name: "锡山区"
          },
          {
            code: "320206",
            name: "惠山区"
          },
          {
            code: "320211",
            name: "滨湖区"
          },
          {
            code: "320213",
            name: "梁溪区"
          },
          {
            code: "320214",
            name: "新吴区"
          },
          {
            code: "320281",
            name: "江阴市"
          },
          {
            code: "320282",
            name: "宜兴市"
          }
        ]
      },
      {
        code: "3203",
        name: "徐州市",
        children: [
          {
            code: "320302",
            name: "鼓楼区"
          },
          {
            code: "320303",
            name: "云龙区"
          },
          {
            code: "320305",
            name: "贾汪区"
          },
          {
            code: "320311",
            name: "泉山区"
          },
          {
            code: "320312",
            name: "铜山区"
          },
          {
            code: "320321",
            name: "丰县"
          },
          {
            code: "320322",
            name: "沛县"
          },
          {
            code: "320324",
            name: "睢宁县"
          },
          {
            code: "320371",
            name: "徐州经济技术开发区"
          },
          {
            code: "320381",
            name: "新沂市"
          },
          {
            code: "320382",
            name: "邳州市"
          }
        ]
      },
      {
        code: "3204",
        name: "常州市",
        children: [
          {
            code: "320402",
            name: "天宁区"
          },
          {
            code: "320404",
            name: "钟楼区"
          },
          {
            code: "320411",
            name: "新北区"
          },
          {
            code: "320412",
            name: "武进区"
          },
          {
            code: "320413",
            name: "金坛区"
          },
          {
            code: "320481",
            name: "溧阳市"
          }
        ]
      },
      {
        code: "3205",
        name: "苏州市",
        children: [
          {
            code: "320505",
            name: "虎丘区"
          },
          {
            code: "320506",
            name: "吴中区"
          },
          {
            code: "320507",
            name: "相城区"
          },
          {
            code: "320508",
            name: "姑苏区"
          },
          {
            code: "320509",
            name: "吴江区"
          },
          {
            code: "320576",
            name: "苏州工业园区"
          },
          {
            code: "320581",
            name: "常熟市"
          },
          {
            code: "320582",
            name: "张家港市"
          },
          {
            code: "320583",
            name: "昆山市"
          },
          {
            code: "320585",
            name: "太仓市"
          }
        ]
      },
      {
        code: "3206",
        name: "南通市",
        children: [
          {
            code: "320612",
            name: "通州区"
          },
          {
            code: "320613",
            name: "崇川区"
          },
          {
            code: "320614",
            name: "海门区"
          },
          {
            code: "320623",
            name: "如东县"
          },
          {
            code: "320671",
            name: "南通经济技术开发区"
          },
          {
            code: "320681",
            name: "启东市"
          },
          {
            code: "320682",
            name: "如皋市"
          },
          {
            code: "320685",
            name: "海安市"
          }
        ]
      },
      {
        code: "3207",
        name: "连云港市",
        children: [
          {
            code: "320703",
            name: "连云区"
          },
          {
            code: "320706",
            name: "海州区"
          },
          {
            code: "320707",
            name: "赣榆区"
          },
          {
            code: "320722",
            name: "东海县"
          },
          {
            code: "320723",
            name: "灌云县"
          },
          {
            code: "320724",
            name: "灌南县"
          },
          {
            code: "320771",
            name: "连云港经济技术开发区"
          }
        ]
      },
      {
        code: "3208",
        name: "淮安市",
        children: [
          {
            code: "320803",
            name: "淮安区"
          },
          {
            code: "320804",
            name: "淮阴区"
          },
          {
            code: "320812",
            name: "清江浦区"
          },
          {
            code: "320813",
            name: "洪泽区"
          },
          {
            code: "320826",
            name: "涟水县"
          },
          {
            code: "320830",
            name: "盱眙县"
          },
          {
            code: "320831",
            name: "金湖县"
          },
          {
            code: "320871",
            name: "淮安经济技术开发区"
          }
        ]
      },
      {
        code: "3209",
        name: "盐城市",
        children: [
          {
            code: "320902",
            name: "亭湖区"
          },
          {
            code: "320903",
            name: "盐都区"
          },
          {
            code: "320904",
            name: "大丰区"
          },
          {
            code: "320921",
            name: "响水县"
          },
          {
            code: "320922",
            name: "滨海县"
          },
          {
            code: "320923",
            name: "阜宁县"
          },
          {
            code: "320924",
            name: "射阳县"
          },
          {
            code: "320925",
            name: "建湖县"
          },
          {
            code: "320971",
            name: "盐城经济技术开发区"
          },
          {
            code: "320981",
            name: "东台市"
          }
        ]
      },
      {
        code: "3210",
        name: "扬州市",
        children: [
          {
            code: "321002",
            name: "广陵区"
          },
          {
            code: "321003",
            name: "邗江区"
          },
          {
            code: "321012",
            name: "江都区"
          },
          {
            code: "321023",
            name: "宝应县"
          },
          {
            code: "321071",
            name: "扬州经济技术开发区"
          },
          {
            code: "321081",
            name: "仪征市"
          },
          {
            code: "321084",
            name: "高邮市"
          }
        ]
      },
      {
        code: "3211",
        name: "镇江市",
        children: [
          {
            code: "321102",
            name: "京口区"
          },
          {
            code: "321111",
            name: "润州区"
          },
          {
            code: "321112",
            name: "丹徒区"
          },
          {
            code: "321171",
            name: "镇江新区"
          },
          {
            code: "321181",
            name: "丹阳市"
          },
          {
            code: "321182",
            name: "扬中市"
          },
          {
            code: "321183",
            name: "句容市"
          }
        ]
      },
      {
        code: "3212",
        name: "泰州市",
        children: [
          {
            code: "321202",
            name: "海陵区"
          },
          {
            code: "321203",
            name: "高港区"
          },
          {
            code: "321204",
            name: "姜堰区"
          },
          {
            code: "321281",
            name: "兴化市"
          },
          {
            code: "321282",
            name: "靖江市"
          },
          {
            code: "321283",
            name: "泰兴市"
          }
        ]
      },
      {
        code: "3213",
        name: "宿迁市",
        children: [
          {
            code: "321302",
            name: "宿城区"
          },
          {
            code: "321311",
            name: "宿豫区"
          },
          {
            code: "321322",
            name: "沭阳县"
          },
          {
            code: "321323",
            name: "泗阳县"
          },
          {
            code: "321324",
            name: "泗洪县"
          },
          {
            code: "321371",
            name: "宿迁经济技术开发区"
          }
        ]
      }
    ]
  },
  {
    code: "33",
    name: "浙江省",
    children: [
      {
        code: "3301",
        name: "杭州市",
        children: [
          {
            code: "330102",
            name: "上城区"
          },
          {
            code: "330105",
            name: "拱墅区"
          },
          {
            code: "330106",
            name: "西湖区"
          },
          {
            code: "330108",
            name: "滨江区"
          },
          {
            code: "330109",
            name: "萧山区"
          },
          {
            code: "330110",
            name: "余杭区"
          },
          {
            code: "330111",
            name: "富阳区"
          },
          {
            code: "330112",
            name: "临安区"
          },
          {
            code: "330113",
            name: "临平区"
          },
          {
            code: "330114",
            name: "钱塘区"
          },
          {
            code: "330122",
            name: "桐庐县"
          },
          {
            code: "330127",
            name: "淳安县"
          },
          {
            code: "330182",
            name: "建德市"
          }
        ]
      },
      {
        code: "3302",
        name: "宁波市",
        children: [
          {
            code: "330203",
            name: "海曙区"
          },
          {
            code: "330205",
            name: "江北区"
          },
          {
            code: "330206",
            name: "北仑区"
          },
          {
            code: "330211",
            name: "镇海区"
          },
          {
            code: "330212",
            name: "鄞州区"
          },
          {
            code: "330213",
            name: "奉化区"
          },
          {
            code: "330225",
            name: "象山县"
          },
          {
            code: "330226",
            name: "宁海县"
          },
          {
            code: "330281",
            name: "余姚市"
          },
          {
            code: "330282",
            name: "慈溪市"
          }
        ]
      },
      {
        code: "3303",
        name: "温州市",
        children: [
          {
            code: "330302",
            name: "鹿城区"
          },
          {
            code: "330303",
            name: "龙湾区"
          },
          {
            code: "330304",
            name: "瓯海区"
          },
          {
            code: "330305",
            name: "洞头区"
          },
          {
            code: "330324",
            name: "永嘉县"
          },
          {
            code: "330326",
            name: "平阳县"
          },
          {
            code: "330327",
            name: "苍南县"
          },
          {
            code: "330328",
            name: "文成县"
          },
          {
            code: "330329",
            name: "泰顺县"
          },
          {
            code: "330381",
            name: "瑞安市"
          },
          {
            code: "330382",
            name: "乐清市"
          },
          {
            code: "330383",
            name: "龙港市"
          }
        ]
      },
      {
        code: "3304",
        name: "嘉兴市",
        children: [
          {
            code: "330402",
            name: "南湖区"
          },
          {
            code: "330411",
            name: "秀洲区"
          },
          {
            code: "330421",
            name: "嘉善县"
          },
          {
            code: "330424",
            name: "海盐县"
          },
          {
            code: "330481",
            name: "海宁市"
          },
          {
            code: "330482",
            name: "平湖市"
          },
          {
            code: "330483",
            name: "桐乡市"
          }
        ]
      },
      {
        code: "3305",
        name: "湖州市",
        children: [
          {
            code: "330502",
            name: "吴兴区"
          },
          {
            code: "330503",
            name: "南浔区"
          },
          {
            code: "330521",
            name: "德清县"
          },
          {
            code: "330522",
            name: "长兴县"
          },
          {
            code: "330523",
            name: "安吉县"
          }
        ]
      },
      {
        code: "3306",
        name: "绍兴市",
        children: [
          {
            code: "330602",
            name: "越城区"
          },
          {
            code: "330603",
            name: "柯桥区"
          },
          {
            code: "330604",
            name: "上虞区"
          },
          {
            code: "330624",
            name: "新昌县"
          },
          {
            code: "330681",
            name: "诸暨市"
          },
          {
            code: "330683",
            name: "嵊州市"
          }
        ]
      },
      {
        code: "3307",
        name: "金华市",
        children: [
          {
            code: "330702",
            name: "婺城区"
          },
          {
            code: "330703",
            name: "金东区"
          },
          {
            code: "330723",
            name: "武义县"
          },
          {
            code: "330726",
            name: "浦江县"
          },
          {
            code: "330727",
            name: "磐安县"
          },
          {
            code: "330781",
            name: "兰溪市"
          },
          {
            code: "330782",
            name: "义乌市"
          },
          {
            code: "330783",
            name: "东阳市"
          },
          {
            code: "330784",
            name: "永康市"
          }
        ]
      },
      {
        code: "3308",
        name: "衢州市",
        children: [
          {
            code: "330802",
            name: "柯城区"
          },
          {
            code: "330803",
            name: "衢江区"
          },
          {
            code: "330822",
            name: "常山县"
          },
          {
            code: "330824",
            name: "开化县"
          },
          {
            code: "330825",
            name: "龙游县"
          },
          {
            code: "330881",
            name: "江山市"
          }
        ]
      },
      {
        code: "3309",
        name: "舟山市",
        children: [
          {
            code: "330902",
            name: "定海区"
          },
          {
            code: "330903",
            name: "普陀区"
          },
          {
            code: "330921",
            name: "岱山县"
          },
          {
            code: "330922",
            name: "嵊泗县"
          }
        ]
      },
      {
        code: "3310",
        name: "台州市",
        children: [
          {
            code: "331002",
            name: "椒江区"
          },
          {
            code: "331003",
            name: "黄岩区"
          },
          {
            code: "331004",
            name: "路桥区"
          },
          {
            code: "331022",
            name: "三门县"
          },
          {
            code: "331023",
            name: "天台县"
          },
          {
            code: "331024",
            name: "仙居县"
          },
          {
            code: "331081",
            name: "温岭市"
          },
          {
            code: "331082",
            name: "临海市"
          },
          {
            code: "331083",
            name: "玉环市"
          }
        ]
      },
      {
        code: "3311",
        name: "丽水市",
        children: [
          {
            code: "331102",
            name: "莲都区"
          },
          {
            code: "331121",
            name: "青田县"
          },
          {
            code: "331122",
            name: "缙云县"
          },
          {
            code: "331123",
            name: "遂昌县"
          },
          {
            code: "331124",
            name: "松阳县"
          },
          {
            code: "331125",
            name: "云和县"
          },
          {
            code: "331126",
            name: "庆元县"
          },
          {
            code: "331127",
            name: "景宁畲族自治县"
          },
          {
            code: "331181",
            name: "龙泉市"
          }
        ]
      }
    ]
  },
  {
    code: "34",
    name: "安徽省",
    children: [
      {
        code: "3401",
        name: "合肥市",
        children: [
          {
            code: "340102",
            name: "瑶海区"
          },
          {
            code: "340103",
            name: "庐阳区"
          },
          {
            code: "340104",
            name: "蜀山区"
          },
          {
            code: "340111",
            name: "包河区"
          },
          {
            code: "340121",
            name: "长丰县"
          },
          {
            code: "340122",
            name: "肥东县"
          },
          {
            code: "340123",
            name: "肥西县"
          },
          {
            code: "340124",
            name: "庐江县"
          },
          {
            code: "340176",
            name: "合肥高新技术产业开发区"
          },
          {
            code: "340177",
            name: "合肥经济技术开发区"
          },
          {
            code: "340178",
            name: "合肥新站高新技术产业开发区"
          },
          {
            code: "340181",
            name: "巢湖市"
          }
        ]
      },
      {
        code: "3402",
        name: "芜湖市",
        children: [
          {
            code: "340202",
            name: "镜湖区"
          },
          {
            code: "340207",
            name: "鸠江区"
          },
          {
            code: "340209",
            name: "弋江区"
          },
          {
            code: "340210",
            name: "湾沚区"
          },
          {
            code: "340212",
            name: "繁昌区"
          },
          {
            code: "340223",
            name: "南陵县"
          },
          {
            code: "340271",
            name: "芜湖经济技术开发区"
          },
          {
            code: "340272",
            name: "安徽芜湖三山经济开发区"
          },
          {
            code: "340281",
            name: "无为市"
          }
        ]
      },
      {
        code: "3403",
        name: "蚌埠市",
        children: [
          {
            code: "340302",
            name: "龙子湖区"
          },
          {
            code: "340303",
            name: "蚌山区"
          },
          {
            code: "340304",
            name: "禹会区"
          },
          {
            code: "340311",
            name: "淮上区"
          },
          {
            code: "340321",
            name: "怀远县"
          },
          {
            code: "340322",
            name: "五河县"
          },
          {
            code: "340323",
            name: "固镇县"
          },
          {
            code: "340371",
            name: "蚌埠市高新技术开发区"
          },
          {
            code: "340372",
            name: "蚌埠市经济开发区"
          }
        ]
      },
      {
        code: "3404",
        name: "淮南市",
        children: [
          {
            code: "340402",
            name: "大通区"
          },
          {
            code: "340403",
            name: "田家庵区"
          },
          {
            code: "340404",
            name: "谢家集区"
          },
          {
            code: "340405",
            name: "八公山区"
          },
          {
            code: "340406",
            name: "潘集区"
          },
          {
            code: "340421",
            name: "凤台县"
          },
          {
            code: "340422",
            name: "寿县"
          }
        ]
      },
      {
        code: "3405",
        name: "马鞍山市",
        children: [
          {
            code: "340503",
            name: "花山区"
          },
          {
            code: "340504",
            name: "雨山区"
          },
          {
            code: "340506",
            name: "博望区"
          },
          {
            code: "340521",
            name: "当涂县"
          },
          {
            code: "340522",
            name: "含山县"
          },
          {
            code: "340523",
            name: "和县"
          }
        ]
      },
      {
        code: "3406",
        name: "淮北市",
        children: [
          {
            code: "340602",
            name: "杜集区"
          },
          {
            code: "340603",
            name: "相山区"
          },
          {
            code: "340604",
            name: "烈山区"
          },
          {
            code: "340621",
            name: "濉溪县"
          }
        ]
      },
      {
        code: "3407",
        name: "铜陵市",
        children: [
          {
            code: "340705",
            name: "铜官区"
          },
          {
            code: "340706",
            name: "义安区"
          },
          {
            code: "340711",
            name: "郊区"
          },
          {
            code: "340722",
            name: "枞阳县"
          }
        ]
      },
      {
        code: "3408",
        name: "安庆市",
        children: [
          {
            code: "340802",
            name: "迎江区"
          },
          {
            code: "340803",
            name: "大观区"
          },
          {
            code: "340811",
            name: "宜秀区"
          },
          {
            code: "340822",
            name: "怀宁县"
          },
          {
            code: "340825",
            name: "太湖县"
          },
          {
            code: "340826",
            name: "宿松县"
          },
          {
            code: "340827",
            name: "望江县"
          },
          {
            code: "340828",
            name: "岳西县"
          },
          {
            code: "340871",
            name: "安徽安庆经济开发区"
          },
          {
            code: "340881",
            name: "桐城市"
          },
          {
            code: "340882",
            name: "潜山市"
          }
        ]
      },
      {
        code: "3410",
        name: "黄山市",
        children: [
          {
            code: "341002",
            name: "屯溪区"
          },
          {
            code: "341003",
            name: "黄山区"
          },
          {
            code: "341004",
            name: "徽州区"
          },
          {
            code: "341021",
            name: "歙县"
          },
          {
            code: "341022",
            name: "休宁县"
          },
          {
            code: "341023",
            name: "黟县"
          },
          {
            code: "341024",
            name: "祁门县"
          }
        ]
      },
      {
        code: "3411",
        name: "滁州市",
        children: [
          {
            code: "341102",
            name: "琅琊区"
          },
          {
            code: "341103",
            name: "南谯区"
          },
          {
            code: "341122",
            name: "来安县"
          },
          {
            code: "341124",
            name: "全椒县"
          },
          {
            code: "341125",
            name: "定远县"
          },
          {
            code: "341126",
            name: "凤阳县"
          },
          {
            code: "341171",
            name: "中新苏滁高新技术产业开发区"
          },
          {
            code: "341172",
            name: "滁州经济技术开发区"
          },
          {
            code: "341181",
            name: "天长市"
          },
          {
            code: "341182",
            name: "明光市"
          }
        ]
      },
      {
        code: "3412",
        name: "阜阳市",
        children: [
          {
            code: "341202",
            name: "颍州区"
          },
          {
            code: "341203",
            name: "颍东区"
          },
          {
            code: "341204",
            name: "颍泉区"
          },
          {
            code: "341221",
            name: "临泉县"
          },
          {
            code: "341222",
            name: "太和县"
          },
          {
            code: "341225",
            name: "阜南县"
          },
          {
            code: "341226",
            name: "颍上县"
          },
          {
            code: "341271",
            name: "阜阳合肥现代产业园区"
          },
          {
            code: "341272",
            name: "阜阳经济技术开发区"
          },
          {
            code: "341282",
            name: "界首市"
          }
        ]
      },
      {
        code: "3413",
        name: "宿州市",
        children: [
          {
            code: "341302",
            name: "埇桥区"
          },
          {
            code: "341321",
            name: "砀山县"
          },
          {
            code: "341322",
            name: "萧县"
          },
          {
            code: "341323",
            name: "灵璧县"
          },
          {
            code: "341324",
            name: "泗县"
          },
          {
            code: "341371",
            name: "宿州马鞍山现代产业园区"
          },
          {
            code: "341372",
            name: "宿州经济技术开发区"
          }
        ]
      },
      {
        code: "3415",
        name: "六安市",
        children: [
          {
            code: "341502",
            name: "金安区"
          },
          {
            code: "341503",
            name: "裕安区"
          },
          {
            code: "341504",
            name: "叶集区"
          },
          {
            code: "341522",
            name: "霍邱县"
          },
          {
            code: "341523",
            name: "舒城县"
          },
          {
            code: "341524",
            name: "金寨县"
          },
          {
            code: "341525",
            name: "霍山县"
          }
        ]
      },
      {
        code: "3416",
        name: "亳州市",
        children: [
          {
            code: "341602",
            name: "谯城区"
          },
          {
            code: "341621",
            name: "涡阳县"
          },
          {
            code: "341622",
            name: "蒙城县"
          },
          {
            code: "341623",
            name: "利辛县"
          }
        ]
      },
      {
        code: "3417",
        name: "池州市",
        children: [
          {
            code: "341702",
            name: "贵池区"
          },
          {
            code: "341721",
            name: "东至县"
          },
          {
            code: "341722",
            name: "石台县"
          },
          {
            code: "341723",
            name: "青阳县"
          }
        ]
      },
      {
        code: "3418",
        name: "宣城市",
        children: [
          {
            code: "341802",
            name: "宣州区"
          },
          {
            code: "341821",
            name: "郎溪县"
          },
          {
            code: "341823",
            name: "泾县"
          },
          {
            code: "341824",
            name: "绩溪县"
          },
          {
            code: "341825",
            name: "旌德县"
          },
          {
            code: "341871",
            name: "宣城市经济开发区"
          },
          {
            code: "341881",
            name: "宁国市"
          },
          {
            code: "341882",
            name: "广德市"
          }
        ]
      }
    ]
  },
  {
    code: "35",
    name: "福建省",
    children: [
      {
        code: "3501",
        name: "福州市",
        children: [
          {
            code: "350102",
            name: "鼓楼区"
          },
          {
            code: "350103",
            name: "台江区"
          },
          {
            code: "350104",
            name: "仓山区"
          },
          {
            code: "350105",
            name: "马尾区"
          },
          {
            code: "350111",
            name: "晋安区"
          },
          {
            code: "350112",
            name: "长乐区"
          },
          {
            code: "350121",
            name: "闽侯县"
          },
          {
            code: "350122",
            name: "连江县"
          },
          {
            code: "350123",
            name: "罗源县"
          },
          {
            code: "350124",
            name: "闽清县"
          },
          {
            code: "350125",
            name: "永泰县"
          },
          {
            code: "350128",
            name: "平潭县"
          },
          {
            code: "350181",
            name: "福清市"
          }
        ]
      },
      {
        code: "3502",
        name: "厦门市",
        children: [
          {
            code: "350203",
            name: "思明区"
          },
          {
            code: "350205",
            name: "海沧区"
          },
          {
            code: "350206",
            name: "湖里区"
          },
          {
            code: "350211",
            name: "集美区"
          },
          {
            code: "350212",
            name: "同安区"
          },
          {
            code: "350213",
            name: "翔安区"
          }
        ]
      },
      {
        code: "3503",
        name: "莆田市",
        children: [
          {
            code: "350302",
            name: "城厢区"
          },
          {
            code: "350303",
            name: "涵江区"
          },
          {
            code: "350304",
            name: "荔城区"
          },
          {
            code: "350305",
            name: "秀屿区"
          },
          {
            code: "350322",
            name: "仙游县"
          }
        ]
      },
      {
        code: "3504",
        name: "三明市",
        children: [
          {
            code: "350404",
            name: "三元区"
          },
          {
            code: "350405",
            name: "沙县区"
          },
          {
            code: "350421",
            name: "明溪县"
          },
          {
            code: "350423",
            name: "清流县"
          },
          {
            code: "350424",
            name: "宁化县"
          },
          {
            code: "350425",
            name: "大田县"
          },
          {
            code: "350426",
            name: "尤溪县"
          },
          {
            code: "350428",
            name: "将乐县"
          },
          {
            code: "350429",
            name: "泰宁县"
          },
          {
            code: "350430",
            name: "建宁县"
          },
          {
            code: "350481",
            name: "永安市"
          }
        ]
      },
      {
        code: "3505",
        name: "泉州市",
        children: [
          {
            code: "350502",
            name: "鲤城区"
          },
          {
            code: "350503",
            name: "丰泽区"
          },
          {
            code: "350504",
            name: "洛江区"
          },
          {
            code: "350505",
            name: "泉港区"
          },
          {
            code: "350521",
            name: "惠安县"
          },
          {
            code: "350524",
            name: "安溪县"
          },
          {
            code: "350525",
            name: "永春县"
          },
          {
            code: "350526",
            name: "德化县"
          },
          {
            code: "350527",
            name: "金门县"
          },
          {
            code: "350581",
            name: "石狮市"
          },
          {
            code: "350582",
            name: "晋江市"
          },
          {
            code: "350583",
            name: "南安市"
          }
        ]
      },
      {
        code: "3506",
        name: "漳州市",
        children: [
          {
            code: "350602",
            name: "芗城区"
          },
          {
            code: "350603",
            name: "龙文区"
          },
          {
            code: "350604",
            name: "龙海区"
          },
          {
            code: "350605",
            name: "长泰区"
          },
          {
            code: "350622",
            name: "云霄县"
          },
          {
            code: "350623",
            name: "漳浦县"
          },
          {
            code: "350624",
            name: "诏安县"
          },
          {
            code: "350626",
            name: "东山县"
          },
          {
            code: "350627",
            name: "南靖县"
          },
          {
            code: "350628",
            name: "平和县"
          },
          {
            code: "350629",
            name: "华安县"
          }
        ]
      },
      {
        code: "3507",
        name: "南平市",
        children: [
          {
            code: "350702",
            name: "延平区"
          },
          {
            code: "350703",
            name: "建阳区"
          },
          {
            code: "350721",
            name: "顺昌县"
          },
          {
            code: "350722",
            name: "浦城县"
          },
          {
            code: "350723",
            name: "光泽县"
          },
          {
            code: "350724",
            name: "松溪县"
          },
          {
            code: "350725",
            name: "政和县"
          },
          {
            code: "350781",
            name: "邵武市"
          },
          {
            code: "350782",
            name: "武夷山市"
          },
          {
            code: "350783",
            name: "建瓯市"
          }
        ]
      },
      {
        code: "3508",
        name: "龙岩市",
        children: [
          {
            code: "350802",
            name: "新罗区"
          },
          {
            code: "350803",
            name: "永定区"
          },
          {
            code: "350821",
            name: "长汀县"
          },
          {
            code: "350823",
            name: "上杭县"
          },
          {
            code: "350824",
            name: "武平县"
          },
          {
            code: "350825",
            name: "连城县"
          },
          {
            code: "350881",
            name: "漳平市"
          }
        ]
      },
      {
        code: "3509",
        name: "宁德市",
        children: [
          {
            code: "350902",
            name: "蕉城区"
          },
          {
            code: "350921",
            name: "霞浦县"
          },
          {
            code: "350922",
            name: "古田县"
          },
          {
            code: "350923",
            name: "屏南县"
          },
          {
            code: "350924",
            name: "寿宁县"
          },
          {
            code: "350925",
            name: "周宁县"
          },
          {
            code: "350926",
            name: "柘荣县"
          },
          {
            code: "350981",
            name: "福安市"
          },
          {
            code: "350982",
            name: "福鼎市"
          }
        ]
      }
    ]
  },
  {
    code: "36",
    name: "江西省",
    children: [
      {
        code: "3601",
        name: "南昌市",
        children: [
          {
            code: "360102",
            name: "东湖区"
          },
          {
            code: "360103",
            name: "西湖区"
          },
          {
            code: "360104",
            name: "青云谱区"
          },
          {
            code: "360111",
            name: "青山湖区"
          },
          {
            code: "360112",
            name: "新建区"
          },
          {
            code: "360113",
            name: "红谷滩区"
          },
          {
            code: "360121",
            name: "南昌县"
          },
          {
            code: "360123",
            name: "安义县"
          },
          {
            code: "360124",
            name: "进贤县"
          }
        ]
      },
      {
        code: "3602",
        name: "景德镇市",
        children: [
          {
            code: "360202",
            name: "昌江区"
          },
          {
            code: "360203",
            name: "珠山区"
          },
          {
            code: "360222",
            name: "浮梁县"
          },
          {
            code: "360281",
            name: "乐平市"
          }
        ]
      },
      {
        code: "3603",
        name: "萍乡市",
        children: [
          {
            code: "360302",
            name: "安源区"
          },
          {
            code: "360313",
            name: "湘东区"
          },
          {
            code: "360321",
            name: "莲花县"
          },
          {
            code: "360322",
            name: "上栗县"
          },
          {
            code: "360323",
            name: "芦溪县"
          }
        ]
      },
      {
        code: "3604",
        name: "九江市",
        children: [
          {
            code: "360402",
            name: "濂溪区"
          },
          {
            code: "360403",
            name: "浔阳区"
          },
          {
            code: "360404",
            name: "柴桑区"
          },
          {
            code: "360423",
            name: "武宁县"
          },
          {
            code: "360424",
            name: "修水县"
          },
          {
            code: "360425",
            name: "永修县"
          },
          {
            code: "360426",
            name: "德安县"
          },
          {
            code: "360428",
            name: "都昌县"
          },
          {
            code: "360429",
            name: "湖口县"
          },
          {
            code: "360430",
            name: "彭泽县"
          },
          {
            code: "360481",
            name: "瑞昌市"
          },
          {
            code: "360482",
            name: "共青城市"
          },
          {
            code: "360483",
            name: "庐山市"
          }
        ]
      },
      {
        code: "3605",
        name: "新余市",
        children: [
          {
            code: "360502",
            name: "渝水区"
          },
          {
            code: "360521",
            name: "分宜县"
          }
        ]
      },
      {
        code: "3606",
        name: "鹰潭市",
        children: [
          {
            code: "360602",
            name: "月湖区"
          },
          {
            code: "360603",
            name: "余江区"
          },
          {
            code: "360681",
            name: "贵溪市"
          }
        ]
      },
      {
        code: "3607",
        name: "赣州市",
        children: [
          {
            code: "360702",
            name: "章贡区"
          },
          {
            code: "360703",
            name: "南康区"
          },
          {
            code: "360704",
            name: "赣县区"
          },
          {
            code: "360722",
            name: "信丰县"
          },
          {
            code: "360723",
            name: "大余县"
          },
          {
            code: "360724",
            name: "上犹县"
          },
          {
            code: "360725",
            name: "崇义县"
          },
          {
            code: "360726",
            name: "安远县"
          },
          {
            code: "360728",
            name: "定南县"
          },
          {
            code: "360729",
            name: "全南县"
          },
          {
            code: "360730",
            name: "宁都县"
          },
          {
            code: "360731",
            name: "于都县"
          },
          {
            code: "360732",
            name: "兴国县"
          },
          {
            code: "360733",
            name: "会昌县"
          },
          {
            code: "360734",
            name: "寻乌县"
          },
          {
            code: "360735",
            name: "石城县"
          },
          {
            code: "360781",
            name: "瑞金市"
          },
          {
            code: "360783",
            name: "龙南市"
          }
        ]
      },
      {
        code: "3608",
        name: "吉安市",
        children: [
          {
            code: "360802",
            name: "吉州区"
          },
          {
            code: "360803",
            name: "青原区"
          },
          {
            code: "360821",
            name: "吉安县"
          },
          {
            code: "360822",
            name: "吉水县"
          },
          {
            code: "360823",
            name: "峡江县"
          },
          {
            code: "360824",
            name: "新干县"
          },
          {
            code: "360825",
            name: "永丰县"
          },
          {
            code: "360826",
            name: "泰和县"
          },
          {
            code: "360827",
            name: "遂川县"
          },
          {
            code: "360828",
            name: "万安县"
          },
          {
            code: "360829",
            name: "安福县"
          },
          {
            code: "360830",
            name: "永新县"
          },
          {
            code: "360881",
            name: "井冈山市"
          }
        ]
      },
      {
        code: "3609",
        name: "宜春市",
        children: [
          {
            code: "360902",
            name: "袁州区"
          },
          {
            code: "360921",
            name: "奉新县"
          },
          {
            code: "360922",
            name: "万载县"
          },
          {
            code: "360923",
            name: "上高县"
          },
          {
            code: "360924",
            name: "宜丰县"
          },
          {
            code: "360925",
            name: "靖安县"
          },
          {
            code: "360926",
            name: "铜鼓县"
          },
          {
            code: "360981",
            name: "丰城市"
          },
          {
            code: "360982",
            name: "樟树市"
          },
          {
            code: "360983",
            name: "高安市"
          }
        ]
      },
      {
        code: "3610",
        name: "抚州市",
        children: [
          {
            code: "361002",
            name: "临川区"
          },
          {
            code: "361003",
            name: "东乡区"
          },
          {
            code: "361021",
            name: "南城县"
          },
          {
            code: "361022",
            name: "黎川县"
          },
          {
            code: "361023",
            name: "南丰县"
          },
          {
            code: "361024",
            name: "崇仁县"
          },
          {
            code: "361025",
            name: "乐安县"
          },
          {
            code: "361026",
            name: "宜黄县"
          },
          {
            code: "361027",
            name: "金溪县"
          },
          {
            code: "361028",
            name: "资溪县"
          },
          {
            code: "361030",
            name: "广昌县"
          }
        ]
      },
      {
        code: "3611",
        name: "上饶市",
        children: [
          {
            code: "361102",
            name: "信州区"
          },
          {
            code: "361103",
            name: "广丰区"
          },
          {
            code: "361104",
            name: "广信区"
          },
          {
            code: "361123",
            name: "玉山县"
          },
          {
            code: "361124",
            name: "铅山县"
          },
          {
            code: "361125",
            name: "横峰县"
          },
          {
            code: "361126",
            name: "弋阳县"
          },
          {
            code: "361127",
            name: "余干县"
          },
          {
            code: "361128",
            name: "鄱阳县"
          },
          {
            code: "361129",
            name: "万年县"
          },
          {
            code: "361130",
            name: "婺源县"
          },
          {
            code: "361181",
            name: "德兴市"
          }
        ]
      }
    ]
  },
  {
    code: "37",
    name: "山东省",
    children: [
      {
        code: "3701",
        name: "济南市",
        children: [
          {
            code: "370102",
            name: "历下区"
          },
          {
            code: "370103",
            name: "市中区"
          },
          {
            code: "370104",
            name: "槐荫区"
          },
          {
            code: "370105",
            name: "天桥区"
          },
          {
            code: "370112",
            name: "历城区"
          },
          {
            code: "370113",
            name: "长清区"
          },
          {
            code: "370114",
            name: "章丘区"
          },
          {
            code: "370115",
            name: "济阳区"
          },
          {
            code: "370116",
            name: "莱芜区"
          },
          {
            code: "370117",
            name: "钢城区"
          },
          {
            code: "370124",
            name: "平阴县"
          },
          {
            code: "370126",
            name: "商河县"
          },
          {
            code: "370176",
            name: "济南高新技术产业开发区"
          }
        ]
      },
      {
        code: "3702",
        name: "青岛市",
        children: [
          {
            code: "370202",
            name: "市南区"
          },
          {
            code: "370203",
            name: "市北区"
          },
          {
            code: "370211",
            name: "黄岛区"
          },
          {
            code: "370212",
            name: "崂山区"
          },
          {
            code: "370213",
            name: "李沧区"
          },
          {
            code: "370214",
            name: "城阳区"
          },
          {
            code: "370215",
            name: "即墨区"
          },
          {
            code: "370281",
            name: "胶州市"
          },
          {
            code: "370283",
            name: "平度市"
          },
          {
            code: "370285",
            name: "莱西市"
          }
        ]
      },
      {
        code: "3703",
        name: "淄博市",
        children: [
          {
            code: "370302",
            name: "淄川区"
          },
          {
            code: "370303",
            name: "张店区"
          },
          {
            code: "370304",
            name: "博山区"
          },
          {
            code: "370305",
            name: "临淄区"
          },
          {
            code: "370306",
            name: "周村区"
          },
          {
            code: "370321",
            name: "桓台县"
          },
          {
            code: "370322",
            name: "高青县"
          },
          {
            code: "370323",
            name: "沂源县"
          }
        ]
      },
      {
        code: "3704",
        name: "枣庄市",
        children: [
          {
            code: "370402",
            name: "市中区"
          },
          {
            code: "370403",
            name: "薛城区"
          },
          {
            code: "370404",
            name: "峄城区"
          },
          {
            code: "370405",
            name: "台儿庄区"
          },
          {
            code: "370406",
            name: "山亭区"
          },
          {
            code: "370481",
            name: "滕州市"
          }
        ]
      },
      {
        code: "3705",
        name: "东营市",
        children: [
          {
            code: "370502",
            name: "东营区"
          },
          {
            code: "370503",
            name: "河口区"
          },
          {
            code: "370505",
            name: "垦利区"
          },
          {
            code: "370522",
            name: "利津县"
          },
          {
            code: "370523",
            name: "广饶县"
          },
          {
            code: "370571",
            name: "东营经济技术开发区"
          },
          {
            code: "370572",
            name: "东营港经济开发区"
          }
        ]
      },
      {
        code: "3706",
        name: "烟台市",
        children: [
          {
            code: "370602",
            name: "芝罘区"
          },
          {
            code: "370611",
            name: "福山区"
          },
          {
            code: "370612",
            name: "牟平区"
          },
          {
            code: "370613",
            name: "莱山区"
          },
          {
            code: "370614",
            name: "蓬莱区"
          },
          {
            code: "370671",
            name: "烟台高新技术产业开发区"
          },
          {
            code: "370676",
            name: "烟台经济技术开发区"
          },
          {
            code: "370681",
            name: "龙口市"
          },
          {
            code: "370682",
            name: "莱阳市"
          },
          {
            code: "370683",
            name: "莱州市"
          },
          {
            code: "370685",
            name: "招远市"
          },
          {
            code: "370686",
            name: "栖霞市"
          },
          {
            code: "370687",
            name: "海阳市"
          }
        ]
      },
      {
        code: "3707",
        name: "潍坊市",
        children: [
          {
            code: "370702",
            name: "潍城区"
          },
          {
            code: "370703",
            name: "寒亭区"
          },
          {
            code: "370704",
            name: "坊子区"
          },
          {
            code: "370705",
            name: "奎文区"
          },
          {
            code: "370724",
            name: "临朐县"
          },
          {
            code: "370725",
            name: "昌乐县"
          },
          {
            code: "370772",
            name: "潍坊滨海经济技术开发区"
          },
          {
            code: "370781",
            name: "青州市"
          },
          {
            code: "370782",
            name: "诸城市"
          },
          {
            code: "370783",
            name: "寿光市"
          },
          {
            code: "370784",
            name: "安丘市"
          },
          {
            code: "370785",
            name: "高密市"
          },
          {
            code: "370786",
            name: "昌邑市"
          }
        ]
      },
      {
        code: "3708",
        name: "济宁市",
        children: [
          {
            code: "370811",
            name: "任城区"
          },
          {
            code: "370812",
            name: "兖州区"
          },
          {
            code: "370826",
            name: "微山县"
          },
          {
            code: "370827",
            name: "鱼台县"
          },
          {
            code: "370828",
            name: "金乡县"
          },
          {
            code: "370829",
            name: "嘉祥县"
          },
          {
            code: "370830",
            name: "汶上县"
          },
          {
            code: "370831",
            name: "泗水县"
          },
          {
            code: "370832",
            name: "梁山县"
          },
          {
            code: "370871",
            name: "济宁高新技术产业开发区"
          },
          {
            code: "370881",
            name: "曲阜市"
          },
          {
            code: "370883",
            name: "邹城市"
          }
        ]
      },
      {
        code: "3709",
        name: "泰安市",
        children: [
          {
            code: "370902",
            name: "泰山区"
          },
          {
            code: "370911",
            name: "岱岳区"
          },
          {
            code: "370921",
            name: "宁阳县"
          },
          {
            code: "370923",
            name: "东平县"
          },
          {
            code: "370982",
            name: "新泰市"
          },
          {
            code: "370983",
            name: "肥城市"
          }
        ]
      },
      {
        code: "3710",
        name: "威海市",
        children: [
          {
            code: "371002",
            name: "环翠区"
          },
          {
            code: "371003",
            name: "文登区"
          },
          {
            code: "371071",
            name: "威海火炬高技术产业开发区"
          },
          {
            code: "371072",
            name: "威海经济技术开发区"
          },
          {
            code: "371073",
            name: "威海临港经济技术开发区"
          },
          {
            code: "371082",
            name: "荣成市"
          },
          {
            code: "371083",
            name: "乳山市"
          }
        ]
      },
      {
        code: "3711",
        name: "日照市",
        children: [
          {
            code: "371102",
            name: "东港区"
          },
          {
            code: "371103",
            name: "岚山区"
          },
          {
            code: "371121",
            name: "五莲县"
          },
          {
            code: "371122",
            name: "莒县"
          },
          {
            code: "371171",
            name: "日照经济技术开发区"
          }
        ]
      },
      {
        code: "3713",
        name: "临沂市",
        children: [
          {
            code: "371302",
            name: "兰山区"
          },
          {
            code: "371311",
            name: "罗庄区"
          },
          {
            code: "371312",
            name: "河东区"
          },
          {
            code: "371321",
            name: "沂南县"
          },
          {
            code: "371322",
            name: "郯城县"
          },
          {
            code: "371323",
            name: "沂水县"
          },
          {
            code: "371324",
            name: "兰陵县"
          },
          {
            code: "371325",
            name: "费县"
          },
          {
            code: "371326",
            name: "平邑县"
          },
          {
            code: "371327",
            name: "莒南县"
          },
          {
            code: "371328",
            name: "蒙阴县"
          },
          {
            code: "371329",
            name: "临沭县"
          },
          {
            code: "371371",
            name: "临沂高新技术产业开发区"
          }
        ]
      },
      {
        code: "3714",
        name: "德州市",
        children: [
          {
            code: "371402",
            name: "德城区"
          },
          {
            code: "371403",
            name: "陵城区"
          },
          {
            code: "371422",
            name: "宁津县"
          },
          {
            code: "371423",
            name: "庆云县"
          },
          {
            code: "371424",
            name: "临邑县"
          },
          {
            code: "371425",
            name: "齐河县"
          },
          {
            code: "371426",
            name: "平原县"
          },
          {
            code: "371427",
            name: "夏津县"
          },
          {
            code: "371428",
            name: "武城县"
          },
          {
            code: "371471",
            name: "德州天衢新区"
          },
          {
            code: "371481",
            name: "乐陵市"
          },
          {
            code: "371482",
            name: "禹城市"
          }
        ]
      },
      {
        code: "3715",
        name: "聊城市",
        children: [
          {
            code: "371502",
            name: "东昌府区"
          },
          {
            code: "371503",
            name: "茌平区"
          },
          {
            code: "371521",
            name: "阳谷县"
          },
          {
            code: "371522",
            name: "莘县"
          },
          {
            code: "371524",
            name: "东阿县"
          },
          {
            code: "371525",
            name: "冠县"
          },
          {
            code: "371526",
            name: "高唐县"
          },
          {
            code: "371581",
            name: "临清市"
          }
        ]
      },
      {
        code: "3716",
        name: "滨州市",
        children: [
          {
            code: "371602",
            name: "滨城区"
          },
          {
            code: "371603",
            name: "沾化区"
          },
          {
            code: "371621",
            name: "惠民县"
          },
          {
            code: "371622",
            name: "阳信县"
          },
          {
            code: "371623",
            name: "无棣县"
          },
          {
            code: "371625",
            name: "博兴县"
          },
          {
            code: "371681",
            name: "邹平市"
          }
        ]
      },
      {
        code: "3717",
        name: "菏泽市",
        children: [
          {
            code: "371702",
            name: "牡丹区"
          },
          {
            code: "371703",
            name: "定陶区"
          },
          {
            code: "371721",
            name: "曹县"
          },
          {
            code: "371722",
            name: "单县"
          },
          {
            code: "371723",
            name: "成武县"
          },
          {
            code: "371724",
            name: "巨野县"
          },
          {
            code: "371725",
            name: "郓城县"
          },
          {
            code: "371726",
            name: "鄄城县"
          },
          {
            code: "371728",
            name: "东明县"
          },
          {
            code: "371771",
            name: "菏泽经济技术开发区"
          },
          {
            code: "371772",
            name: "菏泽高新技术开发区"
          }
        ]
      }
    ]
  },
  {
    code: "41",
    name: "河南省",
    children: [
      {
        code: "4101",
        name: "郑州市",
        children: [
          {
            code: "410102",
            name: "中原区"
          },
          {
            code: "410103",
            name: "二七区"
          },
          {
            code: "410104",
            name: "管城回族区"
          },
          {
            code: "410105",
            name: "金水区"
          },
          {
            code: "410106",
            name: "上街区"
          },
          {
            code: "410108",
            name: "惠济区"
          },
          {
            code: "410122",
            name: "中牟县"
          },
          {
            code: "410171",
            name: "郑州经济技术开发区"
          },
          {
            code: "410172",
            name: "郑州高新技术产业开发区"
          },
          {
            code: "410173",
            name: "郑州航空港经济综合实验区"
          },
          {
            code: "410181",
            name: "巩义市"
          },
          {
            code: "410182",
            name: "荥阳市"
          },
          {
            code: "410183",
            name: "新密市"
          },
          {
            code: "410184",
            name: "新郑市"
          },
          {
            code: "410185",
            name: "登封市"
          }
        ]
      },
      {
        code: "4102",
        name: "开封市",
        children: [
          {
            code: "410202",
            name: "龙亭区"
          },
          {
            code: "410203",
            name: "顺河回族区"
          },
          {
            code: "410204",
            name: "鼓楼区"
          },
          {
            code: "410205",
            name: "禹王台区"
          },
          {
            code: "410212",
            name: "祥符区"
          },
          {
            code: "410221",
            name: "杞县"
          },
          {
            code: "410222",
            name: "通许县"
          },
          {
            code: "410223",
            name: "尉氏县"
          },
          {
            code: "410225",
            name: "兰考县"
          }
        ]
      },
      {
        code: "4103",
        name: "洛阳市",
        children: [
          {
            code: "410302",
            name: "老城区"
          },
          {
            code: "410303",
            name: "西工区"
          },
          {
            code: "410304",
            name: "瀍河回族区"
          },
          {
            code: "410305",
            name: "涧西区"
          },
          {
            code: "410307",
            name: "偃师区"
          },
          {
            code: "410308",
            name: "孟津区"
          },
          {
            code: "410311",
            name: "洛龙区"
          },
          {
            code: "410323",
            name: "新安县"
          },
          {
            code: "410324",
            name: "栾川县"
          },
          {
            code: "410325",
            name: "嵩县"
          },
          {
            code: "410326",
            name: "汝阳县"
          },
          {
            code: "410327",
            name: "宜阳县"
          },
          {
            code: "410328",
            name: "洛宁县"
          },
          {
            code: "410329",
            name: "伊川县"
          },
          {
            code: "410371",
            name: "洛阳高新技术产业开发区"
          }
        ]
      },
      {
        code: "4104",
        name: "平顶山市",
        children: [
          {
            code: "410402",
            name: "新华区"
          },
          {
            code: "410403",
            name: "卫东区"
          },
          {
            code: "410404",
            name: "石龙区"
          },
          {
            code: "410411",
            name: "湛河区"
          },
          {
            code: "410421",
            name: "宝丰县"
          },
          {
            code: "410422",
            name: "叶县"
          },
          {
            code: "410423",
            name: "鲁山县"
          },
          {
            code: "410425",
            name: "郏县"
          },
          {
            code: "410471",
            name: "平顶山高新技术产业开发区"
          },
          {
            code: "410472",
            name: "平顶山市城乡一体化示范区"
          },
          {
            code: "410481",
            name: "舞钢市"
          },
          {
            code: "410482",
            name: "汝州市"
          }
        ]
      },
      {
        code: "4105",
        name: "安阳市",
        children: [
          {
            code: "410502",
            name: "文峰区"
          },
          {
            code: "410503",
            name: "北关区"
          },
          {
            code: "410505",
            name: "殷都区"
          },
          {
            code: "410506",
            name: "龙安区"
          },
          {
            code: "410522",
            name: "安阳县"
          },
          {
            code: "410523",
            name: "汤阴县"
          },
          {
            code: "410526",
            name: "滑县"
          },
          {
            code: "410527",
            name: "内黄县"
          },
          {
            code: "410571",
            name: "安阳高新技术产业开发区"
          },
          {
            code: "410581",
            name: "林州市"
          }
        ]
      },
      {
        code: "4106",
        name: "鹤壁市",
        children: [
          {
            code: "410602",
            name: "鹤山区"
          },
          {
            code: "410603",
            name: "山城区"
          },
          {
            code: "410611",
            name: "淇滨区"
          },
          {
            code: "410621",
            name: "浚县"
          },
          {
            code: "410622",
            name: "淇县"
          },
          {
            code: "410671",
            name: "鹤壁经济技术开发区"
          }
        ]
      },
      {
        code: "4107",
        name: "新乡市",
        children: [
          {
            code: "410702",
            name: "红旗区"
          },
          {
            code: "410703",
            name: "卫滨区"
          },
          {
            code: "410704",
            name: "凤泉区"
          },
          {
            code: "410711",
            name: "牧野区"
          },
          {
            code: "410721",
            name: "新乡县"
          },
          {
            code: "410724",
            name: "获嘉县"
          },
          {
            code: "410725",
            name: "原阳县"
          },
          {
            code: "410726",
            name: "延津县"
          },
          {
            code: "410727",
            name: "封丘县"
          },
          {
            code: "410771",
            name: "新乡高新技术产业开发区"
          },
          {
            code: "410772",
            name: "新乡经济技术开发区"
          },
          {
            code: "410773",
            name: "新乡市平原城乡一体化示范区"
          },
          {
            code: "410781",
            name: "卫辉市"
          },
          {
            code: "410782",
            name: "辉县市"
          },
          {
            code: "410783",
            name: "长垣市"
          }
        ]
      },
      {
        code: "4108",
        name: "焦作市",
        children: [
          {
            code: "410802",
            name: "解放区"
          },
          {
            code: "410803",
            name: "中站区"
          },
          {
            code: "410804",
            name: "马村区"
          },
          {
            code: "410811",
            name: "山阳区"
          },
          {
            code: "410821",
            name: "修武县"
          },
          {
            code: "410822",
            name: "博爱县"
          },
          {
            code: "410823",
            name: "武陟县"
          },
          {
            code: "410825",
            name: "温县"
          },
          {
            code: "410871",
            name: "焦作城乡一体化示范区"
          },
          {
            code: "410882",
            name: "沁阳市"
          },
          {
            code: "410883",
            name: "孟州市"
          }
        ]
      },
      {
        code: "4109",
        name: "濮阳市",
        children: [
          {
            code: "410902",
            name: "华龙区"
          },
          {
            code: "410922",
            name: "清丰县"
          },
          {
            code: "410923",
            name: "南乐县"
          },
          {
            code: "410926",
            name: "范县"
          },
          {
            code: "410927",
            name: "台前县"
          },
          {
            code: "410928",
            name: "濮阳县"
          },
          {
            code: "410971",
            name: "河南濮阳工业园区"
          },
          {
            code: "410972",
            name: "濮阳经济技术开发区"
          }
        ]
      },
      {
        code: "4110",
        name: "许昌市",
        children: [
          {
            code: "411002",
            name: "魏都区"
          },
          {
            code: "411003",
            name: "建安区"
          },
          {
            code: "411024",
            name: "鄢陵县"
          },
          {
            code: "411025",
            name: "襄城县"
          },
          {
            code: "411071",
            name: "许昌经济技术开发区"
          },
          {
            code: "411081",
            name: "禹州市"
          },
          {
            code: "411082",
            name: "长葛市"
          }
        ]
      },
      {
        code: "4111",
        name: "漯河市",
        children: [
          {
            code: "411102",
            name: "源汇区"
          },
          {
            code: "411103",
            name: "郾城区"
          },
          {
            code: "411104",
            name: "召陵区"
          },
          {
            code: "411121",
            name: "舞阳县"
          },
          {
            code: "411122",
            name: "临颍县"
          },
          {
            code: "411171",
            name: "漯河经济技术开发区"
          }
        ]
      },
      {
        code: "4112",
        name: "三门峡市",
        children: [
          {
            code: "411202",
            name: "湖滨区"
          },
          {
            code: "411203",
            name: "陕州区"
          },
          {
            code: "411221",
            name: "渑池县"
          },
          {
            code: "411224",
            name: "卢氏县"
          },
          {
            code: "411271",
            name: "河南三门峡经济开发区"
          },
          {
            code: "411281",
            name: "义马市"
          },
          {
            code: "411282",
            name: "灵宝市"
          }
        ]
      },
      {
        code: "4113",
        name: "南阳市",
        children: [
          {
            code: "411302",
            name: "宛城区"
          },
          {
            code: "411303",
            name: "卧龙区"
          },
          {
            code: "411321",
            name: "南召县"
          },
          {
            code: "411322",
            name: "方城县"
          },
          {
            code: "411323",
            name: "西峡县"
          },
          {
            code: "411324",
            name: "镇平县"
          },
          {
            code: "411325",
            name: "内乡县"
          },
          {
            code: "411326",
            name: "淅川县"
          },
          {
            code: "411327",
            name: "社旗县"
          },
          {
            code: "411328",
            name: "唐河县"
          },
          {
            code: "411329",
            name: "新野县"
          },
          {
            code: "411330",
            name: "桐柏县"
          },
          {
            code: "411371",
            name: "南阳高新技术产业开发区"
          },
          {
            code: "411372",
            name: "南阳市城乡一体化示范区"
          },
          {
            code: "411381",
            name: "邓州市"
          }
        ]
      },
      {
        code: "4114",
        name: "商丘市",
        children: [
          {
            code: "411402",
            name: "梁园区"
          },
          {
            code: "411403",
            name: "睢阳区"
          },
          {
            code: "411421",
            name: "民权县"
          },
          {
            code: "411422",
            name: "睢县"
          },
          {
            code: "411423",
            name: "宁陵县"
          },
          {
            code: "411424",
            name: "柘城县"
          },
          {
            code: "411425",
            name: "虞城县"
          },
          {
            code: "411426",
            name: "夏邑县"
          },
          {
            code: "411471",
            name: "豫东综合物流产业聚集区"
          },
          {
            code: "411472",
            name: "河南商丘经济开发区"
          },
          {
            code: "411481",
            name: "永城市"
          }
        ]
      },
      {
        code: "4115",
        name: "信阳市",
        children: [
          {
            code: "411502",
            name: "浉河区"
          },
          {
            code: "411503",
            name: "平桥区"
          },
          {
            code: "411521",
            name: "罗山县"
          },
          {
            code: "411522",
            name: "光山县"
          },
          {
            code: "411523",
            name: "新县"
          },
          {
            code: "411524",
            name: "商城县"
          },
          {
            code: "411525",
            name: "固始县"
          },
          {
            code: "411526",
            name: "潢川县"
          },
          {
            code: "411527",
            name: "淮滨县"
          },
          {
            code: "411528",
            name: "息县"
          },
          {
            code: "411571",
            name: "信阳高新技术产业开发区"
          }
        ]
      },
      {
        code: "4116",
        name: "周口市",
        children: [
          {
            code: "411602",
            name: "川汇区"
          },
          {
            code: "411603",
            name: "淮阳区"
          },
          {
            code: "411621",
            name: "扶沟县"
          },
          {
            code: "411622",
            name: "西华县"
          },
          {
            code: "411623",
            name: "商水县"
          },
          {
            code: "411624",
            name: "沈丘县"
          },
          {
            code: "411625",
            name: "郸城县"
          },
          {
            code: "411627",
            name: "太康县"
          },
          {
            code: "411628",
            name: "鹿邑县"
          },
          {
            code: "411671",
            name: "周口临港开发区"
          },
          {
            code: "411681",
            name: "项城市"
          }
        ]
      },
      {
        code: "4117",
        name: "驻马店市",
        children: [
          {
            code: "411702",
            name: "驿城区"
          },
          {
            code: "411721",
            name: "西平县"
          },
          {
            code: "411722",
            name: "上蔡县"
          },
          {
            code: "411723",
            name: "平舆县"
          },
          {
            code: "411724",
            name: "正阳县"
          },
          {
            code: "411725",
            name: "确山县"
          },
          {
            code: "411726",
            name: "泌阳县"
          },
          {
            code: "411727",
            name: "汝南县"
          },
          {
            code: "411728",
            name: "遂平县"
          },
          {
            code: "411729",
            name: "新蔡县"
          },
          {
            code: "411771",
            name: "河南驻马店经济开发区"
          }
        ]
      },
      {
        code: "4190",
        name: "省直辖县级行政区划",
        children: [
          {
            code: "419001",
            name: "济源市"
          }
        ]
      }
    ]
  },
  {
    code: "42",
    name: "湖北省",
    children: [
      {
        code: "4201",
        name: "武汉市",
        children: [
          {
            code: "420102",
            name: "江岸区"
          },
          {
            code: "420103",
            name: "江汉区"
          },
          {
            code: "420104",
            name: "硚口区"
          },
          {
            code: "420105",
            name: "汉阳区"
          },
          {
            code: "420106",
            name: "武昌区"
          },
          {
            code: "420107",
            name: "青山区"
          },
          {
            code: "420111",
            name: "洪山区"
          },
          {
            code: "420112",
            name: "东西湖区"
          },
          {
            code: "420113",
            name: "汉南区"
          },
          {
            code: "420114",
            name: "蔡甸区"
          },
          {
            code: "420115",
            name: "江夏区"
          },
          {
            code: "420116",
            name: "黄陂区"
          },
          {
            code: "420117",
            name: "新洲区"
          }
        ]
      },
      {
        code: "4202",
        name: "黄石市",
        children: [
          {
            code: "420202",
            name: "黄石港区"
          },
          {
            code: "420203",
            name: "西塞山区"
          },
          {
            code: "420204",
            name: "下陆区"
          },
          {
            code: "420205",
            name: "铁山区"
          },
          {
            code: "420222",
            name: "阳新县"
          },
          {
            code: "420281",
            name: "大冶市"
          }
        ]
      },
      {
        code: "4203",
        name: "十堰市",
        children: [
          {
            code: "420302",
            name: "茅箭区"
          },
          {
            code: "420303",
            name: "张湾区"
          },
          {
            code: "420304",
            name: "郧阳区"
          },
          {
            code: "420322",
            name: "郧西县"
          },
          {
            code: "420323",
            name: "竹山县"
          },
          {
            code: "420324",
            name: "竹溪县"
          },
          {
            code: "420325",
            name: "房县"
          },
          {
            code: "420381",
            name: "丹江口市"
          }
        ]
      },
      {
        code: "4205",
        name: "宜昌市",
        children: [
          {
            code: "420502",
            name: "西陵区"
          },
          {
            code: "420503",
            name: "伍家岗区"
          },
          {
            code: "420504",
            name: "点军区"
          },
          {
            code: "420505",
            name: "猇亭区"
          },
          {
            code: "420506",
            name: "夷陵区"
          },
          {
            code: "420525",
            name: "远安县"
          },
          {
            code: "420526",
            name: "兴山县"
          },
          {
            code: "420527",
            name: "秭归县"
          },
          {
            code: "420528",
            name: "长阳土家族自治县"
          },
          {
            code: "420529",
            name: "五峰土家族自治县"
          },
          {
            code: "420581",
            name: "宜都市"
          },
          {
            code: "420582",
            name: "当阳市"
          },
          {
            code: "420583",
            name: "枝江市"
          }
        ]
      },
      {
        code: "4206",
        name: "襄阳市",
        children: [
          {
            code: "420602",
            name: "襄城区"
          },
          {
            code: "420606",
            name: "樊城区"
          },
          {
            code: "420607",
            name: "襄州区"
          },
          {
            code: "420624",
            name: "南漳县"
          },
          {
            code: "420625",
            name: "谷城县"
          },
          {
            code: "420626",
            name: "保康县"
          },
          {
            code: "420682",
            name: "老河口市"
          },
          {
            code: "420683",
            name: "枣阳市"
          },
          {
            code: "420684",
            name: "宜城市"
          }
        ]
      },
      {
        code: "4207",
        name: "鄂州市",
        children: [
          {
            code: "420702",
            name: "梁子湖区"
          },
          {
            code: "420703",
            name: "华容区"
          },
          {
            code: "420704",
            name: "鄂城区"
          }
        ]
      },
      {
        code: "4208",
        name: "荆门市",
        children: [
          {
            code: "420802",
            name: "东宝区"
          },
          {
            code: "420804",
            name: "掇刀区"
          },
          {
            code: "420822",
            name: "沙洋县"
          },
          {
            code: "420881",
            name: "钟祥市"
          },
          {
            code: "420882",
            name: "京山市"
          }
        ]
      },
      {
        code: "4209",
        name: "孝感市",
        children: [
          {
            code: "420902",
            name: "孝南区"
          },
          {
            code: "420921",
            name: "孝昌县"
          },
          {
            code: "420922",
            name: "大悟县"
          },
          {
            code: "420923",
            name: "云梦县"
          },
          {
            code: "420981",
            name: "应城市"
          },
          {
            code: "420982",
            name: "安陆市"
          },
          {
            code: "420984",
            name: "汉川市"
          }
        ]
      },
      {
        code: "4210",
        name: "荆州市",
        children: [
          {
            code: "421002",
            name: "沙市区"
          },
          {
            code: "421003",
            name: "荆州区"
          },
          {
            code: "421022",
            name: "公安县"
          },
          {
            code: "421024",
            name: "江陵县"
          },
          {
            code: "421071",
            name: "荆州经济技术开发区"
          },
          {
            code: "421081",
            name: "石首市"
          },
          {
            code: "421083",
            name: "洪湖市"
          },
          {
            code: "421087",
            name: "松滋市"
          },
          {
            code: "421088",
            name: "监利市"
          }
        ]
      },
      {
        code: "4211",
        name: "黄冈市",
        children: [
          {
            code: "421102",
            name: "黄州区"
          },
          {
            code: "421121",
            name: "团风县"
          },
          {
            code: "421122",
            name: "红安县"
          },
          {
            code: "421123",
            name: "罗田县"
          },
          {
            code: "421124",
            name: "英山县"
          },
          {
            code: "421125",
            name: "浠水县"
          },
          {
            code: "421126",
            name: "蕲春县"
          },
          {
            code: "421127",
            name: "黄梅县"
          },
          {
            code: "421171",
            name: "龙感湖管理区"
          },
          {
            code: "421181",
            name: "麻城市"
          },
          {
            code: "421182",
            name: "武穴市"
          }
        ]
      },
      {
        code: "4212",
        name: "咸宁市",
        children: [
          {
            code: "421202",
            name: "咸安区"
          },
          {
            code: "421221",
            name: "嘉鱼县"
          },
          {
            code: "421222",
            name: "通城县"
          },
          {
            code: "421223",
            name: "崇阳县"
          },
          {
            code: "421224",
            name: "通山县"
          },
          {
            code: "421281",
            name: "赤壁市"
          }
        ]
      },
      {
        code: "4213",
        name: "随州市",
        children: [
          {
            code: "421303",
            name: "曾都区"
          },
          {
            code: "421321",
            name: "随县"
          },
          {
            code: "421381",
            name: "广水市"
          }
        ]
      },
      {
        code: "4228",
        name: "恩施土家族苗族自治州",
        children: [
          {
            code: "422801",
            name: "恩施市"
          },
          {
            code: "422802",
            name: "利川市"
          },
          {
            code: "422822",
            name: "建始县"
          },
          {
            code: "422823",
            name: "巴东县"
          },
          {
            code: "422825",
            name: "宣恩县"
          },
          {
            code: "422826",
            name: "咸丰县"
          },
          {
            code: "422827",
            name: "来凤县"
          },
          {
            code: "422828",
            name: "鹤峰县"
          }
        ]
      },
      {
        code: "4290",
        name: "省直辖县级行政区划",
        children: [
          {
            code: "429004",
            name: "仙桃市"
          },
          {
            code: "429005",
            name: "潜江市"
          },
          {
            code: "429006",
            name: "天门市"
          },
          {
            code: "429021",
            name: "神农架林区"
          }
        ]
      }
    ]
  },
  {
    code: "43",
    name: "湖南省",
    children: [
      {
        code: "4301",
        name: "长沙市",
        children: [
          {
            code: "430102",
            name: "芙蓉区"
          },
          {
            code: "430103",
            name: "天心区"
          },
          {
            code: "430104",
            name: "岳麓区"
          },
          {
            code: "430105",
            name: "开福区"
          },
          {
            code: "430111",
            name: "雨花区"
          },
          {
            code: "430112",
            name: "望城区"
          },
          {
            code: "430121",
            name: "长沙县"
          },
          {
            code: "430181",
            name: "浏阳市"
          },
          {
            code: "430182",
            name: "宁乡市"
          }
        ]
      },
      {
        code: "4302",
        name: "株洲市",
        children: [
          {
            code: "430202",
            name: "荷塘区"
          },
          {
            code: "430203",
            name: "芦淞区"
          },
          {
            code: "430204",
            name: "石峰区"
          },
          {
            code: "430211",
            name: "天元区"
          },
          {
            code: "430212",
            name: "渌口区"
          },
          {
            code: "430223",
            name: "攸县"
          },
          {
            code: "430224",
            name: "茶陵县"
          },
          {
            code: "430225",
            name: "炎陵县"
          },
          {
            code: "430281",
            name: "醴陵市"
          }
        ]
      },
      {
        code: "4303",
        name: "湘潭市",
        children: [
          {
            code: "430302",
            name: "雨湖区"
          },
          {
            code: "430304",
            name: "岳塘区"
          },
          {
            code: "430321",
            name: "湘潭县"
          },
          {
            code: "430371",
            name: "湖南湘潭高新技术产业园区"
          },
          {
            code: "430372",
            name: "湘潭昭山示范区"
          },
          {
            code: "430373",
            name: "湘潭九华示范区"
          },
          {
            code: "430381",
            name: "湘乡市"
          },
          {
            code: "430382",
            name: "韶山市"
          }
        ]
      },
      {
        code: "4304",
        name: "衡阳市",
        children: [
          {
            code: "430405",
            name: "珠晖区"
          },
          {
            code: "430406",
            name: "雁峰区"
          },
          {
            code: "430407",
            name: "石鼓区"
          },
          {
            code: "430408",
            name: "蒸湘区"
          },
          {
            code: "430412",
            name: "南岳区"
          },
          {
            code: "430421",
            name: "衡阳县"
          },
          {
            code: "430422",
            name: "衡南县"
          },
          {
            code: "430423",
            name: "衡山县"
          },
          {
            code: "430424",
            name: "衡东县"
          },
          {
            code: "430426",
            name: "祁东县"
          },
          {
            code: "430473",
            name: "湖南衡阳松木经济开发区"
          },
          {
            code: "430476",
            name: "湖南衡阳高新技术产业园区"
          },
          {
            code: "430481",
            name: "耒阳市"
          },
          {
            code: "430482",
            name: "常宁市"
          }
        ]
      },
      {
        code: "4305",
        name: "邵阳市",
        children: [
          {
            code: "430502",
            name: "双清区"
          },
          {
            code: "430503",
            name: "大祥区"
          },
          {
            code: "430511",
            name: "北塔区"
          },
          {
            code: "430522",
            name: "新邵县"
          },
          {
            code: "430523",
            name: "邵阳县"
          },
          {
            code: "430524",
            name: "隆回县"
          },
          {
            code: "430525",
            name: "洞口县"
          },
          {
            code: "430527",
            name: "绥宁县"
          },
          {
            code: "430528",
            name: "新宁县"
          },
          {
            code: "430529",
            name: "城步苗族自治县"
          },
          {
            code: "430581",
            name: "武冈市"
          },
          {
            code: "430582",
            name: "邵东市"
          }
        ]
      },
      {
        code: "4306",
        name: "岳阳市",
        children: [
          {
            code: "430602",
            name: "岳阳楼区"
          },
          {
            code: "430603",
            name: "云溪区"
          },
          {
            code: "430611",
            name: "君山区"
          },
          {
            code: "430621",
            name: "岳阳县"
          },
          {
            code: "430623",
            name: "华容县"
          },
          {
            code: "430624",
            name: "湘阴县"
          },
          {
            code: "430626",
            name: "平江县"
          },
          {
            code: "430671",
            name: "岳阳市屈原管理区"
          },
          {
            code: "430681",
            name: "汨罗市"
          },
          {
            code: "430682",
            name: "临湘市"
          }
        ]
      },
      {
        code: "4307",
        name: "常德市",
        children: [
          {
            code: "430702",
            name: "武陵区"
          },
          {
            code: "430703",
            name: "鼎城区"
          },
          {
            code: "430721",
            name: "安乡县"
          },
          {
            code: "430722",
            name: "汉寿县"
          },
          {
            code: "430723",
            name: "澧县"
          },
          {
            code: "430724",
            name: "临澧县"
          },
          {
            code: "430725",
            name: "桃源县"
          },
          {
            code: "430726",
            name: "石门县"
          },
          {
            code: "430771",
            name: "常德市西洞庭管理区"
          },
          {
            code: "430781",
            name: "津市市"
          }
        ]
      },
      {
        code: "4308",
        name: "张家界市",
        children: [
          {
            code: "430802",
            name: "永定区"
          },
          {
            code: "430811",
            name: "武陵源区"
          },
          {
            code: "430821",
            name: "慈利县"
          },
          {
            code: "430822",
            name: "桑植县"
          }
        ]
      },
      {
        code: "4309",
        name: "益阳市",
        children: [
          {
            code: "430902",
            name: "资阳区"
          },
          {
            code: "430903",
            name: "赫山区"
          },
          {
            code: "430921",
            name: "南县"
          },
          {
            code: "430922",
            name: "桃江县"
          },
          {
            code: "430923",
            name: "安化县"
          },
          {
            code: "430971",
            name: "益阳市大通湖管理区"
          },
          {
            code: "430972",
            name: "湖南益阳高新技术产业园区"
          },
          {
            code: "430981",
            name: "沅江市"
          }
        ]
      },
      {
        code: "4310",
        name: "郴州市",
        children: [
          {
            code: "431002",
            name: "北湖区"
          },
          {
            code: "431003",
            name: "苏仙区"
          },
          {
            code: "431021",
            name: "桂阳县"
          },
          {
            code: "431022",
            name: "宜章县"
          },
          {
            code: "431023",
            name: "永兴县"
          },
          {
            code: "431024",
            name: "嘉禾县"
          },
          {
            code: "431025",
            name: "临武县"
          },
          {
            code: "431026",
            name: "汝城县"
          },
          {
            code: "431027",
            name: "桂东县"
          },
          {
            code: "431028",
            name: "安仁县"
          },
          {
            code: "431081",
            name: "资兴市"
          }
        ]
      },
      {
        code: "4311",
        name: "永州市",
        children: [
          {
            code: "431102",
            name: "零陵区"
          },
          {
            code: "431103",
            name: "冷水滩区"
          },
          {
            code: "431122",
            name: "东安县"
          },
          {
            code: "431123",
            name: "双牌县"
          },
          {
            code: "431124",
            name: "道县"
          },
          {
            code: "431125",
            name: "江永县"
          },
          {
            code: "431126",
            name: "宁远县"
          },
          {
            code: "431127",
            name: "蓝山县"
          },
          {
            code: "431128",
            name: "新田县"
          },
          {
            code: "431129",
            name: "江华瑶族自治县"
          },
          {
            code: "431171",
            name: "永州经济技术开发区"
          },
          {
            code: "431173",
            name: "永州市回龙圩管理区"
          },
          {
            code: "431181",
            name: "祁阳市"
          }
        ]
      },
      {
        code: "4312",
        name: "怀化市",
        children: [
          {
            code: "431202",
            name: "鹤城区"
          },
          {
            code: "431221",
            name: "中方县"
          },
          {
            code: "431222",
            name: "沅陵县"
          },
          {
            code: "431223",
            name: "辰溪县"
          },
          {
            code: "431224",
            name: "溆浦县"
          },
          {
            code: "431225",
            name: "会同县"
          },
          {
            code: "431226",
            name: "麻阳苗族自治县"
          },
          {
            code: "431227",
            name: "新晃侗族自治县"
          },
          {
            code: "431228",
            name: "芷江侗族自治县"
          },
          {
            code: "431229",
            name: "靖州苗族侗族自治县"
          },
          {
            code: "431230",
            name: "通道侗族自治县"
          },
          {
            code: "431271",
            name: "怀化市洪江管理区"
          },
          {
            code: "431281",
            name: "洪江市"
          }
        ]
      },
      {
        code: "4313",
        name: "娄底市",
        children: [
          {
            code: "431302",
            name: "娄星区"
          },
          {
            code: "431321",
            name: "双峰县"
          },
          {
            code: "431322",
            name: "新化县"
          },
          {
            code: "431381",
            name: "冷水江市"
          },
          {
            code: "431382",
            name: "涟源市"
          }
        ]
      },
      {
        code: "4331",
        name: "湘西土家族苗族自治州",
        children: [
          {
            code: "433101",
            name: "吉首市"
          },
          {
            code: "433122",
            name: "泸溪县"
          },
          {
            code: "433123",
            name: "凤凰县"
          },
          {
            code: "433124",
            name: "花垣县"
          },
          {
            code: "433125",
            name: "保靖县"
          },
          {
            code: "433126",
            name: "古丈县"
          },
          {
            code: "433127",
            name: "永顺县"
          },
          {
            code: "433130",
            name: "龙山县"
          }
        ]
      }
    ]
  },
  {
    code: "44",
    name: "广东省",
    children: [
      {
        code: "4401",
        name: "广州市",
        children: [
          {
            code: "440103",
            name: "荔湾区"
          },
          {
            code: "440104",
            name: "越秀区"
          },
          {
            code: "440105",
            name: "海珠区"
          },
          {
            code: "440106",
            name: "天河区"
          },
          {
            code: "440111",
            name: "白云区"
          },
          {
            code: "440112",
            name: "黄埔区"
          },
          {
            code: "440113",
            name: "番禺区"
          },
          {
            code: "440114",
            name: "花都区"
          },
          {
            code: "440115",
            name: "南沙区"
          },
          {
            code: "440117",
            name: "从化区"
          },
          {
            code: "440118",
            name: "增城区"
          }
        ]
      },
      {
        code: "4402",
        name: "韶关市",
        children: [
          {
            code: "440203",
            name: "武江区"
          },
          {
            code: "440204",
            name: "浈江区"
          },
          {
            code: "440205",
            name: "曲江区"
          },
          {
            code: "440222",
            name: "始兴县"
          },
          {
            code: "440224",
            name: "仁化县"
          },
          {
            code: "440229",
            name: "翁源县"
          },
          {
            code: "440232",
            name: "乳源瑶族自治县"
          },
          {
            code: "440233",
            name: "新丰县"
          },
          {
            code: "440281",
            name: "乐昌市"
          },
          {
            code: "440282",
            name: "南雄市"
          }
        ]
      },
      {
        code: "4403",
        name: "深圳市",
        children: [
          {
            code: "440303",
            name: "罗湖区"
          },
          {
            code: "440304",
            name: "福田区"
          },
          {
            code: "440305",
            name: "南山区"
          },
          {
            code: "440306",
            name: "宝安区"
          },
          {
            code: "440307",
            name: "龙岗区"
          },
          {
            code: "440308",
            name: "盐田区"
          },
          {
            code: "440309",
            name: "龙华区"
          },
          {
            code: "440310",
            name: "坪山区"
          },
          {
            code: "440311",
            name: "光明区"
          }
        ]
      },
      {
        code: "4404",
        name: "珠海市",
        children: [
          {
            code: "440402",
            name: "香洲区"
          },
          {
            code: "440403",
            name: "斗门区"
          },
          {
            code: "440404",
            name: "金湾区"
          }
        ]
      },
      {
        code: "4405",
        name: "汕头市",
        children: [
          {
            code: "440507",
            name: "龙湖区"
          },
          {
            code: "440511",
            name: "金平区"
          },
          {
            code: "440512",
            name: "濠江区"
          },
          {
            code: "440513",
            name: "潮阳区"
          },
          {
            code: "440514",
            name: "潮南区"
          },
          {
            code: "440515",
            name: "澄海区"
          },
          {
            code: "440523",
            name: "南澳县"
          }
        ]
      },
      {
        code: "4406",
        name: "佛山市",
        children: [
          {
            code: "440604",
            name: "禅城区"
          },
          {
            code: "440605",
            name: "南海区"
          },
          {
            code: "440606",
            name: "顺德区"
          },
          {
            code: "440607",
            name: "三水区"
          },
          {
            code: "440608",
            name: "高明区"
          }
        ]
      },
      {
        code: "4407",
        name: "江门市",
        children: [
          {
            code: "440703",
            name: "蓬江区"
          },
          {
            code: "440704",
            name: "江海区"
          },
          {
            code: "440705",
            name: "新会区"
          },
          {
            code: "440781",
            name: "台山市"
          },
          {
            code: "440783",
            name: "开平市"
          },
          {
            code: "440784",
            name: "鹤山市"
          },
          {
            code: "440785",
            name: "恩平市"
          }
        ]
      },
      {
        code: "4408",
        name: "湛江市",
        children: [
          {
            code: "440802",
            name: "赤坎区"
          },
          {
            code: "440803",
            name: "霞山区"
          },
          {
            code: "440804",
            name: "坡头区"
          },
          {
            code: "440811",
            name: "麻章区"
          },
          {
            code: "440823",
            name: "遂溪县"
          },
          {
            code: "440825",
            name: "徐闻县"
          },
          {
            code: "440881",
            name: "廉江市"
          },
          {
            code: "440882",
            name: "雷州市"
          },
          {
            code: "440883",
            name: "吴川市"
          }
        ]
      },
      {
        code: "4409",
        name: "茂名市",
        children: [
          {
            code: "440902",
            name: "茂南区"
          },
          {
            code: "440904",
            name: "电白区"
          },
          {
            code: "440981",
            name: "高州市"
          },
          {
            code: "440982",
            name: "化州市"
          },
          {
            code: "440983",
            name: "信宜市"
          }
        ]
      },
      {
        code: "4412",
        name: "肇庆市",
        children: [
          {
            code: "441202",
            name: "端州区"
          },
          {
            code: "441203",
            name: "鼎湖区"
          },
          {
            code: "441204",
            name: "高要区"
          },
          {
            code: "441223",
            name: "广宁县"
          },
          {
            code: "441224",
            name: "怀集县"
          },
          {
            code: "441225",
            name: "封开县"
          },
          {
            code: "441226",
            name: "德庆县"
          },
          {
            code: "441284",
            name: "四会市"
          }
        ]
      },
      {
        code: "4413",
        name: "惠州市",
        children: [
          {
            code: "441302",
            name: "惠城区"
          },
          {
            code: "441303",
            name: "惠阳区"
          },
          {
            code: "441322",
            name: "博罗县"
          },
          {
            code: "441323",
            name: "惠东县"
          },
          {
            code: "441324",
            name: "龙门县"
          }
        ]
      },
      {
        code: "4414",
        name: "梅州市",
        children: [
          {
            code: "441402",
            name: "梅江区"
          },
          {
            code: "441403",
            name: "梅县区"
          },
          {
            code: "441422",
            name: "大埔县"
          },
          {
            code: "441423",
            name: "丰顺县"
          },
          {
            code: "441424",
            name: "五华县"
          },
          {
            code: "441426",
            name: "平远县"
          },
          {
            code: "441427",
            name: "蕉岭县"
          },
          {
            code: "441481",
            name: "兴宁市"
          }
        ]
      },
      {
        code: "4415",
        name: "汕尾市",
        children: [
          {
            code: "441502",
            name: "城区"
          },
          {
            code: "441521",
            name: "海丰县"
          },
          {
            code: "441523",
            name: "陆河县"
          },
          {
            code: "441581",
            name: "陆丰市"
          }
        ]
      },
      {
        code: "4416",
        name: "河源市",
        children: [
          {
            code: "441602",
            name: "源城区"
          },
          {
            code: "441621",
            name: "紫金县"
          },
          {
            code: "441622",
            name: "龙川县"
          },
          {
            code: "441623",
            name: "连平县"
          },
          {
            code: "441624",
            name: "和平县"
          },
          {
            code: "441625",
            name: "东源县"
          }
        ]
      },
      {
        code: "4417",
        name: "阳江市",
        children: [
          {
            code: "441702",
            name: "江城区"
          },
          {
            code: "441704",
            name: "阳东区"
          },
          {
            code: "441721",
            name: "阳西县"
          },
          {
            code: "441781",
            name: "阳春市"
          }
        ]
      },
      {
        code: "4418",
        name: "清远市",
        children: [
          {
            code: "441802",
            name: "清城区"
          },
          {
            code: "441803",
            name: "清新区"
          },
          {
            code: "441821",
            name: "佛冈县"
          },
          {
            code: "441823",
            name: "阳山县"
          },
          {
            code: "441825",
            name: "连山壮族瑶族自治县"
          },
          {
            code: "441826",
            name: "连南瑶族自治县"
          },
          {
            code: "441881",
            name: "英德市"
          },
          {
            code: "441882",
            name: "连州市"
          }
        ]
      },
      {
        code: "4419",
        name: "东莞市",
        children: [
          {
            code: "441900003",
            name: "东城街道"
          },
          {
            code: "441900004",
            name: "南城街道"
          },
          {
            code: "441900005",
            name: "万江街道"
          },
          {
            code: "441900006",
            name: "莞城街道"
          },
          {
            code: "441900101",
            name: "石碣镇"
          },
          {
            code: "441900102",
            name: "石龙镇"
          },
          {
            code: "441900103",
            name: "茶山镇"
          },
          {
            code: "441900104",
            name: "石排镇"
          },
          {
            code: "441900105",
            name: "企石镇"
          },
          {
            code: "441900106",
            name: "横沥镇"
          },
          {
            code: "441900107",
            name: "桥头镇"
          },
          {
            code: "441900108",
            name: "谢岗镇"
          },
          {
            code: "441900109",
            name: "东坑镇"
          },
          {
            code: "441900110",
            name: "常平镇"
          },
          {
            code: "441900111",
            name: "寮步镇"
          },
          {
            code: "441900112",
            name: "樟木头镇"
          },
          {
            code: "441900113",
            name: "大朗镇"
          },
          {
            code: "441900114",
            name: "黄江镇"
          },
          {
            code: "441900115",
            name: "清溪镇"
          },
          {
            code: "441900116",
            name: "塘厦镇"
          },
          {
            code: "441900117",
            name: "凤岗镇"
          },
          {
            code: "441900118",
            name: "大岭山镇"
          },
          {
            code: "441900119",
            name: "长安镇"
          },
          {
            code: "441900121",
            name: "虎门镇"
          },
          {
            code: "441900122",
            name: "厚街镇"
          },
          {
            code: "441900123",
            name: "沙田镇"
          },
          {
            code: "441900124",
            name: "道滘镇"
          },
          {
            code: "441900125",
            name: "洪梅镇"
          },
          {
            code: "441900126",
            name: "麻涌镇"
          },
          {
            code: "441900127",
            name: "望牛墩镇"
          },
          {
            code: "441900128",
            name: "中堂镇"
          },
          {
            code: "441900129",
            name: "高埗镇"
          },
          {
            code: "441900401",
            name: "松山湖"
          },
          {
            code: "441900402",
            name: "东莞港"
          },
          {
            code: "441900403",
            name: "东莞生态园"
          },
          {
            code: "441900404",
            name: "东莞滨海湾新区"
          }
        ]
      },
      {
        code: "4420",
        name: "中山市",
        children: [
          {
            code: "442000001",
            name: "石岐街道"
          },
          {
            code: "442000002",
            name: "东区街道"
          },
          {
            code: "442000003",
            name: "中山港街道"
          },
          {
            code: "442000004",
            name: "西区街道"
          },
          {
            code: "442000005",
            name: "南区街道"
          },
          {
            code: "442000006",
            name: "五桂山街道"
          },
          {
            code: "442000007",
            name: "民众街道"
          },
          {
            code: "442000008",
            name: "南朗街道"
          },
          {
            code: "442000101",
            name: "黄圃镇"
          },
          {
            code: "442000103",
            name: "东凤镇"
          },
          {
            code: "442000105",
            name: "古镇镇"
          },
          {
            code: "442000106",
            name: "沙溪镇"
          },
          {
            code: "442000107",
            name: "坦洲镇"
          },
          {
            code: "442000108",
            name: "港口镇"
          },
          {
            code: "442000109",
            name: "三角镇"
          },
          {
            code: "442000110",
            name: "横栏镇"
          },
          {
            code: "442000111",
            name: "南头镇"
          },
          {
            code: "442000112",
            name: "阜沙镇"
          },
          {
            code: "442000114",
            name: "三乡镇"
          },
          {
            code: "442000115",
            name: "板芙镇"
          },
          {
            code: "442000116",
            name: "大涌镇"
          },
          {
            code: "442000117",
            name: "神湾镇"
          },
          {
            code: "442000118",
            name: "小榄镇"
          }
        ]
      },
      {
        code: "4451",
        name: "潮州市",
        children: [
          {
            code: "445102",
            name: "湘桥区"
          },
          {
            code: "445103",
            name: "潮安区"
          },
          {
            code: "445122",
            name: "饶平县"
          }
        ]
      },
      {
        code: "4452",
        name: "揭阳市",
        children: [
          {
            code: "445202",
            name: "榕城区"
          },
          {
            code: "445203",
            name: "揭东区"
          },
          {
            code: "445222",
            name: "揭西县"
          },
          {
            code: "445224",
            name: "惠来县"
          },
          {
            code: "445281",
            name: "普宁市"
          }
        ]
      },
      {
        code: "4453",
        name: "云浮市",
        children: [
          {
            code: "445302",
            name: "云城区"
          },
          {
            code: "445303",
            name: "云安区"
          },
          {
            code: "445321",
            name: "新兴县"
          },
          {
            code: "445322",
            name: "郁南县"
          },
          {
            code: "445381",
            name: "罗定市"
          }
        ]
      }
    ]
  },
  {
    code: "45",
    name: "广西壮族自治区",
    children: [
      {
        code: "4501",
        name: "南宁市",
        children: [
          {
            code: "450102",
            name: "兴宁区"
          },
          {
            code: "450103",
            name: "青秀区"
          },
          {
            code: "450105",
            name: "江南区"
          },
          {
            code: "450107",
            name: "西乡塘区"
          },
          {
            code: "450108",
            name: "良庆区"
          },
          {
            code: "450109",
            name: "邕宁区"
          },
          {
            code: "450110",
            name: "武鸣区"
          },
          {
            code: "450123",
            name: "隆安县"
          },
          {
            code: "450124",
            name: "马山县"
          },
          {
            code: "450125",
            name: "上林县"
          },
          {
            code: "450126",
            name: "宾阳县"
          },
          {
            code: "450181",
            name: "横州市"
          }
        ]
      },
      {
        code: "4502",
        name: "柳州市",
        children: [
          {
            code: "450202",
            name: "城中区"
          },
          {
            code: "450203",
            name: "鱼峰区"
          },
          {
            code: "450204",
            name: "柳南区"
          },
          {
            code: "450205",
            name: "柳北区"
          },
          {
            code: "450206",
            name: "柳江区"
          },
          {
            code: "450222",
            name: "柳城县"
          },
          {
            code: "450223",
            name: "鹿寨县"
          },
          {
            code: "450224",
            name: "融安县"
          },
          {
            code: "450225",
            name: "融水苗族自治县"
          },
          {
            code: "450226",
            name: "三江侗族自治县"
          }
        ]
      },
      {
        code: "4503",
        name: "桂林市",
        children: [
          {
            code: "450302",
            name: "秀峰区"
          },
          {
            code: "450303",
            name: "叠彩区"
          },
          {
            code: "450304",
            name: "象山区"
          },
          {
            code: "450305",
            name: "七星区"
          },
          {
            code: "450311",
            name: "雁山区"
          },
          {
            code: "450312",
            name: "临桂区"
          },
          {
            code: "450321",
            name: "阳朔县"
          },
          {
            code: "450323",
            name: "灵川县"
          },
          {
            code: "450324",
            name: "全州县"
          },
          {
            code: "450325",
            name: "兴安县"
          },
          {
            code: "450326",
            name: "永福县"
          },
          {
            code: "450327",
            name: "灌阳县"
          },
          {
            code: "450328",
            name: "龙胜各族自治县"
          },
          {
            code: "450329",
            name: "资源县"
          },
          {
            code: "450330",
            name: "平乐县"
          },
          {
            code: "450332",
            name: "恭城瑶族自治县"
          },
          {
            code: "450381",
            name: "荔浦市"
          }
        ]
      },
      {
        code: "4504",
        name: "梧州市",
        children: [
          {
            code: "450403",
            name: "万秀区"
          },
          {
            code: "450405",
            name: "长洲区"
          },
          {
            code: "450406",
            name: "龙圩区"
          },
          {
            code: "450421",
            name: "苍梧县"
          },
          {
            code: "450422",
            name: "藤县"
          },
          {
            code: "450423",
            name: "蒙山县"
          },
          {
            code: "450481",
            name: "岑溪市"
          }
        ]
      },
      {
        code: "4505",
        name: "北海市",
        children: [
          {
            code: "450502",
            name: "海城区"
          },
          {
            code: "450503",
            name: "银海区"
          },
          {
            code: "450512",
            name: "铁山港区"
          },
          {
            code: "450521",
            name: "合浦县"
          }
        ]
      },
      {
        code: "4506",
        name: "防城港市",
        children: [
          {
            code: "450602",
            name: "港口区"
          },
          {
            code: "450603",
            name: "防城区"
          },
          {
            code: "450621",
            name: "上思县"
          },
          {
            code: "450681",
            name: "东兴市"
          }
        ]
      },
      {
        code: "4507",
        name: "钦州市",
        children: [
          {
            code: "450702",
            name: "钦南区"
          },
          {
            code: "450703",
            name: "钦北区"
          },
          {
            code: "450721",
            name: "灵山县"
          },
          {
            code: "450722",
            name: "浦北县"
          }
        ]
      },
      {
        code: "4508",
        name: "贵港市",
        children: [
          {
            code: "450802",
            name: "港北区"
          },
          {
            code: "450803",
            name: "港南区"
          },
          {
            code: "450804",
            name: "覃塘区"
          },
          {
            code: "450821",
            name: "平南县"
          },
          {
            code: "450881",
            name: "桂平市"
          }
        ]
      },
      {
        code: "4509",
        name: "玉林市",
        children: [
          {
            code: "450902",
            name: "玉州区"
          },
          {
            code: "450903",
            name: "福绵区"
          },
          {
            code: "450921",
            name: "容县"
          },
          {
            code: "450922",
            name: "陆川县"
          },
          {
            code: "450923",
            name: "博白县"
          },
          {
            code: "450924",
            name: "兴业县"
          },
          {
            code: "450981",
            name: "北流市"
          }
        ]
      },
      {
        code: "4510",
        name: "百色市",
        children: [
          {
            code: "451002",
            name: "右江区"
          },
          {
            code: "451003",
            name: "田阳区"
          },
          {
            code: "451022",
            name: "田东县"
          },
          {
            code: "451024",
            name: "德保县"
          },
          {
            code: "451026",
            name: "那坡县"
          },
          {
            code: "451027",
            name: "凌云县"
          },
          {
            code: "451028",
            name: "乐业县"
          },
          {
            code: "451029",
            name: "田林县"
          },
          {
            code: "451030",
            name: "西林县"
          },
          {
            code: "451031",
            name: "隆林各族自治县"
          },
          {
            code: "451081",
            name: "靖西市"
          },
          {
            code: "451082",
            name: "平果市"
          }
        ]
      },
      {
        code: "4511",
        name: "贺州市",
        children: [
          {
            code: "451102",
            name: "八步区"
          },
          {
            code: "451103",
            name: "平桂区"
          },
          {
            code: "451121",
            name: "昭平县"
          },
          {
            code: "451122",
            name: "钟山县"
          },
          {
            code: "451123",
            name: "富川瑶族自治县"
          }
        ]
      },
      {
        code: "4512",
        name: "河池市",
        children: [
          {
            code: "451202",
            name: "金城江区"
          },
          {
            code: "451203",
            name: "宜州区"
          },
          {
            code: "451221",
            name: "南丹县"
          },
          {
            code: "451222",
            name: "天峨县"
          },
          {
            code: "451223",
            name: "凤山县"
          },
          {
            code: "451224",
            name: "东兰县"
          },
          {
            code: "451225",
            name: "罗城仫佬族自治县"
          },
          {
            code: "451226",
            name: "环江毛南族自治县"
          },
          {
            code: "451227",
            name: "巴马瑶族自治县"
          },
          {
            code: "451228",
            name: "都安瑶族自治县"
          },
          {
            code: "451229",
            name: "大化瑶族自治县"
          }
        ]
      },
      {
        code: "4513",
        name: "来宾市",
        children: [
          {
            code: "451302",
            name: "兴宾区"
          },
          {
            code: "451321",
            name: "忻城县"
          },
          {
            code: "451322",
            name: "象州县"
          },
          {
            code: "451323",
            name: "武宣县"
          },
          {
            code: "451324",
            name: "金秀瑶族自治县"
          },
          {
            code: "451381",
            name: "合山市"
          }
        ]
      },
      {
        code: "4514",
        name: "崇左市",
        children: [
          {
            code: "451402",
            name: "江州区"
          },
          {
            code: "451421",
            name: "扶绥县"
          },
          {
            code: "451422",
            name: "宁明县"
          },
          {
            code: "451423",
            name: "龙州县"
          },
          {
            code: "451424",
            name: "大新县"
          },
          {
            code: "451425",
            name: "天等县"
          },
          {
            code: "451481",
            name: "凭祥市"
          }
        ]
      }
    ]
  },
  {
    code: "46",
    name: "海南省",
    children: [
      {
        code: "4601",
        name: "海口市",
        children: [
          {
            code: "460105",
            name: "秀英区"
          },
          {
            code: "460106",
            name: "龙华区"
          },
          {
            code: "460107",
            name: "琼山区"
          },
          {
            code: "460108",
            name: "美兰区"
          }
        ]
      },
      {
        code: "4602",
        name: "三亚市",
        children: [
          {
            code: "460202",
            name: "海棠区"
          },
          {
            code: "460203",
            name: "吉阳区"
          },
          {
            code: "460204",
            name: "天涯区"
          },
          {
            code: "460205",
            name: "崖州区"
          }
        ]
      },
      {
        code: "4603",
        name: "三沙市",
        children: [
          {
            code: "460321",
            name: "西沙群岛"
          },
          {
            code: "460322",
            name: "南沙群岛"
          },
          {
            code: "460323",
            name: "中沙群岛的岛礁及其海域"
          }
        ]
      },
      {
        code: "4604",
        name: "儋州市",
        children: [
          {
            code: "460400100",
            name: "那大镇"
          },
          {
            code: "460400101",
            name: "和庆镇"
          },
          {
            code: "460400102",
            name: "南丰镇"
          },
          {
            code: "460400103",
            name: "大成镇"
          },
          {
            code: "460400104",
            name: "雅星镇"
          },
          {
            code: "460400105",
            name: "兰洋镇"
          },
          {
            code: "460400106",
            name: "光村镇"
          },
          {
            code: "460400107",
            name: "木棠镇"
          },
          {
            code: "460400108",
            name: "海头镇"
          },
          {
            code: "460400109",
            name: "峨蔓镇"
          },
          {
            code: "460400111",
            name: "王五镇"
          },
          {
            code: "460400112",
            name: "白马井镇"
          },
          {
            code: "460400113",
            name: "中和镇"
          },
          {
            code: "460400114",
            name: "排浦镇"
          },
          {
            code: "460400115",
            name: "东成镇"
          },
          {
            code: "460400116",
            name: "新州镇"
          },
          {
            code: "460400499",
            name: "洋浦经济开发区"
          },
          {
            code: "460400500",
            name: "华南热作学院"
          }
        ]
      },
      {
        code: "4690",
        name: "省直辖县级行政区划",
        children: [
          {
            code: "469001",
            name: "五指山市"
          },
          {
            code: "469002",
            name: "琼海市"
          },
          {
            code: "469005",
            name: "文昌市"
          },
          {
            code: "469006",
            name: "万宁市"
          },
          {
            code: "469007",
            name: "东方市"
          },
          {
            code: "469021",
            name: "定安县"
          },
          {
            code: "469022",
            name: "屯昌县"
          },
          {
            code: "469023",
            name: "澄迈县"
          },
          {
            code: "469024",
            name: "临高县"
          },
          {
            code: "469025",
            name: "白沙黎族自治县"
          },
          {
            code: "469026",
            name: "昌江黎族自治县"
          },
          {
            code: "469027",
            name: "乐东黎族自治县"
          },
          {
            code: "469028",
            name: "陵水黎族自治县"
          },
          {
            code: "469029",
            name: "保亭黎族苗族自治县"
          },
          {
            code: "469030",
            name: "琼中黎族苗族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "50",
    name: "重庆市",
    children: [
      {
        code: "5001",
        name: "市辖区",
        children: [
          {
            code: "500101",
            name: "万州区"
          },
          {
            code: "500102",
            name: "涪陵区"
          },
          {
            code: "500103",
            name: "渝中区"
          },
          {
            code: "500104",
            name: "大渡口区"
          },
          {
            code: "500105",
            name: "江北区"
          },
          {
            code: "500106",
            name: "沙坪坝区"
          },
          {
            code: "500107",
            name: "九龙坡区"
          },
          {
            code: "500108",
            name: "南岸区"
          },
          {
            code: "500109",
            name: "北碚区"
          },
          {
            code: "500110",
            name: "綦江区"
          },
          {
            code: "500111",
            name: "大足区"
          },
          {
            code: "500112",
            name: "渝北区"
          },
          {
            code: "500113",
            name: "巴南区"
          },
          {
            code: "500114",
            name: "黔江区"
          },
          {
            code: "500115",
            name: "长寿区"
          },
          {
            code: "500116",
            name: "江津区"
          },
          {
            code: "500117",
            name: "合川区"
          },
          {
            code: "500118",
            name: "永川区"
          },
          {
            code: "500119",
            name: "南川区"
          },
          {
            code: "500120",
            name: "璧山区"
          },
          {
            code: "500151",
            name: "铜梁区"
          },
          {
            code: "500152",
            name: "潼南区"
          },
          {
            code: "500153",
            name: "荣昌区"
          },
          {
            code: "500154",
            name: "开州区"
          },
          {
            code: "500155",
            name: "梁平区"
          },
          {
            code: "500156",
            name: "武隆区"
          }
        ]
      },
      {
        code: "5002",
        name: "县",
        children: [
          {
            code: "500229",
            name: "城口县"
          },
          {
            code: "500230",
            name: "丰都县"
          },
          {
            code: "500231",
            name: "垫江县"
          },
          {
            code: "500233",
            name: "忠县"
          },
          {
            code: "500235",
            name: "云阳县"
          },
          {
            code: "500236",
            name: "奉节县"
          },
          {
            code: "500237",
            name: "巫山县"
          },
          {
            code: "500238",
            name: "巫溪县"
          },
          {
            code: "500240",
            name: "石柱土家族自治县"
          },
          {
            code: "500241",
            name: "秀山土家族苗族自治县"
          },
          {
            code: "500242",
            name: "酉阳土家族苗族自治县"
          },
          {
            code: "500243",
            name: "彭水苗族土家族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "51",
    name: "四川省",
    children: [
      {
        code: "5101",
        name: "成都市",
        children: [
          {
            code: "510104",
            name: "锦江区"
          },
          {
            code: "510105",
            name: "青羊区"
          },
          {
            code: "510106",
            name: "金牛区"
          },
          {
            code: "510107",
            name: "武侯区"
          },
          {
            code: "510108",
            name: "成华区"
          },
          {
            code: "510112",
            name: "龙泉驿区"
          },
          {
            code: "510113",
            name: "青白江区"
          },
          {
            code: "510114",
            name: "新都区"
          },
          {
            code: "510115",
            name: "温江区"
          },
          {
            code: "510116",
            name: "双流区"
          },
          {
            code: "510117",
            name: "郫都区"
          },
          {
            code: "510118",
            name: "新津区"
          },
          {
            code: "510121",
            name: "金堂县"
          },
          {
            code: "510129",
            name: "大邑县"
          },
          {
            code: "510131",
            name: "蒲江县"
          },
          {
            code: "510181",
            name: "都江堰市"
          },
          {
            code: "510182",
            name: "彭州市"
          },
          {
            code: "510183",
            name: "邛崃市"
          },
          {
            code: "510184",
            name: "崇州市"
          },
          {
            code: "510185",
            name: "简阳市"
          }
        ]
      },
      {
        code: "5103",
        name: "自贡市",
        children: [
          {
            code: "510302",
            name: "自流井区"
          },
          {
            code: "510303",
            name: "贡井区"
          },
          {
            code: "510304",
            name: "大安区"
          },
          {
            code: "510311",
            name: "沿滩区"
          },
          {
            code: "510321",
            name: "荣县"
          },
          {
            code: "510322",
            name: "富顺县"
          }
        ]
      },
      {
        code: "5104",
        name: "攀枝花市",
        children: [
          {
            code: "510402",
            name: "东区"
          },
          {
            code: "510403",
            name: "西区"
          },
          {
            code: "510411",
            name: "仁和区"
          },
          {
            code: "510421",
            name: "米易县"
          },
          {
            code: "510422",
            name: "盐边县"
          }
        ]
      },
      {
        code: "5105",
        name: "泸州市",
        children: [
          {
            code: "510502",
            name: "江阳区"
          },
          {
            code: "510503",
            name: "纳溪区"
          },
          {
            code: "510504",
            name: "龙马潭区"
          },
          {
            code: "510521",
            name: "泸县"
          },
          {
            code: "510522",
            name: "合江县"
          },
          {
            code: "510524",
            name: "叙永县"
          },
          {
            code: "510525",
            name: "古蔺县"
          }
        ]
      },
      {
        code: "5106",
        name: "德阳市",
        children: [
          {
            code: "510603",
            name: "旌阳区"
          },
          {
            code: "510604",
            name: "罗江区"
          },
          {
            code: "510623",
            name: "中江县"
          },
          {
            code: "510681",
            name: "广汉市"
          },
          {
            code: "510682",
            name: "什邡市"
          },
          {
            code: "510683",
            name: "绵竹市"
          }
        ]
      },
      {
        code: "5107",
        name: "绵阳市",
        children: [
          {
            code: "510703",
            name: "涪城区"
          },
          {
            code: "510704",
            name: "游仙区"
          },
          {
            code: "510705",
            name: "安州区"
          },
          {
            code: "510722",
            name: "三台县"
          },
          {
            code: "510723",
            name: "盐亭县"
          },
          {
            code: "510725",
            name: "梓潼县"
          },
          {
            code: "510726",
            name: "北川羌族自治县"
          },
          {
            code: "510727",
            name: "平武县"
          },
          {
            code: "510781",
            name: "江油市"
          }
        ]
      },
      {
        code: "5108",
        name: "广元市",
        children: [
          {
            code: "510802",
            name: "利州区"
          },
          {
            code: "510811",
            name: "昭化区"
          },
          {
            code: "510812",
            name: "朝天区"
          },
          {
            code: "510821",
            name: "旺苍县"
          },
          {
            code: "510822",
            name: "青川县"
          },
          {
            code: "510823",
            name: "剑阁县"
          },
          {
            code: "510824",
            name: "苍溪县"
          }
        ]
      },
      {
        code: "5109",
        name: "遂宁市",
        children: [
          {
            code: "510903",
            name: "船山区"
          },
          {
            code: "510904",
            name: "安居区"
          },
          {
            code: "510921",
            name: "蓬溪县"
          },
          {
            code: "510923",
            name: "大英县"
          },
          {
            code: "510981",
            name: "射洪市"
          }
        ]
      },
      {
        code: "5110",
        name: "内江市",
        children: [
          {
            code: "511002",
            name: "市中区"
          },
          {
            code: "511011",
            name: "东兴区"
          },
          {
            code: "511024",
            name: "威远县"
          },
          {
            code: "511025",
            name: "资中县"
          },
          {
            code: "511083",
            name: "隆昌市"
          }
        ]
      },
      {
        code: "5111",
        name: "乐山市",
        children: [
          {
            code: "511102",
            name: "市中区"
          },
          {
            code: "511111",
            name: "沙湾区"
          },
          {
            code: "511112",
            name: "五通桥区"
          },
          {
            code: "511113",
            name: "金口河区"
          },
          {
            code: "511123",
            name: "犍为县"
          },
          {
            code: "511124",
            name: "井研县"
          },
          {
            code: "511126",
            name: "夹江县"
          },
          {
            code: "511129",
            name: "沐川县"
          },
          {
            code: "511132",
            name: "峨边彝族自治县"
          },
          {
            code: "511133",
            name: "马边彝族自治县"
          },
          {
            code: "511181",
            name: "峨眉山市"
          }
        ]
      },
      {
        code: "5113",
        name: "南充市",
        children: [
          {
            code: "511302",
            name: "顺庆区"
          },
          {
            code: "511303",
            name: "高坪区"
          },
          {
            code: "511304",
            name: "嘉陵区"
          },
          {
            code: "511321",
            name: "南部县"
          },
          {
            code: "511322",
            name: "营山县"
          },
          {
            code: "511323",
            name: "蓬安县"
          },
          {
            code: "511324",
            name: "仪陇县"
          },
          {
            code: "511325",
            name: "西充县"
          },
          {
            code: "511381",
            name: "阆中市"
          }
        ]
      },
      {
        code: "5114",
        name: "眉山市",
        children: [
          {
            code: "511402",
            name: "东坡区"
          },
          {
            code: "511403",
            name: "彭山区"
          },
          {
            code: "511421",
            name: "仁寿县"
          },
          {
            code: "511423",
            name: "洪雅县"
          },
          {
            code: "511424",
            name: "丹棱县"
          },
          {
            code: "511425",
            name: "青神县"
          }
        ]
      },
      {
        code: "5115",
        name: "宜宾市",
        children: [
          {
            code: "511502",
            name: "翠屏区"
          },
          {
            code: "511503",
            name: "南溪区"
          },
          {
            code: "511504",
            name: "叙州区"
          },
          {
            code: "511523",
            name: "江安县"
          },
          {
            code: "511524",
            name: "长宁县"
          },
          {
            code: "511525",
            name: "高县"
          },
          {
            code: "511526",
            name: "珙县"
          },
          {
            code: "511527",
            name: "筠连县"
          },
          {
            code: "511528",
            name: "兴文县"
          },
          {
            code: "511529",
            name: "屏山县"
          }
        ]
      },
      {
        code: "5116",
        name: "广安市",
        children: [
          {
            code: "511602",
            name: "广安区"
          },
          {
            code: "511603",
            name: "前锋区"
          },
          {
            code: "511621",
            name: "岳池县"
          },
          {
            code: "511622",
            name: "武胜县"
          },
          {
            code: "511623",
            name: "邻水县"
          },
          {
            code: "511681",
            name: "华蓥市"
          }
        ]
      },
      {
        code: "5117",
        name: "达州市",
        children: [
          {
            code: "511702",
            name: "通川区"
          },
          {
            code: "511703",
            name: "达川区"
          },
          {
            code: "511722",
            name: "宣汉县"
          },
          {
            code: "511723",
            name: "开江县"
          },
          {
            code: "511724",
            name: "大竹县"
          },
          {
            code: "511725",
            name: "渠县"
          },
          {
            code: "511781",
            name: "万源市"
          }
        ]
      },
      {
        code: "5118",
        name: "雅安市",
        children: [
          {
            code: "511802",
            name: "雨城区"
          },
          {
            code: "511803",
            name: "名山区"
          },
          {
            code: "511822",
            name: "荥经县"
          },
          {
            code: "511823",
            name: "汉源县"
          },
          {
            code: "511824",
            name: "石棉县"
          },
          {
            code: "511825",
            name: "天全县"
          },
          {
            code: "511826",
            name: "芦山县"
          },
          {
            code: "511827",
            name: "宝兴县"
          }
        ]
      },
      {
        code: "5119",
        name: "巴中市",
        children: [
          {
            code: "511902",
            name: "巴州区"
          },
          {
            code: "511903",
            name: "恩阳区"
          },
          {
            code: "511921",
            name: "通江县"
          },
          {
            code: "511922",
            name: "南江县"
          },
          {
            code: "511923",
            name: "平昌县"
          }
        ]
      },
      {
        code: "5120",
        name: "资阳市",
        children: [
          {
            code: "512002",
            name: "雁江区"
          },
          {
            code: "512021",
            name: "安岳县"
          },
          {
            code: "512022",
            name: "乐至县"
          }
        ]
      },
      {
        code: "5132",
        name: "阿坝藏族羌族自治州",
        children: [
          {
            code: "513201",
            name: "马尔康市"
          },
          {
            code: "513221",
            name: "汶川县"
          },
          {
            code: "513222",
            name: "理县"
          },
          {
            code: "513223",
            name: "茂县"
          },
          {
            code: "513224",
            name: "松潘县"
          },
          {
            code: "513225",
            name: "九寨沟县"
          },
          {
            code: "513226",
            name: "金川县"
          },
          {
            code: "513227",
            name: "小金县"
          },
          {
            code: "513228",
            name: "黑水县"
          },
          {
            code: "513230",
            name: "壤塘县"
          },
          {
            code: "513231",
            name: "阿坝县"
          },
          {
            code: "513232",
            name: "若尔盖县"
          },
          {
            code: "513233",
            name: "红原县"
          }
        ]
      },
      {
        code: "5133",
        name: "甘孜藏族自治州",
        children: [
          {
            code: "513301",
            name: "康定市"
          },
          {
            code: "513322",
            name: "泸定县"
          },
          {
            code: "513323",
            name: "丹巴县"
          },
          {
            code: "513324",
            name: "九龙县"
          },
          {
            code: "513325",
            name: "雅江县"
          },
          {
            code: "513326",
            name: "道孚县"
          },
          {
            code: "513327",
            name: "炉霍县"
          },
          {
            code: "513328",
            name: "甘孜县"
          },
          {
            code: "513329",
            name: "新龙县"
          },
          {
            code: "513330",
            name: "德格县"
          },
          {
            code: "513331",
            name: "白玉县"
          },
          {
            code: "513332",
            name: "石渠县"
          },
          {
            code: "513333",
            name: "色达县"
          },
          {
            code: "513334",
            name: "理塘县"
          },
          {
            code: "513335",
            name: "巴塘县"
          },
          {
            code: "513336",
            name: "乡城县"
          },
          {
            code: "513337",
            name: "稻城县"
          },
          {
            code: "513338",
            name: "得荣县"
          }
        ]
      },
      {
        code: "5134",
        name: "凉山彝族自治州",
        children: [
          {
            code: "513401",
            name: "西昌市"
          },
          {
            code: "513402",
            name: "会理市"
          },
          {
            code: "513422",
            name: "木里藏族自治县"
          },
          {
            code: "513423",
            name: "盐源县"
          },
          {
            code: "513424",
            name: "德昌县"
          },
          {
            code: "513426",
            name: "会东县"
          },
          {
            code: "513427",
            name: "宁南县"
          },
          {
            code: "513428",
            name: "普格县"
          },
          {
            code: "513429",
            name: "布拖县"
          },
          {
            code: "513430",
            name: "金阳县"
          },
          {
            code: "513431",
            name: "昭觉县"
          },
          {
            code: "513432",
            name: "喜德县"
          },
          {
            code: "513433",
            name: "冕宁县"
          },
          {
            code: "513434",
            name: "越西县"
          },
          {
            code: "513435",
            name: "甘洛县"
          },
          {
            code: "513436",
            name: "美姑县"
          },
          {
            code: "513437",
            name: "雷波县"
          }
        ]
      }
    ]
  },
  {
    code: "52",
    name: "贵州省",
    children: [
      {
        code: "5201",
        name: "贵阳市",
        children: [
          {
            code: "520102",
            name: "南明区"
          },
          {
            code: "520103",
            name: "云岩区"
          },
          {
            code: "520111",
            name: "花溪区"
          },
          {
            code: "520112",
            name: "乌当区"
          },
          {
            code: "520113",
            name: "白云区"
          },
          {
            code: "520115",
            name: "观山湖区"
          },
          {
            code: "520121",
            name: "开阳县"
          },
          {
            code: "520122",
            name: "息烽县"
          },
          {
            code: "520123",
            name: "修文县"
          },
          {
            code: "520181",
            name: "清镇市"
          }
        ]
      },
      {
        code: "5202",
        name: "六盘水市",
        children: [
          {
            code: "520201",
            name: "钟山区"
          },
          {
            code: "520203",
            name: "六枝特区"
          },
          {
            code: "520204",
            name: "水城区"
          },
          {
            code: "520281",
            name: "盘州市"
          }
        ]
      },
      {
        code: "5203",
        name: "遵义市",
        children: [
          {
            code: "520302",
            name: "红花岗区"
          },
          {
            code: "520303",
            name: "汇川区"
          },
          {
            code: "520304",
            name: "播州区"
          },
          {
            code: "520322",
            name: "桐梓县"
          },
          {
            code: "520323",
            name: "绥阳县"
          },
          {
            code: "520324",
            name: "正安县"
          },
          {
            code: "520325",
            name: "道真仡佬族苗族自治县"
          },
          {
            code: "520326",
            name: "务川仡佬族苗族自治县"
          },
          {
            code: "520327",
            name: "凤冈县"
          },
          {
            code: "520328",
            name: "湄潭县"
          },
          {
            code: "520329",
            name: "余庆县"
          },
          {
            code: "520330",
            name: "习水县"
          },
          {
            code: "520381",
            name: "赤水市"
          },
          {
            code: "520382",
            name: "仁怀市"
          }
        ]
      },
      {
        code: "5204",
        name: "安顺市",
        children: [
          {
            code: "520402",
            name: "西秀区"
          },
          {
            code: "520403",
            name: "平坝区"
          },
          {
            code: "520422",
            name: "普定县"
          },
          {
            code: "520423",
            name: "镇宁布依族苗族自治县"
          },
          {
            code: "520424",
            name: "关岭布依族苗族自治县"
          },
          {
            code: "520425",
            name: "紫云苗族布依族自治县"
          }
        ]
      },
      {
        code: "5205",
        name: "毕节市",
        children: [
          {
            code: "520502",
            name: "七星关区"
          },
          {
            code: "520521",
            name: "大方县"
          },
          {
            code: "520523",
            name: "金沙县"
          },
          {
            code: "520524",
            name: "织金县"
          },
          {
            code: "520525",
            name: "纳雍县"
          },
          {
            code: "520526",
            name: "威宁彝族回族苗族自治县"
          },
          {
            code: "520527",
            name: "赫章县"
          },
          {
            code: "520581",
            name: "黔西市"
          }
        ]
      },
      {
        code: "5206",
        name: "铜仁市",
        children: [
          {
            code: "520602",
            name: "碧江区"
          },
          {
            code: "520603",
            name: "万山区"
          },
          {
            code: "520621",
            name: "江口县"
          },
          {
            code: "520622",
            name: "玉屏侗族自治县"
          },
          {
            code: "520623",
            name: "石阡县"
          },
          {
            code: "520624",
            name: "思南县"
          },
          {
            code: "520625",
            name: "印江土家族苗族自治县"
          },
          {
            code: "520626",
            name: "德江县"
          },
          {
            code: "520627",
            name: "沿河土家族自治县"
          },
          {
            code: "520628",
            name: "松桃苗族自治县"
          }
        ]
      },
      {
        code: "5223",
        name: "黔西南布依族苗族自治州",
        children: [
          {
            code: "522301",
            name: "兴义市"
          },
          {
            code: "522302",
            name: "兴仁市"
          },
          {
            code: "522323",
            name: "普安县"
          },
          {
            code: "522324",
            name: "晴隆县"
          },
          {
            code: "522325",
            name: "贞丰县"
          },
          {
            code: "522326",
            name: "望谟县"
          },
          {
            code: "522327",
            name: "册亨县"
          },
          {
            code: "522328",
            name: "安龙县"
          }
        ]
      },
      {
        code: "5226",
        name: "黔东南苗族侗族自治州",
        children: [
          {
            code: "522601",
            name: "凯里市"
          },
          {
            code: "522622",
            name: "黄平县"
          },
          {
            code: "522623",
            name: "施秉县"
          },
          {
            code: "522624",
            name: "三穗县"
          },
          {
            code: "522625",
            name: "镇远县"
          },
          {
            code: "522626",
            name: "岑巩县"
          },
          {
            code: "522627",
            name: "天柱县"
          },
          {
            code: "522628",
            name: "锦屏县"
          },
          {
            code: "522629",
            name: "剑河县"
          },
          {
            code: "522630",
            name: "台江县"
          },
          {
            code: "522631",
            name: "黎平县"
          },
          {
            code: "522632",
            name: "榕江县"
          },
          {
            code: "522633",
            name: "从江县"
          },
          {
            code: "522634",
            name: "雷山县"
          },
          {
            code: "522635",
            name: "麻江县"
          },
          {
            code: "522636",
            name: "丹寨县"
          }
        ]
      },
      {
        code: "5227",
        name: "黔南布依族苗族自治州",
        children: [
          {
            code: "522701",
            name: "都匀市"
          },
          {
            code: "522702",
            name: "福泉市"
          },
          {
            code: "522722",
            name: "荔波县"
          },
          {
            code: "522723",
            name: "贵定县"
          },
          {
            code: "522725",
            name: "瓮安县"
          },
          {
            code: "522726",
            name: "独山县"
          },
          {
            code: "522727",
            name: "平塘县"
          },
          {
            code: "522728",
            name: "罗甸县"
          },
          {
            code: "522729",
            name: "长顺县"
          },
          {
            code: "522730",
            name: "龙里县"
          },
          {
            code: "522731",
            name: "惠水县"
          },
          {
            code: "522732",
            name: "三都水族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "53",
    name: "云南省",
    children: [
      {
        code: "5301",
        name: "昆明市",
        children: [
          {
            code: "530102",
            name: "五华区"
          },
          {
            code: "530103",
            name: "盘龙区"
          },
          {
            code: "530111",
            name: "官渡区"
          },
          {
            code: "530112",
            name: "西山区"
          },
          {
            code: "530113",
            name: "东川区"
          },
          {
            code: "530114",
            name: "呈贡区"
          },
          {
            code: "530115",
            name: "晋宁区"
          },
          {
            code: "530124",
            name: "富民县"
          },
          {
            code: "530125",
            name: "宜良县"
          },
          {
            code: "530126",
            name: "石林彝族自治县"
          },
          {
            code: "530127",
            name: "嵩明县"
          },
          {
            code: "530128",
            name: "禄劝彝族苗族自治县"
          },
          {
            code: "530129",
            name: "寻甸回族彝族自治县"
          },
          {
            code: "530181",
            name: "安宁市"
          }
        ]
      },
      {
        code: "5303",
        name: "曲靖市",
        children: [
          {
            code: "530302",
            name: "麒麟区"
          },
          {
            code: "530303",
            name: "沾益区"
          },
          {
            code: "530304",
            name: "马龙区"
          },
          {
            code: "530322",
            name: "陆良县"
          },
          {
            code: "530323",
            name: "师宗县"
          },
          {
            code: "530324",
            name: "罗平县"
          },
          {
            code: "530325",
            name: "富源县"
          },
          {
            code: "530326",
            name: "会泽县"
          },
          {
            code: "530381",
            name: "宣威市"
          }
        ]
      },
      {
        code: "5304",
        name: "玉溪市",
        children: [
          {
            code: "530402",
            name: "红塔区"
          },
          {
            code: "530403",
            name: "江川区"
          },
          {
            code: "530423",
            name: "通海县"
          },
          {
            code: "530424",
            name: "华宁县"
          },
          {
            code: "530425",
            name: "易门县"
          },
          {
            code: "530426",
            name: "峨山彝族自治县"
          },
          {
            code: "530427",
            name: "新平彝族傣族自治县"
          },
          {
            code: "530428",
            name: "元江哈尼族彝族傣族自治县"
          },
          {
            code: "530481",
            name: "澄江市"
          }
        ]
      },
      {
        code: "5305",
        name: "保山市",
        children: [
          {
            code: "530502",
            name: "隆阳区"
          },
          {
            code: "530521",
            name: "施甸县"
          },
          {
            code: "530523",
            name: "龙陵县"
          },
          {
            code: "530524",
            name: "昌宁县"
          },
          {
            code: "530581",
            name: "腾冲市"
          }
        ]
      },
      {
        code: "5306",
        name: "昭通市",
        children: [
          {
            code: "530602",
            name: "昭阳区"
          },
          {
            code: "530621",
            name: "鲁甸县"
          },
          {
            code: "530622",
            name: "巧家县"
          },
          {
            code: "530623",
            name: "盐津县"
          },
          {
            code: "530624",
            name: "大关县"
          },
          {
            code: "530625",
            name: "永善县"
          },
          {
            code: "530626",
            name: "绥江县"
          },
          {
            code: "530627",
            name: "镇雄县"
          },
          {
            code: "530628",
            name: "彝良县"
          },
          {
            code: "530629",
            name: "威信县"
          },
          {
            code: "530681",
            name: "水富市"
          }
        ]
      },
      {
        code: "5307",
        name: "丽江市",
        children: [
          {
            code: "530702",
            name: "古城区"
          },
          {
            code: "530721",
            name: "玉龙纳西族自治县"
          },
          {
            code: "530722",
            name: "永胜县"
          },
          {
            code: "530723",
            name: "华坪县"
          },
          {
            code: "530724",
            name: "宁蒗彝族自治县"
          }
        ]
      },
      {
        code: "5308",
        name: "普洱市",
        children: [
          {
            code: "530802",
            name: "思茅区"
          },
          {
            code: "530821",
            name: "宁洱哈尼族彝族自治县"
          },
          {
            code: "530822",
            name: "墨江哈尼族自治县"
          },
          {
            code: "530823",
            name: "景东彝族自治县"
          },
          {
            code: "530824",
            name: "景谷傣族彝族自治县"
          },
          {
            code: "530825",
            name: "镇沅彝族哈尼族拉祜族自治县"
          },
          {
            code: "530826",
            name: "江城哈尼族彝族自治县"
          },
          {
            code: "530827",
            name: "孟连傣族拉祜族佤族自治县"
          },
          {
            code: "530828",
            name: "澜沧拉祜族自治县"
          },
          {
            code: "530829",
            name: "西盟佤族自治县"
          }
        ]
      },
      {
        code: "5309",
        name: "临沧市",
        children: [
          {
            code: "530902",
            name: "临翔区"
          },
          {
            code: "530921",
            name: "凤庆县"
          },
          {
            code: "530922",
            name: "云县"
          },
          {
            code: "530923",
            name: "永德县"
          },
          {
            code: "530924",
            name: "镇康县"
          },
          {
            code: "530925",
            name: "双江拉祜族佤族布朗族傣族自治县"
          },
          {
            code: "530926",
            name: "耿马傣族佤族自治县"
          },
          {
            code: "530927",
            name: "沧源佤族自治县"
          }
        ]
      },
      {
        code: "5323",
        name: "楚雄彝族自治州",
        children: [
          {
            code: "532301",
            name: "楚雄市"
          },
          {
            code: "532302",
            name: "禄丰市"
          },
          {
            code: "532322",
            name: "双柏县"
          },
          {
            code: "532323",
            name: "牟定县"
          },
          {
            code: "532324",
            name: "南华县"
          },
          {
            code: "532325",
            name: "姚安县"
          },
          {
            code: "532326",
            name: "大姚县"
          },
          {
            code: "532327",
            name: "永仁县"
          },
          {
            code: "532328",
            name: "元谋县"
          },
          {
            code: "532329",
            name: "武定县"
          }
        ]
      },
      {
        code: "5325",
        name: "红河哈尼族彝族自治州",
        children: [
          {
            code: "532501",
            name: "个旧市"
          },
          {
            code: "532502",
            name: "开远市"
          },
          {
            code: "532503",
            name: "蒙自市"
          },
          {
            code: "532504",
            name: "弥勒市"
          },
          {
            code: "532523",
            name: "屏边苗族自治县"
          },
          {
            code: "532524",
            name: "建水县"
          },
          {
            code: "532525",
            name: "石屏县"
          },
          {
            code: "532527",
            name: "泸西县"
          },
          {
            code: "532528",
            name: "元阳县"
          },
          {
            code: "532529",
            name: "红河县"
          },
          {
            code: "532530",
            name: "金平苗族瑶族傣族自治县"
          },
          {
            code: "532531",
            name: "绿春县"
          },
          {
            code: "532532",
            name: "河口瑶族自治县"
          }
        ]
      },
      {
        code: "5326",
        name: "文山壮族苗族自治州",
        children: [
          {
            code: "532601",
            name: "文山市"
          },
          {
            code: "532622",
            name: "砚山县"
          },
          {
            code: "532623",
            name: "西畴县"
          },
          {
            code: "532624",
            name: "麻栗坡县"
          },
          {
            code: "532625",
            name: "马关县"
          },
          {
            code: "532626",
            name: "丘北县"
          },
          {
            code: "532627",
            name: "广南县"
          },
          {
            code: "532628",
            name: "富宁县"
          }
        ]
      },
      {
        code: "5328",
        name: "西双版纳傣族自治州",
        children: [
          {
            code: "532801",
            name: "景洪市"
          },
          {
            code: "532822",
            name: "勐海县"
          },
          {
            code: "532823",
            name: "勐腊县"
          }
        ]
      },
      {
        code: "5329",
        name: "大理白族自治州",
        children: [
          {
            code: "532901",
            name: "大理市"
          },
          {
            code: "532922",
            name: "漾濞彝族自治县"
          },
          {
            code: "532923",
            name: "祥云县"
          },
          {
            code: "532924",
            name: "宾川县"
          },
          {
            code: "532925",
            name: "弥渡县"
          },
          {
            code: "532926",
            name: "南涧彝族自治县"
          },
          {
            code: "532927",
            name: "巍山彝族回族自治县"
          },
          {
            code: "532928",
            name: "永平县"
          },
          {
            code: "532929",
            name: "云龙县"
          },
          {
            code: "532930",
            name: "洱源县"
          },
          {
            code: "532931",
            name: "剑川县"
          },
          {
            code: "532932",
            name: "鹤庆县"
          }
        ]
      },
      {
        code: "5331",
        name: "德宏傣族景颇族自治州",
        children: [
          {
            code: "533102",
            name: "瑞丽市"
          },
          {
            code: "533103",
            name: "芒市"
          },
          {
            code: "533122",
            name: "梁河县"
          },
          {
            code: "533123",
            name: "盈江县"
          },
          {
            code: "533124",
            name: "陇川县"
          }
        ]
      },
      {
        code: "5333",
        name: "怒江傈僳族自治州",
        children: [
          {
            code: "533301",
            name: "泸水市"
          },
          {
            code: "533323",
            name: "福贡县"
          },
          {
            code: "533324",
            name: "贡山独龙族怒族自治县"
          },
          {
            code: "533325",
            name: "兰坪白族普米族自治县"
          }
        ]
      },
      {
        code: "5334",
        name: "迪庆藏族自治州",
        children: [
          {
            code: "533401",
            name: "香格里拉市"
          },
          {
            code: "533422",
            name: "德钦县"
          },
          {
            code: "533423",
            name: "维西傈僳族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "54",
    name: "西藏自治区",
    children: [
      {
        code: "5401",
        name: "拉萨市",
        children: [
          {
            code: "540102",
            name: "城关区"
          },
          {
            code: "540103",
            name: "堆龙德庆区"
          },
          {
            code: "540104",
            name: "达孜区"
          },
          {
            code: "540121",
            name: "林周县"
          },
          {
            code: "540122",
            name: "当雄县"
          },
          {
            code: "540123",
            name: "尼木县"
          },
          {
            code: "540124",
            name: "曲水县"
          },
          {
            code: "540127",
            name: "墨竹工卡县"
          },
          {
            code: "540171",
            name: "格尔木藏青工业园区"
          },
          {
            code: "540172",
            name: "拉萨经济技术开发区"
          },
          {
            code: "540173",
            name: "西藏文化旅游创意园区"
          },
          {
            code: "540174",
            name: "达孜工业园区"
          }
        ]
      },
      {
        code: "5402",
        name: "日喀则市",
        children: [
          {
            code: "540202",
            name: "桑珠孜区"
          },
          {
            code: "540221",
            name: "南木林县"
          },
          {
            code: "540222",
            name: "江孜县"
          },
          {
            code: "540223",
            name: "定日县"
          },
          {
            code: "540224",
            name: "萨迦县"
          },
          {
            code: "540225",
            name: "拉孜县"
          },
          {
            code: "540226",
            name: "昂仁县"
          },
          {
            code: "540227",
            name: "谢通门县"
          },
          {
            code: "540228",
            name: "白朗县"
          },
          {
            code: "540229",
            name: "仁布县"
          },
          {
            code: "540230",
            name: "康马县"
          },
          {
            code: "540231",
            name: "定结县"
          },
          {
            code: "540232",
            name: "仲巴县"
          },
          {
            code: "540233",
            name: "亚东县"
          },
          {
            code: "540234",
            name: "吉隆县"
          },
          {
            code: "540235",
            name: "聂拉木县"
          },
          {
            code: "540236",
            name: "萨嘎县"
          },
          {
            code: "540237",
            name: "岗巴县"
          }
        ]
      },
      {
        code: "5403",
        name: "昌都市",
        children: [
          {
            code: "540302",
            name: "卡若区"
          },
          {
            code: "540321",
            name: "江达县"
          },
          {
            code: "540322",
            name: "贡觉县"
          },
          {
            code: "540323",
            name: "类乌齐县"
          },
          {
            code: "540324",
            name: "丁青县"
          },
          {
            code: "540325",
            name: "察雅县"
          },
          {
            code: "540326",
            name: "八宿县"
          },
          {
            code: "540327",
            name: "左贡县"
          },
          {
            code: "540328",
            name: "芒康县"
          },
          {
            code: "540329",
            name: "洛隆县"
          },
          {
            code: "540330",
            name: "边坝县"
          }
        ]
      },
      {
        code: "5404",
        name: "林芝市",
        children: [
          {
            code: "540402",
            name: "巴宜区"
          },
          {
            code: "540421",
            name: "工布江达县"
          },
          {
            code: "540423",
            name: "墨脱县"
          },
          {
            code: "540424",
            name: "波密县"
          },
          {
            code: "540425",
            name: "察隅县"
          },
          {
            code: "540426",
            name: "朗县"
          },
          {
            code: "540481",
            name: "米林市"
          }
        ]
      },
      {
        code: "5405",
        name: "山南市",
        children: [
          {
            code: "540502",
            name: "乃东区"
          },
          {
            code: "540521",
            name: "扎囊县"
          },
          {
            code: "540522",
            name: "贡嘎县"
          },
          {
            code: "540523",
            name: "桑日县"
          },
          {
            code: "540524",
            name: "琼结县"
          },
          {
            code: "540525",
            name: "曲松县"
          },
          {
            code: "540526",
            name: "措美县"
          },
          {
            code: "540527",
            name: "洛扎县"
          },
          {
            code: "540528",
            name: "加查县"
          },
          {
            code: "540529",
            name: "隆子县"
          },
          {
            code: "540531",
            name: "浪卡子县"
          },
          {
            code: "540581",
            name: "错那市"
          }
        ]
      },
      {
        code: "5406",
        name: "那曲市",
        children: [
          {
            code: "540602",
            name: "色尼区"
          },
          {
            code: "540621",
            name: "嘉黎县"
          },
          {
            code: "540622",
            name: "比如县"
          },
          {
            code: "540623",
            name: "聂荣县"
          },
          {
            code: "540624",
            name: "安多县"
          },
          {
            code: "540625",
            name: "申扎县"
          },
          {
            code: "540626",
            name: "索县"
          },
          {
            code: "540627",
            name: "班戈县"
          },
          {
            code: "540628",
            name: "巴青县"
          },
          {
            code: "540629",
            name: "尼玛县"
          },
          {
            code: "540630",
            name: "双湖县"
          }
        ]
      },
      {
        code: "5425",
        name: "阿里地区",
        children: [
          {
            code: "542521",
            name: "普兰县"
          },
          {
            code: "542522",
            name: "札达县"
          },
          {
            code: "542523",
            name: "噶尔县"
          },
          {
            code: "542524",
            name: "日土县"
          },
          {
            code: "542525",
            name: "革吉县"
          },
          {
            code: "542526",
            name: "改则县"
          },
          {
            code: "542527",
            name: "措勤县"
          }
        ]
      }
    ]
  },
  {
    code: "61",
    name: "陕西省",
    children: [
      {
        code: "6101",
        name: "西安市",
        children: [
          {
            code: "610102",
            name: "新城区"
          },
          {
            code: "610103",
            name: "碑林区"
          },
          {
            code: "610104",
            name: "莲湖区"
          },
          {
            code: "610111",
            name: "灞桥区"
          },
          {
            code: "610112",
            name: "未央区"
          },
          {
            code: "610113",
            name: "雁塔区"
          },
          {
            code: "610114",
            name: "阎良区"
          },
          {
            code: "610115",
            name: "临潼区"
          },
          {
            code: "610116",
            name: "长安区"
          },
          {
            code: "610117",
            name: "高陵区"
          },
          {
            code: "610118",
            name: "鄠邑区"
          },
          {
            code: "610122",
            name: "蓝田县"
          },
          {
            code: "610124",
            name: "周至县"
          }
        ]
      },
      {
        code: "6102",
        name: "铜川市",
        children: [
          {
            code: "610202",
            name: "王益区"
          },
          {
            code: "610203",
            name: "印台区"
          },
          {
            code: "610204",
            name: "耀州区"
          },
          {
            code: "610222",
            name: "宜君县"
          }
        ]
      },
      {
        code: "6103",
        name: "宝鸡市",
        children: [
          {
            code: "610302",
            name: "渭滨区"
          },
          {
            code: "610303",
            name: "金台区"
          },
          {
            code: "610304",
            name: "陈仓区"
          },
          {
            code: "610305",
            name: "凤翔区"
          },
          {
            code: "610323",
            name: "岐山县"
          },
          {
            code: "610324",
            name: "扶风县"
          },
          {
            code: "610326",
            name: "眉县"
          },
          {
            code: "610327",
            name: "陇县"
          },
          {
            code: "610328",
            name: "千阳县"
          },
          {
            code: "610329",
            name: "麟游县"
          },
          {
            code: "610330",
            name: "凤县"
          },
          {
            code: "610331",
            name: "太白县"
          }
        ]
      },
      {
        code: "6104",
        name: "咸阳市",
        children: [
          {
            code: "610402",
            name: "秦都区"
          },
          {
            code: "610403",
            name: "杨陵区"
          },
          {
            code: "610404",
            name: "渭城区"
          },
          {
            code: "610422",
            name: "三原县"
          },
          {
            code: "610423",
            name: "泾阳县"
          },
          {
            code: "610424",
            name: "乾县"
          },
          {
            code: "610425",
            name: "礼泉县"
          },
          {
            code: "610426",
            name: "永寿县"
          },
          {
            code: "610428",
            name: "长武县"
          },
          {
            code: "610429",
            name: "旬邑县"
          },
          {
            code: "610430",
            name: "淳化县"
          },
          {
            code: "610431",
            name: "武功县"
          },
          {
            code: "610481",
            name: "兴平市"
          },
          {
            code: "610482",
            name: "彬州市"
          }
        ]
      },
      {
        code: "6105",
        name: "渭南市",
        children: [
          {
            code: "610502",
            name: "临渭区"
          },
          {
            code: "610503",
            name: "华州区"
          },
          {
            code: "610522",
            name: "潼关县"
          },
          {
            code: "610523",
            name: "大荔县"
          },
          {
            code: "610524",
            name: "合阳县"
          },
          {
            code: "610525",
            name: "澄城县"
          },
          {
            code: "610526",
            name: "蒲城县"
          },
          {
            code: "610527",
            name: "白水县"
          },
          {
            code: "610528",
            name: "富平县"
          },
          {
            code: "610581",
            name: "韩城市"
          },
          {
            code: "610582",
            name: "华阴市"
          }
        ]
      },
      {
        code: "6106",
        name: "延安市",
        children: [
          {
            code: "610602",
            name: "宝塔区"
          },
          {
            code: "610603",
            name: "安塞区"
          },
          {
            code: "610621",
            name: "延长县"
          },
          {
            code: "610622",
            name: "延川县"
          },
          {
            code: "610625",
            name: "志丹县"
          },
          {
            code: "610626",
            name: "吴起县"
          },
          {
            code: "610627",
            name: "甘泉县"
          },
          {
            code: "610628",
            name: "富县"
          },
          {
            code: "610629",
            name: "洛川县"
          },
          {
            code: "610630",
            name: "宜川县"
          },
          {
            code: "610631",
            name: "黄龙县"
          },
          {
            code: "610632",
            name: "黄陵县"
          },
          {
            code: "610681",
            name: "子长市"
          }
        ]
      },
      {
        code: "6107",
        name: "汉中市",
        children: [
          {
            code: "610702",
            name: "汉台区"
          },
          {
            code: "610703",
            name: "南郑区"
          },
          {
            code: "610722",
            name: "城固县"
          },
          {
            code: "610723",
            name: "洋县"
          },
          {
            code: "610724",
            name: "西乡县"
          },
          {
            code: "610725",
            name: "勉县"
          },
          {
            code: "610726",
            name: "宁强县"
          },
          {
            code: "610727",
            name: "略阳县"
          },
          {
            code: "610728",
            name: "镇巴县"
          },
          {
            code: "610729",
            name: "留坝县"
          },
          {
            code: "610730",
            name: "佛坪县"
          }
        ]
      },
      {
        code: "6108",
        name: "榆林市",
        children: [
          {
            code: "610802",
            name: "榆阳区"
          },
          {
            code: "610803",
            name: "横山区"
          },
          {
            code: "610822",
            name: "府谷县"
          },
          {
            code: "610824",
            name: "靖边县"
          },
          {
            code: "610825",
            name: "定边县"
          },
          {
            code: "610826",
            name: "绥德县"
          },
          {
            code: "610827",
            name: "米脂县"
          },
          {
            code: "610828",
            name: "佳县"
          },
          {
            code: "610829",
            name: "吴堡县"
          },
          {
            code: "610830",
            name: "清涧县"
          },
          {
            code: "610831",
            name: "子洲县"
          },
          {
            code: "610881",
            name: "神木市"
          }
        ]
      },
      {
        code: "6109",
        name: "安康市",
        children: [
          {
            code: "610902",
            name: "汉滨区"
          },
          {
            code: "610921",
            name: "汉阴县"
          },
          {
            code: "610922",
            name: "石泉县"
          },
          {
            code: "610923",
            name: "宁陕县"
          },
          {
            code: "610924",
            name: "紫阳县"
          },
          {
            code: "610925",
            name: "岚皋县"
          },
          {
            code: "610926",
            name: "平利县"
          },
          {
            code: "610927",
            name: "镇坪县"
          },
          {
            code: "610929",
            name: "白河县"
          },
          {
            code: "610981",
            name: "旬阳市"
          }
        ]
      },
      {
        code: "6110",
        name: "商洛市",
        children: [
          {
            code: "611002",
            name: "商州区"
          },
          {
            code: "611021",
            name: "洛南县"
          },
          {
            code: "611022",
            name: "丹凤县"
          },
          {
            code: "611023",
            name: "商南县"
          },
          {
            code: "611024",
            name: "山阳县"
          },
          {
            code: "611025",
            name: "镇安县"
          },
          {
            code: "611026",
            name: "柞水县"
          }
        ]
      }
    ]
  },
  {
    code: "62",
    name: "甘肃省",
    children: [
      {
        code: "6201",
        name: "兰州市",
        children: [
          {
            code: "620102",
            name: "城关区"
          },
          {
            code: "620103",
            name: "七里河区"
          },
          {
            code: "620104",
            name: "西固区"
          },
          {
            code: "620105",
            name: "安宁区"
          },
          {
            code: "620111",
            name: "红古区"
          },
          {
            code: "620121",
            name: "永登县"
          },
          {
            code: "620122",
            name: "皋兰县"
          },
          {
            code: "620123",
            name: "榆中县"
          },
          {
            code: "620171",
            name: "兰州新区"
          }
        ]
      },
      {
        code: "6202",
        name: "嘉峪关市",
        children: [
          {
            code: "620201001",
            name: "雄关街道"
          },
          {
            code: "620201002",
            name: "钢城街道"
          },
          {
            code: "620201100",
            name: "新城镇"
          },
          {
            code: "620201101",
            name: "峪泉镇"
          },
          {
            code: "620201102",
            name: "文殊镇"
          }
        ]
      },
      {
        code: "6203",
        name: "金昌市",
        children: [
          {
            code: "620302",
            name: "金川区"
          },
          {
            code: "620321",
            name: "永昌县"
          }
        ]
      },
      {
        code: "6204",
        name: "白银市",
        children: [
          {
            code: "620402",
            name: "白银区"
          },
          {
            code: "620403",
            name: "平川区"
          },
          {
            code: "620421",
            name: "靖远县"
          },
          {
            code: "620422",
            name: "会宁县"
          },
          {
            code: "620423",
            name: "景泰县"
          }
        ]
      },
      {
        code: "6205",
        name: "天水市",
        children: [
          {
            code: "620502",
            name: "秦州区"
          },
          {
            code: "620503",
            name: "麦积区"
          },
          {
            code: "620521",
            name: "清水县"
          },
          {
            code: "620522",
            name: "秦安县"
          },
          {
            code: "620523",
            name: "甘谷县"
          },
          {
            code: "620524",
            name: "武山县"
          },
          {
            code: "620525",
            name: "张家川回族自治县"
          }
        ]
      },
      {
        code: "6206",
        name: "武威市",
        children: [
          {
            code: "620602",
            name: "凉州区"
          },
          {
            code: "620621",
            name: "民勤县"
          },
          {
            code: "620622",
            name: "古浪县"
          },
          {
            code: "620623",
            name: "天祝藏族自治县"
          }
        ]
      },
      {
        code: "6207",
        name: "张掖市",
        children: [
          {
            code: "620702",
            name: "甘州区"
          },
          {
            code: "620721",
            name: "肃南裕固族自治县"
          },
          {
            code: "620722",
            name: "民乐县"
          },
          {
            code: "620723",
            name: "临泽县"
          },
          {
            code: "620724",
            name: "高台县"
          },
          {
            code: "620725",
            name: "山丹县"
          }
        ]
      },
      {
        code: "6208",
        name: "平凉市",
        children: [
          {
            code: "620802",
            name: "崆峒区"
          },
          {
            code: "620821",
            name: "泾川县"
          },
          {
            code: "620822",
            name: "灵台县"
          },
          {
            code: "620823",
            name: "崇信县"
          },
          {
            code: "620825",
            name: "庄浪县"
          },
          {
            code: "620826",
            name: "静宁县"
          },
          {
            code: "620881",
            name: "华亭市"
          }
        ]
      },
      {
        code: "6209",
        name: "酒泉市",
        children: [
          {
            code: "620902",
            name: "肃州区"
          },
          {
            code: "620921",
            name: "金塔县"
          },
          {
            code: "620922",
            name: "瓜州县"
          },
          {
            code: "620923",
            name: "肃北蒙古族自治县"
          },
          {
            code: "620924",
            name: "阿克塞哈萨克族自治县"
          },
          {
            code: "620981",
            name: "玉门市"
          },
          {
            code: "620982",
            name: "敦煌市"
          }
        ]
      },
      {
        code: "6210",
        name: "庆阳市",
        children: [
          {
            code: "621002",
            name: "西峰区"
          },
          {
            code: "621021",
            name: "庆城县"
          },
          {
            code: "621022",
            name: "环县"
          },
          {
            code: "621023",
            name: "华池县"
          },
          {
            code: "621024",
            name: "合水县"
          },
          {
            code: "621025",
            name: "正宁县"
          },
          {
            code: "621026",
            name: "宁县"
          },
          {
            code: "621027",
            name: "镇原县"
          }
        ]
      },
      {
        code: "6211",
        name: "定西市",
        children: [
          {
            code: "621102",
            name: "安定区"
          },
          {
            code: "621121",
            name: "通渭县"
          },
          {
            code: "621122",
            name: "陇西县"
          },
          {
            code: "621123",
            name: "渭源县"
          },
          {
            code: "621124",
            name: "临洮县"
          },
          {
            code: "621125",
            name: "漳县"
          },
          {
            code: "621126",
            name: "岷县"
          }
        ]
      },
      {
        code: "6212",
        name: "陇南市",
        children: [
          {
            code: "621202",
            name: "武都区"
          },
          {
            code: "621221",
            name: "成县"
          },
          {
            code: "621222",
            name: "文县"
          },
          {
            code: "621223",
            name: "宕昌县"
          },
          {
            code: "621224",
            name: "康县"
          },
          {
            code: "621225",
            name: "西和县"
          },
          {
            code: "621226",
            name: "礼县"
          },
          {
            code: "621227",
            name: "徽县"
          },
          {
            code: "621228",
            name: "两当县"
          }
        ]
      },
      {
        code: "6229",
        name: "临夏回族自治州",
        children: [
          {
            code: "622901",
            name: "临夏市"
          },
          {
            code: "622921",
            name: "临夏县"
          },
          {
            code: "622922",
            name: "康乐县"
          },
          {
            code: "622923",
            name: "永靖县"
          },
          {
            code: "622924",
            name: "广河县"
          },
          {
            code: "622925",
            name: "和政县"
          },
          {
            code: "622926",
            name: "东乡族自治县"
          },
          {
            code: "622927",
            name: "积石山保安族东乡族撒拉族自治县"
          }
        ]
      },
      {
        code: "6230",
        name: "甘南藏族自治州",
        children: [
          {
            code: "623001",
            name: "合作市"
          },
          {
            code: "623021",
            name: "临潭县"
          },
          {
            code: "623022",
            name: "卓尼县"
          },
          {
            code: "623023",
            name: "舟曲县"
          },
          {
            code: "623024",
            name: "迭部县"
          },
          {
            code: "623025",
            name: "玛曲县"
          },
          {
            code: "623026",
            name: "碌曲县"
          },
          {
            code: "623027",
            name: "夏河县"
          }
        ]
      }
    ]
  },
  {
    code: "63",
    name: "青海省",
    children: [
      {
        code: "6301",
        name: "西宁市",
        children: [
          {
            code: "630102",
            name: "城东区"
          },
          {
            code: "630103",
            name: "城中区"
          },
          {
            code: "630104",
            name: "城西区"
          },
          {
            code: "630105",
            name: "城北区"
          },
          {
            code: "630106",
            name: "湟中区"
          },
          {
            code: "630121",
            name: "大通回族土族自治县"
          },
          {
            code: "630123",
            name: "湟源县"
          }
        ]
      },
      {
        code: "6302",
        name: "海东市",
        children: [
          {
            code: "630202",
            name: "乐都区"
          },
          {
            code: "630203",
            name: "平安区"
          },
          {
            code: "630222",
            name: "民和回族土族自治县"
          },
          {
            code: "630223",
            name: "互助土族自治县"
          },
          {
            code: "630224",
            name: "化隆回族自治县"
          },
          {
            code: "630225",
            name: "循化撒拉族自治县"
          }
        ]
      },
      {
        code: "6322",
        name: "海北藏族自治州",
        children: [
          {
            code: "632221",
            name: "门源回族自治县"
          },
          {
            code: "632222",
            name: "祁连县"
          },
          {
            code: "632223",
            name: "海晏县"
          },
          {
            code: "632224",
            name: "刚察县"
          }
        ]
      },
      {
        code: "6323",
        name: "黄南藏族自治州",
        children: [
          {
            code: "632301",
            name: "同仁市"
          },
          {
            code: "632322",
            name: "尖扎县"
          },
          {
            code: "632323",
            name: "泽库县"
          },
          {
            code: "632324",
            name: "河南蒙古族自治县"
          }
        ]
      },
      {
        code: "6325",
        name: "海南藏族自治州",
        children: [
          {
            code: "632521",
            name: "共和县"
          },
          {
            code: "632522",
            name: "同德县"
          },
          {
            code: "632523",
            name: "贵德县"
          },
          {
            code: "632524",
            name: "兴海县"
          },
          {
            code: "632525",
            name: "贵南县"
          }
        ]
      },
      {
        code: "6326",
        name: "果洛藏族自治州",
        children: [
          {
            code: "632621",
            name: "玛沁县"
          },
          {
            code: "632622",
            name: "班玛县"
          },
          {
            code: "632623",
            name: "甘德县"
          },
          {
            code: "632624",
            name: "达日县"
          },
          {
            code: "632625",
            name: "久治县"
          },
          {
            code: "632626",
            name: "玛多县"
          }
        ]
      },
      {
        code: "6327",
        name: "玉树藏族自治州",
        children: [
          {
            code: "632701",
            name: "玉树市"
          },
          {
            code: "632722",
            name: "杂多县"
          },
          {
            code: "632723",
            name: "称多县"
          },
          {
            code: "632724",
            name: "治多县"
          },
          {
            code: "632725",
            name: "囊谦县"
          },
          {
            code: "632726",
            name: "曲麻莱县"
          }
        ]
      },
      {
        code: "6328",
        name: "海西蒙古族藏族自治州",
        children: [
          {
            code: "632801",
            name: "格尔木市"
          },
          {
            code: "632802",
            name: "德令哈市"
          },
          {
            code: "632803",
            name: "茫崖市"
          },
          {
            code: "632821",
            name: "乌兰县"
          },
          {
            code: "632822",
            name: "都兰县"
          },
          {
            code: "632823",
            name: "天峻县"
          },
          {
            code: "632857",
            name: "大柴旦行政委员会"
          }
        ]
      }
    ]
  },
  {
    code: "64",
    name: "宁夏回族自治区",
    children: [
      {
        code: "6401",
        name: "银川市",
        children: [
          {
            code: "640104",
            name: "兴庆区"
          },
          {
            code: "640105",
            name: "西夏区"
          },
          {
            code: "640106",
            name: "金凤区"
          },
          {
            code: "640121",
            name: "永宁县"
          },
          {
            code: "640122",
            name: "贺兰县"
          },
          {
            code: "640181",
            name: "灵武市"
          }
        ]
      },
      {
        code: "6402",
        name: "石嘴山市",
        children: [
          {
            code: "640202",
            name: "大武口区"
          },
          {
            code: "640205",
            name: "惠农区"
          },
          {
            code: "640221",
            name: "平罗县"
          }
        ]
      },
      {
        code: "6403",
        name: "吴忠市",
        children: [
          {
            code: "640302",
            name: "利通区"
          },
          {
            code: "640303",
            name: "红寺堡区"
          },
          {
            code: "640323",
            name: "盐池县"
          },
          {
            code: "640324",
            name: "同心县"
          },
          {
            code: "640381",
            name: "青铜峡市"
          }
        ]
      },
      {
        code: "6404",
        name: "固原市",
        children: [
          {
            code: "640402",
            name: "原州区"
          },
          {
            code: "640422",
            name: "西吉县"
          },
          {
            code: "640423",
            name: "隆德县"
          },
          {
            code: "640424",
            name: "泾源县"
          },
          {
            code: "640425",
            name: "彭阳县"
          }
        ]
      },
      {
        code: "6405",
        name: "中卫市",
        children: [
          {
            code: "640502",
            name: "沙坡头区"
          },
          {
            code: "640521",
            name: "中宁县"
          },
          {
            code: "640522",
            name: "海原县"
          }
        ]
      }
    ]
  },
  {
    code: "65",
    name: "新疆维吾尔自治区",
    children: [
      {
        code: "6501",
        name: "乌鲁木齐市",
        children: [
          {
            code: "650102",
            name: "天山区"
          },
          {
            code: "650103",
            name: "沙依巴克区"
          },
          {
            code: "650104",
            name: "新市区"
          },
          {
            code: "650105",
            name: "水磨沟区"
          },
          {
            code: "650106",
            name: "头屯河区"
          },
          {
            code: "650107",
            name: "达坂城区"
          },
          {
            code: "650109",
            name: "米东区"
          },
          {
            code: "650121",
            name: "乌鲁木齐县"
          }
        ]
      },
      {
        code: "6502",
        name: "克拉玛依市",
        children: [
          {
            code: "650202",
            name: "独山子区"
          },
          {
            code: "650203",
            name: "克拉玛依区"
          },
          {
            code: "650204",
            name: "白碱滩区"
          },
          {
            code: "650205",
            name: "乌尔禾区"
          }
        ]
      },
      {
        code: "6504",
        name: "吐鲁番市",
        children: [
          {
            code: "650402",
            name: "高昌区"
          },
          {
            code: "650421",
            name: "鄯善县"
          },
          {
            code: "650422",
            name: "托克逊县"
          }
        ]
      },
      {
        code: "6505",
        name: "哈密市",
        children: [
          {
            code: "650502",
            name: "伊州区"
          },
          {
            code: "650521",
            name: "巴里坤哈萨克自治县"
          },
          {
            code: "650522",
            name: "伊吾县"
          }
        ]
      },
      {
        code: "6523",
        name: "昌吉回族自治州",
        children: [
          {
            code: "652301",
            name: "昌吉市"
          },
          {
            code: "652302",
            name: "阜康市"
          },
          {
            code: "652323",
            name: "呼图壁县"
          },
          {
            code: "652324",
            name: "玛纳斯县"
          },
          {
            code: "652325",
            name: "奇台县"
          },
          {
            code: "652327",
            name: "吉木萨尔县"
          },
          {
            code: "652328",
            name: "木垒哈萨克自治县"
          }
        ]
      },
      {
        code: "6527",
        name: "博尔塔拉蒙古自治州",
        children: [
          {
            code: "652701",
            name: "博乐市"
          },
          {
            code: "652702",
            name: "阿拉山口市"
          },
          {
            code: "652722",
            name: "精河县"
          },
          {
            code: "652723",
            name: "温泉县"
          }
        ]
      },
      {
        code: "6528",
        name: "巴音郭楞蒙古自治州",
        children: [
          {
            code: "652801",
            name: "库尔勒市"
          },
          {
            code: "652822",
            name: "轮台县"
          },
          {
            code: "652823",
            name: "尉犁县"
          },
          {
            code: "652824",
            name: "若羌县"
          },
          {
            code: "652825",
            name: "且末县"
          },
          {
            code: "652826",
            name: "焉耆回族自治县"
          },
          {
            code: "652827",
            name: "和静县"
          },
          {
            code: "652828",
            name: "和硕县"
          },
          {
            code: "652829",
            name: "博湖县"
          }
        ]
      },
      {
        code: "6529",
        name: "阿克苏地区",
        children: [
          {
            code: "652901",
            name: "阿克苏市"
          },
          {
            code: "652902",
            name: "库车市"
          },
          {
            code: "652922",
            name: "温宿县"
          },
          {
            code: "652924",
            name: "沙雅县"
          },
          {
            code: "652925",
            name: "新和县"
          },
          {
            code: "652926",
            name: "拜城县"
          },
          {
            code: "652927",
            name: "乌什县"
          },
          {
            code: "652928",
            name: "阿瓦提县"
          },
          {
            code: "652929",
            name: "柯坪县"
          }
        ]
      },
      {
        code: "6530",
        name: "克孜勒苏柯尔克孜自治州",
        children: [
          {
            code: "653001",
            name: "阿图什市"
          },
          {
            code: "653022",
            name: "阿克陶县"
          },
          {
            code: "653023",
            name: "阿合奇县"
          },
          {
            code: "653024",
            name: "乌恰县"
          }
        ]
      },
      {
        code: "6531",
        name: "喀什地区",
        children: [
          {
            code: "653101",
            name: "喀什市"
          },
          {
            code: "653121",
            name: "疏附县"
          },
          {
            code: "653122",
            name: "疏勒县"
          },
          {
            code: "653123",
            name: "英吉沙县"
          },
          {
            code: "653124",
            name: "泽普县"
          },
          {
            code: "653125",
            name: "莎车县"
          },
          {
            code: "653126",
            name: "叶城县"
          },
          {
            code: "653127",
            name: "麦盖提县"
          },
          {
            code: "653128",
            name: "岳普湖县"
          },
          {
            code: "653129",
            name: "伽师县"
          },
          {
            code: "653130",
            name: "巴楚县"
          },
          {
            code: "653131",
            name: "塔什库尔干塔吉克自治县"
          }
        ]
      },
      {
        code: "6532",
        name: "和田地区",
        children: [
          {
            code: "653201",
            name: "和田市"
          },
          {
            code: "653221",
            name: "和田县"
          },
          {
            code: "653222",
            name: "墨玉县"
          },
          {
            code: "653223",
            name: "皮山县"
          },
          {
            code: "653224",
            name: "洛浦县"
          },
          {
            code: "653225",
            name: "策勒县"
          },
          {
            code: "653226",
            name: "于田县"
          },
          {
            code: "653227",
            name: "民丰县"
          }
        ]
      },
      {
        code: "6540",
        name: "伊犁哈萨克自治州",
        children: [
          {
            code: "654002",
            name: "伊宁市"
          },
          {
            code: "654003",
            name: "奎屯市"
          },
          {
            code: "654004",
            name: "霍尔果斯市"
          },
          {
            code: "654021",
            name: "伊宁县"
          },
          {
            code: "654022",
            name: "察布查尔锡伯自治县"
          },
          {
            code: "654023",
            name: "霍城县"
          },
          {
            code: "654024",
            name: "巩留县"
          },
          {
            code: "654025",
            name: "新源县"
          },
          {
            code: "654026",
            name: "昭苏县"
          },
          {
            code: "654027",
            name: "特克斯县"
          },
          {
            code: "654028",
            name: "尼勒克县"
          }
        ]
      },
      {
        code: "6542",
        name: "塔城地区",
        children: [
          {
            code: "654201",
            name: "塔城市"
          },
          {
            code: "654202",
            name: "乌苏市"
          },
          {
            code: "654203",
            name: "沙湾市"
          },
          {
            code: "654221",
            name: "额敏县"
          },
          {
            code: "654224",
            name: "托里县"
          },
          {
            code: "654225",
            name: "裕民县"
          },
          {
            code: "654226",
            name: "和布克赛尔蒙古自治县"
          }
        ]
      },
      {
        code: "6543",
        name: "阿勒泰地区",
        children: [
          {
            code: "654301",
            name: "阿勒泰市"
          },
          {
            code: "654321",
            name: "布尔津县"
          },
          {
            code: "654322",
            name: "富蕴县"
          },
          {
            code: "654323",
            name: "福海县"
          },
          {
            code: "654324",
            name: "哈巴河县"
          },
          {
            code: "654325",
            name: "青河县"
          },
          {
            code: "654326",
            name: "吉木乃县"
          }
        ]
      },
      {
        code: "6590",
        name: "自治区直辖县级行政区划",
        children: [
          {
            code: "659001",
            name: "石河子市"
          },
          {
            code: "659002",
            name: "阿拉尔市"
          },
          {
            code: "659003",
            name: "图木舒克市"
          },
          {
            code: "659004",
            name: "五家渠市"
          },
          {
            code: "659005",
            name: "北屯市"
          },
          {
            code: "659006",
            name: "铁门关市"
          },
          {
            code: "659007",
            name: "双河市"
          },
          {
            code: "659008",
            name: "可克达拉市"
          },
          {
            code: "659009",
            name: "昆玉市"
          },
          {
            code: "659010",
            name: "胡杨河市"
          },
          {
            code: "659011",
            name: "新星市"
          },
          {
            code: "659012",
            name: "白杨市"
          }
        ]
      }
    ]
  }
], b1 = /* @__PURE__ */ F({
  __name: "index",
  emits: ["change"],
  setup(e, { emit: a }) {
    const n = y(""), o = y(""), t = y(""), r = y(A2), i = y([]), s = y([]), h = a;
    return R(
      () => n.value,
      (m) => {
        if (m) {
          const v = r.value.find((f) => f.code === n.value).children;
          i.value = v;
        }
        o.value = "", t.value = "";
      }
    ), R(
      () => o.value,
      (m) => {
        if (m) {
          const v = i.value.find((f) => f.code === o.value).children;
          s.value = v;
        }
        t.value = "";
      }
    ), R(
      () => t.value,
      (m) => {
        if (!m)
          return;
        const v = {
          code: n.value,
          name: n.value && A2.find(($) => $.code === n.value).name
        }, f = {
          code: o.value,
          name: o.value && i.value.find(($) => $.code === o.value).name
        }, C = {
          code: t.value,
          name: t.value && s.value.find(($) => $.code === m).name
        };
        h("change", {
          province: v,
          city: f,
          area: C
        });
      }
    ), (m, v) => {
      const f = M("el-option"), C = M("el-select");
      return c(), l("div", null, [
        x(C, {
          clearable: "",
          placeholder: "请选择省份",
          modelValue: n.value,
          "onUpdate:modelValue": v[0] || (v[0] = ($) => n.value = $)
        }, {
          default: z(() => [
            (c(!0), l(
              B,
              null,
              P(r.value, ($) => (c(), b(f, {
                key: $.code,
                value: $.code,
                label: $.name
              }, null, 8, ["value", "label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        x(C, {
          clearable: "",
          disabled: !n.value,
          style: { margin: "0 10px" },
          placeholder: "请选择城市",
          modelValue: o.value,
          "onUpdate:modelValue": v[1] || (v[1] = ($) => o.value = $)
        }, {
          default: z(() => [
            (c(!0), l(
              B,
              null,
              P(i.value, ($) => (c(), b(f, {
                key: $.code,
                value: $.code,
                label: $.name
              }, null, 8, ["value", "label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled", "modelValue"]),
        x(C, {
          clearable: "",
          disabled: !n.value || !o.value,
          placeholder: "请选择区域",
          modelValue: t.value,
          "onUpdate:modelValue": v[2] || (v[2] = ($) => t.value = $)
        }, {
          default: z(() => [
            (c(!0), l(
              B,
              null,
              P(s.value, ($) => (c(), b(f, {
                key: $.code,
                value: $.code,
                label: $.name
              }, null, 8, ["value", "label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled", "modelValue"])
      ]);
    };
  }
}), M1 = {
  install(e) {
    e.component("m-choose-area", b1);
  }
};
/*! Element Plus Icons Vue v2.1.0 */
var H1 = {
  name: "AddLocation"
}, _ = (e, a) => {
  let n = e.__vccOpts || e;
  for (let [o, t] of a)
    n[o] = t;
  return n;
}, V1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, A1 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), B1 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), L1 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
  },
  null,
  -1
  /* HOISTED */
), S1 = [
  A1,
  B1,
  L1
];
function T1(e, a, n, o, t, r) {
  return c(), l("svg", V1, S1);
}
var k1 = /* @__PURE__ */ _(H1, [["render", T1], ["__file", "add-location.vue"]]), O1 = {
  name: "Aim"
}, j1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, P1 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), I1 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
  },
  null,
  -1
  /* HOISTED */
), F1 = [
  P1,
  I1
];
function D1(e, a, n, o, t, r) {
  return c(), l("svg", j1, F1);
}
var q1 = /* @__PURE__ */ _(O1, [["render", D1], ["__file", "aim.vue"]]), E1 = {
  name: "AlarmClock"
}, N1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, R1 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
  },
  null,
  -1
  /* HOISTED */
), U1 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
  },
  null,
  -1
  /* HOISTED */
), G1 = [
  R1,
  U1
];
function K1(e, a, n, o, t, r) {
  return c(), l("svg", N1, G1);
}
var W1 = /* @__PURE__ */ _(E1, [["render", K1], ["__file", "alarm-clock.vue"]]), Z1 = {
  name: "Apple"
}, J1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Q1 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
  },
  null,
  -1
  /* HOISTED */
), Y1 = [
  Q1
];
function X1(e, a, n, o, t, r) {
  return c(), l("svg", J1, Y1);
}
var ea = /* @__PURE__ */ _(Z1, [["render", X1], ["__file", "apple.vue"]]), aa = {
  name: "ArrowDownBold"
}, na = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oa = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
  },
  null,
  -1
  /* HOISTED */
), ta = [
  oa
];
function da(e, a, n, o, t, r) {
  return c(), l("svg", na, ta);
}
var ra = /* @__PURE__ */ _(aa, [["render", da], ["__file", "arrow-down-bold.vue"]]), ca = {
  name: "ArrowDown"
}, la = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _a = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), ia = [
  _a
];
function sa(e, a, n, o, t, r) {
  return c(), l("svg", la, ia);
}
var ma = /* @__PURE__ */ _(ca, [["render", sa], ["__file", "arrow-down.vue"]]), ua = {
  name: "ArrowLeftBold"
}, ha = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, va = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
  },
  null,
  -1
  /* HOISTED */
), pa = [
  va
];
function fa(e, a, n, o, t, r) {
  return c(), l("svg", ha, pa);
}
var ga = /* @__PURE__ */ _(ua, [["render", fa], ["__file", "arrow-left-bold.vue"]]), wa = {
  name: "ArrowLeft"
}, $a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, za = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), xa = [
  za
];
function ya(e, a, n, o, t, r) {
  return c(), l("svg", $a, xa);
}
var Ca = /* @__PURE__ */ _(wa, [["render", ya], ["__file", "arrow-left.vue"]]), ba = {
  name: "ArrowRightBold"
}, Ma = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ha = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
  },
  null,
  -1
  /* HOISTED */
), Va = [
  Ha
];
function Aa(e, a, n, o, t, r) {
  return c(), l("svg", Ma, Va);
}
var Ba = /* @__PURE__ */ _(ba, [["render", Aa], ["__file", "arrow-right-bold.vue"]]), La = {
  name: "ArrowRight"
}, Sa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ta = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), ka = [
  Ta
];
function Oa(e, a, n, o, t, r) {
  return c(), l("svg", Sa, ka);
}
var ja = /* @__PURE__ */ _(La, [["render", Oa], ["__file", "arrow-right.vue"]]), Pa = {
  name: "ArrowUpBold"
}, Ia = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fa = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
  },
  null,
  -1
  /* HOISTED */
), Da = [
  Fa
];
function qa(e, a, n, o, t, r) {
  return c(), l("svg", Ia, Da);
}
var Ea = /* @__PURE__ */ _(Pa, [["render", qa], ["__file", "arrow-up-bold.vue"]]), Na = {
  name: "ArrowUp"
}, Ra = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ua = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), Ga = [
  Ua
];
function Ka(e, a, n, o, t, r) {
  return c(), l("svg", Ra, Ga);
}
var Wa = /* @__PURE__ */ _(Na, [["render", Ka], ["__file", "arrow-up.vue"]]), Za = {
  name: "Avatar"
}, Ja = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qa = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
  },
  null,
  -1
  /* HOISTED */
), Ya = [
  Qa
];
function Xa(e, a, n, o, t, r) {
  return c(), l("svg", Ja, Ya);
}
var e4 = /* @__PURE__ */ _(Za, [["render", Xa], ["__file", "avatar.vue"]]), a4 = {
  name: "Back"
}, n4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, o4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), t4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
  },
  null,
  -1
  /* HOISTED */
), d4 = [
  o4,
  t4
];
function r4(e, a, n, o, t, r) {
  return c(), l("svg", n4, d4);
}
var c4 = /* @__PURE__ */ _(a4, [["render", r4], ["__file", "back.vue"]]), l4 = {
  name: "Baseball"
}, _4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, i4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
  },
  null,
  -1
  /* HOISTED */
), s4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
  },
  null,
  -1
  /* HOISTED */
), m4 = [
  i4,
  s4
];
function u4(e, a, n, o, t, r) {
  return c(), l("svg", _4, m4);
}
var h4 = /* @__PURE__ */ _(l4, [["render", u4], ["__file", "baseball.vue"]]), v4 = {
  name: "Basketball"
}, p4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, f4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
  },
  null,
  -1
  /* HOISTED */
), g4 = [
  f4
];
function w4(e, a, n, o, t, r) {
  return c(), l("svg", p4, g4);
}
var $4 = /* @__PURE__ */ _(v4, [["render", w4], ["__file", "basketball.vue"]]), z4 = {
  name: "BellFilled"
}, x4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, y4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
  },
  null,
  -1
  /* HOISTED */
), C4 = [
  y4
];
function b4(e, a, n, o, t, r) {
  return c(), l("svg", x4, C4);
}
var M4 = /* @__PURE__ */ _(z4, [["render", b4], ["__file", "bell-filled.vue"]]), H4 = {
  name: "Bell"
}, V4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, A4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
  },
  null,
  -1
  /* HOISTED */
), B4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
  },
  null,
  -1
  /* HOISTED */
), L4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
  },
  null,
  -1
  /* HOISTED */
), S4 = [
  A4,
  B4,
  L4
];
function T4(e, a, n, o, t, r) {
  return c(), l("svg", V4, S4);
}
var k4 = /* @__PURE__ */ _(H4, [["render", T4], ["__file", "bell.vue"]]), O4 = {
  name: "Bicycle"
}, j4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, P4 = /* @__PURE__ */ u1('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>', 5), I4 = [
  P4
];
function F4(e, a, n, o, t, r) {
  return c(), l("svg", j4, I4);
}
var D4 = /* @__PURE__ */ _(O4, [["render", F4], ["__file", "bicycle.vue"]]), q4 = {
  name: "BottomLeft"
}, E4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, N4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
  },
  null,
  -1
  /* HOISTED */
), R4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
  },
  null,
  -1
  /* HOISTED */
), U4 = [
  N4,
  R4
];
function G4(e, a, n, o, t, r) {
  return c(), l("svg", E4, U4);
}
var K4 = /* @__PURE__ */ _(q4, [["render", G4], ["__file", "bottom-left.vue"]]), W4 = {
  name: "BottomRight"
}, Z4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, J4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
  },
  null,
  -1
  /* HOISTED */
), Q4 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
  },
  null,
  -1
  /* HOISTED */
), Y4 = [
  J4,
  Q4
];
function X4(e, a, n, o, t, r) {
  return c(), l("svg", Z4, Y4);
}
var en = /* @__PURE__ */ _(W4, [["render", X4], ["__file", "bottom-right.vue"]]), an = {
  name: "Bottom"
}, nn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, on = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
  },
  null,
  -1
  /* HOISTED */
), tn = [
  on
];
function dn(e, a, n, o, t, r) {
  return c(), l("svg", nn, tn);
}
var rn = /* @__PURE__ */ _(an, [["render", dn], ["__file", "bottom.vue"]]), cn = {
  name: "Bowl"
}, ln = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _n = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
  },
  null,
  -1
  /* HOISTED */
), sn = [
  _n
];
function mn(e, a, n, o, t, r) {
  return c(), l("svg", ln, sn);
}
var un = /* @__PURE__ */ _(cn, [["render", mn], ["__file", "bowl.vue"]]), hn = {
  name: "Box"
}, vn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pn = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
  },
  null,
  -1
  /* HOISTED */
), fn = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M64 320h896v64H64z"
  },
  null,
  -1
  /* HOISTED */
), gn = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
  },
  null,
  -1
  /* HOISTED */
), wn = [
  pn,
  fn,
  gn
];
function $n(e, a, n, o, t, r) {
  return c(), l("svg", vn, wn);
}
var zn = /* @__PURE__ */ _(hn, [["render", $n], ["__file", "box.vue"]]), xn = {
  name: "Briefcase"
}, yn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cn = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
  },
  null,
  -1
  /* HOISTED */
), bn = [
  Cn
];
function Mn(e, a, n, o, t, r) {
  return c(), l("svg", yn, bn);
}
var Hn = /* @__PURE__ */ _(xn, [["render", Mn], ["__file", "briefcase.vue"]]), Vn = {
  name: "BrushFilled"
}, An = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bn = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
  },
  null,
  -1
  /* HOISTED */
), Ln = [
  Bn
];
function Sn(e, a, n, o, t, r) {
  return c(), l("svg", An, Ln);
}
var Tn = /* @__PURE__ */ _(Vn, [["render", Sn], ["__file", "brush-filled.vue"]]), kn = {
  name: "Brush"
}, On = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jn = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
  },
  null,
  -1
  /* HOISTED */
), Pn = [
  jn
];
function In(e, a, n, o, t, r) {
  return c(), l("svg", On, Pn);
}
var Fn = /* @__PURE__ */ _(kn, [["render", In], ["__file", "brush.vue"]]), Dn = {
  name: "Burger"
}, qn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, En = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
  },
  null,
  -1
  /* HOISTED */
), Nn = [
  En
];
function Rn(e, a, n, o, t, r) {
  return c(), l("svg", qn, Nn);
}
var Un = /* @__PURE__ */ _(Dn, [["render", Rn], ["__file", "burger.vue"]]), Gn = {
  name: "Calendar"
}, Kn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Wn = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), Zn = [
  Wn
];
function Jn(e, a, n, o, t, r) {
  return c(), l("svg", Kn, Zn);
}
var Qn = /* @__PURE__ */ _(Gn, [["render", Jn], ["__file", "calendar.vue"]]), Yn = {
  name: "CameraFilled"
}, Xn = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, e3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
  },
  null,
  -1
  /* HOISTED */
), a3 = [
  e3
];
function n3(e, a, n, o, t, r) {
  return c(), l("svg", Xn, a3);
}
var o3 = /* @__PURE__ */ _(Yn, [["render", n3], ["__file", "camera-filled.vue"]]), t3 = {
  name: "Camera"
}, d3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, r3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
  },
  null,
  -1
  /* HOISTED */
), c3 = [
  r3
];
function l3(e, a, n, o, t, r) {
  return c(), l("svg", d3, c3);
}
var _3 = /* @__PURE__ */ _(t3, [["render", l3], ["__file", "camera.vue"]]), i3 = {
  name: "CaretBottom"
}, s3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, m3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m192 384 320 384 320-384z"
  },
  null,
  -1
  /* HOISTED */
), u3 = [
  m3
];
function h3(e, a, n, o, t, r) {
  return c(), l("svg", s3, u3);
}
var v3 = /* @__PURE__ */ _(i3, [["render", h3], ["__file", "caret-bottom.vue"]]), p3 = {
  name: "CaretLeft"
}, f3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, g3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M672 192 288 511.936 672 832z"
  },
  null,
  -1
  /* HOISTED */
), w3 = [
  g3
];
function $3(e, a, n, o, t, r) {
  return c(), l("svg", f3, w3);
}
var z3 = /* @__PURE__ */ _(p3, [["render", $3], ["__file", "caret-left.vue"]]), x3 = {
  name: "CaretRight"
}, y3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, C3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), b3 = [
  C3
];
function M3(e, a, n, o, t, r) {
  return c(), l("svg", y3, b3);
}
var H3 = /* @__PURE__ */ _(x3, [["render", M3], ["__file", "caret-right.vue"]]), V3 = {
  name: "CaretTop"
}, A3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, B3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 320 192 704h639.936z"
  },
  null,
  -1
  /* HOISTED */
), L3 = [
  B3
];
function S3(e, a, n, o, t, r) {
  return c(), l("svg", A3, L3);
}
var T3 = /* @__PURE__ */ _(V3, [["render", S3], ["__file", "caret-top.vue"]]), k3 = {
  name: "Cellphone"
}, O3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, j3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
  },
  null,
  -1
  /* HOISTED */
), P3 = [
  j3
];
function I3(e, a, n, o, t, r) {
  return c(), l("svg", O3, P3);
}
var F3 = /* @__PURE__ */ _(k3, [["render", I3], ["__file", "cellphone.vue"]]), D3 = {
  name: "ChatDotRound"
}, q3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, E3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
  },
  null,
  -1
  /* HOISTED */
), N3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), R3 = [
  E3,
  N3
];
function U3(e, a, n, o, t, r) {
  return c(), l("svg", q3, R3);
}
var G3 = /* @__PURE__ */ _(D3, [["render", U3], ["__file", "chat-dot-round.vue"]]), K3 = {
  name: "ChatDotSquare"
}, W3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Z3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
  },
  null,
  -1
  /* HOISTED */
), J3 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), Q3 = [
  Z3,
  J3
];
function Y3(e, a, n, o, t, r) {
  return c(), l("svg", W3, Q3);
}
var X3 = /* @__PURE__ */ _(K3, [["render", Y3], ["__file", "chat-dot-square.vue"]]), eo = {
  name: "ChatLineRound"
}, ao = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, no = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
  },
  null,
  -1
  /* HOISTED */
), oo = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), to = [
  no,
  oo
];
function ro(e, a, n, o, t, r) {
  return c(), l("svg", ao, to);
}
var co = /* @__PURE__ */ _(eo, [["render", ro], ["__file", "chat-line-round.vue"]]), lo = {
  name: "ChatLineSquare"
}, _o = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, io = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
  },
  null,
  -1
  /* HOISTED */
), so = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), mo = [
  io,
  so
];
function uo(e, a, n, o, t, r) {
  return c(), l("svg", _o, mo);
}
var ho = /* @__PURE__ */ _(lo, [["render", uo], ["__file", "chat-line-square.vue"]]), vo = {
  name: "ChatRound"
}, po = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fo = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
  },
  null,
  -1
  /* HOISTED */
), go = [
  fo
];
function wo(e, a, n, o, t, r) {
  return c(), l("svg", po, go);
}
var $o = /* @__PURE__ */ _(vo, [["render", wo], ["__file", "chat-round.vue"]]), zo = {
  name: "ChatSquare"
}, xo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yo = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
  },
  null,
  -1
  /* HOISTED */
), Co = [
  yo
];
function bo(e, a, n, o, t, r) {
  return c(), l("svg", xo, Co);
}
var Mo = /* @__PURE__ */ _(zo, [["render", bo], ["__file", "chat-square.vue"]]), Ho = {
  name: "Check"
}, Vo = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ao = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
  },
  null,
  -1
  /* HOISTED */
), Bo = [
  Ao
];
function Lo(e, a, n, o, t, r) {
  return c(), l("svg", Vo, Bo);
}
var So = /* @__PURE__ */ _(Ho, [["render", Lo], ["__file", "check.vue"]]), To = {
  name: "Checked"
}, ko = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Oo = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
  },
  null,
  -1
  /* HOISTED */
), jo = [
  Oo
];
function Po(e, a, n, o, t, r) {
  return c(), l("svg", ko, jo);
}
var Io = /* @__PURE__ */ _(To, [["render", Po], ["__file", "checked.vue"]]), Fo = {
  name: "Cherry"
}, Do = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qo = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
  },
  null,
  -1
  /* HOISTED */
), Eo = [
  qo
];
function No(e, a, n, o, t, r) {
  return c(), l("svg", Do, Eo);
}
var Ro = /* @__PURE__ */ _(Fo, [["render", No], ["__file", "cherry.vue"]]), Uo = {
  name: "Chicken"
}, Go = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ko = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
  },
  null,
  -1
  /* HOISTED */
), Wo = [
  Ko
];
function Zo(e, a, n, o, t, r) {
  return c(), l("svg", Go, Wo);
}
var Jo = /* @__PURE__ */ _(Uo, [["render", Zo], ["__file", "chicken.vue"]]), Qo = {
  name: "ChromeFilled"
}, Yo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, Xo = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z"
  },
  null,
  -1
  /* HOISTED */
), et = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z"
  },
  null,
  -1
  /* HOISTED */
), at = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zm117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z"
  },
  null,
  -1
  /* HOISTED */
), nt = [
  Xo,
  et,
  at
];
function ot(e, a, n, o, t, r) {
  return c(), l("svg", Yo, nt);
}
var tt = /* @__PURE__ */ _(Qo, [["render", ot], ["__file", "chrome-filled.vue"]]), dt = {
  name: "CircleCheckFilled"
}, rt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ct = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  },
  null,
  -1
  /* HOISTED */
), lt = [
  ct
];
function _t(e, a, n, o, t, r) {
  return c(), l("svg", rt, lt);
}
var it = /* @__PURE__ */ _(dt, [["render", _t], ["__file", "circle-check-filled.vue"]]), st = {
  name: "CircleCheck"
}, mt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ut = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), ht = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), vt = [
  ut,
  ht
];
function pt(e, a, n, o, t, r) {
  return c(), l("svg", mt, vt);
}
var ft = /* @__PURE__ */ _(st, [["render", pt], ["__file", "circle-check.vue"]]), gt = {
  name: "CircleCloseFilled"
}, wt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $t = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
  },
  null,
  -1
  /* HOISTED */
), zt = [
  $t
];
function xt(e, a, n, o, t, r) {
  return c(), l("svg", wt, zt);
}
var n2 = /* @__PURE__ */ _(gt, [["render", xt], ["__file", "circle-close-filled.vue"]]), yt = {
  name: "CircleClose"
}, Ct = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bt = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), Mt = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Ht = [
  bt,
  Mt
];
function Vt(e, a, n, o, t, r) {
  return c(), l("svg", Ct, Ht);
}
var At = /* @__PURE__ */ _(yt, [["render", Vt], ["__file", "circle-close.vue"]]), Bt = {
  name: "CirclePlusFilled"
}, Lt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, St = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
  },
  null,
  -1
  /* HOISTED */
), Tt = [
  St
];
function kt(e, a, n, o, t, r) {
  return c(), l("svg", Lt, Tt);
}
var Ot = /* @__PURE__ */ _(Bt, [["render", kt], ["__file", "circle-plus-filled.vue"]]), jt = {
  name: "CirclePlus"
}, Pt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, It = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), Ft = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
  },
  null,
  -1
  /* HOISTED */
), Dt = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), qt = [
  It,
  Ft,
  Dt
];
function Et(e, a, n, o, t, r) {
  return c(), l("svg", Pt, qt);
}
var Nt = /* @__PURE__ */ _(jt, [["render", Et], ["__file", "circle-plus.vue"]]), Rt = {
  name: "Clock"
}, Ut = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gt = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Kt = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Wt = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), Zt = [
  Gt,
  Kt,
  Wt
];
function Jt(e, a, n, o, t, r) {
  return c(), l("svg", Ut, Zt);
}
var Qt = /* @__PURE__ */ _(Rt, [["render", Jt], ["__file", "clock.vue"]]), Yt = {
  name: "CloseBold"
}, Xt = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, e6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
  },
  null,
  -1
  /* HOISTED */
), a6 = [
  e6
];
function n6(e, a, n, o, t, r) {
  return c(), l("svg", Xt, a6);
}
var o6 = /* @__PURE__ */ _(Yt, [["render", n6], ["__file", "close-bold.vue"]]), t6 = {
  name: "Close"
}, d6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, r6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), c6 = [
  r6
];
function l6(e, a, n, o, t, r) {
  return c(), l("svg", d6, c6);
}
var z0 = /* @__PURE__ */ _(t6, [["render", l6], ["__file", "close.vue"]]), _6 = {
  name: "Cloudy"
}, i6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, s6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
  },
  null,
  -1
  /* HOISTED */
), m6 = [
  s6
];
function u6(e, a, n, o, t, r) {
  return c(), l("svg", i6, m6);
}
var h6 = /* @__PURE__ */ _(_6, [["render", u6], ["__file", "cloudy.vue"]]), v6 = {
  name: "CoffeeCup"
}, p6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, f6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
  },
  null,
  -1
  /* HOISTED */
), g6 = [
  f6
];
function w6(e, a, n, o, t, r) {
  return c(), l("svg", p6, g6);
}
var $6 = /* @__PURE__ */ _(v6, [["render", w6], ["__file", "coffee-cup.vue"]]), z6 = {
  name: "Coffee"
}, x6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, y6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
  },
  null,
  -1
  /* HOISTED */
), C6 = [
  y6
];
function b6(e, a, n, o, t, r) {
  return c(), l("svg", x6, C6);
}
var M6 = /* @__PURE__ */ _(z6, [["render", b6], ["__file", "coffee.vue"]]), H6 = {
  name: "Coin"
}, V6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, A6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
  },
  null,
  -1
  /* HOISTED */
), B6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
  },
  null,
  -1
  /* HOISTED */
), L6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
  },
  null,
  -1
  /* HOISTED */
), S6 = [
  A6,
  B6,
  L6
];
function T6(e, a, n, o, t, r) {
  return c(), l("svg", V6, S6);
}
var k6 = /* @__PURE__ */ _(H6, [["render", T6], ["__file", "coin.vue"]]), O6 = {
  name: "ColdDrink"
}, j6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, P6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
  },
  null,
  -1
  /* HOISTED */
), I6 = [
  P6
];
function F6(e, a, n, o, t, r) {
  return c(), l("svg", j6, I6);
}
var D6 = /* @__PURE__ */ _(O6, [["render", F6], ["__file", "cold-drink.vue"]]), q6 = {
  name: "CollectionTag"
}, E6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, N6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), R6 = [
  N6
];
function U6(e, a, n, o, t, r) {
  return c(), l("svg", E6, R6);
}
var G6 = /* @__PURE__ */ _(q6, [["render", U6], ["__file", "collection-tag.vue"]]), K6 = {
  name: "Collection"
}, W6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Z6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
  },
  null,
  -1
  /* HOISTED */
), J6 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
  },
  null,
  -1
  /* HOISTED */
), Q6 = [
  Z6,
  J6
];
function Y6(e, a, n, o, t, r) {
  return c(), l("svg", W6, Q6);
}
var X6 = /* @__PURE__ */ _(K6, [["render", Y6], ["__file", "collection.vue"]]), ed = {
  name: "Comment"
}, ad = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, nd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
  },
  null,
  -1
  /* HOISTED */
), od = [
  nd
];
function td(e, a, n, o, t, r) {
  return c(), l("svg", ad, od);
}
var dd = /* @__PURE__ */ _(ed, [["render", td], ["__file", "comment.vue"]]), rd = {
  name: "Compass"
}, cd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ld = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), _d = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
  },
  null,
  -1
  /* HOISTED */
), id = [
  ld,
  _d
];
function sd(e, a, n, o, t, r) {
  return c(), l("svg", cd, id);
}
var md = /* @__PURE__ */ _(rd, [["render", sd], ["__file", "compass.vue"]]), ud = {
  name: "Connection"
}, hd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
  },
  null,
  -1
  /* HOISTED */
), pd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
  },
  null,
  -1
  /* HOISTED */
), fd = [
  vd,
  pd
];
function gd(e, a, n, o, t, r) {
  return c(), l("svg", hd, fd);
}
var wd = /* @__PURE__ */ _(ud, [["render", gd], ["__file", "connection.vue"]]), $d = {
  name: "Coordinate"
}, zd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h64v320h-64z"
  },
  null,
  -1
  /* HOISTED */
), yd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
  },
  null,
  -1
  /* HOISTED */
), Cd = [
  xd,
  yd
];
function bd(e, a, n, o, t, r) {
  return c(), l("svg", zd, Cd);
}
var Md = /* @__PURE__ */ _($d, [["render", bd], ["__file", "coordinate.vue"]]), Hd = {
  name: "CopyDocument"
}, Vd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ad = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
  },
  null,
  -1
  /* HOISTED */
), Bd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
  },
  null,
  -1
  /* HOISTED */
), Ld = [
  Ad,
  Bd
];
function Sd(e, a, n, o, t, r) {
  return c(), l("svg", Vd, Ld);
}
var Td = /* @__PURE__ */ _(Hd, [["render", Sd], ["__file", "copy-document.vue"]]), kd = {
  name: "Cpu"
}, Od = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
  },
  null,
  -1
  /* HOISTED */
), Pd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
  },
  null,
  -1
  /* HOISTED */
), Id = [
  jd,
  Pd
];
function Fd(e, a, n, o, t, r) {
  return c(), l("svg", Od, Id);
}
var Dd = /* @__PURE__ */ _(kd, [["render", Fd], ["__file", "cpu.vue"]]), qd = {
  name: "CreditCard"
}, Ed = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Nd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
  },
  null,
  -1
  /* HOISTED */
), Rd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
  },
  null,
  -1
  /* HOISTED */
), Ud = [
  Nd,
  Rd
];
function Gd(e, a, n, o, t, r) {
  return c(), l("svg", Ed, Ud);
}
var Kd = /* @__PURE__ */ _(qd, [["render", Gd], ["__file", "credit-card.vue"]]), Wd = {
  name: "Crop"
}, Zd = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
  },
  null,
  -1
  /* HOISTED */
), Qd = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
  },
  null,
  -1
  /* HOISTED */
), Yd = [
  Jd,
  Qd
];
function Xd(e, a, n, o, t, r) {
  return c(), l("svg", Zd, Yd);
}
var er = /* @__PURE__ */ _(Wd, [["render", Xd], ["__file", "crop.vue"]]), ar = {
  name: "DArrowLeft"
}, nr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, or = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
  },
  null,
  -1
  /* HOISTED */
), tr = [
  or
];
function dr(e, a, n, o, t, r) {
  return c(), l("svg", nr, tr);
}
var rr = /* @__PURE__ */ _(ar, [["render", dr], ["__file", "d-arrow-left.vue"]]), cr = {
  name: "DArrowRight"
}, lr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _r = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
  },
  null,
  -1
  /* HOISTED */
), ir = [
  _r
];
function sr(e, a, n, o, t, r) {
  return c(), l("svg", lr, ir);
}
var mr = /* @__PURE__ */ _(cr, [["render", sr], ["__file", "d-arrow-right.vue"]]), ur = {
  name: "DCaret"
}, hr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vr = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
  },
  null,
  -1
  /* HOISTED */
), pr = [
  vr
];
function fr(e, a, n, o, t, r) {
  return c(), l("svg", hr, pr);
}
var gr = /* @__PURE__ */ _(ur, [["render", fr], ["__file", "d-caret.vue"]]), wr = {
  name: "DataAnalysis"
}, $r = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, zr = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), xr = [
  zr
];
function yr(e, a, n, o, t, r) {
  return c(), l("svg", $r, xr);
}
var Cr = /* @__PURE__ */ _(wr, [["render", yr], ["__file", "data-analysis.vue"]]), br = {
  name: "DataBoard"
}, Mr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hr = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M32 128h960v64H32z"
  },
  null,
  -1
  /* HOISTED */
), Vr = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
  },
  null,
  -1
  /* HOISTED */
), Ar = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
  },
  null,
  -1
  /* HOISTED */
), Br = [
  Hr,
  Vr,
  Ar
];
function Lr(e, a, n, o, t, r) {
  return c(), l("svg", Mr, Br);
}
var Sr = /* @__PURE__ */ _(br, [["render", Lr], ["__file", "data-board.vue"]]), Tr = {
  name: "DataLine"
}, kr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Or = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
  },
  null,
  -1
  /* HOISTED */
), jr = [
  Or
];
function Pr(e, a, n, o, t, r) {
  return c(), l("svg", kr, jr);
}
var Ir = /* @__PURE__ */ _(Tr, [["render", Pr], ["__file", "data-line.vue"]]), Fr = {
  name: "DeleteFilled"
}, Dr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qr = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
  },
  null,
  -1
  /* HOISTED */
), Er = [
  qr
];
function Nr(e, a, n, o, t, r) {
  return c(), l("svg", Dr, Er);
}
var Rr = /* @__PURE__ */ _(Fr, [["render", Nr], ["__file", "delete-filled.vue"]]), Ur = {
  name: "DeleteLocation"
}, Gr = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Kr = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), Wr = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), Zr = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), Jr = [
  Kr,
  Wr,
  Zr
];
function Qr(e, a, n, o, t, r) {
  return c(), l("svg", Gr, Jr);
}
var Yr = /* @__PURE__ */ _(Ur, [["render", Qr], ["__file", "delete-location.vue"]]), Xr = {
  name: "Delete"
}, ec = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ac = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), nc = [
  ac
];
function oc(e, a, n, o, t, r) {
  return c(), l("svg", ec, nc);
}
var tc = /* @__PURE__ */ _(Xr, [["render", oc], ["__file", "delete.vue"]]), dc = {
  name: "Dessert"
}, rc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, cc = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), lc = [
  cc
];
function _c(e, a, n, o, t, r) {
  return c(), l("svg", rc, lc);
}
var ic = /* @__PURE__ */ _(dc, [["render", _c], ["__file", "dessert.vue"]]), sc = {
  name: "Discount"
}, mc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, uc = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
  },
  null,
  -1
  /* HOISTED */
), hc = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), vc = [
  uc,
  hc
];
function pc(e, a, n, o, t, r) {
  return c(), l("svg", mc, vc);
}
var fc = /* @__PURE__ */ _(sc, [["render", pc], ["__file", "discount.vue"]]), gc = {
  name: "DishDot"
}, wc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $c = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
  },
  null,
  -1
  /* HOISTED */
), zc = [
  $c
];
function xc(e, a, n, o, t, r) {
  return c(), l("svg", wc, zc);
}
var yc = /* @__PURE__ */ _(gc, [["render", xc], ["__file", "dish-dot.vue"]]), Cc = {
  name: "Dish"
}, bc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Mc = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), Hc = [
  Mc
];
function Vc(e, a, n, o, t, r) {
  return c(), l("svg", bc, Hc);
}
var Ac = /* @__PURE__ */ _(Cc, [["render", Vc], ["__file", "dish.vue"]]), Bc = {
  name: "DocumentAdd"
}, Lc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sc = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
  },
  null,
  -1
  /* HOISTED */
), Tc = [
  Sc
];
function kc(e, a, n, o, t, r) {
  return c(), l("svg", Lc, Tc);
}
var Oc = /* @__PURE__ */ _(Bc, [["render", kc], ["__file", "document-add.vue"]]), jc = {
  name: "DocumentChecked"
}, Pc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ic = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
  },
  null,
  -1
  /* HOISTED */
), Fc = [
  Ic
];
function Dc(e, a, n, o, t, r) {
  return c(), l("svg", Pc, Fc);
}
var qc = /* @__PURE__ */ _(jc, [["render", Dc], ["__file", "document-checked.vue"]]), Ec = {
  name: "DocumentCopy"
}, Nc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rc = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
  },
  null,
  -1
  /* HOISTED */
), Uc = [
  Rc
];
function Gc(e, a, n, o, t, r) {
  return c(), l("svg", Nc, Uc);
}
var Kc = /* @__PURE__ */ _(Ec, [["render", Gc], ["__file", "document-copy.vue"]]), Wc = {
  name: "DocumentDelete"
}, Zc = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jc = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
  },
  null,
  -1
  /* HOISTED */
), Qc = [
  Jc
];
function Yc(e, a, n, o, t, r) {
  return c(), l("svg", Zc, Qc);
}
var Xc = /* @__PURE__ */ _(Wc, [["render", Yc], ["__file", "document-delete.vue"]]), e8 = {
  name: "DocumentRemove"
}, a8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, n8 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
  },
  null,
  -1
  /* HOISTED */
), o8 = [
  n8
];
function t8(e, a, n, o, t, r) {
  return c(), l("svg", a8, o8);
}
var d8 = /* @__PURE__ */ _(e8, [["render", t8], ["__file", "document-remove.vue"]]), r8 = {
  name: "Document"
}, c8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, l8 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
  },
  null,
  -1
  /* HOISTED */
), _8 = [
  l8
];
function i8(e, a, n, o, t, r) {
  return c(), l("svg", c8, _8);
}
var s8 = /* @__PURE__ */ _(r8, [["render", i8], ["__file", "document.vue"]]), m8 = {
  name: "Download"
}, u8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, h8 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
  },
  null,
  -1
  /* HOISTED */
), v8 = [
  h8
];
function p8(e, a, n, o, t, r) {
  return c(), l("svg", u8, v8);
}
var f8 = /* @__PURE__ */ _(m8, [["render", p8], ["__file", "download.vue"]]), g8 = {
  name: "Drizzling"
}, w8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $8 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
  },
  null,
  -1
  /* HOISTED */
), z8 = [
  $8
];
function x8(e, a, n, o, t, r) {
  return c(), l("svg", w8, z8);
}
var y8 = /* @__PURE__ */ _(g8, [["render", x8], ["__file", "drizzling.vue"]]), C8 = {
  name: "EditPen"
}, b8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, M8 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"
  },
  null,
  -1
  /* HOISTED */
), H8 = [
  M8
];
function V8(e, a, n, o, t, r) {
  return c(), l("svg", b8, H8);
}
var A8 = /* @__PURE__ */ _(C8, [["render", V8], ["__file", "edit-pen.vue"]]), B8 = {
  name: "Edit"
}, L8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, S8 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
  },
  null,
  -1
  /* HOISTED */
), T8 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
  },
  null,
  -1
  /* HOISTED */
), k8 = [
  S8,
  T8
];
function O8(e, a, n, o, t, r) {
  return c(), l("svg", L8, k8);
}
var j8 = /* @__PURE__ */ _(B8, [["render", O8], ["__file", "edit.vue"]]), P8 = {
  name: "ElemeFilled"
}, I8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, F8 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
  },
  null,
  -1
  /* HOISTED */
), D8 = [
  F8
];
function q8(e, a, n, o, t, r) {
  return c(), l("svg", I8, D8);
}
var E8 = /* @__PURE__ */ _(P8, [["render", q8], ["__file", "eleme-filled.vue"]]), N8 = {
  name: "Eleme"
}, R8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, U8 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
  },
  null,
  -1
  /* HOISTED */
), G8 = [
  U8
];
function K8(e, a, n, o, t, r) {
  return c(), l("svg", R8, G8);
}
var W8 = /* @__PURE__ */ _(N8, [["render", K8], ["__file", "eleme.vue"]]), Z8 = {
  name: "ElementPlus"
}, J8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Q8 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"
  },
  null,
  -1
  /* HOISTED */
), Y8 = [
  Q8
];
function X8(e, a, n, o, t, r) {
  return c(), l("svg", J8, Y8);
}
var el = /* @__PURE__ */ _(Z8, [["render", X8], ["__file", "element-plus.vue"]]), al = {
  name: "Expand"
}, nl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ol = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
  },
  null,
  -1
  /* HOISTED */
), tl = [
  ol
];
function dl(e, a, n, o, t, r) {
  return c(), l("svg", nl, tl);
}
var rl = /* @__PURE__ */ _(al, [["render", dl], ["__file", "expand.vue"]]), cl = {
  name: "Failed"
}, ll = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _l = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
  },
  null,
  -1
  /* HOISTED */
), il = [
  _l
];
function sl(e, a, n, o, t, r) {
  return c(), l("svg", ll, il);
}
var ml = /* @__PURE__ */ _(cl, [["render", sl], ["__file", "failed.vue"]]), ul = {
  name: "Female"
}, hl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vl = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
  },
  null,
  -1
  /* HOISTED */
), pl = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
  },
  null,
  -1
  /* HOISTED */
), fl = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), gl = [
  vl,
  pl,
  fl
];
function wl(e, a, n, o, t, r) {
  return c(), l("svg", hl, gl);
}
var $l = /* @__PURE__ */ _(ul, [["render", wl], ["__file", "female.vue"]]), zl = {
  name: "Files"
}, xl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yl = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
  },
  null,
  -1
  /* HOISTED */
), Cl = [
  yl
];
function bl(e, a, n, o, t, r) {
  return c(), l("svg", xl, Cl);
}
var Ml = /* @__PURE__ */ _(zl, [["render", bl], ["__file", "files.vue"]]), Hl = {
  name: "Film"
}, Vl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Al = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Bl = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
  },
  null,
  -1
  /* HOISTED */
), Ll = [
  Al,
  Bl
];
function Sl(e, a, n, o, t, r) {
  return c(), l("svg", Vl, Ll);
}
var Tl = /* @__PURE__ */ _(Hl, [["render", Sl], ["__file", "film.vue"]]), kl = {
  name: "Filter"
}, Ol = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jl = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
  },
  null,
  -1
  /* HOISTED */
), Pl = [
  jl
];
function Il(e, a, n, o, t, r) {
  return c(), l("svg", Ol, Pl);
}
var Fl = /* @__PURE__ */ _(kl, [["render", Il], ["__file", "filter.vue"]]), Dl = {
  name: "Finished"
}, ql = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, El = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
  },
  null,
  -1
  /* HOISTED */
), Nl = [
  El
];
function Rl(e, a, n, o, t, r) {
  return c(), l("svg", ql, Nl);
}
var Ul = /* @__PURE__ */ _(Dl, [["render", Rl], ["__file", "finished.vue"]]), Gl = {
  name: "FirstAidKit"
}, Kl = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Wl = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
  },
  null,
  -1
  /* HOISTED */
), Zl = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Jl = [
  Wl,
  Zl
];
function Ql(e, a, n, o, t, r) {
  return c(), l("svg", Kl, Jl);
}
var Yl = /* @__PURE__ */ _(Gl, [["render", Ql], ["__file", "first-aid-kit.vue"]]), Xl = {
  name: "Flag"
}, e5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, a5 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
  },
  null,
  -1
  /* HOISTED */
), n5 = [
  a5
];
function o5(e, a, n, o, t, r) {
  return c(), l("svg", e5, n5);
}
var t5 = /* @__PURE__ */ _(Xl, [["render", o5], ["__file", "flag.vue"]]), d5 = {
  name: "Fold"
}, r5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, c5 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
  },
  null,
  -1
  /* HOISTED */
), l5 = [
  c5
];
function _5(e, a, n, o, t, r) {
  return c(), l("svg", r5, l5);
}
var i5 = /* @__PURE__ */ _(d5, [["render", _5], ["__file", "fold.vue"]]), s5 = {
  name: "FolderAdd"
}, m5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, u5 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
  },
  null,
  -1
  /* HOISTED */
), h5 = [
  u5
];
function v5(e, a, n, o, t, r) {
  return c(), l("svg", m5, h5);
}
var p5 = /* @__PURE__ */ _(s5, [["render", v5], ["__file", "folder-add.vue"]]), f5 = {
  name: "FolderChecked"
}, g5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, w5 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
  },
  null,
  -1
  /* HOISTED */
), $5 = [
  w5
];
function z5(e, a, n, o, t, r) {
  return c(), l("svg", g5, $5);
}
var x5 = /* @__PURE__ */ _(f5, [["render", z5], ["__file", "folder-checked.vue"]]), y5 = {
  name: "FolderDelete"
}, C5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, b5 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
  },
  null,
  -1
  /* HOISTED */
), M5 = [
  b5
];
function H5(e, a, n, o, t, r) {
  return c(), l("svg", C5, M5);
}
var V5 = /* @__PURE__ */ _(y5, [["render", H5], ["__file", "folder-delete.vue"]]), A5 = {
  name: "FolderOpened"
}, B5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, L5 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
  },
  null,
  -1
  /* HOISTED */
), S5 = [
  L5
];
function T5(e, a, n, o, t, r) {
  return c(), l("svg", B5, S5);
}
var k5 = /* @__PURE__ */ _(A5, [["render", T5], ["__file", "folder-opened.vue"]]), O5 = {
  name: "FolderRemove"
}, j5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, P5 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
  },
  null,
  -1
  /* HOISTED */
), I5 = [
  P5
];
function F5(e, a, n, o, t, r) {
  return c(), l("svg", j5, I5);
}
var D5 = /* @__PURE__ */ _(O5, [["render", F5], ["__file", "folder-remove.vue"]]), q5 = {
  name: "Folder"
}, E5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, N5 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), R5 = [
  N5
];
function U5(e, a, n, o, t, r) {
  return c(), l("svg", E5, R5);
}
var G5 = /* @__PURE__ */ _(q5, [["render", U5], ["__file", "folder.vue"]]), K5 = {
  name: "Food"
}, W5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Z5 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
  },
  null,
  -1
  /* HOISTED */
), J5 = [
  Z5
];
function Q5(e, a, n, o, t, r) {
  return c(), l("svg", W5, J5);
}
var Y5 = /* @__PURE__ */ _(K5, [["render", Q5], ["__file", "food.vue"]]), X5 = {
  name: "Football"
}, e_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, a_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
  },
  null,
  -1
  /* HOISTED */
), n_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
  },
  null,
  -1
  /* HOISTED */
), o_ = [
  a_,
  n_
];
function t_(e, a, n, o, t, r) {
  return c(), l("svg", e_, o_);
}
var d_ = /* @__PURE__ */ _(X5, [["render", t_], ["__file", "football.vue"]]), r_ = {
  name: "ForkSpoon"
}, c_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, l_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
  },
  null,
  -1
  /* HOISTED */
), __ = [
  l_
];
function i_(e, a, n, o, t, r) {
  return c(), l("svg", c_, __);
}
var s_ = /* @__PURE__ */ _(r_, [["render", i_], ["__file", "fork-spoon.vue"]]), m_ = {
  name: "Fries"
}, u_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, h_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
  },
  null,
  -1
  /* HOISTED */
), v_ = [
  h_
];
function p_(e, a, n, o, t, r) {
  return c(), l("svg", u_, v_);
}
var f_ = /* @__PURE__ */ _(m_, [["render", p_], ["__file", "fries.vue"]]), g_ = {
  name: "FullScreen"
}, w_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
  },
  null,
  -1
  /* HOISTED */
), z_ = [
  $_
];
function x_(e, a, n, o, t, r) {
  return c(), l("svg", w_, z_);
}
var y_ = /* @__PURE__ */ _(g_, [["render", x_], ["__file", "full-screen.vue"]]), C_ = {
  name: "GobletFull"
}, b_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, M_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
  },
  null,
  -1
  /* HOISTED */
), H_ = [
  M_
];
function V_(e, a, n, o, t, r) {
  return c(), l("svg", b_, H_);
}
var A_ = /* @__PURE__ */ _(C_, [["render", V_], ["__file", "goblet-full.vue"]]), B_ = {
  name: "GobletSquareFull"
}, L_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, S_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
  },
  null,
  -1
  /* HOISTED */
), T_ = [
  S_
];
function k_(e, a, n, o, t, r) {
  return c(), l("svg", L_, T_);
}
var O_ = /* @__PURE__ */ _(B_, [["render", k_], ["__file", "goblet-square-full.vue"]]), j_ = {
  name: "GobletSquare"
}, P_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, I_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
  },
  null,
  -1
  /* HOISTED */
), F_ = [
  I_
];
function D_(e, a, n, o, t, r) {
  return c(), l("svg", P_, F_);
}
var q_ = /* @__PURE__ */ _(j_, [["render", D_], ["__file", "goblet-square.vue"]]), E_ = {
  name: "Goblet"
}, N_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, R_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
  },
  null,
  -1
  /* HOISTED */
), U_ = [
  R_
];
function G_(e, a, n, o, t, r) {
  return c(), l("svg", N_, U_);
}
var K_ = /* @__PURE__ */ _(E_, [["render", G_], ["__file", "goblet.vue"]]), W_ = {
  name: "GoldMedal"
}, Z_ = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, J_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m772.13 452.84 53.86-351.81c1.32-10.01-1.17-18.68-7.49-26.02S804.35 64 795.01 64H228.99v-.01h-.06c-9.33 0-17.15 3.67-23.49 11.01s-8.83 16.01-7.49 26.02l53.87 351.89C213.54 505.73 193.59 568.09 192 640c2 90.67 33.17 166.17 93.5 226.5S421.33 957.99 512 960c90.67-2 166.17-33.17 226.5-93.5 60.33-60.34 91.49-135.83 93.5-226.5-1.59-71.94-21.56-134.32-59.87-187.16zM640.01 128h117.02l-39.01 254.02c-20.75-10.64-40.74-19.73-59.94-27.28-5.92-3-11.95-5.8-18.08-8.41V128h.01zM576 128v198.76c-13.18-2.58-26.74-4.43-40.67-5.55-8.07-.8-15.85-1.2-23.33-1.2-10.54 0-21.09.66-31.64 1.96a359.844 359.844 0 0 0-32.36 4.79V128h128zm-192 0h.04v218.3c-6.22 2.66-12.34 5.5-18.36 8.56-19.13 7.54-39.02 16.6-59.66 27.16L267.01 128H384zm308.99 692.99c-48 48-108.33 73-180.99 75.01-72.66-2.01-132.99-27.01-180.99-75.01S258.01 712.66 256 640c2.01-72.66 27.01-132.99 75.01-180.99 19.67-19.67 41.41-35.47 65.22-47.41 38.33-15.04 71.15-23.92 98.44-26.65 5.07-.41 10.2-.7 15.39-.88.63-.01 1.28-.03 1.91-.03.66 0 1.35.03 2.02.04 5.11.17 10.15.46 15.13.86 27.4 2.71 60.37 11.65 98.91 26.79 23.71 11.93 45.36 27.69 64.96 47.29 48 48 73 108.33 75.01 180.99-2.01 72.65-27.01 132.98-75.01 180.98z"
  },
  null,
  -1
  /* HOISTED */
), Q_ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M544 480H416v64h64v192h-64v64h192v-64h-64z"
  },
  null,
  -1
  /* HOISTED */
), Y_ = [
  J_,
  Q_
];
function X_(e, a, n, o, t, r) {
  return c(), l("svg", Z_, Y_);
}
var ei = /* @__PURE__ */ _(W_, [["render", X_], ["__file", "gold-medal.vue"]]), ai = {
  name: "GoodsFilled"
}, ni = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oi = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
  },
  null,
  -1
  /* HOISTED */
), ti = [
  oi
];
function di(e, a, n, o, t, r) {
  return c(), l("svg", ni, ti);
}
var ri = /* @__PURE__ */ _(ai, [["render", di], ["__file", "goods-filled.vue"]]), ci = {
  name: "Goods"
}, li = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _i = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
  },
  null,
  -1
  /* HOISTED */
), ii = [
  _i
];
function si(e, a, n, o, t, r) {
  return c(), l("svg", li, ii);
}
var mi = /* @__PURE__ */ _(ci, [["render", si], ["__file", "goods.vue"]]), ui = {
  name: "Grape"
}, hi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vi = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
  },
  null,
  -1
  /* HOISTED */
), pi = [
  vi
];
function fi(e, a, n, o, t, r) {
  return c(), l("svg", hi, pi);
}
var gi = /* @__PURE__ */ _(ui, [["render", fi], ["__file", "grape.vue"]]), wi = {
  name: "Grid"
}, $i = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, zi = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
  },
  null,
  -1
  /* HOISTED */
), xi = [
  zi
];
function yi(e, a, n, o, t, r) {
  return c(), l("svg", $i, xi);
}
var Ci = /* @__PURE__ */ _(wi, [["render", yi], ["__file", "grid.vue"]]), bi = {
  name: "Guide"
}, Mi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hi = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
  },
  null,
  -1
  /* HOISTED */
), Vi = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
  },
  null,
  -1
  /* HOISTED */
), Ai = [
  Hi,
  Vi
];
function Bi(e, a, n, o, t, r) {
  return c(), l("svg", Mi, Ai);
}
var Li = /* @__PURE__ */ _(bi, [["render", Bi], ["__file", "guide.vue"]]), Si = {
  name: "Handbag"
}, Ti = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, ki = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01zM421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5 35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5zM832 896H192V320h128v128h64V320h256v128h64V320h128v576z"
  },
  null,
  -1
  /* HOISTED */
), Oi = [
  ki
];
function ji(e, a, n, o, t, r) {
  return c(), l("svg", Ti, Oi);
}
var Pi = /* @__PURE__ */ _(Si, [["render", ji], ["__file", "handbag.vue"]]), Ii = {
  name: "Headset"
}, Fi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Di = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
  },
  null,
  -1
  /* HOISTED */
), qi = [
  Di
];
function Ei(e, a, n, o, t, r) {
  return c(), l("svg", Fi, qi);
}
var Ni = /* @__PURE__ */ _(Ii, [["render", Ei], ["__file", "headset.vue"]]), Ri = {
  name: "HelpFilled"
}, Ui = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gi = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
  },
  null,
  -1
  /* HOISTED */
), Ki = [
  Gi
];
function Wi(e, a, n, o, t, r) {
  return c(), l("svg", Ui, Ki);
}
var Zi = /* @__PURE__ */ _(Ri, [["render", Wi], ["__file", "help-filled.vue"]]), Ji = {
  name: "Help"
}, Qi = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Yi = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Xi = [
  Yi
];
function es(e, a, n, o, t, r) {
  return c(), l("svg", Qi, Xi);
}
var as = /* @__PURE__ */ _(Ji, [["render", es], ["__file", "help.vue"]]), ns = {
  name: "Hide"
}, os = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ts = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), ds = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), rs = [
  ts,
  ds
];
function cs(e, a, n, o, t, r) {
  return c(), l("svg", os, rs);
}
var ls = /* @__PURE__ */ _(ns, [["render", cs], ["__file", "hide.vue"]]), _s = {
  name: "Histogram"
}, is = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ss = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
  },
  null,
  -1
  /* HOISTED */
), ms = [
  ss
];
function us(e, a, n, o, t, r) {
  return c(), l("svg", is, ms);
}
var hs = /* @__PURE__ */ _(_s, [["render", us], ["__file", "histogram.vue"]]), vs = {
  name: "HomeFilled"
}, ps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fs = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
  },
  null,
  -1
  /* HOISTED */
), gs = [
  fs
];
function ws(e, a, n, o, t, r) {
  return c(), l("svg", ps, gs);
}
var $s = /* @__PURE__ */ _(vs, [["render", ws], ["__file", "home-filled.vue"]]), zs = {
  name: "HotWater"
}, xs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ys = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
  },
  null,
  -1
  /* HOISTED */
), Cs = [
  ys
];
function bs(e, a, n, o, t, r) {
  return c(), l("svg", xs, Cs);
}
var Ms = /* @__PURE__ */ _(zs, [["render", bs], ["__file", "hot-water.vue"]]), Hs = {
  name: "House"
}, Vs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, As = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
  },
  null,
  -1
  /* HOISTED */
), Bs = [
  As
];
function Ls(e, a, n, o, t, r) {
  return c(), l("svg", Vs, Bs);
}
var Ss = /* @__PURE__ */ _(Hs, [["render", Ls], ["__file", "house.vue"]]), Ts = {
  name: "IceCreamRound"
}, ks = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Os = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
  },
  null,
  -1
  /* HOISTED */
), js = [
  Os
];
function Ps(e, a, n, o, t, r) {
  return c(), l("svg", ks, js);
}
var Is = /* @__PURE__ */ _(Ts, [["render", Ps], ["__file", "ice-cream-round.vue"]]), Fs = {
  name: "IceCreamSquare"
}, Ds = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qs = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
  },
  null,
  -1
  /* HOISTED */
), Es = [
  qs
];
function Ns(e, a, n, o, t, r) {
  return c(), l("svg", Ds, Es);
}
var Rs = /* @__PURE__ */ _(Fs, [["render", Ns], ["__file", "ice-cream-square.vue"]]), Us = {
  name: "IceCream"
}, Gs = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ks = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
  },
  null,
  -1
  /* HOISTED */
), Ws = [
  Ks
];
function Zs(e, a, n, o, t, r) {
  return c(), l("svg", Gs, Ws);
}
var Js = /* @__PURE__ */ _(Us, [["render", Zs], ["__file", "ice-cream.vue"]]), Qs = {
  name: "IceDrink"
}, Ys = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xs = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
  },
  null,
  -1
  /* HOISTED */
), em = [
  Xs
];
function am(e, a, n, o, t, r) {
  return c(), l("svg", Ys, em);
}
var nm = /* @__PURE__ */ _(Qs, [["render", am], ["__file", "ice-drink.vue"]]), om = {
  name: "IceTea"
}, tm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dm = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
  },
  null,
  -1
  /* HOISTED */
), rm = [
  dm
];
function cm(e, a, n, o, t, r) {
  return c(), l("svg", tm, rm);
}
var lm = /* @__PURE__ */ _(om, [["render", cm], ["__file", "ice-tea.vue"]]), _m = {
  name: "InfoFilled"
}, im = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sm = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
  },
  null,
  -1
  /* HOISTED */
), mm = [
  sm
];
function um(e, a, n, o, t, r) {
  return c(), l("svg", im, mm);
}
var o2 = /* @__PURE__ */ _(_m, [["render", um], ["__file", "info-filled.vue"]]), hm = {
  name: "Iphone"
}, vm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pm = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
  },
  null,
  -1
  /* HOISTED */
), fm = [
  pm
];
function gm(e, a, n, o, t, r) {
  return c(), l("svg", vm, fm);
}
var wm = /* @__PURE__ */ _(hm, [["render", gm], ["__file", "iphone.vue"]]), $m = {
  name: "Key"
}, zm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xm = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
  },
  null,
  -1
  /* HOISTED */
), ym = [
  xm
];
function Cm(e, a, n, o, t, r) {
  return c(), l("svg", zm, ym);
}
var bm = /* @__PURE__ */ _($m, [["render", Cm], ["__file", "key.vue"]]), Mm = {
  name: "KnifeFork"
}, Hm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vm = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
  },
  null,
  -1
  /* HOISTED */
), Am = [
  Vm
];
function Bm(e, a, n, o, t, r) {
  return c(), l("svg", Hm, Am);
}
var Lm = /* @__PURE__ */ _(Mm, [["render", Bm], ["__file", "knife-fork.vue"]]), Sm = {
  name: "Lightning"
}, Tm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, km = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
  },
  null,
  -1
  /* HOISTED */
), Om = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
  },
  null,
  -1
  /* HOISTED */
), jm = [
  km,
  Om
];
function Pm(e, a, n, o, t, r) {
  return c(), l("svg", Tm, jm);
}
var Im = /* @__PURE__ */ _(Sm, [["render", Pm], ["__file", "lightning.vue"]]), Fm = {
  name: "Link"
}, Dm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qm = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
  },
  null,
  -1
  /* HOISTED */
), Em = [
  qm
];
function Nm(e, a, n, o, t, r) {
  return c(), l("svg", Dm, Em);
}
var Rm = /* @__PURE__ */ _(Fm, [["render", Nm], ["__file", "link.vue"]]), Um = {
  name: "List"
}, Gm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Km = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
  },
  null,
  -1
  /* HOISTED */
), Wm = [
  Km
];
function Zm(e, a, n, o, t, r) {
  return c(), l("svg", Gm, Wm);
}
var Jm = /* @__PURE__ */ _(Um, [["render", Zm], ["__file", "list.vue"]]), Qm = {
  name: "Loading"
}, Ym = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xm = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), eu = [
  Xm
];
function au(e, a, n, o, t, r) {
  return c(), l("svg", Ym, eu);
}
var nu = /* @__PURE__ */ _(Qm, [["render", au], ["__file", "loading.vue"]]), ou = {
  name: "LocationFilled"
}, tu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, du = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
  },
  null,
  -1
  /* HOISTED */
), ru = [
  du
];
function cu(e, a, n, o, t, r) {
  return c(), l("svg", tu, ru);
}
var lu = /* @__PURE__ */ _(ou, [["render", cu], ["__file", "location-filled.vue"]]), _u = {
  name: "LocationInformation"
}, iu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, su = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), mu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), uu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
  },
  null,
  -1
  /* HOISTED */
), hu = [
  su,
  mu,
  uu
];
function vu(e, a, n, o, t, r) {
  return c(), l("svg", iu, hu);
}
var pu = /* @__PURE__ */ _(_u, [["render", vu], ["__file", "location-information.vue"]]), fu = {
  name: "Location"
}, gu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), $u = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
  },
  null,
  -1
  /* HOISTED */
), zu = [
  wu,
  $u
];
function xu(e, a, n, o, t, r) {
  return c(), l("svg", gu, zu);
}
var yu = /* @__PURE__ */ _(fu, [["render", xu], ["__file", "location.vue"]]), Cu = {
  name: "Lock"
}, bu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Mu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
  },
  null,
  -1
  /* HOISTED */
), Hu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
  },
  null,
  -1
  /* HOISTED */
), Vu = [
  Mu,
  Hu
];
function Au(e, a, n, o, t, r) {
  return c(), l("svg", bu, Vu);
}
var Bu = /* @__PURE__ */ _(Cu, [["render", Au], ["__file", "lock.vue"]]), Lu = {
  name: "Lollipop"
}, Su = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
  },
  null,
  -1
  /* HOISTED */
), ku = [
  Tu
];
function Ou(e, a, n, o, t, r) {
  return c(), l("svg", Su, ku);
}
var ju = /* @__PURE__ */ _(Lu, [["render", Ou], ["__file", "lollipop.vue"]]), Pu = {
  name: "MagicStick"
}, Iu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
  },
  null,
  -1
  /* HOISTED */
), Du = [
  Fu
];
function qu(e, a, n, o, t, r) {
  return c(), l("svg", Iu, Du);
}
var Eu = /* @__PURE__ */ _(Pu, [["render", qu], ["__file", "magic-stick.vue"]]), Nu = {
  name: "Magnet"
}, Ru = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Uu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
  },
  null,
  -1
  /* HOISTED */
), Gu = [
  Uu
];
function Ku(e, a, n, o, t, r) {
  return c(), l("svg", Ru, Gu);
}
var Wu = /* @__PURE__ */ _(Nu, [["render", Ku], ["__file", "magnet.vue"]]), Zu = {
  name: "Male"
}, Ju = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
  },
  null,
  -1
  /* HOISTED */
), Yu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
  },
  null,
  -1
  /* HOISTED */
), Xu = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
  },
  null,
  -1
  /* HOISTED */
), e9 = [
  Qu,
  Yu,
  Xu
];
function a9(e, a, n, o, t, r) {
  return c(), l("svg", Ju, e9);
}
var n9 = /* @__PURE__ */ _(Zu, [["render", a9], ["__file", "male.vue"]]), o9 = {
  name: "Management"
}, t9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, d9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
  },
  null,
  -1
  /* HOISTED */
), r9 = [
  d9
];
function c9(e, a, n, o, t, r) {
  return c(), l("svg", t9, r9);
}
var l9 = /* @__PURE__ */ _(o9, [["render", c9], ["__file", "management.vue"]]), _9 = {
  name: "MapLocation"
}, i9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, s9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), m9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
  },
  null,
  -1
  /* HOISTED */
), u9 = [
  s9,
  m9
];
function h9(e, a, n, o, t, r) {
  return c(), l("svg", i9, u9);
}
var v9 = /* @__PURE__ */ _(_9, [["render", h9], ["__file", "map-location.vue"]]), p9 = {
  name: "Medal"
}, f9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, g9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
  },
  null,
  -1
  /* HOISTED */
), w9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
  },
  null,
  -1
  /* HOISTED */
), $9 = [
  g9,
  w9
];
function z9(e, a, n, o, t, r) {
  return c(), l("svg", f9, $9);
}
var x9 = /* @__PURE__ */ _(p9, [["render", z9], ["__file", "medal.vue"]]), y9 = {
  name: "Memo"
}, C9 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, b9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z"
  },
  null,
  -1
  /* HOISTED */
), M9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01zM192 896V128h96v768h-96zm640 0H352V128h480v768z"
  },
  null,
  -1
  /* HOISTED */
), H9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32zm0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z"
  },
  null,
  -1
  /* HOISTED */
), V9 = [
  b9,
  M9,
  H9
];
function A9(e, a, n, o, t, r) {
  return c(), l("svg", C9, V9);
}
var B9 = /* @__PURE__ */ _(y9, [["render", A9], ["__file", "memo.vue"]]), L9 = {
  name: "Menu"
}, S9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, T9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
  },
  null,
  -1
  /* HOISTED */
), k9 = [
  T9
];
function O9(e, a, n, o, t, r) {
  return c(), l("svg", S9, k9);
}
var j9 = /* @__PURE__ */ _(L9, [["render", O9], ["__file", "menu.vue"]]), P9 = {
  name: "MessageBox"
}, I9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, F9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
  },
  null,
  -1
  /* HOISTED */
), D9 = [
  F9
];
function q9(e, a, n, o, t, r) {
  return c(), l("svg", I9, D9);
}
var E9 = /* @__PURE__ */ _(P9, [["render", q9], ["__file", "message-box.vue"]]), N9 = {
  name: "Message"
}, R9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, U9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
  },
  null,
  -1
  /* HOISTED */
), G9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
  },
  null,
  -1
  /* HOISTED */
), K9 = [
  U9,
  G9
];
function W9(e, a, n, o, t, r) {
  return c(), l("svg", R9, K9);
}
var Z9 = /* @__PURE__ */ _(N9, [["render", W9], ["__file", "message.vue"]]), J9 = {
  name: "Mic"
}, Q9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Y9 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
  },
  null,
  -1
  /* HOISTED */
), X9 = [
  Y9
];
function eh(e, a, n, o, t, r) {
  return c(), l("svg", Q9, X9);
}
var ah = /* @__PURE__ */ _(J9, [["render", eh], ["__file", "mic.vue"]]), nh = {
  name: "Microphone"
}, oh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, th = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
  },
  null,
  -1
  /* HOISTED */
), dh = [
  th
];
function rh(e, a, n, o, t, r) {
  return c(), l("svg", oh, dh);
}
var ch = /* @__PURE__ */ _(nh, [["render", rh], ["__file", "microphone.vue"]]), lh = {
  name: "MilkTea"
}, _h = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ih = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
  },
  null,
  -1
  /* HOISTED */
), sh = [
  ih
];
function mh(e, a, n, o, t, r) {
  return c(), l("svg", _h, sh);
}
var uh = /* @__PURE__ */ _(lh, [["render", mh], ["__file", "milk-tea.vue"]]), hh = {
  name: "Minus"
}, vh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ph = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
  },
  null,
  -1
  /* HOISTED */
), fh = [
  ph
];
function gh(e, a, n, o, t, r) {
  return c(), l("svg", vh, fh);
}
var wh = /* @__PURE__ */ _(hh, [["render", gh], ["__file", "minus.vue"]]), $h = {
  name: "Money"
}, zh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xh = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
  },
  null,
  -1
  /* HOISTED */
), yh = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
  },
  null,
  -1
  /* HOISTED */
), Ch = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
  },
  null,
  -1
  /* HOISTED */
), bh = [
  xh,
  yh,
  Ch
];
function Mh(e, a, n, o, t, r) {
  return c(), l("svg", zh, bh);
}
var Hh = /* @__PURE__ */ _($h, [["render", Mh], ["__file", "money.vue"]]), Vh = {
  name: "Monitor"
}, Ah = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bh = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
  },
  null,
  -1
  /* HOISTED */
), Lh = [
  Bh
];
function Sh(e, a, n, o, t, r) {
  return c(), l("svg", Ah, Lh);
}
var Th = /* @__PURE__ */ _(Vh, [["render", Sh], ["__file", "monitor.vue"]]), kh = {
  name: "MoonNight"
}, Oh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jh = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
  },
  null,
  -1
  /* HOISTED */
), Ph = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Ih = [
  jh,
  Ph
];
function Fh(e, a, n, o, t, r) {
  return c(), l("svg", Oh, Ih);
}
var Dh = /* @__PURE__ */ _(kh, [["render", Fh], ["__file", "moon-night.vue"]]), qh = {
  name: "Moon"
}, Eh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Nh = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
  },
  null,
  -1
  /* HOISTED */
), Rh = [
  Nh
];
function Uh(e, a, n, o, t, r) {
  return c(), l("svg", Eh, Rh);
}
var Gh = /* @__PURE__ */ _(qh, [["render", Uh], ["__file", "moon.vue"]]), Kh = {
  name: "MoreFilled"
}, Wh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zh = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
  },
  null,
  -1
  /* HOISTED */
), Jh = [
  Zh
];
function Qh(e, a, n, o, t, r) {
  return c(), l("svg", Wh, Jh);
}
var Yh = /* @__PURE__ */ _(Kh, [["render", Qh], ["__file", "more-filled.vue"]]), Xh = {
  name: "More"
}, ev = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, av = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
  },
  null,
  -1
  /* HOISTED */
), nv = [
  av
];
function ov(e, a, n, o, t, r) {
  return c(), l("svg", ev, nv);
}
var tv = /* @__PURE__ */ _(Xh, [["render", ov], ["__file", "more.vue"]]), dv = {
  name: "MostlyCloudy"
}, rv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, cv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
  },
  null,
  -1
  /* HOISTED */
), lv = [
  cv
];
function _v(e, a, n, o, t, r) {
  return c(), l("svg", rv, lv);
}
var iv = /* @__PURE__ */ _(dv, [["render", _v], ["__file", "mostly-cloudy.vue"]]), sv = {
  name: "Mouse"
}, mv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, uv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
  },
  null,
  -1
  /* HOISTED */
), hv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
  },
  null,
  -1
  /* HOISTED */
), vv = [
  uv,
  hv
];
function pv(e, a, n, o, t, r) {
  return c(), l("svg", mv, vv);
}
var fv = /* @__PURE__ */ _(sv, [["render", pv], ["__file", "mouse.vue"]]), gv = {
  name: "Mug"
}, wv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $v = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
  },
  null,
  -1
  /* HOISTED */
), zv = [
  $v
];
function xv(e, a, n, o, t, r) {
  return c(), l("svg", wv, zv);
}
var yv = /* @__PURE__ */ _(gv, [["render", xv], ["__file", "mug.vue"]]), Cv = {
  name: "MuteNotification"
}, bv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Mv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
  },
  null,
  -1
  /* HOISTED */
), Hv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
  },
  null,
  -1
  /* HOISTED */
), Vv = [
  Mv,
  Hv
];
function Av(e, a, n, o, t, r) {
  return c(), l("svg", bv, Vv);
}
var Bv = /* @__PURE__ */ _(Cv, [["render", Av], ["__file", "mute-notification.vue"]]), Lv = {
  name: "Mute"
}, Sv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
  },
  null,
  -1
  /* HOISTED */
), kv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
  },
  null,
  -1
  /* HOISTED */
), Ov = [
  Tv,
  kv
];
function jv(e, a, n, o, t, r) {
  return c(), l("svg", Sv, Ov);
}
var Pv = /* @__PURE__ */ _(Lv, [["render", jv], ["__file", "mute.vue"]]), Iv = {
  name: "NoSmoking"
}, Fv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Dv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
  },
  null,
  -1
  /* HOISTED */
), qv = [
  Dv
];
function Ev(e, a, n, o, t, r) {
  return c(), l("svg", Fv, qv);
}
var Nv = /* @__PURE__ */ _(Iv, [["render", Ev], ["__file", "no-smoking.vue"]]), Rv = {
  name: "Notebook"
}, Uv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Kv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), Wv = [
  Gv,
  Kv
];
function Zv(e, a, n, o, t, r) {
  return c(), l("svg", Uv, Wv);
}
var Jv = /* @__PURE__ */ _(Rv, [["render", Zv], ["__file", "notebook.vue"]]), Qv = {
  name: "Notification"
}, Yv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xv = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
  },
  null,
  -1
  /* HOISTED */
), e7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
  },
  null,
  -1
  /* HOISTED */
), a7 = [
  Xv,
  e7
];
function n7(e, a, n, o, t, r) {
  return c(), l("svg", Yv, a7);
}
var o7 = /* @__PURE__ */ _(Qv, [["render", n7], ["__file", "notification.vue"]]), t7 = {
  name: "Odometer"
}, d7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, r7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), c7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
  },
  null,
  -1
  /* HOISTED */
), l7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
  },
  null,
  -1
  /* HOISTED */
), _7 = [
  r7,
  c7,
  l7
];
function i7(e, a, n, o, t, r) {
  return c(), l("svg", d7, _7);
}
var s7 = /* @__PURE__ */ _(t7, [["render", i7], ["__file", "odometer.vue"]]), m7 = {
  name: "OfficeBuilding"
}, u7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, h7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), v7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
  },
  null,
  -1
  /* HOISTED */
), p7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), f7 = [
  h7,
  v7,
  p7
];
function g7(e, a, n, o, t, r) {
  return c(), l("svg", u7, f7);
}
var w7 = /* @__PURE__ */ _(m7, [["render", g7], ["__file", "office-building.vue"]]), $7 = {
  name: "Open"
}, z7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, x7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
  },
  null,
  -1
  /* HOISTED */
), y7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
  },
  null,
  -1
  /* HOISTED */
), C7 = [
  x7,
  y7
];
function b7(e, a, n, o, t, r) {
  return c(), l("svg", z7, C7);
}
var M7 = /* @__PURE__ */ _($7, [["render", b7], ["__file", "open.vue"]]), H7 = {
  name: "Operation"
}, V7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, A7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
  },
  null,
  -1
  /* HOISTED */
), B7 = [
  A7
];
function L7(e, a, n, o, t, r) {
  return c(), l("svg", V7, B7);
}
var S7 = /* @__PURE__ */ _(H7, [["render", L7], ["__file", "operation.vue"]]), T7 = {
  name: "Opportunity"
}, k7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, O7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
  },
  null,
  -1
  /* HOISTED */
), j7 = [
  O7
];
function P7(e, a, n, o, t, r) {
  return c(), l("svg", k7, j7);
}
var I7 = /* @__PURE__ */ _(T7, [["render", P7], ["__file", "opportunity.vue"]]), F7 = {
  name: "Orange"
}, D7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, q7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
  },
  null,
  -1
  /* HOISTED */
), E7 = [
  q7
];
function N7(e, a, n, o, t, r) {
  return c(), l("svg", D7, E7);
}
var R7 = /* @__PURE__ */ _(F7, [["render", N7], ["__file", "orange.vue"]]), U7 = {
  name: "Paperclip"
}, G7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, K7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
  },
  null,
  -1
  /* HOISTED */
), W7 = [
  K7
];
function Z7(e, a, n, o, t, r) {
  return c(), l("svg", G7, W7);
}
var J7 = /* @__PURE__ */ _(U7, [["render", Z7], ["__file", "paperclip.vue"]]), Q7 = {
  name: "PartlyCloudy"
}, Y7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, X7 = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
  },
  null,
  -1
  /* HOISTED */
), ep = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
  },
  null,
  -1
  /* HOISTED */
), ap = [
  X7,
  ep
];
function np(e, a, n, o, t, r) {
  return c(), l("svg", Y7, ap);
}
var op = /* @__PURE__ */ _(Q7, [["render", np], ["__file", "partly-cloudy.vue"]]), tp = {
  name: "Pear"
}, dp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
  },
  null,
  -1
  /* HOISTED */
), cp = [
  rp
];
function lp(e, a, n, o, t, r) {
  return c(), l("svg", dp, cp);
}
var _p = /* @__PURE__ */ _(tp, [["render", lp], ["__file", "pear.vue"]]), ip = {
  name: "PhoneFilled"
}, sp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
  },
  null,
  -1
  /* HOISTED */
), up = [
  mp
];
function hp(e, a, n, o, t, r) {
  return c(), l("svg", sp, up);
}
var vp = /* @__PURE__ */ _(ip, [["render", hp], ["__file", "phone-filled.vue"]]), pp = {
  name: "Phone"
}, fp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
  },
  null,
  -1
  /* HOISTED */
), wp = [
  gp
];
function $p(e, a, n, o, t, r) {
  return c(), l("svg", fp, wp);
}
var zp = /* @__PURE__ */ _(pp, [["render", $p], ["__file", "phone.vue"]]), xp = {
  name: "PictureFilled"
}, yp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
  },
  null,
  -1
  /* HOISTED */
), bp = [
  Cp
];
function Mp(e, a, n, o, t, r) {
  return c(), l("svg", yp, bp);
}
var Hp = /* @__PURE__ */ _(xp, [["render", Mp], ["__file", "picture-filled.vue"]]), Vp = {
  name: "PictureRounded"
}, Ap = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
  },
  null,
  -1
  /* HOISTED */
), Lp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
  },
  null,
  -1
  /* HOISTED */
), Sp = [
  Bp,
  Lp
];
function Tp(e, a, n, o, t, r) {
  return c(), l("svg", Ap, Sp);
}
var kp = /* @__PURE__ */ _(Vp, [["render", Tp], ["__file", "picture-rounded.vue"]]), Op = {
  name: "Picture"
}, jp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Pp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Ip = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
  },
  null,
  -1
  /* HOISTED */
), Fp = [
  Pp,
  Ip
];
function Dp(e, a, n, o, t, r) {
  return c(), l("svg", jp, Fp);
}
var qp = /* @__PURE__ */ _(Op, [["render", Dp], ["__file", "picture.vue"]]), Ep = {
  name: "PieChart"
}, Np = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
  },
  null,
  -1
  /* HOISTED */
), Up = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
  },
  null,
  -1
  /* HOISTED */
), Gp = [
  Rp,
  Up
];
function Kp(e, a, n, o, t, r) {
  return c(), l("svg", Np, Gp);
}
var Wp = /* @__PURE__ */ _(Ep, [["render", Kp], ["__file", "pie-chart.vue"]]), Zp = {
  name: "Place"
}, Jp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
  },
  null,
  -1
  /* HOISTED */
), Yp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Xp = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
  },
  null,
  -1
  /* HOISTED */
), ef = [
  Qp,
  Yp,
  Xp
];
function af(e, a, n, o, t, r) {
  return c(), l("svg", Jp, ef);
}
var nf = /* @__PURE__ */ _(Zp, [["render", af], ["__file", "place.vue"]]), of = {
  name: "Platform"
}, tf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, df = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
  },
  null,
  -1
  /* HOISTED */
), rf = [
  df
];
function cf(e, a, n, o, t, r) {
  return c(), l("svg", tf, rf);
}
var lf = /* @__PURE__ */ _(of, [["render", cf], ["__file", "platform.vue"]]), _f = {
  name: "Plus"
}, sf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), uf = [
  mf
];
function hf(e, a, n, o, t, r) {
  return c(), l("svg", sf, uf);
}
var vf = /* @__PURE__ */ _(_f, [["render", hf], ["__file", "plus.vue"]]), pf = {
  name: "Pointer"
}, ff = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
  },
  null,
  -1
  /* HOISTED */
), wf = [
  gf
];
function $f(e, a, n, o, t, r) {
  return c(), l("svg", ff, wf);
}
var zf = /* @__PURE__ */ _(pf, [["render", $f], ["__file", "pointer.vue"]]), xf = {
  name: "Position"
}, yf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
  },
  null,
  -1
  /* HOISTED */
), bf = [
  Cf
];
function Mf(e, a, n, o, t, r) {
  return c(), l("svg", yf, bf);
}
var Hf = /* @__PURE__ */ _(xf, [["render", Mf], ["__file", "position.vue"]]), Vf = {
  name: "Postcard"
}, Af = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
  },
  null,
  -1
  /* HOISTED */
), Lf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), Sf = [
  Bf,
  Lf
];
function Tf(e, a, n, o, t, r) {
  return c(), l("svg", Af, Sf);
}
var kf = /* @__PURE__ */ _(Vf, [["render", Tf], ["__file", "postcard.vue"]]), Of = {
  name: "Pouring"
}, jf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Pf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), If = [
  Pf
];
function Ff(e, a, n, o, t, r) {
  return c(), l("svg", jf, If);
}
var Df = /* @__PURE__ */ _(Of, [["render", Ff], ["__file", "pouring.vue"]]), qf = {
  name: "Present"
}, Ef = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Nf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
  },
  null,
  -1
  /* HOISTED */
), Rf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), Uf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), Gf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), Kf = [
  Nf,
  Rf,
  Uf,
  Gf
];
function Wf(e, a, n, o, t, r) {
  return c(), l("svg", Ef, Kf);
}
var Zf = /* @__PURE__ */ _(qf, [["render", Wf], ["__file", "present.vue"]]), Jf = {
  name: "PriceTag"
}, Qf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Yf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
  },
  null,
  -1
  /* HOISTED */
), Xf = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), eg = [
  Yf,
  Xf
];
function ag(e, a, n, o, t, r) {
  return c(), l("svg", Qf, eg);
}
var ng = /* @__PURE__ */ _(Jf, [["render", ag], ["__file", "price-tag.vue"]]), og = {
  name: "Printer"
}, tg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dg = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
  },
  null,
  -1
  /* HOISTED */
), rg = [
  dg
];
function cg(e, a, n, o, t, r) {
  return c(), l("svg", tg, rg);
}
var lg = /* @__PURE__ */ _(og, [["render", cg], ["__file", "printer.vue"]]), _g = {
  name: "Promotion"
}, ig = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sg = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
  },
  null,
  -1
  /* HOISTED */
), mg = [
  sg
];
function ug(e, a, n, o, t, r) {
  return c(), l("svg", ig, mg);
}
var hg = /* @__PURE__ */ _(_g, [["render", ug], ["__file", "promotion.vue"]]), vg = {
  name: "QuartzWatch"
}, pg = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, fg = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M422.02 602.01v-.03c-6.68-5.99-14.35-8.83-23.01-8.51-8.67.32-16.17 3.66-22.5 10.02-6.33 6.36-9.5 13.7-9.5 22.02s3 15.82 8.99 22.5c8.68 8.68 19.02 11.35 31.01 8s19.49-10.85 22.5-22.5c3.01-11.65.51-22.15-7.49-31.49v-.01zM384 512c0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.67 8.99-23.01zm6.53-82.49c11.65 3.01 22.15.51 31.49-7.49h.04c5.99-6.68 8.83-14.34 8.51-23.01-.32-8.67-3.66-16.16-10.02-22.5-6.36-6.33-13.7-9.5-22.02-9.5s-15.82 3-22.5 8.99c-8.68 8.69-11.35 19.02-8 31.01 3.35 11.99 10.85 19.49 22.5 22.5zm242.94 0c11.67-3.03 19.01-10.37 22.02-22.02 3.01-11.65.51-22.15-7.49-31.49h.01c-6.68-5.99-14.18-8.99-22.5-8.99s-15.66 3.16-22.02 9.5c-6.36 6.34-9.7 13.84-10.02 22.5-.32 8.66 2.52 16.33 8.51 23.01 9.32 8.02 19.82 10.52 31.49 7.49zM512 640c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01s-3-17.02-8.99-23.01c-6-5.99-13.66-8.99-23.01-8.99zm183.01-151.01c-6-5.99-13.66-8.99-23.01-8.99s-17.02 3-23.01 8.99c-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99s17.02-3 23.01-8.99c5.99-6 8.99-13.67 8.99-23.01 0-9.35-3-17.02-8.99-23.01z"
  },
  null,
  -1
  /* HOISTED */
), gg = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M832 512c-2-90.67-33.17-166.17-93.5-226.5-20.43-20.42-42.6-37.49-66.5-51.23V64H352v170.26c-23.9 13.74-46.07 30.81-66.5 51.24-60.33 60.33-91.49 135.83-93.5 226.5 2 90.67 33.17 166.17 93.5 226.5 20.43 20.43 42.6 37.5 66.5 51.24V960h320V789.74c23.9-13.74 46.07-30.81 66.5-51.24 60.33-60.34 91.49-135.83 93.5-226.5zM416 128h192v78.69c-29.85-9.03-61.85-13.93-96-14.69-34.15.75-66.15 5.65-96 14.68V128zm192 768H416v-78.68c29.85 9.03 61.85 13.93 96 14.68 34.15-.75 66.15-5.65 96-14.68V896zm-96-128c-72.66-2.01-132.99-27.01-180.99-75.01S258.01 584.66 256 512c2.01-72.66 27.01-132.99 75.01-180.99S439.34 258.01 512 256c72.66 2.01 132.99 27.01 180.99 75.01S765.99 439.34 768 512c-2.01 72.66-27.01 132.99-75.01 180.99S584.66 765.99 512 768z"
  },
  null,
  -1
  /* HOISTED */
), wg = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 320c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01 0 9.35 3 17.02 8.99 23.01 6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01 0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99zm112.99 273.5c-8.66-.32-16.33 2.52-23.01 8.51-7.98 9.32-10.48 19.82-7.49 31.49s10.49 19.17 22.5 22.5 22.35.66 31.01-8v.04c5.99-6.68 8.99-14.18 8.99-22.5s-3.16-15.66-9.5-22.02-13.84-9.7-22.5-10.02z"
  },
  null,
  -1
  /* HOISTED */
), $g = [
  fg,
  gg,
  wg
];
function zg(e, a, n, o, t, r) {
  return c(), l("svg", pg, $g);
}
var xg = /* @__PURE__ */ _(vg, [["render", zg], ["__file", "quartz-watch.vue"]]), yg = {
  name: "QuestionFilled"
}, Cg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bg = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
  },
  null,
  -1
  /* HOISTED */
), Mg = [
  bg
];
function Hg(e, a, n, o, t, r) {
  return c(), l("svg", Cg, Mg);
}
var Vg = /* @__PURE__ */ _(yg, [["render", Hg], ["__file", "question-filled.vue"]]), Ag = {
  name: "Rank"
}, Bg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Lg = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
  },
  null,
  -1
  /* HOISTED */
), Sg = [
  Lg
];
function Tg(e, a, n, o, t, r) {
  return c(), l("svg", Bg, Sg);
}
var kg = /* @__PURE__ */ _(Ag, [["render", Tg], ["__file", "rank.vue"]]), Og = {
  name: "ReadingLamp"
}, jg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Pg = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
  },
  null,
  -1
  /* HOISTED */
), Ig = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
  },
  null,
  -1
  /* HOISTED */
), Fg = [
  Pg,
  Ig
];
function Dg(e, a, n, o, t, r) {
  return c(), l("svg", jg, Fg);
}
var qg = /* @__PURE__ */ _(Og, [["render", Dg], ["__file", "reading-lamp.vue"]]), Eg = {
  name: "Reading"
}, Ng = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rg = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
  },
  null,
  -1
  /* HOISTED */
), Ug = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 192h64v704h-64z"
  },
  null,
  -1
  /* HOISTED */
), Gg = [
  Rg,
  Ug
];
function Kg(e, a, n, o, t, r) {
  return c(), l("svg", Ng, Gg);
}
var Wg = /* @__PURE__ */ _(Eg, [["render", Kg], ["__file", "reading.vue"]]), Zg = {
  name: "RefreshLeft"
}, Jg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qg = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
  },
  null,
  -1
  /* HOISTED */
), Yg = [
  Qg
];
function Xg(e, a, n, o, t, r) {
  return c(), l("svg", Jg, Yg);
}
var ew = /* @__PURE__ */ _(Zg, [["render", Xg], ["__file", "refresh-left.vue"]]), aw = {
  name: "RefreshRight"
}, nw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ow = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
  },
  null,
  -1
  /* HOISTED */
), tw = [
  ow
];
function dw(e, a, n, o, t, r) {
  return c(), l("svg", nw, tw);
}
var rw = /* @__PURE__ */ _(aw, [["render", dw], ["__file", "refresh-right.vue"]]), cw = {
  name: "Refresh"
}, lw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _w = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), iw = [
  _w
];
function sw(e, a, n, o, t, r) {
  return c(), l("svg", lw, iw);
}
var mw = /* @__PURE__ */ _(cw, [["render", sw], ["__file", "refresh.vue"]]), uw = {
  name: "Refrigerator"
}, hw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vw = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
  },
  null,
  -1
  /* HOISTED */
), pw = [
  vw
];
function fw(e, a, n, o, t, r) {
  return c(), l("svg", hw, pw);
}
var gw = /* @__PURE__ */ _(uw, [["render", fw], ["__file", "refrigerator.vue"]]), ww = {
  name: "RemoveFilled"
}, $w = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, zw = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
  },
  null,
  -1
  /* HOISTED */
), xw = [
  zw
];
function yw(e, a, n, o, t, r) {
  return c(), l("svg", $w, xw);
}
var Cw = /* @__PURE__ */ _(ww, [["render", yw], ["__file", "remove-filled.vue"]]), bw = {
  name: "Remove"
}, Mw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hw = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), Vw = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Aw = [
  Hw,
  Vw
];
function Bw(e, a, n, o, t, r) {
  return c(), l("svg", Mw, Aw);
}
var Lw = /* @__PURE__ */ _(bw, [["render", Bw], ["__file", "remove.vue"]]), Sw = {
  name: "Right"
}, Tw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, kw = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
  },
  null,
  -1
  /* HOISTED */
), Ow = [
  kw
];
function jw(e, a, n, o, t, r) {
  return c(), l("svg", Tw, Ow);
}
var Pw = /* @__PURE__ */ _(Sw, [["render", jw], ["__file", "right.vue"]]), Iw = {
  name: "ScaleToOriginal"
}, Fw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Dw = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
  },
  null,
  -1
  /* HOISTED */
), qw = [
  Dw
];
function Ew(e, a, n, o, t, r) {
  return c(), l("svg", Fw, qw);
}
var Nw = /* @__PURE__ */ _(Iw, [["render", Ew], ["__file", "scale-to-original.vue"]]), Rw = {
  name: "School"
}, Uw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gw = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Kw = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M64 832h896v64H64zm256-640h128v96H320z"
  },
  null,
  -1
  /* HOISTED */
), Ww = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
  },
  null,
  -1
  /* HOISTED */
), Zw = [
  Gw,
  Kw,
  Ww
];
function Jw(e, a, n, o, t, r) {
  return c(), l("svg", Uw, Zw);
}
var Qw = /* @__PURE__ */ _(Rw, [["render", Jw], ["__file", "school.vue"]]), Yw = {
  name: "Scissor"
}, Xw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, e$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
  },
  null,
  -1
  /* HOISTED */
), a$ = [
  e$
];
function n$(e, a, n, o, t, r) {
  return c(), l("svg", Xw, a$);
}
var o$ = /* @__PURE__ */ _(Yw, [["render", n$], ["__file", "scissor.vue"]]), t$ = {
  name: "Search"
}, d$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, r$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), c$ = [
  r$
];
function l$(e, a, n, o, t, r) {
  return c(), l("svg", d$, c$);
}
var _$ = /* @__PURE__ */ _(t$, [["render", l$], ["__file", "search.vue"]]), i$ = {
  name: "Select"
}, s$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, m$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
  },
  null,
  -1
  /* HOISTED */
), u$ = [
  m$
];
function h$(e, a, n, o, t, r) {
  return c(), l("svg", s$, u$);
}
var v$ = /* @__PURE__ */ _(i$, [["render", h$], ["__file", "select.vue"]]), p$ = {
  name: "Sell"
}, f$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, g$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
  },
  null,
  -1
  /* HOISTED */
), w$ = [
  g$
];
function $$(e, a, n, o, t, r) {
  return c(), l("svg", f$, w$);
}
var z$ = /* @__PURE__ */ _(p$, [["render", $$], ["__file", "sell.vue"]]), x$ = {
  name: "SemiSelect"
}, y$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, C$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
  },
  null,
  -1
  /* HOISTED */
), b$ = [
  C$
];
function M$(e, a, n, o, t, r) {
  return c(), l("svg", y$, b$);
}
var H$ = /* @__PURE__ */ _(x$, [["render", M$], ["__file", "semi-select.vue"]]), V$ = {
  name: "Service"
}, A$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, B$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
  },
  null,
  -1
  /* HOISTED */
), L$ = [
  B$
];
function S$(e, a, n, o, t, r) {
  return c(), l("svg", A$, L$);
}
var T$ = /* @__PURE__ */ _(V$, [["render", S$], ["__file", "service.vue"]]), k$ = {
  name: "SetUp"
}, O$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, j$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
  },
  null,
  -1
  /* HOISTED */
), P$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), I$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), F$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), D$ = [
  j$,
  P$,
  I$,
  F$
];
function q$(e, a, n, o, t, r) {
  return c(), l("svg", O$, D$);
}
var E$ = /* @__PURE__ */ _(k$, [["render", q$], ["__file", "set-up.vue"]]), N$ = {
  name: "Setting"
}, R$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, U$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
  },
  null,
  -1
  /* HOISTED */
), G$ = [
  U$
];
function K$(e, a, n, o, t, r) {
  return c(), l("svg", R$, G$);
}
var W$ = /* @__PURE__ */ _(N$, [["render", K$], ["__file", "setting.vue"]]), Z$ = {
  name: "Share"
}, J$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Q$ = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
  },
  null,
  -1
  /* HOISTED */
), Y$ = [
  Q$
];
function X$(e, a, n, o, t, r) {
  return c(), l("svg", J$, Y$);
}
var ez = /* @__PURE__ */ _(Z$, [["render", X$], ["__file", "share.vue"]]), az = {
  name: "Ship"
}, nz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oz = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
  },
  null,
  -1
  /* HOISTED */
), tz = [
  oz
];
function dz(e, a, n, o, t, r) {
  return c(), l("svg", nz, tz);
}
var rz = /* @__PURE__ */ _(az, [["render", dz], ["__file", "ship.vue"]]), cz = {
  name: "Shop"
}, lz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _z = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
  },
  null,
  -1
  /* HOISTED */
), iz = [
  _z
];
function sz(e, a, n, o, t, r) {
  return c(), l("svg", lz, iz);
}
var mz = /* @__PURE__ */ _(cz, [["render", sz], ["__file", "shop.vue"]]), uz = {
  name: "ShoppingBag"
}, hz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vz = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
  },
  null,
  -1
  /* HOISTED */
), pz = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 704h640v64H192z"
  },
  null,
  -1
  /* HOISTED */
), fz = [
  vz,
  pz
];
function gz(e, a, n, o, t, r) {
  return c(), l("svg", hz, fz);
}
var wz = /* @__PURE__ */ _(uz, [["render", gz], ["__file", "shopping-bag.vue"]]), $z = {
  name: "ShoppingCartFull"
}, zz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xz = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
  },
  null,
  -1
  /* HOISTED */
), yz = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
  },
  null,
  -1
  /* HOISTED */
), Cz = [
  xz,
  yz
];
function bz(e, a, n, o, t, r) {
  return c(), l("svg", zz, Cz);
}
var Mz = /* @__PURE__ */ _($z, [["render", bz], ["__file", "shopping-cart-full.vue"]]), Hz = {
  name: "ShoppingCart"
}, Vz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Az = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
  },
  null,
  -1
  /* HOISTED */
), Bz = [
  Az
];
function Lz(e, a, n, o, t, r) {
  return c(), l("svg", Vz, Bz);
}
var Sz = /* @__PURE__ */ _(Hz, [["render", Lz], ["__file", "shopping-cart.vue"]]), Tz = {
  name: "ShoppingTrolley"
}, kz = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, Oz = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M368 833c-13.3 0-24.5 4.5-33.5 13.5S321 866.7 321 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S415 893.3 415 880s-4.5-24.5-13.5-33.5S381.3 833 368 833zm439-193c7.4 0 13.8-2.2 19.5-6.5S836 623.3 838 616l112-448c2-10-.2-19.2-6.5-27.5S929 128 919 128H96c-9.3 0-17 3-23 9s-9 13.7-9 23 3 17 9 23 13.7 9 23 9h96v576h672c9.3 0 17-3 23-9s9-13.7 9-23-3-17-9-23-13.7-9-23-9H256v-64h551zM256 192h622l-96 384H256V192zm432 641c-13.3 0-24.5 4.5-33.5 13.5S641 866.7 641 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S735 893.3 735 880s-4.5-24.5-13.5-33.5S701.3 833 688 833z"
  },
  null,
  -1
  /* HOISTED */
), jz = [
  Oz
];
function Pz(e, a, n, o, t, r) {
  return c(), l("svg", kz, jz);
}
var Iz = /* @__PURE__ */ _(Tz, [["render", Pz], ["__file", "shopping-trolley.vue"]]), Fz = {
  name: "Smoking"
}, Dz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qz = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Ez = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
  },
  null,
  -1
  /* HOISTED */
), Nz = [
  qz,
  Ez
];
function Rz(e, a, n, o, t, r) {
  return c(), l("svg", Dz, Nz);
}
var Uz = /* @__PURE__ */ _(Fz, [["render", Rz], ["__file", "smoking.vue"]]), Gz = {
  name: "Soccer"
}, Kz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Wz = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
  },
  null,
  -1
  /* HOISTED */
), Zz = [
  Wz
];
function Jz(e, a, n, o, t, r) {
  return c(), l("svg", Kz, Zz);
}
var Qz = /* @__PURE__ */ _(Gz, [["render", Jz], ["__file", "soccer.vue"]]), Yz = {
  name: "SoldOut"
}, Xz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ex = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
  },
  null,
  -1
  /* HOISTED */
), ax = [
  ex
];
function nx(e, a, n, o, t, r) {
  return c(), l("svg", Xz, ax);
}
var ox = /* @__PURE__ */ _(Yz, [["render", nx], ["__file", "sold-out.vue"]]), tx = {
  name: "SortDown"
}, dx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rx = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
  },
  null,
  -1
  /* HOISTED */
), cx = [
  rx
];
function lx(e, a, n, o, t, r) {
  return c(), l("svg", dx, cx);
}
var _x = /* @__PURE__ */ _(tx, [["render", lx], ["__file", "sort-down.vue"]]), ix = {
  name: "SortUp"
}, sx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mx = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
  },
  null,
  -1
  /* HOISTED */
), ux = [
  mx
];
function hx(e, a, n, o, t, r) {
  return c(), l("svg", sx, ux);
}
var vx = /* @__PURE__ */ _(ix, [["render", hx], ["__file", "sort-up.vue"]]), px = {
  name: "Sort"
}, fx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gx = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
  },
  null,
  -1
  /* HOISTED */
), wx = [
  gx
];
function $x(e, a, n, o, t, r) {
  return c(), l("svg", fx, wx);
}
var zx = /* @__PURE__ */ _(px, [["render", $x], ["__file", "sort.vue"]]), xx = {
  name: "Stamp"
}, yx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cx = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
  },
  null,
  -1
  /* HOISTED */
), bx = [
  Cx
];
function Mx(e, a, n, o, t, r) {
  return c(), l("svg", yx, bx);
}
var Hx = /* @__PURE__ */ _(xx, [["render", Mx], ["__file", "stamp.vue"]]), Vx = {
  name: "StarFilled"
}, Ax = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bx = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
  },
  null,
  -1
  /* HOISTED */
), Lx = [
  Bx
];
function Sx(e, a, n, o, t, r) {
  return c(), l("svg", Ax, Lx);
}
var Tx = /* @__PURE__ */ _(Vx, [["render", Sx], ["__file", "star-filled.vue"]]), kx = {
  name: "Star"
}, Ox = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jx = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
  },
  null,
  -1
  /* HOISTED */
), Px = [
  jx
];
function Ix(e, a, n, o, t, r) {
  return c(), l("svg", Ox, Px);
}
var Fx = /* @__PURE__ */ _(kx, [["render", Ix], ["__file", "star.vue"]]), Dx = {
  name: "Stopwatch"
}, qx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ex = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Nx = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
  },
  null,
  -1
  /* HOISTED */
), Rx = [
  Ex,
  Nx
];
function Ux(e, a, n, o, t, r) {
  return c(), l("svg", qx, Rx);
}
var Gx = /* @__PURE__ */ _(Dx, [["render", Ux], ["__file", "stopwatch.vue"]]), Kx = {
  name: "SuccessFilled"
}, Wx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zx = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  },
  null,
  -1
  /* HOISTED */
), Jx = [
  Zx
];
function Qx(e, a, n, o, t, r) {
  return c(), l("svg", Wx, Jx);
}
var t2 = /* @__PURE__ */ _(Kx, [["render", Qx], ["__file", "success-filled.vue"]]), Yx = {
  name: "Sugar"
}, Xx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ey = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
  },
  null,
  -1
  /* HOISTED */
), ay = [
  ey
];
function ny(e, a, n, o, t, r) {
  return c(), l("svg", Xx, ay);
}
var oy = /* @__PURE__ */ _(Yx, [["render", ny], ["__file", "sugar.vue"]]), ty = {
  name: "SuitcaseLine"
}, dy = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, ry = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M922.5 229.5c-24.32-24.34-54.49-36.84-90.5-37.5H704v-64c-.68-17.98-7.02-32.98-19.01-44.99S658.01 64.66 640 64H384c-17.98.68-32.98 7.02-44.99 19.01S320.66 110 320 128v64H192c-35.99.68-66.16 13.18-90.5 37.5C77.16 253.82 64.66 283.99 64 320v448c.68 35.99 13.18 66.16 37.5 90.5s54.49 36.84 90.5 37.5h640c35.99-.68 66.16-13.18 90.5-37.5s36.84-54.49 37.5-90.5V320c-.68-35.99-13.18-66.16-37.5-90.5zM384 128h256v64H384v-64zM256 832h-64c-17.98-.68-32.98-7.02-44.99-19.01S128.66 786.01 128 768V448h128v384zm448 0H320V448h384v384zm192-64c-.68 17.98-7.02 32.98-19.01 44.99S850.01 831.34 832 832h-64V448h128v320zm0-384H128v-64c.69-17.98 7.02-32.98 19.01-44.99S173.99 256.66 192 256h640c17.98.69 32.98 7.02 44.99 19.01S895.34 301.99 896 320v64z"
  },
  null,
  -1
  /* HOISTED */
), cy = [
  ry
];
function ly(e, a, n, o, t, r) {
  return c(), l("svg", dy, cy);
}
var _y = /* @__PURE__ */ _(ty, [["render", ly], ["__file", "suitcase-line.vue"]]), iy = {
  name: "Suitcase"
}, sy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, my = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
  },
  null,
  -1
  /* HOISTED */
), uy = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
  },
  null,
  -1
  /* HOISTED */
), hy = [
  my,
  uy
];
function vy(e, a, n, o, t, r) {
  return c(), l("svg", sy, hy);
}
var py = /* @__PURE__ */ _(iy, [["render", vy], ["__file", "suitcase.vue"]]), fy = {
  name: "Sunny"
}, gy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wy = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), $y = [
  wy
];
function zy(e, a, n, o, t, r) {
  return c(), l("svg", gy, $y);
}
var xy = /* @__PURE__ */ _(fy, [["render", zy], ["__file", "sunny.vue"]]), yy = {
  name: "Sunrise"
}, Cy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, by = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
  },
  null,
  -1
  /* HOISTED */
), My = [
  by
];
function Hy(e, a, n, o, t, r) {
  return c(), l("svg", Cy, My);
}
var Vy = /* @__PURE__ */ _(yy, [["render", Hy], ["__file", "sunrise.vue"]]), Ay = {
  name: "Sunset"
}, By = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ly = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), Sy = [
  Ly
];
function Ty(e, a, n, o, t, r) {
  return c(), l("svg", By, Sy);
}
var ky = /* @__PURE__ */ _(Ay, [["render", Ty], ["__file", "sunset.vue"]]), Oy = {
  name: "SwitchButton"
}, jy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Py = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
  },
  null,
  -1
  /* HOISTED */
), Iy = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Fy = [
  Py,
  Iy
];
function Dy(e, a, n, o, t, r) {
  return c(), l("svg", jy, Fy);
}
var qy = /* @__PURE__ */ _(Oy, [["render", Dy], ["__file", "switch-button.vue"]]), Ey = {
  name: "SwitchFilled"
}, Ny = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, Ry = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M247.47 358.4v.04c.07 19.17 7.72 37.53 21.27 51.09s31.92 21.2 51.09 21.27c39.86 0 72.41-32.6 72.41-72.4s-32.6-72.36-72.41-72.36-72.36 32.55-72.36 72.36z"
  },
  null,
  -1
  /* HOISTED */
), Uy = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M492.38 128H324.7c-52.16 0-102.19 20.73-139.08 57.61a196.655 196.655 0 0 0-57.61 139.08V698.7c-.01 25.84 5.08 51.42 14.96 75.29s24.36 45.56 42.63 63.83 39.95 32.76 63.82 42.65a196.67 196.67 0 0 0 75.28 14.98h167.68c3.03 0 5.46-2.43 5.46-5.42V133.42c.6-2.99-1.83-5.42-5.46-5.42zm-56.11 705.88H324.7c-17.76.13-35.36-3.33-51.75-10.18s-31.22-16.94-43.61-29.67c-25.3-25.35-39.81-59.1-39.81-95.32V324.69c-.13-17.75 3.33-35.35 10.17-51.74a131.695 131.695 0 0 1 29.64-43.62c25.39-25.3 59.14-39.81 95.36-39.81h111.57v644.36zm402.12-647.67a196.655 196.655 0 0 0-139.08-57.61H580.48c-3.03 0-4.82 2.43-4.82 4.82v757.16c-.6 2.99 1.79 5.42 5.42 5.42h118.23a196.69 196.69 0 0 0 139.08-57.61A196.655 196.655 0 0 0 896 699.31V325.29a196.69 196.69 0 0 0-57.61-139.08zm-111.3 441.92c-42.83 0-77.82-34.99-77.82-77.82s34.98-77.82 77.82-77.82c42.83 0 77.82 34.99 77.82 77.82s-34.99 77.82-77.82 77.82z"
  },
  null,
  -1
  /* HOISTED */
), Gy = [
  Ry,
  Uy
];
function Ky(e, a, n, o, t, r) {
  return c(), l("svg", Ny, Gy);
}
var Wy = /* @__PURE__ */ _(Ey, [["render", Ky], ["__file", "switch-filled.vue"]]), Zy = {
  name: "Switch"
}, Jy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qy = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
  },
  null,
  -1
  /* HOISTED */
), Yy = [
  Qy
];
function Xy(e, a, n, o, t, r) {
  return c(), l("svg", Jy, Yy);
}
var eC = /* @__PURE__ */ _(Zy, [["render", Xy], ["__file", "switch.vue"]]), aC = {
  name: "TakeawayBox"
}, nC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), tC = [
  oC
];
function dC(e, a, n, o, t, r) {
  return c(), l("svg", nC, tC);
}
var rC = /* @__PURE__ */ _(aC, [["render", dC], ["__file", "takeaway-box.vue"]]), cC = {
  name: "Ticket"
}, lC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _C = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
  },
  null,
  -1
  /* HOISTED */
), iC = [
  _C
];
function sC(e, a, n, o, t, r) {
  return c(), l("svg", lC, iC);
}
var mC = /* @__PURE__ */ _(cC, [["render", sC], ["__file", "ticket.vue"]]), uC = {
  name: "Tickets"
}, hC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
  },
  null,
  -1
  /* HOISTED */
), pC = [
  vC
];
function fC(e, a, n, o, t, r) {
  return c(), l("svg", hC, pC);
}
var gC = /* @__PURE__ */ _(uC, [["render", fC], ["__file", "tickets.vue"]]), wC = {
  name: "Timer"
}, $C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, zC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
  },
  null,
  -1
  /* HOISTED */
), xC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), yC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
  },
  null,
  -1
  /* HOISTED */
), CC = [
  zC,
  xC,
  yC
];
function bC(e, a, n, o, t, r) {
  return c(), l("svg", $C, CC);
}
var MC = /* @__PURE__ */ _(wC, [["render", bC], ["__file", "timer.vue"]]), HC = {
  name: "ToiletPaper"
}, VC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, AC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
  },
  null,
  -1
  /* HOISTED */
), BC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
  },
  null,
  -1
  /* HOISTED */
), LC = [
  AC,
  BC
];
function SC(e, a, n, o, t, r) {
  return c(), l("svg", VC, LC);
}
var TC = /* @__PURE__ */ _(HC, [["render", SC], ["__file", "toilet-paper.vue"]]), kC = {
  name: "Tools"
}, OC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
  },
  null,
  -1
  /* HOISTED */
), PC = [
  jC
];
function IC(e, a, n, o, t, r) {
  return c(), l("svg", OC, PC);
}
var FC = /* @__PURE__ */ _(kC, [["render", IC], ["__file", "tools.vue"]]), DC = {
  name: "TopLeft"
}, qC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, EC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
  },
  null,
  -1
  /* HOISTED */
), NC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
  },
  null,
  -1
  /* HOISTED */
), RC = [
  EC,
  NC
];
function UC(e, a, n, o, t, r) {
  return c(), l("svg", qC, RC);
}
var GC = /* @__PURE__ */ _(DC, [["render", UC], ["__file", "top-left.vue"]]), KC = {
  name: "TopRight"
}, WC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ZC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
  },
  null,
  -1
  /* HOISTED */
), JC = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
  },
  null,
  -1
  /* HOISTED */
), QC = [
  ZC,
  JC
];
function YC(e, a, n, o, t, r) {
  return c(), l("svg", WC, QC);
}
var XC = /* @__PURE__ */ _(KC, [["render", YC], ["__file", "top-right.vue"]]), eb = {
  name: "Top"
}, ab = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, nb = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
  },
  null,
  -1
  /* HOISTED */
), ob = [
  nb
];
function tb(e, a, n, o, t, r) {
  return c(), l("svg", ab, ob);
}
var db = /* @__PURE__ */ _(eb, [["render", tb], ["__file", "top.vue"]]), rb = {
  name: "TrendCharts"
}, cb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lb = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
  },
  null,
  -1
  /* HOISTED */
), _b = [
  lb
];
function ib(e, a, n, o, t, r) {
  return c(), l("svg", cb, _b);
}
var sb = /* @__PURE__ */ _(rb, [["render", ib], ["__file", "trend-charts.vue"]]), mb = {
  name: "TrophyBase"
}, ub = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, hb = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4C752 67.2 745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6C259.2 80 256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 16-9.6 22.4 3.2 108.8 25.6 185.6 64 224 34.4 34.4 77.56 55.65 127.65 61.99 10.91 20.44 24.78 39.25 41.95 56.41 40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86 17.2-17.2 31.51-36.06 42.81-56.55 48.93-6.51 90.02-27.7 126.79-61.85 38.4-38.4 60.8-112 64-224 0-6.4-3.2-16-9.6-22.4zM256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2-22.4-22.4-35.2-70.4-41.6-147.2H256v182.4zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6C342.4 480 320 438.4 320 384V128h384v256c0 54.4-19.2 99.2-57.6 134.4zm172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2zM768 896H256c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6z"
  },
  null,
  -1
  /* HOISTED */
), vb = [
  hb
];
function pb(e, a, n, o, t, r) {
  return c(), l("svg", ub, vb);
}
var fb = /* @__PURE__ */ _(mb, [["render", pb], ["__file", "trophy-base.vue"]]), gb = {
  name: "Trophy"
}, wb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $b = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
  },
  null,
  -1
  /* HOISTED */
), zb = [
  $b
];
function xb(e, a, n, o, t, r) {
  return c(), l("svg", wb, zb);
}
var yb = /* @__PURE__ */ _(gb, [["render", xb], ["__file", "trophy.vue"]]), Cb = {
  name: "TurnOff"
}, bb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Mb = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
  },
  null,
  -1
  /* HOISTED */
), Hb = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
  },
  null,
  -1
  /* HOISTED */
), Vb = [
  Mb,
  Hb
];
function Ab(e, a, n, o, t, r) {
  return c(), l("svg", bb, Vb);
}
var Bb = /* @__PURE__ */ _(Cb, [["render", Ab], ["__file", "turn-off.vue"]]), Lb = {
  name: "Umbrella"
}, Sb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tb = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
  },
  null,
  -1
  /* HOISTED */
), kb = [
  Tb
];
function Ob(e, a, n, o, t, r) {
  return c(), l("svg", Sb, kb);
}
var jb = /* @__PURE__ */ _(Lb, [["render", Ob], ["__file", "umbrella.vue"]]), Pb = {
  name: "Unlock"
}, Ib = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fb = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
  },
  null,
  -1
  /* HOISTED */
), Db = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
  },
  null,
  -1
  /* HOISTED */
), qb = [
  Fb,
  Db
];
function Eb(e, a, n, o, t, r) {
  return c(), l("svg", Ib, qb);
}
var Nb = /* @__PURE__ */ _(Pb, [["render", Eb], ["__file", "unlock.vue"]]), Rb = {
  name: "UploadFilled"
}, Ub = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gb = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
  },
  null,
  -1
  /* HOISTED */
), Kb = [
  Gb
];
function Wb(e, a, n, o, t, r) {
  return c(), l("svg", Ub, Kb);
}
var Zb = /* @__PURE__ */ _(Rb, [["render", Wb], ["__file", "upload-filled.vue"]]), Jb = {
  name: "Upload"
}, Qb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Yb = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
  },
  null,
  -1
  /* HOISTED */
), Xb = [
  Yb
];
function eM(e, a, n, o, t, r) {
  return c(), l("svg", Qb, Xb);
}
var aM = /* @__PURE__ */ _(Jb, [["render", eM], ["__file", "upload.vue"]]), nM = {
  name: "UserFilled"
}, oM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, tM = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), dM = [
  tM
];
function rM(e, a, n, o, t, r) {
  return c(), l("svg", oM, dM);
}
var cM = /* @__PURE__ */ _(nM, [["render", rM], ["__file", "user-filled.vue"]]), lM = {
  name: "User"
}, _M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, iM = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
  },
  null,
  -1
  /* HOISTED */
), sM = [
  iM
];
function mM(e, a, n, o, t, r) {
  return c(), l("svg", _M, sM);
}
var uM = /* @__PURE__ */ _(lM, [["render", mM], ["__file", "user.vue"]]), hM = {
  name: "Van"
}, vM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pM = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
  },
  null,
  -1
  /* HOISTED */
), fM = [
  pM
];
function gM(e, a, n, o, t, r) {
  return c(), l("svg", vM, fM);
}
var wM = /* @__PURE__ */ _(hM, [["render", gM], ["__file", "van.vue"]]), $M = {
  name: "VideoCameraFilled"
}, zM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xM = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
  },
  null,
  -1
  /* HOISTED */
), yM = [
  xM
];
function CM(e, a, n, o, t, r) {
  return c(), l("svg", zM, yM);
}
var bM = /* @__PURE__ */ _($M, [["render", CM], ["__file", "video-camera-filled.vue"]]), MM = {
  name: "VideoCamera"
}, HM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, VM = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
  },
  null,
  -1
  /* HOISTED */
), AM = [
  VM
];
function BM(e, a, n, o, t, r) {
  return c(), l("svg", HM, AM);
}
var LM = /* @__PURE__ */ _(MM, [["render", BM], ["__file", "video-camera.vue"]]), SM = {
  name: "VideoPause"
}, TM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, kM = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
  },
  null,
  -1
  /* HOISTED */
), OM = [
  kM
];
function jM(e, a, n, o, t, r) {
  return c(), l("svg", TM, OM);
}
var PM = /* @__PURE__ */ _(SM, [["render", jM], ["__file", "video-pause.vue"]]), IM = {
  name: "VideoPlay"
}, FM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, DM = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
  },
  null,
  -1
  /* HOISTED */
), qM = [
  DM
];
function EM(e, a, n, o, t, r) {
  return c(), l("svg", FM, qM);
}
var NM = /* @__PURE__ */ _(IM, [["render", EM], ["__file", "video-play.vue"]]), RM = {
  name: "View"
}, UM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, GM = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), KM = [
  GM
];
function WM(e, a, n, o, t, r) {
  return c(), l("svg", UM, KM);
}
var ZM = /* @__PURE__ */ _(RM, [["render", WM], ["__file", "view.vue"]]), JM = {
  name: "WalletFilled"
}, QM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, YM = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
  },
  null,
  -1
  /* HOISTED */
), XM = [
  YM
];
function eH(e, a, n, o, t, r) {
  return c(), l("svg", QM, XM);
}
var aH = /* @__PURE__ */ _(JM, [["render", eH], ["__file", "wallet-filled.vue"]]), nH = {
  name: "Wallet"
}, oH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, tH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
  },
  null,
  -1
  /* HOISTED */
), dH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), rH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
  },
  null,
  -1
  /* HOISTED */
), cH = [
  tH,
  dH,
  rH
];
function lH(e, a, n, o, t, r) {
  return c(), l("svg", oH, cH);
}
var _H = /* @__PURE__ */ _(nH, [["render", lH], ["__file", "wallet.vue"]]), iH = {
  name: "WarnTriangleFilled"
}, sH = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, mH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z"
  },
  null,
  -1
  /* HOISTED */
), uH = [
  mH
];
function hH(e, a, n, o, t, r) {
  return c(), l("svg", sH, uH);
}
var vH = /* @__PURE__ */ _(iH, [["render", hH], ["__file", "warn-triangle-filled.vue"]]), pH = {
  name: "WarningFilled"
}, fH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), wH = [
  gH
];
function $H(e, a, n, o, t, r) {
  return c(), l("svg", fH, wH);
}
var d2 = /* @__PURE__ */ _(pH, [["render", $H], ["__file", "warning-filled.vue"]]), zH = {
  name: "Warning"
}, xH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), CH = [
  yH
];
function bH(e, a, n, o, t, r) {
  return c(), l("svg", xH, CH);
}
var MH = /* @__PURE__ */ _(zH, [["render", bH], ["__file", "warning.vue"]]), HH = {
  name: "Watch"
}, VH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, AH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
  },
  null,
  -1
  /* HOISTED */
), BH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), LH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
  },
  null,
  -1
  /* HOISTED */
), SH = [
  AH,
  BH,
  LH
];
function TH(e, a, n, o, t, r) {
  return c(), l("svg", VH, SH);
}
var kH = /* @__PURE__ */ _(HH, [["render", TH], ["__file", "watch.vue"]]), OH = {
  name: "Watermelon"
}, jH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, PH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
  },
  null,
  -1
  /* HOISTED */
), IH = [
  PH
];
function FH(e, a, n, o, t, r) {
  return c(), l("svg", jH, IH);
}
var DH = /* @__PURE__ */ _(OH, [["render", FH], ["__file", "watermelon.vue"]]), qH = {
  name: "WindPower"
}, EH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, NH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
  },
  null,
  -1
  /* HOISTED */
), RH = [
  NH
];
function UH(e, a, n, o, t, r) {
  return c(), l("svg", EH, RH);
}
var GH = /* @__PURE__ */ _(qH, [["render", UH], ["__file", "wind-power.vue"]]), KH = {
  name: "ZoomIn"
}, WH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ZH = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
  },
  null,
  -1
  /* HOISTED */
), JH = [
  ZH
];
function QH(e, a, n, o, t, r) {
  return c(), l("svg", WH, JH);
}
var YH = /* @__PURE__ */ _(KH, [["render", QH], ["__file", "zoom-in.vue"]]), XH = {
  name: "ZoomOut"
}, eV = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, aV = /* @__PURE__ */ d(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), nV = [
  aV
];
function oV(e, a, n, o, t, r) {
  return c(), l("svg", eV, nV);
}
var tV = /* @__PURE__ */ _(XH, [["render", oV], ["__file", "zoom-out.vue"]]);
const x0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLocation: k1,
  Aim: q1,
  AlarmClock: W1,
  Apple: ea,
  ArrowDown: ma,
  ArrowDownBold: ra,
  ArrowLeft: Ca,
  ArrowLeftBold: ga,
  ArrowRight: ja,
  ArrowRightBold: Ba,
  ArrowUp: Wa,
  ArrowUpBold: Ea,
  Avatar: e4,
  Back: c4,
  Baseball: h4,
  Basketball: $4,
  Bell: k4,
  BellFilled: M4,
  Bicycle: D4,
  Bottom: rn,
  BottomLeft: K4,
  BottomRight: en,
  Bowl: un,
  Box: zn,
  Briefcase: Hn,
  Brush: Fn,
  BrushFilled: Tn,
  Burger: Un,
  Calendar: Qn,
  Camera: _3,
  CameraFilled: o3,
  CaretBottom: v3,
  CaretLeft: z3,
  CaretRight: H3,
  CaretTop: T3,
  Cellphone: F3,
  ChatDotRound: G3,
  ChatDotSquare: X3,
  ChatLineRound: co,
  ChatLineSquare: ho,
  ChatRound: $o,
  ChatSquare: Mo,
  Check: So,
  Checked: Io,
  Cherry: Ro,
  Chicken: Jo,
  ChromeFilled: tt,
  CircleCheck: ft,
  CircleCheckFilled: it,
  CircleClose: At,
  CircleCloseFilled: n2,
  CirclePlus: Nt,
  CirclePlusFilled: Ot,
  Clock: Qt,
  Close: z0,
  CloseBold: o6,
  Cloudy: h6,
  Coffee: M6,
  CoffeeCup: $6,
  Coin: k6,
  ColdDrink: D6,
  Collection: X6,
  CollectionTag: G6,
  Comment: dd,
  Compass: md,
  Connection: wd,
  Coordinate: Md,
  CopyDocument: Td,
  Cpu: Dd,
  CreditCard: Kd,
  Crop: er,
  DArrowLeft: rr,
  DArrowRight: mr,
  DCaret: gr,
  DataAnalysis: Cr,
  DataBoard: Sr,
  DataLine: Ir,
  Delete: tc,
  DeleteFilled: Rr,
  DeleteLocation: Yr,
  Dessert: ic,
  Discount: fc,
  Dish: Ac,
  DishDot: yc,
  Document: s8,
  DocumentAdd: Oc,
  DocumentChecked: qc,
  DocumentCopy: Kc,
  DocumentDelete: Xc,
  DocumentRemove: d8,
  Download: f8,
  Drizzling: y8,
  Edit: j8,
  EditPen: A8,
  Eleme: W8,
  ElemeFilled: E8,
  ElementPlus: el,
  Expand: rl,
  Failed: ml,
  Female: $l,
  Files: Ml,
  Film: Tl,
  Filter: Fl,
  Finished: Ul,
  FirstAidKit: Yl,
  Flag: t5,
  Fold: i5,
  Folder: G5,
  FolderAdd: p5,
  FolderChecked: x5,
  FolderDelete: V5,
  FolderOpened: k5,
  FolderRemove: D5,
  Food: Y5,
  Football: d_,
  ForkSpoon: s_,
  Fries: f_,
  FullScreen: y_,
  Goblet: K_,
  GobletFull: A_,
  GobletSquare: q_,
  GobletSquareFull: O_,
  GoldMedal: ei,
  Goods: mi,
  GoodsFilled: ri,
  Grape: gi,
  Grid: Ci,
  Guide: Li,
  Handbag: Pi,
  Headset: Ni,
  Help: as,
  HelpFilled: Zi,
  Hide: ls,
  Histogram: hs,
  HomeFilled: $s,
  HotWater: Ms,
  House: Ss,
  IceCream: Js,
  IceCreamRound: Is,
  IceCreamSquare: Rs,
  IceDrink: nm,
  IceTea: lm,
  InfoFilled: o2,
  Iphone: wm,
  Key: bm,
  KnifeFork: Lm,
  Lightning: Im,
  Link: Rm,
  List: Jm,
  Loading: nu,
  Location: yu,
  LocationFilled: lu,
  LocationInformation: pu,
  Lock: Bu,
  Lollipop: ju,
  MagicStick: Eu,
  Magnet: Wu,
  Male: n9,
  Management: l9,
  MapLocation: v9,
  Medal: x9,
  Memo: B9,
  Menu: j9,
  Message: Z9,
  MessageBox: E9,
  Mic: ah,
  Microphone: ch,
  MilkTea: uh,
  Minus: wh,
  Money: Hh,
  Monitor: Th,
  Moon: Gh,
  MoonNight: Dh,
  More: tv,
  MoreFilled: Yh,
  MostlyCloudy: iv,
  Mouse: fv,
  Mug: yv,
  Mute: Pv,
  MuteNotification: Bv,
  NoSmoking: Nv,
  Notebook: Jv,
  Notification: o7,
  Odometer: s7,
  OfficeBuilding: w7,
  Open: M7,
  Operation: S7,
  Opportunity: I7,
  Orange: R7,
  Paperclip: J7,
  PartlyCloudy: op,
  Pear: _p,
  Phone: zp,
  PhoneFilled: vp,
  Picture: qp,
  PictureFilled: Hp,
  PictureRounded: kp,
  PieChart: Wp,
  Place: nf,
  Platform: lf,
  Plus: vf,
  Pointer: zf,
  Position: Hf,
  Postcard: kf,
  Pouring: Df,
  Present: Zf,
  PriceTag: ng,
  Printer: lg,
  Promotion: hg,
  QuartzWatch: xg,
  QuestionFilled: Vg,
  Rank: kg,
  Reading: Wg,
  ReadingLamp: qg,
  Refresh: mw,
  RefreshLeft: ew,
  RefreshRight: rw,
  Refrigerator: gw,
  Remove: Lw,
  RemoveFilled: Cw,
  Right: Pw,
  ScaleToOriginal: Nw,
  School: Qw,
  Scissor: o$,
  Search: _$,
  Select: v$,
  Sell: z$,
  SemiSelect: H$,
  Service: T$,
  SetUp: E$,
  Setting: W$,
  Share: ez,
  Ship: rz,
  Shop: mz,
  ShoppingBag: wz,
  ShoppingCart: Sz,
  ShoppingCartFull: Mz,
  ShoppingTrolley: Iz,
  Smoking: Uz,
  Soccer: Qz,
  SoldOut: ox,
  Sort: zx,
  SortDown: _x,
  SortUp: vx,
  Stamp: Hx,
  Star: Fx,
  StarFilled: Tx,
  Stopwatch: Gx,
  SuccessFilled: t2,
  Sugar: oy,
  Suitcase: py,
  SuitcaseLine: _y,
  Sunny: xy,
  Sunrise: Vy,
  Sunset: ky,
  Switch: eC,
  SwitchButton: qy,
  SwitchFilled: Wy,
  TakeawayBox: rC,
  Ticket: mC,
  Tickets: gC,
  Timer: MC,
  ToiletPaper: TC,
  Tools: FC,
  Top: db,
  TopLeft: GC,
  TopRight: XC,
  TrendCharts: sb,
  Trophy: yb,
  TrophyBase: fb,
  TurnOff: Bb,
  Umbrella: jb,
  Unlock: Nb,
  Upload: aM,
  UploadFilled: Zb,
  User: uM,
  UserFilled: cM,
  Van: wM,
  VideoCamera: LM,
  VideoCameraFilled: bM,
  VideoPause: PM,
  VideoPlay: NM,
  View: ZM,
  Wallet: _H,
  WalletFilled: aH,
  WarnTriangleFilled: vH,
  Warning: MH,
  WarningFilled: d2,
  Watch: kH,
  Watermelon: DH,
  WindPower: GH,
  ZoomIn: YH,
  ZoomOut: tV
}, Symbol.toStringTag, { value: "Module" })), ee = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
var B2;
const Ce = typeof window < "u", dV = (e) => typeof e == "string", rV = () => {
};
Ce && ((B2 = window == null ? void 0 : window.navigator) != null && B2.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function r2(e) {
  return typeof e == "function" ? e() : w(e);
}
function cV(e) {
  return e;
}
function c2(e) {
  return h1() ? (v1(e), !0) : !1;
}
function lV(e, a = !0) {
  xe() ? ye(e) : a ? e() : f1(e);
}
function _V(e, a, n = {}) {
  const {
    immediate: o = !0
  } = n, t = y(!1);
  let r = null;
  function i() {
    r && (clearTimeout(r), r = null);
  }
  function s() {
    t.value = !1, i();
  }
  function h(...m) {
    i(), t.value = !0, r = setTimeout(() => {
      t.value = !1, r = null, e(...m);
    }, r2(a));
  }
  return o && (t.value = !0, Ce && h()), c2(s), {
    isPending: p1(t),
    start: h,
    stop: s
  };
}
function y0(e) {
  var a;
  const n = r2(e);
  return (a = n == null ? void 0 : n.$el) != null ? a : n;
}
const C0 = Ce ? window : void 0;
function iV(...e) {
  let a, n, o, t;
  if (dV(e[0]) || Array.isArray(e[0]) ? ([n, o, t] = e, a = C0) : [a, n, o, t] = e, !a)
    return rV;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], i = () => {
    r.forEach((v) => v()), r.length = 0;
  }, s = (v, f, C, $) => (v.addEventListener(f, C, $), () => v.removeEventListener(f, C, $)), h = R(() => [y0(a), r2(t)], ([v, f]) => {
    i(), v && r.push(...n.flatMap((C) => o.map(($) => s(v, C, $, f))));
  }, { immediate: !0, flush: "post" }), m = () => {
    h(), i();
  };
  return c2(m), m;
}
function sV(e, a = !1) {
  const n = y(), o = () => n.value = !!e();
  return o(), lV(o, a), n;
}
const L2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, S2 = "__vueuse_ssr_handlers__";
L2[S2] = L2[S2] || {};
var T2 = Object.getOwnPropertySymbols, mV = Object.prototype.hasOwnProperty, uV = Object.prototype.propertyIsEnumerable, hV = (e, a) => {
  var n = {};
  for (var o in e)
    mV.call(e, o) && a.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && T2)
    for (var o of T2(e))
      a.indexOf(o) < 0 && uV.call(e, o) && (n[o] = e[o]);
  return n;
};
function vV(e, a, n = {}) {
  const o = n, { window: t = C0 } = o, r = hV(o, ["window"]);
  let i;
  const s = sV(() => t && "ResizeObserver" in t), h = () => {
    i && (i.disconnect(), i = void 0);
  }, m = R(() => y0(e), (f) => {
    h(), s.value && t && f && (i = new ResizeObserver(a), i.observe(f, r));
  }, { immediate: !0, flush: "post" }), v = () => {
    h(), m();
  };
  return c2(v), {
    isSupported: s,
    stop: v
  };
}
var k2;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(k2 || (k2 = {}));
var pV = Object.defineProperty, O2 = Object.getOwnPropertySymbols, fV = Object.prototype.hasOwnProperty, gV = Object.prototype.propertyIsEnumerable, j2 = (e, a, n) => a in e ? pV(e, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[a] = n, wV = (e, a) => {
  for (var n in a || (a = {}))
    fV.call(a, n) && j2(e, n, a[n]);
  if (O2)
    for (var n of O2(a))
      gV.call(a, n) && j2(e, n, a[n]);
  return e;
};
const $V = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
wV({
  linear: cV
}, $V);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const zV = Object.prototype.hasOwnProperty, P2 = (e, a) => zV.call(e, a), We = (e) => typeof e == "function", we = (e) => typeof e == "string", b0 = (e) => e !== null && typeof e == "object";
var xV = typeof global == "object" && global && global.Object === Object && global;
const yV = xV;
var CV = typeof self == "object" && self && self.Object === Object && self, bV = yV || CV || Function("return this")();
const l2 = bV;
var MV = l2.Symbol;
const ce = MV;
var M0 = Object.prototype, HV = M0.hasOwnProperty, VV = M0.toString, fe = ce ? ce.toStringTag : void 0;
function AV(e) {
  var a = HV.call(e, fe), n = e[fe];
  try {
    e[fe] = void 0;
    var o = !0;
  } catch {
  }
  var t = VV.call(e);
  return o && (a ? e[fe] = n : delete e[fe]), t;
}
var BV = Object.prototype, LV = BV.toString;
function SV(e) {
  return LV.call(e);
}
var TV = "[object Null]", kV = "[object Undefined]", I2 = ce ? ce.toStringTag : void 0;
function H0(e) {
  return e == null ? e === void 0 ? kV : TV : I2 && I2 in Object(e) ? AV(e) : SV(e);
}
function OV(e) {
  return e != null && typeof e == "object";
}
var jV = "[object Symbol]";
function _2(e) {
  return typeof e == "symbol" || OV(e) && H0(e) == jV;
}
function PV(e, a) {
  for (var n = -1, o = e == null ? 0 : e.length, t = Array(o); ++n < o; )
    t[n] = a(e[n], n, e);
  return t;
}
var IV = Array.isArray;
const i2 = IV;
var FV = 1 / 0, F2 = ce ? ce.prototype : void 0, D2 = F2 ? F2.toString : void 0;
function V0(e) {
  if (typeof e == "string")
    return e;
  if (i2(e))
    return PV(e, V0) + "";
  if (_2(e))
    return D2 ? D2.call(e) : "";
  var a = e + "";
  return a == "0" && 1 / e == -FV ? "-0" : a;
}
function A0(e) {
  var a = typeof e;
  return e != null && (a == "object" || a == "function");
}
var DV = "[object AsyncFunction]", qV = "[object Function]", EV = "[object GeneratorFunction]", NV = "[object Proxy]";
function RV(e) {
  if (!A0(e))
    return !1;
  var a = H0(e);
  return a == qV || a == EV || a == DV || a == NV;
}
var UV = l2["__core-js_shared__"];
const Ue = UV;
var q2 = function() {
  var e = /[^.]+$/.exec(Ue && Ue.keys && Ue.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function GV(e) {
  return !!q2 && q2 in e;
}
var KV = Function.prototype, WV = KV.toString;
function ZV(e) {
  if (e != null) {
    try {
      return WV.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var JV = /[\\^$.*+?()[\]{}|]/g, QV = /^\[object .+?Constructor\]$/, YV = Function.prototype, XV = Object.prototype, eA = YV.toString, aA = XV.hasOwnProperty, nA = RegExp(
  "^" + eA.call(aA).replace(JV, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oA(e) {
  if (!A0(e) || GV(e))
    return !1;
  var a = RV(e) ? nA : QV;
  return a.test(ZV(e));
}
function tA(e, a) {
  return e == null ? void 0 : e[a];
}
function B0(e, a) {
  var n = tA(e, a);
  return oA(n) ? n : void 0;
}
function dA(e, a) {
  return e === a || e !== e && a !== a;
}
var rA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cA = /^\w*$/;
function lA(e, a) {
  if (i2(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || _2(e) ? !0 : cA.test(e) || !rA.test(e) || a != null && e in Object(a);
}
var _A = B0(Object, "create");
const $e = _A;
function iA() {
  this.__data__ = $e ? $e(null) : {}, this.size = 0;
}
function sA(e) {
  var a = this.has(e) && delete this.__data__[e];
  return this.size -= a ? 1 : 0, a;
}
var mA = "__lodash_hash_undefined__", uA = Object.prototype, hA = uA.hasOwnProperty;
function vA(e) {
  var a = this.__data__;
  if ($e) {
    var n = a[e];
    return n === mA ? void 0 : n;
  }
  return hA.call(a, e) ? a[e] : void 0;
}
var pA = Object.prototype, fA = pA.hasOwnProperty;
function gA(e) {
  var a = this.__data__;
  return $e ? a[e] !== void 0 : fA.call(a, e);
}
var wA = "__lodash_hash_undefined__";
function $A(e, a) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = $e && a === void 0 ? wA : a, this;
}
function te(e) {
  var a = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++a < n; ) {
    var o = e[a];
    this.set(o[0], o[1]);
  }
}
te.prototype.clear = iA;
te.prototype.delete = sA;
te.prototype.get = vA;
te.prototype.has = gA;
te.prototype.set = $A;
function zA() {
  this.__data__ = [], this.size = 0;
}
function je(e, a) {
  for (var n = e.length; n--; )
    if (dA(e[n][0], a))
      return n;
  return -1;
}
var xA = Array.prototype, yA = xA.splice;
function CA(e) {
  var a = this.__data__, n = je(a, e);
  if (n < 0)
    return !1;
  var o = a.length - 1;
  return n == o ? a.pop() : yA.call(a, n, 1), --this.size, !0;
}
function bA(e) {
  var a = this.__data__, n = je(a, e);
  return n < 0 ? void 0 : a[n][1];
}
function MA(e) {
  return je(this.__data__, e) > -1;
}
function HA(e, a) {
  var n = this.__data__, o = je(n, e);
  return o < 0 ? (++this.size, n.push([e, a])) : n[o][1] = a, this;
}
function _e(e) {
  var a = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++a < n; ) {
    var o = e[a];
    this.set(o[0], o[1]);
  }
}
_e.prototype.clear = zA;
_e.prototype.delete = CA;
_e.prototype.get = bA;
_e.prototype.has = MA;
_e.prototype.set = HA;
var VA = B0(l2, "Map");
const AA = VA;
function BA() {
  this.size = 0, this.__data__ = {
    hash: new te(),
    map: new (AA || _e)(),
    string: new te()
  };
}
function LA(e) {
  var a = typeof e;
  return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? e !== "__proto__" : e === null;
}
function Pe(e, a) {
  var n = e.__data__;
  return LA(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
}
function SA(e) {
  var a = Pe(this, e).delete(e);
  return this.size -= a ? 1 : 0, a;
}
function TA(e) {
  return Pe(this, e).get(e);
}
function kA(e) {
  return Pe(this, e).has(e);
}
function OA(e, a) {
  var n = Pe(this, e), o = n.size;
  return n.set(e, a), this.size += n.size == o ? 0 : 1, this;
}
function de(e) {
  var a = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++a < n; ) {
    var o = e[a];
    this.set(o[0], o[1]);
  }
}
de.prototype.clear = BA;
de.prototype.delete = SA;
de.prototype.get = TA;
de.prototype.has = kA;
de.prototype.set = OA;
var jA = "Expected a function";
function s2(e, a) {
  if (typeof e != "function" || a != null && typeof a != "function")
    throw new TypeError(jA);
  var n = function() {
    var o = arguments, t = a ? a.apply(this, o) : o[0], r = n.cache;
    if (r.has(t))
      return r.get(t);
    var i = e.apply(this, o);
    return n.cache = r.set(t, i) || r, i;
  };
  return n.cache = new (s2.Cache || de)(), n;
}
s2.Cache = de;
var PA = 500;
function IA(e) {
  var a = s2(e, function(o) {
    return n.size === PA && n.clear(), o;
  }), n = a.cache;
  return a;
}
var FA = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, DA = /\\(\\)?/g, qA = IA(function(e) {
  var a = [];
  return e.charCodeAt(0) === 46 && a.push(""), e.replace(FA, function(n, o, t, r) {
    a.push(t ? r.replace(DA, "$1") : o || n);
  }), a;
});
const EA = qA;
function NA(e) {
  return e == null ? "" : V0(e);
}
function RA(e, a) {
  return i2(e) ? e : lA(e, a) ? [e] : EA(NA(e));
}
var UA = 1 / 0;
function GA(e) {
  if (typeof e == "string" || _2(e))
    return e;
  var a = e + "";
  return a == "0" && 1 / e == -UA ? "-0" : a;
}
function KA(e, a) {
  a = RA(a, e);
  for (var n = 0, o = a.length; e != null && n < o; )
    e = e[GA(a[n++])];
  return n && n == o ? e : void 0;
}
function WA(e, a, n) {
  var o = e == null ? void 0 : KA(e, a);
  return o === void 0 ? n : o;
}
function ZA(e) {
  for (var a = -1, n = e == null ? 0 : e.length, o = {}; ++a < n; ) {
    var t = e[a];
    o[t[0]] = t[1];
  }
  return o;
}
const JA = (e) => e === void 0, ze = (e) => typeof e == "number", QA = (e) => typeof Element > "u" ? !1 : e instanceof Element, YA = (e) => we(e) ? !Number.isNaN(Number(e)) : !1, E2 = (e) => Object.keys(e);
class XA extends Error {
  constructor(a) {
    super(a), this.name = "ElementPlusError";
  }
}
function m2(e, a) {
  if (process.env.NODE_ENV !== "production") {
    const n = we(e) ? new XA(`[${e}] ${a}`) : e;
    console.warn(n);
  }
}
const eB = "utils/dom/style";
function aB(e, a = "px") {
  if (!e)
    return "";
  if (ze(e) || YA(e))
    return `${e}${a}`;
  if (we(e))
    return e;
  m2(eB, "binding value must be a string or number");
}
const L0 = "__epPropKey", ae = (e) => e, nB = (e) => b0(e) && !!e[L0], S0 = (e, a) => {
  if (!b0(e) || nB(e))
    return e;
  const { values: n, required: o, default: t, type: r, validator: i } = e, h = {
    type: r,
    required: !!o,
    validator: n || i ? (m) => {
      let v = !1, f = [];
      if (n && (f = Array.from(n), P2(e, "default") && f.push(t), v || (v = f.includes(m))), i && (v || (v = i(m))), !v && f.length > 0) {
        const C = [...new Set(f)].map(($) => JSON.stringify($)).join(", ");
        g1(`Invalid prop: validation failed${a ? ` for prop "${a}"` : ""}. Expected one of [${C}], got value ${JSON.stringify(m)}.`);
      }
      return v;
    } : void 0,
    [L0]: !0
  };
  return P2(e, "default") && (h.default = t), h;
}, Ie = (e) => ZA(Object.entries(e).map(([a, n]) => [
  a,
  S0(n, a)
])), oB = ae([
  String,
  Object,
  Function
]), tB = {
  Close: z0,
  SuccessFilled: t2,
  InfoFilled: o2,
  WarningFilled: d2,
  CircleCloseFilled: n2
}, N2 = {
  success: t2,
  warning: d2,
  error: n2,
  info: o2
}, T0 = (e, a) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(a ?? {})])
      n.component(o.name, o);
  }, a)
    for (const [n, o] of Object.entries(a))
      e[n] = o;
  return e;
}, dB = (e, a) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[a] = e;
}, e), rB = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, cB = ["", "default", "small", "large"], lB = (e) => e;
var _B = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const iB = (e) => (a, n) => sB(a, n, w(e)), sB = (e, a, n) => WA(n, e, e).replace(/\{(\w+)\}/g, (o, t) => {
  var r;
  return `${(r = a == null ? void 0 : a[t]) != null ? r : `{${t}}`}`;
}), mB = (e) => {
  const a = T(() => w(e).name), n = w1(e) ? e : y(e);
  return {
    lang: a,
    locale: n,
    t: iB(e)
  };
}, k0 = Symbol("localeContextKey"), uB = (e) => {
  const a = e || Oe(k0, y());
  return mB(T(() => a.value || _B));
}, Ae = "el", hB = "is-", ne = (e, a, n, o, t) => {
  let r = `${e}-${a}`;
  return n && (r += `-${n}`), o && (r += `__${o}`), t && (r += `--${t}`), r;
}, O0 = Symbol("namespaceContextKey"), vB = (e) => {
  const a = e || (xe() ? Oe(O0, y(Ae)) : y(Ae));
  return T(() => w(a) || Ae);
}, u2 = (e, a) => {
  const n = vB(a);
  return {
    namespace: n,
    b: (g = "") => ne(n.value, e, g, "", ""),
    e: (g) => g ? ne(n.value, e, "", g, "") : "",
    m: (g) => g ? ne(n.value, e, "", "", g) : "",
    be: (g, p) => g && p ? ne(n.value, e, g, p, "") : "",
    em: (g, p) => g && p ? ne(n.value, e, "", g, p) : "",
    bm: (g, p) => g && p ? ne(n.value, e, g, "", p) : "",
    bem: (g, p, u) => g && p && u ? ne(n.value, e, g, p, u) : "",
    is: (g, ...p) => {
      const u = p.length >= 1 ? p[0] : !0;
      return g && u ? `${hB}${g}` : "";
    },
    cssVar: (g) => {
      const p = {};
      for (const u in g)
        g[u] && (p[`--${n.value}-${u}`] = g[u]);
      return p;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const p = {};
      for (const u in g)
        g[u] && (p[`--${n.value}-${e}-${u}`] = g[u]);
      return p;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
}, R2 = y(0), j0 = 2e3, P0 = Symbol("zIndexContextKey"), pB = (e) => {
  const a = e || (xe() ? Oe(P0, void 0) : void 0), n = T(() => {
    const r = w(a);
    return ze(r) ? r : j0;
  }), o = T(() => n.value + R2.value);
  return {
    initialZIndex: n,
    currentZIndex: o,
    nextZIndex: () => (R2.value++, o.value)
  };
}, fB = S0({
  type: String,
  values: cB,
  required: !1
}), gB = Symbol("size"), I0 = Symbol(), Le = y();
function F0(e, a = void 0) {
  const n = xe() ? Oe(I0, Le) : Le;
  return e ? T(() => {
    var o, t;
    return (t = (o = n.value) == null ? void 0 : o[e]) != null ? t : a;
  }) : n;
}
function wB(e, a) {
  const n = F0(), o = u2(e, T(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.namespace) || Ae;
  })), t = uB(T(() => {
    var s;
    return (s = n.value) == null ? void 0 : s.locale;
  })), r = pB(T(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.zIndex) || j0;
  })), i = T(() => {
    var s;
    return w(a) || ((s = n.value) == null ? void 0 : s.size) || "";
  });
  return D0(T(() => w(n) || {})), {
    ns: o,
    locale: t,
    zIndex: r,
    size: i
  };
}
const D0 = (e, a, n = !1) => {
  var o;
  const t = !!xe(), r = t ? F0() : void 0, i = (o = a == null ? void 0 : a.provide) != null ? o : t ? $1 : void 0;
  if (!i) {
    m2("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const s = T(() => {
    const h = w(e);
    return r != null && r.value ? $B(r.value, h) : h;
  });
  return i(I0, s), i(k0, T(() => s.value.locale)), i(O0, T(() => s.value.namespace)), i(P0, T(() => s.value.zIndex)), i(gB, {
    size: T(() => s.value.size || "")
  }), (n || !Le.value) && (Le.value = s.value), s;
}, $B = (e, a) => {
  var n;
  const o = [.../* @__PURE__ */ new Set([...E2(e), ...E2(a)])], t = {};
  for (const r of o)
    t[r] = (n = a[r]) != null ? n : e[r];
  return t;
}, zB = Ie({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ae(Object)
  },
  size: fB,
  button: {
    type: ae(Object)
  },
  experimentalFeatures: {
    type: ae(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ae(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), Ze = {};
F({
  name: "ElConfigProvider",
  props: zB,
  setup(e, { slots: a }) {
    R(() => e.message, (o) => {
      Object.assign(Ze, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = D0(e);
    return () => Q(a, "default", { config: n == null ? void 0 : n.value });
  }
});
var h2 = (e, a) => {
  const n = e.__vccOpts || e;
  for (const [o, t] of a)
    n[o] = t;
  return n;
};
const xB = Ie({
  size: {
    type: ae([Number, String])
  },
  color: {
    type: String
  }
}), yB = F({
  name: "ElIcon",
  inheritAttrs: !1
}), CB = /* @__PURE__ */ F({
  ...yB,
  props: xB,
  setup(e) {
    const a = e, n = u2("icon"), o = T(() => {
      const { size: t, color: r } = a;
      return !t && !r ? {} : {
        fontSize: JA(t) ? void 0 : aB(t),
        "--color": r
      };
    });
    return (t, r) => (c(), l("i", G({
      class: w(n).b(),
      style: w(o)
    }, t.$attrs), [
      Q(t.$slots, "default")
    ], 16));
  }
});
var bB = /* @__PURE__ */ h2(CB, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const U2 = T0(bB), MB = Ie({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
}), HB = ["textContent"], VB = F({
  name: "ElBadge"
}), AB = /* @__PURE__ */ F({
  ...VB,
  props: MB,
  setup(e, { expose: a }) {
    const n = e, o = u2("badge"), t = T(() => n.isDot ? "" : ze(n.value) && ze(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`);
    return a({
      content: t
    }), (r, i) => (c(), l("div", {
      class: J(w(o).b())
    }, [
      Q(r.$slots, "default"),
      x(g0, {
        name: `${w(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: z(() => [
          w0(d("sup", {
            class: J([
              w(o).e("content"),
              w(o).em("content", r.type),
              w(o).is("fixed", !!r.$slots.default),
              w(o).is("dot", r.isDot)
            ]),
            textContent: I(w(t))
          }, null, 10, HB), [
            [$0, !r.hidden && (w(t) || r.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var BB = /* @__PURE__ */ h2(AB, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const LB = T0(BB);
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function SB(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const q0 = ["success", "info", "warning", "error"], N = lB({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: Ce ? document.body : void 0
}), TB = Ie({
  customClass: {
    type: String,
    default: N.customClass
  },
  center: {
    type: Boolean,
    default: N.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: N.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: N.duration
  },
  icon: {
    type: oB,
    default: N.icon
  },
  id: {
    type: String,
    default: N.id
  },
  message: {
    type: ae([
      String,
      Object,
      Function
    ]),
    default: N.message
  },
  onClose: {
    type: ae(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: N.showClose
  },
  type: {
    type: String,
    values: q0,
    default: N.type
  },
  offset: {
    type: Number,
    default: N.offset
  },
  zIndex: {
    type: Number,
    default: N.zIndex
  },
  grouping: {
    type: Boolean,
    default: N.grouping
  },
  repeatNum: {
    type: Number,
    default: N.repeatNum
  }
}), kB = {
  destroy: () => !0
}, Z = z1([]), OB = (e) => {
  const a = Z.findIndex((t) => t.id === e), n = Z[a];
  let o;
  return a > 0 && (o = Z[a - 1]), { current: n, prev: o };
}, jB = (e) => {
  const { prev: a } = OB(e);
  return a ? a.vm.exposed.bottom.value : 0;
}, PB = (e, a) => Z.findIndex((o) => o.id === e) > 0 ? 20 : a, IB = ["id"], FB = ["innerHTML"], DB = F({
  name: "ElMessage"
}), qB = /* @__PURE__ */ F({
  ...DB,
  props: TB,
  emits: kB,
  setup(e, { expose: a }) {
    const n = e, { Close: o } = tB, { ns: t, zIndex: r } = wB("message"), { currentZIndex: i, nextZIndex: s } = r, h = y(), m = y(!1), v = y(0);
    let f;
    const C = T(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), $ = T(() => {
      const L = n.type;
      return { [t.bm("icon", L)]: L && N2[L] };
    }), V = T(() => n.icon || N2[n.type] || ""), g = T(() => jB(n.id)), p = T(() => PB(n.id, n.offset) + g.value), u = T(() => v.value + p.value), H = T(() => ({
      top: `${p.value}px`,
      zIndex: i.value
    }));
    function j() {
      n.duration !== 0 && ({ stop: f } = _V(() => {
        q();
      }, n.duration));
    }
    function U() {
      f == null || f();
    }
    function q() {
      m.value = !1;
    }
    function A({ code: L }) {
      L === rB.esc && q();
    }
    return ye(() => {
      j(), s(), m.value = !0;
    }), R(() => n.repeatNum, () => {
      U(), j();
    }), iV(document, "keydown", A), vV(h, () => {
      v.value = h.value.getBoundingClientRect().height;
    }), a({
      visible: m,
      bottom: u,
      close: q
    }), (L, E) => (c(), b(g0, {
      name: w(t).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: E[0] || (E[0] = (pe) => L.$emit("destroy")),
      persisted: ""
    }, {
      default: z(() => [
        w0(d("div", {
          id: L.id,
          ref_key: "messageRef",
          ref: h,
          class: J([
            w(t).b(),
            { [w(t).m(L.type)]: L.type && !L.icon },
            w(t).is("center", L.center),
            w(t).is("closable", L.showClose),
            L.customClass
          ]),
          style: Ve(w(H)),
          role: "alert",
          onMouseenter: U,
          onMouseleave: j
        }, [
          L.repeatNum > 1 ? (c(), b(w(LB), {
            key: 0,
            value: L.repeatNum,
            type: w(C),
            class: J(w(t).e("badge"))
          }, null, 8, ["value", "type", "class"])) : O("v-if", !0),
          w(V) ? (c(), b(w(U2), {
            key: 1,
            class: J([w(t).e("icon"), w($)])
          }, {
            default: z(() => [
              (c(), b(K(w(V))))
            ]),
            _: 1
          }, 8, ["class"])) : O("v-if", !0),
          Q(L.$slots, "default", {}, () => [
            L.dangerouslyUseHTMLString ? (c(), l(B, { key: 1 }, [
              O(" Caution here, message could've been compromised, never use user's input as message "),
              d("p", {
                class: J(w(t).e("content")),
                innerHTML: L.message
              }, null, 10, FB)
            ], 2112)) : (c(), l("p", {
              key: 0,
              class: J(w(t).e("content"))
            }, I(L.message), 3))
          ]),
          L.showClose ? (c(), b(w(U2), {
            key: 2,
            class: J(w(t).e("closeBtn")),
            onClick: x1(q, ["stop"])
          }, {
            default: z(() => [
              x(w(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : O("v-if", !0)
        ], 46, IB), [
          [$0, m.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var EB = /* @__PURE__ */ h2(qB, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let NB = 1;
const E0 = (e) => {
  const a = !e || we(e) || a2(e) || We(e) ? { message: e } : e, n = {
    ...N,
    ...a
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (we(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    QA(o) || (m2("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), o = document.body), n.appendTo = o;
  }
  return n;
}, RB = (e) => {
  const a = Z.indexOf(e);
  if (a === -1)
    return;
  Z.splice(a, 1);
  const { handler: n } = e;
  n.close();
}, UB = ({ appendTo: e, ...a }, n) => {
  const o = `message_${NB++}`, t = a.onClose, r = document.createElement("div"), i = {
    ...a,
    id: o,
    onClose: () => {
      t == null || t(), RB(v);
    },
    onDestroy: () => {
      V2(null, r);
    }
  }, s = x(EB, i, We(i.message) || a2(i.message) ? {
    default: We(i.message) ? i.message : () => i.message
  } : null);
  s.appContext = n || le._context, V2(s, r), e.appendChild(r.firstElementChild);
  const h = s.component, v = {
    id: o,
    vnode: s,
    vm: h,
    handler: {
      close: () => {
        h.exposed.visible.value = !1;
      }
    },
    props: s.component.props
  };
  return v;
}, le = (e = {}, a) => {
  if (!Ce)
    return { close: () => {
    } };
  if (ze(Ze.max) && Z.length >= Ze.max)
    return { close: () => {
    } };
  const n = E0(e);
  if (n.grouping && Z.length) {
    const t = Z.find(({ vnode: r }) => {
      var i;
      return ((i = r.props) == null ? void 0 : i.message) === n.message;
    });
    if (t)
      return t.props.repeatNum += 1, t.props.type = n.type, t.handler;
  }
  const o = UB(n, a);
  return Z.push(o), o.handler;
};
q0.forEach((e) => {
  le[e] = (a = {}, n) => {
    const o = E0(a);
    return le({ ...o, type: e }, n);
  };
});
function GB(e) {
  for (const a of Z)
    (!e || e === a.props.type) && a.handler.close();
}
le.closeAll = GB;
le._context = null;
const KB = dB(le, "$message"), WB = (e) => {
  const a = document.createElement("input");
  a.value = e, document.body.appendChild(a), a.select(), document.execCommand("Copy"), document.body.removeChild(a), KB.success("复制成功");
}, ZB = { class: "m-choose-icon-dialog-body-height" }, JB = { class: "container" }, QB = ["onClick"], YB = /* @__PURE__ */ F({
  __name: "index",
  props: {
    title: {},
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(e, { emit: a }) {
    const n = e, o = a, t = y(n.visible), r = () => {
      o("update:visible", !n.visible);
    };
    R(
      () => n.visible,
      (s) => {
        t.value = s;
      }
    ), R(
      () => t.value,
      (s) => {
        o("update:visible", s);
      }
    );
    const i = (s) => {
      const h = `<el-icon-${ee(s)} />`;
      WB(h), t.value = !1;
    };
    return (s, h) => {
      const m = M("el-button"), v = M("el-dialog");
      return c(), l(
        B,
        null,
        [
          x(m, {
            onClick: r,
            type: "primary"
          }, {
            default: z(() => [
              Q(s.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }),
          d("div", ZB, [
            x(v, {
              title: s.title,
              modelValue: t.value,
              "onUpdate:modelValue": h[0] || (h[0] = (f) => t.value = f)
            }, {
              default: z(() => [
                d("div", JB, [
                  (c(!0), l(
                    B,
                    null,
                    P(Object.keys(x0), (f, C) => (c(), l("div", {
                      class: "item",
                      key: C,
                      onClick: ($) => i(f)
                    }, [
                      d("div", null, [
                        (c(), b(K(`el-icon-${w(ee)(f)}`)))
                      ]),
                      d(
                        "div",
                        null,
                        I(f),
                        1
                        /* TEXT */
                      )
                    ], 8, QB))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["title", "modelValue"])
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const ie = (e, a) => {
  const n = e.__vccOpts || e;
  for (const [o, t] of a)
    n[o] = t;
  return n;
}, XB = /* @__PURE__ */ ie(YB, [["__scopeId", "data-v-7725a9f7"]]), eL = {
  install(e) {
    e.component("m-choose-icon", XB);
  }
}, aL = { class: "trend" }, nL = { key: 1 }, oL = { class: "icon" }, tL = /* @__PURE__ */ F({
  __name: "index",
  props: {
    // 上升(up)/下降(down)
    type: {
      type: String,
      default: "up"
    },
    // 文字
    text: {
      type: String,
      default: "趋势"
    },
    // 上升图标
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    // 下降图标
    downIcon: {
      type: String,
      default: "ArrowDown"
    },
    // 上升趋势的图标颜色
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    // 下降趋势的图标颜色
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    // 上升趋势的文字颜色
    upTextColor: {
      type: String,
      default: "rgb(0,0,0)"
    },
    // 下降趋势的文字颜色
    downTextColor: {
      type: String,
      default: "rgb(0,0,0)"
    },
    // 颜色反转(只在默认颜色生效)
    reverseColor: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const a = e, n = y1(), o = T(() => a.type === "up" ? a.upTextColor : a.downTextColor);
    return (t, r) => (c(), l("div", aL, [
      d(
        "div",
        {
          class: "text",
          style: Ve({ color: o.value })
        },
        [
          w(n).default ? Q(t.$slots, "default", { key: 0 }, void 0, !0) : (c(), l(
            "div",
            nL,
            I(e.text),
            1
            /* TEXT */
          ))
        ],
        4
        /* STYLE */
      ),
      d("div", oL, [
        e.type === "up" ? (c(), b(K(`el-icon-${w(ee)(e.upIcon)}`), {
          key: 0,
          style: Ve({ color: e.reverseColor ? e.downIconColor : e.upIconColor })
        }, null, 8, ["style"])) : (c(), b(K(`el-icon-${w(ee)(e.downIcon)}`), {
          key: 1,
          style: Ve({ color: e.reverseColor ? e.upIconColor : e.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
});
const dL = /* @__PURE__ */ ie(tL, [["__scopeId", "data-v-ef39c879"]]), rL = {
  install(e) {
    e.component("m-trend", dL);
  }
}, cL = { class: "notificaton-popover" }, lL = /* @__PURE__ */ F({
  __name: "index",
  props: {
    // 显示的图标
    icon: {
      type: String,
      default: "Bell"
    },
    // 通知的数量
    value: {
      type: [String, Number],
      default: ""
    },
    // 通知最大值
    max: {
      type: Number,
      default: 99
    },
    // 是否显示小圆点
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (a, n) => {
      const o = M("el-badge"), t = M("el-popover");
      return c(), l("div", cL, [
        x(t, {
          placement: "bottom",
          width: 300,
          trigger: "click"
        }, {
          default: z(() => [
            Q(a.$slots, "default", {}, void 0, !0)
          ]),
          reference: z(() => [
            x(o, {
              value: e.value,
              max: e.max,
              "is-dot": e.isDot,
              style: { cursor: "pointer" }
            }, {
              default: z(() => [
                (c(), b(K(`el-icon-${w(ee)(e.icon)}`)))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["value", "max", "is-dot"])
          ]),
          _: 3
          /* FORWARDED */
        })
      ]);
    };
  }
});
const _L = /* @__PURE__ */ ie(lL, [["__scopeId", "data-v-18839092"]]), iL = {
  install(e) {
    e.component("m-notification", _L);
  }
}, sL = { class: "list-tabs__item" }, mL = ["onClick"], uL = {
  key: 0,
  class: "avatar"
}, hL = { class: "content" }, vL = {
  key: 0,
  class: "title"
}, pL = { key: 1 }, fL = {
  key: 2,
  class: "time"
}, gL = { class: "actions" }, wL = ["onClick"], $L = {
  key: 0,
  class: "a-icon"
}, zL = { class: "a-text" }, xL = /* @__PURE__ */ F({
  __name: "index",
  props: {
    // 列表内容
    list: {
      type: Array,
      required: !0
    },
    // 操作内容
    actions: {
      type: Array,
      default: []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(e, { emit: a }) {
    const n = a, o = (r, i) => {
      n("clickItem", { op: r, index: i });
    }, t = (r, i) => {
      n("clickAction", { action: r, index: i });
    };
    return (r, i) => {
      const s = M("el-avatar"), h = M("el-tag"), m = M("el-scrollbar"), v = M("el-tab-pane"), f = M("el-tabs");
      return c(), l("div", sL, [
        x(f, null, {
          default: z(() => [
            (c(!0), l(
              B,
              null,
              P(e.list, (C, $) => (c(), b(v, {
                key: $,
                label: C.title
              }, {
                default: z(() => [
                  x(
                    m,
                    { "max-height": "300px" },
                    {
                      default: z(() => [
                        (c(!0), l(
                          B,
                          null,
                          P(C.content, (V, g) => (c(), l("div", {
                            class: "container",
                            onClick: (p) => o(V, g),
                            key: g
                          }, [
                            V.avatar ? (c(), l("div", uL, [
                              x(s, {
                                size: "small",
                                src: V.avatar
                              }, null, 8, ["src"])
                            ])) : O("v-if", !0),
                            d("div", hL, [
                              V.title ? (c(), l("div", vL, [
                                d(
                                  "div",
                                  null,
                                  I(V.title),
                                  1
                                  /* TEXT */
                                ),
                                V.tag ? (c(), b(h, {
                                  key: 0,
                                  size: "small",
                                  type: V.tagType
                                }, {
                                  default: z(() => [
                                    Ke(
                                      I(V.tag),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["type"])) : O("v-if", !0)
                              ])) : O("v-if", !0),
                              V.desc ? (c(), l(
                                "div",
                                pL,
                                I(V.desc),
                                1
                                /* TEXT */
                              )) : O("v-if", !0),
                              V.time ? (c(), l(
                                "div",
                                fL,
                                I(V.time),
                                1
                                /* TEXT */
                              )) : O("v-if", !0)
                            ])
                          ], 8, mL))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        d("div", gL, [
                          (c(!0), l(
                            B,
                            null,
                            P(e.actions, (V, g) => (c(), l("div", {
                              class: J(["a-item", { border: g !== e.actions.length }]),
                              onClick: (p) => t(V, g),
                              key: g
                            }, [
                              V.icon ? (c(), l("div", $L, [
                                (c(), b(K(`el-icon-${w(ee)(V.icon)}`)))
                              ])) : O("v-if", !0),
                              d(
                                "div",
                                zL,
                                I(V.text),
                                1
                                /* TEXT */
                              )
                            ], 10, wL))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
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
              }, 1032, ["label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
const yL = /* @__PURE__ */ ie(xL, [["__scopeId", "data-v-c1811276"]]), CL = {
  install(e) {
    e.component("m-list", yL);
  }
}, bL = /* @__PURE__ */ F({
  __name: "index",
  props: {
    data: {
      type: Array,
      required: !0
    },
    defaultActive: {
      type: String,
      default: ""
    },
    router: {
      type: Boolean,
      default: !1
    },
    // 菜单标题键名
    name: {
      type: String,
      default: "name"
    },
    // 菜单标识键名
    index: {
      type: String,
      default: "index"
    },
    // 菜单图标键名
    icon: {
      type: String,
      default: "icon"
    },
    // 子菜单键名
    children: {
      type: String,
      default: "children"
    }
  },
  setup(e) {
    return (a, n) => {
      const o = M("el-menu-item"), t = M("el-sub-menu"), r = M("el-menu");
      return c(), b(r, G({
        "default-active": e.defaultActive,
        router: e.router
      }, a.$attrs), {
        default: z(() => [
          (c(!0), l(
            B,
            null,
            P(e.data, (i, s) => (c(), l(
              B,
              { key: s },
              [
                !i[e.children] || !i[e.children].length ? (c(), b(o, {
                  key: 0,
                  index: i[e.index]
                }, {
                  default: z(() => [
                    i[e.icon] ? (c(), b(K(`el-icon-${w(ee)(i[e.icon])}`), { key: 0 })) : O("v-if", !0),
                    d(
                      "span",
                      null,
                      I(i[e.name]),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"])) : O("v-if", !0),
                i[e.children] && i[e.children].length ? (c(), b(t, {
                  key: 1,
                  index: i[e.index]
                }, {
                  title: z(() => [
                    i[e.icon] ? (c(), b(K(`el-icon-${w(ee)(i[e.icon])}`), { key: 0 })) : O("v-if", !0),
                    d(
                      "span",
                      null,
                      I(i[e.name]),
                      1
                      /* TEXT */
                    )
                  ]),
                  default: z(() => [
                    (c(!0), l(
                      B,
                      null,
                      P(i[e.children], (h, m) => (c(), b(o, {
                        key: m,
                        index: h[e.index]
                      }, {
                        default: z(() => [
                          h[e.icon] ? (c(), b(K(`el-icon-${w(ee)(h[e.icon])}`), { key: 0 })) : O("v-if", !0),
                          d(
                            "span",
                            null,
                            I(h[e.name]),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["index"]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"])) : O("v-if", !0)
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
      }, 16, ["default-active", "router"]);
    };
  }
});
const ML = /* @__PURE__ */ ie(bL, [["__scopeId", "data-v-d2b05f82"]]);
function HL(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !a2(e);
}
const VL = /* @__PURE__ */ F({
  props: {
    data: {
      type: Array,
      required: !0
    },
    defaultActive: {
      type: String,
      default: ""
    },
    router: {
      type: Boolean,
      default: !1
    },
    // 菜单标题键名
    name: {
      type: String,
      default: "name"
    },
    // 菜单标识键名
    index: {
      type: String,
      default: "index"
    },
    // 菜单图标键名
    icon: {
      type: String,
      default: "icon"
    },
    // 子菜单键名
    children: {
      type: String,
      default: "children"
    }
  },
  setup(e, a) {
    const n = (t) => t.map((r) => {
      r.i = x0[r[e.icon]];
      const i = {
        title: () => x(B, null, [x(r.i, null, null), x("span", null, [r[e.name]])])
      };
      return r[e.children] && r[e.children].length ? x(M("el-sub-menu"), {
        index: r[e.index]
      }, {
        default: () => [n(r[e.children])],
        ...i
      }) : x(M("el-menu-item"), {
        index: r[e.index]
      }, {
        default: () => [x(r.i, null, null), x("span", null, [r[e.name]])]
      });
    }), o = C1();
    return () => {
      let t;
      return x(M("el-menu"), G({
        class: "menu",
        "default-active": e.defaultActive,
        router: e.router
      }, o), HL(t = n(e.data)) ? t : {
        default: () => [t]
      });
    };
  }
}), AL = {
  install(e) {
    e.component("m-menu", ML), e.component("m-infinite-menu", VL);
  }
}, BL = /* @__PURE__ */ F({
  __name: "index",
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    // 是否有动画
    isAnimation: {
      type: Boolean,
      default: !1
    },
    // 动画时常
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(e) {
    const a = e, n = y(0);
    return ye(() => {
      if (a.isAnimation) {
        const o = Math.ceil(a.time / a.percentage), t = setInterval(() => {
          n.value += 1, n.value >= a.percentage && (n.value = a.percentage, clearInterval(t));
        }, o);
      } else
        n.value = a.percentage;
    }), (o, t) => {
      const r = M("el-progress");
      return c(), b(r, G(o.$attrs, { percentage: n.value }), null, 16, ["percentage"]);
    };
  }
}), LL = {
  install(e) {
    e.component("m-progress", BL);
  }
}, SL = { style: { display: "flex" } }, TL = { style: { "margin-right": "20px" } }, kL = /* @__PURE__ */ F({
  __name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "请选择开始时间"
    },
    // 开始时间的默认选择
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    // 开始时间的步进
    startStep: {
      type: String,
      default: "00:30"
    },
    // 开始时间的结束选择
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    endPlaceholder: {
      type: String,
      default: "请选择结束时间"
    },
    // 结束时间的默认选择
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    // 结束时间的步进
    endStep: {
      type: String,
      default: "00:30"
    },
    // 结束时间的结束选择
    endTimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: a }) {
    const n = y(""), o = y(""), t = y(!0), r = a;
    return R(
      () => n.value,
      (i) => {
        i === "" ? (o.value = "", t.value = !0) : (t.value = !1, r("startChange", i));
      }
    ), R(
      () => o.value,
      (i) => {
        i && r("endChange", {
          startTime: n.value,
          endTime: i
        });
      }
    ), (i, s) => {
      const h = M("el-time-select");
      return c(), l("div", SL, [
        d("div", TL, [
          x(h, G({
            modelValue: n.value,
            "onUpdate:modelValue": s[0] || (s[0] = (m) => n.value = m),
            "max-time": o.value,
            class: "mr-4",
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startStep,
            end: e.startTimeEnd
          }, i.$attrs.startOptions), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
        ]),
        d("div", null, [
          x(h, G({
            modelValue: o.value,
            "onUpdate:modelValue": s[1] || (s[1] = (m) => o.value = m),
            "min-time": n.value,
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endStep,
            end: e.endTimeEnd,
            disabled: t.value
          }, i.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
}), OL = {
  install(e) {
    e.component("m-choose-time", kL);
  }
}, jL = { style: { display: "flex" } }, PL = { style: { "margin-right": "20px" } }, IL = /* @__PURE__ */ F({
  __name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "请选择开始日期"
    },
    endPlaceholder: {
      type: String,
      default: "请选择结束日期"
    },
    // 是否禁用今天之前的日期
    disableToday: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: a }) {
    const n = a, o = e, t = y(null), r = y(null), i = y(!0), s = (m) => {
      if (o.disableToday)
        return m.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    }, h = (m) => {
      if (t.value)
        return m.getTime() < t.value.getTime() + 1e3 * 60 * 60 * 24;
    };
    return R(
      () => t.value,
      (m) => {
        m ? (n("startChange", m), i.value = !1) : i.value = !0, r.value = null;
      }
    ), R(
      () => r.value,
      (m) => {
        m && n("endChange", {
          startDate: t.value,
          endDate: m
        });
      }
    ), (m, v) => {
      const f = M("el-date-picker");
      return c(), l("div", jL, [
        d("div", PL, [
          x(f, G({
            modelValue: t.value,
            "onUpdate:modelValue": v[0] || (v[0] = (C) => t.value = C),
            type: "date",
            placeholder: e.startPlaceholder,
            disabledDate: s
          }, m.$attrs.startOptions), null, 16, ["modelValue", "placeholder"])
        ]),
        d("div", null, [
          x(f, G({
            modelValue: r.value,
            "onUpdate:modelValue": v[1] || (v[1] = (C) => r.value = C),
            type: "date",
            placeholder: e.endPlaceholder,
            disabled: i.value,
            disabledDate: h
          }, m.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "disabled"])
        ])
      ]);
    };
  }
}), FL = {
  install(e) {
    e.component("m-choose-date", IL);
  }
}, DL = {
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
}, qL = [
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
], EL = [
  {
    name: "重庆",
    id: "C",
    data: [
      "重庆城区",
      "重庆郊县"
    ]
  }
], NL = [
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
], RL = {
  A: qL,
  C: EL,
  G: NL
}, UL = { class: "result" }, GL = { class: "container" }, KL = { class: "city" }, WL = ["onClick"], ZL = ["onClick"], JL = { class: "province" }, QL = ["onClick"], YL = ["onClick"], XL = /* @__PURE__ */ F({
  __name: "index",
  emits: ["changeCity", "changeProvince"],
  setup(e, { emit: a }) {
    const n = a, o = y("请选择"), t = y(!1), r = y("按省份"), i = y(""), s = y(DL.cities), h = y(RL), m = y([]), v = y([]), f = (p) => {
      o.value = p.name, t.value = !1, n("changeCity", p);
    }, C = (p) => {
      o.value = p, t.value = !1, n("changeProvince", p);
    }, $ = (p) => {
      const u = document.getElementById(p);
      u && u.scrollIntoView();
    }, V = (p) => {
      const u = Object.values(s.value).flat(1 / 0);
      p === "" ? m.value = u : r.value === "按城市" ? m.value = u.filter((H) => H.name.includes(p) || H.spell.includes(p)) : m.value = u.filter((H) => H.name.includes(p));
    }, g = (p) => {
      const u = v.value.find((H) => H.id === p);
      o.value = u.name, r.value === "按城市" ? n("changeCity", u) : n("changeProvince", u.name);
    };
    return ye(() => {
      const p = Object.values(s.value).flat(1 / 0);
      m.value = p, v.value = p;
    }), (p, u) => {
      const H = M("el-icon-arrowdown"), j = M("el-radio-button"), U = M("el-radio-group"), q = M("el-col"), A = M("el-option"), L = M("el-select"), E = M("el-row"), pe = M("el-scrollbar"), s1 = M("el-popover");
      return c(), b(s1, {
        visible: t.value,
        "onUpdate:visible": u[2] || (u[2] = (D) => t.value = D),
        placement: "bottom-start",
        width: 430,
        trigger: "click"
      }, {
        reference: z(() => [
          d("div", UL, [
            d(
              "div",
              null,
              I(o.value),
              1
              /* TEXT */
            ),
            d("div", null, [
              x(H, {
                class: J({ rotate: t.value })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        default: z(() => [
          d("div", GL, [
            x(E, null, {
              default: z(() => [
                x(q, { span: 8 }, {
                  default: z(() => [
                    x(U, {
                      modelValue: r.value,
                      "onUpdate:modelValue": u[0] || (u[0] = (D) => r.value = D),
                      size: "small"
                    }, {
                      default: z(() => [
                        x(j, { label: "按城市" }),
                        x(j, { label: "按省份" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                x(q, {
                  offset: 1,
                  span: 15
                }, {
                  default: z(() => [
                    x(L, {
                      modelValue: i.value,
                      "onUpdate:modelValue": u[1] || (u[1] = (D) => i.value = D),
                      placeholder: "请搜索城市",
                      size: "small",
                      filterable: "",
                      "filter-method": V,
                      onChange: g
                    }, {
                      default: z(() => [
                        (c(!0), l(
                          B,
                          null,
                          P(m.value, (D) => (c(), b(A, {
                            key: D.id,
                            label: D.name,
                            value: D.id
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
            O(" 按城市 "),
            r.value === "按城市" ? (c(), l(
              B,
              { key: 0 },
              [
                d("div", KL, [
                  (c(!0), l(
                    B,
                    null,
                    P(s.value, (D, W) => (c(), l("div", {
                      class: "city-item",
                      key: W,
                      onClick: (X) => $(W)
                    }, I(W), 9, WL))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                x(pe, { "max-height": "300px" }, {
                  default: z(() => [
                    (c(!0), l(
                      B,
                      null,
                      P(s.value, (D, W) => (c(), b(E, {
                        key: W,
                        style: { "margin-bottom": "10px" },
                        id: W
                      }, {
                        default: z(() => [
                          x(
                            q,
                            { span: 2 },
                            {
                              default: z(() => [
                                Ke(
                                  I(W) + ":",
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
                          x(
                            q,
                            {
                              span: 22,
                              class: "city-name"
                            },
                            {
                              default: z(() => [
                                (c(!0), l(
                                  B,
                                  null,
                                  P(D, (X) => (c(), l("div", {
                                    class: "city-name-item",
                                    key: X.id,
                                    onClick: (M2) => f(X)
                                  }, I(X.name), 9, ZL))),
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
            )) : (c(), l(
              B,
              { key: 1 },
              [
                O(" 按省份 "),
                d("div", JL, [
                  (c(!0), l(
                    B,
                    null,
                    P(Object.keys(h.value), (D, W) => (c(), l("div", {
                      class: "province-item",
                      key: W,
                      onClick: (X) => $(D)
                    }, I(D), 9, QL))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                x(pe, { "max-height": "300px" }, {
                  default: z(() => [
                    (c(!0), l(
                      B,
                      null,
                      P(Object.values(h.value), (D, W) => (c(), l(
                        B,
                        { key: W },
                        [
                          (c(!0), l(
                            B,
                            null,
                            P(D, (X, M2) => (c(), b(E, {
                              key: M2,
                              style: { "margin-bottom": "10px" },
                              id: X.id
                            }, {
                              default: z(() => [
                                x(
                                  q,
                                  { span: 3 },
                                  {
                                    default: z(() => [
                                      Ke(
                                        I(X.name) + ":",
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
                                x(
                                  q,
                                  {
                                    span: 21,
                                    class: "province-name"
                                  },
                                  {
                                    default: z(() => [
                                      (c(!0), l(
                                        B,
                                        null,
                                        P(X.data, (H2, m1) => (c(), l("div", {
                                          class: "province-name-item",
                                          key: m1,
                                          onClick: (OD) => C(H2)
                                        }, I(H2), 9, YL))),
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
const eS = /* @__PURE__ */ ie(XL, [["__scopeId", "data-v-8ccce181"]]), aS = {
  install(e) {
    e.component("m-choose-city", eS);
  }
};
function nS() {
  this.__data__ = [], this.size = 0;
}
var oS = nS;
function tS(e, a) {
  return e === a || e !== e && a !== a;
}
var N0 = tS, dS = N0;
function rS(e, a) {
  for (var n = e.length; n--; )
    if (dS(e[n][0], a))
      return n;
  return -1;
}
var Fe = rS, cS = Fe, lS = Array.prototype, _S = lS.splice;
function iS(e) {
  var a = this.__data__, n = cS(a, e);
  if (n < 0)
    return !1;
  var o = a.length - 1;
  return n == o ? a.pop() : _S.call(a, n, 1), --this.size, !0;
}
var sS = iS, mS = Fe;
function uS(e) {
  var a = this.__data__, n = mS(a, e);
  return n < 0 ? void 0 : a[n][1];
}
var hS = uS, vS = Fe;
function pS(e) {
  return vS(this.__data__, e) > -1;
}
var fS = pS, gS = Fe;
function wS(e, a) {
  var n = this.__data__, o = gS(n, e);
  return o < 0 ? (++this.size, n.push([e, a])) : n[o][1] = a, this;
}
var $S = wS, zS = oS, xS = sS, yS = hS, CS = fS, bS = $S;
function se(e) {
  var a = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++a < n; ) {
    var o = e[a];
    this.set(o[0], o[1]);
  }
}
se.prototype.clear = zS;
se.prototype.delete = xS;
se.prototype.get = yS;
se.prototype.has = CS;
se.prototype.set = bS;
var De = se, MS = De;
function HS() {
  this.__data__ = new MS(), this.size = 0;
}
var VS = HS;
function AS(e) {
  var a = this.__data__, n = a.delete(e);
  return this.size = a.size, n;
}
var BS = AS;
function LS(e) {
  return this.__data__.get(e);
}
var SS = LS;
function TS(e) {
  return this.__data__.has(e);
}
var kS = TS, OS = typeof He == "object" && He && He.Object === Object && He, R0 = OS, jS = R0, PS = typeof self == "object" && self && self.Object === Object && self, IS = jS || PS || Function("return this")(), Y = IS, FS = Y, DS = FS.Symbol, v2 = DS, G2 = v2, U0 = Object.prototype, qS = U0.hasOwnProperty, ES = U0.toString, ge = G2 ? G2.toStringTag : void 0;
function NS(e) {
  var a = qS.call(e, ge), n = e[ge];
  try {
    e[ge] = void 0;
    var o = !0;
  } catch {
  }
  var t = ES.call(e);
  return o && (a ? e[ge] = n : delete e[ge]), t;
}
var RS = NS, US = Object.prototype, GS = US.toString;
function KS(e) {
  return GS.call(e);
}
var WS = KS, K2 = v2, ZS = RS, JS = WS, QS = "[object Null]", YS = "[object Undefined]", W2 = K2 ? K2.toStringTag : void 0;
function XS(e) {
  return e == null ? e === void 0 ? YS : QS : W2 && W2 in Object(e) ? ZS(e) : JS(e);
}
var qe = XS;
function eT(e) {
  var a = typeof e;
  return e != null && (a == "object" || a == "function");
}
var be = eT, aT = qe, nT = be, oT = "[object AsyncFunction]", tT = "[object Function]", dT = "[object GeneratorFunction]", rT = "[object Proxy]";
function cT(e) {
  if (!nT(e))
    return !1;
  var a = aT(e);
  return a == tT || a == dT || a == oT || a == rT;
}
var G0 = cT, lT = Y, _T = lT["__core-js_shared__"], iT = _T, Ge = iT, Z2 = function() {
  var e = /[^.]+$/.exec(Ge && Ge.keys && Ge.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function sT(e) {
  return !!Z2 && Z2 in e;
}
var mT = sT, uT = Function.prototype, hT = uT.toString;
function vT(e) {
  if (e != null) {
    try {
      return hT.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var K0 = vT, pT = G0, fT = mT, gT = be, wT = K0, $T = /[\\^$.*+?()[\]{}|]/g, zT = /^\[object .+?Constructor\]$/, xT = Function.prototype, yT = Object.prototype, CT = xT.toString, bT = yT.hasOwnProperty, MT = RegExp(
  "^" + CT.call(bT).replace($T, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function HT(e) {
  if (!gT(e) || fT(e))
    return !1;
  var a = pT(e) ? MT : zT;
  return a.test(wT(e));
}
var VT = HT;
function AT(e, a) {
  return e == null ? void 0 : e[a];
}
var BT = AT, LT = VT, ST = BT;
function TT(e, a) {
  var n = ST(e, a);
  return LT(n) ? n : void 0;
}
var re = TT, kT = re, OT = Y, jT = kT(OT, "Map"), p2 = jT, PT = re, IT = PT(Object, "create"), Ee = IT, J2 = Ee;
function FT() {
  this.__data__ = J2 ? J2(null) : {}, this.size = 0;
}
var DT = FT;
function qT(e) {
  var a = this.has(e) && delete this.__data__[e];
  return this.size -= a ? 1 : 0, a;
}
var ET = qT, NT = Ee, RT = "__lodash_hash_undefined__", UT = Object.prototype, GT = UT.hasOwnProperty;
function KT(e) {
  var a = this.__data__;
  if (NT) {
    var n = a[e];
    return n === RT ? void 0 : n;
  }
  return GT.call(a, e) ? a[e] : void 0;
}
var WT = KT, ZT = Ee, JT = Object.prototype, QT = JT.hasOwnProperty;
function YT(e) {
  var a = this.__data__;
  return ZT ? a[e] !== void 0 : QT.call(a, e);
}
var XT = YT, ek = Ee, ak = "__lodash_hash_undefined__";
function nk(e, a) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ek && a === void 0 ? ak : a, this;
}
var ok = nk, tk = DT, dk = ET, rk = WT, ck = XT, lk = ok;
function me(e) {
  var a = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++a < n; ) {
    var o = e[a];
    this.set(o[0], o[1]);
  }
}
me.prototype.clear = tk;
me.prototype.delete = dk;
me.prototype.get = rk;
me.prototype.has = ck;
me.prototype.set = lk;
var _k = me, Q2 = _k, ik = De, sk = p2;
function mk() {
  this.size = 0, this.__data__ = {
    hash: new Q2(),
    map: new (sk || ik)(),
    string: new Q2()
  };
}
var uk = mk;
function hk(e) {
  var a = typeof e;
  return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? e !== "__proto__" : e === null;
}
var vk = hk, pk = vk;
function fk(e, a) {
  var n = e.__data__;
  return pk(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
}
var Ne = fk, gk = Ne;
function wk(e) {
  var a = gk(this, e).delete(e);
  return this.size -= a ? 1 : 0, a;
}
var $k = wk, zk = Ne;
function xk(e) {
  return zk(this, e).get(e);
}
var yk = xk, Ck = Ne;
function bk(e) {
  return Ck(this, e).has(e);
}
var Mk = bk, Hk = Ne;
function Vk(e, a) {
  var n = Hk(this, e), o = n.size;
  return n.set(e, a), this.size += n.size == o ? 0 : 1, this;
}
var Ak = Vk, Bk = uk, Lk = $k, Sk = yk, Tk = Mk, kk = Ak;
function ue(e) {
  var a = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++a < n; ) {
    var o = e[a];
    this.set(o[0], o[1]);
  }
}
ue.prototype.clear = Bk;
ue.prototype.delete = Lk;
ue.prototype.get = Sk;
ue.prototype.has = Tk;
ue.prototype.set = kk;
var Ok = ue, jk = De, Pk = p2, Ik = Ok, Fk = 200;
function Dk(e, a) {
  var n = this.__data__;
  if (n instanceof jk) {
    var o = n.__data__;
    if (!Pk || o.length < Fk - 1)
      return o.push([e, a]), this.size = ++n.size, this;
    n = this.__data__ = new Ik(o);
  }
  return n.set(e, a), this.size = n.size, this;
}
var qk = Dk, Ek = De, Nk = VS, Rk = BS, Uk = SS, Gk = kS, Kk = qk;
function he(e) {
  var a = this.__data__ = new Ek(e);
  this.size = a.size;
}
he.prototype.clear = Nk;
he.prototype.delete = Rk;
he.prototype.get = Uk;
he.prototype.has = Gk;
he.prototype.set = Kk;
var Wk = he;
function Zk(e, a) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o && a(e[n], n, e) !== !1; )
    ;
  return e;
}
var Jk = Zk, Qk = re, Yk = function() {
  try {
    var e = Qk(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Xk = Yk, Y2 = Xk;
function eO(e, a, n) {
  a == "__proto__" && Y2 ? Y2(e, a, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[a] = n;
}
var W0 = eO, aO = W0, nO = N0, oO = Object.prototype, tO = oO.hasOwnProperty;
function dO(e, a, n) {
  var o = e[a];
  (!(tO.call(e, a) && nO(o, n)) || n === void 0 && !(a in e)) && aO(e, a, n);
}
var Z0 = dO, rO = Z0, cO = W0;
function lO(e, a, n, o) {
  var t = !n;
  n || (n = {});
  for (var r = -1, i = a.length; ++r < i; ) {
    var s = a[r], h = o ? o(n[s], e[s], s, n, e) : void 0;
    h === void 0 && (h = e[s]), t ? cO(n, s, h) : rO(n, s, h);
  }
  return n;
}
var Re = lO;
function _O(e, a) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = a(n);
  return o;
}
var iO = _O;
function sO(e) {
  return e != null && typeof e == "object";
}
var Me = sO, mO = qe, uO = Me, hO = "[object Arguments]";
function vO(e) {
  return uO(e) && mO(e) == hO;
}
var pO = vO, X2 = pO, fO = Me, J0 = Object.prototype, gO = J0.hasOwnProperty, wO = J0.propertyIsEnumerable, $O = X2(function() {
  return arguments;
}()) ? X2 : function(e) {
  return fO(e) && gO.call(e, "callee") && !wO.call(e, "callee");
}, zO = $O, xO = Array.isArray, f2 = xO, Se = { exports: {} };
function yO() {
  return !1;
}
var CO = yO;
Se.exports;
(function(e, a) {
  var n = Y, o = CO, t = a && !a.nodeType && a, r = t && !0 && e && !e.nodeType && e, i = r && r.exports === t, s = i ? n.Buffer : void 0, h = s ? s.isBuffer : void 0, m = h || o;
  e.exports = m;
})(Se, Se.exports);
var Q0 = Se.exports, bO = 9007199254740991, MO = /^(?:0|[1-9]\d*)$/;
function HO(e, a) {
  var n = typeof e;
  return a = a ?? bO, !!a && (n == "number" || n != "symbol" && MO.test(e)) && e > -1 && e % 1 == 0 && e < a;
}
var VO = HO, AO = 9007199254740991;
function BO(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= AO;
}
var Y0 = BO, LO = qe, SO = Y0, TO = Me, kO = "[object Arguments]", OO = "[object Array]", jO = "[object Boolean]", PO = "[object Date]", IO = "[object Error]", FO = "[object Function]", DO = "[object Map]", qO = "[object Number]", EO = "[object Object]", NO = "[object RegExp]", RO = "[object Set]", UO = "[object String]", GO = "[object WeakMap]", KO = "[object ArrayBuffer]", WO = "[object DataView]", ZO = "[object Float32Array]", JO = "[object Float64Array]", QO = "[object Int8Array]", YO = "[object Int16Array]", XO = "[object Int32Array]", ej = "[object Uint8Array]", aj = "[object Uint8ClampedArray]", nj = "[object Uint16Array]", oj = "[object Uint32Array]", k = {};
k[ZO] = k[JO] = k[QO] = k[YO] = k[XO] = k[ej] = k[aj] = k[nj] = k[oj] = !0;
k[kO] = k[OO] = k[KO] = k[jO] = k[WO] = k[PO] = k[IO] = k[FO] = k[DO] = k[qO] = k[EO] = k[NO] = k[RO] = k[UO] = k[GO] = !1;
function tj(e) {
  return TO(e) && SO(e.length) && !!k[LO(e)];
}
var dj = tj;
function rj(e) {
  return function(a) {
    return e(a);
  };
}
var g2 = rj, Te = { exports: {} };
Te.exports;
(function(e, a) {
  var n = R0, o = a && !a.nodeType && a, t = o && !0 && e && !e.nodeType && e, r = t && t.exports === o, i = r && n.process, s = function() {
    try {
      var h = t && t.require && t.require("util").types;
      return h || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Te, Te.exports);
var w2 = Te.exports, cj = dj, lj = g2, e0 = w2, a0 = e0 && e0.isTypedArray, _j = a0 ? lj(a0) : cj, ij = _j, sj = iO, mj = zO, uj = f2, hj = Q0, vj = VO, pj = ij, fj = Object.prototype, gj = fj.hasOwnProperty;
function wj(e, a) {
  var n = uj(e), o = !n && mj(e), t = !n && !o && hj(e), r = !n && !o && !t && pj(e), i = n || o || t || r, s = i ? sj(e.length, String) : [], h = s.length;
  for (var m in e)
    (a || gj.call(e, m)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (m == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    t && (m == "offset" || m == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (m == "buffer" || m == "byteLength" || m == "byteOffset") || // Skip index properties.
    vj(m, h))) && s.push(m);
  return s;
}
var X0 = wj, $j = Object.prototype;
function zj(e) {
  var a = e && e.constructor, n = typeof a == "function" && a.prototype || $j;
  return e === n;
}
var $2 = zj;
function xj(e, a) {
  return function(n) {
    return e(a(n));
  };
}
var e1 = xj, yj = e1, Cj = yj(Object.keys, Object), bj = Cj, Mj = $2, Hj = bj, Vj = Object.prototype, Aj = Vj.hasOwnProperty;
function Bj(e) {
  if (!Mj(e))
    return Hj(e);
  var a = [];
  for (var n in Object(e))
    Aj.call(e, n) && n != "constructor" && a.push(n);
  return a;
}
var Lj = Bj, Sj = G0, Tj = Y0;
function kj(e) {
  return e != null && Tj(e.length) && !Sj(e);
}
var a1 = kj, Oj = X0, jj = Lj, Pj = a1;
function Ij(e) {
  return Pj(e) ? Oj(e) : jj(e);
}
var z2 = Ij, Fj = Re, Dj = z2;
function qj(e, a) {
  return e && Fj(a, Dj(a), e);
}
var Ej = qj;
function Nj(e) {
  var a = [];
  if (e != null)
    for (var n in Object(e))
      a.push(n);
  return a;
}
var Rj = Nj, Uj = be, Gj = $2, Kj = Rj, Wj = Object.prototype, Zj = Wj.hasOwnProperty;
function Jj(e) {
  if (!Uj(e))
    return Kj(e);
  var a = Gj(e), n = [];
  for (var o in e)
    o == "constructor" && (a || !Zj.call(e, o)) || n.push(o);
  return n;
}
var Qj = Jj, Yj = X0, Xj = Qj, eP = a1;
function aP(e) {
  return eP(e) ? Yj(e, !0) : Xj(e);
}
var x2 = aP, nP = Re, oP = x2;
function tP(e, a) {
  return e && nP(a, oP(a), e);
}
var dP = tP, ke = { exports: {} };
ke.exports;
(function(e, a) {
  var n = Y, o = a && !a.nodeType && a, t = o && !0 && e && !e.nodeType && e, r = t && t.exports === o, i = r ? n.Buffer : void 0, s = i ? i.allocUnsafe : void 0;
  function h(m, v) {
    if (v)
      return m.slice();
    var f = m.length, C = s ? s(f) : new m.constructor(f);
    return m.copy(C), C;
  }
  e.exports = h;
})(ke, ke.exports);
var rP = ke.exports;
function cP(e, a) {
  var n = -1, o = e.length;
  for (a || (a = Array(o)); ++n < o; )
    a[n] = e[n];
  return a;
}
var lP = cP;
function _P(e, a) {
  for (var n = -1, o = e == null ? 0 : e.length, t = 0, r = []; ++n < o; ) {
    var i = e[n];
    a(i, n, e) && (r[t++] = i);
  }
  return r;
}
var iP = _P;
function sP() {
  return [];
}
var n1 = sP, mP = iP, uP = n1, hP = Object.prototype, vP = hP.propertyIsEnumerable, n0 = Object.getOwnPropertySymbols, pP = n0 ? function(e) {
  return e == null ? [] : (e = Object(e), mP(n0(e), function(a) {
    return vP.call(e, a);
  }));
} : uP, y2 = pP, fP = Re, gP = y2;
function wP(e, a) {
  return fP(e, gP(e), a);
}
var $P = wP;
function zP(e, a) {
  for (var n = -1, o = a.length, t = e.length; ++n < o; )
    e[t + n] = a[n];
  return e;
}
var o1 = zP, xP = e1, yP = xP(Object.getPrototypeOf, Object), t1 = yP, CP = o1, bP = t1, MP = y2, HP = n1, VP = Object.getOwnPropertySymbols, AP = VP ? function(e) {
  for (var a = []; e; )
    CP(a, MP(e)), e = bP(e);
  return a;
} : HP, d1 = AP, BP = Re, LP = d1;
function SP(e, a) {
  return BP(e, LP(e), a);
}
var TP = SP, kP = o1, OP = f2;
function jP(e, a, n) {
  var o = a(e);
  return OP(e) ? o : kP(o, n(e));
}
var r1 = jP, PP = r1, IP = y2, FP = z2;
function DP(e) {
  return PP(e, FP, IP);
}
var qP = DP, EP = r1, NP = d1, RP = x2;
function UP(e) {
  return EP(e, RP, NP);
}
var GP = UP, KP = re, WP = Y, ZP = KP(WP, "DataView"), JP = ZP, QP = re, YP = Y, XP = QP(YP, "Promise"), eI = XP, aI = re, nI = Y, oI = aI(nI, "Set"), tI = oI, dI = re, rI = Y, cI = dI(rI, "WeakMap"), lI = cI, Je = JP, Qe = p2, Ye = eI, Xe = tI, e2 = lI, c1 = qe, ve = K0, o0 = "[object Map]", _I = "[object Object]", t0 = "[object Promise]", d0 = "[object Set]", r0 = "[object WeakMap]", c0 = "[object DataView]", iI = ve(Je), sI = ve(Qe), mI = ve(Ye), uI = ve(Xe), hI = ve(e2), oe = c1;
(Je && oe(new Je(new ArrayBuffer(1))) != c0 || Qe && oe(new Qe()) != o0 || Ye && oe(Ye.resolve()) != t0 || Xe && oe(new Xe()) != d0 || e2 && oe(new e2()) != r0) && (oe = function(e) {
  var a = c1(e), n = a == _I ? e.constructor : void 0, o = n ? ve(n) : "";
  if (o)
    switch (o) {
      case iI:
        return c0;
      case sI:
        return o0;
      case mI:
        return t0;
      case uI:
        return d0;
      case hI:
        return r0;
    }
  return a;
});
var C2 = oe, vI = Object.prototype, pI = vI.hasOwnProperty;
function fI(e) {
  var a = e.length, n = new e.constructor(a);
  return a && typeof e[0] == "string" && pI.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var gI = fI, wI = Y, $I = wI.Uint8Array, zI = $I, l0 = zI;
function xI(e) {
  var a = new e.constructor(e.byteLength);
  return new l0(a).set(new l0(e)), a;
}
var b2 = xI, yI = b2;
function CI(e, a) {
  var n = a ? yI(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var bI = CI, MI = /\w*$/;
function HI(e) {
  var a = new e.constructor(e.source, MI.exec(e));
  return a.lastIndex = e.lastIndex, a;
}
var VI = HI, _0 = v2, i0 = _0 ? _0.prototype : void 0, s0 = i0 ? i0.valueOf : void 0;
function AI(e) {
  return s0 ? Object(s0.call(e)) : {};
}
var BI = AI, LI = b2;
function SI(e, a) {
  var n = a ? LI(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var TI = SI, kI = b2, OI = bI, jI = VI, PI = BI, II = TI, FI = "[object Boolean]", DI = "[object Date]", qI = "[object Map]", EI = "[object Number]", NI = "[object RegExp]", RI = "[object Set]", UI = "[object String]", GI = "[object Symbol]", KI = "[object ArrayBuffer]", WI = "[object DataView]", ZI = "[object Float32Array]", JI = "[object Float64Array]", QI = "[object Int8Array]", YI = "[object Int16Array]", XI = "[object Int32Array]", eF = "[object Uint8Array]", aF = "[object Uint8ClampedArray]", nF = "[object Uint16Array]", oF = "[object Uint32Array]";
function tF(e, a, n) {
  var o = e.constructor;
  switch (a) {
    case KI:
      return kI(e);
    case FI:
    case DI:
      return new o(+e);
    case WI:
      return OI(e, n);
    case ZI:
    case JI:
    case QI:
    case YI:
    case XI:
    case eF:
    case aF:
    case nF:
    case oF:
      return II(e, n);
    case qI:
      return new o();
    case EI:
    case UI:
      return new o(e);
    case NI:
      return jI(e);
    case RI:
      return new o();
    case GI:
      return PI(e);
  }
}
var dF = tF, rF = be, m0 = Object.create, cF = function() {
  function e() {
  }
  return function(a) {
    if (!rF(a))
      return {};
    if (m0)
      return m0(a);
    e.prototype = a;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), lF = cF, _F = lF, iF = t1, sF = $2;
function mF(e) {
  return typeof e.constructor == "function" && !sF(e) ? _F(iF(e)) : {};
}
var uF = mF, hF = C2, vF = Me, pF = "[object Map]";
function fF(e) {
  return vF(e) && hF(e) == pF;
}
var gF = fF, wF = gF, $F = g2, u0 = w2, h0 = u0 && u0.isMap, zF = h0 ? $F(h0) : wF, xF = zF, yF = C2, CF = Me, bF = "[object Set]";
function MF(e) {
  return CF(e) && yF(e) == bF;
}
var HF = MF, VF = HF, AF = g2, v0 = w2, p0 = v0 && v0.isSet, BF = p0 ? AF(p0) : VF, LF = BF, SF = Wk, TF = Jk, kF = Z0, OF = Ej, jF = dP, PF = rP, IF = lP, FF = $P, DF = TP, qF = qP, EF = GP, NF = C2, RF = gI, UF = dF, GF = uF, KF = f2, WF = Q0, ZF = xF, JF = be, QF = LF, YF = z2, XF = x2, eD = 1, aD = 2, nD = 4, l1 = "[object Arguments]", oD = "[object Array]", tD = "[object Boolean]", dD = "[object Date]", rD = "[object Error]", _1 = "[object Function]", cD = "[object GeneratorFunction]", lD = "[object Map]", _D = "[object Number]", i1 = "[object Object]", iD = "[object RegExp]", sD = "[object Set]", mD = "[object String]", uD = "[object Symbol]", hD = "[object WeakMap]", vD = "[object ArrayBuffer]", pD = "[object DataView]", fD = "[object Float32Array]", gD = "[object Float64Array]", wD = "[object Int8Array]", $D = "[object Int16Array]", zD = "[object Int32Array]", xD = "[object Uint8Array]", yD = "[object Uint8ClampedArray]", CD = "[object Uint16Array]", bD = "[object Uint32Array]", S = {};
S[l1] = S[oD] = S[vD] = S[pD] = S[tD] = S[dD] = S[fD] = S[gD] = S[wD] = S[$D] = S[zD] = S[lD] = S[_D] = S[i1] = S[iD] = S[sD] = S[mD] = S[uD] = S[xD] = S[yD] = S[CD] = S[bD] = !0;
S[rD] = S[_1] = S[hD] = !1;
function Be(e, a, n, o, t, r) {
  var i, s = a & eD, h = a & aD, m = a & nD;
  if (n && (i = t ? n(e, o, t, r) : n(e)), i !== void 0)
    return i;
  if (!JF(e))
    return e;
  var v = KF(e);
  if (v) {
    if (i = RF(e), !s)
      return IF(e, i);
  } else {
    var f = NF(e), C = f == _1 || f == cD;
    if (WF(e))
      return PF(e, s);
    if (f == i1 || f == l1 || C && !t) {
      if (i = h || C ? {} : GF(e), !s)
        return h ? DF(e, jF(i, e)) : FF(e, OF(i, e));
    } else {
      if (!S[f])
        return t ? e : {};
      i = UF(e, f, s);
    }
  }
  r || (r = new SF());
  var $ = r.get(e);
  if ($)
    return $;
  r.set(e, i), QF(e) ? e.forEach(function(p) {
    i.add(Be(p, a, n, p, e, r));
  }) : ZF(e) && e.forEach(function(p, u) {
    i.set(u, Be(p, a, n, u, e, r));
  });
  var V = m ? h ? EF : qF : h ? XF : YF, g = v ? void 0 : V(e);
  return TF(g || e, function(p, u) {
    g && (u = p, p = e[u]), kF(i, u, Be(p, a, n, u, e, r));
  }), i;
}
var MD = Be, HD = MD, VD = 1, AD = 4;
function BD(e) {
  return HD(e, VD | AD);
}
var LD = BD;
const f0 = /* @__PURE__ */ SB(LD), SD = /* @__PURE__ */ F({
  __name: "index",
  props: {
    // 表单配置项
    options: {
      type: Array,
      required: !0
    },
    httpRequest: {
      type: Function
    }
  },
  emits: [
    "on-preview",
    "on-remove",
    "on-success",
    "on-error",
    "on-progress",
    "on-change",
    "on-exceed",
    "before-upload",
    "before-remove"
  ],
  setup(e, { emit: a }) {
    const n = e, o = y(null), t = y(null), r = () => {
      if (n.options && n.options.length) {
        const u = {}, H = {};
        n.options.map((j) => {
          u[j.prop] = j.value, H[j.prop] = j.rules;
        }), o.value = f0(u), t.value = f0(H);
      }
    }, i = a, s = (u) => {
      i("on-preview", u);
    }, h = (u, H) => {
      i("on-remove", {
        uploadFile: u,
        uploadFiles: H
      });
    }, m = (u, H, j) => {
      const U = n.options.find((q) => q.type === "upload");
      o.value[U == null ? void 0 : U.prop] = { response: u, uploadFile: H, uploadFiles: j }, i("on-success", {
        response: u,
        uploadFile: H,
        uploadFiles: j
      });
    }, v = (u, H, j) => {
      i("on-error", {
        error: u,
        uploadFile: H,
        uploadFiles: j
      });
    }, f = (u, H, j) => {
      i("on-progress", {
        evt: u,
        uploadFile: H,
        uploadFiles: j
      });
    }, C = (u, H) => {
      i("on-change", {
        uploadFile: u,
        uploadFiles: H
      });
    }, $ = (u, H) => {
      i("on-exceed", {
        files: u,
        uploadFiles: H
      });
    }, V = (u) => {
      i("before-upload", u);
    }, g = (u, H) => {
      i("before-remove", {
        uploadFile: u,
        uploadFiles: H
      });
    }, p = y();
    return ye(() => {
      r();
    }), R(
      () => n.options,
      () => {
        r();
      },
      { deep: !0 }
    ), (u, H) => {
      const j = M("el-upload"), U = M("el-form-item"), q = M("el-form");
      return o.value ? (c(), b(q, G({
        key: 0,
        ref_key: "form",
        ref: p,
        "validate-on-rule-change": !1
      }, u.$attrs, {
        model: o.value,
        rules: t.value
      }), {
        default: z(() => [
          (c(!0), l(
            B,
            null,
            P(e.options, (A, L) => (c(), l(
              B,
              { key: L },
              [
                !A.children || !A.children.length ? (c(), b(U, {
                  key: 0,
                  label: A.label,
                  prop: A.prop
                }, {
                  default: z(() => [
                    A.type !== "upload" && A.type !== "editor" ? (c(), b(K(`el-${A.type}`), G({ key: 0 }, A.attrs, {
                      modelValue: o.value[A.prop],
                      "onUpdate:modelValue": (E) => o.value[A.prop] = E,
                      placeholder: A.placeholder
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder"])) : O("v-if", !0),
                    A.type === "upload" ? (c(), b(j, G({ key: 1 }, A.uploadAttrs, {
                      "on-preview": s,
                      "on-remove": h,
                      "on-success": m,
                      "on-error": v,
                      "on-progress": f,
                      "on-change": C,
                      "on-exceed": $,
                      "before-upload": V,
                      "before-remove": g,
                      "http-request": e.httpRequest
                    }), {
                      tip: z(() => [
                        Q(u.$slots, "uploadTip")
                      ]),
                      default: z(() => [
                        Q(u.$slots, "uploadArea")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["http-request"])) : O("v-if", !0)
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["label", "prop"])) : O("v-if", !0),
                A.children && A.children.length ? (c(), b(U, {
                  key: 1,
                  label: A.label,
                  prop: A.prop
                }, {
                  default: z(() => [
                    (c(), b(K(`el-${A.type}`), G(A.attrs, {
                      modelValue: o.value[A.prop],
                      "onUpdate:modelValue": (E) => o.value[A.prop] = E,
                      placeholder: A.placeholder
                    }), {
                      default: z(() => [
                        (c(!0), l(
                          B,
                          null,
                          P(A.children, (E, pe) => (c(), b(K(`el-${E.type}`), {
                            key: pe,
                            label: E.label,
                            value: E.value
                          }, null, 8, ["label", "value"]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["label", "prop"])) : O("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          x(U, null, {
            default: z(() => [
              Q(u.$slots, "action", {
                form: p.value,
                model: o.value
              })
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["model", "rules"])) : O("v-if", !0);
    };
  }
}), TD = {
  install(e) {
    e.component("m-form", SD);
  }
};
const kD = [
  M1,
  eL,
  rL,
  iL,
  CL,
  AL,
  LL,
  OL,
  FL,
  aS,
  TD
], PD = {
  install(e) {
    kD.map((a) => {
      e.use(a);
    });
  }
};
export {
  PD as default
};
