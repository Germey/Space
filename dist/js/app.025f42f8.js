(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],p=0,f=[];p<i.length;p++)o=i[p],u[o]&&f.push(u[o][0]),u[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==u[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},u={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),u=n.n(r);u.a},"17f2":function(t,e,n){"use strict";var r=n("18d3"),u=n.n(r);u.a},"18d3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Main")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("el-row",[n("el-col",[n("div",{staticClass:"bar"},[n("i",{staticClass:"icon el-icon-coffee-cup"})])])],1),n("el-row",{staticClass:"inputs",attrs:{gutter:15}},[n("el-col",{attrs:{span:12}},[n("el-input",{staticClass:"input",attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),n("el-col",{attrs:{span:12}},[n("el-input",{staticClass:"input",attrs:{type:"textarea"},model:{value:t.output,callback:function(e){t.output=e},expression:"output"}})],1)],1)],1)},i=[],l=n("3420"),c={name:"Main",data:function(){return{title:"空格处理",input:null,output:null}},watch:{input:function(){this.output=l.spacing(this.input)}}},s=c,p=(n("17f2"),n("2877")),f=Object(p["a"])(s,o,i,!1,null,null,null),d=f.exports,v={name:"app",components:{Main:d}},b=v,h=(n("034f"),Object(p["a"])(b,u,a,!1,null,null,null)),y=h.exports,g=n("5c96"),m=n.n(g);n("0fae");r["default"].config.productionTip=!1,r["default"].use(m.a),new r["default"]({render:function(t){return t(y)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.025f42f8.js.map