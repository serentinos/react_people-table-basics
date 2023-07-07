(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{39:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(28),r=c(11),a=c(2),s=(c(37),c(38),c(39),c(15)),i=c.n(s),j=c(3),o=function(e){var t=e.title,c=e.directTo;return Object(j.jsx)(r.b,{to:c,className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:t})},l=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(o,{title:"Home",directTo:"/"}),Object(j.jsx)(o,{title:"People",directTo:"/people"})]})})})},b=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(a.b,{})})})]})},d=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},h=c(4),u=c(7),O=c(5),x=c(0);function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){if(!e.ok)throw new Error("Something went wrong");return e.json()}));var e}c(41);var m=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},f=c(26),v=function(e,t){return t.find((function(t){return t.name===e}))},g=function(e){return e.map((function(t){var c=v(t.fatherName,e),n=v(t.motherName,e);return Object(f.a)(Object(f.a)({},t),{},{father:c||void 0,mother:n||void 0})}))},N=function(e){var t=e.person;return Object(j.jsx)(r.a,{to:"/people/".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})},w=function(e){return e.NAME="Name",e.SEX="Sex",e.BORN="Born",e.DIED="Died",e.MOTHER="Mother",e.FATHER="Father",e}({}),y=function(e){var t=e.people,c=Object(a.s)().userSlug;return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:Object.entries(w).map((function(e){var t=Object(O.a)(e,2),c=t[0],n=t[1];return Object(j.jsx)("th",{children:n},c)}))})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=c===e.slug;return Object(j.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":t}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(N,{person:e})}),Object(j.jsx)("td",{children:e.sex}),Object(j.jsx)("td",{children:e.born}),Object(j.jsx)("td",{children:e.died}),Object(j.jsx)("td",{children:e.mother?Object(j.jsx)(N,{person:e.mother}):e.motherName||"-"}),Object(j.jsx)("td",{children:e.father?Object(j.jsx)(N,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})},S=function(){var e=Object(x.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(x.useState)(!0),a=Object(O.a)(r,2),s=a[0],i=a[1],o=Object(x.useState)(""),l=Object(O.a)(o,2),b=l[0],d=l[1],f=c.length>0,v=!f&&!s,N=f&&!s,w=function(){var e=Object(u.a)(Object(h.a)().mark((function e(){var t,c;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:t=e.sent,c=g(t),n(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d("Something went wrong");case 11:return e.prev=11,i(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(x.useEffect)((function(){w()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[s&&Object(j.jsx)(m,{}),b&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),v&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),N&&Object(j.jsx)(y,{people:c})]})})]})},E=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},k=Object(r.c)(Object(a.l)(Object(j.jsxs)(a.c,{path:"/",element:Object(j.jsx)(b,{}),children:[Object(j.jsx)(a.c,{path:"/",element:Object(j.jsx)(d,{})}),Object(j.jsxs)(a.c,{path:"/people",children:[Object(j.jsx)(a.c,{index:!0,element:Object(j.jsx)(S,{})}),Object(j.jsx)(a.c,{path:":userSlug/",element:Object(j.jsx)(S,{})})]}),Object(j.jsx)(a.c,{path:"/home",element:Object(j.jsx)(a.a,{to:"/",replace:!0})}),Object(j.jsx)(a.c,{path:"*",element:Object(j.jsx)(E,{})})]})));Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.e,{router:k}))}},[[42,1,2]]]);
//# sourceMappingURL=main.b0cacbe8.chunk.js.map