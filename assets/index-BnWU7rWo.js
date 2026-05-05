(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Il(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Dt={},jr=[],on=()=>{},xf=()=>!1,To=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),wo=e=>e.startsWith("onUpdate:"),ce=Object.assign,Al=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Lm=Object.prototype.hasOwnProperty,St=(e,t)=>Lm.call(e,t),ut=Array.isArray,$r=e=>ci(e)==="[object Map]",Mf=e=>ci(e)==="[object Set]",Su=e=>ci(e)==="[object Date]",ft=e=>typeof e=="function",qt=e=>typeof e=="string",fn=e=>typeof e=="symbol",Ct=e=>e!==null&&typeof e=="object",Lf=e=>(Ct(e)||ft(e))&&ft(e.then)&&ft(e.catch),Ff=Object.prototype.toString,ci=e=>Ff.call(e),Fm=e=>ci(e).slice(8,-1),Uf=e=>ci(e)==="[object Object]",bl=e=>qt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ns=Il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Io=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Um=/-\w/g,be=Io(e=>e.replace(Um,t=>t.slice(1).toUpperCase())),Bm=/\B([A-Z])/g,Ar=Io(e=>e.replace(Bm,"-$1").toLowerCase()),Ao=Io(e=>e.charAt(0).toUpperCase()+e.slice(1)),ua=Io(e=>e?`on${Ao(e)}`:""),sn=(e,t)=>!Object.is(e,t),ha=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Bf=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},jm=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ru;const bo=()=>Ru||(Ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function So(e){if(ut(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=qt(r)?Hm(r):So(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(qt(e)||Ct(e))return e}const $m=/;(?![^(]*\))/g,qm=/:([^]+)/,zm=/\/\*[^]*?\*\//g;function Hm(e){const t={};return e.replace(zm,"").split($m).forEach(n=>{if(n){const r=n.split(qm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function zn(e){let t="";if(qt(e))t=e;else if(ut(e))for(let n=0;n<e.length;n++){const r=zn(e[n]);r&&(t+=r+" ")}else if(Ct(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Km="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gm=Il(Km);function jf(e){return!!e||e===""}function Wm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Sl(e[r],t[r]);return n}function Sl(e,t){if(e===t)return!0;let n=Su(e),r=Su(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=fn(e),r=fn(t),n||r)return e===t;if(n=ut(e),r=ut(t),n||r)return n&&r?Wm(e,t):!1;if(n=Ct(e),r=Ct(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Sl(e[a],t[a]))return!1}}return String(e)===String(t)}const $f=e=>!!(e&&e.__v_isRef===!0),qe=e=>qt(e)?e:e==null?"":ut(e)||Ct(e)&&(e.toString===Ff||!ft(e.toString))?$f(e)?qe(e.value):JSON.stringify(e,qf,2):String(e),qf=(e,t)=>$f(t)?qf(e,t.value):$r(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[fa(r,i)+" =>"]=s,n),{})}:Mf(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fa(n))}:fn(t)?fa(t):Ct(t)&&!ut(t)&&!Uf(t)?String(t):t,fa=(e,t="")=>{var n;return fn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let de;class Qm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=de,!t&&de&&(this.index=(de.scopes||(de.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=de;try{return de=this,t()}finally{de=n}}}on(){++this._on===1&&(this.prevScope=de,de=this)}off(){if(this._on>0&&--this._on===0){if(de===this)de=this.prevScope;else{let t=de;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ym(){return de}let Vt;const da=new WeakSet;class zf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,de&&de.active&&de.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,da.has(this)&&(da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cu(this),Gf(this);const t=Vt,n=Ge;Vt=this,Ge=!0;try{return this.fn()}finally{Wf(this),Vt=t,Ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Pl(t);this.deps=this.depsTail=void 0,Cu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ba(this)&&this.run()}get dirty(){return Ba(this)}}let Hf=0,ks,Os;function Kf(e,t=!1){if(e.flags|=8,t){e.next=Os,Os=e;return}e.next=ks,ks=e}function Rl(){Hf++}function Cl(){if(--Hf>0)return;if(Os){let t=Os;for(Os=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ks;){let t=ks;for(ks=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Gf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Wf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Pl(r),Jm(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ba(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Qf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Gs)||(e.globalVersion=Gs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ba(e))))return;e.flags|=2;const t=e.dep,n=Vt,r=Ge;Vt=e,Ge=!0;try{Gf(e);const s=e.fn(e._value);(t.version===0||sn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Vt=n,Ge=r,Wf(e),e.flags&=-3}}function Pl(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Pl(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Jm(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ge=!0;const Yf=[];function bn(){Yf.push(Ge),Ge=!1}function Sn(){const e=Yf.pop();Ge=e===void 0?!0:e}function Cu(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Vt;Vt=void 0;try{t()}finally{Vt=n}}}let Gs=0;class Xm{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Vt||!Ge||Vt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Vt)n=this.activeLink=new Xm(Vt,this),Vt.deps?(n.prevDep=Vt.depsTail,Vt.depsTail.nextDep=n,Vt.depsTail=n):Vt.deps=Vt.depsTail=n,Jf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Vt.depsTail,n.nextDep=void 0,Vt.depsTail.nextDep=n,Vt.depsTail=n,Vt.deps===n&&(Vt.deps=r)}return n}trigger(t){this.version++,Gs++,this.notify(t)}notify(t){Rl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cl()}}}function Jf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Jf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ja=new WeakMap,gr=Symbol(""),$a=Symbol(""),Ws=Symbol("");function ge(e,t,n){if(Ge&&Vt){let r=ja.get(e);r||ja.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Vl),s.map=r,s.key=n),s.track()}}function wn(e,t,n,r,s,i){const a=ja.get(e);if(!a){Gs++;return}const l=c=>{c&&c.trigger()};if(Rl(),t==="clear")a.forEach(l);else{const c=ut(e),h=c&&bl(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Ws||!fn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Ws)),t){case"add":c?h&&l(a.get("length")):(l(a.get(gr)),$r(e)&&l(a.get($a)));break;case"delete":c||(l(a.get(gr)),$r(e)&&l(a.get($a)));break;case"set":$r(e)&&l(a.get(gr));break}}Cl()}function Or(e){const t=bt(e);return t===e?t:(ge(t,"iterate",Ws),We(e)?t:t.map(Rn))}function Dl(e){return ge(e=bt(e),"iterate",Ws),e}function nn(e,t){return Wn(e)?Qs(qr(e)?Rn(t):t):Rn(t)}const Zm={__proto__:null,[Symbol.iterator](){return pa(this,Symbol.iterator,e=>nn(this,e))},concat(...e){return Or(this).concat(...e.map(t=>ut(t)?Or(t):t))},entries(){return pa(this,"entries",e=>(e[1]=nn(this,e[1]),e))},every(e,t){return mn(this,"every",e,t,void 0,arguments)},filter(e,t){return mn(this,"filter",e,t,n=>n.map(r=>nn(this,r)),arguments)},find(e,t){return mn(this,"find",e,t,n=>nn(this,n),arguments)},findIndex(e,t){return mn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mn(this,"findLast",e,t,n=>nn(this,n),arguments)},findLastIndex(e,t){return mn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mn(this,"forEach",e,t,void 0,arguments)},includes(...e){return ga(this,"includes",e)},indexOf(...e){return ga(this,"indexOf",e)},join(e){return Or(this).join(e)},lastIndexOf(...e){return ga(this,"lastIndexOf",e)},map(e,t){return mn(this,"map",e,t,void 0,arguments)},pop(){return ws(this,"pop")},push(...e){return ws(this,"push",e)},reduce(e,...t){return Pu(this,"reduce",e,t)},reduceRight(e,...t){return Pu(this,"reduceRight",e,t)},shift(){return ws(this,"shift")},some(e,t){return mn(this,"some",e,t,void 0,arguments)},splice(...e){return ws(this,"splice",e)},toReversed(){return Or(this).toReversed()},toSorted(e){return Or(this).toSorted(e)},toSpliced(...e){return Or(this).toSpliced(...e)},unshift(...e){return ws(this,"unshift",e)},values(){return pa(this,"values",e=>nn(this,e))}};function pa(e,t,n){const r=Dl(e),s=r[t]();return r!==e&&!We(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const t_=Array.prototype;function mn(e,t,n,r,s,i){const a=Dl(e),l=a!==e&&!We(e),c=a[t];if(c!==t_[t]){const p=c.apply(e,i);return l?Rn(p):p}let h=n;a!==e&&(l?h=function(p,m){return n.call(this,nn(e,p),m,e)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,e)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Pu(e,t,n,r){const s=Dl(e),i=s!==e&&!We(e);let a=n,l=!1;s!==e&&(i?(l=r.length===0,a=function(h,d,p){return l&&(l=!1,h=nn(e,h)),n.call(this,h,nn(e,d),p,e)}):n.length>3&&(a=function(h,d,p){return n.call(this,h,d,p,e)}));const c=s[t](a,...r);return l?nn(e,c):c}function ga(e,t,n){const r=bt(e);ge(r,"iterate",Ws);const s=r[t](...n);return(s===-1||s===!1)&&Ol(n[0])?(n[0]=bt(n[0]),r[t](...n)):s}function ws(e,t,n=[]){bn(),Rl();const r=bt(e)[t].apply(e,n);return Cl(),Sn(),r}const e_=Il("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(fn));function n_(e){fn(e)||(e=String(e));const t=bt(this);return ge(t,"has",e),t.hasOwnProperty(e)}class Zf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?f_:rd:i?nd:ed).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=ut(t);if(!s){let c;if(a&&(c=Zm[n]))return c;if(n==="hasOwnProperty")return n_}const l=Reflect.get(t,n,ye(t)?t:r);if((fn(n)?Xf.has(n):e_(n))||(s||ge(t,"get",n),i))return l;if(ye(l)){const c=a&&bl(n)?l:l.value;return s&&Ct(c)?za(c):c}return Ct(l)?s?za(l):ui(l):l}}class td extends Zf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const a=ut(t)&&bl(n);if(!this._isShallow){const h=Wn(i);if(!We(r)&&!Wn(r)&&(i=bt(i),r=bt(r)),!a&&ye(i)&&!ye(r))return h||(i.value=r),!0}const l=a?Number(n)<t.length:St(t,n),c=Reflect.set(t,n,r,ye(t)?t:s);return t===bt(s)&&(l?sn(r,i)&&wn(t,"set",n,r):wn(t,"add",n,r)),c}deleteProperty(t,n){const r=St(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&wn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!fn(n)||!Xf.has(n))&&ge(t,"has",n),r}ownKeys(t){return ge(t,"iterate",ut(t)?"length":gr),Reflect.ownKeys(t)}}class r_ extends Zf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const s_=new td,i_=new r_,o_=new td(!0);const qa=e=>e,Di=e=>Reflect.getPrototypeOf(e);function a_(e,t,n){return function(...r){const s=this.__v_raw,i=bt(s),a=$r(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=s[e](...r),d=n?qa:t?Qs:Rn;return!t&&ge(i,"iterate",c?$a:gr),ce(Object.create(h),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}}})}}function Ni(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function l_(e,t){const n={get(s){const i=this.__v_raw,a=bt(i),l=bt(s);e||(sn(s,l)&&ge(a,"get",s),ge(a,"get",l));const{has:c}=Di(a),h=t?qa:e?Qs:Rn;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ge(bt(s),"iterate",gr),s.size},has(s){const i=this.__v_raw,a=bt(i),l=bt(s);return e||(sn(s,l)&&ge(a,"has",s),ge(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=bt(l),h=t?qa:e?Qs:Rn;return!e&&ge(c,"iterate",gr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ce(n,e?{add:Ni("add"),set:Ni("set"),delete:Ni("delete"),clear:Ni("clear")}:{add(s){const i=bt(this),a=Di(i),l=bt(s),c=!t&&!We(s)&&!Wn(s)?l:s;return a.has.call(i,c)||sn(s,c)&&a.has.call(i,s)||sn(l,c)&&a.has.call(i,l)||(i.add(c),wn(i,"add",c,c)),this},set(s,i){!t&&!We(i)&&!Wn(i)&&(i=bt(i));const a=bt(this),{has:l,get:c}=Di(a);let h=l.call(a,s);h||(s=bt(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?sn(i,d)&&wn(a,"set",s,i):wn(a,"add",s,i),this},delete(s){const i=bt(this),{has:a,get:l}=Di(i);let c=a.call(i,s);c||(s=bt(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&wn(i,"delete",s,void 0),h},clear(){const s=bt(this),i=s.size!==0,a=s.clear();return i&&wn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=a_(s,e,t)}),n}function Nl(e,t){const n=l_(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(St(n,s)&&s in r?n:r,s,i)}const c_={get:Nl(!1,!1)},u_={get:Nl(!1,!0)},h_={get:Nl(!0,!1)};const ed=new WeakMap,nd=new WeakMap,rd=new WeakMap,f_=new WeakMap;function d_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function p_(e){return e.__v_skip||!Object.isExtensible(e)?0:d_(Fm(e))}function ui(e){return Wn(e)?e:kl(e,!1,s_,c_,ed)}function sd(e){return kl(e,!1,o_,u_,nd)}function za(e){return kl(e,!0,i_,h_,rd)}function kl(e,t,n,r,s){if(!Ct(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=p_(e);if(i===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function qr(e){return Wn(e)?qr(e.__v_raw):!!(e&&e.__v_isReactive)}function Wn(e){return!!(e&&e.__v_isReadonly)}function We(e){return!!(e&&e.__v_isShallow)}function Ol(e){return e?!!e.__v_raw:!1}function bt(e){const t=e&&e.__v_raw;return t?bt(t):e}function g_(e){return!St(e,"__v_skip")&&Object.isExtensible(e)&&Bf(e,"__v_skip",!0),e}const Rn=e=>Ct(e)?ui(e):e,Qs=e=>Ct(e)?za(e):e;function ye(e){return e?e.__v_isRef===!0:!1}function In(e){return id(e,!1)}function m_(e){return id(e,!0)}function id(e,t){return ye(e)?e:new __(e,t)}class __{constructor(t,n){this.dep=new Vl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:bt(t),this._value=n?t:Rn(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||We(t)||Wn(t);t=r?t:bt(t),sn(t,n)&&(this._rawValue=t,this._value=r?t:Rn(t),this.dep.trigger())}}function Ut(e){return ye(e)?e.value:e}const y_={get:(e,t,n)=>t==="__v_raw"?e:Ut(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function od(e){return qr(e)?e:new Proxy(e,y_)}class E_{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Vl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Vt!==this)return Kf(this,!0),!0}get value(){const t=this.dep.track();return Qf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function v_(e,t,n=!1){let r,s;return ft(e)?r=e:(r=e.get,s=e.set),new E_(r,s,n)}const ki={},Wi=new WeakMap;let ur;function T_(e,t=!1,n=ur){if(n){let r=Wi.get(n);r||Wi.set(n,r=[]),r.push(e)}}function w_(e,t,n=Dt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=Q=>s?Q:We(Q)||s===!1||s===0?$n(Q,1):$n(Q);let d,p,m,y,D=!1,V=!1;if(ye(e)?(p=()=>e.value,D=We(e)):qr(e)?(p=()=>h(e),D=!0):ut(e)?(V=!0,D=e.some(Q=>qr(Q)||We(Q)),p=()=>e.map(Q=>{if(ye(Q))return Q.value;if(qr(Q))return h(Q);if(ft(Q))return c?c(Q,2):Q()})):ft(e)?t?p=c?()=>c(e,2):e:p=()=>{if(m){bn();try{m()}finally{Sn()}}const Q=ur;ur=d;try{return c?c(e,3,[y]):e(y)}finally{ur=Q}}:p=on,t&&s){const Q=p,at=s===!0?1/0:s;p=()=>$n(Q(),at)}const L=Ym(),H=()=>{d.stop(),L&&L.active&&Al(L.effects,d)};if(i&&t){const Q=t;t=(...at)=>{Q(...at),H()}}let j=V?new Array(e.length).fill(ki):ki;const z=Q=>{if(!(!(d.flags&1)||!d.dirty&&!Q))if(t){const at=d.run();if(s||D||(V?at.some((gt,I)=>sn(gt,j[I])):sn(at,j))){m&&m();const gt=ur;ur=d;try{const I=[at,j===ki?void 0:V&&j[0]===ki?[]:j,y];j=at,c?c(t,3,I):t(...I)}finally{ur=gt}}}else d.run()};return l&&l(z),d=new zf(p),d.scheduler=a?()=>a(z,!1):z,y=Q=>T_(Q,!1,d),m=d.onStop=()=>{const Q=Wi.get(d);if(Q){if(c)c(Q,4);else for(const at of Q)at();Wi.delete(d)}},t?r?z(!0):j=d.run():a?a(z.bind(null,!0),!0):d.run(),H.pause=d.pause.bind(d),H.resume=d.resume.bind(d),H.stop=H,H}function $n(e,t=1/0,n){if(t<=0||!Ct(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ye(e))$n(e.value,t,n);else if(ut(e))for(let r=0;r<e.length;r++)$n(e[r],t,n);else if(Mf(e)||$r(e))e.forEach(r=>{$n(r,t,n)});else if(Uf(e)){for(const r in e)$n(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&$n(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hi(e,t,n,r){try{return r?e(...r):e()}catch(s){Ro(s,t,n)}}function dn(e,t,n,r){if(ft(e)){const s=hi(e,t,n,r);return s&&Lf(s)&&s.catch(i=>{Ro(i,t,n)}),s}if(ut(e)){const s=[];for(let i=0;i<e.length;i++)s.push(dn(e[i],t,n,r));return s}}function Ro(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Dt;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,h)===!1)return}l=l.parent}if(i){bn(),hi(i,null,10,[e,c,h]),Sn();return}}I_(e,n,s,r,a)}function I_(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ae=[];let tn=-1;const zr=[];let Bn=null,xr=0;const ad=Promise.resolve();let Qi=null;function xl(e){const t=Qi||ad;return e?t.then(this?e.bind(this):e):t}function A_(e){let t=tn+1,n=Ae.length;for(;t<n;){const r=t+n>>>1,s=Ae[r],i=Ys(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Ml(e){if(!(e.flags&1)){const t=Ys(e),n=Ae[Ae.length-1];!n||!(e.flags&2)&&t>=Ys(n)?Ae.push(e):Ae.splice(A_(t),0,e),e.flags|=1,ld()}}function ld(){Qi||(Qi=ad.then(ud))}function b_(e){ut(e)?zr.push(...e):Bn&&e.id===-1?Bn.splice(xr+1,0,e):e.flags&1||(zr.push(e),e.flags|=1),ld()}function Vu(e,t,n=tn+1){for(;n<Ae.length;n++){const r=Ae[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ae.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function cd(e){if(zr.length){const t=[...new Set(zr)].sort((n,r)=>Ys(n)-Ys(r));if(zr.length=0,Bn){Bn.push(...t);return}for(Bn=t,xr=0;xr<Bn.length;xr++){const n=Bn[xr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bn=null,xr=0}}const Ys=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ud(e){try{for(tn=0;tn<Ae.length;tn++){const t=Ae[tn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),hi(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tn<Ae.length;tn++){const t=Ae[tn];t&&(t.flags&=-2)}tn=-1,Ae.length=0,cd(),Qi=null,(Ae.length||zr.length)&&ud()}}let He=null,hd=null;function Yi(e){const t=He;return He=e,hd=e&&e.type.__scopeId||null,t}function fi(e,t=He,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Zi(-1);const i=Yi(t);let a;try{a=e(...s)}finally{Yi(i),r._d&&Zi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function lr(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(bn(),dn(c,n,8,[e.el,l,e,t]),Sn())}}function xs(e,t){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[e]=t}}function je(e,t,n=!1){const r=by();if(r||Hr){let s=Hr?Hr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ft(t)?t.call(r&&r.proxy):t}}const S_=Symbol.for("v-scx"),R_=()=>je(S_);function Ms(e,t,n){return fd(e,t,n)}function fd(e,t,n=Dt){const{immediate:r,deep:s,flush:i,once:a}=n,l=ce({},n),c=t&&r||!t&&i!=="post";let h;if(Xs){if(i==="sync"){const y=R_();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=on,y.resume=on,y.pause=on,y}}const d=_e;l.call=(y,D,V)=>dn(y,d,D,V);let p=!1;i==="post"?l.scheduler=y=>{Pe(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,D)=>{D?y():Ml(y)}),l.augmentJob=y=>{t&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const m=w_(e,t,l);return Xs&&(h?h.push(m):c&&m()),m}function C_(e,t,n){const r=this.proxy,s=qt(e)?e.includes(".")?dd(r,e):()=>r[e]:e.bind(r,r);let i;ft(t)?i=t:(i=t.handler,n=t);const a=gi(this),l=fd(s,i.bind(r),n);return a(),l}function dd(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const P_=Symbol("_vte"),V_=e=>e.__isTeleport,D_=Symbol("_leaveCb");function Ll(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ll(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pd(e,t){return ft(e)?ce({name:e.name},t,{setup:e}):e}function gd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Du(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Ji=new WeakMap;function Ls(e,t,n,r,s=!1){if(ut(e)){e.forEach((V,L)=>Ls(V,t&&(ut(t)?t[L]:t),n,r,s));return}if(Fs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ls(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?$l(r.component):r.el,a=s?null:i,{i:l,r:c}=e,h=t&&t.r,d=l.refs===Dt?l.refs={}:l.refs,p=l.setupState,m=bt(p),y=p===Dt?xf:V=>Du(d,V)?!1:St(m,V),D=(V,L)=>!(L&&Du(d,L));if(h!=null&&h!==c){if(Nu(t),qt(h))d[h]=null,y(h)&&(p[h]=null);else if(ye(h)){const V=t;D(h,V.k)&&(h.value=null),V.k&&(d[V.k]=null)}}if(ft(c))hi(c,l,12,[a,d]);else{const V=qt(c),L=ye(c);if(V||L){const H=()=>{if(e.f){const j=V?y(c)?p[c]:d[c]:D()||!e.k?c.value:d[e.k];if(s)ut(j)&&Al(j,i);else if(ut(j))j.includes(i)||j.push(i);else if(V)d[c]=[i],y(c)&&(p[c]=d[c]);else{const z=[i];D(c,e.k)&&(c.value=z),e.k&&(d[e.k]=z)}}else V?(d[c]=a,y(c)&&(p[c]=a)):L&&(D(c,e.k)&&(c.value=a),e.k&&(d[e.k]=a))};if(a){const j=()=>{H(),Ji.delete(e)};j.id=-1,Ji.set(e,j),Pe(j,n)}else Nu(e),H()}}}function Nu(e){const t=Ji.get(e);t&&(t.flags|=8,Ji.delete(e))}bo().requestIdleCallback;bo().cancelIdleCallback;const Fs=e=>!!e.type.__asyncLoader,md=e=>e.type.__isKeepAlive;function N_(e,t){_d(e,"a",t)}function k_(e,t){_d(e,"da",t)}function _d(e,t,n=_e){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Co(t,r,n),n){let s=n.parent;for(;s&&s.parent;)md(s.parent.vnode)&&O_(r,t,n,s),s=s.parent}}function O_(e,t,n,r){const s=Co(t,e,r,!0);Fl(()=>{Al(r[t],s)},n)}function Co(e,t,n=_e,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{bn();const l=gi(n),c=dn(t,n,e,a);return l(),Sn(),c});return r?s.unshift(i):s.push(i),i}}const Nn=e=>(t,n=_e)=>{(!Xs||e==="sp")&&Co(e,(...r)=>t(...r),n)},x_=Nn("bm"),di=Nn("m"),M_=Nn("bu"),L_=Nn("u"),F_=Nn("bum"),Fl=Nn("um"),U_=Nn("sp"),B_=Nn("rtg"),j_=Nn("rtc");function $_(e,t=_e){Co("ec",e,t)}const q_="components";function pi(e,t){return H_(q_,e,!0,t)||e}const z_=Symbol.for("v-ndc");function H_(e,t,n=!0,r=!1){const s=He||_e;if(s){const i=s.type;{const l=Vy(i,!1);if(l&&(l===t||l===be(t)||l===Ao(be(t))))return i}const a=ku(s[e]||i[e],t)||ku(s.appContext[e],t);return!a&&r?i:a}}function ku(e,t){return e&&(e[t]||e[be(t)]||e[Ao(be(t))])}const Ha=e=>e?Fd(e)?$l(e):Ha(e.parent):null,Us=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ha(e.parent),$root:e=>Ha(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ed(e),$forceUpdate:e=>e.f||(e.f=()=>{Ml(e.update)}),$nextTick:e=>e.n||(e.n=xl.bind(e.proxy)),$watch:e=>C_.bind(e)}),ma=(e,t)=>e!==Dt&&!e.__isScriptSetup&&St(e,t),K_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ma(r,t))return a[t]=1,r[t];if(s!==Dt&&St(s,t))return a[t]=2,s[t];if(St(i,t))return a[t]=3,i[t];if(n!==Dt&&St(n,t))return a[t]=4,n[t];Ka&&(a[t]=0)}}const h=Us[t];let d,p;if(h)return t==="$attrs"&&ge(e.attrs,"get",""),h(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==Dt&&St(n,t))return a[t]=4,n[t];if(p=c.config.globalProperties,St(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ma(s,t)?(s[t]=n,!0):r!==Dt&&St(r,t)?(r[t]=n,!0):St(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(n[l]||e!==Dt&&l[0]!=="$"&&St(e,l)||ma(t,l)||St(i,l)||St(r,l)||St(Us,l)||St(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:St(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ou(e){return ut(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ka=!0;function G_(e){const t=Ed(e),n=e.proxy,r=e.ctx;Ka=!1,t.beforeCreate&&xu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:y,updated:D,activated:V,deactivated:L,beforeDestroy:H,beforeUnmount:j,destroyed:z,unmounted:Q,render:at,renderTracked:gt,renderTriggered:I,errorCaptured:E,serverPrefetch:w,expose:b,inheritAttrs:A,components:S,directives:v,filters:Mt}=t;if(h&&W_(h,r,null),a)for(const X in a){const dt=a[X];ft(dt)&&(r[X]=dt.bind(n))}if(s){const X=s.call(n,n);Ct(X)&&(e.data=ui(X))}if(Ka=!0,i)for(const X in i){const dt=i[X],jt=ft(dt)?dt.bind(n,n):ft(dt.get)?dt.get.bind(n,n):on,Se=!ft(dt)&&ft(dt.set)?dt.set.bind(n):on,Wt=ze({get:jt,set:Se});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:zt=>Wt.value=zt})}if(l)for(const X in l)yd(l[X],r,n,X);if(c){const X=ft(c)?c.call(n):c;Reflect.ownKeys(X).forEach(dt=>{xs(dt,X[dt])})}d&&xu(d,e,"c");function nt(X,dt){ut(dt)?dt.forEach(jt=>X(jt.bind(n))):dt&&X(dt.bind(n))}if(nt(x_,p),nt(di,m),nt(M_,y),nt(L_,D),nt(N_,V),nt(k_,L),nt($_,E),nt(j_,gt),nt(B_,I),nt(F_,j),nt(Fl,Q),nt(U_,w),ut(b))if(b.length){const X=e.exposed||(e.exposed={});b.forEach(dt=>{Object.defineProperty(X,dt,{get:()=>n[dt],set:jt=>n[dt]=jt,enumerable:!0})})}else e.exposed||(e.exposed={});at&&e.render===on&&(e.render=at),A!=null&&(e.inheritAttrs=A),S&&(e.components=S),v&&(e.directives=v),w&&gd(e)}function W_(e,t,n=on){ut(e)&&(e=Ga(e));for(const r in e){const s=e[r];let i;Ct(s)?"default"in s?i=je(s.from||r,s.default,!0):i=je(s.from||r):i=je(s),ye(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function xu(e,t,n){dn(ut(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function yd(e,t,n,r){let s=r.includes(".")?dd(n,r):()=>n[r];if(qt(e)){const i=t[e];ft(i)&&Ms(s,i)}else if(ft(e))Ms(s,e.bind(n));else if(Ct(e))if(ut(e))e.forEach(i=>yd(i,t,n,r));else{const i=ft(e.handler)?e.handler.bind(n):t[e.handler];ft(i)&&Ms(s,i,e)}}function Ed(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(h=>Xi(c,h,a,!0)),Xi(c,t,a)),Ct(t)&&i.set(t,c),c}function Xi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Xi(e,i,n,!0),s&&s.forEach(a=>Xi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=Q_[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const Q_={data:Mu,props:Lu,emits:Lu,methods:Ss,computed:Ss,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Ss,directives:Ss,watch:J_,provide:Mu,inject:Y_};function Mu(e,t){return t?e?function(){return ce(ft(e)?e.call(this,this):e,ft(t)?t.call(this,this):t)}:t:e}function Y_(e,t){return Ss(Ga(e),Ga(t))}function Ga(e){if(ut(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function Ss(e,t){return e?ce(Object.create(null),e,t):t}function Lu(e,t){return e?ut(e)&&ut(t)?[...new Set([...e,...t])]:ce(Object.create(null),Ou(e),Ou(t??{})):t}function J_(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=Te(e[r],t[r]);return n}function vd(){return{app:null,config:{isNativeTag:xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let X_=0;function Z_(e,t){return function(r,s=null){ft(r)||(r=ce({},r)),s!=null&&!Ct(s)&&(s=null);const i=vd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:X_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ny,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ft(d.install)?(a.add(d),d.install(h,...p)):ft(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const y=h._ceVNode||Kt(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(y,d,m),c=!0,h._container=d,d.__vue_app__=h,$l(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(dn(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Hr;Hr=h;try{return d()}finally{Hr=p}}};return h}}let Hr=null;const ty=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${be(t)}Modifiers`]||e[`${Ar(t)}Modifiers`];function ey(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Dt;let s=n;const i=t.startsWith("update:"),a=i&&ty(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>qt(d)?d.trim():d)),a.number&&(s=n.map(jm)));let l,c=r[l=ua(t)]||r[l=ua(be(t))];!c&&i&&(c=r[l=ua(Ar(t))]),c&&dn(c,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,dn(h,e,6,s)}}const ny=new WeakMap;function Td(e,t,n=!1){const r=n?ny:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ft(e)){const c=h=>{const d=Td(h,t,!0);d&&(l=!0,ce(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(Ct(e)&&r.set(e,null),null):(ut(i)?i.forEach(c=>a[c]=null):ce(a,i),Ct(e)&&r.set(e,a),a)}function Po(e,t){return!e||!To(t)?!1:(t=t.slice(2).replace(/Once$/,""),St(e,t[0].toLowerCase()+t.slice(1))||St(e,Ar(t))||St(e,t))}function Fu(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:y,ctx:D,inheritAttrs:V}=e,L=Yi(e);let H,j;try{if(n.shapeFlag&4){const Q=s||r,at=Q;H=rn(h.call(at,Q,d,p,y,m,D)),j=l}else{const Q=t;H=rn(Q.length>1?Q(p,{attrs:l,slots:a,emit:c}):Q(p,null)),j=t.props?l:ry(l)}}catch(Q){Bs.length=0,Ro(Q,e,1),H=Kt(Qn)}let z=H;if(j&&V!==!1){const Q=Object.keys(j),{shapeFlag:at}=z;Q.length&&at&7&&(i&&Q.some(wo)&&(j=sy(j,i)),z=Wr(z,j,!1,!0))}return n.dirs&&(z=Wr(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&Ll(z,n.transition),H=z,Yi(L),H}const ry=e=>{let t;for(const n in e)(n==="class"||n==="style"||To(n))&&((t||(t={}))[n]=e[n]);return t},sy=(e,t)=>{const n={};for(const r in e)(!wo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function iy(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Uu(r,a,h):!!a;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(wd(a,r,m)&&!Po(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Uu(r,a,h):!0:!!a;return!1}function Uu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(wd(t,e,i)&&!Po(n,i))return!0}return!1}function wd(e,t,n){const r=e[n],s=t[n];return n==="style"&&Ct(r)&&Ct(s)?!Sl(r,s):r!==s}function oy({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Id={},Ad=()=>Object.create(Id),bd=e=>Object.getPrototypeOf(e)===Id;function ay(e,t,n,r=!1){const s={},i=Ad();e.propsDefaults=Object.create(null),Sd(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:sd(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function ly(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=bt(s),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Po(e.emitsOptions,m))continue;const y=t[m];if(c)if(St(i,m))y!==i[m]&&(i[m]=y,h=!0);else{const D=be(m);s[D]=Wa(c,l,D,y,e,!1)}else y!==i[m]&&(i[m]=y,h=!0)}}}else{Sd(e,t,s,i)&&(h=!0);let d;for(const p in l)(!t||!St(t,p)&&((d=Ar(p))===p||!St(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Wa(c,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!St(t,p))&&(delete i[p],h=!0)}h&&wn(e.attrs,"set","")}function Sd(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(Ns(c))continue;const h=t[c];let d;s&&St(s,d=be(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Po(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=bt(n),h=l||Dt;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Wa(s,c,p,h[p],e,!St(h,p))}}return a}function Wa(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=St(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ft(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=gi(s);r=h[n]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Ar(n))&&(r=!0))}return r}const cy=new WeakMap;function Rd(e,t,n=!1){const r=n?cy:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!ft(e)){const d=p=>{c=!0;const[m,y]=Rd(p,t,!0);ce(a,m),y&&l.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return Ct(e)&&r.set(e,jr),jr;if(ut(i))for(let d=0;d<i.length;d++){const p=be(i[d]);Bu(p)&&(a[p]=Dt)}else if(i)for(const d in i){const p=be(d);if(Bu(p)){const m=i[d],y=a[p]=ut(m)||ft(m)?{type:m}:ce({},m),D=y.type;let V=!1,L=!0;if(ut(D))for(let H=0;H<D.length;++H){const j=D[H],z=ft(j)&&j.name;if(z==="Boolean"){V=!0;break}else z==="String"&&(L=!1)}else V=ft(D)&&D.name==="Boolean";y[0]=V,y[1]=L,(V||St(y,"default"))&&l.push(p)}}const h=[a,l];return Ct(e)&&r.set(e,h),h}function Bu(e){return e[0]!=="$"&&!Ns(e)}const Ul=e=>e==="_"||e==="_ctx"||e==="$stable",Bl=e=>ut(e)?e.map(rn):[rn(e)],uy=(e,t,n)=>{if(t._n)return t;const r=fi((...s)=>Bl(t(...s)),n);return r._c=!1,r},Cd=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ul(s))continue;const i=e[s];if(ft(i))t[s]=uy(s,i,r);else if(i!=null){const a=Bl(i);t[s]=()=>a}}},Pd=(e,t)=>{const n=Bl(t);e.slots.default=()=>n},Vd=(e,t,n)=>{for(const r in t)(n||!Ul(r))&&(e[r]=t[r])},hy=(e,t,n)=>{const r=e.slots=Ad();if(e.vnode.shapeFlag&32){const s=t._;s?(Vd(r,t,n),n&&Bf(r,"_",s,!0)):Cd(t,r)}else t&&Pd(e,t)},fy=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=Dt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Vd(s,t,n):(i=!t.$stable,Cd(t,s)),a=t}else t&&(Pd(e,t),a={default:1});if(i)for(const l in s)!Ul(l)&&a[l]==null&&delete s[l]},Pe=_y;function dy(e){return py(e)}function py(e,t){const n=bo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:y=on,insertStaticContent:D}=e,V=(_,T,R,k=null,M=null,O=null,K=void 0,$=null,B=!!T.dynamicChildren)=>{if(_===T)return;_&&!Is(_,T)&&(k=N(_),zt(_,M,O,!0),_=null),T.patchFlag===-2&&(B=!1,T.dynamicChildren=null);const{type:F,ref:rt,shapeFlag:Y}=T;switch(F){case Vo:L(_,T,R,k);break;case Qn:H(_,T,R,k);break;case Bi:_==null&&j(T,R,k,K);break;case Oe:S(_,T,R,k,M,O,K,$,B);break;default:Y&1?at(_,T,R,k,M,O,K,$,B):Y&6?v(_,T,R,k,M,O,K,$,B):(Y&64||Y&128)&&F.process(_,T,R,k,M,O,K,$,B,tt)}rt!=null&&M?Ls(rt,_&&_.ref,O,T||_,!T):rt==null&&_&&_.ref!=null&&Ls(_.ref,null,O,_,!0)},L=(_,T,R,k)=>{if(_==null)r(T.el=l(T.children),R,k);else{const M=T.el=_.el;T.children!==_.children&&h(M,T.children)}},H=(_,T,R,k)=>{_==null?r(T.el=c(T.children||""),R,k):T.el=_.el},j=(_,T,R,k)=>{[_.el,_.anchor]=D(_.children,T,R,k,_.el,_.anchor)},z=({el:_,anchor:T},R,k)=>{let M;for(;_&&_!==T;)M=m(_),r(_,R,k),_=M;r(T,R,k)},Q=({el:_,anchor:T})=>{let R;for(;_&&_!==T;)R=m(_),s(_),_=R;s(T)},at=(_,T,R,k,M,O,K,$,B)=>{if(T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),_==null)gt(T,R,k,M,O,K,$,B);else{const F=_.el&&_.el._isVueCE?_.el:null;try{F&&F._beginPatch(),w(_,T,M,O,K,$,B)}finally{F&&F._endPatch()}}},gt=(_,T,R,k,M,O,K,$)=>{let B,F;const{props:rt,shapeFlag:Y,transition:et,dirs:st}=_;if(B=_.el=a(_.type,O,rt&&rt.is,rt),Y&8?d(B,_.children):Y&16&&E(_.children,B,null,k,M,_a(_,O),K,$),st&&lr(_,null,k,"created"),I(B,_,_.scopeId,K,k),rt){for(const wt in rt)wt!=="value"&&!Ns(wt)&&i(B,wt,null,rt[wt],O,k);"value"in rt&&i(B,"value",null,rt.value,O),(F=rt.onVnodeBeforeMount)&&Ze(F,k,_)}st&&lr(_,null,k,"beforeMount");const Et=gy(M,et);Et&&et.beforeEnter(B),r(B,T,R),((F=rt&&rt.onVnodeMounted)||Et||st)&&Pe(()=>{try{F&&Ze(F,k,_),Et&&et.enter(B),st&&lr(_,null,k,"mounted")}finally{}},M)},I=(_,T,R,k,M)=>{if(R&&y(_,R),k)for(let O=0;O<k.length;O++)y(_,k[O]);if(M){let O=M.subTree;if(T===O||Od(O.type)&&(O.ssContent===T||O.ssFallback===T)){const K=M.vnode;I(_,K,K.scopeId,K.slotScopeIds,M.parent)}}},E=(_,T,R,k,M,O,K,$,B=0)=>{for(let F=B;F<_.length;F++){const rt=_[F]=$?Tn(_[F]):rn(_[F]);V(null,rt,T,R,k,M,O,K,$)}},w=(_,T,R,k,M,O,K)=>{const $=T.el=_.el;let{patchFlag:B,dynamicChildren:F,dirs:rt}=T;B|=_.patchFlag&16;const Y=_.props||Dt,et=T.props||Dt;let st;if(R&&cr(R,!1),(st=et.onVnodeBeforeUpdate)&&Ze(st,R,T,_),rt&&lr(T,_,R,"beforeUpdate"),R&&cr(R,!0),(Y.innerHTML&&et.innerHTML==null||Y.textContent&&et.textContent==null)&&d($,""),F?b(_.dynamicChildren,F,$,R,k,_a(T,M),O):K||dt(_,T,$,null,R,k,_a(T,M),O,!1),B>0){if(B&16)A($,Y,et,R,M);else if(B&2&&Y.class!==et.class&&i($,"class",null,et.class,M),B&4&&i($,"style",Y.style,et.style,M),B&8){const Et=T.dynamicProps;for(let wt=0;wt<Et.length;wt++){const It=Et[wt],Lt=Y[It],Yt=et[It];(Yt!==Lt||It==="value")&&i($,It,Lt,Yt,M,R)}}B&1&&_.children!==T.children&&d($,T.children)}else!K&&F==null&&A($,Y,et,R,M);((st=et.onVnodeUpdated)||rt)&&Pe(()=>{st&&Ze(st,R,T,_),rt&&lr(T,_,R,"updated")},k)},b=(_,T,R,k,M,O,K)=>{for(let $=0;$<T.length;$++){const B=_[$],F=T[$],rt=B.el&&(B.type===Oe||!Is(B,F)||B.shapeFlag&198)?p(B.el):R;V(B,F,rt,null,k,M,O,K,!0)}},A=(_,T,R,k,M)=>{if(T!==R){if(T!==Dt)for(const O in T)!Ns(O)&&!(O in R)&&i(_,O,T[O],null,M,k);for(const O in R){if(Ns(O))continue;const K=R[O],$=T[O];K!==$&&O!=="value"&&i(_,O,$,K,M,k)}"value"in R&&i(_,"value",T.value,R.value,M)}},S=(_,T,R,k,M,O,K,$,B)=>{const F=T.el=_?_.el:l(""),rt=T.anchor=_?_.anchor:l("");let{patchFlag:Y,dynamicChildren:et,slotScopeIds:st}=T;st&&($=$?$.concat(st):st),_==null?(r(F,R,k),r(rt,R,k),E(T.children||[],R,rt,M,O,K,$,B)):Y>0&&Y&64&&et&&_.dynamicChildren&&_.dynamicChildren.length===et.length?(b(_.dynamicChildren,et,R,M,O,K,$),(T.key!=null||M&&T===M.subTree)&&Dd(_,T,!0)):dt(_,T,R,rt,M,O,K,$,B)},v=(_,T,R,k,M,O,K,$,B)=>{T.slotScopeIds=$,_==null?T.shapeFlag&512?M.ctx.activate(T,R,k,K,B):Mt(T,R,k,M,O,K,B):he(_,T,B)},Mt=(_,T,R,k,M,O,K)=>{const $=_.component=Ay(_,k,M);if(md(_)&&($.ctx.renderer=tt),Sy($,!1,K),$.asyncDep){if(M&&M.registerDep($,nt,K),!_.el){const B=$.subTree=Kt(Qn);H(null,B,T,R),_.placeholder=B.el}}else nt($,_,T,R,M,O,K)},he=(_,T,R)=>{const k=T.component=_.component;if(iy(_,T,R))if(k.asyncDep&&!k.asyncResolved){X(k,T,R);return}else k.next=T,k.update();else T.el=_.el,k.vnode=T},nt=(_,T,R,k,M,O,K)=>{const $=()=>{if(_.isMounted){let{next:Y,bu:et,u:st,parent:Et,vnode:wt}=_;{const Ne=Nd(_);if(Ne){Y&&(Y.el=wt.el,X(_,Y,K)),Ne.asyncDep.then(()=>{Pe(()=>{_.isUnmounted||F()},M)});return}}let It=Y,Lt;cr(_,!1),Y?(Y.el=wt.el,X(_,Y,K)):Y=wt,et&&ha(et),(Lt=Y.props&&Y.props.onVnodeBeforeUpdate)&&Ze(Lt,Et,Y,wt),cr(_,!0);const Yt=Fu(_),De=_.subTree;_.subTree=Yt,V(De,Yt,p(De.el),N(De),_,M,O),Y.el=Yt.el,It===null&&oy(_,Yt.el),st&&Pe(st,M),(Lt=Y.props&&Y.props.onVnodeUpdated)&&Pe(()=>Ze(Lt,Et,Y,wt),M)}else{let Y;const{el:et,props:st}=T,{bm:Et,m:wt,parent:It,root:Lt,type:Yt}=_,De=Fs(T);cr(_,!1),Et&&ha(Et),!De&&(Y=st&&st.onVnodeBeforeMount)&&Ze(Y,It,T),cr(_,!0);{Lt.ce&&Lt.ce._hasShadowRoot()&&Lt.ce._injectChildStyle(Yt,_.parent?_.parent.type:void 0);const Ne=_.subTree=Fu(_);V(null,Ne,R,k,_,M,O),T.el=Ne.el}if(wt&&Pe(wt,M),!De&&(Y=st&&st.onVnodeMounted)){const Ne=T;Pe(()=>Ze(Y,It,Ne),M)}(T.shapeFlag&256||It&&Fs(It.vnode)&&It.vnode.shapeFlag&256)&&_.a&&Pe(_.a,M),_.isMounted=!0,T=R=k=null}};_.scope.on();const B=_.effect=new zf($);_.scope.off();const F=_.update=B.run.bind(B),rt=_.job=B.runIfDirty.bind(B);rt.i=_,rt.id=_.uid,B.scheduler=()=>Ml(rt),cr(_,!0),F()},X=(_,T,R)=>{T.component=_;const k=_.vnode.props;_.vnode=T,_.next=null,ly(_,T.props,k,R),fy(_,T.children,R),bn(),Vu(_),Sn()},dt=(_,T,R,k,M,O,K,$,B=!1)=>{const F=_&&_.children,rt=_?_.shapeFlag:0,Y=T.children,{patchFlag:et,shapeFlag:st}=T;if(et>0){if(et&128){Se(F,Y,R,k,M,O,K,$,B);return}else if(et&256){jt(F,Y,R,k,M,O,K,$,B);return}}st&8?(rt&16&&Qt(F,M,O),Y!==F&&d(R,Y)):rt&16?st&16?Se(F,Y,R,k,M,O,K,$,B):Qt(F,M,O,!0):(rt&8&&d(R,""),st&16&&E(Y,R,k,M,O,K,$,B))},jt=(_,T,R,k,M,O,K,$,B)=>{_=_||jr,T=T||jr;const F=_.length,rt=T.length,Y=Math.min(F,rt);let et;for(et=0;et<Y;et++){const st=T[et]=B?Tn(T[et]):rn(T[et]);V(_[et],st,R,null,M,O,K,$,B)}F>rt?Qt(_,M,O,!0,!1,Y):E(T,R,k,M,O,K,$,B,Y)},Se=(_,T,R,k,M,O,K,$,B)=>{let F=0;const rt=T.length;let Y=_.length-1,et=rt-1;for(;F<=Y&&F<=et;){const st=_[F],Et=T[F]=B?Tn(T[F]):rn(T[F]);if(Is(st,Et))V(st,Et,R,null,M,O,K,$,B);else break;F++}for(;F<=Y&&F<=et;){const st=_[Y],Et=T[et]=B?Tn(T[et]):rn(T[et]);if(Is(st,Et))V(st,Et,R,null,M,O,K,$,B);else break;Y--,et--}if(F>Y){if(F<=et){const st=et+1,Et=st<rt?T[st].el:k;for(;F<=et;)V(null,T[F]=B?Tn(T[F]):rn(T[F]),R,Et,M,O,K,$,B),F++}}else if(F>et)for(;F<=Y;)zt(_[F],M,O,!0),F++;else{const st=F,Et=F,wt=new Map;for(F=Et;F<=et;F++){const ie=T[F]=B?Tn(T[F]):rn(T[F]);ie.key!=null&&wt.set(ie.key,F)}let It,Lt=0;const Yt=et-Et+1;let De=!1,Ne=0;const $e=new Array(Yt);for(F=0;F<Yt;F++)$e[F]=0;for(F=st;F<=Y;F++){const ie=_[F];if(Lt>=Yt){zt(ie,M,O,!0);continue}let ee;if(ie.key!=null)ee=wt.get(ie.key);else for(It=Et;It<=et;It++)if($e[It-Et]===0&&Is(ie,T[It])){ee=It;break}ee===void 0?zt(ie,M,O,!0):($e[ee-Et]=F+1,ee>=Ne?Ne=ee:De=!0,V(ie,T[ee],R,null,M,O,K,$,B),Lt++)}const Vr=De?my($e):jr;for(It=Vr.length-1,F=Yt-1;F>=0;F--){const ie=Et+F,ee=T[ie],as=T[ie+1],rr=ie+1<rt?as.el||kd(as):k;$e[F]===0?V(null,ee,R,rr,M,O,K,$,B):De&&(It<0||F!==Vr[It]?Wt(ee,R,rr,2):It--)}}},Wt=(_,T,R,k,M=null)=>{const{el:O,type:K,transition:$,children:B,shapeFlag:F}=_;if(F&6){Wt(_.component.subTree,T,R,k);return}if(F&128){_.suspense.move(T,R,k);return}if(F&64){K.move(_,T,R,tt);return}if(K===Oe){r(O,T,R);for(let Y=0;Y<B.length;Y++)Wt(B[Y],T,R,k);r(_.anchor,T,R);return}if(K===Bi){z(_,T,R);return}if(k!==2&&F&1&&$)if(k===0)$.beforeEnter(O),r(O,T,R),Pe(()=>$.enter(O),M);else{const{leave:Y,delayLeave:et,afterLeave:st}=$,Et=()=>{_.ctx.isUnmounted?s(O):r(O,T,R)},wt=()=>{O._isLeaving&&O[D_](!0),Y(O,()=>{Et(),st&&st()})};et?et(O,Et,wt):wt()}else r(O,T,R)},zt=(_,T,R,k=!1,M=!1)=>{const{type:O,props:K,ref:$,children:B,dynamicChildren:F,shapeFlag:rt,patchFlag:Y,dirs:et,cacheIndex:st,memo:Et}=_;if(Y===-2&&(M=!1),$!=null&&(bn(),Ls($,null,R,_,!0),Sn()),st!=null&&(T.renderCache[st]=void 0),rt&256){T.ctx.deactivate(_);return}const wt=rt&1&&et,It=!Fs(_);let Lt;if(It&&(Lt=K&&K.onVnodeBeforeUnmount)&&Ze(Lt,T,_),rt&6)Ce(_.component,R,k);else{if(rt&128){_.suspense.unmount(R,k);return}wt&&lr(_,null,T,"beforeUnmount"),rt&64?_.type.remove(_,T,R,tt,k):F&&!F.hasOnce&&(O!==Oe||Y>0&&Y&64)?Qt(F,T,R,!1,!0):(O===Oe&&Y&384||!M&&rt&16)&&Qt(B,T,R),k&&Me(_)}const Yt=Et!=null&&st==null;(It&&(Lt=K&&K.onVnodeUnmounted)||wt||Yt)&&Pe(()=>{Lt&&Ze(Lt,T,_),wt&&lr(_,null,T,"unmounted"),Yt&&(_.el=null)},R)},Me=_=>{const{type:T,el:R,anchor:k,transition:M}=_;if(T===Oe){Re(R,k);return}if(T===Bi){Q(_);return}const O=()=>{s(R),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(_.shapeFlag&1&&M&&!M.persisted){const{leave:K,delayLeave:$}=M,B=()=>K(R,O);$?$(_.el,O,B):B()}else O()},Re=(_,T)=>{let R;for(;_!==T;)R=m(_),s(_),_=R;s(T)},Ce=(_,T,R)=>{const{bum:k,scope:M,job:O,subTree:K,um:$,m:B,a:F}=_;ju(B),ju(F),k&&ha(k),M.stop(),O&&(O.flags|=8,zt(K,_,T,R)),$&&Pe($,T),Pe(()=>{_.isUnmounted=!0},T)},Qt=(_,T,R,k=!1,M=!1,O=0)=>{for(let K=O;K<_.length;K++)zt(_[K],T,R,k,M)},N=_=>{if(_.shapeFlag&6)return N(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const T=m(_.anchor||_.el),R=T&&T[P_];return R?m(R):T};let W=!1;const G=(_,T,R)=>{let k;_==null?T._vnode&&(zt(T._vnode,null,null,!0),k=T._vnode.component):V(T._vnode||null,_,T,null,null,null,R),T._vnode=_,W||(W=!0,Vu(k),cd(),W=!1)},tt={p:V,um:zt,m:Wt,r:Me,mt:Mt,mc:E,pc:dt,pbc:b,n:N,o:e};return{render:G,hydrate:void 0,createApp:Z_(G)}}function _a({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function cr({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function gy(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Dd(e,t,n=!1){const r=e.children,s=t.children;if(ut(r)&&ut(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Tn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Dd(a,l)),l.type===Vo&&(l.patchFlag===-1&&(l=s[i]=Tn(l)),l.el=a.el),l.type===Qn&&!l.el&&(l.el=a.el)}}function my(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Nd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Nd(t)}function ju(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function kd(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?kd(t.subTree):null}const Od=e=>e.__isSuspense;function _y(e,t){t&&t.pendingBranch?ut(e)?t.effects.push(...e):t.effects.push(e):b_(e)}const Oe=Symbol.for("v-fgt"),Vo=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),Bi=Symbol.for("v-stc"),Bs=[];let xe=null;function oe(e=!1){Bs.push(xe=e?null:[])}function yy(){Bs.pop(),xe=Bs[Bs.length-1]||null}let Js=1;function Zi(e,t=!1){Js+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function xd(e){return e.dynamicChildren=Js>0?xe||jr:null,yy(),Js>0&&xe&&xe.push(e),e}function Ie(e,t,n,r,s,i){return xd(lt(e,t,n,r,s,i,!0))}function Md(e,t,n,r,s){return xd(Kt(e,t,n,r,s,!0))}function to(e){return e?e.__v_isVNode===!0:!1}function Is(e,t){return e.type===t.type&&e.key===t.key}const Ld=({key:e})=>e??null,ji=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?qt(e)||ye(e)||ft(e)?{i:He,r:e,k:t,f:!!n}:e:null);function lt(e,t=null,n=null,r=0,s=null,i=e===Oe?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ld(t),ref:t&&ji(t),scopeId:hd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:He};return l?(jl(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=qt(n)?8:16),Js>0&&!a&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const Kt=Ey;function Ey(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===z_)&&(e=Qn),to(e)){const l=Wr(e,t,!0);return n&&jl(l,n),Js>0&&!i&&xe&&(l.shapeFlag&6?xe[xe.indexOf(e)]=l:xe.push(l)),l.patchFlag=-2,l}if(Dy(e)&&(e=e.__vccOpts),t){t=vy(t);let{class:l,style:c}=t;l&&!qt(l)&&(t.class=zn(l)),Ct(c)&&(Ol(c)&&!ut(c)&&(c=ce({},c)),t.style=So(c))}const a=qt(e)?1:Od(e)?128:V_(e)?64:Ct(e)?4:ft(e)?2:0;return lt(e,t,n,r,s,a,i,!0)}function vy(e){return e?Ol(e)||bd(e)?ce({},e):e:null}function Wr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,h=t?Ty(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Ld(h),ref:t&&t.ref?n&&i?ut(i)?i.concat(ji(t)):[i,ji(t)]:ji(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wr(e.ssContent),ssFallback:e.ssFallback&&Wr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Ll(d,c.clone(d)),d}function Fe(e=" ",t=0){return Kt(Vo,null,e,t)}function eo(e,t){const n=Kt(Bi,null,e);return n.staticCount=t,n}function vn(e="",t=!1){return t?(oe(),Md(Qn,null,e)):Kt(Qn,null,e)}function rn(e){return e==null||typeof e=="boolean"?Kt(Qn):ut(e)?Kt(Oe,null,e.slice()):to(e)?Tn(e):Kt(Vo,null,String(e))}function Tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wr(e)}function jl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ut(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),jl(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!bd(t)?t._ctx=He:s===3&&He&&(He.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ft(t)?(t={default:t,_ctx:He},n=32):(t=String(t),r&64?(n=16,t=[Fe(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ty(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=zn([t.class,r.class]));else if(s==="style")t.style=So([t.style,r.style]);else if(To(s)){const i=t[s],a=r[s];a&&i!==a&&!(ut(i)&&i.includes(a))?t[s]=i?[].concat(i,a):a:a==null&&i==null&&!wo(s)&&(t[s]=a)}else s!==""&&(t[s]=r[s])}return t}function Ze(e,t,n,r=null){dn(e,t,7,[n,r])}const wy=vd();let Iy=0;function Ay(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||wy,i={uid:Iy++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rd(r,s),emitsOptions:Td(r,s),emit:null,emitted:null,propsDefaults:Dt,inheritAttrs:r.inheritAttrs,ctx:Dt,data:Dt,props:Dt,attrs:Dt,slots:Dt,refs:Dt,setupState:Dt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ey.bind(null,i),e.ce&&e.ce(i),i}let _e=null;const by=()=>_e||He;let no,Qa;{const e=bo(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};no=t("__VUE_INSTANCE_SETTERS__",n=>_e=n),Qa=t("__VUE_SSR_SETTERS__",n=>Xs=n)}const gi=e=>{const t=_e;return no(e),e.scope.on(),()=>{e.scope.off(),no(t)}},$u=()=>{_e&&_e.scope.off(),no(null)};function Fd(e){return e.vnode.shapeFlag&4}let Xs=!1;function Sy(e,t=!1,n=!1){t&&Qa(t);const{props:r,children:s}=e.vnode,i=Fd(e);ay(e,r,i,t),hy(e,s,n||t);const a=i?Ry(e,t):void 0;return t&&Qa(!1),a}function Ry(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,K_);const{setup:r}=n;if(r){bn();const s=e.setupContext=r.length>1?Py(e):null,i=gi(e),a=hi(r,e,0,[e.props,s]),l=Lf(a);if(Sn(),i(),(l||e.sp)&&!Fs(e)&&gd(e),l){if(a.then($u,$u),t)return a.then(c=>{qu(e,c)}).catch(c=>{Ro(c,e,0)});e.asyncDep=a}else qu(e,a)}else Ud(e)}function qu(e,t,n){ft(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ct(t)&&(e.setupState=od(t)),Ud(e)}function Ud(e,t,n){const r=e.type;e.render||(e.render=r.render||on);{const s=gi(e);bn();try{G_(e)}finally{Sn(),s()}}}const Cy={get(e,t){return ge(e,"get",""),e[t]}};function Py(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Cy),slots:e.slots,emit:e.emit,expose:t}}function $l(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(od(g_(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Us)return Us[n](e)},has(t,n){return n in t||n in Us}})):e.proxy}function Vy(e,t=!0){return ft(e)?e.displayName||e.name:e.name||t&&e.__name}function Dy(e){return ft(e)&&"__vccOpts"in e}const ze=(e,t)=>v_(e,t,Xs);function Bd(e,t,n){try{Zi(-1);const r=arguments.length;return r===2?Ct(t)&&!ut(t)?to(t)?Kt(e,null,[t]):Kt(e,t):Kt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&to(n)&&(n=[n]),Kt(e,t,n))}finally{Zi(1)}}const Ny="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ya;const zu=typeof window<"u"&&window.trustedTypes;if(zu)try{Ya=zu.createPolicy("vue",{createHTML:e=>e})}catch{}const jd=Ya?e=>Ya.createHTML(e):e=>e,ky="http://www.w3.org/2000/svg",Oy="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,Hu=yn&&yn.createElement("template"),xy={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?yn.createElementNS(ky,e):t==="mathml"?yn.createElementNS(Oy,e):n?yn.createElement(e,{is:n}):yn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>yn.createTextNode(e),createComment:e=>yn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hu.innerHTML=jd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Hu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},My=Symbol("_vtc");function Ly(e,t,n){const r=e[My];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ku=Symbol("_vod"),Fy=Symbol("_vsh"),Uy=Symbol(""),By=/(?:^|;)\s*display\s*:/;function jy(e,t,n){const r=e.style,s=qt(n);let i=!1;if(n&&!s){if(t)if(qt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Rs(r,l,"")}else for(const a in t)n[a]==null&&Rs(r,a,"");for(const a in n){a==="display"&&(i=!0);const l=n[a];l!=null?qy(e,a,!qt(t)&&t?t[a]:void 0,l)||Rs(r,a,l):Rs(r,a,"")}}else if(s){if(t!==n){const a=r[Uy];a&&(n+=";"+a),r.cssText=n,i=By.test(n)}}else t&&e.removeAttribute("style");Ku in e&&(e[Ku]=i?r.display:"",e[Fy]&&(r.display="none"))}const Gu=/\s*!important$/;function Rs(e,t,n){if(ut(n))n.forEach(r=>Rs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=$y(e,t);Gu.test(n)?e.setProperty(Ar(r),n.replace(Gu,""),"important"):e[r]=n}}const Wu=["Webkit","Moz","ms"],ya={};function $y(e,t){const n=ya[t];if(n)return n;let r=be(t);if(r!=="filter"&&r in e)return ya[t]=r;r=Ao(r);for(let s=0;s<Wu.length;s++){const i=Wu[s]+r;if(i in e)return ya[t]=i}return t}function qy(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&qt(r)&&n===r}const Qu="http://www.w3.org/1999/xlink";function Yu(e,t,n,r,s,i=Gm(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Qu,t.slice(6,t.length)):e.setAttributeNS(Qu,t,n):n==null||i&&!jf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":fn(n)?String(n):n)}function Ju(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jd(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=jf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function zy(e,t,n,r){e.addEventListener(t,n,r)}function Hy(e,t,n,r){e.removeEventListener(t,n,r)}const Xu=Symbol("_vei");function Ky(e,t,n,r,s=null){const i=e[Xu]||(e[Xu]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=Gy(t);if(r){const h=i[t]=Yy(r,s);zy(e,l,h,c)}else a&&(Hy(e,l,a,c),i[t]=void 0)}}const Zu=/(?:Once|Passive|Capture)$/;function Gy(e){let t;if(Zu.test(e)){t={};let r;for(;r=e.match(Zu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ar(e.slice(2)),t]}let Ea=0;const Wy=Promise.resolve(),Qy=()=>Ea||(Wy.then(()=>Ea=0),Ea=Date.now());function Yy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;dn(Jy(r,n.value),t,5,[r])};return n.value=e,n.attached=Qy(),n}function Jy(e,t){if(ut(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const th=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xy=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Ly(e,r,a):t==="style"?jy(e,n,r):To(t)?wo(t)||Ky(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zy(e,t,r,a))?(Ju(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Yu(e,t,r,a,i,t!=="value")):e._isVueCE&&(tE(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!qt(r)))?Ju(e,be(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Yu(e,t,r,a))};function Zy(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&th(t)&&ft(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return th(t)&&qt(n)?!1:t in e}function tE(e,t){const n=e._def.props;if(!n)return!1;const r=be(t);return Array.isArray(n)?n.some(s=>be(s)===r):Object.keys(n).some(s=>be(s)===r)}const eE=["ctrl","shift","alt","meta"],nE={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>eE.some(n=>e[`${n}Key`]&&!t.includes(n))},rE=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<t.length;a++){const l=nE[t[a]];if(l&&l(s,t))return}return e(s,...i)})},sE=ce({patchProp:Xy},xy);let eh;function iE(){return eh||(eh=dy(sE))}const oE=(...e)=>{const t=iE().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=lE(r);if(!s)return;const i=t._component;!ft(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,aE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function aE(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function lE(e){return qt(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Mr=typeof document<"u";function $d(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function cE(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&$d(e.default)}const At=Object.assign;function va(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ye(s)?s.map(e):e(s)}return n}const js=()=>{},Ye=Array.isArray;function nh(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const qd=/#/g,uE=/&/g,hE=/\//g,fE=/=/g,dE=/\?/g,zd=/\+/g,pE=/%5B/g,gE=/%5D/g,Hd=/%5E/g,mE=/%60/g,Kd=/%7B/g,_E=/%7C/g,Gd=/%7D/g,yE=/%20/g;function ql(e){return e==null?"":encodeURI(""+e).replace(_E,"|").replace(pE,"[").replace(gE,"]")}function EE(e){return ql(e).replace(Kd,"{").replace(Gd,"}").replace(Hd,"^")}function Ja(e){return ql(e).replace(zd,"%2B").replace(yE,"+").replace(qd,"%23").replace(uE,"%26").replace(mE,"`").replace(Kd,"{").replace(Gd,"}").replace(Hd,"^")}function vE(e){return Ja(e).replace(fE,"%3D")}function TE(e){return ql(e).replace(qd,"%23").replace(dE,"%3F")}function wE(e){return TE(e).replace(hE,"%2F")}function Zs(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const IE=/\/$/,AE=e=>e.replace(IE,"");function Ta(e,t,n="/"){let r,s={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=t.slice(0,c),i=t.slice(c,l>0?l:t.length),s=e(i.slice(1))),l>=0&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=CE(r??t,n),{fullPath:r+i+a,path:r,query:s,hash:Zs(a)}}function bE(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function rh(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function SE(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Qr(t.matched[r],n.matched[s])&&Wd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Qr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Wd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!RE(e[n],t[n]))return!1;return!0}function RE(e,t){return Ye(e)?sh(e,t):Ye(t)?sh(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function sh(e,t){return Ye(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function CE(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Xa=function(e){return e.pop="pop",e.push="push",e}({}),wa=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function PE(e){if(!e)if(Mr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),AE(e)}const VE=/^[^#]+#/;function DE(e,t){return e.replace(VE,"#")+t}function NE(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Do=()=>({left:window.scrollX,top:window.scrollY});function kE(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=NE(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ih(e,t){return(history.state?history.state.position-t:-1)+e}const Za=new Map;function OE(e,t){Za.set(e,t)}function xE(e){const t=Za.get(e);return Za.delete(e),t}function ME(e){return typeof e=="string"||e&&typeof e=="object"}function Qd(e){return typeof e=="string"||typeof e=="symbol"}let Bt=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Yd=Symbol("");Bt.MATCHER_NOT_FOUND+"",Bt.NAVIGATION_GUARD_REDIRECT+"",Bt.NAVIGATION_ABORTED+"",Bt.NAVIGATION_CANCELLED+"",Bt.NAVIGATION_DUPLICATED+"";function Yr(e,t){return At(new Error,{type:e,[Yd]:!0},t)}function _n(e,t){return e instanceof Error&&Yd in e&&(t==null||!!(e.type&t))}const LE=["params","query","hash"];function FE(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of LE)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function UE(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(zd," "),i=s.indexOf("="),a=Zs(i<0?s:s.slice(0,i)),l=i<0?null:Zs(s.slice(i+1));if(a in t){let c=t[a];Ye(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function oh(e){let t="";for(let n in e){const r=e[n];if(n=vE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ye(r)?r.map(s=>s&&Ja(s)):[r&&Ja(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function BE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ye(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const jE=Symbol(""),ah=Symbol(""),zl=Symbol(""),Hl=Symbol(""),tl=Symbol("");function As(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function jn(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Yr(Bt.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?c(m):ME(m)?c(Yr(Bt.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>e.call(r&&r.instances[s],t,n,h));let p=Promise.resolve(d);e.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function Ia(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if($d(c)){const h=(c.__vccOpts||c)[t];h&&i.push(jn(h,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=cE(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const m=(p.__vccOpts||p)[t];return m&&jn(m,n,r,a,l,s)()}))}}return i}function $E(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(h=>Qr(h,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(h=>Qr(h,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let qE=()=>location.protocol+"//"+location.host;function Jd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),rh(l,"")}return rh(n,e)+r+s}function zE(e,t,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const y=Jd(e,location),D=n.value,V=t.value;let L=0;if(m){if(n.value=y,t.value=m,a&&a===D){a=null;return}L=V?m.position-V.position:0}else r(y);s.forEach(H=>{H(n.value,D,{delta:L,type:Xa.pop,direction:L?L>0?wa.forward:wa.back:wa.unknown})})};function c(){a=n.value}function h(m){s.push(m);const y=()=>{const D=s.indexOf(m);D>-1&&s.splice(D,1)};return i.push(y),y}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(At({},m.state,{scroll:Do()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:h,destroy:p}}function lh(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Do():null}}function HE(e){const{history:t,location:n}=window,r={value:Jd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:qE()+e+c;try{t[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(y){console.error(y),n[d?"replace":"assign"](m)}}function a(c,h){i(c,At({},t.state,lh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=c}function l(c,h){const d=At({},s.value,t.state,{forward:c,scroll:Do()});i(d.current,d,!0),i(c,At({},lh(r.value,c,null),{position:d.position+1},h),!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function KE(e){e=PE(e);const t=HE(e),n=zE(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=At({location:"",base:e,go:r,createHref:DE.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let fr=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Xt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Xt||{});const GE={type:fr.Static,value:""},WE=/[a-zA-Z0-9_]/;function QE(e){if(!e)return[[]];if(e==="/")return[[GE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=Xt.Static,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===Xt.Static?i.push({type:fr.Static,value:h}):n===Xt.Param||n===Xt.ParamRegExp||n===Xt.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:fr.Param,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==Xt.ParamRegExp){r=n,n=Xt.EscapeNext;continue}switch(n){case Xt.Static:c==="/"?(h&&p(),a()):c===":"?(p(),n=Xt.Param):m();break;case Xt.EscapeNext:m(),n=r;break;case Xt.Param:c==="("?n=Xt.ParamRegExp:WE.test(c)?m():(p(),n=Xt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Xt.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=Xt.ParamRegExpEnd:d+=c;break;case Xt.ParamRegExpEnd:p(),n=Xt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===Xt.ParamRegExp&&t(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}const ch="[^/]+?",YE={sensitive:!1,strict:!1,start:!0,end:!0};var we=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(we||{});const JE=/[.+*?^${}()[\]/\\]/g;function XE(e,t){const n=At({},YE,t),r=[];let s=n.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[we.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let y=we.Segment+(n.sensitive?we.BonusCaseSensitive:0);if(m.type===fr.Static)p||(s+="/"),s+=m.value.replace(JE,"\\$&"),y+=we.Static;else if(m.type===fr.Param){const{value:D,repeatable:V,optional:L,regexp:H}=m;i.push({name:D,repeatable:V,optional:L});const j=H||ch;if(j!==ch){y+=we.BonusCustomRegExp;try{`${j}`}catch(Q){throw new Error(`Invalid custom RegExp for param "${D}" (${j}): `+Q.message)}}let z=V?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(z=L&&h.length<2?`(?:/${z})`:"/"+z),L&&(z+="?"),s+=z,y+=we.Dynamic,L&&(y+=we.BonusOptional),V&&(y+=we.BonusRepeatable),j===".*"&&(y+=we.BonusWildcard)}d.push(y)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=we.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const y=d[m]||"",D=i[m-1];p[D.name]=y&&D.repeatable?y.split("/"):y}return p}function c(h){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of m)if(y.type===fr.Static)d+=y.value;else if(y.type===fr.Param){const{value:D,repeatable:V,optional:L}=y,H=D in h?h[D]:"";if(Ye(H)&&!V)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const j=Ye(H)?H.join("/"):H;if(!j)if(L)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${D}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function ZE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===we.Static+we.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===we.Static+we.Segment?1:-1:0}function Xd(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=ZE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(uh(r))return 1;if(uh(s))return-1}return s.length-r.length}function uh(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const tv={strict:!1,end:!0,sensitive:!1};function ev(e,t,n){const r=XE(QE(e.path),n),s=At(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function nv(e,t){const n=[],r=new Map;t=nh(tv,t);function s(p){return r.get(p)}function i(p,m,y){const D=!y,V=fh(p);V.aliasOf=y&&y.record;const L=nh(t,p),H=[V];if("alias"in p){const Q=typeof p.alias=="string"?[p.alias]:p.alias;for(const at of Q)H.push(fh(At({},V,{components:y?y.record.components:V.components,path:at,aliasOf:y?y.record:V})))}let j,z;for(const Q of H){const{path:at}=Q;if(m&&at[0]!=="/"){const gt=m.record.path,I=gt[gt.length-1]==="/"?"":"/";Q.path=m.record.path+(at&&I+at)}if(j=ev(Q,m,L),y?y.alias.push(j):(z=z||j,z!==j&&z.alias.push(j),D&&p.name&&!dh(j)&&a(p.name)),Zd(j)&&c(j),V.children){const gt=V.children;for(let I=0;I<gt.length;I++)i(gt[I],j,y&&y.children[I])}y=y||j}return z?()=>{a(z)}:js}function a(p){if(Qd(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=iv(p,n);n.splice(m,0,p),p.record.name&&!dh(p)&&r.set(p.record.name,p)}function h(p,m){let y,D={},V,L;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Yr(Bt.MATCHER_NOT_FOUND,{location:p});L=y.record.name,D=At(hh(m.params,y.keys.filter(z=>!z.optional).concat(y.parent?y.parent.keys.filter(z=>z.optional):[]).map(z=>z.name)),p.params&&hh(p.params,y.keys.map(z=>z.name))),V=y.stringify(D)}else if(p.path!=null)V=p.path,y=n.find(z=>z.re.test(V)),y&&(D=y.parse(V),L=y.record.name);else{if(y=m.name?r.get(m.name):n.find(z=>z.re.test(m.path)),!y)throw Yr(Bt.MATCHER_NOT_FOUND,{location:p,currentLocation:m});L=y.record.name,D=At({},m.params,p.params),V=y.stringify(D)}const H=[];let j=y;for(;j;)H.unshift(j.record),j=j.parent;return{name:L,path:V,params:D,matched:H,meta:sv(H)}}e.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function hh(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fh(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:rv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function rv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function dh(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sv(e){return e.reduce((t,n)=>At(t,n.meta),{})}function iv(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Xd(e,t[i])<0?r=i:n=i+1}const s=ov(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function ov(e){let t=e;for(;t=t.parent;)if(Zd(t)&&Xd(e,t)===0)return t}function Zd({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ph(e){const t=je(zl),n=je(Hl),r=ze(()=>{const c=Ut(e.to);return t.resolve(c)}),s=ze(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Qr.bind(null,d));if(m>-1)return m;const y=gh(c[h-2]);return h>1&&gh(d)===y&&p[p.length-1].path!==y?p.findIndex(Qr.bind(null,c[h-2])):m}),i=ze(()=>s.value>-1&&hv(n.params,r.value.params)),a=ze(()=>s.value>-1&&s.value===n.matched.length-1&&Wd(n.params,r.value.params));function l(c={}){if(uv(c)){const h=t[Ut(e.replace)?"replace":"push"](Ut(e.to)).catch(js);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:ze(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function av(e){return e.length===1?e[0]:e}const lv=pd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ph,setup(e,{slots:t}){const n=ui(ph(e)),{options:r}=je(zl),s=ze(()=>({[mh(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mh(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&av(t.default(n));return e.custom?i:Bd("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),cv=lv;function uv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function hv(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ye(s)||s.length!==r.length||r.some((i,a)=>i.valueOf()!==s[a].valueOf()))return!1}return!0}function gh(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const mh=(e,t,n)=>e??t??n,fv=pd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=je(tl),s=ze(()=>e.route||r.value),i=je(ah,0),a=ze(()=>{let h=Ut(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=ze(()=>s.value.matched[a.value]);xs(ah,ze(()=>a.value+1)),xs(jE,l),xs(tl,s);const c=In();return Ms(()=>[c.value,l.value,e.name],([h,d,p],[m,y,D])=>{d&&(d.instances[p]=h,y&&y!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),h&&d&&(!y||!Qr(d,y)||!m)&&(d.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,d=e.name,p=l.value,m=p&&p.components[d];if(!m)return _h(n.default,{Component:m,route:h});const y=p.props[d],D=y?y===!0?h.params:typeof y=="function"?y(h):y:null,L=Bd(m,At({},D,t,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return _h(n.default,{Component:L,route:h})||L}}});function _h(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const dv=fv;function pv(e){const t=nv(e.routes,e),n=e.parseQuery||UE,r=e.stringifyQuery||oh,s=e.history,i=As(),a=As(),l=As(),c=m_(Un);let h=Un;Mr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=va.bind(null,N=>""+N),p=va.bind(null,wE),m=va.bind(null,Zs);function y(N,W){let G,tt;return Qd(N)?(G=t.getRecordMatcher(N),tt=W):tt=N,t.addRoute(tt,G)}function D(N){const W=t.getRecordMatcher(N);W&&t.removeRoute(W)}function V(){return t.getRoutes().map(N=>N.record)}function L(N){return!!t.getRecordMatcher(N)}function H(N,W){if(W=At({},W||c.value),typeof N=="string"){const R=Ta(n,N,W.path),k=t.resolve({path:R.path},W),M=s.createHref(R.fullPath);return At(R,k,{params:m(k.params),hash:Zs(R.hash),redirectedFrom:void 0,href:M})}let G;if(N.path!=null)G=At({},N,{path:Ta(n,N.path,W.path).path});else{const R=At({},N.params);for(const k in R)R[k]==null&&delete R[k];G=At({},N,{params:p(R)}),W.params=p(W.params)}const tt=t.resolve(G,W),mt=N.hash||"";tt.params=d(m(tt.params));const _=bE(r,At({},N,{hash:EE(mt),path:tt.path})),T=s.createHref(_);return At({fullPath:_,hash:mt,query:r===oh?BE(N.query):N.query||{}},tt,{redirectedFrom:void 0,href:T})}function j(N){return typeof N=="string"?Ta(n,N,c.value.path):At({},N)}function z(N,W){if(h!==N)return Yr(Bt.NAVIGATION_CANCELLED,{from:W,to:N})}function Q(N){return I(N)}function at(N){return Q(At(j(N),{replace:!0}))}function gt(N,W){const G=N.matched[N.matched.length-1];if(G&&G.redirect){const{redirect:tt}=G;let mt=typeof tt=="function"?tt(N,W):tt;return typeof mt=="string"&&(mt=mt.includes("?")||mt.includes("#")?mt=j(mt):{path:mt},mt.params={}),At({query:N.query,hash:N.hash,params:mt.path!=null?{}:N.params},mt)}}function I(N,W){const G=h=H(N),tt=c.value,mt=N.state,_=N.force,T=N.replace===!0,R=gt(G,tt);if(R)return I(At(j(R),{state:typeof R=="object"?At({},mt,R.state):mt,force:_,replace:T}),W||G);const k=G;k.redirectedFrom=W;let M;return!_&&SE(r,tt,G)&&(M=Yr(Bt.NAVIGATION_DUPLICATED,{to:k,from:tt}),Wt(tt,tt,!0,!1)),(M?Promise.resolve(M):b(k,tt)).catch(O=>_n(O)?_n(O,Bt.NAVIGATION_GUARD_REDIRECT)?O:Se(O):dt(O,k,tt)).then(O=>{if(O){if(_n(O,Bt.NAVIGATION_GUARD_REDIRECT))return I(At({replace:T},j(O.to),{state:typeof O.to=="object"?At({},mt,O.to.state):mt,force:_}),W||k)}else O=S(k,tt,!0,T,mt);return A(k,tt,O),O})}function E(N,W){const G=z(N,W);return G?Promise.reject(G):Promise.resolve()}function w(N){const W=Re.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(N):N()}function b(N,W){let G;const[tt,mt,_]=$E(N,W);G=Ia(tt.reverse(),"beforeRouteLeave",N,W);for(const R of tt)R.leaveGuards.forEach(k=>{G.push(jn(k,N,W))});const T=E.bind(null,N,W);return G.push(T),Qt(G).then(()=>{G=[];for(const R of i.list())G.push(jn(R,N,W));return G.push(T),Qt(G)}).then(()=>{G=Ia(mt,"beforeRouteUpdate",N,W);for(const R of mt)R.updateGuards.forEach(k=>{G.push(jn(k,N,W))});return G.push(T),Qt(G)}).then(()=>{G=[];for(const R of _)if(R.beforeEnter)if(Ye(R.beforeEnter))for(const k of R.beforeEnter)G.push(jn(k,N,W));else G.push(jn(R.beforeEnter,N,W));return G.push(T),Qt(G)}).then(()=>(N.matched.forEach(R=>R.enterCallbacks={}),G=Ia(_,"beforeRouteEnter",N,W,w),G.push(T),Qt(G))).then(()=>{G=[];for(const R of a.list())G.push(jn(R,N,W));return G.push(T),Qt(G)}).catch(R=>_n(R,Bt.NAVIGATION_CANCELLED)?R:Promise.reject(R))}function A(N,W,G){l.list().forEach(tt=>w(()=>tt(N,W,G)))}function S(N,W,G,tt,mt){const _=z(N,W);if(_)return _;const T=W===Un,R=Mr?history.state:{};G&&(tt||T?s.replace(N.fullPath,At({scroll:T&&R&&R.scroll},mt)):s.push(N.fullPath,mt)),c.value=N,Wt(N,W,G,T),Se()}let v;function Mt(){v||(v=s.listen((N,W,G)=>{if(!Ce.listening)return;const tt=H(N),mt=gt(tt,Ce.currentRoute.value);if(mt){I(At(mt,{replace:!0,force:!0}),tt).catch(js);return}h=tt;const _=c.value;Mr&&OE(ih(_.fullPath,G.delta),Do()),b(tt,_).catch(T=>_n(T,Bt.NAVIGATION_ABORTED|Bt.NAVIGATION_CANCELLED)?T:_n(T,Bt.NAVIGATION_GUARD_REDIRECT)?(I(At(j(T.to),{force:!0}),tt).then(R=>{_n(R,Bt.NAVIGATION_ABORTED|Bt.NAVIGATION_DUPLICATED)&&!G.delta&&G.type===Xa.pop&&s.go(-1,!1)}).catch(js),Promise.reject()):(G.delta&&s.go(-G.delta,!1),dt(T,tt,_))).then(T=>{T=T||S(tt,_,!1),T&&(G.delta&&!_n(T,Bt.NAVIGATION_CANCELLED)?s.go(-G.delta,!1):G.type===Xa.pop&&_n(T,Bt.NAVIGATION_ABORTED|Bt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(tt,_,T)}).catch(js)}))}let he=As(),nt=As(),X;function dt(N,W,G){Se(N);const tt=nt.list();return tt.length?tt.forEach(mt=>mt(N,W,G)):console.error(N),Promise.reject(N)}function jt(){return X&&c.value!==Un?Promise.resolve():new Promise((N,W)=>{he.add([N,W])})}function Se(N){return X||(X=!N,Mt(),he.list().forEach(([W,G])=>N?G(N):W()),he.reset()),N}function Wt(N,W,G,tt){const{scrollBehavior:mt}=e;if(!Mr||!mt)return Promise.resolve();const _=!G&&xE(ih(N.fullPath,0))||(tt||!G)&&history.state&&history.state.scroll||null;return xl().then(()=>mt(N,W,_)).then(T=>T&&kE(T)).catch(T=>dt(T,N,W))}const zt=N=>s.go(N);let Me;const Re=new Set,Ce={currentRoute:c,listening:!0,addRoute:y,removeRoute:D,clearRoutes:t.clearRoutes,hasRoute:L,getRoutes:V,resolve:H,options:e,push:Q,replace:at,go:zt,back:()=>zt(-1),forward:()=>zt(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:nt.add,isReady:jt,install(N){N.component("RouterLink",cv),N.component("RouterView",dv),N.config.globalProperties.$router=Ce,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Ut(c)}),Mr&&!Me&&c.value===Un&&(Me=!0,Q(s.location).catch(tt=>{}));const W={};for(const tt in Un)Object.defineProperty(W,tt,{get:()=>c.value[tt],enumerable:!0});N.provide(zl,Ce),N.provide(Hl,sd(W)),N.provide(tl,c);const G=N.unmount;Re.add(N),N.unmount=function(){Re.delete(N),Re.size<1&&(h=Un,v&&v(),v=null,c.value=Un,Me=!1,X=!1),G()}}};function Qt(N){return N.reduce((W,G)=>W.then(()=>w(G)),Promise.resolve())}return Ce}function gv(e){return je(Hl)}function mv(e){return e.toLocaleDateString("sv",{timeZone:"Europe/Rome"})}async function tp(){return(await fetch("/partita-domani-a-roma/data/matches.json",{cache:"no-cache"})).json()}async function yh(e){const t=mv(e);try{const r=(await tp())[t];return r?{timestamp:new Date(r.timestamp),homeTeam:r.homeTeam,awayTeamName:r.awayTeamName}:null}catch{return null}}async function Eh(){try{const t=(await tp()).nextMatch;return t?{date:t.date,timestamp:new Date(t.timestamp),homeTeam:t.homeTeam,awayTeamName:t.awayTeamName}:null}catch{return null}}function Le(e,t={}){typeof window.gtag=="function"&&window.gtag("event",e,t)}const _v=()=>{};var vh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},yv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,h=c?e[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,y=h&63;c||(y=64,a||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ep(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Ev;const m=i<<2|l>>4;if(r.push(m),h!==64){const y=l<<4&240|h>>2;if(r.push(y),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ev extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vv=function(e){const t=ep(e);return np.encodeByteArray(t,!0)},ro=function(e){return vv(e).replace(/\./g,"")},Tv=function(e){try{return np.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=()=>wv().__FIREBASE_DEFAULTS__,Av=()=>{if(typeof process>"u"||typeof vh>"u")return;const e=vh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},bv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Tv(e[1]);return t&&JSON.parse(t)},Kl=()=>{try{return _v()||Iv()||Av()||bv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Sv=e=>{var t,n;return(n=(t=Kl())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},Rv=e=>{const t=Sv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},rp=()=>{var e;return(e=Kl())==null?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[ro(JSON.stringify(n)),ro(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dv(){var t;const e=(t=Kl())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nv(){return!Dv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sp(){try{return typeof indexedDB=="object"}catch{return!1}}function ip(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(n){t(n)}})}function kv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="FirebaseError";class br extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ov,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,No.prototype.create)}}class No{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?xv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new br(s,l,r)}}function xv(e,t){return e.replace(Mv,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Mv=/\{\$([^}]+)}/g;function so(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(Th(i)&&Th(a)){if(!so(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Th(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lv(e){return(await fetch(e,{credentials:"include"})).ok}class Cn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Cv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bv(t))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=hr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=hr){return this.instances.has(t)}getOptions(t=hr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=hr){return this.component?this.component.multipleInstances?t:hr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uv(e){return e===hr?void 0:e}function Bv(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Tt||(Tt={}));const $v={debug:Tt.DEBUG,verbose:Tt.VERBOSE,info:Tt.INFO,warn:Tt.WARN,error:Tt.ERROR,silent:Tt.SILENT},qv=Tt.INFO,zv={[Tt.DEBUG]:"log",[Tt.VERBOSE]:"log",[Tt.INFO]:"info",[Tt.WARN]:"warn",[Tt.ERROR]:"error"},Hv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=zv[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ap{constructor(t){this.name=t,this._logLevel=qv,this._logHandler=Hv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Tt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$v[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Tt.DEBUG,...t),this._logHandler(this,Tt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Tt.VERBOSE,...t),this._logHandler(this,Tt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Tt.INFO,...t),this._logHandler(this,Tt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Tt.WARN,...t),this._logHandler(this,Tt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Tt.ERROR,...t),this._logHandler(this,Tt.ERROR,...t)}}const Kv=(e,t)=>t.some(n=>e instanceof n);let wh,Ih;function Gv(){return wh||(wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wv(){return Ih||(Ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lp=new WeakMap,el=new WeakMap,cp=new WeakMap,Aa=new WeakMap,Gl=new WeakMap;function Qv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(An(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&lp.set(n,e)}).catch(()=>{}),Gl.set(t,e),t}function Yv(e){if(el.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});el.set(e,t)}let nl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return el.get(e);if(t==="objectStoreNames")return e.objectStoreNames||cp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jv(e){nl=e(nl)}function Xv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ba(this),t,...n);return cp.set(r,t.sort?t.sort():[t]),An(r)}:Wv().includes(e)?function(...t){return e.apply(ba(this),t),An(lp.get(this))}:function(...t){return An(e.apply(ba(this),t))}}function Zv(e){return typeof e=="function"?Xv(e):(e instanceof IDBTransaction&&Yv(e),Kv(e,Gv())?new Proxy(e,nl):e)}function An(e){if(e instanceof IDBRequest)return Qv(e);if(Aa.has(e))return Aa.get(e);const t=Zv(e);return t!==e&&(Aa.set(e,t),Gl.set(t,e)),t}const ba=e=>Gl.get(e);function ko(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=An(a);return r&&a.addEventListener("upgradeneeded",c=>{r(An(a.result),c.oldVersion,c.newVersion,An(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}function Sa(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),An(n).then(()=>{})}const tT=["get","getKey","getAll","getAllKeys","count"],eT=["put","add","delete","clear"],Ra=new Map;function Ah(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ra.get(t))return Ra.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=eT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tT.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Ra.set(t,i),i}Jv(e=>({...e,get:(t,n,r)=>Ah(t,n)||e.get(t,n,r),has:(t,n)=>!!Ah(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rT(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const rl="@firebase/app",bh="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new ap("@firebase/app"),sT="@firebase/app-compat",iT="@firebase/analytics-compat",oT="@firebase/analytics",aT="@firebase/app-check-compat",lT="@firebase/app-check",cT="@firebase/auth",uT="@firebase/auth-compat",hT="@firebase/database",fT="@firebase/data-connect",dT="@firebase/database-compat",pT="@firebase/functions",gT="@firebase/functions-compat",mT="@firebase/installations",_T="@firebase/installations-compat",yT="@firebase/messaging",ET="@firebase/messaging-compat",vT="@firebase/performance",TT="@firebase/performance-compat",wT="@firebase/remote-config",IT="@firebase/remote-config-compat",AT="@firebase/storage",bT="@firebase/storage-compat",ST="@firebase/firestore",RT="@firebase/ai",CT="@firebase/firestore-compat",PT="firebase",VT="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="[DEFAULT]",DT={[rl]:"fire-core",[sT]:"fire-core-compat",[oT]:"fire-analytics",[iT]:"fire-analytics-compat",[lT]:"fire-app-check",[aT]:"fire-app-check-compat",[cT]:"fire-auth",[uT]:"fire-auth-compat",[hT]:"fire-rtdb",[fT]:"fire-data-connect",[dT]:"fire-rtdb-compat",[pT]:"fire-fn",[gT]:"fire-fn-compat",[mT]:"fire-iid",[_T]:"fire-iid-compat",[yT]:"fire-fcm",[ET]:"fire-fcm-compat",[vT]:"fire-perf",[TT]:"fire-perf-compat",[wT]:"fire-rc",[IT]:"fire-rc-compat",[AT]:"fire-gcs",[bT]:"fire-gcs-compat",[ST]:"fire-fst",[CT]:"fire-fst-compat",[RT]:"fire-vertex","fire-js":"fire-js",[PT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new Map,NT=new Map,il=new Map;function Sh(e,t){try{e.container.addComponent(t)}catch(n){Pn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Yn(e){const t=e.name;if(il.has(t))return Pn.debug(`There were multiple attempts to register component ${t}.`),!1;il.set(t,e);for(const n of io.values())Sh(n,e);for(const n of NT.values())Sh(n,e);return!0}function Oo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function kT(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hn=new No("app","Firebase",OT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=VT;function up(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:sl,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});if(n||(n=rp()),!n)throw Hn.create("no-options");const i=io.get(s);if(i){if(so(n,i.options)&&so(r,i.config))return i;throw Hn.create("duplicate-app",{appName:s})}const a=new jv(s);for(const c of il.values())a.addComponent(c);const l=new xT(n,r,a);return io.set(s,l),l}function hp(e=sl){const t=io.get(e);if(!t&&e===sl&&rp())return up();if(!t)throw Hn.create("no-app",{appName:e});return t}function an(e,t,n){let r=DT[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}Yn(new Cn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="firebase-heartbeat-database",FT=1,ti="firebase-heartbeat-store";let Ca=null;function fp(){return Ca||(Ca=ko(LT,FT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ti)}catch(n){console.warn(n)}}}}).catch(e=>{throw Hn.create("idb-open",{originalErrorMessage:e.message})})),Ca}async function UT(e){try{const n=(await fp()).transaction(ti),r=await n.objectStore(ti).get(dp(e));return await n.done,r}catch(t){if(t instanceof br)Pn.warn(t.message);else{const n=Hn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Pn.warn(n.message)}}}async function Rh(e,t){try{const r=(await fp()).transaction(ti,"readwrite");await r.objectStore(ti).put(t,dp(e)),await r.done}catch(n){if(n instanceof br)Pn.warn(n.message);else{const r=Hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function dp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=1024,jT=30;class $T{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ch();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>jT){const a=HT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ch(),{heartbeatsToSend:r,unsentEntries:s}=qT(this._heartbeatsCache.heartbeats),i=ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pn.warn(n),""}}}function Ch(){return new Date().toISOString().substring(0,10)}function qT(e,t=BT){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ph(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ph(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sp()?ip().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ph(e){return ro(JSON.stringify({version:2,heartbeats:e})).length}function HT(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(e){Yn(new Cn("platform-logger",t=>new nT(t),"PRIVATE")),Yn(new Cn("heartbeat",t=>new $T(t),"PRIVATE")),an(rl,bh,e),an(rl,bh,"esm2020"),an("fire-js","")}KT("");var GT="firebase",WT="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(GT,WT,"app");var Vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kn,pp;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,E){function w(){}w.prototype=E.prototype,I.F=E.prototype,I.prototype=new w,I.prototype.constructor=I,I.D=function(b,A,S){for(var v=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)v[Mt-2]=arguments[Mt];return E.prototype[A].apply(b,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,E,w){w||(w=0);const b=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)b[A]=E.charCodeAt(w++)|E.charCodeAt(w++)<<8|E.charCodeAt(w++)<<16|E.charCodeAt(w++)<<24;else for(A=0;A<16;++A)b[A]=E[w++]|E[w++]<<8|E[w++]<<16|E[w++]<<24;E=I.g[0],w=I.g[1],A=I.g[2];let S=I.g[3],v;v=E+(S^w&(A^S))+b[0]+3614090360&4294967295,E=w+(v<<7&4294967295|v>>>25),v=S+(A^E&(w^A))+b[1]+3905402710&4294967295,S=E+(v<<12&4294967295|v>>>20),v=A+(w^S&(E^w))+b[2]+606105819&4294967295,A=S+(v<<17&4294967295|v>>>15),v=w+(E^A&(S^E))+b[3]+3250441966&4294967295,w=A+(v<<22&4294967295|v>>>10),v=E+(S^w&(A^S))+b[4]+4118548399&4294967295,E=w+(v<<7&4294967295|v>>>25),v=S+(A^E&(w^A))+b[5]+1200080426&4294967295,S=E+(v<<12&4294967295|v>>>20),v=A+(w^S&(E^w))+b[6]+2821735955&4294967295,A=S+(v<<17&4294967295|v>>>15),v=w+(E^A&(S^E))+b[7]+4249261313&4294967295,w=A+(v<<22&4294967295|v>>>10),v=E+(S^w&(A^S))+b[8]+1770035416&4294967295,E=w+(v<<7&4294967295|v>>>25),v=S+(A^E&(w^A))+b[9]+2336552879&4294967295,S=E+(v<<12&4294967295|v>>>20),v=A+(w^S&(E^w))+b[10]+4294925233&4294967295,A=S+(v<<17&4294967295|v>>>15),v=w+(E^A&(S^E))+b[11]+2304563134&4294967295,w=A+(v<<22&4294967295|v>>>10),v=E+(S^w&(A^S))+b[12]+1804603682&4294967295,E=w+(v<<7&4294967295|v>>>25),v=S+(A^E&(w^A))+b[13]+4254626195&4294967295,S=E+(v<<12&4294967295|v>>>20),v=A+(w^S&(E^w))+b[14]+2792965006&4294967295,A=S+(v<<17&4294967295|v>>>15),v=w+(E^A&(S^E))+b[15]+1236535329&4294967295,w=A+(v<<22&4294967295|v>>>10),v=E+(A^S&(w^A))+b[1]+4129170786&4294967295,E=w+(v<<5&4294967295|v>>>27),v=S+(w^A&(E^w))+b[6]+3225465664&4294967295,S=E+(v<<9&4294967295|v>>>23),v=A+(E^w&(S^E))+b[11]+643717713&4294967295,A=S+(v<<14&4294967295|v>>>18),v=w+(S^E&(A^S))+b[0]+3921069994&4294967295,w=A+(v<<20&4294967295|v>>>12),v=E+(A^S&(w^A))+b[5]+3593408605&4294967295,E=w+(v<<5&4294967295|v>>>27),v=S+(w^A&(E^w))+b[10]+38016083&4294967295,S=E+(v<<9&4294967295|v>>>23),v=A+(E^w&(S^E))+b[15]+3634488961&4294967295,A=S+(v<<14&4294967295|v>>>18),v=w+(S^E&(A^S))+b[4]+3889429448&4294967295,w=A+(v<<20&4294967295|v>>>12),v=E+(A^S&(w^A))+b[9]+568446438&4294967295,E=w+(v<<5&4294967295|v>>>27),v=S+(w^A&(E^w))+b[14]+3275163606&4294967295,S=E+(v<<9&4294967295|v>>>23),v=A+(E^w&(S^E))+b[3]+4107603335&4294967295,A=S+(v<<14&4294967295|v>>>18),v=w+(S^E&(A^S))+b[8]+1163531501&4294967295,w=A+(v<<20&4294967295|v>>>12),v=E+(A^S&(w^A))+b[13]+2850285829&4294967295,E=w+(v<<5&4294967295|v>>>27),v=S+(w^A&(E^w))+b[2]+4243563512&4294967295,S=E+(v<<9&4294967295|v>>>23),v=A+(E^w&(S^E))+b[7]+1735328473&4294967295,A=S+(v<<14&4294967295|v>>>18),v=w+(S^E&(A^S))+b[12]+2368359562&4294967295,w=A+(v<<20&4294967295|v>>>12),v=E+(w^A^S)+b[5]+4294588738&4294967295,E=w+(v<<4&4294967295|v>>>28),v=S+(E^w^A)+b[8]+2272392833&4294967295,S=E+(v<<11&4294967295|v>>>21),v=A+(S^E^w)+b[11]+1839030562&4294967295,A=S+(v<<16&4294967295|v>>>16),v=w+(A^S^E)+b[14]+4259657740&4294967295,w=A+(v<<23&4294967295|v>>>9),v=E+(w^A^S)+b[1]+2763975236&4294967295,E=w+(v<<4&4294967295|v>>>28),v=S+(E^w^A)+b[4]+1272893353&4294967295,S=E+(v<<11&4294967295|v>>>21),v=A+(S^E^w)+b[7]+4139469664&4294967295,A=S+(v<<16&4294967295|v>>>16),v=w+(A^S^E)+b[10]+3200236656&4294967295,w=A+(v<<23&4294967295|v>>>9),v=E+(w^A^S)+b[13]+681279174&4294967295,E=w+(v<<4&4294967295|v>>>28),v=S+(E^w^A)+b[0]+3936430074&4294967295,S=E+(v<<11&4294967295|v>>>21),v=A+(S^E^w)+b[3]+3572445317&4294967295,A=S+(v<<16&4294967295|v>>>16),v=w+(A^S^E)+b[6]+76029189&4294967295,w=A+(v<<23&4294967295|v>>>9),v=E+(w^A^S)+b[9]+3654602809&4294967295,E=w+(v<<4&4294967295|v>>>28),v=S+(E^w^A)+b[12]+3873151461&4294967295,S=E+(v<<11&4294967295|v>>>21),v=A+(S^E^w)+b[15]+530742520&4294967295,A=S+(v<<16&4294967295|v>>>16),v=w+(A^S^E)+b[2]+3299628645&4294967295,w=A+(v<<23&4294967295|v>>>9),v=E+(A^(w|~S))+b[0]+4096336452&4294967295,E=w+(v<<6&4294967295|v>>>26),v=S+(w^(E|~A))+b[7]+1126891415&4294967295,S=E+(v<<10&4294967295|v>>>22),v=A+(E^(S|~w))+b[14]+2878612391&4294967295,A=S+(v<<15&4294967295|v>>>17),v=w+(S^(A|~E))+b[5]+4237533241&4294967295,w=A+(v<<21&4294967295|v>>>11),v=E+(A^(w|~S))+b[12]+1700485571&4294967295,E=w+(v<<6&4294967295|v>>>26),v=S+(w^(E|~A))+b[3]+2399980690&4294967295,S=E+(v<<10&4294967295|v>>>22),v=A+(E^(S|~w))+b[10]+4293915773&4294967295,A=S+(v<<15&4294967295|v>>>17),v=w+(S^(A|~E))+b[1]+2240044497&4294967295,w=A+(v<<21&4294967295|v>>>11),v=E+(A^(w|~S))+b[8]+1873313359&4294967295,E=w+(v<<6&4294967295|v>>>26),v=S+(w^(E|~A))+b[15]+4264355552&4294967295,S=E+(v<<10&4294967295|v>>>22),v=A+(E^(S|~w))+b[6]+2734768916&4294967295,A=S+(v<<15&4294967295|v>>>17),v=w+(S^(A|~E))+b[13]+1309151649&4294967295,w=A+(v<<21&4294967295|v>>>11),v=E+(A^(w|~S))+b[4]+4149444226&4294967295,E=w+(v<<6&4294967295|v>>>26),v=S+(w^(E|~A))+b[11]+3174756917&4294967295,S=E+(v<<10&4294967295|v>>>22),v=A+(E^(S|~w))+b[2]+718787259&4294967295,A=S+(v<<15&4294967295|v>>>17),v=w+(S^(A|~E))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+E&4294967295,I.g[1]=I.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.v=function(I,E){E===void 0&&(E=I.length);const w=E-this.blockSize,b=this.C;let A=this.h,S=0;for(;S<E;){if(A==0)for(;S<=w;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<E;)if(b[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,b),A=0;break}}else for(;S<E;)if(b[A++]=I[S++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=E},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var E=1;E<I.length-8;++E)I[E]=0;E=this.o*8;for(var w=I.length-8;w<I.length;++w)I[w]=E&255,E/=256;for(this.v(I),I=Array(16),E=0,w=0;w<4;++w)for(let b=0;b<32;b+=8)I[E++]=this.g[w]>>>b&255;return I};function i(I,E){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=E(I)}function a(I,E){this.h=E;const w=[];let b=!0;for(let A=I.length-1;A>=0;A--){const S=I[A]|0;b&&S==E||(w[A]=S,b=!1)}this.g=w}var l={};function c(I){return-128<=I&&I<128?i(I,function(E){return new a([E|0],E<0?-1:0)}):new a([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return L(h(-I));const E=[];let w=1;for(let b=0;I>=w;b++)E[b]=I/w|0,w*=4294967296;return new a(E,0)}function d(I,E){if(I.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(I.charAt(0)=="-")return L(d(I.substring(1),E));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(E,8));let b=p;for(let S=0;S<I.length;S+=8){var A=Math.min(8,I.length-S);const v=parseInt(I.substring(S,S+A),E);A<8?(A=h(Math.pow(E,A)),b=b.j(A).add(h(v))):(b=b.j(w),b=b.add(h(v)))}return b}var p=c(0),m=c(1),y=c(16777216);e=a.prototype,e.m=function(){if(V(this))return-L(this).m();let I=0,E=1;for(let w=0;w<this.g.length;w++){const b=this.i(w);I+=(b>=0?b:4294967296+b)*E,E*=4294967296}return I},e.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(V(this))return"-"+L(this).toString(I);const E=h(Math.pow(I,6));var w=this;let b="";for(;;){const A=Q(w,E).g;w=H(w,A.j(E));let S=((w.g.length>0?w.g[0]:w.h)>>>0).toString(I);if(w=A,D(w))return S+b;for(;S.length<6;)S="0"+S;b=S+b}},e.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(let E=0;E<I.g.length;E++)if(I.g[E]!=0)return!1;return!0}function V(I){return I.h==-1}e.l=function(I){return I=H(this,I),V(I)?-1:D(I)?0:1};function L(I){const E=I.g.length,w=[];for(let b=0;b<E;b++)w[b]=~I.g[b];return new a(w,~I.h).add(m)}e.abs=function(){return V(this)?L(this):this},e.add=function(I){const E=Math.max(this.g.length,I.g.length),w=[];let b=0;for(let A=0;A<=E;A++){let S=b+(this.i(A)&65535)+(I.i(A)&65535),v=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);b=v>>>16,S&=65535,v&=65535,w[A]=v<<16|S}return new a(w,w[w.length-1]&-2147483648?-1:0)};function H(I,E){return I.add(L(E))}e.j=function(I){if(D(this)||D(I))return p;if(V(this))return V(I)?L(this).j(L(I)):L(L(this).j(I));if(V(I))return L(this.j(L(I)));if(this.l(y)<0&&I.l(y)<0)return h(this.m()*I.m());const E=this.g.length+I.g.length,w=[];for(var b=0;b<2*E;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(let A=0;A<I.g.length;A++){const S=this.i(b)>>>16,v=this.i(b)&65535,Mt=I.i(A)>>>16,he=I.i(A)&65535;w[2*b+2*A]+=v*he,j(w,2*b+2*A),w[2*b+2*A+1]+=S*he,j(w,2*b+2*A+1),w[2*b+2*A+1]+=v*Mt,j(w,2*b+2*A+1),w[2*b+2*A+2]+=S*Mt,j(w,2*b+2*A+2)}for(I=0;I<E;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=E;I<2*E;I++)w[I]=0;return new a(w,0)};function j(I,E){for(;(I[E]&65535)!=I[E];)I[E+1]+=I[E]>>>16,I[E]&=65535,E++}function z(I,E){this.g=I,this.h=E}function Q(I,E){if(D(E))throw Error("division by zero");if(D(I))return new z(p,p);if(V(I))return E=Q(L(I),E),new z(L(E.g),L(E.h));if(V(E))return E=Q(I,L(E)),new z(L(E.g),E.h);if(I.g.length>30){if(V(I)||V(E))throw Error("slowDivide_ only works with positive integers.");for(var w=m,b=E;b.l(I)<=0;)w=at(w),b=at(b);var A=gt(w,1),S=gt(b,1);for(b=gt(b,2),w=gt(w,2);!D(b);){var v=S.add(b);v.l(I)<=0&&(A=A.add(w),S=v),b=gt(b,1),w=gt(w,1)}return E=H(I,A.j(E)),new z(A,E)}for(A=p;I.l(E)>=0;){for(w=Math.max(1,Math.floor(I.m()/E.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),S=h(w),v=S.j(E);V(v)||v.l(I)>0;)w-=b,S=h(w),v=S.j(E);D(S)&&(S=m),A=A.add(S),I=H(I,v)}return new z(A,I)}e.B=function(I){return Q(this,I).h},e.and=function(I){const E=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<E;b++)w[b]=this.i(b)&I.i(b);return new a(w,this.h&I.h)},e.or=function(I){const E=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<E;b++)w[b]=this.i(b)|I.i(b);return new a(w,this.h|I.h)},e.xor=function(I){const E=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<E;b++)w[b]=this.i(b)^I.i(b);return new a(w,this.h^I.h)};function at(I){const E=I.g.length+1,w=[];for(let b=0;b<E;b++)w[b]=I.i(b)<<1|I.i(b-1)>>>31;return new a(w,I.h)}function gt(I,E){const w=E>>5;E%=32;const b=I.g.length-w,A=[];for(let S=0;S<b;S++)A[S]=E>0?I.i(S+w)>>>E|I.i(S+w+1)<<32-E:I.i(S+w);return new a(A,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,pp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Kn=a}).apply(typeof Vh<"u"?Vh:typeof self<"u"?self:typeof window<"u"?window:{});var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gp,Cs,mp,$i,ol,_p,yp,Ep;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oi=="object"&&Oi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break t;f=f[C]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&t(f,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function c(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=c,h.apply(null,arguments)}function d(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,C,P){for(var q=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)q[pt-2]=arguments[pt];return u.prototype[C].apply(g,q)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function y(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function D(o,u){for(let g=1;g<arguments.length;g++){const C=arguments[g];var f=typeof C;if(f=f!="object"?f:C?Array.isArray(C)?"array":f:"null",f=="array"||f=="object"&&typeof C.length=="number"){f=o.length||0;const P=C.length||0;o.length=f+P;for(let q=0;q<P;q++)o[f+q]=C[q]}else o.push(C)}}class V{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){a.setTimeout(()=>{throw o},0)}function H(){var o=I;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class j{constructor(){this.h=this.g=null}add(u,f){const g=z.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var z=new V(()=>new Q,o=>o.reset());class Q{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let at,gt=!1,I=new j,E=()=>{const o=Promise.resolve(void 0);at=()=>{o.then(w)}};function w(){for(var o;o=H();){try{o.h.call(o.g)}catch(f){L(f)}var u=z;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}gt=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o}();function v(o){return/^[\s\xa0]*$/.test(o)}function Mt(o,u){A.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(Mt,A),Mt.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Mt.Z.h.call(this)},Mt.prototype.h=function(){Mt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var he="closure_listenable_"+(Math.random()*1e6|0),nt=0;function X(o,u,f,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++nt,this.da=this.fa=!1}function dt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function jt(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function Se(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function Wt(o){const u={};for(const f in o)u[f]=o[f];return u}const zt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Me(o,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let P=0;P<zt.length;P++)f=zt[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function Re(o){this.src=o,this.g={},this.h=0}Re.prototype.add=function(o,u,f,g,C){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const q=Qt(o,u,g,C);return q>-1?(u=o[q],f||(u.fa=!1)):(u=new X(u,this.src,P,!!g,C),u.fa=f,o.push(u)),u};function Ce(o,u){const f=u.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,u,void 0),P;(P=C>=0)&&Array.prototype.splice.call(g,C,1),P&&(dt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Qt(o,u,f,g){for(let C=0;C<o.length;++C){const P=o[C];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return C}return-1}var N="closure_lm_"+(Math.random()*1e6|0),W={};function G(o,u,f,g,C){if(Array.isArray(u)){for(let P=0;P<u.length;P++)G(o,u[P],f,g,C);return null}return f=K(f),o&&o[he]?o.J(u,f,l(g)?!!g.capture:!1,C):tt(o,u,f,!1,g,C)}function tt(o,u,f,g,C,P){if(!u)throw Error("Invalid event type");const q=l(C)?!!C.capture:!!C;let pt=M(o);if(pt||(o[N]=pt=new Re(o)),f=pt.add(u,f,g,q,P),f.proxy)return f;if(g=mt(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)S||(C=q),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(R(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function mt(){function o(f){return u.call(o.src,o.listener,f)}const u=k;return o}function _(o,u,f,g,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)_(o,u[P],f,g,C);else g=l(g)?!!g.capture:!!g,f=K(f),o&&o[he]?(o=o.i,P=String(u).toString(),P in o.g&&(u=o.g[P],f=Qt(u,f,g,C),f>-1&&(dt(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[P],o.h--)))):o&&(o=M(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Qt(u,f,g,C)),(f=o>-1?u[o]:null)&&T(f))}function T(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[he])Ce(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(R(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=M(u))?(Ce(f,o),f.h==0&&(f.src=null,u[N]=null)):dt(o)}}}function R(o){return o in W?W[o]:W[o]="on"+o}function k(o,u){if(o.da)o=!0;else{u=new Mt(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&T(o),o=f.call(g,u)}return o}function M(o){return o=o[N],o instanceof Re?o:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(o){return typeof o=="function"?o:(o[O]||(o[O]=function(u){return o.handleEvent(u)}),o[O])}function $(){b.call(this),this.i=new Re(this),this.M=this,this.G=null}p($,b),$.prototype[he]=!0,$.prototype.removeEventListener=function(o,u,f,g){_(this,o,u,f,g)};function B(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new A(u,o);else if(u instanceof A)u.target=u.target||o;else{var C=u;u=new A(g,o),Me(u,C)}C=!0;let P,q;if(f)for(q=f.length-1;q>=0;q--)P=u.g=f[q],C=F(P,g,!0,u)&&C;if(P=u.g=o,C=F(P,g,!0,u)&&C,C=F(P,g,!1,u)&&C,f)for(q=0;q<f.length;q++)P=u.g=f[q],C=F(P,g,!1,u)&&C}$.prototype.N=function(){if($.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)dt(f[g]);delete o.g[u],o.h--}}this.G=null},$.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},$.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function F(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let P=0;P<u.length;++P){const q=u[P];if(q&&!q.da&&q.capture==f){const pt=q.listener,Jt=q.ha||q.src;q.fa&&Ce(o.i,q),C=pt.call(Jt,g)!==!1&&C}}return C&&!g.defaultPrevented}function rt(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Y(o){o.g=rt(()=>{o.g=null,o.i&&(o.i=!1,Y(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class et extends b{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(o){b.call(this),this.h=o,this.g={}}p(st,b);var Et=[];function wt(o){jt(o.g,function(u,f){this.g.hasOwnProperty(f)&&T(u)},o),o.g={}}st.prototype.N=function(){st.Z.N.call(this),wt(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var It=a.JSON.stringify,Lt=a.JSON.parse,Yt=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function De(){}function Ne(){}var $e={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vr(){A.call(this,"d")}p(Vr,A);function ie(){A.call(this,"c")}p(ie,A);var ee={},as=null;function rr(){return as=as||new $}ee.Ia="serverreachability";function Fc(o){A.call(this,ee.Ia,o)}p(Fc,A);function ls(o){const u=rr();B(u,new Fc(u))}ee.STAT_EVENT="statevent";function Uc(o,u){A.call(this,ee.STAT_EVENT,o),this.stat=u}p(Uc,A);function ve(o){const u=rr();B(u,new Uc(u,o))}ee.Ja="timingevent";function Bc(o,u){A.call(this,ee.Ja,o),this.size=u}p(Bc,A);function cs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function us(){this.g=!0}us.prototype.ua=function(){this.g=!1};function gm(o,u,f,g,C,P){o.info(function(){if(o.g)if(P){var q="",pt=P.split("&");for(let Pt=0;Pt<pt.length;Pt++){var Jt=pt[Pt].split("=");if(Jt.length>1){const ne=Jt[0];Jt=Jt[1];const Xe=ne.split("_");q=Xe.length>=2&&Xe[1]=="type"?q+(ne+"="+Jt+"&"):q+(ne+"=redacted&")}}}else q=null;else q=P;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+q})}function mm(o,u,f,g,C,P,q){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+P+" "+q})}function Dr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+ym(o,f)+(g?" "+g:"")})}function _m(o,u){o.info(function(){return"TIMEOUT: "+u})}us.prototype.info=function(){};function ym(o,u){if(!o.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var f=P[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let q=1;q<g.length;q++)g[q]=""}}}}return It(P)}catch{return u}}var Ti={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$c;function Yo(){}p(Yo,De),Yo.prototype.g=function(){return new XMLHttpRequest},$c=new Yo;function hs(o){return encodeURIComponent(String(o))}function Em(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function kn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new st(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qc}function qc(){this.i=null,this.g="",this.h=!1}var zc={},Jo={};function Xo(o,u,f){o.M=1,o.A=Ii(Je(u)),o.u=f,o.R=!0,Hc(o,null)}function Hc(o,u){o.F=Date.now(),wi(o),o.B=Je(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),su(f.i,"t",g),o.C=0,f=o.j.L,o.h=new qc,o.g=wu(o.j,f?u:null,!o.u),o.P>0&&(o.O=new et(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var C="readystatechange";Array.isArray(C)||(C&&(Et[0]=C.toString()),C=Et);for(let P=0;P<C.length;P++){const q=G(f,C[P],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.J?Wt(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),ls(),gm(o.i,o.v,o.B,o.l,o.S,o.u)}kn.prototype.ba=function(o){o=o.target;const u=this.O;u&&Mn(o)==3?u.j():this.Y(o)},kn.prototype.Y=function(o){try{if(o==this.g)t:{const pt=Mn(this.g),Jt=this.g.ya(),Pt=this.g.ca();if(!(pt<3)&&(pt!=3||this.g&&(this.h.h||this.g.la()||hu(this.g)))){this.K||pt!=4||Jt==7||(Jt==8||Pt<=0?ls(3):ls(2)),Zo(this);var u=this.g.ca();this.X=u;var f=vm(this);if(this.o=u==200,mm(this.i,this.v,this.B,this.l,this.S,pt,u),this.o){if(this.U&&!this.L){e:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(g)){var P=g;break e}}P=null}if(o=P)Dr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ta(this,o);else{this.o=!1,this.m=3,ve(12),sr(this),fs(this);break t}}if(this.R){o=!0;let ne;for(;!this.K&&this.C<f.length;)if(ne=Tm(this,f),ne==Jo){pt==4&&(this.m=4,ve(14),o=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(ne==zc){this.m=4,ve(15),Dr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Dr(this.i,this.l,ne,null),ta(this,ne);if(Kc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||f.length!=0||this.h.h||(this.m=1,ve(16),o=!1),this.o=this.o&&o,!o)Dr(this.i,this.l,f,"[Invalid Chunked Response]"),sr(this),fs(this);else if(f.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),la(q),q.P=!0,ve(11))}}else Dr(this.i,this.l,f,null),ta(this,f);pt==4&&sr(this),this.o&&!this.K&&(pt==4?yu(this.j,this):(this.o=!1,wi(this)))}else xm(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),sr(this),fs(this)}}}catch{}finally{}};function vm(o){if(!Kc(o))return o.g.la();const u=hu(o.g);if(u==="")return"";let f="";const g=u.length,C=Mn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return sr(o),fs(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<g;P++)o.h.h=!0,f+=o.h.i.decode(u[P],{stream:!(C&&P==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function Kc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Tm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Jo:(f=Number(u.substring(f,g)),isNaN(f)?zc:(g+=1,g+f>u.length?Jo:(u=u.slice(g,g+f),o.C=g+f,u)))}kn.prototype.cancel=function(){this.K=!0,sr(this)};function wi(o){o.T=Date.now()+o.H,Gc(o,o.H)}function Gc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=cs(h(o.aa,o),u)}function Zo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}kn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(_m(this.i,this.B),this.M!=2&&(ls(),ve(17)),sr(this),this.m=2,fs(this)):Gc(this,this.T-o)};function fs(o){o.j.I==0||o.K||yu(o.j,o)}function sr(o){Zo(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,wt(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function ta(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||ea(f.h,o))){if(!o.L&&ea(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Ci(f),Si(f);else break t;aa(f),ve(18)}}else f.xa=C[1],0<f.xa-f.K&&C[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=cs(h(f.Va,f),6e3));Yc(f.h)<=1&&f.ta&&(f.ta=void 0)}else or(f,11)}else if((o.L||f.g==o)&&Ci(f),!v(u))for(C=f.Ba.g.parse(u),u=0;u<C.length;u++){let Pt=C[u];const ne=Pt[0];if(!(ne<=f.K))if(f.K=ne,Pt=Pt[1],f.I==2)if(Pt[0]=="c"){f.M=Pt[1],f.ba=Pt[2];const Xe=Pt[3];Xe!=null&&(f.ka=Xe,f.j.info("VER="+f.ka));const ar=Pt[4];ar!=null&&(f.za=ar,f.j.info("SVER="+f.za));const Ln=Pt[5];Ln!=null&&typeof Ln=="number"&&Ln>0&&(g=1.5*Ln,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Fn=o.g;if(Fn){const Vi=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var P=g.h;P.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(na(P,P.h),P.h=null))}if(g.G){const ca=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;ca&&(g.wa=ca,Nt(g.J,g.G,ca))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var q=o;if(g.na=Tu(g,g.L?g.ba:null,g.W),q.L){Jc(g.h,q);var pt=q,Jt=g.O;Jt&&(pt.H=Jt),pt.D&&(Zo(pt),wi(pt)),g.g=q}else mu(g);f.i.length>0&&Ri(f)}else Pt[0]!="stop"&&Pt[0]!="close"||or(f,7);else f.I==3&&(Pt[0]=="stop"||Pt[0]=="close"?Pt[0]=="stop"?or(f,7):oa(f):Pt[0]!="noop"&&f.l&&f.l.qa(Pt),f.A=0)}}ls(4)}catch{}}var wm=class{constructor(o,u){this.g=o,this.map=u}};function Wc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Yc(o){return o.h?1:o.g?o.g.size:0}function ea(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function na(o,u){o.g?o.g.add(u):o.h=u}function Jc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Wc.prototype.cancel=function(){if(this.i=Xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Xc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return y(o.i)}var Zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Im(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let C,P=null;g>=0?(C=o[f].substring(0,g),P=o[f].substring(g+1)):C=o[f],u(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function On(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof On?(this.l=o.l,ds(this,o.j),this.o=o.o,this.g=o.g,ps(this,o.u),this.h=o.h,ra(this,iu(o.i)),this.m=o.m):o&&(u=String(o).match(Zc))?(this.l=!1,ds(this,u[1]||"",!0),this.o=gs(u[2]||""),this.g=gs(u[3]||"",!0),ps(this,u[4]),this.h=gs(u[5]||"",!0),ra(this,u[6]||"",!0),this.m=gs(u[7]||"")):(this.l=!1,this.i=new _s(null,this.l))}On.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(ms(u,tu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ms(u,tu,!0),"@"),o.push(hs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ms(f,f.charAt(0)=="/"?Sm:bm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ms(f,Cm)),o.join("")},On.prototype.resolve=function(o){const u=Je(this);let f=!!o.j;f?ds(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)ps(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=u.h.lastIndexOf("/");C!=-1&&(g=u.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const P=[];for(let q=0;q<C.length;){const pt=C[q++];pt=="."?g&&q==C.length&&P.push(""):pt==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&q==C.length&&P.push("")):(P.push(pt),g=!0)}g=P.join("/")}else g=C}return f?u.h=g:f=o.i.toString()!=="",f?ra(u,iu(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Je(o){return new On(o)}function ds(o,u,f){o.j=f?gs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ps(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function ra(o,u,f){u instanceof _s?(o.i=u,Pm(o.i,o.l)):(f||(u=ms(u,Rm)),o.i=new _s(u,o.l))}function Nt(o,u,f){o.i.set(u,f)}function Ii(o){return Nt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function gs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ms(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Am),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Am(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var tu=/[#\/\?@]/g,bm=/[#\?:]/g,Sm=/[#\?]/g,Rm=/[#\?@]/g,Cm=/#/g;function _s(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ir(o){o.g||(o.g=new Map,o.h=0,o.i&&Im(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}e=_s.prototype,e.add=function(o,u){ir(this),this.i=null,o=Nr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function eu(o,u){ir(o),u=Nr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function nu(o,u){return ir(o),u=Nr(o,u),o.g.has(u)}e.forEach=function(o,u){ir(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(u,C,g,this)},this)},this)};function ru(o,u){ir(o);let f=[];if(typeof u=="string")nu(o,u)&&(f=f.concat(o.g.get(Nr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}e.set=function(o,u){return ir(this),this.i=null,o=Nr(this,o),nu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=ru(this,o),o.length>0?String(o[0]):u):u};function su(o,u,f){eu(o,u),f.length>0&&(o.i=null,o.g.set(Nr(o,u),y(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const C=hs(f);f=ru(this,f);for(let P=0;P<f.length;P++){let q=C;f[P]!==""&&(q+="="+hs(f[P])),o.push(q)}}return this.i=o.join("&")};function iu(o){const u=new _s;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Nr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Pm(o,u){u&&!o.j&&(ir(o),o.i=null,o.g.forEach(function(f,g){const C=g.toLowerCase();g!=C&&(eu(this,g),su(this,C,f))},o)),o.j=u}function Vm(o,u){const f=new us;if(a.Image){const g=new Image;g.onload=d(xn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=d(xn,f,"TestLoadImage: error",!1,u,g),g.onabort=d(xn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=d(xn,f,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Dm(o,u){const f=new us,g=new AbortController,C=setTimeout(()=>{g.abort(),xn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(C),P.ok?xn(f,"TestPingServer: ok",!0,u):xn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),xn(f,"TestPingServer: error",!1,u)})}function xn(o,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Nm(){this.g=new Yt}function sa(o){this.i=o.Sb||null,this.h=o.ab||!1}p(sa,De),sa.prototype.g=function(){return new Ai(this.i,this.h)};function Ai(o,u){$.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ai,$),e=Ai.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Es(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ou(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function ou(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ys(this):Es(this),this.readyState==3&&ou(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,ys(this))},e.Na=function(o){this.g&&(this.response=o,ys(this))},e.ga=function(){this.g&&ys(this)};function ys(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Es(o)}e.setRequestHeader=function(o,u){this.A.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function au(o){let u="";return jt(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function ia(o,u,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=au(f),typeof o=="string"?f!=null&&hs(f):Nt(o,u,f))}function Ft(o){$.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ft,$);var km=/^https?$/i,Om=["POST","PUT"];e=Ft.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$c.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){lu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),C=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Om,u,void 0)>=0)||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,q]of f)this.g.setRequestHeader(P,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){lu(this,P)}};function lu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,cu(o),bi(o)}function cu(o){o.A||(o.A=!0,B(o,"complete"),B(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,B(this,"complete"),B(this,"abort"),bi(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bi(this,!0)),Ft.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?uu(this):this.Xa())},e.Xa=function(){uu(this)};function uu(o){if(o.h&&typeof i<"u"){if(o.v&&Mn(o)==4)setTimeout(o.Ca.bind(o),0);else if(B(o,"readystatechange"),Mn(o)==4){o.h=!1;try{const P=o.ca();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var f;if(!(f=u)){var g;if(g=P===0){let q=String(o.D).match(Zc)[1]||null;!q&&a.self&&a.self.location&&(q=a.self.location.protocol.slice(0,-1)),g=!km.test(q?q.toLowerCase():"")}f=g}if(f)B(o,"complete"),B(o,"success");else{o.o=6;try{var C=Mn(o)>2?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.ca()+"]",cu(o)}}finally{bi(o)}}}}function bi(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||B(o,"ready");try{f.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function Mn(o){return o.g?o.g.readyState:0}e.ca=function(){try{return Mn(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Lt(u)}};function hu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function xm(o){const u={};o=(o.g&&Mn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(v(o[g]))continue;var f=Em(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[C]||[];u[C]=P,P.push(f)}Se(u,function(g){return g.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function fu(o){this.za=0,this.i=[],this.j=new us,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vs("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vs("baseRetryDelayMs",5e3,o),this.Za=vs("retryDelaySeedMs",1e4,o),this.Ta=vs("forwardChannelMaxRetries",2,o),this.va=vs("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Wc(o&&o.concurrentRequestLimit),this.Ba=new Nm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=fu.prototype,e.ka=8,e.I=1,e.connect=function(o,u,f,g){ve(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Tu(this,null,this.W),Ri(this)};function oa(o){if(du(o),o.I==3){var u=o.V++,f=Je(o.J);if(Nt(f,"SID",o.M),Nt(f,"RID",u),Nt(f,"TYPE","terminate"),Ts(o,f),u=new kn(o,o.j,u),u.M=2,u.A=Ii(Je(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=wu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),wi(u)}vu(o)}function Si(o){o.g&&(la(o),o.g.cancel(),o.g=null)}function du(o){Si(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ci(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ri(o){if(!Qc(o.h)&&!o.m){o.m=!0;var u=o.Ea;at||E(),gt||(at(),gt=!0),I.add(u,o),o.D=0}}function Mm(o,u){return Yc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=cs(h(o.Ea,o,u),Eu(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const C=new kn(this,this.j,o);let P=this.o;if(this.U&&(P?(P=Wt(P),Me(P,this.U)):P=this.U),this.u!==null||this.R||(C.J=P,P=null),this.S)t:{for(var u=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break t}if(u===4096||f===this.i.length-1){u=f+1;break t}}u=1e3}else u=1e3;u=gu(this,C,u),f=Je(this.J),Nt(f,"RID",o),Nt(f,"CVER",22),this.G&&Nt(f,"X-HTTP-Session-Id",this.G),Ts(this,f),P&&(this.R?u="headers="+hs(au(P))+"&"+u:this.u&&ia(f,this.u,P)),na(this.h,C),this.Ra&&Nt(f,"TYPE","init"),this.S?(Nt(f,"$req",u),Nt(f,"SID","null"),C.U=!0,Xo(C,f,null)):Xo(C,f,u),this.I=2}}else this.I==3&&(o?pu(this,o):this.i.length==0||Qc(this.h)||pu(this))};function pu(o,u){var f;u?f=u.l:f=o.V++;const g=Je(o.J);Nt(g,"SID",o.M),Nt(g,"RID",f),Nt(g,"AID",o.K),Ts(o,g),o.u&&o.o&&ia(g,o.u,o.o),f=new kn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=gu(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),na(o.h,f),Xo(f,g,u)}function Ts(o,u){o.H&&jt(o.H,function(f,g){Nt(u,g,f)}),o.l&&jt({},function(f,g){Nt(u,g,f)})}function gu(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;t:{var C=o.i;let pt=-1;for(;;){const Jt=["count="+f];pt==-1?f>0?(pt=C[0].g,Jt.push("ofs="+pt)):pt=0:Jt.push("ofs="+pt);let Pt=!0;for(let ne=0;ne<f;ne++){var P=C[ne].g;const Xe=C[ne].map;if(P-=pt,P<0)pt=Math.max(0,C[ne].g-100),Pt=!1;else try{P="req"+P+"_"||"";try{var q=Xe instanceof Map?Xe:Object.entries(Xe);for(const[ar,Ln]of q){let Fn=Ln;l(Ln)&&(Fn=It(Ln)),Jt.push(P+ar+"="+encodeURIComponent(Fn))}}catch(ar){throw Jt.push(P+"type="+encodeURIComponent("_badmap")),ar}}catch{g&&g(Xe)}}if(Pt){q=Jt.join("&");break t}}q=void 0}return o=o.i.splice(0,f),u.G=o,q}function mu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;at||E(),gt||(at(),gt=!0),I.add(u,o),o.A=0}}function aa(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=cs(h(o.Da,o),Eu(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,_u(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=cs(h(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),Si(this),_u(this))};function la(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function _u(o){o.g=new kn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Je(o.na);Nt(u,"RID","rpc"),Nt(u,"SID",o.M),Nt(u,"AID",o.K),Nt(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Nt(u,"TO",o.ia),Nt(u,"TYPE","xmlhttp"),Ts(o,u),o.u&&o.o&&ia(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Ii(Je(u)),f.u=null,f.R=!0,Hc(f,o)}e.Va=function(){this.C!=null&&(this.C=null,Si(this),aa(this),ve(19))};function Ci(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function yu(o,u){var f=null;if(o.g==u){Ci(o),la(o),o.g=null;var g=2}else if(ea(o.h,u))f=u.G,Jc(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var C=o.D;g=rr(),B(g,new Bc(g,f)),Ri(o)}else mu(o);else if(C=u.m,C==3||C==0&&u.X>0||!(g==1&&Mm(o,u)||g==2&&aa(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),C){case 1:or(o,5);break;case 4:or(o,10);break;case 3:or(o,6);break;default:or(o,2)}}}function Eu(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function or(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const C=!g;g=new On(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ds(g,"https"),Ii(g),C?Vm(g.toString(),f):Dm(g.toString(),f)}else ve(2);o.I=0,o.l&&o.l.pa(u),vu(o),du(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function vu(o){if(o.I=0,o.ja=[],o.l){const u=Xc(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ja,u),D(o.ja,o.i),o.h.i.length=0,y(o.i),o.i.length=0),o.l.oa()}}function Tu(o,u,f){var g=f instanceof On?Je(f):new On(f);if(g.g!="")u&&(g.g=u+"."+g.g),ps(g,g.u);else{var C=a.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const P=new On(null);g&&ds(P,g),u&&(P.g=u),C&&ps(P,C),f&&(P.h=f),g=P}return f=o.G,u=o.wa,f&&u&&Nt(g,f,u),Nt(g,"VER",o.ka),Ts(o,g),g}function wu(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Ft(new sa({ab:f})):new Ft(o.ma),u.Fa(o.L),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iu(){}e=Iu.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function Pi(){}Pi.prototype.g=function(o,u){return new ke(o,u)};function ke(o,u){$.call(this),this.g=new fu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!v(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!v(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kr(this)}p(ke,$),ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){oa(this.g)},ke.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=It(o),o=f);u.i.push(new wm(u.Ya++,o)),u.I==3&&Ri(u)},ke.prototype.N=function(){this.g.l=null,delete this.j,oa(this.g),delete this.g,ke.Z.N.call(this)};function Au(o){Vr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const f in u){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Au,Vr);function bu(){ie.call(this),this.status=1}p(bu,ie);function kr(o){this.g=o}p(kr,Iu),kr.prototype.ra=function(){B(this.g,"a")},kr.prototype.qa=function(o){B(this.g,new Au(o))},kr.prototype.pa=function(o){B(this.g,new bu)},kr.prototype.oa=function(){B(this.g,"b")},Pi.prototype.createWebChannel=Pi.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,Ep=function(){return new Pi},yp=function(){return rr()},_p=ee,ol={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ti.NO_ERROR=0,Ti.TIMEOUT=8,Ti.HTTP_ERROR=6,$i=Ti,jc.COMPLETE="complete",mp=jc,Ne.EventType=$e,$e.OPEN="a",$e.CLOSE="b",$e.ERROR="c",$e.MESSAGE="d",$.prototype.listen=$.prototype.J,Cs=Ne,Ft.prototype.listenOnce=Ft.prototype.K,Ft.prototype.getLastError=Ft.prototype.Ha,Ft.prototype.getLastErrorCode=Ft.prototype.ya,Ft.prototype.getStatus=Ft.prototype.ca,Ft.prototype.getResponseJson=Ft.prototype.La,Ft.prototype.getResponseText=Ft.prototype.la,Ft.prototype.send=Ft.prototype.ea,Ft.prototype.setWithCredentials=Ft.prototype.Fa,gp=Ft}).apply(typeof Oi<"u"?Oi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pe.UNAUTHENTICATED=new pe(null),pe.GOOGLE_CREDENTIALS=new pe("google-credentials-uid"),pe.FIRST_PARTY=new pe("first-party-uid"),pe.MOCK_USER=new pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="12.12.0";function QT(e){rs=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new ap("@firebase/firestore");function Lr(){return yr.logLevel}function J(e,...t){if(yr.logLevel<=Tt.DEBUG){const n=t.map(Wl);yr.debug(`Firestore (${rs}): ${e}`,...n)}}function Vn(e,...t){if(yr.logLevel<=Tt.ERROR){const n=t.map(Wl);yr.error(`Firestore (${rs}): ${e}`,...n)}}function Er(e,...t){if(yr.logLevel<=Tt.WARN){const n=t.map(Wl);yr.warn(`Firestore (${rs}): ${e}`,...n)}}function Wl(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,vp(e,r,n)}function vp(e,t,n){let r=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Vn(r),new Error(r)}function Rt(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||vp(t,s,r)}function ht(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends br{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class YT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(pe.UNAUTHENTICATED))}shutdown(){}}class JT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XT{constructor(t){this.t=t,this.currentUser=pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Rt(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Rt(typeof r.accessToken=="string",31837,{l:r}),new Tp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Rt(t===null||typeof t=="string",2055,{h:t}),new pe(t)}}class ZT{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=pe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class tw{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new ZT(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ew{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kT(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Rt(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dh(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Rt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function _t(e,t){return e<t?-1:e>t?1:0}function al(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=e.charAt(r),i=t.charAt(r);if(s!==i)return Pa(s)===Pa(i)?_t(s,i):Pa(s)?1:-1}return _t(e.length,t.length)}const rw=55296,sw=57343;function Pa(e){const t=e.charCodeAt(0);return t>=rw&&t<=sw}function Jr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="__name__";class en{constructor(t,n,r){n===void 0?n=0:n>t.length&&ot(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&ot(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return en.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof en?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=en.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return _t(t.length,n.length)}static compareSegments(t,n){const r=en.isNumericId(t),s=en.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?en.extractNumericId(t).compare(en.extractNumericId(n)):al(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kn.fromString(t.substring(4,t.length-2))}}class Ot extends en{construct(t,n,r){return new Ot(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new Z(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ot(n)}static emptyPath(){return new Ot([])}}const iw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends en{construct(t,n,r){return new le(t,n,r)}static isValidIdentifier(t){return iw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nh}static keyField(){return new le([Nh])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new Z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new le(n)}static emptyPath(){return new le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(Ot.fromString(t))}static fromName(t){return new it(Ot.fromString(t).popFirst(5))}static empty(){return new it(Ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ot.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ot.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new Ot(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(e,t,n){if(!n)throw new Z(U.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function aw(e,t,n,r){if(t===!0&&r===!0)throw new Z(U.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function kh(e){if(!it.isDocumentKey(e))throw new Z(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function wp(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function Yl(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ot(12329,{type:typeof e})}function Xr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yl(e);throw new Z(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e,t){const n={typeString:e};return t&&(n.value=t),n}function mi(e,t){if(!wp(e))throw new Z(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Z(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=-62135596800,xh=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(t){return kt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*xh);return new kt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Oh)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xh}_compareTo(t){return this.seconds===t.seconds?_t(this.nanoseconds,t.nanoseconds):_t(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:kt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(mi(t,kt._jsonSchema))return new kt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Oh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}kt._jsonSchemaVersion="firestore/timestamp/1.0",kt._jsonSchema={type:Gt("string",kt._jsonSchemaVersion),seconds:Gt("number"),nanoseconds:Gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static fromTimestamp(t){return new ct(t)}static min(){return new ct(new kt(0,0))}static max(){return new ct(new kt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=-1;function lw(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ct.fromTimestamp(r===1e9?new kt(n+1,0):new kt(n,r));return new Jn(s,it.empty(),t)}function cw(e){return new Jn(e.readTime,e.key,ei)}class Jn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(ct.min(),it.empty(),ei)}static max(){return new Jn(ct.max(),it.empty(),ei)}}function uw(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=it.comparator(e.documentKey,t.documentKey),n!==0?n:_t(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(e){if(e.code!==U.FAILED_PRECONDITION||e.message!==hw)throw e;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ot(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):x.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):x.reject(n)}static resolve(t){return new x((n,r)=>{n(t)})}static reject(t){return new x((n,r)=>{r(t)})}static waitFor(t){return new x((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(t){let n=x.resolve(!1);for(const r of t)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new x((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(t[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new x((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function dw(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function is(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}xo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=-1;function Mo(e){return e==null}function oo(e){return e===0&&1/e==-1/0}function pw(e){return typeof e=="number"&&Number.isInteger(e)&&!oo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="";function gw(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Mh(t)),t=mw(e.get(n),t);return Mh(t)}function mw(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case Ip:n+="";break;default:n+=i}}return n}function Mh(e){return e+Ip+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Sr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ap(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,n){this.comparator=t,this.root=n||ae.EMPTY}insert(t,n){return new xt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(t){return new xt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ae.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xi(this.root,t,this.comparator,!1)}getReverseIterator(){return new xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xi(this.root,t,this.comparator,!0)}}class xi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ae{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??ae.RED,this.left=s??ae.EMPTY,this.right=i??ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new ae(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return ae.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ot(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ot(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw ot(27949);return t+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw ot(57766)}get value(){throw ot(16141)}get color(){throw ot(16727)}get left(){throw ot(29726)}get right(){throw ot(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new ae(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.comparator=t,this.data=new xt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fh(this.data.getIterator())}getIteratorFrom(t){return new Fh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof te)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new te(this.comparator);return n.data=t,n}}class Fh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.fields=t,t.sort(le.comparator)}static empty(){return new Ke([])}unionWith(t){let n=new te(le.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ke(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Jr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bp("Invalid base64 string: "+i):i}}(t);return new ue(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new ue(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _t(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const _w=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(e){if(Rt(!!e,39018),typeof e=="string"){let t=0;const n=_w.exec(e);if(Rt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:$t(e.seconds),nanos:$t(e.nanos)}}function $t(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Zn(e){return typeof e=="string"?ue.fromBase64String(e):ue.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="server_timestamp",Rp="__type__",Cp="__previous_value__",Pp="__local_write_time__";function Xl(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[Rp])==null?void 0:r.stringValue)===Sp}function Lo(e){const t=e.mapValue.fields[Cp];return Xl(t)?Lo(t):t}function ni(e){const t=Xn(e.mapValue.fields[Pp].timestampValue);return new kt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t,n,r,s,i,a,l,c,h,d,p){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const ao="(default)";class ri{constructor(t,n){this.projectId=t,this.database=n||ao}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database===ao}isEqual(t){return t instanceof ri&&t.projectId===this.projectId&&t.database===this.database}}function Ew(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(e.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="__type__",vw="__max__",Mi={mapValue:{}},Dp="__vector__",lo="value";function tr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Xl(e)?4:ww(e)?9007199254740991:Tw(e)?10:11:ot(28295,{value:e})}function pn(e,t){if(e===t)return!0;const n=tr(e);if(n!==tr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ni(e).isEqual(ni(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xn(s.timestampValue),l=Xn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Zn(s.bytesValue).isEqual(Zn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return $t(s.geoPointValue.latitude)===$t(i.geoPointValue.latitude)&&$t(s.geoPointValue.longitude)===$t(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $t(s.integerValue)===$t(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=$t(s.doubleValue),l=$t(i.doubleValue);return a===l?oo(a)===oo(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Jr(e.arrayValue.values||[],t.arrayValue.values||[],pn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Lh(a)!==Lh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!pn(a[c],l[c])))return!1;return!0}(e,t);default:return ot(52216,{left:e})}}function si(e,t){return(e.values||[]).find(n=>pn(n,t))!==void 0}function Zr(e,t){if(e===t)return 0;const n=tr(e),r=tr(t);if(n!==r)return _t(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _t(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=$t(i.integerValue||i.doubleValue),c=$t(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return Uh(e.timestampValue,t.timestampValue);case 4:return Uh(ni(e),ni(t));case 5:return al(e.stringValue,t.stringValue);case 6:return function(i,a){const l=Zn(i),c=Zn(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=_t(l[h],c[h]);if(d!==0)return d}return _t(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=_t($t(i.latitude),$t(a.latitude));return l!==0?l:_t($t(i.longitude),$t(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Bh(e.arrayValue,t.arrayValue);case 10:return function(i,a){var m,y,D,V;const l=i.fields||{},c=a.fields||{},h=(m=l[lo])==null?void 0:m.arrayValue,d=(y=c[lo])==null?void 0:y.arrayValue,p=_t(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((V=d==null?void 0:d.values)==null?void 0:V.length)||0);return p!==0?p:Bh(h,d)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===Mi.mapValue&&a===Mi.mapValue)return 0;if(i===Mi.mapValue)return 1;if(a===Mi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=al(c[p],d[p]);if(m!==0)return m;const y=Zr(l[c[p]],h[d[p]]);if(y!==0)return y}return _t(c.length,d.length)}(e.mapValue,t.mapValue);default:throw ot(23264,{he:n})}}function Uh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return _t(e,t);const n=Xn(e),r=Xn(t),s=_t(n.seconds,r.seconds);return s!==0?s:_t(n.nanos,r.nanos)}function Bh(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Zr(n[s],r[s]);if(i)return i}return _t(n.length,r.length)}function ts(e){return ll(e)}function ll(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Zn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return it.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ll(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ll(n.fields[a])}`;return s+"}"}(e.mapValue):ot(61005,{value:e})}function qi(e){switch(tr(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Lo(e);return t?16+qi(t):16;case 5:return 2*e.stringValue.length;case 6:return Zn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+qi(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return Sr(r.fields,(i,a)=>{s+=i.length+qi(a)}),s}(e.mapValue);default:throw ot(13486,{value:e})}}function cl(e){return!!e&&"integerValue"in e}function Zl(e){return!!e&&"arrayValue"in e}function jh(e){return!!e&&"nullValue"in e}function $h(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zi(e){return!!e&&"mapValue"in e}function Tw(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[Vp])==null?void 0:r.stringValue)===Dp}function $s(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Sr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=$s(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=$s(e.arrayValue.values[n]);return t}return{...e}}function ww(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===vw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.value=t}static empty(){return new Ue({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!zi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=$s(n)}setAll(t){let n=le.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=$s(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());zi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];zi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Sr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ue($s(this.value))}}function Np(e){const t=[];return Sr(e.fields,(n,r)=>{const s=new le([n]);if(zi(r)){const i=Np(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ke(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new me(t,0,ct.min(),ct.min(),ct.min(),Ue.empty(),0)}static newFoundDocument(t,n,r,s){return new me(t,1,n,ct.min(),r,s,0)}static newNoDocument(t,n){return new me(t,2,n,ct.min(),ct.min(),Ue.empty(),0)}static newUnknownDocument(t,n){return new me(t,3,n,ct.min(),ct.min(),Ue.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ct.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ct.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof me&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,n){this.position=t,this.inclusive=n}}function qh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=it.comparator(it.fromName(a.referenceValue),n.key):r=Zr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!pn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,n="asc"){this.field=t,this.dir=n}}function Iw(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{}class Zt extends kp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new bw(t,n,r):n==="array-contains"?new Cw(t,r):n==="in"?new Pw(t,r):n==="not-in"?new Vw(t,r):n==="array-contains-any"?new Dw(t,r):new Zt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Sw(t,r):new Rw(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Zr(n,this.value)):n!==null&&tr(this.value)===tr(n)&&this.matchesComparison(Zr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ot(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends kp{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new gn(t,n)}matches(t){return Op(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Op(e){return e.op==="and"}function xp(e){return Aw(e)&&Op(e)}function Aw(e){for(const t of e.filters)if(t instanceof gn)return!1;return!0}function ul(e){if(e instanceof Zt)return e.field.canonicalString()+e.op.toString()+ts(e.value);if(xp(e))return e.filters.map(t=>ul(t)).join(",");{const t=e.filters.map(n=>ul(n)).join(",");return`${e.op}(${t})`}}function Mp(e,t){return e instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(e,t):e instanceof gn?function(r,s){return s instanceof gn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Mp(a,s.filters[l]),!0):!1}(e,t):void ot(19439)}function Lp(e){return e instanceof Zt?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(e):e instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(Lp).join(" ,")+"}"}(e):"Filter"}class bw extends Zt{constructor(t,n,r){super(t,n,r),this.key=it.fromName(r.referenceValue)}matches(t){const n=it.comparator(t.key,this.key);return this.matchesComparison(n)}}class Sw extends Zt{constructor(t,n){super(t,"in",n),this.keys=Fp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Rw extends Zt{constructor(t,n){super(t,"not-in",n),this.keys=Fp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Fp(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(r=>it.fromName(r.referenceValue))}class Cw extends Zt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Zl(n)&&si(n.arrayValue,this.value)}}class Pw extends Zt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&si(this.value.arrayValue,n)}}class Vw extends Zt{constructor(t,n){super(t,"not-in",n)}matches(t){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!si(this.value.arrayValue,n)}}class Dw extends Zt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Zl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>si(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Hh(e,t=null,n=[],r=[],s=null,i=null,a=null){return new Nw(e,t,n,r,s,i,a)}function tc(e){const t=ht(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ul(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Mo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ts(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ts(r)).join(",")),t.Te=n}return t.Te}function ec(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Iw(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Mp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!zh(e.startAt,t.startAt)&&zh(e.endAt,t.endAt)}function hl(e){return it.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function kw(e,t,n,r,s,i,a,l){return new Fo(e,t,n,r,s,i,a,l)}function nc(e){return new Fo(e)}function Kh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ow(e){return it.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}function xw(e){return e.collectionGroup!==null}function qs(e){const t=ht(e);if(t.Ee===null){t.Ee=[];const n=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new te(le.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.Ee.push(new uo(i,r))}),n.has(le.keyField().canonicalString())||t.Ee.push(new uo(le.keyField(),r))}return t.Ee}function ln(e){const t=ht(e);return t.Ie||(t.Ie=Mw(t,qs(e))),t.Ie}function Mw(e,t){if(e.limitType==="F")return Hh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new uo(s.field,i)});const n=e.endAt?new co(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new co(e.startAt.position,e.startAt.inclusive):null;return Hh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function fl(e,t,n){return new Fo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Uo(e,t){return ec(ln(e),ln(t))&&e.limitType===t.limitType}function Up(e){return`${tc(ln(e))}|lt:${e.limitType}`}function Fr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Lp(s)).join(", ")}]`),Mo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ts(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ts(s)).join(",")),`Target(${r})`}(ln(e))}; limitType=${e.limitType})`}function Bo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):it.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=qh(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,qs(r),s)||r.endAt&&!function(a,l,c){const h=qh(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,qs(r),s))}(e,t)}function Lw(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Bp(e){return(t,n)=>{let r=!1;for(const s of qs(e)){const i=Fw(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Fw(e,t,n){const r=e.field.isKeyField()?it.comparator(t.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Zr(c,h):ot(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ot(19790,{direction:e.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Sr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Ap(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=new xt(it.comparator);function Dn(){return Uw}const jp=new xt(it.comparator);function Ps(...e){let t=jp;for(const n of e)t=t.insert(n.key,n);return t}function $p(e){let t=jp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function dr(){return zs()}function qp(){return zs()}function zs(){return new Rr(e=>e.toString(),(e,t)=>e.isEqual(t))}const Bw=new xt(it.comparator),jw=new te(it.comparator);function yt(...e){let t=jw;for(const n of e)t=t.add(n);return t}const $w=new te(_t);function qw(){return $w}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oo(t)?"-0":t}}function zp(e){return{integerValue:""+e}}function zw(e,t){return pw(t)?zp(t):rc(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this._=void 0}}function Hw(e,t,n){return e instanceof ho?function(s,i){const a={fields:{[Rp]:{stringValue:Sp},[Pp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xl(i)&&(i=Lo(i)),i&&(a.fields[Cp]=i),{mapValue:a}}(n,t):e instanceof ii?Kp(e,t):e instanceof oi?Gp(e,t):function(s,i){const a=Hp(s,i),l=Gh(a)+Gh(s.Ae);return cl(a)&&cl(s.Ae)?zp(l):rc(s.serializer,l)}(e,t)}function Kw(e,t,n){return e instanceof ii?Kp(e,t):e instanceof oi?Gp(e,t):n}function Hp(e,t){return e instanceof fo?function(r){return cl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class ho extends jo{}class ii extends jo{constructor(t){super(),this.elements=t}}function Kp(e,t){const n=Wp(t);for(const r of e.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class oi extends jo{constructor(t){super(),this.elements=t}}function Gp(e,t){let n=Wp(t);for(const r of e.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class fo extends jo{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Gh(e){return $t(e.integerValue||e.doubleValue)}function Wp(e){return Zl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Gw(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof ii&&s instanceof ii||r instanceof oi&&s instanceof oi?Jr(r.elements,s.elements,pn):r instanceof fo&&s instanceof fo?pn(r.Ae,s.Ae):r instanceof ho&&s instanceof ho}(e.transform,t.transform)}class Ww{constructor(t,n){this.version=t,this.transformResults=n}}class cn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new cn}static exists(t){return new cn(void 0,t)}static updateTime(t){return new cn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class $o{}function Qp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new sc(e.key,cn.none()):new _i(e.key,e.data,cn.none());{const n=e.data,r=Ue.empty();let s=new te(le.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Cr(e.key,r,new Ke(s.toArray()),cn.none())}}function Qw(e,t,n){e instanceof _i?function(s,i,a){const l=s.value.clone(),c=Qh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof Cr?function(s,i,a){if(!Hi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Qh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Yp(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Hs(e,t,n,r){return e instanceof _i?function(i,a,l,c){if(!Hi(i.precondition,a))return l;const h=i.value.clone(),d=Yh(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof Cr?function(i,a,l,c){if(!Hi(i.precondition,a))return l;const h=Yh(i.fieldTransforms,c,a),d=a.data;return d.setAll(Yp(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(e,t,n,r):function(i,a,l){return Hi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function Yw(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Hp(r.transform,s||null);i!=null&&(n===null&&(n=Ue.empty()),n.set(r.field,i))}return n||null}function Wh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Jr(r,s,(i,a)=>Gw(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class _i extends $o{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends $o{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yp(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Qh(e,t,n){const r=new Map;Rt(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,Kw(a,l,n[s]))}return r}function Yh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,Hw(i,a,t))}return r}class sc extends $o{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jw extends $o{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Qw(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Hs(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Hs(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=qp();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Qp(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ct.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),yt())}isEqual(t){return this.batchId===t.batchId&&Jr(this.mutations,t.mutations,(n,r)=>Wh(n,r))&&Jr(this.baseMutations,t.baseMutations,(n,r)=>Wh(n,r))}}class ic{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){Rt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return Bw}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ic(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht,vt;function eI(e){switch(e){case U.OK:return ot(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ot(15467,{code:e})}}function Jp(e){if(e===void 0)return Vn("GRPC error has no .code"),U.UNKNOWN;switch(e){case Ht.OK:return U.OK;case Ht.CANCELLED:return U.CANCELLED;case Ht.UNKNOWN:return U.UNKNOWN;case Ht.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ht.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ht.INTERNAL:return U.INTERNAL;case Ht.UNAVAILABLE:return U.UNAVAILABLE;case Ht.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ht.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ht.NOT_FOUND:return U.NOT_FOUND;case Ht.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ht.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ht.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ht.ABORTED:return U.ABORTED;case Ht.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ht.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ht.DATA_LOSS:return U.DATA_LOSS;default:return ot(39323,{code:e})}}(vt=Ht||(Ht={}))[vt.OK=0]="OK",vt[vt.CANCELLED=1]="CANCELLED",vt[vt.UNKNOWN=2]="UNKNOWN",vt[vt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vt[vt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vt[vt.NOT_FOUND=5]="NOT_FOUND",vt[vt.ALREADY_EXISTS=6]="ALREADY_EXISTS",vt[vt.PERMISSION_DENIED=7]="PERMISSION_DENIED",vt[vt.UNAUTHENTICATED=16]="UNAUTHENTICATED",vt[vt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vt[vt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vt[vt.ABORTED=10]="ABORTED",vt[vt.OUT_OF_RANGE=11]="OUT_OF_RANGE",vt[vt.UNIMPLEMENTED=12]="UNIMPLEMENTED",vt[vt.INTERNAL=13]="INTERNAL",vt[vt.UNAVAILABLE=14]="UNAVAILABLE",vt[vt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=new Kn([4294967295,4294967295],0);function Jh(e){const t=nI().encode(e),n=new pp;return n.update(t),new Uint8Array(n.digest())}function Xh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Kn([n,r],0),new Kn([s,i],0)]}class oc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Kn.fromNumber(this.ge)}ye(t,n,r){let s=t.add(n.multiply(Kn.fromNumber(r)));return s.compare(rI)===1&&(s=new Kn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Jh(t),[r,s]=Xh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new oc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const n=Jh(t),[r,s]=Xh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,yi.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new qo(ct.min(),s,new xt(_t),Dn(),yt())}}class yi{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new yi(r,n,yt(),yt(),yt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,n,r,s){this.be=t,this.removedTargetIds=n,this.key=r,this.De=s}}class Xp{constructor(t,n){this.targetId=t,this.Ce=n}}class Zp{constructor(t,n,r=ue.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Zh{constructor(){this.ve=0,this.Fe=tf(),this.Me=ue.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=yt(),n=yt(),r=yt();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ot(38017,{changeType:i})}}),new yi(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=tf()}Ke(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,Rt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class sI{constructor(t){this.Ge=t,this.ze=new Map,this.je=Dn(),this.Je=Li(),this.He=Li(),this.Ze=new xt(_t)}Xe(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:ot(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(t){const n=t.targetId,r=t.Ce.count,s=this.ot(n);if(s){const i=s.target;if(hl(i))if(r===0){const a=new it(i.path);this.et(n,a,me.newNoDocument(a,ct.min()))}else Rt(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(t),c=l?this.ct(l,t,a):1;if(c!==0){this.it(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Zn(r).toUint8Array()}catch(c){if(c instanceof bp)return Er("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new oc(a,s,i)}catch(c){return Er(c instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(t){const n=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&hl(l.target)){const c=new it(l.target.path);this.Et(c).has(a)||this.It(a,c)||this.et(a,c,me.newNoDocument(c,t))}i.Be&&(n.set(a,i.ke()),i.qe())}});let r=yt();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new qo(t,n,this.Ze,this.je,r);return this.je=Dn(),this.Je=Li(),this.He=Li(),this.Ze=new xt(_t),s}Ye(t,n){if(!this.rt(t))return;const r=this.It(t,n.key)?2:0;this.nt(t).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.He=this.He.insert(n.key,this.Rt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const s=this.nt(t);this.It(t,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(t)),this.He=this.He.insert(n,this.Rt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new Zh,this.ze.set(t,n)),n}Rt(t){let n=this.He.get(t);return n||(n=new te(_t),this.He=this.He.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new te(_t),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||J("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Zh),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}It(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Li(){return new xt(it.comparator)}function tf(){return new xt(it.comparator)}const iI={asc:"ASCENDING",desc:"DESCENDING"},oI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aI={and:"AND",or:"OR"};class lI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function dl(e,t){return e.useProto3Json||Mo(t)?t:{value:t}}function po(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function cI(e,t){return po(e,t.toTimestamp())}function un(e){return Rt(!!e,49232),ct.fromTimestamp(function(n){const r=Xn(n);return new kt(r.seconds,r.nanos)}(e))}function ac(e,t){return pl(e,t).canonicalString()}function pl(e,t){const n=function(s){return new Ot(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function eg(e){const t=Ot.fromString(e);return Rt(og(t),10190,{key:t.toString()}),t}function gl(e,t){return ac(e.databaseId,t.path)}function Va(e,t){const n=eg(t);if(n.get(1)!==e.databaseId.projectId)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new it(rg(n))}function ng(e,t){return ac(e.databaseId,t)}function uI(e){const t=eg(e);return t.length===4?Ot.emptyPath():rg(t)}function ml(e){return new Ot(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rg(e){return Rt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function ef(e,t,n){return{name:gl(e,t),fields:n.value.mapValue.fields}}function hI(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ot(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Rt(d===void 0||typeof d=="string",58123),ue.fromBase64String(d||"")):(Rt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ue.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?U.UNKNOWN:Jp(h.code);return new Z(d,h.message||"")}(a);n=new Zp(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Va(e,r.document.name),i=un(r.document.updateTime),a=r.document.createTime?un(r.document.createTime):ct.min(),l=new Ue({mapValue:{fields:r.document.fields}}),c=me.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Ki(h,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Va(e,r.document),i=r.readTime?un(r.readTime):ct.min(),a=me.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ki([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Va(e,r.document),i=r.removedTargetIds||[];n=new Ki([],i,s,null)}else{if(!("filter"in t))return ot(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new tI(s,i),l=r.targetId;n=new Xp(l,a)}}return n}function fI(e,t){let n;if(t instanceof _i)n={update:ef(e,t.key,t.value)};else if(t instanceof sc)n={delete:gl(e,t.key)};else if(t instanceof Cr)n={update:ef(e,t.key,t.data),updateMask:TI(t.fieldMask)};else{if(!(t instanceof Jw))return ot(16599,{dt:t.type});n={verify:gl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ho)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ii)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fo)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw ot(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:cI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ot(27497)}(e,t.precondition)),n}function dI(e,t){return e&&e.length>0?(Rt(t!==void 0,14353),e.map(n=>function(s,i){let a=s.updateTime?un(s.updateTime):un(i);return a.isEqual(ct.min())&&(a=un(i)),new Ww(a,s.transformResults||[])}(n,t))):[]}function pI(e,t){return{documents:[ng(e,t.path)]}}function gI(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ng(e,s);const i=function(h){if(h.length!==0)return ig(gn.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Ur(m.field),direction:yI(m.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=dl(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ft:n,parent:s}}function mI(e){let t=uI(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Rt(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=sg(p);return m instanceof gn&&xp(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(D){return new uo(Br(D.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Mo(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,y=p.values||[];return new co(y,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,y=p.values||[];return new co(y,m)}(n.endAt)),kw(t,s,a,i,l,"F",c,h)}function _I(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ot(28987,{purpose:s})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function sg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Br(n.unaryFilter.field);return Zt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Br(n.unaryFilter.field);return Zt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(n.unaryFilter.field);return Zt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Br(n.unaryFilter.field);return Zt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ot(61313);default:return ot(60726)}}(e):e.fieldFilter!==void 0?function(n){return Zt.create(Br(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ot(58110);default:return ot(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>sg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ot(1026)}}(n.compositeFilter.op))}(e):ot(30097,{filter:e})}function yI(e){return iI[e]}function EI(e){return oI[e]}function vI(e){return aI[e]}function Ur(e){return{fieldPath:e.canonicalString()}}function Br(e){return le.fromServerFormat(e.fieldPath)}function ig(e){return e instanceof Zt?function(n){if(n.op==="=="){if($h(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(jh(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($h(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(jh(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:EI(n.op),value:n.value}}}(e):e instanceof gn?function(n){const r=n.getFilters().map(s=>ig(s));return r.length===1?r[0]:{compositeFilter:{op:vI(n.op),filters:r}}}(e):ot(54877,{filter:e})}function TI(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function og(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function ag(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,n,r,s,i=ct.min(),a=ct.min(),l=ue.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new qn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(t){this.yt=t}}function II(e){const t=mI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?fl(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.bn=new bI}addToCollectionParentIndex(t,n){return this.bn.add(n),x.resolve()}getCollectionParents(t,n){return x.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return x.resolve()}deleteFieldIndex(t,n){return x.resolve()}deleteAllFieldIndexes(t){return x.resolve()}createTargetIndexes(t,n){return x.resolve()}getDocumentsMatchingTarget(t,n){return x.resolve(null)}getIndexType(t,n){return x.resolve(0)}getFieldIndexes(t,n){return x.resolve([])}getNextCollectionGroupToUpdate(t){return x.resolve(null)}getMinOffset(t,n){return x.resolve(Jn.min())}getMinOffsetFromCollectionGroup(t,n){return x.resolve(Jn.min())}updateCollectionGroup(t,n,r){return x.resolve()}updateIndexEntries(t,n){return x.resolve()}}class bI{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new te(Ot.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new te(Ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lg=41943040;class Ve{static withCacheSize(t){return new Ve(t,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(lg,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new es(0)}static ar(){return new es(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="LruGarbageCollector",SI=1048576;function sf([e,t],[n,r]){const s=_t(e,n);return s===0?_t(t,r):s}class RI{constructor(t){this.Pr=t,this.buffer=new te(sf),this.Tr=0}Er(){return++this.Tr}Ir(t){const n=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class CI{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){J(rf,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){is(n)?J(rf,"Ignoring IndexedDB error during garbage collection: ",n):await ss(n)}await this.Ar(3e5)})}}class PI{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return x.resolve(xo.ce);const r=new RI(n);return this.Vr.forEachTarget(t,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.Vr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(nf)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nf):this.gr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(t,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(p=>(h=Date.now(),Lr()<=Tt.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function VI(e,t){return new PI(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.changes=new Rr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,me.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Hs(r.mutation,s,Ke.empty(),kt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,yt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=yt()){const s=dr();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=Ps();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=dr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,yt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=Dn();const a=zs(),l=function(){return zs()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Cr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Hs(d.mutation,h,d.mutation.getFieldMask(),kt.now())):a.set(h.key,Ke.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>l.set(h,new NI(d,a.get(h)??null))),l))}recalculateAndSaveOverlays(t,n){const r=zs();let s=new xt((a,l)=>a-l),i=yt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Ke.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||yt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=qp();d.forEach(m=>{if(!i.has(m)){const y=Qp(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return Ow(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):xw(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):x.resolve(dr());let l=ei,c=i;return a.next(h=>x.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?x.resolve():this.remoteDocumentCache.getEntry(t,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,yt())).next(d=>({batchId:l,changes:$p(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new it(n)).next(r=>{let s=Ps();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=Ps();return this.indexManager.getCollectionParents(t,i).next(l=>x.forEach(l,c=>{const h=function(p,m){return new Fo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,me.newInvalidDocument(d)))});let l=Ps();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Hs(d.mutation,h,Ke.empty(),kt.now()),Bo(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return x.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}}(n)),x.resolve()}getNamedQuery(t,n){return x.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,function(s){return{name:s.name,query:II(s.bundledQuery),readTime:un(s.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.overlays=new xt(it.comparator),this.Lr=new Map}getOverlay(t,n){return x.resolve(this.overlays.get(n))}getOverlays(t,n){const r=dr();return x.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.St(t,n,i)}),x.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),x.resolve()}getOverlaysForCollection(t,n,r){const s=dr(),i=n.length+1,a=new it(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return x.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new xt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=dr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=dr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return x.resolve(l)}St(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Zw(n,r));let i=this.Lr.get(n);i===void 0&&(i=yt(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.sessionToken=ue.EMPTY_BYTE_STRING}getSessionToken(t){return x.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.kr=new te(re.qr),this.Kr=new te(re.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const r=new re(t,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Wr(new re(t,n))}Qr(t,n){t.forEach(r=>this.removeReference(r,n))}Gr(t){const n=new it(new Ot([])),r=new re(n,t),s=new re(n,t+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const n=new it(new Ot([])),r=new re(n,t),s=new re(n,t+1);let i=yt();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new re(t,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class re{constructor(t,n){this.key=t,this.Jr=n}static qr(t,n){return it.comparator(t.key,n.key)||_t(t.Jr,n.Jr)}static Ur(t,n){return _t(t.Jr,n.Jr)||it.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new te(re.qr)}checkEmpty(t){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Xw(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new re(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(t,n){return x.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Jl:this.Yn-1)}getAllMutationBatches(t){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new re(n,0),s=new re(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const l=this.Zr(a.Jr);i.push(l)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new te(_t);return n.forEach(s=>{const i=new re(s,0),a=new re(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],l=>{r=r.add(l.Jr)})}),x.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;it.isDocumentKey(i)||(i=i.child(""));const a=new re(new it(i),0);let l=new te(_t);return this.Hr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Jr)),!0)},a),x.resolve(this.Yr(l))}Yr(t){const n=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Rt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return x.forEach(n.mutations,s=>{const i=new re(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,n){const r=new re(n,0),s=this.Hr.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,x.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(t){this.ti=t,this.docs=function(){return new xt(it.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():me.newInvalidDocument(n))}getEntries(t,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():me.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Dn();const a=n.path,l=new it(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||uw(cw(d),r)<=0||(s.has(d.key)||Bo(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(t,n,r,s){ot(9500)}ni(t,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new UI(this)}getSize(t){return x.resolve(this.size)}}class UI extends DI{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),x.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(t){this.persistence=t,this.ri=new Rr(n=>tc(n),ec),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.ii=0,this.si=new lc,this.targetCount=0,this.oi=es._r()}forEachTarget(t,n){return this.ri.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(t){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return x.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),x.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new es(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,x.resolve()}updateTargetData(t,n){return this.lr(n),x.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(t){return x.resolve(this.targetCount)}getTargetData(t,n){const r=this.ri.get(n)||null;return x.resolve(r)}addMatchingKeys(t,n,r){return this.si.$r(n,r),x.resolve()}removeMatchingKeys(t,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),x.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),x.resolve()}getMatchingKeysForTargetId(t,n){const r=this.si.jr(n);return x.resolve(r)}containsKey(t,n){return x.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,n){this._i={},this.overlays={},this.ai=new xo(0),this.ui=!1,this.ui=!0,this.ci=new MI,this.referenceDelegate=t(this),this.li=new BI(this),this.indexManager=new AI,this.remoteDocumentCache=function(s){return new FI(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new wI(n),this.Pi=new OI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new xI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this._i[t.toKey()];return r||(r=new LI(n,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,r){J("MemoryPersistence","Starting transaction:",t);const s=new jI(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(t,n){return x.or(Object.values(this._i).map(r=>()=>r.containsKey(t,n)))}}class jI extends fw{constructor(t){super(),this.currentSequenceNumber=t}}class cc{constructor(t){this.persistence=t,this.Ri=new lc,this.Ai=null}static Vi(t){return new cc(t)}get di(){if(this.Ai)return this.Ai;throw ot(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),x.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),x.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),x.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ti(){this.Ai=new Set}Ei(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,r=>{const s=it.fromPath(r);return this.mi(t,s).next(i=>{i||n.removeEntry(s,ct.min())})}).next(()=>(this.Ai=null,n.apply(t)))}updateLimboDocument(t,n){return this.mi(t,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(t){return 0}mi(t,n){return x.or([()=>x.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ii(t,n)])}}class go{constructor(t,n){this.persistence=t,this.fi=new Rr(r=>gw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=VI(this,n)}static Vi(t,n){return new go(t,n)}Ti(){}Ei(t){return x.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}pr(t){let n=0;return this.mr(t,r=>{n++}).next(()=>n)}mr(t,n){return x.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,n).next(l=>{l||(r++,i.removeEntry(a,ct.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),x.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.fi.set(r,t.currentSequenceNumber),x.resolve()}removeReference(t,n,r){return this.fi.set(r,t.currentSequenceNumber),x.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),x.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=qi(t.data.value)),n}wr(t,n,r){return x.or([()=>this.persistence.Ii(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.fi.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Ts=r,this.Es=s}static Is(t,n){let r=yt(),s=yt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uc(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Nv()?8:dw(Vv())>0?6:4}()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.gs(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new $I;return this.ys(t,n,a).next(l=>{if(i.result=l,this.As)return this.ws(t,n,a,l.size)})}).next(()=>i.result)}ws(t,n,r,s){return r.documentReadCount<this.Vs?(Lr()<=Tt.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Lr()<=Tt.DEBUG&&J("QueryEngine","Query:",Fr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Lr()<=Tt.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ln(n))):x.resolve())}gs(t,n){if(Kh(n))return x.resolve(null);let r=ln(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=fl(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=yt(...i);return this.fs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.Ss(n,l);return this.bs(n,h,a,c.readTime)?this.gs(t,fl(n,null,"F")):this.Ds(t,h,n,c)}))})))}ps(t,n,r,s){return Kh(n)||s.isEqual(ct.min())?x.resolve(null):this.fs.getDocuments(t,r).next(i=>{const a=this.Ss(n,i);return this.bs(n,a,r,s)?x.resolve(null):(Lr()<=Tt.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fr(n)),this.Ds(t,a,n,lw(s,ei)).next(l=>l))})}Ss(t,n){let r=new te(Bp(t));return n.forEach((s,i)=>{Bo(t,i)&&(r=r.add(i))}),r}bs(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(t,n,r){return Lr()<=Tt.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.fs.getDocumentsMatchingQuery(t,n,Jn.min(),r)}Ds(t,n,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="LocalStore",zI=3e8;class HI{constructor(t,n,r,s){this.persistence=t,this.Cs=n,this.serializer=s,this.vs=new xt(_t),this.Fs=new Rr(i=>tc(i),ec),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.vs))}}function KI(e,t,n,r){return new HI(e,t,n,r)}async function ug(e,t){const n=ht(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=yt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function GI(e,t){const n=ht(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let y=x.resolve();return m.forEach(D=>{y=y.next(()=>d.getEntry(c,D)).next(V=>{const L=h.docVersions.get(D);Rt(L!==null,48541),V.version.compareTo(L)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),d.addEntry(V)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=yt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function hg(e){const t=ht(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.li.getLastRemoteSnapshotVersion(n))}function WI(e,t){const n=ht(e),r=t.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];t.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,d.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?y=y.withResumeToken(ue.EMPTY_BYTE_STRING,ct.min()).withLastLimboFreeSnapshotVersion(ct.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(V,L,H){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=zI?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(m,y,d)&&l.push(n.li.updateTargetData(i,y))});let c=Dn(),h=yt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(QI(i,a,t.documentUpdates).next(d=>{c=d.Bs,h=d.Ls})),!r.isEqual(ct.min())){const d=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return x.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.vs=s,i))}function QI(e,t,n){let r=yt(),s=yt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=Dn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ct.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):J(hc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Bs:a,Ls:s}})}function YI(e,t){const n=ht(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Jl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function JI(e,t){const n=ht(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,t).next(i=>i?(s=i,x.resolve(s)):n.li.allocateTargetId(r).next(a=>(s=new qn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(t,r.targetId)),r})}async function _l(e,t,n){const r=ht(e),s=r.vs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!is(a))throw a;J(hc,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function of(e,t,n){const r=ht(e);let s=ct.min(),i=yt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=ht(c),m=p.Fs.get(d);return m!==void 0?x.resolve(p.vs.get(m)):p.li.getTargetData(h,d)}(r,a,ln(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,n?s:ct.min(),n?i:yt())).next(l=>(XI(r,Lw(t),l),{documents:l,ks:i})))}function XI(e,t,n){let r=e.Ms.get(t)||ct.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Ms.set(t,r)}class af{constructor(){this.activeTargetIds=qw()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ZI{constructor(){this.vo=new af,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,r){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new af,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="ConnectivityMonitor";class cf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){J(lf,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){J(lf,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi=null;function yl(){return Fi===null?Fi=function(){return 268435456+Math.round(2147483648*Math.random())}():Fi++,"0x"+Fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="RestConnection",eA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class nA{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===ao?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,n,r,s,i){const a=yl(),l=this.Qo(t,n.toUriEncodedString());J(Da,`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:h}=new URL(l),d=op(h);return this.zo(t,l,c,r,d).then(p=>(J(Da,`Received RPC '${t}' ${a}: `,p),p),p=>{throw Er(Da,`RPC '${t}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}jo(t,n,r,s,i,a){return this.Wo(t,n,r,s,i)}Go(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}Qo(t,n){const r=eA[t];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="WebChannelConnection",bs=(e,t,n)=>{e.listen(t,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Kr extends nA{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Kr.c_){const t=yp();bs(t,_p.STAT_EVENT,n=>{n.stat===ol.PROXY?J(fe,"STAT_EVENT: detected buffering proxy"):n.stat===ol.NOPROXY&&J(fe,"STAT_EVENT: detected no buffering proxy")}),Kr.c_=!0}}zo(t,n,r,s,i){const a=yl();return new Promise((l,c)=>{const h=new gp;h.setWithCredentials(!0),h.listenOnce(mp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case $i.NO_ERROR:const p=h.getResponseJson();J(fe,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),l(p);break;case $i.TIMEOUT:J(fe,`RPC '${t}' ${a} timed out`),c(new Z(U.DEADLINE_EXCEEDED,"Request time out"));break;case $i.HTTP_ERROR:const m=h.getStatus();if(J(fe,`RPC '${t}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let y=h.getResponseJson();Array.isArray(y)&&(y=y[0]);const D=y==null?void 0:y.error;if(D&&D.status&&D.message){const V=function(H){const j=H.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(j)>=0?j:U.UNKNOWN}(D.status);c(new Z(V,D.message))}else c(new Z(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new Z(U.UNAVAILABLE,"Connection failed."));break;default:ot(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{J(fe,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);J(fe,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)})}T_(t,n,r){const s=yl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");J(fe,`Creating RPC '${t}' stream ${s}: ${h}`,l);const d=a.createWebChannel(h,l);this.E_(d);let p=!1,m=!1;const y=new rA({Jo:D=>{m?J(fe,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(p||(J(fe,`Opening RPC '${t}' stream ${s} transport.`),d.open(),p=!0),J(fe,`RPC '${t}' stream ${s} sending:`,D),d.send(D))},Ho:()=>d.close()});return bs(d,Cs.EventType.OPEN,()=>{m||(J(fe,`RPC '${t}' stream ${s} transport opened.`),y.i_())}),bs(d,Cs.EventType.CLOSE,()=>{m||(m=!0,J(fe,`RPC '${t}' stream ${s} transport closed`),y.o_(),this.I_(d))}),bs(d,Cs.EventType.ERROR,D=>{m||(m=!0,Er(fe,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),y.o_(new Z(U.UNAVAILABLE,"The operation could not be completed")))}),bs(d,Cs.EventType.MESSAGE,D=>{var V;if(!m){const L=D.data[0];Rt(!!L,16349);const H=L,j=(H==null?void 0:H.error)||((V=H[0])==null?void 0:V.error);if(j){J(fe,`RPC '${t}' stream ${s} received error:`,j);const z=j.status;let Q=function(I){const E=Ht[I];if(E!==void 0)return Jp(E)}(z),at=j.message;z==="NOT_FOUND"&&at.includes("database")&&at.includes("does not exist")&&at.includes(this.databaseId.database)&&Er(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Q===void 0&&(Q=U.INTERNAL,at="Unknown error status: "+z+" with message "+j.message),m=!0,y.o_(new Z(Q,at)),d.close()}else J(fe,`RPC '${t}' stream ${s} received:`,L),y.__(L)}}),Kr.u_(),setTimeout(()=>{y.s_()},0),y}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(n=>n===t)}Go(t,n,r){super.Go(t,n,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ep()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(e){return new Kr(e)}function Na(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(e){return new lI(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kr.c_=!1;class fg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Ci=t,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="PersistentStream";class dg{constructor(t,n,r,s,i,a,l,c){this.Ci=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fg(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{t(()=>{const s=new Z(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,n){const r=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return J(uf,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget(()=>this.D_===t?n():(J(uf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iA extends dg{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=hI(this.serializer,t),r=function(i){if(!("targetChange"in i))return ct.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ct.min():a.readTime?un(a.readTime):ct.min()}(t);return this.listener.H_(n,r)}Z_(t){const n={};n.database=ml(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=hl(c)?{documents:pI(i,c)}:{query:gI(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=tg(i,a.resumeToken);const h=dl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ct.min())>0){l.readTime=po(i,a.snapshotVersion.toTimestamp());const h=dl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=_I(this.serializer,t);r&&(n.labels=r),this.q_(n)}X_(t){const n={};n.database=ml(this.serializer),n.removeTarget=t,this.q_(n)}}class oA extends dg{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Rt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Rt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Rt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=dI(t.writeResults,t.commitTime),r=un(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=ml(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>fI(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{}class lA extends aA{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(t,pl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(U.UNKNOWN,i.toString())})}jo(t,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(t,pl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Z(U.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function cA(e,t,n,r){return new lA(e,t,n,r)}class uA{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vn(n),this.aa=!1):J("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="RemoteStore";class hA{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{Pr(this)&&(J(vr,"Restarting streams for network reachability change."),await async function(c){const h=ht(c);h.Ia.add(4),await Ei(h),h.Va.set("Unknown"),h.Ia.delete(4),await Ho(h)}(this))})}),this.Va=new uA(r,s)}}async function Ho(e){if(Pr(e))for(const t of e.Ra)await t(!0)}async function Ei(e){for(const t of e.Ra)await t(!1)}function pg(e,t){const n=ht(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),gc(n)?pc(n):os(n).O_()&&dc(n,t))}function fc(e,t){const n=ht(e),r=os(n);n.Ea.delete(t),r.O_()&&gg(n,t),n.Ea.size===0&&(r.O_()?r.L_():Pr(n)&&n.Va.set("Unknown"))}function dc(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ct.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}os(e).Z_(t)}function gg(e,t){e.da.$e(t),os(e).X_(t)}function pc(e){e.da=new sI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),os(e).start(),e.Va.ua()}function gc(e){return Pr(e)&&!os(e).x_()&&e.Ea.size>0}function Pr(e){return ht(e).Ia.size===0}function mg(e){e.da=void 0}async function fA(e){e.Va.set("Online")}async function dA(e){e.Ea.forEach((t,n)=>{dc(e,t)})}async function pA(e,t){mg(e),gc(e)?(e.Va.ha(t),pc(e)):e.Va.set("Unknown")}async function gA(e,t,n){if(e.Va.set("Online"),t instanceof Zp&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.da.removeTarget(l))}(e,t)}catch(r){J(vr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await mo(e,r)}else if(t instanceof Ki?e.da.Xe(t):t instanceof Xp?e.da.st(t):e.da.tt(t),!n.isEqual(ct.min()))try{const r=await hg(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.da.Tt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ea.get(h);d&&i.Ea.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.Ea.get(c);if(!d)return;i.Ea.set(c,d.withResumeToken(ue.EMPTY_BYTE_STRING,d.snapshotVersion)),gg(i,c);const p=new qn(d.target,c,h,d.sequenceNumber);dc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){J(vr,"Failed to raise snapshot:",r),await mo(e,r)}}async function mo(e,t,n){if(!is(t))throw t;e.Ia.add(1),await Ei(e),e.Va.set("Offline"),n||(n=()=>hg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{J(vr,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await Ho(e)})}function _g(e,t){return t().catch(n=>mo(e,n,t))}async function Ko(e){const t=ht(e),n=er(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Jl;for(;mA(t);)try{const s=await YI(t.localStore,r);if(s===null){t.Ta.length===0&&n.L_();break}r=s.batchId,_A(t,s)}catch(s){await mo(t,s)}yg(t)&&Eg(t)}function mA(e){return Pr(e)&&e.Ta.length<10}function _A(e,t){e.Ta.push(t);const n=er(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function yg(e){return Pr(e)&&!er(e).x_()&&e.Ta.length>0}function Eg(e){er(e).start()}async function yA(e){er(e).ra()}async function EA(e){const t=er(e);for(const n of e.Ta)t.ea(n.mutations)}async function vA(e,t,n){const r=e.Ta.shift(),s=ic.from(r,t,n);await _g(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Ko(e)}async function TA(e,t){t&&er(e).Y_&&await async function(r,s){if(function(a){return eI(a)&&a!==U.ABORTED}(s.code)){const i=r.Ta.shift();er(r).B_(),await _g(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ko(r)}}(e,t),yg(e)&&Eg(e)}async function hf(e,t){const n=ht(e);n.asyncQueue.verifyOperationInProgress(),J(vr,"RemoteStore received new credentials");const r=Pr(n);n.Ia.add(3),await Ei(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Ho(n)}async function wA(e,t){const n=ht(e);t?(n.Ia.delete(2),await Ho(n)):t||(n.Ia.add(2),await Ei(n),n.Va.set("Unknown"))}function os(e){return e.ma||(e.ma=function(n,r,s){const i=ht(n);return i.sa(),new iA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Zo:fA.bind(null,e),Yo:dA.bind(null,e),t_:pA.bind(null,e),H_:gA.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),gc(e)?pc(e):e.Va.set("Unknown")):(await e.ma.stop(),mg(e))})),e.ma}function er(e){return e.fa||(e.fa=function(n,r,s){const i=ht(n);return i.sa(),new oA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:yA.bind(null,e),t_:TA.bind(null,e),ta:EA.bind(null,e),na:vA.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Ko(e)):(await e.fa.stop(),e.Ta.length>0&&(J(vr,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new mc(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(U.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _c(e,t){if(Vn("AsyncQueue",`${t}: ${e}`),is(e))return new Z(U.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{static emptySet(t){return new Gr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||it.comparator(n.key,r.key):(n,r)=>it.comparator(n.key,r.key),this.keyedMap=Ps(),this.sortedSet=new xt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Gr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.ga=new xt(it.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):ot(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,r)=>{t.push(r)}),t}}class ns{constructor(t,n,r,s,i,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new ns(t,n,Gr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Uo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class AA{constructor(){this.queries=df(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ht(n),i=s.queries;s.queries=df(),i.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new Z(U.ABORTED,"Firestore shutting down"))}}function df(){return new Rr(e=>Up(e),Uo)}async function bA(e,t){const n=ht(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new IA,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=_c(a,`Initialization of query '${Fr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.Sa.push(t),t.va(n.onlineState),i.wa&&t.Fa(i.wa)&&yc(n)}async function SA(e,t){const n=ht(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RA(e,t){const n=ht(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&yc(n)}function CA(e,t,n){const r=ht(e),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(t)}function yc(e){e.Ca.forEach(t=>{t.next()})}var El,pf;(pf=El||(El={})).Ma="default",pf.Cache="cache";class PA{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ns(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=ns.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==El.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t){this.key=t}}class Tg{constructor(t){this.key=t}}class VA{constructor(t,n){this.query=t,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=yt(),this.mutatedKeys=yt(),this.eu=Bp(t),this.tu=new Gr(this.eu)}get nu(){return this.Za}ru(t,n){const r=n?n.iu:new ff,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,p)=>{const m=s.get(d),y=Bo(this.query,p)?p:null,D=!!m&&this.mutatedKeys.has(m.key),V=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let L=!1;m&&y?m.data.isEqual(y.data)?D!==V&&(r.track({type:3,doc:y}),L=!0):this.su(m,y)||(r.track({type:2,doc:y}),L=!0,(c&&this.eu(y,c)>0||h&&this.eu(y,h)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),L=!0):m&&!y&&(r.track({type:1,doc:m}),L=!0,(c||h)&&(l=!0)),L&&(y?(a=a.add(y),i=V?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,bs:l,mutatedKeys:i}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((d,p)=>function(y,D){const V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ot(20277,{Vt:L})}};return V(y)-V(D)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Xa;return this.Xa=c,a.length!==0||h?{snapshot:new ns(this.query,t.tu,i,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ff,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=yt(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return t.forEach(r=>{this.Ya.has(r)||n.push(new Tg(r))}),this.Ya.forEach(r=>{t.has(r)||n.push(new vg(r))}),n}cu(t){this.Za=t.ks,this.Ya=yt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return ns.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ec="SyncEngine";class DA{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class NA{constructor(t){this.key=t,this.hu=!1}}class kA{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Rr(l=>Up(l),Uo),this.Eu=new Map,this.Iu=new Set,this.Ru=new xt(it.comparator),this.Au=new Map,this.Vu=new lc,this.du={},this.mu=new Map,this.fu=es.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function OA(e,t,n=!0){const r=Rg(e);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await wg(r,t,n,!0),s}async function xA(e,t){const n=Rg(e);await wg(n,t,!0,!1)}async function wg(e,t,n,r){const s=await JI(e.localStore,ln(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await MA(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&pg(e.remoteStore,s),l}async function MA(e,t,n,r,s){e.pu=(p,m,y)=>async function(V,L,H,j){let z=L.view.ru(H);z.bs&&(z=await of(V.localStore,L.query,!1).then(({documents:I})=>L.view.ru(I,z)));const Q=j&&j.targetChanges.get(L.targetId),at=j&&j.targetMismatches.get(L.targetId)!=null,gt=L.view.applyChanges(z,V.isPrimaryClient,Q,at);return mf(V,L.targetId,gt.au),gt.snapshot}(e,p,m,y);const i=await of(e.localStore,t,!0),a=new VA(t,i.ks),l=a.ru(i.documents),c=yi.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,c);mf(e,n,h.au);const d=new DA(t,n,a);return e.Tu.set(t,d),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),h.snapshot}async function LA(e,t,n){const r=ht(e),s=r.Tu.get(t),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(a=>!Uo(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _l(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fc(r.remoteStore,s.targetId),vl(r,s.targetId)}).catch(ss)):(vl(r,s.targetId),await _l(r.localStore,s.targetId,!0))}async function FA(e,t){const n=ht(e),r=n.Tu.get(t),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fc(n.remoteStore,r.targetId))}async function UA(e,t,n){const r=KA(e);try{const s=await function(a,l){const c=ht(a),h=kt.now(),d=l.reduce((y,D)=>y.add(D.key),yt());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let D=Dn(),V=yt();return c.xs.getEntries(y,d).next(L=>{D=L,D.forEach((H,j)=>{j.isValidDocument()||(V=V.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,D)).next(L=>{p=L;const H=[];for(const j of l){const z=Yw(j,p.get(j.key).overlayedDocument);z!=null&&H.push(new Cr(j.key,z,Np(z.value.mapValue),cn.exists(!0)))}return c.mutationQueue.addMutationBatch(y,h,H,l)}).next(L=>{m=L;const H=L.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(y,L.batchId,H)})}).then(()=>({batchId:m.batchId,changes:$p(p)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.du[a.currentUser.toKey()];h||(h=new xt(_t)),h=h.insert(l,c),a.du[a.currentUser.toKey()]=h}(r,s.batchId,n),await vi(r,s.changes),await Ko(r.remoteStore)}catch(s){const i=_c(s,"Failed to persist write");n.reject(i)}}async function Ig(e,t){const n=ht(e);try{const r=await WI(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Au.get(i);a&&(Rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Rt(a.hu,14607):s.removedDocuments.size>0&&(Rt(a.hu,42227),a.hu=!1))}),await vi(n,r,t)}catch(r){await ss(r)}}function gf(e,t,n){const r=ht(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ht(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(h=!0)}),h&&yc(c)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function BA(e,t,n){const r=ht(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new xt(it.comparator);a=a.insert(i,me.newNoDocument(i,ct.min()));const l=yt().add(i),c=new qo(ct.min(),new Map,new xt(_t),a,l);await Ig(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(t),vc(r)}else await _l(r.localStore,t,!1).then(()=>vl(r,t,n)).catch(ss)}async function jA(e,t){const n=ht(e),r=t.batch.batchId;try{const s=await GI(n.localStore,t);bg(n,r,null),Ag(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vi(n,s)}catch(s){await ss(s)}}async function $A(e,t,n){const r=ht(e);try{const s=await function(a,l){const c=ht(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Rt(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,t);bg(r,t,n),Ag(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await vi(r,s)}catch(s){await ss(s)}}function Ag(e,t){(e.mu.get(t)||[]).forEach(n=>{n.resolve()}),e.mu.delete(t)}function bg(e,t,n){const r=ht(e);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function vl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Eu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(r=>{e.Vu.containsKey(r)||Sg(e,r)})}function Sg(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);n!==null&&(fc(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),vc(e))}function mf(e,t,n){for(const r of n)r instanceof vg?(e.Vu.addReference(r.key,t),qA(e,r)):r instanceof Tg?(J(Ec,"Document no longer in limbo: "+r.key),e.Vu.removeReference(r.key,t),e.Vu.containsKey(r.key)||Sg(e,r.key)):ot(19791,{wu:r})}function qA(e,t){const n=t.key,r=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(r)||(J(Ec,"New document in limbo: "+n),e.Iu.add(r),vc(e))}function vc(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new it(Ot.fromString(t)),r=e.fu.next();e.Au.set(r,new NA(n)),e.Ru=e.Ru.insert(n,r),pg(e.remoteStore,new qn(ln(nc(n.path)),r,"TargetPurposeLimboResolution",xo.ce))}}async function vi(e,t,n){const r=ht(e),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{a.push(r.pu(c,t,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=uc.Is(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(c,h){const d=ht(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(h,m=>x.forEach(m.Ts,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>x.forEach(m.Es,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!is(p))throw p;J(hc,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const y=d.vs.get(m),D=y.snapshotVersion,V=y.withLastLimboFreeSnapshotVersion(D);d.vs=d.vs.insert(m,V)}}}(r.localStore,i))}async function zA(e,t){const n=ht(e);if(!n.currentUser.isEqual(t)){J(Ec,"User change. New user:",t.toKey());const r=await ug(n.localStore,t);n.currentUser=t,function(i,a){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new Z(U.CANCELLED,a))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await vi(n,r.Ns)}}function HA(e,t){const n=ht(e),r=n.Au.get(t);if(r&&r.hu)return yt().add(r.key);{let s=yt();const i=n.Eu.get(t);if(!i)return s;for(const a of i){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function Rg(e){const t=ht(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ig.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=HA.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=BA.bind(null,t),t.Pu.H_=RA.bind(null,t.eventManager),t.Pu.yu=CA.bind(null,t.eventManager),t}function KA(e){const t=ht(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jA.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$A.bind(null,t),t}class _o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=zo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return KI(this.persistence,new qI,t.initialUser,this.serializer)}Cu(t){return new cg(cc.Vi,this.serializer)}Du(t){return new ZI}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_o.provider={build:()=>new _o};class GA extends _o{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Rt(this.persistence.referenceDelegate instanceof go,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new CI(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new cg(r=>go.Vi(r,n),this.serializer)}}class Tl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zA.bind(null,this.syncEngine),await wA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new AA}()}createDatastore(t){const n=zo(t.databaseInfo.databaseId),r=sA(t.databaseInfo);return cA(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new hA(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>gf(this.syncEngine,n,0),function(){return cf.v()?new cf:new tA}())}createSyncEngine(t,n){return function(s,i,a,l,c,h,d){const p=new kA(s,i,a,l,c,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=ht(s);J(vr,"RemoteStore shutting down."),i.Ia.add(5),await Ei(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}Tl.provider={build:()=>new Tl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Vn("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="FirestoreClient";class QA{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=pe.UNAUTHENTICATED,this.clientId=Ql.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{J(nr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(J(nr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=_c(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ka(e,t){e.asyncQueue.verifyOperationInProgress(),J(nr,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ug(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function _f(e,t){e.asyncQueue.verifyOperationInProgress();const n=await YA(e);J(nr,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>hf(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>hf(t.remoteStore,s)),e._onlineComponents=t}async function YA(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){J(nr,"Using user provided OfflineComponentProvider");try{await ka(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Er("Error using user provided cache. Falling back to memory cache: "+n),await ka(e,new _o)}}else J(nr,"Using default OfflineComponentProvider"),await ka(e,new GA(void 0));return e._offlineComponents}async function Cg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(J(nr,"Using user provided OnlineComponentProvider"),await _f(e,e._uninitializedComponentsProvider._online)):(J(nr,"Using default OnlineComponentProvider"),await _f(e,new Tl))),e._onlineComponents}function JA(e){return Cg(e).then(t=>t.syncEngine)}async function XA(e){const t=await Cg(e),n=t.eventManager;return n.onListen=OA.bind(null,t.syncEngine),n.onUnlisten=LA.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=xA.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=FA.bind(null,t.syncEngine),n}function ZA(e,t,n={}){const r=new Gn;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new WA({next:m=>{d.Nu(),a.enqueueAndForget(()=>SA(i,p));const y=m.docs.has(l);!y&&m.fromCache?h.reject(new Z(U.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?h.reject(new Z(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new PA(nc(l.path),d,{includeMetadataChanges:!0,qa:!0});return bA(i,p)}(await XA(e),e.asyncQueue,t,n,r)),r.promise}function tb(e,t){const n=new Gn;return e.asyncQueue.enqueueAndForget(async()=>UA(await JA(e),t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="ComponentProvider",yf=new Map;function nb(e,t,n,r,s){return new yw(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Pg(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="firestore.googleapis.com",Ef=!0;class vf{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new Z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vg,this.ssl=Ef}else this.host=t.host,this.ssl=t.ssl??Ef;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=lg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<SI)throw new Z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}aw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pg(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Tc{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YT;switch(r.type){case"firstParty":return new tw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yf.get(n);r&&(J(eb,"Removing Datastore"),yf.delete(n),r.terminate())}(this),Promise.resolve()}}function rb(e,t,n,r={}){var h;e=Xr(e,Tc);const s=op(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&Lv(`https://${l}`),i.host!==Vg&&i.host!==l&&Er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!so(c,a)&&(e._setSettings(c),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=pe.MOCK_USER;else{d=Pv(r.mockUserToken,(h=e._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new pe(m)}e._authCredentials=new JT(new Tp(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new wc(this.firestore,t,this._query)}}class se{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new se(this.firestore,t,this._key)}toJSON(){return{type:se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(mi(n,se._jsonSchema))return new se(t,r||null,new it(Ot.fromString(n.referencePath)))}}se._jsonSchemaVersion="firestore/documentReference/1.0",se._jsonSchema={type:Gt("string",se._jsonSchemaVersion),referencePath:Gt("string")};class ai extends wc{constructor(t,n,r){super(t,n,nc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new se(this.firestore,null,new it(t))}withConverter(t){return new ai(this.firestore,t,this._path)}}function Ic(e,t,...n){if(e=_r(e),arguments.length===1&&(t=Ql.newId()),ow("doc","path",t),e instanceof Tc){const r=Ot.fromString(t,...n);return kh(r),new se(e,null,new it(r))}{if(!(e instanceof se||e instanceof ai))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ot.fromString(t,...n));return kh(r),new se(e.firestore,e instanceof ai?e.converter:null,new it(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="AsyncQueue";class wf{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fg(this,"async_queue_retry"),this._c=()=>{const r=Na();r&&J(Tf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=Na();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Na();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Gn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!is(t))throw t;J(Tf,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Vn("INTERNAL UNHANDLED ERROR: ",If(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=mc.createAndSchedule(this,t,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ot(47125,{Pc:If(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function If(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class Go extends Tc{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new wf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new wf(t),this._firestoreClient=void 0,await t}}}function sb(e,t){const n=typeof e=="object"?e:hp(),r=typeof e=="string"?e:ao,s=Oo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Rv("firestore");i&&rb(s,...i)}return s}function Dg(e){if(e._terminated)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||ib(e),e._firestoreClient}function ib(e){var r,s,i,a;const t=e._freezeSettings(),n=nb(e._databaseId,((r=e._app)==null?void 0:r.options.appId)||"",e._persistenceKey,(s=e._app)==null?void 0:s.options.apiKey,t);e._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new QA(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Be(ue.fromBase64String(t))}catch(n){throw new Z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Be(ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(mi(t,Be._jsonSchema))return Be.fromBase64String(t.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:Gt("string",Be._jsonSchemaVersion),bytes:Gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return _t(this._lat,t._lat)||_t(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(t){if(mi(t,hn._jsonSchema))return new hn(t.latitude,t.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:Gt("string",hn._jsonSchemaVersion),latitude:Gt("number"),longitude:Gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Qe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(mi(t,Qe._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new Qe(t.vectorValues);throw new Z(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qe._jsonSchemaVersion="firestore/vectorValue/1.0",Qe._jsonSchema={type:Gt("string",Qe._jsonSchemaVersion),vectorValues:Gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=/^__.*__$/;class ab{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Cr(t,this.data,this.fieldMask,n,this.fieldTransforms):new _i(t,this.data,n,this.fieldTransforms)}}function Og(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ot(40011,{dataSource:e})}}class Ac{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Ac({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),r=this.i({path:n,arrayElement:!1});return r.mc(t),r}fc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return yo(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(Og(this.dataSource)&&ob.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class lb{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||zo(t)}I(t,n,r,s=!1){return new Ac({dataSource:t,methodName:n,targetDoc:r,path:le.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cb(e){const t=e._freezeSettings(),n=zo(e._databaseId);return new lb(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ub(e,t,n,r,s,i={}){const a=e.I(i.merge||i.mergeFields?2:0,t,n,s);Fg("Data must be an object, but it was:",a,r);const l=Mg(r,a);let c,h;if(i.merge)c=new Ke(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=bc(t,p,n);if(!a.contains(m))throw new Z(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);db(d,m)||d.push(m)}c=new Ke(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new ab(new Ue(l),c,h)}function xg(e,t){if(Lg(e=_r(e)))return Fg("Unsupported field value:",t,e),Mg(e,t);if(e instanceof kg)return function(r,s){if(!Og(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=xg(l,s.gc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=_r(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=kt.fromDate(r);return{timestampValue:po(s.serializer,i)}}if(r instanceof kt){const i=new kt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:po(s.serializer,i)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:tg(s.serializer,r._byteString)};if(r instanceof se){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ac(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qe)return function(a,l){const c=a instanceof Qe?a.toArray():a;return{mapValue:{fields:{[Vp]:{stringValue:Dp},[lo]:{arrayValue:{values:c.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return rc(l.serializer,d)})}}}}}}(r,s);if(ag(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Yl(r)}`)}(e,t)}function Mg(e,t){const n={};return Ap(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Sr(e,(r,s)=>{const i=xg(s,t.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Lg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof kt||e instanceof hn||e instanceof Be||e instanceof se||e instanceof kg||e instanceof Qe||ag(e))}function Fg(e,t,n){if(!Lg(n)||!wp(n)){const r=Yl(n);throw r==="an object"?t.yc(e+" a custom object"):t.yc(e+" "+r)}}function bc(e,t,n){if((t=_r(t))instanceof Ng)return t._internalPath;if(typeof t=="string")return fb(e,t);throw yo("Field path arguments must be of type string or ",e,!1,void 0,n)}const hb=new RegExp("[~\\*/\\[\\]]");function fb(e,t,n){if(t.search(hb)>=0)throw yo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ng(...t.split("."))._internalPath}catch{throw yo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function yo(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Z(U.INVALID_ARGUMENT,l+e+c)}function db(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{convertValue(t,n="none"){switch(tr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $t(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Zn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw ot(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Sr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var r,s,i;const n=(i=(s=(r=t.fields)==null?void 0:r[lo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>$t(a.doubleValue));return new Qe(n)}convertGeoPoint(t){return new hn($t(t.latitude),$t(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Lo(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ni(t));default:return null}}convertTimestamp(t){const n=Xn(t);return new kt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ot.fromString(t);Rt(og(r),9688,{name:t});const s=new ri(r.get(1),r.get(3)),i=new it(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb extends pb{constructor(t){super(),this.firestore=t}convertBytes(t){return new Be(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new se(this.firestore,null,n)}}const Af="@firebase/firestore",bf="4.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new mb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mb extends Ug{data(){return super.data()}}function _b(e,t,n){let r;return r=e?e.toFirestore(t):t,r}class Ds{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mr extends Ug{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(bc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=mr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",mr._jsonSchema={type:Gt("string",mr._jsonSchemaVersion),bundleSource:Gt("string","DocumentSnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class Gi extends mr{data(t={}){return super.data(t)}}class Ks{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ds(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Gi(this._firestore,this._userDataWriter,r.key,r,new Ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Gi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Gi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:yb(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ks._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ql.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function yb(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ot(61501,{type:e})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ks._jsonSchemaVersion="firestore/querySnapshot/1.0",Ks._jsonSchema={type:Gt("string",Ks._jsonSchemaVersion),bundleSource:Gt("string","QuerySnapshot"),bundleName:Gt("string"),bundle:Gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(e){e=Xr(e,se);const t=Xr(e.firestore,Go),n=Dg(t);return ZA(n,e._key).then(r=>Tb(t,e,r))}function Bg(e,t,n){e=Xr(e,se);const r=Xr(e.firestore,Go),s=_b(e.converter,t),i=cb(r);return jg(r,[ub(i,"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,cn.none())])}function vb(e){return jg(Xr(e.firestore,Go),[new sc(e._key,cn.none())])}function jg(e,t){const n=Dg(e);return tb(n,t)}function Tb(e,t,n){const r=n.docs.get(t._key),s=new gb(e);return new mr(e,s,t._key,r,new Ds(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){QT(MT),Yn(new Cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Go(new XT(r.getProvider("auth-internal")),new ew(a,r.getProvider("app-check-internal")),Ew(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),an(Af,bf,t),an(Af,bf,"esm2020")})();const $g="@firebase/installations",Sc="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=1e4,zg=`w:${Sc}`,Hg="FIS_v2",wb="https://firebaseinstallations.googleapis.com/v1",Ib=60*60*1e3,Ab="installations",bb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Tr=new No(Ab,bb,Sb);function Kg(e){return e instanceof br&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg({projectId:e}){return`${wb}/projects/${e}/installations`}function Wg(e){return{token:e.token,requestStatus:2,expiresIn:Cb(e.expiresIn),creationTime:Date.now()}}async function Qg(e,t){const r=(await t.json()).error;return Tr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yg({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Rb(e,{refreshToken:t}){const n=Yg(e);return n.append("Authorization",Pb(t)),n}async function Jg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Cb(e){return Number(e.replace("s","000"))}function Pb(e){return`${Hg} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Gg(e),s=Yg(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:Hg,appId:e.appId,sdkVersion:zg},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Jg(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Wg(h.authToken)}}else throw await Qg("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=/^[cdef][\w-]{21}$/,wl="";function kb(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Ob(e);return Nb.test(n)?n:wl}catch{return wl}}function Ob(e){return Db(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Map;function tm(e,t){const n=Wo(e);em(n,t),xb(n,t)}function em(e,t){const n=Zg.get(e);if(n)for(const r of n)r(t)}function xb(e,t){const n=Mb();n&&n.postMessage({key:e,fid:t}),Lb()}let pr=null;function Mb(){return!pr&&"BroadcastChannel"in self&&(pr=new BroadcastChannel("[Firebase] FID Change"),pr.onmessage=e=>{em(e.data.key,e.data.fid)}),pr}function Lb(){Zg.size===0&&pr&&(pr.close(),pr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="firebase-installations-database",Ub=1,wr="firebase-installations-store";let Oa=null;function Rc(){return Oa||(Oa=ko(Fb,Ub,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wr)}}})),Oa}async function Eo(e,t){const n=Wo(e),s=(await Rc()).transaction(wr,"readwrite"),i=s.objectStore(wr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&tm(e,t.fid),t}async function nm(e){const t=Wo(e),r=(await Rc()).transaction(wr,"readwrite");await r.objectStore(wr).delete(t),await r.done}async function Qo(e,t){const n=Wo(e),s=(await Rc()).transaction(wr,"readwrite"),i=s.objectStore(wr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&tm(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(e){let t;const n=await Qo(e.appConfig,r=>{const s=Bb(r),i=jb(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===wl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Bb(e){const t=e||{fid:kb(),registrationStatus:0};return rm(t)}function jb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Tr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=$b(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:qb(e)}:{installationEntry:t}}async function $b(e,t){try{const n=await Vb(e,t);return Eo(e.appConfig,n)}catch(n){throw Kg(n)&&n.customData.serverCode===409?await nm(e.appConfig):await Eo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function qb(e){let t=await Sf(e.appConfig);for(;t.registrationStatus===1;)await Xg(100),t=await Sf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Cc(e);return r||n}return t}function Sf(e){return Qo(e,t=>{if(!t)throw Tr.create("installation-not-found");return rm(t)})}function rm(e){return zb(e)?{fid:e.fid,registrationStatus:0}:e}function zb(e){return e.registrationStatus===1&&e.registrationTime+qg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb({appConfig:e,heartbeatServiceProvider:t},n){const r=Kb(e,n),s=Rb(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:zg,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Jg(()=>fetch(r,l));if(c.ok){const h=await c.json();return Wg(h)}else throw await Qg("Generate Auth Token",c)}function Kb(e,{fid:t}){return`${Gg(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(e,t=!1){let n;const r=await Qo(e.appConfig,i=>{if(!sm(i))throw Tr.create("not-registered");const a=i.authToken;if(!t&&Qb(a))return i;if(a.requestStatus===1)return n=Gb(e,t),i;{if(!navigator.onLine)throw Tr.create("app-offline");const l=Jb(i);return n=Wb(e,l),l}});return n?await n:r.authToken}async function Gb(e,t){let n=await Rf(e.appConfig);for(;n.authToken.requestStatus===1;)await Xg(100),n=await Rf(e.appConfig);const r=n.authToken;return r.requestStatus===0?Pc(e,t):r}function Rf(e){return Qo(e,t=>{if(!sm(t))throw Tr.create("not-registered");const n=t.authToken;return Xb(n)?{...t,authToken:{requestStatus:0}}:t})}async function Wb(e,t){try{const n=await Hb(e,t),r={...t,authToken:n};return await Eo(e.appConfig,r),n}catch(n){if(Kg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nm(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await Eo(e.appConfig,r)}throw n}}function sm(e){return e!==void 0&&e.registrationStatus===2}function Qb(e){return e.requestStatus===2&&!Yb(e)}function Yb(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ib}function Jb(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Xb(e){return e.requestStatus===1&&e.requestTime+qg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(e){const t=e,{installationEntry:n,registrationPromise:r}=await Cc(t);return r?r.catch(console.error):Pc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(e,t=!1){const n=e;return await eS(n),(await Pc(n,t)).token}async function eS(e){const{registrationPromise:t}=await Cc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(e){if(!e||!e.options)throw xa("App Configuration");if(!e.name)throw xa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw xa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function xa(e){return Tr.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="installations",rS="installations-internal",sS=e=>{const t=e.getProvider("app").getImmediate(),n=nS(t),r=Oo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},iS=e=>{const t=e.getProvider("app").getImmediate(),n=Oo(t,im).getImmediate();return{getId:()=>Zb(n),getToken:s=>tS(n,s)}};function oS(){Yn(new Cn(im,sS,"PUBLIC")),Yn(new Cn(rS,iS,"PRIVATE"))}oS();an($g,Sc);an($g,Sc,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="/firebase-messaging-sw.js",lS="/firebase-cloud-messaging-push-scope",om="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",cS="https://fcmregistrations.googleapis.com/v1",am="google.c.a.c_id",uS="google.c.a.c_l",hS="google.c.a.ts",fS="google.c.a.e",Cf=1e4;var Pf;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Pf||(Pf={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var li;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(li||(li={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function dS(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="fcm_token_details_db",pS=5,Vf="fcm_token_object_Store";async function gS(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Ma))return null;let t=null;return(await ko(Ma,pS,{upgrade:async(r,s,i,a)=>{if(s<2||!r.objectStoreNames.contains(Vf))return;const l=a.objectStore(Vf),c=await l.index("fcmSenderId").get(e);if(await l.clear(),!!c){if(s===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;t={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:En(h.vapidKey)}}}else if(s===3){const h=c;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:En(h.auth),p256dh:En(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:En(h.vapidKey)}}}else if(s===4){const h=c;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:En(h.auth),p256dh:En(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:En(h.vapidKey)}}}}}})).close(),await Sa(Ma),await Sa("fcm_vapid_details_db"),await Sa("undefined"),mS(t)?t:null}function mS(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="firebase-messaging-database",yS=1,Ir="firebase-messaging-store";let La=null;function Vc(){return La||(La=ko(_S,yS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ir)}}})),La}async function lm(e){const t=Nc(e),r=await(await Vc()).transaction(Ir).objectStore(Ir).get(t);if(r)return r;{const s=await gS(e.appConfig.senderId);if(s)return await Dc(e,s),s}}async function Dc(e,t){const n=Nc(e),s=(await Vc()).transaction(Ir,"readwrite");return await s.objectStore(Ir).put(t,n),await s.done,t}async function ES(e){const t=Nc(e),r=(await Vc()).transaction(Ir,"readwrite");await r.objectStore(Ir).delete(t),await r.done}function Nc({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ee=new No("messaging","Messaging",vS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(e,t){const n=await Oc(e),r=um(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(kc(e.appConfig),s)).json()}catch(a){throw Ee.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw Ee.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw Ee.create("token-subscribe-no-token");return i.token}async function wS(e,t){const n=await Oc(e),r=um(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${kc(e.appConfig)}/${t.token}`,s)).json()}catch(a){throw Ee.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw Ee.create("token-update-failed",{errorInfo:a})}if(!i.token)throw Ee.create("token-update-no-token");return i.token}async function cm(e,t){const r={method:"DELETE",headers:await Oc(e)};try{const i=await(await fetch(`${kc(e.appConfig)}/${t}`,r)).json();if(i.error){const a=i.error.message;throw Ee.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw Ee.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function kc({projectId:e}){return`${cS}/projects/${e}/registrations`}async function Oc({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function um({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==om&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=7*24*60*60*1e3;async function AS(e){const t=await RS(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:En(t.getKey("auth")),p256dh:En(t.getKey("p256dh"))},r=await lm(e.firebaseDependencies);if(r){if(CS(r.subscriptionOptions,n))return Date.now()>=r.createTime+IS?SS(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await cm(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Df(e.firebaseDependencies,n)}else return Df(e.firebaseDependencies,n)}async function bS(e){const t=await lm(e.firebaseDependencies);t&&(await cm(e.firebaseDependencies,t.token),await ES(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function SS(e,t){try{const n=await wS(e.firebaseDependencies,t),r={...t,token:n,createTime:Date.now()};return await Dc(e.firebaseDependencies,r),n}catch(n){throw n}}async function Df(e,t){const r={token:await TS(e,t),createTime:Date.now(),subscriptionOptions:t};return await Dc(e,r),r.token}async function RS(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:dS(t)})}function CS(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return PS(t,e),VS(t,e),DS(t,e),t}function PS(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const i=t.notification.icon;i&&(e.notification.icon=i)}function VS(e,t){t.data&&(e.data=t.data)}function DS(e,t){var s,i,a,l;if(!t.fcmOptions&&!((s=t.notification)!=null&&s.click_action))return;e.fcmOptions={};const n=((i=t.fcmOptions)==null?void 0:i.link)??((a=t.notification)==null?void 0:a.click_action);n&&(e.fcmOptions.link=n);const r=(l=t.fcmOptions)==null?void 0:l.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(e){return typeof e=="object"&&!!e&&am in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(e){if(!e||!e.options)throw Fa("App Configuration Object");if(!e.name)throw Fa("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Fa(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Fa(e){return Ee.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=kS(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(e){try{e.swRegistration=await navigator.serviceWorker.register(aS,{scope:lS}),e.swRegistration.update().catch(()=>{}),await xS(e.swRegistration)}catch(t){throw Ee.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function xS(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Cf} ms`)),Cf),s=e.installing||e.waiting;e.active?(clearTimeout(r),t()):s?s.onstatechange=i=>{var a;((a=i.target)==null?void 0:a.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(e,t){if(!t&&!e.swRegistration&&await hm(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw Ee.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=om)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(e,t){if(!navigator)throw Ee.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ee.create("permission-blocked");return await LS(e,t==null?void 0:t.vapidKey),await MS(e,t==null?void 0:t.serviceWorkerRegistration),AS(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(e,t,n){const r=US(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[am],message_name:n[uS],message_time:n[hS],message_device_time:Math.floor(Date.now()/1e3)})}function US(e){switch(e){case li.NOTIFICATION_CLICKED:return"notification_open";case li.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===li.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Nf(n)):e.onMessageHandler.next(Nf(n)));const r=n.data;NS(r)&&r[fS]==="1"&&await FS(e,n.messageType,r)}const kf="@firebase/messaging",Of="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=e=>{const t=new OS(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>BS(t,n)),t},$S=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>fm(t,r)}};function qS(){Yn(new Cn("messaging",jS,"PUBLIC")),Yn(new Cn("messaging-internal",$S,"PRIVATE")),an(kf,Of),an(kf,Of,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(){try{await ip()}catch{return!1}return typeof window<"u"&&sp()&&kv()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(e){if(!navigator)throw Ee.create("only-available-in-window");return e.swRegistration||await hm(e),bS(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(e=hp()){return zS().then(t=>{if(!t)throw Ee.create("unsupported-browser")},t=>{throw Ee.create("indexed-db-unsupported")}),Oo(_r(e),"messaging").getImmediate()}async function KS(e,t){return e=_r(e),fm(e,t)}function GS(e){return e=_r(e),HS(e)}qS();const xc=up({apiKey:"AIzaSyD_O5AAH6ESu1Lls8I9q8parzCEIuWCKts",authDomain:"partita-domani-a-roma.firebaseapp.com",projectId:"partita-domani-a-roma",storageBucket:"partita-domani-a-roma.firebasestorage.app",messagingSenderId:"31480853662",appId:"1:31480853662:web:71c40bb1c92ec7ee2e778f"}),Mc=sb(xc);function vo(){return"Notification"in window&&"serviceWorker"in navigator}async function pm(){var e;if(!((e=navigator.storage)!=null&&e.persist))return!1;try{return await navigator.storage.persist()}catch{return!1}}async function Lc(){const e=await navigator.serviceWorker.ready,t=dm(xc);return KS(t,{vapidKey:"BL50BULN2vVjPWV50HRQel8YKvda3ElC92lKEbjxjwNll2RCIJ2_m2guRIZYaeDHcBP_-NGzrDFk6uClm3cC2pk",serviceWorkerRegistration:e})}async function WS(){if(!vo())return"unsupported";if(await Notification.requestPermission()!=="granted")return"denied";await pm();const t=await Lc();return t?(await Bg(Ic(Mc,"subscriptions",t),{token:t,createdAt:new Date().toISOString()}),localStorage.removeItem("notifUnsubscribed"),"granted"):"error"}async function QS(){const e=dm(xc);try{const t=await Lc();t&&await vb(Ic(Mc,"subscriptions",t))}catch{}await GS(e),localStorage.setItem("notifUnsubscribed","true")}async function YS(){if(!vo())return"unsupported";if(Notification.permission==="denied")return"denied";if(Notification.permission!=="granted")return"idle";try{const e=await Lc();if(!e)return"idle";const t=Ic(Mc,"subscriptions",e);return(await Eb(t)).exists()?"subscribed":localStorage.getItem("notifUnsubscribed")==="true"?"idle":(await Bg(t,{token:e,createdAt:new Date().toISOString()}),"subscribed")}catch{return null}}const JS=["aria-label","aria-expanded"],XS={key:0,class:"notify-wrap"},ZS=["aria-label"],tR={key:0,width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},eR={key:1,width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},nR={key:0,class:"notify-label"},rR={class:"center","aria-live":"polite","aria-atomic":"true"},sR={key:0,class:"next-match"},iR={key:1},oR={class:"orario"},Ua=80,Ui={__name:"HomeView",props:{dayOffset:{type:Number,default:1},testMode:{type:String,default:null}},setup(e){const t=e,n=je("appState"),r=In(null),s=In(null),i=In(""),a=t.dayOffset===0?"oggi":"domani",l=vo(),c=In(null),h=["#8C1A2E","#fcff00","#88D8F1","#ffffff"],d=[[0,-95,1],[28,-90,-1],[55,-78,1],[75,-55,-1],[90,-20,1],[88,20,-1],[75,52,1],[52,76,-1],[20,92,1],[-20,90,-1],[-52,74,1],[-76,50,-1],[-92,8,1],[-88,-20,-1],[-75,-52,1],[-52,-78,-1],[-18,-93,1],[22,-90,-1],[50,-76,1],[76,-50,-1],[93,-5,1],[82,38,-1],[55,72,1],[25,91,-1]],p=[[10,5],[6,6],[14,5],[5,5],[9,4],[7,7],[12,4],[4,8],[8,4],[13,5],[6,6],[10,4],[7,7],[9,3],[5,5],[11,4],[9,9],[6,3],[13,5],[4,4],[11,4],[7,3],[8,8],[5,10]];function m(){if(!c.value||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const{left:nt,top:X,width:dt,height:jt}=c.value.getBoundingClientRect(),Se=nt+dt/2,Wt=X+jt/2;d.forEach(([zt,Me,Re],Ce)=>{const[Qt,N]=p[Ce],W=document.createElement("div");Object.assign(W.style,{position:"fixed",zIndex:"9999",pointerEvents:"none",left:Se-Qt/2+"px",top:Wt-N/2+"px",width:Qt+"px",height:N+"px",background:h[Ce%h.length],borderRadius:"2px"}),document.body.appendChild(W),W.animate([{transform:"translate(0,0) rotate(0deg) scale(0.5)",opacity:1,offset:0},{transform:`translate(${zt*.18}px,${Me*.18}px) rotate(${Re*80}deg) scale(1.5)`,opacity:1,offset:.12},{transform:`translate(${zt}px,${Me}px) rotate(${Re*540}deg) scale(0.1)`,opacity:0,offset:1}],{duration:1500,easing:"ease-out",fill:"forwards"}).onfinish=()=>W.remove()})}const y=In(vo()?Notification.permission==="denied"?"denied":Notification.permission==="granted"&&localStorage.getItem("notifUnsubscribed")!=="true"?"subscribed":"idle":"unsupported");let D=!1;async function V(){const nt=await YS();nt===null||D||(y.value=nt)}async function L(){D=!0,n.loaded=!1;let nt=!1;try{const X=await WS();y.value=X==="granted"?"subscribed":X,X==="granted"&&(nt=!0),Le("notify_subscribe",{result:X})}catch{y.value="idle"}finally{n.loaded=!0,nt&&(await xl(),setTimeout(m,300))}}async function H(){D=!0,n.loaded=!1;try{await QS(),y.value="idle",Le("notify_unsubscribe")}catch{y.value="subscribed"}finally{n.loaded=!0}}function j(){alert(`Le notifiche di questo sito sono bloccate dal browser.

Per riattivarle:
• Tocca l'icona del lucchetto nella barra degli indirizzi
• Vai su "Notifiche" e abilitale
• Ricarica la pagina`)}function z(){return y.value==="denied"?j():y.value==="subscribed"?H():L()}function Q(nt){return new Date(nt+"T12:00:00").toLocaleDateString("it-IT",{weekday:"long",day:"numeric",month:"long"})}function at(nt){return nt.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Rome"})}function gt(nt){const X=Math.floor(Math.random()*10)+1,jt=`/partita-domani-a-roma/images/${nt?"si":"no"}-sfondo${X}.jpg`;return i.value=jt,new Promise(Se=>{const Wt=new Image;Wt.onload=Wt.onerror=Se,Wt.src=jt})}async function I(){n.loaded=!1;try{if(t.testMode==="si")r.value={timestamp:new Date,homeTeam:{name:"roma",article:"la"},awayTeamName:"Test FC"};else if(t.testMode!=="no"){const nt=new Date;nt.setDate(nt.getDate()+t.dayOffset),r.value=await yh(nt)}if(!r.value&&t.testMode==null)if(t.dayOffset===0){const nt=new Date;nt.setDate(nt.getDate()+1),await yh(nt)||(s.value=await Eh())}else s.value=await Eh();await gt(!!r.value),Le("result_viewed",{result:r.value?"si":"no",day:a})}finally{n.loaded=!0}}const E=!!navigator.share;async function w(){const nt=r.value?`C'è la partita ${a} a Roma! Gioca ${r.value.homeTeam.article} ${r.value.homeTeam.name} alle ${at(r.value.timestamp)}.`:`Non c'è la partita ${a} a Roma.`;Le("share_tapped");try{await navigator.share({title:"C'è la partita a Roma?",text:nt,url:window.location.href}),Le("share_completed")}catch{}}let b=0,A=0,S=!1;function v(nt){n.menuOpen||(b=nt.touches[0].clientY)}function Mt(nt){if(nt.preventDefault(),n.menuOpen)return;const X=nt.touches[0].clientY-b;X>0&&(A=Math.min(X,Ua*1.5),!S&&A>=Ua?(S=!0,n.loaded=!1):S&&A<Ua&&(S=!1,n.loaded=!0))}async function he(){const nt=S;A=0,S=!1,nt?(Le("pull_to_refresh"),await I()):n.loaded=!0}return di(()=>{I(),V(),pm()}),(nt,X)=>{const dt=pi("RouterLink");return oe(),Ie(Oe,null,[lt("button",{class:"menu","aria-label":Ut(n).menuOpen?"Chiudi menu":"Apri menu","aria-expanded":Ut(n).menuOpen.toString(),"aria-controls":"main-menu",onClick:X[0]||(X[0]=jt=>{Ut(n).menuOpen=!Ut(n).menuOpen,Ut(Le)("menu_opened")})},null,8,JS),Ut(l)&&y.value!=="unsupported"?(oe(),Ie("div",XS,[lt("button",{ref_key:"bellBtnRef",ref:c,class:"notify-btn","aria-label":y.value==="subscribed"?"Disattiva notifiche":y.value==="denied"?"Notifiche bloccate dal browser, clicca per istruzioni":"Attiva notifiche",onClick:z},[y.value!=="subscribed"?(oe(),Ie("svg",tR,[...X[2]||(X[2]=[lt("path",{d:"M11 3C8.79086 3 7 4.79086 7 7V9.2C7 10.1 6.7 10.97 6.15 11.65L5.2 12.8C4.64 13.48 5.12 14.5 6 14.5H16C16.88 14.5 17.36 13.48 16.8 12.8L15.85 11.65C15.3 10.97 15 10.1 15 9.2V7C15 4.79086 13.2091 3 11 3Z",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),lt("path",{d:"M9 17C9.4 17.6 10.1 18 11 18C11.9 18 12.6 17.6 13 17",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),lt("path",{d:"M5 5L17 17",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):(oe(),Ie("svg",eR,[...X[3]||(X[3]=[lt("path",{d:"M11 3C8.79086 3 7 4.79086 7 7V9.2C7 10.1 6.7 10.97 6.15 11.65L5.2 12.8C4.64 13.48 5.12 14.5 6 14.5H16C16.88 14.5 17.36 13.48 16.8 12.8L15.85 11.65C15.3 10.97 15 10.1 15 9.2V7C15 4.79086 13.2091 3 11 3Z",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),lt("path",{d:"M9 17C9.4 17.6 10.1 18 11 18C11.9 18 12.6 17.6 13 17",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))],8,ZS),y.value!=="subscribed"?(oe(),Ie("span",nR,qe(y.value==="denied"?"notifiche bloccate":"attiva le notifiche"),1)):vn("",!0)])):vn("",!0),E?(oe(),Ie("button",{key:1,class:"share-btn",onClick:w,"aria-label":"Condividi questa pagina"},[...X[4]||(X[4]=[lt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",focusable:"false"},[lt("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),lt("polyline",{points:"16 6 12 2 8 6"}),lt("line",{x1:"12",y1:"2",x2:"12",y2:"15"})],-1)])])):vn("",!0),lt("main",{class:zn(["cont-inner",{menu_opened:Ut(n).menuOpen}]),style:So({backgroundImage:`url(${i.value})`}),onTouchstartPassive:v,onTouchmove:rE(Mt,["prevent"]),onTouchendPassive:he},[lt("div",rR,[lt("h1",null,[X[5]||(X[5]=Fe("C'è la partita",-1)),X[6]||(X[6]=lt("br",null,null,-1)),Fe(qe(Ut(a))+" a Roma?",1)]),lt("h2",null,qe(r.value?"SI":"No"),1),!r.value&&s.value?(oe(),Ie("p",sR,[X[7]||(X[7]=lt("b",null,"Prossima partita:",-1)),Fe(" "+qe(Q(s.value.date))+" · ",1),lt("span",{class:zn(s.value.homeTeam.name)},qe(s.value.homeTeam.name),3),s.value.timestamp?(oe(),Ie(Oe,{key:0},[Fe(" · ore "+qe(at(s.value.timestamp)),1)],64)):vn("",!0)])):vn("",!0),r.value?(oe(),Ie("h3",iR,[Fe(" Gioca "+qe(r.value.homeTeam.article)+" ",1),lt("span",{class:zn(r.value.homeTeam.name)},qe(r.value.homeTeam.name),3),X[8]||(X[8]=lt("br",null,null,-1)),X[9]||(X[9]=Fe(" alle ",-1)),lt("span",oR,qe(at(r.value.timestamp)),1)])):vn("",!0)]),Kt(dt,{class:"switch",to:Ut(a)==="domani"?"/oggi":"/","aria-label":Ut(a)==="domani"?"Controlla se c'è la partita oggi":"Controlla se c'è la partita domani",onClick:X[1]||(X[1]=jt=>Ut(Le)("switch_day",{to:Ut(a)==="domani"?"oggi":"domani"}))},{default:fi(()=>[Fe(qe(Ut(a)==="domani"?"e oggi?":"e domani?"),1)]),_:1},8,["to","aria-label"])],38)],64)}}},aR={class:"policy-bar"},lR={__name:"CookiePolicy",setup(e){const t=je("appState");di(()=>{t.loaded=!0});function n(){localStorage.removeItem("cookiesChoice"),Le("consent_reset"),window.location.reload()}return(r,s)=>{const i=pi("RouterLink");return oe(),Ie(Oe,null,[lt("div",{class:"policy-page"},[lt("div",{class:"policy-content"},[s[0]||(s[0]=eo('<h1>Cookie Policy</h1><p> Informativa estesa ai sensi del Reg. UE 2016/679 (GDPR), del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018, e delle Linee guida del Garante per la protezione dei dati personali del 10 giugno 2021 in materia di cookie e altri strumenti di tracciamento. </p><h1>Titolare del trattamento</h1><p> Valerio Pierbattista<br> Email: <a href="mailto:omegaiori@gmail.com">omegaiori@gmail.com</a><br> Sito: <strong>vlrprbttst.github.io/partita-domani-a-roma</strong></p><h1>Cosa sono i cookie</h1><p> I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell&#39;utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Strumenti analoghi (come il localStorage) operano in modo simile e sono coperti dalla presente informativa. </p><h1>Cookie e strumenti utilizzati</h1><h1>1. Strumenti tecnici (senza consenso)</h1><p> Il sito utilizza il <strong>localStorage</strong> del browser per memorizzare la preferenza dell&#39;utente in merito ai cookie analitici. Non si tratta di un cookie ma di un dato locale al dispositivo, non trasmesso a terzi, che persiste fino alla cancellazione manuale. </p><ul><li><p><strong>cookiesChoice</strong> — localStorage — Scopo: memorizzare la scelta accetta/rifiuta cookie analitici — Durata: persistente fino a cancellazione manuale — Terze parti: nessuna </p></li><li><p><strong>notifUnsubscribed</strong> — localStorage — Scopo: ricordare la scelta dell&#39;utente di NON ricevere notifiche, per evitare la riattivazione automatica al caricamento della pagina; lo stato effettivo dell&#39;iscrizione è memorizzato su Firebase Firestore — Durata: persistente fino alla riattivazione delle notifiche o alla cancellazione manuale — Terze parti: nessuna </p></li></ul><h1>2. Cookie analitici (solo con consenso)</h1><p> Previa accettazione da parte dell&#39;utente, il sito utilizza <strong>Google Analytics 4</strong> (Google LLC, USA) per raccogliere dati statistici anonimi sull&#39;utilizzo del sito. Google Analytics opera in modalità <em>Consent Mode v2</em>: in assenza di consenso, nessun cookie di profilazione viene impostato e nessun dato personale viene trasmesso. </p><ul><li><p><strong>_ga</strong> — Cookie — Scopo: distinguere gli utenti unici — Durata: 2 anni — Titolare: Google LLC </p></li><li><p><strong>_ga_T02RCCNKG9</strong> — Cookie — Scopo: mantenere lo stato della sessione Analytics — Durata: 2 anni — Titolare: Google LLC </p></li></ul><p> I dati raccolti da Google Analytics includono: tipo di dispositivo e browser, paese di accesso, pagine visitate, durata della visita. Nessun dato personale identificativo (nome, email, IP completo) viene raccolto o trasmesso. Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a> e <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">opt-out da Google Analytics</a>. </p><h1>3. Notifiche push (solo su consenso esplicito)</h1><p> Se l&#39;utente sceglie di attivare le notifiche push tramite l&#39;apposito bottone, il sito utilizza <strong>Firebase Cloud Messaging</strong> (Google LLC, USA) per inviare notifiche il giorno prima di una partita a Roma. L&#39;attivazione richiede il consenso esplicito del browser e può essere revocata in qualsiasi momento tramite l&#39;icona campanella presente nell&#39;app. </p><ul><li><p><strong>Token FCM</strong> — Identificativo anonimo generato dal browser — Scopo: recapitare le notifiche push — Conservato su: Firebase Firestore (Google LLC, USA) — Durata: fino alla disattivazione da parte dell&#39;utente — Terze parti: Google LLC </p></li></ul><p> Il token FCM non contiene dati personali identificativi (nome, email, IP). Viene eliminato da Firestore non appena l&#39;utente disattiva le notifiche. Per maggiori informazioni: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Privacy e sicurezza in Firebase</a>. </p><h1>Cookie di terze parti</h1><p> Questo sito <strong>non utilizza</strong> cookie di social network (Facebook, Instagram, X/Twitter, TikTok), cookie pubblicitari né cookie di profilazione di alcun tipo. </p><h1>Gestione del consenso</h1><p> Al primo accesso viene mostrato un banner che consente di accettare o rifiutare i cookie analitici. La scelta può essere modificata in qualsiasi momento tramite il bottone qui sotto. </p>',22)),lt("button",{class:"reset-btn",onClick:n},"Modifica preferenze cookie"),s[1]||(s[1]=eo('<h1>Gestione tramite browser</h1><p> È possibile bloccare, cancellare o limitare i cookie direttamente dalle impostazioni del proprio browser. Le istruzioni variano a seconda del browser utilizzato: </p><ul><li><p><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></p></li><li><p><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></p></li><li><p><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></p></li><li><p><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></p></li></ul><p> Per informazioni generali sulla gestione dei cookie: <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>. </p><h1>Modifiche alla presente informativa</h1><p> Il Titolare si riserva di modificare la presente Cookie Policy in qualsiasi momento. Le modifiche hanno efficacia dal momento della pubblicazione sul sito. <br><strong>Ultimo aggiornamento: maggio 2026</strong></p>',6))])]),lt("div",aR,[Kt(i,{class:"back-btn",to:"/"},{default:fi(()=>[...s[2]||(s[2]=[Fe("← Torna alla home",-1)])]),_:1})])],64)}}},cR=pv({history:KE("/partita-domani-a-roma/"),routes:[{path:"/",component:Ui,props:{dayOffset:1}},{path:"/oggi",component:Ui,props:{dayOffset:0}},{path:"/si",component:Ui,props:{testMode:"si"}},{path:"/no",component:Ui,props:{testMode:"no"}},{path:"/cookie-policy",component:lR},{path:"/:pathMatch(.*)*",redirect:"/"}]}),uR=["aria-hidden"],hR={__name:"MenuPanel",props:{open:Boolean},emits:["toggle"],setup(e){return(t,n)=>{const r=pi("RouterLink");return oe(),Ie("nav",{id:"main-menu",class:zn(["menu-cont",{menu_opened:e.open}]),"aria-label":"Menu principale","aria-hidden":(!e.open).toString()},[n[2]||(n[2]=lt("div",{class:"stripes-top"},null,-1)),lt("button",{class:"close",onClick:n[0]||(n[0]=s=>t.$emit("toggle")),"aria-label":"Chiudi menu"}),n[3]||(n[3]=eo("<h1>Perché?</h1><p> Questo servizio è dedicato a tutti i romani che non seguono il calcio, ma ne sono vittima ogni settimana: <b>traffico</b>, aree di parcheggio <b>transennate</b>, strade <b>chiuse con conseguente deviazione del traffico</b>. </p><p> Chi non segue il calcio spesso <b>scopre troppo tardi</b> lo svolgersi di una partita, e si trova a fronteggiare i disagi del caso <b>senza potersi organizzare in anticipo</b>. </p><h1>Installalo come app</h1><p> Puoi aggiungere questo sito alla schermata Home del tuo telefono e usarlo come una vera app, senza barre del browser. </p><p><b>Su Android</b>: apri il sito in Chrome, tocca i tre puntini in alto a destra e seleziona <b>Aggiungi a schermata Home</b> oppure <b>Installa app</b>. </p><p><b>Su iPhone</b>: apri il sito in Safari, tocca l&#39;icona di condivisione (il quadrato con la freccia in su) e seleziona <b>Aggiungi a schermata Home</b>. </p><h1>Privacy</h1>",8)),lt("p",null,[Kt(r,{to:"/cookie-policy"},{default:fi(()=>[...n[1]||(n[1]=[Fe("Cookie Policy",-1)])]),_:1})]),n[4]||(n[4]=eo('<h1>Credits</h1><ul><li><p> Ideato e realizzato da <a href="https://www.linkedin.com/in/valeriopierbattista/" target="_blank" rel="noopener noreferrer">Valerio Pierbattista</a> e <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude.ai</a></p></li><li><p>Le immagini di sfondo sono prese da Google</p></li><li><p> Il repository del progetto è su <a href="https://github.com/vlrprbttst/partita-domani-a-roma/tree/rewrite-modern" target="_blank" rel="noopener noreferrer">Github</a></p></li><li><p> Le informazioni sulle partite sono prese da <a href="https://www.football-data.org" target="_blank" rel="noopener noreferrer">www.football-data.org</a></p></li></ul>',2))],10,uR)}}},fR={key:0,class:"analytics-notice"},dR={__name:"ConsentBanner",setup(e){const t=In(!1);function n(){typeof window.gtag=="function"&&window.gtag("consent","update",{analytics_storage:"granted"})}di(()=>{const i=localStorage.getItem("cookiesChoice");i==="accepted"?n():i||(t.value=!0)});function r(){localStorage.setItem("cookiesChoice","accepted"),t.value=!1,n(),Le("consent_accepted")}function s(){localStorage.setItem("cookiesChoice","refused"),t.value=!1}return(i,a)=>{const l=pi("RouterLink");return t.value?(oe(),Ie("div",fR,[lt("p",null,[a[1]||(a[1]=Fe("Questo sito usa cookie di Google Analytics per statistiche anonime. ",-1)),Kt(l,{to:"/cookie-policy"},{default:fi(()=>[...a[0]||(a[0]=[Fe("Maggiori info",-1)])]),_:1})]),lt("div",{class:"analytics-notice__actions"},[lt("button",{onClick:s,"aria-label":"Rifiuta i cookie analitici"},"Rifiuta"),lt("button",{onClick:r,"aria-label":"Accetta i cookie analitici"},"Accetta")])])):vn("",!0)}}},pR={key:0,class:"overlay",role:"status","aria-live":"polite","aria-label":"Caricamento in corso"},gR={key:0,class:"install-banner",role:"banner","aria-label":"Installa l'app"},mR=["src"],_R={class:"cont",id:"main-content"},yR={__name:"App",setup(e){const t=ui({loaded:!1,menuOpen:!1});xs("appState",t);const n=navigator.userAgent||navigator.vendor||window.opera,r=/iPad|iPhone|iPod/i.test(n)?"isMobile iOS":/Android/i.test(n)?"isMobile android":"",s=gv();Ms(()=>s.path,()=>{t.menuOpen=!1});let i=null;function a(){const m=new Date;m.setDate(m.getDate()+1),m.setHours(0,0,0,0),i=setTimeout(()=>window.location.reload(),m-Date.now())}const l=In(null),c=In(!1),h="/partita-domani-a-roma/";function d(m){m.preventDefault(),l.value=m}async function p(){if(!l.value)return;Le("pwa_install_tapped"),l.value.prompt();const{outcome:m}=await l.value.userChoice;m==="accepted"&&Le("pwa_install_accepted"),l.value=null}return di(()=>{a(),window.addEventListener("beforeinstallprompt",d)}),Fl(()=>{clearTimeout(i),window.removeEventListener("beforeinstallprompt",d)}),(m,y)=>{const D=pi("RouterView");return oe(),Ie(Oe,null,[y[5]||(y[5]=lt("a",{href:"#main-content",class:"skip-link"},"Salta al contenuto",-1)),t.loaded?vn("",!0):(oe(),Ie("div",pR,[...y[2]||(y[2]=[lt("div",{class:"message"},[lt("div",{class:"spin"})],-1)])])),lt("div",{class:zn(["page",[Ut(r),{menu_opened:t.menuOpen}]])},[y[4]||(y[4]=lt("div",{class:"rotate-device"},null,-1)),Kt(hR,{open:t.menuOpen,onToggle:y[0]||(y[0]=V=>t.menuOpen=!t.menuOpen)},null,8,["open"]),Kt(dR),l.value&&!c.value?(oe(),Ie("div",gR,[lt("img",{src:`${Ut(h)}icons/android-chrome-192x192.png`,class:"install-banner__icon",alt:""},null,8,mR),y[3]||(y[3]=lt("div",{class:"install-banner__text","aria-hidden":"true"},[lt("strong",null,"Partita a Roma?"),lt("span",null,"Aggiungi alla schermata home")],-1)),lt("button",{class:"install-banner__btn",onClick:p,"aria-label":"Installa l'app sulla schermata home"},"Installa"),lt("button",{class:"install-banner__close",onClick:y[1]||(y[1]=V=>c.value=!0),"aria-label":"Chiudi il banner di installazione"},"✕")])):vn("",!0),lt("div",_R,[(oe(),Md(D,{key:Ut(s).path}))])],2)],64)}}};oE(yR).use(cR).mount("#app");"serviceWorker"in navigator&&navigator.serviceWorker.register("/partita-domani-a-roma/sw.js");
