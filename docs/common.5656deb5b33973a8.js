"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7693:(y,h,s)=>{s.d(h,{c:()=>c});var u=s(4083),a=s(7864),d=s(1898);const c=(r,t)=>{let n,e;const v=(o,g,m)=>{if(typeof document>"u")return;const E=document.elementFromPoint(o,g);E&&t(E)?E!==n&&(_(),i(E,m)):_()},i=(o,g)=>{n=o,e||(e=n);const m=n;(0,u.w)(()=>m.classList.add("ion-activated")),g()},_=(o=!1)=>{if(!n)return;const g=n;(0,u.w)(()=>g.classList.remove("ion-activated")),o&&e!==n&&n.click(),n=void 0};return(0,d.createGesture)({el:r,gestureName:"buttonActiveDrag",threshold:0,onStart:o=>v(o.currentX,o.currentY,a.a),onMove:o=>v(o.currentX,o.currentY,a.b),onEnd:()=>{_(!0),(0,a.h)(),e=void 0}})}},2225:(y,h,s)=>{s.d(h,{g:()=>u});const u=(t,n,e,v,i)=>d(t[1],n[1],e[1],v[1],i).map(_=>a(t[0],n[0],e[0],v[0],_)),a=(t,n,e,v,i)=>i*(3*n*Math.pow(i-1,2)+i*(-3*e*i+3*e+v*i))-t*Math.pow(i-1,3),d=(t,n,e,v,i)=>r((v-=i)-3*(e-=i)+3*(n-=i)-(t-=i),3*e-6*n+3*t,3*n-3*t,t).filter(o=>o>=0&&o<=1),r=(t,n,e,v)=>{if(0===t)return((t,n,e)=>{const v=n*n-4*t*e;return v<0?[]:[(-n+Math.sqrt(v))/(2*t),(-n-Math.sqrt(v))/(2*t)]})(n,e,v);const i=(3*(e/=t)-(n/=t)*n)/3,_=(2*n*n*n-9*n*e+27*(v/=t))/27;if(0===i)return[Math.pow(-_,1/3)];if(0===_)return[Math.sqrt(-i),-Math.sqrt(-i)];const o=Math.pow(_/2,2)+Math.pow(i/3,3);if(0===o)return[Math.pow(_/2,.5)-n/3];if(o>0)return[Math.pow(-_/2+Math.sqrt(o),1/3)-Math.pow(_/2+Math.sqrt(o),1/3)-n/3];const g=Math.sqrt(Math.pow(-i/3,3)),m=Math.acos(-_/(2*Math.sqrt(Math.pow(-i/3,3)))),E=2*Math.pow(g,1/3);return[E*Math.cos(m/3)-n/3,E*Math.cos((m+2*Math.PI)/3)-n/3,E*Math.cos((m+4*Math.PI)/3)-n/3]}},5062:(y,h,s)=>{s.d(h,{i:()=>u});const u=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(y,h,s)=>{s.r(h),s.d(h,{startFocusVisible:()=>c});const u="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=r=>{let t=[],n=!0;const e=r?r.shadowRoot:document,v=r||document.body,i=w=>{t.forEach(p=>p.classList.remove(u)),w.forEach(p=>p.classList.add(u)),t=w},_=()=>{n=!1,i([])},o=w=>{n=d.includes(w.key),n||i([])},g=w=>{if(n&&void 0!==w.composedPath){const p=w.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));i(p)}},m=()=>{e.activeElement===v&&i([])};return e.addEventListener("keydown",o),e.addEventListener("focusin",g),e.addEventListener("focusout",m),e.addEventListener("touchstart",_),e.addEventListener("mousedown",_),{destroy:()=>{e.removeEventListener("keydown",o),e.removeEventListener("focusin",g),e.removeEventListener("focusout",m),e.removeEventListener("touchstart",_),e.removeEventListener("mousedown",_)},setFocus:i}}},8689:(y,h,s)=>{s.d(h,{c:()=>a});var u=s(3577);const a=t=>{const n=t;let e;return{hasLegacyControl:()=>{if(void 0===e){const i=void 0!==n.label||d(n),_=n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")&&null===n.shadowRoot,o=(0,u.h)(n);e=!0===n.legacy||!i&&!_&&null!==o}return e}}},d=t=>null!==t.shadowRoot&&!!(c.includes(t.tagName)&&null!==t.querySelector('[slot="label"]')||r.includes(t.tagName)&&""!==t.textContent),c=["ION-RANGE"],r=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(y,h,s)=>{s.d(h,{a:()=>c,b:()=>r,c:()=>d,d:()=>n,h:()=>t});const u={getEngine(){var e;const v=window;return v.TapticEngine||(null===(e=v.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&v.Capacitor.Plugins.Haptics},available(){var e;const v=window;return!!this.getEngine()&&("web"!==(null===(e=v.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const v=this.getEngine();if(!v)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;v.impact({style:i})},notification(e){const v=this.getEngine();if(!v)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;v.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},a=()=>u.available(),d=()=>{a()&&u.selection()},c=()=>{a()&&u.selectionStart()},r=()=>{a()&&u.selectionChanged()},t=()=>{a()&&u.selectionEnd()},n=e=>{a()&&u.impact(e)}},7366:(y,h,s)=>{s.d(h,{a:()=>u,b:()=>g,c:()=>n,d:()=>m,e:()=>C,f:()=>t,g:()=>E,h:()=>d,i:()=>a,j:()=>M,k:()=>D,l:()=>e,m:()=>_,n:()=>w,o:()=>i,p:()=>r,q:()=>c,r:()=>l,s:()=>O,t:()=>o,u:()=>p,v:()=>f,w:()=>v});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2055:(y,h,s)=>{s.d(h,{I:()=>t,a:()=>i,b:()=>r,c:()=>g,d:()=>E,f:()=>_,g:()=>v,i:()=>e,p:()=>m,r:()=>w,s:()=>o});var u=s(5861),a=s(3577),d=s(1178);const r="ion-content",t=".ion-content-scroll-host",n=`${r}, ${t}`,e=p=>"ION-CONTENT"===p.tagName,v=function(){var p=(0,u.Z)(function*(f){return e(f)?(yield new Promise(l=>(0,a.c)(f,l)),f.getScrollElement()):f});return function(l){return p.apply(this,arguments)}}(),i=p=>p.querySelector(t)||p.querySelector(n),_=p=>p.closest(n),o=(p,f)=>e(p)?p.scrollToTop(f):Promise.resolve(p.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),g=(p,f,l,M)=>e(p)?p.scrollByPoint(f,l,M):Promise.resolve(p.scrollBy({top:l,left:f,behavior:M>0?"smooth":"auto"})),m=p=>(0,d.b)(p,r),E=p=>{if(e(p)){const l=p.scrollY;return p.scrollY=!1,l}return p.style.setProperty("overflow","hidden"),!0},w=(p,f)=>{e(p)?p.scrollY=f:p.style.removeProperty("overflow")}},9240:(y,h,s)=>{s.d(h,{g:()=>a});var u=s(1178);const a=(c,r,t)=>{const n=null==c?0:c.toString().length,e=d(n,r);if(void 0===t)return e;try{return t(n,r)}catch(v){return(0,u.a)("Exception in provided `counterFormatter`.",v),e}},d=(c,r)=>`${c} / ${r}`},5234:(y,h,s)=>{s.r(h),s.d(h,{KEYBOARD_DID_CLOSE:()=>a,KEYBOARD_DID_OPEN:()=>u,copyVisualViewport:()=>f,keyboardDidClose:()=>m,keyboardDidOpen:()=>o,keyboardDidResize:()=>g,resetKeyboardAssist:()=>n,setKeyboardClose:()=>_,setKeyboardOpen:()=>i,startKeyboardAssist:()=>e,trackViewportChanges:()=>p});const u="ionKeyboardDidShow",a="ionKeyboardDidHide";let c={},r={},t=!1;const n=()=>{c={},r={},t=!1},e=l=>{v(l),l.visualViewport&&(r=f(l.visualViewport),l.visualViewport.onresize=()=>{p(l),o()||g(l)?i(l):m(l)&&_(l)})},v=l=>{l.addEventListener("keyboardDidShow",M=>i(l,M)),l.addEventListener("keyboardDidHide",()=>_(l))},i=(l,M)=>{E(l,M),t=!0},_=l=>{w(l),t=!1},o=()=>!t&&c.width===r.width&&(c.height-r.height)*r.scale>150,g=l=>t&&!m(l),m=l=>t&&r.height===l.innerHeight,E=(l,M)=>{const O=new CustomEvent(u,{detail:{keyboardHeight:M?M.keyboardHeight:l.innerHeight-r.height}});l.dispatchEvent(O)},w=l=>{const M=new CustomEvent(a);l.dispatchEvent(M)},p=l=>{c=Object.assign({},r),r=f(l.visualViewport)},f=l=>({width:Math.round(l.width),height:Math.round(l.height),offsetTop:l.offsetTop,offsetLeft:l.offsetLeft,pageTop:l.pageTop,pageLeft:l.pageLeft,scale:l.scale})},9852:(y,h,s)=>{s.d(h,{c:()=>a});var u=s(3457);const a=d=>{let c,r,t;const n=()=>{c=()=>{t=!0,d&&d(!0)},r=()=>{t=!1,d&&d(!1)},null==u.w||u.w.addEventListener("keyboardWillShow",c),null==u.w||u.w.addEventListener("keyboardWillHide",r)};return n(),{init:n,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",c),null==u.w||u.w.removeEventListener("keyboardWillHide",r),c=r=void 0},isKeyboardVisible:()=>t}}},7741:(y,h,s)=>{s.d(h,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(d,c,r)=>{const t=d*c/r-d+"ms",n=2*Math.PI*c/r;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(d,c,r)=>{const t=c/r,n=d*t-d+"ms",e=2*Math.PI*t;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,c,r)=>({y1:14,y2:26,style:{transform:`rotate(${360/r*c+(c<r/2?180:-180)}deg)`,"animation-delay":d*c/r-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,c,r)=>({y1:12,y2:20,style:{transform:`rotate(${360/r*c+(c<r/2?180:-180)}deg)`,"animation-delay":d*c/r-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,c,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":d*c/r-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,c,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":d*c/r-d+"ms"}})}}},7539:(y,h,s)=>{s.r(h),s.d(h,{createSwipeBackGesture:()=>r});var u=s(3577),a=s(5062),d=s(1898);s(4349);const r=(t,n,e,v,i)=>{const _=t.ownerDocument.defaultView;let o=(0,a.i)(t);const m=l=>o?-l.deltaX:l.deltaX;return(0,d.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:l=>(o=(0,a.i)(t),(l=>{const{startX:D}=l;return o?D>=_.innerWidth-50:D<=50})(l)&&n()),onStart:e,onMove:l=>{const D=m(l)/_.innerWidth;v(D)},onEnd:l=>{const M=m(l),D=_.innerWidth,O=M/D,C=(l=>o?-l.velocityX:l.velocityX)(l),P=C>=0&&(C>.2||M>D/2),L=(P?1-O:O)*D;let S=0;if(L>5){const T=L/Math.abs(C);S=Math.min(T,540)}i(P,O<=0?.01:(0,u.l)(0,O,.9999),S)}})}},581:(y,h,s)=>{s.d(h,{e:()=>r});var u=s(6895),a=s(433),d=s(650),c=s(8256);let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[u.ez,a.u5,d.Pc]}),t})()},6533:(y,h,s)=>{s.d(h,{D:()=>n});var u=s(655),a=s(5021),c=s(1135),r=s(8256),t=s(849);let n=(()=>{class e{constructor(i){this.storage=i,this.storageReady=new c.X(!1),this.init()}init(){return(0,u.mG)(this,void 0,void 0,function*(){console.log("Init storage..."),yield this.storage.defineDriver(a),yield this.storage.create(),console.log("Storage Ready!"),this.storageReady.next(!0)})}}return e.\u0275fac=function(i){return new(i||e)(r.LFG(t.K))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},860:(y,h,s)=>{s.d(h,{B:()=>_});var u=s(655),a=s(7579),d=s(9300),c=s(3900),r=s(2076),t=s(9646),n=s(1588),e=s(8256),v=s(6533);const i="expensesTable";let _=(()=>{class o{constructor(m){this.dataService=m,this.data=new a.x}getData(){return this.dataService.storageReady.pipe((0,d.h)(m=>m),(0,c.w)(m=>{var E;return null!==(E=(0,r.D)(this.dataService.storage.get(i)))&&void 0!==E?E:(0,t.of)([])}))}subscribeToData(){return this.data.asObservable()}updetaData(m){this.data.next(m)}addData(m){return(0,u.mG)(this,void 0,void 0,function*(){const E=Object.assign(Object.assign({},m),{id:(0,n.Z)()}),w=(yield this.dataService.storage.get(i))||[];w.push(E),yield this.dataService.storage.set(i,w),this.updetaData(w)})}removeData(m){return(0,u.mG)(this,void 0,void 0,function*(){const E=(yield this.dataService.storage.get(i))||[],w=E.findIndex(p=>p.id=m);E.splice(w,1),yield this.dataService.storage.set(i,E),this.updetaData(E)})}}return o.\u0275fac=function(m){return new(m||o)(e.LFG(v.D))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},6412:(y,h,s)=>{s.d(h,{R:()=>v});var u=s(655),a=s(1135),d=s(9300),c=s(3900),r=s(1588),t=s(8256),n=s(6533);const e="salaryData";let v=(()=>{class i{constructor(o){this.dataService=o,this.salarySubject=new a.X({})}getData(){return this.dataService.storageReady.pipe((0,d.h)(o=>o),(0,c.w)(o=>(0,u.mG)(this,void 0,void 0,function*(){let g=(yield this.dataService.storage.get(e))||{};return this.updateSalaryInfo(this.resolveObject(g)),this.resolveObject(g)})))}resolveObject(o){return o||{}}subscribeToSalaryInfo(){return this.salarySubject.asObservable()}updateSalaryInfo(o){this.salarySubject.next(o)}registerSalary(o){return(0,u.mG)(this,void 0,void 0,function*(){const g=Object.assign(Object.assign({},o),{id:(0,r.Z)()});yield this.dataService.storage.set(e,g),this.updateSalaryInfo(g)})}removeSalaryInfo(o){return(0,u.mG)(this,void 0,void 0,function*(){yield this.dataService.storage.set(e,{}),this.updateSalaryInfo({})})}}return i.\u0275fac=function(o){return new(o||i)(t.LFG(n.D))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},5549:(y,h,s)=>{s.d(h,{o:()=>t});var u=s(2340),a=s(8256),d=s(6895);const c=function(n){return{color:n}},r=u.N.currency;let t=(()=>{class n{constructor(){this.color="inherit"}ngOnInit(){this.resolveSymbol()}ngOnChanges(v){this.resolveDecimalPart(),this.resolveIntegerPart()}resolveDecimalPart(){this.decimalPart=`.${this.amount.toFixed(2).split(".")[1]}`}resolveIntegerPart(){this.integerPart=parseInt(this.amount.toFixed())}resolveSymbol(){this.symbol=r}}return n.\u0275fac=function(v){return new(v||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-amount-line"]],inputs:{amount:"amount",color:"color"},features:[a.TTD],decls:8,vars:10,consts:[[3,"ngStyle"],[1,"symbol-part"],[1,"integer-part"],[1,"decimal-part"]],template:function(v,i){1&v&&(a.TgZ(0,"span",0)(1,"span",1),a._uU(2),a.qZA(),a.TgZ(3,"span",2),a._uU(4),a.ALo(5,"number"),a.qZA(),a.TgZ(6,"span",3),a._uU(7),a.qZA()()),2&v&&(a.Q6J("ngStyle",a.VKq(8,c,i.color)),a.xp6(2),a.Oqu(i.symbol),a.xp6(2),a.Oqu(a.Dn7(5,4,i.integerPart,"1.0","en-US")),a.xp6(3),a.Oqu(i.decimalPart))},dependencies:[d.PC,d.JJ],styles:[".symbol-part[_ngcontent-%COMP%]{margin-right:1px;font-size:13px}.integer-part[_ngcontent-%COMP%]{font-size:16px}.decimal-part[_ngcontent-%COMP%]{font-size:13px}"]}),n})()},4466:(y,h,s)=>{s.d(h,{m:()=>c});var u=s(6895),a=s(650),d=s(8256);let c=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=d.oAB({type:r}),r.\u0275inj=d.cJS({imports:[u.ez,a.Pc]}),r})()},1588:(y,h,s)=>{s.d(h,{Z:()=>_});const a={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let d;const c=new Uint8Array(16);function r(){if(!d&&(d=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!d))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(c)}const t=[];for(let o=0;o<256;++o)t.push((o+256).toString(16).slice(1));const _=function i(o,g,m){if(a.randomUUID&&!g&&!o)return a.randomUUID();const E=(o=o||{}).random||(o.rng||r)();if(E[6]=15&E[6]|64,E[8]=63&E[8]|128,g){m=m||0;for(let w=0;w<16;++w)g[m+w]=E[w];return g}return function n(o,g=0){return(t[o[g+0]]+t[o[g+1]]+t[o[g+2]]+t[o[g+3]]+"-"+t[o[g+4]]+t[o[g+5]]+"-"+t[o[g+6]]+t[o[g+7]]+"-"+t[o[g+8]]+t[o[g+9]]+"-"+t[o[g+10]]+t[o[g+11]]+t[o[g+12]]+t[o[g+13]]+t[o[g+14]]+t[o[g+15]]).toLowerCase()}(E)}}}]);