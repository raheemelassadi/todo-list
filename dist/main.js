(()=>{"use strict";var e,t,n,r,o,a,i,c,s,d,l,u,p,f,v={99:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&family=Yellowtail&display=swap);"]),i.push([e.id,'html,body{height:100%;margin:0;padding:0;overflow:hidden}body{font-family:"Roboto",sans-serif;background-color:#e3e2df;background-size:cover;background-attachment:fixed;background-repeat:no-repeat;overflow:hidden;color:#e3e2df}body #content{height:100%;padding:0;margin:0}nav{box-shadow:0 4px 2px -2px rgba(0,0,0,.2)}.sidebar{background-color:#9a1750;color:#e3e2df}#navTitle{font-family:"Yellowtail",cursive;cursor:pointer;user-select:none;color:#9a1750}#navText{border:2px solid #9a1750;background-color:#e3e2df;color:#9a1750;text-transform:uppercase;letter-spacing:1px;padding:10px 20px;transition:.1s ease-in-out}#navText:focus{outline:none;box-shadow:none}#navText:active{transform:scale(0.9)}#navText::before{content:"+  "}.gridContainer{padding:0;margin:0}.mainWindow{background-color:#e3e2df}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},m={};function h(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return v[e](n,n.exports,h),n.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var n in t)h.o(t,n)&&!h.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),h.nc=void 0,e=h(379),t=h.n(e),n=h(795),r=h.n(n),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),d=h.n(s),l=h(589),u=h.n(l),p=h(99),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.querySelector("#content"),t=document.createElement("nav"),n=document.createElement("h1"),r=document.createElement("button"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div");e.classList.add("container-fluid"),t.classList.add("navbar","navbar-expand-lg","container-fluid","justify-content-between"),n.textContent="ToDo List",n.setAttribute("id","navTitle"),r.textContent="Add Task",r.setAttribute("id","navText"),r.classList.add("btn"),c.classList.add("container-fluid","d-flex","h-100","gridContainer"),t.appendChild(n),o.appendChild(r),t.appendChild(o),a.classList.add("sidebar","col-2","h-100"),a.textContent="hello",i.classList.add("col-10","d-grid","mainWindow"),i.textContent="sdocidn",e.appendChild(t),c.appendChild(a),c.appendChild(i),e.appendChild(c)}()})();