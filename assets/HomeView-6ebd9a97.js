import{u as j}from"./list-69e389da.js";import{u as W}from"./settings-93b73ea5.js";import{g as B,o as D,a as E,n as F,u as C,b as U,r as N,w as R,c as k,s as I,d as q,e as H,f as b,V as $,h as g,i as P,t as V,j as _}from"./index-42d80fc2.js";import{V as x,a as z}from"./VRow-89bd8ebb.js";function A(e){return B()?(D(e),!0):!1}function T(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const r=()=>t(o);return A(r),{off:r}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(r=>r(...o)))}}function G(e){return typeof e=="function"?e():C(e)}const J=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const K=Object.prototype.toString,Q=e=>K.call(e)==="[object Object]",X=()=>{};function Y(e){return e||U()}function Z(e,t=!0,n){const i=Y(n);i?E(e,i):t?e():F(e)}function ee(e){var t;const n=G(e);return(t=n==null?void 0:n.$el)!=null?t:n}const L=J?window:void 0;function te(...e){let t,n,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,o]=e,t=L):[t,n,i,o]=e,!t)return X;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],a=()=>{r.forEach(u=>u()),r.length=0},v=(u,s,l,c)=>(u.addEventListener(s,l,c),()=>u.removeEventListener(s,l,c)),h=R(()=>[ee(t),G(o)],([u,s])=>{if(a(),!u)return;const l=Q(s)?{...s}:s;r.push(...n.flatMap(c=>i.map(m=>v(u,c,m,l))))},{immediate:!0,flush:"post"}),p=()=>{h(),a()};return A(p),p}function ne(){const e=N(!1);return U()&&E(()=>{e.value=!0}),e}function oe(e){const t=ne();return k(()=>(t.value,!!e()))}function ie(e={}){const{window:t=L,requestPermissions:n=!0}=e,i=e,o=oe(()=>!!t&&"Notification"in t),r=N(o.value&&"permission"in Notification&&Notification.permission==="granted"),a=N(null),v=async()=>{if(o.value)return!r.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(r.value=!0),r.value},{on:h,trigger:p}=T(),{on:u,trigger:s}=T(),{on:l,trigger:c}=T(),{on:m,trigger:O}=T(),y=async d=>{if(!o.value||!r.value)return;const f=Object.assign({},i,d);return a.value=new Notification(f.title||"",f),a.value.onclick=p,a.value.onshow=s,a.value.onerror=c,a.value.onclose=O,a.value},S=()=>{a.value&&a.value.close(),a.value=null};if(n&&Z(v),A(S),o.value&&t){const d=t.document;te(d,"visibilitychange",f=>{f.preventDefault(),d.visibilityState==="visible"&&S()})}return{isSupported:o,notification:a,ensurePermissions:v,permissionGranted:r,show:y,close:S,onClick:h,onShow:u,onError:l,onClose:m}}const ue={__name:"HomeView",setup(e){const t=j(),{currentItem:n,items:i,timeleft:o}=I(t),{setCurrentItem:r,countdown:a,setFinishedItem:v}=t,h=W(),{selectedAlarmFile:p,notify:u}=I(h),s={STOP:0,COUNTING:1,PAUSE:2},l=N(s.STOP);let c=0;const m=()=>{l.value===s.STOP&&i.value.length>0&&r(),l.value=s.COUNTING,c=setInterval(()=>{a(),o.value===0&&y()},1e3)},O=()=>{l.value=s.PAUSE,clearInterval(c)},y=()=>{clearInterval(c),l.value=s.STOP;const f=new Audio;if(f.src=p.value,f.play(),u.value){const{show:w,isSupported:M}=ie({title:"事項完成",body:n.value,icon:new URL(""+new URL("tomato-fe6b03eb.png",import.meta.url).href,self.location).href});M.value&&w()}v(),i.value.length>0&&m()},S=k(()=>n.value.length>0?n.value:i.value.length>0?"點擊開始":"沒有事項"),d=k(()=>{const f=Math.floor(o.value/60).toString().padStart(2,"0"),w=(o.value%60).toString().padStart(2,"0");return f+":"+w});return(f,w)=>(q(),H($,null,{default:b(()=>[g(z,null,{default:b(()=>[g(x,{cols:"12"},{default:b(()=>[P("h1",null,V(S.value),1),P("h1",null,V(d.value),1)]),_:1}),g(x,{cols:"12"},{default:b(()=>[g(_,{variant:"text",icon:"mdi-play",disabled:l.value===s.COUNTING||C(n).length===0&&C(i).length===0,onClick:m},null,8,["disabled"]),g(_,{variant:"text",icon:"mdi-pause",disabled:l.value!==s.COUNTING,onClick:O},null,8,["disabled"]),g(_,{variant:"text",icon:"mdi-skip-next",disabled:C(n).length===0,onClick:y},null,8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{ue as default};
