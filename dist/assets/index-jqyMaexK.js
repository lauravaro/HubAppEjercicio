(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const C={name:sessionStorage.getItem("currentUser")?sessionStorage.getItem("currentUser"):""};let U=localStorage.getItem(C.name)?JSON.parse(localStorage.getItem(C.name)):{name:"",token:!1,fav:[]};const ae=e=>{C.name=e},Re=()=>C,ce=e=>{console.log(".....metiendo datos en el contexto"),U.fav=e==null?void 0:e.fav,U.name=e==null?void 0:e.name,U.token=e==null?void 0:e.token;const t=JSON.stringify(U);localStorage.removeItem(`${C.name}`),console.log(U.name),localStorage.setItem(`${C.name}`,t)},We=()=>`
    <div id="containerDashboard">
        <ul>
            <li>
                <figure id="navigatePokemon">
                    <img
                        src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761508/pngwing.com_r0hr9b.png"
                        alt="go to page pokemon"
                    />
                    <h2>POKEMON</h2>
                </figure>
            </li>
            <li>
                <figure>
                    <img
                        src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761641/pngwing.com_1_iq8zfk.png"
                        alt=" go to wacka topo game"
                    />
                    <h2>WACKA TOPO</h2>
                </figure>
            </li>
            <li>
                <figure>
                    <img
                        src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
                        alt="go to memory game"
                    />
                    <h2>MEMORY GAME</h2>
                </figure>
            </li>
        </ul>
    </div>
`,Ke=()=>{document.getElementById("navigatePokemon").addEventListener("click",()=>{q()})},le=()=>{document.querySelector("main").innerHTML=We(),document.querySelector("nav").style.display="flex",Ke(),Je()},Ge=()=>`
    <div id="containerLogin">
        <h1 id="titleLogin">LOGIN</h1>
        <input type="text" name="username" id="username" />
        <button id="buttonLogin">enviar</button>
    </div>
    `,Xe=()=>{const e=document.getElementById("buttonLogin"),t=document.getElementById("username");e.addEventListener("click",n=>{const r=t.value;if(localStorage.getItem(`${valueImput}USER`)){const o=localStorage.getItem(`${r}USER`),s=JSON.parse(o);s.tokem=!0;const i=JSON.stringify(s);localStorage.setItem("$(valueImput)USER",i),sessionStorage.setItem("currentUser","$(valueInput}USER"),ae("$valueInput"),ce(s)}else{const o={name:t.value,fav:[],token:!0},s=JSON.stringify(o);localStorage.setItem("&{valueInput}USER",s),sessionStorage.setItem("currentUser",`${r}USER`),ae("$valueInput}USER"),ce(o)}q()})},ue=()=>{document.querySelector("nav").style.display="none",document.querySelector("main").innerHTML=Ge(),Xe()},q=e=>{switch(pagesRender){case void 0:localStorage.getItem(Re().name)?le():ue();break;case"Pokemon":PrintPokemonPage();break;case"Dashboard":le();break;case"Topo":break;case"Login":ue();break}},Qe=()=>`
    <img
        src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679162/header_giqdug.jpg"
        alt="title hub game website (app)"
        class="logo"
    />
    <nav>
        <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
            alt=" change to style mode page"
            id="changeColor"
        />
        <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
            alt=" navigate to home app"
            id="buttonDashboard"
        />
        <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679055/logout_arz0gw.png"
            alt="logout"
            id="buttonLogout"
        />
    </nav>
`,Ye=()=>{document.getElementById("changeColor").addEventListener("click",r=>{const o=rt();document.body.style.background=o}),document.getElementById("buttonDashboard").addEventListener("click",r=>{q()}),document.getElementById("buttonLogout").addEventListener("click",r=>{const o=Re().name,s=localStorage.getItem(o),c={...JSON.parse(s),token:!1},p=JSON.stringify(c);localStorage.removeItem(o),sessionStorage.removeItem("currentUser"),localStorage.setItem(o,p),q()})},Ze=()=>{document.querySelector("header").innerHTML=Qe(),Ye()},et=()=>`
<h3><span>With 🤍 to </span> Neoland</h3>
`,tt=()=>{document.querySelector("footer").innerHTML=et()},nt=()=>{const e=document.getElementById("app"),t=document.createElement("header"),n=document.createElement("main"),r=document.createElement("footer");e.append(t,n,r),Ze(),tt()},rt=()=>{const e=(s,i)=>{s=Math.ceil(s),console.log(s),i=Math.floor(i),console.log("🚀 ~ file: changeColor.js:6 ~ randomNumber ~ max:",i);const c=Math.floor(Math.random()*(i-s+1)+s);return console.log("🚀 ~ file: changeColor.js:8 ~ randomNumber ~  random:",c),c};let t=e(0,255),n=e(0,255),r=e(0,255);return`rgb(${t},${n},${r})`};function Ae(e,t){return function(){return e.apply(t,arguments)}}const{toString:ot}=Object.prototype,{getPrototypeOf:te}=Object,H=(e=>t=>{const n=ot.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>H(t)===e),v=e=>t=>typeof t===e,{isArray:L}=Array,_=v("undefined");function st(e){return e!==null&&!_(e)&&e.constructor!==null&&!_(e.constructor)&&w(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Te=R("ArrayBuffer");function it(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Te(e.buffer),t}const at=v("string"),w=v("function"),Ne=v("number"),$=e=>e!==null&&typeof e=="object",ct=e=>e===!0||e===!1,D=e=>{if(H(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lt=R("Date"),ut=R("File"),ft=R("Blob"),dt=R("FileList"),pt=e=>$(e)&&w(e.pipe),mt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||w(e.append)&&((t=H(e))==="formdata"||t==="object"&&w(e.toString)&&e.toString()==="[object FormData]"))},ht=R("URLSearchParams"),yt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let c;for(r=0;r<i;r++)c=s[r],t.call(null,e[c],c,e)}}function Pe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Ce=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,xe=e=>!_(e)&&e!==Ce;function X(){const{caseless:e}=xe(this)&&this||{},t={},n=(r,o)=>{const s=e&&Pe(t,o)||o;D(t[s])&&D(r)?t[s]=X(t[s],r):D(r)?t[s]=X({},r):L(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&F(arguments[r],n);return t}const gt=(e,t,n,{allOwnKeys:r}={})=>(F(t,(o,s)=>{n&&w(o)?e[s]=Ae(o,n):e[s]=o},{allOwnKeys:r}),e),bt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Et=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},St=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},wt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ot=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Ne(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Rt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),At=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Tt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Nt=R("HTMLFormElement"),Pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ct=R("RegExp"),Le=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},xt=e=>{Le(e,(t,n)=>{if(w(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(w(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Lt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return L(e)?r(e):r(String(e).split(t)),n},Ut=()=>{},kt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),V="abcdefghijklmnopqrstuvwxyz",de="0123456789",Ue={DIGIT:de,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+de},_t=(e=16,t=Ue.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ft(e){return!!(e&&w(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Bt=e=>{const t=new Array(10),n=(r,o)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=L(r)?[]:{};return F(r,(i,c)=>{const p=n(i,o+1);!_(p)&&(s[c]=p)}),t[o]=void 0,s}}return r};return n(e,0)},Dt=R("AsyncFunction"),It=e=>e&&($(e)||w(e))&&w(e.then)&&w(e.catch),a={isArray:L,isArrayBuffer:Te,isBuffer:st,isFormData:mt,isArrayBufferView:it,isString:at,isNumber:Ne,isBoolean:ct,isObject:$,isPlainObject:D,isUndefined:_,isDate:lt,isFile:ut,isBlob:ft,isRegExp:Ct,isFunction:w,isStream:pt,isURLSearchParams:ht,isTypedArray:Rt,isFileList:dt,forEach:F,merge:X,extend:gt,trim:yt,stripBOM:bt,inherits:Et,toFlatObject:St,kindOf:H,kindOfTest:R,endsWith:wt,toArray:Ot,forEachEntry:At,matchAll:Tt,isHTMLForm:Nt,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:Le,freezeMethods:xt,toObjectSet:Lt,toCamelCase:Pt,noop:Ut,toFiniteNumber:kt,findKey:Pe,global:Ce,isContextDefined:xe,ALPHABET:Ue,generateString:_t,isSpecCompliantForm:Ft,toJSONObject:Bt,isAsyncFn:Dt,isThenable:It};function h(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ke=h.prototype,_e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_e[e]={value:e}});Object.defineProperties(h,_e);Object.defineProperty(ke,"isAxiosError",{value:!0});h.from=(e,t,n,r,o,s)=>{const i=Object.create(ke);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const jt=null;function Q(e){return a.isPlainObject(e)||a.isArray(e)}function Fe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(o,s){return o=Fe(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function qt(e){return a.isArray(e)&&!e.some(Q)}const Mt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,b){return!a.isUndefined(b[d])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function m(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,d,b){let E=f;if(f&&!b&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&qt(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(E=a.toArray(f)))return d=Fe(d),E.forEach(function(N,Ve){!(a.isUndefined(N)||N===null)&&t.append(i===!0?pe([d],Ve,s):i===null?d:d+"[]",m(N))}),!1}return Q(f)?!0:(t.append(pe(b,d,s),m(f)),!1)}const l=[],g=Object.assign(Mt,{defaultVisitor:u,convertValue:m,isVisitable:Q});function S(f,d){if(!a.isUndefined(f)){if(l.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));l.push(f),a.forEach(f,function(E,T){(!(a.isUndefined(E)||E===null)&&o.call(t,E,a.isString(T)?T.trim():T,d,g))===!0&&S(E,d?d.concat(T):[T])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ne(e,t){this._pairs=[],e&&z(e,this,t)}const Be=ne.prototype;Be.append=function(t,n){this._pairs.push([t,n])};Be.toString=function(t){const n=t?function(r){return t.call(this,r,me)}:me;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Ht(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function De(e,t,n){if(!t)return e;const r=n&&n.encode||Ht,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class he{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vt=typeof URLSearchParams<"u"?URLSearchParams:ne,$t=typeof FormData<"u"?FormData:null,zt=typeof Blob<"u"?Blob:null,Jt={isBrowser:!0,classes:{URLSearchParams:vt,FormData:$t,Blob:zt},protocols:["http","https","file","blob","url","data"]},je=typeof window<"u"&&typeof document<"u",Vt=(e=>je&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Wt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Kt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:je,hasStandardBrowserEnv:Vt,hasStandardBrowserWebWorkerEnv:Wt},Symbol.toStringTag,{value:"Module"})),O={...Kt,...Jt};function Gt(e,t){return z(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Xt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Qt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function qe(e){function t(n,r,o,s){let i=n[s++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),p=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,p?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Qt(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Xt(r),o,n,0)}),n}return null}function Yt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:Ie,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Gt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return z(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Yt(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const oe=re,Zt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),en=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Zt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function tn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const nn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function W(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function rn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function on(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class J{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(c,p,m){const u=k(p);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(o,u);(!l||o[l]===void 0||m===!0||m===void 0&&o[l]!==!1)&&(o[l||p]=I(c))}const i=(c,p)=>a.forEach(c,(m,u)=>s(m,u,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!nn(t)?i(en(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return tn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||W(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=k(i),i){const c=a.findKey(r,i);c&&(!n||W(r,r[c],c,n))&&(delete r[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||W(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=I(o),delete n[s];return}const c=t?rn(s):String(s).trim();c!==s&&delete n[s],n[c]=I(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,o=this.prototype;function s(i){const c=k(i);r[c]||(on(o,i),r[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(J.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(J);const A=J;function K(e,t){const n=this||oe,r=t||n,o=A.from(r.headers);let s=r.data;return a.forEach(e,function(c){s=c.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Me(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,h,{__CANCEL__:!0});function sn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const an=O.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function cn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ln(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function He(e,t){return e&&!cn(t)?ln(e,t):t}const un=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const c=a.isString(i)?o(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function fn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(p){const m=Date.now(),u=r[s];i||(i=m),n[o]=p,r[o]=m;let l=s,g=0;for(;l!==o;)g+=n[l++],l=l%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),m-i<t)return;const S=u&&m-u;return S?Math.round(g*1e3/S):void 0}}function ge(e,t){let n=0;const r=dn(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-n,p=r(c),m=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&m?(i-s)/p:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const pn=typeof XMLHttpRequest<"u",mn=pn&&function(e){return new Promise(function(n,r){let o=e.data;const s=A.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,p;function m(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let u;if(a.isFormData(o)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((u=s.getContentType())!==!1){const[d,...b]=u?u.split(";").map(E=>E.trim()).filter(Boolean):[];s.setContentType([d||"multipart/form-data",...b].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(d+":"+b))}const g=He(e.baseURL,e.url);l.open(e.method.toUpperCase(),De(g,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function S(){if(!l)return;const d=A.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};sn(function(N){n(N),m()},function(N){r(N),m()},E),l=null}if("onloadend"in l?l.onloadend=S:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(S)},l.onabort=function(){l&&(r(new h("Request aborted",h.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||Ie;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new h(b,E.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,l)),l=null},O.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&un(g))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&an.read(e.xsrfCookieName);d&&s.set(e.xsrfHeaderName,d)}o===void 0&&s.setContentType(null),"setRequestHeader"in l&&a.forEach(s.toJSON(),function(b,E){l.setRequestHeader(E,b)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",ge(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{l&&(r(!d||d.type?new B(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const f=fn(g);if(f&&O.protocols.indexOf(f)===-1){r(new h("Unsupported protocol "+f+":",h.ERR_BAD_REQUEST,e));return}l.send(o||null)})},Y={http:jt,xhr:mn};a.forEach(Y,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const be=e=>`- ${e}`,hn=e=>a.isFunction(e)||e===null||e===!1,ve={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!hn(n)&&(r=Y[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(be).join(`
`):" "+be(s[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Y};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function Ee(e){return G(e),e.headers=A.from(e.headers),e.data=K.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ve.getAdapter(e.adapter||oe.adapter)(e).then(function(r){return G(e),r.data=K.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Me(r)||(G(e),r&&r.response&&(r.response.data=K.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Se=e=>e instanceof A?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(m,u,l){return a.isPlainObject(m)&&a.isPlainObject(u)?a.merge.call({caseless:l},m,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(m,u,l){if(a.isUndefined(u)){if(!a.isUndefined(m))return r(void 0,m,l)}else return r(m,u,l)}function s(m,u){if(!a.isUndefined(u))return r(void 0,u)}function i(m,u){if(a.isUndefined(u)){if(!a.isUndefined(m))return r(void 0,m)}else return r(void 0,u)}function c(m,u,l){if(l in t)return r(m,u);if(l in e)return r(void 0,m)}const p={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(m,u)=>o(Se(m),Se(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=p[u]||o,g=l(e[u],t[u],u);a.isUndefined(g)&&l!==c||(n[u]=g)}),n}const $e="1.6.7",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const we={};se.transitional=function(t,n,r){function o(s,i){return"[Axios v"+$e+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,c)=>{if(t===!1)throw new h(o(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!we[i]&&(we[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,c):!0}};function yn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const c=e[s],p=c===void 0||i(c,s,e);if(p!==!0)throw new h("option "+s+" must be "+p,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}const Z={assertOptions:yn,validators:se},P=Z.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new he,response:new he}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&Z.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:Z.assertOptions(o,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=A.concat(i,s);const c=[];let p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(p=p&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const m=[];this.interceptors.response.forEach(function(d){m.push(d.fulfilled,d.rejected)});let u,l=0,g;if(!p){const f=[Ee.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,m),g=f.length,u=Promise.resolve(n);l<g;)u=u.then(f[l++],f[l++]);return u}g=c.length;let S=n;for(l=0;l<g;){const f=c[l++],d=c[l++];try{S=f(S)}catch(b){d.call(this,b);break}}try{u=Ee.call(this,S)}catch(f){return Promise.reject(f)}for(l=0,g=m.length;l<g;)u=u.then(m[l++],m[l++]);return u}getUri(t){t=x(this.defaults,t);const n=He(t.baseURL,t.url);return De(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,c){return this.request(x(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const j=M;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(c=>{r.subscribe(c),s=c}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,c){r.reason||(r.reason=new B(s,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(o){t=o}),cancel:t}}}const gn=ie;function bn(e){return function(n){return e.apply(null,n)}}function En(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,t])=>{ee[t]=e});const Sn=ee;function ze(e){const t=new j(e),n=Ae(j.prototype.request,t);return a.extend(n,j.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ze(x(e,o))},n}const y=ze(oe);y.Axios=j;y.CanceledError=B;y.CancelToken=gn;y.isCancel=Me;y.VERSION=$e;y.toFormData=z;y.AxiosError=h;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=bn;y.isAxiosError=En;y.mergeConfig=x;y.AxiosHeaders=A;y.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=ve.getAdapter;y.HttpStatusCode=Sn;y.default=y;const wn=async e=>await y.request(e).then(t=>t.data),On=async e=>{const t={method:"GET",url:`https://pokeapi.co/api/v2/pokemon/${e}`};return await wn(t)},Rn=e=>{const t=[];return e.forEach(n=>{n.type.forEach(r=>{!t.includes(r.type.name)&&t.push(r.type.name)})}),t};let Oe;const An=async()=>{const e=[];for(let t=1;t<151;t++)e.push(await On(t));return Tn(e)},Tn=e=>{const t=e.map(r=>({name:r.name,image:r.sprites.other.dream_world.front_default,type:r.types,id:r.id})),n=Rn(t);return Oe={pokemonData:t,type:n},Oe},Je=async()=>{console.log("actualizando info..."),await An()};Je();nt();initControler();getInfo();