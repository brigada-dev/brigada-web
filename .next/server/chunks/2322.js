"use strict";exports.id=2322,exports.ids=[2322],exports.modules={2322:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(5036),l=s(3955),r=s(6744),n=s(5487),i=s(3279),c=s(540),m=s(4124),x=s(2665);async function o({article:e,children:t}){let s=(await (0,x.n)()).filter(({metadata:t})=>t!==e).slice(0,2);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.W,{as:"article",className:"mt-24 sm:mt-32 lg:mt-40",children:[a.jsx(n.U,{children:(0,a.jsxs)("header",{className:"mx-auto flex max-w-5xl flex-col text-center",children:[a.jsx("h1",{className:"mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl",children:e.title}),a.jsx("time",{dateTime:e.date,className:"order-first text-sm text-neutral-950",children:(0,m.p)(e.date)}),(0,a.jsxs)("p",{className:"mt-6 text-sm font-semibold text-neutral-950",children:["by ",e.author.name,", ",e.author.role]})]})}),a.jsx(n.U,{children:a.jsx(i.t.wrapper,{className:"mt-24 sm:mt-32 lg:mt-40",children:t})})]}),s.length>0&&a.jsx(c.b,{className:"mt-24 sm:mt-32 lg:mt-40",title:"More articles",pages:s}),a.jsx(l.U,{})]})}},2609:(e,t,s)=>{s.d(t,{V:()=>x});var a=s(5036),l=s(5904),r=s.n(l),n=s(990),i=s(4545);function c({author:e,children:t,className:s,image:l}){return(0,a.jsxs)("figure",{className:(0,n.Z)("grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16",s),children:[a.jsx("blockquote",{className:"col-span-2 text-xl/7 text-neutral-600 sm:col-span-7 sm:col-start-6 sm:row-start-2",children:"string"==typeof t?a.jsx("p",{children:t}):t}),a.jsx("div",{className:"col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl",children:a.jsx(r(),{alt:"",...l,sizes:"(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem",className:"h-12 w-12 object-cover grayscale sm:aspect-[7/9] sm:h-auto sm:w-full"})}),(0,a.jsxs)("figcaption",{className:"text-sm text-neutral-950 sm:col-span-7 sm:row-start-3 sm:text-base",children:[a.jsx("span",{className:"font-semibold",children:e.name}),a.jsx("span",{className:"hidden font-semibold sm:inline",children:", "}),a.jsx("br",{className:"sm:hidden"}),a.jsx("span",{className:"sm:font-semibold",children:e.role})]})]})}function m({author:e,children:t,className:s}){return a.jsx(i.O,{position:"left",className:(0,n.Z)("pl-8",s),children:(0,a.jsxs)("figure",{className:"text-sm",children:[a.jsx("blockquote",{className:"text-neutral-600 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']",children:"string"==typeof t?a.jsx("p",{children:t}):t}),(0,a.jsxs)("figcaption",{className:"mt-6 font-semibold text-neutral-950",children:[e.name,", ",e.role]})]})})}function x(e){return e.image?a.jsx(c,{...e}):a.jsx(m,{...e})}},4596:(e,t,s)=>{s.d(t,{J:()=>i});var a=s(6843);let l=(0,a.createProxy)(String.raw`/Users/arditxhaferi/Sites/brigada-web/src/components/GrayscaleTransitionImage.tsx`),{__esModule:r,$$typeof:n}=l;l.default;let i=(0,a.createProxy)(String.raw`/Users/arditxhaferi/Sites/brigada-web/src/components/GrayscaleTransitionImage.tsx#GrayscaleTransitionImage`)},214:(e,t,s)=>{s.d(t,{K:()=>i});var a=s(6843);let l=(0,a.createProxy)(String.raw`/Users/arditxhaferi/Sites/brigada-web/src/components/GridPattern.tsx`),{__esModule:r,$$typeof:n}=l;l.default;let i=(0,a.createProxy)(String.raw`/Users/arditxhaferi/Sites/brigada-web/src/components/GridPattern.tsx#GridPattern`)},3279:(e,t,s)=>{s.d(t,{t:()=>x});var a=s(5036),l=s(990),r=s(2609),n=s(4545),i=s(4596),c=s(7695),m=s(3779);let x={Blockquote:({className:e,...t})=>a.jsx(r.V,{className:(0,l.Z)("my-32",e),...t}),img:function({className:e,...t}){return a.jsx("div",{className:(0,l.Z)("group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6",e),children:a.jsx(i.J,{...t,sizes:"(min-width: 768px) 42rem, 100vw",className:"aspect-[16/10] w-full object-cover"})})},StatList:({className:e,...t})=>a.jsx(c.Z,{className:(0,l.Z)("my-32 !max-w-none",e),...t}),StatListItem:c.j,table:function({className:e,...t}){return a.jsx("div",{className:(0,l.Z)("my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto",e),children:a.jsx("div",{className:"max-sm:min-w-full max-sm:flex-none max-sm:px-6",children:a.jsx("table",{...t})})})},TagList:({className:e,...t})=>a.jsx(m.P,{className:(0,l.Z)("my-6",e),...t}),TagListItem:m.N,TopTip:({children:e,className:t})=>(0,a.jsxs)(n.O,{position:"left",className:(0,l.Z)("my-10 pl-8",t),children:[a.jsx("p",{className:"font-display text-sm font-bold uppercase tracking-widest text-neutral-950",children:"Top tip"}),a.jsx("div",{className:"mt-4",children:e})]}),Typography:({className:e,...t})=>a.jsx("div",{className:(0,l.Z)("typography",e),...t}),wrapper:({className:e,...t})=>a.jsx("div",{className:(0,l.Z)("[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0",e),...t})}},540:(e,t,s)=>{s.d(t,{b:()=>f});var a=s(5036),l=s(646),r=s.n(l),n=s(990),i=s(4545),c=s(6744),m=s(5487),x=s(214),o=s(8937),d=s(4124);function h(e){return a.jsx("svg",{viewBox:"0 0 24 6","aria-hidden":"true",...e,children:a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 3 18 .5v2H0v1h18v2L24 3Z"})})}function u({page:e}){return a.jsx("article",{children:(0,a.jsxs)(i.O,{position:"left",className:"relative flex flex-col items-start pl-8",children:[a.jsx("h3",{className:"mt-6 text-base font-semibold text-neutral-950",children:e.title}),a.jsx("time",{dateTime:e.date,className:"order-first text-sm text-neutral-600",children:(0,d.p)(e.date)}),a.jsx("p",{className:"mt-2.5 text-base text-neutral-600",children:e.description}),(0,a.jsxs)(r(),{href:e.href,className:"mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700","aria-label":`Read more: ${e.title}`,children:["Read more",a.jsx(h,{className:"w-6 flex-none fill-current"}),a.jsx("span",{className:"absolute inset-0"})]})]})},e.href)}function f({title:e,pages:t,intro:s,className:l}){return(0,a.jsxs)("div",{className:(0,n.Z)("relative pt-24 sm:pt-32 lg:pt-40",l),children:[a.jsx("div",{className:"absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50",children:a.jsx(x.K,{className:"absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-270})}),a.jsx(o.v,{title:e,smaller:!0,children:s&&a.jsx("p",{children:s})}),a.jsx(c.W,{className:s?"mt-24":"mt-16",children:a.jsx(m.o,{className:"grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2",children:t.map(e=>a.jsx(m.U,{children:a.jsx(u,{page:e})},e.href))})})]})}},8937:(e,t,s)=>{s.d(t,{v:()=>i});var a=s(5036),l=s(990),r=s(6744),n=s(5487);function i({title:e,eyebrow:t,children:s,smaller:i=!1,invert:c=!1,...m}){return a.jsx(r.W,{...m,children:(0,a.jsxs)(n.U,{className:"max-w-2xl",children:[(0,a.jsxs)("h2",{children:[t&&(0,a.jsxs)(a.Fragment,{children:[a.jsx("span",{className:(0,l.Z)("mb-6 block font-display text-base font-semibold",c?"text-white":"text-neutral-950"),children:t}),a.jsx("span",{className:"sr-only",children:" - "})]}),a.jsx("span",{className:(0,l.Z)("block font-display lg:w-11/12 tracking-tight [text-wrap:balance]",i?"text-2xl font-semibold":"text-4xl font-medium sm:text-5xl",c?"text-white":"text-neutral-950"),children:e})]}),s&&a.jsx("div",{className:(0,l.Z)("mt-6 text-xl",c?"text-neutral-300":"text-neutral-600"),children:s})]})})}},7695:(e,t,s)=>{s.d(t,{Z:()=>n,j:()=>i});var a=s(5036),l=s(4545),r=s(5487);function n({children:e,...t}){return a.jsx(r.o,{...t,children:a.jsx("dl",{className:"grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none",children:e})})}function i({label:e,value:t}){return(0,a.jsxs)(l.O,{as:r.U,position:"left",className:"flex flex-col-reverse pl-8",children:[a.jsx("dt",{className:"mt-2 text-base text-neutral-600",children:e}),a.jsx("dd",{className:"font-display text-3xl font-semibold text-neutral-950 sm:text-4xl",children:t})]})}},3779:(e,t,s)=>{s.d(t,{N:()=>n,P:()=>r});var a=s(5036),l=s(990);function r({children:e,className:t}){return a.jsx("ul",{role:"list",className:(0,l.Z)(t,"flex flex-wrap gap-4"),children:e})}function n({children:e,className:t}){return a.jsx("li",{className:(0,l.Z)("rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600",t),children:e})}},4124:(e,t,s)=>{s.d(t,{p:()=>a});function a(e){let t=e.split("-").length>2;return new Date(`${e}Z`).toLocaleDateString("en-US",{day:t?"numeric":void 0,month:"long",year:"numeric",timeZone:"UTC"})}}};