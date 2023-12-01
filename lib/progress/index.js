import { defineComponent as p, ref as s, onMounted as l, resolveComponent as c, openBlock as i, createBlock as m, mergeProps as u } from "vue";
const f = /* @__PURE__ */ p({
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
  setup(n) {
    const e = n, t = s(0);
    return l(() => {
      if (e.isAnimation) {
        const o = Math.ceil(e.time / e.percentage), r = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(r));
        }, o);
      } else
        t.value = e.percentage;
    }), (o, r) => {
      const a = c("el-progress");
      return i(), m(a, u(o.$attrs, { percentage: t.value }), null, 16, ["percentage"]);
    };
  }
}), d = {
  install(n) {
    n.component("m-progress", f);
  }
};
export {
  d as default
};
