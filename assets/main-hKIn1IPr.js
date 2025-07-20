(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = t(r);
    fetch(r.href, i);
  }
})();
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = t(r);
    fetch(r.href, i);
  }
})();
var je = !1,
  Ce = !1,
  I = [],
  Me = -1;
function Wn(e) {
  Vn(e);
}
function Vn(e) {
  I.includes(e) || I.push(e), Jn();
}
function Hn(e) {
  let t = I.indexOf(e);
  t !== -1 && t > Me && I.splice(t, 1);
}
function Jn() {
  !Ce && !je && ((je = !0), queueMicrotask(Gn));
}
function Gn() {
  (je = !1), (Ce = !0);
  for (let e = 0; e < I.length; e++) I[e](), (Me = e);
  (I.length = 0), (Me = -1), (Ce = !1);
}
var K,
  q,
  W,
  $t,
  Ne = !0;
function Xn(e) {
  (Ne = !1), e(), (Ne = !0);
}
function Yn(e) {
  (K = e.reactive),
    (W = e.release),
    (q = (t) =>
      e.effect(t, {
        scheduler: (n) => {
          Ne ? Wn(n) : n();
        },
      })),
    ($t = e.raw);
}
function _t(e) {
  q = e;
}
function Zn(e) {
  let t = () => {};
  return [
    (n) => {
      let r = q(n);
      return (
        e._x_effects ||
          ((e._x_effects = new Set()),
          (e._x_runEffects = () => {
            e._x_effects.forEach((i) => i());
          })),
        e._x_effects.add(r),
        (t = () => {
          r !== void 0 && (e._x_effects.delete(r), W(r));
        }),
        r
      );
    },
    () => {
      t();
    },
  ];
}
function jt(e, t) {
  let n = !0,
    r,
    i = q(() => {
      let o = e();
      JSON.stringify(o),
        n
          ? (r = o)
          : queueMicrotask(() => {
              t(o, r), (r = o);
            }),
        (n = !1);
    });
  return () => W(i);
}
var Ct = [],
  Mt = [],
  Nt = [];
function Qn(e) {
  Nt.push(e);
}
function Ve(e, t) {
  typeof t == "function"
    ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
    : ((t = e), Mt.push(t));
}
function Lt(e) {
  Ct.push(e);
}
function It(e, t, n) {
  e._x_attributeCleanups || (e._x_attributeCleanups = {}),
    e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
    e._x_attributeCleanups[t].push(n);
}
function Rt(e, t) {
  e._x_attributeCleanups &&
    Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
      (t === void 0 || t.includes(n)) &&
        (r.forEach((i) => i()), delete e._x_attributeCleanups[n]);
    });
}
function er(e) {
  var t, n;
  for (
    (t = e._x_effects) == null || t.forEach(Hn);
    (n = e._x_cleanups) != null && n.length;

  )
    e._x_cleanups.pop()();
}
var He = new MutationObserver(Ye),
  Je = !1;
function Ge() {
  He.observe(document, {
    subtree: !0,
    childList: !0,
    attributes: !0,
    attributeOldValue: !0,
  }),
    (Je = !0);
}
function Dt() {
  tr(), He.disconnect(), (Je = !1);
}
var X = [];
function tr() {
  let e = He.takeRecords();
  X.push(() => e.length > 0 && Ye(e));
  let t = X.length;
  queueMicrotask(() => {
    if (X.length === t) for (; X.length > 0; ) X.shift()();
  });
}
function m(e) {
  if (!Je) return e();
  Dt();
  let t = e();
  return Ge(), t;
}
var Xe = !1,
  he = [];
function nr() {
  Xe = !0;
}
function rr() {
  (Xe = !1), Ye(he), (he = []);
}
function Ye(e) {
  if (Xe) {
    he = he.concat(e);
    return;
  }
  let t = [],
    n = new Set(),
    r = new Map(),
    i = new Map();
  for (let o = 0; o < e.length; o++)
    if (
      !e[o].target._x_ignoreMutationObserver &&
      (e[o].type === "childList" &&
        (e[o].removedNodes.forEach((a) => {
          a.nodeType === 1 && a._x_marker && n.add(a);
        }),
        e[o].addedNodes.forEach((a) => {
          if (a.nodeType === 1) {
            if (n.has(a)) {
              n.delete(a);
              return;
            }
            a._x_marker || t.push(a);
          }
        })),
      e[o].type === "attributes")
    ) {
      let a = e[o].target,
        s = e[o].attributeName,
        l = e[o].oldValue,
        u = () => {
          r.has(a) || r.set(a, []),
            r.get(a).push({ name: s, value: a.getAttribute(s) });
        },
        c = () => {
          i.has(a) || i.set(a, []), i.get(a).push(s);
        };
      a.hasAttribute(s) && l === null
        ? u()
        : a.hasAttribute(s)
        ? (c(), u())
        : c();
    }
  i.forEach((o, a) => {
    Rt(a, o);
  }),
    r.forEach((o, a) => {
      Ct.forEach((s) => s(a, o));
    });
  for (let o of n) t.some((a) => a.contains(o)) || Mt.forEach((a) => a(o));
  for (let o of t) o.isConnected && Nt.forEach((a) => a(o));
  (t = null), (n = null), (r = null), (i = null);
}
function Tt(e) {
  return ie(B(e));
}
function re(e, t, n) {
  return (
    (e._x_dataStack = [t, ...B(n || e)]),
    () => {
      e._x_dataStack = e._x_dataStack.filter((r) => r !== t);
    }
  );
}
function B(e) {
  return e._x_dataStack
    ? e._x_dataStack
    : typeof ShadowRoot == "function" && e instanceof ShadowRoot
    ? B(e.host)
    : e.parentNode
    ? B(e.parentNode)
    : [];
}
function ie(e) {
  return new Proxy({ objects: e }, ir);
}
var ir = {
  ownKeys({ objects: e }) {
    return Array.from(new Set(e.flatMap((t) => Object.keys(t))));
  },
  has({ objects: e }, t) {
    return t == Symbol.unscopables
      ? !1
      : e.some(
          (n) => Object.prototype.hasOwnProperty.call(n, t) || Reflect.has(n, t)
        );
  },
  get({ objects: e }, t, n) {
    return t == "toJSON"
      ? or
      : Reflect.get(e.find((r) => Reflect.has(r, t)) || {}, t, n);
  },
  set({ objects: e }, t, n, r) {
    const i =
        e.find((a) => Object.prototype.hasOwnProperty.call(a, t)) ||
        e[e.length - 1],
      o = Object.getOwnPropertyDescriptor(i, t);
    return o != null && o.set && o != null && o.get
      ? o.set.call(r, n) || !0
      : Reflect.set(i, t, n);
  },
};
function or() {
  return Reflect.ownKeys(this).reduce(
    (e, t) => ((e[t] = Reflect.get(this, t)), e),
    {}
  );
}
function Ut(e) {
  let t = (r) => typeof r == "object" && !Array.isArray(r) && r !== null,
    n = (r, i = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(
        ([o, { value: a, enumerable: s }]) => {
          if (
            s === !1 ||
            a === void 0 ||
            (typeof a == "object" && a !== null && a.__v_skip)
          )
            return;
          let l = i === "" ? o : `${i}.${o}`;
          typeof a == "object" && a !== null && a._x_interceptor
            ? (r[o] = a.initialize(e, l, o))
            : t(a) && a !== r && !(a instanceof Element) && n(a, l);
        }
      );
    };
  return n(e);
}
function qt(e, t = () => {}) {
  let n = {
    initialValue: void 0,
    _x_interceptor: !0,
    initialize(r, i, o) {
      return e(
        this.initialValue,
        () => ar(r, i),
        (a) => Ft(r, i, a),
        i,
        o
      );
    },
  };
  return (
    t(n),
    (r) => {
      if (typeof r == "object" && r !== null && r._x_interceptor) {
        let i = n.initialize.bind(n);
        n.initialize = (o, a, s) => {
          let l = r.initialize(o, a, s);
          return (n.initialValue = l), i(o, a, s);
        };
      } else n.initialValue = r;
      return n;
    }
  );
}
function ar(e, t) {
  return t.split(".").reduce((n, r) => n[r], e);
}
function Ft(e, t, n) {
  if ((typeof t == "string" && (t = t.split(".")), t.length === 1)) e[t[0]] = n;
  else {
    if (t.length === 0) throw error;
    return e[t[0]] || (e[t[0]] = {}), Ft(e[t[0]], t.slice(1), n);
  }
}
var Bt = {};
function O(e, t) {
  Bt[e] = t;
}
function Le(e, t) {
  let n = sr(t);
  return (
    Object.entries(Bt).forEach(([r, i]) => {
      Object.defineProperty(e, `$${r}`, {
        get() {
          return i(t, n);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
function sr(e) {
  let [t, n] = Jt(e),
    r = { interceptor: qt, ...t };
  return Ve(e, n), r;
}
function lr(e, t, n, ...r) {
  try {
    return n(...r);
  } catch (i) {
    ne(i, e, t);
  }
}
function ne(e, t, n = void 0) {
  (e = Object.assign(e ?? { message: "No error message given." }, {
    el: t,
    expression: n,
  })),
    console.warn(
      `Alpine Expression Error: ${e.message}

${
  n
    ? 'Expression: "' +
      n +
      `"

`
    : ""
}`,
      t
    ),
    setTimeout(() => {
      throw e;
    }, 0);
}
var fe = !0;
function zt(e) {
  let t = fe;
  fe = !1;
  let n = e();
  return (fe = t), n;
}
function R(e, t, n = {}) {
  let r;
  return b(e, t)((i) => (r = i), n), r;
}
function b(...e) {
  return Kt(...e);
}
var Kt = Wt;
function ur(e) {
  Kt = e;
}
function Wt(e, t) {
  let n = {};
  Le(n, e);
  let r = [n, ...B(e)],
    i = typeof t == "function" ? cr(r, t) : fr(r, t, e);
  return lr.bind(null, e, t, i);
}
function cr(e, t) {
  return (n = () => {}, { scope: r = {}, params: i = [] } = {}) => {
    let o = t.apply(ie([r, ...e]), i);
    _e(n, o);
  };
}
var Oe = {};
function dr(e, t) {
  if (Oe[e]) return Oe[e];
  let n = Object.getPrototypeOf(async function () {}).constructor,
    r =
      /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim())
        ? `(async()=>{ ${e} })()`
        : e,
    i = (() => {
      try {
        let o = new n(
          ["__self", "scope"],
          `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
        );
        return Object.defineProperty(o, "name", { value: `[Alpine] ${e}` }), o;
      } catch (o) {
        return ne(o, t, e), Promise.resolve();
      }
    })();
  return (Oe[e] = i), i;
}
function fr(e, t, n) {
  let r = dr(t, n);
  return (i = () => {}, { scope: o = {}, params: a = [] } = {}) => {
    (r.result = void 0), (r.finished = !1);
    let s = ie([o, ...e]);
    if (typeof r == "function") {
      let l = r(r, s).catch((u) => ne(u, n, t));
      r.finished
        ? (_e(i, r.result, s, a, n), (r.result = void 0))
        : l
            .then((u) => {
              _e(i, u, s, a, n);
            })
            .catch((u) => ne(u, n, t))
            .finally(() => (r.result = void 0));
    }
  };
}
function _e(e, t, n, r, i) {
  if (fe && typeof t == "function") {
    let o = t.apply(n, r);
    o instanceof Promise
      ? o.then((a) => _e(e, a, n, r)).catch((a) => ne(a, i, t))
      : e(o);
  } else
    typeof t == "object" && t instanceof Promise ? t.then((o) => e(o)) : e(t);
}
var Ze = "x-";
function V(e = "") {
  return Ze + e;
}
function pr(e) {
  Ze = e;
}
var me = {};
function y(e, t) {
  return (
    (me[e] = t),
    {
      before(n) {
        if (!me[n]) {
          console.warn(
            String.raw`Cannot find directive \`${n}\`. \`${e}\` will use the default order of execution`
          );
          return;
        }
        const r = L.indexOf(n);
        L.splice(r >= 0 ? r : L.indexOf("DEFAULT"), 0, e);
      },
    }
  );
}
function hr(e) {
  return Object.keys(me).includes(e);
}
function Qe(e, t, n) {
  if (((t = Array.from(t)), e._x_virtualDirectives)) {
    let i = Object.entries(e._x_virtualDirectives).map(([a, s]) => ({
        name: a,
        value: s,
      })),
      o = Vt(i);
    (i = i.map((a) =>
      o.find((s) => s.name === a.name)
        ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
        : a
    )),
      (t = t.concat(i));
  }
  let r = {};
  return t
    .map(Yt((i, o) => (r[i] = o)))
    .filter(Qt)
    .map(gr(r, n))
    .sort(yr)
    .map((i) => mr(e, i));
}
function Vt(e) {
  return Array.from(e)
    .map(Yt())
    .filter((t) => !Qt(t));
}
var Ie = !1,
  Q = new Map(),
  Ht = Symbol();
function _r(e) {
  Ie = !0;
  let t = Symbol();
  (Ht = t), Q.set(t, []);
  let n = () => {
      for (; Q.get(t).length; ) Q.get(t).shift()();
      Q.delete(t);
    },
    r = () => {
      (Ie = !1), n();
    };
  e(n), r();
}
function Jt(e) {
  let t = [],
    n = (o) => t.push(o),
    [r, i] = Zn(e);
  return (
    t.push(i),
    [
      {
        Alpine: oe,
        effect: r,
        cleanup: n,
        evaluateLater: b.bind(b, e),
        evaluate: R.bind(R, e),
      },
      () => t.forEach((o) => o()),
    ]
  );
}
function mr(e, t) {
  let n = () => {},
    r = me[t.type] || n,
    [i, o] = Jt(e);
  It(e, t.original, o);
  let a = () => {
    e._x_ignore ||
      e._x_ignoreSelf ||
      (r.inline && r.inline(e, t, i),
      (r = r.bind(r, e, t, i)),
      Ie ? Q.get(Ht).push(r) : r());
  };
  return (a.runCleanups = o), a;
}
var Gt =
    (e, t) =>
    ({ name: n, value: r }) => (
      n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: r }
    ),
  Xt = (e) => e;
function Yt(e = () => {}) {
  return ({ name: t, value: n }) => {
    let { name: r, value: i } = Zt.reduce((o, a) => a(o), {
      name: t,
      value: n,
    });
    return r !== t && e(r, t), { name: r, value: i };
  };
}
var Zt = [];
function et(e) {
  Zt.push(e);
}
function Qt({ name: e }) {
  return en().test(e);
}
var en = () => new RegExp(`^${Ze}([^:^.]+)\\b`);
function gr(e, t) {
  return ({ name: n, value: r }) => {
    let i = n.match(en()),
      o = n.match(/:([a-zA-Z0-9\-_:]+)/),
      a = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
      s = t || e[n] || n;
    return {
      type: i ? i[1] : null,
      value: o ? o[1] : null,
      modifiers: a.map((l) => l.replace(".", "")),
      expression: r,
      original: s,
    };
  };
}
var Re = "DEFAULT",
  L = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    Re,
    "teleport",
  ];
function yr(e, t) {
  let n = L.indexOf(e.type) === -1 ? Re : e.type,
    r = L.indexOf(t.type) === -1 ? Re : t.type;
  return L.indexOf(n) - L.indexOf(r);
}
function ee(e, t, n = {}) {
  e.dispatchEvent(
    new CustomEvent(t, { detail: n, bubbles: !0, composed: !0, cancelable: !0 })
  );
}
function U(e, t) {
  if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
    Array.from(e.children).forEach((i) => U(i, t));
    return;
  }
  let n = !1;
  if ((t(e, () => (n = !0)), n)) return;
  let r = e.firstElementChild;
  for (; r; ) U(r, t), (r = r.nextElementSibling);
}
function k(e, ...t) {
  console.warn(`Alpine Warning: ${e}`, ...t);
}
var mt = !1;
function vr() {
  mt &&
    k(
      "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."
    ),
    (mt = !0),
    document.body ||
      k(
        "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
      ),
    ee(document, "alpine:init"),
    ee(document, "alpine:initializing"),
    Ge(),
    Qn((t) => E(t, U)),
    Ve((t) => J(t)),
    Lt((t, n) => {
      Qe(t, n).forEach((r) => r());
    });
  let e = (t) => !ye(t.parentElement, !0);
  Array.from(document.querySelectorAll(rn().join(",")))
    .filter(e)
    .forEach((t) => {
      E(t);
    }),
    ee(document, "alpine:initialized"),
    setTimeout(() => {
      kr();
    });
}
var tt = [],
  tn = [];
function nn() {
  return tt.map((e) => e());
}
function rn() {
  return tt.concat(tn).map((e) => e());
}
function on(e) {
  tt.push(e);
}
function an(e) {
  tn.push(e);
}
function ye(e, t = !1) {
  return H(e, (n) => {
    if ((t ? rn() : nn()).some((r) => n.matches(r))) return !0;
  });
}
function H(e, t) {
  if (e) {
    if (t(e)) return e;
    if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
      return H(e.parentElement, t);
  }
}
function xr(e) {
  return nn().some((t) => e.matches(t));
}
var sn = [];
function br(e) {
  sn.push(e);
}
var wr = 1;
function E(e, t = U, n = () => {}) {
  H(e, (r) => r._x_ignore) ||
    _r(() => {
      t(e, (r, i) => {
        r._x_marker ||
          (n(r, i),
          sn.forEach((o) => o(r, i)),
          Qe(r, r.attributes).forEach((o) => o()),
          r._x_ignore || (r._x_marker = wr++),
          r._x_ignore && i());
      });
    });
}
function J(e, t = U) {
  t(e, (n) => {
    er(n), Rt(n), delete n._x_marker;
  });
}
function kr() {
  [
    ["ui", "dialog", ["[x-dialog], [x-popover]"]],
    ["anchor", "anchor", ["[x-anchor]"]],
    ["sort", "sort", ["[x-sort]"]],
  ].forEach(([e, t, n]) => {
    hr(t) ||
      n.some((r) => {
        if (document.querySelector(r))
          return k(`found "${r}", but missing ${e} plugin`), !0;
      });
  });
}
var De = [],
  nt = !1;
function rt(e = () => {}) {
  return (
    queueMicrotask(() => {
      nt ||
        setTimeout(() => {
          Te();
        });
    }),
    new Promise((t) => {
      De.push(() => {
        e(), t();
      });
    })
  );
}
function Te() {
  for (nt = !1; De.length; ) De.shift()();
}
function Ar() {
  nt = !0;
}
function it(e, t) {
  return Array.isArray(t)
    ? gt(e, t.join(" "))
    : typeof t == "object" && t !== null
    ? Or(e, t)
    : typeof t == "function"
    ? it(e, t())
    : gt(e, t);
}
function gt(e, t) {
  let n = (i) =>
      i
        .split(" ")
        .filter((o) => !e.classList.contains(o))
        .filter(Boolean),
    r = (i) => (
      e.classList.add(...i),
      () => {
        e.classList.remove(...i);
      }
    );
  return (t = t === !0 ? (t = "") : t || ""), r(n(t));
}
function Or(e, t) {
  let n = (s) => s.split(" ").filter(Boolean),
    r = Object.entries(t)
      .flatMap(([s, l]) => (l ? n(s) : !1))
      .filter(Boolean),
    i = Object.entries(t)
      .flatMap(([s, l]) => (l ? !1 : n(s)))
      .filter(Boolean),
    o = [],
    a = [];
  return (
    i.forEach((s) => {
      e.classList.contains(s) && (e.classList.remove(s), a.push(s));
    }),
    r.forEach((s) => {
      e.classList.contains(s) || (e.classList.add(s), o.push(s));
    }),
    () => {
      a.forEach((s) => e.classList.add(s)),
        o.forEach((s) => e.classList.remove(s));
    }
  );
}
function ve(e, t) {
  return typeof t == "object" && t !== null ? Sr(e, t) : Er(e, t);
}
function Sr(e, t) {
  let n = {};
  return (
    Object.entries(t).forEach(([r, i]) => {
      (n[r] = e.style[r]),
        r.startsWith("--") || (r = Pr(r)),
        e.style.setProperty(r, i);
    }),
    setTimeout(() => {
      e.style.length === 0 && e.removeAttribute("style");
    }),
    () => {
      ve(e, n);
    }
  );
}
function Er(e, t) {
  let n = e.getAttribute("style", t);
  return (
    e.setAttribute("style", t),
    () => {
      e.setAttribute("style", n || "");
    }
  );
}
function Pr(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Ue(e, t = () => {}) {
  let n = !1;
  return function () {
    n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
  };
}
y(
  "transition",
  (e, { value: t, modifiers: n, expression: r }, { evaluate: i }) => {
    typeof r == "function" && (r = i(r)),
      r !== !1 && (!r || typeof r == "boolean" ? jr(e, n, t) : $r(e, r, t));
  }
);
function $r(e, t, n) {
  ln(e, it, ""),
    {
      enter: (r) => {
        e._x_transition.enter.during = r;
      },
      "enter-start": (r) => {
        e._x_transition.enter.start = r;
      },
      "enter-end": (r) => {
        e._x_transition.enter.end = r;
      },
      leave: (r) => {
        e._x_transition.leave.during = r;
      },
      "leave-start": (r) => {
        e._x_transition.leave.start = r;
      },
      "leave-end": (r) => {
        e._x_transition.leave.end = r;
      },
    }[n](t);
}
function jr(e, t, n) {
  ln(e, ve);
  let r = !t.includes("in") && !t.includes("out") && !n,
    i = r || t.includes("in") || ["enter"].includes(n),
    o = r || t.includes("out") || ["leave"].includes(n);
  t.includes("in") && !r && (t = t.filter((_, g) => g < t.indexOf("out"))),
    t.includes("out") && !r && (t = t.filter((_, g) => g > t.indexOf("out")));
  let a = !t.includes("opacity") && !t.includes("scale"),
    s = a || t.includes("opacity"),
    l = a || t.includes("scale"),
    u = s ? 0 : 1,
    c = l ? Y(t, "scale", 95) / 100 : 1,
    f = Y(t, "delay", 0) / 1e3,
    p = Y(t, "origin", "center"),
    v = "opacity, transform",
    P = Y(t, "duration", 150) / 1e3,
    ae = Y(t, "duration", 75) / 1e3,
    d = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  i &&
    ((e._x_transition.enter.during = {
      transformOrigin: p,
      transitionDelay: `${f}s`,
      transitionProperty: v,
      transitionDuration: `${P}s`,
      transitionTimingFunction: d,
    }),
    (e._x_transition.enter.start = { opacity: u, transform: `scale(${c})` }),
    (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
    o &&
      ((e._x_transition.leave.during = {
        transformOrigin: p,
        transitionDelay: `${f}s`,
        transitionProperty: v,
        transitionDuration: `${ae}s`,
        transitionTimingFunction: d,
      }),
      (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
      (e._x_transition.leave.end = { opacity: u, transform: `scale(${c})` }));
}
function ln(e, t, n = {}) {
  e._x_transition ||
    (e._x_transition = {
      enter: { during: n, start: n, end: n },
      leave: { during: n, start: n, end: n },
      in(r = () => {}, i = () => {}) {
        qe(
          e,
          t,
          {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end,
          },
          r,
          i
        );
      },
      out(r = () => {}, i = () => {}) {
        qe(
          e,
          t,
          {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end,
          },
          r,
          i
        );
      },
    });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
  e,
  t,
  n,
  r
) {
  const i =
    document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let o = () => i(n);
  if (t) {
    e._x_transition && (e._x_transition.enter || e._x_transition.leave)
      ? e._x_transition.enter &&
        (Object.entries(e._x_transition.enter.during).length ||
          Object.entries(e._x_transition.enter.start).length ||
          Object.entries(e._x_transition.enter.end).length)
        ? e._x_transition.in(n)
        : o()
      : e._x_transition
      ? e._x_transition.in(n)
      : o();
    return;
  }
  (e._x_hidePromise = e._x_transition
    ? new Promise((a, s) => {
        e._x_transition.out(
          () => {},
          () => a(r)
        ),
          e._x_transitioning &&
            e._x_transitioning.beforeCancel(() =>
              s({ isFromCancelledTransition: !0 })
            );
      })
    : Promise.resolve(r)),
    queueMicrotask(() => {
      let a = un(e);
      a
        ? (a._x_hideChildren || (a._x_hideChildren = []),
          a._x_hideChildren.push(e))
        : i(() => {
            let s = (l) => {
              let u = Promise.all([
                l._x_hidePromise,
                ...(l._x_hideChildren || []).map(s),
              ]).then(([c]) => (c == null ? void 0 : c()));
              return delete l._x_hidePromise, delete l._x_hideChildren, u;
            };
            s(e).catch((l) => {
              if (!l.isFromCancelledTransition) throw l;
            });
          });
    });
};
function un(e) {
  let t = e.parentNode;
  if (t) return t._x_hidePromise ? t : un(t);
}
function qe(
  e,
  t,
  { during: n, start: r, end: i } = {},
  o = () => {},
  a = () => {}
) {
  if (
    (e._x_transitioning && e._x_transitioning.cancel(),
    Object.keys(n).length === 0 &&
      Object.keys(r).length === 0 &&
      Object.keys(i).length === 0)
  ) {
    o(), a();
    return;
  }
  let s, l, u;
  Cr(e, {
    start() {
      s = t(e, r);
    },
    during() {
      l = t(e, n);
    },
    before: o,
    end() {
      s(), (u = t(e, i));
    },
    after: a,
    cleanup() {
      l(), u();
    },
  });
}
function Cr(e, t) {
  let n,
    r,
    i,
    o = Ue(() => {
      m(() => {
        (n = !0),
          r || t.before(),
          i || (t.end(), Te()),
          t.after(),
          e.isConnected && t.cleanup(),
          delete e._x_transitioning;
      });
    });
  (e._x_transitioning = {
    beforeCancels: [],
    beforeCancel(a) {
      this.beforeCancels.push(a);
    },
    cancel: Ue(function () {
      for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
      o();
    }),
    finish: o,
  }),
    m(() => {
      t.start(), t.during();
    }),
    Ar(),
    requestAnimationFrame(() => {
      if (n) return;
      let a =
          Number(
            getComputedStyle(e)
              .transitionDuration.replace(/,.*/, "")
              .replace("s", "")
          ) * 1e3,
        s =
          Number(
            getComputedStyle(e)
              .transitionDelay.replace(/,.*/, "")
              .replace("s", "")
          ) * 1e3;
      a === 0 &&
        (a =
          Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
        m(() => {
          t.before();
        }),
        (r = !0),
        requestAnimationFrame(() => {
          n ||
            (m(() => {
              t.end();
            }),
            Te(),
            setTimeout(e._x_transitioning.finish, a + s),
            (i = !0));
        });
    });
}
function Y(e, t, n) {
  if (e.indexOf(t) === -1) return n;
  const r = e[e.indexOf(t) + 1];
  if (!r || (t === "scale" && isNaN(r))) return n;
  if (t === "duration" || t === "delay") {
    let i = r.match(/([0-9]+)ms/);
    if (i) return i[1];
  }
  return t === "origin" &&
    ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
    ? [r, e[e.indexOf(t) + 2]].join(" ")
    : r;
}
var j = !1;
function M(e, t = () => {}) {
  return (...n) => (j ? t(...n) : e(...n));
}
function Mr(e) {
  return (...t) => j && e(...t);
}
var cn = [];
function xe(e) {
  cn.push(e);
}
function Nr(e, t) {
  cn.forEach((n) => n(e, t)),
    (j = !0),
    dn(() => {
      E(t, (n, r) => {
        r(n, () => {});
      });
    }),
    (j = !1);
}
var Fe = !1;
function Lr(e, t) {
  t._x_dataStack || (t._x_dataStack = e._x_dataStack),
    (j = !0),
    (Fe = !0),
    dn(() => {
      Ir(t);
    }),
    (j = !1),
    (Fe = !1);
}
function Ir(e) {
  let t = !1;
  E(e, (n, r) => {
    U(n, (i, o) => {
      if (t && xr(i)) return o();
      (t = !0), r(i, o);
    });
  });
}
function dn(e) {
  let t = q;
  _t((n, r) => {
    let i = t(n);
    return W(i), () => {};
  }),
    e(),
    _t(t);
}
function fn(e, t, n, r = []) {
  switch (
    (e._x_bindings || (e._x_bindings = K({})),
    (e._x_bindings[t] = n),
    (t = r.includes("camel") ? zr(t) : t),
    t)
  ) {
    case "value":
      Rr(e, n);
      break;
    case "style":
      Tr(e, n);
      break;
    case "class":
      Dr(e, n);
      break;
    case "selected":
    case "checked":
      Ur(e, t, n);
      break;
    default:
      pn(e, t, n);
      break;
  }
}
function Rr(e, t) {
  if (mn(e))
    e.attributes.value === void 0 && (e.value = t),
      window.fromModel &&
        (typeof t == "boolean"
          ? (e.checked = pe(e.value) === t)
          : (e.checked = yt(e.value, t)));
  else if (ot(e))
    Number.isInteger(t)
      ? (e.value = t)
      : !Array.isArray(t) &&
        typeof t != "boolean" &&
        ![null, void 0].includes(t)
      ? (e.value = String(t))
      : Array.isArray(t)
      ? (e.checked = t.some((n) => yt(n, e.value)))
      : (e.checked = !!t);
  else if (e.tagName === "SELECT") Br(e, t);
  else {
    if (e.value === t) return;
    e.value = t === void 0 ? "" : t;
  }
}
function Dr(e, t) {
  e._x_undoAddedClasses && e._x_undoAddedClasses(),
    (e._x_undoAddedClasses = it(e, t));
}
function Tr(e, t) {
  e._x_undoAddedStyles && e._x_undoAddedStyles(),
    (e._x_undoAddedStyles = ve(e, t));
}
function Ur(e, t, n) {
  pn(e, t, n), Fr(e, t, n);
}
function pn(e, t, n) {
  [null, void 0, !1].includes(n) && Wr(t)
    ? e.removeAttribute(t)
    : (hn(t) && (n = t), qr(e, t, n));
}
function qr(e, t, n) {
  e.getAttribute(t) != n && e.setAttribute(t, n);
}
function Fr(e, t, n) {
  e[t] !== n && (e[t] = n);
}
function Br(e, t) {
  const n = [].concat(t).map((r) => r + "");
  Array.from(e.options).forEach((r) => {
    r.selected = n.includes(r.value);
  });
}
function zr(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function yt(e, t) {
  return e == t;
}
function pe(e) {
  return [1, "1", "true", "on", "yes", !0].includes(e)
    ? !0
    : [0, "0", "false", "off", "no", !1].includes(e)
    ? !1
    : e
    ? !!e
    : null;
}
var Kr = new Set([
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
  "shadowrootclonable",
  "shadowrootdelegatesfocus",
  "shadowrootserializable",
]);
function hn(e) {
  return Kr.has(e);
}
function Wr(e) {
  return ![
    "aria-pressed",
    "aria-checked",
    "aria-expanded",
    "aria-selected",
  ].includes(e);
}
function Vr(e, t, n) {
  return e._x_bindings && e._x_bindings[t] !== void 0
    ? e._x_bindings[t]
    : _n(e, t, n);
}
function Hr(e, t, n, r = !0) {
  if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
  if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
    let i = e._x_inlineBindings[t];
    return (i.extract = r), zt(() => R(e, i.expression));
  }
  return _n(e, t, n);
}
function _n(e, t, n) {
  let r = e.getAttribute(t);
  return r === null
    ? typeof n == "function"
      ? n()
      : n
    : r === ""
    ? !0
    : hn(t)
    ? !![t, "true"].includes(r)
    : r;
}
function ot(e) {
  return (
    e.type === "checkbox" ||
    e.localName === "ui-checkbox" ||
    e.localName === "ui-switch"
  );
}
function mn(e) {
  return e.type === "radio" || e.localName === "ui-radio";
}
function gn(e, t) {
  var n;
  return function () {
    var r = this,
      i = arguments,
      o = function () {
        (n = null), e.apply(r, i);
      };
    clearTimeout(n), (n = setTimeout(o, t));
  };
}
function yn(e, t) {
  let n;
  return function () {
    let r = this,
      i = arguments;
    n || (e.apply(r, i), (n = !0), setTimeout(() => (n = !1), t));
  };
}
function vn({ get: e, set: t }, { get: n, set: r }) {
  let i = !0,
    o,
    a = q(() => {
      let s = e(),
        l = n();
      if (i) r(Se(s)), (i = !1);
      else {
        let u = JSON.stringify(s),
          c = JSON.stringify(l);
        u !== o ? r(Se(s)) : u !== c && t(Se(l));
      }
      (o = JSON.stringify(e())), JSON.stringify(n());
    });
  return () => {
    W(a);
  };
}
function Se(e) {
  return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e;
}
function Jr(e) {
  (Array.isArray(e) ? e : [e]).forEach((t) => t(oe));
}
var N = {},
  vt = !1;
function Gr(e, t) {
  if ((vt || ((N = K(N)), (vt = !0)), t === void 0)) return N[e];
  (N[e] = t),
    Ut(N[e]),
    typeof t == "object" &&
      t !== null &&
      t.hasOwnProperty("init") &&
      typeof t.init == "function" &&
      N[e].init();
}
function Xr() {
  return N;
}
var xn = {};
function Yr(e, t) {
  let n = typeof t != "function" ? () => t : t;
  return e instanceof Element ? bn(e, n()) : ((xn[e] = n), () => {});
}
function Zr(e) {
  return (
    Object.entries(xn).forEach(([t, n]) => {
      Object.defineProperty(e, t, {
        get() {
          return (...r) => n(...r);
        },
      });
    }),
    e
  );
}
function bn(e, t, n) {
  let r = [];
  for (; r.length; ) r.pop()();
  let i = Object.entries(t).map(([a, s]) => ({ name: a, value: s })),
    o = Vt(i);
  return (
    (i = i.map((a) =>
      o.find((s) => s.name === a.name)
        ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
        : a
    )),
    Qe(e, i, n).map((a) => {
      r.push(a.runCleanups), a();
    }),
    () => {
      for (; r.length; ) r.pop()();
    }
  );
}
var wn = {};
function Qr(e, t) {
  wn[e] = t;
}
function ei(e, t) {
  return (
    Object.entries(wn).forEach(([n, r]) => {
      Object.defineProperty(e, n, {
        get() {
          return (...i) => r.bind(t)(...i);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
var ti = {
    get reactive() {
      return K;
    },
    get release() {
      return W;
    },
    get effect() {
      return q;
    },
    get raw() {
      return $t;
    },
    version: "3.14.9",
    flushAndStopDeferringMutations: rr,
    dontAutoEvaluateFunctions: zt,
    disableEffectScheduling: Xn,
    startObservingMutations: Ge,
    stopObservingMutations: Dt,
    setReactivityEngine: Yn,
    onAttributeRemoved: It,
    onAttributesAdded: Lt,
    closestDataStack: B,
    skipDuringClone: M,
    onlyDuringClone: Mr,
    addRootSelector: on,
    addInitSelector: an,
    interceptClone: xe,
    addScopeToNode: re,
    deferMutations: nr,
    mapAttributes: et,
    evaluateLater: b,
    interceptInit: br,
    setEvaluator: ur,
    mergeProxies: ie,
    extractProp: Hr,
    findClosest: H,
    onElRemoved: Ve,
    closestRoot: ye,
    destroyTree: J,
    interceptor: qt,
    transition: qe,
    setStyles: ve,
    mutateDom: m,
    directive: y,
    entangle: vn,
    throttle: yn,
    debounce: gn,
    evaluate: R,
    initTree: E,
    nextTick: rt,
    prefixed: V,
    prefix: pr,
    plugin: Jr,
    magic: O,
    store: Gr,
    start: vr,
    clone: Lr,
    cloneNode: Nr,
    bound: Vr,
    $data: Tt,
    watch: jt,
    walk: U,
    data: Qr,
    bind: Yr,
  },
  oe = ti;
function ni(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let i = 0; i < r.length; i++) n[r[i]] = !0;
  return (i) => !!n[i];
}
var ri = Object.freeze({}),
  ii = Object.prototype.hasOwnProperty,
  be = (e, t) => ii.call(e, t),
  D = Array.isArray,
  te = (e) => kn(e) === "[object Map]",
  oi = (e) => typeof e == "string",
  at = (e) => typeof e == "symbol",
  we = (e) => e !== null && typeof e == "object",
  ai = Object.prototype.toString,
  kn = (e) => ai.call(e),
  An = (e) => kn(e).slice(8, -1),
  st = (e) =>
    oi(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  si = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  li = si((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  On = (e, t) => e !== t && (e === e || t === t),
  Be = new WeakMap(),
  Z = [],
  S,
  T = Symbol("iterate"),
  ze = Symbol("Map key iterate");
function ui(e) {
  return e && e._isEffect === !0;
}
function ci(e, t = ri) {
  ui(e) && (e = e.raw);
  const n = pi(e, t);
  return t.lazy || n(), n;
}
function di(e) {
  e.active && (Sn(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
var fi = 0;
function pi(e, t) {
  const n = function () {
    if (!n.active) return e();
    if (!Z.includes(n)) {
      Sn(n);
      try {
        return _i(), Z.push(n), (S = n), e();
      } finally {
        Z.pop(), En(), (S = Z[Z.length - 1]);
      }
    }
  };
  return (
    (n.id = fi++),
    (n.allowRecurse = !!t.allowRecurse),
    (n._isEffect = !0),
    (n.active = !0),
    (n.raw = e),
    (n.deps = []),
    (n.options = t),
    n
  );
}
function Sn(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
var z = !0,
  lt = [];
function hi() {
  lt.push(z), (z = !1);
}
function _i() {
  lt.push(z), (z = !0);
}
function En() {
  const e = lt.pop();
  z = e === void 0 ? !0 : e;
}
function A(e, t, n) {
  if (!z || S === void 0) return;
  let r = Be.get(e);
  r || Be.set(e, (r = new Map()));
  let i = r.get(n);
  i || r.set(n, (i = new Set())),
    i.has(S) ||
      (i.add(S),
      S.deps.push(i),
      S.options.onTrack &&
        S.options.onTrack({ effect: S, target: e, type: t, key: n }));
}
function C(e, t, n, r, i, o) {
  const a = Be.get(e);
  if (!a) return;
  const s = new Set(),
    l = (c) => {
      c &&
        c.forEach((f) => {
          (f !== S || f.allowRecurse) && s.add(f);
        });
    };
  if (t === "clear") a.forEach(l);
  else if (n === "length" && D(e))
    a.forEach((c, f) => {
      (f === "length" || f >= r) && l(c);
    });
  else
    switch ((n !== void 0 && l(a.get(n)), t)) {
      case "add":
        D(e)
          ? st(n) && l(a.get("length"))
          : (l(a.get(T)), te(e) && l(a.get(ze)));
        break;
      case "delete":
        D(e) || (l(a.get(T)), te(e) && l(a.get(ze)));
        break;
      case "set":
        te(e) && l(a.get(T));
        break;
    }
  const u = (c) => {
    c.options.onTrigger &&
      c.options.onTrigger({
        effect: c,
        target: e,
        key: n,
        type: t,
        newValue: r,
        oldValue: i,
        oldTarget: o,
      }),
      c.options.scheduler ? c.options.scheduler(c) : c();
  };
  s.forEach(u);
}
var mi = ni("__proto__,__v_isRef,__isVue"),
  Pn = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(at)
  ),
  gi = $n(),
  yi = $n(!0),
  xt = vi();
function vi() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = h(this);
        for (let o = 0, a = this.length; o < a; o++) A(r, "get", o + "");
        const i = r[t](...n);
        return i === -1 || i === !1 ? r[t](...n.map(h)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        hi();
        const r = h(this)[t].apply(this, n);
        return En(), r;
      };
    }),
    e
  );
}
function $n(e = !1, t = !1) {
  return function (n, r, i) {
    if (r === "__v_isReactive") return !e;
    if (r === "__v_isReadonly") return e;
    if (r === "__v_raw" && i === (e ? (t ? Ni : Nn) : t ? Mi : Mn).get(n))
      return n;
    const o = D(n);
    if (!e && o && be(xt, r)) return Reflect.get(xt, r, i);
    const a = Reflect.get(n, r, i);
    return (at(r) ? Pn.has(r) : mi(r)) || (e || A(n, "get", r), t)
      ? a
      : Ke(a)
      ? !o || !st(r)
        ? a.value
        : a
      : we(a)
      ? e
        ? Ln(a)
        : ft(a)
      : a;
  };
}
var xi = bi();
function bi(e = !1) {
  return function (t, n, r, i) {
    let o = t[n];
    if (!e && ((r = h(r)), (o = h(o)), !D(t) && Ke(o) && !Ke(r)))
      return (o.value = r), !0;
    const a = D(t) && st(n) ? Number(n) < t.length : be(t, n),
      s = Reflect.set(t, n, r, i);
    return (
      t === h(i) && (a ? On(r, o) && C(t, "set", n, r, o) : C(t, "add", n, r)),
      s
    );
  };
}
function wi(e, t) {
  const n = be(e, t),
    r = e[t],
    i = Reflect.deleteProperty(e, t);
  return i && n && C(e, "delete", t, void 0, r), i;
}
function ki(e, t) {
  const n = Reflect.has(e, t);
  return (!at(t) || !Pn.has(t)) && A(e, "has", t), n;
}
function Ai(e) {
  return A(e, "iterate", D(e) ? "length" : T), Reflect.ownKeys(e);
}
var Oi = { get: gi, set: xi, deleteProperty: wi, has: ki, ownKeys: Ai },
  Si = {
    get: yi,
    set(e, t) {
      return (
        console.warn(
          `Set operation on key "${String(t)}" failed: target is readonly.`,
          e
        ),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        console.warn(
          `Delete operation on key "${String(t)}" failed: target is readonly.`,
          e
        ),
        !0
      );
    },
  },
  ut = (e) => (we(e) ? ft(e) : e),
  ct = (e) => (we(e) ? Ln(e) : e),
  dt = (e) => e,
  ke = (e) => Reflect.getPrototypeOf(e);
function se(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const i = h(e),
    o = h(t);
  t !== o && !n && A(i, "get", t), !n && A(i, "get", o);
  const { has: a } = ke(i),
    s = r ? dt : n ? ct : ut;
  if (a.call(i, t)) return s(e.get(t));
  if (a.call(i, o)) return s(e.get(o));
  e !== i && e.get(t);
}
function le(e, t = !1) {
  const n = this.__v_raw,
    r = h(n),
    i = h(e);
  return (
    e !== i && !t && A(r, "has", e),
    !t && A(r, "has", i),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function ue(e, t = !1) {
  return (
    (e = e.__v_raw), !t && A(h(e), "iterate", T), Reflect.get(e, "size", e)
  );
}
function bt(e) {
  e = h(e);
  const t = h(this);
  return ke(t).has.call(t, e) || (t.add(e), C(t, "add", e, e)), this;
}
function wt(e, t) {
  t = h(t);
  const n = h(this),
    { has: r, get: i } = ke(n);
  let o = r.call(n, e);
  o ? Cn(n, r, e) : ((e = h(e)), (o = r.call(n, e)));
  const a = i.call(n, e);
  return (
    n.set(e, t), o ? On(t, a) && C(n, "set", e, t, a) : C(n, "add", e, t), this
  );
}
function kt(e) {
  const t = h(this),
    { has: n, get: r } = ke(t);
  let i = n.call(t, e);
  i ? Cn(t, n, e) : ((e = h(e)), (i = n.call(t, e)));
  const o = r ? r.call(t, e) : void 0,
    a = t.delete(e);
  return i && C(t, "delete", e, void 0, o), a;
}
function At() {
  const e = h(this),
    t = e.size !== 0,
    n = te(e) ? new Map(e) : new Set(e),
    r = e.clear();
  return t && C(e, "clear", void 0, void 0, n), r;
}
function ce(e, t) {
  return function (n, r) {
    const i = this,
      o = i.__v_raw,
      a = h(o),
      s = t ? dt : e ? ct : ut;
    return (
      !e && A(a, "iterate", T), o.forEach((l, u) => n.call(r, s(l), s(u), i))
    );
  };
}
function de(e, t, n) {
  return function (...r) {
    const i = this.__v_raw,
      o = h(i),
      a = te(o),
      s = e === "entries" || (e === Symbol.iterator && a),
      l = e === "keys" && a,
      u = i[e](...r),
      c = n ? dt : t ? ct : ut;
    return (
      !t && A(o, "iterate", l ? ze : T),
      {
        next() {
          const { value: f, done: p } = u.next();
          return p
            ? { value: f, done: p }
            : { value: s ? [c(f[0]), c(f[1])] : c(f), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function $(e) {
  return function (...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${li(e)} operation ${n}failed: target is readonly.`,
        h(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function Ei() {
  const e = {
      get(i) {
        return se(this, i);
      },
      get size() {
        return ue(this);
      },
      has: le,
      add: bt,
      set: wt,
      delete: kt,
      clear: At,
      forEach: ce(!1, !1),
    },
    t = {
      get(i) {
        return se(this, i, !1, !0);
      },
      get size() {
        return ue(this);
      },
      has: le,
      add: bt,
      set: wt,
      delete: kt,
      clear: At,
      forEach: ce(!1, !0),
    },
    n = {
      get(i) {
        return se(this, i, !0);
      },
      get size() {
        return ue(this, !0);
      },
      has(i) {
        return le.call(this, i, !0);
      },
      add: $("add"),
      set: $("set"),
      delete: $("delete"),
      clear: $("clear"),
      forEach: ce(!0, !1),
    },
    r = {
      get(i) {
        return se(this, i, !0, !0);
      },
      get size() {
        return ue(this, !0);
      },
      has(i) {
        return le.call(this, i, !0);
      },
      add: $("add"),
      set: $("set"),
      delete: $("delete"),
      clear: $("clear"),
      forEach: ce(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = de(i, !1, !1)),
        (n[i] = de(i, !0, !1)),
        (t[i] = de(i, !1, !0)),
        (r[i] = de(i, !0, !0));
    }),
    [e, n, t, r]
  );
}
var [Pi, $i, to, no] = Ei();
function jn(e, t) {
  const n = e ? $i : Pi;
  return (r, i, o) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? r
      : Reflect.get(be(n, i) && i in r ? n : r, i, o);
}
var ji = { get: jn(!1) },
  Ci = { get: jn(!0) };
function Cn(e, t, n) {
  const r = h(n);
  if (r !== n && t.call(e, r)) {
    const i = An(e);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${
        i === "Map" ? " as keys" : ""
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
var Mn = new WeakMap(),
  Mi = new WeakMap(),
  Nn = new WeakMap(),
  Ni = new WeakMap();
function Li(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ii(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Li(An(e));
}
function ft(e) {
  return e && e.__v_isReadonly ? e : In(e, !1, Oi, ji, Mn);
}
function Ln(e) {
  return In(e, !0, Si, Ci, Nn);
}
function In(e, t, n, r, i) {
  if (!we(e))
    return console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = i.get(e);
  if (o) return o;
  const a = Ii(e);
  if (a === 0) return e;
  const s = new Proxy(e, a === 2 ? r : n);
  return i.set(e, s), s;
}
function h(e) {
  return (e && h(e.__v_raw)) || e;
}
function Ke(e) {
  return !!(e && e.__v_isRef === !0);
}
O("nextTick", () => rt);
O("dispatch", (e) => ee.bind(ee, e));
O("watch", (e, { evaluateLater: t, cleanup: n }) => (r, i) => {
  let o = t(r),
    a = jt(() => {
      let s;
      return o((l) => (s = l)), s;
    }, i);
  n(a);
});
O("store", Xr);
O("data", (e) => Tt(e));
O("root", (e) => ye(e));
O(
  "refs",
  (e) => (e._x_refs_proxy || (e._x_refs_proxy = ie(Ri(e))), e._x_refs_proxy)
);
function Ri(e) {
  let t = [];
  return (
    H(e, (n) => {
      n._x_refs && t.push(n._x_refs);
    }),
    t
  );
}
var Ee = {};
function Rn(e) {
  return Ee[e] || (Ee[e] = 0), ++Ee[e];
}
function Di(e, t) {
  return H(e, (n) => {
    if (n._x_ids && n._x_ids[t]) return !0;
  });
}
function Ti(e, t) {
  e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Rn(t));
}
O("id", (e, { cleanup: t }) => (n, r = null) => {
  let i = `${n}${r ? `-${r}` : ""}`;
  return Ui(e, i, t, () => {
    let o = Di(e, n),
      a = o ? o._x_ids[n] : Rn(n);
    return r ? `${n}-${a}-${r}` : `${n}-${a}`;
  });
});
xe((e, t) => {
  e._x_id && (t._x_id = e._x_id);
});
function Ui(e, t, n, r) {
  if ((e._x_id || (e._x_id = {}), e._x_id[t])) return e._x_id[t];
  let i = r();
  return (
    (e._x_id[t] = i),
    n(() => {
      delete e._x_id[t];
    }),
    i
  );
}
O("el", (e) => e);
Dn("Focus", "focus", "focus");
Dn("Persist", "persist", "persist");
function Dn(e, t, n) {
  O(t, (r) =>
    k(
      `You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
      r
    )
  );
}
y(
  "modelable",
  (e, { expression: t }, { effect: n, evaluateLater: r, cleanup: i }) => {
    let o = r(t),
      a = () => {
        let c;
        return o((f) => (c = f)), c;
      },
      s = r(`${t} = __placeholder`),
      l = (c) => s(() => {}, { scope: { __placeholder: c } }),
      u = a();
    l(u),
      queueMicrotask(() => {
        if (!e._x_model) return;
        e._x_removeModelListeners.default();
        let c = e._x_model.get,
          f = e._x_model.set,
          p = vn(
            {
              get() {
                return c();
              },
              set(v) {
                f(v);
              },
            },
            {
              get() {
                return a();
              },
              set(v) {
                l(v);
              },
            }
          );
        i(p);
      });
  }
);
y("teleport", (e, { modifiers: t, expression: n }, { cleanup: r }) => {
  e.tagName.toLowerCase() !== "template" &&
    k("x-teleport can only be used on a <template> tag", e);
  let i = Ot(n),
    o = e.content.cloneNode(!0).firstElementChild;
  (e._x_teleport = o),
    (o._x_teleportBack = e),
    e.setAttribute("data-teleport-template", !0),
    o.setAttribute("data-teleport-target", !0),
    e._x_forwardEvents &&
      e._x_forwardEvents.forEach((s) => {
        o.addEventListener(s, (l) => {
          l.stopPropagation(), e.dispatchEvent(new l.constructor(l.type, l));
        });
      }),
    re(o, {}, e);
  let a = (s, l, u) => {
    u.includes("prepend")
      ? l.parentNode.insertBefore(s, l)
      : u.includes("append")
      ? l.parentNode.insertBefore(s, l.nextSibling)
      : l.appendChild(s);
  };
  m(() => {
    a(o, i, t),
      M(() => {
        E(o);
      })();
  }),
    (e._x_teleportPutBack = () => {
      let s = Ot(n);
      m(() => {
        a(e._x_teleport, s, t);
      });
    }),
    r(() =>
      m(() => {
        o.remove(), J(o);
      })
    );
});
var qi = document.createElement("div");
function Ot(e) {
  let t = M(
    () => document.querySelector(e),
    () => qi
  )();
  return t || k(`Cannot find x-teleport element for selector: "${e}"`), t;
}
var Tn = () => {};
Tn.inline = (e, { modifiers: t }, { cleanup: n }) => {
  t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
    n(() => {
      t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
    });
};
y("ignore", Tn);
y(
  "effect",
  M((e, { expression: t }, { effect: n }) => {
    n(b(e, t));
  })
);
function We(e, t, n, r) {
  let i = e,
    o = (l) => r(l),
    a = {},
    s = (l, u) => (c) => u(l, c);
  if (
    (n.includes("dot") && (t = Fi(t)),
    n.includes("camel") && (t = Bi(t)),
    n.includes("passive") && (a.passive = !0),
    n.includes("capture") && (a.capture = !0),
    n.includes("window") && (i = window),
    n.includes("document") && (i = document),
    n.includes("debounce"))
  ) {
    let l = n[n.indexOf("debounce") + 1] || "invalid-wait",
      u = ge(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
    o = gn(o, u);
  }
  if (n.includes("throttle")) {
    let l = n[n.indexOf("throttle") + 1] || "invalid-wait",
      u = ge(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
    o = yn(o, u);
  }
  return (
    n.includes("prevent") &&
      (o = s(o, (l, u) => {
        u.preventDefault(), l(u);
      })),
    n.includes("stop") &&
      (o = s(o, (l, u) => {
        u.stopPropagation(), l(u);
      })),
    n.includes("once") &&
      (o = s(o, (l, u) => {
        l(u), i.removeEventListener(t, o, a);
      })),
    (n.includes("away") || n.includes("outside")) &&
      ((i = document),
      (o = s(o, (l, u) => {
        e.contains(u.target) ||
          (u.target.isConnected !== !1 &&
            ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
              (e._x_isShown !== !1 && l(u))));
      }))),
    n.includes("self") &&
      (o = s(o, (l, u) => {
        u.target === e && l(u);
      })),
    (Ki(t) || Un(t)) &&
      (o = s(o, (l, u) => {
        Wi(u, n) || l(u);
      })),
    i.addEventListener(t, o, a),
    () => {
      i.removeEventListener(t, o, a);
    }
  );
}
function Fi(e) {
  return e.replace(/-/g, ".");
}
function Bi(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function ge(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function zi(e) {
  return [" ", "_"].includes(e)
    ? e
    : e
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[_\s]/, "-")
        .toLowerCase();
}
function Ki(e) {
  return ["keydown", "keyup"].includes(e);
}
function Un(e) {
  return ["contextmenu", "click", "mouse"].some((t) => e.includes(t));
}
function Wi(e, t) {
  let n = t.filter(
    (i) =>
      ![
        "window",
        "document",
        "prevent",
        "stop",
        "once",
        "capture",
        "self",
        "away",
        "outside",
        "passive",
      ].includes(i)
  );
  if (n.includes("debounce")) {
    let i = n.indexOf("debounce");
    n.splice(i, ge((n[i + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (n.includes("throttle")) {
    let i = n.indexOf("throttle");
    n.splice(i, ge((n[i + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (n.length === 0 || (n.length === 1 && St(e.key).includes(n[0]))) return !1;
  const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((i) =>
    n.includes(i)
  );
  return (
    (n = n.filter((i) => !r.includes(i))),
    !(
      r.length > 0 &&
      r.filter(
        (i) => ((i === "cmd" || i === "super") && (i = "meta"), e[`${i}Key`])
      ).length === r.length &&
      (Un(e.type) || St(e.key).includes(n[0]))
    )
  );
}
function St(e) {
  if (!e) return [];
  e = zi(e);
  let t = {
    ctrl: "control",
    slash: "/",
    space: " ",
    spacebar: " ",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    comma: ",",
    equal: "=",
    minus: "-",
    underscore: "_",
  };
  return (
    (t[e] = e),
    Object.keys(t)
      .map((n) => {
        if (t[n] === e) return n;
      })
      .filter((n) => n)
  );
}
y("model", (e, { modifiers: t, expression: n }, { effect: r, cleanup: i }) => {
  let o = e;
  t.includes("parent") && (o = e.parentNode);
  let a = b(o, n),
    s;
  typeof n == "string"
    ? (s = b(o, `${n} = __placeholder`))
    : typeof n == "function" && typeof n() == "string"
    ? (s = b(o, `${n()} = __placeholder`))
    : (s = () => {});
  let l = () => {
      let p;
      return a((v) => (p = v)), Et(p) ? p.get() : p;
    },
    u = (p) => {
      let v;
      a((P) => (v = P)),
        Et(v) ? v.set(p) : s(() => {}, { scope: { __placeholder: p } });
    };
  typeof n == "string" &&
    e.type === "radio" &&
    m(() => {
      e.hasAttribute("name") || e.setAttribute("name", n);
    });
  var c =
    e.tagName.toLowerCase() === "select" ||
    ["checkbox", "radio"].includes(e.type) ||
    t.includes("lazy")
      ? "change"
      : "input";
  let f = j
    ? () => {}
    : We(e, c, t, (p) => {
        u(Pe(e, t, p, l()));
      });
  if (
    (t.includes("fill") &&
      ([void 0, null, ""].includes(l()) ||
        (ot(e) && Array.isArray(l())) ||
        (e.tagName.toLowerCase() === "select" && e.multiple)) &&
      u(Pe(e, t, { target: e }, l())),
    e._x_removeModelListeners || (e._x_removeModelListeners = {}),
    (e._x_removeModelListeners.default = f),
    i(() => e._x_removeModelListeners.default()),
    e.form)
  ) {
    let p = We(e.form, "reset", [], (v) => {
      rt(() => e._x_model && e._x_model.set(Pe(e, t, { target: e }, l())));
    });
    i(() => p());
  }
  (e._x_model = {
    get() {
      return l();
    },
    set(p) {
      u(p);
    },
  }),
    (e._x_forceModelUpdate = (p) => {
      p === void 0 && typeof n == "string" && n.match(/\./) && (p = ""),
        (window.fromModel = !0),
        m(() => fn(e, "value", p)),
        delete window.fromModel;
    }),
    r(() => {
      let p = l();
      (t.includes("unintrusive") && document.activeElement.isSameNode(e)) ||
        e._x_forceModelUpdate(p);
    });
});
function Pe(e, t, n, r) {
  return m(() => {
    if (n instanceof CustomEvent && n.detail !== void 0)
      return n.detail !== null && n.detail !== void 0
        ? n.detail
        : n.target.value;
    if (ot(e))
      if (Array.isArray(r)) {
        let i = null;
        return (
          t.includes("number")
            ? (i = $e(n.target.value))
            : t.includes("boolean")
            ? (i = pe(n.target.value))
            : (i = n.target.value),
          n.target.checked
            ? r.includes(i)
              ? r
              : r.concat([i])
            : r.filter((o) => !Vi(o, i))
        );
      } else return n.target.checked;
    else {
      if (e.tagName.toLowerCase() === "select" && e.multiple)
        return t.includes("number")
          ? Array.from(n.target.selectedOptions).map((i) => {
              let o = i.value || i.text;
              return $e(o);
            })
          : t.includes("boolean")
          ? Array.from(n.target.selectedOptions).map((i) => {
              let o = i.value || i.text;
              return pe(o);
            })
          : Array.from(n.target.selectedOptions).map((i) => i.value || i.text);
      {
        let i;
        return (
          mn(e)
            ? n.target.checked
              ? (i = n.target.value)
              : (i = r)
            : (i = n.target.value),
          t.includes("number")
            ? $e(i)
            : t.includes("boolean")
            ? pe(i)
            : t.includes("trim")
            ? i.trim()
            : i
        );
      }
    }
  });
}
function $e(e) {
  let t = e ? parseFloat(e) : null;
  return Hi(t) ? t : e;
}
function Vi(e, t) {
  return e == t;
}
function Hi(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Et(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    typeof e.get == "function" &&
    typeof e.set == "function"
  );
}
y("cloak", (e) => queueMicrotask(() => m(() => e.removeAttribute(V("cloak")))));
an(() => `[${V("init")}]`);
y(
  "init",
  M((e, { expression: t }, { evaluate: n }) =>
    typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)
  )
);
y("text", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t);
  n(() => {
    i((o) => {
      m(() => {
        e.textContent = o;
      });
    });
  });
});
y("html", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t);
  n(() => {
    i((o) => {
      m(() => {
        (e.innerHTML = o), (e._x_ignoreSelf = !0), E(e), delete e._x_ignoreSelf;
      });
    });
  });
});
et(Gt(":", Xt(V("bind:"))));
var qn = (
  e,
  { value: t, modifiers: n, expression: r, original: i },
  { effect: o, cleanup: a }
) => {
  if (!t) {
    let l = {};
    Zr(l),
      b(e, r)(
        (u) => {
          bn(e, u, i);
        },
        { scope: l }
      );
    return;
  }
  if (t === "key") return Ji(e, r);
  if (
    e._x_inlineBindings &&
    e._x_inlineBindings[t] &&
    e._x_inlineBindings[t].extract
  )
    return;
  let s = b(e, r);
  o(() =>
    s((l) => {
      l === void 0 && typeof r == "string" && r.match(/\./) && (l = ""),
        m(() => fn(e, t, l, n));
    })
  ),
    a(() => {
      e._x_undoAddedClasses && e._x_undoAddedClasses(),
        e._x_undoAddedStyles && e._x_undoAddedStyles();
    });
};
qn.inline = (e, { value: t, modifiers: n, expression: r }) => {
  t &&
    (e._x_inlineBindings || (e._x_inlineBindings = {}),
    (e._x_inlineBindings[t] = { expression: r, extract: !1 }));
};
y("bind", qn);
function Ji(e, t) {
  e._x_keyExpression = t;
}
on(() => `[${V("data")}]`);
y("data", (e, { expression: t }, { cleanup: n }) => {
  if (Gi(e)) return;
  t = t === "" ? "{}" : t;
  let r = {};
  Le(r, e);
  let i = {};
  ei(i, r);
  let o = R(e, t, { scope: i });
  (o === void 0 || o === !0) && (o = {}), Le(o, e);
  let a = K(o);
  Ut(a);
  let s = re(e, a);
  a.init && R(e, a.init),
    n(() => {
      a.destroy && R(e, a.destroy), s();
    });
});
xe((e, t) => {
  e._x_dataStack &&
    ((t._x_dataStack = e._x_dataStack),
    t.setAttribute("data-has-alpine-state", !0));
});
function Gi(e) {
  return j ? (Fe ? !0 : e.hasAttribute("data-has-alpine-state")) : !1;
}
y("show", (e, { modifiers: t, expression: n }, { effect: r }) => {
  let i = b(e, n);
  e._x_doHide ||
    (e._x_doHide = () => {
      m(() => {
        e.style.setProperty(
          "display",
          "none",
          t.includes("important") ? "important" : void 0
        );
      });
    }),
    e._x_doShow ||
      (e._x_doShow = () => {
        m(() => {
          e.style.length === 1 && e.style.display === "none"
            ? e.removeAttribute("style")
            : e.style.removeProperty("display");
        });
      });
  let o = () => {
      e._x_doHide(), (e._x_isShown = !1);
    },
    a = () => {
      e._x_doShow(), (e._x_isShown = !0);
    },
    s = () => setTimeout(a),
    l = Ue(
      (f) => (f ? a() : o()),
      (f) => {
        typeof e._x_toggleAndCascadeWithTransitions == "function"
          ? e._x_toggleAndCascadeWithTransitions(e, f, a, o)
          : f
          ? s()
          : o();
      }
    ),
    u,
    c = !0;
  r(() =>
    i((f) => {
      (!c && f === u) ||
        (t.includes("immediate") && (f ? s() : o()), l(f), (u = f), (c = !1));
    })
  );
});
y("for", (e, { expression: t }, { effect: n, cleanup: r }) => {
  let i = Yi(t),
    o = b(e, i.items),
    a = b(e, e._x_keyExpression || "index");
  (e._x_prevKeys = []),
    (e._x_lookup = {}),
    n(() => Xi(e, i, o, a)),
    r(() => {
      Object.values(e._x_lookup).forEach((s) =>
        m(() => {
          J(s), s.remove();
        })
      ),
        delete e._x_prevKeys,
        delete e._x_lookup;
    });
});
function Xi(e, t, n, r) {
  let i = (a) => typeof a == "object" && !Array.isArray(a),
    o = e;
  n((a) => {
    Zi(a) && a >= 0 && (a = Array.from(Array(a).keys(), (d) => d + 1)),
      a === void 0 && (a = []);
    let s = e._x_lookup,
      l = e._x_prevKeys,
      u = [],
      c = [];
    if (i(a))
      a = Object.entries(a).map(([d, _]) => {
        let g = Pt(t, _, d, a);
        r(
          (x) => {
            c.includes(x) && k("Duplicate key on x-for", e), c.push(x);
          },
          { scope: { index: d, ...g } }
        ),
          u.push(g);
      });
    else
      for (let d = 0; d < a.length; d++) {
        let _ = Pt(t, a[d], d, a);
        r(
          (g) => {
            c.includes(g) && k("Duplicate key on x-for", e), c.push(g);
          },
          { scope: { index: d, ..._ } }
        ),
          u.push(_);
      }
    let f = [],
      p = [],
      v = [],
      P = [];
    for (let d = 0; d < l.length; d++) {
      let _ = l[d];
      c.indexOf(_) === -1 && v.push(_);
    }
    l = l.filter((d) => !v.includes(d));
    let ae = "template";
    for (let d = 0; d < c.length; d++) {
      let _ = c[d],
        g = l.indexOf(_);
      if (g === -1) l.splice(d, 0, _), f.push([ae, d]);
      else if (g !== d) {
        let x = l.splice(d, 1)[0],
          w = l.splice(g - 1, 1)[0];
        l.splice(d, 0, w), l.splice(g, 0, x), p.push([x, w]);
      } else P.push(_);
      ae = _;
    }
    for (let d = 0; d < v.length; d++) {
      let _ = v[d];
      _ in s &&
        (m(() => {
          J(s[_]), s[_].remove();
        }),
        delete s[_]);
    }
    for (let d = 0; d < p.length; d++) {
      let [_, g] = p[d],
        x = s[_],
        w = s[g],
        F = document.createElement("div");
      m(() => {
        w || k('x-for ":key" is undefined or invalid', o, g, s),
          w.after(F),
          x.after(w),
          w._x_currentIfEl && w.after(w._x_currentIfEl),
          F.before(x),
          x._x_currentIfEl && x.after(x._x_currentIfEl),
          F.remove();
      }),
        w._x_refreshXForScope(u[c.indexOf(g)]);
    }
    for (let d = 0; d < f.length; d++) {
      let [_, g] = f[d],
        x = _ === "template" ? o : s[_];
      x._x_currentIfEl && (x = x._x_currentIfEl);
      let w = u[g],
        F = c[g],
        G = document.importNode(o.content, !0).firstElementChild,
        ht = K(w);
      re(G, ht, o),
        (G._x_refreshXForScope = (Bn) => {
          Object.entries(Bn).forEach(([zn, Kn]) => {
            ht[zn] = Kn;
          });
        }),
        m(() => {
          x.after(G), M(() => E(G))();
        }),
        typeof F == "object" &&
          k(
            "x-for key cannot be an object, it must be a string or an integer",
            o
          ),
        (s[F] = G);
    }
    for (let d = 0; d < P.length; d++)
      s[P[d]]._x_refreshXForScope(u[c.indexOf(P[d])]);
    o._x_prevKeys = c;
  });
}
function Yi(e) {
  let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    n = /^\s*\(|\)\s*$/g,
    r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
    i = e.match(r);
  if (!i) return;
  let o = {};
  o.items = i[2].trim();
  let a = i[1].replace(n, "").trim(),
    s = a.match(t);
  return (
    s
      ? ((o.item = a.replace(t, "").trim()),
        (o.index = s[1].trim()),
        s[2] && (o.collection = s[2].trim()))
      : (o.item = a),
    o
  );
}
function Pt(e, t, n, r) {
  let i = {};
  return (
    /^\[.*\]$/.test(e.item) && Array.isArray(t)
      ? e.item
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map((o) => o.trim())
          .forEach((o, a) => {
            i[o] = t[a];
          })
      : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
      ? e.item
          .replace("{", "")
          .replace("}", "")
          .split(",")
          .map((o) => o.trim())
          .forEach((o) => {
            i[o] = t[o];
          })
      : (i[e.item] = t),
    e.index && (i[e.index] = n),
    e.collection && (i[e.collection] = r),
    i
  );
}
function Zi(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Fn() {}
Fn.inline = (e, { expression: t }, { cleanup: n }) => {
  let r = ye(e);
  r._x_refs || (r._x_refs = {}),
    (r._x_refs[t] = e),
    n(() => delete r._x_refs[t]);
};
y("ref", Fn);
y("if", (e, { expression: t }, { effect: n, cleanup: r }) => {
  e.tagName.toLowerCase() !== "template" &&
    k("x-if can only be used on a <template> tag", e);
  let i = b(e, t),
    o = () => {
      if (e._x_currentIfEl) return e._x_currentIfEl;
      let s = e.content.cloneNode(!0).firstElementChild;
      return (
        re(s, {}, e),
        m(() => {
          e.after(s), M(() => E(s))();
        }),
        (e._x_currentIfEl = s),
        (e._x_undoIf = () => {
          m(() => {
            J(s), s.remove();
          }),
            delete e._x_currentIfEl;
        }),
        s
      );
    },
    a = () => {
      e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
    };
  n(() =>
    i((s) => {
      s ? o() : a();
    })
  ),
    r(() => e._x_undoIf && e._x_undoIf());
});
y("id", (e, { expression: t }, { evaluate: n }) => {
  n(t).forEach((r) => Ti(e, r));
});
xe((e, t) => {
  e._x_ids && (t._x_ids = e._x_ids);
});
et(Gt("@", Xt(V("on:"))));
y(
  "on",
  M((e, { value: t, modifiers: n, expression: r }, { cleanup: i }) => {
    let o = r ? b(e, r) : () => {};
    e.tagName.toLowerCase() === "template" &&
      (e._x_forwardEvents || (e._x_forwardEvents = []),
      e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let a = We(e, t, n, (s) => {
      o(() => {}, { scope: { $event: s }, params: [s] });
    });
    i(() => a());
  })
);
Ae("Collapse", "collapse", "collapse");
Ae("Intersect", "intersect", "intersect");
Ae("Focus", "trap", "focus");
Ae("Mask", "mask", "mask");
function Ae(e, t, n) {
  y(t, (r) =>
    k(
      `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
      r
    )
  );
}
oe.setEvaluator(Wt);
oe.setReactivityEngine({ reactive: ft, effect: ci, release: di, raw: h });
var Qi = oe,
  pt = Qi;
const eo = {
  images: [
    {
      id: 2,
      caption:
        "Freshly painted columns, shutters, and lights with a traditional feel",
      alt: "Property view 2",
    },
    {
      id: 3,
      caption: "Situated at the end of a quiet cul-de-sac",
      alt: "Property view 3",
    },
    {
      id: 33,
      caption:
        "Million-dollar views of McKinney from the exquisite formal dining room",
      alt: "Property view 33",
    },
    {
      id: 34,
      caption:
        "Entering the home, you're greeted by a large dining room and staircase with tall entryway ceilings",
      alt: "Property view 34",
    },
    {
      id: 35,
      caption: "Natural light fills the spacious dining room",
      alt: "Property view 35",
    },
    {
      id: 36,
      caption: "A beautiful nook with window for more light in the entryway",
      alt: "Property view 36",
    },
    {
      id: 37,
      caption:
        "An office with french doors, tall ceilings and view of the cul-de-sac and trees",
      alt: "Property view 37",
    },
    {
      id: 14,
      caption:
        "Large living room with large windows to the outdoor living space",
      alt: "Property view 14",
    },
    {
      id: 15,
      caption: "Open-concept floor plan allows for easy entertaining",
      alt: "Property view 15",
    },
    { id: 16, caption: "Floor-to-ceiling fireplace", alt: "Property view 16" },
    {
      id: 17,
      caption:
        "A stunning custom island with granite countertops is the heart of the home",
      alt: "Property view 17",
    },
    {
      id: 18,
      caption: "Hardwood flooring was recently extended into the kitchen",
      alt: "Property view 18",
    },
    {
      id: 19,
      caption:
        "Champagne gold accents and custom cabinet lighting accent this bright, airy kitchen",
      alt: "Property view 19",
    },
    {
      id: 20,
      caption: "Brand new dishwasher and island recently added",
      alt: "Property view 20",
    },
    {
      id: 21,
      caption: "Crisp white cabinets with matching tile backsplash",
      alt: "Property view 21",
    },
    {
      id: 22,
      caption: "Beautiful nature views from the eat-in kitchen",
      alt: "Property view 22",
    },
    {
      id: 6,
      caption: "Primary bedroom with cathedral-style vaulted ceiling",
      alt: "Property view 6",
    },
    {
      id: 7,
      caption:
        "Large windows overlooking the backyard and Ecobee smart thermostat",
      alt: "Property view 7",
    },
    {
      id: 8,
      caption: "Double doors connect the primary suite's bathroom and bedroom",
      alt: "Property view 8",
    },
    {
      id: 9,
      caption:
        "Primary bathroom features quartz countertops, a soaker tub, and tumbled travertine.",
      alt: "Property view 9",
    },
    {
      id: 10,
      caption: "Shower with large glass picture window and door",
      alt: "Property view 10",
    },
    {
      id: 11,
      caption: "His and hers vanities with a large makeup station",
      alt: "Property view 11",
    },
    {
      id: 12,
      caption: "Extra-deep closet connected to the primary bathroom",
      alt: "Property view 12",
    },
    {
      id: 13,
      caption: "Laundry room connects to the primary closet and main hallway",
      alt: "Property view 13",
    },
    {
      id: 4,
      caption:
        "Guest suite or multigenerational living space with ensuite bathroom",
      alt: "Property view 4",
    },
    {
      id: 5,
      caption: "Large ensuite bathroom with tile shower and tub",
      alt: "Property view 5",
    },
    {
      id: 23,
      caption: "Art niches and a large window add to the elegant staircase",
      alt: "Property view 23",
    },
    {
      id: 24,
      caption: "A two-station built-in desk with beautiful shelves",
      alt: "Property view 24",
    },
    {
      id: 25,
      caption: "Upstairs bedroom #1 with cathedral ceiling",
      alt: "Property view 25",
    },
    {
      id: 26,
      caption: "Upstairs bedroom #2 with cathedral ceiling",
      alt: "Property view 26",
    },
    {
      id: 27,
      caption: "Jack-and-jill bathroom with double sinks",
      alt: "Property view 27",
    },
    {
      id: 28,
      caption: "Bonus room with picture window and custom bench",
      alt: "Property view 28",
    },
    {
      id: 29,
      caption:
        "Game room with large windows to the backyard overlooking the greenbelt",
      alt: "Property view 29",
    },
    {
      id: 30,
      caption: "Game room includes a beverage fridge and cabinets",
      alt: "Property view 30",
    },
    {
      id: 31,
      caption: "Media room wired for 7.1 surround sound",
      alt: "Property view 31",
    },
    {
      id: 32,
      caption: "Perfect for date night or gaming with friends",
      alt: "Property view 32",
    },
    {
      id: 43,
      caption: "Brand new flagstone patio for outdoor living",
      alt: "Property view 43",
    },
    {
      id: 44,
      caption: "Stay cool with two built-in ceiling fans",
      alt: "Property view 44",
    },
    { id: 45, caption: "A large, private backyard", alt: "Property view 45" },
    {
      id: 38,
      caption:
        "Situated at one of the highest points in McKinney, the home offers stunning views of the city and surrounding areas",
      alt: "Property view 38",
    },
    {
      id: 39,
      caption: "Full brick side elevation and HOA-maintained fence",
      alt: "Property view 39",
    },
    {
      id: 40,
      caption: "Newer roof installed 5 years ago",
      alt: "Property view 40",
    },
    {
      id: 41,
      caption: "Quiet cul-de-sac, perfect for kids and pets",
      alt: "Property view 41",
    },
    {
      id: 42,
      caption: "Wrapped in the heart of luxury and nature in Stonebridge Ranch",
      alt: "Property view 42",
    },
    {
      id: "beach-club",
      caption: "The Stonebridge Ranch Beach Club",
      alt: "The Stonebridge Ranch Beach Club",
      customUrl: "https://ik.imagekit.io/UltraDAO/6400/24020778-170926.jpg",
    },
    {
      id: "aquatic-center",
      caption: "The Stonebridge Ranch Aquatic Center",
      alt: "The Stonebridge Ranch Aquatic Center",
      customUrl:
        "https://ik.imagekit.io/UltraDAO/6400/sbr_pool-feet_013_1920_1200.webp",
    },
    {
      id: "golf-course",
      caption: "27 holes of championship golf at your fingertips",
      alt: "27 holes of championship golf at your fingertips",
      customUrl:
        "https://ik.imagekit.io/UltraDAO/6400/sbr_golf_golfcourse_21_1920_1200.jpg",
    },
    {
      id: "dye-course-1",
      caption: "Stonebridge Ranch's Famous Dye Course",
      alt: "Stonebridge Ranch's Famous Dye Course",
      customUrl:
        "https://ik.imagekit.io/UltraDAO/6400/stonebridge_golf-dye_drone_003_1920_1200.webp",
    },
    {
      id: "dye-course-2",
      caption: "Stonebridge Ranch's Famous Dye Course",
      alt: "Stonebridge Ranch's Famous Dye Course",
      customUrl:
        "https://ik.imagekit.io/UltraDAO/6400/sbr_golf_homepage_life_at_the_dye_1920_1200.webp",
    },
    {
      id: "adriatica",
      caption: "Adriatica Village is just a five-minute walk away",
      alt: "Adriatica Village is just a five-minute walk away",
      customUrl:
        "https://ik.imagekit.io/UltraDAO/6400/Stonebridge-Ranch-Neighborhood.jpg",
    },
    {
      id: "tennis-courts",
      caption: "HOA-maintained Tennis Courts just around the corner",
      alt: "HOA-maintained Tennis Courts just around the corner",
      customUrl: "https://ik.imagekit.io/UltraDAO/6400/maxresdefault.jpg",
    },
  ],
};
pt.data("imageGallery", () => ({
  currentImage: null,
  showModal: !1,
  images: eo.images,
  init() {
    this.setupKeyboardNavigation();
  },
  setupKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      if (this.showModal)
        switch (e.key) {
          case "Escape":
            e.preventDefault(), this.closeModal();
            break;
          case "ArrowLeft":
          case "ArrowUp":
            e.preventDefault(), this.prevImage();
            break;
          case "ArrowRight":
          case "ArrowDown":
            e.preventDefault(), this.nextImage();
            break;
          case "Home":
            e.preventDefault(), this.goToFirstImage();
            break;
          case "End":
            e.preventDefault(), this.goToLastImage();
            break;
          case " ":
            e.preventDefault(), this.nextImage();
            break;
        }
    });
  },
  openModal(e) {
    (this.currentImage = this.images.find((t) => t.id === e)),
      (this.showModal = !0),
      (document.body.style.overflow = "hidden"),
      this.$nextTick(() => {
        const t = document.querySelector("[data-modal]");
        t && t.focus();
      });
  },
  closeModal() {
    (this.showModal = !1),
      (this.currentImage = null),
      (document.body.style.overflow = "auto"),
      this.$nextTick(() => {
        const e = document.querySelector("#gallery");
        e && e.focus();
      });
  },
  nextImage() {
    const e =
      (this.images.findIndex((t) => t.id === this.currentImage.id) + 1) %
      this.images.length;
    this.currentImage = this.images[e];
  },
  prevImage() {
    const e = this.images.findIndex((n) => n.id === this.currentImage.id),
      t = e === 0 ? this.images.length - 1 : e - 1;
    this.currentImage = this.images[t];
  },
  goToFirstImage() {
    this.currentImage = this.images[0];
  },
  goToLastImage() {
    this.currentImage = this.images[this.images.length - 1];
  },
  getCurrentImageIndex() {
    return this.images.findIndex((e) => e.id === this.currentImage.id);
  },
  getImageUrl(e, t = "") {
    const n = this.images.find((i) => i.id === e);
    if (n && n.customUrl) return t ? `${n.customUrl}?${t}` : n.customUrl;
    const r = `https://ik.imagekit.io/UltraDAO/6400/${e}-6400Orchard_${String(
      e
    ).padStart(3, "0")}.jpg`;
    return t ? `${r}?${t}` : `${r}?updatedAt=1752969198065`;
  },
  getGallerySrcSet(e) {
    const t = this.images.find((r) => r.id === e);
    let n;
    return (
      t && t.customUrl
        ? (n = t.customUrl)
        : (n = `https://ik.imagekit.io/UltraDAO/6400/${e}-6400Orchard_${String(
            e
          ).padStart(3, "0")}.jpg`),
      [
        { w: 400, desc: "400w" },
        { w: 600, desc: "600w" },
        { w: 800, desc: "800w" },
        { w: 1e3, desc: "1000w" },
        { w: 1200, desc: "1200w" },
        { w: 1600, desc: "1600w" },
        { w: 2e3, desc: "2000w" },
      ]
        .map((r) => `${n}?tr=w-${r.w},c-at_max,q-70 ${r.desc}`)
        .join(", ")
    );
  },
  getModalSrcSet(e) {
    const t = this.images.find((r) => r.id === e);
    let n;
    return (
      t && t.customUrl
        ? (n = t.customUrl)
        : (n = `https://ik.imagekit.io/UltraDAO/6400/${e}-6400Orchard_${String(
            e
          ).padStart(3, "0")}.jpg`),
      [
        { w: 800, desc: "800w" },
        { w: 1200, desc: "1200w" },
        { w: 1600, desc: "1600w" },
        { w: 2e3, desc: "2000w" },
        { w: 2400, desc: "2400w" },
      ]
        .map((r) => `${n}?tr=w-${r.w},c-at_max,q-70 ${r.desc}`)
        .join(", ")
    );
  },
}));
pt.data("navigation", () => ({
  scrolled: !1,
  mobileMenuOpen: !1,
  init() {
    window.addEventListener("scroll", () => {
      this.scrolled = window.scrollY > 50;
    });
  },
  toggleMobileMenu() {
    (this.mobileMenuOpen = !this.mobileMenuOpen),
      this.mobileMenuOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
  },
  closeMobileMenu() {
    (this.mobileMenuOpen = !1), (document.body.style.overflow = "auto");
  },
}));
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener("click", function (t) {
      t.preventDefault();
      const n = document.querySelector(this.getAttribute("href"));
      n && n.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
pt.start();
