function p(){}function K(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function H(){return Object.create(null)}function g(t){t.forEach(B)}function j(t){return typeof t=="function"}function mt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function pt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function Q(t){return Object.keys(t).length===0}function U(t,...n){if(t==null)return p;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function yt(t,n,e){t.$$.on_destroy.push(U(n,e))}function gt(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?K(e.ctx.slice(),t[1](i(n))):e.ctx}function xt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function bt(t,n,e,i,r,o){if(r){const s=q(n,e,i,o);t.p(s,r)}}function $t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function wt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function Et(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function vt(t){return t&&j(t.destroy)?t.destroy:p}let N=!1;function V(){N=!0}function X(){N=!1}function Y(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:Y(1,r,x=>n[e[x]].claim_order,u))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const o=[],s=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);l>=c;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[c],f)}}function tt(t,n){if(N){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function nt(t,n,e){t.insertBefore(n,e||null)}function et(t,n,e){N&&!e?tt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function Nt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function Tt(){return S(" ")}function At(){return S("")}function kt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function jt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function St(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Ct(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:z(t,i,n[i])}function Mt(t,n){Object.keys(n).forEach(e=>{rt(t,e,n[e])})}function rt(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:z(t,n,e)}function st(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,n,e,i,r=!1){F(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ct(t,n,e,i){return I(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Ht(t,n,e){return ct(t,n,e,G)}function ot(t,n){return I(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Dt(t){return ot(t," ")}function D(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Lt(t,n){const e=D(t,"HTML_TAG_START",0),i=D(t,"HTML_TAG_END",e);if(e===i)return new L(void 0,n);F(t);const r=t.splice(e,i-e+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(o,n)}function Ot(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Pt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function lt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}class ut{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=it(e.nodeName):this.e=G(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(v)}}class L extends ut{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}}function Bt(t,n){return new t(n)}let y;function m(t){y=t}function d(){if(!y)throw new Error("Function called outside component initialization");return y}function qt(t){d().$$.on_mount.push(t)}function Gt(t){d().$$.after_update.push(t)}function zt(t){d().$$.on_destroy.push(t)}function Ft(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=lt(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function It(t,n){return d().$$.context.set(t,n),n}function Rt(t){return d().$$.context.get(t)}function Wt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],O=[],w=[],P=[],R=Promise.resolve();let A=!1;function W(){A||(A=!0,R.then(J))}function Jt(){return W(),R}function k(t){w.push(t)}const T=new Set;let $=0;function J(){const t=y;do{for(;$<h.length;){const n=h[$];$++,m(n),at(n.$$)}for(m(null),h.length=0,$=0;O.length;)O.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];T.has(e)||(T.add(e),e())}w.length=0}while(h.length);for(;P.length;)P.pop()();A=!1,T.clear(),m(t)}function at(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const E=new Set;let _;function Kt(){_={r:0,c:[],p:_}}function Qt(){_.r||g(_.c),_=_.p}function ft(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Ut(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Vt(t,n){const e={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=n[o];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[o]=l}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Xt(t){return typeof t=="object"&&t!==null?t:{}}function Yt(t){t&&t.c()}function Zt(t,n){t&&t.l(n)}function _t(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||k(()=>{const s=t.$$.on_mount.map(B).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),o.forEach(k)}function dt(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ht(t,n){t.$$.dirty[0]===-1&&(h.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function tn(t,n,e,i,r,o,s,l=[-1]){const c=y;m(t);const u=t.$$={fragment:null,ctx:[],props:o,update:p,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,x,...C)=>{const M=C.length?C[0]:x;return u.ctx&&r(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&ht(t,a)),x}):[],u.update(),f=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){V();const a=st(n.target);u.fragment&&u.fragment.l(a),a.forEach(v)}else u.fragment&&u.fragment.c();n.intro&&ft(t.$$.fragment),_t(t,n.target,n.anchor,n.customElement),X(),J()}m(c)}class nn{$destroy(){dt(this,1),this.$destroy=p}$on(n,e){if(!j(e))return p;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{zt as $,Jt as A,p as B,gt as C,vt as D,bt as E,$t as F,xt as G,j as H,g as I,d as J,O as K,K as L,Ct as M,Vt as N,Xt as O,Et as P,wt as Q,tt as R,nn as S,Nt as T,kt as U,Wt as V,jt as W,St as X,Mt as Y,Rt as Z,It as _,Tt as a,yt as a0,pt as a1,L as a2,Lt as a3,Ft as a4,et as b,Dt as c,Qt as d,At as e,ft as f,Kt as g,v as h,tn as i,Gt as j,G as k,Ht as l,st as m,z as n,qt as o,Pt as p,S as q,ot as r,mt as s,Ut as t,Ot as u,Bt as v,Yt as w,Zt as x,_t as y,dt as z};