"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[401,627,322,289,388,61,472,459,925,613,975,649],{3627:function(n,t,e){e.r(t),e.d(t,{AdvertModal:function(){return s}});var r=e(3433),i=e(4289),o=e(8322),c=e(5975),a=e(2649),l=e(184),s=function(n){var t=n.data,e=t.id,s=t.year,d=t.make,u=t.model,p=t.type,x=t.img,h=t.description,f=t.fuelConsumption,m=t.engineSize,g=t.accessories,j=t.functionalities,b=t.rentalPrice,Z=t.address,v=t.rentalConditions,y=t.mileage,T=v.split("\n").map((function(n){return(0,c.splitStringIntoNumberAndText)(n)}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Image,{src:x||a,alt:"".concat(d," ").concat(u," ").concat(s)}),(0,l.jsxs)("div",{children:[(0,l.jsxs)(o.TitleBlockWrapper,{children:[(0,l.jsxs)(o.Title,{children:[(0,l.jsxs)("span",{children:[d," "]}),(0,l.jsxs)(o.TitleAccent,{children:[u,", "]}),(0,l.jsx)("span",{children:s})]}),(0,l.jsxs)(o.TagsList,{children:[(0,l.jsx)(o.TagItem,{children:Z.split(",")[1]}),(0,l.jsx)(o.TagItem,{children:Z.split(",")[2]}),(0,l.jsxs)(o.TagItem,{children:["Id: ",e]}),(0,l.jsxs)(o.TagItem,{children:["Year: ",s]}),(0,l.jsxs)(o.TagItem,{children:["Type: ",p]}),(0,l.jsxs)(o.TagItem,{children:["Fuel Consumption: ",f]}),(0,l.jsxs)(o.TagItem,{children:["Engine Size: ",m]})]})]}),(0,l.jsx)(o.Description,{children:h}),(0,l.jsxs)(o.BlockWrapper,{children:[(0,l.jsx)(o.BlockTitle,{children:"Accessories and functionalities:"}),(0,l.jsx)(o.TagsList,{children:[].concat((0,r.Z)(g),(0,r.Z)(j)).map((function(n){return(0,l.jsx)(o.TagItem,{children:n},n)}))})]}),(0,l.jsxs)(o.BlockWrapper,{children:[(0,l.jsx)(o.BlockTitle,{children:"Rental Conditions:"}),(0,l.jsxs)(o.RentalConditionsList,{children:[T.map((function(n){return"object"===typeof n?(0,l.jsxs)(o.RentalConditionsItem,{children:[n.text," ",(0,l.jsx)(o.AccentText,{children:n.number})]},n):(0,l.jsx)(o.RentalConditionsItem,{children:n},n)})),(0,l.jsxs)(o.RentalConditionsItem,{children:["Mileage:"," ",(0,l.jsx)(o.AccentText,{children:y.toLocaleString("en-US")})]}),(0,l.jsxs)(o.RentalConditionsItem,{children:["Price: ",(0,l.jsx)(o.AccentText,{children:b})]})]})]}),(0,l.jsx)(i.ButtonPrimary,{href:"tel:+380730000000",tag:"a",btnWidth:"auto",btnPadding:"12px 50px",children:"Rental car"})]})]})}},8322:function(n,t,e){e.r(t),e.d(t,{AccentText:function(){return B},BlockTitle:function(){return I},BlockWrapper:function(){return k},Description:function(){return w},Image:function(){return b},RentalConditionsItem:function(){return A},RentalConditionsList:function(){return C},TagItem:function(){return T},TagsList:function(){return y},Title:function(){return Z},TitleAccent:function(){return v},TitleBlockWrapper:function(){return j}});var r,i,o,c,a,l,s,d,u,p,x,h,f=e(168),m=e(225),g=e(8405),j=m.Z.div(r||(r=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 14px;\n"]))),b=m.Z.img(i||(i=(0,f.Z)(["\n    width: 461px;\n    height: 248px;\n    margin-bottom: 14px;\n    border-radius: 14px;\n    object-fit: cover;\n    object-position: center;\n"]))),Z=m.Z.h2(o||(o=(0,f.Z)(["\n    font-size: 18px;\n    font-weight: 500;\n    line-height: calc(24 / 18);\n"]))),v=m.Z.span(c||(c=(0,f.Z)(["\n    color: ",";\n"])),g.theme.colors.textAccent),y=m.Z.ul(a||(a=(0,f.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 4px;\n    column-gap: 6px;\n"]))),T=m.Z.li(l||(l=(0,f.Z)(["\n    color: ",";\n\n    &:not(:last-child) {\n        padding-right: 6px;\n        border-right: 1px solid ",";\n    }\n"])),g.theme.colors.textTransparentPrimary,g.theme.colors.borderSecondary),w=m.Z.p(s||(s=(0,f.Z)(["\n    font-size: 14px;\n    line-height: calc(20 / 14);\n    margin-bottom: 24px;\n"]))),k=m.Z.div(d||(d=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 24px;\n"]))),I=m.Z.h3(u||(u=(0,f.Z)(["\n    font-size: 14px;\n    line-height: calc(20 / 14);\n"]))),C=m.Z.ul(p||(p=(0,f.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n"]))),A=m.Z.li(x||(x=(0,f.Z)(["\n    padding: 7px 14px;\n    color: ",";\n    background-color: ",";\n    border-radius: 35px;\n"])),g.theme.colors.textAdditional,g.theme.colors.bgAdditional),B=m.Z.span(h||(h=(0,f.Z)(["\n    font-family: 'Montserat', sans-serif;\n    font-weight: 600;\n    letter-spacing: -0.24px;\n    color: ",";\n"])),g.theme.colors.textAccent)},4289:function(n,t,e){e.r(t),e.d(t,{ButtonPrimary:function(){return l}});var r=e(1413),i=e(4925),o=e(4388),c=e(184),a=["children","tag","btnWidth","btnPadding"],l=function(n){var t=n.children,e=n.tag,l=void 0===e?"button":e,s=n.btnWidth,d=void 0===s?"auto":s,u=n.btnPadding,p=void 0===u?"12px 44px":u,x=(0,i.Z)(n,a);return(0,c.jsx)(o.ButtonPrimaryStyled,(0,r.Z)((0,r.Z)({tag:l,btnWidth:d,btnPadding:p},x),{},{children:t}))}},4388:function(n,t,e){e.r(t),e.d(t,{ButtonPrimaryStyled:function(){return f},ButtonStyled:function(){return x},LinkStyled:function(){return h}});var r,i,o=e(1413),c=e(4925),a=e(168),l=e(225),s=e(8405),d=e(184),u=["tag"],p="\n    display: inline-block;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: calc(20 / 14);\n    color: ".concat(s.theme.colors.textBtn,";\n    background-color: ").concat(s.theme.colors.bgAccent,";\n    border-radius: 12px;\n    transition: background-color 0.2s ").concat(s.theme.transitions.cubicBezier,";\n\n    &:hover,\n    &:focus {\n        background-color: ").concat(s.theme.colors.bgAccentHover,";\n    }\n"),x=l.Z.button(r||(r=(0,a.Z)(["\n    ",";\n    width: ",";\n    padding: ",";\n"])),p,(function(n){return n.btnWidth}),(function(n){return n.btnPadding})),h=l.Z.a(i||(i=(0,a.Z)(["\n    ","\n    width: ",";\n    padding: ",";\n"])),p,(function(n){return n.btnWidth}),(function(n){return n.btnPadding})),f=function(n){var t=n.tag,e=(0,c.Z)(n,u);return"a"===t?(0,d.jsx)(h,(0,o.Z)({},e)):(0,d.jsx)(x,(0,o.Z)({},e))}},401:function(n,t,e){e.r(t),e.d(t,{CardList:function(){return c}});var r=e(2459),i=e(9061),o=e(184),c=function(n){var t=n.data,e=n.toggleFavorites;return(0,o.jsx)(r.CardListStyled,{children:t.map((function(n){return(0,o.jsx)(i.Card,{data:n,toggleFavorites:e},"".concat(n.id))}))})}},2459:function(n,t,e){e.r(t),e.d(t,{CardListStyled:function(){return o}});var r,i=e(168),o=e(225).Z.ul(r||(r=(0,i.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 50px;\n    column-gap: 29px;\n    margin-bottom: 100px;\n"])))},9061:function(n,t,e){e.r(t),e.d(t,{Card:function(){return g}});var r=e(4165),i=e(5861),o=e(9439),c=e(2791),a=e(3853),l=e(9085),s=e(3925),d=e(3627),u=e(4289),p=e(2472),x=e(6261),h=e(2649),f=e(8405),m=e(184),g=function(n){var t,e=n.data,g=n.toggleFavorites,j=e.id,b=e.year,Z=e.make,v=e.model,y=e.type,T=e.img,w=e.functionalities,k=e.rentalPrice,I=e.rentalCompany,C=e.address,A=e.favorite,B=(0,c.useState)(A),P=(0,o.Z)(B,2),S=P[0],W=P[1],L=(0,c.useState)(!1),z=(0,o.Z)(L,2),M=z[0],F=z[1],R=function(){return F((function(n){return!n}))};return(0,m.jsxs)(p.CardItem,{children:[(0,m.jsxs)(p.ImageWrapper,{onClick:function(){return(t=t||(0,i.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g(j);case 3:W((function(n){return!n})),l.Am.success("".concat(Z," ").concat(v," ").concat(b," is successfully ").concat(S?"removed fom favorites":"added to favorites")),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),l.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)},children:[(0,m.jsx)(p.Image,{src:T||h,alt:"".concat(Z," ").concat(v," ").concat(b)}),(0,m.jsx)(p.FavoriteBtn,{type:"button",children:(0,m.jsx)(a.$aX,{size:18,fill:S?f.theme.colors.iconAccent:"none",stroke:S?f.theme.colors.iconAccent:f.theme.colors.iconPrimary})})]}),(0,m.jsxs)(p.CardDescription,{children:[(0,m.jsxs)(p.TitleWrapper,{children:[(0,m.jsxs)(p.Title,{children:[(0,m.jsxs)("span",{children:[Z," "]}),(0,m.jsxs)(p.TitleAccent,{children:[v,", "]}),(0,m.jsx)("span",{children:b})]}),(0,m.jsx)(p.Price,{children:k})]}),(0,m.jsxs)(p.TagsList,{children:[(0,m.jsx)(p.TagItem,{children:C.split(",")[1]}),(0,m.jsx)(p.TagItem,{children:C.split(",")[2]}),(0,m.jsx)(p.TagItem,{children:I}),(0,m.jsx)(p.TagItem,{children:"Premium"}),(0,m.jsx)(p.TagItem,{children:y}),(0,m.jsx)(p.TagItem,{children:v}),(0,m.jsx)(p.TagItem,{children:j}),(0,m.jsx)(p.TagItem,{children:(0,x.getShortestStringFromArr)(w)})]}),(0,m.jsx)(p.BtnWrapper,{children:(0,m.jsx)(u.ButtonPrimary,{type:"button",tag:"button",onClick:R,btnWidth:"100%",btnPadding:"12px 44px",children:"Learn more"})})]}),M&&(0,m.jsx)(s.Modal,{toggleModal:R,children:(0,m.jsx)(d.AdvertModal,{data:e})})]})}},2472:function(n,t,e){e.r(t),e.d(t,{BtnWrapper:function(){return B},CardDescription:function(){return v},CardItem:function(){return j},FavoriteBtn:function(){return y},Image:function(){return Z},ImageWrapper:function(){return b},Price:function(){return I},TagItem:function(){return A},TagsList:function(){return C},Title:function(){return w},TitleAccent:function(){return k},TitleWrapper:function(){return T}});var r,i,o,c,a,l,s,d,u,p,x,h,f=e(168),m=e(225),g=e(8405),j=m.Z.li(r||(r=(0,f.Z)(["\n    width: 274px;\n    display: flex;\n    flex-direction: column;\n"]))),b=m.Z.div(i||(i=(0,f.Z)(["\n    position: relative;\n    display: inline-block;\n    width: 274px;\n    height: 268px;\n    margin-bottom: 14px;\n    border-radius: 14px;\n    overflow: hidden;\n    cursor: pointer;\n"]))),Z=m.Z.img(o||(o=(0,f.Z)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n    transition: transform 0.2s ",";\n\n    &:hover,\n    &:focus {\n        transform: scale(1.1);\n    }\n"])),g.theme.transitions.cubicBezier),v=m.Z.div(c||(c=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n"]))),y=m.Z.button(a||(a=(0,f.Z)(["\n    position: absolute;\n    display: flex;\n    top: 14px;\n    right: 14px;\n    pointer-events: none;\n"]))),T=m.Z.div(l||(l=(0,f.Z)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 8px;\n"]))),w=m.Z.h2(s||(s=(0,f.Z)(["\n    max-width: 90%;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: calc(24 / 16);\n    text-align: left;\n\n    display: -webkit-box;\n    overflow-wrap: break-word;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 1;\n    overflow: hidden;\n"]))),k=m.Z.span(d||(d=(0,f.Z)(["\n    color: ",";\n"])),g.theme.colors.textAccent),I=m.Z.p(u||(u=(0,f.Z)(["\n    font-size: 16px;\n    font-weight: 500;\n    line-height: calc(24 / 16);\n"]))),C=m.Z.ul(p||(p=(0,f.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 4px;\n    column-gap: 6px;\n    margin-bottom: 28px;\n"]))),A=m.Z.li(x||(x=(0,f.Z)(["\n    color: ",";\n\n    &:not(:last-child) {\n        padding-right: 6px;\n        border-right: 1px solid ",";\n    }\n"])),g.theme.colors.textTransparentPrimary,g.theme.colors.borderSecondary),B=m.Z.div(h||(h=(0,f.Z)(["\n    margin-top: auto;\n"])))},3925:function(n,t,e){e.r(t),e.d(t,{Modal:function(){return l}});var r=e(2791),i=e(4164),o=e(71),c=e(6733),a=e(184),l=function(n){var t=n.toggleModal,e=n.children;(0,r.useEffect)((function(){var n=function(n){"Escape"===n.key&&t()};return document.addEventListener("keydown",n),document.documentElement.style.overflowY="hidden",function(){document.removeEventListener("keydown",n),document.documentElement.style.overflowY="unset"}}),[t]);var l=document.querySelector("#backdrop-root");return(0,i.createPortal)((0,a.jsx)(c.Overlay,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,a.jsxs)(c.ModalWindow,{children:[(0,a.jsx)(c.CloseBtn,{onClick:t,children:(0,a.jsx)(o.IOM,{size:24})}),e]})}),l)}},6261:function(n,t,e){e.r(t),e.d(t,{getShortestStringFromArr:function(){return r}});var r=function(n){return n.reduce((function(n,t){return t.length<n.length?t:n}),n[0])}},5975:function(n,t,e){e.r(t),e.d(t,{splitStringIntoNumberAndText:function(){return r}});var r=function(n){var t=n.match(/(\D+)(\d+)/);return t?{text:t[1].trim(),number:parseInt(t[2],10)}:n}},2649:function(n,t,e){n.exports=e.p+"static/media/placeholder.6923b630aa5c2c5f887b.webp"}}]);
//# sourceMappingURL=401.10d0b54a.chunk.js.map