(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5500],{74040:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/mod",function(){return t(20645)}])},20645:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>$});var l=t(65723),a=t(45507),i=t(8226),n=t(96475),r=t(56495),c=t(99777),o=t(90823),d=t(88253),m=t(74716),x=t(3817),u=t(17702),p=t(22155),v=t(1615);let j=e=>{let{feedType:s,setFeedType:t}=e,a=[{name:"Latest Publications",type:o.$4.LATEST},{name:"Latest Reports",type:o.$4.REPORTS},{name:"Search Publications",type:o.$4.SEARCH},{name:"Search Profiles",type:o.$4.PROFILES}];return(0,l.jsx)("div",{className:"flex gap-3 overflow-x-auto px-5 sm:px-0",children:a.map(e=>(0,l.jsx)(x.KM,{active:s===e.type,name:e.name,onClick:()=>t(e.type)},e.type))})};var h=t(14834),f=t(19301),y=t(30055);let N=["hey","tape","orb","phaver","buttrfly","chainjet","lenspeer","t2.world","yup","focalize","bloomers.tv","kaira","orna.art","firefly","0xppl"],E=(0,y.v)(e=>({apps:null,customFilters:[h.j7g.Gardeners],mainContentFocus:Object.keys(h.PmR).map(e=>h.PmR[e]),publicationTypes:[h.Ix.Post,h.Ix.Quote,h.Ix.Comment],refresh:!1,refreshing:!1,setApps:s=>e(()=>({apps:s})),setCustomFilters:s=>e(()=>({customFilters:s})),setMainContentFocus:s=>e(()=>({mainContentFocus:s})),setPublicationTypes:s=>e(()=>({publicationTypes:s})),setRefresh:s=>e(()=>({refresh:s})),setRefreshing:s=>e(()=>({refreshing:s}))})),S=(0,f.q)(E),b=()=>{let{apps:e,customFilters:s,mainContentFocus:t,publicationTypes:a,refresh:i,refreshing:n,setApps:r,setCustomFilters:c,setMainContentFocus:o,setPublicationTypes:d,setRefresh:m}=S(),u=e=>{t.includes(e)?o(t.filter(s=>s!==e)):o([...t,e])},p=e=>{a.includes(e)?d(a.filter(s=>s!==e)):d([...a,e])};return(0,l.jsx)(x.Zp,{className:"p-5",children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x.$n,{className:"w-full",disabled:n,onClick:()=>m(!i),children:"Refresh feed"}),(0,l.jsx)("div",{className:"divider my-3"}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("b",{children:"Publication filters"}),(0,l.jsxs)("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3 text-sm",children:[(0,l.jsx)(x.Sc,{checked:a.includes(h.Ix.Post),label:"Posts",name:"posts",onChange:()=>p(h.Ix.Post)}),(0,l.jsx)(x.Sc,{checked:a.includes(h.Ix.Comment),label:"Comments",name:"comments",onChange:()=>p(h.Ix.Comment)}),(0,l.jsx)(x.Sc,{checked:a.includes(h.Ix.Quote),label:"Quotes",name:"quotes",onChange:()=>p(h.Ix.Quote)})]})]}),(0,l.jsx)("div",{className:"divider my-3"}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,l.jsx)("b",{children:"Media filters"}),(0,l.jsx)("button",{className:"text-xs underline",onClick:()=>{t.length===Object.keys(h.PmR).length?o([]):o(Object.keys(h.PmR).map(e=>h.PmR[e]))},type:"button",children:t.length===Object.keys(h.PmR).length?"Unselect all":"Select all"})]}),(0,l.jsx)("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3 text-sm",children:Object.keys(h.PmR).map(e=>(0,l.jsx)(x.Sc,{checked:t.includes(h.PmR[e]),label:e,name:e,onChange:()=>u(h.PmR[e])},e))})]}),(0,l.jsx)("div",{className:"divider my-3"}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsx)("b",{children:"Custom filters"}),(0,l.jsx)("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3 text-sm",children:(0,l.jsx)(x.Sc,{checked:s.includes(h.j7g.Gardeners),label:"Gardeners",name:"gardeners",onChange:()=>{s.includes(h.j7g.Gardeners)?c(s.filter(e=>e!==h.j7g.Gardeners)):c([...s,h.j7g.Gardeners])}})})]}),(0,l.jsx)("div",{className:"divider my-3"}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,l.jsx)("b",{children:"Known apps filter"}),(0,l.jsx)("button",{className:"text-xs underline",onClick:()=>r([]),type:"reset",children:"Reset"})]}),(0,l.jsx)("div",{className:"flex flex-wrap items-center gap-x-5 gap-y-3 text-sm",children:N.map(s=>(0,l.jsx)(x.Sc,{checked:null==e?void 0:e.includes(s),label:s,name:s,onChange:()=>{(null==e?void 0:e.includes(s))?r(e.filter(e=>e!==s)):r([...e||[],s])}},s))})]})]})})};var R=t(85590);let g=e=>{let{post:s}=e;return(0,l.jsx)("div",{className:"m-5",children:(0,l.jsx)(R.A,{post:s})})};var C=t(7006),P=t(74421),L=t(5519),A=t(98345);let O=c.Ao?["0x24b6"]:[],T=()=>{var e,s;let{apps:t,customFilters:a,mainContentFocus:i,publicationTypes:n,refresh:r,setRefreshing:c}=S(),o={limit:h.gTn.Fifty,orderBy:h.czi.Latest,where:{customFilters:a,metadata:{mainContentFocus:i,...t&&{publishedOn:t}},publicationTypes:n}},{data:d,error:m,fetchMore:u,loading:v,refetch:j}=(0,h.yEZ)({variables:{request:o}}),f=null==d?void 0:null===(e=d.modExplorePublications)||void 0===e?void 0:e.items,y=null==d?void 0:null===(s=d.modExplorePublications)||void 0===s?void 0:s.pageInfo,N=null==y?void 0:y.next;(0,p.useEffect)(()=>{c(!0),j().finally(()=>c(!1))},[r,n,i,a]);let E=async()=>{N&&await u({variables:{request:{...o,cursor:null==y?void 0:y.next}}})};return v?(0,l.jsx)(P.A,{}):(null==f?void 0:f.length)===0?(0,l.jsx)(x.pp,{icon:(0,l.jsx)(L.A,{className:"size-8"}),message:"No posts yet!"}):m?(0,l.jsx)(x.Kw,{error:m,title:"Failed to load moderation feed"}):(0,l.jsx)(A.aY,{className:"[&>div>div]:space-y-5",components:{Footer:()=>(0,l.jsx)("div",{className:"pb-5"})},computeItemKey:(e,s)=>"".concat(s.id,"-").concat(e),data:null==f?void 0:f.filter(e=>{var s;return!O.includes(null==e?void 0:null===(s=e.by)||void 0===s?void 0:s.id)}),endReached:E,itemContent:(e,s)=>(0,l.jsxs)(x.Zp,{children:[(0,l.jsx)(C.A,{isFirst:!0,isLast:!1,post:s,showActions:!1,showThread:!1}),(0,l.jsx)("div",{className:"divider"}),(0,l.jsx)(g,{post:s})]}),useWindowScroll:!0})};var w=t(10499),I=t(38206);let k=()=>{var e,s;let t={limit:h.gTn.Fifty},{data:a,error:i,fetchMore:n,loading:r}=(0,h.MIc)({variables:{request:t}}),c=null==a?void 0:null===(e=a.modLatestReports)||void 0===e?void 0:e.items,o=null==a?void 0:null===(s=a.modLatestReports)||void 0===s?void 0:s.pageInfo,d=null==o?void 0:o.next,m=async()=>{d&&await n({variables:{request:{...t,cursor:null==o?void 0:o.next}}})};return r?(0,l.jsx)(P.A,{}):(null==c?void 0:c.length)===0?(0,l.jsx)(x.pp,{icon:(0,l.jsx)(w.A,{className:"size-8"}),message:"No reports yet!"}):i?(0,l.jsx)(x.Kw,{error:i,title:"Failed to load reports feed"}):(0,l.jsx)(A.aY,{className:"[&>div>div]:space-y-5",components:{Footer:()=>(0,l.jsx)("div",{className:"pb-5"})},computeItemKey:(e,s)=>{var t;return"".concat(s.reporter.id,"-").concat(null===(t=s.reportedPublication)||void 0===t?void 0:t.id,"-").concat(e)},data:c,endReached:m,itemContent:(e,s)=>s.reportedPublication?(0,l.jsxs)(x.Zp,{children:[(0,l.jsx)(C.A,{isFirst:!0,post:s.reportedPublication,showActions:!1,showThread:!1}),(0,l.jsx)("div",{className:"divider"}),(0,l.jsx)(I.A,{report:s})]}):null,useWindowScroll:!0})};var F=t(9381);let M=()=>{let{apps:e,customFilters:s,mainContentFocus:t,publicationTypes:a,refresh:i,setRefreshing:n}=S(),[c,o]=(0,p.useState)(""),[d,u]=(0,p.useState)(""),v={limit:h.gTn.Fifty,query:d,where:{customFilters:s,metadata:{mainContentFocus:t,...e&&{publishedOn:e}},publicationTypes:a}},{data:j,error:f,fetchMore:y,loading:N,refetch:E}=(0,h.xAt)({skip:!d,variables:{request:v}}),b=null==j?void 0:j.searchPublications,R=null==b?void 0:b.items,O=null==b?void 0:b.pageInfo,T=null==O?void 0:O.next;(0,p.useEffect)(()=>{n(!0),E().finally(()=>n(!1))},[i,a,t,s]);let w=async()=>{T&&await y({variables:{request:{...v,cursor:null==O?void 0:O.next}}})};return(0,l.jsxs)("div",{className:"space-y-5",children:[(0,l.jsxs)("form",{className:"flex items-center space-x-2",onSubmit:e=>{e.preventDefault(),u(c),r.s.track(m.hd.SEARCH_POST,{query:c})},children:[(0,l.jsx)(x.pd,{onChange:e=>o(e.target.value),placeholder:"Search Posts",type:"text",value:c}),(0,l.jsx)(x.$n,{size:"lg",children:"Search"})]}),N?(0,l.jsx)(P.A,{}):d&&(null==R?void 0:R.length)!==0?f?(0,l.jsx)(x.Kw,{error:f,title:"Failed to load search feed"}):(0,l.jsx)(A.aY,{className:"[&>div>div]:space-y-5",components:{Footer:()=>(0,l.jsx)("div",{className:"pb-5"})},computeItemKey:(e,s)=>"".concat(s.id,"-").concat(e),data:R,endReached:w,itemContent:(e,s)=>{let t=(0,F.y)(s)?s.mirrorOn:s;return(0,l.jsxs)(x.Zp,{children:[(0,l.jsx)(C.A,{isFirst:!0,isLast:!1,post:s,showActions:!1,showThread:!1}),(0,l.jsx)("div",{className:"divider"}),(0,l.jsx)(g,{post:t})]})},useWindowScroll:!0}):(0,l.jsx)(x.pp,{icon:(0,l.jsx)(L.A,{className:"size-8"}),message:"No posts yet!"})]})},$=()=>{let[e,s]=(0,p.useState)(o.$4.LATEST),t=(0,u._P)(d.T.Gardener);return((0,p.useEffect)(()=>{r.s.track(m.zQ,{page:"mod"})},[]),t)?(0,l.jsxs)(x.JT,{children:[(0,l.jsx)(a.A,{title:"Mod Center • ".concat(c.C3)}),(0,l.jsxs)(x.$l,{className:"space-y-5",children:[(0,l.jsx)(j,{feedType:e,setFeedType:s}),e===o.$4.LATEST&&(0,l.jsx)(T,{}),e===o.$4.SEARCH&&(0,l.jsx)(M,{}),e===o.$4.PROFILES&&(0,l.jsx)(n.A,{}),e===o.$4.REPORTS&&(0,l.jsx)(k,{})]}),(0,l.jsxs)(x.an,{children:[(e===o.$4.LATEST||e===o.$4.SEARCH)&&(0,l.jsx)(b,{}),e===o.$4.PROFILES&&(0,l.jsx)(x.Zp,{className:"p-5",children:(0,l.jsx)("div",{children:"All the profiles"})}),e===o.$4.REPORTS&&(0,l.jsx)(x.Zp,{className:"p-5",children:(0,l.jsx)("div",{children:"Reported Publications"})}),(0,l.jsx)(i.A,{})]})]}):(0,l.jsx)(v.default,{})}},90823:(e,s,t)=>{"use strict";t.d(s,{$4:()=>a,Ai:()=>n,Dx:()=>r,O$:()=>l,q:()=>i,qP:()=>c});var l=function(e){return e.FOLLOWING="FOLLOWING",e.FORYOU="FORYOU",e.PREMIUM="PREMIUM",e.PINNED="PINNED",e}({}),a=function(e){return e.LATEST="LATEST",e.PROFILES="PROFILES",e.REPORTS="REPORTS",e.SEARCH="SEARCH",e}({}),i=function(e){return e.Collects="COLLECTS",e.Feed="FEED",e.Media="MEDIA",e.Replies="REPLIES",e.Lists="LISTS",e}({}),n=function(e){return e.All="ALL",e.Collects="COLLECTS",e.Comments="COMMENTS",e.Likes="LIKES",e.Mentions="MENTIONS",e}({}),r=function(e){return e.All="ALL",e.Collects="COLLECTS",e.Comments="COMMENTS",e.Likes="LIKES",e.Mentions="MENTIONS",e}({}),c=function(e){return e.Overview="OVERVIEW",e.Impressions="IMPRESSIONS",e}({})},5519:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});var l=t(22155);let a=l.forwardRef(function(e,s){let{title:t,titleId:a,...i}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":a},i),t?l.createElement("title",{id:a},t):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"}))})}},e=>{var s=s=>e(e.s=s);e.O(0,[6475,636,6593,8792],()=>s(74040)),_N_E=e.O()}]);