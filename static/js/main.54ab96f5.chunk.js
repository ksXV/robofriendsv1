(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(2),i=t.n(r),c=t(8),s=t(5),a=t(13),l=t(12),u=(t(25),t(3)),h=t(4),d=t(7),b=t(6),f="CHANGE_SEARCHFIELD",j="REQUEST_ROBOTS_PENDING",g="REQUEST_ROBOTS_SUCCESS",p="REQUEST_ROBOTS_FAILED",v=function(){return function(e){var n;e({type:j}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:g,payload:n})})).catch((function(n){return e({type:p,payload:n})}))}},O=t(1),w=function(e){var n=e.name,t=e.email,o=e.id;return Object(O.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(O.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:n}),Object(O.jsx)("p",{children:t})]})]})},m=function(e){var n=e.robots;return Object(O.jsx)("div",{children:n.map((function(e,t){return Object(O.jsx)(w,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},x=function(e){e.searchfield;var n=e.searchChange;return Object(O.jsx)("div",{className:"pa2",children:Object(O.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},y=function(e){return Object(O.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},E=function(e){Object(d.a)(t,e);var n=Object(b.a)(t);function t(e){var o;return Object(u.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(h.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(O.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),t}(o.Component),R=(t(27),function(e){Object(d.a)(t,e);var n=Object(b.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,o=e.onSearchChange,r=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(O.jsxs)("div",{className:"tc",children:[Object(O.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(O.jsx)(x,{searchChange:o}),Object(O.jsx)(y,{children:r?Object(O.jsx)("h1",{children:"Loading"}):Object(O.jsx)(E,{children:Object(O.jsx)(m,{robots:i})})})]})}}]),t}(o.Component)),C=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:f,payload:t}));var t},onRequestRobots:function(){return e(v())}}}))(R),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N={searchField:""},F={robots:[],isPending:!0},L=(t(28),Object(l.createLogger)()),P=Object(c.b)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case j:return Object.assign({},e,{isPending:!0});case g:return Object.assign({},e,{robots:n.payload,isPending:!1});case p:return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type===f?Object.assign({},e,{searchField:n.payload}):e}}),_=Object(c.c)(P,Object(c.a)(a.a,L));i.a.render(Object(O.jsx)(s.a,{store:_,children:Object(O.jsx)(C,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriendsv1",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriendsv1","/service-worker.js");S?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.54ab96f5.chunk.js.map