(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{258:function(t,n){t.exports=function(component,t){var n="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(n.components=component.exports.options.components),n.components=n.components||{},t)n.components[i]=n.components[i]||t[i]}},268:function(t,n,o){"use strict";var e=o(0);n.a=e.a.extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},270:function(t,n,o){var content=o(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(115).default)("424d9537",content,!0,{sourceMap:!1})},271:function(t,n,o){var e=o(114)(!1);e.push([t.i,".v-main{display:flex;flex:1 0 auto;max-width:100%;transition:.2s cubic-bezier(.4,0,.2,1)}.v-main:not([data-booted=true]){transition:none!important}.v-main__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-main{display:block}}}",""]),t.exports=e},283:function(t,n,o){"use strict";o.r(n);var e={},r=o(61),c=o(258),d=o.n(c),l=(o(270),o(268).a.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,o=t.top,e=t.right,footer=t.footer,r=t.insetFooter,c=t.bottom,d=t.left;return{paddingTop:"".concat(o+n,"px"),paddingRight:"".concat(e,"px"),paddingBottom:"".concat(footer+r+c,"px"),paddingLeft:"".concat(d,"px")}}},render:function(t){var data={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,data,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-main",[o(t.$store.state.currentComponent,{tag:"component"})],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VMain:l})}}]);