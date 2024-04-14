import { defineComponent as Se, ref as Q, watch as Re, resolveComponent as ee, openBlock as u, createElementBlock as m, createVNode as j, withCtx as U, Fragment as le, renderList as Ve, createBlock as ne, createElementVNode as i, createStaticVNode as E_, unref as F, getCurrentScope as k_, onScopeDispose as F_, readonly as D_, getCurrentInstance as vn, onMounted as B0, nextTick as R_, warn as q_, inject as $1, computed as ue, isRef as N_, provide as U_, renderSlot as Xe, mergeProps as r2, normalizeClass as H2, Transition as a3, withDirectives as lt, toDisplayString as Le, vShow as t3, shallowReactive as j_, normalizeStyle as _n, createCommentVNode as _e, resolveDynamicComponent as c2, withModifiers as Qa, isVNode as it, render as ur, useSlots as W_, createTextVNode as et, useAttrs as G_, resolveDirective as K_ } from "vue";
const mr = [
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
], Z_ = /* @__PURE__ */ Se({
  __name: "index",
  emits: ["change"],
  setup(a, { emit: r }) {
    const o = Q(""), d = Q(""), l = Q(""), s = Q(mr), x = Q([]), H = Q([]), S = r;
    return Re(
      () => o.value,
      (A) => {
        if (A) {
          const P = s.value.find((I) => I.code === o.value).children;
          x.value = P;
        }
        d.value = "", l.value = "";
      }
    ), Re(
      () => d.value,
      (A) => {
        if (A) {
          const P = x.value.find((I) => I.code === d.value).children;
          H.value = P;
        }
        l.value = "";
      }
    ), Re(
      () => l.value,
      (A) => {
        if (!A)
          return;
        const P = {
          code: o.value,
          name: o.value && mr.find((D) => D.code === o.value).name
        }, I = {
          code: d.value,
          name: d.value && x.value.find((D) => D.code === d.value).name
        }, Y = {
          code: l.value,
          name: l.value && H.value.find((D) => D.code === A).name
        };
        S("change", {
          province: P,
          city: I,
          area: Y
        });
      }
    ), (A, P) => {
      const I = ee("el-option"), Y = ee("el-select");
      return u(), m("div", null, [
        j(Y, {
          clearable: "",
          placeholder: "请选择省份",
          modelValue: o.value,
          "onUpdate:modelValue": P[0] || (P[0] = (D) => o.value = D)
        }, {
          default: U(() => [
            (u(!0), m(
              le,
              null,
              Ve(s.value, (D) => (u(), ne(I, {
                key: D.code,
                value: D.code,
                label: D.name
              }, null, 8, ["value", "label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        j(Y, {
          clearable: "",
          disabled: !o.value,
          style: { margin: "0 10px" },
          placeholder: "请选择城市",
          modelValue: d.value,
          "onUpdate:modelValue": P[1] || (P[1] = (D) => d.value = D)
        }, {
          default: U(() => [
            (u(!0), m(
              le,
              null,
              Ve(x.value, (D) => (u(), ne(I, {
                key: D.code,
                value: D.code,
                label: D.name
              }, null, 8, ["value", "label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled", "modelValue"]),
        j(Y, {
          clearable: "",
          disabled: !o.value || !d.value,
          placeholder: "请选择区域",
          modelValue: l.value,
          "onUpdate:modelValue": P[2] || (P[2] = (D) => l.value = D)
        }, {
          default: U(() => [
            (u(!0), m(
              le,
              null,
              Ve(H.value, (D) => (u(), ne(I, {
                key: D.code,
                value: D.code,
                label: D.name
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
}), Y_ = {
  install(a) {
    a.component("m-choose-area", Z_);
  }
};
/*! Element Plus Icons Vue v2.1.0 */
var J_ = {
  name: "AddLocation"
}, p = (a, r) => {
  let o = a.__vccOpts || a;
  for (let [d, l] of r)
    o[d] = l;
  return o;
}, X_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Q_ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), eu = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), nu = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
  },
  null,
  -1
  /* HOISTED */
), au = [
  Q_,
  eu,
  nu
];
function tu(a, r, o, d, l, s) {
  return u(), m("svg", X_, au);
}
var ou = /* @__PURE__ */ p(J_, [["render", tu], ["__file", "add-location.vue"]]), ru = {
  name: "Aim"
}, cu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, du = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), lu = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
  },
  null,
  -1
  /* HOISTED */
), iu = [
  du,
  lu
];
function su(a, r, o, d, l, s) {
  return u(), m("svg", cu, iu);
}
var _u = /* @__PURE__ */ p(ru, [["render", su], ["__file", "aim.vue"]]), uu = {
  name: "AlarmClock"
}, mu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hu = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
  },
  null,
  -1
  /* HOISTED */
), vu = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
  },
  null,
  -1
  /* HOISTED */
), pu = [
  hu,
  vu
];
function fu(a, r, o, d, l, s) {
  return u(), m("svg", mu, pu);
}
var gu = /* @__PURE__ */ p(uu, [["render", fu], ["__file", "alarm-clock.vue"]]), wu = {
  name: "Apple"
}, $u = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xu = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
  },
  null,
  -1
  /* HOISTED */
), yu = [
  xu
];
function zu(a, r, o, d, l, s) {
  return u(), m("svg", $u, yu);
}
var Cu = /* @__PURE__ */ p(wu, [["render", zu], ["__file", "apple.vue"]]), bu = {
  name: "ArrowDownBold"
}, Mu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hu = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
  },
  null,
  -1
  /* HOISTED */
), Au = [
  Hu
];
function Vu(a, r, o, d, l, s) {
  return u(), m("svg", Mu, Au);
}
var Lu = /* @__PURE__ */ p(bu, [["render", Vu], ["__file", "arrow-down-bold.vue"]]), Su = {
  name: "ArrowDown"
}, Bu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tu = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), Ou = [
  Tu
];
function Iu(a, r, o, d, l, s) {
  return u(), m("svg", Bu, Ou);
}
var Pu = /* @__PURE__ */ p(Su, [["render", Iu], ["__file", "arrow-down.vue"]]), Eu = {
  name: "ArrowLeftBold"
}, ku = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fu = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
  },
  null,
  -1
  /* HOISTED */
), Du = [
  Fu
];
function Ru(a, r, o, d, l, s) {
  return u(), m("svg", ku, Du);
}
var qu = /* @__PURE__ */ p(Eu, [["render", Ru], ["__file", "arrow-left-bold.vue"]]), Nu = {
  name: "ArrowLeft"
}, Uu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ju = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), Wu = [
  ju
];
function Gu(a, r, o, d, l, s) {
  return u(), m("svg", Uu, Wu);
}
var Ku = /* @__PURE__ */ p(Nu, [["render", Gu], ["__file", "arrow-left.vue"]]), Zu = {
  name: "ArrowRightBold"
}, Yu = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ju = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
  },
  null,
  -1
  /* HOISTED */
), Xu = [
  Ju
];
function Qu(a, r, o, d, l, s) {
  return u(), m("svg", Yu, Xu);
}
var e5 = /* @__PURE__ */ p(Zu, [["render", Qu], ["__file", "arrow-right-bold.vue"]]), n5 = {
  name: "ArrowRight"
}, a5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, t5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), o5 = [
  t5
];
function r5(a, r, o, d, l, s) {
  return u(), m("svg", a5, o5);
}
var c5 = /* @__PURE__ */ p(n5, [["render", r5], ["__file", "arrow-right.vue"]]), d5 = {
  name: "ArrowUpBold"
}, l5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, i5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
  },
  null,
  -1
  /* HOISTED */
), s5 = [
  i5
];
function _5(a, r, o, d, l, s) {
  return u(), m("svg", l5, s5);
}
var u5 = /* @__PURE__ */ p(d5, [["render", _5], ["__file", "arrow-up-bold.vue"]]), m5 = {
  name: "ArrowUp"
}, h5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, v5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), p5 = [
  v5
];
function f5(a, r, o, d, l, s) {
  return u(), m("svg", h5, p5);
}
var g5 = /* @__PURE__ */ p(m5, [["render", f5], ["__file", "arrow-up.vue"]]), w5 = {
  name: "Avatar"
}, $5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, x5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
  },
  null,
  -1
  /* HOISTED */
), y5 = [
  x5
];
function z5(a, r, o, d, l, s) {
  return u(), m("svg", $5, y5);
}
var C5 = /* @__PURE__ */ p(w5, [["render", z5], ["__file", "avatar.vue"]]), b5 = {
  name: "Back"
}, M5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, H5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), A5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
  },
  null,
  -1
  /* HOISTED */
), V5 = [
  H5,
  A5
];
function L5(a, r, o, d, l, s) {
  return u(), m("svg", M5, V5);
}
var S5 = /* @__PURE__ */ p(b5, [["render", L5], ["__file", "back.vue"]]), B5 = {
  name: "Baseball"
}, T5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, O5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
  },
  null,
  -1
  /* HOISTED */
), I5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
  },
  null,
  -1
  /* HOISTED */
), P5 = [
  O5,
  I5
];
function E5(a, r, o, d, l, s) {
  return u(), m("svg", T5, P5);
}
var k5 = /* @__PURE__ */ p(B5, [["render", E5], ["__file", "baseball.vue"]]), F5 = {
  name: "Basketball"
}, D5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, R5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
  },
  null,
  -1
  /* HOISTED */
), q5 = [
  R5
];
function N5(a, r, o, d, l, s) {
  return u(), m("svg", D5, q5);
}
var U5 = /* @__PURE__ */ p(F5, [["render", N5], ["__file", "basketball.vue"]]), j5 = {
  name: "BellFilled"
}, W5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, G5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
  },
  null,
  -1
  /* HOISTED */
), K5 = [
  G5
];
function Z5(a, r, o, d, l, s) {
  return u(), m("svg", W5, K5);
}
var Y5 = /* @__PURE__ */ p(j5, [["render", Z5], ["__file", "bell-filled.vue"]]), J5 = {
  name: "Bell"
}, X5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Q5 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
  },
  null,
  -1
  /* HOISTED */
), em = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
  },
  null,
  -1
  /* HOISTED */
), nm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
  },
  null,
  -1
  /* HOISTED */
), am = [
  Q5,
  em,
  nm
];
function tm(a, r, o, d, l, s) {
  return u(), m("svg", X5, am);
}
var om = /* @__PURE__ */ p(J5, [["render", tm], ["__file", "bell.vue"]]), rm = {
  name: "Bicycle"
}, cm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dm = /* @__PURE__ */ E_('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>', 5), lm = [
  dm
];
function im(a, r, o, d, l, s) {
  return u(), m("svg", cm, lm);
}
var sm = /* @__PURE__ */ p(rm, [["render", im], ["__file", "bicycle.vue"]]), _m = {
  name: "BottomLeft"
}, um = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
  },
  null,
  -1
  /* HOISTED */
), hm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
  },
  null,
  -1
  /* HOISTED */
), vm = [
  mm,
  hm
];
function pm(a, r, o, d, l, s) {
  return u(), m("svg", um, vm);
}
var fm = /* @__PURE__ */ p(_m, [["render", pm], ["__file", "bottom-left.vue"]]), gm = {
  name: "BottomRight"
}, wm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $m = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
  },
  null,
  -1
  /* HOISTED */
), xm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
  },
  null,
  -1
  /* HOISTED */
), ym = [
  $m,
  xm
];
function zm(a, r, o, d, l, s) {
  return u(), m("svg", wm, ym);
}
var Cm = /* @__PURE__ */ p(gm, [["render", zm], ["__file", "bottom-right.vue"]]), bm = {
  name: "Bottom"
}, Mm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
  },
  null,
  -1
  /* HOISTED */
), Am = [
  Hm
];
function Vm(a, r, o, d, l, s) {
  return u(), m("svg", Mm, Am);
}
var Lm = /* @__PURE__ */ p(bm, [["render", Vm], ["__file", "bottom.vue"]]), Sm = {
  name: "Bowl"
}, Bm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
  },
  null,
  -1
  /* HOISTED */
), Om = [
  Tm
];
function Im(a, r, o, d, l, s) {
  return u(), m("svg", Bm, Om);
}
var Pm = /* @__PURE__ */ p(Sm, [["render", Im], ["__file", "bowl.vue"]]), Em = {
  name: "Box"
}, km = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
  },
  null,
  -1
  /* HOISTED */
), Dm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M64 320h896v64H64z"
  },
  null,
  -1
  /* HOISTED */
), Rm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
  },
  null,
  -1
  /* HOISTED */
), qm = [
  Fm,
  Dm,
  Rm
];
function Nm(a, r, o, d, l, s) {
  return u(), m("svg", km, qm);
}
var Um = /* @__PURE__ */ p(Em, [["render", Nm], ["__file", "box.vue"]]), jm = {
  name: "Briefcase"
}, Wm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
  },
  null,
  -1
  /* HOISTED */
), Km = [
  Gm
];
function Zm(a, r, o, d, l, s) {
  return u(), m("svg", Wm, Km);
}
var Ym = /* @__PURE__ */ p(jm, [["render", Zm], ["__file", "briefcase.vue"]]), Jm = {
  name: "BrushFilled"
}, Xm = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qm = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
  },
  null,
  -1
  /* HOISTED */
), eh = [
  Qm
];
function nh(a, r, o, d, l, s) {
  return u(), m("svg", Xm, eh);
}
var ah = /* @__PURE__ */ p(Jm, [["render", nh], ["__file", "brush-filled.vue"]]), th = {
  name: "Brush"
}, oh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rh = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
  },
  null,
  -1
  /* HOISTED */
), ch = [
  rh
];
function dh(a, r, o, d, l, s) {
  return u(), m("svg", oh, ch);
}
var lh = /* @__PURE__ */ p(th, [["render", dh], ["__file", "brush.vue"]]), ih = {
  name: "Burger"
}, sh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _h = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
  },
  null,
  -1
  /* HOISTED */
), uh = [
  _h
];
function mh(a, r, o, d, l, s) {
  return u(), m("svg", sh, uh);
}
var hh = /* @__PURE__ */ p(ih, [["render", mh], ["__file", "burger.vue"]]), vh = {
  name: "Calendar"
}, ph = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fh = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), gh = [
  fh
];
function wh(a, r, o, d, l, s) {
  return u(), m("svg", ph, gh);
}
var $h = /* @__PURE__ */ p(vh, [["render", wh], ["__file", "calendar.vue"]]), xh = {
  name: "CameraFilled"
}, yh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, zh = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
  },
  null,
  -1
  /* HOISTED */
), Ch = [
  zh
];
function bh(a, r, o, d, l, s) {
  return u(), m("svg", yh, Ch);
}
var Mh = /* @__PURE__ */ p(xh, [["render", bh], ["__file", "camera-filled.vue"]]), Hh = {
  name: "Camera"
}, Ah = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vh = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
  },
  null,
  -1
  /* HOISTED */
), Lh = [
  Vh
];
function Sh(a, r, o, d, l, s) {
  return u(), m("svg", Ah, Lh);
}
var Bh = /* @__PURE__ */ p(Hh, [["render", Sh], ["__file", "camera.vue"]]), Th = {
  name: "CaretBottom"
}, Oh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ih = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m192 384 320 384 320-384z"
  },
  null,
  -1
  /* HOISTED */
), Ph = [
  Ih
];
function Eh(a, r, o, d, l, s) {
  return u(), m("svg", Oh, Ph);
}
var kh = /* @__PURE__ */ p(Th, [["render", Eh], ["__file", "caret-bottom.vue"]]), Fh = {
  name: "CaretLeft"
}, Dh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rh = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M672 192 288 511.936 672 832z"
  },
  null,
  -1
  /* HOISTED */
), qh = [
  Rh
];
function Nh(a, r, o, d, l, s) {
  return u(), m("svg", Dh, qh);
}
var Uh = /* @__PURE__ */ p(Fh, [["render", Nh], ["__file", "caret-left.vue"]]), jh = {
  name: "CaretRight"
}, Wh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gh = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 192v640l384-320.064z"
  },
  null,
  -1
  /* HOISTED */
), Kh = [
  Gh
];
function Zh(a, r, o, d, l, s) {
  return u(), m("svg", Wh, Kh);
}
var Yh = /* @__PURE__ */ p(jh, [["render", Zh], ["__file", "caret-right.vue"]]), Jh = {
  name: "CaretTop"
}, Xh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qh = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 320 192 704h639.936z"
  },
  null,
  -1
  /* HOISTED */
), e9 = [
  Qh
];
function n9(a, r, o, d, l, s) {
  return u(), m("svg", Xh, e9);
}
var a9 = /* @__PURE__ */ p(Jh, [["render", n9], ["__file", "caret-top.vue"]]), t9 = {
  name: "Cellphone"
}, o9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, r9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
  },
  null,
  -1
  /* HOISTED */
), c9 = [
  r9
];
function d9(a, r, o, d, l, s) {
  return u(), m("svg", o9, c9);
}
var l9 = /* @__PURE__ */ p(t9, [["render", d9], ["__file", "cellphone.vue"]]), i9 = {
  name: "ChatDotRound"
}, s9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
  },
  null,
  -1
  /* HOISTED */
), u9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), m9 = [
  _9,
  u9
];
function h9(a, r, o, d, l, s) {
  return u(), m("svg", s9, m9);
}
var v9 = /* @__PURE__ */ p(i9, [["render", h9], ["__file", "chat-dot-round.vue"]]), p9 = {
  name: "ChatDotSquare"
}, f9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, g9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
  },
  null,
  -1
  /* HOISTED */
), w9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), $9 = [
  g9,
  w9
];
function x9(a, r, o, d, l, s) {
  return u(), m("svg", f9, $9);
}
var y9 = /* @__PURE__ */ p(p9, [["render", x9], ["__file", "chat-dot-square.vue"]]), z9 = {
  name: "ChatLineRound"
}, C9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, b9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
  },
  null,
  -1
  /* HOISTED */
), M9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), H9 = [
  b9,
  M9
];
function A9(a, r, o, d, l, s) {
  return u(), m("svg", C9, H9);
}
var V9 = /* @__PURE__ */ p(z9, [["render", A9], ["__file", "chat-line-round.vue"]]), L9 = {
  name: "ChatLineSquare"
}, S9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, B9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
  },
  null,
  -1
  /* HOISTED */
), T9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), O9 = [
  B9,
  T9
];
function I9(a, r, o, d, l, s) {
  return u(), m("svg", S9, O9);
}
var P9 = /* @__PURE__ */ p(L9, [["render", I9], ["__file", "chat-line-square.vue"]]), E9 = {
  name: "ChatRound"
}, k9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, F9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
  },
  null,
  -1
  /* HOISTED */
), D9 = [
  F9
];
function R9(a, r, o, d, l, s) {
  return u(), m("svg", k9, D9);
}
var q9 = /* @__PURE__ */ p(E9, [["render", R9], ["__file", "chat-round.vue"]]), N9 = {
  name: "ChatSquare"
}, U9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, j9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
  },
  null,
  -1
  /* HOISTED */
), W9 = [
  j9
];
function G9(a, r, o, d, l, s) {
  return u(), m("svg", U9, W9);
}
var K9 = /* @__PURE__ */ p(N9, [["render", G9], ["__file", "chat-square.vue"]]), Z9 = {
  name: "Check"
}, Y9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, J9 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
  },
  null,
  -1
  /* HOISTED */
), X9 = [
  J9
];
function Q9(a, r, o, d, l, s) {
  return u(), m("svg", Y9, X9);
}
var ev = /* @__PURE__ */ p(Z9, [["render", Q9], ["__file", "check.vue"]]), nv = {
  name: "Checked"
}, av = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, tv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
  },
  null,
  -1
  /* HOISTED */
), ov = [
  tv
];
function rv(a, r, o, d, l, s) {
  return u(), m("svg", av, ov);
}
var cv = /* @__PURE__ */ p(nv, [["render", rv], ["__file", "checked.vue"]]), dv = {
  name: "Cherry"
}, lv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, iv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
  },
  null,
  -1
  /* HOISTED */
), sv = [
  iv
];
function _v(a, r, o, d, l, s) {
  return u(), m("svg", lv, sv);
}
var uv = /* @__PURE__ */ p(dv, [["render", _v], ["__file", "cherry.vue"]]), mv = {
  name: "Chicken"
}, hv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
  },
  null,
  -1
  /* HOISTED */
), pv = [
  vv
];
function fv(a, r, o, d, l, s) {
  return u(), m("svg", hv, pv);
}
var gv = /* @__PURE__ */ p(mv, [["render", fv], ["__file", "chicken.vue"]]), wv = {
  name: "ChromeFilled"
}, $v = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, xv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.372 212.372 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67z"
  },
  null,
  -1
  /* HOISTED */
), yv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M576.79 401.63a127.92 127.92 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128.005 128.005 0 0 0-2.16 127.44l1.24 2.13a127.906 127.906 0 0 0 46.36 46.61 127.907 127.907 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.984 127.984 0 0 0 .29-127.46 127.957 127.957 0 0 0-46.36-46.91z"
  },
  null,
  -1
  /* HOISTED */
), zv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M394.45 333.96A213.336 213.336 0 0 1 512 298.67h369.58A426.503 426.503 0 0 0 512 85.34a425.598 425.598 0 0 0-171.74 35.98 425.644 425.644 0 0 0-142.62 102.22l118.14 204.63a213.397 213.397 0 0 1 78.67-94.21zm117.56 604.72H512zm-97.25-236.73a213.284 213.284 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.315 213.315 0 0 1-122.77-21.91z"
  },
  null,
  -1
  /* HOISTED */
), Cv = [
  xv,
  yv,
  zv
];
function bv(a, r, o, d, l, s) {
  return u(), m("svg", $v, Cv);
}
var Mv = /* @__PURE__ */ p(wv, [["render", bv], ["__file", "chrome-filled.vue"]]), Hv = {
  name: "CircleCheckFilled"
}, Av = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Vv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  },
  null,
  -1
  /* HOISTED */
), Lv = [
  Vv
];
function Sv(a, r, o, d, l, s) {
  return u(), m("svg", Av, Lv);
}
var Bv = /* @__PURE__ */ p(Hv, [["render", Sv], ["__file", "circle-check-filled.vue"]]), Tv = {
  name: "CircleCheck"
}, Ov = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Iv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Pv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), Ev = [
  Iv,
  Pv
];
function kv(a, r, o, d, l, s) {
  return u(), m("svg", Ov, Ev);
}
var Fv = /* @__PURE__ */ p(Tv, [["render", kv], ["__file", "circle-check.vue"]]), Dv = {
  name: "CircleCloseFilled"
}, Rv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
  },
  null,
  -1
  /* HOISTED */
), Nv = [
  qv
];
function Uv(a, r, o, d, l, s) {
  return u(), m("svg", Rv, Nv);
}
var st = /* @__PURE__ */ p(Dv, [["render", Uv], ["__file", "circle-close-filled.vue"]]), jv = {
  name: "CircleClose"
}, Wv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), Kv = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Zv = [
  Gv,
  Kv
];
function Yv(a, r, o, d, l, s) {
  return u(), m("svg", Wv, Zv);
}
var Jv = /* @__PURE__ */ p(jv, [["render", Yv], ["__file", "circle-close.vue"]]), Xv = {
  name: "CirclePlusFilled"
}, Qv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ep = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
  },
  null,
  -1
  /* HOISTED */
), np = [
  ep
];
function ap(a, r, o, d, l, s) {
  return u(), m("svg", Qv, np);
}
var tp = /* @__PURE__ */ p(Xv, [["render", ap], ["__file", "circle-plus-filled.vue"]]), op = {
  name: "CirclePlus"
}, rp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, cp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), dp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
  },
  null,
  -1
  /* HOISTED */
), lp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), ip = [
  cp,
  dp,
  lp
];
function sp(a, r, o, d, l, s) {
  return u(), m("svg", rp, ip);
}
var _p = /* @__PURE__ */ p(op, [["render", sp], ["__file", "circle-plus.vue"]]), up = {
  name: "Clock"
}, mp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), vp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), pp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), fp = [
  hp,
  vp,
  pp
];
function gp(a, r, o, d, l, s) {
  return u(), m("svg", mp, fp);
}
var wp = /* @__PURE__ */ p(up, [["render", gp], ["__file", "clock.vue"]]), $p = {
  name: "CloseBold"
}, xp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
  },
  null,
  -1
  /* HOISTED */
), zp = [
  yp
];
function Cp(a, r, o, d, l, s) {
  return u(), m("svg", xp, zp);
}
var bp = /* @__PURE__ */ p($p, [["render", Cp], ["__file", "close-bold.vue"]]), Mp = {
  name: "Close"
}, Hp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ap = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), Vp = [
  Ap
];
function Lp(a, r, o, d, l, s) {
  return u(), m("svg", Hp, Vp);
}
var o3 = /* @__PURE__ */ p(Mp, [["render", Lp], ["__file", "close.vue"]]), Sp = {
  name: "Cloudy"
}, Bp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
  },
  null,
  -1
  /* HOISTED */
), Op = [
  Tp
];
function Ip(a, r, o, d, l, s) {
  return u(), m("svg", Bp, Op);
}
var Pp = /* @__PURE__ */ p(Sp, [["render", Ip], ["__file", "cloudy.vue"]]), Ep = {
  name: "CoffeeCup"
}, kp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
  },
  null,
  -1
  /* HOISTED */
), Dp = [
  Fp
];
function Rp(a, r, o, d, l, s) {
  return u(), m("svg", kp, Dp);
}
var qp = /* @__PURE__ */ p(Ep, [["render", Rp], ["__file", "coffee-cup.vue"]]), Np = {
  name: "Coffee"
}, Up = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
  },
  null,
  -1
  /* HOISTED */
), Wp = [
  jp
];
function Gp(a, r, o, d, l, s) {
  return u(), m("svg", Up, Wp);
}
var Kp = /* @__PURE__ */ p(Np, [["render", Gp], ["__file", "coffee.vue"]]), Zp = {
  name: "Coin"
}, Yp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
  },
  null,
  -1
  /* HOISTED */
), Xp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
  },
  null,
  -1
  /* HOISTED */
), Qp = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
  },
  null,
  -1
  /* HOISTED */
), ef = [
  Jp,
  Xp,
  Qp
];
function nf(a, r, o, d, l, s) {
  return u(), m("svg", Yp, ef);
}
var af = /* @__PURE__ */ p(Zp, [["render", nf], ["__file", "coin.vue"]]), tf = {
  name: "ColdDrink"
}, of = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
  },
  null,
  -1
  /* HOISTED */
), cf = [
  rf
];
function df(a, r, o, d, l, s) {
  return u(), m("svg", of, cf);
}
var lf = /* @__PURE__ */ p(tf, [["render", df], ["__file", "cold-drink.vue"]]), sf = {
  name: "CollectionTag"
}, _f = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, uf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), mf = [
  uf
];
function hf(a, r, o, d, l, s) {
  return u(), m("svg", _f, mf);
}
var vf = /* @__PURE__ */ p(sf, [["render", hf], ["__file", "collection-tag.vue"]]), pf = {
  name: "Collection"
}, ff = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
  },
  null,
  -1
  /* HOISTED */
), wf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
  },
  null,
  -1
  /* HOISTED */
), $f = [
  gf,
  wf
];
function xf(a, r, o, d, l, s) {
  return u(), m("svg", ff, $f);
}
var yf = /* @__PURE__ */ p(pf, [["render", xf], ["__file", "collection.vue"]]), zf = {
  name: "Comment"
}, Cf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
  },
  null,
  -1
  /* HOISTED */
), Mf = [
  bf
];
function Hf(a, r, o, d, l, s) {
  return u(), m("svg", Cf, Mf);
}
var Af = /* @__PURE__ */ p(zf, [["render", Hf], ["__file", "comment.vue"]]), Vf = {
  name: "Compass"
}, Lf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Bf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
  },
  null,
  -1
  /* HOISTED */
), Tf = [
  Sf,
  Bf
];
function Of(a, r, o, d, l, s) {
  return u(), m("svg", Lf, Tf);
}
var If = /* @__PURE__ */ p(Vf, [["render", Of], ["__file", "compass.vue"]]), Pf = {
  name: "Connection"
}, Ef = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, kf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
  },
  null,
  -1
  /* HOISTED */
), Ff = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
  },
  null,
  -1
  /* HOISTED */
), Df = [
  kf,
  Ff
];
function Rf(a, r, o, d, l, s) {
  return u(), m("svg", Ef, Df);
}
var qf = /* @__PURE__ */ p(Pf, [["render", Rf], ["__file", "connection.vue"]]), Nf = {
  name: "Coordinate"
}, Uf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h64v320h-64z"
  },
  null,
  -1
  /* HOISTED */
), Wf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
  },
  null,
  -1
  /* HOISTED */
), Gf = [
  jf,
  Wf
];
function Kf(a, r, o, d, l, s) {
  return u(), m("svg", Uf, Gf);
}
var Zf = /* @__PURE__ */ p(Nf, [["render", Kf], ["__file", "coordinate.vue"]]), Yf = {
  name: "CopyDocument"
}, Jf = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
  },
  null,
  -1
  /* HOISTED */
), Qf = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
  },
  null,
  -1
  /* HOISTED */
), e7 = [
  Xf,
  Qf
];
function n7(a, r, o, d, l, s) {
  return u(), m("svg", Jf, e7);
}
var a7 = /* @__PURE__ */ p(Yf, [["render", n7], ["__file", "copy-document.vue"]]), t7 = {
  name: "Cpu"
}, o7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, r7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
  },
  null,
  -1
  /* HOISTED */
), c7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
  },
  null,
  -1
  /* HOISTED */
), d7 = [
  r7,
  c7
];
function l7(a, r, o, d, l, s) {
  return u(), m("svg", o7, d7);
}
var i7 = /* @__PURE__ */ p(t7, [["render", l7], ["__file", "cpu.vue"]]), s7 = {
  name: "CreditCard"
}, _7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, u7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
  },
  null,
  -1
  /* HOISTED */
), m7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
  },
  null,
  -1
  /* HOISTED */
), h7 = [
  u7,
  m7
];
function v7(a, r, o, d, l, s) {
  return u(), m("svg", _7, h7);
}
var p7 = /* @__PURE__ */ p(s7, [["render", v7], ["__file", "credit-card.vue"]]), f7 = {
  name: "Crop"
}, g7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, w7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
  },
  null,
  -1
  /* HOISTED */
), $7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
  },
  null,
  -1
  /* HOISTED */
), x7 = [
  w7,
  $7
];
function y7(a, r, o, d, l, s) {
  return u(), m("svg", g7, x7);
}
var z7 = /* @__PURE__ */ p(f7, [["render", y7], ["__file", "crop.vue"]]), C7 = {
  name: "DArrowLeft"
}, b7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, M7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
  },
  null,
  -1
  /* HOISTED */
), H7 = [
  M7
];
function A7(a, r, o, d, l, s) {
  return u(), m("svg", b7, H7);
}
var V7 = /* @__PURE__ */ p(C7, [["render", A7], ["__file", "d-arrow-left.vue"]]), L7 = {
  name: "DArrowRight"
}, S7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, B7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
  },
  null,
  -1
  /* HOISTED */
), T7 = [
  B7
];
function O7(a, r, o, d, l, s) {
  return u(), m("svg", S7, T7);
}
var I7 = /* @__PURE__ */ p(L7, [["render", O7], ["__file", "d-arrow-right.vue"]]), P7 = {
  name: "DCaret"
}, E7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, k7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
  },
  null,
  -1
  /* HOISTED */
), F7 = [
  k7
];
function D7(a, r, o, d, l, s) {
  return u(), m("svg", E7, F7);
}
var R7 = /* @__PURE__ */ p(P7, [["render", D7], ["__file", "d-caret.vue"]]), q7 = {
  name: "DataAnalysis"
}, N7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, U7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), j7 = [
  U7
];
function W7(a, r, o, d, l, s) {
  return u(), m("svg", N7, j7);
}
var G7 = /* @__PURE__ */ p(q7, [["render", W7], ["__file", "data-analysis.vue"]]), K7 = {
  name: "DataBoard"
}, Z7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Y7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M32 128h960v64H32z"
  },
  null,
  -1
  /* HOISTED */
), J7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
  },
  null,
  -1
  /* HOISTED */
), X7 = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
  },
  null,
  -1
  /* HOISTED */
), Q7 = [
  Y7,
  J7,
  X7
];
function eg(a, r, o, d, l, s) {
  return u(), m("svg", Z7, Q7);
}
var ng = /* @__PURE__ */ p(K7, [["render", eg], ["__file", "data-board.vue"]]), ag = {
  name: "DataLine"
}, tg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, og = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
  },
  null,
  -1
  /* HOISTED */
), rg = [
  og
];
function cg(a, r, o, d, l, s) {
  return u(), m("svg", tg, rg);
}
var dg = /* @__PURE__ */ p(ag, [["render", cg], ["__file", "data-line.vue"]]), lg = {
  name: "DeleteFilled"
}, ig = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sg = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
  },
  null,
  -1
  /* HOISTED */
), _g = [
  sg
];
function ug(a, r, o, d, l, s) {
  return u(), m("svg", ig, _g);
}
var mg = /* @__PURE__ */ p(lg, [["render", ug], ["__file", "delete-filled.vue"]]), hg = {
  name: "DeleteLocation"
}, vg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pg = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), fg = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), gg = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), wg = [
  pg,
  fg,
  gg
];
function $g(a, r, o, d, l, s) {
  return u(), m("svg", vg, wg);
}
var xg = /* @__PURE__ */ p(hg, [["render", $g], ["__file", "delete-location.vue"]]), yg = {
  name: "Delete"
}, zg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cg = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), bg = [
  Cg
];
function Mg(a, r, o, d, l, s) {
  return u(), m("svg", zg, bg);
}
var Hg = /* @__PURE__ */ p(yg, [["render", Mg], ["__file", "delete.vue"]]), Ag = {
  name: "Dessert"
}, Vg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Lg = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), Sg = [
  Lg
];
function Bg(a, r, o, d, l, s) {
  return u(), m("svg", Vg, Sg);
}
var Tg = /* @__PURE__ */ p(Ag, [["render", Bg], ["__file", "dessert.vue"]]), Og = {
  name: "Discount"
}, Ig = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Pg = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
  },
  null,
  -1
  /* HOISTED */
), Eg = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), kg = [
  Pg,
  Eg
];
function Fg(a, r, o, d, l, s) {
  return u(), m("svg", Ig, kg);
}
var Dg = /* @__PURE__ */ p(Og, [["render", Fg], ["__file", "discount.vue"]]), Rg = {
  name: "DishDot"
}, qg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ng = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
  },
  null,
  -1
  /* HOISTED */
), Ug = [
  Ng
];
function jg(a, r, o, d, l, s) {
  return u(), m("svg", qg, Ug);
}
var Wg = /* @__PURE__ */ p(Rg, [["render", jg], ["__file", "dish-dot.vue"]]), Gg = {
  name: "Dish"
}, Kg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zg = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), Yg = [
  Zg
];
function Jg(a, r, o, d, l, s) {
  return u(), m("svg", Kg, Yg);
}
var Xg = /* @__PURE__ */ p(Gg, [["render", Jg], ["__file", "dish.vue"]]), Qg = {
  name: "DocumentAdd"
}, ew = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, nw = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
  },
  null,
  -1
  /* HOISTED */
), aw = [
  nw
];
function tw(a, r, o, d, l, s) {
  return u(), m("svg", ew, aw);
}
var ow = /* @__PURE__ */ p(Qg, [["render", tw], ["__file", "document-add.vue"]]), rw = {
  name: "DocumentChecked"
}, cw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dw = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
  },
  null,
  -1
  /* HOISTED */
), lw = [
  dw
];
function iw(a, r, o, d, l, s) {
  return u(), m("svg", cw, lw);
}
var sw = /* @__PURE__ */ p(rw, [["render", iw], ["__file", "document-checked.vue"]]), _w = {
  name: "DocumentCopy"
}, uw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mw = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
  },
  null,
  -1
  /* HOISTED */
), hw = [
  mw
];
function vw(a, r, o, d, l, s) {
  return u(), m("svg", uw, hw);
}
var pw = /* @__PURE__ */ p(_w, [["render", vw], ["__file", "document-copy.vue"]]), fw = {
  name: "DocumentDelete"
}, gw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ww = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
  },
  null,
  -1
  /* HOISTED */
), $w = [
  ww
];
function xw(a, r, o, d, l, s) {
  return u(), m("svg", gw, $w);
}
var yw = /* @__PURE__ */ p(fw, [["render", xw], ["__file", "document-delete.vue"]]), zw = {
  name: "DocumentRemove"
}, Cw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bw = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
  },
  null,
  -1
  /* HOISTED */
), Mw = [
  bw
];
function Hw(a, r, o, d, l, s) {
  return u(), m("svg", Cw, Mw);
}
var Aw = /* @__PURE__ */ p(zw, [["render", Hw], ["__file", "document-remove.vue"]]), Vw = {
  name: "Document"
}, Lw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sw = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
  },
  null,
  -1
  /* HOISTED */
), Bw = [
  Sw
];
function Tw(a, r, o, d, l, s) {
  return u(), m("svg", Lw, Bw);
}
var Ow = /* @__PURE__ */ p(Vw, [["render", Tw], ["__file", "document.vue"]]), Iw = {
  name: "Download"
}, Pw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ew = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
  },
  null,
  -1
  /* HOISTED */
), kw = [
  Ew
];
function Fw(a, r, o, d, l, s) {
  return u(), m("svg", Pw, kw);
}
var Dw = /* @__PURE__ */ p(Iw, [["render", Fw], ["__file", "download.vue"]]), Rw = {
  name: "Drizzling"
}, qw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Nw = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
  },
  null,
  -1
  /* HOISTED */
), Uw = [
  Nw
];
function jw(a, r, o, d, l, s) {
  return u(), m("svg", qw, Uw);
}
var Ww = /* @__PURE__ */ p(Rw, [["render", jw], ["__file", "drizzling.vue"]]), Gw = {
  name: "EditPen"
}, Kw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zw = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"
  },
  null,
  -1
  /* HOISTED */
), Yw = [
  Zw
];
function Jw(a, r, o, d, l, s) {
  return u(), m("svg", Kw, Yw);
}
var Xw = /* @__PURE__ */ p(Gw, [["render", Jw], ["__file", "edit-pen.vue"]]), Qw = {
  name: "Edit"
}, e$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, n$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
  },
  null,
  -1
  /* HOISTED */
), a$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
  },
  null,
  -1
  /* HOISTED */
), t$ = [
  n$,
  a$
];
function o$(a, r, o, d, l, s) {
  return u(), m("svg", e$, t$);
}
var r$ = /* @__PURE__ */ p(Qw, [["render", o$], ["__file", "edit.vue"]]), c$ = {
  name: "ElemeFilled"
}, d$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, l$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
  },
  null,
  -1
  /* HOISTED */
), i$ = [
  l$
];
function s$(a, r, o, d, l, s) {
  return u(), m("svg", d$, i$);
}
var _$ = /* @__PURE__ */ p(c$, [["render", s$], ["__file", "eleme-filled.vue"]]), u$ = {
  name: "Eleme"
}, m$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, h$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
  },
  null,
  -1
  /* HOISTED */
), v$ = [
  h$
];
function p$(a, r, o, d, l, s) {
  return u(), m("svg", m$, v$);
}
var f$ = /* @__PURE__ */ p(u$, [["render", p$], ["__file", "eleme.vue"]]), g$ = {
  name: "ElementPlus"
}, w$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z"
  },
  null,
  -1
  /* HOISTED */
), x$ = [
  $$
];
function y$(a, r, o, d, l, s) {
  return u(), m("svg", w$, x$);
}
var z$ = /* @__PURE__ */ p(g$, [["render", y$], ["__file", "element-plus.vue"]]), C$ = {
  name: "Expand"
}, b$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, M$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
  },
  null,
  -1
  /* HOISTED */
), H$ = [
  M$
];
function A$(a, r, o, d, l, s) {
  return u(), m("svg", b$, H$);
}
var V$ = /* @__PURE__ */ p(C$, [["render", A$], ["__file", "expand.vue"]]), L$ = {
  name: "Failed"
}, S$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, B$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
  },
  null,
  -1
  /* HOISTED */
), T$ = [
  B$
];
function O$(a, r, o, d, l, s) {
  return u(), m("svg", S$, T$);
}
var I$ = /* @__PURE__ */ p(L$, [["render", O$], ["__file", "failed.vue"]]), P$ = {
  name: "Female"
}, E$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, k$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
  },
  null,
  -1
  /* HOISTED */
), F$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
  },
  null,
  -1
  /* HOISTED */
), D$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), R$ = [
  k$,
  F$,
  D$
];
function q$(a, r, o, d, l, s) {
  return u(), m("svg", E$, R$);
}
var N$ = /* @__PURE__ */ p(P$, [["render", q$], ["__file", "female.vue"]]), U$ = {
  name: "Files"
}, j$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, W$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
  },
  null,
  -1
  /* HOISTED */
), G$ = [
  W$
];
function K$(a, r, o, d, l, s) {
  return u(), m("svg", j$, G$);
}
var Z$ = /* @__PURE__ */ p(U$, [["render", K$], ["__file", "files.vue"]]), Y$ = {
  name: "Film"
}, J$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, X$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Q$ = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
  },
  null,
  -1
  /* HOISTED */
), ex = [
  X$,
  Q$
];
function nx(a, r, o, d, l, s) {
  return u(), m("svg", J$, ex);
}
var ax = /* @__PURE__ */ p(Y$, [["render", nx], ["__file", "film.vue"]]), tx = {
  name: "Filter"
}, ox = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rx = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
  },
  null,
  -1
  /* HOISTED */
), cx = [
  rx
];
function dx(a, r, o, d, l, s) {
  return u(), m("svg", ox, cx);
}
var lx = /* @__PURE__ */ p(tx, [["render", dx], ["__file", "filter.vue"]]), ix = {
  name: "Finished"
}, sx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _x = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
  },
  null,
  -1
  /* HOISTED */
), ux = [
  _x
];
function mx(a, r, o, d, l, s) {
  return u(), m("svg", sx, ux);
}
var hx = /* @__PURE__ */ p(ix, [["render", mx], ["__file", "finished.vue"]]), vx = {
  name: "FirstAidKit"
}, px = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fx = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
  },
  null,
  -1
  /* HOISTED */
), gx = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), wx = [
  fx,
  gx
];
function $x(a, r, o, d, l, s) {
  return u(), m("svg", px, wx);
}
var xx = /* @__PURE__ */ p(vx, [["render", $x], ["__file", "first-aid-kit.vue"]]), yx = {
  name: "Flag"
}, zx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cx = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
  },
  null,
  -1
  /* HOISTED */
), bx = [
  Cx
];
function Mx(a, r, o, d, l, s) {
  return u(), m("svg", zx, bx);
}
var Hx = /* @__PURE__ */ p(yx, [["render", Mx], ["__file", "flag.vue"]]), Ax = {
  name: "Fold"
}, Vx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Lx = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
  },
  null,
  -1
  /* HOISTED */
), Sx = [
  Lx
];
function Bx(a, r, o, d, l, s) {
  return u(), m("svg", Vx, Sx);
}
var Tx = /* @__PURE__ */ p(Ax, [["render", Bx], ["__file", "fold.vue"]]), Ox = {
  name: "FolderAdd"
}, Ix = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Px = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
  },
  null,
  -1
  /* HOISTED */
), Ex = [
  Px
];
function kx(a, r, o, d, l, s) {
  return u(), m("svg", Ix, Ex);
}
var Fx = /* @__PURE__ */ p(Ox, [["render", kx], ["__file", "folder-add.vue"]]), Dx = {
  name: "FolderChecked"
}, Rx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qx = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
  },
  null,
  -1
  /* HOISTED */
), Nx = [
  qx
];
function Ux(a, r, o, d, l, s) {
  return u(), m("svg", Rx, Nx);
}
var jx = /* @__PURE__ */ p(Dx, [["render", Ux], ["__file", "folder-checked.vue"]]), Wx = {
  name: "FolderDelete"
}, Gx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Kx = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
  },
  null,
  -1
  /* HOISTED */
), Zx = [
  Kx
];
function Yx(a, r, o, d, l, s) {
  return u(), m("svg", Gx, Zx);
}
var Jx = /* @__PURE__ */ p(Wx, [["render", Yx], ["__file", "folder-delete.vue"]]), Xx = {
  name: "FolderOpened"
}, Qx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ey = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
  },
  null,
  -1
  /* HOISTED */
), ny = [
  ey
];
function ay(a, r, o, d, l, s) {
  return u(), m("svg", Qx, ny);
}
var ty = /* @__PURE__ */ p(Xx, [["render", ay], ["__file", "folder-opened.vue"]]), oy = {
  name: "FolderRemove"
}, ry = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, cy = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
  },
  null,
  -1
  /* HOISTED */
), dy = [
  cy
];
function ly(a, r, o, d, l, s) {
  return u(), m("svg", ry, dy);
}
var iy = /* @__PURE__ */ p(oy, [["render", ly], ["__file", "folder-remove.vue"]]), sy = {
  name: "Folder"
}, _y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, uy = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), my = [
  uy
];
function hy(a, r, o, d, l, s) {
  return u(), m("svg", _y, my);
}
var vy = /* @__PURE__ */ p(sy, [["render", hy], ["__file", "folder.vue"]]), py = {
  name: "Food"
}, fy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gy = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
  },
  null,
  -1
  /* HOISTED */
), wy = [
  gy
];
function $y(a, r, o, d, l, s) {
  return u(), m("svg", fy, wy);
}
var xy = /* @__PURE__ */ p(py, [["render", $y], ["__file", "food.vue"]]), yy = {
  name: "Football"
}, zy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Cy = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
  },
  null,
  -1
  /* HOISTED */
), by = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
  },
  null,
  -1
  /* HOISTED */
), My = [
  Cy,
  by
];
function Hy(a, r, o, d, l, s) {
  return u(), m("svg", zy, My);
}
var Ay = /* @__PURE__ */ p(yy, [["render", Hy], ["__file", "football.vue"]]), Vy = {
  name: "ForkSpoon"
}, Ly = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sy = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
  },
  null,
  -1
  /* HOISTED */
), By = [
  Sy
];
function Ty(a, r, o, d, l, s) {
  return u(), m("svg", Ly, By);
}
var Oy = /* @__PURE__ */ p(Vy, [["render", Ty], ["__file", "fork-spoon.vue"]]), Iy = {
  name: "Fries"
}, Py = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ey = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
  },
  null,
  -1
  /* HOISTED */
), ky = [
  Ey
];
function Fy(a, r, o, d, l, s) {
  return u(), m("svg", Py, ky);
}
var Dy = /* @__PURE__ */ p(Iy, [["render", Fy], ["__file", "fries.vue"]]), Ry = {
  name: "FullScreen"
}, qy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ny = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
  },
  null,
  -1
  /* HOISTED */
), Uy = [
  Ny
];
function jy(a, r, o, d, l, s) {
  return u(), m("svg", qy, Uy);
}
var Wy = /* @__PURE__ */ p(Ry, [["render", jy], ["__file", "full-screen.vue"]]), Gy = {
  name: "GobletFull"
}, Ky = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Zy = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
  },
  null,
  -1
  /* HOISTED */
), Yy = [
  Zy
];
function Jy(a, r, o, d, l, s) {
  return u(), m("svg", Ky, Yy);
}
var Xy = /* @__PURE__ */ p(Gy, [["render", Jy], ["__file", "goblet-full.vue"]]), Qy = {
  name: "GobletSquareFull"
}, ez = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, nz = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
  },
  null,
  -1
  /* HOISTED */
), az = [
  nz
];
function tz(a, r, o, d, l, s) {
  return u(), m("svg", ez, az);
}
var oz = /* @__PURE__ */ p(Qy, [["render", tz], ["__file", "goblet-square-full.vue"]]), rz = {
  name: "GobletSquare"
}, cz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dz = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
  },
  null,
  -1
  /* HOISTED */
), lz = [
  dz
];
function iz(a, r, o, d, l, s) {
  return u(), m("svg", cz, lz);
}
var sz = /* @__PURE__ */ p(rz, [["render", iz], ["__file", "goblet-square.vue"]]), _z = {
  name: "Goblet"
}, uz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mz = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
  },
  null,
  -1
  /* HOISTED */
), hz = [
  mz
];
function vz(a, r, o, d, l, s) {
  return u(), m("svg", uz, hz);
}
var pz = /* @__PURE__ */ p(_z, [["render", vz], ["__file", "goblet.vue"]]), fz = {
  name: "GoldMedal"
}, gz = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, wz = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m772.13 452.84 53.86-351.81c1.32-10.01-1.17-18.68-7.49-26.02S804.35 64 795.01 64H228.99v-.01h-.06c-9.33 0-17.15 3.67-23.49 11.01s-8.83 16.01-7.49 26.02l53.87 351.89C213.54 505.73 193.59 568.09 192 640c2 90.67 33.17 166.17 93.5 226.5S421.33 957.99 512 960c90.67-2 166.17-33.17 226.5-93.5 60.33-60.34 91.49-135.83 93.5-226.5-1.59-71.94-21.56-134.32-59.87-187.16zM640.01 128h117.02l-39.01 254.02c-20.75-10.64-40.74-19.73-59.94-27.28-5.92-3-11.95-5.8-18.08-8.41V128h.01zM576 128v198.76c-13.18-2.58-26.74-4.43-40.67-5.55-8.07-.8-15.85-1.2-23.33-1.2-10.54 0-21.09.66-31.64 1.96a359.844 359.844 0 0 0-32.36 4.79V128h128zm-192 0h.04v218.3c-6.22 2.66-12.34 5.5-18.36 8.56-19.13 7.54-39.02 16.6-59.66 27.16L267.01 128H384zm308.99 692.99c-48 48-108.33 73-180.99 75.01-72.66-2.01-132.99-27.01-180.99-75.01S258.01 712.66 256 640c2.01-72.66 27.01-132.99 75.01-180.99 19.67-19.67 41.41-35.47 65.22-47.41 38.33-15.04 71.15-23.92 98.44-26.65 5.07-.41 10.2-.7 15.39-.88.63-.01 1.28-.03 1.91-.03.66 0 1.35.03 2.02.04 5.11.17 10.15.46 15.13.86 27.4 2.71 60.37 11.65 98.91 26.79 23.71 11.93 45.36 27.69 64.96 47.29 48 48 73 108.33 75.01 180.99-2.01 72.65-27.01 132.98-75.01 180.98z"
  },
  null,
  -1
  /* HOISTED */
), $z = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M544 480H416v64h64v192h-64v64h192v-64h-64z"
  },
  null,
  -1
  /* HOISTED */
), xz = [
  wz,
  $z
];
function yz(a, r, o, d, l, s) {
  return u(), m("svg", gz, xz);
}
var zz = /* @__PURE__ */ p(fz, [["render", yz], ["__file", "gold-medal.vue"]]), Cz = {
  name: "GoodsFilled"
}, bz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Mz = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
  },
  null,
  -1
  /* HOISTED */
), Hz = [
  Mz
];
function Az(a, r, o, d, l, s) {
  return u(), m("svg", bz, Hz);
}
var Vz = /* @__PURE__ */ p(Cz, [["render", Az], ["__file", "goods-filled.vue"]]), Lz = {
  name: "Goods"
}, Sz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Bz = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
  },
  null,
  -1
  /* HOISTED */
), Tz = [
  Bz
];
function Oz(a, r, o, d, l, s) {
  return u(), m("svg", Sz, Tz);
}
var Iz = /* @__PURE__ */ p(Lz, [["render", Oz], ["__file", "goods.vue"]]), Pz = {
  name: "Grape"
}, Ez = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, kz = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
  },
  null,
  -1
  /* HOISTED */
), Fz = [
  kz
];
function Dz(a, r, o, d, l, s) {
  return u(), m("svg", Ez, Fz);
}
var Rz = /* @__PURE__ */ p(Pz, [["render", Dz], ["__file", "grape.vue"]]), qz = {
  name: "Grid"
}, Nz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Uz = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
  },
  null,
  -1
  /* HOISTED */
), jz = [
  Uz
];
function Wz(a, r, o, d, l, s) {
  return u(), m("svg", Nz, jz);
}
var Gz = /* @__PURE__ */ p(qz, [["render", Wz], ["__file", "grid.vue"]]), Kz = {
  name: "Guide"
}, Zz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Yz = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
  },
  null,
  -1
  /* HOISTED */
), Jz = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
  },
  null,
  -1
  /* HOISTED */
), Xz = [
  Yz,
  Jz
];
function Qz(a, r, o, d, l, s) {
  return u(), m("svg", Zz, Xz);
}
var eC = /* @__PURE__ */ p(Kz, [["render", Qz], ["__file", "guide.vue"]]), nC = {
  name: "Handbag"
}, aC = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, tC = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M887.01 264.99c-6-5.99-13.67-8.99-23.01-8.99H704c-1.34-54.68-20.01-100.01-56-136s-81.32-54.66-136-56c-54.68 1.34-100.01 20.01-136 56s-54.66 81.32-56 136H160c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.67-8.99 23.01v640c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V288c0-9.35-2.99-17.02-8.99-23.01zM421.5 165.5c24.32-24.34 54.49-36.84 90.5-37.5 35.99.68 66.16 13.18 90.5 37.5s36.84 54.49 37.5 90.5H384c.68-35.99 13.18-66.16 37.5-90.5zM832 896H192V320h128v128h64V320h256v128h64V320h128v576z"
  },
  null,
  -1
  /* HOISTED */
), oC = [
  tC
];
function rC(a, r, o, d, l, s) {
  return u(), m("svg", aC, oC);
}
var cC = /* @__PURE__ */ p(nC, [["render", rC], ["__file", "handbag.vue"]]), dC = {
  name: "Headset"
}, lC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, iC = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
  },
  null,
  -1
  /* HOISTED */
), sC = [
  iC
];
function _C(a, r, o, d, l, s) {
  return u(), m("svg", lC, sC);
}
var uC = /* @__PURE__ */ p(dC, [["render", _C], ["__file", "headset.vue"]]), mC = {
  name: "HelpFilled"
}, hC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vC = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
  },
  null,
  -1
  /* HOISTED */
), pC = [
  vC
];
function fC(a, r, o, d, l, s) {
  return u(), m("svg", hC, pC);
}
var gC = /* @__PURE__ */ p(mC, [["render", fC], ["__file", "help-filled.vue"]]), wC = {
  name: "Help"
}, $C = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xC = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), yC = [
  xC
];
function zC(a, r, o, d, l, s) {
  return u(), m("svg", $C, yC);
}
var CC = /* @__PURE__ */ p(wC, [["render", zC], ["__file", "help.vue"]]), bC = {
  name: "Hide"
}, MC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, HC = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), AC = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), VC = [
  HC,
  AC
];
function LC(a, r, o, d, l, s) {
  return u(), m("svg", MC, VC);
}
var SC = /* @__PURE__ */ p(bC, [["render", LC], ["__file", "hide.vue"]]), BC = {
  name: "Histogram"
}, TC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, OC = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
  },
  null,
  -1
  /* HOISTED */
), IC = [
  OC
];
function PC(a, r, o, d, l, s) {
  return u(), m("svg", TC, IC);
}
var EC = /* @__PURE__ */ p(BC, [["render", PC], ["__file", "histogram.vue"]]), kC = {
  name: "HomeFilled"
}, FC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, DC = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
  },
  null,
  -1
  /* HOISTED */
), RC = [
  DC
];
function qC(a, r, o, d, l, s) {
  return u(), m("svg", FC, RC);
}
var NC = /* @__PURE__ */ p(kC, [["render", qC], ["__file", "home-filled.vue"]]), UC = {
  name: "HotWater"
}, jC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, WC = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
  },
  null,
  -1
  /* HOISTED */
), GC = [
  WC
];
function KC(a, r, o, d, l, s) {
  return u(), m("svg", jC, GC);
}
var ZC = /* @__PURE__ */ p(UC, [["render", KC], ["__file", "hot-water.vue"]]), YC = {
  name: "House"
}, JC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, XC = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
  },
  null,
  -1
  /* HOISTED */
), QC = [
  XC
];
function eb(a, r, o, d, l, s) {
  return u(), m("svg", JC, QC);
}
var nb = /* @__PURE__ */ p(YC, [["render", eb], ["__file", "house.vue"]]), ab = {
  name: "IceCreamRound"
}, tb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ob = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
  },
  null,
  -1
  /* HOISTED */
), rb = [
  ob
];
function cb(a, r, o, d, l, s) {
  return u(), m("svg", tb, rb);
}
var db = /* @__PURE__ */ p(ab, [["render", cb], ["__file", "ice-cream-round.vue"]]), lb = {
  name: "IceCreamSquare"
}, ib = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sb = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
  },
  null,
  -1
  /* HOISTED */
), _b = [
  sb
];
function ub(a, r, o, d, l, s) {
  return u(), m("svg", ib, _b);
}
var mb = /* @__PURE__ */ p(lb, [["render", ub], ["__file", "ice-cream-square.vue"]]), hb = {
  name: "IceCream"
}, vb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pb = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
  },
  null,
  -1
  /* HOISTED */
), fb = [
  pb
];
function gb(a, r, o, d, l, s) {
  return u(), m("svg", vb, fb);
}
var wb = /* @__PURE__ */ p(hb, [["render", gb], ["__file", "ice-cream.vue"]]), $b = {
  name: "IceDrink"
}, xb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yb = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
  },
  null,
  -1
  /* HOISTED */
), zb = [
  yb
];
function Cb(a, r, o, d, l, s) {
  return u(), m("svg", xb, zb);
}
var bb = /* @__PURE__ */ p($b, [["render", Cb], ["__file", "ice-drink.vue"]]), Mb = {
  name: "IceTea"
}, Hb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ab = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
  },
  null,
  -1
  /* HOISTED */
), Vb = [
  Ab
];
function Lb(a, r, o, d, l, s) {
  return u(), m("svg", Hb, Vb);
}
var Sb = /* @__PURE__ */ p(Mb, [["render", Lb], ["__file", "ice-tea.vue"]]), Bb = {
  name: "InfoFilled"
}, Tb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ob = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
  },
  null,
  -1
  /* HOISTED */
), Ib = [
  Ob
];
function Pb(a, r, o, d, l, s) {
  return u(), m("svg", Tb, Ib);
}
var _t = /* @__PURE__ */ p(Bb, [["render", Pb], ["__file", "info-filled.vue"]]), Eb = {
  name: "Iphone"
}, kb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fb = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
  },
  null,
  -1
  /* HOISTED */
), Db = [
  Fb
];
function Rb(a, r, o, d, l, s) {
  return u(), m("svg", kb, Db);
}
var qb = /* @__PURE__ */ p(Eb, [["render", Rb], ["__file", "iphone.vue"]]), Nb = {
  name: "Key"
}, Ub = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jb = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
  },
  null,
  -1
  /* HOISTED */
), Wb = [
  jb
];
function Gb(a, r, o, d, l, s) {
  return u(), m("svg", Ub, Wb);
}
var Kb = /* @__PURE__ */ p(Nb, [["render", Gb], ["__file", "key.vue"]]), Zb = {
  name: "KnifeFork"
}, Yb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jb = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
  },
  null,
  -1
  /* HOISTED */
), Xb = [
  Jb
];
function Qb(a, r, o, d, l, s) {
  return u(), m("svg", Yb, Xb);
}
var eM = /* @__PURE__ */ p(Zb, [["render", Qb], ["__file", "knife-fork.vue"]]), nM = {
  name: "Lightning"
}, aM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, tM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
  },
  null,
  -1
  /* HOISTED */
), oM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
  },
  null,
  -1
  /* HOISTED */
), rM = [
  tM,
  oM
];
function cM(a, r, o, d, l, s) {
  return u(), m("svg", aM, rM);
}
var dM = /* @__PURE__ */ p(nM, [["render", cM], ["__file", "lightning.vue"]]), lM = {
  name: "Link"
}, iM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
  },
  null,
  -1
  /* HOISTED */
), _M = [
  sM
];
function uM(a, r, o, d, l, s) {
  return u(), m("svg", iM, _M);
}
var mM = /* @__PURE__ */ p(lM, [["render", uM], ["__file", "link.vue"]]), hM = {
  name: "List"
}, vM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
  },
  null,
  -1
  /* HOISTED */
), fM = [
  pM
];
function gM(a, r, o, d, l, s) {
  return u(), m("svg", vM, fM);
}
var wM = /* @__PURE__ */ p(hM, [["render", gM], ["__file", "list.vue"]]), $M = {
  name: "Loading"
}, xM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), zM = [
  yM
];
function CM(a, r, o, d, l, s) {
  return u(), m("svg", xM, zM);
}
var bM = /* @__PURE__ */ p($M, [["render", CM], ["__file", "loading.vue"]]), MM = {
  name: "LocationFilled"
}, HM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, AM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
  },
  null,
  -1
  /* HOISTED */
), VM = [
  AM
];
function LM(a, r, o, d, l, s) {
  return u(), m("svg", HM, VM);
}
var SM = /* @__PURE__ */ p(MM, [["render", LM], ["__file", "location-filled.vue"]]), BM = {
  name: "LocationInformation"
}, TM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, OM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), IM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), PM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
  },
  null,
  -1
  /* HOISTED */
), EM = [
  OM,
  IM,
  PM
];
function kM(a, r, o, d, l, s) {
  return u(), m("svg", TM, EM);
}
var FM = /* @__PURE__ */ p(BM, [["render", kM], ["__file", "location-information.vue"]]), DM = {
  name: "Location"
}, RM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), NM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
  },
  null,
  -1
  /* HOISTED */
), UM = [
  qM,
  NM
];
function jM(a, r, o, d, l, s) {
  return u(), m("svg", RM, UM);
}
var WM = /* @__PURE__ */ p(DM, [["render", jM], ["__file", "location.vue"]]), GM = {
  name: "Lock"
}, KM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ZM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
  },
  null,
  -1
  /* HOISTED */
), YM = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
  },
  null,
  -1
  /* HOISTED */
), JM = [
  ZM,
  YM
];
function XM(a, r, o, d, l, s) {
  return u(), m("svg", KM, JM);
}
var QM = /* @__PURE__ */ p(GM, [["render", XM], ["__file", "lock.vue"]]), eH = {
  name: "Lollipop"
}, nH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, aH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
  },
  null,
  -1
  /* HOISTED */
), tH = [
  aH
];
function oH(a, r, o, d, l, s) {
  return u(), m("svg", nH, tH);
}
var rH = /* @__PURE__ */ p(eH, [["render", oH], ["__file", "lollipop.vue"]]), cH = {
  name: "MagicStick"
}, dH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
  },
  null,
  -1
  /* HOISTED */
), iH = [
  lH
];
function sH(a, r, o, d, l, s) {
  return u(), m("svg", dH, iH);
}
var _H = /* @__PURE__ */ p(cH, [["render", sH], ["__file", "magic-stick.vue"]]), uH = {
  name: "Magnet"
}, mH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
  },
  null,
  -1
  /* HOISTED */
), vH = [
  hH
];
function pH(a, r, o, d, l, s) {
  return u(), m("svg", mH, vH);
}
var fH = /* @__PURE__ */ p(uH, [["render", pH], ["__file", "magnet.vue"]]), gH = {
  name: "Male"
}, wH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $H = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
  },
  null,
  -1
  /* HOISTED */
), xH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
  },
  null,
  -1
  /* HOISTED */
), yH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
  },
  null,
  -1
  /* HOISTED */
), zH = [
  $H,
  xH,
  yH
];
function CH(a, r, o, d, l, s) {
  return u(), m("svg", wH, zH);
}
var bH = /* @__PURE__ */ p(gH, [["render", CH], ["__file", "male.vue"]]), MH = {
  name: "Management"
}, HH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, AH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
  },
  null,
  -1
  /* HOISTED */
), VH = [
  AH
];
function LH(a, r, o, d, l, s) {
  return u(), m("svg", HH, VH);
}
var SH = /* @__PURE__ */ p(MH, [["render", LH], ["__file", "management.vue"]]), BH = {
  name: "MapLocation"
}, TH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, OH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
  },
  null,
  -1
  /* HOISTED */
), IH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
  },
  null,
  -1
  /* HOISTED */
), PH = [
  OH,
  IH
];
function EH(a, r, o, d, l, s) {
  return u(), m("svg", TH, PH);
}
var kH = /* @__PURE__ */ p(BH, [["render", EH], ["__file", "map-location.vue"]]), FH = {
  name: "Medal"
}, DH = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, RH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
  },
  null,
  -1
  /* HOISTED */
), qH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
  },
  null,
  -1
  /* HOISTED */
), NH = [
  RH,
  qH
];
function UH(a, r, o, d, l, s) {
  return u(), m("svg", DH, NH);
}
var jH = /* @__PURE__ */ p(FH, [["render", UH], ["__file", "medal.vue"]]), WH = {
  name: "Memo"
}, GH = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, KH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z"
  },
  null,
  -1
  /* HOISTED */
), ZH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01zM192 896V128h96v768h-96zm640 0H352V128h480v768z"
  },
  null,
  -1
  /* HOISTED */
), YH = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32zm0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32z"
  },
  null,
  -1
  /* HOISTED */
), JH = [
  KH,
  ZH,
  YH
];
function XH(a, r, o, d, l, s) {
  return u(), m("svg", GH, JH);
}
var QH = /* @__PURE__ */ p(WH, [["render", XH], ["__file", "memo.vue"]]), eA = {
  name: "Menu"
}, nA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, aA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
  },
  null,
  -1
  /* HOISTED */
), tA = [
  aA
];
function oA(a, r, o, d, l, s) {
  return u(), m("svg", nA, tA);
}
var rA = /* @__PURE__ */ p(eA, [["render", oA], ["__file", "menu.vue"]]), cA = {
  name: "MessageBox"
}, dA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
  },
  null,
  -1
  /* HOISTED */
), iA = [
  lA
];
function sA(a, r, o, d, l, s) {
  return u(), m("svg", dA, iA);
}
var _A = /* @__PURE__ */ p(cA, [["render", sA], ["__file", "message-box.vue"]]), uA = {
  name: "Message"
}, mA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
  },
  null,
  -1
  /* HOISTED */
), vA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
  },
  null,
  -1
  /* HOISTED */
), pA = [
  hA,
  vA
];
function fA(a, r, o, d, l, s) {
  return u(), m("svg", mA, pA);
}
var gA = /* @__PURE__ */ p(uA, [["render", fA], ["__file", "message.vue"]]), wA = {
  name: "Mic"
}, $A = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, xA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
  },
  null,
  -1
  /* HOISTED */
), yA = [
  xA
];
function zA(a, r, o, d, l, s) {
  return u(), m("svg", $A, yA);
}
var CA = /* @__PURE__ */ p(wA, [["render", zA], ["__file", "mic.vue"]]), bA = {
  name: "Microphone"
}, MA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, HA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
  },
  null,
  -1
  /* HOISTED */
), AA = [
  HA
];
function VA(a, r, o, d, l, s) {
  return u(), m("svg", MA, AA);
}
var LA = /* @__PURE__ */ p(bA, [["render", VA], ["__file", "microphone.vue"]]), SA = {
  name: "MilkTea"
}, BA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, TA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
  },
  null,
  -1
  /* HOISTED */
), OA = [
  TA
];
function IA(a, r, o, d, l, s) {
  return u(), m("svg", BA, OA);
}
var PA = /* @__PURE__ */ p(SA, [["render", IA], ["__file", "milk-tea.vue"]]), EA = {
  name: "Minus"
}, kA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, FA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
  },
  null,
  -1
  /* HOISTED */
), DA = [
  FA
];
function RA(a, r, o, d, l, s) {
  return u(), m("svg", kA, DA);
}
var qA = /* @__PURE__ */ p(EA, [["render", RA], ["__file", "minus.vue"]]), NA = {
  name: "Money"
}, UA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
  },
  null,
  -1
  /* HOISTED */
), WA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
  },
  null,
  -1
  /* HOISTED */
), GA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
  },
  null,
  -1
  /* HOISTED */
), KA = [
  jA,
  WA,
  GA
];
function ZA(a, r, o, d, l, s) {
  return u(), m("svg", UA, KA);
}
var YA = /* @__PURE__ */ p(NA, [["render", ZA], ["__file", "money.vue"]]), JA = {
  name: "Monitor"
}, XA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, QA = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
  },
  null,
  -1
  /* HOISTED */
), eV = [
  QA
];
function nV(a, r, o, d, l, s) {
  return u(), m("svg", XA, eV);
}
var aV = /* @__PURE__ */ p(JA, [["render", nV], ["__file", "monitor.vue"]]), tV = {
  name: "MoonNight"
}, oV = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
  },
  null,
  -1
  /* HOISTED */
), cV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), dV = [
  rV,
  cV
];
function lV(a, r, o, d, l, s) {
  return u(), m("svg", oV, dV);
}
var iV = /* @__PURE__ */ p(tV, [["render", lV], ["__file", "moon-night.vue"]]), sV = {
  name: "Moon"
}, _V = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, uV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
  },
  null,
  -1
  /* HOISTED */
), mV = [
  uV
];
function hV(a, r, o, d, l, s) {
  return u(), m("svg", _V, mV);
}
var vV = /* @__PURE__ */ p(sV, [["render", hV], ["__file", "moon.vue"]]), pV = {
  name: "MoreFilled"
}, fV = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
  },
  null,
  -1
  /* HOISTED */
), wV = [
  gV
];
function $V(a, r, o, d, l, s) {
  return u(), m("svg", fV, wV);
}
var xV = /* @__PURE__ */ p(pV, [["render", $V], ["__file", "more-filled.vue"]]), yV = {
  name: "More"
}, zV = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, CV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
  },
  null,
  -1
  /* HOISTED */
), bV = [
  CV
];
function MV(a, r, o, d, l, s) {
  return u(), m("svg", zV, bV);
}
var HV = /* @__PURE__ */ p(yV, [["render", MV], ["__file", "more.vue"]]), AV = {
  name: "MostlyCloudy"
}, VV = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, LV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
  },
  null,
  -1
  /* HOISTED */
), SV = [
  LV
];
function BV(a, r, o, d, l, s) {
  return u(), m("svg", VV, SV);
}
var TV = /* @__PURE__ */ p(AV, [["render", BV], ["__file", "mostly-cloudy.vue"]]), OV = {
  name: "Mouse"
}, IV = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, PV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
  },
  null,
  -1
  /* HOISTED */
), EV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
  },
  null,
  -1
  /* HOISTED */
), kV = [
  PV,
  EV
];
function FV(a, r, o, d, l, s) {
  return u(), m("svg", IV, kV);
}
var DV = /* @__PURE__ */ p(OV, [["render", FV], ["__file", "mouse.vue"]]), RV = {
  name: "Mug"
}, qV = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, NV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
  },
  null,
  -1
  /* HOISTED */
), UV = [
  NV
];
function jV(a, r, o, d, l, s) {
  return u(), m("svg", qV, UV);
}
var WV = /* @__PURE__ */ p(RV, [["render", jV], ["__file", "mug.vue"]]), GV = {
  name: "MuteNotification"
}, KV = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ZV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
  },
  null,
  -1
  /* HOISTED */
), YV = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
  },
  null,
  -1
  /* HOISTED */
), JV = [
  ZV,
  YV
];
function XV(a, r, o, d, l, s) {
  return u(), m("svg", KV, JV);
}
var QV = /* @__PURE__ */ p(GV, [["render", XV], ["__file", "mute-notification.vue"]]), eL = {
  name: "Mute"
}, nL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, aL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
  },
  null,
  -1
  /* HOISTED */
), tL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
  },
  null,
  -1
  /* HOISTED */
), oL = [
  aL,
  tL
];
function rL(a, r, o, d, l, s) {
  return u(), m("svg", nL, oL);
}
var cL = /* @__PURE__ */ p(eL, [["render", rL], ["__file", "mute.vue"]]), dL = {
  name: "NoSmoking"
}, lL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, iL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
  },
  null,
  -1
  /* HOISTED */
), sL = [
  iL
];
function _L(a, r, o, d, l, s) {
  return u(), m("svg", lL, sL);
}
var uL = /* @__PURE__ */ p(dL, [["render", _L], ["__file", "no-smoking.vue"]]), mL = {
  name: "Notebook"
}, hL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, vL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), pL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), fL = [
  vL,
  pL
];
function gL(a, r, o, d, l, s) {
  return u(), m("svg", hL, fL);
}
var wL = /* @__PURE__ */ p(mL, [["render", gL], ["__file", "notebook.vue"]]), $L = {
  name: "Notification"
}, xL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
  },
  null,
  -1
  /* HOISTED */
), zL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
  },
  null,
  -1
  /* HOISTED */
), CL = [
  yL,
  zL
];
function bL(a, r, o, d, l, s) {
  return u(), m("svg", xL, CL);
}
var ML = /* @__PURE__ */ p($L, [["render", bL], ["__file", "notification.vue"]]), HL = {
  name: "Odometer"
}, AL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, VL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), LL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
  },
  null,
  -1
  /* HOISTED */
), SL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
  },
  null,
  -1
  /* HOISTED */
), BL = [
  VL,
  LL,
  SL
];
function TL(a, r, o, d, l, s) {
  return u(), m("svg", AL, BL);
}
var OL = /* @__PURE__ */ p(HL, [["render", TL], ["__file", "odometer.vue"]]), IL = {
  name: "OfficeBuilding"
}, PL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, EL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), kL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
  },
  null,
  -1
  /* HOISTED */
), FL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), DL = [
  EL,
  kL,
  FL
];
function RL(a, r, o, d, l, s) {
  return u(), m("svg", PL, DL);
}
var qL = /* @__PURE__ */ p(IL, [["render", RL], ["__file", "office-building.vue"]]), NL = {
  name: "Open"
}, UL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
  },
  null,
  -1
  /* HOISTED */
), WL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
  },
  null,
  -1
  /* HOISTED */
), GL = [
  jL,
  WL
];
function KL(a, r, o, d, l, s) {
  return u(), m("svg", UL, GL);
}
var ZL = /* @__PURE__ */ p(NL, [["render", KL], ["__file", "open.vue"]]), YL = {
  name: "Operation"
}, JL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, XL = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
  },
  null,
  -1
  /* HOISTED */
), QL = [
  XL
];
function eS(a, r, o, d, l, s) {
  return u(), m("svg", JL, QL);
}
var nS = /* @__PURE__ */ p(YL, [["render", eS], ["__file", "operation.vue"]]), aS = {
  name: "Opportunity"
}, tS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oS = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
  },
  null,
  -1
  /* HOISTED */
), rS = [
  oS
];
function cS(a, r, o, d, l, s) {
  return u(), m("svg", tS, rS);
}
var dS = /* @__PURE__ */ p(aS, [["render", cS], ["__file", "opportunity.vue"]]), lS = {
  name: "Orange"
}, iS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sS = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
  },
  null,
  -1
  /* HOISTED */
), _S = [
  sS
];
function uS(a, r, o, d, l, s) {
  return u(), m("svg", iS, _S);
}
var mS = /* @__PURE__ */ p(lS, [["render", uS], ["__file", "orange.vue"]]), hS = {
  name: "Paperclip"
}, vS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pS = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
  },
  null,
  -1
  /* HOISTED */
), fS = [
  pS
];
function gS(a, r, o, d, l, s) {
  return u(), m("svg", vS, fS);
}
var wS = /* @__PURE__ */ p(hS, [["render", gS], ["__file", "paperclip.vue"]]), $S = {
  name: "PartlyCloudy"
}, xS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yS = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
  },
  null,
  -1
  /* HOISTED */
), zS = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
  },
  null,
  -1
  /* HOISTED */
), CS = [
  yS,
  zS
];
function bS(a, r, o, d, l, s) {
  return u(), m("svg", xS, CS);
}
var MS = /* @__PURE__ */ p($S, [["render", bS], ["__file", "partly-cloudy.vue"]]), HS = {
  name: "Pear"
}, AS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, VS = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
  },
  null,
  -1
  /* HOISTED */
), LS = [
  VS
];
function SS(a, r, o, d, l, s) {
  return u(), m("svg", AS, LS);
}
var BS = /* @__PURE__ */ p(HS, [["render", SS], ["__file", "pear.vue"]]), TS = {
  name: "PhoneFilled"
}, OS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, IS = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
  },
  null,
  -1
  /* HOISTED */
), PS = [
  IS
];
function ES(a, r, o, d, l, s) {
  return u(), m("svg", OS, PS);
}
var kS = /* @__PURE__ */ p(TS, [["render", ES], ["__file", "phone-filled.vue"]]), FS = {
  name: "Phone"
}, DS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, RS = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
  },
  null,
  -1
  /* HOISTED */
), qS = [
  RS
];
function NS(a, r, o, d, l, s) {
  return u(), m("svg", DS, qS);
}
var US = /* @__PURE__ */ p(FS, [["render", NS], ["__file", "phone.vue"]]), jS = {
  name: "PictureFilled"
}, WS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, GS = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
  },
  null,
  -1
  /* HOISTED */
), KS = [
  GS
];
function ZS(a, r, o, d, l, s) {
  return u(), m("svg", WS, KS);
}
var YS = /* @__PURE__ */ p(jS, [["render", ZS], ["__file", "picture-filled.vue"]]), JS = {
  name: "PictureRounded"
}, XS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, QS = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
  },
  null,
  -1
  /* HOISTED */
), eB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
  },
  null,
  -1
  /* HOISTED */
), nB = [
  QS,
  eB
];
function aB(a, r, o, d, l, s) {
  return u(), m("svg", XS, nB);
}
var tB = /* @__PURE__ */ p(JS, [["render", aB], ["__file", "picture-rounded.vue"]]), oB = {
  name: "Picture"
}, rB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, cB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), dB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
  },
  null,
  -1
  /* HOISTED */
), lB = [
  cB,
  dB
];
function iB(a, r, o, d, l, s) {
  return u(), m("svg", rB, lB);
}
var sB = /* @__PURE__ */ p(oB, [["render", iB], ["__file", "picture.vue"]]), _B = {
  name: "PieChart"
}, uB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
  },
  null,
  -1
  /* HOISTED */
), hB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
  },
  null,
  -1
  /* HOISTED */
), vB = [
  mB,
  hB
];
function pB(a, r, o, d, l, s) {
  return u(), m("svg", uB, vB);
}
var fB = /* @__PURE__ */ p(_B, [["render", pB], ["__file", "pie-chart.vue"]]), gB = {
  name: "Place"
}, wB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $B = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
  },
  null,
  -1
  /* HOISTED */
), xB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), yB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
  },
  null,
  -1
  /* HOISTED */
), zB = [
  $B,
  xB,
  yB
];
function CB(a, r, o, d, l, s) {
  return u(), m("svg", wB, zB);
}
var bB = /* @__PURE__ */ p(gB, [["render", CB], ["__file", "place.vue"]]), MB = {
  name: "Platform"
}, HB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, AB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
  },
  null,
  -1
  /* HOISTED */
), VB = [
  AB
];
function LB(a, r, o, d, l, s) {
  return u(), m("svg", HB, VB);
}
var SB = /* @__PURE__ */ p(MB, [["render", LB], ["__file", "platform.vue"]]), BB = {
  name: "Plus"
}, TB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, OB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), IB = [
  OB
];
function PB(a, r, o, d, l, s) {
  return u(), m("svg", TB, IB);
}
var EB = /* @__PURE__ */ p(BB, [["render", PB], ["__file", "plus.vue"]]), kB = {
  name: "Pointer"
}, FB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, DB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
  },
  null,
  -1
  /* HOISTED */
), RB = [
  DB
];
function qB(a, r, o, d, l, s) {
  return u(), m("svg", FB, RB);
}
var NB = /* @__PURE__ */ p(kB, [["render", qB], ["__file", "pointer.vue"]]), UB = {
  name: "Position"
}, jB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, WB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
  },
  null,
  -1
  /* HOISTED */
), GB = [
  WB
];
function KB(a, r, o, d, l, s) {
  return u(), m("svg", jB, GB);
}
var ZB = /* @__PURE__ */ p(UB, [["render", KB], ["__file", "position.vue"]]), YB = {
  name: "Postcard"
}, JB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, XB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
  },
  null,
  -1
  /* HOISTED */
), QB = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), eT = [
  XB,
  QB
];
function nT(a, r, o, d, l, s) {
  return u(), m("svg", JB, eT);
}
var aT = /* @__PURE__ */ p(YB, [["render", nT], ["__file", "postcard.vue"]]), tT = {
  name: "Pouring"
}, oT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), cT = [
  rT
];
function dT(a, r, o, d, l, s) {
  return u(), m("svg", oT, cT);
}
var lT = /* @__PURE__ */ p(tT, [["render", dT], ["__file", "pouring.vue"]]), iT = {
  name: "Present"
}, sT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _T = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
  },
  null,
  -1
  /* HOISTED */
), uT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), mT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), hT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), vT = [
  _T,
  uT,
  mT,
  hT
];
function pT(a, r, o, d, l, s) {
  return u(), m("svg", sT, vT);
}
var fT = /* @__PURE__ */ p(iT, [["render", pT], ["__file", "present.vue"]]), gT = {
  name: "PriceTag"
}, wT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $T = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
  },
  null,
  -1
  /* HOISTED */
), xT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), yT = [
  $T,
  xT
];
function zT(a, r, o, d, l, s) {
  return u(), m("svg", wT, yT);
}
var CT = /* @__PURE__ */ p(gT, [["render", zT], ["__file", "price-tag.vue"]]), bT = {
  name: "Printer"
}, MT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, HT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
  },
  null,
  -1
  /* HOISTED */
), AT = [
  HT
];
function VT(a, r, o, d, l, s) {
  return u(), m("svg", MT, AT);
}
var LT = /* @__PURE__ */ p(bT, [["render", VT], ["__file", "printer.vue"]]), ST = {
  name: "Promotion"
}, BT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, TT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
  },
  null,
  -1
  /* HOISTED */
), OT = [
  TT
];
function IT(a, r, o, d, l, s) {
  return u(), m("svg", BT, OT);
}
var PT = /* @__PURE__ */ p(ST, [["render", IT], ["__file", "promotion.vue"]]), ET = {
  name: "QuartzWatch"
}, kT = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, FT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M422.02 602.01v-.03c-6.68-5.99-14.35-8.83-23.01-8.51-8.67.32-16.17 3.66-22.5 10.02-6.33 6.36-9.5 13.7-9.5 22.02s3 15.82 8.99 22.5c8.68 8.68 19.02 11.35 31.01 8s19.49-10.85 22.5-22.5c3.01-11.65.51-22.15-7.49-31.49v-.01zM384 512c0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.67 8.99-23.01zm6.53-82.49c11.65 3.01 22.15.51 31.49-7.49h.04c5.99-6.68 8.83-14.34 8.51-23.01-.32-8.67-3.66-16.16-10.02-22.5-6.36-6.33-13.7-9.5-22.02-9.5s-15.82 3-22.5 8.99c-8.68 8.69-11.35 19.02-8 31.01 3.35 11.99 10.85 19.49 22.5 22.5zm242.94 0c11.67-3.03 19.01-10.37 22.02-22.02 3.01-11.65.51-22.15-7.49-31.49h.01c-6.68-5.99-14.18-8.99-22.5-8.99s-15.66 3.16-22.02 9.5c-6.36 6.34-9.7 13.84-10.02 22.5-.32 8.66 2.52 16.33 8.51 23.01 9.32 8.02 19.82 10.52 31.49 7.49zM512 640c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01s-3-17.02-8.99-23.01c-6-5.99-13.66-8.99-23.01-8.99zm183.01-151.01c-6-5.99-13.66-8.99-23.01-8.99s-17.02 3-23.01 8.99c-5.99 6-8.99 13.66-8.99 23.01s3 17.02 8.99 23.01c6 5.99 13.66 8.99 23.01 8.99s17.02-3 23.01-8.99c5.99-6 8.99-13.67 8.99-23.01 0-9.35-3-17.02-8.99-23.01z"
  },
  null,
  -1
  /* HOISTED */
), DT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M832 512c-2-90.67-33.17-166.17-93.5-226.5-20.43-20.42-42.6-37.49-66.5-51.23V64H352v170.26c-23.9 13.74-46.07 30.81-66.5 51.24-60.33 60.33-91.49 135.83-93.5 226.5 2 90.67 33.17 166.17 93.5 226.5 20.43 20.43 42.6 37.5 66.5 51.24V960h320V789.74c23.9-13.74 46.07-30.81 66.5-51.24 60.33-60.34 91.49-135.83 93.5-226.5zM416 128h192v78.69c-29.85-9.03-61.85-13.93-96-14.69-34.15.75-66.15 5.65-96 14.68V128zm192 768H416v-78.68c29.85 9.03 61.85 13.93 96 14.68 34.15-.75 66.15-5.65 96-14.68V896zm-96-128c-72.66-2.01-132.99-27.01-180.99-75.01S258.01 584.66 256 512c2.01-72.66 27.01-132.99 75.01-180.99S439.34 258.01 512 256c72.66 2.01 132.99 27.01 180.99 75.01S765.99 439.34 768 512c-2.01 72.66-27.01 132.99-75.01 180.99S584.66 765.99 512 768z"
  },
  null,
  -1
  /* HOISTED */
), RT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 320c-9.35 0-17.02 3-23.01 8.99-5.99 6-8.99 13.66-8.99 23.01 0 9.35 3 17.02 8.99 23.01 6 5.99 13.67 8.99 23.01 8.99 9.35 0 17.02-3 23.01-8.99 5.99-6 8.99-13.66 8.99-23.01 0-9.35-3-17.02-8.99-23.01-6-5.99-13.66-8.99-23.01-8.99zm112.99 273.5c-8.66-.32-16.33 2.52-23.01 8.51-7.98 9.32-10.48 19.82-7.49 31.49s10.49 19.17 22.5 22.5 22.35.66 31.01-8v.04c5.99-6.68 8.99-14.18 8.99-22.5s-3.16-15.66-9.5-22.02-13.84-9.7-22.5-10.02z"
  },
  null,
  -1
  /* HOISTED */
), qT = [
  FT,
  DT,
  RT
];
function NT(a, r, o, d, l, s) {
  return u(), m("svg", kT, qT);
}
var UT = /* @__PURE__ */ p(ET, [["render", NT], ["__file", "quartz-watch.vue"]]), jT = {
  name: "QuestionFilled"
}, WT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, GT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
  },
  null,
  -1
  /* HOISTED */
), KT = [
  GT
];
function ZT(a, r, o, d, l, s) {
  return u(), m("svg", WT, KT);
}
var YT = /* @__PURE__ */ p(jT, [["render", ZT], ["__file", "question-filled.vue"]]), JT = {
  name: "Rank"
}, XT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, QT = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
  },
  null,
  -1
  /* HOISTED */
), eO = [
  QT
];
function nO(a, r, o, d, l, s) {
  return u(), m("svg", XT, eO);
}
var aO = /* @__PURE__ */ p(JT, [["render", nO], ["__file", "rank.vue"]]), tO = {
  name: "ReadingLamp"
}, oO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
  },
  null,
  -1
  /* HOISTED */
), cO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
  },
  null,
  -1
  /* HOISTED */
), dO = [
  rO,
  cO
];
function lO(a, r, o, d, l, s) {
  return u(), m("svg", oO, dO);
}
var iO = /* @__PURE__ */ p(tO, [["render", lO], ["__file", "reading-lamp.vue"]]), sO = {
  name: "Reading"
}, _O = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, uO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
  },
  null,
  -1
  /* HOISTED */
), mO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 192h64v704h-64z"
  },
  null,
  -1
  /* HOISTED */
), hO = [
  uO,
  mO
];
function vO(a, r, o, d, l, s) {
  return u(), m("svg", _O, hO);
}
var pO = /* @__PURE__ */ p(sO, [["render", vO], ["__file", "reading.vue"]]), fO = {
  name: "RefreshLeft"
}, gO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
  },
  null,
  -1
  /* HOISTED */
), $O = [
  wO
];
function xO(a, r, o, d, l, s) {
  return u(), m("svg", gO, $O);
}
var yO = /* @__PURE__ */ p(fO, [["render", xO], ["__file", "refresh-left.vue"]]), zO = {
  name: "RefreshRight"
}, CO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
  },
  null,
  -1
  /* HOISTED */
), MO = [
  bO
];
function HO(a, r, o, d, l, s) {
  return u(), m("svg", CO, MO);
}
var AO = /* @__PURE__ */ p(zO, [["render", HO], ["__file", "refresh-right.vue"]]), VO = {
  name: "Refresh"
}, LO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, SO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
  },
  null,
  -1
  /* HOISTED */
), BO = [
  SO
];
function TO(a, r, o, d, l, s) {
  return u(), m("svg", LO, BO);
}
var OO = /* @__PURE__ */ p(VO, [["render", TO], ["__file", "refresh.vue"]]), IO = {
  name: "Refrigerator"
}, PO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, EO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
  },
  null,
  -1
  /* HOISTED */
), kO = [
  EO
];
function FO(a, r, o, d, l, s) {
  return u(), m("svg", PO, kO);
}
var DO = /* @__PURE__ */ p(IO, [["render", FO], ["__file", "refrigerator.vue"]]), RO = {
  name: "RemoveFilled"
}, qO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, NO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
  },
  null,
  -1
  /* HOISTED */
), UO = [
  NO
];
function jO(a, r, o, d, l, s) {
  return u(), m("svg", qO, UO);
}
var WO = /* @__PURE__ */ p(RO, [["render", jO], ["__file", "remove-filled.vue"]]), GO = {
  name: "Remove"
}, KO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ZO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), YO = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), JO = [
  ZO,
  YO
];
function XO(a, r, o, d, l, s) {
  return u(), m("svg", KO, JO);
}
var QO = /* @__PURE__ */ p(GO, [["render", XO], ["__file", "remove.vue"]]), eI = {
  name: "Right"
}, nI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, aI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
  },
  null,
  -1
  /* HOISTED */
), tI = [
  aI
];
function oI(a, r, o, d, l, s) {
  return u(), m("svg", nI, tI);
}
var rI = /* @__PURE__ */ p(eI, [["render", oI], ["__file", "right.vue"]]), cI = {
  name: "ScaleToOriginal"
}, dI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
  },
  null,
  -1
  /* HOISTED */
), iI = [
  lI
];
function sI(a, r, o, d, l, s) {
  return u(), m("svg", dI, iI);
}
var _I = /* @__PURE__ */ p(cI, [["render", sI], ["__file", "scale-to-original.vue"]]), uI = {
  name: "School"
}, mI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), vI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M64 832h896v64H64zm256-640h128v96H320z"
  },
  null,
  -1
  /* HOISTED */
), pI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
  },
  null,
  -1
  /* HOISTED */
), fI = [
  hI,
  vI,
  pI
];
function gI(a, r, o, d, l, s) {
  return u(), m("svg", mI, fI);
}
var wI = /* @__PURE__ */ p(uI, [["render", gI], ["__file", "school.vue"]]), $I = {
  name: "Scissor"
}, xI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
  },
  null,
  -1
  /* HOISTED */
), zI = [
  yI
];
function CI(a, r, o, d, l, s) {
  return u(), m("svg", xI, zI);
}
var bI = /* @__PURE__ */ p($I, [["render", CI], ["__file", "scissor.vue"]]), MI = {
  name: "Search"
}, HI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, AI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), VI = [
  AI
];
function LI(a, r, o, d, l, s) {
  return u(), m("svg", HI, VI);
}
var SI = /* @__PURE__ */ p(MI, [["render", LI], ["__file", "search.vue"]]), BI = {
  name: "Select"
}, TI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, OI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
  },
  null,
  -1
  /* HOISTED */
), II = [
  OI
];
function PI(a, r, o, d, l, s) {
  return u(), m("svg", TI, II);
}
var EI = /* @__PURE__ */ p(BI, [["render", PI], ["__file", "select.vue"]]), kI = {
  name: "Sell"
}, FI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, DI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
  },
  null,
  -1
  /* HOISTED */
), RI = [
  DI
];
function qI(a, r, o, d, l, s) {
  return u(), m("svg", FI, RI);
}
var NI = /* @__PURE__ */ p(kI, [["render", qI], ["__file", "sell.vue"]]), UI = {
  name: "SemiSelect"
}, jI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, WI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
  },
  null,
  -1
  /* HOISTED */
), GI = [
  WI
];
function KI(a, r, o, d, l, s) {
  return u(), m("svg", jI, GI);
}
var ZI = /* @__PURE__ */ p(UI, [["render", KI], ["__file", "semi-select.vue"]]), YI = {
  name: "Service"
}, JI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, XI = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
  },
  null,
  -1
  /* HOISTED */
), QI = [
  XI
];
function eP(a, r, o, d, l, s) {
  return u(), m("svg", JI, QI);
}
var nP = /* @__PURE__ */ p(YI, [["render", eP], ["__file", "service.vue"]]), aP = {
  name: "SetUp"
}, tP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
  },
  null,
  -1
  /* HOISTED */
), rP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), cP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
  },
  null,
  -1
  /* HOISTED */
), dP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), lP = [
  oP,
  rP,
  cP,
  dP
];
function iP(a, r, o, d, l, s) {
  return u(), m("svg", tP, lP);
}
var sP = /* @__PURE__ */ p(aP, [["render", iP], ["__file", "set-up.vue"]]), _P = {
  name: "Setting"
}, uP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, mP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
  },
  null,
  -1
  /* HOISTED */
), hP = [
  mP
];
function vP(a, r, o, d, l, s) {
  return u(), m("svg", uP, hP);
}
var pP = /* @__PURE__ */ p(_P, [["render", vP], ["__file", "setting.vue"]]), fP = {
  name: "Share"
}, gP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
  },
  null,
  -1
  /* HOISTED */
), $P = [
  wP
];
function xP(a, r, o, d, l, s) {
  return u(), m("svg", gP, $P);
}
var yP = /* @__PURE__ */ p(fP, [["render", xP], ["__file", "share.vue"]]), zP = {
  name: "Ship"
}, CP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
  },
  null,
  -1
  /* HOISTED */
), MP = [
  bP
];
function HP(a, r, o, d, l, s) {
  return u(), m("svg", CP, MP);
}
var AP = /* @__PURE__ */ p(zP, [["render", HP], ["__file", "ship.vue"]]), VP = {
  name: "Shop"
}, LP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, SP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
  },
  null,
  -1
  /* HOISTED */
), BP = [
  SP
];
function TP(a, r, o, d, l, s) {
  return u(), m("svg", LP, BP);
}
var OP = /* @__PURE__ */ p(VP, [["render", TP], ["__file", "shop.vue"]]), IP = {
  name: "ShoppingBag"
}, PP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, EP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
  },
  null,
  -1
  /* HOISTED */
), kP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 704h640v64H192z"
  },
  null,
  -1
  /* HOISTED */
), FP = [
  EP,
  kP
];
function DP(a, r, o, d, l, s) {
  return u(), m("svg", PP, FP);
}
var RP = /* @__PURE__ */ p(IP, [["render", DP], ["__file", "shopping-bag.vue"]]), qP = {
  name: "ShoppingCartFull"
}, NP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, UP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
  },
  null,
  -1
  /* HOISTED */
), jP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
  },
  null,
  -1
  /* HOISTED */
), WP = [
  UP,
  jP
];
function GP(a, r, o, d, l, s) {
  return u(), m("svg", NP, WP);
}
var KP = /* @__PURE__ */ p(qP, [["render", GP], ["__file", "shopping-cart-full.vue"]]), ZP = {
  name: "ShoppingCart"
}, YP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, JP = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
  },
  null,
  -1
  /* HOISTED */
), XP = [
  JP
];
function QP(a, r, o, d, l, s) {
  return u(), m("svg", YP, XP);
}
var eE = /* @__PURE__ */ p(ZP, [["render", QP], ["__file", "shopping-cart.vue"]]), nE = {
  name: "ShoppingTrolley"
}, aE = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, tE = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M368 833c-13.3 0-24.5 4.5-33.5 13.5S321 866.7 321 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S415 893.3 415 880s-4.5-24.5-13.5-33.5S381.3 833 368 833zm439-193c7.4 0 13.8-2.2 19.5-6.5S836 623.3 838 616l112-448c2-10-.2-19.2-6.5-27.5S929 128 919 128H96c-9.3 0-17 3-23 9s-9 13.7-9 23 3 17 9 23 13.7 9 23 9h96v576h672c9.3 0 17-3 23-9s9-13.7 9-23-3-17-9-23-13.7-9-23-9H256v-64h551zM256 192h622l-96 384H256V192zm432 641c-13.3 0-24.5 4.5-33.5 13.5S641 866.7 641 880s4.5 24.5 13.5 33.5 20.2 13.8 33.5 14.5c13.3-.7 24.5-5.5 33.5-14.5S735 893.3 735 880s-4.5-24.5-13.5-33.5S701.3 833 688 833z"
  },
  null,
  -1
  /* HOISTED */
), oE = [
  tE
];
function rE(a, r, o, d, l, s) {
  return u(), m("svg", aE, oE);
}
var cE = /* @__PURE__ */ p(nE, [["render", rE], ["__file", "shopping-trolley.vue"]]), dE = {
  name: "Smoking"
}, lE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, iE = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), sE = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
  },
  null,
  -1
  /* HOISTED */
), _E = [
  iE,
  sE
];
function uE(a, r, o, d, l, s) {
  return u(), m("svg", lE, _E);
}
var mE = /* @__PURE__ */ p(dE, [["render", uE], ["__file", "smoking.vue"]]), hE = {
  name: "Soccer"
}, vE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, pE = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
  },
  null,
  -1
  /* HOISTED */
), fE = [
  pE
];
function gE(a, r, o, d, l, s) {
  return u(), m("svg", vE, fE);
}
var wE = /* @__PURE__ */ p(hE, [["render", gE], ["__file", "soccer.vue"]]), $E = {
  name: "SoldOut"
}, xE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yE = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
  },
  null,
  -1
  /* HOISTED */
), zE = [
  yE
];
function CE(a, r, o, d, l, s) {
  return u(), m("svg", xE, zE);
}
var bE = /* @__PURE__ */ p($E, [["render", CE], ["__file", "sold-out.vue"]]), ME = {
  name: "SortDown"
}, HE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, AE = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
  },
  null,
  -1
  /* HOISTED */
), VE = [
  AE
];
function LE(a, r, o, d, l, s) {
  return u(), m("svg", HE, VE);
}
var SE = /* @__PURE__ */ p(ME, [["render", LE], ["__file", "sort-down.vue"]]), BE = {
  name: "SortUp"
}, TE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, OE = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
  },
  null,
  -1
  /* HOISTED */
), IE = [
  OE
];
function PE(a, r, o, d, l, s) {
  return u(), m("svg", TE, IE);
}
var EE = /* @__PURE__ */ p(BE, [["render", PE], ["__file", "sort-up.vue"]]), kE = {
  name: "Sort"
}, FE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, DE = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
  },
  null,
  -1
  /* HOISTED */
), RE = [
  DE
];
function qE(a, r, o, d, l, s) {
  return u(), m("svg", FE, RE);
}
var NE = /* @__PURE__ */ p(kE, [["render", qE], ["__file", "sort.vue"]]), UE = {
  name: "Stamp"
}, jE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, WE = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
  },
  null,
  -1
  /* HOISTED */
), GE = [
  WE
];
function KE(a, r, o, d, l, s) {
  return u(), m("svg", jE, GE);
}
var ZE = /* @__PURE__ */ p(UE, [["render", KE], ["__file", "stamp.vue"]]), YE = {
  name: "StarFilled"
}, JE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, XE = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
  },
  null,
  -1
  /* HOISTED */
), QE = [
  XE
];
function ek(a, r, o, d, l, s) {
  return u(), m("svg", JE, QE);
}
var nk = /* @__PURE__ */ p(YE, [["render", ek], ["__file", "star-filled.vue"]]), ak = {
  name: "Star"
}, tk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ok = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
  },
  null,
  -1
  /* HOISTED */
), rk = [
  ok
];
function ck(a, r, o, d, l, s) {
  return u(), m("svg", tk, rk);
}
var dk = /* @__PURE__ */ p(ak, [["render", ck], ["__file", "star.vue"]]), lk = {
  name: "Stopwatch"
}, ik = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sk = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), _k = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
  },
  null,
  -1
  /* HOISTED */
), uk = [
  sk,
  _k
];
function mk(a, r, o, d, l, s) {
  return u(), m("svg", ik, uk);
}
var hk = /* @__PURE__ */ p(lk, [["render", mk], ["__file", "stopwatch.vue"]]), vk = {
  name: "SuccessFilled"
}, pk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fk = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  },
  null,
  -1
  /* HOISTED */
), gk = [
  fk
];
function wk(a, r, o, d, l, s) {
  return u(), m("svg", pk, gk);
}
var ut = /* @__PURE__ */ p(vk, [["render", wk], ["__file", "success-filled.vue"]]), $k = {
  name: "Sugar"
}, xk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, yk = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
  },
  null,
  -1
  /* HOISTED */
), zk = [
  yk
];
function Ck(a, r, o, d, l, s) {
  return u(), m("svg", xk, zk);
}
var bk = /* @__PURE__ */ p($k, [["render", Ck], ["__file", "sugar.vue"]]), Mk = {
  name: "SuitcaseLine"
}, Hk = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, Ak = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M922.5 229.5c-24.32-24.34-54.49-36.84-90.5-37.5H704v-64c-.68-17.98-7.02-32.98-19.01-44.99S658.01 64.66 640 64H384c-17.98.68-32.98 7.02-44.99 19.01S320.66 110 320 128v64H192c-35.99.68-66.16 13.18-90.5 37.5C77.16 253.82 64.66 283.99 64 320v448c.68 35.99 13.18 66.16 37.5 90.5s54.49 36.84 90.5 37.5h640c35.99-.68 66.16-13.18 90.5-37.5s36.84-54.49 37.5-90.5V320c-.68-35.99-13.18-66.16-37.5-90.5zM384 128h256v64H384v-64zM256 832h-64c-17.98-.68-32.98-7.02-44.99-19.01S128.66 786.01 128 768V448h128v384zm448 0H320V448h384v384zm192-64c-.68 17.98-7.02 32.98-19.01 44.99S850.01 831.34 832 832h-64V448h128v320zm0-384H128v-64c.69-17.98 7.02-32.98 19.01-44.99S173.99 256.66 192 256h640c17.98.69 32.98 7.02 44.99 19.01S895.34 301.99 896 320v64z"
  },
  null,
  -1
  /* HOISTED */
), Vk = [
  Ak
];
function Lk(a, r, o, d, l, s) {
  return u(), m("svg", Hk, Vk);
}
var Sk = /* @__PURE__ */ p(Mk, [["render", Lk], ["__file", "suitcase-line.vue"]]), Bk = {
  name: "Suitcase"
}, Tk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ok = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
  },
  null,
  -1
  /* HOISTED */
), Ik = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
  },
  null,
  -1
  /* HOISTED */
), Pk = [
  Ok,
  Ik
];
function Ek(a, r, o, d, l, s) {
  return u(), m("svg", Tk, Pk);
}
var kk = /* @__PURE__ */ p(Bk, [["render", Ek], ["__file", "suitcase.vue"]]), Fk = {
  name: "Sunny"
}, Dk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Rk = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), qk = [
  Rk
];
function Nk(a, r, o, d, l, s) {
  return u(), m("svg", Dk, qk);
}
var Uk = /* @__PURE__ */ p(Fk, [["render", Nk], ["__file", "sunny.vue"]]), jk = {
  name: "Sunrise"
}, Wk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Gk = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
  },
  null,
  -1
  /* HOISTED */
), Kk = [
  Gk
];
function Zk(a, r, o, d, l, s) {
  return u(), m("svg", Wk, Kk);
}
var Yk = /* @__PURE__ */ p(jk, [["render", Zk], ["__file", "sunrise.vue"]]), Jk = {
  name: "Sunset"
}, Xk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Qk = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), eF = [
  Qk
];
function nF(a, r, o, d, l, s) {
  return u(), m("svg", Xk, eF);
}
var aF = /* @__PURE__ */ p(Jk, [["render", nF], ["__file", "sunset.vue"]]), tF = {
  name: "SwitchButton"
}, oF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
  },
  null,
  -1
  /* HOISTED */
), cF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
  },
  null,
  -1
  /* HOISTED */
), dF = [
  rF,
  cF
];
function lF(a, r, o, d, l, s) {
  return u(), m("svg", oF, dF);
}
var iF = /* @__PURE__ */ p(tF, [["render", lF], ["__file", "switch-button.vue"]]), sF = {
  name: "SwitchFilled"
}, _F = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, uF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M247.47 358.4v.04c.07 19.17 7.72 37.53 21.27 51.09s31.92 21.2 51.09 21.27c39.86 0 72.41-32.6 72.41-72.4s-32.6-72.36-72.41-72.36-72.36 32.55-72.36 72.36z"
  },
  null,
  -1
  /* HOISTED */
), mF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M492.38 128H324.7c-52.16 0-102.19 20.73-139.08 57.61a196.655 196.655 0 0 0-57.61 139.08V698.7c-.01 25.84 5.08 51.42 14.96 75.29s24.36 45.56 42.63 63.83 39.95 32.76 63.82 42.65a196.67 196.67 0 0 0 75.28 14.98h167.68c3.03 0 5.46-2.43 5.46-5.42V133.42c.6-2.99-1.83-5.42-5.46-5.42zm-56.11 705.88H324.7c-17.76.13-35.36-3.33-51.75-10.18s-31.22-16.94-43.61-29.67c-25.3-25.35-39.81-59.1-39.81-95.32V324.69c-.13-17.75 3.33-35.35 10.17-51.74a131.695 131.695 0 0 1 29.64-43.62c25.39-25.3 59.14-39.81 95.36-39.81h111.57v644.36zm402.12-647.67a196.655 196.655 0 0 0-139.08-57.61H580.48c-3.03 0-4.82 2.43-4.82 4.82v757.16c-.6 2.99 1.79 5.42 5.42 5.42h118.23a196.69 196.69 0 0 0 139.08-57.61A196.655 196.655 0 0 0 896 699.31V325.29a196.69 196.69 0 0 0-57.61-139.08zm-111.3 441.92c-42.83 0-77.82-34.99-77.82-77.82s34.98-77.82 77.82-77.82c42.83 0 77.82 34.99 77.82 77.82s-34.99 77.82-77.82 77.82z"
  },
  null,
  -1
  /* HOISTED */
), hF = [
  uF,
  mF
];
function vF(a, r, o, d, l, s) {
  return u(), m("svg", _F, hF);
}
var pF = /* @__PURE__ */ p(sF, [["render", vF], ["__file", "switch-filled.vue"]]), fF = {
  name: "Switch"
}, gF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
  },
  null,
  -1
  /* HOISTED */
), $F = [
  wF
];
function xF(a, r, o, d, l, s) {
  return u(), m("svg", gF, $F);
}
var yF = /* @__PURE__ */ p(fF, [["render", xF], ["__file", "switch.vue"]]), zF = {
  name: "TakeawayBox"
}, CF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, bF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), MF = [
  bF
];
function HF(a, r, o, d, l, s) {
  return u(), m("svg", CF, MF);
}
var AF = /* @__PURE__ */ p(zF, [["render", HF], ["__file", "takeaway-box.vue"]]), VF = {
  name: "Ticket"
}, LF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, SF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
  },
  null,
  -1
  /* HOISTED */
), BF = [
  SF
];
function TF(a, r, o, d, l, s) {
  return u(), m("svg", LF, BF);
}
var OF = /* @__PURE__ */ p(VF, [["render", TF], ["__file", "ticket.vue"]]), IF = {
  name: "Tickets"
}, PF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, EF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
  },
  null,
  -1
  /* HOISTED */
), kF = [
  EF
];
function FF(a, r, o, d, l, s) {
  return u(), m("svg", PF, kF);
}
var DF = /* @__PURE__ */ p(IF, [["render", FF], ["__file", "tickets.vue"]]), RF = {
  name: "Timer"
}, qF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, NF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
  },
  null,
  -1
  /* HOISTED */
), UF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), jF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
  },
  null,
  -1
  /* HOISTED */
), WF = [
  NF,
  UF,
  jF
];
function GF(a, r, o, d, l, s) {
  return u(), m("svg", qF, WF);
}
var KF = /* @__PURE__ */ p(RF, [["render", GF], ["__file", "timer.vue"]]), ZF = {
  name: "ToiletPaper"
}, YF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, JF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
  },
  null,
  -1
  /* HOISTED */
), XF = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
  },
  null,
  -1
  /* HOISTED */
), QF = [
  JF,
  XF
];
function eD(a, r, o, d, l, s) {
  return u(), m("svg", YF, QF);
}
var nD = /* @__PURE__ */ p(ZF, [["render", eD], ["__file", "toilet-paper.vue"]]), aD = {
  name: "Tools"
}, tD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oD = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
  },
  null,
  -1
  /* HOISTED */
), rD = [
  oD
];
function cD(a, r, o, d, l, s) {
  return u(), m("svg", tD, rD);
}
var dD = /* @__PURE__ */ p(aD, [["render", cD], ["__file", "tools.vue"]]), lD = {
  name: "TopLeft"
}, iD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, sD = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
  },
  null,
  -1
  /* HOISTED */
), _D = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
  },
  null,
  -1
  /* HOISTED */
), uD = [
  sD,
  _D
];
function mD(a, r, o, d, l, s) {
  return u(), m("svg", iD, uD);
}
var hD = /* @__PURE__ */ p(lD, [["render", mD], ["__file", "top-left.vue"]]), vD = {
  name: "TopRight"
}, pD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fD = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
  },
  null,
  -1
  /* HOISTED */
), gD = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
  },
  null,
  -1
  /* HOISTED */
), wD = [
  fD,
  gD
];
function $D(a, r, o, d, l, s) {
  return u(), m("svg", pD, wD);
}
var xD = /* @__PURE__ */ p(vD, [["render", $D], ["__file", "top-right.vue"]]), yD = {
  name: "Top"
}, zD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, CD = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
  },
  null,
  -1
  /* HOISTED */
), bD = [
  CD
];
function MD(a, r, o, d, l, s) {
  return u(), m("svg", zD, bD);
}
var HD = /* @__PURE__ */ p(yD, [["render", MD], ["__file", "top.vue"]]), AD = {
  name: "TrendCharts"
}, VD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, LD = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
  },
  null,
  -1
  /* HOISTED */
), SD = [
  LD
];
function BD(a, r, o, d, l, s) {
  return u(), m("svg", VD, SD);
}
var TD = /* @__PURE__ */ p(AD, [["render", BD], ["__file", "trend-charts.vue"]]), OD = {
  name: "TrophyBase"
}, ID = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, PD = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4C752 67.2 745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6C259.2 80 256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 16-9.6 22.4 3.2 108.8 25.6 185.6 64 224 34.4 34.4 77.56 55.65 127.65 61.99 10.91 20.44 24.78 39.25 41.95 56.41 40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86 17.2-17.2 31.51-36.06 42.81-56.55 48.93-6.51 90.02-27.7 126.79-61.85 38.4-38.4 60.8-112 64-224 0-6.4-3.2-16-9.6-22.4zM256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2-22.4-22.4-35.2-70.4-41.6-147.2H256v182.4zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6C342.4 480 320 438.4 320 384V128h384v256c0 54.4-19.2 99.2-57.6 134.4zm172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2zM768 896H256c-9.6 0-16 3.2-22.4 9.6-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4c6.4 6.4 12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6 6.4-6.4 9.6-12.8 9.6-22.4s-3.2-16-9.6-22.4c-6.4-6.4-12.8-9.6-22.4-9.6z"
  },
  null,
  -1
  /* HOISTED */
), ED = [
  PD
];
function kD(a, r, o, d, l, s) {
  return u(), m("svg", ID, ED);
}
var FD = /* @__PURE__ */ p(OD, [["render", kD], ["__file", "trophy-base.vue"]]), DD = {
  name: "Trophy"
}, RD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, qD = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
  },
  null,
  -1
  /* HOISTED */
), ND = [
  qD
];
function UD(a, r, o, d, l, s) {
  return u(), m("svg", RD, ND);
}
var jD = /* @__PURE__ */ p(DD, [["render", UD], ["__file", "trophy.vue"]]), WD = {
  name: "TurnOff"
}, GD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, KD = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
  },
  null,
  -1
  /* HOISTED */
), ZD = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
  },
  null,
  -1
  /* HOISTED */
), YD = [
  KD,
  ZD
];
function JD(a, r, o, d, l, s) {
  return u(), m("svg", GD, YD);
}
var XD = /* @__PURE__ */ p(WD, [["render", JD], ["__file", "turn-off.vue"]]), QD = {
  name: "Umbrella"
}, eR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, nR = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
  },
  null,
  -1
  /* HOISTED */
), aR = [
  nR
];
function tR(a, r, o, d, l, s) {
  return u(), m("svg", eR, aR);
}
var oR = /* @__PURE__ */ p(QD, [["render", tR], ["__file", "umbrella.vue"]]), rR = {
  name: "Unlock"
}, cR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, dR = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
  },
  null,
  -1
  /* HOISTED */
), lR = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
  },
  null,
  -1
  /* HOISTED */
), iR = [
  dR,
  lR
];
function sR(a, r, o, d, l, s) {
  return u(), m("svg", cR, iR);
}
var _R = /* @__PURE__ */ p(rR, [["render", sR], ["__file", "unlock.vue"]]), uR = {
  name: "UploadFilled"
}, mR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hR = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
  },
  null,
  -1
  /* HOISTED */
), vR = [
  hR
];
function pR(a, r, o, d, l, s) {
  return u(), m("svg", mR, vR);
}
var fR = /* @__PURE__ */ p(uR, [["render", pR], ["__file", "upload-filled.vue"]]), gR = {
  name: "Upload"
}, wR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $R = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
  },
  null,
  -1
  /* HOISTED */
), xR = [
  $R
];
function yR(a, r, o, d, l, s) {
  return u(), m("svg", wR, xR);
}
var zR = /* @__PURE__ */ p(gR, [["render", yR], ["__file", "upload.vue"]]), CR = {
  name: "UserFilled"
}, bR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, MR = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), HR = [
  MR
];
function AR(a, r, o, d, l, s) {
  return u(), m("svg", bR, HR);
}
var VR = /* @__PURE__ */ p(CR, [["render", AR], ["__file", "user-filled.vue"]]), LR = {
  name: "User"
}, SR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, BR = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
  },
  null,
  -1
  /* HOISTED */
), TR = [
  BR
];
function OR(a, r, o, d, l, s) {
  return u(), m("svg", SR, TR);
}
var IR = /* @__PURE__ */ p(LR, [["render", OR], ["__file", "user.vue"]]), PR = {
  name: "Van"
}, ER = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, kR = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
  },
  null,
  -1
  /* HOISTED */
), FR = [
  kR
];
function DR(a, r, o, d, l, s) {
  return u(), m("svg", ER, FR);
}
var RR = /* @__PURE__ */ p(PR, [["render", DR], ["__file", "van.vue"]]), qR = {
  name: "VideoCameraFilled"
}, NR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, UR = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
  },
  null,
  -1
  /* HOISTED */
), jR = [
  UR
];
function WR(a, r, o, d, l, s) {
  return u(), m("svg", NR, jR);
}
var GR = /* @__PURE__ */ p(qR, [["render", WR], ["__file", "video-camera-filled.vue"]]), KR = {
  name: "VideoCamera"
}, ZR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, YR = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
  },
  null,
  -1
  /* HOISTED */
), JR = [
  YR
];
function XR(a, r, o, d, l, s) {
  return u(), m("svg", ZR, JR);
}
var QR = /* @__PURE__ */ p(KR, [["render", XR], ["__file", "video-camera.vue"]]), eq = {
  name: "VideoPause"
}, nq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, aq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
  },
  null,
  -1
  /* HOISTED */
), tq = [
  aq
];
function oq(a, r, o, d, l, s) {
  return u(), m("svg", nq, tq);
}
var rq = /* @__PURE__ */ p(eq, [["render", oq], ["__file", "video-pause.vue"]]), cq = {
  name: "VideoPlay"
}, dq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, lq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
  },
  null,
  -1
  /* HOISTED */
), iq = [
  lq
];
function sq(a, r, o, d, l, s) {
  return u(), m("svg", dq, iq);
}
var _q = /* @__PURE__ */ p(cq, [["render", sq], ["__file", "video-play.vue"]]), uq = {
  name: "View"
}, mq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), vq = [
  hq
];
function pq(a, r, o, d, l, s) {
  return u(), m("svg", mq, vq);
}
var fq = /* @__PURE__ */ p(uq, [["render", pq], ["__file", "view.vue"]]), gq = {
  name: "WalletFilled"
}, wq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, $q = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
  },
  null,
  -1
  /* HOISTED */
), xq = [
  $q
];
function yq(a, r, o, d, l, s) {
  return u(), m("svg", wq, xq);
}
var zq = /* @__PURE__ */ p(gq, [["render", yq], ["__file", "wallet-filled.vue"]]), Cq = {
  name: "Wallet"
}, bq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Mq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
  },
  null,
  -1
  /* HOISTED */
), Hq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Aq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
  },
  null,
  -1
  /* HOISTED */
), Vq = [
  Mq,
  Hq,
  Aq
];
function Lq(a, r, o, d, l, s) {
  return u(), m("svg", bq, Vq);
}
var Sq = /* @__PURE__ */ p(Cq, [["render", Lq], ["__file", "wallet.vue"]]), Bq = {
  name: "WarnTriangleFilled"
}, Tq = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1024 1024" },
  viewBox: "0 0 1024 1024"
}, Oq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z"
  },
  null,
  -1
  /* HOISTED */
), Iq = [
  Oq
];
function Pq(a, r, o, d, l, s) {
  return u(), m("svg", Tq, Iq);
}
var Eq = /* @__PURE__ */ p(Bq, [["render", Pq], ["__file", "warn-triangle-filled.vue"]]), kq = {
  name: "WarningFilled"
}, Fq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Dq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
  },
  null,
  -1
  /* HOISTED */
), Rq = [
  Dq
];
function qq(a, r, o, d, l, s) {
  return u(), m("svg", Fq, Rq);
}
var mt = /* @__PURE__ */ p(kq, [["render", qq], ["__file", "warning-filled.vue"]]), Nq = {
  name: "Warning"
}, Uq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, jq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Wq = [
  jq
];
function Gq(a, r, o, d, l, s) {
  return u(), m("svg", Uq, Wq);
}
var Kq = /* @__PURE__ */ p(Nq, [["render", Gq], ["__file", "warning.vue"]]), Zq = {
  name: "Watch"
}, Yq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Jq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
  },
  null,
  -1
  /* HOISTED */
), Xq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), Qq = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
  },
  null,
  -1
  /* HOISTED */
), eN = [
  Jq,
  Xq,
  Qq
];
function nN(a, r, o, d, l, s) {
  return u(), m("svg", Yq, eN);
}
var aN = /* @__PURE__ */ p(Zq, [["render", nN], ["__file", "watch.vue"]]), tN = {
  name: "Watermelon"
}, oN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, rN = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
  },
  null,
  -1
  /* HOISTED */
), cN = [
  rN
];
function dN(a, r, o, d, l, s) {
  return u(), m("svg", oN, cN);
}
var lN = /* @__PURE__ */ p(tN, [["render", dN], ["__file", "watermelon.vue"]]), iN = {
  name: "WindPower"
}, sN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _N = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
  },
  null,
  -1
  /* HOISTED */
), uN = [
  _N
];
function mN(a, r, o, d, l, s) {
  return u(), m("svg", sN, uN);
}
var hN = /* @__PURE__ */ p(iN, [["render", mN], ["__file", "wind-power.vue"]]), vN = {
  name: "ZoomIn"
}, pN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fN = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
  },
  null,
  -1
  /* HOISTED */
), gN = [
  fN
];
function wN(a, r, o, d, l, s) {
  return u(), m("svg", pN, gN);
}
var $N = /* @__PURE__ */ p(vN, [["render", wN], ["__file", "zoom-in.vue"]]), xN = {
  name: "ZoomOut"
}, yN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, zN = /* @__PURE__ */ i(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), CN = [
  zN
];
function bN(a, r, o, d, l, s) {
  return u(), m("svg", yN, CN);
}
var MN = /* @__PURE__ */ p(xN, [["render", bN], ["__file", "zoom-out.vue"]]);
const r3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AddLocation: ou,
  Aim: _u,
  AlarmClock: gu,
  Apple: Cu,
  ArrowDown: Pu,
  ArrowDownBold: Lu,
  ArrowLeft: Ku,
  ArrowLeftBold: qu,
  ArrowRight: c5,
  ArrowRightBold: e5,
  ArrowUp: g5,
  ArrowUpBold: u5,
  Avatar: C5,
  Back: S5,
  Baseball: k5,
  Basketball: U5,
  Bell: om,
  BellFilled: Y5,
  Bicycle: sm,
  Bottom: Lm,
  BottomLeft: fm,
  BottomRight: Cm,
  Bowl: Pm,
  Box: Um,
  Briefcase: Ym,
  Brush: lh,
  BrushFilled: ah,
  Burger: hh,
  Calendar: $h,
  Camera: Bh,
  CameraFilled: Mh,
  CaretBottom: kh,
  CaretLeft: Uh,
  CaretRight: Yh,
  CaretTop: a9,
  Cellphone: l9,
  ChatDotRound: v9,
  ChatDotSquare: y9,
  ChatLineRound: V9,
  ChatLineSquare: P9,
  ChatRound: q9,
  ChatSquare: K9,
  Check: ev,
  Checked: cv,
  Cherry: uv,
  Chicken: gv,
  ChromeFilled: Mv,
  CircleCheck: Fv,
  CircleCheckFilled: Bv,
  CircleClose: Jv,
  CircleCloseFilled: st,
  CirclePlus: _p,
  CirclePlusFilled: tp,
  Clock: wp,
  Close: o3,
  CloseBold: bp,
  Cloudy: Pp,
  Coffee: Kp,
  CoffeeCup: qp,
  Coin: af,
  ColdDrink: lf,
  Collection: yf,
  CollectionTag: vf,
  Comment: Af,
  Compass: If,
  Connection: qf,
  Coordinate: Zf,
  CopyDocument: a7,
  Cpu: i7,
  CreditCard: p7,
  Crop: z7,
  DArrowLeft: V7,
  DArrowRight: I7,
  DCaret: R7,
  DataAnalysis: G7,
  DataBoard: ng,
  DataLine: dg,
  Delete: Hg,
  DeleteFilled: mg,
  DeleteLocation: xg,
  Dessert: Tg,
  Discount: Dg,
  Dish: Xg,
  DishDot: Wg,
  Document: Ow,
  DocumentAdd: ow,
  DocumentChecked: sw,
  DocumentCopy: pw,
  DocumentDelete: yw,
  DocumentRemove: Aw,
  Download: Dw,
  Drizzling: Ww,
  Edit: r$,
  EditPen: Xw,
  Eleme: f$,
  ElemeFilled: _$,
  ElementPlus: z$,
  Expand: V$,
  Failed: I$,
  Female: N$,
  Files: Z$,
  Film: ax,
  Filter: lx,
  Finished: hx,
  FirstAidKit: xx,
  Flag: Hx,
  Fold: Tx,
  Folder: vy,
  FolderAdd: Fx,
  FolderChecked: jx,
  FolderDelete: Jx,
  FolderOpened: ty,
  FolderRemove: iy,
  Food: xy,
  Football: Ay,
  ForkSpoon: Oy,
  Fries: Dy,
  FullScreen: Wy,
  Goblet: pz,
  GobletFull: Xy,
  GobletSquare: sz,
  GobletSquareFull: oz,
  GoldMedal: zz,
  Goods: Iz,
  GoodsFilled: Vz,
  Grape: Rz,
  Grid: Gz,
  Guide: eC,
  Handbag: cC,
  Headset: uC,
  Help: CC,
  HelpFilled: gC,
  Hide: SC,
  Histogram: EC,
  HomeFilled: NC,
  HotWater: ZC,
  House: nb,
  IceCream: wb,
  IceCreamRound: db,
  IceCreamSquare: mb,
  IceDrink: bb,
  IceTea: Sb,
  InfoFilled: _t,
  Iphone: qb,
  Key: Kb,
  KnifeFork: eM,
  Lightning: dM,
  Link: mM,
  List: wM,
  Loading: bM,
  Location: WM,
  LocationFilled: SM,
  LocationInformation: FM,
  Lock: QM,
  Lollipop: rH,
  MagicStick: _H,
  Magnet: fH,
  Male: bH,
  Management: SH,
  MapLocation: kH,
  Medal: jH,
  Memo: QH,
  Menu: rA,
  Message: gA,
  MessageBox: _A,
  Mic: CA,
  Microphone: LA,
  MilkTea: PA,
  Minus: qA,
  Money: YA,
  Monitor: aV,
  Moon: vV,
  MoonNight: iV,
  More: HV,
  MoreFilled: xV,
  MostlyCloudy: TV,
  Mouse: DV,
  Mug: WV,
  Mute: cL,
  MuteNotification: QV,
  NoSmoking: uL,
  Notebook: wL,
  Notification: ML,
  Odometer: OL,
  OfficeBuilding: qL,
  Open: ZL,
  Operation: nS,
  Opportunity: dS,
  Orange: mS,
  Paperclip: wS,
  PartlyCloudy: MS,
  Pear: BS,
  Phone: US,
  PhoneFilled: kS,
  Picture: sB,
  PictureFilled: YS,
  PictureRounded: tB,
  PieChart: fB,
  Place: bB,
  Platform: SB,
  Plus: EB,
  Pointer: NB,
  Position: ZB,
  Postcard: aT,
  Pouring: lT,
  Present: fT,
  PriceTag: CT,
  Printer: LT,
  Promotion: PT,
  QuartzWatch: UT,
  QuestionFilled: YT,
  Rank: aO,
  Reading: pO,
  ReadingLamp: iO,
  Refresh: OO,
  RefreshLeft: yO,
  RefreshRight: AO,
  Refrigerator: DO,
  Remove: QO,
  RemoveFilled: WO,
  Right: rI,
  ScaleToOriginal: _I,
  School: wI,
  Scissor: bI,
  Search: SI,
  Select: EI,
  Sell: NI,
  SemiSelect: ZI,
  Service: nP,
  SetUp: sP,
  Setting: pP,
  Share: yP,
  Ship: AP,
  Shop: OP,
  ShoppingBag: RP,
  ShoppingCart: eE,
  ShoppingCartFull: KP,
  ShoppingTrolley: cE,
  Smoking: mE,
  Soccer: wE,
  SoldOut: bE,
  Sort: NE,
  SortDown: SE,
  SortUp: EE,
  Stamp: ZE,
  Star: dk,
  StarFilled: nk,
  Stopwatch: hk,
  SuccessFilled: ut,
  Sugar: bk,
  Suitcase: kk,
  SuitcaseLine: Sk,
  Sunny: Uk,
  Sunrise: Yk,
  Sunset: aF,
  Switch: yF,
  SwitchButton: iF,
  SwitchFilled: pF,
  TakeawayBox: AF,
  Ticket: OF,
  Tickets: DF,
  Timer: KF,
  ToiletPaper: nD,
  Tools: dD,
  Top: HD,
  TopLeft: hD,
  TopRight: xD,
  TrendCharts: TD,
  Trophy: jD,
  TrophyBase: FD,
  TurnOff: XD,
  Umbrella: oR,
  Unlock: _R,
  Upload: zR,
  UploadFilled: fR,
  User: IR,
  UserFilled: VR,
  Van: RR,
  VideoCamera: QR,
  VideoCameraFilled: GR,
  VideoPause: rq,
  VideoPlay: _q,
  View: fq,
  Wallet: Sq,
  WalletFilled: zq,
  WarnTriangleFilled: Eq,
  Warning: Kq,
  WarningFilled: mt,
  Watch: aN,
  Watermelon: lN,
  WindPower: hN,
  ZoomIn: $N,
  ZoomOut: MN
}, Symbol.toStringTag, { value: "Module" })), A2 = (a) => a.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
var hr;
const pn = typeof window < "u", HN = (a) => typeof a == "string", AN = () => {
};
pn && ((hr = window == null ? void 0 : window.navigator) != null && hr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ht(a) {
  return typeof a == "function" ? a() : F(a);
}
function VN(a) {
  return a;
}
function vt(a) {
  return k_() ? (F_(a), !0) : !1;
}
function LN(a, r = !0) {
  vn() ? B0(a) : r ? a() : R_(a);
}
function SN(a, r, o = {}) {
  const {
    immediate: d = !0
  } = o, l = Q(!1);
  let s = null;
  function x() {
    s && (clearTimeout(s), s = null);
  }
  function H() {
    l.value = !1, x();
  }
  function S(...A) {
    x(), l.value = !0, s = setTimeout(() => {
      l.value = !1, s = null, a(...A);
    }, ht(r));
  }
  return d && (l.value = !0, pn && S()), vt(H), {
    isPending: D_(l),
    start: S,
    stop: H
  };
}
function c3(a) {
  var r;
  const o = ht(a);
  return (r = o == null ? void 0 : o.$el) != null ? r : o;
}
const d3 = pn ? window : void 0;
function BN(...a) {
  let r, o, d, l;
  if (HN(a[0]) || Array.isArray(a[0]) ? ([o, d, l] = a, r = d3) : [r, o, d, l] = a, !r)
    return AN;
  Array.isArray(o) || (o = [o]), Array.isArray(d) || (d = [d]);
  const s = [], x = () => {
    s.forEach((P) => P()), s.length = 0;
  }, H = (P, I, Y, D) => (P.addEventListener(I, Y, D), () => P.removeEventListener(I, Y, D)), S = Re(() => [c3(r), ht(l)], ([P, I]) => {
    x(), P && s.push(...o.flatMap((Y) => d.map((D) => H(P, Y, D, I))));
  }, { immediate: !0, flush: "post" }), A = () => {
    S(), x();
  };
  return vt(A), A;
}
function TN(a, r = !1) {
  const o = Q(), d = () => o.value = !!a();
  return d(), LN(d, r), o;
}
const vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pr = "__vueuse_ssr_handlers__";
vr[pr] = vr[pr] || {};
var fr = Object.getOwnPropertySymbols, ON = Object.prototype.hasOwnProperty, IN = Object.prototype.propertyIsEnumerable, PN = (a, r) => {
  var o = {};
  for (var d in a)
    ON.call(a, d) && r.indexOf(d) < 0 && (o[d] = a[d]);
  if (a != null && fr)
    for (var d of fr(a))
      r.indexOf(d) < 0 && IN.call(a, d) && (o[d] = a[d]);
  return o;
};
function EN(a, r, o = {}) {
  const d = o, { window: l = d3 } = d, s = PN(d, ["window"]);
  let x;
  const H = TN(() => l && "ResizeObserver" in l), S = () => {
    x && (x.disconnect(), x = void 0);
  }, A = Re(() => c3(a), (I) => {
    S(), H.value && l && I && (x = new ResizeObserver(r), x.observe(I, s));
  }, { immediate: !0, flush: "post" }), P = () => {
    S(), A();
  };
  return vt(P), {
    isSupported: H,
    stop: P
  };
}
var gr;
(function(a) {
  a.UP = "UP", a.RIGHT = "RIGHT", a.DOWN = "DOWN", a.LEFT = "LEFT", a.NONE = "NONE";
})(gr || (gr = {}));
var kN = Object.defineProperty, wr = Object.getOwnPropertySymbols, FN = Object.prototype.hasOwnProperty, DN = Object.prototype.propertyIsEnumerable, $r = (a, r, o) => r in a ? kN(a, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[r] = o, RN = (a, r) => {
  for (var o in r || (r = {}))
    FN.call(r, o) && $r(a, o, r[o]);
  if (wr)
    for (var o of wr(r))
      DN.call(r, o) && $r(a, o, r[o]);
  return a;
};
const qN = {
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
RN({
  linear: VN
}, qN);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const NN = Object.prototype.hasOwnProperty, xr = (a, r) => NN.call(a, r), nt = (a) => typeof a == "function", un = (a) => typeof a == "string", l3 = (a) => a !== null && typeof a == "object";
var UN = typeof global == "object" && global && global.Object === Object && global;
const jN = UN;
var WN = typeof self == "object" && self && self.Object === Object && self, GN = jN || WN || Function("return this")();
const pt = GN;
var KN = pt.Symbol;
const L0 = KN;
var i3 = Object.prototype, ZN = i3.hasOwnProperty, YN = i3.toString, ln = L0 ? L0.toStringTag : void 0;
function JN(a) {
  var r = ZN.call(a, ln), o = a[ln];
  try {
    a[ln] = void 0;
    var d = !0;
  } catch {
  }
  var l = YN.call(a);
  return d && (r ? a[ln] = o : delete a[ln]), l;
}
var XN = Object.prototype, QN = XN.toString;
function eU(a) {
  return QN.call(a);
}
var nU = "[object Null]", aU = "[object Undefined]", yr = L0 ? L0.toStringTag : void 0;
function s3(a) {
  return a == null ? a === void 0 ? aU : nU : yr && yr in Object(a) ? JN(a) : eU(a);
}
function tU(a) {
  return a != null && typeof a == "object";
}
var oU = "[object Symbol]";
function ft(a) {
  return typeof a == "symbol" || tU(a) && s3(a) == oU;
}
function rU(a, r) {
  for (var o = -1, d = a == null ? 0 : a.length, l = Array(d); ++o < d; )
    l[o] = r(a[o], o, a);
  return l;
}
var cU = Array.isArray;
const gt = cU;
var dU = 1 / 0, zr = L0 ? L0.prototype : void 0, Cr = zr ? zr.toString : void 0;
function _3(a) {
  if (typeof a == "string")
    return a;
  if (gt(a))
    return rU(a, _3) + "";
  if (ft(a))
    return Cr ? Cr.call(a) : "";
  var r = a + "";
  return r == "0" && 1 / a == -dU ? "-0" : r;
}
function u3(a) {
  var r = typeof a;
  return a != null && (r == "object" || r == "function");
}
var lU = "[object AsyncFunction]", iU = "[object Function]", sU = "[object GeneratorFunction]", _U = "[object Proxy]";
function uU(a) {
  if (!u3(a))
    return !1;
  var r = s3(a);
  return r == iU || r == sU || r == lU || r == _U;
}
var mU = pt["__core-js_shared__"];
const Ja = mU;
var br = function() {
  var a = /[^.]+$/.exec(Ja && Ja.keys && Ja.keys.IE_PROTO || "");
  return a ? "Symbol(src)_1." + a : "";
}();
function hU(a) {
  return !!br && br in a;
}
var vU = Function.prototype, pU = vU.toString;
function fU(a) {
  if (a != null) {
    try {
      return pU.call(a);
    } catch {
    }
    try {
      return a + "";
    } catch {
    }
  }
  return "";
}
var gU = /[\\^$.*+?()[\]{}|]/g, wU = /^\[object .+?Constructor\]$/, $U = Function.prototype, xU = Object.prototype, yU = $U.toString, zU = xU.hasOwnProperty, CU = RegExp(
  "^" + yU.call(zU).replace(gU, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bU(a) {
  if (!u3(a) || hU(a))
    return !1;
  var r = uU(a) ? CU : wU;
  return r.test(fU(a));
}
function MU(a, r) {
  return a == null ? void 0 : a[r];
}
function m3(a, r) {
  var o = MU(a, r);
  return bU(o) ? o : void 0;
}
function HU(a, r) {
  return a === r || a !== a && r !== r;
}
var AU = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, VU = /^\w*$/;
function LU(a, r) {
  if (gt(a))
    return !1;
  var o = typeof a;
  return o == "number" || o == "symbol" || o == "boolean" || a == null || ft(a) ? !0 : VU.test(a) || !AU.test(a) || r != null && a in Object(r);
}
var SU = m3(Object, "create");
const mn = SU;
function BU() {
  this.__data__ = mn ? mn(null) : {}, this.size = 0;
}
function TU(a) {
  var r = this.has(a) && delete this.__data__[a];
  return this.size -= r ? 1 : 0, r;
}
var OU = "__lodash_hash_undefined__", IU = Object.prototype, PU = IU.hasOwnProperty;
function EU(a) {
  var r = this.__data__;
  if (mn) {
    var o = r[a];
    return o === OU ? void 0 : o;
  }
  return PU.call(r, a) ? r[a] : void 0;
}
var kU = Object.prototype, FU = kU.hasOwnProperty;
function DU(a) {
  var r = this.__data__;
  return mn ? r[a] !== void 0 : FU.call(r, a);
}
var RU = "__lodash_hash_undefined__";
function qU(a, r) {
  var o = this.__data__;
  return this.size += this.has(a) ? 0 : 1, o[a] = mn && r === void 0 ? RU : r, this;
}
function i0(a) {
  var r = -1, o = a == null ? 0 : a.length;
  for (this.clear(); ++r < o; ) {
    var d = a[r];
    this.set(d[0], d[1]);
  }
}
i0.prototype.clear = BU;
i0.prototype.delete = TU;
i0.prototype.get = EU;
i0.prototype.has = DU;
i0.prototype.set = qU;
function NU() {
  this.__data__ = [], this.size = 0;
}
function x1(a, r) {
  for (var o = a.length; o--; )
    if (HU(a[o][0], r))
      return o;
  return -1;
}
var UU = Array.prototype, jU = UU.splice;
function WU(a) {
  var r = this.__data__, o = x1(r, a);
  if (o < 0)
    return !1;
  var d = r.length - 1;
  return o == d ? r.pop() : jU.call(r, o, 1), --this.size, !0;
}
function GU(a) {
  var r = this.__data__, o = x1(r, a);
  return o < 0 ? void 0 : r[o][1];
}
function KU(a) {
  return x1(this.__data__, a) > -1;
}
function ZU(a, r) {
  var o = this.__data__, d = x1(o, a);
  return d < 0 ? (++this.size, o.push([a, r])) : o[d][1] = r, this;
}
function T0(a) {
  var r = -1, o = a == null ? 0 : a.length;
  for (this.clear(); ++r < o; ) {
    var d = a[r];
    this.set(d[0], d[1]);
  }
}
T0.prototype.clear = NU;
T0.prototype.delete = WU;
T0.prototype.get = GU;
T0.prototype.has = KU;
T0.prototype.set = ZU;
var YU = m3(pt, "Map");
const JU = YU;
function XU() {
  this.size = 0, this.__data__ = {
    hash: new i0(),
    map: new (JU || T0)(),
    string: new i0()
  };
}
function QU(a) {
  var r = typeof a;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? a !== "__proto__" : a === null;
}
function y1(a, r) {
  var o = a.__data__;
  return QU(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
}
function ej(a) {
  var r = y1(this, a).delete(a);
  return this.size -= r ? 1 : 0, r;
}
function nj(a) {
  return y1(this, a).get(a);
}
function aj(a) {
  return y1(this, a).has(a);
}
function tj(a, r) {
  var o = y1(this, a), d = o.size;
  return o.set(a, r), this.size += o.size == d ? 0 : 1, this;
}
function s0(a) {
  var r = -1, o = a == null ? 0 : a.length;
  for (this.clear(); ++r < o; ) {
    var d = a[r];
    this.set(d[0], d[1]);
  }
}
s0.prototype.clear = XU;
s0.prototype.delete = ej;
s0.prototype.get = nj;
s0.prototype.has = aj;
s0.prototype.set = tj;
var oj = "Expected a function";
function wt(a, r) {
  if (typeof a != "function" || r != null && typeof r != "function")
    throw new TypeError(oj);
  var o = function() {
    var d = arguments, l = r ? r.apply(this, d) : d[0], s = o.cache;
    if (s.has(l))
      return s.get(l);
    var x = a.apply(this, d);
    return o.cache = s.set(l, x) || s, x;
  };
  return o.cache = new (wt.Cache || s0)(), o;
}
wt.Cache = s0;
var rj = 500;
function cj(a) {
  var r = wt(a, function(d) {
    return o.size === rj && o.clear(), d;
  }), o = r.cache;
  return r;
}
var dj = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lj = /\\(\\)?/g, ij = cj(function(a) {
  var r = [];
  return a.charCodeAt(0) === 46 && r.push(""), a.replace(dj, function(o, d, l, s) {
    r.push(l ? s.replace(lj, "$1") : d || o);
  }), r;
});
const sj = ij;
function _j(a) {
  return a == null ? "" : _3(a);
}
function uj(a, r) {
  return gt(a) ? a : LU(a, r) ? [a] : sj(_j(a));
}
var mj = 1 / 0;
function hj(a) {
  if (typeof a == "string" || ft(a))
    return a;
  var r = a + "";
  return r == "0" && 1 / a == -mj ? "-0" : r;
}
function vj(a, r) {
  r = uj(r, a);
  for (var o = 0, d = r.length; a != null && o < d; )
    a = a[hj(r[o++])];
  return o && o == d ? a : void 0;
}
function pj(a, r, o) {
  var d = a == null ? void 0 : vj(a, r);
  return d === void 0 ? o : d;
}
function fj(a) {
  for (var r = -1, o = a == null ? 0 : a.length, d = {}; ++r < o; ) {
    var l = a[r];
    d[l[0]] = l[1];
  }
  return d;
}
const gj = (a) => a === void 0, hn = (a) => typeof a == "number", wj = (a) => typeof Element > "u" ? !1 : a instanceof Element, $j = (a) => un(a) ? !Number.isNaN(Number(a)) : !1, Mr = (a) => Object.keys(a);
class xj extends Error {
  constructor(r) {
    super(r), this.name = "ElementPlusError";
  }
}
function $t(a, r) {
  if (process.env.NODE_ENV !== "production") {
    const o = un(a) ? new xj(`[${a}] ${r}`) : a;
    console.warn(o);
  }
}
const yj = "utils/dom/style";
function zj(a, r = "px") {
  if (!a)
    return "";
  if (hn(a) || $j(a))
    return `${a}${r}`;
  if (un(a))
    return a;
  $t(yj, "binding value must be a string or number");
}
const h3 = "__epPropKey", J2 = (a) => a, Cj = (a) => l3(a) && !!a[h3], v3 = (a, r) => {
  if (!l3(a) || Cj(a))
    return a;
  const { values: o, required: d, default: l, type: s, validator: x } = a, S = {
    type: s,
    required: !!d,
    validator: o || x ? (A) => {
      let P = !1, I = [];
      if (o && (I = Array.from(o), xr(a, "default") && I.push(l), P || (P = I.includes(A))), x && (P || (P = x(A))), !P && I.length > 0) {
        const Y = [...new Set(I)].map((D) => JSON.stringify(D)).join(", ");
        q_(`Invalid prop: validation failed${r ? ` for prop "${r}"` : ""}. Expected one of [${Y}], got value ${JSON.stringify(A)}.`);
      }
      return P;
    } : void 0,
    [h3]: !0
  };
  return xr(a, "default") && (S.default = l), S;
}, z1 = (a) => fj(Object.entries(a).map(([r, o]) => [
  r,
  v3(o, r)
])), bj = J2([
  String,
  Object,
  Function
]), Mj = {
  Close: o3,
  SuccessFilled: ut,
  InfoFilled: _t,
  WarningFilled: mt,
  CircleCloseFilled: st
}, Hr = {
  success: ut,
  warning: mt,
  error: st,
  info: _t
}, p3 = (a, r) => {
  if (a.install = (o) => {
    for (const d of [a, ...Object.values(r ?? {})])
      o.component(d.name, d);
  }, r)
    for (const [o, d] of Object.entries(r))
      a[o] = d;
  return a;
}, Hj = (a, r) => (a.install = (o) => {
  a._context = o._context, o.config.globalProperties[r] = a;
}, a), Aj = {
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
}, Vj = ["", "default", "small", "large"], Lj = (a) => a;
var Sj = {
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
const Bj = (a) => (r, o) => Tj(r, o, F(a)), Tj = (a, r, o) => pj(o, a, a).replace(/\{(\w+)\}/g, (d, l) => {
  var s;
  return `${(s = r == null ? void 0 : r[l]) != null ? s : `{${l}}`}`;
}), Oj = (a) => {
  const r = ue(() => F(a).name), o = N_(a) ? a : Q(a);
  return {
    lang: r,
    locale: o,
    t: Bj(a)
  };
}, f3 = Symbol("localeContextKey"), Ij = (a) => {
  const r = a || $1(f3, Q());
  return Oj(ue(() => r.value || Sj));
}, m1 = "el", Pj = "is-", d0 = (a, r, o, d, l) => {
  let s = `${a}-${r}`;
  return o && (s += `-${o}`), d && (s += `__${d}`), l && (s += `--${l}`), s;
}, g3 = Symbol("namespaceContextKey"), Ej = (a) => {
  const r = a || (vn() ? $1(g3, Q(m1)) : Q(m1));
  return ue(() => F(r) || m1);
}, xt = (a, r) => {
  const o = Ej(r);
  return {
    namespace: o,
    b: (k = "") => d0(o.value, a, k, "", ""),
    e: (k) => k ? d0(o.value, a, "", k, "") : "",
    m: (k) => k ? d0(o.value, a, "", "", k) : "",
    be: (k, B) => k && B ? d0(o.value, a, k, B, "") : "",
    em: (k, B) => k && B ? d0(o.value, a, "", k, B) : "",
    bm: (k, B) => k && B ? d0(o.value, a, k, "", B) : "",
    bem: (k, B, V) => k && B && V ? d0(o.value, a, k, B, V) : "",
    is: (k, ...B) => {
      const V = B.length >= 1 ? B[0] : !0;
      return k && V ? `${Pj}${k}` : "";
    },
    cssVar: (k) => {
      const B = {};
      for (const V in k)
        k[V] && (B[`--${o.value}-${V}`] = k[V]);
      return B;
    },
    cssVarName: (k) => `--${o.value}-${k}`,
    cssVarBlock: (k) => {
      const B = {};
      for (const V in k)
        k[V] && (B[`--${o.value}-${a}-${V}`] = k[V]);
      return B;
    },
    cssVarBlockName: (k) => `--${o.value}-${a}-${k}`
  };
}, Ar = Q(0), w3 = 2e3, $3 = Symbol("zIndexContextKey"), kj = (a) => {
  const r = a || (vn() ? $1($3, void 0) : void 0), o = ue(() => {
    const s = F(r);
    return hn(s) ? s : w3;
  }), d = ue(() => o.value + Ar.value);
  return {
    initialZIndex: o,
    currentZIndex: d,
    nextZIndex: () => (Ar.value++, d.value)
  };
}, Fj = v3({
  type: String,
  values: Vj,
  required: !1
}), Dj = Symbol("size"), x3 = Symbol(), v1 = Q();
function y3(a, r = void 0) {
  const o = vn() ? $1(x3, v1) : v1;
  return a ? ue(() => {
    var d, l;
    return (l = (d = o.value) == null ? void 0 : d[a]) != null ? l : r;
  }) : o;
}
function Rj(a, r) {
  const o = y3(), d = xt(a, ue(() => {
    var H;
    return ((H = o.value) == null ? void 0 : H.namespace) || m1;
  })), l = Ij(ue(() => {
    var H;
    return (H = o.value) == null ? void 0 : H.locale;
  })), s = kj(ue(() => {
    var H;
    return ((H = o.value) == null ? void 0 : H.zIndex) || w3;
  })), x = ue(() => {
    var H;
    return F(r) || ((H = o.value) == null ? void 0 : H.size) || "";
  });
  return z3(ue(() => F(o) || {})), {
    ns: d,
    locale: l,
    zIndex: s,
    size: x
  };
}
const z3 = (a, r, o = !1) => {
  var d;
  const l = !!vn(), s = l ? y3() : void 0, x = (d = r == null ? void 0 : r.provide) != null ? d : l ? U_ : void 0;
  if (!x) {
    $t("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const H = ue(() => {
    const S = F(a);
    return s != null && s.value ? qj(s.value, S) : S;
  });
  return x(x3, H), x(f3, ue(() => H.value.locale)), x(g3, ue(() => H.value.namespace)), x($3, ue(() => H.value.zIndex)), x(Dj, {
    size: ue(() => H.value.size || "")
  }), (o || !v1.value) && (v1.value = H.value), H;
}, qj = (a, r) => {
  var o;
  const d = [.../* @__PURE__ */ new Set([...Mr(a), ...Mr(r)])], l = {};
  for (const s of d)
    l[s] = (o = r[s]) != null ? o : a[s];
  return l;
}, Nj = z1({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: J2(Object)
  },
  size: Fj,
  button: {
    type: J2(Object)
  },
  experimentalFeatures: {
    type: J2(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: J2(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
}), at = {};
Se({
  name: "ElConfigProvider",
  props: Nj,
  setup(a, { slots: r }) {
    Re(() => a.message, (d) => {
      Object.assign(at, d ?? {});
    }, { immediate: !0, deep: !0 });
    const o = z3(a);
    return () => Xe(r, "default", { config: o == null ? void 0 : o.value });
  }
});
var yt = (a, r) => {
  const o = a.__vccOpts || a;
  for (const [d, l] of r)
    o[d] = l;
  return o;
};
const Uj = z1({
  size: {
    type: J2([Number, String])
  },
  color: {
    type: String
  }
}), jj = Se({
  name: "ElIcon",
  inheritAttrs: !1
}), Wj = /* @__PURE__ */ Se({
  ...jj,
  props: Uj,
  setup(a) {
    const r = a, o = xt("icon"), d = ue(() => {
      const { size: l, color: s } = r;
      return !l && !s ? {} : {
        fontSize: gj(l) ? void 0 : zj(l),
        "--color": s
      };
    });
    return (l, s) => (u(), m("i", r2({
      class: F(o).b(),
      style: F(d)
    }, l.$attrs), [
      Xe(l.$slots, "default")
    ], 16));
  }
});
var Gj = /* @__PURE__ */ yt(Wj, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Vr = p3(Gj), Kj = z1({
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
}), Zj = ["textContent"], Yj = Se({
  name: "ElBadge"
}), Jj = /* @__PURE__ */ Se({
  ...Yj,
  props: Kj,
  setup(a, { expose: r }) {
    const o = a, d = xt("badge"), l = ue(() => o.isDot ? "" : hn(o.value) && hn(o.max) ? o.max < o.value ? `${o.max}+` : `${o.value}` : `${o.value}`);
    return r({
      content: l
    }), (s, x) => (u(), m("div", {
      class: H2(F(d).b())
    }, [
      Xe(s.$slots, "default"),
      j(a3, {
        name: `${F(d).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: U(() => [
          lt(i("sup", {
            class: H2([
              F(d).e("content"),
              F(d).em("content", s.type),
              F(d).is("fixed", !!s.$slots.default),
              F(d).is("dot", s.isDot)
            ]),
            textContent: Le(F(l))
          }, null, 10, Zj), [
            [t3, !s.hidden && (F(l) || s.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var Xj = /* @__PURE__ */ yt(Jj, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const Qj = p3(Xj);
var D2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function eW(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
const C3 = ["success", "info", "warning", "error"], Je = Lj({
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
  appendTo: pn ? document.body : void 0
}), nW = z1({
  customClass: {
    type: String,
    default: Je.customClass
  },
  center: {
    type: Boolean,
    default: Je.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Je.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Je.duration
  },
  icon: {
    type: bj,
    default: Je.icon
  },
  id: {
    type: String,
    default: Je.id
  },
  message: {
    type: J2([
      String,
      Object,
      Function
    ]),
    default: Je.message
  },
  onClose: {
    type: J2(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: Je.showClose
  },
  type: {
    type: String,
    values: C3,
    default: Je.type
  },
  offset: {
    type: Number,
    default: Je.offset
  },
  zIndex: {
    type: Number,
    default: Je.zIndex
  },
  grouping: {
    type: Boolean,
    default: Je.grouping
  },
  repeatNum: {
    type: Number,
    default: Je.repeatNum
  }
}), aW = {
  destroy: () => !0
}, y2 = j_([]), tW = (a) => {
  const r = y2.findIndex((l) => l.id === a), o = y2[r];
  let d;
  return r > 0 && (d = y2[r - 1]), { current: o, prev: d };
}, oW = (a) => {
  const { prev: r } = tW(a);
  return r ? r.vm.exposed.bottom.value : 0;
}, rW = (a, r) => y2.findIndex((d) => d.id === a) > 0 ? 20 : r, cW = ["id"], dW = ["innerHTML"], lW = Se({
  name: "ElMessage"
}), iW = /* @__PURE__ */ Se({
  ...lW,
  props: nW,
  emits: aW,
  setup(a, { expose: r }) {
    const o = a, { Close: d } = Mj, { ns: l, zIndex: s } = Rj("message"), { currentZIndex: x, nextZIndex: H } = s, S = Q(), A = Q(!1), P = Q(0);
    let I;
    const Y = ue(() => o.type ? o.type === "error" ? "danger" : o.type : "info"), D = ue(() => {
      const J = o.type;
      return { [l.bm("icon", J)]: J && Hr[J] };
    }), te = ue(() => o.icon || Hr[o.type] || ""), k = ue(() => oW(o.id)), B = ue(() => rW(o.id, o.offset) + k.value), V = ue(() => P.value + B.value), T = ue(() => ({
      top: `${B.value}px`,
      zIndex: x.value
    }));
    function oe() {
      o.duration !== 0 && ({ stop: I } = SN(() => {
        he();
      }, o.duration));
    }
    function ge() {
      I == null || I();
    }
    function he() {
      A.value = !1;
    }
    function re({ code: J }) {
      J === Aj.esc && he();
    }
    return B0(() => {
      oe(), H(), A.value = !0;
    }), Re(() => o.repeatNum, () => {
      ge(), oe();
    }), BN(document, "keydown", re), EN(S, () => {
      P.value = S.value.getBoundingClientRect().height;
    }), r({
      visible: A,
      bottom: V,
      close: he
    }), (J, ze) => (u(), ne(a3, {
      name: F(l).b("fade"),
      onBeforeLeave: J.onClose,
      onAfterLeave: ze[0] || (ze[0] = (v2) => J.$emit("destroy")),
      persisted: ""
    }, {
      default: U(() => [
        lt(i("div", {
          id: J.id,
          ref_key: "messageRef",
          ref: S,
          class: H2([
            F(l).b(),
            { [F(l).m(J.type)]: J.type && !J.icon },
            F(l).is("center", J.center),
            F(l).is("closable", J.showClose),
            J.customClass
          ]),
          style: _n(F(T)),
          role: "alert",
          onMouseenter: ge,
          onMouseleave: oe
        }, [
          J.repeatNum > 1 ? (u(), ne(F(Qj), {
            key: 0,
            value: J.repeatNum,
            type: F(Y),
            class: H2(F(l).e("badge"))
          }, null, 8, ["value", "type", "class"])) : _e("v-if", !0),
          F(te) ? (u(), ne(F(Vr), {
            key: 1,
            class: H2([F(l).e("icon"), F(D)])
          }, {
            default: U(() => [
              (u(), ne(c2(F(te))))
            ]),
            _: 1
          }, 8, ["class"])) : _e("v-if", !0),
          Xe(J.$slots, "default", {}, () => [
            J.dangerouslyUseHTMLString ? (u(), m(le, { key: 1 }, [
              _e(" Caution here, message could've been compromised, never use user's input as message "),
              i("p", {
                class: H2(F(l).e("content")),
                innerHTML: J.message
              }, null, 10, dW)
            ], 2112)) : (u(), m("p", {
              key: 0,
              class: H2(F(l).e("content"))
            }, Le(J.message), 3))
          ]),
          J.showClose ? (u(), ne(F(Vr), {
            key: 2,
            class: H2(F(l).e("closeBtn")),
            onClick: Qa(he, ["stop"])
          }, {
            default: U(() => [
              j(F(d))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : _e("v-if", !0)
        ], 46, cW), [
          [t3, A.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var sW = /* @__PURE__ */ yt(iW, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let _W = 1;
const b3 = (a) => {
  const r = !a || un(a) || it(a) || nt(a) ? { message: a } : a, o = {
    ...Je,
    ...r
  };
  if (!o.appendTo)
    o.appendTo = document.body;
  else if (un(o.appendTo)) {
    let d = document.querySelector(o.appendTo);
    wj(d) || ($t("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), d = document.body), o.appendTo = d;
  }
  return o;
}, uW = (a) => {
  const r = y2.indexOf(a);
  if (r === -1)
    return;
  y2.splice(r, 1);
  const { handler: o } = a;
  o.close();
}, mW = ({ appendTo: a, ...r }, o) => {
  const d = `message_${_W++}`, l = r.onClose, s = document.createElement("div"), x = {
    ...r,
    id: d,
    onClose: () => {
      l == null || l(), uW(P);
    },
    onDestroy: () => {
      ur(null, s);
    }
  }, H = j(sW, x, nt(x.message) || it(x.message) ? {
    default: nt(x.message) ? x.message : () => x.message
  } : null);
  H.appContext = o || S0._context, ur(H, s), a.appendChild(s.firstElementChild);
  const S = H.component, P = {
    id: d,
    vnode: H,
    vm: S,
    handler: {
      close: () => {
        S.exposed.visible.value = !1;
      }
    },
    props: H.component.props
  };
  return P;
}, S0 = (a = {}, r) => {
  if (!pn)
    return { close: () => {
    } };
  if (hn(at.max) && y2.length >= at.max)
    return { close: () => {
    } };
  const o = b3(a);
  if (o.grouping && y2.length) {
    const l = y2.find(({ vnode: s }) => {
      var x;
      return ((x = s.props) == null ? void 0 : x.message) === o.message;
    });
    if (l)
      return l.props.repeatNum += 1, l.props.type = o.type, l.handler;
  }
  const d = mW(o, r);
  return y2.push(d), d.handler;
};
C3.forEach((a) => {
  S0[a] = (r = {}, o) => {
    const d = b3(r);
    return S0({ ...d, type: a }, o);
  };
});
function hW(a) {
  for (const r of y2)
    (!a || a === r.props.type) && r.handler.close();
}
S0.closeAll = hW;
S0._context = null;
const vW = Hj(S0, "$message"), pW = (a) => {
  const r = document.createElement("input");
  r.value = a, document.body.appendChild(r), r.select(), document.execCommand("Copy"), document.body.removeChild(r), vW.success("复制成功");
}, fW = { class: "m-choose-icon-dialog-body-height" }, gW = { class: "container" }, wW = ["onClick"], $W = /* @__PURE__ */ Se({
  __name: "index",
  props: {
    title: {},
    visible: { type: Boolean }
  },
  emits: ["update:visible"],
  setup(a, { emit: r }) {
    const o = a, d = r, l = Q(o.visible), s = () => {
      d("update:visible", !o.visible);
    };
    Re(
      () => o.visible,
      (H) => {
        l.value = H;
      }
    ), Re(
      () => l.value,
      (H) => {
        d("update:visible", H);
      }
    );
    const x = (H) => {
      const S = `<el-icon-${A2(H)} />`;
      pW(S), l.value = !1;
    };
    return (H, S) => {
      const A = ee("el-button"), P = ee("el-dialog");
      return u(), m(
        le,
        null,
        [
          j(A, {
            onClick: s,
            type: "primary"
          }, {
            default: U(() => [
              Xe(H.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
            /* FORWARDED */
          }),
          i("div", fW, [
            j(P, {
              title: H.title,
              modelValue: l.value,
              "onUpdate:modelValue": S[0] || (S[0] = (I) => l.value = I)
            }, {
              default: U(() => [
                i("div", gW, [
                  (u(!0), m(
                    le,
                    null,
                    Ve(Object.keys(r3), (I, Y) => (u(), m("div", {
                      class: "item",
                      key: Y,
                      onClick: (D) => x(I)
                    }, [
                      i("div", null, [
                        (u(), ne(c2(`el-icon-${F(A2)(I)}`)))
                      ]),
                      i(
                        "div",
                        null,
                        Le(I),
                        1
                        /* TEXT */
                      )
                    ], 8, wW))),
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
const _0 = (a, r) => {
  const o = a.__vccOpts || a;
  for (const [d, l] of r)
    o[d] = l;
  return o;
}, xW = /* @__PURE__ */ _0($W, [["__scopeId", "data-v-1a9429fc"]]), yW = {
  install(a) {
    a.component("m-choose-icon", xW);
  }
}, zW = { class: "trend" }, CW = { key: 1 }, bW = { class: "icon" }, MW = /* @__PURE__ */ Se({
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
  setup(a) {
    const r = a, o = W_(), d = ue(() => r.type === "up" ? r.upTextColor : r.downTextColor);
    return (l, s) => (u(), m("div", zW, [
      i(
        "div",
        {
          class: "text",
          style: _n({ color: d.value })
        },
        [
          F(o).default ? Xe(l.$slots, "default", { key: 0 }, void 0, !0) : (u(), m(
            "div",
            CW,
            Le(a.text),
            1
            /* TEXT */
          ))
        ],
        4
        /* STYLE */
      ),
      i("div", bW, [
        a.type === "up" ? (u(), ne(c2(`el-icon-${F(A2)(a.upIcon)}`), {
          key: 0,
          style: _n({ color: a.reverseColor ? a.downIconColor : a.upIconColor })
        }, null, 8, ["style"])) : (u(), ne(c2(`el-icon-${F(A2)(a.downIcon)}`), {
          key: 1,
          style: _n({ color: a.reverseColor ? a.upIconColor : a.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
});
const HW = /* @__PURE__ */ _0(MW, [["__scopeId", "data-v-35eb4a50"]]), AW = {
  install(a) {
    a.component("m-trend", HW);
  }
}, VW = { class: "notificaton-popover" }, LW = /* @__PURE__ */ Se({
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
  setup(a) {
    return (r, o) => {
      const d = ee("el-badge"), l = ee("el-popover");
      return u(), m("div", VW, [
        j(l, {
          placement: "bottom",
          width: 300,
          trigger: "click"
        }, {
          default: U(() => [
            Xe(r.$slots, "default", {}, void 0, !0)
          ]),
          reference: U(() => [
            j(d, {
              value: a.value,
              max: a.max,
              "is-dot": a.isDot,
              style: { cursor: "pointer" }
            }, {
              default: U(() => [
                (u(), ne(c2(`el-icon-${F(A2)(a.icon)}`)))
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
const SW = /* @__PURE__ */ _0(LW, [["__scopeId", "data-v-387cf9e0"]]), BW = {
  install(a) {
    a.component("m-notification", SW);
  }
}, TW = { class: "list-tabs__item" }, OW = ["onClick"], IW = {
  key: 0,
  class: "avatar"
}, PW = { class: "content" }, EW = {
  key: 0,
  class: "title"
}, kW = { key: 1 }, FW = {
  key: 2,
  class: "time"
}, DW = { class: "actions" }, RW = ["onClick"], qW = {
  key: 0,
  class: "a-icon"
}, NW = { class: "a-text" }, UW = /* @__PURE__ */ Se({
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
  setup(a, { emit: r }) {
    const o = r, d = (s, x) => {
      o("clickItem", { op: s, index: x });
    }, l = (s, x) => {
      o("clickAction", { action: s, index: x });
    };
    return (s, x) => {
      const H = ee("el-avatar"), S = ee("el-tag"), A = ee("el-scrollbar"), P = ee("el-tab-pane"), I = ee("el-tabs");
      return u(), m("div", TW, [
        j(I, null, {
          default: U(() => [
            (u(!0), m(
              le,
              null,
              Ve(a.list, (Y, D) => (u(), ne(P, {
                key: D,
                label: Y.title
              }, {
                default: U(() => [
                  j(
                    A,
                    { "max-height": "300px" },
                    {
                      default: U(() => [
                        (u(!0), m(
                          le,
                          null,
                          Ve(Y.content, (te, k) => (u(), m("div", {
                            class: "container",
                            onClick: (B) => d(te, k),
                            key: k
                          }, [
                            te.avatar ? (u(), m("div", IW, [
                              j(H, {
                                size: "small",
                                src: te.avatar
                              }, null, 8, ["src"])
                            ])) : _e("v-if", !0),
                            i("div", PW, [
                              te.title ? (u(), m("div", EW, [
                                i(
                                  "div",
                                  null,
                                  Le(te.title),
                                  1
                                  /* TEXT */
                                ),
                                te.tag ? (u(), ne(S, {
                                  key: 0,
                                  size: "small",
                                  type: te.tagType
                                }, {
                                  default: U(() => [
                                    et(
                                      Le(te.tag),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["type"])) : _e("v-if", !0)
                              ])) : _e("v-if", !0),
                              te.desc ? (u(), m(
                                "div",
                                kW,
                                Le(te.desc),
                                1
                                /* TEXT */
                              )) : _e("v-if", !0),
                              te.time ? (u(), m(
                                "div",
                                FW,
                                Le(te.time),
                                1
                                /* TEXT */
                              )) : _e("v-if", !0)
                            ])
                          ], 8, OW))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        i("div", DW, [
                          (u(!0), m(
                            le,
                            null,
                            Ve(a.actions, (te, k) => (u(), m("div", {
                              class: H2(["a-item", { border: k !== a.actions.length }]),
                              onClick: (B) => l(te, k),
                              key: k
                            }, [
                              te.icon ? (u(), m("div", qW, [
                                (u(), ne(c2(`el-icon-${F(A2)(te.icon)}`)))
                              ])) : _e("v-if", !0),
                              i(
                                "div",
                                NW,
                                Le(te.text),
                                1
                                /* TEXT */
                              )
                            ], 10, RW))),
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
const jW = /* @__PURE__ */ _0(UW, [["__scopeId", "data-v-223aee32"]]), WW = {
  install(a) {
    a.component("m-list", jW);
  }
}, GW = /* @__PURE__ */ Se({
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
  setup(a) {
    return (r, o) => {
      const d = ee("el-menu-item"), l = ee("el-sub-menu"), s = ee("el-menu");
      return u(), ne(s, r2({
        "default-active": a.defaultActive,
        router: a.router
      }, r.$attrs), {
        default: U(() => [
          (u(!0), m(
            le,
            null,
            Ve(a.data, (x, H) => (u(), m(
              le,
              { key: H },
              [
                !x[a.children] || !x[a.children].length ? (u(), ne(d, {
                  key: 0,
                  index: x[a.index]
                }, {
                  default: U(() => [
                    x[a.icon] ? (u(), ne(c2(`el-icon-${F(A2)(x[a.icon])}`), { key: 0 })) : _e("v-if", !0),
                    i(
                      "span",
                      null,
                      Le(x[a.name]),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"])) : _e("v-if", !0),
                x[a.children] && x[a.children].length ? (u(), ne(l, {
                  key: 1,
                  index: x[a.index]
                }, {
                  title: U(() => [
                    x[a.icon] ? (u(), ne(c2(`el-icon-${F(A2)(x[a.icon])}`), { key: 0 })) : _e("v-if", !0),
                    i(
                      "span",
                      null,
                      Le(x[a.name]),
                      1
                      /* TEXT */
                    )
                  ]),
                  default: U(() => [
                    (u(!0), m(
                      le,
                      null,
                      Ve(x[a.children], (S, A) => (u(), ne(d, {
                        key: A,
                        index: S[a.index]
                      }, {
                        default: U(() => [
                          S[a.icon] ? (u(), ne(c2(`el-icon-${F(A2)(S[a.icon])}`), { key: 0 })) : _e("v-if", !0),
                          i(
                            "span",
                            null,
                            Le(S[a.name]),
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
                }, 1032, ["index"])) : _e("v-if", !0)
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
const KW = /* @__PURE__ */ _0(GW, [["__scopeId", "data-v-07551fdc"]]);
function ZW(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !it(a);
}
const YW = /* @__PURE__ */ Se({
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
  setup(a, r) {
    const o = (l) => l.map((s) => {
      s.i = r3[s[a.icon]];
      const x = {
        title: () => j(le, null, [j(s.i, null, null), j("span", null, [s[a.name]])])
      };
      return s[a.children] && s[a.children].length ? j(ee("el-sub-menu"), {
        index: s[a.index]
      }, {
        default: () => [o(s[a.children])],
        ...x
      }) : j(ee("el-menu-item"), {
        index: s[a.index]
      }, {
        default: () => [j(s.i, null, null), j("span", null, [s[a.name]])]
      });
    }), d = G_();
    return () => {
      let l;
      return j(ee("el-menu"), r2({
        class: "menu",
        "default-active": a.defaultActive,
        router: a.router
      }, d), ZW(l = o(a.data)) ? l : {
        default: () => [l]
      });
    };
  }
}), JW = {
  install(a) {
    a.component("m-menu", KW), a.component("m-infinite-menu", YW);
  }
}, XW = /* @__PURE__ */ Se({
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
  setup(a) {
    const r = a, o = Q(0);
    return B0(() => {
      if (r.isAnimation) {
        const d = Math.ceil(r.time / r.percentage), l = setInterval(() => {
          o.value += 1, o.value >= r.percentage && (o.value = r.percentage, clearInterval(l));
        }, d);
      } else
        o.value = r.percentage;
    }), (d, l) => {
      const s = ee("el-progress");
      return u(), ne(s, r2(d.$attrs, { percentage: o.value }), null, 16, ["percentage"]);
    };
  }
}), QW = {
  install(a) {
    a.component("m-progress", XW);
  }
}, eG = { style: { display: "flex" } }, nG = { style: { "margin-right": "20px" } }, aG = /* @__PURE__ */ Se({
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
  setup(a, { emit: r }) {
    const o = Q(""), d = Q(""), l = Q(!0), s = r;
    return Re(
      () => o.value,
      (x) => {
        x === "" ? (d.value = "", l.value = !0) : (l.value = !1, s("startChange", x));
      }
    ), Re(
      () => d.value,
      (x) => {
        x && s("endChange", {
          startTime: o.value,
          endTime: x
        });
      }
    ), (x, H) => {
      const S = ee("el-time-select");
      return u(), m("div", eG, [
        i("div", nG, [
          j(S, r2({
            modelValue: o.value,
            "onUpdate:modelValue": H[0] || (H[0] = (A) => o.value = A),
            "max-time": d.value,
            class: "mr-4",
            placeholder: a.startPlaceholder,
            start: a.startTimeStart,
            step: a.startStep,
            end: a.startTimeEnd
          }, x.$attrs.startOptions), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
        ]),
        i("div", null, [
          j(S, r2({
            modelValue: d.value,
            "onUpdate:modelValue": H[1] || (H[1] = (A) => d.value = A),
            "min-time": o.value,
            placeholder: a.endPlaceholder,
            start: a.endTimeStart,
            step: a.endStep,
            end: a.endTimeEnd,
            disabled: l.value
          }, x.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
}), tG = {
  install(a) {
    a.component("m-choose-time", aG);
  }
}, oG = { style: { display: "flex" } }, rG = { style: { "margin-right": "20px" } }, cG = /* @__PURE__ */ Se({
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
  setup(a, { emit: r }) {
    const o = r, d = a, l = Q(null), s = Q(null), x = Q(!0), H = (A) => {
      if (d.disableToday)
        return A.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    }, S = (A) => {
      if (l.value)
        return A.getTime() < l.value.getTime() + 1e3 * 60 * 60 * 24;
    };
    return Re(
      () => l.value,
      (A) => {
        A ? (o("startChange", A), x.value = !1) : x.value = !0, s.value = null;
      }
    ), Re(
      () => s.value,
      (A) => {
        A && o("endChange", {
          startDate: l.value,
          endDate: A
        });
      }
    ), (A, P) => {
      const I = ee("el-date-picker");
      return u(), m("div", oG, [
        i("div", rG, [
          j(I, r2({
            modelValue: l.value,
            "onUpdate:modelValue": P[0] || (P[0] = (Y) => l.value = Y),
            type: "date",
            placeholder: a.startPlaceholder,
            disabledDate: H
          }, A.$attrs.startOptions), null, 16, ["modelValue", "placeholder"])
        ]),
        i("div", null, [
          j(I, r2({
            modelValue: s.value,
            "onUpdate:modelValue": P[1] || (P[1] = (Y) => s.value = Y),
            type: "date",
            placeholder: a.endPlaceholder,
            disabled: x.value,
            disabledDate: S
          }, A.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "disabled"])
        ])
      ]);
    };
  }
}), dG = {
  install(a) {
    a.component("m-choose-date", cG);
  }
}, lG = {
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
}, iG = [
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
], sG = [
  {
    name: "重庆",
    id: "C",
    data: [
      "重庆城区",
      "重庆郊县"
    ]
  }
], _G = [
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
], uG = {
  A: iG,
  C: sG,
  G: _G
}, mG = { class: "result" }, hG = { class: "container" }, vG = { class: "city" }, pG = ["onClick"], fG = ["onClick"], gG = { class: "province" }, wG = ["onClick"], $G = ["onClick"], xG = /* @__PURE__ */ Se({
  __name: "index",
  emits: ["changeCity", "changeProvince"],
  setup(a, { emit: r }) {
    const o = r, d = Q("请选择"), l = Q(!1), s = Q("按省份"), x = Q(""), H = Q(lG.cities), S = Q(uG), A = Q([]), P = Q([]), I = (B) => {
      d.value = B.name, l.value = !1, o("changeCity", B);
    }, Y = (B) => {
      d.value = B, l.value = !1, o("changeProvince", B);
    }, D = (B) => {
      const V = document.getElementById(B);
      V && V.scrollIntoView();
    }, te = (B) => {
      const V = Object.values(H.value).flat(1 / 0);
      B === "" ? A.value = V : s.value === "按城市" ? A.value = V.filter((T) => T.name.includes(B) || T.spell.includes(B)) : A.value = V.filter((T) => T.name.includes(B));
    }, k = (B) => {
      const V = P.value.find((T) => T.id === B);
      d.value = V.name, s.value === "按城市" ? o("changeCity", V) : o("changeProvince", V.name);
    };
    return B0(() => {
      const B = Object.values(H.value).flat(1 / 0);
      A.value = B, P.value = B;
    }), (B, V) => {
      const T = ee("el-icon-arrowdown"), oe = ee("el-radio-button"), ge = ee("el-radio-group"), he = ee("el-col"), re = ee("el-option"), J = ee("el-select"), ze = ee("el-row"), v2 = ee("el-scrollbar"), F0 = ee("el-popover");
      return u(), ne(F0, {
        visible: l.value,
        "onUpdate:visible": V[2] || (V[2] = (Ce) => l.value = Ce),
        placement: "bottom-start",
        width: 430,
        trigger: "click"
      }, {
        reference: U(() => [
          i("div", mG, [
            i(
              "div",
              null,
              Le(d.value),
              1
              /* TEXT */
            ),
            i("div", null, [
              j(T, {
                class: H2({ rotate: l.value })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        default: U(() => [
          i("div", hG, [
            j(ze, null, {
              default: U(() => [
                j(he, { span: 8 }, {
                  default: U(() => [
                    j(ge, {
                      modelValue: s.value,
                      "onUpdate:modelValue": V[0] || (V[0] = (Ce) => s.value = Ce),
                      size: "small"
                    }, {
                      default: U(() => [
                        j(oe, { label: "按城市" }),
                        j(oe, { label: "按省份" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                j(he, {
                  offset: 1,
                  span: 15
                }, {
                  default: U(() => [
                    j(J, {
                      modelValue: x.value,
                      "onUpdate:modelValue": V[1] || (V[1] = (Ce) => x.value = Ce),
                      placeholder: "请搜索城市",
                      size: "small",
                      filterable: "",
                      "filter-method": te,
                      onChange: k
                    }, {
                      default: U(() => [
                        (u(!0), m(
                          le,
                          null,
                          Ve(A.value, (Ce) => (u(), ne(re, {
                            key: Ce.id,
                            label: Ce.name,
                            value: Ce.id
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
            _e(" 按城市 "),
            s.value === "按城市" ? (u(), m(
              le,
              { key: 0 },
              [
                i("div", vG, [
                  (u(!0), m(
                    le,
                    null,
                    Ve(H.value, (Ce, ke) => (u(), m("div", {
                      class: "city-item",
                      key: ke,
                      onClick: (We) => D(ke)
                    }, Le(ke), 9, pG))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                j(v2, { "max-height": "300px" }, {
                  default: U(() => [
                    (u(!0), m(
                      le,
                      null,
                      Ve(H.value, (Ce, ke) => (u(), ne(ze, {
                        key: ke,
                        style: { "margin-bottom": "10px" },
                        id: ke
                      }, {
                        default: U(() => [
                          j(
                            he,
                            { span: 2 },
                            {
                              default: U(() => [
                                et(
                                  Le(ke) + ":",
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
                          j(
                            he,
                            {
                              span: 22,
                              class: "city-name"
                            },
                            {
                              default: U(() => [
                                (u(!0), m(
                                  le,
                                  null,
                                  Ve(Ce, (We) => (u(), m("div", {
                                    class: "city-name-item",
                                    key: We.id,
                                    onClick: (be) => I(We)
                                  }, Le(We.name), 9, fG))),
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
            )) : (u(), m(
              le,
              { key: 1 },
              [
                _e(" 按省份 "),
                i("div", gG, [
                  (u(!0), m(
                    le,
                    null,
                    Ve(Object.keys(S.value), (Ce, ke) => (u(), m("div", {
                      class: "province-item",
                      key: ke,
                      onClick: (We) => D(Ce)
                    }, Le(Ce), 9, wG))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                j(v2, { "max-height": "300px" }, {
                  default: U(() => [
                    (u(!0), m(
                      le,
                      null,
                      Ve(Object.values(S.value), (Ce, ke) => (u(), m(
                        le,
                        { key: ke },
                        [
                          (u(!0), m(
                            le,
                            null,
                            Ve(Ce, (We, be) => (u(), ne(ze, {
                              key: be,
                              style: { "margin-bottom": "10px" },
                              id: We.id
                            }, {
                              default: U(() => [
                                j(
                                  he,
                                  { span: 3 },
                                  {
                                    default: U(() => [
                                      et(
                                        Le(We.name) + ":",
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
                                j(
                                  he,
                                  {
                                    span: 21,
                                    class: "province-name"
                                  },
                                  {
                                    default: U(() => [
                                      (u(!0), m(
                                        le,
                                        null,
                                        Ve(We.data, (m0, Ie) => (u(), m("div", {
                                          class: "province-name-item",
                                          key: Ie,
                                          onClick: (qe) => Y(m0)
                                        }, Le(m0), 9, $G))),
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
const yG = /* @__PURE__ */ _0(xG, [["__scopeId", "data-v-054547c4"]]), zG = {
  install(a) {
    a.component("m-choose-city", yG);
  }
};
function CG() {
  this.__data__ = [], this.size = 0;
}
var bG = CG;
function MG(a, r) {
  return a === r || a !== a && r !== r;
}
var M3 = MG, HG = M3;
function AG(a, r) {
  for (var o = a.length; o--; )
    if (HG(a[o][0], r))
      return o;
  return -1;
}
var C1 = AG, VG = C1, LG = Array.prototype, SG = LG.splice;
function BG(a) {
  var r = this.__data__, o = VG(r, a);
  if (o < 0)
    return !1;
  var d = r.length - 1;
  return o == d ? r.pop() : SG.call(r, o, 1), --this.size, !0;
}
var TG = BG, OG = C1;
function IG(a) {
  var r = this.__data__, o = OG(r, a);
  return o < 0 ? void 0 : r[o][1];
}
var PG = IG, EG = C1;
function kG(a) {
  return EG(this.__data__, a) > -1;
}
var FG = kG, DG = C1;
function RG(a, r) {
  var o = this.__data__, d = DG(o, a);
  return d < 0 ? (++this.size, o.push([a, r])) : o[d][1] = r, this;
}
var qG = RG, NG = bG, UG = TG, jG = PG, WG = FG, GG = qG;
function O0(a) {
  var r = -1, o = a == null ? 0 : a.length;
  for (this.clear(); ++r < o; ) {
    var d = a[r];
    this.set(d[0], d[1]);
  }
}
O0.prototype.clear = NG;
O0.prototype.delete = UG;
O0.prototype.get = jG;
O0.prototype.has = WG;
O0.prototype.set = GG;
var b1 = O0, KG = b1;
function ZG() {
  this.__data__ = new KG(), this.size = 0;
}
var YG = ZG;
function JG(a) {
  var r = this.__data__, o = r.delete(a);
  return this.size = r.size, o;
}
var XG = JG;
function QG(a) {
  return this.__data__.get(a);
}
var eK = QG;
function nK(a) {
  return this.__data__.has(a);
}
var aK = nK, tK = typeof D2 == "object" && D2 && D2.Object === Object && D2, H3 = tK, oK = H3, rK = typeof self == "object" && self && self.Object === Object && self, cK = oK || rK || Function("return this")(), V2 = cK, dK = V2, lK = dK.Symbol, zt = lK, Lr = zt, A3 = Object.prototype, iK = A3.hasOwnProperty, sK = A3.toString, sn = Lr ? Lr.toStringTag : void 0;
function _K(a) {
  var r = iK.call(a, sn), o = a[sn];
  try {
    a[sn] = void 0;
    var d = !0;
  } catch {
  }
  var l = sK.call(a);
  return d && (r ? a[sn] = o : delete a[sn]), l;
}
var uK = _K, mK = Object.prototype, hK = mK.toString;
function vK(a) {
  return hK.call(a);
}
var pK = vK, Sr = zt, fK = uK, gK = pK, wK = "[object Null]", $K = "[object Undefined]", Br = Sr ? Sr.toStringTag : void 0;
function xK(a) {
  return a == null ? a === void 0 ? $K : wK : Br && Br in Object(a) ? fK(a) : gK(a);
}
var M1 = xK;
function yK(a) {
  var r = typeof a;
  return a != null && (r == "object" || r == "function");
}
var fn = yK, zK = M1, CK = fn, bK = "[object AsyncFunction]", MK = "[object Function]", HK = "[object GeneratorFunction]", AK = "[object Proxy]";
function VK(a) {
  if (!CK(a))
    return !1;
  var r = zK(a);
  return r == MK || r == HK || r == bK || r == AK;
}
var V3 = VK, LK = V2, SK = LK["__core-js_shared__"], BK = SK, Xa = BK, Tr = function() {
  var a = /[^.]+$/.exec(Xa && Xa.keys && Xa.keys.IE_PROTO || "");
  return a ? "Symbol(src)_1." + a : "";
}();
function TK(a) {
  return !!Tr && Tr in a;
}
var OK = TK, IK = Function.prototype, PK = IK.toString;
function EK(a) {
  if (a != null) {
    try {
      return PK.call(a);
    } catch {
    }
    try {
      return a + "";
    } catch {
    }
  }
  return "";
}
var L3 = EK, kK = V3, FK = OK, DK = fn, RK = L3, qK = /[\\^$.*+?()[\]{}|]/g, NK = /^\[object .+?Constructor\]$/, UK = Function.prototype, jK = Object.prototype, WK = UK.toString, GK = jK.hasOwnProperty, KK = RegExp(
  "^" + WK.call(GK).replace(qK, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ZK(a) {
  if (!DK(a) || FK(a))
    return !1;
  var r = kK(a) ? KK : NK;
  return r.test(RK(a));
}
var YK = ZK;
function JK(a, r) {
  return a == null ? void 0 : a[r];
}
var XK = JK, QK = YK, eZ = XK;
function nZ(a, r) {
  var o = eZ(a, r);
  return QK(o) ? o : void 0;
}
var u0 = nZ, aZ = u0, tZ = V2, oZ = aZ(tZ, "Map"), Ct = oZ, rZ = u0, cZ = rZ(Object, "create"), H1 = cZ, Or = H1;
function dZ() {
  this.__data__ = Or ? Or(null) : {}, this.size = 0;
}
var lZ = dZ;
function iZ(a) {
  var r = this.has(a) && delete this.__data__[a];
  return this.size -= r ? 1 : 0, r;
}
var sZ = iZ, _Z = H1, uZ = "__lodash_hash_undefined__", mZ = Object.prototype, hZ = mZ.hasOwnProperty;
function vZ(a) {
  var r = this.__data__;
  if (_Z) {
    var o = r[a];
    return o === uZ ? void 0 : o;
  }
  return hZ.call(r, a) ? r[a] : void 0;
}
var pZ = vZ, fZ = H1, gZ = Object.prototype, wZ = gZ.hasOwnProperty;
function $Z(a) {
  var r = this.__data__;
  return fZ ? r[a] !== void 0 : wZ.call(r, a);
}
var xZ = $Z, yZ = H1, zZ = "__lodash_hash_undefined__";
function CZ(a, r) {
  var o = this.__data__;
  return this.size += this.has(a) ? 0 : 1, o[a] = yZ && r === void 0 ? zZ : r, this;
}
var bZ = CZ, MZ = lZ, HZ = sZ, AZ = pZ, VZ = xZ, LZ = bZ;
function I0(a) {
  var r = -1, o = a == null ? 0 : a.length;
  for (this.clear(); ++r < o; ) {
    var d = a[r];
    this.set(d[0], d[1]);
  }
}
I0.prototype.clear = MZ;
I0.prototype.delete = HZ;
I0.prototype.get = AZ;
I0.prototype.has = VZ;
I0.prototype.set = LZ;
var SZ = I0, Ir = SZ, BZ = b1, TZ = Ct;
function OZ() {
  this.size = 0, this.__data__ = {
    hash: new Ir(),
    map: new (TZ || BZ)(),
    string: new Ir()
  };
}
var IZ = OZ;
function PZ(a) {
  var r = typeof a;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? a !== "__proto__" : a === null;
}
var EZ = PZ, kZ = EZ;
function FZ(a, r) {
  var o = a.__data__;
  return kZ(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map;
}
var A1 = FZ, DZ = A1;
function RZ(a) {
  var r = DZ(this, a).delete(a);
  return this.size -= r ? 1 : 0, r;
}
var qZ = RZ, NZ = A1;
function UZ(a) {
  return NZ(this, a).get(a);
}
var jZ = UZ, WZ = A1;
function GZ(a) {
  return WZ(this, a).has(a);
}
var KZ = GZ, ZZ = A1;
function YZ(a, r) {
  var o = ZZ(this, a), d = o.size;
  return o.set(a, r), this.size += o.size == d ? 0 : 1, this;
}
var JZ = YZ, XZ = IZ, QZ = qZ, eY = jZ, nY = KZ, aY = JZ;
function P0(a) {
  var r = -1, o = a == null ? 0 : a.length;
  for (this.clear(); ++r < o; ) {
    var d = a[r];
    this.set(d[0], d[1]);
  }
}
P0.prototype.clear = XZ;
P0.prototype.delete = QZ;
P0.prototype.get = eY;
P0.prototype.has = nY;
P0.prototype.set = aY;
var tY = P0, oY = b1, rY = Ct, cY = tY, dY = 200;
function lY(a, r) {
  var o = this.__data__;
  if (o instanceof oY) {
    var d = o.__data__;
    if (!rY || d.length < dY - 1)
      return d.push([a, r]), this.size = ++o.size, this;
    o = this.__data__ = new cY(d);
  }
  return o.set(a, r), this.size = o.size, this;
}
var iY = lY, sY = b1, _Y = YG, uY = XG, mY = eK, hY = aK, vY = iY;
function E0(a) {
  var r = this.__data__ = new sY(a);
  this.size = r.size;
}
E0.prototype.clear = _Y;
E0.prototype.delete = uY;
E0.prototype.get = mY;
E0.prototype.has = hY;
E0.prototype.set = vY;
var pY = E0;
function fY(a, r) {
  for (var o = -1, d = a == null ? 0 : a.length; ++o < d && r(a[o], o, a) !== !1; )
    ;
  return a;
}
var gY = fY, wY = u0, $Y = function() {
  try {
    var a = wY(Object, "defineProperty");
    return a({}, "", {}), a;
  } catch {
  }
}(), xY = $Y, Pr = xY;
function yY(a, r, o) {
  r == "__proto__" && Pr ? Pr(a, r, {
    configurable: !0,
    enumerable: !0,
    value: o,
    writable: !0
  }) : a[r] = o;
}
var S3 = yY, zY = S3, CY = M3, bY = Object.prototype, MY = bY.hasOwnProperty;
function HY(a, r, o) {
  var d = a[r];
  (!(MY.call(a, r) && CY(d, o)) || o === void 0 && !(r in a)) && zY(a, r, o);
}
var B3 = HY, AY = B3, VY = S3;
function LY(a, r, o, d) {
  var l = !o;
  o || (o = {});
  for (var s = -1, x = r.length; ++s < x; ) {
    var H = r[s], S = d ? d(o[H], a[H], H, o, a) : void 0;
    S === void 0 && (S = a[H]), l ? VY(o, H, S) : AY(o, H, S);
  }
  return o;
}
var V1 = LY;
function SY(a, r) {
  for (var o = -1, d = Array(a); ++o < a; )
    d[o] = r(o);
  return d;
}
var BY = SY;
function TY(a) {
  return a != null && typeof a == "object";
}
var gn = TY, OY = M1, IY = gn, PY = "[object Arguments]";
function EY(a) {
  return IY(a) && OY(a) == PY;
}
var kY = EY, Er = kY, FY = gn, T3 = Object.prototype, DY = T3.hasOwnProperty, RY = T3.propertyIsEnumerable, qY = Er(function() {
  return arguments;
}()) ? Er : function(a) {
  return FY(a) && DY.call(a, "callee") && !RY.call(a, "callee");
}, NY = qY, UY = Array.isArray, bt = UY, p1 = { exports: {} };
function jY() {
  return !1;
}
var WY = jY;
p1.exports;
(function(a, r) {
  var o = V2, d = WY, l = r && !r.nodeType && r, s = l && !0 && a && !a.nodeType && a, x = s && s.exports === l, H = x ? o.Buffer : void 0, S = H ? H.isBuffer : void 0, A = S || d;
  a.exports = A;
})(p1, p1.exports);
var O3 = p1.exports, GY = 9007199254740991, KY = /^(?:0|[1-9]\d*)$/;
function ZY(a, r) {
  var o = typeof a;
  return r = r ?? GY, !!r && (o == "number" || o != "symbol" && KY.test(a)) && a > -1 && a % 1 == 0 && a < r;
}
var YY = ZY, JY = 9007199254740991;
function XY(a) {
  return typeof a == "number" && a > -1 && a % 1 == 0 && a <= JY;
}
var I3 = XY, QY = M1, eJ = I3, nJ = gn, aJ = "[object Arguments]", tJ = "[object Array]", oJ = "[object Boolean]", rJ = "[object Date]", cJ = "[object Error]", dJ = "[object Function]", lJ = "[object Map]", iJ = "[object Number]", sJ = "[object Object]", _J = "[object RegExp]", uJ = "[object Set]", mJ = "[object String]", hJ = "[object WeakMap]", vJ = "[object ArrayBuffer]", pJ = "[object DataView]", fJ = "[object Float32Array]", gJ = "[object Float64Array]", wJ = "[object Int8Array]", $J = "[object Int16Array]", xJ = "[object Int32Array]", yJ = "[object Uint8Array]", zJ = "[object Uint8ClampedArray]", CJ = "[object Uint16Array]", bJ = "[object Uint32Array]", $e = {};
$e[fJ] = $e[gJ] = $e[wJ] = $e[$J] = $e[xJ] = $e[yJ] = $e[zJ] = $e[CJ] = $e[bJ] = !0;
$e[aJ] = $e[tJ] = $e[vJ] = $e[oJ] = $e[pJ] = $e[rJ] = $e[cJ] = $e[dJ] = $e[lJ] = $e[iJ] = $e[sJ] = $e[_J] = $e[uJ] = $e[mJ] = $e[hJ] = !1;
function MJ(a) {
  return nJ(a) && eJ(a.length) && !!$e[QY(a)];
}
var HJ = MJ;
function AJ(a) {
  return function(r) {
    return a(r);
  };
}
var Mt = AJ, f1 = { exports: {} };
f1.exports;
(function(a, r) {
  var o = H3, d = r && !r.nodeType && r, l = d && !0 && a && !a.nodeType && a, s = l && l.exports === d, x = s && o.process, H = function() {
    try {
      var S = l && l.require && l.require("util").types;
      return S || x && x.binding && x.binding("util");
    } catch {
    }
  }();
  a.exports = H;
})(f1, f1.exports);
var Ht = f1.exports, VJ = HJ, LJ = Mt, kr = Ht, Fr = kr && kr.isTypedArray, SJ = Fr ? LJ(Fr) : VJ, BJ = SJ, TJ = BY, OJ = NY, IJ = bt, PJ = O3, EJ = YY, kJ = BJ, FJ = Object.prototype, DJ = FJ.hasOwnProperty;
function RJ(a, r) {
  var o = IJ(a), d = !o && OJ(a), l = !o && !d && PJ(a), s = !o && !d && !l && kJ(a), x = o || d || l || s, H = x ? TJ(a.length, String) : [], S = H.length;
  for (var A in a)
    (r || DJ.call(a, A)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
    (A == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    l && (A == "offset" || A == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (A == "buffer" || A == "byteLength" || A == "byteOffset") || // Skip index properties.
    EJ(A, S))) && H.push(A);
  return H;
}
var P3 = RJ, qJ = Object.prototype;
function NJ(a) {
  var r = a && a.constructor, o = typeof r == "function" && r.prototype || qJ;
  return a === o;
}
var At = NJ;
function UJ(a, r) {
  return function(o) {
    return a(r(o));
  };
}
var E3 = UJ, jJ = E3, WJ = jJ(Object.keys, Object), GJ = WJ, KJ = At, ZJ = GJ, YJ = Object.prototype, JJ = YJ.hasOwnProperty;
function XJ(a) {
  if (!KJ(a))
    return ZJ(a);
  var r = [];
  for (var o in Object(a))
    JJ.call(a, o) && o != "constructor" && r.push(o);
  return r;
}
var QJ = XJ, eX = V3, nX = I3;
function aX(a) {
  return a != null && nX(a.length) && !eX(a);
}
var k3 = aX, tX = P3, oX = QJ, rX = k3;
function cX(a) {
  return rX(a) ? tX(a) : oX(a);
}
var Vt = cX, dX = V1, lX = Vt;
function iX(a, r) {
  return a && dX(r, lX(r), a);
}
var sX = iX;
function _X(a) {
  var r = [];
  if (a != null)
    for (var o in Object(a))
      r.push(o);
  return r;
}
var uX = _X, mX = fn, hX = At, vX = uX, pX = Object.prototype, fX = pX.hasOwnProperty;
function gX(a) {
  if (!mX(a))
    return vX(a);
  var r = hX(a), o = [];
  for (var d in a)
    d == "constructor" && (r || !fX.call(a, d)) || o.push(d);
  return o;
}
var wX = gX, $X = P3, xX = wX, yX = k3;
function zX(a) {
  return yX(a) ? $X(a, !0) : xX(a);
}
var Lt = zX, CX = V1, bX = Lt;
function MX(a, r) {
  return a && CX(r, bX(r), a);
}
var HX = MX, g1 = { exports: {} };
g1.exports;
(function(a, r) {
  var o = V2, d = r && !r.nodeType && r, l = d && !0 && a && !a.nodeType && a, s = l && l.exports === d, x = s ? o.Buffer : void 0, H = x ? x.allocUnsafe : void 0;
  function S(A, P) {
    if (P)
      return A.slice();
    var I = A.length, Y = H ? H(I) : new A.constructor(I);
    return A.copy(Y), Y;
  }
  a.exports = S;
})(g1, g1.exports);
var AX = g1.exports;
function VX(a, r) {
  var o = -1, d = a.length;
  for (r || (r = Array(d)); ++o < d; )
    r[o] = a[o];
  return r;
}
var LX = VX;
function SX(a, r) {
  for (var o = -1, d = a == null ? 0 : a.length, l = 0, s = []; ++o < d; ) {
    var x = a[o];
    r(x, o, a) && (s[l++] = x);
  }
  return s;
}
var BX = SX;
function TX() {
  return [];
}
var F3 = TX, OX = BX, IX = F3, PX = Object.prototype, EX = PX.propertyIsEnumerable, Dr = Object.getOwnPropertySymbols, kX = Dr ? function(a) {
  return a == null ? [] : (a = Object(a), OX(Dr(a), function(r) {
    return EX.call(a, r);
  }));
} : IX, St = kX, FX = V1, DX = St;
function RX(a, r) {
  return FX(a, DX(a), r);
}
var qX = RX;
function NX(a, r) {
  for (var o = -1, d = r.length, l = a.length; ++o < d; )
    a[l + o] = r[o];
  return a;
}
var D3 = NX, UX = E3, jX = UX(Object.getPrototypeOf, Object), R3 = jX, WX = D3, GX = R3, KX = St, ZX = F3, YX = Object.getOwnPropertySymbols, JX = YX ? function(a) {
  for (var r = []; a; )
    WX(r, KX(a)), a = GX(a);
  return r;
} : ZX, q3 = JX, XX = V1, QX = q3;
function eQ(a, r) {
  return XX(a, QX(a), r);
}
var nQ = eQ, aQ = D3, tQ = bt;
function oQ(a, r, o) {
  var d = r(a);
  return tQ(a) ? d : aQ(d, o(a));
}
var N3 = oQ, rQ = N3, cQ = St, dQ = Vt;
function lQ(a) {
  return rQ(a, dQ, cQ);
}
var iQ = lQ, sQ = N3, _Q = q3, uQ = Lt;
function mQ(a) {
  return sQ(a, uQ, _Q);
}
var hQ = mQ, vQ = u0, pQ = V2, fQ = vQ(pQ, "DataView"), gQ = fQ, wQ = u0, $Q = V2, xQ = wQ($Q, "Promise"), yQ = xQ, zQ = u0, CQ = V2, bQ = zQ(CQ, "Set"), MQ = bQ, HQ = u0, AQ = V2, VQ = HQ(AQ, "WeakMap"), LQ = VQ, tt = gQ, ot = Ct, rt = yQ, ct = MQ, dt = LQ, U3 = M1, k0 = L3, Rr = "[object Map]", SQ = "[object Object]", qr = "[object Promise]", Nr = "[object Set]", Ur = "[object WeakMap]", jr = "[object DataView]", BQ = k0(tt), TQ = k0(ot), OQ = k0(rt), IQ = k0(ct), PQ = k0(dt), l0 = U3;
(tt && l0(new tt(new ArrayBuffer(1))) != jr || ot && l0(new ot()) != Rr || rt && l0(rt.resolve()) != qr || ct && l0(new ct()) != Nr || dt && l0(new dt()) != Ur) && (l0 = function(a) {
  var r = U3(a), o = r == SQ ? a.constructor : void 0, d = o ? k0(o) : "";
  if (d)
    switch (d) {
      case BQ:
        return jr;
      case TQ:
        return Rr;
      case OQ:
        return qr;
      case IQ:
        return Nr;
      case PQ:
        return Ur;
    }
  return r;
});
var Bt = l0, EQ = Object.prototype, kQ = EQ.hasOwnProperty;
function FQ(a) {
  var r = a.length, o = new a.constructor(r);
  return r && typeof a[0] == "string" && kQ.call(a, "index") && (o.index = a.index, o.input = a.input), o;
}
var DQ = FQ, RQ = V2, qQ = RQ.Uint8Array, NQ = qQ, Wr = NQ;
function UQ(a) {
  var r = new a.constructor(a.byteLength);
  return new Wr(r).set(new Wr(a)), r;
}
var Tt = UQ, jQ = Tt;
function WQ(a, r) {
  var o = r ? jQ(a.buffer) : a.buffer;
  return new a.constructor(o, a.byteOffset, a.byteLength);
}
var GQ = WQ, KQ = /\w*$/;
function ZQ(a) {
  var r = new a.constructor(a.source, KQ.exec(a));
  return r.lastIndex = a.lastIndex, r;
}
var YQ = ZQ, Gr = zt, Kr = Gr ? Gr.prototype : void 0, Zr = Kr ? Kr.valueOf : void 0;
function JQ(a) {
  return Zr ? Object(Zr.call(a)) : {};
}
var XQ = JQ, QQ = Tt;
function eee(a, r) {
  var o = r ? QQ(a.buffer) : a.buffer;
  return new a.constructor(o, a.byteOffset, a.length);
}
var nee = eee, aee = Tt, tee = GQ, oee = YQ, ree = XQ, cee = nee, dee = "[object Boolean]", lee = "[object Date]", iee = "[object Map]", see = "[object Number]", _ee = "[object RegExp]", uee = "[object Set]", mee = "[object String]", hee = "[object Symbol]", vee = "[object ArrayBuffer]", pee = "[object DataView]", fee = "[object Float32Array]", gee = "[object Float64Array]", wee = "[object Int8Array]", $ee = "[object Int16Array]", xee = "[object Int32Array]", yee = "[object Uint8Array]", zee = "[object Uint8ClampedArray]", Cee = "[object Uint16Array]", bee = "[object Uint32Array]";
function Mee(a, r, o) {
  var d = a.constructor;
  switch (r) {
    case vee:
      return aee(a);
    case dee:
    case lee:
      return new d(+a);
    case pee:
      return tee(a, o);
    case fee:
    case gee:
    case wee:
    case $ee:
    case xee:
    case yee:
    case zee:
    case Cee:
    case bee:
      return cee(a, o);
    case iee:
      return new d();
    case see:
    case mee:
      return new d(a);
    case _ee:
      return oee(a);
    case uee:
      return new d();
    case hee:
      return ree(a);
  }
}
var Hee = Mee, Aee = fn, Yr = Object.create, Vee = function() {
  function a() {
  }
  return function(r) {
    if (!Aee(r))
      return {};
    if (Yr)
      return Yr(r);
    a.prototype = r;
    var o = new a();
    return a.prototype = void 0, o;
  };
}(), Lee = Vee, See = Lee, Bee = R3, Tee = At;
function Oee(a) {
  return typeof a.constructor == "function" && !Tee(a) ? See(Bee(a)) : {};
}
var Iee = Oee, Pee = Bt, Eee = gn, kee = "[object Map]";
function Fee(a) {
  return Eee(a) && Pee(a) == kee;
}
var Dee = Fee, Ree = Dee, qee = Mt, Jr = Ht, Xr = Jr && Jr.isMap, Nee = Xr ? qee(Xr) : Ree, Uee = Nee, jee = Bt, Wee = gn, Gee = "[object Set]";
function Kee(a) {
  return Wee(a) && jee(a) == Gee;
}
var Zee = Kee, Yee = Zee, Jee = Mt, Qr = Ht, e3 = Qr && Qr.isSet, Xee = e3 ? Jee(e3) : Yee, Qee = Xee, e2e = pY, n2e = gY, a2e = B3, t2e = sX, o2e = HX, r2e = AX, c2e = LX, d2e = qX, l2e = nQ, i2e = iQ, s2e = hQ, _2e = Bt, u2e = DQ, m2e = Hee, h2e = Iee, v2e = bt, p2e = O3, f2e = Uee, g2e = fn, w2e = Qee, $2e = Vt, x2e = Lt, y2e = 1, z2e = 2, C2e = 4, j3 = "[object Arguments]", b2e = "[object Array]", M2e = "[object Boolean]", H2e = "[object Date]", A2e = "[object Error]", W3 = "[object Function]", V2e = "[object GeneratorFunction]", L2e = "[object Map]", S2e = "[object Number]", G3 = "[object Object]", B2e = "[object RegExp]", T2e = "[object Set]", O2e = "[object String]", I2e = "[object Symbol]", P2e = "[object WeakMap]", E2e = "[object ArrayBuffer]", k2e = "[object DataView]", F2e = "[object Float32Array]", D2e = "[object Float64Array]", R2e = "[object Int8Array]", q2e = "[object Int16Array]", N2e = "[object Int32Array]", U2e = "[object Uint8Array]", j2e = "[object Uint8ClampedArray]", W2e = "[object Uint16Array]", G2e = "[object Uint32Array]", fe = {};
fe[j3] = fe[b2e] = fe[E2e] = fe[k2e] = fe[M2e] = fe[H2e] = fe[F2e] = fe[D2e] = fe[R2e] = fe[q2e] = fe[N2e] = fe[L2e] = fe[S2e] = fe[G3] = fe[B2e] = fe[T2e] = fe[O2e] = fe[I2e] = fe[U2e] = fe[j2e] = fe[W2e] = fe[G2e] = !0;
fe[A2e] = fe[W3] = fe[P2e] = !1;
function h1(a, r, o, d, l, s) {
  var x, H = r & y2e, S = r & z2e, A = r & C2e;
  if (o && (x = l ? o(a, d, l, s) : o(a)), x !== void 0)
    return x;
  if (!g2e(a))
    return a;
  var P = v2e(a);
  if (P) {
    if (x = u2e(a), !H)
      return c2e(a, x);
  } else {
    var I = _2e(a), Y = I == W3 || I == V2e;
    if (p2e(a))
      return r2e(a, H);
    if (I == G3 || I == j3 || Y && !l) {
      if (x = S || Y ? {} : h2e(a), !H)
        return S ? l2e(a, o2e(x, a)) : d2e(a, t2e(x, a));
    } else {
      if (!fe[I])
        return l ? a : {};
      x = m2e(a, I, H);
    }
  }
  s || (s = new e2e());
  var D = s.get(a);
  if (D)
    return D;
  s.set(a, x), w2e(a) ? a.forEach(function(B) {
    x.add(h1(B, r, o, B, a, s));
  }) : f2e(a) && a.forEach(function(B, V) {
    x.set(V, h1(B, r, o, V, a, s));
  });
  var te = A ? S ? s2e : i2e : S ? x2e : $2e, k = P ? void 0 : te(a);
  return n2e(k || a, function(B, V) {
    k && (V = B, B = a[V]), a2e(x, V, h1(B, r, o, V, a, s));
  }), x;
}
var K2e = h1, Z2e = K2e, Y2e = 1, J2e = 4;
function X2e(a) {
  return Z2e(a, Y2e | J2e);
}
var Q2e = X2e;
const n3 = /* @__PURE__ */ eW(Q2e), e0e = /* @__PURE__ */ Se({
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
  setup(a, { emit: r }) {
    const o = a, d = Q(null), l = Q(null), s = () => {
      if (o.options && o.options.length) {
        const V = {}, T = {};
        o.options.map((oe) => {
          V[oe.prop] = oe.value, T[oe.prop] = oe.rules;
        }), d.value = n3(V), l.value = n3(T);
      }
    }, x = r, H = (V) => {
      x("on-preview", V);
    }, S = (V, T) => {
      x("on-remove", {
        uploadFile: V,
        uploadFiles: T
      });
    }, A = (V, T, oe) => {
      const ge = o.options.find((he) => he.type === "upload");
      d.value[ge == null ? void 0 : ge.prop] = { response: V, uploadFile: T, uploadFiles: oe }, x("on-success", {
        response: V,
        uploadFile: T,
        uploadFiles: oe
      });
    }, P = (V, T, oe) => {
      x("on-error", {
        error: V,
        uploadFile: T,
        uploadFiles: oe
      });
    }, I = (V, T, oe) => {
      x("on-progress", {
        evt: V,
        uploadFile: T,
        uploadFiles: oe
      });
    }, Y = (V, T) => {
      x("on-change", {
        uploadFile: V,
        uploadFiles: T
      });
    }, D = (V, T) => {
      x("on-exceed", {
        files: V,
        uploadFiles: T
      });
    }, te = (V) => {
      x("before-upload", V);
    }, k = (V, T) => {
      x("before-remove", {
        uploadFile: V,
        uploadFiles: T
      });
    }, B = Q();
    return B0(() => {
      s();
    }), Re(
      () => o.options,
      () => {
        s();
      },
      { deep: !0 }
    ), (V, T) => {
      const oe = ee("el-upload"), ge = ee("el-form-item"), he = ee("el-form");
      return d.value ? (u(), ne(he, r2({
        key: 0,
        ref_key: "form",
        ref: B,
        "validate-on-rule-change": !1
      }, V.$attrs, {
        model: d.value,
        rules: l.value
      }), {
        default: U(() => [
          (u(!0), m(
            le,
            null,
            Ve(a.options, (re, J) => (u(), m(
              le,
              { key: J },
              [
                !re.children || !re.children.length ? (u(), ne(ge, {
                  key: 0,
                  label: re.label,
                  prop: re.prop
                }, {
                  default: U(() => [
                    re.type !== "upload" && re.type !== "editor" ? (u(), ne(c2(`el-${re.type}`), r2({ key: 0 }, re.attrs, {
                      modelValue: d.value[re.prop],
                      "onUpdate:modelValue": (ze) => d.value[re.prop] = ze,
                      placeholder: re.placeholder
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder"])) : _e("v-if", !0),
                    re.type === "upload" ? (u(), ne(oe, r2({ key: 1 }, re.uploadAttrs, {
                      "on-preview": H,
                      "on-remove": S,
                      "on-success": A,
                      "on-error": P,
                      "on-progress": I,
                      "on-change": Y,
                      "on-exceed": D,
                      "before-upload": te,
                      "before-remove": k,
                      "http-request": a.httpRequest
                    }), {
                      tip: U(() => [
                        Xe(V.$slots, "uploadTip")
                      ]),
                      default: U(() => [
                        Xe(V.$slots, "uploadArea")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["http-request"])) : _e("v-if", !0)
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["label", "prop"])) : _e("v-if", !0),
                re.children && re.children.length ? (u(), ne(ge, {
                  key: 1,
                  label: re.label,
                  prop: re.prop
                }, {
                  default: U(() => [
                    (u(), ne(c2(`el-${re.type}`), r2(re.attrs, {
                      modelValue: d.value[re.prop],
                      "onUpdate:modelValue": (ze) => d.value[re.prop] = ze,
                      placeholder: re.placeholder
                    }), {
                      default: U(() => [
                        (u(!0), m(
                          le,
                          null,
                          Ve(re.children, (ze, v2) => (u(), ne(c2(`el-${ze.type}`), {
                            key: v2,
                            label: ze.label,
                            value: ze.value
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
                }, 1032, ["label", "prop"])) : _e("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          j(ge, null, {
            default: U(() => [
              Xe(V.$slots, "action", {
                form: B.value,
                model: d.value
              })
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["model", "rules"])) : _e("v-if", !0);
    };
  }
}), n0e = {
  install(a) {
    a.component("m-form", e0e);
  }
};
var w1 = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
w1.exports;
(function(a, r) {
  (function() {
    var o, d = "4.17.21", l = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", x = "Expected a function", H = "Invalid `variable` option passed into `_.template`", S = "__lodash_hash_undefined__", A = 500, P = "__lodash_placeholder__", I = 1, Y = 2, D = 4, te = 1, k = 2, B = 1, V = 2, T = 4, oe = 8, ge = 16, he = 32, re = 64, J = 128, ze = 256, v2 = 512, F0 = 30, Ce = "...", ke = 800, We = 16, be = 1, m0 = 2, Ie = 3, qe = 1 / 0, R2 = 9007199254740991, K3 = 17976931348623157e292, wn = 0 / 0, z2 = 4294967295, Z3 = z2 - 1, Y3 = z2 >>> 1, J3 = [
      ["ary", J],
      ["bind", B],
      ["bindKey", V],
      ["curry", oe],
      ["curryRight", ge],
      ["flip", v2],
      ["partial", he],
      ["partialRight", re],
      ["rearg", ze]
    ], h0 = "[object Arguments]", $n = "[object Array]", X3 = "[object AsyncFunction]", D0 = "[object Boolean]", R0 = "[object Date]", Q3 = "[object DOMException]", xn = "[object Error]", yn = "[object Function]", Ot = "[object GeneratorFunction]", p2 = "[object Map]", q0 = "[object Number]", e6 = "[object Null]", L2 = "[object Object]", It = "[object Promise]", n6 = "[object Proxy]", N0 = "[object RegExp]", f2 = "[object Set]", U0 = "[object String]", zn = "[object Symbol]", a6 = "[object Undefined]", j0 = "[object WeakMap]", t6 = "[object WeakSet]", W0 = "[object ArrayBuffer]", v0 = "[object DataView]", L1 = "[object Float32Array]", S1 = "[object Float64Array]", B1 = "[object Int8Array]", T1 = "[object Int16Array]", O1 = "[object Int32Array]", I1 = "[object Uint8Array]", P1 = "[object Uint8ClampedArray]", E1 = "[object Uint16Array]", k1 = "[object Uint32Array]", o6 = /\b__p \+= '';/g, r6 = /\b(__p \+=) '' \+/g, c6 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Pt = /&(?:amp|lt|gt|quot|#39);/g, Et = /[&<>"']/g, d6 = RegExp(Pt.source), l6 = RegExp(Et.source), i6 = /<%-([\s\S]+?)%>/g, s6 = /<%([\s\S]+?)%>/g, kt = /<%=([\s\S]+?)%>/g, _6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, u6 = /^\w*$/, m6 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, F1 = /[\\^$.*+?()[\]{}|]/g, h6 = RegExp(F1.source), D1 = /^\s+/, v6 = /\s/, p6 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, f6 = /\{\n\/\* \[wrapped with (.+)\] \*/, g6 = /,? & /, w6 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, $6 = /[()=,{}\[\]\/\s]/, x6 = /\\(\\)?/g, y6 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ft = /\w*$/, z6 = /^[-+]0x[0-9a-f]+$/i, C6 = /^0b[01]+$/i, b6 = /^\[object .+?Constructor\]$/, M6 = /^0o[0-7]+$/i, H6 = /^(?:0|[1-9]\d*)$/, A6 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Cn = /($^)/, V6 = /['\n\r\u2028\u2029\\]/g, bn = "\\ud800-\\udfff", L6 = "\\u0300-\\u036f", S6 = "\\ufe20-\\ufe2f", B6 = "\\u20d0-\\u20ff", Dt = L6 + S6 + B6, Rt = "\\u2700-\\u27bf", qt = "a-z\\xdf-\\xf6\\xf8-\\xff", T6 = "\\xac\\xb1\\xd7\\xf7", O6 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", I6 = "\\u2000-\\u206f", P6 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Nt = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ut = "\\ufe0e\\ufe0f", jt = T6 + O6 + I6 + P6, R1 = "['’]", E6 = "[" + bn + "]", Wt = "[" + jt + "]", Mn = "[" + Dt + "]", Gt = "\\d+", k6 = "[" + Rt + "]", Kt = "[" + qt + "]", Zt = "[^" + bn + jt + Gt + Rt + qt + Nt + "]", q1 = "\\ud83c[\\udffb-\\udfff]", F6 = "(?:" + Mn + "|" + q1 + ")", Yt = "[^" + bn + "]", N1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", U1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", p0 = "[" + Nt + "]", Jt = "\\u200d", Xt = "(?:" + Kt + "|" + Zt + ")", D6 = "(?:" + p0 + "|" + Zt + ")", Qt = "(?:" + R1 + "(?:d|ll|m|re|s|t|ve))?", e4 = "(?:" + R1 + "(?:D|LL|M|RE|S|T|VE))?", n4 = F6 + "?", a4 = "[" + Ut + "]?", R6 = "(?:" + Jt + "(?:" + [Yt, N1, U1].join("|") + ")" + a4 + n4 + ")*", q6 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", N6 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", t4 = a4 + n4 + R6, U6 = "(?:" + [k6, N1, U1].join("|") + ")" + t4, j6 = "(?:" + [Yt + Mn + "?", Mn, N1, U1, E6].join("|") + ")", W6 = RegExp(R1, "g"), G6 = RegExp(Mn, "g"), j1 = RegExp(q1 + "(?=" + q1 + ")|" + j6 + t4, "g"), K6 = RegExp([
      p0 + "?" + Kt + "+" + Qt + "(?=" + [Wt, p0, "$"].join("|") + ")",
      D6 + "+" + e4 + "(?=" + [Wt, p0 + Xt, "$"].join("|") + ")",
      p0 + "?" + Xt + "+" + Qt,
      p0 + "+" + e4,
      N6,
      q6,
      Gt,
      U6
    ].join("|"), "g"), Z6 = RegExp("[" + Jt + bn + Dt + Ut + "]"), Y6 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, J6 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], X6 = -1, we = {};
    we[L1] = we[S1] = we[B1] = we[T1] = we[O1] = we[I1] = we[P1] = we[E1] = we[k1] = !0, we[h0] = we[$n] = we[W0] = we[D0] = we[v0] = we[R0] = we[xn] = we[yn] = we[p2] = we[q0] = we[L2] = we[N0] = we[f2] = we[U0] = we[j0] = !1;
    var pe = {};
    pe[h0] = pe[$n] = pe[W0] = pe[v0] = pe[D0] = pe[R0] = pe[L1] = pe[S1] = pe[B1] = pe[T1] = pe[O1] = pe[p2] = pe[q0] = pe[L2] = pe[N0] = pe[f2] = pe[U0] = pe[zn] = pe[I1] = pe[P1] = pe[E1] = pe[k1] = !0, pe[xn] = pe[yn] = pe[j0] = !1;
    var Q6 = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, ec = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, nc = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, ac = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, tc = parseFloat, oc = parseInt, o4 = typeof D2 == "object" && D2 && D2.Object === Object && D2, rc = typeof self == "object" && self && self.Object === Object && self, Pe = o4 || rc || Function("return this")(), W1 = r && !r.nodeType && r, X2 = W1 && !0 && a && !a.nodeType && a, r4 = X2 && X2.exports === W1, G1 = r4 && o4.process, d2 = function() {
      try {
        var w = X2 && X2.require && X2.require("util").types;
        return w || G1 && G1.binding && G1.binding("util");
      } catch {
      }
    }(), c4 = d2 && d2.isArrayBuffer, d4 = d2 && d2.isDate, l4 = d2 && d2.isMap, i4 = d2 && d2.isRegExp, s4 = d2 && d2.isSet, _4 = d2 && d2.isTypedArray;
    function Qe(w, z, y) {
      switch (y.length) {
        case 0:
          return w.call(z);
        case 1:
          return w.call(z, y[0]);
        case 2:
          return w.call(z, y[0], y[1]);
        case 3:
          return w.call(z, y[0], y[1], y[2]);
      }
      return w.apply(z, y);
    }
    function cc(w, z, y, O) {
      for (var W = -1, ie = w == null ? 0 : w.length; ++W < ie; ) {
        var Be = w[W];
        z(O, Be, y(Be), w);
      }
      return O;
    }
    function l2(w, z) {
      for (var y = -1, O = w == null ? 0 : w.length; ++y < O && z(w[y], y, w) !== !1; )
        ;
      return w;
    }
    function dc(w, z) {
      for (var y = w == null ? 0 : w.length; y-- && z(w[y], y, w) !== !1; )
        ;
      return w;
    }
    function u4(w, z) {
      for (var y = -1, O = w == null ? 0 : w.length; ++y < O; )
        if (!z(w[y], y, w))
          return !1;
      return !0;
    }
    function q2(w, z) {
      for (var y = -1, O = w == null ? 0 : w.length, W = 0, ie = []; ++y < O; ) {
        var Be = w[y];
        z(Be, y, w) && (ie[W++] = Be);
      }
      return ie;
    }
    function Hn(w, z) {
      var y = w == null ? 0 : w.length;
      return !!y && f0(w, z, 0) > -1;
    }
    function K1(w, z, y) {
      for (var O = -1, W = w == null ? 0 : w.length; ++O < W; )
        if (y(z, w[O]))
          return !0;
      return !1;
    }
    function xe(w, z) {
      for (var y = -1, O = w == null ? 0 : w.length, W = Array(O); ++y < O; )
        W[y] = z(w[y], y, w);
      return W;
    }
    function N2(w, z) {
      for (var y = -1, O = z.length, W = w.length; ++y < O; )
        w[W + y] = z[y];
      return w;
    }
    function Z1(w, z, y, O) {
      var W = -1, ie = w == null ? 0 : w.length;
      for (O && ie && (y = w[++W]); ++W < ie; )
        y = z(y, w[W], W, w);
      return y;
    }
    function lc(w, z, y, O) {
      var W = w == null ? 0 : w.length;
      for (O && W && (y = w[--W]); W--; )
        y = z(y, w[W], W, w);
      return y;
    }
    function Y1(w, z) {
      for (var y = -1, O = w == null ? 0 : w.length; ++y < O; )
        if (z(w[y], y, w))
          return !0;
      return !1;
    }
    var ic = J1("length");
    function sc(w) {
      return w.split("");
    }
    function _c(w) {
      return w.match(w6) || [];
    }
    function m4(w, z, y) {
      var O;
      return y(w, function(W, ie, Be) {
        if (z(W, ie, Be))
          return O = ie, !1;
      }), O;
    }
    function An(w, z, y, O) {
      for (var W = w.length, ie = y + (O ? 1 : -1); O ? ie-- : ++ie < W; )
        if (z(w[ie], ie, w))
          return ie;
      return -1;
    }
    function f0(w, z, y) {
      return z === z ? zc(w, z, y) : An(w, h4, y);
    }
    function uc(w, z, y, O) {
      for (var W = y - 1, ie = w.length; ++W < ie; )
        if (O(w[W], z))
          return W;
      return -1;
    }
    function h4(w) {
      return w !== w;
    }
    function v4(w, z) {
      var y = w == null ? 0 : w.length;
      return y ? Q1(w, z) / y : wn;
    }
    function J1(w) {
      return function(z) {
        return z == null ? o : z[w];
      };
    }
    function X1(w) {
      return function(z) {
        return w == null ? o : w[z];
      };
    }
    function p4(w, z, y, O, W) {
      return W(w, function(ie, Be, ve) {
        y = O ? (O = !1, ie) : z(y, ie, Be, ve);
      }), y;
    }
    function mc(w, z) {
      var y = w.length;
      for (w.sort(z); y--; )
        w[y] = w[y].value;
      return w;
    }
    function Q1(w, z) {
      for (var y, O = -1, W = w.length; ++O < W; ) {
        var ie = z(w[O]);
        ie !== o && (y = y === o ? ie : y + ie);
      }
      return y;
    }
    function ea(w, z) {
      for (var y = -1, O = Array(w); ++y < w; )
        O[y] = z(y);
      return O;
    }
    function hc(w, z) {
      return xe(z, function(y) {
        return [y, w[y]];
      });
    }
    function f4(w) {
      return w && w.slice(0, x4(w) + 1).replace(D1, "");
    }
    function e2(w) {
      return function(z) {
        return w(z);
      };
    }
    function na(w, z) {
      return xe(z, function(y) {
        return w[y];
      });
    }
    function G0(w, z) {
      return w.has(z);
    }
    function g4(w, z) {
      for (var y = -1, O = w.length; ++y < O && f0(z, w[y], 0) > -1; )
        ;
      return y;
    }
    function w4(w, z) {
      for (var y = w.length; y-- && f0(z, w[y], 0) > -1; )
        ;
      return y;
    }
    function vc(w, z) {
      for (var y = w.length, O = 0; y--; )
        w[y] === z && ++O;
      return O;
    }
    var pc = X1(Q6), fc = X1(ec);
    function gc(w) {
      return "\\" + ac[w];
    }
    function wc(w, z) {
      return w == null ? o : w[z];
    }
    function g0(w) {
      return Z6.test(w);
    }
    function $c(w) {
      return Y6.test(w);
    }
    function xc(w) {
      for (var z, y = []; !(z = w.next()).done; )
        y.push(z.value);
      return y;
    }
    function aa(w) {
      var z = -1, y = Array(w.size);
      return w.forEach(function(O, W) {
        y[++z] = [W, O];
      }), y;
    }
    function $4(w, z) {
      return function(y) {
        return w(z(y));
      };
    }
    function U2(w, z) {
      for (var y = -1, O = w.length, W = 0, ie = []; ++y < O; ) {
        var Be = w[y];
        (Be === z || Be === P) && (w[y] = P, ie[W++] = y);
      }
      return ie;
    }
    function Vn(w) {
      var z = -1, y = Array(w.size);
      return w.forEach(function(O) {
        y[++z] = O;
      }), y;
    }
    function yc(w) {
      var z = -1, y = Array(w.size);
      return w.forEach(function(O) {
        y[++z] = [O, O];
      }), y;
    }
    function zc(w, z, y) {
      for (var O = y - 1, W = w.length; ++O < W; )
        if (w[O] === z)
          return O;
      return -1;
    }
    function Cc(w, z, y) {
      for (var O = y + 1; O--; )
        if (w[O] === z)
          return O;
      return O;
    }
    function w0(w) {
      return g0(w) ? Mc(w) : ic(w);
    }
    function g2(w) {
      return g0(w) ? Hc(w) : sc(w);
    }
    function x4(w) {
      for (var z = w.length; z-- && v6.test(w.charAt(z)); )
        ;
      return z;
    }
    var bc = X1(nc);
    function Mc(w) {
      for (var z = j1.lastIndex = 0; j1.test(w); )
        ++z;
      return z;
    }
    function Hc(w) {
      return w.match(j1) || [];
    }
    function Ac(w) {
      return w.match(K6) || [];
    }
    var Vc = function w(z) {
      z = z == null ? Pe : $0.defaults(Pe.Object(), z, $0.pick(Pe, J6));
      var y = z.Array, O = z.Date, W = z.Error, ie = z.Function, Be = z.Math, ve = z.Object, ta = z.RegExp, Lc = z.String, i2 = z.TypeError, Ln = y.prototype, Sc = ie.prototype, x0 = ve.prototype, Sn = z["__core-js_shared__"], Bn = Sc.toString, me = x0.hasOwnProperty, Bc = 0, y4 = function() {
        var e = /[^.]+$/.exec(Sn && Sn.keys && Sn.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Tn = x0.toString, Tc = Bn.call(ve), Oc = Pe._, Ic = ta(
        "^" + Bn.call(me).replace(F1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), On = r4 ? z.Buffer : o, j2 = z.Symbol, In = z.Uint8Array, z4 = On ? On.allocUnsafe : o, Pn = $4(ve.getPrototypeOf, ve), C4 = ve.create, b4 = x0.propertyIsEnumerable, En = Ln.splice, M4 = j2 ? j2.isConcatSpreadable : o, K0 = j2 ? j2.iterator : o, Q2 = j2 ? j2.toStringTag : o, kn = function() {
        try {
          var e = o0(ve, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Pc = z.clearTimeout !== Pe.clearTimeout && z.clearTimeout, Ec = O && O.now !== Pe.Date.now && O.now, kc = z.setTimeout !== Pe.setTimeout && z.setTimeout, Fn = Be.ceil, Dn = Be.floor, oa = ve.getOwnPropertySymbols, Fc = On ? On.isBuffer : o, H4 = z.isFinite, Dc = Ln.join, Rc = $4(ve.keys, ve), Te = Be.max, Fe = Be.min, qc = O.now, Nc = z.parseInt, A4 = Be.random, Uc = Ln.reverse, ra = o0(z, "DataView"), Z0 = o0(z, "Map"), ca = o0(z, "Promise"), y0 = o0(z, "Set"), Y0 = o0(z, "WeakMap"), J0 = o0(ve, "create"), Rn = Y0 && new Y0(), z0 = {}, jc = r0(ra), Wc = r0(Z0), Gc = r0(ca), Kc = r0(y0), Zc = r0(Y0), qn = j2 ? j2.prototype : o, X0 = qn ? qn.valueOf : o, V4 = qn ? qn.toString : o;
      function h(e) {
        if (Me(e) && !G(e) && !(e instanceof ce)) {
          if (e instanceof s2)
            return e;
          if (me.call(e, "__wrapped__"))
            return So(e);
        }
        return new s2(e);
      }
      var C0 = function() {
        function e() {
        }
        return function(n) {
          if (!ye(n))
            return {};
          if (C4)
            return C4(n);
          e.prototype = n;
          var t = new e();
          return e.prototype = o, t;
        };
      }();
      function Nn() {
      }
      function s2(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
      }
      h.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: i6,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: s6,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: kt,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: h
        }
      }, h.prototype = Nn.prototype, h.prototype.constructor = h, s2.prototype = C0(Nn.prototype), s2.prototype.constructor = s2;
      function ce(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = z2, this.__views__ = [];
      }
      function Yc() {
        var e = new ce(this.__wrapped__);
        return e.__actions__ = Ge(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ge(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ge(this.__views__), e;
      }
      function Jc() {
        if (this.__filtered__) {
          var e = new ce(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Xc() {
        var e = this.__wrapped__.value(), n = this.__dir__, t = G(e), c = n < 0, _ = t ? e.length : 0, v = sl(0, _, this.__views__), f = v.start, g = v.end, $ = g - f, C = c ? g : f - 1, b = this.__iteratees__, M = b.length, L = 0, E = Fe($, this.__takeCount__);
        if (!t || !c && _ == $ && E == $)
          return Q4(e, this.__actions__);
        var q = [];
        e:
          for (; $-- && L < E; ) {
            C += n;
            for (var Z = -1, N = e[C]; ++Z < M; ) {
              var ae = b[Z], de = ae.iteratee, t2 = ae.type, je = de(N);
              if (t2 == m0)
                N = je;
              else if (!je) {
                if (t2 == be)
                  continue e;
                break e;
              }
            }
            q[L++] = N;
          }
        return q;
      }
      ce.prototype = C0(Nn.prototype), ce.prototype.constructor = ce;
      function e0(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var c = e[n];
          this.set(c[0], c[1]);
        }
      }
      function Qc() {
        this.__data__ = J0 ? J0(null) : {}, this.size = 0;
      }
      function ed(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function nd(e) {
        var n = this.__data__;
        if (J0) {
          var t = n[e];
          return t === S ? o : t;
        }
        return me.call(n, e) ? n[e] : o;
      }
      function ad(e) {
        var n = this.__data__;
        return J0 ? n[e] !== o : me.call(n, e);
      }
      function td(e, n) {
        var t = this.__data__;
        return this.size += this.has(e) ? 0 : 1, t[e] = J0 && n === o ? S : n, this;
      }
      e0.prototype.clear = Qc, e0.prototype.delete = ed, e0.prototype.get = nd, e0.prototype.has = ad, e0.prototype.set = td;
      function S2(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var c = e[n];
          this.set(c[0], c[1]);
        }
      }
      function od() {
        this.__data__ = [], this.size = 0;
      }
      function rd(e) {
        var n = this.__data__, t = Un(n, e);
        if (t < 0)
          return !1;
        var c = n.length - 1;
        return t == c ? n.pop() : En.call(n, t, 1), --this.size, !0;
      }
      function cd(e) {
        var n = this.__data__, t = Un(n, e);
        return t < 0 ? o : n[t][1];
      }
      function dd(e) {
        return Un(this.__data__, e) > -1;
      }
      function ld(e, n) {
        var t = this.__data__, c = Un(t, e);
        return c < 0 ? (++this.size, t.push([e, n])) : t[c][1] = n, this;
      }
      S2.prototype.clear = od, S2.prototype.delete = rd, S2.prototype.get = cd, S2.prototype.has = dd, S2.prototype.set = ld;
      function B2(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++n < t; ) {
          var c = e[n];
          this.set(c[0], c[1]);
        }
      }
      function id() {
        this.size = 0, this.__data__ = {
          hash: new e0(),
          map: new (Z0 || S2)(),
          string: new e0()
        };
      }
      function sd(e) {
        var n = a1(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function _d(e) {
        return a1(this, e).get(e);
      }
      function ud(e) {
        return a1(this, e).has(e);
      }
      function md(e, n) {
        var t = a1(this, e), c = t.size;
        return t.set(e, n), this.size += t.size == c ? 0 : 1, this;
      }
      B2.prototype.clear = id, B2.prototype.delete = sd, B2.prototype.get = _d, B2.prototype.has = ud, B2.prototype.set = md;
      function n0(e) {
        var n = -1, t = e == null ? 0 : e.length;
        for (this.__data__ = new B2(); ++n < t; )
          this.add(e[n]);
      }
      function hd(e) {
        return this.__data__.set(e, S), this;
      }
      function vd(e) {
        return this.__data__.has(e);
      }
      n0.prototype.add = n0.prototype.push = hd, n0.prototype.has = vd;
      function w2(e) {
        var n = this.__data__ = new S2(e);
        this.size = n.size;
      }
      function pd() {
        this.__data__ = new S2(), this.size = 0;
      }
      function fd(e) {
        var n = this.__data__, t = n.delete(e);
        return this.size = n.size, t;
      }
      function gd(e) {
        return this.__data__.get(e);
      }
      function wd(e) {
        return this.__data__.has(e);
      }
      function $d(e, n) {
        var t = this.__data__;
        if (t instanceof S2) {
          var c = t.__data__;
          if (!Z0 || c.length < l - 1)
            return c.push([e, n]), this.size = ++t.size, this;
          t = this.__data__ = new B2(c);
        }
        return t.set(e, n), this.size = t.size, this;
      }
      w2.prototype.clear = pd, w2.prototype.delete = fd, w2.prototype.get = gd, w2.prototype.has = wd, w2.prototype.set = $d;
      function L4(e, n) {
        var t = G(e), c = !t && c0(e), _ = !t && !c && Y2(e), v = !t && !c && !_ && A0(e), f = t || c || _ || v, g = f ? ea(e.length, Lc) : [], $ = g.length;
        for (var C in e)
          (n || me.call(e, C)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
          (C == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          _ && (C == "offset" || C == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          v && (C == "buffer" || C == "byteLength" || C == "byteOffset") || // Skip index properties.
          P2(C, $))) && g.push(C);
        return g;
      }
      function S4(e) {
        var n = e.length;
        return n ? e[fa(0, n - 1)] : o;
      }
      function xd(e, n) {
        return t1(Ge(e), a0(n, 0, e.length));
      }
      function yd(e) {
        return t1(Ge(e));
      }
      function da(e, n, t) {
        (t !== o && !$2(e[n], t) || t === o && !(n in e)) && T2(e, n, t);
      }
      function Q0(e, n, t) {
        var c = e[n];
        (!(me.call(e, n) && $2(c, t)) || t === o && !(n in e)) && T2(e, n, t);
      }
      function Un(e, n) {
        for (var t = e.length; t--; )
          if ($2(e[t][0], n))
            return t;
        return -1;
      }
      function zd(e, n, t, c) {
        return W2(e, function(_, v, f) {
          n(c, _, t(_), f);
        }), c;
      }
      function B4(e, n) {
        return e && b2(n, Oe(n), e);
      }
      function Cd(e, n) {
        return e && b2(n, Ze(n), e);
      }
      function T2(e, n, t) {
        n == "__proto__" && kn ? kn(e, n, {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        }) : e[n] = t;
      }
      function la(e, n) {
        for (var t = -1, c = n.length, _ = y(c), v = e == null; ++t < c; )
          _[t] = v ? o : qa(e, n[t]);
        return _;
      }
      function a0(e, n, t) {
        return e === e && (t !== o && (e = e <= t ? e : t), n !== o && (e = e >= n ? e : n)), e;
      }
      function _2(e, n, t, c, _, v) {
        var f, g = n & I, $ = n & Y, C = n & D;
        if (t && (f = _ ? t(e, c, _, v) : t(e)), f !== o)
          return f;
        if (!ye(e))
          return e;
        var b = G(e);
        if (b) {
          if (f = ul(e), !g)
            return Ge(e, f);
        } else {
          var M = De(e), L = M == yn || M == Ot;
          if (Y2(e))
            return ao(e, g);
          if (M == L2 || M == h0 || L && !_) {
            if (f = $ || L ? {} : yo(e), !g)
              return $ ? nl(e, Cd(f, e)) : el(e, B4(f, e));
          } else {
            if (!pe[M])
              return _ ? e : {};
            f = ml(e, M, g);
          }
        }
        v || (v = new w2());
        var E = v.get(e);
        if (E)
          return E;
        v.set(e, f), Jo(e) ? e.forEach(function(N) {
          f.add(_2(N, n, t, N, e, v));
        }) : Zo(e) && e.forEach(function(N, ae) {
          f.set(ae, _2(N, n, t, ae, e, v));
        });
        var q = C ? $ ? Aa : Ha : $ ? Ze : Oe, Z = b ? o : q(e);
        return l2(Z || e, function(N, ae) {
          Z && (ae = N, N = e[ae]), Q0(f, ae, _2(N, n, t, ae, e, v));
        }), f;
      }
      function bd(e) {
        var n = Oe(e);
        return function(t) {
          return T4(t, e, n);
        };
      }
      function T4(e, n, t) {
        var c = t.length;
        if (e == null)
          return !c;
        for (e = ve(e); c--; ) {
          var _ = t[c], v = n[_], f = e[_];
          if (f === o && !(_ in e) || !v(f))
            return !1;
        }
        return !0;
      }
      function O4(e, n, t) {
        if (typeof e != "function")
          throw new i2(x);
        return cn(function() {
          e.apply(o, t);
        }, n);
      }
      function en(e, n, t, c) {
        var _ = -1, v = Hn, f = !0, g = e.length, $ = [], C = n.length;
        if (!g)
          return $;
        t && (n = xe(n, e2(t))), c ? (v = K1, f = !1) : n.length >= l && (v = G0, f = !1, n = new n0(n));
        e:
          for (; ++_ < g; ) {
            var b = e[_], M = t == null ? b : t(b);
            if (b = c || b !== 0 ? b : 0, f && M === M) {
              for (var L = C; L--; )
                if (n[L] === M)
                  continue e;
              $.push(b);
            } else
              v(n, M, c) || $.push(b);
          }
        return $;
      }
      var W2 = lo(C2), I4 = lo(sa, !0);
      function Md(e, n) {
        var t = !0;
        return W2(e, function(c, _, v) {
          return t = !!n(c, _, v), t;
        }), t;
      }
      function jn(e, n, t) {
        for (var c = -1, _ = e.length; ++c < _; ) {
          var v = e[c], f = n(v);
          if (f != null && (g === o ? f === f && !a2(f) : t(f, g)))
            var g = f, $ = v;
        }
        return $;
      }
      function Hd(e, n, t, c) {
        var _ = e.length;
        for (t = K(t), t < 0 && (t = -t > _ ? 0 : _ + t), c = c === o || c > _ ? _ : K(c), c < 0 && (c += _), c = t > c ? 0 : Qo(c); t < c; )
          e[t++] = n;
        return e;
      }
      function P4(e, n) {
        var t = [];
        return W2(e, function(c, _, v) {
          n(c, _, v) && t.push(c);
        }), t;
      }
      function Ee(e, n, t, c, _) {
        var v = -1, f = e.length;
        for (t || (t = vl), _ || (_ = []); ++v < f; ) {
          var g = e[v];
          n > 0 && t(g) ? n > 1 ? Ee(g, n - 1, t, c, _) : N2(_, g) : c || (_[_.length] = g);
        }
        return _;
      }
      var ia = io(), E4 = io(!0);
      function C2(e, n) {
        return e && ia(e, n, Oe);
      }
      function sa(e, n) {
        return e && E4(e, n, Oe);
      }
      function Wn(e, n) {
        return q2(n, function(t) {
          return E2(e[t]);
        });
      }
      function t0(e, n) {
        n = K2(n, e);
        for (var t = 0, c = n.length; e != null && t < c; )
          e = e[M2(n[t++])];
        return t && t == c ? e : o;
      }
      function k4(e, n, t) {
        var c = n(e);
        return G(e) ? c : N2(c, t(e));
      }
      function Ne(e) {
        return e == null ? e === o ? a6 : e6 : Q2 && Q2 in ve(e) ? il(e) : yl(e);
      }
      function _a(e, n) {
        return e > n;
      }
      function Ad(e, n) {
        return e != null && me.call(e, n);
      }
      function Vd(e, n) {
        return e != null && n in ve(e);
      }
      function Ld(e, n, t) {
        return e >= Fe(n, t) && e < Te(n, t);
      }
      function ua(e, n, t) {
        for (var c = t ? K1 : Hn, _ = e[0].length, v = e.length, f = v, g = y(v), $ = 1 / 0, C = []; f--; ) {
          var b = e[f];
          f && n && (b = xe(b, e2(n))), $ = Fe(b.length, $), g[f] = !t && (n || _ >= 120 && b.length >= 120) ? new n0(f && b) : o;
        }
        b = e[0];
        var M = -1, L = g[0];
        e:
          for (; ++M < _ && C.length < $; ) {
            var E = b[M], q = n ? n(E) : E;
            if (E = t || E !== 0 ? E : 0, !(L ? G0(L, q) : c(C, q, t))) {
              for (f = v; --f; ) {
                var Z = g[f];
                if (!(Z ? G0(Z, q) : c(e[f], q, t)))
                  continue e;
              }
              L && L.push(q), C.push(E);
            }
          }
        return C;
      }
      function Sd(e, n, t, c) {
        return C2(e, function(_, v, f) {
          n(c, t(_), v, f);
        }), c;
      }
      function nn(e, n, t) {
        n = K2(n, e), e = Mo(e, n);
        var c = e == null ? e : e[M2(m2(n))];
        return c == null ? o : Qe(c, e, t);
      }
      function F4(e) {
        return Me(e) && Ne(e) == h0;
      }
      function Bd(e) {
        return Me(e) && Ne(e) == W0;
      }
      function Td(e) {
        return Me(e) && Ne(e) == R0;
      }
      function an(e, n, t, c, _) {
        return e === n ? !0 : e == null || n == null || !Me(e) && !Me(n) ? e !== e && n !== n : Od(e, n, t, c, an, _);
      }
      function Od(e, n, t, c, _, v) {
        var f = G(e), g = G(n), $ = f ? $n : De(e), C = g ? $n : De(n);
        $ = $ == h0 ? L2 : $, C = C == h0 ? L2 : C;
        var b = $ == L2, M = C == L2, L = $ == C;
        if (L && Y2(e)) {
          if (!Y2(n))
            return !1;
          f = !0, b = !1;
        }
        if (L && !b)
          return v || (v = new w2()), f || A0(e) ? wo(e, n, t, c, _, v) : dl(e, n, $, t, c, _, v);
        if (!(t & te)) {
          var E = b && me.call(e, "__wrapped__"), q = M && me.call(n, "__wrapped__");
          if (E || q) {
            var Z = E ? e.value() : e, N = q ? n.value() : n;
            return v || (v = new w2()), _(Z, N, t, c, v);
          }
        }
        return L ? (v || (v = new w2()), ll(e, n, t, c, _, v)) : !1;
      }
      function Id(e) {
        return Me(e) && De(e) == p2;
      }
      function ma(e, n, t, c) {
        var _ = t.length, v = _, f = !c;
        if (e == null)
          return !v;
        for (e = ve(e); _--; ) {
          var g = t[_];
          if (f && g[2] ? g[1] !== e[g[0]] : !(g[0] in e))
            return !1;
        }
        for (; ++_ < v; ) {
          g = t[_];
          var $ = g[0], C = e[$], b = g[1];
          if (f && g[2]) {
            if (C === o && !($ in e))
              return !1;
          } else {
            var M = new w2();
            if (c)
              var L = c(C, b, $, e, n, M);
            if (!(L === o ? an(b, C, te | k, c, M) : L))
              return !1;
          }
        }
        return !0;
      }
      function D4(e) {
        if (!ye(e) || fl(e))
          return !1;
        var n = E2(e) ? Ic : b6;
        return n.test(r0(e));
      }
      function Pd(e) {
        return Me(e) && Ne(e) == N0;
      }
      function Ed(e) {
        return Me(e) && De(e) == f2;
      }
      function kd(e) {
        return Me(e) && i1(e.length) && !!we[Ne(e)];
      }
      function R4(e) {
        return typeof e == "function" ? e : e == null ? Ye : typeof e == "object" ? G(e) ? U4(e[0], e[1]) : N4(e) : sr(e);
      }
      function ha(e) {
        if (!rn(e))
          return Rc(e);
        var n = [];
        for (var t in ve(e))
          me.call(e, t) && t != "constructor" && n.push(t);
        return n;
      }
      function Fd(e) {
        if (!ye(e))
          return xl(e);
        var n = rn(e), t = [];
        for (var c in e)
          c == "constructor" && (n || !me.call(e, c)) || t.push(c);
        return t;
      }
      function va(e, n) {
        return e < n;
      }
      function q4(e, n) {
        var t = -1, c = Ke(e) ? y(e.length) : [];
        return W2(e, function(_, v, f) {
          c[++t] = n(_, v, f);
        }), c;
      }
      function N4(e) {
        var n = La(e);
        return n.length == 1 && n[0][2] ? Co(n[0][0], n[0][1]) : function(t) {
          return t === e || ma(t, e, n);
        };
      }
      function U4(e, n) {
        return Ba(e) && zo(n) ? Co(M2(e), n) : function(t) {
          var c = qa(t, e);
          return c === o && c === n ? Na(t, e) : an(n, c, te | k);
        };
      }
      function Gn(e, n, t, c, _) {
        e !== n && ia(n, function(v, f) {
          if (_ || (_ = new w2()), ye(v))
            Dd(e, n, f, t, Gn, c, _);
          else {
            var g = c ? c(Oa(e, f), v, f + "", e, n, _) : o;
            g === o && (g = v), da(e, f, g);
          }
        }, Ze);
      }
      function Dd(e, n, t, c, _, v, f) {
        var g = Oa(e, t), $ = Oa(n, t), C = f.get($);
        if (C) {
          da(e, t, C);
          return;
        }
        var b = v ? v(g, $, t + "", e, n, f) : o, M = b === o;
        if (M) {
          var L = G($), E = !L && Y2($), q = !L && !E && A0($);
          b = $, L || E || q ? G(g) ? b = g : He(g) ? b = Ge(g) : E ? (M = !1, b = ao($, !0)) : q ? (M = !1, b = to($, !0)) : b = [] : dn($) || c0($) ? (b = g, c0(g) ? b = er(g) : (!ye(g) || E2(g)) && (b = yo($))) : M = !1;
        }
        M && (f.set($, b), _(b, $, c, v, f), f.delete($)), da(e, t, b);
      }
      function j4(e, n) {
        var t = e.length;
        if (t)
          return n += n < 0 ? t : 0, P2(n, t) ? e[n] : o;
      }
      function W4(e, n, t) {
        n.length ? n = xe(n, function(v) {
          return G(v) ? function(f) {
            return t0(f, v.length === 1 ? v[0] : v);
          } : v;
        }) : n = [Ye];
        var c = -1;
        n = xe(n, e2(R()));
        var _ = q4(e, function(v, f, g) {
          var $ = xe(n, function(C) {
            return C(v);
          });
          return { criteria: $, index: ++c, value: v };
        });
        return mc(_, function(v, f) {
          return Qd(v, f, t);
        });
      }
      function Rd(e, n) {
        return G4(e, n, function(t, c) {
          return Na(e, c);
        });
      }
      function G4(e, n, t) {
        for (var c = -1, _ = n.length, v = {}; ++c < _; ) {
          var f = n[c], g = t0(e, f);
          t(g, f) && tn(v, K2(f, e), g);
        }
        return v;
      }
      function qd(e) {
        return function(n) {
          return t0(n, e);
        };
      }
      function pa(e, n, t, c) {
        var _ = c ? uc : f0, v = -1, f = n.length, g = e;
        for (e === n && (n = Ge(n)), t && (g = xe(e, e2(t))); ++v < f; )
          for (var $ = 0, C = n[v], b = t ? t(C) : C; ($ = _(g, b, $, c)) > -1; )
            g !== e && En.call(g, $, 1), En.call(e, $, 1);
        return e;
      }
      function K4(e, n) {
        for (var t = e ? n.length : 0, c = t - 1; t--; ) {
          var _ = n[t];
          if (t == c || _ !== v) {
            var v = _;
            P2(_) ? En.call(e, _, 1) : $a(e, _);
          }
        }
        return e;
      }
      function fa(e, n) {
        return e + Dn(A4() * (n - e + 1));
      }
      function Nd(e, n, t, c) {
        for (var _ = -1, v = Te(Fn((n - e) / (t || 1)), 0), f = y(v); v--; )
          f[c ? v : ++_] = e, e += t;
        return f;
      }
      function ga(e, n) {
        var t = "";
        if (!e || n < 1 || n > R2)
          return t;
        do
          n % 2 && (t += e), n = Dn(n / 2), n && (e += e);
        while (n);
        return t;
      }
      function X(e, n) {
        return Ia(bo(e, n, Ye), e + "");
      }
      function Ud(e) {
        return S4(V0(e));
      }
      function jd(e, n) {
        var t = V0(e);
        return t1(t, a0(n, 0, t.length));
      }
      function tn(e, n, t, c) {
        if (!ye(e))
          return e;
        n = K2(n, e);
        for (var _ = -1, v = n.length, f = v - 1, g = e; g != null && ++_ < v; ) {
          var $ = M2(n[_]), C = t;
          if ($ === "__proto__" || $ === "constructor" || $ === "prototype")
            return e;
          if (_ != f) {
            var b = g[$];
            C = c ? c(b, $, g) : o, C === o && (C = ye(b) ? b : P2(n[_ + 1]) ? [] : {});
          }
          Q0(g, $, C), g = g[$];
        }
        return e;
      }
      var Z4 = Rn ? function(e, n) {
        return Rn.set(e, n), e;
      } : Ye, Wd = kn ? function(e, n) {
        return kn(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ja(n),
          writable: !0
        });
      } : Ye;
      function Gd(e) {
        return t1(V0(e));
      }
      function u2(e, n, t) {
        var c = -1, _ = e.length;
        n < 0 && (n = -n > _ ? 0 : _ + n), t = t > _ ? _ : t, t < 0 && (t += _), _ = n > t ? 0 : t - n >>> 0, n >>>= 0;
        for (var v = y(_); ++c < _; )
          v[c] = e[c + n];
        return v;
      }
      function Kd(e, n) {
        var t;
        return W2(e, function(c, _, v) {
          return t = n(c, _, v), !t;
        }), !!t;
      }
      function Kn(e, n, t) {
        var c = 0, _ = e == null ? c : e.length;
        if (typeof n == "number" && n === n && _ <= Y3) {
          for (; c < _; ) {
            var v = c + _ >>> 1, f = e[v];
            f !== null && !a2(f) && (t ? f <= n : f < n) ? c = v + 1 : _ = v;
          }
          return _;
        }
        return wa(e, n, Ye, t);
      }
      function wa(e, n, t, c) {
        var _ = 0, v = e == null ? 0 : e.length;
        if (v === 0)
          return 0;
        n = t(n);
        for (var f = n !== n, g = n === null, $ = a2(n), C = n === o; _ < v; ) {
          var b = Dn((_ + v) / 2), M = t(e[b]), L = M !== o, E = M === null, q = M === M, Z = a2(M);
          if (f)
            var N = c || q;
          else
            C ? N = q && (c || L) : g ? N = q && L && (c || !E) : $ ? N = q && L && !E && (c || !Z) : E || Z ? N = !1 : N = c ? M <= n : M < n;
          N ? _ = b + 1 : v = b;
        }
        return Fe(v, Z3);
      }
      function Y4(e, n) {
        for (var t = -1, c = e.length, _ = 0, v = []; ++t < c; ) {
          var f = e[t], g = n ? n(f) : f;
          if (!t || !$2(g, $)) {
            var $ = g;
            v[_++] = f === 0 ? 0 : f;
          }
        }
        return v;
      }
      function J4(e) {
        return typeof e == "number" ? e : a2(e) ? wn : +e;
      }
      function n2(e) {
        if (typeof e == "string")
          return e;
        if (G(e))
          return xe(e, n2) + "";
        if (a2(e))
          return V4 ? V4.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -qe ? "-0" : n;
      }
      function G2(e, n, t) {
        var c = -1, _ = Hn, v = e.length, f = !0, g = [], $ = g;
        if (t)
          f = !1, _ = K1;
        else if (v >= l) {
          var C = n ? null : rl(e);
          if (C)
            return Vn(C);
          f = !1, _ = G0, $ = new n0();
        } else
          $ = n ? [] : g;
        e:
          for (; ++c < v; ) {
            var b = e[c], M = n ? n(b) : b;
            if (b = t || b !== 0 ? b : 0, f && M === M) {
              for (var L = $.length; L--; )
                if ($[L] === M)
                  continue e;
              n && $.push(M), g.push(b);
            } else
              _($, M, t) || ($ !== g && $.push(M), g.push(b));
          }
        return g;
      }
      function $a(e, n) {
        return n = K2(n, e), e = Mo(e, n), e == null || delete e[M2(m2(n))];
      }
      function X4(e, n, t, c) {
        return tn(e, n, t(t0(e, n)), c);
      }
      function Zn(e, n, t, c) {
        for (var _ = e.length, v = c ? _ : -1; (c ? v-- : ++v < _) && n(e[v], v, e); )
          ;
        return t ? u2(e, c ? 0 : v, c ? v + 1 : _) : u2(e, c ? v + 1 : 0, c ? _ : v);
      }
      function Q4(e, n) {
        var t = e;
        return t instanceof ce && (t = t.value()), Z1(n, function(c, _) {
          return _.func.apply(_.thisArg, N2([c], _.args));
        }, t);
      }
      function xa(e, n, t) {
        var c = e.length;
        if (c < 2)
          return c ? G2(e[0]) : [];
        for (var _ = -1, v = y(c); ++_ < c; )
          for (var f = e[_], g = -1; ++g < c; )
            g != _ && (v[_] = en(v[_] || f, e[g], n, t));
        return G2(Ee(v, 1), n, t);
      }
      function eo(e, n, t) {
        for (var c = -1, _ = e.length, v = n.length, f = {}; ++c < _; ) {
          var g = c < v ? n[c] : o;
          t(f, e[c], g);
        }
        return f;
      }
      function ya(e) {
        return He(e) ? e : [];
      }
      function za(e) {
        return typeof e == "function" ? e : Ye;
      }
      function K2(e, n) {
        return G(e) ? e : Ba(e, n) ? [e] : Lo(se(e));
      }
      var Zd = X;
      function Z2(e, n, t) {
        var c = e.length;
        return t = t === o ? c : t, !n && t >= c ? e : u2(e, n, t);
      }
      var no = Pc || function(e) {
        return Pe.clearTimeout(e);
      };
      function ao(e, n) {
        if (n)
          return e.slice();
        var t = e.length, c = z4 ? z4(t) : new e.constructor(t);
        return e.copy(c), c;
      }
      function Ca(e) {
        var n = new e.constructor(e.byteLength);
        return new In(n).set(new In(e)), n;
      }
      function Yd(e, n) {
        var t = n ? Ca(e.buffer) : e.buffer;
        return new e.constructor(t, e.byteOffset, e.byteLength);
      }
      function Jd(e) {
        var n = new e.constructor(e.source, Ft.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function Xd(e) {
        return X0 ? ve(X0.call(e)) : {};
      }
      function to(e, n) {
        var t = n ? Ca(e.buffer) : e.buffer;
        return new e.constructor(t, e.byteOffset, e.length);
      }
      function oo(e, n) {
        if (e !== n) {
          var t = e !== o, c = e === null, _ = e === e, v = a2(e), f = n !== o, g = n === null, $ = n === n, C = a2(n);
          if (!g && !C && !v && e > n || v && f && $ && !g && !C || c && f && $ || !t && $ || !_)
            return 1;
          if (!c && !v && !C && e < n || C && t && _ && !c && !v || g && t && _ || !f && _ || !$)
            return -1;
        }
        return 0;
      }
      function Qd(e, n, t) {
        for (var c = -1, _ = e.criteria, v = n.criteria, f = _.length, g = t.length; ++c < f; ) {
          var $ = oo(_[c], v[c]);
          if ($) {
            if (c >= g)
              return $;
            var C = t[c];
            return $ * (C == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function ro(e, n, t, c) {
        for (var _ = -1, v = e.length, f = t.length, g = -1, $ = n.length, C = Te(v - f, 0), b = y($ + C), M = !c; ++g < $; )
          b[g] = n[g];
        for (; ++_ < f; )
          (M || _ < v) && (b[t[_]] = e[_]);
        for (; C--; )
          b[g++] = e[_++];
        return b;
      }
      function co(e, n, t, c) {
        for (var _ = -1, v = e.length, f = -1, g = t.length, $ = -1, C = n.length, b = Te(v - g, 0), M = y(b + C), L = !c; ++_ < b; )
          M[_] = e[_];
        for (var E = _; ++$ < C; )
          M[E + $] = n[$];
        for (; ++f < g; )
          (L || _ < v) && (M[E + t[f]] = e[_++]);
        return M;
      }
      function Ge(e, n) {
        var t = -1, c = e.length;
        for (n || (n = y(c)); ++t < c; )
          n[t] = e[t];
        return n;
      }
      function b2(e, n, t, c) {
        var _ = !t;
        t || (t = {});
        for (var v = -1, f = n.length; ++v < f; ) {
          var g = n[v], $ = c ? c(t[g], e[g], g, t, e) : o;
          $ === o && ($ = e[g]), _ ? T2(t, g, $) : Q0(t, g, $);
        }
        return t;
      }
      function el(e, n) {
        return b2(e, Sa(e), n);
      }
      function nl(e, n) {
        return b2(e, $o(e), n);
      }
      function Yn(e, n) {
        return function(t, c) {
          var _ = G(t) ? cc : zd, v = n ? n() : {};
          return _(t, e, R(c, 2), v);
        };
      }
      function b0(e) {
        return X(function(n, t) {
          var c = -1, _ = t.length, v = _ > 1 ? t[_ - 1] : o, f = _ > 2 ? t[2] : o;
          for (v = e.length > 3 && typeof v == "function" ? (_--, v) : o, f && Ue(t[0], t[1], f) && (v = _ < 3 ? o : v, _ = 1), n = ve(n); ++c < _; ) {
            var g = t[c];
            g && e(n, g, c, v);
          }
          return n;
        });
      }
      function lo(e, n) {
        return function(t, c) {
          if (t == null)
            return t;
          if (!Ke(t))
            return e(t, c);
          for (var _ = t.length, v = n ? _ : -1, f = ve(t); (n ? v-- : ++v < _) && c(f[v], v, f) !== !1; )
            ;
          return t;
        };
      }
      function io(e) {
        return function(n, t, c) {
          for (var _ = -1, v = ve(n), f = c(n), g = f.length; g--; ) {
            var $ = f[e ? g : ++_];
            if (t(v[$], $, v) === !1)
              break;
          }
          return n;
        };
      }
      function al(e, n, t) {
        var c = n & B, _ = on(e);
        function v() {
          var f = this && this !== Pe && this instanceof v ? _ : e;
          return f.apply(c ? t : this, arguments);
        }
        return v;
      }
      function so(e) {
        return function(n) {
          n = se(n);
          var t = g0(n) ? g2(n) : o, c = t ? t[0] : n.charAt(0), _ = t ? Z2(t, 1).join("") : n.slice(1);
          return c[e]() + _;
        };
      }
      function M0(e) {
        return function(n) {
          return Z1(lr(dr(n).replace(W6, "")), e, "");
        };
      }
      function on(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var t = C0(e.prototype), c = e.apply(t, n);
          return ye(c) ? c : t;
        };
      }
      function tl(e, n, t) {
        var c = on(e);
        function _() {
          for (var v = arguments.length, f = y(v), g = v, $ = H0(_); g--; )
            f[g] = arguments[g];
          var C = v < 3 && f[0] !== $ && f[v - 1] !== $ ? [] : U2(f, $);
          if (v -= C.length, v < t)
            return vo(
              e,
              n,
              Jn,
              _.placeholder,
              o,
              f,
              C,
              o,
              o,
              t - v
            );
          var b = this && this !== Pe && this instanceof _ ? c : e;
          return Qe(b, this, f);
        }
        return _;
      }
      function _o(e) {
        return function(n, t, c) {
          var _ = ve(n);
          if (!Ke(n)) {
            var v = R(t, 3);
            n = Oe(n), t = function(g) {
              return v(_[g], g, _);
            };
          }
          var f = e(n, t, c);
          return f > -1 ? _[v ? n[f] : f] : o;
        };
      }
      function uo(e) {
        return I2(function(n) {
          var t = n.length, c = t, _ = s2.prototype.thru;
          for (e && n.reverse(); c--; ) {
            var v = n[c];
            if (typeof v != "function")
              throw new i2(x);
            if (_ && !f && n1(v) == "wrapper")
              var f = new s2([], !0);
          }
          for (c = f ? c : t; ++c < t; ) {
            v = n[c];
            var g = n1(v), $ = g == "wrapper" ? Va(v) : o;
            $ && Ta($[0]) && $[1] == (J | oe | he | ze) && !$[4].length && $[9] == 1 ? f = f[n1($[0])].apply(f, $[3]) : f = v.length == 1 && Ta(v) ? f[g]() : f.thru(v);
          }
          return function() {
            var C = arguments, b = C[0];
            if (f && C.length == 1 && G(b))
              return f.plant(b).value();
            for (var M = 0, L = t ? n[M].apply(this, C) : b; ++M < t; )
              L = n[M].call(this, L);
            return L;
          };
        });
      }
      function Jn(e, n, t, c, _, v, f, g, $, C) {
        var b = n & J, M = n & B, L = n & V, E = n & (oe | ge), q = n & v2, Z = L ? o : on(e);
        function N() {
          for (var ae = arguments.length, de = y(ae), t2 = ae; t2--; )
            de[t2] = arguments[t2];
          if (E)
            var je = H0(N), o2 = vc(de, je);
          if (c && (de = ro(de, c, _, E)), v && (de = co(de, v, f, E)), ae -= o2, E && ae < C) {
            var Ae = U2(de, je);
            return vo(
              e,
              n,
              Jn,
              N.placeholder,
              t,
              de,
              Ae,
              g,
              $,
              C - ae
            );
          }
          var x2 = M ? t : this, F2 = L ? x2[e] : e;
          return ae = de.length, g ? de = zl(de, g) : q && ae > 1 && de.reverse(), b && $ < ae && (de.length = $), this && this !== Pe && this instanceof N && (F2 = Z || on(F2)), F2.apply(x2, de);
        }
        return N;
      }
      function mo(e, n) {
        return function(t, c) {
          return Sd(t, e, n(c), {});
        };
      }
      function Xn(e, n) {
        return function(t, c) {
          var _;
          if (t === o && c === o)
            return n;
          if (t !== o && (_ = t), c !== o) {
            if (_ === o)
              return c;
            typeof t == "string" || typeof c == "string" ? (t = n2(t), c = n2(c)) : (t = J4(t), c = J4(c)), _ = e(t, c);
          }
          return _;
        };
      }
      function ba(e) {
        return I2(function(n) {
          return n = xe(n, e2(R())), X(function(t) {
            var c = this;
            return e(n, function(_) {
              return Qe(_, c, t);
            });
          });
        });
      }
      function Qn(e, n) {
        n = n === o ? " " : n2(n);
        var t = n.length;
        if (t < 2)
          return t ? ga(n, e) : n;
        var c = ga(n, Fn(e / w0(n)));
        return g0(n) ? Z2(g2(c), 0, e).join("") : c.slice(0, e);
      }
      function ol(e, n, t, c) {
        var _ = n & B, v = on(e);
        function f() {
          for (var g = -1, $ = arguments.length, C = -1, b = c.length, M = y(b + $), L = this && this !== Pe && this instanceof f ? v : e; ++C < b; )
            M[C] = c[C];
          for (; $--; )
            M[C++] = arguments[++g];
          return Qe(L, _ ? t : this, M);
        }
        return f;
      }
      function ho(e) {
        return function(n, t, c) {
          return c && typeof c != "number" && Ue(n, t, c) && (t = c = o), n = k2(n), t === o ? (t = n, n = 0) : t = k2(t), c = c === o ? n < t ? 1 : -1 : k2(c), Nd(n, t, c, e);
        };
      }
      function e1(e) {
        return function(n, t) {
          return typeof n == "string" && typeof t == "string" || (n = h2(n), t = h2(t)), e(n, t);
        };
      }
      function vo(e, n, t, c, _, v, f, g, $, C) {
        var b = n & oe, M = b ? f : o, L = b ? o : f, E = b ? v : o, q = b ? o : v;
        n |= b ? he : re, n &= ~(b ? re : he), n & T || (n &= ~(B | V));
        var Z = [
          e,
          n,
          _,
          E,
          M,
          q,
          L,
          g,
          $,
          C
        ], N = t.apply(o, Z);
        return Ta(e) && Ho(N, Z), N.placeholder = c, Ao(N, e, n);
      }
      function Ma(e) {
        var n = Be[e];
        return function(t, c) {
          if (t = h2(t), c = c == null ? 0 : Fe(K(c), 292), c && H4(t)) {
            var _ = (se(t) + "e").split("e"), v = n(_[0] + "e" + (+_[1] + c));
            return _ = (se(v) + "e").split("e"), +(_[0] + "e" + (+_[1] - c));
          }
          return n(t);
        };
      }
      var rl = y0 && 1 / Vn(new y0([, -0]))[1] == qe ? function(e) {
        return new y0(e);
      } : Ka;
      function po(e) {
        return function(n) {
          var t = De(n);
          return t == p2 ? aa(n) : t == f2 ? yc(n) : hc(n, e(n));
        };
      }
      function O2(e, n, t, c, _, v, f, g) {
        var $ = n & V;
        if (!$ && typeof e != "function")
          throw new i2(x);
        var C = c ? c.length : 0;
        if (C || (n &= ~(he | re), c = _ = o), f = f === o ? f : Te(K(f), 0), g = g === o ? g : K(g), C -= _ ? _.length : 0, n & re) {
          var b = c, M = _;
          c = _ = o;
        }
        var L = $ ? o : Va(e), E = [
          e,
          n,
          t,
          c,
          _,
          b,
          M,
          v,
          f,
          g
        ];
        if (L && $l(E, L), e = E[0], n = E[1], t = E[2], c = E[3], _ = E[4], g = E[9] = E[9] === o ? $ ? 0 : e.length : Te(E[9] - C, 0), !g && n & (oe | ge) && (n &= ~(oe | ge)), !n || n == B)
          var q = al(e, n, t);
        else
          n == oe || n == ge ? q = tl(e, n, g) : (n == he || n == (B | he)) && !_.length ? q = ol(e, n, t, c) : q = Jn.apply(o, E);
        var Z = L ? Z4 : Ho;
        return Ao(Z(q, E), e, n);
      }
      function fo(e, n, t, c) {
        return e === o || $2(e, x0[t]) && !me.call(c, t) ? n : e;
      }
      function go(e, n, t, c, _, v) {
        return ye(e) && ye(n) && (v.set(n, e), Gn(e, n, o, go, v), v.delete(n)), e;
      }
      function cl(e) {
        return dn(e) ? o : e;
      }
      function wo(e, n, t, c, _, v) {
        var f = t & te, g = e.length, $ = n.length;
        if (g != $ && !(f && $ > g))
          return !1;
        var C = v.get(e), b = v.get(n);
        if (C && b)
          return C == n && b == e;
        var M = -1, L = !0, E = t & k ? new n0() : o;
        for (v.set(e, n), v.set(n, e); ++M < g; ) {
          var q = e[M], Z = n[M];
          if (c)
            var N = f ? c(Z, q, M, n, e, v) : c(q, Z, M, e, n, v);
          if (N !== o) {
            if (N)
              continue;
            L = !1;
            break;
          }
          if (E) {
            if (!Y1(n, function(ae, de) {
              if (!G0(E, de) && (q === ae || _(q, ae, t, c, v)))
                return E.push(de);
            })) {
              L = !1;
              break;
            }
          } else if (!(q === Z || _(q, Z, t, c, v))) {
            L = !1;
            break;
          }
        }
        return v.delete(e), v.delete(n), L;
      }
      function dl(e, n, t, c, _, v, f) {
        switch (t) {
          case v0:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case W0:
            return !(e.byteLength != n.byteLength || !v(new In(e), new In(n)));
          case D0:
          case R0:
          case q0:
            return $2(+e, +n);
          case xn:
            return e.name == n.name && e.message == n.message;
          case N0:
          case U0:
            return e == n + "";
          case p2:
            var g = aa;
          case f2:
            var $ = c & te;
            if (g || (g = Vn), e.size != n.size && !$)
              return !1;
            var C = f.get(e);
            if (C)
              return C == n;
            c |= k, f.set(e, n);
            var b = wo(g(e), g(n), c, _, v, f);
            return f.delete(e), b;
          case zn:
            if (X0)
              return X0.call(e) == X0.call(n);
        }
        return !1;
      }
      function ll(e, n, t, c, _, v) {
        var f = t & te, g = Ha(e), $ = g.length, C = Ha(n), b = C.length;
        if ($ != b && !f)
          return !1;
        for (var M = $; M--; ) {
          var L = g[M];
          if (!(f ? L in n : me.call(n, L)))
            return !1;
        }
        var E = v.get(e), q = v.get(n);
        if (E && q)
          return E == n && q == e;
        var Z = !0;
        v.set(e, n), v.set(n, e);
        for (var N = f; ++M < $; ) {
          L = g[M];
          var ae = e[L], de = n[L];
          if (c)
            var t2 = f ? c(de, ae, L, n, e, v) : c(ae, de, L, e, n, v);
          if (!(t2 === o ? ae === de || _(ae, de, t, c, v) : t2)) {
            Z = !1;
            break;
          }
          N || (N = L == "constructor");
        }
        if (Z && !N) {
          var je = e.constructor, o2 = n.constructor;
          je != o2 && "constructor" in e && "constructor" in n && !(typeof je == "function" && je instanceof je && typeof o2 == "function" && o2 instanceof o2) && (Z = !1);
        }
        return v.delete(e), v.delete(n), Z;
      }
      function I2(e) {
        return Ia(bo(e, o, Oo), e + "");
      }
      function Ha(e) {
        return k4(e, Oe, Sa);
      }
      function Aa(e) {
        return k4(e, Ze, $o);
      }
      var Va = Rn ? function(e) {
        return Rn.get(e);
      } : Ka;
      function n1(e) {
        for (var n = e.name + "", t = z0[n], c = me.call(z0, n) ? t.length : 0; c--; ) {
          var _ = t[c], v = _.func;
          if (v == null || v == e)
            return _.name;
        }
        return n;
      }
      function H0(e) {
        var n = me.call(h, "placeholder") ? h : e;
        return n.placeholder;
      }
      function R() {
        var e = h.iteratee || Wa;
        return e = e === Wa ? R4 : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function a1(e, n) {
        var t = e.__data__;
        return pl(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
      }
      function La(e) {
        for (var n = Oe(e), t = n.length; t--; ) {
          var c = n[t], _ = e[c];
          n[t] = [c, _, zo(_)];
        }
        return n;
      }
      function o0(e, n) {
        var t = wc(e, n);
        return D4(t) ? t : o;
      }
      function il(e) {
        var n = me.call(e, Q2), t = e[Q2];
        try {
          e[Q2] = o;
          var c = !0;
        } catch {
        }
        var _ = Tn.call(e);
        return c && (n ? e[Q2] = t : delete e[Q2]), _;
      }
      var Sa = oa ? function(e) {
        return e == null ? [] : (e = ve(e), q2(oa(e), function(n) {
          return b4.call(e, n);
        }));
      } : Za, $o = oa ? function(e) {
        for (var n = []; e; )
          N2(n, Sa(e)), e = Pn(e);
        return n;
      } : Za, De = Ne;
      (ra && De(new ra(new ArrayBuffer(1))) != v0 || Z0 && De(new Z0()) != p2 || ca && De(ca.resolve()) != It || y0 && De(new y0()) != f2 || Y0 && De(new Y0()) != j0) && (De = function(e) {
        var n = Ne(e), t = n == L2 ? e.constructor : o, c = t ? r0(t) : "";
        if (c)
          switch (c) {
            case jc:
              return v0;
            case Wc:
              return p2;
            case Gc:
              return It;
            case Kc:
              return f2;
            case Zc:
              return j0;
          }
        return n;
      });
      function sl(e, n, t) {
        for (var c = -1, _ = t.length; ++c < _; ) {
          var v = t[c], f = v.size;
          switch (v.type) {
            case "drop":
              e += f;
              break;
            case "dropRight":
              n -= f;
              break;
            case "take":
              n = Fe(n, e + f);
              break;
            case "takeRight":
              e = Te(e, n - f);
              break;
          }
        }
        return { start: e, end: n };
      }
      function _l(e) {
        var n = e.match(f6);
        return n ? n[1].split(g6) : [];
      }
      function xo(e, n, t) {
        n = K2(n, e);
        for (var c = -1, _ = n.length, v = !1; ++c < _; ) {
          var f = M2(n[c]);
          if (!(v = e != null && t(e, f)))
            break;
          e = e[f];
        }
        return v || ++c != _ ? v : (_ = e == null ? 0 : e.length, !!_ && i1(_) && P2(f, _) && (G(e) || c0(e)));
      }
      function ul(e) {
        var n = e.length, t = new e.constructor(n);
        return n && typeof e[0] == "string" && me.call(e, "index") && (t.index = e.index, t.input = e.input), t;
      }
      function yo(e) {
        return typeof e.constructor == "function" && !rn(e) ? C0(Pn(e)) : {};
      }
      function ml(e, n, t) {
        var c = e.constructor;
        switch (n) {
          case W0:
            return Ca(e);
          case D0:
          case R0:
            return new c(+e);
          case v0:
            return Yd(e, t);
          case L1:
          case S1:
          case B1:
          case T1:
          case O1:
          case I1:
          case P1:
          case E1:
          case k1:
            return to(e, t);
          case p2:
            return new c();
          case q0:
          case U0:
            return new c(e);
          case N0:
            return Jd(e);
          case f2:
            return new c();
          case zn:
            return Xd(e);
        }
      }
      function hl(e, n) {
        var t = n.length;
        if (!t)
          return e;
        var c = t - 1;
        return n[c] = (t > 1 ? "& " : "") + n[c], n = n.join(t > 2 ? ", " : " "), e.replace(p6, `{
/* [wrapped with ` + n + `] */
`);
      }
      function vl(e) {
        return G(e) || c0(e) || !!(M4 && e && e[M4]);
      }
      function P2(e, n) {
        var t = typeof e;
        return n = n ?? R2, !!n && (t == "number" || t != "symbol" && H6.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Ue(e, n, t) {
        if (!ye(t))
          return !1;
        var c = typeof n;
        return (c == "number" ? Ke(t) && P2(n, t.length) : c == "string" && n in t) ? $2(t[n], e) : !1;
      }
      function Ba(e, n) {
        if (G(e))
          return !1;
        var t = typeof e;
        return t == "number" || t == "symbol" || t == "boolean" || e == null || a2(e) ? !0 : u6.test(e) || !_6.test(e) || n != null && e in ve(n);
      }
      function pl(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Ta(e) {
        var n = n1(e), t = h[n];
        if (typeof t != "function" || !(n in ce.prototype))
          return !1;
        if (e === t)
          return !0;
        var c = Va(t);
        return !!c && e === c[0];
      }
      function fl(e) {
        return !!y4 && y4 in e;
      }
      var gl = Sn ? E2 : Ya;
      function rn(e) {
        var n = e && e.constructor, t = typeof n == "function" && n.prototype || x0;
        return e === t;
      }
      function zo(e) {
        return e === e && !ye(e);
      }
      function Co(e, n) {
        return function(t) {
          return t == null ? !1 : t[e] === n && (n !== o || e in ve(t));
        };
      }
      function wl(e) {
        var n = d1(e, function(c) {
          return t.size === A && t.clear(), c;
        }), t = n.cache;
        return n;
      }
      function $l(e, n) {
        var t = e[1], c = n[1], _ = t | c, v = _ < (B | V | J), f = c == J && t == oe || c == J && t == ze && e[7].length <= n[8] || c == (J | ze) && n[7].length <= n[8] && t == oe;
        if (!(v || f))
          return e;
        c & B && (e[2] = n[2], _ |= t & B ? 0 : T);
        var g = n[3];
        if (g) {
          var $ = e[3];
          e[3] = $ ? ro($, g, n[4]) : g, e[4] = $ ? U2(e[3], P) : n[4];
        }
        return g = n[5], g && ($ = e[5], e[5] = $ ? co($, g, n[6]) : g, e[6] = $ ? U2(e[5], P) : n[6]), g = n[7], g && (e[7] = g), c & J && (e[8] = e[8] == null ? n[8] : Fe(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = _, e;
      }
      function xl(e) {
        var n = [];
        if (e != null)
          for (var t in ve(e))
            n.push(t);
        return n;
      }
      function yl(e) {
        return Tn.call(e);
      }
      function bo(e, n, t) {
        return n = Te(n === o ? e.length - 1 : n, 0), function() {
          for (var c = arguments, _ = -1, v = Te(c.length - n, 0), f = y(v); ++_ < v; )
            f[_] = c[n + _];
          _ = -1;
          for (var g = y(n + 1); ++_ < n; )
            g[_] = c[_];
          return g[n] = t(f), Qe(e, this, g);
        };
      }
      function Mo(e, n) {
        return n.length < 2 ? e : t0(e, u2(n, 0, -1));
      }
      function zl(e, n) {
        for (var t = e.length, c = Fe(n.length, t), _ = Ge(e); c--; ) {
          var v = n[c];
          e[c] = P2(v, t) ? _[v] : o;
        }
        return e;
      }
      function Oa(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Ho = Vo(Z4), cn = kc || function(e, n) {
        return Pe.setTimeout(e, n);
      }, Ia = Vo(Wd);
      function Ao(e, n, t) {
        var c = n + "";
        return Ia(e, hl(c, Cl(_l(c), t)));
      }
      function Vo(e) {
        var n = 0, t = 0;
        return function() {
          var c = qc(), _ = We - (c - t);
          if (t = c, _ > 0) {
            if (++n >= ke)
              return arguments[0];
          } else
            n = 0;
          return e.apply(o, arguments);
        };
      }
      function t1(e, n) {
        var t = -1, c = e.length, _ = c - 1;
        for (n = n === o ? c : n; ++t < n; ) {
          var v = fa(t, _), f = e[v];
          e[v] = e[t], e[t] = f;
        }
        return e.length = n, e;
      }
      var Lo = wl(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(m6, function(t, c, _, v) {
          n.push(_ ? v.replace(x6, "$1") : c || t);
        }), n;
      });
      function M2(e) {
        if (typeof e == "string" || a2(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -qe ? "-0" : n;
      }
      function r0(e) {
        if (e != null) {
          try {
            return Bn.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Cl(e, n) {
        return l2(J3, function(t) {
          var c = "_." + t[0];
          n & t[1] && !Hn(e, c) && e.push(c);
        }), e.sort();
      }
      function So(e) {
        if (e instanceof ce)
          return e.clone();
        var n = new s2(e.__wrapped__, e.__chain__);
        return n.__actions__ = Ge(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function bl(e, n, t) {
        (t ? Ue(e, n, t) : n === o) ? n = 1 : n = Te(K(n), 0);
        var c = e == null ? 0 : e.length;
        if (!c || n < 1)
          return [];
        for (var _ = 0, v = 0, f = y(Fn(c / n)); _ < c; )
          f[v++] = u2(e, _, _ += n);
        return f;
      }
      function Ml(e) {
        for (var n = -1, t = e == null ? 0 : e.length, c = 0, _ = []; ++n < t; ) {
          var v = e[n];
          v && (_[c++] = v);
        }
        return _;
      }
      function Hl() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = y(e - 1), t = arguments[0], c = e; c--; )
          n[c - 1] = arguments[c];
        return N2(G(t) ? Ge(t) : [t], Ee(n, 1));
      }
      var Al = X(function(e, n) {
        return He(e) ? en(e, Ee(n, 1, He, !0)) : [];
      }), Vl = X(function(e, n) {
        var t = m2(n);
        return He(t) && (t = o), He(e) ? en(e, Ee(n, 1, He, !0), R(t, 2)) : [];
      }), Ll = X(function(e, n) {
        var t = m2(n);
        return He(t) && (t = o), He(e) ? en(e, Ee(n, 1, He, !0), o, t) : [];
      });
      function Sl(e, n, t) {
        var c = e == null ? 0 : e.length;
        return c ? (n = t || n === o ? 1 : K(n), u2(e, n < 0 ? 0 : n, c)) : [];
      }
      function Bl(e, n, t) {
        var c = e == null ? 0 : e.length;
        return c ? (n = t || n === o ? 1 : K(n), n = c - n, u2(e, 0, n < 0 ? 0 : n)) : [];
      }
      function Tl(e, n) {
        return e && e.length ? Zn(e, R(n, 3), !0, !0) : [];
      }
      function Ol(e, n) {
        return e && e.length ? Zn(e, R(n, 3), !0) : [];
      }
      function Il(e, n, t, c) {
        var _ = e == null ? 0 : e.length;
        return _ ? (t && typeof t != "number" && Ue(e, n, t) && (t = 0, c = _), Hd(e, n, t, c)) : [];
      }
      function Bo(e, n, t) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var _ = t == null ? 0 : K(t);
        return _ < 0 && (_ = Te(c + _, 0)), An(e, R(n, 3), _);
      }
      function To(e, n, t) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var _ = c - 1;
        return t !== o && (_ = K(t), _ = t < 0 ? Te(c + _, 0) : Fe(_, c - 1)), An(e, R(n, 3), _, !0);
      }
      function Oo(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ee(e, 1) : [];
      }
      function Pl(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ee(e, qe) : [];
      }
      function El(e, n) {
        var t = e == null ? 0 : e.length;
        return t ? (n = n === o ? 1 : K(n), Ee(e, n)) : [];
      }
      function kl(e) {
        for (var n = -1, t = e == null ? 0 : e.length, c = {}; ++n < t; ) {
          var _ = e[n];
          c[_[0]] = _[1];
        }
        return c;
      }
      function Io(e) {
        return e && e.length ? e[0] : o;
      }
      function Fl(e, n, t) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var _ = t == null ? 0 : K(t);
        return _ < 0 && (_ = Te(c + _, 0)), f0(e, n, _);
      }
      function Dl(e) {
        var n = e == null ? 0 : e.length;
        return n ? u2(e, 0, -1) : [];
      }
      var Rl = X(function(e) {
        var n = xe(e, ya);
        return n.length && n[0] === e[0] ? ua(n) : [];
      }), ql = X(function(e) {
        var n = m2(e), t = xe(e, ya);
        return n === m2(t) ? n = o : t.pop(), t.length && t[0] === e[0] ? ua(t, R(n, 2)) : [];
      }), Nl = X(function(e) {
        var n = m2(e), t = xe(e, ya);
        return n = typeof n == "function" ? n : o, n && t.pop(), t.length && t[0] === e[0] ? ua(t, o, n) : [];
      });
      function Ul(e, n) {
        return e == null ? "" : Dc.call(e, n);
      }
      function m2(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : o;
      }
      function jl(e, n, t) {
        var c = e == null ? 0 : e.length;
        if (!c)
          return -1;
        var _ = c;
        return t !== o && (_ = K(t), _ = _ < 0 ? Te(c + _, 0) : Fe(_, c - 1)), n === n ? Cc(e, n, _) : An(e, h4, _, !0);
      }
      function Wl(e, n) {
        return e && e.length ? j4(e, K(n)) : o;
      }
      var Gl = X(Po);
      function Po(e, n) {
        return e && e.length && n && n.length ? pa(e, n) : e;
      }
      function Kl(e, n, t) {
        return e && e.length && n && n.length ? pa(e, n, R(t, 2)) : e;
      }
      function Zl(e, n, t) {
        return e && e.length && n && n.length ? pa(e, n, o, t) : e;
      }
      var Yl = I2(function(e, n) {
        var t = e == null ? 0 : e.length, c = la(e, n);
        return K4(e, xe(n, function(_) {
          return P2(_, t) ? +_ : _;
        }).sort(oo)), c;
      });
      function Jl(e, n) {
        var t = [];
        if (!(e && e.length))
          return t;
        var c = -1, _ = [], v = e.length;
        for (n = R(n, 3); ++c < v; ) {
          var f = e[c];
          n(f, c, e) && (t.push(f), _.push(c));
        }
        return K4(e, _), t;
      }
      function Pa(e) {
        return e == null ? e : Uc.call(e);
      }
      function Xl(e, n, t) {
        var c = e == null ? 0 : e.length;
        return c ? (t && typeof t != "number" && Ue(e, n, t) ? (n = 0, t = c) : (n = n == null ? 0 : K(n), t = t === o ? c : K(t)), u2(e, n, t)) : [];
      }
      function Ql(e, n) {
        return Kn(e, n);
      }
      function ei(e, n, t) {
        return wa(e, n, R(t, 2));
      }
      function ni(e, n) {
        var t = e == null ? 0 : e.length;
        if (t) {
          var c = Kn(e, n);
          if (c < t && $2(e[c], n))
            return c;
        }
        return -1;
      }
      function ai(e, n) {
        return Kn(e, n, !0);
      }
      function ti(e, n, t) {
        return wa(e, n, R(t, 2), !0);
      }
      function oi(e, n) {
        var t = e == null ? 0 : e.length;
        if (t) {
          var c = Kn(e, n, !0) - 1;
          if ($2(e[c], n))
            return c;
        }
        return -1;
      }
      function ri(e) {
        return e && e.length ? Y4(e) : [];
      }
      function ci(e, n) {
        return e && e.length ? Y4(e, R(n, 2)) : [];
      }
      function di(e) {
        var n = e == null ? 0 : e.length;
        return n ? u2(e, 1, n) : [];
      }
      function li(e, n, t) {
        return e && e.length ? (n = t || n === o ? 1 : K(n), u2(e, 0, n < 0 ? 0 : n)) : [];
      }
      function ii(e, n, t) {
        var c = e == null ? 0 : e.length;
        return c ? (n = t || n === o ? 1 : K(n), n = c - n, u2(e, n < 0 ? 0 : n, c)) : [];
      }
      function si(e, n) {
        return e && e.length ? Zn(e, R(n, 3), !1, !0) : [];
      }
      function _i(e, n) {
        return e && e.length ? Zn(e, R(n, 3)) : [];
      }
      var ui = X(function(e) {
        return G2(Ee(e, 1, He, !0));
      }), mi = X(function(e) {
        var n = m2(e);
        return He(n) && (n = o), G2(Ee(e, 1, He, !0), R(n, 2));
      }), hi = X(function(e) {
        var n = m2(e);
        return n = typeof n == "function" ? n : o, G2(Ee(e, 1, He, !0), o, n);
      });
      function vi(e) {
        return e && e.length ? G2(e) : [];
      }
      function pi(e, n) {
        return e && e.length ? G2(e, R(n, 2)) : [];
      }
      function fi(e, n) {
        return n = typeof n == "function" ? n : o, e && e.length ? G2(e, o, n) : [];
      }
      function Ea(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = q2(e, function(t) {
          if (He(t))
            return n = Te(t.length, n), !0;
        }), ea(n, function(t) {
          return xe(e, J1(t));
        });
      }
      function Eo(e, n) {
        if (!(e && e.length))
          return [];
        var t = Ea(e);
        return n == null ? t : xe(t, function(c) {
          return Qe(n, o, c);
        });
      }
      var gi = X(function(e, n) {
        return He(e) ? en(e, n) : [];
      }), wi = X(function(e) {
        return xa(q2(e, He));
      }), $i = X(function(e) {
        var n = m2(e);
        return He(n) && (n = o), xa(q2(e, He), R(n, 2));
      }), xi = X(function(e) {
        var n = m2(e);
        return n = typeof n == "function" ? n : o, xa(q2(e, He), o, n);
      }), yi = X(Ea);
      function zi(e, n) {
        return eo(e || [], n || [], Q0);
      }
      function Ci(e, n) {
        return eo(e || [], n || [], tn);
      }
      var bi = X(function(e) {
        var n = e.length, t = n > 1 ? e[n - 1] : o;
        return t = typeof t == "function" ? (e.pop(), t) : o, Eo(e, t);
      });
      function ko(e) {
        var n = h(e);
        return n.__chain__ = !0, n;
      }
      function Mi(e, n) {
        return n(e), e;
      }
      function o1(e, n) {
        return n(e);
      }
      var Hi = I2(function(e) {
        var n = e.length, t = n ? e[0] : 0, c = this.__wrapped__, _ = function(v) {
          return la(v, e);
        };
        return n > 1 || this.__actions__.length || !(c instanceof ce) || !P2(t) ? this.thru(_) : (c = c.slice(t, +t + (n ? 1 : 0)), c.__actions__.push({
          func: o1,
          args: [_],
          thisArg: o
        }), new s2(c, this.__chain__).thru(function(v) {
          return n && !v.length && v.push(o), v;
        }));
      });
      function Ai() {
        return ko(this);
      }
      function Vi() {
        return new s2(this.value(), this.__chain__);
      }
      function Li() {
        this.__values__ === o && (this.__values__ = Xo(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? o : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function Si() {
        return this;
      }
      function Bi(e) {
        for (var n, t = this; t instanceof Nn; ) {
          var c = So(t);
          c.__index__ = 0, c.__values__ = o, n ? _.__wrapped__ = c : n = c;
          var _ = c;
          t = t.__wrapped__;
        }
        return _.__wrapped__ = e, n;
      }
      function Ti() {
        var e = this.__wrapped__;
        if (e instanceof ce) {
          var n = e;
          return this.__actions__.length && (n = new ce(this)), n = n.reverse(), n.__actions__.push({
            func: o1,
            args: [Pa],
            thisArg: o
          }), new s2(n, this.__chain__);
        }
        return this.thru(Pa);
      }
      function Oi() {
        return Q4(this.__wrapped__, this.__actions__);
      }
      var Ii = Yn(function(e, n, t) {
        me.call(e, t) ? ++e[t] : T2(e, t, 1);
      });
      function Pi(e, n, t) {
        var c = G(e) ? u4 : Md;
        return t && Ue(e, n, t) && (n = o), c(e, R(n, 3));
      }
      function Ei(e, n) {
        var t = G(e) ? q2 : P4;
        return t(e, R(n, 3));
      }
      var ki = _o(Bo), Fi = _o(To);
      function Di(e, n) {
        return Ee(r1(e, n), 1);
      }
      function Ri(e, n) {
        return Ee(r1(e, n), qe);
      }
      function qi(e, n, t) {
        return t = t === o ? 1 : K(t), Ee(r1(e, n), t);
      }
      function Fo(e, n) {
        var t = G(e) ? l2 : W2;
        return t(e, R(n, 3));
      }
      function Do(e, n) {
        var t = G(e) ? dc : I4;
        return t(e, R(n, 3));
      }
      var Ni = Yn(function(e, n, t) {
        me.call(e, t) ? e[t].push(n) : T2(e, t, [n]);
      });
      function Ui(e, n, t, c) {
        e = Ke(e) ? e : V0(e), t = t && !c ? K(t) : 0;
        var _ = e.length;
        return t < 0 && (t = Te(_ + t, 0)), s1(e) ? t <= _ && e.indexOf(n, t) > -1 : !!_ && f0(e, n, t) > -1;
      }
      var ji = X(function(e, n, t) {
        var c = -1, _ = typeof n == "function", v = Ke(e) ? y(e.length) : [];
        return W2(e, function(f) {
          v[++c] = _ ? Qe(n, f, t) : nn(f, n, t);
        }), v;
      }), Wi = Yn(function(e, n, t) {
        T2(e, t, n);
      });
      function r1(e, n) {
        var t = G(e) ? xe : q4;
        return t(e, R(n, 3));
      }
      function Gi(e, n, t, c) {
        return e == null ? [] : (G(n) || (n = n == null ? [] : [n]), t = c ? o : t, G(t) || (t = t == null ? [] : [t]), W4(e, n, t));
      }
      var Ki = Yn(function(e, n, t) {
        e[t ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Zi(e, n, t) {
        var c = G(e) ? Z1 : p4, _ = arguments.length < 3;
        return c(e, R(n, 4), t, _, W2);
      }
      function Yi(e, n, t) {
        var c = G(e) ? lc : p4, _ = arguments.length < 3;
        return c(e, R(n, 4), t, _, I4);
      }
      function Ji(e, n) {
        var t = G(e) ? q2 : P4;
        return t(e, l1(R(n, 3)));
      }
      function Xi(e) {
        var n = G(e) ? S4 : Ud;
        return n(e);
      }
      function Qi(e, n, t) {
        (t ? Ue(e, n, t) : n === o) ? n = 1 : n = K(n);
        var c = G(e) ? xd : jd;
        return c(e, n);
      }
      function e8(e) {
        var n = G(e) ? yd : Gd;
        return n(e);
      }
      function n8(e) {
        if (e == null)
          return 0;
        if (Ke(e))
          return s1(e) ? w0(e) : e.length;
        var n = De(e);
        return n == p2 || n == f2 ? e.size : ha(e).length;
      }
      function a8(e, n, t) {
        var c = G(e) ? Y1 : Kd;
        return t && Ue(e, n, t) && (n = o), c(e, R(n, 3));
      }
      var t8 = X(function(e, n) {
        if (e == null)
          return [];
        var t = n.length;
        return t > 1 && Ue(e, n[0], n[1]) ? n = [] : t > 2 && Ue(n[0], n[1], n[2]) && (n = [n[0]]), W4(e, Ee(n, 1), []);
      }), c1 = Ec || function() {
        return Pe.Date.now();
      };
      function o8(e, n) {
        if (typeof n != "function")
          throw new i2(x);
        return e = K(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function Ro(e, n, t) {
        return n = t ? o : n, n = e && n == null ? e.length : n, O2(e, J, o, o, o, o, n);
      }
      function qo(e, n) {
        var t;
        if (typeof n != "function")
          throw new i2(x);
        return e = K(e), function() {
          return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = o), t;
        };
      }
      var ka = X(function(e, n, t) {
        var c = B;
        if (t.length) {
          var _ = U2(t, H0(ka));
          c |= he;
        }
        return O2(e, c, n, t, _);
      }), No = X(function(e, n, t) {
        var c = B | V;
        if (t.length) {
          var _ = U2(t, H0(No));
          c |= he;
        }
        return O2(n, c, e, t, _);
      });
      function Uo(e, n, t) {
        n = t ? o : n;
        var c = O2(e, oe, o, o, o, o, o, n);
        return c.placeholder = Uo.placeholder, c;
      }
      function jo(e, n, t) {
        n = t ? o : n;
        var c = O2(e, ge, o, o, o, o, o, n);
        return c.placeholder = jo.placeholder, c;
      }
      function Wo(e, n, t) {
        var c, _, v, f, g, $, C = 0, b = !1, M = !1, L = !0;
        if (typeof e != "function")
          throw new i2(x);
        n = h2(n) || 0, ye(t) && (b = !!t.leading, M = "maxWait" in t, v = M ? Te(h2(t.maxWait) || 0, n) : v, L = "trailing" in t ? !!t.trailing : L);
        function E(Ae) {
          var x2 = c, F2 = _;
          return c = _ = o, C = Ae, f = e.apply(F2, x2), f;
        }
        function q(Ae) {
          return C = Ae, g = cn(ae, n), b ? E(Ae) : f;
        }
        function Z(Ae) {
          var x2 = Ae - $, F2 = Ae - C, _r = n - x2;
          return M ? Fe(_r, v - F2) : _r;
        }
        function N(Ae) {
          var x2 = Ae - $, F2 = Ae - C;
          return $ === o || x2 >= n || x2 < 0 || M && F2 >= v;
        }
        function ae() {
          var Ae = c1();
          if (N(Ae))
            return de(Ae);
          g = cn(ae, Z(Ae));
        }
        function de(Ae) {
          return g = o, L && c ? E(Ae) : (c = _ = o, f);
        }
        function t2() {
          g !== o && no(g), C = 0, c = $ = _ = g = o;
        }
        function je() {
          return g === o ? f : de(c1());
        }
        function o2() {
          var Ae = c1(), x2 = N(Ae);
          if (c = arguments, _ = this, $ = Ae, x2) {
            if (g === o)
              return q($);
            if (M)
              return no(g), g = cn(ae, n), E($);
          }
          return g === o && (g = cn(ae, n)), f;
        }
        return o2.cancel = t2, o2.flush = je, o2;
      }
      var r8 = X(function(e, n) {
        return O4(e, 1, n);
      }), c8 = X(function(e, n, t) {
        return O4(e, h2(n) || 0, t);
      });
      function d8(e) {
        return O2(e, v2);
      }
      function d1(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new i2(x);
        var t = function() {
          var c = arguments, _ = n ? n.apply(this, c) : c[0], v = t.cache;
          if (v.has(_))
            return v.get(_);
          var f = e.apply(this, c);
          return t.cache = v.set(_, f) || v, f;
        };
        return t.cache = new (d1.Cache || B2)(), t;
      }
      d1.Cache = B2;
      function l1(e) {
        if (typeof e != "function")
          throw new i2(x);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function l8(e) {
        return qo(2, e);
      }
      var i8 = Zd(function(e, n) {
        n = n.length == 1 && G(n[0]) ? xe(n[0], e2(R())) : xe(Ee(n, 1), e2(R()));
        var t = n.length;
        return X(function(c) {
          for (var _ = -1, v = Fe(c.length, t); ++_ < v; )
            c[_] = n[_].call(this, c[_]);
          return Qe(e, this, c);
        });
      }), Fa = X(function(e, n) {
        var t = U2(n, H0(Fa));
        return O2(e, he, o, n, t);
      }), Go = X(function(e, n) {
        var t = U2(n, H0(Go));
        return O2(e, re, o, n, t);
      }), s8 = I2(function(e, n) {
        return O2(e, ze, o, o, o, n);
      });
      function _8(e, n) {
        if (typeof e != "function")
          throw new i2(x);
        return n = n === o ? n : K(n), X(e, n);
      }
      function u8(e, n) {
        if (typeof e != "function")
          throw new i2(x);
        return n = n == null ? 0 : Te(K(n), 0), X(function(t) {
          var c = t[n], _ = Z2(t, 0, n);
          return c && N2(_, c), Qe(e, this, _);
        });
      }
      function m8(e, n, t) {
        var c = !0, _ = !0;
        if (typeof e != "function")
          throw new i2(x);
        return ye(t) && (c = "leading" in t ? !!t.leading : c, _ = "trailing" in t ? !!t.trailing : _), Wo(e, n, {
          leading: c,
          maxWait: n,
          trailing: _
        });
      }
      function h8(e) {
        return Ro(e, 1);
      }
      function v8(e, n) {
        return Fa(za(n), e);
      }
      function p8() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return G(e) ? e : [e];
      }
      function f8(e) {
        return _2(e, D);
      }
      function g8(e, n) {
        return n = typeof n == "function" ? n : o, _2(e, D, n);
      }
      function w8(e) {
        return _2(e, I | D);
      }
      function $8(e, n) {
        return n = typeof n == "function" ? n : o, _2(e, I | D, n);
      }
      function x8(e, n) {
        return n == null || T4(e, n, Oe(n));
      }
      function $2(e, n) {
        return e === n || e !== e && n !== n;
      }
      var y8 = e1(_a), z8 = e1(function(e, n) {
        return e >= n;
      }), c0 = F4(function() {
        return arguments;
      }()) ? F4 : function(e) {
        return Me(e) && me.call(e, "callee") && !b4.call(e, "callee");
      }, G = y.isArray, C8 = c4 ? e2(c4) : Bd;
      function Ke(e) {
        return e != null && i1(e.length) && !E2(e);
      }
      function He(e) {
        return Me(e) && Ke(e);
      }
      function b8(e) {
        return e === !0 || e === !1 || Me(e) && Ne(e) == D0;
      }
      var Y2 = Fc || Ya, M8 = d4 ? e2(d4) : Td;
      function H8(e) {
        return Me(e) && e.nodeType === 1 && !dn(e);
      }
      function A8(e) {
        if (e == null)
          return !0;
        if (Ke(e) && (G(e) || typeof e == "string" || typeof e.splice == "function" || Y2(e) || A0(e) || c0(e)))
          return !e.length;
        var n = De(e);
        if (n == p2 || n == f2)
          return !e.size;
        if (rn(e))
          return !ha(e).length;
        for (var t in e)
          if (me.call(e, t))
            return !1;
        return !0;
      }
      function V8(e, n) {
        return an(e, n);
      }
      function L8(e, n, t) {
        t = typeof t == "function" ? t : o;
        var c = t ? t(e, n) : o;
        return c === o ? an(e, n, o, t) : !!c;
      }
      function Da(e) {
        if (!Me(e))
          return !1;
        var n = Ne(e);
        return n == xn || n == Q3 || typeof e.message == "string" && typeof e.name == "string" && !dn(e);
      }
      function S8(e) {
        return typeof e == "number" && H4(e);
      }
      function E2(e) {
        if (!ye(e))
          return !1;
        var n = Ne(e);
        return n == yn || n == Ot || n == X3 || n == n6;
      }
      function Ko(e) {
        return typeof e == "number" && e == K(e);
      }
      function i1(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= R2;
      }
      function ye(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function Me(e) {
        return e != null && typeof e == "object";
      }
      var Zo = l4 ? e2(l4) : Id;
      function B8(e, n) {
        return e === n || ma(e, n, La(n));
      }
      function T8(e, n, t) {
        return t = typeof t == "function" ? t : o, ma(e, n, La(n), t);
      }
      function O8(e) {
        return Yo(e) && e != +e;
      }
      function I8(e) {
        if (gl(e))
          throw new W(s);
        return D4(e);
      }
      function P8(e) {
        return e === null;
      }
      function E8(e) {
        return e == null;
      }
      function Yo(e) {
        return typeof e == "number" || Me(e) && Ne(e) == q0;
      }
      function dn(e) {
        if (!Me(e) || Ne(e) != L2)
          return !1;
        var n = Pn(e);
        if (n === null)
          return !0;
        var t = me.call(n, "constructor") && n.constructor;
        return typeof t == "function" && t instanceof t && Bn.call(t) == Tc;
      }
      var Ra = i4 ? e2(i4) : Pd;
      function k8(e) {
        return Ko(e) && e >= -R2 && e <= R2;
      }
      var Jo = s4 ? e2(s4) : Ed;
      function s1(e) {
        return typeof e == "string" || !G(e) && Me(e) && Ne(e) == U0;
      }
      function a2(e) {
        return typeof e == "symbol" || Me(e) && Ne(e) == zn;
      }
      var A0 = _4 ? e2(_4) : kd;
      function F8(e) {
        return e === o;
      }
      function D8(e) {
        return Me(e) && De(e) == j0;
      }
      function R8(e) {
        return Me(e) && Ne(e) == t6;
      }
      var q8 = e1(va), N8 = e1(function(e, n) {
        return e <= n;
      });
      function Xo(e) {
        if (!e)
          return [];
        if (Ke(e))
          return s1(e) ? g2(e) : Ge(e);
        if (K0 && e[K0])
          return xc(e[K0]());
        var n = De(e), t = n == p2 ? aa : n == f2 ? Vn : V0;
        return t(e);
      }
      function k2(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = h2(e), e === qe || e === -qe) {
          var n = e < 0 ? -1 : 1;
          return n * K3;
        }
        return e === e ? e : 0;
      }
      function K(e) {
        var n = k2(e), t = n % 1;
        return n === n ? t ? n - t : n : 0;
      }
      function Qo(e) {
        return e ? a0(K(e), 0, z2) : 0;
      }
      function h2(e) {
        if (typeof e == "number")
          return e;
        if (a2(e))
          return wn;
        if (ye(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ye(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = f4(e);
        var t = C6.test(e);
        return t || M6.test(e) ? oc(e.slice(2), t ? 2 : 8) : z6.test(e) ? wn : +e;
      }
      function er(e) {
        return b2(e, Ze(e));
      }
      function U8(e) {
        return e ? a0(K(e), -R2, R2) : e === 0 ? e : 0;
      }
      function se(e) {
        return e == null ? "" : n2(e);
      }
      var j8 = b0(function(e, n) {
        if (rn(n) || Ke(n)) {
          b2(n, Oe(n), e);
          return;
        }
        for (var t in n)
          me.call(n, t) && Q0(e, t, n[t]);
      }), nr = b0(function(e, n) {
        b2(n, Ze(n), e);
      }), _1 = b0(function(e, n, t, c) {
        b2(n, Ze(n), e, c);
      }), W8 = b0(function(e, n, t, c) {
        b2(n, Oe(n), e, c);
      }), G8 = I2(la);
      function K8(e, n) {
        var t = C0(e);
        return n == null ? t : B4(t, n);
      }
      var Z8 = X(function(e, n) {
        e = ve(e);
        var t = -1, c = n.length, _ = c > 2 ? n[2] : o;
        for (_ && Ue(n[0], n[1], _) && (c = 1); ++t < c; )
          for (var v = n[t], f = Ze(v), g = -1, $ = f.length; ++g < $; ) {
            var C = f[g], b = e[C];
            (b === o || $2(b, x0[C]) && !me.call(e, C)) && (e[C] = v[C]);
          }
        return e;
      }), Y8 = X(function(e) {
        return e.push(o, go), Qe(ar, o, e);
      });
      function J8(e, n) {
        return m4(e, R(n, 3), C2);
      }
      function X8(e, n) {
        return m4(e, R(n, 3), sa);
      }
      function Q8(e, n) {
        return e == null ? e : ia(e, R(n, 3), Ze);
      }
      function es(e, n) {
        return e == null ? e : E4(e, R(n, 3), Ze);
      }
      function ns(e, n) {
        return e && C2(e, R(n, 3));
      }
      function as(e, n) {
        return e && sa(e, R(n, 3));
      }
      function ts(e) {
        return e == null ? [] : Wn(e, Oe(e));
      }
      function os(e) {
        return e == null ? [] : Wn(e, Ze(e));
      }
      function qa(e, n, t) {
        var c = e == null ? o : t0(e, n);
        return c === o ? t : c;
      }
      function rs(e, n) {
        return e != null && xo(e, n, Ad);
      }
      function Na(e, n) {
        return e != null && xo(e, n, Vd);
      }
      var cs = mo(function(e, n, t) {
        n != null && typeof n.toString != "function" && (n = Tn.call(n)), e[n] = t;
      }, ja(Ye)), ds = mo(function(e, n, t) {
        n != null && typeof n.toString != "function" && (n = Tn.call(n)), me.call(e, n) ? e[n].push(t) : e[n] = [t];
      }, R), ls = X(nn);
      function Oe(e) {
        return Ke(e) ? L4(e) : ha(e);
      }
      function Ze(e) {
        return Ke(e) ? L4(e, !0) : Fd(e);
      }
      function is(e, n) {
        var t = {};
        return n = R(n, 3), C2(e, function(c, _, v) {
          T2(t, n(c, _, v), c);
        }), t;
      }
      function ss(e, n) {
        var t = {};
        return n = R(n, 3), C2(e, function(c, _, v) {
          T2(t, _, n(c, _, v));
        }), t;
      }
      var _s = b0(function(e, n, t) {
        Gn(e, n, t);
      }), ar = b0(function(e, n, t, c) {
        Gn(e, n, t, c);
      }), us = I2(function(e, n) {
        var t = {};
        if (e == null)
          return t;
        var c = !1;
        n = xe(n, function(v) {
          return v = K2(v, e), c || (c = v.length > 1), v;
        }), b2(e, Aa(e), t), c && (t = _2(t, I | Y | D, cl));
        for (var _ = n.length; _--; )
          $a(t, n[_]);
        return t;
      });
      function ms(e, n) {
        return tr(e, l1(R(n)));
      }
      var hs = I2(function(e, n) {
        return e == null ? {} : Rd(e, n);
      });
      function tr(e, n) {
        if (e == null)
          return {};
        var t = xe(Aa(e), function(c) {
          return [c];
        });
        return n = R(n), G4(e, t, function(c, _) {
          return n(c, _[0]);
        });
      }
      function vs(e, n, t) {
        n = K2(n, e);
        var c = -1, _ = n.length;
        for (_ || (_ = 1, e = o); ++c < _; ) {
          var v = e == null ? o : e[M2(n[c])];
          v === o && (c = _, v = t), e = E2(v) ? v.call(e) : v;
        }
        return e;
      }
      function ps(e, n, t) {
        return e == null ? e : tn(e, n, t);
      }
      function fs(e, n, t, c) {
        return c = typeof c == "function" ? c : o, e == null ? e : tn(e, n, t, c);
      }
      var or = po(Oe), rr = po(Ze);
      function gs(e, n, t) {
        var c = G(e), _ = c || Y2(e) || A0(e);
        if (n = R(n, 4), t == null) {
          var v = e && e.constructor;
          _ ? t = c ? new v() : [] : ye(e) ? t = E2(v) ? C0(Pn(e)) : {} : t = {};
        }
        return (_ ? l2 : C2)(e, function(f, g, $) {
          return n(t, f, g, $);
        }), t;
      }
      function ws(e, n) {
        return e == null ? !0 : $a(e, n);
      }
      function $s(e, n, t) {
        return e == null ? e : X4(e, n, za(t));
      }
      function xs(e, n, t, c) {
        return c = typeof c == "function" ? c : o, e == null ? e : X4(e, n, za(t), c);
      }
      function V0(e) {
        return e == null ? [] : na(e, Oe(e));
      }
      function ys(e) {
        return e == null ? [] : na(e, Ze(e));
      }
      function zs(e, n, t) {
        return t === o && (t = n, n = o), t !== o && (t = h2(t), t = t === t ? t : 0), n !== o && (n = h2(n), n = n === n ? n : 0), a0(h2(e), n, t);
      }
      function Cs(e, n, t) {
        return n = k2(n), t === o ? (t = n, n = 0) : t = k2(t), e = h2(e), Ld(e, n, t);
      }
      function bs(e, n, t) {
        if (t && typeof t != "boolean" && Ue(e, n, t) && (n = t = o), t === o && (typeof n == "boolean" ? (t = n, n = o) : typeof e == "boolean" && (t = e, e = o)), e === o && n === o ? (e = 0, n = 1) : (e = k2(e), n === o ? (n = e, e = 0) : n = k2(n)), e > n) {
          var c = e;
          e = n, n = c;
        }
        if (t || e % 1 || n % 1) {
          var _ = A4();
          return Fe(e + _ * (n - e + tc("1e-" + ((_ + "").length - 1))), n);
        }
        return fa(e, n);
      }
      var Ms = M0(function(e, n, t) {
        return n = n.toLowerCase(), e + (t ? cr(n) : n);
      });
      function cr(e) {
        return Ua(se(e).toLowerCase());
      }
      function dr(e) {
        return e = se(e), e && e.replace(A6, pc).replace(G6, "");
      }
      function Hs(e, n, t) {
        e = se(e), n = n2(n);
        var c = e.length;
        t = t === o ? c : a0(K(t), 0, c);
        var _ = t;
        return t -= n.length, t >= 0 && e.slice(t, _) == n;
      }
      function As(e) {
        return e = se(e), e && l6.test(e) ? e.replace(Et, fc) : e;
      }
      function Vs(e) {
        return e = se(e), e && h6.test(e) ? e.replace(F1, "\\$&") : e;
      }
      var Ls = M0(function(e, n, t) {
        return e + (t ? "-" : "") + n.toLowerCase();
      }), Ss = M0(function(e, n, t) {
        return e + (t ? " " : "") + n.toLowerCase();
      }), Bs = so("toLowerCase");
      function Ts(e, n, t) {
        e = se(e), n = K(n);
        var c = n ? w0(e) : 0;
        if (!n || c >= n)
          return e;
        var _ = (n - c) / 2;
        return Qn(Dn(_), t) + e + Qn(Fn(_), t);
      }
      function Os(e, n, t) {
        e = se(e), n = K(n);
        var c = n ? w0(e) : 0;
        return n && c < n ? e + Qn(n - c, t) : e;
      }
      function Is(e, n, t) {
        e = se(e), n = K(n);
        var c = n ? w0(e) : 0;
        return n && c < n ? Qn(n - c, t) + e : e;
      }
      function Ps(e, n, t) {
        return t || n == null ? n = 0 : n && (n = +n), Nc(se(e).replace(D1, ""), n || 0);
      }
      function Es(e, n, t) {
        return (t ? Ue(e, n, t) : n === o) ? n = 1 : n = K(n), ga(se(e), n);
      }
      function ks() {
        var e = arguments, n = se(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var Fs = M0(function(e, n, t) {
        return e + (t ? "_" : "") + n.toLowerCase();
      });
      function Ds(e, n, t) {
        return t && typeof t != "number" && Ue(e, n, t) && (n = t = o), t = t === o ? z2 : t >>> 0, t ? (e = se(e), e && (typeof n == "string" || n != null && !Ra(n)) && (n = n2(n), !n && g0(e)) ? Z2(g2(e), 0, t) : e.split(n, t)) : [];
      }
      var Rs = M0(function(e, n, t) {
        return e + (t ? " " : "") + Ua(n);
      });
      function qs(e, n, t) {
        return e = se(e), t = t == null ? 0 : a0(K(t), 0, e.length), n = n2(n), e.slice(t, t + n.length) == n;
      }
      function Ns(e, n, t) {
        var c = h.templateSettings;
        t && Ue(e, n, t) && (n = o), e = se(e), n = _1({}, n, c, fo);
        var _ = _1({}, n.imports, c.imports, fo), v = Oe(_), f = na(_, v), g, $, C = 0, b = n.interpolate || Cn, M = "__p += '", L = ta(
          (n.escape || Cn).source + "|" + b.source + "|" + (b === kt ? y6 : Cn).source + "|" + (n.evaluate || Cn).source + "|$",
          "g"
        ), E = "//# sourceURL=" + (me.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++X6 + "]") + `
`;
        e.replace(L, function(N, ae, de, t2, je, o2) {
          return de || (de = t2), M += e.slice(C, o2).replace(V6, gc), ae && (g = !0, M += `' +
__e(` + ae + `) +
'`), je && ($ = !0, M += `';
` + je + `;
__p += '`), de && (M += `' +
((__t = (` + de + `)) == null ? '' : __t) +
'`), C = o2 + N.length, N;
        }), M += `';
`;
        var q = me.call(n, "variable") && n.variable;
        if (!q)
          M = `with (obj) {
` + M + `
}
`;
        else if ($6.test(q))
          throw new W(H);
        M = ($ ? M.replace(o6, "") : M).replace(r6, "$1").replace(c6, "$1;"), M = "function(" + (q || "obj") + `) {
` + (q ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + ($ ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + M + `return __p
}`;
        var Z = ir(function() {
          return ie(v, E + "return " + M).apply(o, f);
        });
        if (Z.source = M, Da(Z))
          throw Z;
        return Z;
      }
      function Us(e) {
        return se(e).toLowerCase();
      }
      function js(e) {
        return se(e).toUpperCase();
      }
      function Ws(e, n, t) {
        if (e = se(e), e && (t || n === o))
          return f4(e);
        if (!e || !(n = n2(n)))
          return e;
        var c = g2(e), _ = g2(n), v = g4(c, _), f = w4(c, _) + 1;
        return Z2(c, v, f).join("");
      }
      function Gs(e, n, t) {
        if (e = se(e), e && (t || n === o))
          return e.slice(0, x4(e) + 1);
        if (!e || !(n = n2(n)))
          return e;
        var c = g2(e), _ = w4(c, g2(n)) + 1;
        return Z2(c, 0, _).join("");
      }
      function Ks(e, n, t) {
        if (e = se(e), e && (t || n === o))
          return e.replace(D1, "");
        if (!e || !(n = n2(n)))
          return e;
        var c = g2(e), _ = g4(c, g2(n));
        return Z2(c, _).join("");
      }
      function Zs(e, n) {
        var t = F0, c = Ce;
        if (ye(n)) {
          var _ = "separator" in n ? n.separator : _;
          t = "length" in n ? K(n.length) : t, c = "omission" in n ? n2(n.omission) : c;
        }
        e = se(e);
        var v = e.length;
        if (g0(e)) {
          var f = g2(e);
          v = f.length;
        }
        if (t >= v)
          return e;
        var g = t - w0(c);
        if (g < 1)
          return c;
        var $ = f ? Z2(f, 0, g).join("") : e.slice(0, g);
        if (_ === o)
          return $ + c;
        if (f && (g += $.length - g), Ra(_)) {
          if (e.slice(g).search(_)) {
            var C, b = $;
            for (_.global || (_ = ta(_.source, se(Ft.exec(_)) + "g")), _.lastIndex = 0; C = _.exec(b); )
              var M = C.index;
            $ = $.slice(0, M === o ? g : M);
          }
        } else if (e.indexOf(n2(_), g) != g) {
          var L = $.lastIndexOf(_);
          L > -1 && ($ = $.slice(0, L));
        }
        return $ + c;
      }
      function Ys(e) {
        return e = se(e), e && d6.test(e) ? e.replace(Pt, bc) : e;
      }
      var Js = M0(function(e, n, t) {
        return e + (t ? " " : "") + n.toUpperCase();
      }), Ua = so("toUpperCase");
      function lr(e, n, t) {
        return e = se(e), n = t ? o : n, n === o ? $c(e) ? Ac(e) : _c(e) : e.match(n) || [];
      }
      var ir = X(function(e, n) {
        try {
          return Qe(e, o, n);
        } catch (t) {
          return Da(t) ? t : new W(t);
        }
      }), Xs = I2(function(e, n) {
        return l2(n, function(t) {
          t = M2(t), T2(e, t, ka(e[t], e));
        }), e;
      });
      function Qs(e) {
        var n = e == null ? 0 : e.length, t = R();
        return e = n ? xe(e, function(c) {
          if (typeof c[1] != "function")
            throw new i2(x);
          return [t(c[0]), c[1]];
        }) : [], X(function(c) {
          for (var _ = -1; ++_ < n; ) {
            var v = e[_];
            if (Qe(v[0], this, c))
              return Qe(v[1], this, c);
          }
        });
      }
      function e_(e) {
        return bd(_2(e, I));
      }
      function ja(e) {
        return function() {
          return e;
        };
      }
      function n_(e, n) {
        return e == null || e !== e ? n : e;
      }
      var a_ = uo(), t_ = uo(!0);
      function Ye(e) {
        return e;
      }
      function Wa(e) {
        return R4(typeof e == "function" ? e : _2(e, I));
      }
      function o_(e) {
        return N4(_2(e, I));
      }
      function r_(e, n) {
        return U4(e, _2(n, I));
      }
      var c_ = X(function(e, n) {
        return function(t) {
          return nn(t, e, n);
        };
      }), d_ = X(function(e, n) {
        return function(t) {
          return nn(e, t, n);
        };
      });
      function Ga(e, n, t) {
        var c = Oe(n), _ = Wn(n, c);
        t == null && !(ye(n) && (_.length || !c.length)) && (t = n, n = e, e = this, _ = Wn(n, Oe(n)));
        var v = !(ye(t) && "chain" in t) || !!t.chain, f = E2(e);
        return l2(_, function(g) {
          var $ = n[g];
          e[g] = $, f && (e.prototype[g] = function() {
            var C = this.__chain__;
            if (v || C) {
              var b = e(this.__wrapped__), M = b.__actions__ = Ge(this.__actions__);
              return M.push({ func: $, args: arguments, thisArg: e }), b.__chain__ = C, b;
            }
            return $.apply(e, N2([this.value()], arguments));
          });
        }), e;
      }
      function l_() {
        return Pe._ === this && (Pe._ = Oc), this;
      }
      function Ka() {
      }
      function i_(e) {
        return e = K(e), X(function(n) {
          return j4(n, e);
        });
      }
      var s_ = ba(xe), __ = ba(u4), u_ = ba(Y1);
      function sr(e) {
        return Ba(e) ? J1(M2(e)) : qd(e);
      }
      function m_(e) {
        return function(n) {
          return e == null ? o : t0(e, n);
        };
      }
      var h_ = ho(), v_ = ho(!0);
      function Za() {
        return [];
      }
      function Ya() {
        return !1;
      }
      function p_() {
        return {};
      }
      function f_() {
        return "";
      }
      function g_() {
        return !0;
      }
      function w_(e, n) {
        if (e = K(e), e < 1 || e > R2)
          return [];
        var t = z2, c = Fe(e, z2);
        n = R(n), e -= z2;
        for (var _ = ea(c, n); ++t < e; )
          n(t);
        return _;
      }
      function $_(e) {
        return G(e) ? xe(e, M2) : a2(e) ? [e] : Ge(Lo(se(e)));
      }
      function x_(e) {
        var n = ++Bc;
        return se(e) + n;
      }
      var y_ = Xn(function(e, n) {
        return e + n;
      }, 0), z_ = Ma("ceil"), C_ = Xn(function(e, n) {
        return e / n;
      }, 1), b_ = Ma("floor");
      function M_(e) {
        return e && e.length ? jn(e, Ye, _a) : o;
      }
      function H_(e, n) {
        return e && e.length ? jn(e, R(n, 2), _a) : o;
      }
      function A_(e) {
        return v4(e, Ye);
      }
      function V_(e, n) {
        return v4(e, R(n, 2));
      }
      function L_(e) {
        return e && e.length ? jn(e, Ye, va) : o;
      }
      function S_(e, n) {
        return e && e.length ? jn(e, R(n, 2), va) : o;
      }
      var B_ = Xn(function(e, n) {
        return e * n;
      }, 1), T_ = Ma("round"), O_ = Xn(function(e, n) {
        return e - n;
      }, 0);
      function I_(e) {
        return e && e.length ? Q1(e, Ye) : 0;
      }
      function P_(e, n) {
        return e && e.length ? Q1(e, R(n, 2)) : 0;
      }
      return h.after = o8, h.ary = Ro, h.assign = j8, h.assignIn = nr, h.assignInWith = _1, h.assignWith = W8, h.at = G8, h.before = qo, h.bind = ka, h.bindAll = Xs, h.bindKey = No, h.castArray = p8, h.chain = ko, h.chunk = bl, h.compact = Ml, h.concat = Hl, h.cond = Qs, h.conforms = e_, h.constant = ja, h.countBy = Ii, h.create = K8, h.curry = Uo, h.curryRight = jo, h.debounce = Wo, h.defaults = Z8, h.defaultsDeep = Y8, h.defer = r8, h.delay = c8, h.difference = Al, h.differenceBy = Vl, h.differenceWith = Ll, h.drop = Sl, h.dropRight = Bl, h.dropRightWhile = Tl, h.dropWhile = Ol, h.fill = Il, h.filter = Ei, h.flatMap = Di, h.flatMapDeep = Ri, h.flatMapDepth = qi, h.flatten = Oo, h.flattenDeep = Pl, h.flattenDepth = El, h.flip = d8, h.flow = a_, h.flowRight = t_, h.fromPairs = kl, h.functions = ts, h.functionsIn = os, h.groupBy = Ni, h.initial = Dl, h.intersection = Rl, h.intersectionBy = ql, h.intersectionWith = Nl, h.invert = cs, h.invertBy = ds, h.invokeMap = ji, h.iteratee = Wa, h.keyBy = Wi, h.keys = Oe, h.keysIn = Ze, h.map = r1, h.mapKeys = is, h.mapValues = ss, h.matches = o_, h.matchesProperty = r_, h.memoize = d1, h.merge = _s, h.mergeWith = ar, h.method = c_, h.methodOf = d_, h.mixin = Ga, h.negate = l1, h.nthArg = i_, h.omit = us, h.omitBy = ms, h.once = l8, h.orderBy = Gi, h.over = s_, h.overArgs = i8, h.overEvery = __, h.overSome = u_, h.partial = Fa, h.partialRight = Go, h.partition = Ki, h.pick = hs, h.pickBy = tr, h.property = sr, h.propertyOf = m_, h.pull = Gl, h.pullAll = Po, h.pullAllBy = Kl, h.pullAllWith = Zl, h.pullAt = Yl, h.range = h_, h.rangeRight = v_, h.rearg = s8, h.reject = Ji, h.remove = Jl, h.rest = _8, h.reverse = Pa, h.sampleSize = Qi, h.set = ps, h.setWith = fs, h.shuffle = e8, h.slice = Xl, h.sortBy = t8, h.sortedUniq = ri, h.sortedUniqBy = ci, h.split = Ds, h.spread = u8, h.tail = di, h.take = li, h.takeRight = ii, h.takeRightWhile = si, h.takeWhile = _i, h.tap = Mi, h.throttle = m8, h.thru = o1, h.toArray = Xo, h.toPairs = or, h.toPairsIn = rr, h.toPath = $_, h.toPlainObject = er, h.transform = gs, h.unary = h8, h.union = ui, h.unionBy = mi, h.unionWith = hi, h.uniq = vi, h.uniqBy = pi, h.uniqWith = fi, h.unset = ws, h.unzip = Ea, h.unzipWith = Eo, h.update = $s, h.updateWith = xs, h.values = V0, h.valuesIn = ys, h.without = gi, h.words = lr, h.wrap = v8, h.xor = wi, h.xorBy = $i, h.xorWith = xi, h.zip = yi, h.zipObject = zi, h.zipObjectDeep = Ci, h.zipWith = bi, h.entries = or, h.entriesIn = rr, h.extend = nr, h.extendWith = _1, Ga(h, h), h.add = y_, h.attempt = ir, h.camelCase = Ms, h.capitalize = cr, h.ceil = z_, h.clamp = zs, h.clone = f8, h.cloneDeep = w8, h.cloneDeepWith = $8, h.cloneWith = g8, h.conformsTo = x8, h.deburr = dr, h.defaultTo = n_, h.divide = C_, h.endsWith = Hs, h.eq = $2, h.escape = As, h.escapeRegExp = Vs, h.every = Pi, h.find = ki, h.findIndex = Bo, h.findKey = J8, h.findLast = Fi, h.findLastIndex = To, h.findLastKey = X8, h.floor = b_, h.forEach = Fo, h.forEachRight = Do, h.forIn = Q8, h.forInRight = es, h.forOwn = ns, h.forOwnRight = as, h.get = qa, h.gt = y8, h.gte = z8, h.has = rs, h.hasIn = Na, h.head = Io, h.identity = Ye, h.includes = Ui, h.indexOf = Fl, h.inRange = Cs, h.invoke = ls, h.isArguments = c0, h.isArray = G, h.isArrayBuffer = C8, h.isArrayLike = Ke, h.isArrayLikeObject = He, h.isBoolean = b8, h.isBuffer = Y2, h.isDate = M8, h.isElement = H8, h.isEmpty = A8, h.isEqual = V8, h.isEqualWith = L8, h.isError = Da, h.isFinite = S8, h.isFunction = E2, h.isInteger = Ko, h.isLength = i1, h.isMap = Zo, h.isMatch = B8, h.isMatchWith = T8, h.isNaN = O8, h.isNative = I8, h.isNil = E8, h.isNull = P8, h.isNumber = Yo, h.isObject = ye, h.isObjectLike = Me, h.isPlainObject = dn, h.isRegExp = Ra, h.isSafeInteger = k8, h.isSet = Jo, h.isString = s1, h.isSymbol = a2, h.isTypedArray = A0, h.isUndefined = F8, h.isWeakMap = D8, h.isWeakSet = R8, h.join = Ul, h.kebabCase = Ls, h.last = m2, h.lastIndexOf = jl, h.lowerCase = Ss, h.lowerFirst = Bs, h.lt = q8, h.lte = N8, h.max = M_, h.maxBy = H_, h.mean = A_, h.meanBy = V_, h.min = L_, h.minBy = S_, h.stubArray = Za, h.stubFalse = Ya, h.stubObject = p_, h.stubString = f_, h.stubTrue = g_, h.multiply = B_, h.nth = Wl, h.noConflict = l_, h.noop = Ka, h.now = c1, h.pad = Ts, h.padEnd = Os, h.padStart = Is, h.parseInt = Ps, h.random = bs, h.reduce = Zi, h.reduceRight = Yi, h.repeat = Es, h.replace = ks, h.result = vs, h.round = T_, h.runInContext = w, h.sample = Xi, h.size = n8, h.snakeCase = Fs, h.some = a8, h.sortedIndex = Ql, h.sortedIndexBy = ei, h.sortedIndexOf = ni, h.sortedLastIndex = ai, h.sortedLastIndexBy = ti, h.sortedLastIndexOf = oi, h.startCase = Rs, h.startsWith = qs, h.subtract = O_, h.sum = I_, h.sumBy = P_, h.template = Ns, h.times = w_, h.toFinite = k2, h.toInteger = K, h.toLength = Qo, h.toLower = Us, h.toNumber = h2, h.toSafeInteger = U8, h.toString = se, h.toUpper = js, h.trim = Ws, h.trimEnd = Gs, h.trimStart = Ks, h.truncate = Zs, h.unescape = Ys, h.uniqueId = x_, h.upperCase = Js, h.upperFirst = Ua, h.each = Fo, h.eachRight = Do, h.first = Io, Ga(h, function() {
        var e = {};
        return C2(h, function(n, t) {
          me.call(h.prototype, t) || (e[t] = n);
        }), e;
      }(), { chain: !1 }), h.VERSION = d, l2(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        h[e].placeholder = h;
      }), l2(["drop", "take"], function(e, n) {
        ce.prototype[e] = function(t) {
          t = t === o ? 1 : Te(K(t), 0);
          var c = this.__filtered__ && !n ? new ce(this) : this.clone();
          return c.__filtered__ ? c.__takeCount__ = Fe(t, c.__takeCount__) : c.__views__.push({
            size: Fe(t, z2),
            type: e + (c.__dir__ < 0 ? "Right" : "")
          }), c;
        }, ce.prototype[e + "Right"] = function(t) {
          return this.reverse()[e](t).reverse();
        };
      }), l2(["filter", "map", "takeWhile"], function(e, n) {
        var t = n + 1, c = t == be || t == Ie;
        ce.prototype[e] = function(_) {
          var v = this.clone();
          return v.__iteratees__.push({
            iteratee: R(_, 3),
            type: t
          }), v.__filtered__ = v.__filtered__ || c, v;
        };
      }), l2(["head", "last"], function(e, n) {
        var t = "take" + (n ? "Right" : "");
        ce.prototype[e] = function() {
          return this[t](1).value()[0];
        };
      }), l2(["initial", "tail"], function(e, n) {
        var t = "drop" + (n ? "" : "Right");
        ce.prototype[e] = function() {
          return this.__filtered__ ? new ce(this) : this[t](1);
        };
      }), ce.prototype.compact = function() {
        return this.filter(Ye);
      }, ce.prototype.find = function(e) {
        return this.filter(e).head();
      }, ce.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ce.prototype.invokeMap = X(function(e, n) {
        return typeof e == "function" ? new ce(this) : this.map(function(t) {
          return nn(t, e, n);
        });
      }), ce.prototype.reject = function(e) {
        return this.filter(l1(R(e)));
      }, ce.prototype.slice = function(e, n) {
        e = K(e);
        var t = this;
        return t.__filtered__ && (e > 0 || n < 0) ? new ce(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== o && (n = K(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
      }, ce.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ce.prototype.toArray = function() {
        return this.take(z2);
      }, C2(ce.prototype, function(e, n) {
        var t = /^(?:filter|find|map|reject)|While$/.test(n), c = /^(?:head|last)$/.test(n), _ = h[c ? "take" + (n == "last" ? "Right" : "") : n], v = c || /^find/.test(n);
        _ && (h.prototype[n] = function() {
          var f = this.__wrapped__, g = c ? [1] : arguments, $ = f instanceof ce, C = g[0], b = $ || G(f), M = function(ae) {
            var de = _.apply(h, N2([ae], g));
            return c && L ? de[0] : de;
          };
          b && t && typeof C == "function" && C.length != 1 && ($ = b = !1);
          var L = this.__chain__, E = !!this.__actions__.length, q = v && !L, Z = $ && !E;
          if (!v && b) {
            f = Z ? f : new ce(this);
            var N = e.apply(f, g);
            return N.__actions__.push({ func: o1, args: [M], thisArg: o }), new s2(N, L);
          }
          return q && Z ? e.apply(this, g) : (N = this.thru(M), q ? c ? N.value()[0] : N.value() : N);
        });
      }), l2(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Ln[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", c = /^(?:pop|shift)$/.test(e);
        h.prototype[e] = function() {
          var _ = arguments;
          if (c && !this.__chain__) {
            var v = this.value();
            return n.apply(G(v) ? v : [], _);
          }
          return this[t](function(f) {
            return n.apply(G(f) ? f : [], _);
          });
        };
      }), C2(ce.prototype, function(e, n) {
        var t = h[n];
        if (t) {
          var c = t.name + "";
          me.call(z0, c) || (z0[c] = []), z0[c].push({ name: n, func: t });
        }
      }), z0[Jn(o, V).name] = [{
        name: "wrapper",
        func: o
      }], ce.prototype.clone = Yc, ce.prototype.reverse = Jc, ce.prototype.value = Xc, h.prototype.at = Hi, h.prototype.chain = Ai, h.prototype.commit = Vi, h.prototype.next = Li, h.prototype.plant = Bi, h.prototype.reverse = Ti, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Oi, h.prototype.first = h.prototype.head, K0 && (h.prototype[K0] = Si), h;
    }, $0 = Vc();
    X2 ? ((X2.exports = $0)._ = $0, W1._ = $0) : Pe._ = $0;
  }).call(D2);
})(w1, w1.exports);
var u1 = w1.exports;
const a0e = {
  key: 0,
  style: { display: "flex" }
}, t0e = ["onClick"], o0e = {
  key: 1,
  class: "icons"
}, r0e = /* @__PURE__ */ Se({
  __name: "index",
  props: {
    // 表格配置
    options: {
      type: Array,
      required: !0
    },
    // 表格数据
    data: {
      type: Array,
      required: !0
    },
    // 加载文案
    elementLoadingText: {
      type: String
    },
    // 自定义加载图标
    elementLoadingSpinner: {
      type: String
    },
    // 背景遮罩的颜色
    elementLoadingBackground: {
      type: String
    },
    // 自定义加载图标 (与 element-loading-spinner 相同)
    elementLoadingSvg: {
      type: String
    },
    // 加载svg的配置
    elementLoadingSvgViewBox: {
      type: String
    },
    // 可编辑单元格显示的图标
    editIcon: {
      type: String,
      default: "edit"
    },
    // 是否可以编辑行
    isEditRow: {
      type: Boolean,
      default: !1
    },
    // 编辑行的按钮标识
    editRowIndex: {
      type: String,
      default: ""
    },
    // 是否显示分页
    pagination: {
      type: Boolean,
      default: !1
    },
    // 当前是第几页数据
    currentPage: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: [10, 20, 30, 50]
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number
    },
    // 分页的排列方式
    paginationAligin: {
      type: String,
      default: "left"
    }
  },
  emits: [
    "confirm",
    "cancel",
    "update:editRowIndex",
    "sizeChange",
    "currentChange"
  ],
  setup(a, { emit: r }) {
    let o = a, d = ue(() => o.options.filter((T) => !T.action)), l = ue(() => o.options.find((T) => T.action)), s = ue(() => !o.data || !o.data.length), x = ue(() => o.paginationAligin === "left" ? "flex-start" : o.paginationAligin === "center" ? "center" : "flex-end");
    const H = Q("");
    let S = Q(u1.cloneDeep(o.data)), A = Q(u1.cloneDeep(o.editRowIndex));
    const P = (T) => {
      H.value = T.$index + T.column.id;
    };
    Re(
      () => o.data,
      (T) => {
        S.value = u1.cloneDeep(T), S.value.map((oe) => {
          oe.rowEdit = !1;
        });
      },
      { deep: !0 }
    ), Re(
      () => o.editRowIndex,
      (T) => {
        console.log(T), T && (A.value = u1.cloneDeep(T));
      }
    ), B0(() => {
      S.value.map((T) => {
        T.rowEdit = !1;
      });
    });
    const I = () => {
      H.value = "";
    }, Y = (T) => {
      V("confirm", T);
    }, D = (T) => {
      V("cancel", T);
    }, te = (T, oe) => {
      oe.label === l.value.label && o.isEditRow && A.value === o.editRowIndex && (T.rowEdit = !T.rowEdit, S.value.map((ge) => {
        ge !== T && (ge.rowEdit = !1);
      }), T.rowEdit || V("update:editRowIndex", ""));
    }, k = (T) => {
      V("sizeChange", T);
    }, B = (T) => {
      V("currentChange", T);
    }, V = r;
    return (T, oe) => {
      const ge = ee("el-input"), he = ee("el-icon-check"), re = ee("el-icon-close"), J = ee("el-table-column"), ze = ee("el-table"), v2 = ee("el-pagination"), F0 = K_("loading");
      return u(), m(
        le,
        null,
        [
          lt((u(), ne(ze, r2(T.$attrs, {
            data: F(S),
            "element-loading-text": a.elementLoadingText,
            "element-loading-spinner": a.elementLoadingSpinner,
            "element-loading-svg": a.elementLoadingSvg,
            "element-loading-svg-view-box": a.elementLoadingSvgViewBox,
            "element-loading-background": a.elementLoadingBackground,
            onRowClick: te
          }), {
            default: U(() => {
              var Ce, ke, We;
              return [
                (u(!0), m(
                  le,
                  null,
                  Ve(F(d), (be, m0) => (u(), ne(J, {
                    key: m0,
                    label: be.label,
                    prop: be.prop,
                    align: be.aligin,
                    width: be.width
                  }, {
                    default: U((Ie) => [
                      _e(" 可编辑行 "),
                      Ie.row.rowEdit ? (u(), ne(ge, {
                        key: 0,
                        type: "small",
                        modelValue: Ie.row[be.prop],
                        "onUpdate:modelValue": (qe) => Ie.row[be.prop] = qe
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (u(), m(
                        le,
                        { key: 1 },
                        [
                          _e(" 非可编辑行 "),
                          _e(" 可编辑单元格 "),
                          Ie.$index + Ie.column.id === H.value ? (u(), m("div", a0e, [
                            j(ge, {
                              size: "small",
                              modelValue: Ie.row[be.prop],
                              "onUpdate:modelValue": (qe) => Ie.row[be.prop] = qe
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            i("div", {
                              onClick: Qa(I, ["stop"])
                            }, [
                              T.$slots.editCell ? Xe(T.$slots, "editCell", {
                                key: 0,
                                scope: Ie
                              }, void 0, !0) : (u(), m("div", o0e, [
                                j(he, {
                                  class: "confirm",
                                  onClick: (qe) => Y(Ie)
                                }, null, 8, ["onClick"]),
                                j(re, {
                                  class: "cancel",
                                  onClick: (qe) => D(Ie)
                                }, null, 8, ["onClick"])
                              ]))
                            ], 8, t0e)
                          ])) : (u(), m(
                            le,
                            { key: 1 },
                            [
                              _e(" 自定义列 "),
                              be.slot ? Xe(T.$slots, be.slot, {
                                key: 0,
                                scope: Ie
                              }, void 0, !0) : (u(), m(
                                le,
                                { key: 1 },
                                [
                                  _e(" 默认展示 "),
                                  i(
                                    "span",
                                    null,
                                    Le(Ie.row[be.prop]),
                                    1
                                    /* TEXT */
                                  )
                                ],
                                2112
                                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                              )),
                              be.editable ? (u(), ne(c2(`el-icon-${F(A2)(a.editIcon)}`), {
                                key: 2,
                                class: "edit",
                                onClick: Qa((qe) => P(Ie), ["stop"])
                              }, null, 8, ["onClick"])) : _e("v-if", !0)
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          ))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label", "prop", "align", "width"]))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                _e(" 自定义操作 "),
                j(J, {
                  label: (Ce = F(l)) == null ? void 0 : Ce.label,
                  align: (ke = F(l)) == null ? void 0 : ke.aligin,
                  width: (We = F(l)) == null ? void 0 : We.width
                }, {
                  default: U((be) => [
                    be.row.rowEdit ? Xe(T.$slots, "editRow", {
                      key: 0,
                      scope: be
                    }, void 0, !0) : Xe(T.$slots, "action", {
                      key: 1,
                      scope: be
                    }, void 0, !0)
                  ]),
                  _: 3
                  /* FORWARDED */
                }, 8, ["label", "align", "width"])
              ];
            }),
            _: 3
            /* FORWARDED */
          }, 16, ["data", "element-loading-text", "element-loading-spinner", "element-loading-svg", "element-loading-svg-view-box", "element-loading-background"])), [
            [F0, F(s)]
          ]),
          a.pagination ? (u(), m(
            "div",
            {
              key: 0,
              class: "pagination",
              style: _n({ justifyContent: F(x) })
            },
            [
              j(v2, {
                "modelValue:currentPage": "currentPage",
                "page-size": a.pageSize,
                "page-sizes": a.pageSizes,
                layout: "total, sizes, prev, pager, next, jumper",
                total: a.total,
                onSizeChange: k,
                onCurrentChange: B
              }, null, 8, ["page-size", "page-sizes", "total"])
            ],
            4
            /* STYLE */
          )) : _e("v-if", !0)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const c0e = /* @__PURE__ */ _0(r0e, [["__scopeId", "data-v-dd142ec7"]]), d0e = {
  install(a) {
    a.component("m-table", c0e);
  }
};
const l0e = [
  Y_,
  yW,
  AW,
  BW,
  WW,
  JW,
  QW,
  tG,
  dG,
  zG,
  n0e,
  d0e
], s0e = {
  install(a) {
    l0e.map((r) => {
      a.use(r);
    });
  }
};
export {
  s0e as default
};
