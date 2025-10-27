import je, { createContext as er, useState as U, useCallback as Ge, useContext as Ie, useEffect as ye, useLayoutEffect as Or, useMemo as tr, useRef as xe, useDebugValue as Tr } from "react";
import { Paper as Xe, Box as Y, Typography as de, Toolbar as Te, TableContainer as jr, Table as Rr, TableHead as Fr, TableRow as Fe, TableCell as Ce, TableSortLabel as Cr, TableBody as kr, TablePagination as Ar, CircularProgress as Ne, TextField as wt, Avatar as Dr, Button as De, Autocomplete as $r, FormControlLabel as rr, Switch as nr, Alert as dt, Container as Ir, List as Nr, ListItem as Pr, ListItemButton as Lr, ListItemIcon as Vr, ListItemText as Mr, CssBaseline as Ur, AppBar as qr, IconButton as zr, Drawer as At } from "@mui/material";
import { ImageNotSupported as Wr, Add as Yr, Search as Gr, Menu as Br } from "@mui/icons-material";
function Hr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Me = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dt;
function Zr() {
  if (Dt) return ke;
  Dt = 1;
  var r = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(n, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var o in s)
        o !== "key" && (i[o] = s[o]);
    } else i = s;
    return s = i.ref, {
      $$typeof: r,
      type: n,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return ke.Fragment = e, ke.jsx = t, ke.jsxs = t, ke;
}
var Ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function Jr() {
  return $t || ($t = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === T ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case E:
          return "Fragment";
        case y:
          return "Profiler";
        case l:
          return "StrictMode";
        case j:
          return "Suspense";
        case C:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case b:
            return "Portal";
          case F:
            return c.displayName || "Context";
          case O:
            return (c._context.displayName || "Context") + ".Consumer";
          case w:
            var _ = c.render;
            return c = c.displayName, c || (c = _.displayName || _.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case S:
            return _ = c.displayName || null, _ !== null ? _ : r(c.type) || "Memo";
          case v:
            _ = c._payload, c = c._init;
            try {
              return r(c(_));
            } catch {
            }
        }
      return null;
    }
    function e(c) {
      return "" + c;
    }
    function t(c) {
      try {
        e(c);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var D = _.error, I = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return D.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), e(c);
      }
    }
    function n(c) {
      if (c === E) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === v)
        return "<...>";
      try {
        var _ = r(c);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var c = V.A;
      return c === null ? null : c.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(c) {
      if (q.call(c, "key")) {
        var _ = Object.getOwnPropertyDescriptor(c, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function o(c, _) {
      function D() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: D,
        configurable: !0
      });
    }
    function u() {
      var c = r(this.type);
      return ne[c] || (ne[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function p(c, _, D, I, se, Ee) {
      var P = D.ref;
      return c = {
        $$typeof: g,
        type: c,
        key: _,
        props: D,
        _owner: I
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ee
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function h(c, _, D, I, se, Ee) {
      var P = _.children;
      if (P !== void 0)
        if (I)
          if (L(P)) {
            for (I = 0; I < P.length; I++)
              d(P[I]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(P);
      if (q.call(_, "key")) {
        P = r(c);
        var le = Object.keys(_).filter(function(me) {
          return me !== "key";
        });
        I = 0 < le.length ? "{key: someKey, " + le.join(": ..., ") + ": ...}" : "{key: someKey}", Ve[P + I] || (le = 0 < le.length ? "{" + le.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          P,
          le,
          P
        ), Ve[P + I] = !0);
      }
      if (P = null, D !== void 0 && (t(D), P = "" + D), a(_) && (t(_.key), P = "" + _.key), "key" in _) {
        D = {};
        for (var Re in _)
          Re !== "key" && (D[Re] = _[Re]);
      } else D = _;
      return P && o(
        D,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), p(
        c,
        P,
        D,
        s(),
        se,
        Ee
      );
    }
    function d(c) {
      x(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === v && (c._payload.status === "fulfilled" ? x(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function x(c) {
      return typeof c == "object" && c !== null && c.$$typeof === g;
    }
    var m = je, g = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), F = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), V = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, L = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var Z, ne = {}, X = m.react_stack_bottom_frame.bind(
      m,
      i
    )(), pe = K(n(i)), Ve = {};
    Ae.Fragment = E, Ae.jsx = function(c, _, D) {
      var I = 1e4 > V.recentlyCreatedOwnerStacks++;
      return h(
        c,
        _,
        D,
        !1,
        I ? Error("react-stack-top-frame") : X,
        I ? K(n(c)) : pe
      );
    }, Ae.jsxs = function(c, _, D) {
      var I = 1e4 > V.recentlyCreatedOwnerStacks++;
      return h(
        c,
        _,
        D,
        !0,
        I ? Error("react-stack-top-frame") : X,
        I ? K(n(c)) : pe
      );
    };
  })()), Ae;
}
var It;
function Kr() {
  return It || (It = 1, process.env.NODE_ENV === "production" ? Me.exports = Zr() : Me.exports = Jr()), Me.exports;
}
var f = Kr();
const Fs = ({ icon: r, title: e, value: t, color: n, sx: s, onClick: i }) => /* @__PURE__ */ f.jsxs(
  Xe,
  {
    sx: {
      p: 3,
      display: "flex",
      alignItems: "center",
      gap: 2,
      height: "100%",
      cursor: i ? "pointer" : "default",
      ...s
    },
    onClick: i,
    elevation: 2,
    children: [
      /* @__PURE__ */ f.jsx(Y, { sx: { color: n || "primary.main", fontSize: 40 }, "data-testid": "statcard-icon", children: r }),
      /* @__PURE__ */ f.jsxs(Y, { children: [
        /* @__PURE__ */ f.jsx(de, { color: "text.secondary", children: e }),
        /* @__PURE__ */ f.jsx(de, { variant: "h5", sx: { fontWeight: "bold" }, children: t })
      ] })
    ]
  }
), Xr = () => /* @__PURE__ */ f.jsx(Y, { sx: { p: 4, textAlign: "center" }, children: /* @__PURE__ */ f.jsx(de, { color: "text.secondary", children: "No rows" }) }), Qr = () => /* @__PURE__ */ f.jsx(Y, { sx: { display: "flex", justifyContent: "center", alignItems: "center", p: 4 }, children: /* @__PURE__ */ f.jsx(Ne, {}) }), en = ({
  rows: r = [],
  columns: e = [],
  getRowId: t = (O) => O.id,
  loading: n = !1,
  error: s,
  pagination: i = !1,
  rowCount: a = 0,
  page: o = 0,
  onPageChange: u = () => {
  },
  perPage: p = 10,
  onPerPageChange: h = () => {
  },
  perPageOptions: d = [10, 25, 100],
  sorting: x = !1,
  sortModel: m = [],
  onSortModelChange: g = () => {
  },
  showRowNumber: b = !0,
  slots: E = {},
  slotProps: l = {},
  sx: y
}) => {
  const {
    toolbar: O,
    noRowsOverlay: F = Xr,
    loadingOverlay: w = Qr
  } = E, j = (v) => {
    if (!x) return;
    const A = m.find((V) => V.field === v);
    let T = A ? A.sort === "asc" ? [{ field: v, sort: "desc" }] : [] : [{ field: v, sort: "asc" }];
    g(T);
  }, C = m.length > 0 ? m[0] : null, S = [
    ...b ? [{
      field: "__rowNumber__",
      headerName: "#",
      width: 60,
      align: "center",
      renderCell: ({ index: v }) => o * p + v + 1
    }] : [],
    ...e
  ];
  return /* @__PURE__ */ f.jsxs(Xe, { sx: y, children: [
    O && /* @__PURE__ */ f.jsx(Te, { children: /* @__PURE__ */ f.jsx(O, { ...l.toolbar || {} }) }),
    /* @__PURE__ */ f.jsx(Y, { sx: { width: "100%", overflowX: "auto" }, children: /* @__PURE__ */ f.jsx(jr, { children: /* @__PURE__ */ f.jsxs(Rr, { stickyHeader: !0, children: [
      /* @__PURE__ */ f.jsx(Fr, { children: /* @__PURE__ */ f.jsx(Fe, { children: S.map((v) => /* @__PURE__ */ f.jsx(
        Ce,
        {
          align: v.align || "inherit",
          width: v.width,
          sx: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
          sortDirection: C?.field === v.field ? C.sort : !1,
          children: v.sortable && x ? /* @__PURE__ */ f.jsx(
            Cr,
            {
              active: C?.field === v.field,
              direction: C?.field === v.field ? C.sort : "asc",
              onClick: () => j(v.field),
              children: v.headerName
            }
          ) : v.headerName
        },
        v.field
      )) }) }),
      /* @__PURE__ */ f.jsx(kr, { children: n ? /* @__PURE__ */ f.jsx(Fe, { children: /* @__PURE__ */ f.jsx(Ce, { colSpan: S.length, sx: { border: "none" }, children: /* @__PURE__ */ f.jsx(w, { ...l.loadingOverlay || {} }) }) }) : s ? /* @__PURE__ */ f.jsx(Fe, { children: /* @__PURE__ */ f.jsx(Ce, { colSpan: S.length, sx: { border: "none", textAlign: "center" }, children: /* @__PURE__ */ f.jsx(de, { color: "error", children: s.message || "An error occurred." }) }) }) : r.length === 0 ? /* @__PURE__ */ f.jsx(Fe, { children: /* @__PURE__ */ f.jsx(Ce, { colSpan: S.length, sx: { border: "none" }, children: /* @__PURE__ */ f.jsx(F, { ...l.noRowsOverlay || {} }) }) }) : r.map((v, A) => /* @__PURE__ */ f.jsx(Fe, { hover: !0, children: S.map((T) => {
        const V = T.field.split(".").reduce((q, L) => q?.[L], v);
        return /* @__PURE__ */ f.jsx(Ce, { align: T.align || "inherit", sx: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: T.renderCell ? T.renderCell({ value: V, row: v, id: t(v), index: A }) : V }, T.field);
      }) }, t(v))) })
    ] }) }) }),
    i && !s && r.length > 0 && /* @__PURE__ */ f.jsx(
      Ar,
      {
        component: "div",
        count: a,
        page: o,
        onPageChange: (v, A) => u(A),
        rowsPerPage: p,
        onRowsPerPageChange: (v) => h(parseInt(v.target.value, 10)),
        rowsPerPageOptions: d,
        showFirstButton: !0,
        showLastButton: !0,
        labelRowsPerPage: null,
        labelDisplayedRows: ({ from: v, to: A, count: T }) => `${v} - ${A} | ${T}`,
        sx: { display: "flex", justifyContent: "center" }
      }
    )
  ] });
}, Pe = er(null), sr = ({ initialValues: r = {}, onSubmit: e, validationSchema: t, children: n, ...s }) => {
  const [i, a] = U(r || {}), [o, u] = U({}), p = Ge((x, m) => {
    a((g) => ({
      ...g,
      [x]: m
    })), o[x] && u((g) => ({
      ...g,
      [x]: void 0
    }));
  }, [o]), h = async (x) => {
    x.preventDefault(), u({});
    try {
      t && await t.validate(i, { abortEarly: !1 }), e && e(i);
    } catch (m) {
      if (m.inner) {
        const g = m.inner.reduce((b, E) => (b[E.path] = E.message, b), {});
        u(g);
      }
    }
  }, d = {
    values: i,
    setFieldValue: p,
    errors: o
  };
  return /* @__PURE__ */ f.jsx(Pe.Provider, { value: d, children: /* @__PURE__ */ f.jsx("form", { onSubmit: h, ...s, children: n }) });
}, Nt = ({ name: r, label: e, ...t }) => {
  const n = Ie(Pe);
  if (!n)
    throw new Error("TextField must be used within a Form component");
  const { values: s, setFieldValue: i, errors: a } = n, o = a[r], u = (p) => {
    i(r, p.target.value);
  };
  return /* @__PURE__ */ f.jsx(
    wt,
    {
      name: r,
      label: e,
      value: s[r] || "",
      onChange: u,
      error: !!o,
      helperText: o || "",
      ...t
    }
  );
}, Cs = ({ name: r, label: e = "Upload File", initialPreview: t }) => {
  const n = Ie(Pe), [s, i] = U(t || null);
  if (!n)
    throw new Error("FileUploadField must be used within a Form component");
  const { setFieldValue: a, values: o } = n, u = o[r];
  ye(() => {
    t && i(t);
  }, [t]), ye(() => {
    u || i(t || null);
  }, [u, t]);
  const p = (h) => {
    const d = h.target.files[0];
    if (d) {
      a(r, d);
      const x = new FileReader();
      x.onloadend = () => {
        i(x.result);
      }, x.readAsDataURL(d);
    }
  };
  return /* @__PURE__ */ f.jsxs(Y, { sx: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }, children: [
    /* @__PURE__ */ f.jsx(Dr, { src: s, sx: { width: 100, height: 100 }, children: !s && /* @__PURE__ */ f.jsx(Wr, { sx: { width: "70%", height: "70%" } }) }),
    /* @__PURE__ */ f.jsxs(De, { variant: "outlined", component: "label", children: [
      e,
      /* @__PURE__ */ f.jsx("input", { type: "file", hidden: !0, accept: "image/*", onChange: p, "data-testid": "file-upload-input" })
    ] })
  ] });
}, ks = ({
  name: r,
  label: e,
  fetchOptions: t,
  getOptionLabel: n = (a) => a.label,
  multiple: s = !1,
  ...i
}) => {
  const a = Ie(Pe);
  if (!a)
    throw new Error("AutocompleteField must be used within a Form component");
  const { values: o, setFieldValue: u, errors: p } = a, [h, d] = U([]), [x, m] = U(!1), [g, b] = U("");
  ye(() => {
    let y = !0;
    return m(!0), t(g).then((O) => {
      y && d(O || []);
    }).catch(() => {
      y && d([]);
    }).finally(() => {
      y && m(!1);
    }), () => {
      y = !1;
    };
  }, [g, t]);
  const E = (y, O) => {
    u(r, O);
  }, l = p?.[r];
  return /* @__PURE__ */ f.jsx(
    $r,
    {
      multiple: s,
      options: h,
      loading: x,
      getOptionLabel: n,
      value: o[r] || (s ? [] : null),
      onChange: E,
      onInputChange: (y, O) => {
        b(O);
      },
      renderInput: (y) => /* @__PURE__ */ f.jsx(
        wt,
        {
          ...y,
          label: e,
          error: !!l,
          helperText: l,
          InputProps: {
            ...y.InputProps,
            endAdornment: /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
              x ? /* @__PURE__ */ f.jsx(Ne, { color: "inherit", size: 20 }) : null,
              y.InputProps.endAdornment
            ] })
          }
        }
      ),
      ...i
    }
  );
}, As = ({ name: r, label: e, ...t }) => {
  const n = Ie(Pe);
  if (!n)
    throw new Error("SwitchField must be used within a Form component");
  const { values: s, setFieldValue: i } = n, a = (o) => {
    i(r, o.target.checked);
  };
  return /* @__PURE__ */ f.jsx(
    rr,
    {
      control: /* @__PURE__ */ f.jsx(
        nr,
        {
          checked: !!s[r],
          onChange: a,
          name: r,
          ...t
        }
      ),
      label: e
    }
  );
};
var Ue = { exports: {} }, tt = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function tn() {
  if (Pt) return tt;
  Pt = 1;
  var r = je;
  function e(d, x) {
    return d === x && (d !== 0 || 1 / d === 1 / x) || d !== d && x !== x;
  }
  var t = typeof Object.is == "function" ? Object.is : e, n = r.useState, s = r.useEffect, i = r.useLayoutEffect, a = r.useDebugValue;
  function o(d, x) {
    var m = x(), g = n({ inst: { value: m, getSnapshot: x } }), b = g[0].inst, E = g[1];
    return i(
      function() {
        b.value = m, b.getSnapshot = x, u(b) && E({ inst: b });
      },
      [d, m, x]
    ), s(
      function() {
        return u(b) && E({ inst: b }), d(function() {
          u(b) && E({ inst: b });
        });
      },
      [d]
    ), a(m), m;
  }
  function u(d) {
    var x = d.getSnapshot;
    d = d.value;
    try {
      var m = x();
      return !t(d, m);
    } catch {
      return !0;
    }
  }
  function p(d, x) {
    return x();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : o;
  return tt.useSyncExternalStore = r.useSyncExternalStore !== void 0 ? r.useSyncExternalStore : h, tt;
}
var rt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function rn() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(m, g) {
      return m === g && (m !== 0 || 1 / m === 1 / g) || m !== m && g !== g;
    }
    function e(m, g) {
      h || s.startTransition === void 0 || (h = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = g();
      if (!d) {
        var E = g();
        i(b, E) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      E = a({
        inst: { value: b, getSnapshot: g }
      });
      var l = E[0].inst, y = E[1];
      return u(
        function() {
          l.value = b, l.getSnapshot = g, t(l) && y({ inst: l });
        },
        [m, b, g]
      ), o(
        function() {
          return t(l) && y({ inst: l }), m(function() {
            t(l) && y({ inst: l });
          });
        },
        [m]
      ), p(b), b;
    }
    function t(m) {
      var g = m.getSnapshot;
      m = m.value;
      try {
        var b = g();
        return !i(m, b);
      } catch {
        return !0;
      }
    }
    function n(m, g) {
      return g();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var s = je, i = typeof Object.is == "function" ? Object.is : r, a = s.useState, o = s.useEffect, u = s.useLayoutEffect, p = s.useDebugValue, h = !1, d = !1, x = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : e;
    rt.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : x, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), rt;
}
var Vt;
function nn() {
  return Vt || (Vt = 1, process.env.NODE_ENV === "production" ? Ue.exports = tn() : Ue.exports = rn()), Ue.exports;
}
var sn = nn();
const ir = 0, ar = 1, or = 2, Mt = 3;
var Ut = Object.prototype.hasOwnProperty;
function ht(r, e) {
  var t, n;
  if (r === e) return !0;
  if (r && e && (t = r.constructor) === e.constructor) {
    if (t === Date) return r.getTime() === e.getTime();
    if (t === RegExp) return r.toString() === e.toString();
    if (t === Array) {
      if ((n = r.length) === e.length)
        for (; n-- && ht(r[n], e[n]); ) ;
      return n === -1;
    }
    if (!t || typeof r == "object") {
      n = 0;
      for (t in r)
        if (Ut.call(r, t) && ++n && !Ut.call(e, t) || !(t in e) || !ht(r[t], e[t])) return !1;
      return Object.keys(e).length === n;
    }
  }
  return r !== r && e !== e;
}
const ue = /* @__PURE__ */ new WeakMap(), ce = () => {
}, W = (
  /*#__NOINLINE__*/
  ce()
), pt = Object, R = (r) => r === W, te = (r) => typeof r == "function", he = (r, e) => ({
  ...r,
  ...e
}), ur = (r) => te(r.then), nt = {}, qe = {}, St = "undefined", Le = typeof window != St, mt = typeof document != St, an = Le && "Deno" in window, on = () => Le && typeof window.requestAnimationFrame != St, lr = (r, e) => {
  const t = ue.get(r);
  return [
    // Getter
    () => !R(e) && r.get(e) || nt,
    // Setter
    (n) => {
      if (!R(e)) {
        const s = r.get(e);
        e in qe || (qe[e] = s), t[5](e, he(s, n), s || nt);
      }
    },
    // Subscriber
    t[6],
    // Get server cache snapshot
    () => !R(e) && e in qe ? qe[e] : !R(e) && r.get(e) || nt
  ];
};
let xt = !0;
const un = () => xt, [gt, bt] = Le && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  ce,
  ce
], ln = () => {
  const r = mt && document.visibilityState;
  return R(r) || r !== "hidden";
}, cn = (r) => (mt && document.addEventListener("visibilitychange", r), gt("focus", r), () => {
  mt && document.removeEventListener("visibilitychange", r), bt("focus", r);
}), fn = (r) => {
  const e = () => {
    xt = !0, r();
  }, t = () => {
    xt = !1;
  };
  return gt("online", e), gt("offline", t), () => {
    bt("online", e), bt("offline", t);
  };
}, dn = {
  isOnline: un,
  isVisible: ln
}, hn = {
  initFocus: cn,
  initReconnect: fn
}, qt = !je.useId, $e = !Le || an, pn = (r) => on() ? window.requestAnimationFrame(r) : setTimeout(r, 1), st = $e ? ye : Or, it = typeof navigator < "u" && navigator.connection, zt = !$e && it && ([
  "slow-2g",
  "2g"
].includes(it.effectiveType) || it.saveData), ze = /* @__PURE__ */ new WeakMap(), mn = (r) => pt.prototype.toString.call(r), at = (r, e) => r === `[object ${e}]`;
let xn = 0;
const yt = (r) => {
  const e = typeof r, t = mn(r), n = at(t, "Date"), s = at(t, "RegExp"), i = at(t, "Object");
  let a, o;
  if (pt(r) === r && !n && !s) {
    if (a = ze.get(r), a) return a;
    if (a = ++xn + "~", ze.set(r, a), Array.isArray(r)) {
      for (a = "@", o = 0; o < r.length; o++)
        a += yt(r[o]) + ",";
      ze.set(r, a);
    }
    if (i) {
      a = "#";
      const u = pt.keys(r).sort();
      for (; !R(o = u.pop()); )
        R(r[o]) || (a += o + ":" + yt(r[o]) + ",");
      ze.set(r, a);
    }
  } else
    a = n ? r.toJSON() : e == "symbol" ? r.toString() : e == "string" ? JSON.stringify(r) : "" + r;
  return a;
}, Ot = (r) => {
  if (te(r))
    try {
      r = r();
    } catch {
      r = "";
    }
  const e = r;
  return r = typeof r == "string" ? r : (Array.isArray(r) ? r.length : r) ? yt(r) : "", [
    r,
    e
  ];
};
let gn = 0;
const vt = () => ++gn;
async function cr(...r) {
  const [e, t, n, s] = r, i = he({
    populateCache: !0,
    throwOnError: !0
  }, typeof s == "boolean" ? {
    revalidate: s
  } : s || {});
  let a = i.populateCache;
  const o = i.rollbackOnError;
  let u = i.optimisticData;
  const p = (x) => typeof o == "function" ? o(x) : o !== !1, h = i.throwOnError;
  if (te(t)) {
    const x = t, m = [], g = e.keys();
    for (const b of g)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(b) && x(e.get(b)._k) && m.push(b);
    return Promise.all(m.map(d));
  }
  return d(t);
  async function d(x) {
    const [m] = Ot(x);
    if (!m) return;
    const [g, b] = lr(e, m), [E, l, y, O] = ue.get(e), F = () => {
      const L = E[m];
      return (te(i.revalidate) ? i.revalidate(g().data, x) : i.revalidate !== !1) && (delete y[m], delete O[m], L && L[0]) ? L[0](or).then(() => g().data) : g().data;
    };
    if (r.length < 3)
      return F();
    let w = n, j, C = !1;
    const S = vt();
    l[m] = [
      S,
      0
    ];
    const v = !R(u), A = g(), T = A.data, V = A._c, q = R(V) ? T : V;
    if (v && (u = te(u) ? u(q, T) : u, b({
      data: u,
      _c: q
    })), te(w))
      try {
        w = w(q);
      } catch (L) {
        j = L, C = !0;
      }
    if (w && ur(w))
      if (w = await w.catch((L) => {
        j = L, C = !0;
      }), S !== l[m][0]) {
        if (C) throw j;
        return w;
      } else C && v && p(j) && (a = !0, b({
        data: q,
        _c: W
      }));
    if (a && !C)
      if (te(a)) {
        const L = a(w, q);
        b({
          data: L,
          error: W,
          _c: W
        });
      } else
        b({
          data: w,
          error: W,
          _c: W
        });
    if (l[m][1] = vt(), Promise.resolve(F()).then(() => {
      b({
        _c: W
      });
    }), C) {
      if (h) throw j;
      return;
    }
    return w;
  }
}
const Wt = (r, e) => {
  for (const t in r)
    r[t][0] && r[t][0](e);
}, bn = (r, e) => {
  if (!ue.has(r)) {
    const t = he(hn, e), n = /* @__PURE__ */ Object.create(null), s = cr.bind(W, r);
    let i = ce;
    const a = /* @__PURE__ */ Object.create(null), o = (h, d) => {
      const x = a[h] || [];
      return a[h] = x, x.push(d), () => x.splice(x.indexOf(d), 1);
    }, u = (h, d, x) => {
      r.set(h, d);
      const m = a[h];
      if (m)
        for (const g of m)
          g(d, x);
    }, p = () => {
      if (!ue.has(r) && (ue.set(r, [
        n,
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        s,
        u,
        o
      ]), !$e)) {
        const h = t.initFocus(setTimeout.bind(W, Wt.bind(W, n, ir))), d = t.initReconnect(setTimeout.bind(W, Wt.bind(W, n, ar)));
        i = () => {
          h && h(), d && d(), ue.delete(r);
        };
      }
    };
    return p(), [
      r,
      s,
      p,
      i
    ];
  }
  return [
    r,
    ue.get(r)[4]
  ];
}, yn = (r, e, t, n, s) => {
  const i = t.errorRetryCount, a = s.retryCount, o = ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) * t.errorRetryInterval;
  !R(i) && a > i || setTimeout(n, o, s);
}, vn = ht, [fr, En] = bn(/* @__PURE__ */ new Map()), _n = he(
  {
    // events
    onLoadingSlow: ce,
    onSuccess: ce,
    onError: ce,
    onErrorRetry: yn,
    onDiscarded: ce,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: zt ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: zt ? 5e3 : 3e3,
    // providers
    compare: vn,
    isPaused: () => !1,
    cache: fr,
    mutate: En,
    fallback: {}
  },
  // use web preset by default
  dn
), wn = (r, e) => {
  const t = he(r, e);
  if (e) {
    const { use: n, fallback: s } = r, { use: i, fallback: a } = e;
    n && i && (t.use = n.concat(i)), s && a && (t.fallback = he(s, a));
  }
  return t;
}, Sn = er({}), On = "$inf$", dr = Le && window.__SWR_DEVTOOLS_USE__, Tn = dr ? window.__SWR_DEVTOOLS_USE__ : [], jn = () => {
  dr && (window.__SWR_DEVTOOLS_REACT__ = je);
}, Rn = (r) => te(r[1]) ? [
  r[0],
  r[1],
  r[2] || {}
] : [
  r[0],
  null,
  (r[1] === null ? r[2] : r[1]) || {}
], Fn = () => {
  const r = Ie(Sn);
  return tr(() => he(_n, r), [
    r
  ]);
}, Cn = (r) => (e, t, n) => r(e, t && ((...i) => {
  const [a] = Ot(e), [, , , o] = ue.get(fr);
  if (a.startsWith(On))
    return t(...i);
  const u = o[a];
  return R(u) ? t(...i) : (delete o[a], u);
}), n), kn = Tn.concat(Cn), An = (r) => function(...t) {
  const n = Fn(), [s, i, a] = Rn(t), o = wn(n, a);
  let u = r;
  const { use: p } = o, h = (p || []).concat(kn);
  for (let d = h.length; d--; )
    u = h[d](u);
  return u(s, i || o.fetcher || null, o);
}, Dn = (r, e, t) => {
  const n = e[r] || (e[r] = []);
  return n.push(t), () => {
    const s = n.indexOf(t);
    s >= 0 && (n[s] = n[n.length - 1], n.pop());
  };
};
jn();
const ot = je.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((r) => {
  switch (r.status) {
    case "pending":
      throw r;
    case "fulfilled":
      return r.value;
    case "rejected":
      throw r.reason;
    default:
      throw r.status = "pending", r.then((e) => {
        r.status = "fulfilled", r.value = e;
      }, (e) => {
        r.status = "rejected", r.reason = e;
      }), r;
  }
}), ut = {
  dedupe: !0
}, Yt = Promise.resolve(W), $n = (r, e, t) => {
  const { cache: n, compare: s, suspense: i, fallbackData: a, revalidateOnMount: o, revalidateIfStale: u, refreshInterval: p, refreshWhenHidden: h, refreshWhenOffline: d, keepPreviousData: x } = t, [m, g, b, E] = ue.get(n), [l, y] = Ot(r), O = xe(!1), F = xe(!1), w = xe(l), j = xe(e), C = xe(t), S = () => C.current, v = () => S().isVisible() && S().isOnline(), [A, T, V, q] = lr(n, l), L = xe({}).current, K = R(a) ? R(t.fallback) ? W : t.fallback[l] : a, Z = (k, N) => {
    for (const M in L) {
      const $ = M;
      if ($ === "data") {
        if (!s(k[$], N[$]) && (!R(k[$]) || !s(se, N[$])))
          return !1;
      } else if (N[$] !== k[$])
        return !1;
    }
    return !0;
  }, ne = tr(() => {
    const k = !l || !e ? !1 : R(o) ? S().isPaused() || i ? !1 : u !== !1 : o, N = (G) => {
      const ie = he(G);
      return delete ie._k, k ? {
        isValidating: !0,
        isLoading: !0,
        ...ie
      } : ie;
    }, M = A(), $ = q(), Q = N(M), _e = M === $ ? Q : N($);
    let z = Q;
    return [
      () => {
        const G = N(A());
        return Z(G, z) ? (z.data = G.data, z.isLoading = G.isLoading, z.isValidating = G.isValidating, z.error = G.error, z) : (z = G, G);
      },
      () => _e
    ];
  }, [
    n,
    l
  ]), X = sn.useSyncExternalStore(Ge(
    (k) => V(l, (N, M) => {
      Z(M, N) || k();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      n,
      l
    ]
  ), ne[0], ne[1]), pe = !O.current, Ve = m[l] && m[l].length > 0, c = X.data, _ = R(c) ? K && ur(K) ? ot(K) : K : c, D = X.error, I = xe(_), se = x ? R(c) ? R(I.current) ? _ : I.current : c : _, Ee = Ve && !R(D) ? !1 : pe && !R(o) ? o : S().isPaused() ? !1 : i ? R(_) ? !1 : u : R(_) || u, P = !!(l && e && pe && Ee), le = R(X.isValidating) ? P : X.isValidating, Re = R(X.isLoading) ? P : X.isLoading, me = Ge(
    async (k) => {
      const N = j.current;
      if (!l || !N || F.current || S().isPaused())
        return !1;
      let M, $, Q = !0;
      const _e = k || {}, z = !b[l] || !_e.dedupe, G = () => qt ? !F.current && l === w.current && O.current : l === w.current, ie = {
        isValidating: !1,
        isLoading: !1
      }, Ft = () => {
        T(ie);
      }, Ct = () => {
        const J = b[l];
        J && J[1] === $ && delete b[l];
      }, kt = {
        isValidating: !0
      };
      R(A().data) && (kt.isLoading = !0);
      try {
        if (z && (T(kt), t.loadingTimeout && R(A().data) && setTimeout(() => {
          Q && G() && S().onLoadingSlow(l, t);
        }, t.loadingTimeout), b[l] = [
          N(y),
          vt()
        ]), [M, $] = b[l], M = await M, z && setTimeout(Ct, t.dedupingInterval), !b[l] || b[l][1] !== $)
          return z && G() && S().onDiscarded(l), !1;
        ie.error = W;
        const J = g[l];
        if (!R(J) && // case 1
        ($ <= J[0] || // case 2
        $ <= J[1] || // case 3
        J[1] === 0))
          return Ft(), z && G() && S().onDiscarded(l), !1;
        const ae = A().data;
        ie.data = s(ae, M) ? ae : M, z && G() && S().onSuccess(M, l, t);
      } catch (J) {
        Ct();
        const ae = S(), { shouldRetryOnError: Qe } = ae;
        ae.isPaused() || (ie.error = J, z && G() && (ae.onError(J, l, ae), (Qe === !0 || te(Qe) && Qe(J)) && (!S().revalidateOnFocus || !S().revalidateOnReconnect || v()) && ae.onErrorRetry(J, l, ae, (Sr) => {
          const et = m[l];
          et && et[0] && et[0](Mt, Sr);
        }, {
          retryCount: (_e.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return Q = !1, Ft(), !0;
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
      l,
      n
    ]
  ), Rt = Ge(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...k) => cr(n, w.current, ...k),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (st(() => {
    j.current = e, C.current = t, R(c) || (I.current = c);
  }), st(() => {
    if (!l) return;
    const k = me.bind(W, ut);
    let N = 0;
    S().revalidateOnFocus && (N = Date.now() + S().focusThrottleInterval);
    const $ = Dn(l, m, (Q, _e = {}) => {
      if (Q == ir) {
        const z = Date.now();
        S().revalidateOnFocus && z > N && v() && (N = z + S().focusThrottleInterval, k());
      } else if (Q == ar)
        S().revalidateOnReconnect && v() && k();
      else {
        if (Q == or)
          return me();
        if (Q == Mt)
          return me(_e);
      }
    });
    return F.current = !1, w.current = l, O.current = !0, T({
      _k: y
    }), Ee && (b[l] || (R(_) || $e ? k() : pn(k))), () => {
      F.current = !0, $();
    };
  }, [
    l
  ]), st(() => {
    let k;
    function N() {
      const $ = te(p) ? p(A().data) : p;
      $ && k !== -1 && (k = setTimeout(M, $));
    }
    function M() {
      !A().error && (h || S().isVisible()) && (d || S().isOnline()) ? me(ut).then(N) : N();
    }
    return N(), () => {
      k && (clearTimeout(k), k = -1);
    };
  }, [
    p,
    h,
    d,
    l
  ]), Tr(se), i) {
    const k = l && R(_);
    if (!qt && $e && k)
      throw new Error("Fallback data is required when using Suspense in SSR.");
    k && (j.current = e, C.current = t, F.current = !1);
    const N = E[l], M = !R(N) && k ? Rt(N) : Yt;
    if (ot(M), !R(D) && k)
      throw D;
    const $ = k ? me(ut) : Yt;
    !R(se) && k && ($.status = "fulfilled", $.value = !0), ot($);
  }
  return {
    mutate: Rt,
    get data() {
      return L.data = !0, se;
    },
    get error() {
      return L.error = !0, D;
    },
    get isValidating() {
      return L.isValidating = !0, le;
    },
    get isLoading() {
      return L.isLoading = !0, Re;
    }
  };
}, In = An($n), Nn = (r, e, t = {}) => {
  const { data: n, error: s, isLoading: i, mutate: a } = In(r, e, {
    ...t,
    onError: (o) => {
      t.onError && t.onError(o);
    }
  });
  return {
    data: n,
    error: s,
    isLoading: i,
    mutate: a
  };
}, Pn = (r, e) => {
  const [t, n] = U(r);
  return ye(() => {
    const s = setTimeout(() => {
      n(r);
    }, e);
    return () => {
      clearTimeout(s);
    };
  }, [r, e]), t;
}, Ln = ({ resourceName: r, createPath: e, createText: t, linkComponent: n }) => {
  const s = n;
  return /* @__PURE__ */ f.jsxs(Te, { sx: { p: "0 !important", mb: 2, display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" } }, children: [
    /* @__PURE__ */ f.jsx(de, { variant: "h4", component: "h1", sx: { flexGrow: 1, mb: { xs: 2, sm: 0 } }, children: r }),
    e && /* @__PURE__ */ f.jsx(
      De,
      {
        variant: "contained",
        startIcon: /* @__PURE__ */ f.jsx(Yr, {}),
        ...s ? { component: s, to: e } : { href: e },
        children: t
      }
    )
  ] });
}, Vn = ({ searchable: r, searchQuery: e, setSearchQuery: t, filterOptions: n, filters: s, handleFilterChange: i, searchPlaceholder: a }) => /* @__PURE__ */ f.jsxs(Y, { sx: { display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mb: 2, alignItems: "stretch" }, children: [
  n.map((o) => /* @__PURE__ */ f.jsx(
    rr,
    {
      control: /* @__PURE__ */ f.jsx(nr, { checked: s[o.name], onChange: i, name: o.name }),
      label: o.label
    },
    o.name
  )),
  r && /* @__PURE__ */ f.jsx(
    wt,
    {
      label: a,
      variant: "outlined",
      value: e,
      onChange: (o) => t(o.target.value),
      InputProps: { endAdornment: /* @__PURE__ */ f.jsx(Gr, { color: "action" }) },
      sx: { flexGrow: 1, minWidth: "200px" }
    }
  )
] }), Ds = ({
  resourceName: r,
  columns: e,
  api: t,
  dataAdapter: n = (g) => g,
  createPath: s,
  createText: i = "Create New",
  searchable: a = !1,
  searchPlaceholder: o = "Search...",
  filterOptions: u = [],
  sorting: p = !1,
  showRowNumber: h = !0,
  // Added prop
  linkComponent: d,
  renderHeader: x = Ln,
  renderFilters: m = Vn
}) => {
  const [g, b] = U(0), [E, l] = U(0), [y, O] = U(10), [F, w] = U([]), [j, C] = U(""), [S, v] = U(
    () => u.reduce((Z, ne) => ({ ...Z, [ne.name]: !1 }), {})
  ), A = Pn(j, 500), { data: T, isLoading: V, error: q, mutate: L } = Nn(
    [r, E, y, A, S.include_deleted],
    () => t.list({ page: E, per_page: y, q: A, deleted_state: S.include_deleted ? "all" : "active" }),
    { keepPreviousData: !0 }
  );
  ye(() => {
    L();
  }, [T]);
  const K = (Z) => {
    const { name: ne, checked: X } = Z.target;
    v((pe) => ({ ...pe, [ne]: X })), l(0);
  };
  return /* @__PURE__ */ f.jsxs(Y, { children: [
    x({ resourceName: r, createPath: s, createText: i, linkComponent: d }),
    m({
      searchable: a,
      searchQuery: j,
      setSearchQuery: C,
      filterOptions: u,
      filters: S,
      handleFilterChange: K,
      searchPlaceholder: o
    }),
    /* @__PURE__ */ f.jsx(
      en,
      {
        rows: T?.items,
        columns: e,
        loading: V,
        error: q,
        pagination: !0,
        rowCount: g,
        page: E,
        onPageChange: l,
        perPage: y,
        onPerPageChange: (Z) => {
          O(Z), l(0);
        },
        sorting: p,
        sortModel: F,
        onSortModelChange: (Z) => {
          w(Z), l(0);
        },
        showRowNumber: h
      }
    )
  ] });
}, Mn = ({ isSubmitting: r, onCancel: e }) => /* @__PURE__ */ f.jsxs(Y, { sx: { mt: 3, display: "flex", gap: 2 }, children: [
  /* @__PURE__ */ f.jsx(
    De,
    {
      type: "submit",
      variant: "contained",
      disabled: r,
      children: r ? /* @__PURE__ */ f.jsx(Ne, { size: 24 }) : "Save"
    }
  ),
  e && /* @__PURE__ */ f.jsx(De, { variant: "outlined", onClick: e, disabled: r, children: "Cancel" })
] }), $s = ({
  resourceName: r,
  id: e,
  api: t,
  FormComponent: n,
  onSuccess: s = () => {
  },
  onCancel: i,
  responseAdapter: a = (p) => p,
  requestAdapter: o = (p) => p,
  renderActions: u = Mn
}) => {
  const [p, h] = U(null), [d, x] = U(!1), [m, g] = U(null), [b, E] = U(!1), l = e != null;
  ye(() => {
    l && (x(!0), g(null), t.getOne(e).then((F) => h(a(F))).catch((F) => g(F)).finally(() => x(!1)));
  }, [t, e, l, a]);
  const y = async (F) => {
    E(!0), g(null);
    const w = o(F);
    try {
      const j = l ? await t.update(e, w) : await t.create(w);
      s(j.data);
    } catch (j) {
      g(j), E(!1);
    }
  }, O = l ? `Edit ${r}` : `Create ${r}`;
  return d ? /* @__PURE__ */ f.jsx(Ne, {}) : m && !b ? /* @__PURE__ */ f.jsx(dt, { severity: "error", children: m.message || "Failed to load resource data." }) : /* @__PURE__ */ f.jsxs(Y, { children: [
    /* @__PURE__ */ f.jsx(Te, { sx: { p: "0 !important", mb: 2 }, children: /* @__PURE__ */ f.jsx(de, { variant: "h4", component: "h1", children: O }) }),
    /* @__PURE__ */ f.jsx(Xe, { sx: { p: 3 }, children: (!l || p) && /* @__PURE__ */ f.jsxs(sr, { onSubmit: y, initialValues: p, children: [
      /* @__PURE__ */ f.jsx(n, {}),
      m && b && /* @__PURE__ */ f.jsx(dt, { severity: "error", sx: { mt: 2 }, children: m.message || "An error occurred during submission." }),
      u({ isSubmitting: b, onCancel: i })
    ] }) })
  ] });
};
var lt, Gt;
function Un() {
  if (Gt) return lt;
  Gt = 1;
  function r(l) {
    this._maxSize = l, this.clear();
  }
  r.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, r.prototype.get = function(l) {
    return this._values[l];
  }, r.prototype.set = function(l, y) {
    return this._size >= this._maxSize && this.clear(), l in this._values || this._size++, this._values[l] = y;
  };
  var e = /[^.^\]^[]+|(?=\[\]|\.\.)/g, t = /^\d+$/, n = /^\d/, s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, i = /^\s*(['"]?)(.*?)(\1)\s*$/, a = 512, o = new r(a), u = new r(a), p = new r(a);
  lt = {
    Cache: r,
    split: d,
    normalizePath: h,
    setter: function(l) {
      var y = h(l);
      return u.get(l) || u.set(l, function(F, w) {
        for (var j = 0, C = y.length, S = F; j < C - 1; ) {
          var v = y[j];
          if (v === "__proto__" || v === "constructor" || v === "prototype")
            return F;
          S = S[y[j++]];
        }
        S[y[j]] = w;
      });
    },
    getter: function(l, y) {
      var O = h(l);
      return p.get(l) || p.set(l, function(w) {
        for (var j = 0, C = O.length; j < C; )
          if (w != null || !y) w = w[O[j++]];
          else return;
        return w;
      });
    },
    join: function(l) {
      return l.reduce(function(y, O) {
        return y + (m(O) || t.test(O) ? "[" + O + "]" : (y ? "." : "") + O);
      }, "");
    },
    forEach: function(l, y, O) {
      x(Array.isArray(l) ? l : d(l), y, O);
    }
  };
  function h(l) {
    return o.get(l) || o.set(
      l,
      d(l).map(function(y) {
        return y.replace(i, "$2");
      })
    );
  }
  function d(l) {
    return l.match(e) || [""];
  }
  function x(l, y, O) {
    var F = l.length, w, j, C, S;
    for (j = 0; j < F; j++)
      w = l[j], w && (E(w) && (w = '"' + w + '"'), S = m(w), C = !S && /^\d+$/.test(w), y.call(O, w, S, C, j, l));
  }
  function m(l) {
    return typeof l == "string" && l && ["'", '"'].indexOf(l.charAt(0)) !== -1;
  }
  function g(l) {
    return l.match(n) && !l.match(t);
  }
  function b(l) {
    return s.test(l);
  }
  function E(l) {
    return !m(l) && (g(l) || b(l));
  }
  return lt;
}
var be = Un(), ct, Bt;
function qn() {
  if (Bt) return ct;
  Bt = 1;
  const r = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, e = (h) => h.match(r) || [], t = (h) => h[0].toUpperCase() + h.slice(1), n = (h, d) => e(h).join(d).toLowerCase(), s = (h) => e(h).reduce(
    (d, x) => `${d}${d ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x.toLowerCase()}`,
    ""
  );
  return ct = {
    words: e,
    upperFirst: t,
    camelCase: s,
    pascalCase: (h) => t(s(h)),
    snakeCase: (h) => n(h, "_"),
    kebabCase: (h) => n(h, "-"),
    sentenceCase: (h) => t(n(h, " ")),
    titleCase: (h) => e(h).map(t).join(" ")
  }, ct;
}
var ft = qn(), We = { exports: {} }, Ht;
function zn() {
  if (Ht) return We.exports;
  Ht = 1, We.exports = function(s) {
    return r(e(s), s);
  }, We.exports.array = r;
  function r(s, i) {
    var a = s.length, o = new Array(a), u = {}, p = a, h = t(i), d = n(s);
    for (i.forEach(function(m) {
      if (!d.has(m[0]) || !d.has(m[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); p--; )
      u[p] || x(s[p], p, /* @__PURE__ */ new Set());
    return o;
    function x(m, g, b) {
      if (b.has(m)) {
        var E;
        try {
          E = ", node was:" + JSON.stringify(m);
        } catch {
          E = "";
        }
        throw new Error("Cyclic dependency" + E);
      }
      if (!d.has(m))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(m));
      if (!u[g]) {
        u[g] = !0;
        var l = h.get(m) || /* @__PURE__ */ new Set();
        if (l = Array.from(l), g = l.length) {
          b.add(m);
          do {
            var y = l[--g];
            x(y, d.get(y), b);
          } while (g);
          b.delete(m);
        }
        o[--a] = m;
      }
    }
  }
  function e(s) {
    for (var i = /* @__PURE__ */ new Set(), a = 0, o = s.length; a < o; a++) {
      var u = s[a];
      i.add(u[0]), i.add(u[1]);
    }
    return Array.from(i);
  }
  function t(s) {
    for (var i = /* @__PURE__ */ new Map(), a = 0, o = s.length; a < o; a++) {
      var u = s[a];
      i.has(u[0]) || i.set(u[0], /* @__PURE__ */ new Set()), i.has(u[1]) || i.set(u[1], /* @__PURE__ */ new Set()), i.get(u[0]).add(u[1]);
    }
    return i;
  }
  function n(s) {
    for (var i = /* @__PURE__ */ new Map(), a = 0, o = s.length; a < o; a++)
      i.set(s[a], a);
    return i;
  }
  return We.exports;
}
var Wn = zn();
const Yn = /* @__PURE__ */ Hr(Wn), Gn = Object.prototype.toString, Bn = Error.prototype.toString, Hn = RegExp.prototype.toString, Zn = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Jn = /^Symbol\((.*)\)(.*)$/;
function Kn(r) {
  return r != +r ? "NaN" : r === 0 && 1 / r < 0 ? "-0" : "" + r;
}
function Zt(r, e = !1) {
  if (r == null || r === !0 || r === !1) return "" + r;
  const t = typeof r;
  if (t === "number") return Kn(r);
  if (t === "string") return e ? `"${r}"` : r;
  if (t === "function") return "[Function " + (r.name || "anonymous") + "]";
  if (t === "symbol") return Zn.call(r).replace(Jn, "Symbol($1)");
  const n = Gn.call(r).slice(8, -1);
  return n === "Date" ? isNaN(r.getTime()) ? "" + r : r.toISOString(r) : n === "Error" || r instanceof Error ? "[" + Bn.call(r) + "]" : n === "RegExp" ? Hn.call(r) : null;
}
function fe(r, e) {
  let t = Zt(r, e);
  return t !== null ? t : JSON.stringify(r, function(n, s) {
    let i = Zt(this[n], e);
    return i !== null ? i : s;
  }, 2);
}
function hr(r) {
  return r == null ? [] : [].concat(r);
}
let pr, mr, xr, Xn = /\$\{\s*(\w+)\s*\}/g;
pr = Symbol.toStringTag;
class Jt {
  constructor(e, t, n, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[pr] = "Error", this.name = "ValidationError", this.value = t, this.path = n, this.type = s, this.errors = [], this.inner = [], hr(e).forEach((i) => {
      if (B.isError(i)) {
        this.errors.push(...i.errors);
        const a = i.inner.length ? i.inner : [i];
        this.inner.push(...a);
      } else
        this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
mr = Symbol.hasInstance;
xr = Symbol.toStringTag;
class B extends Error {
  static formatError(e, t) {
    const n = t.label || t.path || "this";
    return t = Object.assign({}, t, {
      path: n,
      originalPath: t.path
    }), typeof e == "string" ? e.replace(Xn, (s, i) => fe(t[i])) : typeof e == "function" ? e(t) : e;
  }
  static isError(e) {
    return e && e.name === "ValidationError";
  }
  constructor(e, t, n, s, i) {
    const a = new Jt(e, t, n, s);
    if (i)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[xr] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, B);
  }
  static [mr](e) {
    return Jt[Symbol.hasInstance](e) || super[Symbol.hasInstance](e);
  }
}
let ee = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: r,
    type: e,
    value: t,
    originalValue: n
  }) => {
    const s = n != null && n !== t ? ` (cast from the value \`${fe(n, !0)}\`).` : ".";
    return e !== "mixed" ? `${r} must be a \`${e}\` type, but the final value was: \`${fe(t, !0)}\`` + s : `${r} must match the configured type. The validated value was: \`${fe(t, !0)}\`` + s;
  }
}, H = {
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
}, Qn = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Et = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, es = {
  isValue: "${path} field must be ${value}"
}, Be = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, ts = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, rs = {
  notType: (r) => {
    const {
      path: e,
      value: t,
      spec: n
    } = r, s = n.types.length;
    if (Array.isArray(t)) {
      if (t.length < s) return `${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${fe(t, !0)}\``;
      if (t.length > s) return `${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${fe(t, !0)}\``;
    }
    return B.formatError(ee.notType, r);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: ee,
  string: H,
  number: Qn,
  date: Et,
  object: Be,
  array: ts,
  boolean: es,
  tuple: rs
});
const Tt = (r) => r && r.__isYupSchema__;
class Je {
  static fromOptions(e, t) {
    if (!t.then && !t.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: n,
      then: s,
      otherwise: i
    } = t, a = typeof n == "function" ? n : (...o) => o.every((u) => u === n);
    return new Je(e, (o, u) => {
      var p;
      let h = a(...o) ? s : i;
      return (p = h?.(u)) != null ? p : u;
    });
  }
  constructor(e, t) {
    this.fn = void 0, this.refs = e, this.refs = e, this.fn = t;
  }
  resolve(e, t) {
    let n = this.refs.map((i) => (
      // TODO: ? operator here?
      i.getValue(t?.value, t?.parent, t?.context)
    )), s = this.fn(n, e, t);
    if (s === void 0 || // @ts-ignore this can be base
    s === e)
      return e;
    if (!Tt(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(t);
  }
}
const Ye = {
  context: "$",
  value: "."
};
class ve {
  constructor(e, t = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof e != "string") throw new TypeError("ref must be a string, got: " + e);
    if (this.key = e.trim(), e === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Ye.context, this.isValue = this.key[0] === Ye.value, this.isSibling = !this.isContext && !this.isValue;
    let n = this.isContext ? Ye.context : this.isValue ? Ye.value : "";
    this.path = this.key.slice(n.length), this.getter = this.path && be.getter(this.path, !0), this.map = t.map;
  }
  getValue(e, t, n) {
    let s = this.isContext ? n : this.isValue ? e : t;
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
ve.prototype.__isYupRef = !0;
const ge = (r) => r == null;
function we(r) {
  function e({
    value: t,
    path: n = "",
    options: s,
    originalValue: i,
    schema: a
  }, o, u) {
    const {
      name: p,
      test: h,
      params: d,
      message: x,
      skipAbsent: m
    } = r;
    let {
      parent: g,
      context: b,
      abortEarly: E = a.spec.abortEarly,
      disableStackTrace: l = a.spec.disableStackTrace
    } = s;
    const y = {
      value: t,
      parent: g,
      context: b
    };
    function O(T = {}) {
      const V = gr(Object.assign({
        value: t,
        originalValue: i,
        label: a.spec.label,
        path: T.path || n,
        spec: a.spec,
        disableStackTrace: T.disableStackTrace || l
      }, d, T.params), y), q = new B(B.formatError(T.message || x, V), t, V.path, T.type || p, V.disableStackTrace);
      return q.params = V, q;
    }
    const F = E ? o : u;
    let w = {
      path: n,
      parent: g,
      type: p,
      from: s.from,
      createError: O,
      resolve(T) {
        return br(T, y);
      },
      options: s,
      originalValue: i,
      schema: a
    };
    const j = (T) => {
      B.isError(T) ? F(T) : T ? u(null) : F(O());
    }, C = (T) => {
      B.isError(T) ? F(T) : o(T);
    };
    if (m && ge(t))
      return j(!0);
    let v;
    try {
      var A;
      if (v = h.call(w, t, w), typeof ((A = v) == null ? void 0 : A.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${w.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(v).then(j, C);
      }
    } catch (T) {
      C(T);
      return;
    }
    j(v);
  }
  return e.OPTIONS = r, e;
}
function gr(r, e) {
  if (!r) return r;
  for (const t of Object.keys(r))
    r[t] = br(r[t], e);
  return r;
}
function br(r, e) {
  return ve.isRef(r) ? r.getValue(e.value, e.parent, e.context) : r;
}
function ns(r, e, t, n = t) {
  let s, i, a;
  return e ? (be.forEach(e, (o, u, p) => {
    let h = u ? o.slice(1, o.length - 1) : o;
    r = r.resolve({
      context: n,
      parent: s,
      value: t
    });
    let d = r.type === "tuple", x = p ? parseInt(h, 10) : 0;
    if (r.innerType || d) {
      if (d && !p) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (t && x >= t.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${e}. because there is no value at that index. `);
      s = t, t = t && t[x], r = d ? r.spec.types[x] : r.innerType;
    }
    if (!p) {
      if (!r.fields || !r.fields[h]) throw new Error(`The schema does not contain the path: ${e}. (failed at: ${a} which is a type: "${r.type}")`);
      s = t, t = t && t[h], r = r.fields[h];
    }
    i = h, a = u ? "[" + o + "]" : "." + o;
  }), {
    schema: r,
    parent: s,
    parentPath: i
  }) : {
    parent: s,
    parentPath: e,
    schema: r
  };
}
class Ke extends Set {
  describe() {
    const e = [];
    for (const t of this.values())
      e.push(ve.isRef(t) ? t.describe() : t);
    return e;
  }
  resolveAll(e) {
    let t = [];
    for (const n of this.values())
      t.push(e(n));
    return t;
  }
  clone() {
    return new Ke(this.values());
  }
  merge(e, t) {
    const n = this.clone();
    return e.forEach((s) => n.add(s)), t.forEach((s) => n.delete(s)), n;
  }
}
function Oe(r, e = /* @__PURE__ */ new Map()) {
  if (Tt(r) || !r || typeof r != "object") return r;
  if (e.has(r)) return e.get(r);
  let t;
  if (r instanceof Date)
    t = new Date(r.getTime()), e.set(r, t);
  else if (r instanceof RegExp)
    t = new RegExp(r), e.set(r, t);
  else if (Array.isArray(r)) {
    t = new Array(r.length), e.set(r, t);
    for (let n = 0; n < r.length; n++) t[n] = Oe(r[n], e);
  } else if (r instanceof Map) {
    t = /* @__PURE__ */ new Map(), e.set(r, t);
    for (const [n, s] of r.entries()) t.set(n, Oe(s, e));
  } else if (r instanceof Set) {
    t = /* @__PURE__ */ new Set(), e.set(r, t);
    for (const n of r) t.add(Oe(n, e));
  } else if (r instanceof Object) {
    t = {}, e.set(r, t);
    for (const [n, s] of Object.entries(r)) t[n] = Oe(s, e);
  } else
    throw Error(`Unable to clone ${r}`);
  return t;
}
function ss(r) {
  if (!(r != null && r.length))
    return;
  const e = [];
  let t = "", n = !1, s = !1;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    if (a === "[" && !s) {
      t && (e.push(...t.split(".").filter(Boolean)), t = ""), n = !0;
      continue;
    }
    if (a === "]" && !s) {
      t && (/^\d+$/.test(t) ? e.push(t) : e.push(t.replace(/^"|"$/g, "")), t = ""), n = !1;
      continue;
    }
    if (a === '"') {
      s = !s;
      continue;
    }
    if (a === "." && !n && !s) {
      t && (e.push(t), t = "");
      continue;
    }
    t += a;
  }
  return t && e.push(...t.split(".").filter(Boolean)), e;
}
function is(r, e) {
  const t = e ? `${e}.${r.path}` : r.path;
  return r.errors.map((n) => ({
    message: n,
    path: ss(t)
  }));
}
function yr(r, e) {
  var t;
  if (!((t = r.inner) != null && t.length) && r.errors.length)
    return is(r, e);
  const n = e ? `${e}.${r.path}` : r.path;
  return r.inner.flatMap((s) => yr(s, n));
}
class re {
  constructor(e) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Ke(), this._blacklist = new Ke(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(ee.notType);
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
    return t.type = this.type, t._typeCheck = this._typeCheck, t._whitelist = this._whitelist.clone(), t._blacklist = this._blacklist.clone(), t.internalTests = Object.assign({}, this.internalTests), t.exclusiveTests = Object.assign({}, this.exclusiveTests), t.deps = [...this.deps], t.conditions = [...this.conditions], t.tests = [...this.tests], t.transforms = [...this.transforms], t.spec = Oe(Object.assign({}, this.spec, e)), t;
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
    let n = e(this);
    return this._mutate = t, n;
  }
  concat(e) {
    if (!e || e === this) return this;
    if (e.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);
    let t = this, n = e.clone();
    const s = Object.assign({}, t.spec, n.spec);
    return n.spec = s, n.internalTests = Object.assign({}, t.internalTests, n.internalTests), n._whitelist = t._whitelist.merge(e._whitelist, e._blacklist), n._blacklist = t._blacklist.merge(e._blacklist, e._whitelist), n.tests = t.tests, n.exclusiveTests = t.exclusiveTests, n.withMutation((i) => {
      e.tests.forEach((a) => {
        i.test(a.OPTIONS);
      });
    }), n.transforms = [...t.transforms, ...n.transforms], n;
  }
  isType(e) {
    return e == null ? !!(this.spec.nullable && e === null || this.spec.optional && e === void 0) : this._typeCheck(e);
  }
  resolve(e) {
    let t = this;
    if (t.conditions.length) {
      let n = t.conditions;
      t = t.clone(), t.conditions = [], t = n.reduce((s, i) => i.resolve(s, e), t), t = t.resolve(e);
    }
    return t;
  }
  resolveOptions(e) {
    var t, n, s, i;
    return Object.assign({}, e, {
      from: e.from || [],
      strict: (t = e.strict) != null ? t : this.spec.strict,
      abortEarly: (n = e.abortEarly) != null ? n : this.spec.abortEarly,
      recursive: (s = e.recursive) != null ? s : this.spec.recursive,
      disableStackTrace: (i = e.disableStackTrace) != null ? i : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(e, t = {}) {
    let n = this.resolve(Object.assign({}, t, {
      value: e
      // parent: options.parent,
      // context: options.context,
    })), s = t.assert === "ignore-optionality", i = n._cast(e, t);
    if (t.assert !== !1 && !n.isType(i)) {
      if (s && ge(i))
        return i;
      let a = fe(e), o = fe(i);
      throw new TypeError(`The value of ${t.path || "field"} could not be cast to a value that satisfies the schema type: "${n.type}". 

attempted value: ${a} 
` + (o !== a ? `result of cast: ${o}` : ""));
    }
    return i;
  }
  _cast(e, t) {
    let n = e === void 0 ? e : this.transforms.reduce((s, i) => i.call(this, s, e, this, t), e);
    return n === void 0 && (n = this.getDefault(t)), n;
  }
  _validate(e, t = {}, n, s) {
    let {
      path: i,
      originalValue: a = e,
      strict: o = this.spec.strict
    } = t, u = e;
    o || (u = this._cast(u, Object.assign({
      assert: !1
    }, t)));
    let p = [];
    for (let h of Object.values(this.internalTests))
      h && p.push(h);
    this.runTests({
      path: i,
      value: u,
      originalValue: a,
      options: t,
      tests: p
    }, n, (h) => {
      if (h.length)
        return s(h, u);
      this.runTests({
        path: i,
        value: u,
        originalValue: a,
        options: t,
        tests: this.tests
      }, n, s);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(e, t, n) {
    let s = !1, {
      tests: i,
      value: a,
      originalValue: o,
      path: u,
      options: p
    } = e, h = (b) => {
      s || (s = !0, t(b, a));
    }, d = (b) => {
      s || (s = !0, n(b, a));
    }, x = i.length, m = [];
    if (!x) return d([]);
    let g = {
      value: a,
      originalValue: o,
      path: u,
      options: p,
      schema: this
    };
    for (let b = 0; b < i.length; b++) {
      const E = i[b];
      E(g, h, function(y) {
        y && (Array.isArray(y) ? m.push(...y) : m.push(y)), --x <= 0 && d(m);
      });
    }
  }
  asNestedTest({
    key: e,
    index: t,
    parent: n,
    parentPath: s,
    originalParent: i,
    options: a
  }) {
    const o = e ?? t;
    if (o == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const u = typeof o == "number";
    let p = n[o];
    const h = Object.assign({}, a, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: n,
      value: p,
      originalValue: i[o],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [u ? "index" : "key"]: o,
      path: u || o.includes(".") ? `${s || ""}[${u ? o : `"${o}"`}]` : (s ? `${s}.` : "") + e
    });
    return (d, x, m) => this.resolve(h)._validate(p, h, x, m);
  }
  validate(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), i = (n = t?.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return new Promise((a, o) => s._validate(e, t, (u, p) => {
      B.isError(u) && (u.value = p), o(u);
    }, (u, p) => {
      u.length ? o(new B(u, p, void 0, void 0, i)) : a(p);
    }));
  }
  validateSync(e, t) {
    var n;
    let s = this.resolve(Object.assign({}, t, {
      value: e
    })), i, a = (n = t?.disableStackTrace) != null ? n : s.spec.disableStackTrace;
    return s._validate(e, Object.assign({}, t, {
      sync: !0
    }), (o, u) => {
      throw B.isError(o) && (o.value = u), o;
    }, (o, u) => {
      if (o.length) throw new B(o, e, void 0, void 0, a);
      i = u;
    }), i;
  }
  isValid(e, t) {
    return this.validate(e, t).then(() => !0, (n) => {
      if (B.isError(n)) return !1;
      throw n;
    });
  }
  isValidSync(e, t) {
    try {
      return this.validateSync(e, t), !0;
    } catch (n) {
      if (B.isError(n)) return !1;
      throw n;
    }
  }
  _getDefault(e) {
    let t = this.spec.default;
    return t == null ? t : typeof t == "function" ? t.call(this, e) : Oe(t);
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
    const n = this.clone({
      nullable: e
    });
    return n.internalTests.nullable = we({
      message: t,
      name: "nullable",
      test(s) {
        return s === null ? this.schema.spec.nullable : !0;
      }
    }), n;
  }
  optionality(e, t) {
    const n = this.clone({
      optional: e
    });
    return n.internalTests.optionality = we({
      message: t,
      name: "optionality",
      test(s) {
        return s === void 0 ? this.schema.spec.optional : !0;
      }
    }), n;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(e = ee.defined) {
    return this.optionality(!1, e);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(e = ee.notNull) {
    return this.nullability(!1, e);
  }
  required(e = ee.required) {
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
    }, t.message === void 0 && (t.message = ee.default), typeof t.test != "function") throw new TypeError("`test` is a required parameters");
    let n = this.clone(), s = we(t), i = t.exclusive || t.name && n.exclusiveTests[t.name] === !0;
    if (t.exclusive && !t.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return t.name && (n.exclusiveTests[t.name] = !!t.exclusive), n.tests = n.tests.filter((a) => !(a.OPTIONS.name === t.name && (i || a.OPTIONS.test === s.OPTIONS.test))), n.tests.push(s), n;
  }
  when(e, t) {
    !Array.isArray(e) && typeof e != "string" && (t = e, e = ".");
    let n = this.clone(), s = hr(e).map((i) => new ve(i));
    return s.forEach((i) => {
      i.isSibling && n.deps.push(i.key);
    }), n.conditions.push(typeof t == "function" ? new Je(s, t) : Je.fromOptions(s, t)), n;
  }
  typeError(e) {
    let t = this.clone();
    return t.internalTests.typeError = we({
      message: e,
      name: "typeError",
      skipAbsent: !0,
      test(n) {
        return this.schema._typeCheck(n) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), t;
  }
  oneOf(e, t = ee.oneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._whitelist.add(s), n._blacklist.delete(s);
    }), n.internalTests.whiteList = we({
      message: t,
      name: "oneOf",
      skipAbsent: !0,
      test(s) {
        let i = this.schema._whitelist, a = i.resolveAll(this.resolve);
        return a.includes(s) ? !0 : this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: a
          }
        });
      }
    }), n;
  }
  notOneOf(e, t = ee.notOneOf) {
    let n = this.clone();
    return e.forEach((s) => {
      n._blacklist.add(s), n._whitelist.delete(s);
    }), n.internalTests.blacklist = we({
      message: t,
      name: "notOneOf",
      test(s) {
        let i = this.schema._blacklist, a = i.resolveAll(this.resolve);
        return a.includes(s) ? this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: a
          }
        }) : !0;
      }
    }), n;
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
      label: n,
      meta: s,
      optional: i,
      nullable: a
    } = t.spec;
    return {
      meta: s,
      label: n,
      optional: i,
      nullable: a,
      default: t.getDefault(e),
      type: t.type,
      oneOf: t._whitelist.describe(),
      notOneOf: t._blacklist.describe(),
      tests: t.tests.filter((u, p, h) => h.findIndex((d) => d.OPTIONS.name === u.OPTIONS.name) === p).map((u) => {
        const p = u.OPTIONS.params && e ? gr(Object.assign({}, u.OPTIONS.params), e) : u.OPTIONS.params;
        return {
          name: u.OPTIONS.name,
          params: p
        };
      })
    };
  }
  get "~standard"() {
    const e = this;
    return {
      version: 1,
      vendor: "yup",
      async validate(n) {
        try {
          return {
            value: await e.validate(n, {
              abortEarly: !1
            })
          };
        } catch (s) {
          if (s instanceof B)
            return {
              issues: yr(s)
            };
          throw s;
        }
      }
    };
  }
}
re.prototype.__isYupSchema__ = !0;
for (const r of ["validate", "validateSync"]) re.prototype[`${r}At`] = function(e, t, n = {}) {
  const {
    parent: s,
    parentPath: i,
    schema: a
  } = ns(this, e, t, n.context);
  return a[r](s && s[i], Object.assign({}, n, {
    parent: s,
    path: e
  }));
};
for (const r of ["equals", "is"]) re.prototype[r] = re.prototype.oneOf;
for (const r of ["not", "nope"]) re.prototype[r] = re.prototype.notOneOf;
const as = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function os(r) {
  const e = _t(r);
  if (!e) return Date.parse ? Date.parse(r) : Number.NaN;
  if (e.z === void 0 && e.plusMinus === void 0)
    return new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond).valueOf();
  let t = 0;
  return e.z !== "Z" && e.plusMinus !== void 0 && (t = e.hourOffset * 60 + e.minuteOffset, e.plusMinus === "+" && (t = 0 - t)), Date.UTC(e.year, e.month, e.day, e.hour, e.minute + t, e.second, e.millisecond);
}
function _t(r) {
  var e, t;
  const n = as.exec(r);
  return n ? {
    year: oe(n[1]),
    month: oe(n[2], 1) - 1,
    day: oe(n[3], 1),
    hour: oe(n[4]),
    minute: oe(n[5]),
    second: oe(n[6]),
    millisecond: n[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      oe(n[7].substring(0, 3))
    ) : 0,
    precision: (e = (t = n[7]) == null ? void 0 : t.length) != null ? e : void 0,
    z: n[8] || void 0,
    plusMinus: n[9] || void 0,
    hourOffset: oe(n[10]),
    minuteOffset: oe(n[11])
  } : null;
}
function oe(r, e = 0) {
  return Number(r) || e;
}
let us = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), ls = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), cs = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, fs = "^\\d{4}-\\d{2}-\\d{2}", ds = "\\d{2}:\\d{2}:\\d{2}", hs = "(([+-]\\d{2}(:?\\d{2})?)|Z)", ps = new RegExp(`${fs}T${ds}(\\.\\d+)?${hs}$`), ms = (r) => ge(r) || r === r.trim(), xs = {}.toString();
function He() {
  return new vr();
}
class vr extends re {
  constructor() {
    super({
      type: "string",
      check(e) {
        return e instanceof String && (e = e.valueOf()), typeof e == "string";
      }
    }), this.withMutation(() => {
      this.transform((e, t) => {
        if (!this.spec.coerce || this.isType(e) || Array.isArray(e)) return e;
        const n = e != null && e.toString ? e.toString() : e;
        return n === xs ? e : n;
      });
    });
  }
  required(e) {
    return super.required(e).withMutation((t) => t.test({
      message: e || ee.required,
      name: "required",
      skipAbsent: !0,
      test: (n) => !!n.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((e) => (e.tests = e.tests.filter((t) => t.OPTIONS.name !== "required"), e));
  }
  length(e, t = H.length) {
    return this.test({
      message: t,
      name: "length",
      exclusive: !0,
      params: {
        length: e
      },
      skipAbsent: !0,
      test(n) {
        return n.length === this.resolve(e);
      }
    });
  }
  min(e, t = H.min) {
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(n) {
        return n.length >= this.resolve(e);
      }
    });
  }
  max(e, t = H.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: t,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(n) {
        return n.length <= this.resolve(e);
      }
    });
  }
  matches(e, t) {
    let n = !1, s, i;
    return t && (typeof t == "object" ? {
      excludeEmptyString: n = !1,
      message: s,
      name: i
    } = t : s = t), this.test({
      name: i || "matches",
      message: s || H.matches,
      params: {
        regex: e
      },
      skipAbsent: !0,
      test: (a) => a === "" && n || a.search(e) !== -1
    });
  }
  email(e = H.email) {
    return this.matches(us, {
      name: "email",
      message: e,
      excludeEmptyString: !0
    });
  }
  url(e = H.url) {
    return this.matches(ls, {
      name: "url",
      message: e,
      excludeEmptyString: !0
    });
  }
  uuid(e = H.uuid) {
    return this.matches(cs, {
      name: "uuid",
      message: e,
      excludeEmptyString: !1
    });
  }
  datetime(e) {
    let t = "", n, s;
    return e && (typeof e == "object" ? {
      message: t = "",
      allowOffset: n = !1,
      precision: s = void 0
    } = e : t = e), this.matches(ps, {
      name: "datetime",
      message: t || H.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: t || H.datetime_offset,
      params: {
        allowOffset: n
      },
      skipAbsent: !0,
      test: (i) => {
        if (!i || n) return !0;
        const a = _t(i);
        return a ? !!a.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: t || H.datetime_precision,
      params: {
        precision: s
      },
      skipAbsent: !0,
      test: (i) => {
        if (!i || s == null) return !0;
        const a = _t(i);
        return a ? a.precision === s : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((e) => e === null ? "" : e);
  }
  trim(e = H.trim) {
    return this.transform((t) => t != null ? t.trim() : t).test({
      message: e,
      name: "trim",
      test: ms
    });
  }
  lowercase(e = H.lowercase) {
    return this.transform((t) => ge(t) ? t : t.toLowerCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => ge(t) || t === t.toLowerCase()
    });
  }
  uppercase(e = H.uppercase) {
    return this.transform((t) => ge(t) ? t : t.toUpperCase()).test({
      message: e,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (t) => ge(t) || t === t.toUpperCase()
    });
  }
}
He.prototype = vr.prototype;
let gs = /* @__PURE__ */ new Date(""), bs = (r) => Object.prototype.toString.call(r) === "[object Date]";
class jt extends re {
  constructor() {
    super({
      type: "date",
      check(e) {
        return bs(e) && !isNaN(e.getTime());
      }
    }), this.withMutation(() => {
      this.transform((e, t) => !this.spec.coerce || this.isType(e) || e === null ? e : (e = os(e), isNaN(e) ? jt.INVALID_DATE : new Date(e)));
    });
  }
  prepareParam(e, t) {
    let n;
    if (ve.isRef(e))
      n = e;
    else {
      let s = this.cast(e);
      if (!this._typeCheck(s)) throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);
      n = s;
    }
    return n;
  }
  min(e, t = Et.min) {
    let n = this.prepareParam(e, "min");
    return this.test({
      message: t,
      name: "min",
      exclusive: !0,
      params: {
        min: e
      },
      skipAbsent: !0,
      test(s) {
        return s >= this.resolve(n);
      }
    });
  }
  max(e, t = Et.max) {
    let n = this.prepareParam(e, "max");
    return this.test({
      message: t,
      name: "max",
      exclusive: !0,
      params: {
        max: e
      },
      skipAbsent: !0,
      test(s) {
        return s <= this.resolve(n);
      }
    });
  }
}
jt.INVALID_DATE = gs;
function ys(r, e = []) {
  let t = [], n = /* @__PURE__ */ new Set(), s = new Set(e.map(([a, o]) => `${a}-${o}`));
  function i(a, o) {
    let u = be.split(a)[0];
    n.add(u), s.has(`${o}-${u}`) || t.push([o, u]);
  }
  for (const a of Object.keys(r)) {
    let o = r[a];
    n.add(a), ve.isRef(o) && o.isSibling ? i(o.path, a) : Tt(o) && "deps" in o && o.deps.forEach((u) => i(u, a));
  }
  return Yn.array(Array.from(n), t).reverse();
}
function Kt(r, e) {
  let t = 1 / 0;
  return r.some((n, s) => {
    var i;
    if ((i = e.path) != null && i.includes(n))
      return t = s, !0;
  }), t;
}
function Er(r) {
  return (e, t) => Kt(r, e) - Kt(r, t);
}
const vs = (r, e, t) => {
  if (typeof r != "string")
    return r;
  let n = r;
  try {
    n = JSON.parse(r);
  } catch {
  }
  return t.isType(n) ? n : r;
};
function Ze(r) {
  if ("fields" in r) {
    const e = {};
    for (const [t, n] of Object.entries(r.fields))
      e[t] = Ze(n);
    return r.setFields(e);
  }
  if (r.type === "array") {
    const e = r.optional();
    return e.innerType && (e.innerType = Ze(e.innerType)), e;
  }
  return r.type === "tuple" ? r.optional().clone({
    types: r.spec.types.map(Ze)
  }) : "optional" in r ? r.optional() : r;
}
const Es = (r, e) => {
  const t = [...be.normalizePath(e)];
  if (t.length === 1) return t[0] in r;
  let n = t.pop(), s = be.getter(be.join(t), !0)(r);
  return !!(s && n in s);
};
let Xt = (r) => Object.prototype.toString.call(r) === "[object Object]";
function Qt(r, e) {
  let t = Object.keys(r.fields);
  return Object.keys(e).filter((n) => t.indexOf(n) === -1);
}
const _s = Er([]);
function _r(r) {
  return new wr(r);
}
class wr extends re {
  constructor(e) {
    super({
      type: "object",
      check(t) {
        return Xt(t) || typeof t == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = _s, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      e && this.shape(e);
    });
  }
  _cast(e, t = {}) {
    var n;
    let s = super._cast(e, t);
    if (s === void 0) return this.getDefault(t);
    if (!this._typeCheck(s)) return s;
    let i = this.fields, a = (n = t.stripUnknown) != null ? n : this.spec.noUnknown, o = [].concat(this._nodes, Object.keys(s).filter((d) => !this._nodes.includes(d))), u = {}, p = Object.assign({}, t, {
      parent: u,
      __validating: t.__validating || !1
    }), h = !1;
    for (const d of o) {
      let x = i[d], m = d in s, g = s[d];
      if (x) {
        let b;
        p.path = (t.path ? `${t.path}.` : "") + d, x = x.resolve({
          value: g,
          context: t.context,
          parent: u
        });
        let E = x instanceof re ? x.spec : void 0, l = E?.strict;
        if (E != null && E.strip) {
          h = h || d in s;
          continue;
        }
        b = !t.__validating || !l ? x.cast(g, p) : g, b !== void 0 && (u[d] = b);
      } else m && !a && (u[d] = g);
      (m !== d in u || u[d] !== g) && (h = !0);
    }
    return h ? u : s;
  }
  _validate(e, t = {}, n, s) {
    let {
      from: i = [],
      originalValue: a = e,
      recursive: o = this.spec.recursive
    } = t;
    t.from = [{
      schema: this,
      value: a
    }, ...i], t.__validating = !0, t.originalValue = a, super._validate(e, t, n, (u, p) => {
      if (!o || !Xt(p)) {
        s(u, p);
        return;
      }
      a = a || p;
      let h = [];
      for (let d of this._nodes) {
        let x = this.fields[d];
        !x || ve.isRef(x) || h.push(x.asNestedTest({
          options: t,
          key: d,
          parent: p,
          parentPath: t.path,
          originalParent: a
        }));
      }
      this.runTests({
        tests: h,
        value: p,
        originalValue: a,
        options: t
      }, n, (d) => {
        s(d.sort(this._sortErrors).concat(u), p);
      });
    });
  }
  clone(e) {
    const t = super.clone(e);
    return t.fields = Object.assign({}, this.fields), t._nodes = this._nodes, t._excludedEdges = this._excludedEdges, t._sortErrors = this._sortErrors, t;
  }
  concat(e) {
    let t = super.concat(e), n = t.fields;
    for (let [s, i] of Object.entries(this.fields)) {
      const a = n[s];
      n[s] = a === void 0 ? i : a;
    }
    return t.withMutation((s) => (
      // XXX: excludes here is wrong
      s.setFields(n, [...this._excludedEdges, ...e._excludedEdges])
    ));
  }
  _getDefault(e) {
    if ("default" in this.spec)
      return super._getDefault(e);
    if (!this._nodes.length)
      return;
    let t = {};
    return this._nodes.forEach((n) => {
      var s;
      const i = this.fields[n];
      let a = e;
      (s = a) != null && s.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[n]
      })), t[n] = i && "getDefault" in i ? i.getDefault(a) : void 0;
    }), t;
  }
  setFields(e, t) {
    let n = this.clone();
    return n.fields = e, n._nodes = ys(e, t), n._sortErrors = Er(Object.keys(e)), t && (n._excludedEdges = t), n;
  }
  shape(e, t = []) {
    return this.clone().withMutation((n) => {
      let s = n._excludedEdges;
      return t.length && (Array.isArray(t[0]) || (t = [t]), s = [...n._excludedEdges, ...t]), n.setFields(Object.assign(n.fields, e), s);
    });
  }
  partial() {
    const e = {};
    for (const [t, n] of Object.entries(this.fields))
      e[t] = "optional" in n && n.optional instanceof Function ? n.optional() : n;
    return this.setFields(e);
  }
  deepPartial() {
    return Ze(this);
  }
  pick(e) {
    const t = {};
    for (const n of e)
      this.fields[n] && (t[n] = this.fields[n]);
    return this.setFields(t, this._excludedEdges.filter(([n, s]) => e.includes(n) && e.includes(s)));
  }
  omit(e) {
    const t = [];
    for (const n of Object.keys(this.fields))
      e.includes(n) || t.push(n);
    return this.pick(t);
  }
  from(e, t, n) {
    let s = be.getter(e, !0);
    return this.transform((i) => {
      if (!i) return i;
      let a = i;
      return Es(i, e) && (a = Object.assign({}, i), n || delete a[e], a[t] = s(i)), a;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(vs);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(e) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: e || Be.exact,
      test(t) {
        if (t == null) return !0;
        const n = Qt(this.schema, t);
        return n.length === 0 || this.createError({
          params: {
            properties: n.join(", ")
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
  noUnknown(e = !0, t = Be.noUnknown) {
    typeof e != "boolean" && (t = e, e = !0);
    let n = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: t,
      test(s) {
        if (s == null) return !0;
        const i = Qt(this.schema, s);
        return !e || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return n.spec.noUnknown = e, n;
  }
  unknown(e = !0, t = Be.noUnknown) {
    return this.noUnknown(!e, t);
  }
  transformKeys(e) {
    return this.transform((t) => {
      if (!t) return t;
      const n = {};
      for (const s of Object.keys(t)) n[e(s)] = t[s];
      return n;
    });
  }
  camelCase() {
    return this.transformKeys(ft.camelCase);
  }
  snakeCase() {
    return this.transformKeys(ft.snakeCase);
  }
  constantCase() {
    return this.transformKeys((e) => ft.snakeCase(e).toUpperCase());
  }
  describe(e) {
    const t = (e ? this.resolve(e) : this).clone(), n = super.describe(e);
    n.fields = {};
    for (const [i, a] of Object.entries(t.fields)) {
      var s;
      let o = e;
      (s = o) != null && s.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[i]
      })), n.fields[i] = a.describe(o);
    }
    return n;
  }
}
_r.prototype = wr.prototype;
const ws = ({ isSubmitting: r }) => /* @__PURE__ */ f.jsx(
  De,
  {
    type: "submit",
    fullWidth: !0,
    variant: "contained",
    sx: { mt: 3, mb: 2 },
    disabled: r,
    children: r ? /* @__PURE__ */ f.jsx(Ne, { size: 24 }) : "Sign In"
  }
), Ss = (r, e) => _r({
  [r.name]: He().required(`${r.label} is required`).test(
    "is-email-if-required",
    "Enter a valid email",
    (t) => r.name === "email" ? He().email().isValidSync(t) : !0
  ),
  // Add password validation only if the field is present
  ...e && {
    [e.name]: He().required(`${e.label} is required`)
  }
}), Is = ({
  onSubmit: r,
  isSubmitting: e = !1,
  error: t,
  logo: n,
  title: s = "Sign in to your account",
  loginField: i = { name: "email", label: "Email Address", autoComplete: "email" },
  passwordField: a = { name: "password", label: "Password", autoComplete: "current-password" },
  validationSchema: o,
  renderActions: u = ws
}) => {
  const p = o || Ss(i, a);
  return /* @__PURE__ */ f.jsx(Ir, { component: "main", maxWidth: "xs", children: /* @__PURE__ */ f.jsxs(
    Xe,
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
        n && /* @__PURE__ */ f.jsx(Y, { mb: 2, children: n }),
        /* @__PURE__ */ f.jsx(de, { component: "h1", variant: "h5", children: s }),
        t && /* @__PURE__ */ f.jsx(dt, { severity: "error", sx: { width: "100%", mt: 2 }, children: t.message }),
        /* @__PURE__ */ f.jsx(Y, { sx: { mt: 1, width: "100%" }, children: /* @__PURE__ */ f.jsxs(
          sr,
          {
            onSubmit: r,
            validationSchema: p,
            noValidate: !0,
            children: [
              /* @__PURE__ */ f.jsx(
                Nt,
                {
                  margin: "normal",
                  required: !0,
                  fullWidth: !0,
                  id: i.name,
                  label: i.label,
                  name: i.name,
                  autoComplete: i.autoComplete,
                  autoFocus: !0
                }
              ),
              a && /* @__PURE__ */ f.jsx(
                Nt,
                {
                  margin: "normal",
                  required: !0,
                  fullWidth: !0,
                  id: a.name,
                  label: a.label,
                  name: a.name,
                  type: "password",
                  autoComplete: a.autoComplete
                }
              ),
              u({ isSubmitting: e })
            ]
          }
        ) })
      ]
    }
  ) });
}, Se = 240, Ns = ({
  navItems: r = [],
  title: e = "Dashboard",
  drawerHeader: t,
  headerActions: n,
  children: s
}) => {
  const [i, a] = U(!1), o = () => {
    a(!i);
  }, u = /* @__PURE__ */ f.jsxs(Y, { children: [
    t ? /* @__PURE__ */ f.jsx(Te, { sx: { justifyContent: "center" }, children: t }) : null,
    /* @__PURE__ */ f.jsx(Nr, { children: r.map((p, h) => {
      const d = p.component || "a", x = d !== "a" ? { to: p.path } : { href: p.path };
      return /* @__PURE__ */ f.jsx(Pr, { disablePadding: !0, children: /* @__PURE__ */ f.jsxs(Lr, { component: d, ...x, children: [
        p.icon && /* @__PURE__ */ f.jsx(Vr, { children: p.icon }),
        /* @__PURE__ */ f.jsx(Mr, { primary: p.text })
      ] }) }, h);
    }) })
  ] });
  return /* @__PURE__ */ f.jsxs(Y, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ f.jsx(Ur, {}),
    /* @__PURE__ */ f.jsx(
      qr,
      {
        position: "fixed",
        sx: {
          width: { sm: `calc(100% - ${Se}px)` },
          ml: { sm: `${Se}px` }
        },
        children: /* @__PURE__ */ f.jsxs(Te, { children: [
          /* @__PURE__ */ f.jsx(
            zr,
            {
              color: "primary",
              "aria-label": "open drawer",
              edge: "start",
              onClick: o,
              sx: { mr: 2, display: { sm: "none" } },
              children: /* @__PURE__ */ f.jsx(Br, {})
            }
          ),
          /* @__PURE__ */ f.jsx(de, { variant: "h6", noWrap: !0, color: "primary", component: "div", sx: { flexGrow: 1 }, children: e }),
          n
        ] })
      }
    ),
    /* @__PURE__ */ f.jsxs(
      Y,
      {
        component: "nav",
        sx: { width: { sm: Se }, flexShrink: { sm: 0 } },
        "aria-label": "mailbox folders",
        children: [
          /* @__PURE__ */ f.jsx(
            At,
            {
              variant: "temporary",
              open: i,
              onClose: o,
              ModalProps: {
                keepMounted: !0
                // Better open performance on mobile.
              },
              sx: {
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: Se }
              },
              children: u
            }
          ),
          /* @__PURE__ */ f.jsx(
            At,
            {
              variant: "permanent",
              sx: {
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: Se }
              },
              open: !0,
              children: u
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      Y,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          width: { xs: "100%", sm: `calc(100% - ${Se}px)` },
          minHeight: "100vh",
          backgroundColor: (p) => p.palette.grey[100]
        },
        children: [
          /* @__PURE__ */ f.jsx(Te, {}),
          s
        ]
      }
    )
  ] });
};
export {
  ks as AutocompleteField,
  Ns as DashboardLayout,
  en as DataTable,
  Cs as FileUploadField,
  sr as Form,
  Pe as FormContext,
  Is as LoginPage,
  $s as ResourceFormPage,
  Ds as ResourceListPage,
  Fs as StatCard,
  As as SwitchField,
  Nt as TextField
};
