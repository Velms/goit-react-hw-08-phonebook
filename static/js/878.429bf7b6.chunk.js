"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[878],{3878:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(4554),i=t(885),a=t(2791),l=t(647),o=t(6151),c=t(890),s=t(5065),u=t(3329),d=function(){var e=(0,a.useState)(""),n=(0,i.Z)(e,2),t=n[0],d=n[1],m=(0,a.useState)(""),f=(0,i.Z)(m,2),x=f[0],h=f[1],p=(0,s.wY)().data,b=(0,s.Tn)(),g=(0,i.Z)(b,1)[0],j=function(e){var n=e.target,t=n.name,r=n.value;"name"===t&&d(r),"number"===t&&h(r)},v=function(e){d(""),h(""),e.currentTarget.reset()};return(0,u.jsxs)(r.Z,{textAlign:"center",children:[(0,u.jsx)(c.Z,{style:{fontSize:"40px",fontWeight:"bold",lineHeight:"2.8",marginBottom:"20px"},variant:"h3",children:"Phonebook"}),(0,u.jsxs)(r.Z,{component:"form",display:"flex",justifyContent:"center",flexDirection:"column",sx:{"& > :not(style)":{m:1}},autoComplete:"off",onSubmit:function(e){var n;e.preventDefault(),t&&x?(n={name:t,number:x},p&&p.some((function(e){return e.name.toLowerCase===n.name.toLowerCase}))?alert("".concat(n.name," is already in contacts")):g(n)):alert("The number field and name are empty, fill them in!"),v(e)},children:[(0,u.jsx)(l.Z,{sx:{width:"50ch"},type:"text",name:"name",onChange:j,id:"filled-basic",label:"Name",variant:"filled",required:!0}),(0,u.jsx)(l.Z,{sx:{width:"50ch"},value:x,type:"tel",name:"number",id:"filled-basic",label:"Number",variant:"filled",onChange:j,required:!0}),(0,u.jsx)(o.Z,{disabled:!t||!x,type:"submit",children:"Add Contact"})]})]})},m=t(5048),f=t(6895),x=function(){var e=(0,m.I0)();return{filter:(0,m.v9)(f.w3),changeFilter:function(n){return e(f.Ot.changeFilter(n))}}},h=function(){var e=x(),n=e.filter,t=e.changeFilter;return(0,u.jsxs)(r.Z,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",sx:{"& > :not(style)":{m:2}},children:[(0,u.jsx)(c.Z,{style:{fontSize:"35px",fontWeight:"bold",lineHeight:"2.8",marginBottom:"10px"},variant:"h3",children:"Contacts"}),(0,u.jsx)(l.Z,{sx:{width:"50ch"},type:"text",name:"filter",value:n,onChange:function(e){return t(e.target.value)},id:"filled-basic",label:"Find contacts by name",variant:"filled",required:!0})]})},p=t(1413),b=t(1889),g=t(493),j=t(7630),v=t(703),y=t(4852),Z=t(6259),C=t(3400),w=t(7247),k=function(e){var n=e.name,t=e.number,r=e.id,a=(0,s.Nt)(),l=(0,i.Z)(a,2),o=l[0],c=l[1].isLoading;return(0,u.jsxs)(y.ZP,{children:[(0,u.jsx)(Z.Z,{primary:"".concat(n,": ").concat(t)}),(0,u.jsx)(C.Z,{disabled:c,onClick:function(){return o(r)},edge:"end","aria-label":"delete",children:(0,u.jsx)(w.Z,{})})]})},L=(0,j.ZP)(v.Z)((function(e){var n=e.theme;return(0,p.Z)((0,p.Z)({backgroundColor:"dark"===n.palette.mode?"#1A2027":"rgba(0, 0, 0, 0.06)"},n.typography.body2),{},{padding:n.spacing(2),minWidth:400,color:n.palette.text.primary})})),S=function(){var e=x().filter,n=(0,s.wY)().data,t=(0,a.useMemo)((function(){var t;return null!==(t=null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())})))&&void 0!==t?t:[]}),[e,n]);return(0,u.jsx)(r.Z,{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",sx:{flexGrow:1},children:(0,u.jsx)(L,{sx:{my:1,mx:"auto",p:2},children:(0,u.jsx)(b.ZP,{item:!0,xs:12,md:6,children:(0,u.jsx)(g.Z,{children:t&&t.map((function(e){var n=e.name,t=e.number,r=e.id;return(0,u.jsx)(k,{name:n,number:t,id:r},r)}))})})})})},A=function(){return(0,u.jsxs)(r.Z,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#ccffcd",paddingBottom:"250px",children:[(0,u.jsx)(d,{}),(0,u.jsx)(h,{}),(0,u.jsx)(S,{})]})}}}]);
//# sourceMappingURL=878.429bf7b6.chunk.js.map