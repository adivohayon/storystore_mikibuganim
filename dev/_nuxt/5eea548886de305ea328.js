(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{444:function(e,t,r){"use strict";r.r(t);r(94),r(95),r(36),r(37),r(22),r(21);var n=r(1),s=r.n(n),o=r(340),a=r(308),i=r(305),u=(r(307),r(43)),c=r.n(u),h=r(371),l=r.n(h),f=(r(45),r(300)),p=r(59);t.default={components:{Stories:o.a,Story:a.a,ShelfInfo:i.a},beforeCreate:function(){var e=s()(regeneratorRuntime.mark(function e(){var t,r,n,s,o,a,i,u,h,f,g,v,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("store/get");case 2:for(e.sent,t=p.a.firstCategory,r=p.a.subCategories,n=p.a.restOfCategories,t.shelves=[],s=c()(this.$store,"state.store.shelves",[]),console.log("shelves",s),o=!0,a=!1,i=void 0,e.prev=10,u=s[Symbol.iterator]();!(o=(h=u.next()).done);o=!0){for(f=h.value,(g=f.Categories.map(function(e){return e.id})).includes(t.id)&&t.shelves.push(f),v=0;v<r.length;v++)g.includes(r[v].id)&&(r[v].shelves?r[v].shelves.push(f):r[v].shelves=[f]);for(d=0;d<n.length;d++)g.includes(n[d].id)&&(n[d].shelves?n[d].shelves.push(f):n[d].shelves=[f])}e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),a=!0,i=e.t0;case 18:e.prev=18,e.prev=19,o||null==u.return||u.return();case 21:if(e.prev=21,!a){e.next=24;break}throw i;case 24:return e.finish(21);case 25:return e.finish(18);case 26:console.log("restOfCategories",n),this.firstCategory=t,this.subCategories=l()(r,function(e){return e.shelves.length}).reverse(),this.restOfCategories=l()(n,function(e){return e.shelves&&e.shelves.length}).reverse();case 30:case"end":return e.stop()}},e,this,[[10,14,18,26],[19,,21,25]])}));return function(){return e.apply(this,arguments)}}(),mixins:[f.b],layout:function(e){return e.app.isMobile?"mobile":"desktop"},data:function(){return{currentStoryIndex:0,firstCategory:null,subCategories:[],restOfCategories:[]}},mounted:function(){var e=s()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{this.handleCartIntegration()}catch(e){console.error("Category Page / created() / Error",e)}case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),computed:{storeSlug:function(){return this.$store.state.store.slug},banner:function(){return this.assetsPath+"banner.png"},assetsPath:function(){var e="/";return e+="".concat(this.storeSlug,"/")},stateShelves:function(){return this.$store.state.store.shelves||[]},cartIntegration:function(){return this.$store.getters["cart/integration"]},shelfInfo:function(){return c()(this.$store.state,"store.shelfInfo",null)},shippingDetails:function(){return this.$store.state.store.shippingDetails},returns:function(){return this.$store.state.store.returns},showShelfInfo:function(){return this.$store.state.showShelfInfo}},methods:{handleCartIntegration:function(){var e=s()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("cart/get");case 3:t=e.sent,console.log("cart",t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Category Page / handleCartIntegration / Error",e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),setStoryIndex:function(e){this.currentStoryIndex=e}}}}}]);