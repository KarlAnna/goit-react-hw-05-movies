"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[910],{910:function(t,n,e){e.r(n);var c=e(433),a=e(439),o=e(791),r=e(689),i=e(48),s=e(184);n.default=function(){var t=(0,r.UO)().movieId,n=(0,o.useState)([]),e=(0,a.Z)(n,2),u=e[0],l=e[1];return(0,o.useEffect)((function(){(0,i.$w)(t).then((function(t){l((0,c.Z)(t))}))}),[t]),(0,s.jsx)("div",{children:u.length>0?(0,s.jsx)("ul",{className:"py-8 flex gap-4 flex-wrap justify-center align-baseline",children:u.map((function(t){var n=t.id,e=t.name,c=t.character,a=t.profile_path;return(0,s.jsxs)("li",{className:"max-w-[100px] w-full text-center",children:[a?(0,s.jsx)("img",{loading:"lazy",src:"https://image.tmdb.org/t/p/original/".concat(a),width:"100",alt:e}):(0,s.jsx)("img",{loading:"lazy",src:"https://placehold.co/100x150?text=".concat(e),width:"100",alt:e}),(0,s.jsx)("p",{className:"text-lg",children:c}),(0,s.jsx)("p",{className:"text-sm",children:e})]},n)}))}):(0,s.jsx)("p",{children:"We don't have any information about cast for this film"})})}},48:function(t,n,e){e.d(n,{$w:function(){return s},Df:function(){return r},FL:function(){return i},Xj:function(){return u},h$:function(){return l}});var c=e(263),a="https://api.themoviedb.org/3/",o="api_key=b87c06507a636c850d5a0bd93afe2f26";function r(){try{return c.Z.get("".concat(a,"trending/movie/day?").concat(o)).then((function(t){return t.data.results}))}catch(t){console.log(t)}}function i(t){try{return c.Z.get("".concat(a,"movie/").concat(t,"?").concat(o)).then((function(t){return t.data}))}catch(n){console.log(n)}}function s(t){try{return c.Z.get("".concat(a,"movie/").concat(t,"/credits?").concat(o)).then((function(t){return t.data.cast}))}catch(n){console.log(n)}}function u(t){try{return c.Z.get("".concat(a,"movie/").concat(t,"/reviews?").concat(o)).then((function(t){return t.data.results}))}catch(n){console.log(n)}}function l(t,n){try{return c.Z.get("".concat(a,"search/movie?query=").concat(t,"&page=").concat(n,"&").concat(o)).then((function(t){return t.data.results.length>0?t.data.results:alert("No results")}))}catch(e){console.log(e)}}}}]);
//# sourceMappingURL=910.698b1dea.chunk.js.map