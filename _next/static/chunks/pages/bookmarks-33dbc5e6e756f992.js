(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2347],{73604:(e,s,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/bookmarks",function(){return l(60312)}])},61983:(e,s,l)=>{"use strict";l.d(s,{A:()=>w});var o=l(65723),t=l(56495),i=l(7522),a=l(74716),n=l(14834);let r=e=>{let{account:s}=e,[l]=(0,n.wyd)({update:e=>{e.evict({id:e.identify(s)})},variables:{request:{dismiss:[s.id]}}}),r=async()=>{await l(),t.s.track(a.u4.DISMISS_RECOMMENDED_ACCOUNT,{accountId:s.id})};return(0,o.jsx)("button",{onClick:r,type:"reset",children:(0,o.jsx)(i.A,{className:"size-4 text-gray-500"})})};var d=l(51581),c=l(22690),u=l(3817),m=l(22155),x=l(84865),v=l(62231),h=l(98345);let j=e=>{let{accounts:s}=e,{currentAccount:l}=(0,x.E)();return 0===s.length?(0,o.jsx)(u.pp,{hideCard:!0,icon:(0,o.jsx)(v.A,{className:"size-8"}),message:"Nothing to suggest"}):(0,o.jsx)("div",{className:"max-h-[80vh] overflow-y-auto",children:(0,o.jsx)(h.aY,{className:"virtual-account-list",computeItemKey:(e,s)=>"".concat(s.id,"-").concat(e),data:s.slice(5),itemContent:(e,s)=>(0,o.jsxs)("div",{className:"flex items-center space-x-3 p-5",children:[(0,o.jsx)("div",{className:"w-full",children:(0,o.jsx)(c.A,{hideFollowButton:(null==l?void 0:l.id)===s.id,hideUnfollowButton:(null==l?void 0:l.id)===s.id,account:s,showBio:!0,showUserPreview:!1,source:a.vH.WhoToFollow})}),(0,o.jsx)(r,{account:s})]})})})},p=()=>(0,o.jsx)(u.H5,{children:"Who to Follow"}),w=()=>{let{currentAccount:e}=(0,x.E)(),[s,l]=(0,m.useState)(!1),{data:i,error:v,loading:h}=(0,n.zJx)({variables:{request:{for:null==e?void 0:e.id,limit:n.gTn.Fifty,shuffle:!0}}});if(h)return(0,o.jsxs)(u.Zp,{as:"aside",className:"space-y-4 p-5",children:[(0,o.jsx)(p,{}),(0,o.jsx)(d.A,{showFollowUnfollowButton:!0}),(0,o.jsx)(d.A,{showFollowUnfollowButton:!0}),(0,o.jsx)(d.A,{showFollowUnfollowButton:!0}),(0,o.jsx)(d.A,{showFollowUnfollowButton:!0}),(0,o.jsx)(d.A,{showFollowUnfollowButton:!0}),(0,o.jsx)("div",{className:"pt-2 pb-1",children:(0,o.jsx)("div",{className:"shimmer h-3 w-5/12 rounded-full"})})]});if((null==i?void 0:i.profileRecommendations.items.length)===0)return null;let w=null==i?void 0:i.profileRecommendations.items.filter(e=>!e.operations.isBlockedByMe.value&&!e.operations.isFollowedByMe.value);return(null==w?void 0:w.length)===0?null:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(u.Zp,{as:"aside",className:"space-y-4 p-5",children:[(0,o.jsx)(p,{}),(0,o.jsx)(u.Kw,{error:v,title:"Failed to load recommendations"}),null==w?void 0:w.slice(0,5).map(s=>(0,o.jsxs)("div",{className:"flex items-center space-x-3 truncate",children:[(0,o.jsx)("div",{className:"w-full",children:(0,o.jsx)(c.A,{hideFollowButton:(null==e?void 0:e.id)===s.id,hideUnfollowButton:(null==e?void 0:e.id)===s.id,account:s,source:a.vH.WhoToFollow})}),(0,o.jsx)(r,{account:s})]},null==s?void 0:s.id)),(0,o.jsx)("button",{className:"ld-text-gray-500 font-bold",onClick:()=>{l(!0),t.s.track(a.u4.OPEN_RECOMMENDED_ACCOUNTS)},type:"button",children:"Show more"})]}),(0,o.jsx)(u.aF,{onClose:()=>l(!1),show:s,title:"Suggested for you",children:(0,o.jsx)(j,{accounts:w})})]})}},75171:(e,s,l)=>{"use strict";l.d(s,{A:()=>d});var o=l(65723),t=l(56495),i=l(74716),a=l(14834),n=l(36018);let r=e=>{let{focus:s,name:l,setFocus:a,type:r}=e;return(0,o.jsx)("button",{"aria-label":l,className:(0,n.A)(s===r?"bg-black text-white":"bg-gray-100 dark:bg-gray-800","rounded-full px-3 py-1.5 text-xs sm:px-4","border border-gray-300 dark:border-gray-500"),onClick:()=>{a(r),t.s.track(i.Ur.SWITCH_EXPLORE_FEED_FOCUS,{explore_feed_focus:(r||"all_posts").toLowerCase()})},type:"button",children:l})},d=e=>{let{focus:s,setFocus:l}=e;return(0,o.jsxs)("div",{className:"mx-5 my-5 flex flex-wrap gap-3 sm:mx-0",children:[(0,o.jsx)(r,{focus:s,name:"All posts",setFocus:l}),(0,o.jsx)(r,{focus:s,name:"Text",setFocus:l,type:a.PmR.TextOnly}),(0,o.jsx)(r,{focus:s,name:"Video",setFocus:l,type:a.PmR.Video}),(0,o.jsx)(r,{focus:s,name:"Audio",setFocus:l,type:a.PmR.Audio}),(0,o.jsx)(r,{focus:s,name:"Images",setFocus:l,type:a.PmR.Image})]})}},62707:(e,s,l)=>{"use strict";l.d(s,{A:()=>r});var o=l(65723),t=l(45507),i=l(71180),a=l(99777),n=l(3817);let r=()=>(0,o.jsxs)("div",{className:"page-center flex-col",children:[(0,o.jsx)(t.A,{title:"Not logged in • ".concat(a.C3)}),(0,o.jsx)("img",{alt:"Logo",className:"size-20",height:80,src:"/logo.png",width:80}),(0,o.jsxs)("div",{className:"py-10 text-center",children:[(0,o.jsx)(n.H2,{className:"mb-4",children:"Not logged in!"}),(0,o.jsx)("div",{className:"mb-4",children:"Log in to continue"}),(0,o.jsx)(i.A,{isBig:!0})]})]})},60312:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>b});var o=l(65723),t=l(45507),i=l(61983),a=l(75171),n=l(8226),r=l(62707),d=l(56495),c=l(99777),u=l(74716),m=l(3817),x=l(22155),v=l(84865),h=l(7006),j=l(74421),p=l(57845),w=l(14834),f=l(98345),g=l(44940),N=l(1814);let y={ranges:[],screenTop:0},k=e=>{var s,l,t;let{focus:i}=e,{fetchAndStoreViews:a}=(0,g.B)(),{fetchAndStoreTips:n}=(0,N.J)(),r=(0,x.useRef)(null),d={limit:w.gTn.TwentyFive,where:{metadata:{...i&&{mainContentFocus:[i]}}}},{data:c,error:u,fetchMore:v,loading:k}=(0,w.tI3)({onCompleted:async e=>{var s;let{publicationBookmarks:l}=e,o=(null==l?void 0:null===(s=l.items)||void 0===s?void 0:s.map(e=>{var s;return"Mirror"===e.__typename?null===(s=e.mirrorOn)||void 0===s?void 0:s.id:e.id}))||[];await a(o),await n(o)},variables:{request:d}}),b=null==c?void 0:null===(s=c.publicationBookmarks)||void 0===s?void 0:s.items,A=null==c?void 0:null===(l=c.publicationBookmarks)||void 0===l?void 0:l.pageInfo,F=null==A?void 0:A.next,_=async()=>{if(F){var e,s;let{data:l}=await v({variables:{request:{...d,cursor:null==A?void 0:A.next}}}),o=(null==l?void 0:null===(s=l.publicationBookmarks)||void 0===s?void 0:null===(e=s.items)||void 0===e?void 0:e.map(e=>{var s;return"Mirror"===e.__typename?null===(s=e.mirrorOn)||void 0===s?void 0:s.id:e.id}))||[];await a(o),await n(o)}};return k?(0,o.jsx)(j.A,{}):(null==b?void 0:b.length)===0?(0,o.jsx)(m.pp,{icon:(0,o.jsx)(p.A,{className:"size-8"}),message:"No bookmarks yet!"}):u?(0,o.jsx)(m.Kw,{error:u,title:"Failed to load bookmark feed"}):(0,o.jsx)(m.Zp,{children:(0,o.jsx)(f.aY,{className:"virtual-divider-list-window",computeItemKey:(e,s)=>"".concat(s.id,"-").concat(e),data:b,endReached:_,isScrolling:e=>{if(!e){var s;null==r||null===(s=r.current)||void 0===s||s.getState(e=>{y={...e}})}},itemContent:(e,s)=>(0,o.jsx)(h.A,{isFirst:0===e,isLast:e===((null==b?void 0:b.length)||0)-1,post:s}),ref:r,restoreStateFrom:0===y.ranges.length?null==y?void 0:null===(t=y.current)||void 0===t?void 0:t.getState(e=>e):y,useWindowScroll:!0})})},b=()=>{let{currentAccount:e}=(0,v.E)(),[s,l]=(0,x.useState)();return((0,x.useEffect)(()=>{d.s.track(u.zQ,{page:"bookmarks"})},[]),e)?(0,o.jsxs)(m.JT,{children:[(0,o.jsx)(t.A,{title:"Bookmarks • ".concat(c.C3)}),(0,o.jsxs)(m.$l,{className:"space-y-5",children:[(0,o.jsx)(a.A,{focus:s,setFocus:l}),(0,o.jsx)(k,{focus:s})]}),(0,o.jsxs)(m.an,{children:[(0,o.jsx)(i.A,{}),(0,o.jsx)(n.A,{})]})]}):(0,o.jsx)(r.A,{})}}},e=>{var s=s=>e(e.s=s);e.O(0,[636,6593,8792],()=>s(73604)),_N_E=e.O()}]);