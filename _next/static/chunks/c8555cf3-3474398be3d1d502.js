! function() { try { var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a9812bea-2bfd-46b7-89f1-e0ab030f48a2", e._sentryDebugIdIdentifier = "sentry-dbid-a9812bea-2bfd-46b7-89f1-e0ab030f48a2") } catch (e) {} }();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9931], { 17638: function(e, t, n) { let i, o;
            n.d(t, { $zz: function() { return nY }, A07: function() { return oh }, Aqo: function() { return nb }, B0r: function() { return t$ }, CaP: function() { return o4 }, D2S: function() { return o3 }, DAM: function() { return tQ }, EKc: function() { return aC }, EMY: function() { return nA }, FRm: function() { return rM }, Fpb: function() { return rB }, Hl$: function() { return rL }, Hl7: function() { return av }, I$S: function() { return iN }, LA$: function() { return tG }, Lj: function() { return ny }, Lj1: function() { return ri }, MP3: function() { return rK }, NLW: function() { return rn }, PDy: function() { return tH }, Pl1: function() { return iU }, RER: function() { return aw }, S2P: function() { return tj }, SjD: function() { return o7 }, SsU: function() { return aK }, TOp: function() { return ru }, Tin: function() { return nS }, UF3: function() { return rA }, Uf8: function() { return n0 }, Uk0: function() { return t_ }, VJ7: function() { return i9 }, WCb: function() { return r7 }, WRY: function() { return tM }, XRi: function() { return n6 }, XiO: function() { return i0 }, Y9z: function() { return nJ }, YGS: function() { return tZ }, _Fs: function() { return tW }, _vi: function() { return nX }, dtM: function() { return tq }, eVA: function() { return no }, eq: function() { return t8 }, fmp: function() { return rk }, gA1: function() { return rh }, gGi: function() { return t4 }, gkL: function() { return i6 }, iUk: function() { return oe }, jNi: function() { return i7 }, kk0: function() { return aQ }, kol: function() { return n$ }, kxG: function() { return aI }, l9z: function() { return i4 }, lcn: function() { return nZ }, lfF: function() { return nI }, oMl: function() { return rS }, q3f: function() { return tz }, s0b: function() { return nF }, tAG: function() { return t2 }, u10: function() { return r3 }, uIf: function() { return oD }, wfV: function() { return nH } }); var r, a, s, u, c, l, d, m, p = n(80107),
                h = n(59917),
                g = n(96486),
                f = n(62397),
                w = n(58467),
                y = n(85231),
                k = n(13550),
                b = n(13012),
                A = n(12447),
                I = n(29887),
                S = n(77043),
                T = n(83613),
                P = n(3150),
                B = n(76623),
                v = n(56362),
                C = n(39386),
                x = n(48764).Buffer,
                O = Object.defineProperty,
                q = Object.defineProperties,
                K = Object.getOwnPropertyDescriptors,
                W = Object.getOwnPropertySymbols,
                M = Object.prototype.hasOwnProperty,
                L = Object.prototype.propertyIsEnumerable,
                R = (e, t, n) => t in e ? O(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n,
                _ = (e, t) => { for (var n in t || (t = {})) M.call(t, n) && R(e, n, t[n]); if (W)
                        for (var n of W(t)) L.call(t, n) && R(e, n, t[n]); return e },
                F = (e, t) => q(e, K(t)),
                E = (e, t) => { var n = {}; for (var i in e) M.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]); if (null != e && W)
                        for (var i of W(e)) 0 > t.indexOf(i) && L.call(e, i) && (n[i] = e[i]); return n },
                D = ((Z = D || {})[Z.Error = 0] = "Error", Z[Z.Warning = 1] = "Warning", Z[Z.Info = 2] = "Info", Z[Z.Debug = 3] = "Debug", Z),
                V = class { constructor(e) { this.logLevel = void 0 !== e.logLevel ? e.logLevel : 0, this.name = e.name }
                    set level(e) { this.logLevel = e }
                    get time() { return Date.now().toString() }
                    get moduleName() { return this.name }
                    isLogLevel(e) { return e <= this.logLevel }
                    error(...e) { return this.isLogLevel(0) && console.error(this.time, this.name, "sdk logger error", ...e), this }
                    logWithError(...e) { throw Error(e.map(e => "object" == typeof e ? JSON.stringify(e) : e).join(", ")) }
                    warning(...e) { return this.isLogLevel(1) && console.warn(this.time, this.name, "sdk logger warning", ...e), this }
                    info(...e) { return this.isLogLevel(2) && console.info(this.time, this.name, "sdk logger info", ...e), this }
                    debug(...e) { return this.isLogLevel(3) && console.debug(this.time, this.name, "sdk logger debug", ...e), this } },
                N = {},
                U = {};

            function X(e) { let t = (0, g.get)(N, e); if (!t) { let n = (0, g.get)(U, e);
                    t = new V({ name: e, logLevel: n }), (0, g.set)(N, e, t) } return t } var H = X("Nova Bot_accountInfo_util");
            async function G(e, t, n) { let { batchRequest: i, commitment: o = "confirmed", chunkCount: r = 100 } = _({ batchRequest: !1 }, n), a = nn(t, r), s = Array(a.length).fill([]); if (i) { let t = a.map(t => ({ methodName: "getMultipleAccounts", args: e._buildArgs([t.map(e => e.toBase58())], o, "base64") })),
                        n = nn(t, 10);
                    s = (await (await Promise.all(n.map(async t => await e._rpcBatchRequest(t)))).flat()).map(e => (e.error && H.logWithError(`failed to get info for multiple accounts, RPC_ERROR, ${e.error.message}`), e.result.value.map(e => { if (e) { let { data: t, executable: n, lamports: i, owner: o, rentEpoch: r } = e; return 2 !== t.length && "base64" !== t[1] && H.logWithError("info must be base64 encoded, RPC_ERROR"), { data: x.from(t[0], "base64"), executable: n, lamports: i, owner: new h.nh(o), rentEpoch: r } } return null }))) } else try { s = await Promise.all(a.map(t => e.getMultipleAccountsInfo(t, o))) } catch (e) { e instanceof Error && H.logWithError(`failed to get info for multiple accounts, RPC_ERROR, ${e.message}`) }
                return s.flat() }
            async function z(e, t, n) { let i = await G(e, t.map(e => e.pubkey), n); return t.map((e, t) => F(_({}, e), { accountInfo: i[t] })) } var j = (($ = j || {})[$.Uninitialized = 0] = "Uninitialized", $[$.Mint = 1] = "Mint", $[$.Account = 2] = "Account", $);
            async function Q({ connection: e, mints: t, config: n }) { var i, o, r; if (0 === t.length) return {}; let a = await z(e, t.map(e => ({ pubkey: t$(e) })), n),
                    s = {}; for (let e of a) { if (!e.accountInfo || e.accountInfo.data.length < f.Bl) { console.log("invalid mint account", e.pubkey.toBase58()); continue } let t = (0, f.rs)(e.pubkey, e.accountInfo, null == (i = e.accountInfo) ? void 0 : i.owner);
                    s[e.pubkey.toString()] = F(_({}, t), { programId: (null == (o = e.accountInfo) ? void 0 : o.owner) || w.H_, feeConfig: null != (r = (0, y.E0)(t)) ? r : void 0 }) } return s[h.nh.default.toBase58()] = s[tQ.toBase58()], s } var Z, $, Y, J, ee = "0123456789abcdef",
                et = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
                en = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
                ei = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: 9e15, crypto: !1 },
                eo = !0,
                er = "[DecimalError] ",
                ea = er + "Invalid argument: ",
                es = er + "Precision limit exceeded",
                eu = er + "crypto unavailable",
                ec = "[object Decimal]",
                el = Math.floor,
                ed = Math.pow,
                em = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
                ep = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
                eh = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
                eg = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                ef = et.length - 1,
                ew = en.length - 1,
                ey = { toStringTag: ec };

            function ek(e) { var t, n, i, o = e.length - 1,
                    r = "",
                    a = e[0]; if (o > 0) { for (r += a, t = 1; t < o; t++)(n = 7 - (i = e[t] + "").length) && (r += eO(n)), r += i;
                    (n = 7 - (i = (a = e[t]) + "").length) && (r += eO(n)) } else if (0 === a) return "0"; for (; a % 10 == 0;) a /= 10; return r + a }

            function eb(e, t, n) { if (e !== ~~e || e < t || e > n) throw Error(ea + e) }

            function eA(e, t, n, i) { var o, r, a, s; for (r = e[0]; r >= 10; r /= 10) --t; return --t < 0 ? (t += 7, o = 0) : (o = Math.ceil((t + 1) / 7), t %= 7), r = ed(10, 7 - t), s = e[o] % r | 0, null == i ? t < 3 ? (0 == t ? s = s / 100 | 0 : 1 == t && (s = s / 10 | 0), a = n < 4 && 99999 == s || n > 3 && 49999 == s || 5e4 == s || 0 == s) : a = (n < 4 && s + 1 == r || n > 3 && s + 1 == r / 2) && (e[o + 1] / r / 100 | 0) == ed(10, t - 2) - 1 || (s == r / 2 || 0 == s) && (e[o + 1] / r / 100 | 0) == 0 : t < 4 ? (0 == t ? s = s / 1e3 | 0 : 1 == t ? s = s / 100 | 0 : 2 == t && (s = s / 10 | 0), a = (i || n < 4) && 9999 == s || !i && n > 3 && 4999 == s) : a = ((i || n < 4) && s + 1 == r || !i && n > 3 && s + 1 == r / 2) && (e[o + 1] / r / 1e3 | 0) == ed(10, t - 3) - 1, a }

            function eI(e, t, n) { for (var i, o, r = [0], a = 0, s = e.length; a < s;) { for (o = r.length; o--;) r[o] *= t; for (r[0] += ee.indexOf(e.charAt(a++)), i = 0; i < r.length; i++) r[i] > n - 1 && (void 0 === r[i + 1] && (r[i + 1] = 0), r[i + 1] += r[i] / n | 0, r[i] %= n) } return r.reverse() }
            ey.absoluteValue = ey.abs = function() { var e = new this.constructor(this); return e.s < 0 && (e.s = 1), eT(e) }, ey.ceil = function() { return eT(new this.constructor(this), this.e + 1, 2) }, ey.clampedTo = ey.clamp = function(e, t) { var n = this.constructor; if (e = new n(e), t = new n(t), !e.s || !t.s) return new n(NaN); if (e.gt(t)) throw Error(ea + t); return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this) }, ey.comparedTo = ey.cmp = function(e) { var t, n, i, o, r = this.d,
                    a = (e = new this.constructor(e)).d,
                    s = this.s,
                    u = e.s; if (!r || !a) return s && u ? s !== u ? s : r === a ? 0 : !r ^ s < 0 ? 1 : -1 : NaN; if (!r[0] || !a[0]) return r[0] ? s : a[0] ? -u : 0; if (s !== u) return s; if (this.e !== e.e) return this.e > e.e ^ s < 0 ? 1 : -1; for (i = r.length, o = a.length, t = 0, n = i < o ? i : o; t < n; ++t)
                    if (r[t] !== a[t]) return r[t] > a[t] ^ s < 0 ? 1 : -1;
                return i === o ? 0 : i > o ^ s < 0 ? 1 : -1 }, ey.cosine = ey.cos = function() { var e, t, n = this,
                    i = n.constructor; return n.d ? n.d[0] ? (e = i.precision, t = i.rounding, i.precision = e + Math.max(n.e, n.sd()) + 7, i.rounding = 1, n = function(e, t) { var n, i, o; if (t.isZero()) return t;
                    (i = t.d.length) < 32 ? o = (1 / eE(4, n = Math.ceil(i / 3))).toString() : (n = 16, o = "2.3283064365386962890625e-10"), e.precision += n, t = eF(e, 1, t.times(o), new e(1)); for (var r = n; r--;) { var a = t.times(t);
                        t = a.times(a).minus(a).times(8).plus(1) } return e.precision -= n, t }(i, eD(i, n)), i.precision = e, i.rounding = t, eT(2 == J || 3 == J ? n.neg() : n, e, t, !0)) : new i(1) : new i(NaN) }, ey.cubeRoot = ey.cbrt = function() { var e, t, n, i, o, r, a, s, u, c, l = this.constructor; if (!this.isFinite() || this.isZero()) return new l(this); for (eo = !1, (r = this.s * ed(this.s * this, 1 / 3)) && Math.abs(r) != 1 / 0 ? i = new l(r.toString()) : (n = ek(this.d), (r = ((e = this.e) - n.length + 1) % 3) && (n += 1 == r || -2 == r ? "0" : "00"), r = ed(n, 1 / 3), e = el((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), n = r == 1 / 0 ? "5e" + e : (n = r.toExponential()).slice(0, n.indexOf("e") + 1) + e, (i = new l(n)).s = this.s), a = (e = l.precision) + 3;;)
                    if (c = (u = (s = i).times(s).times(s)).plus(this), i = eS(c.plus(this).times(s), c.plus(u), a + 2, 1), ek(s.d).slice(0, a) === (n = ek(i.d)).slice(0, a)) { if ("9999" != (n = n.slice(a - 3, a + 1)) && (o || "4999" != n)) {+n && (+n.slice(1) || "5" != n.charAt(0)) || (eT(i, e + 1, 1), t = !i.times(i).times(i).eq(this)); break } if (!o && (eT(s, e + 1, 0), s.times(s).times(s).eq(this))) { i = s; break }
                        a += 4, o = 1 }
                return eo = !0, eT(i, e, l.rounding, t) }, ey.decimalPlaces = ey.dp = function() { var e, t = this.d,
                    n = NaN; if (t) { if (n = ((e = t.length - 1) - el(this.e / 7)) * 7, e = t[e])
                        for (; e % 10 == 0; e /= 10) n--;
                    n < 0 && (n = 0) } return n }, ey.dividedBy = ey.div = function(e) { return eS(this, new this.constructor(e)) }, ey.dividedToIntegerBy = ey.divToInt = function(e) { var t = this.constructor; return eT(eS(this, new t(e), 0, 1, 1), t.precision, t.rounding) }, ey.equals = ey.eq = function(e) { return 0 === this.cmp(e) }, ey.floor = function() { return eT(new this.constructor(this), this.e + 1, 3) }, ey.greaterThan = ey.gt = function(e) { return this.cmp(e) > 0 }, ey.greaterThanOrEqualTo = ey.gte = function(e) { var t = this.cmp(e); return 1 == t || 0 === t }, ey.hyperbolicCosine = ey.cosh = function() { var e, t, n, i, o, r = this,
                    a = r.constructor,
                    s = new a(1); if (!r.isFinite()) return new a(r.s ? 1 / 0 : NaN); if (r.isZero()) return s;
                n = a.precision, i = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, (o = r.d.length) < 32 ? t = (1 / eE(4, e = Math.ceil(o / 3))).toString() : (e = 16, t = "2.3283064365386962890625e-10"), r = eF(a, 1, r.times(t), new a(1), !0); for (var u, c = e, l = new a(8); c--;) u = r.times(r), r = s.minus(u.times(l.minus(u.times(l)))); return eT(r, a.precision = n, a.rounding = i, !0) }, ey.hyperbolicSine = ey.sinh = function() { var e, t, n, i, o = this,
                    r = o.constructor; if (!o.isFinite() || o.isZero()) return new r(o); if (t = r.precision, n = r.rounding, r.precision = t + Math.max(o.e, o.sd()) + 4, r.rounding = 1, (i = o.d.length) < 3) o = eF(r, 2, o, o, !0);
                else { e = (e = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | e, o = o.times(1 / eE(5, e)), o = eF(r, 2, o, o, !0); for (var a, s = new r(5), u = new r(16), c = new r(20); e--;) a = o.times(o), o = o.times(s.plus(a.times(u.times(a).plus(c)))) } return r.precision = t, r.rounding = n, eT(o, t, n, !0) }, ey.hyperbolicTangent = ey.tanh = function() { var e, t, n = this.constructor; return this.isFinite() ? this.isZero() ? new n(this) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, eS(this.sinh(), this.cosh(), n.precision = e, n.rounding = t)) : new n(this.s) }, ey.inverseCosine = ey.acos = function() { var e, t = this,
                    n = t.constructor,
                    i = t.abs().cmp(1),
                    o = n.precision,
                    r = n.rounding; return -1 !== i ? 0 === i ? t.isNeg() ? eC(n, o, r) : new n(0) : new n(NaN) : t.isZero() ? eC(n, o + 4, r).times(.5) : (n.precision = o + 6, n.rounding = 1, t = t.asin(), e = eC(n, o + 4, r).times(.5), n.precision = o, n.rounding = r, e.minus(t)) }, ey.inverseHyperbolicCosine = ey.acosh = function() { var e, t, n = this,
                    i = n.constructor; return n.lte(1) ? new i(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = i.precision, t = i.rounding, i.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, i.rounding = 1, eo = !1, n = n.times(n).minus(1).sqrt().plus(n), eo = !0, i.precision = e, i.rounding = t, n.ln()) : new i(n) }, ey.inverseHyperbolicSine = ey.asinh = function() { var e, t, n = this,
                    i = n.constructor; return !n.isFinite() || n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, i.rounding = 1, eo = !1, n = n.times(n).plus(1).sqrt().plus(n), eo = !0, i.precision = e, i.rounding = t, n.ln()) }, ey.inverseHyperbolicTangent = ey.atanh = function() { var e, t, n, i, o = this,
                    r = o.constructor; return o.isFinite() ? o.e >= 0 ? new r(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN) : (e = r.precision, t = r.rounding, Math.max(i = o.sd(), e) < -(2 * o.e) - 1 ? eT(new r(o), e, t, !0) : (r.precision = n = i - o.e, o = eS(o.plus(1), new r(1).minus(o), n + e, 1), r.precision = e + 4, r.rounding = 1, o = o.ln(), r.precision = e, r.rounding = t, o.times(.5))) : new r(NaN) }, ey.inverseSine = ey.asin = function() { var e, t, n, i, o = this,
                    r = o.constructor; return o.isZero() ? new r(o) : (t = o.abs().cmp(1), n = r.precision, i = r.rounding, -1 !== t ? 0 === t ? ((e = eC(r, n + 4, i).times(.5)).s = o.s, e) : new r(NaN) : (r.precision = n + 6, r.rounding = 1, o = o.div(new r(1).minus(o.times(o)).sqrt().plus(1)).atan(), r.precision = n, r.rounding = i, o.times(2))) }, ey.inverseTangent = ey.atan = function() { var e, t, n, i, o, r, a, s, u, c = this,
                    l = c.constructor,
                    d = l.precision,
                    m = l.rounding; if (c.isFinite()) { if (c.isZero()) return new l(c); if (c.abs().eq(1) && d + 4 <= ew) return (a = eC(l, d + 4, m).times(.25)).s = c.s, a } else { if (!c.s) return new l(NaN); if (d + 4 <= ew) return (a = eC(l, d + 4, m).times(.5)).s = c.s, a } for (l.precision = s = d + 10, l.rounding = 1, e = n = Math.min(28, s / 7 + 2 | 0); e; --e) c = c.div(c.times(c).plus(1).sqrt().plus(1)); for (eo = !1, t = Math.ceil(s / 7), i = 1, u = c.times(c), a = new l(c), o = c; - 1 !== e;)
                    if (o = o.times(u), r = a.minus(o.div(i += 2)), o = o.times(u), void 0 !== (a = r.plus(o.div(i += 2))).d[t])
                        for (e = t; a.d[e] === r.d[e] && e--;);
                return n && (a = a.times(2 << n - 1)), eo = !0, eT(a, l.precision = d, l.rounding = m, !0) }, ey.isFinite = function() { return !!this.d }, ey.isInteger = ey.isInt = function() { return !!this.d && el(this.e / 7) > this.d.length - 2 }, ey.isNaN = function() { return !this.s }, ey.isNegative = ey.isNeg = function() { return this.s < 0 }, ey.isPositive = ey.isPos = function() { return this.s > 0 }, ey.isZero = function() { return !!this.d && 0 === this.d[0] }, ey.lessThan = ey.lt = function(e) { return 0 > this.cmp(e) }, ey.lessThanOrEqualTo = ey.lte = function(e) { return 1 > this.cmp(e) }, ey.logarithm = ey.log = function(e) { var t, n, i, o, r, a, s, u = this.constructor,
                    c = u.precision,
                    l = u.rounding; if (null == e) e = new u(10), t = !0;
                else { if (n = (e = new u(e)).d, e.s < 0 || !n || !n[0] || e.eq(1)) return new u(NaN);
                    t = e.eq(10) } if (n = this.d, this.s < 0 || !n || !n[0] || this.eq(1)) return new u(n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0); if (t) { if (n.length > 1) o = !0;
                    else { for (i = n[0]; i % 10 == 0;) i /= 10;
                        o = 1 !== i } } if (eo = !1, eA((s = eS(eL(this, a = c + 5), t ? ev(u, a + 10) : eL(e, a), a, 1)).d, i = c, l))
                    do
                        if (a += 10, s = eS(eL(this, a), t ? ev(u, a + 10) : eL(e, a), a, 1), !o) {+ek(s.d).slice(i + 1, i + 15) + 1 == 1e14 && (s = eT(s, c + 1, 0)); break }
                while (eA(s.d, i += 10, l)); return eo = !0, eT(s, c, l) }, ey.minus = ey.sub = function(e) { var t, n, i, o, r, a, s, u, c, l, d, m, p = this.constructor; if (e = new p(e), !this.d || !e.d) return this.s && e.s ? this.d ? e.s = -e.s : e = new p(e.d || this.s !== e.s ? this : NaN) : e = new p(NaN), e; if (this.s != e.s) return e.s = -e.s, this.plus(e); if (c = this.d, m = e.d, s = p.precision, u = p.rounding, !c[0] || !m[0]) { if (m[0]) e.s = -e.s;
                    else { if (!c[0]) return new p(3 === u ? -0 : 0);
                        e = new p(this) } return eo ? eT(e, s, u) : e } if (n = el(e.e / 7), l = el(this.e / 7), c = c.slice(), r = l - n) { for ((d = r < 0) ? (t = c, r = -r, a = m.length) : (t = m, n = l, a = c.length), i = Math.max(Math.ceil(s / 7), a) + 2, r > i && (r = i, t.length = 1), t.reverse(), i = r; i--;) t.push(0);
                    t.reverse() } else { for ((d = (i = c.length) < (a = m.length)) && (a = i), i = 0; i < a; i++)
                        if (c[i] != m[i]) { d = c[i] < m[i]; break }
                    r = 0 } for (d && (t = c, c = m, m = t, e.s = -e.s), a = c.length, i = m.length - a; i > 0; --i) c[a++] = 0; for (i = m.length; i > r;) { if (c[--i] < m[i]) { for (o = i; o && 0 === c[--o];) c[o] = 1e7 - 1;--c[o], c[i] += 1e7 }
                    c[i] -= m[i] } for (; 0 === c[--a];) c.pop(); for (; 0 === c[0]; c.shift()) --n; return c[0] ? (e.d = c, e.e = eB(c, n), eo ? eT(e, s, u) : e) : new p(3 === u ? -0 : 0) }, ey.modulo = ey.mod = function(e) { var t, n = this.constructor; return e = new n(e), this.d && e.s && (!e.d || e.d[0]) ? e.d && (!this.d || this.d[0]) ? (eo = !1, 9 == n.modulo ? (t = eS(this, e.abs(), 0, 3, 1), t.s *= e.s) : t = eS(this, e, 0, n.modulo, 1), t = t.times(e), eo = !0, this.minus(t)) : eT(new n(this), n.precision, n.rounding) : new n(NaN) }, ey.naturalExponential = ey.exp = function() { return eM(this) }, ey.naturalLogarithm = ey.ln = function() { return eL(this) }, ey.negated = ey.neg = function() { var e = new this.constructor(this); return e.s = -e.s, eT(e) }, ey.plus = ey.add = function(e) { var t, n, i, o, r, a, s, u, c, l, d = this.constructor; if (e = new d(e), !this.d || !e.d) return this.s && e.s ? this.d || (e = new d(e.d || this.s === e.s ? this : NaN)) : e = new d(NaN), e; if (this.s != e.s) return e.s = -e.s, this.minus(e); if (c = this.d, l = e.d, s = d.precision, u = d.rounding, !c[0] || !l[0]) return l[0] || (e = new d(this)), eo ? eT(e, s, u) : e; if (r = el(this.e / 7), i = el(e.e / 7), c = c.slice(), o = r - i) { for (o < 0 ? (n = c, o = -o, a = l.length) : (n = l, i = r, a = c.length), o > (a = (r = Math.ceil(s / 7)) > a ? r + 1 : a + 1) && (o = a, n.length = 1), n.reverse(); o--;) n.push(0);
                    n.reverse() } for ((a = c.length) - (o = l.length) < 0 && (o = a, n = l, l = c, c = n), t = 0; o;) t = (c[--o] = c[o] + l[o] + t) / 1e7 | 0, c[o] %= 1e7; for (t && (c.unshift(t), ++i), a = c.length; 0 == c[--a];) c.pop(); return e.d = c, e.e = eB(c, i), eo ? eT(e, s, u) : e }, ey.precision = ey.sd = function(e) { var t; if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(ea + e); return this.d ? (t = ex(this.d), e && this.e + 1 > t && (t = this.e + 1)) : t = NaN, t }, ey.round = function() { var e = this.constructor; return eT(new e(this), this.e + 1, e.rounding) }, ey.sine = ey.sin = function() { var e, t, n = this,
                    i = n.constructor; return n.isFinite() ? n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + Math.max(n.e, n.sd()) + 7, i.rounding = 1, n = function(e, t) { var n, i = t.d.length; if (i < 3) return t.isZero() ? t : eF(e, 2, t, t);
                    n = (n = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | n, t = t.times(1 / eE(5, n)), t = eF(e, 2, t, t); for (var o, r = new e(5), a = new e(16), s = new e(20); n--;) o = t.times(t), t = t.times(r.plus(o.times(a.times(o).minus(s)))); return t }(i, eD(i, n)), i.precision = e, i.rounding = t, eT(J > 2 ? n.neg() : n, e, t, !0)) : new i(NaN) }, ey.squareRoot = ey.sqrt = function() { var e, t, n, i, o, r, a = this.d,
                    s = this.e,
                    u = this.s,
                    c = this.constructor; if (1 !== u || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? this : 1 / 0); for (eo = !1, 0 == (u = Math.sqrt(+this)) || u == 1 / 0 ? (((t = ek(a)).length + s) % 2 == 0 && (t += "0"), u = Math.sqrt(t), s = el((s + 1) / 2) - (s < 0 || s % 2), t = u == 1 / 0 ? "5e" + s : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + s, i = new c(t)) : i = new c(u.toString()), n = (s = c.precision) + 3;;)
                    if (i = (r = i).plus(eS(this, r, n + 2, 1)).times(.5), ek(r.d).slice(0, n) === (t = ek(i.d)).slice(0, n)) { if ("9999" != (t = t.slice(n - 3, n + 1)) && (o || "4999" != t)) {+t && (+t.slice(1) || "5" != t.charAt(0)) || (eT(i, s + 1, 1), e = !i.times(i).eq(this)); break } if (!o && (eT(r, s + 1, 0), r.times(r).eq(this))) { i = r; break }
                        n += 4, o = 1 }
                return eo = !0, eT(i, s, c.rounding, e) }, ey.tangent = ey.tan = function() { var e, t, n = this,
                    i = n.constructor; return n.isFinite() ? n.isZero() ? new i(n) : (e = i.precision, t = i.rounding, i.precision = e + 10, i.rounding = 1, (n = n.sin()).s = 1, n = eS(n, new i(1).minus(n.times(n)).sqrt(), e + 10, 0), i.precision = e, i.rounding = t, eT(2 == J || 4 == J ? n.neg() : n, e, t, !0)) : new i(NaN) }, ey.times = ey.mul = function(e) { var t, n, i, o, r, a, s, u, c, l = this.constructor,
                    d = this.d,
                    m = (e = new l(e)).d; if (e.s *= this.s, !d || !d[0] || !m || !m[0]) return new l(e.s && (!d || d[0] || m) && (!m || m[0] || d) ? d && m ? 0 * e.s : e.s / 0 : NaN); for (n = el(this.e / 7) + el(e.e / 7), (u = d.length) < (c = m.length) && (r = d, d = m, m = r, a = u, u = c, c = a), r = [], i = a = u + c; i--;) r.push(0); for (i = c; --i >= 0;) { for (t = 0, o = u + i; o > i;) s = r[o] + m[i] * d[o - i - 1] + t, r[o--] = s % 1e7 | 0, t = s / 1e7 | 0;
                    r[o] = (r[o] + t) % 1e7 | 0 } for (; !r[--a];) r.pop(); return t ? ++n : r.shift(), e.d = r, e.e = eB(r, n), eo ? eT(e, l.precision, l.rounding) : e }, ey.toBinary = function(e, t) { return eV(this, 2, e, t) }, ey.toDecimalPlaces = ey.toDP = function(e, t) { var n = this,
                    i = n.constructor; return n = new i(n), void 0 === e ? n : (eb(e, 0, 1e9), void 0 === t ? t = i.rounding : eb(t, 0, 8), eT(n, e + n.e + 1, t)) }, ey.toExponential = function(e, t) { var n, i = this,
                    o = i.constructor; return void 0 === e ? n = eP(i, !0) : (eb(e, 0, 1e9), void 0 === t ? t = o.rounding : eb(t, 0, 8), n = eP(i = eT(new o(i), e + 1, t), !0, e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n }, ey.toFixed = function(e, t) { var n, i, o = this.constructor; return void 0 === e ? n = eP(this) : (eb(e, 0, 1e9), void 0 === t ? t = o.rounding : eb(t, 0, 8), n = eP(i = eT(new o(this), e + this.e + 1, t), !1, e + i.e + 1)), this.isNeg() && !this.isZero() ? "-" + n : n }, ey.toFraction = function(e) { var t, n, i, o, r, a, s, u, c, l, d, m, p = this.d,
                    h = this.constructor; if (!p) return new h(this); if (c = n = new h(1), i = u = new h(0), a = (r = (t = new h(i)).e = ex(p) - this.e - 1) % 7, t.d[0] = ed(10, a < 0 ? 7 + a : a), null == e) e = r > 0 ? t : c;
                else { if (!(s = new h(e)).isInt() || s.lt(c)) throw Error(ea + s);
                    e = s.gt(t) ? r > 0 ? t : c : s } for (eo = !1, s = new h(ek(p)), l = h.precision, h.precision = r = 14 * p.length; d = eS(s, t, 0, 1, 1), 1 != (o = n.plus(d.times(i))).cmp(e);) n = i, i = o, o = c, c = u.plus(d.times(o)), u = o, o = t, t = s.minus(d.times(o)), s = o; return o = eS(e.minus(n), i, 0, 1, 1), u = u.plus(o.times(c)), n = n.plus(o.times(i)), u.s = c.s = this.s, m = 1 > eS(c, i, r, 1).minus(this).abs().cmp(eS(u, n, r, 1).minus(this).abs()) ? [c, i] : [u, n], h.precision = l, eo = !0, m }, ey.toHexadecimal = ey.toHex = function(e, t) { return eV(this, 16, e, t) }, ey.toNearest = function(e, t) { var n = this,
                    i = n.constructor; if (n = new i(n), null == e) { if (!n.d) return n;
                    e = new i(1), t = i.rounding } else { if (e = new i(e), void 0 === t ? t = i.rounding : eb(t, 0, 8), !n.d) return e.s ? n : e; if (!e.d) return e.s && (e.s = n.s), e } return e.d[0] ? (eo = !1, n = eS(n, e, 0, t, 1).times(e), eo = !0, eT(n)) : (e.s = n.s, n = e), n }, ey.toNumber = function() { return +this }, ey.toOctal = function(e, t) { return eV(this, 8, e, t) }, ey.toPower = ey.pow = function(e) { var t, n, i, o, r, a, s = this,
                    u = s.constructor,
                    c = +(e = new u(e)); if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new u(ed(+s, c)); if ((s = new u(s)).eq(1)) return s; if (i = u.precision, r = u.rounding, e.eq(1)) return eT(s, i, r); if ((t = el(e.e / 7)) >= e.d.length - 1 && (n = c < 0 ? -c : c) <= 9007199254740991) return o = eq(u, s, n, i), e.s < 0 ? new u(1).div(o) : eT(o, i, r); if ((a = s.s) < 0) { if (t < e.d.length - 1) return new u(NaN); if ((1 & e.d[t]) == 0 && (a = 1), 0 == s.e && 1 == s.d[0] && 1 == s.d.length) return s.s = a, s } return (t = 0 != (n = ed(+s, c)) && isFinite(n) ? new u(n + "").e : el(c * (Math.log("0." + ek(s.d)) / Math.LN10 + s.e + 1))) > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? a / 0 : 0) : (eo = !1, u.rounding = s.s = 1, n = Math.min(12, (t + "").length), (o = eM(e.times(eL(s, i + n)), i)).d && eA((o = eT(o, i + 5, 1)).d, i, r) && (t = i + 10, +ek((o = eT(eM(e.times(eL(s, t + n)), t), t + 5, 1)).d).slice(i + 1, i + 15) + 1 == 1e14 && (o = eT(o, i + 1, 0))), o.s = a, eo = !0, u.rounding = r, eT(o, i, r)) }, ey.toPrecision = function(e, t) { var n, i = this,
                    o = i.constructor; return void 0 === e ? n = eP(i, i.e <= o.toExpNeg || i.e >= o.toExpPos) : (eb(e, 1, 1e9), void 0 === t ? t = o.rounding : eb(t, 0, 8), n = eP(i = eT(new o(i), e, t), e <= i.e || i.e <= o.toExpNeg, e)), i.isNeg() && !i.isZero() ? "-" + n : n }, ey.toSignificantDigits = ey.toSD = function(e, t) { var n = this.constructor; return void 0 === e ? (e = n.precision, t = n.rounding) : (eb(e, 1, 1e9), void 0 === t ? t = n.rounding : eb(t, 0, 8)), eT(new n(this), e, t) }, ey.toString = function() { var e = this.constructor,
                    t = eP(this, this.e <= e.toExpNeg || this.e >= e.toExpPos); return this.isNeg() && !this.isZero() ? "-" + t : t }, ey.truncated = ey.trunc = function() { return eT(new this.constructor(this), this.e + 1, 1) }, ey.valueOf = ey.toJSON = function() { var e = this.constructor,
                    t = eP(this, this.e <= e.toExpNeg || this.e >= e.toExpPos); return this.isNeg() ? "-" + t : t }; var eS = function() {
                function e(e, t, n) { var i, o = 0,
                        r = e.length; for (e = e.slice(); r--;) i = e[r] * t + o, e[r] = i % n | 0, o = i / n | 0; return o && e.unshift(o), e }

                function t(e, t, n, i) { var o, r; if (n != i) r = n > i ? 1 : -1;
                    else
                        for (o = r = 0; o < n; o++)
                            if (e[o] != t[o]) { r = e[o] > t[o] ? 1 : -1; break } return r }

                function n(e, t, n, i) { for (var o = 0; n--;) e[n] -= o, o = e[n] < t[n] ? 1 : 0, e[n] = o * i + e[n] - t[n]; for (; !e[0] && e.length > 1;) e.shift() } return function(i, o, r, a, s, u) { var c, l, d, m, p, h, g, f, w, y, k, b, A, I, S, T, P, B, v, C, x = i.constructor,
                        O = i.s == o.s ? 1 : -1,
                        q = i.d,
                        K = o.d; if (!q || !q[0] || !K || !K[0]) return new x(i.s && o.s && (q ? !K || q[0] != K[0] : K) ? q && 0 == q[0] || !K ? 0 * O : O / 0 : NaN); for (u ? (p = 1, l = i.e - o.e) : (u = 1e7, p = 7, l = el(i.e / p) - el(o.e / p)), v = K.length, P = q.length, y = (w = new x(O)).d = [], d = 0; K[d] == (q[d] || 0); d++); if (K[d] > (q[d] || 0) && l--, null == r ? (I = r = x.precision, a = x.rounding) : I = s ? r + (i.e - o.e) + 1 : r, I < 0) y.push(1), h = !0;
                    else { if (I = I / p + 2 | 0, d = 0, 1 == v) { for (m = 0, K = K[0], I++;
                                (d < P || m) && I--; d++) S = m * u + (q[d] || 0), y[d] = S / K | 0, m = S % K | 0;
                            h = m || d < P } else { for ((m = u / (K[0] + 1) | 0) > 1 && (K = e(K, m, u), q = e(q, m, u), v = K.length, P = q.length), T = v, b = (k = q.slice(0, v)).length; b < v;) k[b++] = 0;
                            (C = K.slice()).unshift(0), B = K[0], K[1] >= u / 2 && ++B;
                            do m = 0, (c = t(K, k, v, b)) < 0 ? (A = k[0], v != b && (A = A * u + (k[1] || 0)), (m = A / B | 0) > 1 ? (m >= u && (m = u - 1), f = (g = e(K, m, u)).length, b = k.length, 1 == (c = t(g, k, f, b)) && (m--, n(g, v < f ? C : K, f, u))) : (0 == m && (c = m = 1), g = K.slice()), (f = g.length) < b && g.unshift(0), n(k, g, b, u), -1 == c && (b = k.length, (c = t(K, k, v, b)) < 1 && (m++, n(k, v < b ? C : K, b, u))), b = k.length) : 0 === c && (m++, k = [0]), y[d++] = m, c && k[0] ? k[b++] = q[T] || 0 : (k = [q[T]], b = 1); while ((T++ < P || void 0 !== k[0]) && I--);
                            h = void 0 !== k[0] }
                        y[0] || y.shift() } if (1 == p) w.e = l, Y = h;
                    else { for (d = 1, m = y[0]; m >= 10; m /= 10) d++;
                        w.e = d + l * p - 1, eT(w, s ? r + w.e + 1 : r, a, h) } return w } }();

            function eT(e, t, n, i) { var o, r, a, s, u, c, l, d, m, p = e.constructor;
                e: if (null != t) { if (!(d = e.d)) return e; for (o = 1, s = d[0]; s >= 10; s /= 10) o++; if ((r = t - o) < 0) r += 7, a = t, u = (l = d[m = 0]) / ed(10, o - a - 1) % 10 | 0;
                    else if (m = Math.ceil((r + 1) / 7), s = d.length, m >= s) { if (i) { for (; s++ <= m;) d.push(0);
                            l = u = 0, o = 1, r %= 7, a = r - 7 + 1 } else break e } else { for (l = s = d[m], o = 1; s >= 10; s /= 10) o++;
                        r %= 7, u = (a = r - 7 + o) < 0 ? 0 : l / ed(10, o - a - 1) % 10 | 0 } if (i = i || t < 0 || void 0 !== d[m + 1] || (a < 0 ? l : l % ed(10, o - a - 1)), c = n < 4 ? (u || i) && (0 == n || n == (e.s < 0 ? 3 : 2)) : u > 5 || 5 == u && (4 == n || i || 6 == n && (r > 0 ? a > 0 ? l / ed(10, o - a) : 0 : d[m - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, c ? (t -= e.e + 1, d[0] = ed(10, (7 - t % 7) % 7), e.e = -t || 0) : d[0] = e.e = 0, e; if (0 == r ? (d.length = m, s = 1, m--) : (d.length = m + 1, s = ed(10, 7 - r), d[m] = a > 0 ? (l / ed(10, o - a) % ed(10, a) | 0) * s : 0), c)
                        for (;;)
                            if (0 == m) { for (r = 1, a = d[0]; a >= 10; a /= 10) r++; for (a = d[0] += s, s = 1; a >= 10; a /= 10) s++;
                                r != s && (e.e++, 1e7 == d[0] && (d[0] = 1)); break } else { if (d[m] += s, 1e7 != d[m]) break;
                                d[m--] = 0, s = 1 }
                    for (r = d.length; 0 === d[--r];) d.pop() } return eo && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e }

            function eP(e, t, n) { if (!e.isFinite()) return eR(e); var i, o = e.e,
                    r = ek(e.d),
                    a = r.length; return t ? (n && (i = n - a) > 0 ? r = r.charAt(0) + "." + r.slice(1) + eO(i) : a > 1 && (r = r.charAt(0) + "." + r.slice(1)), r = r + (e.e < 0 ? "e" : "e+") + e.e) : o < 0 ? (r = "0." + eO(-o - 1) + r, n && (i = n - a) > 0 && (r += eO(i))) : o >= a ? (r += eO(o + 1 - a), n && (i = n - o - 1) > 0 && (r = r + "." + eO(i))) : ((i = o + 1) < a && (r = r.slice(0, i) + "." + r.slice(i)), n && (i = n - a) > 0 && (o + 1 === a && (r += "."), r += eO(i))), r }

            function eB(e, t) { var n = e[0]; for (t *= 7; n >= 10; n /= 10) t++; return t }

            function ev(e, t, n) { if (t > ef) throw eo = !0, n && (e.precision = n), Error(es); return eT(new e(et), t, 1, !0) }

            function eC(e, t, n) { if (t > ew) throw Error(es); return eT(new e(en), t, n, !0) }

            function ex(e) { var t = e.length - 1,
                    n = 7 * t + 1; if (t = e[t]) { for (; t % 10 == 0; t /= 10) n--; for (t = e[0]; t >= 10; t /= 10) n++ } return n }

            function eO(e) { for (var t = ""; e--;) t += "0"; return t }

            function eq(e, t, n, i) { var o, r = new e(1),
                    a = Math.ceil(i / 7 + 4); for (eo = !1;;) { if (n % 2 && eN((r = r.times(t)).d, a) && (o = !0), 0 === (n = el(n / 2))) { n = r.d.length - 1, o && 0 === r.d[n] && ++r.d[n]; break }
                    eN((t = t.times(t)).d, a) } return eo = !0, r }

            function eK(e) { return 1 & e.d[e.d.length - 1] }

            function eW(e, t, n) { for (var i, o = new e(t[0]), r = 0; ++r < t.length;)
                    if ((i = new e(t[r])).s) o[n](i) && (o = i);
                    else { o = i; break }
                return o }

            function eM(e, t) { var n, i, o, r, a, s, u, c = 0,
                    l = 0,
                    d = 0,
                    m = e.constructor,
                    p = m.rounding,
                    h = m.precision; if (!e.d || !e.d[0] || e.e > 17) return new m(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0); for (null == t ? (eo = !1, u = h) : u = t, s = new m(.03125); e.e > -2;) e = e.times(s), d += 5; for (u += i = Math.log(ed(2, d)) / Math.LN10 * 2 + 5 | 0, n = r = a = new m(1), m.precision = u;;) { if (r = eT(r.times(e), u, 1), n = n.times(++l), ek((s = a.plus(eS(r, n, u, 1))).d).slice(0, u) === ek(a.d).slice(0, u)) { for (o = d; o--;) a = eT(a.times(a), u, 1); if (null != t) return m.precision = h, a; if (!(c < 3 && eA(a.d, u - i, p, c))) return eT(a, m.precision = h, p, eo = !0);
                        m.precision = u += 10, n = r = s = new m(1), l = 0, c++ }
                    a = s } }

            function eL(e, t) { var n, i, o, r, a, s, u, c, l, d, m, p = 1,
                    h = e,
                    g = h.d,
                    f = h.constructor,
                    w = f.rounding,
                    y = f.precision; if (h.s < 0 || !g || !g[0] || !h.e && 1 == g[0] && 1 == g.length) return new f(g && !g[0] ? -1 / 0 : 1 != h.s ? NaN : g ? 0 : h); if (null == t ? (eo = !1, l = y) : l = t, f.precision = l += 10, i = (n = ek(g)).charAt(0), !(15e14 > Math.abs(r = h.e))) return c = ev(f, l + 2, y).times(r + ""), h = eL(new f(i + "." + n.slice(1)), l - 10).plus(c), f.precision = y, null == t ? eT(h, y, w, eo = !0) : h; for (; i < 7 && 1 != i || 1 == i && n.charAt(1) > 3;) i = (n = ek((h = h.times(e)).d)).charAt(0), p++; for (r = h.e, i > 1 ? (h = new f("0." + n), r++) : h = new f(i + "." + n.slice(1)), d = h, u = a = h = eS(h.minus(1), h.plus(1), l, 1), m = eT(h.times(h), l, 1), o = 3;;) { if (a = eT(a.times(m), l, 1), ek((c = u.plus(eS(a, new f(o), l, 1))).d).slice(0, l) === ek(u.d).slice(0, l)) { if (u = u.times(2), 0 !== r && (u = u.plus(ev(f, l + 2, y).times(r + ""))), u = eS(u, new f(p), l, 1), null != t) return f.precision = y, u; if (!eA(u.d, l - 10, w, s)) return eT(u, f.precision = y, w, eo = !0);
                        f.precision = l += 10, c = a = h = eS(d.minus(1), d.plus(1), l, 1), m = eT(h.times(h), l, 1), o = s = 1 }
                    u = c, o += 2 } }

            function eR(e) { return String(e.s * e.s / 0) }

            function e_(e, t) { var n, i, o; for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (i = t.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +t.slice(i + 1), t = t.substring(0, i)) : n < 0 && (n = t.length), i = 0; 48 === t.charCodeAt(i); i++); for (o = t.length; 48 === t.charCodeAt(o - 1); --o); if (t = t.slice(i, o)) { if (o -= i, e.e = n = n - i - 1, e.d = [], i = (n + 1) % 7, n < 0 && (i += 7), i < o) { for (i && e.d.push(+t.slice(0, i)), o -= 7; i < o;) e.d.push(+t.slice(i, i += 7));
                        i = 7 - (t = t.slice(i)).length } else i -= o; for (; i--;) t += "0";
                    e.d.push(+t), eo && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0])) } else e.e = 0, e.d = [0]; return e }

            function eF(e, t, n, i, o) { var r, a, s, u, c = e.precision,
                    l = Math.ceil(c / 7); for (eo = !1, u = n.times(n), s = new e(i);;) { if (a = eS(s.times(u), new e(t++ * t++), c, 1), s = o ? i.plus(a) : i.minus(a), i = eS(a.times(u), new e(t++ * t++), c, 1), void 0 !== (a = s.plus(i)).d[l]) { for (r = l; a.d[r] === s.d[r] && r--;); if (-1 == r) break }
                    r = s, s = i, i = a, a = r } return eo = !0, a.d.length = l + 1, a }

            function eE(e, t) { for (var n = e; --t;) n *= e; return n }

            function eD(e, t) { var n, i = t.s < 0,
                    o = eC(e, e.precision, 1),
                    r = o.times(.5); if ((t = t.abs()).lte(r)) return J = i ? 4 : 1, t; if ((n = t.divToInt(o)).isZero()) J = i ? 3 : 2;
                else { if ((t = t.minus(n.times(o))).lte(r)) return J = eK(n) ? i ? 2 : 3 : i ? 4 : 1, t;
                    J = eK(n) ? i ? 1 : 4 : i ? 3 : 2 } return t.minus(o).abs() }

            function eV(e, t, n, i) { var o, r, a, s, u, c, l, d, m, p = e.constructor,
                    h = void 0 !== n; if (h ? (eb(n, 1, 1e9), void 0 === i ? i = p.rounding : eb(i, 0, 8)) : (n = p.precision, i = p.rounding), e.isFinite()) { for (a = (l = eP(e)).indexOf("."), h ? (o = 2, 16 == t ? n = 4 * n - 3 : 8 == t && (n = 3 * n - 2)) : o = t, a >= 0 && (l = l.replace(".", ""), (m = new p(1)).e = l.length - a, m.d = eI(eP(m), 10, o), m.e = m.d.length), r = u = (d = eI(l, 10, o)).length; 0 == d[--u];) d.pop(); if (d[0]) { if (a < 0 ? r-- : ((e = new p(e)).d = d, e.e = r, d = (e = eS(e, m, n, i, 0, o)).d, r = e.e, c = Y), a = d[n], s = o / 2, c = c || void 0 !== d[n + 1], c = i < 4 ? (void 0 !== a || c) && (0 === i || i === (e.s < 0 ? 3 : 2)) : a > s || a === s && (4 === i || c || 6 === i && 1 & d[n - 1] || i === (e.s < 0 ? 8 : 7)), d.length = n, c)
                            for (; ++d[--n] > o - 1;) d[n] = 0, n || (++r, d.unshift(1)); for (u = d.length; !d[u - 1]; --u); for (a = 0, l = ""; a < u; a++) l += ee.charAt(d[a]); if (h) { if (u > 1) { if (16 == t || 8 == t) { for (a = 16 == t ? 4 : 3, --u; u % a; u++) l += "0"; for (u = (d = eI(l, o, t)).length; !d[u - 1]; --u); for (a = 1, l = "1."; a < u; a++) l += ee.charAt(d[a]) } else l = l.charAt(0) + "." + l.slice(1) }
                            l = l + (r < 0 ? "p" : "p+") + r } else if (r < 0) { for (; ++r;) l = "0" + l;
                            l = "0." + l } else if (++r > u)
                            for (r -= u; r--;) l += "0";
                        else r < u && (l = l.slice(0, r) + "." + l.slice(r)) } else l = h ? "0p+0" : "0";
                    l = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + l } else l = eR(e); return e.s < 0 ? "-" + l : l }

            function eN(e, t) { if (e.length > t) return e.length = t, !0 }

            function eU(e) { return new this(e).abs() }

            function eX(e) { return new this(e).acos() }

            function eH(e) { return new this(e).acosh() }

            function eG(e, t) { return new this(e).plus(t) }

            function ez(e) { return new this(e).asin() }

            function ej(e) { return new this(e).asinh() }

            function eQ(e) { return new this(e).atan() }

            function eZ(e) { return new this(e).atanh() }

            function e$(e, t) { e = new this(e), t = new this(t); var n, i = this.precision,
                    o = this.rounding,
                    r = i + 4; return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (n = t.s < 0 ? eC(this, i, o) : new this(0)).s = e.s : !e.d || t.isZero() ? (n = eC(this, r, 1).times(.5)).s = e.s : t.s < 0 ? (this.precision = r, this.rounding = 1, n = this.atan(eS(e, t, r, 1)), t = eC(this, r, 1), this.precision = i, this.rounding = o, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(eS(e, t, r, 1)) : (n = eC(this, r, 1).times(t.s > 0 ? .25 : .75)).s = e.s : n = new this(NaN), n }

            function eY(e) { return new this(e).cbrt() }

            function eJ(e) { return eT(e = new this(e), e.e + 1, 2) }

            function e1(e, t, n) { return new this(e).clamp(t, n) }

            function e0(e) { if (!e || "object" != typeof e) throw Error(er + "Object expected"); var t, n, i, o = !0 === e.defaults,
                    r = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -9e15, 0, "toExpPos", 0, 9e15, "maxE", 0, 9e15, "minE", -9e15, 0, "modulo", 0, 9]; for (t = 0; t < r.length; t += 3)
                    if (n = r[t], o && (this[n] = ei[n]), void 0 !== (i = e[n])) { if (el(i) === i && i >= r[t + 1] && i <= r[t + 2]) this[n] = i;
                        else throw Error(ea + n + ": " + i) }
                if (n = "crypto", o && (this[n] = ei[n]), void 0 !== (i = e[n])) { if (!0 === i || !1 === i || 0 === i || 1 === i) { if (i) { if ("u" > typeof crypto && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
                            else throw Error(eu) } else this[n] = !1 } else throw Error(ea + n + ": " + i) } return this }

            function e4(e) { return new this(e).cos() }

            function e6(e) { return new this(e).cosh() }

            function e2(e, t) { return new this(e).div(t) }

            function e5(e) { return new this(e).exp() }

            function e8(e) { return eT(e = new this(e), e.e + 1, 3) }

            function e3() { var e, t, n = new this(0); for (eo = !1, e = 0; e < arguments.length;)
                    if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
                    else { if (t.s) return eo = !0, new this(1 / 0);
                        n = t }
                return eo = !0, n.sqrt() }

            function e7(e) { return e instanceof tk || e && e.toStringTag === ec || !1 }

            function e9(e) { return new this(e).ln() }

            function te(e, t) { return new this(e).log(t) }

            function tt(e) { return new this(e).log(2) }

            function tn(e) { return new this(e).log(10) }

            function ti() { return eW(this, arguments, "lt") }

            function to() { return eW(this, arguments, "gt") }

            function tr(e, t) { return new this(e).mod(t) }

            function ta(e, t) { return new this(e).mul(t) }

            function ts(e, t) { return new this(e).pow(t) }

            function tu(e) { var t, n, i, o, r = 0,
                    a = new this(1),
                    s = []; if (void 0 === e ? e = this.precision : eb(e, 1, 1e9), i = Math.ceil(e / 7), this.crypto) { if (crypto.getRandomValues)
                        for (t = crypto.getRandomValues(new Uint32Array(i)); r < i;)(o = t[r]) >= 429e7 ? t[r] = crypto.getRandomValues(new Uint32Array(1))[0] : s[r++] = o % 1e7;
                    else if (crypto.randomBytes) { for (t = crypto.randomBytes(i *= 4); r < i;)(o = t[r] + (t[r + 1] << 8) + (t[r + 2] << 16) + ((127 & t[r + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(t, r) : (s.push(o % 1e7), r += 4);
                        r = i / 4 } else throw Error(eu) } else
                    for (; r < i;) s[r++] = 1e7 * Math.random() | 0; for (i = s[--r], e %= 7, i && e && (o = ed(10, 7 - e), s[r] = (i / o | 0) * o); 0 === s[r]; r--) s.pop(); if (r < 0) n = 0, s = [0];
                else { for (n = -1; 0 === s[0]; n -= 7) s.shift(); for (i = 1, o = s[0]; o >= 10; o /= 10) i++;
                    i < 7 && (n -= 7 - i) } return a.e = n, a.d = s, a }

            function tc(e) { return eT(e = new this(e), e.e + 1, this.rounding) }

            function tl(e) { return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN }

            function td(e) { return new this(e).sin() }

            function tm(e) { return new this(e).sinh() }

            function tp(e) { return new this(e).sqrt() }

            function th(e, t) { return new this(e).sub(t) }

            function tg() { var e = 0,
                    t = arguments,
                    n = new this(t[e]); for (eo = !1; n.s && ++e < t.length;) n = n.plus(t[e]); return eo = !0, eT(n, this.precision, this.rounding) }

            function tf(e) { return new this(e).tan() }

            function tw(e) { return new this(e).tanh() }

            function ty(e) { return eT(e = new this(e), e.e + 1, 1) }
            ey[Symbol.for("nodejs.util.inspect.custom")] = ey.toString, ey[Symbol.toStringTag] = "Decimal"; var tk = ey.constructor = function e(t) { var n, i, o;

                function r(e) { var t, n, i, o = this; if (!(o instanceof r)) return new r(e); if (o.constructor = r, e7(e)) { o.s = e.s, eo ? !e.d || e.e > r.maxE ? (o.e = NaN, o.d = null) : e.e < r.minE ? (o.e = 0, o.d = [0]) : (o.e = e.e, o.d = e.d.slice()) : (o.e = e.e, o.d = e.d ? e.d.slice() : e.d); return } if ("number" == (i = typeof e)) { if (0 === e) { o.s = 1 / e < 0 ? -1 : 1, o.e = 0, o.d = [0]; return } if (e < 0 ? (e = -e, o.s = -1) : o.s = 1, e === ~~e && e < 1e7) { for (t = 0, n = e; n >= 10; n /= 10) t++;
                            eo ? t > r.maxE ? (o.e = NaN, o.d = null) : t < r.minE ? (o.e = 0, o.d = [0]) : (o.e = t, o.d = [e]) : (o.e = t, o.d = [e]); return } if (0 * e != 0) { e || (o.s = NaN), o.e = NaN, o.d = null; return } return e_(o, e.toString()) } if ("string" !== i) throw Error(ea + e); return 45 === (n = e.charCodeAt(0)) ? (e = e.slice(1), o.s = -1) : (43 === n && (e = e.slice(1)), o.s = 1), eg.test(e) ? e_(o, e) : function(e, t) { var n, i, o, r, a, s, u, c, l; if (t.indexOf("_") > -1) { if (t = t.replace(/(\d)_(?=\d)/g, "$1"), eg.test(t)) return e_(e, t) } else if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e; if (ep.test(t)) n = 16, t = t.toLowerCase();
                        else if (em.test(t)) n = 2;
                        else if (eh.test(t)) n = 8;
                        else throw Error(ea + t); for ((r = t.search(/p/i)) > 0 ? (u = +t.slice(r + 1), t = t.substring(2, r)) : t = t.slice(2), a = (r = t.indexOf(".")) >= 0, i = e.constructor, a && (r = (s = (t = t.replace(".", "")).length) - r, o = eq(i, new i(n), r, 2 * r)), r = l = (c = eI(t, n, 1e7)).length - 1; 0 === c[r]; --r) c.pop(); return r < 0 ? new i(0 * e.s) : (e.e = eB(c, l), e.d = c, eo = !1, a && (e = eS(e, o, 4 * s)), u && (e = e.times(54 > Math.abs(u) ? ed(2, u) : tk.pow(2, u))), eo = !0, e) }(o, e) } if (r.prototype = ey, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = e0, r.clone = e, r.isDecimal = e7, r.abs = eU, r.acos = eX, r.acosh = eH, r.add = eG, r.asin = ez, r.asinh = ej, r.atan = eQ, r.atanh = eZ, r.atan2 = e$, r.cbrt = eY, r.ceil = eJ, r.clamp = e1, r.cos = e4, r.cosh = e6, r.div = e2, r.exp = e5, r.floor = e8, r.hypot = e3, r.ln = e9, r.log = te, r.log10 = tn, r.log2 = tt, r.max = ti, r.min = to, r.mod = tr, r.mul = ta, r.pow = ts, r.random = tu, r.round = tc, r.sign = tl, r.sin = td, r.sinh = tm, r.sqrt = tp, r.sub = th, r.sum = tg, r.tan = tf, r.tanh = tw, r.trunc = ty, void 0 === t && (t = {}), t && !0 !== t.defaults)
                    for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < o.length;) t.hasOwnProperty(i = o[n++]) || (t[i] = this[i]); return r.config(t), r }(ei);
            et = new tk(et), en = new tk(en); var tb = ((r = tb || {})[r.ROUND_DOWN = 0] = "ROUND_DOWN", r[r.ROUND_HALF_UP = 1] = "ROUND_HALF_UP", r[r.ROUND_UP = 2] = "ROUND_UP", r);

            function tA(e) { let t = X("Nova Bot_parseBigNumberish"); if (e instanceof k) return e; if ("string" == typeof e) { if (e.match(/^-?[0-9]+$/)) return new k(e);
                    t.logWithError(`invalid BigNumberish string: ${e}`) } return "number" == typeof e ? (e % 1 && t.logWithError(`BigNumberish number underflow: ${e}`), (e >= 9007199254740991 || e <= -9007199254740991) && t.logWithError(`BigNumberish number overflow: ${e}`), new k(String(e))) : "bigint" == typeof e ? new k(e.toString()) : (t.error(`invalid BigNumberish value: ${e}`), new k(0)) } var tI = X("module/fraction"),
                tS = A(b.Z),
                tT = A(I),
                tP = { 0: tT.ROUND_DOWN, 1: tT.ROUND_HALF_UP, 2: tT.ROUND_UP },
                tB = { 0: b.Z.roundDown, 1: b.Z.roundHalfUp, 2: b.Z.roundUp },
                tv = class { constructor(e, t = new k(1)) { this.numerator = tA(e), this.denominator = tA(t) }
                    get quotient() { return this.numerator.div(this.denominator) }
                    invert() { return new tv(this.denominator, this.numerator) }
                    add(e) { let t = e instanceof tv ? e : new tv(tA(e)); return this.denominator.eq(t.denominator) ? new tv(this.numerator.add(t.numerator), this.denominator) : new tv(this.numerator.mul(t.denominator).add(t.numerator.mul(this.denominator)), this.denominator.mul(t.denominator)) }
                    sub(e) { let t = e instanceof tv ? e : new tv(tA(e)); return this.denominator.eq(t.denominator) ? new tv(this.numerator.sub(t.numerator), this.denominator) : new tv(this.numerator.mul(t.denominator).sub(t.numerator.mul(this.denominator)), this.denominator.mul(t.denominator)) }
                    mul(e) { let t = e instanceof tv ? e : new tv(tA(e)); return new tv(this.numerator.mul(t.numerator), this.denominator.mul(t.denominator)) }
                    div(e) { let t = e instanceof tv ? e : new tv(tA(e)); return new tv(this.numerator.mul(t.denominator), this.denominator.mul(t.numerator)) }
                    toSignificant(e, t = { groupSeparator: "" }, n = 1) { Number.isInteger(e) || tI.logWithError(`${e} is not an integer.`), e <= 0 && tI.logWithError(`${e} is not positive.`), tT.set({ precision: e + 1, rounding: tP[n] }); let i = new tT(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(e); return i.toFormat(i.decimalPlaces(), t) }
                    toFixed(e, t = { groupSeparator: "" }, n = 1) { return Number.isInteger(e) || tI.logWithError(`${e} is not an integer.`), e < 0 && tI.logWithError(`${e} is negative.`), tS.DP = e, tS.RM = tB[n] || 1, new tS(this.numerator.toString()).div(this.denominator.toString()).toFormat(e, t) }
                    isZero() { return this.numerator.isZero() } },
                tC = X("Nova Bot_amount"),
                tx = A(b.Z);

            function tO(e, t) { let n = "0",
                    i = "0"; if (e.includes(".")) { let o = e.split(".");
                    2 === o.length ? ([n, i] = o, i = i.padEnd(t, "0")) : tC.logWithError(`invalid number string, num: ${e}`) } else n = e; return [n, i.slice(0, t) || i] } var tq = class extends tv { constructor(e, t, n = !0, i) { let o = new k(0),
                            r = ne.pow(new k(e.decimals)); if (n) o = tA(t);
                        else { let n = new k(0),
                                i = new k(0); if ("string" == typeof t || "number" == typeof t || "bigint" == typeof t) { let [o, r] = tO(t.toString(), e.decimals);
                                n = tA(o), i = tA(r) }
                            o = (n = n.mul(r)).add(i) }
                        super(o, r), this.logger = X(i || "TokenAmount"), this.token = e }
                    get raw() { return this.numerator }
                    isZero() { return this.raw.isZero() }
                    gt(e) { return this.token.equals(e.token) || this.logger.logWithError("gt token not equals"), this.raw.gt(e.raw) }
                    lt(e) { return this.token.equals(e.token) || this.logger.logWithError("lt token not equals"), this.raw.lt(e.raw) }
                    add(e) { return this.token.equals(e.token) || this.logger.logWithError("add token not equals"), new tq(this.token, this.raw.add(e.raw)) }
                    subtract(e) { return this.token.equals(e.token) || this.logger.logWithError("sub token not equals"), new tq(this.token, this.raw.sub(e.raw)) }
                    toSignificant(e = this.token.decimals, t, n = 0) { return super.toSignificant(e, t, n) }
                    toFixed(e = this.token.decimals, t, n = 0) { return e > this.token.decimals && this.logger.logWithError("decimals overflow"), super.toFixed(e, t, n) }
                    toExact(e = { groupSeparator: "" }) { return tx.DP = this.token.decimals, new tx(this.numerator.toString()).div(this.denominator.toString()).toFormat(e) } },
                tK = class extends null { constructor(e, t, n = !0, i) { let o = new ln(0),
                            r = ne.pow(new ln(e.decimals)); if (n) o = tA(t);
                        else { let n = new ln(0),
                                i = new ln(0); if ("string" == typeof t || "number" == typeof t || "bigint" == typeof t) { let [o, r] = tO(t.toString(), e.decimals);
                                n = tA(o), i = tA(r) }
                            o = (n = n.mul(r)).add(i) }
                        super(o, r), this.logger = X(i || "TokenAmount"), this.currency = e }
                    get raw() { return this.numerator }
                    isZero() { return this.raw.isZero() }
                    gt(e) { return this.currency.equals(e.currency) || this.logger.logWithError("gt currency not equals"), this.raw.gt(e.raw) }
                    lt(e) { return this.currency.equals(e.currency) || this.logger.logWithError("lt currency not equals"), this.raw.lt(e.raw) }
                    add(e) { return this.currency.equals(e.currency) || this.logger.logWithError("add currency not equals"), new tK(this.currency, this.raw.add(e.raw)) }
                    sub(e) { return this.currency.equals(e.currency) || this.logger.logWithError("sub currency not equals"), new tK(this.currency, this.raw.sub(e.raw)) }
                    toSignificant(e = this.currency.decimals, t, n = 0) { return super.toSignificant(e, t, n) }
                    toFixed(e = this.currency.decimals, t, n = 0) { return e > this.currency.decimals && this.logger.logWithError("decimals overflow"), super.toFixed(e, t, n) }
                    toExact(e = { groupSeparator: "" }) { return tx.DP = this.currency.decimals, new tx(this.numerator.toString()).div(this.denominator.toString()).toFormat(e) } },
                tW = { chainId: 101, address: h.nh.default.toBase58(), programId: w.H_.toBase58(), decimals: 9, symbol: "SOL", name: "solana", logoURI: "https://img.Nova Bot.io/icon/So11111111111111111111111111111111111111112.png", tags: [], priority: 2, type: "Nova Bot", extensions: { coingeckoId: "solana" } },
                tM = { chainId: 101, address: "So11111111111111111111111111111111111111112", programId: w.H_.toBase58(), decimals: 9, symbol: "WSOL", name: "Wrapped SOL", logoURI: "https://img.Nova Bot.io/icon/So11111111111111111111111111111111111111112.png", tags: [], priority: 2, type: "Nova Bot", extensions: { coingeckoId: "solana" } };

            function tL({ pubkey: e, isSigner: t = !1, isWritable: n = !0 }) { return { pubkey: e, isWritable: n, isSigner: t } } var tR = [tL({ pubkey: w.H_, isWritable: !1 }), tL({ pubkey: h.yc.programId, isWritable: !1 }), tL({ pubkey: h.ze, isWritable: !1 })];

            function t_({ publicKey: e, transformSol: t }) { let n = tF(e.toString()); if (n instanceof h.nh) return t && n.equals(tZ) ? tQ : n; if (t && n.toString() === tZ.toBase58()) return tQ; if ("string" == typeof n) { if (n === h.nh.default.toBase58()) return h.nh.default; try { return new h.nh(n) } catch { throw Error("invalid public key") } } throw Error("invalid public key") }

            function tF(e) { try { return new h.nh(e) } catch { return e } } var tE = new h.nh("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
                tD = new h.nh("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
                tV = new h.nh("SysvarRent111111111111111111111111111111111"),
                tN = new h.nh("SysvarC1ock11111111111111111111111111111111"),
                tU = new h.nh("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),
                tX = (new h.nh("Sysvar1nstructions1111111111111111111111111"), h.yc.programId),
                tH = new h.nh("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
                tG = (new h.nh("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"), new h.nh("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"), new h.nh("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v")),
                tz = new h.nh("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
                tj = new h.nh("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),
                tQ = (new h.nh("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"), new h.nh("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"), new h.nh("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"), new h.nh("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"), new h.nh("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"), new h.nh("So11111111111111111111111111111111111111112")),
                tZ = h.nh.default;

            function t$(e) { return t_({ publicKey: e, transformSol: !0 }) } var tY = class { constructor({ mint: e, decimals: t, symbol: n, name: i, skipMint: o = !1, isToken2022: r = !1 }) { if (e === tZ.toBase58() || e instanceof h.nh && tZ.equals(e)) { this.decimals = tM.decimals, this.symbol = tM.symbol, this.name = tM.name, this.mint = new h.nh(tM.address), this.isToken2022 = !1; return }
                        this.decimals = t, this.symbol = n || e.toString().substring(0, 6), this.name = i || e.toString().substring(0, 6), this.mint = o ? h.nh.default : t_({ publicKey: e }), this.isToken2022 = r }
                    equals(e) { return this === e || this.mint.equals(e.mint) } },
                tJ = tY;
            tJ.WSOL = new tY(F(_({}, tM), { mint: tM.address })); var t1 = class { constructor({ decimals: e, symbol: t = "UNKNOWN", name: n = "UNKNOWN" }) { this.decimals = e, this.symbol = t, this.name = n }
                equals(e) { return this === e } };
            t1.SOL = new t1(tW); var t0 = new tv(new k(100)),
                t4 = class extends tv { toSignificant(e = 5, t, n) { return this.mul(t0).toSignificant(e, t, n) }
                    toFixed(e = 2, t, n) { return this.mul(t0).toFixed(e, t, n) } },
                t6 = X("Nova Bot_price"),
                t2 = class extends tv { constructor(e) { var t, n; let { baseToken: i, quoteToken: o, numerator: r, denominator: a } = e;
                        super(r, a), this.baseToken = i, this.quoteToken = o, this.scalar = new tv((t = i.decimals, ne.pow(tA(t))), (n = o.decimals, ne.pow(tA(n)))) }
                    get raw() { return new tv(this.numerator, this.denominator) }
                    get adjusted() { return super.mul(this.scalar) }
                    invert() { return new t2({ baseToken: this.quoteToken, quoteToken: this.baseToken, denominator: this.numerator, numerator: this.denominator }) }
                    mul(e) { this.quoteToken !== e.baseToken && t6.logWithError("mul token not equals"); let t = super.mul(e); return new t2({ baseToken: this.baseToken, quoteToken: e.quoteToken, denominator: t.denominator, numerator: t.numerator }) }
                    toSignificant(e = this.quoteToken.decimals, t, n) { return this.adjusted.toSignificant(e, t, n) }
                    toFixed(e = this.quoteToken.decimals, t, n) { return this.adjusted.toFixed(e, t, n) } };

            function t5(e) { if (e instanceof t4) return new tv(e.numerator, e.denominator); if (e instanceof t2) return e.adjusted; if (e instanceof tq) try { return t5(e.toExact()) } catch { return new tv(t7) }
                if (e instanceof tv) return e; let t = function(e) { var t; if (void 0 === e) return { denominator: "1", numerator: "0" }; if (e instanceof k) return { numerator: e.toString(), denominator: "1" }; if (e instanceof tv) return { denominator: e.denominator.toString(), numerator: e.numerator.toString() }; let [, n = "", i = "", o = ""] = null != (t = String(e).replace(",", "").match(/(-?)(\d*)\.?(\d*)/)) ? t : []; return { denominator: "1" + "0".repeat(o.length), numerator: n + ("0" === i ? "" : i) + o || "0", sign: n, int: i, dec: o } }(String(e)); return new tv(t.numerator, t.denominator) }

            function t8(e, t) { if (null == e || null == t) return !1; let n = t5(e),
                    i = t5(t); return n.sub(i).numerator.eq(t7) }

            function t3(e) { return "string" == typeof e ? tF(e) : Array.isArray(e) ? e.map(e => t3(e)) : "object" != typeof e || null === e || [tJ, tq, h.nh, tv, k, t2, t4].some(t => "object" == typeof t && e instanceof t) ? e : Object.fromEntries(Object.entries(e).map(([e, t]) => [e, t3(t)])) } var t7 = new k(0),
                t9 = new k(1),
                ne = (new k(2), new k(3), new k(5), new k(10));

            function nt(e, t) { let n = e.divmod(t); return n.mod.isZero() ? n.div : n.div.isNeg() ? n.div.isubn(1) : n.div.iaddn(1) }

            function nn(e, t = 1, n = []) { let i = [...e]; if (t <= 0) return n; for (; i.length;) n.push(i.splice(0, t)); return n }
            new k(100), new k(1e3), new k(1e4); var ni = class { constructor(e) { this._owner = e }
                    get publicKey() { return ni.isKeyPair(this._owner) ? this._owner.publicKey : this._owner }
                    get signer() { return ni.isKeyPair(this._owner) ? this._owner : void 0 }
                    get isKeyPair() { return ni.isKeyPair(this._owner) }
                    get isPublicKey() { return ni.isPublicKey(this._owner) }
                    static isKeyPair(e) { return void 0 !== e.secretKey }
                    static isPublicKey(e) { return !ni.isKeyPair(e) } },
                no = ((a = no || {})[a.V0 = 0] = "V0", a[a.LEGACY = 1] = "LEGACY", a),
                nr = { CreateAccount: "CreateAccount", InitAccount: "InitAccount", CreateATA: "CreateATA", CloseAccount: "CloseAccount", TransferAmount: "TransferAmount", InitMint: "InitMint", MintTo: "MintTo", InitMarket: "InitMarket", Util1216OwnerClaim: "Util1216OwnerClaim", SetComputeUnitPrice: "SetComputeUnitPrice", SetComputeUnitLimit: "SetComputeUnitLimit", ClmmCreatePool: "ClmmCreatePool", ClmmOpenPosition: "ClmmOpenPosition", ClmmIncreasePosition: "ClmmIncreasePosition", ClmmDecreasePosition: "ClmmDecreasePosition", ClmmClosePosition: "ClmmClosePosition", ClmmSwapBaseIn: "ClmmSwapBaseIn", ClmmSwapBaseOut: "ClmmSwapBaseOut", ClmmInitReward: "ClmmInitReward", ClmmSetReward: "ClmmSetReward", ClmmCollectReward: "ClmmCollectReward", ClmmLockPosition: "ClmmLockPosition", ClmmHarvestLockPosition: "ClmmHarvestLockPosition", AmmV4Swap: "AmmV4Swap", AmmV4AddLiquidity: "AmmV4AddLiquidity", AmmV4RemoveLiquidity: "AmmV4RemoveLiquidity", AmmV4SimulatePoolInfo: "AmmV4SimulatePoolInfo", AmmV4SwapBaseIn: "AmmV4SwapBaseIn", AmmV4SwapBaseOut: "AmmV4SwapBaseOut", AmmV4CreatePool: "AmmV4CreatePool", AmmV4InitPool: "AmmV4InitPool", AmmV5AddLiquidity: "AmmV5AddLiquidity", AmmV5RemoveLiquidity: "AmmV5RemoveLiquidity", AmmV5SimulatePoolInfo: "AmmV5SimulatePoolInfo", AmmV5SwapBaseIn: "AmmV5SwapBaseIn", AmmV5SwapBaseOut: "AmmV5SwapBaseOut", RouteSwap: "RouteSwap", RouteSwap1: "RouteSwap1", RouteSwap2: "RouteSwap2", FarmV3Deposit: "FarmV3Deposit", FarmV3Withdraw: "FarmV3Withdraw", FarmV3CreateLedger: "FarmV3CreateLedger", FarmV5Deposit: "FarmV5Deposit", FarmV5Withdraw: "FarmV5Withdraw", FarmV5CreateLedger: "FarmV5CreateLedger", FarmV6Deposit: "FarmV6Deposit", FarmV6Withdraw: "FarmV6Withdraw", FarmV6Create: "FarmV6Create", FarmV6Restart: "FarmV6Restart", FarmV6CreatorAddReward: "FarmV6CreatorAddReward", FarmV6CreatorWithdraw: "FarmV6CreatorWithdraw", CpmmCreatePool: "CpmmCreatePool", CpmmAddLiquidity: "CpmmAddLiquidity", CpmmWithdrawLiquidity: "CpmmWithdrawLiquidity", CpmmSwapBaseIn: "CpmmSwapBaseIn", CpmmSwapBaseOut: "CpmmSwapBaseOut", CpmmLockLp: "CpmmLockLp", CpmmCollectLockFee: "CpmmCollectLockFee" },
                na = X("Nova Bot_txUtil");

            function ns(e) { let t = [],
                    n = []; return e.microLamports && (t.push(h.Lb.setComputeUnitPrice({ microLamports: e.microLamports })), n.push(nr.SetComputeUnitPrice)), e.units && (t.push(h.Lb.setComputeUnitLimit({ units: e.units })), n.push(nr.SetComputeUnitLimit)), { instructions: t, instructionTypes: n } }
            async function nu(e, t) { var n, i; return null == (i = await (null == (n = e.getLatestBlockhash) ? void 0 : n.call(e, { commitment: null != t ? t : "confirmed" }))) ? void 0 : i.blockhash }
            async function nc(e, t) { return e.getSignatureStatuses([t]), new Promise((n, i) => { let o = setTimeout(i, 6e4);
                    e.onSignature(t, e => { if (clearTimeout(o), !e.err) { n(""); return }
                        i(e.err.toString()) }, "confirmed") }) }

            function nl(e, t) { e.length < 1 && na.logWithError(`no instructions provided: ${e.toString()}`), t.length < 1 && na.logWithError(`no signers provided:, ${t.toString()}`); let n = new h.YW;
                n.recentBlockhash = "11111111111111111111111111111111", n.feePayer = t[0], n.add(...e); try { return x.from(n.serialize({ verifySignatures: !1 })).toString("base64").length < 1644 } catch { return !1 } }
            async function nd(e, t, n, i = !0) { let o = new h.nh("Nova BotSimuLateTransaction11111111111111111"),
                    r = [],
                    a = new h.YW; for (let e of(a.feePayer = o, t)) nl([...a.instructions, e], [o]) || (r.push(a), (a = new h.YW).feePayer = o), a.add(e);
                a.instructions.length > 0 && r.push(a); let s = []; try { if ((s = await nh(e, r, i)).find(e => null !== e.err)) throw Error("rpc simulateTransaction error") } catch (e) { e instanceof Error && na.logWithError("failed to simulate for instructions", "RPC_ERROR", { message: e.message }) } let u = []; for (let e of s)
                    if (na.debug("simulate result:", e), e.logs) { let t = e.logs.filter(e => e && e.includes(n));
                        na.debug("filteredLog:", u), t.length || na.logWithError("simulate log not match keyword", "keyword", n), u.push(...t) }
                return u }

            function nm(e, t) { let n = RegExp(`"${t}":(\\d+)`, "g").exec(e); return n && 2 === n.length ? n[1] : na.logWithError(`simulate log fail to match key", key: ${t}`) }

            function np(e, t) { let [n, i] = h.nh.findProgramAddressSync(e, t); return { publicKey: n, nonce: i } }
            async function nh(e, t, n) { let i = []; if (n) { let n = await e.getLatestBlockhash(),
                        o = []; for (let e of t) { e.recentBlockhash = n.blockhash, e.lastValidBlockHeight = n.lastValidBlockHeight; let t = e._compile().serialize(),
                            i = e._serialize(t).toString("base64");
                        o.push(i) } let r = o.map(t => ({ methodName: "simulateTransaction", args: e._buildArgs([t], void 0, "base64") })),
                        a = []; for (let e = 0; e < Math.ceil(r.length / 20); e++) a.push(r.slice(20 * e, (e + 1) * 20));
                    i = await (await Promise.all(a.map(async t => (await e._rpcBatchRequest(t)).map(e => e.result.value)))).flat() } else try { i = await Promise.all(t.map(async t => await (await e.simulateTransaction(t)).value)) } catch (e) { e instanceof Error && na.logWithError("failed to get info for multiple accounts", "RPC_ERROR", { message: e.message }) }
                return i }

            function ng({ instructions: e, payer: t, signers: n }) { return nl(e, [t, ...n]) }

            function nf({ instructions: e, payer: t, lookupTableAddressAccount: n, recentBlockhash: i = h.RG.generate().publicKey.toString() }) { let o = new h.$Z({ payerKey: t, recentBlockhash: i, instructions: e }).compileToV0Message(Object.values(null != n ? n : {})); try { return x.from(new h.GS(o).serialize()).toString("base64").length < 1644 } catch { return !1 } } var nw = e => x.isBuffer(e) ? e : e instanceof Uint8Array ? x.from(e.buffer, e.byteOffset, e.byteLength) : x.from(e),
                ny = e => { let t = e.serialize({ requireAllSignatures: !1, verifySignatures: !1 });
                    e instanceof h.GS && (t = nw(t)); try { return t instanceof x ? t.toString("base64") : x.from(t).toString("base64") } catch { return t.toString("base64") } };

            function nk(e) { let t = []; return e.forEach(e => { e instanceof h.YW && (e.recentBlockhash || (e.recentBlockhash = w.H_.toBase58()), e.feePayer || (e.feePayer = h.RG.generate().publicKey)), t.push(ny(e)) }), console.log("simulate tx string:", t), t }

            function nb(e, t, n) { return np([e.toBuffer(), (null != n ? n : w.H_).toBuffer(), t.toBuffer()], new h.nh("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")) } var nA = new h.nh("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q"),
                nI = new h.nh("9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z"),
                nS = new h.nh("FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG"),
                nT = new h.nh("CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS"),
                nP = new h.nh("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"),
                nB = new h.nh("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"),
                nv = new h.nh("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"),
                nC = new h.nh("5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h"),
                nx = new h.nh("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),
                nO = new h.nh("CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"),
                nq = new h.nh("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE"),
                nK = new h.nh("kN1kEznaF5Xbd8LYuqtEFcxzWSBk5Fv6ygX6SqEGJVy"),
                nW = new h.nh("routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS"),
                nM = (new h.nh("7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5"), new h.nh("6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF")),
                nL = new h.nh("CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH"),
                nR = new h.nh("9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC"),
                n_ = new h.nh("DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi"),
                nF = new h.nh("CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"),
                nE = new h.nh("GpMZbSM2GgvTKHJirzeGfMFoaZ8UR2X7F4v8vHTvxFbL"),
                nD = new h.nh("DNXgeM9EiiaAbaWvwjHj9fQQLAX5ZsfHyvmYUNRAdNC8"),
                nV = (new h.nh("CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"), new h.nh("7rQ1QFNosMkUCuh7Z7fPbTHvh73b68sQYdirycEzJVuw"), new h.nh("G11FKBRaAkHAKuLCgLM6K6NUc9rTjPAznRCjZifrTQe2"), new h.nh("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE")),
                nN = (new h.nh("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC"), new h.nh("3f7GcQFG397GAaEnv51zR6tsTVihYRydnydDD1cXekxH")),
                nU = (new h.nh("7AFUeLVRjBfzqK3tTGw8hN48KLQWSk6DTE8xprWdPqix"), { IDO_PROGRAM_ID_V1: nM, IDO_PROGRAM_ID_V2: nL, IDO_PROGRAM_ID_V3: nR, IDO_PROGRAM_ID_V4: n_ }),
                nX = { AMM_V4: nv, AMM_STABLE: nC, CLMM_PROGRAM_ID: nO, CLMM_LOCK_PROGRAM_ID: nq, CLMM_LOCK_AUTH_ID: nK, FARM_PROGRAM_ID_V3: nA, FARM_PROGRAM_ID_V5: nI, FARM_PROGRAM_ID_V6: nS, OPEN_BOOK_PROGRAM: nP, SERUM_PROGRAM_ID_V3: nB, UTIL1216: nT, Router: nW, CREATE_CPMM_POOL_PROGRAM: nF, CREATE_CPMM_POOL_AUTH: nE, CREATE_CPMM_POOL_FEE_ACC: nD, LOCK_CPMM_PROGRAM: nV, LOCK_CPMM_AUTH: nN };

            function nH(e, t, n, i) { if (void 0 === t) return { amount: e, fee: void 0, expirationTime: void 0 }; let o = F(_({}, t), { olderTransferFee: { epoch: BigInt(t.olderTransferFee.epoch), maximumFee: BigInt(t.olderTransferFee.maximumFee), transferFeeBasisPoints: t.olderTransferFee.transferFeeBasisPoints }, newerTransferFee: { epoch: BigInt(t.newerTransferFee.epoch), maximumFee: BigInt(t.newerTransferFee.maximumFee), transferFeeBasisPoints: t.newerTransferFee.transferFeeBasisPoints } }),
                    r = n.epoch < o.newerTransferFee.epoch ? o.olderTransferFee : o.newerTransferFee,
                    a = new k(r.maximumFee.toString()),
                    s = n.epoch < o.newerTransferFee.epoch ? (Number(o.newerTransferFee.epoch) * n.slotsInEpoch - n.absoluteSlot) * 400 / 1e3 : void 0; if (i) { if (1e4 === r.transferFeeBasisPoints) { let t = new k(r.maximumFee.toString()); return { amount: e.add(t), fee: t, expirationTime: s } } { let t = nz(e.mul(new k(1e4)), new k(1e4 - r.transferFeeBasisPoints)),
                            n = new k(r.maximumFee.toString()),
                            i = t.sub(e).gt(n) ? e.add(n) : t,
                            o = nz(i.mul(new k(r.transferFeeBasisPoints)), new k(1e4)); return { amount: i, fee: o.gt(a) ? a : o, expirationTime: s } } } { let t = nz(e.mul(new k(r.transferFeeBasisPoints)), new k(1e4)); return { amount: e, fee: t.gt(a) ? a : t, expirationTime: s } } }

            function nG(e, t) { return void 0 === e ? t : void 0 === t ? e : Math.min(e, t) }

            function nz(e, t) { let { div: n, mod: i } = e.divmod(t); return i.gt(new k(0)) ? n.add(new k(1)) : n }
            async function nj({ connection: e, address: t }) { let n = await G(e, [...new Set(t.map(e => e.toString()))].map(e => new h.nh(e))),
                    i = {}; for (let e = 0; e < t.length; e++) { let o = n[e],
                        r = t[e]; if (!o) continue; let a = new h.gw({ key: r, state: h.gw.deserialize(o.data) });
                    i[r.toString()] = a, nQ[r.toString()] = a } return i }
            h.nh.default, new h.nh("EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj"), h.nh.default, new h.nh("85BFyr98MbCUU9MVTEgzx1nbhWACbJqLzho6zd6DZcWL"), new h.nh("EcLzTrNg9V7qhcdyXDe2qjtPkiGzDM2UbdRaeaadU5r2"), new h.nh("Farm2hJLcqPtPg8M4rR6DMrsRNc5TPm5Cs4bVQrMe2T7"), new h.nh("HWy1jotHpo6UqeQxx49dpYYdQB8wj9Qk9MdxwjLvDHB8"), new h.nh("DDg4VmQaJV9ogWce7LpcjBA9bv22wRp5uaTPa5pGjijF"), new h.nh("devi51mZmdwUJGU9hjN27vEz64Gps7uUefqxg27EAtH"), new h.nh("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC"), new h.nh("8qmHNvu2Kr2C7U8mJL4Vz1vTDxMhVuXKREwU7TNoaVEo"), new h.nh("BVChZ3XFEwTMUk1o9i3HAf91H6mFxSwa5X2wFAWhYPhU"), new h.nh("3XMrhbv989VxAMi3DErLV9eJht1pHppW5LbKxe9fkEFR"); var nQ = { "2immgwYNHBbyVQKVGCEkgWpi53bLwWNRMB5G2nbgYV17": new h.gw({ key: new h.nh("2immgwYNHBbyVQKVGCEkgWpi53bLwWNRMB5G2nbgYV17"), state: h.gw.deserialize(x.from("AQAAAP//////////d49+DAAAAAAAAQZMWvw7GUNJdaccNBVnb57OKakxL2BHLYvhRwVILRsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMGRm/lIRcy/+ytunLDm+e8jOW7xfcSayxDmzpAAAAABt324ddloZPZy+FGzut5rBy0he1fWzeROoz1hX7/AKkG3fbh7nWP3hhCXbzkbM3athr8TYO5DSf+vfko2KGL/AVKU1D4XciC1hSlVnJ4iilt3x6rq9CmBniISTL07vagBqfVFxksXFEhjMlMPUrxf1ja7gibof1E49vZigAAAAAGp9UXGMd0yShWY5hpHV62i164o5tLbVxzVVshAAAAAIyXJY9OJInxuz0QKRSODYMLWhOZ2v8QhASOe9jb6fhZC3BlsePRfEU4nVJ/awTDzVi4bHMaoP21SbbRvAP4KUbIScv+6Yw2LHF/6K0ZjUPibbSWXCirYPGuuVl7zT789IUPLW4CpHr4JNCatp3ELXDLKMv6JJ+37le50lbBJ2LvDQdRqCgtphMF/imcN7mY5YRx2xE1A3MQ+L4QRaYK9u4GRfZP3LsAd00a+IkCpA22UNQMKdq5BFbJuwuOLqc8zxCTDlqxBG8J0HcxtfogQHDK06ukzfaXiNDKAob1MqBHS9lJxDYCwz8gd5DtFqNSTKG5l1zxIaKpDP/sffi2is1H9aKveyXSu5StXElYRl9SD5As0DHE4N0GLnf84/siiKXVyp4Ez121kLcUui/jLLFZEz/BwZK3Ilf9B9OcsEAeDMKAy2vjGSxQODgBz0QwGA+eP4ZjIjrIAQaXENv31QfLlOdXSRCkaybRniDHF4C8YcwhcvsqrOVuTP4B2Na+9wLdtrB31uz2rtlFI5kahdsnp/d1SrASDInYCtTYtdoke4kX+hoKWcEWM4Tle8pTUkUVv4BxS6fje/EzKBE4Qu9N9LMnrw/JNO0hqMVB4rk/2ou4AB1loQ7FZoPwut2o4KZB+0p9xnbrQKw038qjpHar+PyDwvxBRcu5hpHw3dguezeWv+IwvgW5icu8EGkhGa9AkFPPJT7VMSFb8xowveU=", "base64")) }) },
                nZ = class { constructor(e) { this.instructions = [], this.endInstructions = [], this.lookupTableAddress = [], this.signers = [], this.instructionTypes = [], this.endInstructionTypes = [], this.connection = e.connection, this.feePayer = e.feePayer, this.signAllTransactions = e.signAllTransactions, this.owner = e.owner, this.cluster = e.cluster, this.blockhashCommitment = e.blockhashCommitment, this.api = e.api }
                    get AllTxData() { return { instructions: this.instructions, endInstructions: this.endInstructions, signers: this.signers, instructionTypes: this.instructionTypes, endInstructionTypes: this.endInstructionTypes, lookupTableAddress: this.lookupTableAddress } }
                    get allInstructions() { return [...this.instructions, ...this.endInstructions] }
                    async getComputeBudgetConfig() { var e; let t = (await p.Z.get("https://solanacompass.com/api/fees?cacheFreshTime=300000")).data,
                            { avg: n } = null != (e = null == t ? void 0 : t[15]) ? e : {}; if (n) return { units: 6e5, microLamports: Math.min(Math.ceil(1e6 * n / 6e5), 25e3) } }
                    addCustomComputeBudget(e) { if (e) { let { instructions: t, instructionTypes: n } = ns(e); return this.instructions.unshift(...t), this.instructionTypes.unshift(...n), !0 } return !1 }
                    async calComputeBudget({ config: e, defaultIns: t }) { try { let n = e || await this.getComputeBudgetConfig(); if (this.addCustomComputeBudget(n)) return;
                            t && this.instructions.unshift(...t) } catch { t && this.instructions.unshift(...t) } }
                    addInstruction({ instructions: e = [], endInstructions: t = [], signers: n = [], instructionTypes: i = [], endInstructionTypes: o = [], lookupTableAddress: r = [] }) { return this.instructions.push(...e), this.endInstructions.push(...t), this.signers.push(...n), this.instructionTypes.push(...i), this.endInstructionTypes.push(...o), this.lookupTableAddress.push(...r.filter(e => e !== h.nh.default.toString())), this }
                    async versionBuild({ txVersion: e, extInfo: t }) { return 0 === e ? await this.buildV0(_({}, t || {})) : this.build(t) }
                    build(e) { var t; let n = new h.YW; return this.allInstructions.length && n.add(...this.allInstructions), n.feePayer = this.feePayer, (null == (t = this.owner) ? void 0 : t.signer) && !this.signers.some(e => e.publicKey.equals(this.owner.publicKey)) && this.signers.push(this.owner.signer), { builder: this, transaction: n, signers: this.signers, instructionTypes: [...this.instructionTypes, ...this.endInstructionTypes], execute: async e => { var t; let { recentBlockHash: i, skipPreflight: o = !0, sendAndConfirm: r } = e || {}, a = null != i ? i : await nu(this.connection, this.blockhashCommitment); if (n.recentBlockhash = a, this.signers.length && n.sign(...this.signers), nk([n]), null != (t = this.owner) && t.isKeyPair) return { txId: r ? await (0, h.BV)(this.connection, n, this.signers.find(e => e.publicKey.equals(this.owner.publicKey)) ? this.signers : [...this.signers, this.owner.signer], { skipPreflight: o }) : await this.connection.sendRawTransaction(n.serialize(), { skipPreflight: o }), signedTx: n }; if (this.signAllTransactions) { let e = await this.signAllTransactions([n]); return { txId: await this.connection.sendRawTransaction(e[0].serialize(), { skipPreflight: o }), signedTx: e[0] } } throw Error("please provide owner in keypair format or signAllTransactions function") }, extInfo: e || {} } }
                    buildMultiTx(e) { var t; let { extraPreBuildData: n = [], extInfo: i } = e, { transaction: o } = this.build(i), r = n.filter(e => e.transaction.instructions.length > 0), a = [o, ...r.map(e => e.transaction)], s = [this.signers, ...r.map(e => e.signers)], u = [...this.instructionTypes, ...r.map(e => e.instructionTypes).flat()]; return null != (t = this.owner) && t.signer && s.forEach(e => { e.some(e => e.publicKey.equals(this.owner.publicKey)) || this.signers.push(this.owner.signer) }), { builder: this, transactions: a, signers: s, instructionTypes: u, execute: async e => { var t; let { sequentially: n, onTxUpdate: i, recentBlockHash: o, skipPreflight: r = !0 } = e || {}, u = null != o ? o : await nu(this.connection, this.blockhashCommitment); if (null != (t = this.owner) && t.isKeyPair) { if (n) { let e = []; for (let t of a) { let n = await (0, h.BV)(this.connection, t, this.signers.find(e => e.publicKey.equals(this.owner.publicKey)) ? this.signers : [...this.signers, this.owner.signer], { skipPreflight: r });
                                            e.push(n) } return { txIds: e, signedTxs: a } } return { txIds: await await Promise.all(a.map(async e => (e.recentBlockhash = u, await this.connection.sendRawTransaction(e.serialize(), { skipPreflight: r })))), signedTxs: a } } if (this.signAllTransactions) { let e = a.map((e, t) => (e.recentBlockhash = u, s[t].length && e.sign(...s[t]), e));
                                    nk(e); let t = await this.signAllTransactions(e); if (n) { let e = 0,
                                            n = [],
                                            o = async() => { if (!t[e]) return; let a = await this.connection.sendRawTransaction(t[e].serialize(), { skipPreflight: r });
                                                n.push({ txId: a, status: "sent", signedTx: t[e] }), null == i || i([...n]), e++, this.connection.onSignature(a, e => { let t = n.findIndex(e => e.txId === a);
                                                    t > -1 && (n[t].status = e.err ? "error" : "success"), null == i || i([...n]), e.err || o() }, "processed"), this.connection.getSignatureStatus(a) }; return await o(), { txIds: n.map(e => e.txId), signedTxs: t } } { let e = []; for (let n = 0; n < t.length; n += 1) { let i = await this.connection.sendRawTransaction(t[n].serialize(), { skipPreflight: r });
                                            e.push(i) } return { txIds: e, signedTxs: t } } } throw Error("please provide owner in keypair format or signAllTransactions function") }, extInfo: i || {} } }
                    async versionMultiBuild({ extraPreBuildData: e, txVersion: t, extInfo: n }) { return 0 === t ? await this.buildV0MultiTx({ extraPreBuildData: e, buildProps: n || {} }) : this.buildMultiTx({ extraPreBuildData: e, extInfo: n }) }
                    async buildV0(e) { var t; let n = e || {},
                            { lookupTableCache: i = {}, lookupTableAddress: o = [], forerunCreate: r, recentBlockhash: a } = n,
                            s = E(n, ["lookupTableCache", "lookupTableAddress", "forerunCreate", "recentBlockhash"]),
                            u = _(_({}, "devnet" === this.cluster ? {} : nQ), i),
                            c = Array.from(new Set([...o, ...this.lookupTableAddress])),
                            l = []; for (let e of c) void 0 === u[e] && l.push(new h.nh(e)); for (let [e, t] of Object.entries(await nj({ connection: this.connection, address: l }))) u[e] = t; let d = r ? h.nh.default.toBase58() : null != a ? a : await nu(this.connection, this.blockhashCommitment),
                            m = new h.$Z({ payerKey: this.feePayer, recentBlockhash: d, instructions: [...this.allInstructions] }).compileToV0Message(Object.values(u));
                        (null == (t = this.owner) ? void 0 : t.signer) && !this.signers.some(e => e.publicKey.equals(this.owner.publicKey)) && this.signers.push(this.owner.signer); let p = new h.GS(m); return p.sign(this.signers), { builder: this, transaction: p, signers: this.signers, instructionTypes: [...this.instructionTypes, ...this.endInstructionTypes], execute: async e => { var t; let { skipPreflight: n = !0, sendAndConfirm: i } = e || {}; if (nk([p]), null != (t = this.owner) && t.isKeyPair) { let e = await this.connection.sendTransaction(p, { skipPreflight: n }); return i && await nc(this.connection, e), { txId: e, signedTx: p } } if (this.signAllTransactions) { let e = await this.signAllTransactions([p]); return { txId: await this.connection.sendTransaction(e[0], { skipPreflight: n }), signedTx: e[0] } } throw Error("please provide owner in keypair format or signAllTransactions function") }, extInfo: s || {} } }
                    async buildV0MultiTx(e) { var t; let { extraPreBuildData: n = [], buildProps: i } = e, { transaction: o } = await this.buildV0(i), r = n.filter(e => e.builder.instructions.length > 0), a = [o, ...r.map(e => e.transaction)], s = [this.signers, ...r.map(e => e.signers)], u = [...this.instructionTypes, ...r.map(e => e.instructionTypes).flat()]; return null != (t = this.owner) && t.signer && s.forEach(e => { e.some(e => e.publicKey.equals(this.owner.publicKey)) || this.signers.push(this.owner.signer) }), a.forEach(async(e, t) => { e.sign(s[t]) }), { builder: this, transactions: a, signers: s, instructionTypes: u, buildProps: i, execute: async e => { var t; let { sequentially: n, onTxUpdate: i, recentBlockHash: o, skipPreflight: r = !0 } = e || {}; if (o && a.forEach(e => e.message.recentBlockhash = o), nk(a), null != (t = this.owner) && t.isKeyPair) { if (n) { let e = []; for (let t of a) { let n = await this.connection.sendTransaction(t, { skipPreflight: r });
                                            await nc(this.connection, n), e.push(n) } return { txIds: e, signedTxs: a } } return { txIds: await Promise.all(a.map(async e => await this.connection.sendTransaction(e, { skipPreflight: r }))), signedTxs: a } } if (this.signAllTransactions) { let e = await this.signAllTransactions(a); if (n) { let t = 0,
                                            n = [],
                                            o = async() => { if (!e[t]) return; let a = await this.connection.sendTransaction(e[t], { skipPreflight: r });
                                                n.push({ txId: a, status: "sent", signedTx: e[t] }), null == i || i([...n]), t++, this.connection.onSignature(a, e => { let t = n.findIndex(e => e.txId === a);
                                                    t > -1 && (n[t].status = e.err ? "error" : "success"), null == i || i([...n]), e.err || o() }, "processed"), this.connection.getSignatureStatus(a) }; return o(), { txIds: [], signedTxs: e } } { let t = []; for (let n = 0; n < e.length; n += 1) { let i = await this.connection.sendTransaction(e[n], { skipPreflight: r });
                                            t.push(i) } return { txIds: t, signedTxs: e } } } throw Error("please provide owner in keypair format or signAllTransactions function") }, extInfo: i || {} } }
                    async sizeCheckBuild(e) { var t; let n = e || {},
                            { computeBudgetConfig: i } = n,
                            o = E(n, ["computeBudgetConfig"]),
                            r = i ? ns(i) : { instructions: [], instructionTypes: [] },
                            a = this.signers.reduce((e, t) => F(_({}, e), {
                                [t.publicKey.toBase58()]: t }), {}),
                            s = [],
                            u = [],
                            c = []; if (this.allInstructions.forEach(e => { let t = [...c, e],
                                    n = i ? [...r.instructions, ...t] : t,
                                    o = [...new Set(t.map(e => e.keys.filter(e => e.isSigner).map(e => e.pubkey.toString())).flat()).values()].map(e => new h.nh(e)); if (c.length < 12 && ng({ instructions: n, payer: this.feePayer, signers: o }) || ng({ instructions: t, payer: this.feePayer, signers: o })) c.push(e);
                                else { if (0 === c.length) throw Error("item ins too big");
                                    ng({ instructions: i ? [...r.instructions, ...c] : [...c], payer: this.feePayer, signers: o }) ? s.push(new h.YW().add(...r.instructions, ...c)) : s.push(new h.YW().add(...c)), u.push(Array.from(new Set(c.map(e => e.keys.filter(e => e.isSigner).map(e => e.pubkey.toString())).flat())).map(e => a[e]).filter(e => void 0 !== e)), c = [e] } }), c.length > 0) { let e = [...new Set(c.map(e => e.keys.filter(e => e.isSigner).map(e => e.pubkey.toString())).flat()).values()].map(e => a[e]).filter(e => void 0 !== e);
                            ng({ instructions: i ? [...r.instructions, ...c] : [...c], payer: this.feePayer, signers: e.map(e => e.publicKey) }) ? s.push(new h.YW().add(...r.instructions, ...c)) : s.push(new h.YW().add(...c)), u.push(e) } return s.forEach(e => e.feePayer = this.feePayer), null != (t = this.owner) && t.signer && u.forEach(e => { e.some(e => e.publicKey.equals(this.owner.publicKey)) || e.push(this.owner.signer) }), { builder: this, transactions: s, signers: u, instructionTypes: this.instructionTypes, execute: async e => { var t; let { sequentially: n, onTxUpdate: i, recentBlockHash: o, skipPreflight: r = !0 } = e || {}, a = null != o ? o : await nu(this.connection, this.blockhashCommitment); if (s.forEach(async(e, t) => { e.recentBlockhash = a, u[t].length && e.sign(...u[t]) }), nk(s), null != (t = this.owner) && t.isKeyPair) { if (n) { let e = []; for (let t of s) { let n = await (0, h.BV)(this.connection, t, this.signers.find(e => e.publicKey.equals(this.owner.publicKey)) ? this.signers : [...this.signers, this.owner.signer], { skipPreflight: r });
                                            e.push(n) } return { txIds: e, signedTxs: s } } return { txIds: await Promise.all(s.map(async e => await this.connection.sendRawTransaction(e.serialize(), { skipPreflight: r }))), signedTxs: s } } if (this.signAllTransactions) { let e = await this.signAllTransactions(s); if (n) { let t = 0,
                                            n = [],
                                            o = async() => { if (!e[t]) return; let a = await this.connection.sendRawTransaction(e[t].serialize(), { skipPreflight: r });
                                                n.push({ txId: a, status: "sent", signedTx: e[t] }), null == i || i([...n]), t++, this.connection.onSignature(a, e => { let t = n.findIndex(e => e.txId === a);
                                                    t > -1 && (n[t].status = e.err ? "error" : "success"), null == i || i([...n]), e.err || o() }, "processed"), this.connection.getSignatureStatus(a) }; return await o(), { txIds: n.map(e => e.txId), signedTxs: e } } { let t = []; for (let n = 0; n < e.length; n += 1) { let i = await this.connection.sendRawTransaction(e[n].serialize(), { skipPreflight: r });
                                            t.push(i) } return { txIds: t, signedTxs: e } } } throw Error("please provide owner in keypair format or signAllTransactions function") }, extInfo: o || {} } }
                    async sizeCheckBuildV0(e) { var t; let n = e || {},
                            { computeBudgetConfig: i, lookupTableCache: o = {}, lookupTableAddress: r = [] } = n,
                            a = E(n, ["computeBudgetConfig", "lookupTableCache", "lookupTableAddress"]),
                            s = _(_({}, "devnet" === this.cluster ? {} : nQ), o),
                            u = Array.from(new Set([...this.lookupTableAddress, ...r])),
                            c = []; for (let e of u) void 0 === s[e] && c.push(new h.nh(e)); for (let [e, t] of Object.entries(await nj({ connection: this.connection, address: c }))) s[e] = t; let l = i ? ns(i) : { instructions: [], instructionTypes: [] },
                            d = await nu(this.connection, this.blockhashCommitment),
                            m = this.signers.reduce((e, t) => F(_({}, e), {
                                [t.publicKey.toBase58()]: t }), {}),
                            p = [],
                            g = [],
                            f = []; if (this.allInstructions.forEach(e => { let t = [...f, e],
                                    n = i ? [...l.instructions, ...t] : t; if (f.length < 12 && nf({ instructions: n, payer: this.feePayer, lookupTableAddressAccount: s }) || nf({ instructions: t, payer: this.feePayer, lookupTableAddressAccount: s })) f.push(e);
                                else { if (0 === f.length) throw Error("item ins too big"); let t = {}; for (let e of[...new Set(u)]) void 0 !== s[e] && (t[e] = s[e]); if (i && nf({ instructions: [...l.instructions, ...f], payer: this.feePayer, lookupTableAddressAccount: s, recentBlockhash: d })) { let e = new h.$Z({ payerKey: this.feePayer, recentBlockhash: d, instructions: [...l.instructions, ...f] }).compileToV0Message(Object.values(s));
                                        p.push(new h.GS(e)) } else { let e = new h.$Z({ payerKey: this.feePayer, recentBlockhash: d, instructions: [...f] }).compileToV0Message(Object.values(s));
                                        p.push(new h.GS(e)) }
                                    g.push(Array.from(new Set(f.map(e => e.keys.filter(e => e.isSigner).map(e => e.pubkey.toString())).flat())).map(e => m[e]).filter(e => void 0 !== e)), f = [e] } }), f.length > 0) { let e = [...new Set(f.map(e => e.keys.filter(e => e.isSigner).map(e => e.pubkey.toString())).flat()).values()].map(e => m[e]).filter(e => void 0 !== e); if (i && nf({ instructions: [...l.instructions, ...f], payer: this.feePayer, lookupTableAddressAccount: s, recentBlockhash: d })) { let e = new h.$Z({ payerKey: this.feePayer, recentBlockhash: d, instructions: [...l.instructions, ...f] }).compileToV0Message(Object.values(s));
                                p.push(new h.GS(e)) } else { let e = new h.$Z({ payerKey: this.feePayer, recentBlockhash: d, instructions: [...f] }).compileToV0Message(Object.values(s));
                                p.push(new h.GS(e)) }
                            g.push(e) } return null != (t = this.owner) && t.signer && g.forEach(e => { e.some(e => e.publicKey.equals(this.owner.publicKey)) || e.push(this.owner.signer) }), { builder: this, transactions: p, buildProps: e, signers: g, instructionTypes: this.instructionTypes, execute: async e => { var t; let { sequentially: n, onTxUpdate: i, recentBlockHash: o, skipPreflight: r = !0 } = e || {}; if (p.map(async(e, t) => { g[t].length && e.sign(g[t]), o && (e.message.recentBlockhash = o) }), nk(p), null != (t = this.owner) && t.isKeyPair) { if (n) { let e = []; for (let t of p) { let n = await this.connection.sendTransaction(t, { skipPreflight: r });
                                            await nc(this.connection, n), e.push(n) } return { txIds: e, signedTxs: p } } return { txIds: await Promise.all(p.map(async e => await this.connection.sendTransaction(e, { skipPreflight: r }))), signedTxs: p } } if (this.signAllTransactions) { let e = await this.signAllTransactions(p); if (n) { let t = 0,
                                            n = [],
                                            o = async() => { if (!e[t]) return; let a = await this.connection.sendTransaction(e[t], { skipPreflight: r });
                                                n.push({ txId: a, status: "sent", signedTx: e[t] }), null == i || i([...n]), t++, this.connection.onSignature(a, e => { let t = n.findIndex(e => e.txId === a);
                                                    t > -1 && (n[t].status = e.err ? "error" : "success"), null == i || i([...n]), e.err || o() }, "processed"), this.connection.getSignatureStatus(a) }; return o(), { txIds: [], signedTxs: e } } { let t = []; for (let n = 0; n < e.length; n += 1) { let i = await this.connection.sendTransaction(e[n], { skipPreflight: r });
                                            t.push(i) } return { txIds: t, signedTxs: e } } } throw Error("please provide owner in keypair format or signAllTransactions function") }, extInfo: a || {} } } },
                n$ = ((s = n$ || {}).ALL = "all", s.Strict = "strict", s),
                nY = ((u = nY || {}).All = "all", u.Standard = "standard", u.Concentrated = "concentrated", u.AllFarm = "allFarm", u.StandardFarm = "standardFarm", u.ConcentratedFarm = "concentratedFarm", u),
                nJ = { BASE_HOST: "https://api-v3.Nova Bot.io", OWNER_BASE_HOST: "https://owner-v1.Nova Bot.io", SERVICE_BASE_HOST: "https://service.Nova Bot.io", MONITOR_BASE_HOST: "https://monitor.Nova Bot.io", SERVICE_1_BASE_HOST: "https://service-v1.Nova Bot.io", SEND_TRANSACTION: "/send-transaction", FARM_ARP: "/main/farm/info", FARM_ARP_LINE: "/main/farm-apr-tv", CLMM_CONFIG: "/main/clmm-config", CPMM_CONFIG: "/main/cpmm-config", VERSION: "/main/version", CHECK_AVAILABILITY: "/v3/main/AvailabilityCheckAPI", RPCS: "/main/rpcs", INFO: "/main/info", STAKE_POOLS: "/main/stake-pools", CHAIN_TIME: "/main/chain-time", TOKEN_LIST: "/mint/list", MINT_INFO_ID: "/mint/ids", JUP_TOKEN_LIST: "https://tokens.jup.ag/tokens?tags=lst,community", POOL_LIST: "/pools/info/list", POOL_SEARCH_BY_ID: "/pools/info/ids", POOL_SEARCH_MINT: "/pools/info/mint", POOL_SEARCH_LP: "/pools/info/lps", POOL_KEY_BY_ID: "/pools/key/ids", POOL_LIQUIDITY_LINE: "/pools/line/liquidity", POOL_POSITION_LINE: "/pools/line/position", FARM_INFO: "/farms/info/ids", FARM_LP_INFO: "/farms/info/lp", FARM_KEYS: "/farms/key/ids", OWNER_CREATED_FARM: "/create-pool/{owner}", OWNER_IDO: "/main/ido/{owner}", OWNER_STAKE_FARMS: "/position/stake/{owner}", OWNER_LOCK_POSITION: "/position/clmm-lock/{owner}", IDO_KEYS: "/ido/key/ids", SWAP_HOST: "https://transaction-v1.Nova Bot.io", SWAP_COMPUTE: "/compute/", SWAP_TX: "/transaction/", MINT_PRICE: "/mint/price", MIGRATE_CONFIG: "/main/migrate-lp", PRIORITY_FEE: "/main/auto-fee", JITO: "https://mainnet.block-engine.jito.wtf", JITO_TRANSACTION: "/api/v1/transactions", JITO_BUNDLE: "/api/v1/bundles", CPMM_LOCK: "https://dynamic-ipfs.Nova Bot.io/lock/cpmm/position" };
            _({}, nJ); var n1 = "ray_tab_hash",
                n0 = "ray_req_hash",
                n4 = () => { window; let e = sessionStorage.getItem(n1); return e || (e = `ray-${Date.now()}`, sessionStorage.setItem(n1, e)), e },
                n6 = async e => { var { logCount: t = 1e3, removeLastLog: n } = e, i = E(e, ["logCount", "removeLastLog"]);
                    window; let o = JSON.parse(localStorage.getItem(n0) || "[]").slice(0, t - 1);
                    n && o.pop(), new Blob([JSON.stringify(i.data)]).size > 1024 && (i.data = JSON.stringify(i.data).substring(0, 200) + "..."), o.unshift(F(_({}, i), { time: Date.now(), session: n4() })); try { localStorage.setItem(n0, JSON.stringify(o)) } catch { if (n) { let e = !1,
                                t = JSON.stringify(i.data).substring(0, 100); for (o[0].data = t + (t.length > 100 ? "..." : ""); !e;) { o.pop(); let t = JSON.stringify(i.data).substring(0, 100);
                                o[0].data = t + (t.length > 100 ? "..." : ""); try { localStorage.setItem(n0, JSON.stringify(o)), e = !0 } catch { e = !1 } } return new Promise(e => e()) } return n6(F(_({}, i), { logCount: t, removeLastLog: !0 })) } },
                n2 = X("Nova Bot_Api"),
                n5 = new Map,
                n8 = class { constructor({ cluster: e, timeout: t, logRequests: n, logCount: i, urlConfigs: o }) { this.cluster = e, this.urlConfigs = o || {}, this.logCount = i || 1e3, this.api = p.Z.create({ baseURL: this.urlConfigs.BASE_HOST || nJ.BASE_HOST, timeout: t }), this.api.interceptors.request.use(e => { let { method: t, baseURL: n, url: i } = e; return n2.debug(`${null==t?void 0:t.toUpperCase()} ${n}${i}`), e }, e => (n2.error("Request failed"), Promise.reject(e))), this.api.interceptors.response.use(e => { let { config: t, data: i, status: o } = e, { method: r, baseURL: a, url: s } = t; return n && n6({ status: o, url: `${a}${s}`, params: t.params, data: i, logCount: this.logCount }), n2.debug(`${null==r?void 0:r.toUpperCase()} ${a}${s}  ${o}`), i }, e => { let { config: t, response: i = {} } = e, { status: o } = i, { method: r, baseURL: a, url: s } = t; return n && n6({ status: o, url: `${a}${s}`, params: t.params, data: e.message, logCount: this.logCount }), n2.error(`${r.toUpperCase()} ${a}${s} ${o||e.message}`), Promise.reject(e) }) }
                    async getClmmConfigs() { return (await this.api.get(this.urlConfigs.CLMM_CONFIG || nJ.CLMM_CONFIG)).data }
                    async getCpmmConfigs() { return (await this.api.get(this.urlConfigs.CPMM_CONFIG || nJ.CPMM_CONFIG)).data }
                    async getClmmPoolLines(e) { return (await this.api.get(`${this.urlConfigs.POOL_LIQUIDITY_LINE||nJ.POOL_LIQUIDITY_LINE}?pool_id=${e}`)).data }
                    async getBlockSlotCountForSecond(e) { if (!e) return 2; let t = (await p.Z.post(e, { id: "getRecentPerformanceSamples", jsonrpc: "2.0", method: "getRecentPerformanceSamples", params: [4] })).result.map(e => e.numSlots); return t.reduce((e, t) => e + t, 0) / t.length / 60 }
                    async getChainTimeOffset() { return (await this.api.get(this.urlConfigs.CHAIN_TIME || nJ.CHAIN_TIME)).data }
                    async getRpcs() { return this.api.get(this.urlConfigs.RPCS || nJ.RPCS) }
                    async getTokenList() { return (await this.api.get(this.urlConfigs.TOKEN_LIST || nJ.TOKEN_LIST)).data }
                    async getJupTokenList() { return this.api.get("", { baseURL: this.urlConfigs.JUP_TOKEN_LIST || nJ.JUP_TOKEN_LIST }) }
                    async getTokenInfo(e) { return (await this.api.get((this.urlConfigs.MINT_INFO_ID || nJ.MINT_INFO_ID) + `?mints=${e.map(e=>e.toString()).join(",")}`)).data }
                    async getPoolList(e = {}) { let { type: t = "all", sort: n = "liquidity", order: i = "desc", page: o = 0, pageSize: r = 100 } = e; return (await this.api.get((this.urlConfigs.POOL_LIST || nJ.POOL_LIST) + `?poolType=${t}&poolSortField=${n}&sortType=${i}&page=${o}&pageSize=${r}`)).data }
                    async fetchPoolById(e) { let { ids: t } = e; return (await this.api.get((this.urlConfigs.POOL_SEARCH_BY_ID || nJ.POOL_SEARCH_BY_ID) + `?ids=${t}`)).data }
                    async fetchPoolKeysById(e) { let { idList: t } = e, n = [], i = t.filter(e => !n5.has(e) || (n.push(n5.get(e)), !1)), o = []; return i.length && (o = (await this.api.get((this.urlConfigs.POOL_KEY_BY_ID || nJ.POOL_KEY_BY_ID) + `?ids=${i.join(",")}`)).data.filter(Boolean)).forEach(e => { n5.set(e.id, e) }), n.concat(o) }
                    async fetchPoolByMints(e) { let { mint1: t, mint2: n, type: i = "all", sort: o = "default", order: r = "desc", page: a = 1 } = e, [s, u] = [t && t$(t).toBase58(), n && "undefined" !== n ? t$(n).toBase58() : ""], [c, l] = u && s > u ? [u, s] : [s, u]; return (await this.api.get((this.urlConfigs.POOL_SEARCH_MINT || nJ.POOL_SEARCH_MINT) + `?mint1=${c}&mint2=${l}&poolType=${i}&poolSortField=${o}&sortType=${r}&pageSize=100&page=${a}`)).data }
                    async fetchFarmInfoById(e) { let { ids: t } = e; return (await this.api.get((this.urlConfigs.FARM_INFO || nJ.FARM_INFO) + `?ids=${t}`)).data }
                    async fetchFarmKeysById(e) { let { ids: t } = e; return (await this.api.get((this.urlConfigs.FARM_KEYS || nJ.FARM_KEYS) + `?ids=${t}`)).data }
                    async fetchAvailabilityStatus() { return (await this.api.get(this.urlConfigs.CHECK_AVAILABILITY || nJ.CHECK_AVAILABILITY)).data }
                    async sendTxToJito(e, t) { let n = t ? this.urlConfigs.JITO_BUNDLE || nJ.JITO_BUNDLE : this.urlConfigs.JITO_TRANSACTION || nJ.JITO_TRANSACTION; return (await this.api.post(n, { jsonrpc: "2.0", id: 1, method: t ? "sendBundle" : "sendTransaction", params: e }, { baseURL: this.urlConfigs.JITO || nJ.JITO })).data } },
                n3 = "please provide owner in load() initialization or you can set by calling Nova Bot.setOwner(owner)",
                n7 = (...e) => e.map(e => { try { return "object" == typeof e ? JSON.stringify(e) : e } catch { return e } }).join(", "),
                n9 = class { constructor({ scope: e, moduleName: t }) { this.disabled = !1, this.scope = e, this.logger = X(t) }
                    createTxBuilder(e) { return this.scope.checkOwner(), new nZ({ connection: this.scope.connection, feePayer: e || this.scope.ownerPubKey, cluster: this.scope.cluster, owner: this.scope.owner, blockhashCommitment: this.scope.blockhashCommitment, api: this.scope.api, signAllTransactions: this.scope.signAllTransactions }) }
                    logDebug(...e) { this.logger.debug(n7(e)) }
                    logInfo(...e) { this.logger.info(n7(e)) }
                    logAndCreateError(...e) { throw Error(n7(e)) }
                    checkDisabled() {
                        (this.disabled || !this.scope) && this.logAndCreateError("module not working") } };

            function ie(e, ...t) { if (!(e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected"); if (t.length > 0 && !t.includes(e.length)) throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`) }

            function it(e, t = !0) { if (e.destroyed) throw Error("Hash instance has been destroyed"); if (t && e.finished) throw Error("Hash#digest() has already been called") } var ii = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
                io = (e, t) => e << 32 - t | e >>> t;

            function ir(e) { return "string" == typeof e && (e = function(e) { if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`); return new Uint8Array(new TextEncoder().encode(e)) }(e)), ie(e), e }
            new Uint8Array(new Uint32Array([287454020]).buffer)[0]; var ia = class { clone() { return this._cloneInto() } },
                is = (e, t, n) => e & t ^ ~e & n,
                iu = (e, t, n) => e & t ^ e & n ^ t & n,
                ic = class extends ia { constructor(e, t, n, i) { super(), this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = ii(this.buffer) }
                    update(e) { it(this); let { view: t, buffer: n, blockLen: i } = this, o = (e = ir(e)).length; for (let r = 0; r < o;) { let a = Math.min(i - this.pos, o - r); if (a === i) { let t = ii(e); for (; i <= o - r; r += i) this.process(t, r); continue }
                            n.set(e.subarray(r, r + a), this.pos), this.pos += a, r += a, this.pos === i && (this.process(t, 0), this.pos = 0) } return this.length += e.length, this.roundClean(), this }
                    digestInto(e) { it(this),
                            function(e, t) { ie(e); let n = t.outputLen; if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`) }(e, this), this.finished = !0; let { buffer: t, view: n, blockLen: i, isLE: o } = this, { pos: r } = this;
                        t[r++] = 128, this.buffer.subarray(r).fill(0), this.padOffset > i - r && (this.process(n, 0), r = 0); for (let e = r; e < i; e++) t[e] = 0;
                        (function(e, t, n, i) { if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, n, i); let o = BigInt(32),
                                r = BigInt(4294967295),
                                a = Number(n >> o & r),
                                s = Number(n & r);
                            e.setUint32(t + (i ? 4 : 0), a, i), e.setUint32(t + (i ? 0 : 4), s, i) })(n, i - 8, BigInt(8 * this.length), o), this.process(n, 0); let a = ii(e),
                            s = this.outputLen; if (s % 4) throw Error("_sha2: outputLen should be aligned to 32bit"); let u = s / 4,
                            c = this.get(); if (u > c.length) throw Error("_sha2: outputLen bigger than state"); for (let e = 0; e < u; e++) a.setUint32(4 * e, c[e], o) }
                    digest() { let { buffer: e, outputLen: t } = this;
                        this.digestInto(e); let n = e.slice(0, t); return this.destroy(), n }
                    _cloneInto(e) { e || (e = new this.constructor), e.set(...this.get()); let { blockLen: t, buffer: n, length: i, finished: o, destroyed: r, pos: a } = this; return e.length = i, e.pos = a, e.finished = o, e.destroyed = r, i % t && e.buffer.set(n), e } },
                il = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                id = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                im = new Uint32Array(64),
                ip = class extends ic { constructor() { super(64, 32, 8, !1), this.A = 0 | id[0], this.B = 0 | id[1], this.C = 0 | id[2], this.D = 0 | id[3], this.E = 0 | id[4], this.F = 0 | id[5], this.G = 0 | id[6], this.H = 0 | id[7] }
                    get() { let { A: e, B: t, C: n, D: i, E: o, F: r, G: a, H: s } = this; return [e, t, n, i, o, r, a, s] }
                    set(e, t, n, i, o, r, a, s) { this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | i, this.E = 0 | o, this.F = 0 | r, this.G = 0 | a, this.H = 0 | s }
                    process(e, t) { for (let n = 0; n < 16; n++, t += 4) im[n] = e.getUint32(t, !1); for (let e = 16; e < 64; e++) { let t = im[e - 15],
                                n = im[e - 2],
                                i = io(t, 7) ^ io(t, 18) ^ t >>> 3,
                                o = io(n, 17) ^ io(n, 19) ^ n >>> 10;
                            im[e] = o + im[e - 7] + i + im[e - 16] | 0 } let { A: n, B: i, C: o, D: r, E: a, F: s, G: u, H: c } = this; for (let e = 0; e < 64; e++) { let t = c + (io(a, 6) ^ io(a, 11) ^ io(a, 25)) + is(a, s, u) + il[e] + im[e] | 0,
                                l = (io(n, 2) ^ io(n, 13) ^ io(n, 22)) + iu(n, i, o) | 0;
                            c = u, u = s, s = a, a = r + t | 0, r = o, o = i, i = n, n = t + l | 0 }
                        n = n + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, r = r + this.D | 0, a = a + this.E | 0, s = s + this.F | 0, u = u + this.G | 0, c = c + this.H | 0, this.set(n, i, o, r, a, s, u, c) }
                    roundClean() { im.fill(0) }
                    destroy() { this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0) } },
                ih = (c = () => new ip, i = e => c().update(ir(e)).digest(), o = c(), i.outputLen = o.outputLen, i.blockLen = o.blockLen, i.create = () => c(), i),
                ig = C.Ar,
                iw = C.vA,
                iy = (C.EJ, C.VQ, C.fP),
                ik = (C.t6, C._H, C.u8),
                ib = C.KB,
                iA = (C.Vb, C.Jq),
                iI = (C.ut, C.aq, C._O),
                iS = (C.Lb, C.b7, C.Gj, C.qY, C.hn, C.$r, C.s8, C.Tl, C.aQ, C.Xo);
            C._n, C.Yt, C.gM, C.xP, C.O9, C.u, C.IS, C.hO, C.LN, C.xn, C.WZ, C.eh, C.Mn; var iT = C.A9,
                iP = (C.G0, C.K_, C.Ik),
                iB = (C.ZZ, C.KA, C.pc);
            C.cv; var iv = class extends ig { constructor(e, t, n) { super(e, n), this.blob = iP(e), this.signed = t }
                    decode(e, t = 0) { let n = new k(this.blob.decode(e, t), 10, "le"); return this.signed ? n.fromTwos(8 * this.span).clone() : n }
                    encode(e, t, n = 0) { return "number" == typeof e && (e = new k(e)), this.signed && (e = e.toTwos(8 * this.span)), this.blob.encode(e.toArrayLike(x, "le", this.span), t, n) } },
                iC = class extends ig { constructor(e) { super(8, e), this._lower = iB(iA(), !1), this._upper = iB(iA(), !1) }
                    addBoolean(e) { this._lower.fields.length < 32 ? this._lower.addBoolean(e) : this._upper.addBoolean(e) }
                    decode(e, t = 0) { let n = this._lower.decode(e, t),
                            i = this._upper.decode(e, t + this._lower.span); return _(_({}, n), i) }
                    encode(e, t, n = 0) { return this._lower.encode(e, t, n) + this._upper.encode(e, t, n + this._lower.span) } };

            function ix(e) { return new iy(1, e) }

            function iO(e) { return new iy(4, e) }

            function iq(e) { return new iv(8, !1, e) }

            function iK(e) { return new iv(16, !1, e) }

            function iW(e) { return new iv(8, !0, e) } var iM = class extends ig { constructor(e, t, n, i) { super(e.span, i), this.layout = e, this.decoder = t, this.encoder = n }
                decode(e, t) { return this.decoder(this.layout.decode(e, t)) }
                encode(e, t, n) { return this.layout.encode(this.encoder(e), t, n) }
                getSpan(e, t) { return this.layout.getSpan(e, t) } };

            function iL(e) { return new iM(iP(32), e => new h.nh(e), e => e.toBuffer(), e) }

            function iR(e) { return new iM(ik(), i_, iF, e) }

            function i_(e) { if (0 === e) return !1; if (1 === e) return !0; throw Error("Invalid bool: " + e) }

            function iF(e) { return e ? 1 : 0 } var iE = class extends iw { decode(e, t) { return super.decode(e, t) } };

            function iD(e, t, n) { return new iE(e, t, n) }

            function iV(e, t, n) { let i; return iT(e, "number" == typeof t ? t : (0, k.isBN)(t) ? t.toNumber() : new Proxy(t, {get(e, t) { if (!i) { let t = Reflect.get(e, "count");
                            i = (0, k.isBN)(t) ? t.toNumber() : t, Reflect.set(e, "count", i) } return Reflect.get(e, t) }, set: (e, t, n) => ("count" === t && (i = n), Reflect.set(e, t, n)) }), n) } var iN = iD([iL("mint"), iL("owner"), iq("amount"), iO("delegateOption"), iL("delegate"), ix("state"), iO("isNativeOption"), iq("isNative"), iq("delegatedAmount"), iO("closeAuthorityOption"), iL("closeAuthority")]);

            function iU({ owner: e, solAccountResp: t, tokenAccountResp: n }) { let i = [],
                    o = []; for (let { pubkey: t, account: r }
                    of n.value) { let n = iN.decode(r.data),
                        { mint: a, amount: s } = n;
                    i.push({ publicKey: t, mint: a, amount: s, isAssociated: nb(e, a, r.owner).publicKey.equals(t), isNative: !1, programId: r.owner }), o.push({ pubkey: t, accountInfo: n, programId: r.owner }) } return t && i.push({ mint: h.nh.default, amount: new k(String(t.lamports)), isNative: !0, programId: t.owner }), { tokenAccounts: i, tokenAccountRawInfos: o } }

            function iX({ fromPublicKey: e, programId: t = w.H_ }) { let n, i = h.RG.generate().publicKey.toBase58().slice(0, 32); return { publicKey: (n = ih(x.concat([e.toBuffer(), x.from(i), t.toBuffer()])), new h.nh(n)), seed: i } }

            function iH(e) { let { mint: t, tokenAccount: n, owner: i, programId: o = w.H_ } = e; return (0, P.FJ)(n, t, i, o) }

            function iG(e) { let { tokenAccount: t, payer: n, multiSigners: i = [], owner: o, programId: r = w.H_ } = e; return (0, B.Zu)(t, n, o, i, r) }
            async function iz(e) { let { connection: t, amount: n, commitment: i, payer: o, owner: r, skipCloseAccount: a } = e, s = await t.getMinimumBalanceForRentExemption(iN.span, i), u = tA(n).add(new k(s)), c = iX({ fromPublicKey: o, programId: w.H_ }); return { addresses: { newAccount: c.publicKey }, signers: [], instructions: [h.yc.createAccountWithSeed({ fromPubkey: o, basePubkey: o, seed: c.seed, newAccountPubkey: c.publicKey, lamports: u.toNumber(), space: iN.span, programId: w.H_ }), iH({ mint: new h.nh(tM.address), tokenAccount: c.publicKey, owner: r, programId: w.H_ })], instructionTypes: [nr.CreateAccount, nr.InitAccount], endInstructionTypes: a ? [] : [nr.CloseAccount], endInstructions: a ? [] : [iG({ tokenAccount: c.publicKey, payer: o, owner: r })] } }
            X("Nova Bot_Util"); var ij = class extends n9 { constructor(e) { super(e), this._tokenAccounts = [], this._tokenAccountRawInfos = [], this._accountListener = [], this._clientOwnedToken = !1, this._accountFetchTime = 0; let { tokenAccounts: t, tokenAccountRawInfos: n } = e;
                        this._tokenAccounts = t || [], this._tokenAccountRawInfos = n || [], this._clientOwnedToken = !!(t || n) }
                    get tokenAccounts() { return this._tokenAccounts }
                    get tokenAccountRawInfos() { return this._tokenAccountRawInfos }
                    updateTokenAccount({ tokenAccounts: e, tokenAccountRawInfos: t }) { return e && (this._tokenAccounts = e), t && (this._tokenAccountRawInfos = t), this._accountChangeListenerId && this.scope.connection.removeAccountChangeListener(this._accountChangeListenerId), this._accountChangeListenerId = void 0, this._clientOwnedToken = !0, this }
                    addAccountChangeListener(e) { return this._accountListener.push(e), this }
                    removeAccountChangeListener(e) { return this._accountListener = this._accountListener.filter(t => t !== e), this }
                    getAssociatedTokenAccount(e, t) { return nb(this.scope.ownerPubKey, e, t).publicKey }
                    resetTokenAccounts() { this._clientOwnedToken || (this._tokenAccounts = [], this._tokenAccountRawInfos = []) }
                    async fetchWalletTokenAccounts(e) { if (this._clientOwnedToken || !(null != e && e.forceUpdate) && this._tokenAccounts.length && Date.now() - this._accountFetchTime < 18e4) return { tokenAccounts: this._tokenAccounts, tokenAccountRawInfos: this._tokenAccountRawInfos };
                        this.scope.checkOwner(); let t = _(_({}, {}), e),
                            [n, i, o] = await Promise.all([this.scope.connection.getAccountInfo(this.scope.ownerPubKey, t.commitment), this.scope.connection.getTokenAccountsByOwner(this.scope.ownerPubKey, { programId: w.H_ }, t.commitment), this.scope.connection.getTokenAccountsByOwner(this.scope.ownerPubKey, { programId: w.nA }, t.commitment)]),
                            { tokenAccounts: r, tokenAccountRawInfos: a } = iU({ owner: this.scope.ownerPubKey, solAccountResp: n, tokenAccountResp: { context: i.context, value: [...i.value, ...o.value] } }); return this._tokenAccounts = r, this._tokenAccountRawInfos = a, this._accountFetchTime = Date.now(), this._accountChangeListenerId && this.scope.connection.removeAccountChangeListener(this._accountChangeListenerId), this._accountChangeListenerId = this.scope.connection.onAccountChange(this.scope.ownerPubKey, () => this.fetchWalletTokenAccounts({ forceUpdate: !0 }), null == e ? void 0 : e.commitment), { tokenAccounts: r, tokenAccountRawInfos: a } }
                    async getCreatedTokenAccount({ mint: e, programId: t = w.H_, associatedOnly: n = !0 }) { await this.fetchWalletTokenAccounts(); let i = this._tokenAccounts.filter(({ mint: t }) => null == t ? void 0 : t.equals(e)).sort((e, t) => e.amount.lt(t.amount) ? 1 : -1),
                            o = this.getAssociatedTokenAccount(e, t); for (let e of i) { let { publicKey: t } = e; if (t && (!n || n && o.equals(t))) return t } }
                    async getOrCreateTokenAccount(e) { var t, n, i, o;
                        await this.fetchWalletTokenAccounts(); let { mint: r, createInfo: a, associatedOnly: s, owner: u, notUseTokenAccount: c = !1, skipCloseAccount: l = !1, checkCreateATAOwner: d = !1 } = e, m = new h.nh(e.tokenProgram || w.H_), p = this.getAssociatedTokenAccount(r, new h.nh(m)), g = (c ? [] : this.tokenAccountRawInfos).filter(e => e.accountInfo.mint.equals(r) && (!s || e.pubkey.equals(p))).sort((e, t) => e.accountInfo.amount.lt(t.accountInfo.amount) ? 1 : -1); if (void 0 === a || g.length > 0) return g.length > 0 ? { account: g[0].pubkey } : {}; let f = { instructions: [], endInstructions: [], signers: [], instructionTypes: [], endInstructionTypes: [] }; if (s) { let e = (0, S.Ek)(u, p, u, r, m); if (d) { let n = await this.scope.connection.getAccountInfo(p); if (null === n) null == (t = f.instructions) || t.push(e), f.instructionTypes.push(nr.CreateATA);
                                else if (!(n.owner.equals(m) && T.p0.decode(n.data).mint.equals(r) && T.p0.decode(n.data).owner.equals(u))) throw Error(`create ata check error -> mint: ${r.toString()}, ata: ${p.toString()}`) } else f.instructions.push(e), f.instructionTypes.push(nr.CreateATA); if (r.equals(tQ) && a.amount) { let e = await iz({ connection: this.scope.connection, owner: this.scope.ownerPubKey, payer: a.payer || this.scope.ownerPubKey, amount: null != (n = a.amount) ? n : 0, skipCloseAccount: l });
                                f.instructions.push(...e.instructions || []), f.endInstructions.push(...e.endInstructions || []), f.instructionTypes.push(...e.instructionTypes || []), f.endInstructionTypes.push(...e.endInstructionTypes || []), a.amount && (f.instructions.push(function({ source: e, destination: t, owner: n, amount: i, multiSigners: o = [], tokenProgram: r = w.H_ }) { return (0, v.$B)(e, t, n, BigInt(String(i)), o, r) }({ source: e.addresses.newAccount, destination: p, owner: this.scope.ownerPubKey, amount: a.amount, tokenProgram: w.H_ })), f.instructionTypes.push(nr.TransferAmount)) } return l || (f.endInstructions.push(iG({ owner: u, payer: a.payer || u, tokenAccount: p, programId: m })), f.endInstructionTypes.push(nr.CloseAccount)), { account: p, instructionParams: f } } { let e = iX({ fromPublicKey: u, programId: m }),
                                t = await this.scope.connection.getMinimumBalanceForRentExemption(T.p0.span),
                                n = h.yc.createAccountWithSeed({ fromPubkey: u, basePubkey: u, seed: e.seed, newAccountPubkey: e.publicKey, lamports: t + Number(null != (o = null == (i = a.amount) ? void 0 : i.toString()) ? o : 0), space: T.p0.span, programId: m }); return f.instructions.push(n, iH({ mint: r, tokenAccount: e.publicKey, owner: this.scope.ownerPubKey, programId: m })), f.instructionTypes.push(nr.CreateAccount), f.instructionTypes.push(nr.InitAccount), l || (f.endInstructions.push(iG({ owner: u, payer: a.payer || u, tokenAccount: e.publicKey, programId: m })), f.endInstructionTypes.push(nr.CloseAccount)), { account: e.publicKey, instructionParams: f } } }
                    async checkOrCreateAta({ mint: e, programId: t = w.H_, autoUnwrapWSOLToSOL: n }) { var i;
                        await this.fetchWalletTokenAccounts(); let o = null == (i = this.scope.account.tokenAccounts.find(({ mint: t }) => (null == t ? void 0 : t.toBase58()) === e.toBase58())) ? void 0 : i.publicKey,
                            r = this.scope.ownerPubKey,
                            a = {}; if (!o) { let n = this.getAssociatedTokenAccount(e, t),
                                i = await (0, S.Ek)(r, n, r, e, t);
                            a.instructions = [i], a.instructionTypes = [nr.CreateATA], o = n } return n && tQ.toBase58() === e.toBase58() && (a.endInstructions = [iG({ owner: r, payer: r, tokenAccount: o, programId: t })], a.endInstructionTypes = [nr.CloseAccount]), { pubKey: o, newInstructions: a } }
                    async handleTokenAccount(e) { let { side: t, amount: n, mint: i, programId: o = w.H_, tokenAccount: r, payer: a = this.scope.ownerPubKey, bypassAssociatedCheck: s, skipCloseAccount: u, checkCreateATAOwner: c } = e, l = this.getAssociatedTokenAccount(i, o); if (new h.nh(tQ).equals(i)) { let e = await iz({ connection: this.scope.connection, owner: this.scope.ownerPubKey, payer: a, amount: n, skipCloseAccount: u }); return _({ tokenAccount: e.addresses.newAccount }, e) } if (!r || "out" === t && !l.equals(r) && !s) { let e = [],
                                t = (0, S.Ek)(this.scope.ownerPubKey, l, this.scope.ownerPubKey, i, o); if (c) { let n = await this.scope.connection.getAccountInfo(l); if (null === n) e.push(t);
                                else if (!(n.owner.equals(w.H_) && T.p0.decode(n.data).mint.equals(i) && T.p0.decode(n.data).owner.equals(this.scope.ownerPubKey))) throw Error(`create ata check error -> mint: ${i.toString()}, ata: ${l.toString()}`) } else e.push(t); return { tokenAccount: l, instructions: e, instructionTypes: [nr.CreateATA] } } return { tokenAccount: r } }
                    async processTokenAccount(e) { let { mint: t, programId: n = w.H_, amount: i, useSOLBalance: o, handleTokenAccount: r } = e, a, s = this.createTxBuilder(); if (t.equals(new h.nh(tQ)) && o) { let e = await this.handleTokenAccount({ side: "in", amount: i || 0, mint: t, bypassAssociatedCheck: !0, programId: n }),
                                { tokenAccount: o } = e,
                                r = E(e, ["tokenAccount"]);
                            a = o, s.addInstruction(r) } else if (!(a = await this.getCreatedTokenAccount({ mint: t, associatedOnly: !1, programId: n })) && r) { let e = await this.scope.account.handleTokenAccount({ side: "in", amount: 0, mint: t, bypassAssociatedCheck: !0, programId: n }),
                                { tokenAccount: i } = e,
                                o = E(e, ["tokenAccount"]);
                            a = i, s.addInstruction(o) } return _({ tokenAccount: a }, s.AllTxData) } },
                iQ = iD([ix("instruction")]),
                iZ = iD([ix("instruction")]),
                i$ = iD([iq("rewardState"), iq("rewardOpenTime"), iq("rewardEndTime"), iq("rewardLastUpdateTime"), iq("totalReward"), iq("totalRewardEmissioned"), iq("rewardClaimed"), iq("rewardPerSecond"), iK("accRewardPerShare"), iL("rewardVault"), iL("rewardMint"), iL("rewardSender"), iq("rewardType"), iV(iq(), 15, "padding")]),
                iY = iD([iq("state"), iq("nonce"), iL("lpVault"), iL("rewardVault"), iL(), iL(), iq(), iq(), iq("totalReward"), iK("perShareReward"), iq("lastSlot"), iq("perSlotReward")]),
                iJ = iD([iq("state"), iq("nonce"), iL("lpVault"), iL("rewardVaultA"), iq("totalRewardA"), iK("perShareRewardA"), iq("perSlotRewardA"), ix("option"), iL("rewardVaultB"), iP(7), iq("totalRewardB"), iK("perShareRewardB"), iq("perSlotRewardB"), iq("lastSlot"), iL()]),
                i1 = iD([iq(), iq("state"), iq("nonce"), iq("validRewardTokenNum"), iK("rewardMultiplier"), iq("rewardPeriodMax"), iq("rewardPeriodMin"), iq("rewardPeriodExtend"), iL("lpMint"), iL("lpVault"), iV(i$, 5, "rewardInfos"), iL("creator"), iL(), iV(iq(), 32, "padding")]),
                i0 = new Proxy(iY, { get: (e, t, n) => "decode" === t ? (...t) => { let n = e.decode(...t); return F(_({}, n), { version: 3, rewardInfos: [{ rewardVault: n.rewardVault, totalReward: n.totalReward, perSlotReward: n.perSlotReward, perShareReward: n.perShareReward }] }) } : Reflect.get(e, t, n) }),
                i4 = new Proxy(iJ, { get: (e, t, n) => "decode" === t ? (...t) => { let n = e.decode(...t); return F(_({}, n), { version: 5, rewardInfos: [{ rewardVault: n.rewardVaultA, totalReward: n.totalRewardA, perSlotReward: n.perSlotRewardA, perShareReward: n.perShareRewardA }, { rewardVault: n.rewardVaultB, totalReward: n.totalRewardB, perSlotReward: n.perSlotRewardB, perShareReward: n.perShareRewardB }] }) } : Reflect.get(e, t, n) }),
                i6 = new Proxy(i1, { get: (e, t, n) => "decode" === t ? (...t) => { let n = e.decode(...t); return F(_({}, n), { version: 6, rewardInfos: n.rewardInfos.map(e => { var t; return F(_({}, e), { rewardType: (null != (t = Object.entries(ol).find(t => String(t[1]) === e.rewardType.toString())) ? t : ["Standard SPL"])[0] }) }) }) } : Reflect.get(e, t, n) }),
                i2 = iD([iq("isSet"), iq("rewardPerSecond"), iq("rewardOpenTime"), iq("rewardEndTime"), iq("rewardType")]),
                i5 = iD([ix("instruction"), iq("nonce"), iV(i2, 5, "rewardTimeInfo")]),
                i8 = iD([ix("instruction"), iq("rewardReopenTime"), iq("rewardEndTime"), iq("rewardPerSecond")]),
                i3 = iD([ix("instruction"), iq("isSet"), iq("rewardPerSecond"), iq("rewardOpenTime"), iq("rewardEndTime"), iq("rewardType")]),
                i7 = (iD([iq("state"), iL("id"), iL("owner"), iq("deposited"), iV(iq(), 1, "rewardDebts")]), iD([iq("state"), iL("id"), iL("owner"), iq("deposited"), iV(iK(), 1, "rewardDebts"), iq(""), iq("voteLockedBalance"), iV(iq(), 15)])),
                i9 = (iD([iq("state"), iL("id"), iL("owner"), iq("deposited"), iV(iq(), 2, "rewardDebts")]), iD([iq("state"), iL("id"), iL("owner"), iq("deposited"), iV(iK(), 2, "rewardDebts"), iV(iq(), 17)])),
                oe = iD([iq(), iq("state"), iL("id"), iL("owner"), iq("deposited"), iV(iK(), 5, "rewardDebts"), iV(iq(), 16)]),
                ot = iD([ix("instruction"), iq("amount")]),
                on = iD([iL("mint"), iL("grantAuthority"), iq("baselineVoteWeightScaledFactor"), iq("maxExtraLockupVoteWeightScaledFactor"), iq("lockupSaturationSecs"), new iv(1, !0, "digitShift"), iV(ix(), 7, "reserved1"), iV(iq(), 7, "reserved2")]),
                oi = (iD([iP(8), iL("governanceProgramId"), iL("realm"), iL("realmGoverningTokenMint"), iL("realmAuthority"), iV(ix(), 32, "reserved1"), iV(on, 4, "votingMints"), iW("timeOffset"), ix("bump"), iV(ix(), 7, "reserved2"), iV(iq(), 11, "reserved3")]), iD([iW("startTime"), iW("endTime"), ix("kind"), iV(ix(), 15, "reserved")])),
                oo = iD([iV(oi, 1, "lockup"), iq("amountDeposited_native"), iq("amountInitiallyLockedNative"), iR("isUsed"), iR("allowClawback"), ix("votingMintConfigIdx"), iV(ix(), 29, "reserved")]);
            iD([iP(8), iL("voterAuthority"), iL("registrar"), iV(oo, 32, "deposits"), ix("voterBump"), ix("voterWweightRecordBump"), iV(ix(), 94, "reserved")]), X("Nova Bot_farm_config"); var or = new h.nh("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
                oa = new h.nh("FrspKwj8i3pNmKwXreTveC4fu7KL5ZbGeXdZBe2XViu1"),
                os = { 3: i7, 5: i9, 6: oe },
                ou = e => -1 !== [3, 5, 6].indexOf(e),
                oc = e => { var t; let { version: n, rewardInfos: i, rewardTokenAccountsPublicKeys: o } = e, r = `rewardInfo:${JSON.stringify(i)}, rewardAccount:${JSON.stringify(o)}`, a = { 3: () => { if (1 !== i.length || 1 !== o.length) return `rewardInfos or rewardTokenAccounts lengths not equal 1: ${r}` }, 5: () => { if (i.length !== o.length) return `rewardInfos and rewardTokenAccounts lengths not equal: ${r}` }, 6: () => { if (!o.length || i.length !== o.length) return `no rewardTokenAccounts or rewardInfos and rewardTokenAccounts lengths not equal: ${r}` } }; return null == (t = a[n]) ? void 0 : t.call(a) },
                ol = { "Standard SPL": 0, "Option tokens": 1 },
                od = {
                    [nA.toString()]: 3, [nI.toString()]: 5, [nS.toString()]: 6 },
                om = X("Nova Bot.farm.util");

            function op({ programId: e, poolId: t, mint: n, type: i }) { let { publicKey: o } = np([t.toBuffer(), n.toBuffer(), x.from("lpVault" === i ? "lp_vault_associated_seed" : "rewardVault" === i ? "reward_vault_associated_seed" : "", "utf-8")], e); return o }

            function oh({ programId: e, poolId: t, owner: n, version: i }) { let { publicKey: o } = np([t.toBuffer(), n.toBuffer(), x.from(6 === i ? "farmer_info_associated_seed" : "staker_info_v2_associated_seed", "utf-8")], e); return o } var og = ({ programId: e, poolId: t }) => np([t.toBuffer()], e);

            function of(e) { return tA(e.endTime).sub(tA(e.openTime)).mul(tA(e.perSecond)) }

            function ow(e) { let t = os[e]; return t || om.logWithError("invalid version", e), t } var oy = X("Nova Bot_farm_instruction");

            function ok(e) { let { version: t, id: n, ledger: i, programId: o, owner: r } = e, a = { 3: 9, 5: 10 }[t];
                a || oy.logWithError(`invalid farm pool version: ${t}`); let s = x.alloc(iQ.span);
                iQ.encode({ instruction: a }, s); let u = [tL({ pubkey: n }), tL({ pubkey: i }), tL({ pubkey: r, isWritable: !1 }), tL({ pubkey: h.yc.programId, isWritable: !1 }), tL({ pubkey: h.ze, isWritable: !1 })]; return { instruction: new h.Sl({ programId: o, keys: u, data: s }), instructionType: nr.FarmV3CreateLedger } }

            function ob({ payer: e, rewardVault: t, userRewardTokenPub: n, farmKeys: i, rewardInfo: o }) { let r = x.alloc(i8.span);
                i8.encode({ instruction: 3, rewardReopenTime: tA(o.openTime), rewardEndTime: tA(o.endTime), rewardPerSecond: tA(o.perSecond) }, r); let a = [tL({ pubkey: w.H_, isWritable: !1 }), tL({ pubkey: i.id }), tL({ pubkey: i.lpVault, isWritable: !1 }), tL({ pubkey: t }), tL({ pubkey: n }), tL({ pubkey: e, isWritable: !1, isSigner: !0 })]; return new h.Sl({ programId: i.programId, keys: a, data: r }) }

            function oA({ payer: e, userRewardTokenPub: t, farmKeys: n, rewardVault: i, rewardInfo: o }) { let r = x.alloc(i3.span);
                i3.encode({ instruction: 4, isSet: new k(1), rewardPerSecond: tA(o.perSecond), rewardOpenTime: tA(o.openTime), rewardEndTime: tA(o.endTime), rewardType: tA(ol[o.rewardType]) }, r); let a = [...tR, tL({ pubkey: n.id }), tL({ pubkey: n.authority, isWritable: !1 }), tL({ pubkey: o.mint, isWritable: !1 }), tL({ pubkey: i }), tL({ pubkey: t }), tL({ pubkey: e, isWritable: !1, isSigner: !0 })]; return new h.Sl({ programId: n.programId, keys: a, data: r }) }

            function oI(e) { let { farmInfo: t, farmKeys: n, lpAccount: i, rewardAccounts: o, owner: r, amount: a } = e, [s, u] = [new h.nh(t.programId), new h.nh(t.id)], c = oh({ programId: s, poolId: u, owner: r, version: 6 }), l = x.alloc(ot.span);
                ot.encode({ instruction: 2, amount: tA(a) }, l); let d = [tL({ pubkey: w.H_, isWritable: !1 }), tL({ pubkey: u }), tL({ pubkey: new h.nh(n.authority), isWritable: !1 }), tL({ pubkey: new h.nh(n.lpVault) }), tL({ pubkey: c }), tL({ pubkey: r, isWritable: !1, isSigner: !0 }), tL({ pubkey: i })]; for (let e = 0; e < n.rewardInfos.length; e++) d.push(tL({ pubkey: new h.nh(n.rewardInfos[e].vault) })), d.push(tL({ pubkey: o[e] })); return new h.Sl({ programId: s, keys: d, data: l }) }

            function oS(e) { let { farmInfo: t, farmKeys: n, lpAccount: i, rewardAccounts: o, owner: r, amount: a, userAuxiliaryLedgers: s } = e, [u, c] = [new h.nh(t.programId), new h.nh(t.id)], l = oh({ programId: u, poolId: c, owner: r, version: 5 }), d = x.alloc(ot.span);
                ot.encode({ instruction: 12, amount: tA(a) }, d); let m = [tL({ pubkey: c }), tL({ pubkey: new h.nh(n.authority), isWritable: !1 }), tL({ pubkey: l }), tL({ pubkey: r, isWritable: !1, isSigner: !0 }), tL({ pubkey: i }), tL({ pubkey: new h.nh(n.lpVault) }), tL({ pubkey: o[0] }), tL({ pubkey: new h.nh(n.rewardInfos[0].vault) }), tL({ pubkey: h.Am, isWritable: !1 }), tL({ pubkey: w.H_, isWritable: !1 })]; for (let e = 1; e < n.rewardInfos.length; e++) m.push(tL({ pubkey: o[e] })), m.push(tL({ pubkey: new h.nh(n.rewardInfos[e].vault) })); if (s)
                    for (let e of s) m.push(tL({ pubkey: e })); return new h.Sl({ programId: u, keys: m, data: d }) }

            function oT(e) { let { farmInfo: t, farmKeys: n, lpAccount: i, rewardAccounts: o, owner: r, amount: a, userAuxiliaryLedgers: s } = e, [u, c] = [new h.nh(t.programId), new h.nh(t.id)], l = oh({ programId: u, poolId: c, owner: r, version: 3 }), d = x.alloc(ot.span);
                ot.encode({ instruction: 11, amount: tA(a) }, d); let m = [tL({ pubkey: c }), tL({ pubkey: new h.nh(n.authority), isWritable: !1 }), tL({ pubkey: l }), tL({ pubkey: r, isWritable: !1, isSigner: !0 }), tL({ pubkey: i }), tL({ pubkey: new h.nh(n.lpVault) }), tL({ pubkey: o[0] }), tL({ pubkey: new h.nh(n.rewardInfos[0].vault) }), tL({ pubkey: h.Am, isWritable: !1 }), tL({ pubkey: w.H_, isWritable: !1 })]; if (s)
                    for (let e of s) m.push(tL({ pubkey: e })); return new h.Sl({ programId: u, keys: m, data: d }) }
            x.from([6, 24, 245, 52, 243, 255, 148, 25]), x.from([185, 131, 167, 186, 159, 125, 19, 67]), x.from([242, 35, 198, 137, 82, 225, 242, 182]), x.from([183, 18, 70, 156, 148, 109, 161, 34]), x.from([45, 185, 3, 36, 109, 190, 115, 169]); var oP = class extends n9 { async _getUserRewardInfo({ payer: e, rewardInfo: t }) { if (t.mint.equals(tZ)) { let n = await iz({ connection: this.scope.connection, owner: this.scope.ownerPubKey, payer: e, amount: of(F(_({}, t), { openTime: t.openTime.toString(), endTime: t.endTime.toString() })) }); return { rewardPubKey: n.addresses.newAccount, newInstruction: n } } return { rewardPubKey: await this.scope.account.getCreatedTokenAccount({ mint: t.mint, associatedOnly: !1 }) } }
                    async create({ poolInfo: e, rewardInfos: t, payer: n, programId: i = nS, txVersion: o }) { this.checkDisabled(), this.scope.checkOwner(); let r = { lpMint: new h.nh(e.lpMint.address), lockInfo: { lockMint: or, lockVault: oa }, version: 6, rewardInfos: t, programId: i },
                            a = this.createTxBuilder(),
                            s = null != n ? n : this.scope.ownerPubKey,
                            u = iX({ fromPublicKey: s, programId: r.programId }),
                            c = await this.scope.connection.getMinimumBalanceForRentExemption(i6.span);
                        a.addInstruction({ instructions: [h.yc.createAccountWithSeed({ fromPubkey: s, basePubkey: s, seed: u.seed, newAccountPubkey: u.publicKey, lamports: c, space: i6.span, programId: r.programId })] }); let { publicKey: l, nonce: d } = og({ programId: new h.nh(r.programId), poolId: u.publicKey }), m = op({ programId: r.programId, poolId: u.publicKey, mint: r.lpMint, type: "lpVault" }), p = [], g = []; for (let e of r.rewardInfos) { var f;
                            e.openTime >= e.endTime && this.logAndCreateError("start time error", "rewardInfo.rewardOpenTime", e.openTime.toString()), isNaN(ol[e.rewardType]) && this.logAndCreateError("rewardType error", e.rewardType), 0 >= Number(e.perSecond) && this.logAndCreateError("rewardPerSecond error", e.perSecond), p.push((f = e, { isSet: new k(1), rewardPerSecond: tA(f.perSecond), rewardOpenTime: tA(f.openTime), rewardEndTime: tA(f.endTime), rewardType: tA(ol[f.rewardType]) })); let { rewardPubKey: t, newInstruction: n } = await this._getUserRewardInfo({ rewardInfo: e, payer: s });
                            n && a.addInstruction(n), t || this.logAndCreateError("cannot found target token accounts", this.scope.account.tokenAccounts); let i = e.mint.equals(tZ) ? new h.nh(tM.address) : e.mint;
                            g.push({ rewardMint: i, rewardVault: op({ programId: r.programId, poolId: u.publicKey, mint: i, type: "rewardVault" }), userRewardToken: t }) } let { account: w, instructionParams: y } = await this.scope.account.getOrCreateTokenAccount({ mint: new h.nh(r.lockInfo.lockMint), owner: this.scope.ownerPubKey, skipCloseAccount: !1, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, associatedOnly: !1 });
                        y && a.addInstruction(y), w || this.logAndCreateError("cannot found lock vault", "tokenAccounts", this.scope.account.tokenAccounts); let { instruction: b, instructionType: A } = function(e) { var t; let n = x.alloc(i5.span);
                            i5.encode({ instruction: 0, nonce: new k(e.nonce), rewardTimeInfo: e.rewardInfoConfig }, n); let i = [...tR, tL({ pubkey: e.farmId }), tL({ pubkey: e.farmAuthority, isWritable: !1 }), tL({ pubkey: e.lpVault }), tL({ pubkey: e.lpMint, isWritable: !1 }), tL({ pubkey: e.lockVault }), tL({ pubkey: e.lockMint, isWritable: !1 }), tL({ pubkey: null != (t = e.lockUserAccount) ? t : tZ }), tL({ pubkey: e.owner, isWritable: !1, isSigner: !0 })]; for (let t of e.rewardInfo) i.push(tL({ pubkey: t.rewardMint, isWritable: !1 }), tL({ pubkey: t.rewardVault }), tL({ pubkey: t.userRewardToken })); return { instruction: new h.Sl({ programId: e.programId, keys: i, data: n }), instructionType: nr.FarmV6Create } }({ farmId: u.publicKey, owner: this.scope.ownerPubKey, farmAuthority: l, lpVault: m, lpMint: r.lpMint, lockVault: r.lockInfo.lockVault, lockMint: r.lockInfo.lockMint, lockUserAccount: w, programId: r.programId, rewardInfo: g, rewardInfoConfig: p, nonce: d }); return a.addInstruction({ instructions: [b], instructionTypes: [A] }).versionBuild({ txVersion: o, extInfo: { farmId: u.publicKey, farmAuthority: l, lpVault: m, lockUserAccount: w, nonce: d } }) }
                    async restartReward({ farmInfo: e, payer: t, newRewardInfo: n, txVersion: i }) { var o; let r = od[e.programId];
                        6 !== r && this.logAndCreateError("invalid farm version ", r); let a = t3((await this.scope.api.fetchFarmKeysById({ ids: e.id }))[0]),
                            s = { id: a.id, rewardInfos: e.rewardInfos, lpVault: a.lpVault, programId: a.programId };
                        n.openTime >= n.endTime && this.logAndCreateError("start time error", "newRewardInfo", n); let u = t || this.scope.ownerPubKey,
                            c = n.mint.equals(tZ) ? new h.nh(tM.address) : n.mint,
                            l = s.rewardInfos.findIndex(e => new h.nh(e.mint.address).equals(c)),
                            d = a.rewardInfos[l];
                        d || this.logAndCreateError("configuration does not exist", "rewardMint", c); let m = null != (o = d.vault) ? o : tZ,
                            p = this.createTxBuilder(),
                            { rewardPubKey: g, newInstruction: f } = await this._getUserRewardInfo({ rewardInfo: n, payer: u }); return f && p.addInstruction(f), g || this.logAndCreateError("cannot found target token accounts", this.scope.account.tokenAccounts), p.addInstruction({ instructions: [ob({ payer: this.scope.ownerPubKey, rewardVault: m, userRewardTokenPub: g, farmKeys: s, rewardInfo: n })], instructionTypes: [nr.FarmV6Restart] }).versionBuild({ txVersion: i }) }
                    async restartRewards({ farmInfo: e, payer: t, newRewardInfos: n, txVersion: i }) { var o; let r = od[e.programId];
                        6 !== r && this.logAndCreateError("invalid farm version ", r); let a = t3((await this.scope.api.fetchFarmKeysById({ ids: e.id }))[0]),
                            s = { id: a.id, rewardInfos: e.rewardInfos, lpVault: a.lpVault, programId: a.programId };
                        n.forEach(e => { e.openTime >= e.endTime && this.logAndCreateError("start time error", "newRewardInfo", e) }); let u = t || this.scope.ownerPubKey,
                            c = this.createTxBuilder(); for (let e of n) { let t = e.mint.equals(tZ) ? new h.nh(tM.address) : e.mint,
                                n = s.rewardInfos.findIndex(e => new h.nh(e.mint.address).equals(t)),
                                i = a.rewardInfos[n];
                            i || this.logAndCreateError("configuration does not exist", "rewardMint", t); let r = null != (o = i.vault) ? o : tZ,
                                { rewardPubKey: l, newInstruction: d } = await this._getUserRewardInfo({ rewardInfo: e, payer: u });
                            d && c.addInstruction(d), l || this.logAndCreateError("cannot found target token accounts", this.scope.account.tokenAccounts); let m = ob({ payer: this.scope.ownerPubKey, rewardVault: r, userRewardTokenPub: l, farmKeys: s, rewardInfo: e });
                            c.addInstruction({ instructions: [m], instructionTypes: [nr.FarmV6Restart] }) } return c.versionBuild({ txVersion: i }) }
                    async addNewRewardToken(e) { let { txVersion: t, farmInfo: n, newRewardInfo: i, payer: o } = e, r = od[n.programId];
                        6 !== r && this.logAndCreateError("invalid farm version ", r); let a = t3((await this.scope.api.fetchFarmKeysById({ ids: n.id }))[0]),
                            s = null != o ? o : this.scope.ownerPubKey,
                            u = this.createTxBuilder(),
                            c = i.mint.equals(tZ) ? new h.nh(tM.address) : i.mint,
                            l = op({ programId: new h.nh(n.programId), poolId: new h.nh(n.id), mint: c, type: "rewardVault" }),
                            { rewardPubKey: d, newInstruction: m } = await this._getUserRewardInfo({ rewardInfo: i, payer: s }); return m && u.addInstruction(m), d || this.logAndCreateError("annot found target token accounts", this.scope.account.tokenAccounts), i.mint = c, u.addInstruction({ instructions: [oA({ payer: this.scope.ownerPubKey, userRewardTokenPub: d, farmKeys: a, rewardVault: l, rewardInfo: i })], instructionTypes: [nr.FarmV6CreatorAddReward] }).versionBuild({ txVersion: t }) }
                    async addNewRewardsToken(e) { let { txVersion: t, farmInfo: n, newRewardInfos: i, payer: o } = e, r = od[n.programId];
                        6 !== r && this.logAndCreateError("invalid farm version ", r); let a = t3((await this.scope.api.fetchFarmKeysById({ ids: n.id }))[0]),
                            s = null != o ? o : this.scope.ownerPubKey,
                            u = this.createTxBuilder(); for (let e of i) { let t = e.mint.equals(tZ) ? new h.nh(tM.address) : e.mint,
                                i = op({ programId: new h.nh(n.programId), poolId: new h.nh(n.id), mint: t, type: "rewardVault" }),
                                { rewardPubKey: o, newInstruction: r } = await this._getUserRewardInfo({ rewardInfo: e, payer: s });
                            r && u.addInstruction(r), o || this.logAndCreateError("cannot found target token accounts", this.scope.account.tokenAccounts); let c = oA({ payer: this.scope.ownerPubKey, userRewardTokenPub: o, farmKeys: a, rewardVault: i, rewardInfo: F(_({}, e), { mint: t }) });
                            u.addInstruction({ instructions: [c], instructionTypes: [nr.FarmV6CreatorAddReward] }) } return u.versionBuild({ txVersion: t }) }
                    async deposit(e) { let { txVersion: t, farmInfo: n, amount: i, feePayer: o, useSOLBalance: r, associatedOnly: a = !0, checkCreateATAOwner: s = !1, userAuxiliaryLedgers: u, computeBudgetConfig: c } = e;!1 === this.scope.availability.addFarm && this.logAndCreateError("farm deposit feature disabled in your region"); let { rewardInfos: l, programId: d } = n, m = od[d];
                        ou(m) || this.logAndCreateError("invalid farm program:", n.programId); let [p, g] = [new h.nh(n.programId), new h.nh(n.id)], f = (await this.scope.api.fetchFarmKeysById({ ids: n.id }))[0], y = oh({ programId: p, poolId: g, owner: this.scope.ownerPubKey, version: m }), k = this.createTxBuilder();
                        k.addCustomComputeBudget(c); let b = {}; for (let e of this.scope.account.tokenAccounts)
                            if (a) { let t = nb(this.scope.ownerPubKey, e.mint, e.programId).publicKey;
                                e.publicKey && t.equals(e.publicKey) && (b[e.mint.toString()] = e.publicKey) } else b[e.mint.toString()] = e.publicKey;
                        let A = b[f.lpMint.address];
                        A || this.logAndCreateError("you don't have any lp", "lp zero", b); let I = []; for (let e of l) { let t = r && e.mint.address === tQ.toString(),
                                n = b[e.mint.address]; if (!n) { let { account: i, instructionParams: r } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mint.programId, mint: new h.nh(e.mint.address), notUseTokenAccount: t, createInfo: { payer: o || this.scope.ownerPubKey, amount: 0 }, owner: this.scope.ownerPubKey, skipCloseAccount: !t, associatedOnly: !t && a, checkCreateATAOwner: s });
                                n = i, r && k.addInstruction(r) }
                            b[e.mint.address] = n, I.push(n) } let S, T = await this.scope.connection.getAccountInfo(y); if (T && (S = ow(m).decode(T.data)), n.programId !== nS.toString() && !S) { let { instruction: e, instructionType: t } = ok({ id: g, programId: p, version: m, ledger: y, owner: this.scope.ownerPubKey });
                            k.addInstruction({ instructions: [e], instructionTypes: [t] }) } let P = oc({ version: m, rewardInfos: l, rewardTokenAccountsPublicKeys: I });
                        P && this.logAndCreateError(P); let B = { amount: tA(i), owner: this.scope.ownerPubKey, farmInfo: n, farmKeys: f, lpAccount: A, rewardAccounts: I, userAuxiliaryLedgers: null == u ? void 0 : u.map(e => new h.nh(e)) },
                            v = 6 === m ? function(e) { let { farmInfo: t, farmKeys: n, lpAccount: i, rewardAccounts: o, owner: r, amount: a } = e, [s, u] = [new h.nh(t.programId), new h.nh(t.id)], c = oh({ programId: s, poolId: u, owner: r, version: 6 }), l = x.alloc(ot.span);
                                ot.encode({ instruction: 1, amount: tA(a) }, l); let d = [tL({ pubkey: w.H_, isWritable: !1 }), tL({ pubkey: h.yc.programId, isWritable: !1 }), tL({ pubkey: u }), tL({ pubkey: new h.nh(n.authority), isWritable: !1 }), tL({ pubkey: new h.nh(n.lpVault) }), tL({ pubkey: c }), tL({ pubkey: r, isWritable: !1, isSigner: !0 }), tL({ pubkey: i })]; for (let e = 0; e < n.rewardInfos.length; e++) d.push(tL({ pubkey: new h.nh(n.rewardInfos[e].vault) })), d.push(tL({ pubkey: o[e] })); return new h.Sl({ programId: s, keys: d, data: l }) }(B) : 5 === m ? function(e) { let { farmInfo: t, farmKeys: n, lpAccount: i, rewardAccounts: o, owner: r, amount: a, userAuxiliaryLedgers: s } = e, [u, c] = [new h.nh(t.programId), new h.nh(t.id)], l = oh({ programId: u, poolId: c, owner: r, version: 5 }), d = x.alloc(ot.span);
                                ot.encode({ instruction: 11, amount: tA(a) }, d); let m = [tL({ pubkey: c }), tL({ pubkey: new h.nh(n.authority), isWritable: !1 }), tL({ pubkey: l }), tL({ pubkey: r, isWritable: !1, isSigner: !0 }), tL({ pubkey: i }), tL({ pubkey: new h.nh(n.lpVault) }), tL({ pubkey: o[0] }), tL({ pubkey: new h.nh(n.rewardInfos[0].vault) }), tL({ pubkey: h.Am, isWritable: !1 }), tL({ pubkey: w.H_, isWritable: !1 })]; for (let e = 1; e < n.rewardInfos.length; e++) m.push(tL({ pubkey: o[e] })), m.push(tL({ pubkey: new h.nh(n.rewardInfos[e].vault) })); if (s)
                                    for (let e of s) m.push(tL({ pubkey: e })); return new h.Sl({ programId: u, keys: m, data: d }) }(B) : function(e) { let { farmInfo: t, farmKeys: n, lpAccount: i, rewardAccounts: o, owner: r, amount: a, userAuxiliaryLedgers: s } = e, [u, c] = [new h.nh(t.programId), new h.nh(t.id)], l = oh({ programId: u, poolId: c, owner: r, version: 3 }), d = x.alloc(ot.span);
                                ot.encode({ instruction: 10, amount: tA(a) }, d); let m = [tL({ pubkey: c }), tL({ pubkey: new h.nh(n.authority), isWritable: !1 }), tL({ pubkey: l }), tL({ pubkey: r, isWritable: !1, isSigner: !0 }), tL({ pubkey: i }), tL({ pubkey: new h.nh(n.lpVault) }), tL({ pubkey: o[0] }), tL({ pubkey: new h.nh(n.rewardInfos[0].vault) }), tL({ pubkey: h.Am, isWritable: !1 }), tL({ pubkey: w.H_, isWritable: !1 })]; if (s)
                                    for (let e of s) m.push(tL({ pubkey: e })); return new h.Sl({ programId: u, keys: m, data: d }) }(B),
                            C = { 3: nr.FarmV3Deposit, 5: nr.FarmV5Deposit, 6: nr.FarmV6Deposit }; return k.addInstruction({ instructions: [v], instructionTypes: [C[m]] }).versionBuild({ txVersion: t }) }
                    async withdraw(e) { let { txVersion: t, farmInfo: n, amount: i, deposited: o, useSOLBalance: r, feePayer: a, associatedOnly: s = !0, checkCreateATAOwner: u = !1, userAuxiliaryLedgers: c, computeBudgetConfig: l } = e, { rewardInfos: d } = n;!1 === this.scope.availability.removeFarm && this.logAndCreateError("farm withdraw feature disabled in your region"); let m = od[n.programId];
                        ou(m) || this.logAndCreateError("invalid farm program:", n.programId); let p = (await this.scope.api.fetchFarmKeysById({ ids: n.id }))[0],
                            g = this.createTxBuilder();
                        g.addCustomComputeBudget(l); let f = {}; for (let e of this.scope.account.tokenAccounts)
                            if (s) { let t = nb(this.scope.ownerPubKey, e.mint).publicKey;
                                e.publicKey && t.equals(e.publicKey) && (f[e.mint.toString()] = e.publicKey) } else f[e.mint.toString()] = e.publicKey;
                        if (o) o.isZero() && this.logAndCreateError("no deposited lp", { farmId: n.id });
                        else { let e = oh({ programId: new h.nh(n.programId), poolId: new h.nh(n.id), owner: this.scope.ownerPubKey, version: m }),
                                t = await this.scope.connection.getAccountInfo(e); if (t) ow(m).decode(t.data).deposited.isZero() && this.logAndCreateError("no deposited lp", { farmId: n.id });
                            else if (6 !== m && (c || []).length > 0) { let { instruction: t, instructionType: n } = ok({ id: new h.nh(p.id), programId: new h.nh(p.programId), version: m, ledger: e, owner: this.scope.ownerPubKey });
                                g.addInstruction({ instructions: [t], instructionTypes: [n] }) } else this.logAndCreateError("no lp data", { farmId: n.id, version: m, ledgerData: t }) } let w = p.lpMint.address,
                            y = r && w === tQ.toString(),
                            k = f[w.toString()]; if (!k) { let { account: e, instructionParams: t } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: p.lpMint.programId, mint: new h.nh(w), notUseTokenAccount: y, createInfo: { payer: a || this.scope.ownerPubKey, amount: 0 }, owner: this.scope.ownerPubKey, skipCloseAccount: !0, associatedOnly: !y && s, checkCreateATAOwner: u });
                            k = e, t && g.addInstruction(t) }
                        f[w.toString()] = k; let b = []; for (let e of d) { let t = r && e.mint.address === tQ.toString(),
                                n = f[e.mint.address]; if (!n) { let { account: i, instructionParams: o } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mint.programId, mint: new h.nh(e.mint.address), notUseTokenAccount: t, createInfo: { payer: a || this.scope.ownerPubKey, amount: 0 }, owner: this.scope.ownerPubKey, skipCloseAccount: !t, associatedOnly: !t && s, checkCreateATAOwner: u });
                                n = i, o && g.addInstruction(o) }
                            f[e.mint.address] = n, b.push(n) } let A = oc({ version: m, rewardInfos: d, rewardTokenAccountsPublicKeys: b });
                        A && this.logAndCreateError(A); let I = { amount: tA(i), owner: this.scope.ownerPubKey, farmInfo: n, farmKeys: p, lpAccount: k, rewardAccounts: b, userAuxiliaryLedgers: null == c ? void 0 : c.map(e => new h.nh(e)) },
                            S = 6 === m ? oI(I) : 5 === m ? oS(I) : oT(I),
                            T = { 3: nr.FarmV3Withdraw, 5: nr.FarmV5Withdraw, 6: nr.FarmV6Withdraw }; return g.addInstruction({ instructions: [S], instructionTypes: [T[m]] }).versionBuild({ txVersion: t }) }
                    async withdrawFarmReward({ farmInfo: e, withdrawMint: t, txVersion: n }) { var i, o; let r, a;
                        this.scope.checkOwner(); let s = t3((await this.scope.api.fetchFarmKeysById({ ids: e.id }))[0]),
                            u = od[e.programId];
                        6 !== u && this.logAndCreateError("invalid farm version", u); let c = e.rewardInfos.findIndex(e => e.mint.address === tZ.toString() ? new h.nh(tM.address) : t),
                            l = s.rewardInfos[c];
                        l || this.logAndCreateError("withdraw mint error", "rewardInfos", e); let d = null != (i = null == l ? void 0 : l.vault) ? i : tZ,
                            m = this.createTxBuilder(),
                            p; if (t.equals(tZ)) { let e = await iz({ connection: this.scope.connection, owner: this.scope.ownerPubKey, payer: this.scope.ownerPubKey, amount: of(F(_({}, l), { openTime: l.openTime, endTime: l.endTime, perSecond: new tk(l.perSecond).mul(10 ** l.mint.decimals).toString() })) });
                            p = e.addresses.newAccount, m.addInstruction(e) } else { let e = await this.scope.account.getCreatedTokenAccount({ mint: t });
                            null === e ? (p = await this.scope.account.getAssociatedTokenAccount(t), m.addInstruction({ instructions: [(0, S.Ek)(this.scope.ownerPubKey, p, this.scope.ownerPubKey, t)], instructionTypes: [nr.CreateATA] })) : p = e } let { instruction: g, instructionType: f } = (o = { programId: s.programId, id: s.id, authority: s.authority, lpVault: s.lpVault, rewardVault: d, userRewardToken: p, owner: this.scope.ownerPubKey }, r = x.alloc(iZ.span), iZ.encode({ instruction: 5 }, r), a = [tL({ pubkey: w.H_, isWritable: !1 }), tL({ pubkey: o.id }), tL({ pubkey: o.authority, isWritable: !1 }), tL({ pubkey: o.lpVault, isWritable: !1 }), tL({ pubkey: o.rewardVault }), tL({ pubkey: o.userRewardToken }), tL({ pubkey: o.owner, isWritable: !1, isSigner: !0 })], { instruction: new h.Sl({ programId: o.programId, keys: a, data: r }), instructionType: nr.FarmV6CreatorWithdraw }); return m.addInstruction({ instructions: [g], instructionTypes: [f] }).versionBuild({ txVersion: n }) }
                    async harvestAllRewards(e) { let { farmInfoList: t, useSOLBalance: n, feePayer: i, associatedOnly: o = !0, checkCreateATAOwner: r = !1, userAuxiliaryLedgers: a, txVersion: s, computeBudgetConfig: u } = e, c = this.createTxBuilder(), l = {}; for (let e of this.scope.account.tokenAccounts)
                            if (o) { let t = nb(this.scope.ownerPubKey, e.mint).publicKey;
                                e.publicKey && t.equals(e.publicKey) && (l[e.mint.toString()] = e.publicKey) } else l[e.mint.toString()] = e.publicKey;
                        let d = (await this.scope.api.fetchFarmKeysById({ ids: Object.values(t).map(e => e.id).join(",") })).reduce((e, t) => F(_({}, e), {
                            [t.id]: t }), {}); for (let e of Object.values(t)) { let { programId: t, lpMint: s, rewardInfos: u, id: m } = e, p = od[t], g = s.address, f = n && g === tQ.toString(), w = l[g]; if (!w) { let { account: e, instructionParams: t } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: s.programId, mint: new h.nh(g), notUseTokenAccount: f, createInfo: { payer: i || this.scope.ownerPubKey, amount: 0 }, owner: this.scope.ownerPubKey, skipCloseAccount: !0, associatedOnly: !f && o, checkCreateATAOwner: r });
                                w = e, t && c.addInstruction(t) }
                            l[g.toString()] = w; let y = []; for (let e of u) { let t = n && e.mint.address === tQ.toString(),
                                    a = l[e.mint.address]; if (!a) { let { account: n, instructionParams: s } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mint.programId, mint: new h.nh(e.mint.address), notUseTokenAccount: t, createInfo: { payer: i || this.scope.ownerPubKey, amount: 0 }, owner: this.scope.ownerPubKey, skipCloseAccount: !t, associatedOnly: !t && o, checkCreateATAOwner: r });
                                    a = n, s && c.addInstruction(s) }
                                l[e.mint.address] = a, y.push(a) } let k = d[m],
                                b = { amount: t7, owner: this.scope.ownerPubKey, farmInfo: e, farmKeys: k, lpAccount: w, rewardAccounts: y, userAuxiliaryLedgers: null == a ? void 0 : a.map(e => new h.nh(e)) },
                                A = 6 === p ? oI(b) : 5 === p ? oS(b) : oT(b),
                                I = { 3: nr.FarmV3Withdraw, 5: nr.FarmV5Withdraw, 6: nr.FarmV6Withdraw };
                            c.addInstruction({ instructions: [A], instructionTypes: [I[p]] }) } return 1 === s ? c.sizeCheckBuild({ computeBudgetConfig: u }) : c.sizeCheckBuildV0({ computeBudgetConfig: u }) } },
                oB = new k(0),
                ov = new k(1),
                oC = new k(-1),
                ox = new k(1).shln(64),
                oO = new k(1).shln(128),
                oq = ox.sub(ov),
                oK = oO.subn(1),
                oW = new k("4295048016"),
                oM = new k("79226673521066979257578248091"),
                oL = new k("4295048017"),
                oR = new k("79226673521066979257578248090"),
                o_ = new k(10).pow(new k(6)),
                oF = ((l = oF || {})[l.rate_500 = 500] = "rate_500", l[l.rate_3000 = 3e3] = "rate_3000", l[l.rate_10000 = 1e4] = "rate_10000", l),
                oE = { tvl: 0, volumeQuote: 0, mintAmountA: 0, mintAmountB: 0, rewardDefaultInfos: [], farmUpcomingCount: 0, farmOngoingCount: 0, farmFinishedCount: 0, day: { volume: 0, volumeQuote: 0, volumeFee: 0, apr: 0, feeApr: 0, priceMin: 0, priceMax: 0, rewardApr: [0] }, week: { volume: 0, volumeQuote: 0, volumeFee: 0, apr: 0, feeApr: 0, priceMin: 0, priceMax: 0, rewardApr: [0] }, month: { volume: 0, volumeQuote: 0, volumeFee: 0, apr: 0, feeApr: 0, priceMin: 0, priceMax: 0, rewardApr: [0] }, pooltype: [] },
                oD = new k("18446744073700000000");

            function oV(e) { let t = new ArrayBuffer(4); return new DataView(t).setInt32(0, e, !1), new Uint8Array(t) }

            function oN(e, t) { let n = 0; for (let i = e - 1; i >= 0 && !t.testn(i); i--) n++; return n }

            function oU(e, t) { let n = 0; for (let i = 0; i < e && !t.testn(i); i++) n++; return n }

            function oX(e, t) { for (let n = 0; n < e; n++)
                    if (t.testn(n)) return !1;
                return !0 }
            x.from("amm_config", "utf8"); var oH = x.from("pool", "utf8"),
                oG = x.from("pool_vault", "utf8"),
                oz = x.from("pool_reward_vault", "utf8"),
                oj = x.from("position", "utf8"),
                oQ = x.from("tick_array", "utf8"),
                oZ = x.from("operation", "utf8"),
                o$ = x.from("pool_tick_array_bitmap_extension", "utf8"),
                oY = x.from("observation", "utf8");

            function oJ(e, t, n) { return np([oG, t.toBuffer(), n.toBuffer()], e) }

            function o1(e, t, n) { return np([oQ, t.toBuffer(), oV(n)], e) }

            function o0(e, t, n, i) { return np([oj, t.toBuffer(), oV(n), oV(i)], e) }

            function o4(e, t) { return np([oj, t.toBuffer()], e) }

            function o6(e) { return np([x.from("metadata", "utf8"), tU.toBuffer(), e.toBuffer()], tU) }

            function o2(e, t) { return np([o$, t.toBuffer()], e) } var o5 = x.from("locked_position", "utf8");

            function o8(e, t) { return np([o5, t.toBuffer()], e) }

            function o3(e, t) { return np([o5, t.toBuffer()], e) } var o7 = class { static getfeeGrowthInside(e, t, n) { let i = new k(0),
                            o = new k(0);
                        e.tickCurrent >= t.tick ? (i = t.feeGrowthOutsideX64A, o = t.feeGrowthOutsideX64B) : (i = e.feeGrowthGlobalX64A.sub(t.feeGrowthOutsideX64A), o = e.feeGrowthGlobalX64B.sub(t.feeGrowthOutsideX64B)); let r = new k(0),
                            a = new k(0); return e.tickCurrent < n.tick ? (r = n.feeGrowthOutsideX64A, a = n.feeGrowthOutsideX64B) : (r = e.feeGrowthGlobalX64A.sub(n.feeGrowthOutsideX64A), a = e.feeGrowthGlobalX64B.sub(n.feeGrowthOutsideX64B)), { feeGrowthInsideX64A: rr.wrappingSubU128(rr.wrappingSubU128(e.feeGrowthGlobalX64A, i), r), feeGrowthInsideBX64: rr.wrappingSubU128(rr.wrappingSubU128(e.feeGrowthGlobalX64B, o), a) } }
                    static GetPositionFees(e, t, n, i) { let { feeGrowthInsideX64A: o, feeGrowthInsideBX64: r } = this.getfeeGrowthInside(e, n, i), a = rr.mulDivFloor(rr.wrappingSubU128(o, t.feeGrowthInsideLastX64A), t.liquidity, ox), s = t.tokenFeesOwedA.add(a), u = rr.mulDivFloor(rr.wrappingSubU128(r, t.feeGrowthInsideLastX64B), t.liquidity, ox); return { tokenFeeAmountA: s, tokenFeeAmountB: t.tokenFeesOwedB.add(u) } }
                    static GetPositionFeesV2(e, t, n, i) { let { feeGrowthInsideX64A: o, feeGrowthInsideBX64: r } = this.getfeeGrowthInside(e, n, i), a = rr.mulDivFloor(rr.wrappingSubU128(o, t.feeGrowthInsideLastX64A), t.liquidity, ox), s = t.tokenFeesOwedA.add(a), u = rr.mulDivFloor(rr.wrappingSubU128(r, t.feeGrowthInsideLastX64B), t.liquidity, ox); return { tokenFeeAmountA: s, tokenFeeAmountB: t.tokenFeesOwedB.add(u) } }
                    static GetPositionRewardsV2(e, t, n, i) { let o = [],
                            r = this.getRewardGrowthInsideV2(e.tickCurrent, n, i, e.rewardInfos); for (let e = 0; e < r.length; e++) { let n = r[e],
                                i = t.rewardInfos[e],
                                a = rr.wrappingSubU128(n, i.growthInsideLastX64),
                                s = rr.mulDivFloor(a, t.liquidity, ox),
                                u = i.rewardAmountOwed.add(s);
                            o.push(u) } return o }
                    static GetPositionRewards(e, t, n, i) { let o = [],
                            r = this.getRewardGrowthInside(e.tickCurrent, n, i, e.rewardInfos); for (let e = 0; e < r.length; e++) { let n = r[e],
                                i = t.rewardInfos[e],
                                a = rr.wrappingSubU128(n, i.growthInsideLastX64),
                                s = rr.mulDivFloor(a, t.liquidity, ox),
                                u = i.rewardAmountOwed.add(s);
                            o.push(u) } return o }
                    static getRewardGrowthInside(e, t, n, i) { let o = []; for (let r = 0; r < i.length; r++) { let a = new k(0);
                            a = t.liquidityGross.eqn(0) ? i[r].rewardGrowthGlobalX64 : e < t.tick ? i[r].rewardGrowthGlobalX64.sub(t.rewardGrowthsOutsideX64[r]) : t.rewardGrowthsOutsideX64[r]; let s = new k(0);
                            n.liquidityGross.eqn(0) || (s = e < n.tick ? n.rewardGrowthsOutsideX64[r] : i[r].rewardGrowthGlobalX64.sub(n.rewardGrowthsOutsideX64[r])), o.push(rr.wrappingSubU128(rr.wrappingSubU128(i[r].rewardGrowthGlobalX64, a), s)) } return o }
                    static getRewardGrowthInsideV2(e, t, n, i) { let o = []; for (let r = 0; r < i.length; r++) { let a = new k(0);
                            a = t.liquidityGross.eqn(0) ? i[r].rewardGrowthGlobalX64 : e < t.tick ? i[r].rewardGrowthGlobalX64.sub(t.rewardGrowthsOutsideX64[r]) : t.rewardGrowthsOutsideX64[r]; let s = new k(0);
                            n.liquidityGross.eqn(0) || (s = e < n.tick ? n.rewardGrowthsOutsideX64[r] : i[r].rewardGrowthGlobalX64.sub(n.rewardGrowthsOutsideX64[r])), o.push(rr.wrappingSubU128(rr.wrappingSubU128(i[r].rewardGrowthGlobalX64, a), s)) } return o }
                    static getAmountsFromLiquidity({ poolInfo: e, ownerPosition: t, liquidity: n, slippage: i, add: o, epochInfo: r }) { var a, s, u, c; let l = ru.priceToSqrtPriceX64(new tk(e.price), e.mintA.decimals, e.mintB.decimals),
                            d = ru.getSqrtPriceX64FromTick(t.tickLower),
                            m = ru.getSqrtPriceX64FromTick(t.tickUpper),
                            p = o ? 1 + i : 1 - i,
                            h = rl.getAmountsFromLiquidity(l, d, m, n, o),
                            [g, f] = [nH(h.amountA, null == (a = e.mintA.extensions) ? void 0 : a.feeConfig, r, !0), nH(h.amountB, null == (s = e.mintB.extensions) ? void 0 : s.feeConfig, r, !0)],
                            [w, y] = [nH(new k(new tk(h.amountA.toString()).mul(p).toFixed(0)), null == (u = e.mintA.extensions) ? void 0 : u.feeConfig, r, !0), nH(new k(new tk(h.amountB.toString()).mul(p).toFixed(0)), null == (c = e.mintB.extensions) ? void 0 : c.feeConfig, r, !0)]; return { liquidity: n, amountA: g, amountB: f, amountSlippageA: w, amountSlippageB: y, expirationTime: nG(g.expirationTime, f.expirationTime) } } },
                o9 = class { static async getTickArrays(e, t, n, i, o, r, a) { let s = [],
                            u = rh.getTickArrayStartIndexByTick(i, o),
                            c = rh.getInitializedTickArrayInRange(r, a, o, u, Math.floor(7.5)); for (let e = 0; e < c.length; e++) { let { publicKey: i } = o1(t, n, c[e]);
                            s.push(i) } let l = (await G(e, s)).map(e => null !== e ? rS.decode(e.data) : null),
                            d = {}; for (let e = 0; e < s.length; e++) { let t = l[e];
                            null !== t && (d[t.startTickIndex] = F(_({}, t), { address: s[e] })) } return d }
                    static nextInitializedTick(e, t, n, i, o, r) { let { initializedTick: a, tickArrayAddress: s, tickArrayStartTickIndex: u } = this.nextInitializedTickInOneArray(e, t, n, i, o, r); for (; null == a || a.liquidityGross.lten(0);) { if (u = rh.getNextTickArrayStartIndex(u, o, r), this.checkIsValidStartIndex(u, o)) throw Error("No enough initialized tickArray"); let i = n[u]; if (void 0 === i) continue; let { nextTick: c, tickArrayAddress: l, tickArrayStartTickIndex: d } = this.firstInitializedTickInOneArray(e, t, i, r);
                            [a, s, u] = [c, l, d] } if (null == a) throw Error("No invaild tickArray cache"); return { nextTick: a, tickArrayAddress: s, tickArrayStartTickIndex: u } }
                    static nextInitializedTickArray(e, t, n, i, o) { let r = Math.floor(e / o9.tickCount(t)),
                            a = n ? rh.searchLowBitFromStart(i, o, r - 1, 1, t) : rh.searchHightBitFromStart(i, o, r + 1, 1, t); return a.length > 0 ? { isExist: !0, nextStartIndex: a[0] } : { isExist: !1, nextStartIndex: 0 } }
                    static firstInitializedTickInOneArray(e, t, n, i) { let o; if (i) { let e = rm - 1; for (; e >= 0;) { let t = n.ticks[e]; if (t.liquidityGross.gtn(0)) { o = t; break }
                                e -= 1 } } else { let e = 0; for (; e < rm;) { let t = n.ticks[e]; if (t.liquidityGross.gtn(0)) { o = t; break }
                                e += 1 } } let { publicKey: r } = o1(e, t, n.startTickIndex); return { nextTick: o, tickArrayAddress: r, tickArrayStartTickIndex: n.startTickIndex } }
                    static nextInitializedTickInOneArray(e, t, n, i, o, r) { let a, s = rh.getTickArrayStartIndexByTick(i, o),
                            u = Math.floor((i - s) / o),
                            c = n[s]; if (null == c) return { initializedTick: void 0, tickArrayAddress: void 0, tickArrayStartTickIndex: s }; if (r)
                            for (; u >= 0;) { let e = c.ticks[u]; if (e.liquidityGross.gtn(0)) { a = e; break }
                                u -= 1 } else
                                for (u += 1; u < rm;) { let e = c.ticks[u]; if (e.liquidityGross.gtn(0)) { a = e; break }
                                    u += 1 }
                        let { publicKey: l } = o1(e, t, s); return { initializedTick: a, tickArrayAddress: l, tickArrayStartTickIndex: c.startTickIndex } }
                    static getArrayStartIndex(e, t) { let n = this.tickCount(t); return Math.floor(e / n) * n }
                    static checkIsValidStartIndex(e, t) { return rh.checkIsOutOfBoundary(e) ? !(e > 443636) && e == rh.getTickArrayStartIndexByTick(-443636, t) : e % this.tickCount(t) == 0 }
                    static tickCount(e) { return rm * e } },
                re = class { static maxTickInTickarrayBitmap(e) { return e * rm * rp }
                    static getBitmapTickBoundary(e, t) { let n = this.maxTickInTickarrayBitmap(t),
                            i = Math.floor(Math.abs(e) / n);
                        e < 0 && Math.abs(e) % n != 0 && (i += 1); let o = n * i; return e < 0 ? { minValue: -o, maxValue: -o + n } : { minValue: o, maxValue: o + n } }
                    static nextInitializedTickArrayStartIndex(e, t, n, i) { var o, r; if (!o9.checkIsValidStartIndex(t, n)) throw Error("nextInitializedTickArrayStartIndex check error"); let a = this.maxTickInTickarrayBitmap(n),
                            s = i ? t - o9.tickCount(n) : t + o9.tickCount(n); if (s < -a || s >= a) return { isInit: !1, tickIndex: t }; let u = n * rm,
                            c = s / u + 512;
                        s < 0 && s % u != 0 && c--; let l = Math.abs(c); if (i) { let t = oX(1024, o = e.shln(1024 - l - 1)) ? null : oN(1024, o); return null !== t ? { isInit: !0, tickIndex: (l - t - 512) * u } : { isInit: !1, tickIndex: -a } } { let t = oX(1024, r = e.shrn(l)) ? null : oU(1024, r); return null !== t ? { isInit: !0, tickIndex: (l + t - 512) * u } : { isInit: !1, tickIndex: a - o9.tickCount(n) } } } },
                rt = class { static getBitmapOffset(e, t) { if (!o9.checkIsValidStartIndex(e, t)) throw Error("No enough initialized tickArray");
                        this.checkExtensionBoundary(e, t); let n = re.maxTickInTickarrayBitmap(t),
                            i = Math.floor(Math.abs(e) / n) - 1; return e < 0 && Math.abs(e) % n == 0 && i--, i }
                    static getBitmap(e, t, n) { let i = this.getBitmapOffset(e, t); return e < 0 ? { offset: i, tickarrayBitmap: n.negativeTickArrayBitmap[i] } : { offset: i, tickarrayBitmap: n.positiveTickArrayBitmap[i] } }
                    static checkExtensionBoundary(e, t) { let { positiveTickBoundary: n, negativeTickBoundary: i } = this.extensionTickBoundary(t); if (e >= i && e < n) throw Error("checkExtensionBoundary -> InvalidTickArrayBoundary") }
                    static extensionTickBoundary(e) { let t = re.maxTickInTickarrayBitmap(e),
                            n = -t; if (443636 <= t) throw Error(`extensionTickBoundary check error: 443636, ${t}`); if (n <= -443636) throw Error(`extensionTickBoundary check error: ${n}, -443636`); return { positiveTickBoundary: t, negativeTickBoundary: n } }
                    static checkTickArrayIsInit(e, t, n) { let { tickarrayBitmap: i } = this.getBitmap(e, t, n), o = this.tickArrayOffsetInBitmap(e, t); return { isInitialized: rh.mergeTickArrayBitmap(i).testn(o), startIndex: e } }
                    static nextInitializedTickArrayFromOneBitmap(e, t, n, i) { let o = o9.tickCount(t),
                            r = n ? e - o : e + o,
                            { tickarrayBitmap: a } = this.getBitmap(r, t, i); return this.nextInitializedTickArrayInBitmap(a, r, t, n) }
                    static nextInitializedTickArrayInBitmap(e, t, n, i) { let { minValue: o, maxValue: r } = re.getBitmapTickBoundary(t, n), a = this.tickArrayOffsetInBitmap(t, n); if (i) { let i = rh.mergeTickArrayBitmap(e).shln(rp - 1 - a),
                                r = oX(512, i) ? null : oN(512, i); return null !== r ? { isInit: !0, tickIndex: t - r * o9.tickCount(n) } : { isInit: !1, tickIndex: o } } { let i = rh.mergeTickArrayBitmap(e).shrn(a),
                                o = oX(512, i) ? null : oU(512, i); return null !== o ? { isInit: !0, tickIndex: t + o * o9.tickCount(n) } : { isInit: !1, tickIndex: r - o9.tickCount(n) } } }
                    static tickArrayOffsetInBitmap(e, t) { let n = Math.abs(e) % re.maxTickInTickarrayBitmap(t),
                            i = Math.floor(n / o9.tickCount(t)); return e < 0 && 0 != n && (i = rp - i), i } },
                rn = class { static getOutputAmountAndRemainAccounts(e, t, n, i, o, r = !1) { let a = n.toBase58() === e.mintA.address,
                            s = [],
                            { isExist: u, startIndex: c, nextAccountMeta: l } = this.getFirstInitializedTickArray(e, a); if (!u || void 0 === c || !l) throw Error("Invalid tick array");
                        s.push(l); let { allTrade: d, amountCalculated: m, accounts: p, sqrtPriceX64: h, feeAmount: g } = rd.swapCompute(e.programId, e.id, t, e.tickArrayBitmap, e.exBitmapInfo, a, e.ammConfig.tradeFeeRate, e.liquidity, e.tickCurrent, e.tickSpacing, e.sqrtPriceX64, i, c, o, r); return s.push(...p), { allTrade: d, expectedAmountOut: m.mul(oC), remainingAccounts: s, executionPrice: h, feeAmount: g } }
                    static getInputAmountAndRemainAccounts(e, t, n, i, o) { let r = n.toBase58() === e.mintB.address,
                            a = [],
                            { isExist: s, startIndex: u, nextAccountMeta: c } = this.getFirstInitializedTickArray(e, r); if (!s || void 0 === u || !c) throw Error("Invalid tick array"); try { let t = this.preInitializedTickArrayStartIndex(e, r); if (t.isExist) { let { publicKey: n } = o1(e.programId, e.id, t.nextStartIndex);
                                a.push(n) } } catch {}
                        a.push(c); let { amountCalculated: l, accounts: d, sqrtPriceX64: m, feeAmount: p } = rd.swapCompute(e.programId, e.id, t, e.tickArrayBitmap, e.exBitmapInfo, r, e.ammConfig.tradeFeeRate, e.liquidity, e.tickCurrent, e.tickSpacing, e.sqrtPriceX64, i.mul(oC), u, o); return a.push(...d), { expectedAmountIn: l, remainingAccounts: a, executionPrice: m, feeAmount: p } }
                    static getFirstInitializedTickArray(e, t) { let { isInitialized: n, startIndex: i } = rn.isOverflowDefaultTickarrayBitmap(e.tickSpacing, [e.tickCurrent]) ? rt.checkTickArrayIsInit(o9.getArrayStartIndex(e.tickCurrent, e.tickSpacing), e.tickSpacing, e.exBitmapInfo) : rh.checkTickArrayIsInitialized(rh.mergeTickArrayBitmap(e.tickArrayBitmap), e.tickCurrent, e.tickSpacing); if (n) { let { publicKey: t } = o1(e.programId, e.id, i); return { isExist: !0, startIndex: i, nextAccountMeta: t } } let { isExist: o, nextStartIndex: r } = this.nextInitializedTickArrayStartIndex(e, o9.getArrayStartIndex(e.tickCurrent, e.tickSpacing), t); if (o) { let { publicKey: t } = o1(e.programId, e.id, r); return { isExist: !0, startIndex: r, nextAccountMeta: t } } return { isExist: !1, nextAccountMeta: void 0, startIndex: void 0 } }
                    static preInitializedTickArrayStartIndex(e, t) { let n = Math.floor(e.tickCurrent / o9.tickCount(e.tickSpacing)),
                            i = t ? rh.searchHightBitFromStart(e.tickArrayBitmap, e.exBitmapInfo, n + 1, 1, e.tickSpacing) : rh.searchLowBitFromStart(e.tickArrayBitmap, e.exBitmapInfo, n - 1, 1, e.tickSpacing); return i.length > 0 ? { isExist: !0, nextStartIndex: i[0] } : { isExist: !1, nextStartIndex: 0 } }
                    static nextInitializedTickArrayStartIndex(e, t, n) { for (t = o9.getArrayStartIndex(e.tickCurrent, e.tickSpacing);;) { let { isInit: i, tickIndex: o } = re.nextInitializedTickArrayStartIndex(rh.mergeTickArrayBitmap(e.tickArrayBitmap), t, e.tickSpacing, n); if (i) return { isExist: !0, nextStartIndex: o };
                            t = o; let { isInit: r, tickIndex: a } = rt.nextInitializedTickArrayFromOneBitmap(t, e.tickSpacing, n, e.exBitmapInfo); if (r) return { isExist: !0, nextStartIndex: a }; if ((t = a) < -443636 || t > 443636) return { isExist: !1, nextStartIndex: 0 } } }
                    static async updatePoolRewardInfos({ connection: e, apiPoolInfo: t, chainTime: n, poolLiquidity: i, rewardInfos: o }) { var r, a, s; let u = []; for (let c = 0; c < o.length; c++) { let l = o[c],
                                d = null != (s = null == (r = t.rewardDefaultInfos[c]) ? void 0 : r.mint.programId) ? s : null == (a = await e.getAccountInfo(l.tokenMint)) ? void 0 : a.owner; if (void 0 === d) throw Error("get new reward mint info error"); let m = F(_({}, l), { perSecond: rr.x64ToDecimal(l.emissionsPerSecondX64), remainingRewards: void 0, tokenProgramId: new h.nh(d) }); if (m.tokenMint.equals(h.nh.default)) continue; if (n <= m.openTime.toNumber() || i.eq(oB)) { u.push(m); continue } let p = new k(Math.min(m.endTime.toNumber(), n)),
                                g = p.sub(m.lastUpdateTime),
                                f = rr.mulDivFloor(g, m.emissionsPerSecondX64, i),
                                w = m.rewardGrowthGlobalX64.add(f),
                                y = rr.mulDivFloor(g, m.emissionsPerSecondX64, ox),
                                b = m.rewardTotalEmissioned.add(y);
                            u.push(F(_({}, m), { rewardGrowthGlobalX64: w, rewardTotalEmissioned: b, lastUpdateTime: p })) } return u }
                    static isOverflowDefaultTickarrayBitmap(e, t) { let { maxTickBoundary: n, minTickBoundary: i } = this.tickRange(e); for (let o of t) { let t = rh.getTickArrayStartIndexByTick(o, e); if (t >= n || t < i) return !0 } return !1 }
                    static tickRange(e) { let t = re.maxTickInTickarrayBitmap(e),
                            n = -t; return t > 443636 && (t = o9.getArrayStartIndex(443636, e) + o9.tickCount(e)), n < -443636 && (n = o9.getArrayStartIndex(-443636, e)), { maxTickBoundary: t, minTickBoundary: n } }
                    static get_tick_array_offset(e, t) { if (!o9.checkIsValidStartIndex(e, t)) throw Error("No enough initialized tickArray"); return e / o9.tickCount(t) * rp }
                    static async fetchExBitmaps({ connection: e, exBitmapAddress: t, batchRequest: n }) { let i = await z(e, t.map(e => ({ pubkey: e })), { batchRequest: n }),
                            o = {}; for (let e of i) null !== e.accountInfo && (o[e.pubkey.toString()] = rP.decode(e.accountInfo.data)); return o }
                    static async fetchMultiplePoolTickArrays({ connection: e, poolKeys: t, batchRequest: n }) { let i = {},
                            o = []; for (let e of t) { let t = rh.getTickArrayStartIndexByTick(e.tickCurrent, e.tickSpacing); for (let n of rh.getInitializedTickArrayInRange(e.tickArrayBitmap, e.exBitmapInfo, e.tickSpacing, t, 7)) { let { publicKey: t } = o1(e.programId, e.id, n);
                                o.push({ pubkey: t }), i[t.toString()] = e.id } } let r = await z(e, o, { batchRequest: n }),
                            a = {}; for (let e of r) { if (!e.accountInfo) continue; let t = i[e.pubkey.toString()]; if (!t) continue;
                            void 0 === a[t.toString()] && (a[t.toString()] = {}); let n = rS.decode(e.accountInfo.data);
                            a[t.toString()][n.startTickIndex] = F(_({}, n), { address: e.pubkey }) } return a }
                    static async fetchPoolsAccountPosition({ pools: e, connection: t, ownerInfo: n, batchRequest: i = !1, updateOwnerRewardAndFee: o = !0 }) { var r; let a = []; for (let t = 0; t < e.length; t++) { let n = e[t];
                            null !== n && (a.find(e => e.equals(n.state.programId)) || a.push(n.state.programId)) } if (n) { let s = n.tokenAccounts.map(e => e.accountInfo.mint),
                                u = []; for (let e of s)
                                for (let t of a) u.push(o4(t, e).publicKey); let c = await G(t, u, { batchRequest: i }),
                                l = {}; for (let t of c) { if (null === t) continue; let n = rA.decode(t.data),
                                    i = n.poolId.toString(),
                                    o = e.find(e => e.state.id.toBase58() === i); if (void 0 === o) continue; let a = o.state,
                                    s = rh._getTickPriceLegacy({ poolInfo: a, tick: n.tickLower, baseIn: !0 }),
                                    u = rh._getTickPriceLegacy({ poolInfo: a, tick: n.tickUpper, baseIn: !0 }),
                                    { amountA: c, amountB: d } = rl.getAmountsFromLiquidity(a.sqrtPriceX64, s.tickSqrtPriceX64, u.tickSqrtPriceX64, n.liquidity, !1),
                                    m = 1 / (1 - Math.sqrt(Math.sqrt(s.price.div(u.price).toNumber())));
                                o.positionAccount = [...null != (r = o.positionAccount) ? r : [], { poolId: n.poolId, nftMint: n.nftMint, priceLower: s.price, priceUpper: u.price, amountA: c, amountB: d, tickLower: n.tickLower, tickUpper: n.tickUpper, liquidity: n.liquidity, feeGrowthInsideLastX64A: n.feeGrowthInsideLastX64A, feeGrowthInsideLastX64B: n.feeGrowthInsideLastX64B, tokenFeesOwedA: n.tokenFeesOwedA, tokenFeesOwedB: n.tokenFeesOwedB, rewardInfos: n.rewardInfos.map(e => F(_({}, e), { pendingReward: new k(0) })), leverage: m, tokenFeeAmountA: new k(0), tokenFeeAmountB: new k(0) }]; let p = await rh.getTickArrayAddressByTick(o.state.programId, n.poolId, n.tickLower, o.state.tickSpacing),
                                    h = await rh.getTickArrayAddressByTick(o.state.programId, n.poolId, n.tickUpper, o.state.tickSpacing);
                                l[`${o.state.programId.toString()}-${n.poolId.toString()}-${n.tickLower}`] = p, l[`${o.state.programId.toString()}-${n.poolId.toString()}-${n.tickUpper}`] = h } if (o) { let n = Object.values(l),
                                    o = await G(t, n, { batchRequest: i }),
                                    r = {}; for (let e = 0; e < n.length; e++) { let t = o[e];
                                    null !== t && (r[n[e].toString()] = rS.decode(t.data)) } for (let { state: t, positionAccount: n }
                                    of e)
                                    if (n)
                                        for (let e of n) { let n = `${t.programId.toString()}-${t.id.toString()}-${e.tickLower}`,
                                                i = `${t.programId.toString()}-${t.id.toString()}-${e.tickUpper}`,
                                                o = r[l[n].toString()],
                                                a = r[l[i].toString()],
                                                s = o.ticks[rh.getTickOffsetInArray(e.tickLower, t.tickSpacing)],
                                                u = a.ticks[rh.getTickOffsetInArray(e.tickUpper, t.tickSpacing)],
                                                { tokenFeeAmountA: c, tokenFeeAmountB: d } = await o7.GetPositionFees(t, e, s, u),
                                                m = await o7.GetPositionRewards(t, e, s, u);
                                            e.tokenFeeAmountA = c.gte(new k(0)) ? c : new k(0), e.tokenFeeAmountB = d.gte(new k(0)) ? d : new k(0); for (let t = 0; t < m.length; t++) e.rewardInfos[t].pendingReward = m[t].gte(new k(0)) ? m[t] : new k(0) } } } return e }
                    static computeAmountOut({ poolInfo: e, tickArrayCache: t, baseMint: n, epochInfo: i, amountIn: o, slippage: r, priceLimit: a = new tk(0), catchLiquidityInsufficient: s = !1 }) { var u; let c, l = n.toBase58() === e.mintA.address,
                            [d, m] = l ? [e.mintA.extensions.feeConfig, e.mintB.extensions.feeConfig] : [e.mintB.extensions.feeConfig, e.mintA.extensions.feeConfig];
                        c = a.equals(new tk(0)) ? l ? oW.add(new k(1)) : oM.sub(new k(1)) : ru.priceToSqrtPriceX64(a, e.mintA.decimals, e.mintB.decimals); let p = nH(o, d, i, !1),
                            { allTrade: h, expectedAmountOut: g, remainingAccounts: f, executionPrice: w, feeAmount: y } = rn.getOutputAmountAndRemainAccounts(e, t, n, p.amount.sub(null != (u = p.fee) ? u : oB), c, s),
                            b = nH(g, m, i, !1),
                            A = ru.sqrtPriceX64ToPrice(w, e.mintA.decimals, e.mintB.decimals),
                            I = l ? A : new tk(1).div(A),
                            S = nH(g.mul(new k(Math.floor((1 - r) * 1e10))).div(new k(1e10)), m, i, !1),
                            T = l ? e.currentPrice : new tk(1).div(e.currentPrice),
                            P = new tk(I).sub(T).abs(),
                            B = new t4(new tk(P).mul(1e15).toFixed(0), new tk(T).mul(1e15).toFixed(0)); return { allTrade: h, realAmountIn: p, amountOut: b, minAmountOut: S, expirationTime: nG(p.expirationTime, b.expirationTime), currentPrice: e.currentPrice, executionPrice: I, priceImpact: B, fee: y, remainingAccounts: f, executionPriceX64: w } }
                    static computeAmountOutFormat({ poolInfo: e, tickArrayCache: t, amountIn: n, tokenOut: i, slippage: o, epochInfo: r, catchLiquidityInsufficient: a = !1 }) { let [s, u] = i.address === e.mintB.address ? [e.mintA, e.mintB] : [e.mintB, e.mintA], [c, l] = [new tJ(F(_({}, s), { mint: s.address, isToken2022: s.programId === w.nA.toBase58() })), new tJ(F(_({}, u), { mint: u.address, isToken2022: u.programId === w.nA.toBase58() }))], { allTrade: d, realAmountIn: m, amountOut: p, minAmountOut: g, expirationTime: f, currentPrice: y, executionPrice: b, priceImpact: A, fee: I, remainingAccounts: S, executionPriceX64: T } = rn.computeAmountOut({ poolInfo: e, tickArrayCache: t, baseMint: new h.nh(s.address), amountIn: n, slippage: o, epochInfo: r, catchLiquidityInsufficient: a }); return { allTrade: d, realAmountIn: F(_({}, m), { amount: new tq(c, m.amount), fee: void 0 === m.fee ? void 0 : new tq(c, m.fee) }), amountOut: F(_({}, p), { amount: new tq(l, p.amount), fee: void 0 === p.fee ? void 0 : new tq(l, p.fee) }), minAmountOut: F(_({}, g), { amount: new tq(l, g.amount), fee: void 0 === g.fee ? void 0 : new tq(l, g.fee) }), expirationTime: f, currentPrice: new t2({ baseToken: c, denominator: new k(10).pow(new k(20 + c.decimals)), quoteToken: l, numerator: y.mul(new tk(10 ** (20 + l.decimals))).toFixed(0) }), executionPrice: new t2({ baseToken: c, denominator: new k(10).pow(new k(20 + c.decimals)), quoteToken: l, numerator: b.mul(new tk(10 ** (20 + l.decimals))).toFixed(0) }), priceImpact: A, fee: new tq(c, I), remainingAccounts: S, executionPriceX64: T } }
                    static computeAmountIn({ poolInfo: e, tickArrayCache: t, baseMint: n, epochInfo: i, amountOut: o, slippage: r, priceLimit: a = new tk(0) }) { var s; let u = n.toBase58() === e.mintA.address,
                            c = {
                                [e.mintA.address]: e.mintA.extensions.feeConfig, [e.mintB.address]: e.mintB.extensions.feeConfig },
                            l;
                        l = a.equals(new tk(0)) ? u ? oM.sub(new k(1)) : oW.add(new k(1)) : ru.priceToSqrtPriceX64(a, e.mintA.decimals, e.mintB.decimals); let d = nH(o, c[n.toString()], i, !0),
                            { expectedAmountIn: m, remainingAccounts: p, executionPrice: h, feeAmount: g } = rn.getInputAmountAndRemainAccounts(e, t, n, d.amount.sub(null != (s = d.fee) ? s : oB), l),
                            f = u ? e.mintB.address : e.mintA.address,
                            w = nH(m, c[f], i, !1),
                            y = ru.sqrtPriceX64ToPrice(h, e.mintA.decimals, e.mintB.decimals),
                            b = u ? y : new tk(1).div(y),
                            A = nH(m.mul(new k(Math.floor((1 + r) * 1e10))).div(new k(1e10)), c[f], i, !0),
                            I = u ? e.currentPrice : new tk(1).div(e.currentPrice),
                            S = new tk(b).sub(I).abs(),
                            T = new t4(new tk(S).mul(1e15).toFixed(0), new tk(I).mul(1e15).toFixed(0)); return { amountIn: w, maxAmountIn: A, realAmountOut: d, expirationTime: nG(w.expirationTime, d.expirationTime), currentPrice: e.currentPrice, executionPrice: b, priceImpact: T, fee: g, remainingAccounts: p } }
                    static estimateAprsForPriceRangeMultiplier({ poolInfo: e, aprType: t, positionTickLowerIndex: n, positionTickUpperIndex: i }) { var o, r, a; let s = e[t],
                            u = rh.getTickPrice({ poolInfo: e, tick: n, baseIn: !0 }).price.toNumber(),
                            c = rh.getTickPrice({ poolInfo: e, tick: i, baseIn: !0 }).price.toNumber(),
                            l = Math.max(u, s.priceMin),
                            d = Math.min(c, s.priceMax) - l,
                            m = c - u,
                            p = s.priceMax - s.priceMin,
                            h; return h = d <= 0 ? 0 : m === d ? p / d : p === d ? d / m : d / p * (d / m), { feeApr: s.feeApr * h, rewardsApr: [(null != (o = s.rewardApr[0]) ? o : 0) * h, (null != (r = s.rewardApr[1]) ? r : 0) * h, (null != (a = s.rewardApr[2]) ? a : 0) * h], apr: s.apr * h } }
                    static estimateAprsForPriceRangeDelta({ poolInfo: e, poolLiquidity: t, aprType: n, mintPrice: i, liquidity: o, positionTickLowerIndex: r, positionTickUpperIndex: a, chainTime: s }) { let u = e[n],
                            c = i[t$(e.mintA.address).toString()],
                            l = i[t$(e.mintB.address).toString()],
                            d = e.mintA.decimals,
                            m = e.mintB.decimals; if (!u || !c || !l) return { feeApr: 0, rewardsApr: [0, 0, 0], apr: 0 }; let p = ru.priceToSqrtPriceX64(new tk(e.price), e.mintA.decimals, e.mintB.decimals),
                            h = ru.getSqrtPriceX64FromTick(r),
                            g = ru.getSqrtPriceX64FromTick(a),
                            { amountSlippageA: f, amountSlippageB: w } = rl.getAmountsFromLiquidityWithSlippage(p, h, g, t, !1, !1, 0),
                            { amountSlippageA: y, amountSlippageB: k } = rl.getAmountsFromLiquidityWithSlippage(p, h, g, o, !1, !1, 0),
                            b = new tk(f.toString()).div(new tk(10).pow(d)).mul(c.value).add(new tk(w.toString()).div(new tk(10).pow(m)).mul(l.value)),
                            A = new tk(y.toString()).div(new tk(10).pow(d)).mul(c.value).add(new tk(k.toString()).div(new tk(10).pow(m)).mul(l.value)),
                            I = new tk(1).div(b.add(A)),
                            S = new tk(u.volumeFee).mul(365).div("day" === n ? 1 : "week" === n ? 7 : "month" === n ? 30 : 0).mul(I).mul(100).toNumber(),
                            T = e.rewardDefaultInfos.map(e => { var t, n; let o = e.mint.decimals,
                                    r = i[e.mint.address]; return s < (null != (t = e.startTime) ? t : 0) || s > (null != (n = e.endTime) ? n : 0) || !e.perSecond || !r || void 0 === o ? 0 : new tk(r.value).mul(new tk(e.perSecond).mul(31536e3)).div(new tk(10).pow(o)).mul(I).mul(100).toNumber() }); return { feeApr: S, rewardsApr: T, apr: S + T.reduce((e, t) => e + t, 0) } }
                    static getLiquidityAmountOutFromAmountIn({ poolInfo: e, inputA: t, tickLower: n, tickUpper: i, amount: o, slippage: r, add: a, epochInfo: s, amountHasFee: u }) { var c, l; let d = ru.priceToSqrtPriceX64(new tk(e.price), e.mintA.decimals, e.mintB.decimals),
                            m = ru.getSqrtPriceX64FromTick(n),
                            p = ru.getSqrtPriceX64FromTick(i),
                            h = nH(o, null == (c = e[t ? "mintA" : "mintB"].extensions) ? void 0 : c.feeConfig, s, !u),
                            g = new k(new tk(h.amount.sub(null != (l = h.fee) ? l : oB).toString()).mul(a ? 1 - r : 1 + r).toFixed(0)),
                            f; if (d.lte(m)) f = t ? rl.getLiquidityFromTokenAmountA(m, p, g, !a) : new k(0);
                        else if (d.lte(p)) { let e = rl.getLiquidityFromTokenAmountA(d, p, g, !a),
                                n = rl.getLiquidityFromTokenAmountB(m, d, g);
                            f = t ? e : n } else f = t ? new k(0) : rl.getLiquidityFromTokenAmountB(m, p, g); return rn.getAmountsFromLiquidity({ epochInfo: s, poolInfo: e, tickLower: n, tickUpper: i, liquidity: f, slippage: r, add: a }) }
                    static async getAmountsFromLiquidity({ epochInfo: e, poolInfo: t, tickLower: n, tickUpper: i, liquidity: o, slippage: r, add: a }) { var s, u, c, l; let d = ru.getSqrtPriceX64FromTick(n),
                            m = ru.getSqrtPriceX64FromTick(i),
                            p = a ? 1 + r : 1 - r,
                            h = rl.getAmountsFromLiquidity(ru.priceToSqrtPriceX64(new tk(t.price), t.mintA.decimals, t.mintB.decimals), d, m, o, a),
                            [g, f] = [nH(h.amountA, null == (s = t.mintA.extensions) ? void 0 : s.feeConfig, e, !0), nH(h.amountB, null == (u = t.mintB.extensions) ? void 0 : u.feeConfig, e, !0)],
                            [w, y] = [nH(h.amountA.muln(p), null == (c = t.mintA.extensions) ? void 0 : c.feeConfig, e, !0), nH(h.amountB.muln(p), null == (l = t.mintB.extensions) ? void 0 : l.feeConfig, e, !0)]; return { liquidity: o, amountA: g, amountB: f, amountSlippageA: w, amountSlippageB: y, expirationTime: nG(g.expirationTime, f.expirationTime) } }
                    static async fetchComputeMultipleClmmInfo({ connection: e, poolList: t, rpcDataMap: n = {} }) { let i = t.filter(e => !n[e.id]).map(e => new h.nh(e.id));
                        (await G(e, i)).forEach((e, t) => { e && (n[i[t].toBase58()] = rk.decode(e.data)) }); let o = t.map(e => o2(new h.nh(e.programId), new h.nh(e.id)).publicKey),
                            r = await rn.fetchExBitmaps({ connection: e, exBitmapAddress: o, batchRequest: !1 }); return t.reduce((e, t) => F(_({}, e), {
                            [t.id]: F(_({}, n[t.id]), { id: new h.nh(t.id), version: 6, programId: new h.nh(t.programId), mintA: t.mintA, mintB: t.mintB, ammConfig: F(_({}, t.config), { id: new h.nh(t.config.id), fundOwner: "" }), currentPrice: new tk(t.price), exBitmapInfo: r[o2(new h.nh(t.programId), new h.nh(t.id)).publicKey.toBase58()], startTime: n[t.id].startTime.toNumber(), rewardInfos: n[t.id].rewardInfos }) }), {}) }
                    static async fetchComputeClmmInfo({ connection: e, poolInfo: t, rpcData: n }) { return (await this.fetchComputeMultipleClmmInfo({ connection: e, rpcDataMap: n ? {
                                [t.id]: n } : void 0, poolList: [t] }))[t.id] } };

            function ri({ poolInfo: e, tickLower: t, tickUpper: n, amountA: i, amountB: o, slippage: r, add: a, epochInfo: s, amountHasFee: u }) { var c, l, d, m; let [p, h, g, f] = t < n ? [t, n, i, o] : [n, t, o, i], w = ru.priceToSqrtPriceX64(new tk(e.price), e.mintA.decimals, e.mintB.decimals), y = ru.getSqrtPriceX64FromTick(p), k = ru.getSqrtPriceX64FromTick(h), [b, A] = [nH(g, null == (c = e.mintA.extensions) ? void 0 : c.feeConfig, s, !u), nH(f, null == (l = e.mintB.extensions) ? void 0 : l.feeConfig, s, !u)], I = rl.getLiquidityFromTokenAmounts(w, y, k, b.amount.sub(null != (d = b.fee) ? d : oB), A.amount.sub(null != (m = A.fee) ? m : oB)); return rl.getAmountsOutFromLiquidity({ poolInfo: e, tickLower: t, tickUpper: n, liquidity: I, slippage: r, add: a, epochInfo: s, amountAddFee: !u }) } var ro = { volume: 0, volumeQuote: 0, volumeFee: 0, apr: 0, feeApr: 0, priceMin: 0, priceMax: 0, rewardApr: [] },
                rr = class { static mulDivRoundingUp(e, t, n) { let i = e.mul(t),
                            o = i.div(n); return i.mod(n).eq(oB) || (o = o.add(ov)), o }
                    static mulDivFloor(e, t, n) { if (n.eq(oB)) throw Error("division by 0"); return e.mul(t).div(n) }
                    static mulDivCeil(e, t, n) { if (n.eq(oB)) throw Error("division by 0"); return e.mul(t).add(n.sub(ov)).div(n) }
                    static x64ToDecimal(e, t) { return new tk(e.toString()).div(tk.pow(2, 64)).toDecimalPlaces(t) }
                    static decimalToX64(e) { return new k(e.mul(tk.pow(2, 64)).floor().toFixed()) }
                    static wrappingSubU128(e, t) { return e.add(oO).sub(t).mod(oO) } };

            function ra(e, t) { return rs(e.mul(t), 64, 256) }

            function rs(e, t, n) { let i = e.toTwos(n).shrn(t); return i.imaskn(n - t + 1), i.fromTwos(n - t) } var ru = class { static sqrtPriceX64ToPrice(e, t, n) { return rr.x64ToDecimal(e).pow(2).mul(tk.pow(10, t - n)) }
                    static priceToSqrtPriceX64(e, t, n) { return rr.decimalToX64(e.mul(tk.pow(10, n - t)).sqrt()) }
                    static getNextSqrtPriceX64FromInput(e, t, n, i) { if (!e.gt(oB)) throw Error("sqrtPriceX64 must greater than 0"); if (!t.gt(oB)) throw Error("liquidity must greater than 0"); return i ? this.getNextSqrtPriceFromTokenAmountARoundingUp(e, t, n, !0) : this.getNextSqrtPriceFromTokenAmountBRoundingDown(e, t, n, !0) }
                    static getNextSqrtPriceX64FromOutput(e, t, n, i) { if (!e.gt(oB)) throw Error("sqrtPriceX64 must greater than 0"); if (!t.gt(oB)) throw Error("liquidity must greater than 0"); return i ? this.getNextSqrtPriceFromTokenAmountBRoundingDown(e, t, n, !1) : this.getNextSqrtPriceFromTokenAmountARoundingUp(e, t, n, !1) }
                    static getNextSqrtPriceFromTokenAmountARoundingUp(e, t, n, i) { if (n.eq(oB)) return e; let o = t.shln(64); if (i) { let t = o.add(n.mul(e)); return t.gte(o) ? rr.mulDivCeil(o, e, t) : rr.mulDivRoundingUp(o, ov, o.div(e).add(n)) } { let t = n.mul(e); if (!o.gt(t)) throw Error("getNextSqrtPriceFromTokenAmountARoundingUp,liquidityLeftShift must gt amountMulSqrtPrice"); let i = o.sub(t); return rr.mulDivCeil(o, e, i) } }
                    static getNextSqrtPriceFromTokenAmountBRoundingDown(e, t, n, i) { let o = n.shln(64); if (i) return e.add(o.div(t)); { let n = rr.mulDivRoundingUp(o, ov, t); if (!e.gt(n)) throw Error("getNextSqrtPriceFromTokenAmountBRoundingDown sqrtPriceX64 must gt amountDivLiquidity"); return e.sub(n) } }
                    static getSqrtPriceX64FromTick(e) { if (!Number.isInteger(e)) throw Error("tick must be integer"); if (e < -443636 || e > 443636) throw Error("tick must be in MIN_TICK and MAX_TICK"); let t = e < 0 ? -1 * e : e,
                            n = new k((1 & t) != 0 ? "18445821805675395072" : "18446744073709551616"); return (2 & t) != 0 && (n = ra(n, new k("18444899583751176192"))), (4 & t) != 0 && (n = ra(n, new k("18443055278223355904"))), (8 & t) != 0 && (n = ra(n, new k("18439367220385607680"))), (16 & t) != 0 && (n = ra(n, new k("18431993317065453568"))), (32 & t) != 0 && (n = ra(n, new k("18417254355718170624"))), (64 & t) != 0 && (n = ra(n, new k("18387811781193609216"))), (128 & t) != 0 && (n = ra(n, new k("18329067761203558400"))), (256 & t) != 0 && (n = ra(n, new k("18212142134806163456"))), (512 & t) != 0 && (n = ra(n, new k("17980523815641700352"))), (1024 & t) != 0 && (n = ra(n, new k("17526086738831433728"))), (2048 & t) != 0 && (n = ra(n, new k("16651378430235570176"))), (4096 & t) != 0 && (n = ra(n, new k("15030750278694412288"))), (8192 & t) != 0 && (n = ra(n, new k("12247334978884435968"))), (16384 & t) != 0 && (n = ra(n, new k("8131365268886854656"))), (32768 & t) != 0 && (n = ra(n, new k("3584323654725218816"))), (65536 & t) != 0 && (n = ra(n, new k("696457651848324352"))), (131072 & t) != 0 && (n = ra(n, new k("26294789957507116"))), (262144 & t) != 0 && (n = ra(n, new k("37481735321082"))), e > 0 && (n = oK.div(n)), n }
                    static getTickFromPrice(e, t, n) { return ru.getTickFromSqrtPriceX64(ru.priceToSqrtPriceX64(e, t, n)) }
                    static getTickFromSqrtPriceX64(e) { let t; if (e.gt(oM) || e.lt(oW)) throw Error("Provided sqrtPrice is not within the supported sqrtPrice range."); let n = e.bitLength() - 1,
                            i = ((t = new k(n - 64).toTwos(128).shln(32)).imaskn(129), t.fromTwos(128)),
                            o = new k("8000000000000000", "hex"),
                            r = 0,
                            a = new k(0),
                            s = n >= 64 ? e.shrn(n - 63) : e.shln(63 - n); for (; o.gt(new k(0)) && r < 16;) { let e = (s = s.mul(s)).shrn(127);
                            s = s.shrn(63 + e.toNumber()), a = a.add(o.mul(e)), o = o.shrn(1), r += 1 } let u = a.shrn(32),
                            c = i.add(u).mul(new k("59543866431248")),
                            l = rs(c.sub(new k("184467440737095516")), 64, 128).toNumber(),
                            d = rs(c.add(new k("15793534762490258745")), 64, 128).toNumber(); return l == d ? l : ru.getSqrtPriceX64FromTick(d).lte(e) ? d : l } },
                rc = class { static getTickWithPriceAndTickspacing(e, t, n, i) { let o = ru.getTickFromSqrtPriceX64(ru.priceToSqrtPriceX64(e, n, i)) / t; return (o = o < 0 ? Math.floor(o) : Math.ceil(o)) * t }
                    static roundPriceWithTickspacing(e, t, n, i) { let o = rc.getTickWithPriceAndTickspacing(e, t, n, i),
                            r = ru.getSqrtPriceX64FromTick(o); return ru.sqrtPriceX64ToPrice(r, n, i) } },
                rl = class { static addDelta(e, t) { return e.add(t) }
                    static getTokenAmountAFromLiquidity(e, t, n, i) { if (e.gt(t) && ([e, t] = [t, e]), !e.gt(oB)) throw Error("sqrtPriceX64A must greater than 0"); let o = n.ushln(64),
                            r = t.sub(e); return i ? rr.mulDivRoundingUp(rr.mulDivCeil(o, r, t), ov, e) : rr.mulDivFloor(o, r, t).div(e) }
                    static getTokenAmountBFromLiquidity(e, t, n, i) { if (e.gt(t) && ([e, t] = [t, e]), !e.gt(oB)) throw Error("sqrtPriceX64A must greater than 0"); return i ? rr.mulDivCeil(n, t.sub(e), ox) : rr.mulDivFloor(n, t.sub(e), ox) }
                    static getLiquidityFromTokenAmountA(e, t, n, i) { e.gt(t) && ([e, t] = [t, e]); let o = n.mul(e).mul(t),
                            r = t.sub(e),
                            a = o.div(r); return i ? rr.mulDivRoundingUp(a, ov, oq) : a.shrn(64) }
                    static getLiquidityFromTokenAmountB(e, t, n) { return e.gt(t) && ([e, t] = [t, e]), rr.mulDivFloor(n, oq, t.sub(e)) }
                    static getLiquidityFromTokenAmounts(e, t, n, i, o) { if (t.gt(n) && ([t, n] = [n, t]), e.lte(t)) return rl.getLiquidityFromTokenAmountA(t, n, i, !1); if (!e.lt(n)) return rl.getLiquidityFromTokenAmountB(t, n, o); { let r = rl.getLiquidityFromTokenAmountA(e, n, i, !1),
                                a = rl.getLiquidityFromTokenAmountB(t, e, o); return r.lt(a) ? r : a } }
                    static getAmountsFromLiquidity(e, t, n, i, o) { return (t.gt(n) && ([t, n] = [n, t]), e.lte(t)) ? { amountA: rl.getTokenAmountAFromLiquidity(t, n, i, o), amountB: new k(0) } : e.lt(n) ? { amountA: rl.getTokenAmountAFromLiquidity(e, n, i, o), amountB: rl.getTokenAmountBFromLiquidity(t, e, i, o) } : { amountA: new k(0), amountB: rl.getTokenAmountBFromLiquidity(t, n, i, o) } }
                    static getAmountsFromLiquidityWithSlippage(e, t, n, i, o, r, a) { let { amountA: s, amountB: u } = rl.getAmountsFromLiquidity(e, t, n, i, r), c = o ? 1 + a : 1 - a; return { amountSlippageA: new k(new tk(s.toString()).mul(c).toFixed(0)), amountSlippageB: new k(new tk(u.toString()).mul(c).toFixed(0)) } }
                    static getAmountsOutFromLiquidity({ poolInfo: e, tickLower: t, tickUpper: n, liquidity: i, slippage: o, add: r, epochInfo: a, amountAddFee: s }) { var u, c, l, d; let m = ru.priceToSqrtPriceX64(new tk(e.price), e.mintA.decimals, e.mintB.decimals),
                            p = ru.getSqrtPriceX64FromTick(t),
                            h = ru.getSqrtPriceX64FromTick(n),
                            g = r ? 1 + o : 1 - o,
                            f = rl.getAmountsFromLiquidity(m, p, h, i, r),
                            [w, y] = [nH(f.amountA, null == (u = e.mintA.extensions) ? void 0 : u.feeConfig, a, s), nH(f.amountB, null == (c = e.mintB.extensions) ? void 0 : c.feeConfig, a, s)],
                            [b, A] = [nH(new k(new tk(f.amountA.toString()).mul(g).toFixed(0)), null == (l = e.mintA.extensions) ? void 0 : l.feeConfig, a, s), nH(new k(new tk(f.amountB.toString()).mul(g).toFixed(0)), null == (d = e.mintB.extensions) ? void 0 : d.feeConfig, a, s)]; return { liquidity: i, amountA: w, amountB: y, amountSlippageA: b, amountSlippageB: A, expirationTime: nG(w.expirationTime, y.expirationTime) } } },
                rd = class { static swapCompute(e, t, n, i, o, r, a, s, u, c, l, d, m, p, h = !1) { if (d.eq(oB)) throw Error("amountSpecified must not be 0"); if (p || (p = r ? oW.add(ov) : oM.sub(ov)), r) { if (p.lt(oW)) throw Error("sqrtPriceX64 must greater than MIN_SQRT_PRICE_X64"); if (p.gte(l)) throw Error("sqrtPriceX64 must smaller than current") } else { if (p.gt(oM)) throw Error("sqrtPriceX64 must smaller than MAX_SQRT_PRICE_X64"); if (p.lte(l)) throw Error("sqrtPriceX64 must greater than current") } let g = d.gt(oB),
                            f = { amountSpecifiedRemaining: d, amountCalculated: oB, sqrtPriceX64: l, tick: u > m ? Math.min(m + o9.tickCount(c) - 1, u) : m, accounts: [], liquidity: s, feeAmount: new k(0) },
                            w = m,
                            y = n[m],
                            b = !r && y.startTickIndex === f.tick; for (; !f.amountSpecifiedRemaining.eq(oB) && !f.sqrtPriceX64.eq(p);) { let s; let u = {};
                            u.sqrtPriceStartX64 = f.sqrtPriceX64; let l = rh.nextInitTick(y, f.tick, c, r, b) || null,
                                d = null; if (!(null != l && l.liquidityGross.gtn(0))) { let a = rn.nextInitializedTickArrayStartIndex({ tickCurrent: f.tick, tickSpacing: c, tickArrayBitmap: i, exBitmapInfo: o }, w, r); if (!a.isExist) { if (h) return { allTrade: !1, amountSpecifiedRemaining: f.amountSpecifiedRemaining, amountCalculated: f.amountCalculated, feeAmount: f.feeAmount, sqrtPriceX64: f.sqrtPriceX64, liquidity: f.liquidity, tickCurrent: f.tick, accounts: f.accounts }; throw Error("swapCompute LiquidityInsufficient") } let { publicKey: s } = o1(e, t, w = a.nextStartIndex);
                                d = s, y = n[w]; try { l = rh.firstInitializedTick(y, r) } catch { throw Error("not found next tick info") } } if (u.tickNext = l.tick, u.initialized = l.liquidityGross.gtn(0), m !== w && d && (f.accounts.push(d), m = w), u.tickNext < -443636 ? u.tickNext = -443636 : u.tickNext > 443636 && (u.tickNext = 443636), u.sqrtPriceNextX64 = ru.getSqrtPriceX64FromTick(u.tickNext), s = r && u.sqrtPriceNextX64.lt(p) || !r && u.sqrtPriceNextX64.gt(p) ? p : u.sqrtPriceNextX64, [f.sqrtPriceX64, u.amountIn, u.amountOut, u.feeAmount] = rd.swapStepCompute(f.sqrtPriceX64, s, f.liquidity, f.amountSpecifiedRemaining, a), f.feeAmount = f.feeAmount.add(u.feeAmount), g ? (f.amountSpecifiedRemaining = f.amountSpecifiedRemaining.sub(u.amountIn.add(u.feeAmount)), f.amountCalculated = f.amountCalculated.sub(u.amountOut)) : (f.amountSpecifiedRemaining = f.amountSpecifiedRemaining.add(u.amountOut), f.amountCalculated = f.amountCalculated.add(u.amountIn.add(u.feeAmount))), f.sqrtPriceX64.eq(u.sqrtPriceNextX64)) { if (u.initialized) { let e = l.liquidityNet;
                                    r && (e = e.mul(oC)), f.liquidity = rl.addDelta(f.liquidity, e) }
                                b = u.tickNext != f.tick && !r && y.startTickIndex === u.tickNext, f.tick = r ? u.tickNext - 1 : u.tickNext } else if (f.sqrtPriceX64 != u.sqrtPriceStartX64) { let e = ru.getTickFromSqrtPriceX64(f.sqrtPriceX64);
                                b = e != f.tick && !r && y.startTickIndex === e, f.tick = e } } try { let { nextStartIndex: n, isExist: a } = o9.nextInitializedTickArray(f.tick, c, r, i, o);
                            a && m !== n && (f.accounts.push(o1(e, t, n).publicKey), m = n) } catch {} return { allTrade: !0, amountSpecifiedRemaining: oB, amountCalculated: f.amountCalculated, feeAmount: f.feeAmount, sqrtPriceX64: f.sqrtPriceX64, liquidity: f.liquidity, tickCurrent: f.tick, accounts: f.accounts } }
                    static swapStepCompute(e, t, n, i, o) { let r = { sqrtPriceX64Next: new k(0), amountIn: new k(0), amountOut: new k(0), feeAmount: new k(0) },
                            a = e.gte(t),
                            s = i.gte(oB); if (s) { let s = rr.mulDivFloor(i, o_.sub(new k(o.toString())), o_);
                            r.amountIn = a ? rl.getTokenAmountAFromLiquidity(t, e, n, !0) : rl.getTokenAmountBFromLiquidity(e, t, n, !0), s.gte(r.amountIn) ? r.sqrtPriceX64Next = t : r.sqrtPriceX64Next = ru.getNextSqrtPriceX64FromInput(e, n, s, a) } else r.amountOut = a ? rl.getTokenAmountBFromLiquidity(t, e, n, !1) : rl.getTokenAmountAFromLiquidity(e, t, n, !1), i.mul(oC).gte(r.amountOut) ? r.sqrtPriceX64Next = t : r.sqrtPriceX64Next = ru.getNextSqrtPriceX64FromOutput(e, n, i.mul(oC), a); let u = t.eq(r.sqrtPriceX64Next); return a ? (u && s || (r.amountIn = rl.getTokenAmountAFromLiquidity(r.sqrtPriceX64Next, e, n, !0)), u && !s || (r.amountOut = rl.getTokenAmountBFromLiquidity(r.sqrtPriceX64Next, e, n, !1))) : (r.amountIn = u && s ? r.amountIn : rl.getTokenAmountBFromLiquidity(e, r.sqrtPriceX64Next, n, !0), r.amountOut = u && !s ? r.amountOut : rl.getTokenAmountAFromLiquidity(e, r.sqrtPriceX64Next, n, !1)), !s && r.amountOut.gt(i.mul(oC)) && (r.amountOut = i.mul(oC)), s && !r.sqrtPriceX64Next.eq(t) ? r.feeAmount = i.sub(r.amountIn) : r.feeAmount = rr.mulDivCeil(r.amountIn, new k(o), o_.sub(new k(o))), [r.sqrtPriceX64Next, r.amountIn, r.amountOut, r.feeAmount] } },
                rm = 60,
                rp = 512,
                rh = class { static getTickArrayAddressByTick(e, t, n, i) { let o = rh.getTickArrayStartIndexByTick(n, i),
                            { publicKey: r } = o1(e, t, o); return r }
                    static getTickOffsetInArray(e, t) { if (e % t != 0) throw Error("tickIndex % tickSpacing not equal 0"); let n = rh.getTickArrayStartIndexByTick(e, t),
                            i = Math.floor((e - n) / t); if (i < 0 || i >= rm) throw Error("tick offset in array overflow"); return i }
                    static getTickArrayBitIndex(e, t) { let n = o9.tickCount(t),
                            i = e / n; return e < 0 && e % n != 0 ? Math.ceil(i) - 1 : Math.floor(i) }
                    static getTickArrayStartIndexByTick(e, t) { return this.getTickArrayBitIndex(e, t) * o9.tickCount(t) }
                    static getTickArrayOffsetInBitmapByTick(e, t) { return Math.abs(Math.floor(e / (t * rm)) + 512) }
                    static checkTickArrayIsInitialized(e, t, n) { let i = n * rm,
                            o = Math.abs(Math.floor(t / i) + 512); return { isInitialized: e.testn(o), startIndex: (o - 512) * i } }
                    static getNextTickArrayStartIndex(e, t, n) { return n ? e - t * rm : e + t * rm }
                    static mergeTickArrayBitmap(e) { let t = new k(0); for (let n = 0; n < e.length; n++) t = t.add(e[n].shln(64 * n)); return t }
                    static getInitializedTickArrayInRange(e, t, n, i, o) { let r = Math.floor(i / (n * rm)); return [...rh.searchLowBitFromStart(e, t, r - 1, o, n), ...rh.searchHightBitFromStart(e, t, r, o, n)] }
                    static getAllInitializedTickArrayStartIndex(e, t, n) { return rh.searchHightBitFromStart(e, t, 0, rp, n) }
                    static getAllInitializedTickArrayInfo(e, t, n, i, o) { let r = []; for (let a of rh.getAllInitializedTickArrayStartIndex(n, i, o)) { let { publicKey: n } = o1(e, t, a);
                            r.push({ tickArrayStartIndex: a, tickArrayAddress: n }) } return r }
                    static getAllInitializedTickInTickArray(e) { return e.ticks.filter(e => e.liquidityGross.gtn(0)) }
                    static searchLowBitFromStart(e, t, n, i, o) { let r = [...[...t.negativeTickArrayBitmap].reverse(), e.slice(0, 8), e.slice(8, 16), ...t.positiveTickArrayBitmap].map(e => rh.mergeTickArrayBitmap(e)),
                            a = []; for (; n >= -7680;) { let e = Math.floor((n + 7680) / 512),
                                t = (n + 7680) % 512; if (r[e].testn(t) && a.push(n), n--, a.length === i) break } let s = o9.tickCount(o); return a.map(e => e * s) }
                    static searchHightBitFromStart(e, t, n, i, o) { let r = [...[...t.negativeTickArrayBitmap].reverse(), e.slice(0, 8), e.slice(8, 16), ...t.positiveTickArrayBitmap].map(e => rh.mergeTickArrayBitmap(e)),
                            a = []; for (; n < 7680;) { let e = Math.floor((n + 7680) / 512),
                                t = (n + 7680) % 512; if (r[e].testn(t) && a.push(n), n++, a.length === i) break } let s = o9.tickCount(o); return a.map(e => e * s) }
                    static checkIsOutOfBoundary(e) { return e < -443636 || e > 443636 }
                    static nextInitTick(e, t, n, i, o) { if (o9.getArrayStartIndex(t, n) != e.startTickIndex) return null; let r = Math.floor((t - e.startTickIndex) / n); if (i)
                            for (; r >= 0;) { if (e.ticks[r].liquidityGross.gtn(0)) return e.ticks[r];
                                r -= 1 } else
                                for (o || (r += 1); r < rm;) { if (e.ticks[r].liquidityGross.gtn(0)) return e.ticks[r];
                                    r += 1 }
                        return null }
                    static firstInitializedTick(e, t) { if (t) { let t = rm - 1; for (; t >= 0;) { if (e.ticks[t].liquidityGross.gtn(0)) return e.ticks[t];
                                t -= 1 } } else { let t = 0; for (; t < rm;) { if (e.ticks[t].liquidityGross.gtn(0)) return e.ticks[t];
                                t += 1 } } throw Error(`firstInitializedTick check error: ${e} - ${t}`) }
                    static _getTickPriceLegacy({ poolInfo: e, tick: t, baseIn: n }) { let i = ru.getSqrtPriceX64FromTick(t),
                            o = ru.sqrtPriceX64ToPrice(i, e.mintA.decimals, e.mintB.decimals); return n ? { tick: t, price: o, tickSqrtPriceX64: i } : { tick: t, price: new tk(1).div(o), tickSqrtPriceX64: i } }
                    static _getPriceAndTickLegacy({ poolInfo: e, price: t, baseIn: n }) { let i = n ? t : new tk(1).div(t),
                            o = rc.getTickWithPriceAndTickspacing(i, e.ammConfig.tickSpacing, e.mintA.decimals, e.mintB.decimals),
                            r = ru.getSqrtPriceX64FromTick(o),
                            a = ru.sqrtPriceX64ToPrice(r, e.mintA.decimals, e.mintB.decimals); return n ? { tick: o, price: a } : { tick: o, price: new tk(1).div(a) } }
                    static getTickPrice({ poolInfo: e, tick: t, baseIn: n }) { let i = ru.getSqrtPriceX64FromTick(t),
                            o = ru.sqrtPriceX64ToPrice(i, e.mintA.decimals, e.mintB.decimals); return n ? { tick: t, price: o, tickSqrtPriceX64: i } : { tick: t, price: new tk(1).div(o), tickSqrtPriceX64: i } }
                    static getPriceAndTick({ poolInfo: e, price: t, baseIn: n }) { let i = n ? t : new tk(1).div(t),
                            o = rc.getTickWithPriceAndTickspacing(i, e.config.tickSpacing, e.mintA.decimals, e.mintB.decimals),
                            r = ru.getSqrtPriceX64FromTick(o),
                            a = ru.sqrtPriceX64ToPrice(r, e.mintA.decimals, e.mintB.decimals); return n ? { tick: o, price: a } : { tick: o, price: new tk(1).div(a) } } },
                rg = iD([iP(8), ix("bump"), ib("index"), iL(""), iO("protocolFeeRate"), iO("tradeFeeRate"), ib("tickSpacing"), iV(iq(), 8, "")]),
                rf = iD([iO("blockTimestamp"), iW("tickCumulative"), iV(iq(), 4)]),
                rw = iD([iP(8), iR("initialized"), iq("recentEpoch"), ib("observationIndex"), iL("poolId"), iV(rf, 100, "observations"), iV(iq(), 4)]),
                ry = iD([ix("rewardState"), iq("openTime"), iq("endTime"), iq("lastUpdateTime"), iK("emissionsPerSecondX64"), iq("rewardTotalEmissioned"), iq("rewardClaimed"), iL("tokenMint"), iL("tokenVault"), iL("creator"), iK("rewardGrowthGlobalX64")]),
                rk = iD([iP(8), ix("bump"), iL("ammConfig"), iL("creator"), iL("mintA"), iL("mintB"), iL("vaultA"), iL("vaultB"), iL("observationId"), ix("mintDecimalsA"), ix("mintDecimalsB"), ib("tickSpacing"), iK("liquidity"), iK("sqrtPriceX64"), iS("tickCurrent"), iO(), iK("feeGrowthGlobalX64A"), iK("feeGrowthGlobalX64B"), iq("protocolFeesTokenA"), iq("protocolFeesTokenB"), iK("swapInAmountTokenA"), iK("swapOutAmountTokenB"), iK("swapInAmountTokenB"), iK("swapOutAmountTokenA"), ix("status"), iV(ix(), 7, ""), iV(ry, 3, "rewardInfos"), iV(iq(), 16, "tickArrayBitmap"), iq("totalFeesTokenA"), iq("totalFeesClaimedTokenA"), iq("totalFeesTokenB"), iq("totalFeesClaimedTokenB"), iq("fundFeesTokenA"), iq("fundFeesTokenB"), iq("startTime"), iV(iq(), 57, "padding")]),
                rb = iD([iK("growthInsideLastX64"), iq("rewardAmountOwed")]),
                rA = iD([iP(8), ix("bump"), iL("nftMint"), iL("poolId"), iS("tickLower"), iS("tickUpper"), iK("liquidity"), iK("feeGrowthInsideLastX64A"), iK("feeGrowthInsideLastX64B"), iq("tokenFeesOwedA"), iq("tokenFeesOwedB"), iV(rb, 3, "rewardInfos"), iV(iq(), 8, "")]),
                rI = (iD([iP(8), ix("bump"), iL("poolId"), iS("tickLowerIndex"), iS("tickUpperIndex"), iK("liquidity"), iK("feeGrowthInsideLastX64A"), iK("feeGrowthInsideLastX64B"), iq("tokenFeesOwedA"), iq("tokenFeesOwedB"), iV(iK(), 3, "rewardGrowthInside"), iV(iq(), 8, "")]), iD([iS("tick"), new iv(16, !0, "liquidityNet"), iK("liquidityGross"), iK("feeGrowthOutsideX64A"), iK("feeGrowthOutsideX64B"), iV(iK(), 3, "rewardGrowthsOutsideX64"), iV(iO(), 13, "")])),
                rS = iD([iP(8), iL("poolId"), iS("startTickIndex"), iV(rI, rm, "ticks"), ix("initializedTickCount"), iV(ix(), 115, "")]),
                rT = iD([iP(329), iV(iL(), 100, "whitelistMints")]),
                rP = iD([iP(8), iL("poolId"), iV(iV(iq(), 8), 14, "positiveTickArrayBitmap"), iV(iV(iq(), 8), 14, "negativeTickArrayBitmap")]),
                rB = (iD([iq(), ix("bump"), iL("owner"), iL("poolId"), iL("positionId"), iL("nftAccount"), iV(iq(), 8)]), iD([iP(8), ix("bump"), iL("lockOwner"), iL("poolId"), iL("positionId"), iL("nftAccount"), iL("lockNftMint"), iq("recentEpoch"), iV(iq(), 8)]));
            rw.span; var rv = X("Nova Bot_Clmm"),
                rC = { createPool: [233, 146, 209, 142, 207, 104, 64, 188], initReward: [95, 135, 192, 196, 242, 129, 230, 68], setRewardEmissions: [112, 52, 167, 75, 32, 201, 211, 137], openPosition: [77, 184, 74, 214, 112, 86, 241, 199], closePosition: [123, 134, 81, 0, 49, 68, 98, 98], increaseLiquidity: [133, 29, 89, 223, 69, 238, 176, 10], decreaseLiquidity: [58, 127, 188, 62, 79, 82, 196, 96], swap: [43, 4, 237, 11, 26, 201, 30, 98], collectReward: [18, 237, 166, 197, 34, 16, 213, 144] },
                rx = [188, 37, 179, 131, 82, 150, 84, 73],
                rO = [16, 72, 250, 198, 14, 162, 212, 19],
                rq = class { static createPoolInstruction(e, t, n, i, o, r, a, s, u, c, l, d, m, p) { let g = iD([iK("sqrtPriceX64"), iq("startTime")]),
                            f = [{ pubkey: n, isSigner: !0, isWritable: !0 }, { pubkey: i, isSigner: !1, isWritable: !1 }, { pubkey: t, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !1 }, { pubkey: u, isSigner: !1, isWritable: !1 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !1 }, { pubkey: l, isSigner: !1, isWritable: !1 }, { pubkey: h.yc.programId, isSigner: !1, isWritable: !1 }, { pubkey: tV, isSigner: !1, isWritable: !1 }],
                            w = x.alloc(g.span);
                        g.encode({ sqrtPriceX64: m, startTime: p }, w); let y = x.from([...rC.createPool, ...w]); return new h.Sl({ keys: f, programId: e, data: y }) }
                    static async createPoolInstructions(e) { let { programId: t, owner: n, mintA: i, mintB: o, ammConfigId: r, initialPriceX64: a, startTime: s } = e, [u, c] = [new h.nh(i.address), new h.nh(o.address)], { publicKey: l } = np([oH, r.toBuffer(), u.toBuffer(), c.toBuffer()], t), { publicKey: d } = np([oY, l.toBuffer()], t), { publicKey: m } = oJ(t, l, u), { publicKey: p } = oJ(t, l, c); return { signers: [], instructions: [this.createPoolInstruction(t, l, n, r, d, u, m, new h.nh(i.programId || w.H_), c, p, new h.nh(o.programId || w.H_), o2(t, l).publicKey, a, s)], instructionTypes: [nr.CreateAccount, nr.ClmmCreatePool], address: { poolId: l, observationId: d, mintAVault: m, mintBVault: p }, lookupTableAddress: [] } }
                    static openPositionFromLiquidityInstruction(e, t, n, i, o, r, a, s, u, c, l, d, m, p, g, f, y, k, b, A, I, S, T, P, B, v) { let C = iD([iS("tickLowerIndex"), iS("tickUpperIndex"), iS("tickArrayLowerStartIndex"), iS("tickArrayUpperStartIndex"), iK("liquidity"), iq("amountMaxA"), iq("amountMaxB"), iR("withMetadata"), ix("optionBaseFlag"), iR("baseFlag")]),
                            O = [...v ? [{ pubkey: v, isSigner: !1, isWritable: !0 }] : []],
                            q = [{ pubkey: t, isSigner: !0, isWritable: !0 }, { pubkey: i, isSigner: !1, isWritable: !1 }, { pubkey: o, isSigner: !0, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: m, isSigner: !1, isWritable: !0 }, { pubkey: p, isSigner: !1, isWritable: !0 }, { pubkey: g, isSigner: !1, isWritable: !0 }, { pubkey: tV, isSigner: !1, isWritable: !1 }, { pubkey: h.yc.programId, isSigner: !1, isWritable: !1 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w._u, isSigner: !1, isWritable: !1 }, { pubkey: tU, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: f, isSigner: !1, isWritable: !1 }, { pubkey: y, isSigner: !1, isWritable: !1 }, ...O],
                            K = x.alloc(C.span);
                        C.encode({ tickLowerIndex: k, tickUpperIndex: b, tickArrayLowerStartIndex: A, tickArrayUpperStartIndex: I, liquidity: S, amountMaxA: T, amountMaxB: P, withMetadata: "create" === B, baseFlag: !1, optionBaseFlag: 0 }, K); let W = x.from([...rC.openPosition, ...K]); return new h.Sl({ keys: q, programId: e, data: W }) }
                    static async openPositionInstructions({ poolInfo: e, poolKeys: t, ownerInfo: n, tickLower: i, tickUpper: o, liquidity: r, amountMaxA: a, amountMaxB: s, withMetadata: u, getEphemeralSigners: c }) { let l = [],
                            [d, m] = [new h.nh(e.programId), new h.nh(e.id)],
                            p; if (c) p = new h.nh((await c(1))[0]);
                        else { let e = h.RG.generate();
                            l.push(e), p = e.publicKey } let g = rh.getTickArrayStartIndexByTick(i, e.config.tickSpacing),
                            f = rh.getTickArrayStartIndexByTick(o, e.config.tickSpacing),
                            { publicKey: y } = o1(d, m, g),
                            { publicKey: k } = o1(d, m, f),
                            { publicKey: b } = nb(n.wallet, p, w.H_),
                            { publicKey: A } = o6(p),
                            { publicKey: I } = o4(d, p),
                            { publicKey: S } = o0(d, m, i, o); return { signers: l, instructions: [this.openPositionFromLiquidityInstruction(d, n.feePayer, m, n.wallet, p, b, A, S, y, k, I, n.tokenAccountA, n.tokenAccountB, new h.nh(t.vault.A), new h.nh(t.vault.B), new h.nh(e.mintA.address), new h.nh(e.mintB.address), i, o, g, f, r, a, s, u)], instructionTypes: [nr.ClmmOpenPosition], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [], address: { nftMint: p, tickArrayLower: y, tickArrayUpper: k, positionNftAccount: b, metadataAccount: A, personalPosition: I, protocolPosition: S } } }
                    static async openPositionFromBaseInstructions({ poolInfo: e, poolKeys: t, ownerInfo: n, tickLower: i, tickUpper: o, base: r, baseAmount: a, otherAmountMax: s, withMetadata: u, getEphemeralSigners: c }) { let l = [],
                            [d, m] = [new h.nh(e.programId), new h.nh(e.id)],
                            p; if (c) p = new h.nh((await c(1))[0]);
                        else { let e = h.RG.generate();
                            l.push(e), p = e.publicKey } let g = rh.getTickArrayStartIndexByTick(i, e.config.tickSpacing),
                            f = rh.getTickArrayStartIndexByTick(o, e.config.tickSpacing),
                            { publicKey: y } = o1(d, m, g),
                            { publicKey: k } = o1(d, m, f),
                            { publicKey: b } = nb(n.wallet, p, w.H_),
                            { publicKey: A } = o6(p),
                            { publicKey: I } = o4(d, p),
                            { publicKey: S } = o0(d, m, i, o),
                            T = this.openPositionFromBaseInstruction(d, n.feePayer, m, n.wallet, p, b, A, S, y, k, I, n.tokenAccountA, n.tokenAccountB, new h.nh(t.vault.A), new h.nh(t.vault.B), new h.nh(e.mintA.address), new h.nh(e.mintB.address), i, o, g, f, u, r, a, s, rn.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [g, f]) ? o2(d, m).publicKey : void 0); return { address: { nftMint: p, tickArrayLower: y, tickArrayUpper: k, positionNftAccount: b, metadataAccount: A, personalPosition: I, protocolPosition: S }, instructions: [T], signers: l, instructionTypes: [nr.ClmmOpenPosition], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [] } }
                    static openPositionFromBaseInstruction(e, t, n, i, o, r, a, s, u, c, l, d, m, p, g, f, y, b, A, I, S, T, P, B, v, C) { let O = iD([iS("tickLowerIndex"), iS("tickUpperIndex"), iS("tickArrayLowerStartIndex"), iS("tickArrayUpperStartIndex"), iK("liquidity"), iq("amountMaxA"), iq("amountMaxB"), iR("withMetadata"), ix("optionBaseFlag"), iR("baseFlag")]),
                            q = [...C ? [{ pubkey: C, isSigner: !1, isWritable: !0 }] : []],
                            K = [{ pubkey: t, isSigner: !0, isWritable: !0 }, { pubkey: i, isSigner: !1, isWritable: !1 }, { pubkey: o, isSigner: !0, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: m, isSigner: !1, isWritable: !0 }, { pubkey: p, isSigner: !1, isWritable: !0 }, { pubkey: g, isSigner: !1, isWritable: !0 }, { pubkey: tV, isSigner: !1, isWritable: !1 }, { pubkey: h.yc.programId, isSigner: !1, isWritable: !1 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w._u, isSigner: !1, isWritable: !1 }, { pubkey: tU, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: f, isSigner: !1, isWritable: !1 }, { pubkey: y, isSigner: !1, isWritable: !1 }, ...q],
                            W = x.alloc(O.span);
                        O.encode({ tickLowerIndex: b, tickUpperIndex: A, tickArrayLowerStartIndex: I, tickArrayUpperStartIndex: S, liquidity: new k(0), amountMaxA: "MintA" === P ? B : v, amountMaxB: "MintA" === P ? v : B, withMetadata: "create" === T, baseFlag: "MintA" === P, optionBaseFlag: 1 }, W); let M = x.from([...rC.openPosition, ...W]); return new h.Sl({ keys: K, programId: e, data: M }) }
                    static async openPositionFromLiquidityInstructions({ poolInfo: e, poolKeys: t, ownerInfo: n, tickLower: i, tickUpper: o, liquidity: r, amountMaxA: a, amountMaxB: s, withMetadata: u, getEphemeralSigners: c }) { let l, d = []; if (c) l = new h.nh((await c(1))[0]);
                        else { let e = h.RG.generate();
                            d.push(e), l = e.publicKey } let [m, p] = [new h.nh(e.programId), new h.nh(e.id)], g = rh.getTickArrayStartIndexByTick(i, e.config.tickSpacing), f = rh.getTickArrayStartIndexByTick(o, e.config.tickSpacing), { publicKey: y } = o1(m, p, g), { publicKey: k } = o1(m, p, f), { publicKey: b } = nb(n.wallet, l, w.H_), { publicKey: A } = o6(l), { publicKey: I } = o4(m, l), { publicKey: S } = o0(m, p, i, o), T = this.openPositionFromLiquidityInstruction(m, n.wallet, p, n.wallet, l, b, A, S, y, k, I, n.tokenAccountA, n.tokenAccountB, new h.nh(t.vault.A), new h.nh(t.vault.B), new h.nh(t.mintA.address), new h.nh(t.mintB.address), i, o, g, f, r, a, s, u, rn.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [g, f]) ? o2(m, p).publicKey : void 0); return { address: { nftMint: l, tickArrayLower: y, tickArrayUpper: k, positionNftAccount: b, metadataAccount: A, personalPosition: I, protocolPosition: S }, instructions: [T], signers: d, instructionTypes: [nr.ClmmOpenPosition], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [] } }
                    static closePositionInstruction(e, t, n, i, o) { let r = iD([]),
                            a = [{ pubkey: t, isSigner: !0, isWritable: !0 }, { pubkey: n, isSigner: !1, isWritable: !0 }, { pubkey: i, isSigner: !1, isWritable: !0 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: h.yc.programId, isSigner: !1, isWritable: !1 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }],
                            s = x.alloc(r.span);
                        r.encode({}, s); let u = x.from([...rC.closePosition, ...s]); return new h.Sl({ keys: a, programId: e, data: u }) }
                    static closePositionInstructions({ poolInfo: e, poolKeys: t, ownerInfo: n, ownerPosition: i }) { let o = new h.nh(e.programId),
                            { publicKey: r } = nb(n.wallet, i.nftMint, w.H_),
                            { publicKey: a } = o4(o, i.nftMint),
                            s = []; return s.push(this.closePositionInstruction(o, n.wallet, i.nftMint, r, a)), { address: { positionNftAccount: r, personalPosition: a }, signers: [], instructions: s, instructionTypes: [nr.ClmmClosePosition], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [] } }
                    static increasePositionFromLiquidityInstruction(e, t, n, i, o, r, a, s, u, c, l, d, m, p, g, f, y, k) { let b = iD([iK("liquidity"), iq("amountMaxA"), iq("amountMaxB"), ix("optionBaseFlag"), iR("baseFlag")]),
                            A = [...k ? [{ pubkey: k, isSigner: !1, isWritable: !0 }] : []],
                            I = [{ pubkey: t, isSigner: !0, isWritable: !1 }, { pubkey: n, isSigner: !1, isWritable: !1 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: i, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: m, isSigner: !1, isWritable: !1 }, { pubkey: p, isSigner: !1, isWritable: !1 }, ...A],
                            S = x.alloc(b.span);
                        b.encode({ liquidity: g, amountMaxA: f, amountMaxB: y, optionBaseFlag: 0, baseFlag: !1 }, S); let T = x.from([...rC.increaseLiquidity, ...S]); return new h.Sl({ keys: I, programId: e, data: T }) }
                    static increasePositionFromLiquidityInstructions({ poolInfo: e, poolKeys: t, ownerPosition: n, ownerInfo: i, liquidity: o, amountMaxA: r, amountMaxB: a }) { let [s, u] = [new h.nh(e.programId), new h.nh(e.id)], c = rh.getTickArrayStartIndexByTick(n.tickLower, e.config.tickSpacing), l = rh.getTickArrayStartIndexByTick(n.tickUpper, e.config.tickSpacing), { publicKey: d } = o1(s, u, c), { publicKey: m } = o1(s, u, l), { publicKey: p } = nb(i.wallet, n.nftMint, w.H_), { publicKey: g } = o4(s, n.nftMint), { publicKey: f } = o0(s, u, n.tickLower, n.tickUpper), y = this.increasePositionFromLiquidityInstruction(s, i.wallet, p, g, u, f, d, m, i.tokenAccountA, i.tokenAccountB, new h.nh(t.vault.A), new h.nh(t.vault.B), new h.nh(e.mintA.address), new h.nh(e.mintB.address), o, r, a, rn.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [c, l]) ? o2(s, u).publicKey : void 0); return { address: { tickArrayLower: d, tickArrayUpper: m, positionNftAccount: p, personalPosition: g, protocolPosition: f }, signers: [], instructions: [y], instructionTypes: [nr.ClmmIncreasePosition], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [] } }
                    static increasePositionFromBaseInstructions({ poolInfo: e, poolKeys: t, ownerPosition: n, ownerInfo: i, base: o, baseAmount: r, otherAmountMax: a }) { let [s, u] = [new h.nh(e.programId), new h.nh(e.id)], c = rh.getTickArrayStartIndexByTick(n.tickLower, e.config.tickSpacing), l = rh.getTickArrayStartIndexByTick(n.tickUpper, e.config.tickSpacing), { publicKey: d } = o1(s, u, c), { publicKey: m } = o1(s, u, l), { publicKey: p } = nb(i.wallet, n.nftMint, w.H_), { publicKey: g } = o4(s, n.nftMint), { publicKey: f } = o0(s, u, n.tickLower, n.tickUpper); return { address: { tickArrayLower: d, tickArrayUpper: m, positionNftAccount: p, personalPosition: g, protocolPosition: f }, instructions: [this.increasePositionFromBaseInstruction(s, i.wallet, p, g, u, f, d, m, i.tokenAccountA, i.tokenAccountB, new h.nh(t.vault.A), new h.nh(t.vault.B), new h.nh(e.mintA.address), new h.nh(e.mintB.address), o, r, a, rn.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [c, l]) ? o2(s, u).publicKey : void 0)], signers: [], instructionTypes: [nr.ClmmIncreasePosition], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [] } }
                    static increasePositionFromBaseInstruction(e, t, n, i, o, r, a, s, u, c, l, d, m, p, g, f, y, b) { let A = iD([iK("liquidity"), iq("amountMaxA"), iq("amountMaxB"), ix("optionBaseFlag"), iR("baseFlag")]),
                            I = [...b ? [{ pubkey: b, isSigner: !1, isWritable: !0 }] : []],
                            S = [{ pubkey: t, isSigner: !0, isWritable: !1 }, { pubkey: n, isSigner: !1, isWritable: !1 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: i, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: m, isSigner: !1, isWritable: !1 }, { pubkey: p, isSigner: !1, isWritable: !1 }, ...I],
                            T = x.alloc(A.span);
                        A.encode({ liquidity: new k(0), amountMaxA: "MintA" === g ? f : y, amountMaxB: "MintA" === g ? y : f, baseFlag: "MintA" === g, optionBaseFlag: 1 }, T); let P = x.from([...rC.increaseLiquidity, ...T]); return new h.Sl({ keys: S, programId: e, data: P }) }
                    static decreaseLiquidityInstruction(e, t, n, i, o, r, a, s, u, c, l, d, m, p, g, f, y, k, b) { let A = iD([iK("liquidity"), iq("amountMinA"), iq("amountMinB")]),
                            I = [...b ? [{ pubkey: b, isSigner: !1, isWritable: !0 }] : [], ...g.map(e => [{ pubkey: e.poolRewardVault, isSigner: !1, isWritable: !0 }, { pubkey: e.ownerRewardVault, isSigner: !1, isWritable: !0 }, { pubkey: e.rewardMint, isSigner: !1, isWritable: !1 }]).flat()],
                            S = [{ pubkey: t, isSigner: !0, isWritable: !1 }, { pubkey: n, isSigner: !1, isWritable: !1 }, { pubkey: i, isSigner: !1, isWritable: !0 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: tE, isSigner: !1, isWritable: !1 }, { pubkey: m, isSigner: !1, isWritable: !1 }, { pubkey: p, isSigner: !1, isWritable: !1 }, ...I],
                            T = x.alloc(A.span);
                        A.encode({ liquidity: f, amountMinA: y, amountMinB: k }, T); let P = x.from([...rC.decreaseLiquidity, ...T]); return new h.Sl({ keys: S, programId: e, data: P }) }
                    static decreaseLiquidityInstructions({ poolInfo: e, poolKeys: t, ownerPosition: n, ownerInfo: i, liquidity: o, amountMinA: r, amountMinB: a, programId: s }) { let [u, c] = [new h.nh(e.programId), new h.nh(e.id)], l = rh.getTickArrayStartIndexByTick(n.tickLower, e.config.tickSpacing), d = rh.getTickArrayStartIndexByTick(n.tickUpper, e.config.tickSpacing), { publicKey: m } = o1(u, c, l), { publicKey: p } = o1(u, c, d), { publicKey: g } = nb(i.wallet, n.nftMint, s), { publicKey: f } = o4(u, n.nftMint), { publicKey: w } = o0(u, c, n.tickLower, n.tickUpper), y = []; for (let n = 0; n < e.rewardDefaultInfos.length; n++) y.push({ poolRewardVault: new h.nh(t.rewardInfos[n].vault), ownerRewardVault: i.rewardAccounts[n], rewardMint: new h.nh(e.rewardDefaultInfos[n].mint.address) }); let k = []; return k.push(this.decreaseLiquidityInstruction(u, i.wallet, g, f, c, w, m, p, i.tokenAccountA, i.tokenAccountB, new h.nh(t.vault.A), new h.nh(t.vault.B), new h.nh(e.mintA.address), new h.nh(e.mintB.address), y, o, r, a, rn.isOverflowDefaultTickarrayBitmap(e.config.tickSpacing, [l, d]) ? o2(u, c).publicKey : void 0)), { address: { tickArrayLower: m, tickArrayUpper: p, positionNftAccount: g, personalPosition: f, protocolPosition: w }, signers: [], instructions: k, instructionTypes: [nr.ClmmDecreasePosition], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [] } }
                    static swapInstruction(e, t, n, i, o, r, a, s, u, c, l, d, m, p, g, f, y) { let k = iD([iq("amount"), iq("otherAmountThreshold"), iK("sqrtPriceLimitX64"), iR("isBaseInput")]),
                            b = [...y ? [{ pubkey: y, isSigner: !1, isWritable: !0 }] : [], ...l.map(e => ({ pubkey: e, isSigner: !1, isWritable: !0 }))],
                            A = [{ pubkey: t, isSigner: !0, isWritable: !1 }, { pubkey: i, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !1, isWritable: !0 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: tE, isSigner: !1, isWritable: !1 }, { pubkey: u, isSigner: !1, isWritable: !1 }, { pubkey: c, isSigner: !1, isWritable: !1 }, ...b],
                            I = x.alloc(k.span);
                        k.encode({ amount: m, otherAmountThreshold: p, sqrtPriceLimitX64: g, isBaseInput: f }, I); let S = x.from([...rC.swap, ...I]); return new h.Sl({ keys: A, programId: e, data: S }) }
                    static makeSwapBaseInInstructions({ poolInfo: e, poolKeys: t, observationId: n, ownerInfo: i, inputMint: o, amountIn: r, amountOutMin: a, sqrtPriceLimitX64: s, remainingAccounts: u }) { let [c, l] = [new h.nh(e.programId), new h.nh(e.id)], [d, m] = [new h.nh(t.vault.A), new h.nh(t.vault.B)], [p, g] = [new h.nh(e.mintA.address), new h.nh(e.mintB.address)], f = e.mintA.address === o.toString(); return { signers: [], instructions: [this.swapInstruction(c, i.wallet, l, new h.nh(e.config.id), f ? i.tokenAccountA : i.tokenAccountB, f ? i.tokenAccountB : i.tokenAccountA, f ? d : m, f ? m : d, f ? p : g, f ? g : p, u, n, r, a, s, !0, o2(c, l).publicKey)], instructionTypes: [nr.ClmmSwapBaseIn], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [], address: {} } }
                    static makeSwapBaseOutInstructions({ poolInfo: e, poolKeys: t, observationId: n, ownerInfo: i, outputMint: o, amountOut: r, amountInMax: a, sqrtPriceLimitX64: s, remainingAccounts: u }) { let [c, l] = [new h.nh(e.programId), new h.nh(e.id)], [d, m] = [new h.nh(t.vault.A), new h.nh(t.vault.B)], [p, g] = [new h.nh(e.mintA.address), new h.nh(e.mintB.address)], f = e.mintA.address === o.toBase58(); return { signers: [], instructions: [this.swapInstruction(c, i.wallet, l, new h.nh(e.config.id), f ? i.tokenAccountB : i.tokenAccountA, f ? i.tokenAccountA : i.tokenAccountB, f ? m : d, f ? d : m, f ? g : p, f ? p : g, u, n, r, a, s, !1, o2(c, l).publicKey)], instructionTypes: [nr.ClmmSwapBaseOut], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [], address: {} } }
                    static initRewardInstruction(e, t, n, i, o, r, a, s, u, c, l, d) { let m = iD([iq("openTime"), iq("endTime"), iK("emissionsPerSecondX64")]),
                            p = [{ pubkey: t, isSigner: !0, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: o, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !1, isWritable: !0 }, { pubkey: i, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !1 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !1 }, { pubkey: h.yc.programId, isSigner: !1, isWritable: !1 }, { pubkey: tV, isSigner: !1, isWritable: !1 }],
                            g = x.alloc(m.span);
                        m.encode({ openTime: tA(c), endTime: tA(l), emissionsPerSecondX64: d }, g); let f = x.from([...rC.initReward, ...g]); return new h.Sl({ keys: p, programId: e, data: f }) }
                    static initRewardInstructions({ poolInfo: e, poolKeys: t, ownerInfo: n, rewardInfo: i }) { var o; let [r, a] = [new h.nh(e.programId), new h.nh(e.id)], s = (o = i.mint, np([oz, a.toBuffer(), o.toBuffer()], r)).publicKey, u = np([oZ], r).publicKey, c = [this.initRewardInstruction(r, n.wallet, a, u, new h.nh(e.config.id), n.tokenAccount, i.programId, i.mint, s, i.openTime, i.endTime, i.emissionsPerSecondX64)]; return { address: { poolRewardVault: s, operationId: u }, signers: [], instructions: c, instructionTypes: [nr.ClmmInitReward], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [] } }
                    static setRewardInstruction(e, t, n, i, o, r, a, s, u, c, l, d) { let m = iD([ix("rewardIndex"), iK("emissionsPerSecondX64"), iq("openTime"), iq("endTime")]),
                            p = [{ pubkey: t, isSigner: !0, isWritable: !0 }, { pubkey: o, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !1, isWritable: !0 }, { pubkey: i, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !0 }],
                            g = x.alloc(m.span);
                        m.encode({ rewardIndex: u, emissionsPerSecondX64: d, openTime: tA(c), endTime: tA(l) }, g); let f = x.from([...rC.setRewardEmissions, ...g]); return new h.Sl({ keys: p, programId: e, data: f }) }
                    static setRewardInstructions({ poolInfo: e, poolKeys: t, ownerInfo: n, rewardInfo: i }) { let [o, r] = [new h.nh(e.programId), new h.nh(e.id)], a, s, u; for (let n = 0; n < e.rewardDefaultInfos.length; n++) e.rewardDefaultInfos[n].mint.address === i.mint.toString() && (a = n, s = new h.nh(t.rewardInfos[n].vault), u = new h.nh(t.rewardInfos[n].mint.address));
                        (void 0 === a || void 0 === s) && rv.logWithError("reward mint check error", "no reward mint", e.rewardDefaultInfos); let c = np([oZ], o).publicKey,
                            l = [this.setRewardInstruction(o, n.wallet, r, c, new h.nh(e.config.id), n.tokenAccount, s, u, a, i.openTime, i.endTime, i.emissionsPerSecondX64)]; return { address: { rewardVault: s, operationId: c }, signers: [], instructions: l, instructionTypes: [nr.ClmmSetReward], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [] } }
                    static collectRewardInstruction(e, t, n, i, o, r, a) { let s = iD([ix("rewardIndex")]),
                            u = [{ pubkey: t, isSigner: !0, isWritable: !0 }, { pubkey: i, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !1, isWritable: !0 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !1 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: tE, isSigner: !1, isWritable: !1 }],
                            c = x.alloc(s.span);
                        s.encode({ rewardIndex: a }, c); let l = x.from([...rC.collectReward, ...c]); return new h.Sl({ keys: u, programId: e, data: l }) }
                    static collectRewardInstructions({ poolInfo: e, poolKeys: t, ownerInfo: n, rewardMint: i }) { let [o, r] = [new h.nh(e.programId), new h.nh(e.id)], a, s; for (let n = 0; n < e.rewardDefaultInfos.length; n++) e.rewardDefaultInfos[n].mint.address === i.toString() && (a = n, s = new h.nh(t.rewardInfos[n].vault));
                        (void 0 === a || void 0 === s) && rv.logWithError("reward mint check error", "no reward mint", e.rewardDefaultInfos); let u = [this.collectRewardInstruction(o, n.wallet, r, n.tokenAccount, s, i, a)]; return { address: { rewardVault: s }, signers: [], instructions: u, instructionTypes: [nr.ClmmCollectReward], lookupTableAddress: t.lookupTableAccount ? [t.lookupTableAccount] : [] } }
                    static async makeLockPositions({ programId: e, authProgramId: t, poolProgramId: n, payer: i, wallet: o, nftMint: r, getEphemeralSigners: a }) { let s = [],
                            u; if (a) u = new h.nh((await a(1))[0]);
                        else { let e = h.RG.generate();
                            s.push(e), u = e.publicKey } let { publicKey: c } = nb(o, r, w.H_), { publicKey: l } = o4(n, r), d = o3(e, u).publicKey, m = nb(o, u, w.H_).publicKey, p = o6(u).publicKey, g = rq.lockPositionInstructionV2({ programId: e, auth: t, payer: i, positionOwner: o, lockOwner: o, positionNftAccount: c, positionId: l, lockPositionId: d, lockNftMint: u, lockNftAccount: m, metadataAccount: p, withMetadata: !0 }); return { address: { positionId: l, lockPositionId: d, lockNftAccount: m, lockNftMint: u, positionNftAccount: c, metadataAccount: p }, instructions: [g], signers: s, instructionTypes: [nr.ClmmLockPosition], lookupTableAddress: [] } }
                    static lockPositionInstructionV2({ programId: e, auth: t, payer: n, positionOwner: i, lockOwner: o, positionNftAccount: r, positionId: a, lockPositionId: s, lockNftMint: u, lockNftAccount: c, metadataAccount: l, withMetadata: d }) { let m = [{ pubkey: t, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !0, isWritable: !0 }, { pubkey: i, isSigner: !0, isWritable: !0 }, { pubkey: o, isSigner: !1, isWritable: !1 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !1 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !0, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: tU, isSigner: !1, isWritable: !1 }, { pubkey: w._u, isSigner: !1, isWritable: !1 }, { pubkey: tV, isSigner: !1, isWritable: !1 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: h.yc.programId, isSigner: !1, isWritable: !1 }],
                            p = iD([iR("withMetadata")]),
                            g = x.alloc(p.span);
                        p.encode({ withMetadata: d }, g); let f = x.from([...rx, ...g]); return new h.Sl({ keys: m, programId: e, data: f }) }
                    static lockPositionInstruction({ programId: e, authProgramId: t, poolProgramId: n, owner: i, positionNft: o }) { let { publicKey: r } = nb(i, o, w.H_), { publicKey: a } = o4(n, o), s = [{ pubkey: t, isSigner: !1, isWritable: !1 }, { pubkey: i, isSigner: !0, isWritable: !1 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !1 }, { pubkey: o8(e, a).publicKey, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: h.yc.programId, isSigner: !1, isWritable: !1 }]; return new h.Sl({ keys: s, programId: e, data: x.from(rx) }) }
                    static harvestLockPositionInstruction(e) { let [t, n] = [new h.nh(e.poolKeys.programId), new h.nh(e.poolKeys.id)], i = rh.getTickArrayStartIndexByTick(e.ownerPosition.tickLower, e.poolKeys.config.tickSpacing), o = rh.getTickArrayStartIndexByTick(e.ownerPosition.tickUpper, e.poolKeys.config.tickSpacing), { publicKey: r } = o1(t, n, i), { publicKey: a } = o1(t, n, o), { publicKey: s } = nb(e.owner, e.ownerPosition.nftMint, w.H_), { publicKey: u } = o4(t, e.ownerPosition.nftMint), { publicKey: c } = o0(t, n, e.ownerPosition.tickLower, e.ownerPosition.tickUpper), l = []; for (let t = 0; t < e.poolKeys.rewardInfos.length; t++) l.push({ poolRewardVault: new h.nh(e.poolKeys.rewardInfos[t].vault), ownerRewardVault: e.ownerRewardAccounts[t], rewardMint: new h.nh(e.poolKeys.rewardInfos[t].mint.address) }); let d = [...l.map(e => [{ pubkey: e.poolRewardVault, isSigner: !1, isWritable: !0 }, { pubkey: e.ownerRewardVault, isSigner: !1, isWritable: !0 }, { pubkey: e.rewardMint, isSigner: !1, isWritable: !1 }]).flat()],
                            m = [{ pubkey: e.authProgramId, isSigner: !1, isWritable: !1 }, { pubkey: o8(e.programId, u).publicKey, isSigner: !1, isWritable: !1 }, { pubkey: t, isSigner: !1, isWritable: !1 }, { pubkey: e.owner, isSigner: !0, isWritable: !1 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: new h.nh(e.poolKeys.vault.A), isSigner: !1, isWritable: !0 }, { pubkey: new h.nh(e.poolKeys.vault.B), isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: e.userVaultA, isSigner: !1, isWritable: !0 }, { pubkey: e.userVaultB, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: tD, isSigner: !1, isWritable: !1 }, { pubkey: new h.nh(e.poolKeys.mintA.address), isSigner: !1, isWritable: !1 }, { pubkey: new h.nh(e.poolKeys.mintB.address), isSigner: !1, isWritable: !1 }, ...d]; return new h.Sl({ keys: m, programId: e.programId, data: x.from(rO) }) }
                    static harvestLockPositionInstructionV2({ programId: e, auth: t, lockPositionId: n, clmmProgram: i, lockOwner: o, lockNftMint: r, lockNftAccount: a, positionNftAccount: s, positionId: u, poolId: c, protocolPosition: l, vaultA: d, vaultB: m, tickArrayLower: p, tickArrayUpper: g, userVaultA: f, userVaultB: y, mintA: k, mintB: b, rewardAccounts: A, exTickArrayBitmap: I }) { let S = [...I ? [{ pubkey: I, isSigner: !1, isWritable: !0 }] : [], ...A.map(e => [{ pubkey: e.poolRewardVault, isSigner: !1, isWritable: !0 }, { pubkey: e.ownerRewardVault, isSigner: !1, isWritable: !0 }, { pubkey: e.rewardMint, isSigner: !1, isWritable: !1 }]).flat()],
                            T = [{ pubkey: t, isSigner: !1, isWritable: !1 }, { pubkey: o, isSigner: !0, isWritable: !1 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !1, isWritable: !1 }, { pubkey: i, isSigner: !1, isWritable: !1 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: m, isSigner: !1, isWritable: !0 }, { pubkey: p, isSigner: !1, isWritable: !0 }, { pubkey: g, isSigner: !1, isWritable: !0 }, { pubkey: f, isSigner: !1, isWritable: !0 }, { pubkey: y, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: tD, isSigner: !1, isWritable: !1 }, { pubkey: k, isSigner: !1, isWritable: !1 }, { pubkey: b, isSigner: !1, isWritable: !1 }, ...S]; return new h.Sl({ keys: T, programId: e, data: x.from(rO) }) } };
            iD([iO("mintAuthorityOption"), iL("mintAuthority"), iq("supply"), ix("decimals"), ix("isInitialized"), iO("freezeAuthorityOption"), iL("freezeAuthority")]); var rK = e => new tJ({ mint: e.address, decimals: e.decimals, symbol: e.symbol, name: e.name }),
                rW = e => { var { amount: t, isRaw: n, name: i } = e, o = E(e, ["amount", "isRaw", "name"]); return new tq(new tJ({ mint: t$(o.address).toBase58(), decimals: o.decimals, symbol: o.symbol, name: i }), t, n, i) };

            function rM(e) { return e.address === tW.address ? tM : e }

            function rL(e) { return e.address === tM.address ? tW : e } var rR = e => { var { address: t, programId: n, decimals: i } = e, o = E(e, ["address", "programId", "decimals"]); return _({ chainId: 101, address: t$(t).toBase58(), programId: n, logoURI: "", symbol: "", name: "", decimals: i, tags: [], extensions: o.extensions || {} }, o) },
                r_ = e => e ? F(_({}, e), { transferFeeConfigAuthority: e.transferFeeConfigAuthority.toBase58(), withdrawWithheldAuthority: e.withdrawWithheldAuthority.toBase58(), withheldAmount: e.withheldAmount.toString(), olderTransferFee: F(_({}, e.olderTransferFee), { epoch: e.olderTransferFee.epoch.toString(), maximumFee: e.olderTransferFee.maximumFee.toString() }), newerTransferFee: F(_({}, e.newerTransferFee), { epoch: e.newerTransferFee.epoch.toString(), maximumFee: e.newerTransferFee.maximumFee.toString() }) }) : void 0,
                rF = new k(25),
                rE = new k(1e4),
                rD = iD([ix("instruction"), iq("amountIn"), iq("minAmountOut")]),
                rV = iD([ix("instruction"), iq("maxAmountIn"), iq("amountOut")]),
                rN = (iD([ix("instruction"), ix("nonce")]), iD([ix("instruction"), ix("nonce"), iq("startTime")]), iD([iq("status"), iq("nonce"), iq("maxOrder"), iq("depth"), iq("baseDecimal"), iq("quoteDecimal"), iq("state"), iq("resetFlag"), iq("minSize"), iq("volMaxCutRatio"), iq("amountWaveRatio"), iq("baseLotSize"), iq("quoteLotSize"), iq("minPriceMultiplier"), iq("maxPriceMultiplier"), iq("systemDecimalValue"), iq("minSeparateNumerator"), iq("minSeparateDenominator"), iq("tradeFeeNumerator"), iq("tradeFeeDenominator"), iq("pnlNumerator"), iq("pnlDenominator"), iq("swapFeeNumerator"), iq("swapFeeDenominator"), iq("baseNeedTakePnl"), iq("quoteNeedTakePnl"), iq("quoteTotalPnl"), iq("baseTotalPnl"), iq("poolOpenTime"), iq("punishPcAmount"), iq("punishCoinAmount"), iq("orderbookToInitTime"), iK("swapBaseInAmount"), iK("swapQuoteOutAmount"), iq("swapBase2QuoteFee"), iK("swapQuoteInAmount"), iK("swapBaseOutAmount"), iq("swapQuote2BaseFee"), iL("baseVault"), iL("quoteVault"), iL("baseMint"), iL("quoteMint"), iL("lpMint"), iL("openOrders"), iL("marketId"), iL("marketProgramId"), iL("targetOrders"), iL("withdrawQueue"), iL("lpVault"), iL("owner"), iq("lpReserve"), iV(iq(), 3, "padding")])),
                rU = (iD([iq("accountType"), iq("status"), iq("nonce"), iq("maxOrder"), iq("depth"), iq("baseDecimal"), iq("quoteDecimal"), iq("state"), iq("resetFlag"), iq("minSize"), iq("volMaxCutRatio"), iq("amountWaveRatio"), iq("baseLotSize"), iq("quoteLotSize"), iq("minPriceMultiplier"), iq("maxPriceMultiplier"), iq("systemDecimalsValue"), iq("abortTradeFactor"), iq("priceTickMultiplier"), iq("priceTick"), iq("minSeparateNumerator"), iq("minSeparateDenominator"), iq("tradeFeeNumerator"), iq("tradeFeeDenominator"), iq("pnlNumerator"), iq("pnlDenominator"), iq("swapFeeNumerator"), iq("swapFeeDenominator"), iq("baseNeedTakePnl"), iq("quoteNeedTakePnl"), iq("quoteTotalPnl"), iq("baseTotalPnl"), iq("poolOpenTime"), iq("punishPcAmount"), iq("punishCoinAmount"), iq("orderbookToInitTime"), iK("swapBaseInAmount"), iK("swapQuoteOutAmount"), iK("swapQuoteInAmount"), iK("swapBaseOutAmount"), iq("swapQuote2BaseFee"), iq("swapBase2QuoteFee"), iL("baseVault"), iL("quoteVault"), iL("baseMint"), iL("quoteMint"), iL("lpMint"), iL("modelDataAccount"), iL("openOrders"), iL("marketId"), iL("marketProgramId"), iL("targetOrders"), iL("owner"), iV(iq(), 64, "padding")]), iD([ix("instruction"), iq("baseAmountIn"), iq("quoteAmountIn"), iq("fixedSide"), iq("otherAmountMin")])),
                rX = iD([ix("instruction"), iq("lpAmount"), iq("baseAmountMin"), iq("quoteAmountMin")]),
                rH = iD([iq("fee")]),
                rG = new h.nh("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),
                rz = iD([iq("x"), iq("y"), iq("price")]),
                rj = iD([iq("accountType"), iq("status"), iq("multiplier"), iq("validDataCount"), iV(rz, 5e4, "DataElement")]);

            function rQ(e, t, n) { let [i, o, r] = function(e, t, n) { let [i, o] = [0, 49998], r = i, a = o, s = 0, u = t * e.multiplier / n; for (; r <= a && 0 !== (s = Math.floor((a + r) / 2)) && !(s >= 49998);) { let t = e.DataElement[s].x * e.multiplier / e.DataElement[s].y,
                            n = e.DataElement[s - 1].x * e.multiplier / e.DataElement[s - 1].y,
                            i = e.DataElement[s + 1].x * e.multiplier / e.DataElement[s + 1].y; if (u === t) return [s, s, !0]; if (u === n) return [s - 1, s - 1, !0]; if (u === i) return [s + 1, s + 1, !0]; if (u < n) a = s - 1;
                        else { if (u > n && u < t) return [s - 1, s, !0]; if (u > t && u < i) return [s, s + 1, !0];
                            r = s + 1 } } return [s, s, !1] }(e, t, n); if (!r) return 0; if (i === o) { let n = e.DataElement[i].x; return t * e.multiplier / n } { let r = e.DataElement[i].x,
                        a = e.DataElement[i].y,
                        s = e.DataElement[o].x,
                        u = e.DataElement[o].y,
                        c = n * (s * a - r * u); return t * e.multiplier * c / (r * c + (s - r) * (t * a - r * n) * u) } }

            function rZ(e, t, n) { return t * e.multiplier / n }

            function r$(e, t, n) { return t * n / e.multiplier }

            function rY(e, t, n, i) { let o = i ? t + n : t - n,
                    [r, a, s] = function(e, t) { let [n, i] = [0, 49998], o = n, r = i, a = 0; for (; o < r && !((a = Math.floor((r + o) / 2)) <= 0) && !(a > 49998);) { let n = e.DataElement[a].x,
                                i = e.DataElement[a - 1].x,
                                s = e.DataElement[a + 1].x; if (t === n) return [a, a, !0]; if (t === i) return [a - 1, a - 1, !0]; if (t === s) return [a + 1, a + 1, !0]; if (t < i) r = a - 1;
                            else { if (t > i && t < n) return [a - 1, a, !0]; if (t > n && t < s) return [a, a + 1, !0];
                                o = a + 1 } } return [a, a, !1] }(e, o); if (!s) return [0, 0, !1, s]; if (r === a) return [e.DataElement[a].price, e.DataElement[a].y, !1, s]; { let n = e.DataElement[r].x,
                        u = e.DataElement[a].x,
                        c = e.DataElement[r].price,
                        l = e.DataElement[a].price,
                        d = e.DataElement[r].y,
                        m = e.DataElement[a].y; if (t >= n && t <= u) return i ? [l, m, !0, s] : [c, d, !0, s]; { let r, a; return i ? (r = c + (l - c) * (t - n) / (u - n), a = d - (o - n) * e.multiplier / l) : (r = c + (l - c) * (t - n) / (u - n), a = m + (u - o) * e.multiplier / c), [r, a, !1, s] } } } var rJ = class { constructor({ connection: e }) { this._layoutData = { accountType: 0, status: 0, multiplier: 0, validDataCount: 0, DataElement: [] }, this.connection = e }
                    get stableModelData() { return this._layoutData }
                    async initStableModelLayout() { if (0 === this._layoutData.validDataCount && this.connection) { var e; let t, n = await this.connection.getAccountInfo(rG);
                            n && (this._layoutData = (e = null == n ? void 0 : n.data, { accountType: (t = rj.decode(e)).accountType.toNumber(), status: t.status.toNumber(), multiplier: t.multiplier.toNumber(), validDataCount: t.validDataCount.toNumber(), DataElement: t.DataElement.map(e => ({ x: e.x.toNumber(), y: e.y.toNumber(), price: e.price.toNumber() })) })) } } },
                r1 = X("Nova Bot_liquidity_instruction");

            function r0(e) { let { poolInfo: t, poolKeys: n, userKeys: i, lpAmount: o, baseAmountMin: r, quoteAmountMin: a } = e, s = t3(n), u = 4; if (t.pooltype.includes("StablePool") && (u = 5), 4 === u || 5 === u) { let e = x.alloc(rX.span);
                    rX.encode({ instruction: 4, lpAmount: tA(o), baseAmountMin: tA(r), quoteAmountMin: tA(a) }, e); let t = [tL({ pubkey: w.H_, isWritable: !1 }), tL({ pubkey: s.id }), tL({ pubkey: s.authority, isWritable: !1 }), tL({ pubkey: s.openOrders }), tL({ pubkey: s.targetOrders }), tL({ pubkey: s.mintLp.address }), tL({ pubkey: s.vault.A }), tL({ pubkey: s.vault.B })]; return 5 === u ? t.push(tL({ pubkey: rG })) : (t.push(tL({ pubkey: s.id })), t.push(tL({ pubkey: s.id }))), t.push(tL({ pubkey: s.marketProgramId, isWritable: !1 }), tL({ pubkey: s.marketId }), tL({ pubkey: s.marketBaseVault }), tL({ pubkey: s.marketQuoteVault }), tL({ pubkey: s.marketAuthority, isWritable: !1 }), tL({ pubkey: i.lpTokenAccount }), tL({ pubkey: i.baseTokenAccount }), tL({ pubkey: i.quoteTokenAccount }), tL({ pubkey: i.owner, isWritable: !1, isSigner: !0 }), tL({ pubkey: s.marketEventQueue }), tL({ pubkey: s.marketBids }), tL({ pubkey: s.marketAsks })), new h.Sl({ programId: s.programId, keys: t, data: e }) } return new h.Sl({ programId: s.programId, keys: [] }) }

            function r4(e) { let { poolKeys: t, version: n, userKeys: i, amountIn: o, amountOut: r, fixedSide: a } = e; if (4 === n || 5 === n) { let s = { poolKeys: t, userKeys: i }; if ("in" === a) return function({ poolKeys: e, userKeys: t, amountIn: n, minAmountOut: i }, o) { let r = t3(e),
                            a = x.alloc(rD.span);
                        rD.encode({ instruction: 9, amountIn: tA(n), minAmountOut: tA(i) }, a); let s = [tL({ pubkey: w.H_, isWritable: !1 }), tL({ pubkey: r.id }), tL({ pubkey: r.authority, isWritable: !1 }), tL({ pubkey: r.openOrders })]; return 4 === o && s.push(tL({ pubkey: r.targetOrders })), s.push(tL({ pubkey: r.vault.A }), tL({ pubkey: r.vault.B })), 5 === o && s.push(tL({ pubkey: rG })), s.push(tL({ pubkey: r.marketProgramId, isWritable: !1 }), tL({ pubkey: r.marketId }), tL({ pubkey: r.marketBids }), tL({ pubkey: r.marketAsks }), tL({ pubkey: r.marketEventQueue }), tL({ pubkey: r.marketBaseVault }), tL({ pubkey: r.marketQuoteVault }), tL({ pubkey: r.marketAuthority, isWritable: !1 }), tL({ pubkey: t.tokenAccountIn }), tL({ pubkey: t.tokenAccountOut }), tL({ pubkey: t.owner, isWritable: !1 })), new h.Sl({ programId: r.programId, keys: s, data: a }) }(F(_({}, s), { amountIn: o, minAmountOut: r }), n); if ("out" === a) return function({ poolKeys: e, userKeys: t, maxAmountIn: n, amountOut: i }, o) { let r = t3(e),
                            a = x.alloc(rV.span);
                        rV.encode({ instruction: 11, maxAmountIn: tA(n), amountOut: tA(i) }, a); let s = [tL({ pubkey: w.H_, isWritable: !1 }), tL({ pubkey: r.id }), tL({ pubkey: r.authority, isWritable: !1 }), tL({ pubkey: r.openOrders }), tL({ pubkey: r.targetOrders }), tL({ pubkey: r.vault.A }), tL({ pubkey: r.vault.B })]; return 5 === o && s.push(tL({ pubkey: rG })), s.push(tL({ pubkey: r.marketProgramId, isWritable: !1 }), tL({ pubkey: r.marketId }), tL({ pubkey: r.marketBids }), tL({ pubkey: r.marketAsks }), tL({ pubkey: r.marketEventQueue }), tL({ pubkey: r.marketBaseVault }), tL({ pubkey: r.marketQuoteVault }), tL({ pubkey: r.marketAuthority, isWritable: !1 }), tL({ pubkey: t.tokenAccountIn }), tL({ pubkey: t.tokenAccountOut }), tL({ pubkey: t.owner, isWritable: !1, isSigner: !0 })), new h.Sl({ programId: r.programId, keys: s, data: a }) }(F(_({}, s), { maxAmountIn: o, amountOut: r }), n);
                    r1.logWithError("invalid params", "params", e) } throw r1.logWithError("invalid version", "poolKeys.version", n), Error("invalid version") } var r6 = X("Nova Bot_liquidity_serum");

            function r2({ programId: e }) { let { publicKey: t } = np([x.from("amm_config_account_seed", "utf-8")], e); return t }

            function r5({ name: e, programId: t, marketId: n }) { let { publicKey: i } = np([t.toBuffer(), n.toBuffer(), x.from(e, "utf-8")], t); return i }

            function r8({ programId: e }) { return np([x.from([97, 109, 109, 32, 97, 117, 116, 104, 111, 114, 105, 116, 121])], e) }

            function r3({ version: e, marketVersion: t, marketId: n, baseMint: i, quoteMint: o, baseDecimals: r, quoteDecimals: a, programId: s, marketProgramId: u }) { let c = r5({ name: "amm_associated_seed", programId: s, marketId: n }),
                    l = r5({ name: "lp_mint_associated_seed", programId: s, marketId: n }),
                    { publicKey: d, nonce: m } = r8({ programId: s }),
                    p = r5({ name: "coin_vault_associated_seed", programId: s, marketId: n }),
                    g = r5({ name: "pc_vault_associated_seed", programId: s, marketId: n }),
                    f = r5({ name: "temp_lp_token_associated_seed", programId: s, marketId: n }),
                    w = function({ programId: e, marketId: t }) { let { publicKey: n } = np([e.toBuffer(), t.toBuffer(), x.from("open_order_associated_seed", "utf-8")], e); return n }({ programId: s, marketId: n }),
                    y = r5({ name: "target_associated_seed", programId: s, marketId: n }),
                    k = r5({ name: "withdraw_associated_seed", programId: s, marketId: n }),
                    { publicKey: b } = function({ programId: e, marketId: t }) { let n = [t.toBuffer()],
                            i = 0,
                            o; for (; i < 100;) { try { let t = n.concat(x.from([i]), x.alloc(7));
                                o = h.nh.createProgramAddressSync(t, e) } catch (e) { if (e instanceof TypeError) throw e;
                                i++; continue } return { publicKey: o, nonce: i } } throw r6.logWithError("unable to find a viable program address nonce", "params", { programId: e, marketId: t }), Error("unable to find a viable program address nonce") }({ programId: u, marketId: n }); return { id: c, baseMint: i, quoteMint: o, lpMint: l, baseDecimals: r, quoteDecimals: a, lpDecimals: r, version: e, programId: s, authority: d, nonce: m, baseVault: p, quoteVault: g, lpVault: f, openOrders: w, targetOrders: y, withdrawQueue: k, marketVersion: t, marketProgramId: u, marketId: n, marketAuthority: b, lookupTableAccount: h.nh.default, configId: r2({ programId: s }) } }
            async function r7({ connection: e, poolKeysList: t, config: n }) { m || (m = new rJ({ connection: e }), await m.initStableModelLayout()); let i = t.map(e => (function({ poolKeys: e }) { let t = iD([ix("instruction"), ix("simulateType")]),
                        n = x.alloc(t.span);
                    t.encode({ instruction: 12, simulateType: 0 }, n); let i = [tL({ pubkey: new h.nh(e.id), isWritable: !1 }), tL({ pubkey: new h.nh(e.authority), isWritable: !1 }), tL({ pubkey: new h.nh(e.openOrders), isWritable: !1 }), tL({ pubkey: new h.nh(e.vault.A), isWritable: !1 }), tL({ pubkey: new h.nh(e.vault.B), isWritable: !1 }), tL({ pubkey: new h.nh(e.mintLp.address), isWritable: !1 }), tL({ pubkey: new h.nh(e.marketId), isWritable: !1 }), tL({ pubkey: new h.nh(e.marketEventQueue), isWritable: !1 })]; return { instruction: new h.Sl({ programId: new h.nh(e.programId), keys: i, data: n }) } })({ poolKeys: e })); return (await nd(e, i.map(e => e.instruction), "GetPoolData")).map(e => { let t; let n = (t = e.match(/{["\w:,]+}/g)) && 1 === t.length ? t[0] : na.logWithError("simulate log fail to match json, keyword: GetPoolData"),
                        i = new k(nm(n, "status")),
                        o = Number(nm(n, "coin_decimals")),
                        r = Number(nm(n, "pc_decimals")),
                        a = Number(nm(n, "lp_decimals")),
                        s = new k(nm(n, "pool_coin_amount")),
                        u = new k(nm(n, "pool_pc_amount")),
                        c = new k(nm(n, "pool_lp_supply")),
                        l = "0"; try { l = nm(n, "pool_open_time") } catch {} return { status: i, baseDecimals: o, quoteDecimals: r, lpDecimals: a, baseReserve: s, quoteReserve: u, lpSupply: c, startTime: new k(l) } }) } var r9 = { volume: 0, volumeQuote: 0, volumeFee: 0, apr: 0, feeApr: 0, priceMin: 0, priceMax: 0, rewardApr: [] },
                ae = e => { let t = {},
                        n = w.H_.toBase58(); return Object.keys(e).map(i => { let o = e[i],
                            [r, a] = [o.baseMint.toBase58(), o.quoteMint.toBase58()];
                        t[i] = { id: i, version: 4, status: o.status.toNumber(), programId: o.programId.toBase58(), mintA: rR({ address: r, programId: n, decimals: o.baseDecimal.toNumber() }), mintB: rR({ address: a, programId: n, decimals: o.quoteDecimal.toNumber() }), rewardDefaultInfos: [], rewardDefaultPoolInfos: "Ecosystem", price: o.poolPrice.toNumber(), mintAmountA: new tk(o.mintAAmount.toString()).div(10 ** o.baseDecimal.toNumber()).toNumber(), mintAmountB: new tk(o.mintBAmount.toString()).div(10 ** o.quoteDecimal.toNumber()).toNumber(), baseReserve: o.baseReserve, quoteReserve: o.quoteReserve, feeRate: new tk(o.tradeFeeNumerator.toString()).div(o.tradeFeeDenominator.toString()).toNumber(), openTime: o.poolOpenTime.toString(), tvl: 0, day: r9, week: r9, month: r9, pooltype: [], farmUpcomingCount: 0, farmOngoingCount: 0, farmFinishedCount: 0, type: "Standard", marketId: o.marketId.toBase58(), configId: r2({ programId: o.programId }).toBase58(), lpPrice: 0, lpAmount: 0, lpMint: rR({ address: o.lpMint.toBase58(), programId: n, decimals: Math.min(o.baseDecimal.toNumber(), o.quoteDecimal.toNumber()) }), burnPercent: 0 } }), t },
                at = class extends n9 { constructor(e) { super(e), this.stableLayout = new rJ({ connection: this.scope.connection }) }
                    async initLayout() { await this.stableLayout.initStableModelLayout() }
                    async load() { this.checkDisabled() }
                    computePairAmount({ poolInfo: e, amount: t, slippage: n, baseIn: i }) { let o = new k(new tk(t).mul(10 ** e[i ? "mintA" : "mintB"].decimals).toFixed(0)),
                            r = rK(e[i ? "mintB" : "mintA"]),
                            [a, s] = [new k(new tk(e.mintAmountA).mul(10 ** e.mintA.decimals).toString()), new k(new tk(e.mintAmountB).mul(10 ** e.mintB.decimals).toString())],
                            u = new k(new tk(e.lpAmount).mul(10 ** e.lpMint.decimals).toFixed(0, tk.ROUND_DOWN));
                        this.logDebug("baseReserve:", a.toString(), "quoteReserve:", s.toString()), this.logDebug("tokenIn:", i ? e.mintA.symbol : e.mintB.symbol, "amountIn:", o.toString(), "anotherToken:", i ? e.mintB.symbol : e.mintA.symbol, "slippage:", `${n.toSignificant()}%`, "baseReserve", a.toString(), "quoteReserve", s.toString()); let c = i ? "base" : "quote";
                        this.logDebug("input side:", c); let l = t7;
                        o.isZero() || (l = "base" === c ? nt(o.mul(s), a) : nt(o.mul(a), s)), this.logDebug("amountRaw:", l.toString(), "lpAmount:", u.toString()); let d = nt(o.mul(u), "base" === c ? a : s);
                        this.logDebug("liquidity:", d.toString()); let m = new t4(new k(1)).add(n),
                            p = new t4(new k(1)).sub(n),
                            h = m.mul(l).quotient,
                            g = p.mul(l).quotient,
                            f = new tq(r, l),
                            w = new tq(r, h),
                            y = new tq(r, g); return this.logDebug("anotherAmount:", f.toFixed(), "maxAnotherAmount:", w.toFixed()), { anotherAmount: f, maxAnotherAmount: w, minAnotherAmount: y, liquidity: d } }
                    async getAmmPoolKeys(e) { return (await this.scope.api.fetchPoolKeysById({ idList: [e] }))[0] }
                    async addLiquidity(e) { let { poolInfo: t, poolKeys: n, amountInA: i, amountInB: o, otherAmountMin: r, fixedSide: a, config: s, txVersion: u, computeBudgetConfig: c } = e;!1 === this.scope.availability.addStandardPosition && this.logAndCreateError("add liquidity feature disabled in your region"), this.logDebug("amountInA:", i, "amountInB:", o), (i.isZero() || o.isZero()) && this.logAndCreateError("amounts must greater than zero", "amountInA & amountInB", { amountInA: i.toFixed(), amountInB: o.toFixed() }); let { account: l } = this.scope, { bypassAssociatedCheck: d, checkCreateATAOwner: m } = _({ bypassAssociatedCheck: !1, checkCreateATAOwner: !1 }, s), [p, g] = [i.token, o.token], f = await l.getCreatedTokenAccount({ mint: p.mint, associatedOnly: !1 }), y = await l.getCreatedTokenAccount({ mint: g.mint, associatedOnly: !1 });
                        f || y || this.logAndCreateError("cannot found target token accounts", "tokenAccounts", l.tokenAccounts); let k = await l.getCreatedTokenAccount({ mint: new h.nh(t.lpMint.address) }),
                            b = [p, g],
                            A = [f, y],
                            I = [i.raw, o.raw],
                            S = i.token.mint.toBase58() === t.mintA.address ? "base" : "quote",
                            T = "base";
                        ["quote", "base"].includes(S) || this.logAndCreateError("invalid fixedSide", "fixedSide", a), "quote" === S ? (b.reverse(), A.reverse(), I.reverse(), T = "a" === a ? "quote" : "base") : "base" === S && (T = "a" === a ? "base" : "quote"); let [P, B] = b, [v, C] = A, [O, q] = I, K = null != n ? n : await this.getAmmPoolKeys(t.id), W = this.createTxBuilder(), M = await l.handleTokenAccount({ side: "in", amount: O, mint: P.mint, tokenAccount: v, bypassAssociatedCheck: d, checkCreateATAOwner: m }), { tokenAccount: L } = M, R = E(M, ["tokenAccount"]);
                        W.addInstruction(R); let F = await l.handleTokenAccount({ side: "in", amount: q, mint: B.mint, tokenAccount: C, bypassAssociatedCheck: d, checkCreateATAOwner: m }),
                            { tokenAccount: D } = F,
                            V = E(F, ["tokenAccount"]);
                        W.addInstruction(V); let N = await l.handleTokenAccount({ side: "out", amount: 0, mint: new h.nh(t.lpMint.address), tokenAccount: k, bypassAssociatedCheck: d, checkCreateATAOwner: m }),
                            { tokenAccount: U } = N,
                            X = E(N, ["tokenAccount"]); return W.addInstruction(X), W.addInstruction({ instructions: [function(e) { let { poolInfo: t, poolKeys: n, userKeys: i, baseAmountIn: o, quoteAmountIn: r, fixedSide: a, otherAmountMin: s } = e, u = x.alloc(rU.span);
                                rU.encode({ instruction: 3, baseAmountIn: tA(o), quoteAmountIn: tA(r), otherAmountMin: tA(s), fixedSide: "base" === a ? t7 : t9 }, u); let c = [tL({ pubkey: w.H_, isWritable: !1 }), tL({ pubkey: new h.nh(t.id) }), tL({ pubkey: new h.nh(n.authority), isWritable: !1 }), tL({ pubkey: new h.nh(n.openOrders), isWritable: !1 }), tL({ pubkey: new h.nh(n.targetOrders) }), tL({ pubkey: new h.nh(t.lpMint.address) }), tL({ pubkey: new h.nh(n.vault.A) }), tL({ pubkey: new h.nh(n.vault.B) })]; return t.pooltype.includes("StablePool") && c.push(tL({ pubkey: rG })), c.push(tL({ pubkey: new h.nh(t.marketId), isWritable: !1 }), tL({ pubkey: i.baseTokenAccount }), tL({ pubkey: i.quoteTokenAccount }), tL({ pubkey: i.lpTokenAccount }), tL({ pubkey: i.owner, isWritable: !1, isSigner: !0 }), tL({ pubkey: new h.nh(n.marketEventQueue), isWritable: !1 })), new h.Sl({ programId: new h.nh(t.programId), keys: c, data: u }) }({ poolInfo: t, poolKeys: K, userKeys: { baseTokenAccount: L, quoteTokenAccount: D, lpTokenAccount: U, owner: this.scope.ownerPubKey }, baseAmountIn: O, quoteAmountIn: q, otherAmountMin: r.raw, fixedSide: T })], instructionTypes: [t.pooltype.includes("StablePool") ? nr.AmmV5AddLiquidity : nr.AmmV4AddLiquidity], lookupTableAddress: K.lookupTableAccount ? [K.lookupTableAccount] : [] }), W.addCustomComputeBudget(c), 0 === u && await W.buildV0(), W.build() }
                    async removeLiquidity(e) {!1 === this.scope.availability.removeStandardPosition && this.logAndCreateError("remove liquidity feature disabled in your region"); let { poolInfo: t, poolKeys: n, lpAmount: i, baseAmountMin: o, quoteAmountMin: r, config: a, txVersion: s, computeBudgetConfig: u } = e, c = null != n ? n : await this.getAmmPoolKeys(t.id), [l, d, m] = [new h.nh(t.mintA.address), new h.nh(t.mintB.address), new h.nh(t.lpMint.address)];
                        this.logDebug("lpAmount:", i), this.logDebug("baseAmountMin:", o), this.logDebug("quoteAmountMin:", r), i.isZero() && this.logAndCreateError("amount must greater than zero", "lpAmount", i.toString()); let { account: p } = this.scope, g = await p.getCreatedTokenAccount({ mint: m, associatedOnly: !1 });
                        g || this.logAndCreateError("cannot found lpTokenAccount", "tokenAccounts", p.tokenAccounts); let f = await p.getCreatedTokenAccount({ mint: l }),
                            w = await p.getCreatedTokenAccount({ mint: d }),
                            y = this.createTxBuilder(),
                            { bypassAssociatedCheck: k, checkCreateATAOwner: b } = _({ bypassAssociatedCheck: !1, checkCreateATAOwner: !1 }, a),
                            A = await p.handleTokenAccount({ side: "out", amount: 0, mint: l, tokenAccount: f, bypassAssociatedCheck: k, checkCreateATAOwner: b }),
                            { tokenAccount: I } = A,
                            S = E(A, ["tokenAccount"]);
                        y.addInstruction(S); let T = await p.handleTokenAccount({ side: "out", amount: 0, mint: d, tokenAccount: w, bypassAssociatedCheck: k, checkCreateATAOwner: b }),
                            { tokenAccount: P } = T,
                            B = E(T, ["tokenAccount"]); return y.addInstruction(B), y.addInstruction({ instructions: [r0({ poolInfo: t, poolKeys: c, userKeys: { lpTokenAccount: g, baseTokenAccount: I, quoteTokenAccount: P, owner: this.scope.ownerPubKey }, lpAmount: i, baseAmountMin: o, quoteAmountMin: r })], lookupTableAddress: c.lookupTableAccount ? [c.lookupTableAccount] : [], instructionTypes: [t.pooltype.includes("StablePool") ? nr.AmmV5RemoveLiquidity : nr.AmmV4RemoveLiquidity] }), y.addCustomComputeBudget(u), 0 === s ? await y.buildV0() : y.build() }
                    async removeAllLpAndCreateClmmPosition({ poolInfo: e, clmmPoolInfo: t, removeLpAmount: n, createPositionInfo: i, farmInfo: o, userFarmLpAmount: r, base: a, computeBudgetConfig: s, payer: u, userAuxiliaryLedgers: c, tokenProgram: l = w.H_, checkCreateATAOwner: d = !0, getEphemeralSigners: m, txVersion: p }) { if ((!1 === this.scope.availability.removeStandardPosition || !1 === this.scope.availability.createConcentratedPosition) && this.logAndCreateError("remove liquidity or create position feature disabled in your region"), !(e.mintA.address === t.mintA.address || e.mintA.address === t.mintB.address) || !(e.mintB.address === t.mintA.address || e.mintB.address === t.mintB.address)) throw Error("mint check error"); let g = this.createTxBuilder();
                        g.addCustomComputeBudget(s); let f = {}; for (let e of this.scope.account.tokenAccountRawInfos)(void 0 === f[e.accountInfo.mint.toString()] || nb(this.scope.ownerPubKey, e.accountInfo.mint, w.H_).publicKey.equals(e.pubkey)) && (f[e.accountInfo.mint.toString()] = e.pubkey); let y = f[e.lpMint.address]; if (void 0 === y) throw Error("find lp account error in trade accounts"); let b = n.add(null != r ? r : new k(0)),
                            A = e.mintA.address === tJ.WSOL.mint.toString(),
                            I = e.mintB.address === tJ.WSOL.mint.toString(),
                            { account: S, instructionParams: T } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: w.H_, mint: new h.nh(e.mintA.address), owner: this.scope.ownerPubKey, createInfo: A ? { payer: this.scope.ownerPubKey } : void 0, skipCloseAccount: !A, notUseTokenAccount: A, associatedOnly: !0, checkCreateATAOwner: d }); if (g.addInstruction(T || {}), void 0 === S) throw Error("base token account not found"); let { account: P, instructionParams: B } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: w.H_, mint: new h.nh(e.mintB.address), owner: this.scope.ownerPubKey, createInfo: I ? { payer: this.scope.ownerPubKey, amount: 0 } : void 0, skipCloseAccount: !I, notUseTokenAccount: I, associatedOnly: !0, checkCreateATAOwner: d }); if (g.addInstruction(B || {}), void 0 === P) throw Error("quote token account not found"); if (f[e.mintA.address] = S, f[e.mintB.address] = P, void 0 !== o && !(null != r && r.isZero())) { let e = od[o.programId],
                                t = oh({ programId: new h.nh(o.programId), poolId: new h.nh(o.id), owner: this.scope.ownerPubKey, version: e }),
                                n, i = await this.scope.connection.getAccountInfo(t); if (i && (n = ow(e).decode(i.data)), 6 !== e && !n) { let { instruction: n, instructionType: i } = ok({ id: new h.nh(o.id), programId: new h.nh(o.programId), version: e, ledger: t, owner: this.scope.ownerPubKey });
                                g.addInstruction({ instructions: [n], instructionTypes: [i] }) } let a = []; for (let e of o.rewardInfos) { let t = e.mint.address === tJ.WSOL.mint.toString(); if (f[e.mint.address]) a.push(f[e.mint.address]);
                                else { let { account: n, instructionParams: i } = await this.scope.account.getOrCreateTokenAccount({ mint: new h.nh(e.mint.address), tokenProgram: l, owner: this.scope.ownerPubKey, skipCloseAccount: !t, createInfo: { payer: u || this.scope.ownerPubKey }, associatedOnly: !0, checkCreateATAOwner: d });
                                    n || this.logAndCreateError("farm reward account not found:", e.mint.address), i && g.addInstruction(i), a.push(n) } } let s = (await this.scope.api.fetchFarmKeysById({ ids: o.id }))[0],
                                m = { userAuxiliaryLedgers: c, amount: r, owner: this.scope.ownerPubKey, farmInfo: o, farmKeys: s, lpAccount: y, rewardAccounts: a },
                                p = od[o.programId],
                                w = 6 === p ? oI(m) : 5 === p ? oS(m) : oT(m),
                                k = { 3: nr.FarmV3Withdraw, 5: nr.FarmV5Withdraw, 6: nr.FarmV6Withdraw };
                            g.addInstruction({ instructions: [w], instructionTypes: [k[p]] }) } let v = await this.getAmmPoolKeys(e.id),
                            C = r0({ poolInfo: e, poolKeys: v, userKeys: { lpTokenAccount: y, baseTokenAccount: S, quoteTokenAccount: P, owner: this.scope.ownerPubKey }, lpAmount: b, baseAmountMin: 0, quoteAmountMin: 0 });
                        g.addInstruction({ instructions: [C], instructionTypes: [e.pooltype.includes("StablePool") ? nr.AmmV5RemoveLiquidity : nr.AmmV4RemoveLiquidity], lookupTableAddress: v.lookupTableAccount ? [v.lookupTableAccount] : [] }); let [x, O] = e.mintA.address === t.mintA.address ? [S, P] : [P, S], q = await this.scope.clmm.getClmmPoolKeys(t.id), K = await rq.openPositionFromBaseInstructions(F(_({ poolInfo: t, poolKeys: q, ownerInfo: { feePayer: this.scope.ownerPubKey, wallet: this.scope.ownerPubKey, tokenAccountA: x, tokenAccountB: O }, withMetadata: "create" }, i), { base: a, getEphemeralSigners: m })); return g.addInstruction({ instructions: [...K.instructions], signers: K.signers, instructionTypes: [...K.instructionTypes], lookupTableAddress: q.lookupTableAccount ? [q.lookupTableAccount] : [] }), 0 === p ? g.sizeCheckBuildV0() : g.sizeCheckBuild() }
                    async createPoolV4({ programId: e, marketInfo: t, baseMintInfo: n, quoteMintInfo: i, baseAmount: o, quoteAmount: r, startTime: a, ownerInfo: s, associatedOnly: u = !1, checkCreateATAOwner: c = !1, tokenProgram: l, txVersion: d, feeDestinationId: m, computeBudgetConfig: p }) { var g; let f = s.feePayer || (null == (g = this.scope.owner) ? void 0 : g.publicKey),
                            y = s.useSOLBalance && n.mint.equals(w.Gd),
                            k = s.useSOLBalance && i.mint.equals(w.Gd),
                            b = this.createTxBuilder(),
                            { account: A, instructionParams: I } = await this.scope.account.getOrCreateTokenAccount({ mint: n.mint, owner: this.scope.ownerPubKey, createInfo: y ? { payer: f, amount: o } : void 0, notUseTokenAccount: y, skipCloseAccount: !y, associatedOnly: !y && u, checkCreateATAOwner: c });
                        b.addInstruction(I || {}); let { account: S, instructionParams: T } = await this.scope.account.getOrCreateTokenAccount({ mint: i.mint, owner: this.scope.ownerPubKey, createInfo: k ? { payer: f, amount: r } : void 0, notUseTokenAccount: k, skipCloseAccount: !k, associatedOnly: !k && u, checkCreateATAOwner: c }); if (b.addInstruction(T || {}), void 0 === A || void 0 === S) throw Error("you don't has some token account"); let P = r3({ version: 4, marketVersion: 3, marketId: t.marketId, baseMint: n.mint, quoteMint: i.mint, baseDecimals: n.decimals, quoteDecimals: i.decimals, programId: e, marketProgramId: t.programId }),
                            B = { programId: e, ammId: P.id, ammAuthority: P.authority, ammOpenOrders: P.openOrders, lpMint: P.lpMint, coinMint: P.baseMint, pcMint: P.quoteMint, coinVault: P.baseVault, pcVault: P.quoteVault, withdrawQueue: P.withdrawQueue, ammTargetOrders: P.targetOrders, poolTempLp: P.lpVault, marketProgramId: P.marketProgramId, marketId: P.marketId, ammConfigId: P.configId, feeDestinationId: m },
                            { instruction: v, instructionType: C } = function({ programId: e, ammId: t, ammAuthority: n, ammOpenOrders: i, lpMint: o, coinMint: r, pcMint: a, coinVault: s, pcVault: u, withdrawQueue: c, ammTargetOrders: l, poolTempLp: d, marketProgramId: m, marketId: p, userWallet: g, userCoinVault: f, userPcVault: y, userLpVault: k, nonce: b, openTime: A, coinAmount: I, pcAmount: S, ammConfigId: T, feeDestinationId: P }) { let B = iD([ix("instruction"), ix("nonce"), iq("openTime"), iq("pcAmount"), iq("coinAmount")]),
                                    v = [{ pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w._u, isSigner: !1, isWritable: !1 }, { pubkey: h.yc.programId, isSigner: !1, isWritable: !1 }, { pubkey: tV, isSigner: !1, isWritable: !1 }, { pubkey: t, isSigner: !1, isWritable: !0 }, { pubkey: n, isSigner: !1, isWritable: !1 }, { pubkey: i, isSigner: !1, isWritable: !0 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !1 }, { pubkey: a, isSigner: !1, isWritable: !1 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: T, isSigner: !1, isWritable: !1 }, { pubkey: P, isSigner: !1, isWritable: !0 }, { pubkey: m, isSigner: !1, isWritable: !1 }, { pubkey: p, isSigner: !1, isWritable: !1 }, { pubkey: g, isSigner: !0, isWritable: !0 }, { pubkey: f, isSigner: !1, isWritable: !0 }, { pubkey: y, isSigner: !1, isWritable: !0 }, { pubkey: k, isSigner: !1, isWritable: !0 }],
                                    C = x.alloc(B.span); return B.encode({ instruction: 1, nonce: b, openTime: A, coinAmount: I, pcAmount: S }, C), { instruction: new h.Sl({ keys: v, programId: e, data: C }), instructionType: nr.AmmV4CreatePool } }(F(_({}, B), { userWallet: this.scope.ownerPubKey, userCoinVault: A, userPcVault: S, userLpVault: nb(this.scope.ownerPubKey, P.lpMint, l).publicKey, nonce: P.nonce, openTime: a, coinAmount: o, pcAmount: r })); return b.addInstruction({ instructions: [v], instructionTypes: [C] }), b.addCustomComputeBudget(p), b.versionBuild({ txVersion: d, extInfo: { address: B } }) }
                    async getCreatePoolFee({ programId: e }) { let t = r2({ programId: e }),
                            n = await this.scope.connection.getAccountInfo(t, { dataSlice: { offset: 536, length: 8 } }); if (null === n) throw Error("get config account error"); return rH.decode(n.data).fee }
                    computeAmountOut({ poolInfo: e, amountIn: t, mintIn: n, mintOut: i, slippage: o }) { let [r, a] = [n.toString(), i.toString()]; if (r !== e.mintA.address && r !== e.mintB.address || a !== e.mintA.address && a !== e.mintB.address) throw Error("toke not match"); let { baseReserve: s, quoteReserve: u } = e, c = [s, u], l = [e.mintA.decimals, e.mintB.decimals], d = r == e.mintA.address ? "base" : "quote"; "quote" === d && (c.reverse(), l.reverse()); let [m, p] = c, [h, g] = l, f = 4 === e.version, w; if (f) w = new tk(p.toString()).div(10 ** g).div(new tk(m.toString()).div(10 ** h));
                        else { var y, b; let e, t; let n = (y = this.stableLayout.stableModelData, b = s.toNumber(), t = ((e = rY(y, rZ(y, b, rQ(y, b, u.toNumber())), 0, !1))[3] ? e[0] : 0) / y.multiplier, 1 / t);
                            w = "quote" === d ? new tk(1e6).div(1e6 * n) : new tk(1e6 * n).div(1e6) } let A = new k(0),
                            I = new k(0); if (!t.isZero()) { if (f) { I = nz(t.mul(rF), rE); let e = t.sub(I),
                                    n = m.add(e);
                                A = p.mul(e).div(n) } else { I = t.mul(new k(2)).div(new k(1e4)); let e = t.sub(I);
                                A = new k("quote" === d ? function(e, t, n, i) { let o = rQ(e, t, n),
                                        r = rZ(e, t, o),
                                        a = rZ(e, n, o),
                                        s = rZ(e, i, o),
                                        [u, c, l, d] = rY(e, r, s, !0); return d ? l ? i * e.multiplier / u : r$(e, a - c, o) : 0 }(this.stableLayout.stableModelData, u.toNumber(), s.toNumber(), e.toNumber()) : function(e, t, n, i) { let o = rQ(e, t, n),
                                        r = rZ(e, t, o),
                                        a = rZ(e, n, o),
                                        s = rZ(e, i, o),
                                        [u, c, l, d] = function(e, t, n, i) { let o = i ? t - n : t + n,
                                                [r, a, s] = function(e, t) { let [n, i] = [0, 49998], o = n, r = i, a = 0; for (; o <= r && !((a = Math.floor((r + o) / 2)) <= 0) && !(a >= 49998);) { let n = e.DataElement[a].y,
                                                            i = e.DataElement[a - 1].y,
                                                            s = e.DataElement[a + 1].y; if (t === n) return [a, a, !0]; if (t === i) return [a - 1, a - 1, !0]; if (t === s) return [a + 1, a + 1, !0]; if (t < s) o = a + 1;
                                                        else { if (t < i && t > n) return [a - 1, a, !0]; if (t < n && t > s) return [a, a + 1, !0];
                                                            r = a - 1 } } return [a, a, !1] }(e, o); if (!s) return [0, 0, !1, s]; if (r === a) return [e.DataElement[a].price, e.DataElement[a].x, !1, s]; { let n = e.DataElement[r].x,
                                                    u = e.DataElement[a].x,
                                                    c = e.DataElement[r].price,
                                                    l = e.DataElement[a].price,
                                                    d = e.DataElement[r].y,
                                                    m = e.DataElement[a].y; if (t >= m && t <= d) return i ? [l, u, !0, s] : [c, n, !0, s]; { let r, a; return i ? (r = c + (l - c) * (d - t) / (d - m), a = n + l * (d - o) / e.multiplier) : (r = c + (l - c) * (d - t) / (d - m), a = u - c * (o - m) / e.multiplier), [r, a, !1, s] } } }(e, a, s, !1); return d ? l ? i * u / e.multiplier : r$(e, r - c, o) : 0 }(this.stableLayout.stableModelData, u.toNumber(), s.toNumber(), e.toNumber())) } } let S = new k(new tk(A.toString()).mul(1 - o).toFixed(0)),
                            T = A,
                            P = new tk(A.toString()).div(new tk(t.sub(I).toString()).toFixed(0));
                        t.isZero() || A.isZero() || (P = new tk(A.toString()).div(10 ** g).div(new tk(t.sub(I).toString()).div(10 ** h))); let B = w.sub(P).div(w).mul(100); return { amountOut: T, minAmountOut: S, currentPrice: w, executionPrice: P, priceImpact: B, fee: I } }
                    computeAmountIn({ poolInfo: e, amountOut: t, mintIn: n, mintOut: i, slippage: o }) { let { baseReserve: r, quoteReserve: a } = e;
                        n.toString() !== e.mintA.address && n.toString() !== e.mintB.address && this.logAndCreateError("mintIn does not match pool"), i.toString() !== e.mintA.address && i.toString() !== e.mintB.address && this.logAndCreateError("mintOut does not match pool"), this.logDebug("baseReserve:", r.toString()), this.logDebug("quoteReserve:", a.toString()); let s = n.toString() === e.mintA.address,
                            [u, c] = s ? [e.mintA, e.mintB] : [e.mintB, e.mintA];
                        this.logDebug("currencyOut:", c.symbol || c.address), this.logDebug("amountOut:", new tk(t.toString()).div(10 ** c.decimals).toDecimalPlaces(c.decimals).toString(), u.symbol || u.address), this.logDebug("slippage:", `${100*o}%`); let l = [r, a],
                            d = s ? "quote" : "base"; "base" === d && l.reverse(), this.logDebug("output side:", d); let [m, p] = l, h = new tk(p.toString()).div(10 ** e[s ? "mintB" : "mintA"].decimals).div(new tk(m.toString()).div(10 ** e[s ? "mintA" : "mintB"].decimals));
                        this.logDebug("currentPrice:", `1 ${u.symbol||u.address} \u2248 ${h.toString()} ${c.symbol||c.address}`), this.logDebug("currentPrice invert:", `1 ${c.symbol||c.address} \u2248 ${new tk(1).div(h).toString()} ${u.symbol||u.address}`); let g = new k(0),
                            f = t; if (!f.isZero()) { f.gt(p) && (f = p.sub(new k(1))); let e = p.sub(f);
                            g = m.mul(f).div(e).mul(rE).div(rE.sub(rF)) } let w = new k(new tk(g.toString()).mul(1 + o).toFixed(0)),
                            y = g;
                        this.logDebug("amountIn:", new tk(y.toString()).div(10 ** u.decimals).toDecimalPlaces(u.decimals).toString()), this.logDebug("maxAmountIn:", new tk(w.toString()).div(10 ** u.decimals).toDecimalPlaces(u.decimals).toString()); let b = null;
                        g.isZero() || f.isZero() || (b = new tk(f.toString()).div(10 ** c.decimals).div(new tk(g.toString()).div(10 ** u.decimals)), this.logDebug("executionPrice:", `1 ${c.symbol||c.address} \u2248 ${b.toDecimalPlaces(Math.max(e.mintA.decimals,e.mintB.decimals)).toString()} ${u.symbol||u.address}`), this.logDebug("executionPrice invert:", `1 ${c.symbol||c.address} \u2248 ${new tk(1).div(b).toDecimalPlaces(Math.max(e.mintA.decimals,e.mintB.decimals)).toString()} ${u.symbol||u.address}`)); let A = h.mul(y.toString()),
                            I = A.sub(t.toString()).abs().div(A); return this.logDebug("priceImpact:", `${I.toString()}%`), { amountIn: y, maxAmountIn: w, currentPrice: h, executionPrice: b, priceImpact: I } }
                    async swap({ poolInfo: e, poolKeys: t, amountIn: n, amountOut: i, inputMint: o, fixedSide: r, txVersion: a, config: s, computeBudgetConfig: u }) { let c = this.createTxBuilder(),
                            { associatedOnly: l = !0, inputUseSolBalance: d = !0, outputUseSolBalance: m = !0 } = s || {},
                            [p, g] = o === e.mintA.address ? [e.mintA, e.mintB] : [e.mintB, e.mintA],
                            f = d && p.address === tQ.toBase58(),
                            y = m && g.address === tQ.toBase58(),
                            { account: k, instructionParams: b } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: w.H_, mint: new h.nh(p.address), owner: this.scope.ownerPubKey, createInfo: f ? { payer: this.scope.ownerPubKey, amount: n } : void 0, skipCloseAccount: !f, notUseTokenAccount: f, associatedOnly: l });
                        c.addInstruction(b || {}), k || this.logAndCreateError("input token account not found", { token: p.symbol || p.address, tokenAccountIn: k, inputTokenUseSolBalance: f, associatedOnly: l }); let { account: A, instructionParams: I } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: w.H_, mint: new h.nh(g.address), owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !y, notUseTokenAccount: y, associatedOnly: !y && l });
                        c.addInstruction(I || {}), void 0 === A && this.logAndCreateError("output token account not found", { token: g.symbol || g.address, tokenAccountOut: A, outputTokenUseSolBalance: y, associatedOnly: l }); let S = t || await this.getAmmPoolKeys(e.id),
                            T = 4; return e.pooltype.includes("StablePool") && (T = 5), c.addInstruction({ instructions: [r4({ version: T, poolKeys: S, userKeys: { tokenAccountIn: k, tokenAccountOut: A, owner: this.scope.ownerPubKey }, amountIn: n, amountOut: i, fixedSide: r })], instructionTypes: [4 === T ? nr.AmmV4SwapBaseIn : nr.AmmV5SwapBaseIn] }), c.addCustomComputeBudget(u), c.versionBuild({ txVersion: a }) }
                    async getRpcPoolInfo(e) { return (await this.getRpcPoolInfos([e]))[e] }
                    async getRpcPoolInfos(e, t) { let n = await z(this.scope.connection, e.map(e => ({ pubkey: new h.nh(e) })), t),
                            i = {},
                            o = []; for (let t = 0; t < e.length; t++) { let r = n[t]; if (null === r || !r.accountInfo) throw Error("fetch pool info error: " + String(e[t])); let a = rN.decode(r.accountInfo.data);
                            i[String(e[t])] = F(_({}, a), { programId: r.accountInfo.owner }), o.push(a.baseVault, a.quoteVault) } let r = {},
                            a = await z(this.scope.connection, o.map(e => ({ pubkey: new h.nh(e) })), t); for (let e = 0; e < o.length; e++) { let t = a[e].accountInfo; if (null === t) throw Error("fetch vault info error: " + o[e]);
                            r[String(o[e])] = new k(T.p0.decode(t.data).amount.toString()) } let s = {}; for (let [e, t] of Object.entries(i)) { let n = r[t.baseVault.toString()].sub(t.baseNeedTakePnl),
                                i = r[t.quoteVault.toString()].sub(t.quoteNeedTakePnl);
                            s[e] = F(_({}, t), { baseReserve: n, mintAAmount: r[t.baseVault.toString()], mintBAmount: r[t.quoteVault.toString()], quoteReserve: i, poolPrice: new tk(i.toString()).div(new tk(10).pow(t.quoteDecimal.toString())).div(new tk(n.toString()).div(new tk(10).pow(t.baseDecimal.toString()))) }) } return s }
                    async getPoolInfoFromRpc({ poolId: e }) { let t = await this.getRpcPoolInfo(e),
                            n = ae({
                                [e]: t }),
                            i = n[e],
                            o = await this.scope.tradeV2.computePoolToPoolKeys({ pools: [n[e]], ammRpcData: {
                                    [e]: t } }); return { poolRpcData: t, poolInfo: i, poolKeys: o[0] } } },
                an = class extends n9 { constructor(e) { super(e) }
                    async getClmmPoolKeys(e) { return (await this.scope.api.fetchPoolKeysById({ idList: [e] }))[0] }
                    async createPool(e) { var t; let { programId: n, owner: i = (null == (t = this.scope.owner) ? void 0 : t.publicKey) || h.nh.default, mint1: o, mint2: r, ammConfig: a, initialPrice: s, startTime: u, computeBudgetConfig: c, forerunCreate: l, getObserveState: d, txVersion: m } = e, p = this.createTxBuilder(), [g, f, w] = new k(new h.nh(o.address).toBuffer()).gt(new k(new h.nh(r.address).toBuffer())) ? [r, o, new tk(1).div(s)] : [o, r, s], y = ru.priceToSqrtPriceX64(w, g.decimals, f.decimals), b = await rq.createPoolInstructions({ connection: this.scope.connection, programId: n, owner: i, mintA: g, mintB: f, ammConfigId: a.id, initialPriceX64: y, startTime: u, forerunCreate: !d && l }); return p.addInstruction(b), p.addCustomComputeBudget(c), p.versionBuild({ txVersion: m, extInfo: { address: F(_({}, b.address), { programId: n.toString(), id: b.address.poolId.toString(), mintA: g, mintB: f, openTime: u.toString(), vault: { A: b.address.mintAVault.toString(), B: b.address.mintBVault.toString() }, rewardInfos: [], config: { id: a.id.toString(), index: a.index, protocolFeeRate: a.protocolFeeRate, tradeFeeRate: a.tradeFeeRate, tickSpacing: a.tickSpacing, fundFeeRate: a.fundFeeRate, description: a.description, defaultRange: 0, defaultRangePoint: [] } }), mockPoolInfo: _({ type: "Concentrated", rewardDefaultPoolInfos: "Clmm", id: b.address.poolId.toString(), mintA: g, mintB: f, feeRate: a.tradeFeeRate, openTime: u.toString(), programId: n.toString(), price: w.toNumber(), config: { id: a.id.toString(), index: a.index, protocolFeeRate: a.protocolFeeRate, tradeFeeRate: a.tradeFeeRate, tickSpacing: a.tickSpacing, fundFeeRate: a.fundFeeRate, description: a.description, defaultRange: 0, defaultRangePoint: [] }, burnPercent: 0 }, oE), forerunCreate: l } }) }
                    async openPositionFromBase({ poolInfo: e, poolKeys: t, ownerInfo: n, tickLower: i, tickUpper: o, base: r, baseAmount: a, otherAmountMax: s, associatedOnly: u = !0, checkCreateATAOwner: c = !1, withMetadata: l = "create", getEphemeralSigners: d, computeBudgetConfig: m, txVersion: p }) {!1 === this.scope.availability.addConcentratedPosition && this.logAndCreateError("add position feature disabled in your region"), this.scope.checkOwner(); let g = this.createTxBuilder(),
                            f = null,
                            w = null,
                            y = n.useSOLBalance && e.mintA.address === tQ.toString(),
                            k = n.useSOLBalance && e.mintB.address === tQ.toString(),
                            [b, A] = "MintA" === r ? [a, s] : [s, a],
                            { account: I, instructionParams: S } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mintA.programId, mint: new h.nh(e.mintA.address), owner: this.scope.ownerPubKey, createInfo: y || b.isZero() ? { payer: this.scope.ownerPubKey, amount: b } : void 0, skipCloseAccount: !y, notUseTokenAccount: y, associatedOnly: !y && u, checkCreateATAOwner: c });
                        I && (f = I), g.addInstruction(S || {}); let { account: T, instructionParams: P } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mintB.programId, mint: new h.nh(e.mintB.address), owner: this.scope.ownerPubKey, createInfo: k || A.isZero() ? { payer: this.scope.ownerPubKey, amount: A } : void 0, skipCloseAccount: !k, notUseTokenAccount: k, associatedOnly: !k && u, checkCreateATAOwner: c });
                        T && (w = T), g.addInstruction(P || {}), f && w || this.logAndCreateError("cannot found target token accounts", "tokenAccounts", { ownerTokenAccountA: null == f ? void 0 : f.toBase58(), ownerTokenAccountB: null == w ? void 0 : w.toBase58() }); let B = t || await this.getClmmPoolKeys(e.id),
                            v = await rq.openPositionFromBaseInstructions({ poolInfo: e, poolKeys: B, ownerInfo: F(_({}, n), { feePayer: this.scope.ownerPubKey, wallet: this.scope.ownerPubKey, tokenAccountA: f, tokenAccountB: w }), tickLower: i, tickUpper: o, base: r, baseAmount: a, otherAmountMax: s, withMetadata: l, getEphemeralSigners: d }); return g.addInstruction(v), g.addCustomComputeBudget(m), g.versionBuild({ txVersion: p, extInfo: _({}, v.address) }) }
                    async openPositionFromLiquidity({ poolInfo: e, poolKeys: t, ownerInfo: n, amountMaxA: i, amountMaxB: o, tickLower: r, tickUpper: a, liquidity: s, associatedOnly: u = !0, checkCreateATAOwner: c = !1, withMetadata: l = "create", txVersion: d, computeBudgetConfig: m, getEphemeralSigners: p }) {!1 === this.scope.availability.createConcentratedPosition && this.logAndCreateError("open position feature disabled in your region"); let g = this.createTxBuilder(),
                            f = null,
                            w = null,
                            y = n.useSOLBalance && e.mintA.address === tQ.toBase58(),
                            k = n.useSOLBalance && e.mintB.address === tQ.toBase58(),
                            { account: b, instructionParams: A } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mintA.programId, mint: new h.nh(e.mintA.address), owner: this.scope.ownerPubKey, createInfo: y || i.isZero() ? { payer: this.scope.ownerPubKey, amount: i } : void 0, skipCloseAccount: !y, notUseTokenAccount: y, associatedOnly: !y && u, checkCreateATAOwner: c });
                        b && (f = b), g.addInstruction(A || {}); let { account: I, instructionParams: S } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mintB.programId, mint: new h.nh(e.mintB.address), owner: this.scope.ownerPubKey, createInfo: k || o.isZero() ? { payer: this.scope.ownerPubKey, amount: o } : void 0, skipCloseAccount: !k, notUseTokenAccount: k, associatedOnly: !k && u, checkCreateATAOwner: c });
                        I && (w = I), g.addInstruction(S || {}), (void 0 === f || void 0 === w) && this.logAndCreateError("cannot found target token accounts", "tokenAccounts", this.scope.account.tokenAccounts); let T = t || await this.getClmmPoolKeys(e.id),
                            P = await rq.openPositionFromLiquidityInstructions({ poolInfo: e, poolKeys: T, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccountA: f, tokenAccountB: w }, tickLower: r, tickUpper: a, liquidity: s, amountMaxA: i, amountMaxB: o, withMetadata: l, getEphemeralSigners: p }); return g.addInstruction(P), g.addCustomComputeBudget(m), g.versionBuild({ txVersion: d, extInfo: { address: P.address } }) }
                    async increasePositionFromLiquidity(e) { let { poolInfo: t, poolKeys: n, ownerPosition: i, amountMaxA: o, amountMaxB: r, liquidity: a, ownerInfo: s, associatedOnly: u = !0, checkCreateATAOwner: c = !1, computeBudgetConfig: l, txVersion: d } = e, m = this.createTxBuilder(), p, g, f = s.useSOLBalance && t.mintA.address === tQ.toString(), w = s.useSOLBalance && t.mintB.address === tQ.toString(), { account: y, instructionParams: k } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: t.mintA.programId, mint: new h.nh(t.mintA.address), notUseTokenAccount: f, owner: this.scope.ownerPubKey, createInfo: f || o.isZero() ? { payer: this.scope.ownerPubKey, amount: o } : void 0, skipCloseAccount: !f, associatedOnly: !f && u, checkCreateATAOwner: c });
                        y && (p = y), m.addInstruction(k || {}); let { account: b, instructionParams: A } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: t.mintB.programId, mint: new h.nh(t.mintB.address), owner: this.scope.ownerPubKey, createInfo: w || r.isZero() ? { payer: this.scope.ownerPubKey, amount: r } : void 0, notUseTokenAccount: w, skipCloseAccount: !w, associatedOnly: !w && u, checkCreateATAOwner: c });
                        b && (g = b), m.addInstruction(A || {}), p || g || this.logAndCreateError("cannot found target token accounts", "tokenAccounts", this.scope.account.tokenAccounts); let I = null != n ? n : await this.getClmmPoolKeys(t.id),
                            S = rq.increasePositionFromLiquidityInstructions({ poolInfo: t, poolKeys: I, ownerPosition: i, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccountA: p, tokenAccountB: g }, liquidity: a, amountMaxA: o, amountMaxB: r }); return m.addInstruction(S), m.addCustomComputeBudget(l), m.versionBuild({ txVersion: d, extInfo: { address: S.address } }) }
                    async increasePositionFromBase(e) { let { poolInfo: t, ownerPosition: n, base: i, baseAmount: o, otherAmountMax: r, ownerInfo: a, associatedOnly: s = !0, checkCreateATAOwner: u = !1, computeBudgetConfig: c, txVersion: l } = e, d = this.createTxBuilder(), m, p, g = a.useSOLBalance && t.mintA.address === tQ.toString(), f = a.useSOLBalance && t.mintB.address === tQ.toString(), { account: w, instructionParams: y } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: t.mintA.programId, mint: new h.nh(t.mintA.address), notUseTokenAccount: g, owner: this.scope.ownerPubKey, createInfo: g || ("MintA" === i ? o : r).isZero() ? { payer: this.scope.ownerPubKey, amount: "MintA" === i ? o : r } : void 0, skipCloseAccount: !g, associatedOnly: !g && s, checkCreateATAOwner: u });
                        w && (m = w), d.addInstruction(y || {}); let { account: k, instructionParams: b } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: t.mintB.programId, mint: new h.nh(t.mintB.address), owner: this.scope.ownerPubKey, createInfo: f || ("MintA" === i ? r : o).isZero() ? { payer: this.scope.ownerPubKey, amount: "MintA" === i ? r : o } : void 0, notUseTokenAccount: f, skipCloseAccount: !f, associatedOnly: !f && s, checkCreateATAOwner: u });
                        k && (p = k), d.addInstruction(b || {}), m || p || this.logAndCreateError("cannot found target token accounts", "tokenAccounts", this.scope.account.tokenAccounts); let A = await this.getClmmPoolKeys(t.id),
                            I = rq.increasePositionFromBaseInstructions({ poolInfo: t, poolKeys: A, ownerPosition: n, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccountA: m, tokenAccountB: p }, base: i, baseAmount: o, otherAmountMax: r }); return d.addInstruction(I), d.addCustomComputeBudget(c), d.versionBuild({ txVersion: l, extInfo: { address: I.address } }) }
                    async decreaseLiquidity(e) { let { poolInfo: t, poolKeys: n, ownerPosition: i, ownerInfo: o, amountMinA: r, amountMinB: a, liquidity: s, associatedOnly: u = !0, checkCreateATAOwner: c = !1, computeBudgetConfig: l, txVersion: d } = e;!1 === this.scope.availability.removeConcentratedPosition && this.logAndCreateError("remove position feature disabled in your region"); let m = this.createTxBuilder(),
                            p = o.useSOLBalance && t.mintA.address === tQ.toString(),
                            g = o.useSOLBalance && t.mintB.address === tQ.toString(),
                            { account: f, instructionParams: w } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: t.mintA.programId, mint: new h.nh(t.mintA.address), notUseTokenAccount: p, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !p, associatedOnly: !p && u, checkCreateATAOwner: c });
                        w && m.addInstruction(w); let { account: y, instructionParams: k } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: t.mintB.programId, mint: new h.nh(t.mintB.address), notUseTokenAccount: g, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !g, associatedOnly: !g && u, checkCreateATAOwner: c });
                        k && m.addInstruction(k); let b = []; for (let e of t.rewardDefaultInfos) { let n = o.useSOLBalance && e.mint.address === tQ.toString(),
                                i; if (e.mint.address === t.mintA.address) i = f;
                            else if (e.mint.address === t.mintB.address) i = y;
                            else { let { account: t, instructionParams: o } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: new h.nh(e.mint.programId), mint: new h.nh(e.mint.address), notUseTokenAccount: n, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !n, associatedOnly: !n && u, checkCreateATAOwner: c });
                                i = t, o && m.addInstruction(o) }
                            b.push(i) }
                        f || y || this.logAndCreateError("cannot found target token accounts", "tokenAccounts", this.scope.account.tokenAccountRawInfos); let A = null != n ? n : await this.getClmmPoolKeys(t.id),
                            I = await rq.decreaseLiquidityInstructions({ poolInfo: t, poolKeys: A, ownerPosition: i, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccountA: f, tokenAccountB: y, rewardAccounts: b }, liquidity: s, amountMinA: r, amountMinB: a });
                        m.addInstruction({ instructions: I.instructions, instructionTypes: [nr.ClmmDecreasePosition] }); let S = _({}, I.address); if (o.closePosition) { let e = await rq.closePositionInstructions({ poolInfo: t, poolKeys: A, ownerInfo: { wallet: this.scope.ownerPubKey }, ownerPosition: i });
                            m.addInstruction({ endInstructions: e.instructions, endInstructionTypes: e.instructionTypes }), S = _(_({}, S), e.address) } return m.addCustomComputeBudget(l), m.versionBuild({ txVersion: d, extInfo: { address: S } }) }
                    async lockPosition(e) { let { programId: t = nq, authProgramId: n = nK, poolProgramId: i = nO, ownerPosition: o, payer: r, computeBudgetConfig: a, txVersion: s } = e, u = this.createTxBuilder(), c = await rq.makeLockPositions({ programId: t, authProgramId: n, poolProgramId: i, wallet: this.scope.ownerPubKey, payer: null != r ? r : this.scope.ownerPubKey, nftMint: o.nftMint }); return u.addInstruction(c), u.addCustomComputeBudget(a), u.versionBuild({ txVersion: s, extInfo: c.address }) }
                    async harvestLockPosition(e) { let { programId: t = nq, authProgramId: n = nK, clmmProgram: i = nO, poolKeys: o, lockData: r, ownerInfo: a = { useSOLBalance: !0 }, associatedOnly: s = !0, checkCreateATAOwner: u = !1, computeBudgetConfig: c, txVersion: l } = e, d = o || await this.getClmmPoolKeys(r.poolId.toString()), m = this.createTxBuilder(), p = await this.scope.connection.getAccountInfo(r.positionId);
                        p || this.logger.logWithError("position not found", r.positionId); let g = rA.decode(p.data),
                            f = a.useSOLBalance && d.mintA.address === tQ.toString(),
                            y = a.useSOLBalance && d.mintB.address === tQ.toString(),
                            { account: k, instructionParams: b } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: d.mintA.programId, mint: new h.nh(d.mintA.address), notUseTokenAccount: f, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !f, associatedOnly: !f && s, checkCreateATAOwner: u });
                        b && m.addInstruction(b); let { account: A, instructionParams: I } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: d.mintB.programId, mint: new h.nh(d.mintB.address), notUseTokenAccount: y, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !y, associatedOnly: !y && s, checkCreateATAOwner: u });
                        I && m.addInstruction(I); let S = {},
                            T = []; for (let e of d.rewardInfos) { let t = a.useSOLBalance && e.mint.address === tQ.toString(),
                                n = S[e.mint.address]; if (!n) { let { account: i, instructionParams: o } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: new h.nh(e.mint.programId), mint: new h.nh(e.mint.address), notUseTokenAccount: t, owner: this.scope.ownerPubKey, skipCloseAccount: !t, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, associatedOnly: !t && s });
                                n = i, o && m.addInstruction(o) }
                            S[e.mint.address] = n, T.push(n) } let P = o3(t, r.lockNftMint).publicKey,
                            B = nb(this.scope.ownerPubKey, r.lockNftMint, w.H_).publicKey,
                            v = rh.getTickArrayStartIndexByTick(g.tickLower, d.config.tickSpacing),
                            C = rh.getTickArrayStartIndexByTick(g.tickUpper, d.config.tickSpacing),
                            { publicKey: x } = o1(new h.nh(d.programId), r.poolId, v),
                            { publicKey: O } = o1(new h.nh(d.programId), r.poolId, C),
                            { publicKey: q } = o0(new h.nh(d.programId), r.poolId, g.tickLower, g.tickUpper),
                            K = []; for (let e = 0; e < d.rewardInfos.length; e++) K.push({ poolRewardVault: new h.nh(d.rewardInfos[e].vault), ownerRewardVault: T[e], rewardMint: new h.nh(d.rewardInfos[e].mint.address) }); let W = await rq.harvestLockPositionInstructionV2({ programId: t, auth: n, lockPositionId: P, clmmProgram: i, lockOwner: r.lockOwner, lockNftMint: r.lockNftMint, lockNftAccount: B, positionNftAccount: r.nftAccount, positionId: r.positionId, poolId: r.poolId, protocolPosition: q, vaultA: new h.nh(d.vault.A), vaultB: new h.nh(d.vault.B), tickArrayLower: x, tickArrayUpper: O, userVaultA: k, userVaultB: A, mintA: new h.nh(d.mintA.address), mintB: new h.nh(d.mintB.address), rewardAccounts: K }); return m.addInstruction({ instructions: [W], instructionTypes: [nr.ClmmHarvestLockPosition] }), m.addCustomComputeBudget(c), m.versionBuild({ txVersion: l }) }
                    async closePosition({ poolInfo: e, poolKeys: t, ownerPosition: n, txVersion: i }) {!1 === this.scope.availability.removeConcentratedPosition && this.logAndCreateError("remove position feature disabled in your region"); let o = this.createTxBuilder(),
                            r = null != t ? t : await this.getClmmPoolKeys(e.id),
                            a = rq.closePositionInstructions({ poolInfo: e, poolKeys: r, ownerInfo: { wallet: this.scope.ownerPubKey }, ownerPosition: n }); return o.addInstruction(a).versionBuild({ txVersion: i, extInfo: { address: a.address } }) }
                    async initReward({ poolInfo: e, ownerInfo: t, rewardInfo: n, associatedOnly: i = !0, checkCreateATAOwner: o = !1, computeBudgetConfig: r, txVersion: a }) { n.endTime <= n.openTime && this.logAndCreateError("reward time error", "rewardInfo", n); let s = this.createTxBuilder(),
                            u = t.useSOLBalance && n.mint.address.toString() === tQ.toString(),
                            c = n.perSecond.mul(n.endTime - n.openTime),
                            { account: l, instructionParams: d } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: new h.nh(n.mint.address), mint: new h.nh(n.mint.address), notUseTokenAccount: !!u, skipCloseAccount: !u, owner: this.scope.ownerPubKey, createInfo: u ? { payer: t.feePayer || this.scope.ownerPubKey, amount: new k(new tk(c.toFixed(0)).gte(c) ? c.toFixed(0) : c.add(1).toFixed(0)) } : void 0, associatedOnly: !u && i, checkCreateATAOwner: o });
                        d && s.addInstruction(d), l || this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos); let m = await this.getClmmPoolKeys(e.id),
                            p = rq.initRewardInstructions({ poolInfo: e, poolKeys: m, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: l }, rewardInfo: { programId: new h.nh(n.mint.programId), mint: new h.nh(n.mint.address), openTime: n.openTime, endTime: n.endTime, emissionsPerSecondX64: rr.decimalToX64(n.perSecond) } }); return s.addInstruction(p), s.addCustomComputeBudget(r), s.versionBuild({ txVersion: a, extInfo: { address: p.address } }) }
                    async initRewards({ poolInfo: e, poolKeys: t, ownerInfo: n, rewardInfos: i, associatedOnly: o = !0, checkCreateATAOwner: r = !1, computeBudgetConfig: a, txVersion: s }) { for (let e of i) e.endTime <= e.openTime && this.logAndCreateError("reward time error", "rewardInfo", e); let u = this.createTxBuilder(),
                            c = {}; for (let a of i) { let i = n.useSOLBalance && a.mint.address === tQ.toString(),
                                s = a.perSecond.mul(a.endTime - a.openTime),
                                { account: l, instructionParams: d } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: new h.nh(a.mint.programId), mint: new h.nh(a.mint.address), notUseTokenAccount: !!i, skipCloseAccount: !i, owner: this.scope.ownerPubKey, createInfo: i ? { payer: n.feePayer || this.scope.ownerPubKey, amount: new k(new tk(s.toFixed(0)).gte(s) ? s.toFixed(0) : s.add(1).toFixed(0)) } : void 0, associatedOnly: !i && o, checkCreateATAOwner: r });
                            d && u.addInstruction(d), l || this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos); let m = null != t ? t : await this.getClmmPoolKeys(e.id),
                                p = rq.initRewardInstructions({ poolInfo: e, poolKeys: m, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: l }, rewardInfo: { programId: new h.nh(a.mint.programId), mint: new h.nh(a.mint.address), openTime: a.openTime, endTime: a.endTime, emissionsPerSecondX64: rr.decimalToX64(a.perSecond) } });
                            c = _(_({}, c), p.address), u.addInstruction(p) } return u.addCustomComputeBudget(a), u.versionBuild({ txVersion: s, extInfo: { address: c } }) }
                    async setReward({ poolInfo: e, ownerInfo: t, rewardInfo: n, associatedOnly: i = !0, checkCreateATAOwner: o = !1, computeBudgetConfig: r, txVersion: a }) { n.endTime <= n.openTime && this.logAndCreateError("reward time error", "rewardInfo", n); let s = this.createTxBuilder(),
                            u = t.useSOLBalance && n.mint.equals(tQ),
                            { account: c, instructionParams: l } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: n.programId, mint: n.mint, notUseTokenAccount: u, owner: this.scope.ownerPubKey, createInfo: u ? { payer: t.feePayer || this.scope.ownerPubKey, amount: new k(new tk(n.perSecond.sub(n.endTime - n.openTime).toFixed(0)).gte(n.perSecond.sub(n.endTime - n.openTime)) ? n.perSecond.sub(n.endTime - n.openTime).toFixed(0) : n.perSecond.sub(n.endTime - n.openTime).add(1).toFixed(0)) } : void 0, associatedOnly: !u && i, checkCreateATAOwner: o });
                        l && s.addInstruction(l), c || this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos); let d = await this.getClmmPoolKeys(e.id),
                            m = rq.setRewardInstructions({ poolInfo: e, poolKeys: d, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: c }, rewardInfo: { mint: n.mint, openTime: n.openTime, endTime: n.endTime, emissionsPerSecondX64: rr.decimalToX64(n.perSecond) } }); return s.addInstruction(m), s.addCustomComputeBudget(r), s.versionBuild({ txVersion: a, extInfo: { address: m.address } }) }
                    async setRewards({ poolInfo: e, poolKeys: t, ownerInfo: n, rewardInfos: i, associatedOnly: o = !0, checkCreateATAOwner: r = !1, computeBudgetConfig: a, txVersion: s }) { let u = this.createTxBuilder(),
                            c = {}; for (let a of i) { a.endTime <= a.openTime && this.logAndCreateError("reward time error", "rewardInfo", a); let i = n.useSOLBalance && a.mint.address === tQ.toString(),
                                { account: s, instructionParams: l } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: new h.nh(a.mint.programId), mint: new h.nh(a.mint.address), notUseTokenAccount: i, owner: this.scope.ownerPubKey, createInfo: i ? { payer: n.feePayer || this.scope.ownerPubKey, amount: new k(new tk(a.perSecond.sub(a.endTime - a.openTime).toFixed(0)).gte(a.perSecond.sub(a.endTime - a.openTime)) ? a.perSecond.sub(a.endTime - a.openTime).toFixed(0) : a.perSecond.sub(a.endTime - a.openTime).add(1).toFixed(0)) } : void 0, associatedOnly: !i && o, checkCreateATAOwner: r });
                            l && u.addInstruction(l), s || this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos); let d = null != t ? t : await this.getClmmPoolKeys(e.id),
                                m = rq.setRewardInstructions({ poolInfo: e, poolKeys: d, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: s }, rewardInfo: { mint: new h.nh(a.mint.address), openTime: a.openTime, endTime: a.endTime, emissionsPerSecondX64: rr.decimalToX64(a.perSecond) } });
                            u.addInstruction(m), c = _(_({}, c), m.address) } return u.addCustomComputeBudget(a), u.versionBuild({ txVersion: s, extInfo: { address: c } }) }
                    async collectReward({ poolInfo: e, ownerInfo: t, rewardMint: n, associatedOnly: i = !0, checkCreateATAOwner: o = !1 }) { let r = e.rewardDefaultInfos.find(e => e.mint.address === n.toString());
                        r || this.logAndCreateError("reward mint error", "not found reward mint", n); let a = this.createTxBuilder(),
                            s = t.useSOLBalance && n.equals(tQ),
                            { account: u, instructionParams: c } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: new h.nh(r.mint.programId), mint: n, notUseTokenAccount: s, owner: this.scope.ownerPubKey, skipCloseAccount: !s, createInfo: { payer: t.feePayer || this.scope.ownerPubKey, amount: 0 }, associatedOnly: !s && i, checkCreateATAOwner: o });
                        c && a.addInstruction(c), u || this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos); let l = await this.getClmmPoolKeys(e.id),
                            d = rq.collectRewardInstructions({ poolInfo: e, poolKeys: l, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: u }, rewardMint: n }); return a.addInstruction(d), a.build({ address: d.address }) }
                    async collectRewards({ poolInfo: e, ownerInfo: t, rewardMints: n, associatedOnly: i = !0, checkCreateATAOwner: o = !1 }) { let r = this.createTxBuilder(),
                            a = {}; for (let s of n) { let n = e.rewardDefaultInfos.find(e => e.mint.address === s.toString()); if (!n) { this.logAndCreateError("reward mint error", "not found reward mint", s); continue } let u = t.useSOLBalance && s.equals(tQ),
                                { account: c, instructionParams: l } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: new h.nh(n.mint.programId), mint: s, notUseTokenAccount: u, owner: this.scope.ownerPubKey, skipCloseAccount: !u, createInfo: { payer: t.feePayer || this.scope.ownerPubKey, amount: 0 }, associatedOnly: !u && i, checkCreateATAOwner: o });
                            c || this.logAndCreateError("no money", "ownerRewardAccount", this.scope.account.tokenAccountRawInfos), l && r.addInstruction(l); let d = await this.getClmmPoolKeys(e.id),
                                m = rq.collectRewardInstructions({ poolInfo: e, poolKeys: d, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccount: c }, rewardMint: s });
                            r.addInstruction(m), a = _(_({}, a), m.address) } return r.build({ address: a }) }
                    async swap({ poolInfo: e, poolKeys: t, inputMint: n, amountIn: i, amountOutMin: o, priceLimit: r, observationId: a, ownerInfo: s, remainingAccounts: u, associatedOnly: c = !0, checkCreateATAOwner: l = !1, txVersion: d, computeBudgetConfig: m }) { let p, g, f = this.createTxBuilder(),
                            w = n.toString() === e.mintA.address,
                            y = s.useSOLBalance && e.mintA.address === tQ.toBase58(),
                            b = s.useSOLBalance && e.mintB.address === tQ.toBase58(),
                            A; if (A = !r || r.equals(new tk(0)) ? w ? oW.add(new k(1)) : oM.sub(new k(1)) : ru.priceToSqrtPriceX64(r, e.mintA.decimals, e.mintB.decimals), !p) { let { account: t, instructionParams: n } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mintA.programId, mint: new h.nh(e.mintA.address), notUseTokenAccount: y, owner: this.scope.ownerPubKey, skipCloseAccount: !y, createInfo: y || !w ? { payer: s.feePayer || this.scope.ownerPubKey, amount: w ? i : 0 } : void 0, associatedOnly: !y && c, checkCreateATAOwner: l });
                            p = t, n && f.addInstruction(n) } if (!g) { let { account: t, instructionParams: n } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mintB.programId, mint: new h.nh(e.mintB.address), notUseTokenAccount: b, owner: this.scope.ownerPubKey, skipCloseAccount: !b, createInfo: b || w ? { payer: s.feePayer || this.scope.ownerPubKey, amount: w ? 0 : i } : void 0, associatedOnly: !b && c, checkCreateATAOwner: l });
                            g = t, n && f.addInstruction(n) }
                        p && g || this.logAndCreateError("user do not have token account", { tokenA: e.mintA.symbol || e.mintA.address, tokenB: e.mintB.symbol || e.mintB.address, ownerTokenAccountA: p, ownerTokenAccountB: g, mintAUseSOLBalance: y, mintBUseSOLBalance: b, associatedOnly: c }); let I = null != t ? t : await this.getClmmPoolKeys(e.id); return f.addInstruction(rq.makeSwapBaseInInstructions({ poolInfo: e, poolKeys: I, observationId: a, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccountA: p, tokenAccountB: g }, inputMint: new h.nh(n), amountIn: i, amountOutMin: o, sqrtPriceLimitX64: A, remainingAccounts: u })), f.addCustomComputeBudget(m), f.versionBuild({ txVersion: d }) }
                    async swapBaseOut({ poolInfo: e, poolKeys: t, outputMint: n, amountOut: i, amountInMax: o, priceLimit: r, observationId: a, ownerInfo: s, remainingAccounts: u, associatedOnly: c = !0, checkCreateATAOwner: l = !1, txVersion: d, computeBudgetConfig: m }) { let p, g, f = this.createTxBuilder(),
                            w = n.toString() === e.mintB.address,
                            y = s.useSOLBalance && e.mintA.address === tQ.toBase58(),
                            b = s.useSOLBalance && e.mintB.address === tQ.toBase58(),
                            A; if (A = !r || r.equals(new tk(0)) ? n.toString() === e.mintB.address ? oW.add(new k(1)) : oM.sub(new k(1)) : ru.priceToSqrtPriceX64(r, e.mintA.decimals, e.mintB.decimals), !p) { let { account: t, instructionParams: n } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mintA.programId, mint: new h.nh(e.mintA.address), notUseTokenAccount: y, owner: this.scope.ownerPubKey, skipCloseAccount: !y, createInfo: y || !w ? { payer: s.feePayer || this.scope.ownerPubKey, amount: w ? o : 0 } : void 0, associatedOnly: !y && c, checkCreateATAOwner: l });
                            p = t, n && f.addInstruction(n) } if (!g) { let { account: t, instructionParams: n } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mintB.programId, mint: new h.nh(e.mintB.address), notUseTokenAccount: b, owner: this.scope.ownerPubKey, skipCloseAccount: !b, createInfo: b || w ? { payer: s.feePayer || this.scope.ownerPubKey, amount: w ? 0 : o } : void 0, associatedOnly: !b && c, checkCreateATAOwner: l });
                            g = t, n && f.addInstruction(n) }
                        p && g || this.logAndCreateError("user do not have token account", { tokenA: e.mintA.symbol || e.mintA.address, tokenB: e.mintB.symbol || e.mintB.address, ownerTokenAccountA: p, ownerTokenAccountB: g, mintAUseSOLBalance: y, mintBUseSOLBalance: b, associatedOnly: c }); let I = null != t ? t : await this.getClmmPoolKeys(e.id); return f.addInstruction(rq.makeSwapBaseOutInstructions({ poolInfo: e, poolKeys: I, observationId: a, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccountA: p, tokenAccountB: g }, outputMint: new h.nh(n), amountOut: i, amountInMax: o, sqrtPriceLimitX64: A, remainingAccounts: u })), f.addCustomComputeBudget(m), f.versionBuild({ txVersion: d }) }
                    async harvestAllRewards({ allPoolInfo: e, allPositions: t, lockInfo: n, ownerInfo: i, associatedOnly: o = !0, checkCreateATAOwner: r = !1, programId: a, txVersion: s, computeBudgetConfig: u }) { var c; let l = {}; for (let e of this.scope.account.tokenAccountRawInfos) o ? nb(this.scope.ownerPubKey, e.accountInfo.mint, a).publicKey.equals(e.pubkey) && (l[e.accountInfo.mint.toString()] = e.pubkey) : l[e.accountInfo.mint.toString()] = e.pubkey; let d = this.createTxBuilder(); for (let a of Object.values(e)) { if (void 0 === t[a.id] || !t[a.id].find(e => !e.liquidity.isZero() || e.rewardInfos.find(e => !e.rewardAmountOwed.isZero()))) continue; let e = a,
                                s = i.useSOLBalance && e.mintA.address === tQ.toString(),
                                u = i.useSOLBalance && e.mintB.address === tQ.toString(),
                                m = l[e.mintA.address]; if (!m) { let { account: t, instructionParams: n } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mintA.programId, mint: new h.nh(e.mintA.address), notUseTokenAccount: s, owner: this.scope.ownerPubKey, skipCloseAccount: !s, createInfo: { payer: i.feePayer || this.scope.ownerPubKey, amount: 0 }, associatedOnly: !s && o, checkCreateATAOwner: r });
                                m = t, n && d.addInstruction(n) } let p = l[e.mintB.address]; if (!p) { let { account: t, instructionParams: n } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: e.mintB.programId, mint: new h.nh(e.mintB.address), notUseTokenAccount: u, owner: this.scope.ownerPubKey, skipCloseAccount: !u, createInfo: { payer: i.feePayer || this.scope.ownerPubKey, amount: 0 }, associatedOnly: !u && o, checkCreateATAOwner: r });
                                p = t, n && d.addInstruction(n) }
                            l[e.mintA.address] = m, l[e.mintB.address] = p; let g = []; for (let t of e.rewardDefaultInfos) { let e = i.useSOLBalance && t.mint.address === tQ.toString(),
                                    n = l[t.mint.address]; if (!n) { let { account: r, instructionParams: a } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: new h.nh(t.mint.programId), mint: new h.nh(t.mint.address), notUseTokenAccount: e, owner: this.scope.ownerPubKey, skipCloseAccount: !e, createInfo: { payer: i.feePayer || this.scope.ownerPubKey, amount: 0 }, associatedOnly: !e && o });
                                    n = r, a && d.addInstruction(a) }
                                l[t.mint.address] = n, g.push(n) } let f = await this.getClmmPoolKeys(e.id),
                                y = []; for (let e = 0; e < f.rewardInfos.length; e++) y.push({ poolRewardVault: new h.nh(f.rewardInfos[e].vault), ownerRewardVault: g[e], rewardMint: new h.nh(f.rewardInfos[e].mint.address) }); for (let i of t[a.id]) { let t = null == (c = null == n ? void 0 : n[a.id]) ? void 0 : c[i.nftMint.toBase58()]; if (t) { let e = nb(this.scope.ownerPubKey, t.lockNftMint, w.H_).publicKey,
                                        n = rh.getTickArrayStartIndexByTick(i.tickLower, f.config.tickSpacing),
                                        o = rh.getTickArrayStartIndexByTick(i.tickUpper, f.config.tickSpacing),
                                        { publicKey: r } = o1(new h.nh(f.programId), t.poolId, n),
                                        { publicKey: a } = o1(new h.nh(f.programId), t.poolId, o),
                                        { publicKey: s } = o0(new h.nh(f.programId), t.poolId, i.tickLower, i.tickUpper),
                                        u = o3(nq, t.lockNftMint).publicKey,
                                        c = rq.harvestLockPositionInstructionV2({ programId: nq, auth: nK, lockPositionId: u, clmmProgram: nO, lockOwner: t.lockOwner, lockNftMint: t.lockNftMint, lockNftAccount: e, positionNftAccount: t.nftAccount, positionId: t.positionId, poolId: t.poolId, protocolPosition: s, vaultA: new h.nh(f.vault.A), vaultB: new h.nh(f.vault.B), tickArrayLower: r, tickArrayUpper: a, userVaultA: m, userVaultB: p, mintA: new h.nh(f.mintA.address), mintB: new h.nh(f.mintB.address), rewardAccounts: y });
                                    d.addInstruction({ instructions: [c], instructionTypes: [nr.ClmmHarvestLockPosition], lookupTableAddress: f.lookupTableAccount ? [f.lookupTableAccount] : [] }) } else { let t = rq.decreaseLiquidityInstructions({ poolInfo: e, poolKeys: f, ownerPosition: i, ownerInfo: { wallet: this.scope.ownerPubKey, tokenAccountA: m, tokenAccountB: p, rewardAccounts: g }, liquidity: new k(0), amountMinA: new k(0), amountMinB: new k(0) });
                                    d.addInstruction(t) } } } return 0 === s ? d.sizeCheckBuildV0({ computeBudgetConfig: u }) : d.sizeCheckBuild({ computeBudgetConfig: u }) }
                    async getWhiteListMint({ programId: e }) { let t = await this.scope.connection.getAccountInfo(np([oZ], e).publicKey); return t ? rT.decode(t.data).whitelistMints.filter(e => !e.equals(h.nh.default)) : [] }
                    async getOwnerPositionInfo({ programId: e }) { await this.scope.account.fetchWalletTokenAccounts(); let t = this.scope.account.tokenAccountRawInfos.filter(e => e.accountInfo.amount.eq(new k(1))).map(t => o4(new h.nh(e), t.accountInfo.mint).publicKey),
                            n = await this.scope.connection.getMultipleAccountsInfo(t),
                            i = []; return n.forEach(e => { if (!e) return; let t = rA.decode(e.data);
                            i.push(t) }), i }
                    async getRpcClmmPoolInfo({ poolId: e }) { return (await this.getRpcClmmPoolInfos({ poolIds: [e] }))[String(e)] }
                    async getRpcClmmPoolInfos({ poolIds: e, config: t }) { let n = await z(this.scope.connection, e.map(e => ({ pubkey: new h.nh(e) })), t),
                            i = {}; for (let t = 0; t < e.length; t++) { let o = n[t]; if (null === o || !o.accountInfo) throw Error("fetch pool info error: " + String(e[t])); let r = rk.decode(o.accountInfo.data),
                                a = ru.sqrtPriceX64ToPrice(r.sqrtPriceX64, r.mintDecimalsA, r.mintDecimalsB).toNumber();
                            i[String(e[t])] = F(_({}, r), { currentPrice: a, programId: o.accountInfo.owner }) } return i }
                    async getComputeClmmPoolInfos({ clmmPoolsRpcInfo: e, mintInfos: t }) { let n = new Set(Object.keys(e).map(t => e[t].ammConfig.toBase58())),
                            i = await z(this.scope.connection, Array.from(n).map(e => ({ pubkey: new h.nh(e) }))),
                            o = {};
                        i.forEach(e => { e.accountInfo && (o[e.pubkey.toBase58()] = rg.decode(e.accountInfo.data)) }); let r = await rn.fetchComputeMultipleClmmInfo({ connection: this.scope.connection, rpcDataMap: e, poolList: Object.keys(e).map(n => { var i, r, a, s; let [u, c] = [e[n].mintA.toBase58(), e[n].mintB.toBase58()]; return { id: n, programId: e[n].programId.toBase58(), mintA: rR({ address: u, decimals: e[n].mintDecimalsA, programId: t[u].programId.toBase58() || w.H_.toBase58(), extensions: { feeConfig: null != (i = t[u]) && i.feeConfig ? r_(null == (r = t[u]) ? void 0 : r.feeConfig) : void 0 } }), mintB: rR({ address: c, decimals: e[n].mintDecimalsB, programId: t[c].programId.toBase58() || w.H_.toBase58(), extensions: { feeConfig: null != (a = t[c]) && a.feeConfig ? r_(null == (s = t[c]) ? void 0 : s.feeConfig) : void 0 } }), price: e[n].currentPrice, config: F(_({}, o[e[n].ammConfig.toBase58()]), { id: e[n].ammConfig.toBase58(), fundFeeRate: 0, description: "", defaultRange: 0, defaultRangePoint: [] }) } }) }),
                            a = await rn.fetchMultiplePoolTickArrays({ connection: this.scope.connection, poolKeys: Object.values(r) }); return { computeClmmPoolInfo: r, computePoolTickData: a } }
                    async getPoolInfoFromRpc(e) { var t, n; let i = await this.getRpcClmmPoolInfo({ poolId: e }),
                            o = new Set([i.mintA.toBase58(), i.mintB.toBase58()]),
                            r = await Q({ connection: this.scope.connection, mints: Array.from(o).map(e => new h.nh(e)) }),
                            { computeClmmPoolInfo: a, computePoolTickData: s } = await this.scope.clmm.getComputeClmmPoolInfos({ clmmPoolsRpcInfo: {
                                    [e]: i }, mintInfos: r }),
                            u = await z(this.scope.connection, [{ pubkey: i.vaultA }, { pubkey: i.vaultB }]),
                            c = F(_({}, n = a[e]), { type: "Concentrated", programId: n.programId.toString(), id: n.id.toString(), rewardDefaultInfos: [], rewardDefaultPoolInfos: "Clmm", price: n.currentPrice.toNumber(), mintAmountA: 0, mintAmountB: 0, feeRate: n.ammConfig.tradeFeeRate, openTime: n.startTime.toString(), tvl: 0, day: ro, week: ro, month: ro, pooltype: [], farmUpcomingCount: 0, farmOngoingCount: 0, farmFinishedCount: 0, burnPercent: 0, config: F(_({}, n.ammConfig), { id: n.ammConfig.id.toString(), defaultRange: 0, defaultRangePoint: [] }) }); if (!u[0].accountInfo || !u[1].accountInfo) throw Error("pool vault data not found");
                        c.mintAmountA = Number(T.p0.decode(u[0].accountInfo.data).amount.toString()), c.mintAmountB = Number(T.p0.decode(null == (t = u[1].accountInfo) ? void 0 : t.data).amount.toString()); let l = F(_({}, a[e]), { id: e, programId: i.programId.toBase58(), openTime: i.startTime.toString(), vault: { A: i.vaultA.toBase58(), B: i.vaultB.toBase58() }, config: c.config, rewardInfos: a[e].rewardInfos.filter(e => !e.tokenVault.equals(h.nh.default)).map(e => ({ mint: rR({ address: e.tokenMint.toBase58(), programId: w.H_.toBase58(), decimals: 10 }), vault: e.tokenVault.toBase58() })) }); return { poolInfo: c, poolKeys: l, computePoolInfo: a[e], tickData: s } } };

            function ai(e, t) { if (t.isZero()) throw Error("divisor is zero"); return e.mod(t) } var ao = new k(0),
                ar = class { static swapWithoutFees(e, t, n) { let [i, o] = function(e, t) { if (t.isZero()) throw Error("rhs is zero"); let n = e.div(t); if (n.isZero()) throw Error("quotient is zero"); let i = ai(e, t); return i.gt(ao) && (n = n.add(new k(1)), t = e.div(n), (i = ai(e, n)).gt(ao) && (t = t.add(new k(1)))), [n, t] }(t.mul(n), t.add(e)), r = o.sub(t), a = n.sub(i); if (a.isZero()) throw Error("destinationAmountSwapped is zero"); return { sourceAmountSwapped: r, destinationAmountSwapped: a } }
                    static lpTokensToTradingTokens(e, t, n, i, o) { let r = e.mul(n).div(t),
                            a = e.mul(i).div(t); if (0 === o) return { tokenAmount0: r, tokenAmount1: a }; if (1 === o) return ai(e.mul(n), t).gt(ao) && r.gt(ao) && (r = r.add(new k(1))), ai(e.mul(i), t).gt(ao) && a.gt(ao) && (a = a.add(new k(1))), { tokenAmount0: r, tokenAmount1: a }; throw Error("roundDirection value error") } },
                aa = new k(1e6),
                as = class { static tradingFee(e, t) { return e.mul(t).add(aa).sub(new k(1)).div(aa) }
                    static protocolFee(e, t) { return e.mul(t).div(aa) }
                    static fundFee(e, t) { return e.mul(t).div(aa) } },
                au = ((d = au || {})[d.Floor = 0] = "Floor", d[d.Ceiling = 1] = "Ceiling", d),
                ac = class { static validate_supply(e, t) { if (e.isZero()) throw Error("tokenAmount0 is zero"); if (t.isZero()) throw Error("tokenAmount1 is zero") }
                    static swap(e, t, n, i) { let o = as.tradingFee(e, i),
                            r = e.sub(o),
                            { sourceAmountSwapped: a, destinationAmountSwapped: s } = ar.swapWithoutFees(r, t, n),
                            u = a.add(o); return { newSwapSourceAmount: t.add(u), newSwapDestinationAmount: n.sub(s), sourceAmountSwapped: u, destinationAmountSwapped: s, tradeFee: o } }
                    static swapBaseOut({ poolMintA: e, poolMintB: t, tradeFeeRate: n, baseReserve: i, quoteReserve: o, outputMint: r, outputAmount: a }) { let [s, u, c, l, d] = t.address === r.toString() ? [i, o, e.decimals, t.decimals, e.address] : [o, i, t.decimals, e.decimals, t.address], m = new I(u.toString()).div(10 ** l).div(new I(s.toString()).div(10 ** c)), p = a.gte(u) ? u.sub(new k(1)) : a, h = u.sub(p), g = nz(s.mul(p), h), f = nz(g.mul(new k(1e6)), new k(1e6).sub(n)), w = f.sub(g), y = new I(p.toString()).div(10 ** l).div(new I(f.toString()).div(10 ** c)); return { amountRealOut: p, amountIn: f, amountInWithoutFee: g, tradeFee: w, priceImpact: m.isZero() ? 0 : y.sub(m).div(m).abs().toNumber() } } },
                al = x.from("vault_and_lp_mint_auth_seed", "utf8"),
                ad = x.from("amm_config", "utf8"),
                am = x.from("pool", "utf8"),
                ap = x.from("pool_lp_mint", "utf8"),
                ah = x.from("pool_vault", "utf8"),
                ag = x.from("observation", "utf8");

            function af(e) { return np([al], e) }

            function aw(e, t) { let n; return np([ad, (n = new ArrayBuffer(2), new DataView(n).setUint16(0, t, !1), new Uint8Array(n))], e) }

            function ay(e, t, n, i) { return np([am, t.toBuffer(), n.toBuffer(), i.toBuffer()], e) }

            function ak(e, t, n) { return np([ah, t.toBuffer(), n.toBuffer()], e) }

            function ab(e, t) { return np([ag, t.toBuffer()], e) } var aA = x.from("locked_liquidity", "utf8");

            function aI(e, t) { return np([aA, t.toBuffer()], e) } var aS = X("Nova Bot_cpmm"),
                aT = { initialize: [175, 175, 109, 31, 13, 152, 155, 237], deposit: [242, 35, 198, 137, 82, 225, 242, 182], withdraw: [183, 18, 70, 156, 148, 109, 161, 34], swapBaseInput: [143, 190, 90, 218, 196, 30, 51, 222], swapBaseOutput: [55, 217, 98, 86, 163, 74, 180, 173], lockCpLiquidity: [216, 157, 29, 78, 38, 51, 31, 26], collectCpFee: [8, 30, 51, 199, 209, 184, 247, 133] };

            function aP(e, t, n, i, o, r, a, s, u, c, l, d, m, p, g, f) { let w = iD([iq("amountIn"), iq("amounOutMin")]),
                    y = x.alloc(w.span); return w.encode({ amountIn: g, amounOutMin: f }, y), new h.Sl({ keys: [{ pubkey: t, isSigner: !0, isWritable: !1 }, { pubkey: n, isSigner: !1, isWritable: !1 }, { pubkey: i, isSigner: !1, isWritable: !1 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !1 }, { pubkey: l, isSigner: !1, isWritable: !1 }, { pubkey: d, isSigner: !1, isWritable: !1 }, { pubkey: m, isSigner: !1, isWritable: !1 }, { pubkey: p, isSigner: !1, isWritable: !0 }], programId: e, data: x.from([...aT.swapBaseInput, ...y]) }) }
            async function aB(e) { var t; let { ownerInfo: n, poolInfo: i, poolKeys: o, getEphemeralSigners: r } = e, a = [], [s, u] = [new h.nh(i.id), new h.nh(i.lpMint.address)], c; if (r) c = new h.nh((await r(1))[0]);
                else { let e = h.RG.generate();
                    a.push(e), c = e.publicKey } let { publicKey: l } = nb(n.feePayer, c, w.H_), { publicKey: d } = o6(c), { publicKey: m } = aI(e.lockProgram, c), { publicKey: p } = nb(n.feePayer, u, w.H_), { publicKey: g } = nb(e.lockAuthProgram, u, w.H_), f = function({ programId: e, auth: t, payer: n, liquidityOwner: i, nftOwner: o, nftMint: r, nftAccount: a, poolId: s, lockPda: u, mintLp: c, userLpVault: l, lockLpVault: d, poolVaultA: m, poolVaultB: p, metadataAccount: g, lpAmount: f, withMetadata: y }) { let k = [{ pubkey: t, isSigner: !1, isWritable: !1 }, { pubkey: n, isSigner: !0, isWritable: !0 }, { pubkey: i, isSigner: !0, isWritable: !1 }, { pubkey: o, isSigner: !1, isWritable: !1 }, { pubkey: r, isSigner: !0, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !1 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !1 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: m, isSigner: !1, isWritable: !0 }, { pubkey: p, isSigner: !1, isWritable: !0 }, { pubkey: g, isSigner: !1, isWritable: !0 }, { pubkey: tV, isSigner: !1, isWritable: !1 }, { pubkey: h.yc.programId, isSigner: !1, isWritable: !1 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w._u, isSigner: !1, isWritable: !1 }, { pubkey: tU, isSigner: !1, isWritable: !1 }],
                        b = iD([iq("lpAmount"), iR("withMetadata")]),
                        A = x.alloc(b.span);
                    b.encode({ lpAmount: f, withMetadata: y }, A); let I = x.from([...aT.lockCpLiquidity, ...A]); return new h.Sl({ keys: k, programId: e, data: I }) }({ programId: e.lockProgram, auth: e.lockAuthProgram, payer: n.feePayer, nftOwner: n.feePayer, liquidityOwner: n.feePayer, nftMint: c, nftAccount: l, poolId: s, lockPda: m, mintLp: u, userLpVault: p, lockLpVault: g, poolVaultA: new h.nh(o.vault.A), poolVaultB: new h.nh(o.vault.B), metadataAccount: d, lpAmount: e.lpAmount, withMetadata: null == (t = e.withMetadata) || t }); return { address: { nftMint: c, nftAccount: l, metadataAccount: d, lockPda: m, userLpVault: p, lockLpVault: g }, instructions: [f], signers: a, instructionTypes: [nr.CpmmLockLp], lookupTableAddress: [] } } var av = iD([iP(8), ix("bump"), iR("disableCreatePool"), ib("index"), iq("tradeFeeRate"), iq("protocolFeeRate"), iq("fundFeeRate"), iq("createPoolFee"), iL("protocolOwner"), iL("fundOwner"), iV(iq(), 16)]),
                aC = iD([iP(8), iL("configId"), iL("poolCreator"), iL("vaultA"), iL("vaultB"), iL("mintLp"), iL("mintA"), iL("mintB"), iL("mintProgramA"), iL("mintProgramB"), iL("observationId"), ix("bump"), ix("status"), ix("lpDecimals"), ix("mintDecimalA"), ix("mintDecimalB"), iq("lpAmount"), iq("protocolFeesMintA"), iq("protocolFeesMintB"), iq("fundFeesMintA"), iq("fundFeesMintB"), iq("openTime"), iV(iq(), 32)]),
                ax = class extends n9 { constructor(e) { super(e) }
                    async load() { this.checkDisabled() }
                    async getCpmmPoolKeys(e) { return (await this.scope.api.fetchPoolKeysById({ idList: [e] }))[0] }
                    async getRpcPoolInfo(e, t) { return (await this.getRpcPoolInfos([e], t))[e] }
                    async getRpcPoolInfos(e, t) { let n = await z(this.scope.connection, e.map(e => ({ pubkey: new h.nh(e) }))),
                            i = {},
                            o = new Set,
                            r = []; for (let t = 0; t < e.length; t++) { let a = n[t]; if (null === a.accountInfo) throw Error("fetch pool info error: " + String(e[t])); let s = aC.decode(a.accountInfo.data);
                            i[String(e[t])] = F(_({}, s), { programId: a.accountInfo.owner }), o.add(String(s.configId)), r.push(s.vaultA, s.vaultB) } let a = {}; if (t) { let e = [...o],
                                t = await z(this.scope.connection, e.map(e => ({ pubkey: new h.nh(e) }))); for (let n = 0; n < e.length; n++) { let i = t[n].accountInfo; if (null === i) throw Error("fetch pool config error: " + e[n]);
                                a[e[n]] = av.decode(i.data) } } let s = {},
                            u = await z(this.scope.connection, r.map(e => ({ pubkey: new h.nh(e) }))); for (let e = 0; e < r.length; e++) { let t = u[e].accountInfo; if (null === t) throw Error("fetch vault info error: " + r[e]);
                            s[String(r[e])] = new k(T.p0.decode(t.data).amount.toString()) } let c = {}; for (let [e, t] of Object.entries(i)) { let n = s[t.vaultA.toString()].sub(t.protocolFeesMintA).sub(t.fundFeesMintA),
                                i = s[t.vaultB.toString()].sub(t.protocolFeesMintB).sub(t.fundFeesMintB);
                            c[e] = F(_({}, t), { baseReserve: n, quoteReserve: i, vaultAAmount: s[t.vaultA.toString()], vaultBAmount: s[t.vaultB.toString()], configInfo: a[t.configId.toString()], poolPrice: new tk(i.toString()).div(new tk(10).pow(t.mintDecimalB)).div(new tk(n.toString()).div(new tk(10).pow(t.mintDecimalA))) }) } return c }
                    toComputePoolInfos({ pools: e, mintInfos: t }) { return Object.keys(e).reduce((n, i) => { var o, r, a, s; let u = e[i],
                                [c, l] = [u.mintA.toBase58(), u.mintB.toBase58()]; return F(_({}, n), {
                                [i]: F(_({}, u), { id: new h.nh(i), configInfo: u.configInfo, version: 7, authority: af(u.programId).publicKey, mintA: rR({ address: c, decimals: u.mintDecimalA, programId: u.mintProgramA.toBase58(), extensions: { feeConfig: null != (o = t[c]) && o.feeConfig ? r_(null == (r = t[c]) ? void 0 : r.feeConfig) : void 0 } }), mintB: rR({ address: l, decimals: u.mintDecimalB, programId: u.mintProgramB.toBase58(), extensions: { feeConfig: null != (a = t[l]) && a.feeConfig ? r_(null == (s = t[l]) ? void 0 : s.feeConfig) : void 0 } }) }) }) }, {}) }
                    async getPoolInfoFromRpc(e) { let t = await this.getRpcPoolInfo(e, !0),
                            n = await Q({ connection: this.scope.connection, mints: [t.mintA, t.mintB] }),
                            i = rR({ address: t.mintA.toBase58(), decimals: t.mintDecimalA, programId: t.mintProgramA.toBase58(), extensions: { feeConfig: n[t.mintA.toBase58()].feeConfig ? r_(n[t.mintA.toBase58()].feeConfig) : void 0 } }),
                            o = rR({ address: t.mintB.toBase58(), decimals: t.mintDecimalB, programId: t.mintProgramB.toBase58(), extensions: { feeConfig: n[t.mintB.toBase58()].feeConfig ? r_(n[t.mintB.toBase58()].feeConfig) : void 0 } }),
                            r = rR({ address: t.mintLp.toBase58(), decimals: t.lpDecimals, programId: w.H_.toBase58() }),
                            a = { id: t.configId.toBase58(), index: t.configInfo.index, protocolFeeRate: t.configInfo.protocolFeeRate.toNumber(), tradeFeeRate: t.configInfo.tradeFeeRate.toNumber(), fundFeeRate: t.configInfo.fundFeeRate.toNumber(), createPoolFee: t.configInfo.createPoolFee.toString() },
                            s = { volume: 0, volumeQuote: 0, volumeFee: 0, apr: 0, feeApr: 0, priceMin: 0, priceMax: 0, rewardApr: [] }; return { poolInfo: { programId: t.programId.toBase58(), id: e, type: "Standard", lpMint: r, lpPrice: 0, lpAmount: t.lpAmount.toNumber(), config: a, mintA: i, mintB: o, rewardDefaultInfos: [], rewardDefaultPoolInfos: "Ecosystem", price: t.poolPrice.toNumber(), mintAmountA: new tk(t.vaultAAmount.toString()).div(10 ** i.decimals).toNumber(), mintAmountB: new tk(t.vaultBAmount.toString()).div(10 ** o.decimals).toNumber(), feeRate: t.configInfo.tradeFeeRate.toNumber(), openTime: t.openTime.toString(), tvl: 0, burnPercent: 0, day: s, week: s, month: s, pooltype: [], farmUpcomingCount: 0, farmOngoingCount: 0, farmFinishedCount: 0 }, poolKeys: { programId: t.programId.toBase58(), id: e, mintA: i, mintB: o, openTime: t.openTime.toString(), vault: { A: t.vaultA.toBase58(), B: t.vaultB.toBase58() }, authority: af(t.programId).publicKey.toBase58(), mintLp: r, config: a }, rpcData: t } }
                    async createPool(e) { let t, n, i, o; var r, a, s, u, c, l, d, m, p, g, f, y, b, A, { poolId: I, programId: S, poolFeeAccount: T, startTime: P, ownerInfo: B, associatedOnly: v = !1, checkCreateATAOwner: C = !1, txVersion: O, feeConfig: q, computeBudgetConfig: K } = e,
                            W = E(e, ["poolId", "programId", "poolFeeAccount", "startTime", "ownerInfo", "associatedOnly", "checkCreateATAOwner", "txVersion", "feeConfig", "computeBudgetConfig"]); let M = B.feePayer || (null == (y = this.scope.owner) ? void 0 : y.publicKey),
                            L = new k(new h.nh(W.mintA.address).toBuffer()).lte(new k(new h.nh(W.mintB.address).toBuffer())),
                            [R, D] = L ? [W.mintA, W.mintB] : [W.mintB, W.mintA],
                            [V, N] = L ? [W.mintAAmount, W.mintBAmount] : [W.mintBAmount, W.mintAAmount],
                            U = B.useSOLBalance && R.address === w.Gd.toBase58(),
                            X = B.useSOLBalance && D.address === w.Gd.toBase58(),
                            [H, G] = [new h.nh(R.address), new h.nh(D.address)],
                            z = this.createTxBuilder(),
                            { account: j, instructionParams: Q } = await this.scope.account.getOrCreateTokenAccount({ mint: H, tokenProgram: R.programId, owner: this.scope.ownerPubKey, createInfo: U ? { payer: M, amount: V } : void 0, notUseTokenAccount: U, skipCloseAccount: !U, associatedOnly: !U && v, checkCreateATAOwner: C });
                        z.addInstruction(Q || {}); let { account: Z, instructionParams: $ } = await this.scope.account.getOrCreateTokenAccount({ mint: new h.nh(D.address), tokenProgram: D.programId, owner: this.scope.ownerPubKey, createInfo: X ? { payer: M, amount: N } : void 0, notUseTokenAccount: X, skipCloseAccount: !X, associatedOnly: !X && v, checkCreateATAOwner: C }); if (z.addInstruction($ || {}), void 0 === j || void 0 === Z) throw Error("you don't has some token account"); let Y = function({ poolId: e, programId: t, configId: n, mintA: i, mintB: o }) { let r = af(t).publicKey,
                                a = e || ay(t, n, i, o).publicKey,
                                s = np([ap, a.toBuffer()], t).publicKey,
                                u = ak(t, a, i).publicKey,
                                c = ak(t, a, o).publicKey,
                                l = ab(t, a).publicKey; return { poolId: a, configId: n, authority: r, lpMint: s, vaultA: u, vaultB: c, observationId: l } }({ poolId: I, programId: S, configId: new h.nh(q.id), mintA: H, mintB: G }); return z.addInstruction({ instructions: [(r = this.scope.ownerPubKey, a = new h.nh(q.id), s = Y.authority, u = Y.poolId, c = Y.lpMint, l = nb(this.scope.ownerPubKey, Y.lpMint).publicKey, d = Y.vaultA, m = Y.vaultB, p = new h.nh(null != (b = R.programId) ? b : w.H_), g = new h.nh(null != (A = D.programId) ? A : w.H_), f = Y.observationId, t = iD([iq("amountMaxA"), iq("amountMaxB"), iq("openTime")]), n = ay(S, a, H, G).publicKey, i = [{ pubkey: r, isSigner: !0, isWritable: !1 }, { pubkey: a, isSigner: !1, isWritable: !1 }, { pubkey: s, isSigner: !1, isWritable: !1 }, { pubkey: u, isSigner: !u.equals(n), isWritable: !0 }, { pubkey: H, isSigner: !1, isWritable: !1 }, { pubkey: G, isSigner: !1, isWritable: !1 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: j, isSigner: !1, isWritable: !0 }, { pubkey: Z, isSigner: !1, isWritable: !0 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: m, isSigner: !1, isWritable: !0 }, { pubkey: T, isSigner: !1, isWritable: !0 }, { pubkey: f, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: p, isSigner: !1, isWritable: !1 }, { pubkey: g, isSigner: !1, isWritable: !1 }, { pubkey: w._u, isSigner: !1, isWritable: !1 }, { pubkey: tX, isSigner: !1, isWritable: !1 }, { pubkey: tV, isSigner: !1, isWritable: !1 }], o = x.alloc(t.span), t.encode({ amountMaxA: V, amountMaxB: N, openTime: P }, o), new h.Sl({ keys: i, programId: S, data: x.from([...aT.initialize, ...o]) }))], instructionTypes: [nr.CpmmCreatePool] }), z.addCustomComputeBudget(K), z.versionBuild({ txVersion: O, extInfo: { address: F(_({}, Y), { mintA: R, mintB: D, programId: S, poolFeeAccount: T, feeConfig: q }) } }) }
                    async addLiquidity(e) { var t, n, i, o, r, a, s, u, c, l; let d, m, p, { poolInfo: g, poolKeys: f, inputAmount: y, baseIn: b, slippage: A, computeResult: I, computeBudgetConfig: S, config: T, txVersion: P } = e;!1 === this.scope.availability.addStandardPosition && this.logAndCreateError("add liquidity feature disabled in your region"), y.isZero() && this.logAndCreateError("amounts must greater than zero", "amountInA", { amountInA: y.toString() }); let { account: B } = this.scope, { bypassAssociatedCheck: v, checkCreateATAOwner: C } = _({ bypassAssociatedCheck: !1, checkCreateATAOwner: !1 }, T), O = I ? void 0 : await this.getRpcPoolInfo(g.id), { liquidity: q, inputAmountFee: K, anotherAmount: W } = I || this.computePairAmount({ poolInfo: F(_({}, g), { lpAmount: new tk(O.lpAmount.toString()).div(10 ** g.lpMint.decimals).toNumber() }), baseReserve: O.baseReserve, quoteReserve: O.quoteReserve, slippage: new t4(0), baseIn: b, epochInfo: await this.scope.fetchEpochInfo(), amount: new tk(y.toString()).div(10 ** (b ? g.mintA.decimals : g.mintB.decimals)) }), M = W.amount, L = g.mintA.address === w.Gd.toString(), R = g.mintB.address === w.Gd.toString(), D = this.createTxBuilder(), [V, N] = [new h.nh(g.mintA.address), new h.nh(g.mintB.address)], { account: U, instructionParams: X } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: g.mintA.programId, mint: new h.nh(g.mintA.address), owner: this.scope.ownerPubKey, createInfo: L || (b ? y : M).isZero() ? { payer: this.scope.ownerPubKey, amount: b ? y : M } : void 0, skipCloseAccount: !L, notUseTokenAccount: L, associatedOnly: !1, checkCreateATAOwner: C });
                        D.addInstruction(X || {}); let { account: H, instructionParams: G } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: g.mintB.programId, mint: new h.nh(g.mintB.address), owner: this.scope.ownerPubKey, createInfo: R || (b ? M : y).isZero() ? { payer: this.scope.ownerPubKey, amount: b ? M : y } : void 0, skipCloseAccount: !R, notUseTokenAccount: R, associatedOnly: !1, checkCreateATAOwner: C });
                        D.addInstruction(G || {}), U || H || this.logAndCreateError("cannot found target token accounts", "tokenAccounts", B.tokenAccounts); let z = await B.getCreatedTokenAccount({ mint: new h.nh(g.lpMint.address) }),
                            j = await B.handleTokenAccount({ side: "out", amount: 0, mint: new h.nh(g.lpMint.address), tokenAccount: z, bypassAssociatedCheck: v, checkCreateATAOwner: C }),
                            { tokenAccount: Q } = j,
                            Z = E(j, ["tokenAccount"]);
                        D.addInstruction(Z); let $ = null != f ? f : await this.getCpmmPoolKeys(g.id),
                            Y = new t4(new k(1)).sub(A); return D.addInstruction({ instructions: [(t = new h.nh(g.programId), n = this.scope.ownerPubKey, i = new h.nh($.authority), o = new h.nh(g.id), r = new h.nh($.vault.A), a = new h.nh($.vault.B), s = new h.nh(g.lpMint.address), u = I ? null == I ? void 0 : I.liquidity : Y.mul(q).quotient, c = b ? K.amount : M, l = b ? M : K.amount, d = iD([iq("lpAmount"), iq("amountMaxA"), iq("amountMaxB")]), m = [{ pubkey: n, isSigner: !0, isWritable: !1 }, { pubkey: i, isSigner: !1, isWritable: !1 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: Q, isSigner: !1, isWritable: !0 }, { pubkey: U, isSigner: !1, isWritable: !0 }, { pubkey: H, isSigner: !1, isWritable: !0 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: V, isSigner: !1, isWritable: !1 }, { pubkey: N, isSigner: !1, isWritable: !1 }, { pubkey: s, isSigner: !1, isWritable: !0 }], p = x.alloc(d.span), aS.debug("cpmm deposit data", { lpAmount: u.toString(), amountMaxA: c.toString(), amountMaxB: l.toString() }), d.encode({ lpAmount: u, amountMaxA: c, amountMaxB: l }, p), new h.Sl({ keys: m, programId: t, data: x.from([...aT.deposit, ...p]) }))], instructionTypes: [nr.CpmmAddLiquidity], lookupTableAddress: $.lookupTableAccount ? [$.lookupTableAccount] : [] }), D.addCustomComputeBudget(S), D.versionBuild({ txVersion: P }) }
                    async withdrawLiquidity(e) { var t, n, i, o, r, a, s, u, c, l, d; let m, p, g; let { poolInfo: f, poolKeys: y, lpAmount: b, slippage: A, computeBudgetConfig: I, txVersion: S } = e;!1 === this.scope.availability.addStandardPosition && this.logAndCreateError("add liquidity feature disabled in your region"); let T = new t4(new k(1)).sub(A),
                            P = await this.getRpcPoolInfo(f.id),
                            [B, v] = [T.mul(b.mul(P.baseReserve).div(P.lpAmount)).quotient, T.mul(b.mul(P.quoteReserve).div(P.lpAmount)).quotient],
                            C = await this.scope.fetchEpochInfo(),
                            [O, q] = [nH(B, f.mintA.extensions.feeConfig, C, !1), nH(v, f.mintB.extensions.feeConfig, C, !1)],
                            { account: K } = this.scope,
                            W = this.createTxBuilder(),
                            [M, L] = [new h.nh(f.mintA.address), new h.nh(f.mintB.address)],
                            R = M.equals(tQ),
                            _ = L.equals(tQ),
                            { account: F, instructionParams: E } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: f.mintA.programId, mint: new h.nh(f.mintA.address), notUseTokenAccount: R, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !R, associatedOnly: !R, checkCreateATAOwner: !1 });
                        E && W.addInstruction(E); let { account: D, instructionParams: V } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: f.mintB.programId, mint: new h.nh(f.mintB.address), notUseTokenAccount: _, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !_, associatedOnly: !_, checkCreateATAOwner: !1 });
                        V && W.addInstruction(V), F && D || this.logAndCreateError("cannot found target token accounts", "tokenAccounts", K.tokenAccounts); let N = await K.getCreatedTokenAccount({ mint: new h.nh(f.lpMint.address) });
                        N || this.logAndCreateError("cannot found lp token account", "tokenAccounts", K.tokenAccounts); let U = null != y ? y : await this.getCpmmPoolKeys(f.id); return W.addInstruction({ instructions: [(i = new h.nh(f.programId), o = this.scope.ownerPubKey, r = new h.nh(U.authority), a = new h.nh(f.id), s = new h.nh(U.vault.A), u = new h.nh(U.vault.B), c = new h.nh(f.lpMint.address), l = B.sub(null != (t = O.fee) ? t : new k(0)), d = v.sub(null != (n = q.fee) ? n : new k(0)), m = iD([iq("lpAmount"), iq("amountMinA"), iq("amountMinB")]), p = [{ pubkey: o, isSigner: !0, isWritable: !1 }, { pubkey: r, isSigner: !1, isWritable: !1 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: N, isSigner: !1, isWritable: !0 }, { pubkey: F, isSigner: !1, isWritable: !0 }, { pubkey: D, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: M, isSigner: !1, isWritable: !1 }, { pubkey: L, isSigner: !1, isWritable: !1 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: tD, isSigner: !1, isWritable: !1 }], g = x.alloc(m.span), m.encode({ lpAmount: b, amountMinA: l, amountMinB: d }, g), new h.Sl({ keys: p, programId: i, data: x.from([...aT.withdraw, ...g]) }))], instructionTypes: [nr.CpmmWithdrawLiquidity], lookupTableAddress: U.lookupTableAccount ? [U.lookupTableAccount] : [] }), W.addCustomComputeBudget(I), W.versionBuild({ txVersion: S }) }
                    async swap(e) { var t, n, i, o, r, a, s, u, c, l, d, m, p, g, f, y, b, A; let I, S; let { poolInfo: T, poolKeys: P, baseIn: B, fixedOut: v, inputAmount: C, swapResult: O, slippage: q = 0, config: K, computeBudgetConfig: W, txVersion: M } = e, { bypassAssociatedCheck: L, checkCreateATAOwner: R, associatedOnly: F } = _({ bypassAssociatedCheck: !1, checkCreateATAOwner: !1, associatedOnly: !0 }, K), E = this.createTxBuilder(), [D, V] = [new h.nh(T.mintA.address), new h.nh(T.mintB.address)];
                        v ? O.sourceAmountSwapped = O.sourceAmountSwapped.mul(new k((1 + q) * 1e4)).div(new k(1e4)) : O.destinationAmountSwapped = O.destinationAmountSwapped.mul(new k((1 - q) * 1e4)).div(new k(1e4)); let N = T.mintA.address === tQ.toBase58(),
                            U = T.mintB.address === tQ.toBase58(),
                            { account: X, instructionParams: H } = await this.scope.account.getOrCreateTokenAccount({ mint: D, tokenProgram: new h.nh(null != (t = T.mintA.programId) ? t : w.H_), owner: this.scope.ownerPubKey, createInfo: N || !B ? { payer: this.scope.ownerPubKey, amount: B ? O.sourceAmountSwapped : 0 } : void 0, notUseTokenAccount: N, skipCloseAccount: !N, associatedOnly: !N && F, checkCreateATAOwner: R });
                        H && E.addInstruction(H); let { account: G, instructionParams: z } = await this.scope.account.getOrCreateTokenAccount({ mint: V, tokenProgram: new h.nh(null != (n = T.mintB.programId) ? n : w.H_), owner: this.scope.ownerPubKey, createInfo: U || B ? { payer: this.scope.ownerPubKey, amount: B ? 0 : O.sourceAmountSwapped } : void 0, notUseTokenAccount: U, skipCloseAccount: !U, associatedOnly: !U && F, checkCreateATAOwner: R });
                        z && E.addInstruction(z), X && G || this.logAndCreateError("user do not have token account", { mintA: T.mintA.symbol || T.mintA.address, mintB: T.mintB.symbol || T.mintB.address, mintATokenAcc: X, mintBTokenAcc: G, mintAUseSOLBalance: N, mintBUseSOLBalance: U, associatedOnly: F }); let j = null != P ? P : await this.getCpmmPoolKeys(T.id); return E.addInstruction({ instructions: [v ? (s = new h.nh(T.programId), u = this.scope.ownerPubKey, c = new h.nh(j.authority), l = new h.nh(j.config.id), d = new h.nh(T.id), m = new h.nh(j.vault[B ? "A" : "B"]), p = new h.nh(j.vault[B ? "B" : "A"]), g = new h.nh(null != (r = T[B ? "mintA" : "mintB"].programId) ? r : w.H_), f = new h.nh(null != (a = T[B ? "mintB" : "mintA"].programId) ? a : w.H_), y = ab(new h.nh(T.programId), new h.nh(T.id)).publicKey, b = O.sourceAmountSwapped, A = O.destinationAmountSwapped, I = iD([iq("amountInMax"), iq("amountOut")]), S = x.alloc(I.span), I.encode({ amountInMax: b, amountOut: A }, S), new h.Sl({ keys: [{ pubkey: u, isSigner: !0, isWritable: !1 }, { pubkey: c, isSigner: !1, isWritable: !1 }, { pubkey: l, isSigner: !1, isWritable: !1 }, { pubkey: d, isSigner: !1, isWritable: !0 }, { pubkey: B ? X : G, isSigner: !1, isWritable: !0 }, { pubkey: B ? G : X, isSigner: !1, isWritable: !0 }, { pubkey: m, isSigner: !1, isWritable: !0 }, { pubkey: p, isSigner: !1, isWritable: !0 }, { pubkey: g, isSigner: !1, isWritable: !1 }, { pubkey: f, isSigner: !1, isWritable: !1 }, { pubkey: B ? D : V, isSigner: !1, isWritable: !1 }, { pubkey: B ? V : D, isSigner: !1, isWritable: !1 }, { pubkey: y, isSigner: !1, isWritable: !0 }], programId: s, data: x.from([...aT.swapBaseOutput, ...S]) })) : aP(new h.nh(T.programId), this.scope.ownerPubKey, new h.nh(j.authority), new h.nh(j.config.id), new h.nh(T.id), B ? X : G, B ? G : X, new h.nh(j.vault[B ? "A" : "B"]), new h.nh(j.vault[B ? "B" : "A"]), new h.nh(null != (i = T[B ? "mintA" : "mintB"].programId) ? i : w.H_), new h.nh(null != (o = T[B ? "mintB" : "mintA"].programId) ? o : w.H_), B ? D : V, B ? V : D, ab(new h.nh(T.programId), new h.nh(T.id)).publicKey, C, O.destinationAmountSwapped)], instructionTypes: [v ? nr.CpmmSwapBaseOut : nr.ClmmSwapBaseIn] }), E.addCustomComputeBudget(W), E.versionBuild({ txVersion: M }) }
                    async lockLp(e) { var t, n, i, o, r; let { poolInfo: a, lpAmount: s, computeBudgetConfig: u, txVersion: c } = e;
                        s.isZero() && this.logAndCreateError("lpAmount must greater than zero", { lpAmount: s.toString() }); let l = this.createTxBuilder(),
                            d = null != (t = e.poolKeys) ? t : await this.getCpmmPoolKeys(a.id),
                            m = await aB({ poolInfo: a, poolKeys: d, ownerInfo: { wallet: this.scope.ownerPubKey, feePayer: null != (n = e.feePayer) ? n : this.scope.ownerPubKey }, lockProgram: null != (i = e.programId) ? i : nV, lockAuthProgram: null != (o = e.authProgram) ? o : nN, lpAmount: s, withMetadata: null == (r = e.withMetadata) || r, getEphemeralSigners: e.getEphemeralSigners }); return l.addInstruction(m), l.addCustomComputeBudget(u), l.versionBuild({ txVersion: c, extInfo: m.address }) }
                    async harvestLockLp(e) { var t; let { poolInfo: n, lpFeeAmount: i, nftMint: o, programId: r = nV, authProgram: a = nN, cpmmProgram: s, computeBudgetConfig: u, txVersion: c } = e;
                        i.isZero() && this.logAndCreateError("lpFeeAmount must greater than zero", { lpAmount: i.toString() }); let l = e.feePayer || this.scope.ownerPubKey,
                            d = this.createTxBuilder(),
                            [m, p] = [new h.nh(n.mintA.address), new h.nh(n.mintB.address)],
                            g = m.equals(tQ),
                            f = p.equals(tQ),
                            { account: y, instructionParams: k } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: n.mintA.programId, mint: new h.nh(n.mintA.address), notUseTokenAccount: g, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !g, associatedOnly: !g, checkCreateATAOwner: !1 });
                        k && d.addInstruction(k); let { account: b, instructionParams: A } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: n.mintB.programId, mint: new h.nh(n.mintB.address), notUseTokenAccount: f, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !f, associatedOnly: !f, checkCreateATAOwner: !1 });
                        A && d.addInstruction(A), y && b || this.logAndCreateError("cannot found target token accounts", { tokenAccountA: y, tokenAccountB: b }); let I = null != (t = e.poolKeys) ? t : await this.getCpmmPoolKeys(n.id),
                            { publicKey: S } = nb(l, o, w.H_),
                            { publicKey: T } = aI(r, o),
                            { publicKey: P } = nb(a, new h.nh(n.lpMint.address), w.H_); return d.addInstruction({ instructions: [function({ programId: e, nftOwner: t, auth: n, nftAccount: i, lockPda: o, poolId: r, mintLp: a, userVaultA: s, userVaultB: u, poolVaultA: c, poolVaultB: l, mintA: d, mintB: m, lockLpVault: p, lpFeeAmount: g, cpmmProgram: f, cpmmAuthProgram: y }) { let k = [{ pubkey: n, isSigner: !1, isWritable: !1 }, { pubkey: t, isSigner: !0, isWritable: !1 }, { pubkey: i, isSigner: !1, isWritable: !0 }, { pubkey: o, isSigner: !1, isWritable: !0 }, { pubkey: null != f ? f : nF, isSigner: !1, isWritable: !1 }, { pubkey: null != y ? y : nE, isSigner: !1, isWritable: !1 }, { pubkey: r, isSigner: !1, isWritable: !0 }, { pubkey: a, isSigner: !1, isWritable: !0 }, { pubkey: s, isSigner: !1, isWritable: !0 }, { pubkey: u, isSigner: !1, isWritable: !0 }, { pubkey: c, isSigner: !1, isWritable: !0 }, { pubkey: l, isSigner: !1, isWritable: !0 }, { pubkey: d, isSigner: !1, isWritable: !1 }, { pubkey: m, isSigner: !1, isWritable: !1 }, { pubkey: p, isSigner: !1, isWritable: !0 }, { pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: w.nA, isSigner: !1, isWritable: !1 }, { pubkey: tD, isSigner: !1, isWritable: !1 }],
                                    b = iD([iq("lpFeeAmount")]),
                                    A = x.alloc(b.span);
                                b.encode({ lpFeeAmount: g }, A); let I = x.from([...aT.collectCpFee, ...A]); return new h.Sl({ keys: k, programId: e, data: I }) }({ programId: null != r ? r : nV, nftOwner: this.scope.ownerPubKey, auth: null != a ? a : nN, nftMint: o, nftAccount: S, lockPda: T, poolId: new h.nh(n.id), mintLp: new h.nh(I.mintLp.address), userVaultA: y, userVaultB: b, poolVaultA: new h.nh(I.vault.A), poolVaultB: new h.nh(I.vault.B), mintA: m, mintB: p, lockLpVault: P, lpFeeAmount: i, cpmmProgram: null == s ? void 0 : s.programId, cpmmAuthProgram: null == s ? void 0 : s.authProgram })], instructionTypes: [nr.CpmmCollectLockFee] }), d.addCustomComputeBudget(u), d.versionBuild({ txVersion: c }) }
                    computeSwapAmount({ pool: e, amountIn: t, outputMint: n, slippage: i }) { let o = n.toString() === e.mintB.address,
                            r = ac.swap(t, o ? e.baseReserve : e.quoteReserve, o ? e.quoteReserve : e.baseReserve, e.configInfo.tradeFeeRate),
                            a = new tk(r.destinationAmountSwapped.toString()).div(r.sourceAmountSwapped.toString()),
                            s = r.destinationAmountSwapped.mul(new k((1 - i) * 1e4)).div(new k(1e4)); return { allTrade: r.sourceAmountSwapped.eq(t), amountIn: t, amountOut: r.destinationAmountSwapped, minAmountOut: s, executionPrice: a, fee: r.tradeFee, priceImpact: e.poolPrice.sub(a).div(e.poolPrice) } }
                    computePairAmount({ poolInfo: e, baseReserve: t, quoteReserve: n, amount: i, slippage: o, epochInfo: r, baseIn: a }) { var s, u, c, l, d, m, p, h, g; let f = 1 - Number(o.toSignificant()) / 100,
                            w = new k(new tk(i).mul(10 ** e[a ? "mintA" : "mintB"].decimals).mul(f).toFixed(0)),
                            y = nH(w, e[a ? "mintA" : "mintB"].extensions.feeConfig, r, !1),
                            b = w.sub(null != (s = y.fee) ? s : new k(0)),
                            A = new k(new tk(e.lpAmount).mul(10 ** e.lpMint.decimals).toFixed(0, tk.ROUND_DOWN));
                        this.logDebug("baseReserve:", t.toString(), "quoteReserve:", n.toString()), this.logDebug("tokenIn:", a ? e.mintA.symbol : e.mintB.symbol, "amountIn:", w.toString(), "amountInFee:", null != (c = null == (u = y.fee) ? void 0 : u.toString()) ? c : 0, "anotherToken:", a ? e.mintB.symbol : e.mintA.symbol, "slippage:", `${o.toSignificant()}%`); let I = a ? "base" : "quote";
                        this.logDebug("input side:", I); let S = b.mul(A).div("base" === I ? t : n),
                            T = { amount: t7, fee: void 0, expirationTime: void 0 }; if (!b.isZero()) { let i, o; let s = ((i = S.mul(t).div(A)).isZero() || S.mul(t).mod(A).isZero() || (i = i.add(new k(1))), (o = S.mul(n).div(A)).isZero() || S.mul(n).mod(A).isZero() || (o = o.add(new k(1))), { amountA: i, amountB: o });
                            this.logDebug("lpAmountData:", { amountA: s.amountA.toString(), amountB: s.amountB.toString() }), T = nH(s[a ? "amountB" : "amountA"], e[a ? "mintB" : "mintA"].extensions.feeConfig, r, !0) } let P = new t4(new k(1)).add(o),
                            B = new t4(new k(1)).sub(o),
                            v = nH(P.mul(T.amount.sub(null != (l = T.fee) ? l : new k(0))).quotient, e[a ? "mintB" : "mintA"].extensions.feeConfig, r, !0),
                            C = nH(B.mul(T.amount.sub(null != (d = T.fee) ? d : new k(0))).quotient, e[a ? "mintB" : "mintA"].extensions.feeConfig, r, !0); return this.logDebug("anotherAmount:", T.amount.toString(), "anotherAmountFee:", null != (p = null == (m = T.fee) ? void 0 : m.toString()) ? p : 0, "maxAnotherAmount:", v.amount.toString(), "maxAnotherAmountFee:", null != (g = null == (h = v.fee) ? void 0 : h.toString()) ? g : 0), { inputAmountFee: y, anotherAmount: T, maxAnotherAmount: v, minAnotherAmount: C, liquidity: S } } },
                aO = {
                    [nB.toBase58()]: 3 },
                aq = { 3: nB },
                aK = iD([iP(5), iP(8), iL("ownAddress"), iq("vaultSignerNonce"), iL("baseMint"), iL("quoteMint"), iL("baseVault"), iq("baseDepositsTotal"), iq("baseFeesAccrued"), iL("quoteVault"), iq("quoteDepositsTotal"), iq("quoteFeesAccrued"), iq("quoteDustThreshold"), iL("requestQueue"), iL("eventQueue"), iL("bids"), iL("asks"), iq("baseLotSize"), iq("quoteLotSize"), iq("feeRateBps"), iq("referrerRebatesAccrued"), iP(7)]),
                aW = { 3: aK },
                aM = X("Serum"),
                aL = class { static getProgramId(e) { let t = aq[e]; return t || aM.logWithError("invalid version", "version", e), t }
                    static getVersion(e) { let t = e.toBase58(),
                            n = aO[t]; return n || aM.logWithError("invalid program id", "programId", t), n }
                    static getStateLayout(e) { let t = aW[e]; return t || aM.logWithError(!!t, "invalid version", "version", e), t }
                    static getLayouts(e) { return { state: this.getStateLayout(e) } }
                    static getAssociatedAuthority({ programId: e, marketId: t }) { let n = [t.toBuffer()],
                            i = 0,
                            o; for (; i < 100;) { try { let t = n.concat(x.from([i]), x.alloc(7));
                                o = h.nh.createProgramAddressSync(t, e) } catch (e) { if (e instanceof TypeError) throw e;
                                i++; continue } return { publicKey: o, nonce: i } } return aM.logWithError("unable to find a viable program address nonce", "params", { programId: e, marketId: t }), { publicKey: h.nh.default, nonce: i } } },
                aR = new k(0),
                a_ = class extends n9 { constructor(e) { super(e) }
                    async getWSolAccounts() { this.scope.checkOwner(), await this.scope.account.fetchWalletTokenAccounts(); let e = this.scope.account.tokenAccounts.filter(e => e.mint.equals(tQ)); return e.sort((e, t) => e.isAssociated ? 1 : t.isAssociated || e.amount.lt(t.amount) ? -1 : 1), e }
                    async unWrapWSol(e) { let { amount: t, tokenProgram: n, txVersion: i = 1 } = e, o = await this.getWSolAccounts(), r = this.createTxBuilder();
                        r.addCustomComputeBudget(e.computeBudgetConfig); let a = await iz({ connection: this.scope.connection, owner: this.scope.ownerPubKey, payer: this.scope.ownerPubKey, amount: 0 });
                        r.addInstruction(a); let s = tA(t); for (let e = 0; e < o.length; e++) s.gte(o[e].amount) ? (r.addInstruction({ instructions: [iG({ tokenAccount: o[e].publicKey, payer: this.scope.ownerPubKey, owner: this.scope.ownerPubKey, programId: n })] }), s.sub(o[e].amount)) : r.addInstruction({ instructions: [iG({ tokenAccount: o[e].publicKey, payer: this.scope.ownerPubKey, owner: this.scope.ownerPubKey, programId: n })] }); return r.versionBuild({ txVersion: i }) }
                    async wrapWSol(e, t, n) { let i = this.createTxBuilder(),
                            o = await iz({ connection: this.scope.connection, owner: this.scope.ownerPubKey, payer: this.scope.ownerPubKey, amount: e, skipCloseAccount: !0 }); return i.addInstruction(o), i.versionBuild({ txVersion: null != n ? n : 1 }) }
                    async swap({ swapInfo: e, swapPoolKeys: t, ownerInfo: n, computeBudgetConfig: i, routeProgram: o, txVersion: r }) { let a, s, u = this.createTxBuilder(),
                            c = e.amountIn,
                            l = e.amountOut,
                            d = c.amount.token.mint.equals(tQ),
                            m = l.amount.token.mint.equals(tQ),
                            p = c.amount.token.mint,
                            g = l.amount.token.mint,
                            { account: f, instructionParams: y } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: c.amount.token.isToken2022 ? w.nA : w.H_, mint: p, notUseTokenAccount: d, owner: this.scope.ownerPubKey, skipCloseAccount: !d, createInfo: d ? { payer: this.scope.ownerPubKey, amount: c.amount.raw } : void 0, associatedOnly: !d && n.associatedOnly, checkCreateATAOwner: n.checkCreateATAOwner }); if (y && u.addInstruction(y), void 0 === f) throw Error("input account check error"); if ("route" === e.routeType) a = this.scope.account.getAssociatedTokenAccount(g, l.amount.token.isToken2022 ? w.nA : w.H_);
                        else { let { account: e, instructionParams: t } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: l.amount.token.isToken2022 ? w.nA : w.H_, mint: g, notUseTokenAccount: m, owner: this.scope.ownerPubKey, skipCloseAccount: !0, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, associatedOnly: !m && n.associatedOnly, checkCreateATAOwner: n.checkCreateATAOwner });
                            a = e, t && u.addInstruction(t) } if (m && u.addInstruction({ endInstructions: [iG({ owner: this.scope.ownerPubKey, payer: this.scope.ownerPubKey, tokenAccount: a, programId: w.H_ })], endInstructionTypes: [nr.CloseAccount] }), "route" === e.routeType) { let t = e.middleToken;
                            s = this.scope.account.getAssociatedTokenAccount(t.mint, t.isToken2022 ? w.nA : w.H_) } let b = t || await this.computePoolToPoolKeys({ pools: e.poolInfoList }),
                            A = function({ routeProgram: e, ownerInfo: t, inputMint: n, swapInfo: i }) { var o, r, a, s, u, c, l; if ("amm" === i.routeType) { if (6 === i.poolInfo[0].version) { let e = i.poolKey[0],
                                            s = t3(e),
                                            u = n.equals(s.mintA.address) ? oW.add(ov) : oM.sub(ov); return rq.makeSwapBaseInInstructions({ poolInfo: e, poolKeys: e, observationId: i.poolInfo[0].observationId, ownerInfo: { wallet: t.wallet, tokenAccountA: s.mintA.address.equals(n) ? t.sourceToken : t.destinationToken, tokenAccountB: s.mintA.address.equals(n) ? t.destinationToken : t.sourceToken }, inputMint: n, amountIn: i.amountIn.amount.raw, amountOutMin: i.minAmountOut.amount.raw.sub(null != (r = null == (o = i.minAmountOut.fee) ? void 0 : o.raw) ? r : new k(0)), sqrtPriceLimitX64: u, remainingAccounts: null != (a = i.remainingAccounts[0]) ? a : [] }) } if (7 === i.poolInfo[0].version) { let e = i.poolInfo[0],
                                            o = n.toString() === i.poolInfo[0].mintA.address; return { signers: [], instructions: [aP(e.programId, t.wallet, e.authority, e.configId, e.id, t.sourceToken, t.destinationToken, o ? e.vaultA : e.vaultB, o ? e.vaultB : e.vaultA, o ? e.mintProgramA : e.mintProgramB, o ? e.mintProgramB : e.mintProgramA, new h.nh(e[o ? "mintA" : "mintB"].address), new h.nh(e[o ? "mintB" : "mintA"].address), e.observationId, i.amountIn.amount.raw, i.minAmountOut.amount.raw)], lookupTableAddress: [], instructionTypes: [o ? nr.CpmmSwapBaseIn : nr.CpmmSwapBaseOut], address: {} } } { let e = i.poolKey[0]; return { signers: [], instructions: [r4({ poolKeys: e, version: i.poolInfo[0].pooltype.includes("StablePool") ? 5 : 4, userKeys: { tokenAccountIn: t.sourceToken, tokenAccountOut: t.destinationToken, owner: t.wallet }, amountIn: i.amountIn.amount.raw, amountOut: i.minAmountOut.amount.raw.sub(null != (u = null == (s = i.minAmountOut.fee) ? void 0 : s.raw) ? u : new k(0)), fixedSide: "in" })], lookupTableAddress: e.lookupTableAccount ? [e.lookupTableAccount] : [], instructionTypes: [i.poolInfo[0].pooltype.includes("StablePool") ? nr.AmmV5SwapBaseIn : nr.AmmV4SwapBaseIn], address: {} } } } if ("route" === i.routeType) { let o = i.poolInfo[0],
                                        r = i.poolInfo[1],
                                        a = i.poolKey[0],
                                        s = i.poolKey[1]; if (void 0 === t.routeToken) throw Error("owner route token account check error"); return { signers: [], instructions: [function(e, t, n, i, o, r, a, s, u, c, l, d, m, p, g) { var f; let y = [],
                                                b = [tL({ pubkey: w.H_, isWritable: !1 }), tL({ pubkey: w.nA, isWritable: !1 }), tL({ pubkey: w._u, isWritable: !1 }), tL({ pubkey: h.yc.programId, isWritable: !1 }), tL({ pubkey: t, isSigner: !0 })];
                                            b.push(tL({ pubkey: n })), b.push(tL({ pubkey: o })); let A = [u, c],
                                                I = [l, d],
                                                S = [r, a, s]; for (let e = 0; e < A.length; e++) { let t = A[e],
                                                    n = S[e] === t.mintA.address; if (b.push(tL({ pubkey: new h.nh(t.programId), isWritable: !1 })), e === A.length - 1 ? b.push(tL({ pubkey: o })) : b.push(tL({ pubkey: i })), b.push(tL({ pubkey: new h.nh(S[e]) })), b.push(tL({ pubkey: new h.nh(S[e + 1]) })), 6 === t.version) { let i = I[e]; for (let o of(b.push(tL({ pubkey: new h.nh(i.config.id) })), b.push(tL({ pubkey: new h.nh(i.id) })), b.push(tL({ pubkey: new h.nh(n ? i.vault.A : i.vault.B) })), b.push(tL({ pubkey: new h.nh(n ? i.vault.B : i.vault.A) })), b.push(tL({ pubkey: new h.nh(t.observationId) })), b.push(tL({ pubkey: tD })), b.push(tL({ pubkey: o2(new h.nh(t.programId), new h.nh(t.id)).publicKey })), y.push(function(e, t) { if (!e) return t ? oL : oR; if (t) { let t = new k(e).div(new k(25)); return t.gt(oL) ? t : oL } { let t = new k(e).mul(new k(25)); return t.lt(oR) ? t : oR } }(t.sqrtPriceX64.toString(), n)), null != (f = g[e]) ? f : [])) b.push(tL({ pubkey: new h.nh(o) })) } else if (5 === t.version) { let t = I[e];
                                                    b.push(tL({ pubkey: new h.nh(t.id) })), b.push(tL({ pubkey: new h.nh(t.authority), isWritable: !1 })), b.push(tL({ pubkey: new h.nh(t.marketProgramId) })), b.push(tL({ pubkey: new h.nh(t.marketAuthority) })), b.push(tL({ pubkey: nx, isWritable: !1 })), b.push(tL({ pubkey: new h.nh(t.openOrders) })), b.push(tL({ pubkey: new h.nh(t.vault.A) })), b.push(tL({ pubkey: new h.nh(t.vault.B) })), b.push(tL({ pubkey: new h.nh(t.id) })), b.push(tL({ pubkey: new h.nh(t.id) })), b.push(tL({ pubkey: new h.nh(t.id) })), b.push(tL({ pubkey: new h.nh(t.id) })), b.push(tL({ pubkey: new h.nh(t.id) })), b.push(tL({ pubkey: new h.nh(t.id) })), b.push(tL({ pubkey: new h.nh(t.marketId) })), b.push(tL({ pubkey: new h.nh(t.marketBids) })), b.push(tL({ pubkey: new h.nh(t.marketAsks) })), b.push(tL({ pubkey: new h.nh(t.marketEventQueue) })), b.push(tL({ pubkey: new h.nh(t.marketBaseVault) })), b.push(tL({ pubkey: new h.nh(t.marketQuoteVault) })) } else if (4 === t.version) { let n = I[e],
                                                        i = 1 !== t.status;
                                                    b.push(tL({ pubkey: new h.nh(n.id) })), b.push(tL({ pubkey: new h.nh(n.authority), isWritable: !1 })), b.push(tL({ pubkey: new h.nh(i ? n.id : n.marketProgramId) })), b.push(tL({ pubkey: new h.nh(i ? n.id : n.marketAuthority) })), b.push(tL({ pubkey: new h.nh(i ? n.id : n.openOrders) })), b.push(tL({ pubkey: new h.nh(n.vault.A) })), b.push(tL({ pubkey: new h.nh(n.vault.B) })), b.push(tL({ pubkey: new h.nh(i ? n.id : n.marketId) })), b.push(tL({ pubkey: new h.nh(i ? n.id : n.marketBids) })), b.push(tL({ pubkey: new h.nh(i ? n.id : n.marketAsks) })), b.push(tL({ pubkey: new h.nh(i ? n.id : n.marketEventQueue) })), b.push(tL({ pubkey: new h.nh(i ? n.id : n.marketBaseVault) })), b.push(tL({ pubkey: new h.nh(i ? n.id : n.marketQuoteVault) })) } else if (7 === t.version) { let i = I[e];
                                                    b.push(tL({ pubkey: new h.nh(i.authority) })), b.push(tL({ pubkey: new h.nh(i.config.id) })), b.push(tL({ pubkey: new h.nh(i.id) })), b.push(tL({ pubkey: new h.nh(n ? i.vault.A : i.vault.B) })), b.push(tL({ pubkey: new h.nh(n ? i.vault.B : i.vault.A) })), b.push(tL({ pubkey: new h.nh(t.observationId) })) } else throw Error("pool type error") } let T = iD([ix("insId"), iq("amountIn"), iq("amountOut"), iV(iK(), y.length, "clmmPriceLimit")]),
                                                P = x.alloc(T.span); return T.encode({ insId: 0, amountIn: m, amountOut: p, clmmPriceLimit: y }, P), new h.Sl({ keys: b, programId: e, data: P }) }(e, t.wallet, t.sourceToken, t.routeToken, t.destinationToken, n.toString(), i.middleToken.mint.toString(), i.outputMint.toString(), o, r, a, s, i.amountIn.amount.raw, i.minAmountOut.amount.raw.sub(null != (l = null == (c = i.minAmountOut.fee) ? void 0 : c.raw) ? l : new k(0)), i.remainingAccounts)], instructionTypes: [nr.RouteSwap], lookupTableAddress: [a.lookupTableAccount, s.lookupTableAccount].filter(e => void 0 !== e), address: {} } } throw Error("route type error") }({ routeProgram: o, inputMint: p, swapInfo: F(_({}, e), { poolInfo: [...e.poolInfoList], poolKey: b, outputMint: g }), ownerInfo: { wallet: this.scope.ownerPubKey, sourceToken: f, routeToken: s, destinationToken: a } }); if (void 0 !== e.feeConfig) { let t = this.createTxBuilder();
                            t.addInstruction({ instructions: [(0, v.$B)(f, e.feeConfig.feeAccount, this.scope.ownerPubKey, e.feeConfig.feeAmount.toNumber())], instructionTypes: [nr.TransferAmount] }), t.addInstruction(A); let { transactions: n } = 0 === r ? await t.sizeCheckBuildV0() : await t.sizeCheckBuild();
                            n.length < 2 && u.addInstruction({ instructions: [(0, v.$B)(f, e.feeConfig.feeAccount, this.scope.ownerPubKey, e.feeConfig.feeAmount.toNumber())], instructionTypes: [nr.TransferAmount] }) } return u.addInstruction(A), 0 === r ? u.sizeCheckBuildV0({ computeBudgetConfig: i, address: A.address }) : u.sizeCheckBuild({ computeBudgetConfig: i, address: A.address }) }
                    async fetchRoutePoolBasicInfo(e) { let { amm: t = nv, clmm: n = nO, cpmm: i = nF } = e || {}, o = await this.scope.connection.getProgramAccounts(t, { dataSlice: { offset: rN.offsetOf("baseMint"), length: 64 } }), r = iD([iL("baseMint"), iL("quoteMint")]), a = o.map(e => ({ id: e.pubkey, version: 4, mintA: r.decode(e.account.data).baseMint, mintB: r.decode(e.account.data).quoteMint })), s = iD([iL("mintA"), iL("mintB")]); return { clmmPools: (await this.scope.connection.getProgramAccounts(n, { filters: [{ dataSize: rk.span }], dataSlice: { offset: rk.offsetOf("mintA"), length: 64 } })).map(e => { let t = s.decode(e.account.data); return { id: e.pubkey, version: 6, mintA: t.mintA, mintB: t.mintB } }), ammPools: a, cpmmPools: (await this.scope.connection.getProgramAccounts(i, { dataSlice: { offset: aC.offsetOf("mintA"), length: 64 } })).map(e => { let t = s.decode(e.account.data); return { id: e.pubkey, version: 7, mintA: t.mintA, mintB: t.mintB } }) } }
                    getAllRoute({ inputMint: e, outputMint: t, clmmPools: n, ammPools: i, cpmmPools: o }) { e = e.toString() === h.nh.default.toString() ? tQ : e, t = t.toString() === h.nh.default.toString() ? tQ : t; let r = {},
                            a = {},
                            s = {},
                            u = [],
                            c = {}; for (let i of null != n ? n : []) { if ((i.mintA.equals(e) && i.mintB.equals(t) || i.mintA.equals(t) && i.mintB.equals(e)) && (u.push(i), a[i.id.toString()] = i), i.mintA.equals(e)) { let e = i.mintB.toString();
                                void 0 === c[e] && (c[e] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[e].in.push(i) } if (i.mintB.equals(e)) { let e = i.mintA.toString();
                                void 0 === c[e] && (c[e] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[e].in.push(i) } if (i.mintA.equals(t)) { let e = i.mintB.toString();
                                void 0 === c[e] && (c[e] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[e].out.push(i) } if (i.mintB.equals(t)) { let e = i.mintA.toString();
                                void 0 === c[e] && (c[e] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[e].out.push(i) } } let l = []; for (let n of i)(n.mintA.equals(e) && n.mintB.equals(t) || n.mintA.equals(t) && n.mintB.equals(e)) && (u.push(n), r[n.id.toBase58()] = n, l.push(n)), n.mintA.equals(e) && (void 0 === c[n.mintB.toBase58()] && (c[n.mintB.toBase58()] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[n.mintB.toBase58()].in.push(n)), n.mintB.equals(e) && (void 0 === c[n.mintA.toBase58()] && (c[n.mintA.toBase58()] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[n.mintA.toBase58()].in.push(n)), n.mintA.equals(t) && (void 0 === c[n.mintB.toBase58()] && (c[n.mintB.toBase58()] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[n.mintB.toBase58()].out.push(n)), n.mintB.equals(t) && (void 0 === c[n.mintA.toBase58()] && (c[n.mintA.toBase58()] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[n.mintA.toBase58()].out.push(n)); for (let n of o)(n.mintA.equals(e) && n.mintB.equals(t) || n.mintA.equals(t) && n.mintB.equals(e)) && (u.push(n), s[n.id.toBase58()] = n), n.mintA.equals(e) && (void 0 === c[n.mintB.toBase58()] && (c[n.mintB.toBase58()] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[n.mintB.toBase58()].in.push(n)), n.mintB.equals(e) && (void 0 === c[n.mintA.toBase58()] && (c[n.mintA.toBase58()] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[n.mintA.toBase58()].in.push(n)), n.mintA.equals(t) && (void 0 === c[n.mintB.toBase58()] && (c[n.mintB.toBase58()] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[n.mintB.toBase58()].out.push(n)), n.mintB.equals(t) && (void 0 === c[n.mintA.toBase58()] && (c[n.mintA.toBase58()] = { mintProgram: w.H_, in: [], out: [], mDecimals: 0 }), c[n.mintA.toBase58()].out.push(n)); for (let e of Object.keys(c)) { if (1 === c[e].in.length && 1 === c[e].out.length && c[e].in[0].id.equals(c[e].out[0].id) || 0 === c[e].in.length || 0 === c[e].out.length) { delete c[e]; continue } let t = c[e]; for (let e of t.in)
                                for (let n of t.out) 6 === e.version && void 0 === a[e.id.toString()] ? a[e.id.toString()] = e : 7 === e.version && void 0 === s[e.id.toString()] ? s[e.id.toString()] = e : (4 === e.version || 5 === e.version) && void 0 === r[e.id.toString()] && (r[e.id.toString()] = e), 6 === n.version && void 0 === a[n.id.toString()] ? a[n.id.toString()] = n : 7 === n.version && void 0 === s[n.id.toString()] ? s[n.id.toString()] = n : (4 === n.version || 5 === n.version) && void 0 === r[n.id.toString()] && (r[n.id.toString()] = n) } return { directPath: u, addLiquidityPools: l, routePathDict: c, needSimulate: Object.values(r), needTickArray: Object.values(a), cpmmPoolList: Object.values(s) } }
                    async fetchSwapRoutesData({ routes: e, inputMint: t, outputMint: n }) { let i = new Set([...e.needTickArray.map(e => [e.mintA.toBase58(), e.mintB.toBase58()]).flat(), t.toString(), n.toString()]);
                        console.log("fetching amm pools info, total: ", e.needSimulate.length); let o = await this.scope.liquidity.getRpcPoolInfos(e.needSimulate.map(e => e.id)),
                            r = ae(o),
                            a = {};
                        Object.values(r).forEach(e => { i.delete(e.mintA.address), a[e.mintA.address] = { address: new h.nh(e.mintA.address), programId: w.H_, mintAuthority: null, supply: BigInt(0), decimals: e.mintA.decimals, isInitialized: !0, freezeAuthority: null, tlvData: x.from("0", "hex"), feeConfig: void 0 }, i.delete(e.mintB.address), a[e.mintB.address] = { address: new h.nh(e.mintB.address), programId: w.H_, mintAuthority: null, supply: BigInt(0), decimals: e.mintB.decimals, isInitialized: !0, freezeAuthority: null, tlvData: x.from("0", "hex"), feeConfig: void 0 } }), console.log("fetching cpmm pools info, total: ", e.cpmmPoolList.length); let s = await this.scope.cpmm.getRpcPoolInfos(e.cpmmPoolList.map(e => e.id.toBase58()), !0);
                        Object.values(s).forEach(e => { let [t, n] = [e.mintA.toBase58(), e.mintB.toBase58()];
                            e.mintProgramA.equals(w.H_) ? (i.delete(t), a[t] = { address: e.mintA, programId: e.mintProgramA, mintAuthority: null, supply: BigInt(0), decimals: e.mintDecimalA, isInitialized: !0, freezeAuthority: null, tlvData: x.from("0", "hex"), feeConfig: void 0 }) : i.add(t), e.mintProgramB.equals(w.H_) ? (i.delete(n), a[n] = { address: e.mintB, programId: e.mintProgramB, mintAuthority: null, supply: BigInt(0), decimals: e.mintDecimalB, isInitialized: !0, freezeAuthority: null, tlvData: x.from("0", "hex"), feeConfig: void 0 }) : i.add(n) }), console.log("fetching mints info, total: ", i.size); let u = await Q({ connection: this.scope.connection, mints: Array.from(i).map(e => new h.nh(e)) });
                        a = _(_({}, a), u); let c = this.scope.cpmm.toComputePoolInfos({ pools: s, mintInfos: a });
                        console.log("fetching clmm pools info, total:", e.needTickArray.length); let l = await this.scope.clmm.getRpcClmmPoolInfos({ poolIds: e.needTickArray.map(e => e.id) }),
                            { computeClmmPoolInfo: d, computePoolTickData: m } = await this.scope.clmm.getComputeClmmPoolInfos({ clmmPoolsRpcInfo: l, mintInfos: a }),
                            p = Object.keys(e.routePathDict).reduce((t, n) => F(_({}, t), {
                                [n]: F(_({}, e.routePathDict[n]), { mintProgram: a[n].programId, mDecimals: a[n].decimals, in: e.routePathDict[n].in.map(e => r[e.id.toBase58()] || d[e.id.toBase58()] || c[e.id.toBase58()]), out: e.routePathDict[n].out.map(e => r[e.id.toBase58()] || d[e.id.toBase58()] || c[e.id.toBase58()]) }) }), {}); return { mintInfos: a, ammPoolsRpcInfo: o, ammSimulateCache: r, clmmPoolsRpcInfo: l, computeClmmPoolInfo: d, computePoolTickData: m, computeCpmmData: c, routePathDict: p } }
                    getAllRouteComputeAmountOut({ inputTokenAmount: e, outputToken: t, directPath: n, routePathDict: i, simulateCache: o, tickCache: r, slippage: a, chainTime: s, epochInfo: u, feeConfig: c }) { var l, d, m, p, h, g, f, w, y; let b = void 0 === c ? new k(0) : e.raw.mul(new k(c.feeBps.toNumber())).div(new k(1e4)),
                            A = e.raw.sub(b),
                            I = new tq(e.token, A),
                            S = void 0 === c ? void 0 : { feeAmount: b, feeAccount: c.feeAccount },
                            T = F(_({}, t), { address: t$(t.address).toString() }),
                            P = []; for (let e of n) try { P.push(F(_({}, this.computeAmountOut({ itemPool: e, tickCache: r, simulateCache: o, chainTime: s, epochInfo: u, slippage: a, outputToken: T, amountIn: I })), { feeConfig: S })) } catch (t) { this.logDebug("direct error", e.version, e.id.toString(), t.message) }
                        for (let [e, t] of(this.logDebug("direct done"), Object.entries(i))) { let n = { chainId: 101, address: e, programId: t.mintProgram.toBase58(), logoURI: "", symbol: "", name: "", decimals: t.mDecimals, tags: [], extensions: {} },
                                i = t.in.map(e => { try { return { pool: e, data: this.computeAmountOut({ itemPool: e, tickCache: r, simulateCache: o, chainTime: s, epochInfo: u, slippage: a, outputToken: n, amountIn: I }) } } catch (t) { this.logDebug("route in error", e.version, e.id.toString(), t.message); return } }).sort((e, t) => { var n, i, o, r; let a = void 0 === e ? aR : e.data.amountOut.amount.raw.sub(null != (i = null == (n = e.data.amountOut.fee) ? void 0 : n.raw) ? i : aR),
                                        s = void 0 === t ? aR : t.data.amountOut.amount.raw.sub(null != (r = null == (o = t.data.amountOut.fee) ? void 0 : o.raw) ? r : aR); return a.lt(s) ? 1 : -1 })[0]; if (void 0 === i) continue; let c = new tq(rK(n), i.data.amountOut.amount.raw.sub(null != (d = null == (l = i.data.amountOut.fee) ? void 0 : l.raw) ? d : aR)); for (let e of t.out) try { let t = this.computeAmountOut({ itemPool: e, tickCache: r, simulateCache: o, chainTime: s, epochInfo: u, slippage: a, outputToken: T, amountIn: c });
                                P.push(F(_({}, t), { allTrade: !!(i.data.allTrade && t.allTrade), amountIn: i.data.amountIn, amountOut: t.amountOut, minAmountOut: t.minAmountOut, currentPrice: void 0, executionPrice: new tk(new t2({ baseToken: i.data.amountIn.amount.token, denominator: i.data.amountIn.amount.raw, quoteToken: t.amountOut.amount.token, numerator: t.amountOut.amount.raw.sub(null != (p = null == (m = t.amountOut.fee) ? void 0 : m.raw) ? p : aR) }).toFixed()), priceImpact: new tk(i.data.priceImpact.add(t.priceImpact).toFixed()), fee: [i.data.fee[0], t.fee[0]], routeType: "route", poolInfoList: [i.pool, e], remainingAccounts: [i.data.remainingAccounts[0], t.remainingAccounts[0]], minMiddleAmountFee: null != (h = t.amountOut.fee) && h.raw ? new tq(i.data.amountOut.amount.token, (null != (f = null == (g = i.data.amountOut.fee) ? void 0 : g.raw) ? f : aR).add(null != (y = null == (w = t.amountOut.fee) ? void 0 : w.raw) ? y : aR)) : void 0, middleToken: i.data.amountOut.amount.token, poolReady: i.data.poolReady && t.poolReady, poolType: [i.data.poolType, t.poolType], feeConfig: S, expirationTime: nG(i.data.expirationTime, t.expirationTime) })) } catch (t) { this.logDebug("route out error", e.version, e.id.toString(), t.message) } } return P.filter(e => (e.allTrade || this.logDebug(`pool ${e.poolInfoList.map(e=>e.id.toString()).join(",")} filter out since not all trade`), e.allTrade)).sort((e, t) => e.amountOut.amount.raw.sub(t.amountOut.amount.raw).gt(aR) ? -1 : 1) }
                    computeAmountOut({ itemPool: e, tickCache: t, simulateCache: n, chainTime: i, epochInfo: o, slippage: r, outputToken: a, amountIn: s }) { if (6 === e.version) { let { allTrade: n, realAmountIn: u, amountOut: c, minAmountOut: l, expirationTime: d, currentPrice: m, executionPrice: p, priceImpact: h, fee: g, remainingAccounts: f, executionPriceX64: w } = rn.computeAmountOutFormat({ poolInfo: e, tickArrayCache: t[e.id.toString()], amountIn: s.raw, tokenOut: a, slippage: r, epochInfo: o, catchLiquidityInsufficient: !0 }); return { allTrade: n, amountIn: u, amountOut: c, minAmountOut: l, currentPrice: new tk(m.toFixed()), executionPrice: new tk(p.toFixed()), priceImpact: new tk(h.toFixed()), fee: [g], remainingAccounts: [f], routeType: "amm", poolInfoList: [e], poolReady: e.startTime < i, poolType: "CLMM", slippage: r, clmmExPriceX64: [w], expirationTime: nG(u.expirationTime, d) } } if (7 === e.version) { let { allTrade: t, executionPrice: n, amountOut: o, minAmountOut: u, priceImpact: c, fee: l } = this.scope.cpmm.computeSwapAmount({ pool: e, outputMint: a.address, amountIn: s.raw, slippage: r }); return { allTrade: t, amountIn: { amount: s, fee: void 0, expirationTime: void 0 }, amountOut: { amount: rW(F(_({}, a), { amount: o })), fee: void 0, expirationTime: void 0 }, minAmountOut: { amount: rW(F(_({}, a), { amount: u })), fee: void 0, expirationTime: void 0 }, currentPrice: e.poolPrice, executionPrice: n, priceImpact: c, fee: [new tq(s.token, l)], remainingAccounts: [], routeType: "amm", poolInfoList: [e], poolReady: e.openTime.toNumber() < i, poolType: "CPMM", slippage: r, clmmExPriceX64: [void 0], expirationTime: void 0 } } { if (![1, 6, 7].includes(n[e.id.toString()].status)) throw Error("swap error"); let { amountOut: t, minAmountOut: o, currentPrice: u, executionPrice: c, priceImpact: l, fee: d } = this.scope.liquidity.computeAmountOut({ poolInfo: n[e.id.toString()], amountIn: s.raw, mintIn: s.token.mint, mintOut: a.address, slippage: r }); return { amountIn: { amount: s, fee: void 0, expirationTime: void 0 }, amountOut: { amount: rW(F(_({}, a), { amount: t })), fee: void 0, expirationTime: void 0 }, minAmountOut: { amount: rW(F(_({}, a), { amount: o })), fee: void 0, expirationTime: void 0 }, currentPrice: u, executionPrice: c, priceImpact: l, fee: [new tq(s.token, d)], routeType: "amm", poolInfoList: [e], remainingAccounts: [], poolReady: Number(n[e.id].openTime) < i, poolType: 5 === e.version ? "STABLE" : void 0, expirationTime: void 0, allTrade: !0, slippage: r, clmmExPriceX64: [void 0] } } }
                    async computePoolToPoolKeys({ pools: e, clmmRpcData: t = {}, ammRpcData: n = {} }) { let i = new Set(e.filter(e => 6 === e.version && !t[e.id.toString()]).map(e => e.id.toString())); if (i.size > 0) { let e = await this.scope.clmm.getRpcClmmPoolInfos({ poolIds: Array.from(i) });
                            Object.keys(e).forEach(n => { t[n] = e[n] }) } if (new Set(e.filter(e => 4 === e.version && !n[e.id.toString()]).map(e => e.id.toString())).size > 0) { let e = await this.scope.liquidity.getRpcPoolInfos(Array.from(i));
                            Object.keys(e).forEach(t => { n[t] = e[t] }) } let o = new Set(e.filter(e => 4 === e.version).map(e => e.marketId)),
                            r = {};
                        o.size > 0 && (await z(this.scope.connection, Array.from(o).map(e => ({ pubkey: new h.nh(e) })))).forEach(e => { if (!e.accountInfo) return; let t = aK.decode(e.accountInfo.data);
                            r[e.pubkey.toBase58()] = { marketId: e.pubkey.toString(), marketProgramId: e.accountInfo.owner.toString(), marketAuthority: aL.getAssociatedAuthority({ programId: e.accountInfo.owner, marketId: e.pubkey }).publicKey.toString(), marketBaseVault: t.baseVault.toString(), marketQuoteVault: t.quoteVault.toString(), marketBids: t.bids.toString(), marketAsks: t.asks.toString(), marketEventQueue: t.eventQueue.toString() } }); let a = []; return e.forEach(e => { if (6 === e.version) { let n = t[e.id.toString()],
                                    i = { programId: e.programId.toBase58(), id: e.id.toBase58(), mintA: e.mintA, mintB: e.mintB, openTime: String(e.startTime), vault: { A: n.vaultA.toBase58(), B: n.vaultB.toBase58() }, config: F(_({}, e.ammConfig), { id: e.ammConfig.id.toString(), defaultRange: 0, defaultRangePoint: [] }), rewardInfos: [] };
                                a.push(i) } else if (4 === e.version) { let t = n[e.id.toString()],
                                    i = _({ programId: e.programId, id: e.id, mintA: e.mintA, mintB: e.mintB, openTime: String(e.openTime), vault: { A: t.baseVault.toBase58(), B: t.quoteVault.toBase58() }, authority: r8({ programId: new h.nh(e.programId) }).publicKey.toString(), openOrders: t.openOrders.toBase58(), targetOrders: t.targetOrders.toBase58(), mintLp: e.lpMint }, r[e.marketId]);
                                a.push(i) } else 7 === e.version && a.push({ programId: e.programId.toBase58(), id: e.id.toBase58(), mintA: e.mintA, mintB: e.mintB, openTime: String(e.openTime), authority: af(e.programId).publicKey.toBase58(), vault: { A: e.vaultA.toBase58(), B: e.vaultB.toBase58() }, mintLp: rR({ address: e.mintLp.toBase58(), programId: w.H_.toBase58(), decimals: e.lpDecimals }), config: F(_({ id: e.configId.toBase58() }, e.configInfo), { protocolFeeRate: e.configInfo.protocolFeeRate.toNumber(), tradeFeeRate: e.configInfo.tradeFeeRate.toNumber(), fundFeeRate: e.configInfo.fundFeeRate.toNumber(), createPoolFee: e.configInfo.createPoolFee.toString() }) }) }), a } },
                aF = class extends n9 { static getPdaPoolId(e, t) { return np([aF.SEED_CONFIG.pool.id, t.toBuffer()], e) }
                    static getPdaOwnerId(e, t, n, i) { return np([aF.SEED_CONFIG.owner.id, t.toBuffer(), n.toBuffer(), x.from(new k(i).toArray())], e) }
                    static async getAllInfo({ connection: e, programId: t, poolIds: n, wallet: i, chainTime: o }) { if (0 === n.length) return []; let r = n.map(e => aF.getPdaPoolId(t, e).publicKey),
                            a = []; for (let e = 0; e < aF.VERSION_PROJECT.length; e++) a.push(...r.map(n => aF.getPdaOwnerId(t, n, i, e).publicKey)); let s = await G(e, [...r, ...a]),
                            u = []; for (let e = 0; e < s.length; e++) { let i = Math.floor(e / n.length),
                                c = e % n.length,
                                l = r[c],
                                d = a[e],
                                m = s[c],
                                p = s[n.length + e]; if (!(m && p) || m.data.length !== aF.POOL_LAYOUT.span || p.data.length !== aF.OWNER_LAYOUT.span) continue; let h = aF.POOL_LAYOUT.decode(m.data),
                                g = aF.OWNER_LAYOUT.decode(p.data),
                                f = h.openTime.toNumber(),
                                w = h.endTime.toNumber(),
                                y = 3 !== g.tokenInfo.map(e => e.debtAmount.gt(new k(0))).filter(e => !e).length,
                                b = o > f && o < w && 1 === h.status,
                                A = y && b;
                            u.push({ programId: t, poolId: l, ammId: h.ammId, ownerAccountId: d, snapshotLpAmount: g.lpAmount, project: aF.VERSION_PROJECT[i], openTime: f, endTime: w, canClaim: A, canClaimErrorType: y ? b ? void 0 : "outOfOperationalTime" : "alreadyClaimIt", tokenInfo: h.tokenInfo.map((e, t) => ({ mintAddress: e.mintAddress, mintVault: e.mintVault, mintDecimals: e.mintDecimals, perLpLoss: e.perLpLoss, debtAmount: g.tokenInfo[t].debtAmount.add(g.tokenInfo[t].claimedAmount) })) }) } return u }
                    async makeClaimTransaction({ poolInfo: e, ownerInfo: t }) { t.wallet || this.scope.checkOwner(); let n = this.createTxBuilder(),
                            i = t.wallet || this.scope.ownerPubKey,
                            o = []; for (let r of e.tokenInfo) { let { account: e, instructionParams: a } = await this.scope.account.getOrCreateTokenAccount({ mint: r.mintAddress, owner: this.scope.ownerPubKey, notUseTokenAccount: r.mintAddress.equals(tJ.WSOL.mint), createInfo: { payer: i, amount: 0 }, skipCloseAccount: !r.mintAddress.equals(tJ.WSOL.mint), associatedOnly: !r.mintAddress.equals(tJ.WSOL.mint) && t.associatedOnly });
                            a && n.addInstruction(a), o.push(e) }
                        n.addInstruction({ instructions: [aF.makeClaimInstruction({ programId: e.programId, poolInfo: e, ownerInfo: { wallet: i, ownerPda: e.ownerAccountId, claimAddress: o } })] }); let { transaction: r, signers: a } = n.build(); return [{ transaction: r, signer: a }] }
                    async makeClaimAllTransaction({ poolInfos: e, ownerInfo: t }) { let n = this.createTxBuilder(),
                            i = t.wallet || this.scope.ownerPubKey,
                            o = {}; for (let r of e) { let e = []; for (let a of r.tokenInfo) { let { account: r, instructionParams: s } = await this.scope.account.getOrCreateTokenAccount({ mint: a.mintAddress, owner: this.scope.ownerPubKey, notUseTokenAccount: a.mintAddress.equals(tJ.WSOL.mint), createInfo: { payer: i, amount: 0 }, skipCloseAccount: !a.mintAddress.equals(tJ.WSOL.mint), associatedOnly: !a.mintAddress.equals(tJ.WSOL.mint) && t.associatedOnly });
                                s && n.addInstruction(s), r && (o[a.mintAddress.toString()] = r, e.push(r)) }
                            n.addInstruction({ instructions: [aF.makeClaimInstruction({ programId: r.programId, poolInfo: r, ownerInfo: { wallet: i, ownerPda: r.ownerAccountId, claimAddress: e } })] }) } let { transaction: r, signers: a } = n.build(), s = n.allInstructions; return nl(s, [i, ...a.map(e => e.publicKey)]) ? [{ transaction: r, signer: a }] : [{ transaction: new h.YW().add(...s.slice(0, n.AllTxData.instructions.length - 1)), signer: a }, { transaction: new h.YW().add(...s.slice(n.AllTxData.instructions.length - 1)), signer: [] }, { transaction: new h.YW().add(...n.AllTxData.endInstructions), signer: [] }] }
                    static makeClaimInstruction({ programId: e, poolInfo: t, ownerInfo: n }) { let i = iD([]),
                            o = [{ pubkey: n.wallet, isSigner: !0, isWritable: !0 }, { pubkey: t.poolId, isSigner: !1, isWritable: !0 }, { pubkey: n.ownerPda, isSigner: !1, isWritable: !0 }, ...n.claimAddress.map(e => ({ pubkey: e, isSigner: !1, isWritable: !0 })), ...t.tokenInfo.map(({ mintVault: e }) => ({ pubkey: e, isSigner: !1, isWritable: !0 })), { pubkey: w.H_, isSigner: !1, isWritable: !1 }],
                            r = x.alloc(i.span);
                        i.encode({}, r); let a = x.from([10, 66, 208, 184, 161, 6, 191, 98, ...r]); return new h.Sl({ keys: o, programId: e, data: a }) } },
                aE = aF;
            aE.CLAIMED_NUM = 3, aE.POOL_LAYOUT = iD([iP(8), ix("bump"), ix("status"), iq("openTime"), iq("endTime"), iL("ammId"), iV(iD([ix("mintDecimals"), iL("mintAddress"), iL("mintVault"), iq("perLpLoss"), iq("totalClaimedAmount")]), aF.CLAIMED_NUM, "tokenInfo"), iV(iq(), 10, "padding")]), aE.OWNER_LAYOUT = iD([iP(8), ix("bump"), ix("version"), iL("poolId"), iL("owner"), iq("lpAmount"), iV(iD([iL("mintAddress"), iq("debtAmount"), iq("claimedAmount")]), aF.CLAIMED_NUM, "tokenInfo"), iV(iq(), 4, "padding")]), aE.DEFAULT_POOL_ID = ["58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", "6UmmUiYoBjSrhakAobJw8BvkmJtDVxaeBtbt7rxWo1mg", "AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA", "DVa7Qmb5ct9RCpaU7UTpSaf3GVMYz17vNVU67XpdCRut", "7XawhbbxtsRcQA8KTkHT9f9nc6d69UwqCDh6U5EEbEmX", "6a1CsrpeZubDjEJE9s1CMVheB6HWM5d7m1cj2jkhyXhj", "EoNrn8iUhwgJySD1pHu8Qxm5gSQqLK3za4m8xzD2RuEb", "AceAyRTWt4PyB2pHqf2qhDgNZDtKVNaxgL8Ru3V4aN1P", "6tmFJbMk5yVHFcFy7X2K8RwHjKLr6KVFLYXpgpBNeAxB"].map(e => new h.nh(e)), aE.SEED_CONFIG = { pool: { id: x.from("pool_seed", "utf8") }, owner: { id: x.from("user_claim_seed", "utf8") } }, aE.VERSION_PROJECT = [void 0, "Francium", "Tulip", "Larix"]; var aD = iD([iP(5), function(e = "accountFlags") { let t = new iC(e); return t.addBoolean("initialized"), t.addBoolean("market"), t.addBoolean("openOrders"), t.addBoolean("requestQueue"), t.addBoolean("eventQueue"), t.addBoolean("bids"), t.addBoolean("asks"), t }("accountFlags"), iL("ownAddress"), iq("vaultSignerNonce"), iL("baseMint"), iL("quoteMint"), iL("baseVault"), iq("baseDepositsTotal"), iq("baseFeesAccrued"), iL("quoteVault"), iq("quoteDepositsTotal"), iq("quoteFeesAccrued"), iq("quoteDustThreshold"), iL("requestQueue"), iL("eventQueue"), iL("bids"), iL("asks"), iq("baseLotSize"), iq("quoteLotSize"), iq("feeRateBps"), iq("referrerRebatesAccrued"), iP(7)]);
            async function aV({ connection: e, wallet: t, marketInfo: n }) { var i, o, r, a, s, u, c, l; let d = new h.YW,
                    m = await e.getMinimumBalanceForRentExemption(165);
                d.add(h.yc.createAccountWithSeed({ fromPubkey: t, basePubkey: t, seed: n.baseVault.seed, newAccountPubkey: n.baseVault.publicKey, lamports: m, space: 165, programId: w.H_ }), h.yc.createAccountWithSeed({ fromPubkey: t, basePubkey: t, seed: n.quoteVault.seed, newAccountPubkey: n.quoteVault.publicKey, lamports: m, space: 165, programId: w.H_ }), (0, P.FJ)(n.baseVault.publicKey, n.baseMint, n.vaultOwner), (0, P.FJ)(n.quoteVault.publicKey, n.quoteMint, n.vaultOwner)); let p = new h.YW; return p.add(h.yc.createAccountWithSeed({ fromPubkey: t, basePubkey: t, seed: n.id.seed, newAccountPubkey: n.id.publicKey, lamports: await e.getMinimumBalanceForRentExemption(aD.span), space: aD.span, programId: n.programId }), h.yc.createAccountWithSeed({ fromPubkey: t, basePubkey: t, seed: n.requestQueue.seed, newAccountPubkey: n.requestQueue.publicKey, lamports: await e.getMinimumBalanceForRentExemption(null != (i = n.requestQueueSpace) ? i : 5132), space: null != (o = n.requestQueueSpace) ? o : 5132, programId: n.programId }), h.yc.createAccountWithSeed({ fromPubkey: t, basePubkey: t, seed: n.eventQueue.seed, newAccountPubkey: n.eventQueue.publicKey, lamports: await e.getMinimumBalanceForRentExemption(null != (r = n.eventQueueSpace) ? r : 262156), space: null != (a = n.eventQueueSpace) ? a : 262156, programId: n.programId }), h.yc.createAccountWithSeed({ fromPubkey: t, basePubkey: t, seed: n.bids.seed, newAccountPubkey: n.bids.publicKey, lamports: await e.getMinimumBalanceForRentExemption(null != (s = n.orderbookQueueSpace) ? s : 65548), space: null != (u = n.orderbookQueueSpace) ? u : 65548, programId: n.programId }), h.yc.createAccountWithSeed({ fromPubkey: t, basePubkey: t, seed: n.asks.seed, newAccountPubkey: n.asks.publicKey, lamports: await e.getMinimumBalanceForRentExemption(null != (c = n.orderbookQueueSpace) ? c : 65548), space: null != (l = n.orderbookQueueSpace) ? l : 65548, programId: n.programId }), function({ programId: e, marketInfo: t }) { let n = iD([ix("version"), iO("instruction"), iq("baseLotSize"), iq("quoteLotSize"), ib("feeRateBps"), iq("vaultSignerNonce"), iq("quoteDustThreshold")]),
                        i = [{ pubkey: t.id, isSigner: !1, isWritable: !0 }, { pubkey: t.requestQueue, isSigner: !1, isWritable: !0 }, { pubkey: t.eventQueue, isSigner: !1, isWritable: !0 }, { pubkey: t.bids, isSigner: !1, isWritable: !0 }, { pubkey: t.asks, isSigner: !1, isWritable: !0 }, { pubkey: t.baseVault, isSigner: !1, isWritable: !0 }, { pubkey: t.quoteVault, isSigner: !1, isWritable: !0 }, { pubkey: t.baseMint, isSigner: !1, isWritable: !1 }, { pubkey: t.quoteMint, isSigner: !1, isWritable: !1 }, { pubkey: t.authority ? t.quoteMint : h.ze, isSigner: !1, isWritable: !1 }].concat(t.authority ? { pubkey: t.authority, isSigner: !1, isWritable: !1 } : []).concat(t.authority && t.pruneAuthority ? { pubkey: t.pruneAuthority, isSigner: !1, isWritable: !1 } : []),
                        o = x.alloc(n.span); return n.encode({ version: 0, instruction: 0, baseLotSize: t.baseLotSize, quoteLotSize: t.quoteLotSize, feeRateBps: t.feeRateBps, vaultSignerNonce: t.vaultSignerNonce, quoteDustThreshold: t.quoteDustThreshold }, o), new h.Sl({ keys: i, programId: e, data: o }) }({ programId: n.programId, marketInfo: { id: n.id.publicKey, requestQueue: n.requestQueue.publicKey, eventQueue: n.eventQueue.publicKey, bids: n.bids.publicKey, asks: n.asks.publicKey, baseVault: n.baseVault.publicKey, quoteVault: n.quoteVault.publicKey, baseMint: n.baseMint, quoteMint: n.quoteMint, baseLotSize: n.baseLotSize, quoteLotSize: n.quoteLotSize, feeRateBps: n.feeRateBps, vaultSignerNonce: n.vaultSignerNonce, quoteDustThreshold: n.quoteDustThreshold } })), [{ transaction: d, signer: [], instructionTypes: [nr.CreateAccount, nr.CreateAccount, nr.InitAccount, nr.InitAccount] }, { transaction: p, signer: [], instructionTypes: [nr.CreateAccount, nr.CreateAccount, nr.CreateAccount, nr.CreateAccount, nr.CreateAccount, nr.InitMarket] }] } var aN = class extends n9 { async create({ baseInfo: e, quoteInfo: t, lotSize: n, tickSize: i, dexProgramId: o, requestQueueSpace: r, eventQueueSpace: a, orderbookQueueSpace: s, txVersion: u, computeBudgetConfig: c }) { let l = this.scope.ownerPubKey,
                        d = iX({ fromPublicKey: l, programId: o }),
                        m = iX({ fromPublicKey: l, programId: o }),
                        p = iX({ fromPublicKey: l, programId: o }),
                        g = iX({ fromPublicKey: l, programId: o }),
                        f = iX({ fromPublicKey: l, programId: o }),
                        y = iX({ fromPublicKey: l, programId: w.H_ }),
                        b = iX({ fromPublicKey: l, programId: w.H_ }),
                        A = new k(100),
                        { vaultOwner: I, vaultSignerNonce: S } = function() { let e = new k(0); for (;;) try { return { vaultOwner: h.nh.createProgramAddressSync([d.publicKey.toBuffer(), e.toArrayLike(x, "le", 8)], o), vaultSignerNonce: e } } catch { if (e.iaddn(1), e.gt(new k(25555))) throw Error("find vault owner error") } }(),
                        T = new k(Math.round(10 ** e.decimals * n)),
                        P = new k(Math.round(n * 10 ** t.decimals * i)); if (T.eq(t7)) throw Error("lot size is too small"); if (P.eq(t7)) throw Error("tick size or lot size is too small"); let B = await aV({ connection: this.scope.connection, wallet: this.scope.ownerPubKey, marketInfo: { programId: o, id: d, baseMint: e.mint, quoteMint: t.mint, baseVault: y, quoteVault: b, vaultOwner: I, requestQueue: m, eventQueue: p, bids: g, asks: f, feeRateBps: 0, quoteDustThreshold: A, vaultSignerNonce: S, baseLotSize: T, quoteLotSize: P, requestQueueSpace: r, eventQueueSpace: a, orderbookQueueSpace: s } }),
                        v = this.createTxBuilder(); for await (let e of(v.addInstruction({ instructions: B[0].transaction.instructions, signers: B[0].signer }), B.slice(1, B.length))) v.addInstruction({ instructions: e.transaction.instructions, signers: e.signer, instructionTypes: e.instructionTypes }); return 0 === u ? v.sizeCheckBuildV0({ computeBudgetConfig: c, address: { marketId: d.publicKey, requestQueue: m.publicKey, eventQueue: p.publicKey, bids: g.publicKey, asks: f.publicKey, baseVault: y.publicKey, quoteVault: b.publicKey, baseMint: new h.nh(e.mint), quoteMin: new h.nh(t.mint) } }) : v.sizeCheckBuild({ computeBudgetConfig: c, address: { marketId: d.publicKey, requestQueue: m.publicKey, eventQueue: p.publicKey, bids: g.publicKey, asks: f.publicKey, baseVault: y.publicKey, quoteVault: b.publicKey, baseMint: new h.nh(e.mint), quoteMin: new h.nh(t.mint) } }) } };
            iD([ix("instruction"), iI("amount")]); var aU = iD([ix("instruction")]);

            function aX({ programId: e }, t) { let n = [{ pubkey: w.H_, isSigner: !1, isWritable: !1 }, { pubkey: tN, isSigner: !1, isWritable: !1 }, ...Object.entries(t).map(([e, t]) => ({ pubkey: t, isSigner: "userOwner" === e, isWritable: !["authority", "userOwner"].includes(e) }))],
                    i = x.alloc(aU.span); return aU.encode({ instruction: 2 }, i), new h.Sl({ keys: n, programId: e, data: i }) }

            function aH(e) { let { poolConfig: t, userKeys: n, side: i } = e, o = "base" === i ? n.baseTokenAccount : n.quoteTokenAccount, r = "base" === i ? t.baseVault : t.quoteVault, a = x.alloc(aU.span);
                aU.encode({ instruction: 2 }, a); let s = [{ pubkey: w.H_, isWritable: !1, isSigner: !1 }, { pubkey: h.Am, isWritable: !1, isSigner: !1 }, { pubkey: t.id, isWritable: !0, isSigner: !1 }, { pubkey: t.authority, isWritable: !1, isSigner: !1 }, { pubkey: r, isWritable: !0, isSigner: !1 }, { pubkey: o, isWritable: !0, isSigner: !1 }, { pubkey: n.ledgerAccount, isWritable: !0, isSigner: !1 }, { pubkey: n.owner, isWritable: !1, isSigner: !0 }]; return new h.Sl({ programId: t.programId, keys: s, data: a }) } var aG = {
                    [nU.IDO_PROGRAM_ID_V1.toString()]: 1, [nU.IDO_PROGRAM_ID_V2.toString()]: 2, [nU.IDO_PROGRAM_ID_V3.toString()]: 3, [nU.IDO_PROGRAM_ID_V4.toString()]: 4 },
                az = class extends n9 { async claim({ ownerInfo: e, idoKeys: t, associatedOnly: n = !0, checkCreateATAOwner: i = !1, txVersion: o }) { let r = this.createTxBuilder(),
                            a = aG[t.programId];
                        a || this.logAndCreateError("invalid version", a); let s = t3(t),
                            [u, c] = [!new k(e.coin).isZero(), !new k(e.pc).isZero()],
                            l = s.projectInfo.mint.address.equals(tQ),
                            { account: d, instructionParams: m } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: s.projectInfo.mint.programId, mint: s.projectInfo.mint.address, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !l, notUseTokenAccount: l, associatedOnly: !l && n, checkCreateATAOwner: i });!d && u && this.logAndCreateError("target token accounts not found", "mint", t.projectInfo.mint.address), u && m && r.addInstruction(m); let p = s.buyInfo.mint.address.equals(tQ),
                            { account: g, instructionParams: f } = await this.scope.account.getOrCreateTokenAccount({ tokenProgram: s.buyInfo.mint.programId, mint: s.buyInfo.mint.address, owner: this.scope.ownerPubKey, createInfo: { payer: this.scope.ownerPubKey, amount: 0 }, skipCloseAccount: !p, notUseTokenAccount: p, associatedOnly: !p && n, checkCreateATAOwner: i }); if (!d && c && this.logAndCreateError("target token accounts not found", "mint", t.projectInfo.mint.address), c && f && r.addInstruction(f), d && g || this.logAndCreateError("target token accounts not found", "mint", t.projectInfo.mint.address, t.buyInfo.mint.address), 3 === a) return r.addInstruction({ instructions: [...u ? [aX({ programId: s.programId }, { idoId: s.id, authority: s.authority, poolTokenAccount: s.projectInfo.vault, userTokenAccount: d, userIdoInfo: new h.nh(e.userIdoInfo), userOwner: this.scope.ownerPubKey })] : [], ...c ? [aX({ programId: new h.nh(t.programId) }, { idoId: s.id, authority: s.authority, poolTokenAccount: s.buyInfo.vault, userTokenAccount: g, userIdoInfo: new h.nh(e.userIdoInfo), userOwner: this.scope.ownerPubKey })] : []] }).versionBuild({ txVersion: o }); if (a < 3) return u || c || this.logAndCreateError("no claimable rewards"), r.addInstruction({ instructions: [aX({ programId: s.programId }, { idoId: s.id, authority: s.authority, poolQuoteTokenAccount: s.buyInfo.vault, poolBaseTokenAccount: s.projectInfo.vault, userQuoteTokenAccount: g, userBaseTokenAccount: d, userIdoInfo: new h.nh(e.userIdoInfo), userOwner: this.scope.ownerPubKey })] }).versionBuild({ txVersion: o }); let w = { poolConfig: { id: s.id, programId: s.programId, authority: s.authority, baseVault: s.projectInfo.vault, quoteVault: s.buyInfo.vault, baseToken: t.projectInfo.mint, quoteToken: t.buyInfo.mint }, userKeys: { baseTokenAccount: d, quoteTokenAccount: g, ledgerAccount: new h.nh(e.userIdoInfo), owner: this.scope.ownerPubKey } }; return r.addInstruction({ instructions: [...u ? [aH(F(_({}, w), { side: "base" }))] : [], ...c ? [aH(F(_({}, w), { side: "quote" }))] : []] }).versionBuild({ txVersion: o }) } },
                aj = class extends n9 { constructor(e) { super(e), this._tokenList = [], this._tokenMap = new Map, this._blackTokenMap = new Map, this._mintGroup = { official: new Set, jup: new Set, extra: new Set }, this._whiteMap = new Set, this._extraTokenList = [] }
                    async load(e) { this.checkDisabled(); let { forceUpdate: t = !1, type: n = "strict" } = e || {}, { mintList: i, blacklist: o, whiteList: r } = await this.scope.fetchV3TokenList(t), a = await this.scope.fetchJupTokenList(t);
                        this._tokenList = [], this._tokenMap = new Map, this._blackTokenMap = new Map, this._mintGroup = { official: new Set, jup: new Set, extra: new Set }, this._whiteMap = new Set(r), this._tokenMap.set(tW.address, tW), this._mintGroup.official.add(tW.address), o.forEach(e => { this._blackTokenMap.set(e.address, F(_({}, e), { priority: -1 })) }), i.forEach(e => { var t;
                            this._blackTokenMap.has(e.address) || (this._tokenMap.set(e.address, F(_({}, e), { type: "Nova Bot", priority: 2, programId: null != (t = e.programId) ? t : e.tags.includes("token-2022") ? w.nA.toBase58() : w.H_.toBase58() })), this._mintGroup.official.add(e.address)) }), a.forEach(e => { var t;
                            this._blackTokenMap.has(e.address) || this._tokenMap.has(e.address) || (this._tokenMap.set(e.address, F(_({}, e), { type: "jupiter", priority: 1, programId: null != (t = e.programId) ? t : e.tags.includes("token-2022") ? w.nA.toBase58() : w.H_.toBase58(), tags: e.freezeAuthority ? [...e.tags || [], "hasFreeze"] : e.tags })), this._mintGroup.jup.add(e.address)) }), this._extraTokenList.forEach(e => { this._blackTokenMap.has(e.address) || this._tokenMap.has(e.address) || (this._tokenMap.set(e.address, F(_({}, e), { type: "extra", priority: 1, programId: e.programId || e.tags.includes("token-2022") ? w.nA.toBase58() : w.H_.toBase58() })), this._mintGroup.extra.add(e.address)) }), this._tokenList = Array.from(this._tokenMap).map(e => e[1]) }
                    get tokenList() { return this._tokenList }
                    get tokenMap() { return this._tokenMap }
                    get blackTokenMap() { return this._blackTokenMap }
                    get mintGroup() { return this._mintGroup }
                    get whiteListMap() { return this._whiteMap }
                    async getTokenInfo(e) { if (!e) throw Error("please input mint"); let t = e.toString(),
                            n = this._tokenMap.get(t); if (n) return n; if ("SOL" === t.toLocaleUpperCase()) return tW; let i = (await this.scope.api.getTokenInfo([t]))[0]; if (i) return this._mintGroup.extra.add(t), this._tokenMap.set(t, F(_({}, i), { priority: 2 })), i; let o = await this.scope.connection.getAccountInfo(new h.nh(t)); if (!o) throw Error(`mint address not found: ${t}`); let r = f.qT.decode(o.data),
                            a = t.toString().substring(0, 6),
                            s = { chainId: 101, address: t, programId: o.owner.toBase58(), logoURI: "", symbol: a, name: a, decimals: r.decimals, tags: [], extensions: {}, priority: 0, type: "unknown" }; return this._mintGroup.extra.add(t), this._tokenMap.set(t, s), s } },
                aQ = class { constructor(e) { this.rawBalances = new Map; let { connection: t, cluster: n, owner: i, api: o, defaultChainTime: r, defaultChainTimeOffset: a, apiCacheTime: s, blockhashCommitment: u = "confirmed" } = e;
                        this._connection = t, this.cluster = n || "mainnet", this._owner = i ? new ni(i) : void 0, this._signAllTransactions = e.signAllTransactions, this.blockhashCommitment = u, this.api = o, this._apiCacheTime = s || 3e5, this.logger = X("Nova Bot"), this.farm = new oP({ scope: this, moduleName: "Nova Bot_Farm" }), this.account = new ij({ scope: this, moduleName: "Nova Bot_Account", tokenAccounts: e.tokenAccounts, tokenAccountRawInfos: e.tokenAccountRawInfos }), this.liquidity = new at({ scope: this, moduleName: "Nova Bot_LiquidityV2" }), this.token = new aj({ scope: this, moduleName: "Nova Bot_tokenV2" }), this.tradeV2 = new a_({ scope: this, moduleName: "Nova Bot_tradeV2" }), this.clmm = new an({ scope: this, moduleName: "Nova Bot_clmm" }), this.cpmm = new ax({ scope: this, moduleName: "Nova Bot_cpmm" }), this.utils1216 = new aE({ scope: this, moduleName: "Nova Bot_utils1216" }), this.marketV2 = new aN({ scope: this, moduleName: "Nova Bot_marketV2" }), this.ido = new az({ scope: this, moduleName: "Nova Bot_ido" }), this.availability = {}; let c = new Date().getTime();
                        this.apiData = {}, a && (this._chainTime = { fetched: c, value: { chainTime: r || Date.now() - a, offset: a } }) }
                    static async load(e) { var t; let n = (0, g.merge)({ cluster: "mainnet", owner: null, apiRequestInterval: 3e5, apiRequestTimeout: 1e4 }, e),
                            { cluster: i, apiRequestTimeout: o, logCount: r, logRequests: a, urlConfigs: s } = n,
                            u = new n8({ cluster: i, timeout: o, urlConfigs: s, logCount: r, logRequests: a }),
                            c = new aQ(F(_({}, n), { api: u })); return await c.fetchAvailabilityStatus(null == (t = e.disableFeatureCheck) || t), e.disableLoadToken || await c.token.load({ type: e.jupTokenType }), c }
                    get owner() { return this._owner }
                    get ownerPubKey() { if (!this._owner) throw Error(n3); return this._owner.publicKey }
                    setOwner(e) { return this._owner = e ? new ni(e) : void 0, this.account.resetTokenAccounts(), this }
                    get connection() { if (!this._connection) throw Error("please provide connection in load() initialization or set it by Nova Bot.setConnection(connection)"); return this._connection }
                    setConnection(e) { return this._connection = e, this }
                    get signAllTransactions() { return this._signAllTransactions }
                    setSignAllTransactions(e) { return this._signAllTransactions = e, this }
                    checkOwner() { if (!this.owner) throw this.logger.error(n3), Error(n3) }
                    isCacheInvalidate(e) { return new Date().getTime() - e > this._apiCacheTime }
                    async fetchChainTime() { try { let e = await this.api.getChainTimeOffset();
                            this._chainTime = { fetched: Date.now(), value: { chainTime: Date.now() + 1e3 * e.offset, offset: 1e3 * e.offset } } } catch { this._chainTime = void 0 } }
                    async fetchV3TokenList(e) { if (this.apiData.tokenList && !this.isCacheInvalidate(this.apiData.tokenList.fetched) && !e) return this.apiData.tokenList.data; try { let e = await this.api.getTokenList(),
                                t = { fetched: Date.now(), data: e }; return this.apiData.tokenList = t, t.data } catch (e) { return console.error(e), { mintList: [], blacklist: [], whiteList: [] } } }
                    async fetchJupTokenList(e) { let t = this.apiData.jupTokenList; if (t && !this.isCacheInvalidate(t.fetched) && !e) return t.data; try { let e = await this.api.getJupTokenList(); return this.apiData.jupTokenList = { fetched: Date.now(), data: e.map(e => F(_({}, e), { mintAuthority: e.mint_authority || void 0, freezeAuthority: e.freeze_authority || void 0 })) }, this.apiData.jupTokenList.data } catch (e) { return console.error(e), [] } }
                    get chainTimeData() { var e; return null == (e = this._chainTime) ? void 0 : e.value }
                    async chainTimeOffset() { var e; return this._chainTime && Date.now() - this._chainTime.fetched <= 3e5 ? this._chainTime.value.offset : (await this.fetchChainTime(), (null == (e = this._chainTime) ? void 0 : e.value.offset) || 0) }
                    async currentBlockChainTime() { var e; return this._chainTime && Date.now() - this._chainTime.fetched <= 3e5 ? this._chainTime.value.chainTime : (await this.fetchChainTime(), (null == (e = this._chainTime) ? void 0 : e.value.chainTime) || Date.now()) }
                    async fetchEpochInfo() { return this._epochInfo && Date.now() - this._epochInfo.fetched <= 3e4 || (this._epochInfo = { fetched: Date.now(), value: await this.connection.getEpochInfo() }), this._epochInfo.value }
                    async fetchAvailabilityStatus(e) { if (e) return {}; try { let e = await this.api.fetchAvailabilityStatus(),
                                t = !1 === e.all; return this.availability = { all: e.all, swap: !t && e.swap, createConcentratedPosition: !t && e.createConcentratedPosition, addConcentratedPosition: !t && e.addConcentratedPosition, addStandardPosition: !t && e.addStandardPosition, removeConcentratedPosition: !t && e.removeConcentratedPosition, removeStandardPosition: !t && e.removeStandardPosition, addFarm: !t && e.addFarm, removeFarm: !t && e.removeFarm }, e } catch { return {} } } }; /*!noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com)*/ } }
]);