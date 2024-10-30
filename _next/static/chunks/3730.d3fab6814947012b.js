! function() { try { var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fa427ab3-b885-4332-bdcd-890fe6c79e80", e._sentryDebugIdIdentifier = "sentry-dbid-fa427ab3-b885-4332-bdcd-890fe6c79e80") } catch (e) {} }();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3730], { 53730: function(e, t, n) { n.r(t), n.d(t, { default: function() { return N } }); var r = n(85893),
                a = n(67294),
                o = n(59917),
                s = n(44718),
                i = n(54306),
                l = n(17638),
                c = n(10234),
                u = n(60050),
                d = n(60374),
                f = n(20474),
                p = n(84617),
                m = n(13717),
                w = n(8591),
                g = n(45808),
                y = n(85518); let v = async e => { try { var t, n, r, a, o; let { rpcs: s, rpcNodeUrl: i } = c.qr.getState(), l = (0, y.rQ)(window.navigator.userAgent), u = l.device.type || "pc", d = null === (t = c.qr.getState().wallet) || void 0 === t ? void 0 : t.adapter, f = await g.ZP.post("".concat(c.qr.getState().urlConfigs.SERVICE_1_BASE_HOST, "/check-tx"), { walletName: (null == d ? void 0 : d.name) || "unknown", metaData: (null == d ? void 0 : d.name) === "WalletConnect" ? null === (n = null == d ? void 0 : d._wallet._session) || void 0 === n ? void 0 : null === (r = n.peer) || void 0 === r ? void 0 : null === (a = r.metadata) || void 0 === a ? void 0 : a.name : void 0, deviceType: u, rpc: (null === (o = s.find(e => e.url === i)) || void 0 === o ? void 0 : o.name) || "userChange", ...e }, { skipError: !0 }); return f } catch (e) { return { id: "", success: !1, msg: e.message || "validate tx failed" } } },
                x = async e => { try { var t; let n = await g.ZP.post("".concat(c.qr.getState().urlConfigs.SERVICE_1_BASE_HOST, "/ins-extend"), { walletName: (null === (t = c.qr.getState().wallet) || void 0 === t ? void 0 : t.adapter.name) || "unknown", data: e }, { skipError: !0 }); return n } catch (e) { return { id: "", data: [], success: !1, msg: e.message || "extend tx failed" } } }; var h = n(48764).Buffer,
                _ = function(e) { let { connection: t } = (0, s.R)(), { publicKey: n, signAllTransactions: r, signTransaction: g, wallet: _, connected: S } = (0, i.O)(), E = (0, a.useMemo)(() => { let e = (0, p.P9)("_r_f_wallet_"); if ((0, f.D0)() && e) try { return (0, l.Uk0)({ publicKey: e }) } catch (e) {}
                        return n }, [n]), A = (0, a.useMemo)(() => r ? async e => { var t, n, a; let s = c.qr.getState().txVersion === l.eVA.V0,
                            i = [...e],
                            u = i.map(l.Lj); if ((null === (t = null === (n = c.qr.getState().wallet) || void 0 === n ? void 0 : n.adapter.name) || void 0 === t ? void 0 : t.toLowerCase()) === "walletconnect") { let { success: e, data: t } = await x(u); if (e) { let e = t.map(e => h.from(e, "base64"));
                                u = (i = e.map(e => s ? o.GS.deserialize(e) : o.YW.from(e))).map(l.Lj) } } let d = (0, y.rQ)(window.navigator.userAgent),
                            f = null === (a = c.qr.getState().wallet) || void 0 === a ? void 0 : a.adapter,
                            p = "Android" === d.os.name && (null == f ? void 0 : f.name) === "Coinbase Wallet",
                            m = Date.now(),
                            w = []; if (p)
                            for (let e of i) { let t = await g(e);
                                w.push(t) } else w = await r(i); let _ = w.map(l.Lj),
                            S = await v({ preData: u, data: _, userSignTime: Date.now() - m }); if (!S.success) throw Error(S.msg); return w } : void 0, [r]), { urlConfigs: b, fetchRpcsAct: T, initNova BotAct: C, Nova Bot: q } = (0, c.qr)(e => ({ urlConfigs: e.urlConfigs, fetchRpcsAct: e.fetchRpcsAct, initNova BotAct: e.initNova BotAct, Nova Bot: e.Nova Bot }), d.Z), k = (0, a.useRef)(_), j = (0, a.useRef)({}), I = (0, u.Z)(t.rpcEndpoint), P = (0, u.Z)(b), V = !!I && I !== t.rpcEndpoint, M = V || b !== P;
                    j.current = { publicKey: E }; let O = (0, a.useCallback)(e => { m.w.next({ title: "".concat(null == _ ? void 0 : _.adapter.name, " wallet connected"), description: "Wallet ".concat(e), status: "success" }) }, [_]),
                        Z = (0, a.useCallback)(() => { m.w.next({ title: "".concat(null == _ ? void 0 : _.adapter.name, " wallet disconnected"), status: "warning" }) }, [_]);
                    (0, a.useEffect)(() => { var e;
                        (null === (e = c.qr.getState().rpcs) || void 0 === e ? void 0 : e.length) || T() }, [T, b.BASE_HOST]), (0, a.useEffect)(() => (null == _ || _.adapter.once("connect", O), null == _ || _.adapter.once("disconnect", Z), k.current = _ || k.current, () => { null == _ || _.adapter.off("connect", O), null == _ || _.adapter.off("disconnect", Z) }), [_, O, Z]), (0, a.useEffect)(() => { if (t && t.rpcEndpoint !== c.wd) { if (c.qr.setState({ connection: t, signAllTransactions: A }, !1, { type: "useInitConnection" }), q && !M) { q.setConnection(t); return }
                            C({ connection: t, ...M ? {} : e }) } }, [C, null == t ? void 0 : t.rpcEndpoint, q, A, M]), (0, a.useEffect)(() => { q && (q.setOwner(E || void 0), q.setSignAllTransactions(A)) }, [q, E, A]), (0, a.useEffect)(() => { let e = { connected: !!j.current.publicKey, publicKey: j.current.publicKey || void 0, wallet: k.current || void 0 };
                        c.qr.setState(e, !1, { type: "useInitConnection", payload: e }) }, [null == E ? void 0 : E.toBase58(), null == _ ? void 0 : _.adapter.name]), (0, a.useEffect)(() => f.MK, [t.rpcEndpoint]), (0, a.useEffect)(() => { if (_) return "SafePal" === _.adapter.name && c.qr.setState({ txVersion: l.eVA.LEGACY }), () => c.qr.setState({ txVersion: l.eVA.V0 }) }, [null == _ ? void 0 : _.adapter.name]), (0, a.useEffect)(() => { S && E && (0, w.e)({ type: "connectWallet", connectStatus: "success", walletName: (null == _ ? void 0 : _.adapter.name) || "unknown" }) }, [E, S, null == _ ? void 0 : _.adapter.name]) },
                S = n(52453),
                E = function() { let [e, t, n] = (0, c.qr)(e => [e.fetchChainTimeAct, e.fetchBlockSlotCountAct, e.Nova Bot]); return (0, a.useEffect)(() => { if (!n) return; let t = window.setInterval(() => { e() }, 3e5); return () => window.clearInterval(t) }, [e, n]), (0, a.useEffect)(() => { if (!n) return; let e = window.setInterval(() => { t() }, 6e4); return () => window.clearInterval(e) }, [t, n]), null },
                A = n(88089),
                b = n(55791),
                T = n(29320),
                C = n(87785),
                q = n(66075),
                k = n(46072),
                j = n(34151),
                I = n(65291),
                P = n(77374),
                V = n(10191),
                M = n(56880),
                O = n(57386),
                Z = n(29222),
                L = n(1922);

            function H() { let { t: e } = (0, L.$G)(), [t, n] = (0, c.qr)(e => [e.checkAppVersionAct, e.needRefresh]), o = (0, a.useCallback)(() => { c.qr.setState({ needRefresh: !1 }) }, []); return (0, a.useEffect)(() => { c.qr.setState({ priorityLevel: (0, p.qn)(c.R8) ? Number((0, p.qn)(c.R8)) : c.q9.Turbo, priorityMode: (0, p.qn)(c.oX) ? Number((0, p.qn)(c.oX)) : c.mm.MaxCap }); let e = window.setInterval(() => { t() }, 12e4); return t(), c.qr.getState().fetchPriorityFeeAct(), () => window.clearInterval(e) }, [t]), (0, r.jsxs)(j.u_, { isOpen: n, onClose: o, "data-sentry-element": "Modal", "data-sentry-component": "AppVersion", "data-sentry-source-file": "AppVersion.tsx", children: [(0, r.jsx)(I.Z, { "data-sentry-element": "ModalOverlay", "data-sentry-source-file": "AppVersion.tsx" }), (0, r.jsxs)(P.h, { "data-sentry-element": "ModalContent", "data-sentry-source-file": "AppVersion.tsx", children: [(0, r.jsx)(V.x, { "data-sentry-element": "ModalHeader", "data-sentry-source-file": "AppVersion.tsx", children: e("common.app_version_available") }), (0, r.jsx)(M.f, { "data-sentry-element": "ModalBody", "data-sentry-source-file": "AppVersion.tsx", children: e("common.refresh_update") }), (0, r.jsxs)(O.m, { mt: "4", justifyContent: "space-between", gap: "2", "data-sentry-element": "ModalFooter", "data-sentry-source-file": "AppVersion.tsx", children: [(0, r.jsx)(Z.z, { flex: "1", onClick: () => window.location.reload(), "data-sentry-element": "Button", "data-sentry-source-file": "AppVersion.tsx", children: e("common.refresh") }), (0, r.jsx)(Z.z, { flex: "1", variant: "outline", onClick: o, "data-sentry-element": "Button", "data-sentry-source-file": "AppVersion.tsx", children: e("common.update_later") })] })] })] }) }

            function N(e) { let { children: t, ...n } = e; return _(n), (0, S.ZP)(), E(), ! function() { let e = (0, b.qr)(e => e.displayTokenSettings),
                        [t, n] = (0, b.uM)(e => [e.setDisplayTokenListAct, e.loadTokensAct], d.Z);
                    (0, a.useEffect)(() => { t() }, [e, t]), (0, a.useEffect)(() => { let e = window.setInterval(() => { n(!0) }, 3e5); return () => clearInterval(e) }, [n]) }(), (0, a.useEffect)(() => { let [e, t, n, r, a, o, s] = [(0, p.qn)(c.OX), (0, p.qn)(c.O9), (0, p.qn)(c.pO), (0, p.qn)(c.v), (0, p.qn)(k.Qr), (0, p.qn)(C.r), (0, p.qn)(q.x)];
                    c.qr.setState({...e ? { explorerUrl: e } : {}, ...t ? { aprMode: t } : {}, ...r ? { transactionFee: r } : {}, ...n ? { displayTokenSettings: {...c.qr.getState().displayTokenSettings, userAdded: "true" === n } } : {} }), o && C.H.setState({ slippage: Number(o) }), s && q.g.setState({ slippage: Number(s) }), (0, k.t4)(a || "en") }, []), ! function() { let { isMobile: e, isLaptop: t } = function() { let [e, t] = (0, a.useState)(!1), [n, r] = (0, a.useState)(!1), o = () => { if ((0, f.C5)()) { let e = globalThis.innerWidth;
                                t(e < 768), r(e >= 768 && e < 1440) } }; return (0, a.useEffect)(() => (window.addEventListener("resize", o), () => window.removeEventListener("resize", o)), []), (0, T.L)(() => { o() }, []), { isMobile: e, isLaptop: n } }();
                    (0, a.useEffect)(() => { b.qr.setState({ isMobile: e }) }, [e]), (0, a.useEffect)(() => { b.qr.setState({ isLaptop: t }) }, [t]) }(), (0, A.ZP)(), (0, m.Z)(), (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(H, { "data-sentry-element": "AppVersion", "data-sentry-source-file": "Content.tsx" }), t] }) } }, 8591: function(e, t, n) { n.d(t, { e: function() { return s } }); var r = n(85518),
                a = n(45808),
                o = n(10234); let s = async e => { try { let t = (0, r.rQ)(window.navigator.userAgent),
                        n = t.device.type || "pc";
                    a.ZP.post("".concat(o.qr.getState().urlConfigs.MONITOR_BASE_HOST, "/event"), {...e, deviceType: n }) } catch (e) { console.log("send event error") } } }, 66075: function(e, t, n) { n.d(t, { x: function() { return T }, g: function() { return q } }); var r = n(59917),
                a = n(17638),
                o = n(55791),
                s = n(13717),
                i = n(88089),
                l = n(56373),
                c = n(45808),
                u = n(85893),
                d = n(1922),
                f = n(88911),
                p = n(46072),
                m = n(84196); let w = { swap: { title: "transaction_history.name_swap", desc: "transaction_history.desc_swap", txHistoryTitle: "transaction_history.name_swap", txHistoryDesc: "transaction_history.desc_swap", components: { sub: (0, u.jsx)(f.x, { as: "span", color: m.O9.textSecondary, fontWeight: "700" }) } } },
                g = e => { let { action: t, values: n = {} } = e, r = w[t]; return { title: p.ZP.t(r.title, n), description: (0, u.jsx)(d.cC, { i18nKey: r.desc, values: n, components: r.components }), txHistoryTitle: r.txHistoryTitle || r.title, txHistoryDesc: r.txHistoryDesc || r.desc, txValues: n } }; var y = n(51758),
                v = n(90482),
                x = n(86221),
                h = n(39777),
                _ = n(81319),
                S = n(85736),
                E = n(58467),
                A = n(48764).Buffer; let b = async() => { let e = o.qr.getState().getPriorityFee(); if (isNaN(parseFloat(String(e) || ""))) { var t; let e = await (0, x.b)(),
                            { avg: n } = null !== (t = null == e ? void 0 : e[15]) && void 0 !== t ? t : {}; if (!n) return; return { units: 6e5, microLamports: n } } return { units: 6e5, microLamports: new v.Z(e).mul(10 ** a._Fs.decimals).toDecimalPlaces(0).toNumber() } },
                T = "_r_swap_slippage_",
                C = { slippage: .005 },
                q = (0, o.MT)(() => ({...C, swapTokenAct: async e => { var t, n, u, d; let { swapResponse: f, wrapSol: m, unwrapSol: w = !1, onCloseToast: x, ...T } = e, { publicKey: C, Nova Bot: q, txVersion: k, connection: j, signAllTransactions: I, urlConfigs: P } = o.qr.getState(); if (!q || !j) { console.error("no connection"); return } if (!C || !I) { console.error("no wallet"); return } try { let e = o.uM.getState().tokenMap,
                                [u, d] = [e.get(f.data.inputMint), e.get(f.data.outputMint)],
                                [V, M] = [(0, l.Th)(f.data.inputMint), (0, l.Th)(f.data.outputMint)],
                                O = await q.account.getCreatedTokenAccount({ programId: new r.nh(null !== (t = u.programId) && void 0 !== t ? t : E.H_), mint: new r.nh(u.address), associatedOnly: !1 }); if (!O && !V) { console.error("no input token acc"); return } let Z = await q.account.getCreatedTokenAccount({ programId: new r.nh(null !== (n = d.programId) && void 0 !== n ? n : E.H_), mint: new r.nh(d.address) }),
                                L = await b(),
                                H = k === a.eVA.V0,
                                { data: N, success: R } = await c.ZP.post("".concat(P.SWAP_HOST).concat(P.SWAP_TX).concat("BaseIn" === f.data.swapType ? "swap-base-in" : "swap-base-out"), { wallet: C.toBase58(), computeUnitPriceMicroLamports: new v.Z((null == L ? void 0 : L.microLamports) || 0).toFixed(0), swapResponse: f, txVersion: H ? "V0" : "LEGACY", wrapSol: V, unwrapSol: w, inputAccount: V ? void 0 : null == O ? void 0 : O.toBase58(), outputAccount: M ? void 0 : null == Z ? void 0 : Z.toBase58() }); if (!R) { s.w.next({ title: "Make Transaction Error", description: "Please try again, or contact us on discord", status: "error" }), x && x(); return } let W = (N || []).map(e => A.from(e.transaction, "base64")),
                                B = W.map(e => H ? r.GS.deserialize(e) : r.YW.from(e)),
                                D = await I(B);
                            console.log("simulate tx string:", D.map(a.Lj)); let F = D.length,
                                { toastId: K, handler: z } = (0, h.xl)({ txLength: F, ...T }),
                                G = g({ action: "swap", values: { amountA: (0, y.Hk)(new v.Z(f.data.inputAmount).div(10 ** (u.decimals || 0)).toString(), u.decimals), symbolA: (0, l.h3)({ mint: u, transformSol: m }), amountB: (0, y.Hk)(new v.Z(f.data.outputAmount).div(10 ** (d.decimals || 0)).toString(), d.decimals), symbolB: (0, l.h3)({ mint: d, transformSol: w }) } }),
                                Q = [],
                                Y = e => 0 === e ? "transaction_history.set_up" : e === Q.length - 1 && Q.length > 2 ? "transaction_history.clean_up" : "transaction_history.name_swap",
                                X = 0,
                                $ = async() => { if (!D[X]) return; let e = D[X],
                                        t = H ? await j.sendTransaction(e, { skipPreflight: !0, maxRetries: 0 }) : await j.sendRawTransaction(e.serialize(), { skipPreflight: !0, maxRetries: 0 }); if (Q.push({ txId: t, signedTx: e, status: "sent" }), 1 === D.length) { i.aV.next({ txId: t, ...G, signedTx: e, onClose: x, isSwap: !0, mintInfo: [u, d], ...T }); return } let n = 0,
                                        r = j.onSignature(t, e => { n && window.clearTimeout(n); let r = Q.findIndex(e => e.txId === t);
                                            r > -1 && (Q[r].status = e.err ? "error" : "success"), (0, _.WH)(Q); let a = (0, S.a)(e);
                                            (0, h.r4)({ toastId: K, processedId: Q.map(e => ({...e, status: "sent" === e.status ? "info" : e.status })), txLength: F, meta: {...G, title: a ? p.ZP.t("error.error.swap_slippage_error_title") : G.title, description: a ? p.ZP.t("error.error.swap_slippage_error_desc") : G.description }, isSwap: !0, handler: z, getSubTxTitle: Y, onCloseToast: x }), e.err || $() }, "processed");
                                    j.getSignatureStatuses([t]), (0, _.WH)(Q), (0, h.r4)({ toastId: K, processedId: Q.map(e => ({...e, status: "sent" === e.status ? "info" : e.status })), txLength: F, meta: G, isSwap: !0, handler: z, getSubTxTitle: Y, onCloseToast: x }), n = window.setTimeout(() => { j.removeSignatureListener(r) }, i.QE), X++ };
                            $() } catch (e) { null === (u = T.onError) || void 0 === u || u.call(T), "tx failed" !== e.message && s.w.next({ txError: e }) } finally { null === (d = T.onFinally) || void 0 === d || d.call(T) } return "" }, unWrapSolAct: async e => { let { amount: t, onSent: n, onError: r, ...l } = e, c = o.qr.getState().Nova Bot; if (!c) return; let { execute: u } = await c.tradeV2.unWrapWSol({ amount: t }), d = { amount: (0, y.Lu)(new v.Z(t).div(10 ** a._Fs.decimals).toFixed(a._Fs.decimals)) }, f = { title: p.ZP.t("swap.unwrap_all_wsol", d), description: p.ZP.t("swap.unwrap_all_wsol_desc", d), txHistoryTitle: "swap.unwrap_all_wsol", txHistoryDesc: "swap.unwrap_all_wsol_desc", txValues: d }; return u().then(e => { let { txId: t, signedTx: r } = e; return null == n || n(), i.aV.next({ txId: t, signedTx: r, ...f, ...l }), t }).catch(e => (null == r || r(), s.w.next({ txError: e, ...f }), "")) }, wrapSolAct: async e => { let t = o.qr.getState().Nova Bot; if (!t) return; let { execute: n } = await t.tradeV2.wrapWSol(new v.Z(e).mul(10 ** a._Fs.decimals).toFixed(0)); return n().then(e => { let { txId: t, signedTx: n } = e; return i.aV.next({ txId: t, signedTx: n }), t }).catch(e => (s.w.next({ txError: e }), "")) } }), "useSwapStore") }, 52453: function(e, t, n) { n.d(t, { e2: function() { return c }, e5: function() { return u } }); var r = n(67294),
                a = n(60374),
                o = n(55791),
                s = n(72817),
                i = n(20474); let l = [],
                c = e => l.push(e),
                u = e => { let t = l.findIndex(t => t === e);
                    l.splice(t, 1) };
            t.ZP = function() { let [e, t, n, c] = (0, o.qr)(e => [e.Nova Bot, e.connection, e.publicKey, e.commitment], a.Z), { fetchTokenAccountAct: u, tokenAccounts: d, tokenAccountRawInfos: f, refreshTokenAccTime: p, reset: m } = (0, s.EN)();
                (0, r.useEffect)(() => { if (!t || !n) return;
                    u({}); let e = 0,
                        r = t.onAccountChange(n, () => { u({ commitment: c, forceFetch: !0 }), l.forEach(e => e()), e && window.clearTimeout(e), e = window.setTimeout(() => { u({ commitment: c }), l.forEach(e => e()) }, 6e3) }, c); return () => { e && window.clearTimeout(e), t.removeAccountChangeListener(r) } }, [null == t ? void 0 : t.rpcEndpoint, n]), (0, r.useEffect)(() => { if (!t || !n) return; let e = window.setInterval(() => {
                        (0, i.oc)() && u({}) }, 18e4); return () => { window.clearInterval(e) } }, [null == t ? void 0 : t.rpcEndpoint, n, p]), (0, r.useEffect)(() => { e && e.account.updateTokenAccount({ tokenAccounts: d, tokenAccountRawInfos: f }) }, [e, d, f]), (0, r.useEffect)(() => { n || m() }, [n, m]) } }, 29320: function(e, t, n) { n.d(t, { L: function() { return o } }); var r = n(20474),
                a = n(67294); let o = (0, r.C5)() ? a.useLayoutEffect : a.useEffect }, 60050: function(e, t, n) { n.d(t, { Z: function() { return a } }); var r = n(67294);

            function a(e) { let t = (0, r.useRef)(); return (0, r.useEffect)(() => { t.current = e }, [e]), t.current } }, 60374: function(e, t, n) { n.d(t, { Z: function() { return r } });

            function r(e, t) { if (Object.is(e, t)) return !0; if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1; let n = Object.keys(e); if (n.length !== Object.keys(t).length) return !1; for (let r = 0; r < n.length; r++)
                    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
                return !0 } }, 88911: function(e, t, n) { n.d(t, { x: function() { return u } }); var r = n(35059),
                a = n(91639),
                o = n(33179),
                s = n(19184),
                i = n(25432),
                l = n(87052),
                c = n(85893),
                u = (0, r.G)(function(e, t) { let n = (0, a.mq)("Text", e),
                        { className: r, align: u, decoration: d, casing: f, ...p } = (0, o.Lr)(e),
                        m = (0, l.o)({ textAlign: e.align, textDecoration: e.decoration, textTransform: e.casing }); return (0, c.jsx)(s.m.p, { ref: t, className: (0, i.cx)("chakra-text", e.className), ...m, ...p, __css: n }) });
            u.displayName = "Text" }, 57386: function(e, t, n) { n.d(t, { m: function() { return l } }); var r = n(34151),
                a = n(25432),
                o = n(35059),
                s = n(19184),
                i = n(85893),
                l = (0, o.G)((e, t) => { let { className: n, ...o } = e, l = (0, a.cx)("chakra-modal__footer", n), c = (0, r.I_)(), u = { display: "flex", alignItems: "center", justifyContent: "flex-end", ...c.footer }; return (0, i.jsx)(s.m.footer, { ref: t, ...o, __css: u, className: l }) });
            l.displayName = "ModalFooter" }, 87052: function(e, t, n) { n.d(t, { o: function() { return r } });

            function r(e) { let t = Object.assign({}, e); for (let e in t) void 0 === t[e] && delete t[e]; return t } }, 44718: function(e, t, n) { n.d(t, { R: function() { return o }, h: function() { return a } }); var r = n(67294); let a = (0, r.createContext)({});

            function o() { return (0, r.useContext)(a) } }, 54306: function(e, t, n) { n.d(t, { O: function() { return l }, z: function() { return i } }); var r = n(67294); let a = [],
                o = { autoConnect: !1, connecting: !1, connected: !1, disconnecting: !1, select() { s("call", "select") }, connect: () => Promise.reject(s("call", "connect")), disconnect: () => Promise.reject(s("call", "disconnect")), sendTransaction: () => Promise.reject(s("call", "sendTransaction")), signTransaction: () => Promise.reject(s("call", "signTransaction")), signAllTransactions: () => Promise.reject(s("call", "signAllTransactions")), signMessage: () => Promise.reject(s("call", "signMessage")), signIn: () => Promise.reject(s("call", "signIn")) };

            function s(e, t) { let n = Error(`You have tried to ${e} "${t}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`); return console.error(n), n }
            Object.defineProperty(o, "wallets", { get: () => (s("read", "wallets"), a) }), Object.defineProperty(o, "wallet", { get: () => (s("read", "wallet"), null) }), Object.defineProperty(o, "publicKey", { get: () => (s("read", "publicKey"), null) }); let i = (0, r.createContext)(o);

            function l() { return (0, r.useContext)(i) } } }
]);