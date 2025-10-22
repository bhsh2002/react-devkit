import ft, { createContext as dt, useState as C, useCallback as Je, useContext as we, useEffect as ne } from "react";
import { Paper as Ee, Box as N, Typography as W, Toolbar as re, TableContainer as ht, Table as pt, TableHead as mt, TableRow as ie, TableCell as ae, TableSortLabel as xt, TableBody as bt, TablePagination as gt, CircularProgress as ce, TextField as Ae, Avatar as yt, Button as ue, Autocomplete as vt, FormControlLabel as Xe, Switch as He, Alert as ke, Container as wt, List as Et, ListItem as _t, ListItemButton as St, ListItemIcon as Tt, ListItemText as jt, CssBaseline as Ft, AppBar as Ot, IconButton as kt, Drawer as Ne } from "@mui/material";
import { ImageNotSupported as $t, Add as Ct, Search as At, Menu as Rt } from "@mui/icons-material";
function Dt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var he = { exports: {} }, oe = {};
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
  if (Ie) return oe;
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
  return oe.Fragment = t, oe.jsx = e, oe.jsxs = e, oe;
}
var le = {};
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
        case S:
          return "Fragment";
        case x:
          return "Profiler";
        case h:
          return "StrictMode";
        case w:
          return "Suspense";
        case E:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case v:
            return "Portal";
          case F:
            return l.displayName || "Context";
          case _:
            return (l._context.displayName || "Context") + ".Consumer";
          case T:
            var y = l.render;
            return l = l.displayName, l || (l = y.displayName || y.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case j:
            return y = l.displayName || null, y !== null ? y : n(l.type) || "Memo";
          case k:
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
        var $ = y.error, A = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return $.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(l);
      }
    }
    function r(l) {
      if (l === S) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === k)
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
      if (q.call(l, "key")) {
        var y = Object.getOwnPropertyDescriptor(l, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function o(l, y) {
      function $() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: $,
        configurable: !0
      });
    }
    function c() {
      var l = n(this.type);
      return X[l] || (X[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function f(l, y, $, A, de, Se) {
      var R = $.ref;
      return l = {
        $$typeof: g,
        type: l,
        key: y,
        props: $,
        _owner: A
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: c
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
        value: de
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Se
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function d(l, y, $, A, de, Se) {
      var R = y.children;
      if (R !== void 0)
        if (A)
          if (_e(R)) {
            for (A = 0; A < R.length; A++)
              p(R[A]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(R);
      if (q.call(y, "key")) {
        R = n(l);
        var Q = Object.keys(y).filter(function(ct) {
          return ct !== "key";
        });
        A = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", Pe[R + A] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          R,
          Q,
          R
        ), Pe[R + A] = !0);
      }
      if (R = null, $ !== void 0 && (e($), R = "" + $), a(y) && (e(y.key), R = "" + y.key), "key" in y) {
        $ = {};
        for (var Te in y)
          Te !== "key" && ($[Te] = y[Te]);
      } else $ = y;
      return R && o(
        $,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), f(
        l,
        R,
        $,
        s(),
        de,
        Se
      );
    }
    function p(l) {
      m(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === k && (l._payload.status === "fulfilled" ? m(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function m(l) {
      return typeof l == "object" && l !== null && l.$$typeof === g;
    }
    var b = ft, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), F = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), M = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, _e = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var Y, X = {}, H = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), se = D(r(i)), Pe = {};
    le.Fragment = S, le.jsx = function(l, y, $) {
      var A = 1e4 > M.recentlyCreatedOwnerStacks++;
      return d(
        l,
        y,
        $,
        !1,
        A ? Error("react-stack-top-frame") : H,
        A ? D(r(l)) : se
      );
    }, le.jsxs = function(l, y, $) {
      var A = 1e4 > M.recentlyCreatedOwnerStacks++;
      return d(
        l,
        y,
        $,
        !0,
        A ? Error("react-stack-top-frame") : H,
        A ? D(r(l)) : se
      );
    };
  })()), le;
}
var Me;
function It() {
  return Me || (Me = 1, process.env.NODE_ENV === "production" ? he.exports = Pt() : he.exports = Nt()), he.exports;
}
var u = It();
const $r = ({ icon: n, title: t, value: e, color: r, sx: s, onClick: i }) => /* @__PURE__ */ u.jsxs(
  Ee,
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
      /* @__PURE__ */ u.jsx(N, { sx: { color: r || "primary.main", fontSize: 40 }, "data-testid": "statcard-icon", children: n }),
      /* @__PURE__ */ u.jsxs(N, { children: [
        /* @__PURE__ */ u.jsx(W, { color: "text.secondary", children: t }),
        /* @__PURE__ */ u.jsx(W, { variant: "h5", sx: { fontWeight: "bold" }, children: e })
      ] })
    ]
  }
), zt = () => /* @__PURE__ */ u.jsx(N, { sx: { p: 4, textAlign: "center" }, children: /* @__PURE__ */ u.jsx(W, { color: "text.secondary", children: "No rows" }) }), Mt = () => /* @__PURE__ */ u.jsx(N, { sx: { display: "flex", justifyContent: "center", alignItems: "center", p: 4 }, children: /* @__PURE__ */ u.jsx(ce, {}) }), Vt = ({
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
  onPageChange: c = () => {
  },
  pageSize: f = 10,
  onPageSizeChange: d = () => {
  },
  pageSizeOptions: p = [5, 10, 25, 50],
  // Sorting
  sorting: m = !1,
  sortModel: b = [],
  onSortModelChange: g = () => {
  },
  // Customization
  slots: v = {},
  slotProps: S = {},
  sx: h
}) => {
  const {
    toolbar: x,
    noRowsOverlay: _ = zt,
    loadingOverlay: F = Mt
  } = v, T = (E) => {
    if (!m) return;
    const j = b.find((z) => z.field === E);
    let k;
    j ? j.sort === "asc" ? k = [{ field: E, sort: "desc" }] : k = [] : k = [{ field: E, sort: "asc" }], g(k);
  }, w = b.length > 0 ? b[0] : null;
  return /* @__PURE__ */ u.jsxs(Ee, { sx: h, children: [
    x && /* @__PURE__ */ u.jsx(re, { children: /* @__PURE__ */ u.jsx(x, { ...S.toolbar || {} }) }),
    /* @__PURE__ */ u.jsx(ht, { children: /* @__PURE__ */ u.jsxs(pt, { stickyHeader: !0, children: [
      /* @__PURE__ */ u.jsx(mt, { children: /* @__PURE__ */ u.jsx(ie, { children: t.map((E) => /* @__PURE__ */ u.jsx(
        ae,
        {
          align: E.align || "inherit",
          width: E.width,
          sortDirection: w?.field === E.field ? w.sort : !1,
          children: E.sortable && m ? /* @__PURE__ */ u.jsx(
            xt,
            {
              active: w?.field === E.field,
              direction: w?.field === E.field ? w.sort : "asc",
              onClick: () => T(E.field),
              children: E.headerName
            }
          ) : E.headerName
        },
        E.field
      )) }) }),
      /* @__PURE__ */ u.jsx(bt, { children: r ? /* @__PURE__ */ u.jsx(ie, { children: /* @__PURE__ */ u.jsx(ae, { colSpan: t.length, sx: { border: "none" }, children: /* @__PURE__ */ u.jsx(F, { ...S.loadingOverlay || {} }) }) }) : s ? /* @__PURE__ */ u.jsx(ie, { children: /* @__PURE__ */ u.jsx(ae, { colSpan: t.length, sx: { border: "none", textAlign: "center" }, children: /* @__PURE__ */ u.jsx(W, { color: "error", children: s.message || "An error occurred." }) }) }) : n.length === 0 ? /* @__PURE__ */ u.jsx(ie, { children: /* @__PURE__ */ u.jsx(ae, { colSpan: t.length, sx: { border: "none" }, children: /* @__PURE__ */ u.jsx(_, { ...S.noRowsOverlay || {} }) }) }) : n.map((E) => /* @__PURE__ */ u.jsx(ie, { hover: !0, children: t.map((j) => {
        const k = j.field.split(".").reduce((z, O) => z?.[O], E);
        return /* @__PURE__ */ u.jsx(ae, { align: j.align || "inherit", children: j.renderCell ? j.renderCell({ value: k, row: E, id: e(E) }) : k }, j.field);
      }) }, e(E))) })
    ] }) }),
    i && !s && /* @__PURE__ */ u.jsx(
      gt,
      {
        component: "div",
        count: a,
        page: o,
        onPageChange: (E, j) => c(j),
        rowsPerPage: f,
        onRowsPerPageChange: (E) => d(parseInt(E.target.value, 10)),
        rowsPerPageOptions: p
      }
    )
  ] });
}, fe = dt(null), Qe = ({ initialValues: n = {}, onSubmit: t, validationSchema: e, children: r, ...s }) => {
  const [i, a] = C(n || {}), [o, c] = C({}), f = Je((m, b) => {
    a((g) => ({
      ...g,
      [m]: b
    })), o[m] && c((g) => ({
      ...g,
      [m]: void 0
    }));
  }, [o]), d = async (m) => {
    m.preventDefault(), c({});
    try {
      e && await e.validate(i, { abortEarly: !1 }), t && t(i);
    } catch (b) {
      if (b.inner) {
        const g = b.inner.reduce((v, S) => (v[S.path] = S.message, v), {});
        c(g);
      }
    }
  }, p = {
    values: i,
    setFieldValue: f,
    errors: o
  };
  return /* @__PURE__ */ u.jsx(fe.Provider, { value: p, children: /* @__PURE__ */ u.jsx("form", { onSubmit: d, ...s, children: r }) });
}, Ve = ({ name: n, label: t, ...e }) => {
  const r = we(fe);
  if (!r)
    throw new Error("TextField must be used within a Form component");
  const { values: s, setFieldValue: i, errors: a } = r, o = a[n], c = (f) => {
    i(n, f.target.value);
  };
  return /* @__PURE__ */ u.jsx(
    Ae,
    {
      name: n,
      label: t,
      value: s[n] || "",
      onChange: c,
      error: !!o,
      helperText: o || "",
      ...e
    }
  );
}, Cr = ({ name: n, label: t = "Upload File", initialPreview: e }) => {
  const r = we(fe), [s, i] = C(e || null);
  if (!r)
    throw new Error("FileUploadField must be used within a Form component");
  const { setFieldValue: a, values: o } = r, c = o[n];
  ne(() => {
    e && i(e);
  }, [e]), ne(() => {
    c || i(e || null);
  }, [c, e]);
  const f = (d) => {
    const p = d.target.files[0];
    if (p) {
      a(n, p);
      const m = new FileReader();
      m.onloadend = () => {
        i(m.result);
      }, m.readAsDataURL(p);
    }
  };
  return /* @__PURE__ */ u.jsxs(N, { sx: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }, children: [
    /* @__PURE__ */ u.jsx(yt, { src: s, sx: { width: 100, height: 100 }, children: !s && /* @__PURE__ */ u.jsx($t, { sx: { width: "70%", height: "70%" } }) }),
    /* @__PURE__ */ u.jsxs(ue, { variant: "outlined", component: "label", children: [
      t,
      /* @__PURE__ */ u.jsx("input", { type: "file", hidden: !0, accept: "image/*", onChange: f, "data-testid": "file-upload-input" })
    ] })
  ] });
}, Ar = ({
  name: n,
  label: t,
  fetchOptions: e,
  getOptionLabel: r = (a) => a.label,
  multiple: s = !1,
  ...i
}) => {
  const a = we(fe);
  if (!a)
    throw new Error("AutocompleteField must be used within a Form component");
  const { values: o, setFieldValue: c, errors: f } = a, [d, p] = C([]), [m, b] = C(!1), [g, v] = C("");
  ne(() => {
    let x = !0;
    return b(!0), e(g).then((_) => {
      x && p(_ || []);
    }).catch(() => {
      x && p([]);
    }).finally(() => {
      x && b(!1);
    }), () => {
      x = !1;
    };
  }, [g, e]);
  const S = (x, _) => {
    c(n, _);
  }, h = f?.[n];
  return /* @__PURE__ */ u.jsx(
    vt,
    {
      multiple: s,
      options: d,
      loading: m,
      getOptionLabel: r,
      value: o[n] || (s ? [] : null),
      onChange: S,
      onInputChange: (x, _) => {
        v(_);
      },
      renderInput: (x) => /* @__PURE__ */ u.jsx(
        Ae,
        {
          ...x,
          label: t,
          error: !!h,
          helperText: h,
          InputProps: {
            ...x.InputProps,
            endAdornment: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              m ? /* @__PURE__ */ u.jsx(ce, { color: "inherit", size: 20 }) : null,
              x.InputProps.endAdornment
            ] })
          }
        }
      ),
      ...i
    }
  );
}, Rr = ({ name: n, label: t, ...e }) => {
  const r = we(fe);
  if (!r)
    throw new Error("SwitchField must be used within a Form component");
  const { values: s, setFieldValue: i } = r, a = (o) => {
    i(n, o.target.checked);
  };
  return /* @__PURE__ */ u.jsx(
    Xe,
    {
      control: /* @__PURE__ */ u.jsx(
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
  const [e, r] = C(n);
  return ne(() => {
    const s = setTimeout(() => {
      r(n);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [n, t]), e;
}, Ut = ({ resourceName: n, createPath: t, createText: e }) => /* @__PURE__ */ u.jsxs(re, { sx: { p: "0 !important", mb: 2, display: "flex", flexWrap: "wrap" }, children: [
  /* @__PURE__ */ u.jsx(W, { variant: "h4", component: "h1", sx: { flexGrow: 1 }, children: n }),
  t && /* @__PURE__ */ u.jsx(ue, { variant: "contained", startIcon: /* @__PURE__ */ u.jsx(Ct, {}), href: t, children: e })
] }), qt = ({ searchable: n, searchQuery: t, setSearchQuery: e, filterOptions: r, filters: s, handleFilterChange: i }) => /* @__PURE__ */ u.jsxs(N, { sx: { display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }, children: [
  n && /* @__PURE__ */ u.jsx(
    Ae,
    {
      label: "Search",
      variant: "outlined",
      value: t,
      onChange: (a) => e(a.target.value),
      InputProps: { endAdornment: /* @__PURE__ */ u.jsx(At, { color: "action" }) },
      sx: { flexGrow: 1, minWidth: "200px" }
    }
  ),
  r.map((a) => /* @__PURE__ */ u.jsx(
    Xe,
    {
      control: /* @__PURE__ */ u.jsx(He, { checked: s[a.name], onChange: i, name: a.name }),
      label: a.label
    },
    a.name
  ))
] }), Dr = ({
  resourceName: n,
  columns: t,
  api: e,
  dataAdapter: r = (d) => d,
  createPath: s,
  createText: i = "Create New",
  searchable: a = !1,
  filterOptions: o = [],
  renderHeader: c = Ut,
  renderFilters: f = qt
}) => {
  const [d, p] = C([]), [m, b] = C(!0), [g, v] = C(null), [S, h] = C(0), [x, _] = C(0), [F, T] = C(10), [w, E] = C([]), [j, k] = C(""), [z, O] = C(
    () => o.reduce((D, Y) => ({ ...D, [Y.name]: !1 }), {})
  ), M = Lt(j, 500), q = Je(async () => {
    b(!0), v(null);
    try {
      const D = w.length > 0 ? w[0].field : void 0, Y = w.length > 0 ? w[0].sort : void 0, X = {
        page: x + 1,
        per_page: F,
        sort: D,
        order: Y,
        q: M || void 0,
        ...z
      }, H = await e.list(X), se = r(H);
      p(se.data), h(se.meta.total);
    } catch (D) {
      v(D);
    } finally {
      b(!1);
    }
  }, [e, x, F, w, M, z, r]);
  ne(() => {
    q();
  }, [q]);
  const _e = (D) => {
    const { name: Y, checked: X } = D.target;
    O((H) => ({ ...H, [Y]: X })), _(0);
  };
  return /* @__PURE__ */ u.jsxs(N, { children: [
    c({ resourceName: n, createPath: s, createText: i }),
    f({
      searchable: a,
      searchQuery: j,
      setSearchQuery: k,
      filterOptions: o,
      filters: z,
      handleFilterChange: _e
    }),
    /* @__PURE__ */ u.jsx(
      Vt,
      {
        rows: d,
        columns: t,
        loading: m,
        error: g,
        rowCount: S,
        page: x,
        onPageChange: _,
        pageSize: F,
        onPageSizeChange: (D) => {
          T(D), _(0);
        },
        sortModel: w,
        onSortModelChange: (D) => {
          E(D), _(0);
        }
      }
    )
  ] });
}, Yt = ({ isSubmitting: n, onCancel: t }) => /* @__PURE__ */ u.jsxs(N, { sx: { mt: 3, display: "flex", gap: 2 }, children: [
  /* @__PURE__ */ u.jsx(
    ue,
    {
      type: "submit",
      variant: "contained",
      disabled: n,
      children: n ? /* @__PURE__ */ u.jsx(ce, { size: 24 }) : "Save"
    }
  ),
  t && /* @__PURE__ */ u.jsx(ue, { variant: "outlined", onClick: t, disabled: n, children: "Cancel" })
] }), Pr = ({
  resourceName: n,
  id: t,
  api: e,
  FormComponent: r,
  onSuccess: s = () => {
  },
  onCancel: i,
  responseAdapter: a = (f) => f,
  requestAdapter: o = (f) => f,
  renderActions: c = Yt
}) => {
  const [f, d] = C(null), [p, m] = C(!1), [b, g] = C(null), [v, S] = C(!1), h = t != null;
  ne(() => {
    h && (m(!0), g(null), e.getOne(t).then((F) => d(a(F))).catch((F) => g(F)).finally(() => m(!1)));
  }, [e, t, h, a]);
  const x = async (F) => {
    S(!0), g(null);
    const T = o(F);
    try {
      const w = h ? await e.update(t, T) : await e.create(T);
      s(w.data);
    } catch (w) {
      g(w), S(!1);
    }
  }, _ = h ? `Edit ${n}` : `Create ${n}`;
  return p ? /* @__PURE__ */ u.jsx(ce, {}) : b && !v ? /* @__PURE__ */ u.jsx(ke, { severity: "error", children: b.message || "Failed to load resource data." }) : /* @__PURE__ */ u.jsxs(N, { children: [
    /* @__PURE__ */ u.jsx(re, { sx: { p: "0 !important", mb: 2 }, children: /* @__PURE__ */ u.jsx(W, { variant: "h4", component: "h1", children: _ }) }),
    /* @__PURE__ */ u.jsx(Ee, { sx: { p: 3 }, children: (!h || f) && /* @__PURE__ */ u.jsxs(Qe, { onSubmit: x, initialValues: f, children: [
      /* @__PURE__ */ u.jsx(r, {}),
      b && v && /* @__PURE__ */ u.jsx(ke, { severity: "error", sx: { mt: 2 }, children: b.message || "An error occurred during submission." }),
      c({ isSubmitting: v, onCancel: i })
    ] }) })
  ] });
};
var je, Le;
function Zt() {
  if (Le) return je;
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
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, e = /^\d+$/, r = /^\d/, s = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, i = /^\s*(['"]?)(.*?)(\1)\s*$/, a = 512, o = new n(a), c = new n(a), f = new n(a);
  je = {
    Cache: n,
    split: p,
    normalizePath: d,
    setter: function(h) {
      var x = d(h);
      return c.get(h) || c.set(h, function(F, T) {
        for (var w = 0, E = x.length, j = F; w < E - 1; ) {
          var k = x[w];
          if (k === "__proto__" || k === "constructor" || k === "prototype")
            return F;
          j = j[x[w++]];
        }
        j[x[w]] = T;
      });
    },
    getter: function(h, x) {
      var _ = d(h);
      return f.get(h) || f.set(h, function(T) {
        for (var w = 0, E = _.length; w < E; )
          if (T != null || !x) T = T[_[w++]];
          else return;
        return T;
      });
    },
    join: function(h) {
      return h.reduce(function(x, _) {
        return x + (b(_) || e.test(_) ? "[" + _ + "]" : (x ? "." : "") + _);
      }, "");
    },
    forEach: function(h, x, _) {
      m(Array.isArray(h) ? h : p(h), x, _);
    }
  };
  function d(h) {
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
  function m(h, x, _) {
    var F = h.length, T, w, E, j;
    for (w = 0; w < F; w++)
      T = h[w], T && (S(T) && (T = '"' + T + '"'), j = b(T), E = !j && /^\d+$/.test(T), x.call(_, T, j, E, w, h));
  }
  function b(h) {
    return typeof h == "string" && h && ["'", '"'].indexOf(h.charAt(0)) !== -1;
  }
  function g(h) {
    return h.match(r) && !h.match(e);
  }
  function v(h) {
    return s.test(h);
  }
  function S(h) {
    return !b(h) && (g(h) || v(h));
  }
  return je;
}
var B = Zt(), Fe, Ue;
function Wt() {
  if (Ue) return Fe;
  Ue = 1;
  const n = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (d) => d.match(n) || [], e = (d) => d[0].toUpperCase() + d.slice(1), r = (d, p) => t(d).join(p).toLowerCase(), s = (d) => t(d).reduce(
    (p, m) => `${p}${p ? m[0].toUpperCase() + m.slice(1).toLowerCase() : m.toLowerCase()}`,
    ""
  );
  return Fe = {
    words: t,
    upperFirst: e,
    camelCase: s,
    pascalCase: (d) => e(s(d)),
    snakeCase: (d) => r(d, "_"),
    kebabCase: (d) => r(d, "-"),
    sentenceCase: (d) => e(r(d, " ")),
    titleCase: (d) => t(d).map(e).join(" ")
  }, Fe;
}
var Oe = Wt(), pe = { exports: {} }, qe;
function Gt() {
  if (qe) return pe.exports;
  qe = 1, pe.exports = function(s) {
    return n(t(s), s);
  }, pe.exports.array = n;
  function n(s, i) {
    var a = s.length, o = new Array(a), c = {}, f = a, d = e(i), p = r(s);
    for (i.forEach(function(b) {
      if (!p.has(b[0]) || !p.has(b[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); f--; )
      c[f] || m(s[f], f, /* @__PURE__ */ new Set());
    return o;
    function m(b, g, v) {
      if (v.has(b)) {
        var S;
        try {
          S = ", node was:" + JSON.stringify(b);
        } catch {
          S = "";
        }
        throw new Error("Cyclic dependency" + S);
      }
      if (!p.has(b))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(b));
      if (!c[g]) {
        c[g] = !0;
        var h = d.get(b) || /* @__PURE__ */ new Set();
        if (h = Array.from(h), g = h.length) {
          v.add(b);
          do {
            var x = h[--g];
            m(x, p.get(x), v);
          } while (g);
          v.delete(b);
        }
        o[--a] = b;
      }
    }
  }
  function t(s) {
    for (var i = /* @__PURE__ */ new Set(), a = 0, o = s.length; a < o; a++) {
      var c = s[a];
      i.add(c[0]), i.add(c[1]);
    }
    return Array.from(i);
  }
  function e(s) {
    for (var i = /* @__PURE__ */ new Map(), a = 0, o = s.length; a < o; a++) {
      var c = s[a];
      i.has(c[0]) || i.set(c[0], /* @__PURE__ */ new Set()), i.has(c[1]) || i.set(c[1], /* @__PURE__ */ new Set()), i.get(c[0]).add(c[1]);
    }
    return i;
  }
  function r(s) {
    for (var i = /* @__PURE__ */ new Map(), a = 0, o = s.length; a < o; a++)
      i.set(s[a], a);
    return i;
  }
  return pe.exports;
}
var Bt = Gt();
const Jt = /* @__PURE__ */ Dt(Bt), Xt = Object.prototype.toString, Ht = Error.prototype.toString, Qt = RegExp.prototype.toString, Kt = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", er = /^Symbol\((.*)\)(.*)$/;
function tr(n) {
  return n != +n ? "NaN" : n === 0 && 1 / n < 0 ? "-0" : "" + n;
}
function Ye(n, t = !1) {
  if (n == null || n === !0 || n === !1) return "" + n;
  const e = typeof n;
  if (e === "number") return tr(n);
  if (e === "string") return t ? `"${n}"` : n;
  if (e === "function") return "[Function " + (n.name || "anonymous") + "]";
  if (e === "symbol") return Kt.call(n).replace(er, "Symbol($1)");
  const r = Xt.call(n).slice(8, -1);
  return r === "Date" ? isNaN(n.getTime()) ? "" + n : n.toISOString(n) : r === "Error" || n instanceof Error ? "[" + Ht.call(n) + "]" : r === "RegExp" ? Qt.call(n) : null;
}
function Z(n, t) {
  let e = Ye(n, t);
  return e !== null ? e : JSON.stringify(n, function(r, s) {
    let i = Ye(this[r], t);
    return i !== null ? i : s;
  }, 2);
}
function Ke(n) {
  return n == null ? [] : [].concat(n);
}
let et, tt, rt, rr = /\$\{\s*(\w+)\s*\}/g;
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
    }), typeof t == "string" ? t.replace(rr, (s, i) => Z(e[i])) : typeof t == "function" ? t(e) : t;
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
    const s = r != null && r !== e ? ` (cast from the value \`${Z(r, !0)}\`).` : ".";
    return t !== "mixed" ? `${n} must be a \`${t}\` type, but the final value was: \`${Z(e, !0)}\`` + s : `${n} must match the configured type. The validated value was: \`${Z(e, !0)}\`` + s;
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
}, nr = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, $e = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, sr = {
  isValue: "${path} field must be ${value}"
}, xe = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, ir = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, ar = {
  notType: (n) => {
    const {
      path: t,
      value: e,
      spec: r
    } = n, s = r.types.length;
    if (Array.isArray(e)) {
      if (e.length < s) return `${t} tuple value has too few items, expected a length of ${s} but got ${e.length} for value: \`${Z(e, !0)}\``;
      if (e.length > s) return `${t} tuple value has too many items, expected a length of ${s} but got ${e.length} for value: \`${Z(e, !0)}\``;
    }
    return P.formatError(V.notType, n);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: V,
  string: I,
  number: nr,
  date: $e,
  object: xe,
  array: ir,
  boolean: sr,
  tuple: ar
});
const Re = (n) => n && n.__isYupSchema__;
class ye {
  static fromOptions(t, e) {
    if (!e.then && !e.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: s,
      otherwise: i
    } = e, a = typeof r == "function" ? r : (...o) => o.every((c) => c === r);
    return new ye(t, (o, c) => {
      var f;
      let d = a(...o) ? s : i;
      return (f = d?.(c)) != null ? f : c;
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
    if (!Re(s)) throw new TypeError("conditions must return a schema object");
    return s.resolve(e);
  }
}
const me = {
  context: "$",
  value: "."
};
class J {
  constructor(t, e = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === me.context, this.isValue = this.key[0] === me.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? me.context : this.isValue ? me.value : "";
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
function K(n) {
  function t({
    value: e,
    path: r = "",
    options: s,
    originalValue: i,
    schema: a
  }, o, c) {
    const {
      name: f,
      test: d,
      params: p,
      message: m,
      skipAbsent: b
    } = n;
    let {
      parent: g,
      context: v,
      abortEarly: S = a.spec.abortEarly,
      disableStackTrace: h = a.spec.disableStackTrace
    } = s;
    const x = {
      value: e,
      parent: g,
      context: v
    };
    function _(O = {}) {
      const M = nt(Object.assign({
        value: e,
        originalValue: i,
        label: a.spec.label,
        path: O.path || r,
        spec: a.spec,
        disableStackTrace: O.disableStackTrace || h
      }, p, O.params), x), q = new P(P.formatError(O.message || m, M), e, M.path, O.type || f, M.disableStackTrace);
      return q.params = M, q;
    }
    const F = S ? o : c;
    let T = {
      path: r,
      parent: g,
      type: f,
      from: s.from,
      createError: _,
      resolve(O) {
        return st(O, x);
      },
      options: s,
      originalValue: i,
      schema: a
    };
    const w = (O) => {
      P.isError(O) ? F(O) : O ? c(null) : F(_());
    }, E = (O) => {
      P.isError(O) ? F(O) : o(O);
    };
    if (b && G(e))
      return w(!0);
    let k;
    try {
      var z;
      if (k = d.call(T, e, T), typeof ((z = k) == null ? void 0 : z.then) == "function") {
        if (s.sync)
          throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(k).then(w, E);
      }
    } catch (O) {
      E(O);
      return;
    }
    w(k);
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
function or(n, t, e, r = e) {
  let s, i, a;
  return t ? (B.forEach(t, (o, c, f) => {
    let d = c ? o.slice(1, o.length - 1) : o;
    n = n.resolve({
      context: r,
      parent: s,
      value: e
    });
    let p = n.type === "tuple", m = f ? parseInt(d, 10) : 0;
    if (n.innerType || p) {
      if (p && !f) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (e && m >= e.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);
      s = e, e = e && e[m], n = p ? n.spec.types[m] : n.innerType;
    }
    if (!f) {
      if (!n.fields || !n.fields[d]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${n.type}")`);
      s = e, e = e && e[d], n = n.fields[d];
    }
    i = d, a = c ? "[" + o + "]" : "." + o;
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
class ve extends Set {
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
    return new ve(this.values());
  }
  merge(t, e) {
    const r = this.clone();
    return t.forEach((s) => r.add(s)), e.forEach((s) => r.delete(s)), r;
  }
}
function te(n, t = /* @__PURE__ */ new Map()) {
  if (Re(n) || !n || typeof n != "object") return n;
  if (t.has(n)) return t.get(n);
  let e;
  if (n instanceof Date)
    e = new Date(n.getTime()), t.set(n, e);
  else if (n instanceof RegExp)
    e = new RegExp(n), t.set(n, e);
  else if (Array.isArray(n)) {
    e = new Array(n.length), t.set(n, e);
    for (let r = 0; r < n.length; r++) e[r] = te(n[r], t);
  } else if (n instanceof Map) {
    e = /* @__PURE__ */ new Map(), t.set(n, e);
    for (const [r, s] of n.entries()) e.set(r, te(s, t));
  } else if (n instanceof Set) {
    e = /* @__PURE__ */ new Set(), t.set(n, e);
    for (const r of n) e.add(te(r, t));
  } else if (n instanceof Object) {
    e = {}, t.set(n, e);
    for (const [r, s] of Object.entries(n)) e[r] = te(s, t);
  } else
    throw Error(`Unable to clone ${n}`);
  return e;
}
function lr(n) {
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
function ur(n, t) {
  const e = t ? `${t}.${n.path}` : n.path;
  return n.errors.map((r) => ({
    message: r,
    path: lr(e)
  }));
}
function it(n, t) {
  var e;
  if (!((e = n.inner) != null && e.length) && n.errors.length)
    return ur(n, t);
  const r = t ? `${t}.${n.path}` : n.path;
  return n.inner.flatMap((s) => it(s, r));
}
class L {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new ve(), this._blacklist = new ve(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
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
    return e.type = this.type, e._typeCheck = this._typeCheck, e._whitelist = this._whitelist.clone(), e._blacklist = this._blacklist.clone(), e.internalTests = Object.assign({}, this.internalTests), e.exclusiveTests = Object.assign({}, this.exclusiveTests), e.deps = [...this.deps], e.conditions = [...this.conditions], e.tests = [...this.tests], e.transforms = [...this.transforms], e.spec = te(Object.assign({}, this.spec, t)), e;
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
      let a = Z(t), o = Z(i);
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
    } = e, c = t;
    o || (c = this._cast(c, Object.assign({
      assert: !1
    }, e)));
    let f = [];
    for (let d of Object.values(this.internalTests))
      d && f.push(d);
    this.runTests({
      path: i,
      value: c,
      originalValue: a,
      options: e,
      tests: f
    }, r, (d) => {
      if (d.length)
        return s(d, c);
      this.runTests({
        path: i,
        value: c,
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
      path: c,
      options: f
    } = t, d = (v) => {
      s || (s = !0, e(v, a));
    }, p = (v) => {
      s || (s = !0, r(v, a));
    }, m = i.length, b = [];
    if (!m) return p([]);
    let g = {
      value: a,
      originalValue: o,
      path: c,
      options: f,
      schema: this
    };
    for (let v = 0; v < i.length; v++) {
      const S = i[v];
      S(g, d, function(x) {
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
    const c = typeof o == "number";
    let f = r[o];
    const d = Object.assign({}, a, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: r,
      value: f,
      originalValue: i[o],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [c ? "index" : "key"]: o,
      path: c || o.includes(".") ? `${s || ""}[${c ? o : `"${o}"`}]` : (s ? `${s}.` : "") + t
    });
    return (p, m, b) => this.resolve(d)._validate(f, d, m, b);
  }
  validate(t, e) {
    var r;
    let s = this.resolve(Object.assign({}, e, {
      value: t
    })), i = (r = e?.disableStackTrace) != null ? r : s.spec.disableStackTrace;
    return new Promise((a, o) => s._validate(t, e, (c, f) => {
      P.isError(c) && (c.value = f), o(c);
    }, (c, f) => {
      c.length ? o(new P(c, f, void 0, void 0, i)) : a(f);
    }));
  }
  validateSync(t, e) {
    var r;
    let s = this.resolve(Object.assign({}, e, {
      value: t
    })), i, a = (r = e?.disableStackTrace) != null ? r : s.spec.disableStackTrace;
    return s._validate(t, Object.assign({}, e, {
      sync: !0
    }), (o, c) => {
      throw P.isError(o) && (o.value = c), o;
    }, (o, c) => {
      if (o.length) throw new P(o, t, void 0, void 0, a);
      i = c;
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
    return e == null ? e : typeof e == "function" ? e.call(this, t) : te(e);
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
    return r.internalTests.nullable = K({
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
    return r.internalTests.optionality = K({
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
    let r = this.clone(), s = K(e), i = e.exclusive || e.name && r.exclusiveTests[e.name] === !0;
    if (e.exclusive && !e.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return e.name && (r.exclusiveTests[e.name] = !!e.exclusive), r.tests = r.tests.filter((a) => !(a.OPTIONS.name === e.name && (i || a.OPTIONS.test === s.OPTIONS.test))), r.tests.push(s), r;
  }
  when(t, e) {
    !Array.isArray(t) && typeof t != "string" && (e = t, t = ".");
    let r = this.clone(), s = Ke(t).map((i) => new J(i));
    return s.forEach((i) => {
      i.isSibling && r.deps.push(i.key);
    }), r.conditions.push(typeof e == "function" ? new ye(s, e) : ye.fromOptions(s, e)), r;
  }
  typeError(t) {
    let e = this.clone();
    return e.internalTests.typeError = K({
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
    }), r.internalTests.whiteList = K({
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
    }), r.internalTests.blacklist = K({
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
      tests: e.tests.filter((c, f, d) => d.findIndex((p) => p.OPTIONS.name === c.OPTIONS.name) === f).map((c) => {
        const f = c.OPTIONS.params && t ? nt(Object.assign({}, c.OPTIONS.params), t) : c.OPTIONS.params;
        return {
          name: c.OPTIONS.name,
          params: f
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
  } = or(this, t, e, r.context);
  return a[n](s && s[i], Object.assign({}, r, {
    parent: s,
    path: t
  }));
};
for (const n of ["equals", "is"]) L.prototype[n] = L.prototype.oneOf;
for (const n of ["not", "nope"]) L.prototype[n] = L.prototype.notOneOf;
const cr = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function fr(n) {
  const t = Ce(n);
  if (!t) return Date.parse ? Date.parse(n) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let e = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (e = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (e = 0 - e)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + e, t.second, t.millisecond);
}
function Ce(n) {
  var t, e;
  const r = cr.exec(n);
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
let dr = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), hr = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), pr = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, mr = "^\\d{4}-\\d{2}-\\d{2}", xr = "\\d{2}:\\d{2}:\\d{2}", br = "(([+-]\\d{2}(:?\\d{2})?)|Z)", gr = new RegExp(`${mr}T${xr}(\\.\\d+)?${br}$`), yr = (n) => G(n) || n === n.trim(), vr = {}.toString();
function be() {
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
        return r === vr ? t : r;
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
    return this.matches(dr, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = I.url) {
    return this.matches(hr, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = I.uuid) {
    return this.matches(pr, {
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
    } = t : e = t), this.matches(gr, {
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
        const a = Ce(i);
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
        const a = Ce(i);
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
      test: yr
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
be.prototype = at.prototype;
let wr = /* @__PURE__ */ new Date(""), Er = (n) => Object.prototype.toString.call(n) === "[object Date]";
class De extends L {
  constructor() {
    super({
      type: "date",
      check(t) {
        return Er(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, e) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = fr(t), isNaN(t) ? De.INVALID_DATE : new Date(t)));
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
  min(t, e = $e.min) {
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
  max(t, e = $e.max) {
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
De.INVALID_DATE = wr;
function _r(n, t = []) {
  let e = [], r = /* @__PURE__ */ new Set(), s = new Set(t.map(([a, o]) => `${a}-${o}`));
  function i(a, o) {
    let c = B.split(a)[0];
    r.add(c), s.has(`${o}-${c}`) || e.push([o, c]);
  }
  for (const a of Object.keys(n)) {
    let o = n[a];
    r.add(a), J.isRef(o) && o.isSibling ? i(o.path, a) : Re(o) && "deps" in o && o.deps.forEach((c) => i(c, a));
  }
  return Jt.array(Array.from(r), e).reverse();
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
const Sr = (n, t, e) => {
  if (typeof n != "string")
    return n;
  let r = n;
  try {
    r = JSON.parse(n);
  } catch {
  }
  return e.isType(r) ? r : n;
};
function ge(n) {
  if ("fields" in n) {
    const t = {};
    for (const [e, r] of Object.entries(n.fields))
      t[e] = ge(r);
    return n.setFields(t);
  }
  if (n.type === "array") {
    const t = n.optional();
    return t.innerType && (t.innerType = ge(t.innerType)), t;
  }
  return n.type === "tuple" ? n.optional().clone({
    types: n.spec.types.map(ge)
  }) : "optional" in n ? n.optional() : n;
}
const Tr = (n, t) => {
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
const jr = ot([]);
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
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = jr, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, e = {}) {
    var r;
    let s = super._cast(t, e);
    if (s === void 0) return this.getDefault(e);
    if (!this._typeCheck(s)) return s;
    let i = this.fields, a = (r = e.stripUnknown) != null ? r : this.spec.noUnknown, o = [].concat(this._nodes, Object.keys(s).filter((p) => !this._nodes.includes(p))), c = {}, f = Object.assign({}, e, {
      parent: c,
      __validating: e.__validating || !1
    }), d = !1;
    for (const p of o) {
      let m = i[p], b = p in s, g = s[p];
      if (m) {
        let v;
        f.path = (e.path ? `${e.path}.` : "") + p, m = m.resolve({
          value: g,
          context: e.context,
          parent: c
        });
        let S = m instanceof L ? m.spec : void 0, h = S?.strict;
        if (S != null && S.strip) {
          d = d || p in s;
          continue;
        }
        v = !e.__validating || !h ? m.cast(g, f) : g, v !== void 0 && (c[p] = v);
      } else b && !a && (c[p] = g);
      (b !== p in c || c[p] !== g) && (d = !0);
    }
    return d ? c : s;
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
    }, ...i], e.__validating = !0, e.originalValue = a, super._validate(t, e, r, (c, f) => {
      if (!o || !Ge(f)) {
        s(c, f);
        return;
      }
      a = a || f;
      let d = [];
      for (let p of this._nodes) {
        let m = this.fields[p];
        !m || J.isRef(m) || d.push(m.asNestedTest({
          options: e,
          key: p,
          parent: f,
          parentPath: e.path,
          originalParent: a
        }));
      }
      this.runTests({
        tests: d,
        value: f,
        originalValue: a,
        options: e
      }, r, (p) => {
        s(p.sort(this._sortErrors).concat(c), f);
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
    return r.fields = t, r._nodes = _r(t, e), r._sortErrors = ot(Object.keys(t)), e && (r._excludedEdges = e), r;
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
    return ge(this);
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
      return Tr(i, t) && (a = Object.assign({}, i), r || delete a[t], a[e] = s(i)), a;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Sr);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || xe.exact,
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
  noUnknown(t = !0, e = xe.noUnknown) {
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
  unknown(t = !0, e = xe.noUnknown) {
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
    return this.transformKeys(Oe.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Oe.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Oe.snakeCase(t).toUpperCase());
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
const Nr = ({
  onSubmit: n,
  isSubmitting: t = !1,
  error: e,
  logo: r,
  title: s = "Sign in to your account",
  loginField: i = { name: "email", label: "Email Address", autoComplete: "email" }
}) => {
  const a = lt({
    [i.name]: be().required(`${i.label} is required`).test(
      "is-email-if-required",
      "Enter a valid email",
      (o) => i.name === "email" ? be().email().isValidSync(o) : !0
    ),
    password: be().required("Password is required")
  });
  return /* @__PURE__ */ u.jsx(wt, { component: "main", maxWidth: "xs", children: /* @__PURE__ */ u.jsxs(
    Ee,
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
        r && /* @__PURE__ */ u.jsx(N, { mb: 2, children: r }),
        /* @__PURE__ */ u.jsx(W, { component: "h1", variant: "h5", children: s }),
        e && /* @__PURE__ */ u.jsx(ke, { severity: "error", sx: { width: "100%", mt: 2 }, children: e.message }),
        /* @__PURE__ */ u.jsx(N, { sx: { mt: 1, width: "100%" }, children: /* @__PURE__ */ u.jsxs(
          Qe,
          {
            onSubmit: n,
            validationSchema: a,
            noValidate: !0,
            children: [
              /* @__PURE__ */ u.jsx(
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
              /* @__PURE__ */ u.jsx(
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
              /* @__PURE__ */ u.jsx(
                ue,
                {
                  type: "submit",
                  fullWidth: !0,
                  variant: "contained",
                  sx: { mt: 3, mb: 2 },
                  disabled: t,
                  children: t ? /* @__PURE__ */ u.jsx(ce, { size: 24 }) : "Sign In"
                }
              )
            ]
          }
        ) })
      ]
    }
  ) });
}, ee = 240, Ir = ({
  navItems: n = [],
  title: t = "Dashboard",
  drawerHeader: e,
  headerActions: r,
  children: s
}) => {
  const [i, a] = C(!1), o = () => {
    a(!i);
  }, c = /* @__PURE__ */ u.jsxs(N, { children: [
    e ? /* @__PURE__ */ u.jsx(re, { sx: { justifyContent: "center" }, children: e }) : null,
    /* @__PURE__ */ u.jsx(Et, { children: n.map((f, d) => {
      const p = f.component && f.component.displayName === "NavLink" ? { to: f.path } : { href: f.path };
      return /* @__PURE__ */ u.jsx(_t, { disablePadding: !0, children: /* @__PURE__ */ u.jsxs(St, { component: f.component || "a", ...p, children: [
        f.icon && /* @__PURE__ */ u.jsx(Tt, { children: f.icon }),
        /* @__PURE__ */ u.jsx(jt, { primary: f.text })
      ] }) }, d);
    }) })
  ] });
  return /* @__PURE__ */ u.jsxs(N, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ u.jsx(Ft, {}),
    /* @__PURE__ */ u.jsx(
      Ot,
      {
        position: "fixed",
        sx: {
          width: { sm: `calc(100% - ${ee}px)` },
          ml: { sm: `${ee}px` }
        },
        children: /* @__PURE__ */ u.jsxs(re, { children: [
          /* @__PURE__ */ u.jsx(
            kt,
            {
              color: "inherit",
              "aria-label": "open drawer",
              edge: "start",
              onClick: o,
              sx: { mr: 2, display: { sm: "none" } },
              children: /* @__PURE__ */ u.jsx(Rt, {})
            }
          ),
          /* @__PURE__ */ u.jsx(W, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1, color: "primary.contrastText" }, children: t }),
          r
        ] })
      }
    ),
    /* @__PURE__ */ u.jsxs(
      N,
      {
        component: "nav",
        sx: { width: { sm: ee }, flexShrink: { sm: 0 } },
        children: [
          /* @__PURE__ */ u.jsx(
            Ne,
            {
              variant: "temporary",
              open: i,
              onClose: o,
              ModalProps: { keepMounted: !0 },
              sx: {
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: ee }
              },
              children: c
            }
          ),
          /* @__PURE__ */ u.jsx(
            Ne,
            {
              variant: "permanent",
              sx: {
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: ee }
              },
              open: !0,
              children: c
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      N,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${ee}px)` },
          minHeight: "100vh",
          backgroundColor: (f) => f.palette.grey[100]
        },
        children: [
          /* @__PURE__ */ u.jsx(re, {}),
          s
        ]
      }
    )
  ] });
};
export {
  Ar as AutocompleteField,
  Ir as DashboardLayout,
  Vt as DataTable,
  Cr as FileUploadField,
  Qe as Form,
  fe as FormContext,
  Nr as LoginPage,
  Pr as ResourceFormPage,
  Dr as ResourceListPage,
  $r as StatCard,
  Rr as SwitchField,
  Ve as TextField
};
