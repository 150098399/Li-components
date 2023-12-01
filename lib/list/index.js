import { defineComponent as V, resolveComponent as a, openBlock as t, createElementBlock as n, createVNode as y, withCtx as d, Fragment as f, renderList as h, createBlock as p, createCommentVNode as l, createElementVNode as m, toDisplayString as i, createTextVNode as $, normalizeClass as z, resolveDynamicComponent as B, unref as w } from "vue";
const D = (c) => c.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), E = { class: "list-tabs__item" }, T = ["onClick"], q = {
  key: 0,
  class: "avatar"
}, F = { class: "content" }, O = {
  key: 0,
  class: "title"
}, S = { key: 1 }, Z = {
  key: 2,
  class: "time"
}, j = { class: "actions" }, G = ["onClick"], H = {
  key: 0,
  class: "a-icon"
}, J = { class: "a-text" }, K = /* @__PURE__ */ V({
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
  setup(c, { emit: u }) {
    const o = u, v = (r, _) => {
      o("clickItem", { op: r, index: _ });
    }, k = (r, _) => {
      o("clickAction", { action: r, index: _ });
    };
    return (r, _) => {
      const x = a("el-avatar"), C = a("el-tag"), b = a("el-scrollbar"), A = a("el-tab-pane"), I = a("el-tabs");
      return t(), n("div", E, [
        y(I, null, {
          default: d(() => [
            (t(!0), n(
              f,
              null,
              h(c.list, (g, L) => (t(), p(A, {
                key: L,
                label: g.title
              }, {
                default: d(() => [
                  y(
                    b,
                    { "max-height": "300px" },
                    {
                      default: d(() => [
                        (t(!0), n(
                          f,
                          null,
                          h(g.content, (e, s) => (t(), n("div", {
                            class: "container",
                            onClick: (N) => v(e, s),
                            key: s
                          }, [
                            e.avatar ? (t(), n("div", q, [
                              y(x, {
                                size: "small",
                                src: e.avatar
                              }, null, 8, ["src"])
                            ])) : l("v-if", !0),
                            m("div", F, [
                              e.title ? (t(), n("div", O, [
                                m(
                                  "div",
                                  null,
                                  i(e.title),
                                  1
                                  /* TEXT */
                                ),
                                e.tag ? (t(), p(C, {
                                  key: 0,
                                  size: "small",
                                  type: e.tagType
                                }, {
                                  default: d(() => [
                                    $(
                                      i(e.tag),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["type"])) : l("v-if", !0)
                              ])) : l("v-if", !0),
                              e.desc ? (t(), n(
                                "div",
                                S,
                                i(e.desc),
                                1
                                /* TEXT */
                              )) : l("v-if", !0),
                              e.time ? (t(), n(
                                "div",
                                Z,
                                i(e.time),
                                1
                                /* TEXT */
                              )) : l("v-if", !0)
                            ])
                          ], 8, T))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        m("div", j, [
                          (t(!0), n(
                            f,
                            null,
                            h(c.actions, (e, s) => (t(), n("div", {
                              class: z(["a-item", { border: s !== c.actions.length }]),
                              onClick: (N) => k(e, s),
                              key: s
                            }, [
                              e.icon ? (t(), n("div", H, [
                                (t(), p(B(`el-icon-${w(D)(e.icon)}`)))
                              ])) : l("v-if", !0),
                              m(
                                "div",
                                J,
                                i(e.text),
                                1
                                /* TEXT */
                              )
                            ], 10, G))),
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
const M = (c, u) => {
  const o = c.__vccOpts || c;
  for (const [v, k] of u)
    o[v] = k;
  return o;
}, P = /* @__PURE__ */ M(K, [["__scopeId", "data-v-c1811276"]]), R = {
  install(c) {
    c.component("m-list", P);
  }
};
export {
  R as default
};
