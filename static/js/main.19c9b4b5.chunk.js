(this.webpackJsonpmomi=this.webpackJsonpmomi||[]).push([[0],{106:function(e,t,a){e.exports=a(259)},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=(a(111),a(15)),s=a(269),i=a(262),u=a(261),m=a(62),d=a(268),h=function(e){var t=e.data,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),m=u[0],d=u[1];Object(n.useEffect)((function(){s(t),d(Object.keys(t[0]))}),[t]);return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,m[0]),r.a.createElement("th",null,m[1]),r.a.createElement("th",null,m[2]))),r.a.createElement("tbody",null,!!l&&l.map((function(e){return r.a.createElement("tr",{key:Math.random().toString()},r.a.createElement("td",null,e[m[0]]),r.a.createElement("td",null,e[m[1]]),r.a.createElement("td",{dangerouslySetInnerHTML:{__html:(t=e[m[2]],a=e[m[0]],t.replace(new RegExp(a,"i"),'<span style="font-weight: bold">'.concat(a,"</span>")))}}));var t,a}))))},E=(a(112),a(113),a(83)),p=a.n(E),f=a(267),b=a(263),v=a(264),g=a(266),w=a(265),y=function(e,t){return{__html:function(e,t){var a=new RegExp(t,"i");return e.replace(a,'<span style="font-weight: bold">'.concat(t,"</span>"))}(e,t)}},j=(a(114),function(e){var t=e.text,a=e.phrase;return r.a.createElement("div",{className:"Context",dangerouslySetInnerHTML:y(t,a)})}),O=(a(115),function(e,t){return{status:e,msg:t}});var C=function(e){var t=e.phrase;return r.a.createElement(u.a,null,t.en,r.a.createElement(f.a,{title:t.pl},r.a.createElement(w.a,null)))},S=function(e){var t=e.phrase,a=e.refresh,c=b.a.useForm(),l=Object(o.a)(c,1)[0],s=Object(n.useState)({status:null,msg:""}),i=Object(o.a)(s,2),d=i[0],h=i[1],E=Object(n.useState)(""),p=Object(o.a)(E,2),f=p[0],w=p[1];Object(n.useEffect)((function(){w(""),h(O(null,"")),l.resetFields()}),[t]);return t?r.a.createElement("div",{className:"Exercise"},r.a.createElement(u.a,{direction:"horizontal"},r.a.createElement("div",{className:"Answer"})),r.a.createElement(v.a,{title:r.a.createElement(C,{phrase:t}),bordered:!1,style:{width:300}},r.a.createElement(b.a,{form:l,layout:"vertical"},r.a.createElement(b.a.Item,{label:"Translation",name:"answer",validateStatus:d.status,help:d.msg,hasFeedback:!0},r.a.createElement(g.a,{onChange:function(e){w(e.target.value)},value:f,autoComplete:"off"})),r.a.createElement(b.a.Item,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{type:"primary",htmlType:"submit",onClick:function(){var e,a;h((e=f,a=t.pl,e?e.localeCompare(a,"pl",{sensitivity:"base"})?O("error","Wrong answer :("):O("success","Good answer!"):O("",""))),w("")}},"Check"),r.a.createElement(m.a,{type:"default",htmlType:"submit",onClick:function(){return a()}},"Refresh")))),r.a.createElement(j,{text:t.context,phrase:t.en}))):null},k=function(e){var t,a,n=(t=0,a=e.length,Math.ceil(Math.random()*(a-1-t)));return{en:e[n].EN,pl:e[n].PL,context:e[n].Context}};var x=function(){var e=s.a.Header,t=s.a.Footer,a=s.a.Content,c=Object(n.useState)([]),l=Object(o.a)(c,2),E=l[0],f=l[1],b=Object(n.useState)(!1),v=Object(o.a)(b,2),g=v[0],w=v[1],y=Object(n.useState)(void 0),j=Object(o.a)(y,2),O=j[0],C=j[1],x=Object(n.useCallback)((function(e){f(e.data),C(k(e.data))}),[]);return Object(n.useEffect)((function(){try{return p.a.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSCT-qGizC85dIjMYIt6EAxlAT1Z-7J5ktgc9RgWOxapCYArCPvi5TgoqaJ5AL0c2q0b3gN-v2yGcVS/pub?output=csv",{download:!0,header:!0,complete:x})}catch(e){console.error("Something was wrong. Cannot load spreadsheet ;(",e)}}),[x]),r.a.createElement(s.a,{className:"App"},r.a.createElement(e,{className:"AppHeader"},r.a.createElement("h1",{className:"AppName"},"Momi")),E.length?r.a.createElement(a,{className:"Content"},r.a.createElement(u.a,{direction:"vertical"},r.a.createElement(S,{phrase:O,refresh:function(){C(k(E))}}),r.a.createElement(m.a,{onClick:function(){w(!0)}},"Show dictionary")),r.a.createElement(d.a,{title:"Dictionary",closable:!0,onClose:function(){w(!1)},visible:g,placement:"right",width:"500"},r.a.createElement(h,{data:E}))):r.a.createElement(a,{className:"Content"},r.a.createElement(i.a,{tip:"Loading data..."})),r.a.createElement(t,null,"\xa9 2020 by fadehelix"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.19c9b4b5.chunk.js.map