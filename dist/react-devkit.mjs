import * as $ from "react";
import lt, { useRef as Vt, useState as Re, useEffect as ut, createContext as Ih, useCallback as Pi, useContext as ti, isValidElement as Xo, cloneElement as Ko, Children as Bx, useLayoutEffect as Vx, useMemo as Mh, useDebugValue as Ux } from "react";
import { Paper as gn, Box as Ie, Typography as Be, Toolbar as Zn, Tooltip as xd, IconButton as ji, LinearProgress as _h, TableContainer as Hx, Table as Gx, TableHead as Wx, TableRow as hi, TableCell as mi, TableSortLabel as Yx, TableBody as Xx, TablePagination as jh, CircularProgress as ni, Button as En, Grid as ir, Card as $h, CardMedia as Kx, CardContent as Dh, Skeleton as Co, TextField as Un, Avatar as Zx, Autocomplete as Lh, FormControlLabel as Nh, Switch as Fh, FormControl as Jx, InputLabel as Qx, Select as e0, MenuItem as Zo, FormHelperText as t0, Collapse as n0, ToggleButtonGroup as r0, ToggleButton as vd, Alert as Ll, Container as i0, useTheme as o0, useMediaQuery as s0, List as a0, ListItem as l0, ListItemButton as c0, ListItemIcon as u0, ListItemText as d0, CssBaseline as f0, AppBar as p0, Drawer as Od } from "@mui/material";
import h0 from "@emotion/styled";
import { ThemeContext as m0, keyframes as Yi, css as qh } from "@emotion/react";
import { PictureAsPdf as g0, Description as Td, Close as y0, Search as b0, ViewList as x0, ViewModule as v0, Add as O0, Menu as T0 } from "@mui/icons-material";
import * as S0 from "react-dom";
function _c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Eo = { exports: {} }, gi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd;
function w0() {
  if (Sd) return gi;
  Sd = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(i, o, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      s = {};
      for (var l in o)
        l !== "key" && (s[l] = o[l]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: i,
      key: a,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return gi.Fragment = t, gi.jsx = r, gi.jsxs = r, gi;
}
var yi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd;
function C0() {
  return wd || (wd = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(k) {
      if (k == null) return null;
      if (typeof k == "function")
        return k.$$typeof === _ ? null : k.displayName || k.name || null;
      if (typeof k == "string") return k;
      switch (k) {
        case y:
          return "Fragment";
        case S:
          return "Profiler";
        case b:
          return "StrictMode";
        case w:
          return "Suspense";
        case E:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof k == "object")
        switch (typeof k.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), k.$$typeof) {
          case m:
            return "Portal";
          case v:
            return k.displayName || "Context";
          case C:
            return (k._context.displayName || "Context") + ".Consumer";
          case O:
            var B = k.render;
            return k = k.displayName, k || (k = B.displayName || B.name || "", k = k !== "" ? "ForwardRef(" + k + ")" : "ForwardRef"), k;
          case R:
            return B = k.displayName || null, B !== null ? B : e(k.type) || "Memo";
          case I:
            B = k._payload, k = k._init;
            try {
              return e(k(B));
            } catch {
            }
        }
      return null;
    }
    function t(k) {
      return "" + k;
    }
    function r(k) {
      try {
        t(k);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var G = B.error, W = typeof Symbol == "function" && Symbol.toStringTag && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return G.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), t(k);
      }
    }
    function i(k) {
      if (k === y) return "<>";
      if (typeof k == "object" && k !== null && k.$$typeof === I)
        return "<...>";
      try {
        var B = e(k);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var k = T.A;
      return k === null ? null : k.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(k) {
      if (M.call(k, "key")) {
        var B = Object.getOwnPropertyDescriptor(k, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return k.key !== void 0;
    }
    function l(k, B) {
      function G() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      G.isReactWarning = !0, Object.defineProperty(k, "key", {
        get: G,
        configurable: !0
      });
    }
    function c() {
      var k = e(this.type);
      return z[k] || (z[k] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), k = this.props.ref, k !== void 0 ? k : null;
    }
    function u(k, B, G, W, X, J) {
      var Q = G.ref;
      return k = {
        $$typeof: g,
        type: k,
        key: B,
        props: G,
        _owner: W
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(k, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(k, "ref", { enumerable: !1, value: null }), k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(k, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(k, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.defineProperty(k, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    }
    function d(k, B, G, W, X, J) {
      var Q = B.children;
      if (Q !== void 0)
        if (W)
          if (P(Q)) {
            for (W = 0; W < Q.length; W++)
              f(Q[W]);
            Object.freeze && Object.freeze(Q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Q);
      if (M.call(B, "key")) {
        Q = e(k);
        var te = Object.keys(B).filter(function(Y) {
          return Y !== "key";
        });
        W = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", F[Q + W] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          Q,
          te,
          Q
        ), F[Q + W] = !0);
      }
      if (Q = null, G !== void 0 && (r(G), Q = "" + G), a(B) && (r(B.key), Q = "" + B.key), "key" in B) {
        G = {};
        for (var V in B)
          V !== "key" && (G[V] = B[V]);
      } else G = B;
      return Q && l(
        G,
        typeof k == "function" ? k.displayName || k.name || "Unknown" : k
      ), u(
        k,
        Q,
        G,
        o(),
        X,
        J
      );
    }
    function f(k) {
      p(k) ? k._store && (k._store.validated = 1) : typeof k == "object" && k !== null && k.$$typeof === I && (k._payload.status === "fulfilled" ? p(k._payload.value) && k._payload.value._store && (k._payload.value._store.validated = 1) : k._store && (k._store.validated = 1));
    }
    function p(k) {
      return typeof k == "object" && k !== null && k.$$typeof === g;
    }
    var h = lt, g = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), v = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), T = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, P = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(k) {
        return k();
      }
    };
    var L, z = {}, H = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), Z = N(i(s)), F = {};
    yi.Fragment = y, yi.jsx = function(k, B, G) {
      var W = 1e4 > T.recentlyCreatedOwnerStacks++;
      return d(
        k,
        B,
        G,
        !1,
        W ? Error("react-stack-top-frame") : H,
        W ? N(i(k)) : Z
      );
    }, yi.jsxs = function(k, B, G) {
      var W = 1e4 > T.recentlyCreatedOwnerStacks++;
      return d(
        k,
        B,
        G,
        !0,
        W ? Error("react-stack-top-frame") : H,
        W ? N(i(k)) : Z
      );
    };
  })()), yi;
}
var Cd;
function E0() {
  return Cd || (Cd = 1, process.env.NODE_ENV === "production" ? Eo.exports = w0() : Eo.exports = C0()), Eo.exports;
}
var x = E0();
const iN = ({ icon: e, title: t, value: r, color: i, sx: o, onClick: s }) => /* @__PURE__ */ x.jsxs(
  gn,
  {
    sx: {
      p: 3,
      display: "flex",
      alignItems: "center",
      gap: 2,
      height: "100%",
      cursor: s ? "pointer" : "default",
      ...o
    },
    onClick: s,
    elevation: 2,
    children: [
      /* @__PURE__ */ x.jsx(Ie, { sx: { color: i || "primary.main", fontSize: 40 }, "data-testid": "statcard-icon", children: e }),
      /* @__PURE__ */ x.jsxs(Ie, { children: [
        /* @__PURE__ */ x.jsx(Be, { color: "text.secondary", children: t }),
        /* @__PURE__ */ x.jsx(Be, { variant: "h5", sx: { fontWeight: "bold" }, children: r })
      ] })
    ]
  }
), Ed = (e) => e, k0 = () => {
  let e = Ed;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ed;
    }
  };
}, R0 = k0();
function kn(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((i) => r.searchParams.append("args[]", i)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : kn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var ko = { exports: {} }, Ro = { exports: {} }, ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function A0() {
  if (kd) return ge;
  kd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function C(O) {
    if (typeof O == "object" && O !== null) {
      var w = O.$$typeof;
      switch (w) {
        case t:
          switch (O = O.type, O) {
            case c:
            case u:
            case i:
            case s:
            case o:
            case f:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case l:
                case d:
                case g:
                case h:
                case a:
                  return O;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function v(O) {
    return C(O) === u;
  }
  return ge.AsyncMode = c, ge.ConcurrentMode = u, ge.ContextConsumer = l, ge.ContextProvider = a, ge.Element = t, ge.ForwardRef = d, ge.Fragment = i, ge.Lazy = g, ge.Memo = h, ge.Portal = r, ge.Profiler = s, ge.StrictMode = o, ge.Suspense = f, ge.isAsyncMode = function(O) {
    return v(O) || C(O) === c;
  }, ge.isConcurrentMode = v, ge.isContextConsumer = function(O) {
    return C(O) === l;
  }, ge.isContextProvider = function(O) {
    return C(O) === a;
  }, ge.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === t;
  }, ge.isForwardRef = function(O) {
    return C(O) === d;
  }, ge.isFragment = function(O) {
    return C(O) === i;
  }, ge.isLazy = function(O) {
    return C(O) === g;
  }, ge.isMemo = function(O) {
    return C(O) === h;
  }, ge.isPortal = function(O) {
    return C(O) === r;
  }, ge.isProfiler = function(O) {
    return C(O) === s;
  }, ge.isStrictMode = function(O) {
    return C(O) === o;
  }, ge.isSuspense = function(O) {
    return C(O) === f;
  }, ge.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === i || O === u || O === s || O === o || O === f || O === p || typeof O == "object" && O !== null && (O.$$typeof === g || O.$$typeof === h || O.$$typeof === a || O.$$typeof === l || O.$$typeof === d || O.$$typeof === y || O.$$typeof === b || O.$$typeof === S || O.$$typeof === m);
  }, ge.typeOf = C, ge;
}
var ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rd;
function P0() {
  return Rd || (Rd = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function C(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === i || D === u || D === s || D === o || D === f || D === p || typeof D == "object" && D !== null && (D.$$typeof === g || D.$$typeof === h || D.$$typeof === a || D.$$typeof === l || D.$$typeof === d || D.$$typeof === y || D.$$typeof === b || D.$$typeof === S || D.$$typeof === m);
    }
    function v(D) {
      if (typeof D == "object" && D !== null) {
        var re = D.$$typeof;
        switch (re) {
          case t:
            var ne = D.type;
            switch (ne) {
              case c:
              case u:
              case i:
              case s:
              case o:
              case f:
                return ne;
              default:
                var ce = ne && ne.$$typeof;
                switch (ce) {
                  case l:
                  case d:
                  case g:
                  case h:
                  case a:
                    return ce;
                  default:
                    return re;
                }
            }
          case r:
            return re;
        }
      }
    }
    var O = c, w = u, E = l, R = a, I = t, j = d, _ = i, T = g, M = h, P = r, N = s, L = o, z = f, H = !1;
    function Z(D) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(D) || v(D) === c;
    }
    function F(D) {
      return v(D) === u;
    }
    function k(D) {
      return v(D) === l;
    }
    function B(D) {
      return v(D) === a;
    }
    function G(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function W(D) {
      return v(D) === d;
    }
    function X(D) {
      return v(D) === i;
    }
    function J(D) {
      return v(D) === g;
    }
    function Q(D) {
      return v(D) === h;
    }
    function te(D) {
      return v(D) === r;
    }
    function V(D) {
      return v(D) === s;
    }
    function Y(D) {
      return v(D) === o;
    }
    function ee(D) {
      return v(D) === f;
    }
    ye.AsyncMode = O, ye.ConcurrentMode = w, ye.ContextConsumer = E, ye.ContextProvider = R, ye.Element = I, ye.ForwardRef = j, ye.Fragment = _, ye.Lazy = T, ye.Memo = M, ye.Portal = P, ye.Profiler = N, ye.StrictMode = L, ye.Suspense = z, ye.isAsyncMode = Z, ye.isConcurrentMode = F, ye.isContextConsumer = k, ye.isContextProvider = B, ye.isElement = G, ye.isForwardRef = W, ye.isFragment = X, ye.isLazy = J, ye.isMemo = Q, ye.isPortal = te, ye.isProfiler = V, ye.isStrictMode = Y, ye.isSuspense = ee, ye.isValidElementType = C, ye.typeOf = v;
  })()), ye;
}
var Ad;
function zh() {
  return Ad || (Ad = 1, process.env.NODE_ENV === "production" ? Ro.exports = A0() : Ro.exports = P0()), Ro.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ga, Pd;
function I0() {
  if (Pd) return Ga;
  Pd = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function i(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ga = o() ? Object.assign : function(s, a) {
    for (var l, c = i(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        u = e(l);
        for (var p = 0; p < u.length; p++)
          r.call(l, u[p]) && (c[u[p]] = l[u[p]]);
      }
    }
    return c;
  }, Ga;
}
var Wa, Id;
function jc() {
  if (Id) return Wa;
  Id = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wa = e, Wa;
}
var Ya, Md;
function Bh() {
  return Md || (Md = 1, Ya = Function.call.bind(Object.prototype.hasOwnProperty)), Ya;
}
var Xa, _d;
function M0() {
  if (_d) return Xa;
  _d = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ jc(), r = {}, i = /* @__PURE__ */ Bh();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(s, a, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (i(s, d)) {
          var f;
          try {
            if (typeof s[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = s[d](a, d, c, l, null, t);
          } catch (g) {
            f = g;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var h = u ? u() : "";
            e(
              "Failed " + l + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Xa = o, Xa;
}
var Ka, jd;
function _0() {
  if (jd) return Ka;
  jd = 1;
  var e = zh(), t = I0(), r = /* @__PURE__ */ jc(), i = /* @__PURE__ */ Bh(), o = /* @__PURE__ */ M0(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Ka = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(F) {
      var k = F && (u && F[u] || F[d]);
      if (typeof k == "function")
        return k;
    }
    var p = "<<anonymous>>", h = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: S(),
      arrayOf: C,
      element: v(),
      elementType: O(),
      instanceOf: w,
      node: j(),
      objectOf: R,
      oneOf: E,
      oneOfType: I,
      shape: T,
      exact: M
    };
    function g(F, k) {
      return F === k ? F !== 0 || 1 / F === 1 / k : F !== F && k !== k;
    }
    function m(F, k) {
      this.message = F, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function y(F) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, B = 0;
      function G(X, J, Q, te, V, Y, ee) {
        if (te = te || p, Y = Y || Q, ee !== r) {
          if (c) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = te + ":" + Q;
            !k[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + te + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[re] = !0, B++);
          }
        }
        return J[Q] == null ? X ? J[Q] === null ? new m("The " + V + " `" + Y + "` is marked as required " + ("in `" + te + "`, but its value is `null`.")) : new m("The " + V + " `" + Y + "` is marked as required in " + ("`" + te + "`, but its value is `undefined`.")) : null : F(J, Q, te, V, Y);
      }
      var W = G.bind(null, !1);
      return W.isRequired = G.bind(null, !0), W;
    }
    function b(F) {
      function k(B, G, W, X, J, Q) {
        var te = B[G], V = L(te);
        if (V !== F) {
          var Y = z(te);
          return new m(
            "Invalid " + X + " `" + J + "` of type " + ("`" + Y + "` supplied to `" + W + "`, expected ") + ("`" + F + "`."),
            { expectedType: F }
          );
        }
        return null;
      }
      return y(k);
    }
    function S() {
      return y(a);
    }
    function C(F) {
      function k(B, G, W, X, J) {
        if (typeof F != "function")
          return new m("Property `" + J + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var Q = B[G];
        if (!Array.isArray(Q)) {
          var te = L(Q);
          return new m("Invalid " + X + " `" + J + "` of type " + ("`" + te + "` supplied to `" + W + "`, expected an array."));
        }
        for (var V = 0; V < Q.length; V++) {
          var Y = F(Q, V, W, X, J + "[" + V + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return y(k);
    }
    function v() {
      function F(k, B, G, W, X) {
        var J = k[B];
        if (!l(J)) {
          var Q = L(J);
          return new m("Invalid " + W + " `" + X + "` of type " + ("`" + Q + "` supplied to `" + G + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(F);
    }
    function O() {
      function F(k, B, G, W, X) {
        var J = k[B];
        if (!e.isValidElementType(J)) {
          var Q = L(J);
          return new m("Invalid " + W + " `" + X + "` of type " + ("`" + Q + "` supplied to `" + G + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(F);
    }
    function w(F) {
      function k(B, G, W, X, J) {
        if (!(B[G] instanceof F)) {
          var Q = F.name || p, te = Z(B[G]);
          return new m("Invalid " + X + " `" + J + "` of type " + ("`" + te + "` supplied to `" + W + "`, expected ") + ("instance of `" + Q + "`."));
        }
        return null;
      }
      return y(k);
    }
    function E(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function k(B, G, W, X, J) {
        for (var Q = B[G], te = 0; te < F.length; te++)
          if (g(Q, F[te]))
            return null;
        var V = JSON.stringify(F, function(ee, D) {
          var re = z(D);
          return re === "symbol" ? String(D) : D;
        });
        return new m("Invalid " + X + " `" + J + "` of value `" + String(Q) + "` " + ("supplied to `" + W + "`, expected one of " + V + "."));
      }
      return y(k);
    }
    function R(F) {
      function k(B, G, W, X, J) {
        if (typeof F != "function")
          return new m("Property `" + J + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var Q = B[G], te = L(Q);
        if (te !== "object")
          return new m("Invalid " + X + " `" + J + "` of type " + ("`" + te + "` supplied to `" + W + "`, expected an object."));
        for (var V in Q)
          if (i(Q, V)) {
            var Y = F(Q, V, W, X, J + "." + V, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return y(k);
    }
    function I(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var k = 0; k < F.length; k++) {
        var B = F[k];
        if (typeof B != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + H(B) + " at index " + k + "."
          ), a;
      }
      function G(W, X, J, Q, te) {
        for (var V = [], Y = 0; Y < F.length; Y++) {
          var ee = F[Y], D = ee(W, X, J, Q, te, r);
          if (D == null)
            return null;
          D.data && i(D.data, "expectedType") && V.push(D.data.expectedType);
        }
        var re = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new m("Invalid " + Q + " `" + te + "` supplied to " + ("`" + J + "`" + re + "."));
      }
      return y(G);
    }
    function j() {
      function F(k, B, G, W, X) {
        return P(k[B]) ? null : new m("Invalid " + W + " `" + X + "` supplied to " + ("`" + G + "`, expected a ReactNode."));
      }
      return y(F);
    }
    function _(F, k, B, G, W) {
      return new m(
        (F || "React class") + ": " + k + " type `" + B + "." + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function T(F) {
      function k(B, G, W, X, J) {
        var Q = B[G], te = L(Q);
        if (te !== "object")
          return new m("Invalid " + X + " `" + J + "` of type `" + te + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var V in F) {
          var Y = F[V];
          if (typeof Y != "function")
            return _(W, X, J, V, z(Y));
          var ee = Y(Q, V, W, X, J + "." + V, r);
          if (ee)
            return ee;
        }
        return null;
      }
      return y(k);
    }
    function M(F) {
      function k(B, G, W, X, J) {
        var Q = B[G], te = L(Q);
        if (te !== "object")
          return new m("Invalid " + X + " `" + J + "` of type `" + te + "` " + ("supplied to `" + W + "`, expected `object`."));
        var V = t({}, B[G], F);
        for (var Y in V) {
          var ee = F[Y];
          if (i(F, Y) && typeof ee != "function")
            return _(W, X, J, Y, z(ee));
          if (!ee)
            return new m(
              "Invalid " + X + " `" + J + "` key `" + Y + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(B[G], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(F), null, "  ")
            );
          var D = ee(Q, Y, W, X, J + "." + Y, r);
          if (D)
            return D;
        }
        return null;
      }
      return y(k);
    }
    function P(F) {
      switch (typeof F) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !F;
        case "object":
          if (Array.isArray(F))
            return F.every(P);
          if (F === null || l(F))
            return !0;
          var k = f(F);
          if (k) {
            var B = k.call(F), G;
            if (k !== F.entries) {
              for (; !(G = B.next()).done; )
                if (!P(G.value))
                  return !1;
            } else
              for (; !(G = B.next()).done; ) {
                var W = G.value;
                if (W && !P(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(F, k) {
      return F === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function L(F) {
      var k = typeof F;
      return Array.isArray(F) ? "array" : F instanceof RegExp ? "object" : N(k, F) ? "symbol" : k;
    }
    function z(F) {
      if (typeof F > "u" || F === null)
        return "" + F;
      var k = L(F);
      if (k === "object") {
        if (F instanceof Date)
          return "date";
        if (F instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function H(F) {
      var k = z(F);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function Z(F) {
      return !F.constructor || !F.constructor.name ? p : F.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, Ka;
}
var Za, $d;
function j0() {
  if ($d) return Za;
  $d = 1;
  var e = /* @__PURE__ */ jc();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Za = function() {
    function i(a, l, c, u, d, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    i.isRequired = i;
    function o() {
      return i;
    }
    var s = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: o,
      element: i,
      elementType: i,
      instanceOf: o,
      node: i,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Za;
}
var Dd;
function $0() {
  if (Dd) return ko.exports;
  if (Dd = 1, process.env.NODE_ENV !== "production") {
    var e = zh(), t = !0;
    ko.exports = /* @__PURE__ */ _0()(e.isElement, t);
  } else
    ko.exports = /* @__PURE__ */ j0()();
  return ko.exports;
}
var D0 = /* @__PURE__ */ $0();
const n = /* @__PURE__ */ _c(D0);
function Vh(e) {
  var t, r, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Vh(e[t])) && (i && (i += " "), i += r);
  } else for (r in e) e[r] && (i && (i += " "), i += r);
  return i;
}
function be() {
  for (var e, t, r = 0, i = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Vh(e)) && (i && (i += " "), i += t);
  return i;
}
function Ae(e, t, r = void 0) {
  const i = {};
  for (const o in e) {
    const s = e[o];
    let a = "", l = !0;
    for (let c = 0; c < s.length; c += 1) {
      const u = s[c];
      u && (a += (l === !0 ? "" : " ") + t(u), l = !1, r && r[u] && (a += " " + r[u]));
    }
    i[o] = a;
  }
  return i;
}
var Ao = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function L0() {
  if (Ld) return Oe;
  Ld = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var y = m.$$typeof;
      switch (y) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case i:
            case c:
            case u:
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case a:
                case l:
                case f:
                case d:
                  return m;
                case s:
                  return m;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Oe.ContextConsumer = s, Oe.ContextProvider = a, Oe.Element = e, Oe.ForwardRef = l, Oe.Fragment = r, Oe.Lazy = f, Oe.Memo = d, Oe.Portal = t, Oe.Profiler = o, Oe.StrictMode = i, Oe.Suspense = c, Oe.SuspenseList = u, Oe.isContextConsumer = function(m) {
    return g(m) === s;
  }, Oe.isContextProvider = function(m) {
    return g(m) === a;
  }, Oe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, Oe.isForwardRef = function(m) {
    return g(m) === l;
  }, Oe.isFragment = function(m) {
    return g(m) === r;
  }, Oe.isLazy = function(m) {
    return g(m) === f;
  }, Oe.isMemo = function(m) {
    return g(m) === d;
  }, Oe.isPortal = function(m) {
    return g(m) === t;
  }, Oe.isProfiler = function(m) {
    return g(m) === o;
  }, Oe.isStrictMode = function(m) {
    return g(m) === i;
  }, Oe.isSuspense = function(m) {
    return g(m) === c;
  }, Oe.isSuspenseList = function(m) {
    return g(m) === u;
  }, Oe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === i || m === c || m === u || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === d || m.$$typeof === a || m.$$typeof === s || m.$$typeof === l || m.$$typeof === h || m.getModuleId !== void 0);
  }, Oe.typeOf = g, Oe;
}
var Te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;
function N0() {
  return Nd || (Nd = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(m) {
      if (typeof m == "object" && m !== null) {
        var y = m.$$typeof;
        switch (y) {
          case t:
            switch (m = m.type, m) {
              case i:
              case s:
              case o:
              case u:
              case d:
              case h:
                return m;
              default:
                switch (m = m && m.$$typeof, m) {
                  case l:
                  case c:
                  case p:
                  case f:
                    return m;
                  case a:
                    return m;
                  default:
                    return y;
                }
            }
          case r:
            return y;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    Te.ContextConsumer = a, Te.ContextProvider = l, Te.Element = t, Te.ForwardRef = c, Te.Fragment = i, Te.Lazy = p, Te.Memo = f, Te.Portal = r, Te.Profiler = s, Te.StrictMode = o, Te.Suspense = u, Te.SuspenseList = d, Te.isContextConsumer = function(m) {
      return e(m) === a;
    }, Te.isContextProvider = function(m) {
      return e(m) === l;
    }, Te.isElement = function(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }, Te.isForwardRef = function(m) {
      return e(m) === c;
    }, Te.isFragment = function(m) {
      return e(m) === i;
    }, Te.isLazy = function(m) {
      return e(m) === p;
    }, Te.isMemo = function(m) {
      return e(m) === f;
    }, Te.isPortal = function(m) {
      return e(m) === r;
    }, Te.isProfiler = function(m) {
      return e(m) === s;
    }, Te.isStrictMode = function(m) {
      return e(m) === o;
    }, Te.isSuspense = function(m) {
      return e(m) === u;
    }, Te.isSuspenseList = function(m) {
      return e(m) === d;
    }, Te.isValidElementType = function(m) {
      return typeof m == "string" || typeof m == "function" || m === i || m === s || m === o || m === u || m === d || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === f || m.$$typeof === l || m.$$typeof === a || m.$$typeof === c || m.$$typeof === g || m.getModuleId !== void 0);
    }, Te.typeOf = e;
  })()), Te;
}
var Fd;
function F0() {
  return Fd || (Fd = 1, process.env.NODE_ENV === "production" ? Ao.exports = /* @__PURE__ */ L0() : Ao.exports = /* @__PURE__ */ N0()), Ao.exports;
}
var as = /* @__PURE__ */ F0();
function Ht(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Uh(e) {
  if (/* @__PURE__ */ $.isValidElement(e) || as.isValidElementType(e) || !Ht(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Uh(e[r]);
  }), t;
}
function bt(e, t, r = {
  clone: !0
}) {
  const i = r.clone ? {
    ...e
  } : e;
  return Ht(e) && Ht(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ $.isValidElement(t[o]) || as.isValidElementType(t[o]) ? i[o] = t[o] : Ht(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ht(e[o]) ? i[o] = bt(e[o], t[o], r) : r.clone ? i[o] = Ht(t[o]) ? Uh(t[o]) : t[o] : i[o] = t[o];
  }), i;
}
function Ii(e, t) {
  return t ? bt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const _n = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function qd(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((i) => i.startsWith("@container")).sort((i, o) => {
    const s = /min-width:\s*([0-9.]+)/;
    return +(i.match(s)?.[1] || 0) - +(o.match(s)?.[1] || 0);
  });
  return r.length ? r.reduce((i, o) => {
    const s = t[o];
    return delete i[o], i[o] = s, i;
  }, {
    ...t
  }) : t;
}
function q0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function z0(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : kn(18, `(${t})`));
    return null;
  }
  const [, i, o] = r, s = Number.isNaN(+i) ? i || 0 : +i;
  return e.containerQueries(o).up(s);
}
function B0(e) {
  const t = (s, a) => s.replace("@media", a ? `@container ${a}` : "@container");
  function r(s, a) {
    s.up = (...l) => t(e.breakpoints.up(...l), a), s.down = (...l) => t(e.breakpoints.down(...l), a), s.between = (...l) => t(e.breakpoints.between(...l), a), s.only = (...l) => t(e.breakpoints.only(...l), a), s.not = (...l) => {
      const c = t(e.breakpoints.not(...l), a);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const i = {}, o = (s) => (r(i, s), i);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Ns = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, zd = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ns[e]}px)`
}, V0 = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Ns[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function cn(e, t, r) {
  const i = e.theme || {};
  if (Array.isArray(t)) {
    const s = i.breakpoints || zd;
    return t.reduce((a, l, c) => (a[s.up(s.keys[c])] = r(t[c]), a), {});
  }
  if (typeof t == "object") {
    const s = i.breakpoints || zd;
    return Object.keys(t).reduce((a, l) => {
      if (q0(s.keys, l)) {
        const c = z0(i.containerQueries ? i : V0, l);
        c && (a[c] = r(t[l], l));
      } else if (Object.keys(s.values || Ns).includes(l)) {
        const c = s.up(l);
        a[c] = r(t[l], l);
      } else {
        const c = l;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return r(t);
}
function U0(e = {}) {
  return e.keys?.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {}) || {};
}
function Bd(e, t) {
  return e.reduce((r, i) => {
    const o = r[i];
    return (!o || Object.keys(o).length === 0) && delete r[i], r;
  }, t);
}
function Fs(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const i = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (i != null)
      return i;
  }
  return t.split(".").reduce((i, o) => i && i[o] != null ? i[o] : null, e);
}
function ls(e, t, r, i = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || i : o = Fs(e, r) || i, t && (o = t(o, i, e)), o;
}
function Le(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: i,
    transform: o
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], c = a.theme, u = Fs(c, i) || {};
    return cn(a, l, (f) => {
      let p = ls(u, o, f);
      return f === p && typeof f == "string" && (p = ls(u, o, `${t}${f === "default" ? "" : pe(f)}`, f)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: _n
  } : {}, s.filterProps = [t], s;
}
function H0(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const G0 = {
  m: "margin",
  p: "padding"
}, W0 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Vd = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Y0 = H0((e) => {
  if (e.length > 2)
    if (Vd[e])
      e = Vd[e];
    else
      return [e];
  const [t, r] = e.split(""), i = G0[t], o = W0[r] || "";
  return Array.isArray(o) ? o.map((s) => i + s) : [i + o];
}), qs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], zs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], X0 = [...qs, ...zs];
function Xi(e, t, r, i) {
  const o = Fs(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${i} argument to be a number or a string, got ${s}.`), typeof o == "string" ? o.startsWith("var(") && s === 0 ? 0 : o.startsWith("var(") && s === 1 ? o : `calc(${s} * ${o})` : o * s) : Array.isArray(o) ? (s) => {
    if (typeof s == "string")
      return s;
    const a = Math.abs(s);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = o[a];
    return s >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function $c(e) {
  return Xi(e, "spacing", 8, "spacing");
}
function Ki(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function K0(e, t) {
  return (r) => e.reduce((i, o) => (i[o] = Ki(t, r), i), {});
}
function Z0(e, t, r, i) {
  if (!t.includes(r))
    return null;
  const o = Y0(r), s = K0(o, i), a = e[r];
  return cn(e, a, s);
}
function Hh(e, t) {
  const r = $c(e.theme);
  return Object.keys(e).map((i) => Z0(e, t, i, r)).reduce(Ii, {});
}
function _e(e) {
  return Hh(e, qs);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? qs.reduce((e, t) => (e[t] = _n, e), {}) : {};
_e.filterProps = qs;
function je(e) {
  return Hh(e, zs);
}
je.propTypes = process.env.NODE_ENV !== "production" ? zs.reduce((e, t) => (e[t] = _n, e), {}) : {};
je.filterProps = zs;
process.env.NODE_ENV !== "production" && X0.reduce((e, t) => (e[t] = _n, e), {});
function Bs(...e) {
  const t = e.reduce((i, o) => (o.filterProps.forEach((s) => {
    i[s] = o;
  }), i), {}), r = (i) => Object.keys(i).reduce((o, s) => t[s] ? Ii(o, t[s](i)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((i, o) => Object.assign(i, o.propTypes), {}) : {}, r.filterProps = e.reduce((i, o) => i.concat(o.filterProps), []), r;
}
function kt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $t(e, t) {
  return Le({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const J0 = $t("border", kt), Q0 = $t("borderTop", kt), ev = $t("borderRight", kt), tv = $t("borderBottom", kt), nv = $t("borderLeft", kt), rv = $t("borderColor"), iv = $t("borderTopColor"), ov = $t("borderRightColor"), sv = $t("borderBottomColor"), av = $t("borderLeftColor"), lv = $t("outline", kt), cv = $t("outlineColor"), Vs = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Xi(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (i) => ({
      borderRadius: Ki(t, i)
    });
    return cn(e, e.borderRadius, r);
  }
  return null;
};
Vs.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: _n
} : {};
Vs.filterProps = ["borderRadius"];
Bs(J0, Q0, ev, tv, nv, rv, iv, ov, sv, av, Vs, lv, cv);
const Us = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Xi(e.theme, "spacing", 8, "gap"), r = (i) => ({
      gap: Ki(t, i)
    });
    return cn(e, e.gap, r);
  }
  return null;
};
Us.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: _n
} : {};
Us.filterProps = ["gap"];
const Hs = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Xi(e.theme, "spacing", 8, "columnGap"), r = (i) => ({
      columnGap: Ki(t, i)
    });
    return cn(e, e.columnGap, r);
  }
  return null;
};
Hs.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: _n
} : {};
Hs.filterProps = ["columnGap"];
const Gs = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Xi(e.theme, "spacing", 8, "rowGap"), r = (i) => ({
      rowGap: Ki(t, i)
    });
    return cn(e, e.rowGap, r);
  }
  return null;
};
Gs.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: _n
} : {};
Gs.filterProps = ["rowGap"];
const uv = Le({
  prop: "gridColumn"
}), dv = Le({
  prop: "gridRow"
}), fv = Le({
  prop: "gridAutoFlow"
}), pv = Le({
  prop: "gridAutoColumns"
}), hv = Le({
  prop: "gridAutoRows"
}), mv = Le({
  prop: "gridTemplateColumns"
}), gv = Le({
  prop: "gridTemplateRows"
}), yv = Le({
  prop: "gridTemplateAreas"
}), bv = Le({
  prop: "gridArea"
});
Bs(Us, Hs, Gs, uv, dv, fv, pv, hv, mv, gv, yv, bv);
function Lr(e, t) {
  return t === "grey" ? t : e;
}
const xv = Le({
  prop: "color",
  themeKey: "palette",
  transform: Lr
}), vv = Le({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Lr
}), Ov = Le({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Lr
});
Bs(xv, vv, Ov);
function yt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Tv = Le({
  prop: "width",
  transform: yt
}), Dc = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const i = e.theme?.breakpoints?.values?.[r] || Ns[r];
      return i ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: yt(r)
      };
    };
    return cn(e, e.maxWidth, t);
  }
  return null;
};
Dc.filterProps = ["maxWidth"];
const Sv = Le({
  prop: "minWidth",
  transform: yt
}), wv = Le({
  prop: "height",
  transform: yt
}), Cv = Le({
  prop: "maxHeight",
  transform: yt
}), Ev = Le({
  prop: "minHeight",
  transform: yt
});
Le({
  prop: "size",
  cssProperty: "width",
  transform: yt
});
Le({
  prop: "size",
  cssProperty: "height",
  transform: yt
});
const kv = Le({
  prop: "boxSizing"
});
Bs(Tv, Dc, Sv, wv, Cv, Ev, kv);
const Zi = {
  // borders
  border: {
    themeKey: "borders",
    transform: kt
  },
  borderTop: {
    themeKey: "borders",
    transform: kt
  },
  borderRight: {
    themeKey: "borders",
    transform: kt
  },
  borderBottom: {
    themeKey: "borders",
    transform: kt
  },
  borderLeft: {
    themeKey: "borders",
    transform: kt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: kt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Vs
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Lr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Lr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Lr
  },
  // spacing
  p: {
    style: je
  },
  pt: {
    style: je
  },
  pr: {
    style: je
  },
  pb: {
    style: je
  },
  pl: {
    style: je
  },
  px: {
    style: je
  },
  py: {
    style: je
  },
  padding: {
    style: je
  },
  paddingTop: {
    style: je
  },
  paddingRight: {
    style: je
  },
  paddingBottom: {
    style: je
  },
  paddingLeft: {
    style: je
  },
  paddingX: {
    style: je
  },
  paddingY: {
    style: je
  },
  paddingInline: {
    style: je
  },
  paddingInlineStart: {
    style: je
  },
  paddingInlineEnd: {
    style: je
  },
  paddingBlock: {
    style: je
  },
  paddingBlockStart: {
    style: je
  },
  paddingBlockEnd: {
    style: je
  },
  m: {
    style: _e
  },
  mt: {
    style: _e
  },
  mr: {
    style: _e
  },
  mb: {
    style: _e
  },
  ml: {
    style: _e
  },
  mx: {
    style: _e
  },
  my: {
    style: _e
  },
  margin: {
    style: _e
  },
  marginTop: {
    style: _e
  },
  marginRight: {
    style: _e
  },
  marginBottom: {
    style: _e
  },
  marginLeft: {
    style: _e
  },
  marginX: {
    style: _e
  },
  marginY: {
    style: _e
  },
  marginInline: {
    style: _e
  },
  marginInlineStart: {
    style: _e
  },
  marginInlineEnd: {
    style: _e
  },
  marginBlock: {
    style: _e
  },
  marginBlockStart: {
    style: _e
  },
  marginBlockEnd: {
    style: _e
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Us
  },
  rowGap: {
    style: Gs
  },
  columnGap: {
    style: Hs
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: yt
  },
  maxWidth: {
    style: Dc
  },
  minWidth: {
    transform: yt
  },
  height: {
    transform: yt
  },
  maxHeight: {
    transform: yt
  },
  minHeight: {
    transform: yt
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Rv(...e) {
  const t = e.reduce((i, o) => i.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((i) => r.size === Object.keys(i).length);
}
function Av(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pv() {
  function e(r, i, o, s) {
    const a = {
      [r]: i,
      theme: o
    }, l = s[r];
    if (!l)
      return {
        [r]: i
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: d,
      style: f
    } = l;
    if (i == null)
      return null;
    if (u === "typography" && i === "inherit")
      return {
        [r]: i
      };
    const p = Fs(o, u) || {};
    return f ? f(a) : cn(a, i, (g) => {
      let m = ls(p, d, g);
      return g === m && typeof g == "string" && (m = ls(p, d, `${r}${g === "default" ? "" : pe(g)}`, g)), c === !1 ? m : {
        [c]: m
      };
    });
  }
  function t(r) {
    const {
      sx: i,
      theme: o = {},
      nested: s
    } = r || {};
    if (!i)
      return null;
    const a = o.unstable_sxConfig ?? Zi;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(o);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = U0(o.breakpoints), f = Object.keys(d);
      let p = d;
      return Object.keys(u).forEach((h) => {
        const g = Av(u[h], o);
        if (g != null)
          if (typeof g == "object")
            if (a[h])
              p = Ii(p, e(h, g, o, a));
            else {
              const m = cn({
                theme: o
              }, g, (y) => ({
                [h]: y
              }));
              Rv(m, g) ? p[h] = t({
                sx: g,
                theme: o,
                nested: !0
              }) : p = Ii(p, m);
            }
          else
            p = Ii(p, e(h, g, o, a));
      }), !s && o.modularCssLayers ? {
        "@layer sx": qd(o, Bd(f, p))
      } : qd(o, Bd(f, p));
    }
    return Array.isArray(i) ? i.map(l) : l(i);
  }
  return t;
}
const zr = Pv();
zr.filterProps = ["sx"];
const Iv = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = e?.theme?.unstable_sxConfig ?? Zi;
  return Object.keys(e).forEach((i) => {
    r[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function Mv(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: i,
    otherProps: o
  } = Iv(r);
  let s;
  return Array.isArray(t) ? s = [i, ...t] : typeof t == "function" ? s = (...a) => {
    const l = t(...a);
    return Ht(l) ? {
      ...i,
      ...l
    } : i;
  } : s = {
    ...i,
    ...t
  }, {
    ...o,
    sx: s
  };
}
function _v(e) {
  for (var t = 0, r, i = 0, o = e.length; o >= 4; ++i, o -= 4)
    r = e.charCodeAt(i) & 255 | (e.charCodeAt(++i) & 255) << 8 | (e.charCodeAt(++i) & 255) << 16 | (e.charCodeAt(++i) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(i) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var jv = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function $v(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Dv = /[A-Z]|^ms/g, Lv = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Gh = function(t) {
  return t.charCodeAt(1) === 45;
}, Ud = function(t) {
  return t != null && typeof t != "boolean";
}, Ja = /* @__PURE__ */ $v(function(e) {
  return Gh(e) ? e : e.replace(Dv, "-$&").toLowerCase();
}), Hd = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Lv, function(i, o, s) {
          return On = {
            name: o,
            styles: s,
            next: On
          }, o;
        });
  }
  return jv[t] !== 1 && !Gh(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function cs(e, t, r) {
  if (r == null)
    return "";
  var i = r;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return On = {
          name: o.name,
          styles: o.styles,
          next: On
        }, o.name;
      var s = r;
      if (s.styles !== void 0) {
        var a = s.next;
        if (a !== void 0)
          for (; a !== void 0; )
            On = {
              name: a.name,
              styles: a.styles,
              next: On
            }, a = a.next;
        var l = s.styles + ";";
        return l;
      }
      return Nv(e, t, r);
    }
  }
  var c = r;
  return c;
}
function Nv(e, t, r) {
  var i = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      i += cs(e, t, r[o]) + ";";
  else
    for (var s in r) {
      var a = r[s];
      if (typeof a != "object") {
        var l = a;
        Ud(l) && (i += Ja(s) + ":" + Hd(s, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var c = 0; c < a.length; c++)
          Ud(a[c]) && (i += Ja(s) + ":" + Hd(s, a[c]) + ";");
      else {
        var u = cs(e, t, a);
        switch (s) {
          case "animation":
          case "animationName": {
            i += Ja(s) + ":" + u + ";";
            break;
          }
          default:
            i += s + "{" + u + "}";
        }
      }
    }
  return i;
}
var Gd = /label:\s*([^\s;{]+)\s*(;|$)/g, On;
function Fv(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var i = !0, o = "";
  On = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    i = !1, o += cs(r, t, s);
  else {
    var a = s;
    o += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += cs(r, t, e[l]), i) {
      var c = s;
      o += c[l];
    }
  Gd.lastIndex = 0;
  for (var u = "", d; (d = Gd.exec(o)) !== null; )
    u += "-" + d[1];
  var f = _v(o) + u;
  return {
    name: f,
    styles: o,
    next: On
  };
}
/**
 * @mui/styled-engine v7.3.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function qv(e, t) {
  const r = h0(e, t);
  return process.env.NODE_ENV !== "production" ? (...i) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return i.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : i.some((s) => s === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...i);
  } : r;
}
function zv(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Wd = [];
function Jn(e) {
  return Wd[0] = e, Fv(Wd);
}
const Bv = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, i) => r.val - i.val), t.reduce((r, i) => ({
    ...r,
    [i.key]: i.val
  }), {});
};
function Vv(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: i = 5,
    ...o
  } = e, s = Bv(t), a = Object.keys(s);
  function l(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - i / 100}${r})`;
  }
  function u(p, h) {
    const g = a.indexOf(h);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : h) - i / 100}${r})`;
  }
  function d(p) {
    return a.indexOf(p) + 1 < a.length ? u(p, a[a.indexOf(p) + 1]) : l(p);
  }
  function f(p) {
    const h = a.indexOf(p);
    return h === 0 ? l(a[1]) : h === a.length - 1 ? c(a[h]) : u(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: f,
    unit: r,
    ...o
  };
}
const Uv = {
  borderRadius: 4
};
function Wh(e = 8, t = $c({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...i) => (process.env.NODE_ENV !== "production" && (i.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${i.length}`)), (i.length === 0 ? [1] : i).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Hv(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let i = r.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Lc(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: i = {},
    spacing: o,
    shape: s = {},
    ...a
  } = e, l = Vv(r), c = Wh(o);
  let u = bt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...i
    },
    spacing: c,
    shape: {
      ...Uv,
      ...s
    }
  }, a);
  return u = B0(u), u.applyStyles = Hv, u = t.reduce((d, f) => bt(d, f), u), u.unstable_sxConfig = {
    ...Zi,
    ...a?.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return zr({
      sx: f,
      theme: this
    });
  }, u;
}
function Gv(e) {
  return Object.keys(e).length === 0;
}
function Yh(e = null) {
  const t = $.useContext(m0);
  return !t || Gv(t) ? e : t;
}
const Wv = Lc();
function Xh(e = Wv) {
  return Yh(e);
}
const Yv = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ee(e, t, r = "Mui") {
  const i = Yv[t];
  return i ? `${r}-${i}` : `${R0.generate(e)}-${t}`;
}
function Se(e, t, r = "Mui") {
  const i = {};
  return t.forEach((o) => {
    i[o] = Ee(e, o, r);
  }), i;
}
function Kh(e, t = "") {
  return e.displayName || e.name || t;
}
function Yd(e, t, r) {
  const i = Kh(t);
  return e.displayName || (i !== "" ? `${r}(${i})` : r);
}
function Xv(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Kh(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case as.ForwardRef:
          return Yd(e, e.render, "ForwardRef");
        case as.Memo:
          return Yd(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Zh(e) {
  const {
    variants: t,
    ...r
  } = e, i = {
    variants: t,
    style: Jn(r),
    isProcessed: !0
  };
  return i.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Jn(o.style));
  }), i;
}
const Kv = Lc();
function Jo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Hn(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Zv(e) {
  return e ? (t, r) => r[e] : null;
}
function Jv(e, t, r) {
  e.theme = nO(e.theme) ? r : e.theme[t] || e.theme;
}
function Qo(e, t, r) {
  const i = typeof t == "function" ? t(e) : t;
  if (Array.isArray(i))
    return i.flatMap((o) => Qo(e, o, r));
  if (Array.isArray(i?.variants)) {
    let o;
    if (i.isProcessed)
      o = r ? Hn(i.style, r) : i.style;
    else {
      const {
        variants: s,
        ...a
      } = i;
      o = r ? Hn(Jn(a), r) : a;
    }
    return Jh(e, i.variants, [o], r);
  }
  return i?.isProcessed ? r ? Hn(Jn(i.style), r) : i.style : r ? Hn(Jn(i), r) : i;
}
function Jh(e, t, r = [], i = void 0) {
  let o;
  e: for (let s = 0; s < t.length; s += 1) {
    const a = t[s];
    if (typeof a.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !a.props(o))
        continue;
    } else
      for (const l in a.props)
        if (e[l] !== a.props[l] && e.ownerState?.[l] !== a.props[l])
          continue e;
    typeof a.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(i ? Hn(Jn(a.style(o)), i) : a.style(o))) : r.push(i ? Hn(Jn(a.style), i) : a.style);
  }
  return r;
}
function Qv(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Kv,
    rootShouldForwardProp: i = Jo,
    slotShouldForwardProp: o = Jo
  } = e;
  function s(l) {
    Jv(l, t, r);
  }
  return (l, c = {}) => {
    zv(l, (w) => w.filter((E) => E !== zr));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = Zv(Qh(d)),
      ...g
    } = c, m = u && u.startsWith("Mui") || d ? "components" : "custom", y = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), b = p || !1;
    let S = Jo;
    d === "Root" || d === "root" ? S = i : d ? S = o : rO(l) && (S = void 0);
    const C = qv(l, {
      shouldForwardProp: S,
      label: tO(u, d),
      ...g
    }), v = (w) => {
      if (w.__emotion_real === w)
        return w;
      if (typeof w == "function")
        return function(R) {
          return Qo(R, w, R.theme.modularCssLayers ? m : void 0);
        };
      if (Ht(w)) {
        const E = Zh(w);
        return function(I) {
          return E.variants ? Qo(I, E, I.theme.modularCssLayers ? m : void 0) : I.theme.modularCssLayers ? Hn(E.style, m) : E.style;
        };
      }
      return w;
    }, O = (...w) => {
      const E = [], R = w.map(v), I = [];
      if (E.push(s), u && h && I.push(function(M) {
        const N = M.theme.components?.[u]?.styleOverrides;
        if (!N)
          return null;
        const L = {};
        for (const z in N)
          L[z] = Qo(M, N[z], M.theme.modularCssLayers ? "theme" : void 0);
        return h(M, L);
      }), u && !y && I.push(function(M) {
        const N = M.theme?.components?.[u]?.variants;
        return N ? Jh(M, N, [], M.theme.modularCssLayers ? "theme" : void 0) : null;
      }), b || I.push(zr), Array.isArray(R[0])) {
        const T = R.shift(), M = new Array(E.length).fill(""), P = new Array(I.length).fill("");
        let N;
        N = [...M, ...T, ...P], N.raw = [...M, ...T.raw, ...P], E.unshift(N);
      }
      const j = [...E, ...R, ...I], _ = C(...j);
      return l.muiName && (_.muiName = l.muiName), process.env.NODE_ENV !== "production" && (_.displayName = eO(u, d, l)), _;
    };
    return C.withConfig && (O.withConfig = C.withConfig), O;
  };
}
function eO(e, t, r) {
  return e ? `${e}${pe(t || "")}` : `Styled(${Xv(r)})`;
}
function tO(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Qh(t || "Root")}`), r;
}
function nO(e) {
  for (const t in e)
    return !1;
  return !0;
}
function rO(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Qh(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function or(e, t, r = !1) {
  const i = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const s = o;
      if (s === "components" || s === "slots")
        i[s] = {
          ...e[s],
          ...i[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const a = e[s], l = t[s];
        if (!l)
          i[s] = a || {};
        else if (!a)
          i[s] = l;
        else {
          i[s] = {
            ...l
          };
          for (const c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
              const u = c;
              i[s][u] = or(a[u], l[u], r);
            }
        }
      } else s === "className" && r && t.className ? i.className = be(e?.className, t?.className) : s === "style" && r && t.style ? i.style = {
        ...e?.style,
        ...t?.style
      } : i[s] === void 0 && (i[s] = e[s]);
    }
  return i;
}
function em(e) {
  const {
    theme: t,
    name: r,
    props: i
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? i : or(t.components[r].defaultProps, i);
}
function iO({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: i
}) {
  let o = Xh(r);
  return o = o[i] || o, em({
    theme: o,
    name: t,
    props: e
  });
}
const Fe = typeof window < "u" ? $.useLayoutEffect : $.useEffect;
function oO(e, t, r, i, o) {
  const [s, a] = $.useState(() => o && r ? r(e).matches : i ? i(e).matches : t);
  return Fe(() => {
    if (!r)
      return;
    const l = r(e), c = () => {
      a(l.matches);
    };
    return c(), l.addEventListener("change", c), () => {
      l.removeEventListener("change", c);
    };
  }, [e, r]), s;
}
const sO = {
  ...$
}, tm = sO.useSyncExternalStore;
function aO(e, t, r, i, o) {
  const s = $.useCallback(() => t, [t]), a = $.useMemo(() => {
    if (o && r)
      return () => r(e).matches;
    if (i !== null) {
      const {
        matches: d
      } = i(e);
      return () => d;
    }
    return s;
  }, [s, e, i, o, r]), [l, c] = $.useMemo(() => {
    if (r === null)
      return [s, () => () => {
      }];
    const d = r(e);
    return [() => d.matches, (f) => (d.addEventListener("change", f), () => {
      d.removeEventListener("change", f);
    })];
  }, [s, r, e]);
  return tm(c, l, a);
}
function nm(e = {}) {
  const {
    themeId: t
  } = e;
  return function(i, o = {}) {
    let s = Yh();
    s && t && (s = s[t] || s);
    const a = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: l = !1,
      matchMedia: c = a ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: d = !1
    } = em({
      name: "MuiUseMediaQuery",
      props: o,
      theme: s
    });
    process.env.NODE_ENV !== "production" && typeof i == "function" && s === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
    let f = typeof i == "function" ? i(s) : i;
    f = f.replace(/^@media( ?)/m, ""), f.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`));
    const h = (tm !== void 0 ? aO : oO)(f, l, c, u, d);
    return process.env.NODE_ENV !== "production" && $.useDebugValue({
      query: f,
      match: h
    }), h;
  };
}
nm();
function lO(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Nc(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), lO(e, t, r);
}
function cO(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((i) => i + i)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((i, o) => o < 3 ? parseInt(i, 16) : Math.round(parseInt(i, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Rn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Rn(cO(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : kn(9, e));
  let i = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (i = i.split(" "), o = i.shift(), i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : kn(10, o));
  } else
    i = i.split(",");
  return i = i.map((s) => parseFloat(s)), {
    type: r,
    values: i,
    colorSpace: o
  };
}
const uO = (e) => {
  const t = Rn(e);
  return t.values.slice(0, 3).map((r, i) => t.type.includes("hsl") && i !== 0 ? `${r}%` : r).join(" ");
}, Ei = (e, t) => {
  try {
    return uO(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Ws(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: i
  } = e;
  return t.includes("rgb") ? i = i.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (i[1] = `${i[1]}%`, i[2] = `${i[2]}%`), t.includes("color") ? i = `${r} ${i.join(" ")}` : i = `${i.join(", ")}`, `${t}(${i})`;
}
function rm(e) {
  e = Rn(e);
  const {
    values: t
  } = e, r = t[0], i = t[1] / 100, o = t[2] / 100, s = i * Math.min(o, 1 - o), a = (u, d = (u + r / 30) % 12) => o - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Ws({
    type: l,
    values: c
  });
}
function Nl(e) {
  e = Rn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Rn(rm(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Xd(e, t) {
  const r = Nl(e), i = Nl(t);
  return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
}
function im(e, t) {
  return e = Rn(e), t = Nc(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Ws(e);
}
function zn(e, t, r) {
  try {
    return im(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ys(e, t) {
  if (e = Rn(e), t = Nc(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Ws(e);
}
function xe(e, t, r) {
  try {
    return Ys(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Xs(e, t) {
  if (e = Rn(e), t = Nc(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Ws(e);
}
function ve(e, t, r) {
  try {
    return Xs(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function dO(e, t = 0.15) {
  return Nl(e) > 0.5 ? Ys(e, t) : Xs(e, t);
}
function Po(e, t, r) {
  try {
    return dO(e, t);
  } catch {
    return e;
  }
}
const fO = "exact-prop: ​";
function om(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [fO]: (t) => {
      const r = Object.keys(t).filter((i) => !e.hasOwnProperty(i));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((i) => `\`${i}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const pO = /* @__PURE__ */ $.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const Ji = () => $.useContext(pO) ?? !1, hO = /* @__PURE__ */ $.createContext(void 0);
process.env.NODE_ENV !== "production" && (n.node, n.object);
function mO(e) {
  const {
    theme: t,
    name: r,
    props: i
  } = e;
  if (!t || !t.components || !t.components[r])
    return i;
  const o = t.components[r];
  return o.defaultProps ? or(o.defaultProps, i, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? or(o, i, t.components.mergeClassNameAndStyle) : i;
}
function gO({
  props: e,
  name: t
}) {
  const r = $.useContext(hO);
  return mO({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let Kd = 0;
function yO(e) {
  const [t, r] = $.useState(e), i = e || t;
  return $.useEffect(() => {
    t == null && (Kd += 1, r(`mui-${Kd}`));
  }, [t]), i;
}
const bO = {
  ...$
}, Zd = bO.useId;
function Qi(e) {
  if (Zd !== void 0) {
    const t = Zd();
    return e ?? t;
  }
  return yO(e);
}
const Jd = {
  theme: void 0
};
function xO(e) {
  let t, r;
  return function(o) {
    let s = t;
    return (s === void 0 || o.theme !== r) && (Jd.theme = o.theme, s = Zh(e(Jd)), t = s, r = o.theme), s;
  };
}
function vO(e = "") {
  function t(...i) {
    if (!i.length)
      return "";
    const o = i[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...i.slice(1))})` : `, ${o}`;
  }
  return (i, ...o) => `var(--${e ? `${e}-` : ""}${i}${t(...o)})`;
}
const Qd = (e, t, r, i = []) => {
  let o = e;
  t.forEach((s, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = r : o && typeof o == "object" && (o[s] = r) : o && typeof o == "object" && (o[s] || (o[s] = i.includes(s) ? [] : {}), o = o[s]);
  });
}, OO = (e, t, r) => {
  function i(o, s = [], a = []) {
    Object.entries(o).forEach(([l, c]) => {
      (!r || r && !r([...s, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? i(c, [...s, l], Array.isArray(c) ? [...a, l] : a) : t([...s, l], c, a));
    });
  }
  i(e);
}, TO = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((i) => e.includes(i)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Qa(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: i
  } = t || {}, o = {}, s = {}, a = {};
  return OO(
    e,
    (l, c, u) => {
      if ((typeof c == "string" || typeof c == "number") && (!i || !i(l, c))) {
        const d = `--${r ? `${r}-` : ""}${l.join("-")}`, f = TO(l, c);
        Object.assign(o, {
          [d]: f
        }), Qd(s, l, `var(${d})`, u), Qd(a, l, `var(${d}, ${f})`, u);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: s,
    varsWithDefaults: a
  };
}
function SO(e, t = {}) {
  const {
    getSelector: r = b,
    disableCssColorScheme: i,
    colorSchemeSelector: o,
    enableContrastVars: s
  } = t, {
    colorSchemes: a = {},
    components: l,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: d,
    css: f,
    varsWithDefaults: p
  } = Qa(u, t);
  let h = p;
  const g = {}, {
    [c]: m,
    ...y
  } = a;
  if (Object.entries(y || {}).forEach(([v, O]) => {
    const {
      vars: w,
      css: E,
      varsWithDefaults: R
    } = Qa(O, t);
    h = bt(h, R), g[v] = {
      css: E,
      vars: w
    };
  }), m) {
    const {
      css: v,
      vars: O,
      varsWithDefaults: w
    } = Qa(m, t);
    h = bt(h, w), g[c] = {
      css: v,
      vars: O
    };
  }
  function b(v, O) {
    let w = o;
    if (o === "class" && (w = ".%s"), o === "data" && (w = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (w = `[${o}="%s"]`), v) {
      if (w === "media")
        return e.defaultColorScheme === v ? ":root" : {
          [`@media (prefers-color-scheme: ${a[v]?.palette?.mode || v})`]: {
            ":root": O
          }
        };
      if (w)
        return e.defaultColorScheme === v ? `:root, ${w.replace("%s", String(v))}` : w.replace("%s", String(v));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let v = {
        ...d
      };
      return Object.entries(g).forEach(([, {
        vars: O
      }]) => {
        v = bt(v, O);
      }), v;
    },
    generateStyleSheets: () => {
      const v = [], O = e.defaultColorScheme || "light";
      function w(I, j) {
        Object.keys(j).length && v.push(typeof I == "string" ? {
          [I]: {
            ...j
          }
        } : I);
      }
      w(r(void 0, {
        ...f
      }), f);
      const {
        [O]: E,
        ...R
      } = g;
      if (E) {
        const {
          css: I
        } = E, j = a[O]?.palette?.mode, _ = !i && j ? {
          colorScheme: j,
          ...I
        } : {
          ...I
        };
        w(r(O, {
          ..._
        }), _);
      }
      return Object.entries(R).forEach(([I, {
        css: j
      }]) => {
        const _ = a[I]?.palette?.mode, T = !i && _ ? {
          colorScheme: _,
          ...j
        } : {
          ...j
        };
        w(r(I, {
          ...T
        }), T);
      }), s && v.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), v;
    }
  };
}
function wO(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const $i = {
  black: "#000",
  white: "#fff"
}, CO = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Tr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Sr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, bi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, wr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Cr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Er = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function sm() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: $i.white,
      default: $i.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const am = sm();
function lm() {
  return {
    text: {
      primary: $i.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: $i.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Fl = lm();
function ef(e, t, r, i) {
  const o = i.light || i, s = i.dark || i * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Xs(e.main, o) : t === "dark" && (e.dark = Ys(e.main, s)));
}
function tf(e, t, r, i, o) {
  const s = o.light || o, a = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(i) ? t[r] = t[i] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function EO(e = "light") {
  return e === "dark" ? {
    main: wr[200],
    light: wr[50],
    dark: wr[400]
  } : {
    main: wr[700],
    light: wr[400],
    dark: wr[800]
  };
}
function kO(e = "light") {
  return e === "dark" ? {
    main: Tr[200],
    light: Tr[50],
    dark: Tr[400]
  } : {
    main: Tr[500],
    light: Tr[300],
    dark: Tr[700]
  };
}
function RO(e = "light") {
  return e === "dark" ? {
    main: Sr[500],
    light: Sr[300],
    dark: Sr[700]
  } : {
    main: Sr[700],
    light: Sr[400],
    dark: Sr[800]
  };
}
function AO(e = "light") {
  return e === "dark" ? {
    main: Cr[400],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: Cr[700],
    light: Cr[500],
    dark: Cr[900]
  };
}
function PO(e = "light") {
  return e === "dark" ? {
    main: Er[400],
    light: Er[300],
    dark: Er[700]
  } : {
    main: Er[800],
    light: Er[500],
    dark: Er[900]
  };
}
function IO(e = "light") {
  return e === "dark" ? {
    main: bi[400],
    light: bi[300],
    dark: bi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: bi[500],
    dark: bi[900]
  };
}
function MO(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Fc(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: i = 0.2,
    colorSpace: o,
    ...s
  } = e, a = e.primary || EO(t), l = e.secondary || kO(t), c = e.error || RO(t), u = e.info || AO(t), d = e.success || PO(t), f = e.warning || IO(t);
  function p(y) {
    if (o)
      return MO(y);
    const b = Xd(y, Fl.text.primary) >= r ? Fl.text.primary : am.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = Xd(y, b);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${b} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return b;
  }
  const h = ({
    color: y,
    name: b,
    mainShade: S = 500,
    lightShade: C = 300,
    darkShade: v = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[S] && (y.main = y[S]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : kn(11, b ? ` (${b})` : "", S));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : kn(12, b ? ` (${b})` : "", JSON.stringify(y.main)));
    return o ? (tf(o, y, "light", C, i), tf(o, y, "dark", v, i)) : (ef(y, "light", C, i), ef(y, "dark", v, i)), y.contrastText || (y.contrastText = p(y.main)), y;
  };
  let g;
  return t === "light" ? g = sm() : t === "dark" && (g = lm()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), bt({
    // A collection of common colors.
    common: {
      ...$i
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: CO,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: i,
    // The light and dark mode object.
    ...g
  }, s);
}
function _O(e) {
  const t = {};
  return Object.entries(e).forEach((i) => {
    const [o, s] = i;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function jO(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function $O(e) {
  return Math.round(e * 1e5) / 1e5;
}
const nf = {
  textTransform: "uppercase"
}, rf = '"Roboto", "Helvetica", "Arial", sans-serif';
function DO(e, t) {
  const {
    fontFamily: r = rf,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: d,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const p = i / 14, h = d || ((y) => `${y / c * p}rem`), g = (y, b, S, C, v) => ({
    fontFamily: r,
    fontWeight: y,
    fontSize: h(b),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: S,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === rf ? {
      letterSpacing: `${$O(C / b)}em`
    } : {},
    ...v,
    ...u
  }), m = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(s, 48, 1.167, 0),
    h4: g(s, 34, 1.235, 0.25),
    h5: g(s, 24, 1.334, 0),
    h6: g(a, 20, 1.6, 0.15),
    subtitle1: g(s, 16, 1.75, 0.15),
    subtitle2: g(a, 14, 1.57, 0.1),
    body1: g(s, 16, 1.5, 0.15),
    body2: g(s, 14, 1.43, 0.15),
    button: g(a, 14, 1.75, 0.4, nf),
    caption: g(s, 12, 1.66, 0.4),
    overline: g(s, 12, 2.66, 1, nf),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return bt({
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...m
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const LO = 0.2, NO = 0.14, FO = 0.12;
function Pe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${LO})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${NO})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${FO})`].join(",");
}
const qO = ["none", Pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], zO = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, BO = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function of(e) {
  return `${Math.round(e)}ms`;
}
function VO(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function UO(e) {
  const t = {
    ...zO,
    ...e.easing
  }, r = {
    ...BO,
    ...e.duration
  };
  return {
    getAutoHeightDuration: VO,
    create: (o = ["all"], s = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...u
      } = s;
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", f = (p) => !Number.isNaN(parseFloat(p));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : of(a)} ${l} ${typeof c == "string" ? c : of(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const HO = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function GO(e) {
  return Ht(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function cm(e = {}) {
  const t = {
    ...e
  };
  function r(i) {
    const o = Object.entries(i);
    for (let s = 0; s < o.length; s++) {
      const [a, l] = o[s];
      !GO(l) || a.startsWith("unstable_") ? delete i[a] : Ht(l) && (i[a] = {
        ...l
      }, r(i[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function sf(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const WO = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let i = 0; i < t.length; i += 1)
    r += +t[i];
  return r;
};
function YO(e) {
  Object.assign(e, {
    alpha(t, r) {
      const i = this || e;
      return i.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : i.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : im(t, WO(r));
    },
    lighten(t, r) {
      const i = this || e;
      return i.colorSpace ? `color-mix(in ${i.colorSpace}, ${t}, #fff ${sf(r)})` : Xs(t, r);
    },
    darken(t, r) {
      const i = this || e;
      return i.colorSpace ? `color-mix(in ${i.colorSpace}, ${t}, #000 ${sf(r)})` : Ys(t, r);
    }
  });
}
function ql(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: i = {},
    spacing: o,
    palette: s = {},
    transitions: a = {},
    typography: l = {},
    shape: c,
    colorSpace: u,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : kn(20));
  const f = Fc({
    ...s,
    colorSpace: u
  }), p = Lc(e);
  let h = bt(p, {
    mixins: jO(p.breakpoints, i),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: qO.slice(),
    typography: DO(f, l),
    transitions: UO(a),
    zIndex: {
      ...HO
    }
  });
  if (h = bt(h, d), h = t.reduce((g, m) => bt(g, m), h), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (y, b) => {
      let S;
      for (S in y) {
        const C = y[S];
        if (g.includes(S) && Object.keys(C).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = Ee("", S);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${S}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: C
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[S] = {};
        }
      }
    };
    Object.keys(h.components).forEach((y) => {
      const b = h.components[y].styleOverrides;
      b && y.startsWith("Mui") && m(b, y);
    });
  }
  return h.unstable_sxConfig = {
    ...Zi,
    ...d?.unstable_sxConfig
  }, h.unstable_sx = function(m) {
    return zr({
      sx: m,
      theme: this
    });
  }, h.toRuntimeSource = cm, YO(h), h;
}
function XO(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const KO = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = XO(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function um(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function dm(e) {
  return e === "dark" ? KO : [];
}
function ZO(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: i,
    colorSpace: o,
    ...s
  } = e, a = Fc({
    ...t,
    colorSpace: o
  });
  return {
    palette: a,
    opacity: {
      ...um(a.mode),
      ...r
    },
    overlays: i || dm(a.mode),
    ...s
  };
}
function JO(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const QO = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], eT = (e) => (t, r) => {
  const i = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let s = o;
  if (o === "class" && (s = ".%s"), o === "data" && (s = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (s = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return QO(e.cssVarPrefix).forEach((l) => {
        a[l] = r[l], delete r[l];
      }), s === "media" ? {
        [i]: r,
        "@media (prefers-color-scheme: dark)": {
          [i]: a
        }
      } : s ? {
        [s.replace("%s", t)]: a,
        [`${i}, ${s.replace("%s", t)}`]: r
      } : {
        [i]: {
          ...r,
          ...a
        }
      };
    }
    if (s && s !== "media")
      return `${i}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [i]: r
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return i;
};
function tT(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function U(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function ki(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : rm(e);
}
function Qt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ei(ki(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function nT(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const zt = (e) => {
  try {
    return e();
  } catch {
  }
}, rT = (e = "mui") => vO(e);
function el(e, t, r, i, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const s = o === "dark" ? "dark" : "light";
  if (!i) {
    t[o] = ZO({
      ...r,
      palette: {
        mode: s,
        ...r?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...l
  } = ql({
    ...i,
    palette: {
      mode: s,
      ...r?.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: a,
    opacity: {
      ...um(s),
      ...r?.opacity
    },
    overlays: r?.overlays || dm(s)
  }, l;
}
function iT(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: i,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: l = JO,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, f = Object.keys(r)[0], p = i || (r.light && f !== "light" ? "light" : f), h = rT(s), {
    [p]: g,
    light: m,
    dark: y,
    ...b
  } = r, S = {
    ...b
  };
  let C = g;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (C = !0), !C)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : kn(21, p));
  let v;
  a && (v = "oklch");
  const O = el(v, S, C, d, p);
  m && !S.light && el(v, S, m, void 0, "light"), y && !S.dark && el(v, S, y, void 0, "dark");
  let w = {
    defaultColorScheme: p,
    ...O,
    cssVarPrefix: s,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: h,
    colorSchemes: S,
    font: {
      ..._O(O.typography),
      ...O.font
    },
    spacing: nT(d.spacing)
  };
  Object.keys(w.colorSchemes).forEach((_) => {
    const T = w.colorSchemes[_].palette, M = (N) => {
      const L = N.split("-"), z = L[1], H = L[2];
      return h(N, T[z][H]);
    };
    T.mode === "light" && (U(T.common, "background", "#fff"), U(T.common, "onBackground", "#000")), T.mode === "dark" && (U(T.common, "background", "#000"), U(T.common, "onBackground", "#fff"));
    function P(N, L, z) {
      if (v) {
        let H;
        return N === zn && (H = `transparent ${((1 - z) * 100).toFixed(0)}%`), N === xe && (H = `#000 ${(z * 100).toFixed(0)}%`), N === ve && (H = `#fff ${(z * 100).toFixed(0)}%`), `color-mix(in ${v}, ${L}, ${H})`;
      }
      return N(L, z);
    }
    if (tT(T, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), T.mode === "light") {
      U(T.Alert, "errorColor", P(xe, T.error.light, 0.6)), U(T.Alert, "infoColor", P(xe, T.info.light, 0.6)), U(T.Alert, "successColor", P(xe, T.success.light, 0.6)), U(T.Alert, "warningColor", P(xe, T.warning.light, 0.6)), U(T.Alert, "errorFilledBg", M("palette-error-main")), U(T.Alert, "infoFilledBg", M("palette-info-main")), U(T.Alert, "successFilledBg", M("palette-success-main")), U(T.Alert, "warningFilledBg", M("palette-warning-main")), U(T.Alert, "errorFilledColor", zt(() => T.getContrastText(T.error.main))), U(T.Alert, "infoFilledColor", zt(() => T.getContrastText(T.info.main))), U(T.Alert, "successFilledColor", zt(() => T.getContrastText(T.success.main))), U(T.Alert, "warningFilledColor", zt(() => T.getContrastText(T.warning.main))), U(T.Alert, "errorStandardBg", P(ve, T.error.light, 0.9)), U(T.Alert, "infoStandardBg", P(ve, T.info.light, 0.9)), U(T.Alert, "successStandardBg", P(ve, T.success.light, 0.9)), U(T.Alert, "warningStandardBg", P(ve, T.warning.light, 0.9)), U(T.Alert, "errorIconColor", M("palette-error-main")), U(T.Alert, "infoIconColor", M("palette-info-main")), U(T.Alert, "successIconColor", M("palette-success-main")), U(T.Alert, "warningIconColor", M("palette-warning-main")), U(T.AppBar, "defaultBg", M("palette-grey-100")), U(T.Avatar, "defaultBg", M("palette-grey-400")), U(T.Button, "inheritContainedBg", M("palette-grey-300")), U(T.Button, "inheritContainedHoverBg", M("palette-grey-A100")), U(T.Chip, "defaultBorder", M("palette-grey-400")), U(T.Chip, "defaultAvatarColor", M("palette-grey-700")), U(T.Chip, "defaultIconColor", M("palette-grey-700")), U(T.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), U(T.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), U(T.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), U(T.LinearProgress, "primaryBg", P(ve, T.primary.main, 0.62)), U(T.LinearProgress, "secondaryBg", P(ve, T.secondary.main, 0.62)), U(T.LinearProgress, "errorBg", P(ve, T.error.main, 0.62)), U(T.LinearProgress, "infoBg", P(ve, T.info.main, 0.62)), U(T.LinearProgress, "successBg", P(ve, T.success.main, 0.62)), U(T.LinearProgress, "warningBg", P(ve, T.warning.main, 0.62)), U(T.Skeleton, "bg", v ? P(zn, T.text.primary, 0.11) : `rgba(${M("palette-text-primaryChannel")} / 0.11)`), U(T.Slider, "primaryTrack", P(ve, T.primary.main, 0.62)), U(T.Slider, "secondaryTrack", P(ve, T.secondary.main, 0.62)), U(T.Slider, "errorTrack", P(ve, T.error.main, 0.62)), U(T.Slider, "infoTrack", P(ve, T.info.main, 0.62)), U(T.Slider, "successTrack", P(ve, T.success.main, 0.62)), U(T.Slider, "warningTrack", P(ve, T.warning.main, 0.62));
      const N = v ? P(xe, T.background.default, 0.6825) : Po(T.background.default, 0.8);
      U(T.SnackbarContent, "bg", N), U(T.SnackbarContent, "color", zt(() => v ? Fl.text.primary : T.getContrastText(N))), U(T.SpeedDialAction, "fabHoverBg", Po(T.background.paper, 0.15)), U(T.StepConnector, "border", M("palette-grey-400")), U(T.StepContent, "border", M("palette-grey-400")), U(T.Switch, "defaultColor", M("palette-common-white")), U(T.Switch, "defaultDisabledColor", M("palette-grey-100")), U(T.Switch, "primaryDisabledColor", P(ve, T.primary.main, 0.62)), U(T.Switch, "secondaryDisabledColor", P(ve, T.secondary.main, 0.62)), U(T.Switch, "errorDisabledColor", P(ve, T.error.main, 0.62)), U(T.Switch, "infoDisabledColor", P(ve, T.info.main, 0.62)), U(T.Switch, "successDisabledColor", P(ve, T.success.main, 0.62)), U(T.Switch, "warningDisabledColor", P(ve, T.warning.main, 0.62)), U(T.TableCell, "border", P(ve, P(zn, T.divider, 1), 0.88)), U(T.Tooltip, "bg", P(zn, T.grey[700], 0.92));
    }
    if (T.mode === "dark") {
      U(T.Alert, "errorColor", P(ve, T.error.light, 0.6)), U(T.Alert, "infoColor", P(ve, T.info.light, 0.6)), U(T.Alert, "successColor", P(ve, T.success.light, 0.6)), U(T.Alert, "warningColor", P(ve, T.warning.light, 0.6)), U(T.Alert, "errorFilledBg", M("palette-error-dark")), U(T.Alert, "infoFilledBg", M("palette-info-dark")), U(T.Alert, "successFilledBg", M("palette-success-dark")), U(T.Alert, "warningFilledBg", M("palette-warning-dark")), U(T.Alert, "errorFilledColor", zt(() => T.getContrastText(T.error.dark))), U(T.Alert, "infoFilledColor", zt(() => T.getContrastText(T.info.dark))), U(T.Alert, "successFilledColor", zt(() => T.getContrastText(T.success.dark))), U(T.Alert, "warningFilledColor", zt(() => T.getContrastText(T.warning.dark))), U(T.Alert, "errorStandardBg", P(xe, T.error.light, 0.9)), U(T.Alert, "infoStandardBg", P(xe, T.info.light, 0.9)), U(T.Alert, "successStandardBg", P(xe, T.success.light, 0.9)), U(T.Alert, "warningStandardBg", P(xe, T.warning.light, 0.9)), U(T.Alert, "errorIconColor", M("palette-error-main")), U(T.Alert, "infoIconColor", M("palette-info-main")), U(T.Alert, "successIconColor", M("palette-success-main")), U(T.Alert, "warningIconColor", M("palette-warning-main")), U(T.AppBar, "defaultBg", M("palette-grey-900")), U(T.AppBar, "darkBg", M("palette-background-paper")), U(T.AppBar, "darkColor", M("palette-text-primary")), U(T.Avatar, "defaultBg", M("palette-grey-600")), U(T.Button, "inheritContainedBg", M("palette-grey-800")), U(T.Button, "inheritContainedHoverBg", M("palette-grey-700")), U(T.Chip, "defaultBorder", M("palette-grey-700")), U(T.Chip, "defaultAvatarColor", M("palette-grey-300")), U(T.Chip, "defaultIconColor", M("palette-grey-300")), U(T.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), U(T.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), U(T.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), U(T.LinearProgress, "primaryBg", P(xe, T.primary.main, 0.5)), U(T.LinearProgress, "secondaryBg", P(xe, T.secondary.main, 0.5)), U(T.LinearProgress, "errorBg", P(xe, T.error.main, 0.5)), U(T.LinearProgress, "infoBg", P(xe, T.info.main, 0.5)), U(T.LinearProgress, "successBg", P(xe, T.success.main, 0.5)), U(T.LinearProgress, "warningBg", P(xe, T.warning.main, 0.5)), U(T.Skeleton, "bg", v ? P(zn, T.text.primary, 0.13) : `rgba(${M("palette-text-primaryChannel")} / 0.13)`), U(T.Slider, "primaryTrack", P(xe, T.primary.main, 0.5)), U(T.Slider, "secondaryTrack", P(xe, T.secondary.main, 0.5)), U(T.Slider, "errorTrack", P(xe, T.error.main, 0.5)), U(T.Slider, "infoTrack", P(xe, T.info.main, 0.5)), U(T.Slider, "successTrack", P(xe, T.success.main, 0.5)), U(T.Slider, "warningTrack", P(xe, T.warning.main, 0.5));
      const N = v ? P(ve, T.background.default, 0.985) : Po(T.background.default, 0.98);
      U(T.SnackbarContent, "bg", N), U(T.SnackbarContent, "color", zt(() => v ? am.text.primary : T.getContrastText(N))), U(T.SpeedDialAction, "fabHoverBg", Po(T.background.paper, 0.15)), U(T.StepConnector, "border", M("palette-grey-600")), U(T.StepContent, "border", M("palette-grey-600")), U(T.Switch, "defaultColor", M("palette-grey-300")), U(T.Switch, "defaultDisabledColor", M("palette-grey-600")), U(T.Switch, "primaryDisabledColor", P(xe, T.primary.main, 0.55)), U(T.Switch, "secondaryDisabledColor", P(xe, T.secondary.main, 0.55)), U(T.Switch, "errorDisabledColor", P(xe, T.error.main, 0.55)), U(T.Switch, "infoDisabledColor", P(xe, T.info.main, 0.55)), U(T.Switch, "successDisabledColor", P(xe, T.success.main, 0.55)), U(T.Switch, "warningDisabledColor", P(xe, T.warning.main, 0.55)), U(T.TableCell, "border", P(xe, P(zn, T.divider, 1), 0.68)), U(T.Tooltip, "bg", P(zn, T.grey[700], 0.92));
    }
    Qt(T.background, "default"), Qt(T.background, "paper"), Qt(T.common, "background"), Qt(T.common, "onBackground"), Qt(T, "divider"), Object.keys(T).forEach((N) => {
      const L = T[N];
      N !== "tonalOffset" && L && typeof L == "object" && (L.main && U(T[N], "mainChannel", Ei(ki(L.main))), L.light && U(T[N], "lightChannel", Ei(ki(L.light))), L.dark && U(T[N], "darkChannel", Ei(ki(L.dark))), L.contrastText && U(T[N], "contrastTextChannel", Ei(ki(L.contrastText))), N === "text" && (Qt(T[N], "primary"), Qt(T[N], "secondary")), N === "action" && (L.active && Qt(T[N], "active"), L.selected && Qt(T[N], "selected")));
    });
  }), w = t.reduce((_, T) => bt(_, T), w);
  const E = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: eT(w),
    enableContrastVars: a
  }, {
    vars: R,
    generateThemeVars: I,
    generateStyleSheets: j
  } = SO(w, E);
  return w.vars = R, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([_, T]) => {
    w[_] = T;
  }), w.generateThemeVars = I, w.generateStyleSheets = j, w.generateSpacing = function() {
    return Wh(d.spacing, $c(this));
  }, w.getColorSchemeSelector = wO(c), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = l, w.unstable_sxConfig = {
    ...Zi,
    ...d?.unstable_sxConfig
  }, w.unstable_sx = function(T) {
    return zr({
      sx: T,
      theme: this
    });
  }, w.toRuntimeSource = cm, w;
}
function af(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Fc({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function oT(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: i = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = r?.mode,
    ...a
  } = e, l = s || "light", c = o?.[l], u = {
    ...o,
    ...r ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (i === !1) {
    if (!("colorSchemes" in e))
      return ql(e, ...t);
    let d = r;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = ql({
      ...e,
      palette: d
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, af(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, af(f, "light", u.light)), f;
  }
  return !r && !("light" in u) && l === "light" && (u.light = !0), iT({
    ...a,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof i != "boolean" && i
  }, ...t);
}
const qc = oT(), Ks = "$$material";
function Ft() {
  const e = Xh(qc);
  return process.env.NODE_ENV !== "production" && $.useDebugValue(e), e[Ks] || e;
}
function sT(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const fm = (e) => sT(e) && e !== "classes", le = Qv({
  themeId: Ks,
  defaultTheme: qc,
  rootShouldForwardProp: fm
});
function aT() {
  return Mv;
}
const An = xO;
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function jn(e) {
  return gO(e);
}
function lT(e) {
  return Ee("MuiSvgIcon", e);
}
Se("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const cT = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: i
  } = e, o = {
    root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(r)}`]
  };
  return Ae(o, lT, i);
}, uT = le("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${pe(r.color)}`], t[`fontSize${pe(r.fontSize)}`]];
  }
})(An(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (t) => !t.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), us = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = jn({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: a = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24",
    ...h
  } = i, g = /* @__PURE__ */ $.isValidElement(o) && o.type === "svg", m = {
    ...i,
    color: a,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p,
    hasSvgAsChild: g
  }, y = {};
  d || (y.viewBox = p);
  const b = cT(m);
  return /* @__PURE__ */ x.jsxs(uT, {
    as: l,
    className: be(b.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: r,
    ...y,
    ...h,
    ...g && o.props,
    ownerState: m,
    children: [g ? o.props.children : o, f ? /* @__PURE__ */ x.jsx("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (us.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
us.muiName = "SvgIcon";
function Zs(e, t) {
  function r(i, o) {
    return /* @__PURE__ */ x.jsx(us, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...i,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = us.muiName, /* @__PURE__ */ $.memo(/* @__PURE__ */ $.forwardRef(r));
}
function zl(e) {
  return e && e.ownerDocument || document;
}
function dT(e) {
  return zl(e).defaultView || window;
}
function lf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function ze(e) {
  const t = $.useRef(e);
  return Fe(() => {
    t.current = e;
  }), $.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Pn(...e) {
  const t = $.useRef(void 0), r = $.useCallback((i) => {
    const o = e.map((s) => {
      if (s == null)
        return null;
      if (typeof s == "function") {
        const a = s, l = a(i);
        return typeof l == "function" ? l : () => {
          a(null);
        };
      }
      return s.current = i, () => {
        s.current = null;
      };
    });
    return () => {
      o.forEach((s) => s?.());
    };
  }, e);
  return $.useMemo(() => e.every((i) => i == null) ? null : (i) => {
    t.current && (t.current(), t.current = void 0), i != null && (t.current = r(i));
  }, e);
}
const zc = Zs(/* @__PURE__ */ x.jsx("path", {
  d: "m21.9 21.9-8.49-8.49-9.82-9.82L2.1 2.1.69 3.51 3 5.83V19c0 1.1.9 2 2 2h13.17l2.31 2.31zM5 18l3.5-4.5 2.5 3.01L12.17 15l3 3zm16 .17L5.83 3H19c1.1 0 2 .9 2 2z"
}), "ImageNotSupported"), Bl = Zs(/* @__PURE__ */ x.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
}), "Refresh"), fT = () => /* @__PURE__ */ x.jsxs(Ie, { sx: { textAlign: "center", py: 8, color: "text.secondary" }, children: [
  /* @__PURE__ */ x.jsx(zc, { sx: { fontSize: 60, mb: 2, opacity: 0.5 } }),
  /* @__PURE__ */ x.jsx(Be, { variant: "h6", children: "لا يوجد بيانات لعرضها" })
] }), pT = () => /* @__PURE__ */ x.jsx(
  Ie,
  {
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: 4
    },
    children: /* @__PURE__ */ x.jsx(ni, {})
  }
), hT = ({
  rows: e = [],
  columns: t = [],
  getRowId: r = (R) => R.id,
  loading: i = !1,
  error: o,
  pagination: s = !1,
  rowCount: a = 0,
  page: l = 1,
  onPageChange: c = () => {
  },
  onRowClick: u = () => {
  },
  selectedRowId: d,
  onSelectedRowIdChange: f = () => {
  },
  perPage: p = 10,
  onPerPageChange: h = () => {
  },
  perPageOptions: g = [10, 25, 100],
  sorting: m = !1,
  sortModel: y = [],
  onSortModelChange: b = () => {
  },
  showRowNumber: S = !0,
  slots: C = {},
  slotProps: v = {},
  sx: O,
  height: w = "90dvh",
  onRefresh: E
}) => {
  const R = Vt(null), I = Vt({}), [j, _] = Re(null), T = d ?? j, {
    toolbar: M,
    noRowsOverlay: P = fT,
    loadingOverlay: N = pT
  } = C, L = (k, B = 15, G = 80) => {
    let W = 0;
    const X = () => {
      const J = I.current[k];
      J ? J.scrollIntoView({ behavior: "auto", block: "center" }) : W < B && (W++, setTimeout(X, G));
    };
    X();
  };
  ut(() => {
    T && L(T);
  }, [T, e, l]);
  const z = (k) => {
    if (!m) return;
    const B = y.find((W) => W.field === k);
    let G = B ? B.sort === "asc" ? [{ field: k, sort: "desc" }] : [] : [{ field: k, sort: "asc" }];
    b(G);
  }, H = y.length > 0 ? y[0] : null, Z = [
    ...S ? [
      {
        field: "__rowNumber__",
        headerName: "#",
        width: 60,
        align: "center",
        renderCell: ({ index: k }) => (l - 1) * p + k + 1
      }
    ] : [],
    ...t
  ], F = (k) => k.sticky ? {
    position: "sticky",
    [k.sticky]: 0,
    background: "white",
    zIndex: 1
  } : {};
  return /* @__PURE__ */ x.jsxs(gn, { sx: O, children: [
    M && /* @__PURE__ */ x.jsxs(Zn, { children: [
      /* @__PURE__ */ x.jsx(M, { ...v.toolbar || {} }),
      E && /* @__PURE__ */ x.jsx(xd, { title: "تحديث البيانات", children: /* @__PURE__ */ x.jsx(ji, { onClick: () => E(), disabled: i, children: /* @__PURE__ */ x.jsx(Bl, {}) }) })
    ] }),
    !M && E && /* @__PURE__ */ x.jsx(Zn, { sx: { justifyContent: "flex-end" }, children: /* @__PURE__ */ x.jsx(xd, { title: "تحديث البيانات", children: /* @__PURE__ */ x.jsx(ji, { onClick: () => E(), disabled: i, children: /* @__PURE__ */ x.jsx(Bl, {}) }) }) }),
    i && e.length > 0 && /* @__PURE__ */ x.jsx(_h, {}),
    /* @__PURE__ */ x.jsx(Ie, { sx: { width: "100%", overflowX: "auto" }, children: /* @__PURE__ */ x.jsx(
      Hx,
      {
        ref: R,
        sx: { height: w, overflowY: "auto" },
        children: /* @__PURE__ */ x.jsxs(Gx, { stickyHeader: !0, children: [
          /* @__PURE__ */ x.jsx(Wx, { children: /* @__PURE__ */ x.jsx(hi, { children: Z.map((k) => /* @__PURE__ */ x.jsx(
            mi,
            {
              align: k.align || "inherit",
              width: k.width,
              sx: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                ...F(k)
              },
              sortDirection: H?.field === k.field ? H.sort : !1,
              children: k.sortable && m ? /* @__PURE__ */ x.jsx(
                Yx,
                {
                  active: H?.field === k.field,
                  direction: H?.field === k.field ? H.sort : "asc",
                  onClick: () => z(k.field),
                  children: k.headerName
                }
              ) : k.headerName
            },
            k.field
          )) }) }),
          /* @__PURE__ */ x.jsx(Xx, { children: i && e.length === 0 ? /* @__PURE__ */ x.jsx(hi, { children: /* @__PURE__ */ x.jsx(
            mi,
            {
              colSpan: Z.length,
              sx: { border: "none" },
              children: /* @__PURE__ */ x.jsx(N, { ...v.loadingOverlay || {} })
            }
          ) }) : o ? /* @__PURE__ */ x.jsx(hi, { children: /* @__PURE__ */ x.jsx(
            mi,
            {
              colSpan: Z.length,
              sx: { border: "none", textAlign: "center" },
              children: /* @__PURE__ */ x.jsx(Be, { color: "error", children: o.message || "An error occurred." })
            }
          ) }) : e.length === 0 ? /* @__PURE__ */ x.jsx(hi, { children: /* @__PURE__ */ x.jsx(
            mi,
            {
              colSpan: Z.length,
              sx: { border: "none" },
              children: /* @__PURE__ */ x.jsx(P, { ...v.noRowsOverlay || {} })
            }
          ) }) : e.map((k, B) => {
            const G = r(k), W = T === G;
            return /* @__PURE__ */ x.jsx(
              hi,
              {
                ref: (X) => I.current[G] = X,
                hover: !0,
                selected: W,
                onClick: () => {
                  _(G), f(G), u && u(k);
                },
                sx: { cursor: "pointer" },
                children: Z.map((X) => {
                  const J = X.field.split(".").reduce((Q, te) => Q?.[te], k);
                  return /* @__PURE__ */ x.jsx(
                    mi,
                    {
                      align: X.align || "inherit",
                      sx: {
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        ...F(X)
                      },
                      children: X.renderCell ? X.renderCell({
                        value: J,
                        row: k,
                        id: r(k),
                        index: B
                      }) : J
                    },
                    X.field
                  );
                })
              },
              r(k)
            );
          }) })
        ] })
      }
    ) }),
    s && !o && e.length > 0 && /* @__PURE__ */ x.jsx(
      jh,
      {
        component: "div",
        count: a,
        page: l - 1,
        onPageChange: (k, B) => c(B + 1),
        rowsPerPage: p,
        onRowsPerPageChange: (k) => h(parseInt(k.target.value, 10)),
        rowsPerPageOptions: g,
        showFirstButton: !0,
        showLastButton: !0,
        labelRowsPerPage: null,
        labelDisplayedRows: ({ from: k, to: B, count: G }) => `${k} - ${B} | ${G}`,
        sx: { display: "flex", justifyContent: "center" }
      }
    )
  ] });
}, mT = Zs(/* @__PURE__ */ x.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "ErrorOutline"), gT = () => /* @__PURE__ */ x.jsxs(Ie, { sx: { textAlign: "center", py: 8, color: "text.secondary" }, children: [
  /* @__PURE__ */ x.jsx(zc, { sx: { fontSize: 60, mb: 2, opacity: 0.5 } }),
  /* @__PURE__ */ x.jsx(Be, { variant: "h6", children: "لا يوجد بيانات لعرضها" })
] }), yT = () => /* @__PURE__ */ x.jsx(ir, { container: !0, spacing: 2, children: Array.from({ length: 8 }).map((e, t) => /* @__PURE__ */ x.jsx(ir, { size: { xs: 12, sm: 6, md: 4, lg: 3 }, children: /* @__PURE__ */ x.jsxs($h, { sx: { borderRadius: 3, boxShadow: 2 }, children: [
  /* @__PURE__ */ x.jsx(Co, { variant: "rectangular", height: 140 }),
  /* @__PURE__ */ x.jsxs(Dh, { children: [
    /* @__PURE__ */ x.jsx(Co, { width: "60%" }),
    /* @__PURE__ */ x.jsx(Co, { width: "80%" }),
    /* @__PURE__ */ x.jsx(Co, { width: "40%" })
  ] })
] }) }, t)) }), bT = ({ message: e, onRetry: t }) => /* @__PURE__ */ x.jsxs(Ie, { sx: { textAlign: "center", py: 8 }, children: [
  /* @__PURE__ */ x.jsx(mT, { color: "error", sx: { fontSize: 60, mb: 2 } }),
  /* @__PURE__ */ x.jsx(Be, { variant: "h6", color: "error", children: "حدث خطأ أثناء تحميل البيانات" }),
  /* @__PURE__ */ x.jsx(Be, { variant: "body2", sx: { mb: 2 }, children: e || "يرجى المحاولة مرة أخرى." }),
  t && /* @__PURE__ */ x.jsx(En, { variant: "outlined", color: "error", onClick: t, children: "إعادة المحاولة" })
] }), xT = ({
  rows: e = [],
  columns: t = [],
  getRowId: r = (b) => b.id,
  loading: i = !1,
  error: o,
  slots: s = {},
  sx: a,
  pagination: l = !1,
  rowCount: c = 0,
  page: u = 1,
  onPageChange: d = () => {
  },
  perPage: f = 10,
  onPerPageChange: p = () => {
  },
  perPageOptions: h = [10, 25, 100],
  onRetry: g,
  renderCard: m,
  onRefresh: y
}) => {
  const {
    noRowsOverlay: b = gT,
    loadingOverlay: S = yT,
    errorOverlay: C = bT
  } = s;
  return i && e.length === 0 ? /* @__PURE__ */ x.jsx(S, {}) : o ? /* @__PURE__ */ x.jsx(C, { message: o.message, onRetry: g }) : e.length === 0 ? /* @__PURE__ */ x.jsx(b, {}) : /* @__PURE__ */ x.jsxs(gn, { sx: { p: 2, borderRadius: 3, ...a }, children: [
    i && e.length > 0 && /* @__PURE__ */ x.jsx(_h, { sx: { mb: 2, borderRadius: 1 } }),
    y && /* @__PURE__ */ x.jsx(Ie, { sx: { display: "flex", justifyContent: "flex-end", mb: 2 }, children: /* @__PURE__ */ x.jsx(
      En,
      {
        startIcon: /* @__PURE__ */ x.jsx(Bl, {}),
        onClick: () => y(),
        variant: "outlined",
        size: "small",
        disabled: i,
        children: "تحديث"
      }
    ) }),
    /* @__PURE__ */ x.jsx(ir, { container: !0, spacing: 2, children: e.map((v) => /* @__PURE__ */ x.jsx(ir, { size: { xs: 12, sm: 6, md: 4, lg: 3 }, children: m ? m(v) : /* @__PURE__ */ x.jsxs(
      $h,
      {
        sx: {
          borderRadius: 3,
          boxShadow: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column"
        },
        children: [
          v.image ? /* @__PURE__ */ x.jsx(
            Kx,
            {
              component: "img",
              height: "140",
              image: v.image,
              alt: v.title || "Image",
              sx: { borderTopLeftRadius: 12, borderTopRightRadius: 12 }
            }
          ) : /* @__PURE__ */ x.jsx(
            Ie,
            {
              sx: {
                height: 140,
                bgcolor: "grey.100",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ x.jsx(zc, { sx: { color: "grey.400", fontSize: 50 } })
            }
          ),
          /* @__PURE__ */ x.jsx(Dh, { children: t.map((O) => /* @__PURE__ */ x.jsxs(Ie, { sx: { mb: 1 }, children: [
            /* @__PURE__ */ x.jsx(Be, { variant: "caption", color: "text.secondary", children: O.headerName }),
            /* @__PURE__ */ x.jsx(Be, { variant: "body1", sx: { fontWeight: 500 }, children: O.renderCell ? O.renderCell({ value: v[O.field], row: v, id: r(v) }) : v[O.field] })
          ] }, O.field)) })
        ]
      }
    ) }, r(v))) }),
    l && !o && e.length > 0 && /* @__PURE__ */ x.jsx(
      jh,
      {
        component: "div",
        count: c,
        page: u - 1,
        onPageChange: (v, O) => d(O + 1),
        rowsPerPage: f,
        onRowsPerPageChange: (v) => p(parseInt(v.target.value, 10)),
        rowsPerPageOptions: h,
        showFirstButton: !0,
        showLastButton: !0,
        labelRowsPerPage: null,
        labelDisplayedRows: ({ from: v, to: O, count: w }) => `${v} - ${O} | ${w}`,
        sx: { display: "flex", justifyContent: "center", mt: 2 }
      }
    )
  ] });
}, ri = Ih(null), pm = ({ initialValues: e = {}, onSubmit: t, validationSchema: r, children: i, ...o }) => {
  const [s, a] = Re(e || {}), [l, c] = Re({}), u = Pi((p, h) => {
    a((g) => ({
      ...g,
      [p]: h
    })), l[p] && c((g) => ({
      ...g,
      [p]: void 0
    }));
  }, [l]), d = async (p) => {
    p.preventDefault(), c({});
    try {
      r && await r.validate(s, { abortEarly: !1 }), t && t(s);
    } catch (h) {
      if (h.inner) {
        const g = h.inner.reduce((m, y) => (m[y.path] = y.message, m), {});
        c(g);
      }
    }
  }, f = {
    values: s,
    setFieldValue: u,
    errors: l
  };
  return /* @__PURE__ */ x.jsx(ri.Provider, { value: f, children: /* @__PURE__ */ x.jsx("form", { onSubmit: d, ...o, children: i }) });
}, cf = ({ name: e, label: t, onChange: r, ...i }) => {
  const o = ti(ri);
  if (!o)
    throw new Error("TextField must be used within a Form component");
  const { values: s, setFieldValue: a, errors: l } = o, c = l[e], u = (d) => {
    a(e, d.target.value), typeof r == "function" && r(d, d.target.value);
  };
  return /* @__PURE__ */ x.jsx(
    Un,
    {
      name: e,
      label: t,
      value: s[e] || "",
      onChange: u,
      error: !!c,
      helperText: c || "",
      ...i
    }
  );
}, oN = ({
  name: e,
  label: t = "Upload File",
  initialPreview: r,
  accept: i = "*/*",
  required: o = !1
  // ⬅ تمت الإضافة هنا
}) => {
  const s = ti(ri), [a, l] = Re(r || null), [c, u] = Re(null);
  if (!s)
    throw new Error("FileUploadField must be used within a Form component");
  const { setFieldValue: d, values: f, errors: p } = s, h = f[e];
  ut(() => {
    r && l(r);
  }, [r]), ut(() => {
    h || (l(r || null), u(null));
  }, [h, r]);
  const g = (b) => {
    const S = b.target.files[0];
    if (d(e, S || null), S)
      if (u(S.type), S.type.startsWith("image/")) {
        const C = new FileReader();
        C.onloadend = () => l(C.result), C.readAsDataURL(S);
      } else
        l(null);
  }, m = p?.[e], y = () => c?.startsWith("image/") && a ? /* @__PURE__ */ x.jsx(Zx, { src: a, sx: { width: 100, height: 100 } }) : (c?.startsWith("image/"), c?.startsWith("video/") ? /* @__PURE__ */ x.jsx("video", { width: "120", height: "100", controls: !0, children: /* @__PURE__ */ x.jsx("source", { src: URL.createObjectURL(h), type: c }) }) : c === "application/pdf" ? /* @__PURE__ */ x.jsx(g0, { sx: { fontSize: 60, color: "error.main" } }) : c ? /* @__PURE__ */ x.jsx(Td, { sx: { fontSize: 60, color: "text.secondary" } }) : /* @__PURE__ */ x.jsx(Td, { sx: { fontSize: 60, color: "text.disabled" } }));
  return /* @__PURE__ */ x.jsxs(Ie, { sx: { display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }, children: [
    y(),
    h && /* @__PURE__ */ x.jsx(Be, { variant: "body2", children: h.name }),
    /* @__PURE__ */ x.jsxs(En, { variant: "outlined", component: "label", color: m ? "error" : "primary", children: [
      t,
      o ? " *" : "",
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "file",
          hidden: !0,
          accept: i,
          onChange: g
        }
      )
    ] }),
    m && /* @__PURE__ */ x.jsx(Be, { variant: "caption", color: "error", children: m })
  ] });
}, sN = ({
  name: e,
  label: t,
  noOptionsText: r = "No options",
  loadingText: i = "Loading…",
  fetchOptions: o,
  getOptionLabel: s = (f) => f.label,
  multiple: a = !1,
  onChange: l,
  resetTrigger: c,
  required: u = !1,
  ...d
}) => {
  const f = ti(ri);
  if (!f)
    throw new Error("AutocompleteField must be used within a Form component");
  const { values: p, setFieldValue: h, errors: g } = f, [m, y] = Re([]), [b, S] = Re(!1), [C, v] = Re("");
  ut(() => {
    let E = !0;
    return S(!0), o(C).then((R) => {
      E && y(R || []);
    }).catch(() => {
      E && y([]);
    }).finally(() => {
      E && S(!1);
    }), () => {
      E = !1;
    };
  }, [C, c]), ut(() => {
    h(e, a ? [] : null), y([]), v("");
  }, [c]);
  const O = (E, R) => {
    h(e, R), typeof l == "function" && l(E, R);
  }, w = g?.[e];
  return /* @__PURE__ */ x.jsx(
    Lh,
    {
      multiple: a,
      noOptionsText: r,
      loadingText: i,
      options: m,
      loading: b,
      getOptionLabel: s,
      value: p[e] || (a ? [] : null),
      onChange: O,
      onInputChange: (E, R, I) => {
        I === "input" && v(R);
      },
      renderInput: (E) => /* @__PURE__ */ x.jsx(
        Un,
        {
          ...E,
          label: t,
          required: u,
          error: !!w,
          helperText: w,
          InputProps: {
            ...E.InputProps,
            endAdornment: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
              b ? /* @__PURE__ */ x.jsx(ni, { color: "inherit", size: 20 }) : null,
              E.InputProps.endAdornment
            ] })
          }
        }
      ),
      ...d
    }
  );
}, aN = ({ name: e, label: t, ...r }) => {
  const i = ti(ri);
  if (!i)
    throw new Error("SwitchField must be used within a Form component");
  const { values: o, setFieldValue: s } = i, a = (l) => {
    s(e, l.target.checked);
  };
  return /* @__PURE__ */ x.jsx(
    Nh,
    {
      control: /* @__PURE__ */ x.jsx(
        Fh,
        {
          checked: !!o[e],
          onChange: a,
          name: e,
          ...r
        }
      ),
      label: t
    }
  );
}, vT = Zs(/* @__PURE__ */ x.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), lN = ({
  name: e,
  label: t,
  noOptionsText: r = "No options",
  loadingText: i = "Loading…",
  fetchOptions: o,
  getOptionLabel: s = (f) => f.label,
  multiple: a = !1,
  onChange: l,
  resetTrigger: c,
  required: u = !1,
  ...d
}) => {
  const f = ti(ri);
  if (!f)
    throw new Error("SelectField must be used within a Form component");
  const { values: p, setFieldValue: h, errors: g } = f, [m, y] = Re([]), [b, S] = Re(!1);
  ut(() => {
    let O = !0;
    return S(!0), o("").then((w) => {
      O && y(w || []);
    }).catch(() => {
      O && y([]);
    }).finally(() => {
      O && S(!1);
    }), () => {
      O = !1;
    };
  }, [c]), ut(() => {
    h(e, a ? [] : "");
  }, [c]);
  const C = (O) => {
    const w = O.target.value;
    h(e, w), typeof l == "function" && l(O, w);
  }, v = g?.[e];
  return /* @__PURE__ */ x.jsxs(Jx, { fullWidth: !0, error: !!v, required: u, children: [
    /* @__PURE__ */ x.jsx(Qx, { children: t }),
    /* @__PURE__ */ x.jsxs(
      e0,
      {
        label: t,
        multiple: a,
        value: p[e] ?? (a ? [] : ""),
        onChange: C,
        ...d,
        endAdornment: /* @__PURE__ */ x.jsxs(lt.Fragment, { children: [
          b ? /* @__PURE__ */ x.jsx(ni, { size: 18, style: { marginRight: 10 } }) : null,
          !b && (p[e] || a && p[e]?.length > 0) && /* @__PURE__ */ x.jsx(
            ji,
            {
              size: "small",
              onClick: (O) => {
                O.stopPropagation(), h(e, a ? [] : ""), typeof l == "function" && l(O, a ? [] : "");
              },
              sx: { mr: 2 },
              children: /* @__PURE__ */ x.jsx(vT, { fontSize: "small" })
            }
          )
        ] }),
        children: [
          b && /* @__PURE__ */ x.jsx(Zo, { disabled: !0, children: i }),
          !b && m.length === 0 && /* @__PURE__ */ x.jsx(Zo, { disabled: !0, children: r }),
          !b && m.map((O) => /* @__PURE__ */ x.jsx(Zo, { value: O?.value || O, children: s(O) }, O.value || O.id))
        ]
      }
    ),
    v && /* @__PURE__ */ x.jsx(t0, { children: v })
  ] });
};
function A() {
  return A = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r) ({}).hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, A.apply(null, arguments);
}
function nt({
  props: e,
  name: t
}) {
  return iO({
    props: e,
    name: t,
    defaultTheme: qc,
    themeId: Ks
  });
}
function oe(e, t) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (t.indexOf(i) !== -1) continue;
    r[i] = e[i];
  }
  return r;
}
function OT(e) {
  return typeof e == "string";
}
function TT(e, t, r) {
  return e === void 0 || OT(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function ST(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((i) => i.match(/^on[A-Z]/) && typeof e[i] == "function" && !t.includes(i)).forEach((i) => {
    r[i] = e[i];
  }), r;
}
function uf(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function wT(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: i,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const h = be(r?.className, s, o?.className, i?.className), g = {
      ...r?.style,
      ...o?.style,
      ...i?.style
    }, m = {
      ...r,
      ...o,
      ...i
    };
    return h.length > 0 && (m.className = h), Object.keys(g).length > 0 && (m.style = g), {
      props: m,
      internalRef: void 0
    };
  }
  const a = ST({
    ...o,
    ...i
  }), l = uf(i), c = uf(o), u = t(a), d = be(u?.className, r?.className, s, o?.className, i?.className), f = {
    ...u?.style,
    ...r?.style,
    ...o?.style,
    ...i?.style
  }, p = {
    ...u,
    ...r,
    ...c,
    ...l
  };
  return d.length > 0 && (p.className = d), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: u.ref
  };
}
function CT(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Nt(e) {
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: o = !1,
    ...s
  } = e, a = o ? {} : CT(r, i), {
    props: l,
    internalRef: c
  } = wT({
    ...s,
    externalSlotProps: a
  }), u = Pn(c, a?.ref, e.additionalProps?.ref);
  return TT(t, {
    ...l,
    ref: u
  }, i);
}
var ET = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let i = !1;
    try {
      const o = {};
      e(o) === o && (i = !0);
    } catch {
    }
    if (i) {
      let o;
      try {
        throw new Error();
      } catch (s) {
        ({ stack: o } = s);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: o }
      );
    }
  }
}, kT = (e, t, r) => {
  const { memoize: i, memoizeOptions: o } = t, { inputSelectorResults: s, inputSelectorResultsCopy: a } = e, l = i(() => ({}), ...o);
  if (!(l.apply(null, s) === l.apply(null, a))) {
    let u;
    try {
      throw new Error();
    } catch (d) {
      ({ stack: u } = d);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: s,
        secondInputs: a,
        stack: u
      }
    );
  }
}, RT = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
}, ds = /* @__PURE__ */ Symbol("NOT_FOUND");
function AT(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function PT(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function IT(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (i) => typeof i == "function" ? `function ${i.name || "unnamed"}()` : typeof i
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var df = (e) => Array.isArray(e) ? e : [e];
function MT(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return IT(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function ff(e, t) {
  const r = [], { length: i } = e;
  for (let o = 0; o < i; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var _T = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: i } = {
    ...RT,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: ET
    },
    inputStabilityCheck: {
      shouldRun: i === "always" || i === "once" && e,
      run: kT
    }
  };
};
function jT(e) {
  let t;
  return {
    get(r) {
      return t && e(t.key, r) ? t.value : ds;
    },
    put(r, i) {
      t = { key: r, value: i };
    },
    getEntries() {
      return t ? [t] : [];
    },
    clear() {
      t = void 0;
    }
  };
}
function $T(e, t) {
  let r = [];
  function i(l) {
    const c = r.findIndex((u) => t(l, u.key));
    if (c > -1) {
      const u = r[c];
      return c > 0 && (r.splice(c, 1), r.unshift(u)), u.value;
    }
    return ds;
  }
  function o(l, c) {
    i(l) === ds && (r.unshift({ key: l, value: c }), r.length > e && r.pop());
  }
  function s() {
    return r;
  }
  function a() {
    r = [];
  }
  return { get: i, put: o, getEntries: s, clear: a };
}
var DT = (e, t) => e === t;
function LT(e) {
  return function(r, i) {
    if (r === null || i === null || r.length !== i.length)
      return !1;
    const { length: o } = r;
    for (let s = 0; s < o; s++)
      if (!e(r[s], i[s]))
        return !1;
    return !0;
  };
}
function NT(e, t) {
  const r = typeof t == "object" ? t : { equalityCheck: t }, {
    equalityCheck: i = DT,
    maxSize: o = 1,
    resultEqualityCheck: s
  } = r, a = LT(i);
  let l = 0;
  const c = o <= 1 ? jT(a) : $T(o, a);
  function u() {
    let d = c.get(arguments);
    if (d === ds) {
      if (d = e.apply(null, arguments), l++, s) {
        const p = c.getEntries().find(
          (h) => s(h.value, d)
        );
        p && (d = p.value, l !== 0 && l--);
      }
      c.put(arguments, d);
    }
    return d;
  }
  return u.clearCache = () => {
    c.clear(), u.resetResultsCount();
  }, u.resultsCount = () => l, u.resetResultsCount = () => {
    l = 0;
  }, u;
}
var FT = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, qT = typeof WeakRef < "u" ? WeakRef : FT, zT = 0, pf = 1;
function Io() {
  return {
    s: zT,
    v: void 0,
    o: null,
    p: null
  };
}
function hm(e, t = {}) {
  let r = Io();
  const { resultEqualityCheck: i } = t;
  let o, s = 0;
  function a() {
    let l = r;
    const { length: c } = arguments;
    for (let f = 0, p = c; f < p; f++) {
      const h = arguments[f];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let g = l.o;
        g === null && (l.o = g = /* @__PURE__ */ new WeakMap());
        const m = g.get(h);
        m === void 0 ? (l = Io(), g.set(h, l)) : l = m;
      } else {
        let g = l.p;
        g === null && (l.p = g = /* @__PURE__ */ new Map());
        const m = g.get(h);
        m === void 0 ? (l = Io(), g.set(h, l)) : l = m;
      }
    }
    const u = l;
    let d;
    if (l.s === pf)
      d = l.v;
    else if (d = e.apply(null, arguments), s++, i) {
      const f = o?.deref?.() ?? o;
      f != null && i(f, d) && (d = f, s !== 0 && s--), o = typeof d == "object" && d !== null || typeof d == "function" ? new qT(d) : d;
    }
    return u.s = pf, u.v = d, d;
  }
  return a.clearCache = () => {
    r = Io(), a.resetResultsCount();
  }, a.resultsCount = () => s, a.resetResultsCount = () => {
    s = 0;
  }, a;
}
function mm(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, i = (...o) => {
    let s = 0, a = 0, l, c = {}, u = o.pop();
    typeof u == "object" && (c = u, u = o.pop()), AT(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const d = {
      ...r,
      ...c
    }, {
      memoize: f,
      memoizeOptions: p = [],
      argsMemoize: h = hm,
      argsMemoizeOptions: g = [],
      devModeChecks: m = {}
    } = d, y = df(p), b = df(g), S = MT(o), C = f(function() {
      return s++, u.apply(
        null,
        arguments
      );
    }, ...y);
    let v = !0;
    const O = h(function() {
      a++;
      const E = ff(
        S,
        arguments
      );
      if (l = C.apply(null, E), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: R, inputStabilityCheck: I } = _T(v, m);
        if (R.shouldRun && R.run(
          u,
          E,
          l
        ), I.shouldRun) {
          const j = ff(
            S,
            arguments
          );
          I.run(
            { inputSelectorResults: E, inputSelectorResultsCopy: j },
            { memoize: f, memoizeOptions: y },
            arguments
          );
        }
        v && (v = !1);
      }
      return l;
    }, ...b);
    return Object.assign(O, {
      resultFunc: u,
      memoizedResultFunc: C,
      dependencies: S,
      dependencyRecomputations: () => a,
      resetDependencyRecomputations: () => {
        a = 0;
      },
      lastResult: () => l,
      recomputations: () => s,
      resetRecomputations: () => {
        s = 0;
      },
      memoize: f,
      argsMemoize: h
    });
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var BT = /* @__PURE__ */ mm(hm), VT = Object.assign(
  (e, t = BT) => {
    PT(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), i = r.map(
      (s) => e[s]
    );
    return t(
      i,
      (...s) => s.reduce((a, l, c) => (a[r[c]] = l, a), {})
    );
  },
  { withTypes: () => VT }
);
const UT = mm({
  memoize: NT,
  memoizeOptions: {
    maxSize: 1,
    equalityCheck: Object.is
  }
}), K = (e, t, r, i, o, s, a, l, ...c) => {
  if (c.length > 0)
    throw new Error("Unsupported number of selectors");
  let u;
  if (e && t && r && i && o && s && a && l)
    u = (d, f, p, h) => {
      const g = e(d, f, p, h), m = t(d, f, p, h), y = r(d, f, p, h), b = i(d, f, p, h), S = o(d, f, p, h), C = s(d, f, p, h), v = a(d, f, p, h);
      return l(g, m, y, b, S, C, v, f, p, h);
    };
  else if (e && t && r && i && o && s && a)
    u = (d, f, p, h) => {
      const g = e(d, f, p, h), m = t(d, f, p, h), y = r(d, f, p, h), b = i(d, f, p, h), S = o(d, f, p, h), C = s(d, f, p, h);
      return a(g, m, y, b, S, C, f, p, h);
    };
  else if (e && t && r && i && o && s)
    u = (d, f, p, h) => {
      const g = e(d, f, p, h), m = t(d, f, p, h), y = r(d, f, p, h), b = i(d, f, p, h), S = o(d, f, p, h);
      return s(g, m, y, b, S, f, p, h);
    };
  else if (e && t && r && i && o)
    u = (d, f, p, h) => {
      const g = e(d, f, p, h), m = t(d, f, p, h), y = r(d, f, p, h), b = i(d, f, p, h);
      return o(g, m, y, b, f, p, h);
    };
  else if (e && t && r && i)
    u = (d, f, p, h) => {
      const g = e(d, f, p, h), m = t(d, f, p, h), y = r(d, f, p, h);
      return i(g, m, y, f, p, h);
    };
  else if (e && t && r)
    u = (d, f, p, h) => {
      const g = e(d, f, p, h), m = t(d, f, p, h);
      return r(g, m, f, p, h);
    };
  else if (e && t)
    u = (d, f, p, h) => {
      const g = e(d, f, p, h);
      return t(g, f, p, h);
    };
  else if (e)
    u = e;
  else
    throw new Error("Missing arguments");
  return u;
}, Js = (e) => (...t) => {
  const r = /* @__PURE__ */ new WeakMap();
  let i = 1;
  const o = t[t.length - 1], s = t.length - 1 || 1, a = Math.max(o.length - s, 0);
  if (a > 3)
    throw new Error("Unsupported number of arguments");
  return (c, u, d, f) => {
    let p = c.__cacheKey__;
    p || (p = {
      id: i
    }, c.__cacheKey__ = p, i += 1);
    let h = r.get(p);
    if (!h) {
      const g = t.length === 1 ? [(b) => b, o] : t;
      let m = t;
      const y = [void 0, void 0, void 0];
      switch (a) {
        case 0:
          break;
        case 1: {
          m = [...g.slice(0, -1), () => y[0], o];
          break;
        }
        case 2: {
          m = [...g.slice(0, -1), () => y[0], () => y[1], o];
          break;
        }
        case 3: {
          m = [...g.slice(0, -1), () => y[0], () => y[1], () => y[2], o];
          break;
        }
        default:
          throw new Error("Unsupported number of arguments");
      }
      e && (m = [...m, e]), h = UT(...m), h.selectorArgs = y, r.set(p, h);
    }
    switch (a) {
      case 3:
        h.selectorArgs[2] = f;
      case 2:
        h.selectorArgs[1] = d;
      case 1:
        h.selectorArgs[0] = u;
    }
    switch (a) {
      case 0:
        return h(c);
      case 1:
        return h(c, u);
      case 2:
        return h(c, u, d);
      case 3:
        return h(c, u, d, f);
      default:
        throw new Error("unreachable");
    }
  };
}, Ne = Js();
var Mo = { exports: {} }, tl = {}, _o = { exports: {} }, nl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hf;
function HT() {
  if (hf) return nl;
  hf = 1;
  var e = lt;
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, i = e.useState, o = e.useEffect, s = e.useLayoutEffect, a = e.useDebugValue;
  function l(f, p) {
    var h = p(), g = i({ inst: { value: h, getSnapshot: p } }), m = g[0].inst, y = g[1];
    return s(
      function() {
        m.value = h, m.getSnapshot = p, c(m) && y({ inst: m });
      },
      [f, h, p]
    ), o(
      function() {
        return c(m) && y({ inst: m }), f(function() {
          c(m) && y({ inst: m });
        });
      },
      [f]
    ), a(h), h;
  }
  function c(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var h = p();
      return !r(f, h);
    } catch {
      return !0;
    }
  }
  function u(f, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : l;
  return nl.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, nl;
}
var rl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mf;
function GT() {
  return mf || (mf = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h, g) {
      return h === g && (h !== 0 || 1 / h === 1 / g) || h !== h && g !== g;
    }
    function t(h, g) {
      d || o.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = g();
      if (!f) {
        var y = g();
        s(m, y) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      y = a({
        inst: { value: m, getSnapshot: g }
      });
      var b = y[0].inst, S = y[1];
      return c(
        function() {
          b.value = m, b.getSnapshot = g, r(b) && S({ inst: b });
        },
        [h, m, g]
      ), l(
        function() {
          return r(b) && S({ inst: b }), h(function() {
            r(b) && S({ inst: b });
          });
        },
        [h]
      ), u(m), m;
    }
    function r(h) {
      var g = h.getSnapshot;
      h = h.value;
      try {
        var m = g();
        return !s(h, m);
      } catch {
        return !0;
      }
    }
    function i(h, g) {
      return g();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = lt, s = typeof Object.is == "function" ? Object.is : e, a = o.useState, l = o.useEffect, c = o.useLayoutEffect, u = o.useDebugValue, d = !1, f = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? i : t;
    rl.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), rl;
}
var gf;
function Bc() {
  return gf || (gf = 1, process.env.NODE_ENV === "production" ? _o.exports = HT() : _o.exports = GT()), _o.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf;
function WT() {
  if (yf) return tl;
  yf = 1;
  var e = lt, t = Bc();
  function r(u, d) {
    return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
  }
  var i = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, s = e.useRef, a = e.useEffect, l = e.useMemo, c = e.useDebugValue;
  return tl.useSyncExternalStoreWithSelector = function(u, d, f, p, h) {
    var g = s(null);
    if (g.current === null) {
      var m = { hasValue: !1, value: null };
      g.current = m;
    } else m = g.current;
    g = l(
      function() {
        function b(w) {
          if (!S) {
            if (S = !0, C = w, w = p(w), h !== void 0 && m.hasValue) {
              var E = m.value;
              if (h(E, w))
                return v = E;
            }
            return v = w;
          }
          if (E = v, i(C, w)) return E;
          var R = p(w);
          return h !== void 0 && h(E, R) ? (C = w, E) : (C = w, v = R);
        }
        var S = !1, C, v, O = f === void 0 ? null : f;
        return [
          function() {
            return b(d());
          },
          O === null ? void 0 : function() {
            return b(O());
          }
        ];
      },
      [d, f, p, h]
    );
    var y = o(u, g[0], g[1]);
    return a(
      function() {
        m.hasValue = !0, m.value = y;
      },
      [y]
    ), c(y), y;
  }, tl;
}
var il = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bf;
function YT() {
  return bf || (bf = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = lt, r = Bc(), i = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, s = t.useRef, a = t.useEffect, l = t.useMemo, c = t.useDebugValue;
    il.useSyncExternalStoreWithSelector = function(u, d, f, p, h) {
      var g = s(null);
      if (g.current === null) {
        var m = { hasValue: !1, value: null };
        g.current = m;
      } else m = g.current;
      g = l(
        function() {
          function b(w) {
            if (!S) {
              if (S = !0, C = w, w = p(w), h !== void 0 && m.hasValue) {
                var E = m.value;
                if (h(E, w))
                  return v = E;
              }
              return v = w;
            }
            if (E = v, i(C, w))
              return E;
            var R = p(w);
            return h !== void 0 && h(E, R) ? (C = w, E) : (C = w, v = R);
          }
          var S = !1, C, v, O = f === void 0 ? null : f;
          return [
            function() {
              return b(d());
            },
            O === null ? void 0 : function() {
              return b(O());
            }
          ];
        },
        [d, f, p, h]
      );
      var y = o(u, g[0], g[1]);
      return a(
        function() {
          m.hasValue = !0, m.value = y;
        },
        [y]
      ), c(y), y;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), il;
}
var xf;
function XT() {
  return xf || (xf = 1, process.env.NODE_ENV === "production" ? Mo.exports = WT() : Mo.exports = YT()), Mo.exports;
}
var KT = XT();
function ZT(e, t, r, i, o) {
  const s = (a) => t(a, r, i, o);
  return KT.useSyncExternalStoreWithSelector(e.subscribe, e.getSnapshot, e.getSnapshot, s);
}
const vf = {};
function Qs(e, t) {
  const r = $.useRef(vf);
  return r.current === vf && (r.current = e(t)), r;
}
const JT = [];
function gm(e) {
  $.useEffect(e, JT);
}
const QT = () => {
};
function eS(e, t, r) {
  const i = Qs(tS, {
    store: e,
    selector: t
  }).current;
  i.effect = r, gm(i.onMount);
}
function tS(e) {
  const {
    store: t,
    selector: r
  } = e;
  let i = r(t.state);
  const o = {
    effect: QT,
    dispose: null,
    // We want a single subscription done right away and cleared on unmount only,
    // but React triggers `useOnMount` multiple times in dev, so we need to manage
    // the subscription anyway.
    subscribe: () => {
      o.dispose ??= t.subscribe((s) => {
        const a = r(s);
        if (!Object.is(i, a)) {
          const l = i;
          i = a, o.effect(l, a);
        }
      });
    },
    onMount: () => (o.subscribe(), () => {
      o.dispose?.(), o.dispose = null;
    })
  };
  return o.subscribe(), o;
}
class Vc {
  // HACK: `any` fixes adding listeners that accept partial state.
  // Internal state to handle recursive `setState()` calls
  static create(t) {
    return new Vc(t);
  }
  constructor(t) {
    this.state = t, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
  }
  subscribe = (t) => (this.listeners.add(t), () => {
    this.listeners.delete(t);
  });
  getSnapshot = () => this.state;
  setState(t) {
    this.state = t, this.updateTick += 1;
    const r = this.updateTick, i = this.listeners.values();
    let o;
    for (; o = i.next(), !o.done; ) {
      if (r !== this.updateTick)
        return;
      const s = o.value;
      s(t);
    }
  }
  update(t) {
    for (const r in t)
      if (!Object.is(this.state[r], t[r])) {
        this.setState(A({}, this.state, t));
        return;
      }
  }
  set(t, r) {
    Object.is(this.state[t], r) || this.setState(A({}, this.state, {
      [t]: r
    }));
  }
}
const ea = ({
  params: e,
  store: t
}) => {
  $.useEffect(() => {
    t.set("animation", A({}, t.state.animation, {
      skip: e.skipAnimation
    }));
  }, [t, e.skipAnimation]);
  const r = $.useCallback(() => {
    let i = !1;
    return t.set("animation", A({}, t.state.animation, {
      skipAnimationRequests: t.state.animation.skipAnimationRequests + 1
    })), () => {
      i || (i = !0, t.set("animation", A({}, t.state.animation, {
        skipAnimationRequests: t.state.animation.skipAnimationRequests - 1
      })));
    };
  }, [t]);
  return Fe(() => {
    if (typeof window > "u" || !window?.matchMedia)
      return;
    let o;
    const s = (l) => {
      l.matches ? o = r() : o?.();
    }, a = window.matchMedia("(prefers-reduced-motion)");
    return s(a), a.addEventListener("change", s), () => {
      a.removeEventListener("change", s);
    };
  }, [r, t]), {
    instance: {
      disableAnimation: r
    }
  };
};
ea.params = {
  skipAnimation: !0
};
ea.getDefaultizedParams = ({
  params: e
}) => A({}, e, {
  skipAnimation: e.skipAnimation ?? !1
});
ea.getInitialState = ({
  skipAnimation: e
}) => {
  const t = typeof window > "u" || !window?.matchMedia, r = process.env.NODE_ENV === "test" ? t : !1;
  return {
    animation: {
      skip: e,
      // By initializing the skipAnimationRequests to 1, we ensure that the animation is always skipped
      skipAnimationRequests: r ? 1 : 0
    }
  };
};
const nS = (e) => e.animation, rS = K(nS, (e) => e.skip || e.skipAnimationRequests > 0);
function iS(e, t) {
  const r = $.useRef(!0);
  $.useEffect(() => {
    if (r.current) {
      r.current = !1;
      return;
    }
    return e();
  }, t);
}
const ie = ZT, $n = "DEFAULT_X_AXIS_KEY", Uc = "DEFAULT_Y_AXIS_KEY", oS = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20
}, sS = 45, aS = 25, ym = 20, Zt = (e) => e.cartesianAxis?.x, yn = (e) => e.cartesianAxis?.y, lS = K(yn, function(t) {
  return (t ?? []).reduce((r, i) => i.position === "left" ? r + (i.width || 0) + (i.zoom?.slider.enabled ? i.zoom.slider.size : 0) : r, 0);
}), cS = K(yn, function(t) {
  return (t ?? []).reduce((r, i) => i.position === "right" ? r + (i.width || 0) + (i.zoom?.slider.enabled ? i.zoom.slider.size : 0) : r, 0);
}), uS = K(Zt, function(t) {
  return (t ?? []).reduce((r, i) => i.position === "top" ? r + (i.height || 0) + (i.zoom?.slider.enabled ? i.zoom.slider.size : 0) : r, 0);
}), dS = K(Zt, function(t) {
  return (t ?? []).reduce((r, i) => i.position === "bottom" ? r + (i.height || 0) + (i.zoom?.slider.enabled ? i.zoom.slider.size : 0) : r, 0);
}), fS = Ne(lS, cS, uS, dS, function(t, r, i, o) {
  return {
    left: t,
    right: r,
    top: i,
    bottom: o
  };
}), eo = (e) => e.dimensions, pS = (e) => e.dimensions.margin, mt = Ne(eo, pS, fS, function({
  width: t,
  height: r
}, {
  top: i,
  right: o,
  bottom: s,
  left: a
}, {
  left: l,
  right: c,
  top: u,
  bottom: d
}) {
  return {
    width: t - a - o - l - c,
    left: a + l,
    right: o + c,
    height: r - i - s - u - d,
    top: i + u,
    bottom: s + d
  };
}), hS = K(eo, (e) => e.width), mS = K(eo, (e) => e.height), bm = K(eo, (e) => e.propsWidth), xm = K(eo, (e) => e.propsHeight);
function vm(e, t) {
  return typeof e == "number" ? {
    top: e,
    bottom: e,
    left: e,
    right: e
  } : t ? A({}, t, e) : e;
}
const gS = 10, ta = ({
  params: e,
  store: t,
  svgRef: r
}) => {
  const i = e.width !== void 0 && e.height !== void 0, o = $.useRef({
    displayError: !1,
    initialCompute: !0,
    computeRun: 0
  }), [s, a] = $.useState(0), [l, c] = $.useState(0), u = $.useCallback(() => {
    const g = r?.current;
    if (!g)
      return {};
    const y = dT(g).getComputedStyle(g), b = Math.floor(parseFloat(y.height)) || 0, S = Math.floor(parseFloat(y.width)) || 0;
    return (t.state.dimensions.width !== S || t.state.dimensions.height !== b) && t.set("dimensions", {
      margin: {
        top: e.margin.top,
        right: e.margin.right,
        bottom: e.margin.bottom,
        left: e.margin.left
      },
      width: e.width ?? S,
      height: e.height ?? b,
      propsWidth: e.width,
      propsHeight: e.height
    }), {
      height: b,
      width: S
    };
  }, [
    t,
    r,
    e.height,
    e.width,
    // Margin is an object, so we need to include all the properties to prevent infinite loops.
    e.margin.left,
    e.margin.right,
    e.margin.top,
    e.margin.bottom
  ]);
  iS(() => {
    const g = e.width ?? t.state.dimensions.width, m = e.height ?? t.state.dimensions.height;
    t.set("dimensions", {
      margin: {
        top: e.margin.top,
        right: e.margin.right,
        bottom: e.margin.bottom,
        left: e.margin.left
      },
      width: g,
      height: m,
      propsHeight: e.height,
      propsWidth: e.width
    });
  }, [
    t,
    e.height,
    e.width,
    // Margin is an object, so we need to include all the properties to prevent infinite loops.
    e.margin.left,
    e.margin.right,
    e.margin.top,
    e.margin.bottom
  ]), $.useEffect(() => {
    o.current.displayError = !0;
  }, []), Fe(() => {
    if (i || !o.current.initialCompute || o.current.computeRun > gS)
      return;
    const g = u();
    g.width !== s || g.height !== l ? (o.current.computeRun += 1, g.width !== void 0 && a(g.width), g.height !== void 0 && c(g.height)) : o.current.initialCompute && (o.current.initialCompute = !1);
  }, [l, s, u, i]), Fe(() => {
    if (i)
      return () => {
      };
    u();
    const g = r.current;
    if (typeof ResizeObserver > "u")
      return () => {
      };
    let m;
    const y = new ResizeObserver(() => {
      m = requestAnimationFrame(() => {
        u();
      });
    });
    return g && y.observe(g), () => {
      m && cancelAnimationFrame(m), g && y.unobserve(g);
    };
  }, [u, i, r]), process.env.NODE_ENV !== "production" && (o.current.displayError && e.width === void 0 && s === 0 && (console.error("MUI X Charts: ChartContainer does not have `width` prop, and its container has no `width` defined."), o.current.displayError = !1), o.current.displayError && e.height === void 0 && l === 0 && (console.error("MUI X Charts: ChartContainer does not have `height` prop, and its container has no `height` defined."), o.current.displayError = !1));
  const d = ie(t, mt), f = $.useCallback((g) => g >= d.left - 1 && g <= d.left + d.width, [d.left, d.width]), p = $.useCallback((g) => g >= d.top - 1 && g <= d.top + d.height, [d.height, d.top]);
  return {
    instance: {
      isPointInside: $.useCallback((g, m, y) => y && "closest" in y && y.closest("[data-drawing-container]") ? !0 : f(g) && p(m), [f, p]),
      isXInside: f,
      isYInside: p
    }
  };
};
ta.params = {
  width: !0,
  height: !0,
  margin: !0
};
ta.getDefaultizedParams = ({
  params: e
}) => A({}, e, {
  margin: vm(e.margin, oS)
});
ta.getInitialState = ({
  width: e,
  height: t,
  margin: r
}) => ({
  dimensions: {
    margin: r,
    width: e ?? 0,
    height: t ?? 0,
    propsWidth: e,
    propsHeight: t
  }
});
const Hc = ({
  params: e,
  store: t
}) => (Fe(() => {
  t.set("experimentalFeatures", e.experimentalFeatures);
}, [t, e.experimentalFeatures]), {});
Hc.params = {
  experimentalFeatures: !0
};
Hc.getInitialState = ({
  experimentalFeatures: e
}) => ({
  experimentalFeatures: e
});
const yS = (e) => e.experimentalFeatures, na = K(yS, (e) => !!e?.preferStrictDomainInLineCharts);
let Of = 0;
const bS = () => (Of += 1, `mui-chart-${Of}`), Gc = ({
  params: e,
  store: t
}) => ($.useEffect(() => {
  e.id === void 0 || e.id === t.state.id.providedChartId && t.state.id.chartId !== void 0 || t.set("id", A({}, t.state.id, {
    chartId: e.id ?? bS()
  }));
}, [t, e.id]), {});
Gc.params = {
  id: !0
};
Gc.getInitialState = ({
  id: e
}) => ({
  id: {
    chartId: e,
    providedChartId: e
  }
});
const xS = (e) => e.id, vS = K(xS, (e) => e.chartId), OS = ["#4254FB", "#FFB422", "#FA4F58", "#0DBEFF", "#22BF75", "#FA83B4", "#FF7511"], TS = ["#495AFB", "#FFC758", "#F35865", "#30C8FF", "#44CE8D", "#F286B3", "#FF8C39"], Om = (e) => e === "dark" ? TS : OS, Tm = ({
  series: e,
  colors: t,
  seriesConfig: r
}) => {
  const i = {};
  return e.forEach((o, s) => {
    const a = r[o.type].getSeriesWithDefaultValues(o, s, t), l = a.id;
    if (i[o.type] === void 0 && (i[o.type] = {
      series: {},
      seriesOrder: []
    }), i[o.type]?.series[l] !== void 0)
      throw new Error(`MUI X Charts: series' id "${l}" is not unique.`);
    i[o.type].series[l] = a, i[o.type].seriesOrder.push(l);
  }), i;
}, SS = (e, t, r) => {
  const i = {};
  return Object.keys(t).forEach((o) => {
    const s = e[o];
    s !== void 0 && (i[o] = t[o]?.seriesProcessor?.(s, r) ?? s);
  }), i;
}, ra = ({
  params: e,
  store: t,
  seriesConfig: r
}) => {
  const {
    series: i,
    dataset: o,
    theme: s,
    colors: a
  } = e, l = $.useRef(!0);
  return $.useEffect(() => {
    if (l.current) {
      l.current = !1;
      return;
    }
    t.set("series", A({}, t.state.series, {
      defaultizedSeries: Tm({
        series: i,
        colors: typeof a == "function" ? a(s) : a,
        seriesConfig: r
      }),
      dataset: o
    }));
  }, [a, o, i, s, r, t]), {};
};
ra.params = {
  dataset: !0,
  series: !0,
  colors: !0,
  theme: !0
};
const wS = [];
ra.getDefaultizedParams = ({
  params: e
}) => A({}, e, {
  series: e.series?.length ? e.series : wS,
  colors: e.colors ?? Om,
  theme: e.theme ?? "light"
});
ra.getInitialState = ({
  series: e = [],
  colors: t,
  theme: r,
  dataset: i
}, o, s) => ({
  series: {
    seriesConfig: s,
    defaultizedSeries: Tm({
      series: e,
      colors: typeof t == "function" ? t(r) : t,
      seriesConfig: s
    }),
    dataset: i
  }
});
const Wc = (e) => e.series, CS = K(Wc, (e) => e.defaultizedSeries), Ot = K(Wc, (e) => e.seriesConfig), ES = K(Wc, (e) => e.dataset), Me = Ne(CS, Ot, ES, function(t, r, i) {
  return SS(t, r, i);
}), kS = {
  abort: !0,
  animationcancel: !0,
  animationend: !0,
  animationiteration: !0,
  animationstart: !0,
  auxclick: !0,
  beforeinput: !0,
  beforetoggle: !0,
  blur: !0,
  cancel: !0,
  canplay: !0,
  canplaythrough: !0,
  change: !0,
  click: !0,
  close: !0,
  compositionend: !0,
  compositionstart: !0,
  compositionupdate: !0,
  contextlost: !0,
  contextmenu: !0,
  contextrestored: !0,
  copy: !0,
  cuechange: !0,
  cut: !0,
  dblclick: !0,
  drag: !0,
  dragend: !0,
  dragenter: !0,
  dragleave: !0,
  dragover: !0,
  dragstart: !0,
  drop: !0,
  durationchange: !0,
  emptied: !0,
  ended: !0,
  error: !0,
  focus: !0,
  focusin: !0,
  focusout: !0,
  formdata: !0,
  gotpointercapture: !0,
  input: !0,
  invalid: !0,
  keydown: !0,
  keypress: !0,
  keyup: !0,
  load: !0,
  loadeddata: !0,
  loadedmetadata: !0,
  loadstart: !0,
  lostpointercapture: !0,
  mousedown: !0,
  mouseenter: !0,
  mouseleave: !0,
  mousemove: !0,
  mouseout: !0,
  mouseover: !0,
  mouseup: !0,
  paste: !0,
  pause: !0,
  play: !0,
  playing: !0,
  pointercancel: !0,
  pointerdown: !0,
  pointerenter: !0,
  pointerleave: !0,
  pointermove: !0,
  pointerout: !0,
  pointerover: !0,
  pointerup: !0,
  progress: !0,
  ratechange: !0,
  reset: !0,
  resize: !0,
  scroll: !0,
  scrollend: !0,
  securitypolicyviolation: !0,
  seeked: !0,
  seeking: !0,
  select: !0,
  selectionchange: !0,
  selectstart: !0,
  slotchange: !0,
  stalled: !0,
  submit: !0,
  suspend: !0,
  timeupdate: !0,
  toggle: !0,
  touchcancel: !0,
  touchend: !0,
  touchmove: !0,
  touchstart: !0,
  transitioncancel: !0,
  transitionend: !0,
  transitionrun: !0,
  transitionstart: !0,
  volumechange: !0,
  waiting: !0,
  webkitanimationend: !0,
  webkitanimationiteration: !0,
  webkitanimationstart: !0,
  webkittransitionend: !0,
  wheel: !0,
  beforematch: !0,
  pointerrawupdate: !0
};
class Sm {
  /** Unique name identifying this gesture type */
  /** Whether to prevent default browser action for gesture events */
  /** Whether to stop propagation of gesture events */
  /**
   * List of gesture names that should prevent this gesture from activating when they are active.
   */
  /**
   * Array of keyboard keys that must be pressed for the gesture to be recognized.
   */
  /**
   * KeyboardManager instance for tracking key presses
   */
  /**
   * List of pointer types that can trigger this gesture.
   * If undefined, all pointer types are allowed.
   */
  /**
   * Pointer mode-specific configuration overrides.
   */
  /**
   * User-mutable data object for sharing state between gesture events
   * This object is included in all events emitted by this gesture
   */
  customData = {};
  /** Reference to the singleton PointerManager instance */
  /** Reference to the singleton ActiveGesturesRegistry instance */
  /** The DOM element this gesture is attached to */
  /** Stores the active gesture state */
  /** @internal For types. If false enables phases (xStart, x, xEnd) */
  /** @internal For types. The event type this gesture is associated with */
  /** @internal For types. The options type for this gesture */
  /** @internal For types. The options that can be changed at runtime */
  /** @internal For types. The state that can be changed at runtime */
  /**
   * Create a new gesture instance with the specified options
   *
   * @param options - Configuration options for this gesture
   */
  constructor(t) {
    if (!t || !t.name)
      throw new Error("Gesture must be initialized with a valid name.");
    if (t.name in kS)
      throw new Error(`Gesture can't be created with a native event name. Tried to use "${t.name}". Please use a custom name instead.`);
    this.name = t.name, this.preventDefault = t.preventDefault ?? !1, this.stopPropagation = t.stopPropagation ?? !1, this.preventIf = t.preventIf ?? [], this.requiredKeys = t.requiredKeys ?? [], this.pointerMode = t.pointerMode ?? [], this.pointerOptions = t.pointerOptions ?? {};
  }
  /**
   * Initialize the gesture by acquiring the pointer manager and gestures registry
   * Must be called before the gesture can be used
   */
  init(t, r, i, o) {
    this.element = t, this.pointerManager = r, this.gesturesRegistry = i, this.keyboardManager = o;
    const s = `${this.name}ChangeOptions`;
    this.element.addEventListener(s, this.handleOptionsChange);
    const a = `${this.name}ChangeState`;
    this.element.addEventListener(a, this.handleStateChange);
  }
  /**
   * Handle option change events
   * @param event Custom event with new options in the detail property
   */
  handleOptionsChange = (t) => {
    t && t.detail && this.updateOptions(t.detail);
  };
  /**
   * Update the gesture options with new values
   * @param options Object containing properties to update
   */
  updateOptions(t) {
    this.preventDefault = t.preventDefault ?? this.preventDefault, this.stopPropagation = t.stopPropagation ?? this.stopPropagation, this.preventIf = t.preventIf ?? this.preventIf, this.requiredKeys = t.requiredKeys ?? this.requiredKeys, this.pointerMode = t.pointerMode ?? this.pointerMode, this.pointerOptions = t.pointerOptions ?? this.pointerOptions;
  }
  /**
   * Get the default configuration for the pointer specific options.
   * Change this function in child classes to provide different defaults.
   */
  getBaseConfig() {
    return {
      requiredKeys: this.requiredKeys
    };
  }
  /**
   * Get the effective configuration for a specific pointer mode.
   * This merges the base configuration with pointer mode-specific overrides.
   *
   * @param pointerType - The pointer type to get configuration for
   * @returns The effective configuration object
   */
  getEffectiveConfig(t, r) {
    if (t !== "mouse" && t !== "touch" && t !== "pen")
      return r;
    const i = this.pointerOptions[t];
    return i ? A({}, r, i) : r;
  }
  /**
   * Handle state change events
   * @param event Custom event with new state values in the detail property
   */
  handleStateChange = (t) => {
    t && t.detail && this.updateState(t.detail);
  };
  /**
   * Update the gesture state with new values
   * @param stateChanges Object containing state properties to update
   */
  updateState(t) {
    Object.assign(this.state, t);
  }
  /**
   * Create a deep clone of this gesture for a new element
   *
   * @param overrides - Optional configuration options that override the defaults
   * @returns A new instance of this gesture with the same configuration and any overrides applied
   */
  /**
   * Check if the event's target is or is contained within any of our registered elements
   *
   * @param event - The browser event to check
   * @returns The matching element or null if no match is found
   */
  getTargetElement(t) {
    return this.isActive || this.element === t.target || "contains" in this.element && this.element.contains(t.target) || "getRootNode" in this.element && this.element.getRootNode() instanceof ShadowRoot && t.composedPath().includes(this.element) ? this.element : null;
  }
  /** Whether the gesture is currently active */
  set isActive(t) {
    t ? this.gesturesRegistry.registerActiveGesture(this.element, this) : this.gesturesRegistry.unregisterActiveGesture(this.element, this);
  }
  /** Whether the gesture is currently active */
  get isActive() {
    return this.gesturesRegistry.isGestureActive(this.element, this) ?? !1;
  }
  /**
   * Checks if this gesture should be prevented from activating.
   *
   * @param element - The DOM element to check against
   * @param pointerType - The type of pointer triggering the gesture
   * @returns true if the gesture should be prevented, false otherwise
   */
  shouldPreventGesture(t, r) {
    const i = this.getEffectiveConfig(r, this.getBaseConfig());
    if (!this.keyboardManager.areKeysPressed(i.requiredKeys))
      return !0;
    if (this.preventIf.length === 0)
      return !1;
    const o = this.gesturesRegistry.getActiveGestures(t);
    return this.preventIf.some((s) => o[s]);
  }
  /**
   * Checks if the given pointer type is allowed for this gesture based on the pointerMode setting.
   *
   * @param pointerType - The type of pointer to check.
   * @returns true if the pointer type is allowed, false otherwise.
   */
  isPointerTypeAllowed(t) {
    return !this.pointerMode || this.pointerMode.length === 0 ? !0 : this.pointerMode.includes(t);
  }
  /**
   * Clean up the gesture and unregister any listeners
   * Call this method when the gesture is no longer needed to prevent memory leaks
   */
  destroy() {
    const t = `${this.name}ChangeOptions`;
    this.element.removeEventListener(t, this.handleOptionsChange);
    const r = `${this.name}ChangeState`;
    this.element.removeEventListener(r, this.handleStateChange);
  }
  /**
   * Reset the gesture state to its initial values
   */
}
class RS {
  /** Map of elements to their active gestures */
  activeGestures = /* @__PURE__ */ new Map();
  /**
   * Register a gesture as active on an element
   *
   * @param element - The DOM element on which the gesture is active
   * @param gesture - The gesture instance that is active
   */
  registerActiveGesture(t, r) {
    this.activeGestures.has(t) || this.activeGestures.set(t, /* @__PURE__ */ new Set());
    const i = this.activeGestures.get(t), o = {
      gesture: r,
      element: t
    };
    i.add(o);
  }
  /**
   * Remove a gesture from the active registry
   *
   * @param element - The DOM element on which the gesture was active
   * @param gesture - The gesture instance to deactivate
   */
  unregisterActiveGesture(t, r) {
    const i = this.activeGestures.get(t);
    i && (i.forEach((o) => {
      o.gesture === r && i.delete(o);
    }), i.size === 0 && this.activeGestures.delete(t));
  }
  /**
   * Get all active gestures for a specific element
   *
   * @param element - The DOM element to query
   * @returns Array of active gesture names
   */
  getActiveGestures(t) {
    const r = this.activeGestures.get(t);
    return r ? Array.from(r).reduce((i, o) => (i[o.gesture.name] = !0, i), {}) : {};
  }
  /**
   * Check if a specific gesture is active on an element
   *
   * @param element - The DOM element to check
   * @param gesture - The gesture instance to check
   * @returns True if the gesture is active on the element, false otherwise
   */
  isGestureActive(t, r) {
    const i = this.activeGestures.get(t);
    return i ? Array.from(i).some((o) => o.gesture === r) : !1;
  }
  /**
   * Clear all active gestures from the registry
   */
  destroy() {
    this.activeGestures.clear();
  }
  /**
   * Clear all active gestures for a specific element
   *
   * @param element - The DOM element to clear
   */
  unregisterElement(t) {
    this.activeGestures.delete(t);
  }
}
class AS {
  pressedKeys = /* @__PURE__ */ new Set();
  /**
   * Create a new KeyboardManager instance
   */
  constructor() {
    this.initialize();
  }
  /**
   * Initialize the keyboard event listeners
   */
  initialize() {
    typeof window > "u" || (window.addEventListener("keydown", this.handleKeyDown), window.addEventListener("keyup", this.handleKeyUp), window.addEventListener("blur", this.clearKeys));
  }
  /**
   * Handle keydown events
   */
  handleKeyDown = (t) => {
    this.pressedKeys.add(t.key);
  };
  /**
   * Handle keyup events
   */
  handleKeyUp = (t) => {
    this.pressedKeys.delete(t.key);
  };
  /**
   * Clear all pressed keys
   */
  clearKeys = () => {
    this.pressedKeys.clear();
  };
  /**
   * Check if a set of keys are all currently pressed
   * @param keys The keys to check
   * @returns True if all specified keys are pressed, false otherwise
   */
  areKeysPressed(t) {
    return !t || t.length === 0 ? !0 : t.every((r) => r === "ControlOrMeta" ? navigator.platform.includes("Mac") ? this.pressedKeys.has("Meta") : this.pressedKeys.has("Control") : this.pressedKeys.has(r));
  }
  /**
   * Cleanup method to remove event listeners
   */
  destroy() {
    typeof window < "u" && (window.removeEventListener("keydown", this.handleKeyDown), window.removeEventListener("keyup", this.handleKeyUp), window.removeEventListener("blur", this.clearKeys)), this.clearKeys();
  }
}
class PS {
  /** Root element where pointer events are captured */
  /** CSS touch-action property value applied to the root element */
  /** Whether to use passive event listeners */
  /** Whether to prevent interrupt events like blur or contextmenu */
  preventEventInterruption = !0;
  /** Map of all currently active pointers by their pointerId */
  pointers = /* @__PURE__ */ new Map();
  /** Set of registered gesture handlers that receive pointer events */
  gestureHandlers = /* @__PURE__ */ new Set();
  constructor(t) {
    this.root = // User provided root element
    t.root ?? // Fallback to document root or body, this fixes shadow DOM scenarios
    document.getRootNode({
      composed: !0
    }) ?? // Fallback to document body, for some testing environments
    document.body, this.touchAction = t.touchAction || "auto", this.passive = t.passive ?? !1, this.preventEventInterruption = t.preventEventInterruption ?? !0, this.setupEventListeners();
  }
  /**
   * Register a handler function to receive pointer events.
   *
   * The handler will be called whenever pointer events occur within the root element.
   * It receives the current map of all active pointers and the original event.
   *
   * @param {Function} handler - Function to receive pointer events and current pointer state
   * @returns {Function} An unregister function that removes this handler when called
   */
  registerGestureHandler(t) {
    return this.gestureHandlers.add(t), () => {
      this.gestureHandlers.delete(t);
    };
  }
  /**
   * Get a copy of the current active pointers map.
   *
   * Returns a new Map containing all currently active pointers.
   * Modifying the returned map will not affect the internal pointers state.
   *
   * @returns A new Map containing all active pointers
   */
  getPointers() {
    return new Map(this.pointers);
  }
  /**
   * Set up event listeners for pointer events on the root element.
   *
   * This method attaches all necessary event listeners and configures
   * the CSS touch-action property on the root element.
   */
  setupEventListeners() {
    this.touchAction !== "auto" && (this.root.style.touchAction = this.touchAction), this.root.addEventListener("pointerdown", this.handlePointerEvent, {
      passive: this.passive
    }), this.root.addEventListener("pointermove", this.handlePointerEvent, {
      passive: this.passive
    }), this.root.addEventListener("pointerup", this.handlePointerEvent, {
      passive: this.passive
    }), this.root.addEventListener("pointercancel", this.handlePointerEvent, {
      passive: this.passive
    }), this.root.addEventListener("forceCancel", this.handlePointerEvent, {
      passive: this.passive
    }), this.root.addEventListener("blur", this.handleInterruptEvents), this.root.addEventListener("contextmenu", this.handleInterruptEvents);
  }
  /**
   * Handle events that should interrupt all gestures.
   * This clears all active pointers and notifies handlers with a pointercancel-like event.
   *
   * @param event - The event that triggered the interruption (blur or contextmenu)
   */
  handleInterruptEvents = (t) => {
    if (this.preventEventInterruption && "pointerType" in t && t.pointerType === "touch") {
      t.preventDefault();
      return;
    }
    const r = new PointerEvent("forceCancel", {
      bubbles: !1,
      cancelable: !1
    }), i = this.pointers.values().next().value;
    if (this.pointers.size > 0 && i) {
      Object.defineProperties(r, {
        clientX: {
          value: i.clientX
        },
        clientY: {
          value: i.clientY
        },
        pointerId: {
          value: i.pointerId
        },
        pointerType: {
          value: i.pointerType
        }
      });
      for (const [o, s] of this.pointers.entries()) {
        const a = A({}, s, {
          type: "forceCancel"
        });
        this.pointers.set(o, a);
      }
    }
    this.notifyHandlers(r), this.pointers.clear();
  };
  /**
   * Event handler for all pointer events.
   *
   * This method:
   * 1. Updates the internal pointers map based on the event type
   * 2. Manages pointer capture for tracking pointers outside the root element
   * 3. Notifies all registered handlers with the current state
   *
   * @param event - The original pointer event from the browser
   */
  handlePointerEvent = (t) => {
    const {
      type: r,
      pointerId: i
    } = t;
    if (r === "pointerdown" || r === "pointermove")
      this.pointers.set(i, this.createPointerData(t));
    else if (r === "pointerup" || r === "pointercancel" || r === "forceCancel") {
      this.pointers.set(i, this.createPointerData(t)), this.notifyHandlers(t), this.pointers.delete(i);
      return;
    }
    this.notifyHandlers(t);
  };
  /**
   * Notify all registered gesture handlers about a pointer event.
   *
   * Each handler receives the current map of active pointers and the original event.
   *
   * @param event - The original pointer event that triggered this notification
   */
  notifyHandlers(t) {
    this.gestureHandlers.forEach((r) => r(this.pointers, t));
  }
  /**
   * Create a normalized PointerData object from a browser PointerEvent.
   *
   * This method extracts all relevant information from the original event
   * and formats it in a consistent way for gesture recognizers to use.
   *
   * @param event - The original browser pointer event
   * @returns A new PointerData object representing this pointer
   */
  createPointerData(t) {
    return {
      pointerId: t.pointerId,
      clientX: t.clientX,
      clientY: t.clientY,
      pageX: t.pageX,
      pageY: t.pageY,
      target: t.target,
      timeStamp: t.timeStamp,
      type: t.type,
      isPrimary: t.isPrimary,
      pressure: t.pressure,
      width: t.width,
      height: t.height,
      pointerType: t.pointerType,
      srcEvent: t
    };
  }
  /**
   * Clean up all event listeners and reset the PointerManager state.
   *
   * This method should be called when the PointerManager is no longer needed
   * to prevent memory leaks. It removes all event listeners, clears the
   * internal state, and resets the singleton instance.
   */
  destroy() {
    this.root.removeEventListener("pointerdown", this.handlePointerEvent), this.root.removeEventListener("pointermove", this.handlePointerEvent), this.root.removeEventListener("pointerup", this.handlePointerEvent), this.root.removeEventListener("pointercancel", this.handlePointerEvent), this.root.removeEventListener("forceCancel", this.handlePointerEvent), this.root.removeEventListener("blur", this.handleInterruptEvents), this.root.removeEventListener("contextmenu", this.handleInterruptEvents), this.pointers.clear(), this.gestureHandlers.clear();
  }
}
class IS {
  /** Repository of gesture templates that can be cloned for specific elements */
  gestureTemplates = /* @__PURE__ */ new Map();
  /** Maps DOM elements to their active gesture instances */
  elementGestureMap = /* @__PURE__ */ new Map();
  activeGesturesRegistry = new RS();
  keyboardManager = new AS();
  /**
   * Create a new GestureManager instance to coordinate gesture recognition
   *
   * @param options - Configuration options for the gesture manager
   */
  constructor(t) {
    this.pointerManager = new PS({
      root: t.root,
      touchAction: t.touchAction,
      passive: t.passive
    }), t.gestures && t.gestures.length > 0 && t.gestures.forEach((r) => {
      this.addGestureTemplate(r);
    });
  }
  /**
   * Add a gesture template to the manager's template registry.
   * Templates serve as prototypes that can be cloned for individual elements.
   *
   * @param gesture - The gesture instance to use as a template
   */
  addGestureTemplate(t) {
    this.gestureTemplates.has(t.name) && console.warn(`Gesture template with name "${t.name}" already exists. It will be overwritten.`), this.gestureTemplates.set(t.name, t);
  }
  /**
   * Updates the options for a specific gesture on a given element and emits a change event.
   *
   * @param gestureName - Name of the gesture whose options should be updated
   * @param element - The DOM element where the gesture is attached
   * @param options - New options to apply to the gesture
   * @returns True if the options were successfully updated, false if the gesture wasn't found
   *
   * @example
   * ```typescript
   * // Update pan gesture sensitivity on the fly
   * manager.setGestureOptions('pan', element, { threshold: 5 });
   * ```
   */
  setGestureOptions(t, r, i) {
    const o = this.elementGestureMap.get(r);
    if (!o || !o.has(t)) {
      console.error(`Gesture "${t}" not found on the provided element.`);
      return;
    }
    const s = new CustomEvent(`${t}ChangeOptions`, {
      detail: i,
      bubbles: !1,
      cancelable: !1,
      composed: !1
    });
    r.dispatchEvent(s);
  }
  /**
   * Updates the state for a specific gesture on a given element and emits a change event.
   *
   * @param gestureName - Name of the gesture whose state should be updated
   * @param element - The DOM element where the gesture is attached
   * @param state - New state to apply to the gesture
   * @returns True if the state was successfully updated, false if the gesture wasn't found
   *
   * @example
   * ```typescript
   * // Update total delta for a turnWheel gesture
   * manager.setGestureState('turnWheel', element, { totalDeltaX: 10 });
   * ```
   */
  setGestureState(t, r, i) {
    const o = this.elementGestureMap.get(r);
    if (!o || !o.has(t)) {
      console.error(`Gesture "${t}" not found on the provided element.`);
      return;
    }
    const s = new CustomEvent(`${t}ChangeState`, {
      detail: i,
      bubbles: !1,
      cancelable: !1,
      composed: !1
    });
    r.dispatchEvent(s);
  }
  /**
   * Register an element to recognize one or more gestures.
   *
   * This method clones the specified gesture template(s) and creates
   * gesture recognizer instance(s) specifically for the provided element.
   * The element is returned with enhanced TypeScript typing for gesture events.
   *
   * @param gestureNames - Name(s) of the gesture(s) to register (must match template names)
   * @param element - The DOM element to attach the gesture(s) to
   * @param options - Optional map of gesture-specific options to override when registering
   * @returns The same element with properly typed event listeners
   *
   * @example
   * ```typescript
   * // Register multiple gestures
   * const element = manager.registerElement(['pan', 'pinch'], myDiv);
   *
   * // Register a single gesture
   * const draggable = manager.registerElement('pan', dragHandle);
   *
   * // Register with customized options for each gesture
   * const customElement = manager.registerElement(
   *   ['pan', 'pinch', 'rotate'],
   *   myElement,
   *   {
   *     pan: { threshold: 20, direction: ['left', 'right'] },
   *     pinch: { threshold: 0.1 }
   *   }
   * );
   * ```
   */
  registerElement(t, r, i) {
    return Array.isArray(t) || (t = [t]), t.forEach((o) => {
      const s = i?.[o];
      this.registerSingleGesture(o, r, s);
    }), r;
  }
  /**
   * Internal method to register a single gesture on an element.
   *
   * @param gestureName - Name of the gesture to register
   * @param element - DOM element to attach the gesture to
   * @param options - Optional options to override the gesture template configuration
   * @returns True if the registration was successful, false otherwise
   */
  registerSingleGesture(t, r, i) {
    const o = this.gestureTemplates.get(t);
    if (!o)
      return console.error(`Gesture template "${t}" not found.`), !1;
    this.elementGestureMap.has(r) || this.elementGestureMap.set(r, /* @__PURE__ */ new Map());
    const s = this.elementGestureMap.get(r);
    s.has(t) && (console.warn(`Element already has gesture "${t}" registered. It will be replaced.`), this.unregisterElement(t, r));
    const a = o.clone(i);
    return a.init(r, this.pointerManager, this.activeGesturesRegistry, this.keyboardManager), s.set(t, a), !0;
  }
  /**
   * Unregister a specific gesture from an element.
   * This removes the gesture recognizer and stops event emission for that gesture.
   *
   * @param gestureName - Name of the gesture to unregister
   * @param element - The DOM element to remove the gesture from
   * @returns True if the gesture was found and removed, false otherwise
   */
  unregisterElement(t, r) {
    const i = this.elementGestureMap.get(r);
    return !i || !i.has(t) ? !1 : (i.get(t).destroy(), i.delete(t), this.activeGesturesRegistry.unregisterElement(r), i.size === 0 && this.elementGestureMap.delete(r), !0);
  }
  /**
   * Unregister all gestures from an element.
   * Completely removes the element from the gesture system.
   *
   * @param element - The DOM element to remove all gestures from
   */
  unregisterAllGestures(t) {
    const r = this.elementGestureMap.get(t);
    if (r) {
      for (const [, i] of r)
        i.destroy(), this.activeGesturesRegistry.unregisterElement(t);
      this.elementGestureMap.delete(t);
    }
  }
  /**
   * Clean up all gestures and event listeners.
   * Call this method when the GestureManager is no longer needed to prevent memory leaks.
   */
  destroy() {
    for (const [t] of this.elementGestureMap)
      this.unregisterAllGestures(t);
    this.gestureTemplates.clear(), this.elementGestureMap.clear(), this.activeGesturesRegistry.destroy(), this.keyboardManager.destroy(), this.pointerManager.destroy();
  }
}
class ur extends Sm {
  /** Function to unregister from the PointerManager when destroying this gesture */
  unregisterHandler = null;
  /** The original target element when the gesture began, used to prevent limbo state if target is removed */
  originalTarget = null;
  /**
   * Minimum number of simultaneous pointers required to activate the gesture.
   * The gesture will not start until at least this many pointers are active.
   */
  /**
   * Maximum number of simultaneous pointers allowed for this gesture.
   * If more than this many pointers are detected, the gesture may be canceled.
   */
  constructor(t) {
    super(t), this.minPointers = t.minPointers ?? 1, this.maxPointers = t.maxPointers ?? 1 / 0;
  }
  init(t, r, i, o) {
    super.init(t, r, i, o), this.unregisterHandler = this.pointerManager.registerGestureHandler(this.handlePointerEvent);
  }
  updateOptions(t) {
    super.updateOptions(t), this.minPointers = t.minPointers ?? this.minPointers, this.maxPointers = t.maxPointers ?? this.maxPointers;
  }
  getBaseConfig() {
    return {
      requiredKeys: this.requiredKeys,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers
    };
  }
  isWithinPointerCount(t, r) {
    const i = this.getEffectiveConfig(r, this.getBaseConfig());
    return t.length >= i.minPointers && t.length <= i.maxPointers;
  }
  /**
   * Handler for pointer events from the PointerManager.
   * Concrete gesture implementations must override this method to provide
   * gesture-specific logic for recognizing and tracking the gesture.
   *
   * @param pointers - Map of active pointers by pointer ID
   * @param event - The original pointer event from the browser
   */
  /**
   * Calculate the target element for the gesture based on the active pointers.
   *
   * It takes into account the original target element.
   *
   * @param pointers - Map of active pointers by pointer ID
   * @param calculatedTarget - The target element calculated from getTargetElement
   * @returns A list of relevant pointers for this gesture
   */
  getRelevantPointers(t, r) {
    return t.filter((i) => this.isPointerTypeAllowed(i.pointerType) && (r === i.target || i.target === this.originalTarget || r === this.originalTarget || "contains" in r && r.contains(i.target)) || "getRootNode" in r && r.getRootNode() instanceof ShadowRoot && i.srcEvent.composedPath().includes(r));
  }
  destroy() {
    this.unregisterHandler && (this.unregisterHandler(), this.unregisterHandler = null), super.destroy();
  }
}
function MS(e, t) {
  const r = t.x - e.x, i = t.y - e.y;
  return Math.sqrt(r * r + i * i);
}
function ol(e) {
  if (e.length < 2)
    return 0;
  let t = 0, r = 0;
  for (let i = 0; i < e.length; i += 1)
    for (let o = i + 1; o < e.length; o += 1)
      t += MS({
        x: e[i].clientX,
        y: e[i].clientY
      }, {
        x: e[o].clientX,
        y: e[o].clientY
      }), r += 1;
  return r > 0 ? t / r : 0;
}
function un(e) {
  if (e.length === 0)
    return {
      x: 0,
      y: 0
    };
  const t = e.reduce((r, i) => (r.x += i.clientX, r.y += i.clientY, r), {
    x: 0,
    y: 0
  });
  return {
    x: t.x / e.length,
    y: t.y / e.length
  };
}
function Pt(e, t) {
  return `${e}${t === "ongoing" ? "" : t.charAt(0).toUpperCase() + t.slice(1)}`;
}
const jo = 1e-5, xn = 1e-5, Tf = 0.15;
function _S(e, t) {
  const r = t.x - e.x, i = t.y - e.y, o = {
    vertical: null,
    horizontal: null,
    mainAxis: null
  }, s = jS(t, e), a = Math.abs(r) > Math.abs(i) ? "horizontal" : "vertical", l = s || a === "horizontal" ? jo : Tf, c = s ? jo : a === "horizontal" ? Tf : jo;
  return Math.abs(r) > l && (o.horizontal = r > 0 ? "right" : "left"), Math.abs(i) > c && (o.vertical = i > 0 ? "down" : "up"), o.mainAxis = s ? "diagonal" : a, o;
}
function jS(e, t) {
  const r = t.x - e.x, i = t.y - e.y, o = Math.atan2(i, r) * 180 / Math.PI;
  return o >= -45 + xn && o <= -22.5 + xn || o >= 22.5 + xn && o <= 45 + xn || o >= 135 + xn && o <= 157.5 + xn || o >= -157.5 + xn && o <= -135 + xn;
}
function $S(e, t) {
  if (!e.vertical && !e.horizontal)
    return !1;
  if (t.length === 0)
    return !0;
  const r = e.vertical === null || t.includes(e.vertical), i = e.horizontal === null || t.includes(e.horizontal);
  return r && i;
}
const Sf = 0, DS = (e) => e > Sf ? 1 : e < -Sf ? -1 : 0, vn = (e) => {
  e.cancelable && e.preventDefault();
};
class Yc extends ur {
  state = {
    lastPosition: null
  };
  /**
   * Movement threshold in pixels that must be exceeded before the gesture activates.
   * Higher values reduce false positive gesture detection for small movements.
   */
  constructor(t) {
    super(t), this.threshold = t.threshold || 0;
  }
  clone(t) {
    return new Yc(A({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      threshold: this.threshold,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, t));
  }
  init(t, r, i, o) {
    super.init(t, r, i, o), this.element.addEventListener("pointerenter", this.handleElementEnter), this.element.addEventListener("pointerleave", this.handleElementLeave);
  }
  destroy() {
    this.element.removeEventListener("pointerenter", this.handleElementEnter), this.element.removeEventListener("pointerleave", this.handleElementLeave), this.resetState(), super.destroy();
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  resetState() {
    this.isActive = !1, this.state = {
      lastPosition: null
    };
  }
  /**
   * Handle pointer enter events for a specific element
   * @param event The original pointer event
   */
  handleElementEnter = (t) => {
    if (t.pointerType !== "mouse" && t.pointerType !== "pen")
      return;
    const r = this.pointerManager.getPointers() || /* @__PURE__ */ new Map(), i = Array.from(r.values());
    if (this.isWithinPointerCount(i, t.pointerType)) {
      this.isActive = !0;
      const o = {
        x: t.clientX,
        y: t.clientY
      };
      this.state.lastPosition = o, this.emitMoveEvent(this.element, "start", i, t), this.emitMoveEvent(this.element, "ongoing", i, t);
    }
  };
  /**
   * Handle pointer leave events for a specific element
   * @param event The original pointer event
   */
  handleElementLeave = (t) => {
    if (t.pointerType !== "mouse" && t.pointerType !== "pen" || !this.isActive)
      return;
    const r = this.pointerManager.getPointers() || /* @__PURE__ */ new Map(), i = Array.from(r.values());
    this.emitMoveEvent(this.element, "end", i, t), this.resetState();
  };
  /**
   * Handle pointer events for the move gesture (only handles move events now)
   * @param pointers Map of active pointers
   * @param event The original pointer event
   */
  handlePointerEvent = (t, r) => {
    if (r.type !== "pointermove" || r.pointerType !== "mouse" && r.pointerType !== "pen")
      return;
    this.preventDefault && r.preventDefault(), this.stopPropagation && r.stopPropagation();
    const i = Array.from(t.values()), o = this.getTargetElement(r);
    if (!o || !this.isWithinPointerCount(i, r.pointerType))
      return;
    if (this.shouldPreventGesture(o, r.pointerType)) {
      if (!this.isActive)
        return;
      this.resetState(), this.emitMoveEvent(o, "end", i, r);
      return;
    }
    const s = {
      x: r.clientX,
      y: r.clientY
    };
    this.state.lastPosition = s, this.isActive || (this.isActive = !0, this.emitMoveEvent(o, "start", i, r)), this.emitMoveEvent(o, "ongoing", i, r);
  };
  /**
   * Emit move-specific events
   * @param element The DOM element the event is related to
   * @param phase The current phase of the gesture (start, ongoing, end)
   * @param pointers Array of active pointers
   * @param event The original pointer event
   */
  emitMoveEvent(t, r, i, o) {
    const s = this.state.lastPosition || un(i), a = this.gesturesRegistry.getActiveGestures(t), l = {
      gestureName: this.name,
      centroid: s,
      target: o.target,
      srcEvent: o,
      phase: r,
      pointers: i,
      timeStamp: o.timeStamp,
      activeGestures: a,
      customData: this.customData
    }, c = Pt(this.name, r), u = new CustomEvent(c, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: l
    });
    t.dispatchEvent(u);
  }
}
class Qn extends ur {
  state = {
    startPointers: /* @__PURE__ */ new Map(),
    startCentroid: null,
    lastCentroid: null,
    movementThresholdReached: !1,
    totalDeltaX: 0,
    totalDeltaY: 0,
    activeDeltaX: 0,
    activeDeltaY: 0,
    lastDirection: {
      vertical: null,
      horizontal: null,
      mainAxis: null
    },
    lastDeltas: null
  };
  /**
   * Movement threshold in pixels that must be exceeded before the gesture activates.
   * Higher values reduce false positive gesture detection for small movements.
   */
  /**
   * Allowed directions for the pan gesture
   * Default allows all directions
   */
  constructor(t) {
    super(t), this.direction = t.direction || ["up", "down", "left", "right"], this.threshold = t.threshold || 0;
  }
  clone(t) {
    return new Qn(A({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      threshold: this.threshold,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      direction: [...this.direction],
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, t));
  }
  destroy() {
    this.resetState(), super.destroy();
  }
  updateOptions(t) {
    super.updateOptions(t), this.direction = t.direction || this.direction, this.threshold = t.threshold ?? this.threshold;
  }
  resetState() {
    this.isActive = !1, this.state = A({}, this.state, {
      startPointers: /* @__PURE__ */ new Map(),
      startCentroid: null,
      lastCentroid: null,
      lastDeltas: null,
      activeDeltaX: 0,
      activeDeltaY: 0,
      movementThresholdReached: !1,
      lastDirection: {
        vertical: null,
        horizontal: null,
        mainAxis: null
      }
    });
  }
  /**
   * Handle pointer events for the pan gesture
   */
  handlePointerEvent = (t, r) => {
    const i = Array.from(t.values());
    if (r.type === "forceCancel") {
      this.cancel(r.target, i, r);
      return;
    }
    const o = this.getTargetElement(r);
    if (!o)
      return;
    if (this.shouldPreventGesture(o, r.pointerType)) {
      this.cancel(o, i, r);
      return;
    }
    const s = this.getRelevantPointers(i, o);
    if (!this.isWithinPointerCount(s, r.pointerType)) {
      this.cancel(o, s, r);
      return;
    }
    switch (r.type) {
      case "pointerdown":
        !this.isActive && !this.state.startCentroid && (s.forEach((a) => {
          this.state.startPointers.set(a.pointerId, a);
        }), this.originalTarget = o, this.state.startCentroid = un(s), this.state.lastCentroid = A({}, this.state.startCentroid));
        break;
      case "pointermove":
        if (this.state.startCentroid && this.isWithinPointerCount(i, r.pointerType)) {
          const a = un(s), l = a.x - this.state.startCentroid.x, c = a.y - this.state.startCentroid.y, u = Math.sqrt(l * l + c * c), d = _S(this.state.lastCentroid ?? this.state.startCentroid, a), f = this.state.lastCentroid ? a.x - this.state.lastCentroid.x : 0, p = this.state.lastCentroid ? a.y - this.state.lastCentroid.y : 0;
          !this.state.movementThresholdReached && u >= this.threshold && $S(d, this.direction) ? (this.state.movementThresholdReached = !0, this.isActive = !0, this.state.lastDeltas = {
            x: f,
            y: p
          }, this.state.totalDeltaX += f, this.state.totalDeltaY += p, this.state.activeDeltaX += f, this.state.activeDeltaY += p, this.emitPanEvent(o, "start", s, r, a), this.emitPanEvent(o, "ongoing", s, r, a)) : this.state.movementThresholdReached && this.isActive && (this.state.lastDeltas = {
            x: f,
            y: p
          }, this.state.totalDeltaX += f, this.state.totalDeltaY += p, this.state.activeDeltaX += f, this.state.activeDeltaY += p, this.emitPanEvent(o, "ongoing", s, r, a)), this.state.lastCentroid = a, this.state.lastDirection = d;
        }
        break;
      case "pointerup":
      case "pointercancel":
      case "forceCancel":
        if (this.isActive && this.state.movementThresholdReached) {
          const a = s.filter((l) => l.type !== "pointerup" && l.type !== "pointercancel");
          if (!this.isWithinPointerCount(a, r.pointerType)) {
            const l = this.state.lastCentroid || this.state.startCentroid;
            r.type === "pointercancel" && this.emitPanEvent(o, "cancel", s, r, l), this.emitPanEvent(o, "end", s, r, l), this.resetState();
          }
        } else
          this.resetState();
        break;
    }
  };
  /**
   * Emit pan-specific events with additional data
   */
  emitPanEvent(t, r, i, o, s) {
    if (!this.state.startCentroid)
      return;
    const a = this.state.lastDeltas?.x ?? 0, l = this.state.lastDeltas?.y ?? 0, c = this.state.startPointers.values().next().value, u = c ? (o.timeStamp - c.timeStamp) / 1e3 : 0, d = u > 0 ? a / u : 0, f = u > 0 ? l / u : 0, p = Math.sqrt(d * d + f * f), h = this.gesturesRegistry.getActiveGestures(t), g = {
      gestureName: this.name,
      initialCentroid: this.state.startCentroid,
      centroid: s,
      target: o.target,
      srcEvent: o,
      phase: r,
      pointers: i,
      timeStamp: o.timeStamp,
      deltaX: a,
      deltaY: l,
      direction: this.state.lastDirection,
      velocityX: d,
      velocityY: f,
      velocity: p,
      totalDeltaX: this.state.totalDeltaX,
      totalDeltaY: this.state.totalDeltaY,
      activeDeltaX: this.state.activeDeltaX,
      activeDeltaY: this.state.activeDeltaY,
      activeGestures: h,
      customData: this.customData
    }, m = Pt(this.name, r), y = new CustomEvent(m, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: g
    });
    t.dispatchEvent(y), this.preventDefault && o.preventDefault(), this.stopPropagation && o.stopPropagation();
  }
  /**
   * Cancel the current gesture
   */
  cancel(t, r, i) {
    if (this.isActive) {
      const o = t ?? this.element;
      this.emitPanEvent(o, "cancel", r, i, this.state.lastCentroid), this.emitPanEvent(o, "end", r, i, this.state.lastCentroid);
    }
    this.resetState();
  }
}
class Xc extends ur {
  state = {
    startDistance: 0,
    lastDistance: 0,
    lastScale: 1,
    lastTime: 0,
    velocity: 0,
    totalScale: 1,
    deltaScale: 0
  };
  /**
   * Movement threshold in pixels that must be exceeded before the gesture activates.
   * Higher values reduce false positive gesture detection for small movements.
   */
  constructor(t) {
    super(A({}, t, {
      minPointers: t.minPointers ?? 2
    })), this.threshold = t.threshold ?? 0;
  }
  clone(t) {
    return new Xc(A({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      threshold: this.threshold,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, t));
  }
  destroy() {
    this.resetState(), super.destroy();
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  resetState() {
    this.isActive = !1, this.state = A({}, this.state, {
      startDistance: 0,
      lastDistance: 0,
      lastScale: 1,
      lastTime: 0,
      velocity: 0,
      deltaScale: 0
    });
  }
  /**
   * Handle pointer events for the pinch gesture
   */
  handlePointerEvent = (t, r) => {
    const i = Array.from(t.values()), o = this.getTargetElement(r);
    if (!o)
      return;
    if (this.shouldPreventGesture(o, r.pointerType)) {
      this.isActive && (this.emitPinchEvent(o, "cancel", i, r), this.resetState());
      return;
    }
    const s = this.getRelevantPointers(i, o);
    switch (r.type) {
      case "pointerdown":
        if (s.length >= 2 && !this.isActive) {
          const a = ol(s);
          this.state.startDistance = a, this.state.lastDistance = a, this.state.lastTime = r.timeStamp, this.originalTarget = o;
        }
        break;
      case "pointermove":
        if (this.state.startDistance && this.isWithinPointerCount(s, r.pointerType)) {
          const a = ol(s), l = Math.abs(a - this.state.lastDistance);
          if (l !== 0 && l >= this.threshold) {
            const c = this.state.startDistance ? a / this.state.startDistance : 1, u = c / this.state.lastScale;
            this.state.totalScale *= u;
            const d = (r.timeStamp - this.state.lastTime) / 1e3;
            if (this.state.lastDistance) {
              const p = (a - this.state.lastDistance) / d;
              this.state.velocity = Number.isNaN(p) ? 0 : p;
            }
            this.state.lastDistance = a, this.state.deltaScale = c - this.state.lastScale, this.state.lastScale = c, this.state.lastTime = r.timeStamp, this.isActive ? this.emitPinchEvent(o, "ongoing", s, r) : (this.isActive = !0, this.emitPinchEvent(o, "start", s, r), this.emitPinchEvent(o, "ongoing", s, r));
          }
        }
        break;
      case "pointerup":
      case "pointercancel":
      case "forceCancel":
        if (this.isActive) {
          const a = s.filter((l) => l.type !== "pointerup" && l.type !== "pointercancel");
          if (!this.isWithinPointerCount(a, r.pointerType))
            r.type === "pointercancel" && this.emitPinchEvent(o, "cancel", s, r), this.emitPinchEvent(o, "end", s, r), this.resetState();
          else if (a.length >= 2) {
            const l = ol(a);
            this.state.startDistance = l / this.state.lastScale;
          }
        }
        break;
    }
  };
  /**
   * Emit pinch-specific events with additional data
   */
  emitPinchEvent(t, r, i, o) {
    const s = un(i), a = this.state.lastDistance, l = this.state.lastScale, c = this.gesturesRegistry.getActiveGestures(t), u = {
      gestureName: this.name,
      centroid: s,
      target: o.target,
      srcEvent: o,
      phase: r,
      pointers: i,
      timeStamp: o.timeStamp,
      scale: l,
      deltaScale: this.state.deltaScale,
      totalScale: this.state.totalScale,
      distance: a,
      velocity: this.state.velocity,
      activeGestures: c,
      direction: DS(this.state.velocity),
      customData: this.customData
    };
    this.preventDefault && o.preventDefault(), this.stopPropagation && o.stopPropagation();
    const d = Pt(this.name, r), f = new CustomEvent(d, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: u
    });
    t.dispatchEvent(f);
  }
}
class ia extends ur {
  state = {
    startCentroid: null,
    lastPosition: null,
    timerId: null,
    startTime: 0,
    pressThresholdReached: !1
  };
  /**
   * Duration in milliseconds required to hold before the press gesture is recognized
   */
  /**
   * Maximum distance a pointer can move for a gesture to still be considered a press
   */
  constructor(t) {
    super(t), this.duration = t.duration ?? 500, this.maxDistance = t.maxDistance ?? 10;
  }
  clone(t) {
    return new ia(A({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      duration: this.duration,
      maxDistance: this.maxDistance,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, t));
  }
  destroy() {
    this.clearPressTimer(), this.resetState(), super.destroy();
  }
  updateOptions(t) {
    super.updateOptions(t), this.duration = t.duration ?? this.duration, this.maxDistance = t.maxDistance ?? this.maxDistance;
  }
  resetState() {
    this.clearPressTimer(), this.isActive = !1, this.state = A({}, this.state, {
      startCentroid: null,
      lastPosition: null,
      timerId: null,
      startTime: 0,
      pressThresholdReached: !1
    });
  }
  /**
   * Clear the press timer if it's active
   */
  clearPressTimer() {
    this.state.timerId !== null && (clearTimeout(this.state.timerId), this.state.timerId = null);
  }
  /**
   * Handle pointer events for the press gesture
   */
  handlePointerEvent = (t, r) => {
    const i = Array.from(t.values());
    if (r.type === "forceCancel") {
      this.cancelPress(r.target, i, r);
      return;
    }
    const o = this.getTargetElement(r);
    if (!o)
      return;
    if (this.shouldPreventGesture(o, r.pointerType)) {
      this.isActive && this.cancelPress(o, i, r);
      return;
    }
    const s = this.getRelevantPointers(i, o);
    if (!this.isWithinPointerCount(s, r.pointerType)) {
      this.isActive && this.cancelPress(o, s, r);
      return;
    }
    switch (r.type) {
      case "pointerdown":
        !this.isActive && !this.state.startCentroid && (this.state.startCentroid = un(s), this.state.lastPosition = A({}, this.state.startCentroid), this.state.startTime = r.timeStamp, this.isActive = !0, this.originalTarget = o, this.clearPressTimer(), this.state.timerId = setTimeout(() => {
          if (this.isActive && this.state.startCentroid) {
            this.state.pressThresholdReached = !0;
            const a = this.state.lastPosition;
            this.emitPressEvent(o, "start", s, r, a), this.emitPressEvent(o, "ongoing", s, r, a);
          }
        }, this.duration));
        break;
      case "pointermove":
        if (this.isActive && this.state.startCentroid) {
          const a = un(s);
          this.state.lastPosition = a;
          const l = a.x - this.state.startCentroid.x, c = a.y - this.state.startCentroid.y;
          Math.sqrt(l * l + c * c) > this.maxDistance && this.cancelPress(o, s, r);
        }
        break;
      case "pointerup":
        if (this.isActive) {
          if (this.state.pressThresholdReached) {
            const a = this.state.lastPosition || this.state.startCentroid;
            this.emitPressEvent(o, "end", s, r, a);
          }
          this.resetState();
        }
        break;
      case "pointercancel":
      case "forceCancel":
        this.cancelPress(o, s, r);
        break;
    }
  };
  /**
   * Emit press-specific events with additional data
   */
  emitPressEvent(t, r, i, o, s) {
    const a = this.gesturesRegistry.getActiveGestures(t), l = o.timeStamp - this.state.startTime, c = {
      gestureName: this.name,
      centroid: s,
      target: o.target,
      srcEvent: o,
      phase: r,
      pointers: i,
      timeStamp: o.timeStamp,
      x: s.x,
      y: s.y,
      duration: l,
      activeGestures: a,
      customData: this.customData
    }, u = Pt(this.name, r), d = new CustomEvent(u, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: c
    });
    t.dispatchEvent(d), this.preventDefault && o.preventDefault(), this.stopPropagation && o.stopPropagation();
  }
  /**
   * Cancel the current press gesture
   */
  cancelPress(t, r, i) {
    if (this.isActive && this.state.pressThresholdReached) {
      const o = this.state.lastPosition || this.state.startCentroid;
      this.emitPressEvent(t ?? this.element, "cancel", r, i, o), this.emitPressEvent(t ?? this.element, "end", r, i, o);
    }
    this.resetState();
  }
}
class Kc extends ur {
  state = {
    phase: "waitingForPress",
    dragTimeoutId: null
  };
  /**
   * Duration required for press recognition
   */
  /**
   * Maximum distance a pointer can move during press for it to still be considered a press
   */
  /**
   * Maximum time between press completion and drag start
   */
  /**
   * Movement threshold for drag activation
   */
  /**
   * Allowed directions for the drag gesture
   */
  constructor(t) {
    super(t), this.pressDuration = t.pressDuration ?? 500, this.pressMaxDistance = t.pressMaxDistance ?? 10, this.dragTimeout = t.dragTimeout ?? 1e3, this.dragThreshold = t.dragThreshold ?? 0, this.dragDirection = t.dragDirection || ["up", "down", "left", "right"], this.pressGesture = new ia({
      name: `${this.name}-press`,
      duration: this.pressDuration,
      maxDistance: this.pressMaxDistance,
      maxPointers: this.maxPointers,
      pointerMode: this.pointerMode,
      requiredKeys: this.requiredKeys,
      preventIf: this.preventIf,
      pointerOptions: structuredClone(this.pointerOptions)
    }), this.panGesture = new Qn({
      name: `${this.name}-pan`,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      threshold: this.dragThreshold,
      direction: this.dragDirection,
      pointerMode: this.pointerMode,
      requiredKeys: this.requiredKeys,
      preventIf: this.preventIf,
      pointerOptions: structuredClone(this.pointerOptions)
    });
  }
  clone(t) {
    return new Kc(A({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      pressDuration: this.pressDuration,
      pressMaxDistance: this.pressMaxDistance,
      dragTimeout: this.dragTimeout,
      dragThreshold: this.dragThreshold,
      dragDirection: [...this.dragDirection],
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, t));
  }
  init(t, r, i, o) {
    super.init(t, r, i, o), this.pressGesture.init(t, r, i, o), this.panGesture.init(t, r, i, o), this.element.addEventListener(this.pressGesture.name, this.pressHandler), this.element.addEventListener(`${this.panGesture.name}Start`, this.dragStartHandler), this.element.addEventListener(this.panGesture.name, this.dragMoveHandler), this.element.addEventListener(`${this.panGesture.name}End`, this.dragEndHandler), this.element.addEventListener(`${this.panGesture.name}Cancel`, this.dragEndHandler);
  }
  destroy() {
    this.resetState(), this.pressGesture.destroy(), this.panGesture.destroy(), this.element.removeEventListener(this.pressGesture.name, this.pressHandler), this.element.removeEventListener(`${this.panGesture.name}Start`, this.dragStartHandler), this.element.removeEventListener(this.panGesture.name, this.dragMoveHandler), this.element.removeEventListener(`${this.panGesture.name}End`, this.dragEndHandler), this.element.removeEventListener(`${this.panGesture.name}Cancel`, this.dragEndHandler), super.destroy();
  }
  updateOptions(t) {
    super.updateOptions(t), this.pressDuration = t.pressDuration ?? this.pressDuration, this.pressMaxDistance = t.pressMaxDistance ?? this.pressMaxDistance, this.dragTimeout = t.dragTimeout ?? this.dragTimeout, this.dragThreshold = t.dragThreshold ?? this.dragThreshold, this.dragDirection = t.dragDirection || this.dragDirection, this.element.dispatchEvent(new CustomEvent(`${this.panGesture.name}ChangeOptions`, {
      detail: {
        minPointers: this.minPointers,
        maxPointers: this.maxPointers,
        threshold: this.dragThreshold,
        direction: this.dragDirection,
        pointerMode: this.pointerMode,
        requiredKeys: this.requiredKeys,
        preventIf: this.preventIf,
        pointerOptions: structuredClone(this.pointerOptions)
      }
    })), this.element.dispatchEvent(new CustomEvent(`${this.pressGesture.name}ChangeOptions`, {
      detail: {
        duration: this.pressDuration,
        maxDistance: this.pressMaxDistance,
        maxPointers: this.maxPointers,
        pointerMode: this.pointerMode,
        requiredKeys: this.requiredKeys,
        preventIf: this.preventIf,
        pointerOptions: structuredClone(this.pointerOptions)
      }
    }));
  }
  resetState() {
    this.state.dragTimeoutId !== null && clearTimeout(this.state.dragTimeoutId), this.restoreTouchAction(), this.isActive = !1, this.state = {
      phase: "waitingForPress",
      dragTimeoutId: null
    };
  }
  /**
   * This can be empty because the PressAndDragGesture relies on PressGesture and PanGesture to handle pointer events
   * The internal gestures will manage their own state and events, while this class coordinates between them
   */
  handlePointerEvent() {
  }
  pressHandler = () => {
    this.state.phase === "waitingForPress" && (this.state.phase = "pressDetected", this.setTouchAction(), this.state.dragTimeoutId = setTimeout(() => {
      this.resetState();
    }, this.dragTimeout));
  };
  dragStartHandler = (t) => {
    this.state.phase === "pressDetected" && (this.state.dragTimeoutId !== null && (clearTimeout(this.state.dragTimeoutId), this.state.dragTimeoutId = null), this.restoreTouchAction(), this.state.phase = "dragging", this.isActive = !0, this.element.dispatchEvent(new CustomEvent(Pt(this.name, t.detail.phase), t)));
  };
  dragMoveHandler = (t) => {
    this.state.phase === "dragging" && this.element.dispatchEvent(new CustomEvent(Pt(this.name, t.detail.phase), t));
  };
  dragEndHandler = (t) => {
    this.state.phase === "dragging" && (this.resetState(), this.element.dispatchEvent(new CustomEvent(Pt(this.name, t.detail.phase), t)));
  };
  setTouchAction() {
    this.element.addEventListener("touchstart", vn, {
      passive: !1
    }), this.element.addEventListener("touchmove", vn, {
      passive: !1
    }), this.element.addEventListener("touchend", vn, {
      passive: !1
    });
  }
  restoreTouchAction() {
    this.element.removeEventListener("touchstart", vn), this.element.removeEventListener("touchmove", vn), this.element.removeEventListener("touchend", vn);
  }
}
class Di extends ur {
  state = {
    startCentroid: null,
    currentTapCount: 0,
    lastTapTime: 0,
    lastPosition: null
  };
  /**
   * Maximum distance a pointer can move for a gesture to still be considered a tap
   */
  /**
   * Number of consecutive taps to detect
   */
  constructor(t) {
    super(t), this.maxDistance = t.maxDistance ?? 10, this.taps = t.taps ?? 1;
  }
  clone(t) {
    return new Di(A({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      maxDistance: this.maxDistance,
      taps: this.taps,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, t));
  }
  destroy() {
    this.resetState(), super.destroy();
  }
  updateOptions(t) {
    super.updateOptions(t), this.maxDistance = t.maxDistance ?? this.maxDistance, this.taps = t.taps ?? this.taps;
  }
  resetState() {
    this.isActive = !1, this.state = {
      startCentroid: null,
      currentTapCount: 0,
      lastTapTime: 0,
      lastPosition: null
    };
  }
  /**
   * Handle pointer events for the tap gesture
   */
  handlePointerEvent = (t, r) => {
    const i = Array.from(t.values()), o = this.getTargetElement(r);
    if (!o)
      return;
    const s = this.getRelevantPointers(i, o);
    if (this.shouldPreventGesture(o, r.pointerType) || !this.isWithinPointerCount(s, r.pointerType)) {
      this.isActive && this.cancelTap(o, s, r);
      return;
    }
    switch (r.type) {
      case "pointerdown":
        this.isActive || (this.state.startCentroid = un(s), this.state.lastPosition = A({}, this.state.startCentroid), this.isActive = !0, this.originalTarget = o);
        break;
      case "pointermove":
        if (this.isActive && this.state.startCentroid) {
          const a = un(s);
          this.state.lastPosition = a;
          const l = a.x - this.state.startCentroid.x, c = a.y - this.state.startCentroid.y;
          Math.sqrt(l * l + c * c) > this.maxDistance && this.cancelTap(o, s, r);
        }
        break;
      case "pointerup":
        if (this.isActive) {
          this.state.currentTapCount += 1;
          const a = this.state.lastPosition || this.state.startCentroid;
          if (!a) {
            this.cancelTap(o, s, r);
            return;
          }
          this.state.currentTapCount >= this.taps ? (this.fireTapEvent(o, s, r, a), this.resetState()) : (this.state.lastTapTime = r.timeStamp, this.isActive = !1, this.state.startCentroid = null, setTimeout(() => {
            this.state && this.state.currentTapCount > 0 && this.state.currentTapCount < this.taps && (this.state.currentTapCount = 0);
          }, 300));
        }
        break;
      case "pointercancel":
      case "forceCancel":
        this.cancelTap(o, s, r);
        break;
    }
  };
  /**
   * Fire the main tap event when a valid tap is detected
   */
  fireTapEvent(t, r, i, o) {
    const s = this.gesturesRegistry.getActiveGestures(t), a = {
      gestureName: this.name,
      centroid: o,
      target: i.target,
      srcEvent: i,
      phase: "end",
      // The tap is complete, so we use 'end' state for the event data
      pointers: r,
      timeStamp: i.timeStamp,
      x: o.x,
      y: o.y,
      tapCount: this.state.currentTapCount,
      activeGestures: s,
      customData: this.customData
    }, l = new CustomEvent(this.name, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: a
    });
    t.dispatchEvent(l), this.preventDefault && i.preventDefault(), this.stopPropagation && i.stopPropagation();
  }
  /**
   * Cancel the current tap gesture
   */
  cancelTap(t, r, i) {
    if (this.state.startCentroid || this.state.lastPosition) {
      const o = this.state.lastPosition || this.state.startCentroid, s = this.gesturesRegistry.getActiveGestures(t), a = {
        gestureName: this.name,
        centroid: o,
        target: i.target,
        srcEvent: i,
        phase: "cancel",
        pointers: r,
        timeStamp: i.timeStamp,
        x: o.x,
        y: o.y,
        tapCount: this.state.currentTapCount,
        activeGestures: s,
        customData: this.customData
      }, l = Pt(this.name, "cancel"), c = new CustomEvent(l, {
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        detail: a
      });
      t.dispatchEvent(c);
    }
    this.resetState();
  }
}
class Zc extends ur {
  state = {
    phase: "waitingForTap",
    dragTimeoutId: null
  };
  /**
   * Maximum distance a pointer can move during tap for it to still be considered a tap
   * (Following TapGesture pattern)
   */
  /**
   * Maximum time between tap completion and drag start
   */
  /**
   * Movement threshold for drag activation
   */
  /**
   * Allowed directions for the drag gesture
   */
  constructor(t) {
    super(t), this.tapMaxDistance = t.tapMaxDistance ?? 10, this.dragTimeout = t.dragTimeout ?? 1e3, this.dragThreshold = t.dragThreshold ?? 0, this.dragDirection = t.dragDirection || ["up", "down", "left", "right"], this.tapGesture = new Di({
      name: `${this.name}-tap`,
      maxDistance: this.tapMaxDistance,
      maxPointers: this.maxPointers,
      pointerMode: this.pointerMode,
      requiredKeys: this.requiredKeys,
      preventIf: this.preventIf,
      pointerOptions: structuredClone(this.pointerOptions)
    }), this.panGesture = new Qn({
      name: `${this.name}-pan`,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      threshold: this.dragThreshold,
      direction: this.dragDirection,
      pointerMode: this.pointerMode,
      requiredKeys: this.requiredKeys,
      preventIf: this.preventIf,
      pointerOptions: structuredClone(this.pointerOptions)
    });
  }
  clone(t) {
    return new Zc(A({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      tapMaxDistance: this.tapMaxDistance,
      dragTimeout: this.dragTimeout,
      dragThreshold: this.dragThreshold,
      dragDirection: [...this.dragDirection],
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions)
    }, t));
  }
  init(t, r, i, o) {
    super.init(t, r, i, o), this.tapGesture.init(t, r, i, o), this.panGesture.init(t, r, i, o), this.element.addEventListener(this.tapGesture.name, this.tapHandler), this.element.addEventListener(`${this.panGesture.name}Start`, this.dragStartHandler), this.element.addEventListener(this.panGesture.name, this.dragMoveHandler), this.element.addEventListener(`${this.panGesture.name}End`, this.dragEndHandler), this.element.addEventListener(`${this.panGesture.name}Cancel`, this.dragEndHandler);
  }
  destroy() {
    this.resetState(), this.tapGesture.destroy(), this.panGesture.destroy(), this.element.removeEventListener(this.tapGesture.name, this.tapHandler), this.element.removeEventListener(`${this.panGesture.name}Start`, this.dragStartHandler), this.element.removeEventListener(this.panGesture.name, this.dragMoveHandler), this.element.removeEventListener(`${this.panGesture.name}End`, this.dragEndHandler), this.element.removeEventListener(`${this.panGesture.name}Cancel`, this.dragEndHandler), super.destroy();
  }
  updateOptions(t) {
    super.updateOptions(t), this.tapMaxDistance = t.tapMaxDistance ?? this.tapMaxDistance, this.dragTimeout = t.dragTimeout ?? this.dragTimeout, this.dragThreshold = t.dragThreshold ?? this.dragThreshold, this.dragDirection = t.dragDirection || this.dragDirection, this.element.dispatchEvent(new CustomEvent(`${this.panGesture.name}ChangeOptions`, {
      detail: {
        minPointers: this.minPointers,
        maxPointers: this.maxPointers,
        threshold: this.dragThreshold,
        direction: this.dragDirection,
        pointerMode: this.pointerMode,
        requiredKeys: this.requiredKeys,
        preventIf: this.preventIf,
        pointerOptions: structuredClone(this.pointerOptions)
      }
    })), this.element.dispatchEvent(new CustomEvent(`${this.tapGesture.name}ChangeOptions`, {
      detail: {
        maxDistance: this.tapMaxDistance,
        maxPointers: this.maxPointers,
        pointerMode: this.pointerMode,
        requiredKeys: this.requiredKeys,
        preventIf: this.preventIf,
        pointerOptions: structuredClone(this.pointerOptions)
      }
    }));
  }
  resetState() {
    this.state.dragTimeoutId !== null && clearTimeout(this.state.dragTimeoutId), this.restoreTouchAction(), this.isActive = !1, this.state = {
      phase: "waitingForTap",
      dragTimeoutId: null
    };
  }
  /**
   * This can be empty because the TapAndDragGesture relies on TapGesture and PanGesture to handle pointer events
   * The internal gestures will manage their own state and events, while this class coordinates between them
   */
  handlePointerEvent() {
  }
  tapHandler = () => {
    this.state.phase === "waitingForTap" && (this.state.phase = "tapDetected", this.setTouchAction(), this.state.dragTimeoutId = setTimeout(() => {
      this.resetState();
    }, this.dragTimeout));
  };
  dragStartHandler = (t) => {
    this.state.phase === "tapDetected" && (this.state.dragTimeoutId !== null && (clearTimeout(this.state.dragTimeoutId), this.state.dragTimeoutId = null), this.restoreTouchAction(), this.state.phase = "dragging", this.isActive = !0, this.element.dispatchEvent(new CustomEvent(Pt(this.name, t.detail.phase), t)));
  };
  dragMoveHandler = (t) => {
    this.state.phase === "dragging" && this.element.dispatchEvent(new CustomEvent(Pt(this.name, t.detail.phase), t));
  };
  dragEndHandler = (t) => {
    this.state.phase === "dragging" && (this.resetState(), this.element.dispatchEvent(new CustomEvent(Pt(this.name, t.detail.phase), t)));
  };
  setTouchAction() {
    this.element.addEventListener("touchstart", vn, {
      passive: !1
    });
  }
  restoreTouchAction() {
    this.element.removeEventListener("touchstart", vn);
  }
}
class fs extends Sm {
  state = {
    totalDeltaX: 0,
    totalDeltaY: 0,
    totalDeltaZ: 0
  };
  /**
   * Scaling factor for delta values
   * Values > 1 increase sensitivity, values < 1 decrease sensitivity
   */
  /**
   * Maximum value for totalDelta values
   * Limits how large the accumulated wheel deltas can be
   */
  /**
   * Minimum value for totalDelta values
   * Sets a lower bound for accumulated wheel deltas
   */
  /**
   * Initial value for totalDelta values
   * Sets the starting value for delta trackers
   */
  /**
   * Whether to invert the direction of delta changes
   * When true, reverses the sign of deltaX, deltaY, and deltaZ values
   */
  constructor(t) {
    super(t), this.sensitivity = t.sensitivity ?? 1, this.max = t.max ?? Number.MAX_SAFE_INTEGER, this.min = t.min ?? Number.MIN_SAFE_INTEGER, this.initialDelta = t.initialDelta ?? 0, this.invert = t.invert ?? !1, this.state.totalDeltaX = this.initialDelta, this.state.totalDeltaY = this.initialDelta, this.state.totalDeltaZ = this.initialDelta;
  }
  clone(t) {
    return new fs(A({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      sensitivity: this.sensitivity,
      max: this.max,
      min: this.min,
      initialDelta: this.initialDelta,
      invert: this.invert,
      requiredKeys: [...this.requiredKeys],
      preventIf: [...this.preventIf]
    }, t));
  }
  init(t, r, i, o) {
    super.init(t, r, i, o), this.element.addEventListener("wheel", this.handleWheelEvent);
  }
  destroy() {
    this.element.removeEventListener("wheel", this.handleWheelEvent), this.resetState(), super.destroy();
  }
  resetState() {
    this.isActive = !1, this.state = {
      totalDeltaX: 0,
      totalDeltaY: 0,
      totalDeltaZ: 0
    };
  }
  updateOptions(t) {
    super.updateOptions(t), this.sensitivity = t.sensitivity ?? this.sensitivity, this.max = t.max ?? this.max, this.min = t.min ?? this.min, this.initialDelta = t.initialDelta ?? this.initialDelta, this.invert = t.invert ?? this.invert;
  }
  /**
   * Handle wheel events for a specific element
   * @param element The element that received the wheel event
   * @param event The original wheel event
   */
  handleWheelEvent = (t) => {
    if (this.shouldPreventGesture(this.element, "mouse"))
      return;
    const r = this.pointerManager.getPointers() || /* @__PURE__ */ new Map(), i = Array.from(r.values());
    this.state.totalDeltaX += t.deltaX * this.sensitivity * (this.invert ? -1 : 1), this.state.totalDeltaY += t.deltaY * this.sensitivity * (this.invert ? -1 : 1), this.state.totalDeltaZ += t.deltaZ * this.sensitivity * (this.invert ? -1 : 1), ["totalDeltaX", "totalDeltaY", "totalDeltaZ"].forEach((o) => {
      this.state[o] < this.min && (this.state[o] = this.min), this.state[o] > this.max && (this.state[o] = this.max);
    }), this.emitWheelEvent(i, t);
  };
  /**
   * Emit wheel-specific events
   * @param pointers The current pointers on the element
   * @param event The original wheel event
   */
  emitWheelEvent(t, r) {
    const i = t.length > 0 ? un(t) : {
      x: r.clientX,
      y: r.clientY
    }, o = this.gesturesRegistry.getActiveGestures(this.element), s = {
      gestureName: this.name,
      centroid: i,
      target: r.target,
      srcEvent: r,
      phase: "ongoing",
      // Wheel events are always in "ongoing" state
      pointers: t,
      timeStamp: r.timeStamp,
      deltaX: r.deltaX * this.sensitivity * (this.invert ? -1 : 1),
      deltaY: r.deltaY * this.sensitivity * (this.invert ? -1 : 1),
      deltaZ: r.deltaZ * this.sensitivity * (this.invert ? -1 : 1),
      deltaMode: r.deltaMode,
      totalDeltaX: this.state.totalDeltaX,
      totalDeltaY: this.state.totalDeltaY,
      totalDeltaZ: this.state.totalDeltaZ,
      activeGestures: o,
      customData: this.customData
    };
    this.preventDefault && r.preventDefault(), this.stopPropagation && r.stopPropagation();
    const a = Pt(this.name, "ongoing"), l = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: s
    });
    this.element.dispatchEvent(l);
  }
}
const kr = (e) => e.preventDefault(), Jc = ({
  svgRef: e
}) => {
  const t = $.useRef(null);
  $.useEffect(() => {
    const o = e.current;
    t.current || (t.current = new IS({
      gestures: [
        // We separate the zoom gestures from the gestures that are not zoom related
        // This allows us to configure the zoom gestures based on the zoom configuration.
        new Qn({
          name: "pan",
          threshold: 0,
          maxPointers: 1
        }),
        new Yc({
          name: "move",
          preventIf: ["pan", "zoomPinch", "zoomPan"]
        }),
        new Di({
          name: "tap",
          preventIf: ["pan", "zoomPinch", "zoomPan"]
        }),
        new ia({
          name: "quickPress",
          duration: 50
        }),
        new Qn({
          name: "brush",
          threshold: 0,
          maxPointers: 1
        }),
        // Zoom gestures
        new Qn({
          name: "zoomPan",
          threshold: 0,
          preventIf: ["zoomTapAndDrag", "zoomPressAndDrag"]
        }),
        new Xc({
          name: "zoomPinch",
          threshold: 5
        }),
        new fs({
          name: "zoomTurnWheel",
          sensitivity: 0.01,
          initialDelta: 1
        }),
        new fs({
          name: "panTurnWheel",
          sensitivity: 0.5
        }),
        new Zc({
          name: "zoomTapAndDrag",
          dragThreshold: 10
        }),
        new Kc({
          name: "zoomPressAndDrag",
          dragThreshold: 10,
          preventIf: ["zoomPinch"]
        }),
        new Di({
          name: "zoomDoubleTapReset",
          taps: 2
        })
      ]
    }));
    const s = t.current;
    if (!(!o || !s))
      return s.registerElement(["pan", "move", "zoomPinch", "zoomPan", "zoomTurnWheel", "panTurnWheel", "tap", "quickPress", "zoomTapAndDrag", "zoomPressAndDrag", "zoomDoubleTapReset", "brush"], o), () => {
        s.unregisterAllGestures(o);
      };
  }, [e, t]);
  const r = $.useCallback((o, s, a) => {
    const l = e.current;
    return l?.addEventListener(o, s, a), {
      cleanup: () => l?.removeEventListener(o, s)
    };
  }, [e]), i = $.useCallback((o, s) => {
    const a = e.current, l = t.current;
    !l || !a || l.setGestureOptions(o, a, s ?? {});
  }, [e, t]);
  return $.useEffect(() => {
    const o = e.current;
    return o?.addEventListener("gesturestart", kr), o?.addEventListener("gesturechange", kr), o?.addEventListener("gestureend", kr), () => {
      o?.removeEventListener("gesturestart", kr), o?.removeEventListener("gesturechange", kr), o?.removeEventListener("gestureend", kr);
    };
  }, [e]), {
    instance: {
      addInteractionListener: r,
      updateZoomInteractionListeners: i
    }
  };
};
Jc.params = {};
Jc.getInitialState = () => ({});
const LS = [Gc, Hc, ta, ra, Jc, ea], NS = ["apiRef"], FS = (e) => {
  let {
    plugins: t
  } = e, r = oe(e.props, NS);
  const i = {};
  t.forEach((a) => {
    Object.assign(i, a.params);
  });
  const o = {};
  return Object.keys(r).forEach((a) => {
    const l = r[a];
    i[a] && (o[a] = l);
  }), t.reduce((a, l) => l.getDefaultizedParams ? l.getDefaultizedParams({
    params: a
  }) : a, o);
};
let wf = 0;
function qS(e, t, r) {
  const i = Qi(), o = $.useMemo(() => [...LS, ...e], [e]), s = FS({
    plugins: o,
    props: t
  });
  s.id = s.id ?? i;
  const l = $.useRef({}).current, c = BS(t.apiRef), u = $.useRef(null), d = $.useRef(null), f = $.useRef(null);
  if (f.current == null) {
    wf += 1;
    const g = {
      cacheKey: {
        id: wf
      }
    };
    o.forEach((m) => {
      m.getInitialState && Object.assign(g, m.getInitialState(s, g, r));
    }), f.current = new Vc(g);
  }
  const p = (g) => {
    const m = g({
      instance: l,
      params: s,
      plugins: o,
      store: f.current,
      svgRef: d,
      chartRootRef: u,
      seriesConfig: r
    });
    m.publicAPI && Object.assign(c.current, m.publicAPI), m.instance && Object.assign(l, m.instance);
  };
  return o.forEach(p), {
    contextValue: $.useMemo(() => ({
      store: f.current,
      publicAPI: c.current,
      instance: l,
      svgRef: d,
      chartRootRef: u
    }), [l, c])
  };
}
function zS(e) {
  return e.current == null && (e.current = {}), e;
}
function BS(e) {
  const t = $.useRef({});
  return e ? zS(e) : t;
}
const Qc = /* @__PURE__ */ $.createContext(null);
process.env.NODE_ENV !== "production" && (Qc.displayName = "ChartContext");
const Cf = /* @__PURE__ */ new Set();
function Mt(e, t = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const r = Array.isArray(e) ? e.join(`
`) : e;
  Cf.has(r) || (Cf.add(r), t === "error" ? console.error(r) : console.warn(r));
}
function VS(e) {
  const {
    componentName: t,
    propName: r,
    controlled: i,
    defaultValue: o,
    warningPrefix: s = "MUI X"
  } = e, [{
    initialDefaultValue: a,
    isControlled: l
  }] = $.useState({
    initialDefaultValue: o,
    isControlled: i !== void 0
  });
  l !== (i !== void 0) && Mt([`${s}: A component is changing the ${l ? "" : "un"}controlled ${r} state of ${t} to be ${l ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"], "error"), JSON.stringify(a) !== JSON.stringify(o) && Mt([`${s}: A component is changing the default ${r} state of an uncontrolled ${t} after being initialized. To suppress this warning opt to use a controlled ${t}.`], "error");
}
const wm = process.env.NODE_ENV === "production" ? () => {
} : VS, Cm = 4, Em = 20 + 2 * Cm, US = 40 + 2 * Cm, HS = "hover", GS = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 5
}, $o = {
  minStart: 0,
  maxEnd: 100,
  step: 5,
  minSpan: 10,
  maxSpan: 100,
  panning: !0,
  filterMode: "keep",
  reverse: !1,
  slider: {
    enabled: !1,
    preview: !1,
    size: Em,
    showTooltip: HS
  }
}, eu = (e, t, r, i) => {
  if (e)
    return e === !0 ? A({
      axisId: t,
      axisDirection: r
    }, $o, {
      reverse: i ?? !1
    }) : A({
      axisId: t,
      axisDirection: r
    }, $o, {
      reverse: i ?? !1
    }, e, {
      slider: A({}, $o.slider, {
        size: e.slider?.preview ?? $o.slider.preview ? US : Em
      }, e.slider)
    });
};
function km(e, t) {
  const r = {
    top: 0,
    bottom: 0,
    none: 0
  };
  return (e && e.length > 0 ? e : [{
    id: $n,
    scaleType: "linear"
  }]).map((s, a) => {
    const l = s.dataKey, c = a === 0 ? "bottom" : "none", u = s.position ?? c, d = aS + (s.label ? ym : 0), f = s.id ?? `defaultized-x-axis-${a}`, p = A({
      offset: r[u]
    }, s, {
      id: f,
      position: u,
      height: s.height ?? d,
      zoom: eu(s.zoom, f, "x", s.reverse)
    });
    if (u !== "none" && (r[u] += p.height, p.zoom?.slider.enabled && (r[u] += p.zoom.slider.size)), l === void 0 || s.data !== void 0)
      return p;
    if (t === void 0)
      throw new Error("MUI X Charts: x-axis uses `dataKey` but no `dataset` is provided.");
    return A({}, p, {
      data: t.map((h) => h[l])
    });
  });
}
function Rm(e, t) {
  const r = {
    right: 0,
    left: 0,
    none: 0
  };
  return (e && e.length > 0 ? e : [{
    id: Uc,
    scaleType: "linear"
  }]).map((s, a) => {
    const l = s.dataKey, c = a === 0 ? "left" : "none", u = s.position ?? c, d = sS + (s.label ? ym : 0), f = s.id ?? `defaultized-y-axis-${a}`, p = A({
      offset: r[u]
    }, s, {
      id: f,
      position: u,
      width: s.width ?? d,
      zoom: eu(s.zoom, f, "y", s.reverse)
    });
    if (u !== "none" && (r[u] += p.width, p.zoom?.slider.enabled && (r[u] += p.zoom.slider.size)), l === void 0 || s.data !== void 0)
      return p;
    if (t === void 0)
      throw new Error("MUI X Charts: y-axis uses `dataKey` but no `dataset` is provided.");
    return A({}, p, {
      data: t.map((h) => h[l])
    });
  });
}
function WS(e, t) {
  return function(i, o) {
    if (o.location === "tick") {
      const s = o.scale.domain();
      return s[0] === s[1] ? o.scale.tickFormat(1)(i) : o.scale.tickFormat(e)(i);
    }
    return o.location === "zoom-slider-tooltip" ? t.tickFormat(2)(i) : `${i}`;
  };
}
function dn(e) {
  return e.scaleType === "band";
}
function Dn(e) {
  return e.scaleType === "point";
}
function YS(e) {
  return e.scaleType !== "point" && e.scaleType !== "band";
}
function XS(e) {
  return e.scaleType === "symlog";
}
function Am(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function tu(e) {
  let t = e, r = e;
  e.length === 1 && (t = (a, l) => e(a) - l, r = KS(e));
  function i(a, l, c, u) {
    for (c == null && (c = 0), u == null && (u = a.length); c < u; ) {
      const d = c + u >>> 1;
      r(a[d], l) < 0 ? c = d + 1 : u = d;
    }
    return c;
  }
  function o(a, l, c, u) {
    for (c == null && (c = 0), u == null && (u = a.length); c < u; ) {
      const d = c + u >>> 1;
      r(a[d], l) > 0 ? u = d : c = d + 1;
    }
    return c;
  }
  function s(a, l, c, u) {
    c == null && (c = 0), u == null && (u = a.length);
    const d = i(a, l, c, u - 1);
    return d > c && t(a[d - 1], l) > -t(a[d], l) ? d - 1 : d;
  }
  return { left: i, center: s, right: o };
}
function KS(e) {
  return (t, r) => Am(e(t), r);
}
function ZS(e) {
  return e === null ? NaN : +e;
}
const JS = tu(Am), Pm = JS.right;
tu(ZS).center;
class ps extends Map {
  constructor(t, r = tw) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [i, o] of t) this.set(i, o);
  }
  get(t) {
    return super.get(Ef(this, t));
  }
  has(t) {
    return super.has(Ef(this, t));
  }
  set(t, r) {
    return super.set(QS(this, t), r);
  }
  delete(t) {
    return super.delete(ew(this, t));
  }
}
function Ef({ _intern: e, _key: t }, r) {
  const i = t(r);
  return e.has(i) ? e.get(i) : r;
}
function QS({ _intern: e, _key: t }, r) {
  const i = t(r);
  return e.has(i) ? e.get(i) : (e.set(i, r), r);
}
function ew({ _intern: e, _key: t }, r) {
  const i = t(r);
  return e.has(i) && (r = e.get(r), e.delete(i)), r;
}
function tw(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
var Vl = Math.sqrt(50), Ul = Math.sqrt(10), Hl = Math.sqrt(2);
function Gl(e, t, r) {
  var i, o = -1, s, a, l;
  if (t = +t, e = +e, r = +r, e === t && r > 0) return [e];
  if ((i = t < e) && (s = e, e = t, t = s), (l = Im(e, t, r)) === 0 || !isFinite(l)) return [];
  if (l > 0) {
    let c = Math.round(e / l), u = Math.round(t / l);
    for (c * l < e && ++c, u * l > t && --u, a = new Array(s = u - c + 1); ++o < s; ) a[o] = (c + o) * l;
  } else {
    l = -l;
    let c = Math.round(e * l), u = Math.round(t * l);
    for (c / l < e && ++c, u / l > t && --u, a = new Array(s = u - c + 1); ++o < s; ) a[o] = (c + o) / l;
  }
  return i && a.reverse(), a;
}
function Im(e, t, r) {
  var i = (t - e) / Math.max(0, r), o = Math.floor(Math.log(i) / Math.LN10), s = i / Math.pow(10, o);
  return o >= 0 ? (s >= Vl ? 10 : s >= Ul ? 5 : s >= Hl ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (s >= Vl ? 10 : s >= Ul ? 5 : s >= Hl ? 2 : 1);
}
function Wl(e, t, r) {
  var i = Math.abs(t - e) / Math.max(0, r), o = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)), s = i / o;
  return s >= Vl ? o *= 10 : s >= Ul ? o *= 5 : s >= Hl && (o *= 2), t < e ? -o : o;
}
function nw(e, t, r) {
  e = +e, t = +t, r = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +r;
  for (var i = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, s = new Array(o); ++i < o; )
    s[i] = e + i * r;
  return s;
}
function Ln(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function rw(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const kf = Symbol("implicit");
function Yl() {
  var e = new ps(), t = [], r = [], i = kf;
  function o(s) {
    let a = e.get(s);
    if (a === void 0) {
      if (i !== kf) return i;
      e.set(s, a = t.push(s) - 1);
    }
    return r[a % r.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new ps();
    for (const a of s)
      e.has(a) || e.set(a, t.push(a) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (r = Array.from(s), o) : r.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (i = s, o) : i;
  }, o.copy = function() {
    return Yl(t, r).unknown(i);
  }, Ln.apply(o, arguments), o;
}
function nu(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Mm(e, t) {
  var r = Object.create(e.prototype);
  for (var i in t) r[i] = t[i];
  return r;
}
function to() {
}
var Li = 0.7, hs = 1 / Li, Nr = "\\s*([+-]?\\d+)\\s*", Ni = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", iw = /^#([0-9a-f]{3,8})$/, ow = new RegExp(`^rgb\\(${Nr},${Nr},${Nr}\\)$`), sw = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), aw = new RegExp(`^rgba\\(${Nr},${Nr},${Nr},${Ni}\\)$`), lw = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${Ni}\\)$`), cw = new RegExp(`^hsl\\(${Ni},${Wt},${Wt}\\)$`), uw = new RegExp(`^hsla\\(${Ni},${Wt},${Wt},${Ni}\\)$`), Rf = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
nu(to, Fi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Af,
  // Deprecated! Use color.formatHex.
  formatHex: Af,
  formatHex8: dw,
  formatHsl: fw,
  formatRgb: Pf,
  toString: Pf
});
function Af() {
  return this.rgb().formatHex();
}
function dw() {
  return this.rgb().formatHex8();
}
function fw() {
  return _m(this).formatHsl();
}
function Pf() {
  return this.rgb().formatRgb();
}
function Fi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = iw.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? If(t) : r === 3 ? new ct(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Do(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Do(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ow.exec(e)) ? new ct(t[1], t[2], t[3], 1) : (t = sw.exec(e)) ? new ct(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = aw.exec(e)) ? Do(t[1], t[2], t[3], t[4]) : (t = lw.exec(e)) ? Do(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = cw.exec(e)) ? jf(t[1], t[2] / 100, t[3] / 100, 1) : (t = uw.exec(e)) ? jf(t[1], t[2] / 100, t[3] / 100, t[4]) : Rf.hasOwnProperty(e) ? If(Rf[e]) : e === "transparent" ? new ct(NaN, NaN, NaN, 0) : null;
}
function If(e) {
  return new ct(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Do(e, t, r, i) {
  return i <= 0 && (e = t = r = NaN), new ct(e, t, r, i);
}
function pw(e) {
  return e instanceof to || (e = Fi(e)), e ? (e = e.rgb(), new ct(e.r, e.g, e.b, e.opacity)) : new ct();
}
function Xl(e, t, r, i) {
  return arguments.length === 1 ? pw(e) : new ct(e, t, r, i ?? 1);
}
function ct(e, t, r, i) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +i;
}
nu(ct, Xl, Mm(to, {
  brighter(e) {
    return e = e == null ? hs : Math.pow(hs, e), new ct(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Li : Math.pow(Li, e), new ct(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ct(er(this.r), er(this.g), er(this.b), ms(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Mf,
  // Deprecated! Use color.formatHex.
  formatHex: Mf,
  formatHex8: hw,
  formatRgb: _f,
  toString: _f
}));
function Mf() {
  return `#${Gn(this.r)}${Gn(this.g)}${Gn(this.b)}`;
}
function hw() {
  return `#${Gn(this.r)}${Gn(this.g)}${Gn(this.b)}${Gn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _f() {
  const e = ms(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${er(this.r)}, ${er(this.g)}, ${er(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ms(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function er(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Gn(e) {
  return e = er(e), (e < 16 ? "0" : "") + e.toString(16);
}
function jf(e, t, r, i) {
  return i <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Lt(e, t, r, i);
}
function _m(e) {
  if (e instanceof Lt) return new Lt(e.h, e.s, e.l, e.opacity);
  if (e instanceof to || (e = Fi(e)), !e) return new Lt();
  if (e instanceof Lt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, i = e.b / 255, o = Math.min(t, r, i), s = Math.max(t, r, i), a = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? a = (r - i) / l + (r < i) * 6 : r === s ? a = (i - t) / l + 2 : a = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, a *= 60) : l = c > 0 && c < 1 ? 0 : a, new Lt(a, l, c, e.opacity);
}
function mw(e, t, r, i) {
  return arguments.length === 1 ? _m(e) : new Lt(e, t, r, i ?? 1);
}
function Lt(e, t, r, i) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +i;
}
nu(Lt, mw, Mm(to, {
  brighter(e) {
    return e = e == null ? hs : Math.pow(hs, e), new Lt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Li : Math.pow(Li, e), new Lt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - i;
    return new ct(
      sl(e >= 240 ? e - 240 : e + 120, o, i),
      sl(e, o, i),
      sl(e < 120 ? e + 240 : e - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new Lt($f(this.h), Lo(this.s), Lo(this.l), ms(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ms(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${$f(this.h)}, ${Lo(this.s) * 100}%, ${Lo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function $f(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Lo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function sl(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ru = (e) => () => e;
function gw(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function yw(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(i) {
    return Math.pow(e + i * t, r);
  };
}
function bw(e) {
  return (e = +e) == 1 ? jm : function(t, r) {
    return r - t ? yw(t, r, e) : ru(isNaN(t) ? r : t);
  };
}
function jm(e, t) {
  var r = t - e;
  return r ? gw(e, r) : ru(isNaN(e) ? t : e);
}
const Df = (function e(t) {
  var r = bw(t);
  function i(o, s) {
    var a = r((o = Xl(o)).r, (s = Xl(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), u = jm(o.opacity, s.opacity);
    return function(d) {
      return o.r = a(d), o.g = l(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return i.gamma = e, i;
})(1);
function xw(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, i = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) i[o] = e[o] * (1 - s) + t[o] * s;
    return i;
  };
}
function vw(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ow(e, t) {
  var r = t ? t.length : 0, i = e ? Math.min(r, e.length) : 0, o = new Array(i), s = new Array(r), a;
  for (a = 0; a < i; ++a) o[a] = oa(e[a], t[a]);
  for (; a < r; ++a) s[a] = t[a];
  return function(l) {
    for (a = 0; a < i; ++a) s[a] = o[a](l);
    return s;
  };
}
function iu(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(i) {
    return r.setTime(e * (1 - i) + t * i), r;
  };
}
function me(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Tw(e, t) {
  var r = {}, i = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = oa(e[o], t[o]) : i[o] = t[o];
  return function(s) {
    for (o in r) i[o] = r[o](s);
    return i;
  };
}
var Kl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, al = new RegExp(Kl.source, "g");
function Sw(e) {
  return function() {
    return e;
  };
}
function ww(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ou(e, t) {
  var r = Kl.lastIndex = al.lastIndex = 0, i, o, s, a = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (i = Kl.exec(e)) && (o = al.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[a] ? l[a] += s : l[++a] = s), (i = i[0]) === (o = o[0]) ? l[a] ? l[a] += o : l[++a] = o : (l[++a] = null, c.push({ i: a, x: me(i, o) })), r = al.lastIndex;
  return r < t.length && (s = t.slice(r), l[a] ? l[a] += s : l[++a] = s), l.length < 2 ? c[0] ? ww(c[0].x) : Sw(t) : (t = c.length, function(u) {
    for (var d = 0, f; d < t; ++d) l[(f = c[d]).i] = f.x(u);
    return l.join("");
  });
}
function oa(e, t) {
  var r = typeof t, i;
  return t == null || r === "boolean" ? ru(t) : (r === "number" ? me : r === "string" ? (i = Fi(t)) ? (t = i, Df) : ou : t instanceof Fi ? Df : t instanceof Date ? iu : vw(t) ? xw : Array.isArray(t) ? Ow : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Tw : me)(e, t);
}
function $m(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Cw(e) {
  return function() {
    return e;
  };
}
function Ew(e) {
  return +e;
}
var Lf = [0, 1];
function Rt(e) {
  return e;
}
function Zl(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Cw(isNaN(t) ? NaN : 0.5);
}
function kw(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(i) {
    return Math.max(e, Math.min(t, i));
  };
}
function Rw(e, t, r) {
  var i = e[0], o = e[1], s = t[0], a = t[1];
  return o < i ? (i = Zl(o, i), s = r(a, s)) : (i = Zl(i, o), s = r(s, a)), function(l) {
    return s(i(l));
  };
}
function Aw(e, t, r) {
  var i = Math.min(e.length, t.length) - 1, o = new Array(i), s = new Array(i), a = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++a < i; )
    o[a] = Zl(e[a], e[a + 1]), s[a] = r(t[a], t[a + 1]);
  return function(l) {
    var c = Pm(e, l, 1, i) - 1;
    return s[c](o[c](l));
  };
}
function no(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function sa() {
  var e = Lf, t = Lf, r = oa, i, o, s, a = Rt, l, c, u;
  function d() {
    var p = Math.min(e.length, t.length);
    return a !== Rt && (a = kw(e[0], e[p - 1])), l = p > 2 ? Aw : Rw, c = u = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? s : (c || (c = l(e.map(i), t, r)))(i(a(p)));
  }
  return f.invert = function(p) {
    return a(o((u || (u = l(t, e.map(i), me)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Ew), d()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), r = $m, d();
  }, f.clamp = function(p) {
    return arguments.length ? (a = p ? !0 : Rt, d()) : a !== Rt;
  }, f.interpolate = function(p) {
    return arguments.length ? (r = p, d()) : r;
  }, f.unknown = function(p) {
    return arguments.length ? (s = p, f) : s;
  }, function(p, h) {
    return i = p, o = h, d();
  };
}
function Dm() {
  return sa()(Rt, Rt);
}
function Pw(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function gs(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, i = e.slice(0, r);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(r + 1)
  ];
}
function Br(e) {
  return e = gs(Math.abs(e)), e ? e[1] : NaN;
}
function Iw(e, t) {
  return function(r, i) {
    for (var o = r.length, s = [], a = 0, l = e[0], c = 0; o > 0 && l > 0 && (c + l + 1 > i && (l = Math.max(1, i - c)), s.push(r.substring(o -= l, o + l)), !((c += l + 1) > i)); )
      l = e[a = (a + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Mw(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var _w = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function qi(e) {
  if (!(t = _w.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new su({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
qi.prototype = su.prototype;
function su(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
su.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function jw(e) {
  e: for (var t = e.length, r = 1, i = -1, o; r < t; ++r)
    switch (e[r]) {
      case ".":
        i = o = r;
        break;
      case "0":
        i === 0 && (i = r), o = r;
        break;
      default:
        if (!+e[r]) break e;
        i > 0 && (i = 0);
        break;
    }
  return i > 0 ? e.slice(0, i) + e.slice(o + 1) : e;
}
var Lm;
function $w(e, t) {
  var r = gs(e, t);
  if (!r) return e + "";
  var i = r[0], o = r[1], s = o - (Lm = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, a = i.length;
  return s === a ? i : s > a ? i + new Array(s - a + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + gs(e, Math.max(0, t + s - 1))[0];
}
function Nf(e, t) {
  var r = gs(e, t);
  if (!r) return e + "";
  var i = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + i : i.length > o + 1 ? i.slice(0, o + 1) + "." + i.slice(o + 1) : i + new Array(o - i.length + 2).join("0");
}
const Ff = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Pw,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Nf(e * 100, t),
  r: Nf,
  s: $w,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function qf(e) {
  return e;
}
var zf = Array.prototype.map, Bf = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Dw(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? qf : Iw(zf.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? qf : Mw(zf.call(e.numerals, String)), a = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = qi(f);
    var p = f.fill, h = f.align, g = f.sign, m = f.symbol, y = f.zero, b = f.width, S = f.comma, C = f.precision, v = f.trim, O = f.type;
    O === "n" ? (S = !0, O = "g") : Ff[O] || (C === void 0 && (C = 12), v = !0, O = "g"), (y || p === "0" && h === "=") && (y = !0, p = "0", h = "=");
    var w = m === "$" ? r : m === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "", E = m === "$" ? i : /[%p]/.test(O) ? a : "", R = Ff[O], I = /[defgprs%]/.test(O);
    C = C === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function j(_) {
      var T = w, M = E, P, N, L;
      if (O === "c")
        M = R(_) + M, _ = "";
      else {
        _ = +_;
        var z = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? c : R(Math.abs(_), C), v && (_ = jw(_)), z && +_ == 0 && g !== "+" && (z = !1), T = (z ? g === "(" ? g : l : g === "-" || g === "(" ? "" : g) + T, M = (O === "s" ? Bf[8 + Lm / 3] : "") + M + (z && g === "(" ? ")" : ""), I) {
          for (P = -1, N = _.length; ++P < N; )
            if (L = _.charCodeAt(P), 48 > L || L > 57) {
              M = (L === 46 ? o + _.slice(P + 1) : _.slice(P)) + M, _ = _.slice(0, P);
              break;
            }
        }
      }
      S && !y && (_ = t(_, 1 / 0));
      var H = T.length + _.length + M.length, Z = H < b ? new Array(b - H + 1).join(p) : "";
      switch (S && y && (_ = t(Z + _, Z.length ? b - M.length : 1 / 0), Z = ""), h) {
        case "<":
          _ = T + _ + M + Z;
          break;
        case "=":
          _ = T + Z + _ + M;
          break;
        case "^":
          _ = Z.slice(0, H = Z.length >> 1) + T + _ + M + Z.slice(H);
          break;
        default:
          _ = Z + T + _ + M;
          break;
      }
      return s(_);
    }
    return j.toString = function() {
      return f + "";
    }, j;
  }
  function d(f, p) {
    var h = u((f = qi(f), f.type = "f", f)), g = Math.max(-8, Math.min(8, Math.floor(Br(p) / 3))) * 3, m = Math.pow(10, -g), y = Bf[8 + g / 3];
    return function(b) {
      return h(m * b) + y;
    };
  }
  return {
    format: u,
    formatPrefix: d
  };
}
var No, au, Nm;
Lw({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Lw(e) {
  return No = Dw(e), au = No.format, Nm = No.formatPrefix, No;
}
function Nw(e) {
  return Math.max(0, -Br(Math.abs(e)));
}
function Fw(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Br(t) / 3))) * 3 - Br(Math.abs(e)));
}
function qw(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Br(t) - Br(e)) + 1;
}
function zw(e, t, r, i) {
  var o = Wl(e, t, r), s;
  switch (i = qi(i ?? ",f"), i.type) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      return i.precision == null && !isNaN(s = Fw(o, a)) && (i.precision = s), Nm(i, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = qw(o, Math.max(Math.abs(e), Math.abs(t)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = Nw(o)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return au(i);
}
function aa(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var i = t();
    return Gl(i[0], i[i.length - 1], r ?? 10);
  }, e.tickFormat = function(r, i) {
    var o = t();
    return zw(o[0], o[o.length - 1], r ?? 10, i);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var i = t(), o = 0, s = i.length - 1, a = i[o], l = i[s], c, u, d = 10;
    for (l < a && (u = a, a = l, l = u, u = o, o = s, s = u); d-- > 0; ) {
      if (u = Im(a, l, r), u === c)
        return i[o] = a, i[s] = l, t(i);
      if (u > 0)
        a = Math.floor(a / u) * u, l = Math.ceil(l / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, l = Math.floor(l * u) / u;
      else
        break;
      c = u;
    }
    return e;
  }, e;
}
function lu() {
  var e = Dm();
  return e.copy = function() {
    return no(e, lu());
  }, Ln.apply(e, arguments), aa(e);
}
function Fm(e, t) {
  e = e.slice();
  var r = 0, i = e.length - 1, o = e[r], s = e[i], a;
  return s < o && (a = r, r = i, i = a, a = o, o = s, s = a), e[r] = t.floor(o), e[i] = t.ceil(s), e;
}
function Vf(e) {
  return Math.log(e);
}
function Uf(e) {
  return Math.exp(e);
}
function Bw(e) {
  return -Math.log(-e);
}
function Vw(e) {
  return -Math.exp(-e);
}
function Uw(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Hw(e) {
  return e === 10 ? Uw : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Gw(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Hf(e) {
  return (t, r) => -e(-t, r);
}
function Ww(e) {
  const t = e(Vf, Uf), r = t.domain;
  let i = 10, o, s;
  function a() {
    return o = Gw(i), s = Hw(i), r()[0] < 0 ? (o = Hf(o), s = Hf(s), e(Bw, Vw)) : e(Vf, Uf), t;
  }
  return t.base = function(l) {
    return arguments.length ? (i = +l, a()) : i;
  }, t.domain = function(l) {
    return arguments.length ? (r(l), a()) : r();
  }, t.ticks = (l) => {
    const c = r();
    let u = c[0], d = c[c.length - 1];
    const f = d < u;
    f && ([u, d] = [d, u]);
    let p = o(u), h = o(d), g, m;
    const y = l == null ? 10 : +l;
    let b = [];
    if (!(i % 1) && h - p < y) {
      if (p = Math.floor(p), h = Math.ceil(h), u > 0) {
        for (; p <= h; ++p)
          for (g = 1; g < i; ++g)
            if (m = p < 0 ? g / s(-p) : g * s(p), !(m < u)) {
              if (m > d) break;
              b.push(m);
            }
      } else for (; p <= h; ++p)
        for (g = i - 1; g >= 1; --g)
          if (m = p > 0 ? g / s(-p) : g * s(p), !(m < u)) {
            if (m > d) break;
            b.push(m);
          }
      b.length * 2 < y && (b = Gl(u, d, y));
    } else
      b = Gl(p, h, Math.min(h - p, y)).map(s);
    return f ? b.reverse() : b;
  }, t.tickFormat = (l, c) => {
    if (l == null && (l = 10), c == null && (c = i === 10 ? "s" : ","), typeof c != "function" && (!(i % 1) && (c = qi(c)).precision == null && (c.trim = !0), c = au(c)), l === 1 / 0) return c;
    const u = Math.max(1, i * l / t.ticks().length);
    return (d) => {
      let f = d / s(Math.round(o(d)));
      return f * i < i - 0.5 && (f *= i), f <= u ? c(d) : "";
    };
  }, t.nice = () => r(Fm(r(), {
    floor: (l) => s(Math.floor(o(l))),
    ceil: (l) => s(Math.ceil(o(l)))
  })), t;
}
function ys() {
  const e = Ww(sa()).domain([1, 10]);
  return e.copy = () => no(e, ys()).base(e.base()), Ln.apply(e, arguments), e;
}
function Gf(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Wf(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Yw(e) {
  var t = 1, r = e(Gf(t), Wf(t));
  return r.constant = function(i) {
    return arguments.length ? e(Gf(t = +i), Wf(t)) : t;
  }, aa(r);
}
function qm() {
  var e = Yw(sa());
  return e.copy = function() {
    return no(e, qm()).constant(e.constant());
  }, Ln.apply(e, arguments);
}
function Yf(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Xw(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Kw(e) {
  return e < 0 ? -e * e : e * e;
}
function Zw(e) {
  var t = e(Rt, Rt), r = 1;
  function i() {
    return r === 1 ? e(Rt, Rt) : r === 0.5 ? e(Xw, Kw) : e(Yf(r), Yf(1 / r));
  }
  return t.exponent = function(o) {
    return arguments.length ? (r = +o, i()) : r;
  }, aa(t);
}
function cu() {
  var e = Zw(sa());
  return e.copy = function() {
    return no(e, cu()).exponent(e.exponent());
  }, Ln.apply(e, arguments), e;
}
function Jw() {
  return cu.apply(null, arguments).exponent(0.5);
}
function zm() {
  var e = [0.5], t = [0, 1], r, i = 1;
  function o(s) {
    return s != null && s <= s ? t[Pm(e, s, 0, i)] : r;
  }
  return o.domain = function(s) {
    return arguments.length ? (e = Array.from(s), i = Math.min(e.length, t.length - 1), o) : e.slice();
  }, o.range = function(s) {
    return arguments.length ? (t = Array.from(s), i = Math.min(e.length, t.length - 1), o) : t.slice();
  }, o.invertExtent = function(s) {
    var a = t.indexOf(s);
    return [e[a - 1], e[a]];
  }, o.unknown = function(s) {
    return arguments.length ? (r = s, o) : r;
  }, o.copy = function() {
    return zm().domain(e).range(t).unknown(r);
  }, Ln.apply(o, arguments);
}
const ll = /* @__PURE__ */ new Date(), cl = /* @__PURE__ */ new Date();
function qe(e, t, r, i) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const a = o(s), l = o.ceil(s);
    return s - a < l - s ? a : l;
  }, o.offset = (s, a) => (t(s = /* @__PURE__ */ new Date(+s), a == null ? 1 : Math.floor(a)), s), o.range = (s, a, l) => {
    const c = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < a) || !(l > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (u < s && s < a);
    return c;
  }, o.filter = (s) => qe((a) => {
    if (a >= a) for (; e(a), !s(a); ) a.setTime(a - 1);
  }, (a, l) => {
    if (a >= a)
      if (l < 0) for (; ++l <= 0; )
        for (; t(a, -1), !s(a); )
          ;
      else for (; --l >= 0; )
        for (; t(a, 1), !s(a); )
          ;
  }), r && (o.count = (s, a) => (ll.setTime(+s), cl.setTime(+a), e(ll), e(cl), Math.floor(r(ll, cl))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(i ? (a) => i(a) % s === 0 : (a) => o.count(0, a) % s === 0) : o)), o;
}
const bs = qe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
bs.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? qe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : bs);
bs.range;
const sn = 1e3, At = sn * 60, an = At * 60, fn = an * 24, uu = fn * 7, Xf = fn * 30, ul = fn * 365, Wn = qe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * sn);
}, (e, t) => (t - e) / sn, (e) => e.getUTCSeconds());
Wn.range;
const du = qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * sn);
}, (e, t) => {
  e.setTime(+e + t * At);
}, (e, t) => (t - e) / At, (e) => e.getMinutes());
du.range;
const fu = qe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * At);
}, (e, t) => (t - e) / At, (e) => e.getUTCMinutes());
fu.range;
const pu = qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * sn - e.getMinutes() * At);
}, (e, t) => {
  e.setTime(+e + t * an);
}, (e, t) => (t - e) / an, (e) => e.getHours());
pu.range;
const hu = qe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * an);
}, (e, t) => (t - e) / an, (e) => e.getUTCHours());
hu.range;
const ro = qe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * At) / fn,
  (e) => e.getDate() - 1
);
ro.range;
const la = qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / fn, (e) => e.getUTCDate() - 1);
la.range;
const Bm = qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / fn, (e) => Math.floor(e / fn));
Bm.range;
function dr(e) {
  return qe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * At) / uu);
}
const ca = dr(0), xs = dr(1), Qw = dr(2), eC = dr(3), Vr = dr(4), tC = dr(5), nC = dr(6);
ca.range;
xs.range;
Qw.range;
eC.range;
Vr.range;
tC.range;
nC.range;
function fr(e) {
  return qe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / uu);
}
const ua = fr(0), vs = fr(1), rC = fr(2), iC = fr(3), Ur = fr(4), oC = fr(5), sC = fr(6);
ua.range;
vs.range;
rC.range;
iC.range;
Ur.range;
oC.range;
sC.range;
const mu = qe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
mu.range;
const gu = qe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
gu.range;
const pn = qe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
pn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
pn.range;
const hn = qe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
hn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
hn.range;
function Vm(e, t, r, i, o, s) {
  const a = [
    [Wn, 1, sn],
    [Wn, 5, 5 * sn],
    [Wn, 15, 15 * sn],
    [Wn, 30, 30 * sn],
    [s, 1, At],
    [s, 5, 5 * At],
    [s, 15, 15 * At],
    [s, 30, 30 * At],
    [o, 1, an],
    [o, 3, 3 * an],
    [o, 6, 6 * an],
    [o, 12, 12 * an],
    [i, 1, fn],
    [i, 2, 2 * fn],
    [r, 1, uu],
    [t, 1, Xf],
    [t, 3, 3 * Xf],
    [e, 1, ul]
  ];
  function l(u, d, f) {
    const p = d < u;
    p && ([u, d] = [d, u]);
    const h = f && typeof f.range == "function" ? f : c(u, d, f), g = h ? h.range(u, +d + 1) : [];
    return p ? g.reverse() : g;
  }
  function c(u, d, f) {
    const p = Math.abs(d - u) / f, h = tu(([, , y]) => y).right(a, p);
    if (h === a.length) return e.every(Wl(u / ul, d / ul, f));
    if (h === 0) return bs.every(Math.max(Wl(u, d, f), 1));
    const [g, m] = a[p / a[h - 1][2] < a[h][2] / p ? h - 1 : h];
    return g.every(m);
  }
  return [l, c];
}
const [aC, lC] = Vm(hn, gu, ua, Bm, hu, fu), [cC, uC] = Vm(pn, mu, ca, ro, pu, du);
function dl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function fl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function xi(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function dC(e) {
  var t = e.dateTime, r = e.date, i = e.time, o = e.periods, s = e.days, a = e.shortDays, l = e.months, c = e.shortMonths, u = vi(o), d = Oi(o), f = vi(s), p = Oi(s), h = vi(a), g = Oi(a), m = vi(l), y = Oi(l), b = vi(c), S = Oi(c), C = {
    a: z,
    A: H,
    b: Z,
    B: F,
    c: null,
    d: tp,
    e: tp,
    f: jC,
    g: UC,
    G: GC,
    H: IC,
    I: MC,
    j: _C,
    L: Um,
    m: $C,
    M: DC,
    p: k,
    q: B,
    Q: ip,
    s: op,
    S: LC,
    u: NC,
    U: FC,
    V: qC,
    w: zC,
    W: BC,
    x: null,
    X: null,
    y: VC,
    Y: HC,
    Z: WC,
    "%": rp
  }, v = {
    a: G,
    A: W,
    b: X,
    B: J,
    c: null,
    d: np,
    e: np,
    f: ZC,
    g: aE,
    G: cE,
    H: YC,
    I: XC,
    j: KC,
    L: Gm,
    m: JC,
    M: QC,
    p: Q,
    q: te,
    Q: ip,
    s: op,
    S: eE,
    u: tE,
    U: nE,
    V: rE,
    w: iE,
    W: oE,
    x: null,
    X: null,
    y: sE,
    Y: lE,
    Z: uE,
    "%": rp
  }, O = {
    a: j,
    A: _,
    b: T,
    B: M,
    c: P,
    d: Qf,
    e: Qf,
    f: kC,
    g: Jf,
    G: Zf,
    H: ep,
    I: ep,
    j: SC,
    L: EC,
    m: TC,
    M: wC,
    p: I,
    q: OC,
    Q: AC,
    s: PC,
    S: CC,
    u: gC,
    U: yC,
    V: bC,
    w: mC,
    W: xC,
    x: N,
    X: L,
    y: Jf,
    Y: Zf,
    Z: vC,
    "%": RC
  };
  C.x = w(r, C), C.X = w(i, C), C.c = w(t, C), v.x = w(r, v), v.X = w(i, v), v.c = w(t, v);
  function w(V, Y) {
    return function(ee) {
      var D = [], re = -1, ne = 0, ce = V.length, ae, Ce, He;
      for (ee instanceof Date || (ee = /* @__PURE__ */ new Date(+ee)); ++re < ce; )
        V.charCodeAt(re) === 37 && (D.push(V.slice(ne, re)), (Ce = Kf[ae = V.charAt(++re)]) != null ? ae = V.charAt(++re) : Ce = ae === "e" ? " " : "0", (He = Y[ae]) && (ae = He(ee, Ce)), D.push(ae), ne = re + 1);
      return D.push(V.slice(ne, re)), D.join("");
    };
  }
  function E(V, Y) {
    return function(ee) {
      var D = xi(1900, void 0, 1), re = R(D, V, ee += "", 0), ne, ce;
      if (re != ee.length) return null;
      if ("Q" in D) return new Date(D.Q);
      if ("s" in D) return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (Y && !("Z" in D) && (D.Z = 0), "p" in D && (D.H = D.H % 12 + D.p * 12), D.m === void 0 && (D.m = "q" in D ? D.q : 0), "V" in D) {
        if (D.V < 1 || D.V > 53) return null;
        "w" in D || (D.w = 1), "Z" in D ? (ne = fl(xi(D.y, 0, 1)), ce = ne.getUTCDay(), ne = ce > 4 || ce === 0 ? vs.ceil(ne) : vs(ne), ne = la.offset(ne, (D.V - 1) * 7), D.y = ne.getUTCFullYear(), D.m = ne.getUTCMonth(), D.d = ne.getUTCDate() + (D.w + 6) % 7) : (ne = dl(xi(D.y, 0, 1)), ce = ne.getDay(), ne = ce > 4 || ce === 0 ? xs.ceil(ne) : xs(ne), ne = ro.offset(ne, (D.V - 1) * 7), D.y = ne.getFullYear(), D.m = ne.getMonth(), D.d = ne.getDate() + (D.w + 6) % 7);
      } else ("W" in D || "U" in D) && ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0), ce = "Z" in D ? fl(xi(D.y, 0, 1)).getUTCDay() : dl(xi(D.y, 0, 1)).getDay(), D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (ce + 5) % 7 : D.w + D.U * 7 - (ce + 6) % 7);
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, fl(D)) : dl(D);
    };
  }
  function R(V, Y, ee, D) {
    for (var re = 0, ne = Y.length, ce = ee.length, ae, Ce; re < ne; ) {
      if (D >= ce) return -1;
      if (ae = Y.charCodeAt(re++), ae === 37) {
        if (ae = Y.charAt(re++), Ce = O[ae in Kf ? Y.charAt(re++) : ae], !Ce || (D = Ce(V, ee, D)) < 0) return -1;
      } else if (ae != ee.charCodeAt(D++))
        return -1;
    }
    return D;
  }
  function I(V, Y, ee) {
    var D = u.exec(Y.slice(ee));
    return D ? (V.p = d.get(D[0].toLowerCase()), ee + D[0].length) : -1;
  }
  function j(V, Y, ee) {
    var D = h.exec(Y.slice(ee));
    return D ? (V.w = g.get(D[0].toLowerCase()), ee + D[0].length) : -1;
  }
  function _(V, Y, ee) {
    var D = f.exec(Y.slice(ee));
    return D ? (V.w = p.get(D[0].toLowerCase()), ee + D[0].length) : -1;
  }
  function T(V, Y, ee) {
    var D = b.exec(Y.slice(ee));
    return D ? (V.m = S.get(D[0].toLowerCase()), ee + D[0].length) : -1;
  }
  function M(V, Y, ee) {
    var D = m.exec(Y.slice(ee));
    return D ? (V.m = y.get(D[0].toLowerCase()), ee + D[0].length) : -1;
  }
  function P(V, Y, ee) {
    return R(V, t, Y, ee);
  }
  function N(V, Y, ee) {
    return R(V, r, Y, ee);
  }
  function L(V, Y, ee) {
    return R(V, i, Y, ee);
  }
  function z(V) {
    return a[V.getDay()];
  }
  function H(V) {
    return s[V.getDay()];
  }
  function Z(V) {
    return c[V.getMonth()];
  }
  function F(V) {
    return l[V.getMonth()];
  }
  function k(V) {
    return o[+(V.getHours() >= 12)];
  }
  function B(V) {
    return 1 + ~~(V.getMonth() / 3);
  }
  function G(V) {
    return a[V.getUTCDay()];
  }
  function W(V) {
    return s[V.getUTCDay()];
  }
  function X(V) {
    return c[V.getUTCMonth()];
  }
  function J(V) {
    return l[V.getUTCMonth()];
  }
  function Q(V) {
    return o[+(V.getUTCHours() >= 12)];
  }
  function te(V) {
    return 1 + ~~(V.getUTCMonth() / 3);
  }
  return {
    format: function(V) {
      var Y = w(V += "", C);
      return Y.toString = function() {
        return V;
      }, Y;
    },
    parse: function(V) {
      var Y = E(V += "", !1);
      return Y.toString = function() {
        return V;
      }, Y;
    },
    utcFormat: function(V) {
      var Y = w(V += "", v);
      return Y.toString = function() {
        return V;
      }, Y;
    },
    utcParse: function(V) {
      var Y = E(V += "", !0);
      return Y.toString = function() {
        return V;
      }, Y;
    }
  };
}
var Kf = { "-": "", _: " ", 0: "0" }, Ve = /^\s*\d+/, fC = /^%/, pC = /[\\^$*+?|[\]().{}]/g;
function he(e, t, r) {
  var i = e < 0 ? "-" : "", o = (i ? -e : e) + "", s = o.length;
  return i + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function hC(e) {
  return e.replace(pC, "\\$&");
}
function vi(e) {
  return new RegExp("^(?:" + e.map(hC).join("|") + ")", "i");
}
function Oi(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function mC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 1));
  return i ? (e.w = +i[0], r + i[0].length) : -1;
}
function gC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 1));
  return i ? (e.u = +i[0], r + i[0].length) : -1;
}
function yC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 2));
  return i ? (e.U = +i[0], r + i[0].length) : -1;
}
function bC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 2));
  return i ? (e.V = +i[0], r + i[0].length) : -1;
}
function xC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 2));
  return i ? (e.W = +i[0], r + i[0].length) : -1;
}
function Zf(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 4));
  return i ? (e.y = +i[0], r + i[0].length) : -1;
}
function Jf(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 2));
  return i ? (e.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), r + i[0].length) : -1;
}
function vC(e, t, r) {
  var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return i ? (e.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), r + i[0].length) : -1;
}
function OC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 1));
  return i ? (e.q = i[0] * 3 - 3, r + i[0].length) : -1;
}
function TC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 2));
  return i ? (e.m = i[0] - 1, r + i[0].length) : -1;
}
function Qf(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 2));
  return i ? (e.d = +i[0], r + i[0].length) : -1;
}
function SC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 3));
  return i ? (e.m = 0, e.d = +i[0], r + i[0].length) : -1;
}
function ep(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 2));
  return i ? (e.H = +i[0], r + i[0].length) : -1;
}
function wC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 2));
  return i ? (e.M = +i[0], r + i[0].length) : -1;
}
function CC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 2));
  return i ? (e.S = +i[0], r + i[0].length) : -1;
}
function EC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 3));
  return i ? (e.L = +i[0], r + i[0].length) : -1;
}
function kC(e, t, r) {
  var i = Ve.exec(t.slice(r, r + 6));
  return i ? (e.L = Math.floor(i[0] / 1e3), r + i[0].length) : -1;
}
function RC(e, t, r) {
  var i = fC.exec(t.slice(r, r + 1));
  return i ? r + i[0].length : -1;
}
function AC(e, t, r) {
  var i = Ve.exec(t.slice(r));
  return i ? (e.Q = +i[0], r + i[0].length) : -1;
}
function PC(e, t, r) {
  var i = Ve.exec(t.slice(r));
  return i ? (e.s = +i[0], r + i[0].length) : -1;
}
function tp(e, t) {
  return he(e.getDate(), t, 2);
}
function IC(e, t) {
  return he(e.getHours(), t, 2);
}
function MC(e, t) {
  return he(e.getHours() % 12 || 12, t, 2);
}
function _C(e, t) {
  return he(1 + ro.count(pn(e), e), t, 3);
}
function Um(e, t) {
  return he(e.getMilliseconds(), t, 3);
}
function jC(e, t) {
  return Um(e, t) + "000";
}
function $C(e, t) {
  return he(e.getMonth() + 1, t, 2);
}
function DC(e, t) {
  return he(e.getMinutes(), t, 2);
}
function LC(e, t) {
  return he(e.getSeconds(), t, 2);
}
function NC(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function FC(e, t) {
  return he(ca.count(pn(e) - 1, e), t, 2);
}
function Hm(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Vr(e) : Vr.ceil(e);
}
function qC(e, t) {
  return e = Hm(e), he(Vr.count(pn(e), e) + (pn(e).getDay() === 4), t, 2);
}
function zC(e) {
  return e.getDay();
}
function BC(e, t) {
  return he(xs.count(pn(e) - 1, e), t, 2);
}
function VC(e, t) {
  return he(e.getFullYear() % 100, t, 2);
}
function UC(e, t) {
  return e = Hm(e), he(e.getFullYear() % 100, t, 2);
}
function HC(e, t) {
  return he(e.getFullYear() % 1e4, t, 4);
}
function GC(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Vr(e) : Vr.ceil(e), he(e.getFullYear() % 1e4, t, 4);
}
function WC(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + he(t / 60 | 0, "0", 2) + he(t % 60, "0", 2);
}
function np(e, t) {
  return he(e.getUTCDate(), t, 2);
}
function YC(e, t) {
  return he(e.getUTCHours(), t, 2);
}
function XC(e, t) {
  return he(e.getUTCHours() % 12 || 12, t, 2);
}
function KC(e, t) {
  return he(1 + la.count(hn(e), e), t, 3);
}
function Gm(e, t) {
  return he(e.getUTCMilliseconds(), t, 3);
}
function ZC(e, t) {
  return Gm(e, t) + "000";
}
function JC(e, t) {
  return he(e.getUTCMonth() + 1, t, 2);
}
function QC(e, t) {
  return he(e.getUTCMinutes(), t, 2);
}
function eE(e, t) {
  return he(e.getUTCSeconds(), t, 2);
}
function tE(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function nE(e, t) {
  return he(ua.count(hn(e) - 1, e), t, 2);
}
function Wm(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ur(e) : Ur.ceil(e);
}
function rE(e, t) {
  return e = Wm(e), he(Ur.count(hn(e), e) + (hn(e).getUTCDay() === 4), t, 2);
}
function iE(e) {
  return e.getUTCDay();
}
function oE(e, t) {
  return he(vs.count(hn(e) - 1, e), t, 2);
}
function sE(e, t) {
  return he(e.getUTCFullYear() % 100, t, 2);
}
function aE(e, t) {
  return e = Wm(e), he(e.getUTCFullYear() % 100, t, 2);
}
function lE(e, t) {
  return he(e.getUTCFullYear() % 1e4, t, 4);
}
function cE(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ur(e) : Ur.ceil(e), he(e.getUTCFullYear() % 1e4, t, 4);
}
function uE() {
  return "+0000";
}
function rp() {
  return "%";
}
function ip(e) {
  return +e;
}
function op(e) {
  return Math.floor(+e / 1e3);
}
var Rr, Ym, Xm;
dE({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function dE(e) {
  return Rr = dC(e), Ym = Rr.format, Rr.parse, Xm = Rr.utcFormat, Rr.utcParse, Rr;
}
function fE(e) {
  return new Date(e);
}
function pE(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function yu(e, t, r, i, o, s, a, l, c, u) {
  var d = Dm(), f = d.invert, p = d.domain, h = u(".%L"), g = u(":%S"), m = u("%I:%M"), y = u("%I %p"), b = u("%a %d"), S = u("%b %d"), C = u("%B"), v = u("%Y");
  function O(w) {
    return (c(w) < w ? h : l(w) < w ? g : a(w) < w ? m : s(w) < w ? y : i(w) < w ? o(w) < w ? b : S : r(w) < w ? C : v)(w);
  }
  return d.invert = function(w) {
    return new Date(f(w));
  }, d.domain = function(w) {
    return arguments.length ? p(Array.from(w, pE)) : p().map(fE);
  }, d.ticks = function(w) {
    var E = p();
    return e(E[0], E[E.length - 1], w ?? 10);
  }, d.tickFormat = function(w, E) {
    return E == null ? O : u(E);
  }, d.nice = function(w) {
    var E = p();
    return (!w || typeof w.range != "function") && (w = t(E[0], E[E.length - 1], w ?? 10)), w ? p(Fm(E, w)) : d;
  }, d.copy = function() {
    return no(d, yu(e, t, r, i, o, s, a, l, c, u));
  }, d;
}
function Km() {
  return Ln.apply(yu(cC, uC, pn, mu, ca, ro, pu, du, Wn, Ym).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function hE() {
  return Ln.apply(yu(aC, lC, hn, gu, ua, la, hu, fu, Wn, Xm).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function mE() {
  var e = 0, t = 1, r, i, o, s, a = Rt, l = !1, c;
  function u(f) {
    return f == null || isNaN(f = +f) ? c : a(o === 0 ? 0.5 : (f = (s(f) - r) * o, l ? Math.max(0, Math.min(1, f)) : f));
  }
  u.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = s(e = +e), i = s(t = +t), o = r === i ? 0 : 1 / (i - r), u) : [e, t];
  }, u.clamp = function(f) {
    return arguments.length ? (l = !!f, u) : l;
  }, u.interpolator = function(f) {
    return arguments.length ? (a = f, u) : a;
  };
  function d(f) {
    return function(p) {
      var h, g;
      return arguments.length ? ([h, g] = p, a = f(h, g), u) : [a(0), a(1)];
    };
  }
  return u.range = d(oa), u.rangeRound = d($m), u.unknown = function(f) {
    return arguments.length ? (c = f, u) : c;
  }, function(f) {
    return s = f, r = f(e), i = f(t), o = r === i ? 0 : 1 / (i - r), u;
  };
}
function gE(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Zm() {
  var e = aa(mE()(Rt));
  return e.copy = function() {
    return gE(e, Zm());
  }, rw.apply(e, arguments);
}
function Jm(e) {
  return e.type === "piecewise" ? zm(e.thresholds, e.colors) : Zm([e.min ?? 0, e.max ?? 100], e.color);
}
function Hr(e) {
  return e.values ? Yl(e.values, e.colors).unknown(e.unknownColor ?? null) : Yl(e.colors.map((t, r) => r), e.colors).unknown(e.unknownColor ?? null);
}
function Fr(e) {
  return e.type === "ordinal" ? Hr(e) : Jm(e);
}
function Qm(e, t, r) {
  const {
    tickMaxStep: i,
    tickMinStep: o,
    tickNumber: s
  } = e, a = o === void 0 ? 999 : Math.floor(Math.abs(t[1] - t[0]) / o), l = i === void 0 ? 2 : Math.ceil(Math.abs(t[1] - t[0]) / i);
  return Math.min(a, Math.max(l, s ?? r));
}
function eg(e, t) {
  return t[1] - t[0] === 0 ? 1 : e / ((t[1] - t[0]) / 100);
}
function bu(e) {
  return Math.floor(Math.abs(e) / 50);
}
function sp(e) {
  return Array.isArray(e) ? JSON.stringify(e) : typeof e == "object" && e !== null ? e.valueOf() : e;
}
function da(...e) {
  let t = new ps(void 0, sp), r = [], i = [], o = 0, s = 1, a, l, c = !1, u = 0, d = 0, f = 0.5;
  const p = (y) => {
    const b = t.get(y);
    if (b !== void 0)
      return i[b % i.length];
  }, h = () => {
    const y = r.length, b = s < o, S = b ? s : o, C = b ? o : s;
    a = (C - S) / Math.max(1, y - u + d * 2), c && (a = Math.floor(a));
    const v = S + (C - S - a * (y - u)) * f;
    l = a * (1 - u);
    const O = c ? Math.round(v) : v;
    l = c ? Math.round(l) : l;
    const E = nw(y).map((R) => O + a * R);
    return i = b ? E.reverse() : E, p;
  };
  p.domain = function(y) {
    if (!arguments.length)
      return r.slice();
    r = [], t = new ps(void 0, sp);
    for (const b of y)
      t.has(b) || t.set(b, r.push(b) - 1);
    return h();
  }, p.range = function(y) {
    if (!arguments.length)
      return [o, s];
    const [b, S] = y;
    return o = +b, s = +S, h();
  }, p.rangeRound = function(y) {
    const [b, S] = y;
    return o = +b, s = +S, c = !0, h();
  }, p.bandwidth = function() {
    return l;
  }, p.step = function() {
    return a;
  }, p.round = function(y) {
    return arguments.length ? (c = !!y, h()) : c;
  }, p.padding = function(y) {
    return arguments.length ? (u = Math.min(1, d = +y), h()) : u;
  }, p.paddingInner = function(y) {
    return arguments.length ? (u = Math.min(1, y), h()) : u;
  }, p.paddingOuter = function(y) {
    return arguments.length ? (d = +y, h()) : d;
  }, p.align = function(y) {
    return arguments.length ? (f = Math.max(0, Math.min(1, y)), h()) : f;
  }, p.copy = () => da(r, [o, s]).round(c).paddingInner(u).paddingOuter(d).align(f);
  const [g, m] = e;
  return e.length > 1 ? (p.domain(g), p.range(m)) : g ? p.range(g) : h(), p;
}
function tg(...e) {
  const t = da(...e).paddingInner(1), r = t.copy;
  return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = () => {
    const i = r();
    return i.padding = i.paddingOuter, delete i.paddingInner, delete i.paddingOuter, i.copy = t.copy, i;
  }, t;
}
function ng(...e) {
  const t = qm(...e), r = t.ticks, {
    negativeScale: i,
    linearScale: o,
    positiveScale: s
  } = yE(t);
  return t.ticks = (a) => {
    const l = r(a), c = t.constant();
    let u = 0, d = 0, f = 0;
    l.forEach((h) => {
      h > -c && h < c && (d += 1), h <= -c && (u += 1), h >= c && (f += 1);
    });
    const p = [];
    if (u > 0 && p.push(...i.ticks(u)), d > 0) {
      const h = o.ticks(d);
      p.at(-1) === h[0] ? p.push(...h.slice(1)) : p.push(...h);
    }
    if (f > 0) {
      const h = s.ticks(f);
      p.at(-1) === h[0] ? p.push(...h.slice(1)) : p.push(...h);
    }
    return p;
  }, t.tickFormat = (a = 10, l) => {
    const c = t.constant(), [u, d] = t.domain(), f = d - u, p = i.domain(), h = p[1] - p[0], m = (f === 0 ? 0 : h / f) * a, y = o.domain(), b = y[1] - y[0], C = (f === 0 ? 0 : b / f) * a, v = s.domain(), O = v[1] - v[0], E = (f === 0 ? 0 : O / f) * a, R = i.tickFormat(m, l), I = o.tickFormat(C, l), j = s.tickFormat(E, l);
    return (_) => /* eslint-disable-next-line no-nested-ternary */ (_.valueOf() <= -c ? R : _.valueOf() >= c ? j : I)(_);
  }, t.copy = () => ng(t.domain(), t.range()).constant(t.constant()), t;
}
function yE(e) {
  const t = e.constant(), r = e.domain(), i = [r[0], Math.min(r[1], -t)], o = ys(i, e.range()), s = [Math.max(r[0], -t), Math.min(r[1], t)], a = lu(s, e.range()), l = [Math.max(r[0], t), r[1]], c = ys(l, e.range());
  return {
    negativeScale: o,
    linearScale: a,
    positiveScale: c
  };
}
function fa(e, t, r) {
  switch (e) {
    case "log":
      return ys(t, r);
    case "pow":
      return cu(t, r);
    case "sqrt":
      return Jw(t, r);
    case "time":
      return Km(t, r);
    case "utc":
      return hE(t, r);
    case "symlog":
      return ng(t, r);
    default:
      return lu(t, r);
  }
}
const Jl = (e) => e?.[0] instanceof Date;
function Ql(e, t, r) {
  const i = Km(e, t);
  return (o, {
    location: s
  }) => s === "tick" ? i.tickFormat(r)(o) : `${o.toLocaleString()}`;
}
let ap, lp;
class bE {
  types = /* @__PURE__ */ new Set();
  constructor() {
    if (ap)
      throw new Error("You can only create one instance!");
    ap = this.types;
  }
  addType(t) {
    this.types.add(t);
  }
  getTypes() {
    return this.types;
  }
}
class xE {
  types = /* @__PURE__ */ new Set();
  constructor() {
    if (lp)
      throw new Error("You can only create one instance!");
    lp = this.types;
  }
  addType(t) {
    this.types.add(t);
  }
  getTypes() {
    return this.types;
  }
}
const pa = new bE();
pa.addType("bar");
pa.addType("line");
pa.addType("scatter");
const rg = new xE();
rg.addType("radar");
function ha(e) {
  return pa.getTypes().has(e);
}
function Os(e) {
  return ha(e.type);
}
const vE = (e, t, r, i) => {
  const o = /* @__PURE__ */ new Set();
  return Object.keys(t).filter(ha).forEach((a) => {
    const l = r[a]?.series ?? {}, c = t[a].axisTooltipGetter?.(l);
    c !== void 0 && c.forEach(({
      axisId: u,
      direction: d
    }) => {
      d === e && o.add(u ?? i);
    });
  }), o;
};
function Ue(e) {
  return e.bandwidth !== void 0;
}
function OE(e) {
  return Ue(e) && e.paddingOuter !== void 0;
}
function TE(e, t, r) {
  const i = t === "x" ? [e.left, e.left + e.width] : [e.top + e.height, e.top];
  return r ? [i[1], i[0]] : i;
}
const SE = 0.2, wE = 0.1;
function ig({
  scales: e,
  drawingArea: t,
  formattedSeries: r,
  axis: i,
  seriesConfig: o,
  axisDirection: s,
  zoomMap: a,
  domains: l
}) {
  if (i === void 0)
    return {
      axis: {},
      axisIds: []
    };
  const c = vE(s, o, r, i[0].id), u = {};
  return i.forEach((d) => {
    const f = d, p = e[f.id], h = a?.get(f.id), g = h ? [h.start, h.end] : [0, 100], m = TE(t, s, f.reverse ?? !1), y = !f.ignoreTooltip && c.has(f.id), b = f.data ?? [];
    if (Ue(p)) {
      const w = s === "y" ? [m[1], m[0]] : m;
      if (OE(p) && dn(f)) {
        const E = f.categoryGapRatio ?? SE, R = f.barGapRatio ?? wE;
        u[f.id] = A({
          offset: 0,
          height: 0,
          categoryGapRatio: E,
          barGapRatio: R,
          triggerTooltip: y
        }, f, {
          data: b,
          scale: p,
          tickNumber: f.data.length,
          colorScale: f.colorMap && (f.colorMap.type === "ordinal" ? Hr(A({
            values: f.data
          }, f.colorMap)) : Fr(f.colorMap))
        });
      }
      if (Dn(f) && (u[f.id] = A({
        offset: 0,
        height: 0,
        triggerTooltip: y
      }, f, {
        data: b,
        scale: p,
        tickNumber: f.data.length,
        colorScale: f.colorMap && (f.colorMap.type === "ordinal" ? Hr(A({
          values: f.data
        }, f.colorMap)) : Fr(f.colorMap))
      })), Jl(f.data)) {
        const E = Ql(f.data, w, f.tickNumber);
        u[f.id].valueFormatter = f.valueFormatter ?? E;
      }
      return;
    }
    if (f.scaleType === "band" || f.scaleType === "point")
      return;
    const S = l[f.id].tickNumber, C = f, v = C.scaleType ?? "linear", O = eg(S, g);
    u[f.id] = A({
      offset: 0,
      height: 0,
      triggerTooltip: y
    }, C, {
      data: b,
      scaleType: v,
      scale: p,
      tickNumber: O,
      colorScale: C.colorMap && Jm(C.colorMap),
      valueFormatter: f.valueFormatter ?? WS(O, fa(v, m.map((w) => p.invert(w)), m))
    });
  }), {
    axis: u,
    axisIds: i.map(({
      id: d
    }) => d)
  };
}
function CE(e) {
  return e != null;
}
function EE(e, t, r, i) {
  const o = e?.length ?? 0, s = Math.floor(t * o / 100), a = Math.ceil(r * o / 100);
  return function(c, u) {
    return (c[i] ?? e?.[u]) == null ? !0 : u >= s && u < a;
  };
}
function kE(e, t, r, i, o) {
  const s = e[0].valueOf(), a = e[1].valueOf(), l = s + t * (a - s) / 100, c = s + r * (a - s) / 100;
  return function(d, f) {
    const p = d[i] ?? o?.[f];
    return p == null ? !0 : p >= l && p <= c;
  };
}
const RE = (e) => ({
  currentAxisId: t,
  seriesXAxisId: r,
  seriesYAxisId: i,
  isDefaultAxis: o
}) => (s, a) => !(t === r ? i : r) || o ? Object.values(e ?? {})[0]?.(s, a) ?? !0 : [i, r].filter((u) => u !== t).map((u) => e[u ?? ""]).filter(CE).every((u) => u(s, a)), cp = (e) => (t = []) => t.reduce((r, i) => {
  const {
    zoom: o,
    id: s,
    reverse: a
  } = i, l = eu(o, s, e, a);
  return l && (r[s] = l), r;
}, {}), AE = 0.2;
function og(e, t, r) {
  const i = t === "x" ? [e.left, e.left + e.width] : [e.top + e.height, e.top];
  return r.reverse ? [i[1], i[0]] : i;
}
function sg(e, t) {
  const r = [0, 1];
  if (dn(e)) {
    const s = e.categoryGapRatio ?? AE;
    return da(t, r).paddingInner(s).paddingOuter(s / 2);
  }
  if (Dn(e))
    return tg(t, r);
  const i = e.scaleType ?? "linear", o = fa(i, t, r);
  return XS(e) && e.constant != null && o.constant(e.constant), o;
}
const ag = (e, t) => {
  const r = e[1] - e[0], i = t[1] - t[0], o = e[0] - t[0] * r / i, s = e[1] + (100 - t[1]) * r / i;
  return [o, s];
}, PE = (e, t, r, i, o, s, a) => {
  const l = r === "x" ? i[e].xExtremumGetter : i[e].yExtremumGetter, c = s[e]?.series ?? {};
  return l?.({
    series: c,
    axis: t,
    axisIndex: o,
    isDefaultAxis: o === 0,
    getFilters: a
  }) ?? [1 / 0, -1 / 0];
};
function ma(e, t, r, i, o, s) {
  const a = Object.keys(r).filter(ha);
  let l = [1 / 0, -1 / 0];
  for (const c of a) {
    const [u, d] = PE(c, e, t, r, i, o, s);
    l = [Math.min(l[0], u), Math.max(l[1], d)];
  }
  return Number.isNaN(l[0]) || Number.isNaN(l[1]) ? [1 / 0, -1 / 0] : l;
}
const IE = (e, t, r, i) => {
  if (e.domainLimit !== void 0)
    return e.domainLimit;
  if (t === "x")
    for (const o of i.line?.seriesOrder ?? []) {
      const s = i.line.series[o];
      if (s.xAxisId === e.id || s.xAxisId === void 0 && r === 0)
        return "strict";
    }
  return "nice";
};
function lg(e, t, r) {
  return fa(e ?? "linear", t, [0, 1]).nice(r).domain();
}
function cg(e, t, r, i, [o, s], a, l) {
  const c = dg(e, t, r, i, l);
  let u = fg(e, o, s);
  if (typeof c == "function") {
    const {
      min: f,
      max: p
    } = c(o.valueOf(), s.valueOf());
    u[0] = f, u[1] = p;
  }
  const d = Qm(e, u, a);
  return c === "nice" && (u = lg(e.scaleType, u, d)), u = ["min" in e ? e.min ?? u[0] : u[0], "max" in e ? e.max ?? u[1] : u[1]], {
    domain: u,
    tickNumber: d
  };
}
function ug(e, t, r, i, [o, s], a, l) {
  const c = dg(e, t, r, i, l);
  let u = fg(e, o, s);
  if (typeof c == "function") {
    const {
      min: d,
      max: f
    } = c(o.valueOf(), s.valueOf());
    u[0] = d, u[1] = f;
  }
  return c === "nice" && (u = lg(e.scaleType, u, a)), [e.min ?? u[0], e.max ?? u[1]];
}
function dg(e, t, r, i, o) {
  return o ? IE(e, t, r, i) : e.domainLimit ?? "nice";
}
function fg(e, t, r) {
  let i = t, o = r;
  return "max" in e && e.max != null && e.max < t && (i = e.max), "min" in e && e.min != null && e.min > t && (o = e.min), !("min" in e) && !("max" in e) ? [i, o] : [e.min ?? i, e.max ?? o];
}
class ME {
  constructor() {
    this.ids = [], this.values = [], this.length = 0;
  }
  /** Removes all items from the queue. */
  clear() {
    this.length = 0;
  }
  /**
   * Adds `item` to the queue with the specified `priority`.
   *
   * `priority` must be a number. Items are sorted and returned from low to high priority. Multiple items
   * with the same priority value can be added to the queue, but there is no guaranteed order between these items.
   *
   * @param {T} item
   * @param {number} priority
   */
  push(t, r) {
    let i = this.length++;
    for (; i > 0; ) {
      const o = i - 1 >> 1, s = this.values[o];
      if (r >= s) break;
      this.ids[i] = this.ids[o], this.values[i] = s, i = o;
    }
    this.ids[i] = t, this.values[i] = r;
  }
  /**
   * Removes and returns the item from the head of this queue, which is one of
   * the items with the lowest priority. If this queue is empty, returns `undefined`.
   */
  pop() {
    if (this.length === 0) return;
    const t = this.ids, r = this.values, i = t[0], o = --this.length;
    if (o > 0) {
      const s = t[o], a = r[o];
      let l = 0;
      const c = o >> 1;
      for (; l < c; ) {
        const u = (l << 1) + 1, d = u + 1, f = u + (+(d < o) & +(r[d] < r[u]));
        if (r[f] >= a) break;
        t[l] = t[f], r[l] = r[f], l = f;
      }
      t[l] = s, r[l] = a;
    }
    return i;
  }
  /** Returns the item from the head of this queue without removing it. If this queue is empty, returns `undefined`. */
  peek() {
    return this.length > 0 ? this.ids[0] : void 0;
  }
  /**
   * Returns the priority value of the item at the head of this queue without
   * removing it. If this queue is empty, returns `undefined`.
   */
  peekValue() {
    return this.length > 0 ? this.values[0] : void 0;
  }
  /**
   * Shrinks the internal arrays to `this.length`.
   *
   * `pop()` and `clear()` calls don't free memory automatically to avoid unnecessary resize operations.
   * This also means that items that have been added to the queue can't be garbage collected until
   * a new item is pushed in their place, or this method is called.
   */
  shrink() {
    this.ids.length = this.values.length = this.length;
  }
}
const up = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], pl = 3;
class xu {
  /**
   * Recreate a Flatbush index from raw `ArrayBuffer` or `SharedArrayBuffer` data.
   * @param {ArrayBufferLike} data
   * @param {number} [byteOffset=0] byte offset to the start of the Flatbush buffer in the referenced ArrayBuffer.
   * @returns {Flatbush} index
   */
  static from(t, r = 0) {
    if (r % 8 !== 0)
      throw new Error("byteOffset must be 8-byte aligned.");
    if (!t || t.byteLength === void 0 || t.buffer)
      throw new Error("Data must be an instance of ArrayBuffer or SharedArrayBuffer.");
    const [i, o] = new Uint8Array(t, r + 0, 2);
    if (i !== 251)
      throw new Error("Data does not appear to be in a Flatbush format.");
    const s = o >> 4;
    if (s !== pl)
      throw new Error(`Got v${s} data when expected v${pl}.`);
    const a = up[o & 15];
    if (!a)
      throw new Error("Unrecognized array type.");
    const [l] = new Uint16Array(t, r + 2, 1), [c] = new Uint32Array(t, r + 4, 1);
    return new xu(c, l, a, void 0, t, r);
  }
  /**
   * Create a Flatbush index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=16] Size of the tree node (16 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBufferConstructor | SharedArrayBufferConstructor} [ArrayBufferType=ArrayBuffer] The array buffer type used to store data (`ArrayBuffer` by default).
   * @param {ArrayBufferLike} [data] (Only used internally)
   * @param {number} [byteOffset=0] (Only used internally)
   */
  constructor(t, r = 16, i = Float64Array, o = ArrayBuffer, s, a = 0) {
    if (t === void 0)
      throw new Error("Missing required argument: numItems.");
    if (isNaN(t) || t <= 0)
      throw new Error(`Unexpected numItems value: ${t}.`);
    this.numItems = +t, this.nodeSize = Math.min(Math.max(+r, 2), 65535), this.byteOffset = a;
    let l = t, c = l;
    this._levelBounds = [l * 4];
    do
      l = Math.ceil(l / this.nodeSize), c += l, this._levelBounds.push(c * 4);
    while (l !== 1);
    this.ArrayType = i, this.IndexArrayType = c < 16384 ? Uint16Array : Uint32Array;
    const u = up.indexOf(i), d = c * 4 * i.BYTES_PER_ELEMENT;
    if (u < 0)
      throw new Error(`Unexpected typed array class: ${i}.`);
    if (s)
      this.data = s, this._boxes = new i(s, a + 8, c * 4), this._indices = new this.IndexArrayType(s, a + 8 + d, c), this._pos = c * 4, this.minX = this._boxes[this._pos - 4], this.minY = this._boxes[this._pos - 3], this.maxX = this._boxes[this._pos - 2], this.maxY = this._boxes[this._pos - 1];
    else {
      const f = this.data = new o(8 + d + c * this.IndexArrayType.BYTES_PER_ELEMENT);
      this._boxes = new i(f, 8, c * 4), this._indices = new this.IndexArrayType(f, 8 + d, c), this._pos = 0, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, new Uint8Array(f, 0, 2).set([251, (pl << 4) + u]), new Uint16Array(f, 2, 1)[0] = r, new Uint32Array(f, 4, 1)[0] = t;
    }
    this._queue = new ME();
  }
  /**
   * Add a given rectangle to the index.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number} A zero-based, incremental number that represents the newly added rectangle.
   */
  add(t, r, i = t, o = r) {
    const s = this._pos >> 2, a = this._boxes;
    return this._indices[s] = s, a[this._pos++] = t, a[this._pos++] = r, a[this._pos++] = i, a[this._pos++] = o, t < this.minX && (this.minX = t), r < this.minY && (this.minY = r), i > this.maxX && (this.maxX = i), o > this.maxY && (this.maxY = o), s;
  }
  /** Perform indexing of the added rectangles. */
  finish() {
    if (this._pos >> 2 !== this.numItems)
      throw new Error(`Added ${this._pos >> 2} items when expected ${this.numItems}.`);
    const t = this._boxes;
    if (this.numItems <= this.nodeSize) {
      t[this._pos++] = this.minX, t[this._pos++] = this.minY, t[this._pos++] = this.maxX, t[this._pos++] = this.maxY;
      return;
    }
    const r = this.maxX - this.minX || 1, i = this.maxY - this.minY || 1, o = new Uint32Array(this.numItems), s = 65535;
    for (let a = 0, l = 0; a < this.numItems; a++) {
      const c = t[l++], u = t[l++], d = t[l++], f = t[l++], p = Math.floor(s * ((c + d) / 2 - this.minX) / r), h = Math.floor(s * ((u + f) / 2 - this.minY) / i);
      o[a] = $E(p, h);
    }
    ec(o, t, this._indices, 0, this.numItems - 1, this.nodeSize);
    for (let a = 0, l = 0; a < this._levelBounds.length - 1; a++) {
      const c = this._levelBounds[a];
      for (; l < c; ) {
        const u = l;
        let d = t[l++], f = t[l++], p = t[l++], h = t[l++];
        for (let g = 1; g < this.nodeSize && l < c; g++)
          d = Math.min(d, t[l++]), f = Math.min(f, t[l++]), p = Math.max(p, t[l++]), h = Math.max(h, t[l++]);
        this._indices[this._pos >> 2] = u, t[this._pos++] = d, t[this._pos++] = f, t[this._pos++] = p, t[this._pos++] = h;
      }
    }
  }
  /**
   * Search the index by a bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @param {(index: number) => boolean} [filterFn] An optional function for filtering the results.
   * @returns {number[]} An array containing the index, the x coordinate and the y coordinate of the points intersecting or touching the given bounding box.
   */
  search(t, r, i, o, s) {
    if (this._pos !== this._boxes.length)
      throw new Error("Data not yet indexed - call index.finish().");
    let a = this._boxes.length - 4;
    const l = [], c = [];
    for (; a !== void 0; ) {
      const u = Math.min(a + this.nodeSize * 4, dp(a, this._levelBounds));
      for (let d = a; d < u; d += 4) {
        if (i < this._boxes[d] || o < this._boxes[d + 1] || t > this._boxes[d + 2] || r > this._boxes[d + 3])
          continue;
        const f = this._indices[d >> 2] | 0;
        a >= this.numItems * 4 ? l.push(f) : (s === void 0 || s(f)) && (c.push(f), c.push(this._boxes[d]), c.push(this._boxes[d + 1]));
      }
      a = l.pop();
    }
    return c;
  }
  /**
   * Search items in order of distance from the given point.
   * @param x
   * @param y
   * @param [maxResults=Infinity]
   * @param maxDistSq
   * @param [filterFn] An optional function for filtering the results.
   * @param [sqDistFn] An optional function to calculate squared distance from the point to the item.
   * @returns {number[]} An array of indices of items found.
   */
  neighbors(t, r, i = 1 / 0, o = 1 / 0, s, a = _E) {
    if (this._pos !== this._boxes.length)
      throw new Error("Data not yet indexed - call index.finish().");
    let l = this._boxes.length - 4;
    const c = this._queue, u = [];
    e: for (; l !== void 0; ) {
      const d = Math.min(l + this.nodeSize * 4, dp(l, this._levelBounds));
      for (let f = l; f < d; f += 4) {
        const p = this._indices[f >> 2] | 0, h = this._boxes[f], g = this._boxes[f + 1], m = this._boxes[f + 2], y = this._boxes[f + 3], b = t < h ? h - t : t > m ? t - m : 0, S = r < g ? g - r : r > y ? r - y : 0, C = a(b, S);
        C > o || (l >= this.numItems * 4 ? c.push(p << 1, C) : (s === void 0 || s(p)) && c.push((p << 1) + 1, C));
      }
      for (; c.length && c.peek() & 1; )
        if (c.peekValue() > o || (u.push(c.pop() >> 1), u.length === i))
          break e;
      l = c.length ? c.pop() >> 1 : void 0;
    }
    return c.clear(), u;
  }
}
function _E(e, t) {
  return e * e + t * t;
}
function dp(e, t) {
  let r = 0, i = t.length - 1;
  for (; r < i; ) {
    const o = r + i >> 1;
    t[o] > e ? i = o : r = o + 1;
  }
  return t[r];
}
function ec(e, t, r, i, o, s) {
  if (Math.floor(i / s) >= Math.floor(o / s))
    return;
  const a = e[i], l = e[i + o >> 1], c = e[o];
  let u = c;
  const d = Math.max(a, l);
  c > d ? u = d : d === a ? u = Math.max(l, c) : d === l && (u = Math.max(a, c));
  let f = i - 1, p = o + 1;
  for (; ; ) {
    do
      f++;
    while (e[f] < u);
    do
      p--;
    while (e[p] > u);
    if (f >= p)
      break;
    jE(e, t, r, f, p);
  }
  ec(e, t, r, i, p, s), ec(e, t, r, p + 1, o, s);
}
function jE(e, t, r, i, o) {
  const s = e[i];
  e[i] = e[o], e[o] = s;
  const a = 4 * i, l = 4 * o, c = t[a], u = t[a + 1], d = t[a + 2], f = t[a + 3];
  t[a] = t[l], t[a + 1] = t[l + 1], t[a + 2] = t[l + 2], t[a + 3] = t[l + 3], t[l] = c, t[l + 1] = u, t[l + 2] = d, t[l + 3] = f;
  const p = r[i];
  r[i] = r[o], r[o] = p;
}
function $E(e, t) {
  let r = e ^ t, i = 65535 ^ r, o = 65535 ^ (e | t), s = e & (t ^ 65535), a = r | i >> 1, l = r >> 1 ^ r, c = o >> 1 ^ i & s >> 1 ^ o, u = r & o >> 1 ^ s >> 1 ^ s;
  r = a, i = l, o = c, s = u, a = r & r >> 2 ^ i & i >> 2, l = r & i >> 2 ^ i & (r ^ i) >> 2, c ^= r & o >> 2 ^ i & s >> 2, u ^= i & o >> 2 ^ (r ^ i) & s >> 2, r = a, i = l, o = c, s = u, a = r & r >> 4 ^ i & i >> 4, l = r & i >> 4 ^ i & (r ^ i) >> 4, c ^= r & o >> 4 ^ i & s >> 4, u ^= i & o >> 4 ^ (r ^ i) & s >> 4, r = a, i = l, o = c, s = u, c ^= r & o >> 8 ^ i & s >> 8, u ^= i & o >> 8 ^ (r ^ i) & s >> 8, r = c ^ c >> 1, i = u ^ u >> 1;
  let d = e ^ t, f = i | 65535 ^ (d | r);
  return d = (d | d << 8) & 16711935, d = (d | d << 4) & 252645135, d = (d | d << 2) & 858993459, d = (d | d << 1) & 1431655765, f = (f | f << 8) & 16711935, f = (f | f << 4) & 252645135, f = (f | f << 2) & 858993459, f = (f | f << 1) & 1431655765, (f << 1 | d) >>> 0;
}
const DE = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    t.set(r.axisId, r);
  }), t;
}, pg = (e) => e.zoom, LE = K(Zt, yn, (e, t) => e?.some((r) => !!r.zoom) || t?.some((r) => !!r.zoom) || !1), hg = K(pg, (e) => e?.isInteracting), Nn = Ne(pg, function(t) {
  return t?.zoomData && DE(t?.zoomData);
}), fp = K(Nn, (e, t) => e?.get(t)), io = Ne(Zt, yn, function(t, r) {
  return A({}, cp("x")(t), cp("y")(r));
});
K(io, (e, t) => e[t]);
const NE = K(mt, function(t) {
  return bu(t.width);
}), FE = K(mt, function(t) {
  return bu(t.height);
}), vu = Ne(Zt, Me, Ot, na, NE, function(t, r, i, o, s) {
  const l = {};
  return t?.forEach((c, u) => {
    const d = c;
    if (dn(d) || Dn(d)) {
      l[d.id] = {
        domain: d.data
      };
      return;
    }
    const f = ma(d, "x", i, u, r);
    l[d.id] = cg(d, "x", u, r, f, s, o);
  }), {
    axes: t,
    domains: l
  };
}), Ou = Ne(yn, Me, Ot, na, FE, function(t, r, i, o, s) {
  const l = {};
  return t?.forEach((c, u) => {
    const d = c;
    if (dn(d) || Dn(d)) {
      l[d.id] = {
        domain: d.data
      };
      return;
    }
    const f = ma(d, "y", i, u, r);
    l[d.id] = cg(d, "y", u, r, f, s, o);
  }), {
    axes: t,
    domains: l
  };
}), mg = Ne(Nn, io, vu, Ou, function(t, r, {
  axes: i,
  domains: o
}, {
  axes: s,
  domains: a
}) {
  if (!t || !r)
    return;
  let l = !1;
  const c = {}, u = [...i ?? [], ...s ?? []];
  for (let d = 0; d < u.length; d += 1) {
    const f = u[d];
    if (!r[f.id] || r[f.id].filterMode !== "discard")
      continue;
    const p = t.get(f.id);
    if (p === void 0 || p.start <= 0 && p.end >= 100)
      continue;
    const h = d < (i?.length ?? 0) ? "x" : "y";
    if (f.scaleType === "band" || f.scaleType === "point")
      c[f.id] = EE(f.data, p.start, p.end, h);
    else {
      const {
        domain: g
      } = h === "x" ? o[f.id] : a[f.id];
      c[f.id] = kE(
        // For continuous scales, the domain is always a two-value array.
        g,
        p.start,
        p.end,
        h,
        f.data
      );
    }
    l = !0;
  }
  if (l)
    return RE(c);
}), qE = Ne(Me, Ot, Nn, io, mg, na, vu, function(t, r, i, o, s, a, {
  axes: l,
  domains: c
}) {
  const u = {};
  return l?.forEach((d, f) => {
    const p = c[d.id].domain;
    if (dn(d) || Dn(d)) {
      u[d.id] = p;
      return;
    }
    const h = i?.get(d.id), g = o?.[d.id], m = h === void 0 && !g ? s : void 0;
    if (!m) {
      u[d.id] = p;
      return;
    }
    const y = c[d.id].tickNumber, b = ma(d, "x", r, f, t, m);
    u[d.id] = ug(d, "x", f, t, b, y, a);
  }), u;
}), zE = Ne(Me, Ot, Nn, io, mg, na, Ou, function(t, r, i, o, s, a, {
  axes: l,
  domains: c
}) {
  const u = {};
  return l?.forEach((d, f) => {
    const p = c[d.id].domain;
    if (dn(d) || Dn(d)) {
      u[d.id] = p;
      return;
    }
    const h = i?.get(d.id), g = o?.[d.id], m = h === void 0 && !g ? s : void 0;
    if (!m) {
      u[d.id] = p;
      return;
    }
    const y = c[d.id].tickNumber, b = ma(d, "y", r, f, t, m);
    u[d.id] = ug(d, "y", f, t, b, y, a);
  }), u;
}), gg = Ne(Zt, qE, function(t, r) {
  const i = {};
  return t?.forEach((o) => {
    const s = o, a = r[s.id];
    i[s.id] = sg(s, a);
  }), i;
}), yg = Ne(yn, zE, function(t, r) {
  const i = {};
  return t?.forEach((o) => {
    const s = o, a = r[s.id];
    i[s.id] = sg(s, a);
  }), i;
}), BE = Ne(Zt, gg, mt, Nn, function(t, r, i, o) {
  const s = {};
  return t?.forEach((a) => {
    const l = a, c = o?.get(l.id), u = c ? [c.start, c.end] : [0, 100], d = og(i, "x", l), f = r[l.id].copy(), p = ag(d, u);
    f.range(p), s[l.id] = f;
  }), s;
}), VE = Ne(yn, yg, mt, Nn, function(t, r, i, o) {
  const s = {};
  return t?.forEach((a) => {
    const l = a, c = o?.get(l.id), u = c ? [c.start, c.end] : [0, 100], d = og(i, "y", l), f = r[l.id].copy(), p = Ue(f) ? d.reverse() : d, h = ag(p, u);
    f.range(h), s[l.id] = f;
  }), s;
}), rt = Ne(mt, Me, Ot, Nn, vu, BE, function(t, r, i, o, {
  axes: s,
  domains: a
}, l) {
  return ig({
    scales: l,
    drawingArea: t,
    formattedSeries: r,
    axis: s,
    seriesConfig: i,
    axisDirection: "x",
    zoomMap: o,
    domains: a
  });
}), it = Ne(mt, Me, Ot, Nn, Ou, VE, function(t, r, i, o, {
  axes: s,
  domains: a
}, l) {
  return ig({
    scales: l,
    drawingArea: t,
    formattedSeries: r,
    axis: s,
    seriesConfig: i,
    axisDirection: "y",
    zoomMap: o,
    domains: a
  });
});
K(rt, it, (e, t, r) => e?.axis[r] ?? t?.axis[r]);
K(Zt, yn, (e, t, r) => {
  const i = e?.find((o) => o.id === r) ?? t?.find((o) => o.id === r) ?? null;
  if (i)
    return i;
});
const UE = K(Zt, (e) => e[0].id), HE = K(yn, (e) => e[0].id), GE = /* @__PURE__ */ new Map(), WE = () => GE, YE = Ne(Me, gg, yg, UE, HE, function(t, r, i, o, s) {
  const a = t.scatter, l = /* @__PURE__ */ new Map();
  return a && a.seriesOrder.forEach((c) => {
    const {
      data: u,
      xAxisId: d = o,
      yAxisId: f = s
    } = a.series[c], p = new xu(u.length), h = r[d], g = i[f];
    for (const m of u)
      p.add(h(m.x), g(m.y));
    p.finish(), l.set(c, p);
  }), l;
});
function Ar(e) {
  return e instanceof Date ? e.getTime() : e;
}
function Gr(e, t) {
  const {
    scale: r,
    data: i,
    reverse: o
  } = e;
  if (!Ue(r)) {
    const a = r.invert(t);
    if (i === void 0)
      return -1;
    const l = Ar(a);
    return i?.findIndex((u, d) => {
      const f = Ar(u);
      return f > l && (d === 0 || Math.abs(l - f) <= Math.abs(l - Ar(i[d - 1]))) || f <= l && (d === i.length - 1 || Math.abs(Ar(a) - f) < Math.abs(Ar(a) - Ar(i[d + 1])));
    });
  }
  const s = r.bandwidth() === 0 ? Math.floor((t - Math.min(...r.range()) + r.step() / 2) / r.step()) : Math.floor((t - Math.min(...r.range())) / r.step());
  return s < 0 || s >= i.length ? -1 : o ? i.length - 1 - s : s;
}
function pp(e, t, r, i) {
  if (!Ue(e)) {
    if (i === null) {
      const o = e.invert(r);
      return Number.isNaN(o) ? null : o;
    }
    return t[i];
  }
  return i === null || i < 0 || i >= t.length ? null : t[i];
}
function zi(e, t) {
  const r = e.createSVGPoint();
  return r.x = t.clientX, r.y = t.clientY, r.matrixTransform(e.getScreenCTM().inverse());
}
const XE = Object.is;
function bg(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let r = 0, i = 0;
  for (const o in e)
    if (r += 1, !XE(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    i += 1;
  return r === i;
}
const pr = ({
  store: e
}) => {
  const t = ze(function() {
    e.set("interaction", A({}, e.state.interaction, {
      pointer: null,
      item: null
    }));
  }), r = ze(function(a) {
    const l = e.state.interaction.item;
    if (!a) {
      l !== null && e.set("interaction", A({}, e.state.interaction, {
        item: null
      }));
      return;
    }
    l === null || Object.keys(a).some((c) => a[c] !== l[c]) || e.set("interaction", A({}, e.state.interaction, {
      item: null
    }));
  }), i = ze(function(a, l) {
    bg(e.state.interaction.item, a) || e.set("interaction", A({}, e.state.interaction, {
      lastUpdate: l.interaction,
      item: a
    }));
  }), o = ze(function(a) {
    e.set("interaction", A({}, e.state.interaction, {
      pointer: a,
      lastUpdate: a !== null ? "pointer" : e.state.interaction.lastUpdate
    }));
  });
  return {
    instance: {
      cleanInteraction: t,
      setItemInteraction: i,
      removeItemInteraction: r,
      setPointerCoordinate: o
    }
  };
};
pr.getInitialState = () => ({
  interaction: {
    item: null,
    pointer: null,
    lastUpdate: "pointer"
  }
});
pr.params = {};
const ga = (e) => e.interaction, KE = K(ga, (e) => e !== void 0), xg = K(ga, (e) => e?.item ?? null), vg = K(ga, (e) => e?.pointer ?? null), oo = K(vg, (e) => e && e.x), so = K(vg, (e) => e && e.y), ZE = K(xg, (e) => e !== null), ao = K(ga, (e) => e?.lastUpdate), JE = /* @__PURE__ */ new Set(["bar", "line", "scatter", "pie"]);
function Og(e) {
  return JE.has(e);
}
function Tg(e, t, r) {
  const i = Object.keys(e), o = t !== void 0 && e[t] ? i.indexOf(t) : 0, s = t !== void 0 && r !== void 0 && e[t] && e[t].series[r] ? e[t].seriesOrder.indexOf(r) : -1, a = i.filter(Og);
  for (let d = 0; d < a.length; d += 1) {
    const f = (o + d) % a.length, p = e[a[f]], h = d === 0 ? s + 1 : 0;
    for (let g = h; g < p.seriesOrder.length; g += 1)
      if (p.series[p.seriesOrder[g]].data.length > 0)
        return {
          type: a[f],
          seriesId: p.seriesOrder[g]
        };
  }
  const l = o, c = e[a[l]], u = s;
  for (let d = 0; d < u; d += 1)
    if (c.series[c.seriesOrder[d]].data.length > 0)
      return {
        type: a[l],
        seriesId: c.seriesOrder[d]
      };
  return null;
}
function Sg(e, t, r) {
  const i = Object.keys(e), o = t !== void 0 && e[t] ? i.indexOf(t) : 0, s = t !== void 0 && r !== void 0 && e[t] && e[t].series[r] ? e[t].seriesOrder.indexOf(r) : 1, a = i.filter(Og);
  for (let d = 0; d < a.length; d += 1) {
    const f = (a.length + o - d) % a.length, p = e[a[f]], h = d === 0 ? s + 1 : p.seriesOrder.length;
    for (let g = 1; g < h; g += 1) {
      const m = (p.seriesOrder.length + s - g) % p.seriesOrder.length;
      if (p.series[p.seriesOrder[m]].data.length > 0)
        return {
          type: a[f],
          seriesId: p.seriesOrder[m]
        };
    }
  }
  const l = o, c = e[a[l]], u = c.seriesOrder;
  for (let d = u.length - 1; d > s; d -= 1)
    if (c.series[c.seriesOrder[d]].data.length > 0)
      return {
        type: a[l],
        seriesId: c.seriesOrder[d]
      };
  return null;
}
function wg(e, t, r) {
  if (t === "sankey")
    return !1;
  const i = e[t]?.series[r]?.data;
  return i && i.length > 0;
}
function QE(e) {
  const t = Me(e);
  let {
    type: r,
    seriesId: i
  } = e.keyboardNavigation.item ?? {};
  if (r === void 0 || // @ts-ignore sankey is not in MIT version
  r === "sankey" || i === void 0 || !wg(t, r, i)) {
    const s = Tg(t, r, i);
    if (s === null)
      return null;
    r = s.type, i = s.seriesId;
  }
  const o = t[r].series[i].data.length;
  return {
    type: r,
    seriesId: i,
    dataIndex: ((e.keyboardNavigation.item?.dataIndex ?? -1) + 1) % o
  };
}
function ek(e) {
  const t = Me(e);
  let {
    type: r,
    seriesId: i
  } = e.keyboardNavigation.item ?? {};
  if (r === void 0 || // @ts-ignore sankey is not in MIT version
  r === "sankey" || i === void 0 || !wg(t, r, i)) {
    const s = Sg(t, r, i);
    if (s === null)
      return null;
    r = s.type, i = s.seriesId;
  }
  const o = t[r].series[i].data.length;
  return {
    type: r,
    seriesId: i,
    dataIndex: (o + (e.keyboardNavigation.item?.dataIndex ?? 1) - 1) % o
  };
}
function tk(e) {
  const t = Me(e);
  let {
    type: r,
    seriesId: i
  } = e.keyboardNavigation.item ?? {};
  const o = Tg(t, r, i);
  if (o === null)
    return null;
  r = o.type, i = o.seriesId;
  const s = t[r].series[i].data.length;
  return {
    type: r,
    seriesId: i,
    dataIndex: Math.min(s - 1, e.keyboardNavigation.item?.dataIndex ?? 0)
  };
}
function nk(e) {
  const t = Me(e);
  let {
    type: r,
    seriesId: i
  } = e.keyboardNavigation.item ?? {};
  const o = Sg(t, r, i);
  if (o === null)
    return null;
  r = o.type, i = o.seriesId;
  const s = t[r].series[i].data.length;
  return {
    type: r,
    seriesId: i,
    dataIndex: Math.min(s - 1, e.keyboardNavigation.item?.dataIndex ?? 0)
  };
}
const ii = ({
  params: e,
  store: t,
  svgRef: r
}) => {
  const i = ze(function() {
    t.state.keyboardNavigation.item !== null && t.set("keyboardNavigation", A({}, t.state.keyboardNavigation, {
      item: null
    }));
  });
  return $.useEffect(() => {
    const o = r.current;
    if (!o || !e.enableKeyboardNavigation)
      return;
    function s(a) {
      let l = t.state.keyboardNavigation.item;
      switch (a.key) {
        case "ArrowRight":
          l = QE(t.state);
          break;
        case "ArrowLeft":
          l = ek(t.state);
          break;
        case "ArrowDown": {
          l = nk(t.state);
          break;
        }
        case "ArrowUp": {
          l = tk(t.state);
          break;
        }
      }
      l !== t.state.keyboardNavigation.item && (a.preventDefault(), t.update(A({}, t.state.highlight && {
        highlight: A({}, t.state.highlight, {
          lastUpdate: "keyboard"
        })
      }, t.state.interaction && {
        interaction: A({}, t.state.interaction, {
          lastUpdate: "keyboard"
        })
      }, {
        keyboardNavigation: A({}, t.state.keyboardNavigation, {
          item: l
        })
      })));
    }
    return o.addEventListener("keydown", s), o.addEventListener("blur", i), () => {
      o.removeEventListener("keydown", s), o.removeEventListener("blur", i);
    };
  }, [r, i, e.enableKeyboardNavigation, t]), Fe(() => {
    t.state.keyboardNavigation.enableKeyboardNavigation !== e.enableKeyboardNavigation && t.set("keyboardNavigation", A({}, t.state.keyboardNavigation, {
      enableKeyboardNavigation: !!e.enableKeyboardNavigation
    }));
  }, [t, e.enableKeyboardNavigation]), {};
};
ii.getInitialState = (e) => ({
  keyboardNavigation: {
    item: null,
    enableKeyboardNavigation: !!e.enableKeyboardNavigation
  }
});
ii.params = {
  enableKeyboardNavigation: !0
};
const hr = (e) => e.keyboardNavigation, rk = K(hr, (e, t) => e?.item != null && e.item.type === t.seriesType && e.item.seriesId === t.seriesId && e.item.dataIndex === t.dataIndex), ik = K(hr, (e) => e?.item != null), ya = K(hr, (e) => e?.item?.type), ba = K(hr, (e) => e?.item?.seriesId), xa = K(hr, (e) => e?.item?.dataIndex), ok = K(hr, (e) => !!e?.enableKeyboardNavigation), Cg = (e) => (t, r, i, o, s) => {
  if (t === void 0 || r === void 0 || i === void 0)
    return;
  const a = s[t]?.series[r];
  if (!a)
    return;
  let l = e === "x" ? "xAxisId" in a && a.xAxisId : "yAxisId" in a && a.yAxisId;
  return (l === void 0 || l === !1) && (l = o.axisIds[0]), {
    axisId: l,
    dataIndex: i
  };
}, sk = K(ya, ba, xa, rt, Me, Cg("x")), ak = K(ya, ba, xa, it, Me, Cg("y")), Eg = K(hr, function(t) {
  if (t?.item == null)
    return null;
  const {
    type: r,
    seriesId: i
  } = t.item;
  return r === void 0 || i === void 0 ? null : t.item;
}), lk = K(ya, ba, xa, function(t, r, i) {
  return r !== void 0 && i !== void 0;
}), kg = K(ao, xg, Eg, (e, t, r) => e === "keyboard" ? r : t ?? null), ck = K(ao, ZE, lk, (e, t, r) => e === "keyboard" ? r : t), uk = K(kg, mt, Ot, rt, it, Me, function(t, r, i, {
  axis: o,
  axisIds: s
}, {
  axis: a,
  axisIds: l
}, c, u = "top") {
  if (!t)
    return null;
  const d = c[t.type]?.series[t.seriesId];
  if (d) {
    const f = {}, p = Os(d) ? d.xAxisId ?? s[0] : void 0, h = Os(d) ? d.yAxisId ?? l[0] : void 0;
    return p !== void 0 && (f.x = o[p]), h !== void 0 && (f.y = a[h]), i[d.type].tooltipItemPositionGetter?.({
      series: c,
      drawingArea: r,
      axesConfig: f,
      identifier: t,
      placement: u
    }) ?? null;
  }
  return null;
});
function qr(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    if (Array.isArray(e)) {
      const o = e.length;
      if (o !== t.length)
        return !1;
      for (let s = 0; s < o; s += 1)
        if (!qr(e[s], t[s]))
          return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      const o = Array.from(e.entries());
      for (let s = 0; s < o.length; s += 1)
        if (!t.has(o[s][0]))
          return !1;
      for (let s = 0; s < o.length; s += 1) {
        const a = o[s];
        if (!qr(a[1], t.get(a[0])))
          return !1;
      }
      return !0;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      const o = Array.from(e.entries());
      for (let s = 0; s < o.length; s += 1)
        if (!t.has(o[s][0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      const o = e.length;
      if (o !== t.length)
        return !1;
      for (let s = 0; s < o; s += 1)
        if (e[s] !== t[s])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const r = Object.keys(e), i = r.length;
    if (i !== Object.keys(t).length)
      return !1;
    for (let o = 0; o < i; o += 1)
      if (!Object.prototype.hasOwnProperty.call(t, r[o]))
        return !1;
    for (let o = 0; o < i; o += 1) {
      const s = r[o];
      if (!qr(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function tc(e, t, r = t.axisIds[0]) {
  return Array.isArray(r) ? r.map((i) => Gr(t.axis[i], e)) : Gr(t.axis[r], e);
}
const Rg = (e, t, r) => {
  if (e === null)
    return null;
  const i = tc(e, t, r);
  return i === -1 ? null : i;
}, Tu = K(oo, rt, Rg), Su = K(so, it, Rg), dk = K(oo, so, rt, it, (e, t, r, i) => [...e === null ? [] : r.axisIds.map((o) => ({
  axisId: o,
  dataIndex: tc(e, r, o)
})), ...t === null ? [] : i.axisIds.map((o) => ({
  axisId: o,
  dataIndex: tc(t, i, o)
}))].filter((o) => o.dataIndex !== null && o.dataIndex >= 0));
function Ag(e, t, r, i = t.axisIds[0]) {
  return Array.isArray(i) ? i.map((o, s) => {
    const a = t.axis[o];
    return pp(a.scale, a.data, e, r[s]);
  }) : pp(t.axis[i].scale, t.axis[i].data, e, r);
}
const fk = K(oo, rt, Tu, (e, t, r, i) => e === null || t.axisIds.length === 0 ? null : Ag(e, t, r, i)), pk = K(so, it, Su, (e, t, r, i) => e === null || t.axisIds.length === 0 ? null : Ag(e, t, r, i)), Pg = [], Ig = Js({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: qr
  }
})(oo, rt, (e, t) => e === null ? Pg : t.axisIds.filter((r) => t.axis[r].triggerTooltip).map((r) => ({
  axisId: r,
  dataIndex: Gr(t.axis[r], e)
})).filter(({
  dataIndex: r
}) => r >= 0)), Mg = Js({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: qr
  }
})(so, it, (e, t) => e === null ? Pg : t.axisIds.filter((r) => t.axis[r].triggerTooltip).map((r) => ({
  axisId: r,
  dataIndex: Gr(t.axis[r], e)
})).filter(({
  dataIndex: r
}) => r >= 0)), hk = K(Ig, Mg, (e, t) => e.length > 0 || t.length > 0);
function mk(e) {
  return e.setPointerCoordinate !== void 0;
}
const mr = ({
  params: e,
  store: t,
  seriesConfig: r,
  svgRef: i,
  instance: o
}) => {
  const {
    xAxis: s,
    yAxis: a,
    dataset: l,
    onHighlightedAxisChange: c
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const v = [...s ?? [], ...a ?? []].filter((w) => w.id).map((w) => w.id), O = new Set(v.filter((w, E) => v.indexOf(w) !== E));
    O.size > 0 && Mt([`MUI X Charts: The following axis ids are duplicated: ${Array.from(O).join(", ")}.`, "Please make sure that each axis has a unique id."].join(`
`), "error");
  }
  const u = ie(t, mt), d = ie(t, Me), f = ie(t, KE), {
    axis: p,
    axisIds: h
  } = ie(t, rt), {
    axis: g,
    axisIds: m
  } = ie(t, it);
  wm({
    warningPrefix: "MUI X Charts",
    componentName: "Chart",
    propName: "highlightedAxis",
    controlled: e.highlightedAxis,
    defaultValue: void 0
  }), Fe(() => {
    e.highlightedAxis !== void 0 && t.set("controlledCartesianAxisHighlight", e.highlightedAxis);
  }, [t, e.highlightedAxis]);
  const y = $.useRef(!0);
  $.useEffect(() => {
    if (y.current) {
      y.current = !1;
      return;
    }
    t.set("cartesianAxis", {
      x: km(s, l),
      y: Rm(a, l)
    });
  }, [r, u, s, a, l, t]);
  const b = h[0], S = m[0];
  eS(t, dk, (v, O) => {
    if (c && !Object.is(v, O)) {
      if (v.length !== O.length) {
        c(O);
        return;
      }
      v?.some(({
        axisId: w,
        dataIndex: E
      }, R) => O[R].axisId !== w || O[R].dataIndex !== E) && c(O);
    }
  });
  const C = mk(o);
  return $.useEffect(() => {
    const v = i.current;
    if (!f || !C || !v || e.disableAxisListener)
      return () => {
      };
    const O = o.addInteractionListener("moveEnd", (T) => {
      T.detail.activeGestures.pan || o.cleanInteraction();
    }), w = o.addInteractionListener("panEnd", (T) => {
      T.detail.activeGestures.move || o.cleanInteraction();
    }), E = o.addInteractionListener("quickPressEnd", (T) => {
      !T.detail.activeGestures.move && !T.detail.activeGestures.pan && o.cleanInteraction();
    }), R = (T) => {
      const M = T.detail.srcEvent, P = T.detail.target, N = zi(v, M);
      if (T.detail.srcEvent.buttons >= 1 && P?.hasPointerCapture(T.detail.srcEvent.pointerId) && !P?.closest("[data-charts-zoom-slider]") && P?.releasePointerCapture(T.detail.srcEvent.pointerId), !o.isPointInside(N.x, N.y, P)) {
        o.cleanInteraction?.();
        return;
      }
      o.setPointerCoordinate(N);
    }, I = o.addInteractionListener("move", R), j = o.addInteractionListener("pan", R), _ = o.addInteractionListener("quickPress", R);
    return () => {
      I.cleanup(), O.cleanup(), j.cleanup(), w.cleanup(), _.cleanup(), E.cleanup();
    };
  }, [i, t, p, b, g, S, o, e.disableAxisListener, f, C]), $.useEffect(() => {
    const v = i.current, O = e.onAxisClick;
    if (v === null || !O)
      return () => {
      };
    const w = o.addInteractionListener("tap", (E) => {
      let R = null, I = !1;
      const j = zi(v, E.detail.srcEvent), _ = Gr(p[b], j.x);
      I = _ !== -1, R = I ? _ : Gr(g[S], j.y);
      const T = I ? h[0] : m[0];
      if (R == null || R === -1)
        return;
      const M = (I ? p : g)[T].data[R], P = {};
      Object.keys(d).filter((N) => ["bar", "line"].includes(N)).forEach((N) => {
        d[N]?.seriesOrder.forEach((L) => {
          const z = d[N].series[L], H = z.xAxisId, Z = z.yAxisId, F = I ? H : Z;
          (F === void 0 || F === T) && (P[L] = z.data[R]);
        });
      }), O(E.detail.srcEvent, {
        dataIndex: R,
        axisValue: M,
        seriesValues: P
      });
    });
    return () => {
      w.cleanup();
    };
  }, [e.onAxisClick, d, i, p, h, g, m, b, S, o]), {};
};
mr.params = {
  xAxis: !0,
  yAxis: !0,
  dataset: !0,
  onAxisClick: !0,
  disableAxisListener: !0,
  onHighlightedAxisChange: !0,
  highlightedAxis: !0
};
mr.getDefaultizedParams = ({
  params: e
}) => A({}, e, {
  colors: e.colors ?? Om,
  theme: e.theme ?? "light",
  defaultizedXAxis: km(e.xAxis, e.dataset),
  defaultizedYAxis: Rm(e.yAxis, e.dataset)
});
mr.getInitialState = (e) => A({
  cartesianAxis: {
    x: e.defaultizedXAxis,
    y: e.defaultizedYAxis
  }
}, e.highlightedAxis === void 0 ? {} : {
  controlledCartesianAxisHighlight: e.highlightedAxis
});
const Jt = (e) => e.brush;
K(Jt, (e) => e?.start);
K(Jt, (e) => e?.current);
const gk = K(Jt, (e) => e?.start?.x ?? null), yk = K(Jt, (e) => e?.start?.y ?? null), bk = K(Jt, (e) => e?.current?.x ?? null), xk = K(Jt, (e) => e?.current?.y ?? null);
K(gk, yk, bk, xk, (e, t, r, i) => e === null || t === null || r === null || i === null ? null : {
  start: {
    x: e,
    y: t
  },
  current: {
    x: r,
    y: i
  }
});
const vk = K(Me, (e) => {
  let t = !1, r = !1;
  return e && Object.entries(e).forEach(([i, o]) => {
    Object.values(o.series).some((s) => s.layout === "horizontal") && (t = !0), i === "scatter" && o.seriesOrder.length > 0 && (r = !0);
  }), r ? "xy" : t ? "y" : "x";
}), Ok = K(io, function(t) {
  let r = !1, i = !1;
  return Object.values(t).forEach((o) => {
    o.axisDirection === "y" && (i = !0), o.axisDirection === "x" && (r = !0);
  }), r && i ? "xy" : i ? "y" : r ? "x" : null;
});
K(vk, Ok, (e, t) => t ?? e);
const _g = K(Jt, (e) => e?.enabled || e?.isZoomBrushEnabled), jg = K(_g, Jt, (e, t) => e && t?.start !== null && t?.current !== null), va = K(Jt, jg, (e, t) => t && e?.preventHighlight), Tk = K(Jt, jg, (e, t) => t && e?.preventTooltip), oi = ({
  store: e,
  svgRef: t,
  instance: r,
  params: i
}) => {
  const o = ie(e, _g);
  Fe(() => {
    e.set("brush", A({}, e.state.brush, {
      enabled: i.brushConfig.enabled,
      preventTooltip: i.brushConfig.preventTooltip,
      preventHighlight: i.brushConfig.preventHighlight
    }));
  }, [e, i.brushConfig.enabled, i.brushConfig.preventTooltip, i.brushConfig.preventHighlight]);
  const s = ze(function(u) {
    e.set("brush", A({}, e.state.brush, {
      start: e.state.brush.start ?? u,
      current: u
    }));
  }), a = ze(function() {
    e.set("brush", A({}, e.state.brush, {
      start: null,
      current: null
    }));
  }), l = ze(function(u) {
    e.state.brush.isZoomBrushEnabled !== u && e.set("brush", A({}, e.state.brush, {
      isZoomBrushEnabled: u
    }));
  });
  return $.useEffect(() => {
    const c = t.current;
    if (c === null || !o)
      return () => {
      };
    const u = (m) => {
      if (m.detail.target?.closest("[data-charts-zoom-slider]"))
        return;
      const y = zi(c, {
        clientX: m.detail.initialCentroid.x,
        clientY: m.detail.initialCentroid.y
      });
      s(y);
    }, d = (m) => {
      const y = zi(c, {
        clientX: m.detail.centroid.x,
        clientY: m.detail.centroid.y
      });
      s(y);
    }, f = r.addInteractionListener("brushStart", u), p = r.addInteractionListener("brush", d), h = r.addInteractionListener("brushCancel", a), g = r.addInteractionListener("brushEnd", a);
    return () => {
      f.cleanup(), p.cleanup(), g.cleanup(), h.cleanup();
    };
  }, [t, r, e, a, s, o]), {
    instance: {
      setBrushCoordinates: s,
      clearBrush: a,
      setZoomBrushEnabled: l
    }
  };
};
oi.params = {
  brushConfig: !0
};
oi.getDefaultizedParams = ({
  params: e
}) => A({}, e, {
  brushConfig: {
    enabled: e?.brushConfig?.enabled ?? !1,
    preventTooltip: e?.brushConfig?.preventTooltip ?? !0,
    preventHighlight: e?.brushConfig?.preventHighlight ?? !0
  }
});
oi.getInitialState = (e) => ({
  brush: {
    enabled: e.brushConfig.enabled,
    isZoomBrushEnabled: !1,
    preventTooltip: e.brushConfig.preventTooltip,
    preventHighlight: e.brushConfig.preventHighlight,
    start: null,
    current: null
  }
});
const si = (e) => e.controlledCartesianAxisHighlight, $g = (e, t, r, i) => i ? [] : r !== void 0 ? r.filter((o) => t.axis[o.axisId] !== void 0).map((o) => o) : e === null ? [] : [{
  axisId: t.axisIds[0],
  dataIndex: e
}], Dg = Ne(Tu, rt, si, va, $g);
Ne(Su, it, si, va, $g);
const Lg = (e, t, r, i, o, s, a) => {
  if (a)
    return [];
  if (i !== void 0)
    return i.map((d) => A({}, d, {
      value: r.axis[d.axisId]?.data?.[d.dataIndex]
    })).filter(({
      value: d
    }) => d !== void 0);
  const l = t !== null && {
    axisId: r.axisIds[0],
    dataIndex: e,
    value: t
  }, c = o && r.axis[o.axisId]?.data?.[o.dataIndex], u = o && c != null && A({}, o, {
    value: c
  });
  if (s === "pointer") {
    if (l)
      return [l];
    if (u)
      return [u];
  }
  if (s === "keyboard") {
    if (u)
      return [u];
    if (l)
      return [l];
  }
  return [];
}, Sk = K(Tu, fk, rt, si, sk, ao, va, Lg), wk = K(Su, pk, it, si, ak, ao, va, Lg), Ng = (e, t) => e === void 0 ? [t.axis[t.axisIds[0]]] : e.map((i) => t.axis[i.axisId] ?? null).filter((i) => i !== null);
K(si, rt, Ng);
K(si, it, Ng);
function hp(e, t) {
  return e.id !== void 0 ? e : A({
    id: t
  }, e);
}
function mp(e) {
  return e.colorMap ? A({}, e, {
    colorScale: e.colorMap.type === "ordinal" && e.data ? Hr(A({
      values: e.data
    }, e.colorMap)) : Fr(e.colorMap.type === "continuous" ? A({
      min: e.min,
      max: e.max
    }, e.colorMap) : e.colorMap)
  }) : e;
}
function Fg(e, t) {
  if (!e || e.length === 0)
    return {
      axis: {},
      axisIds: []
    };
  const r = {}, i = [];
  return e.forEach((o, s) => {
    const a = o.dataKey, l = o.id ?? `defaultized-z-axis-${s}`;
    if (a === void 0 || o.data !== void 0) {
      r[l] = mp(hp(o, l)), i.push(l);
      return;
    }
    if (t === void 0)
      throw new Error("MUI X Charts: z-axis uses `dataKey` but no `dataset` is provided.");
    r[l] = mp(hp(A({}, o, {
      data: t.map((c) => c[a])
    }), l)), i.push(l);
  }), {
    axis: r,
    axisIds: i
  };
}
const ai = ({
  params: e,
  store: t
}) => {
  const {
    zAxis: r,
    dataset: i
  } = e, o = $.useRef(!0);
  return $.useEffect(() => {
    if (o.current) {
      o.current = !1;
      return;
    }
    t.set("zAxis", Fg(r, i));
  }, [r, i, t]), {};
};
ai.params = {
  zAxis: !0,
  dataset: !0
};
ai.getInitialState = (e) => ({
  zAxis: Fg(e.zAxis, e.dataset)
});
const Ck = (e) => e, Ek = K(Ck, (e) => e.zAxis), gr = ({
  store: e,
  params: t
}) => {
  wm({
    warningPrefix: "MUI X Charts",
    componentName: "Chart",
    propName: "highlightedItem",
    controlled: t.highlightedItem,
    defaultValue: null
  }), Fe(() => {
    e.state.highlight.item !== t.highlightedItem && e.set("highlight", A({}, e.state.highlight, {
      item: t.highlightedItem
    })), process.env.NODE_ENV !== "production" && t.highlightedItem !== void 0 && !e.state.highlight.isControlled && Mt(["MUI X Charts: The `highlightedItem` switched between controlled and uncontrolled state.", "To remove the highlight when using controlled state, you must provide `null` to the `highlightedItem` prop instead of `undefined`."].join(`
`));
  }, [e, t.highlightedItem]);
  const r = ze(() => {
    t.onHighlightChange?.(null);
    const o = e.getSnapshot().highlight;
    o.item === null || o.isControlled || e.set("highlight", {
      item: null,
      lastUpdate: "pointer",
      isControlled: !1
    });
  }), i = ze((o) => {
    const s = e.getSnapshot().highlight;
    s.isControlled || bg(s.item, o) || (t.onHighlightChange?.(o), e.set("highlight", {
      item: o,
      lastUpdate: "pointer",
      isControlled: !1
    }));
  });
  return {
    instance: {
      clearHighlight: r,
      setHighlight: i
    }
  };
};
gr.getInitialState = (e) => ({
  highlight: {
    item: e.highlightedItem,
    lastUpdate: "pointer",
    isControlled: e.highlightedItem !== void 0
  }
});
gr.params = {
  highlightedItem: !0,
  onHighlightChange: !0
};
function Ts(e) {
  let t = 1 / 0, r = -1 / 0;
  for (const i of e ?? [])
    i < t && (t = i), i > r && (r = i);
  return [t, r];
}
const gp = (e, t) => t === "x" ? {
  x: e,
  y: null
} : {
  x: null,
  y: e
}, qg = (e) => {
  const {
    axis: t,
    getFilters: r,
    isDefaultAxis: i
  } = e, o = r?.({
    currentAxisId: t.id,
    isDefaultAxis: i
  }), s = o ? t.data?.filter((a, l) => o({
    x: null,
    y: null
  }, l)) : t.data;
  return Ts(s ?? []);
}, zg = (e) => (t) => {
  const {
    series: r,
    axis: i,
    getFilters: o,
    isDefaultAxis: s
  } = t;
  return Object.keys(r).filter((a) => {
    const l = e === "x" ? r[a].xAxisId : r[a].yAxisId;
    return l === i.id || s && l === void 0;
  }).reduce((a, l) => {
    const {
      stackedData: c
    } = r[l], u = o?.({
      currentAxisId: i.id,
      isDefaultAxis: s,
      seriesXAxisId: r[l].xAxisId,
      seriesYAxisId: r[l].yAxisId
    }), [d, f] = c?.reduce((p, h, g) => u && (!u(gp(h[0], e), g) || !u(gp(h[1], e), g)) ? p : [Math.min(...h, p[0]), Math.max(...h, p[1])], [1 / 0, -1 / 0]) ?? [1 / 0, -1 / 0];
    return [Math.min(d, a[0]), Math.max(f, a[1])];
  }, [1 / 0, -1 / 0]);
}, kk = (e) => Object.keys(e.series).some((r) => e.series[r].layout === "horizontal") ? zg("x")(e) : qg(e), Rk = (e) => Object.keys(e.series).some((r) => e.series[r].layout === "horizontal") ? qg(e) : zg("y")(e);
function de(e) {
  return function() {
    return e;
  };
}
const yp = Math.abs, Ye = Math.atan2, nn = Math.cos, Ak = Math.max, hl = Math.min, at = Math.sin, Ge = Math.sqrt, Xe = 1e-12, In = Math.PI, Ss = In / 2, wn = 2 * In;
function Pk(e) {
  return e > 1 ? 0 : e < -1 ? In : Math.acos(e);
}
function bp(e) {
  return e >= 1 ? Ss : e <= -1 ? -Ss : Math.asin(e);
}
const nc = Math.PI, rc = 2 * nc, Vn = 1e-6, Ik = rc - Vn;
function Bg(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Mk(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Bg;
  const r = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let o = 1, s = i.length; o < s; ++o)
      this._ += Math.round(arguments[o] * r) / r + i[o];
  };
}
class _k {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Bg : Mk(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, i, o) {
    this._append`Q${+t},${+r},${this._x1 = +i},${this._y1 = +o}`;
  }
  bezierCurveTo(t, r, i, o, s, a) {
    this._append`C${+t},${+r},${+i},${+o},${this._x1 = +s},${this._y1 = +a}`;
  }
  arcTo(t, r, i, o, s) {
    if (t = +t, r = +r, i = +i, o = +o, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let a = this._x1, l = this._y1, c = i - t, u = o - r, d = a - t, f = l - r, p = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > Vn) if (!(Math.abs(f * c - u * d) > Vn) || !s)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = i - a, g = o - l, m = c * c + u * u, y = h * h + g * g, b = Math.sqrt(m), S = Math.sqrt(p), C = s * Math.tan((nc - Math.acos((m + p - y) / (2 * b * S))) / 2), v = C / S, O = C / b;
      Math.abs(v - 1) > Vn && this._append`L${t + v * d},${r + v * f}`, this._append`A${s},${s},0,0,${+(f * h > d * g)},${this._x1 = t + O * c},${this._y1 = r + O * u}`;
    }
  }
  arc(t, r, i, o, s, a) {
    if (t = +t, r = +r, i = +i, a = !!a, i < 0) throw new Error(`negative radius: ${i}`);
    let l = i * Math.cos(o), c = i * Math.sin(o), u = t + l, d = r + c, f = 1 ^ a, p = a ? o - s : s - o;
    this._x1 === null ? this._append`M${u},${d}` : (Math.abs(this._x1 - u) > Vn || Math.abs(this._y1 - d) > Vn) && this._append`L${u},${d}`, i && (p < 0 && (p = p % rc + rc), p > Ik ? this._append`A${i},${i},0,1,${f},${t - l},${r - c}A${i},${i},0,1,${f},${this._x1 = u},${this._y1 = d}` : p > Vn && this._append`A${i},${i},0,${+(p >= nc)},${f},${this._x1 = t + i * Math.cos(s)},${this._y1 = r + i * Math.sin(s)}`);
  }
  rect(t, r, i, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${i = +i}v${+o}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function Oa(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const i = Math.floor(r);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = i;
    }
    return e;
  }, () => new _k(t);
}
function jk(e) {
  return e.innerRadius;
}
function $k(e) {
  return e.outerRadius;
}
function Dk(e) {
  return e.startAngle;
}
function Lk(e) {
  return e.endAngle;
}
function Nk(e) {
  return e && e.padAngle;
}
function Fk(e, t, r, i, o, s, a, l) {
  var c = r - e, u = i - t, d = a - o, f = l - s, p = f * c - d * u;
  if (!(p * p < Xe))
    return p = (d * (t - s) - f * (e - o)) / p, [e + p * c, t + p * u];
}
function Fo(e, t, r, i, o, s, a) {
  var l = e - r, c = t - i, u = (a ? s : -s) / Ge(l * l + c * c), d = u * c, f = -u * l, p = e + d, h = t + f, g = r + d, m = i + f, y = (p + g) / 2, b = (h + m) / 2, S = g - p, C = m - h, v = S * S + C * C, O = o - s, w = p * m - g * h, E = (C < 0 ? -1 : 1) * Ge(Ak(0, O * O * v - w * w)), R = (w * C - S * E) / v, I = (-w * S - C * E) / v, j = (w * C + S * E) / v, _ = (-w * S + C * E) / v, T = R - y, M = I - b, P = j - y, N = _ - b;
  return T * T + M * M > P * P + N * N && (R = j, I = _), {
    cx: R,
    cy: I,
    x01: -d,
    y01: -f,
    x11: R * (o / O - 1),
    y11: I * (o / O - 1)
  };
}
function Vg() {
  var e = jk, t = $k, r = de(0), i = null, o = Dk, s = Lk, a = Nk, l = null, c = Oa(u);
  function u() {
    var d, f, p = +e.apply(this, arguments), h = +t.apply(this, arguments), g = o.apply(this, arguments) - Ss, m = s.apply(this, arguments) - Ss, y = yp(m - g), b = m > g;
    if (l || (l = d = c()), h < p && (f = h, h = p, p = f), !(h > Xe)) l.moveTo(0, 0);
    else if (y > wn - Xe)
      l.moveTo(h * nn(g), h * at(g)), l.arc(0, 0, h, g, m, !b), p > Xe && (l.moveTo(p * nn(m), p * at(m)), l.arc(0, 0, p, m, g, b));
    else {
      var S = g, C = m, v = g, O = m, w = y, E = y, R = a.apply(this, arguments) / 2, I = R > Xe && (i ? +i.apply(this, arguments) : Ge(p * p + h * h)), j = hl(yp(h - p) / 2, +r.apply(this, arguments)), _ = j, T = j, M, P;
      if (I > Xe) {
        var N = bp(I / p * at(R)), L = bp(I / h * at(R));
        (w -= N * 2) > Xe ? (N *= b ? 1 : -1, v += N, O -= N) : (w = 0, v = O = (g + m) / 2), (E -= L * 2) > Xe ? (L *= b ? 1 : -1, S += L, C -= L) : (E = 0, S = C = (g + m) / 2);
      }
      var z = h * nn(S), H = h * at(S), Z = p * nn(O), F = p * at(O);
      if (j > Xe) {
        var k = h * nn(C), B = h * at(C), G = p * nn(v), W = p * at(v), X;
        if (y < In)
          if (X = Fk(z, H, G, W, k, B, Z, F)) {
            var J = z - X[0], Q = H - X[1], te = k - X[0], V = B - X[1], Y = 1 / at(Pk((J * te + Q * V) / (Ge(J * J + Q * Q) * Ge(te * te + V * V))) / 2), ee = Ge(X[0] * X[0] + X[1] * X[1]);
            _ = hl(j, (p - ee) / (Y - 1)), T = hl(j, (h - ee) / (Y + 1));
          } else
            _ = T = 0;
      }
      E > Xe ? T > Xe ? (M = Fo(G, W, z, H, h, T, b), P = Fo(k, B, Z, F, h, T, b), l.moveTo(M.cx + M.x01, M.cy + M.y01), T < j ? l.arc(M.cx, M.cy, T, Ye(M.y01, M.x01), Ye(P.y01, P.x01), !b) : (l.arc(M.cx, M.cy, T, Ye(M.y01, M.x01), Ye(M.y11, M.x11), !b), l.arc(0, 0, h, Ye(M.cy + M.y11, M.cx + M.x11), Ye(P.cy + P.y11, P.cx + P.x11), !b), l.arc(P.cx, P.cy, T, Ye(P.y11, P.x11), Ye(P.y01, P.x01), !b))) : (l.moveTo(z, H), l.arc(0, 0, h, S, C, !b)) : l.moveTo(z, H), !(p > Xe) || !(w > Xe) ? l.lineTo(Z, F) : _ > Xe ? (M = Fo(Z, F, k, B, p, -_, b), P = Fo(z, H, G, W, p, -_, b), l.lineTo(M.cx + M.x01, M.cy + M.y01), _ < j ? l.arc(M.cx, M.cy, _, Ye(M.y01, M.x01), Ye(P.y01, P.x01), !b) : (l.arc(M.cx, M.cy, _, Ye(M.y01, M.x01), Ye(M.y11, M.x11), !b), l.arc(0, 0, p, Ye(M.cy + M.y11, M.cx + M.x11), Ye(P.cy + P.y11, P.cx + P.x11), b), l.arc(P.cx, P.cy, _, Ye(P.y11, P.x11), Ye(P.y01, P.x01), !b))) : l.arc(0, 0, p, O, v, b);
    }
    if (l.closePath(), d) return l = null, d + "" || null;
  }
  return u.centroid = function() {
    var d = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, f = (+o.apply(this, arguments) + +s.apply(this, arguments)) / 2 - In / 2;
    return [nn(f) * d, at(f) * d];
  }, u.innerRadius = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : de(+d), u) : e;
  }, u.outerRadius = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : de(+d), u) : t;
  }, u.cornerRadius = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : de(+d), u) : r;
  }, u.padRadius = function(d) {
    return arguments.length ? (i = d == null ? null : typeof d == "function" ? d : de(+d), u) : i;
  }, u.startAngle = function(d) {
    return arguments.length ? (o = typeof d == "function" ? d : de(+d), u) : o;
  }, u.endAngle = function(d) {
    return arguments.length ? (s = typeof d == "function" ? d : de(+d), u) : s;
  }, u.padAngle = function(d) {
    return arguments.length ? (a = typeof d == "function" ? d : de(+d), u) : a;
  }, u.context = function(d) {
    return arguments.length ? (l = d ?? null, u) : l;
  }, u;
}
function Ta(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Ug(e) {
  this._context = e;
}
Ug.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function wu(e) {
  return new Ug(e);
}
function Hg(e) {
  return e[0];
}
function Gg(e) {
  return e[1];
}
function Wg(e, t) {
  var r = de(!0), i = null, o = wu, s = null, a = Oa(l);
  e = typeof e == "function" ? e : e === void 0 ? Hg : de(e), t = typeof t == "function" ? t : t === void 0 ? Gg : de(t);
  function l(c) {
    var u, d = (c = Ta(c)).length, f, p = !1, h;
    for (i == null && (s = o(h = a())), u = 0; u <= d; ++u)
      !(u < d && r(f = c[u], u, c)) === p && ((p = !p) ? s.lineStart() : s.lineEnd()), p && s.point(+e(f, u, c), +t(f, u, c));
    if (h) return s = null, h + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : de(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : de(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : de(!!c), l) : r;
  }, l.curve = function(c) {
    return arguments.length ? (o = c, i != null && (s = o(i)), l) : o;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? i = s = null : s = o(i = c), l) : i;
  }, l;
}
function qk(e, t, r) {
  var i = null, o = de(!0), s = null, a = wu, l = null, c = Oa(u);
  e = typeof e == "function" ? e : e === void 0 ? Hg : de(+e), t = typeof t == "function" ? t : de(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Gg : de(+r);
  function u(f) {
    var p, h, g, m = (f = Ta(f)).length, y, b = !1, S, C = new Array(m), v = new Array(m);
    for (s == null && (l = a(S = c())), p = 0; p <= m; ++p) {
      if (!(p < m && o(y = f[p], p, f)) === b)
        if (b = !b)
          h = p, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), g = p - 1; g >= h; --g)
            l.point(C[g], v[g]);
          l.lineEnd(), l.areaEnd();
        }
      b && (C[p] = +e(y, p, f), v[p] = +t(y, p, f), l.point(i ? +i(y, p, f) : C[p], r ? +r(y, p, f) : v[p]));
    }
    if (S) return l = null, S + "" || null;
  }
  function d() {
    return Wg().defined(o).curve(a).context(s);
  }
  return u.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : de(+f), i = null, u) : e;
  }, u.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : de(+f), u) : e;
  }, u.x1 = function(f) {
    return arguments.length ? (i = f == null ? null : typeof f == "function" ? f : de(+f), u) : i;
  }, u.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : de(+f), r = null, u) : t;
  }, u.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : de(+f), u) : t;
  }, u.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : de(+f), u) : r;
  }, u.lineX0 = u.lineY0 = function() {
    return d().x(e).y(t);
  }, u.lineY1 = function() {
    return d().x(e).y(r);
  }, u.lineX1 = function() {
    return d().x(i).y(t);
  }, u.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : de(!!f), u) : o;
  }, u.curve = function(f) {
    return arguments.length ? (a = f, s != null && (l = a(s)), u) : a;
  }, u.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = a(s = f), u) : s;
  }, u;
}
function zk(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Bk(e) {
  return e;
}
function Vk() {
  var e = Bk, t = zk, r = null, i = de(0), o = de(wn), s = de(0);
  function a(l) {
    var c, u = (l = Ta(l)).length, d, f, p = 0, h = new Array(u), g = new Array(u), m = +i.apply(this, arguments), y = Math.min(wn, Math.max(-wn, o.apply(this, arguments) - m)), b, S = Math.min(Math.abs(y) / u, s.apply(this, arguments)), C = S * (y < 0 ? -1 : 1), v;
    for (c = 0; c < u; ++c)
      (v = g[h[c] = c] = +e(l[c], c, l)) > 0 && (p += v);
    for (t != null ? h.sort(function(O, w) {
      return t(g[O], g[w]);
    }) : r != null && h.sort(function(O, w) {
      return r(l[O], l[w]);
    }), c = 0, f = p ? (y - u * C) / p : 0; c < u; ++c, m = b)
      d = h[c], v = g[d], b = m + (v > 0 ? v * f : 0) + C, g[d] = {
        data: l[d],
        index: c,
        value: v,
        startAngle: m,
        endAngle: b,
        padAngle: S
      };
    return g;
  }
  return a.value = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : de(+l), a) : e;
  }, a.sortValues = function(l) {
    return arguments.length ? (t = l, r = null, a) : t;
  }, a.sort = function(l) {
    return arguments.length ? (r = l, t = null, a) : r;
  }, a.startAngle = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : de(+l), a) : i;
  }, a.endAngle = function(l) {
    return arguments.length ? (o = typeof l == "function" ? l : de(+l), a) : o;
  }, a.padAngle = function(l) {
    return arguments.length ? (s = typeof l == "function" ? l : de(+l), a) : s;
  }, a;
}
class Yg {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function Uk(e) {
  return new Yg(e, !0);
}
function Hk(e) {
  return new Yg(e, !1);
}
const Xg = {
  draw(e, t) {
    const r = Ge(t / In);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, wn);
  }
}, Gk = {
  draw(e, t) {
    const r = Ge(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, Kg = Ge(1 / 3), Wk = Kg * 2, Yk = {
  draw(e, t) {
    const r = Ge(t / Wk), i = r * Kg;
    e.moveTo(0, -r), e.lineTo(i, 0), e.lineTo(0, r), e.lineTo(-i, 0), e.closePath();
  }
}, Xk = {
  draw(e, t) {
    const r = Ge(t), i = -r / 2;
    e.rect(i, i, r, r);
  }
}, Kk = 0.8908130915292852, Zg = at(In / 10) / at(7 * In / 10), Zk = at(wn / 10) * Zg, Jk = -nn(wn / 10) * Zg, Qk = {
  draw(e, t) {
    const r = Ge(t * Kk), i = Zk * r, o = Jk * r;
    e.moveTo(0, -r), e.lineTo(i, o);
    for (let s = 1; s < 5; ++s) {
      const a = wn * s / 5, l = nn(a), c = at(a);
      e.lineTo(c * r, -l * r), e.lineTo(l * i - c * o, c * i + l * o);
    }
    e.closePath();
  }
}, ml = Ge(3), e1 = {
  draw(e, t) {
    const r = -Ge(t / (ml * 3));
    e.moveTo(0, r * 2), e.lineTo(-ml * r, -r), e.lineTo(ml * r, -r), e.closePath();
  }
}, wt = -0.5, Ct = Ge(3) / 2, ic = 1 / Ge(12), t1 = (ic / 2 + 1) * 3, n1 = {
  draw(e, t) {
    const r = Ge(t / t1), i = r / 2, o = r * ic, s = i, a = r * ic + r, l = -s, c = a;
    e.moveTo(i, o), e.lineTo(s, a), e.lineTo(l, c), e.lineTo(wt * i - Ct * o, Ct * i + wt * o), e.lineTo(wt * s - Ct * a, Ct * s + wt * a), e.lineTo(wt * l - Ct * c, Ct * l + wt * c), e.lineTo(wt * i + Ct * o, wt * o - Ct * i), e.lineTo(wt * s + Ct * a, wt * a - Ct * s), e.lineTo(wt * l + Ct * c, wt * c - Ct * l), e.closePath();
  }
}, Jg = [
  Xg,
  Gk,
  Yk,
  Xk,
  Qk,
  e1,
  n1
];
function Qg(e, t) {
  let r = null, i = Oa(o);
  e = typeof e == "function" ? e : de(e || Xg), t = typeof t == "function" ? t : de(t === void 0 ? 64 : +t);
  function o() {
    let s;
    if (r || (r = s = i()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), s) return r = null, s + "" || null;
  }
  return o.type = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : de(s), o) : e;
  }, o.size = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : de(+s), o) : t;
  }, o.context = function(s) {
    return arguments.length ? (r = s ?? null, o) : r;
  }, o;
}
function xp(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Cu(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Cu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        xp(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        xp(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
(function e(t) {
  function r(i) {
    return new Cu(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function r1(e, t, r) {
  var i = e._x1, o = e._y1, s = e._x2, a = e._y2;
  if (e._l01_a > Xe) {
    var l = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * l - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, o = (o * l - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > Xe) {
    var u = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, d = 3 * e._l23_a * (e._l23_a + e._l12_a);
    s = (s * u + e._x1 * e._l23_2a - t * e._l12_2a) / d, a = (a * u + e._y1 * e._l23_2a - r * e._l12_2a) / d;
  }
  e._context.bezierCurveTo(i, o, s, a, e._x2, e._y2);
}
function ey(e, t) {
  this._context = e, this._alpha = t;
}
ey.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        r1(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const i1 = (function e(t) {
  function r(i) {
    return t ? new ey(i, t) : new Cu(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function vp(e) {
  return e < 0 ? -1 : 1;
}
function Op(e, t, r) {
  var i = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (i || o < 0 && -0), a = (r - e._y1) / (o || i < 0 && -0), l = (s * o + a * i) / (i + o);
  return (vp(s) + vp(a)) * Math.min(Math.abs(s), Math.abs(a), 0.5 * Math.abs(l)) || 0;
}
function Tp(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function gl(e, t, r) {
  var i = e._x0, o = e._y0, s = e._x1, a = e._y1, l = (s - i) / 3;
  e._context.bezierCurveTo(i + l, o + l * t, s - l, a - l * r, s, a);
}
function ws(e) {
  this._context = e;
}
ws.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        gl(this, this._t0, Tp(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, gl(this, Tp(this, r = Op(this, e, t)), r);
          break;
        default:
          gl(this, this._t0, r = Op(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function ty(e) {
  this._context = new ny(e);
}
(ty.prototype = Object.create(ws.prototype)).point = function(e, t) {
  ws.prototype.point.call(this, t, e);
};
function ny(e) {
  this._context = e;
}
ny.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, i, o, s) {
    this._context.bezierCurveTo(t, e, i, r, s, o);
  }
};
function Sp(e) {
  return new ws(e);
}
function o1(e) {
  return new ty(e);
}
function ry(e) {
  this._context = e;
}
ry.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var i = wp(e), o = wp(t), s = 0, a = 1; a < r; ++s, ++a)
          this._context.bezierCurveTo(i[0][s], o[0][s], i[1][s], o[1][s], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function wp(e) {
  var t, r = e.length - 1, i, o = new Array(r), s = new Array(r), a = new Array(r);
  for (o[0] = 0, s[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) o[t] = 1, s[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[r - 1] = 2, s[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) i = o[t] / s[t - 1], s[t] -= i, a[t] -= i * a[t - 1];
  for (o[r - 1] = a[r - 1] / s[r - 1], t = r - 2; t >= 0; --t) o[t] = (a[t] - o[t + 1]) / s[t];
  for (s[r - 1] = (e[r] + o[r - 1]) / 2, t = 0; t < r - 1; ++t) s[t] = 2 * e[t + 1] - o[t + 1];
  return [o, s];
}
function s1(e) {
  return new ry(e);
}
function Sa(e, t) {
  this._context = e, this._t = t;
}
Sa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function a1(e) {
  return new Sa(e, 0.5);
}
function l1(e) {
  return new Sa(e, 0);
}
function c1(e) {
  return new Sa(e, 1);
}
function Wr(e, t) {
  if ((a = e.length) > 1)
    for (var r = 1, i, o, s = e[t[0]], a, l = s.length; r < a; ++r)
      for (o = s, s = e[t[r]], i = 0; i < l; ++i)
        s[i][1] += s[i][0] = isNaN(o[i][1]) ? o[i][0] : o[i][1];
}
function Yr(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function u1(e, t) {
  return e[t];
}
function d1(e) {
  const t = [];
  return t.key = e, t;
}
function iy() {
  var e = de([]), t = Yr, r = Wr, i = u1;
  function o(s) {
    var a = Array.from(e.apply(this, arguments), d1), l, c = a.length, u = -1, d;
    for (const f of s)
      for (l = 0, ++u; l < c; ++l)
        (a[l][u] = [0, +i(f, a[l].key, u, s)]).data = f;
    for (l = 0, d = Ta(t(a)); l < c; ++l)
      a[d[l]].index = l;
    return r(a, d), a;
  }
  return o.keys = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : de(Array.from(s)), o) : e;
  }, o.value = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : de(+s), o) : i;
  }, o.order = function(s) {
    return arguments.length ? (t = s == null ? Yr : typeof s == "function" ? s : de(Array.from(s)), o) : t;
  }, o.offset = function(s) {
    return arguments.length ? (r = s ?? Wr, o) : r;
  }, o;
}
function f1(e, t) {
  if ((i = e.length) > 0) {
    for (var r, i, o = 0, s = e[0].length, a; o < s; ++o) {
      for (a = r = 0; r < i; ++r) a += e[r][o][1] || 0;
      if (a) for (r = 0; r < i; ++r) e[r][o][1] /= a;
    }
    Wr(e, t);
  }
}
function p1(e, t) {
  if ((c = e.length) > 0)
    for (var r, i = 0, o, s, a, l, c, u = e[t[0]].length; i < u; ++i)
      for (a = l = 0, r = 0; r < c; ++r)
        (s = (o = e[t[r]][i])[1] - o[0]) > 0 ? (o[0] = a, o[1] = a += s) : s < 0 ? (o[1] = l, o[0] = l += s) : (o[0] = 0, o[1] = s);
}
function h1(e, t) {
  if ((o = e.length) > 0) {
    for (var r = 0, i = e[t[0]], o, s = i.length; r < s; ++r) {
      for (var a = 0, l = 0; a < o; ++a) l += e[a][r][1] || 0;
      i[r][1] += i[r][0] = -l / 2;
    }
    Wr(e, t);
  }
}
function m1(e, t) {
  if (!(!((a = e.length) > 0) || !((s = (o = e[t[0]]).length) > 0))) {
    for (var r = 0, i = 1, o, s, a; i < s; ++i) {
      for (var l = 0, c = 0, u = 0; l < a; ++l) {
        for (var d = e[t[l]], f = d[i][1] || 0, p = d[i - 1][1] || 0, h = (f - p) / 2, g = 0; g < l; ++g) {
          var m = e[t[g]], y = m[i][1] || 0, b = m[i - 1][1] || 0;
          h += y - b;
        }
        c += f, u += h * f;
      }
      o[i - 1][1] += o[i - 1][0] = r, c && (r -= u / c);
    }
    o[i - 1][1] += o[i - 1][0] = r, Wr(e, t);
  }
}
function oy(e) {
  var t = e.map(g1);
  return Yr(e).sort(function(r, i) {
    return t[r] - t[i];
  });
}
function g1(e) {
  for (var t = -1, r = 0, i = e.length, o, s = -1 / 0; ++t < i; ) (o = +e[t][1]) > s && (s = o, r = t);
  return r;
}
function sy(e) {
  var t = e.map(ay);
  return Yr(e).sort(function(r, i) {
    return t[r] - t[i];
  });
}
function ay(e) {
  for (var t = 0, r = -1, i = e.length, o; ++r < i; ) (o = +e[r][1]) && (t += o);
  return t;
}
function y1(e) {
  return sy(e).reverse();
}
function b1(e) {
  var t = e.length, r, i, o = e.map(ay), s = oy(e), a = 0, l = 0, c = [], u = [];
  for (r = 0; r < t; ++r)
    i = s[r], a < l ? (a += o[i], c.push(i)) : (l += o[i], u.push(i));
  return u.reverse().concat(c);
}
function x1(e) {
  return Yr(e).reverse();
}
const yl = {
  /**
   * Series order such that the earliest series (according to the maximum value) is at the bottom.
   * */
  appearance: oy,
  /**
   *  Series order such that the smallest series (according to the sum of values) is at the bottom.
   * */
  ascending: sy,
  /**
   * Series order such that the largest series (according to the sum of values) is at the bottom.
   */
  descending: y1,
  /**
   * Series order such that the earliest series (according to the maximum value) are on the inside and the later series are on the outside. This order is recommended for streamgraphs in conjunction with the wiggle offset. See Stacked Graphs—Geometry & Aesthetics by Byron & Wattenberg for more information.
   */
  insideOut: b1,
  /**
   * Given series order [0, 1, … n - 1] where n is the number of elements in series. Thus, the stack order is given by the key accessor.
   */
  none: Yr,
  /**
   * Reverse of the given series order [n - 1, n - 2, … 0] where n is the number of elements in series. Thus, the stack order is given by the reverse of the key accessor.
   */
  reverse: x1
}, bl = {
  /**
   * Applies a zero baseline and normalizes the values for each point such that the topline is always one.
   * */
  expand: f1,
  /**
   * Positive values are stacked above zero, negative values are stacked below zero, and zero values are stacked at zero.
   * */
  diverging: p1,
  /**
   * Applies a zero baseline.
   * */
  none: Wr,
  /**
   * Shifts the baseline down such that the center of the streamgraph is always at zero.
   * */
  silhouette: h1,
  /**
   * Shifts the baseline so as to minimize the weighted wiggle of layers. This offset is recommended for streamgraphs in conjunction with the inside-out order. See Stacked Graphs—Geometry & Aesthetics by Bryon & Wattenberg for more information.
   * */
  wiggle: m1
}, ly = (e) => {
  const {
    series: t,
    seriesOrder: r,
    defaultStrategy: i
  } = e, o = [], s = {};
  return r.forEach((a) => {
    const {
      stack: l,
      stackOrder: c,
      stackOffset: u
    } = t[a];
    l === void 0 ? o.push({
      ids: [a],
      stackingOrder: yl.none,
      stackingOffset: bl.none
    }) : s[l] === void 0 ? (s[l] = o.length, o.push({
      ids: [a],
      stackingOrder: yl[c ?? i?.stackOrder ?? "none"],
      stackingOffset: bl[u ?? i?.stackOffset ?? "diverging"]
    })) : (o[s[l]].ids.push(a), c !== void 0 && (o[s[l]].stackingOrder = yl[c]), u !== void 0 && (o[s[l]].stackingOffset = bl[u]));
  }), o;
}, v1 = (e) => e == null ? "" : e.toLocaleString(), O1 = (e, t) => {
  const {
    seriesOrder: r,
    series: i
  } = e, o = ly(e), s = t ?? [];
  r.forEach((l) => {
    const c = i[l].data;
    if (c !== void 0)
      c.forEach((u, d) => {
        s.length <= d ? s.push({
          [l]: u
        }) : s[d][l] = u;
      });
    else if (t === void 0)
      throw new Error([`MUI X Charts: bar series with id='${l}' has no data.`, "Either provide a data property to the series or use the dataset prop."].join(`
`));
    if (process.env.NODE_ENV !== "production" && !c && t) {
      const u = i[l].dataKey;
      if (!u)
        throw new Error([`MUI X Charts: bar series with id='${l}' has no data and no dataKey.`, "You must provide a dataKey when using the dataset prop."].join(`
`));
      t.forEach((d, f) => {
        const p = d[u];
        p != null && typeof p != "number" && Mt([`MUI X Charts: your dataset key "${u}" is used for plotting bars, but the dataset contains the non-null non-numerical element "${p}" at index ${f}.`, "Bar plots only support numeric and null values."].join(`
`));
      });
    }
  });
  const a = {};
  return o.forEach((l) => {
    const {
      ids: c,
      stackingOffset: u,
      stackingOrder: d
    } = l, f = iy().keys(c.map((p) => {
      const h = i[p].dataKey;
      return i[p].data === void 0 && h !== void 0 ? h : p;
    })).value((p, h) => p[h] ?? 0).order(d).offset(u)(s);
    c.forEach((p, h) => {
      const g = i[p].dataKey;
      a[p] = A({
        layout: "vertical",
        labelMarkType: "square",
        minBarSize: 0,
        valueFormatter: i[p].valueFormatter ?? v1
      }, i[p], {
        data: g ? t.map((m) => {
          const y = m[g];
          return typeof y == "number" ? y : null;
        }) : i[p].data,
        stackedData: f[h].map(([m, y]) => [m, y])
      });
    });
  }), {
    seriesOrder: r,
    stackingGroups: o,
    series: a
  };
};
function xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
const T1 = (e) => {
  const {
    seriesOrder: t,
    series: r
  } = e;
  return t.reduce((i, o) => {
    const s = xt(r[o].label, "legend");
    return s === void 0 || i.push({
      markType: r[o].labelMarkType,
      id: o,
      seriesId: o,
      color: r[o].color,
      label: s
    }), i;
  }, []);
};
function Eu(e) {
  return e.colorGetter ? e.colorGetter : () => e.color;
}
const cy = (e, t, r) => {
  const i = e.layout === "vertical", o = i ? t?.colorScale : r?.colorScale, s = i ? r?.colorScale : t?.colorScale, a = i ? t?.data : r?.data, l = Eu(e);
  return s ? (c) => {
    if (c === void 0)
      return e.color;
    const u = e.data[c], d = u === null ? l({
      value: u,
      dataIndex: c
    }) : s(u);
    return d === null ? l({
      value: u,
      dataIndex: c
    }) : d;
  } : o && a ? (c) => {
    if (c === void 0)
      return e.color;
    const u = a[c], d = u === null ? l({
      value: u,
      dataIndex: c
    }) : o(u);
    return d === null ? l({
      value: u,
      dataIndex: c
    }) : d;
  } : (c) => {
    if (c === void 0)
      return e.color;
    const u = e.data[c];
    return l({
      value: u,
      dataIndex: c
    });
  };
}, S1 = (e) => {
  const {
    series: t,
    getColor: r,
    identifier: i
  } = e;
  if (!i || i.dataIndex === void 0)
    return null;
  const o = xt(t.label, "tooltip"), s = t.data[i.dataIndex];
  if (s == null)
    return null;
  const a = t.valueFormatter(s, {
    dataIndex: i.dataIndex
  });
  return {
    identifier: i,
    color: r(i.dataIndex),
    label: o,
    value: s,
    formattedValue: a,
    markType: t.labelMarkType
  };
}, w1 = (e) => Object.values(e).map((t) => t.layout === "horizontal" ? {
  direction: "y",
  axisId: t.yAxisId
} : {
  direction: "x",
  axisId: t.xAxisId
});
function we() {
  const e = Tt();
  if (!e)
    throw new Error(["MUI X Charts: Could not find the charts context.", "It looks like you rendered your component outside of a ChartContainer parent component."].join(`
`));
  return e.store;
}
function gt() {
  const e = we();
  return ie(e, mt);
}
function lo() {
  const e = we();
  return ie(e, vS);
}
function ku(e) {
  return rg.getTypes().has(e);
}
const C1 = (e, t, r, i, o, s, a) => {
  const l = i === "rotation" ? o[t].rotationExtremumGetter : o[t].radiusExtremumGetter, c = a[t]?.series ?? {}, [u, d] = l?.({
    series: c,
    axis: r,
    axisIndex: s,
    isDefaultAxis: s === 0
  }) ?? [1 / 0, -1 / 0], [f, p] = e;
  return [Math.min(u, f), Math.max(d, p)];
}, E1 = (e, t, r, i, o) => {
  const a = Object.keys(r).filter(ku).reduce((l, c) => C1(l, c, e, t, r, i, o), [1 / 0, -1 / 0]);
  return Number.isNaN(a[0]) || Number.isNaN(a[1]) ? [1 / 0, -1 / 0] : a;
}, ln = (e, t) => e === void 0 ? t : Math.PI * e / 180, k1 = (e, t, r, i) => {
  const o = /* @__PURE__ */ new Set();
  return Object.keys(t).filter(ku).forEach((a) => {
    const l = r[a]?.series ?? {}, c = t[a].axisTooltipGetter?.(l);
    c !== void 0 && c.forEach(({
      axisId: u,
      direction: d
    }) => {
      d === e && o.add(u ?? i);
    });
  }), o;
};
function R1(e, t, r) {
  if (t === "rotation") {
    if (r.scaleType === "point") {
      const i = [ln(r.startAngle, 0), ln(r.endAngle, 2 * Math.PI)], o = i[1] - i[0];
      return o > Math.PI * 2 - 0.1 && (i[1] -= o / r.data.length), i;
    }
    return [ln(r.startAngle, 0), ln(r.endAngle, 2 * Math.PI)];
  }
  return [0, Math.min(e.height, e.width) / 2];
}
const A1 = 0.2, P1 = 0.1;
function uy({
  drawingArea: e,
  formattedSeries: t,
  axis: r,
  seriesConfig: i,
  axisDirection: o
}) {
  if (r === void 0)
    return {
      axis: {},
      axisIds: []
    };
  const s = k1(o, i, t, r[0].id), a = {};
  return r.forEach((l, c) => {
    const u = l, d = R1(e, o, u), [f, p] = E1(u, o, i, c, t), h = !u.ignoreTooltip && s.has(u.id), g = u.data ?? [];
    if (dn(u)) {
      const I = u.categoryGapRatio ?? A1, j = u.barGapRatio ?? P1;
      if (a[u.id] = A({
        offset: 0,
        categoryGapRatio: I,
        barGapRatio: j,
        triggerTooltip: h
      }, u, {
        data: g,
        scale: da(u.data, d).paddingInner(I).paddingOuter(I / 2),
        tickNumber: u.data.length,
        colorScale: u.colorMap && (u.colorMap.type === "ordinal" ? Hr(A({
          values: u.data
        }, u.colorMap)) : Fr(u.colorMap))
      }), Jl(u.data)) {
        const _ = Ql(u.data, d, u.tickNumber);
        a[u.id].valueFormatter = u.valueFormatter ?? _;
      }
    }
    if (Dn(u) && (a[u.id] = A({
      offset: 0,
      triggerTooltip: h
    }, u, {
      data: g,
      scale: tg(u.data, d),
      tickNumber: u.data.length,
      colorScale: u.colorMap && (u.colorMap.type === "ordinal" ? Hr(A({
        values: u.data
      }, u.colorMap)) : Fr(u.colorMap))
    }), Jl(u.data))) {
      const I = Ql(u.data, d, u.tickNumber);
      a[u.id].valueFormatter = u.valueFormatter ?? I;
    }
    if (!YS(u))
      return;
    const m = u.scaleType ?? "linear", y = u.domainLimit ?? "nice", b = [u.min ?? f, u.max ?? p];
    if (typeof y == "function") {
      const {
        min: I,
        max: j
      } = y(f, p);
      b[0] = I, b[1] = j;
    }
    const S = Qm(u, b, bu(Math.abs(d[1] - d[0]))), C = eg(S, d), v = fa(m, b, d), O = y === "nice" ? v.nice(S) : v, [w, E] = O.domain(), R = [u.min ?? w, u.max ?? E];
    a[u.id] = A({
      offset: 0,
      triggerTooltip: h
    }, u, {
      data: g,
      scaleType: m,
      scale: O.domain(R),
      tickNumber: C,
      colorScale: u.colorMap && Fr(u.colorMap)
    });
  }), {
    axis: a,
    axisIds: r.map(({
      id: l
    }) => l)
  };
}
const dy = (e) => e.polarAxis, fy = K(dy, (e) => e?.rotation), I1 = K(dy, (e) => e?.radius), yr = K(fy, mt, Me, Ot, (e, t, r, i) => uy({
  drawingArea: t,
  formattedSeries: r,
  axis: e,
  seriesConfig: i,
  axisDirection: "rotation"
}));
K(I1, mt, Me, Ot, (e, t, r, i) => uy({
  drawingArea: t,
  formattedSeries: r,
  axis: e,
  seriesConfig: i,
  axisDirection: "radius"
}));
const M1 = K(mt, (e) => ({
  cx: e.left + e.width / 2,
  cy: e.top + e.height / 2
})), _1 = (e) => (t, r) => Math.atan2(t - e.cx, e.cy - r);
function wa(e) {
  return (e % 360 + 360) % 360;
}
const xl = 2 * Math.PI;
function j1(e) {
  return (e % xl + xl) % xl;
}
function Cp(e, t) {
  const {
    scale: r,
    data: i,
    reverse: o
  } = e;
  if (!Ue(r))
    throw new Error("MUI X Charts: getAxisValue is not implemented for polare continuous axes.");
  if (!i)
    return -1;
  const s = j1(t - Math.min(...r.range())), a = r.bandwidth() === 0 ? Math.floor((s + r.step() / 2) / r.step()) % i.length : Math.floor(s / r.step());
  return a < 0 || a >= i.length ? -1 : o ? i.length - 1 - a : a;
}
function Je() {
  const e = we(), {
    axis: t,
    axisIds: r
  } = ie(e, rt);
  return {
    xAxis: t,
    xAxisIds: r
  };
}
function Qe() {
  const e = we(), {
    axis: t,
    axisIds: r
  } = ie(e, it);
  return {
    yAxis: t,
    yAxisIds: r
  };
}
function $1(e) {
  const t = we(), {
    axis: r,
    axisIds: i
  } = ie(t, rt), o = i[0];
  return r[o];
}
function D1(e) {
  const t = we(), {
    axis: r,
    axisIds: i
  } = ie(t, it), o = i[0];
  return r[o];
}
function py() {
  const e = we(), {
    axis: t,
    axisIds: r
  } = ie(e, yr);
  return {
    rotationAxis: t,
    rotationAxisIds: r
  };
}
function L1(e) {
  const t = we(), {
    axis: r,
    axisIds: i
  } = ie(t, yr), o = i[0];
  return r[o];
}
function li(e) {
  if (Ue(e))
    return (r) => (e(r) ?? 0) + e.bandwidth() / 2;
  const t = e.domain();
  return t[0] === t[1] ? (r) => r === t[0] ? e(r) : NaN : (r) => e(r);
}
function Ru() {
  const e = we(), {
    axis: t,
    axisIds: r
  } = ie(e, Ek) ?? {
    axis: {},
    axisIds: []
  };
  return {
    zAxis: t,
    zAxisIds: r
  };
}
function Au() {
  const e = Tt();
  if (!e)
    throw new Error(["MUI X Charts: Could not find the svg ref context.", "It looks like you rendered your component outside of a ChartContainer parent component."].join(`
`));
  return e.svgRef;
}
function Ca() {
  const e = we();
  return ie(e, Me);
}
const N1 = K(Me, (e, t) => e[t]);
Ne(Me, (e, t, r) => {
  if (!r || Array.isArray(r) && r.length === 0)
    return e[t]?.seriesOrder?.map((s) => e[t]?.series[s]) ?? [];
  if (!Array.isArray(r))
    return e[t]?.series?.[r];
  const i = [], o = [];
  for (const s of r) {
    const a = e[t]?.series?.[s];
    a ? i.push(a) : o.push(s);
  }
  if (process.env.NODE_ENV !== "production" && o.length > 0) {
    const s = o.map((l) => JSON.stringify(l)).join(", "), a = `use${t.charAt(0).toUpperCase()}${t.slice(1)}Series`;
    Mt([`MUI X Charts: The following ids provided to "${a}" could not be found: ${s}.`, `Make sure that they exist and their series are using the "${t}" series type.`]);
  }
  return i;
});
const Pu = (e) => {
  const t = we();
  return ie(t, N1, e);
};
function F1() {
  return Pu("pie");
}
function q1() {
  return Pu("bar");
}
function co() {
  return Pu("line");
}
function z1() {
  return !1;
}
function hy(e, t) {
  return !e || !t ? z1 : function(i) {
    return i ? e.highlight === "series" ? i.seriesId === t.seriesId : e.highlight === "item" ? i.dataIndex === t.dataIndex && i.seriesId === t.seriesId : !1 : !1;
  };
}
function B1() {
  return !1;
}
function my(e, t) {
  return !e || !t ? B1 : function(i) {
    return i ? e.fade === "series" ? i.seriesId === t.seriesId && i.dataIndex !== t.dataIndex : e.fade === "global" ? i.seriesId !== t.seriesId || i.dataIndex !== t.dataIndex : !1 : !1;
  };
}
function Iu(e, t, r) {
  return e?.highlight === "series" && t?.seriesId === r;
}
function V1(e, t, r) {
  return Iu(e, t, r) ? !1 : e?.fade === "global" && t != null || e?.fade === "series" && t?.seriesId === r;
}
function gy(e, t, r) {
  return e?.highlight === "item" && t?.seriesId === r ? t.dataIndex : null;
}
function U1(e, t, r) {
  return Iu(e, t, r) || gy(e, t, r) === t?.dataIndex ? null : (e?.fade === "series" || e?.fade === "global") && t?.seriesId === r ? t.dataIndex : null;
}
const H1 = (e) => e.highlight, G1 = K(Me, (e) => {
  const t = /* @__PURE__ */ new Map();
  return Object.keys(e).forEach((r) => {
    const i = e[r];
    i?.seriesOrder?.forEach((o) => {
      const s = i?.series[o];
      t.set(o, s?.highlightScope);
    });
  }), t;
}), bn = Ne(H1, Eg, function(t, r) {
  return t.isControlled || t.lastUpdate === "pointer" ? t.item : r;
}), Fn = K(G1, bn, function(t, r) {
  if (!r)
    return null;
  const i = t.get(r.seriesId);
  return i === void 0 ? null : i;
}), W1 = K(Fn, bn, hy), Y1 = K(Fn, bn, my), X1 = K(Fn, bn, function(t, r, i) {
  return hy(t, r)(i);
});
K(Fn, bn, Iu);
K(Fn, bn, V1);
K(Fn, bn, U1);
K(Fn, bn, gy);
const K1 = K(Fn, bn, function(t, r, i) {
  return my(t, r)(i);
});
function Ea(e) {
  const t = we(), r = ie(t, X1, e), i = ie(t, K1, e);
  return {
    isHighlighted: r,
    isFaded: !r && i
  };
}
function yy() {
  const e = we(), t = ie(e, W1), r = ie(e, Y1);
  return {
    isHighlighted: t,
    isFaded: r
  };
}
function Z1(e, t) {
  return Object.keys(e).flatMap((r) => {
    const i = t[r].legendGetter;
    return i === void 0 ? [] : i(e[r]);
  });
}
function J1() {
  const e = Ca(), t = we(), r = ie(t, Ot);
  return {
    items: Z1(e, r)
  };
}
function Mu() {
  const e = lo();
  return $.useCallback((t) => `${e}-gradient-${t}`, [e]);
}
function Q1() {
  const e = lo();
  return $.useCallback((t) => `${e}-gradient-${t}-object-bound`, [e]);
}
var vl, Ep;
function eR() {
  if (Ep) return vl;
  Ep = 1;
  var e = 4, t = 1e-3, r = 1e-7, i = 10, o = 11, s = 1 / (o - 1), a = typeof Float32Array == "function";
  function l(m, y) {
    return 1 - 3 * y + 3 * m;
  }
  function c(m, y) {
    return 3 * y - 6 * m;
  }
  function u(m) {
    return 3 * m;
  }
  function d(m, y, b) {
    return ((l(y, b) * m + c(y, b)) * m + u(y)) * m;
  }
  function f(m, y, b) {
    return 3 * l(y, b) * m * m + 2 * c(y, b) * m + u(y);
  }
  function p(m, y, b, S, C) {
    var v, O, w = 0;
    do
      O = y + (b - y) / 2, v = d(O, S, C) - m, v > 0 ? b = O : y = O;
    while (Math.abs(v) > r && ++w < i);
    return O;
  }
  function h(m, y, b, S) {
    for (var C = 0; C < e; ++C) {
      var v = f(y, b, S);
      if (v === 0)
        return y;
      var O = d(y, b, S) - m;
      y -= O / v;
    }
    return y;
  }
  function g(m) {
    return m;
  }
  return vl = function(y, b, S, C) {
    if (!(0 <= y && y <= 1 && 0 <= S && S <= 1))
      throw new Error("bezier x values must be in [0, 1] range");
    if (y === b && S === C)
      return g;
    for (var v = a ? new Float32Array(o) : new Array(o), O = 0; O < o; ++O)
      v[O] = d(O * s, y, S);
    function w(E) {
      for (var R = 0, I = 1, j = o - 1; I !== j && v[I] <= E; ++I)
        R += s;
      --I;
      var _ = (E - v[I]) / (v[I + 1] - v[I]), T = R + _ * s, M = f(T, y, S);
      return M >= t ? h(E, T, y, S) : M === 0 ? T : p(E, R, R + s, y, S);
    }
    return function(R) {
      return R === 0 ? 0 : R === 1 ? 1 : d(w(R), b, C);
    };
  }, vl;
}
var tR = eR();
const nR = /* @__PURE__ */ _c(tR), ci = 300, uo = "cubic-bezier(0.66, 0, 0.34, 1)", rR = nR(0.66, 0, 0.34, 1);
var Xr = 0, Ri = 0, Ti = 0, by = 1e3, Cs, Ai, Es = 0, sr = 0, ka = 0, Bi = typeof performance == "object" && performance.now ? performance : Date, xy = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function _u() {
  return sr || (xy(iR), sr = Bi.now() + ka);
}
function iR() {
  sr = 0;
}
function ks() {
  this._call = this._time = this._next = null;
}
ks.prototype = vy.prototype = {
  constructor: ks,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? _u() : +r) + (t == null ? 0 : +t), !this._next && Ai !== this && (Ai ? Ai._next = this : Cs = this, Ai = this), this._call = e, this._time = r, oc();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, oc());
  }
};
function vy(e, t, r) {
  var i = new ks();
  return i.restart(e, t, r), i;
}
function oR() {
  _u(), ++Xr;
  for (var e = Cs, t; e; )
    (t = sr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Xr;
}
function kp() {
  sr = (Es = Bi.now()) + ka, Xr = Ri = 0;
  try {
    oR();
  } finally {
    Xr = 0, aR(), sr = 0;
  }
}
function sR() {
  var e = Bi.now(), t = e - Es;
  t > by && (ka -= t, Es = e);
}
function aR() {
  for (var e, t = Cs, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Cs = r);
  Ai = e, oc(i);
}
function oc(e) {
  if (!Xr) {
    Ri && (Ri = clearTimeout(Ri));
    var t = e - sr;
    t > 24 ? (e < 1 / 0 && (Ri = setTimeout(kp, e - Bi.now() - ka)), Ti && (Ti = clearInterval(Ti))) : (Ti || (Es = Bi.now(), Ti = setInterval(sR, by)), Xr = 1, xy(kp));
  }
}
function lR(e, t, r) {
  var i = new ks();
  return t = t == null ? 0 : +t, i.restart((o) => {
    i.stop(), e(o + t);
  }, t, r), i;
}
class cR {
  elapsed = 0;
  timer = null;
  /**
   * Create a new ResumableTransition.
   * @param duration Duration in milliseconds
   * @param easingFn The easing function
   * @param onTick Callback function called on each animation frame with the eased time in range [0, 1].
   */
  constructor(t, r, i) {
    this.duration = t, this.easingFn = r, this.onTickCallback = i, this.resume();
  }
  get running() {
    return this.timer !== null;
  }
  timerCallback(t) {
    this.elapsed = Math.min(t, this.duration);
    const r = this.duration === 0 ? 1 : this.elapsed / this.duration, i = this.easingFn(r);
    this.onTickCallback(i), this.elapsed >= this.duration && this.stop();
  }
  /**
   * Resume the transition
   */
  resume() {
    if (this.running || this.elapsed >= this.duration)
      return this;
    const t = _u() - this.elapsed;
    return this.timer = vy((r) => this.timerCallback(r), 0, t), this;
  }
  /**
   * Stops the transition.
   */
  stop() {
    return this.running ? (this.timer && (this.timer.stop(), this.timer = null), this) : this;
  }
  /**
   * Immediately finishes the transition and calls the tick callback with the final value.
   */
  finish() {
    return this.stop(), lR(() => this.timerCallback(this.duration)), this;
  }
}
function uR(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), i = Object.keys(t);
  if (r.length !== i.length)
    return !1;
  for (let o = 0; o < r.length; o += 1) {
    const s = r[o];
    if (!Object.prototype.hasOwnProperty.call(t, s) || // @ts-ignore
    !Object.is(e[s], t[s]))
      return !1;
  }
  return !0;
}
function dR(e, {
  createInterpolator: t,
  applyProps: r,
  skip: i,
  initialProps: o = e
}) {
  const s = $.useRef(o), a = $.useRef(null), l = $.useRef(null), c = $.useRef(e);
  Fe(() => {
    c.current = e;
  }, [e]), Fe(() => {
    i && (a.current?.finish(), a.current = null, l.current = null, s.current = e);
  }, [e, i]);
  const u = $.useCallback((f) => {
    const p = s.current, h = t(p, e);
    a.current = new cR(ci, rR, (g) => {
      const m = h(g);
      s.current = m, r(f, m);
    });
  }, [r, t, e]);
  return [$.useCallback((f) => {
    if (f === null) {
      a.current?.stop();
      return;
    }
    const p = l.current;
    if (p === f) {
      if (uR(c.current, e)) {
        a.current?.resume();
        return;
      }
      a.current?.stop();
    }
    p && a.current?.stop(), l.current = f, (a.current || !i) && u(f);
  }, [u, e, i]), s.current];
}
function br(e, {
  createInterpolator: t,
  transformProps: r,
  applyProps: i,
  skip: o,
  initialProps: s = e,
  ref: a
}) {
  const l = r ?? ((f) => f), [c, u] = dR(e, {
    initialProps: s,
    createInterpolator: t,
    applyProps: (f, p) => i(f, l(p)),
    skip: o
  }), d = r(o ? e : u);
  return A({}, d, {
    ref: Pn(c, a)
  });
}
function fR(e) {
  return br({
    d: e.d
  }, {
    createInterpolator: (t, r) => {
      const i = ou(t.d, r.d);
      return (o) => ({
        d: i(o)
      });
    },
    applyProps: (t, {
      d: r
    }) => t.setAttribute("d", r),
    transformProps: (t) => t,
    skip: e.skipAnimation,
    ref: e.ref
  });
}
function pR(e, t) {
  const r = me(e.x, t.x), i = me(e.y, t.y), o = me(e.width, t.width), s = me(e.height, t.height);
  return (a) => ({
    x: r(a),
    y: i(a),
    width: o(a),
    height: s(a)
  });
}
function hR(e) {
  const t = {
    x: e.layout === "vertical" ? e.x : e.xOrigin,
    y: e.layout === "vertical" ? e.yOrigin : e.y,
    width: e.layout === "vertical" ? e.width : 0,
    height: e.layout === "vertical" ? 0 : e.height
  };
  return br({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height
  }, {
    createInterpolator: pR,
    applyProps(r, i) {
      r.setAttribute("x", i.x.toString()), r.setAttribute("y", i.y.toString()), r.setAttribute("width", i.width.toString()), r.setAttribute("height", i.height.toString());
    },
    transformProps: (r) => r,
    initialProps: t,
    skip: e.skipAnimation,
    ref: e.ref
  });
}
function mR(e, t) {
  const r = me(e.x, t.x), i = me(e.y, t.y), o = me(e.width, t.width), s = me(e.height, t.height);
  return (a) => ({
    x: r(a),
    y: i(a),
    width: o(a),
    height: s(a)
  });
}
function gR(e) {
  const {
    initialX: t,
    currentX: r,
    initialY: i,
    currentY: o
  } = e.placement === "outside" ? bR(e) : yR(e), s = {
    x: t,
    y: i,
    width: e.width,
    height: e.height
  }, a = {
    x: r,
    y: o,
    width: e.width,
    height: e.height
  };
  return br(a, {
    createInterpolator: mR,
    transformProps: (l) => l,
    applyProps(l, c) {
      l.setAttribute("x", c.x.toString()), l.setAttribute("y", c.y.toString()), l.setAttribute("width", c.width.toString()), l.setAttribute("height", c.height.toString());
    },
    initialProps: s,
    skip: e.skipAnimation,
    ref: e.ref
  });
}
const Pr = 4;
function yR(e) {
  return {
    initialX: e.layout === "vertical" ? e.x + e.width / 2 : e.xOrigin,
    initialY: e.layout === "vertical" ? e.yOrigin : e.y + e.height / 2,
    currentX: e.x + e.width / 2,
    currentY: e.y + e.height / 2
  };
}
function bR(e) {
  let t = 0, r = 0, i = 0, o = 0;
  return e.layout === "vertical" ? (e.y < e.yOrigin ? (t = e.yOrigin - Pr, r = e.y - Pr) : (t = e.yOrigin + Pr, r = e.y + e.height + Pr), {
    initialX: e.x + e.width / 2,
    currentX: e.x + e.width / 2,
    initialY: t,
    currentY: r
  }) : (e.x < e.xOrigin ? (i = e.xOrigin, o = e.x - Pr) : (i = e.xOrigin, o = e.x + e.width + Pr), {
    initialX: i,
    currentX: o,
    initialY: e.y + e.height / 2,
    currentY: e.y + e.height / 2
  });
}
function xR(e) {
  return br({
    d: e.d
  }, {
    createInterpolator: (t, r) => {
      const i = ou(t.d, r.d);
      return (o) => ({
        d: i(o)
      });
    },
    applyProps: (t, {
      d: r
    }) => t.setAttribute("d", r),
    skip: e.skipAnimation,
    transformProps: (t) => t,
    ref: e.ref
  });
}
function vR(e, t) {
  const r = me(e.startAngle, t.startAngle), i = me(e.endAngle, t.endAngle), o = me(e.innerRadius, t.innerRadius), s = me(e.outerRadius, t.outerRadius), a = me(e.paddingAngle, t.paddingAngle), l = me(e.cornerRadius, t.cornerRadius);
  return (c) => ({
    startAngle: r(c),
    endAngle: i(c),
    innerRadius: o(c),
    outerRadius: s(c),
    paddingAngle: a(c),
    cornerRadius: l(c)
  });
}
function OR(e) {
  const t = {
    startAngle: (e.startAngle + e.endAngle) / 2,
    endAngle: (e.startAngle + e.endAngle) / 2,
    innerRadius: e.innerRadius,
    outerRadius: e.outerRadius,
    paddingAngle: e.paddingAngle,
    cornerRadius: e.cornerRadius
  };
  return br({
    startAngle: e.startAngle,
    endAngle: e.endAngle,
    innerRadius: e.innerRadius,
    outerRadius: e.outerRadius,
    paddingAngle: e.paddingAngle,
    cornerRadius: e.cornerRadius
  }, {
    createInterpolator: vR,
    transformProps: (r) => ({
      d: Vg().cornerRadius(r.cornerRadius)({
        padAngle: r.paddingAngle,
        innerRadius: r.innerRadius,
        outerRadius: r.outerRadius,
        startAngle: r.startAngle,
        endAngle: r.endAngle
      }),
      visibility: r.startAngle === r.endAngle ? "hidden" : "visible"
    }),
    applyProps(r, i) {
      r.setAttribute("d", i.d), r.setAttribute("visibility", i.visibility);
    },
    initialProps: t,
    skip: e.skipAnimation,
    ref: e.ref
  });
}
function TR(e, t) {
  const r = me(e.startAngle, t.startAngle), i = me(e.endAngle, t.endAngle), o = me(e.innerRadius, t.innerRadius), s = me(e.outerRadius, t.outerRadius), a = me(e.paddingAngle, t.paddingAngle), l = me(e.cornerRadius, t.cornerRadius);
  return (c) => ({
    startAngle: r(c),
    endAngle: i(c),
    innerRadius: o(c),
    outerRadius: s(c),
    paddingAngle: a(c),
    cornerRadius: l(c)
  });
}
function SR(e) {
  const t = {
    startAngle: (e.startAngle + e.endAngle) / 2,
    endAngle: (e.startAngle + e.endAngle) / 2,
    innerRadius: e.arcLabelRadius ?? e.innerRadius,
    outerRadius: e.arcLabelRadius ?? e.outerRadius,
    paddingAngle: e.paddingAngle,
    cornerRadius: e.cornerRadius
  };
  return br({
    startAngle: e.startAngle,
    endAngle: e.endAngle,
    innerRadius: e.arcLabelRadius ?? e.innerRadius,
    outerRadius: e.arcLabelRadius ?? e.outerRadius,
    paddingAngle: e.paddingAngle,
    cornerRadius: e.cornerRadius
  }, {
    createInterpolator: TR,
    transformProps: (r) => {
      const [i, o] = Vg().cornerRadius(r.cornerRadius).centroid({
        padAngle: r.paddingAngle,
        startAngle: r.startAngle,
        endAngle: r.endAngle,
        innerRadius: r.innerRadius,
        outerRadius: r.outerRadius
      });
      return {
        x: i,
        y: o
      };
    },
    applyProps(r, {
      x: i,
      y: o
    }) {
      r.setAttribute("x", i.toString()), r.setAttribute("y", o.toString());
    },
    initialProps: t,
    skip: e.skipAnimation,
    ref: e.ref
  });
}
function wR() {
  return Tt().chartRootRef;
}
const CR = {
  "image/png": "PNG",
  "image/jpeg": "JPEG",
  "image/webp": "WebP"
}, ER = (e) => ({
  components: {
    MuiChartsLocalizationProvider: {
      defaultProps: {
        localeText: A({}, e)
      }
    }
  }
}), Oy = {
  // Overlay
  loading: "Loading data…",
  noData: "No data to display",
  // Toolbar
  zoomIn: "Zoom in",
  zoomOut: "Zoom out",
  toolbarExport: "Export",
  // Toolbar Export Menu
  toolbarExportPrint: "Print",
  toolbarExportImage: (e) => `Export as ${CR[e] ?? e}`,
  // Charts renderer configuration
  chartTypeBar: "Bar",
  chartTypeColumn: "Column",
  chartTypeLine: "Line",
  chartTypeArea: "Area",
  chartTypePie: "Pie",
  chartPaletteLabel: "Color palette",
  chartPaletteNameRainbowSurge: "Rainbow Surge",
  chartPaletteNameBlueberryTwilight: "Blueberry Twilight",
  chartPaletteNameMangoFusion: "Mango Fusion",
  chartPaletteNameCheerfulFiesta: "Cheerful Fiesta",
  chartPaletteNameStrawberrySky: "Strawberry Sky",
  chartPaletteNameBlue: "Blue",
  chartPaletteNameGreen: "Green",
  chartPaletteNamePurple: "Purple",
  chartPaletteNameRed: "Red",
  chartPaletteNameOrange: "Orange",
  chartPaletteNameYellow: "Yellow",
  chartPaletteNameCyan: "Cyan",
  chartPaletteNamePink: "Pink",
  chartConfigurationSectionChart: "Chart",
  chartConfigurationSectionColumns: "Columns",
  chartConfigurationSectionBars: "Bars",
  chartConfigurationSectionAxes: "Axes",
  chartConfigurationGrid: "Grid",
  chartConfigurationBorderRadius: "Border radius",
  chartConfigurationCategoryGapRatio: "Category gap ratio",
  chartConfigurationBarGapRatio: "Series gap ratio",
  chartConfigurationStacked: "Stacked",
  chartConfigurationShowToolbar: "Show toolbar",
  chartConfigurationSkipAnimation: "Skip animation",
  chartConfigurationInnerRadius: "Inner radius",
  chartConfigurationOuterRadius: "Outer radius",
  chartConfigurationColors: "Colors",
  chartConfigurationHideLegend: "Hide legend",
  chartConfigurationShowMark: "Show mark",
  chartConfigurationHeight: "Height",
  chartConfigurationWidth: "Width",
  chartConfigurationSeriesGap: "Series gap",
  chartConfigurationTickPlacement: "Tick placement",
  chartConfigurationTickLabelPlacement: "Tick label placement",
  chartConfigurationCategoriesAxisLabel: "Categories axis label",
  chartConfigurationSeriesAxisLabel: "Series axis label",
  chartConfigurationXAxisPosition: "X-axis position",
  chartConfigurationYAxisPosition: "Y-axis position",
  chartConfigurationSeriesAxisReverse: "Reverse series axis",
  chartConfigurationTooltipPlacement: "Placement",
  chartConfigurationTooltipTrigger: "Trigger",
  chartConfigurationLegendPosition: "Position",
  chartConfigurationLegendDirection: "Direction",
  chartConfigurationBarLabels: "Bar labels",
  chartConfigurationColumnLabels: "Column labels",
  chartConfigurationInterpolation: "Interpolation",
  chartConfigurationSectionTooltip: "Tooltip",
  chartConfigurationSectionLegend: "Legend",
  chartConfigurationSectionLines: "Lines",
  chartConfigurationSectionAreas: "Areas",
  chartConfigurationSectionArcs: "Arcs",
  chartConfigurationPaddingAngle: "Padding angle",
  chartConfigurationCornerRadius: "Corner radius",
  chartConfigurationArcLabels: "Arc labels",
  chartConfigurationStartAngle: "Start angle",
  chartConfigurationEndAngle: "End angle",
  chartConfigurationPieTooltipTrigger: "Trigger",
  chartConfigurationPieLegendPosition: "Position",
  chartConfigurationPieLegendDirection: "Direction",
  // Common option labels
  chartConfigurationOptionNone: "None",
  chartConfigurationOptionValue: "Value",
  chartConfigurationOptionAuto: "Auto",
  chartConfigurationOptionTop: "Top",
  chartConfigurationOptionTopLeft: "Top Left",
  chartConfigurationOptionTopRight: "Top Right",
  chartConfigurationOptionBottom: "Bottom",
  chartConfigurationOptionBottomLeft: "Bottom Left",
  chartConfigurationOptionBottomRight: "Bottom Right",
  chartConfigurationOptionLeft: "Left",
  chartConfigurationOptionRight: "Right",
  chartConfigurationOptionAxis: "Axis",
  chartConfigurationOptionItem: "Item",
  chartConfigurationOptionHorizontal: "Horizontal",
  chartConfigurationOptionVertical: "Vertical",
  chartConfigurationOptionBoth: "Both",
  chartConfigurationOptionStart: "Start",
  chartConfigurationOptionMiddle: "Middle",
  chartConfigurationOptionEnd: "End",
  chartConfigurationOptionExtremities: "Extremities",
  chartConfigurationOptionTick: "Tick",
  chartConfigurationOptionMonotoneX: "Monotone X",
  chartConfigurationOptionMonotoneY: "Monotone Y",
  chartConfigurationOptionCatmullRom: "Catmull-Rom",
  chartConfigurationOptionLinear: "Linear",
  chartConfigurationOptionNatural: "Natural",
  chartConfigurationOptionStep: "Step",
  chartConfigurationOptionStepBefore: "Step Before",
  chartConfigurationOptionStepAfter: "Step After",
  chartConfigurationOptionBumpX: "Bump X",
  chartConfigurationOptionBumpY: "Bump Y"
}, kR = Oy;
ER(Oy);
const RR = ["localeText"], Rs = /* @__PURE__ */ $.createContext(null);
process.env.NODE_ENV !== "production" && (Rs.displayName = "ChartsLocalizationContext");
function Ty(e) {
  const {
    localeText: t
  } = e, r = oe(e, RR), {
    localeText: i
  } = $.useContext(Rs) ?? {
    localeText: void 0
  }, o = nt({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: r,
    name: "MuiChartsLocalizationProvider"
  }), {
    children: s,
    localeText: a
  } = o, l = $.useMemo(() => A({}, kR, a, i, t), [a, i, t]), c = $.useMemo(() => ({
    localeText: l
  }), [l]);
  return /* @__PURE__ */ x.jsx(Rs.Provider, {
    value: c,
    children: s
  });
}
process.env.NODE_ENV !== "production" && (Ty.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: n.node,
  /**
   * Localized text for chart components.
   */
  localeText: n.object
});
const Sy = () => {
  const e = $.useContext(Rs);
  if (e === null)
    throw new Error(["MUI X Charts: Can not find the charts localization context.", "It looks like you forgot to wrap your component in ChartsLocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-charts` package"].join(`
`));
  return e;
}, qo = (e, t) => {
  const r = `${e}-axis`, i = `${e}Axis`;
  return t === (e === "x" ? $n : Uc) ? `The first \`${i}\`` : `The ${r} with id "${t}"`;
};
function AR(e, t, r, i, o, s, a) {
  const l = o[i], c = a[s], u = e ? l : c, d = e ? c : l, f = e ? i : s, p = e ? s : i, h = e ? "x" : "y", g = e ? "y" : "x";
  if (!dn(u))
    throw new Error(`MUI X Charts: ${qo(h, f)} should be of type "band" to display the bar series of id "${t}".`);
  if (u.data === void 0)
    throw new Error(`MUI X Charts: ${qo(h, f)} should have data property.`);
  if (dn(d) || Dn(d))
    throw new Error(`MUI X Charts: ${qo(g, p)} should be a continuous type to display the bar series of id "${t}".`);
  process.env.NODE_ENV !== "production" && u.data.length < r.stackedData.length && Mt([`MUI X Charts: ${qo(h, f)} has less data (${u.data.length} values) than the bar series of id "${t}" (${r.stackedData.length} values).`, "The axis data should have at least the same length than the series using it."], "error");
}
function PR(e, t, r) {
  const i = q1() ?? {
    series: {},
    stackingGroups: []
  }, o = Je().xAxisIds[0], s = Qe().yAxisIds[0], a = lo(), {
    series: l,
    stackingGroups: c
  } = i, u = {};
  return {
    completedData: c.flatMap(({
      ids: f
    }, p) => {
      const h = e.left, g = e.left + e.width, m = e.top, y = e.top + e.height;
      return f.map((b) => {
        const S = l[b].xAxisId ?? o, C = l[b].yAxisId ?? s, v = t[S], O = r[C], w = l[b].layout === "vertical", E = (w ? O.reverse : v.reverse) ?? !1;
        AR(w, b, l[b], S, t, C, r);
        const R = w ? v : O, I = v.scale, j = O.scale, _ = cy(l[b], t[S], r[C]), T = [];
        for (let M = 0; M < R.data.length; M += 1) {
          const P = wy({
            verticalLayout: w,
            xAxisConfig: v,
            yAxisConfig: O,
            series: l[b],
            dataIndex: M,
            numberOfGroups: c.length,
            groupIndex: p
          });
          if (P == null)
            continue;
          const N = l[b].stack, L = A({
            seriesId: b,
            dataIndex: M,
            layout: l[b].layout,
            xOrigin: Math.round(I(0) ?? 0),
            yOrigin: Math.round(j(0) ?? 0)
          }, P, {
            color: _(M),
            value: l[b].data[M],
            maskId: `${a}_${N || b}_${p}_${M}`
          });
          if (L.x > g || L.x + L.width < h || L.y > y || L.y + L.height < m)
            continue;
          u[L.maskId] || (u[L.maskId] = {
            id: L.maskId,
            width: 0,
            height: 0,
            hasNegative: !1,
            hasPositive: !1,
            layout: L.layout,
            xOrigin: I(0),
            yOrigin: j(0),
            x: 0,
            y: 0
          });
          const z = u[L.maskId];
          z.width = L.layout === "vertical" ? L.width : z.width + L.width, z.height = L.layout === "vertical" ? z.height + L.height : L.height, z.x = Math.min(z.x === 0 ? 1 / 0 : z.x, L.x), z.y = Math.min(z.y === 0 ? 1 / 0 : z.y, L.y);
          const H = L.value ?? 0;
          z.hasNegative = z.hasNegative || (E ? H > 0 : H < 0), z.hasPositive = z.hasPositive || (E ? H < 0 : H > 0), T.push(L);
        }
        return {
          seriesId: b,
          barLabel: l[b].barLabel,
          barLabelPlacement: l[b].barLabelPlacement,
          data: T
        };
      });
    }),
    masksData: Object.values(u)
  };
}
function IR({
  bandWidth: e,
  numberOfGroups: t,
  gapRatio: r
}) {
  if (r === 0)
    return {
      barWidth: e / t,
      offset: 0
    };
  const i = e / (t + (t - 1) * r), o = r * i;
  return {
    barWidth: i,
    offset: o
  };
}
function MR(e, t, r) {
  const i = e && t > 0, o = !e && t < 0, s = i || o;
  return r ? !s : s;
}
function wy(e) {
  const {
    verticalLayout: t,
    xAxisConfig: r,
    yAxisConfig: i,
    series: o,
    dataIndex: s,
    numberOfGroups: a,
    groupIndex: l
  } = e, c = t ? r : i, u = (t ? i.reverse : r.reverse) ?? !1, {
    barWidth: d,
    offset: f
  } = IR({
    bandWidth: c.scale.bandwidth(),
    numberOfGroups: a,
    gapRatio: c.barGapRatio
  }), p = l * (d + f), h = r.scale, g = i.scale, m = c.data[s], y = o.data[s];
  if (y == null)
    return null;
  const S = o.stackedData[s].map((E) => t ? g(E) : h(E)), C = Math.round(Math.min(...S)), v = Math.round(Math.max(...S)), O = y === 0 ? 0 : Math.max(o.minBarSize, v - C), w = MR(t, y, u) ? v - O : C;
  return {
    x: t ? h(m) + p : w,
    y: t ? w : g(m) + p,
    height: t ? O : d,
    width: t ? d : O
  };
}
const _R = (e) => {
  const {
    series: t,
    identifier: r,
    axesConfig: i,
    placement: o
  } = e;
  if (!r || r.dataIndex === void 0)
    return null;
  const s = t.bar?.series[r.seriesId];
  if (t.bar == null || s == null || i.x === void 0 || i.y === void 0)
    return null;
  const a = wy({
    verticalLayout: s.layout === "vertical",
    xAxisConfig: i.x,
    yAxisConfig: i.y,
    series: s,
    dataIndex: r.dataIndex,
    numberOfGroups: t.bar.stackingGroups.length,
    groupIndex: t.bar.stackingGroups.findIndex((f) => f.ids.includes(s.id))
  });
  if (a == null)
    return null;
  const {
    x: l,
    y: c,
    width: u,
    height: d
  } = a;
  switch (o) {
    case "right":
      return {
        x: l + u,
        y: c + d / 2
      };
    case "bottom":
      return {
        x: l + u / 2,
        y: c + d
      };
    case "left":
      return {
        x: l,
        y: c + d / 2
      };
    case "top":
    default:
      return {
        x: l + u / 2,
        y: c
      };
  }
}, jR = (e, t, r) => A({}, e, {
  id: e.id ?? `auto-generated-id-${t}`,
  color: e.color ?? r[t % r.length]
}), $R = {
  seriesProcessor: O1,
  colorProcessor: cy,
  legendGetter: T1,
  tooltipGetter: S1,
  tooltipItemPositionGetter: _R,
  axisTooltipGetter: w1,
  xExtremumGetter: kk,
  yExtremumGetter: Rk,
  getSeriesWithDefaultValues: jR
}, DR = (e) => {
  const {
    series: t,
    axis: r,
    isDefaultAxis: i,
    getFilters: o
  } = e;
  let s = 1 / 0, a = -1 / 0;
  for (const l in t) {
    if (!Object.hasOwn(t, l))
      continue;
    const c = t[l].xAxisId;
    if (!(c === r.id || c === void 0 && i))
      continue;
    const u = o?.({
      currentAxisId: r.id,
      isDefaultAxis: i,
      seriesXAxisId: t[l].xAxisId,
      seriesYAxisId: t[l].yAxisId
    }), d = t[l].data ?? [];
    for (let f = 0; f < d.length; f += 1) {
      const p = d[f];
      u && !u(p, f) || p.x !== null && (p.x < s && (s = p.x), p.x > a && (a = p.x));
    }
  }
  return [s, a];
}, LR = (e) => {
  const {
    series: t,
    axis: r,
    isDefaultAxis: i,
    getFilters: o
  } = e;
  let s = 1 / 0, a = -1 / 0;
  for (const l in t) {
    if (!Object.hasOwn(t, l))
      continue;
    const c = t[l].yAxisId;
    if (!(c === r.id || c === void 0 && i))
      continue;
    const u = o?.({
      currentAxisId: r.id,
      isDefaultAxis: i,
      seriesXAxisId: t[l].xAxisId,
      seriesYAxisId: t[l].yAxisId
    }), d = t[l].data ?? [];
    for (let f = 0; f < d.length; f += 1) {
      const p = d[f];
      u && !u(p, f) || p.y !== null && (p.y < s && (s = p.y), p.y > a && (a = p.y));
    }
  }
  return [s, a];
}, NR = ({
  series: e,
  seriesOrder: t
}, r) => ({
  series: Object.fromEntries(Object.entries(e).map(([o, s]) => {
    const a = s?.datasetKeys, l = ["x", "y"].filter((u) => typeof a?.[u] != "string");
    if (s?.datasetKeys && l.length > 0)
      throw new Error([`MUI X Charts: scatter series with id='${o}' has incomplete datasetKeys.`, `Properties ${l.map((u) => `"${u}"`).join(", ")} are missing.`].join(`
`));
    const c = a ? r?.map((u) => ({
      x: u[a.x] ?? null,
      y: u[a.y] ?? null,
      z: a.z && u[a.z],
      id: a.id && u[a.id]
    })) ?? [] : s.data ?? [];
    return [o, A({
      labelMarkType: "circle",
      markerSize: 4
    }, s, {
      preview: A({
        markerSize: 1
      }, s?.preview),
      data: c,
      valueFormatter: s.valueFormatter ?? ((u) => u && `(${u.x}, ${u.y})`)
    })];
  })),
  seriesOrder: t
}), FR = (e, t, r, i) => {
  const o = i?.colorScale, s = r?.colorScale, a = t?.colorScale, l = Eu(e);
  return o ? (c) => {
    if (c === void 0)
      return e.color;
    if (i?.data?.[c] !== void 0) {
      const f = o(i?.data?.[c]);
      if (f !== null)
        return f;
    }
    const u = e.data[c], d = u === null ? l({
      value: u,
      dataIndex: c
    }) : o(u.z);
    return d === null ? l({
      value: u,
      dataIndex: c
    }) : d;
  } : s ? (c) => {
    if (c === void 0)
      return e.color;
    const u = e.data[c], d = u === null ? l({
      value: u,
      dataIndex: c
    }) : s(u.y);
    return d === null ? l({
      value: u,
      dataIndex: c
    }) : d;
  } : a ? (c) => {
    if (c === void 0)
      return e.color;
    const u = e.data[c], d = u === null ? l({
      value: u,
      dataIndex: c
    }) : a(u.x);
    return d === null ? l({
      value: u,
      dataIndex: c
    }) : d;
  } : (c) => {
    if (c === void 0)
      return e.color;
    const u = e.data[c];
    return l({
      value: u,
      dataIndex: c
    });
  };
}, qR = (e) => {
  const {
    seriesOrder: t,
    series: r
  } = e;
  return t.reduce((i, o) => {
    const s = xt(r[o].label, "legend");
    return s === void 0 || i.push({
      markType: r[o].labelMarkType,
      id: o,
      seriesId: o,
      color: r[o].color,
      label: s
    }), i;
  }, []);
}, zR = (e) => {
  const {
    series: t,
    getColor: r,
    identifier: i
  } = e;
  if (!i || i.dataIndex === void 0)
    return null;
  const o = xt(t.label, "tooltip"), s = t.data[i.dataIndex], a = t.valueFormatter(s, {
    dataIndex: i.dataIndex
  });
  return {
    identifier: i,
    color: r(i.dataIndex),
    label: o,
    value: s,
    formattedValue: a,
    markType: t.labelMarkType
  };
}, BR = (e, t, r) => A({}, e, {
  id: e.id ?? `auto-generated-id-${t}`,
  color: e.color ?? r[t % r.length]
}), VR = (e) => {
  const {
    series: t,
    identifier: r,
    axesConfig: i
  } = e;
  if (!r || r.dataIndex === void 0)
    return null;
  const o = t.scatter?.series[r.seriesId];
  if (o == null || i.x === void 0 || i.y === void 0)
    return null;
  const s = o.data?.[r.dataIndex].x, a = o.data?.[r.dataIndex].y;
  return s == null || a == null ? null : {
    x: i.x.scale(s),
    y: i.y.scale(a)
  };
}, UR = {
  seriesProcessor: NR,
  colorProcessor: FR,
  legendGetter: qR,
  tooltipGetter: zR,
  tooltipItemPositionGetter: VR,
  xExtremumGetter: DR,
  yExtremumGetter: LR,
  getSeriesWithDefaultValues: BR
}, HR = (e) => {
  const {
    axis: t
  } = e;
  return Ts(t.data ?? []);
};
function GR(e, t, r, i) {
  return r.reduce((o, s, a) => {
    if (t[a] === null)
      return o;
    const [l, c] = e(s);
    return i && (!i({
      y: l,
      x: null
    }, a) || !i({
      y: c,
      x: null
    }, a)) ? o : [Math.min(l, c, o[0]), Math.max(l, c, o[1])];
  }, [1 / 0, -1 / 0]);
}
const WR = (e) => {
  const {
    series: t,
    axis: r,
    isDefaultAxis: i,
    getFilters: o
  } = e;
  return Object.keys(t).filter((s) => {
    const a = t[s].yAxisId;
    return a === r.id || i && a === void 0;
  }).reduce((s, a) => {
    const {
      area: l,
      stackedData: c,
      data: u
    } = t[a], d = l !== void 0, f = o?.({
      currentAxisId: r.id,
      isDefaultAxis: i,
      seriesXAxisId: t[a].xAxisId,
      seriesYAxisId: t[a].yAxisId
    }), p = d && r.scaleType !== "log" && typeof t[a].baseline != "string" ? (y) => y : (y) => [y[1], y[1]], h = GR(p, u, c, f), [g, m] = h;
    return [Math.min(g, s[0]), Math.max(m, s[1])];
  }, [1 / 0, -1 / 0]);
};
function YR(e, t) {
  const r = {};
  return Object.keys(e).forEach((i) => {
    r[i] = A({}, e[i], {
      valueFormatter: e[i].valueFormatter ?? t
    });
  }), r;
}
const XR = (e, t) => {
  const {
    seriesOrder: r,
    series: i
  } = e, o = ly(A({}, e, {
    defaultStrategy: {
      stackOffset: "none"
    }
  })), s = t ?? [];
  r.forEach((l) => {
    const c = i[l].data;
    if (c !== void 0)
      c.forEach((u, d) => {
        s.length <= d ? s.push({
          [l]: u
        }) : s[d][l] = u;
      });
    else if (t === void 0 && process.env.NODE_ENV !== "production")
      throw new Error([`MUI X Charts: line series with id='${l}' has no data.`, "Either provide a data property to the series or use the dataset prop."].join(`
`));
    if (process.env.NODE_ENV !== "production" && !c && t) {
      const u = i[l].dataKey;
      if (!u)
        throw new Error([`MUI X Charts: line series with id='${l}' has no data and no dataKey.`, "You must provide a dataKey when using the dataset prop."].join(`
`));
      t.forEach((d, f) => {
        const p = d[u];
        p != null && typeof p != "number" && Mt([`MUI X Charts: your dataset key "${u}" is used for plotting lines, but the dataset contains the non-null non-numerical element "${p}" at index ${f}.`, "Line plots only support numeric and null values."].join(`
`));
      });
    }
  });
  const a = {};
  return o.forEach((l) => {
    const {
      ids: c,
      stackingOrder: u,
      stackingOffset: d
    } = l, f = iy().keys(c.map((p) => {
      const h = i[p].dataKey;
      return i[p].data === void 0 && h !== void 0 ? h : p;
    })).value((p, h) => p[h] ?? 0).order(u).offset(d)(s);
    c.forEach((p, h) => {
      const g = i[p].dataKey;
      a[p] = A({
        labelMarkType: "line"
      }, i[p], {
        data: g ? t.map((m) => {
          const y = m[g];
          return typeof y == "number" ? y : null;
        }) : i[p].data,
        stackedData: f[h].map(([m, y]) => [m, y])
      });
    });
  }), {
    seriesOrder: r,
    stackingGroups: o,
    series: YR(a, (l) => l == null ? "" : l.toLocaleString())
  };
}, ju = (e, t, r) => {
  const i = r?.colorScale, o = t?.colorScale, s = Eu(e);
  return i ? (a) => {
    if (a === void 0)
      return e.color;
    const l = e.data[a], c = l === null ? s({
      value: l,
      dataIndex: a
    }) : i(l);
    return c === null ? s({
      value: l,
      dataIndex: a
    }) : c;
  } : o ? (a) => {
    if (a === void 0)
      return e.color;
    const l = t.data?.[a], c = l === null ? s({
      value: l,
      dataIndex: a
    }) : o(l);
    return c === null ? s({
      value: l,
      dataIndex: a
    }) : c;
  } : (a) => {
    if (a === void 0)
      return e.color;
    const l = e.data[a];
    return s({
      value: l,
      dataIndex: a
    });
  };
}, KR = (e) => {
  const {
    seriesOrder: t,
    series: r
  } = e;
  return t.reduce((i, o) => {
    const s = xt(r[o].label, "legend");
    return s === void 0 || i.push({
      markType: r[o].labelMarkType,
      id: o,
      seriesId: o,
      color: r[o].color,
      label: s
    }), i;
  }, []);
}, ZR = (e) => {
  const {
    series: t,
    getColor: r,
    identifier: i
  } = e;
  if (!i || i.dataIndex === void 0)
    return null;
  const o = xt(t.label, "tooltip"), s = t.data[i.dataIndex], a = t.valueFormatter(s, {
    dataIndex: i.dataIndex
  });
  return {
    identifier: i,
    color: r(i.dataIndex),
    label: o,
    value: s,
    formattedValue: a,
    markType: t.labelMarkType
  };
}, JR = (e) => Object.values(e).map((t) => ({
  direction: "x",
  axisId: t.xAxisId
})), QR = (e, t, r) => A({}, e, {
  id: e.id ?? `auto-generated-id-${t}`,
  color: e.color ?? r[t % r.length]
}), eA = (e) => {
  const {
    series: t,
    identifier: r,
    axesConfig: i
  } = e;
  if (!r || r.dataIndex === void 0)
    return null;
  const o = t.line?.series[r.seriesId];
  if (o == null || i.x === void 0 || i.y === void 0)
    return null;
  const s = i.x.data?.[r.dataIndex], a = o.data[r.dataIndex];
  return s == null || a == null ? null : {
    x: i.x.scale(s),
    y: i.y.scale(a)
  };
}, tA = {
  colorProcessor: ju,
  seriesProcessor: XR,
  legendGetter: KR,
  tooltipGetter: ZR,
  tooltipItemPositionGetter: eA,
  axisTooltipGetter: JR,
  xExtremumGetter: HR,
  yExtremumGetter: WR,
  getSeriesWithDefaultValues: QR
}, nA = (e = "none") => {
  if (typeof e == "function")
    return e;
  switch (e) {
    case "none":
      return null;
    case "desc":
      return (t, r) => r - t;
    case "asc":
      return (t, r) => t - r;
    default:
      return null;
  }
}, rA = (e) => {
  const {
    seriesOrder: t,
    series: r
  } = e, i = {};
  return t.forEach((o) => {
    const s = Vk().startAngle(ln(r[o].startAngle ?? 0)).endAngle(ln(r[o].endAngle ?? 360)).padAngle(ln(r[o].paddingAngle ?? 0)).sortValues(nA(r[o].sortingValues ?? "none"))(r[o].data.map((a) => a.value));
    i[o] = A({
      labelMarkType: "circle",
      valueFormatter: (a) => a.value.toLocaleString()
    }, r[o], {
      data: r[o].data.map((a, l) => A({}, a, {
        id: a.id ?? `auto-generated-pie-id-${o}-${l}`
      }, s[l])).map((a, l) => A({
        labelMarkType: "circle"
      }, a, {
        formattedValue: r[o].valueFormatter?.(A({}, a, {
          label: xt(a.label, "arc")
        }), {
          dataIndex: l
        }) ?? a.value.toLocaleString()
      }))
    });
  }), {
    seriesOrder: t,
    series: i
  };
}, iA = (e) => (t) => e.data[t].color, oA = (e) => {
  const {
    seriesOrder: t,
    series: r
  } = e;
  return t.reduce((i, o) => (r[o].data.forEach((s, a) => {
    const l = xt(s.label, "legend");
    l !== void 0 && i.push({
      markType: s.labelMarkType ?? r[o].labelMarkType,
      id: s.id ?? a,
      seriesId: o,
      color: s.color,
      label: l,
      itemId: s.id ?? a
    });
  }), i), []);
}, sA = (e) => {
  const {
    series: t,
    getColor: r,
    identifier: i
  } = e;
  if (!i || i.dataIndex === void 0)
    return null;
  const o = t.data[i.dataIndex];
  if (o == null)
    return null;
  const s = xt(o.label, "tooltip"), a = A({}, o, {
    label: s
  }), l = t.valueFormatter(a, {
    dataIndex: i.dataIndex
  });
  return {
    identifier: i,
    color: r(i.dataIndex),
    label: s,
    value: a,
    formattedValue: l,
    markType: o.labelMarkType ?? t.labelMarkType
  };
}, aA = (e, t, r) => A({}, e, {
  id: e.id ?? `auto-generated-id-${t}`,
  data: e.data.map((i, o) => A({}, i, {
    color: i.color ?? r[o % r.length]
  }))
});
function rn(e, t) {
  if (typeof e == "number")
    return e;
  if (e === "100%")
    return t;
  if (e.endsWith("%")) {
    const r = Number.parseFloat(e.slice(0, e.length - 1));
    if (!Number.isNaN(r))
      return r * t / 100;
  }
  if (e.endsWith("px")) {
    const r = Number.parseFloat(e.slice(0, e.length - 2));
    if (!Number.isNaN(r))
      return r;
  }
  throw new Error(`MUI X Charts: Received an unknown value "${e}". It should be a number, or a string with a percentage value.`);
}
function sc(e, t) {
  const {
    height: r,
    width: i
  } = t, {
    cx: o,
    cy: s
  } = e, a = Math.min(i, r) / 2, l = rn(o ?? "50%", i), c = rn(s ?? "50%", r);
  return {
    cx: l,
    cy: c,
    availableRadius: a
  };
}
const lA = (e) => {
  const {
    series: t,
    drawingArea: r,
    identifier: i,
    placement: o
  } = e;
  if (!i || i.dataIndex === void 0)
    return null;
  const s = t.pie?.series[i.seriesId];
  if (s == null)
    return null;
  const {
    cx: a,
    cy: l,
    availableRadius: c
  } = sc({
    cx: s.cx,
    cy: s.cy
  }, r), {
    data: u,
    innerRadius: d = 0,
    outerRadius: f
  } = s, p = Math.max(0, rn(d ?? 0, c)), h = Math.max(0, rn(f ?? c, c)), g = u[i.dataIndex];
  if (!g)
    return null;
  const m = [[p, g.startAngle], [p, g.endAngle], [h, g.startAngle], [h, g.endAngle]].map(([v, O]) => ({
    x: a + v * Math.sin(O),
    y: l - v * Math.cos(O)
  })), [y, b] = Ts(m.map((v) => v.x)), [S, C] = Ts(m.map((v) => v.y));
  switch (o) {
    case "bottom":
      return {
        x: (b + y) / 2,
        y: C
      };
    case "left":
      return {
        x: y,
        y: (C + S) / 2
      };
    case "right":
      return {
        x: b,
        y: (C + S) / 2
      };
    case "top":
    default:
      return {
        x: (b + y) / 2,
        y: S
      };
  }
}, cA = {
  colorProcessor: iA,
  seriesProcessor: rA,
  legendGetter: oA,
  tooltipGetter: sA,
  tooltipItemPositionGetter: lA,
  getSeriesWithDefaultValues: aA
}, uA = {
  bar: $R,
  scatter: UR,
  line: tA,
  pie: cA
}, dA = [ai, pr, mr, gr];
function fA(e) {
  const {
    children: t,
    plugins: r = dA,
    pluginParams: i = {},
    seriesConfig: o = uA
  } = e, {
    contextValue: s
  } = qS(r, i, o);
  return /* @__PURE__ */ x.jsx(Qc.Provider, {
    value: s,
    children: t
  });
}
const Tt = () => {
  const e = $.useContext(Qc);
  if (e == null)
    throw new Error(["MUI X Charts: Could not find the Chart context.", "It looks like you rendered your component outside of a ChartDataProvider.", "This can also happen if you are bundling multiple versions of the library."].join(`
`));
  return e;
};
function pA(e) {
  "hasPointerCapture" in e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId);
}
const ui = (e, t) => {
  const {
    instance: r
  } = Tt(), i = $.useRef(!1), o = ze(() => {
    i.current = !0, r.setItemInteraction(e, {
      interaction: "pointer"
    }), r.setHighlight(e);
  }), s = ze(() => {
    i.current = !1, r.removeItemInteraction(e), r.clearHighlight();
  });
  return $.useEffect(() => () => {
    i.current && s();
  }, [s]), $.useMemo(() => t ? {} : {
    onPointerEnter: o,
    onPointerLeave: s,
    onPointerDown: pA
  }, [t, o, s]);
};
function Cy(e) {
  return e.replace(" ", "_");
}
const Ey = Se("MuiAppearingMask", ["animate"]), hA = le("rect")({
  animationName: "animate-width",
  animationTimingFunction: uo,
  animationDuration: "0s",
  [`&.${Ey.animate}`]: {
    animationDuration: `${ci}ms`
  },
  "@keyframes animate-width": {
    from: {
      width: 0
    }
  }
});
function ky(e) {
  const t = gt(), r = lo(), i = Cy(`${r}-${e.id}`);
  return /* @__PURE__ */ x.jsxs($.Fragment, {
    children: [/* @__PURE__ */ x.jsx("clipPath", {
      id: i,
      children: /* @__PURE__ */ x.jsx(hA, {
        className: e.skipAnimation ? "" : Ey.animate,
        x: 0,
        y: 0,
        width: t.left + t.width + t.right,
        height: t.top + t.height + t.bottom
      })
    }), /* @__PURE__ */ x.jsx("g", {
      clipPath: `url(#${i})`,
      children: e.children
    })]
  });
}
const mA = ["skipAnimation", "ownerState"];
function Ry(e) {
  const {
    skipAnimation: t,
    ownerState: r
  } = e, i = oe(e, mA), o = fR(e);
  return /* @__PURE__ */ x.jsx(ky, {
    skipAnimation: t,
    id: `${r.id}-area-clip`,
    children: /* @__PURE__ */ x.jsx("path", A({
      fill: r.gradientId ? `url(#${r.gradientId})` : r.color,
      filter: (
        // eslint-disable-next-line no-nested-ternary
        r.isHighlighted ? "brightness(140%)" : r.gradientId ? void 0 : "brightness(120%)"
      ),
      opacity: r.isFaded ? 0.3 : 1,
      stroke: "none",
      "data-series": r.id,
      "data-highlighted": r.isHighlighted || void 0,
      "data-faded": r.isFaded || void 0
    }, i, o))
  });
}
process.env.NODE_ENV !== "production" && (Ry.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  d: n.string.isRequired,
  ownerState: n.shape({
    classes: n.object,
    color: n.string.isRequired,
    gradientId: n.string,
    id: n.oneOfType([n.number, n.string]).isRequired,
    isFaded: n.bool.isRequired,
    isHighlighted: n.bool.isRequired
  }).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool
});
const gA = ["id", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
function yA(e) {
  return Ee("MuiAreaElement", e);
}
const bA = Se("MuiAreaElement", ["root", "highlighted", "faded", "series"]), xA = (e) => {
  const {
    classes: t,
    id: r,
    isFaded: i,
    isHighlighted: o
  } = e, s = {
    root: ["root", `series-${r}`, o && "highlighted", i && "faded"]
  };
  return Ae(s, yA, t);
};
function Ay(e) {
  const {
    id: t,
    classes: r,
    color: i,
    gradientId: o,
    slots: s,
    slotProps: a,
    onClick: l
  } = e, c = oe(e, gA), u = ui({
    type: "line",
    seriesId: t
  }), {
    isFaded: d,
    isHighlighted: f
  } = Ea({
    seriesId: t
  }), p = {
    id: t,
    classes: r,
    color: i,
    gradientId: o,
    isFaded: d,
    isHighlighted: f
  }, h = xA(p), g = s?.area ?? Ry, m = Nt({
    elementType: g,
    externalSlotProps: a?.area,
    additionalProps: A({}, u, {
      onClick: l,
      cursor: l ? "pointer" : "unset"
    }),
    className: h.root,
    ownerState: p
  });
  return /* @__PURE__ */ x.jsx(g, A({}, c, m));
}
process.env.NODE_ENV !== "production" && (Ay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: n.object,
  color: n.string.isRequired,
  d: n.string.isRequired,
  gradientId: n.string,
  id: n.oneOfType([n.number, n.string]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
function fo(e) {
  const t = we(), r = ie(t, rS);
  return e || r;
}
function Ra() {
  const e = we();
  return ie(e, hg);
}
function Py(e) {
  switch (e) {
    case "catmullRom":
      return i1.alpha(0.5);
    case "linear":
      return wu;
    case "monotoneX":
      return Sp;
    case "monotoneY":
      return o1;
    case "natural":
      return s1;
    case "step":
      return a1;
    case "stepBefore":
      return l1;
    case "stepAfter":
      return c1;
    case "bumpY":
      return Hk;
    case "bumpX":
      return Uk;
    default:
      return Sp;
  }
}
function vA(e, t) {
  const r = co(), i = Je().xAxisIds[0], o = Qe().yAxisIds[0], s = Mu();
  return $.useMemo(() => {
    if (r === void 0)
      return [];
    const {
      series: l,
      stackingGroups: c
    } = r, u = [];
    for (const d of c) {
      const f = d.ids;
      for (let p = f.length - 1; p >= 0; p -= 1) {
        const h = f[p], {
          xAxisId: g = i,
          yAxisId: m = o,
          stackedData: y,
          data: b,
          connectNulls: S,
          baseline: C,
          curve: v,
          strictStepCurve: O,
          area: w
        } = l[h];
        if (!w || !(g in e) || !(m in t))
          continue;
        const E = e[g].scale, R = li(E), I = t[m].scale, j = e[g].data, _ = t[m].colorScale && s(m) || e[g].colorScale && s(g) || void 0;
        if (process.env.NODE_ENV !== "production") {
          if (j === void 0)
            throw new Error(`MUI X Charts: ${g === $n ? "The first `xAxis`" : `The x-axis with id "${g}"`} should have data property to be able to display a line plot.`);
          if (j.length < y.length)
            throw new Error(`MUI X Charts: The data length of the x axis (${j.length} items) is lower than the length of series (${y.length} items).`);
        }
        const T = v?.includes("step") && !O && Ue(E), M = j?.flatMap((z, H) => {
          const Z = b[H] == null;
          if (T) {
            const F = [{
              x: z,
              y: y[H],
              nullData: Z,
              isExtension: !1
            }];
            return !Z && (H === 0 || b[H - 1] == null) && F.unshift({
              x: (E(z) ?? 0) - (E.step() - E.bandwidth()) / 2,
              y: y[H],
              nullData: Z,
              isExtension: !0
            }), !Z && (H === b.length - 1 || b[H + 1] == null) && F.push({
              x: (E(z) ?? 0) + (E.step() + E.bandwidth()) / 2,
              y: y[H],
              nullData: Z,
              isExtension: !0
            }), F;
          }
          return {
            x: z,
            y: y[H],
            nullData: Z
          };
        }) ?? [], P = S ? M.filter((z) => !z.nullData) : M, L = qk().x((z) => z.isExtension ? z.x : R(z.x)).defined((z) => S || !z.nullData || !!z.isExtension).y0((z) => {
          if (typeof C == "number")
            return I(C);
          if (C === "max")
            return I.range()[1];
          if (C === "min")
            return I.range()[0];
          const H = z.y && I(z.y[0]);
          return Number.isNaN(H) ? I.range()[0] : H;
        }).y1((z) => z.y && I(z.y[1])).curve(Py(v))(P) || "";
        u.push({
          area: l[h].area,
          color: l[h].color,
          gradientId: _,
          d: L,
          seriesId: h
        });
      }
    }
    return u;
  }, [r, i, o, e, t, s]);
}
const OA = ["slots", "slotProps", "onItemClick", "skipAnimation"], TA = le("g", {
  name: "MuiAreaPlot",
  slot: "Root"
})({
  [`& .${bA.root}`]: {
    transition: "opacity 0.2s ease-in, fill 0.2s ease-in"
  }
}), SA = () => {
  const {
    xAxis: e
  } = Je(), {
    yAxis: t
  } = Qe();
  return vA(e, t);
};
function Iy(e) {
  const {
    slots: t,
    slotProps: r,
    onItemClick: i,
    skipAnimation: o
  } = e, s = oe(e, OA), a = Ra(), l = fo(a || o), c = SA();
  return /* @__PURE__ */ x.jsx(TA, A({}, s, {
    children: c.map(({
      d: u,
      seriesId: d,
      color: f,
      area: p,
      gradientId: h
    }) => !!p && /* @__PURE__ */ x.jsx(Ay, {
      id: d,
      d: u,
      color: f,
      gradientId: h,
      slots: t,
      slotProps: r,
      onClick: i && ((g) => i(g, {
        type: "line",
        seriesId: d
      })),
      skipAnimation: l
    }, d))
  }));
}
process.env.NODE_ENV !== "production" && (Iy.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line area item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line item identifier.
   */
  onItemClick: n.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
const wA = ["skipAnimation", "ownerState"], $u = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const {
    skipAnimation: i,
    ownerState: o
  } = t, s = oe(t, wA), a = xR(A({}, t, {
    ref: r
  }));
  return /* @__PURE__ */ x.jsx(ky, {
    skipAnimation: i,
    id: `${o.id}-line-clip`,
    children: /* @__PURE__ */ x.jsx("path", A({
      stroke: o.gradientId ? `url(#${o.gradientId})` : o.color,
      strokeWidth: 2,
      strokeLinejoin: "round",
      fill: "none",
      filter: o.isHighlighted ? "brightness(120%)" : void 0,
      opacity: o.isFaded ? 0.3 : 1,
      "data-series": o.id,
      "data-highlighted": o.isHighlighted || void 0,
      "data-faded": o.isFaded || void 0
    }, s, a))
  });
});
process.env.NODE_ENV !== "production" && ($u.displayName = "AnimatedLine");
process.env.NODE_ENV !== "production" && ($u.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  d: n.string.isRequired,
  ownerState: n.shape({
    classes: n.object,
    color: n.string.isRequired,
    gradientId: n.string,
    id: n.oneOfType([n.number, n.string]).isRequired,
    isFaded: n.bool.isRequired,
    isHighlighted: n.bool.isRequired
  }).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool
});
const CA = ["id", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
function EA(e) {
  return Ee("MuiLineElement", e);
}
const kA = Se("MuiLineElement", ["root", "highlighted", "faded", "series"]), RA = (e) => {
  const {
    classes: t,
    id: r,
    isFaded: i,
    isHighlighted: o
  } = e, s = {
    root: ["root", `series-${r}`, o && "highlighted", i && "faded"]
  };
  return Ae(s, EA, t);
};
function My(e) {
  const {
    id: t,
    classes: r,
    color: i,
    gradientId: o,
    slots: s,
    slotProps: a,
    onClick: l
  } = e, c = oe(e, CA), u = ui({
    type: "line",
    seriesId: t
  }), {
    isFaded: d,
    isHighlighted: f
  } = Ea({
    seriesId: t
  }), p = {
    id: t,
    classes: r,
    color: i,
    gradientId: o,
    isFaded: d,
    isHighlighted: f
  }, h = RA(p), g = s?.line ?? $u, m = Nt({
    elementType: g,
    externalSlotProps: a?.line,
    additionalProps: A({}, u, {
      onClick: l,
      cursor: l ? "pointer" : "unset"
    }),
    className: h.root,
    ownerState: p
  });
  return /* @__PURE__ */ x.jsx(g, A({}, c, m));
}
process.env.NODE_ENV !== "production" && (My.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: n.object,
  color: n.string.isRequired,
  d: n.string.isRequired,
  gradientId: n.string,
  id: n.oneOfType([n.number, n.string]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
function AA(e, t) {
  const r = co(), i = Je().xAxisIds[0], o = Qe().yAxisIds[0], s = Mu();
  return $.useMemo(() => {
    if (r === void 0)
      return [];
    const {
      series: l,
      stackingGroups: c
    } = r, u = [];
    for (const d of c) {
      const f = d.ids;
      for (const p of f) {
        const {
          xAxisId: h = i,
          yAxisId: g = o,
          stackedData: m,
          data: y,
          connectNulls: b,
          curve: S,
          strictStepCurve: C
        } = l[p];
        if (!(h in e) || !(g in t))
          continue;
        const v = e[h].scale, O = li(v), w = t[g].scale, E = e[h].data, R = t[g].colorScale && s(g) || e[h].colorScale && s(h) || void 0;
        if (process.env.NODE_ENV !== "production") {
          if (E === void 0)
            throw new Error(`MUI X Charts: ${h === $n ? "The first `xAxis`" : `The x-axis with id "${h}"`} should have data property to be able to display a line plot.`);
          E.length < m.length && Mt(`MUI X Charts: The data length of the x axis (${E.length} items) is lower than the length of series (${m.length} items).`, "error");
        }
        const I = S?.includes("step") && !C && Ue(v), j = E?.flatMap((P, N) => {
          const L = y[N] == null;
          if (I) {
            const z = [{
              x: P,
              y: m[N],
              nullData: L,
              isExtension: !1
            }];
            return !L && (N === 0 || y[N - 1] == null) && z.unshift({
              x: (v(P) ?? 0) - (v.step() - v.bandwidth()) / 2,
              y: m[N],
              nullData: L,
              isExtension: !0
            }), !L && (N === y.length - 1 || y[N + 1] == null) && z.push({
              x: (v(P) ?? 0) + (v.step() + v.bandwidth()) / 2,
              y: m[N],
              nullData: L,
              isExtension: !0
            }), z;
          }
          return {
            x: P,
            y: m[N],
            nullData: L
          };
        }) ?? [], _ = b ? j.filter((P) => !P.nullData) : j, M = Wg().x((P) => P.isExtension ? P.x : O(P.x)).defined((P) => b || !P.nullData || !!P.isExtension).y((P) => w(P.y[1])).curve(Py(S))(_) || "";
        u.push({
          color: l[p].color,
          gradientId: R,
          d: M,
          seriesId: p
        });
      }
    }
    return u;
  }, [r, i, o, e, t, s]);
}
const PA = ["slots", "slotProps", "skipAnimation", "onItemClick"], IA = le("g", {
  name: "MuiAreaPlot",
  slot: "Root"
})({
  [`& .${kA.root}`]: {
    transition: "opacity 0.2s ease-in, fill 0.2s ease-in"
  }
}), MA = () => {
  const {
    xAxis: e
  } = Je(), {
    yAxis: t
  } = Qe();
  return AA(e, t);
};
function _y(e) {
  const {
    slots: t,
    slotProps: r,
    skipAnimation: i,
    onItemClick: o
  } = e, s = oe(e, PA), a = Ra(), l = fo(a || i), c = MA();
  return /* @__PURE__ */ x.jsx(IA, A({}, s, {
    children: c.map(({
      d: u,
      seriesId: d,
      color: f,
      gradientId: p
    }) => /* @__PURE__ */ x.jsx(My, {
      id: d,
      d: u,
      color: f,
      gradientId: p,
      skipAnimation: l,
      slots: t,
      slotProps: r,
      onClick: o && ((h) => o(h, {
        type: "line",
        seriesId: d
      }))
    }, d))
  }));
}
process.env.NODE_ENV !== "production" && (_y.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line item identifier.
   */
  onItemClick: n.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
function _A(e) {
  return Ee("MuiMarkElement", e);
}
const jy = Se("MuiMarkElement", ["root", "highlighted", "faded", "animate", "series"]), $y = (e) => {
  const {
    classes: t,
    id: r,
    isFaded: i,
    isHighlighted: o,
    skipAnimation: s
  } = e, a = {
    root: ["root", `series-${r}`, o && "highlighted", i && "faded", s ? void 0 : "animate"]
  };
  return Ae(a, _A, t);
}, jA = ["x", "y", "id", "classes", "color", "dataIndex", "onClick", "skipAnimation", "isFaded", "isHighlighted"], $A = le("circle")({
  [`&.${jy.animate}`]: {
    transitionDuration: `${ci}ms`,
    transitionProperty: "cx, cy",
    transitionTimingFunction: uo
  }
});
function Dy(e) {
  const {
    x: t,
    y: r,
    id: i,
    classes: o,
    color: s,
    dataIndex: a,
    onClick: l,
    skipAnimation: c,
    isFaded: u = !1,
    isHighlighted: d = !1
  } = e, f = oe(e, jA), p = Ft(), h = ui({
    type: "line",
    seriesId: i,
    dataIndex: a
  }), m = $y({
    id: i,
    classes: o,
    isHighlighted: d,
    isFaded: u,
    skipAnimation: c
  });
  return /* @__PURE__ */ x.jsx($A, A({}, f, {
    cx: t,
    cy: r,
    r: 5,
    fill: (p.vars || p).palette.background.paper,
    stroke: s,
    strokeWidth: 2,
    className: m.root,
    onClick: l,
    cursor: l ? "pointer" : "unset"
  }, h, {
    "data-highlighted": d || void 0,
    "data-faded": u || void 0
  }));
}
process.env.NODE_ENV !== "production" && (Dy.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: n.object,
  /**
   * The index to the element in the series' data array.
   */
  dataIndex: n.number.isRequired,
  id: n.oneOfType([n.number, n.string]).isRequired,
  /**
   * The shape of the marker.
   */
  shape: n.oneOf(["circle", "cross", "diamond", "square", "star", "triangle", "wye"]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool
});
function Ly(e) {
  switch (e) {
    case "circle":
      return 0;
    case "cross":
      return 1;
    case "diamond":
      return 2;
    case "square":
      return 3;
    case "star":
      return 4;
    case "triangle":
      return 5;
    case "wye":
      return 6;
    default:
      return 0;
  }
}
const DA = ["x", "y", "id", "classes", "color", "shape", "dataIndex", "onClick", "skipAnimation", "isFaded", "isHighlighted"], LA = le("path", {
  name: "MuiMarkElement",
  slot: "Root"
})(({
  ownerState: e,
  theme: t
}) => ({
  fill: (t.vars || t).palette.background.paper,
  stroke: e.color,
  strokeWidth: 2,
  [`&.${jy.animate}`]: {
    transitionDuration: `${ci}ms`,
    transitionProperty: "transform, transform-origin",
    transitionTimingFunction: uo
  }
}));
function Ny(e) {
  const {
    x: t,
    y: r,
    id: i,
    classes: o,
    color: s,
    shape: a,
    dataIndex: l,
    onClick: c,
    skipAnimation: u,
    isFaded: d = !1,
    isHighlighted: f = !1
  } = e, p = oe(e, DA), h = ui({
    type: "line",
    seriesId: i,
    dataIndex: l
  }), g = {
    id: i,
    classes: o,
    isHighlighted: f,
    isFaded: d,
    color: s,
    skipAnimation: u
  }, m = $y(g);
  return /* @__PURE__ */ x.jsx(LA, A({}, p, {
    style: {
      transform: `translate(${t}px, ${r}px)`,
      transformOrigin: `${t}px ${r}px`
    },
    ownerState: g,
    className: m.root,
    d: Qg(Jg[Ly(a)])(),
    onClick: c,
    cursor: c ? "pointer" : "unset"
  }, h, {
    "data-highlighted": f || void 0,
    "data-faded": d || void 0
  }));
}
process.env.NODE_ENV !== "production" && (Ny.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: n.object,
  /**
   * The index to the element in the series' data array.
   */
  dataIndex: n.number.isRequired,
  id: n.oneOfType([n.number, n.string]).isRequired,
  /**
   * If `true`, the marker is faded.
   * @default false
   */
  isFaded: n.bool,
  /**
   * If `true`, the marker is highlighted.
   * @default false
   */
  isHighlighted: n.bool,
  /**
   * The shape of the marker.
   */
  shape: n.oneOf(["circle", "cross", "diamond", "square", "star", "triangle", "wye"]).isRequired,
  /**
   * If `true`, animations are skipped.
   */
  skipAnimation: n.bool
});
const NA = ["slots", "slotProps", "skipAnimation", "onItemClick"];
function Fy(e) {
  const {
    slots: t,
    slotProps: r,
    skipAnimation: i,
    onItemClick: o
  } = e, s = oe(e, NA), a = Ra(), l = fo(a || i), c = co(), {
    xAxis: u,
    xAxisIds: d
  } = Je(), {
    yAxis: f,
    yAxisIds: p
  } = Qe(), h = lo(), {
    instance: g,
    store: m
  } = Tt(), {
    isFaded: y,
    isHighlighted: b
  } = yy(), S = ie(m, Dg), C = $.useMemo(() => {
    const R = {};
    for (const {
      dataIndex: I,
      axisId: j
    } of S)
      R[j] === void 0 ? R[j] = /* @__PURE__ */ new Set([I]) : R[j].add(I);
    return R;
  }, [S]);
  if (c === void 0)
    return null;
  const {
    series: v,
    stackingGroups: O
  } = c, w = d[0], E = p[0];
  return /* @__PURE__ */ x.jsx("g", A({}, s, {
    children: O.flatMap(({
      ids: R
    }) => R.map((I) => {
      const {
        xAxisId: j = w,
        yAxisId: _ = E,
        stackedData: T,
        data: M,
        showMark: P = !0,
        shape: N = "circle"
      } = v[I];
      if (P === !1)
        return null;
      const L = li(u[j].scale), z = f[_].scale, H = u[j].data;
      if (H === void 0)
        throw new Error(`MUI X Charts: ${j === $n ? "The first `xAxis`" : `The x-axis with id "${j}"`} should have data property to be able to display a line plot.`);
      const Z = Cy(`${h}-${I}-line-clip`), F = ju(v[I], u[j], f[_]), k = t?.mark ?? (N === "circle" ? Dy : Ny), B = b({
        seriesId: I
      }), G = !B && y({
        seriesId: I
      });
      return /* @__PURE__ */ x.jsx("g", {
        clipPath: `url(#${Z})`,
        "data-series": I,
        children: H?.map((W, X) => {
          const J = M[X] == null ? null : T[X][1];
          return {
            x: L(W),
            y: J === null ? null : z(J),
            position: W,
            value: J,
            index: X
          };
        }).filter(({
          x: W,
          y: X,
          index: J,
          position: Q,
          value: te
        }) => te === null || X === null || !g.isPointInside(W, X) ? !1 : P === !0 ? !0 : P({
          x: W,
          y: X,
          index: J,
          position: Q,
          value: te
        })).map(({
          x: W,
          y: X,
          index: J
        }) => /* @__PURE__ */ x.jsx(k, A({
          id: I,
          dataIndex: J,
          shape: N,
          color: F(J),
          x: W,
          y: X,
          skipAnimation: l,
          onClick: o && ((Q) => o(Q, {
            type: "line",
            seriesId: I,
            dataIndex: J
          })),
          isHighlighted: C[j]?.has(J) || B,
          isFaded: G
        }, r?.mark), `${I}-${J}`))
      }, I);
    }))
  }));
}
process.env.NODE_ENV !== "production" && (Fy.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line mark item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line mark item identifier.
   */
  onItemClick: n.func,
  /**
   * If `true`, animations are skipped.
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
function Aa() {
  const [e, t] = $.useState(typeof window < "u" || process.env.NODE_ENV === "test");
  return $.useEffect(() => {
    t(!0);
  }, []), e;
}
function Du(e) {
  return typeof e == "number" && !Number.isFinite(e);
}
const ac = {
  start: 0,
  extremities: 0,
  end: 1,
  middle: 0.5
};
function Ol(e, t, r) {
  return e(t) - (e.step() - e.bandwidth()) / 2 + ac[r] * e.step();
}
function FA(e) {
  const {
    scale: t,
    tickNumber: r,
    valueFormatter: i,
    tickInterval: o,
    tickPlacement: s = "extremities",
    tickLabelPlacement: a,
    isInside: l
  } = e;
  if (Ue(t)) {
    const p = t.domain(), h = a ?? "middle";
    if (t.bandwidth() > 0) {
      const m = typeof o == "function" && p.filter(o) || typeof o == "object" && o || p, y = t.range()[0] > t.range()[1], b = m.findIndex((C) => l(Ol(t, C, y ? "start" : "end"))), S = m.findLastIndex((C) => l(Ol(t, C, y ? "end" : "start")));
      return [...m.slice(b, S + 1).map((C) => {
        const v = `${C}`;
        return {
          value: C,
          formattedValue: i?.(C, {
            location: "tick",
            scale: t,
            tickNumber: r,
            defaultTickLabel: v
          }) ?? v,
          offset: Ol(t, C, s),
          labelOffset: h === "tick" ? 0 : t.step() * (ac[h] - ac[s])
        };
      }), ...s === "extremities" && S === p.length - 1 && l(t.range()[1]) ? [{
        formattedValue: void 0,
        offset: t.range()[1],
        labelOffset: 0
      }] : []];
    }
    return (typeof o == "function" && p.filter(o) || typeof o == "object" && o || p).map((m) => {
      const y = `${m}`;
      return {
        value: m,
        formattedValue: i?.(m, {
          location: "tick",
          scale: t,
          tickNumber: r,
          defaultTickLabel: y
        }) ?? y,
        offset: t(m),
        labelOffset: 0
      };
    });
  }
  if (t.domain().some(Du))
    return [];
  const u = a, d = typeof o == "object" ? o : qA(t, r), f = [];
  for (let p = 0; p < d.length; p += 1) {
    const h = d[p], g = t(h);
    if (l(g)) {
      const m = t.tickFormat(r)(h);
      f.push({
        value: h,
        formattedValue: i?.(h, {
          location: "tick",
          scale: t,
          tickNumber: r,
          defaultTickLabel: m
        }) ?? m,
        offset: g,
        // Allowing the label to be placed in the middle of a continuous scale is weird.
        // But it is useful in some cases, like funnel categories with a linear scale.
        labelOffset: u === "middle" ? t(d[p - 1] ?? 0) - (g + t(d[p - 1] ?? 0)) / 2 : 0
      });
    }
  }
  return f;
}
function qA(e, t) {
  const r = e.domain();
  return r[0] === r[1] ? [r[0]] : e.ticks(t);
}
function Pa(e) {
  const {
    scale: t,
    tickNumber: r,
    valueFormatter: i,
    tickInterval: o,
    tickPlacement: s = "extremities",
    tickLabelPlacement: a,
    direction: l
  } = e, {
    instance: c
  } = Tt(), u = l === "x" ? c.isXInside : c.isYInside;
  return $.useMemo(() => FA({
    scale: t,
    tickNumber: r,
    tickPlacement: s,
    tickInterval: o,
    tickLabelPlacement: a,
    valueFormatter: i,
    isInside: u
  }), [t, r, s, o, a, i, u]);
}
function zA(e = !1) {
  const [t, r] = $.useState(!1);
  return Fe(() => {
    e || r(!0);
  }, [e]), $.useEffect(() => {
    e && r(!0);
  }, [e]), t;
}
const qy = typeof window < "u" && "Intl" in window && "Segmenter" in Intl ? new Intl.Segmenter(void 0, {
  granularity: "grapheme"
}) : null;
function BA(e) {
  return e.length;
}
function VA(e) {
  const t = qy.segment(e);
  let r = 0;
  for (const i of t)
    r += 1;
  return r;
}
const UA = qy ? VA : BA;
function HA(e) {
  return e * (Math.PI / 180);
}
const zy = typeof window < "u" && "Intl" in window && "Segmenter" in Intl ? new Intl.Segmenter(void 0, {
  granularity: "grapheme"
}) : null;
function GA(e, t) {
  return e.slice(0, t);
}
function WA(e, t) {
  const r = zy.segment(e);
  let i = "", o = 0;
  for (const s of r)
    if (i += s.segment, o += 1, o >= t)
      break;
  return i;
}
const YA = zy ? WA : GA, Rp = "…";
function By(e, t) {
  const {
    width: r,
    height: i,
    measureText: o
  } = t, s = HA(t.angle), a = o(e), l = Math.abs(a.width * Math.cos(s)) + Math.abs(a.height * Math.sin(s)), c = Math.abs(a.width * Math.sin(s)) + Math.abs(a.height * Math.cos(s));
  return l <= r && c <= i;
}
function Vy(e, t) {
  if (t(e))
    return e;
  let r = e, i = 1, o = 1 / 2;
  const s = UA(e);
  let a = s, l = s, c = null;
  do {
    if (l = a, a = Math.floor(s * o), a === 0)
      break;
    r = YA(e, a).trim();
    const u = t(r + Rp);
    i += 1, u ? (c = r, o += 1 / 2 ** i) : o -= 1 / 2 ** i;
  } while (Math.abs(a - l) !== 1);
  return c ? c + Rp : "";
}
function Uy() {
  return typeof window > "u";
}
const Tn = /* @__PURE__ */ new Map(), Hy = 2e3, XA = /* @__PURE__ */ new Set(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"]);
function Lu(e, t) {
  return XA.has(e) && t === +t ? `${t}px` : t;
}
const KA = /([A-Z])/g;
function Nu(e) {
  return String(e).replace(KA, (t) => `-${t.toLowerCase()}`);
}
function Gy(e) {
  let t = "";
  for (const r in e)
    if (Object.hasOwn(e, r)) {
      const i = r, o = e[i];
      if (o === void 0)
        continue;
      t += `${Nu(i)}:${Lu(i, o)};`;
    }
  return t;
}
const po = (e, t = {}) => {
  if (e == null || Uy())
    return {
      width: 0,
      height: 0
    };
  const r = String(e), i = Gy(t), o = `${r}-${i}`, s = Tn.get(o);
  if (s)
    return s;
  try {
    const a = Yy(), l = document.createElementNS("http://www.w3.org/2000/svg", "text");
    Object.keys(t).map((u) => (l.style[Nu(u)] = Lu(u, t[u]), u)), l.textContent = r, a.replaceChildren(l);
    const c = Wy(l);
    return Tn.set(o, c), Tn.size + 1 > Hy && Tn.clear(), process.env.NODE_ENV === "test" && a.replaceChildren(), c;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
};
function ZA(e, t = {}) {
  if (Uy())
    return new Map(Array.from(e).map((c) => [c, {
      width: 0,
      height: 0
    }]));
  const r = /* @__PURE__ */ new Map(), i = [], o = Gy(t);
  for (const c of e) {
    const u = `${c}-${o}`, d = Tn.get(u);
    d ? r.set(c, d) : i.push(c);
  }
  const s = Yy(), a = A({}, t);
  Object.keys(a).map((c) => (s.style[Nu(c)] = Lu(c, a[c]), c));
  const l = [];
  for (const c of i) {
    const u = document.createElementNS("http://www.w3.org/2000/svg", "text");
    u.textContent = `${c}`, l.push(u);
  }
  s.replaceChildren(...l);
  for (let c = 0; c < i.length; c += 1) {
    const u = i[c], d = s.children[c], f = Wy(d), p = `${u}-${o}`;
    Tn.set(p, f), r.set(u, f);
  }
  return Tn.size + 1 > Hy && Tn.clear(), process.env.NODE_ENV === "test" && s.replaceChildren(), r;
}
function Wy(e) {
  try {
    const t = e.getBBox();
    return {
      width: t.width,
      height: t.height
    };
  } catch {
    const t = e.getBoundingClientRect();
    return {
      width: t.width,
      height: t.height
    };
  }
}
let ot = null;
function Yy() {
  return ot === null && (ot = document.createElementNS("http://www.w3.org/2000/svg", "svg"), ot.setAttribute("aria-hidden", "true"), ot.style.position = "absolute", ot.style.top = "-20000px", ot.style.left = "0", ot.style.padding = "0", ot.style.margin = "0", ot.style.border = "none", ot.style.pointerEvents = "none", ot.style.visibility = "hidden", ot.style.contain = "strict", document.body.appendChild(ot)), ot;
}
function JA(e, t, r, i, o) {
  const s = /* @__PURE__ */ new Map(), a = wa(o?.angle ?? 0);
  let l = 1, c = 1;
  o?.textAnchor === "start" ? (l = 1 / 0, c = 1) : o?.textAnchor === "end" ? (l = 1, c = 1 / 0) : (l = 2, c = 2), a > 90 && a < 270 && ([l, c] = [c, l]), i && ([l, c] = [c, l]);
  for (const u of e)
    if (u.formattedValue) {
      const d = Math.min((u.offset + u.labelOffset) * l, (t.left + t.width + t.right - u.offset - u.labelOffset) * c), f = (p) => By(p, {
        width: d,
        height: r,
        angle: a,
        measureText: (h) => po(h, o)
      });
      s.set(u, Vy(u.formattedValue.toString(), f));
    }
  return s;
}
const Ap = 5;
function QA(e, t, r = 0) {
  process.env.NODE_ENV !== "production" && r > 90 && r < -90 && Mt(["MUI X Charts: It seems you applied an angle larger than 90° or smaller than -90° to an axis text.", "This could cause some text overlapping.", "If you encounter a use case where it's needed, please open an issue."]);
  const i = Math.min(Math.abs(r) % 180, Math.abs(Math.abs(r) % 180 - 180) % 180);
  if (i < Ap)
    return e;
  if (i > 90 - Ap)
    return t;
  const o = ln(i), s = Math.atan2(t, e);
  return o < s ? e / Math.cos(o) : t / Math.sin(o);
}
function eP(e, {
  tickLabelStyle: t,
  tickLabelInterval: r,
  tickLabelMinGap: i,
  reverse: o,
  isMounted: s,
  isXInside: a
}) {
  if (typeof r == "function")
    return new Set(e.filter((f, p) => r(f.value, p)));
  let l = 0;
  const c = o ? -1 : 1, u = e.filter((f) => {
    const {
      offset: p,
      labelOffset: h,
      formattedValue: g
    } = f;
    if (g === "")
      return !1;
    const m = p + h;
    return a(m);
  }), d = nP(u, t);
  return new Set(u.filter((f, p) => {
    const {
      offset: h,
      labelOffset: g
    } = f, m = h + g;
    if (p > 0 && c * m < c * (l + i))
      return !1;
    const {
      width: y,
      height: b
    } = s ? tP(d, f) : {
      width: 0,
      height: 0
    }, S = QA(y, b, t?.angle), C = m - c * S / 2;
    return p > 0 && c * C < c * (l + i) ? !1 : (l = m + c * S / 2, !0);
  }));
}
function tP(e, t) {
  if (t.formattedValue === void 0)
    return {
      width: 0,
      height: 0
    };
  let r = 0, i = 0;
  for (const o of t.formattedValue.split(`
`)) {
    const s = e.get(o);
    s && (r = Math.max(r, s.width), i += s.height);
  }
  return {
    width: r,
    height: i
  };
}
function nP(e, t) {
  const r = /* @__PURE__ */ new Set();
  for (const i of e)
    i.formattedValue && i.formattedValue.split(`
`).forEach((o) => r.add(o));
  return ZA(r, t);
}
function Xy(e) {
  return Ee("MuiChartsAxis", e);
}
const zo = Se("MuiChartsAxis", ["root", "line", "tickContainer", "tick", "tickLabel", "label", "directionX", "directionY", "top", "bottom", "left", "right", "id"]), Ky = (e) => {
  const {
    classes: t,
    position: r,
    id: i
  } = e, o = {
    root: ["root", "directionX", r, `id-${i}`],
    line: ["line"],
    tickContainer: ["tickContainer"],
    tick: ["tick"],
    tickLabel: ["tickLabel"],
    label: ["label"]
  };
  return Ae(o, Xy, t);
}, lc = 3, rP = 4, Zy = {
  disableLine: !1,
  disableTicks: !1,
  tickSize: 6,
  tickLabelMinGap: 4
};
function iP({
  style: e,
  needsComputation: t,
  text: r
}) {
  return r.split(`
`).map((i) => A({
    text: i
  }, t ? po(i, e) : {
    width: 0,
    height: 0
  }));
}
const oP = ["x", "y", "style", "text", "ownerState"], sP = ["angle", "textAnchor", "dominantBaseline"];
function ho(e) {
  const {
    x: t,
    y: r,
    style: i,
    text: o
  } = e, s = oe(e, oP), a = i ?? {}, {
    angle: l,
    textAnchor: c,
    dominantBaseline: u
  } = a, d = oe(a, sP), f = Aa(), p = $.useMemo(() => iP({
    style: d,
    needsComputation: f && o.includes(`
`),
    text: o
  }), [d, o, f]);
  let h;
  switch (u) {
    case "hanging":
    case "text-before-edge":
      h = 0;
      break;
    case "central":
      h = (p.length - 1) / 2 * -p[0].height;
      break;
    default:
      h = (p.length - 1) * -p[0].height;
      break;
  }
  return /* @__PURE__ */ x.jsx("text", A({}, s, {
    transform: l ? `rotate(${l}, ${t}, ${r})` : void 0,
    x: t,
    y: r,
    textAnchor: c,
    dominantBaseline: u,
    style: d,
    children: p.map((g, m) => /* @__PURE__ */ x.jsx("tspan", {
      x: t,
      dy: `${m === 0 ? h : p[0].height}px`,
      dominantBaseline: u,
      children: g.text
    }, m))
  }));
}
process.env.NODE_ENV !== "production" && (ho.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Height of a text line (in `em`).
   */
  lineHeight: n.number,
  /**
   * If `true`, the line width is computed.
   * @default false
   */
  needsComputation: n.bool,
  ownerState: n.any,
  /**
   * Style applied to text elements.
   */
  style: n.object,
  /**
   * Text displayed.
   */
  text: n.string.isRequired
});
function Jy(e) {
  const t = wa(e);
  return t <= 30 || t >= 330 || t <= 210 && t >= 150 ? "middle" : t <= 180 ? "end" : "start";
}
function Qy(e) {
  const t = wa(e);
  return t <= 30 || t >= 330 ? "hanging" : t <= 210 && t >= 150 ? "auto" : "central";
}
function eb(e) {
  switch (e) {
    case "start":
      return "end";
    case "end":
      return "start";
    default:
      return e;
  }
}
const aP = ["scale", "tickNumber", "reverse"];
function tb(e) {
  const {
    xAxis: t,
    xAxisIds: r
  } = Je(), i = t[e.axisId ?? r[0]], {
    scale: o,
    tickNumber: s,
    reverse: a
  } = i, l = oe(i, aP), c = nt({
    props: A({}, l, e),
    name: "MuiChartsXAxis"
  }), u = A({}, Zy, c), {
    position: d,
    tickLabelStyle: f,
    slots: p,
    slotProps: h
  } = u, g = Ft(), m = Ji(), y = Ky(u), b = d === "bottom" ? 1 : -1, S = p?.axisTick ?? "line", C = p?.axisTickLabel ?? ho, v = Jy((d === "bottom" ? 0 : 180) - (f?.angle ?? 0)), O = Qy((d === "bottom" ? 0 : 180) - (f?.angle ?? 0)), w = Nt({
    elementType: C,
    externalSlotProps: h?.axisTickLabel,
    additionalProps: {
      style: A({}, g.typography.caption, {
        fontSize: 12,
        lineHeight: 1.25,
        textAnchor: m ? eb(v) : v,
        dominantBaseline: O
      }, f)
    },
    className: y.tickLabel,
    ownerState: {}
  });
  return {
    xScale: o,
    defaultizedProps: u,
    tickNumber: s,
    positionSign: b,
    classes: y,
    Tick: S,
    TickLabel: C,
    axisTickLabelProps: w,
    reverse: a
  };
}
function lP(e) {
  const {
    axisLabelHeight: t
  } = e, {
    xScale: r,
    defaultizedProps: i,
    tickNumber: o,
    positionSign: s,
    classes: a,
    Tick: l,
    TickLabel: c,
    axisTickLabelProps: u,
    reverse: d
  } = tb(e), f = Ji(), p = zA(), {
    disableTicks: h,
    tickSize: g,
    valueFormatter: m,
    slotProps: y,
    tickInterval: b,
    tickLabelInterval: S,
    tickPlacement: C,
    tickLabelPlacement: v,
    tickLabelMinGap: O,
    height: w
  } = i, E = gt(), {
    instance: R
  } = Tt(), I = Aa(), j = h ? 4 : g, _ = Pa({
    scale: r,
    tickNumber: o,
    valueFormatter: m,
    tickInterval: b,
    tickPlacement: C,
    tickLabelPlacement: v,
    direction: "x"
  }), T = eP(_, {
    tickLabelStyle: u.style,
    tickLabelInterval: S,
    tickLabelMinGap: O,
    reverse: d,
    isMounted: p,
    isXInside: R.isXInside
  }), M = Math.max(0, w - (t > 0 ? t + rP : 0) - j - lc), P = I ? JA(T, E, M, f, u.style) : new Map(Array.from(T).map((N) => [N, N.formattedValue]));
  return /* @__PURE__ */ x.jsx($.Fragment, {
    children: _.map((N, L) => {
      const {
        offset: z,
        labelOffset: H
      } = N, Z = H ?? 0, F = s * (j + lc), k = R.isXInside(z), B = P.get(N), G = T.has(N);
      return /* @__PURE__ */ x.jsxs("g", {
        transform: `translate(${z}, 0)`,
        className: a.tickContainer,
        children: [!h && k && /* @__PURE__ */ x.jsx(l, A({
          y2: s * j,
          className: a.tick
        }, y?.axisTick)), B !== void 0 && G && /* @__PURE__ */ x.jsx(c, A({
          x: Z,
          y: F
        }, u, {
          text: B
        }))]
      }, L);
    })
  });
}
const Si = {
  start: 0,
  extremities: 0,
  end: 1,
  middle: 0.5,
  tick: 0
};
function nb(e) {
  const {
    scale: t,
    tickInterval: r,
    tickLabelPlacement: i = "middle",
    tickPlacement: o = "extremities",
    groups: s
  } = e;
  return $.useMemo(() => {
    const a = t.domain(), l = typeof r == "function" && a.filter(r) || typeof r == "object" && r || a;
    if (t.bandwidth() > 0) {
      const c = Pp(l, s, o, i, t);
      return c[0] && (c[0].ignoreTick = !0), [
        {
          formattedValue: void 0,
          offset: t.range()[0],
          labelOffset: 0,
          groupIndex: s.length - 1
        },
        ...c,
        // Last tick
        {
          formattedValue: void 0,
          offset: t.range()[1],
          labelOffset: 0,
          groupIndex: s.length - 1
        }
      ];
    }
    return Pp(l, s, o, i, t);
  }, [t, r, s, o, i]);
}
function Pp(e, t, r, i, o) {
  const s = [], a = /* @__PURE__ */ new Map();
  let l = 0;
  for (let c = 0; c < t.length; c += 1)
    for (let u = 0; u < e.length; u += 1) {
      const d = e[u], f = t[c].getValue(d, u), p = s[s.length - 1];
      if (p?.value !== f || p?.groupIndex !== c) {
        l = 1;
        const g = Ue(o) ? o(d) - (o.step() - o.bandwidth()) / 2 + Si[r] * o.step() : o(d), m = o.step() * l * (Si[i] - Si[r]);
        s.push({
          value: f,
          formattedValue: `${f}`,
          offset: g,
          groupIndex: c,
          dataIndex: u,
          ignoreTick: !1,
          labelOffset: m
        }), a.has(u) || a.set(u, /* @__PURE__ */ new Set());
        const y = a.get(u);
        for (const b of y.values())
          s[b].ignoreTick = !0;
        y.add(s.length - 1);
      } else {
        l += 1;
        const g = o.step() * l * (Si[i] - Si[r]);
        p.labelOffset = g;
      }
    }
  return s;
}
const Ip = {
  tickSize: 6
}, cP = (e, t, r) => {
  const i = e[t] ?? {}, o = r ?? Ip.tickSize, s = o * t * 2 + o;
  return A({}, Ip, i, {
    tickSize: i.tickSize ?? s
  });
};
function uP(e) {
  const {
    xScale: t,
    defaultizedProps: r,
    positionSign: i,
    classes: o,
    Tick: s,
    TickLabel: a,
    axisTickLabelProps: l
  } = tb(e);
  if (!Ue(t))
    throw new Error("MUI X Charts: ChartsGroupedXAxis only supports the `band` and `point` scale types.");
  const {
    disableTicks: c,
    tickSize: u,
    valueFormatter: d,
    slotProps: f,
    tickInterval: p,
    tickPlacement: h,
    tickLabelPlacement: g
  } = r, m = r.groups, {
    instance: y
  } = Tt(), b = nb({
    scale: t,
    tickInterval: p,
    tickPlacement: h,
    tickLabelPlacement: g,
    groups: m
  });
  return /* @__PURE__ */ x.jsx($.Fragment, {
    children: b.map((S, C) => {
      const {
        offset: v,
        labelOffset: O
      } = S, w = O ?? 0, E = y.isXInside(v), R = S.formattedValue, I = S.ignoreTick ?? !1, j = S.groupIndex ?? 0, _ = cP(m, j, u), T = i * _.tickSize, M = i * (_.tickSize + lc);
      return /* @__PURE__ */ x.jsxs("g", {
        transform: `translate(${v}, 0)`,
        className: o.tickContainer,
        "data-group-index": j,
        children: [!c && !I && E && /* @__PURE__ */ x.jsx(s, A({
          y2: T,
          className: o.tick
        }, f?.axisTick)), R !== void 0 && /* @__PURE__ */ x.jsx(a, A({
          x: w,
          y: M
        }, l, {
          style: A({}, l.style, _.tickLabelStyle),
          text: R
        }))]
      }, C);
    })
  });
}
const rb = le("g", {
  name: "MuiChartsAxis",
  slot: "Root"
})(({
  theme: e
}) => ({
  [`& .${zo.tickLabel}`]: A({}, e.typography.caption, {
    fill: (e.vars || e).palette.text.primary
  }),
  [`& .${zo.label}`]: {
    fill: (e.vars || e).palette.text.primary
  },
  [`& .${zo.line}`]: {
    stroke: (e.vars || e).palette.text.primary,
    shapeRendering: "crispEdges",
    strokeWidth: 1
  },
  [`& .${zo.tick}`]: {
    stroke: (e.vars || e).palette.text.primary,
    shapeRendering: "crispEdges"
  }
})), dP = ["axis"], fP = ["scale", "tickNumber", "reverse"], pP = le(rb, {
  name: "MuiChartsXAxis",
  slot: "Root"
})({});
function hP(e) {
  let {
    axis: t
  } = e, r = oe(e, dP);
  const {
    scale: i
  } = t, o = oe(t, fP), s = nt({
    props: A({}, o, r),
    name: "MuiChartsXAxis"
  }), a = A({}, Zy, s), {
    position: l,
    labelStyle: c,
    offset: u,
    slots: d,
    slotProps: f,
    sx: p,
    disableLine: h,
    label: g,
    height: m
  } = a, y = Ft(), b = Ky(a), {
    left: S,
    top: C,
    width: v,
    height: O
  } = gt(), w = l === "bottom" ? 1 : -1, E = d?.axisLine ?? "line", R = d?.axisLabel ?? ho, I = Nt({
    elementType: R,
    externalSlotProps: f?.axisLabel,
    additionalProps: {
      style: A({}, y.typography.body1, {
        lineHeight: 1,
        fontSize: 14,
        textAnchor: "middle",
        dominantBaseline: l === "bottom" ? "text-after-edge" : "text-before-edge"
      }, c)
    },
    ownerState: {}
  });
  if (l === "none")
    return null;
  const j = g ? po(g, I.style).height : 0, _ = i.domain(), M = Ue(i) ? _.length === 0 : _.some(Du);
  let P = null;
  M || (P = "groups" in t && Array.isArray(t.groups) ? /* @__PURE__ */ x.jsx(uP, A({}, r)) : /* @__PURE__ */ x.jsx(lP, A({}, r, {
    axisLabelHeight: j
  })));
  const N = {
    x: S + v / 2,
    y: w * m
  };
  return /* @__PURE__ */ x.jsxs(pP, {
    transform: `translate(0, ${l === "bottom" ? C + O + u : C - u})`,
    className: b.root,
    sx: p,
    children: [!h && /* @__PURE__ */ x.jsx(E, A({
      x1: S,
      x2: S + v,
      className: b.line
    }, f?.axisLine)), P, g && /* @__PURE__ */ x.jsx("g", {
      className: b.label,
      children: /* @__PURE__ */ x.jsx(R, A({}, N, I, {
        text: g
      }))
    })]
  });
}
function ib(e) {
  const {
    xAxis: t,
    xAxisIds: r
  } = Je(), i = t[e.axisId ?? r[0]];
  return i ? /* @__PURE__ */ x.jsx(hP, A({}, e, {
    axis: i
  })) : (Mt(`MUI X Charts: No axis found. The axisId "${e.axisId}" is probably invalid.`), null);
}
process.env.NODE_ENV !== "production" && (ib.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  axis: n.oneOf(["x"]),
  /**
   * The id of the axis to render.
   * If undefined, it will be the first defined axis.
   */
  axisId: n.oneOfType([n.number, n.string]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * If true, the axis line is disabled.
   * @default false
   */
  disableLine: n.bool,
  /**
   * If true, the ticks are disabled.
   * @default false
   */
  disableTicks: n.bool,
  /**
   * The label of the axis.
   */
  label: n.string,
  /**
   * The style applied to the axis label.
   */
  labelStyle: n.object,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Defines which ticks are displayed.
   * Its value can be:
   * - 'auto' In such case the ticks are computed based on axis scale and other parameters.
   * - a filtering function of the form `(value, index) => boolean` which is available only if the axis has "point" scale.
   * - an array containing the values where ticks should be displayed.
   * @see See {@link https://mui.com/x/react-charts/axis/#fixed-tick-positions}
   * @default 'auto'
   */
  tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
  /**
   * Defines which ticks get its label displayed. Its value can be:
   * - 'auto' In such case, labels are displayed if they do not overlap with the previous one.
   * - a filtering function of the form (value, index) => boolean. Warning: the index is tick index, not data ones.
   * @default 'auto'
   */
  tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
  /**
   * The minimum gap in pixels between two tick labels.
   * If two tick labels are closer than this minimum gap, one of them will be hidden.
   * @default 4
   */
  tickLabelMinGap: n.number,
  /**
   * The placement of ticks label. Can be the middle of the band, or the tick position.
   * Only used if scale is 'band'.
   * @default 'middle'
   */
  tickLabelPlacement: n.oneOf(["middle", "tick"]),
  /**
   * The style applied to ticks text.
   */
  tickLabelStyle: n.object,
  /**
   * Maximal step between two ticks.
   * When using time data, the value is assumed to be in ms.
   * Not supported by categorical axis (band, points).
   */
  tickMaxStep: n.number,
  /**
   * Minimal step between two ticks.
   * When using time data, the value is assumed to be in ms.
   * Not supported by categorical axis (band, points).
   */
  tickMinStep: n.number,
  /**
   * The number of ticks. This number is not guaranteed.
   * Not supported by categorical axis (band, points).
   */
  tickNumber: n.number,
  /**
   * The placement of ticks in regard to the band interval.
   * Only used if scale is 'band'.
   * @default 'extremities'
   */
  tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
  /**
   * The size of the ticks.
   * @default 6
   */
  tickSize: n.number
});
function mP(e, t, r, i, o) {
  const s = /* @__PURE__ */ new Map(), a = wa(o?.angle ?? 0);
  let l = 1, c = 1;
  o?.textAnchor === "start" ? (l = 1 / 0, c = 1) : o?.textAnchor === "end" ? (l = 1, c = 1 / 0) : (l = 2, c = 2), a > 180 && ([l, c] = [c, l]), i && ([l, c] = [c, l]);
  for (const u of e)
    if (u.formattedValue) {
      const d = Math.min((u.offset + u.labelOffset) * l, (t.top + t.height + t.bottom - u.offset - u.labelOffset) * c), f = (p) => By(p, {
        width: r,
        height: d,
        angle: a,
        measureText: (h) => po(h, o)
      });
      s.set(u, Vy(u.formattedValue.toString(), f));
    }
  return s;
}
const ob = (e) => {
  const {
    classes: t,
    position: r,
    id: i
  } = e, o = {
    root: ["root", "directionY", r, `id-${i}`],
    line: ["line"],
    tickContainer: ["tickContainer"],
    tick: ["tick"],
    tickLabel: ["tickLabel"],
    label: ["label"]
  };
  return Ae(o, Xy, t);
}, cc = 2, gP = 2, sb = {
  disableLine: !1,
  disableTicks: !1,
  tickSize: 6
}, yP = ["scale", "tickNumber", "reverse"];
function ab(e) {
  const {
    yAxis: t,
    yAxisIds: r
  } = Qe(), i = t[e.axisId ?? r[0]], {
    scale: o,
    tickNumber: s
  } = i, a = oe(i, yP), l = nt({
    props: A({}, a, e),
    name: "MuiChartsYAxis"
  }), c = A({}, sb, l), {
    position: u,
    tickLabelStyle: d,
    slots: f,
    slotProps: p
  } = c, h = Ft(), g = Ji(), m = ob(c), y = u === "right" ? 1 : -1, b = typeof d?.fontSize == "number" ? d.fontSize : 12, S = f?.axisTick ?? "line", C = f?.axisTickLabel ?? ho, v = Jy((u === "right" ? -90 : 90) - (d?.angle ?? 0)), O = Qy((u === "right" ? -90 : 90) - (d?.angle ?? 0)), w = Nt({
    elementType: C,
    externalSlotProps: p?.axisTickLabel,
    additionalProps: {
      style: A({}, h.typography.caption, {
        fontSize: b,
        textAnchor: g ? eb(v) : v,
        dominantBaseline: O
      }, d)
    },
    className: m.tickLabel,
    ownerState: {}
  });
  return {
    yScale: o,
    defaultizedProps: c,
    tickNumber: s,
    positionSign: y,
    classes: m,
    Tick: S,
    TickLabel: C,
    axisTickLabelProps: w
  };
}
function bP(e) {
  const {
    axisLabelHeight: t
  } = e, {
    yScale: r,
    defaultizedProps: i,
    tickNumber: o,
    positionSign: s,
    classes: a,
    Tick: l,
    TickLabel: c,
    axisTickLabelProps: u
  } = ab(e), d = Ji(), {
    disableTicks: f,
    tickSize: p,
    valueFormatter: h,
    slotProps: g,
    tickPlacement: m,
    tickLabelPlacement: y,
    tickInterval: b,
    tickLabelInterval: S,
    width: C
  } = i, v = gt(), {
    instance: O
  } = Tt(), w = Aa(), E = f ? 4 : p, R = Pa({
    scale: r,
    tickNumber: o,
    valueFormatter: h,
    tickPlacement: m,
    tickLabelPlacement: y,
    tickInterval: b,
    direction: "y"
  }), I = Math.max(0, C - (t > 0 ? t + gP : 0) - E - cc), j = w ? mP(R, v, I, d, u.style) : new Map(Array.from(R).map((_) => [_, _.formattedValue]));
  return /* @__PURE__ */ x.jsx($.Fragment, {
    children: R.map((_, T) => {
      const {
        offset: M,
        labelOffset: P,
        value: N
      } = _, L = s * (E + cc), z = P, H = typeof S == "function" && !S?.(N, T), Z = O.isYInside(M), F = j.get(_);
      return Z ? /* @__PURE__ */ x.jsxs("g", {
        transform: `translate(0, ${M})`,
        className: a.tickContainer,
        children: [!f && /* @__PURE__ */ x.jsx(l, A({
          x2: s * E,
          className: a.tick
        }, g?.axisTick)), F !== void 0 && !H && /* @__PURE__ */ x.jsx(c, A({
          x: L,
          y: z,
          text: F
        }, u))]
      }, T) : null;
    })
  });
}
const Mp = {
  tickSize: 6
}, xP = (e, t, r) => {
  const i = e[t] ?? {}, o = r ?? Mp.tickSize, s = o * t * 2 + o;
  return A({}, Mp, i, {
    tickSize: i.tickSize ?? s
  });
};
function vP(e) {
  const {
    yScale: t,
    defaultizedProps: r,
    positionSign: i,
    classes: o,
    Tick: s,
    TickLabel: a,
    axisTickLabelProps: l
  } = ab(e);
  if (!Ue(t))
    throw new Error("MUI X Charts: ChartsGroupedYAxis only supports the `band` and `point` scale types.");
  const {
    disableTicks: c,
    tickSize: u,
    valueFormatter: d,
    slotProps: f,
    tickInterval: p,
    tickPlacement: h,
    tickLabelPlacement: g
  } = r, m = r.groups, {
    instance: y
  } = Tt(), b = nb({
    scale: t,
    tickInterval: p,
    tickPlacement: h,
    tickLabelPlacement: g,
    groups: m
  });
  return /* @__PURE__ */ x.jsx($.Fragment, {
    children: b.map((S, C) => {
      const {
        offset: v,
        labelOffset: O
      } = S, w = O ?? 0, E = y.isYInside(v), R = S.formattedValue, I = S.ignoreTick ?? !1, j = S.groupIndex ?? 0, _ = xP(m, j, u), T = i * _.tickSize, M = i * (_.tickSize + cc);
      return /* @__PURE__ */ x.jsxs("g", {
        transform: `translate(0, ${v})`,
        className: o.tickContainer,
        "data-group-index": j,
        children: [!c && !I && E && /* @__PURE__ */ x.jsx(s, A({
          x2: T,
          className: o.tick
        }, f?.axisTick)), R !== void 0 && /* @__PURE__ */ x.jsx(a, A({
          x: M,
          y: w
        }, l, {
          style: A({}, l.style, _.tickLabelStyle),
          text: R
        }))]
      }, C);
    })
  });
}
const OP = ["axis"], TP = ["scale", "tickNumber", "reverse"], SP = le(rb, {
  name: "MuiChartsYAxis",
  slot: "Root"
})({});
function wP(e) {
  let {
    axis: t
  } = e, r = oe(e, OP);
  const {
    scale: i
  } = t, o = oe(t, TP), s = Aa(), a = nt({
    props: A({}, o, r),
    name: "MuiChartsYAxis"
  }), l = A({}, sb, a), {
    position: c,
    disableLine: u,
    label: d,
    labelStyle: f,
    offset: p,
    width: h,
    sx: g,
    slots: m,
    slotProps: y
  } = l, b = Ft(), S = ob(l), {
    left: C,
    top: v,
    width: O,
    height: w
  } = gt(), E = c === "right" ? 1 : -1, R = m?.axisLine ?? "line", I = m?.axisLabel ?? ho, j = Nt({
    elementType: R,
    externalSlotProps: y?.axisLine,
    additionalProps: {
      strokeLinecap: "square"
    },
    ownerState: {}
  }), _ = Nt({
    elementType: I,
    externalSlotProps: y?.axisLabel,
    additionalProps: {
      style: A({}, b.typography.body1, {
        lineHeight: 1,
        fontSize: 14,
        angle: E * 90,
        textAnchor: "middle",
        dominantBaseline: "text-before-edge"
      }, f)
    },
    ownerState: {}
  });
  if (c === "none")
    return null;
  const T = {
    x: E * h,
    y: v + w / 2
  }, M = d == null ? 0 : po(d, _.style).height, P = i.domain(), L = Ue(i) ? P.length === 0 : P.some(Du);
  let z = null;
  return L || (z = "groups" in t && Array.isArray(t.groups) ? /* @__PURE__ */ x.jsx(vP, A({}, r)) : /* @__PURE__ */ x.jsx(bP, A({}, r, {
    axisLabelHeight: M
  }))), /* @__PURE__ */ x.jsxs(SP, {
    transform: `translate(${c === "right" ? C + O + p : C - p}, 0)`,
    className: S.root,
    sx: g,
    children: [!u && /* @__PURE__ */ x.jsx(R, A({
      y1: v,
      y2: v + w,
      className: S.line
    }, j)), z, d && s && /* @__PURE__ */ x.jsx("g", {
      className: S.label,
      children: /* @__PURE__ */ x.jsx(I, A({}, T, _, {
        text: d
      }))
    })]
  });
}
function lb(e) {
  const {
    yAxis: t,
    yAxisIds: r
  } = Qe(), i = t[e.axisId ?? r[0]];
  return i ? /* @__PURE__ */ x.jsx(wP, A({}, e, {
    axis: i
  })) : (Mt(`MUI X Charts: No axis found. The axisId "${e.axisId}" is probably invalid.`), null);
}
process.env.NODE_ENV !== "production" && (lb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  axis: n.oneOf(["y"]),
  /**
   * The id of the axis to render.
   * If undefined, it will be the first defined axis.
   */
  axisId: n.oneOfType([n.number, n.string]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * If true, the axis line is disabled.
   * @default false
   */
  disableLine: n.bool,
  /**
   * If true, the ticks are disabled.
   * @default false
   */
  disableTicks: n.bool,
  /**
   * The label of the axis.
   */
  label: n.string,
  /**
   * The style applied to the axis label.
   */
  labelStyle: n.object,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Defines which ticks are displayed.
   * Its value can be:
   * - 'auto' In such case the ticks are computed based on axis scale and other parameters.
   * - a filtering function of the form `(value, index) => boolean` which is available only if the axis has "point" scale.
   * - an array containing the values where ticks should be displayed.
   * @see See {@link https://mui.com/x/react-charts/axis/#fixed-tick-positions}
   * @default 'auto'
   */
  tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
  /**
   * Defines which ticks get its label displayed. Its value can be:
   * - 'auto' In such case, labels are displayed if they do not overlap with the previous one.
   * - a filtering function of the form (value, index) => boolean. Warning: the index is tick index, not data ones.
   * @default 'auto'
   */
  tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
  /**
   * The placement of ticks label. Can be the middle of the band, or the tick position.
   * Only used if scale is 'band'.
   * @default 'middle'
   */
  tickLabelPlacement: n.oneOf(["middle", "tick"]),
  /**
   * The style applied to ticks text.
   */
  tickLabelStyle: n.object,
  /**
   * Maximal step between two ticks.
   * When using time data, the value is assumed to be in ms.
   * Not supported by categorical axis (band, points).
   */
  tickMaxStep: n.number,
  /**
   * Minimal step between two ticks.
   * When using time data, the value is assumed to be in ms.
   * Not supported by categorical axis (band, points).
   */
  tickMinStep: n.number,
  /**
   * The number of ticks. This number is not guaranteed.
   * Not supported by categorical axis (band, points).
   */
  tickNumber: n.number,
  /**
   * The placement of ticks in regard to the band interval.
   * Only used if scale is 'band'.
   * @default 'extremities'
   */
  tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
  /**
   * The size of the ticks.
   * @default 6
   */
  tickSize: n.number
});
function Fu(e) {
  const {
    slots: t,
    slotProps: r
  } = e, {
    xAxisIds: i,
    xAxis: o
  } = Je(), {
    yAxisIds: s,
    yAxis: a
  } = Qe();
  return /* @__PURE__ */ x.jsxs($.Fragment, {
    children: [i.map((l) => !o[l].position || o[l].position === "none" ? null : /* @__PURE__ */ x.jsx(ib, {
      slots: t,
      slotProps: r,
      axisId: l
    }, l)), s.map((l) => !a[l].position || a[l].position === "none" ? null : /* @__PURE__ */ x.jsx(lb, {
      slots: t,
      slotProps: r,
      axisId: l
    }, l))]
  });
}
process.env.NODE_ENV !== "production" && (Fu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
function ar(e, t, r, i, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = o || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${i} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
function CP(e) {
  return typeof e.main == "string";
}
function EP(e, t = []) {
  if (!CP(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Vi(e = []) {
  return ([, t]) => t && EP(t, e);
}
function kP(e) {
  return Ee("MuiTypography", e);
}
Se("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const RP = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, AP = aT(), PP = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: i,
    paragraph: o,
    variant: s,
    classes: a
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${pe(t)}`, r && "gutterBottom", i && "noWrap", o && "paragraph"]
  };
  return Ae(l, kP, a);
}, IP = le("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${pe(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(An(({
  theme: e
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(e.typography).filter(([t, r]) => t !== "inherit" && r && typeof r == "object").map(([t, r]) => ({
    props: {
      variant: t
    },
    style: r
  })), ...Object.entries(e.palette).filter(Vi()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${pe(t)}`
    },
    style: {
      color: (e.vars || e).palette.text[t]
    }
  })), {
    props: ({
      ownerState: t
    }) => t.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), _p = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Ia = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const {
    color: i,
    ...o
  } = jn({
    props: t,
    name: "MuiTypography"
  }), s = !RP[i], a = AP({
    ...o,
    ...s && {
      color: i
    }
  }), {
    align: l = "inherit",
    className: c,
    component: u,
    gutterBottom: d = !1,
    noWrap: f = !1,
    paragraph: p = !1,
    variant: h = "body1",
    variantMapping: g = _p,
    ...m
  } = a, y = {
    ...a,
    align: l,
    color: i,
    className: c,
    component: u,
    gutterBottom: d,
    noWrap: f,
    paragraph: p,
    variant: h,
    variantMapping: g
  }, b = u || (p ? "p" : g[h] || _p[h]) || "span", S = PP(y);
  return /* @__PURE__ */ x.jsx(IP, {
    as: b,
    ref: r,
    className: be(S.root, c),
    ...m,
    ownerState: y,
    style: {
      ...l !== "inherit" && {
        "--Typography-textAlign": l
      },
      ...m.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ia.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: n.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: n.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: n.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: n.bool,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: n.oneOfType([n.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), n.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: n.object
});
function MP(e) {
  return Ee("MuiChartsTooltip", e);
}
const jr = Se("MuiChartsTooltip", ["root", "paper", "table", "row", "cell", "mark", "markContainer", "labelCell", "valueCell", "axisValueCell"]), Ma = (e) => Ae({
  root: ["root"],
  paper: ["paper"],
  table: ["table"],
  row: ["row"],
  cell: ["cell"],
  mark: ["mark"],
  markContainer: ["markContainer"],
  labelCell: ["labelCell"],
  valueCell: ["valueCell"],
  axisValueCell: ["axisValueCell"]
}, MP, e);
function _P() {
  const e = we(), t = ie(e, kg), r = ie(e, Ot), i = Ca(), {
    xAxis: o,
    xAxisIds: s
  } = Je(), {
    yAxis: a,
    yAxisIds: l
  } = Qe(), {
    zAxis: c,
    zAxisIds: u
  } = Ru(), {
    rotationAxis: d,
    rotationAxisIds: f
  } = py();
  if (!t)
    return null;
  const p = i[t.type]?.series[t.seriesId];
  if (!p)
    return null;
  const h = Os(p) ? p.xAxisId ?? s[0] : void 0, g = Os(p) ? p.yAxisId ?? l[0] : void 0, m = "zAxisId" in p ? p.zAxisId ?? u[0] : u[0], y = f[0], b = r[p.type].colorProcessor?.(p, h !== void 0 ? o[h] : void 0, g !== void 0 ? a[g] : void 0, m !== void 0 ? c[m] : void 0) ?? (() => ""), S = {};
  return h !== void 0 && (S.x = o[h]), g !== void 0 && (S.y = a[g]), y !== void 0 && (S.rotation = d[y]), r[p.type].tooltipGetter({
    series: p,
    axesConfig: S,
    getColor: b,
    identifier: t
  });
}
const uc = le("div", {
  name: "MuiChartsTooltip",
  slot: "Container",
  overridesResolver: (e, t) => t.paper
  // FIXME: Inconsistent naming with slot
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  borderRadius: (e.vars || e).shape?.borderRadius,
  border: `solid ${(e.vars || e).palette.divider} 1px`
})), dc = le("table", {
  name: "MuiChartsTooltip",
  slot: "Table"
})(({
  theme: e
}) => ({
  borderSpacing: 0,
  [`& .${jr.markContainer}`]: {
    display: "inline-block",
    width: `calc(20px + ${e.spacing(1.5)})`,
    verticalAlign: "middle"
  },
  "& caption": {
    borderBottom: `solid ${(e.vars || e).palette.divider} 1px`,
    padding: e.spacing(0.5, 1.5),
    textAlign: "start",
    whiteSpace: "nowrap",
    "& span": {
      marginRight: e.spacing(1.5)
    }
  }
})), fc = le("tr", {
  name: "MuiChartsTooltip",
  slot: "Row"
})(({
  theme: e
}) => ({
  "tr:first-of-type& td": {
    paddingTop: e.spacing(0.5)
  },
  "tr:last-of-type& td": {
    paddingBottom: e.spacing(0.5)
  }
})), $r = le(Ia, {
  name: "MuiChartsTooltip",
  slot: "Cell"
})(({
  theme: e
}) => ({
  verticalAlign: "middle",
  color: (e.vars || e).palette.text.secondary,
  textAlign: "start",
  [`&.${jr.cell}`]: {
    paddingLeft: e.spacing(1),
    paddingRight: e.spacing(1)
  },
  [`&.${jr.labelCell}`]: {
    whiteSpace: "nowrap",
    fontWeight: e.typography.fontWeightRegular
  },
  [`&.${jr.valueCell}, &.${jr.axisValueCell}`]: {
    color: (e.vars || e).palette.text.primary,
    fontWeight: e.typography.fontWeightMedium
  },
  [`&.${jr.valueCell}`]: {
    paddingLeft: e.spacing(1.5),
    paddingRight: e.spacing(1.5)
  },
  "td:first-of-type&, th:first-of-type&": {
    paddingLeft: e.spacing(1.5)
  },
  "td:last-of-type&, th:last-of-type&": {
    paddingRight: e.spacing(1.5)
  }
}));
function jP(e) {
  return Ee("MuiChartsLabelMark", e);
}
const Ir = Se("MuiChartsLabelMark", ["root", "line", "square", "circle", "mask", "fill"]), $P = (e) => {
  const {
    type: t
  } = e;
  return Ae({
    root: typeof t == "function" ? ["root"] : ["root", t],
    mask: ["mask"],
    fill: ["fill"]
  }, jP, e.classes);
}, qu = (e, t, r) => /* @__PURE__ */ $.forwardRef(function(o, s) {
  const a = nt({
    props: o,
    // eslint-disable-next-line material-ui/mui-name-matches-component-name
    name: e
  }), l = typeof t.defaultProps == "function" ? t.defaultProps(a) : t.defaultProps ?? {}, c = or(l, a), u = Ft(), d = t.classesResolver?.(c, u), f = /* @__PURE__ */ $.forwardRef(r);
  return process.env.NODE_ENV !== "production" && (f.displayName = "OutComponent"), process.env.NODE_ENV !== "production" && (f.displayName = `consumeThemeProps(${e})`), /* @__PURE__ */ x.jsx(f, A({}, c, {
    classes: d,
    ref: s
  }));
});
process.env.NODE_ENV !== "production" && (qu.displayName = "consumeThemeProps");
const DP = ["type", "color", "className", "classes"], LP = le("div", {
  name: "MuiChartsLabelMark",
  slot: "Root"
})(() => ({
  display: "flex",
  width: 14,
  height: 14,
  [`&.${Ir.line}`]: {
    width: 16,
    height: "unset",
    alignItems: "center",
    [`.${Ir.mask}`]: {
      height: 4,
      width: "100%",
      borderRadius: 1,
      overflow: "hidden"
    }
  },
  [`&.${Ir.square}`]: {
    height: 13,
    width: 13,
    borderRadius: 2,
    overflow: "hidden"
  },
  [`&.${Ir.circle}`]: {
    height: 15,
    width: 15
  },
  svg: {
    display: "block"
  },
  [`& .${Ir.mask} > *`]: {
    height: "100%",
    width: "100%"
  },
  [`& .${Ir.mask}`]: {
    height: "100%",
    width: "100%"
  }
})), Ui = qu("MuiChartsLabelMark", {
  defaultProps: {
    type: "square"
  },
  classesResolver: $P
}, function(t, r) {
  const {
    type: i,
    color: o,
    className: s,
    classes: a
  } = t, l = oe(t, DP), c = i;
  return /* @__PURE__ */ x.jsx(LP, A({
    className: be(a?.root, s),
    ownerState: t,
    "aria-hidden": "true",
    ref: r
  }, l, {
    children: /* @__PURE__ */ x.jsx("div", {
      className: a?.mask,
      children: typeof c == "function" ? /* @__PURE__ */ x.jsx(c, {
        className: a?.fill,
        color: o
      }) : /* @__PURE__ */ x.jsx("svg", {
        viewBox: "0 0 24 24",
        preserveAspectRatio: i === "line" ? "none" : void 0,
        children: i === "circle" ? /* @__PURE__ */ x.jsx("circle", {
          className: a?.fill,
          r: "12",
          cx: "12",
          cy: "12",
          fill: o
        }) : /* @__PURE__ */ x.jsx("rect", {
          className: a?.fill,
          width: "24",
          height: "24",
          fill: o
        })
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ui.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the mark.
   */
  color: n.string,
  /**
   * The type of the mark.
   * @default 'square'
   */
  type: n.oneOf(["circle", "line", "square"])
});
function cb(e) {
  const {
    classes: t,
    sx: r
  } = e, i = _P(), o = Ma(t);
  if (!i)
    return null;
  if ("values" in i) {
    const {
      label: u,
      color: d,
      markType: f
    } = i;
    return /* @__PURE__ */ x.jsx(uc, {
      sx: r,
      className: o.paper,
      children: /* @__PURE__ */ x.jsxs(dc, {
        className: o.table,
        children: [/* @__PURE__ */ x.jsxs(Ia, {
          component: "caption",
          children: [/* @__PURE__ */ x.jsx("div", {
            className: o.markContainer,
            children: /* @__PURE__ */ x.jsx(Ui, {
              type: f,
              color: d,
              className: o.mark
            })
          }), u]
        }), /* @__PURE__ */ x.jsx("tbody", {
          children: i.values.map(({
            formattedValue: p,
            label: h
          }) => /* @__PURE__ */ x.jsxs(fc, {
            className: o.row,
            children: [/* @__PURE__ */ x.jsx($r, {
              className: be(o.labelCell, o.cell),
              component: "th",
              children: h
            }), /* @__PURE__ */ x.jsx($r, {
              className: be(o.valueCell, o.cell),
              component: "td",
              children: p
            })]
          }, h))
        })]
      })
    });
  }
  const {
    color: s,
    label: a,
    formattedValue: l,
    markType: c
  } = i;
  return /* @__PURE__ */ x.jsx(uc, {
    sx: r,
    className: o.paper,
    children: /* @__PURE__ */ x.jsx(dc, {
      className: o.table,
      children: /* @__PURE__ */ x.jsx("tbody", {
        children: /* @__PURE__ */ x.jsxs(fc, {
          className: o.row,
          children: [/* @__PURE__ */ x.jsxs($r, {
            className: be(o.labelCell, o.cell),
            component: "th",
            children: [/* @__PURE__ */ x.jsx("div", {
              className: o.markContainer,
              children: /* @__PURE__ */ x.jsx(Ui, {
                type: c,
                color: s,
                className: o.mark
              })
            }), a]
          }), /* @__PURE__ */ x.jsx($r, {
            className: be(o.valueCell, o.cell),
            component: "td",
            children: l
          })]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (cb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function NP(e) {
  const t = we(), r = ie(t, Ot);
  return $.useMemo(() => {
    const o = {};
    return Object.keys(r).forEach((s) => {
      o[s] = r[s].colorProcessor;
    }), o;
  }, [r]);
}
const FP = nm({
  themeId: Ks
});
function qP() {
  const e = Au(), [t, r] = $.useState(null);
  return $.useEffect(() => {
    const i = e.current;
    if (i === null)
      return () => {
      };
    const o = (a) => {
      a.pointerType !== "mouse" && r(null);
    }, s = (a) => {
      r({
        pointerType: a.pointerType
      });
    };
    return i.addEventListener("pointerenter", s), i.addEventListener("pointerup", o), () => {
      i.removeEventListener("pointerenter", s), i.removeEventListener("pointerup", o);
    };
  }, [e]), t;
}
function zP(e) {
  return e instanceof Date ? e.toUTCString() : e.toLocaleString();
}
const BP = "@media (pointer: fine)", VP = () => FP(BP, {
  defaultMatches: !0
}), ub = (e, t) => t, db = (e, t) => t;
function fb(e, t, r) {
  return Array.isArray(r) ? r.map((i) => Cp(t.axis[i], e)) : Cp(t.axis[r], e);
}
const pb = K(oo, so, M1, (e, t, r) => e === null || t === null ? null : _1(r)(e, t)), UP = K(pb, yr, ub, (e, t, r = t.axisIds[0]) => e === null ? null : fb(e, t, r)), hb = K(pb, yr, db, (e, t, r = t.axisIds) => e === null ? null : fb(e, t, r));
K(yr, UP, ub, (e, t, r = e.axisIds[0]) => {
  if (t === null || t === -1 || e.axisIds.length === 0)
    return null;
  const i = e.axis[r]?.data;
  return i ? i[t] : null;
});
K(yr, hb, db, (e, t, r = e.axisIds) => t === null ? null : r.map((i, o) => {
  const s = t[o];
  return s === -1 ? null : e.axis[i].data?.[s];
}));
const mb = Js({
  memoizeOptions: {
    // Keep the same reference if array content is the same.
    // If possible, avoid this pattern by creating selectors that
    // uses string/number as arguments.
    resultEqualityCheck: qr
  }
})(hb, yr, (e, t) => e === null ? [] : t.axisIds.map((r, i) => ({
  axisId: r,
  dataIndex: e[i]
})).filter(({
  axisId: r,
  dataIndex: i
}) => t.axis[r].triggerTooltip && i >= 0)), HP = K(mb, (e) => e.length > 0);
function Tl(e, t, r) {
  const i = e.data?.[t] ?? null, s = (e.valueFormatter ?? ((a) => e.scaleType === "utc" ? zP(a) : a.toLocaleString()))(i, {
    location: "tooltip",
    scale: e.scale
  });
  return {
    axisDirection: r,
    axisId: e.id,
    mainAxis: e,
    dataIndex: t,
    axisValue: i,
    axisFormattedValue: s,
    seriesItems: []
  };
}
function GP(e = {}) {
  const {
    multipleAxes: t,
    directions: r
  } = e, i = $1(), o = D1(), s = L1(), a = we(), l = ie(a, Ig), c = ie(a, Mg), u = ie(a, mb), d = Ca(), {
    xAxis: f
  } = Je(), {
    yAxis: p
  } = Qe(), {
    zAxis: h,
    zAxisIds: g
  } = Ru(), {
    rotationAxis: m
  } = py(), y = NP();
  if (l.length === 0 && c.length === 0 && u.length === 0)
    return null;
  const b = [];
  return (r === void 0 || r.includes("x")) && l.forEach(({
    axisId: S,
    dataIndex: C
  }) => {
    !t && b.length > 1 || b.push(Tl(f[S], C, "x"));
  }), (r === void 0 || r.includes("y")) && c.forEach(({
    axisId: S,
    dataIndex: C
  }) => {
    !t && b.length > 1 || b.push(Tl(p[S], C, "y"));
  }), (r === void 0 || r.includes("rotation")) && u.forEach(({
    axisId: S,
    dataIndex: C
  }) => {
    !t && b.length > 1 || b.push(Tl(m[S], C, "rotation"));
  }), Object.keys(d).filter(ha).forEach((S) => {
    const C = d[S];
    return C ? C.seriesOrder.forEach((v) => {
      const O = C.series[v], w = O.xAxisId ?? i.id, E = O.yAxisId ?? o.id, R = b.findIndex(({
        axisDirection: I,
        axisId: j
      }) => I === "x" && j === w || I === "y" && j === E);
      if (R >= 0) {
        const I = "zAxisId" in O ? O.zAxisId : g[0], {
          dataIndex: j
        } = b[R], _ = y[S]?.(O, f[w], p[E], I ? h[I] : void 0)(j) ?? "", T = O.data[j] ?? null, M = O.valueFormatter(T, {
          dataIndex: j
        }), P = xt(O.label, "tooltip") ?? null;
        b[R].seriesItems.push({
          seriesId: v,
          color: _,
          value: T,
          formattedValue: M,
          formattedLabel: P,
          markType: O.labelMarkType
        });
      }
    }) : [];
  }), Object.keys(d).filter(ku).forEach((S) => {
    const C = d[S];
    return C ? C.seriesOrder.forEach((v) => {
      const O = C.series[v], w = (
        // @ts-expect-error Should be fixed when we introduce a polar series with a rotationAxisId
        O.rotationAxisId ?? s?.id
      ), E = b.findIndex(({
        axisDirection: R,
        axisId: I
      }) => R === "rotation" && I === w);
      if (E >= 0) {
        const {
          dataIndex: R
        } = b[E], I = y[S]?.(O)(R) ?? "", j = O.data[R] ?? null, _ = O.valueFormatter(j, {
          dataIndex: R
        }), T = xt(O.label, "tooltip") ?? null;
        b[E].seriesItems.push({
          seriesId: v,
          color: I,
          value: j,
          formattedValue: _,
          formattedLabel: T,
          markType: O.labelMarkType
        });
      }
    }) : [];
  }), t ? b : b.length === 0 ? b[0] : null;
}
function WP(e) {
  return GP(A({}, e, {
    multipleAxes: !0
  }));
}
function gb(e) {
  const t = Ma(e.classes), r = WP();
  return r === null ? null : /* @__PURE__ */ x.jsx(uc, {
    sx: e.sx,
    className: t.paper,
    children: r.map(({
      axisId: i,
      mainAxis: o,
      axisValue: s,
      axisFormattedValue: a,
      seriesItems: l
    }) => /* @__PURE__ */ x.jsxs(dc, {
      className: t.table,
      children: [s != null && !o.hideTooltip && /* @__PURE__ */ x.jsx(Ia, {
        component: "caption",
        children: a
      }), /* @__PURE__ */ x.jsx("tbody", {
        children: l.map(({
          seriesId: c,
          color: u,
          formattedValue: d,
          formattedLabel: f,
          markType: p
        }) => d == null ? null : /* @__PURE__ */ x.jsxs(fc, {
          className: t.row,
          children: [/* @__PURE__ */ x.jsxs($r, {
            className: be(t.labelCell, t.cell),
            component: "th",
            children: [/* @__PURE__ */ x.jsx("div", {
              className: t.markContainer,
              children: /* @__PURE__ */ x.jsx(Ui, {
                type: p,
                color: u,
                className: t.mark
              })
            }), f || null]
          }), /* @__PURE__ */ x.jsx($r, {
            className: be(t.valueCell, t.cell),
            component: "td",
            children: d
          })]
        }, c))
      })]
    }, i))
  });
}
process.env.NODE_ENV !== "production" && (gb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const zu = n.oneOfType([n.func, n.object]);
function _a(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...i) {
    return e(...i) || t(...i);
  };
}
var dt = "top", _t = "bottom", jt = "right", ft = "left", Bu = "auto", mo = [dt, _t, jt, ft], Kr = "start", Hi = "end", YP = "clippingParents", yb = "viewport", wi = "popper", XP = "reference", jp = /* @__PURE__ */ mo.reduce(function(e, t) {
  return e.concat([t + "-" + Kr, t + "-" + Hi]);
}, []), bb = /* @__PURE__ */ [].concat(mo, [Bu]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Kr, t + "-" + Hi]);
}, []), KP = "beforeRead", ZP = "read", JP = "afterRead", QP = "beforeMain", eI = "main", tI = "afterMain", nI = "beforeWrite", rI = "write", iI = "afterWrite", oI = [KP, ZP, JP, QP, eI, tI, nI, rI, iI];
function Xt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function vt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function lr(e) {
  var t = vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function It(e) {
  var t = vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Vu(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function sI(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var i = t.styles[r] || {}, o = t.attributes[r] || {}, s = t.elements[r];
    !It(s) || !Xt(s) || (Object.assign(s.style, i), Object.keys(o).forEach(function(a) {
      var l = o[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function aI(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(i) {
      var o = t.elements[i], s = t.attributes[i] || {}, a = Object.keys(t.styles.hasOwnProperty(i) ? t.styles[i] : r[i]), l = a.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !It(o) || !Xt(o) || (Object.assign(o.style, l), Object.keys(s).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const lI = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: sI,
  effect: aI,
  requires: ["computeStyles"]
};
function Yt(e) {
  return e.split("-")[0];
}
var tr = Math.max, As = Math.min, Zr = Math.round;
function pc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function xb() {
  return !/^((?!chrome|android).)*safari/i.test(pc());
}
function Jr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var i = e.getBoundingClientRect(), o = 1, s = 1;
  t && It(e) && (o = e.offsetWidth > 0 && Zr(i.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Zr(i.height) / e.offsetHeight || 1);
  var a = lr(e) ? vt(e) : window, l = a.visualViewport, c = !xb() && r, u = (i.left + (c && l ? l.offsetLeft : 0)) / o, d = (i.top + (c && l ? l.offsetTop : 0)) / s, f = i.width / o, p = i.height / s;
  return {
    width: f,
    height: p,
    top: d,
    right: u + f,
    bottom: d + p,
    left: u,
    x: u,
    y: d
  };
}
function Uu(e) {
  var t = Jr(e), r = e.offsetWidth, i = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: i
  };
}
function vb(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Vu(r)) {
    var i = t;
    do {
      if (i && e.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function mn(e) {
  return vt(e).getComputedStyle(e);
}
function cI(e) {
  return ["table", "td", "th"].indexOf(Xt(e)) >= 0;
}
function qn(e) {
  return ((lr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ja(e) {
  return Xt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Vu(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    qn(e)
  );
}
function $p(e) {
  return !It(e) || // https://github.com/popperjs/popper-core/issues/837
  mn(e).position === "fixed" ? null : e.offsetParent;
}
function uI(e) {
  var t = /firefox/i.test(pc()), r = /Trident/i.test(pc());
  if (r && It(e)) {
    var i = mn(e);
    if (i.position === "fixed")
      return null;
  }
  var o = ja(e);
  for (Vu(o) && (o = o.host); It(o) && ["html", "body"].indexOf(Xt(o)) < 0; ) {
    var s = mn(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function go(e) {
  for (var t = vt(e), r = $p(e); r && cI(r) && mn(r).position === "static"; )
    r = $p(r);
  return r && (Xt(r) === "html" || Xt(r) === "body" && mn(r).position === "static") ? t : r || uI(e) || t;
}
function Hu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Mi(e, t, r) {
  return tr(e, As(t, r));
}
function dI(e, t, r) {
  var i = Mi(e, t, r);
  return i > r ? r : i;
}
function Ob() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Tb(e) {
  return Object.assign({}, Ob(), e);
}
function Sb(e, t) {
  return t.reduce(function(r, i) {
    return r[i] = e, r;
  }, {});
}
var fI = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Tb(typeof t != "number" ? t : Sb(t, mo));
};
function pI(e) {
  var t, r = e.state, i = e.name, o = e.options, s = r.elements.arrow, a = r.modifiersData.popperOffsets, l = Yt(r.placement), c = Hu(l), u = [ft, jt].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var f = fI(o.padding, r), p = Uu(s), h = c === "y" ? dt : ft, g = c === "y" ? _t : jt, m = r.rects.reference[d] + r.rects.reference[c] - a[c] - r.rects.popper[d], y = a[c] - r.rects.reference[c], b = go(s), S = b ? c === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, C = m / 2 - y / 2, v = f[h], O = S - p[d] - f[g], w = S / 2 - p[d] / 2 + C, E = Mi(v, w, O), R = c;
    r.modifiersData[i] = (t = {}, t[R] = E, t.centerOffset = E - w, t);
  }
}
function hI(e) {
  var t = e.state, r = e.options, i = r.element, o = i === void 0 ? "[data-popper-arrow]" : i;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || vb(t.elements.popper, o) && (t.elements.arrow = o));
}
const mI = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: pI,
  effect: hI,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Qr(e) {
  return e.split("-")[1];
}
var gI = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function yI(e, t) {
  var r = e.x, i = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Zr(r * o) / o || 0,
    y: Zr(i * o) / o || 0
  };
}
function Dp(e) {
  var t, r = e.popper, i = e.popperRect, o = e.placement, s = e.variation, a = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = a.x, h = p === void 0 ? 0 : p, g = a.y, m = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = y.x, m = y.y;
  var b = a.hasOwnProperty("x"), S = a.hasOwnProperty("y"), C = ft, v = dt, O = window;
  if (u) {
    var w = go(r), E = "clientHeight", R = "clientWidth";
    if (w === vt(r) && (w = qn(r), mn(w).position !== "static" && l === "absolute" && (E = "scrollHeight", R = "scrollWidth")), w = w, o === dt || (o === ft || o === jt) && s === Hi) {
      v = _t;
      var I = f && w === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[E]
      );
      m -= I - i.height, m *= c ? 1 : -1;
    }
    if (o === ft || (o === dt || o === _t) && s === Hi) {
      C = jt;
      var j = f && w === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[R]
      );
      h -= j - i.width, h *= c ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: l
  }, u && gI), T = d === !0 ? yI({
    x: h,
    y: m
  }, vt(r)) : {
    x: h,
    y: m
  };
  if (h = T.x, m = T.y, c) {
    var M;
    return Object.assign({}, _, (M = {}, M[v] = S ? "0" : "", M[C] = b ? "0" : "", M.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", M));
  }
  return Object.assign({}, _, (t = {}, t[v] = S ? m + "px" : "", t[C] = b ? h + "px" : "", t.transform = "", t));
}
function bI(e) {
  var t = e.state, r = e.options, i = r.gpuAcceleration, o = i === void 0 ? !0 : i, s = r.adaptive, a = s === void 0 ? !0 : s, l = r.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Yt(t.placement),
    variation: Qr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Dp(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Dp(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const xI = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: bI,
  data: {}
};
var Bo = {
  passive: !0
};
function vI(e) {
  var t = e.state, r = e.instance, i = e.options, o = i.scroll, s = o === void 0 ? !0 : o, a = i.resize, l = a === void 0 ? !0 : a, c = vt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Bo);
  }), l && c.addEventListener("resize", r.update, Bo), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Bo);
    }), l && c.removeEventListener("resize", r.update, Bo);
  };
}
const OI = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: vI,
  data: {}
};
var TI = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function es(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return TI[t];
  });
}
var SI = {
  start: "end",
  end: "start"
};
function Lp(e) {
  return e.replace(/start|end/g, function(t) {
    return SI[t];
  });
}
function Gu(e) {
  var t = vt(e), r = t.pageXOffset, i = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: i
  };
}
function Wu(e) {
  return Jr(qn(e)).left + Gu(e).scrollLeft;
}
function wI(e, t) {
  var r = vt(e), i = qn(e), o = r.visualViewport, s = i.clientWidth, a = i.clientHeight, l = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    var u = xb();
    (u || !u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: l + Wu(e),
    y: c
  };
}
function CI(e) {
  var t, r = qn(e), i = Gu(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = tr(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = tr(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -i.scrollLeft + Wu(e), c = -i.scrollTop;
  return mn(o || r).direction === "rtl" && (l += tr(r.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Yu(e) {
  var t = mn(e), r = t.overflow, i = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + i);
}
function wb(e) {
  return ["html", "body", "#document"].indexOf(Xt(e)) >= 0 ? e.ownerDocument.body : It(e) && Yu(e) ? e : wb(ja(e));
}
function _i(e, t) {
  var r;
  t === void 0 && (t = []);
  var i = wb(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), s = vt(i), a = o ? [s].concat(s.visualViewport || [], Yu(i) ? i : []) : i, l = t.concat(a);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(_i(ja(a)))
  );
}
function hc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function EI(e, t) {
  var r = Jr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Np(e, t, r) {
  return t === yb ? hc(wI(e, r)) : lr(t) ? EI(t, r) : hc(CI(qn(e)));
}
function kI(e) {
  var t = _i(ja(e)), r = ["absolute", "fixed"].indexOf(mn(e).position) >= 0, i = r && It(e) ? go(e) : e;
  return lr(i) ? t.filter(function(o) {
    return lr(o) && vb(o, i) && Xt(o) !== "body";
  }) : [];
}
function RI(e, t, r, i) {
  var o = t === "clippingParents" ? kI(e) : [].concat(t), s = [].concat(o, [r]), a = s[0], l = s.reduce(function(c, u) {
    var d = Np(e, u, i);
    return c.top = tr(d.top, c.top), c.right = As(d.right, c.right), c.bottom = As(d.bottom, c.bottom), c.left = tr(d.left, c.left), c;
  }, Np(e, a, i));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Cb(e) {
  var t = e.reference, r = e.element, i = e.placement, o = i ? Yt(i) : null, s = i ? Qr(i) : null, a = t.x + t.width / 2 - r.width / 2, l = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case dt:
      c = {
        x: a,
        y: t.y - r.height
      };
      break;
    case _t:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case jt:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case ft:
      c = {
        x: t.x - r.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? Hu(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case Kr:
        c[u] = c[u] - (t[d] / 2 - r[d] / 2);
        break;
      case Hi:
        c[u] = c[u] + (t[d] / 2 - r[d] / 2);
        break;
    }
  }
  return c;
}
function Gi(e, t) {
  t === void 0 && (t = {});
  var r = t, i = r.placement, o = i === void 0 ? e.placement : i, s = r.strategy, a = s === void 0 ? e.strategy : s, l = r.boundary, c = l === void 0 ? YP : l, u = r.rootBoundary, d = u === void 0 ? yb : u, f = r.elementContext, p = f === void 0 ? wi : f, h = r.altBoundary, g = h === void 0 ? !1 : h, m = r.padding, y = m === void 0 ? 0 : m, b = Tb(typeof y != "number" ? y : Sb(y, mo)), S = p === wi ? XP : wi, C = e.rects.popper, v = e.elements[g ? S : p], O = RI(lr(v) ? v : v.contextElement || qn(e.elements.popper), c, d, a), w = Jr(e.elements.reference), E = Cb({
    reference: w,
    element: C,
    placement: o
  }), R = hc(Object.assign({}, C, E)), I = p === wi ? R : w, j = {
    top: O.top - I.top + b.top,
    bottom: I.bottom - O.bottom + b.bottom,
    left: O.left - I.left + b.left,
    right: I.right - O.right + b.right
  }, _ = e.modifiersData.offset;
  if (p === wi && _) {
    var T = _[o];
    Object.keys(j).forEach(function(M) {
      var P = [jt, _t].indexOf(M) >= 0 ? 1 : -1, N = [dt, _t].indexOf(M) >= 0 ? "y" : "x";
      j[M] += T[N] * P;
    });
  }
  return j;
}
function AI(e, t) {
  t === void 0 && (t = {});
  var r = t, i = r.placement, o = r.boundary, s = r.rootBoundary, a = r.padding, l = r.flipVariations, c = r.allowedAutoPlacements, u = c === void 0 ? bb : c, d = Qr(i), f = d ? l ? jp : jp.filter(function(g) {
    return Qr(g) === d;
  }) : mo, p = f.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  p.length === 0 && (p = f);
  var h = p.reduce(function(g, m) {
    return g[m] = Gi(e, {
      placement: m,
      boundary: o,
      rootBoundary: s,
      padding: a
    })[Yt(m)], g;
  }, {});
  return Object.keys(h).sort(function(g, m) {
    return h[g] - h[m];
  });
}
function PI(e) {
  if (Yt(e) === Bu)
    return [];
  var t = es(e);
  return [Lp(e), t, Lp(t)];
}
function II(e) {
  var t = e.state, r = e.options, i = e.name;
  if (!t.modifiersData[i]._skip) {
    for (var o = r.mainAxis, s = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !0 : a, c = r.fallbackPlacements, u = r.padding, d = r.boundary, f = r.rootBoundary, p = r.altBoundary, h = r.flipVariations, g = h === void 0 ? !0 : h, m = r.allowedAutoPlacements, y = t.options.placement, b = Yt(y), S = b === y, C = c || (S || !g ? [es(y)] : PI(y)), v = [y].concat(C).reduce(function(W, X) {
      return W.concat(Yt(X) === Bu ? AI(t, {
        placement: X,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : X);
    }, []), O = t.rects.reference, w = t.rects.popper, E = /* @__PURE__ */ new Map(), R = !0, I = v[0], j = 0; j < v.length; j++) {
      var _ = v[j], T = Yt(_), M = Qr(_) === Kr, P = [dt, _t].indexOf(T) >= 0, N = P ? "width" : "height", L = Gi(t, {
        placement: _,
        boundary: d,
        rootBoundary: f,
        altBoundary: p,
        padding: u
      }), z = P ? M ? jt : ft : M ? _t : dt;
      O[N] > w[N] && (z = es(z));
      var H = es(z), Z = [];
      if (s && Z.push(L[T] <= 0), l && Z.push(L[z] <= 0, L[H] <= 0), Z.every(function(W) {
        return W;
      })) {
        I = _, R = !1;
        break;
      }
      E.set(_, Z);
    }
    if (R)
      for (var F = g ? 3 : 1, k = function(X) {
        var J = v.find(function(Q) {
          var te = E.get(Q);
          if (te)
            return te.slice(0, X).every(function(V) {
              return V;
            });
        });
        if (J)
          return I = J, "break";
      }, B = F; B > 0; B--) {
        var G = k(B);
        if (G === "break") break;
      }
    t.placement !== I && (t.modifiersData[i]._skip = !0, t.placement = I, t.reset = !0);
  }
}
const MI = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: II,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Fp(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function qp(e) {
  return [dt, jt, _t, ft].some(function(t) {
    return e[t] >= 0;
  });
}
function _I(e) {
  var t = e.state, r = e.name, i = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, a = Gi(t, {
    elementContext: "reference"
  }), l = Gi(t, {
    altBoundary: !0
  }), c = Fp(a, i), u = Fp(l, o, s), d = qp(c), f = qp(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": f
  });
}
const jI = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _I
};
function $I(e, t, r) {
  var i = Yt(e), o = [ft, dt].indexOf(i) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * o, [ft, jt].indexOf(i) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function DI(e) {
  var t = e.state, r = e.options, i = e.name, o = r.offset, s = o === void 0 ? [0, 0] : o, a = bb.reduce(function(d, f) {
    return d[f] = $I(f, t.rects, s), d;
  }, {}), l = a[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[i] = a;
}
const LI = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: DI
};
function NI(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Cb({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const FI = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: NI,
  data: {}
};
function qI(e) {
  return e === "x" ? "y" : "x";
}
function zI(e) {
  var t = e.state, r = e.options, i = e.name, o = r.mainAxis, s = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !1 : a, c = r.boundary, u = r.rootBoundary, d = r.altBoundary, f = r.padding, p = r.tether, h = p === void 0 ? !0 : p, g = r.tetherOffset, m = g === void 0 ? 0 : g, y = Gi(t, {
    boundary: c,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), b = Yt(t.placement), S = Qr(t.placement), C = !S, v = Hu(b), O = qI(v), w = t.modifiersData.popperOffsets, E = t.rects.reference, R = t.rects.popper, I = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, j = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, T = {
    x: 0,
    y: 0
  };
  if (w) {
    if (s) {
      var M, P = v === "y" ? dt : ft, N = v === "y" ? _t : jt, L = v === "y" ? "height" : "width", z = w[v], H = z + y[P], Z = z - y[N], F = h ? -R[L] / 2 : 0, k = S === Kr ? E[L] : R[L], B = S === Kr ? -R[L] : -E[L], G = t.elements.arrow, W = h && G ? Uu(G) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ob(), J = X[P], Q = X[N], te = Mi(0, E[L], W[L]), V = C ? E[L] / 2 - F - te - J - j.mainAxis : k - te - J - j.mainAxis, Y = C ? -E[L] / 2 + F + te + Q + j.mainAxis : B + te + Q + j.mainAxis, ee = t.elements.arrow && go(t.elements.arrow), D = ee ? v === "y" ? ee.clientTop || 0 : ee.clientLeft || 0 : 0, re = (M = _?.[v]) != null ? M : 0, ne = z + V - re - D, ce = z + Y - re, ae = Mi(h ? As(H, ne) : H, z, h ? tr(Z, ce) : Z);
      w[v] = ae, T[v] = ae - z;
    }
    if (l) {
      var Ce, He = v === "x" ? dt : ft, $e = v === "x" ? _t : jt, ke = w[O], We = O === "y" ? "height" : "width", se = ke + y[He], pi = ke - y[$e], vr = [dt, ft].indexOf(b) !== -1, et = (Ce = _?.[O]) != null ? Ce : 0, St = vr ? se : ke - E[We] - R[We] - et + j.altAxis, Or = vr ? ke + E[We] + R[We] - et - j.altAxis : pi, wo = h && vr ? dI(St, ke, Or) : Mi(h ? St : se, ke, h ? Or : pi);
      w[O] = wo, T[O] = wo - ke;
    }
    t.modifiersData[i] = T;
  }
}
const BI = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: zI,
  requiresIfExists: ["offset"]
};
function VI(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function UI(e) {
  return e === vt(e) || !It(e) ? Gu(e) : VI(e);
}
function HI(e) {
  var t = e.getBoundingClientRect(), r = Zr(t.width) / e.offsetWidth || 1, i = Zr(t.height) / e.offsetHeight || 1;
  return r !== 1 || i !== 1;
}
function GI(e, t, r) {
  r === void 0 && (r = !1);
  var i = It(t), o = It(t) && HI(t), s = qn(t), a = Jr(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (i || !i && !r) && ((Xt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Yu(s)) && (l = UI(t)), It(t) ? (c = Jr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = Wu(s))), {
    x: a.left + l.scrollLeft - c.x,
    y: a.top + l.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function WI(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function o(s) {
    r.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(l) {
      if (!r.has(l)) {
        var c = t.get(l);
        c && o(c);
      }
    }), i.push(s);
  }
  return e.forEach(function(s) {
    r.has(s.name) || o(s);
  }), i;
}
function YI(e) {
  var t = WI(e);
  return oI.reduce(function(r, i) {
    return r.concat(t.filter(function(o) {
      return o.phase === i;
    }));
  }, []);
}
function XI(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function KI(e) {
  var t = e.reduce(function(r, i) {
    var o = r[i.name];
    return r[i.name] = o ? Object.assign({}, o, i, {
      options: Object.assign({}, o.options, i.options),
      data: Object.assign({}, o.data, i.data)
    }) : i, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var zp = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Bp() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function ZI(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, i = r === void 0 ? [] : r, o = t.defaultOptions, s = o === void 0 ? zp : o;
  return function(l, c, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, zp, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, h = {
      state: d,
      setOptions: function(b) {
        var S = typeof b == "function" ? b(d.options) : b;
        m(), d.options = Object.assign({}, s, d.options, S), d.scrollParents = {
          reference: lr(l) ? _i(l) : l.contextElement ? _i(l.contextElement) : [],
          popper: _i(c)
        };
        var C = YI(KI([].concat(i, d.options.modifiers)));
        return d.orderedModifiers = C.filter(function(v) {
          return v.enabled;
        }), g(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var b = d.elements, S = b.reference, C = b.popper;
          if (Bp(S, C)) {
            d.rects = {
              reference: GI(S, go(C), d.options.strategy === "fixed"),
              popper: Uu(C)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(j) {
              return d.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var v = 0; v < d.orderedModifiers.length; v++) {
              if (d.reset === !0) {
                d.reset = !1, v = -1;
                continue;
              }
              var O = d.orderedModifiers[v], w = O.fn, E = O.options, R = E === void 0 ? {} : E, I = O.name;
              typeof w == "function" && (d = w({
                state: d,
                options: R,
                name: I,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: XI(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        m(), p = !0;
      }
    };
    if (!Bp(l, c))
      return h;
    h.setOptions(u).then(function(y) {
      !p && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var b = y.name, S = y.options, C = S === void 0 ? {} : S, v = y.effect;
        if (typeof v == "function") {
          var O = v({
            state: d,
            name: b,
            instance: h,
            options: C
          }), w = function() {
          };
          f.push(O || w);
        }
      });
    }
    function m() {
      f.forEach(function(y) {
        return y();
      }), f = [];
    }
    return h;
  };
}
var JI = [OI, FI, xI, lI, LI, MI, BI, mI, jI], QI = /* @__PURE__ */ ZI({
  defaultModifiers: JI
});
function eM(e) {
  return parseInt($.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
function tM(e) {
  return typeof e == "function" ? e() : e;
}
const Ps = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const {
    children: i,
    container: o,
    disablePortal: s = !1
  } = t, [a, l] = $.useState(null), c = Pn(/* @__PURE__ */ $.isValidElement(i) ? eM(i) : null, r);
  if (Fe(() => {
    s || l(tM(o) || document.body);
  }, [o, s]), Fe(() => {
    if (a && !s)
      return lf(r, a), () => {
        lf(r, null);
      };
  }, [r, a, s]), s) {
    if (/* @__PURE__ */ $.isValidElement(i)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ $.cloneElement(i, u);
    }
    return i;
  }
  return a && /* @__PURE__ */ S0.createPortal(i, a);
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ar, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (Ps.propTypes = om(Ps.propTypes));
function nM(e) {
  return Ee("MuiPopper", e);
}
Se("MuiPopper", ["root"]);
function rM(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Is(e) {
  return typeof e == "function" ? e() : e;
}
function $a(e) {
  return e.nodeType !== void 0;
}
function iM(e) {
  return !$a(e);
}
const oM = (e) => {
  const {
    classes: t
  } = e;
  return Ae({
    root: ["root"]
  }, nM, t);
}, sM = {}, aM = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const {
    anchorEl: i,
    children: o,
    direction: s,
    disablePortal: a,
    modifiers: l,
    open: c,
    placement: u,
    popperOptions: d,
    popperRef: f,
    slotProps: p = {},
    slots: h = {},
    TransitionProps: g,
    // @ts-ignore internal logic
    ownerState: m,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...y
  } = t, b = $.useRef(null), S = Pn(b, r), C = $.useRef(null), v = Pn(C, f), O = $.useRef(v);
  Fe(() => {
    O.current = v;
  }, [v]), $.useImperativeHandle(f, () => C.current, []);
  const w = rM(u, s), [E, R] = $.useState(w), [I, j] = $.useState(Is(i));
  $.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), $.useEffect(() => {
    i && j(Is(i));
  }, [i]), Fe(() => {
    if (!I || !c)
      return;
    const N = (H) => {
      R(H.placement);
    };
    if (process.env.NODE_ENV !== "production" && I && $a(I) && I.nodeType === 1) {
      const H = I.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && H.top === 0 && H.left === 0 && H.right === 0 && H.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let L = [{
      name: "preventOverflow",
      options: {
        altBoundary: a
      }
    }, {
      name: "flip",
      options: {
        altBoundary: a
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: H
      }) => {
        N(H);
      }
    }];
    l != null && (L = L.concat(l)), d && d.modifiers != null && (L = L.concat(d.modifiers));
    const z = QI(I, b.current, {
      placement: w,
      ...d,
      modifiers: L
    });
    return O.current(z), () => {
      z.destroy(), O.current(null);
    };
  }, [I, a, l, c, d, w]);
  const _ = {
    placement: E
  };
  g !== null && (_.TransitionProps = g);
  const T = oM(t), M = h.root ?? "div", P = Nt({
    elementType: M,
    externalSlotProps: p.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: T.root
  });
  return /* @__PURE__ */ x.jsx(M, {
    ...P,
    children: typeof o == "function" ? o(_) : o
  });
}), Eb = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const {
    anchorEl: i,
    children: o,
    container: s,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: f = "bottom",
    popperOptions: p = sM,
    popperRef: h,
    style: g,
    transition: m = !1,
    slotProps: y = {},
    slots: b = {},
    ...S
  } = t, [C, v] = $.useState(!0), O = () => {
    v(!1);
  }, w = () => {
    v(!0);
  };
  if (!c && !d && (!m || C))
    return null;
  let E;
  if (s)
    E = s;
  else if (i) {
    const j = Is(i);
    E = j && $a(j) ? zl(j).body : zl(null).body;
  }
  const R = !d && c && (!m || C) ? "none" : void 0, I = m ? {
    in: d,
    onEnter: O,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ x.jsx(Ps, {
    disablePortal: l,
    container: E,
    children: /* @__PURE__ */ x.jsx(aM, {
      anchorEl: i,
      direction: a,
      disablePortal: l,
      modifiers: u,
      ref: r,
      open: m ? !C : d,
      placement: f,
      popperOptions: p,
      popperRef: h,
      slotProps: y,
      slots: b,
      ...S,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: R,
        ...g
      },
      TransitionProps: I,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Eb.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: _a(n.oneOfType([ar, n.object, n.func]), (e) => {
    if (e.open) {
      const t = Is(e.anchorEl);
      if (t && $a(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || iM(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ar, n.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: n.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: zu,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const lM = le(Eb, {
  name: "MuiPopper",
  slot: "Root"
})({}), kb = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = Ji(), o = jn({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: a,
    components: l,
    componentsProps: c,
    container: u,
    disablePortal: d,
    keepMounted: f,
    modifiers: p,
    open: h,
    placement: g,
    popperOptions: m,
    popperRef: y,
    transition: b,
    slots: S,
    slotProps: C,
    ...v
  } = o, O = S?.root ?? l?.Root, w = {
    anchorEl: s,
    container: u,
    disablePortal: d,
    keepMounted: f,
    modifiers: p,
    open: h,
    placement: g,
    popperOptions: m,
    popperRef: y,
    transition: b,
    ...v
  };
  return /* @__PURE__ */ x.jsx(lM, {
    as: a,
    direction: i ? "rtl" : "ltr",
    slots: {
      root: O
    },
    slotProps: C ?? c,
    ...w,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (kb.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: n.oneOfType([ar, n.object, n.func]),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([ar, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: zu,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
function Ms(e) {
  const {
    children: t,
    defer: r = !1,
    fallback: i = null
  } = e, [o, s] = $.useState(!1);
  return Fe(() => {
    r || s(!0);
  }, [r]), $.useEffect(() => {
    r && s(!0);
  }, [r]), o ? t : i;
}
process.env.NODE_ENV !== "production" && (Ms.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: n.node,
  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   * @default false
   */
  defer: n.bool,
  /**
   * The fallback content to display.
   * @default null
   */
  fallback: n.node
});
process.env.NODE_ENV !== "production" && (Ms.propTypes = om(Ms.propTypes));
function Vp(e) {
  let t, r;
  const i = () => {
    r = null, e(...t);
  };
  function o(...s) {
    t = s, r || (r = requestAnimationFrame(i));
  }
  return o.clear = () => {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
}
function cM() {
  const e = we(), t = ie(e, fy), r = ie(e, Zt);
  return t !== void 0 ? "polar" : r !== void 0 ? "cartesian" : "none";
}
const uM = ["trigger", "position", "anchor", "classes", "children"], Up = () => !1;
function dM(e, t, r) {
  return r ? Up : e === "item" ? ck : t === "polar" ? HP : t === "cartesian" ? hk : Up;
}
const fM = le(kb, {
  name: "MuiChartsTooltip",
  slot: "Root"
})(({
  theme: e
}) => ({
  pointerEvents: "none",
  zIndex: e.zIndex.modal
}));
function Rb(e) {
  const t = nt({
    props: e,
    name: "MuiChartsTooltipContainer"
  }), {
    trigger: r = "axis",
    position: i,
    anchor: o = "pointer",
    classes: s,
    children: a
  } = t, l = oe(t, uM), c = Au(), u = Ma(s), d = qP(), f = VP(), p = $.useRef(null), h = Qs(() => ({
    x: 0,
    y: 0
  })), g = cM(), m = we(), y = ie(m, Tk), b = ie(m, dM(r, g, y)), C = ie(m, ao) === "keyboard" ? "node" : o, v = ie(m, r === "item" && C === "node" ? uk : () => null, i);
  $.useEffect(() => {
    const I = c.current;
    if (I === null)
      return () => {
      };
    if (v !== null) {
      const T = Vp(() => {
        h.current = {
          x: I.getBoundingClientRect().left + (v?.x ?? 0),
          y: I.getBoundingClientRect().top + (v?.y ?? 0)
        }, p.current?.update();
      });
      return T(), () => T.clear();
    }
    const j = Vp((T, M) => {
      h.current = {
        x: T,
        y: M
      }, p.current?.update();
    }), _ = (T) => {
      j(T.clientX, T.clientY);
    };
    return I.addEventListener("pointerdown", _), I.addEventListener("pointermove", _), I.addEventListener("pointerenter", _), () => {
      I.removeEventListener("pointerdown", _), I.removeEventListener("pointermove", _), I.removeEventListener("pointerenter", _), j.clear();
    };
  }, [c, h, v]);
  const O = $.useMemo(() => ({
    getBoundingClientRect: () => ({
      x: h.current.x,
      y: h.current.y,
      top: h.current.y,
      left: h.current.x,
      right: h.current.x,
      bottom: h.current.y,
      width: 0,
      height: 0,
      toJSON: () => ""
    })
  }), [h]), w = d?.pointerType === "mouse" || f, E = d?.pointerType === "touch" || !f, R = $.useMemo(() => [
    {
      name: "offset",
      options: {
        offset: () => E ? [0, 64] : [0, 8]
      }
    },
    ...w ? [] : [{
      name: "flip",
      options: {
        fallbackPlacements: ["top-end", "top-start", "bottom-end", "bottom"]
      }
    }],
    // Keep default behavior
    {
      name: "preventOverflow",
      options: {
        altAxis: !0
      }
    }
  ], [w, E]);
  return r === "none" ? null : /* @__PURE__ */ x.jsx(Ms, {
    children: b && /* @__PURE__ */ x.jsx(fM, A({}, l, {
      className: u?.root,
      open: b,
      placement: l.placement ?? i ?? (w ? "right-start" : "top"),
      popperRef: p,
      anchorEl: O,
      modifiers: R,
      children: a
    }))
  });
}
process.env.NODE_ENV !== "production" && (Rb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Determine if the tooltip should be placed on the pointer location or on the node.
   * @default 'pointer'
   */
  anchor: n.oneOf(["node", "pointer"]),
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: n.oneOfType([ar, n.object, n.func]),
  /**
   * Popper render function or node.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([(e, t) => e[t] == null ? new Error(`Prop '${t}' is required but wasn't specified`) : typeof e[t] != "object" || e[t].nodeType !== 1 ? new Error(`Expected prop '${t}' to be of type Element`) : null, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      destroy: n.func.isRequired,
      forceUpdate: n.func.isRequired,
      setOptions: n.func.isRequired,
      state: n.shape({
        attributes: n.object.isRequired,
        elements: n.object.isRequired,
        modifiersData: n.object.isRequired,
        options: n.object.isRequired,
        orderedModifiers: n.arrayOf(n.object).isRequired,
        placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]).isRequired,
        rects: n.object.isRequired,
        reset: n.bool.isRequired,
        scrollParents: n.object.isRequired,
        strategy: n.oneOf(["absolute", "fixed"]).isRequired,
        styles: n.object.isRequired
      }).isRequired,
      update: n.func.isRequired
    })
  })]),
  /**
   * Determines the tooltip position relatively to the anchor.
   */
  position: n.oneOf(["bottom", "left", "right", "top"]),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.object,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool,
  /**
   * Select the kind of tooltip to display
   * - 'item': Shows data about the item below the mouse;
   * - 'axis': Shows values associated with the hovered x value;
   * - 'none': Does not display tooltip.
   * @default 'axis'
   */
  trigger: n.oneOf(["axis", "item", "none"])
});
function Da(e) {
  const {
    classes: t,
    trigger: r = "axis"
  } = e, i = Ma(t);
  return /* @__PURE__ */ x.jsx(Rb, A({}, e, {
    classes: t,
    children: r === "axis" ? /* @__PURE__ */ x.jsx(gb, {
      classes: i
    }) : /* @__PURE__ */ x.jsx(cb, {
      classes: i
    })
  }));
}
process.env.NODE_ENV !== "production" && (Da.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Determine if the tooltip should be placed on the pointer location or on the node.
   * @default 'pointer'
   */
  anchor: n.oneOf(["node", "pointer"]),
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: n.oneOfType([ar, n.object, n.func]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([(e, t) => e[t] == null ? new Error(`Prop '${t}' is required but wasn't specified`) : typeof e[t] != "object" || e[t].nodeType !== 1 ? new Error(`Expected prop '${t}' to be of type Element`) : null, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      destroy: n.func.isRequired,
      forceUpdate: n.func.isRequired,
      setOptions: n.func.isRequired,
      state: n.shape({
        attributes: n.object.isRequired,
        elements: n.object.isRequired,
        modifiersData: n.object.isRequired,
        options: n.object.isRequired,
        orderedModifiers: n.arrayOf(n.object).isRequired,
        placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]).isRequired,
        rects: n.object.isRequired,
        reset: n.bool.isRequired,
        scrollParents: n.object.isRequired,
        strategy: n.oneOf(["absolute", "fixed"]).isRequired,
        styles: n.object.isRequired
      }).isRequired,
      update: n.func.isRequired
    })
  })]),
  /**
   * Determines the tooltip position relatively to the anchor.
   */
  position: n.oneOf(["bottom", "left", "right", "top"]),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.object,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool,
  /**
   * Select the kind of tooltip to display
   * - 'item': Shows data about the item below the mouse;
   * - 'axis': Shows values associated with the hovered x value;
   * - 'none': Does not display tooltip.
   * @default 'axis'
   */
  trigger: n.oneOf(["axis", "item", "none"])
});
const pM = (e) => ({
  type: "series",
  color: e.color,
  label: e.label,
  seriesId: e.seriesId,
  itemId: e.itemId
});
function hM(e) {
  return Ee("MuiChartsLegend", e);
}
const mM = (e) => {
  const {
    classes: t,
    direction: r
  } = e;
  return Ae({
    root: ["root", r],
    item: ["item"],
    mark: ["mark"],
    label: ["label"],
    series: ["series"]
  }, hM, t);
}, Hp = Se("MuiChartsLegend", ["root", "item", "series", "mark", "label", "vertical", "horizontal"]), gM = ["slots", "slotProps"], yM = ["ownerState"], Ab = (e, t, r, i) => {
  function o(s, a) {
    const l = nt({
      props: s,
      // eslint-disable-next-line material-ui/mui-name-matches-component-name
      name: e
    }), c = typeof r.defaultProps == "function" ? r.defaultProps(l) : r.defaultProps ?? {}, u = or(c, l), d = u, {
      slots: f,
      slotProps: p
    } = d, h = oe(d, gM), g = Ft(), m = r.classesResolver?.(u, g), y = f?.[t] ?? i, b = r.propagateSlots && !f?.[t], S = Nt({
      elementType: y,
      externalSlotProps: p?.[t],
      additionalProps: A({}, h, {
        classes: m
      }, b && {
        slots: f,
        slotProps: p
      }),
      ownerState: {}
    }), C = oe(S, yM), v = A({}, C);
    for (const O of r.omitProps ?? [])
      delete v[O];
    return process.env.NODE_ENV !== "production" && (y.displayName = `${e}.slots.${t}`), /* @__PURE__ */ x.jsx(y, A({}, v, {
      ref: a
    }));
  }
  return /* @__PURE__ */ $.forwardRef(o);
};
process.env.NODE_ENV !== "production" && (Ab.displayName = "consumeSlots");
function bM(e) {
  return Ee("MuiChartsLabel", e);
}
Se("MuiChartsLabel", ["root"]);
const xM = (e) => Ae({
  root: ["root"]
}, bM, e.classes), vM = ["children", "className", "classes"], Pb = qu("MuiChartsLabel", {
  classesResolver: xM
}, function(t, r) {
  const {
    children: i,
    className: o,
    classes: s
  } = t, a = oe(t, vM);
  return /* @__PURE__ */ x.jsx("span", A({
    className: be(s?.root, o),
    ref: r
  }, a, {
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (Pb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object
});
const OM = ["direction", "onItemClick", "className", "classes"], TM = le("ul", {
  name: "MuiChartsLegend",
  slot: "Root"
})(({
  ownerState: e,
  theme: t
}) => A({}, t.typography.caption, {
  color: (t.vars || t).palette.text.primary,
  lineHeight: "100%",
  display: "flex",
  flexDirection: e.direction === "vertical" ? "column" : "row",
  alignItems: e.direction === "vertical" ? void 0 : "center",
  flexShrink: 0,
  gap: t.spacing(2),
  listStyleType: "none",
  paddingInlineStart: 0,
  marginBlock: t.spacing(1),
  marginInline: t.spacing(1),
  flexWrap: "wrap",
  li: {
    display: e.direction === "horizontal" ? "inline-flex" : void 0
  },
  [`button.${Hp.series}`]: {
    // Reset button styles
    background: "none",
    border: "none",
    padding: 0,
    fontFamily: "inherit",
    fontWeight: "inherit",
    fontSize: "inherit",
    letterSpacing: "inherit",
    color: "inherit"
  },
  [`& .${Hp.series}`]: {
    display: e.direction === "vertical" ? "flex" : "inline-flex",
    alignItems: "center",
    gap: t.spacing(1)
  },
  gridArea: "legend"
})), yo = Ab("MuiChartsLegend", "legend", {
  defaultProps: {
    direction: "horizontal"
  },
  // @ts-expect-error position is used only in the slots, but it is passed to the SVG wrapper.
  // We omit it here to avoid passing to slots.
  omitProps: ["position"],
  classesResolver: mM
}, /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = J1(), {
    onItemClick: o,
    className: s,
    classes: a
  } = t, l = oe(t, OM);
  if (i.items.length === 0)
    return null;
  const c = o ? "button" : "div";
  return /* @__PURE__ */ x.jsx(TM, A({
    className: be(a?.root, s),
    ref: r
  }, l, {
    ownerState: t,
    children: i.items.map((u, d) => /* @__PURE__ */ x.jsx("li", {
      className: a?.item,
      "data-series": u.id,
      children: /* @__PURE__ */ x.jsxs(c, {
        className: a?.series,
        role: o ? "button" : void 0,
        type: o ? "button" : void 0,
        onClick: o ? (
          // @ts-ignore onClick is only attached to a button
          (f) => o(f, pM(u), d)
        ) : void 0,
        children: [/* @__PURE__ */ x.jsx(Ui, {
          className: a?.mark,
          color: u.color,
          type: u.markType
        }), /* @__PURE__ */ x.jsx(Pb, {
          className: a?.label,
          children: u.label
        })]
      })
    }, u.id))
  }));
}));
process.env.NODE_ENV !== "production" && (yo.displayName = "ChartsLegend");
process.env.NODE_ENV !== "production" && (yo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  /**
   * The direction of the legend layout.
   * The default depends on the chart.
   */
  direction: n.oneOf(["horizontal", "vertical"]),
  /**
   * Callback fired when a legend item is clicked.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event The click event.
   * @param {SeriesLegendItemContext} legendItem The legend item data.
   * @param {number} index The index of the clicked legend item.
   */
  onItemClick: n.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function SM(e) {
  return Ee("MuiChartsAxisHighlight", e);
}
Se("MuiChartsAxisHighlight", ["root"]);
const _s = le("path", {
  name: "MuiChartsAxisHighlight",
  slot: "Root"
})(({
  theme: e
}) => ({
  pointerEvents: "none",
  variants: [{
    props: {
      axisHighlight: "band"
    },
    style: A({
      fill: "white",
      fillOpacity: 0.1
    }, e.applyStyles("light", {
      fill: "gray"
    }))
  }, {
    props: {
      axisHighlight: "line"
    },
    style: A({
      strokeDasharray: "5 2",
      stroke: "#ffffff"
    }, e.applyStyles("light", {
      stroke: "#000000"
    }))
  }]
}));
function wM(e) {
  const {
    type: t,
    classes: r
  } = e, {
    left: i,
    width: o
  } = gt(), s = we(), a = ie(s, wk), l = ie(s, it);
  return a.length === 0 ? null : a.map(({
    axisId: c,
    value: u
  }) => {
    const f = l.axis[c].scale, p = li(f), h = t === "band" && u !== null && Ue(f);
    return process.env.NODE_ENV !== "production" && h && f(u) === void 0 && console.error(["MUI X Charts: The position value provided for the axis is not valid for the current scale.", "This probably means something is wrong with the data passed to the chart.", "The ChartsAxisHighlight component will not be displayed."].join(`
`)), /* @__PURE__ */ x.jsxs($.Fragment, {
      children: [h && f(u) !== void 0 && /* @__PURE__ */ x.jsx(_s, {
        d: `M ${i} ${f(u) - (f.step() - f.bandwidth()) / 2} l 0 ${f.step()} l ${o} 0 l 0 ${-f.step()} Z`,
        className: r.root,
        ownerState: {
          axisHighlight: "band"
        }
      }), t === "line" && u !== null && /* @__PURE__ */ x.jsx(_s, {
        d: `M ${i} ${p(u)} L ${i + o} ${p(u)}`,
        className: r.root,
        ownerState: {
          axisHighlight: "line"
        }
      })]
    }, `${c}-${u}`);
  });
}
function CM(e) {
  const {
    type: t,
    classes: r
  } = e, {
    top: i,
    height: o
  } = gt(), s = we(), a = ie(s, Sk), l = ie(s, rt);
  return a.length === 0 ? null : a.map(({
    axisId: c,
    value: u
  }) => {
    const f = l.axis[c].scale, p = li(f), h = t === "band" && u !== null && Ue(f);
    return process.env.NODE_ENV !== "production" && h && f(u) === void 0 && console.error(["MUI X Charts: The position value provided for the axis is not valid for the current scale.", "This probably means something is wrong with the data passed to the chart.", "The ChartsAxisHighlight component will not be displayed."].join(`
`)), /* @__PURE__ */ x.jsxs($.Fragment, {
      children: [h && f(u) !== void 0 && /* @__PURE__ */ x.jsx(_s, {
        d: `M ${f(u) - (f.step() - f.bandwidth()) / 2} ${i} l ${f.step()} 0 l 0 ${o} l ${-f.step()} 0 Z`,
        className: r.root,
        ownerState: {
          axisHighlight: "band"
        }
      }), t === "line" && u !== null && /* @__PURE__ */ x.jsx(_s, {
        d: `M ${p(u)} ${i} L ${p(u)} ${i + o}`,
        className: r.root,
        ownerState: {
          axisHighlight: "line"
        }
      })]
    }, `${c}-${u}`);
  });
}
const EM = () => Ae({
  root: ["root"]
}, SM);
function Xu(e) {
  const {
    x: t,
    y: r
  } = e, i = EM();
  return /* @__PURE__ */ x.jsxs($.Fragment, {
    children: [t && t !== "none" && /* @__PURE__ */ x.jsx(CM, {
      type: t,
      classes: i
    }), r && r !== "none" && /* @__PURE__ */ x.jsx(wM, {
      type: r,
      classes: i
    })]
  });
}
process.env.NODE_ENV !== "production" && (Xu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  x: n.oneOf(["band", "line", "none"]),
  y: n.oneOf(["band", "line", "none"])
});
function Ku(e) {
  const {
    id: t,
    offset: r
  } = e, {
    left: i,
    top: o,
    width: s,
    height: a
  } = gt(), l = A({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, r);
  return /* @__PURE__ */ x.jsx("clipPath", {
    id: t,
    children: /* @__PURE__ */ x.jsx("rect", {
      x: i - l.left,
      y: o - l.top,
      width: s + l.left + l.right,
      height: a + l.top + l.bottom
    })
  });
}
process.env.NODE_ENV !== "production" && (Ku.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The id of the clip path.
   */
  id: n.string.isRequired,
  /**
   * Offset, in pixels, of the clip path rectangle from the drawing area.
   *
   * A positive value will move the rectangle outside the drawing area.
   */
  offset: n.shape({
    bottom: n.number,
    left: n.number,
    right: n.number,
    top: n.number
  })
});
const kM = parseInt($.version, 10), RM = ["x", "y", "id", "classes", "color", "shape"];
function AM(e) {
  return Ee("MuiHighlightElement", e);
}
Se("MuiHighlightElement", ["root"]);
const PM = (e) => {
  const {
    classes: t,
    id: r
  } = e, i = {
    root: ["root", `series-${r}`]
  };
  return Ae(i, AM, t);
};
function Ib(e) {
  const {
    x: t,
    y: r,
    color: i,
    shape: o
  } = e, s = oe(e, RM), a = PM(e), l = o === "circle" ? "circle" : "path", c = o === "circle" ? {
    cx: 0,
    cy: 0,
    r: s.r === void 0 ? 5 : s.r
  } : {
    d: Qg(Jg[Ly(o)])()
  }, u = kM > 18 ? {
    transformOrigin: `${t} ${r}`
  } : {
    "transform-origin": `${t} ${r}`
  };
  return /* @__PURE__ */ x.jsx(l, A({
    pointerEvents: "none",
    className: a.root,
    transform: `translate(${t} ${r})`,
    fill: i
  }, u, c, s));
}
process.env.NODE_ENV !== "production" && (Ib.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: n.object,
  id: n.oneOfType([n.number, n.string]).isRequired,
  shape: n.oneOf(["circle", "cross", "diamond", "square", "star", "triangle", "wye"]).isRequired
});
const IM = ["slots", "slotProps"];
function Mb(e) {
  const {
    slots: t,
    slotProps: r
  } = e, i = oe(e, IM), o = co(), {
    xAxis: s,
    xAxisIds: a
  } = Je(), {
    yAxis: l,
    yAxisIds: c
  } = Qe(), {
    instance: u
  } = Tt(), d = we(), f = ie(d, Dg);
  if (f.length === 0 || o === void 0)
    return null;
  const {
    series: p,
    stackingGroups: h
  } = o, g = a[0], m = c[0], y = t?.lineHighlight ?? Ib;
  return /* @__PURE__ */ x.jsx("g", A({}, i, {
    children: f.flatMap(({
      dataIndex: b,
      axisId: S
    }) => h.flatMap(({
      ids: C
    }) => C.flatMap((v) => {
      const {
        xAxisId: O = g,
        yAxisId: w = m,
        stackedData: E,
        data: R,
        disableHighlight: I,
        shape: j = "circle"
      } = p[v];
      if (I || R[b] == null || S !== O)
        return null;
      const _ = li(s[O].scale), T = l[w].scale, M = s[O].data;
      if (M === void 0)
        throw new Error(`MUI X Charts: ${O === $n ? "The first `xAxis`" : `The x-axis with id "${O}"`} should have data property to be able to display a line plot.`);
      const P = _(M[b]), N = T(E[b][1]);
      if (!u.isPointInside(P, N))
        return null;
      const L = ju(p[v], s[O], l[w]);
      return /* @__PURE__ */ x.jsx(y, A({
        id: v,
        color: L(b),
        x: P,
        y: N,
        shape: j
      }, r?.lineHighlight), `${v}`);
    })))
  }));
}
process.env.NODE_ENV !== "production" && (Mb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
function MM(e) {
  return Ee("MuiChartsGrid", e);
}
const Gp = Se("MuiChartsGrid", ["root", "line", "horizontalLine", "verticalLine"]), _M = le("g", {
  name: "MuiChartsGrid",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`&.${Gp.verticalLine}`]: t.verticalLine
  }, {
    [`&.${Gp.horizontalLine}`]: t.horizontalLine
  }, t.root]
})({}), _b = le("line", {
  name: "MuiChartsGrid",
  slot: "Line"
})(({
  theme: e
}) => ({
  stroke: (e.vars || e).palette.divider,
  shapeRendering: "crispEdges",
  strokeWidth: 1
}));
function jM(e) {
  const {
    instance: t
  } = Tt(), {
    axis: r,
    start: i,
    end: o,
    classes: s
  } = e, {
    scale: a,
    tickNumber: l,
    tickInterval: c
  } = r, u = Pa({
    scale: a,
    tickNumber: l,
    tickInterval: c,
    direction: "x"
  });
  return /* @__PURE__ */ x.jsx($.Fragment, {
    children: u.map(({
      value: d,
      offset: f
    }) => t.isXInside(f) ? /* @__PURE__ */ x.jsx(_b, {
      y1: i,
      y2: o,
      x1: f,
      x2: f,
      className: s.verticalLine
    }, `vertical-${d?.getTime?.() ?? d}`) : null)
  });
}
function $M(e) {
  const {
    instance: t
  } = Tt(), {
    axis: r,
    start: i,
    end: o,
    classes: s
  } = e, {
    scale: a,
    tickNumber: l,
    tickInterval: c
  } = r, u = Pa({
    scale: a,
    tickNumber: l,
    tickInterval: c,
    direction: "y"
  });
  return /* @__PURE__ */ x.jsx($.Fragment, {
    children: u.map(({
      value: d,
      offset: f
    }) => t.isYInside(f) ? /* @__PURE__ */ x.jsx(_b, {
      y1: f,
      y2: f,
      x1: i,
      x2: o,
      className: s.horizontalLine
    }, `horizontal-${d?.getTime?.() ?? d}`) : null)
  });
}
const DM = ["vertical", "horizontal"], LM = ({
  classes: e
}) => Ae({
  root: ["root"],
  verticalLine: ["line", "verticalLine"],
  horizontalLine: ["line", "horizontalLine"]
}, MM, e);
function Zu(e) {
  const t = nt({
    props: e,
    name: "MuiChartsGrid"
  }), r = gt(), {
    vertical: i,
    horizontal: o
  } = t, s = oe(t, DM), {
    xAxis: a,
    xAxisIds: l
  } = Je(), {
    yAxis: c,
    yAxisIds: u
  } = Qe(), d = LM(t), f = c[u[0]], p = a[l[0]];
  return /* @__PURE__ */ x.jsxs(_M, A({}, s, {
    className: d.root,
    children: [i && /* @__PURE__ */ x.jsx(jM, {
      axis: p,
      start: r.top,
      end: r.height + r.top,
      classes: d
    }), o && /* @__PURE__ */ x.jsx($M, {
      axis: f,
      start: r.left,
      end: r.width + r.left,
      classes: d
    })]
  }));
}
process.env.NODE_ENV !== "production" && (Zu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * Displays horizontal grid.
   */
  horizontal: n.bool,
  /**
   * Displays vertical grid.
   */
  vertical: n.bool
});
const NM = ["message"], FM = le("text")(({
  theme: e
}) => A({}, e.typography.body2, {
  stroke: "none",
  fill: (e.vars || e).palette.text.primary,
  shapeRendering: "crispEdges",
  textAnchor: "middle",
  dominantBaseline: "middle"
}));
function qM(e) {
  const {
    message: t
  } = e, r = oe(e, NM), {
    top: i,
    left: o,
    height: s,
    width: a
  } = gt(), {
    localeText: l
  } = Sy();
  return /* @__PURE__ */ x.jsx(FM, A({
    x: o + a / 2,
    y: i + s / 2
  }, r, {
    children: t ?? l.loading
  }));
}
const zM = ["message"], BM = le("text")(({
  theme: e
}) => A({}, e.typography.body2, {
  stroke: "none",
  fill: (e.vars || e).palette.text.primary,
  shapeRendering: "crispEdges",
  textAnchor: "middle",
  dominantBaseline: "middle"
}));
function VM(e) {
  const {
    message: t
  } = e, r = oe(e, zM), {
    top: i,
    left: o,
    height: s,
    width: a
  } = gt(), {
    localeText: l
  } = Sy();
  return /* @__PURE__ */ x.jsx(BM, A({
    x: o + a / 2,
    y: i + s / 2
  }, r, {
    children: t ?? l.noData
  }));
}
function UM() {
  const e = Ca();
  return Object.values(e).every((t) => {
    if (!t)
      return !0;
    const {
      series: r,
      seriesOrder: i
    } = t;
    return i.every((o) => {
      const s = r[o];
      return s.type === "sankey" ? s.data.links.length === 0 : s.data.length === 0;
    });
  });
}
function Ju(e) {
  const t = UM();
  if (e.loading) {
    const r = e.slots?.loadingOverlay ?? qM;
    return /* @__PURE__ */ x.jsx(r, A({}, e.slotProps?.loadingOverlay));
  }
  if (t) {
    const r = e.slots?.noDataOverlay ?? VM;
    return /* @__PURE__ */ x.jsx(r, A({}, e.slotProps?.noDataOverlay));
  }
  return null;
}
const HM = [ai, oi, pr, mr, gr, ii], GM = ["xAxis", "yAxis", "series", "width", "height", "margin", "colors", "dataset", "sx", "onAreaClick", "onLineClick", "onMarkClick", "axisHighlight", "disableLineItemHighlight", "hideLegend", "grid", "children", "slots", "slotProps", "skipAnimation", "loading", "highlightedItem", "onHighlightChange", "className", "showToolbar", "brushConfig"], WM = (e) => {
  const {
    xAxis: t,
    yAxis: r,
    series: i,
    width: o,
    height: s,
    margin: a,
    colors: l,
    dataset: c,
    sx: u,
    onAreaClick: d,
    onLineClick: f,
    onMarkClick: p,
    axisHighlight: h,
    disableLineItemHighlight: g,
    grid: m,
    children: y,
    slots: b,
    slotProps: S,
    skipAnimation: C,
    loading: v,
    highlightedItem: O,
    onHighlightChange: w,
    className: E,
    brushConfig: R
  } = e, I = oe(e, GM), _ = `${Qi()}-clip-path`, T = $.useMemo(() => i.map((J) => A({
    disableHighlight: !!g,
    type: "line"
  }, J)), [g, i]), M = A({}, I, {
    series: T,
    width: o,
    height: s,
    margin: a,
    colors: l,
    dataset: c,
    xAxis: t ?? [{
      id: $n,
      scaleType: "point",
      data: Array.from({
        length: Math.max(...i.map((J) => (J.data ?? c ?? []).length))
      }, (J, Q) => Q)
    }],
    yAxis: r,
    highlightedItem: O,
    onHighlightChange: w,
    disableAxisListener: S?.tooltip?.trigger !== "axis" && h?.x === "none" && h?.y === "none",
    className: E,
    skipAnimation: C,
    brushConfig: R,
    plugins: HM
  }), P = {
    vertical: m?.vertical,
    horizontal: m?.horizontal
  }, N = {
    clipPath: `url(#${_})`
  }, L = {
    id: _
  }, z = {
    slots: b,
    slotProps: S,
    onItemClick: d
  }, H = {
    slots: b,
    slotProps: S,
    onItemClick: f
  }, Z = {
    slots: b,
    slotProps: S,
    onItemClick: p,
    skipAnimation: C
  }, F = {
    slots: b,
    slotProps: S,
    loading: v
  }, k = {
    slots: b,
    slotProps: S
  }, B = A({
    x: "line"
  }, h), G = {
    slots: b,
    slotProps: S
  }, W = {
    slots: b,
    slotProps: S
  };
  return {
    chartsWrapperProps: {
      sx: u,
      legendPosition: e.slotProps?.legend?.position,
      legendDirection: e.slotProps?.legend?.direction,
      hideLegend: e.hideLegend ?? !1
    },
    chartContainerProps: M,
    gridProps: P,
    clipPathProps: L,
    clipPathGroupProps: N,
    areaPlotProps: z,
    linePlotProps: H,
    markPlotProps: Z,
    overlayProps: F,
    chartsAxisProps: k,
    axisHighlightProps: B,
    lineHighlightPlotProps: G,
    legendProps: W,
    children: y
  };
};
function YM(e, t, r, i, o, s, a, l, c, u, d, f = 1 / 0, p = 1) {
  const h = i.copy(), g = o.copy();
  h.range([0, 1]), g.range([0, 1]);
  const m = function(R) {
    const I = h(r[R].x), j = g(r[R].y);
    return I >= s && I <= a && j >= l && j <= c;
  }, y = i.range()[1] - i.range()[0], b = o.range()[1] - o.range()[0], S = y * y, C = b * b;
  function v(E, R) {
    return S * E * E + C * R * R;
  }
  const O = h(Wp(i, u, (E) => r[E]?.x)), w = g(Wp(o, d, (E) => r[E]?.y));
  return e.neighbors(O, w, p, f != null ? f * f : 1 / 0, m, v);
}
function Wp(e, t, r) {
  if (Ue(e)) {
    const i = e.bandwidth() === 0 ? Math.floor((t - Math.min(...e.range()) + e.step() / 2) / e.step()) : Math.floor((t - Math.min(...e.range())) / e.step());
    return r(i);
  }
  return e.invert(t);
}
const La = ({
  svgRef: e,
  params: t,
  store: r,
  instance: i
}) => {
  const {
    disableVoronoi: o,
    voronoiMaxRadius: s,
    onItemClick: a
  } = t, l = ie(r, mt), {
    axis: c,
    axisIds: u
  } = ie(r, rt), {
    axis: d,
    axisIds: f
  } = ie(r, it), p = ie(r, hg), {
    series: h,
    seriesOrder: g
  } = ie(r, Me)?.scatter ?? {}, m = ie(r, p ? WE : YE), y = u[0], b = f[0];
  Fe(() => {
    r.set("voronoi", {
      isVoronoiEnabled: !o
    });
  }, [r, o]), $.useEffect(() => {
    if (e.current === null || o)
      return;
    const v = e.current;
    function O(P) {
      const N = zi(v, P);
      if (!i.isPointInside(N.x, N.y))
        return "outside-chart";
      let L;
      for (const z of g ?? []) {
        const H = (h ?? {})[z], Z = m.get(z);
        if (!Z)
          continue;
        const F = H.xAxisId ?? y, k = H.yAxisId ?? b, B = fp(r.getSnapshot(), F), G = fp(r.getSnapshot(), k), W = s === "item" ? H.markerSize : s, X = (B?.start ?? 0) / 100, J = (B?.end ?? 100) / 100, Q = (G?.start ?? 0) / 100, te = (G?.end ?? 100) / 100, V = c[F].scale, Y = d[k].scale, ee = YM(Z, l, H.data, V, Y, X, J, Q, te, N.x, N.y, W)[0];
        if (ee === void 0)
          continue;
        const D = H.data[ee], re = V(D.x), ne = Y(D.y), ce = (re - N.x) ** 2 + (ne - N.y) ** 2;
        (L === void 0 || ce < L.distanceSq) && (L = {
          dataIndex: ee,
          seriesId: z,
          distanceSq: ce
        });
      }
      return L === void 0 ? "no-point-found" : {
        seriesId: L.seriesId,
        dataIndex: L.dataIndex
      };
    }
    const w = i.addInteractionListener("moveEnd", (P) => {
      P.detail.activeGestures.pan || (i.cleanInteraction?.(), i.clearHighlight?.());
    }), E = i.addInteractionListener("panEnd", (P) => {
      P.detail.activeGestures.move || (i.cleanInteraction?.(), i.clearHighlight?.());
    }), R = i.addInteractionListener("quickPressEnd", (P) => {
      !P.detail.activeGestures.move && !P.detail.activeGestures.pan && (i.cleanInteraction?.(), i.clearHighlight?.());
    }), I = (P) => {
      const N = O(P.detail.srcEvent);
      if (N === "outside-chart") {
        i.cleanInteraction?.(), i.clearHighlight?.();
        return;
      }
      if (N === "outside-voronoi-max-radius" || N === "no-point-found") {
        i.removeItemInteraction?.(), i.clearHighlight?.();
        return;
      }
      const {
        seriesId: L,
        dataIndex: z
      } = N;
      i.setItemInteraction?.({
        type: "scatter",
        seriesId: L,
        dataIndex: z
      }, {
        interaction: "pointer"
      }), i.setHighlight?.({
        seriesId: L,
        dataIndex: z
      });
    }, j = i.addInteractionListener("tap", (P) => {
      const N = O(P.detail.srcEvent);
      if (typeof N != "string" && a) {
        const {
          seriesId: L,
          dataIndex: z
        } = N;
        a(P.detail.srcEvent, {
          type: "scatter",
          seriesId: L,
          dataIndex: z
        });
      }
    }), _ = i.addInteractionListener("move", I), T = i.addInteractionListener("pan", I), M = i.addInteractionListener("quickPress", I);
    return () => {
      j.cleanup(), _.cleanup(), w.cleanup(), T.cleanup(), E.cleanup(), M.cleanup(), R.cleanup();
    };
  }, [e, d, c, s, a, o, l, i, g, h, m, y, b, r]);
  const S = ze(() => {
    r.set("voronoi", {
      isVoronoiEnabled: !0
    });
  }), C = ze(() => {
    r.set("voronoi", {
      isVoronoiEnabled: !1
    });
  });
  return {
    instance: {
      enableVoronoi: S,
      disableVoronoi: C
    }
  };
};
La.getDefaultizedParams = ({
  params: e
}) => A({}, e, {
  disableVoronoi: e.disableVoronoi ?? !e.series.some((t) => t.type === "scatter")
});
La.getInitialState = (e) => ({
  voronoi: {
    isVoronoiEnabled: !e.disableVoronoi
  }
});
La.params = {
  disableVoronoi: !0,
  voronoiMaxRadius: !0,
  onItemClick: !0
};
const jb = [ai, oi, pr, mr, gr, La, ii], XM = ["width", "height", "margin", "children", "series", "colors", "dataset", "desc", "onAxisClick", "highlightedAxis", "onHighlightedAxisChange", "disableVoronoi", "voronoiMaxRadius", "onItemClick", "disableAxisListener", "highlightedItem", "onHighlightChange", "sx", "title", "xAxis", "yAxis", "zAxis", "rotationAxis", "radiusAxis", "skipAnimation", "seriesConfig", "plugins", "localeText", "slots", "slotProps", "experimentalFeatures", "enableKeyboardNavigation", "brushConfig"], Qu = (e, t) => {
  const r = e, {
    width: i,
    height: o,
    margin: s,
    children: a,
    series: l,
    colors: c,
    dataset: u,
    desc: d,
    onAxisClick: f,
    highlightedAxis: p,
    onHighlightedAxisChange: h,
    disableVoronoi: g,
    voronoiMaxRadius: m,
    onItemClick: y,
    disableAxisListener: b,
    highlightedItem: S,
    onHighlightChange: C,
    sx: v,
    title: O,
    xAxis: w,
    yAxis: E,
    zAxis: R,
    rotationAxis: I,
    radiusAxis: j,
    skipAnimation: _,
    seriesConfig: T,
    plugins: M,
    localeText: P,
    slots: N,
    slotProps: L,
    experimentalFeatures: z,
    enableKeyboardNavigation: H,
    brushConfig: Z
  } = r, F = oe(r, XM), k = A({
    title: O,
    desc: d,
    sx: v,
    ref: t
  }, F);
  return {
    chartDataProviderProps: {
      margin: s,
      series: l,
      colors: c,
      dataset: u,
      disableAxisListener: b,
      highlightedItem: S,
      onHighlightChange: C,
      onAxisClick: f,
      highlightedAxis: p,
      onHighlightedAxisChange: h,
      disableVoronoi: g,
      voronoiMaxRadius: m,
      onItemClick: y,
      xAxis: w,
      yAxis: E,
      zAxis: R,
      rotationAxis: I,
      radiusAxis: j,
      skipAnimation: _,
      width: i,
      height: o,
      localeText: P,
      seriesConfig: T,
      experimentalFeatures: z,
      enableKeyboardNavigation: H,
      brushConfig: Z,
      plugins: M ?? jb,
      slots: N,
      slotProps: L
    },
    chartsSurfaceProps: k,
    children: a
  };
};
function KM(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ZM(e, t, r, i, o) {
  const s = e[t], a = o || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !KM(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${i} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const JM = _a(n.elementType, ZM);
function Yp(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
class js {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new js();
  }
  static use() {
    const t = Qs(js.create).current, [r, i] = $.useState(!1);
    return t.shouldMount = r, t.setShouldMount = i, $.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = e_(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function QM() {
  return js.use();
}
function e_() {
  let e, t;
  const r = new Promise((i, o) => {
    e = i, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function mc(e, t) {
  return mc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, mc(e, t);
}
function t_(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, mc(e, t);
}
const Xp = lt.createContext(null);
function n_(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ed(e, t) {
  var r = function(s) {
    return t && Xo(s) ? t(s) : s;
  }, i = /* @__PURE__ */ Object.create(null);
  return e && Bx.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    i[o.key] = r(o);
  }), i;
}
function r_(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var i = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in e)
    s in t ? o.length && (i[s] = o, o = []) : o.push(s);
  var a, l = {};
  for (var c in t) {
    if (i[c])
      for (a = 0; a < i[c].length; a++) {
        var u = i[c][a];
        l[i[c][a]] = r(u);
      }
    l[c] = r(c);
  }
  for (a = 0; a < o.length; a++)
    l[o[a]] = r(o[a]);
  return l;
}
function Yn(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function i_(e, t) {
  return ed(e.children, function(r) {
    return Ko(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Yn(r, "appear", e),
      enter: Yn(r, "enter", e),
      exit: Yn(r, "exit", e)
    });
  });
}
function o_(e, t, r) {
  var i = ed(e.children), o = r_(t, i);
  return Object.keys(o).forEach(function(s) {
    var a = o[s];
    if (Xo(a)) {
      var l = s in t, c = s in i, u = t[s], d = Xo(u) && !u.props.in;
      c && (!l || d) ? o[s] = Ko(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: Yn(a, "exit", e),
        enter: Yn(a, "enter", e)
      }) : !c && l && !d ? o[s] = Ko(a, {
        in: !1
      }) : c && l && Xo(u) && (o[s] = Ko(a, {
        onExited: r.bind(null, a),
        in: u.props.in,
        exit: Yn(a, "exit", e),
        enter: Yn(a, "enter", e)
      }));
    }
  }), o;
}
var s_ = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, a_ = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, td = /* @__PURE__ */ (function(e) {
  t_(t, e);
  function t(i, o) {
    var s;
    s = e.call(this, i, o) || this;
    var a = s.handleExited.bind(n_(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, s) {
    var a = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? i_(o, l) : o_(o, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, s) {
    var a = ed(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = A({}, l.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, s = o.component, a = o.childFactory, l = oe(o, ["component", "childFactory"]), c = this.state.contextValue, u = s_(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ lt.createElement(Xp.Provider, {
      value: c
    }, u) : /* @__PURE__ */ lt.createElement(Xp.Provider, {
      value: c
    }, /* @__PURE__ */ lt.createElement(s, l, u));
  }, t;
})(lt.Component);
td.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: n.func
} : {};
td.defaultProps = a_;
class nd {
  static create() {
    return new nd();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function l_() {
  const e = Qs(nd.create).current;
  return gm(e.disposeEffect), e;
}
function $b(e) {
  const {
    className: t,
    classes: r,
    pulsate: i = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: a,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, f] = $.useState(!1), p = be(t, r.ripple, r.rippleVisible, i && r.ripplePulsate), h = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + o
  }, g = be(r.child, d && r.childLeaving, i && r.childPulsate);
  return !l && !d && f(!0), $.useEffect(() => {
    if (!l && c != null) {
      const m = setTimeout(c, u);
      return () => {
        clearTimeout(m);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ x.jsx("span", {
    className: p,
    style: h,
    children: /* @__PURE__ */ x.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && ($b.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const Et = Se("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), gc = 550, c_ = 80, u_ = Yi`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, d_ = Yi`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, f_ = Yi`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, p_ = le("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), h_ = le($b, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Et.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${u_};
    animation-duration: ${gc}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Et.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Et.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Et.childLeaving} {
    opacity: 0;
    animation-name: ${d_};
    animation-duration: ${gc}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Et.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${f_};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Db = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = jn({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: a,
    ...l
  } = i, [c, u] = $.useState([]), d = $.useRef(0), f = $.useRef(null);
  $.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [c]);
  const p = $.useRef(!1), h = l_(), g = $.useRef(null), m = $.useRef(null), y = $.useCallback((v) => {
    const {
      pulsate: O,
      rippleX: w,
      rippleY: E,
      rippleSize: R,
      cb: I
    } = v;
    u((j) => [...j, /* @__PURE__ */ x.jsx(h_, {
      classes: {
        ripple: be(s.ripple, Et.ripple),
        rippleVisible: be(s.rippleVisible, Et.rippleVisible),
        ripplePulsate: be(s.ripplePulsate, Et.ripplePulsate),
        child: be(s.child, Et.child),
        childLeaving: be(s.childLeaving, Et.childLeaving),
        childPulsate: be(s.childPulsate, Et.childPulsate)
      },
      timeout: gc,
      pulsate: O,
      rippleX: w,
      rippleY: E,
      rippleSize: R
    }, d.current)]), d.current += 1, f.current = I;
  }, [s]), b = $.useCallback((v = {}, O = {}, w = () => {
  }) => {
    const {
      pulsate: E = !1,
      center: R = o || O.pulsate,
      fakeElement: I = !1
      // For test purposes
    } = O;
    if (v?.type === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    v?.type === "touchstart" && (p.current = !0);
    const j = I ? null : m.current, _ = j ? j.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let T, M, P;
    if (R || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches)
      T = Math.round(_.width / 2), M = Math.round(_.height / 2);
    else {
      const {
        clientX: N,
        clientY: L
      } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
      T = Math.round(N - _.left), M = Math.round(L - _.top);
    }
    if (R)
      P = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), P % 2 === 0 && (P += 1);
    else {
      const N = Math.max(Math.abs((j ? j.clientWidth : 0) - T), T) * 2 + 2, L = Math.max(Math.abs((j ? j.clientHeight : 0) - M), M) * 2 + 2;
      P = Math.sqrt(N ** 2 + L ** 2);
    }
    v?.touches ? g.current === null && (g.current = () => {
      y({
        pulsate: E,
        rippleX: T,
        rippleY: M,
        rippleSize: P,
        cb: w
      });
    }, h.start(c_, () => {
      g.current && (g.current(), g.current = null);
    })) : y({
      pulsate: E,
      rippleX: T,
      rippleY: M,
      rippleSize: P,
      cb: w
    });
  }, [o, y, h]), S = $.useCallback(() => {
    b({}, {
      pulsate: !0
    });
  }, [b]), C = $.useCallback((v, O) => {
    if (h.clear(), v?.type === "touchend" && g.current) {
      g.current(), g.current = null, h.start(0, () => {
        C(v, O);
      });
      return;
    }
    g.current = null, u((w) => w.length > 0 ? w.slice(1) : w), f.current = O;
  }, [h]);
  return $.useImperativeHandle(r, () => ({
    pulsate: S,
    start: b,
    stop: C
  }), [S, b, C]), /* @__PURE__ */ x.jsx(p_, {
    className: be(Et.root, s.root, a),
    ref: m,
    ...l,
    children: /* @__PURE__ */ x.jsx(td, {
      component: null,
      exit: !0,
      children: c
    })
  });
});
process.env.NODE_ENV !== "production" && (Db.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
function m_(e) {
  return Ee("MuiButtonBase", e);
}
const g_ = Se("MuiButtonBase", ["root", "disabled", "focusVisible"]), y_ = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: i,
    classes: o
  } = e, a = Ae({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, m_, o);
  return r && i && (a.root += ` ${i}`), a;
}, b_ = le("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${g_.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), rd = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = jn({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: a,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: f = !1,
    focusRipple: p = !1,
    focusVisibleClassName: h,
    LinkComponent: g = "a",
    onBlur: m,
    onClick: y,
    onContextMenu: b,
    onDragLeave: S,
    onFocus: C,
    onFocusVisible: v,
    onKeyDown: O,
    onKeyUp: w,
    onMouseDown: E,
    onMouseLeave: R,
    onMouseUp: I,
    onTouchEnd: j,
    onTouchMove: _,
    onTouchStart: T,
    tabIndex: M = 0,
    TouchRippleProps: P,
    touchRippleRef: N,
    type: L,
    ...z
  } = i, H = $.useRef(null), Z = QM(), F = Pn(Z.ref, N), [k, B] = $.useState(!1);
  u && k && B(!1), $.useImperativeHandle(o, () => ({
    focusVisible: () => {
      B(!0), H.current.focus();
    }
  }), []);
  const G = Z.shouldMount && !d && !u;
  $.useEffect(() => {
    k && p && !d && Z.pulsate();
  }, [d, p, k, Z]);
  const W = en(Z, "start", E, f), X = en(Z, "stop", b, f), J = en(Z, "stop", S, f), Q = en(Z, "stop", I, f), te = en(Z, "stop", (se) => {
    k && se.preventDefault(), R && R(se);
  }, f), V = en(Z, "start", T, f), Y = en(Z, "stop", j, f), ee = en(Z, "stop", _, f), D = en(Z, "stop", (se) => {
    Yp(se.target) || B(!1), m && m(se);
  }, !1), re = ze((se) => {
    H.current || (H.current = se.currentTarget), Yp(se.target) && (B(!0), v && v(se)), C && C(se);
  }), ne = () => {
    const se = H.current;
    return c && c !== "button" && !(se.tagName === "A" && se.href);
  }, ce = ze((se) => {
    p && !se.repeat && k && se.key === " " && Z.stop(se, () => {
      Z.start(se);
    }), se.target === se.currentTarget && ne() && se.key === " " && se.preventDefault(), O && O(se), se.target === se.currentTarget && ne() && se.key === "Enter" && !u && (se.preventDefault(), y && y(se));
  }), ae = ze((se) => {
    p && se.key === " " && k && !se.defaultPrevented && Z.stop(se, () => {
      Z.pulsate(se);
    }), w && w(se), y && se.target === se.currentTarget && ne() && se.key === " " && !se.defaultPrevented && y(se);
  });
  let Ce = c;
  Ce === "button" && (z.href || z.to) && (Ce = g);
  const He = {};
  Ce === "button" ? (He.type = L === void 0 ? "button" : L, He.disabled = u) : (!z.href && !z.to && (He.role = "button"), u && (He["aria-disabled"] = u));
  const $e = Pn(r, H), ke = {
    ...i,
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: p,
    tabIndex: M,
    focusVisible: k
  }, We = y_(ke);
  return /* @__PURE__ */ x.jsxs(b_, {
    as: Ce,
    className: be(We.root, l),
    ownerState: ke,
    onBlur: D,
    onClick: y,
    onContextMenu: X,
    onFocus: re,
    onKeyDown: ce,
    onKeyUp: ae,
    onMouseDown: W,
    onMouseLeave: te,
    onMouseUp: Q,
    onDragLeave: J,
    onTouchEnd: Y,
    onTouchMove: ee,
    onTouchStart: V,
    ref: $e,
    tabIndex: u ? -1 : M,
    type: L,
    ...He,
    ...z,
    children: [a, G ? /* @__PURE__ */ x.jsx(Db, {
      ref: F,
      center: s,
      ...P
    }) : null]
  });
});
function en(e, t, r, i = !1) {
  return ze((o) => (r && r(o), i || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (rd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: zu,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: JM,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
function x_(e) {
  return Ee("MuiCircularProgress", e);
}
Se("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Dt = 44, yc = Yi`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, bc = Yi`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, v_ = typeof yc != "string" ? qh`
        animation: ${yc} 1.4s linear infinite;
      ` : null, O_ = typeof bc != "string" ? qh`
        animation: ${bc} 1.4s ease-in-out infinite;
      ` : null, T_ = (e) => {
  const {
    classes: t,
    variant: r,
    color: i,
    disableShrink: o
  } = e, s = {
    root: ["root", r, `color${pe(i)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", `circle${pe(r)}`, o && "circleDisableShrink"]
  };
  return Ae(s, x_, t);
}, S_ = le("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${pe(r.color)}`]];
  }
})(An(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: v_ || {
      animation: `${yc} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Vi()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), w_ = le("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), C_ = le("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${pe(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(An(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: O_ || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${bc} 1.4s ease-in-out infinite`
    }
  }]
}))), E_ = le("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(An(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), id = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = jn({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: s = "primary",
    disableShrink: a = !1,
    enableTrackSlot: l = !1,
    size: c = 40,
    style: u,
    thickness: d = 3.6,
    value: f = 0,
    variant: p = "indeterminate",
    ...h
  } = i, g = {
    ...i,
    color: s,
    disableShrink: a,
    size: c,
    thickness: d,
    value: f,
    variant: p,
    enableTrackSlot: l
  }, m = T_(g), y = {}, b = {}, S = {};
  if (p === "determinate") {
    const C = 2 * Math.PI * ((Dt - d) / 2);
    y.strokeDasharray = C.toFixed(3), S["aria-valuenow"] = Math.round(f), y.strokeDashoffset = `${((100 - f) / 100 * C).toFixed(3)}px`, b.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ x.jsx(S_, {
    className: be(m.root, o),
    style: {
      width: c,
      height: c,
      ...b,
      ...u
    },
    ownerState: g,
    ref: r,
    role: "progressbar",
    ...S,
    ...h,
    children: /* @__PURE__ */ x.jsxs(w_, {
      className: m.svg,
      ownerState: g,
      viewBox: `${Dt / 2} ${Dt / 2} ${Dt} ${Dt}`,
      children: [l ? /* @__PURE__ */ x.jsx(E_, {
        className: m.track,
        ownerState: g,
        cx: Dt,
        cy: Dt,
        r: (Dt - d) / 2,
        fill: "none",
        strokeWidth: d,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ x.jsx(C_, {
        className: m.circle,
        style: y,
        ownerState: g,
        cx: Dt,
        cy: Dt,
        r: (Dt - d) / 2,
        fill: "none",
        strokeWidth: d
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (id.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: _a(n.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */
  enableTrackSlot: n.bool,
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: n.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: n.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: n.oneOf(["determinate", "indeterminate"])
});
function k_(e) {
  return Ee("MuiIconButton", e);
}
const Kp = Se("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), R_ = (e) => {
  const {
    classes: t,
    disabled: r,
    color: i,
    edge: o,
    size: s,
    loading: a
  } = e, l = {
    root: ["root", a && "loading", r && "disabled", i !== "default" && `color${pe(i)}`, o && `edge${pe(o)}`, `size${pe(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return Ae(l, k_, t);
}, A_ = le(rd, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${pe(r.color)}`], r.edge && t[`edge${pe(r.edge)}`], t[`size${pe(r.size)}`]];
  }
})(An(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), An(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Vi()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Vi()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Kp.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Kp.loading}`]: {
    color: "transparent"
  }
}))), P_ = le("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), Lb = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = jn({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: s,
    className: a,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium",
    id: f,
    loading: p = null,
    loadingIndicator: h,
    ...g
  } = i, m = Qi(f), y = h ?? /* @__PURE__ */ x.jsx(id, {
    "aria-labelledby": m,
    color: "inherit",
    size: 16
  }), b = {
    ...i,
    edge: o,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    loading: p,
    loadingIndicator: y,
    size: d
  }, S = R_(b);
  return /* @__PURE__ */ x.jsxs(A_, {
    id: p ? m : f,
    className: be(S.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c || p,
    ref: r,
    ...g,
    ownerState: b,
    children: [typeof p == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ x.jsx("span", {
      className: S.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ x.jsx(P_, {
        className: S.loadingIndicator,
        ownerState: b,
        children: p && y
      })
    }), s]
  });
});
process.env.NODE_ENV !== "production" && (Lb.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: _a(n.node, (e) => $.Children.toArray(e.children).some((r) => /* @__PURE__ */ $.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function I_(e) {
  return Ee("MuiButton", e);
}
const Bn = Se("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Nb = /* @__PURE__ */ $.createContext({});
process.env.NODE_ENV !== "production" && (Nb.displayName = "ButtonGroupContext");
const Fb = /* @__PURE__ */ $.createContext(void 0);
process.env.NODE_ENV !== "production" && (Fb.displayName = "ButtonGroupButtonContext");
const M_ = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: i,
    size: o,
    variant: s,
    loading: a,
    loadingPosition: l,
    classes: c
  } = e, u = {
    root: ["root", a && "loading", s, `${s}${pe(t)}`, `size${pe(o)}`, `${s}Size${pe(o)}`, `color${pe(t)}`, r && "disableElevation", i && "fullWidth", a && `loadingPosition${pe(l)}`],
    startIcon: ["icon", "startIcon", `iconSize${pe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${pe(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = Ae(u, I_, c);
  return {
    ...c,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, qb = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], __ = le(rd, {
  shouldForwardProp: (e) => fm(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${pe(r.color)}`], t[`size${pe(r.size)}`], t[`${r.variant}Size${pe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(An(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Bn.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Bn.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Bn.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Bn.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Vi()).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[i].main,
        "--variant-outlinedColor": (e.vars || e).palette[i].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[i].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[i].contrastText,
        "--variant-containedBg": (e.vars || e).palette[i].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[i].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[i].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[i].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[i].main, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Bn.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Bn.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Bn.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), j_ = le("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${pe(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...qb]
})), $_ = le("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${pe(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...qb]
})), D_ = le("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Zp = le("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), zb = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = $.useContext(Nb), o = $.useContext(Fb), s = or(i, t), a = jn({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: p = !1,
    disableFocusRipple: h = !1,
    endIcon: g,
    focusVisibleClassName: m,
    fullWidth: y = !1,
    id: b,
    loading: S = null,
    loadingIndicator: C,
    loadingPosition: v = "center",
    size: O = "medium",
    startIcon: w,
    type: E,
    variant: R = "text",
    ...I
  } = a, j = Qi(b), _ = C ?? /* @__PURE__ */ x.jsx(id, {
    "aria-labelledby": j,
    color: "inherit",
    size: 16
  }), T = {
    ...a,
    color: c,
    component: u,
    disabled: f,
    disableElevation: p,
    disableFocusRipple: h,
    fullWidth: y,
    loading: S,
    loadingIndicator: _,
    loadingPosition: v,
    size: O,
    type: E,
    variant: R
  }, M = M_(T), P = (w || S && v === "start") && /* @__PURE__ */ x.jsx(j_, {
    className: M.startIcon,
    ownerState: T,
    children: w || /* @__PURE__ */ x.jsx(Zp, {
      className: M.loadingIconPlaceholder,
      ownerState: T
    })
  }), N = (g || S && v === "end") && /* @__PURE__ */ x.jsx($_, {
    className: M.endIcon,
    ownerState: T,
    children: g || /* @__PURE__ */ x.jsx(Zp, {
      className: M.loadingIconPlaceholder,
      ownerState: T
    })
  }), L = o || "", z = typeof S == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ x.jsx("span", {
      className: M.loadingWrapper,
      style: {
        display: "contents"
      },
      children: S && /* @__PURE__ */ x.jsx(D_, {
        className: M.loadingIndicator,
        ownerState: T,
        children: _
      })
    })
  ) : null;
  return /* @__PURE__ */ x.jsxs(__, {
    ownerState: T,
    className: be(i.className, M.root, d, L),
    component: u,
    disabled: f || S,
    focusRipple: !h,
    focusVisibleClassName: be(M.focusVisible, m),
    ref: r,
    type: E,
    id: S ? j : b,
    ...I,
    classes: M,
    children: [P, v !== "end" && z, l, v === "end" && z, N]
  });
});
process.env.NODE_ENV !== "production" && (zb.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * @ignore
   */
  id: n.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: n.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: n.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: n.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
const L_ = {
  baseButton: zb,
  baseIconButton: Lb
}, N_ = {}, F_ = A({}, L_, N_), Bb = /* @__PURE__ */ $.createContext(null);
process.env.NODE_ENV !== "production" && (Bb.displayName = "ChartsSlotsContext");
function q_(e) {
  const {
    slots: t,
    slotProps: r = {},
    defaultSlots: i,
    children: o
  } = e, s = $.useMemo(() => ({
    slots: A({}, i, t),
    slotProps: r
  }), [i, t, r]);
  return /* @__PURE__ */ x.jsx(Bb.Provider, {
    value: s,
    children: o
  });
}
const z_ = ["children", "localeText", "plugins", "seriesConfig", "slots", "slotProps"], B_ = (e) => {
  const t = nt({
    props: e,
    name: "MuiChartDataProvider"
  }), {
    children: r,
    localeText: i,
    plugins: o = jb,
    seriesConfig: s,
    slots: a,
    slotProps: l
  } = t, c = oe(t, z_), u = Ft(), d = {
    plugins: o,
    seriesConfig: s,
    pluginParams: A({
      theme: u.palette.mode
    }, c)
  };
  return {
    children: r,
    localeText: i,
    chartProviderProps: d,
    slots: a,
    slotProps: l
  };
};
function Na(e) {
  const {
    children: t,
    localeText: r,
    chartProviderProps: i,
    slots: o,
    slotProps: s
  } = B_(e);
  return /* @__PURE__ */ x.jsx(fA, A({}, i, {
    children: /* @__PURE__ */ x.jsx(Ty, {
      localeText: r,
      children: /* @__PURE__ */ x.jsx(q_, {
        slots: o,
        slotProps: s,
        defaultSlots: F_,
        children: t
      })
    })
  }));
}
process.env.NODE_ENV !== "production" && (Na.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: n.shape({
    current: n.any
  }),
  /**
   * Color palette used to colorize multiple series.
   * @default rainbowSurgePalette
   */
  colors: n.oneOfType([n.arrayOf(n.string), n.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: n.arrayOf(n.object),
  /**
   * Options to enable features planned for the next major.
   */
  experimentalFeatures: n.shape({
    preferStrictDomainInLineCharts: n.bool
  }),
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: n.number,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: n.string,
  /**
   * Localized text for chart components.
   */
  localeText: n.object,
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   *
   * Accepts a `number` to be used on all sides or an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   */
  margin: n.oneOfType([n.number, n.shape({
    bottom: n.number,
    left: n.number,
    right: n.number,
    top: n.number
  })]),
  /**
   * The array of series to display.
   * Each type of series has its own specificity.
   * Please refer to the appropriate docs page to learn more about it.
   */
  series: n.arrayOf(n.object),
  /**
   * If `true`, animations are skipped.
   * If unset or `false`, the animations respects the user's `prefers-reduced-motion` setting.
   */
  skipAnimation: n.bool,
  /**
   * The props for the slots.
   */
  slotProps: n.object,
  /**
   * Slots to customize charts' components.
   */
  slots: n.object,
  theme: n.oneOf(["dark", "light"]),
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: n.number
});
function Jp(e) {
  const {
    isReversed: t,
    gradientId: r,
    size: i,
    direction: o,
    scale: s,
    colorMap: a
  } = e;
  return i <= 0 ? null : /* @__PURE__ */ x.jsx("linearGradient", {
    id: r,
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "0",
    [`${o}${t ? 1 : 2}`]: `${i}px`,
    gradientUnits: "userSpaceOnUse",
    children: a.thresholds.map((l, c) => {
      const u = s(l);
      if (u === void 0)
        return null;
      const d = t ? 1 - u / i : u / i;
      return Number.isNaN(d) ? null : /* @__PURE__ */ x.jsxs($.Fragment, {
        children: [/* @__PURE__ */ x.jsx("stop", {
          offset: d,
          stopColor: a.colors[c],
          stopOpacity: 1
        }), /* @__PURE__ */ x.jsx("stop", {
          offset: d,
          stopColor: a.colors[c + 1],
          stopOpacity: 1
        })]
      }, l.toString() + c);
    })
  });
}
const V_ = 10;
function Qp(e) {
  const {
    gradientUnits: t,
    isReversed: r,
    gradientId: i,
    size: o,
    direction: s,
    scale: a,
    colorScale: l,
    colorMap: c
  } = e, u = [c.min ?? 0, c.max ?? 100], d = u.map(a).filter((g) => g !== void 0);
  if (d.length !== 2)
    return null;
  const f = typeof u[0] == "number" ? me(u[0], u[1]) : iu(u[0], u[1]), p = Math.round((Math.max(...d) - Math.min(...d)) / V_), h = `${u[0]}-${u[1]}-`;
  return /* @__PURE__ */ x.jsx("linearGradient", {
    id: i,
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "0",
    [`${s}${r ? 1 : 2}`]: t === "objectBoundingBox" ? 1 : `${o}px`,
    gradientUnits: t ?? "userSpaceOnUse",
    children: Array.from({
      length: p + 1
    }, (g, m) => {
      const y = f(m / p);
      if (y === void 0)
        return null;
      const b = a(y);
      if (b === void 0)
        return null;
      const S = r ? 1 - b / o : b / o, C = l(y);
      return C === null ? null : /* @__PURE__ */ x.jsx("stop", {
        offset: S,
        stopColor: C,
        stopOpacity: 1
      }, h + m);
    })
  });
}
const U_ = 10, H_ = (e) => e ? {
  x1: "1",
  x2: "0",
  y1: "0",
  y2: "0"
} : {
  x1: "0",
  x2: "1",
  y1: "0",
  y2: "0"
};
function Sl(e) {
  const {
    isReversed: t,
    gradientId: r,
    colorScale: i,
    colorMap: o
  } = e, s = [o.min ?? 0, o.max ?? 100], a = typeof s[0] == "number" ? me(s[0], s[1]) : iu(s[0], s[1]), l = U_, c = `${s[0]}-${s[1]}-`;
  return /* @__PURE__ */ x.jsx("linearGradient", A({
    id: r
  }, H_(t), {
    gradientUnits: "objectBoundingBox",
    children: Array.from({
      length: l + 1
    }, (u, d) => {
      const f = d / l, p = a(f);
      if (p === void 0)
        return null;
      const h = i(p);
      return h === null ? null : /* @__PURE__ */ x.jsx("stop", {
        offset: f,
        stopColor: h,
        stopOpacity: 1
      }, c + d);
    })
  }));
}
function G_() {
  const {
    top: e,
    height: t,
    bottom: r,
    left: i,
    width: o,
    right: s
  } = gt(), a = e + t + r, l = i + o + s, c = Mu(), u = Q1(), {
    xAxis: d,
    xAxisIds: f
  } = Je(), {
    yAxis: p,
    yAxisIds: h
  } = Qe(), {
    zAxis: g,
    zAxisIds: m
  } = Ru(), y = h.filter((C) => p[C].colorMap !== void 0), b = f.filter((C) => d[C].colorMap !== void 0), S = m.filter((C) => g[C].colorMap !== void 0);
  return y.length === 0 && b.length === 0 && S.length === 0 ? null : /* @__PURE__ */ x.jsxs("defs", {
    children: [y.map((C) => {
      const v = c(C), O = u(C), {
        colorMap: w,
        scale: E,
        colorScale: R,
        reverse: I
      } = p[C];
      return w?.type === "piecewise" ? /* @__PURE__ */ x.jsx(Jp, {
        isReversed: !I,
        scale: E,
        colorMap: w,
        size: a,
        gradientId: v,
        direction: "y"
      }, v) : w?.type === "continuous" ? /* @__PURE__ */ x.jsxs($.Fragment, {
        children: [/* @__PURE__ */ x.jsx(Qp, {
          isReversed: !I,
          scale: E,
          colorScale: R,
          colorMap: w,
          size: a,
          gradientId: v,
          direction: "y"
        }), /* @__PURE__ */ x.jsx(Sl, {
          isReversed: I,
          colorScale: R,
          colorMap: w,
          gradientId: O
        })]
      }, v) : null;
    }), b.map((C) => {
      const v = c(C), O = u(C), {
        colorMap: w,
        scale: E,
        reverse: R,
        colorScale: I
      } = d[C];
      return w?.type === "piecewise" ? /* @__PURE__ */ x.jsx(Jp, {
        isReversed: R,
        scale: E,
        colorMap: w,
        size: l,
        gradientId: v,
        direction: "x"
      }, v) : w?.type === "continuous" ? /* @__PURE__ */ x.jsxs($.Fragment, {
        children: [/* @__PURE__ */ x.jsx(Qp, {
          isReversed: R,
          scale: E,
          colorScale: I,
          colorMap: w,
          size: l,
          gradientId: v,
          direction: "x"
        }), /* @__PURE__ */ x.jsx(Sl, {
          isReversed: R,
          colorScale: I,
          colorMap: w,
          gradientId: O
        })]
      }, v) : null;
    }), S.map((C) => {
      const v = u(C), {
        colorMap: O,
        colorScale: w
      } = g[C];
      return O?.type === "continuous" ? /* @__PURE__ */ x.jsx(Sl, {
        colorScale: w,
        colorMap: O,
        gradientId: v
      }, v) : null;
    })]
  });
}
function W_(e) {
  return Ee("MuiChartsSurface", e);
}
const Y_ = () => Ae({
  root: ["root"]
}, W_);
Se("MuiChartsSurface", ["root"]);
const X_ = ["children", "className", "title", "desc"], K_ = le("svg", {
  name: "MuiChartsSurface",
  slot: "Root"
})(({
  ownerState: e,
  theme: t
}) => ({
  width: e.width ?? "100%",
  height: e.height ?? "100%",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  // This prevents default touch actions when using the svg on mobile devices.
  // For example, prevent page scroll & zoom.
  touchAction: e.hasZoom ? "pan-y" : void 0,
  userSelect: "none",
  gridArea: "chart",
  "&:focus": {
    outline: "none"
    // By default don't show focus on the SVG container
  },
  "&:focus-visible": {
    // Show focus outline on the SVG container only when using keyboard navigation
    outline: `${(t.vars ?? t).palette.text.primary} solid 2px`,
    "&[data-has-focused-item=true]": {
      // But not if the chart has a focused children item
      outline: "none"
    }
  },
  "& [data-focused=true]": {
    outline: `${(t.vars ?? t).palette.text.primary} solid 2px`
  }
})), bo = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = we(), o = ie(i, hS), s = ie(i, mS), a = ie(i, bm), l = ie(i, xm), c = ie(i, ok), u = ie(i, ik), d = ie(i, LE), f = Au(), p = Pn(f, r), h = nt({
    props: t,
    name: "MuiChartsSurface"
  }), {
    children: g,
    className: m,
    title: y,
    desc: b
  } = h, S = oe(h, X_), C = Y_(), v = s > 0 && o > 0;
  return /* @__PURE__ */ x.jsxs(K_, A({
    ownerState: {
      width: a,
      height: l,
      hasZoom: d
    },
    viewBox: `0 0 ${o} ${s}`,
    className: be(C.root, m),
    tabIndex: c ? 0 : void 0,
    "data-has-focused-item": u || void 0
  }, S, {
    ref: p,
    children: [y && /* @__PURE__ */ x.jsx("title", {
      children: y
    }), b && /* @__PURE__ */ x.jsx("desc", {
      children: b
    }), /* @__PURE__ */ x.jsx(G_, {}), v && g]
  }));
});
process.env.NODE_ENV !== "production" && (bo.displayName = "ChartsSurface");
process.env.NODE_ENV !== "production" && (bo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: n.node,
  className: n.string,
  desc: n.string,
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  title: n.string
});
const eh = Se("MuiChartsToolbar", ["root"]), Z_ = (e) => e?.horizontal === "start" ? "start" : e?.horizontal === "end" ? "end" : "center", J_ = (e) => e?.vertical === "top" ? "flex-start" : e?.vertical === "bottom" ? "flex-end" : "center", Q_ = (e, t, r) => e ? '"chart"' : t === "vertical" ? r?.horizontal === "start" ? '"legend chart"' : '"chart legend"' : r?.vertical === "bottom" ? `"chart"
            "legend"` : `"legend"
          "chart"`, ej = (e = !1, t = "horizontal", r = "end", i = void 0) => {
  const o = i ? "auto" : "1fr";
  return t === "horizontal" || e ? o : r === "start" ? `auto ${o}` : `${o} auto`;
}, tj = (e = !1, t = "horizontal", r = "top") => t === "vertical" || e ? "1fr" : r === "bottom" ? "1fr auto" : "auto 1fr", nj = le("div", {
  name: "MuiChartsWrapper",
  slot: "Root",
  shouldForwardProp: (e) => Jo(e) && e !== "extendVertically" && e !== "width"
})(({
  ownerState: e,
  width: t
}) => {
  const r = ej(e.hideLegend, e.legendDirection, e.legendPosition?.horizontal, t), i = tj(e.hideLegend, e.legendDirection, e.legendPosition?.vertical), o = Q_(e.hideLegend, e.legendDirection, e.legendPosition);
  return {
    variants: [{
      props: {
        extendVertically: !0
      },
      style: {
        height: "100%",
        minHeight: 0
      }
    }],
    flex: 1,
    display: "grid",
    gridTemplateColumns: r,
    gridTemplateRows: i,
    gridTemplateAreas: o,
    [`&:has(.${eh.root})`]: {
      // Add a row for toolbar if there is one.
      gridTemplateRows: `auto ${i}`,
      gridTemplateAreas: `"${r.split(" ").map(() => "toolbar").join(" ")}"
        ${o}`
    },
    [`& .${eh.root}`]: {
      gridArea: "toolbar",
      justifySelf: "center"
    },
    justifyContent: "safe center",
    justifyItems: Z_(e.legendPosition),
    alignItems: J_(e.legendPosition)
  };
});
function Fa(e) {
  const {
    children: t,
    sx: r,
    extendVertically: i
  } = e, o = wR(), s = we(), a = ie(s, bm), l = ie(s, xm);
  return /* @__PURE__ */ x.jsx(nj, {
    ref: o,
    ownerState: e,
    sx: r,
    extendVertically: i ?? l === void 0,
    width: a,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Fa.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: n.node,
  /**
   * If `true`, the chart wrapper set `height: 100%`.
   * @default `false` if the `height` prop is set. And `true` otherwise.
   */
  extendVertically: n.bool,
  /**
   * If `true`, the legend is not rendered.
   * @default false
   */
  hideLegend: n.bool,
  /**
   * The direction of the legend.
   * @default 'horizontal'
   */
  legendDirection: n.oneOf(["horizontal", "vertical"]),
  /**
   * The position of the legend.
   * @default { horizontal: 'center', vertical: 'bottom' }
   */
  legendPosition: n.shape({
    horizontal: n.oneOf(["center", "end", "start"]),
    vertical: n.oneOf(["bottom", "middle", "top"])
  }),
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function od() {
  const e = we(), t = ie(e, ya), r = ie(e, ba), i = ie(e, xa);
  return $.useMemo(() => t === void 0 || r === void 0 || i === void 0 ? null : {
    seriesType: t,
    seriesId: r,
    dataIndex: i
  }, [t, r, i]);
}
const Vo = 6;
function rj() {
  const e = Ft(), t = od(), r = co(), {
    xAxis: i,
    xAxisIds: o
  } = Je(), {
    yAxis: s,
    yAxisIds: a
  } = Qe();
  if (t === null || t.seriesType !== "line" || !r)
    return null;
  const l = r?.series[t.seriesId], c = l.xAxisId ?? o[0], u = l.yAxisId ?? a[0];
  return /* @__PURE__ */ x.jsx("rect", {
    fill: "none",
    stroke: (e.vars ?? e).palette.text.primary,
    strokeWidth: 2,
    x: i[c].scale(i[c].data[t.dataIndex]) - Vo,
    y: s[u].scale(l.stackedData[t.dataIndex][1]) - Vo,
    width: 2 * Vo,
    height: 2 * Vo,
    rx: 3,
    ry: 3
  });
}
const sd = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = nt({
    props: t,
    name: "MuiLineChart"
  }), {
    chartsWrapperProps: o,
    chartContainerProps: s,
    gridProps: a,
    clipPathProps: l,
    clipPathGroupProps: c,
    areaPlotProps: u,
    linePlotProps: d,
    markPlotProps: f,
    overlayProps: p,
    chartsAxisProps: h,
    axisHighlightProps: g,
    lineHighlightPlotProps: m,
    legendProps: y,
    children: b
  } = WM(i), {
    chartDataProviderProps: S,
    chartsSurfaceProps: C
  } = Qu(s, r), v = i.slots?.tooltip ?? Da, O = i.slots?.toolbar;
  return /* @__PURE__ */ x.jsx(Na, A({}, S, {
    children: /* @__PURE__ */ x.jsxs(Fa, A({}, o, {
      children: [i.showToolbar && O ? /* @__PURE__ */ x.jsx(O, A({}, i.slotProps?.toolbar)) : null, !i.hideLegend && /* @__PURE__ */ x.jsx(yo, A({}, y)), /* @__PURE__ */ x.jsxs(bo, A({}, C, {
        children: [/* @__PURE__ */ x.jsx(Zu, A({}, a)), /* @__PURE__ */ x.jsxs("g", A({}, c, {
          children: [/* @__PURE__ */ x.jsx(Iy, A({}, u)), /* @__PURE__ */ x.jsx(_y, A({}, d)), /* @__PURE__ */ x.jsx(Ju, A({}, p)), /* @__PURE__ */ x.jsx(Xu, A({}, g))]
        })), /* @__PURE__ */ x.jsx(rj, {}), /* @__PURE__ */ x.jsx(Fu, A({}, h)), /* @__PURE__ */ x.jsx("g", {
          "data-drawing-container": !0,
          children: /* @__PURE__ */ x.jsx(Fy, A({}, f))
        }), /* @__PURE__ */ x.jsx(Mb, A({}, m)), /* @__PURE__ */ x.jsx(Ku, A({}, l)), b]
      })), !i.loading && /* @__PURE__ */ x.jsx(v, A({}, i.slotProps?.tooltip))]
    }))
  }));
});
process.env.NODE_ENV !== "production" && (sd.displayName = "LineChart");
process.env.NODE_ENV !== "production" && (sd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: n.shape({
    current: n.object
  }),
  /**
   * The configuration of axes highlight.
   * @see See {@link https://mui.com/x/react-charts/highlighting/ highlighting docs} for more details.
   * @default { x: 'line' }
   */
  axisHighlight: n.shape({
    x: n.oneOf(["band", "line", "none"]),
    y: n.oneOf(["band", "line", "none"])
  }),
  /**
   * Configuration for the brush interaction.
   */
  brushConfig: n.shape({
    enabled: n.bool,
    preventHighlight: n.bool,
    preventTooltip: n.bool
  }),
  children: n.node,
  className: n.string,
  /**
   * Color palette used to colorize multiple series.
   * @default rainbowSurgePalette
   */
  colors: n.oneOfType([n.arrayOf(n.string), n.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: n.arrayOf(n.object),
  desc: n.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: n.bool,
  /**
   * If `true`, render the line highlight item.
   */
  disableLineItemHighlight: n.bool,
  enableKeyboardNavigation: n.bool,
  /**
   * Options to enable features planned for the next major.
   */
  experimentalFeatures: n.shape({
    preferStrictDomainInLineCharts: n.bool
  }),
  /**
   * Option to display a cartesian grid in the background.
   */
  grid: n.shape({
    horizontal: n.bool,
    vertical: n.bool
  }),
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: n.number,
  /**
   * If `true`, the legend is not rendered.
   */
  hideLegend: n.bool,
  /**
   * The controlled axis highlight.
   * Identified by the axis id, and data index.
   */
  highlightedAxis: n.arrayOf(n.shape({
    axisId: n.oneOfType([n.number, n.string]).isRequired,
    dataIndex: n.number.isRequired
  })),
  /**
   * The highlighted item.
   * Used when the highlight is controlled.
   */
  highlightedItem: n.shape({
    dataIndex: n.number,
    seriesId: n.oneOfType([n.number, n.string]).isRequired
  }),
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: n.string,
  /**
   * If `true`, a loading overlay is displayed.
   * @default false
   */
  loading: n.bool,
  /**
   * Localized text for chart components.
   */
  localeText: n.object,
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   *
   * Accepts a `number` to be used on all sides or an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   */
  margin: n.oneOfType([n.number, n.shape({
    bottom: n.number,
    left: n.number,
    right: n.number,
    top: n.number
  })]),
  /**
   * Callback fired when an area element is clicked.
   */
  onAreaClick: n.func,
  /**
   * The function called for onClick events.
   * The second argument contains information about all line/bar elements at the current mouse position.
   * @param {MouseEvent} event The mouse event recorded on the `<svg/>` element.
   * @param {null | ChartsAxisData} data The data about the clicked axis and items associated with it.
   */
  onAxisClick: n.func,
  /**
   * The callback fired when the highlighted item changes.
   *
   * @param {HighlightItemData | null} highlightedItem  The newly highlighted item.
   */
  onHighlightChange: n.func,
  /**
   * The function called when the pointer position corresponds to a new axis data item.
   * This update can either be caused by a pointer movement, or an axis update.
   * In case of multiple axes, the function is called if at least one axis is updated.
   * The argument contains the identifier for all axes with a `data` property.
   * @param {AxisItemIdentifier[]} axisItems The array of axes item identifiers.
   */
  onHighlightedAxisChange: n.func,
  /**
   * Callback fired when a line element is clicked.
   */
  onLineClick: n.func,
  /**
   * Callback fired when a mark element is clicked.
   */
  onMarkClick: n.func,
  /**
   * The series to display in the line chart.
   * An array of [[LineSeries]] objects.
   */
  series: n.arrayOf(n.object).isRequired,
  /**
   * If true, shows the default chart toolbar.
   * @default false
   */
  showToolbar: n.bool,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  theme: n.oneOf(["dark", "light"]),
  title: n.string,
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: n.number,
  /**
   * The configuration of the x-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  xAxis: n.arrayOf(n.oneOfType([n.shape({
    axis: n.oneOf(["x"]),
    barGapRatio: n.number,
    categoryGapRatio: n.number,
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      colors: n.arrayOf(n.string).isRequired,
      type: n.oneOf(["ordinal"]).isRequired,
      unknownColor: n.string,
      values: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number, n.string]).isRequired)
    }), n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    groups: n.arrayOf(n.shape({
      getValue: n.func.isRequired,
      tickLabelStyle: n.object,
      tickSize: n.number
    })),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["band"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      colors: n.arrayOf(n.string).isRequired,
      type: n.oneOf(["ordinal"]).isRequired,
      unknownColor: n.string,
      values: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number, n.string]).isRequired)
    }), n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    groups: n.arrayOf(n.shape({
      getValue: n.func.isRequired,
      tickLabelStyle: n.object,
      tickSize: n.number
    })),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["point"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["log"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    constant: n.number,
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["symlog"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["pow"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["sqrt"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    min: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["time"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    min: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["utc"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["linear"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  })]).isRequired),
  /**
   * The configuration of the y-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  yAxis: n.arrayOf(n.oneOfType([n.shape({
    axis: n.oneOf(["y"]),
    barGapRatio: n.number,
    categoryGapRatio: n.number,
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      colors: n.arrayOf(n.string).isRequired,
      type: n.oneOf(["ordinal"]).isRequired,
      unknownColor: n.string,
      values: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number, n.string]).isRequired)
    }), n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    groups: n.arrayOf(n.shape({
      getValue: n.func.isRequired,
      tickLabelStyle: n.object,
      tickSize: n.number
    })),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["band"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      colors: n.arrayOf(n.string).isRequired,
      type: n.oneOf(["ordinal"]).isRequired,
      unknownColor: n.string,
      values: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number, n.string]).isRequired)
    }), n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    groups: n.arrayOf(n.shape({
      getValue: n.func.isRequired,
      tickLabelStyle: n.object,
      tickSize: n.number
    })),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["point"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["log"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    constant: n.number,
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["symlog"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["pow"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["sqrt"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    min: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["time"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    min: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["utc"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["linear"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  })]).isRequired)
});
const ij = ({ xAxis: e, series: t, width: r, height: i = 300, title: o, sx: s, rtl: a, rtlTickLabelOffset: l = 20 }) => {
  const c = a ? e.map((u) => ({ ...u, reverse: !0 })) : e;
  return /* @__PURE__ */ x.jsxs(gn, { sx: { p: 2, ...s }, elevation: 2, dir: a ? "rtl" : "ltr", children: [
    o && /* @__PURE__ */ x.jsx(Be, { variant: "h6", gutterBottom: !0, children: o }),
    /* @__PURE__ */ x.jsx(Ie, { sx: { width: "100%", height: i }, children: /* @__PURE__ */ x.jsx(
      sd,
      {
        xAxis: c,
        yAxis: [
          {
            position: a ? "right" : "left",
            tickLabelStyle: a ? { transform: `translate(${l}px, 0)` } : void 0
          }
        ],
        series: t,
        width: r,
        height: i,
        margin: { left: 50, right: 50, top: 20, bottom: 20 },
        skipAnimation: a
      }
    ) })
  ] });
};
ij.propTypes = {
  xAxis: n.array.isRequired,
  series: n.array.isRequired,
  width: n.number,
  height: n.number,
  title: n.string,
  sx: n.object,
  rtl: n.bool,
  rtlTickLabelOffset: n.number
};
function oj(e) {
  return Ee("MuiBarElement", e);
}
const sj = Se("MuiBarElement", ["root", "highlighted", "faded", "series"]), aj = (e) => {
  const {
    classes: t,
    id: r,
    isHighlighted: i,
    isFaded: o
  } = e, s = {
    root: ["root", `series-${r}`, i && "highlighted", o && "faded"]
  };
  return Ae(s, oj, t);
}, lj = ["ownerState", "skipAnimation", "id", "dataIndex", "xOrigin", "yOrigin"];
function cj(e) {
  const {
    ownerState: t
  } = e, r = oe(e, lj), i = hR(e);
  return /* @__PURE__ */ x.jsx("rect", A({}, r, {
    filter: t.isHighlighted ? "brightness(120%)" : void 0,
    opacity: t.isFaded ? 0.3 : 1,
    "data-highlighted": t.isHighlighted || void 0,
    "data-faded": t.isFaded || void 0
  }, i));
}
function uj(e) {
  const t = we();
  return ie(t, rk, e);
}
const dj = ["id", "dataIndex", "classes", "color", "slots", "slotProps", "style", "onClick", "skipAnimation", "layout", "x", "xOrigin", "y", "yOrigin", "width", "height"];
function Vb(e) {
  const {
    id: t,
    dataIndex: r,
    classes: i,
    color: o,
    slots: s,
    slotProps: a,
    style: l,
    onClick: c,
    skipAnimation: u,
    layout: d,
    x: f,
    xOrigin: p,
    y: h,
    yOrigin: g,
    width: m,
    height: y
  } = e, b = oe(e, dj), S = $.useMemo(() => ({
    type: "bar",
    seriesId: t,
    dataIndex: r
  }), [t, r]), C = ui(S), {
    isFaded: v,
    isHighlighted: O
  } = Ea(S), w = uj($.useMemo(() => ({
    seriesType: "bar",
    seriesId: t,
    dataIndex: r
  }), [t, r])), E = {
    id: t,
    dataIndex: r,
    classes: i,
    color: o,
    isFaded: v,
    isHighlighted: O,
    isFocused: w
  }, R = aj(E), I = s?.bar ?? cj, j = Nt({
    elementType: I,
    externalSlotProps: a?.bar,
    externalForwardedProps: b,
    additionalProps: A({}, C, {
      id: t,
      dataIndex: r,
      color: o,
      x: f,
      xOrigin: p,
      y: h,
      yOrigin: g,
      width: m,
      height: y,
      style: l,
      onClick: c,
      cursor: c ? "pointer" : "unset",
      stroke: "none",
      fill: o,
      skipAnimation: u,
      layout: d,
      "data-focused": w || void 0
    }),
    className: R.root,
    ownerState: E
  });
  return /* @__PURE__ */ x.jsx(I, A({}, j));
}
process.env.NODE_ENV !== "production" && (Vb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: n.object,
  dataIndex: n.number.isRequired,
  id: n.oneOfType([n.number, n.string]).isRequired,
  layout: n.oneOf(["horizontal", "vertical"]).isRequired,
  skipAnimation: n.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  xOrigin: n.number.isRequired,
  yOrigin: n.number.isRequired
});
function fj(e, t) {
  const r = me(e.x, t.x), i = me(e.y, t.y), o = me(e.width, t.width), s = me(e.height, t.height), a = me(e.borderRadius, t.borderRadius);
  return (l) => ({
    x: r(l),
    y: i(l),
    width: o(l),
    height: s(l),
    borderRadius: a(l)
  });
}
function pj(e) {
  const t = {
    x: e.layout === "vertical" ? e.x : e.xOrigin,
    y: e.layout === "vertical" ? e.yOrigin : e.y,
    width: e.layout === "vertical" ? e.width : 0,
    height: e.layout === "vertical" ? 0 : e.height,
    borderRadius: e.borderRadius
  };
  return br({
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    borderRadius: e.borderRadius
  }, {
    createInterpolator: fj,
    transformProps: (r) => ({
      d: mj(e.hasNegative, e.hasPositive, e.layout, r.x, r.y, r.width, r.height, e.xOrigin, e.yOrigin, r.borderRadius)
    }),
    applyProps(r, {
      d: i
    }) {
      i && r.setAttribute("d", i);
    },
    initialProps: t,
    skip: e.skipAnimation,
    ref: e.ref
  });
}
function hj(e) {
  const {
    maskId: t,
    x: r,
    y: i,
    width: o,
    height: s,
    skipAnimation: a
  } = e, {
    ref: l,
    d: c
  } = pj({
    layout: e.layout ?? "vertical",
    hasNegative: e.hasNegative,
    hasPositive: e.hasPositive,
    xOrigin: e.xOrigin,
    yOrigin: e.yOrigin,
    x: r,
    y: i,
    width: o,
    height: s,
    borderRadius: e.borderRadius ?? 0,
    skipAnimation: a
  });
  return !e.borderRadius || e.borderRadius <= 0 ? null : /* @__PURE__ */ x.jsx("clipPath", {
    id: t,
    children: /* @__PURE__ */ x.jsx("path", {
      ref: l,
      d: c
    })
  });
}
function mj(e, t, r, i, o, s, a, l, c, u) {
  if (r === "vertical") {
    if (t && e) {
      const f = Math.min(u, s / 2, a / 2);
      return `M${i},${o + a / 2} v${-(a / 2 - f)} a${f},${f} 0 0 1 ${f},${-f} h${s - f * 2} a${f},${f} 0 0 1 ${f},${f} v${a - 2 * f} a${f},${f} 0 0 1 ${-f},${f} h${-(s - f * 2)} a${f},${f} 0 0 1 ${-f},${-f} v${-(a / 2 - f)}`;
    }
    const d = Math.min(u, s / 2);
    if (t)
      return `M${i},${Math.max(c, o + d)} v${Math.min(0, -(c - o - d))} a${d},${d} 0 0 1 ${d},${-d} h${s - d * 2} a${d},${d} 0 0 1 ${d},${d} v${Math.max(0, c - o - d)} Z`;
    if (e)
      return `M${i},${Math.min(c, o + a - d)} v${Math.max(0, a - d)} a${d},${d} 0 0 0 ${d},${d} h${s - d * 2} a${d},${d} 0 0 0 ${d},${-d} v${-Math.max(0, a - d)} Z`;
  }
  if (r === "horizontal") {
    if (t && e) {
      const f = Math.min(u, s / 2, a / 2);
      return `M${i + s / 2},${o} h${s / 2 - f} a${f},${f} 0 0 1 ${f},${f} v${a - f * 2} a${f},${f} 0 0 1 ${-f},${f} h${-(s - 2 * f)} a${f},${f} 0 0 1 ${-f},${-f} v${-(a - f * 2)} a${f},${f} 0 0 1 ${f},${-f} h${s / 2 - f}`;
    }
    const d = Math.min(u, a / 2);
    if (t)
      return `M${Math.min(l, i - d)},${o} h${s} a${d},${d} 0 0 1 ${d},${d} v${a - d * 2} a${d},${d} 0 0 1 ${-d},${d} h${-s} Z`;
    if (e)
      return `M${Math.max(l, i + s + d)},${o} h${-s} a${d},${d} 0 0 0 ${-d},${d} v${a - d * 2} a${d},${d} 0 0 0 ${d},${d} h${s} Z`;
  }
}
function gj(e) {
  return Ee("MuiBarLabel", e);
}
const wl = Se("MuiBarLabel", ["root", "highlighted", "faded", "animate"]), yj = (e) => {
  const {
    classes: t,
    seriesId: r,
    isFaded: i,
    isHighlighted: o,
    skipAnimation: s
  } = e, a = {
    root: ["root", `series-${r}`, o && "highlighted", i && "faded", !s && "animate"]
  };
  return Ae(a, gj, t);
}, bj = (e) => {
  const {
    barLabel: t,
    value: r,
    dataIndex: i,
    seriesId: o,
    height: s,
    width: a
  } = e;
  return t === "value" ? r ? r?.toString() : null : t({
    seriesId: o,
    dataIndex: i,
    value: r
  }, {
    bar: {
      height: s,
      width: a
    }
  });
}, xj = ["seriesId", "dataIndex", "color", "isFaded", "isHighlighted", "classes", "skipAnimation", "layout", "xOrigin", "yOrigin", "placement"], vj = le("text", {
  name: "MuiBarLabel",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`&.${wl.faded}`]: t.faded
  }, {
    [`&.${wl.highlighted}`]: t.highlighted
  }, t.root]
})(({
  theme: e
}) => A({}, e?.typography?.body2, {
  stroke: "none",
  fill: (e.vars || e)?.palette?.text?.primary,
  transition: "opacity 0.2s ease-in, fill 0.2s ease-in",
  pointerEvents: "none",
  opacity: 1,
  [`&.${wl.faded}`]: {
    opacity: 0.3
  }
}));
function Ub(e) {
  const t = nt({
    props: e,
    name: "MuiBarLabel"
  }), r = oe(t, xj), i = gR(t), o = Oj(t), s = Tj(t);
  return /* @__PURE__ */ x.jsx(vj, A({
    textAnchor: o,
    dominantBaseline: s
  }, r, i));
}
function Oj({
  placement: e,
  layout: t,
  xOrigin: r,
  x: i
}) {
  return e === "outside" && t === "horizontal" ? i < r ? "end" : "start" : "middle";
}
function Tj({
  placement: e,
  layout: t,
  yOrigin: r,
  y: i
}) {
  return e === "outside" ? t === "horizontal" ? "central" : i < r ? "auto" : "hanging" : "central";
}
process.env.NODE_ENV !== "production" && (Ub.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: n.object,
  dataIndex: n.number.isRequired,
  /**
   * Height of the bar this label belongs to.
   */
  height: n.number.isRequired,
  isFaded: n.bool.isRequired,
  isHighlighted: n.bool.isRequired,
  layout: n.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The placement of the bar label.
   * It controls whether the label is rendered in the center or outside the bar.
   * @default 'center'
   */
  placement: n.oneOf(["center", "outside"]),
  seriesId: n.oneOfType([n.number, n.string]).isRequired,
  skipAnimation: n.bool.isRequired,
  /**
   * Width of the bar this label belongs to.
   */
  width: n.number.isRequired,
  /**
   * Position in the x-axis of the bar this label belongs to.
   */
  x: n.number.isRequired,
  /**
   * The x-coordinate of the stack this bar label belongs to.
   */
  xOrigin: n.number.isRequired,
  /**
   * Position in the y-axis of the bar this label belongs to.
   */
  y: n.number.isRequired,
  /**
   * The y-coordinate of the stack this bar label belongs to.
   */
  yOrigin: n.number.isRequired
});
const Sj = ["seriesId", "classes", "color", "dataIndex", "barLabel", "slots", "slotProps", "xOrigin", "yOrigin", "x", "y", "width", "height", "value", "skipAnimation", "layout", "barLabelPlacement"], wj = ["ownerState"];
function Hb(e) {
  const {
    seriesId: t,
    classes: r,
    color: i,
    dataIndex: o,
    barLabel: s,
    slots: a,
    slotProps: l,
    xOrigin: c,
    yOrigin: u,
    x: d,
    y: f,
    width: p,
    height: h,
    value: g,
    skipAnimation: m,
    layout: y,
    barLabelPlacement: b
  } = e, S = oe(e, Sj), {
    isFaded: C,
    isHighlighted: v
  } = Ea({
    seriesId: t,
    dataIndex: o
  }), O = {
    seriesId: t,
    classes: r,
    color: i,
    isFaded: C,
    isHighlighted: v,
    dataIndex: o,
    skipAnimation: m,
    layout: y
  }, w = yj(O), E = a?.barLabel ?? Ub, R = Nt({
    elementType: E,
    externalSlotProps: l?.barLabel,
    additionalProps: A({}, S, {
      xOrigin: c,
      yOrigin: u,
      x: d,
      y: f,
      width: p,
      height: h,
      placement: b,
      className: w.root
    }),
    ownerState: O
  }), {
    ownerState: I
  } = R, j = oe(R, wj);
  if (!s)
    return null;
  const _ = bj({
    barLabel: s,
    value: g,
    dataIndex: o,
    seriesId: t,
    height: h,
    width: p
  });
  return _ ? /* @__PURE__ */ x.jsx(E, A({}, j, I, {
    children: _
  })) : null;
}
process.env.NODE_ENV !== "production" && (Hb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If provided, the function will be used to format the label of the bar.
   * It can be set to 'value' to display the current value.
   * @param {BarItem} item The item to format.
   * @param {BarLabelContext} context data about the bar.
   * @returns {string} The formatted label.
   */
  barLabel: n.oneOfType([n.oneOf(["value"]), n.func]),
  classes: n.object,
  color: n.string.isRequired,
  dataIndex: n.number.isRequired,
  /**
   * The height of the bar.
   */
  height: n.number.isRequired,
  seriesId: n.oneOfType([n.number, n.string]).isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The value of the data point.
   */
  value: n.number,
  /**
   * The width of the bar.
   */
  width: n.number.isRequired
});
function Cj(e) {
  return Ee("MuiBar", e);
}
Se("MuiBar", ["root", "series", "seriesLabels"]);
const Gb = (e) => Ae({
  root: ["root"],
  series: ["series"],
  seriesLabels: ["seriesLabels"]
}, Cj, e), Ej = ["processedSeries", "skipAnimation"];
function kj(e) {
  const {
    processedSeries: t,
    skipAnimation: r
  } = e, i = oe(e, Ej), {
    seriesId: o,
    data: s
  } = t, a = Gb(), l = t.barLabel ?? e.barLabel;
  return l ? /* @__PURE__ */ x.jsx("g", {
    className: a.seriesLabels,
    "data-series": o,
    children: s.map(({
      xOrigin: c,
      yOrigin: u,
      x: d,
      y: f,
      dataIndex: p,
      color: h,
      value: g,
      width: m,
      height: y,
      layout: b
    }) => /* @__PURE__ */ x.jsx(Hb, A({
      seriesId: o,
      dataIndex: p,
      value: g,
      color: h,
      xOrigin: c,
      yOrigin: u,
      x: d,
      y: f,
      width: m,
      height: y,
      skipAnimation: r ?? !1,
      layout: b ?? "vertical"
    }, i, {
      barLabel: l,
      barLabelPlacement: t.barLabelPlacement || "center"
    }), p))
  }, o) : null;
}
const Rj = ["skipAnimation", "onItemClick", "borderRadius", "barLabel"], Aj = le("g", {
  name: "MuiBarPlot",
  slot: "Root"
})({
  [`& .${sj.root}`]: {
    transition: "opacity 0.2s ease-in, fill 0.2s ease-in"
  }
});
function Wb(e) {
  const {
    skipAnimation: t,
    onItemClick: r,
    borderRadius: i,
    barLabel: o
  } = e, s = oe(e, Rj), a = Ra(), l = fo(a || t), {
    xAxis: c
  } = Je(), {
    yAxis: u
  } = Qe(), {
    completedData: d,
    masksData: f
  } = PR(gt(), c, u), p = !i || i <= 0, h = Gb();
  return /* @__PURE__ */ x.jsxs(Aj, {
    className: h.root,
    children: [!p && f.map(({
      id: g,
      x: m,
      y,
      xOrigin: b,
      yOrigin: S,
      width: C,
      height: v,
      hasPositive: O,
      hasNegative: w,
      layout: E
    }) => /* @__PURE__ */ x.jsx(hj, {
      maskId: g,
      borderRadius: i,
      hasNegative: w,
      hasPositive: O,
      layout: E,
      x: m,
      y,
      xOrigin: b,
      yOrigin: S,
      width: C,
      height: v,
      skipAnimation: l ?? !1
    }, g)), d.map(({
      seriesId: g,
      data: m
    }) => /* @__PURE__ */ x.jsx("g", {
      "data-series": g,
      className: h.series,
      children: m.map(({
        dataIndex: y,
        color: b,
        maskId: S,
        layout: C,
        x: v,
        xOrigin: O,
        y: w,
        yOrigin: E,
        width: R,
        height: I
      }) => {
        const j = /* @__PURE__ */ x.jsx(Vb, A({
          id: g,
          dataIndex: y,
          color: b,
          skipAnimation: l ?? !1,
          layout: C ?? "vertical",
          x: v,
          xOrigin: O,
          y: w,
          yOrigin: E,
          width: R,
          height: I
        }, s, {
          onClick: r && ((_) => {
            r(_, {
              type: "bar",
              seriesId: g,
              dataIndex: y
            });
          })
        }), y);
        return p ? j : /* @__PURE__ */ x.jsx("g", {
          clipPath: `url(#${S})`,
          children: j
        }, y);
      })
    }, g)), d.map((g) => /* @__PURE__ */ x.jsx(kj, A({
      processedSeries: g,
      skipAnimation: l,
      barLabel: o
    }, s), g.seriesId))]
  });
}
process.env.NODE_ENV !== "production" && (Wb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If provided, the function will be used to format the label of the bar.
   * It can be set to 'value' to display the current value.
   * @param {BarItem} item The item to format.
   * @param {BarLabelContext} context data about the bar.
   * @returns {string} The formatted label.
   */
  barLabel: n.oneOfType([n.oneOf(["value"]), n.func]),
  /**
   * The placement of the bar label.
   * It controls whether the label is rendered inside or outside the bar.
   */
  barLabelPlacement: n.oneOf(["outside", "inside"]),
  /**
   * Defines the border radius of the bar element.
   */
  borderRadius: n.number,
  /**
   * Callback fired when a bar item is clicked.
   * @param {React.MouseEvent<SVGElement, MouseEvent>} event The event source of the callback.
   * @param {BarItemIdentifier} barItemIdentifier The bar item identifier.
   */
  onItemClick: n.func,
  /**
   * If `true`, animations are skipped.
   * @default undefined
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
const Pj = [ai, oi, pr, mr, gr, ii], Ij = ["xAxis", "yAxis", "series", "width", "height", "margin", "colors", "dataset", "sx", "axisHighlight", "grid", "children", "slots", "slotProps", "skipAnimation", "loading", "layout", "onItemClick", "highlightedItem", "onHighlightChange", "borderRadius", "barLabel", "className", "hideLegend", "showToolbar", "brushConfig"], Mj = (e) => {
  const {
    xAxis: t,
    yAxis: r,
    series: i,
    width: o,
    height: s,
    margin: a,
    colors: l,
    dataset: c,
    sx: u,
    axisHighlight: d,
    grid: f,
    children: p,
    slots: h,
    slotProps: g,
    skipAnimation: m,
    loading: y,
    layout: b,
    onItemClick: S,
    highlightedItem: C,
    onHighlightChange: v,
    borderRadius: O,
    barLabel: w,
    className: E,
    brushConfig: R
  } = e, I = oe(e, Ij), _ = `${Qi()}-clip-path`, T = b === "horizontal" || b === void 0 && i.some((Y) => Y.layout === "horizontal"), M = $.useMemo(() => [{
    id: $n,
    scaleType: "band",
    data: Array.from({
      length: Math.max(...i.map((Y) => (Y.data ?? c ?? []).length))
    }, (Y, ee) => ee)
  }], [c, i]), P = $.useMemo(() => [{
    id: Uc,
    scaleType: "band",
    data: Array.from({
      length: Math.max(...i.map((Y) => (Y.data ?? c ?? []).length))
    }, (Y, ee) => ee)
  }], [c, i]), N = $.useMemo(() => i.map((Y) => A({
    type: "bar"
  }, Y, {
    layout: T ? "horizontal" : "vertical"
  })), [T, i]), L = T ? void 0 : M, z = $.useMemo(() => t ? T ? t : t.map((Y) => A({
    scaleType: "band"
  }, Y)) : L, [L, T, t]), H = T ? P : void 0, Z = $.useMemo(() => r ? T ? r.map((Y) => A({
    scaleType: "band"
  }, Y)) : r : H, [H, T, r]), F = A({}, I, {
    series: N,
    width: o,
    height: s,
    margin: a,
    colors: l,
    dataset: c,
    xAxis: z,
    yAxis: Z,
    highlightedItem: C,
    onHighlightChange: v,
    disableAxisListener: g?.tooltip?.trigger !== "axis" && d?.x === "none" && d?.y === "none",
    className: E,
    skipAnimation: m,
    brushConfig: R,
    plugins: Pj
  }), k = {
    onItemClick: S,
    slots: h,
    slotProps: g,
    borderRadius: O,
    barLabel: w
  }, B = {
    vertical: f?.vertical,
    horizontal: f?.horizontal
  }, G = {
    clipPath: `url(#${_})`
  }, W = {
    id: _
  }, X = {
    slots: h,
    slotProps: g,
    loading: y
  }, J = {
    slots: h,
    slotProps: g
  }, Q = A({}, T ? {
    y: "band"
  } : {
    x: "band"
  }, d), te = {
    slots: h,
    slotProps: g
  };
  return {
    chartsWrapperProps: {
      sx: u,
      legendPosition: e.slotProps?.legend?.position,
      legendDirection: e.slotProps?.legend?.direction,
      hideLegend: e.hideLegend ?? !1
    },
    chartContainerProps: F,
    barPlotProps: k,
    gridProps: B,
    clipPathProps: W,
    clipPathGroupProps: G,
    overlayProps: X,
    chartsAxisProps: J,
    axisHighlightProps: Q,
    legendProps: te,
    children: p
  };
}, ad = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = nt({
    props: t,
    name: "MuiBarChart"
  }), {
    chartsWrapperProps: o,
    chartContainerProps: s,
    barPlotProps: a,
    gridProps: l,
    clipPathProps: c,
    clipPathGroupProps: u,
    overlayProps: d,
    chartsAxisProps: f,
    axisHighlightProps: p,
    legendProps: h,
    children: g
  } = Mj(i), {
    chartDataProviderProps: m,
    chartsSurfaceProps: y
  } = Qu(s, r), b = i.slots?.tooltip ?? Da, S = i.slots?.toolbar;
  return /* @__PURE__ */ x.jsx(Na, A({}, m, {
    children: /* @__PURE__ */ x.jsxs(Fa, A({}, o, {
      children: [i.showToolbar && S ? /* @__PURE__ */ x.jsx(S, A({}, i.slotProps?.toolbar)) : null, !i.hideLegend && /* @__PURE__ */ x.jsx(yo, A({}, h)), /* @__PURE__ */ x.jsxs(bo, A({}, y, {
        children: [/* @__PURE__ */ x.jsx(Zu, A({}, l)), /* @__PURE__ */ x.jsxs("g", A({}, u, {
          children: [/* @__PURE__ */ x.jsx(Wb, A({}, a)), /* @__PURE__ */ x.jsx(Ju, A({}, d)), /* @__PURE__ */ x.jsx(Xu, A({}, p))]
        })), /* @__PURE__ */ x.jsx(Fu, A({}, f)), /* @__PURE__ */ x.jsx(Ku, A({}, c)), g]
      })), !i.loading && /* @__PURE__ */ x.jsx(b, A({}, i.slotProps?.tooltip))]
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ad.displayName = "BarChart");
process.env.NODE_ENV !== "production" && (ad.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: n.shape({
    current: n.object
  }),
  /**
   * The configuration of axes highlight.
   * Default is set to 'band' in the bar direction.
   * Depends on `layout` prop.
   * @see See {@link https://mui.com/x/react-charts/highlighting/ highlighting docs} for more details.
   */
  axisHighlight: n.shape({
    x: n.oneOf(["band", "line", "none"]),
    y: n.oneOf(["band", "line", "none"])
  }),
  /**
   * @deprecated Use `barLabel` in the chart series instead.
   * If provided, the function will be used to format the label of the bar.
   * It can be set to 'value' to display the current value.
   * @param {BarItem} item The item to format.
   * @param {BarLabelContext} context data about the bar.
   * @returns {string} The formatted label.
   */
  barLabel: n.oneOfType([n.oneOf(["value"]), n.func]),
  /**
   * Defines the border radius of the bar element.
   */
  borderRadius: n.number,
  /**
   * Configuration for the brush interaction.
   */
  brushConfig: n.shape({
    enabled: n.bool,
    preventHighlight: n.bool,
    preventTooltip: n.bool
  }),
  children: n.node,
  className: n.string,
  /**
   * Color palette used to colorize multiple series.
   * @default rainbowSurgePalette
   */
  colors: n.oneOfType([n.arrayOf(n.string), n.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: n.arrayOf(n.object),
  desc: n.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: n.bool,
  enableKeyboardNavigation: n.bool,
  /**
   * Option to display a cartesian grid in the background.
   */
  grid: n.shape({
    horizontal: n.bool,
    vertical: n.bool
  }),
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: n.number,
  /**
   * If `true`, the legend is not rendered.
   */
  hideLegend: n.bool,
  /**
   * The controlled axis highlight.
   * Identified by the axis id, and data index.
   */
  highlightedAxis: n.arrayOf(n.shape({
    axisId: n.oneOfType([n.number, n.string]).isRequired,
    dataIndex: n.number.isRequired
  })),
  /**
   * The highlighted item.
   * Used when the highlight is controlled.
   */
  highlightedItem: n.shape({
    dataIndex: n.number,
    seriesId: n.oneOfType([n.number, n.string]).isRequired
  }),
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: n.string,
  /**
   * The direction of the bar elements.
   * @default 'vertical'
   */
  layout: n.oneOf(["horizontal", "vertical"]),
  /**
   * If `true`, a loading overlay is displayed.
   * @default false
   */
  loading: n.bool,
  /**
   * Localized text for chart components.
   */
  localeText: n.object,
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   *
   * Accepts a `number` to be used on all sides or an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   */
  margin: n.oneOfType([n.number, n.shape({
    bottom: n.number,
    left: n.number,
    right: n.number,
    top: n.number
  })]),
  /**
   * The function called for onClick events.
   * The second argument contains information about all line/bar elements at the current mouse position.
   * @param {MouseEvent} event The mouse event recorded on the `<svg/>` element.
   * @param {null | ChartsAxisData} data The data about the clicked axis and items associated with it.
   */
  onAxisClick: n.func,
  /**
   * The callback fired when the highlighted item changes.
   *
   * @param {HighlightItemData | null} highlightedItem  The newly highlighted item.
   */
  onHighlightChange: n.func,
  /**
   * The function called when the pointer position corresponds to a new axis data item.
   * This update can either be caused by a pointer movement, or an axis update.
   * In case of multiple axes, the function is called if at least one axis is updated.
   * The argument contains the identifier for all axes with a `data` property.
   * @param {AxisItemIdentifier[]} axisItems The array of axes item identifiers.
   */
  onHighlightedAxisChange: n.func,
  /**
   * Callback fired when a bar item is clicked.
   * @param {React.MouseEvent<SVGElement, MouseEvent>} event The event source of the callback.
   * @param {BarItemIdentifier} barItemIdentifier The bar item identifier.
   */
  onItemClick: n.func,
  /**
   * The series to display in the bar chart.
   * An array of [[BarSeries]] objects.
   */
  series: n.arrayOf(n.object).isRequired,
  /**
   * If true, shows the default chart toolbar.
   * @default false
   */
  showToolbar: n.bool,
  /**
   * If `true`, animations are skipped.
   * If unset or `false`, the animations respects the user's `prefers-reduced-motion` setting.
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  theme: n.oneOf(["dark", "light"]),
  title: n.string,
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: n.number,
  /**
   * The configuration of the x-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  xAxis: n.arrayOf(n.oneOfType([n.shape({
    axis: n.oneOf(["x"]),
    barGapRatio: n.number,
    categoryGapRatio: n.number,
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      colors: n.arrayOf(n.string).isRequired,
      type: n.oneOf(["ordinal"]).isRequired,
      unknownColor: n.string,
      values: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number, n.string]).isRequired)
    }), n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    groups: n.arrayOf(n.shape({
      getValue: n.func.isRequired,
      tickLabelStyle: n.object,
      tickSize: n.number
    })),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["band"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      colors: n.arrayOf(n.string).isRequired,
      type: n.oneOf(["ordinal"]).isRequired,
      unknownColor: n.string,
      values: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number, n.string]).isRequired)
    }), n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    groups: n.arrayOf(n.shape({
      getValue: n.func.isRequired,
      tickLabelStyle: n.object,
      tickSize: n.number
    })),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["point"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["log"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    constant: n.number,
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["symlog"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["pow"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["sqrt"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    min: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["time"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    min: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["utc"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  }), n.shape({
    axis: n.oneOf(["x"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    height: n.number,
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["bottom", "none", "top"]),
    reverse: n.bool,
    scaleType: n.oneOf(["linear"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelMinGap: n.number,
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func
  })]).isRequired),
  /**
   * The configuration of the y-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  yAxis: n.arrayOf(n.oneOfType([n.shape({
    axis: n.oneOf(["y"]),
    barGapRatio: n.number,
    categoryGapRatio: n.number,
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      colors: n.arrayOf(n.string).isRequired,
      type: n.oneOf(["ordinal"]).isRequired,
      unknownColor: n.string,
      values: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number, n.string]).isRequired)
    }), n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    groups: n.arrayOf(n.shape({
      getValue: n.func.isRequired,
      tickLabelStyle: n.object,
      tickSize: n.number
    })),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["band"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      colors: n.arrayOf(n.string).isRequired,
      type: n.oneOf(["ordinal"]).isRequired,
      unknownColor: n.string,
      values: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number, n.string]).isRequired)
    }), n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    groups: n.arrayOf(n.shape({
      getValue: n.func.isRequired,
      tickLabelStyle: n.object,
      tickSize: n.number
    })),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["point"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["log"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    constant: n.number,
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["symlog"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["pow"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["sqrt"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    min: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["time"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    min: n.oneOfType([n.number, n.shape({
      valueOf: n.func.isRequired
    })]),
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["utc"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  }), n.shape({
    axis: n.oneOf(["y"]),
    classes: n.object,
    colorMap: n.oneOfType([n.shape({
      color: n.oneOfType([n.arrayOf(n.string.isRequired), n.func]).isRequired,
      max: n.oneOfType([n.instanceOf(Date), n.number]),
      min: n.oneOfType([n.instanceOf(Date), n.number]),
      type: n.oneOf(["continuous"]).isRequired
    }), n.shape({
      colors: n.arrayOf(n.string).isRequired,
      thresholds: n.arrayOf(n.oneOfType([n.instanceOf(Date), n.number]).isRequired).isRequired,
      type: n.oneOf(["piecewise"]).isRequired
    })]),
    data: n.array,
    dataKey: n.string,
    disableLine: n.bool,
    disableTicks: n.bool,
    domainLimit: n.oneOfType([n.oneOf(["nice", "strict"]), n.func]),
    hideTooltip: n.bool,
    id: n.oneOfType([n.number, n.string]),
    ignoreTooltip: n.bool,
    label: n.string,
    labelStyle: n.object,
    max: n.number,
    min: n.number,
    offset: n.number,
    position: n.oneOf(["left", "none", "right"]),
    reverse: n.bool,
    scaleType: n.oneOf(["linear"]),
    slotProps: n.object,
    slots: n.object,
    sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
    tickInterval: n.oneOfType([n.oneOf(["auto"]), n.array, n.func]),
    tickLabelInterval: n.oneOfType([n.oneOf(["auto"]), n.func]),
    tickLabelPlacement: n.oneOf(["middle", "tick"]),
    tickLabelStyle: n.object,
    tickMaxStep: n.number,
    tickMinStep: n.number,
    tickNumber: n.number,
    tickPlacement: n.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: n.number,
    valueFormatter: n.func,
    width: n.number
  })]).isRequired)
});
const _j = ({ xAxis: e, series: t, width: r, height: i = 300, title: o, sx: s, rtl: a, rtlTickLabelOffset: l = 20 }) => {
  const c = a ? e.map((u) => ({ ...u, reverse: !0 })) : e;
  return /* @__PURE__ */ x.jsxs(gn, { sx: { p: 2, ...s }, elevation: 2, dir: a ? "rtl" : "ltr", children: [
    o && /* @__PURE__ */ x.jsx(Be, { variant: "h6", gutterBottom: !0, children: o }),
    /* @__PURE__ */ x.jsx(Ie, { sx: { width: "100%", height: i }, children: /* @__PURE__ */ x.jsx(
      ad,
      {
        xAxis: c,
        yAxis: [
          {
            position: a ? "right" : "left",
            tickLabelStyle: a ? { transform: `translate(${l}px, 0)` } : void 0
          }
        ],
        series: t,
        width: r,
        height: i,
        margin: { left: 50, right: 50, top: 20, bottom: 20 }
      }
    ) })
  ] });
};
_j.propTypes = {
  xAxis: n.array.isRequired,
  series: n.array.isRequired,
  width: n.number,
  height: n.number,
  title: n.string,
  sx: n.object,
  rtl: n.bool,
  rtlTickLabelOffset: n.number
};
const jj = ["className", "classes", "color", "dataIndex", "id", "isFaded", "isHighlighted", "isFocused", "onClick", "cornerRadius", "startAngle", "endAngle", "innerRadius", "outerRadius", "paddingAngle", "skipAnimation", "stroke", "skipInteraction"];
function $j(e) {
  return Ee("MuiPieArc", e);
}
const Dj = Se("MuiPieArc", ["root", "highlighted", "faded", "series", "focusIndicator"]), Lj = (e) => {
  const {
    classes: t,
    id: r,
    isFaded: i,
    isHighlighted: o,
    dataIndex: s
  } = e, a = {
    root: ["root", `series-${r}`, `data-index-${s}`, o && "highlighted", i && "faded"]
  };
  return Ae(a, $j, t);
}, Nj = le("path", {
  name: "MuiPieArc",
  slot: "Root",
  overridesResolver: (e, t) => t.arc
  // FIXME: Inconsistent naming with slot
})({
  transitionProperty: "opacity, fill, filter",
  transitionDuration: `${ci}ms`,
  transitionTimingFunction: uo
}), ld = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const {
    className: i,
    classes: o,
    color: s,
    dataIndex: a,
    id: l,
    isFaded: c,
    isHighlighted: u,
    isFocused: d,
    onClick: f,
    cornerRadius: p,
    startAngle: h,
    endAngle: g,
    innerRadius: m,
    outerRadius: y,
    paddingAngle: b,
    skipAnimation: S,
    stroke: C,
    skipInteraction: v
  } = t, O = oe(t, jj), w = Ft(), E = C ?? (w.vars || w).palette.background.paper, R = {
    id: l,
    dataIndex: a,
    classes: o,
    color: s,
    isFaded: c,
    isHighlighted: u,
    isFocused: d
  }, I = Lj(R), j = ui({
    type: "pie",
    seriesId: l,
    dataIndex: a
  }, v), _ = OR({
    cornerRadius: p,
    startAngle: h,
    endAngle: g,
    innerRadius: m,
    outerRadius: y,
    paddingAngle: b,
    skipAnimation: S,
    ref: r
  });
  return /* @__PURE__ */ x.jsx(Nj, A({
    onClick: f,
    cursor: f ? "pointer" : "unset",
    ownerState: R,
    className: be(I.root, i),
    fill: R.color,
    opacity: R.isFaded ? 0.3 : 1,
    filter: R.isHighlighted ? "brightness(120%)" : "none",
    stroke: E,
    strokeWidth: 1,
    strokeLinejoin: "round",
    "data-highlighted": R.isHighlighted || void 0,
    "data-faded": R.isFaded || void 0
  }, O, j, _));
});
process.env.NODE_ENV !== "production" && (ld.displayName = "PieArc");
process.env.NODE_ENV !== "production" && (ld.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: n.object,
  cornerRadius: n.number.isRequired,
  dataIndex: n.number.isRequired,
  endAngle: n.number.isRequired,
  id: n.oneOfType([n.number, n.string]).isRequired,
  innerRadius: n.number.isRequired,
  isFaded: n.bool.isRequired,
  isFocused: n.bool.isRequired,
  isHighlighted: n.bool.isRequired,
  outerRadius: n.number.isRequired,
  paddingAngle: n.number.isRequired,
  /**
   * If `true`, the animation is disabled.
   */
  skipAnimation: n.bool,
  /**
   * If `true`, the default event handlers are disabled.
   * Those are used, for example, to display a tooltip or highlight the arc on hover.
   */
  skipInteraction: n.bool,
  startAngle: n.number.isRequired
});
function Fj() {
  const e = od();
  return (t) => e !== null && e.seriesType === t.seriesType && e.seriesId === t.seriesId && e.dataIndex === t.dataIndex;
}
function Yb(e) {
  const {
    id: t,
    data: r,
    faded: i,
    highlighted: o,
    paddingAngle: s = 0,
    innerRadius: a = 0,
    arcLabelRadius: l,
    outerRadius: c,
    cornerRadius: u = 0
  } = e, {
    isFaded: d,
    isHighlighted: f
  } = yy(), p = Fj();
  return $.useMemo(() => r.map((g, m) => {
    const y = {
      seriesId: t,
      dataIndex: m
    }, b = f(y), S = !b && d(y), C = p({
      seriesType: "pie",
      seriesId: t,
      dataIndex: m
    }), v = A({
      additionalRadius: 0
    }, S && i || b && o || {}), O = Math.max(0, ln(v.paddingAngle ?? s)), w = Math.max(0, v.innerRadius ?? a), E = Math.max(0, v.outerRadius ?? c + v.additionalRadius), R = v.cornerRadius ?? u, I = v.arcLabelRadius ?? l ?? (w + E) / 2;
    return A({}, g, v, {
      dataIndex: m,
      isFaded: S,
      isHighlighted: b,
      isFocused: C,
      paddingAngle: O,
      innerRadius: w,
      outerRadius: E,
      cornerRadius: R,
      arcLabelRadius: I
    });
  }), [u, a, c, s, l, r, i, o, d, f, p, t]);
}
const qj = ["slots", "slotProps", "innerRadius", "outerRadius", "cornerRadius", "paddingAngle", "id", "highlighted", "faded", "data", "onItemClick", "skipAnimation"];
function Xb(e) {
  const {
    slots: t,
    slotProps: r,
    innerRadius: i = 0,
    outerRadius: o,
    cornerRadius: s = 0,
    paddingAngle: a = 0,
    id: l,
    highlighted: c,
    faded: u = {
      additionalRadius: -5
    },
    data: d,
    onItemClick: f,
    skipAnimation: p
  } = e, h = oe(e, qj), g = Ft(), m = Yb({
    innerRadius: i,
    outerRadius: o,
    cornerRadius: s,
    paddingAngle: a,
    id: l,
    highlighted: c,
    faded: u,
    data: d
  }), {
    dataIndex: y,
    seriesId: b,
    seriesType: S
  } = od() ?? {}, C = y !== void 0 && b === l && S === "pie" ? m[y] : null;
  if (d.length === 0)
    return null;
  const v = t?.pieArc ?? ld;
  return /* @__PURE__ */ x.jsxs("g", A({}, h, {
    children: [m.map((O, w) => /* @__PURE__ */ x.jsx(v, A({
      startAngle: O.startAngle,
      endAngle: O.endAngle,
      paddingAngle: O.paddingAngle,
      innerRadius: O.innerRadius,
      outerRadius: O.outerRadius,
      cornerRadius: O.cornerRadius,
      skipAnimation: p ?? !1,
      id: l,
      color: O.color,
      dataIndex: w,
      isFaded: O.isFaded,
      isHighlighted: O.isHighlighted,
      isFocused: O.isFocused,
      onClick: f && ((E) => {
        f(E, {
          type: "pie",
          seriesId: l,
          dataIndex: w
        }, O);
      })
    }, r?.pieArc), O.dataIndex)), C && /* @__PURE__ */ x.jsx(v, {
      startAngle: C.startAngle,
      endAngle: C.endAngle,
      paddingAngle: C.paddingAngle,
      innerRadius: C.innerRadius,
      color: "transparent",
      pointerEvents: "none",
      skipInteraction: !0,
      outerRadius: C.outerRadius,
      cornerRadius: C.cornerRadius,
      skipAnimation: !0,
      stroke: (g.vars ?? g).palette.text.primary,
      id: l,
      className: Dj.focusIndicator,
      dataIndex: C.dataIndex,
      isFaded: !1,
      isHighlighted: !1,
      isFocused: !1,
      strokeWidth: 3
    })]
  }));
}
process.env.NODE_ENV !== "production" && (Xb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The radius between circle center and the arc label in px.
   * @default (innerRadius - outerRadius) / 2
   */
  arcLabelRadius: n.number,
  /**
   * The radius applied to arc corners (similar to border radius).
   * @default 0
   */
  cornerRadius: n.number,
  data: n.arrayOf(n.shape({
    color: n.string.isRequired,
    endAngle: n.number.isRequired,
    formattedValue: n.string.isRequired,
    id: n.oneOfType([n.number, n.string]),
    index: n.number.isRequired,
    label: n.oneOfType([n.func, n.string]),
    labelMarkType: n.oneOfType([n.oneOf(["circle", "line", "square"]), n.func]),
    padAngle: n.number.isRequired,
    startAngle: n.number.isRequired,
    value: n.number.isRequired
  })).isRequired,
  /**
   * Override the arc attributes when it is faded.
   * @default { additionalRadius: -5 }
   */
  faded: n.shape({
    additionalRadius: n.number,
    arcLabelRadius: n.number,
    color: n.string,
    cornerRadius: n.number,
    innerRadius: n.number,
    outerRadius: n.number,
    paddingAngle: n.number
  }),
  /**
   * Override the arc attributes when it is highlighted.
   */
  highlighted: n.shape({
    additionalRadius: n.number,
    arcLabelRadius: n.number,
    color: n.string,
    cornerRadius: n.number,
    innerRadius: n.number,
    outerRadius: n.number,
    paddingAngle: n.number
  }),
  /**
   * The id of this series.
   */
  id: n.oneOfType([n.number, n.string]).isRequired,
  /**
   * The radius between circle center and the beginning of the arc.
   * @default 0
   */
  innerRadius: n.number,
  /**
   * Callback fired when a pie item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {PieItemIdentifier} pieItemIdentifier The pie item identifier.
   * @param {DefaultizedPieValueType} item The pie item.
   */
  onItemClick: n.func,
  /**
   * The radius between circle center and the end of the arc.
   */
  outerRadius: n.number.isRequired,
  /**
   * The padding angle (deg) between two arcs.
   * @default 0
   */
  paddingAngle: n.number,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
const zj = ["id", "classes", "color", "startAngle", "endAngle", "paddingAngle", "arcLabelRadius", "innerRadius", "outerRadius", "cornerRadius", "formattedArcLabel", "isHighlighted", "isFaded", "style", "skipAnimation"];
function Bj(e) {
  return Ee("MuiPieArcLabel", e);
}
const Vj = Se("MuiPieArcLabel", ["root", "highlighted", "faded", "animate", "series"]), Uj = (e) => {
  const {
    classes: t,
    id: r,
    isFaded: i,
    isHighlighted: o,
    skipAnimation: s
  } = e, a = {
    root: ["root", `series-${r}`, o && "highlighted", i && "faded", !s && "animate"]
  };
  return Ae(a, Bj, t);
}, Hj = le("text", {
  name: "MuiPieArcLabel",
  slot: "Root"
})(({
  theme: e
}) => ({
  fill: (e.vars || e).palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "middle",
  pointerEvents: "none",
  animationName: "animate-opacity",
  animationDuration: "0s",
  animationTimingFunction: uo,
  [`&.${Vj.animate}`]: {
    animationDuration: `${ci}ms`
  },
  "@keyframes animate-opacity": {
    from: {
      opacity: 0
    }
  }
})), cd = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const {
    id: i,
    classes: o,
    color: s,
    startAngle: a,
    endAngle: l,
    paddingAngle: c,
    arcLabelRadius: u,
    cornerRadius: d,
    formattedArcLabel: f,
    isHighlighted: p,
    isFaded: h,
    skipAnimation: g
  } = t, m = oe(t, zj), b = Uj({
    id: i,
    classes: o,
    isFaded: h,
    isHighlighted: p,
    skipAnimation: g
  }), S = SR({
    cornerRadius: d,
    startAngle: a,
    endAngle: l,
    innerRadius: u,
    outerRadius: u,
    paddingAngle: c,
    skipAnimation: g,
    ref: r
  });
  return /* @__PURE__ */ x.jsx(Hj, A({
    className: b.root
  }, m, S, {
    children: f
  }));
});
process.env.NODE_ENV !== "production" && (cd.displayName = "PieArcLabel");
process.env.NODE_ENV !== "production" && (cd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  arcLabelRadius: n.number.isRequired,
  classes: n.object,
  color: n.string.isRequired,
  cornerRadius: n.number.isRequired,
  endAngle: n.number.isRequired,
  formattedArcLabel: n.string,
  id: n.oneOfType([n.number, n.string]).isRequired,
  innerRadius: n.number.isRequired,
  isFaded: n.bool.isRequired,
  isHighlighted: n.bool.isRequired,
  outerRadius: n.number.isRequired,
  paddingAngle: n.number.isRequired,
  skipAnimation: n.bool.isRequired,
  startAngle: n.number.isRequired
});
const Gj = ["arcLabel", "arcLabelMinAngle", "arcLabelRadius", "cornerRadius", "data", "faded", "highlighted", "id", "innerRadius", "outerRadius", "paddingAngle", "skipAnimation", "slotProps", "slots"], Wj = 180 / Math.PI;
function Yj(e, t, r) {
  if (!e || (r.endAngle - r.startAngle) * Wj < t)
    return null;
  switch (e) {
    case "label":
      return xt(r.label, "arc");
    case "value":
      return r.value?.toString();
    case "formattedValue":
      return r.formattedValue;
    default:
      return e(A({}, r, {
        label: xt(r.label, "arc")
      }));
  }
}
function Kb(e) {
  const {
    arcLabel: t,
    arcLabelMinAngle: r = 0,
    arcLabelRadius: i,
    cornerRadius: o = 0,
    data: s,
    faded: a = {
      additionalRadius: -5
    },
    highlighted: l,
    id: c,
    innerRadius: u,
    outerRadius: d,
    paddingAngle: f = 0,
    skipAnimation: p,
    slotProps: h,
    slots: g
  } = e, m = oe(e, Gj), y = Yb({
    innerRadius: u,
    outerRadius: d,
    arcLabelRadius: i,
    cornerRadius: o,
    paddingAngle: f,
    id: c,
    highlighted: l,
    faded: a,
    data: s
  });
  if (s.length === 0)
    return null;
  const b = g?.pieArcLabel ?? cd;
  return /* @__PURE__ */ x.jsx("g", A({}, m, {
    children: y.map((S) => /* @__PURE__ */ x.jsx(b, A({
      startAngle: S.startAngle,
      endAngle: S.endAngle,
      paddingAngle: S.paddingAngle,
      innerRadius: S.innerRadius,
      outerRadius: S.outerRadius,
      arcLabelRadius: S.arcLabelRadius,
      cornerRadius: S.cornerRadius,
      id: c,
      color: S.color,
      isFaded: S.isFaded,
      isHighlighted: S.isHighlighted,
      formattedArcLabel: Yj(t, r, S),
      skipAnimation: p ?? !1
    }, h?.pieArcLabel), S.id ?? S.dataIndex))
  }));
}
process.env.NODE_ENV !== "production" && (Kb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The label displayed into the arc.
   */
  arcLabel: n.oneOfType([n.oneOf(["formattedValue", "label", "value"]), n.func]),
  /**
   * The minimal angle required to display the arc label.
   * @default 0
   */
  arcLabelMinAngle: n.number,
  /**
   * The radius between circle center and the arc label in px.
   * @default (innerRadius - outerRadius) / 2
   */
  arcLabelRadius: n.number,
  /**
   * The radius applied to arc corners (similar to border radius).
   * @default 0
   */
  cornerRadius: n.number,
  data: n.arrayOf(n.shape({
    color: n.string.isRequired,
    endAngle: n.number.isRequired,
    formattedValue: n.string.isRequired,
    id: n.oneOfType([n.number, n.string]),
    index: n.number.isRequired,
    label: n.oneOfType([n.func, n.string]),
    labelMarkType: n.oneOfType([n.oneOf(["circle", "line", "square"]), n.func]),
    padAngle: n.number.isRequired,
    startAngle: n.number.isRequired,
    value: n.number.isRequired
  })).isRequired,
  /**
   * Override the arc attributes when it is faded.
   * @default { additionalRadius: -5 }
   */
  faded: n.shape({
    additionalRadius: n.number,
    arcLabelRadius: n.number,
    color: n.string,
    cornerRadius: n.number,
    innerRadius: n.number,
    outerRadius: n.number,
    paddingAngle: n.number
  }),
  /**
   * Override the arc attributes when it is highlighted.
   */
  highlighted: n.shape({
    additionalRadius: n.number,
    arcLabelRadius: n.number,
    color: n.string,
    cornerRadius: n.number,
    innerRadius: n.number,
    outerRadius: n.number,
    paddingAngle: n.number
  }),
  /**
   * The id of this series.
   */
  id: n.oneOfType([n.number, n.string]).isRequired,
  /**
   * The radius between circle center and the beginning of the arc.
   * @default 0
   */
  innerRadius: n.number,
  /**
   * The radius between circle center and the end of the arc.
   */
  outerRadius: n.number.isRequired,
  /**
   * The padding angle (deg) between two arcs.
   * @default 0
   */
  paddingAngle: n.number,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
function Xj(e) {
  return Ee("MuiPieChart", e);
}
Se("MuiPieChart", ["root", "series", "seriesLabels"]);
const Kj = (e) => Ae({
  root: ["root"],
  series: ["series"],
  seriesLabels: ["seriesLabels"]
}, Xj, e);
function Zb(e) {
  const {
    skipAnimation: t,
    slots: r,
    slotProps: i,
    onItemClick: o
  } = e, s = F1(), {
    left: a,
    top: l,
    width: c,
    height: u
  } = gt(), d = fo(t), f = Kj();
  if (s === void 0)
    return null;
  const {
    series: p,
    seriesOrder: h
  } = s;
  return /* @__PURE__ */ x.jsxs("g", {
    children: [h.map((g) => {
      const {
        innerRadius: m,
        outerRadius: y,
        cornerRadius: b,
        paddingAngle: S,
        data: C,
        cx: v,
        cy: O,
        highlighted: w,
        faded: E
      } = p[g], {
        cx: R,
        cy: I,
        availableRadius: j
      } = sc({
        cx: v,
        cy: O
      }, {
        width: c,
        height: u
      }), _ = rn(y ?? j, j), T = rn(m ?? 0, j);
      return /* @__PURE__ */ x.jsx("g", {
        className: f.series,
        transform: `translate(${a + R}, ${l + I})`,
        "data-series": g,
        children: /* @__PURE__ */ x.jsx(Xb, {
          innerRadius: T,
          outerRadius: _,
          cornerRadius: b,
          paddingAngle: S,
          id: g,
          data: C,
          skipAnimation: d,
          highlighted: w,
          faded: E,
          onItemClick: o,
          slots: r,
          slotProps: i
        })
      }, g);
    }), h.map((g) => {
      const {
        innerRadius: m,
        outerRadius: y,
        arcLabelRadius: b,
        cornerRadius: S,
        paddingAngle: C,
        arcLabel: v,
        arcLabelMinAngle: O,
        data: w,
        cx: E,
        cy: R
      } = p[g], {
        cx: I,
        cy: j,
        availableRadius: _
      } = sc({
        cx: E,
        cy: R
      }, {
        width: c,
        height: u
      }), T = rn(y ?? _, _), M = rn(m ?? 0, _), P = b === void 0 ? (T + M) / 2 : rn(b, _);
      return /* @__PURE__ */ x.jsx("g", {
        className: f.seriesLabels,
        transform: `translate(${a + I}, ${l + j})`,
        "data-series": g,
        children: /* @__PURE__ */ x.jsx(Kb, {
          innerRadius: M,
          outerRadius: T ?? _,
          arcLabelRadius: P,
          cornerRadius: S,
          paddingAngle: C,
          id: g,
          data: w,
          skipAnimation: d,
          arcLabel: v,
          arcLabelMinAngle: O,
          slots: r,
          slotProps: i
        })
      }, g);
    })]
  });
}
process.env.NODE_ENV !== "production" && (Zb.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a pie item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {PieItemIdentifier} pieItemIdentifier The pie item identifier.
   * @param {DefaultizedPieValueType} item The pie item.
   */
  onItemClick: n.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object
});
const Zj = [pr, gr, ii], Jj = ["series", "width", "height", "margin", "colors", "sx", "skipAnimation", "hideLegend", "children", "slots", "slotProps", "onItemClick", "loading", "highlightedItem", "onHighlightChange", "className", "showToolbar"], ud = /* @__PURE__ */ $.forwardRef(function(t, r) {
  const i = nt({
    props: t,
    name: "MuiPieChart"
  }), {
    series: o,
    width: s,
    height: a,
    margin: l,
    colors: c,
    sx: u,
    skipAnimation: d,
    hideLegend: f,
    children: p,
    slots: h,
    slotProps: g,
    onItemClick: m,
    loading: y,
    highlightedItem: b,
    onHighlightChange: S,
    className: C,
    showToolbar: v
  } = i, O = oe(i, Jj), w = vm(l, GS), {
    chartDataProviderProps: E,
    chartsSurfaceProps: R
  } = Qu(A({}, O, {
    series: o.map((_) => A({
      type: "pie"
    }, _)),
    width: s,
    height: a,
    margin: w,
    colors: c,
    highlightedItem: b,
    onHighlightChange: S,
    className: C,
    skipAnimation: d,
    plugins: Zj
  }), r), I = h?.tooltip ?? Da, j = i.slots?.toolbar;
  return /* @__PURE__ */ x.jsx(Na, A({}, E, {
    children: /* @__PURE__ */ x.jsxs(Fa, {
      legendPosition: i.slotProps?.legend?.position,
      legendDirection: i.slotProps?.legend?.direction ?? "vertical",
      sx: u,
      hideLegend: f ?? !1,
      children: [v && j ? /* @__PURE__ */ x.jsx(j, A({}, i.slotProps?.toolbar)) : null, !f && /* @__PURE__ */ x.jsx(yo, {
        direction: i.slotProps?.legend?.direction ?? "vertical",
        slots: h,
        slotProps: g
      }), /* @__PURE__ */ x.jsxs(bo, A({}, R, {
        children: [/* @__PURE__ */ x.jsx(Zb, {
          slots: h,
          slotProps: g,
          onItemClick: m
        }), /* @__PURE__ */ x.jsx(Ju, {
          loading: y,
          slots: h,
          slotProps: g
        }), p]
      })), !y && /* @__PURE__ */ x.jsx(I, A({
        trigger: "item"
      }, g?.tooltip))]
    })
  }));
});
process.env.NODE_ENV !== "production" && (ud.displayName = "PieChart");
process.env.NODE_ENV !== "production" && (ud.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: n.shape({
    current: n.object
  }),
  children: n.node,
  className: n.string,
  /**
   * Color palette used to colorize multiple series.
   * @default rainbowSurgePalette
   */
  colors: n.oneOfType([n.arrayOf(n.string), n.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: n.arrayOf(n.object),
  desc: n.string,
  enableKeyboardNavigation: n.bool,
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: n.number,
  /**
   * If `true`, the legend is not rendered.
   */
  hideLegend: n.bool,
  /**
   * The highlighted item.
   * Used when the highlight is controlled.
   */
  highlightedItem: n.shape({
    dataIndex: n.number,
    seriesId: n.oneOfType([n.number, n.string]).isRequired
  }),
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: n.string,
  /**
   * If `true`, a loading overlay is displayed.
   * @default false
   */
  loading: n.bool,
  /**
   * Localized text for chart components.
   */
  localeText: n.object,
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   *
   * Accepts a `number` to be used on all sides or an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   */
  margin: n.oneOfType([n.number, n.shape({
    bottom: n.number,
    left: n.number,
    right: n.number,
    top: n.number
  })]),
  /**
   * The callback fired when the highlighted item changes.
   *
   * @param {HighlightItemData | null} highlightedItem  The newly highlighted item.
   */
  onHighlightChange: n.func,
  /**
   * Callback fired when a pie arc is clicked.
   */
  onItemClick: n.func,
  /**
   * The series to display in the pie chart.
   * An array of [[PieSeries]] objects.
   */
  series: n.arrayOf(n.object).isRequired,
  /**
   * If true, shows the default chart toolbar.
   * @default false
   */
  showToolbar: n.bool,
  /**
   * If `true`, animations are skipped.
   * If unset or `false`, the animations respects the user's `prefers-reduced-motion` setting.
   */
  skipAnimation: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  theme: n.oneOf(["dark", "light"]),
  title: n.string,
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: n.number
});
const Qj = ({ series: e, width: t, height: r = 300, title: i, sx: o, rtl: s }) => /* @__PURE__ */ x.jsxs(gn, { sx: { p: 6, ...o }, elevation: 2, dir: s ? "rtl" : "ltr", children: [
  i && /* @__PURE__ */ x.jsx(Be, { variant: "h6", gutterBottom: !0, children: i }),
  /* @__PURE__ */ x.jsx(Ie, { sx: { width: "100%", height: r, display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ x.jsx(
    ud,
    {
      series: e,
      width: t,
      height: r,
      slotProps: {
        legend: {
          direction: "row",
          position: { vertical: "bottom", horizontal: "middle" }
        }
      }
    }
  ) })
] });
Qj.propTypes = {
  series: n.array.isRequired,
  width: n.number,
  height: n.number,
  title: n.string,
  sx: n.object,
  rtl: n.bool
};
const e$ = ({ children: e, spacing: t = 2, sx: r }) => /* @__PURE__ */ x.jsx(ir, { container: !0, spacing: t, sx: r, children: e });
e$.propTypes = {
  children: n.node,
  spacing: n.number,
  sx: n.object
};
var t$ = Bc();
const Jb = 0, Qb = 1, ex = 2, th = 3;
var nh = Object.prototype.hasOwnProperty;
function xc(e, t) {
  var r, i;
  if (e === t) return !0;
  if (e && t && (r = e.constructor) === t.constructor) {
    if (r === Date) return e.getTime() === t.getTime();
    if (r === RegExp) return e.toString() === t.toString();
    if (r === Array) {
      if ((i = e.length) === t.length)
        for (; i-- && xc(e[i], t[i]); ) ;
      return i === -1;
    }
    if (!r || typeof e == "object") {
      i = 0;
      for (r in e)
        if (nh.call(e, r) && ++i && !nh.call(t, r) || !(r in t) || !xc(e[r], t[r])) return !1;
      return Object.keys(t).length === i;
    }
  }
  return e !== e && t !== t;
}
const on = /* @__PURE__ */ new WeakMap(), Sn = () => {
}, Ke = (
  /*#__NOINLINE__*/
  Sn()
), vc = Object, fe = (e) => e === Ke, Gt = (e) => typeof e == "function", Mn = (e, t) => ({
  ...e,
  ...t
}), tx = (e) => Gt(e.then), Cl = {}, Uo = {}, dd = "undefined", xo = typeof window != dd, Oc = typeof document != dd, n$ = xo && "Deno" in window, r$ = () => xo && typeof window.requestAnimationFrame != dd, nx = (e, t) => {
  const r = on.get(e);
  return [
    // Getter
    () => !fe(t) && e.get(t) || Cl,
    // Setter
    (i) => {
      if (!fe(t)) {
        const o = e.get(t);
        t in Uo || (Uo[t] = o), r[5](t, Mn(o, i), o || Cl);
      }
    },
    // Subscriber
    r[6],
    // Get server cache snapshot
    () => !fe(t) && t in Uo ? Uo[t] : !fe(t) && e.get(t) || Cl
  ];
};
let Tc = !0;
const i$ = () => Tc, [Sc, wc] = xo && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  Sn,
  Sn
], o$ = () => {
  const e = Oc && document.visibilityState;
  return fe(e) || e !== "hidden";
}, s$ = (e) => (Oc && document.addEventListener("visibilitychange", e), Sc("focus", e), () => {
  Oc && document.removeEventListener("visibilitychange", e), wc("focus", e);
}), a$ = (e) => {
  const t = () => {
    Tc = !0, e();
  }, r = () => {
    Tc = !1;
  };
  return Sc("online", t), Sc("offline", r), () => {
    wc("online", t), wc("offline", r);
  };
}, l$ = {
  isOnline: i$,
  isVisible: o$
}, c$ = {
  initFocus: s$,
  initReconnect: a$
}, rh = !lt.useId, Wi = !xo || n$, u$ = (e) => r$() ? window.requestAnimationFrame(e) : setTimeout(e, 1), El = Wi ? ut : Vx, kl = typeof navigator < "u" && navigator.connection, ih = !Wi && kl && ([
  "slow-2g",
  "2g"
].includes(kl.effectiveType) || kl.saveData), Ho = /* @__PURE__ */ new WeakMap(), d$ = (e) => vc.prototype.toString.call(e), Rl = (e, t) => e === `[object ${t}]`;
let f$ = 0;
const Cc = (e) => {
  const t = typeof e, r = d$(e), i = Rl(r, "Date"), o = Rl(r, "RegExp"), s = Rl(r, "Object");
  let a, l;
  if (vc(e) === e && !i && !o) {
    if (a = Ho.get(e), a) return a;
    if (a = ++f$ + "~", Ho.set(e, a), Array.isArray(e)) {
      for (a = "@", l = 0; l < e.length; l++)
        a += Cc(e[l]) + ",";
      Ho.set(e, a);
    }
    if (s) {
      a = "#";
      const c = vc.keys(e).sort();
      for (; !fe(l = c.pop()); )
        fe(e[l]) || (a += l + ":" + Cc(e[l]) + ",");
      Ho.set(e, a);
    }
  } else
    a = i ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return a;
}, fd = (e) => {
  if (Gt(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? Cc(e) : "", [
    e,
    t
  ];
};
let p$ = 0;
const Ec = () => ++p$;
async function rx(...e) {
  const [t, r, i, o] = e, s = Mn({
    populateCache: !0,
    throwOnError: !0
  }, typeof o == "boolean" ? {
    revalidate: o
  } : o || {});
  let a = s.populateCache;
  const l = s.rollbackOnError;
  let c = s.optimisticData;
  const u = (p) => typeof l == "function" ? l(p) : l !== !1, d = s.throwOnError;
  if (Gt(r)) {
    const p = r, h = [], g = t.keys();
    for (const m of g)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(m) && p(t.get(m)._k) && h.push(m);
    return Promise.all(h.map(f));
  }
  return f(r);
  async function f(p) {
    const [h] = fd(p);
    if (!h) return;
    const [g, m] = nx(t, h), [y, b, S, C] = on.get(t), v = () => {
      const P = y[h];
      return (Gt(s.revalidate) ? s.revalidate(g().data, p) : s.revalidate !== !1) && (delete S[h], delete C[h], P && P[0]) ? P[0](ex).then(() => g().data) : g().data;
    };
    if (e.length < 3)
      return v();
    let O = i, w, E = !1;
    const R = Ec();
    b[h] = [
      R,
      0
    ];
    const I = !fe(c), j = g(), _ = j.data, T = j._c, M = fe(T) ? _ : T;
    if (I && (c = Gt(c) ? c(M, _) : c, m({
      data: c,
      _c: M
    })), Gt(O))
      try {
        O = O(M);
      } catch (P) {
        w = P, E = !0;
      }
    if (O && tx(O))
      if (O = await O.catch((P) => {
        w = P, E = !0;
      }), R !== b[h][0]) {
        if (E) throw w;
        return O;
      } else E && I && u(w) && (a = !0, m({
        data: M,
        _c: Ke
      }));
    if (a && !E)
      if (Gt(a)) {
        const P = a(O, M);
        m({
          data: P,
          error: Ke,
          _c: Ke
        });
      } else
        m({
          data: O,
          error: Ke,
          _c: Ke
        });
    if (b[h][1] = Ec(), Promise.resolve(v()).then(() => {
      m({
        _c: Ke
      });
    }), E) {
      if (d) throw w;
      return;
    }
    return O;
  }
}
const oh = (e, t) => {
  for (const r in e)
    e[r][0] && e[r][0](t);
}, h$ = (e, t) => {
  if (!on.has(e)) {
    const r = Mn(c$, t), i = /* @__PURE__ */ Object.create(null), o = rx.bind(Ke, e);
    let s = Sn;
    const a = /* @__PURE__ */ Object.create(null), l = (d, f) => {
      const p = a[d] || [];
      return a[d] = p, p.push(f), () => p.splice(p.indexOf(f), 1);
    }, c = (d, f, p) => {
      e.set(d, f);
      const h = a[d];
      if (h)
        for (const g of h)
          g(f, p);
    }, u = () => {
      if (!on.has(e) && (on.set(e, [
        i,
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        o,
        c,
        l
      ]), !Wi)) {
        const d = r.initFocus(setTimeout.bind(Ke, oh.bind(Ke, i, Jb))), f = r.initReconnect(setTimeout.bind(Ke, oh.bind(Ke, i, Qb)));
        s = () => {
          d && d(), f && f(), on.delete(e);
        };
      }
    };
    return u(), [
      e,
      o,
      u,
      s
    ];
  }
  return [
    e,
    on.get(e)[4]
  ];
}, m$ = (e, t, r, i, o) => {
  const s = r.errorRetryCount, a = o.retryCount, l = ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) * r.errorRetryInterval;
  !fe(s) && a > s || setTimeout(i, l, o);
}, g$ = xc, [ix, y$] = h$(/* @__PURE__ */ new Map()), b$ = Mn(
  {
    // events
    onLoadingSlow: Sn,
    onSuccess: Sn,
    onError: Sn,
    onErrorRetry: m$,
    onDiscarded: Sn,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: ih ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: ih ? 5e3 : 3e3,
    // providers
    compare: g$,
    isPaused: () => !1,
    cache: ix,
    mutate: y$,
    fallback: {}
  },
  // use web preset by default
  l$
), x$ = (e, t) => {
  const r = Mn(e, t);
  if (t) {
    const { use: i, fallback: o } = e, { use: s, fallback: a } = t;
    i && s && (r.use = i.concat(s)), o && a && (r.fallback = Mn(o, a));
  }
  return r;
}, v$ = Ih({}), O$ = "$inf$", ox = xo && window.__SWR_DEVTOOLS_USE__, T$ = ox ? window.__SWR_DEVTOOLS_USE__ : [], S$ = () => {
  ox && (window.__SWR_DEVTOOLS_REACT__ = lt);
}, w$ = (e) => Gt(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], C$ = () => {
  const e = ti(v$);
  return Mh(() => Mn(b$, e), [
    e
  ]);
}, E$ = (e) => (t, r, i) => e(t, r && ((...s) => {
  const [a] = fd(t), [, , , l] = on.get(ix);
  if (a.startsWith(O$))
    return r(...s);
  const c = l[a];
  return fe(c) ? r(...s) : (delete l[a], c);
}), i), k$ = T$.concat(E$), R$ = (e) => function(...r) {
  const i = C$(), [o, s, a] = w$(r), l = x$(i, a);
  let c = e;
  const { use: u } = l, d = (u || []).concat(k$);
  for (let f = d.length; f--; )
    c = d[f](c);
  return c(o, s || l.fetcher || null, l);
}, A$ = (e, t, r) => {
  const i = t[e] || (t[e] = []);
  return i.push(r), () => {
    const o = i.indexOf(r);
    o >= 0 && (i[o] = i[i.length - 1], i.pop());
  };
};
S$();
const Al = lt.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((e) => {
  switch (e.status) {
    case "pending":
      throw e;
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      throw e.status = "pending", e.then((t) => {
        e.status = "fulfilled", e.value = t;
      }, (t) => {
        e.status = "rejected", e.reason = t;
      }), e;
  }
}), Pl = {
  dedupe: !0
}, sh = Promise.resolve(Ke), P$ = (e, t, r) => {
  const { cache: i, compare: o, suspense: s, fallbackData: a, revalidateOnMount: l, revalidateIfStale: c, refreshInterval: u, refreshWhenHidden: d, refreshWhenOffline: f, keepPreviousData: p } = r, [h, g, m, y] = on.get(i), [b, S] = fd(e), C = Vt(!1), v = Vt(!1), O = Vt(b), w = Vt(t), E = Vt(r), R = () => E.current, I = () => R().isVisible() && R().isOnline(), [j, _, T, M] = nx(i, b), P = Vt({}).current, N = fe(a) ? fe(r.fallback) ? Ke : r.fallback[b] : a, L = (re, ne) => {
    for (const ce in P) {
      const ae = ce;
      if (ae === "data") {
        if (!o(re[ae], ne[ae]) && (!fe(re[ae]) || !o(X, ne[ae])))
          return !1;
      } else if (ne[ae] !== re[ae])
        return !1;
    }
    return !0;
  }, z = Mh(() => {
    const re = !b || !t ? !1 : fe(l) ? R().isPaused() || s ? !1 : c !== !1 : l, ne = (ke) => {
      const We = Mn(ke);
      return delete We._k, re ? {
        isValidating: !0,
        isLoading: !0,
        ...We
      } : We;
    }, ce = j(), ae = M(), Ce = ne(ce), He = ce === ae ? Ce : ne(ae);
    let $e = Ce;
    return [
      () => {
        const ke = ne(j());
        return L(ke, $e) ? ($e.data = ke.data, $e.isLoading = ke.isLoading, $e.isValidating = ke.isValidating, $e.error = ke.error, $e) : ($e = ke, ke);
      },
      () => He
    ];
  }, [
    i,
    b
  ]), H = t$.useSyncExternalStore(Pi(
    (re) => T(b, (ne, ce) => {
      L(ce, ne) || re();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      i,
      b
    ]
  ), z[0], z[1]), Z = !C.current, F = h[b] && h[b].length > 0, k = H.data, B = fe(k) ? N && tx(N) ? Al(N) : N : k, G = H.error, W = Vt(B), X = p ? fe(k) ? fe(W.current) ? B : W.current : k : B, J = F && !fe(G) ? !1 : Z && !fe(l) ? l : R().isPaused() ? !1 : s ? fe(B) ? !1 : c : fe(B) || c, Q = !!(b && t && Z && J), te = fe(H.isValidating) ? Q : H.isValidating, V = fe(H.isLoading) ? Q : H.isLoading, Y = Pi(
    async (re) => {
      const ne = w.current;
      if (!b || !ne || v.current || R().isPaused())
        return !1;
      let ce, ae, Ce = !0;
      const He = re || {}, $e = !m[b] || !He.dedupe, ke = () => rh ? !v.current && b === O.current && C.current : b === O.current, We = {
        isValidating: !1,
        isLoading: !1
      }, se = () => {
        _(We);
      }, pi = () => {
        const et = m[b];
        et && et[1] === ae && delete m[b];
      }, vr = {
        isValidating: !0
      };
      fe(j().data) && (vr.isLoading = !0);
      try {
        if ($e && (_(vr), r.loadingTimeout && fe(j().data) && setTimeout(() => {
          Ce && ke() && R().onLoadingSlow(b, r);
        }, r.loadingTimeout), m[b] = [
          ne(S),
          Ec()
        ]), [ce, ae] = m[b], ce = await ce, $e && setTimeout(pi, r.dedupingInterval), !m[b] || m[b][1] !== ae)
          return $e && ke() && R().onDiscarded(b), !1;
        We.error = Ke;
        const et = g[b];
        if (!fe(et) && // case 1
        (ae <= et[0] || // case 2
        ae <= et[1] || // case 3
        et[1] === 0))
          return se(), $e && ke() && R().onDiscarded(b), !1;
        const St = j().data;
        We.data = o(St, ce) ? St : ce, $e && ke() && R().onSuccess(ce, b, r);
      } catch (et) {
        pi();
        const St = R(), { shouldRetryOnError: Or } = St;
        St.isPaused() || (We.error = et, $e && ke() && (St.onError(et, b, St), (Or === !0 || Gt(Or) && Or(et)) && (!R().revalidateOnFocus || !R().revalidateOnReconnect || I()) && St.onErrorRetry(et, b, St, (wo) => {
          const Ha = h[b];
          Ha && Ha[0] && Ha[0](th, wo);
        }, {
          retryCount: (He.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return Ce = !1, se(), !0;
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
      b,
      i
    ]
  ), ee = Pi(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...re) => rx(i, O.current, ...re),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (El(() => {
    w.current = t, E.current = r, fe(k) || (W.current = k);
  }), El(() => {
    if (!b) return;
    const re = Y.bind(Ke, Pl);
    let ne = 0;
    R().revalidateOnFocus && (ne = Date.now() + R().focusThrottleInterval);
    const ae = A$(b, h, (Ce, He = {}) => {
      if (Ce == Jb) {
        const $e = Date.now();
        R().revalidateOnFocus && $e > ne && I() && (ne = $e + R().focusThrottleInterval, re());
      } else if (Ce == Qb)
        R().revalidateOnReconnect && I() && re();
      else {
        if (Ce == ex)
          return Y();
        if (Ce == th)
          return Y(He);
      }
    });
    return v.current = !1, O.current = b, C.current = !0, _({
      _k: S
    }), J && (m[b] || (fe(B) || Wi ? re() : u$(re))), () => {
      v.current = !0, ae();
    };
  }, [
    b
  ]), El(() => {
    let re;
    function ne() {
      const ae = Gt(u) ? u(j().data) : u;
      ae && re !== -1 && (re = setTimeout(ce, ae));
    }
    function ce() {
      !j().error && (d || R().isVisible()) && (f || R().isOnline()) ? Y(Pl).then(ne) : ne();
    }
    return ne(), () => {
      re && (clearTimeout(re), re = -1);
    };
  }, [
    u,
    d,
    f,
    b
  ]), Ux(X), s) {
    const re = b && fe(B);
    if (!rh && Wi && re)
      throw new Error("Fallback data is required when using Suspense in SSR.");
    re && (w.current = t, E.current = r, v.current = !1);
    const ne = y[b], ce = !fe(ne) && re ? ee(ne) : sh;
    if (Al(ce), !fe(G) && re)
      throw G;
    const ae = re ? Y(Pl) : sh;
    !fe(X) && re && (ae.status = "fulfilled", ae.value = !0), Al(ae);
  }
  return {
    mutate: ee,
    get data() {
      return P.data = !0, X;
    },
    get error() {
      return P.error = !0, G;
    },
    get isValidating() {
      return P.isValidating = !0, te;
    },
    get isLoading() {
      return P.isLoading = !0, V;
    }
  };
}, I$ = R$(P$), M$ = {
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
}, _$ = (e = {}) => {
  const t = { ...M$, ...e };
  return (r) => {
    if (!r) return "حدث خطأ غير متوقع.";
    const i = r.response?.data;
    if (i && i.errors) {
      const a = [];
      for (const l in i.errors)
        for (const c in i.errors[l]) {
          const u = i.errors[l][c];
          a.push(`${c}: ${u.join(", ")}`);
        }
      if (a.length > 0)
        return a.join(" | ");
    }
    const o = i?.error_code === "BUSINESS_LOGIC_ERROR" && i?.message;
    if (o)
      return o;
    const s = r.message;
    return s && t[s] ? t[s] : "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.";
  };
}, sx = _$(), j$ = (e, t, r = {}) => {
  const { data: i, error: o, isLoading: s, mutate: a } = I$(e, t, {
    ...r,
    onError: (l) => {
      r.onError && r.onError(l);
    }
  });
  return {
    data: i,
    error: o,
    getTranslatedError: sx,
    isLoading: s,
    mutate: a
  };
}, cN = (e, { onSuccess: t, onError: r } = {}) => {
  const [i, o] = Re(!1);
  return { handleMutation: async (a) => {
    o(!0);
    try {
      const l = await e(a);
      return t?.(l), l;
    } catch (l) {
      throw r?.(l), l;
    } finally {
      o(!1);
    }
  }, isMutating: i, getTranslatedError: sx };
}, $$ = (e, t) => {
  const [r, i] = Re(e);
  return ut(() => {
    const o = setTimeout(() => {
      i(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), r;
}, D$ = ({ filter: e, value: t, onChange: r }) => {
  const [i, o] = Re(t || ""), s = $$(i, 500);
  ut(() => {
    (e.type === "text" || e.type === "number" || e.type === "search") && r(e.name, s);
  }, [s, e.type, e.name, r]);
  const a = (l) => {
    e.type !== "text" && e.type !== "number" && e.type !== "search" && r(e.name, l);
  };
  switch (e.type) {
    case "text":
    case "number":
      return /* @__PURE__ */ x.jsx(
        Un,
        {
          label: e.label,
          type: e.type,
          value: i,
          onChange: (l) => o(l.target.value),
          variant: "outlined",
          fullWidth: !0
        }
      );
    case "search":
      return /* @__PURE__ */ x.jsx(
        Un,
        {
          label: e.label,
          type: "text",
          value: i,
          onChange: (l) => o(l.target.value),
          variant: "outlined",
          fullWidth: !0,
          InputProps: { endAdornment: /* @__PURE__ */ x.jsx(b0, { color: "action" }) }
        }
      );
    case "date":
      return /* @__PURE__ */ x.jsx(
        Un,
        {
          label: e.label,
          type: "date",
          value: t || "",
          onChange: (l) => a(l.target.value),
          variant: "outlined",
          fullWidth: !0,
          InputLabelProps: {
            shrink: !0
          }
        }
      );
    case "select":
      return /* @__PURE__ */ x.jsx(
        Un,
        {
          select: !0,
          label: e.label,
          value: t || "",
          onChange: (l) => a(l.target.value),
          variant: "outlined",
          fullWidth: !0,
          InputProps: {
            endAdornment: t ? /* @__PURE__ */ x.jsx(
              ji,
              {
                size: "small",
                onClick: (l) => {
                  l.stopPropagation(), a("");
                },
                sx: { mr: 2, visibility: "visible" },
                children: /* @__PURE__ */ x.jsx(y0, { fontSize: "small" })
              }
            ) : null
          },
          children: e.options.map((l) => /* @__PURE__ */ x.jsx(Zo, { value: l.value, children: l.label }, l.value))
        }
      );
    case "autocomplete":
      return /* @__PURE__ */ x.jsx(
        Lh,
        {
          options: e.options || [],
          getOptionLabel: (l) => l.label || "",
          loading: e.loading || !1,
          loadingText: e.loadingText || "جاري التحميل...",
          noOptionsText: e.noOptionsText || "لا توجد خيارات",
          value: t || null,
          onChange: (l, c) => a(c),
          renderInput: (l) => /* @__PURE__ */ x.jsx(Un, { ...l, label: e.label })
        }
      );
    case "switch":
      return /* @__PURE__ */ x.jsx(
        Nh,
        {
          control: /* @__PURE__ */ x.jsx(Fh, { checked: t || !1, onChange: (l) => a(l.target.checked), name: e.name }),
          label: e.label
        }
      );
    default:
      return null;
  }
}, L$ = ({ filterOptions: e, filters: t, onFilterChange: r, defaultShowFilters: i = !1 }) => {
  const [o, s] = Re(i);
  return /* @__PURE__ */ x.jsxs(Ie, { children: [
    /* @__PURE__ */ x.jsx(En, { onClick: () => s(!o), sx: { mb: o ? 2 : 0 }, children: o ? "إخفاء الفلاتر" : "إظهار الفلاتر" }),
    /* @__PURE__ */ x.jsx(n0, { in: o, children: /* @__PURE__ */ x.jsx(ir, { container: !0, spacing: 2, alignItems: "center", children: e.map((a) => {
      const l = a.type === "search" ? { xs: 12, sm: 12, md: 6, lg: 6 } : { xs: 12, sm: 6, md: 3, lg: 3 };
      return /* @__PURE__ */ x.jsx(ir, { size: l, children: /* @__PURE__ */ x.jsx(
        D$,
        {
          filter: a,
          value: t[a.name],
          onChange: r
        }
      ) }, a.name);
    }) }) })
  ] });
}, N$ = ({ resourceName: e, createPath: t, createText: r, linkComponent: i, view: o, onViewChange: s }) => {
  const a = i;
  return /* @__PURE__ */ x.jsxs(Zn, { sx: { p: "0 !important", mb: 2, display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" } }, children: [
    /* @__PURE__ */ x.jsx(Be, { variant: "h4", component: "h1", sx: { flexGrow: 1, mb: { xs: 2, sm: 0 } }, children: e }),
    o && /* @__PURE__ */ x.jsxs(
      r0,
      {
        value: o,
        exclusive: !0,
        onChange: s,
        "aria-label": "view",
        sx: { mr: { xs: 0, sm: 2 }, mb: { xs: 2, sm: 0 } },
        children: [
          /* @__PURE__ */ x.jsx(vd, { value: "table", "aria-label": "table view", children: /* @__PURE__ */ x.jsx(x0, {}) }),
          /* @__PURE__ */ x.jsx(vd, { value: "card", "aria-label": "card view", children: /* @__PURE__ */ x.jsx(v0, {}) })
        ]
      }
    ),
    t && /* @__PURE__ */ x.jsx(
      En,
      {
        variant: "contained",
        startIcon: /* @__PURE__ */ x.jsx(O0, {}),
        ...a ? { component: a, to: t } : { href: t },
        children: r
      }
    )
  ] });
}, uN = ({
  resourceName: e,
  columns: t,
  api: r,
  createPath: i,
  createText: o = "Create New",
  filterOptions: s = [],
  searchable: a = !1,
  searchPlaceholder: l = "Search...",
  sorting: c = !1,
  showRowNumber: u = !0,
  height: d,
  linkComponent: f,
  renderHeader: p = N$,
  requestAdapter: h = (w) => w,
  responseAdapter: g = (w) => w,
  autoRefresh: m = !1,
  defaultView: y = null,
  defaultShowFilters: b = !1,
  renderCard: S,
  resetTrigger: C,
  onRefresh: v,
  onFilterChange: O
}) => {
  const [w, E] = Re(1), [R, I] = Re(10), [j, _] = Re([]), [T, M] = Re({}), [P, N] = Re(y), [L, z] = Re(!1), H = { page: w, per_page: R, ...T };
  j.length > 0 && (H.sort_by = j[0].field, H.sort_order = j[0].sort);
  const Z = h(H), { data: F, isLoading: k, error: B, mutate: G } = j$(
    [e, Z],
    async () => {
      const V = await r.list(Z);
      return g(V);
    },
    { keepPreviousData: !0 }
  );
  ut(() => {
    const V = m ? setInterval(() => {
      G();
    }, m) : null;
    return () => {
      V && clearInterval(V);
    };
  }, []), ut(() => {
    G();
  }, [Z, G, C]);
  const W = Vt(!0);
  ut(() => {
    if (W.current) {
      W.current = !1;
      return;
    }
    O && O(T);
  }, [T, O]);
  const X = Pi((V, Y) => {
    E(1), M((ee) => ({ ...ee, [V]: Y }));
  }, []), J = (V, Y) => {
    Y !== null && N(Y);
  }, Q = async () => {
    z(!0), await G(), z(!1);
  }, te = [
    ...a ? [{ name: "q", label: l, type: "search" }] : [],
    ...s
  ];
  return /* @__PURE__ */ x.jsxs(Ie, { children: [
    p({ resourceName: e, createPath: i, createText: o, linkComponent: f, view: P, onViewChange: J }),
    /* @__PURE__ */ x.jsx(gn, { sx: { mb: 2, p: 2 }, children: /* @__PURE__ */ x.jsx(
      L$,
      {
        filterOptions: te,
        filters: T,
        onFilterChange: X,
        defaultShowFilters: b
      }
    ) }),
    !P || P === "table" ? /* @__PURE__ */ x.jsx(
      hT,
      {
        rows: F?.items || [],
        columns: t,
        loading: k || L,
        error: B,
        pagination: F && F.pagination,
        rowCount: F && F.pagination ? F.pagination.total : 0,
        page: w,
        onPageChange: E,
        perPage: R,
        onPerPageChange: (V) => {
          I(V), E(1);
        },
        sorting: c,
        sortModel: j,
        onSortModelChange: (V) => {
          _(V), E(1);
        },
        showRowNumber: u,
        height: d,
        onRefresh: v || (() => Q())
      }
    ) : P === "card" ? /* @__PURE__ */ x.jsx(
      xT,
      {
        rows: F?.items || [],
        columns: t,
        loading: k || L,
        error: B,
        pagination: F && F.pagination,
        rowCount: F && F.pagination ? F.pagination.total : 0,
        page: w,
        onPageChange: E,
        perPage: R,
        onPerPageChange: (V) => {
          I(V), E(1);
        },
        renderCard: S,
        onRefresh: v || (() => Q())
      }
    ) : null
  ] });
}, F$ = ({ isSubmitting: e, onCancel: t }) => /* @__PURE__ */ x.jsxs(Ie, { sx: { mt: 3, display: "flex", gap: 2 }, children: [
  /* @__PURE__ */ x.jsx(
    En,
    {
      type: "submit",
      variant: "contained",
      disabled: e,
      children: e ? /* @__PURE__ */ x.jsx(ni, { size: 24 }) : "Save"
    }
  ),
  t && /* @__PURE__ */ x.jsx(En, { variant: "outlined", onClick: t, disabled: e, children: "Cancel" })
] }), dN = ({
  title: e,
  id: t,
  api: r,
  FormComponent: i,
  validationSchema: o,
  onSuccess: s = () => {
  },
  onCancel: a,
  responseAdapter: l = (d) => d,
  requestAdapter: c = (d) => d,
  renderActions: u = F$
}) => {
  const [d, f] = Re(null), [p, h] = Re(!1), [g, m] = Re(null), [y, b] = Re(!1), S = t != null;
  ut(() => {
    S && (h(!0), m(null), r.getOne(t).then((v) => f(l(v))).catch((v) => m(v)).finally(() => h(!1)));
  }, [r, t, S, l]);
  const C = async (v) => {
    b(!0), m(null);
    const O = c(v);
    try {
      const w = S ? await r.update(t, O) : await r.create(O);
      s(w.data), b(!1);
    } catch (w) {
      m(w), b(!1);
    }
  };
  return p ? /* @__PURE__ */ x.jsx(ni, {}) : g && !y ? /* @__PURE__ */ x.jsx(Ll, { severity: "error", children: g.message || "Failed to load resource data." }) : /* @__PURE__ */ x.jsxs(Ie, { children: [
    /* @__PURE__ */ x.jsx(Zn, { sx: { p: "0 !important", mb: 2 }, children: /* @__PURE__ */ x.jsx(Be, { variant: "h4", component: "h1", children: e }) }),
    /* @__PURE__ */ x.jsx(gn, { sx: { p: 3 }, children: (!S || d) && /* @__PURE__ */ x.jsxs(pm, { onSubmit: C, initialValues: d, validationSchema: o, children: [
      /* @__PURE__ */ x.jsx(i, {}),
      g && y && /* @__PURE__ */ x.jsx(Ll, { severity: "error", sx: { mt: 2 }, children: g.message || "An error occurred during submission." }),
      u({ isSubmitting: y, onCancel: a })
    ] }) })
  ] });
};
var Il, ah;
function q$() {
  if (ah) return Il;
  ah = 1;
  function e(b) {
    this._maxSize = b, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(b) {
    return this._values[b];
  }, e.prototype.set = function(b, S) {
    return this._size >= this._maxSize && this.clear(), b in this._values || this._size++, this._values[b] = S;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, r = /^\d+$/, i = /^\d/, o = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, a = 512, l = new e(a), c = new e(a), u = new e(a);
  Il = {
    Cache: e,
    split: f,
    normalizePath: d,
    setter: function(b) {
      var S = d(b);
      return c.get(b) || c.set(b, function(v, O) {
        for (var w = 0, E = S.length, R = v; w < E - 1; ) {
          var I = S[w];
          if (I === "__proto__" || I === "constructor" || I === "prototype")
            return v;
          R = R[S[w++]];
        }
        R[S[w]] = O;
      });
    },
    getter: function(b, S) {
      var C = d(b);
      return u.get(b) || u.set(b, function(O) {
        for (var w = 0, E = C.length; w < E; )
          if (O != null || !S) O = O[C[w++]];
          else return;
        return O;
      });
    },
    join: function(b) {
      return b.reduce(function(S, C) {
        return S + (h(C) || r.test(C) ? "[" + C + "]" : (S ? "." : "") + C);
      }, "");
    },
    forEach: function(b, S, C) {
      p(Array.isArray(b) ? b : f(b), S, C);
    }
  };
  function d(b) {
    return l.get(b) || l.set(
      b,
      f(b).map(function(S) {
        return S.replace(s, "$2");
      })
    );
  }
  function f(b) {
    return b.match(t) || [""];
  }
  function p(b, S, C) {
    var v = b.length, O, w, E, R;
    for (w = 0; w < v; w++)
      O = b[w], O && (y(O) && (O = '"' + O + '"'), R = h(O), E = !R && /^\d+$/.test(O), S.call(C, O, R, E, w, b));
  }
  function h(b) {
    return typeof b == "string" && b && ["'", '"'].indexOf(b.charAt(0)) !== -1;
  }
  function g(b) {
    return b.match(i) && !b.match(r);
  }
  function m(b) {
    return o.test(b);
  }
  function y(b) {
    return !h(b) && (g(b) || m(b));
  }
  return Il;
}
var nr = q$(), Ml, lh;
function z$() {
  if (lh) return Ml;
  lh = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (d) => d.match(e) || [], r = (d) => d[0].toUpperCase() + d.slice(1), i = (d, f) => t(d).join(f).toLowerCase(), o = (d) => t(d).reduce(
    (f, p) => `${f}${f ? p[0].toUpperCase() + p.slice(1).toLowerCase() : p.toLowerCase()}`,
    ""
  );
  return Ml = {
    words: t,
    upperFirst: r,
    camelCase: o,
    pascalCase: (d) => r(o(d)),
    snakeCase: (d) => i(d, "_"),
    kebabCase: (d) => i(d, "-"),
    sentenceCase: (d) => r(i(d, " ")),
    titleCase: (d) => t(d).map(r).join(" ")
  }, Ml;
}
var _l = z$(), Go = { exports: {} }, ch;
function B$() {
  if (ch) return Go.exports;
  ch = 1, Go.exports = function(o) {
    return e(t(o), o);
  }, Go.exports.array = e;
  function e(o, s) {
    var a = o.length, l = new Array(a), c = {}, u = a, d = r(s), f = i(o);
    for (s.forEach(function(h) {
      if (!f.has(h[0]) || !f.has(h[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); u--; )
      c[u] || p(o[u], u, /* @__PURE__ */ new Set());
    return l;
    function p(h, g, m) {
      if (m.has(h)) {
        var y;
        try {
          y = ", node was:" + JSON.stringify(h);
        } catch {
          y = "";
        }
        throw new Error("Cyclic dependency" + y);
      }
      if (!f.has(h))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(h));
      if (!c[g]) {
        c[g] = !0;
        var b = d.get(h) || /* @__PURE__ */ new Set();
        if (b = Array.from(b), g = b.length) {
          m.add(h);
          do {
            var S = b[--g];
            p(S, f.get(S), m);
          } while (g);
          m.delete(h);
        }
        l[--a] = h;
      }
    }
  }
  function t(o) {
    for (var s = /* @__PURE__ */ new Set(), a = 0, l = o.length; a < l; a++) {
      var c = o[a];
      s.add(c[0]), s.add(c[1]);
    }
    return Array.from(s);
  }
  function r(o) {
    for (var s = /* @__PURE__ */ new Map(), a = 0, l = o.length; a < l; a++) {
      var c = o[a];
      s.has(c[0]) || s.set(c[0], /* @__PURE__ */ new Set()), s.has(c[1]) || s.set(c[1], /* @__PURE__ */ new Set()), s.get(c[0]).add(c[1]);
    }
    return s;
  }
  function i(o) {
    for (var s = /* @__PURE__ */ new Map(), a = 0, l = o.length; a < l; a++)
      s.set(o[a], a);
    return s;
  }
  return Go.exports;
}
var V$ = B$();
const U$ = /* @__PURE__ */ _c(V$), H$ = Object.prototype.toString, G$ = Error.prototype.toString, W$ = RegExp.prototype.toString, Y$ = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", X$ = /^Symbol\((.*)\)(.*)$/;
function K$(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function uh(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const r = typeof e;
  if (r === "number") return K$(e);
  if (r === "string") return t ? `"${e}"` : e;
  if (r === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (r === "symbol") return Y$.call(e).replace(X$, "Symbol($1)");
  const i = H$.call(e).slice(8, -1);
  return i === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : i === "Error" || e instanceof Error ? "[" + G$.call(e) + "]" : i === "RegExp" ? W$.call(e) : null;
}
function Cn(e, t) {
  let r = uh(e, t);
  return r !== null ? r : JSON.stringify(e, function(i, o) {
    let s = uh(this[i], t);
    return s !== null ? s : o;
  }, 2);
}
function ax(e) {
  return e == null ? [] : [].concat(e);
}
let lx, cx, ux, Z$ = /\$\{\s*(\w+)\s*\}/g;
lx = Symbol.toStringTag;
class dh {
  constructor(t, r, i, o) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[lx] = "Error", this.name = "ValidationError", this.value = r, this.path = i, this.type = o, this.errors = [], this.inner = [], ax(t).forEach((s) => {
      if (tt.isError(s)) {
        this.errors.push(...s.errors);
        const a = s.inner.length ? s.inner : [s];
        this.inner.push(...a);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
cx = Symbol.hasInstance;
ux = Symbol.toStringTag;
class tt extends Error {
  static formatError(t, r) {
    const i = r.label || r.path || "this";
    return r = Object.assign({}, r, {
      path: i,
      originalPath: r.path
    }), typeof t == "string" ? t.replace(Z$, (o, s) => Cn(r[s])) : typeof t == "function" ? t(r) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, r, i, o, s) {
    const a = new dh(t, r, i, o);
    if (s)
      return a;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[ux] = "Error", this.name = a.name, this.message = a.message, this.type = a.type, this.value = a.value, this.path = a.path, this.errors = a.errors, this.inner = a.inner, Error.captureStackTrace && Error.captureStackTrace(this, tt);
  }
  static [cx](t) {
    return dh[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let Ut = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: r,
    originalValue: i
  }) => {
    const o = i != null && i !== r ? ` (cast from the value \`${Cn(i, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Cn(r, !0)}\`` + o : `${e} must match the configured type. The validated value was: \`${Cn(r, !0)}\`` + o;
  }
}, st = {
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
}, J$ = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, kc = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Q$ = {
  isValue: "${path} field must be ${value}"
}, ts = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, eD = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, tD = {
  notType: (e) => {
    const {
      path: t,
      value: r,
      spec: i
    } = e, o = i.types.length;
    if (Array.isArray(r)) {
      if (r.length < o) return `${t} tuple value has too few items, expected a length of ${o} but got ${r.length} for value: \`${Cn(r, !0)}\``;
      if (r.length > o) return `${t} tuple value has too many items, expected a length of ${o} but got ${r.length} for value: \`${Cn(r, !0)}\``;
    }
    return tt.formatError(Ut.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Ut,
  string: st,
  number: J$,
  date: kc,
  object: ts,
  array: eD,
  boolean: Q$,
  tuple: tD
});
const pd = (e) => e && e.__isYupSchema__;
class $s {
  static fromOptions(t, r) {
    if (!r.then && !r.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: i,
      then: o,
      otherwise: s
    } = r, a = typeof i == "function" ? i : (...l) => l.every((c) => c === i);
    return new $s(t, (l, c) => {
      var u;
      let d = a(...l) ? o : s;
      return (u = d?.(c)) != null ? u : c;
    });
  }
  constructor(t, r) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = r;
  }
  resolve(t, r) {
    let i = this.refs.map((s) => (
      // TODO: ? operator here?
      s.getValue(r?.value, r?.parent, r?.context)
    )), o = this.fn(i, t, r);
    if (o === void 0 || // @ts-ignore this can be base
    o === t)
      return t;
    if (!pd(o)) throw new TypeError("conditions must return a schema object");
    return o.resolve(r);
  }
}
const Wo = {
  context: "$",
  value: "."
};
class xr {
  constructor(t, r = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Wo.context, this.isValue = this.key[0] === Wo.value, this.isSibling = !this.isContext && !this.isValue;
    let i = this.isContext ? Wo.context : this.isValue ? Wo.value : "";
    this.path = this.key.slice(i.length), this.getter = this.path && nr.getter(this.path, !0), this.map = r.map;
  }
  getValue(t, r, i) {
    let o = this.isContext ? i : this.isValue ? t : r;
    return this.getter && (o = this.getter(o || {})), this.map && (o = this.map(o)), o;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, r) {
    return this.getValue(t, r?.parent, r?.context);
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
xr.prototype.__isYupRef = !0;
const Xn = (e) => e == null;
function Mr(e) {
  function t({
    value: r,
    path: i = "",
    options: o,
    originalValue: s,
    schema: a
  }, l, c) {
    const {
      name: u,
      test: d,
      params: f,
      message: p,
      skipAbsent: h
    } = e;
    let {
      parent: g,
      context: m,
      abortEarly: y = a.spec.abortEarly,
      disableStackTrace: b = a.spec.disableStackTrace
    } = o;
    const S = {
      value: r,
      parent: g,
      context: m
    };
    function C(_ = {}) {
      const T = dx(Object.assign({
        value: r,
        originalValue: s,
        label: a.spec.label,
        path: _.path || i,
        spec: a.spec,
        disableStackTrace: _.disableStackTrace || b
      }, f, _.params), S), M = new tt(tt.formatError(_.message || p, T), r, T.path, _.type || u, T.disableStackTrace);
      return M.params = T, M;
    }
    const v = y ? l : c;
    let O = {
      path: i,
      parent: g,
      type: u,
      from: o.from,
      createError: C,
      resolve(_) {
        return fx(_, S);
      },
      options: o,
      originalValue: s,
      schema: a
    };
    const w = (_) => {
      tt.isError(_) ? v(_) : _ ? c(null) : v(C());
    }, E = (_) => {
      tt.isError(_) ? v(_) : l(_);
    };
    if (h && Xn(r))
      return w(!0);
    let I;
    try {
      var j;
      if (I = d.call(O, r, O), typeof ((j = I) == null ? void 0 : j.then) == "function") {
        if (o.sync)
          throw new Error(`Validation test of type: "${O.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(I).then(w, E);
      }
    } catch (_) {
      E(_);
      return;
    }
    w(I);
  }
  return t.OPTIONS = e, t;
}
function dx(e, t) {
  if (!e) return e;
  for (const r of Object.keys(e))
    e[r] = fx(e[r], t);
  return e;
}
function fx(e, t) {
  return xr.isRef(e) ? e.getValue(t.value, t.parent, t.context) : e;
}
function nD(e, t, r, i = r) {
  let o, s, a;
  return t ? (nr.forEach(t, (l, c, u) => {
    let d = c ? l.slice(1, l.length - 1) : l;
    e = e.resolve({
      context: i,
      parent: o,
      value: r
    });
    let f = e.type === "tuple", p = u ? parseInt(d, 10) : 0;
    if (e.innerType || f) {
      if (f && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);
      if (r && p >= r.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);
      o = r, r = r && r[p], e = f ? e.spec.types[p] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[d]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`);
      o = r, r = r && r[d], e = e.fields[d];
    }
    s = d, a = c ? "[" + l + "]" : "." + l;
  }), {
    schema: e,
    parent: o,
    parentPath: s
  }) : {
    parent: o,
    parentPath: t,
    schema: e
  };
}
class Ds extends Set {
  describe() {
    const t = [];
    for (const r of this.values())
      t.push(xr.isRef(r) ? r.describe() : r);
    return t;
  }
  resolveAll(t) {
    let r = [];
    for (const i of this.values())
      r.push(t(i));
    return r;
  }
  clone() {
    return new Ds(this.values());
  }
  merge(t, r) {
    const i = this.clone();
    return t.forEach((o) => i.add(o)), r.forEach((o) => i.delete(o)), i;
  }
}
function Dr(e, t = /* @__PURE__ */ new Map()) {
  if (pd(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let r;
  if (e instanceof Date)
    r = new Date(e.getTime()), t.set(e, r);
  else if (e instanceof RegExp)
    r = new RegExp(e), t.set(e, r);
  else if (Array.isArray(e)) {
    r = new Array(e.length), t.set(e, r);
    for (let i = 0; i < e.length; i++) r[i] = Dr(e[i], t);
  } else if (e instanceof Map) {
    r = /* @__PURE__ */ new Map(), t.set(e, r);
    for (const [i, o] of e.entries()) r.set(i, Dr(o, t));
  } else if (e instanceof Set) {
    r = /* @__PURE__ */ new Set(), t.set(e, r);
    for (const i of e) r.add(Dr(i, t));
  } else if (e instanceof Object) {
    r = {}, t.set(e, r);
    for (const [i, o] of Object.entries(e)) r[i] = Dr(o, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return r;
}
function rD(e) {
  if (!(e != null && e.length))
    return;
  const t = [];
  let r = "", i = !1, o = !1;
  for (let s = 0; s < e.length; s++) {
    const a = e[s];
    if (a === "[" && !o) {
      r && (t.push(...r.split(".").filter(Boolean)), r = ""), i = !0;
      continue;
    }
    if (a === "]" && !o) {
      r && (/^\d+$/.test(r) ? t.push(r) : t.push(r.replace(/^"|"$/g, "")), r = ""), i = !1;
      continue;
    }
    if (a === '"') {
      o = !o;
      continue;
    }
    if (a === "." && !i && !o) {
      r && (t.push(r), r = "");
      continue;
    }
    r += a;
  }
  return r && t.push(...r.split(".").filter(Boolean)), t;
}
function iD(e, t) {
  const r = t ? `${t}.${e.path}` : e.path;
  return e.errors.map((i) => ({
    message: i,
    path: rD(r)
  }));
}
function px(e, t) {
  var r;
  if (!((r = e.inner) != null && r.length) && e.errors.length)
    return iD(e, t);
  const i = t ? `${t}.${e.path}` : e.path;
  return e.inner.flatMap((o) => px(o, i));
}
class Kt {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Ds(), this._blacklist = new Ds(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(Ut.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t?.spec), this.withMutation((r) => {
      r.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const r = Object.create(Object.getPrototypeOf(this));
    return r.type = this.type, r._typeCheck = this._typeCheck, r._whitelist = this._whitelist.clone(), r._blacklist = this._blacklist.clone(), r.internalTests = Object.assign({}, this.internalTests), r.exclusiveTests = Object.assign({}, this.exclusiveTests), r.deps = [...this.deps], r.conditions = [...this.conditions], r.tests = [...this.tests], r.transforms = [...this.transforms], r.spec = Dr(Object.assign({}, this.spec, t)), r;
  }
  label(t) {
    let r = this.clone();
    return r.spec.label = t, r;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let r = this.clone();
    return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]), r;
  }
  withMutation(t) {
    let r = this._mutate;
    this._mutate = !0;
    let i = t(this);
    return this._mutate = r, i;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let r = this, i = t.clone();
    const o = Object.assign({}, r.spec, i.spec);
    return i.spec = o, i.internalTests = Object.assign({}, r.internalTests, i.internalTests), i._whitelist = r._whitelist.merge(t._whitelist, t._blacklist), i._blacklist = r._blacklist.merge(t._blacklist, t._whitelist), i.tests = r.tests, i.exclusiveTests = r.exclusiveTests, i.withMutation((s) => {
      t.tests.forEach((a) => {
        s.test(a.OPTIONS);
      });
    }), i.transforms = [...r.transforms, ...i.transforms], i;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let r = this;
    if (r.conditions.length) {
      let i = r.conditions;
      r = r.clone(), r.conditions = [], r = i.reduce((o, s) => s.resolve(o, t), r), r = r.resolve(t);
    }
    return r;
  }
  resolveOptions(t) {
    var r, i, o, s;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (r = t.strict) != null ? r : this.spec.strict,
      abortEarly: (i = t.abortEarly) != null ? i : this.spec.abortEarly,
      recursive: (o = t.recursive) != null ? o : this.spec.recursive,
      disableStackTrace: (s = t.disableStackTrace) != null ? s : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, r = {}) {
    let i = this.resolve(Object.assign({}, r, {
      value: t
      // parent: options.parent,
      // context: options.context,
    })), o = r.assert === "ignore-optionality", s = i._cast(t, r);
    if (r.assert !== !1 && !i.isType(s)) {
      if (o && Xn(s))
        return s;
      let a = Cn(t), l = Cn(s);
      throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${i.type}". 

attempted value: ${a} 
` + (l !== a ? `result of cast: ${l}` : ""));
    }
    return s;
  }
  _cast(t, r) {
    let i = t === void 0 ? t : this.transforms.reduce((o, s) => s.call(this, o, t, this, r), t);
    return i === void 0 && (i = this.getDefault(r)), i;
  }
  _validate(t, r = {}, i, o) {
    let {
      path: s,
      originalValue: a = t,
      strict: l = this.spec.strict
    } = r, c = t;
    l || (c = this._cast(c, Object.assign({
      assert: !1
    }, r)));
    let u = [];
    for (let d of Object.values(this.internalTests))
      d && u.push(d);
    this.runTests({
      path: s,
      value: c,
      originalValue: a,
      options: r,
      tests: u
    }, i, (d) => {
      if (d.length)
        return o(d, c);
      this.runTests({
        path: s,
        value: c,
        originalValue: a,
        options: r,
        tests: this.tests
      }, i, o);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, r, i) {
    let o = !1, {
      tests: s,
      value: a,
      originalValue: l,
      path: c,
      options: u
    } = t, d = (m) => {
      o || (o = !0, r(m, a));
    }, f = (m) => {
      o || (o = !0, i(m, a));
    }, p = s.length, h = [];
    if (!p) return f([]);
    let g = {
      value: a,
      originalValue: l,
      path: c,
      options: u,
      schema: this
    };
    for (let m = 0; m < s.length; m++) {
      const y = s[m];
      y(g, d, function(S) {
        S && (Array.isArray(S) ? h.push(...S) : h.push(S)), --p <= 0 && f(h);
      });
    }
  }
  asNestedTest({
    key: t,
    index: r,
    parent: i,
    parentPath: o,
    originalParent: s,
    options: a
  }) {
    const l = t ?? r;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const c = typeof l == "number";
    let u = i[l];
    const d = Object.assign({}, a, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: i,
      value: u,
      originalValue: s[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [c ? "index" : "key"]: l,
      path: c || l.includes(".") ? `${o || ""}[${c ? l : `"${l}"`}]` : (o ? `${o}.` : "") + t
    });
    return (f, p, h) => this.resolve(d)._validate(u, d, p, h);
  }
  validate(t, r) {
    var i;
    let o = this.resolve(Object.assign({}, r, {
      value: t
    })), s = (i = r?.disableStackTrace) != null ? i : o.spec.disableStackTrace;
    return new Promise((a, l) => o._validate(t, r, (c, u) => {
      tt.isError(c) && (c.value = u), l(c);
    }, (c, u) => {
      c.length ? l(new tt(c, u, void 0, void 0, s)) : a(u);
    }));
  }
  validateSync(t, r) {
    var i;
    let o = this.resolve(Object.assign({}, r, {
      value: t
    })), s, a = (i = r?.disableStackTrace) != null ? i : o.spec.disableStackTrace;
    return o._validate(t, Object.assign({}, r, {
      sync: !0
    }), (l, c) => {
      throw tt.isError(l) && (l.value = c), l;
    }, (l, c) => {
      if (l.length) throw new tt(l, t, void 0, void 0, a);
      s = c;
    }), s;
  }
  isValid(t, r) {
    return this.validate(t, r).then(() => !0, (i) => {
      if (tt.isError(i)) return !1;
      throw i;
    });
  }
  isValidSync(t, r) {
    try {
      return this.validateSync(t, r), !0;
    } catch (i) {
      if (tt.isError(i)) return !1;
      throw i;
    }
  }
  _getDefault(t) {
    let r = this.spec.default;
    return r == null ? r : typeof r == "function" ? r.call(this, t) : Dr(r);
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
  nullability(t, r) {
    const i = this.clone({
      nullable: t
    });
    return i.internalTests.nullable = Mr({
      message: r,
      name: "nullable",
      test(o) {
        return o === null ? this.schema.spec.nullable : !0;
      }
    }), i;
  }
  optionality(t, r) {
    const i = this.clone({
      optional: t
    });
    return i.internalTests.optionality = Mr({
      message: r,
      name: "optionality",
      test(o) {
        return o === void 0 ? this.schema.spec.optional : !0;
      }
    }), i;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = Ut.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = Ut.notNull) {
    return this.nullability(!1, t);
  }
  required(t = Ut.required) {
    return this.clone().withMutation((r) => r.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let r = this.clone();
    return r.transforms.push(t), r;
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
    let r;
    if (t.length === 1 ? typeof t[0] == "function" ? r = {
      test: t[0]
    } : r = t[0] : t.length === 2 ? r = {
      name: t[0],
      test: t[1]
    } : r = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, r.message === void 0 && (r.message = Ut.default), typeof r.test != "function") throw new TypeError("`test` is a required parameters");
    let i = this.clone(), o = Mr(r), s = r.exclusive || r.name && i.exclusiveTests[r.name] === !0;
    if (r.exclusive && !r.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return r.name && (i.exclusiveTests[r.name] = !!r.exclusive), i.tests = i.tests.filter((a) => !(a.OPTIONS.name === r.name && (s || a.OPTIONS.test === o.OPTIONS.test))), i.tests.push(o), i;
  }
  when(t, r) {
    !Array.isArray(t) && typeof t != "string" && (r = t, t = ".");
    let i = this.clone(), o = ax(t).map((s) => new xr(s));
    return o.forEach((s) => {
      s.isSibling && i.deps.push(s.key);
    }), i.conditions.push(typeof r == "function" ? new $s(o, r) : $s.fromOptions(o, r)), i;
  }
  typeError(t) {
    let r = this.clone();
    return r.internalTests.typeError = Mr({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(i) {
        return this.schema._typeCheck(i) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), r;
  }
  oneOf(t, r = Ut.oneOf) {
    let i = this.clone();
    return t.forEach((o) => {
      i._whitelist.add(o), i._blacklist.delete(o);
    }), i.internalTests.whiteList = Mr({
      message: r,
      name: "oneOf",
      skipAbsent: !0,
      test(o) {
        let s = this.schema._whitelist, a = s.resolveAll(this.resolve);
        return a.includes(o) ? !0 : this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: a
          }
        });
      }
    }), i;
  }
  notOneOf(t, r = Ut.notOneOf) {
    let i = this.clone();
    return t.forEach((o) => {
      i._blacklist.add(o), i._whitelist.delete(o);
    }), i.internalTests.blacklist = Mr({
      message: r,
      name: "notOneOf",
      test(o) {
        let s = this.schema._blacklist, a = s.resolveAll(this.resolve);
        return a.includes(o) ? this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: a
          }
        }) : !0;
      }
    }), i;
  }
  strip(t = !0) {
    let r = this.clone();
    return r.spec.strip = t, r;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), {
      label: i,
      meta: o,
      optional: s,
      nullable: a
    } = r.spec;
    return {
      meta: o,
      label: i,
      optional: s,
      nullable: a,
      default: r.getDefault(t),
      type: r.type,
      oneOf: r._whitelist.describe(),
      notOneOf: r._blacklist.describe(),
      tests: r.tests.filter((c, u, d) => d.findIndex((f) => f.OPTIONS.name === c.OPTIONS.name) === u).map((c) => {
        const u = c.OPTIONS.params && t ? dx(Object.assign({}, c.OPTIONS.params), t) : c.OPTIONS.params;
        return {
          name: c.OPTIONS.name,
          params: u
        };
      })
    };
  }
  get "~standard"() {
    const t = this;
    return {
      version: 1,
      vendor: "yup",
      async validate(i) {
        try {
          return {
            value: await t.validate(i, {
              abortEarly: !1
            })
          };
        } catch (o) {
          if (o instanceof tt)
            return {
              issues: px(o)
            };
          throw o;
        }
      }
    };
  }
}
Kt.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) Kt.prototype[`${e}At`] = function(t, r, i = {}) {
  const {
    parent: o,
    parentPath: s,
    schema: a
  } = nD(this, t, r, i.context);
  return a[e](o && o[s], Object.assign({}, i, {
    parent: o,
    path: t
  }));
};
for (const e of ["equals", "is"]) Kt.prototype[e] = Kt.prototype.oneOf;
for (const e of ["not", "nope"]) Kt.prototype[e] = Kt.prototype.notOneOf;
const oD = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function sD(e) {
  const t = Rc(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let r = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (r = 0 - r)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond);
}
function Rc(e) {
  var t, r;
  const i = oD.exec(e);
  return i ? {
    year: tn(i[1]),
    month: tn(i[2], 1) - 1,
    day: tn(i[3], 1),
    hour: tn(i[4]),
    minute: tn(i[5]),
    second: tn(i[6]),
    millisecond: i[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      tn(i[7].substring(0, 3))
    ) : 0,
    precision: (t = (r = i[7]) == null ? void 0 : r.length) != null ? t : void 0,
    z: i[8] || void 0,
    plusMinus: i[9] || void 0,
    hourOffset: tn(i[10]),
    minuteOffset: tn(i[11])
  } : null;
}
function tn(e, t = 0) {
  return Number(e) || t;
}
let aD = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), lD = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), cD = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, uD = "^\\d{4}-\\d{2}-\\d{2}", dD = "\\d{2}:\\d{2}:\\d{2}", fD = "(([+-]\\d{2}(:?\\d{2})?)|Z)", pD = new RegExp(`${uD}T${dD}(\\.\\d+)?${fD}$`), hD = (e) => Xn(e) || e === e.trim(), mD = {}.toString();
function ns() {
  return new hx();
}
class hx extends Kt {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      }
    }), this.withMutation(() => {
      this.transform((t, r) => {
        if (!this.spec.coerce || this.isType(t) || Array.isArray(t)) return t;
        const i = t != null && t.toString ? t.toString() : t;
        return i === mD ? t : i;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((r) => r.test({
      message: t || Ut.required,
      name: "required",
      skipAbsent: !0,
      test: (i) => !!i.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((r) => r.OPTIONS.name !== "required"), t));
  }
  length(t, r = st.length) {
    return this.test({
      message: r,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(i) {
        return i.length === this.resolve(t);
      }
    });
  }
  min(t, r = st.min) {
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(i) {
        return i.length >= this.resolve(t);
      }
    });
  }
  max(t, r = st.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: r,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(i) {
        return i.length <= this.resolve(t);
      }
    });
  }
  matches(t, r) {
    let i = !1, o, s;
    return r && (typeof r == "object" ? {
      excludeEmptyString: i = !1,
      message: o,
      name: s
    } = r : o = r), this.test({
      name: s || "matches",
      message: o || st.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (a) => a === "" && i || a.search(t) !== -1
    });
  }
  email(t = st.email) {
    return this.matches(aD, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = st.url) {
    return this.matches(lD, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = st.uuid) {
    return this.matches(cD, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let r = "", i, o;
    return t && (typeof t == "object" ? {
      message: r = "",
      allowOffset: i = !1,
      precision: o = void 0
    } = t : r = t), this.matches(pD, {
      name: "datetime",
      message: r || st.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: r || st.datetime_offset,
      params: {
        allowOffset: i
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || i) return !0;
        const a = Rc(s);
        return a ? !!a.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: r || st.datetime_precision,
      params: {
        precision: o
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || o == null) return !0;
        const a = Rc(s);
        return a ? a.precision === o : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = st.trim) {
    return this.transform((r) => r != null ? r.trim() : r).test({
      message: t,
      name: "trim",
      test: hD
    });
  }
  lowercase(t = st.lowercase) {
    return this.transform((r) => Xn(r) ? r : r.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Xn(r) || r === r.toLowerCase()
    });
  }
  uppercase(t = st.uppercase) {
    return this.transform((r) => Xn(r) ? r : r.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (r) => Xn(r) || r === r.toUpperCase()
    });
  }
}
ns.prototype = hx.prototype;
let gD = /* @__PURE__ */ new Date(""), yD = (e) => Object.prototype.toString.call(e) === "[object Date]";
class hd extends Kt {
  constructor() {
    super({
      type: "date",
      check(t) {
        return yD(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, r) => !this.spec.coerce || this.isType(t) || t === null ? t : (t = sD(t), isNaN(t) ? hd.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, r) {
    let i;
    if (xr.isRef(t))
      i = t;
    else {
      let o = this.cast(t);
      if (!this._typeCheck(o)) throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
      i = o;
    }
    return i;
  }
  min(t, r = kc.min) {
    let i = this.prepareParam(t, "min");
    return this.test({
      message: r,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(o) {
        return o >= this.resolve(i);
      }
    });
  }
  max(t, r = kc.max) {
    let i = this.prepareParam(t, "max");
    return this.test({
      message: r,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(o) {
        return o <= this.resolve(i);
      }
    });
  }
}
hd.INVALID_DATE = gD;
function bD(e, t = []) {
  let r = [], i = /* @__PURE__ */ new Set(), o = new Set(t.map(([a, l]) => `${a}-${l}`));
  function s(a, l) {
    let c = nr.split(a)[0];
    i.add(c), o.has(`${l}-${c}`) || r.push([l, c]);
  }
  for (const a of Object.keys(e)) {
    let l = e[a];
    i.add(a), xr.isRef(l) && l.isSibling ? s(l.path, a) : pd(l) && "deps" in l && l.deps.forEach((c) => s(c, a));
  }
  return U$.array(Array.from(i), r).reverse();
}
function fh(e, t) {
  let r = 1 / 0;
  return e.some((i, o) => {
    var s;
    if ((s = t.path) != null && s.includes(i))
      return r = o, !0;
  }), r;
}
function mx(e) {
  return (t, r) => fh(e, t) - fh(e, r);
}
const xD = (e, t, r) => {
  if (typeof e != "string")
    return e;
  let i = e;
  try {
    i = JSON.parse(e);
  } catch {
  }
  return r.isType(i) ? i : e;
};
function rs(e) {
  if ("fields" in e) {
    const t = {};
    for (const [r, i] of Object.entries(e.fields))
      t[r] = rs(i);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = rs(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(rs)
  }) : "optional" in e ? e.optional() : e;
}
const vD = (e, t) => {
  const r = [...nr.normalizePath(t)];
  if (r.length === 1) return r[0] in e;
  let i = r.pop(), o = nr.getter(nr.join(r), !0)(e);
  return !!(o && i in o);
};
let ph = (e) => Object.prototype.toString.call(e) === "[object Object]";
function hh(e, t) {
  let r = Object.keys(e.fields);
  return Object.keys(t).filter((i) => r.indexOf(i) === -1);
}
const OD = mx([]);
function gx(e) {
  return new yx(e);
}
class yx extends Kt {
  constructor(t) {
    super({
      type: "object",
      check(r) {
        return ph(r) || typeof r == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = OD, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, r = {}) {
    var i;
    let o = super._cast(t, r);
    if (o === void 0) return this.getDefault(r);
    if (!this._typeCheck(o)) return o;
    let s = this.fields, a = (i = r.stripUnknown) != null ? i : this.spec.noUnknown, l = [].concat(this._nodes, Object.keys(o).filter((f) => !this._nodes.includes(f))), c = {}, u = Object.assign({}, r, {
      parent: c,
      __validating: r.__validating || !1
    }), d = !1;
    for (const f of l) {
      let p = s[f], h = f in o, g = o[f];
      if (p) {
        let m;
        u.path = (r.path ? `${r.path}.` : "") + f, p = p.resolve({
          value: g,
          context: r.context,
          parent: c
        });
        let y = p instanceof Kt ? p.spec : void 0, b = y?.strict;
        if (y != null && y.strip) {
          d = d || f in o;
          continue;
        }
        m = !r.__validating || !b ? p.cast(g, u) : g, m !== void 0 && (c[f] = m);
      } else h && !a && (c[f] = g);
      (h !== f in c || c[f] !== g) && (d = !0);
    }
    return d ? c : o;
  }
  _validate(t, r = {}, i, o) {
    let {
      from: s = [],
      originalValue: a = t,
      recursive: l = this.spec.recursive
    } = r;
    r.from = [{
      schema: this,
      value: a
    }, ...s], r.__validating = !0, r.originalValue = a, super._validate(t, r, i, (c, u) => {
      if (!l || !ph(u)) {
        o(c, u);
        return;
      }
      a = a || u;
      let d = [];
      for (let f of this._nodes) {
        let p = this.fields[f];
        !p || xr.isRef(p) || d.push(p.asNestedTest({
          options: r,
          key: f,
          parent: u,
          parentPath: r.path,
          originalParent: a
        }));
      }
      this.runTests({
        tests: d,
        value: u,
        originalValue: a,
        options: r
      }, i, (f) => {
        o(f.sort(this._sortErrors).concat(c), u);
      });
    });
  }
  clone(t) {
    const r = super.clone(t);
    return r.fields = Object.assign({}, this.fields), r._nodes = this._nodes, r._excludedEdges = this._excludedEdges, r._sortErrors = this._sortErrors, r;
  }
  concat(t) {
    let r = super.concat(t), i = r.fields;
    for (let [o, s] of Object.entries(this.fields)) {
      const a = i[o];
      i[o] = a === void 0 ? s : a;
    }
    return r.withMutation((o) => (
      // XXX: excludes here is wrong
      o.setFields(i, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let r = {};
    return this._nodes.forEach((i) => {
      var o;
      const s = this.fields[i];
      let a = t;
      (o = a) != null && o.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[i]
      })), r[i] = s && "getDefault" in s ? s.getDefault(a) : void 0;
    }), r;
  }
  setFields(t, r) {
    let i = this.clone();
    return i.fields = t, i._nodes = bD(t, r), i._sortErrors = mx(Object.keys(t)), r && (i._excludedEdges = r), i;
  }
  shape(t, r = []) {
    return this.clone().withMutation((i) => {
      let o = i._excludedEdges;
      return r.length && (Array.isArray(r[0]) || (r = [r]), o = [...i._excludedEdges, ...r]), i.setFields(Object.assign(i.fields, t), o);
    });
  }
  partial() {
    const t = {};
    for (const [r, i] of Object.entries(this.fields))
      t[r] = "optional" in i && i.optional instanceof Function ? i.optional() : i;
    return this.setFields(t);
  }
  deepPartial() {
    return rs(this);
  }
  pick(t) {
    const r = {};
    for (const i of t)
      this.fields[i] && (r[i] = this.fields[i]);
    return this.setFields(r, this._excludedEdges.filter(([i, o]) => t.includes(i) && t.includes(o)));
  }
  omit(t) {
    const r = [];
    for (const i of Object.keys(this.fields))
      t.includes(i) || r.push(i);
    return this.pick(r);
  }
  from(t, r, i) {
    let o = nr.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let a = s;
      return vD(s, t) && (a = Object.assign({}, s), i || delete a[t], a[r] = o(s)), a;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(xD);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || ts.exact,
      test(r) {
        if (r == null) return !0;
        const i = hh(this.schema, r);
        return i.length === 0 || this.createError({
          params: {
            properties: i.join(", ")
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
  noUnknown(t = !0, r = ts.noUnknown) {
    typeof t != "boolean" && (r = t, t = !0);
    let i = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: r,
      test(o) {
        if (o == null) return !0;
        const s = hh(this.schema, o);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return i.spec.noUnknown = t, i;
  }
  unknown(t = !0, r = ts.noUnknown) {
    return this.noUnknown(!t, r);
  }
  transformKeys(t) {
    return this.transform((r) => {
      if (!r) return r;
      const i = {};
      for (const o of Object.keys(r)) i[t(o)] = r[o];
      return i;
    });
  }
  camelCase() {
    return this.transformKeys(_l.camelCase);
  }
  snakeCase() {
    return this.transformKeys(_l.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => _l.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const r = (t ? this.resolve(t) : this).clone(), i = super.describe(t);
    i.fields = {};
    for (const [s, a] of Object.entries(r.fields)) {
      var o;
      let l = t;
      (o = l) != null && o.value && (l = Object.assign({}, l, {
        parent: l.value,
        value: l.value[s]
      })), i.fields[s] = a.describe(l);
    }
    return i;
  }
}
gx.prototype = yx.prototype;
const TD = ({ isSubmitting: e }) => /* @__PURE__ */ x.jsx(
  En,
  {
    type: "submit",
    fullWidth: !0,
    variant: "contained",
    sx: { mt: 3, mb: 2 },
    disabled: e,
    children: e ? /* @__PURE__ */ x.jsx(ni, { size: 24 }) : "Sign In"
  }
), SD = (e, t) => gx({
  [e.name]: ns().required(`${e.label} is required`).test(
    "is-email-if-required",
    "Enter a valid email",
    (r) => e.name === "email" ? ns().email().isValidSync(r) : !0
  ),
  // Add password validation only if the field is present
  ...t && {
    [t.name]: ns().required(`${t.label} is required`)
  }
}), fN = ({
  onSubmit: e,
  isSubmitting: t = !1,
  error: r,
  logo: i,
  title: o = "Sign in to your account",
  loginField: s = { name: "email", label: "Email Address", autoComplete: "email" },
  passwordField: a = { name: "password", label: "Password", autoComplete: "current-password" },
  validationSchema: l,
  renderActions: c = TD
}) => {
  const u = l || SD(s, a);
  return /* @__PURE__ */ x.jsx(i0, { component: "main", maxWidth: "xs", children: /* @__PURE__ */ x.jsxs(
    gn,
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
        i && /* @__PURE__ */ x.jsx(Ie, { mb: 2, children: i }),
        /* @__PURE__ */ x.jsx(Be, { component: "h1", variant: "h5", children: o }),
        r && /* @__PURE__ */ x.jsx(Ll, { severity: "error", sx: { width: "100%", mt: 2 }, children: r.message }),
        /* @__PURE__ */ x.jsx(Ie, { sx: { mt: 1, width: "100%" }, children: /* @__PURE__ */ x.jsxs(
          pm,
          {
            onSubmit: e,
            validationSchema: u,
            noValidate: !0,
            children: [
              /* @__PURE__ */ x.jsx(
                cf,
                {
                  margin: "normal",
                  required: !0,
                  fullWidth: !0,
                  id: s.name,
                  label: s.label,
                  name: s.name,
                  autoComplete: s.autoComplete,
                  autoFocus: !0
                }
              ),
              a && /* @__PURE__ */ x.jsx(
                cf,
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
              c({ isSubmitting: t })
            ]
          }
        ) })
      ]
    }
  ) });
}, _r = 240, pN = ({
  navItems: e = [],
  title: t = "Dashboard",
  drawerHeader: r,
  headerActions: i,
  children: o
}) => {
  const s = o0(), a = s0(s.breakpoints.up("sm")), [l, c] = Re(!1), [u, d] = Re(!0), f = () => {
    a ? d(!u) : c(!l);
  }, p = /* @__PURE__ */ x.jsxs(Ie, { children: [
    r ? /* @__PURE__ */ x.jsx(Zn, { sx: { justifyContent: "center" }, children: r }) : null,
    /* @__PURE__ */ x.jsx(a0, { children: e.map((h, g) => {
      const m = h.component || "a", y = m !== "a" ? { to: h.path } : { href: h.path };
      return /* @__PURE__ */ x.jsx(l0, { disablePadding: !0, children: /* @__PURE__ */ x.jsxs(c0, { component: m, ...y, children: [
        h.icon && /* @__PURE__ */ x.jsx(u0, { children: h.icon }),
        /* @__PURE__ */ x.jsx(d0, { primary: h.text })
      ] }) }, g);
    }) })
  ] });
  return /* @__PURE__ */ x.jsxs(Ie, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ x.jsx(f0, {}),
    /* @__PURE__ */ x.jsx(
      p0,
      {
        position: "fixed",
        sx: {
          width: {
            sm: u ? `calc(100% - ${_r}px)` : "100%"
          },
          ml: {
            sm: u ? `${_r}px` : 0
          },
          transition: s.transitions.create(["width", "margin"], {
            easing: s.transitions.easing.sharp,
            duration: s.transitions.duration.leavingScreen
          })
        },
        children: /* @__PURE__ */ x.jsxs(Zn, { children: [
          /* @__PURE__ */ x.jsx(
            ji,
            {
              color: "primary",
              "aria-label": "open drawer",
              edge: "start",
              onClick: f,
              sx: { mr: 2 },
              children: /* @__PURE__ */ x.jsx(T0, {})
            }
          ),
          /* @__PURE__ */ x.jsx(Be, { variant: "h6", noWrap: !0, color: "primary", component: "div", sx: { flexGrow: 1 }, children: t }),
          i
        ] })
      }
    ),
    /* @__PURE__ */ x.jsxs(
      Ie,
      {
        component: "nav",
        sx: { width: { sm: _r }, flexShrink: { sm: 0 } },
        "aria-label": "mailbox folders",
        children: [
          /* @__PURE__ */ x.jsx(
            Od,
            {
              variant: "temporary",
              open: l,
              onClose: f,
              ModalProps: {
                keepMounted: !0
                // Better open performance on mobile.
              },
              sx: {
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: _r }
              },
              children: p
            }
          ),
          /* @__PURE__ */ x.jsx(
            Od,
            {
              variant: "persistent",
              sx: {
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: _r }
              },
              open: u,
              children: p
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ x.jsxs(
      Ie,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${u ? _r : 0}px)` },
          ml: { sm: 0 },
          minHeight: "100vh",
          backgroundColor: (h) => h.palette.grey[100],
          transition: s.transitions.create(["width", "margin"], {
            easing: s.transitions.easing.sharp,
            duration: s.transitions.duration.leavingScreen
          })
        },
        children: [
          /* @__PURE__ */ x.jsx(Zn, {}),
          o
        ]
      }
    )
  ] });
};
function bx(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: wD } = Object.prototype, { getPrototypeOf: md } = Object, { iterator: qa, toStringTag: xx } = Symbol, za = /* @__PURE__ */ ((e) => (t) => {
  const r = wD.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), qt = (e) => (e = e.toLowerCase(), (t) => za(t) === e), Ba = (e) => (t) => typeof t === e, { isArray: di } = Array, ei = Ba("undefined");
function vo(e) {
  return e !== null && !ei(e) && e.constructor !== null && !ei(e.constructor) && pt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const vx = qt("ArrayBuffer");
function CD(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && vx(e.buffer), t;
}
const ED = Ba("string"), pt = Ba("function"), Ox = Ba("number"), Oo = (e) => e !== null && typeof e == "object", kD = (e) => e === !0 || e === !1, is = (e) => {
  if (za(e) !== "object")
    return !1;
  const t = md(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(xx in e) && !(qa in e);
}, RD = (e) => {
  if (!Oo(e) || vo(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, AD = qt("Date"), PD = qt("File"), ID = qt("Blob"), MD = qt("FileList"), _D = (e) => Oo(e) && pt(e.pipe), jD = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || pt(e.append) && ((t = za(e)) === "formdata" || // detect form-data instance
  t === "object" && pt(e.toString) && e.toString() === "[object FormData]"));
}, $D = qt("URLSearchParams"), [DD, LD, ND, FD] = ["ReadableStream", "Request", "Response", "Headers"].map(qt), qD = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function To(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let i, o;
  if (typeof e != "object" && (e = [e]), di(e))
    for (i = 0, o = e.length; i < o; i++)
      t.call(null, e[i], i, e);
  else {
    if (vo(e))
      return;
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = s.length;
    let l;
    for (i = 0; i < a; i++)
      l = s[i], t.call(null, e[l], l, e);
  }
}
function Tx(e, t) {
  if (vo(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let i = r.length, o;
  for (; i-- > 0; )
    if (o = r[i], t === o.toLowerCase())
      return o;
  return null;
}
const Kn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Sx = (e) => !ei(e) && e !== Kn;
function Ac() {
  const { caseless: e, skipUndefined: t } = Sx(this) && this || {}, r = {}, i = (o, s) => {
    const a = e && Tx(r, s) || s;
    is(r[a]) && is(o) ? r[a] = Ac(r[a], o) : is(o) ? r[a] = Ac({}, o) : di(o) ? r[a] = o.slice() : (!t || !ei(o)) && (r[a] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && To(arguments[o], i);
  return r;
}
const zD = (e, t, r, { allOwnKeys: i } = {}) => (To(t, (o, s) => {
  r && pt(o) ? e[s] = bx(o, r) : e[s] = o;
}, { allOwnKeys: i }), e), BD = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), VD = (e, t, r, i) => {
  e.prototype = Object.create(t.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, UD = (e, t, r, i) => {
  let o, s, a;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      a = o[s], (!i || i(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = r !== !1 && md(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, HD = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const i = e.indexOf(t, r);
  return i !== -1 && i === r;
}, GD = (e) => {
  if (!e) return null;
  if (di(e)) return e;
  let t = e.length;
  if (!Ox(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, WD = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && md(Uint8Array)), YD = (e, t) => {
  const i = (e && e[qa]).call(e);
  let o;
  for (; (o = i.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, XD = (e, t) => {
  let r;
  const i = [];
  for (; (r = e.exec(t)) !== null; )
    i.push(r);
  return i;
}, KD = qt("HTMLFormElement"), ZD = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, i, o) {
    return i.toUpperCase() + o;
  }
), mh = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), JD = qt("RegExp"), wx = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), i = {};
  To(r, (o, s) => {
    let a;
    (a = t(o, s, e)) !== !1 && (i[s] = a || o);
  }), Object.defineProperties(e, i);
}, QD = (e) => {
  wx(e, (t, r) => {
    if (pt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const i = e[r];
    if (pt(i)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, eL = (e, t) => {
  const r = {}, i = (o) => {
    o.forEach((s) => {
      r[s] = !0;
    });
  };
  return di(e) ? i(e) : i(String(e).split(t)), r;
}, tL = () => {
}, nL = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function rL(e) {
  return !!(e && pt(e.append) && e[xx] === "FormData" && e[qa]);
}
const iL = (e) => {
  const t = new Array(10), r = (i, o) => {
    if (Oo(i)) {
      if (t.indexOf(i) >= 0)
        return;
      if (vo(i))
        return i;
      if (!("toJSON" in i)) {
        t[o] = i;
        const s = di(i) ? [] : {};
        return To(i, (a, l) => {
          const c = r(a, o + 1);
          !ei(c) && (s[l] = c);
        }), t[o] = void 0, s;
      }
    }
    return i;
  };
  return r(e, 0);
}, oL = qt("AsyncFunction"), sL = (e) => e && (Oo(e) || pt(e)) && pt(e.then) && pt(e.catch), Cx = ((e, t) => e ? setImmediate : t ? ((r, i) => (Kn.addEventListener("message", ({ source: o, data: s }) => {
  o === Kn && s === r && i.length && i.shift()();
}, !1), (o) => {
  i.push(o), Kn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  pt(Kn.postMessage)
), aL = typeof queueMicrotask < "u" ? queueMicrotask.bind(Kn) : typeof process < "u" && process.nextTick || Cx, lL = (e) => e != null && pt(e[qa]), q = {
  isArray: di,
  isArrayBuffer: vx,
  isBuffer: vo,
  isFormData: jD,
  isArrayBufferView: CD,
  isString: ED,
  isNumber: Ox,
  isBoolean: kD,
  isObject: Oo,
  isPlainObject: is,
  isEmptyObject: RD,
  isReadableStream: DD,
  isRequest: LD,
  isResponse: ND,
  isHeaders: FD,
  isUndefined: ei,
  isDate: AD,
  isFile: PD,
  isBlob: ID,
  isRegExp: JD,
  isFunction: pt,
  isStream: _D,
  isURLSearchParams: $D,
  isTypedArray: WD,
  isFileList: MD,
  forEach: To,
  merge: Ac,
  extend: zD,
  trim: qD,
  stripBOM: BD,
  inherits: VD,
  toFlatObject: UD,
  kindOf: za,
  kindOfTest: qt,
  endsWith: HD,
  toArray: GD,
  forEachEntry: YD,
  matchAll: XD,
  isHTMLForm: KD,
  hasOwnProperty: mh,
  hasOwnProp: mh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wx,
  freezeMethods: QD,
  toObjectSet: eL,
  toCamelCase: ZD,
  noop: tL,
  toFiniteNumber: nL,
  findKey: Tx,
  global: Kn,
  isContextDefined: Sx,
  isSpecCompliantForm: rL,
  toJSONObject: iL,
  isAsyncFn: oL,
  isThenable: sL,
  setImmediate: Cx,
  asap: aL,
  isIterable: lL
};
function ue(e, t, r, i, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), i && (this.request = i), o && (this.response = o, this.status = o.status ? o.status : null);
}
q.inherits(ue, Error, {
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
      config: q.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ex = ue.prototype, kx = {};
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
].forEach((e) => {
  kx[e] = { value: e };
});
Object.defineProperties(ue, kx);
Object.defineProperty(Ex, "isAxiosError", { value: !0 });
ue.from = (e, t, r, i, o, s) => {
  const a = Object.create(Ex);
  q.toFlatObject(e, a, function(d) {
    return d !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const l = e && e.message ? e.message : "Error", c = t == null && e ? e.code : t;
  return ue.call(a, l, c, r, i, o), e && a.cause == null && Object.defineProperty(a, "cause", { value: e, configurable: !0 }), a.name = e && e.name || "Error", s && Object.assign(a, s), a;
};
const cL = null;
function Pc(e) {
  return q.isPlainObject(e) || q.isArray(e);
}
function Rx(e) {
  return q.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gh(e, t, r) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Rx(o), !r && s ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function uL(e) {
  return q.isArray(e) && !e.some(Pc);
}
const dL = q.toFlatObject(q, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Va(e, t, r) {
  if (!q.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = q.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, y) {
    return !q.isUndefined(y[m]);
  });
  const i = r.metaTokens, o = r.visitor || d, s = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && q.isSpecCompliantForm(t);
  if (!q.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (q.isDate(g))
      return g.toISOString();
    if (q.isBoolean(g))
      return g.toString();
    if (!c && q.isBlob(g))
      throw new ue("Blob is not supported. Use a Buffer instead.");
    return q.isArrayBuffer(g) || q.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function d(g, m, y) {
    let b = g;
    if (g && !y && typeof g == "object") {
      if (q.endsWith(m, "{}"))
        m = i ? m : m.slice(0, -2), g = JSON.stringify(g);
      else if (q.isArray(g) && uL(g) || (q.isFileList(g) || q.endsWith(m, "[]")) && (b = q.toArray(g)))
        return m = Rx(m), b.forEach(function(C, v) {
          !(q.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? gh([m], v, s) : a === null ? m : m + "[]",
            u(C)
          );
        }), !1;
    }
    return Pc(g) ? !0 : (t.append(gh(y, m, s), u(g)), !1);
  }
  const f = [], p = Object.assign(dL, {
    defaultVisitor: d,
    convertValue: u,
    isVisitable: Pc
  });
  function h(g, m) {
    if (!q.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(g), q.forEach(g, function(b, S) {
        (!(q.isUndefined(b) || b === null) && o.call(
          t,
          b,
          q.isString(S) ? S.trim() : S,
          m,
          p
        )) === !0 && h(b, m ? m.concat(S) : [S]);
      }), f.pop();
    }
  }
  if (!q.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function yh(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(i) {
    return t[i];
  });
}
function gd(e, t) {
  this._pairs = [], e && Va(e, this, t);
}
const Ax = gd.prototype;
Ax.append = function(t, r) {
  this._pairs.push([t, r]);
};
Ax.toString = function(t) {
  const r = t ? function(i) {
    return t.call(this, i, yh);
  } : yh;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function fL(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Px(e, t, r) {
  if (!t)
    return e;
  const i = r && r.encode || fL;
  q.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let s;
  if (o ? s = o(t, r) : s = q.isURLSearchParams(t) ? t.toString() : new gd(t, r).toString(i), s) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class bh {
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
  use(t, r, i) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: i ? i.synchronous : !1,
      runWhen: i ? i.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
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
  forEach(t) {
    q.forEach(this.handlers, function(i) {
      i !== null && t(i);
    });
  }
}
const Ix = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, pL = typeof URLSearchParams < "u" ? URLSearchParams : gd, hL = typeof FormData < "u" ? FormData : null, mL = typeof Blob < "u" ? Blob : null, gL = {
  isBrowser: !0,
  classes: {
    URLSearchParams: pL,
    FormData: hL,
    Blob: mL
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, yd = typeof window < "u" && typeof document < "u", Ic = typeof navigator == "object" && navigator || void 0, yL = yd && (!Ic || ["ReactNative", "NativeScript", "NS"].indexOf(Ic.product) < 0), bL = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xL = yd && window.location.href || "http://localhost", vL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: yd,
  hasStandardBrowserEnv: yL,
  hasStandardBrowserWebWorkerEnv: bL,
  navigator: Ic,
  origin: xL
}, Symbol.toStringTag, { value: "Module" })), Ze = {
  ...vL,
  ...gL
};
function OL(e, t) {
  return Va(e, new Ze.classes.URLSearchParams(), {
    visitor: function(r, i, o, s) {
      return Ze.isNode && q.isBuffer(r) ? (this.append(i, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function TL(e) {
  return q.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function SL(e) {
  const t = {}, r = Object.keys(e);
  let i;
  const o = r.length;
  let s;
  for (i = 0; i < o; i++)
    s = r[i], t[s] = e[s];
  return t;
}
function Mx(e) {
  function t(r, i, o, s) {
    let a = r[s++];
    if (a === "__proto__") return !0;
    const l = Number.isFinite(+a), c = s >= r.length;
    return a = !a && q.isArray(o) ? o.length : a, c ? (q.hasOwnProp(o, a) ? o[a] = [o[a], i] : o[a] = i, !l) : ((!o[a] || !q.isObject(o[a])) && (o[a] = []), t(r, i, o[a], s) && q.isArray(o[a]) && (o[a] = SL(o[a])), !l);
  }
  if (q.isFormData(e) && q.isFunction(e.entries)) {
    const r = {};
    return q.forEachEntry(e, (i, o) => {
      t(TL(i), o, r, 0);
    }), r;
  }
  return null;
}
function wL(e, t, r) {
  if (q.isString(e))
    try {
      return (t || JSON.parse)(e), q.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (r || JSON.stringify)(e);
}
const So = {
  transitional: Ix,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const i = r.getContentType() || "", o = i.indexOf("application/json") > -1, s = q.isObject(t);
    if (s && q.isHTMLForm(t) && (t = new FormData(t)), q.isFormData(t))
      return o ? JSON.stringify(Mx(t)) : t;
    if (q.isArrayBuffer(t) || q.isBuffer(t) || q.isStream(t) || q.isFile(t) || q.isBlob(t) || q.isReadableStream(t))
      return t;
    if (q.isArrayBufferView(t))
      return t.buffer;
    if (q.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (i.indexOf("application/x-www-form-urlencoded") > -1)
        return OL(t, this.formSerializer).toString();
      if ((l = q.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Va(
          l ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || o ? (r.setContentType("application/json", !1), wL(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || So.transitional, i = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (q.isResponse(t) || q.isReadableStream(t))
      return t;
    if (t && q.isString(t) && (i && !this.responseType || o)) {
      const a = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (l) {
        if (a)
          throw l.name === "SyntaxError" ? ue.from(l, ue.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
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
    FormData: Ze.classes.FormData,
    Blob: Ze.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
q.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  So.headers[e] = {};
});
const CL = q.toObjectSet([
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
]), EL = (e) => {
  const t = {};
  let r, i, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), i = a.substring(o + 1).trim(), !(!r || t[r] && CL[r]) && (r === "set-cookie" ? t[r] ? t[r].push(i) : t[r] = [i] : t[r] = t[r] ? t[r] + ", " + i : i);
  }), t;
}, xh = Symbol("internals");
function Ci(e) {
  return e && String(e).trim().toLowerCase();
}
function os(e) {
  return e === !1 || e == null ? e : q.isArray(e) ? e.map(os) : String(e);
}
function kL(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; i = r.exec(e); )
    t[i[1]] = i[2];
  return t;
}
const RL = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function jl(e, t, r, i, o) {
  if (q.isFunction(i))
    return i.call(this, t, r);
  if (o && (t = r), !!q.isString(t)) {
    if (q.isString(i))
      return t.indexOf(i) !== -1;
    if (q.isRegExp(i))
      return i.test(t);
  }
}
function AL(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, i) => r.toUpperCase() + i);
}
function PL(e, t) {
  const r = q.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + r, {
      value: function(o, s, a) {
        return this[i].call(this, t, o, s, a);
      },
      configurable: !0
    });
  });
}
let ht = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, i) {
    const o = this;
    function s(l, c, u) {
      const d = Ci(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = q.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || u === void 0 && o[f] !== !1) && (o[f || c] = os(l));
    }
    const a = (l, c) => q.forEach(l, (u, d) => s(u, d, c));
    if (q.isPlainObject(t) || t instanceof this.constructor)
      a(t, r);
    else if (q.isString(t) && (t = t.trim()) && !RL(t))
      a(EL(t), r);
    else if (q.isObject(t) && q.isIterable(t)) {
      let l = {}, c, u;
      for (const d of t) {
        if (!q.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[u = d[0]] = (c = l[u]) ? q.isArray(c) ? [...c, d[1]] : [c, d[1]] : d[1];
      }
      a(l, r);
    } else
      t != null && s(r, t, i);
    return this;
  }
  get(t, r) {
    if (t = Ci(t), t) {
      const i = q.findKey(this, t);
      if (i) {
        const o = this[i];
        if (!r)
          return o;
        if (r === !0)
          return kL(o);
        if (q.isFunction(r))
          return r.call(this, o, i);
        if (q.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Ci(t), t) {
      const i = q.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!r || jl(this, this[i], i, r)));
    }
    return !1;
  }
  delete(t, r) {
    const i = this;
    let o = !1;
    function s(a) {
      if (a = Ci(a), a) {
        const l = q.findKey(i, a);
        l && (!r || jl(i, i[l], l, r)) && (delete i[l], o = !0);
      }
    }
    return q.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let i = r.length, o = !1;
    for (; i--; ) {
      const s = r[i];
      (!t || jl(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, i = {};
    return q.forEach(this, (o, s) => {
      const a = q.findKey(i, s);
      if (a) {
        r[a] = os(o), delete r[s];
        return;
      }
      const l = t ? AL(s) : String(s).trim();
      l !== s && delete r[s], r[l] = os(o), i[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return q.forEach(this, (i, o) => {
      i != null && i !== !1 && (r[o] = t && q.isArray(i) ? i.join(", ") : i);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const i = new this(t);
    return r.forEach((o) => i.set(o)), i;
  }
  static accessor(t) {
    const i = (this[xh] = this[xh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const l = Ci(a);
      i[l] || (PL(o, a), i[l] = !0);
    }
    return q.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
q.reduceDescriptors(ht.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[r] = i;
    }
  };
});
q.freezeMethods(ht);
function $l(e, t) {
  const r = this || So, i = t || r, o = ht.from(i.headers);
  let s = i.data;
  return q.forEach(e, function(l) {
    s = l.call(r, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function _x(e) {
  return !!(e && e.__CANCEL__);
}
function fi(e, t, r) {
  ue.call(this, e ?? "canceled", ue.ERR_CANCELED, t, r), this.name = "CanceledError";
}
q.inherits(fi, ue, {
  __CANCEL__: !0
});
function jx(e, t, r) {
  const i = r.config.validateStatus;
  !r.status || !i || i(r.status) ? e(r) : t(new ue(
    "Request failed with status code " + r.status,
    [ue.ERR_BAD_REQUEST, ue.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function IL(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ML(e, t) {
  e = e || 10;
  const r = new Array(e), i = new Array(e);
  let o = 0, s = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = i[s];
    a || (a = u), r[o] = c, i[o] = u;
    let f = s, p = 0;
    for (; f !== o; )
      p += r[f++], f = f % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - a < t)
      return;
    const h = d && u - d;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function _L(e, t) {
  let r = 0, i = 1e3 / t, o, s;
  const a = (u, d = Date.now()) => {
    r = d, o = null, s && (clearTimeout(s), s = null), e(...u);
  };
  return [(...u) => {
    const d = Date.now(), f = d - r;
    f >= i ? a(u, d) : (o = u, s || (s = setTimeout(() => {
      s = null, a(o);
    }, i - f)));
  }, () => o && a(o)];
}
const Ls = (e, t, r = 3) => {
  let i = 0;
  const o = ML(50, 250);
  return _L((s) => {
    const a = s.loaded, l = s.lengthComputable ? s.total : void 0, c = a - i, u = o(c), d = a <= l;
    i = a;
    const f = {
      loaded: a,
      total: l,
      progress: l ? a / l : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && l && d ? (l - a) / u : void 0,
      event: s,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, r);
}, vh = (e, t) => {
  const r = e != null;
  return [(i) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: i
  }), t[1]];
}, Oh = (e) => (...t) => q.asap(() => e(...t)), jL = Ze.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, Ze.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(Ze.origin),
  Ze.navigator && /(msie|trident)/i.test(Ze.navigator.userAgent)
) : () => !0, $L = Ze.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, i, o, s, a) {
      if (typeof document > "u") return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      q.isNumber(r) && l.push(`expires=${new Date(r).toUTCString()}`), q.isString(i) && l.push(`path=${i}`), q.isString(o) && l.push(`domain=${o}`), s === !0 && l.push("secure"), q.isString(a) && l.push(`SameSite=${a}`), document.cookie = l.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
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
function DL(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function LL(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function $x(e, t, r) {
  let i = !DL(t);
  return e && (i || r == !1) ? LL(e, t) : t;
}
const Th = (e) => e instanceof ht ? { ...e } : e;
function cr(e, t) {
  t = t || {};
  const r = {};
  function i(u, d, f, p) {
    return q.isPlainObject(u) && q.isPlainObject(d) ? q.merge.call({ caseless: p }, u, d) : q.isPlainObject(d) ? q.merge({}, d) : q.isArray(d) ? d.slice() : d;
  }
  function o(u, d, f, p) {
    if (q.isUndefined(d)) {
      if (!q.isUndefined(u))
        return i(void 0, u, f, p);
    } else return i(u, d, f, p);
  }
  function s(u, d) {
    if (!q.isUndefined(d))
      return i(void 0, d);
  }
  function a(u, d) {
    if (q.isUndefined(d)) {
      if (!q.isUndefined(u))
        return i(void 0, u);
    } else return i(void 0, d);
  }
  function l(u, d, f) {
    if (f in t)
      return i(u, d);
    if (f in e)
      return i(void 0, u);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, d, f) => o(Th(u), Th(d), f, !0)
  };
  return q.forEach(Object.keys({ ...e, ...t }), function(d) {
    const f = c[d] || o, p = f(e[d], t[d], d);
    q.isUndefined(p) && f !== l || (r[d] = p);
  }), r;
}
const Dx = (e) => {
  const t = cr({}, e);
  let { data: r, withXSRFToken: i, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: l } = t;
  if (t.headers = a = ht.from(a), t.url = Px($x(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && a.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  ), q.isFormData(r)) {
    if (Ze.hasStandardBrowserEnv || Ze.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (q.isFunction(r.getHeaders)) {
      const c = r.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([d, f]) => {
        u.includes(d.toLowerCase()) && a.set(d, f);
      });
    }
  }
  if (Ze.hasStandardBrowserEnv && (i && q.isFunction(i) && (i = i(t)), i || i !== !1 && jL(t.url))) {
    const c = o && s && $L.read(s);
    c && a.set(o, c);
  }
  return t;
}, NL = typeof XMLHttpRequest < "u", FL = NL && function(e) {
  return new Promise(function(r, i) {
    const o = Dx(e);
    let s = o.data;
    const a = ht.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: c, onDownloadProgress: u } = o, d, f, p, h, g;
    function m() {
      h && h(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
    }
    let y = new XMLHttpRequest();
    y.open(o.method.toUpperCase(), o.url, !0), y.timeout = o.timeout;
    function b() {
      if (!y)
        return;
      const C = ht.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), O = {
        data: !l || l === "text" || l === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: C,
        config: e,
        request: y
      };
      jx(function(E) {
        r(E), m();
      }, function(E) {
        i(E), m();
      }, O), y = null;
    }
    "onloadend" in y ? y.onloadend = b : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, y.onabort = function() {
      y && (i(new ue("Request aborted", ue.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(v) {
      const O = v && v.message ? v.message : "Network Error", w = new ue(O, ue.ERR_NETWORK, e, y);
      w.event = v || null, i(w), y = null;
    }, y.ontimeout = function() {
      let v = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const O = o.transitional || Ix;
      o.timeoutErrorMessage && (v = o.timeoutErrorMessage), i(new ue(
        v,
        O.clarifyTimeoutError ? ue.ETIMEDOUT : ue.ECONNABORTED,
        e,
        y
      )), y = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in y && q.forEach(a.toJSON(), function(v, O) {
      y.setRequestHeader(O, v);
    }), q.isUndefined(o.withCredentials) || (y.withCredentials = !!o.withCredentials), l && l !== "json" && (y.responseType = o.responseType), u && ([p, g] = Ls(u, !0), y.addEventListener("progress", p)), c && y.upload && ([f, h] = Ls(c), y.upload.addEventListener("progress", f), y.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (d = (C) => {
      y && (i(!C || C.type ? new fi(null, e, y) : C), y.abort(), y = null);
    }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
    const S = IL(o.url);
    if (S && Ze.protocols.indexOf(S) === -1) {
      i(new ue("Unsupported protocol " + S + ":", ue.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(s || null);
  });
}, qL = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let i = new AbortController(), o;
    const s = function(u) {
      if (!o) {
        o = !0, l();
        const d = u instanceof Error ? u : this.reason;
        i.abort(d instanceof ue ? d : new fi(d instanceof Error ? d.message : d));
      }
    };
    let a = t && setTimeout(() => {
      a = null, s(new ue(`timeout ${t} of ms exceeded`, ue.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", s));
    const { signal: c } = i;
    return c.unsubscribe = () => q.asap(l), c;
  }
}, zL = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let i = 0, o;
  for (; i < r; )
    o = i + t, yield e.slice(i, o), i = o;
}, BL = async function* (e, t) {
  for await (const r of VL(e))
    yield* zL(r, t);
}, VL = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: i } = await t.read();
      if (r)
        break;
      yield i;
    }
  } finally {
    await t.cancel();
  }
}, Sh = (e, t, r, i) => {
  const o = BL(e, t);
  let s = 0, a, l = (c) => {
    a || (a = !0, i && i(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: u, value: d } = await o.next();
        if (u) {
          l(), c.close();
          return;
        }
        let f = d.byteLength;
        if (r) {
          let p = s += f;
          r(p);
        }
        c.enqueue(new Uint8Array(d));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(c) {
      return l(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, wh = 64 * 1024, { isFunction: Yo } = q, UL = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(q.global), {
  ReadableStream: Ch,
  TextEncoder: Eh
} = q.global, kh = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, HL = (e) => {
  e = q.merge.call({
    skipUndefined: !0
  }, UL, e);
  const { fetch: t, Request: r, Response: i } = e, o = t ? Yo(t) : typeof fetch == "function", s = Yo(r), a = Yo(i);
  if (!o)
    return !1;
  const l = o && Yo(Ch), c = o && (typeof Eh == "function" ? /* @__PURE__ */ ((g) => (m) => g.encode(m))(new Eh()) : async (g) => new Uint8Array(await new r(g).arrayBuffer())), u = s && l && kh(() => {
    let g = !1;
    const m = new r(Ze.origin, {
      body: new Ch(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }).headers.has("Content-Type");
    return g && !m;
  }), d = a && l && kh(() => q.isReadableStream(new i("").body)), f = {
    stream: d && ((g) => g.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !f[g] && (f[g] = (m, y) => {
      let b = m && m[g];
      if (b)
        return b.call(m);
      throw new ue(`Response type '${g}' is not supported`, ue.ERR_NOT_SUPPORT, y);
    });
  });
  const p = async (g) => {
    if (g == null)
      return 0;
    if (q.isBlob(g))
      return g.size;
    if (q.isSpecCompliantForm(g))
      return (await new r(Ze.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (q.isArrayBufferView(g) || q.isArrayBuffer(g))
      return g.byteLength;
    if (q.isURLSearchParams(g) && (g = g + ""), q.isString(g))
      return (await c(g)).byteLength;
  }, h = async (g, m) => {
    const y = q.toFiniteNumber(g.getContentLength());
    return y ?? p(m);
  };
  return async (g) => {
    let {
      url: m,
      method: y,
      data: b,
      signal: S,
      cancelToken: C,
      timeout: v,
      onDownloadProgress: O,
      onUploadProgress: w,
      responseType: E,
      headers: R,
      withCredentials: I = "same-origin",
      fetchOptions: j
    } = Dx(g), _ = t || fetch;
    E = E ? (E + "").toLowerCase() : "text";
    let T = qL([S, C && C.toAbortSignal()], v), M = null;
    const P = T && T.unsubscribe && (() => {
      T.unsubscribe();
    });
    let N;
    try {
      if (w && u && y !== "get" && y !== "head" && (N = await h(R, b)) !== 0) {
        let k = new r(m, {
          method: "POST",
          body: b,
          duplex: "half"
        }), B;
        if (q.isFormData(b) && (B = k.headers.get("content-type")) && R.setContentType(B), k.body) {
          const [G, W] = vh(
            N,
            Ls(Oh(w))
          );
          b = Sh(k.body, wh, G, W);
        }
      }
      q.isString(I) || (I = I ? "include" : "omit");
      const L = s && "credentials" in r.prototype, z = {
        ...j,
        signal: T,
        method: y.toUpperCase(),
        headers: R.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: L ? I : void 0
      };
      M = s && new r(m, z);
      let H = await (s ? _(M, j) : _(m, z));
      const Z = d && (E === "stream" || E === "response");
      if (d && (O || Z && P)) {
        const k = {};
        ["status", "statusText", "headers"].forEach((X) => {
          k[X] = H[X];
        });
        const B = q.toFiniteNumber(H.headers.get("content-length")), [G, W] = O && vh(
          B,
          Ls(Oh(O), !0)
        ) || [];
        H = new i(
          Sh(H.body, wh, G, () => {
            W && W(), P && P();
          }),
          k
        );
      }
      E = E || "text";
      let F = await f[q.findKey(f, E) || "text"](H, g);
      return !Z && P && P(), await new Promise((k, B) => {
        jx(k, B, {
          data: F,
          headers: ht.from(H.headers),
          status: H.status,
          statusText: H.statusText,
          config: g,
          request: M
        });
      });
    } catch (L) {
      throw P && P(), L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(
        new ue("Network Error", ue.ERR_NETWORK, g, M),
        {
          cause: L.cause || L
        }
      ) : ue.from(L, L && L.code, g, M);
    }
  };
}, GL = /* @__PURE__ */ new Map(), Lx = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: i, Response: o } = t, s = [
    i,
    o,
    r
  ];
  let a = s.length, l = a, c, u, d = GL;
  for (; l--; )
    c = s[l], u = d.get(c), u === void 0 && d.set(c, u = l ? /* @__PURE__ */ new Map() : HL(t)), d = u;
  return u;
};
Lx();
const bd = {
  http: cL,
  xhr: FL,
  fetch: {
    get: Lx
  }
};
q.forEach(bd, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Rh = (e) => `- ${e}`, WL = (e) => q.isFunction(e) || e === null || e === !1;
function YL(e, t) {
  e = q.isArray(e) ? e : [e];
  const { length: r } = e;
  let i, o;
  const s = {};
  for (let a = 0; a < r; a++) {
    i = e[a];
    let l;
    if (o = i, !WL(i) && (o = bd[(l = String(i)).toLowerCase()], o === void 0))
      throw new ue(`Unknown adapter '${l}'`);
    if (o && (q.isFunction(o) || (o = o.get(t))))
      break;
    s[l || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(s).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = r ? a.length > 1 ? `since :
` + a.map(Rh).join(`
`) : " " + Rh(a[0]) : "as no adapter specified";
    throw new ue(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Nx = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: YL,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: bd
};
function Dl(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new fi(null, e);
}
function Ah(e) {
  return Dl(e), e.headers = ht.from(e.headers), e.data = $l.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Nx.getAdapter(e.adapter || So.adapter, e)(e).then(function(i) {
    return Dl(e), i.data = $l.call(
      e,
      e.transformResponse,
      i
    ), i.headers = ht.from(i.headers), i;
  }, function(i) {
    return _x(i) || (Dl(e), i && i.response && (i.response.data = $l.call(
      e,
      e.transformResponse,
      i.response
    ), i.response.headers = ht.from(i.response.headers))), Promise.reject(i);
  });
}
const Fx = "1.13.0", Ua = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ua[e] = function(i) {
    return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ph = {};
Ua.transitional = function(t, r, i) {
  function o(s, a) {
    return "[Axios v" + Fx + "] Transitional option '" + s + "'" + a + (i ? ". " + i : "");
  }
  return (s, a, l) => {
    if (t === !1)
      throw new ue(
        o(a, " has been removed" + (r ? " in " + r : "")),
        ue.ERR_DEPRECATED
      );
    return r && !Ph[a] && (Ph[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, a, l) : !0;
  };
};
Ua.spelling = function(t) {
  return (r, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0);
};
function XL(e, t, r) {
  if (typeof e != "object")
    throw new ue("options must be an object", ue.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let o = i.length;
  for (; o-- > 0; ) {
    const s = i[o], a = t[s];
    if (a) {
      const l = e[s], c = l === void 0 || a(l, s, e);
      if (c !== !0)
        throw new ue("option " + s + " must be " + c, ue.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ue("Unknown option " + s, ue.ERR_BAD_OPTION);
  }
}
const ss = {
  assertOptions: XL,
  validators: Ua
}, Bt = ss.validators;
let rr = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new bh(),
      response: new bh()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (i) {
      if (i instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack ? s && !String(i.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + s) : i.stack = s;
        } catch {
        }
      }
      throw i;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = cr(this.defaults, r);
    const { transitional: i, paramsSerializer: o, headers: s } = r;
    i !== void 0 && ss.assertOptions(i, {
      silentJSONParsing: Bt.transitional(Bt.boolean),
      forcedJSONParsing: Bt.transitional(Bt.boolean),
      clarifyTimeoutError: Bt.transitional(Bt.boolean)
    }, !1), o != null && (q.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : ss.assertOptions(o, {
      encode: Bt.function,
      serialize: Bt.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ss.assertOptions(r, {
      baseUrl: Bt.spelling("baseURL"),
      withXsrfToken: Bt.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = s && q.merge(
      s.common,
      s[r.method]
    );
    s && q.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), r.headers = ht.concat(a, s);
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(r) === !1 || (c = c && m.synchronous, l.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let d, f = 0, p;
    if (!c) {
      const g = [Ah.bind(this), void 0];
      for (g.unshift(...l), g.push(...u), p = g.length, d = Promise.resolve(r); f < p; )
        d = d.then(g[f++], g[f++]);
      return d;
    }
    p = l.length;
    let h = r;
    for (; f < p; ) {
      const g = l[f++], m = l[f++];
      try {
        h = g(h);
      } catch (y) {
        m.call(this, y);
        break;
      }
    }
    try {
      d = Ah.call(this, h);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, p = u.length; f < p; )
      d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = cr(this.defaults, t);
    const r = $x(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Px(r, t.params, t.paramsSerializer);
  }
};
q.forEach(["delete", "get", "head", "options"], function(t) {
  rr.prototype[t] = function(r, i) {
    return this.request(cr(i || {}, {
      method: t,
      url: r,
      data: (i || {}).data
    }));
  };
});
q.forEach(["post", "put", "patch"], function(t) {
  function r(i) {
    return function(s, a, l) {
      return this.request(cr(l || {}, {
        method: t,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  rr.prototype[t] = r(), rr.prototype[t + "Form"] = r(!0);
});
let KL = class qx {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const i = this;
    this.promise.then((o) => {
      if (!i._listeners) return;
      let s = i._listeners.length;
      for (; s-- > 0; )
        i._listeners[s](o);
      i._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const a = new Promise((l) => {
        i.subscribe(l), s = l;
      }).then(o);
      return a.cancel = function() {
        i.unsubscribe(s);
      }, a;
    }, t(function(s, a, l) {
      i.reason || (i.reason = new fi(s, a, l), r(i.reason));
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
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (i) => {
      t.abort(i);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new qx(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function ZL(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function JL(e) {
  return q.isObject(e) && e.isAxiosError === !0;
}
const Mc = {
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
Object.entries(Mc).forEach(([e, t]) => {
  Mc[t] = e;
});
function zx(e) {
  const t = new rr(e), r = bx(rr.prototype.request, t);
  return q.extend(r, rr.prototype, t, { allOwnKeys: !0 }), q.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return zx(cr(e, o));
  }, r;
}
const De = zx(So);
De.Axios = rr;
De.CanceledError = fi;
De.CancelToken = KL;
De.isCancel = _x;
De.VERSION = Fx;
De.toFormData = Va;
De.AxiosError = ue;
De.Cancel = De.CanceledError;
De.all = function(t) {
  return Promise.all(t);
};
De.spread = ZL;
De.isAxiosError = JL;
De.mergeConfig = cr;
De.AxiosHeaders = ht;
De.formToJSON = (e) => Mx(q.isHTMLForm(e) ? new FormData(e) : e);
De.getAdapter = Nx.getAdapter;
De.HttpStatusCode = Mc;
De.default = De;
const {
  Axios: gN,
  AxiosError: yN,
  CanceledError: bN,
  isCancel: xN,
  CancelToken: vN,
  VERSION: ON,
  all: TN,
  Cancel: SN,
  isAxiosError: wN,
  spread: CN,
  toFormData: EN,
  AxiosHeaders: kN,
  HttpStatusCode: RN,
  formToJSON: AN,
  getAdapter: PN,
  mergeConfig: IN
} = De, MN = (e, { onUnauthorized: t, interceptors: r } = {}) => {
  const i = De.create({ baseURL: e });
  return i.interceptors.response.use(
    (o) => o,
    (o) => (o.response?.status === 401 && t && t(), Promise.reject(o))
  ), r && r.forEach((o) => {
    i.interceptors.response.use(o.success, o.error);
  }), i;
};
export {
  sN as AutocompleteField,
  _j as BarChart,
  pN as DashboardLayout,
  xT as DataCard,
  hT as DataTable,
  oN as FileUploadField,
  pm as Form,
  ri as FormContext,
  ij as LineChart,
  fN as LoginPage,
  Qj as PieChart,
  dN as ResourceFormPage,
  uN as ResourceListPage,
  lN as SelectField,
  iN as StatCard,
  e$ as StatsGrid,
  aN as SwitchField,
  cf as TextField,
  MN as createApiClient,
  _$ as createErrorTranslator,
  sx as getTranslatedError,
  j$ as useApi,
  cN as useApiMutation,
  $$ as useDebounce
};
