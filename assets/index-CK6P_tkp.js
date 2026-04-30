(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ya(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const St={},Pr=[],nn=()=>{},zh=()=>!1,so=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),io=e=>e.startsWith("onUpdate:"),re=Object.assign,Xa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pg=Object.prototype.hasOwnProperty,wt=(e,t)=>Pg.call(e,t),it=Array.isArray,Dr=e=>Gs(e)==="[object Map]",Gh=e=>Gs(e)==="[object Set]",zc=e=>Gs(e)==="[object Date]",ot=e=>typeof e=="function",Lt=e=>typeof e=="string",an=e=>typeof e=="symbol",It=e=>e!==null&&typeof e=="object",Kh=e=>(It(e)||ot(e))&&ot(e.then)&&ot(e.catch),Wh=Object.prototype.toString,Gs=e=>Wh.call(e),Dg=e=>Gs(e).slice(8,-1),Qh=e=>Gs(e)==="[object Object]",Za=e=>Lt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ms=Ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Vg=/-\w/g,ve=oo(e=>e.replace(Vg,t=>t.slice(1).toUpperCase())),Ng=/\B([A-Z])/g,mr=oo(e=>e.replace(Ng,"-$1").toLowerCase()),ao=oo(e=>e.charAt(0).toUpperCase()+e.slice(1)),$o=oo(e=>e?`on${ao(e)}`:""),en=(e,t)=>!Object.is(e,t),Ho=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Jh=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Og=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Gc;const lo=()=>Gc||(Gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function co(e){if(it(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Lt(r)?Lg(r):co(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Lt(e)||It(e))return e}const kg=/;(?![^(]*\))/g,xg=/:([^]+)/,Mg=/\/\*[^]*?\*\//g;function Lg(e){const t={};return e.replace(Mg,"").split(kg).forEach(n=>{if(n){const r=n.split(xg);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Fn(e){let t="";if(Lt(e))t=e;else if(it(e))for(let n=0;n<e.length;n++){const r=Fn(e[n]);r&&(t+=r+" ")}else if(It(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Fg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ug=Ya(Fg);function Yh(e){return!!e||e===""}function Bg(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=tl(e[r],t[r]);return n}function tl(e,t){if(e===t)return!0;let n=zc(e),r=zc(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=an(e),r=an(t),n||r)return e===t;if(n=it(e),r=it(t),n||r)return n&&r?Bg(e,t):!1;if(n=It(e),r=It(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),u=t.hasOwnProperty(a);if(l&&!u||!l&&u||!tl(e[a],t[a]))return!1}}return String(e)===String(t)}const Xh=e=>!!(e&&e.__v_isRef===!0),Je=e=>Lt(e)?e:e==null?"":it(e)||It(e)&&(e.toString===Wh||!ot(e.toString))?Xh(e)?Je(e.value):JSON.stringify(e,Zh,2):String(e),Zh=(e,t)=>Xh(t)?Zh(e,t.value):Dr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[qo(r,i)+" =>"]=s,n),{})}:Gh(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>qo(n))}:an(t)?qo(t):It(t)&&!it(t)&&!Qh(t)?String(t):t,qo=(e,t="")=>{var n;return an(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oe;class jg{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=oe,!t&&oe&&(this.index=(oe.scopes||(oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=oe;try{return oe=this,t()}finally{oe=n}}}on(){++this._on===1&&(this.prevScope=oe,oe=this)}off(){if(this._on>0&&--this._on===0){if(oe===this)oe=this.prevScope;else{let t=oe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $g(){return oe}let bt;const zo=new WeakSet;class tf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,oe&&oe.active&&oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zo.has(this)&&(zo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kc(this),rf(this);const t=bt,n=He;bt=this,He=!0;try{return this.fn()}finally{sf(this),bt=t,He=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)rl(t);this.deps=this.depsTail=void 0,Kc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_a(this)&&this.run()}get dirty(){return _a(this)}}let ef=0,_s,ys;function nf(e,t=!1){if(e.flags|=8,t){e.next=ys,ys=e;return}e.next=_s,_s=e}function el(){ef++}function nl(){if(--ef>0)return;if(ys){let t=ys;for(ys=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;_s;){let t=_s;for(_s=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function rf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function sf(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),rl(r),Hg(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function _a(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(of(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function of(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Vs)||(e.globalVersion=Vs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!_a(e))))return;e.flags|=2;const t=e.dep,n=bt,r=He;bt=e,He=!0;try{rf(e);const s=e.fn(e._value);(t.version===0||en(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{bt=n,He=r,sf(e),e.flags&=-3}}function rl(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)rl(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hg(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let He=!0;const af=[];function wn(){af.push(He),He=!1}function Tn(){const e=af.pop();He=e===void 0?!0:e}function Kc(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=bt;bt=void 0;try{t()}finally{bt=n}}}let Vs=0;class qg{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!bt||!He||bt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==bt)n=this.activeLink=new qg(bt,this),bt.deps?(n.prevDep=bt.depsTail,bt.depsTail.nextDep=n,bt.depsTail=n):bt.deps=bt.depsTail=n,lf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=bt.depsTail,n.nextDep=void 0,bt.depsTail.nextDep=n,bt.depsTail=n,bt.deps===n&&(bt.deps=r)}return n}trigger(t){this.version++,Vs++,this.notify(t)}notify(t){el();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nl()}}}function lf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)lf(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ya=new WeakMap,ir=Symbol(""),va=Symbol(""),Ns=Symbol("");function le(e,t,n){if(He&&bt){let r=ya.get(e);r||ya.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new sl),s.map=r,s.key=n),s.track()}}function yn(e,t,n,r,s,i){const a=ya.get(e);if(!a){Vs++;return}const l=u=>{u&&u.trigger()};if(el(),t==="clear")a.forEach(l);else{const u=it(e),h=u&&Za(n);if(u&&n==="length"){const d=Number(r);a.forEach((p,y)=>{(y==="length"||y===Ns||!an(y)&&y>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Ns)),t){case"add":u?h&&l(a.get("length")):(l(a.get(ir)),Dr(e)&&l(a.get(va)));break;case"delete":u||(l(a.get(ir)),Dr(e)&&l(a.get(va)));break;case"set":Dr(e)&&l(a.get(ir));break}}nl()}function Ar(e){const t=Et(e);return t===e?t:(le(t,"iterate",Ns),qe(e)?t:t.map(In))}function il(e){return le(e=Et(e),"iterate",Ns),e}function Ze(e,t){return Bn(e)?Os(Vr(e)?In(t):t):In(t)}const zg={__proto__:null,[Symbol.iterator](){return Go(this,Symbol.iterator,e=>Ze(this,e))},concat(...e){return Ar(this).concat(...e.map(t=>it(t)?Ar(t):t))},entries(){return Go(this,"entries",e=>(e[1]=Ze(this,e[1]),e))},every(e,t){return fn(this,"every",e,t,void 0,arguments)},filter(e,t){return fn(this,"filter",e,t,n=>n.map(r=>Ze(this,r)),arguments)},find(e,t){return fn(this,"find",e,t,n=>Ze(this,n),arguments)},findIndex(e,t){return fn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return fn(this,"findLast",e,t,n=>Ze(this,n),arguments)},findLastIndex(e,t){return fn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return fn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ko(this,"includes",e)},indexOf(...e){return Ko(this,"indexOf",e)},join(e){return Ar(this).join(e)},lastIndexOf(...e){return Ko(this,"lastIndexOf",e)},map(e,t){return fn(this,"map",e,t,void 0,arguments)},pop(){return ls(this,"pop")},push(...e){return ls(this,"push",e)},reduce(e,...t){return Wc(this,"reduce",e,t)},reduceRight(e,...t){return Wc(this,"reduceRight",e,t)},shift(){return ls(this,"shift")},some(e,t){return fn(this,"some",e,t,void 0,arguments)},splice(...e){return ls(this,"splice",e)},toReversed(){return Ar(this).toReversed()},toSorted(e){return Ar(this).toSorted(e)},toSpliced(...e){return Ar(this).toSpliced(...e)},unshift(...e){return ls(this,"unshift",e)},values(){return Go(this,"values",e=>Ze(this,e))}};function Go(e,t,n){const r=il(e),s=r[t]();return r!==e&&!qe(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Gg=Array.prototype;function fn(e,t,n,r,s,i){const a=il(e),l=a!==e&&!qe(e),u=a[t];if(u!==Gg[t]){const p=u.apply(e,i);return l?In(p):p}let h=n;a!==e&&(l?h=function(p,y){return n.call(this,Ze(e,p),y,e)}:n.length>2&&(h=function(p,y){return n.call(this,p,y,e)}));const d=u.call(a,h,r);return l&&s?s(d):d}function Wc(e,t,n,r){const s=il(e),i=s!==e&&!qe(e);let a=n,l=!1;s!==e&&(i?(l=r.length===0,a=function(h,d,p){return l&&(l=!1,h=Ze(e,h)),n.call(this,h,Ze(e,d),p,e)}):n.length>3&&(a=function(h,d,p){return n.call(this,h,d,p,e)}));const u=s[t](a,...r);return l?Ze(e,u):u}function Ko(e,t,n){const r=Et(e);le(r,"iterate",Ns);const s=r[t](...n);return(s===-1||s===!1)&&ll(n[0])?(n[0]=Et(n[0]),r[t](...n)):s}function ls(e,t,n=[]){wn(),el();const r=Et(e)[t].apply(e,n);return nl(),Tn(),r}const Kg=Ya("__proto__,__v_isRef,__isVue"),cf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(an));function Wg(e){an(e)||(e=String(e));const t=Et(this);return le(t,"has",e),t.hasOwnProperty(e)}class uf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sm:pf:i?df:ff).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=it(t);if(!s){let u;if(a&&(u=zg[n]))return u;if(n==="hasOwnProperty")return Wg}const l=Reflect.get(t,n,fe(t)?t:r);if((an(n)?cf.has(n):Kg(n))||(s||le(t,"get",n),i))return l;if(fe(l)){const u=a&&Za(n)?l:l.value;return s&&It(u)?wa(u):u}return It(l)?s?wa(l):Ks(l):l}}class hf extends uf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const a=it(t)&&Za(n);if(!this._isShallow){const h=Bn(i);if(!qe(r)&&!Bn(r)&&(i=Et(i),r=Et(r)),!a&&fe(i)&&!fe(r))return h||(i.value=r),!0}const l=a?Number(n)<t.length:wt(t,n),u=Reflect.set(t,n,r,fe(t)?t:s);return t===Et(s)&&(l?en(r,i)&&yn(t,"set",n,r):yn(t,"add",n,r)),u}deleteProperty(t,n){const r=wt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&yn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!an(n)||!cf.has(n))&&le(t,"has",n),r}ownKeys(t){return le(t,"iterate",it(t)?"length":ir),Reflect.ownKeys(t)}}class Qg extends uf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Jg=new hf,Yg=new Qg,Xg=new hf(!0);const Ea=e=>e,gi=e=>Reflect.getPrototypeOf(e);function Zg(e,t,n){return function(...r){const s=this.__v_raw,i=Et(s),a=Dr(i),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,h=s[e](...r),d=n?Ea:t?Os:In;return!t&&le(i,"iterate",u?va:ir),re(Object.create(h),{next(){const{value:p,done:y}=h.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}}})}}function mi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function tm(e,t){const n={get(s){const i=this.__v_raw,a=Et(i),l=Et(s);e||(en(s,l)&&le(a,"get",s),le(a,"get",l));const{has:u}=gi(a),h=t?Ea:e?Os:In;if(u.call(a,s))return h(i.get(s));if(u.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&le(Et(s),"iterate",ir),s.size},has(s){const i=this.__v_raw,a=Et(i),l=Et(s);return e||(en(s,l)&&le(a,"has",s),le(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,u=Et(l),h=t?Ea:e?Os:In;return!e&&le(u,"iterate",ir),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return re(n,e?{add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear")}:{add(s){const i=Et(this),a=gi(i),l=Et(s),u=!t&&!qe(s)&&!Bn(s)?l:s;return a.has.call(i,u)||en(s,u)&&a.has.call(i,s)||en(l,u)&&a.has.call(i,l)||(i.add(u),yn(i,"add",u,u)),this},set(s,i){!t&&!qe(i)&&!Bn(i)&&(i=Et(i));const a=Et(this),{has:l,get:u}=gi(a);let h=l.call(a,s);h||(s=Et(s),h=l.call(a,s));const d=u.call(a,s);return a.set(s,i),h?en(i,d)&&yn(a,"set",s,i):yn(a,"add",s,i),this},delete(s){const i=Et(this),{has:a,get:l}=gi(i);let u=a.call(i,s);u||(s=Et(s),u=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return u&&yn(i,"delete",s,void 0),h},clear(){const s=Et(this),i=s.size!==0,a=s.clear();return i&&yn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Zg(s,e,t)}),n}function ol(e,t){const n=tm(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(wt(n,s)&&s in r?n:r,s,i)}const em={get:ol(!1,!1)},nm={get:ol(!1,!0)},rm={get:ol(!0,!1)};const ff=new WeakMap,df=new WeakMap,pf=new WeakMap,sm=new WeakMap;function im(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function om(e){return e.__v_skip||!Object.isExtensible(e)?0:im(Dg(e))}function Ks(e){return Bn(e)?e:al(e,!1,Jg,em,ff)}function gf(e){return al(e,!1,Xg,nm,df)}function wa(e){return al(e,!0,Yg,rm,pf)}function al(e,t,n,r,s){if(!It(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=om(e);if(i===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,i===2?r:n);return s.set(e,l),l}function Vr(e){return Bn(e)?Vr(e.__v_raw):!!(e&&e.__v_isReactive)}function Bn(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function ll(e){return e?!!e.__v_raw:!1}function Et(e){const t=e&&e.__v_raw;return t?Et(t):e}function am(e){return!wt(e,"__v_skip")&&Object.isExtensible(e)&&Jh(e,"__v_skip",!0),e}const In=e=>It(e)?Ks(e):e,Os=e=>It(e)?wa(e):e;function fe(e){return e?e.__v_isRef===!0:!1}function Ln(e){return mf(e,!1)}function lm(e){return mf(e,!0)}function mf(e,t){return fe(e)?e:new cm(e,t)}class cm{constructor(t,n){this.dep=new sl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Et(t),this._value=n?t:In(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||qe(t)||Bn(t);t=r?t:Et(t),en(t,n)&&(this._rawValue=t,this._value=r?t:In(t),this.dep.trigger())}}function Ot(e){return fe(e)?e.value:e}const um={get:(e,t,n)=>t==="__v_raw"?e:Ot(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function _f(e){return Vr(e)?e:new Proxy(e,um)}class hm{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new sl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return nf(this,!0),!0}get value(){const t=this.dep.track();return of(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function fm(e,t,n=!1){let r,s;return ot(e)?r=e:(r=e.get,s=e.set),new hm(r,s,n)}const _i={},Ni=new WeakMap;let tr;function dm(e,t=!1,n=tr){if(n){let r=Ni.get(n);r||Ni.set(n,r=[]),r.push(e)}}function pm(e,t,n=St){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:u}=n,h=Q=>s?Q:qe(Q)||s===!1||s===0?Mn(Q,1):Mn(Q);let d,p,y,I,k=!1,O=!1;if(fe(e)?(p=()=>e.value,k=qe(e)):Vr(e)?(p=()=>h(e),k=!0):it(e)?(O=!0,k=e.some(Q=>Vr(Q)||qe(Q)),p=()=>e.map(Q=>{if(fe(Q))return Q.value;if(Vr(Q))return h(Q);if(ot(Q))return u?u(Q,2):Q()})):ot(e)?t?p=u?()=>u(e,2):e:p=()=>{if(y){wn();try{y()}finally{Tn()}}const Q=tr;tr=d;try{return u?u(e,3,[I]):e(I)}finally{tr=Q}}:p=nn,t&&s){const Q=p,st=s===!0?1/0:s;p=()=>Mn(Q(),st)}const $=$g(),W=()=>{d.stop(),$&&$.active&&Xa($.effects,d)};if(i&&t){const Q=t;t=(...st)=>{Q(...st),W()}}let j=O?new Array(e.length).fill(_i):_i;const q=Q=>{if(!(!(d.flags&1)||!d.dirty&&!Q))if(t){const st=d.run();if(s||k||(O?st.some((gt,v)=>en(gt,j[v])):en(st,j))){y&&y();const gt=tr;tr=d;try{const v=[st,j===_i?void 0:O&&j[0]===_i?[]:j,I];j=st,u?u(t,3,v):t(...v)}finally{tr=gt}}}else d.run()};return l&&l(q),d=new tf(p),d.scheduler=a?()=>a(q,!1):q,I=Q=>dm(Q,!1,d),y=d.onStop=()=>{const Q=Ni.get(d);if(Q){if(u)u(Q,4);else for(const st of Q)st();Ni.delete(d)}},t?r?q(!0):j=d.run():a?a(q.bind(null,!0),!0):d.run(),W.pause=d.pause.bind(d),W.resume=d.resume.bind(d),W.stop=W,W}function Mn(e,t=1/0,n){if(t<=0||!It(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,fe(e))Mn(e.value,t,n);else if(it(e))for(let r=0;r<e.length;r++)Mn(e[r],t,n);else if(Gh(e)||Dr(e))e.forEach(r=>{Mn(r,t,n)});else if(Qh(e)){for(const r in e)Mn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Mn(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ws(e,t,n,r){try{return r?e(...r):e()}catch(s){uo(s,t,n)}}function ln(e,t,n,r){if(ot(e)){const s=Ws(e,t,n,r);return s&&Kh(s)&&s.catch(i=>{uo(i,t,n)}),s}if(it(e)){const s=[];for(let i=0;i<e.length;i++)s.push(ln(e[i],t,n,r));return s}}function uo(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||St;if(t){let l=t.parent;const u=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,u,h)===!1)return}l=l.parent}if(i){wn(),Ws(i,null,10,[e,u,h]),Tn();return}}gm(e,n,s,r,a)}function gm(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const ye=[];let Ye=-1;const Nr=[];let kn=null,br=0;const yf=Promise.resolve();let Oi=null;function vf(e){const t=Oi||yf;return e?t.then(this?e.bind(this):e):t}function mm(e){let t=Ye+1,n=ye.length;for(;t<n;){const r=t+n>>>1,s=ye[r],i=ks(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function cl(e){if(!(e.flags&1)){const t=ks(e),n=ye[ye.length-1];!n||!(e.flags&2)&&t>=ks(n)?ye.push(e):ye.splice(mm(t),0,e),e.flags|=1,Ef()}}function Ef(){Oi||(Oi=yf.then(Tf))}function _m(e){it(e)?Nr.push(...e):kn&&e.id===-1?kn.splice(br+1,0,e):e.flags&1||(Nr.push(e),e.flags|=1),Ef()}function Qc(e,t,n=Ye+1){for(;n<ye.length;n++){const r=ye[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ye.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function wf(e){if(Nr.length){const t=[...new Set(Nr)].sort((n,r)=>ks(n)-ks(r));if(Nr.length=0,kn){kn.push(...t);return}for(kn=t,br=0;br<kn.length;br++){const n=kn[br];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}kn=null,br=0}}const ks=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Tf(e){try{for(Ye=0;Ye<ye.length;Ye++){const t=ye[Ye];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ws(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ye<ye.length;Ye++){const t=ye[Ye];t&&(t.flags&=-2)}Ye=-1,ye.length=0,wf(),Oi=null,(ye.length||Nr.length)&&Tf()}}let je=null,If=null;function ki(e){const t=je;return je=e,If=e&&e.type.__scopeId||null,t}function Qs(e,t=je,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Li(-1);const i=ki(t);let a;try{a=e(...s)}finally{ki(i),r._d&&Li(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Xn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let u=l.dir[r];u&&(wn(),ln(u,n,8,[e.el,l,e,t]),Tn())}}function vs(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function Oe(e,t,n=!1){const r=__();if(r||Or){let s=Or?Or._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ot(t)?t.call(r&&r.proxy):t}}const ym=Symbol.for("v-scx"),vm=()=>Oe(ym);function Es(e,t,n){return Af(e,t,n)}function Af(e,t,n=St){const{immediate:r,deep:s,flush:i,once:a}=n,l=re({},n),u=t&&r||!t&&i!=="post";let h;if(Ms){if(i==="sync"){const I=vm();h=I.__watcherHandles||(I.__watcherHandles=[])}else if(!u){const I=()=>{};return I.stop=nn,I.resume=nn,I.pause=nn,I}}const d=ue;l.call=(I,k,O)=>ln(I,d,k,O);let p=!1;i==="post"?l.scheduler=I=>{Te(I,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(I,k)=>{k?I():cl(I)}),l.augmentJob=I=>{t&&(I.flags|=4),p&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const y=pm(e,t,l);return Ms&&(h?h.push(y):u&&y()),y}function Em(e,t,n){const r=this.proxy,s=Lt(e)?e.includes(".")?bf(r,e):()=>r[e]:e.bind(r,r);let i;ot(t)?i=t:(i=t.handler,n=t);const a=Xs(this),l=Af(s,i.bind(r),n);return a(),l}function bf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const wm=Symbol("_vte"),Tm=e=>e.__isTeleport,Im=Symbol("_leaveCb");function ul(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ul(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Sf(e,t){return ot(e)?re({name:e.name},t,{setup:e}):e}function Rf(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Jc(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const xi=new WeakMap;function ws(e,t,n,r,s=!1){if(it(e)){e.forEach((O,$)=>ws(O,t&&(it(t)?t[$]:t),n,r,s));return}if(Ts(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ws(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?gl(r.component):r.el,a=s?null:i,{i:l,r:u}=e,h=t&&t.r,d=l.refs===St?l.refs={}:l.refs,p=l.setupState,y=Et(p),I=p===St?zh:O=>Jc(d,O)?!1:wt(y,O),k=(O,$)=>!($&&Jc(d,$));if(h!=null&&h!==u){if(Yc(t),Lt(h))d[h]=null,I(h)&&(p[h]=null);else if(fe(h)){const O=t;k(h,O.k)&&(h.value=null),O.k&&(d[O.k]=null)}}if(ot(u))Ws(u,l,12,[a,d]);else{const O=Lt(u),$=fe(u);if(O||$){const W=()=>{if(e.f){const j=O?I(u)?p[u]:d[u]:k()||!e.k?u.value:d[e.k];if(s)it(j)&&Xa(j,i);else if(it(j))j.includes(i)||j.push(i);else if(O)d[u]=[i],I(u)&&(p[u]=d[u]);else{const q=[i];k(u,e.k)&&(u.value=q),e.k&&(d[e.k]=q)}}else O?(d[u]=a,I(u)&&(p[u]=a)):$&&(k(u,e.k)&&(u.value=a),e.k&&(d[e.k]=a))};if(a){const j=()=>{W(),xi.delete(e)};j.id=-1,xi.set(e,j),Te(j,n)}else Yc(e),W()}}}function Yc(e){const t=xi.get(e);t&&(t.flags|=8,xi.delete(e))}lo().requestIdleCallback;lo().cancelIdleCallback;const Ts=e=>!!e.type.__asyncLoader,Cf=e=>e.type.__isKeepAlive;function Am(e,t){Pf(e,"a",t)}function bm(e,t){Pf(e,"da",t)}function Pf(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ho(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Cf(s.parent.vnode)&&Sm(r,t,n,s),s=s.parent}}function Sm(e,t,n,r){const s=ho(t,e,r,!0);hl(()=>{Xa(r[t],s)},n)}function ho(e,t,n=ue,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{wn();const l=Xs(n),u=ln(t,n,e,a);return l(),Tn(),u});return r?s.unshift(i):s.push(i),i}}const Sn=e=>(t,n=ue)=>{(!Ms||e==="sp")&&ho(e,(...r)=>t(...r),n)},Rm=Sn("bm"),Js=Sn("m"),Cm=Sn("bu"),Pm=Sn("u"),Dm=Sn("bum"),hl=Sn("um"),Vm=Sn("sp"),Nm=Sn("rtg"),Om=Sn("rtc");function km(e,t=ue){ho("ec",e,t)}const xm="components";function Ys(e,t){return Lm(xm,e,!0,t)||e}const Mm=Symbol.for("v-ndc");function Lm(e,t,n=!0,r=!1){const s=je||ue;if(s){const i=s.type;{const l=T_(i,!1);if(l&&(l===t||l===ve(t)||l===ao(ve(t))))return i}const a=Xc(s[e]||i[e],t)||Xc(s.appContext[e],t);return!a&&r?i:a}}function Xc(e,t){return e&&(e[t]||e[ve(t)]||e[ao(ve(t))])}const Ta=e=>e?Jf(e)?gl(e):Ta(e.parent):null,Is=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ta(e.parent),$root:e=>Ta(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Vf(e),$forceUpdate:e=>e.f||(e.f=()=>{cl(e.update)}),$nextTick:e=>e.n||(e.n=vf.bind(e.proxy)),$watch:e=>Em.bind(e)}),Wo=(e,t)=>e!==St&&!e.__isScriptSetup&&wt(e,t),Fm={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:u}=e;if(t[0]!=="$"){const y=a[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Wo(r,t))return a[t]=1,r[t];if(s!==St&&wt(s,t))return a[t]=2,s[t];if(wt(i,t))return a[t]=3,i[t];if(n!==St&&wt(n,t))return a[t]=4,n[t];Ia&&(a[t]=0)}}const h=Is[t];let d,p;if(h)return t==="$attrs"&&le(e.attrs,"get",""),h(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==St&&wt(n,t))return a[t]=4,n[t];if(p=u.config.globalProperties,wt(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Wo(s,t)?(s[t]=n,!0):r!==St&&wt(r,t)?(r[t]=n,!0):wt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:a}},l){let u;return!!(n[l]||e!==St&&l[0]!=="$"&&wt(e,l)||Wo(t,l)||wt(i,l)||wt(r,l)||wt(Is,l)||wt(s.config.globalProperties,l)||(u=a.__cssModules)&&u[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:wt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Zc(e){return it(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ia=!0;function Um(e){const t=Vf(e),n=e.proxy,r=e.ctx;Ia=!1,t.beforeCreate&&tu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:u,inject:h,created:d,beforeMount:p,mounted:y,beforeUpdate:I,updated:k,activated:O,deactivated:$,beforeDestroy:W,beforeUnmount:j,destroyed:q,unmounted:Q,render:st,renderTracked:gt,renderTriggered:v,errorCaptured:m,serverPrefetch:T,expose:b,inheritAttrs:A,components:S,directives:E,filters:Ft}=t;if(h&&Bm(h,r,null),a)for(const mt in a){const ht=a[mt];ot(ht)&&(r[mt]=ht.bind(n))}if(s){const mt=s.call(n,n);It(mt)&&(e.data=Ks(mt))}if(Ia=!0,i)for(const mt in i){const ht=i[mt],we=ot(ht)?ht.bind(n,n):ot(ht.get)?ht.get.bind(n,n):nn,Ge=!ot(ht)&&ot(ht.set)?ht.set.bind(n):nn,be=Fe({get:we,set:Ge});Object.defineProperty(r,mt,{enumerable:!0,configurable:!0,get:()=>be.value,set:Jt=>be.value=Jt})}if(l)for(const mt in l)Df(l[mt],r,n,mt);if(u){const mt=ot(u)?u.call(n):u;Reflect.ownKeys(mt).forEach(ht=>{vs(ht,mt[ht])})}d&&tu(d,e,"c");function Ut(mt,ht){it(ht)?ht.forEach(we=>mt(we.bind(n))):ht&&mt(ht.bind(n))}if(Ut(Rm,p),Ut(Js,y),Ut(Cm,I),Ut(Pm,k),Ut(Am,O),Ut(bm,$),Ut(km,m),Ut(Om,gt),Ut(Nm,v),Ut(Dm,j),Ut(hl,Q),Ut(Vm,T),it(b))if(b.length){const mt=e.exposed||(e.exposed={});b.forEach(ht=>{Object.defineProperty(mt,ht,{get:()=>n[ht],set:we=>n[ht]=we,enumerable:!0})})}else e.exposed||(e.exposed={});st&&e.render===nn&&(e.render=st),A!=null&&(e.inheritAttrs=A),S&&(e.components=S),E&&(e.directives=E),T&&Rf(e)}function Bm(e,t,n=nn){it(e)&&(e=Aa(e));for(const r in e){const s=e[r];let i;It(s)?"default"in s?i=Oe(s.from||r,s.default,!0):i=Oe(s.from||r):i=Oe(s),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function tu(e,t,n){ln(it(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Df(e,t,n,r){let s=r.includes(".")?bf(n,r):()=>n[r];if(Lt(e)){const i=t[e];ot(i)&&Es(s,i)}else if(ot(e))Es(s,e.bind(n));else if(It(e))if(it(e))e.forEach(i=>Df(i,t,n,r));else{const i=ot(e.handler)?e.handler.bind(n):t[e.handler];ot(i)&&Es(s,i,e)}}function Vf(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let u;return l?u=l:!s.length&&!n&&!r?u=t:(u={},s.length&&s.forEach(h=>Mi(u,h,a,!0)),Mi(u,t,a)),It(t)&&i.set(t,u),u}function Mi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Mi(e,i,n,!0),s&&s.forEach(a=>Mi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=jm[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const jm={data:eu,props:nu,emits:nu,methods:ds,computed:ds,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:ds,directives:ds,watch:Hm,provide:eu,inject:$m};function eu(e,t){return t?e?function(){return re(ot(e)?e.call(this,this):e,ot(t)?t.call(this,this):t)}:t:e}function $m(e,t){return ds(Aa(e),Aa(t))}function Aa(e){if(it(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ge(e,t){return e?[...new Set([].concat(e,t))]:t}function ds(e,t){return e?re(Object.create(null),e,t):t}function nu(e,t){return e?it(e)&&it(t)?[...new Set([...e,...t])]:re(Object.create(null),Zc(e),Zc(t??{})):t}function Hm(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=ge(e[r],t[r]);return n}function Nf(){return{app:null,config:{isNativeTag:zh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qm=0;function zm(e,t){return function(r,s=null){ot(r)||(r=re({},r)),s!=null&&!It(s)&&(s=null);const i=Nf(),a=new WeakSet,l=[];let u=!1;const h=i.app={_uid:qm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:A_,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ot(d.install)?(a.add(d),d.install(h,...p)):ot(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,y){if(!u){const I=h._ceVNode||jt(r,s);return I.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),e(I,d,y),u=!0,h._container=d,d.__vue_app__=h,gl(I.component)}},onUnmount(d){l.push(d)},unmount(){u&&(ln(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Or;Or=h;try{return d()}finally{Or=p}}};return h}}let Or=null;const Gm=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ve(t)}Modifiers`]||e[`${mr(t)}Modifiers`];function Km(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||St;let s=n;const i=t.startsWith("update:"),a=i&&Gm(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>Lt(d)?d.trim():d)),a.number&&(s=n.map(Og)));let l,u=r[l=$o(t)]||r[l=$o(ve(t))];!u&&i&&(u=r[l=$o(mr(t))]),u&&ln(u,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,ln(h,e,6,s)}}const Wm=new WeakMap;function Of(e,t,n=!1){const r=n?Wm:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ot(e)){const u=h=>{const d=Of(h,t,!0);d&&(l=!0,re(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(It(e)&&r.set(e,null),null):(it(i)?i.forEach(u=>a[u]=null):re(a,i),It(e)&&r.set(e,a),a)}function fo(e,t){return!e||!so(t)?!1:(t=t.slice(2).replace(/Once$/,""),wt(e,t[0].toLowerCase()+t.slice(1))||wt(e,mr(t))||wt(e,t))}function ru(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:u,render:h,renderCache:d,props:p,data:y,setupState:I,ctx:k,inheritAttrs:O}=e,$=ki(e);let W,j;try{if(n.shapeFlag&4){const Q=s||r,st=Q;W=tn(h.call(st,Q,d,p,I,y,k)),j=l}else{const Q=t;W=tn(Q.length>1?Q(p,{attrs:l,slots:a,emit:u}):Q(p,null)),j=t.props?l:Qm(l)}}catch(Q){As.length=0,uo(Q,e,1),W=jt(jn)}let q=W;if(j&&O!==!1){const Q=Object.keys(j),{shapeFlag:st}=q;Q.length&&st&7&&(i&&Q.some(io)&&(j=Jm(j,i)),q=Lr(q,j,!1,!0))}return n.dirs&&(q=Lr(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&ul(q,n.transition),W=q,ki($),W}const Qm=e=>{let t;for(const n in e)(n==="class"||n==="style"||so(n))&&((t||(t={}))[n]=e[n]);return t},Jm=(e,t)=>{const n={};for(const r in e)(!io(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ym(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:u}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?su(r,a,h):!!a;if(u&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(kf(a,r,y)&&!fo(h,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?su(r,a,h):!0:!!a;return!1}function su(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(kf(t,e,i)&&!fo(n,i))return!0}return!1}function kf(e,t,n){const r=e[n],s=t[n];return n==="style"&&It(r)&&It(s)?!tl(r,s):r!==s}function Xm({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const xf={},Mf=()=>Object.create(xf),Lf=e=>Object.getPrototypeOf(e)===xf;function Zm(e,t,n,r=!1){const s={},i=Mf();e.propsDefaults=Object.create(null),Ff(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:gf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function t_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=Et(s),[u]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(fo(e.emitsOptions,y))continue;const I=t[y];if(u)if(wt(i,y))I!==i[y]&&(i[y]=I,h=!0);else{const k=ve(y);s[k]=ba(u,l,k,I,e,!1)}else I!==i[y]&&(i[y]=I,h=!0)}}}else{Ff(e,t,s,i)&&(h=!0);let d;for(const p in l)(!t||!wt(t,p)&&((d=mr(p))===p||!wt(t,d)))&&(u?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=ba(u,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!wt(t,p))&&(delete i[p],h=!0)}h&&yn(e.attrs,"set","")}function Ff(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let u in t){if(ms(u))continue;const h=t[u];let d;s&&wt(s,d=ve(u))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:fo(e.emitsOptions,u)||(!(u in r)||h!==r[u])&&(r[u]=h,a=!0)}if(i){const u=Et(n),h=l||St;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ba(s,u,p,h[p],e,!wt(h,p))}}return a}function ba(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=wt(a,"default");if(l&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ot(u)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Xs(s);r=h[n]=u.call(null,t),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===mr(n))&&(r=!0))}return r}const e_=new WeakMap;function Uf(e,t,n=!1){const r=n?e_:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let u=!1;if(!ot(e)){const d=p=>{u=!0;const[y,I]=Uf(p,t,!0);re(a,y),I&&l.push(...I)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return It(e)&&r.set(e,Pr),Pr;if(it(i))for(let d=0;d<i.length;d++){const p=ve(i[d]);iu(p)&&(a[p]=St)}else if(i)for(const d in i){const p=ve(d);if(iu(p)){const y=i[d],I=a[p]=it(y)||ot(y)?{type:y}:re({},y),k=I.type;let O=!1,$=!0;if(it(k))for(let W=0;W<k.length;++W){const j=k[W],q=ot(j)&&j.name;if(q==="Boolean"){O=!0;break}else q==="String"&&($=!1)}else O=ot(k)&&k.name==="Boolean";I[0]=O,I[1]=$,(O||wt(I,"default"))&&l.push(p)}}const h=[a,l];return It(e)&&r.set(e,h),h}function iu(e){return e[0]!=="$"&&!ms(e)}const fl=e=>e==="_"||e==="_ctx"||e==="$stable",dl=e=>it(e)?e.map(tn):[tn(e)],n_=(e,t,n)=>{if(t._n)return t;const r=Qs((...s)=>dl(t(...s)),n);return r._c=!1,r},Bf=(e,t,n)=>{const r=e._ctx;for(const s in e){if(fl(s))continue;const i=e[s];if(ot(i))t[s]=n_(s,i,r);else if(i!=null){const a=dl(i);t[s]=()=>a}}},jf=(e,t)=>{const n=dl(t);e.slots.default=()=>n},$f=(e,t,n)=>{for(const r in t)(n||!fl(r))&&(e[r]=t[r])},r_=(e,t,n)=>{const r=e.slots=Mf();if(e.vnode.shapeFlag&32){const s=t._;s?($f(r,t,n),n&&Jh(r,"_",s,!0)):Bf(t,r)}else t&&jf(e,t)},s_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=St;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:$f(s,t,n):(i=!t.$stable,Bf(t,s)),a=t}else t&&(jf(e,t),a={default:1});if(i)for(const l in s)!fl(l)&&a[l]==null&&delete s[l]},Te=c_;function i_(e){return o_(e)}function o_(e,t){const n=lo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:u,setText:h,setElementText:d,parentNode:p,nextSibling:y,setScopeId:I=nn,insertStaticContent:k}=e,O=(_,w,R,D=null,x=null,V=null,z=void 0,B=null,F=!!w.dynamicChildren)=>{if(_===w)return;_&&!cs(_,w)&&(D=N(_),Jt(_,x,V,!0),_=null),w.patchFlag===-2&&(F=!1,w.dynamicChildren=null);const{type:L,ref:tt,shapeFlag:K}=w;switch(L){case po:$(_,w,R,D);break;case jn:W(_,w,R,D);break;case bi:_==null&&j(w,R,D,z);break;case Pe:S(_,w,R,D,x,V,z,B,F);break;default:K&1?st(_,w,R,D,x,V,z,B,F):K&6?E(_,w,R,D,x,V,z,B,F):(K&64||K&128)&&L.process(_,w,R,D,x,V,z,B,F,X)}tt!=null&&x?ws(tt,_&&_.ref,V,w||_,!w):tt==null&&_&&_.ref!=null&&ws(_.ref,null,V,_,!0)},$=(_,w,R,D)=>{if(_==null)r(w.el=l(w.children),R,D);else{const x=w.el=_.el;w.children!==_.children&&h(x,w.children)}},W=(_,w,R,D)=>{_==null?r(w.el=u(w.children||""),R,D):w.el=_.el},j=(_,w,R,D)=>{[_.el,_.anchor]=k(_.children,w,R,D,_.el,_.anchor)},q=({el:_,anchor:w},R,D)=>{let x;for(;_&&_!==w;)x=y(_),r(_,R,D),_=x;r(w,R,D)},Q=({el:_,anchor:w})=>{let R;for(;_&&_!==w;)R=y(_),s(_),_=R;s(w)},st=(_,w,R,D,x,V,z,B,F)=>{if(w.type==="svg"?z="svg":w.type==="math"&&(z="mathml"),_==null)gt(w,R,D,x,V,z,B,F);else{const L=_.el&&_.el._isVueCE?_.el:null;try{L&&L._beginPatch(),T(_,w,x,V,z,B,F)}finally{L&&L._endPatch()}}},gt=(_,w,R,D,x,V,z,B)=>{let F,L;const{props:tt,shapeFlag:K,transition:Z,dirs:et}=_;if(F=_.el=a(_.type,V,tt&&tt.is,tt),K&8?d(F,_.children):K&16&&m(_.children,F,null,D,x,Qo(_,V),z,B),et&&Xn(_,null,D,"created"),v(F,_,_.scopeId,z,D),tt){for(const _t in tt)_t!=="value"&&!ms(_t)&&i(F,_t,null,tt[_t],V,D);"value"in tt&&i(F,"value",null,tt.value,V),(L=tt.onVnodeBeforeMount)&&Qe(L,D,_)}et&&Xn(_,null,D,"beforeMount");const ft=a_(x,Z);ft&&Z.beforeEnter(F),r(F,w,R),((L=tt&&tt.onVnodeMounted)||ft||et)&&Te(()=>{try{L&&Qe(L,D,_),ft&&Z.enter(F),et&&Xn(_,null,D,"mounted")}finally{}},x)},v=(_,w,R,D,x)=>{if(R&&I(_,R),D)for(let V=0;V<D.length;V++)I(_,D[V]);if(x){let V=x.subTree;if(w===V||Gf(V.type)&&(V.ssContent===w||V.ssFallback===w)){const z=x.vnode;v(_,z,z.scopeId,z.slotScopeIds,x.parent)}}},m=(_,w,R,D,x,V,z,B,F=0)=>{for(let L=F;L<_.length;L++){const tt=_[L]=B?_n(_[L]):tn(_[L]);O(null,tt,w,R,D,x,V,z,B)}},T=(_,w,R,D,x,V,z)=>{const B=w.el=_.el;let{patchFlag:F,dynamicChildren:L,dirs:tt}=w;F|=_.patchFlag&16;const K=_.props||St,Z=w.props||St;let et;if(R&&Zn(R,!1),(et=Z.onVnodeBeforeUpdate)&&Qe(et,R,w,_),tt&&Xn(w,_,R,"beforeUpdate"),R&&Zn(R,!0),(K.innerHTML&&Z.innerHTML==null||K.textContent&&Z.textContent==null)&&d(B,""),L?b(_.dynamicChildren,L,B,R,D,Qo(w,x),V):z||ht(_,w,B,null,R,D,Qo(w,x),V,!1),F>0){if(F&16)A(B,K,Z,R,x);else if(F&2&&K.class!==Z.class&&i(B,"class",null,Z.class,x),F&4&&i(B,"style",K.style,Z.style,x),F&8){const ft=w.dynamicProps;for(let _t=0;_t<ft.length;_t++){const yt=ft[_t],Vt=K[yt],Ht=Z[yt];(Ht!==Vt||yt==="value")&&i(B,yt,Vt,Ht,x,R)}}F&1&&_.children!==w.children&&d(B,w.children)}else!z&&L==null&&A(B,K,Z,R,x);((et=Z.onVnodeUpdated)||tt)&&Te(()=>{et&&Qe(et,R,w,_),tt&&Xn(w,_,R,"updated")},D)},b=(_,w,R,D,x,V,z)=>{for(let B=0;B<w.length;B++){const F=_[B],L=w[B],tt=F.el&&(F.type===Pe||!cs(F,L)||F.shapeFlag&198)?p(F.el):R;O(F,L,tt,null,D,x,V,z,!0)}},A=(_,w,R,D,x)=>{if(w!==R){if(w!==St)for(const V in w)!ms(V)&&!(V in R)&&i(_,V,w[V],null,x,D);for(const V in R){if(ms(V))continue;const z=R[V],B=w[V];z!==B&&V!=="value"&&i(_,V,B,z,x,D)}"value"in R&&i(_,"value",w.value,R.value,x)}},S=(_,w,R,D,x,V,z,B,F)=>{const L=w.el=_?_.el:l(""),tt=w.anchor=_?_.anchor:l("");let{patchFlag:K,dynamicChildren:Z,slotScopeIds:et}=w;et&&(B=B?B.concat(et):et),_==null?(r(L,R,D),r(tt,R,D),m(w.children||[],R,tt,x,V,z,B,F)):K>0&&K&64&&Z&&_.dynamicChildren&&_.dynamicChildren.length===Z.length?(b(_.dynamicChildren,Z,R,x,V,z,B),(w.key!=null||x&&w===x.subTree)&&Hf(_,w,!0)):ht(_,w,R,tt,x,V,z,B,F)},E=(_,w,R,D,x,V,z,B,F)=>{w.slotScopeIds=B,_==null?w.shapeFlag&512?x.ctx.activate(w,R,D,z,F):Ft(w,R,D,x,V,z,F):Ee(_,w,F)},Ft=(_,w,R,D,x,V,z)=>{const B=_.component=m_(_,D,x);if(Cf(_)&&(B.ctx.renderer=X),y_(B,!1,z),B.asyncDep){if(x&&x.registerDep(B,Ut,z),!_.el){const F=B.subTree=jt(jn);W(null,F,w,R),_.placeholder=F.el}}else Ut(B,_,w,R,x,V,z)},Ee=(_,w,R)=>{const D=w.component=_.component;if(Ym(_,w,R))if(D.asyncDep&&!D.asyncResolved){mt(D,w,R);return}else D.next=w,D.update();else w.el=_.el,D.vnode=w},Ut=(_,w,R,D,x,V,z)=>{const B=()=>{if(_.isMounted){let{next:K,bu:Z,u:et,parent:ft,vnode:_t}=_;{const Re=qf(_);if(Re){K&&(K.el=_t.el,mt(_,K,z)),Re.asyncDep.then(()=>{Te(()=>{_.isUnmounted||L()},x)});return}}let yt=K,Vt;Zn(_,!1),K?(K.el=_t.el,mt(_,K,z)):K=_t,Z&&Ho(Z),(Vt=K.props&&K.props.onVnodeBeforeUpdate)&&Qe(Vt,ft,K,_t),Zn(_,!0);const Ht=ru(_),Se=_.subTree;_.subTree=Ht,O(Se,Ht,p(Se.el),N(Se),_,x,V),K.el=Ht.el,yt===null&&Xm(_,Ht.el),et&&Te(et,x),(Vt=K.props&&K.props.onVnodeUpdated)&&Te(()=>Qe(Vt,ft,K,_t),x)}else{let K;const{el:Z,props:et}=w,{bm:ft,m:_t,parent:yt,root:Vt,type:Ht}=_,Se=Ts(w);Zn(_,!1),ft&&Ho(ft),!Se&&(K=et&&et.onVnodeBeforeMount)&&Qe(K,yt,w),Zn(_,!0);{Vt.ce&&Vt.ce._hasShadowRoot()&&Vt.ce._injectChildStyle(Ht,_.parent?_.parent.type:void 0);const Re=_.subTree=ru(_);O(null,Re,R,D,_,x,V),w.el=Re.el}if(_t&&Te(_t,x),!Se&&(K=et&&et.onVnodeMounted)){const Re=w;Te(()=>Qe(K,yt,Re),x)}(w.shapeFlag&256||yt&&Ts(yt.vnode)&&yt.vnode.shapeFlag&256)&&_.a&&Te(_.a,x),_.isMounted=!0,w=R=D=null}};_.scope.on();const F=_.effect=new tf(B);_.scope.off();const L=_.update=F.run.bind(F),tt=_.job=F.runIfDirty.bind(F);tt.i=_,tt.id=_.uid,F.scheduler=()=>cl(tt),Zn(_,!0),L()},mt=(_,w,R)=>{w.component=_;const D=_.vnode.props;_.vnode=w,_.next=null,t_(_,w.props,D,R),s_(_,w.children,R),wn(),Qc(_),Tn()},ht=(_,w,R,D,x,V,z,B,F=!1)=>{const L=_&&_.children,tt=_?_.shapeFlag:0,K=w.children,{patchFlag:Z,shapeFlag:et}=w;if(Z>0){if(Z&128){Ge(L,K,R,D,x,V,z,B,F);return}else if(Z&256){we(L,K,R,D,x,V,z,B,F);return}}et&8?(tt&16&&se(L,x,V),K!==L&&d(R,K)):tt&16?et&16?Ge(L,K,R,D,x,V,z,B,F):se(L,x,V,!0):(tt&8&&d(R,""),et&16&&m(K,R,D,x,V,z,B,F))},we=(_,w,R,D,x,V,z,B,F)=>{_=_||Pr,w=w||Pr;const L=_.length,tt=w.length,K=Math.min(L,tt);let Z;for(Z=0;Z<K;Z++){const et=w[Z]=F?_n(w[Z]):tn(w[Z]);O(_[Z],et,R,null,x,V,z,B,F)}L>tt?se(_,x,V,!0,!1,K):m(w,R,D,x,V,z,B,F,K)},Ge=(_,w,R,D,x,V,z,B,F)=>{let L=0;const tt=w.length;let K=_.length-1,Z=tt-1;for(;L<=K&&L<=Z;){const et=_[L],ft=w[L]=F?_n(w[L]):tn(w[L]);if(cs(et,ft))O(et,ft,R,null,x,V,z,B,F);else break;L++}for(;L<=K&&L<=Z;){const et=_[K],ft=w[Z]=F?_n(w[Z]):tn(w[Z]);if(cs(et,ft))O(et,ft,R,null,x,V,z,B,F);else break;K--,Z--}if(L>K){if(L<=Z){const et=Z+1,ft=et<tt?w[et].el:D;for(;L<=Z;)O(null,w[L]=F?_n(w[L]):tn(w[L]),R,ft,x,V,z,B,F),L++}}else if(L>Z)for(;L<=K;)Jt(_[L],x,V,!0),L++;else{const et=L,ft=L,_t=new Map;for(L=ft;L<=Z;L++){const Yt=w[L]=F?_n(w[L]):tn(w[L]);Yt.key!=null&&_t.set(Yt.key,L)}let yt,Vt=0;const Ht=Z-ft+1;let Se=!1,Re=0;const Me=new Array(Ht);for(L=0;L<Ht;L++)Me[L]=0;for(L=et;L<=K;L++){const Yt=_[L];if(Vt>=Ht){Jt(Yt,x,V,!0);continue}let Gt;if(Yt.key!=null)Gt=_t.get(Yt.key);else for(yt=ft;yt<=Z;yt++)if(Me[yt-ft]===0&&cs(Yt,w[yt])){Gt=yt;break}Gt===void 0?Jt(Yt,x,V,!0):(Me[Gt-ft]=L+1,Gt>=Re?Re=Gt:Se=!0,O(Yt,w[Gt],R,null,x,V,z,B,F),Vt++)}const Er=Se?l_(Me):Pr;for(yt=Er.length-1,L=Ht-1;L>=0;L--){const Yt=ft+L,Gt=w[Yt],Kr=w[Yt+1],Kn=Yt+1<tt?Kr.el||zf(Kr):D;Me[L]===0?O(null,Gt,R,Kn,x,V,z,B,F):Se&&(yt<0||L!==Er[yt]?be(Gt,R,Kn,2):yt--)}}},be=(_,w,R,D,x=null)=>{const{el:V,type:z,transition:B,children:F,shapeFlag:L}=_;if(L&6){be(_.component.subTree,w,R,D);return}if(L&128){_.suspense.move(w,R,D);return}if(L&64){z.move(_,w,R,X);return}if(z===Pe){r(V,w,R);for(let K=0;K<F.length;K++)be(F[K],w,R,D);r(_.anchor,w,R);return}if(z===bi){q(_,w,R);return}if(D!==2&&L&1&&B)if(D===0)B.beforeEnter(V),r(V,w,R),Te(()=>B.enter(V),x);else{const{leave:K,delayLeave:Z,afterLeave:et}=B,ft=()=>{_.ctx.isUnmounted?s(V):r(V,w,R)},_t=()=>{V._isLeaving&&V[Im](!0),K(V,()=>{ft(),et&&et()})};Z?Z(V,ft,_t):_t()}else r(V,w,R)},Jt=(_,w,R,D=!1,x=!1)=>{const{type:V,props:z,ref:B,children:F,dynamicChildren:L,shapeFlag:tt,patchFlag:K,dirs:Z,cacheIndex:et,memo:ft}=_;if(K===-2&&(x=!1),B!=null&&(wn(),ws(B,null,R,_,!0),Tn()),et!=null&&(w.renderCache[et]=void 0),tt&256){w.ctx.deactivate(_);return}const _t=tt&1&&Z,yt=!Ts(_);let Vt;if(yt&&(Vt=z&&z.onVnodeBeforeUnmount)&&Qe(Vt,w,_),tt&6)xe(_.component,R,D);else{if(tt&128){_.suspense.unmount(R,D);return}_t&&Xn(_,null,w,"beforeUnmount"),tt&64?_.type.remove(_,w,R,X,D):L&&!L.hasOnce&&(V!==Pe||K>0&&K&64)?se(L,w,R,!1,!0):(V===Pe&&K&384||!x&&tt&16)&&se(F,w,R),D&&hn(_)}const Ht=ft!=null&&et==null;(yt&&(Vt=z&&z.onVnodeUnmounted)||_t||Ht)&&Te(()=>{Vt&&Qe(Vt,w,_),_t&&Xn(_,null,w,"unmounted"),Ht&&(_.el=null)},R)},hn=_=>{const{type:w,el:R,anchor:D,transition:x}=_;if(w===Pe){ke(R,D);return}if(w===bi){Q(_);return}const V=()=>{s(R),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(_.shapeFlag&1&&x&&!x.persisted){const{leave:z,delayLeave:B}=x,F=()=>z(R,V);B?B(_.el,V,F):F()}else V()},ke=(_,w)=>{let R;for(;_!==w;)R=y(_),s(_),_=R;s(w)},xe=(_,w,R)=>{const{bum:D,scope:x,job:V,subTree:z,um:B,m:F,a:L}=_;ou(F),ou(L),D&&Ho(D),x.stop(),V&&(V.flags|=8,Jt(z,_,w,R)),B&&Te(B,w),Te(()=>{_.isUnmounted=!0},w)},se=(_,w,R,D=!1,x=!1,V=0)=>{for(let z=V;z<_.length;z++)Jt(_[z],w,R,D,x)},N=_=>{if(_.shapeFlag&6)return N(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const w=y(_.anchor||_.el),R=w&&w[wm];return R?y(R):w};let J=!1;const G=(_,w,R)=>{let D;_==null?w._vnode&&(Jt(w._vnode,null,null,!0),D=w._vnode.component):O(w._vnode||null,_,w,null,null,null,R),w._vnode=_,J||(J=!0,Qc(D),wf(),J=!1)},X={p:O,um:Jt,m:be,r:hn,mt:Ft,mc:m,pc:ht,pbc:b,n:N,o:e};return{render:G,hydrate:void 0,createApp:zm(G)}}function Qo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Zn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function a_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Hf(e,t,n=!1){const r=e.children,s=t.children;if(it(r)&&it(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=_n(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Hf(a,l)),l.type===po&&(l.patchFlag===-1&&(l=s[i]=_n(l)),l.el=a.el),l.type===jn&&!l.el&&(l.el=a.el)}}function l_(e){const t=e.slice(),n=[0];let r,s,i,a,l;const u=e.length;for(r=0;r<u;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function qf(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qf(t)}function ou(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function zf(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?zf(t.subTree):null}const Gf=e=>e.__isSuspense;function c_(e,t){t&&t.pendingBranch?it(e)?t.effects.push(...e):t.effects.push(e):_m(e)}const Pe=Symbol.for("v-fgt"),po=Symbol.for("v-txt"),jn=Symbol.for("v-cmt"),bi=Symbol.for("v-stc"),As=[];let De=null;function Xt(e=!1){As.push(De=e?null:[])}function u_(){As.pop(),De=As[As.length-1]||null}let xs=1;function Li(e,t=!1){xs+=e,e<0&&De&&t&&(De.hasOnce=!0)}function Kf(e){return e.dynamicChildren=xs>0?De||Pr:null,u_(),xs>0&&De&&De.push(e),e}function _e(e,t,n,r,s,i){return Kf(rt(e,t,n,r,s,i,!0))}function Wf(e,t,n,r,s){return Kf(jt(e,t,n,r,s,!0))}function Fi(e){return e?e.__v_isVNode===!0:!1}function cs(e,t){return e.type===t.type&&e.key===t.key}const Qf=({key:e})=>e??null,Si=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Lt(e)||fe(e)||ot(e)?{i:je,r:e,k:t,f:!!n}:e:null);function rt(e,t=null,n=null,r=0,s=null,i=e===Pe?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qf(t),ref:t&&Si(t),scopeId:If,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:je};return l?(pl(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=Lt(n)?8:16),xs>0&&!a&&De&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&De.push(u),u}const jt=h_;function h_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Mm)&&(e=jn),Fi(e)){const l=Lr(e,t,!0);return n&&pl(l,n),xs>0&&!i&&De&&(l.shapeFlag&6?De[De.indexOf(e)]=l:De.push(l)),l.patchFlag=-2,l}if(I_(e)&&(e=e.__vccOpts),t){t=f_(t);let{class:l,style:u}=t;l&&!Lt(l)&&(t.class=Fn(l)),It(u)&&(ll(u)&&!it(u)&&(u=re({},u)),t.style=co(u))}const a=Lt(e)?1:Gf(e)?128:Tm(e)?64:It(e)?4:ot(e)?2:0;return rt(e,t,n,r,s,a,i,!0)}function f_(e){return e?ll(e)||Lf(e)?re({},e):e:null}function Lr(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:u}=e,h=t?d_(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Qf(h),ref:t&&t.ref?n&&i?it(i)?i.concat(Si(t)):[i,Si(t)]:Si(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Lr(e.ssContent),ssFallback:e.ssFallback&&Lr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&ul(d,u.clone(d)),d}function Ne(e=" ",t=0){return jt(po,null,e,t)}function Ui(e,t){const n=jt(bi,null,e);return n.staticCount=t,n}function mn(e="",t=!1){return t?(Xt(),Wf(jn,null,e)):jt(jn,null,e)}function tn(e){return e==null||typeof e=="boolean"?jt(jn):it(e)?jt(Pe,null,e.slice()):Fi(e)?_n(e):jt(po,null,String(e))}function _n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Lr(e)}function pl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(it(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),pl(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Lf(t)?t._ctx=je:s===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ot(t)?(t={default:t,_ctx:je},n=32):(t=String(t),r&64?(n=16,t=[Ne(t)]):n=8);e.children=t,e.shapeFlag|=n}function d_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Fn([t.class,r.class]));else if(s==="style")t.style=co([t.style,r.style]);else if(so(s)){const i=t[s],a=r[s];a&&i!==a&&!(it(i)&&i.includes(a))?t[s]=i?[].concat(i,a):a:a==null&&i==null&&!io(s)&&(t[s]=a)}else s!==""&&(t[s]=r[s])}return t}function Qe(e,t,n,r=null){ln(e,t,7,[n,r])}const p_=Nf();let g_=0;function m_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||p_,i={uid:g_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uf(r,s),emitsOptions:Of(r,s),emit:null,emitted:null,propsDefaults:St,inheritAttrs:r.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Km.bind(null,i),e.ce&&e.ce(i),i}let ue=null;const __=()=>ue||je;let Bi,Sa;{const e=lo(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Bi=t("__VUE_INSTANCE_SETTERS__",n=>ue=n),Sa=t("__VUE_SSR_SETTERS__",n=>Ms=n)}const Xs=e=>{const t=ue;return Bi(e),e.scope.on(),()=>{e.scope.off(),Bi(t)}},au=()=>{ue&&ue.scope.off(),Bi(null)};function Jf(e){return e.vnode.shapeFlag&4}let Ms=!1;function y_(e,t=!1,n=!1){t&&Sa(t);const{props:r,children:s}=e.vnode,i=Jf(e);Zm(e,r,i,t),r_(e,s,n||t);const a=i?v_(e,t):void 0;return t&&Sa(!1),a}function v_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Fm);const{setup:r}=n;if(r){wn();const s=e.setupContext=r.length>1?w_(e):null,i=Xs(e),a=Ws(r,e,0,[e.props,s]),l=Kh(a);if(Tn(),i(),(l||e.sp)&&!Ts(e)&&Rf(e),l){if(a.then(au,au),t)return a.then(u=>{lu(e,u)}).catch(u=>{uo(u,e,0)});e.asyncDep=a}else lu(e,a)}else Yf(e)}function lu(e,t,n){ot(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:It(t)&&(e.setupState=_f(t)),Yf(e)}function Yf(e,t,n){const r=e.type;e.render||(e.render=r.render||nn);{const s=Xs(e);wn();try{Um(e)}finally{Tn(),s()}}}const E_={get(e,t){return le(e,"get",""),e[t]}};function w_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,E_),slots:e.slots,emit:e.emit,expose:t}}function gl(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(_f(am(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Is)return Is[n](e)},has(t,n){return n in t||n in Is}})):e.proxy}function T_(e,t=!0){return ot(e)?e.displayName||e.name:e.name||t&&e.__name}function I_(e){return ot(e)&&"__vccOpts"in e}const Fe=(e,t)=>fm(e,t,Ms);function Xf(e,t,n){try{Li(-1);const r=arguments.length;return r===2?It(t)&&!it(t)?Fi(t)?jt(e,null,[t]):jt(e,t):jt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fi(n)&&(n=[n]),jt(e,t,n))}finally{Li(1)}}const A_="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ra;const cu=typeof window<"u"&&window.trustedTypes;if(cu)try{Ra=cu.createPolicy("vue",{createHTML:e=>e})}catch{}const Zf=Ra?e=>Ra.createHTML(e):e=>e,b_="http://www.w3.org/2000/svg",S_="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,uu=pn&&pn.createElement("template"),R_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?pn.createElementNS(b_,e):t==="mathml"?pn.createElementNS(S_,e):n?pn.createElement(e,{is:n}):pn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>pn.createTextNode(e),createComment:e=>pn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{uu.innerHTML=Zf(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=uu.content;if(r==="svg"||r==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},C_=Symbol("_vtc");function P_(e,t,n){const r=e[C_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const hu=Symbol("_vod"),D_=Symbol("_vsh"),V_=Symbol(""),N_=/(?:^|;)\s*display\s*:/;function O_(e,t,n){const r=e.style,s=Lt(n);let i=!1;if(n&&!s){if(t)if(Lt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&ps(r,l,"")}else for(const a in t)n[a]==null&&ps(r,a,"");for(const a in n){a==="display"&&(i=!0);const l=n[a];l!=null?x_(e,a,!Lt(t)&&t?t[a]:void 0,l)||ps(r,a,l):ps(r,a,"")}}else if(s){if(t!==n){const a=r[V_];a&&(n+=";"+a),r.cssText=n,i=N_.test(n)}}else t&&e.removeAttribute("style");hu in e&&(e[hu]=i?r.display:"",e[D_]&&(r.display="none"))}const fu=/\s*!important$/;function ps(e,t,n){if(it(n))n.forEach(r=>ps(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=k_(e,t);fu.test(n)?e.setProperty(mr(r),n.replace(fu,""),"important"):e[r]=n}}const du=["Webkit","Moz","ms"],Jo={};function k_(e,t){const n=Jo[t];if(n)return n;let r=ve(t);if(r!=="filter"&&r in e)return Jo[t]=r;r=ao(r);for(let s=0;s<du.length;s++){const i=du[s]+r;if(i in e)return Jo[t]=i}return t}function x_(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Lt(r)&&n===r}const pu="http://www.w3.org/1999/xlink";function gu(e,t,n,r,s,i=Ug(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(pu,t.slice(6,t.length)):e.setAttributeNS(pu,t,n):n==null||i&&!Yh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":an(n)?String(n):n)}function mu(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Zf(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Yh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function M_(e,t,n,r){e.addEventListener(t,n,r)}function L_(e,t,n,r){e.removeEventListener(t,n,r)}const _u=Symbol("_vei");function F_(e,t,n,r,s=null){const i=e[_u]||(e[_u]={}),a=i[t];if(r&&a)a.value=r;else{const[l,u]=U_(t);if(r){const h=i[t]=$_(r,s);M_(e,l,h,u)}else a&&(L_(e,l,a,u),i[t]=void 0)}}const yu=/(?:Once|Passive|Capture)$/;function U_(e){let t;if(yu.test(e)){t={};let r;for(;r=e.match(yu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):mr(e.slice(2)),t]}let Yo=0;const B_=Promise.resolve(),j_=()=>Yo||(B_.then(()=>Yo=0),Yo=Date.now());function $_(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ln(H_(r,n.value),t,5,[r])};return n.value=e,n.attached=j_(),n}function H_(e,t){if(it(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const vu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,q_=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?P_(e,r,a):t==="style"?O_(e,n,r):so(t)?io(t)||F_(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):z_(e,t,r,a))?(mu(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gu(e,t,r,a,i,t!=="value")):e._isVueCE&&(G_(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Lt(r)))?mu(e,ve(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),gu(e,t,r,a))};function z_(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&vu(t)&&ot(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vu(t)&&Lt(n)?!1:t in e}function G_(e,t){const n=e._def.props;if(!n)return!1;const r=ve(t);return Array.isArray(n)?n.some(s=>ve(s)===r):Object.keys(n).some(s=>ve(s)===r)}const K_=["ctrl","shift","alt","meta"],W_={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>K_.some(n=>e[`${n}Key`]&&!t.includes(n))},Q_=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<t.length;a++){const l=W_[t[a]];if(l&&l(s,t))return}return e(s,...i)})},J_=re({patchProp:q_},R_);let Eu;function Y_(){return Eu||(Eu=i_(J_))}const X_=(...e)=>{const t=Y_().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=ty(r);if(!s)return;const i=t._component;!ot(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Z_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Z_(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ty(e){return Lt(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Sr=typeof document<"u";function td(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ey(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&td(e.default)}const vt=Object.assign;function Xo(e,t){const n={};for(const r in t){const s=t[r];n[r]=ze(s)?s.map(e):e(s)}return n}const bs=()=>{},ze=Array.isArray;function wu(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ed=/#/g,ny=/&/g,ry=/\//g,sy=/=/g,iy=/\?/g,nd=/\+/g,oy=/%5B/g,ay=/%5D/g,rd=/%5E/g,ly=/%60/g,sd=/%7B/g,cy=/%7C/g,id=/%7D/g,uy=/%20/g;function ml(e){return e==null?"":encodeURI(""+e).replace(cy,"|").replace(oy,"[").replace(ay,"]")}function hy(e){return ml(e).replace(sd,"{").replace(id,"}").replace(rd,"^")}function Ca(e){return ml(e).replace(nd,"%2B").replace(uy,"+").replace(ed,"%23").replace(ny,"%26").replace(ly,"`").replace(sd,"{").replace(id,"}").replace(rd,"^")}function fy(e){return Ca(e).replace(sy,"%3D")}function dy(e){return ml(e).replace(ed,"%23").replace(iy,"%3F")}function py(e){return dy(e).replace(ry,"%2F")}function Ls(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const gy=/\/$/,my=e=>e.replace(gy,"");function Zo(e,t,n="/"){let r,s={},i="",a="";const l=t.indexOf("#");let u=t.indexOf("?");return u=l>=0&&u>l?-1:u,u>=0&&(r=t.slice(0,u),i=t.slice(u,l>0?l:t.length),s=e(i.slice(1))),l>=0&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=Ey(r??t,n),{fullPath:r+i+a,path:r,query:s,hash:Ls(a)}}function _y(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Tu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function yy(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fr(t.matched[r],n.matched[s])&&od(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function od(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!vy(e[n],t[n]))return!1;return!0}function vy(e,t){return ze(e)?Iu(e,t):ze(t)?Iu(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Iu(e,t){return ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ey(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Pa=function(e){return e.pop="pop",e.push="push",e}({}),ta=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function wy(e){if(!e)if(Sr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),my(e)}const Ty=/^[^#]+#/;function Iy(e,t){return e.replace(Ty,"#")+t}function Ay(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const go=()=>({left:window.scrollX,top:window.scrollY});function by(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Ay(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Au(e,t){return(history.state?history.state.position-t:-1)+e}const Da=new Map;function Sy(e,t){Da.set(e,t)}function Ry(e){const t=Da.get(e);return Da.delete(e),t}function Cy(e){return typeof e=="string"||e&&typeof e=="object"}function ad(e){return typeof e=="string"||typeof e=="symbol"}let kt=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const ld=Symbol("");kt.MATCHER_NOT_FOUND+"",kt.NAVIGATION_GUARD_REDIRECT+"",kt.NAVIGATION_ABORTED+"",kt.NAVIGATION_CANCELLED+"",kt.NAVIGATION_DUPLICATED+"";function Ur(e,t){return vt(new Error,{type:e,[ld]:!0},t)}function dn(e,t){return e instanceof Error&&ld in e&&(t==null||!!(e.type&t))}const Py=["params","query","hash"];function Dy(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Py)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Vy(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(nd," "),i=s.indexOf("="),a=Ls(i<0?s:s.slice(0,i)),l=i<0?null:Ls(s.slice(i+1));if(a in t){let u=t[a];ze(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function bu(e){let t="";for(let n in e){const r=e[n];if(n=fy(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(r)?r.map(s=>s&&Ca(s)):[r&&Ca(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Ny(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Oy=Symbol(""),Su=Symbol(""),_l=Symbol(""),yl=Symbol(""),Va=Symbol("");function us(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function xn(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,u)=>{const h=y=>{y===!1?u(Ur(kt.NAVIGATION_ABORTED,{from:n,to:t})):y instanceof Error?u(y):Cy(y)?u(Ur(kt.NAVIGATION_GUARD_REDIRECT,{from:t,to:y})):(a&&r.enterCallbacks[s]===a&&typeof y=="function"&&a.push(y),l())},d=i(()=>e.call(r&&r.instances[s],t,n,h));let p=Promise.resolve(d);e.length<3&&(p=p.then(h)),p.catch(y=>u(y))})}function ea(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const l in a.components){let u=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(td(u)){const h=(u.__vccOpts||u)[t];h&&i.push(xn(h,n,r,a,l,s))}else{let h=u();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=ey(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const y=(p.__vccOpts||p)[t];return y&&xn(y,n,r,a,l,s)()}))}}return i}function ky(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(h=>Fr(h,l))?r.push(l):n.push(l));const u=e.matched[a];u&&(t.matched.find(h=>Fr(h,u))||s.push(u))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let xy=()=>location.protocol+"//"+location.host;function cd(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Tu(l,"")}return Tu(n,e)+r+s}function My(e,t,n,r){let s=[],i=[],a=null;const l=({state:y})=>{const I=cd(e,location),k=n.value,O=t.value;let $=0;if(y){if(n.value=I,t.value=y,a&&a===k){a=null;return}$=O?y.position-O.position:0}else r(I);s.forEach(W=>{W(n.value,k,{delta:$,type:Pa.pop,direction:$?$>0?ta.forward:ta.back:ta.unknown})})};function u(){a=n.value}function h(y){s.push(y);const I=()=>{const k=s.indexOf(y);k>-1&&s.splice(k,1)};return i.push(I),I}function d(){if(document.visibilityState==="hidden"){const{history:y}=window;if(!y.state)return;y.replaceState(vt({},y.state,{scroll:go()}),"")}}function p(){for(const y of i)y();i=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:u,listen:h,destroy:p}}function Ru(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?go():null}}function Ly(e){const{history:t,location:n}=window,r={value:cd(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(u,h,d){const p=e.indexOf("#"),y=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+u:xy()+e+u;try{t[d?"replaceState":"pushState"](h,"",y),s.value=h}catch(I){console.error(I),n[d?"replace":"assign"](y)}}function a(u,h){i(u,vt({},t.state,Ru(s.value.back,u,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=u}function l(u,h){const d=vt({},s.value,t.state,{forward:u,scroll:go()});i(d.current,d,!0),i(u,vt({},Ru(r.value,u,null),{position:d.position+1},h),!1),r.value=u}return{location:r,state:s,push:l,replace:a}}function Fy(e){e=wy(e);const t=Ly(e),n=My(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=vt({location:"",base:e,go:r,createHref:Iy.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let nr=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var zt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(zt||{});const Uy={type:nr.Static,value:""},By=/[a-zA-Z0-9_]/;function jy(e){if(!e)return[[]];if(e==="/")return[[Uy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(I){throw new Error(`ERR (${n})/"${h}": ${I}`)}let n=zt.Static,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,u,h="",d="";function p(){h&&(n===zt.Static?i.push({type:nr.Static,value:h}):n===zt.Param||n===zt.ParamRegExp||n===zt.ParamRegExpEnd?(i.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:nr.Param,value:h,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),h="")}function y(){h+=u}for(;l<e.length;){if(u=e[l++],u==="\\"&&n!==zt.ParamRegExp){r=n,n=zt.EscapeNext;continue}switch(n){case zt.Static:u==="/"?(h&&p(),a()):u===":"?(p(),n=zt.Param):y();break;case zt.EscapeNext:y(),n=r;break;case zt.Param:u==="("?n=zt.ParamRegExp:By.test(u)?y():(p(),n=zt.Static,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case zt.ParamRegExp:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=zt.ParamRegExpEnd:d+=u;break;case zt.ParamRegExpEnd:p(),n=zt.Static,u!=="*"&&u!=="?"&&u!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===zt.ParamRegExp&&t(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}const Cu="[^/]+?",$y={sensitive:!1,strict:!1,start:!0,end:!0};var me=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(me||{});const Hy=/[.+*?^${}()[\]/\\]/g;function qy(e,t){const n=vt({},$y,t),r=[];let s=n.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[me.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const y=h[p];let I=me.Segment+(n.sensitive?me.BonusCaseSensitive:0);if(y.type===nr.Static)p||(s+="/"),s+=y.value.replace(Hy,"\\$&"),I+=me.Static;else if(y.type===nr.Param){const{value:k,repeatable:O,optional:$,regexp:W}=y;i.push({name:k,repeatable:O,optional:$});const j=W||Cu;if(j!==Cu){I+=me.BonusCustomRegExp;try{`${j}`}catch(Q){throw new Error(`Invalid custom RegExp for param "${k}" (${j}): `+Q.message)}}let q=O?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(q=$&&h.length<2?`(?:/${q})`:"/"+q),$&&(q+="?"),s+=q,I+=me.Dynamic,$&&(I+=me.BonusOptional),O&&(I+=me.BonusRepeatable),j===".*"&&(I+=me.BonusWildcard)}d.push(I)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=me.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let y=1;y<d.length;y++){const I=d[y]||"",k=i[y-1];p[k.name]=I&&k.repeatable?I.split("/"):I}return p}function u(h){let d="",p=!1;for(const y of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const I of y)if(I.type===nr.Static)d+=I.value;else if(I.type===nr.Param){const{value:k,repeatable:O,optional:$}=I,W=k in h?h[k]:"";if(ze(W)&&!O)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const j=ze(W)?W.join("/"):W;if(!j)if($)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:u}}function zy(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===me.Static+me.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===me.Static+me.Segment?1:-1:0}function ud(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=zy(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pu(r))return 1;if(Pu(s))return-1}return s.length-r.length}function Pu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Gy={strict:!1,end:!0,sensitive:!1};function Ky(e,t,n){const r=qy(jy(e.path),n),s=vt(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Wy(e,t){const n=[],r=new Map;t=wu(Gy,t);function s(p){return r.get(p)}function i(p,y,I){const k=!I,O=Vu(p);O.aliasOf=I&&I.record;const $=wu(t,p),W=[O];if("alias"in p){const Q=typeof p.alias=="string"?[p.alias]:p.alias;for(const st of Q)W.push(Vu(vt({},O,{components:I?I.record.components:O.components,path:st,aliasOf:I?I.record:O})))}let j,q;for(const Q of W){const{path:st}=Q;if(y&&st[0]!=="/"){const gt=y.record.path,v=gt[gt.length-1]==="/"?"":"/";Q.path=y.record.path+(st&&v+st)}if(j=Ky(Q,y,$),I?I.alias.push(j):(q=q||j,q!==j&&q.alias.push(j),k&&p.name&&!Nu(j)&&a(p.name)),hd(j)&&u(j),O.children){const gt=O.children;for(let v=0;v<gt.length;v++)i(gt[v],j,I&&I.children[v])}I=I||j}return q?()=>{a(q)}:bs}function a(p){if(ad(p)){const y=r.get(p);y&&(r.delete(p),n.splice(n.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=n.indexOf(p);y>-1&&(n.splice(y,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function u(p){const y=Yy(p,n);n.splice(y,0,p),p.record.name&&!Nu(p)&&r.set(p.record.name,p)}function h(p,y){let I,k={},O,$;if("name"in p&&p.name){if(I=r.get(p.name),!I)throw Ur(kt.MATCHER_NOT_FOUND,{location:p});$=I.record.name,k=vt(Du(y.params,I.keys.filter(q=>!q.optional).concat(I.parent?I.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&Du(p.params,I.keys.map(q=>q.name))),O=I.stringify(k)}else if(p.path!=null)O=p.path,I=n.find(q=>q.re.test(O)),I&&(k=I.parse(O),$=I.record.name);else{if(I=y.name?r.get(y.name):n.find(q=>q.re.test(y.path)),!I)throw Ur(kt.MATCHER_NOT_FOUND,{location:p,currentLocation:y});$=I.record.name,k=vt({},y.params,p.params),O=I.stringify(k)}const W=[];let j=I;for(;j;)W.unshift(j.record),j=j.parent;return{name:$,path:O,params:k,matched:W,meta:Jy(W)}}e.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Du(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Vu(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Qy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Qy(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Nu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Jy(e){return e.reduce((t,n)=>vt(t,n.meta),{})}function Yy(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;ud(e,t[i])<0?r=i:n=i+1}const s=Xy(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Xy(e){let t=e;for(;t=t.parent;)if(hd(t)&&ud(e,t)===0)return t}function hd({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ou(e){const t=Oe(_l),n=Oe(yl),r=Fe(()=>{const u=Ot(e.to);return t.resolve(u)}),s=Fe(()=>{const{matched:u}=r.value,{length:h}=u,d=u[h-1],p=n.matched;if(!d||!p.length)return-1;const y=p.findIndex(Fr.bind(null,d));if(y>-1)return y;const I=ku(u[h-2]);return h>1&&ku(d)===I&&p[p.length-1].path!==I?p.findIndex(Fr.bind(null,u[h-2])):y}),i=Fe(()=>s.value>-1&&rv(n.params,r.value.params)),a=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&od(n.params,r.value.params));function l(u={}){if(nv(u)){const h=t[Ot(e.replace)?"replace":"push"](Ot(e.to)).catch(bs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function Zy(e){return e.length===1?e[0]:e}const tv=Sf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ou,setup(e,{slots:t}){const n=Ks(Ou(e)),{options:r}=Oe(_l),s=Fe(()=>({[xu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Zy(t.default(n));return e.custom?i:Xf("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ev=tv;function nv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rv(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ze(s)||s.length!==r.length||r.some((i,a)=>i.valueOf()!==s[a].valueOf()))return!1}return!0}function ku(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xu=(e,t,n)=>e??t??n,sv=Sf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Oe(Va),s=Fe(()=>e.route||r.value),i=Oe(Su,0),a=Fe(()=>{let h=Ot(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Fe(()=>s.value.matched[a.value]);vs(Su,Fe(()=>a.value+1)),vs(Oy,l),vs(Va,s);const u=Ln();return Es(()=>[u.value,l.value,e.name],([h,d,p],[y,I,k])=>{d&&(d.instances[p]=h,I&&I!==d&&h&&h===y&&(d.leaveGuards.size||(d.leaveGuards=I.leaveGuards),d.updateGuards.size||(d.updateGuards=I.updateGuards))),h&&d&&(!I||!Fr(d,I)||!y)&&(d.enterCallbacks[p]||[]).forEach(O=>O(h))},{flush:"post"}),()=>{const h=s.value,d=e.name,p=l.value,y=p&&p.components[d];if(!y)return Mu(n.default,{Component:y,route:h});const I=p.props[d],k=I?I===!0?h.params:typeof I=="function"?I(h):I:null,$=Xf(y,vt({},k,t,{onVnodeUnmounted:W=>{W.component.isUnmounted&&(p.instances[d]=null)},ref:u}));return Mu(n.default,{Component:$,route:h})||$}}});function Mu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const iv=sv;function ov(e){const t=Wy(e.routes,e),n=e.parseQuery||Vy,r=e.stringifyQuery||bu,s=e.history,i=us(),a=us(),l=us(),u=lm(On);let h=On;Sr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Xo.bind(null,N=>""+N),p=Xo.bind(null,py),y=Xo.bind(null,Ls);function I(N,J){let G,X;return ad(N)?(G=t.getRecordMatcher(N),X=J):X=N,t.addRoute(X,G)}function k(N){const J=t.getRecordMatcher(N);J&&t.removeRoute(J)}function O(){return t.getRoutes().map(N=>N.record)}function $(N){return!!t.getRecordMatcher(N)}function W(N,J){if(J=vt({},J||u.value),typeof N=="string"){const R=Zo(n,N,J.path),D=t.resolve({path:R.path},J),x=s.createHref(R.fullPath);return vt(R,D,{params:y(D.params),hash:Ls(R.hash),redirectedFrom:void 0,href:x})}let G;if(N.path!=null)G=vt({},N,{path:Zo(n,N.path,J.path).path});else{const R=vt({},N.params);for(const D in R)R[D]==null&&delete R[D];G=vt({},N,{params:p(R)}),J.params=p(J.params)}const X=t.resolve(G,J),ut=N.hash||"";X.params=d(y(X.params));const _=_y(r,vt({},N,{hash:hy(ut),path:X.path})),w=s.createHref(_);return vt({fullPath:_,hash:ut,query:r===bu?Ny(N.query):N.query||{}},X,{redirectedFrom:void 0,href:w})}function j(N){return typeof N=="string"?Zo(n,N,u.value.path):vt({},N)}function q(N,J){if(h!==N)return Ur(kt.NAVIGATION_CANCELLED,{from:J,to:N})}function Q(N){return v(N)}function st(N){return Q(vt(j(N),{replace:!0}))}function gt(N,J){const G=N.matched[N.matched.length-1];if(G&&G.redirect){const{redirect:X}=G;let ut=typeof X=="function"?X(N,J):X;return typeof ut=="string"&&(ut=ut.includes("?")||ut.includes("#")?ut=j(ut):{path:ut},ut.params={}),vt({query:N.query,hash:N.hash,params:ut.path!=null?{}:N.params},ut)}}function v(N,J){const G=h=W(N),X=u.value,ut=N.state,_=N.force,w=N.replace===!0,R=gt(G,X);if(R)return v(vt(j(R),{state:typeof R=="object"?vt({},ut,R.state):ut,force:_,replace:w}),J||G);const D=G;D.redirectedFrom=J;let x;return!_&&yy(r,X,G)&&(x=Ur(kt.NAVIGATION_DUPLICATED,{to:D,from:X}),be(X,X,!0,!1)),(x?Promise.resolve(x):b(D,X)).catch(V=>dn(V)?dn(V,kt.NAVIGATION_GUARD_REDIRECT)?V:Ge(V):ht(V,D,X)).then(V=>{if(V){if(dn(V,kt.NAVIGATION_GUARD_REDIRECT))return v(vt({replace:w},j(V.to),{state:typeof V.to=="object"?vt({},ut,V.to.state):ut,force:_}),J||D)}else V=S(D,X,!0,w,ut);return A(D,X,V),V})}function m(N,J){const G=q(N,J);return G?Promise.reject(G):Promise.resolve()}function T(N){const J=ke.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(N):N()}function b(N,J){let G;const[X,ut,_]=ky(N,J);G=ea(X.reverse(),"beforeRouteLeave",N,J);for(const R of X)R.leaveGuards.forEach(D=>{G.push(xn(D,N,J))});const w=m.bind(null,N,J);return G.push(w),se(G).then(()=>{G=[];for(const R of i.list())G.push(xn(R,N,J));return G.push(w),se(G)}).then(()=>{G=ea(ut,"beforeRouteUpdate",N,J);for(const R of ut)R.updateGuards.forEach(D=>{G.push(xn(D,N,J))});return G.push(w),se(G)}).then(()=>{G=[];for(const R of _)if(R.beforeEnter)if(ze(R.beforeEnter))for(const D of R.beforeEnter)G.push(xn(D,N,J));else G.push(xn(R.beforeEnter,N,J));return G.push(w),se(G)}).then(()=>(N.matched.forEach(R=>R.enterCallbacks={}),G=ea(_,"beforeRouteEnter",N,J,T),G.push(w),se(G))).then(()=>{G=[];for(const R of a.list())G.push(xn(R,N,J));return G.push(w),se(G)}).catch(R=>dn(R,kt.NAVIGATION_CANCELLED)?R:Promise.reject(R))}function A(N,J,G){l.list().forEach(X=>T(()=>X(N,J,G)))}function S(N,J,G,X,ut){const _=q(N,J);if(_)return _;const w=J===On,R=Sr?history.state:{};G&&(X||w?s.replace(N.fullPath,vt({scroll:w&&R&&R.scroll},ut)):s.push(N.fullPath,ut)),u.value=N,be(N,J,G,w),Ge()}let E;function Ft(){E||(E=s.listen((N,J,G)=>{if(!xe.listening)return;const X=W(N),ut=gt(X,xe.currentRoute.value);if(ut){v(vt(ut,{replace:!0,force:!0}),X).catch(bs);return}h=X;const _=u.value;Sr&&Sy(Au(_.fullPath,G.delta),go()),b(X,_).catch(w=>dn(w,kt.NAVIGATION_ABORTED|kt.NAVIGATION_CANCELLED)?w:dn(w,kt.NAVIGATION_GUARD_REDIRECT)?(v(vt(j(w.to),{force:!0}),X).then(R=>{dn(R,kt.NAVIGATION_ABORTED|kt.NAVIGATION_DUPLICATED)&&!G.delta&&G.type===Pa.pop&&s.go(-1,!1)}).catch(bs),Promise.reject()):(G.delta&&s.go(-G.delta,!1),ht(w,X,_))).then(w=>{w=w||S(X,_,!1),w&&(G.delta&&!dn(w,kt.NAVIGATION_CANCELLED)?s.go(-G.delta,!1):G.type===Pa.pop&&dn(w,kt.NAVIGATION_ABORTED|kt.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(X,_,w)}).catch(bs)}))}let Ee=us(),Ut=us(),mt;function ht(N,J,G){Ge(N);const X=Ut.list();return X.length?X.forEach(ut=>ut(N,J,G)):console.error(N),Promise.reject(N)}function we(){return mt&&u.value!==On?Promise.resolve():new Promise((N,J)=>{Ee.add([N,J])})}function Ge(N){return mt||(mt=!N,Ft(),Ee.list().forEach(([J,G])=>N?G(N):J()),Ee.reset()),N}function be(N,J,G,X){const{scrollBehavior:ut}=e;if(!Sr||!ut)return Promise.resolve();const _=!G&&Ry(Au(N.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return vf().then(()=>ut(N,J,_)).then(w=>w&&by(w)).catch(w=>ht(w,N,J))}const Jt=N=>s.go(N);let hn;const ke=new Set,xe={currentRoute:u,listening:!0,addRoute:I,removeRoute:k,clearRoutes:t.clearRoutes,hasRoute:$,getRoutes:O,resolve:W,options:e,push:Q,replace:st,go:Jt,back:()=>Jt(-1),forward:()=>Jt(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Ut.add,isReady:we,install(N){N.component("RouterLink",ev),N.component("RouterView",iv),N.config.globalProperties.$router=xe,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Ot(u)}),Sr&&!hn&&u.value===On&&(hn=!0,Q(s.location).catch(X=>{}));const J={};for(const X in On)Object.defineProperty(J,X,{get:()=>u.value[X],enumerable:!0});N.provide(_l,xe),N.provide(yl,gf(J)),N.provide(Va,u);const G=N.unmount;ke.add(N),N.unmount=function(){ke.delete(N),ke.size<1&&(h=On,E&&E(),E=null,u.value=On,hn=!1,mt=!1),G()}}};function se(N){return N.reduce((J,G)=>J.then(()=>T(G)),Promise.resolve())}return xe}function av(e){return Oe(yl)}function lv(e){return e.toLocaleDateString("sv",{timeZone:"Europe/Rome"})}async function fd(){return(await fetch("/partita-domani-a-roma/data/matches.json",{cache:"no-cache"})).json()}async function Lu(e){const t=lv(e);try{const r=(await fd())[t];return r?{timestamp:new Date(r.timestamp),homeTeam:r.homeTeam,awayTeamName:r.awayTeamName}:null}catch{return null}}async function Fu(){try{const t=(await fd()).nextMatch;return t?{date:t.date,timestamp:new Date(t.timestamp),homeTeam:t.homeTeam,awayTeamName:t.awayTeamName}:null}catch{return null}}function Ve(e,t={}){typeof window.gtag=="function"&&window.gtag("event",e,t)}const cv=()=>{};var Uu={};/**
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
 */const dd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},uv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,u=s+2<e.length,h=u?e[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,I=h&63;u||(I=64,a||(y=64)),r.push(n[d],n[p],n[y],n[I])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):uv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new hv;const y=i<<2|l>>4;if(r.push(y),h!==64){const I=l<<4&240|h>>2;if(r.push(I),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class hv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fv=function(e){const t=dd(e);return pd.encodeByteArray(t,!0)},ji=function(e){return fv(e).replace(/\./g,"")},dv=function(e){try{return pd.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function pv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gv=()=>pv().__FIREBASE_DEFAULTS__,mv=()=>{if(typeof process>"u"||typeof Uu>"u")return;const e=Uu.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},_v=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&dv(e[1]);return t&&JSON.parse(t)},vl=()=>{try{return cv()||gv()||mv()||_v()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},yv=e=>{var t,n;return(n=(t=vl())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},vv=e=>{const t=yv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},gd=()=>{var e;return(e=vl())==null?void 0:e.config};/**
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
 */class Ev{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function wv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[ji(JSON.stringify(n)),ji(JSON.stringify(a)),""].join(".")}/**
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
 */function Tv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Iv(){var t;const e=(t=vl())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Av(){return!Iv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function md(){try{return typeof indexedDB=="object"}catch{return!1}}function _d(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)==null?void 0:i.message)||"")}}catch(n){t(n)}})}function bv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Sv="FirebaseError";class _r extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Sv,Object.setPrototypeOf(this,_r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Rv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new _r(s,l,r)}}function Rv(e,t){return e.replace(Cv,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Cv=/\{\$([^}]+)}/g;function $i(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(Bu(i)&&Bu(a)){if(!$i(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bu(e){return e!==null&&typeof e=="object"}/**
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
 */function lr(e){return e&&e._delegate?e._delegate:e}/**
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
 */function yd(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pv(e){return(await fetch(e,{credentials:"include"})).ok}class An{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class Dv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ev;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Nv(t))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=er){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=er){return this.instances.has(t)}getOptions(t=er){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=er){return this.component?this.component.multipleInstances?t:er:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vv(e){return e===er?void 0:e}function Nv(e){return e.instantiationMode==="EAGER"}/**
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
 */class Ov{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Dv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(pt||(pt={}));const kv={debug:pt.DEBUG,verbose:pt.VERBOSE,info:pt.INFO,warn:pt.WARN,error:pt.ERROR,silent:pt.SILENT},xv=pt.INFO,Mv={[pt.DEBUG]:"log",[pt.VERBOSE]:"log",[pt.INFO]:"info",[pt.WARN]:"warn",[pt.ERROR]:"error"},Lv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Mv[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vd{constructor(t){this.name=t,this._logLevel=xv,this._logHandler=Lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in pt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?kv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,pt.DEBUG,...t),this._logHandler(this,pt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,pt.VERBOSE,...t),this._logHandler(this,pt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,pt.INFO,...t),this._logHandler(this,pt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,pt.WARN,...t),this._logHandler(this,pt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,pt.ERROR,...t),this._logHandler(this,pt.ERROR,...t)}}const Fv=(e,t)=>t.some(n=>e instanceof n);let ju,$u;function Uv(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bv(){return $u||($u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ed=new WeakMap,Na=new WeakMap,wd=new WeakMap,na=new WeakMap,El=new WeakMap;function jv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(vn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Ed.set(n,e)}).catch(()=>{}),El.set(t,e),t}function $v(e){if(Na.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Na.set(e,t)}let Oa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Na.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Hv(e){Oa=e(Oa)}function qv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ra(this),t,...n);return wd.set(r,t.sort?t.sort():[t]),vn(r)}:Bv().includes(e)?function(...t){return e.apply(ra(this),t),vn(Ed.get(this))}:function(...t){return vn(e.apply(ra(this),t))}}function zv(e){return typeof e=="function"?qv(e):(e instanceof IDBTransaction&&$v(e),Fv(e,Uv())?new Proxy(e,Oa):e)}function vn(e){if(e instanceof IDBRequest)return jv(e);if(na.has(e))return na.get(e);const t=zv(e);return t!==e&&(na.set(e,t),El.set(t,e)),t}const ra=e=>El.get(e);function _o(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=vn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(vn(a.result),u.oldVersion,u.newVersion,vn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}function sa(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),vn(n).then(()=>{})}const Gv=["get","getKey","getAll","getAllKeys","count"],Kv=["put","add","delete","clear"],ia=new Map;function Hu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ia.get(t))return ia.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Kv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gv.includes(n)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return ia.set(t,i),i}Hv(e=>({...e,get:(t,n,r)=>Hu(t,n)||e.get(t,n,r),has:(t,n)=>!!Hu(t,n)||e.has(t,n)}));/**
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
 */class Wv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ka="@firebase/app",qu="0.14.11";/**
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
 */const bn=new vd("@firebase/app"),Jv="@firebase/app-compat",Yv="@firebase/analytics-compat",Xv="@firebase/analytics",Zv="@firebase/app-check-compat",tE="@firebase/app-check",eE="@firebase/auth",nE="@firebase/auth-compat",rE="@firebase/database",sE="@firebase/data-connect",iE="@firebase/database-compat",oE="@firebase/functions",aE="@firebase/functions-compat",lE="@firebase/installations",cE="@firebase/installations-compat",uE="@firebase/messaging",hE="@firebase/messaging-compat",fE="@firebase/performance",dE="@firebase/performance-compat",pE="@firebase/remote-config",gE="@firebase/remote-config-compat",mE="@firebase/storage",_E="@firebase/storage-compat",yE="@firebase/firestore",vE="@firebase/ai",EE="@firebase/firestore-compat",wE="firebase",TE="12.12.0";/**
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
 */const xa="[DEFAULT]",IE={[ka]:"fire-core",[Jv]:"fire-core-compat",[Xv]:"fire-analytics",[Yv]:"fire-analytics-compat",[tE]:"fire-app-check",[Zv]:"fire-app-check-compat",[eE]:"fire-auth",[nE]:"fire-auth-compat",[rE]:"fire-rtdb",[sE]:"fire-data-connect",[iE]:"fire-rtdb-compat",[oE]:"fire-fn",[aE]:"fire-fn-compat",[lE]:"fire-iid",[cE]:"fire-iid-compat",[uE]:"fire-fcm",[hE]:"fire-fcm-compat",[fE]:"fire-perf",[dE]:"fire-perf-compat",[pE]:"fire-rc",[gE]:"fire-rc-compat",[mE]:"fire-gcs",[_E]:"fire-gcs-compat",[yE]:"fire-fst",[EE]:"fire-fst-compat",[vE]:"fire-vertex","fire-js":"fire-js",[wE]:"fire-js-all"};/**
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
 */const Hi=new Map,AE=new Map,Ma=new Map;function zu(e,t){try{e.container.addComponent(t)}catch(n){bn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $n(e){const t=e.name;if(Ma.has(t))return bn.debug(`There were multiple attempts to register component ${t}.`),!1;Ma.set(t,e);for(const n of Hi.values())zu(n,e);for(const n of AE.values())zu(n,e);return!0}function yo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function bE(e){return e==null?!1:e.settings!==void 0}/**
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
 */const SE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new mo("app","Firebase",SE);/**
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
 */class RE{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const CE=TE;function Td(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:xa,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(n||(n=gd()),!n)throw Un.create("no-options");const i=Hi.get(s);if(i){if($i(n,i.options)&&$i(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const a=new Ov(s);for(const u of Ma.values())a.addComponent(u);const l=new RE(n,r,a);return Hi.set(s,l),l}function Id(e=xa){const t=Hi.get(e);if(!t&&e===xa&&gd())return Td();if(!t)throw Un.create("no-app",{appName:e});return t}function rn(e,t,n){let r=IE[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bn.warn(a.join(" "));return}$n(new An(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const PE="firebase-heartbeat-database",DE=1,Fs="firebase-heartbeat-store";let oa=null;function Ad(){return oa||(oa=_o(PE,DE,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Fs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Un.create("idb-open",{originalErrorMessage:e.message})})),oa}async function VE(e){try{const n=(await Ad()).transaction(Fs),r=await n.objectStore(Fs).get(bd(e));return await n.done,r}catch(t){if(t instanceof _r)bn.warn(t.message);else{const n=Un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bn.warn(n.message)}}}async function Gu(e,t){try{const r=(await Ad()).transaction(Fs,"readwrite");await r.objectStore(Fs).put(t,bd(e)),await r.done}catch(n){if(n instanceof _r)bn.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function bd(e){return`${e.name}!${e.options.appId}`}/**
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
 */const NE=1024,OE=30;class kE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ME(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ku();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>OE){const a=LE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ku(),{heartbeatsToSend:r,unsentEntries:s}=xE(this._heartbeatsCache.heartbeats),i=ji(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return bn.warn(n),""}}}function Ku(){return new Date().toISOString().substring(0,10)}function xE(e,t=NE){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Wu(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ME{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return md()?_d().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Gu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Wu(e){return ji(JSON.stringify({version:2,heartbeats:e})).length}function LE(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function FE(e){$n(new An("platform-logger",t=>new Wv(t),"PRIVATE")),$n(new An("heartbeat",t=>new kE(t),"PRIVATE")),rn(ka,qu,e),rn(ka,qu,"esm2020"),rn("fire-js","")}FE("");var UE="firebase",BE="12.12.1";/**
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
 */rn(UE,BE,"app");var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wl;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function T(){}T.prototype=m.prototype,v.F=m.prototype,v.prototype=new T,v.prototype.constructor=v,v.D=function(b,A,S){for(var E=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)E[Ft-2]=arguments[Ft];return m.prototype[A].apply(b,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,T){T||(T=0);const b=Array(16);if(typeof m=="string")for(var A=0;A<16;++A)b[A]=m.charCodeAt(T++)|m.charCodeAt(T++)<<8|m.charCodeAt(T++)<<16|m.charCodeAt(T++)<<24;else for(A=0;A<16;++A)b[A]=m[T++]|m[T++]<<8|m[T++]<<16|m[T++]<<24;m=v.g[0],T=v.g[1],A=v.g[2];let S=v.g[3],E;E=m+(S^T&(A^S))+b[0]+3614090360&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(A^m&(T^A))+b[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(T^S&(m^T))+b[2]+606105819&4294967295,A=S+(E<<17&4294967295|E>>>15),E=T+(m^A&(S^m))+b[3]+3250441966&4294967295,T=A+(E<<22&4294967295|E>>>10),E=m+(S^T&(A^S))+b[4]+4118548399&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(A^m&(T^A))+b[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(T^S&(m^T))+b[6]+2821735955&4294967295,A=S+(E<<17&4294967295|E>>>15),E=T+(m^A&(S^m))+b[7]+4249261313&4294967295,T=A+(E<<22&4294967295|E>>>10),E=m+(S^T&(A^S))+b[8]+1770035416&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(A^m&(T^A))+b[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(T^S&(m^T))+b[10]+4294925233&4294967295,A=S+(E<<17&4294967295|E>>>15),E=T+(m^A&(S^m))+b[11]+2304563134&4294967295,T=A+(E<<22&4294967295|E>>>10),E=m+(S^T&(A^S))+b[12]+1804603682&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(A^m&(T^A))+b[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(T^S&(m^T))+b[14]+2792965006&4294967295,A=S+(E<<17&4294967295|E>>>15),E=T+(m^A&(S^m))+b[15]+1236535329&4294967295,T=A+(E<<22&4294967295|E>>>10),E=m+(A^S&(T^A))+b[1]+4129170786&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^A&(m^T))+b[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^T&(S^m))+b[11]+643717713&4294967295,A=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(A^S))+b[0]+3921069994&4294967295,T=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(T^A))+b[5]+3593408605&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^A&(m^T))+b[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^T&(S^m))+b[15]+3634488961&4294967295,A=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(A^S))+b[4]+3889429448&4294967295,T=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(T^A))+b[9]+568446438&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^A&(m^T))+b[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^T&(S^m))+b[3]+4107603335&4294967295,A=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(A^S))+b[8]+1163531501&4294967295,T=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(T^A))+b[13]+2850285829&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^A&(m^T))+b[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^T&(S^m))+b[7]+1735328473&4294967295,A=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(A^S))+b[12]+2368359562&4294967295,T=A+(E<<20&4294967295|E>>>12),E=m+(T^A^S)+b[5]+4294588738&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^A)+b[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^T)+b[11]+1839030562&4294967295,A=S+(E<<16&4294967295|E>>>16),E=T+(A^S^m)+b[14]+4259657740&4294967295,T=A+(E<<23&4294967295|E>>>9),E=m+(T^A^S)+b[1]+2763975236&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^A)+b[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^T)+b[7]+4139469664&4294967295,A=S+(E<<16&4294967295|E>>>16),E=T+(A^S^m)+b[10]+3200236656&4294967295,T=A+(E<<23&4294967295|E>>>9),E=m+(T^A^S)+b[13]+681279174&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^A)+b[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^T)+b[3]+3572445317&4294967295,A=S+(E<<16&4294967295|E>>>16),E=T+(A^S^m)+b[6]+76029189&4294967295,T=A+(E<<23&4294967295|E>>>9),E=m+(T^A^S)+b[9]+3654602809&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^A)+b[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^T)+b[15]+530742520&4294967295,A=S+(E<<16&4294967295|E>>>16),E=T+(A^S^m)+b[2]+3299628645&4294967295,T=A+(E<<23&4294967295|E>>>9),E=m+(A^(T|~S))+b[0]+4096336452&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~A))+b[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~T))+b[14]+2878612391&4294967295,A=S+(E<<15&4294967295|E>>>17),E=T+(S^(A|~m))+b[5]+4237533241&4294967295,T=A+(E<<21&4294967295|E>>>11),E=m+(A^(T|~S))+b[12]+1700485571&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~A))+b[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~T))+b[10]+4293915773&4294967295,A=S+(E<<15&4294967295|E>>>17),E=T+(S^(A|~m))+b[1]+2240044497&4294967295,T=A+(E<<21&4294967295|E>>>11),E=m+(A^(T|~S))+b[8]+1873313359&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~A))+b[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~T))+b[6]+2734768916&4294967295,A=S+(E<<15&4294967295|E>>>17),E=T+(S^(A|~m))+b[13]+1309151649&4294967295,T=A+(E<<21&4294967295|E>>>11),E=m+(A^(T|~S))+b[4]+4149444226&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~A))+b[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~T))+b[2]+718787259&4294967295,A=S+(E<<15&4294967295|E>>>17),E=T+(S^(A|~m))+b[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+S&4294967295}r.prototype.v=function(v,m){m===void 0&&(m=v.length);const T=m-this.blockSize,b=this.C;let A=this.h,S=0;for(;S<m;){if(A==0)for(;S<=T;)s(this,v,S),S+=this.blockSize;if(typeof v=="string"){for(;S<m;)if(b[A++]=v.charCodeAt(S++),A==this.blockSize){s(this,b),A=0;break}}else for(;S<m;)if(b[A++]=v[S++],A==this.blockSize){s(this,b),A=0;break}}this.h=A,this.o+=m},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;m=this.o*8;for(var T=v.length-8;T<v.length;++T)v[T]=m&255,m/=256;for(this.v(v),v=Array(16),m=0,T=0;T<4;++T)for(let b=0;b<32;b+=8)v[m++]=this.g[T]>>>b&255;return v};function i(v,m){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=m(v)}function a(v,m){this.h=m;const T=[];let b=!0;for(let A=v.length-1;A>=0;A--){const S=v[A]|0;b&&S==m||(T[A]=S,b=!1)}this.g=T}var l={};function u(v){return-128<=v&&v<128?i(v,function(m){return new a([m|0],m<0?-1:0)}):new a([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return $(h(-v));const m=[];let T=1;for(let b=0;v>=T;b++)m[b]=v/T|0,T*=4294967296;return new a(m,0)}function d(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return $(d(v.substring(1),m));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(m,8));let b=p;for(let S=0;S<v.length;S+=8){var A=Math.min(8,v.length-S);const E=parseInt(v.substring(S,S+A),m);A<8?(A=h(Math.pow(m,A)),b=b.j(A).add(h(E))):(b=b.j(T),b=b.add(h(E)))}return b}var p=u(0),y=u(1),I=u(16777216);e=a.prototype,e.m=function(){if(O(this))return-$(this).m();let v=0,m=1;for(let T=0;T<this.g.length;T++){const b=this.i(T);v+=(b>=0?b:4294967296+b)*m,m*=4294967296}return v},e.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(O(this))return"-"+$(this).toString(v);const m=h(Math.pow(v,6));var T=this;let b="";for(;;){const A=Q(T,m).g;T=W(T,A.j(m));let S=((T.g.length>0?T.g[0]:T.h)>>>0).toString(v);if(T=A,k(T))return S+b;for(;S.length<6;)S="0"+S;b=S+b}},e.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(let m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function O(v){return v.h==-1}e.l=function(v){return v=W(this,v),O(v)?-1:k(v)?0:1};function $(v){const m=v.g.length,T=[];for(let b=0;b<m;b++)T[b]=~v.g[b];return new a(T,~v.h).add(y)}e.abs=function(){return O(this)?$(this):this},e.add=function(v){const m=Math.max(this.g.length,v.g.length),T=[];let b=0;for(let A=0;A<=m;A++){let S=b+(this.i(A)&65535)+(v.i(A)&65535),E=(S>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);b=E>>>16,S&=65535,E&=65535,T[A]=E<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function W(v,m){return v.add($(m))}e.j=function(v){if(k(this)||k(v))return p;if(O(this))return O(v)?$(this).j($(v)):$($(this).j(v));if(O(v))return $(this.j($(v)));if(this.l(I)<0&&v.l(I)<0)return h(this.m()*v.m());const m=this.g.length+v.g.length,T=[];for(var b=0;b<2*m;b++)T[b]=0;for(b=0;b<this.g.length;b++)for(let A=0;A<v.g.length;A++){const S=this.i(b)>>>16,E=this.i(b)&65535,Ft=v.i(A)>>>16,Ee=v.i(A)&65535;T[2*b+2*A]+=E*Ee,j(T,2*b+2*A),T[2*b+2*A+1]+=S*Ee,j(T,2*b+2*A+1),T[2*b+2*A+1]+=E*Ft,j(T,2*b+2*A+1),T[2*b+2*A+2]+=S*Ft,j(T,2*b+2*A+2)}for(v=0;v<m;v++)T[v]=T[2*v+1]<<16|T[2*v];for(v=m;v<2*m;v++)T[v]=0;return new a(T,0)};function j(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function q(v,m){this.g=v,this.h=m}function Q(v,m){if(k(m))throw Error("division by zero");if(k(v))return new q(p,p);if(O(v))return m=Q($(v),m),new q($(m.g),$(m.h));if(O(m))return m=Q(v,$(m)),new q($(m.g),m.h);if(v.g.length>30){if(O(v)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var T=y,b=m;b.l(v)<=0;)T=st(T),b=st(b);var A=gt(T,1),S=gt(b,1);for(b=gt(b,2),T=gt(T,2);!k(b);){var E=S.add(b);E.l(v)<=0&&(A=A.add(T),S=E),b=gt(b,1),T=gt(T,1)}return m=W(v,A.j(m)),new q(A,m)}for(A=p;v.l(m)>=0;){for(T=Math.max(1,Math.floor(v.m()/m.m())),b=Math.ceil(Math.log(T)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),S=h(T),E=S.j(m);O(E)||E.l(v)>0;)T-=b,S=h(T),E=S.j(m);k(S)&&(S=y),A=A.add(S),v=W(v,E)}return new q(A,v)}e.B=function(v){return Q(this,v).h},e.and=function(v){const m=Math.max(this.g.length,v.g.length),T=[];for(let b=0;b<m;b++)T[b]=this.i(b)&v.i(b);return new a(T,this.h&v.h)},e.or=function(v){const m=Math.max(this.g.length,v.g.length),T=[];for(let b=0;b<m;b++)T[b]=this.i(b)|v.i(b);return new a(T,this.h|v.h)},e.xor=function(v){const m=Math.max(this.g.length,v.g.length),T=[];for(let b=0;b<m;b++)T[b]=this.i(b)^v.i(b);return new a(T,this.h^v.h)};function st(v){const m=v.g.length+1,T=[];for(let b=0;b<m;b++)T[b]=v.i(b)<<1|v.i(b-1)>>>31;return new a(T,v.h)}function gt(v,m){const T=m>>5;m%=32;const b=v.g.length-T,A=[];for(let S=0;S<b;S++)A[S]=m>0?v.i(S+T)>>>m|v.i(S+T+1)<<32-m:v.i(S+T);return new a(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,wl=a}).apply(typeof Qu<"u"?Qu:typeof self<"u"?self:typeof window<"u"?window:{});var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sd,gs,Rd,Ri,La,Cd,Pd,Dd;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof yi=="object"&&yi];for(var c=0;c<o.length;++c){var f=o[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,c){if(c)t:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break t;f=f[C]}o=o[o.length-1],g=f[o],c=c(g),c!=g&&c!=null&&t(f,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var f=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&f.push([g,c[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,f){return o.call.apply(o.bind,arguments)}function h(o,c,f){return h=u,h.apply(null,arguments)}function d(o,c){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,c){function f(){}f.prototype=c.prototype,o.Z=c.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,C,P){for(var H=Array(arguments.length-2),at=2;at<arguments.length;at++)H[at-2]=arguments[at];return c.prototype[C].apply(g,H)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function I(o){const c=o.length;if(c>0){const f=Array(c);for(let g=0;g<c;g++)f[g]=o[g];return f}return[]}function k(o,c){for(let g=1;g<arguments.length;g++){const C=arguments[g];var f=typeof C;if(f=f!="object"?f:C?Array.isArray(C)?"array":f:"null",f=="array"||f=="object"&&typeof C.length=="number"){f=o.length||0;const P=C.length||0;o.length=f+P;for(let H=0;H<P;H++)o[f+H]=C[H]}else o.push(C)}}class O{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function $(o){a.setTimeout(()=>{throw o},0)}function W(){var o=v;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class j{constructor(){this.h=this.g=null}add(c,f){const g=q.get();g.set(c,f),this.h?this.h.next=g:this.g=g,this.h=g}}var q=new O(()=>new Q,o=>o.reset());class Q{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let st,gt=!1,v=new j,m=()=>{const o=Promise.resolve(void 0);st=()=>{o.then(T)}};function T(){for(var o;o=W();){try{o.h.call(o.g)}catch(f){$(f)}var c=q;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}gt=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,c),a.removeEventListener("test",f,c)}catch{}return o}();function E(o){return/^[\s\xa0]*$/.test(o)}function Ft(o,c){A.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(Ft,A),Ft.prototype.init=function(o,c){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(f=="mouseover"?c=o.fromElement:f=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ft.Z.h.call(this)},Ft.prototype.h=function(){Ft.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ee="closure_listenable_"+(Math.random()*1e6|0),Ut=0;function mt(o,c,f,g,C){this.listener=o,this.proxy=null,this.src=c,this.type=f,this.capture=!!g,this.ha=C,this.key=++Ut,this.da=this.fa=!1}function ht(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function we(o,c,f){for(const g in o)c.call(f,o[g],g,o)}function Ge(o,c){for(const f in o)c.call(void 0,o[f],f,o)}function be(o){const c={};for(const f in o)c[f]=o[f];return c}const Jt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hn(o,c){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let P=0;P<Jt.length;P++)f=Jt[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function ke(o){this.src=o,this.g={},this.h=0}ke.prototype.add=function(o,c,f,g,C){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const H=se(o,c,g,C);return H>-1?(c=o[H],f||(c.fa=!1)):(c=new mt(c,this.src,P,!!g,C),c.fa=f,o.push(c)),c};function xe(o,c){const f=c.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,c,void 0),P;(P=C>=0)&&Array.prototype.splice.call(g,C,1),P&&(ht(c),o.g[f].length==0&&(delete o.g[f],o.h--))}}function se(o,c,f,g){for(let C=0;C<o.length;++C){const P=o[C];if(!P.da&&P.listener==c&&P.capture==!!f&&P.ha==g)return C}return-1}var N="closure_lm_"+(Math.random()*1e6|0),J={};function G(o,c,f,g,C){if(Array.isArray(c)){for(let P=0;P<c.length;P++)G(o,c[P],f,g,C);return null}return f=z(f),o&&o[Ee]?o.J(c,f,l(g)?!!g.capture:!1,C):X(o,c,f,!1,g,C)}function X(o,c,f,g,C,P){if(!c)throw Error("Invalid event type");const H=l(C)?!!C.capture:!!C;let at=x(o);if(at||(o[N]=at=new ke(o)),f=at.add(c,f,g,H,P),f.proxy)return f;if(g=ut(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)S||(C=H),C===void 0&&(C=!1),o.addEventListener(c.toString(),g,C);else if(o.attachEvent)o.attachEvent(R(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function ut(){function o(f){return c.call(o.src,o.listener,f)}const c=D;return o}function _(o,c,f,g,C){if(Array.isArray(c))for(var P=0;P<c.length;P++)_(o,c[P],f,g,C);else g=l(g)?!!g.capture:!!g,f=z(f),o&&o[Ee]?(o=o.i,P=String(c).toString(),P in o.g&&(c=o.g[P],f=se(c,f,g,C),f>-1&&(ht(c[f]),Array.prototype.splice.call(c,f,1),c.length==0&&(delete o.g[P],o.h--)))):o&&(o=x(o))&&(c=o.g[c.toString()],o=-1,c&&(o=se(c,f,g,C)),(f=o>-1?c[o]:null)&&w(f))}function w(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ee])xe(c.i,o);else{var f=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(f,g,o.capture):c.detachEvent?c.detachEvent(R(f),g):c.addListener&&c.removeListener&&c.removeListener(g),(f=x(c))?(xe(f,o),f.h==0&&(f.src=null,c[N]=null)):ht(o)}}}function R(o){return o in J?J[o]:J[o]="on"+o}function D(o,c){if(o.da)o=!0;else{c=new Ft(c,this);const f=o.listener,g=o.ha||o.src;o.fa&&w(o),o=f.call(g,c)}return o}function x(o){return o=o[N],o instanceof ke?o:null}var V="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(o){return typeof o=="function"?o:(o[V]||(o[V]=function(c){return o.handleEvent(c)}),o[V])}function B(){b.call(this),this.i=new ke(this),this.M=this,this.G=null}p(B,b),B.prototype[Ee]=!0,B.prototype.removeEventListener=function(o,c,f,g){_(this,o,c,f,g)};function F(o,c){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new A(c,o);else if(c instanceof A)c.target=c.target||o;else{var C=c;c=new A(g,o),hn(c,C)}C=!0;let P,H;if(f)for(H=f.length-1;H>=0;H--)P=c.g=f[H],C=L(P,g,!0,c)&&C;if(P=c.g=o,C=L(P,g,!0,c)&&C,C=L(P,g,!1,c)&&C,f)for(H=0;H<f.length;H++)P=c.g=f[H],C=L(P,g,!1,c)&&C}B.prototype.N=function(){if(B.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const f=o.g[c];for(let g=0;g<f.length;g++)ht(f[g]);delete o.g[c],o.h--}}this.G=null},B.prototype.J=function(o,c,f,g){return this.i.add(String(o),c,!1,f,g)},B.prototype.K=function(o,c,f,g){return this.i.add(String(o),c,!0,f,g)};function L(o,c,f,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let C=!0;for(let P=0;P<c.length;++P){const H=c[P];if(H&&!H.da&&H.capture==f){const at=H.listener,qt=H.ha||H.src;H.fa&&xe(o.i,H),C=at.call(qt,g)!==!1&&C}}return C&&!g.defaultPrevented}function tt(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function K(o){o.g=tt(()=>{o.g=null,o.i&&(o.i=!1,K(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Z extends b{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:K(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(o){b.call(this),this.h=o,this.g={}}p(et,b);var ft=[];function _t(o){we(o.g,function(c,f){this.g.hasOwnProperty(f)&&w(c)},o),o.g={}}et.prototype.N=function(){et.Z.N.call(this),_t(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yt=a.JSON.stringify,Vt=a.JSON.parse,Ht=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Se(){}function Re(){}var Me={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Er(){A.call(this,"d")}p(Er,A);function Yt(){A.call(this,"c")}p(Yt,A);var Gt={},Kr=null;function Kn(){return Kr=Kr||new B}Gt.Ia="serverreachability";function rc(o){A.call(this,Gt.Ia,o)}p(rc,A);function Wr(o){const c=Kn();F(c,new rc(c))}Gt.STAT_EVENT="statevent";function sc(o,c){A.call(this,Gt.STAT_EVENT,o),this.stat=c}p(sc,A);function pe(o){const c=Kn();F(c,new sc(c,o))}Gt.Ja="timingevent";function ic(o,c){A.call(this,Gt.Ja,o),this.size=c}p(ic,A);function Qr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Jr(){this.g=!0}Jr.prototype.ua=function(){this.g=!1};function ag(o,c,f,g,C,P){o.info(function(){if(o.g)if(P){var H="",at=P.split("&");for(let At=0;At<at.length;At++){var qt=at[At].split("=");if(qt.length>1){const Kt=qt[0];qt=qt[1];const We=Kt.split("_");H=We.length>=2&&We[1]=="type"?H+(Kt+"="+qt+"&"):H+(Kt+"=redacted&")}}}else H=null;else H=P;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+c+`
`+f+`
`+H})}function lg(o,c,f,g,C,P,H){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+c+`
`+f+`
`+P+" "+H})}function wr(o,c,f,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+ug(o,f)+(g?" "+g:"")})}function cg(o,c){o.info(function(){return"TIMEOUT: "+c})}Jr.prototype.info=function(){};function ug(o,c){if(!o.g)return c;if(!c)return null;try{const P=JSON.parse(c);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var f=P[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let H=1;H<g.length;H++)g[H]=""}}}}return yt(P)}catch{return c}}var ii={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},oc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ac;function Co(){}p(Co,Se),Co.prototype.g=function(){return new XMLHttpRequest},ac=new Co;function Yr(o){return encodeURIComponent(String(o))}function hg(o){var c=1;o=o.split(":");const f=[];for(;c>0&&o.length;)f.push(o.shift()),c--;return o.length&&f.push(o.join(":")),f}function Rn(o,c,f,g){this.j=o,this.i=c,this.l=f,this.S=g||1,this.V=new et(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new lc}function lc(){this.i=null,this.g="",this.h=!1}var cc={},Po={};function Do(o,c,f){o.M=1,o.A=ai(Ke(c)),o.u=f,o.R=!0,uc(o,null)}function uc(o,c){o.F=Date.now(),oi(o),o.B=Ke(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Ic(f.i,"t",g),o.C=0,f=o.j.L,o.h=new lc,o.g=jc(o.j,f?c:null,!o.u),o.P>0&&(o.O=new Z(h(o.Y,o,o.g),o.P)),c=o.V,f=o.g,g=o.ba;var C="readystatechange";Array.isArray(C)||(C&&(ft[0]=C.toString()),C=ft);for(let P=0;P<C.length;P++){const H=G(f,C[P],g||c.handleEvent,!1,c.h||c);if(!H)break;c.g[H.key]=H}c=o.J?be(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Wr(),ag(o.i,o.v,o.B,o.l,o.S,o.u)}Rn.prototype.ba=function(o){o=o.target;const c=this.O;c&&Dn(o)==3?c.j():this.Y(o)},Rn.prototype.Y=function(o){try{if(o==this.g)t:{const at=Dn(this.g),qt=this.g.ya(),At=this.g.ca();if(!(at<3)&&(at!=3||this.g&&(this.h.h||this.g.la()||Dc(this.g)))){this.K||at!=4||qt==7||(qt==8||At<=0?Wr(3):Wr(2)),Vo(this);var c=this.g.ca();this.X=c;var f=fg(this);if(this.o=c==200,lg(this.i,this.v,this.B,this.l,this.S,at,c),this.o){if(this.U&&!this.L){e:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var P=g;break e}}P=null}if(o=P)wr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,No(this,o);else{this.o=!1,this.m=3,pe(12),Wn(this),Xr(this);break t}}if(this.R){o=!0;let Kt;for(;!this.K&&this.C<f.length;)if(Kt=dg(this,f),Kt==Po){at==4&&(this.m=4,pe(14),o=!1),wr(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==cc){this.m=4,pe(15),wr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else wr(this.i,this.l,Kt,null),No(this,Kt);if(hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||f.length!=0||this.h.h||(this.m=1,pe(16),o=!1),this.o=this.o&&o,!o)wr(this.i,this.l,f,"[Invalid Chunked Response]"),Wn(this),Xr(this);else if(f.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Bo(H),H.P=!0,pe(11))}}else wr(this.i,this.l,f,null),No(this,f);at==4&&Wn(this),this.o&&!this.K&&(at==4?Lc(this.j,this):(this.o=!1,oi(this)))}else Rg(this.g),c==400&&f.indexOf("Unknown SID")>0?(this.m=3,pe(12)):(this.m=0,pe(13)),Wn(this),Xr(this)}}}catch{}finally{}};function fg(o){if(!hc(o))return o.g.la();const c=Dc(o.g);if(c==="")return"";let f="";const g=c.length,C=Dn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Wn(o),Xr(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<g;P++)o.h.h=!0,f+=o.h.i.decode(c[P],{stream:!(C&&P==g-1)});return c.length=0,o.h.g+=f,o.C=0,o.h.g}function hc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function dg(o,c){var f=o.C,g=c.indexOf(`
`,f);return g==-1?Po:(f=Number(c.substring(f,g)),isNaN(f)?cc:(g+=1,g+f>c.length?Po:(c=c.slice(g,g+f),o.C=g+f,c)))}Rn.prototype.cancel=function(){this.K=!0,Wn(this)};function oi(o){o.T=Date.now()+o.H,fc(o,o.H)}function fc(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Qr(h(o.aa,o),c)}function Vo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Rn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(cg(this.i,this.B),this.M!=2&&(Wr(),pe(17)),Wn(this),this.m=2,Xr(this)):fc(this,this.T-o)};function Xr(o){o.j.I==0||o.K||Lc(o.j,o)}function Wn(o){Vo(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,_t(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function No(o,c){try{var f=o.j;if(f.I!=0&&(f.g==o||Oo(f.h,o))){if(!o.L&&Oo(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)fi(f),ui(f);else break t;Uo(f),pe(18)}}else f.xa=C[1],0<f.xa-f.K&&C[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Qr(h(f.Va,f),6e3));gc(f.h)<=1&&f.ta&&(f.ta=void 0)}else Jn(f,11)}else if((o.L||f.g==o)&&fi(f),!E(c))for(C=f.Ba.g.parse(c),c=0;c<C.length;c++){let At=C[c];const Kt=At[0];if(!(Kt<=f.K))if(f.K=Kt,At=At[1],f.I==2)if(At[0]=="c"){f.M=At[1],f.ba=At[2];const We=At[3];We!=null&&(f.ka=We,f.j.info("VER="+f.ka));const Yn=At[4];Yn!=null&&(f.za=Yn,f.j.info("SVER="+f.za));const Vn=At[5];Vn!=null&&typeof Vn=="number"&&Vn>0&&(g=1.5*Vn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Nn=o.g;if(Nn){const pi=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pi){var P=g.h;P.g||pi.indexOf("spdy")==-1&&pi.indexOf("quic")==-1&&pi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ko(P,P.h),P.h=null))}if(g.G){const jo=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;jo&&(g.wa=jo,Ct(g.J,g.G,jo))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var H=o;if(g.na=Bc(g,g.L?g.ba:null,g.W),H.L){mc(g.h,H);var at=H,qt=g.O;qt&&(at.H=qt),at.D&&(Vo(at),oi(at)),g.g=H}else xc(g);f.i.length>0&&hi(f)}else At[0]!="stop"&&At[0]!="close"||Jn(f,7);else f.I==3&&(At[0]=="stop"||At[0]=="close"?At[0]=="stop"?Jn(f,7):Fo(f):At[0]!="noop"&&f.l&&f.l.qa(At),f.A=0)}}Wr(4)}catch{}}var pg=class{constructor(o,c){this.g=o,this.map=c}};function dc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function gc(o){return o.h?1:o.g?o.g.size:0}function Oo(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ko(o,c){o.g?o.g.add(c):o.h=c}function mc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}dc.prototype.cancel=function(){if(this.i=_c(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function _c(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const f of o.g.values())c=c.concat(f.G);return c}return I(o.i)}var yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gg(o,c){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let C,P=null;g>=0?(C=o[f].substring(0,g),P=o[f].substring(g+1)):C=o[f],c(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Cn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof Cn?(this.l=o.l,Zr(this,o.j),this.o=o.o,this.g=o.g,ts(this,o.u),this.h=o.h,xo(this,Ac(o.i)),this.m=o.m):o&&(c=String(o).match(yc))?(this.l=!1,Zr(this,c[1]||"",!0),this.o=es(c[2]||""),this.g=es(c[3]||"",!0),ts(this,c[4]),this.h=es(c[5]||"",!0),xo(this,c[6]||"",!0),this.m=es(c[7]||"")):(this.l=!1,this.i=new rs(null,this.l))}Cn.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(ns(c,vc,!0),":");var f=this.g;return(f||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ns(c,vc,!0),"@"),o.push(Yr(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ns(f,f.charAt(0)=="/"?yg:_g,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ns(f,Eg)),o.join("")},Cn.prototype.resolve=function(o){const c=Ke(this);let f=!!o.j;f?Zr(c,o.j):f=!!o.o,f?c.o=o.o:f=!!o.g,f?c.g=o.g:f=o.u!=null;var g=o.h;if(f)ts(c,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=c.h.lastIndexOf("/");C!=-1&&(g=c.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const P=[];for(let H=0;H<C.length;){const at=C[H++];at=="."?g&&H==C.length&&P.push(""):at==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&H==C.length&&P.push("")):(P.push(at),g=!0)}g=P.join("/")}else g=C}return f?c.h=g:f=o.i.toString()!=="",f?xo(c,Ac(o.i)):f=!!o.m,f&&(c.m=o.m),c};function Ke(o){return new Cn(o)}function Zr(o,c,f){o.j=f?es(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ts(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function xo(o,c,f){c instanceof rs?(o.i=c,wg(o.i,o.l)):(f||(c=ns(c,vg)),o.i=new rs(c,o.l))}function Ct(o,c,f){o.i.set(c,f)}function ai(o){return Ct(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function es(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ns(o,c,f){return typeof o=="string"?(o=encodeURI(o).replace(c,mg),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function mg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var vc=/[#\/\?@]/g,_g=/[#\?:]/g,yg=/[#\?]/g,vg=/[#\?@]/g,Eg=/#/g;function rs(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Qn(o){o.g||(o.g=new Map,o.h=0,o.i&&gg(o.i,function(c,f){o.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}e=rs.prototype,e.add=function(o,c){Qn(this),this.i=null,o=Tr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(c),this.h+=1,this};function Ec(o,c){Qn(o),c=Tr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function wc(o,c){return Qn(o),c=Tr(o,c),o.g.has(c)}e.forEach=function(o,c){Qn(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(c,C,g,this)},this)},this)};function Tc(o,c){Qn(o);let f=[];if(typeof c=="string")wc(o,c)&&(f=f.concat(o.g.get(Tr(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)f=f.concat(o[c]);return f}e.set=function(o,c){return Qn(this),this.i=null,o=Tr(this,o),wc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=Tc(this,o),o.length>0?String(o[0]):c):c};function Ic(o,c,f){Ec(o,c),f.length>0&&(o.i=null,o.g.set(Tr(o,c),I(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var f=c[g];const C=Yr(f);f=Tc(this,f);for(let P=0;P<f.length;P++){let H=C;f[P]!==""&&(H+="="+Yr(f[P])),o.push(H)}}return this.i=o.join("&")};function Ac(o){const c=new rs;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function Tr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function wg(o,c){c&&!o.j&&(Qn(o),o.i=null,o.g.forEach(function(f,g){const C=g.toLowerCase();g!=C&&(Ec(this,g),Ic(this,C,f))},o)),o.j=c}function Tg(o,c){const f=new Jr;if(a.Image){const g=new Image;g.onload=d(Pn,f,"TestLoadImage: loaded",!0,c,g),g.onerror=d(Pn,f,"TestLoadImage: error",!1,c,g),g.onabort=d(Pn,f,"TestLoadImage: abort",!1,c,g),g.ontimeout=d(Pn,f,"TestLoadImage: timeout",!1,c,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function Ig(o,c){const f=new Jr,g=new AbortController,C=setTimeout(()=>{g.abort(),Pn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(C),P.ok?Pn(f,"TestPingServer: ok",!0,c):Pn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Pn(f,"TestPingServer: error",!1,c)})}function Pn(o,c,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Ag(){this.g=new Ht}function Mo(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Mo,Se),Mo.prototype.g=function(){return new li(this.i,this.h)};function li(o,c){B.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(li,B),e=li.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,is(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,is(this)),this.g&&(this.readyState=3,is(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function bc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ss(this):is(this),this.readyState==3&&bc(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,ss(this))},e.Na=function(o){this.g&&(this.response=o,ss(this))},e.ga=function(){this.g&&ss(this)};function ss(o){o.readyState=4,o.l=null,o.j=null,o.B=null,is(o)}e.setRequestHeader=function(o,c){this.A.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=c.next();return o.join(`\r
`)};function is(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Sc(o){let c="";return we(o,function(f,g){c+=g,c+=":",c+=f,c+=`\r
`}),c}function Lo(o,c,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=Sc(f),typeof o=="string"?f!=null&&Yr(f):Ct(o,c,f))}function Nt(o){B.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Nt,B);var bg=/^https?$/i,Sg=["POST","PUT"];e=Nt.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,c,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ac.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){Rc(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),C=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Sg,c,void 0)>=0)||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,H]of f)this.g.setRequestHeader(P,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Rc(this,P)}};function Rc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Cc(o),ci(o)}function Cc(o){o.A||(o.A=!0,F(o,"complete"),F(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,F(this,"complete"),F(this,"abort"),ci(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ci(this,!0)),Nt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Pc(this):this.Xa())},e.Xa=function(){Pc(this)};function Pc(o){if(o.h&&typeof i<"u"){if(o.v&&Dn(o)==4)setTimeout(o.Ca.bind(o),0);else if(F(o,"readystatechange"),Dn(o)==4){o.h=!1;try{const P=o.ca();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var f;if(!(f=c)){var g;if(g=P===0){let H=String(o.D).match(yc)[1]||null;!H&&a.self&&a.self.location&&(H=a.self.location.protocol.slice(0,-1)),g=!bg.test(H?H.toLowerCase():"")}f=g}if(f)F(o,"complete"),F(o,"success");else{o.o=6;try{var C=Dn(o)>2?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.ca()+"]",Cc(o)}}finally{ci(o)}}}}function ci(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,c||F(o,"ready");try{f.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function Dn(o){return o.g?o.g.readyState:0}e.ca=function(){try{return Dn(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Vt(c)}};function Dc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Rg(o){const c={};o=(o.g&&Dn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(E(o[g]))continue;var f=hg(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=c[C]||[];c[C]=P,P.push(f)}Ge(c,function(g){return g.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function os(o,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||c}function Vc(o){this.za=0,this.i=[],this.j=new Jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=os("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=os("baseRetryDelayMs",5e3,o),this.Za=os("retryDelaySeedMs",1e4,o),this.Ta=os("forwardChannelMaxRetries",2,o),this.va=os("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new dc(o&&o.concurrentRequestLimit),this.Ba=new Ag,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=Vc.prototype,e.ka=8,e.I=1,e.connect=function(o,c,f,g){pe(0),this.W=o,this.H=c||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Bc(this,null,this.W),hi(this)};function Fo(o){if(Nc(o),o.I==3){var c=o.V++,f=Ke(o.J);if(Ct(f,"SID",o.M),Ct(f,"RID",c),Ct(f,"TYPE","terminate"),as(o,f),c=new Rn(o,o.j,c),c.M=2,c.A=ai(Ke(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=c.A,f=!0),f||(c.g=jc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),oi(c)}Uc(o)}function ui(o){o.g&&(Bo(o),o.g.cancel(),o.g=null)}function Nc(o){ui(o),o.v&&(a.clearTimeout(o.v),o.v=null),fi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function hi(o){if(!pc(o.h)&&!o.m){o.m=!0;var c=o.Ea;st||m(),gt||(st(),gt=!0),v.add(c,o),o.D=0}}function Cg(o,c){return gc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Qr(h(o.Ea,o,c),Fc(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const C=new Rn(this,this.j,o);let P=this.o;if(this.U&&(P?(P=be(P),hn(P,this.U)):P=this.U),this.u!==null||this.R||(C.J=P,P=null),this.S)t:{for(var c=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=f;break t}if(c===4096||f===this.i.length-1){c=f+1;break t}}c=1e3}else c=1e3;c=kc(this,C,c),f=Ke(this.J),Ct(f,"RID",o),Ct(f,"CVER",22),this.G&&Ct(f,"X-HTTP-Session-Id",this.G),as(this,f),P&&(this.R?c="headers="+Yr(Sc(P))+"&"+c:this.u&&Lo(f,this.u,P)),ko(this.h,C),this.Ra&&Ct(f,"TYPE","init"),this.S?(Ct(f,"$req",c),Ct(f,"SID","null"),C.U=!0,Do(C,f,null)):Do(C,f,c),this.I=2}}else this.I==3&&(o?Oc(this,o):this.i.length==0||pc(this.h)||Oc(this))};function Oc(o,c){var f;c?f=c.l:f=o.V++;const g=Ke(o.J);Ct(g,"SID",o.M),Ct(g,"RID",f),Ct(g,"AID",o.K),as(o,g),o.u&&o.o&&Lo(g,o.u,o.o),f=new Rn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),c&&(o.i=c.G.concat(o.i)),c=kc(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),ko(o.h,f),Do(f,g,c)}function as(o,c){o.H&&we(o.H,function(f,g){Ct(c,g,f)}),o.l&&we({},function(f,g){Ct(c,g,f)})}function kc(o,c,f){f=Math.min(o.i.length,f);const g=o.l?h(o.l.Ka,o.l,o):null;t:{var C=o.i;let at=-1;for(;;){const qt=["count="+f];at==-1?f>0?(at=C[0].g,qt.push("ofs="+at)):at=0:qt.push("ofs="+at);let At=!0;for(let Kt=0;Kt<f;Kt++){var P=C[Kt].g;const We=C[Kt].map;if(P-=at,P<0)at=Math.max(0,C[Kt].g-100),At=!1;else try{P="req"+P+"_"||"";try{var H=We instanceof Map?We:Object.entries(We);for(const[Yn,Vn]of H){let Nn=Vn;l(Vn)&&(Nn=yt(Vn)),qt.push(P+Yn+"="+encodeURIComponent(Nn))}}catch(Yn){throw qt.push(P+"type="+encodeURIComponent("_badmap")),Yn}}catch{g&&g(We)}}if(At){H=qt.join("&");break t}}H=void 0}return o=o.i.splice(0,f),c.G=o,H}function xc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;st||m(),gt||(st(),gt=!0),v.add(c,o),o.A=0}}function Uo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Qr(h(o.Da,o),Fc(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,Mc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Qr(h(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pe(10),ui(this),Mc(this))};function Bo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Mc(o){o.g=new Rn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=Ke(o.na);Ct(c,"RID","rpc"),Ct(c,"SID",o.M),Ct(c,"AID",o.K),Ct(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ct(c,"TO",o.ia),Ct(c,"TYPE","xmlhttp"),as(o,c),o.u&&o.o&&Lo(c,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=ai(Ke(c)),f.u=null,f.R=!0,uc(f,o)}e.Va=function(){this.C!=null&&(this.C=null,ui(this),Uo(this),pe(19))};function fi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Lc(o,c){var f=null;if(o.g==c){fi(o),Bo(o),o.g=null;var g=2}else if(Oo(o.h,c))f=c.G,mc(o.h,c),g=1;else return;if(o.I!=0){if(c.o)if(g==1){f=c.u?c.u.length:0,c=Date.now()-c.F;var C=o.D;g=Kn(),F(g,new ic(g,f)),hi(o)}else xc(o);else if(C=c.m,C==3||C==0&&c.X>0||!(g==1&&Cg(o,c)||g==2&&Uo(o)))switch(f&&f.length>0&&(c=o.h,c.i=c.i.concat(f)),C){case 1:Jn(o,5);break;case 4:Jn(o,10);break;case 3:Jn(o,6);break;default:Jn(o,2)}}}function Fc(o,c){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*c}function Jn(o,c){if(o.j.info("Error code "+c),c==2){var f=h(o.bb,o),g=o.Ua;const C=!g;g=new Cn(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Zr(g,"https"),ai(g),C?Tg(g.toString(),f):Ig(g.toString(),f)}else pe(2);o.I=0,o.l&&o.l.pa(c),Uc(o),Nc(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),pe(2)):(this.j.info("Failed to ping google.com"),pe(1))};function Uc(o){if(o.I=0,o.ja=[],o.l){const c=_c(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ja,c),k(o.ja,o.i),o.h.i.length=0,I(o.i),o.i.length=0),o.l.oa()}}function Bc(o,c,f){var g=f instanceof Cn?Ke(f):new Cn(f);if(g.g!="")c&&(g.g=c+"."+g.g),ts(g,g.u);else{var C=a.location;g=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;const P=new Cn(null);g&&Zr(P,g),c&&(P.g=c),C&&ts(P,C),f&&(P.h=f),g=P}return f=o.G,c=o.wa,f&&c&&Ct(g,f,c),Ct(g,"VER",o.ka),as(o,g),g}function jc(o,c,f){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new Nt(new Mo({ab:f})):new Nt(o.ma),c.Fa(o.L),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function $c(){}e=$c.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function di(){}di.prototype.g=function(o,c){return new Ce(o,c)};function Ce(o,c){B.call(this),this.g=new Vc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!E(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Ir(this)}p(Ce,B),Ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){Fo(this.g)},Ce.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=yt(o),o=f);c.i.push(new pg(c.Ya++,o)),c.I==3&&hi(c)},Ce.prototype.N=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,Ce.Z.N.call(this)};function Hc(o){Er.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const f in c){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(Hc,Er);function qc(){Yt.call(this),this.status=1}p(qc,Yt);function Ir(o){this.g=o}p(Ir,$c),Ir.prototype.ra=function(){F(this.g,"a")},Ir.prototype.qa=function(o){F(this.g,new Hc(o))},Ir.prototype.pa=function(o){F(this.g,new qc)},Ir.prototype.oa=function(){F(this.g,"b")},di.prototype.createWebChannel=di.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,Dd=function(){return new di},Pd=function(){return Kn()},Cd=Gt,La={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ii.NO_ERROR=0,ii.TIMEOUT=8,ii.HTTP_ERROR=6,Ri=ii,oc.COMPLETE="complete",Rd=oc,Re.EventType=Me,Me.OPEN="a",Me.CLOSE="b",Me.ERROR="c",Me.MESSAGE="d",B.prototype.listen=B.prototype.J,gs=Re,Nt.prototype.listenOnce=Nt.prototype.K,Nt.prototype.getLastError=Nt.prototype.Ha,Nt.prototype.getLastErrorCode=Nt.prototype.ya,Nt.prototype.getStatus=Nt.prototype.ca,Nt.prototype.getResponseJson=Nt.prototype.La,Nt.prototype.getResponseText=Nt.prototype.la,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Fa,Sd=Nt}).apply(typeof yi<"u"?yi:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ae{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ae.UNAUTHENTICATED=new ae(null),ae.GOOGLE_CREDENTIALS=new ae("google-credentials-uid"),ae.FIRST_PARTY=new ae("first-party-uid"),ae.MOCK_USER=new ae("mock-user");/**
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
 */let zr="12.12.0";function jE(e){zr=e}/**
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
 */const cr=new vd("@firebase/firestore");function Rr(){return cr.logLevel}function Y(e,...t){if(cr.logLevel<=pt.DEBUG){const n=t.map(Tl);cr.debug(`Firestore (${zr}): ${e}`,...n)}}function ur(e,...t){if(cr.logLevel<=pt.ERROR){const n=t.map(Tl);cr.error(`Firestore (${zr}): ${e}`,...n)}}function Us(e,...t){if(cr.logLevel<=pt.WARN){const n=t.map(Tl);cr.warn(`Firestore (${zr}): ${e}`,...n)}}function Tl(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function ct(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,Vd(e,r,n)}function Vd(e,t,n){let r=`FIRESTORE (${zr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ur(r),new Error(r)}function xt(e,t,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,e||Vd(t,s,r)}function Rt(e,t){return e}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nt extends _r{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class or{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Nd{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ae.UNAUTHENTICATED))}shutdown(){}}class HE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qE{constructor(t){this.t=t,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){xt(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new or;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new or,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new or)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xt(typeof r.accessToken=="string",31837,{l:r}),new Nd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return xt(t===null||typeof t=="string",2055,{h:t}),new ae(t)}}class zE{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=ae.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class GE{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new zE(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ju{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KE{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bE(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){xt(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ju(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(xt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ju(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function WE(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Il{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=WE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%62))}return r}}function Tt(e,t){return e<t?-1:e>t?1:0}function Fa(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=e.charAt(r),i=t.charAt(r);if(s!==i)return aa(s)===aa(i)?Tt(s,i):aa(s)?1:-1}return Tt(e.length,t.length)}const QE=55296,JE=57343;function aa(e){const t=e.charCodeAt(0);return t>=QE&&t<=JE}function Br(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */const Yu="__name__";class Xe{constructor(t,n,r){n===void 0?n=0:n>t.length&&ct(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&ct(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Xe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Xe?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=Xe.compareSegments(t.get(s),n.get(s));if(i!==0)return i}return Tt(t.length,n.length)}static compareSegments(t,n){const r=Xe.isNumericId(t),s=Xe.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Xe.extractNumericId(t).compare(Xe.extractNumericId(n)):Fa(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return wl.fromString(t.substring(4,t.length-2))}}class Mt extends Xe{construct(t,n,r){return new Mt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new nt(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Mt(n)}static emptyPath(){return new Mt([])}}const YE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends Xe{construct(t,n,r){return new ee(t,n,r)}static isValidIdentifier(t){return YE.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yu}static keyField(){return new ee([Yu])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new nt(U.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new nt(U.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new nt(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new nt(U.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ee(n)}static emptyPath(){return new ee([])}}/**
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
 */class lt{constructor(t){this.path=t}static fromPath(t){return new lt(Mt.fromString(t))}static fromName(t){return new lt(Mt.fromString(t).popFirst(5))}static empty(){return new lt(Mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Mt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Mt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new lt(new Mt(t.slice()))}}/**
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
 */function XE(e,t,n){if(!n)throw new nt(U.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ZE(e,t,n,r){if(t===!0&&r===!0)throw new nt(U.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Xu(e){if(!lt.isDocumentKey(e))throw new nt(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Od(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function Al(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ct(12329,{type:typeof e})}function qi(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new nt(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Al(e);throw new nt(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */function $t(e,t){const n={typeString:e};return t&&(n.value=t),n}function Zs(e,t){if(!Od(e))throw new nt(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new nt(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const Zu=-62135596800,th=1e6;class Dt{static now(){return Dt.fromMillis(Date.now())}static fromDate(t){return Dt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*th);return new Dt(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new nt(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new nt(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Zu)throw new nt(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new nt(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/th}_compareTo(t){return this.seconds===t.seconds?Tt(this.nanoseconds,t.nanoseconds):Tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Zs(t,Dt._jsonSchema))return new Dt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Zu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Dt._jsonSchemaVersion="firestore/timestamp/1.0",Dt._jsonSchema={type:$t("string",Dt._jsonSchemaVersion),seconds:$t("number"),nanoseconds:$t("number")};/**
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
 */class Pt{static fromTimestamp(t){return new Pt(t)}static min(){return new Pt(new Dt(0,0))}static max(){return new Pt(new Dt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Bs=-1;function tw(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=Pt.fromTimestamp(r===1e9?new Dt(n+1,0):new Dt(n,r));return new Hn(s,lt.empty(),t)}function ew(e){return new Hn(e.readTime,e.key,Bs)}class Hn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(Pt.min(),lt.empty(),Bs)}static max(){return new Hn(Pt.max(),lt.empty(),Bs)}}function nw(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=lt.comparator(e.documentKey,t.documentKey),n!==0?n:Tt(e.largestBatchId,t.largestBatchId))}/**
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
 */const rw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function bl(e){if(e.code!==U.FAILED_PRECONDITION||e.message!==rw)throw e;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ct(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):M.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):M.reject(n)}static resolve(t){return new M((n,r)=>{n(t)})}static reject(t){return new M((n,r)=>{r(t)})}static waitFor(t){return new M((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},u=>r(u))}),a=!0,i===s&&n()})}static or(t){let n=M.resolve(!1);for(const r of t)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new M((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(t[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new M((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function iw(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ti(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Sl{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Sl.ce=-1;/**
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
 */const Rl=-1;function Cl(e){return e==null}function zi(e){return e===0&&1/e==-1/0}function ow(e){return typeof e=="number"&&Number.isInteger(e)&&!zi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const kd="";function aw(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=eh(t)),t=lw(e.get(n),t);return eh(t)}function lw(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case kd:n+="";break;default:n+=i}}return n}function eh(e){return e+kd+""}/**
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
 */function nh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Gr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function xd(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Ae{constructor(t,n){this.comparator=t,this.root=n||Zt.EMPTY}insert(t,n){return new Ae(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(t){return new Ae(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new vi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new vi(this.root,t,this.comparator,!1)}getReverseIterator(){return new vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new vi(this.root,t,this.comparator,!0)}}class vi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Zt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Zt.RED,this.left=s??Zt.EMPTY,this.right=i??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Zt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Zt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ct(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ct(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw ct(27949);return t+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw ct(57766)}get value(){throw ct(16141)}get color(){throw ct(16727)}get left(){throw ct(29726)}get right(){throw ct(36894)}copy(t,n,r,s,i){return this}insert(t,n,r){return new Zt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ne{constructor(t){this.comparator=t,this.data=new Ae(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new rh(this.data.getIterator())}getIteratorFrom(t){return new rh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ne)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ne(this.comparator);return n.data=t,n}}class rh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $e{constructor(t){this.fields=t,t.sort(ee.comparator)}static empty(){return new $e([])}unionWith(t){let n=new ne(ee.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new $e(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Br(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class cw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class cn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new cw("Invalid base64 string: "+i):i}}(t);return new cn(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new cn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}cn.EMPTY_BYTE_STRING=new cn("");const uw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(e){if(xt(!!e,39018),typeof e=="string"){let t=0;const n=uw.exec(e);if(xt(!!n,46558,{timestamp:e}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:te(e.seconds),nanos:te(e.nanos)}}function te(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function jr(e){return typeof e=="string"?cn.fromBase64String(e):cn.fromUint8Array(e)}/**
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
 */const Md="server_timestamp",Ld="__type__",Fd="__previous_value__",Ud="__local_write_time__";function Pl(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[Ld])==null?void 0:r.stringValue)===Md}function Dl(e){const t=e.mapValue.fields[Fd];return Pl(t)?Dl(t):t}function Gi(e){const t=hr(e.mapValue.fields[Ud].timestampValue);return new Dt(t.seconds,t.nanos)}/**
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
 */class hw{constructor(t,n,r,s,i,a,l,u,h,d,p){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const Ki="(default)";class Wi{constructor(t,n){this.projectId=t,this.database=n||Ki}static empty(){return new Wi("","")}get isDefaultDatabase(){return this.database===Ki}isEqual(t){return t instanceof Wi&&t.projectId===this.projectId&&t.database===this.database}}function fw(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new nt(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(e.options.projectId,t)}/**
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
 */const Bd="__type__",dw="__max__",Ei={mapValue:{}},jd="__vector__",Ua="value";function fr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pl(e)?4:gw(e)?9007199254740991:pw(e)?10:11:ct(28295,{value:e})}function un(e,t){if(e===t)return!0;const n=fr(e);if(n!==fr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Gi(e).isEqual(Gi(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=hr(s.timestampValue),l=hr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return te(s.geoPointValue.latitude)===te(i.geoPointValue.latitude)&&te(s.geoPointValue.longitude)===te(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return te(s.integerValue)===te(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=te(s.doubleValue),l=te(i.doubleValue);return a===l?zi(a)===zi(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Br(e.arrayValue.values||[],t.arrayValue.values||[],un);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(nh(a)!==nh(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!un(a[u],l[u])))return!1;return!0}(e,t);default:return ct(52216,{left:e})}}function js(e,t){return(e.values||[]).find(n=>un(n,t))!==void 0}function $r(e,t){if(e===t)return 0;const n=fr(e),r=fr(t);if(n!==r)return Tt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Tt(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=te(i.integerValue||i.doubleValue),u=te(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return sh(e.timestampValue,t.timestampValue);case 4:return sh(Gi(e),Gi(t));case 5:return Fa(e.stringValue,t.stringValue);case 6:return function(i,a){const l=jr(i),u=jr(a);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const d=Tt(l[h],u[h]);if(d!==0)return d}return Tt(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=Tt(te(i.latitude),te(a.latitude));return l!==0?l:Tt(te(i.longitude),te(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return ih(e.arrayValue,t.arrayValue);case 10:return function(i,a){var y,I,k,O;const l=i.fields||{},u=a.fields||{},h=(y=l[Ua])==null?void 0:y.arrayValue,d=(I=u[Ua])==null?void 0:I.arrayValue,p=Tt(((k=h==null?void 0:h.values)==null?void 0:k.length)||0,((O=d==null?void 0:d.values)==null?void 0:O.length)||0);return p!==0?p:ih(h,d)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===Ei.mapValue&&a===Ei.mapValue)return 0;if(i===Ei.mapValue)return 1;if(a===Ei.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=a.fields||{},d=Object.keys(h);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const y=Fa(u[p],d[p]);if(y!==0)return y;const I=$r(l[u[p]],h[d[p]]);if(I!==0)return I}return Tt(u.length,d.length)}(e.mapValue,t.mapValue);default:throw ct(23264,{he:n})}}function sh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Tt(e,t);const n=hr(e),r=hr(t),s=Tt(n.seconds,r.seconds);return s!==0?s:Tt(n.nanos,r.nanos)}function ih(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=$r(n[s],r[s]);if(i)return i}return Tt(n.length,r.length)}function Hr(e){return Ba(e)}function Ba(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return jr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return lt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ba(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ba(n.fields[a])}`;return s+"}"}(e.mapValue):ct(61005,{value:e})}function Ci(e){switch(fr(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Dl(e);return t?16+Ci(t):16;case 5:return 2*e.stringValue.length;case 6:return jr(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ci(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return Gr(r.fields,(i,a)=>{s+=i.length+Ci(a)}),s}(e.mapValue);default:throw ct(13486,{value:e})}}function ja(e){return!!e&&"integerValue"in e}function Vl(e){return!!e&&"arrayValue"in e}function Pi(e){return!!e&&"mapValue"in e}function pw(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[Bd])==null?void 0:r.stringValue)===jd}function Ss(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Gr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ss(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ss(e.arrayValue.values[n]);return t}return{...e}}function gw(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===dw}/**
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
 */class Ue{constructor(t){this.value=t}static empty(){return new Ue({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Pi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ss(n)}setAll(t){let n=ee.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Ss(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Pi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return un(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Pi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Gr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ue(Ss(this.value))}}function $d(e){const t=[];return Gr(e.fields,(n,r)=>{const s=new ee([n]);if(Pi(r)){const i=$d(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new $e(t)}/**
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
 */class Le{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Le(t,0,Pt.min(),Pt.min(),Pt.min(),Ue.empty(),0)}static newFoundDocument(t,n,r,s){return new Le(t,1,n,Pt.min(),r,s,0)}static newNoDocument(t,n){return new Le(t,2,n,Pt.min(),Pt.min(),Ue.empty(),0)}static newUnknownDocument(t,n){return new Le(t,3,n,Pt.min(),Pt.min(),Ue.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Pt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Le&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qi{constructor(t,n){this.position=t,this.inclusive=n}}function oh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=lt.comparator(lt.fromName(a.referenceValue),n.key):r=$r(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ah(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!un(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Ji{constructor(t,n="asc"){this.field=t,this.dir=n}}function mw(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Hd{}class Qt extends Hd{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new yw(t,n,r):n==="array-contains"?new ww(t,r):n==="in"?new Tw(t,r):n==="not-in"?new Iw(t,r):n==="array-contains-any"?new Aw(t,r):new Qt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new vw(t,r):new Ew(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison($r(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison($r(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ct(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends Hd{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new qn(t,n)}matches(t){return qd(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qd(e){return e.op==="and"}function zd(e){return _w(e)&&qd(e)}function _w(e){for(const t of e.filters)if(t instanceof qn)return!1;return!0}function $a(e){if(e instanceof Qt)return e.field.canonicalString()+e.op.toString()+Hr(e.value);if(zd(e))return e.filters.map(t=>$a(t)).join(",");{const t=e.filters.map(n=>$a(n)).join(",");return`${e.op}(${t})`}}function Gd(e,t){return e instanceof Qt?function(r,s){return s instanceof Qt&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(e,t):e instanceof qn?function(r,s){return s instanceof qn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Gd(a,s.filters[l]),!0):!1}(e,t):void ct(19439)}function Kd(e){return e instanceof Qt?function(n){return`${n.field.canonicalString()} ${n.op} ${Hr(n.value)}`}(e):e instanceof qn?function(n){return n.op.toString()+" {"+n.getFilters().map(Kd).join(" ,")+"}"}(e):"Filter"}class yw extends Qt{constructor(t,n,r){super(t,n,r),this.key=lt.fromName(r.referenceValue)}matches(t){const n=lt.comparator(t.key,this.key);return this.matchesComparison(n)}}class vw extends Qt{constructor(t,n){super(t,"in",n),this.keys=Wd("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Ew extends Qt{constructor(t,n){super(t,"not-in",n),this.keys=Wd("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Wd(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(r=>lt.fromName(r.referenceValue))}class ww extends Qt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Vl(n)&&js(n.arrayValue,this.value)}}class Tw extends Qt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&js(this.value.arrayValue,n)}}class Iw extends Qt{constructor(t,n){super(t,"not-in",n)}matches(t){if(js(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!js(this.value.arrayValue,n)}}class Aw extends Qt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Vl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>js(this.value.arrayValue,r))}}/**
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
 */class bw{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function lh(e,t=null,n=[],r=[],s=null,i=null,a=null){return new bw(e,t,n,r,s,i,a)}function Nl(e){const t=Rt(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>$a(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cl(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Hr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Hr(r)).join(",")),t.Te=n}return t.Te}function Ol(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!mw(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Gd(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ah(e.startAt,t.startAt)&&ah(e.endAt,t.endAt)}/**
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
 */class vo{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Sw(e,t,n,r,s,i,a,l){return new vo(e,t,n,r,s,i,a,l)}function Rw(e){return new vo(e)}function ch(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Cw(e){return lt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}function Pw(e){return e.collectionGroup!==null}function Rs(e){const t=Rt(e);if(t.Ee===null){t.Ee=[];const n=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ne(ee.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.Ee.push(new Ji(i,r))}),n.has(ee.keyField().canonicalString())||t.Ee.push(new Ji(ee.keyField(),r))}return t.Ee}function ar(e){const t=Rt(e);return t.Ie||(t.Ie=Dw(t,Rs(e))),t.Ie}function Dw(e,t){if(e.limitType==="F")return lh(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ji(s.field,i)});const n=e.endAt?new Qi(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qi(e.startAt.position,e.startAt.inclusive):null;return lh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ha(e,t,n){return new vo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Qd(e,t){return Ol(ar(e),ar(t))&&e.limitType===t.limitType}function Jd(e){return`${Nl(ar(e))}|lt:${e.limitType}`}function hs(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Kd(s)).join(", ")}]`),Cl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Hr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Hr(s)).join(",")),`Target(${r})`}(ar(e))}; limitType=${e.limitType})`}function kl(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):lt.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Rs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,u){const h=oh(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Rs(r),s)||r.endAt&&!function(a,l,u){const h=oh(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Rs(r),s))}(e,t)}function Vw(e){return(t,n)=>{let r=!1;for(const s of Rs(e)){const i=Nw(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Nw(e,t,n){const r=e.field.isKeyField()?lt.comparator(t.key,n.key):function(i,a,l){const u=a.data.field(i),h=l.data.field(i);return u!==null&&h!==null?$r(u,h):ct(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ct(19790,{direction:e.dir})}}/**
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
 */class yr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Gr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return xd(this.inner)}size(){return this.innerSize}}/**
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
 */const Ow=new Ae(lt.comparator);function Yi(){return Ow}const Yd=new Ae(lt.comparator);function wi(...e){let t=Yd;for(const n of e)t=t.insert(n.key,n);return t}function Xd(e){let t=Yd;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function rr(){return Cs()}function Zd(){return Cs()}function Cs(){return new yr(e=>e.toString(),(e,t)=>e.isEqual(t))}const kw=new Ae(lt.comparator),xw=new ne(lt.comparator);function ce(...e){let t=xw;for(const n of e)t=t.add(n);return t}const Mw=new ne(Tt);function Lw(){return Mw}/**
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
 */function xl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(t)?"-0":t}}function tp(e){return{integerValue:""+e}}function Fw(e,t){return ow(t)?tp(t):xl(e,t)}/**
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
 */class Eo{constructor(){this._=void 0}}function Uw(e,t,n){return e instanceof Xi?function(s,i){const a={fields:{[Ld]:{stringValue:Md},[Ud]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Pl(i)&&(i=Dl(i)),i&&(a.fields[Fd]=i),{mapValue:a}}(n,t):e instanceof $s?np(e,t):e instanceof Hs?rp(e,t):function(s,i){const a=ep(s,i),l=uh(a)+uh(s.Ae);return ja(a)&&ja(s.Ae)?tp(l):xl(s.serializer,l)}(e,t)}function Bw(e,t,n){return e instanceof $s?np(e,t):e instanceof Hs?rp(e,t):n}function ep(e,t){return e instanceof Zi?function(r){return ja(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Xi extends Eo{}class $s extends Eo{constructor(t){super(),this.elements=t}}function np(e,t){const n=sp(t);for(const r of e.elements)n.some(s=>un(s,r))||n.push(r);return{arrayValue:{values:n}}}class Hs extends Eo{constructor(t){super(),this.elements=t}}function rp(e,t){let n=sp(t);for(const r of e.elements)n=n.filter(s=>!un(s,r));return{arrayValue:{values:n}}}class Zi extends Eo{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function uh(e){return te(e.integerValue||e.doubleValue)}function sp(e){return Vl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function jw(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof $s&&s instanceof $s||r instanceof Hs&&s instanceof Hs?Br(r.elements,s.elements,un):r instanceof Zi&&s instanceof Zi?un(r.Ae,s.Ae):r instanceof Xi&&s instanceof Xi}(e.transform,t.transform)}class $w{constructor(t,n){this.version=t,this.transformResults=n}}class sn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new sn}static exists(t){return new sn(void 0,t)}static updateTime(t){return new sn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Di(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class wo{}function ip(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ml(e.key,sn.none()):new ei(e.key,e.data,sn.none());{const n=e.data,r=Ue.empty();let s=new ne(ee.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new vr(e.key,r,new $e(s.toArray()),sn.none())}}function Hw(e,t,n){e instanceof ei?function(s,i,a){const l=s.value.clone(),u=fh(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof vr?function(s,i,a){if(!Di(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=fh(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(op(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Ps(e,t,n,r){return e instanceof ei?function(i,a,l,u){if(!Di(i.precondition,a))return l;const h=i.value.clone(),d=dh(i.fieldTransforms,u,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof vr?function(i,a,l,u){if(!Di(i.precondition,a))return l;const h=dh(i.fieldTransforms,u,a),d=a.data;return d.setAll(op(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(e,t,n,r):function(i,a,l){return Di(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function qw(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=ep(r.transform,s||null);i!=null&&(n===null&&(n=Ue.empty()),n.set(r.field,i))}return n||null}function hh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Br(r,s,(i,a)=>jw(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ei extends wo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vr extends wo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function op(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function fh(e,t,n){const r=new Map;xt(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,Bw(a,l,n[s]))}return r}function dh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,Uw(i,a,t))}return r}class Ml extends wo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zw extends wo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gw{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Hw(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ps(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ps(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Zd();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const u=ip(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(Pt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ce())}isEqual(t){return this.batchId===t.batchId&&Br(this.mutations,t.mutations,(n,r)=>hh(n,r))&&Br(this.baseMutations,t.baseMutations,(n,r)=>hh(n,r))}}class Ll{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){xt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return kw}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ll(t,n,r,s)}}/**
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
 */class Kw{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var Bt,dt;function Ww(e){switch(e){case U.OK:return ct(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ct(15467,{code:e})}}function Qw(e){if(e===void 0)return ur("GRPC error has no .code"),U.UNKNOWN;switch(e){case Bt.OK:return U.OK;case Bt.CANCELLED:return U.CANCELLED;case Bt.UNKNOWN:return U.UNKNOWN;case Bt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Bt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Bt.INTERNAL:return U.INTERNAL;case Bt.UNAVAILABLE:return U.UNAVAILABLE;case Bt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Bt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Bt.NOT_FOUND:return U.NOT_FOUND;case Bt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Bt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Bt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Bt.ABORTED:return U.ABORTED;case Bt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Bt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Bt.DATA_LOSS:return U.DATA_LOSS;default:return ct(39323,{code:e})}}(dt=Bt||(Bt={}))[dt.OK=0]="OK",dt[dt.CANCELLED=1]="CANCELLED",dt[dt.UNKNOWN=2]="UNKNOWN",dt[dt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",dt[dt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",dt[dt.NOT_FOUND=5]="NOT_FOUND",dt[dt.ALREADY_EXISTS=6]="ALREADY_EXISTS",dt[dt.PERMISSION_DENIED=7]="PERMISSION_DENIED",dt[dt.UNAUTHENTICATED=16]="UNAUTHENTICATED",dt[dt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",dt[dt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",dt[dt.ABORTED=10]="ABORTED",dt[dt.OUT_OF_RANGE=11]="OUT_OF_RANGE",dt[dt.UNIMPLEMENTED=12]="UNIMPLEMENTED",dt[dt.INTERNAL=13]="INTERNAL",dt[dt.UNAVAILABLE=14]="UNAVAILABLE",dt[dt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new wl([4294967295,4294967295],0);class Jw{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function qa(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yw(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Xw(e,t){return qa(e,t.toTimestamp())}function kr(e){return xt(!!e,49232),Pt.fromTimestamp(function(n){const r=hr(n);return new Dt(r.seconds,r.nanos)}(e))}function ap(e,t){return za(e,t).canonicalString()}function za(e,t){const n=function(s){return new Mt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Zw(e){const t=Mt.fromString(e);return xt(aT(t),10190,{key:t.toString()}),t}function Ga(e,t){return ap(e.databaseId,t.path)}function tT(e){const t=Zw(e);return t.length===4?Mt.emptyPath():nT(t)}function eT(e){return new Mt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nT(e){return xt(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function ph(e,t,n){return{name:Ga(e,t),fields:n.value.mapValue.fields}}function rT(e,t){let n;if(t instanceof ei)n={update:ph(e,t.key,t.value)};else if(t instanceof Ml)n={delete:Ga(e,t.key)};else if(t instanceof vr)n={update:ph(e,t.key,t.data),updateMask:oT(t.fieldMask)};else{if(!(t instanceof zw))return ct(16599,{dt:t.type});n={verify:Ga(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Xi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof $s)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Hs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zi)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw ct(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Xw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ct(27497)}(e,t.precondition)),n}function sT(e,t){return e&&e.length>0?(xt(t!==void 0,14353),e.map(n=>function(s,i){let a=s.updateTime?kr(s.updateTime):kr(i);return a.isEqual(Pt.min())&&(a=kr(i)),new $w(a,s.transformResults||[])}(n,t))):[]}function iT(e){let t=tT(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xt(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(p){const y=lp(p);return y instanceof qn&&zd(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(y=>function(k){return new Ji(Cr(k.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Cl(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,I=p.values||[];return new Qi(I,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,I=p.values||[];return new Qi(I,y)}(n.endAt)),Sw(t,s,a,i,l,"F",u,h)}function lp(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cr(n.unaryFilter.field);return Qt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Cr(n.unaryFilter.field);return Qt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cr(n.unaryFilter.field);return Qt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Cr(n.unaryFilter.field);return Qt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ct(61313);default:return ct(60726)}}(e):e.fieldFilter!==void 0?function(n){return Qt.create(Cr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ct(58110);default:return ct(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return qn.create(n.compositeFilter.filters.map(r=>lp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ct(1026)}}(n.compositeFilter.op))}(e):ct(30097,{filter:e})}function Cr(e){return ee.fromServerFormat(e.fieldPath)}function oT(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function aT(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function cp(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}/**
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
 */class lT{constructor(t){this.yt=t}}function cT(e){const t=iT({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ha(t,t.limit,"L"):t}/**
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
 */class uT{constructor(){this.bn=new hT}addToCollectionParentIndex(t,n){return this.bn.add(n),M.resolve()}getCollectionParents(t,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return M.resolve()}deleteFieldIndex(t,n){return M.resolve()}deleteAllFieldIndexes(t){return M.resolve()}createTargetIndexes(t,n){return M.resolve()}getDocumentsMatchingTarget(t,n){return M.resolve(null)}getIndexType(t,n){return M.resolve(0)}getFieldIndexes(t,n){return M.resolve([])}getNextCollectionGroupToUpdate(t){return M.resolve(null)}getMinOffset(t,n){return M.resolve(Hn.min())}getMinOffsetFromCollectionGroup(t,n){return M.resolve(Hn.min())}updateCollectionGroup(t,n,r){return M.resolve()}updateIndexEntries(t,n){return M.resolve()}}class hT{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new ne(Mt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ne(Mt.comparator)).toArray()}}/**
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
 */const gh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},up=41943040;class Ie{static withCacheSize(t){return new Ie(t,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ie.DEFAULT_COLLECTION_PERCENTILE=10,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ie.DEFAULT=new Ie(up,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ie.DISABLED=new Ie(-1,0,0);/**
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
 */class qr{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new qr(0)}static ar(){return new qr(-1)}}/**
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
 */const mh="LruGarbageCollector",fT=1048576;function _h([e,t],[n,r]){const s=Tt(e,n);return s===0?Tt(t,r):s}class dT{constructor(t){this.Pr=t,this.buffer=new ne(_h),this.Tr=0}Er(){return++this.Tr}Ir(t){const n=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();_h(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class pT{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){Y(mh,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ti(n)?Y(mh,"Ignoring IndexedDB error during garbage collection: ",n):await bl(n)}await this.Ar(3e5)})}}class gT{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return M.resolve(Sl.ce);const r=new dT(n);return this.Vr.forEachTarget(t,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.Vr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(gh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gh):this.gr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let r,s,i,a,l,u,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(t,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(p=>(h=Date.now(),Rr()<=pt.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function mT(e,t){return new gT(e,t)}/**
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
 */class _T{constructor(){this.changes=new yr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Le.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class yT{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class vT{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Ps(r.mutation,s,$e.empty(),Dt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ce()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ce()){const s=rr();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=wi();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=rr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ce()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=Yi();const a=Cs(),l=function(){return Cs()}();return n.forEach((u,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof vr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ps(d.mutation,h,d.mutation.getFieldMask(),Dt.now())):a.set(h.key,$e.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>l.set(h,new yT(d,a.get(h)??null))),l))}recalculateAndSaveOverlays(t,n){const r=Cs();let s=new Ae((a,l)=>a-l),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let d=r.get(u)||$e.empty();d=l.applyToLocalView(h,d),r.set(u,d);const p=(s.get(l.batchId)||ce()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,d=u.value,p=Zd();d.forEach(y=>{if(!i.has(y)){const I=ip(n.get(y),r.get(y));I!==null&&p.set(y,I),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return Cw(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Pw(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):M.resolve(rr());let l=Bs,u=i;return a.next(h=>M.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(t,d).next(y=>{u=u.insert(d,y)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,u,h,ce())).next(d=>({batchId:l,changes:Xd(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new lt(n)).next(r=>{let s=wi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=wi();return this.indexManager.getCollectionParents(t,i).next(l=>M.forEach(l,u=>{const h=function(p,y){return new vo(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((p,y)=>{a=a.insert(p,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((u,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,Le.newInvalidDocument(d)))});let l=wi();return a.forEach((u,h)=>{const d=i.get(u);d!==void 0&&Ps(d.mutation,h,$e.empty(),Dt.now()),kl(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class ET{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:kr(s.createTime)}}(n)),M.resolve()}getNamedQuery(t,n){return M.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,function(s){return{name:s.name,query:cT(s.bundledQuery),readTime:kr(s.readTime)}}(n)),M.resolve()}}/**
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
 */class wT{constructor(){this.overlays=new Ae(lt.comparator),this.Lr=new Map}getOverlay(t,n){return M.resolve(this.overlays.get(n))}getOverlays(t,n){const r=rr();return M.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.St(t,n,i)}),M.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(t,n,r){const s=rr(),i=n.length+1,a=new lt(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Ae((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=rr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=rr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}St(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Kw(n,r));let i=this.Lr.get(n);i===void 0&&(i=ce(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class TT{constructor(){this.sessionToken=cn.EMPTY_BYTE_STRING}getSessionToken(t){return M.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Fl{constructor(){this.kr=new ne(Wt.qr),this.Kr=new ne(Wt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const r=new Wt(t,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Wr(new Wt(t,n))}Qr(t,n){t.forEach(r=>this.removeReference(r,n))}Gr(t){const n=new lt(new Mt([])),r=new Wt(n,t),s=new Wt(n,t+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const n=new lt(new Mt([])),r=new Wt(n,t),s=new Wt(n,t+1);let i=ce();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new Wt(t,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Wt{constructor(t,n){this.key=t,this.Jr=n}static qr(t,n){return lt.comparator(t.key,n.key)||Tt(t.Jr,n.Jr)}static Ur(t,n){return Tt(t.Jr,n.Jr)||lt.comparator(t.key,n.key)}}/**
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
 */class IT{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new ne(Wt.qr)}checkEmpty(t){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gw(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Hr=this.Hr.add(new Wt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(t,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Rl:this.Yn-1)}getAllMutationBatches(t){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Wt(n,0),s=new Wt(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],a=>{const l=this.Zr(a.Jr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ne(Tt);return n.forEach(s=>{const i=new Wt(s,0),a=new Wt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,a],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;lt.isDocumentKey(i)||(i=i.child(""));const a=new Wt(new lt(i),0);let l=new ne(Tt);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},a),M.resolve(this.Yr(l))}Yr(t){const n=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){xt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,s=>{const i=new Wt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,n){const r=new Wt(n,0),s=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,M.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class AT{constructor(t){this.ti=t,this.docs=function(){return new Ae(lt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(n))}getEntries(t,n){let r=Yi();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Le.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Yi();const a=n.path,l=new lt(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:d}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||nw(ew(d),r)<=0||(s.has(d.key)||kl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(t,n,r,s){ct(9500)}ni(t,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new bT(this)}getSize(t){return M.resolve(this.size)}}class bT extends _T{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
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
 */class ST{constructor(t){this.persistence=t,this.ri=new yr(n=>Nl(n),Ol),this.lastRemoteSnapshotVersion=Pt.min(),this.highestTargetId=0,this.ii=0,this.si=new Fl,this.targetCount=0,this.oi=qr._r()}forEachTarget(t,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(t){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return M.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new qr(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(t,n){return this.lr(n),M.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(t){return M.resolve(this.targetCount)}getTargetData(t,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(t,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(t,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(t,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(t,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class hp{constructor(t,n){this._i={},this.overlays={},this.ai=new Sl(0),this.ui=!1,this.ui=!0,this.ci=new TT,this.referenceDelegate=t(this),this.li=new ST(this),this.indexManager=new uT,this.remoteDocumentCache=function(s){return new AT(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new lT(n),this.Pi=new ET(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new wT,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this._i[t.toKey()];return r||(r=new IT(n,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,r){Y("MemoryPersistence","Starting transaction:",t);const s=new RT(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(t,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(t,n)))}}class RT extends sw{constructor(t){super(),this.currentSequenceNumber=t}}class Ul{constructor(t){this.persistence=t,this.Ri=new Fl,this.Ai=null}static Vi(t){return new Ul(t)}get di(){if(this.Ai)return this.Ai;throw ct(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),M.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ti(){this.Ai=new Set}Ei(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=lt.fromPath(r);return this.mi(t,s).next(i=>{i||n.removeEntry(s,Pt.min())})}).next(()=>(this.Ai=null,n.apply(t)))}updateLimboDocument(t,n){return this.mi(t,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(t){return 0}mi(t,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ii(t,n)])}}class to{constructor(t,n){this.persistence=t,this.fi=new yr(r=>aw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=mT(this,n)}static Vi(t,n){return new to(t,n)}Ti(){}Ei(t){return M.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}pr(t){let n=0;return this.mr(t,r=>{n++}).next(()=>n)}mr(t,n){return M.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,n).next(l=>{l||(r++,i.removeEntry(a,Pt.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),M.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.fi.set(r,t.currentSequenceNumber),M.resolve()}removeReference(t,n,r){return this.fi.set(r,t.currentSequenceNumber),M.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),M.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Ci(t.data.value)),n}wr(t,n,r){return M.or([()=>this.persistence.Ii(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Bl{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Ts=r,this.Es=s}static Is(t,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bl(t,n.fromCache,r,s)}}/**
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
 */class CT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class PT{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Av()?8:iw(Tv())>0?6:4}()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.gs(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new CT;return this.ys(t,n,a).next(l=>{if(i.result=l,this.As)return this.ws(t,n,a,l.size)})}).next(()=>i.result)}ws(t,n,r,s){return r.documentReadCount<this.Vs?(Rr()<=pt.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Rr()<=pt.DEBUG&&Y("QueryEngine","Query:",hs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Rr()<=pt.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ar(n))):M.resolve())}gs(t,n){if(ch(n))return M.resolve(null);let r=ar(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ha(n,null,"F"),r=ar(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=ce(...i);return this.fs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,a,u.readTime)?this.gs(t,Ha(n,null,"F")):this.Ds(t,h,n,u)}))})))}ps(t,n,r,s){return ch(n)||s.isEqual(Pt.min())?M.resolve(null):this.fs.getDocuments(t,r).next(i=>{const a=this.Ss(n,i);return this.bs(n,a,r,s)?M.resolve(null):(Rr()<=pt.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hs(n)),this.Ds(t,a,n,tw(s,Bs)).next(l=>l))})}Ss(t,n){let r=new ne(Vw(t));return n.forEach((s,i)=>{kl(t,i)&&(r=r.add(i))}),r}bs(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(t,n,r){return Rr()<=pt.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",hs(n)),this.fs.getDocumentsMatchingQuery(t,n,Hn.min(),r)}Ds(t,n,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const DT="LocalStore";class VT{constructor(t,n,r,s){this.persistence=t,this.Cs=n,this.serializer=s,this.vs=new Ae(Tt),this.Fs=new yr(i=>Nl(i),Ol),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new vT(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.vs))}}function NT(e,t,n,r){return new VT(e,t,n,r)}async function fp(e,t){const n=Rt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=ce();for(const h of s){a.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function OT(e,t){const n=Rt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,d){const p=h.batch,y=p.keys();let I=M.resolve();return y.forEach(k=>{I=I.next(()=>d.getEntry(u,k)).next(O=>{const $=h.docVersions.get(k);xt($!==null,48541),O.version.compareTo($)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function kT(e){const t=Rt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.li.getLastRemoteSnapshotVersion(n))}function xT(e,t){const n=Rt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Rl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class yh{constructor(){this.activeTargetIds=Lw()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class MT{constructor(){this.vo=new yh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,r){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new yh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class LT{Mo(t){}shutdown(){}}/**
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
 */const vh="ConnectivityMonitor";class Eh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Y(vh,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){Y(vh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ti=null;function Ka(){return Ti===null?Ti=function(){return 268435456+Math.round(2147483648*Math.random())}():Ti++,"0x"+Ti.toString(16)}/**
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
 */const la="RestConnection",FT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class UT{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Ki?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,n,r,s,i){const a=Ka(),l=this.Qo(t,n.toUriEncodedString());Y(la,`Sending RPC '${t}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),d=yd(h);return this.zo(t,l,u,r,d).then(p=>(Y(la,`Received RPC '${t}' ${a}: `,p),p),p=>{throw Us(la,`RPC '${t}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}jo(t,n,r,s,i,a){return this.Wo(t,n,r,s,i)}Go(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}Qo(t,n){const r=FT[t];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class BT{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const ie="WebChannelConnection",fs=(e,t,n)=>{e.listen(t,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class xr extends UT{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!xr.c_){const t=Pd();fs(t,Cd.STAT_EVENT,n=>{n.stat===La.PROXY?Y(ie,"STAT_EVENT: detected buffering proxy"):n.stat===La.NOPROXY&&Y(ie,"STAT_EVENT: detected no buffering proxy")}),xr.c_=!0}}zo(t,n,r,s,i){const a=Ka();return new Promise((l,u)=>{const h=new Sd;h.setWithCredentials(!0),h.listenOnce(Rd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ri.NO_ERROR:const p=h.getResponseJson();Y(ie,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(p)),l(p);break;case Ri.TIMEOUT:Y(ie,`RPC '${t}' ${a} timed out`),u(new nt(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ri.HTTP_ERROR:const y=h.getStatus();if(Y(ie,`RPC '${t}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const k=I==null?void 0:I.error;if(k&&k.status&&k.message){const O=function(W){const j=W.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(j)>=0?j:U.UNKNOWN}(k.status);u(new nt(O,k.message))}else u(new nt(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new nt(U.UNAVAILABLE,"Connection failed."));break;default:ct(9055,{l_:t,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Y(ie,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(s);Y(ie,`RPC '${t}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)})}T_(t,n,r){const s=Ka(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");Y(ie,`Creating RPC '${t}' stream ${s}: ${h}`,l);const d=a.createWebChannel(h,l);this.E_(d);let p=!1,y=!1;const I=new BT({Jo:k=>{y?Y(ie,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(p||(Y(ie,`Opening RPC '${t}' stream ${s} transport.`),d.open(),p=!0),Y(ie,`RPC '${t}' stream ${s} sending:`,k),d.send(k))},Ho:()=>d.close()});return fs(d,gs.EventType.OPEN,()=>{y||(Y(ie,`RPC '${t}' stream ${s} transport opened.`),I.i_())}),fs(d,gs.EventType.CLOSE,()=>{y||(y=!0,Y(ie,`RPC '${t}' stream ${s} transport closed`),I.o_(),this.I_(d))}),fs(d,gs.EventType.ERROR,k=>{y||(y=!0,Us(ie,`RPC '${t}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),I.o_(new nt(U.UNAVAILABLE,"The operation could not be completed")))}),fs(d,gs.EventType.MESSAGE,k=>{var O;if(!y){const $=k.data[0];xt(!!$,16349);const W=$,j=(W==null?void 0:W.error)||((O=W[0])==null?void 0:O.error);if(j){Y(ie,`RPC '${t}' stream ${s} received error:`,j);const q=j.status;let Q=function(v){const m=Bt[v];if(m!==void 0)return Qw(m)}(q),st=j.message;q==="NOT_FOUND"&&st.includes("database")&&st.includes("does not exist")&&st.includes(this.databaseId.database)&&Us(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Q===void 0&&(Q=U.INTERNAL,st="Unknown error status: "+q+" with message "+j.message),y=!0,I.o_(new nt(Q,st)),d.close()}else Y(ie,`RPC '${t}' stream ${s} received:`,$),I.__($)}}),xr.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(n=>n===t)}Go(t,n,r){super.Go(t,n,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Dd()}}/**
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
 */function jT(e){return new xr(e)}function ca(){return typeof document<"u"?document:null}/**
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
 */function To(e){return new Jw(e,!0)}/**
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
 */xr.c_=!1;class dp{constructor(t,n,r=1e3,s=1.5,i=6e4){this.Ci=t,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const wh="PersistentStream";class $T{constructor(t,n,r,s,i,a,l,u){this.Ci=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new dp(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{t(()=>{const s=new nt(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,n){const r=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return Y(wh,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget(()=>this.D_===t?n():(Y(wh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HT extends $T{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return xt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,xt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){xt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=sT(t.writeResults,t.commitTime),r=kr(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=eT(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>rT(this.serializer,r))};this.q_(n)}}/**
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
 */class qT{}class zT extends qT{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new nt(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(t,za(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new nt(U.UNKNOWN,i.toString())})}jo(t,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(t,za(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new nt(U.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function GT(e,t,n,r){return new zT(e,t,n,r)}class KT{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ur(n),this.aa=!1):Y("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ni="RemoteStore";class WT{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{si(this)&&(Y(ni,"Restarting streams for network reachability change."),await async function(u){const h=Rt(u);h.Ia.add(4),await ri(h),h.Va.set("Unknown"),h.Ia.delete(4),await Io(h)}(this))})}),this.Va=new KT(r,s)}}async function Io(e){if(si(e))for(const t of e.Ra)await t(!0)}async function ri(e){for(const t of e.Ra)await t(!1)}function si(e){return Rt(e).Ia.size===0}async function pp(e,t,n){if(!ti(t))throw t;e.Ia.add(1),await ri(e),e.Va.set("Offline"),n||(n=()=>kT(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Y(ni,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await Io(e)})}function gp(e,t){return t().catch(n=>pp(e,n,t))}async function Ao(e){const t=Rt(e),n=zn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Rl;for(;QT(t);)try{const s=await xT(t.localStore,r);if(s===null){t.Ta.length===0&&n.L_();break}r=s.batchId,JT(t,s)}catch(s){await pp(t,s)}mp(t)&&_p(t)}function QT(e){return si(e)&&e.Ta.length<10}function JT(e,t){e.Ta.push(t);const n=zn(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function mp(e){return si(e)&&!zn(e).x_()&&e.Ta.length>0}function _p(e){zn(e).start()}async function YT(e){zn(e).ra()}async function XT(e){const t=zn(e);for(const n of e.Ta)t.ea(n.mutations)}async function ZT(e,t,n){const r=e.Ta.shift(),s=Ll.from(r,t,n);await gp(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Ao(e)}async function tI(e,t){t&&zn(e).Y_&&await async function(r,s){if(function(a){return Ww(a)&&a!==U.ABORTED}(s.code)){const i=r.Ta.shift();zn(r).B_(),await gp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ao(r)}}(e,t),mp(e)&&_p(e)}async function Th(e,t){const n=Rt(e);n.asyncQueue.verifyOperationInProgress(),Y(ni,"RemoteStore received new credentials");const r=si(n);n.Ia.add(3),await ri(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Io(n)}async function eI(e,t){const n=Rt(e);t?(n.Ia.delete(2),await Io(n)):t||(n.Ia.add(2),await ri(n),n.Va.set("Unknown"))}function zn(e){return e.fa||(e.fa=function(n,r,s){const i=Rt(n);return i.sa(),new HT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:YT.bind(null,e),t_:tI.bind(null,e),ta:XT.bind(null,e),na:ZT.bind(null,e)}),e.Ra.push(async t=>{t?(e.fa.B_(),await Ao(e)):(await e.fa.stop(),e.Ta.length>0&&(Y(ni,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
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
 */class jl{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new jl(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new nt(U.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yp(e,t){if(ur("AsyncQueue",`${t}: ${e}`),ti(e))return new nt(U.UNAVAILABLE,`${t}: ${e}`);throw e}class nI{constructor(){this.queries=Ih(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Rt(n),i=s.queries;s.queries=Ih(),i.forEach((a,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new nt(U.ABORTED,"Firestore shutting down"))}}function Ih(){return new yr(e=>Jd(e),Qd)}function rI(e){e.Ca.forEach(t=>{t.next()})}var Ah,bh;(bh=Ah||(Ah={})).Ma="default",bh.Cache="cache";const sI="SyncEngine";class iI{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new yr(l=>Jd(l),Qd),this.Eu=new Map,this.Iu=new Set,this.Ru=new Ae(lt.comparator),this.Au=new Map,this.Vu=new Fl,this.du={},this.mu=new Map,this.fu=qr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function oI(e,t,n){const r=uI(e);try{const s=await function(a,l){const u=Rt(a),h=Dt.now(),d=l.reduce((I,k)=>I.add(k.key),ce());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let k=Yi(),O=ce();return u.xs.getEntries(I,d).next($=>{k=$,k.forEach((W,j)=>{j.isValidDocument()||(O=O.add(W))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,k)).next($=>{p=$;const W=[];for(const j of l){const q=qw(j,p.get(j.key).overlayedDocument);q!=null&&W.push(new vr(j.key,q,$d(q.value.mapValue),sn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,W,l)}).next($=>{y=$;const W=$.applyToLocalDocumentSet(p,O);return u.documentOverlayCache.saveOverlays(I,$.batchId,W)})}).then(()=>({batchId:y.batchId,changes:Xd(p)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let h=a.du[a.currentUser.toKey()];h||(h=new Ae(Tt)),h=h.insert(l,u),a.du[a.currentUser.toKey()]=h}(r,s.batchId,n),await bo(r,s.changes),await Ao(r.remoteStore)}catch(s){const i=yp(s,"Failed to persist write");n.reject(i)}}function Sh(e,t,n){const r=Rt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=Rt(a);u.onlineState=l;let h=!1;u.queries.forEach((d,p)=>{for(const y of p.Sa)y.va(l)&&(h=!0)}),h&&rI(u)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function aI(e,t){const n=Rt(e),r=t.batch.batchId;try{const s=await OT(n.localStore,t);Ep(n,r,null),vp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bo(n,s)}catch(s){await bl(s)}}async function lI(e,t,n){const r=Rt(e);try{const s=await function(a,l){const u=Rt(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(xt(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>u.localDocuments.getDocuments(h,d))})}(r.localStore,t);Ep(r,t,n),vp(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await bo(r,s)}catch(s){await bl(s)}}function vp(e,t){(e.mu.get(t)||[]).forEach(n=>{n.resolve()}),e.mu.delete(t)}function Ep(e,t,n){const r=Rt(e);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}async function bo(e,t,n){const r=Rt(e),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,t,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Bl.Is(u.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const d=Rt(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,y=>M.forEach(y.Ts,I=>d.persistence.referenceDelegate.addReference(p,y.targetId,I)).next(()=>M.forEach(y.Es,I=>d.persistence.referenceDelegate.removeReference(p,y.targetId,I)))))}catch(p){if(!ti(p))throw p;Y(DT,"Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const I=d.vs.get(y),k=I.snapshotVersion,O=I.withLastLimboFreeSnapshotVersion(k);d.vs=d.vs.insert(y,O)}}}(r.localStore,i))}async function cI(e,t){const n=Rt(e);if(!n.currentUser.isEqual(t)){Y(sI,"User change. New user:",t.toKey());const r=await fp(n.localStore,t);n.currentUser=t,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new nt(U.CANCELLED,a))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bo(n,r.Ns)}}function uI(e){const t=Rt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=aI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=lI.bind(null,t),t}class eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=To(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return NT(this.persistence,new PT,t.initialUser,this.serializer)}Cu(t){return new hp(Ul.Vi,this.serializer)}Du(t){return new MT}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eo.provider={build:()=>new eo};class hI extends eo{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){xt(this.persistence.referenceDelegate instanceof to,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pT(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?Ie.withCacheSize(this.cacheSizeBytes):Ie.DEFAULT;return new hp(r=>to.Vi(r,n),this.serializer)}}class Wa{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cI.bind(null,this.syncEngine),await eI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new nI}()}createDatastore(t){const n=To(t.databaseInfo.databaseId),r=jT(t.databaseInfo);return GT(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new WT(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>Sh(this.syncEngine,n,0),function(){return Eh.v()?new Eh:new LT}())}createSyncEngine(t,n){return function(s,i,a,l,u,h,d){const p=new iI(s,i,a,l,u,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=Rt(s);Y(ni,"RemoteStore shutting down."),i.Ia.add(5),await ri(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}Wa.provider={build:()=>new Wa};/**
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
 */const Gn="FirestoreClient";class fI{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ae.UNAUTHENTICATED,this.clientId=Il.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Y(Gn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Y(Gn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=yp(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ua(e,t){e.asyncQueue.verifyOperationInProgress(),Y(Gn,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fp(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Rh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await dI(e);Y(Gn,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Th(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Th(t.remoteStore,s)),e._onlineComponents=t}async function dI(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Y(Gn,"Using user provided OfflineComponentProvider");try{await ua(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Us("Error using user provided cache. Falling back to memory cache: "+n),await ua(e,new eo)}}else Y(Gn,"Using default OfflineComponentProvider"),await ua(e,new hI(void 0));return e._offlineComponents}async function pI(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Y(Gn,"Using user provided OnlineComponentProvider"),await Rh(e,e._uninitializedComponentsProvider._online)):(Y(Gn,"Using default OnlineComponentProvider"),await Rh(e,new Wa))),e._onlineComponents}function gI(e){return pI(e).then(t=>t.syncEngine)}function mI(e,t){const n=new or;return e.asyncQueue.enqueueAndForget(async()=>oI(await gI(e),t,n)),n.promise}/**
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
 */function wp(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const _I="ComponentProvider",Ch=new Map;function yI(e,t,n,r,s){return new hw(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,wp(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Tp="firestore.googleapis.com",Ph=!0;class Dh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new nt(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tp,this.ssl=Ph}else this.host=t.host,this.ssl=t.ssl??Ph;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=up;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<fT)throw new nt(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ZE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wp(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new nt(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new nt(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new nt(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class $l{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new nt(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new nt(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $E;switch(r.type){case"firstParty":return new GE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new nt(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ch.get(n);r&&(Y(_I,"Removing Datastore"),Ch.delete(n),r.terminate())}(this),Promise.resolve()}}function vI(e,t,n,r={}){var h;e=qi(e,$l);const s=yd(t),i=e._getSettings(),a={...i,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;s&&Pv(`https://${l}`),i.host!==Tp&&i.host!==l&&Us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!$i(u,a)&&(e._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ae.MOCK_USER;else{d=wv(r.mockUserToken,(h=e._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new nt(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ae(y)}e._authCredentials=new HE(new Nd(d,p))}}/**
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
 */class Hl{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Hl(this.firestore,t,this._query)}}class he{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new he(this.firestore,t,this._key)}toJSON(){return{type:he._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(Zs(n,he._jsonSchema))return new he(t,r||null,new lt(Mt.fromString(n.referencePath)))}}he._jsonSchemaVersion="firestore/documentReference/1.0",he._jsonSchema={type:$t("string",he._jsonSchemaVersion),referencePath:$t("string")};class qs extends Hl{constructor(t,n,r){super(t,n,Rw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new he(this.firestore,null,new lt(t))}withConverter(t){return new qs(this.firestore,t,this._path)}}function Ip(e,t,...n){if(e=lr(e),arguments.length===1&&(t=Il.newId()),XE("doc","path",t),e instanceof $l){const r=Mt.fromString(t,...n);return Xu(r),new he(e,null,new lt(r))}{if(!(e instanceof he||e instanceof qs))throw new nt(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Mt.fromString(t,...n));return Xu(r),new he(e.firestore,e instanceof qs?e.converter:null,new lt(r))}}/**
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
 */const Vh="AsyncQueue";class Nh{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new dp(this,"async_queue_retry"),this._c=()=>{const r=ca();r&&Y(Vh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=ca();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=ca();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new or;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!ti(t))throw t;Y(Vh,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,ur("INTERNAL UNHANDLED ERROR: ",Oh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const s=jl.createAndSchedule(this,t,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ct(47125,{Pc:Oh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function Oh(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class ql extends $l{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Nh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Nh(t),this._firestoreClient=void 0,await t}}}function EI(e,t){const n=typeof e=="object"?e:Id(),r=typeof e=="string"?e:Ki,s=yo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vv("firestore");i&&vI(s,...i)}return s}function wI(e){if(e._terminated)throw new nt(U.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||TI(e),e._firestoreClient}function TI(e){var r,s,i,a;const t=e._freezeSettings(),n=yI(e._databaseId,((r=e._app)==null?void 0:r.options.appId)||"",e._persistenceKey,(s=e._app)==null?void 0:s.options.apiKey,t);e._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new fI(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(e._componentsProvider))}/**
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
 */class Be{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Be(cn.fromBase64String(t))}catch(n){throw new nt(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Be(cn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Zs(t,Be._jsonSchema))return Be.fromBase64String(t.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:$t("string",Be._jsonSchemaVersion),bytes:$t("string")};/**
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
 */class Ap{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new nt(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class bp{constructor(t){this._methodName=t}}/**
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
 */class En{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new nt(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new nt(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Tt(this._lat,t._lat)||Tt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:En._jsonSchemaVersion}}static fromJSON(t){if(Zs(t,En._jsonSchema))return new En(t.latitude,t.longitude)}}En._jsonSchemaVersion="firestore/geoPoint/1.0",En._jsonSchema={type:$t("string",En._jsonSchemaVersion),latitude:$t("number"),longitude:$t("number")};/**
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
 */class on{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}toJSON(){return{type:on._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Zs(t,on._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new on(t.vectorValues);throw new nt(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}on._jsonSchemaVersion="firestore/vectorValue/1.0",on._jsonSchema={type:$t("string",on._jsonSchemaVersion),vectorValues:$t("object")};/**
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
 */const II=/^__.*__$/;class AI{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new vr(t,this.data,this.fieldMask,n,this.fieldTransforms):new ei(t,this.data,n,this.fieldTransforms)}}function Sp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ct(40011,{dataSource:e})}}class zl{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new zl({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),r=this.i({path:n,arrayElement:!1});return r.mc(t),r}fc(t){var s;const n=(s=this.path)==null?void 0:s.child(t),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return no(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(Sp(this.dataSource)&&II.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class bI{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||To(t)}I(t,n,r,s=!1){return new zl({dataSource:t,methodName:n,targetDoc:r,path:ee.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function SI(e){const t=e._freezeSettings(),n=To(e._databaseId);return new bI(e._databaseId,!!t.ignoreUndefinedProperties,n)}function RI(e,t,n,r,s,i={}){const a=e.I(i.merge||i.mergeFields?2:0,t,n,s);Dp("Data must be an object, but it was:",a,r);const l=Cp(r,a);let u,h;if(i.merge)u=new $e(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=Gl(t,p,n);if(!a.contains(y))throw new nt(U.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);DI(d,y)||d.push(y)}u=new $e(d),h=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=a.fieldTransforms;return new AI(new Ue(l),u,h)}function Rp(e,t){if(Pp(e=lr(e)))return Dp("Unsupported field value:",t,e),Cp(e,t);if(e instanceof bp)return function(r,s){if(!Sp(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Rp(l,s.gc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=lr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Fw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Dt.fromDate(r);return{timestampValue:qa(s.serializer,i)}}if(r instanceof Dt){const i=new Dt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qa(s.serializer,i)}}if(r instanceof En)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:Yw(s.serializer,r._byteString)};if(r instanceof he){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.yc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ap(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof on)return function(a,l){const u=a instanceof on?a.toArray():a;return{mapValue:{fields:{[Bd]:{stringValue:jd},[Ua]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return xl(l.serializer,d)})}}}}}}(r,s);if(cp(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${Al(r)}`)}(e,t)}function Cp(e,t){const n={};return xd(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gr(e,(r,s)=>{const i=Rp(s,t.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Pp(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Dt||e instanceof En||e instanceof Be||e instanceof he||e instanceof bp||e instanceof on||cp(e))}function Dp(e,t,n){if(!Pp(n)||!Od(n)){const r=Al(n);throw r==="an object"?t.yc(e+" a custom object"):t.yc(e+" "+r)}}function Gl(e,t,n){if((t=lr(t))instanceof Ap)return t._internalPath;if(typeof t=="string")return PI(e,t);throw no("Field path arguments must be of type string or ",e,!1,void 0,n)}const CI=new RegExp("[~\\*/\\[\\]]");function PI(e,t,n){if(t.search(CI)>=0)throw no(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ap(...t.split("."))._internalPath}catch{throw no(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function no(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new nt(U.INVALID_ARGUMENT,l+e+u)}function DI(e,t){return e.some(n=>n.isEqual(t))}const kh="@firebase/firestore",xh="4.14.0";/**
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
 */class Vp{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new VI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(Gl("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VI extends Vp{data(){return super.data()}}function NI(e,t,n){let r;return r=e?e.toFirestore(t):t,r}class Ii{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Mr extends Vp{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Gl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new nt(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Mr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mr._jsonSchema={type:$t("string",Mr._jsonSchemaVersion),bundleSource:$t("string","DocumentSnapshot"),bundleName:$t("string"),bundle:$t("string")};class Vi extends Mr{data(t={}){return super.data(t)}}class Ds{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ii(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Vi(this._firestore,this._userDataWriter,r.key,r,new Ii(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new nt(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new Vi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ii(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Vi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ii(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:OI(l.type),doc:u,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new nt(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ds._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Il.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function OI(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ct(61501,{type:e})}}/**
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
 */Ds._jsonSchemaVersion="firestore/querySnapshot/1.0",Ds._jsonSchema={type:$t("string",Ds._jsonSchemaVersion),bundleSource:$t("string","QuerySnapshot"),bundleName:$t("string"),bundle:$t("string")};function kI(e,t,n){e=qi(e,he);const r=qi(e.firestore,ql),s=NI(e.converter,t),i=SI(r);return Np(r,[RI(i,"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,sn.none())])}function xI(e){return Np(qi(e.firestore,ql),[new Ml(e._key,sn.none())])}function Np(e,t){const n=wI(e);return mI(n,t)}(function(t,n=!0){jE(CE),$n(new An("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ql(new qE(r.getProvider("auth-internal")),new KE(a,r.getProvider("app-check-internal")),fw(a,s),a);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),rn(kh,xh,t),rn(kh,xh,"esm2020")})();const Op="@firebase/installations",Kl="0.6.21";/**
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
 */const kp=1e4,xp=`w:${Kl}`,Mp="FIS_v2",MI="https://firebaseinstallations.googleapis.com/v1",LI=60*60*1e3,FI="installations",UI="Installations";/**
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
 */const BI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},dr=new mo(FI,UI,BI);function Lp(e){return e instanceof _r&&e.code.includes("request-failed")}/**
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
 */function Fp({projectId:e}){return`${MI}/projects/${e}/installations`}function Up(e){return{token:e.token,requestStatus:2,expiresIn:$I(e.expiresIn),creationTime:Date.now()}}async function Bp(e,t){const r=(await t.json()).error;return dr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function jI(e,{refreshToken:t}){const n=jp(e);return n.append("Authorization",HI(t)),n}async function $p(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $I(e){return Number(e.replace("s","000"))}function HI(e){return`${Mp} ${e}`}/**
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
 */async function qI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Fp(e),s=jp(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:Mp,appId:e.appId,sdkVersion:xp},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await $p(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Up(h.authToken)}}else throw await Bp("Create Installation",u)}/**
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
 */function Hp(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function zI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const GI=/^[cdef][\w-]{21}$/,Qa="";function KI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=WI(e);return GI.test(n)?n:Qa}catch{return Qa}}function WI(e){return zI(e).substr(0,22)}/**
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
 */function So(e){return`${e.appName}!${e.appId}`}/**
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
 */const qp=new Map;function zp(e,t){const n=So(e);Gp(n,t),QI(n,t)}function Gp(e,t){const n=qp.get(e);if(n)for(const r of n)r(t)}function QI(e,t){const n=JI();n&&n.postMessage({key:e,fid:t}),YI()}let sr=null;function JI(){return!sr&&"BroadcastChannel"in self&&(sr=new BroadcastChannel("[Firebase] FID Change"),sr.onmessage=e=>{Gp(e.data.key,e.data.fid)}),sr}function YI(){qp.size===0&&sr&&(sr.close(),sr=null)}/**
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
 */const XI="firebase-installations-database",ZI=1,pr="firebase-installations-store";let ha=null;function Wl(){return ha||(ha=_o(XI,ZI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pr)}}})),ha}async function ro(e,t){const n=So(e),s=(await Wl()).transaction(pr,"readwrite"),i=s.objectStore(pr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&zp(e,t.fid),t}async function Kp(e){const t=So(e),r=(await Wl()).transaction(pr,"readwrite");await r.objectStore(pr).delete(t),await r.done}async function Ro(e,t){const n=So(e),s=(await Wl()).transaction(pr,"readwrite"),i=s.objectStore(pr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&zp(e,l.fid),l}/**
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
 */async function Ql(e){let t;const n=await Ro(e.appConfig,r=>{const s=tA(r),i=eA(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Qa?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function tA(e){const t=e||{fid:KI(),registrationStatus:0};return Wp(t)}function eA(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(dr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=nA(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:rA(e)}:{installationEntry:t}}async function nA(e,t){try{const n=await qI(e,t);return ro(e.appConfig,n)}catch(n){throw Lp(n)&&n.customData.serverCode===409?await Kp(e.appConfig):await ro(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function rA(e){let t=await Mh(e.appConfig);for(;t.registrationStatus===1;)await Hp(100),t=await Mh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ql(e);return r||n}return t}function Mh(e){return Ro(e,t=>{if(!t)throw dr.create("installation-not-found");return Wp(t)})}function Wp(e){return sA(e)?{fid:e.fid,registrationStatus:0}:e}function sA(e){return e.registrationStatus===1&&e.registrationTime+kp<Date.now()}/**
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
 */async function iA({appConfig:e,heartbeatServiceProvider:t},n){const r=oA(e,n),s=jI(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:xp,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},u=await $p(()=>fetch(r,l));if(u.ok){const h=await u.json();return Up(h)}else throw await Bp("Generate Auth Token",u)}function oA(e,{fid:t}){return`${Fp(e)}/${t}/authTokens:generate`}/**
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
 */async function Jl(e,t=!1){let n;const r=await Ro(e.appConfig,i=>{if(!Qp(i))throw dr.create("not-registered");const a=i.authToken;if(!t&&cA(a))return i;if(a.requestStatus===1)return n=aA(e,t),i;{if(!navigator.onLine)throw dr.create("app-offline");const l=hA(i);return n=lA(e,l),l}});return n?await n:r.authToken}async function aA(e,t){let n=await Lh(e.appConfig);for(;n.authToken.requestStatus===1;)await Hp(100),n=await Lh(e.appConfig);const r=n.authToken;return r.requestStatus===0?Jl(e,t):r}function Lh(e){return Ro(e,t=>{if(!Qp(t))throw dr.create("not-registered");const n=t.authToken;return fA(n)?{...t,authToken:{requestStatus:0}}:t})}async function lA(e,t){try{const n=await iA(e,t),r={...t,authToken:n};return await ro(e.appConfig,r),n}catch(n){if(Lp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Kp(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await ro(e.appConfig,r)}throw n}}function Qp(e){return e!==void 0&&e.registrationStatus===2}function cA(e){return e.requestStatus===2&&!uA(e)}function uA(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+LI}function hA(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function fA(e){return e.requestStatus===1&&e.requestTime+kp<Date.now()}/**
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
 */async function dA(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ql(t);return r?r.catch(console.error):Jl(t).catch(console.error),n.fid}/**
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
 */async function pA(e,t=!1){const n=e;return await gA(n),(await Jl(n,t)).token}async function gA(e){const{registrationPromise:t}=await Ql(e);t&&await t}/**
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
 */function mA(e){if(!e||!e.options)throw fa("App Configuration");if(!e.name)throw fa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw fa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function fa(e){return dr.create("missing-app-config-values",{valueName:e})}/**
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
 */const Jp="installations",_A="installations-internal",yA=e=>{const t=e.getProvider("app").getImmediate(),n=mA(t),r=yo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vA=e=>{const t=e.getProvider("app").getImmediate(),n=yo(t,Jp).getImmediate();return{getId:()=>dA(n),getToken:s=>pA(n,s)}};function EA(){$n(new An(Jp,yA,"PUBLIC")),$n(new An(_A,vA,"PRIVATE"))}EA();rn(Op,Kl);rn(Op,Kl,"esm2020");/**
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
 */const wA="/firebase-messaging-sw.js",TA="/firebase-cloud-messaging-push-scope",Yp="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",IA="https://fcmregistrations.googleapis.com/v1",Xp="google.c.a.c_id",AA="google.c.a.c_l",bA="google.c.a.ts",SA="google.c.a.e",Fh=1e4;var Uh;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Uh||(Uh={}));/**
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
 */var zs;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(zs||(zs={}));/**
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
 */function gn(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function RA(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const da="fcm_token_details_db",CA=5,Bh="fcm_token_object_Store";async function PA(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(da))return null;let t=null;return(await _o(da,CA,{upgrade:async(r,s,i,a)=>{if(s<2||!r.objectStoreNames.contains(Bh))return;const l=a.objectStore(Bh),u=await l.index("fcmSenderId").get(e);if(await l.clear(),!!u){if(s===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;t={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:gn(h.vapidKey)}}}else if(s===3){const h=u;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:gn(h.auth),p256dh:gn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:gn(h.vapidKey)}}}else if(s===4){const h=u;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:gn(h.auth),p256dh:gn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:gn(h.vapidKey)}}}}}})).close(),await sa(da),await sa("fcm_vapid_details_db"),await sa("undefined"),DA(t)?t:null}function DA(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const VA="firebase-messaging-database",NA=1,gr="firebase-messaging-store";let pa=null;function Yl(){return pa||(pa=_o(VA,NA,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(gr)}}})),pa}async function Zp(e){const t=Zl(e),r=await(await Yl()).transaction(gr).objectStore(gr).get(t);if(r)return r;{const s=await PA(e.appConfig.senderId);if(s)return await Xl(e,s),s}}async function Xl(e,t){const n=Zl(e),s=(await Yl()).transaction(gr,"readwrite");return await s.objectStore(gr).put(t,n),await s.done,t}async function OA(e){const t=Zl(e),r=(await Yl()).transaction(gr,"readwrite");await r.objectStore(gr).delete(t),await r.done}function Zl({appConfig:e}){return e.appId}/**
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
 */const kA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},de=new mo("messaging","Messaging",kA);/**
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
 */async function xA(e,t){const n=await ec(e),r=eg(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(tc(e.appConfig),s)).json()}catch(a){throw de.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw de.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw de.create("token-subscribe-no-token");return i.token}async function MA(e,t){const n=await ec(e),r=eg(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${tc(e.appConfig)}/${t.token}`,s)).json()}catch(a){throw de.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw de.create("token-update-failed",{errorInfo:a})}if(!i.token)throw de.create("token-update-no-token");return i.token}async function tg(e,t){const r={method:"DELETE",headers:await ec(e)};try{const i=await(await fetch(`${tc(e.appConfig)}/${t}`,r)).json();if(i.error){const a=i.error.message;throw de.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw de.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function tc({projectId:e}){return`${IA}/projects/${e}/registrations`}async function ec({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function eg({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==Yp&&(s.web.applicationPubKey=r),s}/**
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
 */const LA=7*24*60*60*1e3;async function FA(e){const t=await jA(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:gn(t.getKey("auth")),p256dh:gn(t.getKey("p256dh"))},r=await Zp(e.firebaseDependencies);if(r){if($A(r.subscriptionOptions,n))return Date.now()>=r.createTime+LA?BA(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await tg(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return jh(e.firebaseDependencies,n)}else return jh(e.firebaseDependencies,n)}async function UA(e){const t=await Zp(e.firebaseDependencies);t&&(await tg(e.firebaseDependencies,t.token),await OA(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function BA(e,t){try{const n=await MA(e.firebaseDependencies,t),r={...t,token:n,createTime:Date.now()};return await Xl(e.firebaseDependencies,r),n}catch(n){throw n}}async function jh(e,t){const r={token:await xA(e,t),createTime:Date.now(),subscriptionOptions:t};return await Xl(e,r),r.token}async function jA(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:RA(t)})}function $A(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&s&&i}/**
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
 */function $h(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return HA(t,e),qA(t,e),zA(t,e),t}function HA(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const i=t.notification.icon;i&&(e.notification.icon=i)}function qA(e,t){t.data&&(e.data=t.data)}function zA(e,t){var s,i,a,l;if(!t.fcmOptions&&!((s=t.notification)!=null&&s.click_action))return;e.fcmOptions={};const n=((i=t.fcmOptions)==null?void 0:i.link)??((a=t.notification)==null?void 0:a.click_action);n&&(e.fcmOptions.link=n);const r=(l=t.fcmOptions)==null?void 0:l.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}/**
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
 */function GA(e){return typeof e=="object"&&!!e&&Xp in e}/**
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
 */function KA(e){if(!e||!e.options)throw ga("App Configuration Object");if(!e.name)throw ga("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw ga(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ga(e){return de.create("missing-app-config-values",{valueName:e})}/**
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
 */class WA{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=KA(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function ng(e){try{e.swRegistration=await navigator.serviceWorker.register(wA,{scope:TA}),e.swRegistration.update().catch(()=>{}),await QA(e.swRegistration)}catch(t){throw de.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function QA(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Fh} ms`)),Fh),s=e.installing||e.waiting;e.active?(clearTimeout(r),t()):s?s.onstatechange=i=>{var a;((a=i.target)==null?void 0:a.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function JA(e,t){if(!t&&!e.swRegistration&&await ng(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw de.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function YA(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Yp)}/**
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
 */async function rg(e,t){if(!navigator)throw de.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw de.create("permission-blocked");return await YA(e,t==null?void 0:t.vapidKey),await JA(e,t==null?void 0:t.serviceWorkerRegistration),FA(e)}/**
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
 */async function XA(e,t,n){const r=ZA(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Xp],message_name:n[AA],message_time:n[bA],message_device_time:Math.floor(Date.now()/1e3)})}function ZA(e){switch(e){case zs.NOTIFICATION_CLICKED:return"notification_open";case zs.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function tb(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===zs.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler($h(n)):e.onMessageHandler.next($h(n)));const r=n.data;GA(r)&&r[SA]==="1"&&await XA(e,n.messageType,r)}const Hh="@firebase/messaging",qh="0.12.25";/**
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
 */const eb=e=>{const t=new WA(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>tb(t,n)),t},nb=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>rg(t,r)}};function rb(){$n(new An("messaging",eb,"PUBLIC")),$n(new An("messaging-internal",nb,"PRIVATE")),rn(Hh,qh),rn(Hh,qh,"esm2020")}/**
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
 */async function sb(){try{await _d()}catch{return!1}return typeof window<"u"&&md()&&bv()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function ib(e){if(!navigator)throw de.create("only-available-in-window");return e.swRegistration||await ng(e),UA(e)}/**
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
 */function sg(e=Id()){return sb().then(t=>{if(!t)throw de.create("unsupported-browser")},t=>{throw de.create("indexed-db-unsupported")}),yo(lr(e),"messaging").getImmediate()}async function ig(e,t){return e=lr(e),rg(e,t)}function ob(e){return e=lr(e),ib(e)}rb();const nc=Td({apiKey:"AIzaSyD_O5AAH6ESu1Lls8I9q8parzCEIuWCKts",authDomain:"partita-domani-a-roma.firebaseapp.com",projectId:"partita-domani-a-roma",storageBucket:"partita-domani-a-roma.firebasestorage.app",messagingSenderId:"31480853662",appId:"1:31480853662:web:71c40bb1c92ec7ee2e778f"}),og=EI(nc);function Ja(){return"Notification"in window&&"serviceWorker"in navigator}async function ab(){if(!Ja())return"unsupported";if(await Notification.requestPermission()!=="granted")return"denied";const t=await navigator.serviceWorker.ready,n=sg(nc),r=await ig(n,{vapidKey:"BL50BULN2vVjPWV50HRQel8YKvda3ElC92lKEbjxjwNll2RCIJ2_m2guRIZYaeDHcBP_-NGzrDFk6uClm3cC2pk",serviceWorkerRegistration:t});return r?(await kI(Ip(og,"subscriptions",r),{token:r,createdAt:new Date().toISOString()}),"granted"):"error"}async function lb(){const e=await navigator.serviceWorker.ready,t=sg(nc);try{const n=await ig(t,{vapidKey:"BL50BULN2vVjPWV50HRQel8YKvda3ElC92lKEbjxjwNll2RCIJ2_m2guRIZYaeDHcBP_-NGzrDFk6uClm3cC2pk",serviceWorkerRegistration:e});n&&await xI(Ip(og,"subscriptions",n))}catch{}await ob(t)}const cb=["aria-label","aria-expanded"],ub={key:0,class:"notify-wrap"},hb=["aria-label"],fb={key:0,width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},db={key:1,width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},pb={key:0,class:"notify-label"},gb={class:"center","aria-live":"polite","aria-atomic":"true"},mb={key:0,class:"next-match"},_b={key:1},yb={class:"orario"},ma=80,Ai={__name:"HomeView",props:{dayOffset:{type:Number,default:1},testMode:{type:String,default:null}},setup(e){const t=e,n=Oe("appState"),r=Ln(null),s=Ln(null),i=Ln(""),a=t.dayOffset===0?"oggi":"domani",l=Ja(),u=Ln(Ja()?Notification.permission==="granted"?"subscribed":Notification.permission==="denied"?"denied":"idle":"unsupported");async function h(){n.loaded=!1;try{const v=await ab();u.value=v==="granted"?"subscribed":v,Ve("notify_subscribe",{result:v})}catch{u.value="idle"}finally{n.loaded=!0}}async function d(){n.loaded=!1;try{await lb(),u.value="idle",Ve("notify_unsubscribe")}catch{u.value="subscribed"}finally{n.loaded=!0}}function p(v){return new Date(v+"T12:00:00").toLocaleDateString("it-IT",{weekday:"long",day:"numeric",month:"long"})}function y(v){return v.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Rome"})}function I(v){const m=Math.floor(Math.random()*10)+1,b=`/partita-domani-a-roma/images/${v?"si":"no"}-sfondo${m}.jpg`;return i.value=b,new Promise(A=>{const S=new Image;S.onload=S.onerror=A,S.src=b})}async function k(){n.loaded=!1;try{if(t.testMode==="si")r.value={timestamp:new Date,homeTeam:{name:"roma",article:"la"},awayTeamName:"Test FC"};else if(t.testMode!=="no"){const v=new Date;v.setDate(v.getDate()+t.dayOffset),r.value=await Lu(v)}if(!r.value&&t.testMode==null)if(t.dayOffset===0){const v=new Date;v.setDate(v.getDate()+1),await Lu(v)||(s.value=await Fu())}else s.value=await Fu();await I(!!r.value),Ve("result_viewed",{result:r.value?"si":"no",day:a})}finally{n.loaded=!0}}const O=!!navigator.share;async function $(){const v=r.value?`C'è la partita ${a} a Roma! Gioca ${r.value.homeTeam.article} ${r.value.homeTeam.name} alle ${y(r.value.timestamp)}.`:`Non c'è la partita ${a} a Roma.`;Ve("share_tapped");try{await navigator.share({title:"C'è la partita a Roma?",text:v,url:window.location.href}),Ve("share_completed")}catch{}}let W=0,j=0,q=!1;function Q(v){n.menuOpen||(W=v.touches[0].clientY)}function st(v){if(v.preventDefault(),n.menuOpen)return;const m=v.touches[0].clientY-W;m>0&&(j=Math.min(m,ma*1.5),!q&&j>=ma?(q=!0,n.loaded=!1):q&&j<ma&&(q=!1,n.loaded=!0))}async function gt(){const v=q;j=0,q=!1,v?(Ve("pull_to_refresh"),await k()):n.loaded=!0}return Js(k),(v,m)=>{const T=Ys("RouterLink");return Xt(),_e(Pe,null,[rt("button",{class:"menu","aria-label":Ot(n).menuOpen?"Chiudi menu":"Apri menu","aria-expanded":Ot(n).menuOpen.toString(),"aria-controls":"main-menu",onClick:m[0]||(m[0]=b=>{Ot(n).menuOpen=!Ot(n).menuOpen,Ot(Ve)("menu_opened")})},null,8,cb),Ot(l)&&u.value!=="unsupported"&&u.value!=="denied"?(Xt(),_e("div",ub,[rt("button",{class:"notify-btn","aria-label":u.value==="subscribed"?"Disattiva notifiche":"Attiva notifiche",onClick:m[1]||(m[1]=b=>u.value==="subscribed"?d():h())},[u.value!=="subscribed"?(Xt(),_e("svg",fb,[...m[3]||(m[3]=[rt("path",{d:"M11 3C8.79086 3 7 4.79086 7 7V9.2C7 10.1 6.7 10.97 6.15 11.65L5.2 12.8C4.64 13.48 5.12 14.5 6 14.5H16C16.88 14.5 17.36 13.48 16.8 12.8L15.85 11.65C15.3 10.97 15 10.1 15 9.2V7C15 4.79086 13.2091 3 11 3Z",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),rt("path",{d:"M9 17C9.4 17.6 10.1 18 11 18C11.9 18 12.6 17.6 13 17",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),rt("path",{d:"M5 5L17 17",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):(Xt(),_e("svg",db,[...m[4]||(m[4]=[rt("path",{d:"M11 3C8.79086 3 7 4.79086 7 7V9.2C7 10.1 6.7 10.97 6.15 11.65L5.2 12.8C4.64 13.48 5.12 14.5 6 14.5H16C16.88 14.5 17.36 13.48 16.8 12.8L15.85 11.65C15.3 10.97 15 10.1 15 9.2V7C15 4.79086 13.2091 3 11 3Z",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),rt("path",{d:"M9 17C9.4 17.6 10.1 18 11 18C11.9 18 12.6 17.6 13 17",stroke:"#FFFFFF","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])]))],8,hb),u.value!=="subscribed"?(Xt(),_e("span",pb,"attiva le notifiche")):mn("",!0)])):mn("",!0),O?(Xt(),_e("button",{key:1,class:"share-btn",onClick:$,"aria-label":"Condividi questa pagina"},[...m[5]||(m[5]=[rt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",focusable:"false"},[rt("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),rt("polyline",{points:"16 6 12 2 8 6"}),rt("line",{x1:"12",y1:"2",x2:"12",y2:"15"})],-1)])])):mn("",!0),rt("main",{class:Fn(["cont-inner",{menu_opened:Ot(n).menuOpen}]),style:co({backgroundImage:`url(${i.value})`}),onTouchstartPassive:Q,onTouchmove:Q_(st,["prevent"]),onTouchendPassive:gt},[rt("div",gb,[rt("h1",null,[m[6]||(m[6]=Ne("C'è la partita",-1)),m[7]||(m[7]=rt("br",null,null,-1)),Ne(Je(Ot(a))+" a Roma?",1)]),rt("h2",null,Je(r.value?"SI":"No"),1),!r.value&&s.value?(Xt(),_e("p",mb,[m[8]||(m[8]=rt("b",null,"Prossima partita:",-1)),Ne(" "+Je(p(s.value.date))+" · ",1),rt("span",{class:Fn(s.value.homeTeam.name)},Je(s.value.homeTeam.name),3),s.value.timestamp?(Xt(),_e(Pe,{key:0},[Ne(" · ore "+Je(y(s.value.timestamp)),1)],64)):mn("",!0)])):mn("",!0),r.value?(Xt(),_e("h3",_b,[Ne(" Gioca "+Je(r.value.homeTeam.article)+" ",1),rt("span",{class:Fn(r.value.homeTeam.name)},Je(r.value.homeTeam.name),3),m[9]||(m[9]=rt("br",null,null,-1)),m[10]||(m[10]=Ne(" alle ",-1)),rt("span",yb,Je(y(r.value.timestamp)),1)])):mn("",!0)]),jt(T,{class:"switch",to:Ot(a)==="domani"?"/oggi":"/","aria-label":Ot(a)==="domani"?"Controlla se c'è la partita oggi":"Controlla se c'è la partita domani",onClick:m[2]||(m[2]=b=>Ot(Ve)("switch_day",{to:Ot(a)==="domani"?"oggi":"domani"}))},{default:Qs(()=>[Ne(Je(Ot(a)==="domani"?"e oggi?":"e domani?"),1)]),_:1},8,["to","aria-label"])],38)],64)}}},vb={class:"policy-bar"},Eb={__name:"CookiePolicy",setup(e){const t=Oe("appState");Js(()=>{t.loaded=!0});function n(){localStorage.removeItem("cookiesChoice"),Ve("consent_reset"),window.location.reload()}return(r,s)=>{const i=Ys("RouterLink");return Xt(),_e(Pe,null,[rt("div",{class:"policy-page"},[rt("div",{class:"policy-content"},[s[0]||(s[0]=Ui('<h1>Cookie Policy</h1><p> Informativa estesa ai sensi del Reg. UE 2016/679 (GDPR), del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018, e delle Linee guida del Garante per la protezione dei dati personali del 10 giugno 2021 in materia di cookie e altri strumenti di tracciamento. </p><h1>Titolare del trattamento</h1><p> Valerio Pierbattista<br> Email: <a href="mailto:omegaiori@gmail.com">omegaiori@gmail.com</a><br> Sito: <strong>vlrprbttst.github.io/partita-domani-a-roma</strong></p><h1>Cosa sono i cookie</h1><p> I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell&#39;utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Strumenti analoghi (come il localStorage) operano in modo simile e sono coperti dalla presente informativa. </p><h1>Cookie e strumenti utilizzati</h1><h1>1. Strumenti tecnici (senza consenso)</h1><p> Il sito utilizza il <strong>localStorage</strong> del browser per memorizzare la preferenza dell&#39;utente in merito ai cookie analitici. Non si tratta di un cookie ma di un dato locale al dispositivo, non trasmesso a terzi, che persiste fino alla cancellazione manuale. </p><ul><li><p><strong>cookiesChoice</strong> — localStorage — Scopo: memorizzare la scelta accetta/rifiuta cookie analitici — Durata: persistente fino a cancellazione manuale — Terze parti: nessuna </p></li></ul><h1>2. Cookie analitici (solo con consenso)</h1><p> Previa accettazione da parte dell&#39;utente, il sito utilizza <strong>Google Analytics 4</strong> (Google LLC, USA) per raccogliere dati statistici anonimi sull&#39;utilizzo del sito. Google Analytics opera in modalità <em>Consent Mode v2</em>: in assenza di consenso, nessun cookie di profilazione viene impostato e nessun dato personale viene trasmesso. </p><ul><li><p><strong>_ga</strong> — Cookie — Scopo: distinguere gli utenti unici — Durata: 2 anni — Titolare: Google LLC </p></li><li><p><strong>_ga_T02RCCNKG9</strong> — Cookie — Scopo: mantenere lo stato della sessione Analytics — Durata: 2 anni — Titolare: Google LLC </p></li></ul><p> I dati raccolti da Google Analytics includono: tipo di dispositivo e browser, paese di accesso, pagine visitate, durata della visita. Nessun dato personale identificativo (nome, email, IP completo) viene raccolto o trasmesso. Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a> e <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">opt-out da Google Analytics</a>. </p><h1>3. Notifiche push (solo su consenso esplicito)</h1><p> Se l&#39;utente sceglie di attivare le notifiche push tramite l&#39;apposito bottone, il sito utilizza <strong>Firebase Cloud Messaging</strong> (Google LLC, USA) per inviare notifiche il giorno prima di una partita a Roma. L&#39;attivazione richiede il consenso esplicito del browser e può essere revocata in qualsiasi momento tramite l&#39;icona campanella presente nell&#39;app. </p><ul><li><p><strong>Token FCM</strong> — Identificativo anonimo generato dal browser — Scopo: recapitare le notifiche push — Conservato su: Firebase Firestore (Google LLC, USA) — Durata: fino alla disattivazione da parte dell&#39;utente — Terze parti: Google LLC </p></li></ul><p> Il token FCM non contiene dati personali identificativi (nome, email, IP). Viene eliminato da Firestore non appena l&#39;utente disattiva le notifiche. Per maggiori informazioni: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Privacy e sicurezza in Firebase</a>. </p><h1>Cookie di terze parti</h1><p> Questo sito <strong>non utilizza</strong> cookie di social network (Facebook, Instagram, X/Twitter, TikTok), cookie pubblicitari né cookie di profilazione di alcun tipo. </p><h1>Gestione del consenso</h1><p> Al primo accesso viene mostrato un banner che consente di accettare o rifiutare i cookie analitici. La scelta può essere modificata in qualsiasi momento tramite il bottone qui sotto. </p>',22)),rt("button",{class:"reset-btn",onClick:n},"Modifica preferenze cookie"),s[1]||(s[1]=Ui('<h1>Gestione tramite browser</h1><p> È possibile bloccare, cancellare o limitare i cookie direttamente dalle impostazioni del proprio browser. Le istruzioni variano a seconda del browser utilizzato: </p><ul><li><p><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></p></li><li><p><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></p></li><li><p><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></p></li><li><p><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></p></li></ul><p> Per informazioni generali sulla gestione dei cookie: <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>. </p><h1>Modifiche alla presente informativa</h1><p> Il Titolare si riserva di modificare la presente Cookie Policy in qualsiasi momento. Le modifiche hanno efficacia dal momento della pubblicazione sul sito. <br><strong>Ultimo aggiornamento: maggio 2026</strong></p>',6))])]),rt("div",vb,[jt(i,{class:"back-btn",to:"/"},{default:Qs(()=>[...s[2]||(s[2]=[Ne("← Torna alla home",-1)])]),_:1})])],64)}}},wb=ov({history:Fy("/partita-domani-a-roma/"),routes:[{path:"/",component:Ai,props:{dayOffset:1}},{path:"/oggi",component:Ai,props:{dayOffset:0}},{path:"/si",component:Ai,props:{testMode:"si"}},{path:"/no",component:Ai,props:{testMode:"no"}},{path:"/cookie-policy",component:Eb},{path:"/:pathMatch(.*)*",redirect:"/"}]}),Tb=["aria-hidden"],Ib={__name:"MenuPanel",props:{open:Boolean},emits:["toggle"],setup(e){return(t,n)=>{const r=Ys("RouterLink");return Xt(),_e("nav",{id:"main-menu",class:Fn(["menu-cont",{menu_opened:e.open}]),"aria-label":"Menu principale","aria-hidden":(!e.open).toString()},[n[2]||(n[2]=rt("div",{class:"stripes-top"},null,-1)),rt("button",{class:"close",onClick:n[0]||(n[0]=s=>t.$emit("toggle")),"aria-label":"Chiudi menu"}),n[3]||(n[3]=Ui("<h1>Perché?</h1><p> Questo servizio è dedicato a tutti i romani che non seguono il calcio, ma ne sono vittima ogni settimana: <b>traffico</b>, aree di parcheggio <b>transennate</b>, strade <b>chiuse con conseguente deviazione del traffico</b>. </p><p> Chi non segue il calcio spesso <b>scopre troppo tardi</b> lo svolgersi di una partita, e si trova a fronteggiare i disagi del caso <b>senza potersi organizzare in anticipo</b>. </p><h1>Installalo come app</h1><p> Puoi aggiungere questo sito alla schermata Home del tuo telefono e usarlo come una vera app, senza barre del browser. </p><p><b>Su Android</b>: apri il sito in Chrome, tocca i tre puntini in alto a destra e seleziona <b>Aggiungi a schermata Home</b> oppure <b>Installa app</b>. </p><p><b>Su iPhone</b>: apri il sito in Safari, tocca l&#39;icona di condivisione (il quadrato con la freccia in su) e seleziona <b>Aggiungi a schermata Home</b>. </p><h1>Privacy</h1>",8)),rt("p",null,[jt(r,{to:"/cookie-policy"},{default:Qs(()=>[...n[1]||(n[1]=[Ne("Cookie Policy",-1)])]),_:1})]),n[4]||(n[4]=Ui('<h1>Credits</h1><ul><li><p> Ideato e realizzato da <a href="https://www.linkedin.com/in/valeriopierbattista/" target="_blank" rel="noopener noreferrer">Valerio Pierbattista</a> e <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude.ai</a></p></li><li><p>Le immagini di sfondo sono prese da Google</p></li><li><p> Il repository del progetto è su <a href="https://github.com/vlrprbttst/partita-domani-a-roma/tree/rewrite-modern" target="_blank" rel="noopener noreferrer">Github</a></p></li><li><p> Le informazioni sulle partite sono prese da <a href="https://www.football-data.org" target="_blank" rel="noopener noreferrer">www.football-data.org</a></p></li></ul>',2))],10,Tb)}}},Ab={key:0,class:"analytics-notice"},bb={__name:"ConsentBanner",setup(e){const t=Ln(!1);function n(){typeof window.gtag=="function"&&window.gtag("consent","update",{analytics_storage:"granted"})}Js(()=>{const i=localStorage.getItem("cookiesChoice");i==="accepted"?n():i||(t.value=!0)});function r(){localStorage.setItem("cookiesChoice","accepted"),t.value=!1,n(),Ve("consent_accepted")}function s(){localStorage.setItem("cookiesChoice","refused"),t.value=!1}return(i,a)=>{const l=Ys("RouterLink");return t.value?(Xt(),_e("div",Ab,[rt("p",null,[a[1]||(a[1]=Ne("Questo sito usa cookie di Google Analytics per statistiche anonime. ",-1)),jt(l,{to:"/cookie-policy"},{default:Qs(()=>[...a[0]||(a[0]=[Ne("Maggiori info",-1)])]),_:1})]),rt("div",{class:"analytics-notice__actions"},[rt("button",{onClick:s,"aria-label":"Rifiuta i cookie analitici"},"Rifiuta"),rt("button",{onClick:r,"aria-label":"Accetta i cookie analitici"},"Accetta")])])):mn("",!0)}}},Sb={key:0,class:"overlay",role:"status","aria-live":"polite","aria-label":"Caricamento in corso"},Rb={key:0,class:"install-banner",role:"banner","aria-label":"Installa l'app"},Cb=["src"],Pb={class:"cont",id:"main-content"},Db={__name:"App",setup(e){const t=Ks({loaded:!1,menuOpen:!1});vs("appState",t);const n=navigator.userAgent||navigator.vendor||window.opera,r=/iPad|iPhone|iPod/i.test(n)?"isMobile iOS":/Android/i.test(n)?"isMobile android":"",s=av();Es(()=>s.path,()=>{t.menuOpen=!1});let i=null;function a(){const y=new Date;y.setDate(y.getDate()+1),y.setHours(0,0,0,0),i=setTimeout(()=>window.location.reload(),y-Date.now())}const l=Ln(null),u=Ln(!1),h="/partita-domani-a-roma/";function d(y){y.preventDefault(),l.value=y}async function p(){if(!l.value)return;Ve("pwa_install_tapped"),l.value.prompt();const{outcome:y}=await l.value.userChoice;y==="accepted"&&Ve("pwa_install_accepted"),l.value=null}return Js(()=>{a(),window.addEventListener("beforeinstallprompt",d)}),hl(()=>{clearTimeout(i),window.removeEventListener("beforeinstallprompt",d)}),(y,I)=>{const k=Ys("RouterView");return Xt(),_e(Pe,null,[I[5]||(I[5]=rt("a",{href:"#main-content",class:"skip-link"},"Salta al contenuto",-1)),t.loaded?mn("",!0):(Xt(),_e("div",Sb,[...I[2]||(I[2]=[rt("div",{class:"message"},[rt("div",{class:"spin"})],-1)])])),rt("div",{class:Fn(["page",[Ot(r),{menu_opened:t.menuOpen}]])},[I[4]||(I[4]=rt("div",{class:"rotate-device"},null,-1)),jt(Ib,{open:t.menuOpen,onToggle:I[0]||(I[0]=O=>t.menuOpen=!t.menuOpen)},null,8,["open"]),jt(bb),l.value&&!u.value?(Xt(),_e("div",Rb,[rt("img",{src:`${Ot(h)}icons/android-chrome-192x192.png`,class:"install-banner__icon",alt:""},null,8,Cb),I[3]||(I[3]=rt("div",{class:"install-banner__text","aria-hidden":"true"},[rt("strong",null,"Partita a Roma?"),rt("span",null,"Aggiungi alla schermata home")],-1)),rt("button",{class:"install-banner__btn",onClick:p,"aria-label":"Installa l'app sulla schermata home"},"Installa"),rt("button",{class:"install-banner__close",onClick:I[1]||(I[1]=O=>u.value=!0),"aria-label":"Chiudi il banner di installazione"},"✕")])):mn("",!0),rt("div",Pb,[(Xt(),Wf(k,{key:Ot(s).path}))])],2)],64)}}};X_(Db).use(wb).mount("#app");"serviceWorker"in navigator&&navigator.serviceWorker.register("/partita-domani-a-roma/sw.js");
