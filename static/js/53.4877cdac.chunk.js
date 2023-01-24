"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[53],{242:function(t,e,n){n.d(e,{O:function(){return u}});var c=n(433),r=n(439),a=n(791),o=n(87),i=n(689),s=n(184),u=function(t){var e=t.movies,n=(0,a.useState)([]),u=(0,r.Z)(n,2),l=u[0],h=u[1],f=(0,i.TH)();return(0,a.useEffect)((function(){h((0,c.Z)(e))}),[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("hr",{className:"movies__line"}),(0,s.jsx)("div",{className:"movies__container",children:l.length>0&&(0,s.jsx)("ul",{className:"movies__list",children:l.map((function(t){var e=t.id,n=t.title,c=t.poster_path,r=t.overview;return(0,s.jsx)("li",{className:"movies__item",children:(0,s.jsxs)(o.rU,{state:f,to:"/movies/".concat(e),children:[c&&(0,s.jsx)("img",{loading:"lazy",src:"https://image.tmdb.org/t/p/original".concat(c),width:"400",alt:n}),(0,s.jsx)("div",{className:"movies__item-overlay",children:(0,s.jsx)("p",{className:"movies__item-description",children:r})})]})},e)}))})})]})}},53:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var c=n(439),r=n(791),a=n(87),o=n(48),i=n(242),s=n(184),u=function(){var t=(0,r.useState)([]),e=(0,c.Z)(t,2),n=e[0],u=e[1],l=(0,r.useState)(""),h=(0,c.Z)(l,2),f=h[0],m=h[1],d=(0,a.lr)(),v=(0,c.Z)(d,2),_=v[0],g=v[1],p=_.get("query");(0,r.useEffect)((function(){p&&(0,o.h$)(p).then((function(t){u(t)}))}),[p,_]);return(0,s.jsxs)("div",{className:"search-bar__container",children:[(0,s.jsxs)("form",{className:"search-bar__form",onSubmit:function(t){t.preventDefault(),g({query:f}),m("")},children:[(0,s.jsx)("input",{type:"text",value:f,className:"search-bar__input",onChange:function(t){var e=t.target.value;m(e.trim().toLowerCase())}}),(0,s.jsx)("button",{className:"search-bar__btn",children:"Submit"})]}),(0,s.jsx)(i.O,{movies:n})]})},l=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u,{})})}},48:function(t,e,n){n.d(e,{$w:function(){return s},Df:function(){return o},FL:function(){return i},Xj:function(){return u},h$:function(){return l}});var c=n(263),r="https://api.themoviedb.org/3/",a="api_key=b87c06507a636c850d5a0bd93afe2f26";function o(){try{return c.Z.get("".concat(r,"trending/movie/day?").concat(a)).then((function(t){return t.data}))}catch(t){console.log(t)}}function i(t){try{return c.Z.get("".concat(r,"movie/").concat(t,"?").concat(a)).then((function(t){return t.data}))}catch(e){console.log(e)}}function s(t){try{return c.Z.get("".concat(r,"movie/").concat(t,"/credits?").concat(a)).then((function(t){return t.data.cast}))}catch(e){console.log(e)}}function u(t){try{return c.Z.get("".concat(r,"movie/").concat(t,"/reviews?").concat(a)).then((function(t){return t.data.results}))}catch(e){console.log(e)}}function l(t){try{return c.Z.get("".concat(r,"search/movie?query=").concat(t,"&page=1&").concat(a)).then((function(t){return t.data.results.length>0?t.data.results:alert("No results")}))}catch(e){console.log(e)}}}}]);
//# sourceMappingURL=53.4877cdac.chunk.js.map