import { defineComponent as g, ref as s, watch as u, resolveComponent as y, openBlock as b, createElementBlock as V, createElementVNode as p, createVNode as c, mergeProps as m } from "vue";
const C = { style: { display: "flex" } }, P = { style: { "margin-right": "20px" } }, T = /* @__PURE__ */ g({
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
  setup(a, { emit: v }) {
    const r = v, f = a, t = s(null), l = s(null), d = s(!0), h = (e) => {
      if (f.disableToday)
        return e.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    }, D = (e) => {
      if (t.value)
        return e.getTime() < t.value.getTime() + 1e3 * 60 * 60 * 24;
    };
    return u(
      () => t.value,
      (e) => {
        e ? (r("startChange", e), d.value = !1) : d.value = !0, l.value = null;
      }
    ), u(
      () => l.value,
      (e) => {
        e && r("endChange", {
          startDate: t.value,
          endDate: e
        });
      }
    ), (e, n) => {
      const i = y("el-date-picker");
      return b(), V("div", C, [
        p("div", P, [
          c(i, m({
            modelValue: t.value,
            "onUpdate:modelValue": n[0] || (n[0] = (o) => t.value = o),
            type: "date",
            placeholder: a.startPlaceholder,
            disabledDate: h
          }, e.$attrs.startOptions), null, 16, ["modelValue", "placeholder"])
        ]),
        p("div", null, [
          c(i, m({
            modelValue: l.value,
            "onUpdate:modelValue": n[1] || (n[1] = (o) => l.value = o),
            type: "date",
            placeholder: a.endPlaceholder,
            disabled: d.value,
            disabledDate: D
          }, e.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "disabled"])
        ])
      ]);
    };
  }
}), x = {
  install(a) {
    a.component("m-choose-date", T);
  }
};
export {
  x as default
};
