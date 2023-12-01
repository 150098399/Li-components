import { defineComponent as f, useSlots as p, computed as C, openBlock as n, createElementBlock as s, createElementVNode as a, normalizeStyle as c, unref as d, renderSlot as v, toDisplayString as g, createBlock as u, resolveDynamicComponent as i } from "vue";
const y = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), x = { class: "trend" }, m = { key: 1 }, S = { class: "icon" }, w = /* @__PURE__ */ f({
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
    const t = e, o = p(), l = C(() => t.type === "up" ? t.upTextColor : t.downTextColor);
    return (r, _) => (n(), s("div", x, [
      a(
        "div",
        {
          class: "text",
          style: c({ color: l.value })
        },
        [
          d(o).default ? v(r.$slots, "default", { key: 0 }, void 0, !0) : (n(), s(
            "div",
            m,
            g(e.text),
            1
            /* TEXT */
          ))
        ],
        4
        /* STYLE */
      ),
      a("div", S, [
        e.type === "up" ? (n(), u(i(`el-icon-${d(y)(e.upIcon)}`), {
          key: 0,
          style: c({ color: e.reverseColor ? e.downIconColor : e.upIconColor })
        }, null, 8, ["style"])) : (n(), u(i(`el-icon-${d(y)(e.downIcon)}`), {
          key: 1,
          style: c({ color: e.reverseColor ? e.upIconColor : e.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
});
const I = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, r] of t)
    o[l] = r;
  return o;
}, k = /* @__PURE__ */ I(w, [["__scopeId", "data-v-ef39c879"]]), B = {
  install(e) {
    e.component("m-trend", k);
  }
};
export {
  B as default
};
