"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[578],{578:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var i=n(439),c=n(87),r=n(689),a=n(791),o=n(48),s=n(425),l=n(173),u=n(184),d=function(e){var t=e.backLinkHref;return(0,u.jsxs)("div",{className:"flex flex-col items-center py-2",children:[(0,u.jsx)("h2",{children:"Additional Information"}),(0,u.jsxs)("ul",{className:"flex gap-[30vw]",children:[(0,u.jsx)("li",{children:(0,u.jsxs)(c.OL,{className:"info-link transition ease-in-out duration-500 inline-flex items-center font-semibold text-lg p-1",to:"cast",state:t,children:[(0,u.jsx)(s.jfD,{className:"info-link-icon duration-500 inline"}),"Cast"]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(c.OL,{className:"info-link transition ease-in-out duration-500 font-semibold text-lg p-1",to:"reviews",state:t,children:[(0,u.jsx)(s.jfD,{className:"info-link-icon duration-500 inline"}),"Reviews"]})})]}),(0,u.jsx)(a.Suspense,{fallback:l._,children:(0,u.jsx)(r.j3,{})})]})},f=n(433),h=n(126),x=n(843),m=function(e){var t=e.movie,n=(0,r.UO)().movieId,c=(0,x.Z)("queue",[]),o=(0,i.Z)(c,2),s=o[0],l=o[1],d=(0,x.Z)("liked",[]),m=(0,i.Z)(d,2),v=m[0],p=m[1],g=(0,a.useState)(!1),j=(0,i.Z)(g,2),w=j[0],b=j[1],y=(0,a.useState)(!1),N=(0,i.Z)(y,2),k=N[0],Z=N[1];(0,a.useEffect)((function(){b(s.some((function(e){return e.id===Number(n)}))),Z(v.some((function(e){return e.id===Number(n)})))}),[s,v,n]);var _=function(e){var n=e.target.name,i="toQueue"===n?s:v,c="toQueue"===n?l:p,r=function(e){return e.some((function(e){return e.title===t.title}))}(i);c(r?i.filter((function(e){return e.id!==t.id})):[].concat((0,f.Z)(i),[t]))};return(0,u.jsxs)("div",{className:"flex gap-2 py-4",children:[(0,u.jsx)("button",{name:"toLiked",type:"button",onClick:_,className:"text-accent-color p-2 hover:scale-125 duration-200",children:k?(0,u.jsx)(h.ytW,{size:18}):(0,u.jsx)(h.sF8,{})}),(0,u.jsx)("button",{name:"toQueue",type:"button",onClick:_,className:"bg-accent-color text-[white] text-sm sm:text-base font-semibold py-1 px-3 rounded shadow  hover:bg-light-accent-color hover:text-primary-text-color duration-200",children:w?"Remove from Queue":"Add to Queue"})]})},v=n(375),p=function(){var e,t=(0,r.UO)().movieId,n=(0,a.useState)([]),s=(0,i.Z)(n,2),l=s[0],f=s[1],h=null!==(e=(0,r.TH)().state)&&void 0!==e?e:"/";(0,a.useEffect)((function(){(0,o.FL)(t).then(f)}),[t]);var x=l.title,p=l.release_date,g=l.poster_path,j=l.overview,w=l.genres,b=l.vote_average;return(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)(c.rU,{to:h,className:"inline-flex gap-2 items-center p-2",children:[(0,u.jsx)(v.aiR,{className:"inline"}),"Go Back"]}),(0,u.jsxs)("div",{className:"flex gap-8 flex-wrap py-2 items-center justify-center",children:[(0,u.jsx)("div",{children:g&&(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(g),width:"300",alt:x})}),(0,u.jsxs)("div",{className:"flex flex-col gap-3 max-w-[75%] py-4",children:[(0,u.jsx)("h2",{children:x}),(0,u.jsxs)("div",{className:"flex gap-x-[10%] gap-y-1 flex-wrap",children:[p&&(0,u.jsx)("p",{children:new Date(p).getFullYear()}),b&&(0,u.jsxs)("p",{children:["User Score: ",Math.round(b/10*100),"%"]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:j})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("ul",{className:"flex gap-x-3 gap-y-1 flex-wrap",children:w&&w.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)("p",{children:e.name})},e.id)}))})]}),(0,u.jsx)(m,{movie:l})]})]}),(0,u.jsx)(d,{backLinkHref:h})]})}},843:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(439),c=n(791);function r(e,t){var n=(0,c.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),r=(0,i.Z)(n,2),a=r[0],o=r[1];return(0,c.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,o]}},48:function(e,t,n){n.d(t,{$w:function(){return s},Df:function(){return a},FL:function(){return o},Xj:function(){return l},h$:function(){return u}});var i=n(263),c="https://api.themoviedb.org/3/",r="api_key=b87c06507a636c850d5a0bd93afe2f26";function a(){try{return i.Z.get("".concat(c,"trending/movie/day?").concat(r)).then((function(e){return e.data.results}))}catch(e){console.log(e)}}function o(e){try{return i.Z.get("".concat(c,"movie/").concat(e,"?").concat(r)).then((function(e){return e.data}))}catch(t){console.log(t)}}function s(e){try{return i.Z.get("".concat(c,"movie/").concat(e,"/credits?").concat(r)).then((function(e){return e.data.cast}))}catch(t){console.log(t)}}function l(e){try{return i.Z.get("".concat(c,"movie/").concat(e,"/reviews?").concat(r)).then((function(e){return e.data.results}))}catch(t){console.log(t)}}function u(e,t){try{return i.Z.get("".concat(c,"search/movie?query=").concat(e,"&page=").concat(t,"&include_adult=false&").concat(r)).then((function(e){return e.data.results.length>0?e.data:alert("No results")}))}catch(n){console.log(n)}}}}]);
//# sourceMappingURL=578.92108efb.chunk.js.map