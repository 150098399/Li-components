import { defineComponent as s, resolveComponent as l, openBlock as r, createElementBlock as d, createVNode as i, withCtx as a, renderSlot as p, createBlock as u, resolveDynamicComponent as _, unref as f } from "vue";
const m = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), v = { class: "notificaton-popover" }, x = /* @__PURE__ */ s({
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
    return (t, o) => {
      const n = l("el-badge"), c = l("el-popover");
      return r(), d("div", v, [
        i(c, {
          placement: "bottom",
          width: 300,
          trigger: "click"
        }, {
          default: a(() => [
            p(t.$slots, "default", {}, void 0, !0)
          ]),
          reference: a(() => [
            i(n, {
              value: e.value,
              max: e.max,
              "is-dot": e.isDot,
              style: { cursor: "pointer" }
            }, {
              default: a(() => [
                (r(), u(_(`el-icon-${f(m)(e.icon)}`)))
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
const g = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, c] of t)
    o[n] = c;
  return o;
}, y = /* @__PURE__ */ g(x, [["__scopeId", "data-v-387cf9e0"]]), k = {
  install(e) {
    e.component("m-notification", y);
  }
};
export {
  k as default
};
