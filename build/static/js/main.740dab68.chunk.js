(this.webpackJsonpreact_search=this.webpackJsonpreact_search||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),s=(n(12),n(4)),i=n(5),l=n(7),h=n(6),u=(n(13),n(14),n(0)),p=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{className:"img",alt:"people",src:"../images/".concat(e.people.id,".png")}),Object(u.jsx)("h2",{children:e.people.name}),Object(u.jsx)("p",{children:e.people.email})]})},d=function(e){return Object(u.jsx)("div",{className:"card-list",children:e.people.map((function(e){return Object(u.jsx)(p,{people:e},e.id)}))})},j=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(17),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={people:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json().then((function(t){return e.setState({people:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.people,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Find Your Model"}),Object(u.jsx)(j,{placeholder:"Seach People",handleChange:this.handleChange}),Object(u.jsx)(d,{people:c})]})}}]),n}(c.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.740dab68.chunk.js.map