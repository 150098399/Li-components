import { defineComponent as s, resolveComponent as l, openBlock as r, createElementBlock as d, createVNode as i, withCtx as c, renderSlot as p, createBlock as u, resolveDynamicComponent as _, unref as m } from "vue";
const f = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), v = { class: "notificaton-popover" }, x = /* @__PURE__ */ s({
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
      const n = l("el-badge"), a = l("el-popover");
      return r(), d("div", v, [
        i(a, {
          placement: "bottom",
          width: 300,
          trigger: "click"
        }, {
          default: c(() => [
            p(t.$slots, "default", {}, void 0, !0)
          ]),
          reference: c(() => [
            i(n, {
              value: e.value,
              max: e.max,
              "is-dot": e.isDot,
              style: { cursor: "pointer" }
            }, {
              default: c(() => [
                (r(), u(_(`el-icon-${m(f)(e.icon)}`)))
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
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, y = /* @__PURE__ */ g(x, [["__scopeId", "data-v-18839092"]]), k = {
  install(e) {
    e.component("m-notification", y);
  }
};
export {
  k as default
};
