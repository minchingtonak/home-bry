(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{61:function(t,n,e){},62:function(t,n,e){},63:function(t,n,e){"use strict";e.r(n);var a,r,c=e(0),o=e.n(c),i=e(14),s=e.n(i),l=e(4),u=e(2),d=e(35),f=e(39),h=e(33),g=e.n(h),j=e(22),b=e.n(j),p=e(25),x=e(3);function v(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];return function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t.apply(void 0,e.concat(a))}}function m(t){return/^https?:\/\//.test(t)?t:"//".concat(t)}var O=window.localStorage;function k(t,n){var e=Object(c.useState)((function(){var e=O.getItem(t);return null!==e?JSON.parse(e):n})),a=Object(l.a)(e,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){O.setItem(t,JSON.stringify(r))}),[r,t]),[r,o]}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.search,n=b.a.parse(t),e=Object.keys(n).find((function(t){return t.startsWith("?")}));if(e){var a=n[e];delete n[e],n[e.slice(1)]=a}return n}function y(t,n){var e=Object(c.useState)(function(t){return w()[t]}(t)||n),a=Object(l.a)(e,2),r=a[0],o=a[1];return[r,Object(c.useCallback)((function(n){o(n),function(t,n){var e=w();t in e&&!n?delete e[t]:e[t]=n;var a=window.location.protocol+"//"+window.location.host+window.location.pathname+"".concat(Object.keys(e).length?"?":"").concat(b.a.stringify(e));window.history.pushState({path:a},"",a)}(t,n)}),[t])]}var T,E,C,I=x.a.i.attrs((function(t){return{className:t.checked?"fas fa-check-square":"fas fa-square"}}))(a||(a=Object(u.a)(["\n  margin: 12px 10px 0px 15px;\n\n  transform: scale(1.35);\n\n  color: var(--frg-l);\n\n  &:hover {\n    color: var(--frg-ll);\n  }\n"]))),S=x.a.i.attrs({className:"far fa-trash-alt fa-lg"})(r||(r=Object(u.a)(["\n  padding: 13px 10px;\n\n  color: var(--frg-l);\n\n  &:hover {\n    color: var(--frg-ll);\n  }\n"]))),D=Object(p.a)((function(t){return{loggedIn:!1,setLoggedIn:function(n){return t({loggedIn:n})}}})),A=Object(p.a)((function(t){return{addTask:function(){},setAddTask:function(n){return t({addTask:n})}}})),L=e(1),M=x.a.div(T||(T=Object(u.a)(["\n  vertical-align: top;\n\n  display: inline-block;\n\n  overflow: hidden;\n\n  box-sizing: border-box;\n  margin: 2px;\n  height: var(--section-height);\n  width: var(--section-width);\n\n  background-color: var(--hdr);\n\n  text-align: left;\n  color: var(--htx);\n\n  &:before {\n    content: '';\n    margin-left: 5px;\n  }\n"]))),N=x.a.div(E||(E=Object(u.a)(["\n  padding: 10px 15px 15px 10px;\n\n  height: 100%;\n\n  background-color: var(--frg);\n"])));function $(t){var n=t.title,e=t.children;return e.length?Object(L.jsxs)(M,{id:n,children:[n,Object(L.jsx)(N,{children:e})]}):Object(L.jsx)(L.Fragment,{})}var F=x.a.a(C||(C=Object(u.a)(["\n  margin-bottom: var(--link-margin);\n  padding-left: 5px;\n\n  display: block;\n\n  color: var(--txt);\n  text-decoration: none;\n\n  &:hover,\n  &.selected {\n    background-color: rgba(255, 255, 255, 0.05);\n\n    color: var(--hgl);\n  }\n"])));function U(t){var n=t.query,e=t.setAction,a=k("sites",null),r=Object(l.a)(a,2),o=r[0],i=r[1],s=Object(c.useState)([]),u=Object(l.a)(s,2),d=u[0],h=u[1],j=Object(c.useState)(null),b=Object(l.a)(j,2),p=b[0],x=b[1],v=Object(c.useState)(0),O=Object(l.a)(v,2),w=O[0],y=O[1];Object(c.useEffect)((function(){fetch("https://gist.githubusercontent.com/minchingtonak/97724dbb14bb9321993592b7ead908ad/raw").then((function(t){return t.json()})).then((function(t){return i(t)})).catch((function(t){return console.error(t)}))}),[i]),Object(c.useEffect)((function(){null!==o&&document.documentElement.style.setProperty("--max-links","".concat(Math.max.apply(Math,Object(f.a)(Object.keys(o).map((function(t){return Object.keys(o[t]).length}))))))}),[o]);var T=Object(c.useCallback)((function(t){if(null!==o){var a=[],r=0,c=!1;Object.keys(o).forEach((function(i,s){var l=o[i],u=Object.keys(l).filter((function(t){return t.toLowerCase().includes(n)}));u.length&&(c=!0,a.push(Object(L.jsx)($,{title:i,children:u.map((function(n,a){var c=r++===t;return c&&e(l[n]),Object(L.jsx)(F,{href:m(l[n]),className:c?"selected":"",children:n},a)}))},s)))})),y(r),h(a),x(t),c&&n.length||e(null)}}),[n,o,e]);return Object(c.useEffect)((function(){g()(n)||/^(https?)?:\/\/localhost:\d{1,5}([^\d].*)?$/g.test(n)?e(n):null===n.match(/^lh\d{3,5}$/)&&null===n.match(/^localhost:\d{3,5}$/)?T(n.length?0:null):e("http://localhost:".concat(n.match(/\d{3,5}/)[0]))}),[n,e,T]),Object(c.useEffect)((function(){function t(t){var n=p;"ArrowUp"===t.key||"ArrowLeft"===t.key?null!==p&&p>0&&(n=p-1):"ArrowDown"!==t.key&&"ArrowRight"!==t.key||null!==p&&p<w&&(n=p+1),n!==p&&T(n)}return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[p,w,T]),Object(L.jsx)("div",{id:"links",children:d})}var z,P,K=e(34),R=e.n(K),q=e(6),J=["https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"],B="https://www.googleapis.com/auth/tasks",H=!1;function W(){var t=D(),n=t.loggedIn,e=t.setLoggedIn,a=Object(c.useState)(!1),r=Object(l.a)(a,2),o=r[0],i=r[1],s=k("offlineaccess",!1),u=Object(l.a)(s,2),d=u[0],f=u[1];Object(c.useEffect)((function(){n||q.a.load("client:auth2",(function(){var t;t=function(t){e(t),setTimeout((function(){t&&!d&&q.a.auth2.getAuthInstance().currentUser.get().grantOfflineAccess({scope:B,prompt:"consent"}).then((function(t){t.code,f(!0)}))}),5e3)},H||(H=!0,q.a.client.init({apiKey:"AIzaSyBZJJOMt3MkTKNiTgX8lRAkRx8Nd0A8lTc",clientId:"529992368744-omh87l4imgosp83f9l67toav9rgl2bru.apps.googleusercontent.com",discoveryDocs:J,scope:B}).then((function(){q.a.auth2.getAuthInstance().isSignedIn.listen(t),t(q.a.auth2.getAuthInstance().isSignedIn.get())})).catch((function(t){console.error("Auth init error: ",t)}))),i(!0)}))}),[n,e,d,f]);var h=o?q.a.auth2.getAuthInstance():{signIn:function(){},signOut:function(){}};return{loggedIn:n,setLoggedIn:e,logIn:h.signIn,logOut:h.signOut,username:n?q.a.auth2.getAuthInstance().currentUser.get().getBasicProfile().getGivenName():null}}var V=x.a.input(z||(z=Object(u.a)(["\n  margin: 0px 2px 2px 2px;\n  padding-left: 5px;\n  box-sizing: border-box;\n\n  border: none;\n  width: var(--lwidth);\n  height: 50px;\n\n  font-size: 40px;\n  background-color: var(--frg);\n  color: var(--txt);\n  font-family: Terminus, Montserrat;\n\n  &:focus {\n    outline: none;\n  }\n\n  @media screen and (max-width: 912px) {\n    & {\n      width: var(--mwidth);\n    }\n  }\n\n  @media screen and (max-width: 608px) {\n    & {\n      width: var(--swidth);\n    }\n  }\n"]))),Y=Object(x.a)(R.a)(P||(P=Object(u.a)(["\n  display: "," !important;\n"])),(function(t){return t.open?"default":"none"}));function G(t){var n=t.text,e=t.setText,a=t.action,r=Object(c.useRef)(null),o=Object(c.useState)(!1),i=Object(l.a)(o,2),s=i[0],u=i[1],d=Object(c.useState)(null),f=Object(l.a)(d,2),h=f[0],g=f[1],j=A().addTask,b=W(),p=b.loggedIn,x=b.logOut,v=b.logIn,O=Object(c.useCallback)((function(t){n.length?document.title="".concat(t," - ").concat(n):document.title="\ud83c\udfe0 Home"}),[n]);return Object(c.useEffect)((function(){O("\ud83d\udd0d")}),[n,O]),Object(c.useEffect)((function(){var t=O.bind(null,"\ud83d\udcdd"),n=O.bind(null,"\ud83d\udd0d");return window.addEventListener("blur",t),window.addEventListener("focus",n),function(){window.removeEventListener("blur",t),window.removeEventListener("focus",n)}}),[O]),Object(c.useEffect)((function(){window.addEventListener("keydown",(function(t){"Escape"===t.key&&u(!1)}))})),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("form",{id:"action",onSubmit:function(t){if(t.preventDefault(),/^\/t(ask)?/.test(n)){var r=n.match(/[\s].*/g);g(null!==r?r[0].trim():null),u(!0)}else if(/^\/login/.test(n)){if(p)return;v(),e("")}else if(/^\/logout/.test(n)){if(!p)return;x(),e(""),window.localStorage.clear()}else window.location.assign(null!==a?m(a):"".concat("https://google.com/search","?q=").concat(encodeURIComponent(n)))},children:Object(L.jsx)(V,{type:"text",value:n,ref:r,autoFocus:!0,autoComplete:"off",onChange:function(t){return e(t.target.value)}})}),Object(L.jsx)(Y,{selectedDays:new Date,open:s,onDayClick:function(t){null!==h&&t&&(j({title:h,due:t.toISOString()}),e("")),u(!1)}})]})}var X,Z,Q,_,tt,nt=e(9),et=e.n(nt),at=x.a.div(X||(X=Object(u.a)(["\n  width: 180px;\n\n  margin-right: auto;\n\n  display: flex;\n"]))),rt=x.a.span(Z||(Z=Object(u.a)(["\n  align-self: flex-start;\n\n  color: var(--htx);\n"]))),ct=Object(x.a)(rt)(Q||(Q=Object(u.a)(["\n  margin-right: auto;\n\n  align-self: flex-end;\n"])));function ot(){var t=Object(c.useState)(new Date),n=Object(l.a)(t,2),e=n[0],a=n[1];return Object(c.useEffect)((function(){var t=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(t)}}),[]),Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(at,{children:[Object(L.jsx)(ct,{id:"clock",children:et()(e).format("HH:mm:ss")}),Object(L.jsx)(rt,{id:"date",children:et()(e).format("ddd, MMM D")})]})})}var it,st=x.a.div(_||(_=Object(u.a)(["\n  margin: 2px 2px 0 2px;\n  box-sizing: border-box;\n\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  align-items: center;\n\n  padding: 0 5px;\n  width: var(--lwidth);\n\n  background-color: var(--hdr);\n\n  color: var(--txt);\n  font-size: 16px;\n  line-height: 30px;\n\n  @media screen and (max-width: 912px) {\n    & {\n      width: var(--mwidth);\n      margin: 2px auto 0 auto;\n    }\n  }\n\n  @media screen and (max-width: 608px) {\n    & {\n      width: var(--swidth);\n    }\n  }\n"]))),lt=x.a.a(tt||(tt=Object(u.a)(["\n  color: var(--htx);\n  text-decoration: none;\n\n  &:hover {\n    color: var(--txt);\n  }\n\n  & + & {\n    margin-left: 15px;\n  }\n\n  @media screen and (max-width: 608px) {\n    &:first-of-type {\n      margin-left: 110px;\n    }\n  }\n"])));function ut(){return Object(L.jsxs)(st,{id:"static-links",children:[Object(L.jsx)(ot,{}),["Spotify"].map((function(t,n){return Object(L.jsx)(lt,{href:t.toLowerCase()+":",children:t},n)}))]})}var dt,ft,ht,gt,jt,bt=x.a.div(it||(it=Object(u.a)(["\n  // transition: 0.2s height;\n\n  max-width: 912px;\n\n  user-select: none;\n  text-align: center;\n"])));function pt(){var t=y("q",""),n=Object(l.a)(t,2),e=n[0],a=n[1],r=Object(c.useState)(null),o=Object(l.a)(r,2),i=o[0],s=o[1],u=Object(d.a)(),f=u.height,h=u.ref;return Object(c.useEffect)((function(){void 0!==f&&f>parseInt(getComputedStyle(document.documentElement).getPropertyValue("--homesearch-height").slice(0,-2))&&document.documentElement.style.setProperty("--homesearch-height","".concat(f,"px"))}),[f]),Object(L.jsxs)(bt,{id:"main",ref:h,children:[Object(L.jsx)(ut,{}),Object(L.jsx)(G,{text:e,setText:a,action:i}),Object(L.jsx)(U,{query:e,setAction:s})]})}var xt=x.a.div(dt||(dt=Object(u.a)(["\n  padding: 5px;\n\n  height: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  background-color: var(--hdr);\n\n  color: var(--htx);\n"]))),vt=x.a.i.attrs({className:"fas fa-bars"})(ft||(ft=Object(u.a)(["\n  padding: 7px 12px 8px 5px;\n\n  font-size: 1.2em;\n  color: var(--frg-l);\n\n  &:hover {\n    color: var(--frg-ll);\n  }\n"]))),mt=x.a.span(ht||(ht=Object(u.a)(["\n  margin: 0 auto 0 0;\n"]))),Ot=x.a.div(gt||(gt=Object(u.a)(["\n  max-height: ",";\n  transition: max-height\n    ",";\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  overflow: auto;\n  scrollbar-width: thin;\n\n  background-color: var(--frg);\n  color: var(--txt);\n"])),(function(t){return t.open?"1000px":"0"}),(function(t){return t.open?"0.35s ease-in":"0.25s ease-out"})),kt=x.a.span(jt||(jt=Object(u.a)(["\n  padding: 5px;\n\n  &:hover {\n    background-color: var(--hdr);\n  }\n"])));function wt(t){var n=t.tasklists,e=t.activeList,a=t.setActiveList,r=Object(c.useState)(!1),o=Object(l.a)(r,2),i=o[0],s=o[1],u=W().loggedIn;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(xt,{id:"tasksbar",children:[u?Object(L.jsx)(vt,{onClick:v(s,!i)}):Object(L.jsx)(L.Fragment,{}),Object(L.jsx)(mt,{children:u&&e.title?"Tasks - ".concat(e.title):"Tasks - Not logged in"})]}),Object(L.jsx)(Ot,{open:i,children:n.map((function(t,n){return Object(L.jsx)(kt,{onClick:function(){a(t),s(!1)},children:t.title},n)}))})]})}var yt,Tt,Et,Ct,It,St,Dt,At,Lt,Mt,Nt=e(26),$t=e(7),Ft=e.n($t),Ut=e(38),zt=e.n(Ut),Pt=x.a.div(yt||(yt=Object(u.a)(["\n  margin: 0 5px 5px 5px;\n  padding: 0 0 10px 0;\n\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n\n  background-color: var(--hdr);\n\n  color: var(--txt);\n"]))),Kt=x.a.textarea.attrs({rows:1})(Tt||(Tt=Object(u.a)(["\n  margin: 5px;\n  padding: 0 5px;\n  box-sizing: border-box;\n  height: 1.5em;\n\n  border: 1px solid ",";\n\n  background-color: var(--frg);\n  color: var(--txt);\n  font-family: Terminus, Montserrat;\n\n  resize: none;\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(t){return t.error?"#aa0000":"#00000000"})),Rt=x.a.div(Et||(Et=Object(u.a)(["\n  padding-top: 3px;\n\n  width: min-content;\n\n  display: flex;\n  flex-direction: column;\n"]))),qt=x.a.div(Ct||(Ct=Object(u.a)(["\n  margin-right: 0;\n\n  display: flex;\n  flex-direction: row;\n  align-content: flex-start;\n  align-items: center;\n"]))),Jt=x.a.i.attrs({className:"fas fa-calendar-day"})(It||(It=Object(u.a)(["\n  margin: 5px 5px 5px 10px;\n  color: var(--frg-l);\n"])));function Bt(t){var n=t.task,e=t.setTask,a=t.setChecked,r=t.setDeleted,o=Object(c.useRef)(null),i=Object(c.useState)(void 0),s=Object(l.a)(i,2),u=s[0],d=s[1];function f(){o.current&&(o.current.style.height="",o.current.style.height="".concat(o.current.scrollHeight+3,"px"))}return Object(c.useEffect)(f,[o]),Object(c.useEffect)((function(){if(n.due){var t=new Date(n.due.split("T")[0]);d(new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()))}else d(void 0)}),[n.due]),Object(c.useEffect)((function(){f()}),[n.title]),Object(L.jsxs)(Pt,{className:"taskentry",children:[Object(L.jsx)(I,{checked:"completed"===n.status,onClick:a}),Object(L.jsxs)(Rt,{children:[Object(L.jsx)(Kt,{ref:o,value:n.title,error:""===n.title,placeholder:"Description can't be empty",onChange:function(t){return e({title:t.target.value.replace(/\n/g,"")})}}),Object(L.jsxs)(qt,{children:[Object(L.jsx)(Jt,{}),Object(L.jsx)(zt.a,{placeholder:"No due date",parseDate:function(t,n,e){var a=et()(t,n,e);return a.isValid()?a.toDate():void 0},formatDate:function(t,n,e){return et()(t,void 0,e).format(n)},format:"dddd, MMM D",dayPickerProps:{onDayClick:function(t){return e({due:t.toISOString()})}},inputProps:{onChange:function(t){try{var n=new Date(t.target.value);e({due:new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()).toISOString()})}catch(a){""===t.target.value&&e({due:""})}}},value:u})]})]}),Object(L.jsx)(S,{onClick:r})]})}var Ht=x.a.div(St||(St=Object(u.a)(["\n  padding: 5px;\n  margin: 0 5px 5px 5px;\n\n  color: var(--htx);\n\n  &:hover {\n    color: var(--txt);\n    hr {\n      background-color: var(--txt);\n    }\n  }\n"]))),Wt=x.a.hr(Dt||(Dt=Object(u.a)(["\n  height: 1px;\n\n  border-width: 0;\n\n  background-color: var(--htx);\n"]))),Vt=x.a.i.attrs((function(t){var n=t.expanded;return{className:"fas fa-chevron-".concat(n?"down":"right")}}))(At||(At=Object(u.a)(["\n  &.fa-chevron-right {\n    margin-right: 7px;\n  }\n\n  &.fa-chevron-down {\n    margin-right: 3px;\n  }\n"])));function Yt(t){var n=t.tasks,e=t.setTask,a=t.setChecked,r=t.setDeleted,o=Object(c.useState)(!1),i=Object(l.a)(o,2),s=i[0],u=i[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(Ht,{id:"completedtasks",onClick:v(u,!s),children:[Object(L.jsx)(Wt,{}),Object(L.jsx)(Vt,{expanded:s}),Object(L.jsx)("span",{children:"Completed tasks"})]}),s?n.map((function(t,n){return Object(L.jsx)(Bt,{task:t,setTask:v(e,t.id,n),setChecked:v(a,t.id,n),setDeleted:v(r,t.id,n)},n)})):""]})}var Gt,Xt=x.a.div(Lt||(Lt=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  padding-top: 5px;\n\n  overflow: hidden scroll;\n  scrollbar-width: thin;\n\n  background-color: var(--frg);\n\n  color: var(--htx);\n  text-align: center;\n"]))),Zt=x.a.p(Mt||(Mt=Object(u.a)(["\n  margin: 20px 80px;\n"])));function Qt(t){var n=t.tasks,e=t.setTasks,a=t.completed,r=t.setCompleted,o=t.activeTaskList,i=A().setAddTask,s=W(),u=s.loggedIn,d=s.username,f=Object(c.useCallback)((function(t){try{var a;null===(a=gapi.client.tasks.tasks)||void 0===a||a.insert({resource:t,tasklist:o.id}).then((function(t){if("OK"!==t.statusText)throw Error("failed to add task");e(Ft()(n,{$push:[t.result]}))})).catch((function(t){return console.error(t)}))}catch(r){console.error(r)}}),[n,e,o.id]);Object(c.useEffect)((function(){i(f)}),[f,i]);var h,g=Object(c.useState)({}),j=Object(l.a)(g,2),b=j[0],p=j[1];function x(t,n,e,a,r,c){n(Ft()(t,Object(Nt.a)({},r,{$merge:c})));var o=b[a];if(void 0!==o&&clearTimeout(o),""!==c.title){var i=window.setTimeout((function(){var t;null===(t=gapi.client.tasks.tasks)||void 0===t||t.patch({resource:c,tasklist:e,task:a}).then((function(t){if("OK"!==t.statusText)throw Error("failed to update task ".concat(e," : ").concat(a));p(Ft()(b,{$unset:[a]}))})).catch((function(t){return console.error(t)}))}),500);p(Ft()(b,{$merge:Object(Nt.a)({},a,i)}))}}function m(t,n,e,a,r){try{var c;null===(c=gapi.client.tasks.tasks)||void 0===c||c.delete({tasklist:e,task:a}).then((function(c){if(204!==c.status)throw Error("failed to delete task ".concat(e," : ").concat(a));n(Ft()(t,{$splice:[[r,1]]}))})).catch((function(t){return console.error(t)}))}catch(o){console.error(o)}}function O(t,n,e,a,r,c,o){var i,s=t[o],l={status:"completed"===s.status?"needsAction":"completed"};null===(i=gapi.client.tasks.tasks)||void 0===i||i.patch({resource:l,tasklist:r,task:c}).then((function(i){if("OK"!==i.statusText)throw Error("failed to toggle task completed ".concat(r," : ").concat(c));var l=Ft()(t,{$splice:[[o,1]]});n(l);var u=Ft()(e,{$push:[Ft()(s,"completed"===s.status?{$unset:["completed"],$merge:{status:"needsAction"}}:{$merge:{status:"completed"}})]});a(u)}))}return h=u?Object(L.jsxs)(L.Fragment,{children:[n.length?n.map((function(t,c){return Object(L.jsx)(Bt,{task:t,setTask:v(x,n,e,o.id,t.id,c),setChecked:v(O,n,e,a,r,o.id,t.id,c),setDeleted:v(m,n,e,o.id,t.id,c)},c)})):Object(L.jsxs)(Zt,{children:["Looks like you have some free time, ",d," :)"]}),Object(L.jsx)(Yt,{tasks:a,setTask:v(x,a,r,o.id),setChecked:v(O,a,r,n,e,o.id),setDeleted:v(m,a,r,o.id)})]}):Object(L.jsx)(Zt,{children:"Use /login to log into Tasks"}),Object(L.jsx)(Xt,{id:"taskslist",children:h})}var _t=x.a.div(Gt||(Gt=Object(u.a)(["\n  height: var(--homesearch-height);\n\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (max-width: 608px) {\n    & {\n      height: min-content;\n      margin: 60px 0;\n    }\n  }\n"])));function tn(){var t=k("tasklists",[]),n=Object(l.a)(t,2),e=n[0],a=n[1],r=k("activelist",{}),o=Object(l.a)(r,2),i=o[0],s=o[1],u=k("tasks",[]),d=Object(l.a)(u,2),f=d[0],h=d[1],g=k("completed",[]),j=Object(l.a)(g,2),b=j[0],p=j[1],x=W().loggedIn;return Object(c.useEffect)((function(){h(f.sort((function(t,n){return t.due&&n.due?new Date(t.due).getTime()-new Date(n.due).getTime():t.position&&n.position?t.position.localeCompare(n.position):0})))}),[f,h]),Object(c.useEffect)((function(){if(x)try{var t;null===(t=q.a.client.tasks.tasklists)||void 0===t||t.list().then((function(t){if("OK"!==t.statusText)throw Error("failed to get tasklists");t.result.items&&(a(t.result.items),void 0===i.title&&s(t.result.items[0]))})).catch((function(t){console.error(t)}))}catch(n){console.error(n)}}),[x,a,s,i.title]),Object(c.useEffect)((function(){if(x&&i.id)try{var t;null===(t=q.a.client.tasks.tasks)||void 0===t||t.list({tasklist:i.id,showCompleted:!0,maxResults:100}).then((function(t){if("OK"!==t.statusText)throw Error("failed to get tasks for list ".concat(i.title));var n=t.result.items||[];h(n.filter((function(t){return void 0===t.completed}))),p(n.filter((function(t){return t.completed})))})).catch((function(t){return console.error(t)}))}catch(n){console.error(n)}}),[x,h,p,i.id,i.title]),Object(L.jsxs)(_t,{id:"tasksmain",children:[Object(L.jsx)(wt,{tasklists:e,activeList:i,setActiveList:s}),Object(L.jsx)(Qt,{tasks:f,setTasks:h,completed:b,setCompleted:p,activeTaskList:i})]})}function nn(){return Object(c.useEffect)((function(){var t,n;document.documentElement.style.setProperty("--base","".concat((t=10,n=360,Math.floor(Math.random()*(n-t+1))+t)))}),[]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(pt,{}),Object(L.jsx)(tn,{})]})}e(61),e(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(L.jsx)(o.a.StrictMode,{children:Object(L.jsx)(nn,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.50d38e3b.chunk.js.map