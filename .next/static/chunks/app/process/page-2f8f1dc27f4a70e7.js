(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[208],{8645:function(A,e,t){Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,8551)),Promise.resolve().then(t.bind(t,962)),Promise.resolve().then(t.bind(t,2071)),Promise.resolve().then(t.bind(t,819)),Promise.resolve().then(t.bind(t,8424))},8551:function(A,e,t){"use strict";t.r(e),t.d(e,{FadeIn:function(){return B},FadeInStagger:function(){return o}});var i=t(7437),s=t(2265),n=t(9100),r=t(7909);let a=(0,s.createContext)(!1),E={once:!0,margin:"0px 0px -200px"};function B(A){let e=(0,n.J)(),t=(0,s.useContext)(a);return(0,i.jsx)(r.E.div,{variants:{hidden:{opacity:0,y:e?0:24},visible:{opacity:1,y:0}},transition:{duration:.5},...t?{}:{initial:"hidden",whileInView:"visible",viewport:E},...A})}function o(A){let{faster:e=!1,...t}=A;return(0,i.jsx)(a.Provider,{value:!0,children:(0,i.jsx)(r.E.div,{initial:"hidden",whileInView:"visible",viewport:E,transition:{staggerChildren:e?.12:.2},...t})})}},962:function(A,e,t){"use strict";t.r(e),t.d(e,{GridPattern:function(){return a}});var i=t(7437),s=t(2265),n=t(7909);function r(A){let{x:e,y:t,...s}=A;return(0,i.jsx)(n.E.path,{transform:`translate(${-32*t+96*e} ${160*t})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...s})}function a(A){let{yOffset:e=0,interactive:t=!1,...n}=A,a=(0,s.useId)(),E=(0,s.useRef)(null),B=(0,s.useRef)(),o=(0,s.useRef)(0),[g,h]=(0,s.useState)([]);return(0,s.useEffect)(()=>{if(t)return window.addEventListener("mousemove",A),()=>{window.removeEventListener("mousemove",A)};function A(A){var t,i;if(!E.current)return;let s=E.current.getBoundingClientRect(),n=A.clientX-s.left,r=A.clientY-s.top;!(n<0)&&!(r<0)&&!(n>s.width)&&!(r>s.height)&&(n=n-s.width/2-32,r-=e,n+=Math.tan(.2)*r,n=Math.floor(n/96),r=Math.floor(r/160),((null===(t=B.current)||void 0===t?void 0:t[0])!==n||(null===(i=B.current)||void 0===i?void 0:i[1])!==r)&&(B.current=[n,r],h(A=>{let e=o.current++;return[...A,[n,r,e]].filter(A=>!(A[0]===n&&A[1]===r&&A[2]!==e))})))}},[e,t]),(0,i.jsxs)("svg",{ref:E,"aria-hidden":"true",...n,children:[(0,i.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${a})`,strokeWidth:"0"}),(0,i.jsxs)("svg",{x:"50%",y:e,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map(A=>(0,i.jsx)(r,{x:A[0],y:A[1]},`${A}`)),g.map(A=>(0,i.jsx)(r,{x:A[0],y:A[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{h(e=>e.filter(e=>e[2]!==A[2]))}},A[2]))]}),(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:a,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${e})`,fill:"none",children:(0,i.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},2071:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/laptop.22dcb094.jpg",height:3e3,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABiCf/xAAWEAEBAQAAAAAAAAAAAAAAAAACAAT/2gAIAQEAAQUCWxG//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGBAAAwEBAAAAAAAAAAAAAAAAAQMRMQD/2gAIAQEABj8CjGWYAM7/xAAYEAACAwAAAAAAAAAAAAAAAAAAASFRYf/aAAgBAQABPyHLYhhR/9oADAMBAAIAAwAAABAL/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qj//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxB0/8QAGRAAAgMBAAAAAAAAAAAAAAAAASEAETFR/9oACAEBAAE/ED14mU2Y5yf/2Q==",blurWidth:6,blurHeight:8}},819:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/meeting.0efc6edc.jpg",height:1600,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABuEv/xAAWEAEBAQAAAAAAAAAAAAAAAAACAwH/2gAIAQEAAQUCnrU//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPwFQ/8QAFxABAAMAAAAAAAAAAAAAAAAAEgAhMv/aAAgBAQAGPwJO9T//xAAYEAEAAwEAAAAAAAAAAAAAAAABABFBUf/aAAgBAQABPyE+1Yx2f//aAAwDAQACAAMAAAAQ9//EABURAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEDAQE/ELf/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxBs/8QAGRABAAIDAAAAAAAAAAAAAAAAEQABMUFh/9oACAEBAAE/EFBNbRrg4T//2Q==",blurWidth:8,blurHeight:5}},8424:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/whiteboard.2d6ee65a.jpg",height:1800,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABoGn/AP/EABcQAQADAAAAAAAAAAAAAAAAAAEAAgT/2gAIAQEAAQUCtoSf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQMAAiH/2gAIAQMBAT8BaywOT//EABcRAAMBAAAAAAAAAAAAAAAAAAABAwL/2gAIAQIBAT8BnPLR/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEhMTL/2gAIAQEABj8Cyrg//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERMVH/2gAIAQEAAT8hXq7aT//aAAwDAQACAAMAAAAQ/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPxAMK//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxDSJf/EABgQAQADAQAAAAAAAAAAAAAAAAEAEUFR/9oACAEBAAE/EOYpZAHEZ//Z",blurWidth:8,blurHeight:6}}},function(A){A.O(0,[314,749,971,938,744],function(){return A(A.s=8645)}),_N_E=A.O()}]);