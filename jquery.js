!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    function n(t, e) {
        e = e || nt;
        var n = e.createElement("script");
        n.text = t,
        e.head.appendChild(n).parentNode.removeChild(n)
    }
    function i(t) {
        var e = !!t && "length"in t && t.length
          , n = gt.type(t);
        return "function" !== n && !gt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function o(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    function r(t, e, n) {
        return gt.isFunction(e) ? gt.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? gt.grep(t, function(t) {
            return t === e !== n
        }) : "string" != typeof e ? gt.grep(t, function(t) {
            return at.call(e, t) > -1 !== n
        }) : wt.test(e) ? gt.filter(e, t, n) : (e = gt.filter(e, t),
        gt.grep(t, function(t) {
            return at.call(e, t) > -1 !== n && 1 === t.nodeType
        }))
    }
    function s(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    function a(t) {
        var e = {};
        return gt.each(t.match(kt) || [], function(t, n) {
            e[n] = !0
        }),
        e
    }
    function u(t) {
        return t
    }
    function l(t) {
        throw t
    }
    function c(t, e, n, i) {
        var o;
        try {
            t && gt.isFunction(o = t.promise) ? o.call(t).done(e).fail(n) : t && gt.isFunction(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    function p() {
        nt.removeEventListener("DOMContentLoaded", p),
        t.removeEventListener("load", p),
        gt.ready()
    }
    function h() {
        this.expando = gt.expando + h.uid++
    }
    function f(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Pt.test(t) ? JSON.parse(t) : t)
    }
    function d(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(qt, "-$&").toLowerCase(),
            "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = f(n)
                } catch (t) {}
                $t.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    function g(t, e, n, i) {
        var o, r = 1, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return gt.css(t, e, "")
        }
        , u = a(), l = n && n[3] || (gt.cssNumber[e] ? "" : "px"), c = (gt.cssNumber[e] || "px" !== l && +u) && It.exec(gt.css(t, e));
        if (c && c[3] !== l) {
            l = l || c[3],
            n = n || [],
            c = +u || 1;
            do {
                r = r || ".5",
                c /= r,
                gt.style(t, e, c + l)
            } while (r !== (r = a() / u) && 1 !== r && --s)
        }
        return n && (c = +c || +u || 0,
        o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = l,
        i.start = c,
        i.end = o)),
        o
    }
    function m(t) {
        var e, n = t.ownerDocument, i = t.nodeName, o = Wt[i];
        return o || (e = n.body.appendChild(n.createElement(i)),
        o = gt.css(e, "display"),
        e.parentNode.removeChild(e),
        "none" === o && (o = "block"),
        Wt[i] = o,
        o)
    }
    function v(t, e) {
        for (var n, i, o = [], r = 0, s = t.length; r < s; r++)
            i = t[r],
            i.style && (n = i.style.display,
            e ? ("none" === n && (o[r] = Lt.get(i, "display") || null,
            o[r] || (i.style.display = "")),
            "" === i.style.display && Ot(i) && (o[r] = m(i))) : "none" !== n && (o[r] = "none",
            Lt.set(i, "display", n)));
        for (r = 0; r < s; r++)
            null != o[r] && (t[r].style.display = o[r]);
        return t
    }
    function y(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
        void 0 === e || e && o(t, e) ? gt.merge([t], n) : n
    }
    function x(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
            Lt.set(t[n], "globalEval", !e || Lt.get(e[n], "globalEval"))
    }
    function b(t, e, n, i, o) {
        for (var r, s, a, u, l, c, p = e.createDocumentFragment(), h = [], f = 0, d = t.length; f < d; f++)
            if ((r = t[f]) || 0 === r)
                if ("object" === gt.type(r))
                    gt.merge(h, r.nodeType ? [r] : r);
                else if (Yt.test(r)) {
                    for (s = s || p.appendChild(e.createElement("div")),
                    a = (Bt.exec(r) || ["", ""])[1].toLowerCase(),
                    u = Xt[a] || Xt._default,
                    s.innerHTML = u[1] + gt.htmlPrefilter(r) + u[2],
                    c = u[0]; c--; )
                        s = s.lastChild;
                    gt.merge(h, s.childNodes),
                    s = p.firstChild,
                    s.textContent = ""
                } else
                    h.push(e.createTextNode(r));
        for (p.textContent = "",
        f = 0; r = h[f++]; )
            if (i && gt.inArray(r, i) > -1)
                o && o.push(r);
            else if (l = gt.contains(r.ownerDocument, r),
            s = y(p.appendChild(r), "script"),
            l && x(s),
            n)
                for (c = 0; r = s[c++]; )
                    zt.test(r.type || "") && n.push(r);
        return p
    }
    function T() {
        return !0
    }
    function w() {
        return !1
    }
    function C() {
        try {
            return nt.activeElement
        } catch (t) {}
    }
    function S(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n,
            n = void 0);
            for (a in e)
                S(t, a, n, i, e[a], r);
            return t
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = w;
        else if (!o)
            return t;
        return 1 === r && (s = o,
        o = function(t) {
            return gt().off(t),
            s.apply(this, arguments)
        }
        ,
        o.guid = s.guid || (s.guid = gt.guid++)),
        t.each(function() {
            gt.event.add(this, e, o, i, n)
        })
    }
    function E(t, e) {
        return o(t, "table") && o(11 !== e.nodeType ? e : e.firstChild, "tr") ? gt(">tbody", t)[0] || t : t
    }
    function A(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function k(t) {
        var e = Zt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function D(t, e) {
        var n, i, o, r, s, a, u, l;
        if (1 === e.nodeType) {
            if (Lt.hasData(t) && (r = Lt.access(t),
            s = Lt.set(e, r),
            l = r.events)) {
                delete s.handle,
                s.events = {};
                for (o in l)
                    for (n = 0,
                    i = l[o].length; n < i; n++)
                        gt.event.add(e, o, l[o][n])
            }
            $t.hasData(t) && (a = $t.access(t),
            u = gt.extend({}, a),
            $t.set(e, u))
        }
    }
    function N(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && _t.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }
    function M(t, e, i, o) {
        e = rt.apply([], e);
        var r, s, a, u, l, c, p = 0, h = t.length, f = h - 1, d = e[0], g = gt.isFunction(d);
        if (g || h > 1 && "string" == typeof d && !ft.checkClone && Kt.test(d))
            return t.each(function(n) {
                var r = t.eq(n);
                g && (e[0] = d.call(this, n, r.html())),
                M(r, e, i, o)
            });
        if (h && (r = b(e, t[0].ownerDocument, !1, t, o),
        s = r.firstChild,
        1 === r.childNodes.length && (r = s),
        s || o)) {
            for (a = gt.map(y(r, "script"), A),
            u = a.length; p < h; p++)
                l = r,
                p !== f && (l = gt.clone(l, !0, !0),
                u && gt.merge(a, y(l, "script"))),
                i.call(t[p], l, p);
            if (u)
                for (c = a[a.length - 1].ownerDocument,
                gt.map(a, k),
                p = 0; p < u; p++)
                    l = a[p],
                    zt.test(l.type || "") && !Lt.access(l, "globalEval") && gt.contains(c, l) && (l.src ? gt._evalUrl && gt._evalUrl(l.src) : n(l.textContent.replace(te, ""), c))
        }
        return t
    }
    function j(t, e, n) {
        for (var i, o = e ? gt.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || gt.cleanData(y(i)),
            i.parentNode && (n && gt.contains(i.ownerDocument, i) && x(y(i, "script")),
            i.parentNode.removeChild(i));
        return t
    }
    function L(t, e, n) {
        var i, o, r, s, a = t.style;
        return n = n || ie(t),
        n && (s = n.getPropertyValue(e) || n[e],
        "" !== s || gt.contains(t.ownerDocument, t) || (s = gt.style(t, e)),
        !ft.pixelMarginRight() && ne.test(s) && ee.test(e) && (i = a.width,
        o = a.minWidth,
        r = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = o,
        a.maxWidth = r)),
        void 0 !== s ? s + "" : s
    }
    function $(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function P(t) {
        if (t in le)
            return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ue.length; n--; )
            if ((t = ue[n] + e)in le)
                return t
    }
    function q(t) {
        var e = gt.cssProps[t];
        return e || (e = gt.cssProps[t] = P(t) || t),
        e
    }
    function R(t, e, n) {
        var i = It.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }
    function I(t, e, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; r < 4; r += 2)
            "margin" === n && (s += gt.css(t, n + Ft[r], !0, o)),
            i ? ("content" === n && (s -= gt.css(t, "padding" + Ft[r], !0, o)),
            "margin" !== n && (s -= gt.css(t, "border" + Ft[r] + "Width", !0, o))) : (s += gt.css(t, "padding" + Ft[r], !0, o),
            "padding" !== n && (s += gt.css(t, "border" + Ft[r] + "Width", !0, o)));
        return s
    }
    function F(t, e, n) {
        var i, o = ie(t), r = L(t, e, o), s = "border-box" === gt.css(t, "boxSizing", !1, o);
        return ne.test(r) ? r : (i = s && (ft.boxSizingReliable() || r === t.style[e]),
        "auto" === r && (r = t["offset" + e[0].toUpperCase() + e.slice(1)]),
        (r = parseFloat(r) || 0) + I(t, e, n || (s ? "border" : "content"), i, o) + "px")
    }
    function O(t, e, n, i, o) {
        return new O.prototype.init(t,e,n,i,o)
    }
    function H() {
        pe && (!1 === nt.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(H) : t.setTimeout(H, gt.fx.interval),
        gt.fx.tick())
    }
    function W() {
        return t.setTimeout(function() {
            ce = void 0
        }),
        ce = gt.now()
    }
    function _(t, e) {
        var n, i = 0, o = {
            height: t
        };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
            n = Ft[i],
            o["margin" + n] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t),
        o
    }
    function B(t, e, n) {
        for (var i, o = (Y.tweeners[e] || []).concat(Y.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, e, t))
                return i
    }
    function z(t, e, n) {
        var i, o, r, s, a, u, l, c, p = "width"in e || "height"in e, h = this, f = {}, d = t.style, g = t.nodeType && Ot(t), m = Lt.get(t, "fxshow");
        n.queue || (s = gt._queueHooks(t, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        a = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || a()
        }
        ),
        s.unqueued++,
        h.always(function() {
            h.always(function() {
                s.unqueued--,
                gt.queue(t, "fx").length || s.empty.fire()
            })
        }));
        for (i in e)
            if (o = e[i],
            he.test(o)) {
                if (delete e[i],
                r = r || "toggle" === o,
                o === (g ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i])
                        continue;
                    g = !0
                }
                f[i] = m && m[i] || gt.style(t, i)
            }
        if ((u = !gt.isEmptyObject(e)) || !gt.isEmptyObject(f)) {
            p && 1 === t.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
            l = m && m.display,
            null == l && (l = Lt.get(t, "display")),
            c = gt.css(t, "display"),
            "none" === c && (l ? c = l : (v([t], !0),
            l = t.style.display || l,
            c = gt.css(t, "display"),
            v([t]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === gt.css(t, "float") && (u || (h.done(function() {
                d.display = l
            }),
            null == l && (c = d.display,
            l = "none" === c ? "" : c)),
            d.display = "inline-block")),
            n.overflow && (d.overflow = "hidden",
            h.always(function() {
                d.overflow = n.overflow[0],
                d.overflowX = n.overflow[1],
                d.overflowY = n.overflow[2]
            })),
            u = !1;
            for (i in f)
                u || (m ? "hidden"in m && (g = m.hidden) : m = Lt.access(t, "fxshow", {
                    display: l
                }),
                r && (m.hidden = !g),
                g && v([t], !0),
                h.done(function() {
                    g || v([t]),
                    Lt.remove(t, "fxshow");
                    for (i in f)
                        gt.style(t, i, f[i])
                })),
                u = B(g ? m[i] : 0, i, h),
                i in m || (m[i] = u.start,
                g && (u.end = u.start,
                u.start = 0))
        }
    }
    function X(t, e) {
        var n, i, o, r, s;
        for (n in t)
            if (i = gt.camelCase(n),
            o = e[i],
            r = t[n],
            Array.isArray(r) && (o = r[1],
            r = t[n] = r[0]),
            n !== i && (t[i] = r,
            delete t[n]),
            (s = gt.cssHooks[i]) && "expand"in s) {
                r = s.expand(r),
                delete t[i];
                for (n in r)
                    n in t || (t[n] = r[n],
                    e[n] = o)
            } else
                e[i] = o
    }
    function Y(t, e, n) {
        var i, o, r = 0, s = Y.prefilters.length, a = gt.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (o)
                return !1;
            for (var e = ce || W(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, r = 1 - i, s = 0, u = l.tweens.length; s < u; s++)
                l.tweens[s].run(r);
            return a.notifyWith(t, [l, r, n]),
            r < 1 && u ? n : (u || a.notifyWith(t, [l, 1, 0]),
            a.resolveWith(t, [l]),
            !1)
        }, l = a.promise({
            elem: t,
            props: gt.extend({}, e),
            opts: gt.extend(!0, {
                specialEasing: {},
                easing: gt.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: ce || W(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = gt.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0
                  , i = e ? l.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < i; n++)
                    l.tweens[n].run(1);
                return e ? (a.notifyWith(t, [l, 1, 0]),
                a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]),
                this
            }
        }), c = l.props;
        for (X(c, l.opts.specialEasing); r < s; r++)
            if (i = Y.prefilters[r].call(l, t, c, l.opts))
                return gt.isFunction(i.stop) && (gt._queueHooks(l.elem, l.opts.queue).stop = gt.proxy(i.stop, i)),
                i;
        return gt.map(c, B, l),
        gt.isFunction(l.opts.start) && l.opts.start.call(t, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        gt.fx.timer(gt.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    function V(t) {
        return (t.match(kt) || []).join(" ")
    }
    function U(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function Q(t, e, n, i) {
        var o;
        if (Array.isArray(e))
            gt.each(e, function(e, o) {
                n || we.test(t) ? i(t, o) : Q(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
        else if (n || "object" !== gt.type(e))
            i(t, e);
        else
            for (o in e)
                Q(t + "[" + o + "]", e[o], n, i)
    }
    function G(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var i, o = 0, r = e.toLowerCase().match(kt) || [];
            if (gt.isFunction(n))
                for (; i = r[o++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function J(t, e, n, i) {
        function o(a) {
            var u;
            return r[a] = !0,
            gt.each(t[a] || [], function(t, a) {
                var l = a(e, n, i);
                return "string" != typeof l || s || r[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l),
                o(l),
                !1)
            }),
            u
        }
        var r = {}
          , s = t === Ne;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }
    function K(t, e) {
        var n, i, o = gt.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && gt.extend(!0, t, i),
        t
    }
    function Z(t, e, n) {
        for (var i, o, r, s, a = t.contents, u = t.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    u.unshift(o);
                    break
                }
        if (u[0]in n)
            r = u[0];
        else {
            for (o in n) {
                if (!u[0] || t.converters[o + " " + u[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r)
            return r !== u[0] && u.unshift(r),
            n[r]
    }
    function tt(t, e, n, i) {
        var o, r, s, a, u, l = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                l[s.toLowerCase()] = t.converters[s];
        for (r = c.shift(); r; )
            if (t.responseFields[r] && (n[t.responseFields[r]] = e),
            !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            u = r,
            r = c.shift())
                if ("*" === r)
                    r = u;
                else if ("*" !== u && u !== r) {
                    if (!(s = l[u + " " + r] || l["* " + r]))
                        for (o in l)
                            if (a = o.split(" "),
                            a[1] === r && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                !0 === s ? s = l[o] : !0 !== l[o] && (r = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && t.throws)
                            e = s(e);
                        else
                            try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + u + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    var et = []
      , nt = t.document
      , it = Object.getPrototypeOf
      , ot = et.slice
      , rt = et.concat
      , st = et.push
      , at = et.indexOf
      , ut = {}
      , lt = ut.toString
      , ct = ut.hasOwnProperty
      , pt = ct.toString
      , ht = pt.call(Object)
      , ft = {}
      , dt = "3.2.1"
      , gt = function(t, e) {
        return new gt.fn.init(t,e)
    }
      , mt = function(t, e) {
        return e.toUpperCase()
    };
    gt.fn = gt.prototype = {
        jquery: dt,
        constructor: gt,
        length: 0,
        toArray: function() {
            return ot.call(this)
        },
        get: function(t) {
            return null == t ? ot.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = gt.merge(this.constructor(), t);
            return e.prevObject = this,
            e
        },
        each: function(t) {
            return gt.each(this, t)
        },
        map: function(t) {
            return this.pushStack(gt.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: st,
        sort: et.sort,
        splice: et.splice
    },
    gt.extend = gt.fn.extend = function() {
        var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || gt.isFunction(s) || (s = {}),
        a === u && (s = this,
        a--); a < u; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    n = s[e],
                    i = t[e],
                    s !== i && (l && i && (gt.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1,
                    r = n && Array.isArray(n) ? n : []) : r = n && gt.isPlainObject(n) ? n : {},
                    s[e] = gt.extend(l, r, i)) : void 0 !== i && (s[e] = i));
        return s
    }
    ,
    gt.extend({
        expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === gt.type(t)
        },
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = gt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== lt.call(t) || (e = it(t)) && ("function" != typeof (n = ct.call(e, "constructor") && e.constructor) || pt.call(n) !== ht))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ut[lt.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            n(t)
        },
        camelCase: function(t) {
            return t.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, mt)
        },
        each: function(t, e) {
            var n, o = 0;
            if (i(t))
                for (n = t.length; o < n && !1 !== e.call(t[o], o, t[o]); o++)
                    ;
            else
                for (o in t)
                    if (!1 === e.call(t[o], o, t[o]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? gt.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)),
            n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : at.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++)
                t[o++] = e[i];
            return t.length = o,
            t
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, r = t.length, s = !n; o < r; o++)
                !e(t[o], o) !== s && i.push(t[o]);
            return i
        },
        map: function(t, e, n) {
            var o, r, s = 0, a = [];
            if (i(t))
                for (o = t.length; s < o; s++)
                    null != (r = e(t[s], s, n)) && a.push(r);
            else
                for (s in t)
                    null != (r = e(t[s], s, n)) && a.push(r);
            return rt.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            if ("string" == typeof e && (n = t[e],
            e = t,
            t = n),
            gt.isFunction(t))
                return i = ot.call(arguments, 2),
                o = function() {
                    return t.apply(e || this, i.concat(ot.call(arguments)))
                }
                ,
                o.guid = t.guid = t.guid || gt.guid++,
                o
        },
        now: Date.now,
        support: ft
    }),
    "function" == typeof Symbol && (gt.fn[Symbol.iterator] = et[Symbol.iterator]),
    gt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        ut["[object " + e + "]"] = e.toLowerCase()
    });
    var vt = function(t) {
        function e(t, e, n, i) {
            var o, r, s, a, u, c, h, f = e && e.ownerDocument, d = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!i && ((e ? e.ownerDocument || e : O) !== j && M(e),
            e = e || j,
            $)) {
                if (11 !== d && (u = gt.exec(t)))
                    if (o = u[1]) {
                        if (9 === d) {
                            if (!(s = e.getElementById(o)))
                                return n;
                            if (s.id === o)
                                return n.push(s),
                                n
                        } else if (f && (s = f.getElementById(o)) && I(e, s) && s.id === o)
                            return n.push(s),
                            n
                    } else {
                        if (u[2])
                            return G.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((o = u[3]) && b.getElementsByClassName && e.getElementsByClassName)
                            return G.apply(n, e.getElementsByClassName(o)),
                            n
                    }
                if (b.qsa && !z[t + " "] && (!P || !P.test(t))) {
                    if (1 !== d)
                        f = e,
                        h = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(xt, bt) : e.setAttribute("id", a = F),
                        c = S(t),
                        r = c.length; r--; )
                            c[r] = "#" + a + " " + p(c[r]);
                        h = c.join(","),
                        f = mt.test(t) && l(e.parentNode) || e
                    }
                    if (h)
                        try {
                            return G.apply(n, f.querySelectorAll(h)),
                            n
                        } catch (t) {} finally {
                            a === F && e.removeAttribute("id")
                        }
                }
            }
            return A(t.replace(rt, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > T.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[F] = !0,
            t
        }
        function o(t) {
            var e = j.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function r(t, e) {
            for (var n = t.split("|"), i = n.length; i--; )
                T.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t
              , i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && wt(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function u(t) {
            return i(function(e) {
                return e = +e,
                i(function(n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--; )
                        n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function l(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        function c() {}
        function p(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++)
                i += t[e].value;
            return i
        }
        function h(t, e, n) {
            var i = e.dir
              , o = e.next
              , r = o || i
              , s = n && "parentNode" === r
              , a = W++;
            return e.first ? function(e, n, o) {
                for (; e = e[i]; )
                    if (1 === e.nodeType || s)
                        return t(e, n, o);
                return !1
            }
            : function(e, n, u) {
                var l, c, p, h = [H, a];
                if (u) {
                    for (; e = e[i]; )
                        if ((1 === e.nodeType || s) && t(e, n, u))
                            return !0
                } else
                    for (; e = e[i]; )
                        if (1 === e.nodeType || s)
                            if (p = e[F] || (e[F] = {}),
                            c = p[e.uniqueID] || (p[e.uniqueID] = {}),
                            o && o === e.nodeName.toLowerCase())
                                e = e[i] || e;
                            else {
                                if ((l = c[r]) && l[0] === H && l[1] === a)
                                    return h[2] = l[2];
                                if (c[r] = h,
                                h[2] = t(e, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function f(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--; )
                    if (!t[o](e, n, i))
                        return !1;
                return !0
            }
            : t[0]
        }
        function d(t, n, i) {
            for (var o = 0, r = n.length; o < r; o++)
                e(t, n[o], i);
            return i
        }
        function g(t, e, n, i, o) {
            for (var r, s = [], a = 0, u = t.length, l = null != e; a < u; a++)
                (r = t[a]) && (n && !n(r, i, o) || (s.push(r),
                l && e.push(a)));
            return s
        }
        function m(t, e, n, o, r, s) {
            return o && !o[F] && (o = m(o)),
            r && !r[F] && (r = m(r, s)),
            i(function(i, s, a, u) {
                var l, c, p, h = [], f = [], m = s.length, v = i || d(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : g(v, h, t, a, u), x = n ? r || (i ? t : m || o) ? [] : s : y;
                if (n && n(y, x, a, u),
                o)
                    for (l = g(x, f),
                    o(l, [], a, u),
                    c = l.length; c--; )
                        (p = l[c]) && (x[f[c]] = !(y[f[c]] = p));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (l = [],
                            c = x.length; c--; )
                                (p = x[c]) && l.push(y[c] = p);
                            r(null, x = [], l, u)
                        }
                        for (c = x.length; c--; )
                            (p = x[c]) && (l = r ? K(i, p) : h[c]) > -1 && (i[l] = !(s[l] = p))
                    }
                } else
                    x = g(x === s ? x.splice(m, x.length) : x),
                    r ? r(null, s, x, u) : G.apply(s, x)
            })
        }
        function v(t) {
            for (var e, n, i, o = t.length, r = T.relative[t[0].type], s = r || T.relative[" "], a = r ? 1 : 0, u = h(function(t) {
                return t === e
            }, s, !0), l = h(function(t) {
                return K(e, t) > -1
            }, s, !0), c = [function(t, n, i) {
                var o = !r && (i || n !== k) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i));
                return e = null,
                o
            }
            ]; a < o; a++)
                if (n = T.relative[t[a].type])
                    c = [h(f(c), n)];
                else {
                    if (n = T.filter[t[a].type].apply(null, t[a].matches),
                    n[F]) {
                        for (i = ++a; i < o && !T.relative[t[i].type]; i++)
                            ;
                        return m(a > 1 && f(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(rt, "$1"), n, a < i && v(t.slice(a, i)), i < o && v(t = t.slice(i)), i < o && p(t))
                    }
                    c.push(n)
                }
            return f(c)
        }
        function y(t, n) {
            var o = n.length > 0
              , r = t.length > 0
              , s = function(i, s, a, u, l) {
                var c, p, h, f = 0, d = "0", m = i && [], v = [], y = k, x = i || r && T.find.TAG("*", l), b = H += null == y ? 1 : Math.random() || .1, w = x.length;
                for (l && (k = s === j || s || l); d !== w && null != (c = x[d]); d++) {
                    if (r && c) {
                        for (p = 0,
                        s || c.ownerDocument === j || (M(c),
                        a = !$); h = t[p++]; )
                            if (h(c, s || j, a)) {
                                u.push(c);
                                break
                            }
                        l && (H = b)
                    }
                    o && ((c = !h && c) && f--,
                    i && m.push(c))
                }
                if (f += d,
                o && d !== f) {
                    for (p = 0; h = n[p++]; )
                        h(m, v, s, a);
                    if (i) {
                        if (f > 0)
                            for (; d--; )
                                m[d] || v[d] || (v[d] = U.call(u));
                        v = g(v)
                    }
                    G.apply(u, v),
                    l && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                }
                return l && (H = b,
                k = y),
                m
            };
            return o ? i(s) : s
        }
        var x, b, T, w, C, S, E, A, k, D, N, M, j, L, $, P, q, R, I, F = "sizzle" + 1 * new Date, O = t.document, H = 0, W = 0, _ = n(), B = n(), z = n(), X = function(t, e) {
            return t === e && (N = !0),
            0
        }, Y = {}.hasOwnProperty, V = [], U = V.pop, Q = V.push, G = V.push, J = V.slice, K = function(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)", ot = new RegExp(tt + "+","g"), rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$","g"), st = new RegExp("^" + tt + "*," + tt + "*"), at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]","g"), lt = new RegExp(it), ct = new RegExp("^" + et + "$"), pt = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + nt),
            PSEUDO: new RegExp("^" + it),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Z + ")$","i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)","i")
        }, ht = /^(?:input|select|textarea|button)$/i, ft = /^h\d$/i, dt = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /[+~]/, vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)","ig"), yt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, bt = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, Tt = function() {
            M()
        }, wt = h(function(t) {
            return !0 === t.disabled && ("form"in t || "label"in t)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(V = J.call(O.childNodes), O.childNodes),
            V[O.childNodes.length].nodeType
        } catch (t) {
            G = {
                apply: V.length ? function(t, e) {
                    Q.apply(t, J.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        b = e.support = {},
        C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        M = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : O;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i,
            L = j.documentElement,
            $ = !C(j),
            O !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)),
            b.attributes = o(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            b.getElementsByTagName = o(function(t) {
                return t.appendChild(j.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            b.getElementsByClassName = dt.test(j.getElementsByClassName),
            b.getById = o(function(t) {
                return L.appendChild(t).id = F,
                !j.getElementsByName || !j.getElementsByName(F).length
            }),
            b.getById ? (T.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ,
            T.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && $) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ) : (T.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }
            ,
            T.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && $) {
                    var n, i, o, r = e.getElementById(t);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === t)
                            return [r];
                        for (o = e.getElementsByName(t),
                        i = 0; r = o[i++]; )
                            if ((n = r.getAttributeNode("id")) && n.value === t)
                                return [r]
                    }
                    return []
                }
            }
            ),
            T.find.TAG = b.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, i = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            T.find.CLASS = b.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && $)
                    return e.getElementsByClassName(t)
            }
            ,
            q = [],
            P = [],
            (b.qsa = dt.test(j.querySelectorAll)) && (o(function(t) {
                L.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + tt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || P.push("\\[" + tt + "*(?:value|" + Z + ")"),
                t.querySelectorAll("[id~=" + F + "-]").length || P.push("~="),
                t.querySelectorAll(":checked").length || P.push(":checked"),
                t.querySelectorAll("a#" + F + "+*").length || P.push(".#.+[+~]")
            }),
            o(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = j.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && P.push("name" + tt + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"),
                L.appendChild(t).disabled = !0,
                2 !== t.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                P.push(",.*:")
            })),
            (b.matchesSelector = dt.test(R = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(t) {
                b.disconnectedMatch = R.call(t, "*"),
                R.call(t, "[s!='']:x"),
                q.push("!=", it)
            }),
            P = P.length && new RegExp(P.join("|")),
            q = q.length && new RegExp(q.join("|")),
            e = dt.test(L.compareDocumentPosition),
            I = e || dt.test(L.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            X = e ? function(t, e) {
                if (t === e)
                    return N = !0,
                    0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === j || t.ownerDocument === O && I(O, t) ? -1 : e === j || e.ownerDocument === O && I(O, e) ? 1 : D ? K(D, t) - K(D, e) : 0 : 4 & n ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return N = !0,
                    0;
                var n, i = 0, o = t.parentNode, r = e.parentNode, a = [t], u = [e];
                if (!o || !r)
                    return t === j ? -1 : e === j ? 1 : o ? -1 : r ? 1 : D ? K(D, t) - K(D, e) : 0;
                if (o === r)
                    return s(t, e);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (n = e; n = n.parentNode; )
                    u.unshift(n);
                for (; a[i] === u[i]; )
                    i++;
                return i ? s(a[i], u[i]) : a[i] === O ? -1 : u[i] === O ? 1 : 0
            }
            ,
            j) : j
        }
        ,
        e.matches = function(t, n) {
            return e(t, null, null, n)
        }
        ,
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== j && M(t),
            n = n.replace(ut, "='$1']"),
            b.matchesSelector && $ && !z[n + " "] && (!q || !q.test(n)) && (!P || !P.test(n)))
                try {
                    var i = R.call(t, n);
                    if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (t) {}
            return e(n, j, null, [t]).length > 0
        }
        ,
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== j && M(t),
            I(t, e)
        }
        ,
        e.attr = function(t, e) {
            (t.ownerDocument || t) !== j && M(t);
            var n = T.attrHandle[e.toLowerCase()]
              , i = n && Y.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !$) : void 0;
            return void 0 !== i ? i : b.attributes || !$ ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }
        ,
        e.escape = function(t) {
            return (t + "").replace(xt, bt)
        }
        ,
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        e.uniqueSort = function(t) {
            var e, n = [], i = 0, o = 0;
            if (N = !b.detectDuplicates,
            D = !b.sortStable && t.slice(0),
            t.sort(X),
            N) {
                for (; e = t[o++]; )
                    e === t[o] && (i = n.push(o));
                for (; i--; )
                    t.splice(n[i], 1)
            }
            return D = null,
            t
        }
        ,
        w = e.getText = function(t) {
            var e, n = "", i = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += w(t)
                } else if (3 === o || 4 === o)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += w(e);
            return n
        }
        ,
        T = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(vt, yt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && lt.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(vt, yt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = _[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && _(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : !n || (r += "",
                        "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3)
                      , s = "last" !== t.slice(-4)
                      , a = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, n, u) {
                        var l, c, p, h, f, d, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !u && !a, x = !1;
                        if (m) {
                            if (r) {
                                for (; g; ) {
                                    for (h = e; h = h[g]; )
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                            return !1;
                                    d = g = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (h = m,
                                p = h[F] || (h[F] = {}),
                                c = p[h.uniqueID] || (p[h.uniqueID] = {}),
                                l = c[t] || [],
                                f = l[0] === H && l[1],
                                x = f && l[2],
                                h = f && m.childNodes[f]; h = ++f && h && h[g] || (x = f = 0) || d.pop(); )
                                    if (1 === h.nodeType && ++x && h === e) {
                                        c[t] = [H, f, x];
                                        break
                                    }
                            } else if (y && (h = e,
                            p = h[F] || (h[F] = {}),
                            c = p[h.uniqueID] || (p[h.uniqueID] = {}),
                            l = c[t] || [],
                            f = l[0] === H && l[1],
                            x = f),
                            !1 === x)
                                for (; (h = ++f && h && h[g] || (x = f = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++x || (y && (p = h[F] || (h[F] = {}),
                                c = p[h.uniqueID] || (p[h.uniqueID] = {}),
                                c[t] = [H, x]),
                                h !== e)); )
                                    ;
                            return (x -= o) === i || x % i == 0 && x / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var o, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[F] ? r(n) : r.length > 1 ? (o = [t, t, "", n],
                    T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = r(t, n), s = o.length; s--; )
                            i = K(t, o[s]),
                            t[i] = !(e[i] = o[s])
                    }) : function(t) {
                        return r(t, 0, o)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = []
                      , n = []
                      , o = E(t.replace(rt, "$1"));
                    return o[F] ? i(function(t, e, n, i) {
                        for (var r, s = o(t, null, i, []), a = t.length; a--; )
                            (r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, i, r) {
                        return e[0] = t,
                        o(e, null, r, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(vt, yt),
                    function(e) {
                        return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return ct.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(vt, yt).toLowerCase(),
                    function(e) {
                        var n;
                        do {
                            if (n = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === L
                },
                focus: function(t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !T.pseudos.empty(t)
                },
                header: function(t) {
                    return ft.test(t.nodeName)
                },
                input: function(t) {
                    return ht.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0; )
                        t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[x] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            T.pseudos[x] = function(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(x);
        return c.prototype = T.filters = T.pseudos,
        T.setFilters = new c,
        S = e.tokenize = function(t, n) {
            var i, o, r, s, a, u, l, c = B[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = t,
            u = [],
            l = T.preFilter; a; ) {
                i && !(o = st.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                u.push(r = [])),
                i = !1,
                (o = at.exec(a)) && (i = o.shift(),
                r.push({
                    value: i,
                    type: o[0].replace(rt, " ")
                }),
                a = a.slice(i.length));
                for (s in T.filter)
                    !(o = pt[s].exec(a)) || l[s] && !(o = l[s](o)) || (i = o.shift(),
                    r.push({
                        value: i,
                        type: s,
                        matches: o
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? e.error(t) : B(t, u).slice(0)
        }
        ,
        E = e.compile = function(t, e) {
            var n, i = [], o = [], r = z[t + " "];
            if (!r) {
                for (e || (e = S(t)),
                n = e.length; n--; )
                    r = v(e[n]),
                    r[F] ? i.push(r) : o.push(r);
                r = z(t, y(o, i)),
                r.selector = t
            }
            return r
        }
        ,
        A = e.select = function(t, e, n, i) {
            var o, r, s, a, u, c = "function" == typeof t && t, h = !i && S(t = c.selector || t);
            if (n = n || [],
            1 === h.length) {
                if (r = h[0] = h[0].slice(0),
                r.length > 2 && "ID" === (s = r[0]).type && 9 === e.nodeType && $ && T.relative[r[1].type]) {
                    if (!(e = (T.find.ID(s.matches[0].replace(vt, yt), e) || [])[0]))
                        return n;
                    c && (e = e.parentNode),
                    t = t.slice(r.shift().value.length)
                }
                for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o],
                !T.relative[a = s.type]); )
                    if ((u = T.find[a]) && (i = u(s.matches[0].replace(vt, yt), mt.test(r[0].type) && l(e.parentNode) || e))) {
                        if (r.splice(o, 1),
                        !(t = i.length && p(r)))
                            return G.apply(n, i),
                            n;
                        break
                    }
            }
            return (c || E(t, h))(i, e, !$, n, !e || mt.test(t) && l(e.parentNode) || e),
            n
        }
        ,
        b.sortStable = F.split("").sort(X).join("") === F,
        b.detectDuplicates = !!N,
        M(),
        b.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(j.createElement("fieldset"))
        }),
        o(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        b.attributes && o(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(Z, function(t, e, n) {
            var i;
            if (!n)
                return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
        e
    }(t);
    gt.find = vt,
    gt.expr = vt.selectors,
    gt.expr[":"] = gt.expr.pseudos,
    gt.uniqueSort = gt.unique = vt.uniqueSort,
    gt.text = vt.getText,
    gt.isXMLDoc = vt.isXML,
    gt.contains = vt.contains,
    gt.escapeSelector = vt.escape;
    var yt = function(t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (o && gt(t).is(n))
                    break;
                i.push(t)
            }
        return i
    }
      , xt = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , bt = gt.expr.match.needsContext
      , Tt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , wt = /^.[^:#\[\.,]*$/;
    gt.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? gt.find.matchesSelector(i, t) ? [i] : [] : gt.find.matches(t, gt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    gt.fn.extend({
        find: function(t) {
            var e, n, i = this.length, o = this;
            if ("string" != typeof t)
                return this.pushStack(gt(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (gt.contains(o[e], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            e = 0; e < i; e++)
                gt.find(t, o[e], n);
            return i > 1 ? gt.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && bt.test(t) ? gt(t) : t || [], !1).length
        }
    });
    var Ct, St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (gt.fn.init = function(t, e, n) {
        var i, o;
        if (!t)
            return this;
        if (n = n || Ct,
        "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : St.exec(t)) || !i[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof gt ? e[0] : e,
                gt.merge(this, gt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)),
                Tt.test(i[1]) && gt.isPlainObject(e))
                    for (i in e)
                        gt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return o = nt.getElementById(i[2]),
            o && (this[0] = o,
            this.length = 1),
            this
        }
        return t.nodeType ? (this[0] = t,
        this.length = 1,
        this) : gt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(gt) : gt.makeArray(t, this)
    }
    ).prototype = gt.fn,
    Ct = gt(nt);
    var Et = /^(?:parents|prev(?:Until|All))/
      , At = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    gt.fn.extend({
        has: function(t) {
            var e = gt(t, this)
              , n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (gt.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof t && gt(t);
            if (!bt.test(t))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && gt.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(r.length > 1 ? gt.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? at.call(gt(t), this[0]) : at.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(gt.uniqueSort(gt.merge(this.get(), gt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    gt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return yt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return yt(t, "parentNode", n)
        },
        next: function(t) {
            return s(t, "nextSibling")
        },
        prev: function(t) {
            return s(t, "previousSibling")
        },
        nextAll: function(t) {
            return yt(t, "nextSibling")
        },
        prevAll: function(t) {
            return yt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return yt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return yt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return xt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return xt(t.firstChild)
        },
        contents: function(t) {
            return o(t, "iframe") ? t.contentDocument : (o(t, "template") && (t = t.content || t),
            gt.merge([], t.childNodes))
        }
    }, function(t, e) {
        gt.fn[t] = function(n, i) {
            var o = gt.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (o = gt.filter(i, o)),
            this.length > 1 && (At[t] || gt.uniqueSort(o),
            Et.test(t) && o.reverse()),
            this.pushStack(o)
        }
    });
    var kt = /[^\x20\t\r\n\f]+/g;
    gt.Callbacks = function(t) {
        t = "string" == typeof t ? a(t) : gt.extend({}, t);
        var e, n, i, o, r = [], s = [], u = -1, l = function() {
            for (o = o || t.once,
            i = e = !0; s.length; u = -1)
                for (n = s.shift(); ++u < r.length; )
                    !1 === r[u].apply(n[0], n[1]) && t.stopOnFalse && (u = r.length,
                    n = !1);
            t.memory || (n = !1),
            e = !1,
            o && (r = n ? [] : "")
        }, c = {
            add: function() {
                return r && (n && !e && (u = r.length - 1,
                s.push(n)),
                function e(n) {
                    gt.each(n, function(n, i) {
                        gt.isFunction(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== gt.type(i) && e(i)
                    })
                }(arguments),
                n && !e && l()),
                this
            },
            remove: function() {
                return gt.each(arguments, function(t, e) {
                    for (var n; (n = gt.inArray(e, r, n)) > -1; )
                        r.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(t) {
                return t ? gt.inArray(t, r) > -1 : r.length > 0
            },
            empty: function() {
                return r && (r = []),
                this
            },
            disable: function() {
                return o = s = [],
                r = n = "",
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return o = s = [],
                n || e || (r = n = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(t, n) {
                return o || (n = n || [],
                n = [t, n.slice ? n.slice() : n],
                s.push(n),
                e || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    gt.extend({
        Deferred: function(e) {
            var n = [["notify", "progress", gt.Callbacks("memory"), gt.Callbacks("memory"), 2], ["resolve", "done", gt.Callbacks("once memory"), gt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", gt.Callbacks("once memory"), gt.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , o = {
                state: function() {
                    return i
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                catch: function(t) {
                    return o.then(null, t)
                },
                pipe: function() {
                    var t = arguments;
                    return gt.Deferred(function(e) {
                        gt.each(n, function(n, i) {
                            var o = gt.isFunction(t[i[4]]) && t[i[4]];
                            r[i[1]](function() {
                                var t = o && o.apply(this, arguments);
                                t && gt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                then: function(e, i, o) {
                    function r(e, n, i, o) {
                        return function() {
                            var a = this
                              , c = arguments
                              , p = function() {
                                var t, p;
                                if (!(e < s)) {
                                    if ((t = i.apply(a, c)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    p = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                    gt.isFunction(p) ? o ? p.call(t, r(s, n, u, o), r(s, n, l, o)) : (s++,
                                    p.call(t, r(s, n, u, o), r(s, n, l, o), r(s, n, u, n.notifyWith))) : (i !== u && (a = void 0,
                                    c = [t]),
                                    (o || n.resolveWith)(a, c))
                                }
                            }
                              , h = o ? p : function() {
                                try {
                                    p()
                                } catch (t) {
                                    gt.Deferred.exceptionHook && gt.Deferred.exceptionHook(t, h.stackTrace),
                                    e + 1 >= s && (i !== l && (a = void 0,
                                    c = [t]),
                                    n.rejectWith(a, c))
                                }
                            }
                            ;
                            e ? h() : (gt.Deferred.getStackHook && (h.stackTrace = gt.Deferred.getStackHook()),
                            t.setTimeout(h))
                        }
                    }
                    var s = 0;
                    return gt.Deferred(function(t) {
                        n[0][3].add(r(0, t, gt.isFunction(o) ? o : u, t.notifyWith)),
                        n[1][3].add(r(0, t, gt.isFunction(e) ? e : u)),
                        n[2][3].add(r(0, t, gt.isFunction(i) ? i : l))
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? gt.extend(t, o) : o
                }
            }
              , r = {};
            return gt.each(n, function(t, e) {
                var s = e[2]
                  , a = e[5];
                o[e[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, n[3 - t][2].disable, n[0][2].lock),
                s.add(e[3].fire),
                r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ,
                r[e[0] + "With"] = s.fireWith
            }),
            o.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(t) {
            var e = arguments.length
              , n = e
              , i = Array(n)
              , o = ot.call(arguments)
              , r = gt.Deferred()
              , s = function(t) {
                return function(n) {
                    i[t] = this,
                    o[t] = arguments.length > 1 ? ot.call(arguments) : n,
                    --e || r.resolveWith(i, o)
                }
            };
            if (e <= 1 && (c(t, r.done(s(n)).resolve, r.reject, !e),
            "pending" === r.state() || gt.isFunction(o[n] && o[n].then)))
                return r.then();
            for (; n--; )
                c(o[n], s(n), r.reject);
            return r.promise()
        }
    });
    var Dt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    gt.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && Dt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }
    ,
    gt.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    }
    ;
    var Nt = gt.Deferred();
    gt.fn.ready = function(t) {
        return Nt.then(t).catch(function(t) {
            gt.readyException(t)
        }),
        this
    }
    ,
    gt.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --gt.readyWait : gt.isReady) || (gt.isReady = !0,
            !0 !== t && --gt.readyWait > 0 || Nt.resolveWith(nt, [gt]))
        }
    }),
    gt.ready.then = Nt.then,
    "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll ? t.setTimeout(gt.ready) : (nt.addEventListener("DOMContentLoaded", p),
    t.addEventListener("load", p));
    var Mt = function(t, e, n, i, o, r, s) {
        var a = 0
          , u = t.length
          , l = null == n;
        if ("object" === gt.type(n)) {
            o = !0;
            for (a in n)
                Mt(t, e, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0,
        gt.isFunction(i) || (s = !0),
        l && (s ? (e.call(t, i),
        e = null) : (l = e,
        e = function(t, e, n) {
            return l.call(gt(t), n)
        }
        )),
        e))
            for (; a < u; a++)
                e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : l ? e.call(t) : u ? e(t[0], n) : r
    }
      , jt = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    h.uid = 1,
    h.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {},
            jt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e)
                o[gt.camelCase(e)] = n;
            else
                for (i in e)
                    o[gt.camelCase(i)] = e[i];
            return o
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][gt.camelCase(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
            void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    Array.isArray(e) ? e = e.map(gt.camelCase) : (e = gt.camelCase(e),
                    e = e in i ? [e] : e.match(kt) || []),
                    n = e.length;
                    for (; n--; )
                        delete i[e[n]]
                }
                (void 0 === e || gt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !gt.isEmptyObject(e)
        }
    };
    var Lt = new h
      , $t = new h
      , Pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , qt = /[A-Z]/g;
    gt.extend({
        hasData: function(t) {
            return $t.hasData(t) || Lt.hasData(t)
        },
        data: function(t, e, n) {
            return $t.access(t, e, n)
        },
        removeData: function(t, e) {
            $t.remove(t, e)
        },
        _data: function(t, e, n) {
            return Lt.access(t, e, n)
        },
        _removeData: function(t, e) {
            Lt.remove(t, e)
        }
    }),
    gt.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = $t.get(r),
                1 === r.nodeType && !Lt.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && (i = s[n].name,
                        0 === i.indexOf("data-") && (i = gt.camelCase(i.slice(5)),
                        d(r, i, o[i])));
                    Lt.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                $t.set(this, t)
            }) : Mt(this, function(e) {
                var n;
                if (r && void 0 === e) {
                    if (void 0 !== (n = $t.get(r, t)))
                        return n;
                    if (void 0 !== (n = d(r, t)))
                        return n
                } else
                    this.each(function() {
                        $t.set(this, t, e)
                    })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                $t.remove(this, t)
            })
        }
    }),
    gt.extend({
        queue: function(t, e, n) {
            var i;
            if (t)
                return e = (e || "fx") + "queue",
                i = Lt.get(t, e),
                n && (!i || Array.isArray(n) ? i = Lt.access(t, e, gt.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = gt.queue(t, e)
              , i = n.length
              , o = n.shift()
              , r = gt._queueHooks(t, e)
              , s = function() {
                gt.dequeue(t, e)
            };
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === e && n.unshift("inprogress"),
            delete r.stop,
            o.call(t, s, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Lt.get(t, n) || Lt.access(t, n, {
                empty: gt.Callbacks("once memory").add(function() {
                    Lt.remove(t, [e + "queue", n])
                })
            })
        }
    }),
    gt.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            n--),
            arguments.length < n ? gt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = gt.queue(this, t, e);
                gt._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && gt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                gt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, o = gt.Deferred(), r = this, s = this.length, a = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; s--; )
                (n = Lt.get(r[s], t + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            o.promise(e)
        }
    });
    var Rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , It = new RegExp("^(?:([+-])=|)(" + Rt + ")([a-z%]*)$","i")
      , Ft = ["Top", "Right", "Bottom", "Left"]
      , Ot = function(t, e) {
        return t = e || t,
        "none" === t.style.display || "" === t.style.display && gt.contains(t.ownerDocument, t) && "none" === gt.css(t, "display")
    }
      , Ht = function(t, e, n, i) {
        var o, r, s = {};
        for (r in e)
            s[r] = t.style[r],
            t.style[r] = e[r];
        o = n.apply(t, i || []);
        for (r in e)
            t.style[r] = s[r];
        return o
    }
      , Wt = {};
    gt.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ot(this) ? gt(this).show() : gt(this).hide()
            })
        }
    });
    var _t = /^(?:checkbox|radio)$/i
      , Bt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , zt = /^$|\/(?:java|ecma)script/i
      , Xt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Xt.optgroup = Xt.option,
    Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead,
    Xt.th = Xt.td;
    var Yt = /<|&#?\w+;/;
    !function() {
        var t = nt.createDocumentFragment()
          , e = t.appendChild(nt.createElement("div"))
          , n = nt.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        ft.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        ft.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Vt = nt.documentElement
      , Ut = /^key/
      , Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Gt = /^([^.]*)(?:\.(.+)|)/;
    gt.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, u, l, c, p, h, f, d, g, m = Lt.get(t);
            if (m)
                for (n.handler && (r = n,
                n = r.handler,
                o = r.selector),
                o && gt.find.matchesSelector(Vt, o),
                n.guid || (n.guid = gt.guid++),
                (u = m.events) || (u = m.events = {}),
                (s = m.handle) || (s = m.handle = function(e) {
                    return void 0 !== gt && gt.event.triggered !== e.type ? gt.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                e = (e || "").match(kt) || [""],
                l = e.length; l--; )
                    a = Gt.exec(e[l]) || [],
                    f = g = a[1],
                    d = (a[2] || "").split(".").sort(),
                    f && (p = gt.event.special[f] || {},
                    f = (o ? p.delegateType : p.bindType) || f,
                    p = gt.event.special[f] || {},
                    c = gt.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && gt.expr.match.needsContext.test(o),
                        namespace: d.join(".")
                    }, r),
                    (h = u[f]) || (h = u[f] = [],
                    h.delegateCount = 0,
                    p.setup && !1 !== p.setup.call(t, i, d, s) || t.addEventListener && t.addEventListener(f, s)),
                    p.add && (p.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    o ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                    gt.event.global[f] = !0)
        },
        remove: function(t, e, n, i, o) {
            var r, s, a, u, l, c, p, h, f, d, g, m = Lt.hasData(t) && Lt.get(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(kt) || [""],
                l = e.length; l--; )
                    if (a = Gt.exec(e[l]) || [],
                    f = g = a[1],
                    d = (a[2] || "").split(".").sort(),
                    f) {
                        for (p = gt.event.special[f] || {},
                        f = (i ? p.delegateType : p.bindType) || f,
                        h = u[f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = h.length; r--; )
                            c = h[r],
                            !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(r, 1),
                            c.selector && h.delegateCount--,
                            p.remove && p.remove.call(t, c));
                        s && !h.length && (p.teardown && !1 !== p.teardown.call(t, d, m.handle) || gt.removeEvent(t, f, m.handle),
                        delete u[f])
                    } else
                        for (f in u)
                            gt.event.remove(t, f + e[l], n, i, !0);
                gt.isEmptyObject(u) && Lt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, o, r, s, a = gt.event.fix(t), u = new Array(arguments.length), l = (Lt.get(this, "events") || {})[a.type] || [], c = gt.event.special[a.type] || {};
            for (u[0] = a,
            e = 1; e < arguments.length; e++)
                u[e] = arguments[e];
            if (a.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = gt.event.handlers.call(this, a, l),
                e = 0; (o = s[e++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = o.elem,
                    n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r,
                        a.data = r.data,
                        void 0 !== (i = ((gt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, u)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, s, a = [], u = e.delegateCount, l = t.target;
            if (u && l.nodeType && !("click" === t.type && t.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                        for (r = [],
                        s = {},
                        n = 0; n < u; n++)
                            i = e[n],
                            o = i.selector + " ",
                            void 0 === s[o] && (s[o] = i.needsContext ? gt(o, this).index(l) > -1 : gt.find(o, this, null, [l]).length),
                            s[o] && r.push(i);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return l = this,
            u < e.length && a.push({
                elem: l,
                handlers: e.slice(u)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(gt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: gt.isFunction(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[gt.expando] ? t : new gt.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== C() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === C() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && o(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(t) {
                    return o(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    gt.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    ,
    gt.Event = function(t, e) {
        return this instanceof gt.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? T : w,
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
        this.currentTarget = t.currentTarget,
        this.relatedTarget = t.relatedTarget) : this.type = t,
        e && gt.extend(this, e),
        this.timeStamp = t && t.timeStamp || gt.now(),
        void (this[gt.expando] = !0)) : new gt.Event(t,e)
    }
    ,
    gt.Event.prototype = {
        constructor: gt.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = T,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = T,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = T,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    gt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && Ut.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Qt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, gt.event.addProp),
    gt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        gt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, o = t.relatedTarget, r = t.handleObj;
                return o && (o === i || gt.contains(i, o)) || (t.type = r.origType,
                n = r.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    gt.fn.extend({
        on: function(t, e, n, i) {
            return S(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return S(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj,
                gt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof t) {
                for (o in t)
                    this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e,
            e = void 0),
            !1 === n && (n = w),
            this.each(function() {
                gt.event.remove(this, t, n, e)
            })
        }
    });
    var Jt = /<script|<style|<link/i
      , Kt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Zt = /^true\/(.*)/
      , te = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    gt.extend({
        htmlPrefilter: function(t) {
            return t.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, o, r, s, a = t.cloneNode(!0), u = gt.contains(t.ownerDocument, t);
            if (!(ft.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || gt.isXMLDoc(t)))
                for (s = y(a),
                r = y(t),
                i = 0,
                o = r.length; i < o; i++)
                    N(r[i], s[i]);
            if (e)
                if (n)
                    for (r = r || y(t),
                    s = s || y(a),
                    i = 0,
                    o = r.length; i < o; i++)
                        D(r[i], s[i]);
                else
                    D(t, a);
            return s = y(a, "script"),
            s.length > 0 && x(s, !u && y(t, "script")),
            a
        },
        cleanData: function(t) {
            for (var e, n, i, o = gt.event.special, r = 0; void 0 !== (n = t[r]); r++)
                if (jt(n)) {
                    if (e = n[Lt.expando]) {
                        if (e.events)
                            for (i in e.events)
                                o[i] ? gt.event.remove(n, i) : gt.removeEvent(n, i, e.handle);
                        n[Lt.expando] = void 0
                    }
                    n[$t.expando] && (n[$t.expando] = void 0)
                }
        }
    }),
    gt.fn.extend({
        detach: function(t) {
            return j(this, t, !0)
        },
        remove: function(t) {
            return j(this, t)
        },
        text: function(t) {
            return Mt(this, function(t) {
                return void 0 === t ? gt.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return M(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    E(this, t).appendChild(t)
                }
            })
        },
        prepend: function() {
            return M(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = E(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return M(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return M(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (gt.cleanData(y(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return gt.clone(this, t, e)
            })
        },
        html: function(t) {
            return Mt(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !Jt.test(t) && !Xt[(Bt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = gt.htmlPrefilter(t);
                    try {
                        for (; n < i; n++)
                            e = this[n] || {},
                            1 === e.nodeType && (gt.cleanData(y(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return M(this, arguments, function(e) {
                var n = this.parentNode;
                gt.inArray(this, t) < 0 && (gt.cleanData(y(this)),
                n && n.replaceChild(e, this))
            }, t)
        }
    }),
    gt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        gt.fn[t] = function(t) {
            for (var n, i = [], o = gt(t), r = o.length - 1, s = 0; s <= r; s++)
                n = s === r ? this : this.clone(!0),
                gt(o[s])[e](n),
                st.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ee = /^margin/
      , ne = new RegExp("^(" + Rt + ")(?!px)[a-z%]+$","i")
      , ie = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(e)
    };
    !function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                a.innerHTML = "",
                Vt.appendChild(s);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top,
                r = "2px" === e.marginLeft,
                i = "4px" === e.width,
                a.style.marginRight = "50%",
                o = "4px" === e.marginRight,
                Vt.removeChild(s),
                a = null
            }
        }
        var n, i, o, r, s = nt.createElement("div"), a = nt.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        ft.clearCloneStyle = "content-box" === a.style.backgroundClip,
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        s.appendChild(a),
        gt.extend(ft, {
            pixelPosition: function() {
                return e(),
                n
            },
            boxSizingReliable: function() {
                return e(),
                i
            },
            pixelMarginRight: function() {
                return e(),
                o
            },
            reliableMarginLeft: function() {
                return e(),
                r
            }
        }))
    }();
    var oe = /^(none|table(?!-c[ea]).+)/
      , re = /^--/
      , se = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ae = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , ue = ["Webkit", "Moz", "ms"]
      , le = nt.createElement("div").style;
    gt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = L(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = gt.camelCase(e), u = re.test(e), l = t.style;
                return u || (e = q(a)),
                s = gt.cssHooks[e] || gt.cssHooks[a],
                void 0 === n ? s && "get"in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e] : (r = typeof n,
                "string" === r && (o = It.exec(n)) && o[1] && (n = g(t, e, o),
                r = "number"),
                void (null != n && n === n && ("number" === r && (n += o && o[3] || (gt.cssNumber[a] ? "" : "px")),
                ft.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(t, n, i)) || (u ? l.setProperty(e, n) : l[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var o, r, s, a = gt.camelCase(e);
            return re.test(e) || (e = q(a)),
            s = gt.cssHooks[e] || gt.cssHooks[a],
            s && "get"in s && (o = s.get(t, !0, n)),
            void 0 === o && (o = L(t, e, i)),
            "normal" === o && e in ae && (o = ae[e]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    gt.each(["height", "width"], function(t, e) {
        gt.cssHooks[e] = {
            get: function(t, n, i) {
                if (n)
                    return !oe.test(gt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? F(t, e, i) : Ht(t, se, function() {
                        return F(t, e, i)
                    })
            },
            set: function(t, n, i) {
                var o, r = i && ie(t), s = i && I(t, e, i, "border-box" === gt.css(t, "boxSizing", !1, r), r);
                return s && (o = It.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n,
                n = gt.css(t, e)),
                R(t, n, s)
            }
        }
    }),
    gt.cssHooks.marginLeft = $(ft.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat(L(t, "marginLeft")) || t.getBoundingClientRect().left - Ht(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
    }),
    gt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        gt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    o[t + Ft[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        ee.test(t) || (gt.cssHooks[t + e].set = R)
    }),
    gt.fn.extend({
        css: function(t, e) {
            return Mt(this, function(t, e, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(e)) {
                    for (i = ie(t),
                    o = e.length; s < o; s++)
                        r[e[s]] = gt.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? gt.style(t, e, n) : gt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }),
    gt.Tween = O,
    O.prototype = {
        constructor: O,
        init: function(t, e, n, i, o, r) {
            this.elem = t,
            this.prop = n,
            this.easing = o || gt.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (gt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = O.propHooks[this.prop];
            return t && t.get ? t.get(this) : O.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = e = gt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : O.propHooks._default.set(this),
            this
        }
    },
    O.prototype.init.prototype = O.prototype,
    O.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = gt.css(t.elem, t.prop, ""),
                e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                gt.fx.step[t.prop] ? gt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[gt.cssProps[t.prop]] && !gt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : gt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    gt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    gt.fx = O.prototype.init,
    gt.fx.step = {};
    var ce, pe, he = /^(?:toggle|show|hide)$/, fe = /queueHooks$/;
    gt.Animation = gt.extend(Y, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return g(n.elem, t, It.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            gt.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.match(kt);
            for (var n, i = 0, o = t.length; i < o; i++)
                n = t[i],
                Y.tweeners[n] = Y.tweeners[n] || [],
                Y.tweeners[n].unshift(e)
        },
        prefilters: [z],
        prefilter: function(t, e) {
            e ? Y.prefilters.unshift(t) : Y.prefilters.push(t)
        }
    }),
    gt.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? gt.extend({}, t) : {
            complete: n || !n && e || gt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !gt.isFunction(e) && e
        };
        return gt.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in gt.fx.speeds ? i.duration = gt.fx.speeds[i.duration] : i.duration = gt.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            gt.isFunction(i.old) && i.old.call(this),
            i.queue && gt.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    gt.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Ot).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = gt.isEmptyObject(t)
              , r = gt.speed(e, n, i)
              , s = function() {
                var e = Y(this, gt.extend({}, t), r);
                (o || Lt.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e,
            e = t,
            t = void 0),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , o = null != t && t + "queueHooks"
                  , r = gt.timers
                  , s = Lt.get(this);
                if (o)
                    s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && fe.test(o) && i(s[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n),
                    e = !1,
                    r.splice(o, 1));
                !e && n || gt.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, n = Lt.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = gt.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                gt.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; e < s; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    gt.each(["toggle", "show", "hide"], function(t, e) {
        var n = gt.fn[e];
        gt.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(_(e, !0), t, i, o)
        }
    }),
    gt.each({
        slideDown: _("show"),
        slideUp: _("hide"),
        slideToggle: _("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        gt.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    gt.timers = [],
    gt.fx.tick = function() {
        var t, e = 0, n = gt.timers;
        for (ce = gt.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || gt.fx.stop(),
        ce = void 0
    }
    ,
    gt.fx.timer = function(t) {
        gt.timers.push(t),
        gt.fx.start()
    }
    ,
    gt.fx.interval = 13,
    gt.fx.start = function() {
        pe || (pe = !0,
        H())
    }
    ,
    gt.fx.stop = function() {
        pe = null
    }
    ,
    gt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    gt.fn.delay = function(e, n) {
        return e = gt.fx ? gt.fx.speeds[e] || e : e,
        n = n || "fx",
        this.queue(n, function(n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var t = nt.createElement("input")
          , e = nt.createElement("select")
          , n = e.appendChild(nt.createElement("option"));
        t.type = "checkbox",
        ft.checkOn = "" !== t.value,
        ft.optSelected = n.selected,
        t = nt.createElement("input"),
        t.value = "t",
        t.type = "radio",
        ft.radioValue = "t" === t.value
    }();
    var de, ge = gt.expr.attrHandle;
    gt.fn.extend({
        attr: function(t, e) {
            return Mt(this, gt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                gt.removeAttr(this, t)
            })
        }
    }),
    gt.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === t.getAttribute ? gt.prop(t, e, n) : (1 === r && gt.isXMLDoc(t) || (o = gt.attrHooks[e.toLowerCase()] || (gt.expr.match.bool.test(e) ? de : void 0)),
                void 0 !== n ? null === n ? void gt.removeAttr(t, e) : o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                n) : o && "get"in o && null !== (i = o.get(t, e)) ? i : (i = gt.find.attr(t, e),
                null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ft.radioValue && "radio" === e && o(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0, o = e && e.match(kt);
            if (o && 1 === t.nodeType)
                for (; n = o[i++]; )
                    t.removeAttribute(n)
        }
    }),
    de = {
        set: function(t, e, n) {
            return !1 === e ? gt.removeAttr(t, n) : t.setAttribute(n, n),
            n
        }
    },
    gt.each(gt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ge[e] || gt.find.attr;
        ge[e] = function(t, e, i) {
            var o, r, s = e.toLowerCase();
            return i || (r = ge[s],
            ge[s] = o,
            o = null != n(t, e, i) ? s : null,
            ge[s] = r),
            o
        }
    });
    var me = /^(?:input|select|textarea|button)$/i
      , ve = /^(?:a|area)$/i;
    gt.fn.extend({
        prop: function(t, e) {
            return Mt(this, gt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[gt.propFix[t] || t]
            })
        }
    }),
    gt.extend({
        prop: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && gt.isXMLDoc(t) || (e = gt.propFix[e] || e,
                o = gt.propHooks[e]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = gt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : me.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ft.optSelected || (gt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    gt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        gt.propFix[this.toLowerCase()] = this
    }),
    gt.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a, u = 0;
            if (gt.isFunction(t))
                return this.each(function(e) {
                    gt(this).addClass(t.call(this, e, U(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(kt) || []; n = this[u++]; )
                    if (o = U(n),
                    i = 1 === n.nodeType && " " + V(o) + " ") {
                        for (s = 0; r = e[s++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = V(i),
                        o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a, u = 0;
            if (gt.isFunction(t))
                return this.each(function(e) {
                    gt(this).removeClass(t.call(this, e, U(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(kt) || []; n = this[u++]; )
                    if (o = U(n),
                    i = 1 === n.nodeType && " " + V(o) + " ") {
                        for (s = 0; r = e[s++]; )
                            for (; i.indexOf(" " + r + " ") > -1; )
                                i = i.replace(" " + r + " ", " ");
                        a = V(i),
                        o !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : gt.isFunction(t) ? this.each(function(n) {
                gt(this).toggleClass(t.call(this, n, U(this), e), e)
            }) : this.each(function() {
                var e, i, o, r;
                if ("string" === n)
                    for (i = 0,
                    o = gt(this),
                    r = t.match(kt) || []; e = r[i++]; )
                        o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else
                    void 0 !== t && "boolean" !== n || (e = U(this),
                    e && Lt.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Lt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + V(U(n)) + " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    });
    gt.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = gt.isFunction(t),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? t.call(this, n, gt(this).val()) : t,
                null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = gt.map(o, function(t) {
                    return null == t ? "" : t + ""
                })),
                (e = gt.valHooks[this.type] || gt.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = gt.valHooks[o.type] || gt.valHooks[o.nodeName.toLowerCase()],
            e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value,
            "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)) : void 0
        }
    }),
    gt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = gt.find.attr(t, "value");
                    return null != e ? e : V(gt.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, r = t.options, s = t.selectedIndex, a = "select-one" === t.type, u = a ? null : [], l = a ? s + 1 : r.length;
                    for (i = s < 0 ? l : a ? s : 0; i < l; i++)
                        if (n = r[i],
                        (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (e = gt(n).val(),
                            a)
                                return e;
                            u.push(e)
                        }
                    return u
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = gt.makeArray(e), s = o.length; s--; )
                        i = o[s],
                        (i.selected = gt.inArray(gt.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    gt.each(["radio", "checkbox"], function() {
        gt.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e))
                    return t.checked = gt.inArray(gt(t).val(), e) > -1
            }
        },
        ft.checkOn || (gt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var ye = /^(?:focusinfocus|focusoutblur)$/;
    gt.extend(gt.event, {
        trigger: function(e, n, i, o) {
            var r, s, a, u, l, c, p, h = [i || nt], f = ct.call(e, "type") ? e.type : e, d = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || nt,
            3 !== i.nodeType && 8 !== i.nodeType && !ye.test(f + gt.event.triggered) && (f.indexOf(".") > -1 && (d = f.split("."),
            f = d.shift(),
            d.sort()),
            l = f.indexOf(":") < 0 && "on" + f,
            e = e[gt.expando] ? e : new gt.Event(f,"object" == typeof e && e),
            e.isTrigger = o ? 2 : 3,
            e.namespace = d.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = i),
            n = null == n ? [e] : gt.makeArray(n, [e]),
            p = gt.event.special[f] || {},
            o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!o && !p.noBubble && !gt.isWindow(i)) {
                    for (u = p.delegateType || f,
                    ye.test(u + f) || (s = s.parentNode); s; s = s.parentNode)
                        h.push(s),
                        a = s;
                    a === (i.ownerDocument || nt) && h.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0; (s = h[r++]) && !e.isPropagationStopped(); )
                    e.type = r > 1 ? u : p.bindType || f,
                    c = (Lt.get(s, "events") || {})[e.type] && Lt.get(s, "handle"),
                    c && c.apply(s, n),
                    (c = l && s[l]) && c.apply && jt(s) && (e.result = c.apply(s, n),
                    !1 === e.result && e.preventDefault());
                return e.type = f,
                o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), n) || !jt(i) || l && gt.isFunction(i[f]) && !gt.isWindow(i) && (a = i[l],
                a && (i[l] = null),
                gt.event.triggered = f,
                i[f](),
                gt.event.triggered = void 0,
                a && (i[l] = a)),
                e.result
            }
        },
        simulate: function(t, e, n) {
            var i = gt.extend(new gt.Event, n, {
                type: t,
                isSimulated: !0
            });
            gt.event.trigger(i, null, e)
        }
    }),
    gt.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                gt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n)
                return gt.event.trigger(t, e, n, !0)
        }
    }),
    gt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        gt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    gt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    ft.focusin = "onfocusin"in t,
    ft.focusin || gt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            gt.event.simulate(e, t.target, gt.event.fix(t))
        };
        gt.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , o = Lt.access(i, e);
                o || i.addEventListener(t, n, !0),
                Lt.access(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , o = Lt.access(i, e) - 1;
                o ? Lt.access(i, e, o) : (i.removeEventListener(t, n, !0),
                Lt.remove(i, e))
            }
        }
    });
    var xe = t.location
      , be = gt.now()
      , Te = /\?/;
    gt.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || gt.error("Invalid XML: " + e),
        n
    }
    ;
    var we = /\[\]$/
      , Ce = /^(?:submit|button|image|reset|file)$/i
      , Se = /^(?:input|select|textarea|keygen)/i;
    gt.param = function(t, e) {
        var n, i = [], o = function(t, e) {
            var n = gt.isFunction(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(t) || t.jquery && !gt.isPlainObject(t))
            gt.each(t, function() {
                o(this.name, this.value)
            });
        else
            for (n in t)
                Q(n, t[n], e, o);
        return i.join("&")
    }
    ,
    gt.fn.extend({
        serialize: function() {
            return gt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = gt.prop(this, "elements");
                return t ? gt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !gt(this).is(":disabled") && Se.test(this.nodeName) && !Ce.test(t) && (this.checked || !_t.test(t))
            }).map(function(t, e) {
                var n = gt(this).val();
                return null == n ? null : Array.isArray(n) ? gt.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    });
    var Ee = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ae = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , ke = /^(?:GET|HEAD)$/
      , De = {}
      , Ne = {}
      , Me = "*/".concat("*")
      , je = nt.createElement("a");
    je.href = xe.href,
    gt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe.href,
            type: "GET",
            isLocal: Ae.test(xe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Me,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": gt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? K(K(t, gt.ajaxSettings), e) : K(gt.ajaxSettings, t)
        },
        ajaxPrefilter: G(De),
        ajaxTransport: G(Ne),
        ajax: function(e, n) {
            function i(e, n, i, a) {
                var l, h, f, b, T, w = n;
                c || (c = !0,
                u && t.clearTimeout(u),
                o = void 0,
                s = a || "",
                C.readyState = e > 0 ? 4 : 0,
                l = e >= 200 && e < 300 || 304 === e,
                i && (b = Z(d, C, i)),
                b = tt(d, b, C, l),
                l ? (d.ifModified && (T = C.getResponseHeader("Last-Modified"),
                T && (gt.lastModified[r] = T),
                (T = C.getResponseHeader("etag")) && (gt.etag[r] = T)),
                204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state,
                h = b.data,
                f = b.error,
                l = !f)) : (f = w,
                !e && w || (w = "error",
                e < 0 && (e = 0))),
                C.status = e,
                C.statusText = (n || w) + "",
                l ? v.resolveWith(g, [h, w, C]) : v.rejectWith(g, [C, w, f]),
                C.statusCode(x),
                x = void 0,
                p && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, d, l ? h : f]),
                y.fireWith(g, [C, w]),
                p && (m.trigger("ajaxComplete", [C, d]),
                --gt.active || gt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e,
            e = void 0),
            n = n || {};
            var o, r, s, a, u, l, c, p, h, f, d = gt.ajaxSetup({}, n), g = d.context || d, m = d.context && (g.nodeType || g.jquery) ? gt(g) : gt.event, v = gt.Deferred(), y = gt.Callbacks("once memory"), x = d.statusCode || {}, b = {}, T = {}, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (c) {
                        if (!a)
                            for (a = {}; e = Ee.exec(s); )
                                a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return c ? s : null
                },
                setRequestHeader: function(t, e) {
                    return null == c && (t = T[t.toLowerCase()] = T[t.toLowerCase()] || t,
                    b[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return null == c && (d.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (c)
                            C.always(t[C.status]);
                        else
                            for (e in t)
                                x[e] = [x[e], t[e]];
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return o && o.abort(e),
                    i(0, e),
                    this
                }
            };
            if (v.promise(C),
            d.url = ((e || d.url || xe.href) + "").replace(/^\/\//, xe.protocol + "//"),
            d.type = n.method || n.type || d.method || d.type,
            d.dataTypes = (d.dataType || "*").toLowerCase().match(kt) || [""],
            null == d.crossDomain) {
                l = nt.createElement("a");
                try {
                    l.href = d.url,
                    l.href = l.href,
                    d.crossDomain = je.protocol + "//" + je.host != l.protocol + "//" + l.host
                } catch (t) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = gt.param(d.data, d.traditional)),
            J(De, d, n, C),
            c)
                return C;
            p = gt.event && d.global,
            p && 0 == gt.active++ && gt.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !ke.test(d.type),
            r = d.url.replace(/#.*$/, ""),
            d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(/%20/g, "+")) : (f = d.url.slice(r.length),
            d.data && (r += (Te.test(r) ? "&" : "?") + d.data,
            delete d.data),
            !1 === d.cache && (r = r.replace(/([?&])_=[^&]*/, "$1"),
            f = (Te.test(r) ? "&" : "?") + "_=" + be++ + f),
            d.url = r + f),
            d.ifModified && (gt.lastModified[r] && C.setRequestHeader("If-Modified-Since", gt.lastModified[r]),
            gt.etag[r] && C.setRequestHeader("If-None-Match", gt.etag[r])),
            (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && C.setRequestHeader("Content-Type", d.contentType),
            C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : d.accepts["*"]);
            for (h in d.headers)
                C.setRequestHeader(h, d.headers[h]);
            if (d.beforeSend && (!1 === d.beforeSend.call(g, C, d) || c))
                return C.abort();
            if (w = "abort",
            y.add(d.complete),
            C.done(d.success),
            C.fail(d.error),
            o = J(Ne, d, n, C)) {
                if (C.readyState = 1,
                p && m.trigger("ajaxSend", [C, d]),
                c)
                    return C;
                d.async && d.timeout > 0 && (u = t.setTimeout(function() {
                    C.abort("timeout")
                }, d.timeout));
                try {
                    c = !1,
                    o.send(b, i)
                } catch (t) {
                    if (c)
                        throw t;
                    i(-1, t)
                }
            } else
                i(-1, "No Transport");
            return C
        },
        getJSON: function(t, e, n) {
            return gt.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return gt.get(t, void 0, e, "script")
        }
    }),
    gt.each(["get", "post"], function(t, e) {
        gt[e] = function(t, n, i, o) {
            return gt.isFunction(n) && (o = o || i,
            i = n,
            n = void 0),
            gt.ajax(gt.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, gt.isPlainObject(t) && t))
        }
    }),
    gt._evalUrl = function(t) {
        return gt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    gt.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (gt.isFunction(t) && (t = t.call(this[0])),
            e = gt(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this
        },
        wrapInner: function(t) {
            return gt.isFunction(t) ? this.each(function(e) {
                gt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = gt(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = gt.isFunction(t);
            return this.each(function(n) {
                gt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                gt(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    gt.expr.pseudos.hidden = function(t) {
        return !gt.expr.pseudos.visible(t)
    }
    ,
    gt.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }
    ,
    gt.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Le = {
        0: 200,
        1223: 204
    }
      , $e = gt.ajaxSettings.xhr();
    ft.cors = !!$e && "withCredentials"in $e,
    ft.ajax = $e = !!$e,
    gt.ajaxTransport(function(e) {
        var n, i;
        if (ft.cors || $e && !e.crossDomain)
            return {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (s in e.xhrFields)
                            a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o)
                        a.setRequestHeader(s, o[s]);
                    n = function(t) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                            "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Le[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (n)
                            throw t
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    gt.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    gt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return gt.globalEval(t),
                t
            }
        }
    }),
    gt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    gt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, o) {
                    e = gt("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(),
                        n = null,
                        t && o("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    nt.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Pe = []
      , qe = /(=)\?(?=&|$)|\?\?/;
    gt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Pe.pop() || gt.expando + "_" + be++;
            return this[t] = !0,
            t
        }
    }),
    gt.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, s, a = !1 !== e.jsonp && (qe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && qe.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return o = e.jsonpCallback = gt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(qe, "$1" + o) : !1 !== e.jsonp && (e.url += (Te.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
            e.converters["script json"] = function() {
                return s || gt.error(o + " was not called"),
                s[0]
            }
            ,
            e.dataTypes[0] = "json",
            r = t[o],
            t[o] = function() {
                s = arguments
            }
            ,
            i.always(function() {
                void 0 === r ? gt(t).removeProp(o) : t[o] = r,
                e[o] && (e.jsonpCallback = n.jsonpCallback,
                Pe.push(o)),
                s && gt.isFunction(r) && r(s[0]),
                s = r = void 0
            }),
            "script"
    }),
    ft.createHTMLDocument = function() {
        var t = nt.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>",
        2 === t.childNodes.length
    }(),
    gt.parseHTML = function(t, e, n) {
        if ("string" != typeof t)
            return [];
        "boolean" == typeof e && (n = e,
        e = !1);
        var i, o, r;
        return e || (ft.createHTMLDocument ? (e = nt.implementation.createHTMLDocument(""),
        i = e.createElement("base"),
        i.href = nt.location.href,
        e.head.appendChild(i)) : e = nt),
        o = Tt.exec(t),
        r = !n && [],
        o ? [e.createElement(o[1])] : (o = b([t], e, r),
        r && r.length && gt(r).remove(),
        gt.merge([], o.childNodes))
    }
    ,
    gt.fn.load = function(t, e, n) {
        var i, o, r, s = this, a = t.indexOf(" ");
        return a > -1 && (i = V(t.slice(a)),
        t = t.slice(0, a)),
        gt.isFunction(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (o = "POST"),
        s.length > 0 && gt.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments,
            s.html(i ? gt("<div>").append(gt.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, r || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    gt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        gt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    gt.expr.pseudos.animated = function(t) {
        return gt.grep(gt.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    gt.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, s, a, u, l, c = gt.css(t, "position"), p = gt(t), h = {};
            "static" === c && (t.style.position = "relative"),
            a = p.offset(),
            r = gt.css(t, "top"),
            u = gt.css(t, "left"),
            l = ("absolute" === c || "fixed" === c) && (r + u).indexOf("auto") > -1,
            l ? (i = p.position(),
            s = i.top,
            o = i.left) : (s = parseFloat(r) || 0,
            o = parseFloat(u) || 0),
            gt.isFunction(e) && (e = e.call(t, n, gt.extend({}, a))),
            null != e.top && (h.top = e.top - a.top + s),
            null != e.left && (h.left = e.left - a.left + o),
            "using"in e ? e.using.call(t, h) : p.css(h)
        }
    },
    gt.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    gt.offset.setOffset(this, t, e)
                });
            var e, n, i, o, r = this[0];
            return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(),
            e = r.ownerDocument,
            n = e.documentElement,
            o = e.defaultView,
            {
                top: i.top + o.pageYOffset - n.clientTop,
                left: i.left + o.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === gt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                o(t[0], "html") || (i = t.offset()),
                i = {
                    top: i.top + gt.css(t[0], "borderTopWidth", !0),
                    left: i.left + gt.css(t[0], "borderLeftWidth", !0)
                }),
                {
                    top: e.top - i.top - gt.css(n, "marginTop", !0),
                    left: e.left - i.left - gt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === gt.css(t, "position"); )
                    t = t.offsetParent;
                return t || Vt
            })
        }
    }),
    gt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        gt.fn[t] = function(i) {
            return Mt(this, function(t, i, o) {
                var r;
                return gt.isWindow(t) ? r = t : 9 === t.nodeType && (r = t.defaultView),
                void 0 === o ? r ? r[e] : t[i] : void (r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o)
            }, t, i, arguments.length)
        }
    }),
    gt.each(["top", "left"], function(t, e) {
        gt.cssHooks[e] = $(ft.pixelPosition, function(t, n) {
            if (n)
                return n = L(t, e),
                ne.test(n) ? gt(t).position()[e] + "px" : n
        })
    }),
    gt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        gt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            gt.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o)
                  , a = n || (!0 === o || !0 === r ? "margin" : "border");
                return Mt(this, function(e, n, o) {
                    var r;
                    return gt.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? gt.css(e, n, a) : gt.style(e, n, o, a)
                }, e, s ? o : void 0, s)
            }
        })
    }),
    gt.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    gt.holdReady = function(t) {
        t ? gt.readyWait++ : gt.ready(!0)
    }
    ,
    gt.isArray = Array.isArray,
    gt.parseJSON = JSON.parse,
    gt.nodeName = o,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return gt
    });
    var Re = t.jQuery
      , Ie = t.$;
    return gt.noConflict = function(e) {
        return t.$ === gt && (t.$ = Ie),
        e && t.jQuery === gt && (t.jQuery = Re),
        gt
    }
    ,
    e || (t.jQuery = t.$ = gt),
    gt
}),
function(t, e) {
    function n(t, e, n) {
        var i = c[e.type] || {};
        return null == t ? n || !e.def ? null : e.def : (t = i.floor ? ~~t : parseFloat(t),
        isNaN(t) ? e.def : i.mod ? (t + i.mod) % i.mod : 0 > t ? 0 : i.max < t ? i.max : t)
    }
    function i(e) {
        var n = u()
          , i = n._rgba = [];
        return e = e.toLowerCase(),
        f(a, function(t, o) {
            var r, s = o.re.exec(e), a = s && o.parse(s), u = o.space || "rgba";
            if (a)
                return r = n[u](a),
                n[l[u].cache] = r[l[u].cache],
                i = n._rgba = r._rgba,
                !1
        }),
        i.length ? ("0,0,0,0" === i.join() && t.extend(i, r.transparent),
        n) : r[e]
    }
    function o(t, e, n) {
        return n = (n + 1) % 1,
        6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }
    var r, s = /^([\-+])=\s*(\d+\.?\d*)/, a = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [t[1], t[2], t[3], t[4]]
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
        parse: function(t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
        parse: function(t) {
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]]
        }
    }], u = t.Color = function(e, n, i, o) {
        return new t.Color.fn.parse(e,n,i,o)
    }
    , l = {
        rgba: {
            props: {
                red: {
                    idx: 0,
                    type: "byte"
                },
                green: {
                    idx: 1,
                    type: "byte"
                },
                blue: {
                    idx: 2,
                    type: "byte"
                }
            }
        },
        hsla: {
            props: {
                hue: {
                    idx: 0,
                    type: "degrees"
                },
                saturation: {
                    idx: 1,
                    type: "percent"
                },
                lightness: {
                    idx: 2,
                    type: "percent"
                }
            }
        }
    }, c = {
        byte: {
            floor: !0,
            max: 255
        },
        percent: {
            max: 1
        },
        degrees: {
            mod: 360,
            floor: !0
        }
    }, p = u.support = {}, h = t("<p>")[0], f = t.each;
    h.style.cssText = "background-color:rgba(1,1,1,.5)",
    p.rgba = h.style.backgroundColor.indexOf("rgba") > -1,
    f(l, function(t, e) {
        e.cache = "_" + t,
        e.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }),
    u.fn = t.extend(u.prototype, {
        parse: function(o, s, a, c) {
            if (o === e)
                return this._rgba = [null, null, null, null],
                this;
            (o.jquery || o.nodeType) && (o = t(o).css(s),
            s = e);
            var p = this
              , h = t.type(o)
              , d = this._rgba = [];
            return s !== e && (o = [o, s, a, c],
            h = "array"),
            "string" === h ? this.parse(i(o) || r._default) : "array" === h ? (f(l.rgba.props, function(t, e) {
                d[e.idx] = n(o[e.idx], e)
            }),
            this) : "object" === h ? (o instanceof u ? f(l, function(t, e) {
                o[e.cache] && (p[e.cache] = o[e.cache].slice())
            }) : f(l, function(e, i) {
                var r = i.cache;
                f(i.props, function(t, e) {
                    if (!p[r] && i.to) {
                        if ("alpha" === t || null == o[t])
                            return;
                        p[r] = i.to(p._rgba)
                    }
                    p[r][e.idx] = n(o[t], e, !0)
                }),
                p[r] && t.inArray(null, p[r].slice(0, 3)) < 0 && (p[r][3] = 1,
                i.from && (p._rgba = i.from(p[r])))
            }),
            this) : void 0
        },
        is: function(t) {
            var e = u(t)
              , n = !0
              , i = this;
            return f(l, function(t, o) {
                var r, s = e[o.cache];
                return s && (r = i[o.cache] || o.to && o.to(i._rgba) || [],
                f(o.props, function(t, e) {
                    if (null != s[e.idx])
                        return n = s[e.idx] === r[e.idx]
                })),
                n
            }),
            n
        },
        _space: function() {
            var t = []
              , e = this;
            return f(l, function(n, i) {
                e[i.cache] && t.push(n)
            }),
            t.pop()
        },
        transition: function(t, e) {
            var i = u(t)
              , o = i._space()
              , r = l[o]
              , s = 0 === this.alpha() ? u("transparent") : this
              , a = s[r.cache] || r.to(s._rgba)
              , p = a.slice();
            return i = i[r.cache],
            f(r.props, function(t, o) {
                var r = o.idx
                  , s = a[r]
                  , u = i[r]
                  , l = c[o.type] || {};
                null !== u && (null === s ? p[r] = u : (l.mod && (u - s > l.mod / 2 ? s += l.mod : s - u > l.mod / 2 && (s -= l.mod)),
                p[r] = n((u - s) * e + s, o)))
            }),
            this[o](p)
        },
        blend: function(e) {
            if (1 === this._rgba[3])
                return this;
            var n = this._rgba.slice()
              , i = n.pop()
              , o = u(e)._rgba;
            return u(t.map(n, function(t, e) {
                return (1 - i) * o[e] + i * t
            }))
        },
        toRgbaString: function() {
            var e = "rgba("
              , n = t.map(this._rgba, function(t, e) {
                return null == t ? e > 2 ? 1 : 0 : t
            });
            return 1 === n[3] && (n.pop(),
            e = "rgb("),
            e + n.join() + ")"
        },
        toHslaString: function() {
            var e = "hsla("
              , n = t.map(this.hsla(), function(t, e) {
                return null == t && (t = e > 2 ? 1 : 0),
                e && e < 3 && (t = Math.round(100 * t) + "%"),
                t
            });
            return 1 === n[3] && (n.pop(),
            e = "hsl("),
            e + n.join() + ")"
        },
        toHexString: function(e) {
            var n = this._rgba.slice()
              , i = n.pop();
            return e && n.push(~~(255 * i)),
            "#" + t.map(n, function(t) {
                return t = (t || 0).toString(16),
                1 === t.length ? "0" + t : t
            }).join("")
        },
        toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    }),
    u.fn.parse.prototype = u.fn,
    l.hsla.to = function(t) {
        if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]];
        var e, n, i = t[0] / 255, o = t[1] / 255, r = t[2] / 255, s = t[3], a = Math.max(i, o, r), u = Math.min(i, o, r), l = a - u, c = a + u, p = .5 * c;
        return e = u === a ? 0 : i === a ? 60 * (o - r) / l + 360 : o === a ? 60 * (r - i) / l + 120 : 60 * (i - o) / l + 240,
        n = 0 === l ? 0 : p <= .5 ? l / c : l / (2 - c),
        [Math.round(e) % 360, n, p, null == s ? 1 : s]
    }
    ,
    l.hsla.from = function(t) {
        if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]];
        var e = t[0] / 360
          , n = t[1]
          , i = t[2]
          , r = t[3]
          , s = i <= .5 ? i * (1 + n) : i + n - i * n
          , a = 2 * i - s;
        return [Math.round(255 * o(a, s, e + 1 / 3)), Math.round(255 * o(a, s, e)), Math.round(255 * o(a, s, e - 1 / 3)), r]
    }
    ,
    f(l, function(i, o) {
        var r = o.props
          , a = o.cache
          , l = o.to
          , c = o.from;
        u.fn[i] = function(i) {
            if (l && !this[a] && (this[a] = l(this._rgba)),
            i === e)
                return this[a].slice();
            var o, s = t.type(i), p = "array" === s || "object" === s ? i : arguments, h = this[a].slice();
            return f(r, function(t, e) {
                var i = p["object" === s ? t : e.idx];
                null == i && (i = h[e.idx]),
                h[e.idx] = n(i, e)
            }),
            c ? (o = u(c(h)),
            o[a] = h,
            o) : u(h)
        }
        ,
        f(r, function(e, n) {
            u.fn[e] || (u.fn[e] = function(o) {
                var r, a = t.type(o), u = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i, l = this[u](), c = l[n.idx];
                return "undefined" === a ? c : ("function" === a && (o = o.call(this, c),
                a = t.type(o)),
                null == o && n.empty ? this : ("string" === a && (r = s.exec(o)) && (o = c + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1)),
                l[n.idx] = o,
                this[u](l)))
            }
            )
        })
    }),
    u.hook = function(e) {
        var n = e.split(" ");
        f(n, function(e, n) {
            t.cssHooks[n] = {
                set: function(e, o) {
                    var r, s, a = "";
                    if ("transparent" !== o && ("string" !== t.type(o) || (r = i(o)))) {
                        if (o = u(r || o),
                        !p.rgba && 1 !== o._rgba[3]) {
                            for (s = "backgroundColor" === n ? e.parentNode : e; ("" === a || "transparent" === a) && s && s.style; )
                                try {
                                    a = t.css(s, "backgroundColor"),
                                    s = s.parentNode
                                } catch (t) {}
                            o = o.blend(a && "transparent" !== a ? a : "_default")
                        }
                        o = o.toRgbaString()
                    }
                    try {
                        e.style[n] = o
                    } catch (t) {}
                }
            },
            t.fx.step[n] = function(e) {
                e.colorInit || (e.start = u(e.elem, n),
                e.end = u(e.end),
                e.colorInit = !0),
                t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
            }
        })
    }
    ,
    u.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
    t.cssHooks.borderColor = {
        expand: function(t) {
            var e = {};
            return f(["Top", "Right", "Bottom", "Left"], function(n, i) {
                e["border" + i + "Color"] = t
            }),
            e
        }
    },
    r = t.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
}(jQuery),
!function(t) {
    var e = "propeller"
      , n = {
        angle: 0,
        speed: 0,
        inertia: 0,
        minimalSpeed: .001,
        minimalAngleChange: .1,
        step: 0,
        stepTransitionTime: 0,
        stepTransitionEasing: "linear",
        rotateParentInstantly: !1,
        touchElement: null
    }
      , i = function(t, e) {
        return "string" == typeof t && (t = document.querySelectorAll(t)),
        t.length > 1 ? i.createMany(t, e) : (1 === t.length && (t = t[0]),
        this.element = t,
        this.active = !1,
        this.transiting = !1,
        this.update = this.update.bind(this),
        this.initCSSPrefix(),
        this.initAngleGetterSetter(),
        this.initOptions(e),
        this.initHardwareAcceleration(),
        this.initTransition(),
        this.bindHandlers(),
        this.addListeners(),
        void this.update())
    };
    i.createMany = function(t, e) {
        for (var n = [], o = 0; o < t.length; o++)
            n.push(new i(t[o],e));
        return n
    }
    ;
    var o = i.prototype;
    o.initAngleGetterSetter = function() {
        Object.defineProperty(this, "angle", {
            get: function() {
                return this._angle
            },
            set: function(t) {
                this._angle = t,
                this.virtualAngle = t,
                this.updateCSS()
            }
        })
    }
    ,
    o.bindHandlers = function() {
        this.onRotationStart = this.onRotationStart.bind(this),
        this.onRotationStop = this.onRotationStop.bind(this),
        this.onRotated = this.onRotated.bind(this)
    }
    ,
    o.addListeners = function() {
        this.listenersInstalled = !0,
        "ontouchstart"in document.documentElement ? (this.touchElement.addEventListener("touchstart", this.onRotationStart),
        this.touchElement.addEventListener("touchmove", this.onRotated),
        this.touchElement.addEventListener("touchend", this.onRotationStop),
        this.touchElement.addEventListener("touchcancel", this.onRotationStop),
        this.touchElement.addEventListener("dragstart", this.returnFalse)) : (this.touchElement.addEventListener("mousedown", this.onRotationStart),
        this.touchElement.addEventListener("mousemove", this.onRotated),
        this.touchElement.addEventListener("mouseup", this.onRotationStop),
        this.touchElement.addEventListener("mouseleave", this.onRotationStop),
        this.touchElement.addEventListener("dragstart", this.returnFalse)),
        this.touchElement.ondragstart = this.returnFalse
    }
    ,
    o.removeListeners = function() {
        this.listenersInstalled = !1,
        "ontouchstart"in document.documentElement ? (this.touchElement.removeEventListener("touchstart", this.onRotationStart),
        this.touchElement.removeEventListener("touchmove", this.onRotated),
        this.touchElement.removeEventListener("touchend", this.onRotationStop),
        this.touchElement.removeEventListener("touchcancel", this.onRotationStop),
        this.touchElement.removeEventListener("dragstart", this.returnFalse)) : (this.touchElement.removeEventListener("mousedown", this.onRotationStart),
        this.touchElement.removeEventListener("mousemove", this.onRotated),
        this.touchElement.removeEventListener("mouseup", this.onRotationStop),
        this.touchElement.removeEventListener("mouseleave", this.onRotationStop),
        this.touchElement.removeEventListener("dragstart", this.returnFalse))
    }
    ,
    o.bind = function() {
        !0 !== this.listenersInstalled && this.addListeners()
    }
    ,
    o.unbind = function() {
        !0 === this.listenersInstalled && (this.removeListeners(),
        this.onRotationStop())
    }
    ,
    o.stop = function() {
        this.speed = 0,
        this.onRotationStop()
    }
    ,
    o.onRotationStart = function(t) {
        this.initCoordinates(),
        this.initDrag(),
        this.active = !0,
        void 0 !== this.onDragStart && this.onDragStart(),
        !1 === this.rotateParentInstantly && t.stopPropagation()
    }
    ,
    o.onRotationStop = function() {
        void 0 !== this.onDragStop && !0 === this.active && this.onDragStop(),
        this.active = !1
    }
    ,
    o.onRotated = function(t) {
        !0 === this.active && (t.stopPropagation(),
        t.preventDefault(),
        void 0 !== t.targetTouches && void 0 !== t.targetTouches[0] ? this.lastMouseEvent = {
            pageX: t.targetTouches[0].pageX,
            pageY: t.targetTouches[0].pageY
        } : this.lastMouseEvent = {
            pageX: t.pageX || t.clientX,
            pageY: t.pageY || t.clientY
        })
    }
    ,
    o.update = function() {
        void 0 !== this.lastMouseEvent && !0 === this.active && this.updateAngleToMouse(this.lastMouseEvent),
        this.updateAngle(),
        this.applySpeed(),
        this.applyInertia(),
        Math.abs(this.lastAppliedAngle - this._angle) >= this.minimalAngleChange && !1 === this.transiting && (this.updateCSS(),
        this.blockTransition(),
        void 0 !== this.onRotate && "function" == typeof this.onRotate && this.onRotate.bind(this)(),
        this.lastAppliedAngle = this._angle),
        window.requestAnimFrame(this.update)
    }
    ,
    o.updateAngle = function() {
        this.step > 0 ? this._angle = this.getAngleFromVirtual() : this._angle = this.normalizeAngle(this.virtualAngle)
    }
    ,
    o.getAngleFromVirtual = function() {
        return Math.ceil(this.virtualAngle / this.step) * this.step
    }
    ,
    o.normalizeAngle = function(t) {
        var e = t;
        return e %= 360,
        0 > e && (e = 360 + e),
        e
    }
    ,
    o.differenceBetweenAngles = function(t, e) {
        var n = t * (Math.PI / 180)
          , i = e * (Math.PI / 180)
          , o = Math.atan2(Math.sin(n - i), Math.cos(n - i))
          , r = o * (180 / Math.PI);
        return Math.round(100 * r) / 100
    }
    ,
    o.applySpeed = function() {
        this.inertia > 0 && 0 !== this.speed && !1 === this.active && (this.virtualAngle += this.speed)
    }
    ,
    o.applyInertia = function() {
        this.inertia > 0 && (Math.abs(this.speed) >= this.minimalSpeed ? (this.speed = this.speed * this.inertia,
        !1 === this.active && Math.abs(this.speed) < this.minimalSpeed && void 0 !== this.onStop && this.onStop()) : 0 !== this.speed && (this.speed = 0))
    }
    ,
    o.updateAngleToMouse = function(t) {
        var e = t.pageX - this.cx
          , i = t.pageY - this.cy
          , o = Math.atan2(e, i)
          , r = o * (180 / Math.PI * -1) + 180;
        if (void 0 === this.lastMouseAngle && (this.lastElementAngle = this.virtualAngle,
        this.lastMouseAngle = r),
        this.stepTransitionTime !== n.stepTransitionTime)
            this.speed = this.mouseDiff = this.differenceBetweenAngles(r, this.lastMouseAngle),
            this.virtualAngle = this.lastElementAngle + this.mouseDiff,
            this.lastElementAngle = this.virtualAngle,
            this.lastMouseAngle = r;
        else {
            var s = this.virtualAngle;
            this.mouseDiff = r - this.lastMouseAngle,
            this.virtualAngle = this.lastElementAngle + this.mouseDiff;
            var a = this.virtualAngle;
            this.speed = this.differenceBetweenAngles(a, s)
        }
    }
    ,
    o.initCoordinates = function() {
        var t = this.getViewOffset();
        this.cx = t.x + this.element.offsetWidth / 2,
        this.cy = t.y + this.element.offsetHeight / 2
    }
    ,
    o.initDrag = function() {
        this.speed = 0,
        this.lastMouseAngle = void 0,
        this.lastElementAngle = void 0,
        this.lastMouseEvent = void 0
    }
    ,
    o.initOptions = function(t) {
        t = t || n,
        this.touchElement = document.querySelectorAll(t.touchElement)[0] || this.element,
        this.onRotate = t.onRotate || t.onrotate,
        this.onStop = t.onStop || t.onstop,
        this.onDragStop = t.onDragStop || t.ondragstop,
        this.onDragStart = t.onDragStart || t.ondragstart,
        this.step = t.step || n.step,
        this.stepTransitionTime = t.stepTransitionTime || n.stepTransitionTime,
        this.stepTransitionEasing = t.stepTransitionEasing || n.stepTransitionEasing,
        this.angle = t.angle || n.angle,
        this.speed = t.speed || n.speed,
        this.inertia = t.inertia || n.inertia,
        this.minimalSpeed = t.minimalSpeed || n.minimalSpeed,
        this.lastAppliedAngle = this.virtualAngle = this._angle = t.angle || n.angle,
        this.minimalAngleChange = this.step !== n.step ? this.step : n.minimalAngleChange,
        this.rotateParentInstantly = t.rotateParentInstantly || n.rotateParentInstantly
    }
    ,
    o.initCSSPrefix = function() {
        void 0 === i.cssPrefix && (void 0 !== document.body.style.transform ? i.cssPrefix = "" : void 0 !== document.body.style.mozTransform ? i.cssPrefix = "-moz-" : void 0 !== document.body.style.webkitTransform ? i.cssPrefix = "-webkit-" : void 0 !== document.body.style.msTransform && (i.cssPrefix = "-ms-"))
    }
    ,
    o.initHardwareAcceleration = function() {
        this.accelerationPostfix = "";
        var t, e = document.createElement("p"), n = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
        };
        document.body.insertBefore(e, null);
        for (var o in n)
            void 0 !== e.style[o] && (e.style[o] = "translate3d(1px,1px,1px)",
            t = window.getComputedStyle(e).getPropertyValue(n[o]));
        document.body.removeChild(e),
        !0 == (void 0 !== t && t.length > 0 && "none" !== t) && (this.accelerationPostfix = "translateZ(0)",
        this.element.style[i.cssPrefix + "transform"] = this.accelerationPostfix,
        this.updateCSS())
    }
    ,
    o.initTransition = function() {
        if (this.stepTransitionTime !== n.stepTransitionTime) {
            var t = "all " + this.stepTransitionTime + "ms " + this.stepTransitionEasing;
            this.element.style[i.cssPrefix + "transition"] = t
        }
    }
    ,
    o.updateCSS = function() {
        this.element.style[i.cssPrefix + "transform"] = "rotate(" + this._angle + "deg) " + this.accelerationPostfix
    }
    ,
    o.blockTransition = function() {
        if (this.stepTransitionTime !== n.stepTransitionTime) {
            var t = this;
            setTimeout(function() {
                t.transiting = !1
            }, this.stepTransitionTime),
            this.transiting = !0
        }
    }
    ,
    o.getViewOffset = function(t) {
        var e = {
            x: 0,
            y: 0
        };
        return this.element && this.addOffset(this.element, e, "defaultView"in document ? document.defaultView : document.parentWindow),
        e
    }
    ,
    o.addOffset = function(t, e, n) {
        var i = t.offsetParent;
        if (e.x += t.offsetLeft - (i ? i.scrollLeft : 0),
        e.y += t.offsetTop - (i ? i.scrollTop : 0),
        i) {
            if (1 == i.nodeType) {
                var o = n.getComputedStyle(i, "");
                if ("static" != o.position) {
                    if (e.x += parseInt(o.borderLeftWidth),
                    e.y += parseInt(o.borderTopWidth),
                    "table" == i.localName.toLowerCase())
                        e.x += parseInt(o.paddingLeft),
                        e.y += parseInt(o.paddingTop);
                    else if ("body" == i.localName.toLowerCase()) {
                        var r = n.getComputedStyle(t, "");
                        e.x += parseInt(r.marginLeft),
                        e.y += parseInt(r.marginTop)
                    }
                } else
                    "body" == i.localName.toLowerCase() && (e.x += parseInt(o.borderLeftWidth),
                    e.y += parseInt(o.borderTopWidth));
                for (var s = t.parentNode; i != s; )
                    e.x -= s.scrollLeft,
                    e.y -= s.scrollTop,
                    s = s.parentNode;
                this.addOffset(i, e, n)
            }
        } else {
            if ("body" == t.localName.toLowerCase()) {
                var r = n.getComputedStyle(t, "");
                e.x += parseInt(r.borderLeftWidth),
                e.y += parseInt(r.borderTopWidth);
                var a = n.getComputedStyle(t.parentNode, "");
                e.x += parseInt(a.paddingLeft),
                e.y += parseInt(a.paddingTop),
                e.x += parseInt(a.marginLeft),
                e.y += parseInt(a.marginTop)
            }
            t.scrollLeft && (e.x += t.scrollLeft),
            t.scrollTop && (e.y += t.scrollTop);
            var u = t.ownerDocument.defaultView;
            u && u.frameElement && this.addOffset(u.frameElement, e, u)
        }
    }
    ,
    o.returnFalse = function() {
        return !1
    }
    ,
    void 0 !== t.$ && ($.propeller = {},
    $.propeller.propellers = [],
    $.fn[e] = function(t) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + e)) {
                var n = new i(this,t);
                $.data(this, "plugin_" + e, n),
                $.propeller.propellers.push(n)
            }
        })
    }
    ),
    i.deg2radians = 2 * Math.PI / 360,
    t.Propeller = i
}(window),
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
        window.setTimeout(t, 1e3 / 60)
    }
}(),
function(t, e, n) {
    "use strict";
    function i(e, n) {
        return this.name = o,
        this.el = e,
        this.$el = t(e),
        this.options = t.extend({}, r, n),
        this.$document = t(this.$el[0].ownerDocument),
        this.$body = this.$document.find("body"),
        this.moveTrigger = "MSPointerMove pointermove touchmove mousemove",
        this.startTrigger = "MSPointerDown pointerdown touchstart mousedown",
        this.stopTrigger = "MSPointerUp pointerup touchend mouseup",
        this.startTriggerArray = this.startTrigger.split(" "),
        this.moveTriggerArray = this.moveTrigger.split(" "),
        this.stopTriggerArray = this.stopTrigger.split(" "),
        this.stopEvents = [this.stopTrigger, this.options.stopEvents].join(" "),
        "window" === this.options.constrainTo ? this.$container = this.$document : this.options.constrainTo && "parent" !== this.options.constrainTo ? this.$container = t(this.options.constrainTo) : this.$container = this.$el.parent(),
        this.isPointerEventCompatible() && this.applyMSDefaults(),
        this.CSSEaseHash = this.getCSSEaseHash(),
        this.scale = 1,
        this.started = !1,
        this.disabled = !1,
        this.activeDropRegions = [],
        this.resetVelocityQueue(),
        this.init(),
        this
    }
    var o = "pep"
      , r = {
        initiate: function() {},
        start: function() {},
        drag: function() {},
        stop: function() {},
        easing: null,
        rest: function() {},
        moveTo: !1,
        callIfNotStarted: ["stop", "rest"],
        startThreshold: [0, 0],
        grid: [1, 1],
        debug: !1,
        activeClass: "pep-active",
        multiplier: 1,
        velocityMultiplier: 2.5,
        shouldPreventDefault: !0,
        allowDragEventPropagation: !0,
        stopEvents: "",
        hardwareAccelerate: !0,
        useCSSTranslation: !0,
        disableSelect: !0,
        cssEaseString: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
        cssEaseDuration: 1e3,
        shouldEase: !0,
        droppable: !1,
        droppableActiveClass: "pep-dpa",
        overlapFunction: !1,
        constrainTo: !1,
        removeMargins: !0,
        place: !0,
        deferPlacement: !1,
        axis: null,
        forceNonCSS3Movement: !1,
        elementsWithInteraction: "input",
        revert: !1,
        revertAfter: "stop",
        revertIf: function() {
            return !0
        },
        ignoreRightClick: !0,
        startPos: {
            left: null,
            top: null
        },
        useBoundingClientRect: !1
    };
    i.prototype.init = function() {
        this.options.debug && this.buildDebugDiv(),
        this.options.disableSelect && this.disableSelect(),
        this.options.place && !this.options.deferPlacement && (this.positionParent(),
        this.placeObject()),
        this.ev = {},
        this.pos = {},
        this.subscribe()
    }
    ,
    i.prototype.subscribe = function() {
        var t = this;
        this.onStartEvent = function(e) {
            t.handleStart(e)
        }
        ,
        this.$el.on(this.startTrigger, this.onStartEvent),
        this.onStartEventOnElementsWithInteraction = function(t) {
            t.ignorePropagation = !0
        }
        ,
        this.$el.on(this.startTrigger, this.options.elementsWithInteraction, this.onStartEventOnElementsWithInteraction),
        this.onStopEvents = function(e) {
            t.handleStop(e)
        }
        ,
        this.$document.on(this.stopEvents, this.onStopEvents),
        this.onMoveEvents = function(e) {
            t.moveEvent = e
        }
        ,
        this.$document.on(this.moveTrigger, this.onMoveEvents)
    }
    ,
    i.prototype.unsubscribe = function() {
        this.$el.off(this.startTrigger, this.onStartEvent),
        this.$el.off(this.startTrigger, this.options.elementsWithInteraction, this.onStartEventOnElementsWithInteraction),
        this.$document.off(this.stopEvents, this.onStopEvents),
        this.$document.off(this.moveTrigger, this.onMoveEvents)
    }
    ,
    i.prototype.handleStart = function(t) {
        if (!t.ignorePropagation) {
            var e = this;
            if (this.isValidMoveEvent(t) && !this.disabled && (!this.options.ignoreRightClick || 3 !== t.which)) {
                this.isPointerEventCompatible() && t.preventManipulation && t.preventManipulation(),
                t = this.normalizeEvent(t),
                this.options.place && this.options.deferPlacement && (this.positionParent(),
                this.placeObject()),
                this.log({
                    type: "event",
                    event: t.type
                }),
                this.options.hardwareAccelerate && !this.hardwareAccelerated && (this.hardwareAccelerate(),
                this.hardwareAccelerated = !0);
                if (!1 === this.options.initiate.call(this, t, this))
                    return;
                clearTimeout(this.restTimeout),
                this.$el.addClass(this.options.activeClass),
                this.removeCSSEasing(),
                this.startX = this.ev.x = t.pep.x,
                this.startY = this.ev.y = t.pep.y,
                this.initialPosition = this.initialPosition || this.$el.position(),
                this.startEvent = this.moveEvent = t,
                this.active = !0,
                this.options.shouldPreventDefault && t.preventDefault(),
                this.options.allowDragEventPropagation || t.stopPropagation(),
                function t() {
                    e.active && (e.handleMove(),
                    e.requestAnimationFrame(t))
                }(),
                function t() {
                    e.options.easing && (e.easing && e.options.easing.call(e, null, e),
                    e.requestAnimationFrame(t))
                }()
            }
        }
    }
    ,
    i.prototype.handleMove = function() {
        if (void 0 !== this.moveEvent) {
            var n = this.normalizeEvent(this.moveEvent)
              , i = e.parseInt(n.pep.x / this.options.grid[0]) * this.options.grid[0]
              , o = e.parseInt(n.pep.y / this.options.grid[1]) * this.options.grid[1];
            this.addToLIFO({
                time: n.timeStamp,
                x: i,
                y: o
            });
            var r, s;
            if (t.inArray(n.type, this.startTriggerArray) > -1 ? (r = 0,
            s = 0) : (r = i - this.ev.x,
            s = o - this.ev.y),
            this.dx = r,
            this.dy = s,
            this.ev.x = i,
            this.ev.y = o,
            0 === r && 0 === s)
                return void this.log({
                    type: "event",
                    event: "** stopped **"
                });
            var a = Math.abs(this.startX - i)
              , u = Math.abs(this.startY - o);
            !this.started && (a > this.options.startThreshold[0] || u > this.options.startThreshold[1]) && (this.started = !0,
            this.$el.addClass("pep-start"),
            this.options.start.call(this, this.startEvent, this)),
            this.doMoveTo(r, s),
            this.options.droppable && this.calculateActiveDropRegions();
            if (!1 === this.options.drag.call(this, n, this))
                return void this.resetVelocityQueue();
            this.log({
                type: "event",
                event: n.type
            }),
            this.log({
                type: "event-coords",
                x: this.ev.x,
                y: this.ev.y
            }),
            this.log({
                type: "velocity"
            })
        }
    }
    ,
    i.prototype.doMoveTo = function(t, e) {
        var n, i, o = this.handleConstraint(t, e);
        "function" == typeof this.options.moveTo ? (n = t >= 0 ? "+=" + Math.abs(t / this.scale) * this.options.multiplier : "-=" + Math.abs(t / this.scale) * this.options.multiplier,
        i = e >= 0 ? "+=" + Math.abs(e / this.scale) * this.options.multiplier : "-=" + Math.abs(e / this.scale) * this.options.multiplier,
        this.options.constrainTo && (n = !1 !== o.x ? o.x : n,
        i = !1 !== o.y ? o.y : i),
        "x" === this.options.axis && (i = o.y),
        "y" === this.options.axis && (n = o.x),
        this.options.moveTo.call(this, n, i)) : this.shouldUseCSSTranslation() ? (t = t / this.scale * this.options.multiplier,
        e = e / this.scale * this.options.multiplier,
        this.options.constrainTo && (t = !1 === o.x ? t : 0,
        e = !1 === o.y ? e : 0),
        "x" === this.options.axis && (e = 0),
        "y" === this.options.axis && (t = 0),
        this.moveToUsingTransforms(t, e)) : (n = t >= 0 ? "+=" + Math.abs(t / this.scale) * this.options.multiplier : "-=" + Math.abs(t / this.scale) * this.options.multiplier,
        i = e >= 0 ? "+=" + Math.abs(e / this.scale) * this.options.multiplier : "-=" + Math.abs(e / this.scale) * this.options.multiplier,
        this.options.constrainTo && (n = !1 !== o.x ? o.x : n,
        i = !1 !== o.y ? o.y : i),
        "x" === this.options.axis && (i = o.y),
        "y" === this.options.axis && (n = o.x),
        this.moveTo(n, i))
    }
    ,
    i.prototype.handleStop = function(e) {
        this.active && (this.log({
            type: "event",
            event: e.type
        }),
        this.active = !1,
        this.easing = !0,
        this.$el.removeClass("pep-start").addClass("pep-ease"),
        this.options.droppable && this.calculateActiveDropRegions(),
        (this.started || !this.started && t.inArray("stop", this.options.callIfNotStarted) > -1) && this.options.stop.call(this, e, this),
        this.options.shouldEase ? this.ease(e, this.started) : this.removeActiveClass(),
        this.options.revert && ("stop" === this.options.revertAfter || !this.options.shouldEase) && this.options.revertIf && this.options.revertIf.call(this) && this.revert(),
        this.started = !1,
        this.resetVelocityQueue())
    }
    ,
    i.prototype.ease = function(e, n) {
        var i = (this.$el.position(),
        this.velocity())
          , o = (this.dt,
        i.x / this.scale * this.options.multiplier)
          , r = i.y / this.scale * this.options.multiplier
          , s = this.handleConstraint(o, r, !0);
        this.cssAnimationsSupported() && this.$el.css(this.getCSSEaseHash());
        var a = i.x > 0 ? "+=" + o : "-=" + Math.abs(o)
          , u = i.y > 0 ? "+=" + r : "-=" + Math.abs(r);
        this.options.constrainTo && (a = !1 !== s.x ? s.x : a,
        u = !1 !== s.y ? s.y : u),
        "x" === this.options.axis && (u = "+=0"),
        "y" === this.options.axis && (a = "+=0");
        var l = !this.cssAnimationsSupported() || this.options.forceNonCSS3Movement;
        "function" == typeof this.options.moveTo ? this.options.moveTo.call(this, a, u) : this.moveTo(a, u, l);
        var c = this;
        this.restTimeout = setTimeout(function() {
            c.options.droppable && c.calculateActiveDropRegions(),
            c.easing = !1,
            (n || !n && t.inArray("rest", c.options.callIfNotStarted) > -1) && c.options.rest.call(c, e, c),
            c.options.revert && "ease" === c.options.revertAfter && c.options.shouldEase && c.options.revertIf && c.options.revertIf.call(c) && c.revert(),
            c.removeActiveClass()
        }, this.options.cssEaseDuration)
    }
    ,
    i.prototype.normalizeEvent = function(t) {
        return t.pep = {},
        this.isTouch(t) ? (t.pep.x = t.originalEvent.touches[0].pageX,
        t.pep.y = t.originalEvent.touches[0].pageY,
        t.pep.type = t.type) : !this.isPointerEventCompatible() && this.isTouch(t) || (t.pageX ? (t.pep.x = t.pageX,
        t.pep.y = t.pageY) : (t.pep.x = t.originalEvent.pageX,
        t.pep.y = t.originalEvent.pageY),
        t.pep.type = t.type),
        t
    }
    ,
    i.prototype.resetVelocityQueue = function() {
        this.velocityQueue = new Array(5)
    }
    ,
    i.prototype.moveTo = function(t, e, n) {
        this.log({
            type: "delta",
            x: t,
            y: e
        }),
        n ? this.$el.animate({
            top: e,
            left: t
        }, 0, "easeOutQuad", {
            queue: !1
        }) : this.$el.stop(!0, !1).css({
            top: e,
            left: t
        })
    }
    ,
    i.prototype.moveToUsingTransforms = function(t, e) {
        var n = this.matrixToArray(this.matrixString());
        this.cssX || (this.cssX = this.xTranslation(n)),
        this.cssY || (this.cssY = this.yTranslation(n)),
        this.cssX = this.cssX + t,
        this.cssY = this.cssY + e,
        this.log({
            type: "delta",
            x: t,
            y: e
        }),
        n[4] = this.cssX,
        n[5] = this.cssY,
        this.translation = this.arrayToMatrix(n),
        this.transform(this.translation)
    }
    ,
    i.prototype.transform = function(t) {
        this.$el.css({
            "-webkit-transform": t,
            "-moz-transform": t,
            "-ms-transform": t,
            "-o-transform": t,
            transform: t
        })
    }
    ,
    i.prototype.xTranslation = function(t) {
        return t = t || this.matrixToArray(this.matrixString()),
        parseInt(t[4], 10)
    }
    ,
    i.prototype.yTranslation = function(t) {
        return t = t || this.matrixToArray(this.matrixString()),
        parseInt(t[5], 10)
    }
    ,
    i.prototype.matrixString = function() {
        var t = function(t) {
            return !(!t || "none" === t || t.indexOf("matrix") < 0)
        }
          , e = "matrix(1, 0, 0, 1, 0, 0)";
        return t(this.$el.css("-webkit-transform")) && (e = this.$el.css("-webkit-transform")),
        t(this.$el.css("-moz-transform")) && (e = this.$el.css("-moz-transform")),
        t(this.$el.css("-ms-transform")) && (e = this.$el.css("-ms-transform")),
        t(this.$el.css("-o-transform")) && (e = this.$el.css("-o-transform")),
        t(this.$el.css("transform")) && (e = this.$el.css("transform")),
        e
    }
    ,
    i.prototype.matrixToArray = function(t) {
        return t.split("(")[1].split(")")[0].split(",")
    }
    ,
    i.prototype.arrayToMatrix = function(t) {
        return "matrix(" + t.join(",") + ")"
    }
    ,
    i.prototype.addToLIFO = function(t) {
        var e = this.velocityQueue;
        e = e.slice(1, e.length),
        e.push(t),
        this.velocityQueue = e
    }
    ,
    i.prototype.velocity = function() {
        for (var t = 0, e = 0, n = 0; n < this.velocityQueue.length - 1; n++)
            this.velocityQueue[n] && (t += this.velocityQueue[n + 1].x - this.velocityQueue[n].x,
            e += this.velocityQueue[n + 1].y - this.velocityQueue[n].y,
            this.dt = this.velocityQueue[n + 1].time - this.velocityQueue[n].time);
        return {
            x: t * this.options.velocityMultiplier,
            y: e * this.options.velocityMultiplier
        }
    }
    ,
    i.prototype.revert = function() {
        this.shouldUseCSSTranslation() && this.moveToUsingTransforms(-this.xTranslation(), -this.yTranslation()),
        this.options.place && this.moveTo(this.initialPosition.left, this.initialPosition.top)
    }
    ,
    i.prototype.requestAnimationFrame = function(t) {
        return e.requestAnimationFrame && e.requestAnimationFrame(t) || e.webkitRequestAnimationFrame && e.webkitRequestAnimationFrame(t) || e.mozRequestAnimationFrame && e.mozRequestAnimationFrame(t) || e.oRequestAnimationFrame && e.mozRequestAnimationFrame(t) || e.msRequestAnimationFrame && e.msRequestAnimationFrame(t) || e.setTimeout(t, 1e3 / 60)
    }
    ,
    i.prototype.positionParent = function() {
        this.options.constrainTo && !this.parentPositioned && (this.parentPositioned = !0,
        "parent" === this.options.constrainTo ? this.$container.css({
            position: "relative"
        }) : "window" === this.options.constrainTo && "#document" !== this.$container.get(0).nodeName && "static" !== this.$container.css("position") && this.$container.css({
            position: "static"
        }))
    }
    ,
    i.prototype.placeObject = function() {
        this.objectPlaced || (this.objectPlaced = !0,
        this.offset = "parent" === this.options.constrainTo || this.hasNonBodyRelative() ? this.$el.position() : this.$el.offset(),
        parseInt(this.$el.css("left"), 10) && (this.offset.left = this.$el.css("left")),
        "number" == typeof this.options.startPos.left && (this.offset.left = this.options.startPos.left),
        parseInt(this.$el.css("top"), 10) && (this.offset.top = this.$el.css("top")),
        "number" == typeof this.options.startPos.top && (this.offset.top = this.options.startPos.top),
        this.options.removeMargins && this.$el.css({
            margin: 0
        }),
        this.$el.css({
            position: "absolute",
            top: this.offset.top,
            left: this.offset.left
        }))
    }
    ,
    i.prototype.hasNonBodyRelative = function() {
        return this.$el.parents().filter(function() {
            var e = t(this);
            return e.is("body") || "relative" === e.css("position")
        }).length > 1
    }
    ,
    i.prototype.setScale = function(t) {
        this.scale = t
    }
    ,
    i.prototype.setMultiplier = function(t) {
        this.options.multiplier = t
    }
    ,
    i.prototype.removeCSSEasing = function() {
        this.cssAnimationsSupported() && this.$el.css(this.getCSSEaseHash(!0))
    }
    ,
    i.prototype.disableSelect = function() {
        this.$el.css({
            "-webkit-touch-callout": "none",
            "-webkit-user-select": "none",
            "-khtml-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none"
        })
    }
    ,
    i.prototype.removeActiveClass = function() {
        this.$el.removeClass([this.options.activeClass, "pep-ease"].join(" "))
    }
    ,
    i.prototype.handleConstraint = function(e, n, i) {
        var o = this.$el.position();
        this.pos.x = o.left,
        this.pos.y = o.top;
        var r, s, a, u, l = {
            x: !1,
            y: !1
        };
        return this.log({
            type: "pos-coords",
            x: this.pos.x,
            y: this.pos.y
        }),
        t.isArray(this.options.constrainTo) ? (void 0 !== this.options.constrainTo[3] && void 0 !== this.options.constrainTo[1] && (s = !1 === this.options.constrainTo[1] ? 1 / 0 : this.options.constrainTo[1],
        a = !1 === this.options.constrainTo[3] ? -1 / 0 : this.options.constrainTo[3]),
        !1 !== this.options.constrainTo[0] && !1 !== this.options.constrainTo[2] && (r = !1 === this.options.constrainTo[2] ? 1 / 0 : this.options.constrainTo[2],
        u = !1 === this.options.constrainTo[0] ? -1 / 0 : this.options.constrainTo[0]),
        this.pos.x + e < a && (l.x = a),
        this.pos.y + n < u && (l.y = u)) : "string" == typeof this.options.constrainTo && (a = 0,
        u = 0,
        s = this.$container.width() - (this.options.useBoundingClientRect ? this.$el[0].getBoundingClientRect().width : this.$el.outerWidth()),
        r = this.$container.height() - (this.options.useBoundingClientRect ? this.$el[0].getBoundingClientRect().height : this.$el.outerHeight()),
        this.pos.x + e < 0 && (l.x = 0),
        this.pos.y + n < 0 && (l.y = 0)),
        this.pos.x + e > s && (l.x = s),
        this.pos.y + n > r && (l.y = r),
        this.shouldUseCSSTranslation() && i && (l.x === a && this.xTranslation() && (l.x = a - this.xTranslation()),
        l.x === s && this.xTranslation() && (l.x = s - this.xTranslation()),
        l.y === u && this.yTranslation() && (l.y = u - this.yTranslation()),
        l.y === r && this.yTranslation() && (l.y = r - this.yTranslation())),
        l
    }
    ,
    i.prototype.getCSSEaseHash = function(t) {
        void 0 === t && (t = !1);
        var e;
        if (t)
            e = "";
        else {
            if (this.CSSEaseHash)
                return this.CSSEaseHash;
            e = ["all", this.options.cssEaseDuration + "ms", this.options.cssEaseString].join(" ")
        }
        return {
            "-webkit-transition": e,
            "-moz-transition": e,
            "-ms-transition": e,
            "-o-transition": e,
            transition: e
        }
    }
    ,
    i.prototype.calculateActiveDropRegions = function() {
        var e = this;
        this.activeDropRegions.length = 0,
        t.each(t(this.options.droppable), function(n, i) {
            var o = t(i);
            e.isOverlapping(o, e.$el) ? (o.addClass(e.options.droppableActiveClass),
            e.activeDropRegions.push(o)) : o.removeClass(e.options.droppableActiveClass)
        })
    }
    ,
    i.prototype.isOverlapping = function(t, e) {
        if (this.options.overlapFunction)
            return this.options.overlapFunction(t, e);
        var n = t[0].getBoundingClientRect()
          , i = e[0].getBoundingClientRect();
        return !(n.right < i.left || n.left > i.right || n.bottom < i.top || n.top > i.bottom)
    }
    ,
    i.prototype.isTouch = function(t) {
        return t.type.search("touch") > -1
    }
    ,
    i.prototype.isPointerEventCompatible = function() {
        return "MSPointerEvent"in e
    }
    ,
    i.prototype.applyMSDefaults = function(t) {
        this.$el.css({
            "-ms-touch-action": "none",
            "touch-action": "none",
            "-ms-scroll-chaining": "none",
            "-ms-scroll-limit": "0 0 0 0"
        })
    }
    ,
    i.prototype.isValidMoveEvent = function(t) {
        return !this.isTouch(t) || this.isTouch(t) && t.originalEvent && t.originalEvent.touches && 1 === t.originalEvent.touches.length
    }
    ,
    i.prototype.shouldUseCSSTranslation = function() {
        if (this.options.forceNonCSS3Movement)
            return !1;
        if (void 0 !== this.useCSSTranslation)
            return this.useCSSTranslation;
        var t = !1;
        return t = !(!this.options.useCSSTranslation || "undefined" != typeof Modernizr && !Modernizr.csstransforms),
        this.useCSSTranslation = t,
        t
    }
    ,
    i.prototype.cssAnimationsSupported = function() {
        if (void 0 !== this.cssAnimationsSupport)
            return this.cssAnimationsSupport;
        if ("undefined" != typeof Modernizr && Modernizr.cssanimations)
            return this.cssAnimationsSupport = !0,
            !0;
        var t = !1
          , e = document.createElement("div")
          , n = "Webkit Moz O ms Khtml".split(" ")
          , i = "";
        if (e.style.animationName && (t = !0),
        !1 === t)
            for (var o = 0; o < n.length; o++)
                if (void 0 !== e.style[n[o] + "AnimationName"]) {
                    i = n[o],
                    i + "Animation",
                    "-" + i.toLowerCase() + "-",
                    t = !0;
                    break
                }
        return this.cssAnimationsSupport = t,
        t
    }
    ,
    i.prototype.hardwareAccelerate = function() {
        this.$el.css({
            "-webkit-perspective": 1e3,
            perspective: 1e3,
            "-webkit-backface-visibility": "hidden",
            "backface-visibility": "hidden"
        })
    }
    ,
    i.prototype.getMovementValues = function() {
        return {
            ev: this.ev,
            pos: this.pos,
            velocity: this.velocity()
        }
    }
    ,
    i.prototype.buildDebugDiv = function() {
        var e;
        0 === t("#pep-debug").length && (e = t("<div></div>"),
        e.attr("id", "pep-debug").append("<div style='font-weight:bold; background: red; color: white;'>DEBUG MODE</div>").append("<div id='pep-debug-event'>no event</div>").append("<div id='pep-debug-ev-coords'>event coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-pos-coords'>position coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-velocity'>velocity: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-delta'>&Delta; movement: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").css({
            position: "fixed",
            bottom: 5,
            right: 5,
            zIndex: 99999,
            textAlign: "right",
            fontFamily: "Arial, sans",
            fontSize: 10,
            border: "1px solid #DDD",
            padding: "3px",
            background: "white",
            color: "#333"
        }));
        var n = this;
        setTimeout(function() {
            n.debugElements = {
                $event: t("#pep-debug-event"),
                $velocityX: t("#pep-debug-velocity .pep-x"),
                $velocityY: t("#pep-debug-velocity .pep-y"),
                $dX: t("#pep-debug-delta .pep-x"),
                $dY: t("#pep-debug-delta .pep-y"),
                $evCoordsX: t("#pep-debug-ev-coords .pep-x"),
                $evCoordsY: t("#pep-debug-ev-coords .pep-y"),
                $posCoordsX: t("#pep-debug-pos-coords .pep-x"),
                $posCoordsY: t("#pep-debug-pos-coords .pep-y")
            }
        }, 0),
        t("body").append(e)
    }
    ,
    i.prototype.log = function(t) {
        if (this.options.debug)
            switch (t.type) {
            case "event":
                this.debugElements.$event.text(t.event);
                break;
            case "pos-coords":
                this.debugElements.$posCoordsX.text(t.x),
                this.debugElements.$posCoordsY.text(t.y);
                break;
            case "event-coords":
                this.debugElements.$evCoordsX.text(t.x),
                this.debugElements.$evCoordsY.text(t.y);
                break;
            case "delta":
                this.debugElements.$dX.text(t.x),
                this.debugElements.$dY.text(t.y);
                break;
            case "velocity":
                var e = this.velocity();
                this.debugElements.$velocityX.text(Math.round(e.x)),
                this.debugElements.$velocityY.text(Math.round(e.y))
            }
    }
    ,
    i.prototype.toggle = function(t) {
        this.disabled = void 0 === t ? !this.disabled : !t
    }
    ,
    t.extend(t.easing, {
        easeOutQuad: function(t, e, n, i, o) {
            return -i * (e /= o) * (e - 2) + n
        },
        easeOutCirc: function(t, e, n, i, o) {
            return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
        },
        easeOutExpo: function(t, e, n, i, o) {
            return e === o ? n + i : i * (1 - Math.pow(2, -10 * e / o)) + n
        }
    }),
    t.fn[o] = function(e) {
        return this.each(function() {
            if (!t.data(this, "plugin_" + o)) {
                var n = new i(this,e);
                t.data(this, "plugin_" + o, n),
                t.pep.peps.push(n)
            }
        })
    }
    ,
    t.pep = {},
    t.pep.peps = [],
    t.pep.toggleAll = function(e) {
        t.each(this.peps, function(t, n) {
            n.toggle(e)
        })
    }
    ,
    t.pep.unbind = function(e) {
        t.each(e, function(e, n) {
            n = t(n);
            var i = n.data("plugin_" + o);
            void 0 !== i && (i.toggle(!1),
            i.unsubscribe(),
            n.removeData("plugin_" + o))
        })
    }
}(jQuery, window);
