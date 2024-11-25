(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5012],{29445:function(e){var t;t=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(r,a,n){var i=a.prototype;n.utc=function(e){var t={date:e,utc:!0,args:arguments};return new a(t)},i.utc=function(t){var s=n(this.toDate(),{locale:this.$L,utc:!0});return t?s.add(this.utcOffset(),e):s},i.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var l=i.parse;i.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),l.call(this,e)};var c=i.init;i.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else c.call(this)};var o=i.utcOffset;i.utcOffset=function(r,a){var n=this.$utils().u;if(n(r))return this.$u?0:n(this.$offset)?o.call(this):this.$offset;if("string"==typeof r&&null===(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var a=(""+r[0]).match(s)||["-",0,0],n=a[0],i=60*+a[1]+ +a[2];return 0===i?0:"+"===n?i:-i}(r)))return this;var i=16>=Math.abs(r)?60*r:r,l=this;if(a)return l.$offset=i,l.$u=0===r,l;if(0!==r){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(l=this.local().add(i+c,e)).$offset=i,l.$x.$localOffset=c}else l=this.utc();return l};var d=i.format;i.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,t)},i.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var u=i.toDate;i.toDate=function(e){return"s"===e&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():u.call(this)};var h=i.diff;i.diff=function(e,t,s){if(e&&this.$u===e.$u)return h.call(this,e,t,s);var r=this.local(),a=n(e).local();return h.call(r,a,t,s)}}},e.exports=t()},96616:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/preferences",function(){return s(67136)}])},48987:(e,t,s)=>{"use strict";s.d(t,{A:()=>x});var r=s(65723),a=s(87771),n=s(21811),i=s(69456),l=s(56495),c=s(22155);let o=c.forwardRef(function(e,t){let{title:s,titleId:r,...a}=e;return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),s?c.createElement("title",{id:r},s):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"}))});var d=s(99777),u=s(74716),h=s(45571),m=s(38700),f=s(6522);let x=()=>{let{highSignalNotificationFilter:e,setHighSignalNotificationFilter:t}=(0,f.x)(),[s,x]=(0,c.useState)(!1),g=async()=>{try{x(!0),await h.A.post("".concat(d.uI,"/preferences/update"),{highSignalNotificationFilter:!e},{headers:(0,i.r)()}),t(!e),m.Ay.success("Notification preference updated"),l.s.track(u.yy.PREFERENCES.TOGGLE_HIGH_SIGNAL_NOTIFICATION_FILTER,{enabled:!e})}catch(e){(0,n.A)(e)}finally{x(!1)}};return(0,r.jsx)(a.A,{description:"Turn on high-signal notification filter",disabled:s,heading:"Notification Signal filter",icon:(0,r.jsx)(o,{className:"size-5"}),on:e,setOn:g})}},95533:(e,t,s)=>{"use strict";s.d(t,{A:()=>w});var r=s(65723),a=s(861),n=s(22690),i=s(73574),l=s(22155);let c=l.forwardRef(function(e,t){let{title:s,titleId:r,...a}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),s?l.createElement("title",{id:r},s):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"}))});var o=s(80108),d=s(9202),u=s(57845);let h=l.forwardRef(function(e,t){let{title:s,titleId:r,...a}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),s?l.createElement("title",{id:r},s):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"}))}),m=l.forwardRef(function(e,t){let{title:s,titleId:r,...a}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),s?l.createElement("title",{id:r},s):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"}))});var f=s(49505),x=s(75388),g=s(96122),p=s(20275),v=s(54126),j=s(84865);let w=()=>{let{currentAccount:e}=(0,j.E)(),t=[{icon:(0,r.jsx)(i.A,{className:"size-4"}),title:"Profile",url:"/settings"},{icon:(0,r.jsx)(c,{className:"size-4"}),title:"Account",url:"/settings/account"},{icon:(0,r.jsx)(o.A,{className:"size-4"}),title:"Handles",url:"/settings/handles"},{icon:(0,r.jsx)(d.A,{className:"size-4"}),title:"Preferences",url:"/settings/preferences"},{icon:(0,r.jsx)(u.A,{className:"size-4"}),title:"Interests",url:"/settings/interests"},{icon:(0,r.jsx)(h,{className:"size-4"}),title:"Manager",url:"/settings/manager"},{icon:(0,r.jsx)(m,{className:"size-4"}),title:"Allowance",url:"/settings/allowance"},{icon:(0,r.jsx)(f.A,{className:"size-4"}),title:"Sessions",url:"/settings/sessions"},{icon:(0,r.jsx)(x.A,{className:"size-4"}),title:"Action History",url:"/settings/actions"},{icon:(0,r.jsx)(g.A,{className:"size-4"}),title:"Blocked Profiles",url:"/settings/blocked"},{icon:(0,r.jsx)(p.A,{className:"size-4"}),title:"Export",url:"/settings/export"},{icon:(0,r.jsx)(v.A,{className:"size-4 text-red-500"}),title:(0,r.jsx)("div",{className:"text-red-500",children:"Danger zone"}),url:"/settings/danger"}];return(0,r.jsxs)("div",{className:"mb-4 px-3 sm:px-0",children:[(0,r.jsx)("div",{className:"pb-3",children:(0,r.jsx)(n.A,{hideFollowButton:!0,hideUnfollowButton:!0,account:e,showUserPreview:!1})}),(0,r.jsx)(a.A,{items:t})]})}},62707:(e,t,s)=>{"use strict";s.d(t,{A:()=>c});var r=s(65723),a=s(45507),n=s(71180),i=s(99777),l=s(3817);let c=()=>(0,r.jsxs)("div",{className:"page-center flex-col",children:[(0,r.jsx)(a.A,{title:"Not logged in • ".concat(i.C3)}),(0,r.jsx)("img",{alt:"Logo",className:"size-20",height:80,src:"/logo.png",width:80}),(0,r.jsxs)("div",{className:"py-10 text-center",children:[(0,r.jsx)(l.H2,{className:"mb-4",children:"Not logged in!"}),(0,r.jsx)("div",{className:"mb-4",children:"Log in to continue"}),(0,r.jsx)(n.A,{isBig:!0})]})]})},861:(e,t,s)=>{"use strict";s.d(t,{A:()=>g});var r=s(65723),a=s(19429),n=s(3817),i=s(36018),l=s(91983),c=s(22155),o=s(45199),d=s(51673);let u=e=>{let{items:t}=e,{pathname:s}=(0,l.useRouter)(),u=t.filter(e=>(null==e?void 0:e.enabled)!==!1),[h,m]=(0,c.useState)(u.find(e=>e.url===s)||u[0]);return(0,r.jsx)("div",{className:"mb-4 space-y-2",children:(0,r.jsx)(a.W1,{as:"div",className:"relative",children:e=>{let{open:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.IU,{className:(0,i.A)("flex w-full items-center space-x-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-left outline-none focus:border-gray-500 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800",{"bg-gray-200 text-black dark:bg-gray-800 dark:text-white":t,"text-gray-700 hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white":!t}),children:[h.icon,(0,r.jsx)("div",{children:h.title})]}),(0,r.jsx)(o.A,{children:(0,r.jsx)(a.c,{className:"absolute z-10 mt-2 w-full",static:!0,children:(0,r.jsx)(n.Zp,{forceRounded:!0,children:u.map(e=>(0,r.jsxs)(a.Dr,{as:d.S,className:t=>{let{focus:s}=t;return(0,i.A)({"dropdown-active":s||h===e},"m-2 flex items-center space-x-2 rounded-lg p-2")},href:e.url,onClick:()=>m(e),children:[e.icon,(0,r.jsx)("div",{children:e.title})]},e.url))})})})]})}})})};var h=s(7606),m=s.n(h);let f=e=>{let{children:t,current:s,url:a}=e;return(0,r.jsx)(m(),{className:(0,i.A)({"font-bold text-black dark:text-white":s},{"bg-gray-300 dark:bg-gray-300/20":s},"hover:bg-gray-300 dark:hover:bg-gray-300/30","hover:text-black hover:dark:text-white","flex items-center space-x-2 rounded-lg px-3 py-2"),href:a,children:t})},x=e=>{let{items:t}=e,{pathname:s}=(0,l.useRouter)(),a=t.filter(e=>!1!==e.enabled);return(0,r.jsx)("div",{className:"mb-4 space-y-2 px-3 sm:px-0",children:a.map(e=>(0,r.jsxs)(f,{current:s===e.url||!0===e.active,url:e.url,children:[e.icon,(0,r.jsx)("div",{children:e.title})]},e.title))})},g=e=>{let{items:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"hidden lg:block",children:(0,r.jsx)(x,{items:t})}),(0,r.jsx)("div",{className:"block lg:hidden",children:(0,r.jsx)(u,{items:t})})]})}},87771:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var r=s(65723),a=s(3817);let n=e=>{let{description:t,disabled:s=!1,heading:n,icon:i,on:l,setOn:c}=e;return(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-start space-x-3",children:[i&&(0,r.jsx)("span",{className:"mt-1",children:i}),(0,r.jsxs)("div",{children:[n&&(0,r.jsx)("b",{children:n}),(0,r.jsx)(a.H6,{className:"ld-text-gray-500 font-normal",children:t})]})]}),(0,r.jsx)(a.lM,{disabled:s,on:l,setOn:c})]})}},67136:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>O});var r=s(65723),a=s(45507),n=s(62707),i=s(56495),l=s(99777),c=s(74716),o=s(3817),d=s(22155),u=s(84865),h=s(95533),m=s(21811),f=s(69456),x=s(65847),g=s(36898),p=s(45571),v=s(38700),j=s(6522);let w=[{id:0,name:"Default"},{id:1,name:"Pride"},{id:2,name:"Emerald"},{id:3,name:"Indigo"},{id:4,name:"Violet"}],y=()=>{let{appIcon:e,setAppIcon:t}=(0,j.x)(),[s,a]=(0,d.useState)(!1),n=async e=>{try{a(!0),await p.A.post("".concat(l.uI,"/preferences/update"),{appIcon:e},{headers:(0,f.r)()}),t(e),v.Ay.success("App icon updated"),i.s.track(c.yy.PREFERENCES.APP_ICON,{appIcon:e})}catch(e){(0,m.A)(e)}finally{a(!1)}};return(0,r.jsxs)(o.Zp,{children:[(0,r.jsx)(o.aR,{body:"Choose a custom app icon for ".concat(l.C3,", that will be used everywhere on the app."),title:"Choose App Icon"}),(0,r.jsx)("div",{className:"m-5 flex flex-wrap items-center gap-x-8",children:w.map(t=>(0,r.jsx)(o.m_,{content:t.name,placement:"top",children:(0,r.jsxs)("button",{className:"flex flex-col items-center space-y-2",disabled:s,onClick:()=>n(t.id),type:"button",children:[(0,r.jsx)("img",{alt:t.name,className:"size-10",src:"".concat(l.Un,"/app-icon/").concat(t.id,".png")}),t.id===e?(0,r.jsx)(g.A,{className:"size-5 text-green-500"}):(0,r.jsx)(x.A,{className:"ld-text-gray-500 size-5"})]})},t.id))})]})};var b=s(87771);let N=d.forwardRef(function(e,t){let{title:s,titleId:r,...a}=e;return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),s?d.createElement("title",{id:r},s):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"}))}),A=()=>{let{developerMode:e,setDeveloperMode:t}=(0,j.x)(),[s,a]=(0,d.useState)(!1),n=async()=>{try{a(!0),await p.A.post("".concat(l.uI,"/preferences/update"),{developerMode:!e},{headers:(0,f.r)()}),t(!e),v.Ay.success("Developer mode updated"),i.s.track(c.yy.PREFERENCES.TOGGLE_DEVELOPER_MODE,{enabled:!e})}catch(e){(0,m.A)(e)}finally{a(!1)}};return(0,r.jsx)(b.A,{description:"Turn on developer mode",disabled:s,heading:"Developer mode",icon:(0,r.jsx)(N,{className:"size-5"}),on:e,setOn:n})};var k=s(48987),E=s(19115),C=s(18195),$=s(53329);let M=()=>{let{mutedWords:e,setMutedWords:t}=(0,j.x)(),[s,a]=(0,d.useState)(""),[n,u]=(0,d.useState)(-1),[h,x]=(0,d.useState)(null),[g,w]=(0,d.useState)(!1),y=async()=>{try{w(!0);let{data:r}=await p.A.post("".concat(l.uI,"/preferences/mute"),{word:s,expiresAt:-1===n?null:(0,$.A)(n)},{headers:(0,f.r)()});t([...e,{word:s,expiresAt:-1===n?null:new Date((0,$.A)(n)),id:r.result.id}]),a(""),u(-1),v.Ay.success("Muted word updated"),i.s.track(c.yy.PREFERENCES.MUTE_WORD)}catch(e){(0,m.A)(e)}finally{w(!1)}},b=async s=>{try{x(s);let{data:r}=await p.A.post("".concat(l.uI,"/preferences/unmute"),{id:s},{headers:(0,f.r)()});t(e.filter(e=>e.id!==r.result.id)),v.Ay.success("Muted word removed"),i.s.track(c.yy.PREFERENCES.UNMUTE_WORD)}catch(e){(0,m.A)(e)}finally{x(null)}};return(0,r.jsxs)(o.Zp,{children:[(0,r.jsx)(o.aR,{body:"Mute words that you don't want to see in your notifications.",title:"Muted Words"}),(0,r.jsxs)("div",{className:"m-5",children:[(0,r.jsxs)("div",{className:"space-y-5",children:[(0,r.jsx)(o.pd,{disabled:g,onChange:e=>a(e.target.value),value:s,placeholder:"Enter a word to mute"}),(0,r.jsxs)("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3 text-sm",children:[(0,r.jsx)(o.Sc,{checked:-1===n,label:"Forever",name:"forever",onChange:()=>u(-1)}),(0,r.jsx)(o.Sc,{checked:1===n,label:"24 hours",name:"24hours",onChange:()=>u(1)}),(0,r.jsx)(o.Sc,{checked:7===n,label:"7 days",name:"7days",onChange:()=>u(7)}),(0,r.jsx)(o.Sc,{checked:30===n,label:"30 days",name:"30days",onChange:()=>u(30)})]}),(0,r.jsx)(o.$n,{className:"w-full",disabled:g||!s,onClick:y,size:"lg",children:"Mute word"})]}),(0,r.jsx)(o.H5,{className:"mt-5",children:"Your muted words"}),(0,r.jsx)("div",{className:"mt-3 space-y-4",children:e.length?e.map(e=>(0,r.jsxs)(o.Zp,{className:"flex items-center justify-between p-3",children:[(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("b",{children:e.word}),e.expiresAt?(0,r.jsxs)("div",{className:"text-gray-500 text-sm",children:["Expires at ",(0,C.A)(e.expiresAt)]}):null]}),(0,r.jsx)("button",{type:"button",onClick:()=>b(e.id),disabled:h===e.id,children:(0,r.jsx)(E.A,{className:"size-5 text-red-500"})})]},e.word)):(0,r.jsx)(o.Zp,{className:"bg-gray-100 p-3 text-center italic",children:"You haven't muted any words yets"})})]})]})},O=()=>{let{currentAccount:e}=(0,u.E)();return((0,d.useEffect)(()=>{i.s.track(c.zQ,{page:"settings",subpage:"preferences"})},[]),e)?(0,r.jsxs)(o.JT,{children:[(0,r.jsx)(a.A,{title:"Preferences settings • ".concat(l.C3)}),(0,r.jsx)(o.an,{children:(0,r.jsx)(h.A,{})}),(0,r.jsxs)(o.$l,{className:"space-y-5",children:[(0,r.jsxs)(o.Zp,{children:[(0,r.jsx)(o.aR,{body:"Update your preferences to control how you can change your\n            experience on ".concat(l.C3,"."),title:"Your Preferences"}),(0,r.jsxs)("div",{className:"m-5 space-y-5",children:[(0,r.jsx)(k.A,{}),(0,r.jsx)(A,{})]})]}),(0,r.jsx)(y,{}),(0,r.jsx)(M,{})]})]}):(0,r.jsx)(n.A,{})}},53329:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var r=s(59300),a=s.n(r),n=s(68446),i=s.n(n),l=s(29445),c=s.n(l);a().extend(i()),a().extend(c());let o=e=>a()().add(e,"day").utc().format()},9202:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(22155);let a=r.forwardRef(function(e,t){let{title:s,titleId:a,...n}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},n),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"}))})},80108:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(22155);let a=r.forwardRef(function(e,t){let{title:s,titleId:a,...n}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},n),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"}))})},19115:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(22155);let a=r.forwardRef(function(e,t){let{title:s,titleId:a,...n}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},n),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))})}},e=>{var t=t=>e(e.s=t);e.O(0,[636,6593,8792],()=>t(96616)),_N_E=e.O()}]);