if(!self.define){let e,t={};const s=(s,n)=>(s=new URL(s+".js",n).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let a={};const o=e=>s(e,r),c={module:{uri:r},exports:a,require:o};t[r]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(i(...e),a)))}}define([],(function(){"use strict";try{self["workbox:core:6.5.3"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:6.5.3"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=s(e)}}class i extends n{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class r{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let a=r&&r.handler;const o=e.method;if(!a&&this.i.has(o)&&(a=this.i.get(o)),!a)return;let c;try{c=a.handle({url:s,request:e,event:t,params:i})}catch(e){c=Promise.reject(e)}const h=r&&r.catchHandler;return c instanceof Promise&&(this.o||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:i})}catch(e){e instanceof Error&&(n=e)}if(this.o)return this.o.handle({url:s,request:e,event:t});throw n}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:e,sameOrigin:t,request:s,event:n});if(a)return i=a,(Array.isArray(i)&&0===i.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t="GET"){this.i.set(t,s(e))}setCatchHandler(e){this.o=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let a;const o=()=>(a||(a=new r,a.addFetchListener(),a.addCacheListener()),a);function c(e,s,r){let a;if("string"==typeof e){const t=new URL(e,location.href);a=new n((({url:e})=>e.href===t.href),s,r)}else if(e instanceof RegExp)a=new i(e,s,r);else if("function"==typeof e)a=new n(e,s,r);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return o().registerRoute(a),a}try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}const h={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null},f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=e=>[f.prefix,e,f.suffix].filter((e=>e&&e.length>0)).join("-"),u=e=>e||l(f.precache),d=e=>e||l(f.runtime);function p(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class w{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const b=new Set;function g(e){return"string"==typeof e?new Request(e):e}class y{constructor(e,t){this.h={},Object.assign(this,t),this.event=t.event,this.l=e,this.u=new w,this.p=[],this.g=[...e.plugins],this.m=new Map;for(const e of this.g)this.m.set(e,{});this.event.waitUntil(this.u.promise)}async fetch(e){const{event:s}=this;let n=g(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this.l.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw i&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:i.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=g(e);let s;const{cacheName:n,matchOptions:i}=this.l,r=await this.getCacheKey(t,"read"),a=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(r,a);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const n=g(e);var i;await(i=0,new Promise((e=>setTimeout(e,i))));const r=await this.getCacheKey(n,"write");if(!s)throw new t("cache-put-with-no-response",{url:(a=r.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const o=await this.v(s);if(!o)return!1;const{cacheName:c,matchOptions:h}=this.l,f=await self.caches.open(c),l=this.hasCallback("cacheDidUpdate"),u=l?await async function(e,t,s,n){const i=p(t.url,s);if(t.url===i)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await e.keys(t,r);for(const t of a)if(i===p(t.url,s))return e.match(t,n)}(f,r.clone(),["__WB_REVISION__"],h):null;try{await f.put(r,l?o.clone():o)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of b)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:c,oldResponse:u,newResponse:o.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this.h[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=g(await e({mode:t,request:n,event:this.event,params:this.params}));this.h[s]=n}return this.h[s]}hasCallback(e){for(const t of this.l.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this.l.plugins)if("function"==typeof t[e]){const s=this.m.get(t),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return t[e](i)};yield n}}waitUntil(e){return this.p.push(e),e}async doneWaiting(){let e;for(;e=this.p.shift();)await e}destroy(){this.u.resolve(null)}async v(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class m{constructor(e={}){this.cacheName=d(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,i=new y(this,{event:t,request:s,params:n}),r=this.R(i,s,t);return[r,this.q(r,i,s,t)]}async R(e,s,n){let i;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(i=await this.U(s,e),!i||"error"===i.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(i=await r({error:t,event:n,request:s}),i)break;if(!i)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))i=await t({event:n,request:s,response:i});return i}async q(e,t,s,n){let i,r;try{i=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),t.destroy(),r)throw r}}function v(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}function R(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:r.href}}class q{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class U{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this.L.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this.L=e}}let L,j;async function x(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const i=e.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=s?s(r):r,o=function(){if(void 0===L){const e=new Response("");if("body"in e)try{new Response(e.body),L=!0}catch(e){L=!1}L=!1}return L}()?i.body:await i.blob();return new Response(o,a)}class E extends m{constructor(e={}){e.cacheName=u(e.cacheName),super(e),this.j=!1!==e.fallbackToNetwork,this.plugins.push(E.copyRedirectedCacheableResponsesPlugin)}async U(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._(e,t):await this.C(e,t))}async C(e,s){let n;const i=s.params||{};if(!this.j)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const t=i.integrity,r=e.integrity,a=!r||r===t;n=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||t:void 0})),t&&a&&"no-cors"!==e.mode&&(this.N(),await s.cachePut(e,n.clone()))}return n}async _(e,s){this.N();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}N(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==E.copyRedirectedCacheableResponsesPlugin&&(n===E.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(E.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}E.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},E.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await x(e):e};class C{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this.O=new Map,this.S=new Map,this.W=new Map,this.l=new E({cacheName:u(e),plugins:[...t,new U({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.l}precache(e){this.addToCacheList(e),this.k||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.k=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=R(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.O.has(i)&&this.O.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.O.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.W.has(e)&&this.W.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.W.set(e,n.integrity)}if(this.O.set(i,e),this.S.set(i,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return v(e,(async()=>{const t=new q;this.strategy.plugins.push(t);for(const[t,s]of this.O){const n=this.W.get(s),i=this.S.get(t),r=new Request(t,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return v(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this.O.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.O}getCachedURLs(){return[...this.O.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.O.get(t.href)}getIntegrityForCacheKey(e){return this.W.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}const N=()=>(j||(j=new C),j);class O extends n{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const i of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(i);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}var S;self.skipWaiting(),S={},function(e){N().precache(e)}([{url:"192.bundle.js",revision:"417f8058bf773d5c087613724b456c03"},{url:"2.bundle.js",revision:"a27efe0e11a871a06af6483bd0c52dc4"},{url:"525a3700f5852fca1ad2.jpg",revision:null},{url:"624696d45e0001ee7e78.jpg",revision:null},{url:"app.webmanifest",revision:"e526b9d07595d8923a8968e03097da64"},{url:"app~61a228d7.bundle.js",revision:"aed8e9a61e91a3c6e62e7076bba65923"},{url:"app~7bd12dde.bundle.js",revision:"ae5fb413fa5328b0af3a8ecc8952fb16"},{url:"app~a51fa3f5.bundle.js",revision:"0d8e226df1162a8c1d5f394a5b33059b"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"3f17355dfcabcfcad19aaa0481c6ac19"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"5e3d89965184053190bd4f3b165cbb82"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"bd6b63650298f334a08b.jpg",revision:null},{url:"favicon.png",revision:"eba30f01dba6225d26e4667970d5ef7e"},{url:"images/heros/hero-image_2-large.jpg",revision:"9e40de83186a72e5fe6be83d8b32e285"},{url:"images/heros/hero-image_2-small.jpg",revision:"5beba6afee5b9958cdd42126eeb88389"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/logo.png",revision:"eb8e794817cf0798657c185ffadbc7e4"},{url:"images/profile/Luffy.jpg",revision:"ae2e24b480dc3538eb1914c819ddb4ab"},{url:"images/profile/Naruto.jpg",revision:"2e8f55865fb381ba4f2a50c310d083ee"},{url:"images/profile/Sasuke.jpg",revision:"86a74dc93917fe6548ea470c7b1736e4"},{url:"images/profile/Syahrul-Nizam.jpg",revision:"e4fb43c3c6bb25ed8748ea5e373bdcfb"},{url:"images/profile/Zoro.jpg",revision:"a152b466a42051e768eed811104a2f59"},{url:"index.html",revision:"b79c8004b33d3700eacc7b98a893a13a"},{url:"manifest-icons/manifesticon-128x128.png",revision:"8b9dd0f452792791cc0abeeda9126fab"},{url:"manifest-icons/manifesticon-144x144.png",revision:"e06b07161a33763da2cca186d8dd1133"},{url:"manifest-icons/manifesticon-152x152.png",revision:"ccd3d5544efbdb8bcb944267fa951f3d"},{url:"manifest-icons/manifesticon-192x192.png",revision:"342625ad15db29afd57f34ad4fb5dd94"},{url:"manifest-icons/manifesticon-384x384.png",revision:"0dfa6874184657dc75ac549c6983e652"},{url:"manifest-icons/manifesticon-512x512.png",revision:"b75c63b78a92875c85fe9a87d0e4172a"},{url:"manifest-icons/manifesticon-72x72.png",revision:"6f2ccbfba318ff4dd6b4dcfaf9e291bf"},{url:"manifest-icons/manifesticon-96x96.png",revision:"f820717e4a251efe5678a5e91db8de11"}]),function(e){const t=N();c(new O(t,e))}(S),c((({url:e})=>"https://restaurant-api.dicoding.dev"===e.origin),new class extends m{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(h)}async U(e,s){const n=s.fetchAndCachePut(e).catch((()=>{}));s.waitUntil(n);let i,r=await s.cacheMatch(e);if(r);else try{r=await n}catch(e){e instanceof Error&&(i=e)}if(!r)throw new t("no-response",{url:e.url,error:i});return r}}({cacheName:"CacheApi",plugins:[]}),"GET")}));
//# sourceMappingURL=sw-workbox.js.map
