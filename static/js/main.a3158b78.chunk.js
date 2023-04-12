(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),s=(c(20),c(21),c(22),c(2)),r=c(6),l=c.n(r),i=c(8),j=c(11),o=c(4),b=c(1),d=(c(23),c(0)),h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},u=function(e){var t=e.person,c=e.selectedPersonSlug,n=e.people,s=t.slug,r=t.sex,i=t.name,j=t.died,o=t.born,b=t.motherName,h=t.fatherName,u=null;if(b){var O=n.find((function(e){return e.name===b}));u=O?Object(d.jsx)(a.b,{to:"/people/".concat(O.slug),className:"has-text-danger",children:b}):b}else u="-";var x=null;if(h){var p=n.find((function(e){return e.name===h}));x=p?Object(d.jsx)(a.b,{to:"/people/".concat(p.slug),children:h}):h}else x="-";var m=l()({"has-background-warning":c===s}),v=l()({"has-text-danger":"f"===r});return Object(d.jsxs)("tr",{"data-cy":"person",className:m,children:[Object(d.jsx)("td",{children:Object(d.jsx)(a.b,{to:"/people/".concat(s),className:v,children:i})}),Object(d.jsx)("td",{children:r}),Object(d.jsx)("td",{children:o}),Object(d.jsx)("td",{children:j}),Object(d.jsx)("td",{children:u}),Object(d.jsx)("td",{children:x})]})};function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var x=function(){var e=Object(b.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(!1),r=Object(o.a)(a,2),l=r[0],x=r[1],p=Object(b.useState)(!1),m=Object(o.a)(p,2),v=m[0],f=m[1],g=Object(s.h)().slug,N=void 0===g?"":g;Object(b.useEffect)((function(){var e=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,O();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f(!0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var y=null;return y=l?Object(d.jsx)(h,{}):v?Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):c.length?Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e){return Object(d.jsx)(u,{person:e,selectedPersonSlug:N,people:c},e.slug)}))})]}):Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)("div",{className:"box table-container",children:y})})]})},p=function(){return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(d.jsx)(a.c,{to:"/people",className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"home",element:Object(d.jsx)(s.a,{to:"/",replace:!0})}),Object(d.jsx)(s.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsxs)(s.b,{path:"people",element:Object(d.jsx)(x,{}),children:[Object(d.jsx)(s.b,{index:!0,element:Object(d.jsx)(x,{})}),Object(d.jsx)(s.b,{path:":slug",element:Object(d.jsx)(x,{})})]}),Object(d.jsx)(s.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(p,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a3158b78.chunk.js.map