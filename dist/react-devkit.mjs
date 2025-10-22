import ut, { createContext as ct, useState as R, useCallback as Ge, useContext as xe, useEffect as ne } from "react";
import { Paper as be, Box as N, Typography as q, Toolbar as H, TableContainer as ft, Table as dt, TableHead as ht, TableRow as Q, TableCell as ee, TableSortLabel as pt, TableBody as mt, TablePagination as xt, CircularProgress as se, TextField as Be, Avatar as bt, Button as ie, Autocomplete as gt, FormControlLabel as yt, Switch as vt, Alert as Se, Container as wt, List as Et, ListItem as _t, ListItemButton as St, ListItemIcon as Tt, ListItemText as jt, CssBaseline as Ot, AppBar as Ft, IconButton as kt, Drawer as De } from "@mui/material";
import { ImageNotSupported as $t, Add as Ct, Menu as At } from "@mui/icons-material";
function Rt(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var le = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Dt() {
  if (Pe) return te;
  Pe = 1;
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
var Ne;
function Pt() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === F ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case y:
          return "Fragment";
        case b:
          return "Profiler";
        case h:
          return "StrictMode";
        case _:
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
          case S:
            return "Portal";
          case $:
            return l.displayName || "Context";
          case E:
            return (l._context.displayName || "Context") + ".Consumer";
          case T:
            var v = l.render;
            return l = l.displayName, l || (l = v.displayName || v.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case j:
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
        var O = v.error, C = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return O.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), t(l);
      }
    }
    function r(l) {
      if (l === y) return "<>";
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
      function O() {
        ke || (ke = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: O,
        configurable: !0
      });
    }
    function u() {
      var l = s(this.type);
      return $e[l] || ($e[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function f(l, v, O, C, oe, ye) {
      var A = O.ref;
      return l = {
        $$typeof: g,
        type: l,
        key: v,
        props: O,
        _owner: C
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(l, "ref", {
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
        value: oe
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ye
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function d(l, v, O, C, oe, ye) {
      var A = v.children;
      if (A !== void 0)
        if (C)
          if (ot(A)) {
            for (C = 0; C < A.length; C++)
              p(A[C]);
            Object.freeze && Object.freeze(A);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(A);
      if (K.call(v, "key")) {
        A = s(l);
        var G = Object.keys(v).filter(function(lt) {
          return lt !== "key";
        });
        C = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", Re[A + C] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          A,
          G,
          A
        ), Re[A + C] = !0);
      }
      if (A = null, O !== void 0 && (e(O), A = "" + O), a(v) && (e(v.key), A = "" + v.key), "key" in v) {
        O = {};
        for (var ve in v)
          ve !== "key" && (O[ve] = v[ve]);
      } else O = v;
      return A && o(
        O,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), f(
        l,
        A,
        O,
        n(),
        oe,
        ye
      );
    }
    function p(l) {
      m(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === k && (l._payload.status === "fulfilled" ? m(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function m(l) {
      return typeof l == "object" && l !== null && l.$$typeof === g;
    }
    var x = ut, g = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), L = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, ot = Array.isArray, ge = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var ke, $e = {}, Ce = x.react_stack_bottom_frame.bind(
      x,
      i
    )(), Ae = ge(r(i)), Re = {};
    re.Fragment = y, re.jsx = function(l, v, O) {
      var C = 1e4 > L.recentlyCreatedOwnerStacks++;
      return d(
        l,
        v,
        O,
        !1,
        C ? Error("react-stack-top-frame") : Ce,
        C ? ge(r(l)) : Ae
      );
    }, re.jsxs = function(l, v, O) {
      var C = 1e4 > L.recentlyCreatedOwnerStacks++;
      return d(
        l,
        v,
        O,
        !0,
        C ? Error("react-stack-top-frame") : Ce,
        C ? ge(r(l)) : Ae
      );
    };
  })()), re;
}
var Ie;
function Nt() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? le.exports = Dt() : le.exports = Pt()), le.exports;
}
var c = Nt();
const Tr = ({ icon: s, title: t, value: e, color: r, sx: n, onClick: i }) => /* @__PURE__ */ c.jsxs(
  be,
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
), It = () => /* @__PURE__ */ c.jsx(N, { sx: { p: 4, textAlign: "center" }, children: /* @__PURE__ */ c.jsx(q, { color: "text.secondary", children: "No rows" }) }), zt = () => /* @__PURE__ */ c.jsx(N, { sx: { display: "flex", justifyContent: "center", alignItems: "center", p: 4 }, children: /* @__PURE__ */ c.jsx(se, {}) }), Mt = ({
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
  pageSize: f = 10,
  onPageSizeChange: d = () => {
  },
  pageSizeOptions: p = [5, 10, 25, 50],
  // Sorting
  sorting: m = !1,
  sortModel: x = [],
  onSortModelChange: g = () => {
  },
  // Customization
  slots: S = {},
  slotProps: y = {},
  sx: h
}) => {
  const {
    toolbar: b,
    noRowsOverlay: E = It,
    loadingOverlay: $ = zt
  } = S, T = (w) => {
    if (!m) return;
    const j = x.find((V) => V.field === w);
    let k;
    j ? j.sort === "asc" ? k = [{ field: w, sort: "desc" }] : k = [] : k = [{ field: w, sort: "asc" }], g(k);
  }, _ = x.length > 0 ? x[0] : null;
  return /* @__PURE__ */ c.jsxs(be, { sx: h, children: [
    b && /* @__PURE__ */ c.jsx(H, { children: /* @__PURE__ */ c.jsx(b, { ...y.toolbar || {} }) }),
    /* @__PURE__ */ c.jsx(ft, { children: /* @__PURE__ */ c.jsxs(dt, { stickyHeader: !0, children: [
      /* @__PURE__ */ c.jsx(ht, { children: /* @__PURE__ */ c.jsx(Q, { children: t.map((w) => /* @__PURE__ */ c.jsx(
        ee,
        {
          align: w.align || "inherit",
          width: w.width,
          sortDirection: _?.field === w.field ? _.sort : !1,
          children: w.sortable && m ? /* @__PURE__ */ c.jsx(
            pt,
            {
              active: _?.field === w.field,
              direction: _?.field === w.field ? _.sort : "asc",
              onClick: () => T(w.field),
              children: w.headerName
            }
          ) : w.headerName
        },
        w.field
      )) }) }),
      /* @__PURE__ */ c.jsx(mt, { children: r ? /* @__PURE__ */ c.jsx(Q, { children: /* @__PURE__ */ c.jsx(ee, { colSpan: t.length, sx: { border: "none" }, children: /* @__PURE__ */ c.jsx($, { ...y.loadingOverlay || {} }) }) }) : n ? /* @__PURE__ */ c.jsx(Q, { children: /* @__PURE__ */ c.jsx(ee, { colSpan: t.length, sx: { border: "none", textAlign: "center" }, children: /* @__PURE__ */ c.jsx(q, { color: "error", children: n.message || "An error occurred." }) }) }) : s.length === 0 ? /* @__PURE__ */ c.jsx(Q, { children: /* @__PURE__ */ c.jsx(ee, { colSpan: t.length, sx: { border: "none" }, children: /* @__PURE__ */ c.jsx(E, { ...y.noRowsOverlay || {} }) }) }) : s.map((w) => /* @__PURE__ */ c.jsx(Q, { hover: !0, children: t.map((j) => {
        const k = j.field.split(".").reduce((V, F) => V?.[F], w);
        return /* @__PURE__ */ c.jsx(ee, { align: j.align || "inherit", children: j.renderCell ? j.renderCell({ value: k, row: w, id: e(w) }) : k }, j.field);
      }) }, e(w))) })
    ] }) }),
    i && !n && /* @__PURE__ */ c.jsx(
      xt,
      {
        component: "div",
        count: a,
        page: o,
        onPageChange: (w, j) => u(j),
        rowsPerPage: f,
        onRowsPerPageChange: (w) => d(parseInt(w.target.value, 10)),
        rowsPerPageOptions: p
      }
    )
  ] });
}, ae = ct(null), Je = ({ initialValues: s = {}, onSubmit: t, validationSchema: e, children: r, ...n }) => {
  const [i, a] = R(s || {}), [o, u] = R({}), f = Ge((m, x) => {
    a((g) => ({
      ...g,
      [m]: x
    })), o[m] && u((g) => ({
      ...g,
      [m]: void 0
    }));
  }, [o]), d = async (m) => {
    m.preventDefault(), u({});
    try {
      e && await e.validate(i, { abortEarly: !1 }), t && t(i);
    } catch (x) {
      if (x.inner) {
        const g = x.inner.reduce((S, y) => (S[y.path] = y.message, S), {});
        u(g);
      }
    }
  }, p = {
    values: i,
    setFieldValue: f,
    errors: o
  };
  return /* @__PURE__ */ c.jsx(ae.Provider, { value: p, children: /* @__PURE__ */ c.jsx("form", { onSubmit: d, ...n, children: r }) });
}, ze = ({ name: s, label: t, ...e }) => {
  const r = xe(ae);
  if (!r)
    throw new Error("TextField must be used within a Form component");
  const { values: n, setFieldValue: i, errors: a } = r, o = a[s], u = (f) => {
    i(s, f.target.value);
  };
  return /* @__PURE__ */ c.jsx(
    Be,
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
}, jr = ({ name: s, label: t = "Upload File", initialPreview: e }) => {
  const r = xe(ae), [n, i] = R(e || null);
  if (!r)
    throw new Error("FileUploadField must be used within a Form component");
  const { setFieldValue: a, values: o } = r, u = o[s];
  ne(() => {
    e && i(e);
  }, [e]), ne(() => {
    u || i(e || null);
  }, [u, e]);
  const f = (d) => {
    const p = d.target.files[0];
    if (p) {
      a(s, p);
      const m = new FileReader();
      m.onloadend = () => {
        i(m.result);
      }, m.readAsDataURL(p);
    }
  };
  return /* @__PURE__ */ c.jsxs(N, { sx: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }, children: [
    /* @__PURE__ */ c.jsx(bt, { src: n, sx: { width: 100, height: 100 }, children: !n && /* @__PURE__ */ c.jsx($t, { sx: { width: "70%", height: "70%" } }) }),
    /* @__PURE__ */ c.jsxs(ie, { variant: "outlined", component: "label", children: [
      t,
      /* @__PURE__ */ c.jsx("input", { type: "file", hidden: !0, accept: "image/*", onChange: f, "data-testid": "file-upload-input" })
    ] })
  ] });
}, Or = ({
  name: s,
  label: t,
  fetchOptions: e,
  getOptionLabel: r = (a) => a.label,
  multiple: n = !1,
  ...i
}) => {
  const a = xe(ae);
  if (!a)
    throw new Error("AutocompleteField must be used within a Form component");
  const { values: o, setFieldValue: u, errors: f } = a, [d, p] = R([]), [m, x] = R(!1), [g, S] = R("");
  ne(() => {
    let b = !0;
    return x(!0), e(g).then((E) => {
      b && p(E || []);
    }).catch(() => {
      b && p([]);
    }).finally(() => {
      b && x(!1);
    }), () => {
      b = !1;
    };
  }, [g, e]);
  const y = (b, E) => {
    u(s, E);
  }, h = f?.[s];
  return /* @__PURE__ */ c.jsx(
    gt,
    {
      multiple: n,
      options: d,
      loading: m,
      getOptionLabel: r,
      value: o[s] || (n ? [] : null),
      onChange: y,
      onInputChange: (b, E) => {
        S(E);
      },
      renderInput: (b) => /* @__PURE__ */ c.jsx(
        Be,
        {
          ...b,
          label: t,
          error: !!h,
          helperText: h,
          InputProps: {
            ...b.InputProps,
            endAdornment: /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              m ? /* @__PURE__ */ c.jsx(se, { color: "inherit", size: 20 }) : null,
              b.InputProps.endAdornment
            ] })
          }
        }
      ),
      ...i
    }
  );
}, Fr = ({ name: s, label: t, ...e }) => {
  const r = xe(ae);
  if (!r)
    throw new Error("SwitchField must be used within a Form component");
  const { values: n, setFieldValue: i } = r, a = (o) => {
    i(s, o.target.checked);
  };
  return /* @__PURE__ */ c.jsx(
    yt,
    {
      control: /* @__PURE__ */ c.jsx(
        vt,
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
  const [n, i] = R([]), [a, o] = R(!0), [u, f] = R(null), [d, p] = R(0), [m, x] = R(0), [g, S] = R(10), [y, h] = R([]), b = Ge(async () => {
    o(!0), f(null);
    try {
      const _ = y.length > 0 ? y[0].field : void 0, w = y.length > 0 ? y[0].sort : void 0, j = await e.list({
        page: m + 1,
        // API might be 1-based
        per_page: g,
        sort: _,
        order: w
      });
      i(j.data), p(j.meta.total);
    } catch (_) {
      f(_);
    } finally {
      o(!1);
    }
  }, [e, m, g, y]);
  ne(() => {
    b();
  }, [b]);
  const E = (_) => {
    x(_);
  }, $ = (_) => {
    S(_), x(0);
  }, T = (_) => {
    h(_), x(0);
  };
  return /* @__PURE__ */ c.jsxs(N, { children: [
    /* @__PURE__ */ c.jsxs(H, { sx: { p: "0 !important", mb: 2 }, children: [
      /* @__PURE__ */ c.jsx(q, { variant: "h4", component: "h1", sx: { flexGrow: 1 }, children: s }),
      r && /* @__PURE__ */ c.jsx(
        ie,
        {
          variant: "contained",
          startIcon: /* @__PURE__ */ c.jsx(Ct, {}),
          component: "a",
          href: r,
          children: "Create New"
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Mt,
      {
        rows: n,
        columns: t,
        loading: a,
        error: u,
        pagination: !0,
        rowCount: d,
        page: m,
        onPageChange: E,
        pageSize: g,
        onPageSizeChange: $,
        sorting: !0,
        sortModel: y,
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
  },
  onCancel: i,
  submitText: a = "Save",
  cancelText: o = "Cancel"
}) => {
  const [u, f] = R(null), [d, p] = R(!1), [m, x] = R(null), [g, S] = R(!1), y = t != null;
  ne(() => {
    y && (p(!0), x(null), e.getOne(t).then((E) => f(E)).catch((E) => x(E)).finally(() => p(!1)));
  }, [e, t, y]);
  const h = async (E) => {
    S(!0), x(null);
    try {
      const $ = y ? await e.update(t, E) : await e.create(E);
      n($.data);
    } catch ($) {
      x($), S(!1);
    }
  }, b = y ? `Edit ${s}` : `Create ${s}`;
  return d ? /* @__PURE__ */ c.jsx(se, {}) : m && !g ? /* @__PURE__ */ c.jsx(Se, { severity: "error", children: m.message || "Failed to load resource data." }) : /* @__PURE__ */ c.jsxs(N, { children: [
    /* @__PURE__ */ c.jsx(H, { sx: { p: "0 !important", mb: 2 }, children: /* @__PURE__ */ c.jsx(q, { variant: "h4", component: "h1", children: b }) }),
    /* @__PURE__ */ c.jsx(be, { sx: { p: 3 }, children: (!y || u) && /* @__PURE__ */ c.jsxs(Je, { onSubmit: h, initialValues: u, children: [
      /* @__PURE__ */ c.jsx(r, {}),
      m && g && /* @__PURE__ */ c.jsx(Se, { severity: "error", sx: { mt: 2 }, children: m.message || "An error occurred during submission." }),
      /* @__PURE__ */ c.jsxs(N, { sx: { mt: 3, display: "flex", gap: 2 }, children: [
        /* @__PURE__ */ c.jsx(
          ie,
          {
            type: "submit",
            variant: "contained",
            disabled: g,
            children: g ? /* @__PURE__ */ c.jsx(se, { size: 24 }) : a
          }
        ),
        i && /* @__PURE__ */ c.jsx(ie, { variant: "outlined", onClick: i, disabled: g, children: o })
      ] })
    ] }) })
  ] });
};
var we, Me;
function Vt() {
  if (Me) return we;
  Me = 1;
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
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, e = /^\d+$/, r = /^\d/, n = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, i = /^\s*(['"]?)(.*?)(\1)\s*$/, a = 512, o = new s(a), u = new s(a), f = new s(a);
  we = {
    Cache: s,
    split: p,
    normalizePath: d,
    setter: function(h) {
      var b = d(h);
      return u.get(h) || u.set(h, function($, T) {
        for (var _ = 0, w = b.length, j = $; _ < w - 1; ) {
          var k = b[_];
          if (k === "__proto__" || k === "constructor" || k === "prototype")
            return $;
          j = j[b[_++]];
        }
        j[b[_]] = T;
      });
    },
    getter: function(h, b) {
      var E = d(h);
      return f.get(h) || f.set(h, function(T) {
        for (var _ = 0, w = E.length; _ < w; )
          if (T != null || !b) T = T[E[_++]];
          else return;
        return T;
      });
    },
    join: function(h) {
      return h.reduce(function(b, E) {
        return b + (x(E) || e.test(E) ? "[" + E + "]" : (b ? "." : "") + E);
      }, "");
    },
    forEach: function(h, b, E) {
      m(Array.isArray(h) ? h : p(h), b, E);
    }
  };
  function d(h) {
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
  function m(h, b, E) {
    var $ = h.length, T, _, w, j;
    for (_ = 0; _ < $; _++)
      T = h[_], T && (y(T) && (T = '"' + T + '"'), j = x(T), w = !j && /^\d+$/.test(T), b.call(E, T, j, w, _, h));
  }
  function x(h) {
    return typeof h == "string" && h && ["'", '"'].indexOf(h.charAt(0)) !== -1;
  }
  function g(h) {
    return h.match(r) && !h.match(e);
  }
  function S(h) {
    return n.test(h);
  }
  function y(h) {
    return !x(h) && (g(h) || S(h));
  }
  return we;
}
var Z = Vt(), Ee, Ve;
function Lt() {
  if (Ve) return Ee;
  Ve = 1;
  const s = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (d) => d.match(s) || [], e = (d) => d[0].toUpperCase() + d.slice(1), r = (d, p) => t(d).join(p).toLowerCase(), n = (d) => t(d).reduce(
    (p, m) => `${p}${p ? m[0].toUpperCase() + m.slice(1).toLowerCase() : m.toLowerCase()}`,
    ""
  );
  return Ee = {
    words: t,
    upperFirst: e,
    camelCase: n,
    pascalCase: (d) => e(n(d)),
    snakeCase: (d) => r(d, "_"),
    kebabCase: (d) => r(d, "-"),
    sentenceCase: (d) => e(r(d, " ")),
    titleCase: (d) => t(d).map(e).join(" ")
  }, Ee;
}
var _e = Lt(), ue = { exports: {} }, Le;
function Ut() {
  if (Le) return ue.exports;
  Le = 1, ue.exports = function(n) {
    return s(t(n), n);
  }, ue.exports.array = s;
  function s(n, i) {
    var a = n.length, o = new Array(a), u = {}, f = a, d = e(i), p = r(n);
    for (i.forEach(function(x) {
      if (!p.has(x[0]) || !p.has(x[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); f--; )
      u[f] || m(n[f], f, /* @__PURE__ */ new Set());
    return o;
    function m(x, g, S) {
      if (S.has(x)) {
        var y;
        try {
          y = ", node was:" + JSON.stringify(x);
        } catch {
          y = "";
        }
        throw new Error("Cyclic dependency" + y);
      }
      if (!p.has(x))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(x));
      if (!u[g]) {
        u[g] = !0;
        var h = d.get(x) || /* @__PURE__ */ new Set();
        if (h = Array.from(h), g = h.length) {
          S.add(x);
          do {
            var b = h[--g];
            m(b, p.get(b), S);
          } while (g);
          S.delete(x);
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
  return ue.exports;
}
var qt = Ut();
const Yt = /* @__PURE__ */ Rt(qt), Zt = Object.prototype.toString, Wt = Error.prototype.toString, Gt = RegExp.prototype.toString, Bt = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Jt = /^Symbol\((.*)\)(.*)$/;
function Xt(s) {
  return s != +s ? "NaN" : s === 0 && 1 / s < 0 ? "-0" : "" + s;
}
function Ue(s, t = !1) {
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
  let e = Ue(s, t);
  return e !== null ? e : JSON.stringify(s, function(r, n) {
    let i = Ue(this[r], t);
    return i !== null ? i : n;
  }, 2);
}
function Xe(s) {
  return s == null ? [] : [].concat(s);
}
let He, Ke, Qe, Ht = /\$\{\s*(\w+)\s*\}/g;
He = Symbol.toStringTag;
class qe {
  constructor(t, e, r, n) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[He] = "Error", this.name = "ValidationError", this.value = e, this.path = r, this.type = n, this.errors = [], this.inner = [], Xe(t).forEach((i) => {
      if (D.isError(i)) {
        this.errors.push(...i.errors);
        const a = i.inner.length ? i.inner : [i];
        this.inner.push(...a);
      } else
        this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Ke = Symbol.hasInstance;
Qe = Symbol.toStringTag;
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
    const a = new qe(t, e, r, n);
    if (i)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Qe] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, D);
  }
  static [Ke](t) {
    return qe[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
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
}, Te = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Qt = {
  isValue: "${path} field must be ${value}"
}, fe = {
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
  date: Te,
  object: fe,
  array: er,
  boolean: Qt,
  tuple: tr
});
const Oe = (s) => s && s.__isYupSchema__;
class pe {
  static fromOptions(t, e) {
    if (!e.then && !e.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: n,
      otherwise: i
    } = e, a = typeof r == "function" ? r : (...o) => o.every((u) => u === r);
    return new pe(t, (o, u) => {
      var f;
      let d = a(...o) ? n : i;
      return (f = d?.(u)) != null ? f : u;
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
const ce = {
  context: "$",
  value: "."
};
class W {
  constructor(t, e = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === ce.context, this.isValue = this.key[0] === ce.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? ce.context : this.isValue ? ce.value : "";
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
      name: f,
      test: d,
      params: p,
      message: m,
      skipAbsent: x
    } = s;
    let {
      parent: g,
      context: S,
      abortEarly: y = a.spec.abortEarly,
      disableStackTrace: h = a.spec.disableStackTrace
    } = n;
    const b = {
      value: e,
      parent: g,
      context: S
    };
    function E(F = {}) {
      const L = et(Object.assign({
        value: e,
        originalValue: i,
        label: a.spec.label,
        path: F.path || r,
        spec: a.spec,
        disableStackTrace: F.disableStackTrace || h
      }, p, F.params), b), K = new D(D.formatError(F.message || m, L), e, L.path, F.type || f, L.disableStackTrace);
      return K.params = L, K;
    }
    const $ = y ? o : u;
    let T = {
      path: r,
      parent: g,
      type: f,
      from: n.from,
      createError: E,
      resolve(F) {
        return tt(F, b);
      },
      options: n,
      originalValue: i,
      schema: a
    };
    const _ = (F) => {
      D.isError(F) ? $(F) : F ? u(null) : $(E());
    }, w = (F) => {
      D.isError(F) ? $(F) : o(F);
    };
    if (x && Y(e))
      return _(!0);
    let k;
    try {
      var V;
      if (k = d.call(T, e, T), typeof ((V = k) == null ? void 0 : V.then) == "function") {
        if (n.sync)
          throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(k).then(_, w);
      }
    } catch (F) {
      w(F);
      return;
    }
    _(k);
  }
  return t.OPTIONS = s, t;
}
function et(s, t) {
  if (!s) return s;
  for (const e of Object.keys(s))
    s[e] = tt(s[e], t);
  return s;
}
function tt(s, t) {
  return W.isRef(s) ? s.getValue(t.value, t.parent, t.context) : s;
}
function rr(s, t, e, r = e) {
  let n, i, a;
  return t ? (Z.forEach(t, (o, u, f) => {
    let d = u ? o.slice(1, o.length - 1) : o;
    s = s.resolve({
      context: r,
      parent: n,
      value: e
    });
    let p = s.type === "tuple", m = f ? parseInt(d, 10) : 0;
    if (s.innerType || p) {
      if (p && !f) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (e && m >= e.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);
      n = e, e = e && e[m], s = p ? s.spec.types[m] : s.innerType;
    }
    if (!f) {
      if (!s.fields || !s.fields[d]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${s.type}")`);
      n = e, e = e && e[d], s = s.fields[d];
    }
    i = d, a = u ? "[" + o + "]" : "." + o;
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
class me extends Set {
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
    return new me(this.values());
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
function rt(s, t) {
  var e;
  if (!((e = s.inner) != null && e.length) && s.errors.length)
    return sr(s, t);
  const r = t ? `${t}.${s.path}` : s.path;
  return s.inner.flatMap((n) => rt(n, r));
}
class z {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new me(), this._blacklist = new me(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
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
    let f = [];
    for (let d of Object.values(this.internalTests))
      d && f.push(d);
    this.runTests({
      path: i,
      value: u,
      originalValue: a,
      options: e,
      tests: f
    }, r, (d) => {
      if (d.length)
        return n(d, u);
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
      options: f
    } = t, d = (S) => {
      n || (n = !0, e(S, a));
    }, p = (S) => {
      n || (n = !0, r(S, a));
    }, m = i.length, x = [];
    if (!m) return p([]);
    let g = {
      value: a,
      originalValue: o,
      path: u,
      options: f,
      schema: this
    };
    for (let S = 0; S < i.length; S++) {
      const y = i[S];
      y(g, d, function(b) {
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
      [u ? "index" : "key"]: o,
      path: u || o.includes(".") ? `${n || ""}[${u ? o : `"${o}"`}]` : (n ? `${n}.` : "") + t
    });
    return (p, m, x) => this.resolve(d)._validate(f, d, m, x);
  }
  validate(t, e) {
    var r;
    let n = this.resolve(Object.assign({}, e, {
      value: t
    })), i = (r = e?.disableStackTrace) != null ? r : n.spec.disableStackTrace;
    return new Promise((a, o) => n._validate(t, e, (u, f) => {
      D.isError(u) && (u.value = f), o(u);
    }, (u, f) => {
      u.length ? o(new D(u, f, void 0, void 0, i)) : a(f);
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
    let r = this.clone(), n = Xe(t).map((i) => new W(i));
    return n.forEach((i) => {
      i.isSibling && r.deps.push(i.key);
    }), r.conditions.push(typeof e == "function" ? new pe(n, e) : pe.fromOptions(n, e)), r;
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
      tests: e.tests.filter((u, f, d) => d.findIndex((p) => p.OPTIONS.name === u.OPTIONS.name) === f).map((u) => {
        const f = u.OPTIONS.params && t ? et(Object.assign({}, u.OPTIONS.params), t) : u.OPTIONS.params;
        return {
          name: u.OPTIONS.name,
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
        } catch (n) {
          if (n instanceof D)
            return {
              issues: rt(n)
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
  const t = je(s);
  if (!t) return Date.parse ? Date.parse(s) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let e = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (e = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (e = 0 - e)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + e, t.second, t.millisecond);
}
function je(s) {
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
function de() {
  return new nt();
}
class nt extends z {
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
        const a = je(i);
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
        const a = je(i);
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
de.prototype = nt.prototype;
let xr = /* @__PURE__ */ new Date(""), br = (s) => Object.prototype.toString.call(s) === "[object Date]";
class Fe extends z {
  constructor() {
    super({
      type: "date",
      check(t) {
        return br(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, e) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = ar(t), isNaN(t) ? Fe.INVALID_DATE : new Date(t)));
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
  min(t, e = Te.min) {
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
  max(t, e = Te.max) {
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
Fe.INVALID_DATE = xr;
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
function Ye(s, t) {
  let e = 1 / 0;
  return s.some((r, n) => {
    var i;
    if ((i = t.path) != null && i.includes(r))
      return e = n, !0;
  }), e;
}
function st(s) {
  return (t, e) => Ye(s, t) - Ye(s, e);
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
function he(s) {
  if ("fields" in s) {
    const t = {};
    for (const [e, r] of Object.entries(s.fields))
      t[e] = he(r);
    return s.setFields(t);
  }
  if (s.type === "array") {
    const t = s.optional();
    return t.innerType && (t.innerType = he(t.innerType)), t;
  }
  return s.type === "tuple" ? s.optional().clone({
    types: s.spec.types.map(he)
  }) : "optional" in s ? s.optional() : s;
}
const vr = (s, t) => {
  const e = [...Z.normalizePath(t)];
  if (e.length === 1) return e[0] in s;
  let r = e.pop(), n = Z.getter(Z.join(e), !0)(s);
  return !!(n && r in n);
};
let Ze = (s) => Object.prototype.toString.call(s) === "[object Object]";
function We(s, t) {
  let e = Object.keys(s.fields);
  return Object.keys(t).filter((r) => e.indexOf(r) === -1);
}
const wr = st([]);
function it(s) {
  return new at(s);
}
class at extends z {
  constructor(t) {
    super({
      type: "object",
      check(e) {
        return Ze(e) || typeof e == "function";
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
    let i = this.fields, a = (r = e.stripUnknown) != null ? r : this.spec.noUnknown, o = [].concat(this._nodes, Object.keys(n).filter((p) => !this._nodes.includes(p))), u = {}, f = Object.assign({}, e, {
      parent: u,
      __validating: e.__validating || !1
    }), d = !1;
    for (const p of o) {
      let m = i[p], x = p in n, g = n[p];
      if (m) {
        let S;
        f.path = (e.path ? `${e.path}.` : "") + p, m = m.resolve({
          value: g,
          context: e.context,
          parent: u
        });
        let y = m instanceof z ? m.spec : void 0, h = y?.strict;
        if (y != null && y.strip) {
          d = d || p in n;
          continue;
        }
        S = !e.__validating || !h ? m.cast(g, f) : g, S !== void 0 && (u[p] = S);
      } else x && !a && (u[p] = g);
      (x !== p in u || u[p] !== g) && (d = !0);
    }
    return d ? u : n;
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
    }, ...i], e.__validating = !0, e.originalValue = a, super._validate(t, e, r, (u, f) => {
      if (!o || !Ze(f)) {
        n(u, f);
        return;
      }
      a = a || f;
      let d = [];
      for (let p of this._nodes) {
        let m = this.fields[p];
        !m || W.isRef(m) || d.push(m.asNestedTest({
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
        n(p.sort(this._sortErrors).concat(u), f);
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
    return r.fields = t, r._nodes = gr(t, e), r._sortErrors = st(Object.keys(t)), e && (r._excludedEdges = e), r;
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
    return he(this);
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
      message: t || fe.exact,
      test(e) {
        if (e == null) return !0;
        const r = We(this.schema, e);
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
  noUnknown(t = !0, e = fe.noUnknown) {
    typeof t != "boolean" && (e = t, t = !0);
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: e,
      test(n) {
        if (n == null) return !0;
        const i = We(this.schema, n);
        return !t || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return r.spec.noUnknown = t, r;
  }
  unknown(t = !0, e = fe.noUnknown) {
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
    return this.transformKeys(_e.camelCase);
  }
  snakeCase() {
    return this.transformKeys(_e.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => _e.snakeCase(t).toUpperCase());
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
it.prototype = at.prototype;
const Cr = ({
  onSubmit: s,
  isSubmitting: t = !1,
  error: e,
  logo: r,
  title: n = "Sign in to your account",
  loginField: i = { name: "email", label: "Email Address", autoComplete: "email" }
}) => {
  const a = it({
    [i.name]: de().required(`${i.label} is required`).test(
      "is-email-if-required",
      "Enter a valid email",
      (o) => i.name === "email" ? de().email().isValidSync(o) : !0
    ),
    password: de().required("Password is required")
  });
  return /* @__PURE__ */ c.jsx(wt, { component: "main", maxWidth: "xs", children: /* @__PURE__ */ c.jsxs(
    be,
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
        e && /* @__PURE__ */ c.jsx(Se, { severity: "error", sx: { width: "100%", mt: 2 }, children: e.message }),
        /* @__PURE__ */ c.jsx(N, { sx: { mt: 1, width: "100%" }, children: /* @__PURE__ */ c.jsxs(
          Je,
          {
            onSubmit: s,
            validationSchema: a,
            noValidate: !0,
            children: [
              /* @__PURE__ */ c.jsx(
                ze,
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
                ze,
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
                ie,
                {
                  type: "submit",
                  fullWidth: !0,
                  variant: "contained",
                  sx: { mt: 3, mb: 2 },
                  disabled: t,
                  children: t ? /* @__PURE__ */ c.jsx(se, { size: 24 }) : "Sign In"
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
  const [i, a] = R(!1), o = () => {
    a(!i);
  }, u = /* @__PURE__ */ c.jsxs(N, { children: [
    e ? /* @__PURE__ */ c.jsx(H, { sx: { justifyContent: "center" }, children: e }) : null,
    /* @__PURE__ */ c.jsx(Et, { children: s.map((f, d) => {
      const p = f.component && f.component.displayName === "NavLink" ? { to: f.path } : { href: f.path };
      return /* @__PURE__ */ c.jsx(_t, { disablePadding: !0, children: /* @__PURE__ */ c.jsxs(St, { component: f.component || "a", ...p, children: [
        f.icon && /* @__PURE__ */ c.jsx(Tt, { children: f.icon }),
        /* @__PURE__ */ c.jsx(jt, { primary: f.text })
      ] }) }, d);
    }) })
  ] });
  return /* @__PURE__ */ c.jsxs(N, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ c.jsx(Ot, {}),
    /* @__PURE__ */ c.jsx(
      Ft,
      {
        position: "fixed",
        sx: {
          width: { sm: `calc(100% - ${J}px)` },
          ml: { sm: `${J}px` }
        },
        children: /* @__PURE__ */ c.jsxs(H, { children: [
          /* @__PURE__ */ c.jsx(
            kt,
            {
              color: "inherit",
              "aria-label": "open drawer",
              edge: "start",
              onClick: o,
              sx: { mr: 2, display: { sm: "none" } },
              children: /* @__PURE__ */ c.jsx(At, {})
            }
          ),
          /* @__PURE__ */ c.jsx(q, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1 }, color: "inherit", children: t }),
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
            De,
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
            De,
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
          backgroundColor: (f) => f.palette.grey[100]
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
  Or as AutocompleteField,
  Ar as DashboardLayout,
  Mt as DataTable,
  jr as FileUploadField,
  Je as Form,
  ae as FormContext,
  Cr as LoginPage,
  $r as ResourceFormPage,
  kr as ResourceListPage,
  Tr as StatCard,
  Fr as SwitchField,
  ze as TextField
};
