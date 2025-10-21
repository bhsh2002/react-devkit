import lt, { createContext as ut, useState as A, useCallback as We, useContext as pe, useEffect as ne } from "react";
import { Paper as me, Box as N, Typography as q, Toolbar as H, TableContainer as ct, Table as ft, TableHead as dt, TableRow as Q, TableCell as ee, TableSortLabel as ht, TableBody as pt, TablePagination as mt, CircularProgress as xe, TextField as Ge, Avatar as xt, Button as Te, Autocomplete as bt, FormControlLabel as gt, Switch as yt, Alert as Be, Container as vt, List as wt, ListItem as Et, ListItemButton as _t, ListItemIcon as St, ListItemText as Tt, CssBaseline as Ot, AppBar as jt, IconButton as Ft, Drawer as Re } from "@mui/material";
import { ImageNotSupported as kt, Add as $t, Menu as Ct } from "@mui/icons-material";
function At(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var ae = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Rt() {
  if (De) return te;
  De = 1;
  var s = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(r, n, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), n.key !== void 0 && (a = "" + n.key), "key" in n) {
      i = {};
      for (var o in n)
        o !== "key" && (i[o] = n[o]);
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
var Pe;
function Dt() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === F ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case g:
          return "Fragment";
        case b:
          return "Profiler";
        case h:
          return "StrictMode";
        case E:
          return "Suspense";
        case w:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case _:
            return "Portal";
          case R:
            return l.displayName || "Context";
          case S:
            return (l._context.displayName || "Context") + ".Consumer";
          case T:
            var v = l.render;
            return l = l.displayName, l || (l = v.displayName || v.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case O:
            return v = l.displayName || null, v !== null ? v : s(l.type) || "Memo";
          case k:
            v = l._payload, l = l._init;
            try {
              return s(l(v));
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
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var j = v.error, $ = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return j.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(l);
      }
    }
    function r(l) {
      if (l === g) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === k)
        return "<...>";
      try {
        var v = s(l);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var l = L.A;
      return l === null ? null : l.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(l) {
      if (K.call(l, "key")) {
        var v = Object.getOwnPropertyDescriptor(l, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function o(l, v) {
      function j() {
        Fe || (Fe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: j,
        configurable: !0
      });
    }
    function u() {
      var l = s(this.type);
      return ke[l] || (ke[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function d(l, v, j, $, ie, ge) {
      var C = j.ref;
      return l = {
        $$typeof: y,
        type: l,
        key: v,
        props: j,
        _owner: $
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(l, "ref", {
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
        value: ie
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function f(l, v, j, $, ie, ge) {
      var C = v.children;
      if (C !== void 0)
        if ($)
          if (at(C)) {
            for ($ = 0; $ < C.length; $++)
              p(C[$]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(C);
      if (K.call(v, "key")) {
        C = s(l);
        var G = Object.keys(v).filter(function(ot) {
          return ot !== "key";
        });
        $ = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", Ae[C + $] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), Ae[C + $] = !0);
      }
      if (C = null, j !== void 0 && (e(j), C = "" + j), a(v) && (e(v.key), C = "" + v.key), "key" in v) {
        j = {};
        for (var ye in v)
          ye !== "key" && (j[ye] = v[ye]);
      } else j = v;
      return C && o(
        j,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), d(
        l,
        C,
        j,
        n(),
        ie,
        ge
      );
    }
    function p(l) {
      m(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === k && (l._payload.status === "fulfilled" ? m(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function m(l) {
      return typeof l == "object" && l !== null && l.$$typeof === y;
    }
    var x = lt, y = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), R = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), L = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, at = Array.isArray, be = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var Fe, ke = {}, $e = x.react_stack_bottom_frame.bind(
      x,
      i
    )(), Ce = be(r(i)), Ae = {};
    re.Fragment = g, re.jsx = function(l, v, j) {
      var $ = 1e4 > L.recentlyCreatedOwnerStacks++;
      return f(
        l,
        v,
        j,
        !1,
        $ ? Error("react-stack-top-frame") : $e,
        $ ? be(r(l)) : Ce
      );
    }, re.jsxs = function(l, v, j) {
      var $ = 1e4 > L.recentlyCreatedOwnerStacks++;
      return f(
        l,
        v,
        j,
        !0,
        $ ? Error("react-stack-top-frame") : $e,
        $ ? be(r(l)) : Ce
      );
    };
  })()), re;
}
var Ne;
function Pt() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? ae.exports = Rt() : ae.exports = Dt()), ae.exports;
}
var c = Pt();
const Tr = ({ icon: s, title: t, value: e, color: r, sx: n, onClick: i }) => /* @__PURE__ */ c.jsxs(
  me,
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
), Nt = () => /* @__PURE__ */ c.jsx(N, { sx: { p: 4, textAlign: "center" }, children: /* @__PURE__ */ c.jsx(q, { color: "text.secondary", children: "No rows" }) }), It = () => /* @__PURE__ */ c.jsx(N, { sx: { display: "flex", justifyContent: "center", alignItems: "center", p: 4 }, children: /* @__PURE__ */ c.jsx(xe, {}) }), zt = ({
  // Data
  rows: s = [],
  columns: t = [],
  getRowId: e = (b) => b.id,
  // State
  loading: r = !1,
  error: n,
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
  sortModel: x = [],
  onSortModelChange: y = () => {
  },
  // Customization
  slots: _ = {},
  slotProps: g = {},
  sx: h
}) => {
  const {
    toolbar: b,
    noRowsOverlay: S = Nt,
    loadingOverlay: R = It
  } = _, T = (w) => {
    if (!m) return;
    const O = x.find((V) => V.field === w);
    let k;
    O ? O.sort === "asc" ? k = [{ field: w, sort: "desc" }] : k = [] : k = [{ field: w, sort: "asc" }], y(k);
  }, E = x.length > 0 ? x[0] : null;
  return /* @__PURE__ */ c.jsxs(me, { sx: h, children: [
    b && /* @__PURE__ */ c.jsx(H, { children: /* @__PURE__ */ c.jsx(b, { ...g.toolbar || {} }) }),
    /* @__PURE__ */ c.jsx(ct, { children: /* @__PURE__ */ c.jsxs(ft, { stickyHeader: !0, children: [
      /* @__PURE__ */ c.jsx(dt, { children: /* @__PURE__ */ c.jsx(Q, { children: t.map((w) => /* @__PURE__ */ c.jsx(
        ee,
        {
          align: w.align || "inherit",
          width: w.width,
          sortDirection: E?.field === w.field ? E.sort : !1,
          children: w.sortable && m ? /* @__PURE__ */ c.jsx(
            ht,
            {
              active: E?.field === w.field,
              direction: E?.field === w.field ? E.sort : "asc",
              onClick: () => T(w.field),
              children: w.headerName
            }
          ) : w.headerName
        },
        w.field
      )) }) }),
      /* @__PURE__ */ c.jsx(pt, { children: r ? /* @__PURE__ */ c.jsx(Q, { children: /* @__PURE__ */ c.jsx(ee, { colSpan: t.length, sx: { border: "none" }, children: /* @__PURE__ */ c.jsx(R, { ...g.loadingOverlay || {} }) }) }) : n ? /* @__PURE__ */ c.jsx(Q, { children: /* @__PURE__ */ c.jsx(ee, { colSpan: t.length, sx: { border: "none", textAlign: "center" }, children: /* @__PURE__ */ c.jsx(q, { color: "error", children: n.message || "An error occurred." }) }) }) : s.length === 0 ? /* @__PURE__ */ c.jsx(Q, { children: /* @__PURE__ */ c.jsx(ee, { colSpan: t.length, sx: { border: "none" }, children: /* @__PURE__ */ c.jsx(S, { ...g.noRowsOverlay || {} }) }) }) : s.map((w) => /* @__PURE__ */ c.jsx(Q, { hover: !0, children: t.map((O) => {
        const k = O.field.split(".").reduce((V, F) => V?.[F], w);
        return /* @__PURE__ */ c.jsx(ee, { align: O.align || "inherit", children: O.renderCell ? O.renderCell({ value: k, row: w, id: e(w) }) : k }, O.field);
      }) }, e(w))) })
    ] }) }),
    i && !n && /* @__PURE__ */ c.jsx(
      mt,
      {
        component: "div",
        count: a,
        page: o,
        onPageChange: (w, O) => u(O),
        rowsPerPage: d,
        onRowsPerPageChange: (w) => f(parseInt(w.target.value, 10)),
        rowsPerPageOptions: p
      }
    )
  ] });
}, se = ut(null), Mt = ({ initialValues: s = {}, onSubmit: t, validationSchema: e, children: r, ...n }) => {
  const [i, a] = A(s || {}), [o, u] = A({}), d = We((m, x) => {
    a((y) => ({
      ...y,
      [m]: x
    })), o[m] && u((y) => ({
      ...y,
      [m]: void 0
    }));
  }, [o]), f = async (m) => {
    m.preventDefault(), u({});
    try {
      e && await e.validate(i, { abortEarly: !1 }), t && t(i);
    } catch (x) {
      if (x.inner) {
        const y = x.inner.reduce((_, g) => (_[g.path] = g.message, _), {});
        u(y);
      }
    }
  }, p = {
    values: i,
    setFieldValue: d,
    errors: o
  };
  return /* @__PURE__ */ c.jsx(se.Provider, { value: p, children: /* @__PURE__ */ c.jsx("form", { onSubmit: f, ...n, children: r }) });
}, Ie = ({ name: s, label: t, ...e }) => {
  const r = pe(se);
  if (!r)
    throw new Error("TextField must be used within a Form component");
  const { values: n, setFieldValue: i, errors: a } = r, o = a[s], u = (d) => {
    i(s, d.target.value);
  };
  return /* @__PURE__ */ c.jsx(
    Ge,
    {
      name: s,
      label: t,
      value: n[s] || "",
      onChange: u,
      error: !!o,
      helperText: o || "",
      ...e
    }
  );
}, Or = ({ name: s, label: t = "Upload File", initialPreview: e }) => {
  const r = pe(se), [n, i] = A(e || null);
  if (!r)
    throw new Error("FileUploadField must be used within a Form component");
  const { setFieldValue: a, values: o } = r, u = o[s];
  ne(() => {
    e && i(e);
  }, [e]), ne(() => {
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
    /* @__PURE__ */ c.jsx(xt, { src: n, sx: { width: 100, height: 100 }, children: !n && /* @__PURE__ */ c.jsx(kt, { sx: { width: "70%", height: "70%" } }) }),
    /* @__PURE__ */ c.jsxs(Te, { variant: "outlined", component: "label", children: [
      t,
      /* @__PURE__ */ c.jsx("input", { type: "file", hidden: !0, accept: "image/*", onChange: d, "data-testid": "file-upload-input" })
    ] })
  ] });
}, jr = ({
  name: s,
  label: t,
  fetchOptions: e,
  getOptionLabel: r = (a) => a.label,
  multiple: n = !1,
  ...i
}) => {
  const a = pe(se);
  if (!a)
    throw new Error("AutocompleteField must be used within a Form component");
  const { values: o, setFieldValue: u, errors: d } = a, [f, p] = A([]), [m, x] = A(!1), [y, _] = A("");
  ne(() => {
    let b = !0;
    return x(!0), e(y).then((S) => {
      b && p(S || []);
    }).catch(() => {
      b && p([]);
    }).finally(() => {
      b && x(!1);
    }), () => {
      b = !1;
    };
  }, [y, e]);
  const g = (b, S) => {
    u(s, S);
  }, h = d?.[s];
  return /* @__PURE__ */ c.jsx(
    bt,
    {
      multiple: n,
      options: f,
      loading: m,
      getOptionLabel: r,
      value: o[s] || (n ? [] : null),
      onChange: g,
      onInputChange: (b, S) => {
        _(S);
      },
      renderInput: (b) => /* @__PURE__ */ c.jsx(
        Ge,
        {
          ...b,
          label: t,
          error: !!h,
          helperText: h,
          InputProps: {
            ...b.InputProps,
            endAdornment: /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              m ? /* @__PURE__ */ c.jsx(xe, { color: "inherit", size: 20 }) : null,
              b.InputProps.endAdornment
            ] })
          }
        }
      ),
      ...i
    }
  );
}, Fr = ({ name: s, label: t, ...e }) => {
  const r = pe(se);
  if (!r)
    throw new Error("SwitchField must be used within a Form component");
  const { values: n, setFieldValue: i } = r, a = (o) => {
    i(s, o.target.checked);
  };
  return /* @__PURE__ */ c.jsx(
    gt,
    {
      control: /* @__PURE__ */ c.jsx(
        yt,
        {
          checked: !!n[s],
          onChange: a,
          name: s,
          ...e
        }
      ),
      label: t
    }
  );
}, kr = ({
  resourceName: s,
  columns: t,
  api: e,
  createPath: r
}) => {
  const [n, i] = A([]), [a, o] = A(!0), [u, d] = A(null), [f, p] = A(0), [m, x] = A(0), [y, _] = A(10), [g, h] = A([]), b = We(async () => {
    o(!0), d(null);
    try {
      const E = g.length > 0 ? g[0].field : void 0, w = g.length > 0 ? g[0].sort : void 0, O = await e.list({
        page: m + 1,
        // API might be 1-based
        per_page: y,
        sort: E,
        order: w
      });
      i(O.data), p(O.meta.total);
    } catch (E) {
      d(E);
    } finally {
      o(!1);
    }
  }, [e, m, y, g]);
  ne(() => {
    b();
  }, [b]);
  const S = (E) => {
    x(E);
  }, R = (E) => {
    _(E), x(0);
  }, T = (E) => {
    h(E), x(0);
  };
  return /* @__PURE__ */ c.jsxs(N, { children: [
    /* @__PURE__ */ c.jsxs(H, { sx: { p: "0 !important", mb: 2 }, children: [
      /* @__PURE__ */ c.jsx(q, { variant: "h4", component: "h1", sx: { flexGrow: 1 }, children: s }),
      r && /* @__PURE__ */ c.jsx(
        Te,
        {
          variant: "contained",
          startIcon: /* @__PURE__ */ c.jsx($t, {}),
          component: "a",
          href: r,
          children: "Create New"
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      zt,
      {
        rows: n,
        columns: t,
        loading: a,
        error: u,
        pagination: !0,
        rowCount: f,
        page: m,
        onPageChange: S,
        pageSize: y,
        onPageSizeChange: R,
        sorting: !0,
        sortModel: g,
        onSortModelChange: T
      }
    )
  ] });
}, $r = ({
  resourceName: s,
  id: t,
  api: e,
  FormComponent: r,
  onSuccess: n = () => {
  }
}) => {
  const [i, a] = A(null), [o, u] = A(!1), [d, f] = A(null), [p, m] = A(!1), x = t != null;
  ne(() => {
    x && (u(!0), f(null), e.getOne(t).then((g) => {
      a(g);
    }).catch((g) => {
      f(g);
    }).finally(() => {
      u(!1);
    }));
  }, [e, t, x]);
  const y = async (g) => {
    m(!0), f(null);
    try {
      let h;
      if (x) {
        const { id: b, ...S } = g;
        h = await e.update(t, S);
      } else
        h = await e.create(g);
      n(h.data);
    } catch (h) {
      f(h), m(!1);
    }
  }, _ = x ? `Edit ${s}` : `Create ${s}`;
  return o ? /* @__PURE__ */ c.jsx(xe, {}) : d && !i ? /* @__PURE__ */ c.jsx(Be, { severity: "error", children: d.message || "Failed to load resource." }) : /* @__PURE__ */ c.jsxs(N, { children: [
    /* @__PURE__ */ c.jsx(H, { sx: { p: "0 !important", mb: 2 }, children: /* @__PURE__ */ c.jsx(q, { variant: "h4", component: "h1", children: _ }) }),
    /* @__PURE__ */ c.jsx(me, { sx: { p: 3 }, children: (!x || i) && /* @__PURE__ */ c.jsx(
      r,
      {
        initialData: i,
        onSubmit: y,
        isSubmitting: p,
        submitError: p ? d : null
      }
    ) })
  ] });
};
var ve, ze;
function Vt() {
  if (ze) return ve;
  ze = 1;
  function s(h) {
    this._maxSize = h, this.clear();
  }
  s.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, s.prototype.get = function(h) {
    return this._values[h];
  }, s.prototype.set = function(h, b) {
    return this._size >= this._maxSize && this.clear(), h in this._values || this._size++, this._values[h] = b;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, e = /^\d+$/, r = /^\d/, n = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, i = /^\s*(['"]?)(.*?)(\1)\s*$/, a = 512, o = new s(a), u = new s(a), d = new s(a);
  ve = {
    Cache: s,
    split: p,
    normalizePath: f,
    setter: function(h) {
      var b = f(h);
      return u.get(h) || u.set(h, function(R, T) {
        for (var E = 0, w = b.length, O = R; E < w - 1; ) {
          var k = b[E];
          if (k === "__proto__" || k === "constructor" || k === "prototype")
            return R;
          O = O[b[E++]];
        }
        O[b[E]] = T;
      });
    },
    getter: function(h, b) {
      var S = f(h);
      return d.get(h) || d.set(h, function(T) {
        for (var E = 0, w = S.length; E < w; )
          if (T != null || !b) T = T[S[E++]];
          else return;
        return T;
      });
    },
    join: function(h) {
      return h.reduce(function(b, S) {
        return b + (x(S) || e.test(S) ? "[" + S + "]" : (b ? "." : "") + S);
      }, "");
    },
    forEach: function(h, b, S) {
      m(Array.isArray(h) ? h : p(h), b, S);
    }
  };
  function f(h) {
    return o.get(h) || o.set(
      h,
      p(h).map(function(b) {
        return b.replace(i, "$2");
      })
    );
  }
  function p(h) {
    return h.match(t) || [""];
  }
  function m(h, b, S) {
    var R = h.length, T, E, w, O;
    for (E = 0; E < R; E++)
      T = h[E], T && (g(T) && (T = '"' + T + '"'), O = x(T), w = !O && /^\d+$/.test(T), b.call(S, T, O, w, E, h));
  }
  function x(h) {
    return typeof h == "string" && h && ["'", '"'].indexOf(h.charAt(0)) !== -1;
  }
  function y(h) {
    return h.match(r) && !h.match(e);
  }
  function _(h) {
    return n.test(h);
  }
  function g(h) {
    return !x(h) && (y(h) || _(h));
  }
  return ve;
}
var Z = Vt(), we, Me;
function Lt() {
  if (Me) return we;
  Me = 1;
  const s = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (f) => f.match(s) || [], e = (f) => f[0].toUpperCase() + f.slice(1), r = (f, p) => t(f).join(p).toLowerCase(), n = (f) => t(f).reduce(
    (p, m) => `${p}${p ? m[0].toUpperCase() + m.slice(1).toLowerCase() : m.toLowerCase()}`,
    ""
  );
  return we = {
    words: t,
    upperFirst: e,
    camelCase: n,
    pascalCase: (f) => e(n(f)),
    snakeCase: (f) => r(f, "_"),
    kebabCase: (f) => r(f, "-"),
    sentenceCase: (f) => e(r(f, " ")),
    titleCase: (f) => t(f).map(e).join(" ")
  }, we;
}
var Ee = Lt(), oe = { exports: {} }, Ve;
function Ut() {
  if (Ve) return oe.exports;
  Ve = 1, oe.exports = function(n) {
    return s(t(n), n);
  }, oe.exports.array = s;
  function s(n, i) {
    var a = n.length, o = new Array(a), u = {}, d = a, f = e(i), p = r(n);
    for (i.forEach(function(x) {
      if (!p.has(x[0]) || !p.has(x[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); d--; )
      u[d] || m(n[d], d, /* @__PURE__ */ new Set());
    return o;
    function m(x, y, _) {
      if (_.has(x)) {
        var g;
        try {
          g = ", node was:" + JSON.stringify(x);
        } catch {
          g = "";
        }
        throw new Error("Cyclic dependency" + g);
      }
      if (!p.has(x))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(x));
      if (!u[y]) {
        u[y] = !0;
        var h = f.get(x) || /* @__PURE__ */ new Set();
        if (h = Array.from(h), y = h.length) {
          _.add(x);
          do {
            var b = h[--y];
            m(b, p.get(b), _);
          } while (y);
          _.delete(x);
        }
        o[--a] = x;
      }
    }
  }
  function t(n) {
    for (var i = /* @__PURE__ */ new Set(), a = 0, o = n.length; a < o; a++) {
      var u = n[a];
      i.add(u[0]), i.add(u[1]);
    }
    return Array.from(i);
  }
  function e(n) {
    for (var i = /* @__PURE__ */ new Map(), a = 0, o = n.length; a < o; a++) {
      var u = n[a];
      i.has(u[0]) || i.set(u[0], /* @__PURE__ */ new Set()), i.has(u[1]) || i.set(u[1], /* @__PURE__ */ new Set()), i.get(u[0]).add(u[1]);
    }
    return i;
  }
  function r(n) {
    for (var i = /* @__PURE__ */ new Map(), a = 0, o = n.length; a < o; a++)
      i.set(n[a], a);
    return i;
  }
  return oe.exports;
}
var qt = Ut();
const Yt = /* @__PURE__ */ At(qt), Zt = Object.prototype.toString, Wt = Error.prototype.toString, Gt = RegExp.prototype.toString, Bt = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Jt = /^Symbol\((.*)\)(.*)$/;
function Xt(s) {
  return s != +s ? "NaN" : s === 0 && 1 / s < 0 ? "-0" : "" + s;
}
function Le(s, t = !1) {
  if (s == null || s === !0 || s === !1) return "" + s;
  const e = typeof s;
  if (e === "number") return Xt(s);
  if (e === "string") return t ? `"${s}"` : s;
  if (e === "function") return "[Function " + (s.name || "anonymous") + "]";
  if (e === "symbol") return Bt.call(s).replace(Jt, "Symbol($1)");
  const r = Zt.call(s).slice(8, -1);
  return r === "Date" ? isNaN(s.getTime()) ? "" + s : s.toISOString(s) : r === "Error" || s instanceof Error ? "[" + Wt.call(s) + "]" : r === "RegExp" ? Gt.call(s) : null;
}
function U(s, t) {
  let e = Le(s, t);
  return e !== null ? e : JSON.stringify(s, function(r, n) {
    let i = Le(this[r], t);
    return i !== null ? i : n;
  }, 2);
}
function Je(s) {
  return s == null ? [] : [].concat(s);
}
let Xe, He, Ke, Ht = /\$\{\s*(\w+)\s*\}/g;
Xe = Symbol.toStringTag;
class Ue {
  constructor(t, e, r, n) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Xe] = "Error", this.name = "ValidationError", this.value = e, this.path = r, this.type = n, this.errors = [], this.inner = [], Je(t).forEach((i) => {
      if (D.isError(i)) {
        this.errors.push(...i.errors);
        const a = i.inner.length ? i.inner : [i];
        this.inner.push(...a);
      } else
        this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
He = Symbol.hasInstance;
Ke = Symbol.toStringTag;
class D extends Error {
  static formatError(t, e) {
    const r = e.label || e.path || "this";
    return e = Object.assign({}, e, {
      path: r,
      originalPath: e.path
    }), typeof t == "string" ? t.replace(Ht, (n, i) => U(e[i])) : typeof t == "function" ? t(e) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, e, r, n, i) {
    const a = new Ue(t, e, r, n);
    if (i)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Ke] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, D);
  }
  static [He](t) {
    return Ue[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
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
    const n = r != null && r !== e ? ` (cast from the value \`${U(r, !0)}\`).` : ".";
    return t !== "mixed" ? `${s} must be a \`${t}\` type, but the final value was: \`${U(e, !0)}\`` + n : `${s} must match the configured type. The validated value was: \`${U(e, !0)}\`` + n;
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
}, Kt = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, _e = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Qt = {
  isValue: "${path} field must be ${value}"
}, ue = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, er = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, tr = {
  notType: (s) => {
    const {
      path: t,
      value: e,
      spec: r
    } = s, n = r.types.length;
    if (Array.isArray(e)) {
      if (e.length < n) return `${t} tuple value has too few items, expected a length of ${n} but got ${e.length} for value: \`${U(e, !0)}\``;
      if (e.length > n) return `${t} tuple value has too many items, expected a length of ${n} but got ${e.length} for value: \`${U(e, !0)}\``;
    }
    return D.formatError(I.notType, s);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: I,
  string: P,
  number: Kt,
  date: _e,
  object: ue,
  array: er,
  boolean: Qt,
  tuple: tr
});
const Oe = (s) => s && s.__isYupSchema__;
class de {
  static fromOptions(t, e) {
    if (!e.then && !e.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: n,
      otherwise: i
    } = e, a = typeof r == "function" ? r : (...o) => o.every((u) => u === r);
    return new de(t, (o, u) => {
      var d;
      let f = a(...o) ? n : i;
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
    if (!Oe(n)) throw new TypeError("conditions must return a schema object");
    return n.resolve(e);
  }
}
const le = {
  context: "$",
  value: "."
};
class W {
  constructor(t, e = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === le.context, this.isValue = this.key[0] === le.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? le.context : this.isValue ? le.value : "";
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
  }, o, u) {
    const {
      name: d,
      test: f,
      params: p,
      message: m,
      skipAbsent: x
    } = s;
    let {
      parent: y,
      context: _,
      abortEarly: g = a.spec.abortEarly,
      disableStackTrace: h = a.spec.disableStackTrace
    } = n;
    const b = {
      value: e,
      parent: y,
      context: _
    };
    function S(F = {}) {
      const L = Qe(Object.assign({
        value: e,
        originalValue: i,
        label: a.spec.label,
        path: F.path || r,
        spec: a.spec,
        disableStackTrace: F.disableStackTrace || h
      }, p, F.params), b), K = new D(D.formatError(F.message || m, L), e, L.path, F.type || d, L.disableStackTrace);
      return K.params = L, K;
    }
    const R = g ? o : u;
    let T = {
      path: r,
      parent: y,
      type: d,
      from: n.from,
      createError: S,
      resolve(F) {
        return et(F, b);
      },
      options: n,
      originalValue: i,
      schema: a
    };
    const E = (F) => {
      D.isError(F) ? R(F) : F ? u(null) : R(S());
    }, w = (F) => {
      D.isError(F) ? R(F) : o(F);
    };
    if (x && Y(e))
      return E(!0);
    let k;
    try {
      var V;
      if (k = f.call(T, e, T), typeof ((V = k) == null ? void 0 : V.then) == "function") {
        if (n.sync)
          throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(k).then(E, w);
      }
    } catch (F) {
      w(F);
      return;
    }
    E(k);
  }
  return t.OPTIONS = s, t;
}
function Qe(s, t) {
  if (!s) return s;
  for (const e of Object.keys(s))
    s[e] = et(s[e], t);
  return s;
}
function et(s, t) {
  return W.isRef(s) ? s.getValue(t.value, t.parent, t.context) : s;
}
function rr(s, t, e, r = e) {
  let n, i, a;
  return t ? (Z.forEach(t, (o, u, d) => {
    let f = u ? o.slice(1, o.length - 1) : o;
    s = s.resolve({
      context: r,
      parent: n,
      value: e
    });
    let p = s.type === "tuple", m = d ? parseInt(f, 10) : 0;
    if (s.innerType || p) {
      if (p && !d) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (e && m >= e.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);
      n = e, e = e && e[m], s = p ? s.spec.types[m] : s.innerType;
    }
    if (!d) {
      if (!s.fields || !s.fields[f]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${s.type}")`);
      n = e, e = e && e[f], s = s.fields[f];
    }
    i = f, a = u ? "[" + o + "]" : "." + o;
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
class he extends Set {
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
    return new he(this.values());
  }
  merge(t, e) {
    const r = this.clone();
    return t.forEach((n) => r.add(n)), e.forEach((n) => r.delete(n)), r;
  }
}
function X(s, t = /* @__PURE__ */ new Map()) {
  if (Oe(s) || !s || typeof s != "object") return s;
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
function nr(s) {
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
function sr(s, t) {
  const e = t ? `${t}.${s.path}` : s.path;
  return s.errors.map((r) => ({
    message: r,
    path: nr(e)
  }));
}
function tt(s, t) {
  var e;
  if (!((e = s.inner) != null && e.length) && s.errors.length)
    return sr(s, t);
  const r = t ? `${t}.${s.path}` : s.path;
  return s.inner.flatMap((n) => tt(n, r));
}
class z {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new he(), this._blacklist = new he(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
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
      let a = U(t), o = U(i);
      throw new TypeError(`The value of ${e.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
` + (o !== a ? `result of cast: ${o}` : ""));
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
      originalValue: o,
      path: u,
      options: d
    } = t, f = (_) => {
      n || (n = !0, e(_, a));
    }, p = (_) => {
      n || (n = !0, r(_, a));
    }, m = i.length, x = [];
    if (!m) return p([]);
    let y = {
      value: a,
      originalValue: o,
      path: u,
      options: d,
      schema: this
    };
    for (let _ = 0; _ < i.length; _++) {
      const g = i[_];
      g(y, f, function(b) {
        b && (Array.isArray(b) ? x.push(...b) : x.push(b)), --m <= 0 && p(x);
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
      path: u || o.includes(".") ? `${n || ""}[${u ? o : `"${o}"`}]` : (n ? `${n}.` : "") + t
    });
    return (p, m, x) => this.resolve(f)._validate(d, f, m, x);
  }
  validate(t, e) {
    var r;
    let n = this.resolve(Object.assign({}, e, {
      value: t
    })), i = (r = e?.disableStackTrace) != null ? r : n.spec.disableStackTrace;
    return new Promise((a, o) => n._validate(t, e, (u, d) => {
      D.isError(u) && (u.value = d), o(u);
    }, (u, d) => {
      u.length ? o(new D(u, d, void 0, void 0, i)) : a(d);
    }));
  }
  validateSync(t, e) {
    var r;
    let n = this.resolve(Object.assign({}, e, {
      value: t
    })), i, a = (r = e?.disableStackTrace) != null ? r : n.spec.disableStackTrace;
    return n._validate(t, Object.assign({}, e, {
      sync: !0
    }), (o, u) => {
      throw D.isError(o) && (o.value = u), o;
    }, (o, u) => {
      if (o.length) throw new D(o, t, void 0, void 0, a);
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
    let r = this.clone(), n = Je(t).map((i) => new W(i));
    return n.forEach((i) => {
      i.isSibling && r.deps.push(i.key);
    }), r.conditions.push(typeof e == "function" ? new de(n, e) : de.fromOptions(n, e)), r;
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
        const d = u.OPTIONS.params && t ? Qe(Object.assign({}, u.OPTIONS.params), t) : u.OPTIONS.params;
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
              issues: tt(n)
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
  } = rr(this, t, e, r.context);
  return a[s](n && n[i], Object.assign({}, r, {
    parent: n,
    path: t
  }));
};
for (const s of ["equals", "is"]) z.prototype[s] = z.prototype.oneOf;
for (const s of ["not", "nope"]) z.prototype[s] = z.prototype.notOneOf;
const ir = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function ar(s) {
  const t = Se(s);
  if (!t) return Date.parse ? Date.parse(s) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let e = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (e = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (e = 0 - e)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + e, t.second, t.millisecond);
}
function Se(s) {
  var t, e;
  const r = ir.exec(s);
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
let or = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), lr = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), ur = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, cr = "^\\d{4}-\\d{2}-\\d{2}", fr = "\\d{2}:\\d{2}:\\d{2}", dr = "(([+-]\\d{2}(:?\\d{2})?)|Z)", hr = new RegExp(`${cr}T${fr}(\\.\\d+)?${dr}$`), pr = (s) => Y(s) || s === s.trim(), mr = {}.toString();
function ce() {
  return new rt();
}
class rt extends z {
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
        return r === mr ? t : r;
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
    return this.matches(or, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = P.url) {
    return this.matches(lr, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = P.uuid) {
    return this.matches(ur, {
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
    } = t : e = t), this.matches(hr, {
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
        const a = Se(i);
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
        const a = Se(i);
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
      test: pr
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
ce.prototype = rt.prototype;
let xr = /* @__PURE__ */ new Date(""), br = (s) => Object.prototype.toString.call(s) === "[object Date]";
class je extends z {
  constructor() {
    super({
      type: "date",
      check(t) {
        return br(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, e) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = ar(t), isNaN(t) ? je.INVALID_DATE : new Date(t)));
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
  min(t, e = _e.min) {
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
  max(t, e = _e.max) {
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
je.INVALID_DATE = xr;
function gr(s, t = []) {
  let e = [], r = /* @__PURE__ */ new Set(), n = new Set(t.map(([a, o]) => `${a}-${o}`));
  function i(a, o) {
    let u = Z.split(a)[0];
    r.add(u), n.has(`${o}-${u}`) || e.push([o, u]);
  }
  for (const a of Object.keys(s)) {
    let o = s[a];
    r.add(a), W.isRef(o) && o.isSibling ? i(o.path, a) : Oe(o) && "deps" in o && o.deps.forEach((u) => i(u, a));
  }
  return Yt.array(Array.from(r), e).reverse();
}
function qe(s, t) {
  let e = 1 / 0;
  return s.some((r, n) => {
    var i;
    if ((i = t.path) != null && i.includes(r))
      return e = n, !0;
  }), e;
}
function nt(s) {
  return (t, e) => qe(s, t) - qe(s, e);
}
const yr = (s, t, e) => {
  if (typeof s != "string")
    return s;
  let r = s;
  try {
    r = JSON.parse(s);
  } catch {
  }
  return e.isType(r) ? r : s;
};
function fe(s) {
  if ("fields" in s) {
    const t = {};
    for (const [e, r] of Object.entries(s.fields))
      t[e] = fe(r);
    return s.setFields(t);
  }
  if (s.type === "array") {
    const t = s.optional();
    return t.innerType && (t.innerType = fe(t.innerType)), t;
  }
  return s.type === "tuple" ? s.optional().clone({
    types: s.spec.types.map(fe)
  }) : "optional" in s ? s.optional() : s;
}
const vr = (s, t) => {
  const e = [...Z.normalizePath(t)];
  if (e.length === 1) return e[0] in s;
  let r = e.pop(), n = Z.getter(Z.join(e), !0)(s);
  return !!(n && r in n);
};
let Ye = (s) => Object.prototype.toString.call(s) === "[object Object]";
function Ze(s, t) {
  let e = Object.keys(s.fields);
  return Object.keys(t).filter((r) => e.indexOf(r) === -1);
}
const wr = nt([]);
function st(s) {
  return new it(s);
}
class it extends z {
  constructor(t) {
    super({
      type: "object",
      check(e) {
        return Ye(e) || typeof e == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = wr, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, e = {}) {
    var r;
    let n = super._cast(t, e);
    if (n === void 0) return this.getDefault(e);
    if (!this._typeCheck(n)) return n;
    let i = this.fields, a = (r = e.stripUnknown) != null ? r : this.spec.noUnknown, o = [].concat(this._nodes, Object.keys(n).filter((p) => !this._nodes.includes(p))), u = {}, d = Object.assign({}, e, {
      parent: u,
      __validating: e.__validating || !1
    }), f = !1;
    for (const p of o) {
      let m = i[p], x = p in n, y = n[p];
      if (m) {
        let _;
        d.path = (e.path ? `${e.path}.` : "") + p, m = m.resolve({
          value: y,
          context: e.context,
          parent: u
        });
        let g = m instanceof z ? m.spec : void 0, h = g?.strict;
        if (g != null && g.strip) {
          f = f || p in n;
          continue;
        }
        _ = !e.__validating || !h ? m.cast(y, d) : y, _ !== void 0 && (u[p] = _);
      } else x && !a && (u[p] = y);
      (x !== p in u || u[p] !== y) && (f = !0);
    }
    return f ? u : n;
  }
  _validate(t, e = {}, r, n) {
    let {
      from: i = [],
      originalValue: a = t,
      recursive: o = this.spec.recursive
    } = e;
    e.from = [{
      schema: this,
      value: a
    }, ...i], e.__validating = !0, e.originalValue = a, super._validate(t, e, r, (u, d) => {
      if (!o || !Ye(d)) {
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
    return r.fields = t, r._nodes = gr(t, e), r._sortErrors = nt(Object.keys(t)), e && (r._excludedEdges = e), r;
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
    return fe(this);
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
      return vr(i, t) && (a = Object.assign({}, i), r || delete a[t], a[e] = n(i)), a;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(yr);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || ue.exact,
      test(e) {
        if (e == null) return !0;
        const r = Ze(this.schema, e);
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
  noUnknown(t = !0, e = ue.noUnknown) {
    typeof t != "boolean" && (e = t, t = !0);
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: e,
      test(n) {
        if (n == null) return !0;
        const i = Ze(this.schema, n);
        return !t || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return r.spec.noUnknown = t, r;
  }
  unknown(t = !0, e = ue.noUnknown) {
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
    return this.transformKeys(Ee.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Ee.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Ee.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const e = (t ? this.resolve(t) : this).clone(), r = super.describe(t);
    r.fields = {};
    for (const [i, a] of Object.entries(e.fields)) {
      var n;
      let o = t;
      (n = o) != null && n.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[i]
      })), r.fields[i] = a.describe(o);
    }
    return r;
  }
}
st.prototype = it.prototype;
const Cr = ({
  onSubmit: s,
  isSubmitting: t = !1,
  error: e,
  logo: r,
  title: n = "Sign in to your account",
  loginField: i = { name: "email", label: "Email Address", autoComplete: "email" }
}) => {
  const a = st({
    [i.name]: ce().required(`${i.label} is required`).test(
      "is-email-if-required",
      "Enter a valid email",
      (o) => i.name === "email" ? ce().email().isValidSync(o) : !0
    ),
    password: ce().required("Password is required")
  });
  return /* @__PURE__ */ c.jsx(vt, { component: "main", maxWidth: "xs", children: /* @__PURE__ */ c.jsxs(
    me,
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
        e && /* @__PURE__ */ c.jsx(Be, { severity: "error", sx: { width: "100%", mt: 2 }, children: e.message }),
        /* @__PURE__ */ c.jsx(N, { sx: { mt: 1, width: "100%" }, children: /* @__PURE__ */ c.jsxs(
          Mt,
          {
            onSubmit: s,
            validationSchema: a,
            noValidate: !0,
            children: [
              /* @__PURE__ */ c.jsx(
                Ie,
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
                Ie,
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
                Te,
                {
                  type: "submit",
                  fullWidth: !0,
                  variant: "contained",
                  sx: { mt: 3, mb: 2 },
                  disabled: t,
                  children: t ? /* @__PURE__ */ c.jsx(xe, { size: 24 }) : "Sign In"
                }
              )
            ]
          }
        ) })
      ]
    }
  ) });
}, J = 240, Ar = ({
  navItems: s = [],
  title: t = "Dashboard",
  drawerHeader: e,
  headerActions: r,
  children: n
}) => {
  const [i, a] = A(!1), o = () => {
    a(!i);
  }, u = /* @__PURE__ */ c.jsxs(N, { children: [
    e ? /* @__PURE__ */ c.jsx(H, { sx: { justifyContent: "center" }, children: e }) : null,
    /* @__PURE__ */ c.jsx(wt, { children: s.map((d, f) => /* @__PURE__ */ c.jsx(Et, { disablePadding: !0, children: /* @__PURE__ */ c.jsxs(_t, { component: d.component || "a", href: d.path, children: [
      d.icon && /* @__PURE__ */ c.jsx(St, { children: d.icon }),
      /* @__PURE__ */ c.jsx(Tt, { primary: d.text })
    ] }) }, f)) })
  ] });
  return /* @__PURE__ */ c.jsxs(N, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ c.jsx(Ot, {}),
    /* @__PURE__ */ c.jsx(
      jt,
      {
        position: "fixed",
        sx: {
          width: { sm: `calc(100% - ${J}px)` },
          ml: { sm: `${J}px` }
        },
        children: /* @__PURE__ */ c.jsxs(H, { children: [
          /* @__PURE__ */ c.jsx(
            Ft,
            {
              color: "inherit",
              "aria-label": "open drawer",
              edge: "start",
              onClick: o,
              sx: { mr: 2, display: { sm: "none" } },
              children: /* @__PURE__ */ c.jsx(Ct, {})
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
            Re,
            {
              variant: "temporary",
              open: i,
              onClose: o,
              ModalProps: { keepMounted: !0 },
              sx: {
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: J }
              },
              children: u
            }
          ),
          /* @__PURE__ */ c.jsx(
            Re,
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
  jr as AutocompleteField,
  Ar as DashboardLayout,
  zt as DataTable,
  Or as FileUploadField,
  Mt as Form,
  se as FormContext,
  Cr as LoginPage,
  $r as ResourceFormPage,
  kr as ResourceListPage,
  Tr as StatCard,
  Fr as SwitchField,
  Ie as TextField
};
