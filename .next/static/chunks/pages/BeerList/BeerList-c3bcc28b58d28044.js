(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{124:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/BeerList/BeerList",function(){return t(1125)}])},7285:function(n,r,t){"use strict";var e=t(7297),i=t(5893),o=t(5334);t(7294);function u(){var n=(0,e.Z)([""]);return u=function(){return n},n}function c(){var n=(0,e.Z)(["\n  color: ",";\n"]);return c=function(){return n},n}function a(){var n=(0,e.Z)(["\n  font-size: 25px;\n"]);return a=function(){return n},n}function l(){var n=(0,e.Z)(["\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 15px;\n"]);return l=function(){return n},n}function f(){var n=(0,e.Z)(["\n  font-size: 10px;\n"]);return f=function(){return n},n}function s(){var n=(0,e.Z)(["\n  text-decoration: underline;\n  color: ",";\n"]);return s=function(){return n},n}r.Z=function(n){var r=n.variant,t=n.color,e=n.children;switch(r){case"heading":return(0,i.jsx)(d,{color:t,children:e});case"label":return(0,i.jsx)(h,{color:t,children:e});case"beerTitle":return(0,i.jsx)(v,{color:t,children:e});case"beerItemTitle":return(0,i.jsx)(p,{color:t,children:e});case"underline":return(0,i.jsx)(Z,{color:t,children:e});default:return(0,i.jsx)(x,{color:t,children:e})}};var d=o.Z.h2(u()),h=o.Z.p(c(),(function(n){return n.color})),v=o.Z.h2(a()),p=o.Z.h3(l()),x=o.Z.p(f()),Z=o.Z.p(s(),(function(n){return n.color}))},1125:function(n,r,t){"use strict";t.r(r),t.d(r,{default:function(){return _}});var e=t(7297);function i(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function o(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,r){if(n){if("string"===typeof n)return i(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(n,r):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=t(5893),c=t(5334),a=t(7294),l=t(1664),f=t.n(l),s=t(7285);function d(){var n=(0,e.Z)(["\n  background: rgba(0, 0, 0, 0.1);\n  height: 300px;\n  width: 200px;\n  margin: 0 auto;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n"]);return d=function(){return n},n}function h(){var n=(0,e.Z)(["\n  height: 180px;\n  width: 30%;\n  cursor: pointer;\n  margin: 0 auto;\n"]);return h=function(){return n},n}function v(){var n=(0,e.Z)([""]);return v=function(){return n},n}var p=function(n){var r=n.data,t=n.onClick,e=r.description;return e.length>140&&(e=e.slice(0,140)+"..."),(0,u.jsxs)(x,{children:[(0,u.jsx)(Z,{src:r.image_url,onClick:t}),(0,u.jsxs)(g,{children:[(0,u.jsx)(s.Z,{variant:"beerItemTitle",color:"black",onClick:t,children:r.name}),(0,u.jsx)(s.Z,{variant:"default",color:"black",children:e})]})]})},x=c.Z.div(d()),Z=c.Z.img(h()),g=c.Z.div(v()),j=t(8687),m=t(7912);function b(){var n=(0,e.Z)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  gap: 14px;\n"]);return b=function(){return n},n}function y(){var n=(0,e.Z)([""]);return y=function(){return n},n}function w(){var n=(0,e.Z)(["\n  display: ",";\n"]);return w=function(){return n},n}function k(){var n=(0,e.Z)(["\n  height: 40px;\n  width: 140px;\n  margin: 0 auto;\n"]);return k=function(){return n},n}var _=function(){var n=(0,a.useState)([]),r=n[0],t=n[1],e=(0,a.useContext)(j.Z);if((0,a.useEffect)((function(){e.data?e.fetchedMore?t(o(r).concat(o(e.data))):t(e.data):t([])}),[null===e||void 0===e?void 0:e.data]),!e)return null;var i=e.setStartIndex,c=e.startIndex,l=e.isError,s=e.isFetching;return l?(0,u.jsx)("div",{children:"Error. Please, try again."}):(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(E,{isFetching:s,children:[(0,u.jsx)(I,{isFetching:s,children:"Loading..."}),(0,u.jsx)(C,{children:r.map((function(n){return n&&(0,u.jsx)(f(),{href:"/beer",children:(0,u.jsx)(p,{data:n,onClick:(r=n.id,function(){e.setBeerId(r)})},n.id)},n.id+1e3);var r}))}),(0,u.jsx)(A,{onClick:function(){e.setFetchedMore(!0),i(c+m.z)},children:"Load more"})]})})},C=c.Z.div(b()),E=c.Z.div(y()),I=c.Z.div(w(),(function(n){return n.isFetching?"block":"none"})),A=c.Z.button(k())}},function(n){n.O(0,[774,888,179],(function(){return r=124,n(n.s=r);var r}));var r=n.O();_N_E=r}]);