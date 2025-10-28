import Me, { createContext as rr, useState as G, useCallback as dt, useContext as Ze, useEffect as Ce, useLayoutEffect as Qr, useMemo as sr, useRef as _e, useDebugValue as es } from "react";
import { Paper as St, Box as X, Typography as we, Toolbar as Ie, TableContainer as ts, Table as ns, TableHead as rs, TableRow as ze, TableCell as He, TableSortLabel as ss, TableBody as is, TablePagination as os, CircularProgress as Xe, TextField as on, Avatar as as, Button as Ke, Autocomplete as us, FormControlLabel as ir, Switch as or, Alert as zt, Container as ls, List as cs, ListItem as fs, ListItemButton as ds, ListItemIcon as hs, ListItemText as ps, CssBaseline as ms, AppBar as ys, IconButton as bs, Drawer as xn } from "@mui/material";
import { ImageNotSupported as gs, Add as xs, Search as Es, Menu as ws } from "@mui/icons-material";
function Ss(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var it = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function Os() {
  if (En) return We;
  En = 1;
  var n = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var a in s)
        a !== "key" && (o[a] = s[a]);
    } else o = s;
    return s = o.ref, {
      $$typeof: n,
      type: r,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return We.Fragment = e, We.jsx = t, We.jsxs = t, We;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function _s() {
  return wn || (wn = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(y) {
      if (y == null) return null;
      if (typeof y == "function")
        return y.$$typeof === j ? null : y.displayName || y.name || null;
      if (typeof y == "string") return y;
      switch (y) {
        case x:
          return "Fragment";
        case w:
          return "Profiler";
        case p:
          return "StrictMode";
        case R:
          return "Suspense";
        case C:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof y == "object")
        switch (typeof y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), y.$$typeof) {
          case m:
            return "Portal";
          case v:
            return y.displayName || "Context";
          case S:
            return (y._context.displayName || "Context") + ".Consumer";
          case O:
            var _ = y.render;
            return y = y.displayName, y || (y = _.displayName || _.name || "", y = y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef"), y;
          case A:
            return _ = y.displayName || null, _ !== null ? _ : n(y.type) || "Memo";
          case $:
            _ = y._payload, y = y._init;
            try {
              return n(y(_));
            } catch {
            }
        }
      return null;
    }
    function e(y) {
      return "" + y;
    }
    function t(y) {
      try {
        e(y);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var P = _.error, I = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return P.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), e(y);
      }
    }
    function r(y) {
      if (y === x) return "<>";
      if (typeof y == "object" && y !== null && y.$$typeof === $)
        return "<...>";
      try {
        var _ = n(y);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var y = N.A;
      return y === null ? null : y.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(y) {
      if (U.call(y, "key")) {
        var _ = Object.getOwnPropertyDescriptor(y, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return y.key !== void 0;
    }
    function a(y, _) {
      function P() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(y, "key", {
        get: P,
        configurable: !0
      });
    }
    function u() {
      var y = n(this.type);
      return ue[y] || (ue[y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), y = this.props.ref, y !== void 0 ? y : null;
    }
    function c(y, _, P, I, se, De) {
      var V = P.ref;
      return y = {
        $$typeof: f,
        type: y,
        key: _,
        props: P,
        _owner: I
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(y, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(y, "ref", { enumerable: !1, value: null }), y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(y, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.defineProperty(y, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: De
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    }
    function l(y, _, P, I, se, De) {
      var V = _.children;
      if (V !== void 0)
        if (I)
          if (k(V)) {
            for (I = 0; I < V.length; I++)
              d(V[I]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(V);
      if (U.call(_, "key")) {
        V = n(y);
        var ge = Object.keys(_).filter(function(Oe) {
          return Oe !== "key";
        });
        I = 0 < ge.length ? "{key: someKey, " + ge.join(": ..., ") + ": ...}" : "{key: someKey}", ke[V + I] || (ge = 0 < ge.length ? "{" + ge.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          V,
          ge,
          V
        ), ke[V + I] = !0);
      }
      if (V = null, P !== void 0 && (t(P), V = "" + P), i(_) && (t(_.key), V = "" + _.key), "key" in _) {
        P = {};
        for (var Be in _)
          Be !== "key" && (P[Be] = _[Be]);
      } else P = _;
      return V && a(
        P,
        typeof y == "function" ? y.displayName || y.name || "Unknown" : y
      ), c(
        y,
        V,
        P,
        s(),
        se,
        De
      );
    }
    function d(y) {
      b(y) ? y._store && (y._store.validated = 1) : typeof y == "object" && y !== null && y.$$typeof === $ && (y._payload.status === "fulfilled" ? b(y._payload.value) && y._payload.value._store && (y._payload.value._store.validated = 1) : y._store && (y._store.validated = 1));
    }
    function b(y) {
      return typeof y == "object" && y !== null && y.$$typeof === f;
    }
    var g = Me, f = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), v = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), j = Symbol.for("react.client.reference"), N = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, k = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(y) {
        return y();
      }
    };
    var H, ue = {}, W = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), be = z(r(o)), ke = {};
    Je.Fragment = x, Je.jsx = function(y, _, P) {
      var I = 1e4 > N.recentlyCreatedOwnerStacks++;
      return l(
        y,
        _,
        P,
        !1,
        I ? Error("react-stack-top-frame") : W,
        I ? z(r(y)) : be
      );
    }, Je.jsxs = function(y, _, P) {
      var I = 1e4 > N.recentlyCreatedOwnerStacks++;
      return l(
        y,
        _,
        P,
        !0,
        I ? Error("react-stack-top-frame") : W,
        I ? z(r(y)) : be
      );
    };
  })()), Je;
}
var Sn;
function Ts() {
  return Sn || (Sn = 1, process.env.NODE_ENV === "production" ? it.exports = Os() : it.exports = _s()), it.exports;
}
var E = Ts();
const $a = ({ icon: n, title: e, value: t, color: r, sx: s, onClick: o }) => /* @__PURE__ */ E.jsxs(
  St,
  {
    sx: {
      p: 3,
      display: "flex",
      alignItems: "center",
      gap: 2,
      height: "100%",
      cursor: o ? "pointer" : "default",
      ...s
    },
    onClick: o,
    elevation: 2,
    children: [
      /* @__PURE__ */ E.jsx(X, { sx: { color: r || "primary.main", fontSize: 40 }, "data-testid": "statcard-icon", children: n }),
      /* @__PURE__ */ E.jsxs(X, { children: [
        /* @__PURE__ */ E.jsx(we, { color: "text.secondary", children: e }),
        /* @__PURE__ */ E.jsx(we, { variant: "h5", sx: { fontWeight: "bold" }, children: t })
      ] })
    ]
  }
), Rs = () => /* @__PURE__ */ E.jsx(X, { sx: { p: 4, textAlign: "center" }, children: /* @__PURE__ */ E.jsx(we, { color: "text.secondary", children: "No rows" }) }), vs = () => /* @__PURE__ */ E.jsx(X, { sx: { display: "flex", justifyContent: "center", alignItems: "center", p: 4 }, children: /* @__PURE__ */ E.jsx(Xe, {}) }), As = ({
  rows: n = [],
  columns: e = [],
  getRowId: t = (S) => S.id,
  loading: r = !1,
  error: s,
  pagination: o = !1,
  rowCount: i = 0,
  page: a = 1,
  onPageChange: u = () => {
  },
  perPage: c = 10,
  onPerPageChange: l = () => {
  },
  perPageOptions: d = [10, 25, 100],
  sorting: b = !1,
  sortModel: g = [],
  onSortModelChange: f = () => {
  },
  showRowNumber: m = !0,
  slots: x = {},
  slotProps: p = {},
  sx: w
}) => {
  const {
    toolbar: S,
    noRowsOverlay: v = Rs,
    loadingOverlay: O = vs
  } = x, R = (T) => {
    if (!b) return;
    const j = g.find((U) => U.field === T);
    let N = j ? j.sort === "asc" ? [{ field: T, sort: "desc" }] : [] : [{ field: T, sort: "asc" }];
    f(N);
  }, C = g.length > 0 ? g[0] : null, A = [
    ...m ? [{
      field: "__rowNumber__",
      headerName: "#",
      width: 60,
      align: "center",
      renderCell: ({ index: T }) => a * c + T + 1
    }] : [],
    ...e
  ], $ = (T) => T.sticky ? {
    position: "sticky",
    [T.sticky]: 0,
    background: "white",
    zIndex: 1
  } : {};
  return /* @__PURE__ */ E.jsxs(St, { sx: w, children: [
    S && /* @__PURE__ */ E.jsx(Ie, { children: /* @__PURE__ */ E.jsx(S, { ...p.toolbar || {} }) }),
    /* @__PURE__ */ E.jsx(X, { sx: { width: "100%", overflowX: "auto" }, children: /* @__PURE__ */ E.jsx(ts, { children: /* @__PURE__ */ E.jsxs(ns, { stickyHeader: !0, children: [
      /* @__PURE__ */ E.jsx(rs, { children: /* @__PURE__ */ E.jsx(ze, { children: A.map((T) => /* @__PURE__ */ E.jsx(
        He,
        {
          align: T.align || "inherit",
          width: T.width,
          sx: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", ...$(T) },
          sortDirection: C?.field === T.field ? C.sort : !1,
          children: T.sortable && b ? /* @__PURE__ */ E.jsx(
            ss,
            {
              active: C?.field === T.field,
              direction: C?.field === T.field ? C.sort : "asc",
              onClick: () => R(T.field),
              children: T.headerName
            }
          ) : T.headerName
        },
        T.field
      )) }) }),
      /* @__PURE__ */ E.jsx(is, { children: r ? /* @__PURE__ */ E.jsx(ze, { children: /* @__PURE__ */ E.jsx(He, { colSpan: A.length, sx: { border: "none" }, children: /* @__PURE__ */ E.jsx(O, { ...p.loadingOverlay || {} }) }) }) : s ? /* @__PURE__ */ E.jsx(ze, { children: /* @__PURE__ */ E.jsx(He, { colSpan: A.length, sx: { border: "none", textAlign: "center" }, children: /* @__PURE__ */ E.jsx(we, { color: "error", children: s.message || "An error occurred." }) }) }) : n.length === 0 ? /* @__PURE__ */ E.jsx(ze, { children: /* @__PURE__ */ E.jsx(He, { colSpan: A.length, sx: { border: "none" }, children: /* @__PURE__ */ E.jsx(v, { ...p.noRowsOverlay || {} }) }) }) : n.map((T, j) => /* @__PURE__ */ E.jsx(ze, { hover: !0, children: A.map((N) => {
        const U = N.field.split(".").reduce((k, z) => k?.[z], T);
        return /* @__PURE__ */ E.jsx(He, { align: N.align || "inherit", sx: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", ...$(N) }, children: N.renderCell ? N.renderCell({ value: U, row: T, id: t(T), index: j }) : U }, N.field);
      }) }, t(T))) })
    ] }) }) }),
    o && !s && n.length > 0 && /* @__PURE__ */ E.jsx(
      os,
      {
        component: "div",
        count: i,
        page: a - 1,
        onPageChange: (T, j) => u(j),
        rowsPerPage: c,
        onRowsPerPageChange: (T) => l(parseInt(T.target.value, 10)),
        rowsPerPageOptions: d,
        showFirstButton: !0,
        showLastButton: !0,
        labelRowsPerPage: null,
        labelDisplayedRows: ({ from: T, to: j, count: N }) => `${T} - ${j} | ${N}`,
        sx: { display: "flex", justifyContent: "center" }
      }
    )
  ] });
}, Qe = rr(null), ar = ({ initialValues: n = {}, onSubmit: e, validationSchema: t, children: r, ...s }) => {
  const [o, i] = G(n || {}), [a, u] = G({}), c = dt((b, g) => {
    i((f) => ({
      ...f,
      [b]: g
    })), a[b] && u((f) => ({
      ...f,
      [b]: void 0
    }));
  }, [a]), l = async (b) => {
    b.preventDefault(), u({});
    try {
      t && await t.validate(o, { abortEarly: !1 }), e && e(o);
    } catch (g) {
      if (g.inner) {
        const f = g.inner.reduce((m, x) => (m[x.path] = x.message, m), {});
        u(f);
      }
    }
  }, d = {
    values: o,
    setFieldValue: c,
    errors: a
  };
  return /* @__PURE__ */ E.jsx(Qe.Provider, { value: d, children: /* @__PURE__ */ E.jsx("form", { onSubmit: l, ...s, children: r }) });
}, On = ({ name: n, label: e, ...t }) => {
  const r = Ze(Qe);
  if (!r)
    throw new Error("TextField must be used within a Form component");
  const { values: s, setFieldValue: o, errors: i } = r, a = i[n], u = (c) => {
    o(n, c.target.value);
  };
  return /* @__PURE__ */ E.jsx(
    on,
    {
      name: n,
      label: e,
      value: s[n] || "",
      onChange: u,
      error: !!a,
      helperText: a || "",
      ...t
    }
  );
}, Na = ({ name: n, label: e = "Upload File", initialPreview: t }) => {
  const r = Ze(Qe), [s, o] = G(t || null);
  if (!r)
    throw new Error("FileUploadField must be used within a Form component");
  const { setFieldValue: i, values: a } = r, u = a[n];
  Ce(() => {
    t && o(t);
  }, [t]), Ce(() => {
    u || o(t || null);
  }, [u, t]);
  const c = (l) => {
    const d = l.target.files[0];
    if (d) {
      i(n, d);
      const b = new FileReader();
      b.onloadend = () => {
        o(b.result);
      }, b.readAsDataURL(d);
    }
  };
  return /* @__PURE__ */ E.jsxs(X, { sx: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }, children: [
    /* @__PURE__ */ E.jsx(as, { src: s, sx: { width: 100, height: 100 }, children: !s && /* @__PURE__ */ E.jsx(gs, { sx: { width: "70%", height: "70%" } }) }),
    /* @__PURE__ */ E.jsxs(Ke, { variant: "outlined", component: "label", children: [
      e,
      /* @__PURE__ */ E.jsx("input", { type: "file", hidden: !0, accept: "image/*", onChange: c, "data-testid": "file-upload-input" })
    ] })
  ] });
}, Pa = ({
  name: n,
  label: e,
  fetchOptions: t,
  getOptionLabel: r = (i) => i.label,
  multiple: s = !1,
  ...o
}) => {
  const i = Ze(Qe);
  if (!i)
    throw new Error("AutocompleteField must be used within a Form component");
  const { values: a, setFieldValue: u, errors: c } = i, [l, d] = G([]), [b, g] = G(!1), [f, m] = G("");
  Ce(() => {
    let w = !0;
    return g(!0), t(f).then((S) => {
      w && d(S || []);
    }).catch(() => {
      w && d([]);
    }).finally(() => {
      w && g(!1);
    }), () => {
      w = !1;
    };
  }, [f, t]);
  const x = (w, S) => {
    u(n, S);
  }, p = c?.[n];
  return /* @__PURE__ */ E.jsx(
    us,
    {
      multiple: s,
      options: l,
      loading: b,
      getOptionLabel: r,
      value: a[n] || (s ? [] : null),
      onChange: x,
      onInputChange: (w, S) => {
        m(S);
      },
      renderInput: (w) => /* @__PURE__ */ E.jsx(
        on,
        {
          ...w,
          label: e,
          error: !!p,
          helperText: p,
          InputProps: {
            ...w.InputProps,
            endAdornment: /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
              b ? /* @__PURE__ */ E.jsx(Xe, { color: "inherit", size: 20 }) : null,
              w.InputProps.endAdornment
            ] })
          }
        }
      ),
      ...o
    }
  );
}, La = ({ name: n, label: e, ...t }) => {
  const r = Ze(Qe);
  if (!r)
    throw new Error("SwitchField must be used within a Form component");
  const { values: s, setFieldValue: o } = r, i = (a) => {
    o(n, a.target.checked);
  };
  return /* @__PURE__ */ E.jsx(
    ir,
    {
      control: /* @__PURE__ */ E.jsx(
        or,
        {
          checked: !!s[n],
          onChange: i,
          name: n,
          ...t
        }
      ),
      label: e
    }
  );
};
var ot = { exports: {} }, Ft = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function Cs() {
  if (_n) return Ft;
  _n = 1;
  var n = Me;
  function e(d, b) {
    return d === b && (d !== 0 || 1 / d === 1 / b) || d !== d && b !== b;
  }
  var t = typeof Object.is == "function" ? Object.is : e, r = n.useState, s = n.useEffect, o = n.useLayoutEffect, i = n.useDebugValue;
  function a(d, b) {
    var g = b(), f = r({ inst: { value: g, getSnapshot: b } }), m = f[0].inst, x = f[1];
    return o(
      function() {
        m.value = g, m.getSnapshot = b, u(m) && x({ inst: m });
      },
      [d, g, b]
    ), s(
      function() {
        return u(m) && x({ inst: m }), d(function() {
          u(m) && x({ inst: m });
        });
      },
      [d]
    ), i(g), g;
  }
  function u(d) {
    var b = d.getSnapshot;
    d = d.value;
    try {
      var g = b();
      return !t(d, g);
    } catch {
      return !0;
    }
  }
  function c(d, b) {
    return b();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
  return Ft.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : l, Ft;
}
var jt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function Fs() {
  return Tn || (Tn = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(g, f) {
      return g === f && (g !== 0 || 1 / g === 1 / f) || g !== g && f !== f;
    }
    function e(g, f) {
      l || s.startTransition === void 0 || (l = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = f();
      if (!d) {
        var x = f();
        o(m, x) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      x = i({
        inst: { value: m, getSnapshot: f }
      });
      var p = x[0].inst, w = x[1];
      return u(
        function() {
          p.value = m, p.getSnapshot = f, t(p) && w({ inst: p });
        },
        [g, m, f]
      ), a(
        function() {
          return t(p) && w({ inst: p }), g(function() {
            t(p) && w({ inst: p });
          });
        },
        [g]
      ), c(m), m;
    }
    function t(g) {
      var f = g.getSnapshot;
      g = g.value;
      try {
        var m = f();
        return !o(g, m);
      } catch {
        return !0;
      }
    }
    function r(g, f) {
      return f();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var s = Me, o = typeof Object.is == "function" ? Object.is : n, i = s.useState, a = s.useEffect, u = s.useLayoutEffect, c = s.useDebugValue, l = !1, d = !1, b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : e;
    jt.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), jt;
}
var Rn;
function js() {
  return Rn || (Rn = 1, process.env.NODE_ENV === "production" ? ot.exports = Cs() : ot.exports = Fs()), ot.exports;
}
var ks = js();
const ur = 0, lr = 1, cr = 2, vn = 3;
var An = Object.prototype.hasOwnProperty;
function Ht(n, e) {
  var t, r;
  if (n === e) return !0;
  if (n && e && (t = n.constructor) === e.constructor) {
    if (t === Date) return n.getTime() === e.getTime();
    if (t === RegExp) return n.toString() === e.toString();
    if (t === Array) {
      if ((r = n.length) === e.length)
        for (; r-- && Ht(n[r], e[r]); ) ;
      return r === -1;
    }
    if (!t || typeof n == "object") {
      r = 0;
      for (t in n)
        if (An.call(n, t) && ++r && !An.call(e, t) || !(t in e) || !Ht(n[t], e[t])) return !1;
      return Object.keys(e).length === r;
    }
  }
  return n !== n && e !== e;
}
const ye = /* @__PURE__ */ new WeakMap(), xe = () => {
}, Y = (
  /*#__NOINLINE__*/
  xe()
), Wt = Object, D = (n) => n === Y, fe = (n) => typeof n == "function", Se = (n, e) => ({
  ...n,
  ...e
}), fr = (n) => fe(n.then), kt = {}, at = {}, an = "undefined", et = typeof window != an, Jt = typeof document != an, Ds = et && "Deno" in window, $s = () => et && typeof window.requestAnimationFrame != an, dr = (n, e) => {
  const t = ye.get(n);
  return [
    // Getter
    () => !D(e) && n.get(e) || kt,
    // Setter
    (r) => {
      if (!D(e)) {
        const s = n.get(e);
        e in at || (at[e] = s), t[5](e, Se(s, r), s || kt);
      }
    },
    // Subscriber
    t[6],
    // Get server cache snapshot
    () => !D(e) && e in at ? at[e] : !D(e) && n.get(e) || kt
  ];
};
let Gt = !0;
const Ns = () => Gt, [Kt, Yt] = et && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  xe,
  xe
], Ps = () => {
  const n = Jt && document.visibilityState;
  return D(n) || n !== "hidden";
}, Ls = (n) => (Jt && document.addEventListener("visibilitychange", n), Kt("focus", n), () => {
  Jt && document.removeEventListener("visibilitychange", n), Yt("focus", n);
}), Is = (n) => {
  const e = () => {
    Gt = !0, n();
  }, t = () => {
    Gt = !1;
  };
  return Kt("online", e), Kt("offline", t), () => {
    Yt("online", e), Yt("offline", t);
  };
}, Us = {
  isOnline: Ns,
  isVisible: Ps
}, Ms = {
  initFocus: Ls,
  initReconnect: Is
}, Cn = !Me.useId, Ye = !et || Ds, qs = (n) => $s() ? window.requestAnimationFrame(n) : setTimeout(n, 1), Dt = Ye ? Ce : Qr, $t = typeof navigator < "u" && navigator.connection, Fn = !Ye && $t && ([
  "slow-2g",
  "2g"
].includes($t.effectiveType) || $t.saveData), ut = /* @__PURE__ */ new WeakMap(), Vs = (n) => Wt.prototype.toString.call(n), Nt = (n, e) => n === `[object ${e}]`;
let Bs = 0;
const Zt = (n) => {
  const e = typeof n, t = Vs(n), r = Nt(t, "Date"), s = Nt(t, "RegExp"), o = Nt(t, "Object");
  let i, a;
  if (Wt(n) === n && !r && !s) {
    if (i = ut.get(n), i) return i;
    if (i = ++Bs + "~", ut.set(n, i), Array.isArray(n)) {
      for (i = "@", a = 0; a < n.length; a++)
        i += Zt(n[a]) + ",";
      ut.set(n, i);
    }
    if (o) {
      i = "#";
      const u = Wt.keys(n).sort();
      for (; !D(a = u.pop()); )
        D(n[a]) || (i += a + ":" + Zt(n[a]) + ",");
      ut.set(n, i);
    }
  } else
    i = r ? n.toJSON() : e == "symbol" ? n.toString() : e == "string" ? JSON.stringify(n) : "" + n;
  return i;
}, un = (n) => {
  if (fe(n))
    try {
      n = n();
    } catch {
      n = "";
    }
  const e = n;
  return n = typeof n == "string" ? n : (Array.isArray(n) ? n.length : n) ? Zt(n) : "", [
    n,
    e
  ];
};
let zs = 0;
const Xt = () => ++zs;
async function hr(...n) {
  const [e, t, r, s] = n, o = Se({
    populateCache: !0,
    throwOnError: !0
  }, typeof s == "boolean" ? {
    revalidate: s
  } : s || {});
  let i = o.populateCache;
  const a = o.rollbackOnError;
  let u = o.optimisticData;
  const c = (b) => typeof a == "function" ? a(b) : a !== !1, l = o.throwOnError;
  if (fe(t)) {
    const b = t, g = [], f = e.keys();
    for (const m of f)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(m) && b(e.get(m)._k) && g.push(m);
    return Promise.all(g.map(d));
  }
  return d(t);
  async function d(b) {
    const [g] = un(b);
    if (!g) return;
    const [f, m] = dr(e, g), [x, p, w, S] = ye.get(e), v = () => {
      const k = x[g];
      return (fe(o.revalidate) ? o.revalidate(f().data, b) : o.revalidate !== !1) && (delete w[g], delete S[g], k && k[0]) ? k[0](cr).then(() => f().data) : f().data;
    };
    if (n.length < 3)
      return v();
    let O = r, R, C = !1;
    const A = Xt();
    p[g] = [
      A,
      0
    ];
    const $ = !D(u), T = f(), j = T.data, N = T._c, U = D(N) ? j : N;
    if ($ && (u = fe(u) ? u(U, j) : u, m({
      data: u,
      _c: U
    })), fe(O))
      try {
        O = O(U);
      } catch (k) {
        R = k, C = !0;
      }
    if (O && fr(O))
      if (O = await O.catch((k) => {
        R = k, C = !0;
      }), A !== p[g][0]) {
        if (C) throw R;
        return O;
      } else C && $ && c(R) && (i = !0, m({
        data: U,
        _c: Y
      }));
    if (i && !C)
      if (fe(i)) {
        const k = i(O, U);
        m({
          data: k,
          error: Y,
          _c: Y
        });
      } else
        m({
          data: O,
          error: Y,
          _c: Y
        });
    if (p[g][1] = Xt(), Promise.resolve(v()).then(() => {
      m({
        _c: Y
      });
    }), C) {
      if (l) throw R;
      return;
    }
    return O;
  }
}
const jn = (n, e) => {
  for (const t in n)
    n[t][0] && n[t][0](e);
}, Hs = (n, e) => {
  if (!ye.has(n)) {
    const t = Se(Ms, e), r = /* @__PURE__ */ Object.create(null), s = hr.bind(Y, n);
    let o = xe;
    const i = /* @__PURE__ */ Object.create(null), a = (l, d) => {
      const b = i[l] || [];
      return i[l] = b, b.push(d), () => b.splice(b.indexOf(d), 1);
    }, u = (l, d, b) => {
      n.set(l, d);
      const g = i[l];
      if (g)
        for (const f of g)
          f(d, b);
    }, c = () => {
      if (!ye.has(n) && (ye.set(n, [
        r,
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        s,
        u,
        a
      ]), !Ye)) {
        const l = t.initFocus(setTimeout.bind(Y, jn.bind(Y, r, ur))), d = t.initReconnect(setTimeout.bind(Y, jn.bind(Y, r, lr)));
        o = () => {
          l && l(), d && d(), ye.delete(n);
        };
      }
    };
    return c(), [
      n,
      s,
      c,
      o
    ];
  }
  return [
    n,
    ye.get(n)[4]
  ];
}, Ws = (n, e, t, r, s) => {
  const o = t.errorRetryCount, i = s.retryCount, a = ~~((Math.random() + 0.5) * (1 << (i < 8 ? i : 8))) * t.errorRetryInterval;
  !D(o) && i > o || setTimeout(r, a, s);
}, Js = Ht, [pr, Gs] = Hs(/* @__PURE__ */ new Map()), Ks = Se(
  {
    // events
    onLoadingSlow: xe,
    onSuccess: xe,
    onError: xe,
    onErrorRetry: Ws,
    onDiscarded: xe,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: Fn ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Fn ? 5e3 : 3e3,
    // providers
    compare: Js,
    isPaused: () => !1,
    cache: pr,
    mutate: Gs,
    fallback: {}
  },
  // use web preset by default
  Us
), Ys = (n, e) => {
  const t = Se(n, e);
  if (e) {
    const { use: r, fallback: s } = n, { use: o, fallback: i } = e;
    r && o && (t.use = r.concat(o)), s && i && (t.fallback = Se(s, i));
  }
  return t;
}, Zs = rr({}), Xs = "$inf$", mr = et && window.__SWR_DEVTOOLS_USE__, Qs = mr ? window.__SWR_DEVTOOLS_USE__ : [], ei = () => {
  mr && (window.__SWR_DEVTOOLS_REACT__ = Me);
}, ti = (n) => fe(n[1]) ? [
  n[0],
  n[1],
  n[2] || {}
] : [
  n[0],
  null,
  (n[1] === null ? n[2] : n[1]) || {}
], ni = () => {
  const n = Ze(Zs);
  return sr(() => Se(Ks, n), [
    n
  ]);
}, ri = (n) => (e, t, r) => n(e, t && ((...o) => {
  const [i] = un(e), [, , , a] = ye.get(pr);
  if (i.startsWith(Xs))
    return t(...o);
  const u = a[i];
  return D(u) ? t(...o) : (delete a[i], u);
}), r), si = Qs.concat(ri), ii = (n) => function(...t) {
  const r = ni(), [s, o, i] = ti(t), a = Ys(r, i);
  let u = n;
  const { use: c } = a, l = (c || []).concat(si);
  for (let d = l.length; d--; )
    u = l[d](u);
  return u(s, o || a.fetcher || null, a);
}, oi = (n, e, t) => {
  const r = e[n] || (e[n] = []);
  return r.push(t), () => {
    const s = r.indexOf(t);
    s >= 0 && (r[s] = r[r.length - 1], r.pop());
  };
};
ei();
const Pt = Me.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((n) => {
  switch (n.status) {
    case "pending":
      throw n;
    case "fulfilled":
      return n.value;
    case "rejected":
      throw n.reason;
    default:
      throw n.status = "pending", n.then((e) => {
        n.status = "fulfilled", n.value = e;
      }, (e) => {
        n.status = "rejected", n.reason = e;
      }), n;
  }
}), Lt = {
  dedupe: !0
}, kn = Promise.resolve(Y), ai = (n, e, t) => {
  const { cache: r, compare: s, suspense: o, fallbackData: i, revalidateOnMount: a, revalidateIfStale: u, refreshInterval: c, refreshWhenHidden: l, refreshWhenOffline: d, keepPreviousData: b } = t, [g, f, m, x] = ye.get(r), [p, w] = un(n), S = _e(!1), v = _e(!1), O = _e(p), R = _e(e), C = _e(t), A = () => C.current, $ = () => A().isVisible() && A().isOnline(), [T, j, N, U] = dr(r, p), k = _e({}).current, z = D(i) ? D(t.fallback) ? Y : t.fallback[p] : i, H = (L, q) => {
    for (const J in k) {
      const M = J;
      if (M === "data") {
        if (!s(L[M], q[M]) && (!D(L[M]) || !s(se, q[M])))
          return !1;
      } else if (q[M] !== L[M])
        return !1;
    }
    return !0;
  }, ue = sr(() => {
    const L = !p || !e ? !1 : D(a) ? A().isPaused() || o ? !1 : u !== !1 : a, q = (Q) => {
      const he = Se(Q);
      return delete he._k, L ? {
        isValidating: !0,
        isLoading: !0,
        ...he
      } : he;
    }, J = T(), M = U(), oe = q(J), $e = J === M ? oe : q(M);
    let K = oe;
    return [
      () => {
        const Q = q(T());
        return H(Q, K) ? (K.data = Q.data, K.isLoading = Q.isLoading, K.isValidating = Q.isValidating, K.error = Q.error, K) : (K = Q, Q);
      },
      () => $e
    ];
  }, [
    r,
    p
  ]), W = ks.useSyncExternalStore(dt(
    (L) => N(p, (q, J) => {
      H(J, q) || L();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      r,
      p
    ]
  ), ue[0], ue[1]), be = !S.current, ke = g[p] && g[p].length > 0, y = W.data, _ = D(y) ? z && fr(z) ? Pt(z) : z : y, P = W.error, I = _e(_), se = b ? D(y) ? D(I.current) ? _ : I.current : y : _, De = ke && !D(P) ? !1 : be && !D(a) ? a : A().isPaused() ? !1 : o ? D(_) ? !1 : u : D(_) || u, V = !!(p && e && be && De), ge = D(W.isValidating) ? V : W.isValidating, Be = D(W.isLoading) ? V : W.isLoading, Oe = dt(
    async (L) => {
      const q = R.current;
      if (!p || !q || v.current || A().isPaused())
        return !1;
      let J, M, oe = !0;
      const $e = L || {}, K = !m[p] || !$e.dedupe, Q = () => Cn ? !v.current && p === O.current && S.current : p === O.current, he = {
        isValidating: !1,
        isLoading: !1
      }, yn = () => {
        j(he);
      }, bn = () => {
        const ie = m[p];
        ie && ie[1] === M && delete m[p];
      }, gn = {
        isValidating: !0
      };
      D(T().data) && (gn.isLoading = !0);
      try {
        if (K && (j(gn), t.loadingTimeout && D(T().data) && setTimeout(() => {
          oe && Q() && A().onLoadingSlow(p, t);
        }, t.loadingTimeout), m[p] = [
          q(w),
          Xt()
        ]), [J, M] = m[p], J = await J, K && setTimeout(bn, t.dedupingInterval), !m[p] || m[p][1] !== M)
          return K && Q() && A().onDiscarded(p), !1;
        he.error = Y;
        const ie = f[p];
        if (!D(ie) && // case 1
        (M <= ie[0] || // case 2
        M <= ie[1] || // case 3
        ie[1] === 0))
          return yn(), K && Q() && A().onDiscarded(p), !1;
        const pe = T().data;
        he.data = s(pe, J) ? pe : J, K && Q() && A().onSuccess(J, p, t);
      } catch (ie) {
        bn();
        const pe = A(), { shouldRetryOnError: At } = pe;
        pe.isPaused() || (he.error = ie, K && Q() && (pe.onError(ie, p, pe), (At === !0 || fe(At) && At(ie)) && (!A().revalidateOnFocus || !A().revalidateOnReconnect || $()) && pe.onErrorRetry(ie, p, pe, (Xr) => {
          const Ct = g[p];
          Ct && Ct[0] && Ct[0](vn, Xr);
        }, {
          retryCount: ($e.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return oe = !1, yn(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      p,
      r
    ]
  ), mn = dt(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...L) => hr(r, O.current, ...L),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Dt(() => {
    R.current = e, C.current = t, D(y) || (I.current = y);
  }), Dt(() => {
    if (!p) return;
    const L = Oe.bind(Y, Lt);
    let q = 0;
    A().revalidateOnFocus && (q = Date.now() + A().focusThrottleInterval);
    const M = oi(p, g, (oe, $e = {}) => {
      if (oe == ur) {
        const K = Date.now();
        A().revalidateOnFocus && K > q && $() && (q = K + A().focusThrottleInterval, L());
      } else if (oe == lr)
        A().revalidateOnReconnect && $() && L();
      else {
        if (oe == cr)
          return Oe();
        if (oe == vn)
          return Oe($e);
      }
    });
    return v.current = !1, O.current = p, S.current = !0, j({
      _k: w
    }), De && (m[p] || (D(_) || Ye ? L() : qs(L))), () => {
      v.current = !0, M();
    };
  }, [
    p
  ]), Dt(() => {
    let L;
    function q() {
      const M = fe(c) ? c(T().data) : c;
      M && L !== -1 && (L = setTimeout(J, M));
    }
    function J() {
      !T().error && (l || A().isVisible()) && (d || A().isOnline()) ? Oe(Lt).then(q) : q();
    }
    return q(), () => {
      L && (clearTimeout(L), L = -1);
    };
  }, [
    c,
    l,
    d,
    p
  ]), es(se), o) {
    const L = p && D(_);
    if (!Cn && Ye && L)
      throw new Error("Fallback data is required when using Suspense in SSR.");
    L && (R.current = e, C.current = t, v.current = !1);
    const q = x[p], J = !D(q) && L ? mn(q) : kn;
    if (Pt(J), !D(P) && L)
      throw P;
    const M = L ? Oe(Lt) : kn;
    !D(se) && L && (M.status = "fulfilled", M.value = !0), Pt(M);
  }
  return {
    mutate: mn,
    get data() {
      return k.data = !0, se;
    },
    get error() {
      return k.error = !0, P;
    },
    get isValidating() {
      return k.isValidating = !0, ge;
    },
    get isLoading() {
      return k.isLoading = !0, Be;
    }
  };
}, ui = ii(ai), li = {
  // Network & Generic Errors
  "Network Error": "مشكلة في الشبكة، يرجى التحقق من اتصالك بالإنترنت.",
  "Request failed with status code 500": "حدث خطأ في الخادم، يرجى المحاولة مرة أخرى لاحقاً.",
  "Request failed with status code 401": "غير مصرح لك بالقيام بهذه العملية.",
  "Request failed with status code 403": "ليس لديك الصلاحية للوصول إلى هذا المورد.",
  "Request failed with status code 404": "المورد المطلوب غير موجود.",
  "Request failed with status code 400": "طلب غير صالح، يرجى التحقق من البيانات المدخلة.",
  "Request failed with status code 422": "خطأ في التحقق من البيانات المدخلة.",
  "Request failed with status code 409": "تعارض في البيانات، يرجى التحقق والمحاولة مرة أخرى.",
  "Request failed with status code 429": "عدد كبير جداً من الطلبات. يرجى المحاولة لاحقاً.",
  "Timeout exceeded": "انتهت مهلة الاتصال بالخادم، يرجى المحاولة مرة أخرى."
}, ci = (n = {}) => {
  const e = { ...li, ...n };
  return (t) => {
    if (!t) return "حدث خطأ غير متوقع.";
    const r = t.response?.data;
    if (r && r.errors) {
      const i = [];
      for (const a in r.errors)
        for (const u in r.errors[a]) {
          const c = r.errors[a][u];
          i.push(`${u}: ${c.join(", ")}`);
        }
      if (i.length > 0)
        return i.join(" | ");
    }
    const s = r?.error_code === "BUSINESS_LOGIC_ERROR" && r?.message;
    if (s)
      return s;
    const o = t.message;
    return o && e[o] ? e[o] : "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.";
  };
}, yr = ci(), fi = (n, e, t = {}) => {
  const { data: r, error: s, isLoading: o, mutate: i } = ui(n, e, {
    ...t,
    onError: (a) => {
      t.onError && t.onError(a);
    }
  });
  return {
    data: r,
    error: s,
    getTranslatedError: yr,
    isLoading: o,
    mutate: i
  };
}, Ia = (n, { onSuccess: e, onError: t } = {}) => {
  const [r, s] = G(!1);
  return { handleMutation: async (i) => {
    s(!0);
    try {
      const a = await n(i);
      return e?.(a), a;
    } catch (a) {
      throw t?.(a), a;
    } finally {
      s(!1);
    }
  }, isMutating: r, getTranslatedError: yr };
}, di = (n, e) => {
  const [t, r] = G(n);
  return Ce(() => {
    const s = setTimeout(() => {
      r(n);
    }, e);
    return () => {
      clearTimeout(s);
    };
  }, [n, e]), t;
}, hi = ({ resourceName: n, createPath: e, createText: t, linkComponent: r }) => {
  const s = r;
  return /* @__PURE__ */ E.jsxs(Ie, { sx: { p: "0 !important", mb: 2, display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" } }, children: [
    /* @__PURE__ */ E.jsx(we, { variant: "h4", component: "h1", sx: { flexGrow: 1, mb: { xs: 2, sm: 0 } }, children: n }),
    e && /* @__PURE__ */ E.jsx(
      Ke,
      {
        variant: "contained",
        startIcon: /* @__PURE__ */ E.jsx(xs, {}),
        ...s ? { component: s, to: e } : { href: e },
        children: t
      }
    )
  ] });
}, pi = ({ searchable: n, searchQuery: e, setSearchQuery: t, filterOptions: r, filters: s, handleFilterChange: o, searchPlaceholder: i }) => /* @__PURE__ */ E.jsxs(X, { sx: { display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mb: 2, alignItems: "stretch" }, children: [
  r.map((a) => /* @__PURE__ */ E.jsx(
    ir,
    {
      control: /* @__PURE__ */ E.jsx(or, { checked: s[a.name], onChange: o, name: a.name }),
      label: a.label
    },
    a.name
  )),
  n && /* @__PURE__ */ E.jsx(
    on,
    {
      label: i,
      variant: "outlined",
      value: e,
      onChange: (a) => t(a.target.value),
      InputProps: { endAdornment: /* @__PURE__ */ E.jsx(Es, { color: "action" }) },
      sx: { flexGrow: 1, minWidth: "200px" }
    }
  )
] }), Ua = ({
  resourceName: n,
  columns: e,
  api: t,
  dataAdapter: r = (f) => f,
  createPath: s,
  createText: o = "Create New",
  searchable: i = !1,
  searchPlaceholder: a = "Search...",
  filterOptions: u = [],
  sorting: c = !1,
  showRowNumber: l = !0,
  // Added prop
  linkComponent: d,
  renderHeader: b = hi,
  renderFilters: g = pi
}) => {
  const [f, m] = G(1), [x, p] = G(10), [w, S] = G([]), [v, O] = G(""), [R, C] = G(
    () => u.reduce((k, z) => ({ ...k, [z.name]: !1 }), {})
  ), A = di(v, 500), { data: $, isLoading: T, error: j, mutate: N } = fi(
    [n, f, x, A, R.include_deleted],
    () => t.list({ page: f, per_page: x, q: A, deleted_state: R.include_deleted ? "all" : "active" }),
    { keepPreviousData: !0 }
  );
  Ce(() => {
    N();
  }, [$]);
  const U = (k) => {
    const { name: z, checked: H } = k.target;
    C((ue) => ({ ...ue, [z]: H })), m(1);
  };
  return /* @__PURE__ */ E.jsxs(X, { children: [
    b({ resourceName: n, createPath: s, createText: o, linkComponent: d }),
    g({
      searchable: i,
      searchQuery: v,
      setSearchQuery: O,
      filterOptions: u,
      filters: R,
      handleFilterChange: U,
      searchPlaceholder: a
    }),
    /* @__PURE__ */ E.jsx(
      As,
      {
        rows: $?.items,
        columns: e,
        loading: T,
        error: j,
        pagination: !0,
        rowCount: $?.pagination.total || 0,
        page: f,
        onPageChange: m,
        perPage: x,
        onPerPageChange: (k) => {
          p(k), m(1);
        },
        sorting: c,
        sortModel: w,
        onSortModelChange: (k) => {
          S(k), m(1);
        },
        showRowNumber: l
      }
    )
  ] });
}, mi = ({ isSubmitting: n, onCancel: e }) => /* @__PURE__ */ E.jsxs(X, { sx: { mt: 3, display: "flex", gap: 2 }, children: [
  /* @__PURE__ */ E.jsx(
    Ke,
    {
      type: "submit",
      variant: "contained",
      disabled: n,
      children: n ? /* @__PURE__ */ E.jsx(Xe, { size: 24 }) : "Save"
    }
  ),
  e && /* @__PURE__ */ E.jsx(Ke, { variant: "outlined", onClick: e, disabled: n, children: "Cancel" })
] }), Ma = ({
  resourceName: n,
  id: e,
  api: t,
  FormComponent: r,
  onSuccess: s = () => {
  },
  onCancel: o,
  responseAdapter: i = (c) => c,
  requestAdapter: a = (c) => c,
  renderActions: u = mi
}) => {
  const [c, l] = G(null), [d, b] = G(!1), [g, f] = G(null), [m, x] = G(!1), p = e != null;
  Ce(() => {
    p && (b(!0), f(null), t.getOne(e).then((v) => l(i(v))).catch((v) => f(v)).finally(() => b(!1)));
  }, [t, e, p, i]);
  const w = async (v) => {
    x(!0), f(null);
    const O = a(v);
    try {
      const R = p ? await t.update(e, O) : await t.create(O);
      s(R.data);
    } catch (R) {
      f(R), x(!1);
    }
  }, S = p ? `Edit ${n}` : `Create ${n}`;
  return d ? /* @__PURE__ */ E.jsx(Xe, {}) : g && !m ? /* @__PURE__ */ E.jsx(zt, { severity: "error", children: g.message || "Failed to load resource data." }) : /* @__PURE__ */ E.jsxs(X, { children: [
    /* @__PURE__ */ E.jsx(Ie, { sx: { p: "0 !important", mb: 2 }, children: /* @__PURE__ */ E.jsx(we, { variant: "h4", component: "h1", children: S }) }),
    /* @__PURE__ */ E.jsx(St, { sx: { p: 3 }, children: (!p || c) && /* @__PURE__ */ E.jsxs(ar, { onSubmit: w, initialValues: c, children: [
      /* @__PURE__ */ E.jsx(r, {}),
      g && m && /* @__PURE__ */ E.jsx(zt, { severity: "error", sx: { mt: 2 }, children: g.message || "An error occurred during submission." }),
      u({ isSubmitting: m, onCancel: o })
    ] }) })
  ] });
};
var It, Dn;
function yi() {
  if (Dn) return It;
  Dn = 1;
  function n(p) {
    this._maxSize = p, this.clear();
  }
  n.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, n.prototype.get = function(p) {
    return this._values[p];
  }, n.prototype.set = function(p, w) {
    return this._size >= this._maxSize && this.clear(), p in this._values || this._size++, this._values[p] = w;
  };
  var e = /[^.^\]^[]+|(?=\[\]|\.\.)/g, t = /^\d+$/, r = /^\d/, s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, o = /^\s*(['"]?)(.*?)(\1)\s*$/, i = 512, a = new n(i), u = new n(i), c = new n(i);
  It = {
    Cache: n,
    split: d,
    normalizePath: l,
    setter: function(p) {
      var w = l(p);
      return u.get(p) || u.set(p, function(v, O) {
        for (var R = 0, C = w.length, A = v; R < C - 1; ) {
          var $ = w[R];
          if ($ === "__proto__" || $ === "constructor" || $ === "prototype")
            return v;
          A = A[w[R++]];
        }
        A[w[R]] = O;
      });
    },
    getter: function(p, w) {
      var S = l(p);
      return c.get(p) || c.set(p, function(O) {
        for (var R = 0, C = S.length; R < C; )
          if (O != null || !w) O = O[S[R++]];
          else return;
        return O;
      });
    },
    join: function(p) {
      return p.reduce(function(w, S) {
        return w + (g(S) || t.test(S) ? "[" + S + "]" : (w ? "." : "") + S);
      }, "");
    },
    forEach: function(p, w, S) {
      b(Array.isArray(p) ? p : d(p), w, S);
    }
  };
  function l(p) {
    return a.get(p) || a.set(
      p,
      d(p).map(function(w) {
        return w.replace(o, "$2");
      })
    );
  }
  function d(p) {
    return p.match(e) || [""];
  }
  function b(p, w, S) {
    var v = p.length, O, R, C, A;
    for (R = 0; R < v; R++)
      O = p[R], O && (x(O) && (O = '"' + O + '"'), A = g(O), C = !A && /^\d+$/.test(O), w.call(S, O, A, C, R, p));
  }
  function g(p) {
    return typeof p == "string" && p && ["'", '"'].indexOf(p.charAt(0)) !== -1;
  }
  function f(p) {
    return p.match(r) && !p.match(t);
  }
  function m(p) {
    return s.test(p);
  }
  function x(p) {
    return !g(p) && (f(p) || m(p));
  }
  return It;
}
var ve = yi(), Ut, $n;
function bi() {
  if ($n) return Ut;
  $n = 1;
  const n = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, e = (l) => l.match(n) || [], t = (l) => l[0].toUpperCase() + l.slice(1), r = (l, d) => e(l).join(d).toLowerCase(), s = (l) => e(l).reduce(
    (d, b) => `${d}${d ? b[0].toUpperCase() + b.slice(1).toLowerCase() : b.toLowerCase()}`,
    ""
  );
  return Ut = {
    words: e,
    upperFirst: t,
    camelCase: s,
    pascalCase: (l) => t(s(l)),
    snakeCase: (l) => r(l, "_"),
    kebabCase: (l) => r(l, "-"),
    sentenceCase: (l) => t(r(l, " ")),
    titleCase: (l) => e(l).map(t).join(" ")
  }, Ut;
}
var Mt = bi(), lt = { exports: {} }, Nn;
function gi() {
  if (Nn) return lt.exports;
  Nn = 1, lt.exports = function(s) {
    return n(e(s), s);
  }, lt.exports.array = n;
  function n(s, o) {
    var i = s.length, a = new Array(i), u = {}, c = i, l = t(o), d = r(s);
    for (o.forEach(function(g) {
      if (!d.has(g[0]) || !d.has(g[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); c--; )
      u[c] || b(s[c], c, /* @__PURE__ */ new Set());
    return a;
    function b(g, f, m) {
      if (m.has(g)) {
        var x;
        try {
          x = ", node was:" + JSON.stringify(g);
        } catch {
          x = "";
        }
        throw new Error("Cyclic dependency" + x);
      }
      if (!d.has(g))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(g));
      if (!u[f]) {
        u[f] = !0;
        var p = l.get(g) || /* @__PURE__ */ new Set();
        if (p = Array.from(p), f = p.length) {
          m.add(g);
          do {
            var w = p[--f];
            b(w, d.get(w), m);
          } while (f);
          m.delete(g);
        }
        a[--i] = g;
      }
    }
  }
  function e(s) {
    for (var o = /* @__PURE__ */ new Set(), i = 0, a = s.length; i < a; i++) {
      var u = s[i];
      o.add(u[0]), o.add(u[1]);
    }
    return Array.from(o);
  }
  function t(s) {
    for (var o = /* @__PURE__ */ new Map(), i = 0, a = s.length; i < a; i++) {
      var u = s[i];
      o.has(u[0]) || o.set(u[0], /* @__PURE__ */ new Set()), o.has(u[1]) || o.set(u[1], /* @__PURE__ */ new Set()), o.get(u[0]).add(u[1]);
    }
    return o;
  }
  function r(s) {
    for (var o = /* @__PURE__ */ new Map(), i = 0, a = s.length; i < a; i++)
      o.set(s[i], i);
    return o;
  }
  return lt.exports;
}
var xi = gi();
const Ei = /* @__PURE__ */ Ss(xi), wi = Object.prototype.toString, Si = Error.prototype.toString, Oi = RegExp.prototype.toString, _i = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Ti = /^Symbol\((.*)\)(.*)$/;
function Ri(n) {
  return n != +n ? "NaN" : n === 0 && 1 / n < 0 ? "-0" : "" + n;
}
function Pn(n, e = !1) {
  if (n == null || n === !0 || n === !1) return "" + n;
  const t = typeof n;
  if (t === "number") return Ri(n);
  if (t === "string") return e ? `"${n}"` : n;
  if (t === "function") return "[Function " + (n.name || "anonymous") + "]";
  if (t === "symbol") return _i.call(n).replace(Ti, "Symbol($1)");
  const r = wi.call(n).slice(8, -1);
  return r === "Date" ? isNaN(n.getTime()) ? "" + n : n.toISOString(n) : r === "Error" || n instanceof Error ? "[" + Si.call(n) + "]" : r === "RegExp" ? Oi.call(n) : null;
}
function Ee(n, e) {
  let t = Pn(n, e);
  return t !== null ? t : JSON.stringify(n, function(r, s) {
    let o = Pn(this[r], e);
    return o !== null ? o : s;
  }, 2);
}
function br(n) {
  return n == null ? [] : [].concat(n);
}
let gr, xr, Er, vi = /\$\{\s*(\w+)\s*\}/g;
gr = Symbol.toStringTag;
class Ln {
  constructor(e, t, r, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[gr] = "Error", this.name = "ValidationError", this.value = t, this.path = r, this.type = s, this.errors = [], this.inner = [], br(e).forEach((o) => {
      if (ee.isError(o)) {
        this.errors.push(...o.errors);
        const i = o.inner.length ? o.inner : [o];
        this.inner.push(...i);
      } else
        this.errors.push(o);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
xr = Symbol.hasInstance;
Er = Symbol.toStringTag;
class ee extends Error {
  static formatError(e, t) {
    const r = t.label || t.path || "this";
    return t = Object.assign({}, t, {
      path: r,
      originalPath: t.path
    }), typeof e == "string" ? e.replace(vi, (s, o) => Ee(t[o])) : typeof e == "function" ? e(t) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, r, s, o) {
    const i = new Ln(e, t, r, s);
    if (o)
      return i;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Er] = "Error", this.name = i.name, this.message = i.message, this.type = i.type, this.value = i.value, this.path = i.path, this.errors = i.errors, this.inner = i.inner, Error.captureStackTrace && Error.captureStackTrace(this, ee);
  }
  static [xr](e) {
    return Ln[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let ce = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: n,
    type: e,
    value: t,
    originalValue: r
  }) => {
    const s = r != null && r !== t ? ` (cast from the value \`${Ee(r, !0)}\`).` : ".";
    return e !== "mixed" ? `${n} must be a \`${e}\` type, but the final value was: \`${Ee(t, !0)}\`` + s : `${n} must match the configured type. The validated value was: \`${Ee(t, !0)}\`` + s;
  }
}, te = {
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
}, Ai = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Qt = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Ci = {
  isValue: "${path} field must be ${value}"
}, ht = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, Fi = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, ji = {
  notType: (n) => {
    const {
      path: e,
      value: t,
      spec: r
    } = n, s = r.types.length;
    if (Array.isArray(t)) {
      if (t.length < s) return `${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${Ee(t, !0)}\``;
      if (t.length > s) return `${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${Ee(t, !0)}\``;
    }
    return ee.formatError(ce.notType, n);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: ce,
  string: te,
  number: Ai,
  date: Qt,
  object: ht,
  array: Fi,
  boolean: Ci,
  tuple: ji
});
const ln = (n) => n && n.__isYupSchema__;
class xt {
  static fromOptions(e, t) {
    if (!t.then && !t.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: s,
      otherwise: o
    } = t, i = typeof r == "function" ? r : (...a) => a.every((u) => u === r);
    return new xt(e, (a, u) => {
      var c;
      let l = i(...a) ? s : o;
      return (c = l?.(u)) != null ? c : u;
    });
  }
  constructor(e, t) {
    this.fn = void 0, this.refs = e, this.refs = e, this.fn = t;
  }
  resolve(e, t) {
    let r = this.refs.map((o) => (
      // TODO: ? operator here?
      o.getValue(t?.value, t?.parent, t?.context)
    )), s = this.fn(r, e, t);
    if (s === void 0 || // @ts-ignore this can be base
    s === e)
      return e;
    if (!ln(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(t);
  }
}
const ct = {
  context: "$",
  value: "."
};
class je {
  constructor(e, t = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === ct.context, this.isValue = this.key[0] === ct.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? ct.context : this.isValue ? ct.value : "";
    this.path = this.key.slice(r.length), this.getter = this.path && ve.getter(this.path, !0), this.map = t.map;
  }
  getValue(e, t, r) {
    let s = this.isContext ? r : this.isValue ? e : t;
    return this.getter && (s = this.getter(s || {})), this.map && (s = this.map(s)), s;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(e, t) {
    return this.getValue(e, t?.parent, t?.context);
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
  static isRef(e) {
    return e && e.__isYupRef;
  }
}
je.prototype.__isYupRef = !0;
const Te = (n) => n == null;
function Ne(n) {
  function e({
    value: t,
    path: r = "",
    options: s,
    originalValue: o,
    schema: i
  }, a, u) {
    const {
      name: c,
      test: l,
      params: d,
      message: b,
      skipAbsent: g
    } = n;
    let {
      parent: f,
      context: m,
      abortEarly: x = i.spec.abortEarly,
      disableStackTrace: p = i.spec.disableStackTrace
    } = s;
    const w = {
      value: t,
      parent: f,
      context: m
    };
    function S(j = {}) {
      const N = wr(Object.assign({
        value: t,
        originalValue: o,
        label: i.spec.label,
        path: j.path || r,
        spec: i.spec,
        disableStackTrace: j.disableStackTrace || p
      }, d, j.params), w), U = new ee(ee.formatError(j.message || b, N), t, N.path, j.type || c, N.disableStackTrace);
      return U.params = N, U;
    }
    const v = x ? a : u;
    let O = {
      path: r,
      parent: f,
      type: c,
      from: s.from,
      createError: S,
      resolve(j) {
        return Sr(j, w);
      },
      options: s,
      originalValue: o,
      schema: i
    };
    const R = (j) => {
      ee.isError(j) ? v(j) : j ? u(null) : v(S());
    }, C = (j) => {
      ee.isError(j) ? v(j) : a(j);
    };
    if (g && Te(t))
      return R(!0);
    let $;
    try {
      var T;
      if ($ = l.call(O, t, O), typeof ((T = $) == null ? void 0 : T.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${O.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve($).then(R, C);
      }
    } catch (j) {
      C(j);
      return;
    }
    R($);
  }
  return e.OPTIONS = n, e;
}
function wr(n, e) {
  if (!n) return n;
  for (const t of Object.keys(n))
    n[t] = Sr(n[t], e);
  return n;
}
function Sr(n, e) {
  return je.isRef(n) ? n.getValue(e.value, e.parent, e.context) : n;
}
function ki(n, e, t, r = t) {
  let s, o, i;
  return e ? (ve.forEach(e, (a, u, c) => {
    let l = u ? a.slice(1, a.length - 1) : a;
    n = n.resolve({
      context: r,
      parent: s,
      value: t
    });
    let d = n.type === "tuple", b = c ? parseInt(l, 10) : 0;
    if (n.innerType || d) {
      if (d && !c) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${i}" must contain an index to the tuple element, e.g. "${i}[0]"`);
      if (t && b >= t.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);
      s = t, t = t && t[b], n = d ? n.spec.types[b] : n.innerType;
    }
    if (!c) {
      if (!n.fields || !n.fields[l]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${i} which is a type: "${n.type}")`);
      s = t, t = t && t[l], n = n.fields[l];
    }
    o = l, i = u ? "[" + a + "]" : "." + a;
  }), {
    schema: n,
    parent: s,
    parentPath: o
  }) : {
    parent: s,
    parentPath: e,
    schema: n
  };
}
class Et extends Set {
  describe() {
    const e = [];
    for (const t of this.values())
      e.push(je.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const r of this.values())
      t.push(e(r));
    return t;
  }
  clone() {
    return new Et(this.values());
  }
  merge(e, t) {
    const r = this.clone();
    return e.forEach((s) => r.add(s)), t.forEach((s) => r.delete(s)), r;
  }
}
function Le(n, e = /* @__PURE__ */ new Map()) {
  if (ln(n) || !n || typeof n != "object") return n;
  if (e.has(n)) return e.get(n);
  let t;
  if (n instanceof Date)
    t = new Date(n.getTime()), e.set(n, t);
  else if (n instanceof RegExp)
    t = new RegExp(n), e.set(n, t);
  else if (Array.isArray(n)) {
    t = new Array(n.length), e.set(n, t);
    for (let r = 0; r < n.length; r++) t[r] = Le(n[r], e);
  } else if (n instanceof Map) {
    t = /* @__PURE__ */ new Map(), e.set(n, t);
    for (const [r, s] of n.entries()) t.set(r, Le(s, e));
  } else if (n instanceof Set) {
    t = /* @__PURE__ */ new Set(), e.set(n, t);
    for (const r of n) t.add(Le(r, e));
  } else if (n instanceof Object) {
    t = {}, e.set(n, t);
    for (const [r, s] of Object.entries(n)) t[r] = Le(s, e);
  } else
    throw Error(`Unable to clone ${n}`);
  return t;
}
function Di(n) {
  if (!(n != null && n.length))
    return;
  const e = [];
  let t = "", r = !1, s = !1;
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    if (i === "[" && !s) {
      t && (e.push(...t.split(".").filter(Boolean)), t = ""), r = !0;
      continue;
    }
    if (i === "]" && !s) {
      t && (/^\d+$/.test(t) ? e.push(t) : e.push(t.replace(/^"|"$/g, "")), t = ""), r = !1;
      continue;
    }
    if (i === '"') {
      s = !s;
      continue;
    }
    if (i === "." && !r && !s) {
      t && (e.push(t), t = "");
      continue;
    }
    t += i;
  }
  return t && e.push(...t.split(".").filter(Boolean)), e;
}
function $i(n, e) {
  const t = e ? `${e}.${n.path}` : n.path;
  return n.errors.map((r) => ({
    message: r,
    path: Di(t)
  }));
}
function Or(n, e) {
  var t;
  if (!((t = n.inner) != null && t.length) && n.errors.length)
    return $i(n, e);
  const r = e ? `${e}.${n.path}` : n.path;
  return n.inner.flatMap((s) => Or(s, r));
}
class de {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Et(), this._blacklist = new Et(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(ce.notType);
    }), this.type = e.type, this._typeCheck = e.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, e?.spec), this.withMutation((t) => {
      t.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(e) {
    if (this._mutate)
      return e && Object.assign(this.spec, e), this;
    const t = Object.create(Object.getPrototypeOf(this));
    return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = Le(Object.assign({}, this.spec, e)), t;
  }
  label(e) {
    let t = this.clone();
    return t.spec.label = e, t;
  }
  meta(...e) {
    if (e.length === 0) return this.spec.meta;
    let t = this.clone();
    return t.spec.meta = Object.assign(t.spec.meta || {}, e[0]), t;
  }
  withMutation(e) {
    let t = this._mutate;
    this._mutate = !0;
    let r = e(this);
    return this._mutate = t, r;
  }
  concat(e) {
    if (!e || e === this) return this;
    if (e.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);
    let t = this, r = e.clone();
    const s = Object.assign({}, t.spec, r.spec);
    return r.spec = s, r.internalTests = Object.assign({}, t.internalTests, r.internalTests), r._whitelist = t._whitelist.merge(e._whitelist, e._blacklist), r._blacklist = t._blacklist.merge(e._blacklist, e._whitelist), r.tests = t.tests, r.exclusiveTests = t.exclusiveTests, r.withMutation((o) => {
      e.tests.forEach((i) => {
        o.test(i.OPTIONS);
      });
    }), r.transforms = [...t.transforms, ...r.transforms], r;
  }
  isType(e) {
    return e == null ? !!(this.spec.nullable && e === null || this.spec.optional && e === void 0) : this._typeCheck(e);
  }
  resolve(e) {
    let t = this;
    if (t.conditions.length) {
      let r = t.conditions;
      t = t.clone(), t.conditions = [], t = r.reduce((s, o) => o.resolve(s, e), t), t = t.resolve(e);
    }
    return t;
  }
  resolveOptions(e) {
    var t, r, s, o;
    return Object.assign({}, e, {
      from: e.from || [],
      strict: (t = e.strict) != null ? t : this.spec.strict,
      abortEarly: (r = e.abortEarly) != null ? r : this.spec.abortEarly,
      recursive: (s = e.recursive) != null ? s : this.spec.recursive,
      disableStackTrace: (o = e.disableStackTrace) != null ? o : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(e, t = {}) {
    let r = this.resolve(Object.assign({}, t, {
      value: e
      // parent: options.parent,
      // context: options.context,
    })), s = t.assert === "ignore-optionality", o = r._cast(e, t);
    if (t.assert !== !1 && !r.isType(o)) {
      if (s && Te(o))
        return o;
      let i = Ee(e), a = Ee(o);
      throw new TypeError(`The value of ${t.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${i} 
` + (a !== i ? `result of cast: ${a}` : ""));
    }
    return o;
  }
  _cast(e, t) {
    let r = e === void 0 ? e : this.transforms.reduce((s, o) => o.call(this, s, e, this, t), e);
    return r === void 0 && (r = this.getDefault(t)), r;
  }
  _validate(e, t = {}, r, s) {
    let {
      path: o,
      originalValue: i = e,
      strict: a = this.spec.strict
    } = t, u = e;
    a || (u = this._cast(u, Object.assign({
      assert: !1
    }, t)));
    let c = [];
    for (let l of Object.values(this.internalTests))
      l && c.push(l);
    this.runTests({
      path: o,
      value: u,
      originalValue: i,
      options: t,
      tests: c
    }, r, (l) => {
      if (l.length)
        return s(l, u);
      this.runTests({
        path: o,
        value: u,
        originalValue: i,
        options: t,
        tests: this.tests
      }, r, s);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(e, t, r) {
    let s = !1, {
      tests: o,
      value: i,
      originalValue: a,
      path: u,
      options: c
    } = e, l = (m) => {
      s || (s = !0, t(m, i));
    }, d = (m) => {
      s || (s = !0, r(m, i));
    }, b = o.length, g = [];
    if (!b) return d([]);
    let f = {
      value: i,
      originalValue: a,
      path: u,
      options: c,
      schema: this
    };
    for (let m = 0; m < o.length; m++) {
      const x = o[m];
      x(f, l, function(w) {
        w && (Array.isArray(w) ? g.push(...w) : g.push(w)), --b <= 0 && d(g);
      });
    }
  }
  asNestedTest({
    key: e,
    index: t,
    parent: r,
    parentPath: s,
    originalParent: o,
    options: i
  }) {
    const a = e ?? t;
    if (a == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const u = typeof a == "number";
    let c = r[a];
    const l = Object.assign({}, i, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: r,
      value: c,
      originalValue: o[a],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [u ? "index" : "key"]: a,
      path: u || a.includes(".") ? `${s || ""}[${u ? a : `"${a}"`}]` : (s ? `${s}.` : "") + e
    });
    return (d, b, g) => this.resolve(l)._validate(c, l, b, g);
  }
  validate(e, t) {
    var r;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), o = (r = t?.disableStackTrace) != null ? r : s.spec.disableStackTrace;
    return new Promise((i, a) => s._validate(e, t, (u, c) => {
      ee.isError(u) && (u.value = c), a(u);
    }, (u, c) => {
      u.length ? a(new ee(u, c, void 0, void 0, o)) : i(c);
    }));
  }
  validateSync(e, t) {
    var r;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), o, i = (r = t?.disableStackTrace) != null ? r : s.spec.disableStackTrace;
    return s._validate(e, Object.assign({}, t, {
      sync: !0
    }), (a, u) => {
      throw ee.isError(a) && (a.value = u), a;
    }, (a, u) => {
      if (a.length) throw new ee(a, e, void 0, void 0, i);
      o = u;
    }), o;
  }
  isValid(e, t) {
    return this.validate(e, t).then(() => !0, (r) => {
      if (ee.isError(r)) return !1;
      throw r;
    });
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (r) {
      if (ee.isError(r)) return !1;
      throw r;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : Le(t);
  }
  getDefault(e) {
    return this.resolve(e || {})._getDefault(e);
  }
  default(e) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: e
    });
  }
  strict(e = !0) {
    return this.clone({
      strict: e
    });
  }
  nullability(e, t) {
    const r = this.clone({
      nullable: e
    });
    return r.internalTests.nullable = Ne({
      message: t,
      name: "nullable",
      test(s) {
        return s === null ? this.schema.spec.nullable : !0;
      }
    }), r;
  }
  optionality(e, t) {
    const r = this.clone({
      optional: e
    });
    return r.internalTests.optionality = Ne({
      message: t,
      name: "optionality",
      test(s) {
        return s === void 0 ? this.schema.spec.optional : !0;
      }
    }), r;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(e = ce.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = ce.notNull) {
    return this.nullability(!1, e);
  }
  required(e = ce.required) {
    return this.clone().withMutation((t) => t.nonNullable(e).defined(e));
  }
  notRequired() {
    return this.clone().withMutation((e) => e.nullable().optional());
  }
  transform(e) {
    let t = this.clone();
    return t.transforms.push(e), t;
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
  test(...e) {
    let t;
    if (e.length === 1 ? typeof e[0] == "function" ? t = {
      test: e[0]
    } : t = e[0] : e.length === 2 ? t = {
      name: e[0],
      test: e[1]
    } : t = {
      name: e[0],
      message: e[1],
      test: e[2]
    }, t.message === void 0 && (t.message = ce.default), typeof t.test != "function") throw new TypeError("`test` is a required parameters");
    let r = this.clone(), s = Ne(t), o = t.exclusive || t.name && r.exclusiveTests[t.name] === !0;
    if (t.exclusive && !t.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return t.name && (r.exclusiveTests[t.name] = !!t.exclusive), r.tests = r.tests.filter((i) => !(i.OPTIONS.name === t.name && (o || i.OPTIONS.test === s.OPTIONS.test))), r.tests.push(s), r;
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
    let r = this.clone(), s = br(e).map((o) => new je(o));
    return s.forEach((o) => {
      o.isSibling && r.deps.push(o.key);
    }), r.conditions.push(typeof t == "function" ? new xt(s, t) : xt.fromOptions(s, t)), r;
  }
  typeError(e) {
    let t = this.clone();
    return t.internalTests.typeError = Ne({
      message: e,
      name: "typeError",
      skipAbsent: !0,
      test(r) {
        return this.schema._typeCheck(r) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), t;
  }
  oneOf(e, t = ce.oneOf) {
    let r = this.clone();
    return e.forEach((s) => {
      r._whitelist.add(s), r._blacklist.delete(s);
    }), r.internalTests.whiteList = Ne({
      message: t,
      name: "oneOf",
      skipAbsent: !0,
      test(s) {
        let o = this.schema._whitelist, i = o.resolveAll(this.resolve);
        return i.includes(s) ? !0 : this.createError({
          params: {
            values: Array.from(o).join(", "),
            resolved: i
          }
        });
      }
    }), r;
  }
  notOneOf(e, t = ce.notOneOf) {
    let r = this.clone();
    return e.forEach((s) => {
      r._blacklist.add(s), r._whitelist.delete(s);
    }), r.internalTests.blacklist = Ne({
      message: t,
      name: "notOneOf",
      test(s) {
        let o = this.schema._blacklist, i = o.resolveAll(this.resolve);
        return i.includes(s) ? this.createError({
          params: {
            values: Array.from(o).join(", "),
            resolved: i
          }
        }) : !0;
      }
    }), r;
  }
  strip(e = !0) {
    let t = this.clone();
    return t.spec.strip = e, t;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), {
      label: r,
      meta: s,
      optional: o,
      nullable: i
    } = t.spec;
    return {
      meta: s,
      label: r,
      optional: o,
      nullable: i,
      default: t.getDefault(e),
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests.filter((u, c, l) => l.findIndex((d) => d.OPTIONS.name === u.OPTIONS.name) === c).map((u) => {
        const c = u.OPTIONS.params && e ? wr(Object.assign({}, u.OPTIONS.params), e) : u.OPTIONS.params;
        return {
          name: u.OPTIONS.name,
          params: c
        };
      })
    };
  }
  get "~standard"() {
    const e = this;
    return {
      version: 1,
      vendor: "yup",
      async validate(r) {
        try {
          return {
            value: await e.validate(r, {
              abortEarly: !1
            })
          };
        } catch (s) {
          if (s instanceof ee)
            return {
              issues: Or(s)
            };
          throw s;
        }
      }
    };
  }
}
de.prototype.__isYupSchema__ = !0;
for (const n of ["validate", "validateSync"]) de.prototype[`${n}At`] = function(e, t, r = {}) {
  const {
    parent: s,
    parentPath: o,
    schema: i
  } = ki(this, e, t, r.context);
  return i[n](s && s[o], Object.assign({}, r, {
    parent: s,
    path: e
  }));
};
for (const n of ["equals", "is"]) de.prototype[n] = de.prototype.oneOf;
for (const n of ["not", "nope"]) de.prototype[n] = de.prototype.notOneOf;
const Ni = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Pi(n) {
  const e = en(n);
  if (!e) return Date.parse ? Date.parse(n) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let t = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (t = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (t = 0 - t)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + t, e.second, e.millisecond);
}
function en(n) {
  var e, t;
  const r = Ni.exec(n);
  return r ? {
    year: me(r[1]),
    month: me(r[2], 1) - 1,
    day: me(r[3], 1),
    hour: me(r[4]),
    minute: me(r[5]),
    second: me(r[6]),
    millisecond: r[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      me(r[7].substring(0, 3))
    ) : 0,
    precision: (e = (t = r[7]) == null ? void 0 : t.length) != null ? e : void 0,
    z: r[8] || void 0,
    plusMinus: r[9] || void 0,
    hourOffset: me(r[10]),
    minuteOffset: me(r[11])
  } : null;
}
function me(n, e = 0) {
  return Number(n) || e;
}
let Li = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Ii = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Ui = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Mi = "^\\d{4}-\\d{2}-\\d{2}", qi = "\\d{2}:\\d{2}:\\d{2}", Vi = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Bi = new RegExp(`${Mi}T${qi}(\\.\\d+)?${Vi}$`), zi = (n) => Te(n) || n === n.trim(), Hi = {}.toString();
function pt() {
  return new _r();
}
class _r extends de {
  constructor() {
    super({
      type: "string",
      check(e) {
        return e instanceof String && (e = e.valueOf()), typeof e == "string";
      }
    }), this.withMutation(() => {
      this.transform((e, t) => {
        if (!this.spec.coerce || this.isType(e) || Array.isArray(e)) return e;
        const r = e != null && e.toString ? e.toString() : e;
        return r === Hi ? e : r;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((t) => t.test({
      message: e || ce.required,
      name: "required",
      skipAbsent: !0,
      test: (r) => !!r.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((t) => t.OPTIONS.name !== "required"), e));
  }
  length(e, t = te.length) {
    return this.test({
      message: t,
      name: "length",
      exclusive: !0,
      params: {
        length: e
      },
      skipAbsent: !0,
      test(r) {
        return r.length === this.resolve(e);
      }
    });
  }
  min(e, t = te.min) {
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(r) {
        return r.length >= this.resolve(e);
      }
    });
  }
  max(e, t = te.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: t,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(r) {
        return r.length <= this.resolve(e);
      }
    });
  }
  matches(e, t) {
    let r = !1, s, o;
    return t && (typeof t == "object" ? {
      excludeEmptyString: r = !1,
      message: s,
      name: o
    } = t : s = t), this.test({
      name: o || "matches",
      message: s || te.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (i) => i === "" && r || i.search(e) !== -1
    });
  }
  email(e = te.email) {
    return this.matches(Li, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = te.url) {
    return this.matches(Ii, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = te.uuid) {
    return this.matches(Ui, {
      name: "uuid",
      message: e,
      excludeEmptyString: !1
    });
  }
  datetime(e) {
    let t = "", r, s;
    return e && (typeof e == "object" ? {
      message: t = "",
      allowOffset: r = !1,
      precision: s = void 0
    } = e : t = e), this.matches(Bi, {
      name: "datetime",
      message: t || te.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: t || te.datetime_offset,
      params: {
        allowOffset: r
      },
      skipAbsent: !0,
      test: (o) => {
        if (!o || r) return !0;
        const i = en(o);
        return i ? !!i.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: t || te.datetime_precision,
      params: {
        precision: s
      },
      skipAbsent: !0,
      test: (o) => {
        if (!o || s == null) return !0;
        const i = en(o);
        return i ? i.precision === s : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = te.trim) {
    return this.transform((t) => t != null ? t.trim() : t).test({
      message: e,
      name: "trim",
      test: zi
    });
  }
  lowercase(e = te.lowercase) {
    return this.transform((t) => Te(t) ? t : t.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => Te(t) || t === t.toLowerCase()
    });
  }
  uppercase(e = te.uppercase) {
    return this.transform((t) => Te(t) ? t : t.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => Te(t) || t === t.toUpperCase()
    });
  }
}
pt.prototype = _r.prototype;
let Wi = /* @__PURE__ */ new Date(""), Ji = (n) => Object.prototype.toString.call(n) === "[object Date]";
class cn extends de {
  constructor() {
    super({
      type: "date",
      check(e) {
        return Ji(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, t) => !this.spec.coerce || this.isType(e) || e === null ? e : (e = Pi(e), isNaN(e) ? cn.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, t) {
    let r;
    if (je.isRef(e))
      r = e;
    else {
      let s = this.cast(e);
      if (!this._typeCheck(s)) throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
      r = s;
    }
    return r;
  }
  min(e, t = Qt.min) {
    let r = this.prepareParam(e, "min");
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(s) {
        return s >= this.resolve(r);
      }
    });
  }
  max(e, t = Qt.max) {
    let r = this.prepareParam(e, "max");
    return this.test({
      message: t,
      name: "max",
      exclusive: !0,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(s) {
        return s <= this.resolve(r);
      }
    });
  }
}
cn.INVALID_DATE = Wi;
function Gi(n, e = []) {
  let t = [], r = /* @__PURE__ */ new Set(), s = new Set(e.map(([i, a]) => `${i}-${a}`));
  function o(i, a) {
    let u = ve.split(i)[0];
    r.add(u), s.has(`${a}-${u}`) || t.push([a, u]);
  }
  for (const i of Object.keys(n)) {
    let a = n[i];
    r.add(i), je.isRef(a) && a.isSibling ? o(a.path, i) : ln(a) && "deps" in a && a.deps.forEach((u) => o(u, i));
  }
  return Ei.array(Array.from(r), t).reverse();
}
function In(n, e) {
  let t = 1 / 0;
  return n.some((r, s) => {
    var o;
    if ((o = e.path) != null && o.includes(r))
      return t = s, !0;
  }), t;
}
function Tr(n) {
  return (e, t) => In(n, e) - In(n, t);
}
const Ki = (n, e, t) => {
  if (typeof n != "string")
    return n;
  let r = n;
  try {
    r = JSON.parse(n);
  } catch {
  }
  return t.isType(r) ? r : n;
};
function mt(n) {
  if ("fields" in n) {
    const e = {};
    for (const [t, r] of Object.entries(n.fields))
      e[t] = mt(r);
    return n.setFields(e);
  }
  if (n.type === "array") {
    const e = n.optional();
    return e.innerType && (e.innerType = mt(e.innerType)), e;
  }
  return n.type === "tuple" ? n.optional().clone({
    types: n.spec.types.map(mt)
  }) : "optional" in n ? n.optional() : n;
}
const Yi = (n, e) => {
  const t = [...ve.normalizePath(e)];
  if (t.length === 1) return t[0] in n;
  let r = t.pop(), s = ve.getter(ve.join(t), !0)(n);
  return !!(s && r in s);
};
let Un = (n) => Object.prototype.toString.call(n) === "[object Object]";
function Mn(n, e) {
  let t = Object.keys(n.fields);
  return Object.keys(e).filter((r) => t.indexOf(r) === -1);
}
const Zi = Tr([]);
function Rr(n) {
  return new vr(n);
}
class vr extends de {
  constructor(e) {
    super({
      type: "object",
      check(t) {
        return Un(t) || typeof t == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Zi, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, t = {}) {
    var r;
    let s = super._cast(e, t);
    if (s === void 0) return this.getDefault(t);
    if (!this._typeCheck(s)) return s;
    let o = this.fields, i = (r = t.stripUnknown) != null ? r : this.spec.noUnknown, a = [].concat(this._nodes, Object.keys(s).filter((d) => !this._nodes.includes(d))), u = {}, c = Object.assign({}, t, {
      parent: u,
      __validating: t.__validating || !1
    }), l = !1;
    for (const d of a) {
      let b = o[d], g = d in s, f = s[d];
      if (b) {
        let m;
        c.path = (t.path ? `${t.path}.` : "") + d, b = b.resolve({
          value: f,
          context: t.context,
          parent: u
        });
        let x = b instanceof de ? b.spec : void 0, p = x?.strict;
        if (x != null && x.strip) {
          l = l || d in s;
          continue;
        }
        m = !t.__validating || !p ? b.cast(f, c) : f, m !== void 0 && (u[d] = m);
      } else g && !i && (u[d] = f);
      (g !== d in u || u[d] !== f) && (l = !0);
    }
    return l ? u : s;
  }
  _validate(e, t = {}, r, s) {
    let {
      from: o = [],
      originalValue: i = e,
      recursive: a = this.spec.recursive
    } = t;
    t.from = [{
      schema: this,
      value: i
    }, ...o], t.__validating = !0, t.originalValue = i, super._validate(e, t, r, (u, c) => {
      if (!a || !Un(c)) {
        s(u, c);
        return;
      }
      i = i || c;
      let l = [];
      for (let d of this._nodes) {
        let b = this.fields[d];
        !b || je.isRef(b) || l.push(b.asNestedTest({
          options: t,
          key: d,
          parent: c,
          parentPath: t.path,
          originalParent: i
        }));
      }
      this.runTests({
        tests: l,
        value: c,
        originalValue: i,
        options: t
      }, r, (d) => {
        s(d.sort(this._sortErrors).concat(u), c);
      });
    });
  }
  clone(e) {
    const t = super.clone(e);
    return t.fields = Object.assign({}, this.fields), t._nodes = this._nodes, t._excludedEdges = this._excludedEdges, t._sortErrors = this._sortErrors, t;
  }
  concat(e) {
    let t = super.concat(e), r = t.fields;
    for (let [s, o] of Object.entries(this.fields)) {
      const i = r[s];
      r[s] = i === void 0 ? o : i;
    }
    return t.withMutation((s) => (
      // XXX: excludes here is wrong
      s.setFields(r, [...this._excludedEdges, ...e._excludedEdges])
    ));
  }
  _getDefault(e) {
    if ("default" in this.spec)
      return super._getDefault(e);
    if (!this._nodes.length)
      return;
    let t = {};
    return this._nodes.forEach((r) => {
      var s;
      const o = this.fields[r];
      let i = e;
      (s = i) != null && s.value && (i = Object.assign({}, i, {
        parent: i.value,
        value: i.value[r]
      })), t[r] = o && "getDefault" in o ? o.getDefault(i) : void 0;
    }), t;
  }
  setFields(e, t) {
    let r = this.clone();
    return r.fields = e, r._nodes = Gi(e, t), r._sortErrors = Tr(Object.keys(e)), t && (r._excludedEdges = t), r;
  }
  shape(e, t = []) {
    return this.clone().withMutation((r) => {
      let s = r._excludedEdges;
      return t.length && (Array.isArray(t[0]) || (t = [t]), s = [...r._excludedEdges, ...t]), r.setFields(Object.assign(r.fields, e), s);
    });
  }
  partial() {
    const e = {};
    for (const [t, r] of Object.entries(this.fields))
      e[t] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
    return this.setFields(e);
  }
  deepPartial() {
    return mt(this);
  }
  pick(e) {
    const t = {};
    for (const r of e)
      this.fields[r] && (t[r] = this.fields[r]);
    return this.setFields(t, this._excludedEdges.filter(([r, s]) => e.includes(r) && e.includes(s)));
  }
  omit(e) {
    const t = [];
    for (const r of Object.keys(this.fields))
      e.includes(r) || t.push(r);
    return this.pick(t);
  }
  from(e, t, r) {
    let s = ve.getter(e, !0);
    return this.transform((o) => {
      if (!o) return o;
      let i = o;
      return Yi(o, e) && (i = Object.assign({}, o), r || delete i[e], i[t] = s(o)), i;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Ki);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(e) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: e || ht.exact,
      test(t) {
        if (t == null) return !0;
        const r = Mn(this.schema, t);
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
  noUnknown(e = !0, t = ht.noUnknown) {
    typeof e != "boolean" && (t = e, e = !0);
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: t,
      test(s) {
        if (s == null) return !0;
        const o = Mn(this.schema, s);
        return !e || o.length === 0 || this.createError({
          params: {
            unknown: o.join(", ")
          }
        });
      }
    });
    return r.spec.noUnknown = e, r;
  }
  unknown(e = !0, t = ht.noUnknown) {
    return this.noUnknown(!e, t);
  }
  transformKeys(e) {
    return this.transform((t) => {
      if (!t) return t;
      const r = {};
      for (const s of Object.keys(t)) r[e(s)] = t[s];
      return r;
    });
  }
  camelCase() {
    return this.transformKeys(Mt.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Mt.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => Mt.snakeCase(e).toUpperCase());
  }
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), r = super.describe(e);
    r.fields = {};
    for (const [o, i] of Object.entries(t.fields)) {
      var s;
      let a = e;
      (s = a) != null && s.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[o]
      })), r.fields[o] = i.describe(a);
    }
    return r;
  }
}
Rr.prototype = vr.prototype;
const Xi = ({ isSubmitting: n }) => /* @__PURE__ */ E.jsx(
  Ke,
  {
    type: "submit",
    fullWidth: !0,
    variant: "contained",
    sx: { mt: 3, mb: 2 },
    disabled: n,
    children: n ? /* @__PURE__ */ E.jsx(Xe, { size: 24 }) : "Sign In"
  }
), Qi = (n, e) => Rr({
  [n.name]: pt().required(`${n.label} is required`).test(
    "is-email-if-required",
    "Enter a valid email",
    (t) => n.name === "email" ? pt().email().isValidSync(t) : !0
  ),
  // Add password validation only if the field is present
  ...e && {
    [e.name]: pt().required(`${e.label} is required`)
  }
}), qa = ({
  onSubmit: n,
  isSubmitting: e = !1,
  error: t,
  logo: r,
  title: s = "Sign in to your account",
  loginField: o = { name: "email", label: "Email Address", autoComplete: "email" },
  passwordField: i = { name: "password", label: "Password", autoComplete: "current-password" },
  validationSchema: a,
  renderActions: u = Xi
}) => {
  const c = a || Qi(o, i);
  return /* @__PURE__ */ E.jsx(ls, { component: "main", maxWidth: "xs", children: /* @__PURE__ */ E.jsxs(
    St,
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
        r && /* @__PURE__ */ E.jsx(X, { mb: 2, children: r }),
        /* @__PURE__ */ E.jsx(we, { component: "h1", variant: "h5", children: s }),
        t && /* @__PURE__ */ E.jsx(zt, { severity: "error", sx: { width: "100%", mt: 2 }, children: t.message }),
        /* @__PURE__ */ E.jsx(X, { sx: { mt: 1, width: "100%" }, children: /* @__PURE__ */ E.jsxs(
          ar,
          {
            onSubmit: n,
            validationSchema: c,
            noValidate: !0,
            children: [
              /* @__PURE__ */ E.jsx(
                On,
                {
                  margin: "normal",
                  required: !0,
                  fullWidth: !0,
                  id: o.name,
                  label: o.label,
                  name: o.name,
                  autoComplete: o.autoComplete,
                  autoFocus: !0
                }
              ),
              i && /* @__PURE__ */ E.jsx(
                On,
                {
                  margin: "normal",
                  required: !0,
                  fullWidth: !0,
                  id: i.name,
                  label: i.label,
                  name: i.name,
                  type: "password",
                  autoComplete: i.autoComplete
                }
              ),
              u({ isSubmitting: e })
            ]
          }
        ) })
      ]
    }
  ) });
}, Pe = 240, Va = ({
  navItems: n = [],
  title: e = "Dashboard",
  drawerHeader: t,
  headerActions: r,
  children: s
}) => {
  const [o, i] = G(!1), a = () => {
    i(!o);
  }, u = /* @__PURE__ */ E.jsxs(X, { children: [
    t ? /* @__PURE__ */ E.jsx(Ie, { sx: { justifyContent: "center" }, children: t }) : null,
    /* @__PURE__ */ E.jsx(cs, { children: n.map((c, l) => {
      const d = c.component || "a", b = d !== "a" ? { to: c.path } : { href: c.path };
      return /* @__PURE__ */ E.jsx(fs, { disablePadding: !0, children: /* @__PURE__ */ E.jsxs(ds, { component: d, ...b, children: [
        c.icon && /* @__PURE__ */ E.jsx(hs, { children: c.icon }),
        /* @__PURE__ */ E.jsx(ps, { primary: c.text })
      ] }) }, l);
    }) })
  ] });
  return /* @__PURE__ */ E.jsxs(X, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ E.jsx(ms, {}),
    /* @__PURE__ */ E.jsx(
      ys,
      {
        position: "fixed",
        sx: {
          width: { sm: `calc(100% - ${Pe}px)` },
          ml: { sm: `${Pe}px` }
        },
        children: /* @__PURE__ */ E.jsxs(Ie, { children: [
          /* @__PURE__ */ E.jsx(
            bs,
            {
              color: "primary",
              "aria-label": "open drawer",
              edge: "start",
              onClick: a,
              sx: { mr: 2, display: { sm: "none" } },
              children: /* @__PURE__ */ E.jsx(ws, {})
            }
          ),
          /* @__PURE__ */ E.jsx(we, { variant: "h6", noWrap: !0, color: "primary", component: "div", sx: { flexGrow: 1 }, children: e }),
          r
        ] })
      }
    ),
    /* @__PURE__ */ E.jsxs(
      X,
      {
        component: "nav",
        sx: { width: { sm: Pe }, flexShrink: { sm: 0 } },
        "aria-label": "mailbox folders",
        children: [
          /* @__PURE__ */ E.jsx(
            xn,
            {
              variant: "temporary",
              open: o,
              onClose: a,
              ModalProps: {
                keepMounted: !0
                // Better open performance on mobile.
              },
              sx: {
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: Pe }
              },
              children: u
            }
          ),
          /* @__PURE__ */ E.jsx(
            xn,
            {
              variant: "permanent",
              sx: {
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: Pe }
              },
              open: !0,
              children: u
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ E.jsxs(
      X,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          width: { xs: "100%", sm: `calc(100% - ${Pe}px)` },
          minHeight: "100vh",
          backgroundColor: (c) => c.palette.grey[100]
        },
        children: [
          /* @__PURE__ */ E.jsx(Ie, {}),
          s
        ]
      }
    )
  ] });
};
function Ar(n, e) {
  return function() {
    return n.apply(e, arguments);
  };
}
const { toString: eo } = Object.prototype, { getPrototypeOf: fn } = Object, { iterator: Ot, toStringTag: Cr } = Symbol, _t = /* @__PURE__ */ ((n) => (e) => {
  const t = eo.call(e);
  return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ae = (n) => (n = n.toLowerCase(), (e) => _t(e) === n), Tt = (n) => (e) => typeof e === n, { isArray: qe } = Array, Ue = Tt("undefined");
function tt(n) {
  return n !== null && !Ue(n) && n.constructor !== null && !Ue(n.constructor) && ne(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const Fr = ae("ArrayBuffer");
function to(n) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && Fr(n.buffer), e;
}
const no = Tt("string"), ne = Tt("function"), jr = Tt("number"), nt = (n) => n !== null && typeof n == "object", ro = (n) => n === !0 || n === !1, yt = (n) => {
  if (_t(n) !== "object")
    return !1;
  const e = fn(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Cr in n) && !(Ot in n);
}, so = (n) => {
  if (!nt(n) || tt(n))
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
}, io = ae("Date"), oo = ae("File"), ao = ae("Blob"), uo = ae("FileList"), lo = (n) => nt(n) && ne(n.pipe), co = (n) => {
  let e;
  return n && (typeof FormData == "function" && n instanceof FormData || ne(n.append) && ((e = _t(n)) === "formdata" || // detect form-data instance
  e === "object" && ne(n.toString) && n.toString() === "[object FormData]"));
}, fo = ae("URLSearchParams"), [ho, po, mo, yo] = ["ReadableStream", "Request", "Response", "Headers"].map(ae), bo = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function rt(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let r, s;
  if (typeof n != "object" && (n = [n]), qe(n))
    for (r = 0, s = n.length; r < s; r++)
      e.call(null, n[r], r, n);
  else {
    if (tt(n))
      return;
    const o = t ? Object.getOwnPropertyNames(n) : Object.keys(n), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], e.call(null, n[a], a, n);
  }
}
function kr(n, e) {
  if (tt(n))
    return null;
  e = e.toLowerCase();
  const t = Object.keys(n);
  let r = t.length, s;
  for (; r-- > 0; )
    if (s = t[r], e === s.toLowerCase())
      return s;
  return null;
}
const Re = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Dr = (n) => !Ue(n) && n !== Re;
function tn() {
  const { caseless: n, skipUndefined: e } = Dr(this) && this || {}, t = {}, r = (s, o) => {
    const i = n && kr(t, o) || o;
    yt(t[i]) && yt(s) ? t[i] = tn(t[i], s) : yt(s) ? t[i] = tn({}, s) : qe(s) ? t[i] = s.slice() : (!e || !Ue(s)) && (t[i] = s);
  };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && rt(arguments[s], r);
  return t;
}
const go = (n, e, t, { allOwnKeys: r } = {}) => (rt(e, (s, o) => {
  t && ne(s) ? n[o] = Ar(s, t) : n[o] = s;
}, { allOwnKeys: r }), n), xo = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Eo = (n, e, t, r) => {
  n.prototype = Object.create(e.prototype, r), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: e.prototype
  }), t && Object.assign(n.prototype, t);
}, wo = (n, e, t, r) => {
  let s, o, i;
  const a = {};
  if (e = e || {}, n == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(n), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, n, e)) && !a[i] && (e[i] = n[i], a[i] = !0);
    n = t !== !1 && fn(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}, So = (n, e, t) => {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  const r = n.indexOf(e, t);
  return r !== -1 && r === t;
}, Oo = (n) => {
  if (!n) return null;
  if (qe(n)) return n;
  let e = n.length;
  if (!jr(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = n[e];
  return t;
}, _o = /* @__PURE__ */ ((n) => (e) => n && e instanceof n)(typeof Uint8Array < "u" && fn(Uint8Array)), To = (n, e) => {
  const r = (n && n[Ot]).call(n);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(n, o[0], o[1]);
  }
}, Ro = (n, e) => {
  let t;
  const r = [];
  for (; (t = n.exec(e)) !== null; )
    r.push(t);
  return r;
}, vo = ae("HTMLFormElement"), Ao = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, r, s) {
    return r.toUpperCase() + s;
  }
), qn = (({ hasOwnProperty: n }) => (e, t) => n.call(e, t))(Object.prototype), Co = ae("RegExp"), $r = (n, e) => {
  const t = Object.getOwnPropertyDescriptors(n), r = {};
  rt(t, (s, o) => {
    let i;
    (i = e(s, o, n)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(n, r);
}, Fo = (n) => {
  $r(n, (e, t) => {
    if (ne(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = n[t];
    if (ne(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, jo = (n, e) => {
  const t = {}, r = (s) => {
    s.forEach((o) => {
      t[o] = !0;
    });
  };
  return qe(n) ? r(n) : r(String(n).split(e)), t;
}, ko = () => {
}, Do = (n, e) => n != null && Number.isFinite(n = +n) ? n : e;
function $o(n) {
  return !!(n && ne(n.append) && n[Cr] === "FormData" && n[Ot]);
}
const No = (n) => {
  const e = new Array(10), t = (r, s) => {
    if (nt(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (tt(r))
        return r;
      if (!("toJSON" in r)) {
        e[s] = r;
        const o = qe(r) ? [] : {};
        return rt(r, (i, a) => {
          const u = t(i, s + 1);
          !Ue(u) && (o[a] = u);
        }), e[s] = void 0, o;
      }
    }
    return r;
  };
  return t(n, 0);
}, Po = ae("AsyncFunction"), Lo = (n) => n && (nt(n) || ne(n)) && ne(n.then) && ne(n.catch), Nr = ((n, e) => n ? setImmediate : e ? ((t, r) => (Re.addEventListener("message", ({ source: s, data: o }) => {
  s === Re && o === t && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Re.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(
  typeof setImmediate == "function",
  ne(Re.postMessage)
), Io = typeof queueMicrotask < "u" ? queueMicrotask.bind(Re) : typeof process < "u" && process.nextTick || Nr, Uo = (n) => n != null && ne(n[Ot]), h = {
  isArray: qe,
  isArrayBuffer: Fr,
  isBuffer: tt,
  isFormData: co,
  isArrayBufferView: to,
  isString: no,
  isNumber: jr,
  isBoolean: ro,
  isObject: nt,
  isPlainObject: yt,
  isEmptyObject: so,
  isReadableStream: ho,
  isRequest: po,
  isResponse: mo,
  isHeaders: yo,
  isUndefined: Ue,
  isDate: io,
  isFile: oo,
  isBlob: ao,
  isRegExp: Co,
  isFunction: ne,
  isStream: lo,
  isURLSearchParams: fo,
  isTypedArray: _o,
  isFileList: uo,
  forEach: rt,
  merge: tn,
  extend: go,
  trim: bo,
  stripBOM: xo,
  inherits: Eo,
  toFlatObject: wo,
  kindOf: _t,
  kindOfTest: ae,
  endsWith: So,
  toArray: Oo,
  forEachEntry: To,
  matchAll: Ro,
  isHTMLForm: vo,
  hasOwnProperty: qn,
  hasOwnProp: qn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: $r,
  freezeMethods: Fo,
  toObjectSet: jo,
  toCamelCase: Ao,
  noop: ko,
  toFiniteNumber: Do,
  findKey: kr,
  global: Re,
  isContextDefined: Dr,
  isSpecCompliantForm: $o,
  toJSONObject: No,
  isAsyncFn: Po,
  isThenable: Lo,
  setImmediate: Nr,
  asap: Io,
  isIterable: Uo
};
function F(n, e, t, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
h.inherits(F, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: h.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Pr = F.prototype, Lr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((n) => {
  Lr[n] = { value: n };
});
Object.defineProperties(F, Lr);
Object.defineProperty(Pr, "isAxiosError", { value: !0 });
F.from = (n, e, t, r, s, o) => {
  const i = Object.create(Pr);
  h.toFlatObject(n, i, function(l) {
    return l !== Error.prototype;
  }, (c) => c !== "isAxiosError");
  const a = n && n.message ? n.message : "Error", u = e == null && n ? n.code : e;
  return F.call(i, a, u, t, r, s), n && i.cause == null && Object.defineProperty(i, "cause", { value: n, configurable: !0 }), i.name = n && n.name || "Error", o && Object.assign(i, o), i;
};
const Mo = null;
function nn(n) {
  return h.isPlainObject(n) || h.isArray(n);
}
function Ir(n) {
  return h.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Vn(n, e, t) {
  return n ? n.concat(e).map(function(s, o) {
    return s = Ir(s), !t && o ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function qo(n) {
  return h.isArray(n) && !n.some(nn);
}
const Vo = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Rt(n, e, t) {
  if (!h.isObject(n))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = h.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, x) {
    return !h.isUndefined(x[m]);
  });
  const r = t.metaTokens, s = t.visitor || l, o = t.dots, i = t.indexes, u = (t.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(e);
  if (!h.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null) return "";
    if (h.isDate(f))
      return f.toISOString();
    if (h.isBoolean(f))
      return f.toString();
    if (!u && h.isBlob(f))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(f) || h.isTypedArray(f) ? u && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, m, x) {
    let p = f;
    if (f && !x && typeof f == "object") {
      if (h.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), f = JSON.stringify(f);
      else if (h.isArray(f) && qo(f) || (h.isFileList(f) || h.endsWith(m, "[]")) && (p = h.toArray(f)))
        return m = Ir(m), p.forEach(function(S, v) {
          !(h.isUndefined(S) || S === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Vn([m], v, o) : i === null ? m : m + "[]",
            c(S)
          );
        }), !1;
    }
    return nn(f) ? !0 : (e.append(Vn(x, m, o), c(f)), !1);
  }
  const d = [], b = Object.assign(Vo, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: nn
  });
  function g(f, m) {
    if (!h.isUndefined(f)) {
      if (d.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(f), h.forEach(f, function(p, w) {
        (!(h.isUndefined(p) || p === null) && s.call(
          e,
          p,
          h.isString(w) ? w.trim() : w,
          m,
          b
        )) === !0 && g(p, m ? m.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!h.isObject(n))
    throw new TypeError("data must be an object");
  return g(n), e;
}
function Bn(n) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function dn(n, e) {
  this._pairs = [], n && Rt(n, this, e);
}
const Ur = dn.prototype;
Ur.append = function(e, t) {
  this._pairs.push([e, t]);
};
Ur.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, Bn);
  } : Bn;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function Bo(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Mr(n, e, t) {
  if (!e)
    return n;
  const r = t && t.encode || Bo;
  h.isFunction(t) && (t = {
    serialize: t
  });
  const s = t && t.serialize;
  let o;
  if (s ? o = s(e, t) : o = h.isURLSearchParams(e) ? e.toString() : new dn(e, t).toString(r), o) {
    const i = n.indexOf("#");
    i !== -1 && (n = n.slice(0, i)), n += (n.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return n;
}
class zn {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, t, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    h.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const qr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, zo = typeof URLSearchParams < "u" ? URLSearchParams : dn, Ho = typeof FormData < "u" ? FormData : null, Wo = typeof Blob < "u" ? Blob : null, Jo = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zo,
    FormData: Ho,
    Blob: Wo
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, hn = typeof window < "u" && typeof document < "u", rn = typeof navigator == "object" && navigator || void 0, Go = hn && (!rn || ["ReactNative", "NativeScript", "NS"].indexOf(rn.product) < 0), Ko = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yo = hn && window.location.href || "http://localhost", Zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: hn,
  hasStandardBrowserEnv: Go,
  hasStandardBrowserWebWorkerEnv: Ko,
  navigator: rn,
  origin: Yo
}, Symbol.toStringTag, { value: "Module" })), Z = {
  ...Zo,
  ...Jo
};
function Xo(n, e) {
  return Rt(n, new Z.classes.URLSearchParams(), {
    visitor: function(t, r, s, o) {
      return Z.isNode && h.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function Qo(n) {
  return h.matchAll(/\w+|\[(\w*)]/g, n).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ea(n) {
  const e = {}, t = Object.keys(n);
  let r;
  const s = t.length;
  let o;
  for (r = 0; r < s; r++)
    o = t[r], e[o] = n[o];
  return e;
}
function Vr(n) {
  function e(t, r, s, o) {
    let i = t[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), u = o >= t.length;
    return i = !i && h.isArray(s) ? s.length : i, u ? (h.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !h.isObject(s[i])) && (s[i] = []), e(t, r, s[i], o) && h.isArray(s[i]) && (s[i] = ea(s[i])), !a);
  }
  if (h.isFormData(n) && h.isFunction(n.entries)) {
    const t = {};
    return h.forEachEntry(n, (r, s) => {
      e(Qo(r), s, t, 0);
    }), t;
  }
  return null;
}
function ta(n, e, t) {
  if (h.isString(n))
    try {
      return (e || JSON.parse)(n), h.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(n);
}
const st = {
  transitional: qr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, t) {
    const r = t.getContentType() || "", s = r.indexOf("application/json") > -1, o = h.isObject(e);
    if (o && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
      return s ? JSON.stringify(Vr(e)) : e;
    if (h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e) || h.isReadableStream(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Xo(e, this.formSerializer).toString();
      if ((a = h.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Rt(
          a ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || s ? (t.setContentType("application/json", !1), ta(e)) : e;
  }],
  transformResponse: [function(e) {
    const t = this.transitional || st.transitional, r = t && t.forcedJSONParsing, s = this.responseType === "json";
    if (h.isResponse(e) || h.isReadableStream(e))
      return e;
    if (e && h.isString(e) && (r && !this.responseType || s)) {
      const i = !(t && t.silentJSONParsing) && s;
      try {
        return JSON.parse(e, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? F.from(a, F.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Z.classes.FormData,
    Blob: Z.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
h.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  st.headers[n] = {};
});
const na = h.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ra = (n) => {
  const e = {};
  let t, r, s;
  return n && n.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), t = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!t || e[t] && na[t]) && (t === "set-cookie" ? e[t] ? e[t].push(r) : e[t] = [r] : e[t] = e[t] ? e[t] + ", " + r : r);
  }), e;
}, Hn = Symbol("internals");
function Ge(n) {
  return n && String(n).trim().toLowerCase();
}
function bt(n) {
  return n === !1 || n == null ? n : h.isArray(n) ? n.map(bt) : String(n);
}
function sa(n) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(n); )
    e[r[1]] = r[2];
  return e;
}
const ia = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function qt(n, e, t, r, s) {
  if (h.isFunction(r))
    return r.call(this, e, t);
  if (s && (e = t), !!h.isString(e)) {
    if (h.isString(r))
      return e.indexOf(r) !== -1;
    if (h.isRegExp(r))
      return r.test(e);
  }
}
function oa(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r);
}
function aa(n, e) {
  const t = h.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + t, {
      value: function(s, o, i) {
        return this[r].call(this, e, s, o, i);
      },
      configurable: !0
    });
  });
}
let re = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    const s = this;
    function o(a, u, c) {
      const l = Ge(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const d = h.findKey(s, l);
      (!d || s[d] === void 0 || c === !0 || c === void 0 && s[d] !== !1) && (s[d || u] = bt(a));
    }
    const i = (a, u) => h.forEach(a, (c, l) => o(c, l, u));
    if (h.isPlainObject(e) || e instanceof this.constructor)
      i(e, t);
    else if (h.isString(e) && (e = e.trim()) && !ia(e))
      i(ra(e), t);
    else if (h.isObject(e) && h.isIterable(e)) {
      let a = {}, u, c;
      for (const l of e) {
        if (!h.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[c = l[0]] = (u = a[c]) ? h.isArray(u) ? [...u, l[1]] : [u, l[1]] : l[1];
      }
      i(a, t);
    } else
      e != null && o(t, e, r);
    return this;
  }
  get(e, t) {
    if (e = Ge(e), e) {
      const r = h.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!t)
          return s;
        if (t === !0)
          return sa(s);
        if (h.isFunction(t))
          return t.call(this, s, r);
        if (h.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = Ge(e), e) {
      const r = h.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || qt(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Ge(i), i) {
        const a = h.findKey(r, i);
        a && (!t || qt(r, r[a], a, t)) && (delete r[a], s = !0);
      }
    }
    return h.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let r = t.length, s = !1;
    for (; r--; ) {
      const o = t[r];
      (!e || qt(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, r = {};
    return h.forEach(this, (s, o) => {
      const i = h.findKey(r, o);
      if (i) {
        t[i] = bt(s), delete t[o];
        return;
      }
      const a = e ? oa(o) : String(o).trim();
      a !== o && delete t[o], t[a] = bt(s), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return h.forEach(this, (r, s) => {
      r != null && r !== !1 && (t[s] = e && h.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const r = new this(e);
    return t.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[Hn] = this[Hn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = Ge(i);
      r[a] || (aa(s, i), r[a] = !0);
    }
    return h.isArray(e) ? e.forEach(o) : o(e), this;
  }
};
re.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(re.prototype, ({ value: n }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => n,
    set(r) {
      this[t] = r;
    }
  };
});
h.freezeMethods(re);
function Vt(n, e) {
  const t = this || st, r = e || t, s = re.from(r.headers);
  let o = r.data;
  return h.forEach(n, function(a) {
    o = a.call(t, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Br(n) {
  return !!(n && n.__CANCEL__);
}
function Ve(n, e, t) {
  F.call(this, n ?? "canceled", F.ERR_CANCELED, e, t), this.name = "CanceledError";
}
h.inherits(Ve, F, {
  __CANCEL__: !0
});
function zr(n, e, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? n(t) : e(new F(
    "Request failed with status code " + t.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
function ua(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return e && e[1] || "";
}
function la(n, e) {
  n = n || 10;
  const t = new Array(n), r = new Array(n);
  let s = 0, o = 0, i;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const c = Date.now(), l = r[o];
    i || (i = c), t[s] = u, r[s] = c;
    let d = o, b = 0;
    for (; d !== s; )
      b += t[d++], d = d % n;
    if (s = (s + 1) % n, s === o && (o = (o + 1) % n), c - i < e)
      return;
    const g = l && c - l;
    return g ? Math.round(b * 1e3 / g) : void 0;
  };
}
function ca(n, e) {
  let t = 0, r = 1e3 / e, s, o;
  const i = (c, l = Date.now()) => {
    t = l, s = null, o && (clearTimeout(o), o = null), n(...c);
  };
  return [(...c) => {
    const l = Date.now(), d = l - t;
    d >= r ? i(c, l) : (s = c, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - d)));
  }, () => s && i(s)];
}
const wt = (n, e, t = 3) => {
  let r = 0;
  const s = la(50, 250);
  return ca((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, u = i - r, c = s(u), l = i <= a;
    r = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: u,
      rate: c || void 0,
      estimated: c && a && l ? (a - i) / c : void 0,
      event: o,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    n(d);
  }, t);
}, Wn = (n, e) => {
  const t = n != null;
  return [(r) => e[0]({
    lengthComputable: t,
    total: n,
    loaded: r
  }), e[1]];
}, Jn = (n) => (...e) => h.asap(() => n(...e)), fa = Z.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, e) => (t) => (t = new URL(t, Z.origin), n.protocol === t.protocol && n.host === t.host && (e || n.port === t.port)))(
  new URL(Z.origin),
  Z.navigator && /(msie|trident)/i.test(Z.navigator.userAgent)
) : () => !0, da = Z.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, e, t, r, s, o, i) {
      if (typeof document > "u") return;
      const a = [`${n}=${encodeURIComponent(e)}`];
      h.isNumber(t) && a.push(`expires=${new Date(t).toUTCString()}`), h.isString(r) && a.push(`path=${r}`), h.isString(s) && a.push(`domain=${s}`), o === !0 && a.push("secure"), h.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(n) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + n + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ha(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function pa(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function Hr(n, e, t) {
  let r = !ha(e);
  return n && (r || t == !1) ? pa(n, e) : e;
}
const Gn = (n) => n instanceof re ? { ...n } : n;
function Fe(n, e) {
  e = e || {};
  const t = {};
  function r(c, l, d, b) {
    return h.isPlainObject(c) && h.isPlainObject(l) ? h.merge.call({ caseless: b }, c, l) : h.isPlainObject(l) ? h.merge({}, l) : h.isArray(l) ? l.slice() : l;
  }
  function s(c, l, d, b) {
    if (h.isUndefined(l)) {
      if (!h.isUndefined(c))
        return r(void 0, c, d, b);
    } else return r(c, l, d, b);
  }
  function o(c, l) {
    if (!h.isUndefined(l))
      return r(void 0, l);
  }
  function i(c, l) {
    if (h.isUndefined(l)) {
      if (!h.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, l);
  }
  function a(c, l, d) {
    if (d in e)
      return r(c, l);
    if (d in n)
      return r(void 0, c);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (c, l, d) => s(Gn(c), Gn(l), d, !0)
  };
  return h.forEach(Object.keys({ ...n, ...e }), function(l) {
    const d = u[l] || s, b = d(n[l], e[l], l);
    h.isUndefined(b) && d !== a || (t[l] = b);
  }), t;
}
const Wr = (n) => {
  const e = Fe({}, n);
  let { data: t, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = e;
  if (e.headers = i = re.from(i), e.url = Mr(Hr(e.baseURL, e.url, e.allowAbsoluteUrls), n.params, n.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), h.isFormData(t)) {
    if (Z.hasStandardBrowserEnv || Z.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (h.isFunction(t.getHeaders)) {
      const u = t.getHeaders(), c = ["content-type", "content-length"];
      Object.entries(u).forEach(([l, d]) => {
        c.includes(l.toLowerCase()) && i.set(l, d);
      });
    }
  }
  if (Z.hasStandardBrowserEnv && (r && h.isFunction(r) && (r = r(e)), r || r !== !1 && fa(e.url))) {
    const u = s && o && da.read(o);
    u && i.set(s, u);
  }
  return e;
}, ma = typeof XMLHttpRequest < "u", ya = ma && function(n) {
  return new Promise(function(t, r) {
    const s = Wr(n);
    let o = s.data;
    const i = re.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: u, onDownloadProgress: c } = s, l, d, b, g, f;
    function m() {
      g && g(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let x = new XMLHttpRequest();
    x.open(s.method.toUpperCase(), s.url, !0), x.timeout = s.timeout;
    function p() {
      if (!x)
        return;
      const S = re.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), O = {
        data: !a || a === "text" || a === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: S,
        config: n,
        request: x
      };
      zr(function(C) {
        t(C), m();
      }, function(C) {
        r(C), m();
      }, O), x = null;
    }
    "onloadend" in x ? x.onloadend = p : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, x.onabort = function() {
      x && (r(new F("Request aborted", F.ECONNABORTED, n, x)), x = null);
    }, x.onerror = function(v) {
      const O = v && v.message ? v.message : "Network Error", R = new F(O, F.ERR_NETWORK, n, x);
      R.event = v || null, r(R), x = null;
    }, x.ontimeout = function() {
      let v = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const O = s.transitional || qr;
      s.timeoutErrorMessage && (v = s.timeoutErrorMessage), r(new F(
        v,
        O.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        n,
        x
      )), x = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in x && h.forEach(i.toJSON(), function(v, O) {
      x.setRequestHeader(O, v);
    }), h.isUndefined(s.withCredentials) || (x.withCredentials = !!s.withCredentials), a && a !== "json" && (x.responseType = s.responseType), c && ([b, f] = wt(c, !0), x.addEventListener("progress", b)), u && x.upload && ([d, g] = wt(u), x.upload.addEventListener("progress", d), x.upload.addEventListener("loadend", g)), (s.cancelToken || s.signal) && (l = (S) => {
      x && (r(!S || S.type ? new Ve(null, n, x) : S), x.abort(), x = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const w = ua(s.url);
    if (w && Z.protocols.indexOf(w) === -1) {
      r(new F("Unsupported protocol " + w + ":", F.ERR_BAD_REQUEST, n));
      return;
    }
    x.send(o || null);
  });
}, ba = (n, e) => {
  const { length: t } = n = n ? n.filter(Boolean) : [];
  if (e || t) {
    let r = new AbortController(), s;
    const o = function(c) {
      if (!s) {
        s = !0, a();
        const l = c instanceof Error ? c : this.reason;
        r.abort(l instanceof F ? l : new Ve(l instanceof Error ? l.message : l));
      }
    };
    let i = e && setTimeout(() => {
      i = null, o(new F(`timeout ${e} of ms exceeded`, F.ETIMEDOUT));
    }, e);
    const a = () => {
      n && (i && clearTimeout(i), i = null, n.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), n = null);
    };
    n.forEach((c) => c.addEventListener("abort", o));
    const { signal: u } = r;
    return u.unsubscribe = () => h.asap(a), u;
  }
}, ga = function* (n, e) {
  let t = n.byteLength;
  if (t < e) {
    yield n;
    return;
  }
  let r = 0, s;
  for (; r < t; )
    s = r + e, yield n.slice(r, s), r = s;
}, xa = async function* (n, e) {
  for await (const t of Ea(n))
    yield* ga(t, e);
}, Ea = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const e = n.getReader();
  try {
    for (; ; ) {
      const { done: t, value: r } = await e.read();
      if (t)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, Kn = (n, e, t, r) => {
  const s = xa(n, e);
  let o = 0, i, a = (u) => {
    i || (i = !0, r && r(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: c, value: l } = await s.next();
        if (c) {
          a(), u.close();
          return;
        }
        let d = l.byteLength;
        if (t) {
          let b = o += d;
          t(b);
        }
        u.enqueue(new Uint8Array(l));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(u) {
      return a(u), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Yn = 64 * 1024, { isFunction: ft } = h, wa = (({ Request: n, Response: e }) => ({
  Request: n,
  Response: e
}))(h.global), {
  ReadableStream: Zn,
  TextEncoder: Xn
} = h.global, Qn = (n, ...e) => {
  try {
    return !!n(...e);
  } catch {
    return !1;
  }
}, Sa = (n) => {
  n = h.merge.call({
    skipUndefined: !0
  }, wa, n);
  const { fetch: e, Request: t, Response: r } = n, s = e ? ft(e) : typeof fetch == "function", o = ft(t), i = ft(r);
  if (!s)
    return !1;
  const a = s && ft(Zn), u = s && (typeof Xn == "function" ? /* @__PURE__ */ ((f) => (m) => f.encode(m))(new Xn()) : async (f) => new Uint8Array(await new t(f).arrayBuffer())), c = o && a && Qn(() => {
    let f = !1;
    const m = new t(Z.origin, {
      body: new Zn(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !m;
  }), l = i && a && Qn(() => h.isReadableStream(new r("").body)), d = {
    stream: l && ((f) => f.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !d[f] && (d[f] = (m, x) => {
      let p = m && m[f];
      if (p)
        return p.call(m);
      throw new F(`Response type '${f}' is not supported`, F.ERR_NOT_SUPPORT, x);
    });
  });
  const b = async (f) => {
    if (f == null)
      return 0;
    if (h.isBlob(f))
      return f.size;
    if (h.isSpecCompliantForm(f))
      return (await new t(Z.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (h.isArrayBufferView(f) || h.isArrayBuffer(f))
      return f.byteLength;
    if (h.isURLSearchParams(f) && (f = f + ""), h.isString(f))
      return (await u(f)).byteLength;
  }, g = async (f, m) => {
    const x = h.toFiniteNumber(f.getContentLength());
    return x ?? b(m);
  };
  return async (f) => {
    let {
      url: m,
      method: x,
      data: p,
      signal: w,
      cancelToken: S,
      timeout: v,
      onDownloadProgress: O,
      onUploadProgress: R,
      responseType: C,
      headers: A,
      withCredentials: $ = "same-origin",
      fetchOptions: T
    } = Wr(f), j = e || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let N = ba([w, S && S.toAbortSignal()], v), U = null;
    const k = N && N.unsubscribe && (() => {
      N.unsubscribe();
    });
    let z;
    try {
      if (R && c && x !== "get" && x !== "head" && (z = await g(A, p)) !== 0) {
        let y = new t(m, {
          method: "POST",
          body: p,
          duplex: "half"
        }), _;
        if (h.isFormData(p) && (_ = y.headers.get("content-type")) && A.setContentType(_), y.body) {
          const [P, I] = Wn(
            z,
            wt(Jn(R))
          );
          p = Kn(y.body, Yn, P, I);
        }
      }
      h.isString($) || ($ = $ ? "include" : "omit");
      const H = o && "credentials" in t.prototype, ue = {
        ...T,
        signal: N,
        method: x.toUpperCase(),
        headers: A.normalize().toJSON(),
        body: p,
        duplex: "half",
        credentials: H ? $ : void 0
      };
      U = o && new t(m, ue);
      let W = await (o ? j(U, T) : j(m, ue));
      const be = l && (C === "stream" || C === "response");
      if (l && (O || be && k)) {
        const y = {};
        ["status", "statusText", "headers"].forEach((se) => {
          y[se] = W[se];
        });
        const _ = h.toFiniteNumber(W.headers.get("content-length")), [P, I] = O && Wn(
          _,
          wt(Jn(O), !0)
        ) || [];
        W = new r(
          Kn(W.body, Yn, P, () => {
            I && I(), k && k();
          }),
          y
        );
      }
      C = C || "text";
      let ke = await d[h.findKey(d, C) || "text"](W, f);
      return !be && k && k(), await new Promise((y, _) => {
        zr(y, _, {
          data: ke,
          headers: re.from(W.headers),
          status: W.status,
          statusText: W.statusText,
          config: f,
          request: U
        });
      });
    } catch (H) {
      throw k && k(), H && H.name === "TypeError" && /Load failed|fetch/i.test(H.message) ? Object.assign(
        new F("Network Error", F.ERR_NETWORK, f, U),
        {
          cause: H.cause || H
        }
      ) : F.from(H, H && H.code, f, U);
    }
  };
}, Oa = /* @__PURE__ */ new Map(), Jr = (n) => {
  let e = n && n.env || {};
  const { fetch: t, Request: r, Response: s } = e, o = [
    r,
    s,
    t
  ];
  let i = o.length, a = i, u, c, l = Oa;
  for (; a--; )
    u = o[a], c = l.get(u), c === void 0 && l.set(u, c = a ? /* @__PURE__ */ new Map() : Sa(e)), l = c;
  return c;
};
Jr();
const pn = {
  http: Mo,
  xhr: ya,
  fetch: {
    get: Jr
  }
};
h.forEach(pn, (n, e) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: e });
  }
});
const er = (n) => `- ${n}`, _a = (n) => h.isFunction(n) || n === null || n === !1;
function Ta(n, e) {
  n = h.isArray(n) ? n : [n];
  const { length: t } = n;
  let r, s;
  const o = {};
  for (let i = 0; i < t; i++) {
    r = n[i];
    let a;
    if (s = r, !_a(r) && (s = pn[(a = String(r)).toLowerCase()], s === void 0))
      throw new F(`Unknown adapter '${a}'`);
    if (s && (h.isFunction(s) || (s = s.get(e))))
      break;
    o[a || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([u, c]) => `adapter ${u} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? i.length > 1 ? `since :
` + i.map(er).join(`
`) : " " + er(i[0]) : "as no adapter specified";
    throw new F(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Gr = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ta,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: pn
};
function Bt(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Ve(null, n);
}
function tr(n) {
  return Bt(n), n.headers = re.from(n.headers), n.data = Vt.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Gr.getAdapter(n.adapter || st.adapter, n)(n).then(function(r) {
    return Bt(n), r.data = Vt.call(
      n,
      n.transformResponse,
      r
    ), r.headers = re.from(r.headers), r;
  }, function(r) {
    return Br(r) || (Bt(n), r && r.response && (r.response.data = Vt.call(
      n,
      n.transformResponse,
      r.response
    ), r.response.headers = re.from(r.response.headers))), Promise.reject(r);
  });
}
const Kr = "1.13.0", vt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
  vt[n] = function(r) {
    return typeof r === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
const nr = {};
vt.transitional = function(e, t, r) {
  function s(o, i) {
    return "[Axios v" + Kr + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (e === !1)
      throw new F(
        s(i, " has been removed" + (t ? " in " + t : "")),
        F.ERR_DEPRECATED
      );
    return t && !nr[i] && (nr[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(o, i, a) : !0;
  };
};
vt.spelling = function(e) {
  return (t, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function Ra(n, e, t) {
  if (typeof n != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = e[o];
    if (i) {
      const a = n[o], u = a === void 0 || i(a, o, n);
      if (u !== !0)
        throw new F("option " + o + " must be " + u, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new F("Unknown option " + o, F.ERR_BAD_OPTION);
  }
}
const gt = {
  assertOptions: Ra,
  validators: vt
}, le = gt.validators;
let Ae = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new zn(),
      response: new zn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = Fe(this.defaults, t);
    const { transitional: r, paramsSerializer: s, headers: o } = t;
    r !== void 0 && gt.assertOptions(r, {
      silentJSONParsing: le.transitional(le.boolean),
      forcedJSONParsing: le.transitional(le.boolean),
      clarifyTimeoutError: le.transitional(le.boolean)
    }, !1), s != null && (h.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : gt.assertOptions(s, {
      encode: le.function,
      serialize: le.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), gt.assertOptions(t, {
      baseUrl: le.spelling("baseURL"),
      withXsrfToken: le.spelling("withXSRFToken")
    }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let i = o && h.merge(
      o.common,
      o[t.method]
    );
    o && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), t.headers = re.concat(i, o);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(t) === !1 || (u = u && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let l, d = 0, b;
    if (!u) {
      const f = [tr.bind(this), void 0];
      for (f.unshift(...a), f.push(...c), b = f.length, l = Promise.resolve(t); d < b; )
        l = l.then(f[d++], f[d++]);
      return l;
    }
    b = a.length;
    let g = t;
    for (; d < b; ) {
      const f = a[d++], m = a[d++];
      try {
        g = f(g);
      } catch (x) {
        m.call(this, x);
        break;
      }
    }
    try {
      l = tr.call(this, g);
    } catch (f) {
      return Promise.reject(f);
    }
    for (d = 0, b = c.length; d < b; )
      l = l.then(c[d++], c[d++]);
    return l;
  }
  getUri(e) {
    e = Fe(this.defaults, e);
    const t = Hr(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Mr(t, e.params, e.paramsSerializer);
  }
};
h.forEach(["delete", "get", "head", "options"], function(e) {
  Ae.prototype[e] = function(t, r) {
    return this.request(Fe(r || {}, {
      method: e,
      url: t,
      data: (r || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(o, i, a) {
      return this.request(Fe(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Ae.prototype[e] = t(), Ae.prototype[e + "Form"] = t(!0);
});
let va = class Yr {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(o) {
      t = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, e(function(o, i, a) {
      r.reason || (r.reason = new Ve(o, i, a), t(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), t = (r) => {
      e.abort(r);
    };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Yr(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function Aa(n) {
  return function(t) {
    return n.apply(null, t);
  };
}
function Ca(n) {
  return h.isObject(n) && n.isAxiosError === !0;
}
const sn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(sn).forEach(([n, e]) => {
  sn[e] = n;
});
function Zr(n) {
  const e = new Ae(n), t = Ar(Ae.prototype.request, e);
  return h.extend(t, Ae.prototype, e, { allOwnKeys: !0 }), h.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return Zr(Fe(n, s));
  }, t;
}
const B = Zr(st);
B.Axios = Ae;
B.CanceledError = Ve;
B.CancelToken = va;
B.isCancel = Br;
B.VERSION = Kr;
B.toFormData = Rt;
B.AxiosError = F;
B.Cancel = B.CanceledError;
B.all = function(e) {
  return Promise.all(e);
};
B.spread = Aa;
B.isAxiosError = Ca;
B.mergeConfig = Fe;
B.AxiosHeaders = re;
B.formToJSON = (n) => Vr(h.isHTMLForm(n) ? new FormData(n) : n);
B.getAdapter = Gr.getAdapter;
B.HttpStatusCode = sn;
B.default = B;
const {
  Axios: Ha,
  AxiosError: Wa,
  CanceledError: Ja,
  isCancel: Ga,
  CancelToken: Ka,
  VERSION: Ya,
  all: Za,
  Cancel: Xa,
  isAxiosError: Qa,
  spread: eu,
  toFormData: tu,
  AxiosHeaders: nu,
  HttpStatusCode: ru,
  formToJSON: su,
  getAdapter: iu,
  mergeConfig: ou
} = B, au = (n, { onUnauthorized: e, interceptors: t } = {}) => {
  const r = B.create({ baseURL: n });
  return r.interceptors.response.use(
    (s) => s,
    (s) => (s.response?.status === 401 && e && e(), Promise.reject(s))
  ), t && t.forEach((s) => {
    r.interceptors.response.use(s.success, s.error);
  }), r;
};
export {
  Pa as AutocompleteField,
  Va as DashboardLayout,
  As as DataTable,
  Na as FileUploadField,
  ar as Form,
  Qe as FormContext,
  qa as LoginPage,
  Ma as ResourceFormPage,
  Ua as ResourceListPage,
  $a as StatCard,
  La as SwitchField,
  On as TextField,
  au as createApiClient,
  ci as createErrorTranslator,
  yr as getTranslatedError,
  fi as useApi,
  Ia as useApiMutation,
  di as useDebounce
};
