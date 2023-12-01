import { defineComponent as S, ref as r, watch as o, resolveComponent as g, openBlock as v, createElementBlock as h, createElementVNode as u, createVNode as c, mergeProps as p } from "vue";
const T = { style: { display: "flex" } }, y = { style: { "margin-right": "20px" } }, V = /* @__PURE__ */ S({
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
  setup(e, { emit: f }) {
    const a = r(""), l = r(""), d = r(!0), s = f;
    return o(
      () => a.value,
      (t) => {
        t === "" ? (l.value = "", d.value = !0) : (d.value = !1, s("startChange", t));
      }
    ), o(
      () => l.value,
      (t) => {
        t && s("endChange", {
          startTime: a.value,
          endTime: t
        });
      }
    ), (t, n) => {
      const m = g("el-time-select");
      return v(), h("div", T, [
        u("div", y, [
          c(m, p({
            modelValue: a.value,
            "onUpdate:modelValue": n[0] || (n[0] = (i) => a.value = i),
            "max-time": l.value,
            class: "mr-4",
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startStep,
            end: e.startTimeEnd
          }, t.$attrs.startOptions), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
        ]),
        u("div", null, [
          c(m, p({
            modelValue: l.value,
            "onUpdate:modelValue": n[1] || (n[1] = (i) => l.value = i),
            "min-time": a.value,
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endStep,
            end: e.endTimeEnd,
            disabled: d.value
          }, t.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
}), C = {
  install(e) {
    e.component("m-choose-time", V);
  }
};
export {
  C as default
};
