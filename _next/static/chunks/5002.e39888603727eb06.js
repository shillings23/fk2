! function() { try { var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6e18d457-16a3-4be8-8d90-4ecc85694b6d", e._sentryDebugIdIdentifier = "sentry-dbid-6e18d457-16a3-4be8-8d90-4ecc85694b6d") } catch (e) {} }();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5002], { 75266: function(e, t, n) { var a = n(85893),
                r = n(70632),
                s = n(51758),
                i = n(204),
                l = n(88911),
                o = n(93863),
                d = n(59233),
                c = n(67294),
                u = n(90482);
            t.Z = function(e) { let { id: t, name: n, title: p, width: x = "100%", height: g, onChange: m, onFormikChange: y, onBlur: f, onFocus: h, onClick: w, onKeyDown: S, ctrSx: _ = {}, inputSx: b = {}, inputGroupSx: v = {}, prefix: C, postfix: j, decimals: k, side: M, readonly: T, disabled: O, value: Z, min: I, max: D, placeholder: F, variant: B = "filled", postFixInField: A = !1, rightAddOn: H } = e, P = (0, c.useRef)(Z);
                P.current = Z; let W = void 0 !== I || void 0 !== D,
                    z = (0, c.useCallback)(e => r.R6.test(e), []),
                    N = (0, c.useCallback)((e, t) => { P.current = e, null == m || m(e, t, M) }, [m, M, k]),
                    E = (0, c.useCallback)(() => { setTimeout(() => null == f ? void 0 : f(P.current, M), 0) }, [f, M]),
                    R = (0, c.useCallback)(e => { var t; let n = (null === (t = e.match(RegExp("[0-9".concat(s.A5, "]"), "gi"))) || void 0 === t ? void 0 : t.join("")) || ""; if (!n) return ""; let a = n.split(s.A5); return a.length > 2 ? [a[0], a[1]].join(".") : "number" == typeof k && k > -1 && a[1] && a[1].length > k ? [a[0], a[1].substring(0, k)].join(".") : n === s.A5 ? "0." : n.replace(s.A5, ".") }, [k]),
                    V = (0, c.useCallback)(() => { null == h || h(M) }, [h, M]);
                (0, c.useEffect)(() => { let e = P.current;
                    N(e, Number(e)) }, [N]); let L = (e, t) => e && !String(e).endsWith(".") && null != t && new u.Z((0, r.mv)(e, 0)).decimalPlaces() > t ? new u.Z(e).toDecimalPlaces(t, u.Z.ROUND_FLOOR).toString() : e,
                    q = (0, c.useMemo)(() => L(Z, k), [Z, k]); return (0, a.jsxs)(i.k, { flexDirection: "column", width: x, opacity: O ? "0.5" : "1", sx: _, "data-sentry-element": "Flex", "data-sentry-component": "DecimalInput", "data-sentry-source-file": "DecimalInput.tsx", children: [p ? (0, a.jsx)(l.x, { mb: "6px", minW: "40px", children: p }) : null, (0, a.jsxs)(i.k, { alignItems: "center", w: "100%", "data-sentry-element": "Flex", "data-sentry-source-file": "DecimalInput.tsx", children: [C, (0, a.jsxs)(o.B, { sx: { width: x, height: g, px: 2, ...v }, "data-sentry-element": "InputGroup", "data-sentry-source-file": "DecimalInput.tsx", children: [(0, a.jsx)(d.Y2, { focusInputOnChange: !1, clampValueOnBlur: W, id: t, name: n, min: I, max: D, onBlur: E, onChange: N, onFocus: V, parse: R, isReadOnly: T, isDisabled: O || !1, isInvalid: !!W && void 0, value: q, format: e => (0, s.k_)(e), width: x, variant: B, isValidCharacter: z, "data-sentry-element": "NumberInput", "data-sentry-source-file": "DecimalInput.tsx", children: (0, a.jsx)(d.zu, { px: "0px", sx: b, cursor: T ? "default" : void 0, id: t, name: n, placeholder: F, width: x, height: g, onClick: w, onChange: y, onKeyDown: S, "data-sentry-element": "NumberInputField", "data-sentry-source-file": "DecimalInput.tsx" }) }), j && A ? j : null] }), A ? H : (0, a.jsxs)(a.Fragment, { children: [j, H] })] })] }) } }, 2881: function(e, t, n) { n.d(t, { m: function() { return c } }); var a = n(85893),
                r = n(37561),
                s = n(79835),
                i = n(29683),
                l = n(88911),
                o = n(23100),
                d = n(36366);

            function c(e) { return (0, a.jsx)(d.Z, { label: (0, a.jsx)(l.x, { fontSize: "sm", color: i.O9.textSecondary, children: e.label }), "data-sentry-element": "Tooltip", "data-sentry-component": "QuestionToolTip", "data-sentry-source-file": "QuestionToolTip.tsx", children: (0, a.jsx)(o.xu, { cursor: e.label ? "pointer" : void 0, "data-sentry-element": "Box", "data-sentry-source-file": "QuestionToolTip.tsx", children: "info" === e.iconType ? (0, a.jsx)(r.Z, { style: { display: "block" }, ...e.iconProps }) : (0, a.jsx)(s.Z, { style: { display: "block" }, ...e.iconProps }) }) }) } }, 85002: function(e, t, n) { n.d(t, { W: function() { return I } }); var a = n(85893),
                r = n(67294),
                s = n(204),
                i = n(29222),
                l = n(29683),
                o = n(55791),
                d = n(66075),
                c = n(62468),
                u = n(17336),
                p = n(34151),
                x = n(65291),
                g = n(77374),
                m = n(10191),
                y = n(24804),
                f = n(88911),
                h = n(23438),
                w = n(56880),
                S = n(90634),
                _ = n(90482),
                b = n(1922),
                v = n(75266),
                C = n(51758),
                j = n(19527),
                k = n(1803),
                M = n(84617),
                T = n(5276),
                O = n(2881);

            function Z(e) { let { t } = (0, b.$G)(), n = "swap" === e.variant, c = n ? d.x : o.r0, u = (0, d.g)(e => e.slippage), Z = (0, o.HN)(e => e.slippage), I = n ? u : Z, [D, F] = (0, r.useState)(new _.Z(I).mul(100).toFixed()), [B, A] = (0, r.useState)(!1), H = (0, k.z)(e => { A(!1), F(String(e)) }), P = (0, k.z)(e => { let t = Number(null != e ? e : 0) / 100;
                    (0, M.Nh)(c, t), n ? d.g.setState({ slippage: t }, !1, { type: "SlippageToleranceSettingField" }) : o.HN.setState({ slippage: t }, !1, { type: "SlippageToleranceSettingField" }) }), W = (0, k.z)(() => { A(!1), D || H(0) }), z = (0, r.useCallback)(e => {
                    ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.preventDefault() }, []), N = (0, k.z)(() => { A(!0) }), E = (0, k.z)(() => { P(D || 0), e.onClose() });
                (0, r.useEffect)(() => { F(new _.Z(I).mul(100).toFixed()) }, [I, e.isOpen]); let R = new _.Z(D || 0),
                    V = R.gt("3"),
                    L = R.lt("0.5"),
                    q = V ? t("setting_board.slippage_tolerance_forerun") : L ? t("setting_board.slippage_tolerance_fail") : ""; return (0, a.jsxs)(p.u_, { size: "md", isOpen: e.isOpen, onClose: e.onClose, "data-sentry-element": "Modal", "data-sentry-component": "SlippageSettingModal", "data-sentry-source-file": "SlippageSettingModal.tsx", children: [(0, a.jsx)(x.Z, { "data-sentry-element": "ModalOverlay", "data-sentry-source-file": "SlippageSettingModal.tsx" }), (0, a.jsxs)(g.h, { borderRadius: "20px", border: "1px solid ".concat(l.O9.backgroundDark), boxShadow: "0px 8px 48px 0px #4F53F31A", paddingInline: "2rem", py: "2rem", "data-sentry-element": "ModalContent", "data-sentry-source-file": "SlippageSettingModal.tsx", children: [(0, a.jsx)(m.x, { marginTop: 0, marginBottom: "48px", "data-sentry-element": "ModalHeader", "data-sentry-source-file": "SlippageSettingModal.tsx", children: (0, a.jsxs)(y.U, { spacing: "6px", "data-sentry-element": "HStack", "data-sentry-source-file": "SlippageSettingModal.tsx", children: [(0, a.jsx)(f.x, { "data-sentry-element": "Text", "data-sentry-source-file": "SlippageSettingModal.tsx", children: t(n ? "setting_board.slippage_tolerance_swap" : "setting_board.slippage_tolerance_liquidity") }), (0, a.jsx)(O.m, { label: t(n ? "setting_board.slippage_tolerance_tooltip_swap" : "setting_board.slippage_tolerance_tooltip_liquidity"), iconProps: { color: l.O9.textSecondary }, "data-sentry-element": "QuestionToolTip", "data-sentry-source-file": "SlippageSettingModal.tsx" })] }) }), (0, a.jsx)(h.o, { "data-sentry-element": "ModalCloseButton", "data-sentry-source-file": "SlippageSettingModal.tsx" }), (0, a.jsx)(w.f, { "data-sentry-element": "ModalBody", "data-sentry-source-file": "SlippageSettingModal.tsx", children: (0, a.jsxs)(S.g, { gap: 4, alignItems: "flex-start", "data-sentry-element": "VStack", "data-sentry-source-file": "SlippageSettingModal.tsx", children: [(0, a.jsxs)(s.k, { rowGap: 2, flexWrap: ["wrap", "unset"], justifyContent: "space-between", w: "full", "data-sentry-element": "Flex", "data-sentry-source-file": "SlippageSettingModal.tsx", children: [(0, a.jsx)(s.k, { gap: "2", "data-sentry-element": "Flex", "data-sentry-source-file": "SlippageSettingModal.tsx", children: (n ? [.1, .5, 1] : [1, 2.5, 3.5]).map(e => (0, a.jsx)(i.z, { size: "sm", isActive: Number(D) == e, variant: "capsule-radio", onClick: () => { H(e) }, children: (0, C.k_)((0, j.ZP)(e)) }, e)) }), (0, a.jsxs)(s.k, { alignItems: "center", rounded: "full", "data-sentry-element": "Flex", "data-sentry-source-file": "SlippageSettingModal.tsx", children: [(0, a.jsx)(f.x, { fontSize: "xs", whiteSpace: "nowrap", color: l.O9.textSecondary, "data-sentry-element": "Text", "data-sentry-source-file": "SlippageSettingModal.tsx", children: t("setting_board.custom") }), (0, a.jsx)(v.Z, { variant: "filledDark", value: B ? "" : D, placeholder: D, max: 50, decimals: 2, onBlur: W, onChange: H, onKeyDown: z, onFocus: N, inputSx: { textAlign: "right", rounded: "40px", h: "36px", w: "70px", py: 0, px: "3" }, "data-sentry-element": "DecimalInput", "data-sentry-source-file": "SlippageSettingModal.tsx" }), (0, a.jsx)(f.x, { fontSize: "xs", color: l.O9.textSecondary, "data-sentry-element": "Text", "data-sentry-source-file": "SlippageSettingModal.tsx", children: "%" })] })] }), n && (V || L) ? (0, a.jsxs)(s.k, { px: 4, py: 2, bg: l.O9.warnButtonLightBg, color: l.O9.semanticWarning, fontSize: "sm", fontWeight: "medium", borderRadius: "8px", w: "full", children: [(0, a.jsx)(f.x, { pt: .5, children: (0, a.jsx)(T.Z, {}) }), (0, a.jsx)(f.x, { pl: 2, children: q })] }) : null, (0, a.jsx)(i.z, { w: "full", rounded: "lg", background: l.O9.solidButtonBg, isDisabled: 0 > Number(D), onClick: E, "data-sentry-element": "Button", "data-sentry-source-file": "SlippageSettingModal.tsx", children: (0, a.jsx)(f.x, { fontSize: "md", fontWeight: "medium", bgClip: "text", color: l.O9.buttonSolidText, "data-sentry-element": "Text", "data-sentry-source-file": "SlippageSettingModal.tsx", children: t("button.save") }) })] }) })] })] }) }

            function I(e) { let { variant: t = "swap", onClick: n } = e, { isOpen: p, onClose: x, onToggle: g } = (0, c.q)(), m = (0, d.g)(e => e.slippage), y = (0, o.HN)(e => e.slippage), f = "swap" === t, h = f ? m : y, [w, S] = (0, r.useState)(), [b, v] = (0, r.useState)(!1);
                (0, r.useEffect)(() => { let e = new _.Z(100 * h);
                    S(e.toDecimalPlaces(2).toString()); let t = f && (e.gt("0.5") || e.lt("0.1"));
                    v(t) }, [h, f]); let C = () => { g() }; return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(s.k, { align: "center", onClick: n || C, "data-sentry-element": "Flex", "data-sentry-source-file": "index.tsx", children: (0, a.jsxs)(i.z, { size: "xs", height: "fit-content", py: 1, px: 2, borderRadius: "full", bg: b ? l.O9.warnButtonBg : l.O9.buttonBg01, color: b ? l.O9.semanticWarning : l.O9.textSecondary, fontSize: "sm", fontWeight: "normal", border: b ? "1px solid ".concat(l.O9.semanticWarning) : "1px solid transparent", _hover: { borderColor: l.O9.secondary, color: l.O9.secondary, bg: l.O9.buttonBg01, ".chakra-icon-hover": { fill: l.O9.secondary } }, _focus: { boxShadow: "outline" }, iconSpacing: 1, leftIcon: (0, a.jsx)(u.Z, { width: "14", height: "14", className: "chakra-icon chakra-icon-hover", color: b ? l.O9.semanticWarning : l.O9.textSecondary }), variant: "ghost", "data-sentry-element": "Button", "data-sentry-source-file": "index.tsx", children: [w, "%"] }) }), (0, a.jsx)(Z, { variant: t, isOpen: p, onClose: x, "data-sentry-element": "SlippageSettingModal", "data-sentry-source-file": "index.tsx" })] }) } }, 37561: function(e, t, n) { var a = n(85893),
                r = n(67294);
            t.Z = (0, r.forwardRef)(function(e, t) { return (0, a.jsxs)("svg", { ref: t, width: 12, height: 12, viewBox: "0 0 12 12", fill: "currentColor", className: "chakra-icon", ...e, children: [(0, a.jsx)("path", { d: "M6 0C2.68661 0 0 2.68661 0 6C0 9.31339 2.68661 12 6 12C9.31339 12 12 9.31339 12 6C12 2.68661 9.31339 0 6 0ZM6 10.9821C3.24911 10.9821 1.01786 8.75089 1.01786 6C1.01786 3.24911 3.24911 1.01786 6 1.01786C8.75089 1.01786 10.9821 3.24911 10.9821 6C10.9821 8.75089 8.75089 10.9821 6 10.9821Z" }), (0, a.jsx)("path", { d: "M5.35693 3.64286C5.35693 3.81335 5.42466 3.97687 5.54522 4.09743C5.66578 4.21799 5.82929 4.28571 5.99979 4.28571C6.17029 4.28571 6.3338 4.21799 6.45436 4.09743C6.57492 3.97687 6.64265 3.81335 6.64265 3.64286C6.64265 3.47236 6.57492 3.30885 6.45436 3.18829C6.3338 3.06773 6.17029 3 5.99979 3C5.82929 3 5.66578 3.06773 5.54522 3.18829C5.42466 3.30885 5.35693 3.47236 5.35693 3.64286ZM6.32122 5.14286H5.67836C5.61943 5.14286 5.57122 5.19107 5.57122 5.25V8.89286C5.57122 8.95179 5.61943 9 5.67836 9H6.32122C6.38015 9 6.42836 8.95179 6.42836 8.89286V5.25C6.42836 5.19107 6.38015 5.14286 6.32122 5.14286Z" })] }) }) }, 66075: function(e, t, n) { n.d(t, { x: function() { return k }, g: function() { return T } }); var a = n(59917),
                r = n(17638),
                s = n(55791),
                i = n(13717),
                l = n(88089),
                o = n(56373),
                d = n(45808),
                c = n(85893),
                u = n(1922),
                p = n(88911),
                x = n(46072),
                g = n(84196); let m = { swap: { title: "transaction_history.name_swap", desc: "transaction_history.desc_swap", txHistoryTitle: "transaction_history.name_swap", txHistoryDesc: "transaction_history.desc_swap", components: { sub: (0, c.jsx)(p.x, { as: "span", color: g.O9.textSecondary, fontWeight: "700" }) } } },
                y = e => { let { action: t, values: n = {} } = e, a = m[t]; return { title: x.ZP.t(a.title, n), description: (0, c.jsx)(u.cC, { i18nKey: a.desc, values: n, components: a.components }), txHistoryTitle: a.txHistoryTitle || a.title, txHistoryDesc: a.txHistoryDesc || a.desc, txValues: n } }; var f = n(51758),
                h = n(90482),
                w = n(86221),
                S = n(39777),
                _ = n(81319),
                b = n(85736),
                v = n(58467),
                C = n(48764).Buffer; let j = async() => { let e = s.qr.getState().getPriorityFee(); if (isNaN(parseFloat(String(e) || ""))) { var t; let e = await (0, w.b)(),
                            { avg: n } = null !== (t = null == e ? void 0 : e[15]) && void 0 !== t ? t : {}; if (!n) return; return { units: 6e5, microLamports: n } } return { units: 6e5, microLamports: new h.Z(e).mul(10 ** r._Fs.decimals).toDecimalPlaces(0).toNumber() } },
                k = "_r_swap_slippage_",
                M = { slippage: .005 },
                T = (0, s.MT)(() => ({...M, swapTokenAct: async e => { var t, n, c, u; let { swapResponse: p, wrapSol: g, unwrapSol: m = !1, onCloseToast: w, ...k } = e, { publicKey: M, Nova Bot: T, txVersion: O, connection: Z, signAllTransactions: I, urlConfigs: D } = s.qr.getState(); if (!T || !Z) { console.error("no connection"); return } if (!M || !I) { console.error("no wallet"); return } try { let e = s.uM.getState().tokenMap,
                                [c, u] = [e.get(p.data.inputMint), e.get(p.data.outputMint)],
                                [F, B] = [(0, o.Th)(p.data.inputMint), (0, o.Th)(p.data.outputMint)],
                                A = await T.account.getCreatedTokenAccount({ programId: new a.nh(null !== (t = c.programId) && void 0 !== t ? t : v.H_), mint: new a.nh(c.address), associatedOnly: !1 }); if (!A && !F) { console.error("no input token acc"); return } let H = await T.account.getCreatedTokenAccount({ programId: new a.nh(null !== (n = u.programId) && void 0 !== n ? n : v.H_), mint: new a.nh(u.address) }),
                                P = await j(),
                                W = O === r.eVA.V0,
                                { data: z, success: N } = await d.ZP.post("".concat(D.SWAP_HOST).concat(D.SWAP_TX).concat("BaseIn" === p.data.swapType ? "swap-base-in" : "swap-base-out"), { wallet: M.toBase58(), computeUnitPriceMicroLamports: new h.Z((null == P ? void 0 : P.microLamports) || 0).toFixed(0), swapResponse: p, txVersion: W ? "V0" : "LEGACY", wrapSol: F, unwrapSol: m, inputAccount: F ? void 0 : null == A ? void 0 : A.toBase58(), outputAccount: B ? void 0 : null == H ? void 0 : H.toBase58() }); if (!N) { i.w.next({ title: "Make Transaction Error", description: "Please try again, or contact us on discord", status: "error" }), w && w(); return } let E = (z || []).map(e => C.from(e.transaction, "base64")),
                                R = E.map(e => W ? a.GS.deserialize(e) : a.YW.from(e)),
                                V = await I(R);
                            console.log("simulate tx string:", V.map(r.Lj)); let L = V.length,
                                { toastId: q, handler: G } = (0, S.xl)({ txLength: L, ...k }),
                                Q = y({ action: "swap", values: { amountA: (0, f.Hk)(new h.Z(p.data.inputAmount).div(10 ** (c.decimals || 0)).toString(), c.decimals), symbolA: (0, o.h3)({ mint: c, transformSol: g }), amountB: (0, f.Hk)(new h.Z(p.data.outputAmount).div(10 ** (u.decimals || 0)).toString(), u.decimals), symbolB: (0, o.h3)({ mint: u, transformSol: m }) } }),
                                U = [],
                                K = e => 0 === e ? "transaction_history.set_up" : e === U.length - 1 && U.length > 2 ? "transaction_history.clean_up" : "transaction_history.name_swap",
                                Y = 0,
                                $ = async() => { if (!V[Y]) return; let e = V[Y],
                                        t = W ? await Z.sendTransaction(e, { skipPreflight: !0, maxRetries: 0 }) : await Z.sendRawTransaction(e.serialize(), { skipPreflight: !0, maxRetries: 0 }); if (U.push({ txId: t, signedTx: e, status: "sent" }), 1 === V.length) { l.aV.next({ txId: t, ...Q, signedTx: e, onClose: w, isSwap: !0, mintInfo: [c, u], ...k }); return } let n = 0,
                                        a = Z.onSignature(t, e => { n && window.clearTimeout(n); let a = U.findIndex(e => e.txId === t);
                                            a > -1 && (U[a].status = e.err ? "error" : "success"), (0, _.WH)(U); let r = (0, b.a)(e);
                                            (0, S.r4)({ toastId: q, processedId: U.map(e => ({...e, status: "sent" === e.status ? "info" : e.status })), txLength: L, meta: {...Q, title: r ? x.ZP.t("error.error.swap_slippage_error_title") : Q.title, description: r ? x.ZP.t("error.error.swap_slippage_error_desc") : Q.description }, isSwap: !0, handler: G, getSubTxTitle: K, onCloseToast: w }), e.err || $() }, "processed");
                                    Z.getSignatureStatuses([t]), (0, _.WH)(U), (0, S.r4)({ toastId: q, processedId: U.map(e => ({...e, status: "sent" === e.status ? "info" : e.status })), txLength: L, meta: Q, isSwap: !0, handler: G, getSubTxTitle: K, onCloseToast: w }), n = window.setTimeout(() => { Z.removeSignatureListener(a) }, l.QE), Y++ };
                            $() } catch (e) { null === (c = k.onError) || void 0 === c || c.call(k), "tx failed" !== e.message && i.w.next({ txError: e }) } finally { null === (u = k.onFinally) || void 0 === u || u.call(k) } return "" }, unWrapSolAct: async e => { let { amount: t, onSent: n, onError: a, ...o } = e, d = s.qr.getState().Nova Bot; if (!d) return; let { execute: c } = await d.tradeV2.unWrapWSol({ amount: t }), u = { amount: (0, f.Lu)(new h.Z(t).div(10 ** r._Fs.decimals).toFixed(r._Fs.decimals)) }, p = { title: x.ZP.t("swap.unwrap_all_wsol", u), description: x.ZP.t("swap.unwrap_all_wsol_desc", u), txHistoryTitle: "swap.unwrap_all_wsol", txHistoryDesc: "swap.unwrap_all_wsol_desc", txValues: u }; return c().then(e => { let { txId: t, signedTx: a } = e; return null == n || n(), l.aV.next({ txId: t, signedTx: a, ...p, ...o }), t }).catch(e => (null == a || a(), i.w.next({ txError: e, ...p }), "")) }, wrapSolAct: async e => { let t = s.qr.getState().Nova Bot; if (!t) return; let { execute: n } = await t.tradeV2.wrapWSol(new h.Z(e).mul(10 ** r._Fs.decimals).toFixed(0)); return n().then(e => { let { txId: t, signedTx: n } = e; return l.aV.next({ txId: t, signedTx: n }), t }).catch(e => (i.w.next({ txError: e }), "")) } }), "useSwapStore") }, 70632: function(e, t, n) { n.d(t, { R6: function() { return a }, mv: function() { return s } }); let a = new RegExp(/^[0-9.,]$/),
                r = new RegExp(/[0-9.]/gi),
                s = (e, t) => { var n; let a = t ? String(t) : ""; return e && (null === (n = String(e).match(r)) || void 0 === n ? void 0 : n.join("")) || a } } }
]);