exports.id=4173,exports.ids=[4173],exports.modules={383:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},1549:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23)),Promise.resolve().then(r.bind(r,9683))},5926:(e,t,r)=>{Promise.resolve().then(r.bind(r,4150))},9683:(e,t,r)=>{"use strict";r.r(t),r.d(t,{FadeIn:()=>d,FadeInStagger:()=>c});var s=r(2295),i=r(3729),l=r(484),a=r(3760);let n=(0,i.createContext)(!1),o={once:!0,margin:"0px 0px -200px"};function d(e){let t=(0,l.J)(),r=(0,i.useContext)(n);return s.jsx(a.E.div,{variants:{hidden:{opacity:0,y:t?0:24},visible:{opacity:1,y:0}},transition:{duration:.5},...r?{}:{initial:"hidden",whileInView:"visible",viewport:o},...e})}function c({faster:e=!1,...t}){return s.jsx(n.Provider,{value:!0,children:s.jsx(a.E.div,{initial:"hidden",whileInView:"visible",viewport:o,transition:{staggerChildren:e?.12:.2},...t})})}},210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GridPattern:()=>n});var s=r(2295),i=r(3729),l=r(3760);function a({x:e,y:t,...r}){return s.jsx(l.E.path,{transform:`translate(${-32*t+96*e} ${160*t})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...r})}function n({yOffset:e=0,interactive:t=!1,...r}){let l=(0,i.useId)(),n=(0,i.useRef)(null),o=(0,i.useRef)(),d=(0,i.useRef)(0),[c,u]=(0,i.useState)([]);return(0,i.useEffect)(()=>{if(t)return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)};function r(t){if(!n.current)return;let r=n.current.getBoundingClientRect(),s=t.clientX-r.left,i=t.clientY-r.top;!(s<0)&&!(i<0)&&!(s>r.width)&&!(i>r.height)&&(s=s-r.width/2-32,i-=e,s+=Math.tan(.2)*i,s=Math.floor(s/96),i=Math.floor(i/160),(o.current?.[0]!==s||o.current?.[1]!==i)&&(o.current=[s,i],u(e=>{let t=d.current++;return[...e,[s,i,t]].filter(e=>!(e[0]===s&&e[1]===i&&e[2]!==t))})))}},[e,t]),(0,s.jsxs)("svg",{ref:n,"aria-hidden":"true",...r,children:[s.jsx("rect",{width:"100%",height:"100%",fill:`url(#${l})`,strokeWidth:"0"}),(0,s.jsxs)("svg",{x:"50%",y:e,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map(e=>s.jsx(a,{x:e[0],y:e[1]},`${e}`)),c.map(e=>s.jsx(a,{x:e[0],y:e[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{u(t=>t.filter(t=>t[2]!==e[2]))}},e[2]))]}),s.jsx("defs",{children:s.jsx("pattern",{id:l,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${e})`,fill:"none",children:s.jsx("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},4150:(e,t,r)=>{"use strict";r.r(t),r.d(t,{RootLayout:()=>I});var s=r(2295),i=r(3729),l=r(783),a=r.n(l),n=r(2254),o=r(6815),d=r(484),c=r(6056),u=r(3760);function x({invert:e=!1,className:t,children:r,...i}){t=(0,o.Z)(t,"inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",e?"bg-white text-neutral-950 hover:bg-neutral-200":"bg-neutral-950 text-white hover:bg-neutral-800");let l=s.jsx("span",{className:"relative top-px",children:r});return void 0===i.href?s.jsx("button",{className:t,...i,children:l}):s.jsx(a(),{className:t,...i,children:l})}function h({as:e,className:t,children:r}){return s.jsx(e??"div",{className:(0,o.Z)("mx-auto max-w-7xl px-6 lg:px-8",t),children:s.jsx("div",{className:"mx-auto max-w-2xl lg:max-w-none",children:r})})}var m=r(9683);function f({invert:e=!1,filled:t=!1,...r}){let l=(0,i.useId)();return(0,s.jsxs)("svg",{viewBox:"0 0 220 333","aria-hidden":"true",...r,children:[s.jsx("rect",{clipPath:`url(#${l}-clip)`,className:(0,o.Z)("h-8 transition-all duration-300",e?"fill-white":"fill-neutral-950",t?"w-8":"w-0 group-hover/logo:w-8")}),s.jsx("use",{href:`#${l}-path`,className:e?"stroke-white":"stroke-neutral-950",fill:"none",strokeWidth:"1.5"}),(0,s.jsxs)("defs",{children:[(0,s.jsxs)("g",{id:`${l}-path`,children:[s.jsx("path",{d:"M2 4C2 2.89543 2.89543 2 4 2H60.4315C61.536 2 62.4315 2.89543 62.4315 4V216.007C62.4315 216.327 62.3547 216.642 62.2077 216.926L46.1794 247.899C45.533 249.148 43.8331 249.357 42.9029 248.302L2.49975 202.472C2.1777 202.107 2 201.636 2 201.149V4Z",stroke:"black","stroke-width":"3"}),s.jsx("path",{d:"M218 4C218 2.89543 217.105 2 216 2H159.569C158.464 2 157.569 2.89543 157.569 4V216.007C157.569 216.327 157.645 216.642 157.792 216.926L173.821 247.899C174.467 249.148 176.167 249.357 177.097 248.302L217.5 202.472C217.822 202.107 218 201.636 218 201.149V4Z",stroke:"black","stroke-width":"3"}),s.jsx("path",{d:"M141.793 4.24114C141.793 3.13657 140.898 2.24114 139.793 2.24114H80.6921C79.5876 2.24114 78.6921 3.13657 78.6921 4.24114V218.075C78.6921 218.383 78.6207 218.687 78.4835 218.964L57.0444 262.149C56.7027 262.837 56.7856 263.661 57.2578 264.267L108.44 329.996C109.235 331.017 110.776 331.026 111.582 330.013L163.924 264.285C164.414 263.67 164.498 262.826 164.139 262.126L142.014 218.973C141.869 218.691 141.793 218.378 141.793 218.061V4.24114Z",stroke:"black","stroke-width":"3"})]}),s.jsx("clipPath",{id:`${l}-clip`,children:s.jsx("use",{href:`#${l}-path`})})]})]})}function v({className:e,invert:t=!1,filled:r=!1,fillOnHover:i=!1,...l}){return(0,s.jsxs)("svg",{viewBox:"0 0 220 330","aria-hidden":"true",className:(0,o.Z)(i&&"group/logo",e),...l,children:[s.jsx(f,{preserveAspectRatio:"xMinYMid meet",invert:t,filled:r}),s.jsx("path",{className:t?"fill-white":"fill-neutral-950",d:"M2 4C2 2.89543 2.89543 2 4 2H60.4315C61.536 2 62.4315 2.89543 62.4315 4V216.007C62.4315 216.327 62.3547 216.642 62.2077 216.926L46.1794 247.899C45.533 249.148 43.8331 249.357 42.9029 248.302L2.49975 202.472C2.1777 202.107 2 201.636 2 201.149V4Z",stroke:"black",strokeWidth:"3"}),s.jsx("path",{className:t?"fill-white":"fill-neutral-950",d:"M218 4C218 2.89543 217.105 2 216 2H159.569C158.464 2 157.569 2.89543 157.569 4V216.007C157.569 216.327 157.645 216.642 157.792 216.926L173.821 247.899C174.467 249.148 176.167 249.357 177.097 248.302L217.5 202.472C217.822 202.107 218 201.636 218 201.149V4Z",stroke:"black",strokeWidth:"3"}),s.jsx("path",{className:t?"fill-white":"fill-neutral-950",d:"M141.793 4.24114C141.793 3.13657 140.898 2.24114 139.793 2.24114H80.6921C79.5876 2.24114 78.6921 3.13657 78.6921 4.24114V218.075C78.6921 218.383 78.6207 218.687 78.4835 218.964L57.0444 262.149C56.7027 262.837 56.7856 263.661 57.2578 264.267L108.44 329.996C109.235 331.017 110.776 331.026 111.582 330.013L163.924 264.285C164.414 263.67 164.498 262.826 164.139 262.126L142.014 218.973C141.869 218.691 141.793 218.378 141.793 218.061V4.24114Z",stroke:"black",strokeWidth:"3"})]})}let p=[{title:"Linkedin",href:"https://www.linkedin.com/company/brigada-dev?trk=public_post_feed-actor-name",icon:function(e){return s.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}},{title:"Instagram",href:"https://www.instagram.com/brigada.dev/",icon:function(e){return s.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"})})}}];function g({className:e,invert:t=!1}){return s.jsx("ul",{role:"list",className:(0,o.Z)("flex gap-x-10",t?"text-white":"text-neutral-950",e),children:p.map(e=>s.jsx("li",{children:s.jsx(a(),{href:e.href,"aria-label":e.title,className:(0,o.Z)("transition",t?"hover:text-neutral-200":"hover:text-neutral-700"),children:s.jsx(e.icon,{className:"h-6 w-6 fill-current"})})},e.title))})}let j=[{title:"Company",links:[{title:"About",href:"/about"},{title:"Contact us",href:"/contact"}]},{title:"Connect",links:p}];function b(){return s.jsx("nav",{children:s.jsx("ul",{role:"list",className:"grid grid-cols-2 gap-8 sm:grid-cols-3",children:j.map((e,t)=>(0,s.jsxs)("li",{children:[s.jsx("div",{className:"font-display text-sm font-semibold tracking-wider text-neutral-950",children:e.title}),s.jsx("ul",{role:"list",className:"mt-4 text-sm text-neutral-700",children:e.links.map((e,t)=>s.jsx("li",{className:"mt-4",children:s.jsx(a(),{href:e.href,className:"transition hover:text-neutral-950",children:e.title})},t))})]},t))})})}function w(e){return s.jsx("svg",{viewBox:"0 0 16 6","aria-hidden":"true",...e,children:s.jsx("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M16 3 10 .5v2H0v1h10v2L16 3Z"})})}function N(){return(0,s.jsxs)("form",{className:"max-w-sm",children:[s.jsx("h2",{className:"font-display text-sm font-semibold tracking-wider text-neutral-950",children:"Sign up for our newsletter"}),s.jsx("p",{className:"mt-4 text-sm text-neutral-700",children:"Subscribe to get the latest design news, articles, resources and inspiration."}),(0,s.jsxs)("div",{className:"relative mt-6",children:[s.jsx("input",{type:"email",placeholder:"Email address",autoComplete:"email","aria-label":"Email address",className:"block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"}),s.jsx("div",{className:"absolute inset-y-1 right-1 flex justify-end",children:s.jsx("button",{type:"submit","aria-label":"Submit",className:"flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800",children:s.jsx(w,{className:"w-4"})})})]})]})}function y(){return s.jsx(h,{as:"footer",className:"mt-24 w-full sm:mt-32 lg:mt-40",children:(0,s.jsxs)(m.FadeIn,{children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2",children:[s.jsx(b,{}),s.jsx("div",{className:"flex lg:justify-end",children:s.jsx(N,{})})]}),(0,s.jsxs)("div",{className:"mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12",children:[s.jsx(a(),{href:"/","aria-label":"Home",children:s.jsx(v,{className:"h-8",fillOnHover:!0})}),(0,s.jsxs)("p",{className:"text-sm text-neutral-700",children:["\xa9 Brigada Creative Tech Agency ",new Date().getFullYear()]})]})]})})}var C=r(210);function k({name:e,children:t,invert:r=!1}){return(0,s.jsxs)("address",{className:(0,o.Z)("text-sm not-italic",r?"text-neutral-300":"text-neutral-600"),children:[s.jsx("strong",{className:r?"text-white":"text-neutral-950",children:e}),s.jsx("br",{}),t]})}function L({invert:e=!1,...t}){return s.jsx("ul",{role:"list",...t,children:s.jsx("li",{children:(0,s.jsxs)(k,{name:"Kosovo",invert:e,children:["Pristina",s.jsx("br",{}),"Rr. Lidhja e Prizrenit"]})})})}let M=(0,i.createContext)(null);function P(e){return(0,s.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:[s.jsx("path",{d:"m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"}),s.jsx("path",{d:"M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"})]})}function R(e){return s.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...e,children:s.jsx("path",{d:"M2 6h20v2H2zM2 16h20v2H2z"})})}function S({panelId:e,icon:t,expanded:r,onToggle:l,toggleRef:n,invert:d=!1}){let{logoHovered:c,setLogoHovered:u}=(0,i.useContext)(M);return s.jsx(h,{children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx(a(),{href:"/","aria-label":"Home",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:s.jsx(v,{className:"h-8 ",invert:d,filled:c})}),(0,s.jsxs)("div",{className:"flex items-center gap-x-8",children:[s.jsx(x,{href:"/contact",invert:d,children:"Contact us"}),s.jsx("button",{ref:n,type:"button",onClick:l,"aria-expanded":r?"true":"false","aria-controls":e,className:(0,o.Z)("group -m-2.5 rounded-full p-2.5 transition",d?"hover:bg-white/10":"hover:bg-neutral-950/10"),"aria-label":"Toggle navigation",children:s.jsx(t,{className:(0,o.Z)("h-6 w-6",d?"fill-white group-hover:fill-neutral-200":"fill-neutral-950 group-hover:fill-neutral-700")})})]})]})})}function Z({children:e}){return s.jsx("div",{className:"even:mt-px sm:bg-neutral-950",children:s.jsx(h,{children:s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2",children:e})})})}function H({href:e,children:t}){return(0,s.jsxs)(a(),{href:e,className:"group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16",children:[t,s.jsx("span",{className:"absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"})]})}function A(){return s.jsx("nav",{className:"mt-px font-display text-5xl font-medium tracking-tight text-white",children:(0,s.jsxs)(Z,{children:[s.jsx(H,{href:"/work",children:"Our Work"}),s.jsx(H,{href:"/about",children:"About Us"})]})})}function E({children:e}){let t=(0,i.useId)(),[r,l]=(0,i.useState)(!1),a=(0,i.useRef)(null),n=(0,i.useRef)(null),o=(0,i.useRef)(null),x=(0,d.J)();return(0,i.useEffect)(()=>{function e(e){e.target instanceof HTMLElement&&e.target.closest("a")?.href===window.location.href&&l(!1)}return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[]),(0,s.jsxs)(c.A,{transition:x?{duration:0}:void 0,children:[(0,s.jsxs)("header",{children:[s.jsx("div",{className:"absolute left-0 right-0 top-2 z-40 pt-14","aria-hidden":r?"true":void 0,inert:r?"":void 0,children:s.jsx(S,{panelId:t,icon:R,toggleRef:a,expanded:r,onToggle:()=>{l(e=>!e),window.setTimeout(()=>n.current?.focus({preventScroll:!0}))}})}),s.jsx(u.E.div,{layout:!0,id:t,style:{height:r?"auto":"0.5rem"},className:"relative z-50 overflow-hidden bg-neutral-950 pt-2","aria-hidden":r?void 0:"true",inert:r?void 0:"",children:(0,s.jsxs)(u.E.div,{layout:!0,className:"bg-neutral-800",children:[s.jsx("div",{ref:o,className:"bg-neutral-950 pb-16 pt-14",children:s.jsx(S,{invert:!0,panelId:t,icon:P,toggleRef:n,expanded:r,onToggle:()=>{l(e=>!e),window.setTimeout(()=>a.current?.focus({preventScroll:!0}))}})}),s.jsx(A,{}),s.jsx("div",{className:"relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800",children:s.jsx(h,{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16",children:[(0,s.jsxs)("div",{children:[s.jsx("h2",{className:"font-display text-base font-semibold text-white",children:"Our offices"}),s.jsx(L,{invert:!0,className:"mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"})]}),(0,s.jsxs)("div",{className:"sm:border-l sm:border-transparent sm:pl-16",children:[s.jsx("h2",{className:"font-display text-base font-semibold text-white",children:"Follow us"}),s.jsx(g,{className:"mt-6",invert:!0})]})]})})})]})})]}),s.jsx(u.E.div,{layout:!0,style:{borderTopLeftRadius:40,borderTopRightRadius:40},className:"relative flex flex-auto overflow-hidden bg-white pt-14",children:(0,s.jsxs)(u.E.div,{layout:!0,className:"relative isolate flex w-full flex-col pt-9",children:[s.jsx(C.GridPattern,{className:"absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",yOffset:-96,interactive:!0}),s.jsx("main",{className:"w-full flex-auto",children:e}),s.jsx(y,{})]})})]})}function I({children:e}){let t=(0,n.usePathname)(),[r,l]=(0,i.useState)(!1);return s.jsx(M.Provider,{value:{logoHovered:r,setLogoHovered:l},children:s.jsx(E,{children:e},t)})}},6683:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>d});var s=r(5036),i=r(6843);let l=(0,i.createProxy)(String.raw`/Users/arditxhaferi/Sites/brigada-web/src/components/RootLayout.tsx`),{__esModule:a,$$typeof:n}=l;l.default;let o=(0,i.createProxy)(String.raw`/Users/arditxhaferi/Sites/brigada-web/src/components/RootLayout.tsx#RootLayout`);r(6092);let d={title:{template:"%s - Studio",default:"Brigada - Brigada is an tech outsourcing creative agency based in Pristina "}};function c({children:e}){return s.jsx("html",{lang:"en",className:"h-full bg-neutral-950 text-base antialiased",children:s.jsx("body",{className:"flex min-h-full flex-col",children:s.jsx(o,{children:e})})})}},8206:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5036),i=r(646),l=r.n(i),a=r(6744),n=r(5487);function o(){return s.jsx(a.W,{className:"flex h-full items-center pt-24 sm:pt-32 lg:pt-40",children:(0,s.jsxs)(n.U,{className:"flex max-w-xl flex-col items-center text-center",children:[s.jsx("p",{className:"font-display text-4xl font-semibold text-neutral-950 sm:text-5xl",children:"404"}),s.jsx("h1",{className:"mt-4 font-display text-2xl font-semibold text-neutral-950",children:"Page not found"}),s.jsx("p",{className:"mt-2 text-sm text-neutral-600",children:"Sorry, we couldn’t find the page you’re looking for."}),s.jsx(l(),{href:"/",className:"mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700",children:"Go to the home page"})]})})}},6744:(e,t,r)=>{"use strict";r.d(t,{W:()=>l});var s=r(5036),i=r(990);function l({as:e,className:t,children:r}){return s.jsx(e??"div",{className:(0,i.Z)("mx-auto max-w-7xl px-6 lg:px-8",t),children:s.jsx("div",{className:"mx-auto max-w-2xl lg:max-w-none",children:r})})}},5487:(e,t,r)=>{"use strict";r.d(t,{U:()=>n,o:()=>o});var s=r(6843);let i=(0,s.createProxy)(String.raw`/Users/arditxhaferi/Sites/brigada-web/src/components/FadeIn.tsx`),{__esModule:l,$$typeof:a}=i;i.default;let n=(0,s.createProxy)(String.raw`/Users/arditxhaferi/Sites/brigada-web/src/components/FadeIn.tsx#FadeIn`),o=(0,s.createProxy)(String.raw`/Users/arditxhaferi/Sites/brigada-web/src/components/FadeIn.tsx#FadeInStagger`)},9873:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},6092:()=>{}};