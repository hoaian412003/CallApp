(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(13),a=n.n(i),r=(n(34),n(14)),l=(n(35),n(15)),u=n(12),o=n(20),d=n.n(o),j=n(1),b=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(void 0),a=Object(r.a)(i,2),o=a[0],b=a[1],m=Object(c.useState)(!1),O=Object(r.a)(m,2),v=O[0],x=O[1],f=Object(u.c)((function(e){return e.callStatus})),h=Object(u.b)(),p={sockets:[new d.a.WebSocketInterface("wss://sbc03.tel4vn.com:7444")],uri:"sip:106@2-test1.gcalls.vn:50061",password:"test1106",no_answer_timeout:3e3,register_expires:300,session_timers:!1},N=new d.a.UA(p);N.start();var g={eventHandlers:{progress:function(e){h({type:"calling"})},failed:function(e){h({type:"failed"}),setTimeout((function(){h({type:"disable"})}),2e4)},ended:function(e){h({type:"ended"}),setTimeout((function(){h({type:"disable"})}),2e4)},confirmed:function(e){h({type:"callstart",payload:n})}},mediaConstraints:{audio:!0,video:!1},pcConfig:{iceServers:[{urls:"stun:stun.l.google.com:19302"}]}};N.on("newRTCSession",(function(e){h({type:"connect"}),b(e.session)}));var k=function(e){if("Escape"==e)return o.terminate(),void x(!1);if("Backspace"!=e){if("Enter"==e)return""==n?(setTimeout((function(){h({type:"disable"})}),2e4),void h({type:"error"})):(t=n,N.call(t,g),void x(!0));var t;(e<"0"||e>"9")&&"*"!=e&&"#"!=e||s(n+e)}else if(n.length>0){var c=n.substring(0,n.length-1);s(c)}};return Object(j.jsxs)("div",{className:"dial-pad",children:[Object(j.jsxs)("div",{className:"phonenumber",children:[Object(j.jsx)("input",{type:"text",placeholder:"Type phone number",className:"phonenumber-input",value:n,onKeyDown:function(e){return k(e.key)}}),Object(j.jsx)(l.a,{className:"backspace",onClick:function(){return k("Backspace")}})]}),Object(j.jsx)("div",{className:"line"}),Object(j.jsx)("div",{className:"call-status",children:f}),Object(j.jsxs)("div",{className:"grid-number",children:[Object(j.jsx)("div",{className:"number",onClick:function(){return k("1")},children:"1"}),Object(j.jsxs)("div",{className:"number",onClick:function(){return k("2")},children:["2",Object(j.jsx)("div",{className:"text",children:"ABC"})]}),Object(j.jsxs)("div",{className:"number",onClick:function(){return k("3")},children:["3",Object(j.jsx)("div",{className:"text",children:"DEF"})]}),Object(j.jsxs)("div",{className:"number",onClick:function(){return k("4")},children:["4",Object(j.jsx)("div",{className:"text",children:"GHI"})]}),Object(j.jsxs)("div",{className:"number",onClick:function(){return k("5")},children:["5",Object(j.jsx)("div",{className:"text",children:"JKL"})]}),Object(j.jsxs)("div",{className:"number",onClick:function(){return k("6")},children:["6",Object(j.jsx)("div",{className:"text",children:"MNO"})]}),Object(j.jsxs)("div",{className:"number",onClick:function(){return k("7")},children:["7",Object(j.jsx)("div",{className:"text",children:"PQRS"})]}),Object(j.jsxs)("div",{className:"number",onClick:function(){return k("8")},children:["8",Object(j.jsx)("div",{className:"text",children:"TUV"})]}),Object(j.jsxs)("div",{className:"number",onClick:function(){return k("9")},children:["9",Object(j.jsx)("div",{className:"text",children:"WXYZ"})]}),Object(j.jsx)("div",{className:"number",onClick:function(){return k("*")},children:"*"}),Object(j.jsx)("div",{className:"number",onClick:function(){return k("0")},children:"0"}),Object(j.jsx)("div",{className:"number",onClick:function(){return k("#")},children:"#"})]}),0==v?Object(j.jsx)("div",{className:"call-btn",onClick:function(){return k("Enter")},children:Object(j.jsx)(l.b,{})}):Object(j.jsx)("div",{className:"off-btn",onClick:function(){return k("Escape")},children:Object(j.jsx)(l.b,{})})]})},m=n(29),O={callStatus:"",incall:!1},v=Object(m.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"disable":return Object.assign({},e,{callStatus:""});case"calling":return Object.assign({},e,{callStatus:"Calling..."});case"error":return Object.assign({},e,{callStatus:"Phone number empty !!!"});case"ended":return Object.assign({},e,{callStatus:"Call ended"});case"callstart":return Object.assign({},e,{callStatus:"Call with ".concat(t.payload)});case"connect":return Object.assign({},e,{callStatus:"Connecting"});case"failed":return Object.assign({},e,{callStatus:"Failed"});default:return e}})),x=v;var f=function(){return Object(j.jsx)(u.a,{store:x,children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"Menu"}),Object(j.jsx)(b,{})]})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a53686d7.chunk.js.map