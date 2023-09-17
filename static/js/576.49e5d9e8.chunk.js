"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[576,396,235,524,717,124],{1235:function(e,t,r){r.r(t),r.d(t,{getAdverts:function(){return u},updateAdvert:function(){return s}});var n,a,o=r(4165),i=r(5861),c=r(1243);c.Z.defaults.baseURL="https://64849eb7ee799e321626def8.mockapi.io";var u=function(){return(n=n||(0,i.Z)((0,o.Z)().mark((function e(){var t,r,n,a,i=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={params:{limit:i.length>1&&void 0!==i[1]?i[1]:8,page:i.length>0&&void 0!==i[0]?i[0]:1}},(t=i.length>2&&void 0!==i[2]?i[2]:null)&&(r.signal=t),e.next=7,c.Z.get("/adverts",r);case 7:return n=e.sent,a=n.data,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)},s=function(e,t){return(a=a||(0,i.Z)((0,o.Z)().mark((function e(t,r){var n,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.put("/adverts/".concat(t),r);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},9396:function(e,t,r){r.r(t),r.d(t,{getAdverts:function(){return n.getAdverts},updateAdvert:function(){return n.updateAdvert}});var n=r(1235)},3524:function(e,t,r){r.r(t),r.d(t,{APOLOGIZE_MESSAGE:function(){return i},CANCELED_ERROR:function(){return a},EMPTY_FAVORITES_MESSAGE:function(){return l},END_OF_RESULTS_MESSAGE:function(){return u},ERROR_MESSAGE:function(){return o},LIMIT:function(){return n},LS_KEY_FAVORITES:function(){return c},NO_RESULTS_MESSAGE:function(){return s}});var n=8,a="CanceledError",o="Something went wrong... Please try again later.",i="Something's gone wrong, but we're working on it. We apologize for the inconvenience, but we're currently experiencing some issues. Please try again later.",c="favorites",u="You reached the end of results",s="Sorry, there are to results matching your request.",l="Your favorites list is empty."},4717:function(e,t,r){r.r(t),r.d(t,{useFavorites:function(){return n.useFavorites}});var n=r(4124)},4124:function(e,t,r){r.r(t),r.d(t,{useFavorites:function(){return l}});var n=r(4165),a=r(3433),o=r(5861),i=r(9439),c=r(2791),u=r(3524),s=r(9396),l=function(){var e,t=(0,c.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem(u.LS_KEY_FAVORITES)))&&void 0!==e?e:[]})),r=(0,i.Z)(t,2),l=r[0],f=r[1];(0,c.useEffect)((function(){0===l.length?localStorage.removeItem(u.LS_KEY_FAVORITES):localStorage.setItem(u.LS_KEY_FAVORITES,JSON.stringify(l))}),[l]);return[l,function(t){return(e=e||(0,o.Z)((0,n.Z)().mark((function e(t){var r,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.some((function(e){return e.id===t}))){e.next=14;break}return e.prev=2,r={favorite:!1},e.next=6,(0,s.updateAdvert)(t,r);case 6:f((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(2),new Error(u.ERROR_MESSAGE);case 12:e.next=25;break;case 14:return e.prev=14,o={favorite:!0},e.next=18,(0,s.updateAdvert)(t,o);case 18:i=e.sent,f((function(e){return[i].concat((0,a.Z)(e))})),e.next=25;break;case 22:throw e.prev=22,e.t1=e.catch(14),new Error(u.ERROR_MESSAGE);case 25:case"end":return e.stop()}}),e,null,[[2,9],[14,22]])})))).apply(this,arguments)}]}},5576:function(e,t,r){r.r(t),r.d(t,{RentalPage:function(){return b}});var n=r(1413),a=r(4165),o=r(3433),i=r(5861),c=r(9439),u=r(2791),s=r(9085),l=r(5617),f=r(6707),d=function(){return d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d.apply(this,arguments)},p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},v=(0,f.i)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");var E=function(e){var t=e.loading,r=void 0===t||t,n=e.color,a=void 0===n?"#000000":n,o=e.speedMultiplier,i=void 0===o?1:o,c=e.cssOverride,s=void 0===c?{}:c,f=e.size,E=void 0===f?15:f,S=e.margin,h=void 0===S?2:S,g=p(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),m=d({display:"inherit"},s),y=function(e){return{backgroundColor:a,width:(0,l.E)(E),height:(0,l.E)(E),margin:(0,l.E)(h),borderRadius:"100%",display:"inline-block",animation:"".concat(v," ").concat(.75/i,"s ").concat(.12*e/i,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return r?u.createElement("span",d({style:m},g),u.createElement("span",{style:y(1)}),u.createElement("span",{style:y(2)}),u.createElement("span",{style:y(3)})):null},S=r(9396),h=r(9930),g=r(4717),m=r(8300),y=r(3524),O=r(8405),A=r(6899),Z=r(184),b=function(){var e,t=(0,u.useState)([]),r=(0,c.Z)(t,2),l=r[0],f=r[1],d=(0,u.useState)(!1),p=(0,c.Z)(d,2),v=p[0],b=p[1],x=(0,u.useState)(""),R=(0,c.Z)(x,2),_=R[0],w=R[1],j=(0,u.useState)(1),L=(0,c.Z)(j,2),k=L[0],M=L[1],I=(0,u.useState)(!1),F=(0,c.Z)(I,2),T=F[0],C=F[1],G=(0,g.useFavorites)(),P=(0,c.Z)(G,2)[1],N=(0,u.useState)(A.initialValues),Y=(0,c.Z)(N,2),V=Y[0],z=Y[1];(0,u.useEffect)((function(){var e,t=new AbortController;return function(){(e=e||(0,i.Z)((0,a.Z)().mark((function e(){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),w(""),e.next=5,(0,S.getAdverts)(k,y.LIMIT,t.signal);case 5:r=e.sent,f((function(e){return[].concat((0,o.Z)(e),(0,o.Z)(r))})),r.length<y.LIMIT&&(C(!0),s.Am.info(y.END_OF_RESULTS_MESSAGE)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.name===y.CANCELED_ERROR?w(""):(w(y.APOLOGIZE_MESSAGE),s.Am.error(y.ERROR_MESSAGE));case 13:return e.prev=13,b(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}(),function(){return t.abort()}}),[k]);var U=(0,m.filterAdverts)(l,V);return(0,Z.jsxs)(Z.Fragment,{children:[_&&(0,Z.jsx)(h.ErrorCard,{children:_}),!_&&l.length>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(h.PageTitle,{hidden:!0,children:"Catalog"}),(0,Z.jsx)(h.Section,{children:(0,Z.jsx)(h.SearchBar,{handleSearch:function(e){z((function(t){return(0,n.Z)((0,n.Z)({},t),e)}))}})}),!U.length&&(0,Z.jsx)(h.NoResults,{children:y.NO_RESULTS_MESSAGE}),(0,Z.jsxs)(h.Section,{children:[(0,Z.jsx)(h.CardList,{data:U,toggleFavorites:P}),!T&&(0,Z.jsx)(h.ButtonSecondary,{type:"button",onClick:function(){return(e=e||(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M((function(e){return e+1}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)},children:v?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("span",{children:"Loading"}),(0,Z.jsx)(E,{color:O.theme.colors.bgAccent,size:3})]}):(0,Z.jsx)("span",{children:"Load more"})})]})]})]})}}}]);
//# sourceMappingURL=576.49e5d9e8.chunk.js.map