(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pl(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Vt={},jr=[],on=()=>{},Uf=()=>!1,wo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Io=e=>e.startsWith("onUpdate:"),ie=Object.assign,Vl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Gm=Object.prototype.hasOwnProperty,bt=(e,t)=>Gm.call(e,t),lt=Array.isArray,$r=e=>ci(e)==="[object Map]",Bf=e=>ci(e)==="[object Set]",Ru=e=>ci(e)==="[object Date]",ut=e=>typeof e=="function",Bt=e=>typeof e=="string",fn=e=>typeof e=="symbol",St=e=>e!==null&&typeof e=="object",jf=e=>(St(e)||ut(e))&&ut(e.then)&&ut(e.catch),$f=Object.prototype.toString,ci=e=>$f.call(e),Wm=e=>ci(e).slice(8,-1),qf=e=>ci(e)==="[object Object]",Dl=e=>Bt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ks=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ao=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qm=/-\w/g,Te=Ao(e=>e.replace(Qm,t=>t.slice(1).toUpperCase())),Ym=/\B([A-Z])/g,Ar=Ao(e=>e.replace(Ym,"-$1").toLowerCase()),bo=Ao(e=>e.charAt(0).toUpperCase()+e.slice(1)),pa=Ao(e=>e?`on${bo(e)}`:""),sn=(e,t)=>!Object.is(e,t),ga=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Hf=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Jm=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Su;const Ro=()=>Su||(Su=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function So(e){if(lt(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Bt(r)?e_(r):So(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Bt(e)||St(e))return e}const Xm=/;(?![^(]*\))/g,Zm=/:([^]+)/,t_=/\/\*[^]*?\*\//g;function e_(e){const t={};return e.replace(t_,"").split(Xm).forEach(n=>{if(n){const r=n.split(Zm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function zn(e){let t="";if(Bt(e))t=e;else if(lt(e))for(let n=0;n<e.length;n++){const r=zn(e[n]);r&&(t+=r+" ")}else if(St(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const n_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",r_=Pl(n_);function zf(e){return!!e||e===""}function s_(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Nl(e[r],t[r]);return n}function Nl(e,t){if(e===t)return!0;let n=Ru(e),r=Ru(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=fn(e),r=fn(t),n||r)return e===t;if(n=lt(e),r=lt(t),n||r)return n&&r?s_(e,t):!1;if(n=St(e),r=St(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Nl(e[a],t[a]))return!1}}return String(e)===String(t)}const Kf=e=>!!(e&&e.__v_isRef===!0),Ze=e=>Bt(e)?e:e==null?"":lt(e)||St(e)&&(e.toString===$f||!ut(e.toString))?Kf(e)?Ze(e.value):JSON.stringify(e,Gf,2):String(e),Gf=(e,t)=>Kf(t)?Gf(e,t.value):$r(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[ma(r,i)+" =>"]=s,n),{})}:Bf(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ma(n))}:fn(t)?ma(t):St(t)&&!lt(t)&&!qf(t)?String(t):t,ma=(e,t="")=>{var n;return fn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ce;class i_{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ce,!t&&ce&&(this.index=(ce.scopes||(ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ce;try{return ce=this,t()}finally{ce=n}}}on(){++this._on===1&&(this.prevScope=ce,ce=this)}off(){if(this._on>0&&--this._on===0){if(ce===this)ce=this.prevScope;else{let t=ce;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function o_(){return ce}let Pt;const _a=new WeakSet;class Wf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ce&&ce.active&&ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_a.has(this)&&(_a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cu(this),Jf(this);const t=Pt,n=He;Pt=this,He=!0;try{return this.fn()}finally{Xf(this),Pt=t,He=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)xl(t);this.deps=this.depsTail=void 0,Cu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ha(this)&&this.run()}get dirty(){return Ha(this)}}let Qf=0,Os,xs;function Yf(e,t=!1){if(e.flags|=8,t){e.next=xs,xs=e;return}e.next=Os,Os=e}function kl(){Qf++}function Ol(){if(--Qf>0)return;if(xs){let t=xs;for(xs=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Os;){let t=Os;for(Os=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Jf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),xl(r),a_(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ha(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Zf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Zf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Gs)||(e.globalVersion=Gs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ha(e))))return;e.flags|=2;const t=e.dep,n=Pt,r=He;Pt=e,He=!0;try{Jf(e);const s=e.fn(e._value);(t.version===0||sn(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Pt=n,He=r,Xf(e),e.flags&=-3}}function xl(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)xl(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function a_(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let He=!0;const td=[];function An(){td.push(He),He=!1}function bn(){const e=td.pop();He=e===void 0?!0:e}function Cu(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Pt;Pt=void 0;try{t()}finally{Pt=n}}}let Gs=0;class l_{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ml{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Pt||!He||Pt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Pt)n=this.activeLink=new l_(Pt,this),Pt.deps?(n.prevDep=Pt.depsTail,Pt.depsTail.nextDep=n,Pt.depsTail=n):Pt.deps=Pt.depsTail=n,ed(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Pt.depsTail,n.nextDep=void 0,Pt.depsTail.nextDep=n,Pt.depsTail=n,Pt.deps===n&&(Pt.deps=r)}return n}trigger(t){this.version++,Gs++,this.notify(t)}notify(t){kl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ol()}}}function ed(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ed(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const za=new WeakMap,_r=Symbol(""),Ka=Symbol(""),Ws=Symbol("");function he(e,t,n){if(He&&Pt){let r=za.get(e);r||za.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ml),s.map=r,s.key=n),s.track()}}function wn(e,t,n,r,s,i){const a=za.get(e);if(!a){Gs++;return}const l=c=>{c&&c.trigger()};if(kl(),t==="clear")a.forEach(l);else{const c=lt(e),h=c&&Dl(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Ws||!fn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Ws)),t){case"add":c?h&&l(a.get("length")):(l(a.get(_r)),$r(e)&&l(a.get(Ka)));break;case"delete":c||(l(a.get(_r)),$r(e)&&l(a.get(Ka)));break;case"set":$r(e)&&l(a.get(_r));break}}Ol()}function Or(e){const t=At(e);return t===e?t:(he(t,"iterate",Ws),ze(e)?t:t.map(Rn))}function Ll(e){return he(e=At(e),"iterate",Ws),e}function nn(e,t){return Yn(e)?Qs(qr(e)?Rn(t):t):Rn(t)}const c_={__proto__:null,[Symbol.iterator](){return ya(this,Symbol.iterator,e=>nn(this,e))},concat(...e){return Or(this).concat(...e.map(t=>lt(t)?Or(t):t))},entries(){return ya(this,"entries",e=>(e[1]=nn(this,e[1]),e))},every(e,t){return mn(this,"every",e,t,void 0,arguments)},filter(e,t){return mn(this,"filter",e,t,n=>n.map(r=>nn(this,r)),arguments)},find(e,t){return mn(this,"find",e,t,n=>nn(this,n),arguments)},findIndex(e,t){return mn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mn(this,"findLast",e,t,n=>nn(this,n),arguments)},findLastIndex(e,t){return mn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ea(this,"includes",e)},indexOf(...e){return Ea(this,"indexOf",e)},join(e){return Or(this).join(e)},lastIndexOf(...e){return Ea(this,"lastIndexOf",e)},map(e,t){return mn(this,"map",e,t,void 0,arguments)},pop(){return As(this,"pop")},push(...e){return As(this,"push",e)},reduce(e,...t){return Pu(this,"reduce",e,t)},reduceRight(e,...t){return Pu(this,"reduceRight",e,t)},shift(){return As(this,"shift")},some(e,t){return mn(this,"some",e,t,void 0,arguments)},splice(...e){return As(this,"splice",e)},toReversed(){return Or(this).toReversed()},toSorted(e){return Or(this).toSorted(e)},toSpliced(...e){return Or(this).toSpliced(...e)},unshift(...e){return As(this,"unshift",e)},values(){return ya(this,"values",e=>nn(this,e))}};function ya(e,t,n){const r=Ll(e),s=r[t]();return r!==e&&!ze(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const u_=Array.prototype;function mn(e,t,n,r,s,i){const a=Ll(e),l=a!==e&&!ze(e),c=a[t];if(c!==u_[t]){const p=c.apply(e,i);return l?Rn(p):p}let h=n;a!==e&&(l?h=function(p,m){return n.call(this,nn(e,p),m,e)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,e)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Pu(e,t,n,r){const s=Ll(e),i=s!==e&&!ze(e);let a=n,l=!1;s!==e&&(i?(l=r.length===0,a=function(h,d,p){return l&&(l=!1,h=nn(e,h)),n.call(this,h,nn(e,d),p,e)}):n.length>3&&(a=function(h,d,p){return n.call(this,h,d,p,e)}));const c=s[t](a,...r);return l?nn(e,c):c}function Ea(e,t,n){const r=At(e);he(r,"iterate",Ws);const s=r[t](...n);return(s===-1||s===!1)&&Bl(n[0])?(n[0]=At(n[0]),r[t](...n)):s}function As(e,t,n=[]){An(),kl();const r=At(e)[t].apply(e,n);return Ol(),bn(),r}const h_=Pl("__proto__,__v_isRef,__isVue"),nd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(fn));function f_(e){fn(e)||(e=String(e));const t=At(this);return he(t,"has",e),t.hasOwnProperty(e)}class rd{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?w_:ad:i?od:id).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=lt(t);if(!s){let c;if(a&&(c=c_[n]))return c;if(n==="hasOwnProperty")return f_}const l=Reflect.get(t,n,pe(t)?t:r);if((fn(n)?nd.has(n):h_(n))||(s||he(t,"get",n),i))return l;if(pe(l)){const c=a&&Dl(n)?l:l.value;return s&&St(c)?Wa(c):c}return St(l)?s?Wa(l):ui(l):l}}class sd extends rd{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const a=lt(t)&&Dl(n);if(!this._isShallow){const h=Yn(i);if(!ze(r)&&!Yn(r)&&(i=At(i),r=At(r)),!a&&pe(i)&&!pe(r))return h||(i.value=r),!0}const l=a?Number(n)<t.length:bt(t,n),c=Reflect.set(t,n,r,pe(t)?t:s);return t===At(s)&&(l?sn(r,i)&&wn(t,"set",n,r):wn(t,"add",n,r)),c}deleteProperty(t,n){const r=bt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&wn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!fn(n)||!nd.has(n))&&he(t,"has",n),r}ownKeys(t){return he(t,"iterate",lt(t)?"length":_r),Reflect.ownKeys(t)}}class d_ extends rd{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const p_=new sd,g_=new d_,m_=new sd(!0);const Ga=e=>e,Ni=e=>Reflect.getPrototypeOf(e);function __(e,t,n){return function(...r){const s=this.__v_raw,i=At(s),a=$r(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=s[e](...r),d=n?Ga:t?Qs:Rn;return!t&&he(i,"iterate",c?Ka:_r),ie(Object.create(h),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}}})}}function ki(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function y_(e,t){const n={get(s){const i=this.__v_raw,a=At(i),l=At(s);e||(sn(s,l)&&he(a,"get",s),he(a,"get",l));const{has:c}=Ni(a),h=t?Ga:e?Qs:Rn;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&he(At(s),"iterate",_r),s.size},has(s){const i=this.__v_raw,a=At(i),l=At(s);return e||(sn(s,l)&&he(a,"has",s),he(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=At(l),h=t?Ga:e?Qs:Rn;return!e&&he(c,"iterate",_r),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ie(n,e?{add:ki("add"),set:ki("set"),delete:ki("delete"),clear:ki("clear")}:{add(s){const i=At(this),a=Ni(i),l=At(s),c=!t&&!ze(s)&&!Yn(s)?l:s;return a.has.call(i,c)||sn(s,c)&&a.has.call(i,s)||sn(l,c)&&a.has.call(i,l)||(i.add(c),wn(i,"add",c,c)),this},set(s,i){!t&&!ze(i)&&!Yn(i)&&(i=At(i));const a=At(this),{has:l,get:c}=Ni(a);let h=l.call(a,s);h||(s=At(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?sn(i,d)&&wn(a,"set",s,i):wn(a,"add",s,i),this},delete(s){const i=At(this),{has:a,get:l}=Ni(i);let c=a.call(i,s);c||(s=At(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&wn(i,"delete",s,void 0),h},clear(){const s=At(this),i=s.size!==0,a=s.clear();return i&&wn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=__(s,e,t)}),n}function Fl(e,t){const n=y_(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(bt(n,s)&&s in r?n:r,s,i)}const E_={get:Fl(!1,!1)},v_={get:Fl(!1,!0)},T_={get:Fl(!0,!1)};const id=new WeakMap,od=new WeakMap,ad=new WeakMap,w_=new WeakMap;function I_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function A_(e){return e.__v_skip||!Object.isExtensible(e)?0:I_(Wm(e))}function ui(e){return Yn(e)?e:Ul(e,!1,p_,E_,id)}function ld(e){return Ul(e,!1,m_,v_,od)}function Wa(e){return Ul(e,!0,g_,T_,ad)}function Ul(e,t,n,r,s){if(!St(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=A_(e);if(i===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function qr(e){return Yn(e)?qr(e.__v_raw):!!(e&&e.__v_isReactive)}function Yn(e){return!!(e&&e.__v_isReadonly)}function ze(e){return!!(e&&e.__v_isShallow)}function Bl(e){return e?!!e.__v_raw:!1}function At(e){const t=e&&e.__v_raw;return t?At(t):e}function b_(e){return!bt(e,"__v_skip")&&Object.isExtensible(e)&&Hf(e,"__v_skip",!0),e}const Rn=e=>St(e)?ui(e):e,Qs=e=>St(e)?Wa(e):e;function pe(e){return e?e.__v_isRef===!0:!1}function qn(e){return cd(e,!1)}function R_(e){return cd(e,!0)}function cd(e,t){return pe(e)?e:new S_(e,t)}class S_{constructor(t,n){this.dep=new Ml,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:At(t),this._value=n?t:Rn(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||ze(t)||Yn(t);t=r?t:At(t),sn(t,n)&&(this._rawValue=t,this._value=r?t:Rn(t),this.dep.trigger())}}function Ot(e){return pe(e)?e.value:e}const C_={get:(e,t,n)=>t==="__v_raw"?e:Ot(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return pe(s)&&!pe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function ud(e){return qr(e)?e:new Proxy(e,C_)}class P_{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ml(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Pt!==this)return Yf(this,!0),!0}get value(){const t=this.dep.track();return Zf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function V_(e,t,n=!1){let r,s;return ut(e)?r=e:(r=e.get,s=e.set),new P_(r,s,n)}const Oi={},Yi=new WeakMap;let fr;function D_(e,t=!1,n=fr){if(n){let r=Yi.get(n);r||Yi.set(n,r=[]),r.push(e)}}function N_(e,t,n=Vt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=W=>s?W:ze(W)||s===!1||s===0?$n(W,1):$n(W);let d,p,m,E,D=!1,V=!1;if(pe(e)?(p=()=>e.value,D=ze(e)):qr(e)?(p=()=>h(e),D=!0):lt(e)?(V=!0,D=e.some(W=>qr(W)||ze(W)),p=()=>e.map(W=>{if(pe(W))return W.value;if(qr(W))return h(W);if(ut(W))return c?c(W,2):W()})):ut(e)?t?p=c?()=>c(e,2):e:p=()=>{if(m){An();try{m()}finally{bn()}}const W=fr;fr=d;try{return c?c(e,3,[E]):e(E)}finally{fr=W}}:p=on,t&&s){const W=p,it=s===!0?1/0:s;p=()=>$n(W(),it)}const F=o_(),z=()=>{d.stop(),F&&F.active&&Vl(F.effects,d)};if(i&&t){const W=t;t=(...it)=>{W(...it),z()}}let B=V?new Array(e.length).fill(Oi):Oi;const q=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(t){const it=d.run();if(s||D||(V?it.some((ft,v)=>sn(ft,B[v])):sn(it,B))){m&&m();const ft=fr;fr=d;try{const v=[it,B===Oi?void 0:V&&B[0]===Oi?[]:B,E];B=it,c?c(t,3,v):t(...v)}finally{fr=ft}}}else d.run()};return l&&l(q),d=new Wf(p),d.scheduler=a?()=>a(q,!1):q,E=W=>D_(W,!1,d),m=d.onStop=()=>{const W=Yi.get(d);if(W){if(c)c(W,4);else for(const it of W)it();Yi.delete(d)}},t?r?q(!0):B=d.run():a?a(q.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function $n(e,t=1/0,n){if(t<=0||!St(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,pe(e))$n(e.value,t,n);else if(lt(e))for(let r=0;r<e.length;r++)$n(e[r],t,n);else if(Bf(e)||$r(e))e.forEach(r=>{$n(r,t,n)});else if(qf(e)){for(const r in e)$n(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&$n(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hi(e,t,n,r){try{return r?e(...r):e()}catch(s){Co(s,t,n)}}function dn(e,t,n,r){if(ut(e)){const s=hi(e,t,n,r);return s&&jf(s)&&s.catch(i=>{Co(i,t,n)}),s}if(lt(e)){const s=[];for(let i=0;i<e.length;i++)s.push(dn(e[i],t,n,r));return s}}function Co(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Vt;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,h)===!1)return}l=l.parent}if(i){An(),hi(i,null,10,[e,c,h]),bn();return}}k_(e,n,s,r,a)}function k_(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const ve=[];let tn=-1;const Hr=[];let Bn=null,xr=0;const hd=Promise.resolve();let Ji=null;function fd(e){const t=Ji||hd;return e?t.then(this?e.bind(this):e):t}function O_(e){let t=tn+1,n=ve.length;for(;t<n;){const r=t+n>>>1,s=ve[r],i=Ys(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function jl(e){if(!(e.flags&1)){const t=Ys(e),n=ve[ve.length-1];!n||!(e.flags&2)&&t>=Ys(n)?ve.push(e):ve.splice(O_(t),0,e),e.flags|=1,dd()}}function dd(){Ji||(Ji=hd.then(gd))}function x_(e){lt(e)?Hr.push(...e):Bn&&e.id===-1?Bn.splice(xr+1,0,e):e.flags&1||(Hr.push(e),e.flags|=1),dd()}function Vu(e,t,n=tn+1){for(;n<ve.length;n++){const r=ve[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ve.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function pd(e){if(Hr.length){const t=[...new Set(Hr)].sort((n,r)=>Ys(n)-Ys(r));if(Hr.length=0,Bn){Bn.push(...t);return}for(Bn=t,xr=0;xr<Bn.length;xr++){const n=Bn[xr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bn=null,xr=0}}const Ys=e=>e.id==null?e.flags&2?-1:1/0:e.id;function gd(e){try{for(tn=0;tn<ve.length;tn++){const t=ve[tn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),hi(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tn<ve.length;tn++){const t=ve[tn];t&&(t.flags&=-2)}tn=-1,ve.length=0,pd(),Ji=null,(ve.length||Hr.length)&&gd()}}let $e=null,md=null;function Xi(e){const t=$e;return $e=e,md=e&&e.type.__scopeId||null,t}function fi(e,t=$e,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&eo(-1);const i=Xi(t);let a;try{a=e(...s)}finally{Xi(i),r._d&&eo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ur(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(An(),dn(c,n,8,[e.el,l,e,t]),bn())}}function Ms(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function Le(e,t,n=!1){const r=xy();if(r||zr){let s=zr?zr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ut(t)?t.call(r&&r.proxy):t}}const M_=Symbol.for("v-scx"),L_=()=>Le(M_);function Ls(e,t,n){return _d(e,t,n)}function _d(e,t,n=Vt){const{immediate:r,deep:s,flush:i,once:a}=n,l=ie({},n),c=t&&r||!t&&i!=="post";let h;if(Xs){if(i==="sync"){const E=L_();h=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=on,E.resume=on,E.pause=on,E}}const d=de;l.call=(E,D,V)=>dn(E,d,D,V);let p=!1;i==="post"?l.scheduler=E=>{Ae(E,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(E,D)=>{D?E():jl(E)}),l.augmentJob=E=>{t&&(E.flags|=4),p&&(E.flags|=2,d&&(E.id=d.uid,E.i=d))};const m=N_(e,t,l);return Xs&&(h?h.push(m):c&&m()),m}function F_(e,t,n){const r=this.proxy,s=Bt(e)?e.includes(".")?yd(r,e):()=>r[e]:e.bind(r,r);let i;ut(t)?i=t:(i=t.handler,n=t);const a=gi(this),l=_d(s,i.bind(r),n);return a(),l}function yd(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const U_=Symbol("_vte"),B_=e=>e.__isTeleport,j_=Symbol("_leaveCb");function $l(e,t){e.shapeFlag&6&&e.component?(e.transition=t,$l(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ed(e,t){return ut(e)?ie({name:e.name},t,{setup:e}):e}function vd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Du(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Zi=new WeakMap;function Fs(e,t,n,r,s=!1){if(lt(e)){e.forEach((V,F)=>Fs(V,t&&(lt(t)?t[F]:t),n,r,s));return}if(Us(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Fs(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Gl(r.component):r.el,a=s?null:i,{i:l,r:c}=e,h=t&&t.r,d=l.refs===Vt?l.refs={}:l.refs,p=l.setupState,m=At(p),E=p===Vt?Uf:V=>Du(d,V)?!1:bt(m,V),D=(V,F)=>!(F&&Du(d,F));if(h!=null&&h!==c){if(Nu(t),Bt(h))d[h]=null,E(h)&&(p[h]=null);else if(pe(h)){const V=t;D(h,V.k)&&(h.value=null),V.k&&(d[V.k]=null)}}if(ut(c))hi(c,l,12,[a,d]);else{const V=Bt(c),F=pe(c);if(V||F){const z=()=>{if(e.f){const B=V?E(c)?p[c]:d[c]:D()||!e.k?c.value:d[e.k];if(s)lt(B)&&Vl(B,i);else if(lt(B))B.includes(i)||B.push(i);else if(V)d[c]=[i],E(c)&&(p[c]=d[c]);else{const q=[i];D(c,e.k)&&(c.value=q),e.k&&(d[e.k]=q)}}else V?(d[c]=a,E(c)&&(p[c]=a)):F&&(D(c,e.k)&&(c.value=a),e.k&&(d[e.k]=a))};if(a){const B=()=>{z(),Zi.delete(e)};B.id=-1,Zi.set(e,B),Ae(B,n)}else Nu(e),z()}}}function Nu(e){const t=Zi.get(e);t&&(t.flags|=8,Zi.delete(e))}Ro().requestIdleCallback;Ro().cancelIdleCallback;const Us=e=>!!e.type.__asyncLoader,Td=e=>e.type.__isKeepAlive;function $_(e,t){wd(e,"a",t)}function q_(e,t){wd(e,"da",t)}function wd(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Po(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Td(s.parent.vnode)&&H_(r,t,n,s),s=s.parent}}function H_(e,t,n,r){const s=Po(t,e,r,!0);ql(()=>{Vl(r[t],s)},n)}function Po(e,t,n=de,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{An();const l=gi(n),c=dn(t,n,e,a);return l(),bn(),c});return r?s.unshift(i):s.push(i),i}}const Nn=e=>(t,n=de)=>{(!Xs||e==="sp")&&Po(e,(...r)=>t(...r),n)},z_=Nn("bm"),di=Nn("m"),K_=Nn("bu"),G_=Nn("u"),W_=Nn("bum"),ql=Nn("um"),Q_=Nn("sp"),Y_=Nn("rtg"),J_=Nn("rtc");function X_(e,t=de){Po("ec",e,t)}const Z_="components";function pi(e,t){return ey(Z_,e,!0,t)||e}const ty=Symbol.for("v-ndc");function ey(e,t,n=!0,r=!1){const s=$e||de;if(s){const i=s.type;{const l=By(i,!1);if(l&&(l===t||l===Te(t)||l===bo(Te(t))))return i}const a=ku(s[e]||i[e],t)||ku(s.appContext[e],t);return!a&&r?i:a}}function ku(e,t){return e&&(e[t]||e[Te(t)]||e[bo(Te(t))])}const Qa=e=>e?qd(e)?Gl(e):Qa(e.parent):null,Bs=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qa(e.parent),$root:e=>Qa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ad(e),$forceUpdate:e=>e.f||(e.f=()=>{jl(e.update)}),$nextTick:e=>e.n||(e.n=fd.bind(e.proxy)),$watch:e=>F_.bind(e)}),va=(e,t)=>e!==Vt&&!e.__isScriptSetup&&bt(e,t),ny={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(va(r,t))return a[t]=1,r[t];if(s!==Vt&&bt(s,t))return a[t]=2,s[t];if(bt(i,t))return a[t]=3,i[t];if(n!==Vt&&bt(n,t))return a[t]=4,n[t];Ya&&(a[t]=0)}}const h=Bs[t];let d,p;if(h)return t==="$attrs"&&he(e.attrs,"get",""),h(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==Vt&&bt(n,t))return a[t]=4,n[t];if(p=c.config.globalProperties,bt(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return va(s,t)?(s[t]=n,!0):r!==Vt&&bt(r,t)?(r[t]=n,!0):bt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(n[l]||e!==Vt&&l[0]!=="$"&&bt(e,l)||va(t,l)||bt(i,l)||bt(r,l)||bt(Bs,l)||bt(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:bt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ou(e){return lt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ya=!0;function ry(e){const t=Ad(e),n=e.proxy,r=e.ctx;Ya=!1,t.beforeCreate&&xu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:E,updated:D,activated:V,deactivated:F,beforeDestroy:z,beforeUnmount:B,destroyed:q,unmounted:W,render:it,renderTracked:ft,renderTriggered:v,errorCaptured:_,serverPrefetch:I,expose:b,inheritAttrs:A,components:R,directives:T,filters:jt}=t;if(h&&sy(h,r,null),a)for(const vt in a){const mt=a[vt];ut(mt)&&(r[vt]=mt.bind(n))}if(s){const vt=s.call(n,n);St(vt)&&(e.data=ui(vt))}if(Ya=!0,i)for(const vt in i){const mt=i[vt],Ie=ut(mt)?mt.bind(n,n):ut(mt.get)?mt.get.bind(n,n):on,Qe=!ut(mt)&&ut(mt.set)?mt.set.bind(n):on,Re=je({get:Ie,set:Qe});Object.defineProperty(r,vt,{enumerable:!0,configurable:!0,get:()=>Re.value,set:ee=>Re.value=ee})}if(l)for(const vt in l)Id(l[vt],r,n,vt);if(c){const vt=ut(c)?c.call(n):c;Reflect.ownKeys(vt).forEach(mt=>{Ms(mt,vt[mt])})}d&&xu(d,e,"c");function $t(vt,mt){lt(mt)?mt.forEach(Ie=>vt(Ie.bind(n))):mt&&vt(mt.bind(n))}if($t(z_,p),$t(di,m),$t(K_,E),$t(G_,D),$t($_,V),$t(q_,F),$t(X_,_),$t(J_,ft),$t(Y_,v),$t(W_,B),$t(ql,W),$t(Q_,I),lt(b))if(b.length){const vt=e.exposed||(e.exposed={});b.forEach(mt=>{Object.defineProperty(vt,mt,{get:()=>n[mt],set:Ie=>n[mt]=Ie,enumerable:!0})})}else e.exposed||(e.exposed={});it&&e.render===on&&(e.render=it),A!=null&&(e.inheritAttrs=A),R&&(e.components=R),T&&(e.directives=T),I&&vd(e)}function sy(e,t,n=on){lt(e)&&(e=Ja(e));for(const r in e){const s=e[r];let i;St(s)?"default"in s?i=Le(s.from||r,s.default,!0):i=Le(s.from||r):i=Le(s),pe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function xu(e,t,n){dn(lt(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Id(e,t,n,r){let s=r.includes(".")?yd(n,r):()=>n[r];if(Bt(e)){const i=t[e];ut(i)&&Ls(s,i)}else if(ut(e))Ls(s,e.bind(n));else if(St(e))if(lt(e))e.forEach(i=>Id(i,t,n,r));else{const i=ut(e.handler)?e.handler.bind(n):t[e.handler];ut(i)&&Ls(s,i,e)}}function Ad(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(h=>to(c,h,a,!0)),to(c,t,a)),St(t)&&i.set(t,c),c}function to(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&to(e,i,n,!0),s&&s.forEach(a=>to(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=iy[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const iy={data:Mu,props:Lu,emits:Lu,methods:Cs,computed:Cs,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Cs,directives:Cs,watch:ay,provide:Mu,inject:oy};function Mu(e,t){return t?e?function(){return ie(ut(e)?e.call(this,this):e,ut(t)?t.call(this,this):t)}:t:e}function oy(e,t){return Cs(Ja(e),Ja(t))}function Ja(e){if(lt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function Cs(e,t){return e?ie(Object.create(null),e,t):t}function Lu(e,t){return e?lt(e)&&lt(t)?[...new Set([...e,...t])]:ie(Object.create(null),Ou(e),Ou(t??{})):t}function ay(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function bd(){return{app:null,config:{isNativeTag:Uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ly=0;function cy(e,t){return function(r,s=null){ut(r)||(r=ie({},r)),s!=null&&!St(s)&&(s=null);const i=bd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:ly++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:$y,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ut(d.install)?(a.add(d),d.install(h,...p)):ut(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const E=h._ceVNode||zt(r,s);return E.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(E,d,m),c=!0,h._container=d,d.__vue_app__=h,Gl(E.component)}},onUnmount(d){l.push(d)},unmount(){c&&(dn(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=zr;zr=h;try{return d()}finally{zr=p}}};return h}}let zr=null;const uy=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Te(t)}Modifiers`]||e[`${Ar(t)}Modifiers`];function hy(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Vt;let s=n;const i=t.startsWith("update:"),a=i&&uy(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Bt(d)?d.trim():d)),a.number&&(s=n.map(Jm)));let l,c=r[l=pa(t)]||r[l=pa(Te(t))];!c&&i&&(c=r[l=pa(Ar(t))]),c&&dn(c,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,dn(h,e,6,s)}}const fy=new WeakMap;function Rd(e,t,n=!1){const r=n?fy:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ut(e)){const c=h=>{const d=Rd(h,t,!0);d&&(l=!0,ie(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(St(e)&&r.set(e,null),null):(lt(i)?i.forEach(c=>a[c]=null):ie(a,i),St(e)&&r.set(e,a),a)}function Vo(e,t){return!e||!wo(t)?!1:(t=t.slice(2).replace(/Once$/,""),bt(e,t[0].toLowerCase()+t.slice(1))||bt(e,Ar(t))||bt(e,t))}function Fu(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:E,ctx:D,inheritAttrs:V}=e,F=Xi(e);let z,B;try{if(n.shapeFlag&4){const W=s||r,it=W;z=rn(h.call(it,W,d,p,E,m,D)),B=l}else{const W=t;z=rn(W.length>1?W(p,{attrs:l,slots:a,emit:c}):W(p,null)),B=t.props?l:dy(l)}}catch(W){js.length=0,Co(W,e,1),z=zt(Jn)}let q=z;if(B&&V!==!1){const W=Object.keys(B),{shapeFlag:it}=q;W.length&&it&7&&(i&&W.some(Io)&&(B=py(B,i)),q=Yr(q,B,!1,!0))}return n.dirs&&(q=Yr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&$l(q,n.transition),z=q,Xi(F),z}const dy=e=>{let t;for(const n in e)(n==="class"||n==="style"||wo(n))&&((t||(t={}))[n]=e[n]);return t},py=(e,t)=>{const n={};for(const r in e)(!Io(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gy(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Uu(r,a,h):!!a;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(Sd(a,r,m)&&!Vo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Uu(r,a,h):!0:!!a;return!1}function Uu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Sd(t,e,i)&&!Vo(n,i))return!0}return!1}function Sd(e,t,n){const r=e[n],s=t[n];return n==="style"&&St(r)&&St(s)?!Nl(r,s):r!==s}function my({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Cd={},Pd=()=>Object.create(Cd),Vd=e=>Object.getPrototypeOf(e)===Cd;function _y(e,t,n,r=!1){const s={},i=Pd();e.propsDefaults=Object.create(null),Dd(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:ld(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function yy(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=At(s),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Vo(e.emitsOptions,m))continue;const E=t[m];if(c)if(bt(i,m))E!==i[m]&&(i[m]=E,h=!0);else{const D=Te(m);s[D]=Xa(c,l,D,E,e,!1)}else E!==i[m]&&(i[m]=E,h=!0)}}}else{Dd(e,t,s,i)&&(h=!0);let d;for(const p in l)(!t||!bt(t,p)&&((d=Ar(p))===p||!bt(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Xa(c,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!bt(t,p))&&(delete i[p],h=!0)}h&&wn(e.attrs,"set","")}function Dd(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(ks(c))continue;const h=t[c];let d;s&&bt(s,d=Te(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Vo(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=At(n),h=l||Vt;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Xa(s,c,p,h[p],e,!bt(h,p))}}return a}function Xa(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=bt(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ut(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=gi(s);r=h[n]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Ar(n))&&(r=!0))}return r}const Ey=new WeakMap;function Nd(e,t,n=!1){const r=n?Ey:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!ut(e)){const d=p=>{c=!0;const[m,E]=Nd(p,t,!0);ie(a,m),E&&l.push(...E)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return St(e)&&r.set(e,jr),jr;if(lt(i))for(let d=0;d<i.length;d++){const p=Te(i[d]);Bu(p)&&(a[p]=Vt)}else if(i)for(const d in i){const p=Te(d);if(Bu(p)){const m=i[d],E=a[p]=lt(m)||ut(m)?{type:m}:ie({},m),D=E.type;let V=!1,F=!0;if(lt(D))for(let z=0;z<D.length;++z){const B=D[z],q=ut(B)&&B.name;if(q==="Boolean"){V=!0;break}else q==="String"&&(F=!1)}else V=ut(D)&&D.name==="Boolean";E[0]=V,E[1]=F,(V||bt(E,"default"))&&l.push(p)}}const h=[a,l];return St(e)&&r.set(e,h),h}function Bu(e){return e[0]!=="$"&&!ks(e)}const Hl=e=>e==="_"||e==="_ctx"||e==="$stable",zl=e=>lt(e)?e.map(rn):[rn(e)],vy=(e,t,n)=>{if(t._n)return t;const r=fi((...s)=>zl(t(...s)),n);return r._c=!1,r},kd=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Hl(s))continue;const i=e[s];if(ut(i))t[s]=vy(s,i,r);else if(i!=null){const a=zl(i);t[s]=()=>a}}},Od=(e,t)=>{const n=zl(t);e.slots.default=()=>n},xd=(e,t,n)=>{for(const r in t)(n||!Hl(r))&&(e[r]=t[r])},Ty=(e,t,n)=>{const r=e.slots=Pd();if(e.vnode.shapeFlag&32){const s=t._;s?(xd(r,t,n),n&&Hf(r,"_",s,!0)):kd(t,r)}else t&&Od(e,t)},wy=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=Vt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:xd(s,t,n):(i=!t.$stable,kd(t,s)),a=t}else t&&(Od(e,t),a={default:1});if(i)for(const l in s)!Hl(l)&&a[l]==null&&delete s[l]},Ae=Sy;function Iy(e){return Ay(e)}function Ay(e,t){const n=Ro();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:E=on,insertStaticContent:D}=e,V=(y,w,S,N=null,L=null,k=null,K=void 0,$=null,j=!!w.dynamicChildren)=>{if(y===w)return;y&&!bs(y,w)&&(N=O(y),ee(y,L,k,!0),y=null),w.patchFlag===-2&&(j=!1,w.dynamicChildren=null);const{type:U,ref:nt,shapeFlag:Q}=w;switch(U){case Do:F(y,w,S,N);break;case Jn:z(y,w,S,N);break;case $i:y==null&&B(w,S,N,K);break;case De:R(y,w,S,N,L,k,K,$,j);break;default:Q&1?it(y,w,S,N,L,k,K,$,j):Q&6?T(y,w,S,N,L,k,K,$,j):(Q&64||Q&128)&&U.process(y,w,S,N,L,k,K,$,j,Z)}nt!=null&&L?Fs(nt,y&&y.ref,k,w||y,!w):nt==null&&y&&y.ref!=null&&Fs(y.ref,null,k,y,!0)},F=(y,w,S,N)=>{if(y==null)r(w.el=l(w.children),S,N);else{const L=w.el=y.el;w.children!==y.children&&h(L,w.children)}},z=(y,w,S,N)=>{y==null?r(w.el=c(w.children||""),S,N):w.el=y.el},B=(y,w,S,N)=>{[y.el,y.anchor]=D(y.children,w,S,N,y.el,y.anchor)},q=({el:y,anchor:w},S,N)=>{let L;for(;y&&y!==w;)L=m(y),r(y,S,N),y=L;r(w,S,N)},W=({el:y,anchor:w})=>{let S;for(;y&&y!==w;)S=m(y),s(y),y=S;s(w)},it=(y,w,S,N,L,k,K,$,j)=>{if(w.type==="svg"?K="svg":w.type==="math"&&(K="mathml"),y==null)ft(w,S,N,L,k,K,$,j);else{const U=y.el&&y.el._isVueCE?y.el:null;try{U&&U._beginPatch(),I(y,w,L,k,K,$,j)}finally{U&&U._endPatch()}}},ft=(y,w,S,N,L,k,K,$)=>{let j,U;const{props:nt,shapeFlag:Q,transition:tt,dirs:rt}=y;if(j=y.el=a(y.type,k,nt&&nt.is,nt),Q&8?d(j,y.children):Q&16&&_(y.children,j,null,N,L,Ta(y,k),K,$),rt&&ur(y,null,N,"created"),v(j,y,y.scopeId,K,N),nt){for(const Tt in nt)Tt!=="value"&&!ks(Tt)&&i(j,Tt,null,nt[Tt],k,N);"value"in nt&&i(j,"value",null,nt.value,k),(U=nt.onVnodeBeforeMount)&&Xe(U,N,y)}rt&&ur(y,null,N,"beforeMount");const _t=by(L,tt);_t&&tt.beforeEnter(j),r(j,w,S),((U=nt&&nt.onVnodeMounted)||_t||rt)&&Ae(()=>{try{U&&Xe(U,N,y),_t&&tt.enter(j),rt&&ur(y,null,N,"mounted")}finally{}},L)},v=(y,w,S,N,L)=>{if(S&&E(y,S),N)for(let k=0;k<N.length;k++)E(y,N[k]);if(L){let k=L.subTree;if(w===k||Ud(k.type)&&(k.ssContent===w||k.ssFallback===w)){const K=L.vnode;v(y,K,K.scopeId,K.slotScopeIds,L.parent)}}},_=(y,w,S,N,L,k,K,$,j=0)=>{for(let U=j;U<y.length;U++){const nt=y[U]=$?Tn(y[U]):rn(y[U]);V(null,nt,w,S,N,L,k,K,$)}},I=(y,w,S,N,L,k,K)=>{const $=w.el=y.el;let{patchFlag:j,dynamicChildren:U,dirs:nt}=w;j|=y.patchFlag&16;const Q=y.props||Vt,tt=w.props||Vt;let rt;if(S&&hr(S,!1),(rt=tt.onVnodeBeforeUpdate)&&Xe(rt,S,w,y),nt&&ur(w,y,S,"beforeUpdate"),S&&hr(S,!0),(Q.innerHTML&&tt.innerHTML==null||Q.textContent&&tt.textContent==null)&&d($,""),U?b(y.dynamicChildren,U,$,S,N,Ta(w,L),k):K||mt(y,w,$,null,S,N,Ta(w,L),k,!1),j>0){if(j&16)A($,Q,tt,S,L);else if(j&2&&Q.class!==tt.class&&i($,"class",null,tt.class,L),j&4&&i($,"style",Q.style,tt.style,L),j&8){const _t=w.dynamicProps;for(let Tt=0;Tt<_t.length;Tt++){const wt=_t[Tt],Mt=Q[wt],Gt=tt[wt];(Gt!==Mt||wt==="value")&&i($,wt,Mt,Gt,L,S)}}j&1&&y.children!==w.children&&d($,w.children)}else!K&&U==null&&A($,Q,tt,S,L);((rt=tt.onVnodeUpdated)||nt)&&Ae(()=>{rt&&Xe(rt,S,w,y),nt&&ur(w,y,S,"updated")},N)},b=(y,w,S,N,L,k,K)=>{for(let $=0;$<w.length;$++){const j=y[$],U=w[$],nt=j.el&&(j.type===De||!bs(j,U)||j.shapeFlag&198)?p(j.el):S;V(j,U,nt,null,N,L,k,K,!0)}},A=(y,w,S,N,L)=>{if(w!==S){if(w!==Vt)for(const k in w)!ks(k)&&!(k in S)&&i(y,k,w[k],null,L,N);for(const k in S){if(ks(k))continue;const K=S[k],$=w[k];K!==$&&k!=="value"&&i(y,k,$,K,L,N)}"value"in S&&i(y,"value",w.value,S.value,L)}},R=(y,w,S,N,L,k,K,$,j)=>{const U=w.el=y?y.el:l(""),nt=w.anchor=y?y.anchor:l("");let{patchFlag:Q,dynamicChildren:tt,slotScopeIds:rt}=w;rt&&($=$?$.concat(rt):rt),y==null?(r(U,S,N),r(nt,S,N),_(w.children||[],S,nt,L,k,K,$,j)):Q>0&&Q&64&&tt&&y.dynamicChildren&&y.dynamicChildren.length===tt.length?(b(y.dynamicChildren,tt,S,L,k,K,$),(w.key!=null||L&&w===L.subTree)&&Md(y,w,!0)):mt(y,w,S,nt,L,k,K,$,j)},T=(y,w,S,N,L,k,K,$,j)=>{w.slotScopeIds=$,y==null?w.shapeFlag&512?L.ctx.activate(w,S,N,K,j):jt(w,S,N,L,k,K,j):we(y,w,j)},jt=(y,w,S,N,L,k,K)=>{const $=y.component=Oy(y,N,L);if(Td(y)&&($.ctx.renderer=Z),My($,!1,K),$.asyncDep){if(L&&L.registerDep($,$t,K),!y.el){const j=$.subTree=zt(Jn);z(null,j,w,S),y.placeholder=j.el}}else $t($,y,w,S,L,k,K)},we=(y,w,S)=>{const N=w.component=y.component;if(gy(y,w,S))if(N.asyncDep&&!N.asyncResolved){vt(N,w,S);return}else N.next=w,N.update();else w.el=y.el,N.vnode=w},$t=(y,w,S,N,L,k,K)=>{const $=()=>{if(y.isMounted){let{next:Q,bu:tt,u:rt,parent:_t,vnode:Tt}=y;{const Ce=Ld(y);if(Ce){Q&&(Q.el=Tt.el,vt(y,Q,K)),Ce.asyncDep.then(()=>{Ae(()=>{y.isUnmounted||U()},L)});return}}let wt=Q,Mt;hr(y,!1),Q?(Q.el=Tt.el,vt(y,Q,K)):Q=Tt,tt&&ga(tt),(Mt=Q.props&&Q.props.onVnodeBeforeUpdate)&&Xe(Mt,_t,Q,Tt),hr(y,!0);const Gt=Fu(y),Se=y.subTree;y.subTree=Gt,V(Se,Gt,p(Se.el),O(Se),y,L,k),Q.el=Gt.el,wt===null&&my(y,Gt.el),rt&&Ae(rt,L),(Mt=Q.props&&Q.props.onVnodeUpdated)&&Ae(()=>Xe(Mt,_t,Q,Tt),L)}else{let Q;const{el:tt,props:rt}=w,{bm:_t,m:Tt,parent:wt,root:Mt,type:Gt}=y,Se=Us(w);hr(y,!1),_t&&ga(_t),!Se&&(Q=rt&&rt.onVnodeBeforeMount)&&Xe(Q,wt,w),hr(y,!0);{Mt.ce&&Mt.ce._hasShadowRoot()&&Mt.ce._injectChildStyle(Gt,y.parent?y.parent.type:void 0);const Ce=y.subTree=Fu(y);V(null,Ce,S,N,y,L,k),w.el=Ce.el}if(Tt&&Ae(Tt,L),!Se&&(Q=rt&&rt.onVnodeMounted)){const Ce=w;Ae(()=>Xe(Q,wt,Ce),L)}(w.shapeFlag&256||wt&&Us(wt.vnode)&&wt.vnode.shapeFlag&256)&&y.a&&Ae(y.a,L),y.isMounted=!0,w=S=N=null}};y.scope.on();const j=y.effect=new Wf($);y.scope.off();const U=y.update=j.run.bind(j),nt=y.job=j.runIfDirty.bind(j);nt.i=y,nt.id=y.uid,j.scheduler=()=>jl(nt),hr(y,!0),U()},vt=(y,w,S)=>{w.component=y;const N=y.vnode.props;y.vnode=w,y.next=null,yy(y,w.props,N,S),wy(y,w.children,S),An(),Vu(y),bn()},mt=(y,w,S,N,L,k,K,$,j=!1)=>{const U=y&&y.children,nt=y?y.shapeFlag:0,Q=w.children,{patchFlag:tt,shapeFlag:rt}=w;if(tt>0){if(tt&128){Qe(U,Q,S,N,L,k,K,$,j);return}else if(tt&256){Ie(U,Q,S,N,L,k,K,$,j);return}}rt&8?(nt&16&&ae(U,L,k),Q!==U&&d(S,Q)):nt&16?rt&16?Qe(U,Q,S,N,L,k,K,$,j):ae(U,L,k,!0):(nt&8&&d(S,""),rt&16&&_(Q,S,N,L,k,K,$,j))},Ie=(y,w,S,N,L,k,K,$,j)=>{y=y||jr,w=w||jr;const U=y.length,nt=w.length,Q=Math.min(U,nt);let tt;for(tt=0;tt<Q;tt++){const rt=w[tt]=j?Tn(w[tt]):rn(w[tt]);V(y[tt],rt,S,null,L,k,K,$,j)}U>nt?ae(y,L,k,!0,!1,Q):_(w,S,N,L,k,K,$,j,Q)},Qe=(y,w,S,N,L,k,K,$,j)=>{let U=0;const nt=w.length;let Q=y.length-1,tt=nt-1;for(;U<=Q&&U<=tt;){const rt=y[U],_t=w[U]=j?Tn(w[U]):rn(w[U]);if(bs(rt,_t))V(rt,_t,S,null,L,k,K,$,j);else break;U++}for(;U<=Q&&U<=tt;){const rt=y[Q],_t=w[tt]=j?Tn(w[tt]):rn(w[tt]);if(bs(rt,_t))V(rt,_t,S,null,L,k,K,$,j);else break;Q--,tt--}if(U>Q){if(U<=tt){const rt=tt+1,_t=rt<nt?w[rt].el:N;for(;U<=tt;)V(null,w[U]=j?Tn(w[U]):rn(w[U]),S,_t,L,k,K,$,j),U++}}else if(U>tt)for(;U<=Q;)ee(y[U],L,k,!0),U++;else{const rt=U,_t=U,Tt=new Map;for(U=_t;U<=tt;U++){const ne=w[U]=j?Tn(w[U]):rn(w[U]);ne.key!=null&&Tt.set(ne.key,U)}let wt,Mt=0;const Gt=tt-_t+1;let Se=!1,Ce=0;const Be=new Array(Gt);for(U=0;U<Gt;U++)Be[U]=0;for(U=rt;U<=Q;U++){const ne=y[U];if(Mt>=Gt){ee(ne,L,k,!0);continue}let Jt;if(ne.key!=null)Jt=Tt.get(ne.key);else for(wt=_t;wt<=tt;wt++)if(Be[wt-_t]===0&&bs(ne,w[wt])){Jt=wt;break}Jt===void 0?ee(ne,L,k,!0):(Be[Jt-_t]=U+1,Jt>=Ce?Ce=Jt:Se=!0,V(ne,w[Jt],S,null,L,k,K,$,j),Mt++)}const Vr=Se?Ry(Be):jr;for(wt=Vr.length-1,U=Gt-1;U>=0;U--){const ne=_t+U,Jt=w[ne],cs=w[ne+1],ir=ne+1<nt?cs.el||Fd(cs):N;Be[U]===0?V(null,Jt,S,ir,L,k,K,$,j):Se&&(wt<0||U!==Vr[wt]?Re(Jt,S,ir,2):wt--)}}},Re=(y,w,S,N,L=null)=>{const{el:k,type:K,transition:$,children:j,shapeFlag:U}=y;if(U&6){Re(y.component.subTree,w,S,N);return}if(U&128){y.suspense.move(w,S,N);return}if(U&64){K.move(y,w,S,Z);return}if(K===De){r(k,w,S);for(let Q=0;Q<j.length;Q++)Re(j[Q],w,S,N);r(y.anchor,w,S);return}if(K===$i){q(y,w,S);return}if(N!==2&&U&1&&$)if(N===0)$.beforeEnter(k),r(k,w,S),Ae(()=>$.enter(k),L);else{const{leave:Q,delayLeave:tt,afterLeave:rt}=$,_t=()=>{y.ctx.isUnmounted?s(k):r(k,w,S)},Tt=()=>{k._isLeaving&&k[j_](!0),Q(k,()=>{_t(),rt&&rt()})};tt?tt(k,_t,Tt):Tt()}else r(k,w,S)},ee=(y,w,S,N=!1,L=!1)=>{const{type:k,props:K,ref:$,children:j,dynamicChildren:U,shapeFlag:nt,patchFlag:Q,dirs:tt,cacheIndex:rt,memo:_t}=y;if(Q===-2&&(L=!1),$!=null&&(An(),Fs($,null,S,y,!0),bn()),rt!=null&&(w.renderCache[rt]=void 0),nt&256){w.ctx.deactivate(y);return}const Tt=nt&1&&tt,wt=!Us(y);let Mt;if(wt&&(Mt=K&&K.onVnodeBeforeUnmount)&&Xe(Mt,w,y),nt&6)Ue(y.component,S,N);else{if(nt&128){y.suspense.unmount(S,N);return}Tt&&ur(y,null,w,"beforeUnmount"),nt&64?y.type.remove(y,w,S,Z,N):U&&!U.hasOnce&&(k!==De||Q>0&&Q&64)?ae(U,w,S,!1,!0):(k===De&&Q&384||!L&&nt&16)&&ae(j,w,S),N&&gn(y)}const Gt=_t!=null&&rt==null;(wt&&(Mt=K&&K.onVnodeUnmounted)||Tt||Gt)&&Ae(()=>{Mt&&Xe(Mt,w,y),Tt&&ur(y,null,w,"unmounted"),Gt&&(y.el=null)},S)},gn=y=>{const{type:w,el:S,anchor:N,transition:L}=y;if(w===De){Fe(S,N);return}if(w===$i){W(y);return}const k=()=>{s(S),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(y.shapeFlag&1&&L&&!L.persisted){const{leave:K,delayLeave:$}=L,j=()=>K(S,k);$?$(y.el,k,j):j()}else k()},Fe=(y,w)=>{let S;for(;y!==w;)S=m(y),s(y),y=S;s(w)},Ue=(y,w,S)=>{const{bum:N,scope:L,job:k,subTree:K,um:$,m:j,a:U}=y;ju(j),ju(U),N&&ga(N),L.stop(),k&&(k.flags|=8,ee(K,y,w,S)),$&&Ae($,w),Ae(()=>{y.isUnmounted=!0},w)},ae=(y,w,S,N=!1,L=!1,k=0)=>{for(let K=k;K<y.length;K++)ee(y[K],w,S,N,L)},O=y=>{if(y.shapeFlag&6)return O(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=m(y.anchor||y.el),S=w&&w[U_];return S?m(S):w};let Y=!1;const G=(y,w,S)=>{let N;y==null?w._vnode&&(ee(w._vnode,null,null,!0),N=w._vnode.component):V(w._vnode||null,y,w,null,null,null,S),w._vnode=y,Y||(Y=!0,Vu(N),pd(),Y=!1)},Z={p:V,um:ee,m:Re,r:gn,mt:jt,mc:_,pc:mt,pbc:b,n:O,o:e};return{render:G,hydrate:void 0,createApp:cy(G)}}function Ta({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function hr({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function by(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Md(e,t,n=!1){const r=e.children,s=t.children;if(lt(r)&&lt(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Tn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Md(a,l)),l.type===Do&&(l.patchFlag===-1&&(l=s[i]=Tn(l)),l.el=a.el),l.type===Jn&&!l.el&&(l.el=a.el)}}function Ry(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Ld(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ld(t)}function ju(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Fd(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Fd(t.subTree):null}const Ud=e=>e.__isSuspense;function Sy(e,t){t&&t.pendingBranch?lt(e)?t.effects.push(...e):t.effects.push(e):x_(e)}const De=Symbol.for("v-fgt"),Do=Symbol.for("v-txt"),Jn=Symbol.for("v-cmt"),$i=Symbol.for("v-stc"),js=[];let Ne=null;function Ee(e=!1){js.push(Ne=e?null:[])}function Cy(){js.pop(),Ne=js[js.length-1]||null}let Js=1;function eo(e,t=!1){Js+=e,e<0&&Ne&&t&&(Ne.hasOnce=!0)}function Bd(e){return e.dynamicChildren=Js>0?Ne||jr:null,Cy(),Js>0&&Ne&&Ne.push(e),e}function Ve(e,t,n,r,s,i){return Bd(at(e,t,n,r,s,i,!0))}function jd(e,t,n,r,s){return Bd(zt(e,t,n,r,s,!0))}function no(e){return e?e.__v_isVNode===!0:!1}function bs(e,t){return e.type===t.type&&e.key===t.key}const $d=({key:e})=>e??null,qi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Bt(e)||pe(e)||ut(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function at(e,t=null,n=null,r=0,s=null,i=e===De?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$d(t),ref:t&&qi(t),scopeId:md,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return l?(Kl(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Bt(n)?8:16),Js>0&&!a&&Ne&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ne.push(c),c}const zt=Py;function Py(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===ty)&&(e=Jn),no(e)){const l=Yr(e,t,!0);return n&&Kl(l,n),Js>0&&!i&&Ne&&(l.shapeFlag&6?Ne[Ne.indexOf(e)]=l:Ne.push(l)),l.patchFlag=-2,l}if(jy(e)&&(e=e.__vccOpts),t){t=Vy(t);let{class:l,style:c}=t;l&&!Bt(l)&&(t.class=zn(l)),St(c)&&(Bl(c)&&!lt(c)&&(c=ie({},c)),t.style=So(c))}const a=Bt(e)?1:Ud(e)?128:B_(e)?64:St(e)?4:ut(e)?2:0;return at(e,t,n,r,s,a,i,!0)}function Vy(e){return e?Bl(e)||Vd(e)?ie({},e):e:null}function Yr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,h=t?Dy(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&$d(h),ref:t&&t.ref?n&&i?lt(i)?i.concat(qi(t)):[i,qi(t)]:qi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yr(e.ssContent),ssFallback:e.ssFallback&&Yr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&$l(d,c.clone(d)),d}function Oe(e=" ",t=0){return zt(Do,null,e,t)}function ro(e,t){const n=zt($i,null,e);return n.staticCount=t,n}function vn(e="",t=!1){return t?(Ee(),jd(Jn,null,e)):zt(Jn,null,e)}function rn(e){return e==null||typeof e=="boolean"?zt(Jn):lt(e)?zt(De,null,e.slice()):no(e)?Tn(e):zt(Do,null,String(e))}function Tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Yr(e)}function Kl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(lt(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Kl(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Vd(t)?t._ctx=$e:s===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ut(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[Oe(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dy(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=zn([t.class,r.class]));else if(s==="style")t.style=So([t.style,r.style]);else if(wo(s)){const i=t[s],a=r[s];a&&i!==a&&!(lt(i)&&i.includes(a))?t[s]=i?[].concat(i,a):a:a==null&&i==null&&!Io(s)&&(t[s]=a)}else s!==""&&(t[s]=r[s])}return t}function Xe(e,t,n,r=null){dn(e,t,7,[n,r])}const Ny=bd();let ky=0;function Oy(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Ny,i={uid:ky++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new i_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nd(r,s),emitsOptions:Rd(r,s),emit:null,emitted:null,propsDefaults:Vt,inheritAttrs:r.inheritAttrs,ctx:Vt,data:Vt,props:Vt,attrs:Vt,slots:Vt,refs:Vt,setupState:Vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=hy.bind(null,i),e.ce&&e.ce(i),i}let de=null;const xy=()=>de||$e;let so,Za;{const e=Ro(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};so=t("__VUE_INSTANCE_SETTERS__",n=>de=n),Za=t("__VUE_SSR_SETTERS__",n=>Xs=n)}const gi=e=>{const t=de;return so(e),e.scope.on(),()=>{e.scope.off(),so(t)}},$u=()=>{de&&de.scope.off(),so(null)};function qd(e){return e.vnode.shapeFlag&4}let Xs=!1;function My(e,t=!1,n=!1){t&&Za(t);const{props:r,children:s}=e.vnode,i=qd(e);_y(e,r,i,t),Ty(e,s,n||t);const a=i?Ly(e,t):void 0;return t&&Za(!1),a}function Ly(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ny);const{setup:r}=n;if(r){An();const s=e.setupContext=r.length>1?Uy(e):null,i=gi(e),a=hi(r,e,0,[e.props,s]),l=jf(a);if(bn(),i(),(l||e.sp)&&!Us(e)&&vd(e),l){if(a.then($u,$u),t)return a.then(c=>{qu(e,c)}).catch(c=>{Co(c,e,0)});e.asyncDep=a}else qu(e,a)}else Hd(e)}function qu(e,t,n){ut(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:St(t)&&(e.setupState=ud(t)),Hd(e)}function Hd(e,t,n){const r=e.type;e.render||(e.render=r.render||on);{const s=gi(e);An();try{ry(e)}finally{bn(),s()}}}const Fy={get(e,t){return he(e,"get",""),e[t]}};function Uy(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Fy),slots:e.slots,emit:e.emit,expose:t}}function Gl(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ud(b_(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bs)return Bs[n](e)},has(t,n){return n in t||n in Bs}})):e.proxy}function By(e,t=!0){return ut(e)?e.displayName||e.name:e.name||t&&e.__name}function jy(e){return ut(e)&&"__vccOpts"in e}const je=(e,t)=>V_(e,t,Xs);function zd(e,t,n){try{eo(-1);const r=arguments.length;return r===2?St(t)&&!lt(t)?no(t)?zt(e,null,[t]):zt(e,t):zt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&no(n)&&(n=[n]),zt(e,t,n))}finally{eo(1)}}const $y="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const Hu=typeof window<"u"&&window.trustedTypes;if(Hu)try{tl=Hu.createPolicy("vue",{createHTML:e=>e})}catch{}const Kd=tl?e=>tl.createHTML(e):e=>e,qy="http://www.w3.org/2000/svg",Hy="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,zu=yn&&yn.createElement("template"),zy={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?yn.createElementNS(qy,e):t==="mathml"?yn.createElementNS(Hy,e):n?yn.createElement(e,{is:n}):yn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>yn.createTextNode(e),createComment:e=>yn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zu.innerHTML=Kd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=zu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ky=Symbol("_vtc");function Gy(e,t,n){const r=e[Ky];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ku=Symbol("_vod"),Wy=Symbol("_vsh"),Qy=Symbol(""),Yy=/(?:^|;)\s*display\s*:/;function Jy(e,t,n){const r=e.style,s=Bt(n);let i=!1;if(n&&!s){if(t)if(Bt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ps(r,l,"")}else for(const a in t)n[a]==null&&Ps(r,a,"");for(const a in n){a==="display"&&(i=!0);const l=n[a];l!=null?Zy(e,a,!Bt(t)&&t?t[a]:void 0,l)||Ps(r,a,l):Ps(r,a,"")}}else if(s){if(t!==n){const a=r[Qy];a&&(n+=";"+a),r.cssText=n,i=Yy.test(n)}}else t&&e.removeAttribute("style");Ku in e&&(e[Ku]=i?r.display:"",e[Wy]&&(r.display="none"))}const Gu=/\s*!important$/;function Ps(e,t,n){if(lt(n))n.forEach(r=>Ps(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Xy(e,t);Gu.test(n)?e.setProperty(Ar(r),n.replace(Gu,""),"important"):e[r]=n}}const Wu=["Webkit","Moz","ms"],wa={};function Xy(e,t){const n=wa[t];if(n)return n;let r=Te(t);if(r!=="filter"&&r in e)return wa[t]=r;r=bo(r);for(let s=0;s<Wu.length;s++){const i=Wu[s]+r;if(i in e)return wa[t]=i}return t}function Zy(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Bt(r)&&n===r}const Qu="http://www.w3.org/1999/xlink";function Yu(e,t,n,r,s,i=r_(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Qu,t.slice(6,t.length)):e.setAttributeNS(Qu,t,n):n==null||i&&!zf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":fn(n)?String(n):n)}function Ju(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Kd(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=zf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function tE(e,t,n,r){e.addEventListener(t,n,r)}function eE(e,t,n,r){e.removeEventListener(t,n,r)}const Xu=Symbol("_vei");function nE(e,t,n,r,s=null){const i=e[Xu]||(e[Xu]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=rE(t);if(r){const h=i[t]=oE(r,s);tE(e,l,h,c)}else a&&(eE(e,l,a,c),i[t]=void 0)}}const Zu=/(?:Once|Passive|Capture)$/;function rE(e){let t;if(Zu.test(e)){t={};let r;for(;r=e.match(Zu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ar(e.slice(2)),t]}let Ia=0;const sE=Promise.resolve(),iE=()=>Ia||(sE.then(()=>Ia=0),Ia=Date.now());function oE(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;dn(aE(r,n.value),t,5,[r])};return n.value=e,n.attached=iE(),n}function aE(e,t){if(lt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const th=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,lE=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Gy(e,r,a):t==="style"?Jy(e,n,r):wo(t)?Io(t)||nE(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cE(e,t,r,a))?(Ju(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Yu(e,t,r,a,i,t!=="value")):e._isVueCE&&(uE(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Bt(r)))?Ju(e,Te(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Yu(e,t,r,a))};function cE(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&th(t)&&ut(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return th(t)&&Bt(n)?!1:t in e}function uE(e,t){const n=e._def.props;if(!n)return!1;const r=Te(t);return Array.isArray(n)?n.some(s=>Te(s)===r):Object.keys(n).some(s=>Te(s)===r)}const hE=["ctrl","shift","alt","meta"],fE={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>hE.some(n=>e[`${n}Key`]&&!t.includes(n))},dE=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<t.length;a++){const l=fE[t[a]];if(l&&l(s,t))return}return e(s,...i)})},pE=ie({patchProp:lE},zy);let eh;function gE(){return eh||(eh=Iy(pE))}const mE=(...e)=>{const t=gE().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=yE(r);if(!s)return;const i=t._component;!ut(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,_E(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function _E(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function yE(e){return Bt(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Mr=typeof document<"u";function Gd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function EE(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Gd(e.default)}const It=Object.assign;function Aa(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ge(s)?s.map(e):e(s)}return n}const $s=()=>{},Ge=Array.isArray;function nh(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Wd=/#/g,vE=/&/g,TE=/\//g,wE=/=/g,IE=/\?/g,Qd=/\+/g,AE=/%5B/g,bE=/%5D/g,Yd=/%5E/g,RE=/%60/g,Jd=/%7B/g,SE=/%7C/g,Xd=/%7D/g,CE=/%20/g;function Wl(e){return e==null?"":encodeURI(""+e).replace(SE,"|").replace(AE,"[").replace(bE,"]")}function PE(e){return Wl(e).replace(Jd,"{").replace(Xd,"}").replace(Yd,"^")}function el(e){return Wl(e).replace(Qd,"%2B").replace(CE,"+").replace(Wd,"%23").replace(vE,"%26").replace(RE,"`").replace(Jd,"{").replace(Xd,"}").replace(Yd,"^")}function VE(e){return el(e).replace(wE,"%3D")}function DE(e){return Wl(e).replace(Wd,"%23").replace(IE,"%3F")}function NE(e){return DE(e).replace(TE,"%2F")}function Zs(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const kE=/\/$/,OE=e=>e.replace(kE,"");function ba(e,t,n="/"){let r,s={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return c=l>=0&&c>l?-1:c,c>=0&&(r=t.slice(0,c),i=t.slice(c,l>0?l:t.length),s=e(i.slice(1))),l>=0&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=FE(r??t,n),{fullPath:r+i+a,path:r,query:s,hash:Zs(a)}}function xE(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function rh(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ME(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jr(t.matched[r],n.matched[s])&&Zd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Zd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!LE(e[n],t[n]))return!1;return!0}function LE(e,t){return Ge(e)?sh(e,t):Ge(t)?sh(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function sh(e,t){return Ge(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function FE(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let nl=function(e){return e.pop="pop",e.push="push",e}({}),Ra=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function UE(e){if(!e)if(Mr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),OE(e)}const BE=/^[^#]+#/;function jE(e,t){return e.replace(BE,"#")+t}function $E(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const No=()=>({left:window.scrollX,top:window.scrollY});function qE(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=$E(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ih(e,t){return(history.state?history.state.position-t:-1)+e}const rl=new Map;function HE(e,t){rl.set(e,t)}function zE(e){const t=rl.get(e);return rl.delete(e),t}function KE(e){return typeof e=="string"||e&&typeof e=="object"}function tp(e){return typeof e=="string"||typeof e=="symbol"}let Ft=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const ep=Symbol("");Ft.MATCHER_NOT_FOUND+"",Ft.NAVIGATION_GUARD_REDIRECT+"",Ft.NAVIGATION_ABORTED+"",Ft.NAVIGATION_CANCELLED+"",Ft.NAVIGATION_DUPLICATED+"";function Xr(e,t){return It(new Error,{type:e,[ep]:!0},t)}function _n(e,t){return e instanceof Error&&ep in e&&(t==null||!!(e.type&t))}const GE=["params","query","hash"];function WE(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of GE)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function QE(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Qd," "),i=s.indexOf("="),a=Zs(i<0?s:s.slice(0,i)),l=i<0?null:Zs(s.slice(i+1));if(a in t){let c=t[a];Ge(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function oh(e){let t="";for(let n in e){const r=e[n];if(n=VE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ge(r)?r.map(s=>s&&el(s)):[r&&el(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function YE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ge(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const JE=Symbol(""),ah=Symbol(""),Ql=Symbol(""),Yl=Symbol(""),sl=Symbol("");function Rs(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function jn(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Xr(Ft.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?c(m):KE(m)?c(Xr(Ft.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>e.call(r&&r.instances[s],t,n,h));let p=Promise.resolve(d);e.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function Sa(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(Gd(c)){const h=(c.__vccOpts||c)[t];h&&i.push(jn(h,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=EE(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const m=(p.__vccOpts||p)[t];return m&&jn(m,n,r,a,l,s)()}))}}return i}function XE(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(h=>Jr(h,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(h=>Jr(h,c))||s.push(c))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ZE=()=>location.protocol+"//"+location.host;function np(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),rh(l,"")}return rh(n,e)+r+s}function tv(e,t,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const E=np(e,location),D=n.value,V=t.value;let F=0;if(m){if(n.value=E,t.value=m,a&&a===D){a=null;return}F=V?m.position-V.position:0}else r(E);s.forEach(z=>{z(n.value,D,{delta:F,type:nl.pop,direction:F?F>0?Ra.forward:Ra.back:Ra.unknown})})};function c(){a=n.value}function h(m){s.push(m);const E=()=>{const D=s.indexOf(m);D>-1&&s.splice(D,1)};return i.push(E),E}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(It({},m.state,{scroll:No()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:c,listen:h,destroy:p}}function lh(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?No():null}}function ev(e){const{history:t,location:n}=window,r={value:np(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:ZE()+e+c;try{t[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(E){console.error(E),n[d?"replace":"assign"](m)}}function a(c,h){i(c,It({},t.state,lh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=c}function l(c,h){const d=It({},s.value,t.state,{forward:c,scroll:No()});i(d.current,d,!0),i(c,It({},lh(r.value,c,null),{position:d.position+1},h),!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function nv(e){e=UE(e);const t=ev(e),n=tv(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=It({location:"",base:e,go:r,createHref:jE.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let pr=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var Qt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(Qt||{});const rv={type:pr.Static,value:""},sv=/[a-zA-Z0-9_]/;function iv(e){if(!e)return[[]];if(e==="/")return[[rv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(E){throw new Error(`ERR (${n})/"${h}": ${E}`)}let n=Qt.Static,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===Qt.Static?i.push({type:pr.Static,value:h}):n===Qt.Param||n===Qt.ParamRegExp||n===Qt.ParamRegExpEnd?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:pr.Param,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==Qt.ParamRegExp){r=n,n=Qt.EscapeNext;continue}switch(n){case Qt.Static:c==="/"?(h&&p(),a()):c===":"?(p(),n=Qt.Param):m();break;case Qt.EscapeNext:m(),n=r;break;case Qt.Param:c==="("?n=Qt.ParamRegExp:sv.test(c)?m():(p(),n=Qt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case Qt.ParamRegExp:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=Qt.ParamRegExpEnd:d+=c;break;case Qt.ParamRegExpEnd:p(),n=Qt.Static,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===Qt.ParamRegExp&&t(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}const ch="[^/]+?",ov={sensitive:!1,strict:!1,start:!0,end:!0};var ye=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(ye||{});const av=/[.+*?^${}()[\]/\\]/g;function lv(e,t){const n=It({},ov,t),r=[];let s=n.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[ye.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let E=ye.Segment+(n.sensitive?ye.BonusCaseSensitive:0);if(m.type===pr.Static)p||(s+="/"),s+=m.value.replace(av,"\\$&"),E+=ye.Static;else if(m.type===pr.Param){const{value:D,repeatable:V,optional:F,regexp:z}=m;i.push({name:D,repeatable:V,optional:F});const B=z||ch;if(B!==ch){E+=ye.BonusCustomRegExp;try{`${B}`}catch(W){throw new Error(`Invalid custom RegExp for param "${D}" (${B}): `+W.message)}}let q=V?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(q=F&&h.length<2?`(?:/${q})`:"/"+q),F&&(q+="?"),s+=q,E+=ye.Dynamic,F&&(E+=ye.BonusOptional),V&&(E+=ye.BonusRepeatable),B===".*"&&(E+=ye.BonusWildcard)}d.push(E)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=ye.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const E=d[m]||"",D=i[m-1];p[D.name]=E&&D.repeatable?E.split("/"):E}return p}function c(h){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const E of m)if(E.type===pr.Static)d+=E.value;else if(E.type===pr.Param){const{value:D,repeatable:V,optional:F}=E,z=D in h?h[D]:"";if(Ge(z)&&!V)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const B=Ge(z)?z.join("/"):z;if(!B)if(F)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${D}"`);d+=B}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function cv(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===ye.Static+ye.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===ye.Static+ye.Segment?1:-1:0}function rp(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=cv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(uh(r))return 1;if(uh(s))return-1}return s.length-r.length}function uh(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const uv={strict:!1,end:!0,sensitive:!1};function hv(e,t,n){const r=lv(iv(e.path),n),s=It(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function fv(e,t){const n=[],r=new Map;t=nh(uv,t);function s(p){return r.get(p)}function i(p,m,E){const D=!E,V=fh(p);V.aliasOf=E&&E.record;const F=nh(t,p),z=[V];if("alias"in p){const W=typeof p.alias=="string"?[p.alias]:p.alias;for(const it of W)z.push(fh(It({},V,{components:E?E.record.components:V.components,path:it,aliasOf:E?E.record:V})))}let B,q;for(const W of z){const{path:it}=W;if(m&&it[0]!=="/"){const ft=m.record.path,v=ft[ft.length-1]==="/"?"":"/";W.path=m.record.path+(it&&v+it)}if(B=hv(W,m,F),E?E.alias.push(B):(q=q||B,q!==B&&q.alias.push(B),D&&p.name&&!dh(B)&&a(p.name)),sp(B)&&c(B),V.children){const ft=V.children;for(let v=0;v<ft.length;v++)i(ft[v],B,E&&E.children[v])}E=E||B}return q?()=>{a(q)}:$s}function a(p){if(tp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=gv(p,n);n.splice(m,0,p),p.record.name&&!dh(p)&&r.set(p.record.name,p)}function h(p,m){let E,D={},V,F;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw Xr(Ft.MATCHER_NOT_FOUND,{location:p});F=E.record.name,D=It(hh(m.params,E.keys.filter(q=>!q.optional).concat(E.parent?E.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&hh(p.params,E.keys.map(q=>q.name))),V=E.stringify(D)}else if(p.path!=null)V=p.path,E=n.find(q=>q.re.test(V)),E&&(D=E.parse(V),F=E.record.name);else{if(E=m.name?r.get(m.name):n.find(q=>q.re.test(m.path)),!E)throw Xr(Ft.MATCHER_NOT_FOUND,{location:p,currentLocation:m});F=E.record.name,D=It({},m.params,p.params),V=E.stringify(D)}const z=[];let B=E;for(;B;)z.unshift(B.record),B=B.parent;return{name:F,path:V,params:D,matched:z,meta:pv(z)}}e.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function hh(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function fh(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:dv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function dv(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function dh(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pv(e){return e.reduce((t,n)=>It(t,n.meta),{})}function gv(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;rp(e,t[i])<0?r=i:n=i+1}const s=mv(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function mv(e){let t=e;for(;t=t.parent;)if(sp(t)&&rp(e,t)===0)return t}function sp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ph(e){const t=Le(Ql),n=Le(Yl),r=je(()=>{const c=Ot(e.to);return t.resolve(c)}),s=je(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Jr.bind(null,d));if(m>-1)return m;const E=gh(c[h-2]);return h>1&&gh(d)===E&&p[p.length-1].path!==E?p.findIndex(Jr.bind(null,c[h-2])):m}),i=je(()=>s.value>-1&&Tv(n.params,r.value.params)),a=je(()=>s.value>-1&&s.value===n.matched.length-1&&Zd(n.params,r.value.params));function l(c={}){if(vv(c)){const h=t[Ot(e.replace)?"replace":"push"](Ot(e.to)).catch($s);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:je(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function _v(e){return e.length===1?e[0]:e}const yv=Ed({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ph,setup(e,{slots:t}){const n=ui(ph(e)),{options:r}=Le(Ql),s=je(()=>({[mh(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mh(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&_v(t.default(n));return e.custom?i:zd("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ev=yv;function vv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Tv(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ge(s)||s.length!==r.length||r.some((i,a)=>i.valueOf()!==s[a].valueOf()))return!1}return!0}function gh(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const mh=(e,t,n)=>e??t??n,wv=Ed({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Le(sl),s=je(()=>e.route||r.value),i=Le(ah,0),a=je(()=>{let h=Ot(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=je(()=>s.value.matched[a.value]);Ms(ah,je(()=>a.value+1)),Ms(JE,l),Ms(sl,s);const c=qn();return Ls(()=>[c.value,l.value,e.name],([h,d,p],[m,E,D])=>{d&&(d.instances[p]=h,E&&E!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=E.leaveGuards),d.updateGuards.size||(d.updateGuards=E.updateGuards))),h&&d&&(!E||!Jr(d,E)||!m)&&(d.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,d=e.name,p=l.value,m=p&&p.components[d];if(!m)return _h(n.default,{Component:m,route:h});const E=p.props[d],D=E?E===!0?h.params:typeof E=="function"?E(h):E:null,F=zd(m,It({},D,t,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return _h(n.default,{Component:F,route:h})||F}}});function _h(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Iv=wv;function Av(e){const t=fv(e.routes,e),n=e.parseQuery||QE,r=e.stringifyQuery||oh,s=e.history,i=Rs(),a=Rs(),l=Rs(),c=R_(Un);let h=Un;Mr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Aa.bind(null,O=>""+O),p=Aa.bind(null,NE),m=Aa.bind(null,Zs);function E(O,Y){let G,Z;return tp(O)?(G=t.getRecordMatcher(O),Z=Y):Z=O,t.addRoute(Z,G)}function D(O){const Y=t.getRecordMatcher(O);Y&&t.removeRoute(Y)}function V(){return t.getRoutes().map(O=>O.record)}function F(O){return!!t.getRecordMatcher(O)}function z(O,Y){if(Y=It({},Y||c.value),typeof O=="string"){const S=ba(n,O,Y.path),N=t.resolve({path:S.path},Y),L=s.createHref(S.fullPath);return It(S,N,{params:m(N.params),hash:Zs(S.hash),redirectedFrom:void 0,href:L})}let G;if(O.path!=null)G=It({},O,{path:ba(n,O.path,Y.path).path});else{const S=It({},O.params);for(const N in S)S[N]==null&&delete S[N];G=It({},O,{params:p(S)}),Y.params=p(Y.params)}const Z=t.resolve(G,Y),dt=O.hash||"";Z.params=d(m(Z.params));const y=xE(r,It({},O,{hash:PE(dt),path:Z.path})),w=s.createHref(y);return It({fullPath:y,hash:dt,query:r===oh?YE(O.query):O.query||{}},Z,{redirectedFrom:void 0,href:w})}function B(O){return typeof O=="string"?ba(n,O,c.value.path):It({},O)}function q(O,Y){if(h!==O)return Xr(Ft.NAVIGATION_CANCELLED,{from:Y,to:O})}function W(O){return v(O)}function it(O){return W(It(B(O),{replace:!0}))}function ft(O,Y){const G=O.matched[O.matched.length-1];if(G&&G.redirect){const{redirect:Z}=G;let dt=typeof Z=="function"?Z(O,Y):Z;return typeof dt=="string"&&(dt=dt.includes("?")||dt.includes("#")?dt=B(dt):{path:dt},dt.params={}),It({query:O.query,hash:O.hash,params:dt.path!=null?{}:O.params},dt)}}function v(O,Y){const G=h=z(O),Z=c.value,dt=O.state,y=O.force,w=O.replace===!0,S=ft(G,Z);if(S)return v(It(B(S),{state:typeof S=="object"?It({},dt,S.state):dt,force:y,replace:w}),Y||G);const N=G;N.redirectedFrom=Y;let L;return!y&&ME(r,Z,G)&&(L=Xr(Ft.NAVIGATION_DUPLICATED,{to:N,from:Z}),Re(Z,Z,!0,!1)),(L?Promise.resolve(L):b(N,Z)).catch(k=>_n(k)?_n(k,Ft.NAVIGATION_GUARD_REDIRECT)?k:Qe(k):mt(k,N,Z)).then(k=>{if(k){if(_n(k,Ft.NAVIGATION_GUARD_REDIRECT))return v(It({replace:w},B(k.to),{state:typeof k.to=="object"?It({},dt,k.to.state):dt,force:y}),Y||N)}else k=R(N,Z,!0,w,dt);return A(N,Z,k),k})}function _(O,Y){const G=q(O,Y);return G?Promise.reject(G):Promise.resolve()}function I(O){const Y=Fe.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(O):O()}function b(O,Y){let G;const[Z,dt,y]=XE(O,Y);G=Sa(Z.reverse(),"beforeRouteLeave",O,Y);for(const S of Z)S.leaveGuards.forEach(N=>{G.push(jn(N,O,Y))});const w=_.bind(null,O,Y);return G.push(w),ae(G).then(()=>{G=[];for(const S of i.list())G.push(jn(S,O,Y));return G.push(w),ae(G)}).then(()=>{G=Sa(dt,"beforeRouteUpdate",O,Y);for(const S of dt)S.updateGuards.forEach(N=>{G.push(jn(N,O,Y))});return G.push(w),ae(G)}).then(()=>{G=[];for(const S of y)if(S.beforeEnter)if(Ge(S.beforeEnter))for(const N of S.beforeEnter)G.push(jn(N,O,Y));else G.push(jn(S.beforeEnter,O,Y));return G.push(w),ae(G)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),G=Sa(y,"beforeRouteEnter",O,Y,I),G.push(w),ae(G))).then(()=>{G=[];for(const S of a.list())G.push(jn(S,O,Y));return G.push(w),ae(G)}).catch(S=>_n(S,Ft.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function A(O,Y,G){l.list().forEach(Z=>I(()=>Z(O,Y,G)))}function R(O,Y,G,Z,dt){const y=q(O,Y);if(y)return y;const w=Y===Un,S=Mr?history.state:{};G&&(Z||w?s.replace(O.fullPath,It({scroll:w&&S&&S.scroll},dt)):s.push(O.fullPath,dt)),c.value=O,Re(O,Y,G,w),Qe()}let T;function jt(){T||(T=s.listen((O,Y,G)=>{if(!Ue.listening)return;const Z=z(O),dt=ft(Z,Ue.currentRoute.value);if(dt){v(It(dt,{replace:!0,force:!0}),Z).catch($s);return}h=Z;const y=c.value;Mr&&HE(ih(y.fullPath,G.delta),No()),b(Z,y).catch(w=>_n(w,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_CANCELLED)?w:_n(w,Ft.NAVIGATION_GUARD_REDIRECT)?(v(It(B(w.to),{force:!0}),Z).then(S=>{_n(S,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_DUPLICATED)&&!G.delta&&G.type===nl.pop&&s.go(-1,!1)}).catch($s),Promise.reject()):(G.delta&&s.go(-G.delta,!1),mt(w,Z,y))).then(w=>{w=w||R(Z,y,!1),w&&(G.delta&&!_n(w,Ft.NAVIGATION_CANCELLED)?s.go(-G.delta,!1):G.type===nl.pop&&_n(w,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(Z,y,w)}).catch($s)}))}let we=Rs(),$t=Rs(),vt;function mt(O,Y,G){Qe(O);const Z=$t.list();return Z.length?Z.forEach(dt=>dt(O,Y,G)):console.error(O),Promise.reject(O)}function Ie(){return vt&&c.value!==Un?Promise.resolve():new Promise((O,Y)=>{we.add([O,Y])})}function Qe(O){return vt||(vt=!O,jt(),we.list().forEach(([Y,G])=>O?G(O):Y()),we.reset()),O}function Re(O,Y,G,Z){const{scrollBehavior:dt}=e;if(!Mr||!dt)return Promise.resolve();const y=!G&&zE(ih(O.fullPath,0))||(Z||!G)&&history.state&&history.state.scroll||null;return fd().then(()=>dt(O,Y,y)).then(w=>w&&qE(w)).catch(w=>mt(w,O,Y))}const ee=O=>s.go(O);let gn;const Fe=new Set,Ue={currentRoute:c,listening:!0,addRoute:E,removeRoute:D,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:V,resolve:z,options:e,push:W,replace:it,go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:$t.add,isReady:Ie,install(O){O.component("RouterLink",Ev),O.component("RouterView",Iv),O.config.globalProperties.$router=Ue,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Ot(c)}),Mr&&!gn&&c.value===Un&&(gn=!0,W(s.location).catch(Z=>{}));const Y={};for(const Z in Un)Object.defineProperty(Y,Z,{get:()=>c.value[Z],enumerable:!0});O.provide(Ql,Ue),O.provide(Yl,ld(Y)),O.provide(sl,c);const G=O.unmount;Fe.add(O),O.unmount=function(){Fe.delete(O),Fe.size<1&&(h=Un,T&&T(),T=null,c.value=Un,gn=!1,vt=!1),G()}}};function ae(O){return O.reduce((Y,G)=>Y.then(()=>I(G)),Promise.resolve())}return Ue}function bv(e){return Le(Yl)}function Rv(e){return e.toLocaleDateString("sv",{timeZone:"Europe/Rome"})}async function ip(){return(await fetch("/partita-domani-a-roma/data/matches.json",{cache:"no-cache"})).json()}async function yh(e){const t=Rv(e);try{const r=(await ip())[t];return r?{timestamp:new Date(r.timestamp),homeTeam:r.homeTeam,awayTeamName:r.awayTeamName}:null}catch{return null}}async function Eh(){try{const t=(await ip()).nextMatch;return t?{date:t.date,timestamp:new Date(t.timestamp),homeTeam:t.homeTeam,awayTeamName:t.awayTeamName}:null}catch{return null}}function ke(e,t={}){typeof window.gtag=="function"&&window.gtag("event",e,t)}const Sv=()=>{};var vh={};/**
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
 */const op=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Cv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},ap={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,h=c?e[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,E=h&63;c||(E=64,a||(m=64)),r.push(n[d],n[p],n[m],n[E])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(op(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Cv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Pv;const m=i<<2|l>>4;if(r.push(m),h!==64){const E=l<<4&240|h>>2;if(r.push(E),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Pv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vv=function(e){const t=op(e);return ap.encodeByteArray(t,!0)},io=function(e){return Vv(e).replace(/\./g,"")},Dv=function(e){try{return ap.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Nv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kv=()=>Nv().__FIREBASE_DEFAULTS__,Ov=()=>{if(typeof process>"u"||typeof vh>"u")return;const e=vh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},xv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Dv(e[1]);return t&&JSON.parse(t)},Jl=()=>{try{return Sv()||kv()||Ov()||xv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Mv=e=>{var t,n;return(n=(t=Jl())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},Lv=e=>{const t=Mv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},lp=()=>{var e;return(e=Jl())==null?void 0:e.config};/**
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
 */class Fv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Uv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[io(JSON.stringify(n)),io(JSON.stringify(a)),""].join(".")}/**
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
 */function Bv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jv(){var t;const e=(t=Jl())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $v(){return!jv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cp(){try{return typeof indexedDB=="object"}catch{return!1}}function up(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(n){t(n)}})}function qv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hv="FirebaseError";class br extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Hv,Object.setPrototypeOf(this,br.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ko.prototype.create)}}class ko{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?zv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new br(s,l,r)}}function zv(e,t){return e.replace(Kv,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Kv=/\{\$([^}]+)}/g;function oo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(Th(i)&&Th(a)){if(!oo(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Th(e){return e!==null&&typeof e=="object"}/**
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
 */function Sn(e){return e&&e._delegate?e._delegate:e}/**
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
 */function hp(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gv(e){return(await fetch(e,{credentials:"include"})).ok}class Cn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const dr="[DEFAULT]";/**
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
 */class Wv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Fv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yv(t))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=dr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=dr){return this.instances.has(t)}getOptions(t=dr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=dr){return this.component?this.component.multipleInstances?t:dr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qv(e){return e===dr?void 0:e}function Yv(e){return e.instantiationMode==="EAGER"}/**
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
 */class Jv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Wv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Et;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Et||(Et={}));const Xv={debug:Et.DEBUG,verbose:Et.VERBOSE,info:Et.INFO,warn:Et.WARN,error:Et.ERROR,silent:Et.SILENT},Zv=Et.INFO,tT={[Et.DEBUG]:"log",[Et.VERBOSE]:"log",[Et.INFO]:"info",[Et.WARN]:"warn",[Et.ERROR]:"error"},eT=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=tT[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fp{constructor(t){this.name=t,this._logLevel=Zv,this._logHandler=eT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Et.DEBUG,...t),this._logHandler(this,Et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Et.VERBOSE,...t),this._logHandler(this,Et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Et.INFO,...t),this._logHandler(this,Et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Et.WARN,...t),this._logHandler(this,Et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Et.ERROR,...t),this._logHandler(this,Et.ERROR,...t)}}const nT=(e,t)=>t.some(n=>e instanceof n);let wh,Ih;function rT(){return wh||(wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sT(){return Ih||(Ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dp=new WeakMap,il=new WeakMap,pp=new WeakMap,Ca=new WeakMap,Xl=new WeakMap;function iT(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(In(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&dp.set(n,e)}).catch(()=>{}),Xl.set(t,e),t}function oT(e){if(il.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});il.set(e,t)}let ol={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return il.get(e);if(t==="objectStoreNames")return e.objectStoreNames||pp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function aT(e){ol=e(ol)}function lT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Pa(this),t,...n);return pp.set(r,t.sort?t.sort():[t]),In(r)}:sT().includes(e)?function(...t){return e.apply(Pa(this),t),In(dp.get(this))}:function(...t){return In(e.apply(Pa(this),t))}}function cT(e){return typeof e=="function"?lT(e):(e instanceof IDBTransaction&&oT(e),nT(e,rT())?new Proxy(e,ol):e)}function In(e){if(e instanceof IDBRequest)return iT(e);if(Ca.has(e))return Ca.get(e);const t=cT(e);return t!==e&&(Ca.set(e,t),Xl.set(t,e)),t}const Pa=e=>Xl.get(e);function Oo(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=In(a);return r&&a.addEventListener("upgradeneeded",c=>{r(In(a.result),c.oldVersion,c.newVersion,In(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}function Va(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),In(n).then(()=>{})}const uT=["get","getKey","getAll","getAllKeys","count"],hT=["put","add","delete","clear"],Da=new Map;function Ah(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Da.get(t))return Da.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=hT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||uT.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Da.set(t,i),i}aT(e=>({...e,get:(t,n,r)=>Ah(t,n)||e.get(t,n,r),has:(t,n)=>!!Ah(t,n)||e.has(t,n)}));/**
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
 */class fT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dT(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const al="@firebase/app",bh="0.14.11";/**
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
 */const Pn=new fp("@firebase/app"),pT="@firebase/app-compat",gT="@firebase/analytics-compat",mT="@firebase/analytics",_T="@firebase/app-check-compat",yT="@firebase/app-check",ET="@firebase/auth",vT="@firebase/auth-compat",TT="@firebase/database",wT="@firebase/data-connect",IT="@firebase/database-compat",AT="@firebase/functions",bT="@firebase/functions-compat",RT="@firebase/installations",ST="@firebase/installations-compat",CT="@firebase/messaging",PT="@firebase/messaging-compat",VT="@firebase/performance",DT="@firebase/performance-compat",NT="@firebase/remote-config",kT="@firebase/remote-config-compat",OT="@firebase/storage",xT="@firebase/storage-compat",MT="@firebase/firestore",LT="@firebase/ai",FT="@firebase/firestore-compat",UT="firebase",BT="12.12.0";/**
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
 */const ll="[DEFAULT]",jT={[al]:"fire-core",[pT]:"fire-core-compat",[mT]:"fire-analytics",[gT]:"fire-analytics-compat",[yT]:"fire-app-check",[_T]:"fire-app-check-compat",[ET]:"fire-auth",[vT]:"fire-auth-compat",[TT]:"fire-rtdb",[wT]:"fire-data-connect",[IT]:"fire-rtdb-compat",[AT]:"fire-fn",[bT]:"fire-fn-compat",[RT]:"fire-iid",[ST]:"fire-iid-compat",[CT]:"fire-fcm",[PT]:"fire-fcm-compat",[VT]:"fire-perf",[DT]:"fire-perf-compat",[NT]:"fire-rc",[kT]:"fire-rc-compat",[OT]:"fire-gcs",[xT]:"fire-gcs-compat",[MT]:"fire-fst",[FT]:"fire-fst-compat",[LT]:"fire-vertex","fire-js":"fire-js",[UT]:"fire-js-all"};/**
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
 */const ao=new Map,$T=new Map,cl=new Map;function Rh(e,t){try{e.container.addComponent(t)}catch(n){Pn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Xn(e){const t=e.name;if(cl.has(t))return Pn.debug(`There were multiple attempts to register component ${t}.`),!1;cl.set(t,e);for(const n of ao.values())Rh(n,e);for(const n of $T.values())Rh(n,e);return!0}function xo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function qT(e){return e==null?!1:e.settings!==void 0}/**
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
 */const HT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new ko("app","Firebase",HT);/**
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
 */class zT{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const KT=BT;function gp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:ll,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(n||(n=lp()),!n)throw Kn.create("no-options");const i=ao.get(s);if(i){if(oo(n,i.options)&&oo(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const a=new Jv(s);for(const c of cl.values())a.addComponent(c);const l=new zT(n,r,a);return ao.set(s,l),l}function mp(e=ll){const t=ao.get(e);if(!t&&e===ll&&lp())return gp();if(!t)throw Kn.create("no-app",{appName:e});return t}function an(e,t,n){let r=jT[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}Xn(new Cn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const GT="firebase-heartbeat-database",WT=1,ti="firebase-heartbeat-store";let Na=null;function _p(){return Na||(Na=Oo(GT,WT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ti)}catch(n){console.warn(n)}}}}).catch(e=>{throw Kn.create("idb-open",{originalErrorMessage:e.message})})),Na}async function QT(e){try{const n=(await _p()).transaction(ti),r=await n.objectStore(ti).get(yp(e));return await n.done,r}catch(t){if(t instanceof br)Pn.warn(t.message);else{const n=Kn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Pn.warn(n.message)}}}async function Sh(e,t){try{const r=(await _p()).transaction(ti,"readwrite");await r.objectStore(ti).put(t,yp(e)),await r.done}catch(n){if(n instanceof br)Pn.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function yp(e){return`${e.name}!${e.options.appId}`}/**
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
 */const YT=1024,JT=30;class XT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ch();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>JT){const a=ew(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ch(),{heartbeatsToSend:r,unsentEntries:s}=ZT(this._heartbeatsCache.heartbeats),i=io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pn.warn(n),""}}}function Ch(){return new Date().toISOString().substring(0,10)}function ZT(e,t=YT){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ph(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ph(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cp()?up().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Sh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ph(e){return io(JSON.stringify({version:2,heartbeats:e})).length}function ew(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function nw(e){Xn(new Cn("platform-logger",t=>new fT(t),"PRIVATE")),Xn(new Cn("heartbeat",t=>new XT(t),"PRIVATE")),an(al,bh,e),an(al,bh,"esm2020"),an("fire-js","")}nw("");var rw="firebase",sw="12.12.1";/**
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
 */an(rw,sw,"app");var Vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gn,Ep;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,_){function I(){}I.prototype=_.prototype,v.F=_.prototype,v.prototype=new I,v.prototype.constructor=v,v.D=function(b,A,R){for(var T=Array(arguments.length-2),jt=2;jt<arguments.length;jt++)T[jt-2]=arguments[jt];return _.prototype[A].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,I){I||(I=0);const b=Array(16);if(typeof _=="string")for(var A=0;A<16;++A)b[A]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(A=0;A<16;++A)b[A]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=v.g[0],I=v.g[1],A=v.g[2];let R=v.g[3],T;T=_+(R^I&(A^R))+b[0]+3614090360&4294967295,_=I+(T<<7&4294967295|T>>>25),T=R+(A^_&(I^A))+b[1]+3905402710&4294967295,R=_+(T<<12&4294967295|T>>>20),T=A+(I^R&(_^I))+b[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=I+(_^A&(R^_))+b[3]+3250441966&4294967295,I=A+(T<<22&4294967295|T>>>10),T=_+(R^I&(A^R))+b[4]+4118548399&4294967295,_=I+(T<<7&4294967295|T>>>25),T=R+(A^_&(I^A))+b[5]+1200080426&4294967295,R=_+(T<<12&4294967295|T>>>20),T=A+(I^R&(_^I))+b[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=I+(_^A&(R^_))+b[7]+4249261313&4294967295,I=A+(T<<22&4294967295|T>>>10),T=_+(R^I&(A^R))+b[8]+1770035416&4294967295,_=I+(T<<7&4294967295|T>>>25),T=R+(A^_&(I^A))+b[9]+2336552879&4294967295,R=_+(T<<12&4294967295|T>>>20),T=A+(I^R&(_^I))+b[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=I+(_^A&(R^_))+b[11]+2304563134&4294967295,I=A+(T<<22&4294967295|T>>>10),T=_+(R^I&(A^R))+b[12]+1804603682&4294967295,_=I+(T<<7&4294967295|T>>>25),T=R+(A^_&(I^A))+b[13]+4254626195&4294967295,R=_+(T<<12&4294967295|T>>>20),T=A+(I^R&(_^I))+b[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=I+(_^A&(R^_))+b[15]+1236535329&4294967295,I=A+(T<<22&4294967295|T>>>10),T=_+(A^R&(I^A))+b[1]+4129170786&4294967295,_=I+(T<<5&4294967295|T>>>27),T=R+(I^A&(_^I))+b[6]+3225465664&4294967295,R=_+(T<<9&4294967295|T>>>23),T=A+(_^I&(R^_))+b[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=I+(R^_&(A^R))+b[0]+3921069994&4294967295,I=A+(T<<20&4294967295|T>>>12),T=_+(A^R&(I^A))+b[5]+3593408605&4294967295,_=I+(T<<5&4294967295|T>>>27),T=R+(I^A&(_^I))+b[10]+38016083&4294967295,R=_+(T<<9&4294967295|T>>>23),T=A+(_^I&(R^_))+b[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=I+(R^_&(A^R))+b[4]+3889429448&4294967295,I=A+(T<<20&4294967295|T>>>12),T=_+(A^R&(I^A))+b[9]+568446438&4294967295,_=I+(T<<5&4294967295|T>>>27),T=R+(I^A&(_^I))+b[14]+3275163606&4294967295,R=_+(T<<9&4294967295|T>>>23),T=A+(_^I&(R^_))+b[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=I+(R^_&(A^R))+b[8]+1163531501&4294967295,I=A+(T<<20&4294967295|T>>>12),T=_+(A^R&(I^A))+b[13]+2850285829&4294967295,_=I+(T<<5&4294967295|T>>>27),T=R+(I^A&(_^I))+b[2]+4243563512&4294967295,R=_+(T<<9&4294967295|T>>>23),T=A+(_^I&(R^_))+b[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=I+(R^_&(A^R))+b[12]+2368359562&4294967295,I=A+(T<<20&4294967295|T>>>12),T=_+(I^A^R)+b[5]+4294588738&4294967295,_=I+(T<<4&4294967295|T>>>28),T=R+(_^I^A)+b[8]+2272392833&4294967295,R=_+(T<<11&4294967295|T>>>21),T=A+(R^_^I)+b[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=I+(A^R^_)+b[14]+4259657740&4294967295,I=A+(T<<23&4294967295|T>>>9),T=_+(I^A^R)+b[1]+2763975236&4294967295,_=I+(T<<4&4294967295|T>>>28),T=R+(_^I^A)+b[4]+1272893353&4294967295,R=_+(T<<11&4294967295|T>>>21),T=A+(R^_^I)+b[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=I+(A^R^_)+b[10]+3200236656&4294967295,I=A+(T<<23&4294967295|T>>>9),T=_+(I^A^R)+b[13]+681279174&4294967295,_=I+(T<<4&4294967295|T>>>28),T=R+(_^I^A)+b[0]+3936430074&4294967295,R=_+(T<<11&4294967295|T>>>21),T=A+(R^_^I)+b[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=I+(A^R^_)+b[6]+76029189&4294967295,I=A+(T<<23&4294967295|T>>>9),T=_+(I^A^R)+b[9]+3654602809&4294967295,_=I+(T<<4&4294967295|T>>>28),T=R+(_^I^A)+b[12]+3873151461&4294967295,R=_+(T<<11&4294967295|T>>>21),T=A+(R^_^I)+b[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=I+(A^R^_)+b[2]+3299628645&4294967295,I=A+(T<<23&4294967295|T>>>9),T=_+(A^(I|~R))+b[0]+4096336452&4294967295,_=I+(T<<6&4294967295|T>>>26),T=R+(I^(_|~A))+b[7]+1126891415&4294967295,R=_+(T<<10&4294967295|T>>>22),T=A+(_^(R|~I))+b[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=I+(R^(A|~_))+b[5]+4237533241&4294967295,I=A+(T<<21&4294967295|T>>>11),T=_+(A^(I|~R))+b[12]+1700485571&4294967295,_=I+(T<<6&4294967295|T>>>26),T=R+(I^(_|~A))+b[3]+2399980690&4294967295,R=_+(T<<10&4294967295|T>>>22),T=A+(_^(R|~I))+b[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=I+(R^(A|~_))+b[1]+2240044497&4294967295,I=A+(T<<21&4294967295|T>>>11),T=_+(A^(I|~R))+b[8]+1873313359&4294967295,_=I+(T<<6&4294967295|T>>>26),T=R+(I^(_|~A))+b[15]+4264355552&4294967295,R=_+(T<<10&4294967295|T>>>22),T=A+(_^(R|~I))+b[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=I+(R^(A|~_))+b[13]+1309151649&4294967295,I=A+(T<<21&4294967295|T>>>11),T=_+(A^(I|~R))+b[4]+4149444226&4294967295,_=I+(T<<6&4294967295|T>>>26),T=R+(I^(_|~A))+b[11]+3174756917&4294967295,R=_+(T<<10&4294967295|T>>>22),T=A+(_^(R|~I))+b[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=I+(R^(A|~_))+b[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const I=_-this.blockSize,b=this.C;let A=this.h,R=0;for(;R<_;){if(A==0)for(;R<=I;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<_;)if(b[A++]=v.charCodeAt(R++),A==this.blockSize){s(this,b),A=0;break}}else for(;R<_;)if(b[A++]=v[R++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var I=v.length-8;I<v.length;++I)v[I]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,I=0;I<4;++I)for(let b=0;b<32;b+=8)v[_++]=this.g[I]>>>b&255;return v};function i(v,_){var I=l;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=_(v)}function a(v,_){this.h=_;const I=[];let b=!0;for(let A=v.length-1;A>=0;A--){const R=v[A]|0;b&&R==_||(I[A]=R,b=!1)}this.g=I}var l={};function c(v){return-128<=v&&v<128?i(v,function(_){return new a([_|0],_<0?-1:0)}):new a([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return F(h(-v));const _=[];let I=1;for(let b=0;v>=I;b++)_[b]=v/I|0,I*=4294967296;return new a(_,0)}function d(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return F(d(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(_,8));let b=p;for(let R=0;R<v.length;R+=8){var A=Math.min(8,v.length-R);const T=parseInt(v.substring(R,R+A),_);A<8?(A=h(Math.pow(_,A)),b=b.j(A).add(h(T))):(b=b.j(I),b=b.add(h(T)))}return b}var p=c(0),m=c(1),E=c(16777216);e=a.prototype,e.m=function(){if(V(this))return-F(this).m();let v=0,_=1;for(let I=0;I<this.g.length;I++){const b=this.i(I);v+=(b>=0?b:4294967296+b)*_,_*=4294967296}return v},e.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(V(this))return"-"+F(this).toString(v);const _=h(Math.pow(v,6));var I=this;let b="";for(;;){const A=W(I,_).g;I=z(I,A.j(_));let R=((I.g.length>0?I.g[0]:I.h)>>>0).toString(v);if(I=A,D(I))return R+b;for(;R.length<6;)R="0"+R;b=R+b}},e.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function V(v){return v.h==-1}e.l=function(v){return v=z(this,v),V(v)?-1:D(v)?0:1};function F(v){const _=v.g.length,I=[];for(let b=0;b<_;b++)I[b]=~v.g[b];return new a(I,~v.h).add(m)}e.abs=function(){return V(this)?F(this):this},e.add=function(v){const _=Math.max(this.g.length,v.g.length),I=[];let b=0;for(let A=0;A<=_;A++){let R=b+(this.i(A)&65535)+(v.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);b=T>>>16,R&=65535,T&=65535,I[A]=T<<16|R}return new a(I,I[I.length-1]&-2147483648?-1:0)};function z(v,_){return v.add(F(_))}e.j=function(v){if(D(this)||D(v))return p;if(V(this))return V(v)?F(this).j(F(v)):F(F(this).j(v));if(V(v))return F(this.j(F(v)));if(this.l(E)<0&&v.l(E)<0)return h(this.m()*v.m());const _=this.g.length+v.g.length,I=[];for(var b=0;b<2*_;b++)I[b]=0;for(b=0;b<this.g.length;b++)for(let A=0;A<v.g.length;A++){const R=this.i(b)>>>16,T=this.i(b)&65535,jt=v.i(A)>>>16,we=v.i(A)&65535;I[2*b+2*A]+=T*we,B(I,2*b+2*A),I[2*b+2*A+1]+=R*we,B(I,2*b+2*A+1),I[2*b+2*A+1]+=T*jt,B(I,2*b+2*A+1),I[2*b+2*A+2]+=R*jt,B(I,2*b+2*A+2)}for(v=0;v<_;v++)I[v]=I[2*v+1]<<16|I[2*v];for(v=_;v<2*_;v++)I[v]=0;return new a(I,0)};function B(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function q(v,_){this.g=v,this.h=_}function W(v,_){if(D(_))throw Error("division by zero");if(D(v))return new q(p,p);if(V(v))return _=W(F(v),_),new q(F(_.g),F(_.h));if(V(_))return _=W(v,F(_)),new q(F(_.g),_.h);if(v.g.length>30){if(V(v)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,b=_;b.l(v)<=0;)I=it(I),b=it(b);var A=ft(I,1),R=ft(b,1);for(b=ft(b,2),I=ft(I,2);!D(b);){var T=R.add(b);T.l(v)<=0&&(A=A.add(I),R=T),b=ft(b,1),I=ft(I,1)}return _=z(v,A.j(_)),new q(A,_)}for(A=p;v.l(_)>=0;){for(I=Math.max(1,Math.floor(v.m()/_.m())),b=Math.ceil(Math.log(I)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),R=h(I),T=R.j(_);V(T)||T.l(v)>0;)I-=b,R=h(I),T=R.j(_);D(R)&&(R=m),A=A.add(R),v=z(v,T)}return new q(A,v)}e.B=function(v){return W(this,v).h},e.and=function(v){const _=Math.max(this.g.length,v.g.length),I=[];for(let b=0;b<_;b++)I[b]=this.i(b)&v.i(b);return new a(I,this.h&v.h)},e.or=function(v){const _=Math.max(this.g.length,v.g.length),I=[];for(let b=0;b<_;b++)I[b]=this.i(b)|v.i(b);return new a(I,this.h|v.h)},e.xor=function(v){const _=Math.max(this.g.length,v.g.length),I=[];for(let b=0;b<_;b++)I[b]=this.i(b)^v.i(b);return new a(I,this.h^v.h)};function it(v){const _=v.g.length+1,I=[];for(let b=0;b<_;b++)I[b]=v.i(b)<<1|v.i(b-1)>>>31;return new a(I,v.h)}function ft(v,_){const I=_>>5;_%=32;const b=v.g.length-I,A=[];for(let R=0;R<b;R++)A[R]=_>0?v.i(R+I)>>>_|v.i(R+I+1)<<32-_:v.i(R+I);return new a(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ep=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Gn=a}).apply(typeof Vh<"u"?Vh:typeof self<"u"?self:typeof window<"u"?window:{});var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vp,Vs,Tp,Hi,ul,wp,Ip,Ap;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof xi=="object"&&xi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break t;f=f[C]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&t(f,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var f=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&f.push([g,u[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function c(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=c,h.apply(null,arguments)}function d(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,C,P){for(var H=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)H[ht-2]=arguments[ht];return u.prototype[C].apply(g,H)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function E(o){const u=o.length;if(u>0){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function D(o,u){for(let g=1;g<arguments.length;g++){const C=arguments[g];var f=typeof C;if(f=f!="object"?f:C?Array.isArray(C)?"array":f:"null",f=="array"||f=="object"&&typeof C.length=="number"){f=o.length||0;const P=C.length||0;o.length=f+P;for(let H=0;H<P;H++)o[f+H]=C[H]}else o.push(C)}}class V{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){a.setTimeout(()=>{throw o},0)}function z(){var o=v;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class B{constructor(){this.h=this.g=null}add(u,f){const g=q.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var q=new V(()=>new W,o=>o.reset());class W{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let it,ft=!1,v=new B,_=()=>{const o=Promise.resolve(void 0);it=()=>{o.then(I)}};function I(){for(var o;o=z();){try{o.h.call(o.g)}catch(f){F(f)}var u=q;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ft=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o}();function T(o){return/^[\s\xa0]*$/.test(o)}function jt(o,u){A.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p(jt,A),jt.prototype.init=function(o,u){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&jt.Z.h.call(this)},jt.prototype.h=function(){jt.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var we="closure_listenable_"+(Math.random()*1e6|0),$t=0;function vt(o,u,f,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++$t,this.da=this.fa=!1}function mt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ie(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function Qe(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function Re(o){const u={};for(const f in o)u[f]=o[f];return u}const ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gn(o,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let P=0;P<ee.length;P++)f=ee[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function Fe(o){this.src=o,this.g={},this.h=0}Fe.prototype.add=function(o,u,f,g,C){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const H=ae(o,u,g,C);return H>-1?(u=o[H],f||(u.fa=!1)):(u=new vt(u,this.src,P,!!g,C),u.fa=f,o.push(u)),u};function Ue(o,u){const f=u.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,u,void 0),P;(P=C>=0)&&Array.prototype.splice.call(g,C,1),P&&(mt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function ae(o,u,f,g){for(let C=0;C<o.length;++C){const P=o[C];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return C}return-1}var O="closure_lm_"+(Math.random()*1e6|0),Y={};function G(o,u,f,g,C){if(Array.isArray(u)){for(let P=0;P<u.length;P++)G(o,u[P],f,g,C);return null}return f=K(f),o&&o[we]?o.J(u,f,l(g)?!!g.capture:!1,C):Z(o,u,f,!1,g,C)}function Z(o,u,f,g,C,P){if(!u)throw Error("Invalid event type");const H=l(C)?!!C.capture:!!C;let ht=L(o);if(ht||(o[O]=ht=new Fe(o)),f=ht.add(u,f,g,H,P),f.proxy)return f;if(g=dt(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)R||(C=H),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(S(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function dt(){function o(f){return u.call(o.src,o.listener,f)}const u=N;return o}function y(o,u,f,g,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)y(o,u[P],f,g,C);else g=l(g)?!!g.capture:!!g,f=K(f),o&&o[we]?(o=o.i,P=String(u).toString(),P in o.g&&(u=o.g[P],f=ae(u,f,g,C),f>-1&&(mt(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[P],o.h--)))):o&&(o=L(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ae(u,f,g,C)),(f=o>-1?u[o]:null)&&w(f))}function w(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[we])Ue(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(S(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=L(u))?(Ue(f,o),f.h==0&&(f.src=null,u[O]=null)):mt(o)}}}function S(o){return o in Y?Y[o]:Y[o]="on"+o}function N(o,u){if(o.da)o=!0;else{u=new jt(u,this);const f=o.listener,g=o.ha||o.src;o.fa&&w(o),o=f.call(g,u)}return o}function L(o){return o=o[O],o instanceof Fe?o:null}var k="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(o){return typeof o=="function"?o:(o[k]||(o[k]=function(u){return o.handleEvent(u)}),o[k])}function $(){b.call(this),this.i=new Fe(this),this.M=this,this.G=null}p($,b),$.prototype[we]=!0,$.prototype.removeEventListener=function(o,u,f,g){y(this,o,u,f,g)};function j(o,u){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new A(u,o);else if(u instanceof A)u.target=u.target||o;else{var C=u;u=new A(g,o),gn(u,C)}C=!0;let P,H;if(f)for(H=f.length-1;H>=0;H--)P=u.g=f[H],C=U(P,g,!0,u)&&C;if(P=u.g=o,C=U(P,g,!0,u)&&C,C=U(P,g,!1,u)&&C,f)for(H=0;H<f.length;H++)P=u.g=f[H],C=U(P,g,!1,u)&&C}$.prototype.N=function(){if($.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let g=0;g<f.length;g++)mt(f[g]);delete o.g[u],o.h--}}this.G=null},$.prototype.J=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},$.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function U(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let P=0;P<u.length;++P){const H=u[P];if(H&&!H.da&&H.capture==f){const ht=H.listener,Wt=H.ha||H.src;H.fa&&Ue(o.i,H),C=ht.call(Wt,g)!==!1&&C}}return C&&!g.defaultPrevented}function nt(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Q(o){o.g=nt(()=>{o.g=null,o.i&&(o.i=!1,Q(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class tt extends b{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rt(o){b.call(this),this.h=o,this.g={}}p(rt,b);var _t=[];function Tt(o){Ie(o.g,function(u,f){this.g.hasOwnProperty(f)&&w(u)},o),o.g={}}rt.prototype.N=function(){rt.Z.N.call(this),Tt(this)},rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wt=a.JSON.stringify,Mt=a.JSON.parse,Gt=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Se(){}function Ce(){}var Be={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vr(){A.call(this,"d")}p(Vr,A);function ne(){A.call(this,"c")}p(ne,A);var Jt={},cs=null;function ir(){return cs=cs||new $}Jt.Ia="serverreachability";function Fc(o){A.call(this,Jt.Ia,o)}p(Fc,A);function us(o){const u=ir();j(u,new Fc(u))}Jt.STAT_EVENT="statevent";function Uc(o,u){A.call(this,Jt.STAT_EVENT,o),this.stat=u}p(Uc,A);function me(o){const u=ir();j(u,new Uc(u,o))}Jt.Ja="timingevent";function Bc(o,u){A.call(this,Jt.Ja,o),this.size=u}p(Bc,A);function hs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function fs(){this.g=!0}fs.prototype.ua=function(){this.g=!1};function bm(o,u,f,g,C,P){o.info(function(){if(o.g)if(P){var H="",ht=P.split("&");for(let Ct=0;Ct<ht.length;Ct++){var Wt=ht[Ct].split("=");if(Wt.length>1){const Xt=Wt[0];Wt=Wt[1];const Je=Xt.split("_");H=Je.length>=2&&Je[1]=="type"?H+(Xt+"="+Wt+"&"):H+(Xt+"=redacted&")}}}else H=null;else H=P;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+H})}function Rm(o,u,f,g,C,P,H){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+P+" "+H})}function Dr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Cm(o,f)+(g?" "+g:"")})}function Sm(o,u){o.info(function(){return"TIMEOUT: "+u})}fs.prototype.info=function(){};function Cm(o,u){if(!o.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var f=P[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let H=1;H<g.length;H++)g[H]=""}}}}return wt(P)}catch{return u}}var wi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$c;function ta(){}p(ta,Se),ta.prototype.g=function(){return new XMLHttpRequest},$c=new ta;function ds(o){return encodeURIComponent(String(o))}function Pm(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function kn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.S=g||1,this.V=new rt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qc}function qc(){this.i=null,this.g="",this.h=!1}var Hc={},ea={};function na(o,u,f){o.M=1,o.A=Ai(Ye(u)),o.u=f,o.R=!0,zc(o,null)}function zc(o,u){o.F=Date.now(),Ii(o),o.B=Ye(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),su(f.i,"t",g),o.C=0,f=o.j.L,o.h=new qc,o.g=wu(o.j,f?u:null,!o.u),o.P>0&&(o.O=new tt(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,g=o.ba;var C="readystatechange";Array.isArray(C)||(C&&(_t[0]=C.toString()),C=_t);for(let P=0;P<C.length;P++){const H=G(f,C[P],g||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=o.J?Re(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),us(),bm(o.i,o.v,o.B,o.l,o.S,o.u)}kn.prototype.ba=function(o){o=o.target;const u=this.O;u&&Mn(o)==3?u.j():this.Y(o)},kn.prototype.Y=function(o){try{if(o==this.g)t:{const ht=Mn(this.g),Wt=this.g.ya(),Ct=this.g.ca();if(!(ht<3)&&(ht!=3||this.g&&(this.h.h||this.g.la()||hu(this.g)))){this.K||ht!=4||Wt==7||(Wt==8||Ct<=0?us(3):us(2)),ra(this);var u=this.g.ca();this.X=u;var f=Vm(this);if(this.o=u==200,Rm(this.i,this.v,this.B,this.l,this.S,ht,u),this.o){if(this.U&&!this.L){e:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var P=g;break e}}P=null}if(o=P)Dr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,sa(this,o);else{this.o=!1,this.m=3,me(12),or(this),ps(this);break t}}if(this.R){o=!0;let Xt;for(;!this.K&&this.C<f.length;)if(Xt=Dm(this,f),Xt==ea){ht==4&&(this.m=4,me(14),o=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Hc){this.m=4,me(15),Dr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Dr(this.i,this.l,Xt,null),sa(this,Xt);if(Kc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||f.length!=0||this.h.h||(this.m=1,me(16),o=!1),this.o=this.o&&o,!o)Dr(this.i,this.l,f,"[Invalid Chunked Response]"),or(this),ps(this);else if(f.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),fa(H),H.P=!0,me(11))}}else Dr(this.i,this.l,f,null),sa(this,f);ht==4&&or(this),this.o&&!this.K&&(ht==4?yu(this.j,this):(this.o=!1,Ii(this)))}else zm(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,me(12)):(this.m=0,me(13)),or(this),ps(this)}}}catch{}finally{}};function Vm(o){if(!Kc(o))return o.g.la();const u=hu(o.g);if(u==="")return"";let f="";const g=u.length,C=Mn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return or(o),ps(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<g;P++)o.h.h=!0,f+=o.h.i.decode(u[P],{stream:!(C&&P==g-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function Kc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Dm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?ea:(f=Number(u.substring(f,g)),isNaN(f)?Hc:(g+=1,g+f>u.length?ea:(u=u.slice(g,g+f),o.C=g+f,u)))}kn.prototype.cancel=function(){this.K=!0,or(this)};function Ii(o){o.T=Date.now()+o.H,Gc(o,o.H)}function Gc(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=hs(h(o.aa,o),u)}function ra(o){o.D&&(a.clearTimeout(o.D),o.D=null)}kn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Sm(this.i,this.B),this.M!=2&&(us(),me(17)),or(this),this.m=2,ps(this)):Gc(this,this.T-o)};function ps(o){o.j.I==0||o.K||yu(o.j,o)}function or(o){ra(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Tt(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function sa(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||ia(f.h,o))){if(!o.L&&ia(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Pi(f),Si(f);else break t;ha(f),me(18)}}else f.xa=C[1],0<f.xa-f.K&&C[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=hs(h(f.Va,f),6e3));Yc(f.h)<=1&&f.ta&&(f.ta=void 0)}else lr(f,11)}else if((o.L||f.g==o)&&Pi(f),!T(u))for(C=f.Ba.g.parse(u),u=0;u<C.length;u++){let Ct=C[u];const Xt=Ct[0];if(!(Xt<=f.K))if(f.K=Xt,Ct=Ct[1],f.I==2)if(Ct[0]=="c"){f.M=Ct[1],f.ba=Ct[2];const Je=Ct[3];Je!=null&&(f.ka=Je,f.j.info("VER="+f.ka));const cr=Ct[4];cr!=null&&(f.za=cr,f.j.info("SVER="+f.za));const Ln=Ct[5];Ln!=null&&typeof Ln=="number"&&Ln>0&&(g=1.5*Ln,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Fn=o.g;if(Fn){const Di=Fn.g?Fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var P=g.h;P.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(oa(P,P.h),P.h=null))}if(g.G){const da=Fn.g?Fn.g.getResponseHeader("X-HTTP-Session-Id"):null;da&&(g.wa=da,Nt(g.J,g.G,da))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var H=o;if(g.na=Tu(g,g.L?g.ba:null,g.W),H.L){Jc(g.h,H);var ht=H,Wt=g.O;Wt&&(ht.H=Wt),ht.D&&(ra(ht),Ii(ht)),g.g=H}else mu(g);f.i.length>0&&Ci(f)}else Ct[0]!="stop"&&Ct[0]!="close"||lr(f,7);else f.I==3&&(Ct[0]=="stop"||Ct[0]=="close"?Ct[0]=="stop"?lr(f,7):ua(f):Ct[0]!="noop"&&f.l&&f.l.qa(Ct),f.A=0)}}us(4)}catch{}}var Nm=class{constructor(o,u){this.g=o,this.map=u}};function Wc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Yc(o){return o.h?1:o.g?o.g.size:0}function ia(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function oa(o,u){o.g?o.g.add(u):o.h=u}function Jc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Wc.prototype.cancel=function(){if(this.i=Xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Xc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return E(o.i)}var Zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function km(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let C,P=null;g>=0?(C=o[f].substring(0,g),P=o[f].substring(g+1)):C=o[f],u(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function On(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof On?(this.l=o.l,gs(this,o.j),this.o=o.o,this.g=o.g,ms(this,o.u),this.h=o.h,aa(this,iu(o.i)),this.m=o.m):o&&(u=String(o).match(Zc))?(this.l=!1,gs(this,u[1]||"",!0),this.o=_s(u[2]||""),this.g=_s(u[3]||"",!0),ms(this,u[4]),this.h=_s(u[5]||"",!0),aa(this,u[6]||"",!0),this.m=_s(u[7]||"")):(this.l=!1,this.i=new Es(null,this.l))}On.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(ys(u,tu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ys(u,tu,!0),"@"),o.push(ds(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ys(f,f.charAt(0)=="/"?Mm:xm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ys(f,Fm)),o.join("")},On.prototype.resolve=function(o){const u=Ye(this);let f=!!o.j;f?gs(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var g=o.h;if(f)ms(u,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=u.h.lastIndexOf("/");C!=-1&&(g=u.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const P=[];for(let H=0;H<C.length;){const ht=C[H++];ht=="."?g&&H==C.length&&P.push(""):ht==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&H==C.length&&P.push("")):(P.push(ht),g=!0)}g=P.join("/")}else g=C}return f?u.h=g:f=o.i.toString()!=="",f?aa(u,iu(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Ye(o){return new On(o)}function gs(o,u,f){o.j=f?_s(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ms(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function aa(o,u,f){u instanceof Es?(o.i=u,Um(o.i,o.l)):(f||(u=ys(u,Lm)),o.i=new Es(u,o.l))}function Nt(o,u,f){o.i.set(u,f)}function Ai(o){return Nt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function _s(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ys(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Om),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Om(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var tu=/[#\/\?@]/g,xm=/[#\?:]/g,Mm=/[#\?]/g,Lm=/[#\?@]/g,Fm=/#/g;function Es(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ar(o){o.g||(o.g=new Map,o.h=0,o.i&&km(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}e=Es.prototype,e.add=function(o,u){ar(this),this.i=null,o=Nr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function eu(o,u){ar(o),u=Nr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function nu(o,u){return ar(o),u=Nr(o,u),o.g.has(u)}e.forEach=function(o,u){ar(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(u,C,g,this)},this)},this)};function ru(o,u){ar(o);let f=[];if(typeof u=="string")nu(o,u)&&(f=f.concat(o.g.get(Nr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}e.set=function(o,u){return ar(this),this.i=null,o=Nr(this,o),nu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=ru(this,o),o.length>0?String(o[0]):u):u};function su(o,u,f){eu(o,u),f.length>0&&(o.i=null,o.g.set(Nr(o,u),E(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var f=u[g];const C=ds(f);f=ru(this,f);for(let P=0;P<f.length;P++){let H=C;f[P]!==""&&(H+="="+ds(f[P])),o.push(H)}}return this.i=o.join("&")};function iu(o){const u=new Es;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Nr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Um(o,u){u&&!o.j&&(ar(o),o.i=null,o.g.forEach(function(f,g){const C=g.toLowerCase();g!=C&&(eu(this,g),su(this,C,f))},o)),o.j=u}function Bm(o,u){const f=new fs;if(a.Image){const g=new Image;g.onload=d(xn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=d(xn,f,"TestLoadImage: error",!1,u,g),g.onabort=d(xn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=d(xn,f,"TestLoadImage: timeout",!1,u,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function jm(o,u){const f=new fs,g=new AbortController,C=setTimeout(()=>{g.abort(),xn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(C),P.ok?xn(f,"TestPingServer: ok",!0,u):xn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),xn(f,"TestPingServer: error",!1,u)})}function xn(o,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function $m(){this.g=new Gt}function la(o){this.i=o.Sb||null,this.h=o.ab||!1}p(la,Se),la.prototype.g=function(){return new bi(this.i,this.h)};function bi(o,u){$.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(bi,$),e=bi.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Ts(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ou(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function ou(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?vs(this):Ts(this),this.readyState==3&&ou(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,vs(this))},e.Na=function(o){this.g&&(this.response=o,vs(this))},e.ga=function(){this.g&&vs(this)};function vs(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ts(o)}e.setRequestHeader=function(o,u){this.A.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ts(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function au(o){let u="";return Ie(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function ca(o,u,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=au(f),typeof o=="string"?f!=null&&ds(f):Nt(o,u,f))}function Lt(o){$.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Lt,$);var qm=/^https?$/i,Hm=["POST","PUT"];e=Lt.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$c.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){lu(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),C=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Hm,u,void 0)>=0)||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,H]of f)this.g.setRequestHeader(P,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){lu(this,P)}};function lu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,cu(o),Ri(o)}function cu(o){o.A||(o.A=!0,j(o,"complete"),j(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,j(this,"complete"),j(this,"abort"),Ri(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),Lt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?uu(this):this.Xa())},e.Xa=function(){uu(this)};function uu(o){if(o.h&&typeof i<"u"){if(o.v&&Mn(o)==4)setTimeout(o.Ca.bind(o),0);else if(j(o,"readystatechange"),Mn(o)==4){o.h=!1;try{const P=o.ca();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var f;if(!(f=u)){var g;if(g=P===0){let H=String(o.D).match(Zc)[1]||null;!H&&a.self&&a.self.location&&(H=a.self.location.protocol.slice(0,-1)),g=!qm.test(H?H.toLowerCase():"")}f=g}if(f)j(o,"complete"),j(o,"success");else{o.o=6;try{var C=Mn(o)>2?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.ca()+"]",cu(o)}}finally{Ri(o)}}}}function Ri(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||j(o,"ready");try{f.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function Mn(o){return o.g?o.g.readyState:0}e.ca=function(){try{return Mn(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Mt(u)}};function hu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function zm(o){const u={};o=(o.g&&Mn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(T(o[g]))continue;var f=Pm(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[C]||[];u[C]=P,P.push(f)}Qe(u,function(g){return g.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ws(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function fu(o){this.za=0,this.i=[],this.j=new fs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ws("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ws("baseRetryDelayMs",5e3,o),this.Za=ws("retryDelaySeedMs",1e4,o),this.Ta=ws("forwardChannelMaxRetries",2,o),this.va=ws("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Wc(o&&o.concurrentRequestLimit),this.Ba=new $m,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=fu.prototype,e.ka=8,e.I=1,e.connect=function(o,u,f,g){me(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Tu(this,null,this.W),Ci(this)};function ua(o){if(du(o),o.I==3){var u=o.V++,f=Ye(o.J);if(Nt(f,"SID",o.M),Nt(f,"RID",u),Nt(f,"TYPE","terminate"),Is(o,f),u=new kn(o,o.j,u),u.M=2,u.A=Ai(Ye(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=wu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ii(u)}vu(o)}function Si(o){o.g&&(fa(o),o.g.cancel(),o.g=null)}function du(o){Si(o),o.v&&(a.clearTimeout(o.v),o.v=null),Pi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ci(o){if(!Qc(o.h)&&!o.m){o.m=!0;var u=o.Ea;it||_(),ft||(it(),ft=!0),v.add(u,o),o.D=0}}function Km(o,u){return Yc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=hs(h(o.Ea,o,u),Eu(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const C=new kn(this,this.j,o);let P=this.o;if(this.U&&(P?(P=Re(P),gn(P,this.U)):P=this.U),this.u!==null||this.R||(C.J=P,P=null),this.S)t:{for(var u=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=f;break t}if(u===4096||f===this.i.length-1){u=f+1;break t}}u=1e3}else u=1e3;u=gu(this,C,u),f=Ye(this.J),Nt(f,"RID",o),Nt(f,"CVER",22),this.G&&Nt(f,"X-HTTP-Session-Id",this.G),Is(this,f),P&&(this.R?u="headers="+ds(au(P))+"&"+u:this.u&&ca(f,this.u,P)),oa(this.h,C),this.Ra&&Nt(f,"TYPE","init"),this.S?(Nt(f,"$req",u),Nt(f,"SID","null"),C.U=!0,na(C,f,null)):na(C,f,u),this.I=2}}else this.I==3&&(o?pu(this,o):this.i.length==0||Qc(this.h)||pu(this))};function pu(o,u){var f;u?f=u.l:f=o.V++;const g=Ye(o.J);Nt(g,"SID",o.M),Nt(g,"RID",f),Nt(g,"AID",o.K),Is(o,g),o.u&&o.o&&ca(g,o.u,o.o),f=new kn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=gu(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),oa(o.h,f),na(f,g,u)}function Is(o,u){o.H&&Ie(o.H,function(f,g){Nt(u,g,f)}),o.l&&Ie({},function(f,g){Nt(u,g,f)})}function gu(o,u,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;t:{var C=o.i;let ht=-1;for(;;){const Wt=["count="+f];ht==-1?f>0?(ht=C[0].g,Wt.push("ofs="+ht)):ht=0:Wt.push("ofs="+ht);let Ct=!0;for(let Xt=0;Xt<f;Xt++){var P=C[Xt].g;const Je=C[Xt].map;if(P-=ht,P<0)ht=Math.max(0,C[Xt].g-100),Ct=!1;else try{P="req"+P+"_"||"";try{var H=Je instanceof Map?Je:Object.entries(Je);for(const[cr,Ln]of H){let Fn=Ln;l(Ln)&&(Fn=wt(Ln)),Wt.push(P+cr+"="+encodeURIComponent(Fn))}}catch(cr){throw Wt.push(P+"type="+encodeURIComponent("_badmap")),cr}}catch{g&&g(Je)}}if(Ct){H=Wt.join("&");break t}}H=void 0}return o=o.i.splice(0,f),u.G=o,H}function mu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;it||_(),ft||(it(),ft=!0),v.add(u,o),o.A=0}}function ha(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=hs(h(o.Da,o),Eu(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,_u(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=hs(h(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,me(10),Si(this),_u(this))};function fa(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function _u(o){o.g=new kn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Ye(o.na);Nt(u,"RID","rpc"),Nt(u,"SID",o.M),Nt(u,"AID",o.K),Nt(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Nt(u,"TO",o.ia),Nt(u,"TYPE","xmlhttp"),Is(o,u),o.u&&o.o&&ca(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Ai(Ye(u)),f.u=null,f.R=!0,zc(f,o)}e.Va=function(){this.C!=null&&(this.C=null,Si(this),ha(this),me(19))};function Pi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function yu(o,u){var f=null;if(o.g==u){Pi(o),fa(o),o.g=null;var g=2}else if(ia(o.h,u))f=u.G,Jc(o.h,u),g=1;else return;if(o.I!=0){if(u.o)if(g==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var C=o.D;g=ir(),j(g,new Bc(g,f)),Ci(o)}else mu(o);else if(C=u.m,C==3||C==0&&u.X>0||!(g==1&&Km(o,u)||g==2&&ha(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),C){case 1:lr(o,5);break;case 4:lr(o,10);break;case 3:lr(o,6);break;default:lr(o,2)}}}function Eu(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function lr(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),g=o.Ua;const C=!g;g=new On(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||gs(g,"https"),Ai(g),C?Bm(g.toString(),f):jm(g.toString(),f)}else me(2);o.I=0,o.l&&o.l.pa(u),vu(o),du(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),me(2)):(this.j.info("Failed to ping google.com"),me(1))};function vu(o){if(o.I=0,o.ja=[],o.l){const u=Xc(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ja,u),D(o.ja,o.i),o.h.i.length=0,E(o.i),o.i.length=0),o.l.oa()}}function Tu(o,u,f){var g=f instanceof On?Ye(f):new On(f);if(g.g!="")u&&(g.g=u+"."+g.g),ms(g,g.u);else{var C=a.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const P=new On(null);g&&gs(P,g),u&&(P.g=u),C&&ms(P,C),f&&(P.h=f),g=P}return f=o.G,u=o.wa,f&&u&&Nt(g,f,u),Nt(g,"VER",o.ka),Is(o,g),g}function wu(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Lt(new la({ab:f})):new Lt(o.ma),u.Fa(o.L),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iu(){}e=Iu.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function Vi(){}Vi.prototype.g=function(o,u){return new Pe(o,u)};function Pe(o,u){$.call(this),this.g=new fu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!T(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!T(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kr(this)}p(Pe,$),Pe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Pe.prototype.close=function(){ua(this.g)},Pe.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=wt(o),o=f);u.i.push(new Nm(u.Ya++,o)),u.I==3&&Ci(u)},Pe.prototype.N=function(){this.g.l=null,delete this.j,ua(this.g),delete this.g,Pe.Z.N.call(this)};function Au(o){Vr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const f in u){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Au,Vr);function bu(){ne.call(this),this.status=1}p(bu,ne);function kr(o){this.g=o}p(kr,Iu),kr.prototype.ra=function(){j(this.g,"a")},kr.prototype.qa=function(o){j(this.g,new Au(o))},kr.prototype.pa=function(o){j(this.g,new bu)},kr.prototype.oa=function(){j(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,Pe.prototype.send=Pe.prototype.o,Pe.prototype.open=Pe.prototype.m,Pe.prototype.close=Pe.prototype.close,Ap=function(){return new Vi},Ip=function(){return ir()},wp=Jt,ul={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},wi.NO_ERROR=0,wi.TIMEOUT=8,wi.HTTP_ERROR=6,Hi=wi,jc.COMPLETE="complete",Tp=jc,Ce.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",$.prototype.listen=$.prototype.J,Vs=Ce,Lt.prototype.listenOnce=Lt.prototype.K,Lt.prototype.getLastError=Lt.prototype.Ha,Lt.prototype.getLastErrorCode=Lt.prototype.ya,Lt.prototype.getStatus=Lt.prototype.ca,Lt.prototype.getResponseJson=Lt.prototype.La,Lt.prototype.getResponseText=Lt.prototype.la,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Fa,vp=Lt}).apply(typeof xi<"u"?xi:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ue{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");/**
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
 */let ss="12.12.0";function iw(e){ss=e}/**
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
 */const yr=new fp("@firebase/firestore");function Lr(){return yr.logLevel}function J(e,...t){if(yr.logLevel<=Et.DEBUG){const n=t.map(Zl);yr.debug(`Firestore (${ss}): ${e}`,...n)}}function Vn(e,...t){if(yr.logLevel<=Et.ERROR){const n=t.map(Zl);yr.error(`Firestore (${ss}): ${e}`,...n)}}function Er(e,...t){if(yr.logLevel<=Et.WARN){const n=t.map(Zl);yr.warn(`Firestore (${ss}): ${e}`,...n)}}function Zl(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function st(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,bp(e,r,n)}function bp(e,t,n){let r=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Vn(r),new Error(r)}function Rt(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||bp(t,s,r)}function ct(e,t){return e}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends br{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Rp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ow{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ue.UNAUTHENTICATED))}shutdown(){}}class aw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lw{constructor(t){this.t=t,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Rt(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wn,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wn)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Rt(typeof r.accessToken=="string",31837,{l:r}),new Rp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Rt(t===null||typeof t=="string",2055,{h:t}),new ue(t)}}class cw{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class uw{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new cw(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hw{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qT(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Rt(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dh(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Rt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fw(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class tc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=fw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function pt(e,t){return e<t?-1:e>t?1:0}function hl(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=e.charAt(r),i=t.charAt(r);if(s!==i)return ka(s)===ka(i)?pt(s,i):ka(s)?1:-1}return pt(e.length,t.length)}const dw=55296,pw=57343;function ka(e){const t=e.charCodeAt(0);return t>=dw&&t<=pw}function Zr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */const Nh="__name__";class en{constructor(t,n,r){n===void 0?n=0:n>t.length&&st(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&st(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return en.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof en?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=en.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return pt(t.length,n.length)}static compareSegments(t,n){const r=en.isNumericId(t),s=en.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?en.extractNumericId(t).compare(en.extractNumericId(n)):hl(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Gn.fromString(t.substring(4,t.length-2))}}class Dt extends en{construct(t,n,r){return new Dt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new X(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Dt(n)}static emptyPath(){return new Dt([])}}const gw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class se extends en{construct(t,n,r){return new se(t,n,r)}static isValidIdentifier(t){return gw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),se.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nh}static keyField(){return new se([Nh])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new X(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new X(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new X(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new se(n)}static emptyPath(){return new se([])}}/**
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
 */class et{constructor(t){this.path=t}static fromPath(t){return new et(Dt.fromString(t))}static fromName(t){return new et(Dt.fromString(t).popFirst(5))}static empty(){return new et(Dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Dt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Dt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new et(new Dt(t.slice()))}}/**
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
 */function Sp(e,t,n){if(!n)throw new X(x.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mw(e,t,n,r){if(t===!0&&r===!0)throw new X(x.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function kh(e){if(!et.isDocumentKey(e))throw new X(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Oh(e){if(et.isDocumentKey(e))throw new X(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Cp(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function Mo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":st(12329,{type:typeof e})}function ei(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new X(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mo(e);throw new X(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */function Kt(e,t){const n={typeString:e};return t&&(n.value=t),n}function mi(e,t){if(!Cp(e))throw new X(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(x.INVALID_ARGUMENT,n);return!0}/**
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
 */const xh=-62135596800,Mh=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(t){return kt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Mh);return new kt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<xh)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mh}_compareTo(t){return this.seconds===t.seconds?pt(this.nanoseconds,t.nanoseconds):pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:kt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(mi(t,kt._jsonSchema))return new kt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-xh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}kt._jsonSchemaVersion="firestore/timestamp/1.0",kt._jsonSchema={type:Kt("string",kt._jsonSchemaVersion),seconds:Kt("number"),nanoseconds:Kt("number")};/**
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
 */class ot{static fromTimestamp(t){return new ot(t)}static min(){return new ot(new kt(0,0))}static max(){return new ot(new kt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ni=-1;function _w(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ot.fromTimestamp(r===1e9?new kt(n+1,0):new kt(n,r));return new Zn(s,et.empty(),t)}function yw(e){return new Zn(e.readTime,e.key,ni)}class Zn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Zn(ot.min(),et.empty(),ni)}static max(){return new Zn(ot.max(),et.empty(),ni)}}function Ew(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=et.comparator(e.documentKey,t.documentKey),n!==0?n:pt(e.largestBatchId,t.largestBatchId))}/**
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
 */const vw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function is(e){if(e.code!==x.FAILED_PRECONDITION||e.message!==vw)throw e;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&st(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):M.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):M.reject(n)}static resolve(t){return new M((n,r)=>{n(t)})}static reject(t){return new M((n,r)=>{r(t)})}static waitFor(t){return new M((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(t){let n=M.resolve(!1);for(const r of t)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new M((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(t[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new M((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function ww(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function os(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Lo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Lo.ce=-1;/**
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
 */const ec=-1;function Fo(e){return e==null}function lo(e){return e===0&&1/e==-1/0}function Iw(e){return typeof e=="number"&&Number.isInteger(e)&&!lo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const Pp="";function Aw(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Lh(t)),t=bw(e.get(n),t);return Lh(t)}function bw(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case Pp:n+="";break;default:n+=i}}return n}function Lh(e){return e+Pp+""}/**
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
 */function Fh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Rr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Vp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class xt{constructor(t,n){this.comparator=t,this.root=n||re.EMPTY}insert(t,n){return new xt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,re.BLACK,null,null))}remove(t){return new xt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,re.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Mi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Mi(this.root,t,this.comparator,!0)}}class Mi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class re{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??re.RED,this.left=s??re.EMPTY,this.right=i??re.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new re(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return re.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return re.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,re.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw st(43730,{key:this.key,value:this.value});if(this.right.isRed())throw st(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw st(27949);return t+(this.isRed()?0:1)}}re.EMPTY=null,re.RED=!0,re.BLACK=!1;re.EMPTY=new class{constructor(){this.size=0}get key(){throw st(57766)}get value(){throw st(16141)}get color(){throw st(16727)}get left(){throw st(29726)}get right(){throw st(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new re(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Yt{constructor(t){this.comparator=t,this.data=new xt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Uh(this.data.getIterator())}getIteratorFrom(t){return new Uh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Yt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Yt(this.comparator);return n.data=t,n}}class Uh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qe{constructor(t){this.fields=t,t.sort(se.comparator)}static empty(){return new qe([])}unionWith(t){let n=new Yt(se.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new qe(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Zr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Dp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class oe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Dp("Invalid base64 string: "+i):i}}(t);return new oe(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new oe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}oe.EMPTY_BYTE_STRING=new oe("");const Rw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(e){if(Rt(!!e,39018),typeof e=="string"){let t=0;const n=Rw.exec(e);if(Rt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ut(e.seconds),nanos:Ut(e.nanos)}}function Ut(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function er(e){return typeof e=="string"?oe.fromBase64String(e):oe.fromUint8Array(e)}/**
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
 */const Np="server_timestamp",kp="__type__",Op="__previous_value__",xp="__local_write_time__";function nc(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[kp])==null?void 0:r.stringValue)===Np}function Uo(e){const t=e.mapValue.fields[Op];return nc(t)?Uo(t):t}function ri(e){const t=tr(e.mapValue.fields[xp].timestampValue);return new kt(t.seconds,t.nanos)}/**
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
 */class Sw{constructor(t,n,r,s,i,a,l,c,h,d,p){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const co="(default)";class si{constructor(t,n){this.projectId=t,this.database=n||co}static empty(){return new si("","")}get isDefaultDatabase(){return this.database===co}isEqual(t){return t instanceof si&&t.projectId===this.projectId&&t.database===this.database}}function Cw(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new X(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new si(e.options.projectId,t)}/**
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
 */const Mp="__type__",Pw="__max__",Li={mapValue:{}},Lp="__vector__",uo="value";function nr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?nc(e)?4:Dw(e)?9007199254740991:Vw(e)?10:11:st(28295,{value:e})}function pn(e,t){if(e===t)return!0;const n=nr(e);if(n!==nr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ri(e).isEqual(ri(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=tr(s.timestampValue),l=tr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return er(s.bytesValue).isEqual(er(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Ut(s.geoPointValue.latitude)===Ut(i.geoPointValue.latitude)&&Ut(s.geoPointValue.longitude)===Ut(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ut(s.integerValue)===Ut(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ut(s.doubleValue),l=Ut(i.doubleValue);return a===l?lo(a)===lo(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],pn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Fh(a)!==Fh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!pn(a[c],l[c])))return!1;return!0}(e,t);default:return st(52216,{left:e})}}function ii(e,t){return(e.values||[]).find(n=>pn(n,t))!==void 0}function ts(e,t){if(e===t)return 0;const n=nr(e),r=nr(t);if(n!==r)return pt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pt(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Ut(i.integerValue||i.doubleValue),c=Ut(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return Bh(e.timestampValue,t.timestampValue);case 4:return Bh(ri(e),ri(t));case 5:return hl(e.stringValue,t.stringValue);case 6:return function(i,a){const l=er(i),c=er(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=pt(l[h],c[h]);if(d!==0)return d}return pt(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=pt(Ut(i.latitude),Ut(a.latitude));return l!==0?l:pt(Ut(i.longitude),Ut(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return jh(e.arrayValue,t.arrayValue);case 10:return function(i,a){var m,E,D,V;const l=i.fields||{},c=a.fields||{},h=(m=l[uo])==null?void 0:m.arrayValue,d=(E=c[uo])==null?void 0:E.arrayValue,p=pt(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((V=d==null?void 0:d.values)==null?void 0:V.length)||0);return p!==0?p:jh(h,d)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===Li.mapValue&&a===Li.mapValue)return 0;if(i===Li.mapValue)return 1;if(a===Li.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=hl(c[p],d[p]);if(m!==0)return m;const E=ts(l[c[p]],h[d[p]]);if(E!==0)return E}return pt(c.length,d.length)}(e.mapValue,t.mapValue);default:throw st(23264,{he:n})}}function Bh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return pt(e,t);const n=tr(e),r=tr(t),s=pt(n.seconds,r.seconds);return s!==0?s:pt(n.nanos,r.nanos)}function jh(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ts(n[s],r[s]);if(i)return i}return pt(n.length,r.length)}function es(e){return fl(e)}function fl(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=tr(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return er(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return et.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fl(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${fl(n.fields[a])}`;return s+"}"}(e.mapValue):st(61005,{value:e})}function zi(e){switch(nr(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Uo(e);return t?16+zi(t):16;case 5:return 2*e.stringValue.length;case 6:return er(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+zi(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return Rr(r.fields,(i,a)=>{s+=i.length+zi(a)}),s}(e.mapValue);default:throw st(13486,{value:e})}}function $h(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function dl(e){return!!e&&"integerValue"in e}function rc(e){return!!e&&"arrayValue"in e}function qh(e){return!!e&&"nullValue"in e}function Hh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ki(e){return!!e&&"mapValue"in e}function Vw(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[Mp])==null?void 0:r.stringValue)===Lp}function qs(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Rr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=qs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=qs(e.arrayValue.values[n]);return t}return{...e}}function Dw(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Pw}/**
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
 */class xe{constructor(t){this.value=t}static empty(){return new xe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ki(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=qs(n)}setAll(t){let n=se.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=qs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Ki(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return pn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Ki(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Rr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new xe(qs(this.value))}}function Fp(e){const t=[];return Rr(e.fields,(n,r)=>{const s=new se([n]);if(Ki(r)){const i=Fp(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new qe(t)}/**
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
 */class fe{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new fe(t,0,ot.min(),ot.min(),ot.min(),xe.empty(),0)}static newFoundDocument(t,n,r,s){return new fe(t,1,n,ot.min(),r,s,0)}static newNoDocument(t,n){return new fe(t,2,n,ot.min(),ot.min(),xe.empty(),0)}static newUnknownDocument(t,n){return new fe(t,3,n,ot.min(),ot.min(),xe.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ot.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ot.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof fe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ho{constructor(t,n){this.position=t,this.inclusive=n}}function zh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=et.comparator(et.fromName(a.referenceValue),n.key):r=ts(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!pn(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class fo{constructor(t,n="asc"){this.field=t,this.dir=n}}function Nw(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Up{}class Ht extends Up{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Ow(t,n,r):n==="array-contains"?new Lw(t,r):n==="in"?new Fw(t,r):n==="not-in"?new Uw(t,r):n==="array-contains-any"?new Bw(t,r):new Ht(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new xw(t,r):new Mw(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ts(n,this.value)):n!==null&&nr(this.value)===nr(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return st(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends Up{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new We(t,n)}matches(t){return Bp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bp(e){return e.op==="and"}function jp(e){return kw(e)&&Bp(e)}function kw(e){for(const t of e.filters)if(t instanceof We)return!1;return!0}function pl(e){if(e instanceof Ht)return e.field.canonicalString()+e.op.toString()+es(e.value);if(jp(e))return e.filters.map(t=>pl(t)).join(",");{const t=e.filters.map(n=>pl(n)).join(",");return`${e.op}(${t})`}}function $p(e,t){return e instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(e,t):e instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&$p(a,s.filters[l]),!0):!1}(e,t):void st(19439)}function qp(e){return e instanceof Ht?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(e):e instanceof We?function(n){return n.op.toString()+" {"+n.getFilters().map(qp).join(" ,")+"}"}(e):"Filter"}class Ow extends Ht{constructor(t,n,r){super(t,n,r),this.key=et.fromName(r.referenceValue)}matches(t){const n=et.comparator(t.key,this.key);return this.matchesComparison(n)}}class xw extends Ht{constructor(t,n){super(t,"in",n),this.keys=Hp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Mw extends Ht{constructor(t,n){super(t,"not-in",n),this.keys=Hp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Hp(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(r=>et.fromName(r.referenceValue))}class Lw extends Ht{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return rc(n)&&ii(n.arrayValue,this.value)}}class Fw extends Ht{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ii(this.value.arrayValue,n)}}class Uw extends Ht{constructor(t,n){super(t,"not-in",n)}matches(t){if(ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ii(this.value.arrayValue,n)}}class Bw extends Ht{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!rc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ii(this.value.arrayValue,r))}}/**
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
 */class jw{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function Gh(e,t=null,n=[],r=[],s=null,i=null,a=null){return new jw(e,t,n,r,s,i,a)}function sc(e){const t=ct(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>pl(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>es(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>es(r)).join(",")),t.Te=n}return t.Te}function ic(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Nw(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$p(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Kh(e.startAt,t.startAt)&&Kh(e.endAt,t.endAt)}function gl(e){return et.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class _i{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function $w(e,t,n,r,s,i,a,l){return new _i(e,t,n,r,s,i,a,l)}function zp(e){return new _i(e)}function Wh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function qw(e){return et.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}function Kp(e){return e.collectionGroup!==null}function Hs(e){const t=ct(e);if(t.Ee===null){t.Ee=[];const n=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Yt(se.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.Ee.push(new fo(i,r))}),n.has(se.keyField().canonicalString())||t.Ee.push(new fo(se.keyField(),r))}return t.Ee}function ln(e){const t=ct(e);return t.Ie||(t.Ie=Hw(t,Hs(e))),t.Ie}function Hw(e,t){if(e.limitType==="F")return Gh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fo(s.field,i)});const n=e.endAt?new ho(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ho(e.startAt.position,e.startAt.inclusive):null;return Gh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ml(e,t){const n=e.filters.concat([t]);return new _i(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function _l(e,t,n){return new _i(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Bo(e,t){return ic(ln(e),ln(t))&&e.limitType===t.limitType}function Gp(e){return`${sc(ln(e))}|lt:${e.limitType}`}function Fr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>qp(s)).join(", ")}]`),Fo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>es(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>es(s)).join(",")),`Target(${r})`}(ln(e))}; limitType=${e.limitType})`}function jo(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):et.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=zh(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Hs(r),s)||r.endAt&&!function(a,l,c){const h=zh(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Hs(r),s))}(e,t)}function zw(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Wp(e){return(t,n)=>{let r=!1;for(const s of Hs(e)){const i=Kw(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Kw(e,t,n){const r=e.field.isKeyField()?et.comparator(t.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ts(c,h):st(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return st(19790,{direction:e.dir})}}/**
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
 */class Sr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Rr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Vp(this.inner)}size(){return this.innerSize}}/**
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
 */const Gw=new xt(et.comparator);function Dn(){return Gw}const Qp=new xt(et.comparator);function Ds(...e){let t=Qp;for(const n of e)t=t.insert(n.key,n);return t}function Yp(e){let t=Qp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function gr(){return zs()}function Jp(){return zs()}function zs(){return new Sr(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ww=new xt(et.comparator),Qw=new Yt(et.comparator);function gt(...e){let t=Qw;for(const n of e)t=t.add(n);return t}const Yw=new Yt(pt);function Jw(){return Yw}/**
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
 */function oc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lo(t)?"-0":t}}function Xp(e){return{integerValue:""+e}}function Xw(e,t){return Iw(t)?Xp(t):oc(e,t)}/**
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
 */class $o{constructor(){this._=void 0}}function Zw(e,t,n){return e instanceof po?function(s,i){const a={fields:{[kp]:{stringValue:Np},[xp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&nc(i)&&(i=Uo(i)),i&&(a.fields[Op]=i),{mapValue:a}}(n,t):e instanceof oi?tg(e,t):e instanceof ai?eg(e,t):function(s,i){const a=Zp(s,i),l=Qh(a)+Qh(s.Ae);return dl(a)&&dl(s.Ae)?Xp(l):oc(s.serializer,l)}(e,t)}function tI(e,t,n){return e instanceof oi?tg(e,t):e instanceof ai?eg(e,t):n}function Zp(e,t){return e instanceof go?function(r){return dl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class po extends $o{}class oi extends $o{constructor(t){super(),this.elements=t}}function tg(e,t){const n=ng(t);for(const r of e.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ai extends $o{constructor(t){super(),this.elements=t}}function eg(e,t){let n=ng(t);for(const r of e.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class go extends $o{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Qh(e){return Ut(e.integerValue||e.doubleValue)}function ng(e){return rc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function eI(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof oi&&s instanceof oi||r instanceof ai&&s instanceof ai?Zr(r.elements,s.elements,pn):r instanceof go&&s instanceof go?pn(r.Ae,s.Ae):r instanceof po&&s instanceof po}(e.transform,t.transform)}class nI{constructor(t,n){this.version=t,this.transformResults=n}}class cn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new cn}static exists(t){return new cn(void 0,t)}static updateTime(t){return new cn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class qo{}function rg(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ac(e.key,cn.none()):new yi(e.key,e.data,cn.none());{const n=e.data,r=xe.empty();let s=new Yt(se.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Cr(e.key,r,new qe(s.toArray()),cn.none())}}function rI(e,t,n){e instanceof yi?function(s,i,a){const l=s.value.clone(),c=Jh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof Cr?function(s,i,a){if(!Gi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Jh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(sg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Ks(e,t,n,r){return e instanceof yi?function(i,a,l,c){if(!Gi(i.precondition,a))return l;const h=i.value.clone(),d=Xh(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof Cr?function(i,a,l,c){if(!Gi(i.precondition,a))return l;const h=Xh(i.fieldTransforms,c,a),d=a.data;return d.setAll(sg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(e,t,n,r):function(i,a,l){return Gi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function sI(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Zp(r.transform,s||null);i!=null&&(n===null&&(n=xe.empty()),n.set(r.field,i))}return n||null}function Yh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zr(r,s,(i,a)=>eI(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class yi extends qo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends qo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sg(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Jh(e,t,n){const r=new Map;Rt(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,tI(a,l,n[s]))}return r}function Xh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,Zw(i,a,t))}return r}class ac extends qo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iI extends qo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class oI{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&rI(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ks(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ks(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Jp();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=rg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ot.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),gt())}isEqual(t){return this.batchId===t.batchId&&Zr(this.mutations,t.mutations,(n,r)=>Yh(n,r))&&Zr(this.baseMutations,t.baseMutations,(n,r)=>Yh(n,r))}}class lc{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){Rt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return Ww}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new lc(t,n,r,s)}}/**
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
 */class aI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class lI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var qt,yt;function cI(e){switch(e){case x.OK:return st(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return st(15467,{code:e})}}function ig(e){if(e===void 0)return Vn("GRPC error has no .code"),x.UNKNOWN;switch(e){case qt.OK:return x.OK;case qt.CANCELLED:return x.CANCELLED;case qt.UNKNOWN:return x.UNKNOWN;case qt.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case qt.INTERNAL:return x.INTERNAL;case qt.UNAVAILABLE:return x.UNAVAILABLE;case qt.UNAUTHENTICATED:return x.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case qt.NOT_FOUND:return x.NOT_FOUND;case qt.ALREADY_EXISTS:return x.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return x.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case qt.ABORTED:return x.ABORTED;case qt.OUT_OF_RANGE:return x.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return x.UNIMPLEMENTED;case qt.DATA_LOSS:return x.DATA_LOSS;default:return st(39323,{code:e})}}(yt=qt||(qt={}))[yt.OK=0]="OK",yt[yt.CANCELLED=1]="CANCELLED",yt[yt.UNKNOWN=2]="UNKNOWN",yt[yt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yt[yt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yt[yt.NOT_FOUND=5]="NOT_FOUND",yt[yt.ALREADY_EXISTS=6]="ALREADY_EXISTS",yt[yt.PERMISSION_DENIED=7]="PERMISSION_DENIED",yt[yt.UNAUTHENTICATED=16]="UNAUTHENTICATED",yt[yt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yt[yt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yt[yt.ABORTED=10]="ABORTED",yt[yt.OUT_OF_RANGE=11]="OUT_OF_RANGE",yt[yt.UNIMPLEMENTED=12]="UNIMPLEMENTED",yt[yt.INTERNAL=13]="INTERNAL",yt[yt.UNAVAILABLE=14]="UNAVAILABLE",yt[yt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uI(){return new TextEncoder}/**
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
 */const hI=new Gn([4294967295,4294967295],0);function Zh(e){const t=uI().encode(e),n=new Ep;return n.update(t),new Uint8Array(n.digest())}function tf(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Gn([n,r],0),new Gn([s,i],0)]}class cc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ns(`Invalid padding: ${n}`);if(r<0)throw new Ns(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ns(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ns(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Gn.fromNumber(this.ge)}ye(t,n,r){let s=t.add(n.multiply(Gn.fromNumber(r)));return s.compare(hI)===1&&(s=new Gn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Zh(t),[r,s]=tf(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new cc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const n=Zh(t),[r,s]=tf(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ho{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Ei.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Ho(ot.min(),s,new xt(pt),Dn(),gt())}}class Ei{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ei(r,n,gt(),gt(),gt())}}/**
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
 */class Wi{constructor(t,n,r,s){this.be=t,this.removedTargetIds=n,this.key=r,this.De=s}}class og{constructor(t,n){this.targetId=t,this.Ce=n}}class ag{constructor(t,n,r=oe.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ef{constructor(){this.ve=0,this.Fe=nf(),this.Me=oe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=gt(),n=gt(),r=gt();return this.Fe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:st(38017,{changeType:i})}}),new Ei(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=nf()}Ke(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,Rt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fI{constructor(t){this.Ge=t,this.ze=new Map,this.je=Dn(),this.Je=Fi(),this.He=Fi(),this.Ze=new xt(pt)}Xe(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:st(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(t){const n=t.targetId,r=t.Ce.count,s=this.ot(n);if(s){const i=s.target;if(gl(i))if(r===0){const a=new et(i.path);this.et(n,a,fe.newNoDocument(a,ot.min()))}else Rt(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(t),c=l?this.ct(l,t,a):1;if(c!==0){this.it(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=er(r).toUint8Array()}catch(c){if(c instanceof Dp)return Er("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new cc(a,s,i)}catch(c){return Er(c instanceof Ns?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(t){const n=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&gl(l.target)){const c=new et(l.target.path);this.Et(c).has(a)||this.It(a,c)||this.et(a,c,fe.newNoDocument(c,t))}i.Be&&(n.set(a,i.ke()),i.qe())}});let r=gt();this.He.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(t));const s=new Ho(t,n,this.Ze,this.je,r);return this.je=Dn(),this.Je=Fi(),this.He=Fi(),this.Ze=new xt(pt),s}Ye(t,n){if(!this.rt(t))return;const r=this.It(t,n.key)?2:0;this.nt(t).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.He=this.He.insert(n.key,this.Rt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const s=this.nt(t);this.It(t,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(t)),this.He=this.He.insert(n,this.Rt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new ef,this.ze.set(t,n)),n}Rt(t){let n=this.He.get(t);return n||(n=new Yt(pt),this.He=this.He.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Yt(pt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||J("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ef),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}It(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Fi(){return new xt(et.comparator)}function nf(){return new xt(et.comparator)}const dI={asc:"ASCENDING",desc:"DESCENDING"},pI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gI={and:"AND",or:"OR"};class mI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function yl(e,t){return e.useProto3Json||Fo(t)?t:{value:t}}function mo(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function _I(e,t){return mo(e,t.toTimestamp())}function un(e){return Rt(!!e,49232),ot.fromTimestamp(function(n){const r=tr(n);return new kt(r.seconds,r.nanos)}(e))}function uc(e,t){return El(e,t).canonicalString()}function El(e,t){const n=function(s){return new Dt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function cg(e){const t=Dt.fromString(e);return Rt(pg(t),10190,{key:t.toString()}),t}function vl(e,t){return uc(e.databaseId,t.path)}function Oa(e,t){const n=cg(t);if(n.get(1)!==e.databaseId.projectId)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new et(hg(n))}function ug(e,t){return uc(e.databaseId,t)}function yI(e){const t=cg(e);return t.length===4?Dt.emptyPath():hg(t)}function Tl(e){return new Dt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function hg(e){return Rt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function rf(e,t,n){return{name:vl(e,t),fields:n.value.mapValue.fields}}function EI(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:st(39313,{state:h})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Rt(d===void 0||typeof d=="string",58123),oe.fromBase64String(d||"")):(Rt(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),oe.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?x.UNKNOWN:ig(h.code);return new X(d,h.message||"")}(a);n=new ag(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oa(e,r.document.name),i=un(r.document.updateTime),a=r.document.createTime?un(r.document.createTime):ot.min(),l=new xe({mapValue:{fields:r.document.fields}}),c=fe.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Wi(h,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Oa(e,r.document),i=r.readTime?un(r.readTime):ot.min(),a=fe.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Wi([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Oa(e,r.document),i=r.removedTargetIds||[];n=new Wi([],i,s,null)}else{if(!("filter"in t))return st(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new lI(s,i),l=r.targetId;n=new og(l,a)}}return n}function vI(e,t){let n;if(t instanceof yi)n={update:rf(e,t.key,t.value)};else if(t instanceof ac)n={delete:vl(e,t.key)};else if(t instanceof Cr)n={update:rf(e,t.key,t.data),updateMask:PI(t.fieldMask)};else{if(!(t instanceof iI))return st(16599,{dt:t.type});n={verify:vl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof po)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ai)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof go)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw st(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_I(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:st(27497)}(e,t.precondition)),n}function TI(e,t){return e&&e.length>0?(Rt(t!==void 0,14353),e.map(n=>function(s,i){let a=s.updateTime?un(s.updateTime):un(i);return a.isEqual(ot.min())&&(a=un(i)),new nI(a,s.transformResults||[])}(n,t))):[]}function wI(e,t){return{documents:[ug(e,t.path)]}}function II(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ug(e,s);const i=function(h){if(h.length!==0)return dg(We.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Ur(m.field),direction:RI(m.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=yl(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ft:n,parent:s}}function AI(e){let t=yI(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Rt(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=fg(p);return m instanceof We&&jp(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(D){return new fo(Br(D.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Fo(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,E=p.values||[];return new ho(E,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,E=p.values||[];return new ho(E,m)}(n.endAt)),$w(t,s,a,i,l,"F",c,h)}function bI(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return st(28987,{purpose:s})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function fg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Br(n.unaryFilter.field);return Ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Br(n.unaryFilter.field);return Ht.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(n.unaryFilter.field);return Ht.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Br(n.unaryFilter.field);return Ht.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return st(61313);default:return st(60726)}}(e):e.fieldFilter!==void 0?function(n){return Ht.create(Br(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return st(58110);default:return st(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return We.create(n.compositeFilter.filters.map(r=>fg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return st(1026)}}(n.compositeFilter.op))}(e):st(30097,{filter:e})}function RI(e){return dI[e]}function SI(e){return pI[e]}function CI(e){return gI[e]}function Ur(e){return{fieldPath:e.canonicalString()}}function Br(e){return se.fromServerFormat(e.fieldPath)}function dg(e){return e instanceof Ht?function(n){if(n.op==="=="){if(Hh(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(qh(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hh(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(qh(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:SI(n.op),value:n.value}}}(e):e instanceof We?function(n){const r=n.getFilters().map(s=>dg(s));return r.length===1?r[0]:{compositeFilter:{op:CI(n.op),filters:r}}}(e):st(54877,{filter:e})}function PI(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function pg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function gg(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}/**
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
 */class Hn{constructor(t,n,r,s,i=ot.min(),a=ot.min(),l=oe.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new Hn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class VI{constructor(t){this.yt=t}}function DI(e){const t=AI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?_l(t,t.limit,"L"):t}/**
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
 */class NI{constructor(){this.bn=new kI}addToCollectionParentIndex(t,n){return this.bn.add(n),M.resolve()}getCollectionParents(t,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return M.resolve()}deleteFieldIndex(t,n){return M.resolve()}deleteAllFieldIndexes(t){return M.resolve()}createTargetIndexes(t,n){return M.resolve()}getDocumentsMatchingTarget(t,n){return M.resolve(null)}getIndexType(t,n){return M.resolve(0)}getFieldIndexes(t,n){return M.resolve([])}getNextCollectionGroupToUpdate(t){return M.resolve(null)}getMinOffset(t,n){return M.resolve(Zn.min())}getMinOffsetFromCollectionGroup(t,n){return M.resolve(Zn.min())}updateCollectionGroup(t,n,r){return M.resolve()}updateIndexEntries(t,n){return M.resolve()}}class kI{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Yt(Dt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Yt(Dt.comparator)).toArray()}}/**
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
 */const sf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mg=41943040;class be{static withCacheSize(t){return new be(t,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */be.DEFAULT_COLLECTION_PERCENTILE=10,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,be.DEFAULT=new be(mg,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),be.DISABLED=new be(-1,0,0);/**
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
 */class ns{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new ns(0)}static ar(){return new ns(-1)}}/**
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
 */const of="LruGarbageCollector",OI=1048576;function af([e,t],[n,r]){const s=pt(e,n);return s===0?pt(t,r):s}class xI{constructor(t){this.Pr=t,this.buffer=new Yt(af),this.Tr=0}Er(){return++this.Tr}Ir(t){const n=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();af(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class MI{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){J(of,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){os(n)?J(of,"Ignoring IndexedDB error during garbage collection: ",n):await is(n)}await this.Ar(3e5)})}}class LI{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return M.resolve(Lo.ce);const r=new xI(n);return this.Vr.forEachTarget(t,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.Vr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(sf)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sf):this.gr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(t,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(p=>(h=Date.now(),Lr()<=Et.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function FI(e,t){return new LI(e,t)}/**
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
 */class UI{constructor(){this.changes=new Sr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,fe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class BI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class jI{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Ks(r.mutation,s,qe.empty(),kt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,gt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=gt()){const s=gr();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=Ds();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=gr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,gt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=Dn();const a=zs(),l=function(){return zs()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Cr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ks(d.mutation,h,d.mutation.getFieldMask(),kt.now())):a.set(h.key,qe.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>l.set(h,new BI(d,a.get(h)??null))),l))}recalculateAndSaveOverlays(t,n){const r=zs();let s=new xt((a,l)=>a-l),i=gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||qe.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||gt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Jp();d.forEach(m=>{if(!i.has(m)){const E=rg(n.get(m),r.get(m));E!==null&&p.set(m,E),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return qw(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Kp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):M.resolve(gr());let l=ni,c=i;return a.next(h=>M.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(t,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,gt())).next(d=>({batchId:l,changes:Yp(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new et(n)).next(r=>{let s=Ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=Ds();return this.indexManager.getCollectionParents(t,i).next(l=>M.forEach(l,c=>{const h=function(p,m){return new _i(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,fe.newInvalidDocument(d)))});let l=Ds();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Ks(d.mutation,h,qe.empty(),kt.now()),jo(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class $I{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}}(n)),M.resolve()}getNamedQuery(t,n){return M.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,function(s){return{name:s.name,query:DI(s.bundledQuery),readTime:un(s.readTime)}}(n)),M.resolve()}}/**
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
 */class qI{constructor(){this.overlays=new xt(et.comparator),this.Lr=new Map}getOverlay(t,n){return M.resolve(this.overlays.get(n))}getOverlays(t,n){const r=gr();return M.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.St(t,n,i)}),M.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(t,n,r){const s=gr(),i=n.length+1,a=new et(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new xt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=gr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=gr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}St(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new aI(n,r));let i=this.Lr.get(n);i===void 0&&(i=gt(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class HI{constructor(){this.sessionToken=oe.EMPTY_BYTE_STRING}getSessionToken(t){return M.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class hc{constructor(){this.kr=new Yt(Zt.qr),this.Kr=new Yt(Zt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const r=new Zt(t,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Wr(new Zt(t,n))}Qr(t,n){t.forEach(r=>this.removeReference(r,n))}Gr(t){const n=new et(new Dt([])),r=new Zt(n,t),s=new Zt(n,t+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const n=new et(new Dt([])),r=new Zt(n,t),s=new Zt(n,t+1);let i=gt();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new Zt(t,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Zt{constructor(t,n){this.key=t,this.Jr=n}static qr(t,n){return et.comparator(t.key,n.key)||pt(t.Jr,n.Jr)}static Ur(t,n){return pt(t.Jr,n.Jr)||et.comparator(t.key,n.key)}}/**
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
 */class zI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Yt(Zt.qr)}checkEmpty(t){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new oI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new Zt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(t,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?ec:this.Yn-1)}getAllMutationBatches(t){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Zt(n,0),s=new Zt(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const l=this.Zr(a.Jr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Yt(pt);return n.forEach(s=>{const i=new Zt(s,0),a=new Zt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;et.isDocumentKey(i)||(i=i.child(""));const a=new Zt(new et(i),0);let l=new Yt(pt);return this.Hr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Jr)),!0)},a),M.resolve(this.Yr(l))}Yr(t){const n=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Rt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,s=>{const i=new Zt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,n){const r=new Zt(n,0),s=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,M.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class KI{constructor(t){this.ti=t,this.docs=function(){return new xt(et.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():fe.newInvalidDocument(n))}getEntries(t,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():fe.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Dn();const a=n.path,l=new et(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Ew(yw(d),r)<=0||(s.has(d.key)||jo(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(t,n,r,s){st(9500)}ni(t,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new GI(this)}getSize(t){return M.resolve(this.size)}}class GI extends UI{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
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
 */class WI{constructor(t){this.persistence=t,this.ri=new Sr(n=>sc(n),ic),this.lastRemoteSnapshotVersion=ot.min(),this.highestTargetId=0,this.ii=0,this.si=new hc,this.targetCount=0,this.oi=ns._r()}forEachTarget(t,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(t){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return M.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new ns(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(t,n){return this.lr(n),M.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(t){return M.resolve(this.targetCount)}getTargetData(t,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(t,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(t,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(t,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(t,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class _g{constructor(t,n){this._i={},this.overlays={},this.ai=new Lo(0),this.ui=!1,this.ui=!0,this.ci=new HI,this.referenceDelegate=t(this),this.li=new WI(this),this.indexManager=new NI,this.remoteDocumentCache=function(s){return new KI(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new VI(n),this.Pi=new $I(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new qI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this._i[t.toKey()];return r||(r=new zI(n,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,r){J("MemoryPersistence","Starting transaction:",t);const s=new QI(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(t,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(t,n)))}}class QI extends Tw{constructor(t){super(),this.currentSequenceNumber=t}}class fc{constructor(t){this.persistence=t,this.Ri=new hc,this.Ai=null}static Vi(t){return new fc(t)}get di(){if(this.Ai)return this.Ai;throw st(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),M.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ti(){this.Ai=new Set}Ei(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=et.fromPath(r);return this.mi(t,s).next(i=>{i||n.removeEntry(s,ot.min())})}).next(()=>(this.Ai=null,n.apply(t)))}updateLimboDocument(t,n){return this.mi(t,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(t){return 0}mi(t,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ii(t,n)])}}class _o{constructor(t,n){this.persistence=t,this.fi=new Sr(r=>Aw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=FI(this,n)}static Vi(t,n){return new _o(t,n)}Ti(){}Ei(t){return M.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}pr(t){let n=0;return this.mr(t,r=>{n++}).next(()=>n)}mr(t,n){return M.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,n).next(l=>{l||(r++,i.removeEntry(a,ot.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),M.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.fi.set(r,t.currentSequenceNumber),M.resolve()}removeReference(t,n,r){return this.fi.set(r,t.currentSequenceNumber),M.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),M.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=zi(t.data.value)),n}wr(t,n,r){return M.or([()=>this.persistence.Ii(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class dc{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Ts=r,this.Es=s}static Is(t,n){let r=gt(),s=gt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dc(t,n.fromCache,r,s)}}/**
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
 */class YI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class JI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return $v()?8:ww(Bv())>0?6:4}()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.gs(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new YI;return this.ys(t,n,a).next(l=>{if(i.result=l,this.As)return this.ws(t,n,a,l.size)})}).next(()=>i.result)}ws(t,n,r,s){return r.documentReadCount<this.Vs?(Lr()<=Et.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Lr()<=Et.DEBUG&&J("QueryEngine","Query:",Fr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Lr()<=Et.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ln(n))):M.resolve())}gs(t,n){if(Wh(n))return M.resolve(null);let r=ln(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_l(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=gt(...i);return this.fs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.Ss(n,l);return this.bs(n,h,a,c.readTime)?this.gs(t,_l(n,null,"F")):this.Ds(t,h,n,c)}))})))}ps(t,n,r,s){return Wh(n)||s.isEqual(ot.min())?M.resolve(null):this.fs.getDocuments(t,r).next(i=>{const a=this.Ss(n,i);return this.bs(n,a,r,s)?M.resolve(null):(Lr()<=Et.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fr(n)),this.Ds(t,a,n,_w(s,ni)).next(l=>l))})}Ss(t,n){let r=new Yt(Wp(t));return n.forEach((s,i)=>{jo(t,i)&&(r=r.add(i))}),r}bs(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(t,n,r){return Lr()<=Et.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.fs.getDocumentsMatchingQuery(t,n,Zn.min(),r)}Ds(t,n,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const pc="LocalStore",XI=3e8;class ZI{constructor(t,n,r,s){this.persistence=t,this.Cs=n,this.serializer=s,this.vs=new xt(pt),this.Fs=new Sr(i=>sc(i),ic),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.vs))}}function tA(e,t,n,r){return new ZI(e,t,n,r)}async function yg(e,t){const n=ct(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=gt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function eA(e,t){const n=ct(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let E=M.resolve();return m.forEach(D=>{E=E.next(()=>d.getEntry(c,D)).next(V=>{const F=h.docVersions.get(D);Rt(F!==null,48541),V.version.compareTo(F)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),d.addEntry(V)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=gt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Eg(e){const t=ct(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.li.getLastRemoteSnapshotVersion(n))}function nA(e,t){const n=ct(e),r=t.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];t.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,d.addedDocuments,p)));let E=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?E=E.withResumeToken(oe.EMPTY_BYTE_STRING,ot.min()).withLastLimboFreeSnapshotVersion(ot.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),s=s.insert(p,E),function(V,F,z){return V.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=XI?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(m,E,d)&&l.push(n.li.updateTargetData(i,E))});let c=Dn(),h=gt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(rA(i,a,t.documentUpdates).next(d=>{c=d.Bs,h=d.Ls})),!r.isEqual(ot.min())){const d=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.vs=s,i))}function rA(e,t,n){let r=gt(),s=gt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=Dn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ot.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):J(pc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Bs:a,Ls:s}})}function sA(e,t){const n=ct(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ec),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function iA(e,t){const n=ct(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,t).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(a=>(s=new Hn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(t,r.targetId)),r})}async function wl(e,t,n){const r=ct(e),s=r.vs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!os(a))throw a;J(pc,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function lf(e,t,n){const r=ct(e);let s=ot.min(),i=gt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=ct(c),m=p.Fs.get(d);return m!==void 0?M.resolve(p.vs.get(m)):p.li.getTargetData(h,d)}(r,a,ln(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,n?s:ot.min(),n?i:gt())).next(l=>(oA(r,zw(t),l),{documents:l,ks:i})))}function oA(e,t,n){let r=e.Ms.get(t)||ot.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Ms.set(t,r)}class cf{constructor(){this.activeTargetIds=Jw()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class aA{constructor(){this.vo=new cf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,r){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new cf,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class lA{Mo(t){}shutdown(){}}/**
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
 */const uf="ConnectivityMonitor";class hf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){J(uf,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){J(uf,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ui=null;function Il(){return Ui===null?Ui=function(){return 268435456+Math.round(2147483648*Math.random())}():Ui++,"0x"+Ui.toString(16)}/**
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
 */const xa="RestConnection",cA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class uA{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===co?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,n,r,s,i){const a=Il(),l=this.Qo(t,n.toUriEncodedString());J(xa,`Sending RPC '${t}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:h}=new URL(l),d=hp(h);return this.zo(t,l,c,r,d).then(p=>(J(xa,`Received RPC '${t}' ${a}: `,p),p),p=>{throw Er(xa,`RPC '${t}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}jo(t,n,r,s,i,a){return this.Wo(t,n,r,s,i)}Go(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}Qo(t,n){const r=cA[t];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class hA{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const le="WebChannelConnection",Ss=(e,t,n)=>{e.listen(t,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Kr extends uA{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Kr.c_){const t=Ip();Ss(t,wp.STAT_EVENT,n=>{n.stat===ul.PROXY?J(le,"STAT_EVENT: detected buffering proxy"):n.stat===ul.NOPROXY&&J(le,"STAT_EVENT: detected no buffering proxy")}),Kr.c_=!0}}zo(t,n,r,s,i){const a=Il();return new Promise((l,c)=>{const h=new vp;h.setWithCredentials(!0),h.listenOnce(Tp.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Hi.NO_ERROR:const p=h.getResponseJson();J(le,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),l(p);break;case Hi.TIMEOUT:J(le,`RPC '${t}' ${a} timed out`),c(new X(x.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const m=h.getStatus();if(J(le,`RPC '${t}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const D=E==null?void 0:E.error;if(D&&D.status&&D.message){const V=function(z){const B=z.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(B)>=0?B:x.UNKNOWN}(D.status);c(new X(V,D.message))}else c(new X(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new X(x.UNAVAILABLE,"Connection failed."));break;default:st(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{J(le,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);J(le,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)})}T_(t,n,r){const s=Il(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");J(le,`Creating RPC '${t}' stream ${s}: ${h}`,l);const d=a.createWebChannel(h,l);this.E_(d);let p=!1,m=!1;const E=new hA({Jo:D=>{m?J(le,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(p||(J(le,`Opening RPC '${t}' stream ${s} transport.`),d.open(),p=!0),J(le,`RPC '${t}' stream ${s} sending:`,D),d.send(D))},Ho:()=>d.close()});return Ss(d,Vs.EventType.OPEN,()=>{m||(J(le,`RPC '${t}' stream ${s} transport opened.`),E.i_())}),Ss(d,Vs.EventType.CLOSE,()=>{m||(m=!0,J(le,`RPC '${t}' stream ${s} transport closed`),E.o_(),this.I_(d))}),Ss(d,Vs.EventType.ERROR,D=>{m||(m=!0,Er(le,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),E.o_(new X(x.UNAVAILABLE,"The operation could not be completed")))}),Ss(d,Vs.EventType.MESSAGE,D=>{var V;if(!m){const F=D.data[0];Rt(!!F,16349);const z=F,B=(z==null?void 0:z.error)||((V=z[0])==null?void 0:V.error);if(B){J(le,`RPC '${t}' stream ${s} received error:`,B);const q=B.status;let W=function(v){const _=qt[v];if(_!==void 0)return ig(_)}(q),it=B.message;q==="NOT_FOUND"&&it.includes("database")&&it.includes("does not exist")&&it.includes(this.databaseId.database)&&Er(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),W===void 0&&(W=x.INTERNAL,it="Unknown error status: "+q+" with message "+B.message),m=!0,E.o_(new X(W,it)),d.close()}else J(le,`RPC '${t}' stream ${s} received:`,F),E.__(F)}}),Kr.u_(),setTimeout(()=>{E.s_()},0),E}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(n=>n===t)}Go(t,n,r){super.Go(t,n,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ap()}}/**
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
 */function fA(e){return new Kr(e)}function Ma(){return typeof document<"u"?document:null}/**
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
 */function zo(e){return new mI(e,!0)}/**
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
 */Kr.c_=!1;class vg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Ci=t,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const ff="PersistentStream";class Tg{constructor(t,n,r,s,i,a,l,c){this.Ci=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vg(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{t(()=>{const s=new X(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,n){const r=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return J(ff,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget(()=>this.D_===t?n():(J(ff,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dA extends Tg{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=EI(this.serializer,t),r=function(i){if(!("targetChange"in i))return ot.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ot.min():a.readTime?un(a.readTime):ot.min()}(t);return this.listener.H_(n,r)}Z_(t){const n={};n.database=Tl(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=gl(c)?{documents:wI(i,c)}:{query:II(i,c).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=lg(i,a.resumeToken);const h=yl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ot.min())>0){l.readTime=mo(i,a.snapshotVersion.toTimestamp());const h=yl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=bI(this.serializer,t);r&&(n.labels=r),this.q_(n)}X_(t){const n={};n.database=Tl(this.serializer),n.removeTarget=t,this.q_(n)}}class pA extends Tg{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Rt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Rt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Rt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=TI(t.writeResults,t.commitTime),r=un(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=Tl(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>vI(this.serializer,r))};this.q_(n)}}/**
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
 */class gA{}class mA extends gA{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(t,El(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(x.UNKNOWN,i.toString())})}jo(t,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(t,El(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new X(x.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function _A(e,t,n,r){return new mA(e,t,n,r)}class yA{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
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
 */const vr="RemoteStore";class EA{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{Pr(this)&&(J(vr,"Restarting streams for network reachability change."),await async function(c){const h=ct(c);h.Ia.add(4),await vi(h),h.Va.set("Unknown"),h.Ia.delete(4),await Ko(h)}(this))})}),this.Va=new yA(r,s)}}async function Ko(e){if(Pr(e))for(const t of e.Ra)await t(!0)}async function vi(e){for(const t of e.Ra)await t(!1)}function wg(e,t){const n=ct(e);n.Ea.has(t.targetId)||(n.Ea.set(t.targetId,t),yc(n)?_c(n):as(n).O_()&&mc(n,t))}function gc(e,t){const n=ct(e),r=as(n);n.Ea.delete(t),r.O_()&&Ig(n,t),n.Ea.size===0&&(r.O_()?r.L_():Pr(n)&&n.Va.set("Unknown"))}function mc(e,t){if(e.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ot.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}as(e).Z_(t)}function Ig(e,t){e.da.$e(t),as(e).X_(t)}function _c(e){e.da=new fI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ea.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),as(e).start(),e.Va.ua()}function yc(e){return Pr(e)&&!as(e).x_()&&e.Ea.size>0}function Pr(e){return ct(e).Ia.size===0}function Ag(e){e.da=void 0}async function vA(e){e.Va.set("Online")}async function TA(e){e.Ea.forEach((t,n)=>{mc(e,t)})}async function wA(e,t){Ag(e),yc(e)?(e.Va.ha(t),_c(e)):e.Va.set("Unknown")}async function IA(e,t,n){if(e.Va.set("Online"),t instanceof ag&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ea.delete(l),s.da.removeTarget(l))}(e,t)}catch(r){J(vr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await yo(e,r)}else if(t instanceof Wi?e.da.Xe(t):t instanceof og?e.da.st(t):e.da.tt(t),!n.isEqual(ot.min()))try{const r=await Eg(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.da.Tt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ea.get(h);d&&i.Ea.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.Ea.get(c);if(!d)return;i.Ea.set(c,d.withResumeToken(oe.EMPTY_BYTE_STRING,d.snapshotVersion)),Ig(i,c);const p=new Hn(d.target,c,h,d.sequenceNumber);mc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){J(vr,"Failed to raise snapshot:",r),await yo(e,r)}}async function yo(e,t,n){if(!os(t))throw t;e.Ia.add(1),await vi(e),e.Va.set("Offline"),n||(n=()=>Eg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{J(vr,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await Ko(e)})}function bg(e,t){return t().catch(n=>yo(e,n,t))}async function Go(e){const t=ct(e),n=rr(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:ec;for(;AA(t);)try{const s=await sA(t.localStore,r);if(s===null){t.Ta.length===0&&n.L_();break}r=s.batchId,bA(t,s)}catch(s){await yo(t,s)}Rg(t)&&Sg(t)}function AA(e){return Pr(e)&&e.Ta.length<10}function bA(e,t){e.Ta.push(t);const n=rr(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function Rg(e){return Pr(e)&&!rr(e).x_()&&e.Ta.length>0}function Sg(e){rr(e).start()}async function RA(e){rr(e).ra()}async function SA(e){const t=rr(e);for(const n of e.Ta)t.ea(n.mutations)}async function CA(e,t,n){const r=e.Ta.shift(),s=lc.from(r,t,n);await bg(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Go(e)}async function PA(e,t){t&&rr(e).Y_&&await async function(r,s){if(function(a){return cI(a)&&a!==x.ABORTED}(s.code)){const i=r.Ta.shift();rr(r).B_(),await bg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Go(r)}}(e,t),Rg(e)&&Sg(e)}async function df(e,t){const n=ct(e);n.asyncQueue.verifyOperationInProgress(),J(vr,"RemoteStore received new credentials");const r=Pr(n);n.Ia.add(3),await vi(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Ko(n)}async function VA(e,t){const n=ct(e);t?(n.Ia.delete(2),await Ko(n)):t||(n.Ia.add(2),await vi(n),n.Va.set("Unknown"))}function as(e){return e.ma||(e.ma=function(n,r,s){const i=ct(n);return i.sa(),new dA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Zo:vA.bind(null,e),Yo:TA.bind(null,e),t_:wA.bind(null,e),H_:IA.bind(null,e)}),e.Ra.push(async t=>{t?(e.ma.B_(),yc(e)?_c(e):e.Va.set("Unknown")):(await e.ma.stop(),Ag(e))})),e.ma}function rr(e){return e.fa||(e.fa=function(n,r,s){const i=ct(n);return i.sa(),new pA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:RA.bind(null,e),t_:PA.bind(null,e),ta:SA.bind(null,e),na:CA.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Go(e)):(await e.fa.stop(),e.Ta.length>0&&(J(vr,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
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
 */class Ec{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new Ec(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vc(e,t){if(Vn("AsyncQueue",`${t}: ${e}`),os(e))return new X(x.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Gr{static emptySet(t){return new Gr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||et.comparator(n.key,r.key):(n,r)=>et.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new xt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Gr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class pf{constructor(){this.ga=new xt(et.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):st(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,r)=>{t.push(r)}),t}}class rs{constructor(t,n,r,s,i,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new rs(t,n,Gr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Bo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class DA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class NA{constructor(){this.queries=gf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ct(n),i=s.queries;s.queries=gf(),i.forEach((a,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new X(x.ABORTED,"Firestore shutting down"))}}function gf(){return new Sr(e=>Gp(e),Bo)}async function kA(e,t){const n=ct(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new DA,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=vc(a,`Initialization of query '${Fr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.Sa.push(t),t.va(n.onlineState),i.wa&&t.Fa(i.wa)&&Tc(n)}async function OA(e,t){const n=ct(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xA(e,t){const n=ct(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.Sa)l.Fa(s)&&(r=!0);a.wa=s}}r&&Tc(n)}function MA(e,t,n){const r=ct(e),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(t)}function Tc(e){e.Ca.forEach(t=>{t.next()})}var Al,mf;(mf=Al||(Al={})).Ma="default",mf.Cache="cache";class LA{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new rs(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=rs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Al.Cache}}/**
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
 */class Cg{constructor(t){this.key=t}}class Pg{constructor(t){this.key=t}}class FA{constructor(t,n){this.query=t,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=gt(),this.mutatedKeys=gt(),this.eu=Wp(t),this.tu=new Gr(this.eu)}get nu(){return this.Za}ru(t,n){const r=n?n.iu:new pf,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,p)=>{const m=s.get(d),E=jo(this.query,p)?p:null,D=!!m&&this.mutatedKeys.has(m.key),V=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let F=!1;m&&E?m.data.isEqual(E.data)?D!==V&&(r.track({type:3,doc:E}),F=!0):this.su(m,E)||(r.track({type:2,doc:E}),F=!0,(c&&this.eu(E,c)>0||h&&this.eu(E,h)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),F=!0):m&&!E&&(r.track({type:1,doc:m}),F=!0,(c||h)&&(l=!0)),F&&(E?(a=a.add(E),i=V?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,bs:l,mutatedKeys:i}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((d,p)=>function(E,D){const V=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return st(20277,{Vt:F})}};return V(E)-V(D)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Xa;return this.Xa=c,a.length!==0||h?{snapshot:new rs(this.query,t.tu,i,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new pf,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=gt(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return t.forEach(r=>{this.Ya.has(r)||n.push(new Pg(r))}),this.Ya.forEach(r=>{t.has(r)||n.push(new Cg(r))}),n}cu(t){this.Za=t.ks,this.Ya=gt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const wc="SyncEngine";class UA{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class BA{constructor(t){this.key=t,this.hu=!1}}class jA{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Sr(l=>Gp(l),Bo),this.Eu=new Map,this.Iu=new Set,this.Ru=new xt(et.comparator),this.Au=new Map,this.Vu=new hc,this.du={},this.mu=new Map,this.fu=ns.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $A(e,t,n=!0){const r=xg(e);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Vg(r,t,n,!0),s}async function qA(e,t){const n=xg(e);await Vg(n,t,!0,!1)}async function Vg(e,t,n,r){const s=await iA(e.localStore,ln(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await HA(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&wg(e.remoteStore,s),l}async function HA(e,t,n,r,s){e.pu=(p,m,E)=>async function(V,F,z,B){let q=F.view.ru(z);q.bs&&(q=await lf(V.localStore,F.query,!1).then(({documents:v})=>F.view.ru(v,q)));const W=B&&B.targetChanges.get(F.targetId),it=B&&B.targetMismatches.get(F.targetId)!=null,ft=F.view.applyChanges(q,V.isPrimaryClient,W,it);return yf(V,F.targetId,ft.au),ft.snapshot}(e,p,m,E);const i=await lf(e.localStore,t,!0),a=new FA(t,i.ks),l=a.ru(i.documents),c=Ei.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,c);yf(e,n,h.au);const d=new UA(t,n,a);return e.Tu.set(t,d),e.Eu.has(n)?e.Eu.get(n).push(t):e.Eu.set(n,[t]),h.snapshot}async function zA(e,t,n){const r=ct(e),s=r.Tu.get(t),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(a=>!Bo(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&gc(r.remoteStore,s.targetId),bl(r,s.targetId)}).catch(is)):(bl(r,s.targetId),await wl(r.localStore,s.targetId,!0))}async function KA(e,t){const n=ct(e),r=n.Tu.get(t),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),gc(n.remoteStore,r.targetId))}async function GA(e,t,n){const r=tb(e);try{const s=await function(a,l){const c=ct(a),h=kt.now(),d=l.reduce((E,D)=>E.add(D.key),gt());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let D=Dn(),V=gt();return c.xs.getEntries(E,d).next(F=>{D=F,D.forEach((z,B)=>{B.isValidDocument()||(V=V.add(z))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,D)).next(F=>{p=F;const z=[];for(const B of l){const q=sI(B,p.get(B.key).overlayedDocument);q!=null&&z.push(new Cr(B.key,q,Fp(q.value.mapValue),cn.exists(!0)))}return c.mutationQueue.addMutationBatch(E,h,z,l)}).next(F=>{m=F;const z=F.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(E,F.batchId,z)})}).then(()=>({batchId:m.batchId,changes:Yp(p)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.du[a.currentUser.toKey()];h||(h=new xt(pt)),h=h.insert(l,c),a.du[a.currentUser.toKey()]=h}(r,s.batchId,n),await Ti(r,s.changes),await Go(r.remoteStore)}catch(s){const i=vc(s,"Failed to persist write");n.reject(i)}}async function Dg(e,t){const n=ct(e);try{const r=await nA(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Au.get(i);a&&(Rt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Rt(a.hu,14607):s.removedDocuments.size>0&&(Rt(a.hu,42227),a.hu=!1))}),await Ti(n,r,t)}catch(r){await is(r)}}function _f(e,t,n){const r=ct(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ct(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(h=!0)}),h&&Tc(c)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function WA(e,t,n){const r=ct(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new xt(et.comparator);a=a.insert(i,fe.newNoDocument(i,ot.min()));const l=gt().add(i),c=new Ho(ot.min(),new Map,new xt(pt),a,l);await Dg(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(t),Ic(r)}else await wl(r.localStore,t,!1).then(()=>bl(r,t,n)).catch(is)}async function QA(e,t){const n=ct(e),r=t.batch.batchId;try{const s=await eA(n.localStore,t);kg(n,r,null),Ng(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ti(n,s)}catch(s){await is(s)}}async function YA(e,t,n){const r=ct(e);try{const s=await function(a,l){const c=ct(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Rt(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,t);kg(r,t,n),Ng(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ti(r,s)}catch(s){await is(s)}}function Ng(e,t){(e.mu.get(t)||[]).forEach(n=>{n.resolve()}),e.mu.delete(t)}function kg(e,t,n){const r=ct(e);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function bl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Eu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Eu.delete(t),e.isPrimaryClient&&e.Vu.Gr(t).forEach(r=>{e.Vu.containsKey(r)||Og(e,r)})}function Og(e,t){e.Iu.delete(t.path.canonicalString());const n=e.Ru.get(t);n!==null&&(gc(e.remoteStore,n),e.Ru=e.Ru.remove(t),e.Au.delete(n),Ic(e))}function yf(e,t,n){for(const r of n)r instanceof Cg?(e.Vu.addReference(r.key,t),JA(e,r)):r instanceof Pg?(J(wc,"Document no longer in limbo: "+r.key),e.Vu.removeReference(r.key,t),e.Vu.containsKey(r.key)||Og(e,r.key)):st(19791,{wu:r})}function JA(e,t){const n=t.key,r=n.path.canonicalString();e.Ru.get(n)||e.Iu.has(r)||(J(wc,"New document in limbo: "+n),e.Iu.add(r),Ic(e))}function Ic(e){for(;e.Iu.size>0&&e.Ru.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new et(Dt.fromString(t)),r=e.fu.next();e.Au.set(r,new BA(n)),e.Ru=e.Ru.insert(n,r),wg(e.remoteStore,new Hn(ln(zp(n.path)),r,"TargetPurposeLimboResolution",Lo.ce))}}async function Ti(e,t,n){const r=ct(e),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{a.push(r.pu(c,t,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=dc.Is(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(c,h){const d=ct(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Ts,E=>d.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>M.forEach(m.Es,E=>d.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!os(p))throw p;J(pc,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const E=d.vs.get(m),D=E.snapshotVersion,V=E.withLastLimboFreeSnapshotVersion(D);d.vs=d.vs.insert(m,V)}}}(r.localStore,i))}async function XA(e,t){const n=ct(e);if(!n.currentUser.isEqual(t)){J(wc,"User change. New user:",t.toKey());const r=await yg(n.localStore,t);n.currentUser=t,function(i,a){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new X(x.CANCELLED,a))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ti(n,r.Ns)}}function ZA(e,t){const n=ct(e),r=n.Au.get(t);if(r&&r.hu)return gt().add(r.key);{let s=gt();const i=n.Eu.get(t);if(!i)return s;for(const a of i){const l=n.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function xg(e){const t=ct(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Dg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZA.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=WA.bind(null,t),t.Pu.H_=xA.bind(null,t.eventManager),t.Pu.yu=MA.bind(null,t.eventManager),t}function tb(e){const t=ct(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=QA.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=YA.bind(null,t),t}class Eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=zo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return tA(this.persistence,new JI,t.initialUser,this.serializer)}Cu(t){return new _g(fc.Vi,this.serializer)}Du(t){return new aA}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Eo.provider={build:()=>new Eo};class eb extends Eo{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Rt(this.persistence.referenceDelegate instanceof _o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new MI(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?be.withCacheSize(this.cacheSizeBytes):be.DEFAULT;return new _g(r=>_o.Vi(r,n),this.serializer)}}class Rl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_f(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XA.bind(null,this.syncEngine),await VA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new NA}()}createDatastore(t){const n=zo(t.databaseInfo.databaseId),r=fA(t.databaseInfo);return _A(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new EA(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>_f(this.syncEngine,n,0),function(){return hf.v()?new hf:new lA}())}createSyncEngine(t,n){return function(s,i,a,l,c,h,d){const p=new jA(s,i,a,l,c,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=ct(s);J(vr,"RemoteStore shutting down."),i.Ia.add(5),await vi(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}Rl.provider={build:()=>new Rl};/**
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
 */class nb{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Vn("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const sr="FirestoreClient";class rb{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ue.UNAUTHENTICATED,this.clientId=tc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{J(sr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(J(sr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=vc(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function La(e,t){e.asyncQueue.verifyOperationInProgress(),J(sr,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yg(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ef(e,t){e.asyncQueue.verifyOperationInProgress();const n=await sb(e);J(sr,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>df(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>df(t.remoteStore,s)),e._onlineComponents=t}async function sb(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){J(sr,"Using user provided OfflineComponentProvider");try{await La(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Er("Error using user provided cache. Falling back to memory cache: "+n),await La(e,new Eo)}}else J(sr,"Using default OfflineComponentProvider"),await La(e,new eb(void 0));return e._offlineComponents}async function Mg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(J(sr,"Using user provided OnlineComponentProvider"),await Ef(e,e._uninitializedComponentsProvider._online)):(J(sr,"Using default OnlineComponentProvider"),await Ef(e,new Rl))),e._onlineComponents}function ib(e){return Mg(e).then(t=>t.syncEngine)}async function ob(e){const t=await Mg(e),n=t.eventManager;return n.onListen=$A.bind(null,t.syncEngine),n.onUnlisten=zA.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=qA.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=KA.bind(null,t.syncEngine),n}function ab(e,t,n={}){const r=new Wn;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new nb({next:m=>{d.Nu(),a.enqueueAndForget(()=>OA(i,p)),m.fromCache&&c.source==="server"?h.reject(new X(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new LA(l,d,{includeMetadataChanges:!0,qa:!0});return kA(i,p)}(await ob(e),e.asyncQueue,t,n,r)),r.promise}function lb(e,t){const n=new Wn;return e.asyncQueue.enqueueAndForget(async()=>GA(await ib(e),t,n)),n.promise}/**
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
 */function Lg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const cb="ComponentProvider",vf=new Map;function ub(e,t,n,r,s){return new Sw(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Lg(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Fg="firestore.googleapis.com",Tf=!0;class wf{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new X(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fg,this.ssl=Tf}else this.host=t.host,this.ssl=t.ssl??Tf;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=mg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<OI)throw new X(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lg(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wo{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new X(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wf(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ow;switch(r.type){case"firstParty":return new uw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vf.get(n);r&&(J(cb,"Removing Datastore"),vf.delete(n),r.terminate())}(this),Promise.resolve()}}function hb(e,t,n,r={}){var h;e=ei(e,Wo);const s=hp(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&Gv(`https://${l}`),i.host!==Fg&&i.host!==l&&Er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!oo(c,a)&&(e._setSettings(c),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ue.MOCK_USER;else{d=Uv(r.mockUserToken,(h=e._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new X(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ue(m)}e._authCredentials=new aw(new Rp(d,p))}}/**
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
 */class ls{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ls(this.firestore,t,this._query)}}class te{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new te(this.firestore,t,this._key)}toJSON(){return{type:te._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(mi(n,te._jsonSchema))return new te(t,r||null,new et(Dt.fromString(n.referencePath)))}}te._jsonSchemaVersion="firestore/documentReference/1.0",te._jsonSchema={type:Kt("string",te._jsonSchemaVersion),referencePath:Kt("string")};class Qn extends ls{constructor(t,n,r){super(t,n,zp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new te(this.firestore,null,new et(t))}withConverter(t){return new Qn(this.firestore,t,this._path)}}function Ug(e,t,...n){if(e=Sn(e),Sp("collection","path",t),e instanceof Wo){const r=Dt.fromString(t,...n);return Oh(r),new Qn(e,null,r)}{if(!(e instanceof te||e instanceof Qn))throw new X(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Dt.fromString(t,...n));return Oh(r),new Qn(e.firestore,null,r)}}function fb(e,t,...n){if(e=Sn(e),arguments.length===1&&(t=tc.newId()),Sp("doc","path",t),e instanceof Wo){const r=Dt.fromString(t,...n);return kh(r),new te(e,null,new et(r))}{if(!(e instanceof te||e instanceof Qn))throw new X(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Dt.fromString(t,...n));return kh(r),new te(e.firestore,e instanceof Qn?e.converter:null,new et(r))}}/**
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
 */const If="AsyncQueue";class Af{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vg(this,"async_queue_retry"),this._c=()=>{const r=Ma();r&&J(If,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=Ma();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Ma();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Wn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!os(t))throw t;J(If,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Vn("INTERNAL UNHANDLED ERROR: ",bf(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=Ec.createAndSchedule(this,t,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&st(47125,{Pc:bf(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function bf(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class Qo extends Wo{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Af,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Af(t),this._firestoreClient=void 0,await t}}}function db(e,t){const n=typeof e=="object"?e:mp(),r=typeof e=="string"?e:co,s=xo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Lv("firestore");i&&hb(s,...i)}return s}function Bg(e){if(e._terminated)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||pb(e),e._firestoreClient}function pb(e){var r,s,i,a;const t=e._freezeSettings(),n=ub(e._databaseId,((r=e._app)==null?void 0:r.options.appId)||"",e._persistenceKey,(s=e._app)==null?void 0:s.options.apiKey,t);e._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new rb(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(e._componentsProvider))}/**
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
 */class Me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Me(oe.fromBase64String(t))}catch(n){throw new X(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Me(oe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Me._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(mi(t,Me._jsonSchema))return Me.fromBase64String(t.bytes)}}Me._jsonSchemaVersion="firestore/bytes/1.0",Me._jsonSchema={type:Kt("string",Me._jsonSchemaVersion),bytes:Kt("string")};/**
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
 */class jg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new X(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new se(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class $g{constructor(t){this._methodName=t}}/**
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
 */class hn{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new X(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new X(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return pt(this._lat,t._lat)||pt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(t){if(mi(t,hn._jsonSchema))return new hn(t.latitude,t.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:Kt("string",hn._jsonSchemaVersion),latitude:Kt("number"),longitude:Kt("number")};/**
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
 */class Ke{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ke._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(mi(t,Ke._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new Ke(t.vectorValues);throw new X(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ke._jsonSchemaVersion="firestore/vectorValue/1.0",Ke._jsonSchema={type:Kt("string",Ke._jsonSchemaVersion),vectorValues:Kt("object")};/**
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
 */const gb=/^__.*__$/;class mb{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Cr(t,this.data,this.fieldMask,n,this.fieldTransforms):new yi(t,this.data,n,this.fieldTransforms)}}function qg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw st(40011,{dataSource:e})}}class Ac{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Ac({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),r=this.i({path:n,arrayElement:!1});return r.mc(t),r}fc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return vo(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(qg(this.dataSource)&&gb.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class _b{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||zo(t)}I(t,n,r,s=!1){return new Ac({dataSource:t,methodName:n,targetDoc:r,path:se.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hg(e){const t=e._freezeSettings(),n=zo(e._databaseId);return new _b(e._databaseId,!!t.ignoreUndefinedProperties,n)}function yb(e,t,n,r,s,i={}){const a=e.I(i.merge||i.mergeFields?2:0,t,n,s);Gg("Data must be an object, but it was:",a,r);const l=zg(r,a);let c,h;if(i.merge)c=new qe(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Yo(t,p,n);if(!a.contains(m))throw new X(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wb(d,m)||d.push(m)}c=new qe(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new mb(new xe(l),c,h)}function Eb(e,t,n,r=!1){return bc(n,e.I(r?4:3,t))}function bc(e,t){if(Kg(e=Sn(e)))return Gg("Unsupported field value:",t,e),zg(e,t);if(e instanceof $g)return function(r,s){if(!qg(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=bc(l,s.gc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Sn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=kt.fromDate(r);return{timestampValue:mo(s.serializer,i)}}if(r instanceof kt){const i=new kt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mo(s.serializer,i)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Me)return{bytesValue:lg(s.serializer,r._byteString)};if(r instanceof te){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:uc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ke)return function(a,l){const c=a instanceof Ke?a.toArray():a;return{mapValue:{fields:{[Mp]:{stringValue:Lp},[uo]:{arrayValue:{values:c.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return oc(l.serializer,d)})}}}}}}(r,s);if(gg(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Mo(r)}`)}(e,t)}function zg(e,t){const n={};return Vp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Rr(e,(r,s)=>{const i=bc(s,t.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Kg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof kt||e instanceof hn||e instanceof Me||e instanceof te||e instanceof $g||e instanceof Ke||gg(e))}function Gg(e,t,n){if(!Kg(n)||!Cp(n)){const r=Mo(n);throw r==="an object"?t.yc(e+" a custom object"):t.yc(e+" "+r)}}function Yo(e,t,n){if((t=Sn(t))instanceof jg)return t._internalPath;if(typeof t=="string")return Tb(e,t);throw vo("Field path arguments must be of type string or ",e,!1,void 0,n)}const vb=new RegExp("[~\\*/\\[\\]]");function Tb(e,t,n){if(t.search(vb)>=0)throw vo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new jg(...t.split("."))._internalPath}catch{throw vo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function vo(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new X(x.INVALID_ARGUMENT,l+e+c)}function wb(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Ib{convertValue(t,n="none"){switch(nr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(er(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw st(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Rr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var r,s,i;const n=(i=(s=(r=t.fields)==null?void 0:r[uo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>Ut(a.doubleValue));return new Ke(n)}convertGeoPoint(t){return new hn(Ut(t.latitude),Ut(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Uo(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ri(t));default:return null}}convertTimestamp(t){const n=tr(t);return new kt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Dt.fromString(t);Rt(pg(r),9688,{name:t});const s=new si(r.get(1),r.get(3)),i=new et(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Ab extends Ib{constructor(t){super(),this.firestore=t}convertBytes(t){return new Me(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new te(this.firestore,null,n)}}const Rf="@firebase/firestore",Sf="4.14.0";/**
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
 */class Wg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(Yo("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bb extends Wg{data(){return super.data()}}/**
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
 */function Rb(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new X(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rc{}class Sb extends Rc{}function Cb(e,t,...n){let r=[];t instanceof Rc&&r.push(t),r=r.concat(n),function(i){const a=i.filter(c=>c instanceof Sc).length,l=i.filter(c=>c instanceof Jo).length;if(a>1||a>0&&l>0)throw new X(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Jo extends Sb{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Jo(t,n,r)}_apply(t){const n=this._parse(t);return Qg(t._query,n),new ls(t.firestore,t.converter,ml(t._query,n))}_parse(t){const n=Hg(t.firestore);return function(i,a,l,c,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new X(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Pf(p,d);const D=[];for(const V of p)D.push(Cf(c,i,V));m={arrayValue:{values:D}}}else m=Cf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Pf(p,d),m=Eb(l,a,p,d==="in"||d==="not-in");return Ht.create(h,d,m)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Pb(e,t,n){const r=t,s=Yo("where",e);return Jo._create(s,r,n)}class Sc extends Rc{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Sc(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:We.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Qg(a,c),a=ml(a,c)}(t._query,n),new ls(t.firestore,t.converter,ml(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Cf(e,t,n){if(typeof(n=Sn(n))=="string"){if(n==="")throw new X(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kp(t)&&n.indexOf("/")!==-1)throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Dt.fromString(n));if(!et.isDocumentKey(r))throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $h(e,new et(r))}if(n instanceof te)return $h(e,n._key);throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mo(n)}.`)}function Pf(e,t){if(!Array.isArray(e)||e.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Qg(e,t){const n=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Vb(e,t,n){let r;return r=e?e.toFirestore(t):t,r}class Bi{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Wr extends Wg{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Yo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Wr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Wr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wr._jsonSchema={type:Kt("string",Wr._jsonSchemaVersion),bundleSource:Kt("string","DocumentSnapshot"),bundleName:Kt("string"),bundle:Kt("string")};class Qi extends Wr{data(t={}){return super.data(t)}}class Qr{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Bi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Qi(this._firestore,this._userDataWriter,r.key,r,new Bi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Qi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Bi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Qi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Bi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:Db(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Qr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=tc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Db(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return st(61501,{type:e})}}/**
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
 */Qr._jsonSchemaVersion="firestore/querySnapshot/1.0",Qr._jsonSchema={type:Kt("string",Qr._jsonSchemaVersion),bundleSource:Kt("string","QuerySnapshot"),bundleName:Kt("string"),bundle:Kt("string")};function Nb(e){e=ei(e,ls);const t=ei(e.firestore,Qo),n=Bg(t),r=new Ab(t);return Rb(e._query),ab(n,e._query).then(s=>new Qr(t,r,e,s))}function kb(e){return Yg(ei(e.firestore,Qo),[new ac(e._key,cn.none())])}function Ob(e,t){const n=ei(e.firestore,Qo),r=fb(e),s=Vb(e.converter,t),i=Hg(e.firestore);return Yg(n,[yb(i,"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,cn.exists(!1))]).then(()=>r)}function Yg(e,t){const n=Bg(e);return lb(n,t)}(function(t,n=!0){iw(KT),Xn(new Cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Qo(new lw(r.getProvider("auth-internal")),new hw(a,r.getProvider("app-check-internal")),Cw(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),an(Rf,Sf,t),an(Rf,Sf,"esm2020")})();const Jg="@firebase/installations",Cc="0.6.21";/**
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
 */const Xg=1e4,Zg=`w:${Cc}`,tm="FIS_v2",xb="https://firebaseinstallations.googleapis.com/v1",Mb=60*60*1e3,Lb="installations",Fb="Installations";/**
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
 */const Ub={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Tr=new ko(Lb,Fb,Ub);function em(e){return e instanceof br&&e.code.includes("request-failed")}/**
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
 */function nm({projectId:e}){return`${xb}/projects/${e}/installations`}function rm(e){return{token:e.token,requestStatus:2,expiresIn:jb(e.expiresIn),creationTime:Date.now()}}async function sm(e,t){const r=(await t.json()).error;return Tr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function im({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Bb(e,{refreshToken:t}){const n=im(e);return n.append("Authorization",$b(t)),n}async function om(e){const t=await e();return t.status>=500&&t.status<600?e():t}function jb(e){return Number(e.replace("s","000"))}function $b(e){return`${tm} ${e}`}/**
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
 */async function qb({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=nm(e),s=im(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:tm,appId:e.appId,sdkVersion:Zg},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await om(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:rm(h.authToken)}}else throw await sm("Create Installation",c)}/**
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
 */function am(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Hb(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zb=/^[cdef][\w-]{21}$/,Sl="";function Kb(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Gb(e);return zb.test(n)?n:Sl}catch{return Sl}}function Gb(e){return Hb(e).substr(0,22)}/**
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
 */function Xo(e){return`${e.appName}!${e.appId}`}/**
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
 */const lm=new Map;function cm(e,t){const n=Xo(e);um(n,t),Wb(n,t)}function um(e,t){const n=lm.get(e);if(n)for(const r of n)r(t)}function Wb(e,t){const n=Qb();n&&n.postMessage({key:e,fid:t}),Yb()}let mr=null;function Qb(){return!mr&&"BroadcastChannel"in self&&(mr=new BroadcastChannel("[Firebase] FID Change"),mr.onmessage=e=>{um(e.data.key,e.data.fid)}),mr}function Yb(){lm.size===0&&mr&&(mr.close(),mr=null)}/**
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
 */const Jb="firebase-installations-database",Xb=1,wr="firebase-installations-store";let Fa=null;function Pc(){return Fa||(Fa=Oo(Jb,Xb,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wr)}}})),Fa}async function To(e,t){const n=Xo(e),s=(await Pc()).transaction(wr,"readwrite"),i=s.objectStore(wr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&cm(e,t.fid),t}async function hm(e){const t=Xo(e),r=(await Pc()).transaction(wr,"readwrite");await r.objectStore(wr).delete(t),await r.done}async function Zo(e,t){const n=Xo(e),s=(await Pc()).transaction(wr,"readwrite"),i=s.objectStore(wr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&cm(e,l.fid),l}/**
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
 */async function Vc(e){let t;const n=await Zo(e.appConfig,r=>{const s=Zb(r),i=tR(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Sl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Zb(e){const t=e||{fid:Kb(),registrationStatus:0};return fm(t)}function tR(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Tr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=eR(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:nR(e)}:{installationEntry:t}}async function eR(e,t){try{const n=await qb(e,t);return To(e.appConfig,n)}catch(n){throw em(n)&&n.customData.serverCode===409?await hm(e.appConfig):await To(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function nR(e){let t=await Vf(e.appConfig);for(;t.registrationStatus===1;)await am(100),t=await Vf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vc(e);return r||n}return t}function Vf(e){return Zo(e,t=>{if(!t)throw Tr.create("installation-not-found");return fm(t)})}function fm(e){return rR(e)?{fid:e.fid,registrationStatus:0}:e}function rR(e){return e.registrationStatus===1&&e.registrationTime+Xg<Date.now()}/**
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
 */async function sR({appConfig:e,heartbeatServiceProvider:t},n){const r=iR(e,n),s=Bb(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Zg,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await om(()=>fetch(r,l));if(c.ok){const h=await c.json();return rm(h)}else throw await sm("Generate Auth Token",c)}function iR(e,{fid:t}){return`${nm(e)}/${t}/authTokens:generate`}/**
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
 */async function Dc(e,t=!1){let n;const r=await Zo(e.appConfig,i=>{if(!dm(i))throw Tr.create("not-registered");const a=i.authToken;if(!t&&lR(a))return i;if(a.requestStatus===1)return n=oR(e,t),i;{if(!navigator.onLine)throw Tr.create("app-offline");const l=uR(i);return n=aR(e,l),l}});return n?await n:r.authToken}async function oR(e,t){let n=await Df(e.appConfig);for(;n.authToken.requestStatus===1;)await am(100),n=await Df(e.appConfig);const r=n.authToken;return r.requestStatus===0?Dc(e,t):r}function Df(e){return Zo(e,t=>{if(!dm(t))throw Tr.create("not-registered");const n=t.authToken;return hR(n)?{...t,authToken:{requestStatus:0}}:t})}async function aR(e,t){try{const n=await sR(e,t),r={...t,authToken:n};return await To(e.appConfig,r),n}catch(n){if(em(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hm(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await To(e.appConfig,r)}throw n}}function dm(e){return e!==void 0&&e.registrationStatus===2}function lR(e){return e.requestStatus===2&&!cR(e)}function cR(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Mb}function uR(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function hR(e){return e.requestStatus===1&&e.requestTime+Xg<Date.now()}/**
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
 */async function fR(e){const t=e,{installationEntry:n,registrationPromise:r}=await Vc(t);return r?r.catch(console.error):Dc(t).catch(console.error),n.fid}/**
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
 */async function dR(e,t=!1){const n=e;return await pR(n),(await Dc(n,t)).token}async function pR(e){const{registrationPromise:t}=await Vc(e);t&&await t}/**
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
 */function gR(e){if(!e||!e.options)throw Ua("App Configuration");if(!e.name)throw Ua("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ua(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ua(e){return Tr.create("missing-app-config-values",{valueName:e})}/**
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
 */const pm="installations",mR="installations-internal",_R=e=>{const t=e.getProvider("app").getImmediate(),n=gR(t),r=xo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yR=e=>{const t=e.getProvider("app").getImmediate(),n=xo(t,pm).getImmediate();return{getId:()=>fR(n),getToken:s=>dR(n,s)}};function ER(){Xn(new Cn(pm,_R,"PUBLIC")),Xn(new Cn(mR,yR,"PRIVATE"))}ER();an(Jg,Cc);an(Jg,Cc,"esm2020");/**
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
 */const vR="/firebase-messaging-sw.js",TR="/firebase-cloud-messaging-push-scope",gm="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",wR="https://fcmregistrations.googleapis.com/v1",mm="google.c.a.c_id",IR="google.c.a.c_l",AR="google.c.a.ts",bR="google.c.a.e",Nf=1e4;var kf;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(kf||(kf={}));/**
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
 */function En(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function RR(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Ba="fcm_token_details_db",SR=5,Of="fcm_token_object_Store";async function CR(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Ba))return null;let t=null;return(await Oo(Ba,SR,{upgrade:async(r,s,i,a)=>{if(s<2||!r.objectStoreNames.contains(Of))return;const l=a.objectStore(Of),c=await l.index("fcmSenderId").get(e);if(await l.clear(),!!c){if(s===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;t={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:En(h.vapidKey)}}}else if(s===3){const h=c;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:En(h.auth),p256dh:En(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:En(h.vapidKey)}}}else if(s===4){const h=c;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:En(h.auth),p256dh:En(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:En(h.vapidKey)}}}}}})).close(),await Va(Ba),await Va("fcm_vapid_details_db"),await Va("undefined"),PR(t)?t:null}function PR(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const VR="firebase-messaging-database",DR=1,Ir="firebase-messaging-store";let ja=null;function Nc(){return ja||(ja=Oo(VR,DR,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ir)}}})),ja}async function _m(e){const t=Oc(e),r=await(await Nc()).transaction(Ir).objectStore(Ir).get(t);if(r)return r;{const s=await CR(e.appConfig.senderId);if(s)return await kc(e,s),s}}async function kc(e,t){const n=Oc(e),s=(await Nc()).transaction(Ir,"readwrite");return await s.objectStore(Ir).put(t,n),await s.done,t}async function NR(e){const t=Oc(e),r=(await Nc()).transaction(Ir,"readwrite");await r.objectStore(Ir).delete(t),await r.done}function Oc({appConfig:e}){return e.appId}/**
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
 */const kR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ge=new ko("messaging","Messaging",kR);/**
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
 */async function OR(e,t){const n=await Mc(e),r=Em(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(xc(e.appConfig),s)).json()}catch(a){throw ge.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw ge.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw ge.create("token-subscribe-no-token");return i.token}async function xR(e,t){const n=await Mc(e),r=Em(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${xc(e.appConfig)}/${t.token}`,s)).json()}catch(a){throw ge.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw ge.create("token-update-failed",{errorInfo:a})}if(!i.token)throw ge.create("token-update-no-token");return i.token}async function ym(e,t){const r={method:"DELETE",headers:await Mc(e)};try{const i=await(await fetch(`${xc(e.appConfig)}/${t}`,r)).json();if(i.error){const a=i.error.message;throw ge.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw ge.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function xc({projectId:e}){return`${wR}/projects/${e}/registrations`}async function Mc({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Em({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==gm&&(s.web.applicationPubKey=r),s}/**
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
 */const MR=7*24*60*60*1e3;async function LR(e){const t=await BR(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:En(t.getKey("auth")),p256dh:En(t.getKey("p256dh"))},r=await _m(e.firebaseDependencies);if(r){if(jR(r.subscriptionOptions,n))return Date.now()>=r.createTime+MR?UR(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ym(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return xf(e.firebaseDependencies,n)}else return xf(e.firebaseDependencies,n)}async function FR(e){const t=await _m(e.firebaseDependencies);t&&(await ym(e.firebaseDependencies,t.token),await NR(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function UR(e,t){try{const n=await xR(e.firebaseDependencies,t),r={...t,token:n,createTime:Date.now()};return await kc(e.firebaseDependencies,r),n}catch(n){throw n}}async function xf(e,t){const r={token:await OR(e,t),createTime:Date.now(),subscriptionOptions:t};return await kc(e,r),r.token}async function BR(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:RR(t)})}function jR(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&s&&i}/**
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
 */function Mf(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return $R(t,e),qR(t,e),HR(t,e),t}function $R(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const i=t.notification.icon;i&&(e.notification.icon=i)}function qR(e,t){t.data&&(e.data=t.data)}function HR(e,t){var s,i,a,l;if(!t.fcmOptions&&!((s=t.notification)!=null&&s.click_action))return;e.fcmOptions={};const n=((i=t.fcmOptions)==null?void 0:i.link)??((a=t.notification)==null?void 0:a.click_action);n&&(e.fcmOptions.link=n);const r=(l=t.fcmOptions)==null?void 0:l.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}/**
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
 */function zR(e){return typeof e=="object"&&!!e&&mm in e}/**
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
 */function KR(e){if(!e||!e.options)throw $a("App Configuration Object");if(!e.name)throw $a("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw $a(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function $a(e){return ge.create("missing-app-config-values",{valueName:e})}/**
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
 */class GR{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=KR(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function vm(e){try{e.swRegistration=await navigator.serviceWorker.register(vR,{scope:TR}),e.swRegistration.update().catch(()=>{}),await WR(e.swRegistration)}catch(t){throw ge.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function WR(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Nf} ms`)),Nf),s=e.installing||e.waiting;e.active?(clearTimeout(r),t()):s?s.onstatechange=i=>{var a;((a=i.target)==null?void 0:a.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function QR(e,t){if(!t&&!e.swRegistration&&await vm(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw ge.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function YR(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=gm)}/**
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
 */async function Tm(e,t){if(!navigator)throw ge.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw ge.create("permission-blocked");return await YR(e,t==null?void 0:t.vapidKey),await QR(e,t==null?void 0:t.serviceWorkerRegistration),LR(e)}/**
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
 */async function JR(e,t,n){const r=XR(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[mm],message_name:n[IR],message_time:n[AR],message_device_time:Math.floor(Date.now()/1e3)})}function XR(e){switch(e){case li.NOTIFICATION_CLICKED:return"notification_open";case li.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function ZR(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===li.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Mf(n)):e.onMessageHandler.next(Mf(n)));const r=n.data;zR(r)&&r[bR]==="1"&&await JR(e,n.messageType,r)}const Lf="@firebase/messaging",Ff="0.12.25";/**
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
 */const tS=e=>{const t=new GR(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>ZR(t,n)),t},eS=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Tm(t,r)}};function nS(){Xn(new Cn("messaging",tS,"PUBLIC")),Xn(new Cn("messaging-internal",eS,"PRIVATE")),an(Lf,Ff),an(Lf,Ff,"esm2020")}/**
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
 */async function rS(){try{await up()}catch{return!1}return typeof window<"u"&&cp()&&qv()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function sS(e){if(!navigator)throw ge.create("only-available-in-window");return e.swRegistration||await vm(e),FR(e)}/**
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
 */function wm(e=mp()){return rS().then(t=>{if(!t)throw ge.create("unsupported-browser")},t=>{throw ge.create("indexed-db-unsupported")}),xo(Sn(e),"messaging").getImmediate()}async function Im(e,t){return e=Sn(e),Tm(e,t)}function iS(e){return e=Sn(e),sS(e)}nS();const Lc=gp({apiKey:"AIzaSyD_O5AAH6ESu1Lls8I9q8parzCEIuWCKts",authDomain:"partita-domani-a-roma.firebaseapp.com",projectId:"partita-domani-a-roma",storageBucket:"partita-domani-a-roma.firebasestorage.app",messagingSenderId:"31480853662",appId:"1:31480853662:web:71c40bb1c92ec7ee2e778f"}),Am=db(Lc);function Cl(){return"Notification"in window&&"serviceWorker"in navigator}async function oS(){if(!Cl())return"unsupported";if(await Notification.requestPermission()!=="granted")return"denied";const t=await navigator.serviceWorker.ready,n=wm(Lc),r=await Im(n,{vapidKey:"BL50BULN2vVjPWV50HRQel8YKvda3ElC92lKEbjxjwNll2RCIJ2_m2guRIZYaeDHcBP_-NGzrDFk6uClm3cC2pk",serviceWorkerRegistration:t});return r?(await Ob(Ug(Am,"subscriptions"),{token:r,createdAt:new Date().toISOString()}),"granted"):"error"}async function aS(){const e=await navigator.serviceWorker.ready,t=wm(Lc);try{const n=await Im(t,{vapidKey:"BL50BULN2vVjPWV50HRQel8YKvda3ElC92lKEbjxjwNll2RCIJ2_m2guRIZYaeDHcBP_-NGzrDFk6uClm3cC2pk",serviceWorkerRegistration:e});n&&(await Nb(Cb(Ug(Am,"subscriptions"),Pb("token","==",n)))).forEach(s=>kb(s.ref))}catch{}await iS(t)}const lS=["aria-label","aria-expanded"],cS={class:"center","aria-live":"polite","aria-atomic":"true"},uS={key:0,class:"next-match"},hS={key:1},fS={class:"orario"},qa=80,ji={__name:"HomeView",props:{dayOffset:{type:Number,default:1},testMode:{type:String,default:null}},setup(e){const t=e,n=Le("appState"),r=qn(null),s=qn(null),i=qn(""),a=t.dayOffset===0?"oggi":"domani",l=Cl(),c=qn(Cl()?Notification.permission==="granted"?"subscribed":Notification.permission==="denied"?"denied":"idle":"unsupported");async function h(){n.loaded=!1;try{const v=await oS();c.value=v==="granted"?"subscribed":v,ke("notify_subscribe",{result:v})}catch{c.value="idle"}finally{n.loaded=!0}}async function d(){n.loaded=!1;try{await aS(),c.value="idle",ke("notify_unsubscribe")}catch{c.value="subscribed"}finally{n.loaded=!0}}function p(v){return new Date(v+"T12:00:00").toLocaleDateString("it-IT",{weekday:"long",day:"numeric",month:"long"})}function m(v){return v.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Rome"})}function E(v){const _=Math.floor(Math.random()*10)+1,b=`/partita-domani-a-roma/images/${v?"si":"no"}-sfondo${_}.jpg`;return i.value=b,new Promise(A=>{const R=new Image;R.onload=R.onerror=A,R.src=b})}async function D(){n.loaded=!1;try{if(t.testMode==="si")r.value={timestamp:new Date,homeTeam:{name:"roma",article:"la"},awayTeamName:"Test FC"};else if(t.testMode!=="no"){const v=new Date;v.setDate(v.getDate()+t.dayOffset),r.value=await yh(v)}if(!r.value&&t.testMode==null)if(t.dayOffset===0){const v=new Date;v.setDate(v.getDate()+1),await yh(v)||(s.value=await Eh())}else s.value=await Eh();await E(!!r.value),ke("result_viewed",{result:r.value?"si":"no",day:a})}finally{n.loaded=!0}}const V=!!navigator.share;async function F(){const v=r.value?`C'è la partita ${a} a Roma! Gioca ${r.value.homeTeam.article} ${r.value.homeTeam.name} alle ${m(r.value.timestamp)}.`:`Non c'è la partita ${a} a Roma.`;ke("share_tapped");try{await navigator.share({title:"C'è la partita a Roma?",text:v,url:window.location.href}),ke("share_completed")}catch{}}let z=0,B=0,q=!1;function W(v){n.menuOpen||(z=v.touches[0].clientY)}function it(v){if(v.preventDefault(),n.menuOpen)return;const _=v.touches[0].clientY-z;_>0&&(B=Math.min(_,qa*1.5),!q&&B>=qa?(q=!0,n.loaded=!1):q&&B<qa&&(q=!1,n.loaded=!0))}async function ft(){const v=q;B=0,q=!1,v?(ke("pull_to_refresh"),await D()):n.loaded=!0}return di(D),(v,_)=>{const I=pi("RouterLink");return Ee(),Ve(De,null,[at("button",{class:"menu","aria-label":Ot(n).menuOpen?"Chiudi menu":"Apri menu","aria-expanded":Ot(n).menuOpen.toString(),"aria-controls":"main-menu",onClick:_[0]||(_[0]=b=>{Ot(n).menuOpen=!Ot(n).menuOpen,Ot(ke)("menu_opened")})},null,8,lS),Ot(l)&&c.value==="subscribed"?(Ee(),Ve("button",{key:0,class:"notify-btn","aria-label":"Disattiva notifiche",onClick:_[1]||(_[1]=b=>d())},[..._[3]||(_[3]=[at("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},[at("path",{d:"M11 3C8.79086 3 7 4.79086 7 7V9.2C7 10.1 6.7 10.97 6.15 11.65L5.2 12.8C4.64 13.48 5.12 14.5 6 14.5H16C16.88 14.5 17.36 13.48 16.8 12.8L15.85 11.65C15.3 10.97 15 10.1 15 9.2V7C15 4.79086 13.2091 3 11 3Z",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"}),at("path",{d:"M9 17C9.4 17.6 10.1 18 11 18C11.9 18 12.6 17.6 13 17",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"}),at("path",{d:"M5 5L17 17",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])])):vn("",!0),V?(Ee(),Ve("button",{key:1,class:"share-btn",onClick:F,"aria-label":"Condividi questa pagina"},[..._[4]||(_[4]=[at("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",focusable:"false"},[at("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),at("polyline",{points:"16 6 12 2 8 6"}),at("line",{x1:"12",y1:"2",x2:"12",y2:"15"})],-1)])])):vn("",!0),at("main",{class:zn(["cont-inner",{menu_opened:Ot(n).menuOpen}]),style:So({backgroundImage:`url(${i.value})`}),onTouchstartPassive:W,onTouchmove:dE(it,["prevent"]),onTouchendPassive:ft},[at("div",cS,[at("h1",null,[_[5]||(_[5]=Oe("C'è la partita",-1)),_[6]||(_[6]=at("br",null,null,-1)),Oe(Ze(Ot(a))+" a Roma?",1)]),at("h2",null,Ze(r.value?"SI":"No"),1),!r.value&&s.value?(Ee(),Ve("p",uS,[_[7]||(_[7]=at("b",null,"Prossima partita:",-1)),Oe(" "+Ze(p(s.value.date))+" · ",1),at("span",{class:zn(s.value.homeTeam.name)},Ze(s.value.homeTeam.name),3),s.value.timestamp?(Ee(),Ve(De,{key:0},[Oe(" · ore "+Ze(m(s.value.timestamp)),1)],64)):vn("",!0)])):vn("",!0),r.value?(Ee(),Ve("h3",hS,[Oe(" Gioca "+Ze(r.value.homeTeam.article)+" ",1),at("span",{class:zn(r.value.homeTeam.name)},Ze(r.value.homeTeam.name),3),_[8]||(_[8]=at("br",null,null,-1)),_[9]||(_[9]=Oe(" alle ",-1)),at("span",fS,Ze(m(r.value.timestamp)),1)])):vn("",!0),Ot(l)&&c.value==="idle"?(Ee(),Ve("button",{key:2,class:"notify-cta",onClick:h,"aria-label":"Attiva le notifiche per le prossime partite"}," Avvisami la prossima volta: Attiva le Notifiche ")):vn("",!0)]),zt(I,{class:"switch",to:Ot(a)==="domani"?"/oggi":"/","aria-label":Ot(a)==="domani"?"Controlla se c'è la partita oggi":"Controlla se c'è la partita domani",onClick:_[2]||(_[2]=b=>Ot(ke)("switch_day",{to:Ot(a)==="domani"?"oggi":"domani"}))},{default:fi(()=>[Oe(Ze(Ot(a)==="domani"?"e oggi?":"e domani?"),1)]),_:1},8,["to","aria-label"])],38)],64)}}},dS={class:"policy-bar"},pS={__name:"CookiePolicy",setup(e){const t=Le("appState");di(()=>{t.loaded=!0});function n(){localStorage.removeItem("cookiesChoice"),ke("consent_reset"),window.location.reload()}return(r,s)=>{const i=pi("RouterLink");return Ee(),Ve(De,null,[at("div",{class:"policy-page"},[at("div",{class:"policy-content"},[s[0]||(s[0]=ro('<h1>Cookie Policy</h1><p> Informativa estesa ai sensi del Reg. UE 2016/679 (GDPR), del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018, e delle Linee guida del Garante per la protezione dei dati personali del 10 giugno 2021 in materia di cookie e altri strumenti di tracciamento. </p><h1>Titolare del trattamento</h1><p> Valerio Pierbattista<br> Email: <a href="mailto:omegaiori@gmail.com">omegaiori@gmail.com</a><br> Sito: <strong>vlrprbttst.github.io/partita-domani-a-roma</strong></p><h1>Cosa sono i cookie</h1><p> I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell&#39;utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Strumenti analoghi (come il localStorage) operano in modo simile e sono coperti dalla presente informativa. </p><h1>Cookie e strumenti utilizzati</h1><h1>1. Strumenti tecnici (senza consenso)</h1><p> Il sito utilizza il <strong>localStorage</strong> del browser per memorizzare la preferenza dell&#39;utente in merito ai cookie analitici. Non si tratta di un cookie ma di un dato locale al dispositivo, non trasmesso a terzi, che persiste fino alla cancellazione manuale. </p><ul><li><p><strong>cookiesChoice</strong> — localStorage — Scopo: memorizzare la scelta accetta/rifiuta cookie analitici — Durata: persistente fino a cancellazione manuale — Terze parti: nessuna </p></li></ul><h1>2. Cookie analitici (solo con consenso)</h1><p> Previa accettazione da parte dell&#39;utente, il sito utilizza <strong>Google Analytics 4</strong> (Google LLC, USA) per raccogliere dati statistici anonimi sull&#39;utilizzo del sito. Google Analytics opera in modalità <em>Consent Mode v2</em>: in assenza di consenso, nessun cookie di profilazione viene impostato e nessun dato personale viene trasmesso. </p><ul><li><p><strong>_ga</strong> — Cookie — Scopo: distinguere gli utenti unici — Durata: 2 anni — Titolare: Google LLC </p></li><li><p><strong>_ga_T02RCCNKG9</strong> — Cookie — Scopo: mantenere lo stato della sessione Analytics — Durata: 2 anni — Titolare: Google LLC </p></li></ul><p> I dati raccolti da Google Analytics includono: tipo di dispositivo e browser, paese di accesso, pagine visitate, durata della visita. Nessun dato personale identificativo (nome, email, IP completo) viene raccolto o trasmesso. Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a> e <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">opt-out da Google Analytics</a>. </p><h1>3. Notifiche push (solo su consenso esplicito)</h1><p> Se l&#39;utente sceglie di attivare le notifiche push tramite l&#39;apposito bottone, il sito utilizza <strong>Firebase Cloud Messaging</strong> (Google LLC, USA) per inviare notifiche il giorno prima di una partita a Roma. L&#39;attivazione richiede il consenso esplicito del browser e può essere revocata in qualsiasi momento tramite l&#39;icona campanella presente nell&#39;app. </p><ul><li><p><strong>Token FCM</strong> — Identificativo anonimo generato dal browser — Scopo: recapitare le notifiche push — Conservato su: Firebase Firestore (Google LLC, USA) — Durata: fino alla disattivazione da parte dell&#39;utente — Terze parti: Google LLC </p></li></ul><p> Il token FCM non contiene dati personali identificativi (nome, email, IP). Viene eliminato da Firestore non appena l&#39;utente disattiva le notifiche. Per maggiori informazioni: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Privacy e sicurezza in Firebase</a>. </p><h1>Cookie di terze parti</h1><p> Questo sito <strong>non utilizza</strong> cookie di social network (Facebook, Instagram, X/Twitter, TikTok), cookie pubblicitari né cookie di profilazione di alcun tipo. </p><h1>Gestione del consenso</h1><p> Al primo accesso viene mostrato un banner che consente di accettare o rifiutare i cookie analitici. La scelta può essere modificata in qualsiasi momento tramite il bottone qui sotto. </p>',22)),at("button",{class:"reset-btn",onClick:n},"Modifica preferenze cookie"),s[1]||(s[1]=ro('<h1>Gestione tramite browser</h1><p> È possibile bloccare, cancellare o limitare i cookie direttamente dalle impostazioni del proprio browser. Le istruzioni variano a seconda del browser utilizzato: </p><ul><li><p><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></p></li><li><p><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></p></li><li><p><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></p></li><li><p><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></p></li></ul><p> Per informazioni generali sulla gestione dei cookie: <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>. </p><h1>Modifiche alla presente informativa</h1><p> Il Titolare si riserva di modificare la presente Cookie Policy in qualsiasi momento. Le modifiche hanno efficacia dal momento della pubblicazione sul sito. <br><strong>Ultimo aggiornamento: maggio 2026</strong></p>',6))])]),at("div",dS,[zt(i,{class:"back-btn",to:"/"},{default:fi(()=>[...s[2]||(s[2]=[Oe("← Torna alla home",-1)])]),_:1})])],64)}}},gS=Av({history:nv("/partita-domani-a-roma/"),routes:[{path:"/",component:ji,props:{dayOffset:1}},{path:"/oggi",component:ji,props:{dayOffset:0}},{path:"/si",component:ji,props:{testMode:"si"}},{path:"/no",component:ji,props:{testMode:"no"}},{path:"/cookie-policy",component:pS},{path:"/:pathMatch(.*)*",redirect:"/"}]}),mS=["aria-hidden"],_S={__name:"MenuPanel",props:{open:Boolean},emits:["toggle"],setup(e){return(t,n)=>{const r=pi("RouterLink");return Ee(),Ve("nav",{id:"main-menu",class:zn(["menu-cont",{menu_opened:e.open}]),"aria-label":"Menu principale","aria-hidden":(!e.open).toString()},[n[2]||(n[2]=at("div",{class:"stripes-top"},null,-1)),at("button",{class:"close",onClick:n[0]||(n[0]=s=>t.$emit("toggle")),"aria-label":"Chiudi menu"}),n[3]||(n[3]=ro("<h1>Perché?</h1><p> Questo servizio è dedicato a tutti i romani che non seguono il calcio, ma ne sono vittima ogni settimana: <b>traffico</b>, aree di parcheggio <b>transennate</b>, strade <b>chiuse con conseguente deviazione del traffico</b>. </p><p> Chi non segue il calcio spesso <b>scopre troppo tardi</b> lo svolgersi di una partita, e si trova a fronteggiare i disagi del caso <b>senza potersi organizzare in anticipo</b>. </p><h1>Installalo come app</h1><p> Puoi aggiungere questo sito alla schermata Home del tuo telefono e usarlo come una vera app, senza barre del browser. </p><p><b>Su Android</b>: apri il sito in Chrome, tocca i tre puntini in alto a destra e seleziona <b>Aggiungi a schermata Home</b> oppure <b>Installa app</b>. </p><p><b>Su iPhone</b>: apri il sito in Safari, tocca l&#39;icona di condivisione (il quadrato con la freccia in su) e seleziona <b>Aggiungi a schermata Home</b>. </p><h1>Privacy</h1>",8)),at("p",null,[zt(r,{to:"/cookie-policy"},{default:fi(()=>[...n[1]||(n[1]=[Oe("Cookie Policy",-1)])]),_:1})]),n[4]||(n[4]=ro('<h1>Credits</h1><ul><li><p> Ideato e realizzato da <a href="https://www.linkedin.com/in/valeriopierbattista/" target="_blank" rel="noopener noreferrer">Valerio Pierbattista</a> e <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude.ai</a></p></li><li><p>Le immagini di sfondo sono prese da Google</p></li><li><p> Il repository del progetto è su <a href="https://github.com/vlrprbttst/partita-domani-a-roma/tree/rewrite-modern" target="_blank" rel="noopener noreferrer">Github</a></p></li><li><p> Le informazioni sulle partite sono prese da <a href="https://www.football-data.org" target="_blank" rel="noopener noreferrer">www.football-data.org</a></p></li></ul>',2))],10,mS)}}},yS={key:0,class:"analytics-notice"},ES={__name:"ConsentBanner",setup(e){const t=qn(!1);function n(){typeof window.gtag=="function"&&window.gtag("consent","update",{analytics_storage:"granted"})}di(()=>{const i=localStorage.getItem("cookiesChoice");i==="accepted"?n():i||(t.value=!0)});function r(){localStorage.setItem("cookiesChoice","accepted"),t.value=!1,n(),ke("consent_accepted")}function s(){localStorage.setItem("cookiesChoice","refused"),t.value=!1}return(i,a)=>{const l=pi("RouterLink");return t.value?(Ee(),Ve("div",yS,[at("p",null,[a[1]||(a[1]=Oe("Questo sito usa cookie di Google Analytics per statistiche anonime. ",-1)),zt(l,{to:"/cookie-policy"},{default:fi(()=>[...a[0]||(a[0]=[Oe("Maggiori info",-1)])]),_:1})]),at("div",{class:"analytics-notice__actions"},[at("button",{onClick:s,"aria-label":"Rifiuta i cookie analitici"},"Rifiuta"),at("button",{onClick:r,"aria-label":"Accetta i cookie analitici"},"Accetta")])])):vn("",!0)}}},vS={key:0,class:"overlay",role:"status","aria-live":"polite","aria-label":"Caricamento in corso"},TS={key:0,class:"install-banner",role:"banner","aria-label":"Installa l'app"},wS=["src"],IS={class:"cont",id:"main-content"},AS={__name:"App",setup(e){const t=ui({loaded:!1,menuOpen:!1});Ms("appState",t);const n=navigator.userAgent||navigator.vendor||window.opera,r=/iPad|iPhone|iPod/i.test(n)?"isMobile iOS":/Android/i.test(n)?"isMobile android":"",s=bv();Ls(()=>s.path,()=>{t.menuOpen=!1});let i=null;function a(){const m=new Date;m.setDate(m.getDate()+1),m.setHours(0,0,0,0),i=setTimeout(()=>window.location.reload(),m-Date.now())}const l=qn(null),c=qn(!1),h="/partita-domani-a-roma/";function d(m){m.preventDefault(),l.value=m}async function p(){if(!l.value)return;ke("pwa_install_tapped"),l.value.prompt();const{outcome:m}=await l.value.userChoice;m==="accepted"&&ke("pwa_install_accepted"),l.value=null}return di(()=>{a(),window.addEventListener("beforeinstallprompt",d)}),ql(()=>{clearTimeout(i),window.removeEventListener("beforeinstallprompt",d)}),(m,E)=>{const D=pi("RouterView");return Ee(),Ve(De,null,[E[5]||(E[5]=at("a",{href:"#main-content",class:"skip-link"},"Salta al contenuto",-1)),t.loaded?vn("",!0):(Ee(),Ve("div",vS,[...E[2]||(E[2]=[at("div",{class:"message"},[at("div",{class:"spin"})],-1)])])),at("div",{class:zn(["page",[Ot(r),{menu_opened:t.menuOpen}]])},[E[4]||(E[4]=at("div",{class:"rotate-device"},null,-1)),zt(_S,{open:t.menuOpen,onToggle:E[0]||(E[0]=V=>t.menuOpen=!t.menuOpen)},null,8,["open"]),zt(ES),l.value&&!c.value?(Ee(),Ve("div",TS,[at("img",{src:`${Ot(h)}icons/android-chrome-192x192.png`,class:"install-banner__icon",alt:""},null,8,wS),E[3]||(E[3]=at("div",{class:"install-banner__text","aria-hidden":"true"},[at("strong",null,"Partita a Roma?"),at("span",null,"Aggiungi alla schermata home")],-1)),at("button",{class:"install-banner__btn",onClick:p,"aria-label":"Installa l'app sulla schermata home"},"Installa"),at("button",{class:"install-banner__close",onClick:E[1]||(E[1]=V=>c.value=!0),"aria-label":"Chiudi il banner di installazione"},"✕")])):vn("",!0),at("div",IS,[(Ee(),jd(D,{key:Ot(s).path}))])],2)],64)}}};mE(AS).use(gS).mount("#app");"serviceWorker"in navigator&&navigator.serviceWorker.register("/partita-domani-a-roma/sw.js");
