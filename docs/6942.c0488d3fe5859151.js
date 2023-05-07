"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6942],{7423:(ee,_,h)=>{h.d(_,{Uw:()=>b,fo:()=>M});var c=h(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var C=(()=>{return(n=C||(C={})).Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",C;var n})();class E extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const F=n=>{var e,t,o,s,r;const d=n.CapacitorCustomPlatform||null,i=n.Capacitor||{},m=i.Plugins=i.Plugins||{},u=n.CapacitorPlatforms,A=(null===(e=null==u?void 0:u.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==d?d.name:(n=>{var e,t;return null!=n&&n.androidBridge?"android":null!==(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),le=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==A()),de=(null===(o=null==u?void 0:u.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(f=>{const g=J.get(f);return!!(null!=g&&g.platforms.has(A())||Q(f))}),Q=(null===(s=null==u?void 0:u.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(f=>{var g;return null===(g=i.PluginHeaders)||void 0===g?void 0:g.find($=>$.name===f)}),J=new Map,pe=(null===(r=null==u?void 0:u.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((f,g={})=>{const $=J.get(f);if($)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),$.proxy;const U=A(),j=Q(f);let L;const he=function(){var p=(0,c.Z)(function*(){return!L&&U in g?L=L="function"==typeof g[U]?yield g[U]():g[U]:null!==d&&!L&&"web"in g&&(L=L="function"==typeof g.web?yield g.web():g.web),L});return function(){return p.apply(this,arguments)}}(),K=p=>{let v;const w=(...x)=>{const T=he().then(y=>{const Z=((p,v)=>{var w,x;if(!j){if(p)return null===(x=p[v])||void 0===x?void 0:x.bind(p);throw new E(`"${f}" plugin is not implemented on ${U}`,C.Unimplemented)}{const T=null==j?void 0:j.methods.find(y=>v===y.name);if(T)return"promise"===T.rtype?y=>i.nativePromise(f,v.toString(),y):(y,Z)=>i.nativeCallback(f,v.toString(),y,Z);if(p)return null===(w=p[v])||void 0===w?void 0:w.bind(p)}})(y,p);if(Z){const G=Z(...x);return v=null==G?void 0:G.remove,G}throw new E(`"${f}.${p}()" is not implemented on ${U}`,C.Unimplemented)});return"addListener"===p&&(T.remove=(0,c.Z)(function*(){return v()})),T};return w.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(w,"name",{value:p,writable:!1,configurable:!1}),w},Y=K("addListener"),q=K("removeListener"),Pe=(p,v)=>{const w=Y({eventName:p},v),x=function(){var y=(0,c.Z)(function*(){const Z=yield w;q({eventName:p,callbackId:Z},v)});return function(){return y.apply(this,arguments)}}(),T=new Promise(y=>w.then(()=>y({remove:x})));return T.remove=(0,c.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield x()}),T},V=new Proxy({},{get(p,v){switch(v){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?Pe:Y;case"removeListener":return q;default:return K(v)}}});return m[f]=V,J.set(f,{name:f,proxy:V,platforms:new Set([...Object.keys(g),...j?[U]:[]])}),V});return i.convertFileSrc||(i.convertFileSrc=f=>f),i.getPlatform=A,i.handleError=f=>n.console.error(f),i.isNativePlatform=le,i.isPluginAvailable=de,i.pluginMethodNoop=(f,g,$)=>Promise.reject(`${$} does not have an implementation of "${g}".`),i.registerPlugin=pe,i.Exception=E,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},O=(n=>n.Capacitor=F(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),M=O.registerPlugin;class b{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const d=function(){var m=(0,c.Z)(function*(){return o.removeListener(e,t)});return function(){return m.apply(this,arguments)}}(),i=Promise.resolve({remove:d});return Object.defineProperty(i,"remove",{value:(m=(0,c.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield d()}),function(){return m.apply(this,arguments)})}),i;var m}removeAllListeners(){var e=this;return(0,c.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const o=this.listeners[e];o&&o.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new O.Exception(e,C.Unimplemented)}unavailable(e="not available"){return new O.Exception(e,C.Unavailable)}removeListener(e,t){var o=this;return(0,c.Z)(function*(){const s=o.listeners[e];if(!s)return;const r=s.indexOf(t);o.listeners[e].splice(r,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const k=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),S=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ne extends b{getCookies(){return(0,c.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[s,r]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=S(s).trim(),r=S(r).trim(),t[s]=r}),t})()}setCookie(e){return(0,c.Z)(function*(){try{const t=k(e.key),o=k(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),d=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${s}; path=${r}; ${d};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,c.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,c.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,c.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}M("CapacitorCookies",{web:()=>new ne});const re=function(){var n=(0,c.Z)(function*(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>{const r=s.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},s.onerror=r=>o(r),s.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class ae extends b{request(e){return(0,c.Z)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,r,d)=>(s[r]=n[e[d]],s),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[d,i]of Object.entries(n.data||{}))r.set(d,i);t.body=r.toString()}else if(s.includes("multipart/form-data")){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((i,m)=>{r.append(m,i)});else for(const i of Object.keys(n.data))r.append(i,n.data[i]);t.body=r;const d=new Headers(t.headers);d.delete("content-type"),t.headers=d}else(s.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),o=((n,e=!0)=>n?Object.entries(n).reduce((o,s)=>{const[r,d]=s;let i,m;return Array.isArray(d)?(m="",d.forEach(u=>{i=e?encodeURIComponent(u):u,m+=`${r}=${i}&`}),m.slice(0,-1)):(i=e?encodeURIComponent(d):d,m=`${r}=${i}`),`${o}&${m}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),s=o?`${e.url}?${o}`:e.url,r=yield fetch(s,t),d=r.headers.get("content-type")||"";let m,u,{responseType:i="text"}=r.ok?e:{};switch(d.includes("application/json")&&(i="json"),i){case"arraybuffer":case"blob":u=yield r.blob(),m=yield re(u);break;case"json":m=yield r.json();break;default:m=yield r.text()}const R={};return r.headers.forEach((A,z)=>{R[z]=A}),{data:m,headers:R,status:r.status,url:r.url}})()}get(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,c.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}M("CapacitorHttp",{web:()=>new ae})},6942:(ee,_,h)=>{h.r(_),h.d(_,{Tab3PageModule:()=>X});var c=h(2078),H=h(6895),N=h(433),W=h(581),I=h(1064),B=h(655),D=h(1135);const E=(0,h(7423).fo)("LocalNotifications",{web:()=>h.e(7434).then(h.bind(h,7434)).then(l=>new l.LocalNotificationsWeb)});var a=h(8256);let F=(()=>{class l{}return l.\u0275fac=function(P){return new(P||l)},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(P,k){1&P&&(a.TgZ(0,"div",0)(1,"strong"),a._uU(2),a.qZA(),a.TgZ(3,"p"),a._uU(4,"Explore "),a.TgZ(5,"a",1),a._uU(6,"UI Components"),a.qZA()()()),2&P&&(a.xp6(2),a.Oqu(k.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),l})();const O=[{path:"",component:(()=>{class l{constructor(){this.listData=[],this.listData2=[],this.salarySet=new D.X(!0),console.log("constr 3")}ngOnInit(){return(0,B.mG)(this,void 0,void 0,function*(){yield E.requestPermissions()})}notifyBasic(){return(0,B.mG)(this,void 0,void 0,function*(){yield E.schedule({notifications:[{id:0,title:"hello world",body:"this is it",extra:{data:"pass data"}}]})})}notifyAdvance(){return(0,B.mG)(this,void 0,void 0,function*(){yield E.schedule({notifications:[{id:0,schedule:{every:"month"},title:"hello world",body:"this is it",extra:{data:"pass data"}}]})})}}return l.\u0275fac=function(P){return new(P||l)},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-tab3"]],decls:11,vars:2,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["name","Tab 3 page"],["color","primary","expand","block",3,"click"],["color","tertiary","expand","block",3,"click"]],template:function(P,k){1&P&&(a._UZ(0,"ion-header",0),a.TgZ(1,"ion-content",1)(2,"ion-header",2)(3,"ion-toolbar")(4,"ion-title",3),a._uU(5,"Tab 3"),a.qZA()()(),a._UZ(6,"app-explore-container",4),a.TgZ(7,"ion-button",5),a.NdJ("click",function(){return k.notifyBasic()}),a._uU(8," Notify Basic "),a.qZA(),a.TgZ(9,"ion-button",6),a.NdJ("click",function(){return k.notifyAdvance()}),a._uU(10," Notify Advance "),a.qZA()()),2&P&&(a.Q6J("translucent",!0),a.xp6(1),a.Q6J("fullscreen",!0))},dependencies:[c.YG,c.W2,c.Gu,c.wd,c.sr,F],styles:[".red[_ngcontent-%COMP%]{height:30px;margin:10px;background-color:red}"]}),l})()}];let M=(()=>{class l{}return l.\u0275fac=function(P){return new(P||l)},l.\u0275mod=a.oAB({type:l}),l.\u0275inj=a.cJS({imports:[I.Bz.forChild(O),I.Bz]}),l})(),X=(()=>{class l{}return l.\u0275fac=function(P){return new(P||l)},l.\u0275mod=a.oAB({type:l}),l.\u0275inj=a.cJS({imports:[c.Pc,H.ez,N.u5,W.e,M]}),l})()}}]);