(function(t){function e(e){for(var r,i,a=e[0],s=e[1],u=e[2],f=0,d=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(d.length)d.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(l.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},l=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/public/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=s;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"3dfd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-aside",{staticClass:"aside"},[n("Menu")],1),n("el-container",[n("el-header",{staticClass:"header"},[t._v("this is a header")]),n("el-main",{staticClass:"main"},[n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"内容区域",info:t.info}})],1),n("router-link",{attrs:{to:"/a"}},[t._v("view link a")]),n("router-link",{attrs:{to:"/b"}},[t._v("view link b")]),n("el-button",{on:{click:t.go}},[t._v("go")]),n("router-view")],1),n("el-footer",{staticClass:"footer"},[t._v("footer")])],1)],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("div",{attrs:{id:"app"}},[t._v(t._s(t.info))])])},i=[],a={name:"HelloWorld",props:{msg:String,info:String}},s=a,u=(n("cc45"),n("2877")),c=Object(u["a"])(s,l,i,!1,null,"12923d98",null),f=c.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-radio-group",{staticStyle:{"margin-bottom":"20px"},model:{value:t.isCollapse,callback:function(e){t.isCollapse=e},expression:"isCollapse"}},[n("el-radio-button",{attrs:{label:!1}},[t._v("展开")]),n("el-radio-button",{attrs:{label:!0}},[t._v("收起")])],1),n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:t.isCollapse},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航一")]),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")]),n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],1),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"1-3"}},[t._v("选项3")])],1),n("el-submenu",{attrs:{index:"1-4"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("选项4")]),n("el-menu-item",{attrs:{index:"1-4-1"}},[t._v("选项1")])],1)],1),n("el-menu-item",{attrs:{index:"2"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航二")])]),n("el-menu-item",{attrs:{index:"3",disabled:""}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航三")])]),n("el-menu-item",{attrs:{index:"4"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航四")])])],1)],1)},p=[],v={data:function(){return{isCollapse:!0}}},m=v,h=(n("efa6"),Object(u["a"])(m,d,p,!1,null,null,null)),b=h.exports,_={name:"app",components:{HelloWorld:f,Menu:b},data:function(){return{info:null}},mounted:function(){var t=this;this.axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){return t.info="this is test data :"+JSON.stringify(e)}))},methods:{go:function(){this.info="hello",this.$router.push({name:"a"})}}},g=_,y=(n("034f"),Object(u["a"])(g,r,o,!1,null,null,null));e["default"]=y.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("bc3a"),l=n.n(o),i=n("a7fe"),a=n.n(i),s=n("5c96"),u=n.n(s),c=(n("0fae"),n("3dfd")),f=(n("d3b7"),n("8c4f"));r["default"].use(f["a"]);var d=[{name:"a",path:"/",component:function(){return Promise.resolve().then(n.bind(null,"3dfd"))},children:[{path:"bar",component:function(){return Promise.resolve().then(n.bind(null,"3dfd"))},meta:{requiresAuth:!0}}]},{name:"a",path:"/a",component:function(){return Promise.resolve().then(n.bind(null,"3dfd"))},children:[{path:"bar",component:function(){return Promise.resolve().then(n.bind(null,"3dfd"))},meta:{requiresAuth:!0}}]}],p=f["a"].prototype.push;f["a"].prototype.push=function(t){return p.call(this,t).catch((function(t){return t}))};var v=function(){return new f["a"]({mode:"history",scrollBehavior:function(){return{y:0}},routes:d})},m=v();var h=m;r["default"].use(a.a,l.a),r["default"].use(u.a),r["default"].config.productionTip=!1,r["default"].config.devtools="production",r["default"].config.publicPath="/public/",new r["default"]({router:h,render:function(t){return t(c["default"])}}).$mount("#app")},"82e2":function(t,e,n){},"85ec":function(t,e,n){},"8d50":function(t,e,n){},cc45:function(t,e,n){"use strict";var r=n("82e2"),o=n.n(r);o.a},efa6:function(t,e,n){"use strict";var r=n("8d50"),o=n.n(r);o.a}});
//# sourceMappingURL=app.aa12e1cd.js.map