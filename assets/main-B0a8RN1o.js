(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
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
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = r(i);
    fetch(i.href, o);
  }
})();
var Ie = !1,
  Te = !1,
  R = [],
  ke = -1;
function Hr(e) {
  zr(e);
}
function zr(e) {
  R.includes(e) || R.push(e), Jr();
}
function Wr(e) {
  let t = R.indexOf(e);
  t !== -1 && t > ke && R.splice(t, 1);
}
function Jr() {
  !Te && !Ie && ((Ie = !0), queueMicrotask(Vr));
}
function Vr() {
  (Ie = !1), (Te = !0);
  for (let e = 0; e < R.length; e++) R[e](), (ke = e);
  (R.length = 0), (ke = -1), (Te = !1);
}
var H,
  U,
  z,
  It,
  $e = !0;
function Gr(e) {
  ($e = !1), e(), ($e = !0);
}
function Yr(e) {
  (H = e.reactive),
    (z = e.release),
    (U = (t) =>
      e.effect(t, {
        scheduler: (r) => {
          $e ? Hr(r) : r();
        },
      })),
    (It = e.raw);
}
function gt(e) {
  U = e;
}
function Xr(e) {
  let t = () => {};
  return [
    (n) => {
      let i = U(n);
      return (
        e._x_effects ||
          ((e._x_effects = new Set()),
          (e._x_runEffects = () => {
            e._x_effects.forEach((o) => o());
          })),
        e._x_effects.add(i),
        (t = () => {
          i !== void 0 && (e._x_effects.delete(i), z(i));
        }),
        i
      );
    },
    () => {
      t();
    },
  ];
}
function Tt(e, t) {
  let r = !0,
    n,
    i = U(() => {
      let o = e();
      JSON.stringify(o),
        r
          ? (n = o)
          : queueMicrotask(() => {
              t(o, n), (n = o);
            }),
        (r = !1);
    });
  return () => z(i);
}
var kt = [],
  $t = [],
  jt = [];
function Zr(e) {
  jt.push(e);
}
function Je(e, t) {
  typeof t == "function"
    ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
    : ((t = e), $t.push(t));
}
function Rt(e) {
  kt.push(e);
}
function Lt(e, t, r) {
  e._x_attributeCleanups || (e._x_attributeCleanups = {}),
    e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
    e._x_attributeCleanups[t].push(r);
}
function Dt(e, t) {
  e._x_attributeCleanups &&
    Object.entries(e._x_attributeCleanups).forEach(([r, n]) => {
      (t === void 0 || t.includes(r)) &&
        (n.forEach((i) => i()), delete e._x_attributeCleanups[r]);
    });
}
function Qr(e) {
  var t, r;
  for (
    (t = e._x_effects) == null || t.forEach(Wr);
    (r = e._x_cleanups) != null && r.length;

  )
    e._x_cleanups.pop()();
}
var Ve = new MutationObserver(Ze),
  Ge = !1;
function Ye() {
  Ve.observe(document, {
    subtree: !0,
    childList: !0,
    attributes: !0,
    attributeOldValue: !0,
  }),
    (Ge = !0);
}
function Nt() {
  en(), Ve.disconnect(), (Ge = !1);
}
var Y = [];
function en() {
  let e = Ve.takeRecords();
  Y.push(() => e.length > 0 && Ze(e));
  let t = Y.length;
  queueMicrotask(() => {
    if (Y.length === t) for (; Y.length > 0; ) Y.shift()();
  });
}
function g(e) {
  if (!Ge) return e();
  Nt();
  let t = e();
  return Ye(), t;
}
var Xe = !1,
  he = [];
function tn() {
  Xe = !0;
}
function rn() {
  (Xe = !1), Ze(he), (he = []);
}
function Ze(e) {
  if (Xe) {
    he = he.concat(e);
    return;
  }
  let t = [],
    r = new Set(),
    n = new Map(),
    i = new Map();
  for (let o = 0; o < e.length; o++)
    if (
      !e[o].target._x_ignoreMutationObserver &&
      (e[o].type === "childList" &&
        (e[o].removedNodes.forEach((a) => {
          a.nodeType === 1 && a._x_marker && r.add(a);
        }),
        e[o].addedNodes.forEach((a) => {
          if (a.nodeType === 1) {
            if (r.has(a)) {
              r.delete(a);
              return;
            }
            a._x_marker || t.push(a);
          }
        })),
      e[o].type === "attributes")
    ) {
      let a = e[o].target,
        s = e[o].attributeName,
        c = e[o].oldValue,
        l = () => {
          n.has(a) || n.set(a, []),
            n.get(a).push({ name: s, value: a.getAttribute(s) });
        },
        u = () => {
          i.has(a) || i.set(a, []), i.get(a).push(s);
        };
      a.hasAttribute(s) && c === null
        ? l()
        : a.hasAttribute(s)
        ? (u(), l())
        : u();
    }
  i.forEach((o, a) => {
    Dt(a, o);
  }),
    n.forEach((o, a) => {
      kt.forEach((s) => s(a, o));
    });
  for (let o of r) t.some((a) => a.contains(o)) || $t.forEach((a) => a(o));
  for (let o of t) o.isConnected && jt.forEach((a) => a(o));
  (t = null), (r = null), (n = null), (i = null);
}
function Ft(e) {
  return ie(K(e));
}
function ne(e, t, r) {
  return (
    (e._x_dataStack = [t, ...K(r || e)]),
    () => {
      e._x_dataStack = e._x_dataStack.filter((n) => n !== t);
    }
  );
}
function K(e) {
  return e._x_dataStack
    ? e._x_dataStack
    : typeof ShadowRoot == "function" && e instanceof ShadowRoot
    ? K(e.host)
    : e.parentNode
    ? K(e.parentNode)
    : [];
}
function ie(e) {
  return new Proxy({ objects: e }, nn);
}
var nn = {
  ownKeys({ objects: e }) {
    return Array.from(new Set(e.flatMap((t) => Object.keys(t))));
  },
  has({ objects: e }, t) {
    return t == Symbol.unscopables
      ? !1
      : e.some(
          (r) => Object.prototype.hasOwnProperty.call(r, t) || Reflect.has(r, t)
        );
  },
  get({ objects: e }, t, r) {
    return t == "toJSON"
      ? on
      : Reflect.get(e.find((n) => Reflect.has(n, t)) || {}, t, r);
  },
  set({ objects: e }, t, r, n) {
    const i =
        e.find((a) => Object.prototype.hasOwnProperty.call(a, t)) ||
        e[e.length - 1],
      o = Object.getOwnPropertyDescriptor(i, t);
    return o != null && o.set && o != null && o.get
      ? o.set.call(n, r) || !0
      : Reflect.set(i, t, r);
  },
};
function on() {
  return Reflect.ownKeys(this).reduce(
    (t, r) => ((t[r] = Reflect.get(this, r)), t),
    {}
  );
}
function Ut(e) {
  let t = (n) => typeof n == "object" && !Array.isArray(n) && n !== null,
    r = (n, i = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(
        ([o, { value: a, enumerable: s }]) => {
          if (
            s === !1 ||
            a === void 0 ||
            (typeof a == "object" && a !== null && a.__v_skip)
          )
            return;
          let c = i === "" ? o : `${i}.${o}`;
          typeof a == "object" && a !== null && a._x_interceptor
            ? (n[o] = a.initialize(e, c, o))
            : t(a) && a !== n && !(a instanceof Element) && r(a, c);
        }
      );
    };
  return r(e);
}
function Bt(e, t = () => {}) {
  let r = {
    initialValue: void 0,
    _x_interceptor: !0,
    initialize(n, i, o) {
      return e(
        this.initialValue,
        () => an(n, i),
        (a) => je(n, i, a),
        i,
        o
      );
    },
  };
  return (
    t(r),
    (n) => {
      if (typeof n == "object" && n !== null && n._x_interceptor) {
        let i = r.initialize.bind(r);
        r.initialize = (o, a, s) => {
          let c = n.initialize(o, a, s);
          return (r.initialValue = c), i(o, a, s);
        };
      } else r.initialValue = n;
      return r;
    }
  );
}
function an(e, t) {
  return t.split(".").reduce((r, n) => r[n], e);
}
function je(e, t, r) {
  if ((typeof t == "string" && (t = t.split(".")), t.length === 1)) e[t[0]] = r;
  else {
    if (t.length === 0) throw error;
    return e[t[0]] || (e[t[0]] = {}), je(e[t[0]], t.slice(1), r);
  }
}
var Kt = {};
function E(e, t) {
  Kt[e] = t;
}
function Re(e, t) {
  let r = sn(t);
  return (
    Object.entries(Kt).forEach(([n, i]) => {
      Object.defineProperty(e, `$${n}`, {
        get() {
          return i(t, r);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
function sn(e) {
  let [t, r] = Vt(e),
    n = { interceptor: Bt, ...t };
  return Je(e, r), n;
}
function cn(e, t, r, ...n) {
  try {
    return r(...n);
  } catch (i) {
    re(i, e, t);
  }
}
function re(e, t, r = void 0) {
  (e = Object.assign(e ?? { message: "No error message given." }, {
    el: t,
    expression: r,
  })),
    console.warn(
      `Alpine Expression Error: ${e.message}

${
  r
    ? 'Expression: "' +
      r +
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
var de = !0;
function qt(e) {
  let t = de;
  de = !1;
  let r = e();
  return (de = t), r;
}
function L(e, t, r = {}) {
  let n;
  return b(e, t)((i) => (n = i), r), n;
}
function b(...e) {
  return Ht(...e);
}
var Ht = zt;
function ln(e) {
  Ht = e;
}
function zt(e, t) {
  let r = {};
  Re(r, e);
  let n = [r, ...K(e)],
    i = typeof t == "function" ? un(n, t) : dn(n, t, e);
  return cn.bind(null, e, t, i);
}
function un(e, t) {
  return (r = () => {}, { scope: n = {}, params: i = [] } = {}) => {
    let o = t.apply(ie([n, ...e]), i);
    _e(r, o);
  };
}
var Ee = {};
function fn(e, t) {
  if (Ee[e]) return Ee[e];
  let r = Object.getPrototypeOf(async function () {}).constructor,
    n =
      /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim())
        ? `(async()=>{ ${e} })()`
        : e,
    o = (() => {
      try {
        let a = new r(
          ["__self", "scope"],
          `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`
        );
        return Object.defineProperty(a, "name", { value: `[Alpine] ${e}` }), a;
      } catch (a) {
        return re(a, t, e), Promise.resolve();
      }
    })();
  return (Ee[e] = o), o;
}
function dn(e, t, r) {
  let n = fn(t, r);
  return (i = () => {}, { scope: o = {}, params: a = [] } = {}) => {
    (n.result = void 0), (n.finished = !1);
    let s = ie([o, ...e]);
    if (typeof n == "function") {
      let c = n(n, s).catch((l) => re(l, r, t));
      n.finished
        ? (_e(i, n.result, s, a, r), (n.result = void 0))
        : c
            .then((l) => {
              _e(i, l, s, a, r);
            })
            .catch((l) => re(l, r, t))
            .finally(() => (n.result = void 0));
    }
  };
}
function _e(e, t, r, n, i) {
  if (de && typeof t == "function") {
    let o = t.apply(r, n);
    o instanceof Promise
      ? o.then((a) => _e(e, a, r, n)).catch((a) => re(a, i, t))
      : e(o);
  } else
    typeof t == "object" && t instanceof Promise ? t.then((o) => e(o)) : e(t);
}
var Qe = "x-";
function W(e = "") {
  return Qe + e;
}
function pn(e) {
  Qe = e;
}
var ge = {};
function y(e, t) {
  return (
    (ge[e] = t),
    {
      before(r) {
        if (!ge[r]) {
          console.warn(
            String.raw`Cannot find directive \`${r}\`. \`${e}\` will use the default order of execution`
          );
          return;
        }
        const n = j.indexOf(r);
        j.splice(n >= 0 ? n : j.indexOf("DEFAULT"), 0, e);
      },
    }
  );
}
function hn(e) {
  return Object.keys(ge).includes(e);
}
function et(e, t, r) {
  if (((t = Array.from(t)), e._x_virtualDirectives)) {
    let o = Object.entries(e._x_virtualDirectives).map(([s, c]) => ({
        name: s,
        value: c,
      })),
      a = Wt(o);
    (o = o.map((s) =>
      a.find((c) => c.name === s.name)
        ? { name: `x-bind:${s.name}`, value: `"${s.value}"` }
        : s
    )),
      (t = t.concat(o));
  }
  let n = {};
  return t
    .map(Xt((o, a) => (n[o] = a)))
    .filter(Qt)
    .map(mn(n, r))
    .sort(yn)
    .map((o) => gn(e, o));
}
function Wt(e) {
  return Array.from(e)
    .map(Xt())
    .filter((t) => !Qt(t));
}
var Le = !1,
  Q = new Map(),
  Jt = Symbol();
function _n(e) {
  Le = !0;
  let t = Symbol();
  (Jt = t), Q.set(t, []);
  let r = () => {
      for (; Q.get(t).length; ) Q.get(t).shift()();
      Q.delete(t);
    },
    n = () => {
      (Le = !1), r();
    };
  e(r), n();
}
function Vt(e) {
  let t = [],
    r = (s) => t.push(s),
    [n, i] = Xr(e);
  return (
    t.push(i),
    [
      {
        Alpine: oe,
        effect: n,
        cleanup: r,
        evaluateLater: b.bind(b, e),
        evaluate: L.bind(L, e),
      },
      () => t.forEach((s) => s()),
    ]
  );
}
function gn(e, t) {
  let r = () => {},
    n = ge[t.type] || r,
    [i, o] = Vt(e);
  Lt(e, t.original, o);
  let a = () => {
    e._x_ignore ||
      e._x_ignoreSelf ||
      (n.inline && n.inline(e, t, i),
      (n = n.bind(n, e, t, i)),
      Le ? Q.get(Jt).push(n) : n());
  };
  return (a.runCleanups = o), a;
}
var Gt =
    (e, t) =>
    ({ name: r, value: n }) => (
      r.startsWith(e) && (r = r.replace(e, t)), { name: r, value: n }
    ),
  Yt = (e) => e;
function Xt(e = () => {}) {
  return ({ name: t, value: r }) => {
    let { name: n, value: i } = Zt.reduce((o, a) => a(o), {
      name: t,
      value: r,
    });
    return n !== t && e(n, t), { name: n, value: i };
  };
}
var Zt = [];
function tt(e) {
  Zt.push(e);
}
function Qt({ name: e }) {
  return er().test(e);
}
var er = () => new RegExp(`^${Qe}([^:^.]+)\\b`);
function mn(e, t) {
  return ({ name: r, value: n }) => {
    let i = r.match(er()),
      o = r.match(/:([a-zA-Z0-9\-_:]+)/),
      a = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
      s = t || e[r] || r;
    return {
      type: i ? i[1] : null,
      value: o ? o[1] : null,
      modifiers: a.map((c) => c.replace(".", "")),
      expression: n,
      original: s,
    };
  };
}
var De = "DEFAULT",
  j = [
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
    De,
    "teleport",
  ];
function yn(e, t) {
  let r = j.indexOf(e.type) === -1 ? De : e.type,
    n = j.indexOf(t.type) === -1 ? De : t.type;
  return j.indexOf(r) - j.indexOf(n);
}
function ee(e, t, r = {}) {
  e.dispatchEvent(
    new CustomEvent(t, { detail: r, bubbles: !0, composed: !0, cancelable: !0 })
  );
}
function F(e, t) {
  if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
    Array.from(e.children).forEach((i) => F(i, t));
    return;
  }
  let r = !1;
  if ((t(e, () => (r = !0)), r)) return;
  let n = e.firstElementChild;
  for (; n; ) F(n, t), (n = n.nextElementSibling);
}
function A(e, ...t) {
  console.warn(`Alpine Warning: ${e}`, ...t);
}
var mt = !1;
function wn() {
  mt &&
    A(
      "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."
    ),
    (mt = !0),
    document.body ||
      A(
        "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
      ),
    ee(document, "alpine:init"),
    ee(document, "alpine:initializing"),
    Ye(),
    Zr((t) => C(t, F)),
    Je((t) => V(t)),
    Rt((t, r) => {
      et(t, r).forEach((n) => n());
    });
  let e = (t) => !ye(t.parentElement, !0);
  Array.from(document.querySelectorAll(nr().join(",")))
    .filter(e)
    .forEach((t) => {
      C(t);
    }),
    ee(document, "alpine:initialized"),
    setTimeout(() => {
      An();
    });
}
var rt = [],
  tr = [];
function rr() {
  return rt.map((e) => e());
}
function nr() {
  return rt.concat(tr).map((e) => e());
}
function ir(e) {
  rt.push(e);
}
function or(e) {
  tr.push(e);
}
function ye(e, t = !1) {
  return J(e, (r) => {
    if ((t ? nr() : rr()).some((i) => r.matches(i))) return !0;
  });
}
function J(e, t) {
  if (e) {
    if (t(e)) return e;
    if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
      return J(e.parentElement, t);
  }
}
function vn(e) {
  return rr().some((t) => e.matches(t));
}
var ar = [];
function bn(e) {
  ar.push(e);
}
var xn = 1;
function C(e, t = F, r = () => {}) {
  J(e, (n) => n._x_ignore) ||
    _n(() => {
      t(e, (n, i) => {
        n._x_marker ||
          (r(n, i),
          ar.forEach((o) => o(n, i)),
          et(n, n.attributes).forEach((o) => o()),
          n._x_ignore || (n._x_marker = xn++),
          n._x_ignore && i());
      });
    });
}
function V(e, t = F) {
  t(e, (r) => {
    Qr(r), Dt(r), delete r._x_marker;
  });
}
function An() {
  [
    ["ui", "dialog", ["[x-dialog], [x-popover]"]],
    ["anchor", "anchor", ["[x-anchor]"]],
    ["sort", "sort", ["[x-sort]"]],
  ].forEach(([t, r, n]) => {
    hn(r) ||
      n.some((i) => {
        if (document.querySelector(i))
          return A(`found "${i}", but missing ${t} plugin`), !0;
      });
  });
}
var Ne = [],
  nt = !1;
function it(e = () => {}) {
  return (
    queueMicrotask(() => {
      nt ||
        setTimeout(() => {
          Fe();
        });
    }),
    new Promise((t) => {
      Ne.push(() => {
        e(), t();
      });
    })
  );
}
function Fe() {
  for (nt = !1; Ne.length; ) Ne.shift()();
}
function Sn() {
  nt = !0;
}
function ot(e, t) {
  return Array.isArray(t)
    ? yt(e, t.join(" "))
    : typeof t == "object" && t !== null
    ? En(e, t)
    : typeof t == "function"
    ? ot(e, t())
    : yt(e, t);
}
function yt(e, t) {
  let r = (i) =>
      i
        .split(" ")
        .filter((o) => !e.classList.contains(o))
        .filter(Boolean),
    n = (i) => (
      e.classList.add(...i),
      () => {
        e.classList.remove(...i);
      }
    );
  return (t = t === !0 ? (t = "") : t || ""), n(r(t));
}
function En(e, t) {
  let r = (s) => s.split(" ").filter(Boolean),
    n = Object.entries(t)
      .flatMap(([s, c]) => (c ? r(s) : !1))
      .filter(Boolean),
    i = Object.entries(t)
      .flatMap(([s, c]) => (c ? !1 : r(s)))
      .filter(Boolean),
    o = [],
    a = [];
  return (
    i.forEach((s) => {
      e.classList.contains(s) && (e.classList.remove(s), a.push(s));
    }),
    n.forEach((s) => {
      e.classList.contains(s) || (e.classList.add(s), o.push(s));
    }),
    () => {
      a.forEach((s) => e.classList.add(s)),
        o.forEach((s) => e.classList.remove(s));
    }
  );
}
function we(e, t) {
  return typeof t == "object" && t !== null ? On(e, t) : Cn(e, t);
}
function On(e, t) {
  let r = {};
  return (
    Object.entries(t).forEach(([n, i]) => {
      (r[n] = e.style[n]),
        n.startsWith("--") || (n = Pn(n)),
        e.style.setProperty(n, i);
    }),
    setTimeout(() => {
      e.style.length === 0 && e.removeAttribute("style");
    }),
    () => {
      we(e, r);
    }
  );
}
function Cn(e, t) {
  let r = e.getAttribute("style", t);
  return (
    e.setAttribute("style", t),
    () => {
      e.setAttribute("style", r || "");
    }
  );
}
function Pn(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Ue(e, t = () => {}) {
  let r = !1;
  return function () {
    r ? t.apply(this, arguments) : ((r = !0), e.apply(this, arguments));
  };
}
y(
  "transition",
  (e, { value: t, modifiers: r, expression: n }, { evaluate: i }) => {
    typeof n == "function" && (n = i(n)),
      n !== !1 && (!n || typeof n == "boolean" ? In(e, r, t) : Mn(e, n, t));
  }
);
function Mn(e, t, r) {
  sr(e, ot, ""),
    {
      enter: (i) => {
        e._x_transition.enter.during = i;
      },
      "enter-start": (i) => {
        e._x_transition.enter.start = i;
      },
      "enter-end": (i) => {
        e._x_transition.enter.end = i;
      },
      leave: (i) => {
        e._x_transition.leave.during = i;
      },
      "leave-start": (i) => {
        e._x_transition.leave.start = i;
      },
      "leave-end": (i) => {
        e._x_transition.leave.end = i;
      },
    }[r](t);
}
function In(e, t, r) {
  sr(e, we);
  let n = !t.includes("in") && !t.includes("out") && !r,
    i = n || t.includes("in") || ["enter"].includes(r),
    o = n || t.includes("out") || ["leave"].includes(r);
  t.includes("in") && !n && (t = t.filter((_, m) => m < t.indexOf("out"))),
    t.includes("out") && !n && (t = t.filter((_, m) => m > t.indexOf("out")));
  let a = !t.includes("opacity") && !t.includes("scale"),
    s = a || t.includes("opacity"),
    c = a || t.includes("scale"),
    l = s ? 0 : 1,
    u = c ? X(t, "scale", 95) / 100 : 1,
    d = X(t, "delay", 0) / 1e3,
    p = X(t, "origin", "center"),
    w = "opacity, transform",
    P = X(t, "duration", 150) / 1e3,
    ae = X(t, "duration", 75) / 1e3,
    f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  i &&
    ((e._x_transition.enter.during = {
      transformOrigin: p,
      transitionDelay: `${d}s`,
      transitionProperty: w,
      transitionDuration: `${P}s`,
      transitionTimingFunction: f,
    }),
    (e._x_transition.enter.start = { opacity: l, transform: `scale(${u})` }),
    (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
    o &&
      ((e._x_transition.leave.during = {
        transformOrigin: p,
        transitionDelay: `${d}s`,
        transitionProperty: w,
        transitionDuration: `${ae}s`,
        transitionTimingFunction: f,
      }),
      (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
      (e._x_transition.leave.end = { opacity: l, transform: `scale(${u})` }));
}
function sr(e, t, r = {}) {
  e._x_transition ||
    (e._x_transition = {
      enter: { during: r, start: r, end: r },
      leave: { during: r, start: r, end: r },
      in(n = () => {}, i = () => {}) {
        Be(
          e,
          t,
          {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end,
          },
          n,
          i
        );
      },
      out(n = () => {}, i = () => {}) {
        Be(
          e,
          t,
          {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end,
          },
          n,
          i
        );
      },
    });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
  e,
  t,
  r,
  n
) {
  const i =
    document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let o = () => i(r);
  if (t) {
    e._x_transition && (e._x_transition.enter || e._x_transition.leave)
      ? e._x_transition.enter &&
        (Object.entries(e._x_transition.enter.during).length ||
          Object.entries(e._x_transition.enter.start).length ||
          Object.entries(e._x_transition.enter.end).length)
        ? e._x_transition.in(r)
        : o()
      : e._x_transition
      ? e._x_transition.in(r)
      : o();
    return;
  }
  (e._x_hidePromise = e._x_transition
    ? new Promise((a, s) => {
        e._x_transition.out(
          () => {},
          () => a(n)
        ),
          e._x_transitioning &&
            e._x_transitioning.beforeCancel(() =>
              s({ isFromCancelledTransition: !0 })
            );
      })
    : Promise.resolve(n)),
    queueMicrotask(() => {
      let a = cr(e);
      a
        ? (a._x_hideChildren || (a._x_hideChildren = []),
          a._x_hideChildren.push(e))
        : i(() => {
            let s = (c) => {
              let l = Promise.all([
                c._x_hidePromise,
                ...(c._x_hideChildren || []).map(s),
              ]).then(([u]) => (u == null ? void 0 : u()));
              return delete c._x_hidePromise, delete c._x_hideChildren, l;
            };
            s(e).catch((c) => {
              if (!c.isFromCancelledTransition) throw c;
            });
          });
    });
};
function cr(e) {
  let t = e.parentNode;
  if (t) return t._x_hidePromise ? t : cr(t);
}
function Be(
  e,
  t,
  { during: r, start: n, end: i } = {},
  o = () => {},
  a = () => {}
) {
  if (
    (e._x_transitioning && e._x_transitioning.cancel(),
    Object.keys(r).length === 0 &&
      Object.keys(n).length === 0 &&
      Object.keys(i).length === 0)
  ) {
    o(), a();
    return;
  }
  let s, c, l;
  Tn(e, {
    start() {
      s = t(e, n);
    },
    during() {
      c = t(e, r);
    },
    before: o,
    end() {
      s(), (l = t(e, i));
    },
    after: a,
    cleanup() {
      c(), l();
    },
  });
}
function Tn(e, t) {
  let r,
    n,
    i,
    o = Ue(() => {
      g(() => {
        (r = !0),
          n || t.before(),
          i || (t.end(), Fe()),
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
    g(() => {
      t.start(), t.during();
    }),
    Sn(),
    requestAnimationFrame(() => {
      if (r) return;
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
        g(() => {
          t.before();
        }),
        (n = !0),
        requestAnimationFrame(() => {
          r ||
            (g(() => {
              t.end();
            }),
            Fe(),
            setTimeout(e._x_transitioning.finish, a + s),
            (i = !0));
        });
    });
}
function X(e, t, r) {
  if (e.indexOf(t) === -1) return r;
  const n = e[e.indexOf(t) + 1];
  if (!n || (t === "scale" && isNaN(n))) return r;
  if (t === "duration" || t === "delay") {
    let i = n.match(/([0-9]+)ms/);
    if (i) return i[1];
  }
  return t === "origin" &&
    ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
    ? [n, e[e.indexOf(t) + 2]].join(" ")
    : n;
}
var I = !1;
function k(e, t = () => {}) {
  return (...r) => (I ? t(...r) : e(...r));
}
function kn(e) {
  return (...t) => I && e(...t);
}
var lr = [];
function ve(e) {
  lr.push(e);
}
function $n(e, t) {
  lr.forEach((r) => r(e, t)),
    (I = !0),
    ur(() => {
      C(t, (r, n) => {
        n(r, () => {});
      });
    }),
    (I = !1);
}
var Ke = !1;
function jn(e, t) {
  t._x_dataStack || (t._x_dataStack = e._x_dataStack),
    (I = !0),
    (Ke = !0),
    ur(() => {
      Rn(t);
    }),
    (I = !1),
    (Ke = !1);
}
function Rn(e) {
  let t = !1;
  C(e, (n, i) => {
    F(n, (o, a) => {
      if (t && vn(o)) return a();
      (t = !0), i(o, a);
    });
  });
}
function ur(e) {
  let t = U;
  gt((r, n) => {
    let i = t(r);
    return z(i), () => {};
  }),
    e(),
    gt(t);
}
function fr(e, t, r, n = []) {
  switch (
    (e._x_bindings || (e._x_bindings = H({})),
    (e._x_bindings[t] = r),
    (t = n.includes("camel") ? qn(t) : t),
    t)
  ) {
    case "value":
      Ln(e, r);
      break;
    case "style":
      Nn(e, r);
      break;
    case "class":
      Dn(e, r);
      break;
    case "selected":
    case "checked":
      Fn(e, t, r);
      break;
    default:
      dr(e, t, r);
      break;
  }
}
function Ln(e, t) {
  if (_r(e))
    e.attributes.value === void 0 && (e.value = t),
      window.fromModel &&
        (typeof t == "boolean"
          ? (e.checked = pe(e.value) === t)
          : (e.checked = wt(e.value, t)));
  else if (at(e))
    Number.isInteger(t)
      ? (e.value = t)
      : !Array.isArray(t) &&
        typeof t != "boolean" &&
        ![null, void 0].includes(t)
      ? (e.value = String(t))
      : Array.isArray(t)
      ? (e.checked = t.some((r) => wt(r, e.value)))
      : (e.checked = !!t);
  else if (e.tagName === "SELECT") Kn(e, t);
  else {
    if (e.value === t) return;
    e.value = t === void 0 ? "" : t;
  }
}
function Dn(e, t) {
  e._x_undoAddedClasses && e._x_undoAddedClasses(),
    (e._x_undoAddedClasses = ot(e, t));
}
function Nn(e, t) {
  e._x_undoAddedStyles && e._x_undoAddedStyles(),
    (e._x_undoAddedStyles = we(e, t));
}
function Fn(e, t, r) {
  dr(e, t, r), Bn(e, t, r);
}
function dr(e, t, r) {
  [null, void 0, !1].includes(r) && zn(t)
    ? e.removeAttribute(t)
    : (pr(t) && (r = t), Un(e, t, r));
}
function Un(e, t, r) {
  e.getAttribute(t) != r && e.setAttribute(t, r);
}
function Bn(e, t, r) {
  e[t] !== r && (e[t] = r);
}
function Kn(e, t) {
  const r = [].concat(t).map((n) => n + "");
  Array.from(e.options).forEach((n) => {
    n.selected = r.includes(n.value);
  });
}
function qn(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
}
function wt(e, t) {
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
var Hn = new Set([
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
function pr(e) {
  return Hn.has(e);
}
function zn(e) {
  return ![
    "aria-pressed",
    "aria-checked",
    "aria-expanded",
    "aria-selected",
  ].includes(e);
}
function Wn(e, t, r) {
  return e._x_bindings && e._x_bindings[t] !== void 0
    ? e._x_bindings[t]
    : hr(e, t, r);
}
function Jn(e, t, r, n = !0) {
  if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
  if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
    let i = e._x_inlineBindings[t];
    return (i.extract = n), qt(() => L(e, i.expression));
  }
  return hr(e, t, r);
}
function hr(e, t, r) {
  let n = e.getAttribute(t);
  return n === null
    ? typeof r == "function"
      ? r()
      : r
    : n === ""
    ? !0
    : pr(t)
    ? !![t, "true"].includes(n)
    : n;
}
function at(e) {
  return (
    e.type === "checkbox" ||
    e.localName === "ui-checkbox" ||
    e.localName === "ui-switch"
  );
}
function _r(e) {
  return e.type === "radio" || e.localName === "ui-radio";
}
function gr(e, t) {
  var r;
  return function () {
    var n = this,
      i = arguments,
      o = function () {
        (r = null), e.apply(n, i);
      };
    clearTimeout(r), (r = setTimeout(o, t));
  };
}
function mr(e, t) {
  let r;
  return function () {
    let n = this,
      i = arguments;
    r || (e.apply(n, i), (r = !0), setTimeout(() => (r = !1), t));
  };
}
function yr({ get: e, set: t }, { get: r, set: n }) {
  let i = !0,
    o,
    a = U(() => {
      let s = e(),
        c = r();
      if (i) n(Oe(s)), (i = !1);
      else {
        let l = JSON.stringify(s),
          u = JSON.stringify(c);
        l !== o ? n(Oe(s)) : l !== u && t(Oe(c));
      }
      (o = JSON.stringify(e())), JSON.stringify(r());
    });
  return () => {
    z(a);
  };
}
function Oe(e) {
  return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e;
}
function Vn(e) {
  (Array.isArray(e) ? e : [e]).forEach((r) => r(oe));
}
var $ = {},
  vt = !1;
function Gn(e, t) {
  if ((vt || (($ = H($)), (vt = !0)), t === void 0)) return $[e];
  ($[e] = t),
    Ut($[e]),
    typeof t == "object" &&
      t !== null &&
      t.hasOwnProperty("init") &&
      typeof t.init == "function" &&
      $[e].init();
}
function Yn() {
  return $;
}
var wr = {};
function Xn(e, t) {
  let r = typeof t != "function" ? () => t : t;
  return e instanceof Element ? vr(e, r()) : ((wr[e] = r), () => {});
}
function Zn(e) {
  return (
    Object.entries(wr).forEach(([t, r]) => {
      Object.defineProperty(e, t, {
        get() {
          return (...n) => r(...n);
        },
      });
    }),
    e
  );
}
function vr(e, t, r) {
  let n = [];
  for (; n.length; ) n.pop()();
  let i = Object.entries(t).map(([a, s]) => ({ name: a, value: s })),
    o = Wt(i);
  return (
    (i = i.map((a) =>
      o.find((s) => s.name === a.name)
        ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
        : a
    )),
    et(e, i, r).map((a) => {
      n.push(a.runCleanups), a();
    }),
    () => {
      for (; n.length; ) n.pop()();
    }
  );
}
var br = {};
function Qn(e, t) {
  br[e] = t;
}
function ei(e, t) {
  return (
    Object.entries(br).forEach(([r, n]) => {
      Object.defineProperty(e, r, {
        get() {
          return (...i) => n.bind(t)(...i);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
var ti = {
    get reactive() {
      return H;
    },
    get release() {
      return z;
    },
    get effect() {
      return U;
    },
    get raw() {
      return It;
    },
    version: "3.14.9",
    flushAndStopDeferringMutations: rn,
    dontAutoEvaluateFunctions: qt,
    disableEffectScheduling: Gr,
    startObservingMutations: Ye,
    stopObservingMutations: Nt,
    setReactivityEngine: Yr,
    onAttributeRemoved: Lt,
    onAttributesAdded: Rt,
    closestDataStack: K,
    skipDuringClone: k,
    onlyDuringClone: kn,
    addRootSelector: ir,
    addInitSelector: or,
    interceptClone: ve,
    addScopeToNode: ne,
    deferMutations: tn,
    mapAttributes: tt,
    evaluateLater: b,
    interceptInit: bn,
    setEvaluator: ln,
    mergeProxies: ie,
    extractProp: Jn,
    findClosest: J,
    onElRemoved: Je,
    closestRoot: ye,
    destroyTree: V,
    interceptor: Bt,
    transition: Be,
    setStyles: we,
    mutateDom: g,
    directive: y,
    entangle: yr,
    throttle: mr,
    debounce: gr,
    evaluate: L,
    initTree: C,
    nextTick: it,
    prefixed: W,
    prefix: pn,
    plugin: Vn,
    magic: E,
    store: Gn,
    start: wn,
    clone: jn,
    cloneNode: $n,
    bound: Wn,
    $data: Ft,
    watch: Tt,
    walk: F,
    data: Qn,
    bind: Xn,
  },
  oe = ti;
function ri(e, t) {
  const r = Object.create(null),
    n = e.split(",");
  for (let i = 0; i < n.length; i++) r[n[i]] = !0;
  return (i) => !!r[i];
}
var ni = Object.freeze({}),
  ii = Object.prototype.hasOwnProperty,
  be = (e, t) => ii.call(e, t),
  D = Array.isArray,
  te = (e) => xr(e) === "[object Map]",
  oi = (e) => typeof e == "string",
  st = (e) => typeof e == "symbol",
  xe = (e) => e !== null && typeof e == "object",
  ai = Object.prototype.toString,
  xr = (e) => ai.call(e),
  Ar = (e) => xr(e).slice(8, -1),
  ct = (e) =>
    oi(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  si = (e) => {
    const t = Object.create(null);
    return (r) => t[r] || (t[r] = e(r));
  },
  ci = si((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Sr = (e, t) => e !== t && (e === e || t === t),
  qe = new WeakMap(),
  Z = [],
  O,
  N = Symbol("iterate"),
  He = Symbol("Map key iterate");
function li(e) {
  return e && e._isEffect === !0;
}
function ui(e, t = ni) {
  li(e) && (e = e.raw);
  const r = pi(e, t);
  return t.lazy || r(), r;
}
function fi(e) {
  e.active && (Er(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
var di = 0;
function pi(e, t) {
  const r = function () {
    if (!r.active) return e();
    if (!Z.includes(r)) {
      Er(r);
      try {
        return _i(), Z.push(r), (O = r), e();
      } finally {
        Z.pop(), Or(), (O = Z[Z.length - 1]);
      }
    }
  };
  return (
    (r.id = di++),
    (r.allowRecurse = !!t.allowRecurse),
    (r._isEffect = !0),
    (r.active = !0),
    (r.raw = e),
    (r.deps = []),
    (r.options = t),
    r
  );
}
function Er(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let r = 0; r < t.length; r++) t[r].delete(e);
    t.length = 0;
  }
}
var q = !0,
  lt = [];
function hi() {
  lt.push(q), (q = !1);
}
function _i() {
  lt.push(q), (q = !0);
}
function Or() {
  const e = lt.pop();
  q = e === void 0 ? !0 : e;
}
function S(e, t, r) {
  if (!q || O === void 0) return;
  let n = qe.get(e);
  n || qe.set(e, (n = new Map()));
  let i = n.get(r);
  i || n.set(r, (i = new Set())),
    i.has(O) ||
      (i.add(O),
      O.deps.push(i),
      O.options.onTrack &&
        O.options.onTrack({ effect: O, target: e, type: t, key: r }));
}
function T(e, t, r, n, i, o) {
  const a = qe.get(e);
  if (!a) return;
  const s = new Set(),
    c = (u) => {
      u &&
        u.forEach((d) => {
          (d !== O || d.allowRecurse) && s.add(d);
        });
    };
  if (t === "clear") a.forEach(c);
  else if (r === "length" && D(e))
    a.forEach((u, d) => {
      (d === "length" || d >= n) && c(u);
    });
  else
    switch ((r !== void 0 && c(a.get(r)), t)) {
      case "add":
        D(e)
          ? ct(r) && c(a.get("length"))
          : (c(a.get(N)), te(e) && c(a.get(He)));
        break;
      case "delete":
        D(e) || (c(a.get(N)), te(e) && c(a.get(He)));
        break;
      case "set":
        te(e) && c(a.get(N));
        break;
    }
  const l = (u) => {
    u.options.onTrigger &&
      u.options.onTrigger({
        effect: u,
        target: e,
        key: r,
        type: t,
        newValue: n,
        oldValue: i,
        oldTarget: o,
      }),
      u.options.scheduler ? u.options.scheduler(u) : u();
  };
  s.forEach(l);
}
var gi = ri("__proto__,__v_isRef,__isVue"),
  Cr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(st)
  ),
  mi = Pr(),
  yi = Pr(!0),
  bt = wi();
function wi() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...r) {
        const n = h(this);
        for (let o = 0, a = this.length; o < a; o++) S(n, "get", o + "");
        const i = n[t](...r);
        return i === -1 || i === !1 ? n[t](...r.map(h)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...r) {
        hi();
        const n = h(this)[t].apply(this, r);
        return Or(), n;
      };
    }),
    e
  );
}
function Pr(e = !1, t = !1) {
  return function (n, i, o) {
    if (i === "__v_isReactive") return !e;
    if (i === "__v_isReadonly") return e;
    if (i === "__v_raw" && o === (e ? (t ? $i : kr) : t ? ki : Tr).get(n))
      return n;
    const a = D(n);
    if (!e && a && be(bt, i)) return Reflect.get(bt, i, o);
    const s = Reflect.get(n, i, o);
    return (st(i) ? Cr.has(i) : gi(i)) || (e || S(n, "get", i), t)
      ? s
      : ze(s)
      ? !a || !ct(i)
        ? s.value
        : s
      : xe(s)
      ? e
        ? $r(s)
        : pt(s)
      : s;
  };
}
var vi = bi();
function bi(e = !1) {
  return function (r, n, i, o) {
    let a = r[n];
    if (!e && ((i = h(i)), (a = h(a)), !D(r) && ze(a) && !ze(i)))
      return (a.value = i), !0;
    const s = D(r) && ct(n) ? Number(n) < r.length : be(r, n),
      c = Reflect.set(r, n, i, o);
    return (
      r === h(o) && (s ? Sr(i, a) && T(r, "set", n, i, a) : T(r, "add", n, i)),
      c
    );
  };
}
function xi(e, t) {
  const r = be(e, t),
    n = e[t],
    i = Reflect.deleteProperty(e, t);
  return i && r && T(e, "delete", t, void 0, n), i;
}
function Ai(e, t) {
  const r = Reflect.has(e, t);
  return (!st(t) || !Cr.has(t)) && S(e, "has", t), r;
}
function Si(e) {
  return S(e, "iterate", D(e) ? "length" : N), Reflect.ownKeys(e);
}
var Ei = { get: mi, set: vi, deleteProperty: xi, has: Ai, ownKeys: Si },
  Oi = {
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
  ut = (e) => (xe(e) ? pt(e) : e),
  ft = (e) => (xe(e) ? $r(e) : e),
  dt = (e) => e,
  Ae = (e) => Reflect.getPrototypeOf(e);
function se(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const i = h(e),
    o = h(t);
  t !== o && !r && S(i, "get", t), !r && S(i, "get", o);
  const { has: a } = Ae(i),
    s = n ? dt : r ? ft : ut;
  if (a.call(i, t)) return s(e.get(t));
  if (a.call(i, o)) return s(e.get(o));
  e !== i && e.get(t);
}
function ce(e, t = !1) {
  const r = this.__v_raw,
    n = h(r),
    i = h(e);
  return (
    e !== i && !t && S(n, "has", e),
    !t && S(n, "has", i),
    e === i ? r.has(e) : r.has(e) || r.has(i)
  );
}
function le(e, t = !1) {
  return (
    (e = e.__v_raw), !t && S(h(e), "iterate", N), Reflect.get(e, "size", e)
  );
}
function xt(e) {
  e = h(e);
  const t = h(this);
  return Ae(t).has.call(t, e) || (t.add(e), T(t, "add", e, e)), this;
}
function At(e, t) {
  t = h(t);
  const r = h(this),
    { has: n, get: i } = Ae(r);
  let o = n.call(r, e);
  o ? Ir(r, n, e) : ((e = h(e)), (o = n.call(r, e)));
  const a = i.call(r, e);
  return (
    r.set(e, t), o ? Sr(t, a) && T(r, "set", e, t, a) : T(r, "add", e, t), this
  );
}
function St(e) {
  const t = h(this),
    { has: r, get: n } = Ae(t);
  let i = r.call(t, e);
  i ? Ir(t, r, e) : ((e = h(e)), (i = r.call(t, e)));
  const o = n ? n.call(t, e) : void 0,
    a = t.delete(e);
  return i && T(t, "delete", e, void 0, o), a;
}
function Et() {
  const e = h(this),
    t = e.size !== 0,
    r = te(e) ? new Map(e) : new Set(e),
    n = e.clear();
  return t && T(e, "clear", void 0, void 0, r), n;
}
function ue(e, t) {
  return function (n, i) {
    const o = this,
      a = o.__v_raw,
      s = h(a),
      c = t ? dt : e ? ft : ut;
    return (
      !e && S(s, "iterate", N), a.forEach((l, u) => n.call(i, c(l), c(u), o))
    );
  };
}
function fe(e, t, r) {
  return function (...n) {
    const i = this.__v_raw,
      o = h(i),
      a = te(o),
      s = e === "entries" || (e === Symbol.iterator && a),
      c = e === "keys" && a,
      l = i[e](...n),
      u = r ? dt : t ? ft : ut;
    return (
      !t && S(o, "iterate", c ? He : N),
      {
        next() {
          const { value: d, done: p } = l.next();
          return p
            ? { value: d, done: p }
            : { value: s ? [u(d[0]), u(d[1])] : u(d), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function M(e) {
  return function (...t) {
    {
      const r = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${ci(e)} operation ${r}failed: target is readonly.`,
        h(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function Ci() {
  const e = {
      get(o) {
        return se(this, o);
      },
      get size() {
        return le(this);
      },
      has: ce,
      add: xt,
      set: At,
      delete: St,
      clear: Et,
      forEach: ue(!1, !1),
    },
    t = {
      get(o) {
        return se(this, o, !1, !0);
      },
      get size() {
        return le(this);
      },
      has: ce,
      add: xt,
      set: At,
      delete: St,
      clear: Et,
      forEach: ue(!1, !0),
    },
    r = {
      get(o) {
        return se(this, o, !0);
      },
      get size() {
        return le(this, !0);
      },
      has(o) {
        return ce.call(this, o, !0);
      },
      add: M("add"),
      set: M("set"),
      delete: M("delete"),
      clear: M("clear"),
      forEach: ue(!0, !1),
    },
    n = {
      get(o) {
        return se(this, o, !0, !0);
      },
      get size() {
        return le(this, !0);
      },
      has(o) {
        return ce.call(this, o, !0);
      },
      add: M("add"),
      set: M("set"),
      delete: M("delete"),
      clear: M("clear"),
      forEach: ue(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = fe(o, !1, !1)),
        (r[o] = fe(o, !0, !1)),
        (t[o] = fe(o, !1, !0)),
        (n[o] = fe(o, !0, !0));
    }),
    [e, r, t, n]
  );
}
var [Pi, Mi, to, ro] = Ci();
function Mr(e, t) {
  const r = e ? Mi : Pi;
  return (n, i, o) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? n
      : Reflect.get(be(r, i) && i in n ? r : n, i, o);
}
var Ii = { get: Mr(!1) },
  Ti = { get: Mr(!0) };
function Ir(e, t, r) {
  const n = h(r);
  if (n !== r && t.call(e, n)) {
    const i = Ar(e);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${
        i === "Map" ? " as keys" : ""
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
var Tr = new WeakMap(),
  ki = new WeakMap(),
  kr = new WeakMap(),
  $i = new WeakMap();
function ji(e) {
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
function Ri(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ji(Ar(e));
}
function pt(e) {
  return e && e.__v_isReadonly ? e : jr(e, !1, Ei, Ii, Tr);
}
function $r(e) {
  return jr(e, !0, Oi, Ti, kr);
}
function jr(e, t, r, n, i) {
  if (!xe(e))
    return console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = i.get(e);
  if (o) return o;
  const a = Ri(e);
  if (a === 0) return e;
  const s = new Proxy(e, a === 2 ? n : r);
  return i.set(e, s), s;
}
function h(e) {
  return (e && h(e.__v_raw)) || e;
}
function ze(e) {
  return !!(e && e.__v_isRef === !0);
}
E("nextTick", () => it);
E("dispatch", (e) => ee.bind(ee, e));
E("watch", (e, { evaluateLater: t, cleanup: r }) => (n, i) => {
  let o = t(n),
    s = Tt(() => {
      let c;
      return o((l) => (c = l)), c;
    }, i);
  r(s);
});
E("store", Yn);
E("data", (e) => Ft(e));
E("root", (e) => ye(e));
E(
  "refs",
  (e) => (e._x_refs_proxy || (e._x_refs_proxy = ie(Li(e))), e._x_refs_proxy)
);
function Li(e) {
  let t = [];
  return (
    J(e, (r) => {
      r._x_refs && t.push(r._x_refs);
    }),
    t
  );
}
var Ce = {};
function Rr(e) {
  return Ce[e] || (Ce[e] = 0), ++Ce[e];
}
function Di(e, t) {
  return J(e, (r) => {
    if (r._x_ids && r._x_ids[t]) return !0;
  });
}
function Ni(e, t) {
  e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Rr(t));
}
E("id", (e, { cleanup: t }) => (r, n = null) => {
  let i = `${r}${n ? `-${n}` : ""}`;
  return Fi(e, i, t, () => {
    let o = Di(e, r),
      a = o ? o._x_ids[r] : Rr(r);
    return n ? `${r}-${a}-${n}` : `${r}-${a}`;
  });
});
ve((e, t) => {
  e._x_id && (t._x_id = e._x_id);
});
function Fi(e, t, r, n) {
  if ((e._x_id || (e._x_id = {}), e._x_id[t])) return e._x_id[t];
  let i = n();
  return (
    (e._x_id[t] = i),
    r(() => {
      delete e._x_id[t];
    }),
    i
  );
}
E("el", (e) => e);
Lr("Focus", "focus", "focus");
Lr("Persist", "persist", "persist");
function Lr(e, t, r) {
  E(t, (n) =>
    A(
      `You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
      n
    )
  );
}
y(
  "modelable",
  (e, { expression: t }, { effect: r, evaluateLater: n, cleanup: i }) => {
    let o = n(t),
      a = () => {
        let u;
        return o((d) => (u = d)), u;
      },
      s = n(`${t} = __placeholder`),
      c = (u) => s(() => {}, { scope: { __placeholder: u } }),
      l = a();
    c(l),
      queueMicrotask(() => {
        if (!e._x_model) return;
        e._x_removeModelListeners.default();
        let u = e._x_model.get,
          d = e._x_model.set,
          p = yr(
            {
              get() {
                return u();
              },
              set(w) {
                d(w);
              },
            },
            {
              get() {
                return a();
              },
              set(w) {
                c(w);
              },
            }
          );
        i(p);
      });
  }
);
y("teleport", (e, { modifiers: t, expression: r }, { cleanup: n }) => {
  e.tagName.toLowerCase() !== "template" &&
    A("x-teleport can only be used on a <template> tag", e);
  let i = Ot(r),
    o = e.content.cloneNode(!0).firstElementChild;
  (e._x_teleport = o),
    (o._x_teleportBack = e),
    e.setAttribute("data-teleport-template", !0),
    o.setAttribute("data-teleport-target", !0),
    e._x_forwardEvents &&
      e._x_forwardEvents.forEach((s) => {
        o.addEventListener(s, (c) => {
          c.stopPropagation(), e.dispatchEvent(new c.constructor(c.type, c));
        });
      }),
    ne(o, {}, e);
  let a = (s, c, l) => {
    l.includes("prepend")
      ? c.parentNode.insertBefore(s, c)
      : l.includes("append")
      ? c.parentNode.insertBefore(s, c.nextSibling)
      : c.appendChild(s);
  };
  g(() => {
    a(o, i, t),
      k(() => {
        C(o);
      })();
  }),
    (e._x_teleportPutBack = () => {
      let s = Ot(r);
      g(() => {
        a(e._x_teleport, s, t);
      });
    }),
    n(() =>
      g(() => {
        o.remove(), V(o);
      })
    );
});
var Ui = document.createElement("div");
function Ot(e) {
  let t = k(
    () => document.querySelector(e),
    () => Ui
  )();
  return t || A(`Cannot find x-teleport element for selector: "${e}"`), t;
}
var Dr = () => {};
Dr.inline = (e, { modifiers: t }, { cleanup: r }) => {
  t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
    r(() => {
      t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
    });
};
y("ignore", Dr);
y(
  "effect",
  k((e, { expression: t }, { effect: r }) => {
    r(b(e, t));
  })
);
function We(e, t, r, n) {
  let i = e,
    o = (c) => n(c),
    a = {},
    s = (c, l) => (u) => l(c, u);
  if (
    (r.includes("dot") && (t = Bi(t)),
    r.includes("camel") && (t = Ki(t)),
    r.includes("passive") && (a.passive = !0),
    r.includes("capture") && (a.capture = !0),
    r.includes("window") && (i = window),
    r.includes("document") && (i = document),
    r.includes("debounce"))
  ) {
    let c = r[r.indexOf("debounce") + 1] || "invalid-wait",
      l = me(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
    o = gr(o, l);
  }
  if (r.includes("throttle")) {
    let c = r[r.indexOf("throttle") + 1] || "invalid-wait",
      l = me(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
    o = mr(o, l);
  }
  return (
    r.includes("prevent") &&
      (o = s(o, (c, l) => {
        l.preventDefault(), c(l);
      })),
    r.includes("stop") &&
      (o = s(o, (c, l) => {
        l.stopPropagation(), c(l);
      })),
    r.includes("once") &&
      (o = s(o, (c, l) => {
        c(l), i.removeEventListener(t, o, a);
      })),
    (r.includes("away") || r.includes("outside")) &&
      ((i = document),
      (o = s(o, (c, l) => {
        e.contains(l.target) ||
          (l.target.isConnected !== !1 &&
            ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
              (e._x_isShown !== !1 && c(l))));
      }))),
    r.includes("self") &&
      (o = s(o, (c, l) => {
        l.target === e && c(l);
      })),
    (Hi(t) || Nr(t)) &&
      (o = s(o, (c, l) => {
        zi(l, r) || c(l);
      })),
    i.addEventListener(t, o, a),
    () => {
      i.removeEventListener(t, o, a);
    }
  );
}
function Bi(e) {
  return e.replace(/-/g, ".");
}
function Ki(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
}
function me(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function qi(e) {
  return [" ", "_"].includes(e)
    ? e
    : e
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[_\s]/, "-")
        .toLowerCase();
}
function Hi(e) {
  return ["keydown", "keyup"].includes(e);
}
function Nr(e) {
  return ["contextmenu", "click", "mouse"].some((t) => e.includes(t));
}
function zi(e, t) {
  let r = t.filter(
    (o) =>
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
      ].includes(o)
  );
  if (r.includes("debounce")) {
    let o = r.indexOf("debounce");
    r.splice(o, me((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (r.includes("throttle")) {
    let o = r.indexOf("throttle");
    r.splice(o, me((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (r.length === 0 || (r.length === 1 && Ct(e.key).includes(r[0]))) return !1;
  const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((o) =>
    r.includes(o)
  );
  return (
    (r = r.filter((o) => !i.includes(o))),
    !(
      i.length > 0 &&
      i.filter(
        (a) => ((a === "cmd" || a === "super") && (a = "meta"), e[`${a}Key`])
      ).length === i.length &&
      (Nr(e.type) || Ct(e.key).includes(r[0]))
    )
  );
}
function Ct(e) {
  if (!e) return [];
  e = qi(e);
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
      .map((r) => {
        if (t[r] === e) return r;
      })
      .filter((r) => r)
  );
}
y("model", (e, { modifiers: t, expression: r }, { effect: n, cleanup: i }) => {
  let o = e;
  t.includes("parent") && (o = e.parentNode);
  let a = b(o, r),
    s;
  typeof r == "string"
    ? (s = b(o, `${r} = __placeholder`))
    : typeof r == "function" && typeof r() == "string"
    ? (s = b(o, `${r()} = __placeholder`))
    : (s = () => {});
  let c = () => {
      let p;
      return a((w) => (p = w)), Pt(p) ? p.get() : p;
    },
    l = (p) => {
      let w;
      a((P) => (w = P)),
        Pt(w) ? w.set(p) : s(() => {}, { scope: { __placeholder: p } });
    };
  typeof r == "string" &&
    e.type === "radio" &&
    g(() => {
      e.hasAttribute("name") || e.setAttribute("name", r);
    });
  var u =
    e.tagName.toLowerCase() === "select" ||
    ["checkbox", "radio"].includes(e.type) ||
    t.includes("lazy")
      ? "change"
      : "input";
  let d = I
    ? () => {}
    : We(e, u, t, (p) => {
        l(Pe(e, t, p, c()));
      });
  if (
    (t.includes("fill") &&
      ([void 0, null, ""].includes(c()) ||
        (at(e) && Array.isArray(c())) ||
        (e.tagName.toLowerCase() === "select" && e.multiple)) &&
      l(Pe(e, t, { target: e }, c())),
    e._x_removeModelListeners || (e._x_removeModelListeners = {}),
    (e._x_removeModelListeners.default = d),
    i(() => e._x_removeModelListeners.default()),
    e.form)
  ) {
    let p = We(e.form, "reset", [], (w) => {
      it(() => e._x_model && e._x_model.set(Pe(e, t, { target: e }, c())));
    });
    i(() => p());
  }
  (e._x_model = {
    get() {
      return c();
    },
    set(p) {
      l(p);
    },
  }),
    (e._x_forceModelUpdate = (p) => {
      p === void 0 && typeof r == "string" && r.match(/\./) && (p = ""),
        (window.fromModel = !0),
        g(() => fr(e, "value", p)),
        delete window.fromModel;
    }),
    n(() => {
      let p = c();
      (t.includes("unintrusive") && document.activeElement.isSameNode(e)) ||
        e._x_forceModelUpdate(p);
    });
});
function Pe(e, t, r, n) {
  return g(() => {
    if (r instanceof CustomEvent && r.detail !== void 0)
      return r.detail !== null && r.detail !== void 0
        ? r.detail
        : r.target.value;
    if (at(e))
      if (Array.isArray(n)) {
        let i = null;
        return (
          t.includes("number")
            ? (i = Me(r.target.value))
            : t.includes("boolean")
            ? (i = pe(r.target.value))
            : (i = r.target.value),
          r.target.checked
            ? n.includes(i)
              ? n
              : n.concat([i])
            : n.filter((o) => !Wi(o, i))
        );
      } else return r.target.checked;
    else {
      if (e.tagName.toLowerCase() === "select" && e.multiple)
        return t.includes("number")
          ? Array.from(r.target.selectedOptions).map((i) => {
              let o = i.value || i.text;
              return Me(o);
            })
          : t.includes("boolean")
          ? Array.from(r.target.selectedOptions).map((i) => {
              let o = i.value || i.text;
              return pe(o);
            })
          : Array.from(r.target.selectedOptions).map((i) => i.value || i.text);
      {
        let i;
        return (
          _r(e)
            ? r.target.checked
              ? (i = r.target.value)
              : (i = n)
            : (i = r.target.value),
          t.includes("number")
            ? Me(i)
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
function Me(e) {
  let t = e ? parseFloat(e) : null;
  return Ji(t) ? t : e;
}
function Wi(e, t) {
  return e == t;
}
function Ji(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Pt(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    typeof e.get == "function" &&
    typeof e.set == "function"
  );
}
y("cloak", (e) => queueMicrotask(() => g(() => e.removeAttribute(W("cloak")))));
or(() => `[${W("init")}]`);
y(
  "init",
  k((e, { expression: t }, { evaluate: r }) =>
    typeof t == "string" ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1)
  )
);
y("text", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
  let i = n(t);
  r(() => {
    i((o) => {
      g(() => {
        e.textContent = o;
      });
    });
  });
});
y("html", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
  let i = n(t);
  r(() => {
    i((o) => {
      g(() => {
        (e.innerHTML = o), (e._x_ignoreSelf = !0), C(e), delete e._x_ignoreSelf;
      });
    });
  });
});
tt(Gt(":", Yt(W("bind:"))));
var Fr = (
  e,
  { value: t, modifiers: r, expression: n, original: i },
  { effect: o, cleanup: a }
) => {
  if (!t) {
    let c = {};
    Zn(c),
      b(e, n)(
        (u) => {
          vr(e, u, i);
        },
        { scope: c }
      );
    return;
  }
  if (t === "key") return Vi(e, n);
  if (
    e._x_inlineBindings &&
    e._x_inlineBindings[t] &&
    e._x_inlineBindings[t].extract
  )
    return;
  let s = b(e, n);
  o(() =>
    s((c) => {
      c === void 0 && typeof n == "string" && n.match(/\./) && (c = ""),
        g(() => fr(e, t, c, r));
    })
  ),
    a(() => {
      e._x_undoAddedClasses && e._x_undoAddedClasses(),
        e._x_undoAddedStyles && e._x_undoAddedStyles();
    });
};
Fr.inline = (e, { value: t, modifiers: r, expression: n }) => {
  t &&
    (e._x_inlineBindings || (e._x_inlineBindings = {}),
    (e._x_inlineBindings[t] = { expression: n, extract: !1 }));
};
y("bind", Fr);
function Vi(e, t) {
  e._x_keyExpression = t;
}
ir(() => `[${W("data")}]`);
y("data", (e, { expression: t }, { cleanup: r }) => {
  if (Gi(e)) return;
  t = t === "" ? "{}" : t;
  let n = {};
  Re(n, e);
  let i = {};
  ei(i, n);
  let o = L(e, t, { scope: i });
  (o === void 0 || o === !0) && (o = {}), Re(o, e);
  let a = H(o);
  Ut(a);
  let s = ne(e, a);
  a.init && L(e, a.init),
    r(() => {
      a.destroy && L(e, a.destroy), s();
    });
});
ve((e, t) => {
  e._x_dataStack &&
    ((t._x_dataStack = e._x_dataStack),
    t.setAttribute("data-has-alpine-state", !0));
});
function Gi(e) {
  return I ? (Ke ? !0 : e.hasAttribute("data-has-alpine-state")) : !1;
}
y("show", (e, { modifiers: t, expression: r }, { effect: n }) => {
  let i = b(e, r);
  e._x_doHide ||
    (e._x_doHide = () => {
      g(() => {
        e.style.setProperty(
          "display",
          "none",
          t.includes("important") ? "important" : void 0
        );
      });
    }),
    e._x_doShow ||
      (e._x_doShow = () => {
        g(() => {
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
    c = Ue(
      (d) => (d ? a() : o()),
      (d) => {
        typeof e._x_toggleAndCascadeWithTransitions == "function"
          ? e._x_toggleAndCascadeWithTransitions(e, d, a, o)
          : d
          ? s()
          : o();
      }
    ),
    l,
    u = !0;
  n(() =>
    i((d) => {
      (!u && d === l) ||
        (t.includes("immediate") && (d ? s() : o()), c(d), (l = d), (u = !1));
    })
  );
});
y("for", (e, { expression: t }, { effect: r, cleanup: n }) => {
  let i = Xi(t),
    o = b(e, i.items),
    a = b(e, e._x_keyExpression || "index");
  (e._x_prevKeys = []),
    (e._x_lookup = {}),
    r(() => Yi(e, i, o, a)),
    n(() => {
      Object.values(e._x_lookup).forEach((s) =>
        g(() => {
          V(s), s.remove();
        })
      ),
        delete e._x_prevKeys,
        delete e._x_lookup;
    });
});
function Yi(e, t, r, n) {
  let i = (a) => typeof a == "object" && !Array.isArray(a),
    o = e;
  r((a) => {
    Zi(a) && a >= 0 && (a = Array.from(Array(a).keys(), (f) => f + 1)),
      a === void 0 && (a = []);
    let s = e._x_lookup,
      c = e._x_prevKeys,
      l = [],
      u = [];
    if (i(a))
      a = Object.entries(a).map(([f, _]) => {
        let m = Mt(t, _, f, a);
        n(
          (v) => {
            u.includes(v) && A("Duplicate key on x-for", e), u.push(v);
          },
          { scope: { index: f, ...m } }
        ),
          l.push(m);
      });
    else
      for (let f = 0; f < a.length; f++) {
        let _ = Mt(t, a[f], f, a);
        n(
          (m) => {
            u.includes(m) && A("Duplicate key on x-for", e), u.push(m);
          },
          { scope: { index: f, ..._ } }
        ),
          l.push(_);
      }
    let d = [],
      p = [],
      w = [],
      P = [];
    for (let f = 0; f < c.length; f++) {
      let _ = c[f];
      u.indexOf(_) === -1 && w.push(_);
    }
    c = c.filter((f) => !w.includes(f));
    let ae = "template";
    for (let f = 0; f < u.length; f++) {
      let _ = u[f],
        m = c.indexOf(_);
      if (m === -1) c.splice(f, 0, _), d.push([ae, f]);
      else if (m !== f) {
        let v = c.splice(f, 1)[0],
          x = c.splice(m - 1, 1)[0];
        c.splice(f, 0, x), c.splice(m, 0, v), p.push([v, x]);
      } else P.push(_);
      ae = _;
    }
    for (let f = 0; f < w.length; f++) {
      let _ = w[f];
      _ in s &&
        (g(() => {
          V(s[_]), s[_].remove();
        }),
        delete s[_]);
    }
    for (let f = 0; f < p.length; f++) {
      let [_, m] = p[f],
        v = s[_],
        x = s[m],
        B = document.createElement("div");
      g(() => {
        x || A('x-for ":key" is undefined or invalid', o, m, s),
          x.after(B),
          v.after(x),
          x._x_currentIfEl && x.after(x._x_currentIfEl),
          B.before(v),
          v._x_currentIfEl && v.after(v._x_currentIfEl),
          B.remove();
      }),
        x._x_refreshXForScope(l[u.indexOf(m)]);
    }
    for (let f = 0; f < d.length; f++) {
      let [_, m] = d[f],
        v = _ === "template" ? o : s[_];
      v._x_currentIfEl && (v = v._x_currentIfEl);
      let x = l[m],
        B = u[m],
        G = document.importNode(o.content, !0).firstElementChild,
        _t = H(x);
      ne(G, _t, o),
        (G._x_refreshXForScope = (Br) => {
          Object.entries(Br).forEach(([Kr, qr]) => {
            _t[Kr] = qr;
          });
        }),
        g(() => {
          v.after(G), k(() => C(G))();
        }),
        typeof B == "object" &&
          A(
            "x-for key cannot be an object, it must be a string or an integer",
            o
          ),
        (s[B] = G);
    }
    for (let f = 0; f < P.length; f++)
      s[P[f]]._x_refreshXForScope(l[u.indexOf(P[f])]);
    o._x_prevKeys = u;
  });
}
function Xi(e) {
  let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    r = /^\s*\(|\)\s*$/g,
    n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
    i = e.match(n);
  if (!i) return;
  let o = {};
  o.items = i[2].trim();
  let a = i[1].replace(r, "").trim(),
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
function Mt(e, t, r, n) {
  let i = {};
  return (
    /^\[.*\]$/.test(e.item) && Array.isArray(t)
      ? e.item
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map((a) => a.trim())
          .forEach((a, s) => {
            i[a] = t[s];
          })
      : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
      ? e.item
          .replace("{", "")
          .replace("}", "")
          .split(",")
          .map((a) => a.trim())
          .forEach((a) => {
            i[a] = t[a];
          })
      : (i[e.item] = t),
    e.index && (i[e.index] = r),
    e.collection && (i[e.collection] = n),
    i
  );
}
function Zi(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Ur() {}
Ur.inline = (e, { expression: t }, { cleanup: r }) => {
  let n = ye(e);
  n._x_refs || (n._x_refs = {}),
    (n._x_refs[t] = e),
    r(() => delete n._x_refs[t]);
};
y("ref", Ur);
y("if", (e, { expression: t }, { effect: r, cleanup: n }) => {
  e.tagName.toLowerCase() !== "template" &&
    A("x-if can only be used on a <template> tag", e);
  let i = b(e, t),
    o = () => {
      if (e._x_currentIfEl) return e._x_currentIfEl;
      let s = e.content.cloneNode(!0).firstElementChild;
      return (
        ne(s, {}, e),
        g(() => {
          e.after(s), k(() => C(s))();
        }),
        (e._x_currentIfEl = s),
        (e._x_undoIf = () => {
          g(() => {
            V(s), s.remove();
          }),
            delete e._x_currentIfEl;
        }),
        s
      );
    },
    a = () => {
      e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
    };
  r(() =>
    i((s) => {
      s ? o() : a();
    })
  ),
    n(() => e._x_undoIf && e._x_undoIf());
});
y("id", (e, { expression: t }, { evaluate: r }) => {
  r(t).forEach((i) => Ni(e, i));
});
ve((e, t) => {
  e._x_ids && (t._x_ids = e._x_ids);
});
tt(Gt("@", Yt(W("on:"))));
y(
  "on",
  k((e, { value: t, modifiers: r, expression: n }, { cleanup: i }) => {
    let o = n ? b(e, n) : () => {};
    e.tagName.toLowerCase() === "template" &&
      (e._x_forwardEvents || (e._x_forwardEvents = []),
      e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let a = We(e, t, r, (s) => {
      o(() => {}, { scope: { $event: s }, params: [s] });
    });
    i(() => a());
  })
);
Se("Collapse", "collapse", "collapse");
Se("Intersect", "intersect", "intersect");
Se("Focus", "trap", "focus");
Se("Mask", "mask", "mask");
function Se(e, t, r) {
  y(t, (n) =>
    A(
      `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
      n
    )
  );
}
oe.setEvaluator(zt);
oe.setReactivityEngine({ reactive: pt, effect: ui, release: fi, raw: h });
var Qi = oe,
  ht = Qi;
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
        "Entering the home, you're greeted by a large dining room and staircase with 30-foot ceilings",
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
      caption: "Champagne gold accents and custom above/below cabinet lighting",
      alt: "Property view 19",
    },
    {
      id: 20,
      caption: "Brand new dishwasher recently installed",
      alt: "Property view 20",
    },
    {
      id: 21,
      caption:
        "Gorgeous white cabinets and white tile backsplash are always in style",
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
ht.data("imageGallery", () => ({
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
    const t =
      (this.images.findIndex((r) => r.id === this.currentImage.id) + 1) %
      this.images.length;
    this.currentImage = this.images[t];
  },
  prevImage() {
    const e = this.images.findIndex((r) => r.id === this.currentImage.id),
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
    const r = this.images.find((i) => i.id === e);
    if (r && r.customUrl) return t ? `${r.customUrl}?${t}` : r.customUrl;
    const n = `https://ik.imagekit.io/UltraDAO/6400/${e}-6400Orchard_${String(
      e
    ).padStart(3, "0")}.jpg`;
    return t ? `${n}?${t}` : `${n}?updatedAt=1752969198065`;
  },
  getGallerySrcSet(e) {
    const t = this.images.find((i) => i.id === e);
    let r;
    return (
      t && t.customUrl
        ? (r = t.customUrl)
        : (r = `https://ik.imagekit.io/UltraDAO/6400/${e}-6400Orchard_${String(
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
        .map((i) => `${r}?tr=w-${i.w},c-at_max,q-70 ${i.desc}`)
        .join(", ")
    );
  },
  getModalSrcSet(e) {
    const t = this.images.find((i) => i.id === e);
    let r;
    return (
      t && t.customUrl
        ? (r = t.customUrl)
        : (r = `https://ik.imagekit.io/UltraDAO/6400/${e}-6400Orchard_${String(
            e
          ).padStart(3, "0")}.jpg`),
      [
        { w: 800, desc: "800w" },
        { w: 1200, desc: "1200w" },
        { w: 1600, desc: "1600w" },
        { w: 2e3, desc: "2000w" },
        { w: 2400, desc: "2400w" },
      ]
        .map((i) => `${r}?tr=w-${i.w},c-at_max,q-70 ${i.desc}`)
        .join(", ")
    );
  },
}));
ht.data("navigation", () => ({
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
      const r = document.querySelector(this.getAttribute("href"));
      r && r.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
ht.start();
