(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(15),i=n.n(a),u=(n(39),n(40),n(3)),s=n(2);function o(t){var e=t.children;return Object(s.jsxs)("div",{children:["Main Layout",e]})}var j=n(9),p=n.n(j),f=n(11),b=n(33),h=n(29),l=n.n(h).a.create({baseURL:"/api/",headers:{"content-text":"application/json"}});l.interceptors.request.use(function(){var t=Object(f.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),l.interceptors.response.use(function(){var t=Object(f.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){throw t}));var d=function(){return l.get("articles")};function x(){var t=Object(r.useState)([]),e=Object(b.a)(t,2),n=e[0],c=e[1];return Object(r.useEffect)((function(){function t(){return(t=Object(f.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{d().then((function(t){var e=t.data;c(e)}))}catch(e){}case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()})),console.log("res",n),Object(s.jsxs)("div",{children:["Home",Object(s.jsx)("ul",{children:n.map((function(t){return Object(s.jsxs)("li",{children:[" ",t._id]})}))})]})}function O(){return Object(s.jsx)("div",{children:"LoginPage"})}var v=n(34);function m(t){var e=t.layout,n=t.component,r=t.exact,c=t.path;return Object(s.jsx)(u.a,{exact:r,path:c,render:function(t){return Object(s.jsx)(e,{children:Object(s.jsx)(n,Object(v.a)({},t))})}})}function y(){return Object(s.jsxs)(u.c,{children:[Object(s.jsx)(m,{exact:!0,layout:o,component:x,path:"/"}),Object(s.jsx)(m,{exact:!0,layout:o,component:O,path:"/login"})]})}var w=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(y,{})})},g=n(32),k=Object(g.a)({reducer:{}}),L=n(31),E=n(17);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(E.a,{children:Object(s.jsx)(L.a,{store:k,children:Object(s.jsx)(w,{})})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.3767c4e3.chunk.js.map