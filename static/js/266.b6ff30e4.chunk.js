"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{794:function(t,e,n){n.d(e,{O:function(){return u}});var c=n(439),r=n(791),o=n(689),a=n(87),i=n(184),u=function(t){var e=t.movies,n=(0,r.useState)([]),u=(0,c.Z)(n,2),s=u[0],l=u[1],f=(0,o.TH)();return(0,r.useEffect)((function(){l(e)}),[e]),(0,i.jsx)("div",{className:"container py-8",children:s.length>0&&(0,i.jsx)("ul",{className:"flex flex-wrap justify-center gap-2",children:s.map((function(t){var e=t.id,n=t.title,c=t.poster_path,r=t.overview;return(0,i.jsx)("li",{className:"group relative overflow-hidden",children:(0,i.jsxs)(a.rU,{state:f,to:"/movies/".concat(e),children:[c&&(0,i.jsx)("img",{loading:"lazy",src:"https://image.tmdb.org/t/p/original".concat(c),width:"400",alt:n}),(0,i.jsx)("div",{className:"bg-dark-royal-blue-0.6 h-[100%] px-1 opacity-0 group-hover:opacity-100 group-hover:duration-500 absolute top-0 left-0 text-center",children:(0,i.jsx)("p",{className:"text-[white] group-hover:translate-y-40 group-hover:duration-700",children:r})})]})},e)}))})})}},266:function(t,e,n){n.r(e);var c=n(433),r=n(439),o=n(791),a=n(48),i=n(794),u=n(184);e.default=function(){var t=(0,o.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1];return(0,o.useEffect)((function(){(0,a.Df)().then((function(t){s((0,c.Z)(t))}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{className:"text-center text-4xl py-8 font-semibold",children:"Trending Today"}),(0,u.jsx)(i.O,{movies:n})]})}},48:function(t,e,n){n.d(e,{$w:function(){return u},Df:function(){return a},FL:function(){return i},Xj:function(){return s},h$:function(){return l}});var c=n(263),r="https://api.themoviedb.org/3/",o="api_key=b87c06507a636c850d5a0bd93afe2f26";function a(){try{return c.Z.get("".concat(r,"trending/movie/day?").concat(o)).then((function(t){return t.data.results}))}catch(t){console.log(t)}}function i(t){try{return c.Z.get("".concat(r,"movie/").concat(t,"?").concat(o)).then((function(t){return t.data}))}catch(e){console.log(e)}}function u(t){try{return c.Z.get("".concat(r,"movie/").concat(t,"/credits?").concat(o)).then((function(t){return t.data.cast}))}catch(e){console.log(e)}}function s(t){try{return c.Z.get("".concat(r,"movie/").concat(t,"/reviews?").concat(o)).then((function(t){return t.data.results}))}catch(e){console.log(e)}}function l(t,e){try{return c.Z.get("".concat(r,"search/movie?query=").concat(t,"&page=").concat(e,"&").concat(o)).then((function(t){return t.data.results.length>0?t.data.results:alert("No results")}))}catch(n){console.log(n)}}}}]);
//# sourceMappingURL=266.b6ff30e4.chunk.js.map