import at, { createContext as ot, useState as R, useCallback as Ye, useContext as Ze, useEffect as ue } from "react";
import { Paper as de, Box as N, Typography as q, Toolbar as H, TableContainer as lt, Table as ut, TableHead as ct, TableRow as Q, TableCell as ee, TableSortLabel as ft, TableBody as dt, TablePagination as ht, CircularProgress as We, TextField as pt, Avatar as mt, Button as Ee, Container as xt, Alert as gt, List as bt, ListItem as yt, ListItemButton as vt, ListItemIcon as wt, ListItemText as Et, CssBaseline as _t, AppBar as St, IconButton as Tt, Drawer as Ce } from "@mui/material";
import { ImageNotSupported as Ot, Add as Ft, Menu as jt } from "@mui/icons-material";
function kt(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var se = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function $t() {
  if (Ae) return te;
  Ae = 1;
  var s = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(r, n, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), n.key !== void 0 && (a = "" + n.key), "key" in n) {
      i = {};
      for (var l in n)
        l !== "key" && (i[l] = n[l]);
    } else i = n;
    return n = i.ref, {
      $$typeof: s,
      type: r,
      key: a,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return te.Fragment = t, te.jsx = e, te.jsxs = e, te;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function Ct() {
  return Re || (Re = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === j ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case b:
          return "Fragment";
        case g:
          return "Profiler";
        case h:
          return "StrictMode";
        case _:
          return "Suspense";
        case w:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case v:
            return "Portal";
          case A:
            return o.displayName || "Context";
          case O:
            return (o._context.displayName || "Context") + ".Consumer";
          case S:
            var y = o.render;
            return o = o.displayName, o || (o = y.displayName || y.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case T:
            return y = o.displayName || null, y !== null ? y : s(o.type) || "Memo";
          case k:
            y = o._payload, o = o._init;
            try {
              return s(o(y));
            } catch {
            }
        }
      return null;
    }
    function t(o) {
      return "" + o;
    }
    function e(o) {
      try {
        t(o);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var F = y.error, $ = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return F.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(o);
      }
    }
    function r(o) {
      if (o === b) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === k)
        return "<...>";
      try {
        var y = s(o);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var o = U.A;
      return o === null ? null : o.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(o) {
      if (K.call(o, "key")) {
        var y = Object.getOwnPropertyDescriptor(o, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function l(o, y) {
      function F() {
        Oe || (Oe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: F,
        configurable: !0
      });
    }
    function u() {
      var o = s(this.type);
      return Fe[o] || (Fe[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function d(o, y, F, $, ne, pe) {
      var C = F.ref;
      return o = {
        $$typeof: E,
        type: o,
        key: y,
        props: F,
        _owner: $
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: pe
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function f(o, y, F, $, ne, pe) {
      var C = y.children;
      if (C !== void 0)
        if ($)
          if (st(C)) {
            for ($ = 0; $ < C.length; $++)
              p(C[$]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(C);
      if (K.call(y, "key")) {
        C = s(o);
        var G = Object.keys(y).filter(function(it) {
          return it !== "key";
        });
        $ = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", $e[C + $] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          C,
          G,
          C
        ), $e[C + $] = !0);
      }
      if (C = null, F !== void 0 && (e(F), C = "" + F), a(y) && (e(y.key), C = "" + y.key), "key" in y) {
        F = {};
        for (var me in y)
          me !== "key" && (F[me] = y[me]);
      } else F = y;
      return C && l(
        F,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), d(
        o,
        C,
        F,
        n(),
        ne,
        pe
      );
    }
    function p(o) {
      m(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === k && (o._payload.status === "fulfilled" ? m(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function m(o) {
      return typeof o == "object" && o !== null && o.$$typeof === E;
    }
    var x = at, E = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), A = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), j = Symbol.for("react.client.reference"), U = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, st = Array.isArray, he = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var Oe, Fe = {}, je = x.react_stack_bottom_frame.bind(
      x,
      i
    )(), ke = he(r(i)), $e = {};
    re.Fragment = b, re.jsx = function(o, y, F) {
      var $ = 1e4 > U.recentlyCreatedOwnerStacks++;
      return f(
        o,
        y,
        F,
        !1,
        $ ? Error("react-stack-top-frame") : je,
        $ ? he(r(o)) : ke
      );
    }, re.jsxs = function(o, y, F) {
      var $ = 1e4 > U.recentlyCreatedOwnerStacks++;
      return f(
        o,
        y,
        F,
        !0,
        $ ? Error("react-stack-top-frame") : je,
        $ ? he(r(o)) : ke
      );
    };
  })()), re;
}
var De;
function At() {
  return De || (De = 1, process.env.NODE_ENV === "production" ? se.exports = $t() : se.exports = Ct()), se.exports;
}
var c = At();
const _r = ({ icon: s, title: t, value: e, color: r, sx: n, onClick: i }) => /* @__PURE__ */ c.jsxs(
  de,
  {
    sx: {
      p: 3,
      display: "flex",
      alignItems: "center",
      gap: 2,
      height: "100%",
      cursor: i ? "pointer" : "default",
      ...n
    },
    onClick: i,
    elevation: 2,
    children: [
      /* @__PURE__ */ c.jsx(N, { sx: { color: r || "primary.main", fontSize: 40 }, "data-testid": "statcard-icon", children: s }),
      /* @__PURE__ */ c.jsxs(N, { children: [
        /* @__PURE__ */ c.jsx(q, { color: "text.secondary", children: t }),
        /* @__PURE__ */ c.jsx(q, { variant: "h5", sx: { fontWeight: "bold" }, children: e })
      ] })
    ]
  }
), Rt = () => /* @__PURE__ */ c.jsx(N, { sx: { p: 4, textAlign: "center" }, children: /* @__PURE__ */ c.jsx(q, { color: "text.secondary", children: "No rows" }) }), Dt = () => /* @__PURE__ */ c.jsx(N, { sx: { display: "flex", justifyContent: "center", alignItems: "center", p: 4 }, children: /* @__PURE__ */ c.jsx(We, {}) }), Pt = ({
  // Data
  rows: s = [],
  columns: t = [],
  getRowId: e = (g) => g.id,
  // State
  loading: r = !1,
  error: n,
  // Pagination
  pagination: i = !1,
  rowCount: a = 0,
  page: l = 0,
  onPageChange: u = () => {
  },
  pageSize: d = 10,
  onPageSizeChange: f = () => {
  },
  pageSizeOptions: p = [5, 10, 25, 50],
  // Sorting
  sorting: m = !1,
  sortModel: x = [],
  onSortModelChange: E = () => {
  },
  // Customization
  slots: v = {},
  slotProps: b = {},
  sx: h
}) => {
  const {
    toolbar: g,
    noRowsOverlay: O = Rt,
    loadingOverlay: A = Dt
  } = v, S = (w) => {
    if (!m) return;
    const T = x.find((L) => L.field === w);
    let k;
    T ? T.sort === "asc" ? k = [{ field: w, sort: "desc" }] : k = [] : k = [{ field: w, sort: "asc" }], E(k);
  }, _ = x.length > 0 ? x[0] : null;
  return /* @__PURE__ */ c.jsxs(de, { sx: h, children: [
    g && /* @__PURE__ */ c.jsx(H, { children: /* @__PURE__ */ c.jsx(g, { ...b.toolbar || {} }) }),
    /* @__PURE__ */ c.jsx(lt, { children: /* @__PURE__ */ c.jsxs(ut, { stickyHeader: !0, children: [
      /* @__PURE__ */ c.jsx(ct, { children: /* @__PURE__ */ c.jsx(Q, { children: t.map((w) => /* @__PURE__ */ c.jsx(
        ee,
        {
          align: w.align || "inherit",
          width: w.width,
          sortDirection: _?.field === w.field ? _.sort : !1,
          children: w.sortable && m ? /* @__PURE__ */ c.jsx(
            ft,
            {
              active: _?.field === w.field,
              direction: _?.field === w.field ? _.sort : "asc",
              onClick: () => S(w.field),
              children: w.headerName
            }
          ) : w.headerName
        },
        w.field
      )) }) }),
      /* @__PURE__ */ c.jsx(dt, { children: r ? /* @__PURE__ */ c.jsx(Q, { children: /* @__PURE__ */ c.jsx(ee, { colSpan: t.length, sx: { border: "none" }, children: /* @__PURE__ */ c.jsx(A, { ...b.loadingOverlay || {} }) }) }) : n ? /* @__PURE__ */ c.jsx(Q, { children: /* @__PURE__ */ c.jsx(ee, { colSpan: t.length, sx: { border: "none", textAlign: "center" }, children: /* @__PURE__ */ c.jsx(q, { color: "error", children: n.message || "An error occurred." }) }) }) : s.length === 0 ? /* @__PURE__ */ c.jsx(Q, { children: /* @__PURE__ */ c.jsx(ee, { colSpan: t.length, sx: { border: "none" }, children: /* @__PURE__ */ c.jsx(O, { ...b.noRowsOverlay || {} }) }) }) : s.map((w) => /* @__PURE__ */ c.jsx(Q, { hover: !0, children: t.map((T) => {
        const k = T.field.split(".").reduce((L, j) => L?.[j], w);
        return /* @__PURE__ */ c.jsx(ee, { align: T.align || "inherit", children: T.renderCell ? T.renderCell({ value: k, row: w, id: e(w) }) : k }, T.field);
      }) }, e(w))) })
    ] }) }),
    i && !n && /* @__PURE__ */ c.jsx(
      ht,
      {
        component: "div",
        count: a,
        page: l,
        onPageChange: (w, T) => u(T),
        rowsPerPage: d,
        onRowsPerPageChange: (w) => f(parseInt(w.target.value, 10)),
        rowsPerPageOptions: p
      }
    )
  ] });
}, _e = ot(null), Nt = ({ initialValues: s = {}, onSubmit: t, validationSchema: e, children: r, ...n }) => {
  const [i, a] = R(s || {}), [l, u] = R({}), d = Ye((m, x) => {
    a((E) => ({
      ...E,
      [m]: x
    })), l[m] && u((E) => ({
      ...E,
      [m]: void 0
    }));
  }, [l]), f = async (m) => {
    m.preventDefault(), u({});
    try {
      e && await e.validate(i, { abortEarly: !1 }), t && t(i);
    } catch (x) {
      if (x.inner) {
        const E = x.inner.reduce((v, b) => (v[b.path] = b.message, v), {});
        u(E);
      }
    }
  }, p = {
    values: i,
    setFieldValue: d,
    errors: l
  };
  return /* @__PURE__ */ c.jsx(_e.Provider, { value: p, children: /* @__PURE__ */ c.jsx("form", { onSubmit: f, ...n, children: r }) });
}, Pe = ({ name: s, label: t, ...e }) => {
  const r = Ze(_e);
  if (!r)
    throw new Error("TextField must be used within a Form component");
  const { values: n, setFieldValue: i, errors: a } = r, l = a[s], u = (d) => {
    i(s, d.target.value);
  };
  return /* @__PURE__ */ c.jsx(
    pt,
    {
      name: s,
      label: t,
      value: n[s] || "",
      onChange: u,
      error: !!l,
      helperText: l || "",
      ...e
    }
  );
}, Sr = ({ name: s, label: t = "Upload File", initialPreview: e }) => {
  const r = Ze(_e), [n, i] = R(e || null);
  if (!r)
    throw new Error("FileUploadField must be used within a Form component");
  const { setFieldValue: a, values: l } = r, u = l[s];
  ue(() => {
    e && i(e);
  }, [e]), ue(() => {
    u || i(e || null);
  }, [u, e]);
  const d = (f) => {
    const p = f.target.files[0];
    if (p) {
      a(s, p);
      const m = new FileReader();
      m.onloadend = () => {
        i(m.result);
      }, m.readAsDataURL(p);
    }
  };
  return /* @__PURE__ */ c.jsxs(N, { sx: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }, children: [
    /* @__PURE__ */ c.jsx(mt, { src: n, sx: { width: 100, height: 100 }, children: !n && /* @__PURE__ */ c.jsx(Ot, { sx: { width: "70%", height: "70%" } }) }),
    /* @__PURE__ */ c.jsxs(Ee, { variant: "outlined", component: "label", children: [
      t,
      /* @__PURE__ */ c.jsx("input", { type: "file", hidden: !0, accept: "image/*", onChange: d, "data-testid": "file-upload-input" })
    ] })
  ] });
}, Tr = ({
  resourceName: s,
  columns: t,
  api: e,
  createPath: r
}) => {
  const [n, i] = R([]), [a, l] = R(!0), [u, d] = R(null), [f, p] = R(0), [m, x] = R(0), [E, v] = R(10), [b, h] = R([]), g = Ye(async () => {
    l(!0), d(null);
    try {
      const _ = b.length > 0 ? b[0].field : void 0, w = b.length > 0 ? b[0].sort : void 0, T = await e.list({
        page: m + 1,
        // API might be 1-based
        per_page: E,
        sort: _,
        order: w
      });
      i(T.data), p(T.meta.total);
    } catch (_) {
      d(_);
    } finally {
      l(!1);
    }
  }, [e, m, E, b]);
  ue(() => {
    g();
  }, [g]);
  const O = (_) => {
    x(_);
  }, A = (_) => {
    v(_), x(0);
  }, S = (_) => {
    h(_), x(0);
  };
  return /* @__PURE__ */ c.jsxs(N, { children: [
    /* @__PURE__ */ c.jsxs(H, { sx: { p: "0 !important", mb: 2 }, children: [
      /* @__PURE__ */ c.jsx(q, { variant: "h4", component: "h1", sx: { flexGrow: 1 }, children: s }),
      r && /* @__PURE__ */ c.jsx(
        Ee,
        {
          variant: "contained",
          startIcon: /* @__PURE__ */ c.jsx(Ft, {}),
          component: "a",
          href: r,
          children: "Create New"
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Pt,
      {
        rows: n,
        columns: t,
        loading: a,
        error: u,
        pagination: !0,
        rowCount: f,
        page: m,
        onPageChange: O,
        pageSize: E,
        onPageSizeChange: A,
        sorting: !0,
        sortModel: b,
        onSortModelChange: S
      }
    )
  ] });
}, Or = ({
  resourceName: s,
  id: t,
  api: e,
  FormComponent: r,
  onSuccess: n = () => {
  }
}) => {
  const [i, a] = R(null), [l, u] = R(!1), [d, f] = R(null), [p, m] = R(!1), x = t != null;
  ue(() => {
    x && (u(!0), f(null), e.getOne(t).then((v) => {
      a(v.data);
    }).catch((v) => {
      f(v);
    }).finally(() => {
      u(!1);
    })), console.log("Response from getOne API:", i);
  }, [e, t, x]);
  const E = async (v) => {
    m(!0), f(null);
    try {
      let b;
      if (x) {
        const { id: h, ...g } = v;
        b = await e.update(t, g);
      } else
        b = await e.create(v);
      n(b.data);
    } catch (b) {
      f(b), m(!1);
    }
  };
  return /* @__PURE__ */ c.jsxs(N, { children: [
    /* @__PURE__ */ c.jsx(H, { sx: { p: "0 !important", mb: 2 }, children: /* @__PURE__ */ c.jsx(q, { variant: "h4", component: "h1", children: "Bahaa" }) }),
    /* @__PURE__ */ c.jsx(de, { sx: { p: 3 }, children: /* @__PURE__ */ c.jsx(
      r,
      {
        initialData: i,
        onSubmit: E,
        isSubmitting: p,
        submitError: p ? d : null
      }
    ) })
  ] });
};
var xe, Ne;
function It() {
  if (Ne) return xe;
  Ne = 1;
  function s(h) {
    this._maxSize = h, this.clear();
  }
  s.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, s.prototype.get = function(h) {
    return this._values[h];
  }, s.prototype.set = function(h, g) {
    return this._size >= this._maxSize && this.clear(), h in this._values || this._size++, this._values[h] = g;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, e = /^\d+$/, r = /^\d/, n = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, i = /^\s*(['"]?)(.*?)(\1)\s*$/, a = 512, l = new s(a), u = new s(a), d = new s(a);
  xe = {
    Cache: s,
    split: p,
    normalizePath: f,
    setter: function(h) {
      var g = f(h);
      return u.get(h) || u.set(h, function(A, S) {
        for (var _ = 0, w = g.length, T = A; _ < w - 1; ) {
          var k = g[_];
          if (k === "__proto__" || k === "constructor" || k === "prototype")
            return A;
          T = T[g[_++]];
        }
        T[g[_]] = S;
      });
    },
    getter: function(h, g) {
      var O = f(h);
      return d.get(h) || d.set(h, function(S) {
        for (var _ = 0, w = O.length; _ < w; )
          if (S != null || !g) S = S[O[_++]];
          else return;
        return S;
      });
    },
    join: function(h) {
      return h.reduce(function(g, O) {
        return g + (x(O) || e.test(O) ? "[" + O + "]" : (g ? "." : "") + O);
      }, "");
    },
    forEach: function(h, g, O) {
      m(Array.isArray(h) ? h : p(h), g, O);
    }
  };
  function f(h) {
    return l.get(h) || l.set(
      h,
      p(h).map(function(g) {
        return g.replace(i, "$2");
      })
    );
  }
  function p(h) {
    return h.match(t) || [""];
  }
  function m(h, g, O) {
    var A = h.length, S, _, w, T;
    for (_ = 0; _ < A; _++)
      S = h[_], S && (b(S) && (S = '"' + S + '"'), T = x(S), w = !T && /^\d+$/.test(S), g.call(O, S, T, w, _, h));
  }
  function x(h) {
    return typeof h == "string" && h && ["'", '"'].indexOf(h.charAt(0)) !== -1;
  }
  function E(h) {
    return h.match(r) && !h.match(e);
  }
  function v(h) {
    return n.test(h);
  }
  function b(h) {
    return !x(h) && (E(h) || v(h));
  }
  return xe;
}
var Z = It(), ge, Ie;
function zt() {
  if (Ie) return ge;
  Ie = 1;
  const s = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (f) => f.match(s) || [], e = (f) => f[0].toUpperCase() + f.slice(1), r = (f, p) => t(f).join(p).toLowerCase(), n = (f) => t(f).reduce(
    (p, m) => `${p}${p ? m[0].toUpperCase() + m.slice(1).toLowerCase() : m.toLowerCase()}`,
    ""
  );
  return ge = {
    words: t,
    upperFirst: e,
    camelCase: n,
    pascalCase: (f) => e(n(f)),
    snakeCase: (f) => r(f, "_"),
    kebabCase: (f) => r(f, "-"),
    sentenceCase: (f) => e(r(f, " ")),
    titleCase: (f) => t(f).map(e).join(" ")
  }, ge;
}
var be = zt(), ie = { exports: {} }, ze;
function Mt() {
  if (ze) return ie.exports;
  ze = 1, ie.exports = function(n) {
    return s(t(n), n);
  }, ie.exports.array = s;
  function s(n, i) {
    var a = n.length, l = new Array(a), u = {}, d = a, f = e(i), p = r(n);
    for (i.forEach(function(x) {
      if (!p.has(x[0]) || !p.has(x[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); d--; )
      u[d] || m(n[d], d, /* @__PURE__ */ new Set());
    return l;
    function m(x, E, v) {
      if (v.has(x)) {
        var b;
        try {
          b = ", node was:" + JSON.stringify(x);
        } catch {
          b = "";
        }
        throw new Error("Cyclic dependency" + b);
      }
      if (!p.has(x))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(x));
      if (!u[E]) {
        u[E] = !0;
        var h = f.get(x) || /* @__PURE__ */ new Set();
        if (h = Array.from(h), E = h.length) {
          v.add(x);
          do {
            var g = h[--E];
            m(g, p.get(g), v);
          } while (E);
          v.delete(x);
        }
        l[--a] = x;
      }
    }
  }
  function t(n) {
    for (var i = /* @__PURE__ */ new Set(), a = 0, l = n.length; a < l; a++) {
      var u = n[a];
      i.add(u[0]), i.add(u[1]);
    }
    return Array.from(i);
  }
  function e(n) {
    for (var i = /* @__PURE__ */ new Map(), a = 0, l = n.length; a < l; a++) {
      var u = n[a];
      i.has(u[0]) || i.set(u[0], /* @__PURE__ */ new Set()), i.has(u[1]) || i.set(u[1], /* @__PURE__ */ new Set()), i.get(u[0]).add(u[1]);
    }
    return i;
  }
  function r(n) {
    for (var i = /* @__PURE__ */ new Map(), a = 0, l = n.length; a < l; a++)
      i.set(n[a], a);
    return i;
  }
  return ie.exports;
}
var Lt = Mt();
const Ut = /* @__PURE__ */ kt(Lt), Vt = Object.prototype.toString, qt = Error.prototype.toString, Yt = RegExp.prototype.toString, Zt = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Wt = /^Symbol\((.*)\)(.*)$/;
function Gt(s) {
  return s != +s ? "NaN" : s === 0 && 1 / s < 0 ? "-0" : "" + s;
}
function Me(s, t = !1) {
  if (s == null || s === !0 || s === !1) return "" + s;
  const e = typeof s;
  if (e === "number") return Gt(s);
  if (e === "string") return t ? `"${s}"` : s;
  if (e === "function") return "[Function " + (s.name || "anonymous") + "]";
  if (e === "symbol") return Zt.call(s).replace(Wt, "Symbol($1)");
  const r = Vt.call(s).slice(8, -1);
  return r === "Date" ? isNaN(s.getTime()) ? "" + s : s.toISOString(s) : r === "Error" || s instanceof Error ? "[" + qt.call(s) + "]" : r === "RegExp" ? Yt.call(s) : null;
}
function V(s, t) {
  let e = Me(s, t);
  return e !== null ? e : JSON.stringify(s, function(r, n) {
    let i = Me(this[r], t);
    return i !== null ? i : n;
  }, 2);
}
function Ge(s) {
  return s == null ? [] : [].concat(s);
}
let Be, Je, Xe, Bt = /\$\{\s*(\w+)\s*\}/g;
Be = Symbol.toStringTag;
class Le {
  constructor(t, e, r, n) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Be] = "Error", this.name = "ValidationError", this.value = e, this.path = r, this.type = n, this.errors = [], this.inner = [], Ge(t).forEach((i) => {
      if (D.isError(i)) {
        this.errors.push(...i.errors);
        const a = i.inner.length ? i.inner : [i];
        this.inner.push(...a);
      } else
        this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Je = Symbol.hasInstance;
Xe = Symbol.toStringTag;
class D extends Error {
  static formatError(t, e) {
    const r = e.label || e.path || "this";
    return e = Object.assign({}, e, {
      path: r,
      originalPath: e.path
    }), typeof t == "string" ? t.replace(Bt, (n, i) => V(e[i])) : typeof t == "function" ? t(e) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, e, r, n, i) {
    const a = new Le(t, e, r, n);
    if (i)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Xe] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, D);
  }
  static [Je](t) {
    return Le[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let I = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: s,
    type: t,
    value: e,
    originalValue: r
  }) => {
    const n = r != null && r !== e ? ` (cast from the value \`${V(r, !0)}\`).` : ".";
    return t !== "mixed" ? `${s} must be a \`${t}\` type, but the final value was: \`${V(e, !0)}\`` + n : `${s} must match the configured type. The validated value was: \`${V(e, !0)}\`` + n;
  }
}, P = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, Jt = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, ye = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Xt = {
  isValue: "${path} field must be ${value}"
}, oe = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, Ht = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Kt = {
  notType: (s) => {
    const {
      path: t,
      value: e,
      spec: r
    } = s, n = r.types.length;
    if (Array.isArray(e)) {
      if (e.length < n) return `${t} tuple value has too few items, expected a length of ${n} but got ${e.length} for value: \`${V(e, !0)}\``;
      if (e.length > n) return `${t} tuple value has too many items, expected a length of ${n} but got ${e.length} for value: \`${V(e, !0)}\``;
    }
    return D.formatError(I.notType, s);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: I,
  string: P,
  number: Jt,
  date: ye,
  object: oe,
  array: Ht,
  boolean: Xt,
  tuple: Kt
});
const Se = (s) => s && s.__isYupSchema__;
class ce {
  static fromOptions(t, e) {
    if (!e.then && !e.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: n,
      otherwise: i
    } = e, a = typeof r == "function" ? r : (...l) => l.every((u) => u === r);
    return new ce(t, (l, u) => {
      var d;
      let f = a(...l) ? n : i;
      return (d = f?.(u)) != null ? d : u;
    });
  }
  constructor(t, e) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = e;
  }
  resolve(t, e) {
    let r = this.refs.map((i) => (
      // TODO: ? operator here?
      i.getValue(e?.value, e?.parent, e?.context)
    )), n = this.fn(r, t, e);
    if (n === void 0 || // @ts-ignore this can be base
    n === t)
      return t;
    if (!Se(n)) throw new TypeError("conditions must return a schema object");
    return n.resolve(e);
  }
}
const ae = {
  context: "$",
  value: "."
};
class W {
  constructor(t, e = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === ae.context, this.isValue = this.key[0] === ae.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? ae.context : this.isValue ? ae.value : "";
    this.path = this.key.slice(r.length), this.getter = this.path && Z.getter(this.path, !0), this.map = e.map;
  }
  getValue(t, e, r) {
    let n = this.isContext ? r : this.isValue ? t : e;
    return this.getter && (n = this.getter(n || {})), this.map && (n = this.map(n)), n;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, e) {
    return this.getValue(t, e?.parent, e?.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
W.prototype.__isYupRef = !0;
const Y = (s) => s == null;
function B(s) {
  function t({
    value: e,
    path: r = "",
    options: n,
    originalValue: i,
    schema: a
  }, l, u) {
    const {
      name: d,
      test: f,
      params: p,
      message: m,
      skipAbsent: x
    } = s;
    let {
      parent: E,
      context: v,
      abortEarly: b = a.spec.abortEarly,
      disableStackTrace: h = a.spec.disableStackTrace
    } = n;
    const g = {
      value: e,
      parent: E,
      context: v
    };
    function O(j = {}) {
      const U = He(Object.assign({
        value: e,
        originalValue: i,
        label: a.spec.label,
        path: j.path || r,
        spec: a.spec,
        disableStackTrace: j.disableStackTrace || h
      }, p, j.params), g), K = new D(D.formatError(j.message || m, U), e, U.path, j.type || d, U.disableStackTrace);
      return K.params = U, K;
    }
    const A = b ? l : u;
    let S = {
      path: r,
      parent: E,
      type: d,
      from: n.from,
      createError: O,
      resolve(j) {
        return Ke(j, g);
      },
      options: n,
      originalValue: i,
      schema: a
    };
    const _ = (j) => {
      D.isError(j) ? A(j) : j ? u(null) : A(O());
    }, w = (j) => {
      D.isError(j) ? A(j) : l(j);
    };
    if (x && Y(e))
      return _(!0);
    let k;
    try {
      var L;
      if (k = f.call(S, e, S), typeof ((L = k) == null ? void 0 : L.then) == "function") {
        if (n.sync)
          throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(k).then(_, w);
      }
    } catch (j) {
      w(j);
      return;
    }
    _(k);
  }
  return t.OPTIONS = s, t;
}
function He(s, t) {
  if (!s) return s;
  for (const e of Object.keys(s))
    s[e] = Ke(s[e], t);
  return s;
}
function Ke(s, t) {
  return W.isRef(s) ? s.getValue(t.value, t.parent, t.context) : s;
}
function Qt(s, t, e, r = e) {
  let n, i, a;
  return t ? (Z.forEach(t, (l, u, d) => {
    let f = u ? l.slice(1, l.length - 1) : l;
    s = s.resolve({
      context: r,
      parent: n,
      value: e
    });
    let p = s.type === "tuple", m = d ? parseInt(f, 10) : 0;
    if (s.innerType || p) {
      if (p && !d) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (e && m >= e.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      n = e, e = e && e[m], s = p ? s.spec.types[m] : s.innerType;
    }
    if (!d) {
      if (!s.fields || !s.fields[f]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${s.type}")`);
      n = e, e = e && e[f], s = s.fields[f];
    }
    i = f, a = u ? "[" + l + "]" : "." + l;
  }), {
    schema: s,
    parent: n,
    parentPath: i
  }) : {
    parent: n,
    parentPath: t,
    schema: s
  };
}
class fe extends Set {
  describe() {
    const t = [];
    for (const e of this.values())
      t.push(W.isRef(e) ? e.describe() : e);
    return t;
  }
  resolveAll(t) {
    let e = [];
    for (const r of this.values())
      e.push(t(r));
    return e;
  }
  clone() {
    return new fe(this.values());
  }
  merge(t, e) {
    const r = this.clone();
    return t.forEach((n) => r.add(n)), e.forEach((n) => r.delete(n)), r;
  }
}
function X(s, t = /* @__PURE__ */ new Map()) {
  if (Se(s) || !s || typeof s != "object") return s;
  if (t.has(s)) return t.get(s);
  let e;
  if (s instanceof Date)
    e = new Date(s.getTime()), t.set(s, e);
  else if (s instanceof RegExp)
    e = new RegExp(s), t.set(s, e);
  else if (Array.isArray(s)) {
    e = new Array(s.length), t.set(s, e);
    for (let r = 0; r < s.length; r++) e[r] = X(s[r], t);
  } else if (s instanceof Map) {
    e = /* @__PURE__ */ new Map(), t.set(s, e);
    for (const [r, n] of s.entries()) e.set(r, X(n, t));
  } else if (s instanceof Set) {
    e = /* @__PURE__ */ new Set(), t.set(s, e);
    for (const r of s) e.add(X(r, t));
  } else if (s instanceof Object) {
    e = {}, t.set(s, e);
    for (const [r, n] of Object.entries(s)) e[r] = X(n, t);
  } else
    throw Error(`Unable to clone ${s}`);
  return e;
}
function er(s) {
  if (!(s != null && s.length))
    return;
  const t = [];
  let e = "", r = !1, n = !1;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    if (a === "[" && !n) {
      e && (t.push(...e.split(".").filter(Boolean)), e = ""), r = !0;
      continue;
    }
    if (a === "]" && !n) {
      e && (/^\d+$/.test(e) ? t.push(e) : t.push(e.replace(/^"|"$/g, "")), e = ""), r = !1;
      continue;
    }
    if (a === '"') {
      n = !n;
      continue;
    }
    if (a === "." && !r && !n) {
      e && (t.push(e), e = "");
      continue;
    }
    e += a;
  }
  return e && t.push(...e.split(".").filter(Boolean)), t;
}
function tr(s, t) {
  const e = t ? `${t}.${s.path}` : s.path;
  return s.errors.map((r) => ({
    message: r,
    path: er(e)
  }));
}
function Qe(s, t) {
  var e;
  if (!((e = s.inner) != null && e.length) && s.errors.length)
    return tr(s, t);
  const r = t ? `${t}.${s.path}` : s.path;
  return s.inner.flatMap((n) => Qe(n, r));
}
class z {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new fe(), this._blacklist = new fe(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(I.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t?.spec), this.withMutation((e) => {
      e.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const e = Object.create(Object.getPrototypeOf(this));
    return e.type = this.type, e._typeCheck = this._typeCheck, e._whitelist = this._whitelist.clone(), e._blacklist = this._blacklist.clone(), e.internalTests = Object.assign({}, this.internalTests), e.exclusiveTests = Object.assign({}, this.exclusiveTests), e.deps = [...this.deps], e.conditions = [...this.conditions], e.tests = [...this.tests], e.transforms = [...this.transforms], e.spec = X(Object.assign({}, this.spec, t)), e;
  }
  label(t) {
    let e = this.clone();
    return e.spec.label = t, e;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let e = this.clone();
    return e.spec.meta = Object.assign(e.spec.meta || {}, t[0]), e;
  }
  withMutation(t) {
    let e = this._mutate;
    this._mutate = !0;
    let r = t(this);
    return this._mutate = e, r;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let e = this, r = t.clone();
    const n = Object.assign({}, e.spec, r.spec);
    return r.spec = n, r.internalTests = Object.assign({}, e.internalTests, r.internalTests), r._whitelist = e._whitelist.merge(t._whitelist, t._blacklist), r._blacklist = e._blacklist.merge(t._blacklist, t._whitelist), r.tests = e.tests, r.exclusiveTests = e.exclusiveTests, r.withMutation((i) => {
      t.tests.forEach((a) => {
        i.test(a.OPTIONS);
      });
    }), r.transforms = [...e.transforms, ...r.transforms], r;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let e = this;
    if (e.conditions.length) {
      let r = e.conditions;
      e = e.clone(), e.conditions = [], e = r.reduce((n, i) => i.resolve(n, t), e), e = e.resolve(t);
    }
    return e;
  }
  resolveOptions(t) {
    var e, r, n, i;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (e = t.strict) != null ? e : this.spec.strict,
      abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
      recursive: (n = t.recursive) != null ? n : this.spec.recursive,
      disableStackTrace: (i = t.disableStackTrace) != null ? i : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, e = {}) {
    let r = this.resolve(Object.assign({}, e, {
      value: t
      // parent: options.parent,
      // context: options.context,
    })), n = e.assert === "ignore-optionality", i = r._cast(t, e);
    if (e.assert !== !1 && !r.isType(i)) {
      if (n && Y(i))
        return i;
      let a = V(t), l = V(i);
      throw new TypeError(`The value of ${e.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
` + (l !== a ? `result of cast: ${l}` : ""));
    }
    return i;
  }
  _cast(t, e) {
    let r = t === void 0 ? t : this.transforms.reduce((n, i) => i.call(this, n, t, this, e), t);
    return r === void 0 && (r = this.getDefault(e)), r;
  }
  _validate(t, e = {}, r, n) {
    let {
      path: i,
      originalValue: a = t,
      strict: l = this.spec.strict
    } = e, u = t;
    l || (u = this._cast(u, Object.assign({
      assert: !1
    }, e)));
    let d = [];
    for (let f of Object.values(this.internalTests))
      f && d.push(f);
    this.runTests({
      path: i,
      value: u,
      originalValue: a,
      options: e,
      tests: d
    }, r, (f) => {
      if (f.length)
        return n(f, u);
      this.runTests({
        path: i,
        value: u,
        originalValue: a,
        options: e,
        tests: this.tests
      }, r, n);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, e, r) {
    let n = !1, {
      tests: i,
      value: a,
      originalValue: l,
      path: u,
      options: d
    } = t, f = (v) => {
      n || (n = !0, e(v, a));
    }, p = (v) => {
      n || (n = !0, r(v, a));
    }, m = i.length, x = [];
    if (!m) return p([]);
    let E = {
      value: a,
      originalValue: l,
      path: u,
      options: d,
      schema: this
    };
    for (let v = 0; v < i.length; v++) {
      const b = i[v];
      b(E, f, function(g) {
        g && (Array.isArray(g) ? x.push(...g) : x.push(g)), --m <= 0 && p(x);
      });
    }
  }
  asNestedTest({
    key: t,
    index: e,
    parent: r,
    parentPath: n,
    originalParent: i,
    options: a
  }) {
    const l = t ?? e;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const u = typeof l == "number";
    let d = r[l];
    const f = Object.assign({}, a, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: r,
      value: d,
      originalValue: i[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [u ? "index" : "key"]: l,
      path: u || l.includes(".") ? `${n || ""}[${u ? l : `"${l}"`}]` : (n ? `${n}.` : "") + t
    });
    return (p, m, x) => this.resolve(f)._validate(d, f, m, x);
  }
  validate(t, e) {
    var r;
    let n = this.resolve(Object.assign({}, e, {
      value: t
    })), i = (r = e?.disableStackTrace) != null ? r : n.spec.disableStackTrace;
    return new Promise((a, l) => n._validate(t, e, (u, d) => {
      D.isError(u) && (u.value = d), l(u);
    }, (u, d) => {
      u.length ? l(new D(u, d, void 0, void 0, i)) : a(d);
    }));
  }
  validateSync(t, e) {
    var r;
    let n = this.resolve(Object.assign({}, e, {
      value: t
    })), i, a = (r = e?.disableStackTrace) != null ? r : n.spec.disableStackTrace;
    return n._validate(t, Object.assign({}, e, {
      sync: !0
    }), (l, u) => {
      throw D.isError(l) && (l.value = u), l;
    }, (l, u) => {
      if (l.length) throw new D(l, t, void 0, void 0, a);
      i = u;
    }), i;
  }
  isValid(t, e) {
    return this.validate(t, e).then(() => !0, (r) => {
      if (D.isError(r)) return !1;
      throw r;
    });
  }
  isValidSync(t, e) {
    try {
      return this.validateSync(t, e), !0;
    } catch (r) {
      if (D.isError(r)) return !1;
      throw r;
    }
  }
  _getDefault(t) {
    let e = this.spec.default;
    return e == null ? e : typeof e == "function" ? e.call(this, t) : X(e);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    });
  }
  nullability(t, e) {
    const r = this.clone({
      nullable: t
    });
    return r.internalTests.nullable = B({
      message: e,
      name: "nullable",
      test(n) {
        return n === null ? this.schema.spec.nullable : !0;
      }
    }), r;
  }
  optionality(t, e) {
    const r = this.clone({
      optional: t
    });
    return r.internalTests.optionality = B({
      message: e,
      name: "optionality",
      test(n) {
        return n === void 0 ? this.schema.spec.optional : !0;
      }
    }), r;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = I.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = I.notNull) {
    return this.nullability(!1, t);
  }
  required(t = I.required) {
    return this.clone().withMutation((e) => e.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let e = this.clone();
    return e.transforms.push(t), e;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let e;
    if (t.length === 1 ? typeof t[0] == "function" ? e = {
      test: t[0]
    } : e = t[0] : t.length === 2 ? e = {
      name: t[0],
      test: t[1]
    } : e = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, e.message === void 0 && (e.message = I.default), typeof e.test != "function") throw new TypeError("`test` is a required parameters");
    let r = this.clone(), n = B(e), i = e.exclusive || e.name && r.exclusiveTests[e.name] === !0;
    if (e.exclusive && !e.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return e.name && (r.exclusiveTests[e.name] = !!e.exclusive), r.tests = r.tests.filter((a) => !(a.OPTIONS.name === e.name && (i || a.OPTIONS.test === n.OPTIONS.test))), r.tests.push(n), r;
  }
  when(t, e) {
    !Array.isArray(t) && typeof t != "string" && (e = t, t = ".");
    let r = this.clone(), n = Ge(t).map((i) => new W(i));
    return n.forEach((i) => {
      i.isSibling && r.deps.push(i.key);
    }), r.conditions.push(typeof e == "function" ? new ce(n, e) : ce.fromOptions(n, e)), r;
  }
  typeError(t) {
    let e = this.clone();
    return e.internalTests.typeError = B({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(r) {
        return this.schema._typeCheck(r) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), e;
  }
  oneOf(t, e = I.oneOf) {
    let r = this.clone();
    return t.forEach((n) => {
      r._whitelist.add(n), r._blacklist.delete(n);
    }), r.internalTests.whiteList = B({
      message: e,
      name: "oneOf",
      skipAbsent: !0,
      test(n) {
        let i = this.schema._whitelist, a = i.resolveAll(this.resolve);
        return a.includes(n) ? !0 : this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: a
          }
        });
      }
    }), r;
  }
  notOneOf(t, e = I.notOneOf) {
    let r = this.clone();
    return t.forEach((n) => {
      r._blacklist.add(n), r._whitelist.delete(n);
    }), r.internalTests.blacklist = B({
      message: e,
      name: "notOneOf",
      test(n) {
        let i = this.schema._blacklist, a = i.resolveAll(this.resolve);
        return a.includes(n) ? this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: a
          }
        }) : !0;
      }
    }), r;
  }
  strip(t = !0) {
    let e = this.clone();
    return e.spec.strip = t, e;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const e = (t ? this.resolve(t) : this).clone(), {
      label: r,
      meta: n,
      optional: i,
      nullable: a
    } = e.spec;
    return {
      meta: n,
      label: r,
      optional: i,
      nullable: a,
      default: e.getDefault(t),
      type: e.type,
      oneOf: e._whitelist.describe(),
      notOneOf: e._blacklist.describe(),
      tests: e.tests.filter((u, d, f) => f.findIndex((p) => p.OPTIONS.name === u.OPTIONS.name) === d).map((u) => {
        const d = u.OPTIONS.params && t ? He(Object.assign({}, u.OPTIONS.params), t) : u.OPTIONS.params;
        return {
          name: u.OPTIONS.name,
          params: d
        };
      })
    };
  }
  get "~standard"() {
    const t = this;
    return {
      version: 1,
      vendor: "yup",
      async validate(r) {
        try {
          return {
            value: await t.validate(r, {
              abortEarly: !1
            })
          };
        } catch (n) {
          if (n instanceof D)
            return {
              issues: Qe(n)
            };
          throw n;
        }
      }
    };
  }
}
z.prototype.__isYupSchema__ = !0;
for (const s of ["validate", "validateSync"]) z.prototype[`${s}At`] = function(t, e, r = {}) {
  const {
    parent: n,
    parentPath: i,
    schema: a
  } = Qt(this, t, e, r.context);
  return a[s](n && n[i], Object.assign({}, r, {
    parent: n,
    path: t
  }));
};
for (const s of ["equals", "is"]) z.prototype[s] = z.prototype.oneOf;
for (const s of ["not", "nope"]) z.prototype[s] = z.prototype.notOneOf;
const rr = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function nr(s) {
  const t = ve(s);
  if (!t) return Date.parse ? Date.parse(s) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let e = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (e = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (e = 0 - e)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + e, t.second, t.millisecond);
}
function ve(s) {
  var t, e;
  const r = rr.exec(s);
  return r ? {
    year: M(r[1]),
    month: M(r[2], 1) - 1,
    day: M(r[3], 1),
    hour: M(r[4]),
    minute: M(r[5]),
    second: M(r[6]),
    millisecond: r[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      M(r[7].substring(0, 3))
    ) : 0,
    precision: (t = (e = r[7]) == null ? void 0 : e.length) != null ? t : void 0,
    z: r[8] || void 0,
    plusMinus: r[9] || void 0,
    hourOffset: M(r[10]),
    minuteOffset: M(r[11])
  } : null;
}
function M(s, t = 0) {
  return Number(s) || t;
}
let sr = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), ir = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), ar = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, or = "^\\d{4}-\\d{2}-\\d{2}", lr = "\\d{2}:\\d{2}:\\d{2}", ur = "(([+-]\\d{2}(:?\\d{2})?)|Z)", cr = new RegExp(`${or}T${lr}(\\.\\d+)?${ur}$`), fr = (s) => Y(s) || s === s.trim(), dr = {}.toString();
function we() {
  return new et();
}
class et extends z {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      }
    }), this.withMutation(() => {
      this.transform((t, e) => {
        if (!this.spec.coerce || this.isType(t) || Array.isArray(t)) return t;
        const r = t != null && t.toString ? t.toString() : t;
        return r === dr ? t : r;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((e) => e.test({
      message: t || I.required,
      name: "required",
      skipAbsent: !0,
      test: (r) => !!r.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((e) => e.OPTIONS.name !== "required"), t));
  }
  length(t, e = P.length) {
    return this.test({
      message: e,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length === this.resolve(t);
      }
    });
  }
  min(t, e = P.min) {
    return this.test({
      message: e,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length >= this.resolve(t);
      }
    });
  }
  max(t, e = P.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: e,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length <= this.resolve(t);
      }
    });
  }
  matches(t, e) {
    let r = !1, n, i;
    return e && (typeof e == "object" ? {
      excludeEmptyString: r = !1,
      message: n,
      name: i
    } = e : n = e), this.test({
      name: i || "matches",
      message: n || P.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (a) => a === "" && r || a.search(t) !== -1
    });
  }
  email(t = P.email) {
    return this.matches(sr, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = P.url) {
    return this.matches(ir, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = P.uuid) {
    return this.matches(ar, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let e = "", r, n;
    return t && (typeof t == "object" ? {
      message: e = "",
      allowOffset: r = !1,
      precision: n = void 0
    } = t : e = t), this.matches(cr, {
      name: "datetime",
      message: e || P.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: e || P.datetime_offset,
      params: {
        allowOffset: r
      },
      skipAbsent: !0,
      test: (i) => {
        if (!i || r) return !0;
        const a = ve(i);
        return a ? !!a.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: e || P.datetime_precision,
      params: {
        precision: n
      },
      skipAbsent: !0,
      test: (i) => {
        if (!i || n == null) return !0;
        const a = ve(i);
        return a ? a.precision === n : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = P.trim) {
    return this.transform((e) => e != null ? e.trim() : e).test({
      message: t,
      name: "trim",
      test: fr
    });
  }
  lowercase(t = P.lowercase) {
    return this.transform((e) => Y(e) ? e : e.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (e) => Y(e) || e === e.toLowerCase()
    });
  }
  uppercase(t = P.uppercase) {
    return this.transform((e) => Y(e) ? e : e.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (e) => Y(e) || e === e.toUpperCase()
    });
  }
}
we.prototype = et.prototype;
let hr = /* @__PURE__ */ new Date(""), pr = (s) => Object.prototype.toString.call(s) === "[object Date]";
class Te extends z {
  constructor() {
    super({
      type: "date",
      check(t) {
        return pr(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, e) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = nr(t), isNaN(t) ? Te.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, e) {
    let r;
    if (W.isRef(t))
      r = t;
    else {
      let n = this.cast(t);
      if (!this._typeCheck(n)) throw new TypeError(`\`${e}\` must be a Date or a value that can be \`cast()\` to a Date`);
      r = n;
    }
    return r;
  }
  min(t, e = ye.min) {
    let r = this.prepareParam(t, "min");
    return this.test({
      message: e,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(n) {
        return n >= this.resolve(r);
      }
    });
  }
  max(t, e = ye.max) {
    let r = this.prepareParam(t, "max");
    return this.test({
      message: e,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(n) {
        return n <= this.resolve(r);
      }
    });
  }
}
Te.INVALID_DATE = hr;
function mr(s, t = []) {
  let e = [], r = /* @__PURE__ */ new Set(), n = new Set(t.map(([a, l]) => `${a}-${l}`));
  function i(a, l) {
    let u = Z.split(a)[0];
    r.add(u), n.has(`${l}-${u}`) || e.push([l, u]);
  }
  for (const a of Object.keys(s)) {
    let l = s[a];
    r.add(a), W.isRef(l) && l.isSibling ? i(l.path, a) : Se(l) && "deps" in l && l.deps.forEach((u) => i(u, a));
  }
  return Ut.array(Array.from(r), e).reverse();
}
function Ue(s, t) {
  let e = 1 / 0;
  return s.some((r, n) => {
    var i;
    if ((i = t.path) != null && i.includes(r))
      return e = n, !0;
  }), e;
}
function tt(s) {
  return (t, e) => Ue(s, t) - Ue(s, e);
}
const xr = (s, t, e) => {
  if (typeof s != "string")
    return s;
  let r = s;
  try {
    r = JSON.parse(s);
  } catch {
  }
  return e.isType(r) ? r : s;
};
function le(s) {
  if ("fields" in s) {
    const t = {};
    for (const [e, r] of Object.entries(s.fields))
      t[e] = le(r);
    return s.setFields(t);
  }
  if (s.type === "array") {
    const t = s.optional();
    return t.innerType && (t.innerType = le(t.innerType)), t;
  }
  return s.type === "tuple" ? s.optional().clone({
    types: s.spec.types.map(le)
  }) : "optional" in s ? s.optional() : s;
}
const gr = (s, t) => {
  const e = [...Z.normalizePath(t)];
  if (e.length === 1) return e[0] in s;
  let r = e.pop(), n = Z.getter(Z.join(e), !0)(s);
  return !!(n && r in n);
};
let Ve = (s) => Object.prototype.toString.call(s) === "[object Object]";
function qe(s, t) {
  let e = Object.keys(s.fields);
  return Object.keys(t).filter((r) => e.indexOf(r) === -1);
}
const br = tt([]);
function rt(s) {
  return new nt(s);
}
class nt extends z {
  constructor(t) {
    super({
      type: "object",
      check(e) {
        return Ve(e) || typeof e == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = br, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, e = {}) {
    var r;
    let n = super._cast(t, e);
    if (n === void 0) return this.getDefault(e);
    if (!this._typeCheck(n)) return n;
    let i = this.fields, a = (r = e.stripUnknown) != null ? r : this.spec.noUnknown, l = [].concat(this._nodes, Object.keys(n).filter((p) => !this._nodes.includes(p))), u = {}, d = Object.assign({}, e, {
      parent: u,
      __validating: e.__validating || !1
    }), f = !1;
    for (const p of l) {
      let m = i[p], x = p in n, E = n[p];
      if (m) {
        let v;
        d.path = (e.path ? `${e.path}.` : "") + p, m = m.resolve({
          value: E,
          context: e.context,
          parent: u
        });
        let b = m instanceof z ? m.spec : void 0, h = b?.strict;
        if (b != null && b.strip) {
          f = f || p in n;
          continue;
        }
        v = !e.__validating || !h ? m.cast(E, d) : E, v !== void 0 && (u[p] = v);
      } else x && !a && (u[p] = E);
      (x !== p in u || u[p] !== E) && (f = !0);
    }
    return f ? u : n;
  }
  _validate(t, e = {}, r, n) {
    let {
      from: i = [],
      originalValue: a = t,
      recursive: l = this.spec.recursive
    } = e;
    e.from = [{
      schema: this,
      value: a
    }, ...i], e.__validating = !0, e.originalValue = a, super._validate(t, e, r, (u, d) => {
      if (!l || !Ve(d)) {
        n(u, d);
        return;
      }
      a = a || d;
      let f = [];
      for (let p of this._nodes) {
        let m = this.fields[p];
        !m || W.isRef(m) || f.push(m.asNestedTest({
          options: e,
          key: p,
          parent: d,
          parentPath: e.path,
          originalParent: a
        }));
      }
      this.runTests({
        tests: f,
        value: d,
        originalValue: a,
        options: e
      }, r, (p) => {
        n(p.sort(this._sortErrors).concat(u), d);
      });
    });
  }
  clone(t) {
    const e = super.clone(t);
    return e.fields = Object.assign({}, this.fields), e._nodes = this._nodes, e._excludedEdges = this._excludedEdges, e._sortErrors = this._sortErrors, e;
  }
  concat(t) {
    let e = super.concat(t), r = e.fields;
    for (let [n, i] of Object.entries(this.fields)) {
      const a = r[n];
      r[n] = a === void 0 ? i : a;
    }
    return e.withMutation((n) => (
      // XXX: excludes here is wrong
      n.setFields(r, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let e = {};
    return this._nodes.forEach((r) => {
      var n;
      const i = this.fields[r];
      let a = t;
      (n = a) != null && n.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[r]
      })), e[r] = i && "getDefault" in i ? i.getDefault(a) : void 0;
    }), e;
  }
  setFields(t, e) {
    let r = this.clone();
    return r.fields = t, r._nodes = mr(t, e), r._sortErrors = tt(Object.keys(t)), e && (r._excludedEdges = e), r;
  }
  shape(t, e = []) {
    return this.clone().withMutation((r) => {
      let n = r._excludedEdges;
      return e.length && (Array.isArray(e[0]) || (e = [e]), n = [...r._excludedEdges, ...e]), r.setFields(Object.assign(r.fields, t), n);
    });
  }
  partial() {
    const t = {};
    for (const [e, r] of Object.entries(this.fields))
      t[e] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
    return this.setFields(t);
  }
  deepPartial() {
    return le(this);
  }
  pick(t) {
    const e = {};
    for (const r of t)
      this.fields[r] && (e[r] = this.fields[r]);
    return this.setFields(e, this._excludedEdges.filter(([r, n]) => t.includes(r) && t.includes(n)));
  }
  omit(t) {
    const e = [];
    for (const r of Object.keys(this.fields))
      t.includes(r) || e.push(r);
    return this.pick(e);
  }
  from(t, e, r) {
    let n = Z.getter(t, !0);
    return this.transform((i) => {
      if (!i) return i;
      let a = i;
      return gr(i, t) && (a = Object.assign({}, i), r || delete a[t], a[e] = n(i)), a;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(xr);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || oe.exact,
      test(e) {
        if (e == null) return !0;
        const r = qe(this.schema, e);
        return r.length === 0 || this.createError({
          params: {
            properties: r.join(", ")
          }
        });
      }
    });
  }
  stripUnknown() {
    return this.clone({
      noUnknown: !0
    });
  }
  noUnknown(t = !0, e = oe.noUnknown) {
    typeof t != "boolean" && (e = t, t = !0);
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: e,
      test(n) {
        if (n == null) return !0;
        const i = qe(this.schema, n);
        return !t || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return r.spec.noUnknown = t, r;
  }
  unknown(t = !0, e = oe.noUnknown) {
    return this.noUnknown(!t, e);
  }
  transformKeys(t) {
    return this.transform((e) => {
      if (!e) return e;
      const r = {};
      for (const n of Object.keys(e)) r[t(n)] = e[n];
      return r;
    });
  }
  camelCase() {
    return this.transformKeys(be.camelCase);
  }
  snakeCase() {
    return this.transformKeys(be.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => be.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const e = (t ? this.resolve(t) : this).clone(), r = super.describe(t);
    r.fields = {};
    for (const [i, a] of Object.entries(e.fields)) {
      var n;
      let l = t;
      (n = l) != null && n.value && (l = Object.assign({}, l, {
        parent: l.value,
        value: l.value[i]
      })), r.fields[i] = a.describe(l);
    }
    return r;
  }
}
rt.prototype = nt.prototype;
const yr = rt({
  email: we().email("Enter a valid email").required("Email is required"),
  password: we().required("Password is required")
}), Fr = ({
  onSubmit: s,
  isSubmitting: t = !1,
  error: e,
  logo: r,
  title: n = "Sign in to your account"
}) => /* @__PURE__ */ c.jsx(xt, { component: "main", maxWidth: "xs", children: /* @__PURE__ */ c.jsxs(
  de,
  {
    elevation: 3,
    sx: {
      marginTop: 8,
      padding: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    children: [
      r && /* @__PURE__ */ c.jsx(N, { mb: 2, children: r }),
      /* @__PURE__ */ c.jsx(q, { component: "h1", variant: "h5", children: n }),
      e && /* @__PURE__ */ c.jsx(gt, { severity: "error", sx: { width: "100%", mt: 2 }, children: e.message }),
      /* @__PURE__ */ c.jsx(N, { sx: { mt: 1, width: "100%" }, children: /* @__PURE__ */ c.jsxs(
        Nt,
        {
          onSubmit: s,
          validationSchema: yr,
          noValidate: !0,
          children: [
            /* @__PURE__ */ c.jsx(
              Pe,
              {
                margin: "normal",
                required: !0,
                fullWidth: !0,
                id: "email",
                label: "Email Address",
                name: "email",
                autoComplete: "email",
                autoFocus: !0
              }
            ),
            /* @__PURE__ */ c.jsx(
              Pe,
              {
                margin: "normal",
                required: !0,
                fullWidth: !0,
                name: "password",
                label: "Password",
                type: "password",
                id: "password",
                autoComplete: "current-password"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Ee,
              {
                type: "submit",
                fullWidth: !0,
                variant: "contained",
                sx: { mt: 3, mb: 2 },
                disabled: t,
                children: t ? /* @__PURE__ */ c.jsx(We, { size: 24 }) : "Sign In"
              }
            )
          ]
        }
      ) })
    ]
  }
) }), J = 240, jr = ({
  navItems: s = [],
  title: t = "Dashboard",
  drawerHeader: e,
  headerActions: r,
  children: n
}) => {
  const [i, a] = R(!1), l = () => {
    a(!i);
  }, u = /* @__PURE__ */ c.jsxs(N, { children: [
    e ? /* @__PURE__ */ c.jsx(H, { sx: { justifyContent: "center" }, children: e }) : null,
    /* @__PURE__ */ c.jsx(bt, { children: s.map((d, f) => /* @__PURE__ */ c.jsx(yt, { disablePadding: !0, children: /* @__PURE__ */ c.jsxs(vt, { component: d.component || "a", href: d.path, children: [
      d.icon && /* @__PURE__ */ c.jsx(wt, { children: d.icon }),
      /* @__PURE__ */ c.jsx(Et, { primary: d.text })
    ] }) }, f)) })
  ] });
  return /* @__PURE__ */ c.jsxs(N, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ c.jsx(_t, {}),
    /* @__PURE__ */ c.jsx(
      St,
      {
        position: "fixed",
        sx: {
          width: { sm: `calc(100% - ${J}px)` },
          ml: { sm: `${J}px` }
        },
        children: /* @__PURE__ */ c.jsxs(H, { children: [
          /* @__PURE__ */ c.jsx(
            Tt,
            {
              color: "inherit",
              "aria-label": "open drawer",
              edge: "start",
              onClick: l,
              sx: { mr: 2, display: { sm: "none" } },
              children: /* @__PURE__ */ c.jsx(jt, {})
            }
          ),
          /* @__PURE__ */ c.jsx(q, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1 }, children: t }),
          r
        ] })
      }
    ),
    /* @__PURE__ */ c.jsxs(
      N,
      {
        component: "nav",
        sx: { width: { sm: J }, flexShrink: { sm: 0 } },
        children: [
          /* @__PURE__ */ c.jsx(
            Ce,
            {
              variant: "temporary",
              open: i,
              onClose: l,
              ModalProps: { keepMounted: !0 },
              sx: {
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: J }
              },
              children: u
            }
          ),
          /* @__PURE__ */ c.jsx(
            Ce,
            {
              variant: "permanent",
              sx: {
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: J }
              },
              open: !0,
              children: u
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      N,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${J}px)` },
          minHeight: "100vh",
          backgroundColor: (d) => d.palette.grey[100]
        },
        children: [
          /* @__PURE__ */ c.jsx(H, {}),
          n
        ]
      }
    )
  ] });
};
export {
  jr as DashboardLayout,
  Pt as DataTable,
  Sr as FileUploadField,
  Nt as Form,
  _e as FormContext,
  Fr as LoginPage,
  Or as ResourceFormPage,
  Tr as ResourceListPage,
  _r as StatCard,
  Pe as TextField
};
