import{S as G,i as J,s as K,C as W,L as I,k as A,l as C,m as B,h as m,M as L,b as p,D as N,E as X,F as Y,G as Z,N as y,H as w,f as g,t as h,I as x,P,J as ee,Q as te,K as ae,w as $,x as v,y as b,z as E,e as q,g as se,d as le,T as ne,a as Q,c as R,q as T,r as V,n as D,R as H,u as j}from"../../chunks/index-fdef72cc.js";import{c as M,u as re,f as ce,a as k,L as ie,I as oe}from"../../chunks/Subheader-7f9c2f72.js";import{b as S}from"../../chunks/paths-b4419565.js";function ue(r){let e,s,a,t,u,n;const i=r[9].default,l=W(i,r,r[8],null);let o=[{class:s=M({[r[1]]:!0,"mdc-card":!0,"mdc-card--outlined":r[2]==="outlined","smui-card--padded":r[3]})},r[6]],f={};for(let c=0;c<o.length;c+=1)f=I(f,o[c]);return{c(){e=A("div"),l&&l.c(),this.h()},l(c){e=C(c,"DIV",{class:!0});var d=B(e);l&&l.l(d),d.forEach(m),this.h()},h(){L(e,f)},m(c,d){p(c,e,d),l&&l.m(e,null),r[10](e),t=!0,u||(n=[N(a=re.call(null,e,r[0])),N(r[5].call(null,e))],u=!0)},p(c,[d]){l&&l.p&&(!t||d&256)&&X(l,i,c,c[8],t?Z(i,c[8],d,null):Y(c[8]),null),L(e,f=y(o,[(!t||d&14&&s!==(s=M({[c[1]]:!0,"mdc-card":!0,"mdc-card--outlined":c[2]==="outlined","smui-card--padded":c[3]})))&&{class:s},d&64&&c[6]])),a&&w(a.update)&&d&1&&a.update.call(null,c[0])},i(c){t||(g(l,c),t=!0)},o(c){h(l,c),t=!1},d(c){c&&m(e),l&&l.d(c),r[10](null),u=!1,x(n)}}}function fe(r,e,s){const a=["use","class","variant","padded","getElement"];let t=P(e,a),{$$slots:u={},$$scope:n}=e;const i=ce(ee());let{use:l=[]}=e,{class:o=""}=e,{variant:f="raised"}=e,{padded:c=!1}=e,d;function O(){return d}function U(_){ae[_?"unshift":"push"](()=>{d=_,s(4,d)})}return r.$$set=_=>{e=I(I({},e),te(_)),s(6,t=P(e,a)),"use"in _&&s(0,l=_.use),"class"in _&&s(1,o=_.class),"variant"in _&&s(2,f=_.variant),"padded"in _&&s(3,c=_.padded),"$$scope"in _&&s(8,n=_.$$scope)},[l,o,f,c,d,i,t,O,n,u,U]}class de extends G{constructor(e){super(),J(this,e,fe,ue,K,{use:0,class:1,variant:2,padded:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const _e=k({class:"smui-card__content",tag:"div"});k({class:"mdc-card__media-content",tag:"div"});k({class:"mdc-card__action-buttons",tag:"div"});k({class:"mdc-card__action-icons",tag:"div"});function z(r,e,s){const a=r.slice();return a[1]=e[s],a}function me(r){let e=r[1].body.slice(0,100)+"",s;return{c(){s=T(e)},l(a){s=V(a,e)},m(a,t){p(a,s,t)},p(a,t){t&1&&e!==(e=a[1].body.slice(0,100)+"")&&j(s,e)},d(a){a&&m(s)}}}function ge(r){let e,s,a=r[1].title+"",t,u,n,i,l;return i=new _e({props:{$$slots:{default:[me]},$$scope:{ctx:r}}}),{c(){e=A("h2"),s=A("a"),t=T(a),n=Q(),$(i.$$.fragment),this.h()},l(o){e=C(o,"H2",{});var f=B(e);s=C(f,"A",{href:!0});var c=B(s);t=V(c,a),c.forEach(m),f.forEach(m),n=R(o),v(i.$$.fragment,o),this.h()},h(){D(s,"href",u=S+"/posts/"+r[1].id)},m(o,f){p(o,e,f),H(e,s),H(s,t),p(o,n,f),b(i,o,f),l=!0},p(o,f){(!l||f&1)&&a!==(a=o[1].title+"")&&j(t,a),(!l||f&1&&u!==(u=S+"/posts/"+o[1].id))&&D(s,"href",u);const c={};f&17&&(c.$$scope={dirty:f,ctx:o}),i.$set(c)},i(o){l||(g(i.$$.fragment,o),l=!0)},o(o){h(i.$$.fragment,o),l=!1},d(o){o&&m(e),o&&m(n),E(i,o)}}}function he(r){let e,s,a;return e=new de({props:{variant:"outlined",padded:!0,class:"top-page-item-card",$$slots:{default:[ge]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment),s=Q()},l(t){v(e.$$.fragment,t),s=R(t)},m(t,u){b(e,t,u),p(t,s,u),a=!0},p(t,u){const n={};u&17&&(n.$$scope={dirty:u,ctx:t}),e.$set(n)},i(t){a||(g(e.$$.fragment,t),a=!0)},o(t){h(e.$$.fragment,t),a=!1},d(t){E(e,t),t&&m(s)}}}function F(r){let e,s;return e=new oe({props:{class:"top-page-item",nonInteractive:!0,$$slots:{default:[he]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(a){v(e.$$.fragment,a)},m(a,t){b(e,a,t),s=!0},p(a,t){const u={};t&17&&(u.$$scope={dirty:t,ctx:a}),e.$set(u)},i(a){s||(g(e.$$.fragment,a),s=!0)},o(a){h(e.$$.fragment,a),s=!1},d(a){E(e,a)}}}function pe(r){let e,s,a=r[0].issues,t=[];for(let n=0;n<a.length;n+=1)t[n]=F(z(r,a,n));const u=n=>h(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=q()},l(n){for(let i=0;i<t.length;i+=1)t[i].l(n);e=q()},m(n,i){for(let l=0;l<t.length;l+=1)t[l].m(n,i);p(n,e,i),s=!0},p(n,i){if(i&1){a=n[0].issues;let l;for(l=0;l<a.length;l+=1){const o=z(n,a,l);t[l]?(t[l].p(o,i),g(t[l],1)):(t[l]=F(o),t[l].c(),g(t[l],1),t[l].m(e.parentNode,e))}for(se(),l=a.length;l<t.length;l+=1)u(l);le()}},i(n){if(!s){for(let i=0;i<a.length;i+=1)g(t[i]);s=!0}},o(n){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)h(t[i]);s=!1},d(n){ne(t,n),n&&m(e)}}}function $e(r){let e,s;return e=new ie({props:{$$slots:{default:[pe]},$$scope:{ctx:r}}}),{c(){$(e.$$.fragment)},l(a){v(e.$$.fragment,a)},m(a,t){b(e,a,t),s=!0},p(a,[t]){const u={};t&17&&(u.$$scope={dirty:t,ctx:a}),e.$set(u)},i(a){s||(g(e.$$.fragment,a),s=!0)},o(a){h(e.$$.fragment,a),s=!1},d(a){E(e,a)}}}function ve(r,e,s){let{data:a}=e;return r.$$set=t=>{"data"in t&&s(0,a=t.data)},[a]}class Ie extends G{constructor(e){super(),J(this,e,ve,$e,K,{data:0})}}export{Ie as default};