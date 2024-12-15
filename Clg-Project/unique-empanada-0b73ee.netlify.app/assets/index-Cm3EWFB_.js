function HPO()
{
    document.getElementById("popup-hackathon").style.display = "flex"
}
function FCPO()
{
    document.getElementById("popup-corporate-fusionwalk").style.display = "flex"
}

function PPO()
{
    document.getElementById("popup-photography").style.display = "flex"
}


function BPPO()
{
    document.getElementById("popup-business-proposal").style.display = "flex"
}
function SFPO()
{
    document.getElementById("popup-short-film").style.display = "flex"
}
function SPO()
{
    document.getElementById("popup-singing").style.display = "flex"
}
function THPO()
{
    document.getElementById("popup-treasure-hunt").style.display = "flex"
}

function BPO()
{
    document.getElementById("popup-best-manager").style.display = "flex"
}
function MPO()
{
    document.getElementById("popup-mime-event").style.display = "flex"
}
function DPO()
{
    document.getElementById("popup-dance-event").style.display = "flex"
}
function RPO()
{
    document.getElementById("popup-rangoli").style.display = "flex"
}
function IAPO()
{
    document.getElementById("popup-ipl-auction").style.display = "flex"
}


window.onload = () => {
    const popup = document.getElementById("popup");
    popup.classList.remove("popup-hidden");
};

function openGuidelinesPopup () {
    const popup = document.getElementById("popup");
    popup.classList.remove("popup-hidden");
}


document.getElementById("closePopup").addEventListener("click", () => {
    const popup = document.getElementById("popup");
    popup.classList.add("popup-hidden");
});

(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
})();
var Hs = {
        exports: {}
    },
    rl = {},
    Ws = {
        exports: {}
    },
    F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn = Symbol.for("react.element"),
    nc = Symbol.for("react.portal"),
    rc = Symbol.for("react.fragment"),
    lc = Symbol.for("react.strict_mode"),
    oc = Symbol.for("react.profiler"),
    ic = Symbol.for("react.provider"),
    sc = Symbol.for("react.context"),
    uc = Symbol.for("react.forward_ref"),
    ac = Symbol.for("react.suspense"),
    cc = Symbol.for("react.memo"),
    dc = Symbol.for("react.lazy"),
    Oi = Symbol.iterator;

    
function fc(e) {
    return e === null || typeof e != "object" ? null : (e = Oi && e[Oi] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Qs = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Gs = Object.assign,
    Ks = {};

function an(e, t, n) {
    this.props = e, this.context = t, this.refs = Ks, this.updater = n || Qs
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
an.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ys() {}
Ys.prototype = an.prototype;

function Ao(e, t, n) {
    this.props = e, this.context = t, this.refs = Ks, this.updater = n || Qs
}
var Vo = Ao.prototype = new Ys;
Vo.constructor = Ao;
Gs(Vo, an.prototype);
Vo.isPureReactComponent = !0;
var Di = Array.isArray,
    Xs = Object.prototype.hasOwnProperty,
    Bo = {
        current: null
    },
    Js = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Zs(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) Xs.call(t, r) && !Js.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var a = Array(u), d = 0; d < u; d++) a[d] = arguments[d + 2];
        l.children = a
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: Zn,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Bo.current
    }
}

function pc(e, t) {
    return {
        $$typeof: Zn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Ho(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zn
}

function mc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Mi = /\/+/g;

function kl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? mc("" + e.key) : t.toString(36)
}

function kr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Zn:
                case nc:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + kl(i, 0) : r, Di(l) ? (n = "", e != null && (n = e.replace(Mi, "$&/") + "/"), kr(l, t, n, "", function(d) {
        return d
    })) : l != null && (Ho(l) && (l = pc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Mi, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Di(e))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var a = r + kl(o, u);
            i += kr(o, t, n, a, l)
        } else if (a = fc(e), typeof a == "function")
            for (e = a.call(e), u = 0; !(o = e.next()).done;) o = o.value, a = r + kl(o, u++), i += kr(o, t, n, a, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function lr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return kr(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }), r
}

function hc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ae = {
        current: null
    },
    Sr = {
        transition: null
    },
    vc = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: Sr,
        ReactCurrentOwner: Bo
    };

function qs() {
    throw Error("act(...) is not supported in production builds of React.")
}
F.Children = {
    map: lr,
    forEach: function(e, t, n) {
        lr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return lr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return lr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ho(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = an;
F.Fragment = rc;
F.Profiler = oc;
F.PureComponent = Ao;
F.StrictMode = lc;
F.Suspense = ac;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vc;
F.act = qs;
F.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Gs({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = Bo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (a in t) Xs.call(t, a) && !Js.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        u = Array(a);
        for (var d = 0; d < a; d++) u[d] = arguments[d + 2];
        r.children = u
    }
    return {
        $$typeof: Zn,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
};
F.createContext = function(e) {
    return e = {
        $$typeof: sc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: ic,
        _context: e
    }, e.Consumer = e
};
F.createElement = Zs;
F.createFactory = function(e) {
    var t = Zs.bind(null, e);
    return t.type = e, t
};
F.createRef = function() {
    return {
        current: null
    }
};
F.forwardRef = function(e) {
    return {
        $$typeof: uc,
        render: e
    }
};
F.isValidElement = Ho;
F.lazy = function(e) {
    return {
        $$typeof: dc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: hc
    }
};
F.memo = function(e, t) {
    return {
        $$typeof: cc,
        type: e,
        compare: t === void 0 ? null : t
    }
};
F.startTransition = function(e) {
    var t = Sr.transition;
    Sr.transition = {};
    try {
        e()
    } finally {
        Sr.transition = t
    }
};
F.unstable_act = qs;
F.useCallback = function(e, t) {
    return ae.current.useCallback(e, t)
};
F.useContext = function(e) {
    return ae.current.useContext(e)
};
F.useDebugValue = function() {};
F.useDeferredValue = function(e) {
    return ae.current.useDeferredValue(e)
};
F.useEffect = function(e, t) {
    return ae.current.useEffect(e, t)
};
F.useId = function() {
    return ae.current.useId()
};
F.useImperativeHandle = function(e, t, n) {
    return ae.current.useImperativeHandle(e, t, n)
};
F.useInsertionEffect = function(e, t) {
    return ae.current.useInsertionEffect(e, t)
};
F.useLayoutEffect = function(e, t) {
    return ae.current.useLayoutEffect(e, t)
};
F.useMemo = function(e, t) {
    return ae.current.useMemo(e, t)
};
F.useReducer = function(e, t, n) {
    return ae.current.useReducer(e, t, n)
};
F.useRef = function(e) {
    return ae.current.useRef(e)
};
F.useState = function(e) {
    return ae.current.useState(e)
};
F.useSyncExternalStore = function(e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n)
};
F.useTransition = function() {
    return ae.current.useTransition()
};
F.version = "18.3.1";
Ws.exports = F;
var q = Ws.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gc = q,
    yc = Symbol.for("react.element"),
    xc = Symbol.for("react.fragment"),
    wc = Object.prototype.hasOwnProperty,
    kc = gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Sc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function bs(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) wc.call(t, r) && !Sc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: yc,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: kc.current
    }
}
rl.Fragment = xc;
rl.jsx = bs;
rl.jsxs = bs;
Hs.exports = rl;
var s = Hs.exports,
    eu = {
        exports: {}
    },
    we = {},
    tu = {
        exports: {}
    },
    nu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, _) {
        var P = N.length;
        N.push(_);
        e: for (; 0 < P;) {
            var W = P - 1 >>> 1,
                X = N[W];
            if (0 < l(X, _)) N[W] = _, N[P] = X, P = W;
            else break e
        }
    }

    function n(N) {
        return N.length === 0 ? null : N[0]
    }

    function r(N) {
        if (N.length === 0) return null;
        var _ = N[0],
            P = N.pop();
        if (P !== _) {
            N[0] = P;
            e: for (var W = 0, X = N.length, nr = X >>> 1; W < nr;) {
                var wt = 2 * (W + 1) - 1,
                    wl = N[wt],
                    kt = wt + 1,
                    rr = N[kt];
                if (0 > l(wl, P)) kt < X && 0 > l(rr, wl) ? (N[W] = rr, N[kt] = P, W = kt) : (N[W] = wl, N[wt] = P, W = wt);
                else if (kt < X && 0 > l(rr, P)) N[W] = rr, N[kt] = P, W = kt;
                else break e
            }
        }
        return _
    }

    function l(N, _) {
        var P = N.sortIndex - _.sortIndex;
        return P !== 0 ? P : N.id - _.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date,
            u = i.now();
        e.unstable_now = function() {
            return i.now() - u
        }
    }
    var a = [],
        d = [],
        v = 1,
        h = null,
        m = 3,
        x = !1,
        w = !1,
        k = !1,
        O = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(N) {
        for (var _ = n(d); _ !== null;) {
            if (_.callback === null) r(d);
            else if (_.startTime <= N) r(d), _.sortIndex = _.expirationTime, t(a, _);
            else break;
            _ = n(d)
        }
    }

    function g(N) {
        if (k = !1, p(N), !w)
            if (n(a) !== null) w = !0, fn(S);
            else {
                var _ = n(d);
                _ !== null && Je(g, _.startTime - N)
            }
    }

    function S(N, _) {
        w = !1, k && (k = !1, f(z), z = -1), x = !0;
        var P = m;
        try {
            for (p(_), h = n(a); h !== null && (!(h.expirationTime > _) || N && !ne());) {
                var W = h.callback;
                if (typeof W == "function") {
                    h.callback = null, m = h.priorityLevel;
                    var X = W(h.expirationTime <= _);
                    _ = e.unstable_now(), typeof X == "function" ? h.callback = X : h === n(a) && r(a), p(_)
                } else r(a);
                h = n(a)
            }
            if (h !== null) var nr = !0;
            else {
                var wt = n(d);
                wt !== null && Je(g, wt.startTime - _), nr = !1
            }
            return nr
        } finally {
            h = null, m = P, x = !1
        }
    }
    var E = !1,
        C = null,
        z = -1,
        U = 5,
        T = -1;

    function ne() {
        return !(e.unstable_now() - T < U)
    }

    function gt() {
        if (C !== null) {
            var N = e.unstable_now();
            T = N;
            var _ = !0;
            try {
                _ = C(!0, N)
            } finally {
                _ ? yt() : (E = !1, C = null)
            }
        } else E = !1
    }
    var yt;
    if (typeof c == "function") yt = function() {
        c(gt)
    };
    else if (typeof MessageChannel < "u") {
        var xt = new MessageChannel,
            xl = xt.port2;
        xt.port1.onmessage = gt, yt = function() {
            xl.postMessage(null)
        }
    } else yt = function() {
        O(gt, 0)
    };

    function fn(N) {
        C = N, E || (E = !0, yt())
    }

    function Je(N, _) {
        z = O(function() {
            N(e.unstable_now())
        }, _)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
        N.callback = null
    }, e.unstable_continueExecution = function() {
        w || x || (w = !0, fn(S))
    }, e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < N ? Math.floor(1e3 / N) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return m
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(N) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var _ = 3;
                break;
            default:
                _ = m
        }
        var P = m;
        m = _;
        try {
            return N()
        } finally {
            m = P
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, _) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var P = m;
        m = N;
        try {
            return _()
        } finally {
            m = P
        }
    }, e.unstable_scheduleCallback = function(N, _, P) {
        var W = e.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? W + P : W) : P = W, N) {
            case 1:
                var X = -1;
                break;
            case 2:
                X = 250;
                break;
            case 5:
                X = 1073741823;
                break;
            case 4:
                X = 1e4;
                break;
            default:
                X = 5e3
        }
        return X = P + X, N = {
            id: v++,
            callback: _,
            priorityLevel: N,
            startTime: P,
            expirationTime: X,
            sortIndex: -1
        }, P > W ? (N.sortIndex = P, t(d, N), n(a) === null && N === n(d) && (k ? (f(z), z = -1) : k = !0, Je(g, P - W))) : (N.sortIndex = X, t(a, N), w || x || (w = !0, fn(S))), N
    }, e.unstable_shouldYield = ne, e.unstable_wrapCallback = function(N) {
        var _ = m;
        return function() {
            var P = m;
            m = _;
            try {
                return N.apply(this, arguments)
            } finally {
                m = P
            }
        }
    }
})(nu);
tu.exports = nu;
var Nc = tu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jc = q,
    xe = Nc;

function y(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ru = new Set,
    On = {};

function Ot(e, t) {
    tn(e, t), tn(e + "Capture", t)
}

function tn(e, t) {
    for (On[e] = t, e = 0; e < t.length; e++) ru.add(t[e])
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Kl = Object.prototype.hasOwnProperty,
    Ec = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ii = {},
    $i = {};

function Cc(e) {
    return Kl.call($i, e) ? !0 : Kl.call(Ii, e) ? !1 : Ec.test(e) ? $i[e] = !0 : (Ii[e] = !0, !1)
}

function zc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function _c(e, t, n, r) {
    if (t === null || typeof t > "u" || zc(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ce(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ce(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    te[t] = new ce(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Wo = /[\-:]([a-z])/g;

function Qo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Wo, Qo);
    te[t] = new ce(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Wo, Qo);
    te[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Wo, Qo);
    te[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
te.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Go(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_c(t, n, l, r) && (n = null), r || l === null ? Cc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xe = jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    or = Symbol.for("react.element"),
    It = Symbol.for("react.portal"),
    $t = Symbol.for("react.fragment"),
    Ko = Symbol.for("react.strict_mode"),
    Yl = Symbol.for("react.profiler"),
    lu = Symbol.for("react.provider"),
    ou = Symbol.for("react.context"),
    Yo = Symbol.for("react.forward_ref"),
    Xl = Symbol.for("react.suspense"),
    Jl = Symbol.for("react.suspense_list"),
    Xo = Symbol.for("react.memo"),
    qe = Symbol.for("react.lazy"),
    iu = Symbol.for("react.offscreen"),
    Ui = Symbol.iterator;

function pn(e) {
    return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null)
}
var B = Object.assign,
    Sl;

function kn(e) {
    if (Sl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Sl = t && t[1] || ""
    }
    return `
` + Sl + e
}
var Nl = !1;

function jl(e, t) {
    if (!e || Nl) return "";
    Nl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];) u--;
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if (i--, u--, 0 > u || l[i] !== o[u]) {
                                var a = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            }
                    while (1 <= i && 0 <= u);
                    break
                }
        }
    } finally {
        Nl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? kn(e) : ""
}

function Pc(e) {
    switch (e.tag) {
        case 5:
            return kn(e.type);
        case 16:
            return kn("Lazy");
        case 13:
            return kn("Suspense");
        case 19:
            return kn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = jl(e.type, !1), e;
        case 11:
            return e = jl(e.type.render, !1), e;
        case 1:
            return e = jl(e.type, !0), e;
        default:
            return ""
    }
}

function Zl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case $t:
            return "Fragment";
        case It:
            return "Portal";
        case Yl:
            return "Profiler";
        case Ko:
            return "StrictMode";
        case Xl:
            return "Suspense";
        case Jl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case ou:
            return (e.displayName || "Context") + ".Consumer";
        case lu:
            return (e._context.displayName || "Context") + ".Provider";
        case Yo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Xo:
            return t = e.displayName || null, t !== null ? t : Zl(e.type) || "Memo";
        case qe:
            t = e._payload, e = e._init;
            try {
                return Zl(e(t))
            } catch {}
    }
    return null
}

function Tc(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Zl(t);
        case 8:
            return t === Ko ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ft(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function su(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Fc(e) {
    var t = su(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ir(e) {
    e._valueTracker || (e._valueTracker = Fc(e))
}

function uu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = su(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Rr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ql(e, t) {
    var n = t.checked;
    return B({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? n : e._wrapperState.initialChecked // Fixed syntax
    });
}


function Ai(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ft(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function au(e, t) {
    t = t.checked, t != null && Go(e, "checked", t, !1)
}

function bl(e, t) {
    au(e, t);
    var n = ft(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? eo(e, t.type, n) : t.hasOwnProperty("defaultValue") && eo(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Vi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function eo(e, t, n) {
    (t !== "number" || Rr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Sn = Array.isArray;

function Xt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function to(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
    return B({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Bi(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(y(92));
            if (Sn(n)) {
                if (1 < n.length) throw Error(y(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ft(n)
    }
}

function cu(e, t) {
    var n = ft(t.value),
        r = ft(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Hi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function du(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function no(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? du(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var sr, fu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (sr = sr || document.createElement("div"), sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = sr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Dn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var En = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Lc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function(e) {
    Lc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), En[t] = En[e]
    })
});

function pu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || En.hasOwnProperty(e) && En[e] ? ("" + t).trim() : t + "px"
}

function mu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = pu(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Rc = B({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function ro(e, t) {
    if (t) {
        if (Rc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(y(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(y(62))
    }
}

function lo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var oo = null;

function Jo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var io = null,
    Jt = null,
    Zt = null;

function Wi(e) {
    if (e = er(e)) {
        if (typeof io != "function") throw Error(y(280));
        var t = e.stateNode;
        t && (t = ul(t), io(e.stateNode, e.type, t))
    }
}

function hu(e) {
    Jt ? Zt ? Zt.push(e) : Zt = [e] : Jt = e
}

function vu() {
    if (Jt) {
        var e = Jt,
            t = Zt;
        if (Zt = Jt = null, Wi(e), t)
            for (e = 0; e < t.length; e++) Wi(t[e])
    }
}

function gu(e, t) {
    return e(t)
}

function yu() {}
var El = !1;

function xu(e, t, n) {
    if (El) return e(t, n);
    El = !0;
    try {
        return gu(e, t, n)
    } finally {
        El = !1, (Jt !== null || Zt !== null) && (yu(), vu())
    }
}

function Mn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ul(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(y(231, t, typeof n));
    return n
}
var so = !1;
if (Qe) try {
    var mn = {};
    Object.defineProperty(mn, "passive", {
        get: function() {
            so = !0
        }
    }), window.addEventListener("test", mn, mn), window.removeEventListener("test", mn, mn)
} catch {
    so = !1
}

function Oc(e, t, n, r, l, o, i, u, a) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (v) {
        this.onError(v)
    }
}
var Cn = !1,
    Or = null,
    Dr = !1,
    uo = null,
    Dc = {
        onError: function(e) {
            Cn = !0, Or = e
        }
    };

function Mc(e, t, n, r, l, o, i, u, a) {
    Cn = !1, Or = null, Oc.apply(Dc, arguments)
}

function Ic(e, t, n, r, l, o, i, u, a) {
    if (Mc.apply(this, arguments), Cn) {
        if (Cn) {
            var d = Or;
            Cn = !1, Or = null
        } else throw Error(y(198));
        Dr || (Dr = !0, uo = d)
    }
}

function Dt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function wu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Qi(e) {
    if (Dt(e) !== e) throw Error(y(188))
}

function $c(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Dt(e), t === null) throw Error(y(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return Qi(l), e;
                if (o === r) return Qi(l), t;
                o = o.sibling
            }
            throw Error(y(188))
        }
        if (n.return !== r.return) n = l, r = o;
        else {
            for (var i = !1, u = l.child; u;) {
                if (u === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (u === r) {
                    i = !0, r = l, n = o;
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = o.child; u;) {
                    if (u === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (u === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!i) throw Error(y(189))
            }
        }
        if (n.alternate !== r) throw Error(y(190))
    }
    if (n.tag !== 3) throw Error(y(188));
    return n.stateNode.current === n ? e : t
}

function ku(e) {
    return e = $c(e), e !== null ? Su(e) : null
}

function Su(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Su(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Nu = xe.unstable_scheduleCallback,
    Gi = xe.unstable_cancelCallback,
    Uc = xe.unstable_shouldYield,
    Ac = xe.unstable_requestPaint,
    Q = xe.unstable_now,
    Vc = xe.unstable_getCurrentPriorityLevel,
    Zo = xe.unstable_ImmediatePriority,
    ju = xe.unstable_UserBlockingPriority,
    Mr = xe.unstable_NormalPriority,
    Bc = xe.unstable_LowPriority,
    Eu = xe.unstable_IdlePriority,
    ll = null,
    $e = null;

function Hc(e) {
    if ($e && typeof $e.onCommitFiberRoot == "function") try {
        $e.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Le = Math.clz32 ? Math.clz32 : Gc,
    Wc = Math.log,
    Qc = Math.LN2;

function Gc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wc(e) / Qc | 0) | 0
}
var ur = 64,
    ar = 4194304;

function Nn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Ir(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? r = Nn(u) : (o &= i, o !== 0 && (r = Nn(o)))
    } else i = n & ~l, i !== 0 ? r = Nn(i) : o !== 0 && (r = Nn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Le(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Kc(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Yc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - Le(o),
            u = 1 << i,
            a = l[i];
        a === -1 ? (!(u & n) || u & r) && (l[i] = Kc(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u
    }
}

function ao(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Cu() {
    var e = ur;
    return ur <<= 1, !(ur & 4194240) && (ur = 64), e
}

function Cl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function qn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Le(t), e[t] = n
}

function Xc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Le(n),
            o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function qo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Le(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var R = 0;

function zu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var _u, bo, Pu, Tu, Fu, co = !1,
    cr = [],
    lt = null,
    ot = null,
    it = null,
    In = new Map,
    $n = new Map,
    et = [],
    Jc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ki(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            lt = null;
            break;
        case "dragenter":
        case "dragleave":
            ot = null;
            break;
        case "mouseover":
        case "mouseout":
            it = null;
            break;
        case "pointerover":
        case "pointerout":
            In.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            $n.delete(t.pointerId)
    }
}

function hn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = er(t), t !== null && bo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Zc(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return lt = hn(lt, e, t, n, r, l), !0;
        case "dragenter":
            return ot = hn(ot, e, t, n, r, l), !0;
        case "mouseover":
            return it = hn(it, e, t, n, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return In.set(o, hn(In.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, $n.set(o, hn($n.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Lu(e) {
    var t = jt(e.target);
    if (t !== null) {
        var n = Dt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = wu(n), t !== null) {
                    e.blockedOn = t, Fu(e.priority, function() {
                        Pu(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Nr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            oo = r, n.target.dispatchEvent(r), oo = null
        } else return t = er(n), t !== null && bo(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Yi(e, t, n) {
    Nr(e) && n.delete(t)
}

function qc() {
    co = !1, lt !== null && Nr(lt) && (lt = null), ot !== null && Nr(ot) && (ot = null), it !== null && Nr(it) && (it = null), In.forEach(Yi), $n.forEach(Yi)
}

function vn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, co || (co = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, qc)))
}

function Un(e) {
    function t(l) {
        return vn(l, e)
    }
    if (0 < cr.length) {
        vn(cr[0], e);
        for (var n = 1; n < cr.length; n++) {
            var r = cr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && vn(lt, e), ot !== null && vn(ot, e), it !== null && vn(it, e), In.forEach(t), $n.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0], n.blockedOn === null);) Lu(n), n.blockedOn === null && et.shift()
}
var qt = Xe.ReactCurrentBatchConfig,
    $r = !0;

function bc(e, t, n, r) {
    var l = R,
        o = qt.transition;
    qt.transition = null;
    try {
        R = 1, ei(e, t, n, r)
    } finally {
        R = l, qt.transition = o
    }
}

function ed(e, t, n, r) {
    var l = R,
        o = qt.transition;
    qt.transition = null;
    try {
        R = 4, ei(e, t, n, r)
    } finally {
        R = l, qt.transition = o
    }
}

function ei(e, t, n, r) {
    if ($r) {
        var l = fo(e, t, n, r);
        if (l === null) Ml(e, t, r, Ur, n), Ki(e, r);
        else if (Zc(l, e, t, n, r)) r.stopPropagation();
        else if (Ki(e, r), t & 4 && -1 < Jc.indexOf(e)) {
            for (; l !== null;) {
                var o = er(l);
                if (o !== null && _u(o), o = fo(e, t, n, r), o === null && Ml(e, t, r, Ur, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else Ml(e, t, r, null, n)
    }
}
var Ur = null;

function fo(e, t, n, r) {
    if (Ur = null, e = Jo(r), e = jt(e), e !== null)
        if (t = Dt(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = wu(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Ur = e, null
}

function Ru(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Vc()) {
                case Zo:
                    return 1;
                case ju:
                    return 4;
                case Mr:
                case Bc:
                    return 16;
                case Eu:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var nt = null,
    ti = null,
    jr = null;

function Ou() {
    if (jr) return jr;
    var e, t = ti,
        n = t.length,
        r, l = "value" in nt ? nt.value : nt.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return jr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Er(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function dr() {
    return !0
}

function Xi() {
    return !1
}

function ke(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? dr : Xi, this.isPropagationStopped = Xi, this
    }
    return B(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = dr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = dr)
        },
        persist: function() {},
        isPersistent: dr
    }), t
}
var cn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    ni = ke(cn),
    bn = B({}, cn, {
        view: 0,
        detail: 0
    }),
    td = ke(bn),
    zl, _l, gn, ol = B({}, bn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ri,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (zl = e.screenX - gn.screenX, _l = e.screenY - gn.screenY) : _l = zl = 0, gn = e), zl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : _l
        }
    }),
    Ji = ke(ol),
    nd = B({}, ol, {
        dataTransfer: 0
    }),
    rd = ke(nd),
    ld = B({}, bn, {
        relatedTarget: 0
    }),
    Pl = ke(ld),
    od = B({}, cn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    id = ke(od),
    sd = B({}, cn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    ud = ke(sd),
    ad = B({}, cn, {
        data: 0
    }),
    Zi = ke(ad),
    cd = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    dd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    fd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function pd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = fd[e]) ? !!t[e] : !1
}

function ri() {
    return pd
}
var md = B({}, bn, {
        key: function(e) {
            if (e.key) {
                var t = cd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Er(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dd[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ri,
        charCode: function(e) {
            return e.type === "keypress" ? Er(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Er(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    hd = ke(md),
    vd = B({}, ol, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    qi = ke(vd),
    gd = B({}, bn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ri
    }),
    yd = ke(gd),
    xd = B({}, cn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    wd = ke(xd),
    kd = B({}, ol, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Sd = ke(kd),
    Nd = [9, 13, 27, 32],
    li = Qe && "CompositionEvent" in window,
    zn = null;
Qe && "documentMode" in document && (zn = document.documentMode);
var jd = Qe && "TextEvent" in window && !zn,
    Du = Qe && (!li || zn && 8 < zn && 11 >= zn),
    bi = " ",
    es = !1;

function Mu(e, t) {
    switch (e) {
        case "keyup":
            return Nd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Iu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Ut = !1;

function Ed(e, t) {
    switch (e) {
        case "compositionend":
            return Iu(t);
        case "keypress":
            return t.which !== 32 ? null : (es = !0, bi);
        case "textInput":
            return e = t.data, e === bi && es ? null : e;
        default:
            return null
    }
}

function Cd(e, t) {
    if (Ut) return e === "compositionend" || !li && Mu(e, t) ? (e = Ou(), jr = ti = nt = null, Ut = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Du && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var zd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function ts(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!zd[e.type] : t === "textarea"
}

function $u(e, t, n, r) {
    hu(r), t = Ar(t, "onChange"), 0 < t.length && (n = new ni("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var _n = null,
    An = null;

function _d(e) {
    Xu(e, 0)
}

function il(e) {
    var t = Bt(e);
    if (uu(t)) return e
}

function Pd(e, t) {
    if (e === "change") return t
}
var Uu = !1;
if (Qe) {
    var Tl;
    if (Qe) {
        var Fl = "oninput" in document;
        if (!Fl) {
            var ns = document.createElement("div");
            ns.setAttribute("oninput", "return;"), Fl = typeof ns.oninput == "function"
        }
        Tl = Fl
    } else Tl = !1;
    Uu = Tl && (!document.documentMode || 9 < document.documentMode)
}

function rs() {
    _n && (_n.detachEvent("onpropertychange", Au), An = _n = null)
}

function Au(e) {
    if (e.propertyName === "value" && il(An)) {
        var t = [];
        $u(t, An, e, Jo(e)), xu(_d, t)
    }
}

function Td(e, t, n) {
    e === "focusin" ? (rs(), _n = t, An = n, _n.attachEvent("onpropertychange", Au)) : e === "focusout" && rs()
}

function Fd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return il(An)
}

function Ld(e, t) {
    if (e === "click") return il(t)
}

function Rd(e, t) {
    if (e === "input" || e === "change") return il(t)
}

function Od(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Oe = typeof Object.is == "function" ? Object.is : Od;

function Vn(e, t) {
    if (Oe(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Kl.call(t, l) || !Oe(e[l], t[l])) return !1
    }
    return !0
}

function ls(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function os(e, t) {
    var n = ls(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ls(n)
    }
}

function Vu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Bu() {
    for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Rr(e.document)
    }
    return t
}

function oi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Dd(e) {
    var t = Bu(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Vu(n.ownerDocument.documentElement, n)) {
        if (r !== null && oi(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = os(n, o);
                var i = os(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Md = Qe && "documentMode" in document && 11 >= document.documentMode,
    At = null,
    po = null,
    Pn = null,
    mo = !1;

function is(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mo || At == null || At !== Rr(r) || (r = At, "selectionStart" in r && oi(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Pn && Vn(Pn, r) || (Pn = r, r = Ar(po, "onSelect"), 0 < r.length && (t = new ni("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = At)))
}

function fr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Vt = {
        animationend: fr("Animation", "AnimationEnd"),
        animationiteration: fr("Animation", "AnimationIteration"),
        animationstart: fr("Animation", "AnimationStart"),
        transitionend: fr("Transition", "TransitionEnd")
    },
    Ll = {},
    Hu = {};
Qe && (Hu = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);

function sl(e) {
    if (Ll[e]) return Ll[e];
    if (!Vt[e]) return e;
    var t = Vt[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Hu) return Ll[e] = t[n];
    return e
}
var Wu = sl("animationend"),
    Qu = sl("animationiteration"),
    Gu = sl("animationstart"),
    Ku = sl("transitionend"),
    Yu = new Map,
    ss = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function mt(e, t) {
    Yu.set(e, t), Ot(t, [e])
}
for (var Rl = 0; Rl < ss.length; Rl++) {
    var Ol = ss[Rl],
        Id = Ol.toLowerCase(),
        $d = Ol[0].toUpperCase() + Ol.slice(1);
    mt(Id, "on" + $d)
}
mt(Wu, "onAnimationEnd");
mt(Qu, "onAnimationIteration");
mt(Gu, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Ku, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Ot("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ot("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ot("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ot("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ot("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Ud = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));

function us(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ic(r, t, void 0, e), e.currentTarget = null
}

function Xu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i],
                        a = u.instance,
                        d = u.currentTarget;
                    if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
                    us(l, u, d), o = a
                } else
                    for (i = 0; i < r.length; i++) {
                        if (u = r[i], a = u.instance, d = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
                        us(l, u, d), o = a
                    }
        }
    }
    if (Dr) throw e = uo, Dr = !1, uo = null, e
}

function M(e, t) {
    var n = t[xo];
    n === void 0 && (n = t[xo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ju(t, e, 2, !1), n.add(r))
}

function Dl(e, t, n) {
    var r = 0;
    t && (r |= 4), Ju(n, e, r, t)
}
var pr = "_reactListening" + Math.random().toString(36).slice(2);

function Bn(e) {
    if (!e[pr]) {
        e[pr] = !0, ru.forEach(function(n) {
            n !== "selectionchange" && (Ud.has(n) || Dl(n, !1, e), Dl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[pr] || (t[pr] = !0, Dl("selectionchange", !1, t))
    }
}

function Ju(e, t, n, r) {
    switch (Ru(t)) {
        case 1:
            var l = bc;
            break;
        case 4:
            l = ed;
            break;
        default:
            l = ei
    }
    n = l.bind(null, t, n, e), l = void 0, !so || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Ml(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var a = i.tag;
                    if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
                    i = i.return
                }
            for (; u !== null;) {
                if (i = jt(u), i === null) return;
                if (a = i.tag, a === 5 || a === 6) {
                    r = o = i;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    xu(function() {
        var d = o,
            v = Jo(n),
            h = [];
        e: {
            var m = Yu.get(e);
            if (m !== void 0) {
                var x = ni,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Er(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        x = hd;
                        break;
                    case "focusin":
                        w = "focus", x = Pl;
                        break;
                    case "focusout":
                        w = "blur", x = Pl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = Pl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        x = Ji;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = rd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = yd;
                        break;
                    case Wu:
                    case Qu:
                    case Gu:
                        x = id;
                        break;
                    case Ku:
                        x = wd;
                        break;
                    case "scroll":
                        x = td;
                        break;
                    case "wheel":
                        x = Sd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = ud;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = qi
                }
                var k = (t & 4) !== 0,
                    O = !k && e === "scroll",
                    f = k ? m !== null ? m + "Capture" : null : m;
                k = [];
                for (var c = d, p; c !== null;) {
                    p = c;
                    var g = p.stateNode;
                    if (p.tag === 5 && g !== null && (p = g, f !== null && (g = Mn(c, f), g != null && k.push(Hn(c, g, p)))), O) break;
                    c = c.return
                }
                0 < k.length && (m = new x(m, w, null, n, v), h.push({
                    event: m,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", m && n !== oo && (w = n.relatedTarget || n.fromElement) && (jt(w) || w[Ge])) break e;
                if ((x || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window, x ? (w = n.relatedTarget || n.toElement, x = d, w = w ? jt(w) : null, w !== null && (O = Dt(w), w !== O || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null, w = d), x !== w)) {
                    if (k = Ji, g = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = qi, g = "onPointerLeave", f = "onPointerEnter", c = "pointer"), O = x == null ? m : Bt(x), p = w == null ? m : Bt(w), m = new k(g, c + "leave", x, n, v), m.target = O, m.relatedTarget = p, g = null, jt(v) === d && (k = new k(f, c + "enter", w, n, v), k.target = p, k.relatedTarget = O, g = k), O = g, x && w) t: {
                        for (k = x, f = w, c = 0, p = k; p; p = Mt(p)) c++;
                        for (p = 0, g = f; g; g = Mt(g)) p++;
                        for (; 0 < c - p;) k = Mt(k),
                        c--;
                        for (; 0 < p - c;) f = Mt(f),
                        p--;
                        for (; c--;) {
                            if (k === f || f !== null && k === f.alternate) break t;
                            k = Mt(k), f = Mt(f)
                        }
                        k = null
                    }
                    else k = null;
                    x !== null && as(h, m, x, k, !1), w !== null && O !== null && as(h, O, w, k, !0)
                }
            }
            e: {
                if (m = d ? Bt(d) : window, x = m.nodeName && m.nodeName.toLowerCase(), x === "select" || x === "input" && m.type === "file") var S = Pd;
                else if (ts(m))
                    if (Uu) S = Rd;
                    else {
                        S = Fd;
                        var E = Td
                    }
                else(x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = Ld);
                if (S && (S = S(e, d))) {
                    $u(h, S, n, v);
                    break e
                }
                E && E(e, m, d),
                e === "focusout" && (E = m._wrapperState) && E.controlled && m.type === "number" && eo(m, "number", m.value)
            }
            switch (E = d ? Bt(d) : window, e) {
                case "focusin":
                    (ts(E) || E.contentEditable === "true") && (At = E, po = d, Pn = null);
                    break;
                case "focusout":
                    Pn = po = At = null;
                    break;
                case "mousedown":
                    mo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    mo = !1, is(h, n, v);
                    break;
                case "selectionchange":
                    if (Md) break;
                case "keydown":
                case "keyup":
                    is(h, n, v)
            }
            var C;
            if (li) e: {
                switch (e) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                }
                z = void 0
            }
            else Ut ? Mu(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");z && (Du && n.locale !== "ko" && (Ut || z !== "onCompositionStart" ? z === "onCompositionEnd" && Ut && (C = Ou()) : (nt = v, ti = "value" in nt ? nt.value : nt.textContent, Ut = !0)), E = Ar(d, z), 0 < E.length && (z = new Zi(z, e, null, n, v), h.push({
                event: z,
                listeners: E
            }), C ? z.data = C : (C = Iu(n), C !== null && (z.data = C)))),
            (C = jd ? Ed(e, n) : Cd(e, n)) && (d = Ar(d, "onBeforeInput"), 0 < d.length && (v = new Zi("onBeforeInput", "beforeinput", null, n, v), h.push({
                event: v,
                listeners: d
            }), v.data = C))
        }
        Xu(h, t)
    })
}

function Hn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Ar(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = Mn(e, n), o != null && r.unshift(Hn(e, o, l)), o = Mn(e, t), o != null && r.push(Hn(e, o, l))), e = e.return
    }
    return r
}

function Mt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function as(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var u = n,
            a = u.alternate,
            d = u.stateNode;
        if (a !== null && a === r) break;
        u.tag === 5 && d !== null && (u = d, l ? (a = Mn(n, o), a != null && i.unshift(Hn(n, a, u))) : l || (a = Mn(n, o), a != null && i.push(Hn(n, a, u)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Ad = /\r\n?/g,
    Vd = /\u0000|\uFFFD/g;

function cs(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ad, `
`).replace(Vd, "")
}

function mr(e, t, n) {
    if (t = cs(t), cs(e) !== t && n) throw Error(y(425))
}

function Vr() {}
var ho = null,
    vo = null;

function go(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var yo = typeof setTimeout == "function" ? setTimeout : void 0,
    Bd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ds = typeof Promise == "function" ? Promise : void 0,
    Hd = typeof queueMicrotask == "function" ? queueMicrotask : typeof ds < "u" ? function(e) {
        return ds.resolve(null).then(e).catch(Wd)
    } : yo;

function Wd(e) {
    setTimeout(function() {
        throw e
    })
}

function Il(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Un(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Un(t)
}

function st(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function fs(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var dn = Math.random().toString(36).slice(2),
    Ie = "__reactFiber$" + dn,
    Wn = "__reactProps$" + dn,
    Ge = "__reactContainer$" + dn,
    xo = "__reactEvents$" + dn,
    Qd = "__reactListeners$" + dn,
    Gd = "__reactHandles$" + dn;

function jt(e) {
    var t = e[Ie];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ge] || n[Ie]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = fs(e); e !== null;) {
                    if (n = e[Ie]) return n;
                    e = fs(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function er(e) {
    return e = e[Ie] || e[Ge], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Bt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33))
}

function ul(e) {
    return e[Wn] || null
}
var wo = [],
    Ht = -1;

function ht(e) {
    return {
        current: e
    }
}

function I(e) {
    0 > Ht || (e.current = wo[Ht], wo[Ht] = null, Ht--)
}

function D(e, t) {
    Ht++, wo[Ht] = e.current, e.current = t
}
var pt = {},
    ie = ht(pt),
    pe = ht(!1),
    Pt = pt;

function nn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function me(e) {
    return e = e.childContextTypes, e != null
}

function Br() {
    I(pe), I(ie)
}

function ps(e, t, n) {
    if (ie.current !== pt) throw Error(y(168));
    D(ie, t), D(pe, n)
}

function Zu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(y(108, Tc(e) || "Unknown", l));
    return B({}, n, r)
}

function Hr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt, Pt = ie.current, D(ie, e), D(pe, pe.current), !0
}

function ms(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    n ? (e = Zu(e, t, Pt), r.__reactInternalMemoizedMergedChildContext = e, I(pe), I(ie), D(ie, e)) : I(pe), D(pe, n)
}
var Ve = null,
    al = !1,
    $l = !1;

function qu(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}

function Kd(e) {
    al = !0, qu(e)
}

function vt() {
    if (!$l && Ve !== null) {
        $l = !0;
        var e = 0,
            t = R;
        try {
            var n = Ve;
            for (R = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Ve = null, al = !1
        } catch (l) {
            throw Ve !== null && (Ve = Ve.slice(e + 1)), Nu(Zo, vt), l
        } finally {
            R = t, $l = !1
        }
    }
    return null
}
var Wt = [],
    Qt = 0,
    Wr = null,
    Qr = 0,
    Se = [],
    Ne = 0,
    Tt = null,
    Be = 1,
    He = "";

function St(e, t) {
    Wt[Qt++] = Qr, Wt[Qt++] = Wr, Wr = e, Qr = t
}

function bu(e, t, n) {
    Se[Ne++] = Be, Se[Ne++] = He, Se[Ne++] = Tt, Tt = e;
    var r = Be;
    e = He;
    var l = 32 - Le(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Le(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Be = 1 << 32 - Le(t) + l | n << l | r, He = o + e
    } else Be = 1 << o | n << l | r, He = e
}

function ii(e) {
    e.return !== null && (St(e, 1), bu(e, 1, 0))
}

function si(e) {
    for (; e === Wr;) Wr = Wt[--Qt], Wt[Qt] = null, Qr = Wt[--Qt], Wt[Qt] = null;
    for (; e === Tt;) Tt = Se[--Ne], Se[Ne] = null, He = Se[--Ne], Se[Ne] = null, Be = Se[--Ne], Se[Ne] = null
}
var ye = null,
    ge = null,
    $ = !1,
    Fe = null;

function ea(e, t) {
    var n = je(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function hs(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ge = st(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ge = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tt !== null ? {
                id: Be,
                overflow: He
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ge = null, !0) : !1;
        default:
            return !1
    }
}

function ko(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function So(e) {
    if ($) {
        var t = ge;
        if (t) {
            var n = t;
            if (!hs(e, t)) {
                if (ko(e)) throw Error(y(418));
                t = st(n.nextSibling);
                var r = ye;
                t && hs(e, t) ? ea(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, ye = e)
            }
        } else {
            if (ko(e)) throw Error(y(418));
            e.flags = e.flags & -4097 | 2, $ = !1, ye = e
        }
    }
}

function vs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ye = e
}

function hr(e) {
    if (e !== ye) return !1;
    if (!$) return vs(e), $ = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !go(e.type, e.memoizedProps)), t && (t = ge)) {
        if (ko(e)) throw ta(), Error(y(418));
        for (; t;) ea(e, t), t = st(t.nextSibling)
    }
    if (vs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ge = st(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ge = null
        }
    } else ge = ye ? st(e.stateNode.nextSibling) : null;
    return !0
}

function ta() {
    for (var e = ge; e;) e = st(e.nextSibling)
}

function rn() {
    ge = ye = null, $ = !1
}

function ui(e) {
    Fe === null ? Fe = [e] : Fe.push(e)
}
var Yd = Xe.ReactCurrentBatchConfig;

function yn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(y(309));
                var r = n.stateNode
            }
            if (!r) throw Error(y(147, e));
            var l = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var u = l.refs;
                i === null ? delete u[o] : u[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(y(284));
        if (!n._owner) throw Error(y(290, e))
    }
    return e
}

function vr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function gs(e) {
    var t = e._init;
    return t(e._payload)
}

function na(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function l(f, c) {
        return f = dt(f, c), f.index = 0, f.sibling = null, f
    }

    function o(f, c, p) {
        return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function u(f, c, p, g) {
        return c === null || c.tag !== 6 ? (c = Ql(p, f.mode, g), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function a(f, c, p, g) {
        var S = p.type;
        return S === $t ? v(f, c, p.props.children, g, p.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === qe && gs(S) === c.type) ? (g = l(c, p.props), g.ref = yn(f, c, p), g.return = f, g) : (g = Lr(p.type, p.key, p.props, null, f.mode, g), g.ref = yn(f, c, p), g.return = f, g)
    }

    function d(f, c, p, g) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Gl(p, f.mode, g), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c)
    }

    function v(f, c, p, g, S) {
        return c === null || c.tag !== 7 ? (c = _t(p, f.mode, g, S), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function h(f, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ql("" + c, f.mode, p), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case or:
                    return p = Lr(c.type, c.key, c.props, null, f.mode, p), p.ref = yn(f, null, c), p.return = f, p;
                case It:
                    return c = Gl(c, f.mode, p), c.return = f, c;
                case qe:
                    var g = c._init;
                    return h(f, g(c._payload), p)
            }
            if (Sn(c) || pn(c)) return c = _t(c, f.mode, p, null), c.return = f, c;
            vr(f, c)
        }
        return null
    }

    function m(f, c, p, g) {
        var S = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return S !== null ? null : u(f, c, "" + p, g);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case or:
                    return p.key === S ? a(f, c, p, g) : null;
                case It:
                    return p.key === S ? d(f, c, p, g) : null;
                case qe:
                    return S = p._init, m(f, c, S(p._payload), g)
            }
            if (Sn(p) || pn(p)) return S !== null ? null : v(f, c, p, g, null);
            vr(f, p)
        }
        return null
    }

    function x(f, c, p, g, S) {
        if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(p) || null, u(c, f, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case or:
                    return f = f.get(g.key === null ? p : g.key) || null, a(c, f, g, S);
                case It:
                    return f = f.get(g.key === null ? p : g.key) || null, d(c, f, g, S);
                case qe:
                    var E = g._init;
                    return x(f, c, p, E(g._payload), S)
            }
            if (Sn(g) || pn(g)) return f = f.get(p) || null, v(c, f, g, S, null);
            vr(c, g)
        }
        return null
    }

    function w(f, c, p, g) {
        for (var S = null, E = null, C = c, z = c = 0, U = null; C !== null && z < p.length; z++) {
            C.index > z ? (U = C, C = null) : U = C.sibling;
            var T = m(f, C, p[z], g);
            if (T === null) {
                C === null && (C = U);
                break
            }
            e && C && T.alternate === null && t(f, C), c = o(T, c, z), E === null ? S = T : E.sibling = T, E = T, C = U
        }
        if (z === p.length) return n(f, C), $ && St(f, z), S;
        if (C === null) {
            for (; z < p.length; z++) C = h(f, p[z], g), C !== null && (c = o(C, c, z), E === null ? S = C : E.sibling = C, E = C);
            return $ && St(f, z), S
        }
        for (C = r(f, C); z < p.length; z++) U = x(C, f, z, p[z], g), U !== null && (e && U.alternate !== null && C.delete(U.key === null ? z : U.key), c = o(U, c, z), E === null ? S = U : E.sibling = U, E = U);
        return e && C.forEach(function(ne) {
            return t(f, ne)
        }), $ && St(f, z), S
    }

    function k(f, c, p, g) {
        var S = pn(p);
        if (typeof S != "function") throw Error(y(150));
        if (p = S.call(p), p == null) throw Error(y(151));
        for (var E = S = null, C = c, z = c = 0, U = null, T = p.next(); C !== null && !T.done; z++, T = p.next()) {
            C.index > z ? (U = C, C = null) : U = C.sibling;
            var ne = m(f, C, T.value, g);
            if (ne === null) {
                C === null && (C = U);
                break
            }
            e && C && ne.alternate === null && t(f, C), c = o(ne, c, z), E === null ? S = ne : E.sibling = ne, E = ne, C = U
        }
        if (T.done) return n(f, C), $ && St(f, z), S;
        if (C === null) {
            for (; !T.done; z++, T = p.next()) T = h(f, T.value, g), T !== null && (c = o(T, c, z), E === null ? S = T : E.sibling = T, E = T);
            return $ && St(f, z), S
        }
        for (C = r(f, C); !T.done; z++, T = p.next()) T = x(C, f, z, T.value, g), T !== null && (e && T.alternate !== null && C.delete(T.key === null ? z : T.key), c = o(T, c, z), E === null ? S = T : E.sibling = T, E = T);
        return e && C.forEach(function(gt) {
            return t(f, gt)
        }), $ && St(f, z), S
    }

    function O(f, c, p, g) {
        if (typeof p == "object" && p !== null && p.type === $t && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case or:
                    e: {
                        for (var S = p.key, E = c; E !== null;) {
                            if (E.key === S) {
                                if (S = p.type, S === $t) {
                                    if (E.tag === 7) {
                                        n(f, E.sibling), c = l(E, p.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === qe && gs(S) === E.type) {
                                    n(f, E.sibling), c = l(E, p.props), c.ref = yn(f, E, p), c.return = f, f = c;
                                    break e
                                }
                                n(f, E);
                                break
                            } else t(f, E);
                            E = E.sibling
                        }
                        p.type === $t ? (c = _t(p.props.children, f.mode, g, p.key), c.return = f, f = c) : (g = Lr(p.type, p.key, p.props, null, f.mode, g), g.ref = yn(f, c, p), g.return = f, f = g)
                    }
                    return i(f);
                case It:
                    e: {
                        for (E = p.key; c !== null;) {
                            if (c.key === E)
                                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                    n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                                    break e
                                } else {
                                    n(f, c);
                                    break
                                }
                            else t(f, c);
                            c = c.sibling
                        }
                        c = Gl(p, f.mode, g),
                        c.return = f,
                        f = c
                    }
                    return i(f);
                case qe:
                    return E = p._init, O(f, c, E(p._payload), g)
            }
            if (Sn(p)) return w(f, c, p, g);
            if (pn(p)) return k(f, c, p, g);
            vr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = Ql(p, f.mode, g), c.return = f, f = c), i(f)) : n(f, c)
    }
    return O
}
var ln = na(!0),
    ra = na(!1),
    Gr = ht(null),
    Kr = null,
    Gt = null,
    ai = null;

function ci() {
    ai = Gt = Kr = null
}

function di(e) {
    var t = Gr.current;
    I(Gr), e._currentValue = t
}

function No(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function bt(e, t) {
    Kr = e, ai = Gt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null)
}

function Ce(e) {
    var t = e._currentValue;
    if (ai !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Gt === null) {
            if (Kr === null) throw Error(y(308));
            Gt = e, Kr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Gt = Gt.next = e;
    return t
}
var Et = null;

function fi(e) {
    Et === null ? Et = [e] : Et.push(e)
}

function la(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, fi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ke(e, r)
}

function Ke(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var be = !1;

function pi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function oa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function We(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, L & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ke(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, fi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ke(e, n)
}

function Cr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, qo(e, n)
    }
}

function ys(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Yr(e, t, n, r) {
    var l = e.updateQueue;
    be = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var a = u,
            d = a.next;
        a.next = null, i === null ? o = d : i.next = d, i = a;
        var v = e.alternate;
        v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== i && (u === null ? v.firstBaseUpdate = d : u.next = d, v.lastBaseUpdate = a))
    }
    if (o !== null) {
        var h = l.baseState;
        i = 0, v = d = a = null, u = o;
        do {
            var m = u.lane,
                x = u.eventTime;
            if ((r & m) === m) {
                v !== null && (v = v.next = {
                    eventTime: x,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var w = e,
                        k = u;
                    switch (m = t, x = n, k.tag) {
                        case 1:
                            if (w = k.payload, typeof w == "function") {
                                h = w.call(x, h, m);
                                break e
                            }
                            h = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = k.payload, m = typeof w == "function" ? w.call(x, h, m) : w, m == null) break e;
                            h = B({}, h, m);
                            break e;
                        case 2:
                            be = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u))
            } else x = {
                eventTime: x,
                lane: m,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, v === null ? (d = v = x, a = h) : v = v.next = x, i |= m;
            if (u = u.next, u === null) {
                if (u = l.shared.pending, u === null) break;
                m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null
            }
        } while (!0);
        if (v === null && (a = h), l.baseState = a, l.firstBaseUpdate = d, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        Lt |= i, e.lanes = i, e.memoizedState = h
    }
}

function xs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
                l.call(r)
            }
        }
}
var tr = {},
    Ue = ht(tr),
    Qn = ht(tr),
    Gn = ht(tr);

function Ct(e) {
    if (e === tr) throw Error(y(174));
    return e
}

function mi(e, t) {
    switch (D(Gn, t), D(Qn, e), D(Ue, tr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : no(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = no(t, e)
    }
    I(Ue), D(Ue, t)
}

function on() {
    I(Ue), I(Qn), I(Gn)
}

function ia(e) {
    Ct(Gn.current);
    var t = Ct(Ue.current),
        n = no(t, e.type);
    t !== n && (D(Qn, e), D(Ue, n))
}

function hi(e) {
    Qn.current === e && (I(Ue), I(Qn))
}
var A = ht(0);

function Xr(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ul = [];

function vi() {
    for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0
}
var zr = Xe.ReactCurrentDispatcher,
    Al = Xe.ReactCurrentBatchConfig,
    Ft = 0,
    V = null,
    K = null,
    J = null,
    Jr = !1,
    Tn = !1,
    Kn = 0,
    Xd = 0;

function re() {
    throw Error(y(321))
}

function gi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Oe(e[n], t[n])) return !1;
    return !0
}

function yi(e, t, n, r, l, o) {
    if (Ft = o, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? bd : ef, e = n(r, l), Tn) {
        o = 0;
        do {
            if (Tn = !1, Kn = 0, 25 <= o) throw Error(y(301));
            o += 1, J = K = null, t.updateQueue = null, zr.current = tf, e = n(r, l)
        } while (Tn)
    }
    if (zr.current = Zr, t = K !== null && K.next !== null, Ft = 0, J = K = V = null, Jr = !1, t) throw Error(y(300));
    return e
}

function xi() {
    var e = Kn !== 0;
    return Kn = 0, e
}

function Me() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return J === null ? V.memoizedState = J = e : J = J.next = e, J
}

function ze() {
    if (K === null) {
        var e = V.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = K.next;
    var t = J === null ? V.memoizedState : J.next;
    if (t !== null) J = t, K = e;
    else {
        if (e === null) throw Error(y(310));
        K = e, e = {
            memoizedState: K.memoizedState,
            baseState: K.baseState,
            baseQueue: K.baseQueue,
            queue: K.queue,
            next: null
        }, J === null ? V.memoizedState = J = e : J = J.next = e
    }
    return J
}

function Yn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Vl(e) {
    var t = ze(),
        n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = K,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var u = i = null,
            a = null,
            d = o;
        do {
            var v = d.lane;
            if ((Ft & v) === v) a !== null && (a = a.next = {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var h = {
                    lane: v,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                a === null ? (u = a = h, i = r) : a = a.next = h, V.lanes |= v, Lt |= v
            }
            d = d.next
        } while (d !== null && d !== o);
        a === null ? i = r : a.next = u, Oe(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, V.lanes |= o, Lt |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Bl(e) {
    var t = ze(),
        n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        Oe(o, t.memoizedState) || (fe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function sa() {}

function ua(e, t) {
    var n = V,
        r = ze(),
        l = t(),
        o = !Oe(r.memoizedState, l);
    if (o && (r.memoizedState = l, fe = !0), r = r.queue, wi(da.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
        if (n.flags |= 2048, Xn(9, ca.bind(null, n, r, l, t), void 0, null), Z === null) throw Error(y(349));
        Ft & 30 || aa(n, t, l)
    }
    return l
}

function aa(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = V.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ca(e, t, n, r) {
    t.value = n, t.getSnapshot = r, fa(t) && pa(e)
}

function da(e, t, n) {
    return n(function() {
        fa(t) && pa(e)
    })
}

function fa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Oe(e, n)
    } catch {
        return !0
    }
}

function pa(e) {
    var t = Ke(e, 1);
    t !== null && Re(t, e, 1, -1)
}

function ws(e) {
    var t = Me();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = qd.bind(null, V, e), [t.memoizedState, e]
}

function Xn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = V.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function ma() {
    return ze().memoizedState
}

function _r(e, t, n, r) {
    var l = Me();
    V.flags |= e, l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r)
}

function cl(e, t, n, r) {
    var l = ze();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (K !== null) {
        var i = K.memoizedState;
        if (o = i.destroy, r !== null && gi(r, i.deps)) {
            l.memoizedState = Xn(t, n, o, r);
            return
        }
    }
    V.flags |= e, l.memoizedState = Xn(1 | t, n, o, r)
}

function ks(e, t) {
    return _r(8390656, 8, e, t)
}

function wi(e, t) {
    return cl(2048, 8, e, t)
}

function ha(e, t) {
    return cl(4, 2, e, t)
}

function va(e, t) {
    return cl(4, 4, e, t)
}

function ga(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function ya(e, t, n) {
    return n = n != null ? n.concat([e]) : null, cl(4, 4, ga.bind(null, t, e), n)
}

function ki() {}

function xa(e, t) {
    var n = ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function wa(e, t) {
    var n = ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function ka(e, t, n) {
    return Ft & 21 ? (Oe(n, t) || (n = Cu(), V.lanes |= n, Lt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n)
}

function Jd(e, t) {
    var n = R;
    R = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Al.transition;
    Al.transition = {};
    try {
        e(!1), t()
    } finally {
        R = n, Al.transition = r
    }
}

function Sa() {
    return ze().memoizedState
}

function Zd(e, t, n) {
    var r = ct(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Na(e)) ja(t, n);
    else if (n = la(e, t, n, r), n !== null) {
        var l = ue();
        Re(n, e, r, l), Ea(n, t, r)
    }
}

function qd(e, t, n) {
    var r = ct(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Na(e)) ja(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState,
                u = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = u, Oe(u, i)) {
                var a = t.interleaved;
                a === null ? (l.next = l, fi(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = la(e, t, l, r), n !== null && (l = ue(), Re(n, e, r, l), Ea(n, t, r))
    }
}

function Na(e) {
    var t = e.alternate;
    return e === V || t !== null && t === V
}

function ja(e, t) {
    Tn = Jr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Ea(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, qo(e, n)
    }
}
var Zr = {
        readContext: Ce,
        useCallback: re,
        useContext: re,
        useEffect: re,
        useImperativeHandle: re,
        useInsertionEffect: re,
        useLayoutEffect: re,
        useMemo: re,
        useReducer: re,
        useRef: re,
        useState: re,
        useDebugValue: re,
        useDeferredValue: re,
        useTransition: re,
        useMutableSource: re,
        useSyncExternalStore: re,
        useId: re,
        unstable_isNewReconciler: !1
    },
    bd = {
        readContext: Ce,
        useCallback: function(e, t) {
            return Me().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ce,
        useEffect: ks,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, _r(4194308, 4, ga.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return _r(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return _r(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Me();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Me();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Zd.bind(null, V, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Me();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: ws,
        useDebugValue: ki,
        useDeferredValue: function(e) {
            return Me().memoizedState = e
        },
        useTransition: function() {
            var e = ws(!1),
                t = e[0];
            return e = Jd.bind(null, e[1]), Me().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = V,
                l = Me();
            if ($) {
                if (n === void 0) throw Error(y(407));
                n = n()
            } else {
                if (n = t(), Z === null) throw Error(y(349));
                Ft & 30 || aa(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, ks(da.bind(null, r, o, e), [e]), r.flags |= 2048, Xn(9, ca.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = Me(),
                t = Z.identifierPrefix;
            if ($) {
                var n = He,
                    r = Be;
                n = (r & ~(1 << 32 - Le(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Xd++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    ef = {
        readContext: Ce,
        useCallback: xa,
        useContext: Ce,
        useEffect: wi,
        useImperativeHandle: ya,
        useInsertionEffect: ha,
        useLayoutEffect: va,
        useMemo: wa,
        useReducer: Vl,
        useRef: ma,
        useState: function() {
            return Vl(Yn)
        },
        useDebugValue: ki,
        useDeferredValue: function(e) {
            var t = ze();
            return ka(t, K.memoizedState, e)
        },
        useTransition: function() {
            var e = Vl(Yn)[0],
                t = ze().memoizedState;
            return [e, t]
        },
        useMutableSource: sa,
        useSyncExternalStore: ua,
        useId: Sa,
        unstable_isNewReconciler: !1
    },
    tf = {
        readContext: Ce,
        useCallback: xa,
        useContext: Ce,
        useEffect: wi,
        useImperativeHandle: ya,
        useInsertionEffect: ha,
        useLayoutEffect: va,
        useMemo: wa,
        useReducer: Bl,
        useRef: ma,
        useState: function() {
            return Bl(Yn)
        },
        useDebugValue: ki,
        useDeferredValue: function(e) {
            var t = ze();
            return K === null ? t.memoizedState = e : ka(t, K.memoizedState, e)
        },
        useTransition: function() {
            var e = Bl(Yn)[0],
                t = ze().memoizedState;
            return [e, t]
        },
        useMutableSource: sa,
        useSyncExternalStore: ua,
        useId: Sa,
        unstable_isNewReconciler: !1
    };

function Pe(e, t) {
    if (e && e.defaultProps) {
        t = B({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function jo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var dl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Dt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue(),
            l = ct(e),
            o = We(r, l);
        o.payload = t, n != null && (o.callback = n), t = ut(e, o, l), t !== null && (Re(t, e, l, r), Cr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue(),
            l = ct(e),
            o = We(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ut(e, o, l), t !== null && (Re(t, e, l, r), Cr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue(),
            r = ct(e),
            l = We(n, r);
        l.tag = 2, t != null && (l.callback = t), t = ut(e, l, r), t !== null && (Re(t, e, r, n), Cr(t, e, r))
    }
};

function Ss(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Vn(n, r) || !Vn(l, o) : !0
}

function Ca(e, t, n) {
    var r = !1,
        l = pt,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = Ce(o) : (l = me(t) ? Pt : ie.current, r = t.contextTypes, o = (r = r != null) ? nn(e, l) : pt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = dl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Ns(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && dl.enqueueReplaceState(t, t.state, null)
}

function Eo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, pi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Ce(o) : (o = me(t) ? Pt : ie.current, l.context = nn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (jo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && dl.enqueueReplaceState(l, l.state, null), Yr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function sn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Pc(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Hl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    };
}


function Co(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var nf = typeof WeakMap == "function" ? WeakMap : Map;

function za(e, t, n) {
    n = We(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        br || (br = !0, Mo = r), Co(e, t)
    }, n
}

function _a(e, t, n) {
    n = We(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            Co(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Co(e, t), typeof r != "function" && (at === null ? at = new Set([this]) : at.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function js(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new nf;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = gf.bind(null, e, t, n), t.then(e, e))
}

function Es(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Cs(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = We(-1, 1), t.tag = 2, ut(n, t, 1))), n.lanes |= 1), e)
}
var rf = Xe.ReactCurrentOwner,
    fe = !1;

function se(e, t, n, r) {
    t.child = e === null ? ra(t, null, n, r) : ln(t, e.child, n, r)
}

function zs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return bt(t, l), r = yi(e, t, n, r, o, l), n = xi(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ye(e, t, l)) : ($ && n && ii(t), t.flags |= 1, se(e, t, r, l), t.child)
}

function _s(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Pi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Pa(e, t, o, r, l)) : (e = Lr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Vn, n(i, r) && e.ref === t.ref) return Ye(e, t, l)
    }
    return t.flags |= 1, e = dt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Pa(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Vn(o, r) && e.ref === t.ref)
            if (fe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
            else return t.lanes = e.lanes, Ye(e, t, l)
    }
    return zo(e, t, n, r, l)
}

function Ta(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, D(Yt, ve), ve |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, D(Yt, ve), ve |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, D(Yt, ve), ve |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, D(Yt, ve), ve |= r;
    return se(e, t, l, n), t.child
}

function Fa(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function zo(e, t, n, r, l) {
    var o = me(n) ? Pt : ie.current;
    return o = nn(t, o), bt(t, l), n = yi(e, t, n, r, o, l), r = xi(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ye(e, t, l)) : ($ && r && ii(t), t.flags |= 1, se(e, t, n, l), t.child)
}

function Ps(e, t, n, r, l) {
    if (me(n)) {
        var o = !0;
        Hr(t)
    } else o = !1;
    if (bt(t, l), t.stateNode === null) Pr(e, t), Ca(t, n, r), Eo(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            u = t.memoizedProps;
        i.props = u;
        var a = i.context,
            d = n.contextType;
        typeof d == "object" && d !== null ? d = Ce(d) : (d = me(n) ? Pt : ie.current, d = nn(t, d));
        var v = n.getDerivedStateFromProps,
            h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== d) && Ns(t, i, r, d), be = !1;
        var m = t.memoizedState;
        i.state = m, Yr(t, r, i, l), a = t.memoizedState, u !== r || m !== a || pe.current || be ? (typeof v == "function" && (jo(t, n, v, r), a = t.memoizedState), (u = be || Ss(t, n, u, r, m, a, d)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = d, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, oa(e, t), u = t.memoizedProps, d = t.type === t.elementType ? u : Pe(t.type, u), i.props = d, h = t.pendingProps, m = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = Ce(a) : (a = me(n) ? Pt : ie.current, a = nn(t, a));
        var x = n.getDerivedStateFromProps;
        (v = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== a) && Ns(t, i, r, a), be = !1, m = t.memoizedState, i.state = m, Yr(t, r, i, l);
        var w = t.memoizedState;
        u !== h || m !== w || pe.current || be ? (typeof x == "function" && (jo(t, n, x, r), w = t.memoizedState), (d = be || Ss(t, n, d, r, m, w, a) || !1) ? (v || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = a, r = d) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return _o(e, t, n, r, o, l)
}

function _o(e, t, n, r, l, o) {
    Fa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && ms(t, n, !1), Ye(e, t, o);
    r = t.stateNode, rf.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = ln(t, e.child, null, o), t.child = ln(t, null, u, o)) : se(e, t, u, o), t.memoizedState = r.state, l && ms(t, n, !0), t.child
}

function La(e) {
    var t = e.stateNode;
    t.pendingContext ? ps(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ps(e, t.context, !1), mi(e, t.containerInfo)
}

function Ts(e, t, n, r, l) {
    return rn(), ui(l), t.flags |= 256, se(e, t, n, r), t.child
}
var Po = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function To(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Ra(e, t, n) {
    var r = t.pendingProps,
        l = A.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D(A, l & 1), e === null) return So(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = ml(i, r, 0, null), e = _t(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = To(n), t.memoizedState = Po, e) : Si(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return lf(e, t, i, r, u, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = dt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = dt(u, o) : (o = _t(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? To(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Po, r
    }
    return o = e.child, e = o.sibling, r = dt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Si(e, t) {
    return t = ml({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function gr(e, t, n, r) {
    return r !== null && ui(r), ln(t, e.child, null, n), e = Si(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function lf(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Hl(Error(y(422))), gr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = ml({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = _t(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ln(t, e.child, null, i), t.child.memoizedState = To(i), t.memoizedState = Po, o);
    if (!(t.mode & 1)) return gr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
        return r = u, o = Error(y(419)), r = Hl(o, r, void 0), gr(e, t, i, r)
    }
    if (u = (i & e.childLanes) !== 0, fe || u) {
        if (r = Z, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ke(e, l), Re(r, e, l, -1))
        }
        return _i(), r = Hl(Error(y(421))), gr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = yf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ge = st(l.nextSibling), ye = t, $ = !0, Fe = null, e !== null && (Se[Ne++] = Be, Se[Ne++] = He, Se[Ne++] = Tt, Be = e.id, He = e.overflow, Tt = t), t = Si(t, r.children), t.flags |= 4096, t)
}

function Fs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), No(e.return, t, n)
}

function Wl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function Oa(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (se(e, t, r.children, n), r = A.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Fs(e, n, t);
            else if (e.tag === 19) Fs(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (D(A, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Xr(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Wl(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Xr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Wl(t, !0, n, null, o);
            break;
        case "together":
            Wl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Pr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ye(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Lt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
        for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function of (e, t, n) {
    switch (t.tag) {
        case 3:
            La(t), rn();
            break;
        case 5:
            ia(t);
            break;
        case 1:
            me(t.type) && Hr(t);
            break;
        case 4:
            mi(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            D(Gr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (D(A, A.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ra(e, t, n) : (D(A, A.current & 1), e = Ye(e, t, n), e !== null ? e.sibling : null);
            D(A, A.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Oa(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D(A, A.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Ta(e, t, n)
    }
    return Ye(e, t, n)
}
var Da, Fo, Ma, Ia;
Da = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Fo = function() {};
Ma = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, Ct(Ue.current);
        var o = null;
        switch (n) {
            case "input":
                l = ql(e, l), r = ql(e, r), o = [];
                break;
            case "select":
                l = B({}, l, {
                    value: void 0
                }), r = B({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                l = to(e, l), r = to(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vr)
        }
        ro(n, r);
        var i;
        n = null;
        for (d in l)
            if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                    var u = l[d];
                    for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (On.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
        for (d in r) {
            var a = r[d];
            if (u = l != null ? l[d] : void 0, r.hasOwnProperty(d) && a !== u && (a != null || u != null))
                if (d === "style")
                    if (u) {
                        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), n[i] = a[i])
                    } else n || (o || (o = []), o.push(d, n)), n = a;
            else d === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(d, a)) : d === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(d, "" + a) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (On.hasOwnProperty(d) ? (a != null && d === "onScroll" && M("scroll", e), o || u === a || (o = [])) : (o = o || []).push(d, a))
        }
        n && (o = o || []).push("style", n);
        var d = o;
        (t.updateQueue = d) && (t.flags |= 4)
    }
};
Ia = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function xn(e, t) {
    if (!$) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function sf(e, t, n) {
    var r = t.pendingProps;
    switch (si(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return le(t), null;
        case 1:
            return me(t.type) && Br(), le(t), null;
        case 3:
            return r = t.stateNode, on(), I(pe), I(ie), vi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Fe !== null && (Uo(Fe), Fe = null))), Fo(e, t), le(t), null;
        case 5:
            hi(t);
            var l = Ct(Gn.current);
            if (n = t.type, e !== null && t.stateNode != null) Ma(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(y(166));
                    return le(t), null
                }
                if (e = Ct(Ue.current), hr(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Ie] = t, r[Wn] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            M("cancel", r), M("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            M("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < jn.length; l++) M(jn[l], r);
                            break;
                        case "source":
                            M("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            M("error", r), M("load", r);
                            break;
                        case "details":
                            M("toggle", r);
                            break;
                        case "input":
                            Ai(r, o), M("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, M("invalid", r);
                            break;
                        case "textarea":
                            Bi(r, o), M("invalid", r)
                    }
                    ro(n, o), l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && mr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && mr(r.textContent, u, e), l = ["children", "" + u]) : On.hasOwnProperty(i) && u != null && i === "onScroll" && M("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            ir(r), Vi(r, o, !0);
                            break;
                        case "textarea":
                            ir(r), Hi(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Vr)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = du(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ie] = t, e[Wn] = r, Da(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = lo(n, r), n) {
                            case "dialog":
                                M("cancel", e), M("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                M("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < jn.length; l++) M(jn[l], e);
                                l = r;
                                break;
                            case "source":
                                M("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                M("error", e), M("load", e), l = r;
                                break;
                            case "details":
                                M("toggle", e), l = r;
                                break;
                            case "input":
                                Ai(e, r), l = ql(e, r), M("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = B({}, r, {
                                    value: void 0
                                }), M("invalid", e);
                                break;
                            case "textarea":
                                Bi(e, r), l = to(e, r), M("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        ro(n, l),
                        u = l;
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var a = u[o];
                                o === "style" ? mu(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && fu(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Dn(e, a) : typeof a == "number" && Dn(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (On.hasOwnProperty(o) ? a != null && o === "onScroll" && M("scroll", e) : a != null && Go(e, o, a, i))
                            }
                        switch (n) {
                            case "input":
                                ir(e), Vi(e, r, !1);
                                break;
                            case "textarea":
                                ir(e), Hi(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ft(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Xt(e, !!r.multiple, o, !1) : r.defaultValue != null && Xt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Vr)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return le(t), null;
        case 6:
            if (e && t.stateNode != null) Ia(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
                if (n = Ct(Gn.current), Ct(Ue.current), hr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ie] = t, (o = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
                        case 3:
                            mr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && mr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ie] = t, t.stateNode = r
            }
            return le(t), null;
        case 13:
            if (I(A), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if ($ && ge !== null && t.mode & 1 && !(t.flags & 128)) ta(), rn(), t.flags |= 98560, o = !1;
                else if (o = hr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(y(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
                        o[Ie] = t
                    } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    le(t), o = !1
                } else Fe !== null && (Uo(Fe), Fe = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || A.current & 1 ? Y === 0 && (Y = 3) : _i())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
        case 4:
            return on(), Fo(e, t), e === null && Bn(t.stateNode.containerInfo), le(t), null;
        case 10:
            return di(t.type._context), le(t), null;
        case 17:
            return me(t.type) && Br(), le(t), null;
        case 19:
            if (I(A), o = t.memoizedState, o === null) return le(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                if (r) xn(o, !1);
                else {
                    if (Y !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = Xr(e), i !== null) {
                                for (t.flags |= 128, xn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return D(A, A.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && Q() > un && (t.flags |= 128, r = !0, xn(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Xr(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$) return le(t), null
                    } else 2 * Q() - o.renderingStartTime > un && n !== 1073741824 && (t.flags |= 128, r = !0, xn(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Q(), t.sibling = null, n = A.current, D(A, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
        case 22:
        case 23:
            return zi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(y(156, t.tag))
}

function uf(e, t) {
    switch (si(t), t.tag) {
        case 1:
            return me(t.type) && Br(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return on(), I(pe), I(ie), vi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return hi(t), null;
        case 13:
            if (I(A), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(y(340));
                rn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return I(A), null;
        case 4:
            return on(), null;
        case 10:
            return di(t.type._context), null;
        case 22:
        case 23:
            return zi(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var yr = !1,
    oe = !1,
    af = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;

function Kt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            H(e, t, r)
        } else n.current = null
}

function Lo(e, t, n) {
    try {
        n()
    } catch (r) {
        H(e, t, r)
    }
}
var Ls = !1;

function cf(e, t) {
    if (ho = $r, e = Bu(), oi(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    u = -1,
                    a = -1,
                    d = 0,
                    v = 0,
                    h = e,
                    m = null;
                t: for (;;) {
                    for (var x; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (a = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (x = h.firstChild) !== null;) m = h, h = x;
                    for (;;) {
                        if (h === e) break t;
                        if (m === n && ++d === l && (u = i), m === o && ++v === r && (a = i), (x = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode
                    }
                    h = x
                }
                n = u === -1 || a === -1 ? null : {
                    start: u,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (vo = {
            focusedElem: e,
            selectionRange: n
        }, $r = !1, j = t; j !== null;)
        if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
        else
            for (; j !== null;) {
                t = j;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps,
                                    O = w.memoizedState,
                                    f = t.stateNode,
                                    c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Pe(t.type, k), O);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(y(163))
                    }
                } catch (g) {
                    H(t, t.return, g)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, j = e;
                    break
                }
                j = t.return
            }
    return w = Ls, Ls = !1, w
}

function Fn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Lo(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function fl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ro(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function $a(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $a(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ie], delete t[Wn], delete t[xo], delete t[Qd], delete t[Gd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Ua(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Rs(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Ua(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Vr));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Oo(e, t, n), e = e.sibling; e !== null;) Oo(e, t, n), e = e.sibling
}

function Do(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Do(e, t, n), e = e.sibling; e !== null;) Do(e, t, n), e = e.sibling
}
var b = null,
    Te = !1;

function Ze(e, t, n) {
    for (n = n.child; n !== null;) Aa(e, t, n), n = n.sibling
}

function Aa(e, t, n) {
    if ($e && typeof $e.onCommitFiberUnmount == "function") try {
        $e.onCommitFiberUnmount(ll, n)
    } catch {}
    switch (n.tag) {
        case 5:
            oe || Kt(n, t);
        case 6:
            var r = b,
                l = Te;
            b = null, Ze(e, t, n), b = r, Te = l, b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
            break;
        case 18:
            b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? Il(e.parentNode, n) : e.nodeType === 1 && Il(e, n), Un(e)) : Il(b, n.stateNode));
            break;
        case 4:
            r = b, l = Te, b = n.stateNode.containerInfo, Te = !0, Ze(e, t, n), b = r, Te = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && Lo(n, t, i), l = l.next
                } while (l !== r)
            }
            Ze(e, t, n);
            break;
        case 1:
            if (!oe && (Kt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (u) {
                H(n, t, u)
            }
            Ze(e, t, n);
            break;
        case 21:
            Ze(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (oe = (r = oe) || n.memoizedState !== null, Ze(e, t, n), oe = r) : Ze(e, t, n);
            break;
        default:
            Ze(e, t, n)
    }
}

function Os(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new af), t.forEach(function(r) {
            var l = xf.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function _e(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    u = i;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            b = u.stateNode, Te = !1;
                            break e;
                        case 3:
                            b = u.stateNode.containerInfo, Te = !0;
                            break e;
                        case 4:
                            b = u.stateNode.containerInfo, Te = !0;
                            break e
                    }
                    u = u.return
                }
                if (b === null) throw Error(y(160));
                Aa(o, i, l), b = null, Te = !1;
                var a = l.alternate;
                a !== null && (a.return = null), l.return = null
            } catch (d) {
                H(l, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Va(t, e), t = t.sibling
}

function Va(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (_e(t, e), De(e), r & 4) {
                try {
                    Fn(3, e, e.return), fl(3, e)
                } catch (k) {
                    H(e, e.return, k)
                }
                try {
                    Fn(5, e, e.return)
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 1:
            _e(t, e), De(e), r & 512 && n !== null && Kt(n, n.return);
            break;
        case 5:
            if (_e(t, e), De(e), r & 512 && n !== null && Kt(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Dn(l, "")
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    u = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    u === "input" && o.type === "radio" && o.name != null && au(l, o), lo(u, i);
                    var d = lo(u, o);
                    for (i = 0; i < a.length; i += 2) {
                        var v = a[i],
                            h = a[i + 1];
                        v === "style" ? mu(l, h) : v === "dangerouslySetInnerHTML" ? fu(l, h) : v === "children" ? Dn(l, h) : Go(l, v, h, d)
                    }
                    switch (u) {
                        case "input":
                            bl(l, o);
                            break;
                        case "textarea":
                            cu(l, o);
                            break;
                        case "select":
                            var m = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var x = o.value;
                            x != null ? Xt(l, !!o.multiple, x, !1) : m !== !!o.multiple && (o.defaultValue != null ? Xt(l, !!o.multiple, o.defaultValue, !0) : Xt(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Wn] = o
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 6:
            if (_e(t, e), De(e), r & 4) {
                if (e.stateNode === null) throw Error(y(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 3:
            if (_e(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Un(t.containerInfo)
            } catch (k) {
                H(e, e.return, k)
            }
            break;
        case 4:
            _e(t, e), De(e);
            break;
        case 13:
            _e(t, e), De(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ei = Q())), r & 4 && Os(e);
            break;
        case 22:
            if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (d = oe) || v, _e(t, e), oe = d) : _e(t, e), De(e), r & 8192) {
                if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !v && e.mode & 1)
                    for (j = e, v = e.child; v !== null;) {
                        for (h = j = v; j !== null;) {
                            switch (m = j, x = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Fn(4, m, m.return);
                                    break;
                                case 1:
                                    Kt(m, m.return);
                                    var w = m.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (k) {
                                            H(r, n, k)
                                        }
                                    }
                                    break;
                                case 5:
                                    Kt(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Ms(h);
                                        continue
                                    }
                            }
                            x !== null ? (x.return = m, j = x) : Ms(h)
                        }
                        v = v.sibling
                    }
                e: for (v = null, h = e;;) {
                    if (h.tag === 5) {
                        if (v === null) {
                            v = h;
                            try {
                                l = h.stateNode, d ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, a = h.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = pu("display", i))
                            } catch (k) {
                                H(e, e.return, k)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (v === null) try {
                            h.stateNode.nodeValue = d ? "" : h.memoizedProps
                        } catch (k) {
                            H(e, e.return, k)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        v === h && (v = null), h = h.return
                    }
                    v === h && (v = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            _e(t, e), De(e), r & 4 && Os(e);
            break;
        case 21:
            break;
        default:
            _e(t, e), De(e)
    }
}

function De(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Ua(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(y(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Dn(l, ""), r.flags &= -33);
                    var o = Rs(e);
                    Do(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = Rs(e);
                    Oo(e, u, i);
                    break;
                default:
                    throw Error(y(161))
            }
        }
        catch (a) {
            H(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function df(e, t, n) {
    j = e, Ba(e)
}

function Ba(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null;) {
        var l = j,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || yr;
            if (!i) {
                var u = l.alternate,
                    a = u !== null && u.memoizedState !== null || oe;
                u = yr;
                var d = oe;
                if (yr = i, (oe = a) && !d)
                    for (j = l; j !== null;) i = j, a = i.child, i.tag === 22 && i.memoizedState !== null ? Is(l) : a !== null ? (a.return = i, j = a) : Is(l);
                for (; o !== null;) j = o, Ba(o), o = o.sibling;
                j = l, yr = u, oe = d
            }
            Ds(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, j = o) : Ds(e)
    }
}

function Ds(e) {
    for (; j !== null;) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        oe || fl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !oe)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Pe(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && xs(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            xs(t, i, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var v = d.memoizedState;
                                if (v !== null) {
                                    var h = v.dehydrated;
                                    h !== null && Un(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(y(163))
                }
                oe || t.flags & 512 && Ro(t)
            } catch (m) {
                H(t, t.return, m)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function Ms(e) {
    for (; j !== null;) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function Is(e) {
    for (; j !== null;) {
        var t = j;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        fl(4, t)
                    } catch (a) {
                        H(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            H(t, l, a)
                        }
                    }
                    var o = t.return;
                    try {
                        Ro(t)
                    } catch (a) {
                        H(t, o, a)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        Ro(t)
                    } catch (a) {
                        H(t, i, a)
                    }
            }
        } catch (a) {
            H(t, t.return, a)
        }
        if (t === e) {
            j = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return, j = u;
            break
        }
        j = t.return
    }
}
var ff = Math.ceil,
    qr = Xe.ReactCurrentDispatcher,
    Ni = Xe.ReactCurrentOwner,
    Ee = Xe.ReactCurrentBatchConfig,
    L = 0,
    Z = null,
    G = null,
    ee = 0,
    ve = 0,
    Yt = ht(0),
    Y = 0,
    Jn = null,
    Lt = 0,
    pl = 0,
    ji = 0,
    Ln = null,
    de = null,
    Ei = 0,
    un = 1 / 0,
    Ae = null,
    br = !1,
    Mo = null,
    at = null,
    xr = !1,
    rt = null,
    el = 0,
    Rn = 0,
    Io = null,
    Tr = -1,
    Fr = 0;

function ue() {
    return L & 6 ? Q() : Tr !== -1 ? Tr : Tr = Q()
}

function ct(e) {
    return e.mode & 1 ? L & 2 && ee !== 0 ? ee & -ee : Yd.transition !== null ? (Fr === 0 && (Fr = Cu()), Fr) : (e = R, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ru(e.type)), e) : 1
}

function Re(e, t, n, r) {
    if (50 < Rn) throw Rn = 0, Io = null, Error(y(185));
    qn(e, n, r), (!(L & 2) || e !== Z) && (e === Z && (!(L & 2) && (pl |= n), Y === 4 && tt(e, ee)), he(e, r), n === 1 && L === 0 && !(t.mode & 1) && (un = Q() + 500, al && vt()))
}

function he(e, t) {
    var n = e.callbackNode;
    Yc(e, t);
    var r = Ir(e, e === Z ? ee : 0);
    if (r === 0) n !== null && Gi(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Gi(n), t === 1) e.tag === 0 ? Kd($s.bind(null, e)) : qu($s.bind(null, e)), Hd(function() {
            !(L & 6) && vt()
        }), n = null;
        else {
            switch (zu(r)) {
                case 1:
                    n = Zo;
                    break;
                case 4:
                    n = ju;
                    break;
                case 16:
                    n = Mr;
                    break;
                case 536870912:
                    n = Eu;
                    break;
                default:
                    n = Mr
            }
            n = Ja(n, Ha.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Ha(e, t) {
    if (Tr = -1, Fr = 0, L & 6) throw Error(y(327));
    var n = e.callbackNode;
    if (en() && e.callbackNode !== n) return null;
    var r = Ir(e, e === Z ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
    else {
        t = r;
        var l = L;
        L |= 2;
        var o = Qa();
        (Z !== e || ee !== t) && (Ae = null, un = Q() + 500, zt(e, t));
        do try {
            hf();
            break
        } catch (u) {
            Wa(e, u)
        }
        while (!0);
        ci(), qr.current = o, L = l, G !== null ? t = 0 : (Z = null, ee = 0, t = Y)
    }
    if (t !== 0) {
        if (t === 2 && (l = ao(e), l !== 0 && (r = l, t = $o(e, l))), t === 1) throw n = Jn, zt(e, 0), tt(e, r), he(e, Q()), n;
        if (t === 6) tt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !pf(l) && (t = tl(e, r), t === 2 && (o = ao(e), o !== 0 && (r = o, t = $o(e, o))), t === 1)) throw n = Jn, zt(e, 0), tt(e, r), he(e, Q()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(y(345));
                case 2:
                    Nt(e, de, Ae);
                    break;
                case 3:
                    if (tt(e, r), (r & 130023424) === r && (t = Ei + 500 - Q(), 10 < t)) {
                        if (Ir(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            ue(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = yo(Nt.bind(null, e, de, Ae), t);
                        break
                    }
                    Nt(e, de, Ae);
                    break;
                case 4:
                    if (tt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - Le(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ff(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = yo(Nt.bind(null, e, de, Ae), r);
                        break
                    }
                    Nt(e, de, Ae);
                    break;
                case 5:
                    Nt(e, de, Ae);
                    break;
                default:
                    throw Error(y(329))
            }
        }
    }
    return he(e, Q()), e.callbackNode === n ? Ha.bind(null, e) : null
}

function $o(e, t) {
    var n = Ln;
    return e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256), e = tl(e, t), e !== 2 && (t = de, de = n, t !== null && Uo(t)), e
}

function Uo(e) {
    de === null ? de = e : de.push.apply(de, e)
}

function pf(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Oe(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function tt(e, t) {
    for (t &= ~ji, t &= ~pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Le(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function $s(e) {
    if (L & 6) throw Error(y(327));
    en();
    var t = Ir(e, 0);
    if (!(t & 1)) return he(e, Q()), null;
    var n = tl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ao(e);
        r !== 0 && (t = r, n = $o(e, r))
    }
    if (n === 1) throw n = Jn, zt(e, 0), tt(e, t), he(e, Q()), n;
    if (n === 6) throw Error(y(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Nt(e, de, Ae), he(e, Q()), null
}

function Ci(e, t) {
    var n = L;
    L |= 1;
    try {
        return e(t)
    } finally {
        L = n, L === 0 && (un = Q() + 500, al && vt())
    }
}

function Rt(e) {
    rt !== null && rt.tag === 0 && !(L & 6) && en();
    var t = L;
    L |= 1;
    var n = Ee.transition,
        r = R;
    try {
        if (Ee.transition = null, R = 1, e) return e()
    } finally {
        R = r, Ee.transition = n, L = t, !(L & 6) && vt()
    }
}

function zi() {
    ve = Yt.current, I(Yt)
}

function zt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Bd(n)), G !== null)
        for (n = G.return; n !== null;) {
            var r = n;
            switch (si(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Br();
                    break;
                case 3:
                    on(), I(pe), I(ie), vi();
                    break;
                case 5:
                    hi(r);
                    break;
                case 4:
                    on();
                    break;
                case 13:
                    I(A);
                    break;
                case 19:
                    I(A);
                    break;
                case 10:
                    di(r.type._context);
                    break;
                case 22:
                case 23:
                    zi()
            }
            n = n.return
        }
    if (Z = e, G = e = dt(e.current, null), ee = ve = t, Y = 0, Jn = null, ji = pl = Lt = 0, de = Ln = null, Et !== null) {
        for (t = 0; t < Et.length; t++)
            if (n = Et[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i
                }
                n.pending = r
            }
        Et = null
    }
    return e
}

function Wa(e, t) {
    do {
        var n = G;
        try {
            if (ci(), zr.current = Zr, Jr) {
                for (var r = V.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Jr = !1
            }
            if (Ft = 0, J = K = V = null, Tn = !1, Kn = 0, Ni.current = null, n === null || n.return === null) {
                Y = 1, Jn = t, G = null;
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    u = n,
                    a = t;
                if (t = ee, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var d = a,
                        v = u,
                        h = v.tag;
                    if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = v.alternate;
                        m ? (v.updateQueue = m.updateQueue, v.memoizedState = m.memoizedState, v.lanes = m.lanes) : (v.updateQueue = null, v.memoizedState = null)
                    }
                    var x = Es(i);
                    if (x !== null) {
                        x.flags &= -257, Cs(x, i, u, o, t), x.mode & 1 && js(o, d, t), t = x, a = d;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(a), t.updateQueue = k
                        } else w.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            js(o, d, t), _i();
                            break e
                        }
                        a = Error(y(426))
                    }
                } else if ($ && u.mode & 1) {
                    var O = Es(i);
                    if (O !== null) {
                        !(O.flags & 65536) && (O.flags |= 256), Cs(O, i, u, o, t), ui(sn(a, u));
                        break e
                    }
                }
                o = a = sn(a, u),
                Y !== 4 && (Y = 2),
                Ln === null ? Ln = [o] : Ln.push(o),
                o = i;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var f = za(o, a, t);
                            ys(o, f);
                            break e;
                        case 1:
                            u = a;
                            var c = o.type,
                                p = o.stateNode;
                            if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (at === null || !at.has(p)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var g = _a(o, u, t);
                                ys(o, g);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Ka(n)
        } catch (S) {
            t = S, G === n && n !== null && (G = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Qa() {
    var e = qr.current;
    return qr.current = Zr, e === null ? Zr : e
}

function _i() {
    (Y === 0 || Y === 3 || Y === 2) && (Y = 4), Z === null || !(Lt & 268435455) && !(pl & 268435455) || tt(Z, ee)
}

function tl(e, t) {
    var n = L;
    L |= 2;
    var r = Qa();
    (Z !== e || ee !== t) && (Ae = null, zt(e, t));
    do try {
        mf();
        break
    } catch (l) {
        Wa(e, l)
    }
    while (!0);
    if (ci(), L = n, qr.current = r, G !== null) throw Error(y(261));
    return Z = null, ee = 0, Y
}

function mf() {
    for (; G !== null;) Ga(G)
}

function hf() {
    for (; G !== null && !Uc();) Ga(G)
}

function Ga(e) {
    var t = Xa(e.alternate, e, ve);
    e.memoizedProps = e.pendingProps, t === null ? Ka(e) : G = t, Ni.current = null
}

function Ka(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = uf(n, t), n !== null) {
                n.flags &= 32767, G = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Y = 6, G = null;
                return
            }
        } else if (n = sf(n, t, ve), n !== null) {
            G = n;
            return
        }
        if (t = t.sibling, t !== null) {
            G = t;
            return
        }
        G = t = e
    } while (t !== null);
    Y === 0 && (Y = 5)
}

function Nt(e, t, n) {
    var r = R,
        l = Ee.transition;
    try {
        Ee.transition = null, R = 1, vf(e, t, n, r)
    } finally {
        Ee.transition = l, R = r
    }
    return null
}

function vf(e, t, n, r) {
    do en(); while (rt !== null);
    if (L & 6) throw Error(y(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Xc(e, o), e === Z && (G = Z = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || xr || (xr = !0, Ja(Mr, function() {
            return en(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Ee.transition, Ee.transition = null;
        var i = R;
        R = 1;
        var u = L;
        L |= 4, Ni.current = null, cf(e, n), Va(n, e), Dd(vo), $r = !!ho, vo = ho = null, e.current = n, df(n), Ac(), L = u, R = i, Ee.transition = o
    } else e.current = n;
    if (xr && (xr = !1, rt = e, el = l), o = e.pendingLanes, o === 0 && (at = null), Hc(n.stateNode), he(e, Q()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (br) throw br = !1, e = Mo, Mo = null, e;
    return el & 1 && e.tag !== 0 && en(), o = e.pendingLanes, o & 1 ? e === Io ? Rn++ : (Rn = 0, Io = e) : Rn = 0, vt(), null
}

function en() {
    if (rt !== null) {
        var e = zu(el),
            t = Ee.transition,
            n = R;
        try {
            if (Ee.transition = null, R = 16 > e ? 16 : e, rt === null) var r = !1;
            else {
                if (e = rt, rt = null, el = 0, L & 6) throw Error(y(331));
                var l = L;
                for (L |= 4, j = e.current; j !== null;) {
                    var o = j,
                        i = o.child;
                    if (j.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var a = 0; a < u.length; a++) {
                                var d = u[a];
                                for (j = d; j !== null;) {
                                    var v = j;
                                    switch (v.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Fn(8, v, o)
                                    }
                                    var h = v.child;
                                    if (h !== null) h.return = v, j = h;
                                    else
                                        for (; j !== null;) {
                                            v = j;
                                            var m = v.sibling,
                                                x = v.return;
                                            if ($a(v), v === d) {
                                                j = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = x, j = m;
                                                break
                                            }
                                            j = x
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var O = k.sibling;
                                        k.sibling = null, k = O
                                    } while (k !== null)
                                }
                            }
                            j = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, j = i;
                    else e: for (; j !== null;) {
                        if (o = j, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Fn(9, o, o.return)
                        }
                        var f = o.sibling;
                        if (f !== null) {
                            f.return = o.return, j = f;
                            break e
                        }
                        j = o.return
                    }
                }
                var c = e.current;
                for (j = c; j !== null;) {
                    i = j;
                    var p = i.child;
                    if (i.subtreeFlags & 2064 && p !== null) p.return = i, j = p;
                    else e: for (i = c; j !== null;) {
                        if (u = j, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    fl(9, u)
                            }
                        } catch (S) {
                            H(u, u.return, S)
                        }
                        if (u === i) {
                            j = null;
                            break e
                        }
                        var g = u.sibling;
                        if (g !== null) {
                            g.return = u.return, j = g;
                            break e
                        }
                        j = u.return
                    }
                }
                if (L = l, vt(), $e && typeof $e.onPostCommitFiberRoot == "function") try {
                    $e.onPostCommitFiberRoot(ll, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            R = n, Ee.transition = t
        }
    }
    return !1
}

function Us(e, t, n) {
    t = sn(n, t), t = za(e, t, 1), e = ut(e, t, 1), t = ue(), e !== null && (qn(e, 1, t), he(e, t))
}

function H(e, t, n) {
    if (e.tag === 3) Us(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Us(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (at === null || !at.has(r))) {
                    e = sn(n, e), e = _a(t, e, 1), t = ut(t, e, 1), e = ue(), t !== null && (qn(t, 1, e), he(t, e));
                    break
                }
            }
            t = t.return
        }
}

function gf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, Z === e && (ee & n) === n && (Y === 4 || Y === 3 && (ee & 130023424) === ee && 500 > Q() - Ei ? zt(e, 0) : ji |= n), he(e, t)
}

function Ya(e, t) {
    t === 0 && (e.mode & 1 ? (t = ar, ar <<= 1, !(ar & 130023424) && (ar = 4194304)) : t = 1);
    var n = ue();
    e = Ke(e, t), e !== null && (qn(e, t, n), he(e, n))
}

function yf(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Ya(e, n)
}

function xf(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(y(314))
    }
    r !== null && r.delete(t), Ya(e, n)
}
var Xa;
Xa = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, of (e, t, n);
            fe = !!(e.flags & 131072)
        }
    else fe = !1, $ && t.flags & 1048576 && bu(t, Qr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Pr(e, t), e = t.pendingProps;
            var l = nn(t, ie.current);
            bt(t, n), l = yi(null, t, r, e, l, n);
            var o = xi();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, me(r) ? (o = !0, Hr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, pi(t), l.updater = dl, t.stateNode = l, l._reactInternals = t, Eo(t, r, e, n), t = _o(null, t, r, !0, o, n)) : (t.tag = 0, $ && o && ii(t), se(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Pr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = kf(r), e = Pe(r, e), l) {
                    case 0:
                        t = zo(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ps(null, t, r, e, n);
                        break e;
                    case 11:
                        t = zs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = _s(null, t, r, Pe(r.type, e), n);
                        break e
                }
                throw Error(y(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), zo(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Ps(e, t, r, l, n);
        case 3:
            e: {
                if (La(t), e === null) throw Error(y(387));r = t.pendingProps,
                o = t.memoizedState,
                l = o.element,
                oa(e, t),
                Yr(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = sn(Error(y(423)), t), t = Ts(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = sn(Error(y(424)), t), t = Ts(e, t, r, n, l);
                    break e
                } else
                    for (ge = st(t.stateNode.containerInfo.firstChild), ye = t, $ = !0, Fe = null, n = ra(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (rn(), r === l) {
                        t = Ye(e, t, n);
                        break e
                    }
                    se(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return ia(t), e === null && So(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, go(r, l) ? i = null : o !== null && go(r, o) && (t.flags |= 32), Fa(e, t), se(e, t, i, n), t.child;
        case 6:
            return e === null && So(t), null;
        case 13:
            return Ra(e, t, n);
        case 4:
            return mi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : se(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), zs(e, t, r, l, n);
        case 7:
            return se(e, t, t.pendingProps, n), t.child;
        case 8:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, D(Gr, r._currentValue), r._currentValue = i, o !== null)
                    if (Oe(o.value, i)) {
                        if (o.children === l.children && !pe.current) {
                            t = Ye(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var u = o.dependencies;
                            if (u !== null) {
                                i = o.child;
                                for (var a = u.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (o.tag === 1) {
                                            a = We(-1, n & -n), a.tag = 2;
                                            var d = o.updateQueue;
                                            if (d !== null) {
                                                d = d.shared;
                                                var v = d.pending;
                                                v === null ? a.next = a : (a.next = v.next, v.next = a), d.pending = a
                                            }
                                        }
                                        o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), No(o.return, n, t), u.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return, i === null) throw Error(y(341));
                                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), No(i, n, t), i = o.sibling
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling, o !== null) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                se(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, bt(t, n), l = Ce(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Pe(r, t.pendingProps), l = Pe(r.type, l), _s(e, t, r, l, n);
        case 15:
            return Pa(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Pr(e, t), t.tag = 1, me(r) ? (e = !0, Hr(t)) : e = !1, bt(t, n), Ca(t, r, l), Eo(t, r, l, n), _o(null, t, r, !0, e, n);
        case 19:
            return Oa(e, t, n);
        case 22:
            return Ta(e, t, n)
    }
    throw Error(y(156, t.tag))
};

function Ja(e, t) {
    return Nu(e, t)
}

function wf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function je(e, t, n, r) {
    return new wf(e, t, n, r)
}

function Pi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function kf(e) {
    if (typeof e == "function") return Pi(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Yo) return 11;
        if (e === Xo) return 14
    }
    return 2
}

function dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Lr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") Pi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case $t:
            return _t(n.children, l, o, t);
        case Ko:
            i = 8, l |= 8;
            break;
        case Yl:
            return e = je(12, n, t, l | 2), e.elementType = Yl, e.lanes = o, e;
        case Xl:
            return e = je(13, n, t, l), e.elementType = Xl, e.lanes = o, e;
        case Jl:
            return e = je(19, n, t, l), e.elementType = Jl, e.lanes = o, e;
        case iu:
            return ml(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case lu:
                    i = 10;
                    break e;
                case ou:
                    i = 9;
                    break e;
                case Yo:
                    i = 11;
                    break e;
                case Xo:
                    i = 14;
                    break e;
                case qe:
                    i = 16, r = null;
                    break e
            }
            throw Error(y(130, e == null ? e : typeof e, ""))
    }
    return t = je(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function _t(e, t, n, r) {
    return e = je(7, e, r, t), e.lanes = n, e
}

function ml(e, t, n, r) {
    return e = je(22, e, r, t), e.elementType = iu, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Ql(e, t, n) {
    return e = je(6, e, null, t), e.lanes = n, e
}

function Gl(e, t, n) {
    return t = je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Sf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cl(0), this.expirationTimes = Cl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Ti(e, t, n, r, l, o, i, u, a) {
    return e = new Sf(e, t, n, u, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = je(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, pi(o), e
}

function Nf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: It,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Za(e) {
    if (!e) return pt;
    e = e._reactInternals;
    e: {
        if (Dt(e) !== e || e.tag !== 1) throw Error(y(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (me(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(y(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (me(n)) return Zu(e, n, t)
    }
    return t
}

function qa(e, t, n, r, l, o, i, u, a) {
    return e = Ti(n, r, !0, e, l, o, i, u, a), 
        e.context = Za(null), 
        n = e.current, 
        r = ue(), 
        l = ct(n), 
        o = We(r, l), 
        o.callback = t ? t : null, // Fixed ternary operator
        ut(n, o, l), 
        e.current.lanes = l, 
        qn(e, l, r), 
        he(e, r), 
        e;
}


function hl(e, t, n, r) {
    var l = t.current,
        o = ue(),
        i = ct(l);
    return n = Za(n), t.context === null ? t.context = n : t.pendingContext = n, t = We(o, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ut(l, t, i), e !== null && (Re(e, l, i, o), Cr(e, l, i)), i
}

function nl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function As(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Fi(e, t) {
    As(e, t), (e = e.alternate) && As(e, t)
}

function jf() {
    return null
}
var ba = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Li(e) {
    this._internalRoot = e
}
vl.prototype.render = Li.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(y(409));
    hl(e, t, null, null)
};
vl.prototype.unmount = Li.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Rt(function() {
            hl(null, e, null, null)
        }), t[Ge] = null
    }
};

function vl(e) {
    this._internalRoot = e
}
vl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Tu();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
        et.splice(n, 0, e), n === 0 && Lu(e)
    }
};

function Ri(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function gl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Vs() {}

function Ef(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var d = nl(i);
                o.call(d)
            }
        }
        var i = qa(t, r, e, 0, null, !1, !1, "", Vs);
        return e._reactRootContainer = i, e[Ge] = i.current, Bn(e.nodeType === 8 ? e.parentNode : e), Rt(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var d = nl(a);
            u.call(d)
        }
    }
    var a = Ti(e, 0, !1, null, null, !1, !1, "", Vs);
    return e._reactRootContainer = a, e[Ge] = a.current, Bn(e.nodeType === 8 ? e.parentNode : e), Rt(function() {
        hl(t, a, n, r)
    }), a
}

function yl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var a = nl(i);
                u.call(a)
            }
        }
        hl(t, i, e, l)
    } else i = Ef(n, t, e, l, r);
    return nl(i)
}
_u = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Nn(t.pendingLanes);
                n !== 0 && (qo(t, n | 1), he(t, Q()), !(L & 6) && (un = Q() + 500, vt()))
            }
            break;
        case 13:
            Rt(function() {
                var r = Ke(e, 1);
                if (r !== null) {
                    var l = ue();
                    Re(r, e, 1, l)
                }
            }), Fi(e, 1)
    }
};
bo = function(e) {
    if (e.tag === 13) {
        var t = Ke(e, 134217728);
        if (t !== null) {
            var n = ue();
            Re(t, e, 134217728, n)
        }
        Fi(e, 134217728)
    }
};
Pu = function(e) {
    if (e.tag === 13) {
        var t = ct(e),
            n = Ke(e, t);
        if (n !== null) {
            var r = ue();
            Re(n, e, t, r)
        }
        Fi(e, t)
    }
};
Tu = function() {
    return R
};
Fu = function(e, t) {
    var n = R;
    try {
        return R = e, t()
    } finally {
        R = n
    }
};
io = function(e, t, n) {
    switch (t) {
        case "input":
            if (bl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = ul(r);
                        if (!l) throw Error(y(90));
                        uu(r), bl(r, l)
                    }
                }
            }
            break;
        case "textarea":
            cu(e, n);
            break;
        case "select":
            t = n.value, t != null && Xt(e, !!n.multiple, t, !1)
    }
};
gu = Ci;
yu = Rt;
var Cf = {
        usingClientEntryPoint: !1,
        Events: [er, Bt, ul, hu, vu, Ci]
    },
    wn = {
        findFiberByHostInstance: jt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    zf = {
        bundleType: wn.bundleType,
        version: wn.version,
        rendererPackageName: wn.rendererPackageName,
        rendererConfig: wn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = ku(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: wn.findFiberByHostInstance || jf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wr.isDisabled && wr.supportsFiber) try {
        ll = wr.inject(zf), $e = wr
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cf;
we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ri(t)) throw Error(y(200));
    return Nf(e, t, null, n)
};
we.createRoot = function(e, t) {
    if (!Ri(e)) throw Error(y(299));
    var n = !1,
        r = "",
        l = ba;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ti(e, 1, !1, null, null, n, !1, r, l), e[Ge] = t.current, Bn(e.nodeType === 8 ? e.parentNode : e), new Li(t)
};
we.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
    return e = ku(t), e = e === null ? null : e.stateNode, e
};
we.flushSync = function(e) {
    return Rt(e)
};
we.hydrate = function(e, t, n) {
    if (!gl(t)) throw Error(y(200));
    return yl(null, e, t, !0, n)
};
we.hydrateRoot = function(e, t, n) {
    if (!Ri(e)) throw Error(y(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        o = "",
        i = ba;
    if (
    n != null &&
    (n.unstable_strictMode === true && (l = true),
    n.identifierPrefix !== undefined && (o = n.identifierPrefix),
    n.onRecoverableError !== undefined && (i = n.onRecoverableError))
) {
    t = qa(t, null, e, 1, n ? n : null, l, false, o, i); // Fixed ternary operator
    e[Ge] = t.current;
    Bn(e);

    if (r) {
        for (e = 0; e < r.length; e++) {
            n = r[e];
            l = n._getVersion;
            l = l(n._source);

            if (t.mutableSourceEagerHydrationData == null) {
                t.mutableSourceEagerHydrationData = [n, l];
            } else {
                t.mutableSourceEagerHydrationData.push(n, l);
            }
        }
    }
}
return new vl(t);

};
we.render = function(e, t, n) {
    if (!gl(t)) throw Error(y(200));
    return yl(null, e, t, !1, n)
};
we.unmountComponentAtNode = function(e) {
    if (!gl(e)) throw Error(y(40));
    return e._reactRootContainer ? (Rt(function() {
        yl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ge] = null
        })
    }), !0) : !1
};
we.unstable_batchedUpdates = Ci;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!gl(n)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return yl(e, t, n, !1, r)
};
we.version = "18.3.1-next-f1338f8080-20240426";

function ec() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)
    } catch (e) {
        console.error(e)
    }
}
ec(), eu.exports = we;
var _f = eu.exports,
    tc, Bs = _f;
tc = Bs.createRoot, Bs.hydrateRoot;
const Pf = "./assets/lakshya_event-vmake-BbBHjKbA.mp4",
    Tf = () => s.jsxs("div", {
        className: "relative mt-20",
        children: [s.jsx("section", {
            className: "relative w-full",
            children: s.jsx("img", {
                src: "https://www.svgrepo.com/show/285729/award-champion.svg",
                alt: "",
                className: "w-[100px] md:w-[200px] z-[-1] left-1/2 -translate-x-1/2 absolute"
            })
        }), s.jsxs("section", {
            className: "py-20 backdrop-blur-[1px] z-[1]",
            children: [s.jsxs("div", {
                className: "flex justify-center",
                children: [s.jsxs("div", {
                    className: "star-div flex pr-5",
                    children: [s.jsx("img", {
                        src: "https://www.svgrepo.com/show/315891/star-gold-orange.svg",
                        className: "w-[20px] md:w-[30px]",
                        alt: ""
                    }), s.jsx("img", {
                        src: "https://www.svgrepo.com/show/315891/star-gold-orange.svg",
                        className: "w-[20px] md:w-[30px]",
                        alt: ""
                    }), s.jsx("img", {
                        src: "https://www.svgrepo.com/show/315891/star-gold-orange.svg",
                        className: "w-[20px] md:w-[30px]",
                        alt: ""
                    })]
                }), s.jsx("span", {
                    className: "text-center font-apexFont text-3xl md:text-6xl",
                    children: "APEX'"
                }), s.jsx("span", {
                    className: "font-apexFont md:text-6xl text-3xl text-apexGold",
                    children: "25"
                }), s.jsxs("div", {
                    className: "star-div flex pl-5",
                    children: [s.jsx("img", {
                        src: "https://www.svgrepo.com/show/315891/star-gold-orange.svg",
                        className: "w-[20px] md:w-[30px]",
                        alt: ""
                    }), s.jsx("img", {
                        src: "https://www.svgrepo.com/show/315891/star-gold-orange.svg",
                        className: "w-[20px] md:w-[30px]",
                        alt: ""
                    }), s.jsx("img", {
                        src: "https://www.svgrepo.com/show/315891/star-gold-orange.svg",
                        className: "w-[20px] md:w-[30px]",
                        alt: ""
                    })]
                })]
            }), s.jsx("p", {
                className: "text-center text-lg font-poppins",
                children: "Leading the way!"
            })]
        }),

       s.jsxs("div", {
    className: "context-div flex flex-col md:flex-row md:justify-around md:items-stretch gap-10 flex-wrap",
    children: [
        s.jsxs("div", {
            className: "text-center md:h-auto md:w-[300px] h-fit p-4 border rounded-lg shadow-lg bg-white",
            children: [
                s.jsx("div", {
                    className: "text-2xl md:text-3xl uppercase text-center font-apexFont",
                    children: "OUR VISION",
                }),
                s.jsx("div", {
                    className: "text-lg text-center font-poppins",
                    children: "To offer world-class job-oriented courses with an ethical focus, for the benefit of all stakeholders.",
                }),
            ],
        }),
        s.jsxs("div", {
            className: "text-center md:h-auto md:w-[300px] h-fit p-4 border rounded-lg shadow-lg bg-white",
            children: [
                s.jsx("div", {
                    className: "text-2xl md:text-3xl uppercase text-center font-apexFont",
                    children: "OUR MISSION",
                }),
                s.jsx("div", {
                    className: "text-lg text-center font-poppins",
                    children: "We commit ourselves to impart knowledge, skill and attitude to the students, to inculcate in them, a sense of discipline, with moral and ethical values, and to make them good citizens of India.",
                }),
            ],
        }),
        s.jsxs("div", {
            className: "text-center md:h-auto md:w-[300px] h-fit p-4 border rounded-lg shadow-lg bg-white",
            children: [
                s.jsx("div", {
                    className: "text-2xl md:text-3xl uppercase text-center font-apexFont",
                    children: "ABOUT EVENT",
                }),
                s.jsx("div", {
                    className: "text-lg text-center font-poppins",
                    children: "The Lakshya - RLIMS MBA Association conducts an All-India Inter-college cultural event called the APEX. Colleges from all over India participated in this function. The success of this function is evident from the funds that are granted by the business community in and around Madurai and Alumni of our Institution.",
                }),
            ],
        }),
        s.jsxs("div", {
            className: "text-center md:h-auto md:w-[300px] h-fit p-4 border rounded-lg shadow-lg bg-white",
            children: [
                s.jsx("div", {
                    className: "text-2xl md:text-3xl uppercase text-center font-apexFont",
                    children: "ABOUT THE INSTITUTE",
                }),
                s.jsx("div", {
                    className: "text-lg text-center font-poppins",
                    children: "RL Institute of Management Studies, one of the most sought-after departments of Subbalakshmi Lakshmipathy College of Science (An autonomous Institution affiliated to Madurai Kamaraj University and Re-accredited with A+ Status by NAAC) with two decades of academic excellence, had its momentous beginning in the year 1998. Since its inception, the growth of the department has become significant in terms of creating noteworthy business managers and entrepreneurs. The institute offers a two-year full-time MBA Program, approved by AICTE, with a wide range of most in-demand specializations.",
                }),
            ],
        }),
    ],
})
]
    }),
    
    Ff = "./assets/hackathon-DPuyM7Mt.jpg",
    Lf = "./assets/manager-CVFPV4Fx.webp",
    Rf = "./assets/businessProposal-Bi0Ptfds.webp",
    Of = "./assets/corporatewalk-CkS4lJIr.webp",
    Df = "./assets/dance-DW4N26Vw.jpg",
    Mf = "./assets/singing-DlHml3zV.jpg",
    If = "./assets/mime-eDwb2nmS.webp",
    $f = "./assets/rangoli-D9R655GY.jpg",
    Uf = "./assets/photography-B4eJvG9o.jpg",
    Af = "./assets/shortfilm-COMP0q7I.jpg",
    Vf = "./assets/tressure-DIV2HAM0.png",
    Bf = "./assets/auction-0VQ__RFI.jpg",
    Hf = () => {
        const [e, t] = q.useState(!1), n = () => {
            t(!e)
        }, [r, l] = q.useState(!1), o = () => {
            l(!r)
        }, [i, u] = q.useState(!1), a = () => {
            u(!i)
        }, [d, v] = q.useState(!1), h = () => {
            v(!d)
        }, [m, x] = q.useState(!1), w = () => {
            x(!m)
        }, [k, O] = q.useState(!1), f = () => {
            O(!k)
        }, [c, p] = q.useState(!1), g = () => {
            p(!c)
        }, [S, E] = q.useState(!1), C = () => {
            E(!S)
        }, [z, U] = q.useState(!1), T = () => {
            U(!z)
        }, [ne, gt] = q.useState(!1), yt = () => {
            gt(!ne)
        }, [xt, xl] = q.useState(!1), fn = () => {
            xl(!xt)
        }, [Je, N] = q.useState(!1), _ = () => {
            N(!Je)
        };
    const [popupVisible, setPopupVisible] = q.useState(null);


return s.jsxs("div", {
    className: "event-section mt-40 md:px-10 px-6",
    children: [
        s.jsx("h3", {
            className: "text-center text-5xl font-apexFont",
            children: "Events"
        }),
        s.jsxs("div", {
            className: "cards justify-center flex gap-32 flex-wrap py-20",
            children: [
                // Hackathon Event Card
                s.jsxs("div", {
                    className: "hackathon-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
                    children: [
                        // Front Side of the Card
                        s.jsxs("div", {
                            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
                            children: [
                                s.jsx("p", {
                                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                                    children: "Hackathon"
                                }),
                                s.jsx("img", {
                                    src: Ff,
                                    alt: "Event Theme",
                                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                                })
                            ]
                        }),

                        // Button to open Popup
                        s.jsx("button", {
                            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
                            type: "button",
                            onClick: () => HPO(), // Open the popup on click
                            children: "details"
                        }),

                        // Popup Modal for Hackathon
               
                    ]
                }),

                // Additional Event Cards (Example for Best Manager)
                s.jsxs("div", {
                    className: "bestmanager-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
                    children: [
                        // Front Side of the Card
                        s.jsxs("div", {
                            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
                            children: [
                                s.jsx("p", {
                                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                                    children: "Best Manager"
                                }),
                                s.jsx("img", {
                                    src: Lf,
                                    alt: "Event Theme",
                                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                                })
                            ]
                        }),

                        // Button to open popup
                        s.jsx("button", {
                            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
                            type: "button",
                            onClick: () => BPO(), // Set popup visibility
                            children: "details"
                        }),

                   
                
                    ]
                }),
                // Fusion Corporate Walk Event Card
s.jsxs("div", {
    className: "fusion-corporatewalk-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
    children: [
        // Front Side of the Card
        s.jsxs("div", {
            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
            children: [
                s.jsx("p", {
                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                    children: "Fusion Corporate Walk"
                }),
                s.jsx("img", {
                    src: Of, // Replace `Fc` with the actual variable for the image in your file
                    alt: "Fusion Corporate Walk",
                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                })
            ]
        }),

        // Button to open Popup
        s.jsx("button", {
            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
            type: "button",
            onClick: () => FCPO(), // Replace `FCPO` with the function to handle the popup
            children: "details"
        })
    ]
}),
// Business Proposal Event Card
s.jsxs("div", {
    className: "businessproposal-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
    children: [
        // Front Side of the Card
        s.jsxs("div", {
            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
            children: [
                s.jsx("p", {
                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                    children: "Business Proposal"
                }),
                s.jsx("img", {
                    src: Rf, // Image source for Business Proposal
                    alt: "Business Proposal",
                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                })
            ]
        }),

        // Button to open Popup
        s.jsx("button", {
            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
            type: "button",
            onClick: () => BPPO(), // Function to handle the popup
            children: "details"
        })
    ]
})
,
// IPL Auction Event Card
s.jsxs("div", {
    className: "ipl-auction-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
    children: [
        // Front Side of the Card
        s.jsxs("div", {
            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
            children: [
                s.jsx("p", {
                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                    children: "IPL Auction"
                }),
                s.jsx("img", {
                    src: Bf, // Image source for IPL Auction
                    alt: "IPL Auction",
                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                })
            ]
        }),

        // Button to open Popup
        s.jsx("button", {
            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
            type: "button",
            onClick: () => IAPO(), // Replace `IAPO` with the function to handle the popup
            children: "details"
        })
    ]
}),// Rangoli Event Card
s.jsxs("div", {
    className: "rangoli-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
    children: [
        // Front Side of the Card
        s.jsxs("div", {
            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
            children: [
                s.jsx("p", {
                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                    children: "Rangoli"
                }),
                s.jsx("img", {
                    src: $f, // Image source for Rangoli
                    alt: "Rangoli",
                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                })
            ]
        }),

        // Button to open Popup
        s.jsx("button", {
            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
            type: "button",
            onClick: () => RPO(), // Replace `RPO` with the function to handle the popup
            children: "details"
        })
    ]
})
,// Singing Event Card
// Dance Event Card
s.jsxs("div", {
    className: "dance-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
    children: [
        // Front Side of the Card
        s.jsxs("div", {
            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
            children: [
                s.jsx("p", {
                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                    children: "Dance"
                }),
                s.jsx("img", {
                    src: Df, // Image source for Dance
                    alt: "Dance",
                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                })
            ]
        }),

        // Button to open Popup
        s.jsx("button", {
            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
            type: "button",
            onClick: () => DPO(), // Replace `DPO` with the function to handle the popup
            children: "details"
        })
    ]
}),
// MIME Event Card
s.jsxs("div", {
    className: "mime-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
    children: [
        // Front Side of the Card
        s.jsxs("div", {
            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
            children: [
                s.jsx("p", {
                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                    children: "MIME"
                }),
                s.jsx("img", {
                    src: If, // Image source for MIME
                    alt: "MIME",
                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                })
            ]
        }),

        // Button to open Popup
        s.jsx("button", {
            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
            type: "button",
            onClick: () => MPO(), // Replace `MPO` with the function to handle the popup
            children: "details"
        })
    ]
})
,
// Short Film Event Card
s.jsxs("div", {
    className: "shortfilm-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
    children: [
        // Front Side of the Card
        s.jsxs("div", {
            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
            children: [
                s.jsx("p", {
                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                    children: "Short Film"
                }),
                s.jsx("img", {
                    src: Af, // Image source for Short Film
                    alt: "Short Film",
                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                })
            ]
        }),

        // Button to open Popup
        s.jsx("button", {
            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
            type: "button",
            onClick: () => SFPO(), // Function to handle the popup
            children: "details"
        })
    ]
}),
// Photography Event Card
s.jsxs("div", {
    className: "photography-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
    children: [
        // Front Side of the Card
        s.jsxs("div", {
            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
            children: [
                s.jsx("p", {
                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                    children: "Photography"
                }),
                s.jsx("img", {
                    src: Uf, // Image source for Photography
                    alt: "Photography",
                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                })
            ]
        }),

        // Button to open Popup
        s.jsx("button", {
            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
            type: "button",
            onClick: () => PPO(), // Function to handle the popup
            children: "details"
        })
    ]
})
,

// Singing Event Card
s.jsxs("div", {
    className: "singing-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
    children: [
        // Front Side of the Card
        s.jsxs("div", {
            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
            children: [
                s.jsx("p", {
                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                    children: "Singing"
                }),
                s.jsx("img", {
                    src: Mf, // Image source for Singing
                    alt: "Singing",
                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                })
            ]
        }),

        // Button to open Popup
        s.jsx("button", {
            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
            type: "button",
            onClick: () => SPO(), // Replace `SPO` with the function to handle the popup
            children: "details"
        })
    ]
})
,
// Treasure Hunt Event Card
s.jsxs("div", {
    className: "treasurehunt-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold",
    children: [
        // Front Side of the Card
        s.jsxs("div", {
            className: "front-side shadow-md shadow-black relative bg-apexGold rounded-md w-full h-full",
            children: [
                s.jsx("p", {
                    className: "text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3",
                    children: "Treasure Hunt"
                }),
                s.jsx("img", {
                    src: Vf, // Image source for Treasure Hunt
                    alt: "Treasure Hunt",
                    className: "h-[200px] w-full sm:w-[400px] mx-auto"
                })
            ]
        }),

        // Button to open Popup
        s.jsx("button", {
            className: "absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3] rounded-md hover:scale-105 px-4 bg-[#FFD700]",
            type: "button",
            onClick: () => THPO(), // Function to handle the popup
            children: "details"
        })
    ]
})


            ]
        })
    ]
})



    },
    Wf = "./assets/clgLoho-BEadKlnH.png",
    Qf = () => s.jsxs("div", {
        className: " my-20 oex-1 md:px-10 py-5 relative z-[1]",
        children: [s.jsx("img", {
            src: Wf,
            className: "  m-auto md   md:absolute clgLogo w-[400px] right-3  z-[2]  bg-blend-no  bottom-[8rem]",
            alt: ""
        }), s.jsx("div", {
            className: " w-full h-full bg-blue-300/50 z-[-1]  rounded-md absolute border-black border-2 left-0 top-0 "
        }), s.jsx("h3", {
            className: " text-3xl font-apexFont text-center",
            children: "Rules"
        }), s.jsx("p", {
            className: "text-center font-poppins  text-xl md:text-3xl",
            children: "General Rules for All Events"
        }), s.jsx("section", {
            className: "rules",
            children: s.jsxs("div", {
                className: "section-one flex flex-col relative z-10 justify-center gap-10 p-5 md:p-10",
                children: [s.jsxs("p", {
                    className: "text-xl",
                    children: [s.jsx("span", {
                        className: "font-bold",
                        children: "Eligibility: "
                    }), "Participants must be students enrolled in a recognized college or university."]
                }), s.jsxs("p", {
                    className: "text-xl",
                    children: [s.jsx("span", {
                        className: "font-bold",
                        children: "Conduct: "
                    }), "Respectful behaviour is expected. Offensive language or actions will lead to disqualification."]
                }), s.jsxs("p", {
                    className: "text-xl",
                    children: [s.jsx("span", {
                        className: "font-bold",
                        children: "Registration: "
                    }), "All participants must register before the event begins."]
                }), s.jsxs("p", {
                    className: "text-xl",
                    children: [s.jsx("span", {
                        className: "font-bold",
                        children: "Decision of Judges: "
                    }), "The decision of the judges will be final."]
                }), s.jsxs("p", {
                    className: "text-xl",
                    children: [s.jsx("span", {
                        className: "font-bold",
                        children: "Time Management: "
                    }), "Strict adherence to time limits is mandatory."]
                }), s.jsxs("p", {
                    className: "text-xl",
                    children: [s.jsx("span", {
                        className: "font-bold",
                        children: "Permissions: "
                    }), "All participants must seek prior approval for props or ", s.jsx("br", {}), " materials that may not be part of the general event guidelines."]
                }), s.jsxs("p", {
                    className: "text-xl",
                    children: [s.jsx("span", {
                        className: "font-bold",
                        children: "Photography/Videography: "
                    }), "Events may be recorded or photographed for promotional purposes."]
                })]
            })
        })]
    }),
    Gf = "./assets/clgimg-Btf5OOD2.jpeg",
    Kf = () => s.jsxs("div", {
        className: "my-20 px-1 md:px-10 py-5 relative ",
        children: [s.jsx("h4", {
            className: "text-4xl text-center py-5 font-apexFont",
            children: "About Lakshaya"
        }), s.jsx("img", {
            src: "https://www.svgrepo.com/show/382151/education-graduation-learning-school-study.svg",
            alt: "",
            className: "clgLogo md:absolute w-[100px] top-0  mx-auto "
        }), s.jsxs("div", {
            className: " text-lg font-poppins  justify-center flex md:justify-start flex-col gap-2 ",
            children: [s.jsx("p", {
                className: "",
                children: "It is dedicated to fostering excellence in operations and quality management."
            }), s.jsx("p", {
                children: "Inspired by the principles of W. Edwards Deming, this forum equips members with the tools and techniques necessary to enhance operational efficiency, process optimization, and continuous improvement."
            }), s.jsx("p", {
                children: " Participants gain a deeper understanding of quality consciousness, enabling them to implement best practices in production, logistics, and supply chain management."
            })]
        })]
    });

function Yf() {
    const [e, t] = q.useState(!1), n = () => {
        t(!e)
    };
    return s.jsxs("div", {
        className: "event-app w-full relative",
        children: [s.jsxs("nav", {
            className: "sticky top-0 z-50 w-full bg-white px-4 py-4 flex items-center justify-around md:justify-between",
            children: [s.jsxs("div", {
                className: "flex items-center ",
                children: [s.jsx("img", {
                    src: Gf,
                    alt: "",
                    className: "w-16 h-16 mr-4 md:w-20 md:h-20 rounded-sm"
                }),s.jsxs("div", {
    children: [s.jsx("div", {
    className: "logo-container", 
    children: s.jsx("img", {
        src: "./assets/logo bg.jpg", 
        alt: "Logo",
        className: "w-auto h-16 md:w-30 md:h-20 rounded-lg border-2 border-black"
    })
})
]
})
]
                
            }), s.jsx("div", {
                className: "md:hidden",
                children: s.jsx("button", {
                    onClick: n,
                    className: "text-3xl",
                    children: "☰"
                })
            }), s.jsxs("ul", {
                className: `flex navigations  md:flex-row  text-2xl capitalize tracking-wide md:text-2xl  flex-col md:relative md:items-center md:justify-center font-apexFont md:gap-4  md:font-bold text-apexGold md:flex ${e ? "flex" : "hidden"} absolute top-full left-0 w-full md:w-fit bg-white p-4`,
                children: [s.jsx("li", {
                    className: " hover:scale-105 transition-all",
                    children: s.jsx("a", {
                        href: "#home",
                        children: "home"
                    })
                }), s.jsx("li", {
                    className: " hover:scale-105 transition-all",
                    children: s.jsx("a", {
                        href: "#events",
                        children: "events"
                    })
                }), s.jsx("li", {
                    className: " hover:scale-105 transition-all",
                    children: s.jsx("a", {
                        href: "#rules",
                        children: "rules"
                    })
                }), s.jsx("li", {
                    className: " hover:scale-105 transition-all",
                    children: s.jsx("a", {
                        href: "#about",
                        children: "about"
                    })
                }), s.jsx("li", { 
                    className: "hover:scale-105 transition-all",
                    children: s.jsx("a", {
                        href: "#payment",
                        children: "payment"
                    }),
                }),
    s.jsx("li", { 
    className: "hover:scale-105 transition-all",
    children: s.jsx("a", {
        href: "#guidelines",
        onClick: (e) => {
            e.preventDefault();
            openGuidelinesPopup(); 
        },
        children: "guidelines"
    })
})
]
            })]
        }), s.jsxs("div", {
            className: "video-box",
            children: [s.jsx("span", {
                id: "home"
            }), s.jsxs("video", {
                className: "w-full",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                children: [s.jsx("source", {
                    onLoad: q.lazy,
                    src: Pf,
                    type: "video/mp4"
                }), "Your browser does not support the video tag."]
            })]
        }), s.jsxs("section", {
            className: "px-5",
            children: [s.jsx(Tf, {}), s.jsx("span", {
                id: "events"
            }), s.jsx(Hf, {}), s.jsx("span", {
                id: "rules"
            }), s.jsx(Qf, {}), s.jsx("span", {
                id: "about"
            }), s.jsx(Kf, {})]
        }), s.jsx("section", { 
            id: "payment",
            className: "px-5 bg-gray-100 py-10 text-center",
            children: s.jsxs("div", {
                className: "payment-container",
                children: [s.jsx("h2", {
                    className: "text-3xl font-bold mb-5",
                    children: "Make a Payment"
                }), s.jsx("img", {
                    src: "./assets/QRcode.jpg",
                    alt: "QR Code",
                    className: "mx-auto   mb-5 w-10 h-10 qr-image"
                })]
              
            })
        }), s.jsx("section", {
            className: "bg-black text-white footer",
            children: s.jsx("p", {
                className: "py-5 text-center font-poppins",
                children: "NIVAS@all rights reserved"
            })
        })]
    })
}

tc(document.getElementById("root")).render(s.jsx(q.StrictMode, {
    children: s.jsx(Yf, {})
}));
