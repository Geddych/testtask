(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,i=1;i<s.length;i++){var c=s[i];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},o={app:0},r=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/testtask/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"026b":function(e,t,s){"use strict";var n=s("8faf"),o=s.n(n);o.a},"423a":function(e,t,s){"use strict";var n=s("a598"),o=s.n(n);o.a},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[e._v("Таблица")]),e._v(" | "),s("router-link",{attrs:{to:"/Binance"}},[e._v("Выбрать символ")])],1),s("router-view")],1)},r=[],a={name:"app",beforeCreate(){this.$store.dispatch("socket_sub")},beforeDestroy(){this.$store.disptach("socket_close")}},i=a,c=(s("5c0b"),s("2877")),u=Object(c["a"])(i,o,r,!1,null,null,null),l=u.exports,p=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Стакан по символу "+e._s(e.symbol)+" ")]),s("tableComp")],1)},h=[],m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",class:{isDesktop:e.isDesktop}},[s("table",{staticClass:"table"},[s("thead",[s("th",[e._v("Price")]),s("th",[e._v("Amount")]),s("th",{directives:[{name:"show",rawName:"v-show",value:e.isDesktop,expression:"isDesktop"}]},[e._v("Total")])]),s("tbody",e._l(e.Asks,(function(t){return s("tr",{key:t[0]},[s("td",[e._v(" "+e._s(t[0])+" ")]),s("td",[e._v(e._s(t[1]))]),s("td",{directives:[{name:"show",rawName:"v-show",value:e.isDesktop,expression:"isDesktop"}]},[e._v(e._s(t[0]*t[1]))])])})),0)]),s("table",{staticClass:"table"},[s("thead",[s("th",[e._v("Price")]),s("th",[e._v("Amount")]),s("th",{directives:[{name:"show",rawName:"v-show",value:e.isDesktop,expression:"isDesktop"}]},[e._v("Total")])]),s("tbody",e._l(e.Bids,(function(t){return s("tr",{key:t[0]},[s("td",[e._v(" "+e._s(t[0])+" ")]),s("td",[e._v(e._s(t[1]))]),s("td",{directives:[{name:"show",rawName:"v-show",value:e.isDesktop,expression:"isDesktop"}]},[e._v(e._s(t[0]*t[1]))])])})),0)])])},v=[],b={name:"tableComp",data:()=>({width:0,isDesktop:!1}),created(){window.addEventListener("resize",this.updWidth),window.addEventListener("resize",this.udDes),this.$store.dispatch("socket_change")},beforeMount(){this.$store.dispatch("socket_listen")},computed:{Asks(){return this.$store.state.asks},Bids(){return this.$store.state.bids}},methods:{updWidth(){this.width=window.innerWidth},udDes(){this.width<768?this.isDesktop=!1:this.isDesktop=!0}}},f=b,_=(s("026b"),Object(c["a"])(f,m,v,!1,null,"4532e2d3",null)),w=_.exports,y={name:"Table",components:{tableComp:w},computed:{symbol(){return this.$store.state.curSymbol}}},k=y,S=(s("423a"),Object(c["a"])(k,d,h,!1,null,"08e8b160",null)),g=S.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("div",[s("h2",[e._v(" Список Символов ")]),e._l(e.symbols,(function(t){return s("p",{key:t},[e.symbol==t?s("span",[e._v(e._s(t)+" (Текущий символ)")]):s("span",[e._v(e._s(t))])])}))],2),s("div",[s("h2",[e._v(" Выберите символ: ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?s:s[0]},function(t){return e.setCurSymbol(e.selected)}]}},e._l(e.symbols,(function(t){return s("option",{key:t,attrs:{selected:""},domProps:{value:{sym:t},innerHTML:e._s(t.toUpperCase())}})})),0)])])},D=[],$={name:"Binance",data:()=>({selected:""}),computed:{symbol(){return this.$store.state.curSymbol},symbols(){return this.$store.state.symbols}},methods:{setCurSymbol(e){this.$store.commit("setCurSymbol",{newSym:e.sym})}}},O=$,x=Object(c["a"])(O,C,D,!1,null,null,null),T=x.exports;n["a"].use(p["a"]);const j=[{path:"/",name:"Table",component:g},{path:"/binance",name:"Binance",component:T}],B=new p["a"]({mode:"history",base:"/testtask/",routes:j});var P=B,E=s("2f62");n["a"].use(E["a"]);var N=new E["a"].Store({state:{symbols:["BTCUSDT","BNBBTC","ETHBTC"],curSymbol:"BTCUSDT",bids:[],asks:[],ws:null},getters:{},mutations:{setCurSymbol:(e,t)=>{e.curSymbol=t.newSym},setStack:(e,t)=>{e.asks=t.asks,e.bids=t.bids}},actions:{socket_sub(){this.state.ws=new WebSocket(`wss://stream.binance.com:9443/ws/${this.state.curSymbol.toLowerCase()}@depth20`)},socket_change(){this.state.ws.close(1e3,"reopen"),this.state.ws=new WebSocket(`wss://stream.binance.com:9443/ws/${this.state.curSymbol.toLowerCase()}@depth20`)},socket_listen({commit:e}){this.state.ws.onmessage=t=>{let s=JSON.parse(t.data);e("setStack",s)}},socket_close(){this.state.ws.close(1e3,"Завершена работа")}},modules:{}});s("5132");n["a"].config.productionTip=!1,new n["a"]({router:P,store:N,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),o=s.n(n);o.a},"8faf":function(e,t,s){},"9c0c":function(e,t,s){},a598:function(e,t,s){}});
//# sourceMappingURL=app.3aa09418.js.map