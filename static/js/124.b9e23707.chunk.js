"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[124,396,235,524],{1235:function(e,t,r){r.r(t),r.d(t,{getAdverts:function(){return i},updateAdvert:function(){return s}});var n,u,a=r(4165),o=r(5861),c=r(1243);c.Z.defaults.baseURL="https://64849eb7ee799e321626def8.mockapi.io";var i=function(){return(n=n||(0,o.Z)((0,a.Z)().mark((function e(){var t,r,n,u,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={params:{limit:o.length>1&&void 0!==o[1]?o[1]:8,page:o.length>0&&void 0!==o[0]?o[0]:1}},(t=o.length>2&&void 0!==o[2]?o[2]:null)&&(r.signal=t),e.next=7,c.Z.get("/adverts",r);case 7:return n=e.sent,u=n.data,e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)},s=function(e,t){return(u=u||(0,o.Z)((0,a.Z)().mark((function e(t,r){var n,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.put("/adverts/".concat(t),r);case 2:return n=e.sent,u=n.data,e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},9396:function(e,t,r){r.r(t),r.d(t,{getAdverts:function(){return n.getAdverts},updateAdvert:function(){return n.updateAdvert}});var n=r(1235)},3524:function(e,t,r){r.r(t),r.d(t,{APOLOGIZE_MESSAGE:function(){return o},CANCELED_ERROR:function(){return u},EMPTY_FAVORITES_MESSAGE:function(){return f},END_OF_RESULTS_MESSAGE:function(){return i},ERROR_MESSAGE:function(){return a},LIMIT:function(){return n},LS_KEY_FAVORITES:function(){return c},NO_RESULTS_MESSAGE:function(){return s}});var n=8,u="CanceledError",a="Something went wrong... Please try again later.",o="Something's gone wrong, but we're working on it. We apologize for the inconvenience, but we're currently experiencing some issues. Please try again later.",c="favorites",i="You reached the end of results",s="Sorry, there are to results matching your request.",f="Your favorites list is empty."},4124:function(e,t,r){r.r(t),r.d(t,{useFavorites:function(){return f}});var n=r(4165),u=r(3433),a=r(5861),o=r(9439),c=r(2791),i=r(3524),s=r(9396),f=function(){var e,t=(0,c.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem(i.LS_KEY_FAVORITES)))&&void 0!==e?e:[]})),r=(0,o.Z)(t,2),f=r[0],p=r[1];(0,c.useEffect)((function(){0===f.length?localStorage.removeItem(i.LS_KEY_FAVORITES):localStorage.setItem(i.LS_KEY_FAVORITES,JSON.stringify(f))}),[f]);return[f,function(t){return(e=e||(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.some((function(e){return e.id===t}))){e.next=14;break}return e.prev=2,r={favorite:!1},e.next=6,(0,s.updateAdvert)(t,r);case 6:p((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),new Error(i.ERROR_MESSAGE);case 12:e.next=25;break;case 14:return e.prev=14,a={favorite:!0},e.next=18,(0,s.updateAdvert)(t,a);case 18:o=e.sent,p((function(e){return[o].concat((0,u.Z)(e))})),e.next=25;break;case 22:throw e.prev=22,e.t1=e.catch(14),new Error(i.ERROR_MESSAGE);case 25:case"end":return e.stop()}}),e,null,[[2,9],[14,22]])})))).apply(this,arguments)}]}}}]);
//# sourceMappingURL=124.b9e23707.chunk.js.map