(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[13],{174:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a(5),s=a(21),i=function(e){var t=e.label,a=e.link,r=e.value,c=e.format;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"70%",children:t}),Object(n.jsx)("td",{children:a?Object(n.jsx)("a",{href:a,children:c(r)}):c(r)})]})};i.defaultProps={format:function(e){return e},link:null,value:null};var l=i,o=function(e){var t=e.data;return Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsx)(l,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},u=a(23),j=function(){var e=Object(r.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("2017-09-01T09:24:00");c(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(n.jsx)(n.Fragment,{children:a})},b=[{key:"age",label:"Years in the Games Industry",value:Object(n.jsx)(j,{})},{key:"countries",label:"Titles Shipped",value:2,link:"/projects"},{key:"location",label:"Current Location",value:"Greater Seattle Area"}],d=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Some stats about my work"}),Object(n.jsx)(o,{data:b})]})},f=a(159),h=a.n(f),O=a(63),p=a(161),v=a(71),x=a.n(v),m=[{label:"2021-2022 Ski Day Count",value:23,link:""},{label:"Average Cups of Coffee Per Day",value:2,link:""},{label:"Highest Elevation Hiked",value:"19,341 feet",link:""},{label:"Portfolio Last updated on",key:"pushed_at",link:"https://github.com/paigej/portfolio-site/commits",format:function(e){return x()(e).format("MMMM DD, YYYY")}}],k=function(){var e=Object(r.useState)(m),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(r.useCallback)(Object(p.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/paigej/portfolio-site");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(m.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{value:Object.keys(a).includes(e.key)?a[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(r.useEffect)((function(){s()}),[s]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Some stats me"}),Object(n.jsx)(o,{data:a})]})};t.default=function(){return Object(n.jsx)(s.a,{title:"Stats",description:"Some statistics about Paige Johnson and paigejohnson.me",children:Object(n.jsxs)("article",{className:"post",id:"stats",children:[Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(c.b,{to:"/stats",children:"Stats"})})})}),Object(n.jsx)(d,{}),Object(n.jsx)(k,{})]})})}}}]);
//# sourceMappingURL=13.682c68c6.chunk.js.map