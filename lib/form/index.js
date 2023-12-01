import { defineComponent as _r, ref as Q, onMounted as dr, watch as Tr, resolveComponent as ee, openBlock as h, createBlock as A, mergeProps as B, withCtx as m, createElementBlock as re, Fragment as te, renderList as je, resolveDynamicComponent as ae, createCommentVNode as M, renderSlot as ne, createVNode as jr } from "vue";
var N = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ar(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function mr() {
  this.__data__ = [], this.size = 0;
}
var Or = mr;
function Sr(e, r) {
  return e === r || e !== e && r !== r;
}
var Je = Sr, Cr = Je;
function wr(e, r) {
  for (var t = e.length; t--; )
    if (Cr(e[t][0], r))
      return t;
  return -1;
}
var H = wr, Ir = H, Pr = Array.prototype, xr = Pr.splice;
function Er(e) {
  var r = this.__data__, t = Ir(r, e);
  if (t < 0)
    return !1;
  var a = r.length - 1;
  return t == a ? r.pop() : xr.call(r, t, 1), --this.size, !0;
}
var Mr = Er, Dr = H;
function Lr(e) {
  var r = this.__data__, t = Dr(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var Fr = Lr, Gr = H;
function Ur(e) {
  return Gr(this.__data__, e) > -1;
}
var Br = Ur, Nr = H;
function Kr(e, r) {
  var t = this.__data__, a = Nr(t, e);
  return a < 0 ? (++this.size, t.push([e, r])) : t[a][1] = r, this;
}
var Vr = Kr, kr = Or, Rr = Mr, Hr = Fr, zr = Br, qr = Vr;
function w(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
w.prototype.clear = kr;
w.prototype.delete = Rr;
w.prototype.get = Hr;
w.prototype.has = zr;
w.prototype.set = qr;
var z = w, Wr = z;
function Jr() {
  this.__data__ = new Wr(), this.size = 0;
}
var Yr = Jr;
function Xr(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var Zr = Xr;
function Qr(e) {
  return this.__data__.get(e);
}
var et = Qr;
function rt(e) {
  return this.__data__.has(e);
}
var tt = rt, at = typeof N == "object" && N && N.Object === Object && N, Ye = at, nt = Ye, ot = typeof self == "object" && self && self.Object === Object && self, st = nt || ot || Function("return this")(), _ = st, it = _, ct = it.Symbol, pe = ct, Ae = pe, Xe = Object.prototype, lt = Xe.hasOwnProperty, ut = Xe.toString, D = Ae ? Ae.toStringTag : void 0;
function pt(e) {
  var r = lt.call(e, D), t = e[D];
  try {
    e[D] = void 0;
    var a = !0;
  } catch {
  }
  var s = ut.call(e);
  return a && (r ? e[D] = t : delete e[D]), s;
}
var ft = pt, vt = Object.prototype, gt = vt.toString;
function yt(e) {
  return gt.call(e);
}
var bt = yt, me = pe, $t = ft, ht = bt, _t = "[object Null]", dt = "[object Undefined]", Oe = me ? me.toStringTag : void 0;
function Tt(e) {
  return e == null ? e === void 0 ? dt : _t : Oe && Oe in Object(e) ? $t(e) : ht(e);
}
var q = Tt;
function jt(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var L = jt, At = q, mt = L, Ot = "[object AsyncFunction]", St = "[object Function]", Ct = "[object GeneratorFunction]", wt = "[object Proxy]";
function It(e) {
  if (!mt(e))
    return !1;
  var r = At(e);
  return r == St || r == Ct || r == Ot || r == wt;
}
var Ze = It, Pt = _, xt = Pt["__core-js_shared__"], Et = xt, oe = Et, Se = function() {
  var e = /[^.]+$/.exec(oe && oe.keys && oe.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Mt(e) {
  return !!Se && Se in e;
}
var Dt = Mt, Lt = Function.prototype, Ft = Lt.toString;
function Gt(e) {
  if (e != null) {
    try {
      return Ft.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qe = Gt, Ut = Ze, Bt = Dt, Nt = L, Kt = Qe, Vt = /[\\^$.*+?()[\]{}|]/g, kt = /^\[object .+?Constructor\]$/, Rt = Function.prototype, Ht = Object.prototype, zt = Rt.toString, qt = Ht.hasOwnProperty, Wt = RegExp(
  "^" + zt.call(qt).replace(Vt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jt(e) {
  if (!Nt(e) || Bt(e))
    return !1;
  var r = Ut(e) ? Wt : kt;
  return r.test(Kt(e));
}
var Yt = Jt;
function Xt(e, r) {
  return e == null ? void 0 : e[r];
}
var Zt = Xt, Qt = Yt, ea = Zt;
function ra(e, r) {
  var t = ea(e, r);
  return Qt(t) ? t : void 0;
}
var S = ra, ta = S, aa = _, na = ta(aa, "Map"), fe = na, oa = S, sa = oa(Object, "create"), W = sa, Ce = W;
function ia() {
  this.__data__ = Ce ? Ce(null) : {}, this.size = 0;
}
var ca = ia;
function la(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var ua = la, pa = W, fa = "__lodash_hash_undefined__", va = Object.prototype, ga = va.hasOwnProperty;
function ya(e) {
  var r = this.__data__;
  if (pa) {
    var t = r[e];
    return t === fa ? void 0 : t;
  }
  return ga.call(r, e) ? r[e] : void 0;
}
var ba = ya, $a = W, ha = Object.prototype, _a = ha.hasOwnProperty;
function da(e) {
  var r = this.__data__;
  return $a ? r[e] !== void 0 : _a.call(r, e);
}
var Ta = da, ja = W, Aa = "__lodash_hash_undefined__";
function ma(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = ja && r === void 0 ? Aa : r, this;
}
var Oa = ma, Sa = ca, Ca = ua, wa = ba, Ia = Ta, Pa = Oa;
function I(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
I.prototype.clear = Sa;
I.prototype.delete = Ca;
I.prototype.get = wa;
I.prototype.has = Ia;
I.prototype.set = Pa;
var xa = I, we = xa, Ea = z, Ma = fe;
function Da() {
  this.size = 0, this.__data__ = {
    hash: new we(),
    map: new (Ma || Ea)(),
    string: new we()
  };
}
var La = Da;
function Fa(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Ga = Fa, Ua = Ga;
function Ba(e, r) {
  var t = e.__data__;
  return Ua(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var J = Ba, Na = J;
function Ka(e) {
  var r = Na(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var Va = Ka, ka = J;
function Ra(e) {
  return ka(this, e).get(e);
}
var Ha = Ra, za = J;
function qa(e) {
  return za(this, e).has(e);
}
var Wa = qa, Ja = J;
function Ya(e, r) {
  var t = Ja(this, e), a = t.size;
  return t.set(e, r), this.size += t.size == a ? 0 : 1, this;
}
var Xa = Ya, Za = La, Qa = Va, en = Ha, rn = Wa, tn = Xa;
function P(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = Za;
P.prototype.delete = Qa;
P.prototype.get = en;
P.prototype.has = rn;
P.prototype.set = tn;
var an = P, nn = z, on = fe, sn = an, cn = 200;
function ln(e, r) {
  var t = this.__data__;
  if (t instanceof nn) {
    var a = t.__data__;
    if (!on || a.length < cn - 1)
      return a.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new sn(a);
  }
  return t.set(e, r), this.size = t.size, this;
}
var un = ln, pn = z, fn = Yr, vn = Zr, gn = et, yn = tt, bn = un;
function x(e) {
  var r = this.__data__ = new pn(e);
  this.size = r.size;
}
x.prototype.clear = fn;
x.prototype.delete = vn;
x.prototype.get = gn;
x.prototype.has = yn;
x.prototype.set = bn;
var $n = x;
function hn(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length; ++t < a && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var _n = hn, dn = S, Tn = function() {
  try {
    var e = dn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), jn = Tn, Ie = jn;
function An(e, r, t) {
  r == "__proto__" && Ie ? Ie(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var er = An, mn = er, On = Je, Sn = Object.prototype, Cn = Sn.hasOwnProperty;
function wn(e, r, t) {
  var a = e[r];
  (!(Cn.call(e, r) && On(a, t)) || t === void 0 && !(r in e)) && mn(e, r, t);
}
var rr = wn, In = rr, Pn = er;
function xn(e, r, t, a) {
  var s = !t;
  t || (t = {});
  for (var i = -1, n = r.length; ++i < n; ) {
    var l = r[i], v = a ? a(t[l], e[l], l, t, e) : void 0;
    v === void 0 && (v = e[l]), s ? Pn(t, l, v) : In(t, l, v);
  }
  return t;
}
var Y = xn;
function En(e, r) {
  for (var t = -1, a = Array(e); ++t < e; )
    a[t] = r(t);
  return a;
}
var Mn = En;
function Dn(e) {
  return e != null && typeof e == "object";
}
var F = Dn, Ln = q, Fn = F, Gn = "[object Arguments]";
function Un(e) {
  return Fn(e) && Ln(e) == Gn;
}
var Bn = Un, Pe = Bn, Nn = F, tr = Object.prototype, Kn = tr.hasOwnProperty, Vn = tr.propertyIsEnumerable, kn = Pe(function() {
  return arguments;
}()) ? Pe : function(e) {
  return Nn(e) && Kn.call(e, "callee") && !Vn.call(e, "callee");
}, Rn = kn, Hn = Array.isArray, ve = Hn, V = { exports: {} };
function zn() {
  return !1;
}
var qn = zn;
V.exports;
(function(e, r) {
  var t = _, a = qn, s = r && !r.nodeType && r, i = s && !0 && e && !e.nodeType && e, n = i && i.exports === s, l = n ? t.Buffer : void 0, v = l ? l.isBuffer : void 0, f = v || a;
  e.exports = f;
})(V, V.exports);
var ar = V.exports, Wn = 9007199254740991, Jn = /^(?:0|[1-9]\d*)$/;
function Yn(e, r) {
  var t = typeof e;
  return r = r ?? Wn, !!r && (t == "number" || t != "symbol" && Jn.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Xn = Yn, Zn = 9007199254740991;
function Qn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Zn;
}
var nr = Qn, eo = q, ro = nr, to = F, ao = "[object Arguments]", no = "[object Array]", oo = "[object Boolean]", so = "[object Date]", io = "[object Error]", co = "[object Function]", lo = "[object Map]", uo = "[object Number]", po = "[object Object]", fo = "[object RegExp]", vo = "[object Set]", go = "[object String]", yo = "[object WeakMap]", bo = "[object ArrayBuffer]", $o = "[object DataView]", ho = "[object Float32Array]", _o = "[object Float64Array]", To = "[object Int8Array]", jo = "[object Int16Array]", Ao = "[object Int32Array]", mo = "[object Uint8Array]", Oo = "[object Uint8ClampedArray]", So = "[object Uint16Array]", Co = "[object Uint32Array]", u = {};
u[ho] = u[_o] = u[To] = u[jo] = u[Ao] = u[mo] = u[Oo] = u[So] = u[Co] = !0;
u[ao] = u[no] = u[bo] = u[oo] = u[$o] = u[so] = u[io] = u[co] = u[lo] = u[uo] = u[po] = u[fo] = u[vo] = u[go] = u[yo] = !1;
function wo(e) {
  return to(e) && ro(e.length) && !!u[eo(e)];
}
var Io = wo;
function Po(e) {
  return function(r) {
    return e(r);
  };
}
var ge = Po, k = { exports: {} };
k.exports;
(function(e, r) {
  var t = Ye, a = r && !r.nodeType && r, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, n = i && t.process, l = function() {
    try {
      var v = s && s.require && s.require("util").types;
      return v || n && n.binding && n.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(k, k.exports);
var ye = k.exports, xo = Io, Eo = ge, xe = ye, Ee = xe && xe.isTypedArray, Mo = Ee ? Eo(Ee) : xo, Do = Mo, Lo = Mn, Fo = Rn, Go = ve, Uo = ar, Bo = Xn, No = Do, Ko = Object.prototype, Vo = Ko.hasOwnProperty;
function ko(e, r) {
  var t = Go(e), a = !t && Fo(e), s = !t && !a && Uo(e), i = !t && !a && !s && No(e), n = t || a || s || i, l = n ? Lo(e.length, String) : [], v = l.length;
  for (var f in e)
    (r || Vo.call(e, f)) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Bo(f, v))) && l.push(f);
  return l;
}
var or = ko, Ro = Object.prototype;
function Ho(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Ro;
  return e === t;
}
var be = Ho;
function zo(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var sr = zo, qo = sr, Wo = qo(Object.keys, Object), Jo = Wo, Yo = be, Xo = Jo, Zo = Object.prototype, Qo = Zo.hasOwnProperty;
function es(e) {
  if (!Yo(e))
    return Xo(e);
  var r = [];
  for (var t in Object(e))
    Qo.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var rs = es, ts = Ze, as = nr;
function ns(e) {
  return e != null && as(e.length) && !ts(e);
}
var ir = ns, os = or, ss = rs, is = ir;
function cs(e) {
  return is(e) ? os(e) : ss(e);
}
var $e = cs, ls = Y, us = $e;
function ps(e, r) {
  return e && ls(r, us(r), e);
}
var fs = ps;
function vs(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var gs = vs, ys = L, bs = be, $s = gs, hs = Object.prototype, _s = hs.hasOwnProperty;
function ds(e) {
  if (!ys(e))
    return $s(e);
  var r = bs(e), t = [];
  for (var a in e)
    a == "constructor" && (r || !_s.call(e, a)) || t.push(a);
  return t;
}
var Ts = ds, js = or, As = Ts, ms = ir;
function Os(e) {
  return ms(e) ? js(e, !0) : As(e);
}
var he = Os, Ss = Y, Cs = he;
function ws(e, r) {
  return e && Ss(r, Cs(r), e);
}
var Is = ws, R = { exports: {} };
R.exports;
(function(e, r) {
  var t = _, a = r && !r.nodeType && r, s = a && !0 && e && !e.nodeType && e, i = s && s.exports === a, n = i ? t.Buffer : void 0, l = n ? n.allocUnsafe : void 0;
  function v(f, C) {
    if (C)
      return f.slice();
    var b = f.length, d = l ? l(b) : new f.constructor(b);
    return f.copy(d), d;
  }
  e.exports = v;
})(R, R.exports);
var Ps = R.exports;
function xs(e, r) {
  var t = -1, a = e.length;
  for (r || (r = Array(a)); ++t < a; )
    r[t] = e[t];
  return r;
}
var Es = xs;
function Ms(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length, s = 0, i = []; ++t < a; ) {
    var n = e[t];
    r(n, t, e) && (i[s++] = n);
  }
  return i;
}
var Ds = Ms;
function Ls() {
  return [];
}
var cr = Ls, Fs = Ds, Gs = cr, Us = Object.prototype, Bs = Us.propertyIsEnumerable, Me = Object.getOwnPropertySymbols, Ns = Me ? function(e) {
  return e == null ? [] : (e = Object(e), Fs(Me(e), function(r) {
    return Bs.call(e, r);
  }));
} : Gs, _e = Ns, Ks = Y, Vs = _e;
function ks(e, r) {
  return Ks(e, Vs(e), r);
}
var Rs = ks;
function Hs(e, r) {
  for (var t = -1, a = r.length, s = e.length; ++t < a; )
    e[s + t] = r[t];
  return e;
}
var lr = Hs, zs = sr, qs = zs(Object.getPrototypeOf, Object), ur = qs, Ws = lr, Js = ur, Ys = _e, Xs = cr, Zs = Object.getOwnPropertySymbols, Qs = Zs ? function(e) {
  for (var r = []; e; )
    Ws(r, Ys(e)), e = Js(e);
  return r;
} : Xs, pr = Qs, ei = Y, ri = pr;
function ti(e, r) {
  return ei(e, ri(e), r);
}
var ai = ti, ni = lr, oi = ve;
function si(e, r, t) {
  var a = r(e);
  return oi(e) ? a : ni(a, t(e));
}
var fr = si, ii = fr, ci = _e, li = $e;
function ui(e) {
  return ii(e, li, ci);
}
var pi = ui, fi = fr, vi = pr, gi = he;
function yi(e) {
  return fi(e, gi, vi);
}
var bi = yi, $i = S, hi = _, _i = $i(hi, "DataView"), di = _i, Ti = S, ji = _, Ai = Ti(ji, "Promise"), mi = Ai, Oi = S, Si = _, Ci = Oi(Si, "Set"), wi = Ci, Ii = S, Pi = _, xi = Ii(Pi, "WeakMap"), Ei = xi, se = di, ie = fe, ce = mi, le = wi, ue = Ei, vr = q, E = Qe, De = "[object Map]", Mi = "[object Object]", Le = "[object Promise]", Fe = "[object Set]", Ge = "[object WeakMap]", Ue = "[object DataView]", Di = E(se), Li = E(ie), Fi = E(ce), Gi = E(le), Ui = E(ue), O = vr;
(se && O(new se(new ArrayBuffer(1))) != Ue || ie && O(new ie()) != De || ce && O(ce.resolve()) != Le || le && O(new le()) != Fe || ue && O(new ue()) != Ge) && (O = function(e) {
  var r = vr(e), t = r == Mi ? e.constructor : void 0, a = t ? E(t) : "";
  if (a)
    switch (a) {
      case Di:
        return Ue;
      case Li:
        return De;
      case Fi:
        return Le;
      case Gi:
        return Fe;
      case Ui:
        return Ge;
    }
  return r;
});
var de = O, Bi = Object.prototype, Ni = Bi.hasOwnProperty;
function Ki(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && Ni.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Vi = Ki, ki = _, Ri = ki.Uint8Array, Hi = Ri, Be = Hi;
function zi(e) {
  var r = new e.constructor(e.byteLength);
  return new Be(r).set(new Be(e)), r;
}
var Te = zi, qi = Te;
function Wi(e, r) {
  var t = r ? qi(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Ji = Wi, Yi = /\w*$/;
function Xi(e) {
  var r = new e.constructor(e.source, Yi.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var Zi = Xi, Ne = pe, Ke = Ne ? Ne.prototype : void 0, Ve = Ke ? Ke.valueOf : void 0;
function Qi(e) {
  return Ve ? Object(Ve.call(e)) : {};
}
var ec = Qi, rc = Te;
function tc(e, r) {
  var t = r ? rc(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var ac = tc, nc = Te, oc = Ji, sc = Zi, ic = ec, cc = ac, lc = "[object Boolean]", uc = "[object Date]", pc = "[object Map]", fc = "[object Number]", vc = "[object RegExp]", gc = "[object Set]", yc = "[object String]", bc = "[object Symbol]", $c = "[object ArrayBuffer]", hc = "[object DataView]", _c = "[object Float32Array]", dc = "[object Float64Array]", Tc = "[object Int8Array]", jc = "[object Int16Array]", Ac = "[object Int32Array]", mc = "[object Uint8Array]", Oc = "[object Uint8ClampedArray]", Sc = "[object Uint16Array]", Cc = "[object Uint32Array]";
function wc(e, r, t) {
  var a = e.constructor;
  switch (r) {
    case $c:
      return nc(e);
    case lc:
    case uc:
      return new a(+e);
    case hc:
      return oc(e, t);
    case _c:
    case dc:
    case Tc:
    case jc:
    case Ac:
    case mc:
    case Oc:
    case Sc:
    case Cc:
      return cc(e, t);
    case pc:
      return new a();
    case fc:
    case yc:
      return new a(e);
    case vc:
      return sc(e);
    case gc:
      return new a();
    case bc:
      return ic(e);
  }
}
var Ic = wc, Pc = L, ke = Object.create, xc = function() {
  function e() {
  }
  return function(r) {
    if (!Pc(r))
      return {};
    if (ke)
      return ke(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), Ec = xc, Mc = Ec, Dc = ur, Lc = be;
function Fc(e) {
  return typeof e.constructor == "function" && !Lc(e) ? Mc(Dc(e)) : {};
}
var Gc = Fc, Uc = de, Bc = F, Nc = "[object Map]";
function Kc(e) {
  return Bc(e) && Uc(e) == Nc;
}
var Vc = Kc, kc = Vc, Rc = ge, Re = ye, He = Re && Re.isMap, Hc = He ? Rc(He) : kc, zc = Hc, qc = de, Wc = F, Jc = "[object Set]";
function Yc(e) {
  return Wc(e) && qc(e) == Jc;
}
var Xc = Yc, Zc = Xc, Qc = ge, ze = ye, qe = ze && ze.isSet, el = qe ? Qc(qe) : Zc, rl = el, tl = $n, al = _n, nl = rr, ol = fs, sl = Is, il = Ps, cl = Es, ll = Rs, ul = ai, pl = pi, fl = bi, vl = de, gl = Vi, yl = Ic, bl = Gc, $l = ve, hl = ar, _l = zc, dl = L, Tl = rl, jl = $e, Al = he, ml = 1, Ol = 2, Sl = 4, gr = "[object Arguments]", Cl = "[object Array]", wl = "[object Boolean]", Il = "[object Date]", Pl = "[object Error]", yr = "[object Function]", xl = "[object GeneratorFunction]", El = "[object Map]", Ml = "[object Number]", br = "[object Object]", Dl = "[object RegExp]", Ll = "[object Set]", Fl = "[object String]", Gl = "[object Symbol]", Ul = "[object WeakMap]", Bl = "[object ArrayBuffer]", Nl = "[object DataView]", Kl = "[object Float32Array]", Vl = "[object Float64Array]", kl = "[object Int8Array]", Rl = "[object Int16Array]", Hl = "[object Int32Array]", zl = "[object Uint8Array]", ql = "[object Uint8ClampedArray]", Wl = "[object Uint16Array]", Jl = "[object Uint32Array]", c = {};
c[gr] = c[Cl] = c[Bl] = c[Nl] = c[wl] = c[Il] = c[Kl] = c[Vl] = c[kl] = c[Rl] = c[Hl] = c[El] = c[Ml] = c[br] = c[Dl] = c[Ll] = c[Fl] = c[Gl] = c[zl] = c[ql] = c[Wl] = c[Jl] = !0;
c[Pl] = c[yr] = c[Ul] = !1;
function K(e, r, t, a, s, i) {
  var n, l = r & ml, v = r & Ol, f = r & Sl;
  if (t && (n = s ? t(e, a, s, i) : t(e)), n !== void 0)
    return n;
  if (!dl(e))
    return e;
  var C = $l(e);
  if (C) {
    if (n = gl(e), !l)
      return cl(e, n);
  } else {
    var b = vl(e), d = b == yr || b == xl;
    if (hl(e))
      return il(e, l);
    if (b == br || b == gr || d && !s) {
      if (n = v || d ? {} : bl(e), !l)
        return v ? ul(e, sl(n, e)) : ll(e, ol(n, e));
    } else {
      if (!c[b])
        return s ? e : {};
      n = yl(e, b, l);
    }
  }
  i || (i = new tl());
  var G = i.get(e);
  if (G)
    return G;
  i.set(e, n), Tl(e) ? e.forEach(function($) {
    n.add(K($, r, t, $, e, i));
  }) : _l(e) && e.forEach(function($, o) {
    n.set(o, K($, r, t, o, e, i));
  });
  var X = f ? v ? fl : pl : v ? Al : jl, U = C ? void 0 : X(e);
  return al(U || e, function($, o) {
    U && (o = $, $ = e[o]), nl(n, o, K($, r, t, o, e, i));
  }), n;
}
var Yl = K, Xl = Yl, Zl = 1, Ql = 4;
function eu(e) {
  return Xl(e, Zl | Ql);
}
var ru = eu;
const We = /* @__PURE__ */ Ar(ru), tu = /* @__PURE__ */ _r({
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
  setup(e, { emit: r }) {
    const t = e, a = Q(null), s = Q(null), i = () => {
      if (t.options && t.options.length) {
        const o = {}, g = {};
        t.options.map((y) => {
          o[y.prop] = y.value, g[y.prop] = y.rules;
        }), a.value = We(o), s.value = We(g);
      }
    }, n = r, l = (o) => {
      n("on-preview", o);
    }, v = (o, g) => {
      n("on-remove", {
        uploadFile: o,
        uploadFiles: g
      });
    }, f = (o, g, y) => {
      const T = t.options.find((Z) => Z.type === "upload");
      a.value[T == null ? void 0 : T.prop] = { response: o, uploadFile: g, uploadFiles: y }, n("on-success", {
        response: o,
        uploadFile: g,
        uploadFiles: y
      });
    }, C = (o, g, y) => {
      n("on-error", {
        error: o,
        uploadFile: g,
        uploadFiles: y
      });
    }, b = (o, g, y) => {
      n("on-progress", {
        evt: o,
        uploadFile: g,
        uploadFiles: y
      });
    }, d = (o, g) => {
      n("on-change", {
        uploadFile: o,
        uploadFiles: g
      });
    }, G = (o, g) => {
      n("on-exceed", {
        files: o,
        uploadFiles: g
      });
    }, X = (o) => {
      n("before-upload", o);
    }, U = (o, g) => {
      n("before-remove", {
        uploadFile: o,
        uploadFiles: g
      });
    }, $ = Q();
    return dr(() => {
      i();
    }), Tr(
      () => t.options,
      () => {
        i();
      },
      { deep: !0 }
    ), (o, g) => {
      const y = ee("el-upload"), T = ee("el-form-item"), Z = ee("el-form");
      return a.value ? (h(), A(Z, B({
        key: 0,
        ref_key: "form",
        ref: $,
        "validate-on-rule-change": !1
      }, o.$attrs, {
        model: a.value,
        rules: s.value
      }), {
        default: m(() => [
          (h(!0), re(
            te,
            null,
            je(e.options, (p, $r) => (h(), re(
              te,
              { key: $r },
              [
                !p.children || !p.children.length ? (h(), A(T, {
                  key: 0,
                  label: p.label,
                  prop: p.prop
                }, {
                  default: m(() => [
                    p.type !== "upload" && p.type !== "editor" ? (h(), A(ae(`el-${p.type}`), B({ key: 0 }, p.attrs, {
                      modelValue: a.value[p.prop],
                      "onUpdate:modelValue": (j) => a.value[p.prop] = j,
                      placeholder: p.placeholder
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "placeholder"])) : M("v-if", !0),
                    p.type === "upload" ? (h(), A(y, B({ key: 1 }, p.uploadAttrs, {
                      "on-preview": l,
                      "on-remove": v,
                      "on-success": f,
                      "on-error": C,
                      "on-progress": b,
                      "on-change": d,
                      "on-exceed": G,
                      "before-upload": X,
                      "before-remove": U,
                      "http-request": e.httpRequest
                    }), {
                      tip: m(() => [
                        ne(o.$slots, "uploadTip")
                      ]),
                      default: m(() => [
                        ne(o.$slots, "uploadArea")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["http-request"])) : M("v-if", !0)
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["label", "prop"])) : M("v-if", !0),
                p.children && p.children.length ? (h(), A(T, {
                  key: 1,
                  label: p.label,
                  prop: p.prop
                }, {
                  default: m(() => [
                    (h(), A(ae(`el-${p.type}`), B(p.attrs, {
                      modelValue: a.value[p.prop],
                      "onUpdate:modelValue": (j) => a.value[p.prop] = j,
                      placeholder: p.placeholder
                    }), {
                      default: m(() => [
                        (h(!0), re(
                          te,
                          null,
                          je(p.children, (j, hr) => (h(), A(ae(`el-${j.type}`), {
                            key: hr,
                            label: j.label,
                            value: j.value
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
                }, 1032, ["label", "prop"])) : M("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          jr(T, null, {
            default: m(() => [
              ne(o.$slots, "action", {
                form: $.value,
                model: a.value
              })
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["model", "rules"])) : M("v-if", !0);
    };
  }
}), nu = {
  install(e) {
    e.component("m-form", tu);
  }
};
export {
  nu as default
};
