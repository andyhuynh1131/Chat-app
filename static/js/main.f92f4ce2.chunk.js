(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{207:function(e,t,n){},288:function(e,t,n){},355:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(27),r=n.n(i),o=(n(207),n(39)),s=n(361),l=n(362),d=n(370),u=n(365),j=n(80),b=n(40),p=n(101);n(356),n(208),n(357);p.a.initializeApp({apiKey:"AIzaSyDUXQuAqC5fXdM4pzje076Nyy-wd6QH0ik",authDomain:"chat-app-3a7ef.firebaseapp.com",projectId:"chat-app-3a7ef",storageBucket:"chat-app-3a7ef.appspot.com",messagingSenderId:"648368662085",appId:"1:648368662085:web:cff6dcef3db92a838fe52c",measurementId:"G-D5FC2QRB3J"}),p.a.analytics();var h=p.a.auth(),O=p.a.firestore(),m=p.a,f=n(29),x=n(360),v=n(31),g=n(7),y=c.a.createContext();var C,w=function(e){var t=e.children,n=Object(v.f)(),i=Object(a.useState)({}),r=Object(f.a)(i,2),o=r[0],s=r[1],l=Object(a.useState)(!0),d=Object(f.a)(l,2),u=d[0],j=d[1];return c.a.useEffect((function(){var e=h.onAuthStateChanged((function(e){if(e){var t=e.displayName,a=e.email,c=e.uid,i=e.photoURL;return s({displayName:t,email:a,uid:c,photoURL:i}),j(!1),void n.push("/")}j(!1),n.push("/login")}));return function(){e()}}),[n]),Object(g.jsx)(y.Provider,{value:{user:o},children:u?Object(g.jsx)(x.a,{}):t})},I=b.a.div(C||(C=Object(o.a)(["\n    display:flex;\n    justify-content: space-between;\n    padding:12px 16px;\n    border-bottom: 1px solid rgba(82,38,83);\n\n    .username{\n        color:white;\n        margin-left:5px\n    }\n\n\n\n"])));var N=function(){var e,t=Object(a.useContext)(y).user,n=t.displayName,c=t.photoURL;return Object(g.jsxs)(I,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(d.a,{src:c,children:c?"":null===n||void 0===n||null===(e=n.charAt(0))||void 0===e?void 0:e.toUpperCase()}),Object(g.jsx)(u.a.Text,{className:"username",children:n})]}),Object(g.jsx)(j.a,{ghost:!0,onClick:function(){h.signOut()},children:"\u0110\u0103ng xu\u1ea5t"})]})},R=n(30),A=n(367),S=n(372),U=function(e,t){var n=Object(a.useState)([]),i=Object(f.a)(n,2),r=i[0],o=i[1];return c.a.useEffect((function(){var n=O.collection(e).orderBy("createdAt");if(t){if(!t.compareValue||!t.compareValue.length)return;n.where(t.fieldName,t.operator,t.compareValue)}return n.onSnapshot((function(e){var t=e.docs.map((function(e){return Object(R.a)(Object(R.a)({},e.data()),{},{id:e.id})}));o(t)}))}),[e,t]),r},k=c.a.createContext();var F,L,T=function(e){var t=e.children,n=Object(a.useState)(!1),i=Object(f.a)(n,2),r=i[0],o=i[1],s=Object(a.useState)([]),l=Object(f.a)(s,2),d=l[0],u=l[1],j=Object(a.useState)(""),b=Object(f.a)(j,2),p=b[0],h=b[1],m=Object(a.useState)(!1),x=Object(f.a)(m,2),v=x[0],C=x[1],w=Object(a.useContext)(y).user.uid,I=c.a.useMemo((function(){return{fieldName:"members",operator:"array-contains",compareValue:w}}),[w]),N=U("rooms",I),A=c.a.useMemo((function(){return N.find((function(e){return e.id===p}))||{}}),[N,p]);return Object(a.useEffect)((function(){if(A.members)return O.collection("users").where("uid","in",A.members).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(R.a)(Object(R.a)({},e.data()),{},{id:e.id})}));u(t)}))}),[A.members]),Object(g.jsx)(k.Provider,{value:{rooms:N,members:d,selectedRoom:A,isAddRoomVisible:v,setIsAddRoomVisible:C,selectedRoomId:p,setSelectedRoomId:h,isInviteMember:r,setIsInviteMember:o},children:t})},M=A.a.Panel,V=Object(b.a)(M)(F||(F=Object(o.a)(["\n    &&&{\n        .ant-collapse-header,\n        p{\n            color:white;\n        }\n        .ant-collapse-content-box{\n            padding :0 40px;\n        }\n\n        .add-room{\n            color:white;\n            padding:0;\n        }\n\n    }\n"]))),z=Object(b.a)(u.a.Link)(L||(L=Object(o.a)(["\n    display:block;\n    margin-bottom:5px;\n    color:white\n\n"])));var B,P=function(){var e=Object(a.useContext)(k),t=(e.rooms,e.setIsAddRoomVisible),n=e.setSelectedRoomId,i=Object(a.useContext)(y).user.uid,r=Object(a.useState)([]),o=Object(f.a)(r,2),s=o[0],l=o[1];return c.a.useEffect((function(){return O.collection("rooms").where("members","array-contains",i).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(R.a)(Object(R.a)({},e.data()),{},{id:e.id})}));l(t)}))}),[]),Object(g.jsx)(A.a,{ghost:!0,defaultActiveKey:["1"],children:Object(g.jsxs)(V,{header:"Danh s\xe1ch c\xe1c cu\u1ed9c tr\xf2 chuy\u1ec7n",children:[s.map((function(e){return Object(g.jsx)(z,{onClick:function(){return n(e.id)},children:e.name},e.id)})),Object(g.jsx)(j.a,{type:"text",icon:Object(g.jsx)(S.a,{}),className:"add-room",onClick:function(){t(!0)},children:"T\u1ea1o Ph\xf2ng"})]},"1")})},E=b.a.div(B||(B=Object(o.a)(["\n    background: #3f0e40;\n    color : white;\n    height: 100vh;\n"])));var D,G=function(){return Object(g.jsx)(E,{children:Object(g.jsxs)(s.a,{children:[Object(g.jsx)(l.a,{span:24,children:Object(g.jsx)(N,{})}),Object(g.jsx)(l.a,{span:24,children:Object(g.jsx)(P,{})})]})})},J=n(373),Q=n(364),H=n(74),K=n(368),X=n(371),q=n(363),W=b.a.div(D||(D=Object(o.a)(["\n    margin-bottom:10px;\n\n    .author{\n        margin-left:5px;\n        font-weight:bold;\n\n    }\n\n    .date{\n        margin-left:10px;\n        font-size:11px;\n        color:#a7a7a7\n\n    }\n\n    .content{\n        margin-left:30px;\n    }\n\n"])));function Y(e){var t="";return e&&(t=(t=Object(q.a)(new Date(1e3*e),new Date)).charAt(0).toUpperCase()+t.slice(1)),t}var Z,$,_,ee,te,ne,ae=function(e){var t,n=e.text,a=e.displayName,c=e.createdAt,i=e.photoURL;return Object(g.jsxs)(W,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(d.a,{size:"small",src:i,children:i?"":null===(t=a.charAt(0))||void 0===t?void 0:t.toUpperCase()}),Object(g.jsx)(u.a.Text,{className:"author",children:a}),Object(g.jsx)(u.a.Text,{className:"date",children:Y(null===c||void 0===c?void 0:c.seconds)})]}),Object(g.jsx)("div",{children:Object(g.jsx)(u.a.Text,{className:"content",children:n})})]})},ce=n(154),ie=function(e,t){O.collection(e).add(Object(R.a)(Object(R.a)({},t),{},{createdAt:m.firestore.FieldValue.serverTimestamp()}))},re=function(e){for(var t=e.split(" ").filter((function(e){return e})),n=t.length,a=[],c=[],i=[],r=0;r<n;r++)a[r]=!1;return function e(r){for(var o=0;o<n;o++)a[o]||(a[o]=!0,c[r]=t[o],r===n-1&&i.push(c.join(" ")),e(r+1),a[o]=!1)}(0),i.reduce((function(e,t){var n=function(e){var t=[],n="";return e.split("").forEach((function(e){n+=e,t.push(n)})),t}(t);return[].concat(Object(ce.a)(e),Object(ce.a)(n))}),[])},oe=b.a.div(Z||(Z=Object(o.a)(["\n    display:flex;\n    justify-content: space-between;\n    height:56px;\n    padding:0 16px;\n    align-items:center;\n    border-bottom:1px solid rgb(230,230,230);\n\n\n    .header{\n        &-info{\n            display:flex;\n            flex-direction:column;\n            justify-content:center;\n\n        }\n\n        &-title{\n           margin:0;\n           font-weight:bold;\n            \n        }\n\n        &-desription{\n           font-size:12px;\n            \n        }\n    }\n\n"]))),se=b.a.div($||($=Object(o.a)(["\n    display:flex;\n    align-items:center;\n\n"]))),le=b.a.div(_||(_=Object(o.a)(["\n        max-height:100%;\n        overflow-y:auto;\n\n"]))),de=b.a.div(ee||(ee=Object(o.a)(["\n    height:100vh\n"]))),ue=b.a.div(te||(te=Object(o.a)(["\n    height:calc(100% - 56px);\n    display:flex;\n    flex-direction:column;\n    padding:11px;\n    justify-content:flex-end;\n"]))),je=Object(b.a)(Q.a)(ne||(ne=Object(o.a)(["\n    display:flex;\n    align-items: center;\n    padding : 2px 2px 2px 0;\n    border: 1px solid rgb(230,230,230);\n    border-radius:3px;\n    height:60px;\n\n    ant-form-item{\n        margin-bottom:0;\n        flex:1;\n    }\n\n"])));var be=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useContext)(y).user,r=i.uid,o=i.photoURL,s=i.displayName,l=Object(a.useContext)(k),u=l.selectedRoom,b=l.setIsInviteMember,p=l.members,h=Object(a.useState)(""),m=Object(f.a)(h,2),x=m[0],v=m[1],C=Q.a.useForm(),w=Object(f.a)(C,1)[0],I=function(){ie("messages",{text:x,uid:r,photoURL:o,roomId:u.id,displayName:s}),w.resetFields(["message"])};return Object(a.useEffect)((function(){if(u.id)return O.collection("messages").where("roomId","==",u.id).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(R.a)(Object(R.a)({},e.data()),{},{id:e.id})}));t.sort((function(e,t){return e.createdAt-t.createdAt})),c(t)}))}),[u.id]),Object(g.jsx)(de,{children:u.id?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(oe,{children:[Object(g.jsxs)("div",{className:"header-info",children:[Object(g.jsx)("p",{className:"header-title",children:u.name}),Object(g.jsx)("span",{className:"header-desription",children:u.desription})]}),Object(g.jsx)("div",{children:Object(g.jsxs)(se,{children:[Object(g.jsx)(j.a,{icon:Object(g.jsx)(J.a,{}),onClick:function(){return b(!0)},children:"M\u1eddi"}),Object(g.jsx)(d.a.Group,{size:"small",maxCount:2,children:p.map((function(e){return Object(g.jsx)(H.a,{title:e.displayName,children:Object(g.jsx)(d.a,{src:e.photoURL},e.id)})}))})]})})]}),Object(g.jsxs)(ue,{children:[Object(g.jsx)(le,{children:n.map((function(e){return Object(g.jsx)(ae,{text:e.text,photoURL:e.photoURL,createdAt:e.createdAt,displayName:e.displayName},e.id)}))}),Object(g.jsxs)(je,{form:w,children:[Object(g.jsx)(Q.a.Item,{name:"message",style:{width:"100%"},children:Object(g.jsx)(K.a,{onChange:function(e){v(e.target.value)},onPressEnter:I,placeholder:"Nh\u1eadp tin nh\u1eafn  . . .",bordered:!1,autoComplete:"off"})}),Object(g.jsx)(j.a,{type:"primary",onClick:I,children:"G\u1eedi"})]})]})]}):Object(g.jsx)(X.a,{message:"H\xe3y ch\u1ecdn ph\xf2ng",type:"info",showIcon:!0,style:{margin:5},closable:!0})})};var pe=function(){return Object(g.jsxs)(s.a,{children:[Object(g.jsx)(l.a,{span:6,children:Object(g.jsx)(G,{})}),Object(g.jsx)(l.a,{span:18,children:Object(g.jsx)(be,{})})]})},he=(n(288),n(100)),Oe=n.n(he),me=n(129),fe=u.a.Title,xe=new m.auth.FacebookAuthProvider;var ve=function(){var e=function(){var e=Object(me.a)(Oe.a.mark((function e(){var t,n,a;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signInWithPopup(xe);case 2:t=e.sent,n=t.additionalUserInfo,a=t.user,(null===n||void 0===n?void 0:n.isNewUser)&&ie("users",{displayName:a.displayName,email:a.email,photoURL:a.photoURL,uid:a.uid,providerId:n.providerId,keywords:re(a.displayName)});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsx)(s.a,{justify:"center",style:{height:800},children:Object(g.jsxs)(l.a,{span:8,children:[Object(g.jsx)(fe,{style:{textAlign:"center",marginBottom:10},Level:3,children:"App Chat"}),Object(g.jsx)(j.a,{style:{marginBottom:5,width:"100%"},children:"\u0110\u0103ng nh\u1eadp b\u1eb1ng GooGle"}),Object(g.jsx)(j.a,{onClick:e,style:{width:"100%"},children:"\u0110\u0103ng nh\u1eadp b\u1eb1ng FaceBook"})]})})})},ge=n(148),ye=n(369);var Ce=function(){var e=Object(a.useContext)(k),t=e.isAddRoomVisible,n=e.setIsAddRoomVisible,c=Object(a.useContext)(y).user.uid,i=Q.a.useForm(),r=Object(f.a)(i,1)[0];return Object(g.jsx)("div",{children:Object(g.jsx)(ye.a,{title:"T\u1ea1o ph\xf2ng",visible:t,onOk:function(){console.log(r.getFieldsValue()),ie("rooms",Object(R.a)(Object(R.a)({},r.getFieldsValue()),{},{members:[c]})),n(!1),r.resetFields()},onCancel:function(){n(!1),r.resetFields()},children:Object(g.jsxs)(Q.a,{form:r,layout:"vertical",children:[Object(g.jsx)(Q.a.Item,{label:"T\xean ph\xf2ng :",name:"name",children:Object(g.jsx)(K.a,{placeholder:"Nh\u1eadp t\xean ph\xf2ng ..."})}),Object(g.jsx)(Q.a.Item,{label:"M\xf4 t\u1ea3 :",name:"desription",children:Object(g.jsx)(K.a.TextArea,{placeholder:"M\xf4 t\u1ea3 ..."})})]})})})},we=n(200),Ie=n(366),Ne=n(190),Re=n(192),Ae=n.n(Re),Se=["fecthOptions","debounceTimeout"];function Ue(e){var t=e.fecthOptions,n=e.debounceTimeout,c=void 0===n?300:n,i=Object(we.a)(e,Se),r=Object(a.useState)(!1),o=Object(f.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)([]),u=Object(f.a)(d,2),j=u[0],b=u[1],p=Object(a.useMemo)((function(){return Object(Ne.debounce)((function(e){b([]),l(!0),t(e).then((function(e){b(e),l(!1)}))}),c)}),[c,t]);return Object(g.jsx)(Ie.a,Object(R.a)(Object(R.a)({labelInValue:!0,onSearch:p,filterOption:!1,notFoundContent:s?Object(g.jsx)(x.a,{size:"small"}):null},i),{},{children:j.map((function(e){var t;return Object(g.jsxs)(Ie.a.Option,{value:e.value,title:e.label,children:[Object(g.jsx)(Ae.a,{size:"small",src:e.photoURL}),e.photoURL?"":null===(t=e.label)||void 0===t?void 0:t.chatAt(0).toUpperCase(),"".concat(e.label)]},e.value)}))}))}function ke(e){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(me.a)(Oe.a.mark((function e(t){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.collection("users").where("keywords","array-contains",t).orderBy("displayName").limit(20).get().then((function(e){return e.docs.map((function(e){return{lable:e.data().displayName,value:e.data().uid,photoURL:e.data().photoURL}}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Le=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(a.useContext)(k),r=i.isInviteMember,o=i.setIsInviteMember,s=i.selectedRoomId,l=i.selectedRoom,d=Q.a.useForm(),u=Object(f.a)(d,1)[0];return Object(g.jsx)("div",{children:Object(g.jsx)(ye.a,{title:"M\u1eddi th\xe0nh vi\xean",visible:r,onOk:function(){o(!1),u.resetFields(),O.collection("rooms").docs(s).update(Object(R.a)(Object(R.a)({},l.members),n.map((function(e){return e.value})))),console.log(n)},onCancel:function(){o(!1),u.resetFields()},children:Object(g.jsx)(Q.a,{children:Object(g.jsx)(Ue,{mode:"multiple",label:"T\xean c\xe1c th\xe0nh vi\xean",value:n,fecthOptions:ke,onChange:function(e){c(e)},style:{width:"100%"}})})})})};var Te=function(){return Object(g.jsx)(ge.a,{children:Object(g.jsx)(w,{children:Object(g.jsxs)(T,{children:[Object(g.jsxs)(v.c,{children:[Object(g.jsx)(v.a,{component:ve,exact:!0,path:"/login"}),Object(g.jsx)(v.a,{component:pe,exact:!0,path:"/"})]}),Object(g.jsx)(Ce,{}),Object(g.jsx)(Le,{})]})})})},Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,374)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(Te,{})}),document.getElementById("root")),Me()}},[[355,1,2]]]);
//# sourceMappingURL=main.f92f4ce2.chunk.js.map