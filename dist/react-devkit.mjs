import ft, { createContext as dt, useState as A, useCallback as Je, useContext as ve, useEffect as re } from "react";
import { Paper as we, Box as N, Typography as Y, Toolbar as te, TableContainer as ht, Table as pt, TableHead as mt, TableRow as se, TableCell as ie, TableSortLabel as xt, TableBody as bt, TablePagination as gt, CircularProgress as le, TextField as $e, Avatar as yt, Button as ue, Autocomplete as vt, FormControlLabel as Xe, Switch as He, Alert as Fe, Container as wt, List as Et, ListItem as _t, ListItemButton as St, ListItemIcon as Tt, ListItemText as jt, CssBaseline as Ft, AppBar as Ot, IconButton as kt, Drawer as Ne } from "@mui/material";
import { ImageNotSupported as $t, Add as Ct, Search as At, Menu as Rt } from "@mui/icons-material";
function Dt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var de = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Pt() {
  if (Ie) return ae;
  Ie = 1;
  var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(r, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var o in s)
        o !== "key" && (i[o] = s[o]);
    } else i = s;
    return s = i.ref, {
      $$typeof: n,
      type: r,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return ae.Fragment = t, ae.jsx = e, ae.jsxs = e, ae;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Nt() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === O ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case v:
          return "Fragment";
        case x:
          return "Profiler";
        case h:
          return "StrictMode";
        case S:
          return "Suspense";
        case w:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case _:
            return "Portal";
          case F:
            return l.displayName || "Context";
          case E:
            return (l._context.displayName || "Context") + ".Consumer";
          case T:
            var y = l.render;
            return l = l.displayName, l || (l = y.displayName || y.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case j:
            return y = l.displayName || null, y !== null ? y : n(l.type) || "Memo";
          case $:
            y = l._payload, l = l._init;
            try {
              return n(l(y));
            } catch {
            }
        }
      return null;
    }
    function t(l) {
      return "" + l;
    }
    function e(l) {
      try {
        t(l);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var C = y.error, R = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return C.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), t(l);
      }
    }
    function r(l) {
      if (l === v) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === $)
        return "<...>";
      try {
        var y = n(l);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var l = M.A;
      return l === null ? null : l.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(l) {
      if (k.call(l, "key")) {
        var y = Object.getOwnPropertyDescriptor(l, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function o(l, y) {
      function C() {
        X || (X = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: C,
        configurable: !0
      });
    }
    function u() {
      var l = n(this.type);
      return ne[l] || (ne[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function d(l, y, C, R, fe, Ee) {
      var D = C.ref;
      return l = {
        $$typeof: g,
        type: l,
        key: y,
        props: C,
        _owner: R
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: fe
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ee
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function f(l, y, C, R, fe, Ee) {
      var D = y.children;
      if (D !== void 0)
        if (R)
          if (Z(D)) {
            for (R = 0; R < D.length; R++)
              p(D[R]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(D);
      if (k.call(y, "key")) {
        D = n(l);
        var H = Object.keys(y).filter(function(ct) {
          return ct !== "key";
        });
        R = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", Pe[D + R] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          D,
          H,
          D
        ), Pe[D + R] = !0);
      }
      if (D = null, C !== void 0 && (e(C), D = "" + C), a(y) && (e(y.key), D = "" + y.key), "key" in y) {
        C = {};
        for (var _e in y)
          _e !== "key" && (C[_e] = y[_e]);
      } else C = y;
      return D && o(
        C,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), d(
        l,
        D,
        C,
        s(),
        fe,
        Ee
      );
    }
    function p(l) {
      m(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === $ && (l._payload.status === "fulfilled" ? m(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function m(l) {
      return typeof l == "object" && l !== null && l.$$typeof === g;
    }
    var b = ft, g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), F = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), M = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = Object.prototype.hasOwnProperty, Z = Array.isArray, W = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var X, ne = {}, Re = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), De = W(r(i)), Pe = {};
    oe.Fragment = v, oe.jsx = function(l, y, C) {
      var R = 1e4 > M.recentlyCreatedOwnerStacks++;
      return f(
        l,
        y,
        C,
        !1,
        R ? Error("react-stack-top-frame") : Re,
        R ? W(r(l)) : De
      );
    }, oe.jsxs = function(l, y, C) {
      var R = 1e4 > M.recentlyCreatedOwnerStacks++;
      return f(
        l,
        y,
        C,
        !0,
        R ? Error("react-stack-top-frame") : Re,
        R ? W(r(l)) : De
      );
    };
  })()), oe;
}
var Me;
function It() {
  return Me || (Me = 1, process.env.NODE_ENV === "production" ? de.exports = Pt() : de.exports = Nt()), de.exports;
}
var c = It();
const Fr = ({ icon: n, title: t, value: e, color: r, sx: s, onClick: i }) => /* @__PURE__ */ c.jsxs(
  we,
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
      /* @__PURE__ */ c.jsx(N, { sx: { color: r || "primary.main", fontSize: 40 }, "data-testid": "statcard-icon", children: n }),
      /* @__PURE__ */ c.jsxs(N, { children: [
        /* @__PURE__ */ c.jsx(Y, { color: "text.secondary", children: t }),
        /* @__PURE__ */ c.jsx(Y, { variant: "h5", sx: { fontWeight: "bold" }, children: e })
      ] })
    ]
  }
), zt = () => /* @__PURE__ */ c.jsx(N, { sx: { p: 4, textAlign: "center" }, children: /* @__PURE__ */ c.jsx(Y, { color: "text.secondary", children: "No rows" }) }), Mt = () => /* @__PURE__ */ c.jsx(N, { sx: { display: "flex", justifyContent: "center", alignItems: "center", p: 4 }, children: /* @__PURE__ */ c.jsx(le, {}) }), Vt = ({
  // Data
  rows: n = [],
  columns: t = [],
  getRowId: e = (x) => x.id,
  // State
  loading: r = !1,
  error: s,
  // Pagination
  pagination: i = !1,
  rowCount: a = 0,
  page: o = 0,
  onPageChange: u = () => {
  },
  pageSize: d = 10,
  onPageSizeChange: f = () => {
  },
  pageSizeOptions: p = [5, 10, 25, 50],
  // Sorting
  sorting: m = !1,
  sortModel: b = [],
  onSortModelChange: g = () => {
  },
  // Customization
  slots: _ = {},
  slotProps: v = {},
  sx: h
}) => {
  const {
    toolbar: x,
    noRowsOverlay: E = zt,
    loadingOverlay: F = Mt
  } = _, T = (w) => {
    if (!m) return;
    const j = b.find((z) => z.field === w);
    let $;
    j ? j.sort === "asc" ? $ = [{ field: w, sort: "desc" }] : $ = [] : $ = [{ field: w, sort: "asc" }], g($);
  }, S = b.length > 0 ? b[0] : null;
  return /* @__PURE__ */ c.jsxs(we, { sx: h, children: [
    x && /* @__PURE__ */ c.jsx(te, { children: /* @__PURE__ */ c.jsx(x, { ...v.toolbar || {} }) }),
    /* @__PURE__ */ c.jsx(ht, { children: /* @__PURE__ */ c.jsxs(pt, { stickyHeader: !0, children: [
      /* @__PURE__ */ c.jsx(mt, { children: /* @__PURE__ */ c.jsx(se, { children: t.map((w) => /* @__PURE__ */ c.jsx(
        ie,
        {
          align: w.align || "inherit",
          width: w.width,
          sortDirection: S?.field === w.field ? S.sort : !1,
          children: w.sortable && m ? /* @__PURE__ */ c.jsx(
            xt,
            {
              active: S?.field === w.field,
              direction: S?.field === w.field ? S.sort : "asc",
              onClick: () => T(w.field),
              children: w.headerName
            }
          ) : w.headerName
        },
        w.field
      )) }) }),
      /* @__PURE__ */ c.jsx(bt, { children: r ? /* @__PURE__ */ c.jsx(se, { children: /* @__PURE__ */ c.jsx(ie, { colSpan: t.length, sx: { border: "none" }, children: /* @__PURE__ */ c.jsx(F, { ...v.loadingOverlay || {} }) }) }) : s ? /* @__PURE__ */ c.jsx(se, { children: /* @__PURE__ */ c.jsx(ie, { colSpan: t.length, sx: { border: "none", textAlign: "center" }, children: /* @__PURE__ */ c.jsx(Y, { color: "error", children: s.message || "An error occurred." }) }) }) : n.length === 0 ? /* @__PURE__ */ c.jsx(se, { children: /* @__PURE__ */ c.jsx(ie, { colSpan: t.length, sx: { border: "none" }, children: /* @__PURE__ */ c.jsx(E, { ...v.noRowsOverlay || {} }) }) }) : n.map((w) => /* @__PURE__ */ c.jsx(se, { hover: !0, children: t.map((j) => {
        const $ = j.field.split(".").reduce((z, O) => z?.[O], w);
        return /* @__PURE__ */ c.jsx(ie, { align: j.align || "inherit", children: j.renderCell ? j.renderCell({ value: $, row: w, id: e(w) }) : $ }, j.field);
      }) }, e(w))) })
    ] }) }),
    i && !s && /* @__PURE__ */ c.jsx(
      gt,
      {
        component: "div",
        count: a,
        page: o,
        onPageChange: (w, j) => u(j),
        rowsPerPage: d,
        onRowsPerPageChange: (w) => f(parseInt(w.target.value, 10)),
        rowsPerPageOptions: p
      }
    )
  ] });
}, ce = dt(null), Qe = ({ initialValues: n = {}, onSubmit: t, validationSchema: e, children: r, ...s }) => {
  const [i, a] = A(n || {}), [o, u] = A({}), d = Je((m, b) => {
    a((g) => ({
      ...g,
      [m]: b
    })), o[m] && u((g) => ({
      ...g,
      [m]: void 0
    }));
  }, [o]), f = async (m) => {
    m.preventDefault(), u({});
    try {
      e && await e.validate(i, { abortEarly: !1 }), t && t(i);
    } catch (b) {
      if (b.inner) {
        const g = b.inner.reduce((_, v) => (_[v.path] = v.message, _), {});
        u(g);
      }
    }
  }, p = {
    values: i,
    setFieldValue: d,
    errors: o
  };
  return /* @__PURE__ */ c.jsx(ce.Provider, { value: p, children: /* @__PURE__ */ c.jsx("form", { onSubmit: f, ...s, children: r }) });
}, Ve = ({ name: n, label: t, ...e }) => {
  const r = ve(ce);
  if (!r)
    throw new Error("TextField must be used within a Form component");
  const { values: s, setFieldValue: i, errors: a } = r, o = a[n], u = (d) => {
    i(n, d.target.value);
  };
  return /* @__PURE__ */ c.jsx(
    $e,
    {
      name: n,
      label: t,
      value: s[n] || "",
      onChange: u,
      error: !!o,
      helperText: o || "",
      ...e
    }
  );
}, Or = ({ name: n, label: t = "Upload File", initialPreview: e }) => {
  const r = ve(ce), [s, i] = A(e || null);
  if (!r)
    throw new Error("FileUploadField must be used within a Form component");
  const { setFieldValue: a, values: o } = r, u = o[n];
  re(() => {
    e && i(e);
  }, [e]), re(() => {
    u || i(e || null);
  }, [u, e]);
  const d = (f) => {
    const p = f.target.files[0];
    if (p) {
      a(n, p);
      const m = new FileReader();
      m.onloadend = () => {
        i(m.result);
      }, m.readAsDataURL(p);
    }
  };
  return /* @__PURE__ */ c.jsxs(N, { sx: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }, children: [
    /* @__PURE__ */ c.jsx(yt, { src: s, sx: { width: 100, height: 100 }, children: !s && /* @__PURE__ */ c.jsx($t, { sx: { width: "70%", height: "70%" } }) }),
    /* @__PURE__ */ c.jsxs(ue, { variant: "outlined", component: "label", children: [
      t,
      /* @__PURE__ */ c.jsx("input", { type: "file", hidden: !0, accept: "image/*", onChange: d, "data-testid": "file-upload-input" })
    ] })
  ] });
}, kr = ({
  name: n,
  label: t,
  fetchOptions: e,
  getOptionLabel: r = (a) => a.label,
  multiple: s = !1,
  ...i
}) => {
  const a = ve(ce);
  if (!a)
    throw new Error("AutocompleteField must be used within a Form component");
  const { values: o, setFieldValue: u, errors: d } = a, [f, p] = A([]), [m, b] = A(!1), [g, _] = A("");
  re(() => {
    let x = !0;
    return b(!0), e(g).then((E) => {
      x && p(E || []);
    }).catch(() => {
      x && p([]);
    }).finally(() => {
      x && b(!1);
    }), () => {
      x = !1;
    };
  }, [g, e]);
  const v = (x, E) => {
    u(n, E);
  }, h = d?.[n];
  return /* @__PURE__ */ c.jsx(
    vt,
    {
      multiple: s,
      options: f,
      loading: m,
      getOptionLabel: r,
      value: o[n] || (s ? [] : null),
      onChange: v,
      onInputChange: (x, E) => {
        _(E);
      },
      renderInput: (x) => /* @__PURE__ */ c.jsx(
        $e,
        {
          ...x,
          label: t,
          error: !!h,
          helperText: h,
          InputProps: {
            ...x.InputProps,
            endAdornment: /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              m ? /* @__PURE__ */ c.jsx(le, { color: "inherit", size: 20 }) : null,
              x.InputProps.endAdornment
            ] })
          }
        }
      ),
      ...i
    }
  );
}, $r = ({ name: n, label: t, ...e }) => {
  const r = ve(ce);
  if (!r)
    throw new Error("SwitchField must be used within a Form component");
  const { values: s, setFieldValue: i } = r, a = (o) => {
    i(n, o.target.checked);
  };
  return /* @__PURE__ */ c.jsx(
    Xe,
    {
      control: /* @__PURE__ */ c.jsx(
        He,
        {
          checked: !!s[n],
          onChange: a,
          name: n,
          ...e
        }
      ),
      label: t
    }
  );
}, Lt = (n, t) => {
  const [e, r] = A(n);
  return re(() => {
    const s = setTimeout(() => {
      r(n);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [n, t]), e;
}, Cr = ({
  resourceName: n,
  columns: t,
  api: e,
  dataAdapter: r = (u) => u,
  // Default adapter does nothing
  createPath: s,
  createText: i = "Create New",
  searchable: a = !1,
  filterOptions: o = []
}) => {
  const [u, d] = A([]), [f, p] = A(!0), [m, b] = A(null), [g, _] = A(0), [v, h] = A(0), [x, E] = A(10), [F, T] = A([]), [S, w] = A(""), [j, $] = A(
    () => o.reduce((k, Z) => ({ ...k, [Z.name]: !1 }), {})
  ), z = Lt(S, 500), O = Je(async () => {
    p(!0), b(null);
    try {
      const k = F.length > 0 ? F[0].field : void 0, Z = F.length > 0 ? F[0].sort : void 0, W = {
        page: v + 1,
        per_page: x,
        sort: k,
        order: Z,
        q: z || void 0,
        ...j
      }, X = await e.list(W), ne = r(X);
      d(ne.data), _(ne.meta.total);
    } catch (k) {
      b(k);
    } finally {
      p(!1);
    }
  }, [e, v, x, F, z, j, r]);
  re(() => {
    O();
  }, [O]);
  const M = (k) => {
    const { name: Z, checked: W } = k.target;
    $((X) => ({ ...X, [Z]: W })), h(0);
  };
  return /* @__PURE__ */ c.jsxs(N, { children: [
    /* @__PURE__ */ c.jsxs(te, { sx: { p: "0 !important", mb: 2, display: "flex", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ c.jsx(Y, { variant: "h4", component: "h1", sx: { flexGrow: 1 }, children: n }),
      s && /* @__PURE__ */ c.jsx(
        ue,
        {
          variant: "contained",
          startIcon: /* @__PURE__ */ c.jsx(Ct, {}),
          href: s,
          children: i
        }
      )
    ] }),
    /* @__PURE__ */ c.jsxs(N, { sx: { display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }, children: [
      a && /* @__PURE__ */ c.jsx(
        $e,
        {
          label: "Search",
          variant: "outlined",
          value: S,
          onChange: (k) => w(k.target.value),
          InputProps: { endAdornment: /* @__PURE__ */ c.jsx(At, { color: "action" }) },
          sx: { flexGrow: 1, minWidth: "200px" }
        }
      ),
      o.map((k) => /* @__PURE__ */ c.jsx(
        Xe,
        {
          control: /* @__PURE__ */ c.jsx(He, { checked: j[k.name], onChange: M, name: k.name }),
          label: k.label
        },
        k.name
      ))
    ] }),
    /* @__PURE__ */ c.jsx(
      Vt,
      {
        rows: u,
        columns: t,
        loading: f,
        error: m,
        rowCount: g,
        page: v,
        onPageChange: h,
        pageSize: x,
        onPageSizeChange: (k) => {
          E(k), h(0);
        },
        sortModel: F,
        onSortModelChange: (k) => {
          T(k), h(0);
        }
      }
    )
  ] });
}, Ar = ({
  resourceName: n,
  id: t,
  api: e,
  FormComponent: r,
  onSuccess: s = () => {
  },
  onCancel: i,
  submitText: a = "Save",
  cancelText: o = "Cancel"
}) => {
  const [u, d] = A(null), [f, p] = A(!1), [m, b] = A(null), [g, _] = A(!1), v = t != null;
  re(() => {
    v && (p(!0), b(null), e.getOne(t).then((E) => d(E)).catch((E) => b(E)).finally(() => p(!1)));
  }, [e, t, v]);
  const h = async (E) => {
    _(!0), b(null);
    try {
      const F = v ? await e.update(t, E) : await e.create(E);
      s(F.data);
    } catch (F) {
      b(F), _(!1);
    }
  }, x = v ? `Edit ${n}` : `Create ${n}`;
  return f ? /* @__PURE__ */ c.jsx(le, {}) : m && !g ? /* @__PURE__ */ c.jsx(Fe, { severity: "error", children: m.message || "Failed to load resource data." }) : /* @__PURE__ */ c.jsxs(N, { children: [
    /* @__PURE__ */ c.jsx(te, { sx: { p: "0 !important", mb: 2 }, children: /* @__PURE__ */ c.jsx(Y, { variant: "h4", component: "h1", children: x }) }),
    /* @__PURE__ */ c.jsx(we, { sx: { p: 3 }, children: (!v || u) && /* @__PURE__ */ c.jsxs(Qe, { onSubmit: h, initialValues: u, children: [
      /* @__PURE__ */ c.jsx(r, {}),
      m && g && /* @__PURE__ */ c.jsx(Fe, { severity: "error", sx: { mt: 2 }, children: m.message || "An error occurred during submission." }),
      /* @__PURE__ */ c.jsxs(N, { sx: { mt: 3, display: "flex", gap: 2 }, children: [
        /* @__PURE__ */ c.jsx(
          ue,
          {
            type: "submit",
            variant: "contained",
            disabled: g,
            children: g ? /* @__PURE__ */ c.jsx(le, { size: 24 }) : a
          }
        ),
        i && /* @__PURE__ */ c.jsx(ue, { variant: "outlined", onClick: i, disabled: g, children: o })
      ] })
    ] }) })
  ] });
};
var Se, Le;
function Ut() {
  if (Le) return Se;
  Le = 1;
  function n(h) {
    this._maxSize = h, this.clear();
  }
  n.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, n.prototype.get = function(h) {
    return this._values[h];
  }, n.prototype.set = function(h, x) {
    return this._size >= this._maxSize && this.clear(), h in this._values || this._size++, this._values[h] = x;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, e = /^\d+$/, r = /^\d/, s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, i = /^\s*(['"]?)(.*?)(\1)\s*$/, a = 512, o = new n(a), u = new n(a), d = new n(a);
  Se = {
    Cache: n,
    split: p,
    normalizePath: f,
    setter: function(h) {
      var x = f(h);
      return u.get(h) || u.set(h, function(F, T) {
        for (var S = 0, w = x.length, j = F; S < w - 1; ) {
          var $ = x[S];
          if ($ === "__proto__" || $ === "constructor" || $ === "prototype")
            return F;
          j = j[x[S++]];
        }
        j[x[S]] = T;
      });
    },
    getter: function(h, x) {
      var E = f(h);
      return d.get(h) || d.set(h, function(T) {
        for (var S = 0, w = E.length; S < w; )
          if (T != null || !x) T = T[E[S++]];
          else return;
        return T;
      });
    },
    join: function(h) {
      return h.reduce(function(x, E) {
        return x + (b(E) || e.test(E) ? "[" + E + "]" : (x ? "." : "") + E);
      }, "");
    },
    forEach: function(h, x, E) {
      m(Array.isArray(h) ? h : p(h), x, E);
    }
  };
  function f(h) {
    return o.get(h) || o.set(
      h,
      p(h).map(function(x) {
        return x.replace(i, "$2");
      })
    );
  }
  function p(h) {
    return h.match(t) || [""];
  }
  function m(h, x, E) {
    var F = h.length, T, S, w, j;
    for (S = 0; S < F; S++)
      T = h[S], T && (v(T) && (T = '"' + T + '"'), j = b(T), w = !j && /^\d+$/.test(T), x.call(E, T, j, w, S, h));
  }
  function b(h) {
    return typeof h == "string" && h && ["'", '"'].indexOf(h.charAt(0)) !== -1;
  }
  function g(h) {
    return h.match(r) && !h.match(e);
  }
  function _(h) {
    return s.test(h);
  }
  function v(h) {
    return !b(h) && (g(h) || _(h));
  }
  return Se;
}
var B = Ut(), Te, Ue;
function qt() {
  if (Ue) return Te;
  Ue = 1;
  const n = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (f) => f.match(n) || [], e = (f) => f[0].toUpperCase() + f.slice(1), r = (f, p) => t(f).join(p).toLowerCase(), s = (f) => t(f).reduce(
    (p, m) => `${p}${p ? m[0].toUpperCase() + m.slice(1).toLowerCase() : m.toLowerCase()}`,
    ""
  );
  return Te = {
    words: t,
    upperFirst: e,
    camelCase: s,
    pascalCase: (f) => e(s(f)),
    snakeCase: (f) => r(f, "_"),
    kebabCase: (f) => r(f, "-"),
    sentenceCase: (f) => e(r(f, " ")),
    titleCase: (f) => t(f).map(e).join(" ")
  }, Te;
}
var je = qt(), he = { exports: {} }, qe;
function Yt() {
  if (qe) return he.exports;
  qe = 1, he.exports = function(s) {
    return n(t(s), s);
  }, he.exports.array = n;
  function n(s, i) {
    var a = s.length, o = new Array(a), u = {}, d = a, f = e(i), p = r(s);
    for (i.forEach(function(b) {
      if (!p.has(b[0]) || !p.has(b[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); d--; )
      u[d] || m(s[d], d, /* @__PURE__ */ new Set());
    return o;
    function m(b, g, _) {
      if (_.has(b)) {
        var v;
        try {
          v = ", node was:" + JSON.stringify(b);
        } catch {
          v = "";
        }
        throw new Error("Cyclic dependency" + v);
      }
      if (!p.has(b))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(b));
      if (!u[g]) {
        u[g] = !0;
        var h = f.get(b) || /* @__PURE__ */ new Set();
        if (h = Array.from(h), g = h.length) {
          _.add(b);
          do {
            var x = h[--g];
            m(x, p.get(x), _);
          } while (g);
          _.delete(b);
        }
        o[--a] = b;
      }
    }
  }
  function t(s) {
    for (var i = /* @__PURE__ */ new Set(), a = 0, o = s.length; a < o; a++) {
      var u = s[a];
      i.add(u[0]), i.add(u[1]);
    }
    return Array.from(i);
  }
  function e(s) {
    for (var i = /* @__PURE__ */ new Map(), a = 0, o = s.length; a < o; a++) {
      var u = s[a];
      i.has(u[0]) || i.set(u[0], /* @__PURE__ */ new Set()), i.has(u[1]) || i.set(u[1], /* @__PURE__ */ new Set()), i.get(u[0]).add(u[1]);
    }
    return i;
  }
  function r(s) {
    for (var i = /* @__PURE__ */ new Map(), a = 0, o = s.length; a < o; a++)
      i.set(s[a], a);
    return i;
  }
  return he.exports;
}
var Zt = Yt();
const Wt = /* @__PURE__ */ Dt(Zt), Gt = Object.prototype.toString, Bt = Error.prototype.toString, Jt = RegExp.prototype.toString, Xt = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Ht = /^Symbol\((.*)\)(.*)$/;
function Qt(n) {
  return n != +n ? "NaN" : n === 0 && 1 / n < 0 ? "-0" : "" + n;
}
function Ye(n, t = !1) {
  if (n == null || n === !0 || n === !1) return "" + n;
  const e = typeof n;
  if (e === "number") return Qt(n);
  if (e === "string") return t ? `"${n}"` : n;
  if (e === "function") return "[Function " + (n.name || "anonymous") + "]";
  if (e === "symbol") return Xt.call(n).replace(Ht, "Symbol($1)");
  const r = Gt.call(n).slice(8, -1);
  return r === "Date" ? isNaN(n.getTime()) ? "" + n : n.toISOString(n) : r === "Error" || n instanceof Error ? "[" + Bt.call(n) + "]" : r === "RegExp" ? Jt.call(n) : null;
}
function q(n, t) {
  let e = Ye(n, t);
  return e !== null ? e : JSON.stringify(n, function(r, s) {
    let i = Ye(this[r], t);
    return i !== null ? i : s;
  }, 2);
}
function Ke(n) {
  return n == null ? [] : [].concat(n);
}
let et, tt, rt, Kt = /\$\{\s*(\w+)\s*\}/g;
et = Symbol.toStringTag;
class Ze {
  constructor(t, e, r, s) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[et] = "Error", this.name = "ValidationError", this.value = e, this.path = r, this.type = s, this.errors = [], this.inner = [], Ke(t).forEach((i) => {
      if (P.isError(i)) {
        this.errors.push(...i.errors);
        const a = i.inner.length ? i.inner : [i];
        this.inner.push(...a);
      } else
        this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
tt = Symbol.hasInstance;
rt = Symbol.toStringTag;
class P extends Error {
  static formatError(t, e) {
    const r = e.label || e.path || "this";
    return e = Object.assign({}, e, {
      path: r,
      originalPath: e.path
    }), typeof t == "string" ? t.replace(Kt, (s, i) => q(e[i])) : typeof t == "function" ? t(e) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, e, r, s, i) {
    const a = new Ze(t, e, r, s);
    if (i)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[rt] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, P);
  }
  static [tt](t) {
    return Ze[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let V = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: n,
    type: t,
    value: e,
    originalValue: r
  }) => {
    const s = r != null && r !== e ? ` (cast from the value \`${q(r, !0)}\`).` : ".";
    return t !== "mixed" ? `${n} must be a \`${t}\` type, but the final value was: \`${q(e, !0)}\`` + s : `${n} must match the configured type. The validated value was: \`${q(e, !0)}\`` + s;
  }
}, I = {
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
}, er = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Oe = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, tr = {
  isValue: "${path} field must be ${value}"
}, me = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, rr = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, nr = {
  notType: (n) => {
    const {
      path: t,
      value: e,
      spec: r
    } = n, s = r.types.length;
    if (Array.isArray(e)) {
      if (e.length < s) return `${t} tuple value has too few items, expected a length of ${s} but got ${e.length} for value: \`${q(e, !0)}\``;
      if (e.length > s) return `${t} tuple value has too many items, expected a length of ${s} but got ${e.length} for value: \`${q(e, !0)}\``;
    }
    return P.formatError(V.notType, n);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: V,
  string: I,
  number: er,
  date: Oe,
  object: me,
  array: rr,
  boolean: tr,
  tuple: nr
});
const Ce = (n) => n && n.__isYupSchema__;
class ge {
  static fromOptions(t, e) {
    if (!e.then && !e.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: s,
      otherwise: i
    } = e, a = typeof r == "function" ? r : (...o) => o.every((u) => u === r);
    return new ge(t, (o, u) => {
      var d;
      let f = a(...o) ? s : i;
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
    )), s = this.fn(r, t, e);
    if (s === void 0 || // @ts-ignore this can be base
    s === t)
      return t;
    if (!Ce(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(e);
  }
}
const pe = {
  context: "$",
  value: "."
};
class J {
  constructor(t, e = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === pe.context, this.isValue = this.key[0] === pe.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? pe.context : this.isValue ? pe.value : "";
    this.path = this.key.slice(r.length), this.getter = this.path && B.getter(this.path, !0), this.map = e.map;
  }
  getValue(t, e, r) {
    let s = this.isContext ? r : this.isValue ? t : e;
    return this.getter && (s = this.getter(s || {})), this.map && (s = this.map(s)), s;
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
J.prototype.__isYupRef = !0;
const G = (n) => n == null;
function Q(n) {
  function t({
    value: e,
    path: r = "",
    options: s,
    originalValue: i,
    schema: a
  }, o, u) {
    const {
      name: d,
      test: f,
      params: p,
      message: m,
      skipAbsent: b
    } = n;
    let {
      parent: g,
      context: _,
      abortEarly: v = a.spec.abortEarly,
      disableStackTrace: h = a.spec.disableStackTrace
    } = s;
    const x = {
      value: e,
      parent: g,
      context: _
    };
    function E(O = {}) {
      const M = nt(Object.assign({
        value: e,
        originalValue: i,
        label: a.spec.label,
        path: O.path || r,
        spec: a.spec,
        disableStackTrace: O.disableStackTrace || h
      }, p, O.params), x), k = new P(P.formatError(O.message || m, M), e, M.path, O.type || d, M.disableStackTrace);
      return k.params = M, k;
    }
    const F = v ? o : u;
    let T = {
      path: r,
      parent: g,
      type: d,
      from: s.from,
      createError: E,
      resolve(O) {
        return st(O, x);
      },
      options: s,
      originalValue: i,
      schema: a
    };
    const S = (O) => {
      P.isError(O) ? F(O) : O ? u(null) : F(E());
    }, w = (O) => {
      P.isError(O) ? F(O) : o(O);
    };
    if (b && G(e))
      return S(!0);
    let $;
    try {
      var z;
      if ($ = f.call(T, e, T), typeof ((z = $) == null ? void 0 : z.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve($).then(S, w);
      }
    } catch (O) {
      w(O);
      return;
    }
    S($);
  }
  return t.OPTIONS = n, t;
}
function nt(n, t) {
  if (!n) return n;
  for (const e of Object.keys(n))
    n[e] = st(n[e], t);
  return n;
}
function st(n, t) {
  return J.isRef(n) ? n.getValue(t.value, t.parent, t.context) : n;
}
function sr(n, t, e, r = e) {
  let s, i, a;
  return t ? (B.forEach(t, (o, u, d) => {
    let f = u ? o.slice(1, o.length - 1) : o;
    n = n.resolve({
      context: r,
      parent: s,
      value: e
    });
    let p = n.type === "tuple", m = d ? parseInt(f, 10) : 0;
    if (n.innerType || p) {
      if (p && !d) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (e && m >= e.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);
      s = e, e = e && e[m], n = p ? n.spec.types[m] : n.innerType;
    }
    if (!d) {
      if (!n.fields || !n.fields[f]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${n.type}")`);
      s = e, e = e && e[f], n = n.fields[f];
    }
    i = f, a = u ? "[" + o + "]" : "." + o;
  }), {
    schema: n,
    parent: s,
    parentPath: i
  }) : {
    parent: s,
    parentPath: t,
    schema: n
  };
}
class ye extends Set {
  describe() {
    const t = [];
    for (const e of this.values())
      t.push(J.isRef(e) ? e.describe() : e);
    return t;
  }
  resolveAll(t) {
    let e = [];
    for (const r of this.values())
      e.push(t(r));
    return e;
  }
  clone() {
    return new ye(this.values());
  }
  merge(t, e) {
    const r = this.clone();
    return t.forEach((s) => r.add(s)), e.forEach((s) => r.delete(s)), r;
  }
}
function ee(n, t = /* @__PURE__ */ new Map()) {
  if (Ce(n) || !n || typeof n != "object") return n;
  if (t.has(n)) return t.get(n);
  let e;
  if (n instanceof Date)
    e = new Date(n.getTime()), t.set(n, e);
  else if (n instanceof RegExp)
    e = new RegExp(n), t.set(n, e);
  else if (Array.isArray(n)) {
    e = new Array(n.length), t.set(n, e);
    for (let r = 0; r < n.length; r++) e[r] = ee(n[r], t);
  } else if (n instanceof Map) {
    e = /* @__PURE__ */ new Map(), t.set(n, e);
    for (const [r, s] of n.entries()) e.set(r, ee(s, t));
  } else if (n instanceof Set) {
    e = /* @__PURE__ */ new Set(), t.set(n, e);
    for (const r of n) e.add(ee(r, t));
  } else if (n instanceof Object) {
    e = {}, t.set(n, e);
    for (const [r, s] of Object.entries(n)) e[r] = ee(s, t);
  } else
    throw Error(`Unable to clone ${n}`);
  return e;
}
function ir(n) {
  if (!(n != null && n.length))
    return;
  const t = [];
  let e = "", r = !1, s = !1;
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    if (a === "[" && !s) {
      e && (t.push(...e.split(".").filter(Boolean)), e = ""), r = !0;
      continue;
    }
    if (a === "]" && !s) {
      e && (/^\d+$/.test(e) ? t.push(e) : t.push(e.replace(/^"|"$/g, "")), e = ""), r = !1;
      continue;
    }
    if (a === '"') {
      s = !s;
      continue;
    }
    if (a === "." && !r && !s) {
      e && (t.push(e), e = "");
      continue;
    }
    e += a;
  }
  return e && t.push(...e.split(".").filter(Boolean)), t;
}
function ar(n, t) {
  const e = t ? `${t}.${n.path}` : n.path;
  return n.errors.map((r) => ({
    message: r,
    path: ir(e)
  }));
}
function it(n, t) {
  var e;
  if (!((e = n.inner) != null && e.length) && n.errors.length)
    return ar(n, t);
  const r = t ? `${t}.${n.path}` : n.path;
  return n.inner.flatMap((s) => it(s, r));
}
class L {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new ye(), this._blacklist = new ye(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(V.notType);
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
    return e.type = this.type, e._typeCheck = this._typeCheck, e._whitelist = this._whitelist.clone(), e._blacklist = this._blacklist.clone(), e.internalTests = Object.assign({}, this.internalTests), e.exclusiveTests = Object.assign({}, this.exclusiveTests), e.deps = [...this.deps], e.conditions = [...this.conditions], e.tests = [...this.tests], e.transforms = [...this.transforms], e.spec = ee(Object.assign({}, this.spec, t)), e;
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
    const s = Object.assign({}, e.spec, r.spec);
    return r.spec = s, r.internalTests = Object.assign({}, e.internalTests, r.internalTests), r._whitelist = e._whitelist.merge(t._whitelist, t._blacklist), r._blacklist = e._blacklist.merge(t._blacklist, t._whitelist), r.tests = e.tests, r.exclusiveTests = e.exclusiveTests, r.withMutation((i) => {
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
      e = e.clone(), e.conditions = [], e = r.reduce((s, i) => i.resolve(s, t), e), e = e.resolve(t);
    }
    return e;
  }
  resolveOptions(t) {
    var e, r, s, i;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (e = t.strict) != null ? e : this.spec.strict,
      abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
      recursive: (s = t.recursive) != null ? s : this.spec.recursive,
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
    })), s = e.assert === "ignore-optionality", i = r._cast(t, e);
    if (e.assert !== !1 && !r.isType(i)) {
      if (s && G(i))
        return i;
      let a = q(t), o = q(i);
      throw new TypeError(`The value of ${e.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
` + (o !== a ? `result of cast: ${o}` : ""));
    }
    return i;
  }
  _cast(t, e) {
    let r = t === void 0 ? t : this.transforms.reduce((s, i) => i.call(this, s, t, this, e), t);
    return r === void 0 && (r = this.getDefault(e)), r;
  }
  _validate(t, e = {}, r, s) {
    let {
      path: i,
      originalValue: a = t,
      strict: o = this.spec.strict
    } = e, u = t;
    o || (u = this._cast(u, Object.assign({
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
        return s(f, u);
      this.runTests({
        path: i,
        value: u,
        originalValue: a,
        options: e,
        tests: this.tests
      }, r, s);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, e, r) {
    let s = !1, {
      tests: i,
      value: a,
      originalValue: o,
      path: u,
      options: d
    } = t, f = (_) => {
      s || (s = !0, e(_, a));
    }, p = (_) => {
      s || (s = !0, r(_, a));
    }, m = i.length, b = [];
    if (!m) return p([]);
    let g = {
      value: a,
      originalValue: o,
      path: u,
      options: d,
      schema: this
    };
    for (let _ = 0; _ < i.length; _++) {
      const v = i[_];
      v(g, f, function(x) {
        x && (Array.isArray(x) ? b.push(...x) : b.push(x)), --m <= 0 && p(b);
      });
    }
  }
  asNestedTest({
    key: t,
    index: e,
    parent: r,
    parentPath: s,
    originalParent: i,
    options: a
  }) {
    const o = t ?? e;
    if (o == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const u = typeof o == "number";
    let d = r[o];
    const f = Object.assign({}, a, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: r,
      value: d,
      originalValue: i[o],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [u ? "index" : "key"]: o,
      path: u || o.includes(".") ? `${s || ""}[${u ? o : `"${o}"`}]` : (s ? `${s}.` : "") + t
    });
    return (p, m, b) => this.resolve(f)._validate(d, f, m, b);
  }
  validate(t, e) {
    var r;
    let s = this.resolve(Object.assign({}, e, {
      value: t
    })), i = (r = e?.disableStackTrace) != null ? r : s.spec.disableStackTrace;
    return new Promise((a, o) => s._validate(t, e, (u, d) => {
      P.isError(u) && (u.value = d), o(u);
    }, (u, d) => {
      u.length ? o(new P(u, d, void 0, void 0, i)) : a(d);
    }));
  }
  validateSync(t, e) {
    var r;
    let s = this.resolve(Object.assign({}, e, {
      value: t
    })), i, a = (r = e?.disableStackTrace) != null ? r : s.spec.disableStackTrace;
    return s._validate(t, Object.assign({}, e, {
      sync: !0
    }), (o, u) => {
      throw P.isError(o) && (o.value = u), o;
    }, (o, u) => {
      if (o.length) throw new P(o, t, void 0, void 0, a);
      i = u;
    }), i;
  }
  isValid(t, e) {
    return this.validate(t, e).then(() => !0, (r) => {
      if (P.isError(r)) return !1;
      throw r;
    });
  }
  isValidSync(t, e) {
    try {
      return this.validateSync(t, e), !0;
    } catch (r) {
      if (P.isError(r)) return !1;
      throw r;
    }
  }
  _getDefault(t) {
    let e = this.spec.default;
    return e == null ? e : typeof e == "function" ? e.call(this, t) : ee(e);
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
    return r.internalTests.nullable = Q({
      message: e,
      name: "nullable",
      test(s) {
        return s === null ? this.schema.spec.nullable : !0;
      }
    }), r;
  }
  optionality(t, e) {
    const r = this.clone({
      optional: t
    });
    return r.internalTests.optionality = Q({
      message: e,
      name: "optionality",
      test(s) {
        return s === void 0 ? this.schema.spec.optional : !0;
      }
    }), r;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = V.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = V.notNull) {
    return this.nullability(!1, t);
  }
  required(t = V.required) {
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
    }, e.message === void 0 && (e.message = V.default), typeof e.test != "function") throw new TypeError("`test` is a required parameters");
    let r = this.clone(), s = Q(e), i = e.exclusive || e.name && r.exclusiveTests[e.name] === !0;
    if (e.exclusive && !e.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return e.name && (r.exclusiveTests[e.name] = !!e.exclusive), r.tests = r.tests.filter((a) => !(a.OPTIONS.name === e.name && (i || a.OPTIONS.test === s.OPTIONS.test))), r.tests.push(s), r;
  }
  when(t, e) {
    !Array.isArray(t) && typeof t != "string" && (e = t, t = ".");
    let r = this.clone(), s = Ke(t).map((i) => new J(i));
    return s.forEach((i) => {
      i.isSibling && r.deps.push(i.key);
    }), r.conditions.push(typeof e == "function" ? new ge(s, e) : ge.fromOptions(s, e)), r;
  }
  typeError(t) {
    let e = this.clone();
    return e.internalTests.typeError = Q({
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
  oneOf(t, e = V.oneOf) {
    let r = this.clone();
    return t.forEach((s) => {
      r._whitelist.add(s), r._blacklist.delete(s);
    }), r.internalTests.whiteList = Q({
      message: e,
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
    }), r;
  }
  notOneOf(t, e = V.notOneOf) {
    let r = this.clone();
    return t.forEach((s) => {
      r._blacklist.add(s), r._whitelist.delete(s);
    }), r.internalTests.blacklist = Q({
      message: e,
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
      meta: s,
      optional: i,
      nullable: a
    } = e.spec;
    return {
      meta: s,
      label: r,
      optional: i,
      nullable: a,
      default: e.getDefault(t),
      type: e.type,
      oneOf: e._whitelist.describe(),
      notOneOf: e._blacklist.describe(),
      tests: e.tests.filter((u, d, f) => f.findIndex((p) => p.OPTIONS.name === u.OPTIONS.name) === d).map((u) => {
        const d = u.OPTIONS.params && t ? nt(Object.assign({}, u.OPTIONS.params), t) : u.OPTIONS.params;
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
        } catch (s) {
          if (s instanceof P)
            return {
              issues: it(s)
            };
          throw s;
        }
      }
    };
  }
}
L.prototype.__isYupSchema__ = !0;
for (const n of ["validate", "validateSync"]) L.prototype[`${n}At`] = function(t, e, r = {}) {
  const {
    parent: s,
    parentPath: i,
    schema: a
  } = sr(this, t, e, r.context);
  return a[n](s && s[i], Object.assign({}, r, {
    parent: s,
    path: t
  }));
};
for (const n of ["equals", "is"]) L.prototype[n] = L.prototype.oneOf;
for (const n of ["not", "nope"]) L.prototype[n] = L.prototype.notOneOf;
const or = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function lr(n) {
  const t = ke(n);
  if (!t) return Date.parse ? Date.parse(n) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let e = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (e = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (e = 0 - e)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + e, t.second, t.millisecond);
}
function ke(n) {
  var t, e;
  const r = or.exec(n);
  return r ? {
    year: U(r[1]),
    month: U(r[2], 1) - 1,
    day: U(r[3], 1),
    hour: U(r[4]),
    minute: U(r[5]),
    second: U(r[6]),
    millisecond: r[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      U(r[7].substring(0, 3))
    ) : 0,
    precision: (t = (e = r[7]) == null ? void 0 : e.length) != null ? t : void 0,
    z: r[8] || void 0,
    plusMinus: r[9] || void 0,
    hourOffset: U(r[10]),
    minuteOffset: U(r[11])
  } : null;
}
function U(n, t = 0) {
  return Number(n) || t;
}
let ur = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), cr = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), fr = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, dr = "^\\d{4}-\\d{2}-\\d{2}", hr = "\\d{2}:\\d{2}:\\d{2}", pr = "(([+-]\\d{2}(:?\\d{2})?)|Z)", mr = new RegExp(`${dr}T${hr}(\\.\\d+)?${pr}$`), xr = (n) => G(n) || n === n.trim(), br = {}.toString();
function xe() {
  return new at();
}
class at extends L {
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
        return r === br ? t : r;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((e) => e.test({
      message: t || V.required,
      name: "required",
      skipAbsent: !0,
      test: (r) => !!r.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((e) => e.OPTIONS.name !== "required"), t));
  }
  length(t, e = I.length) {
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
  min(t, e = I.min) {
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
  max(t, e = I.max) {
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
    let r = !1, s, i;
    return e && (typeof e == "object" ? {
      excludeEmptyString: r = !1,
      message: s,
      name: i
    } = e : s = e), this.test({
      name: i || "matches",
      message: s || I.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (a) => a === "" && r || a.search(t) !== -1
    });
  }
  email(t = I.email) {
    return this.matches(ur, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = I.url) {
    return this.matches(cr, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = I.uuid) {
    return this.matches(fr, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let e = "", r, s;
    return t && (typeof t == "object" ? {
      message: e = "",
      allowOffset: r = !1,
      precision: s = void 0
    } = t : e = t), this.matches(mr, {
      name: "datetime",
      message: e || I.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: e || I.datetime_offset,
      params: {
        allowOffset: r
      },
      skipAbsent: !0,
      test: (i) => {
        if (!i || r) return !0;
        const a = ke(i);
        return a ? !!a.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: e || I.datetime_precision,
      params: {
        precision: s
      },
      skipAbsent: !0,
      test: (i) => {
        if (!i || s == null) return !0;
        const a = ke(i);
        return a ? a.precision === s : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = I.trim) {
    return this.transform((e) => e != null ? e.trim() : e).test({
      message: t,
      name: "trim",
      test: xr
    });
  }
  lowercase(t = I.lowercase) {
    return this.transform((e) => G(e) ? e : e.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (e) => G(e) || e === e.toLowerCase()
    });
  }
  uppercase(t = I.uppercase) {
    return this.transform((e) => G(e) ? e : e.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (e) => G(e) || e === e.toUpperCase()
    });
  }
}
xe.prototype = at.prototype;
let gr = /* @__PURE__ */ new Date(""), yr = (n) => Object.prototype.toString.call(n) === "[object Date]";
class Ae extends L {
  constructor() {
    super({
      type: "date",
      check(t) {
        return yr(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, e) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = lr(t), isNaN(t) ? Ae.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, e) {
    let r;
    if (J.isRef(t))
      r = t;
    else {
      let s = this.cast(t);
      if (!this._typeCheck(s)) throw new TypeError(`\`${e}\` must be a Date or a value that can be \`cast()\` to a Date`);
      r = s;
    }
    return r;
  }
  min(t, e = Oe.min) {
    let r = this.prepareParam(t, "min");
    return this.test({
      message: e,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(s) {
        return s >= this.resolve(r);
      }
    });
  }
  max(t, e = Oe.max) {
    let r = this.prepareParam(t, "max");
    return this.test({
      message: e,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(s) {
        return s <= this.resolve(r);
      }
    });
  }
}
Ae.INVALID_DATE = gr;
function vr(n, t = []) {
  let e = [], r = /* @__PURE__ */ new Set(), s = new Set(t.map(([a, o]) => `${a}-${o}`));
  function i(a, o) {
    let u = B.split(a)[0];
    r.add(u), s.has(`${o}-${u}`) || e.push([o, u]);
  }
  for (const a of Object.keys(n)) {
    let o = n[a];
    r.add(a), J.isRef(o) && o.isSibling ? i(o.path, a) : Ce(o) && "deps" in o && o.deps.forEach((u) => i(u, a));
  }
  return Wt.array(Array.from(r), e).reverse();
}
function We(n, t) {
  let e = 1 / 0;
  return n.some((r, s) => {
    var i;
    if ((i = t.path) != null && i.includes(r))
      return e = s, !0;
  }), e;
}
function ot(n) {
  return (t, e) => We(n, t) - We(n, e);
}
const wr = (n, t, e) => {
  if (typeof n != "string")
    return n;
  let r = n;
  try {
    r = JSON.parse(n);
  } catch {
  }
  return e.isType(r) ? r : n;
};
function be(n) {
  if ("fields" in n) {
    const t = {};
    for (const [e, r] of Object.entries(n.fields))
      t[e] = be(r);
    return n.setFields(t);
  }
  if (n.type === "array") {
    const t = n.optional();
    return t.innerType && (t.innerType = be(t.innerType)), t;
  }
  return n.type === "tuple" ? n.optional().clone({
    types: n.spec.types.map(be)
  }) : "optional" in n ? n.optional() : n;
}
const Er = (n, t) => {
  const e = [...B.normalizePath(t)];
  if (e.length === 1) return e[0] in n;
  let r = e.pop(), s = B.getter(B.join(e), !0)(n);
  return !!(s && r in s);
};
let Ge = (n) => Object.prototype.toString.call(n) === "[object Object]";
function Be(n, t) {
  let e = Object.keys(n.fields);
  return Object.keys(t).filter((r) => e.indexOf(r) === -1);
}
const _r = ot([]);
function lt(n) {
  return new ut(n);
}
class ut extends L {
  constructor(t) {
    super({
      type: "object",
      check(e) {
        return Ge(e) || typeof e == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = _r, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, e = {}) {
    var r;
    let s = super._cast(t, e);
    if (s === void 0) return this.getDefault(e);
    if (!this._typeCheck(s)) return s;
    let i = this.fields, a = (r = e.stripUnknown) != null ? r : this.spec.noUnknown, o = [].concat(this._nodes, Object.keys(s).filter((p) => !this._nodes.includes(p))), u = {}, d = Object.assign({}, e, {
      parent: u,
      __validating: e.__validating || !1
    }), f = !1;
    for (const p of o) {
      let m = i[p], b = p in s, g = s[p];
      if (m) {
        let _;
        d.path = (e.path ? `${e.path}.` : "") + p, m = m.resolve({
          value: g,
          context: e.context,
          parent: u
        });
        let v = m instanceof L ? m.spec : void 0, h = v?.strict;
        if (v != null && v.strip) {
          f = f || p in s;
          continue;
        }
        _ = !e.__validating || !h ? m.cast(g, d) : g, _ !== void 0 && (u[p] = _);
      } else b && !a && (u[p] = g);
      (b !== p in u || u[p] !== g) && (f = !0);
    }
    return f ? u : s;
  }
  _validate(t, e = {}, r, s) {
    let {
      from: i = [],
      originalValue: a = t,
      recursive: o = this.spec.recursive
    } = e;
    e.from = [{
      schema: this,
      value: a
    }, ...i], e.__validating = !0, e.originalValue = a, super._validate(t, e, r, (u, d) => {
      if (!o || !Ge(d)) {
        s(u, d);
        return;
      }
      a = a || d;
      let f = [];
      for (let p of this._nodes) {
        let m = this.fields[p];
        !m || J.isRef(m) || f.push(m.asNestedTest({
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
        s(p.sort(this._sortErrors).concat(u), d);
      });
    });
  }
  clone(t) {
    const e = super.clone(t);
    return e.fields = Object.assign({}, this.fields), e._nodes = this._nodes, e._excludedEdges = this._excludedEdges, e._sortErrors = this._sortErrors, e;
  }
  concat(t) {
    let e = super.concat(t), r = e.fields;
    for (let [s, i] of Object.entries(this.fields)) {
      const a = r[s];
      r[s] = a === void 0 ? i : a;
    }
    return e.withMutation((s) => (
      // XXX: excludes here is wrong
      s.setFields(r, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let e = {};
    return this._nodes.forEach((r) => {
      var s;
      const i = this.fields[r];
      let a = t;
      (s = a) != null && s.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[r]
      })), e[r] = i && "getDefault" in i ? i.getDefault(a) : void 0;
    }), e;
  }
  setFields(t, e) {
    let r = this.clone();
    return r.fields = t, r._nodes = vr(t, e), r._sortErrors = ot(Object.keys(t)), e && (r._excludedEdges = e), r;
  }
  shape(t, e = []) {
    return this.clone().withMutation((r) => {
      let s = r._excludedEdges;
      return e.length && (Array.isArray(e[0]) || (e = [e]), s = [...r._excludedEdges, ...e]), r.setFields(Object.assign(r.fields, t), s);
    });
  }
  partial() {
    const t = {};
    for (const [e, r] of Object.entries(this.fields))
      t[e] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
    return this.setFields(t);
  }
  deepPartial() {
    return be(this);
  }
  pick(t) {
    const e = {};
    for (const r of t)
      this.fields[r] && (e[r] = this.fields[r]);
    return this.setFields(e, this._excludedEdges.filter(([r, s]) => t.includes(r) && t.includes(s)));
  }
  omit(t) {
    const e = [];
    for (const r of Object.keys(this.fields))
      t.includes(r) || e.push(r);
    return this.pick(e);
  }
  from(t, e, r) {
    let s = B.getter(t, !0);
    return this.transform((i) => {
      if (!i) return i;
      let a = i;
      return Er(i, t) && (a = Object.assign({}, i), r || delete a[t], a[e] = s(i)), a;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(wr);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || me.exact,
      test(e) {
        if (e == null) return !0;
        const r = Be(this.schema, e);
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
  noUnknown(t = !0, e = me.noUnknown) {
    typeof t != "boolean" && (e = t, t = !0);
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: e,
      test(s) {
        if (s == null) return !0;
        const i = Be(this.schema, s);
        return !t || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return r.spec.noUnknown = t, r;
  }
  unknown(t = !0, e = me.noUnknown) {
    return this.noUnknown(!t, e);
  }
  transformKeys(t) {
    return this.transform((e) => {
      if (!e) return e;
      const r = {};
      for (const s of Object.keys(e)) r[t(s)] = e[s];
      return r;
    });
  }
  camelCase() {
    return this.transformKeys(je.camelCase);
  }
  snakeCase() {
    return this.transformKeys(je.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => je.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const e = (t ? this.resolve(t) : this).clone(), r = super.describe(t);
    r.fields = {};
    for (const [i, a] of Object.entries(e.fields)) {
      var s;
      let o = t;
      (s = o) != null && s.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[i]
      })), r.fields[i] = a.describe(o);
    }
    return r;
  }
}
lt.prototype = ut.prototype;
const Rr = ({
  onSubmit: n,
  isSubmitting: t = !1,
  error: e,
  logo: r,
  title: s = "Sign in to your account",
  loginField: i = { name: "email", label: "Email Address", autoComplete: "email" }
}) => {
  const a = lt({
    [i.name]: xe().required(`${i.label} is required`).test(
      "is-email-if-required",
      "Enter a valid email",
      (o) => i.name === "email" ? xe().email().isValidSync(o) : !0
    ),
    password: xe().required("Password is required")
  });
  return /* @__PURE__ */ c.jsx(wt, { component: "main", maxWidth: "xs", children: /* @__PURE__ */ c.jsxs(
    we,
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
        /* @__PURE__ */ c.jsx(Y, { component: "h1", variant: "h5", children: s }),
        e && /* @__PURE__ */ c.jsx(Fe, { severity: "error", sx: { width: "100%", mt: 2 }, children: e.message }),
        /* @__PURE__ */ c.jsx(N, { sx: { mt: 1, width: "100%" }, children: /* @__PURE__ */ c.jsxs(
          Qe,
          {
            onSubmit: n,
            validationSchema: a,
            noValidate: !0,
            children: [
              /* @__PURE__ */ c.jsx(
                Ve,
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
              /* @__PURE__ */ c.jsx(
                Ve,
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
                ue,
                {
                  type: "submit",
                  fullWidth: !0,
                  variant: "contained",
                  sx: { mt: 3, mb: 2 },
                  disabled: t,
                  children: t ? /* @__PURE__ */ c.jsx(le, { size: 24 }) : "Sign In"
                }
              )
            ]
          }
        ) })
      ]
    }
  ) });
}, K = 240, Dr = ({
  navItems: n = [],
  title: t = "Dashboard",
  drawerHeader: e,
  headerActions: r,
  children: s
}) => {
  const [i, a] = A(!1), o = () => {
    a(!i);
  }, u = /* @__PURE__ */ c.jsxs(N, { children: [
    e ? /* @__PURE__ */ c.jsx(te, { sx: { justifyContent: "center" }, children: e }) : null,
    /* @__PURE__ */ c.jsx(Et, { children: n.map((d, f) => {
      const p = d.component && d.component.displayName === "NavLink" ? { to: d.path } : { href: d.path };
      return /* @__PURE__ */ c.jsx(_t, { disablePadding: !0, children: /* @__PURE__ */ c.jsxs(St, { component: d.component || "a", ...p, children: [
        d.icon && /* @__PURE__ */ c.jsx(Tt, { children: d.icon }),
        /* @__PURE__ */ c.jsx(jt, { primary: d.text })
      ] }) }, f);
    }) })
  ] });
  return /* @__PURE__ */ c.jsxs(N, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ c.jsx(Ft, {}),
    /* @__PURE__ */ c.jsx(
      Ot,
      {
        position: "fixed",
        sx: {
          width: { sm: `calc(100% - ${K}px)` },
          ml: { sm: `${K}px` }
        },
        children: /* @__PURE__ */ c.jsxs(te, { children: [
          /* @__PURE__ */ c.jsx(
            kt,
            {
              color: "inherit",
              "aria-label": "open drawer",
              edge: "start",
              onClick: o,
              sx: { mr: 2, display: { sm: "none" } },
              children: /* @__PURE__ */ c.jsx(Rt, {})
            }
          ),
          /* @__PURE__ */ c.jsx(Y, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1, color: "primary.contrastText" }, children: t }),
          r
        ] })
      }
    ),
    /* @__PURE__ */ c.jsxs(
      N,
      {
        component: "nav",
        sx: { width: { sm: K }, flexShrink: { sm: 0 } },
        children: [
          /* @__PURE__ */ c.jsx(
            Ne,
            {
              variant: "temporary",
              open: i,
              onClose: o,
              ModalProps: { keepMounted: !0 },
              sx: {
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: K }
              },
              children: u
            }
          ),
          /* @__PURE__ */ c.jsx(
            Ne,
            {
              variant: "permanent",
              sx: {
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: K }
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
          width: { sm: `calc(100% - ${K}px)` },
          minHeight: "100vh",
          backgroundColor: (d) => d.palette.grey[100]
        },
        children: [
          /* @__PURE__ */ c.jsx(te, {}),
          s
        ]
      }
    )
  ] });
};
export {
  kr as AutocompleteField,
  Dr as DashboardLayout,
  Vt as DataTable,
  Or as FileUploadField,
  Qe as Form,
  ce as FormContext,
  Rr as LoginPage,
  Ar as ResourceFormPage,
  Cr as ResourceListPage,
  Fr as StatCard,
  $r as SwitchField,
  Ve as TextField
};
