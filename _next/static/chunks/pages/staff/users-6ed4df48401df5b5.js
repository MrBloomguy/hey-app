(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3627],{67161:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/staff/users",function(){return r(47493)}])},861:(e,t,r)=>{"use strict";r.d(t,{A:()=>g});var s=r(65723),a=r(19429),l=r(3817),i=r(36018),n=r(91983),c=r(22155),d=r(45199),o=r(51673);let u=e=>{let{items:t}=e,{pathname:r}=(0,n.useRouter)(),u=t.filter(e=>(null==e?void 0:e.enabled)!==!1),[x,m]=(0,c.useState)(u.find(e=>e.url===r)||u[0]);return(0,s.jsx)("div",{className:"mb-4 space-y-2",children:(0,s.jsx)(a.W1,{as:"div",className:"relative",children:e=>{let{open:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.IU,{className:(0,i.A)("flex w-full items-center space-x-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-left outline-none focus:border-gray-500 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800",{"bg-gray-200 text-black dark:bg-gray-800 dark:text-white":t,"text-gray-700 hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white":!t}),children:[x.icon,(0,s.jsx)("div",{children:x.title})]}),(0,s.jsx)(d.A,{children:(0,s.jsx)(a.c,{className:"absolute z-10 mt-2 w-full",static:!0,children:(0,s.jsx)(l.Zp,{forceRounded:!0,children:u.map(e=>(0,s.jsxs)(a.Dr,{as:o.S,className:t=>{let{focus:r}=t;return(0,i.A)({"dropdown-active":r||x===e},"m-2 flex items-center space-x-2 rounded-lg p-2")},href:e.url,onClick:()=>m(e),children:[e.icon,(0,s.jsx)("div",{children:e.title})]},e.url))})})})]})}})})};var x=r(7606),m=r.n(x);let h=e=>{let{children:t,current:r,url:a}=e;return(0,s.jsx)(m(),{className:(0,i.A)({"font-bold text-black dark:text-white":r},{"bg-gray-300 dark:bg-gray-300/20":r},"hover:bg-gray-300 dark:hover:bg-gray-300/30","hover:text-black hover:dark:text-white","flex items-center space-x-2 rounded-lg px-3 py-2"),href:a,children:t})},f=e=>{let{items:t}=e,{pathname:r}=(0,n.useRouter)(),a=t.filter(e=>!1!==e.enabled);return(0,s.jsx)("div",{className:"mb-4 space-y-2 px-3 sm:px-0",children:a.map(e=>(0,s.jsxs)(h,{current:r===e.url||!0===e.active,url:e.url,children:[e.icon,(0,s.jsx)("div",{children:e.title})]},e.title))})},g=e=>{let{items:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"hidden lg:block",children:(0,s.jsx)(f,{items:t})}),(0,s.jsx)("div",{className:"block lg:hidden",children:(0,s.jsx)(u,{items:t})})]})}},36790:(e,t,r)=>{"use strict";r.d(t,{A:()=>m});var s=r(65723),a=r(861),l=r(22155);let i=l.forwardRef(function(e,t){let{title:r,titleId:s,...a}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},a),r?l.createElement("title",{id:s},r):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"}))});var n=r(73180),c=r(26952),d=r(73574),o=r(54299),u=r(97638);let x=[{icon:(0,s.jsx)(i,{className:"size-4"}),title:"Overview",url:"/staff"},{icon:(0,s.jsx)(n.A,{className:"size-4"}),title:"Revenue",url:"/staff/revenue"},{icon:(0,s.jsx)(c.A,{className:"size-4"}),title:"Stats",url:"/staff/stats"},{icon:(0,s.jsx)(d.A,{className:"size-4"}),title:"Users",url:"/staff/users"},{icon:(0,s.jsx)(n.A,{className:"size-4"}),title:"Tokens",url:"/staff/tokens"},{icon:(0,s.jsx)(o.A,{className:"size-4"}),title:"Permissions",url:"/staff/permissions"},{icon:(0,s.jsx)(u.A,{className:"size-4"}),title:"Signup",url:"/staff/signup"}],m=()=>(0,s.jsx)("div",{className:"mb-4 px-3 sm:px-0",children:(0,s.jsx)(a.A,{items:x})})},47493:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var s=r(65723),a=r(45507),l=r(56495),i=r(99777),n=r(88253),c=r(74716),d=r(3817),o=r(17702),u=r(22155),x=r(1615),m=r(84865),h=r(36790),f=r(96475);let g=()=>{let{currentAccount:e}=(0,m.E)(),t=(0,o._P)(n.T.Staff);return((0,u.useEffect)(()=>{l.s.track(c.zQ,{page:"staff-tools",subpage:"users"})},[]),e&&t)?(0,s.jsxs)(d.JT,{children:[(0,s.jsx)(a.A,{title:"Staff Tools • Users • ".concat(i.C3)}),(0,s.jsx)(d.an,{children:(0,s.jsx)(h.A,{})}),(0,s.jsx)(d.$l,{children:(0,s.jsx)(f.A,{})})]}):(0,s.jsx)(x.default,{})}},54299:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(22155);let a=s.forwardRef(function(e,t){let{title:r,titleId:a,...l}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?s.createElement("title",{id:a},r):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"}))})},97638:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(22155);let a=s.forwardRef(function(e,t){let{title:r,titleId:a,...l}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),r?s.createElement("title",{id:a},r):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"}))})}},e=>{var t=t=>e(e.s=t);e.O(0,[6475,636,6593,8792],()=>t(67161)),_N_E=e.O()}]);