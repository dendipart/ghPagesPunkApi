(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444],{7545:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/beer",function(){return e(5314)}])},7285:function(n,r,e){"use strict";var t=e(7297),i=e(5893),u=e(5334);e(7294);function a(){var n=(0,t.Z)([""]);return a=function(){return n},n}function o(){var n=(0,t.Z)(["\n  color: ",";\n"]);return o=function(){return n},n}function c(){var n=(0,t.Z)(["\n  font-size: 25px;\n"]);return c=function(){return n},n}function l(){var n=(0,t.Z)(["\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 15px;\n"]);return l=function(){return n},n}function d(){var n=(0,t.Z)(["\n  font-size: 10px;\n"]);return d=function(){return n},n}function s(){var n=(0,t.Z)(["\n  text-decoration: underline;\n  color: ",";\n"]);return s=function(){return n},n}r.Z=function(n){var r=n.variant,e=n.color,t=n.children;switch(r){case"heading":return(0,i.jsx)(f,{color:e,children:t});case"label":return(0,i.jsx)(v,{color:e,children:t});case"beerTitle":return(0,i.jsx)(p,{color:e,children:t});case"beerItemTitle":return(0,i.jsx)(h,{color:e,children:t});case"underline":return(0,i.jsx)(Z,{color:e,children:t});default:return(0,i.jsx)(x,{color:e,children:t})}};var f=u.Z.h2(a()),v=u.Z.p(o(),(function(n){return n.color})),p=u.Z.h2(c()),h=u.Z.h3(l()),x=u.Z.p(d()),Z=u.Z.p(s(),(function(n){return n.color}))},8160:function(n,r,e){"use strict";e.r(r);var t=e(7297),i=e(5893),u=e(5334);e(7294);function a(){var n=(0,t.Z)(["\n  width: 300px;\n  margin: 0 auto;\n"]);return a=function(){return n},n}function o(){var n=(0,t.Z)(["\n  margin: 50px;\n  width: 50%;\n"]);return o=function(){return n},n}var c=u.Z.div(a()),l=u.Z.img(o());r.default=function(n){var r=n.image_url;return(0,i.jsx)(c,{children:(0,i.jsx)(l,{src:r})})}},5314:function(n,r,e){"use strict";e.r(r);var t=e(7297),i=e(5893),u=e(5334),a=e(7294),o=e(7285),c=e(8687),l=e(4301),d=e.n(l),s=e(2423),f=e(8160);function v(){var n=(0,t.Z)([""]);return v=function(){return n},n}function p(){var n=(0,t.Z)(["\n  border: 1px solid;\n  border-radius: 2px;\n  width: 400px;\n  padding: 5px;\n  background-color: #dcdcdc;\n"]);return p=function(){return n},n}r.default=function(){var n,r=(0,a.useContext)(c.Z),e=(0,s.pD)({id:null!==(n=null===r||void 0===r?void 0:r.beerId)&&void 0!==n?n:""},{skip:!(null===r||void 0===r?void 0:r.beerId)});return e.isError||!e.data?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:d().wrapper,children:[(0,i.jsx)(f.default,{image_url:e.data[0].image_url}),(0,i.jsxs)(h,{children:[(0,i.jsxs)(o.Z,{variant:"beerTitle",children:[e.data[0].name," alc.",e.data[0].abv,"%"]}),(0,i.jsx)(o.Z,{variant:"paragraph",children:e.data[0].tagline}),(0,i.jsx)(x,{children:(0,i.jsx)(o.Z,{variant:"paragraph",color:"",children:e.data[0].description})}),(0,i.jsx)(o.Z,{variant:"beerTitle",children:"Food Pairing:"}),(0,i.jsx)("ul",{children:e.data[0].food_pairing.map((function(n,r){return n&&(0,i.jsx)("li",{children:n},r)}))})]})]})})};var h=u.Z.div(v()),x=u.Z.div(p())},4301:function(n){n.exports={wrapper:"styles_wrapper__z07IS"}}},function(n){n.O(0,[774,888,179],(function(){return r=7545,n(n.s=r);var r}));var r=n.O();_N_E=r}]);