!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="17585628-9fad-4a76-91b3-56b4f6efa085",e._sentryDebugIdIdentifier="sentry-dbid-17585628-9fad-4a76-91b3-56b4f6efa085")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3278],{66303:function(e,n,t){t.d(n,{j:function(){return c}});var r=t(36953),u=t(15900),l=t(35059),i=t(19184),o=t(25432),a=t(85893),s=(0,l.G)((e,n)=>{let t=(0,r.x)();return(0,a.jsx)(i.m.button,{ref:n,...e,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...t.button}})}),c=(0,l.G)((e,n)=>{let{children:t,as:r,...l}=e,c=(0,u.zZ)(l,n);return(0,a.jsx)(r||s,{...c,className:(0,o.cx)("chakra-menu__menu-button",e.className),children:(0,a.jsx)(i.m.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:e.children})})});c.displayName="MenuButton"},15900:function(e,n,t){t.d(n,{wN:function(){return h},Kb:function(){return _},H9:function(){return D},zZ:function(){return M},Xh:function(){return k},iX:function(){return S},_l:function(){return j},Qh:function(){return I}});var r=t(67294),u=t(67562),l=t(73614),i=t(32654),o=t(40250),a=t(85075),s=t(35155);function c(e,n){var t;let r=e.target;if(r){let e=d(r);if(!e.contains(r))return!1}return!(null==(t=n.current)?void 0:t.contains(r))}function d(e){var n;return null!=(n=null==e?void 0:e.ownerDocument)?n:document}var f=t(93694),m=t(55227),p=t(52366),v=t(81103),b=t(25432),x=t(92625),[h,y,E,w]=(0,l.n)(),[_,k]=(0,m.k)({strict:!1,name:"MenuContext"});function C(e){var n;return null!=(n=null==e?void 0:e.ownerDocument)?n:document}function g(e){let n=C(e);return n.activeElement===e}function D(e={}){let{id:n,closeOnSelect:t=!0,closeOnBlur:u=!0,initialFocusRef:l,autoSelect:m=!0,isLazy:v,isOpen:b,defaultIsOpen:x,onClose:h,onOpen:y,placement:w="bottom-start",lazyBehavior:_="unmount",direction:k,computePositionOnMount:g=!1,...D}=e,M=(0,r.useRef)(null),N=(0,r.useRef)(null),j=E(),I=(0,r.useCallback)(()=>{requestAnimationFrame(()=>{var e;null==(e=M.current)||e.focus({preventScroll:!1})})},[]),S=(0,r.useCallback)(()=>{let e=setTimeout(()=>{var e;if(l)null==(e=l.current)||e.focus();else{let e=j.firstEnabled();e&&F(e.index)}});X.current.add(e)},[j,l]),L=(0,r.useCallback)(()=>{let e=setTimeout(()=>{let e=j.lastEnabled();e&&F(e.index)});X.current.add(e)},[j]),P=(0,r.useCallback)(()=>{null==y||y(),m?S():I()},[m,S,I,y]),{isOpen:O,onOpen:T,onClose:A,onToggle:R}=(0,a.q)({isOpen:b,defaultIsOpen:x,onClose:h,onOpen:P});!function(e){let{ref:n,handler:t,enabled:u=!0}=e,l=(0,s.W)(t),i=(0,r.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}),o=i.current;(0,r.useEffect)(()=>{if(!u)return;let e=e=>{c(e,n)&&(o.isPointerDown=!0)},r=e=>{if(o.ignoreEmulatedMouseEvents){o.ignoreEmulatedMouseEvents=!1;return}o.isPointerDown&&t&&c(e,n)&&(o.isPointerDown=!1,l(e))},i=e=>{o.ignoreEmulatedMouseEvents=!0,t&&o.isPointerDown&&c(e,n)&&(o.isPointerDown=!1,l(e))},a=d(n.current);return a.addEventListener("mousedown",e,!0),a.addEventListener("mouseup",r,!0),a.addEventListener("touchstart",e,!0),a.addEventListener("touchend",i,!0),()=>{a.removeEventListener("mousedown",e,!0),a.removeEventListener("mouseup",r,!0),a.removeEventListener("touchstart",e,!0),a.removeEventListener("touchend",i,!0)}},[t,n,l,o,u])}({enabled:O&&u,ref:M,handler:e=>{var n;(null==(n=N.current)?void 0:n.contains(e.target))||A()}});let q=(0,o.D)({...D,enabled:O||g,placement:w,direction:k}),[z,F]=(0,r.useState)(-1);(0,p.r)(()=>{O||F(-1)},[O]),(0,i.C)(M,{focusRef:N,visible:O,shouldFocus:!0});let G=(0,f.h)({isOpen:O,ref:M}),[K,U]=function(e,...n){let t=(0,r.useId)(),u=e||t;return(0,r.useMemo)(()=>n.map(e=>`${e}-${u}`),[u,n])}(n,"menu-button","menu-list"),W=(0,r.useCallback)(()=>{T(),I()},[T,I]),X=(0,r.useRef)(new Set([]));!function(e,n=[]){(0,r.useEffect)(()=>()=>e(),n)}(()=>{X.current.forEach(e=>clearTimeout(e)),X.current.clear()});let $=(0,r.useCallback)(()=>{T(),S()},[S,T]),B=(0,r.useCallback)(()=>{T(),L()},[T,L]),H=(0,r.useCallback)(()=>{var e,n;let t=C(M.current),r=null==(e=M.current)?void 0:e.contains(t.activeElement);if(!(O&&!r))return;let u=null==(n=j.item(z))?void 0:n.node;null==u||u.focus()},[O,z,j]),Z=(0,r.useRef)(null);return{openAndFocusMenu:W,openAndFocusFirstItem:$,openAndFocusLastItem:B,onTransitionEnd:H,unstable__animationState:G,descendants:j,popper:q,buttonId:K,menuId:U,forceUpdate:q.forceUpdate,orientation:"vertical",isOpen:O,onToggle:R,onOpen:T,onClose:A,menuRef:M,buttonRef:N,focusedIndex:z,closeOnSelect:t,closeOnBlur:u,autoSelect:m,setFocusedIndex:F,isLazy:v,lazyBehavior:_,initialFocusRef:l,rafId:Z}}function M(e={},n=null){let t=k(),{onToggle:u,popper:l,openAndFocusFirstItem:i,openAndFocusLastItem:o}=t,a=(0,r.useCallback)(e=>{let n=e.key,t={Enter:i,ArrowDown:i,ArrowUp:o}[n];t&&(e.preventDefault(),e.stopPropagation(),t(e))},[i,o]);return{...e,ref:(0,v.lq)(t.buttonRef,n,l.referenceRef),id:t.buttonId,"data-active":(0,b.PB)(t.isOpen),"aria-expanded":t.isOpen,"aria-haspopup":"menu","aria-controls":t.menuId,onClick:(0,b.v0)(e.onClick,u),onKeyDown:(0,b.v0)(e.onKeyDown,a)}}function N(e){var n;return function(e){var n;if(!(null!=e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE))return!1;let t=null!=(n=e.ownerDocument.defaultView)?n:window;return e instanceof t.HTMLElement}(e)&&!!(null==(n=null==e?void 0:e.getAttribute("role"))?void 0:n.startsWith("menuitem"))}function j(e={},n=null){let t=k();if(!t)throw Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");let{focusedIndex:u,setFocusedIndex:l,menuRef:i,isOpen:o,onClose:a,menuId:s,isLazy:c,lazyBehavior:d,unstable__animationState:f}=t,m=y(),p=function(e={}){let{timeout:n=300,preventDefault:t=()=>!0}=e,[u,l]=(0,r.useState)([]),i=(0,r.useRef)(),o=()=>{i.current&&(clearTimeout(i.current),i.current=null)},a=()=>{o(),i.current=setTimeout(()=>{l([]),i.current=null},n)};return(0,r.useEffect)(()=>o,[]),function(e){return n=>{if("Backspace"===n.key){let e=[...u];e.pop(),l(e);return}if(function(e){let{key:n}=e;return 1===n.length||n.length>1&&/[^a-zA-Z0-9]/.test(n)}(n)){let r=u.concat(n.key);t(n)&&(n.preventDefault(),n.stopPropagation()),l(r),e(r.join("")),a()}}}}({preventDefault:e=>" "!==e.key&&N(e.target)}),h=(0,r.useCallback)(e=>{if(!e.currentTarget.contains(e.target))return;let n=e.key,t={Tab:e=>e.preventDefault(),Escape:a,ArrowDown:()=>{let e=m.nextEnabled(u);e&&l(e.index)},ArrowUp:()=>{let e=m.prevEnabled(u);e&&l(e.index)}}[n];if(t){e.preventDefault(),t(e);return}let r=p(e=>{let n=function(e,n,t,r){if(null==n)return r;if(!r){let r=e.find(e=>t(e).toLowerCase().startsWith(n.toLowerCase()));return r}let u=e.filter(e=>t(e).toLowerCase().startsWith(n.toLowerCase()));if(u.length>0){let n;if(u.includes(r)){let e=u.indexOf(r);return(n=e+1)===u.length&&(n=0),u[n]}return n=e.indexOf(u[0]),e[n]}return r}(m.values(),e,e=>{var n,t;return null!=(t=null==(n=null==e?void 0:e.node)?void 0:n.textContent)?t:""},m.item(u));if(n){let e=m.indexOf(n.node);l(e)}});N(e.target)&&r(e)},[m,u,p,a,l]),E=(0,r.useRef)(!1);o&&(E.current=!0);let w=(0,x.k)({wasSelected:E.current,enabled:c,mode:d,isSelected:f.present});return{...e,ref:(0,v.lq)(i,n),children:w?e.children:null,tabIndex:-1,role:"menu",id:s,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:(0,b.v0)(e.onKeyDown,h)}}function I(e={}){let{popper:n,isOpen:t}=k();return n.getPopperProps({...e,style:{visibility:t?"visible":"hidden",...e.style}})}function S(e={},n=null){let{onMouseEnter:t,onMouseMove:l,onMouseLeave:i,onClick:o,onFocus:a,isDisabled:s,isFocusable:c,closeOnSelect:d,type:f,...m}=e,b=k(),{setFocusedIndex:x,focusedIndex:h,closeOnSelect:y,onClose:E,menuRef:_,isOpen:C,menuId:D,rafId:M}=b,j=(0,r.useRef)(null),I=`${D}-menuitem-${(0,r.useId)()}`,{index:S,register:L}=w({disabled:s&&!c}),P=(0,r.useCallback)(e=>{null==t||t(e),s||x(S)},[x,S,s,t]),O=(0,r.useCallback)(e=>{null==l||l(e),j.current&&!g(j.current)&&P(e)},[P,l]),T=(0,r.useCallback)(e=>{null==i||i(e),s||x(-1)},[x,s,i]),A=(0,r.useCallback)(e=>{null==o||o(e),N(e.currentTarget)&&(null!=d?d:y)&&E()},[E,o,y,d]),R=(0,r.useCallback)(e=>{null==a||a(e),x(S)},[x,a,S]),q=S===h,z=s&&!c;(0,p.r)(()=>{C&&(q&&!z&&j.current?(M.current&&cancelAnimationFrame(M.current),M.current=requestAnimationFrame(()=>{var e;null==(e=j.current)||e.focus(),M.current=null})):_.current&&!g(_.current)&&_.current.focus({preventScroll:!0}))},[q,z,_,C]);let F=(0,u.h)({onClick:A,onFocus:R,onMouseEnter:P,onMouseMove:O,onMouseLeave:T,ref:(0,v.lq)(L,j,n),isDisabled:s,isFocusable:c});return{...m,...F,type:null!=f?f:F.type,id:I,role:"menuitem",tabIndex:q?0:-1}}},46887:function(e,n,t){t.d(n,{q:function(){return f}});var r=t(36953),u=t(15900),l=t(25432),i=t(19184),o=t(35059),a=t(83423),s=t(85893),c={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}},d=(0,i.m)(a.E.div),f=(0,o.G)(function(e,n){var t,o;let{rootProps:a,motionProps:f,...m}=e,{isOpen:p,onTransitionEnd:v,unstable__animationState:b}=(0,u.Xh)(),x=(0,u._l)(m,n),h=(0,u.Qh)(a),y=(0,r.x)();return(0,s.jsx)(i.m.div,{...h,__css:{zIndex:null!=(o=e.zIndex)?o:null==(t=y.list)?void 0:t.zIndex},children:(0,s.jsx)(d,{variants:c,initial:!1,animate:p?"enter":"exit",__css:{outline:0,...y.list},...f,className:(0,l.cx)("chakra-menu__menu-list",x.className),...x,onUpdate:v,onAnimationComplete:(0,l.PP)(b.onComplete,x.onAnimationComplete)})})});f.displayName="MenuList"},36953:function(e,n,t){t.d(n,{v:function(){return m},x:function(){return f}});var r=t(15900),u=t(55227),l=t(91639),i=t(33179),o=t(75119),a=t(25432),s=t(67294),c=t(85893),[d,f]=(0,u.k)({name:"MenuStylesContext",errorMessage:"useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Menu />\" "}),m=e=>{let{children:n}=e,t=(0,l.jC)("Menu",e),u=(0,i.Lr)(e),{direction:f}=(0,o.F)(),{descendants:m,...p}=(0,r.H9)({...u,direction:f}),v=(0,s.useMemo)(()=>p,[p]),{isOpen:b,onClose:x,forceUpdate:h}=v;return(0,c.jsx)(r.wN,{value:m,children:(0,c.jsx)(r.Kb,{value:v,children:(0,c.jsx)(d,{value:t,children:(0,a.Pu)(n,{isOpen:b,onClose:x,forceUpdate:h})})})})};m.displayName="Menu"},40989:function(e,n,t){t.d(n,{s:function(){return m}});var r=t(36953),u=t(35059),l=t(19184),i=t(85893),o=(0,u.G)((e,n)=>{let t=(0,r.x)();return(0,i.jsx)(l.m.span,{ref:n,...e,__css:t.command,className:"chakra-menu__command"})});o.displayName="MenuCommand";var a=t(67294),s=(0,u.G)((e,n)=>{let{type:t,...u}=e,o=(0,r.x)(),s=u.as||t?null!=t?t:void 0:"button",c=(0,a.useMemo)(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...o.item}),[o.item]);return(0,i.jsx)(l.m.button,{ref:n,type:s,...u,__css:c})}),c=t(15900),d=t(25432),f=e=>{let{className:n,children:t,...r}=e,u=a.Children.only(t),o=(0,a.isValidElement)(u)?(0,a.cloneElement)(u,{focusable:"false","aria-hidden":!0,className:(0,d.cx)("chakra-menu__icon",u.props.className)}):null,s=(0,d.cx)("chakra-menu__icon-wrapper",n);return(0,i.jsx)(l.m.span,{className:s,...r,__css:{display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:o})};f.displayName="MenuIcon";var m=(0,u.G)((e,n)=>{let{icon:t,iconSpacing:r="0.75rem",command:u,commandSpacing:l="0.75rem",children:a,...m}=e,p=(0,c.iX)(m,n),v=t||u?(0,i.jsx)("span",{style:{pointerEvents:"none",flex:1},children:a}):a;return(0,i.jsxs)(s,{...p,className:(0,d.cx)("chakra-menu__menuitem",p.className),children:[t&&(0,i.jsx)(f,{fontSize:"0.8em",marginEnd:r,children:t}),v,u&&(0,i.jsx)(o,{marginStart:l,children:u})]})});m.displayName="MenuItem"}}]);