(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{56:function(t,e,n){},57:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),a=n(20),s=n.n(a),l=(n(56),n(6)),c=(n(57),n(22)),o=n(1),d=function(t){return Object(o.jsx)("button",{onClick:t.function,style:t.isPC?{position:"fixed",top:"85%",left:"90%",outline:"none",border:0}:{position:"fixed",top:"80%",left:"75%",outline:"none",border:0},className:"Plus",children:"+"})},u=function(t){return Object(o.jsx)("div",{className:"MainHeader",children:"My Lists"})},b=n(16),j=n(71),h=function(t){var e=Object(b.b)().submitForm;return Object(o.jsx)("button",{onClick:function(){!t.text||t.errors&&t.errors.text||(e(),t.closeHandler())},disabled:!(!t.errors.text&&t.text),className:"btn btn-success",children:"Add"})},O=function(t){return Object(o.jsx)(b.a,{enableReinitialize:!0,initialValues:{text:""},validate:function(e){var n={text:""};return t.borrowedGroup.forEach((function(t){t.title===e.text&&(n.text="Its title have already exist")})),n.text?n:{}},onSubmit:function(e){t.addFunction(e.text),e.text=""},children:function(e){var n=e.values,i=e.errors,r=e.touched,a=e.handleChange,s=e.handleSubmit;return Object(o.jsx)("form",{onSubmit:s,children:Object(o.jsxs)(j.a,{className:t.show?"ModalOpened":"ModalClosed",show:t.show,onHide:t.closeHandler,children:[Object(o.jsx)(j.a.Header,{closeButton:!0,children:Object(o.jsxs)(j.a.Title,{children:["Add ",t.title]})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)(j.a.Body,{children:["Title:",Object(o.jsx)("div",{children:Object(o.jsx)("input",{className:i.text&&r.text?"form-control w-100 is-invalid":"form-control w-100",name:"text",value:n.text,onChange:a,required:!0})}),i.text&&r.text&&Object(o.jsx)("div",{className:"text-danger",children:i.text})]}),Object(o.jsxs)(j.a.Footer,{children:[Object(o.jsx)("button",{className:"btn btn-danger",onClick:t.closeHandler,type:"reset",children:"Close"}),Object(o.jsx)(h,{text:n.text,errors:i,closeHandler:t.closeHandler})]})]})]})})}})},f=n(9),x="MainReducer/ADD_LIST",v="MainReducer/ADD_BOARD",m="MainReducer/ADD_TASK",p="MainReducer/SET_OPENED_LIST",g="MainReducer/SET_OPENED_BOARD",k="MainReducer/SET_OPENED_TASK",w="MainReducer/SET_BOARDS",y="MainReducer/SET_BOARD",S="MainReducer/SET_LISTS",N={openedList:null,openedBoard:null,openedTask:null,lists:[{title:"PricolJS",boards:[{title:"Board1",tasks:[{title:"Task1",description:""},{title:"Task2",description:""}]},{title:"Board2",tasks:[{title:"Task3",description:""}]}]}]},H=function(t){return{type:S,lists:t}},C=function(t){return{type:y,board:t}},T=function(t){return{type:w,boards:t}},E=n(10),D=function(t){return t.main.lists},L=function(t){return t.main.openedList},B=n(43),P=n.n(B),M=n(51),z=n(5),A=function(t){var e=Object(z.f)(),n=function(){var n=Object(M.a)(P.a.mark((function n(){return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q(1e3);case 2:e.push({pathname:"/board",search:"title="+t.title});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),r=Object(i.useState)(!1),a=Object(l.a)(r,2),s=a[0],c=a[1],d=Object(E.b)(),u=Object(E.c)(D),h=function(){u=u.filter((function(e){return e.title!==t.title})),d(H(u)),c(!1)};return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("button",{style:{outline:"none"},onClick:n,className:"ListItem mt-3 container col-11",children:t.title},t.title),Object(o.jsx)("button",{onClick:function(){return c(!0)},className:"btn btn-light col-1 mt-3",children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-pencil",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})})}),Object(o.jsx)(b.a,{initialValues:{title:t.title},onSubmit:function(e){u=u.map((function(n){return n.title===t.title?{title:e.title,boards:n.boards}:n})),d(H(u)),c(!1)},validate:function(e){var n={title:""};return e.title?(u.forEach((function(i){i.title!==t.title&&i.title===e.title&&(n.title="This title have already exist")})),n.title?n:{}):{title:"Please enter title"}},children:function(t){var e=t.handleSubmit,n=t.handleChange,i=t.values,r=t.errors;return Object(o.jsx)("form",{onSubmit:e,children:Object(o.jsxs)(j.a,{show:s,onHide:function(){return c(!1)},children:[Object(o.jsx)(j.a.Header,{closeButton:!0,children:Object(o.jsx)(j.a.Title,{children:"Change list"})}),Object(o.jsxs)(j.a.Body,{children:["Title: ",Object(o.jsx)("input",{className:"form-control",value:i.title,name:"title",onChange:n}),Object(o.jsx)("div",{className:"text-danger",children:r&&r.title})]}),Object(o.jsxs)(j.a.Footer,{children:[Object(o.jsx)("button",{onClick:h,className:"btn btn-danger",children:"Delete"}),Object(o.jsx)(R,{})]})]})})}})]})},R=function(t){var e=Object(b.b)().submitForm;return Object(o.jsx)("button",{onClick:function(){return e()},className:"btn btn-success",children:"Save"})},F=n(72),V=function(t){var e=Object(E.c)(D),n=e.map((function(t){return Object(o.jsx)(A,{title:t.title})})),r=Object(E.b)(),a=Object(i.useState)(!1),s=Object(l.a)(a,2),b=s[0],j=s[1],h=Object(i.useState)(!1),f=Object(l.a)(h,2),v=f[0],m=f[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{}),Object(o.jsx)("div",{className:"container mt-4",children:Object(c.a)(n).reverse()}),Object(o.jsx)(d,{isPC:t.isPC,function:function(){m(!0)}}),Object(o.jsx)(O,{show:v,closeHandler:function(){m(!1)},title:"list",addFunction:function(t){r({type:x,title:t}),j(!0)},borrowedGroup:e}),Object(o.jsx)("div",{className:"ml-4",style:{position:"fixed",display:"flex",justifyContent:"flex-end",alignItems:"flex-end",height:t.height-400},children:Object(o.jsxs)(F.a,{show:b,autohide:!0,onClose:function(){return j(!1)},delay:3e3,children:[Object(o.jsx)(F.a.Header,{children:Object(o.jsx)("strong",{className:"mr-auto",children:"Notice"})}),Object(o.jsx)(F.a.Body,{children:"New list added successfull"})]})})]})},_=function(t){var e=Object(z.f)();return Object(o.jsxs)("div",{style:{fontSize:"2.5em",borderBottom:"1px black solid"},className:"bg-primary fixed-top text-white",children:[Object(o.jsx)("button",{onClick:function(){e.push({pathname:"/"})},style:{outline:"none",border:"none"},title:"Go to lists",className:"EmtyButton bg-primary text-white",children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})})}),t.title]})},I=function(t){var e=Object(b.b)().submitForm;return Object(o.jsx)("button",{onClick:function(){e()},type:"submit",className:"btn btn-success",children:"Save"})},G=function(t){var e=Object(i.useState)(!1),n=Object(l.a)(e,2),r=n[0],a=n[1],s=Object(E.b)(),c=function(){var e={title:t.board.title,tasks:[]};e.tasks=t.board.tasks.filter((function(e){return e.title!==t.title})),s(C(e)),a(!1)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{onDoubleClick:function(){return a(!0)},onDragStart:function(e){return t.dragStartHandler(e,{title:t.title,description:t.description},t.board)},onDragEnd:function(e){t.dragEndHandler(e)},onDragLeave:function(t){},onDragOver:function(e){return t.dragOverHandler(e)},onDrop:function(e){return t.dropHandler(e,{title:t.title,description:t.description},t.board)},draggable:!0,style:{fontSize:"2em",cursor:"grab"},className:"card mt-2 Task text-center",children:t.title},t.key),Object(o.jsx)(b.a,{initialValues:{title:t.title,description:t.description},onSubmit:function(e){var n={title:e.title,description:e.description},i={title:t.board.title,tasks:[]};i.tasks=t.board.tasks.map((function(e,i){return e.title!==t.title?e:n})),s(C(i)),a(!1)},validate:function(e){var n={title:""};return e.title?(t.board.tasks.forEach((function(i){i.title!==t.title&&i.title===e.title&&(n.title="This title have already exist")})),n.title?n:{}):(n.title="Please enter title",n)},children:function(t){var e=t.handleChange,n=t.values,i=t.handleSubmit,s=t.errors;return Object(o.jsx)("form",{onSubmit:i,children:Object(o.jsxs)(j.a,{show:r,onHide:function(){return a(!1)},children:[Object(o.jsx)(j.a.Header,{closeButton:!0,children:Object(o.jsx)(j.a.Title,{children:"Change Task"})}),Object(o.jsxs)(j.a.Body,{children:[Object(o.jsxs)("div",{children:["Title:",Object(o.jsx)("input",{name:"title",onChange:e,value:n.title,className:"form-control"}),s.title&&Object(o.jsx)("div",{className:"text-danger",children:s.title})]}),Object(o.jsxs)("div",{children:["Description:",Object(o.jsx)("textarea",{onChange:e,name:"description",className:"form-control",children:n.description})]})]}),Object(o.jsxs)(j.a.Footer,{children:[Object(o.jsx)("button",{onClick:c,className:"btn btn-danger",children:"Delete"}),Object(o.jsx)(I,{})]})]})})}})]})},J=function(t){var e=Object(i.useState)(!1),n=Object(l.a)(e,2),r=n[0],a=n[1],s=Object(E.c)(L),c=function(){var e={title:s?s.title:"",boards:[]};e.boards=s?s.boards.filter((function(e){return e.title!==t.title})):[],N(T(e.boards)),a(!1)},d=Object(i.useState)(""),u=Object(l.a)(d,2),h=u[0],O=u[1],f=Object(i.useState)(!1),x=Object(l.a)(f,2),v=x[0],p=x[1],k=Object(i.useState)(""),w=Object(l.a)(k,2),y=w[0],S=w[1],N=Object(E.b)(),H=t.tasks.map((function(e){return Object(o.jsx)(G,{dragEndHandler:t.dragEndHandlerTask,dragOverHandler:t.dragOverHandlerTask,dragStartHandler:t.dragStartHandlerTask,dropHandler:t.dropHandlerTask,title:e.title,board:{title:t.title,tasks:t.tasks},description:e.description},e.title+t.title)}));return Object(o.jsxs)("div",{className:"bgBoardUI card",children:[Object(o.jsxs)("div",{onDragStart:function(e){return t.dragStartHandler(e,{title:t.title,tasks:t.tasks})},onDragOver:function(e){return t.dragOverHandler(e)},onDragEnd:function(e){return t.dragEndHandler(e)},onDragLeave:function(e){return t.dragEndHandler(e)},onDrop:function(e){return t.dropHandler(e,{title:t.title,tasks:t.tasks})},draggable:!0,style:{fontSize:"2em"},className:"card-header bg-white",children:[Object(o.jsx)("div",{className:"left",children:t.title}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)("button",{onClick:function(){return a(!0)},className:"btn btn-light bg-white",children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-pencil",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})})})})]}),y?Object(o.jsx)("div",{className:"ErrorLog text-danger",children:y}):Object(o.jsx)("div",{children:" "}),Object(o.jsx)("div",{className:"card-body",style:{minHeight:"50px",maxHeight:t.height-250,overflowY:"scroll"},onDragOver:function(e){return t.dragOverHandlerTask(e)},onDrop:H.length>0?function(){}:function(e){return t.dropHandlerTask(e,null,{title:t.title,tasks:[]})},children:H}),Object(o.jsx)("button",{onClick:function(){return p(!0)},disabled:v,style:{outline:"none",border:"none"},className:"AddText mb-2",children:v?Object(o.jsx)("form",{onSubmit:function(){var e;N((e={title:t.title,tasks:t.tasks},{type:g,board:e})),S("");var n=!0;t.tasks.forEach((function(t){t.title===h&&(S("This title have already exist"),n=!1)})),h||(n=!1),n&&N({type:m,title:h}),O(""),p(!1)},children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)("button",{type:"reset",onClick:function(){O(""),S(""),p(!1)},className:"EmtyButton text-danger",children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-x",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})})}),Object(o.jsx)("div",{className:"col-8",children:Object(o.jsx)("input",{className:"w-100",style:{outline:"none",border:"none",borderBottom:"1px solid green"},autoFocus:!0,onChange:function(t){O(t.target.value)},value:h})}),Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)("button",{type:"submit",className:"EmtyButton text-success",children:"+"})})]})}):"+ Add Task"}),Object(o.jsx)(b.a,{enableReinitialize:!0,initialValues:{title:t.title},onSubmit:function(e){var n={title:s?s.title:"",boards:[]};n.boards=s?s.boards.map((function(n){return n.title===t.title?{title:e.title,tasks:t.tasks}:n})):[],N(T(n.boards)),a(!1)},validate:function(e){var n={title:""};return e.title?(null===s||void 0===s||s.boards.forEach((function(i){i.title!==t.title&&i.title===e.title&&(n.title="This title have already exist")})),n.title?n:{}):{title:"Please enter title"}},children:function(t){var e=t.values,n=t.errors,i=t.handleSubmit,s=t.handleChange;return Object(o.jsx)("form",{onSubmit:i,children:Object(o.jsxs)(j.a,{show:r,onHide:function(){return a(!1)},children:[Object(o.jsx)(j.a.Header,{closeButton:!0,children:"Change board"}),Object(o.jsxs)(j.a.Body,{children:["Title:",Object(o.jsx)("input",{name:"title",value:e.title,onChange:s,className:"form-control"}),n&&Object(o.jsx)("div",{className:"text-danger",children:n.title})]}),Object(o.jsxs)(j.a.Footer,{children:[Object(o.jsx)("button",{onClick:c,className:"btn btn-danger",children:"Delete"}),Object(o.jsx)(U,{})]})]})})}})]})},U=function(t){var e=Object(b.b)().submitForm;return Object(o.jsx)("button",{onClick:function(){return e()},className:"btn btn-success",children:"Save"})},K=function(t){var e={position:"fixed",top:"85%",left:"15%",outline:"none",border:0,borderRadius:"20000px"},n={position:"fixed",top:"80%",left:"5%",outline:"none",border:0,borderRadius:"20000px"};return t.show?Object(o.jsx)("button",{onDrop:function(e){return t.dropHandler(e)},onDragOver:function(e){e.target.style.background="gray",t.dragOverHandler(e)},onDragLeave:function(t){t.target.style.background="lightgray"},style:t.isPC?e:n,className:"Bucket pt-4",children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-archive",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"})})}):Object(o.jsx)("span",{style:t.isPC?e:n})},W=function(t){var e=Object(i.useState)(null),n=Object(l.a)(e,2),r=n[0],a=n[1],s=Object(i.useState)(!1),c=Object(l.a)(s,2),u=c[0],b=c[1],j=Object(i.useState)(null),h=Object(l.a)(j,2),f=h[0],x=h[1],m=Object(i.useState)(null),g=Object(l.a)(m,2),k=g[0],w=g[1],y=function(t,e,n){w(e),x(n),b(!0)},S=function(t){b(!1)},N=function(t){t.preventDefault()},H=function(t,e,n){t.preventDefault();var i=f;if(i.tasks=f.tasks.filter((function(t){return t.title!==k.title})),U(C(i)),n)if(n.title!==(null===f||void 0===f?void 0:f.title)&&e){var r=0;n.tasks.forEach((function(t,n){t.title===e.title&&(r=n)})),n.tasks.push({title:"",description:""});for(var a=n.tasks.length-1;a>r;a--){var s=n.tasks[a];n.tasks[a]=n.tasks[a-1],n.tasks[a-1]=s}n.tasks[r]=k,U(C(n))}else if(e){var l=0,c=0;n.tasks.forEach((function(t,n){t.title===e.title&&(l=n),t.title===(null===k||void 0===k?void 0:k.title)&&(c=n)}));var o=n.tasks[l];n.tasks[l]=n.tasks[c],n.tasks[c]=o,U(C(n))}else n.tasks.push(k),U(C(n));b(!1)},B=function(t,e){a(e)},P=function(t){t.target.style.background="white"},M=function(t){t.preventDefault(),t.target.style.background="lightgray"},A=function(t,e){t.target.style.background="white",t.preventDefault();var n,i=null===q||void 0===q?void 0:q.boards,a=0,s=0;null===i||void 0===i||i.forEach((function(t,n){t.title==(null===r||void 0===r?void 0:r.title)&&(a=n),t.title==e.title&&(s=n)})),n=i?i[a]:null,i[a]=i[s],i[s]=n,U(T(i))},R=Object(i.useState)(!1),F=Object(l.a)(R,2),V=F[0],I=F[1],G=Object(z.f)(),U=Object(E.b)(),W=Object(E.c)(D),q=Object(E.c)(L);Object(i.useEffect)((function(){var t=new URL("https://wws/"+G.location.search).searchParams.get("title"),e=null;W.forEach((function(n){n.title===t&&(e=n)})),e&&U({type:p,list:e})}),[W]);var X=null===q||void 0===q?void 0:q.boards.map((function(e){return Object(o.jsx)(J,{height:t.height,dragEndHandlerTask:S,dragOverHandlerTask:N,dragStartHandlerTask:y,dropHandlerTask:H,dragStartHandler:B,dragOverHandler:M,dragEndHandler:P,dropHandler:A,title:e.title,tasks:e.tasks})}));return Object(o.jsxs)("div",{style:{height:t.height,overflowX:"scroll"},className:"bgListUI",children:[Object(o.jsx)(_,{isPC:t.isPC,title:(null===q||void 0===q?void 0:q.title)?null===q||void 0===q?void 0:q.title:"Pricol"}),Object(o.jsx)("div",{style:{marginTop:"4em",width:375*(X?X.length:0)},children:X}),Object(o.jsx)("div",{}),Object(o.jsx)(d,{isPC:t.isPC,function:function(){I(!0)}}),Object(o.jsx)(O,{show:V,closeHandler:function(){I(!1)},addFunction:function(t){U({type:v,title:t})},title:"board",borrowedGroup:q?q.boards:[]}),Object(o.jsx)(K,{show:u,dropHandler:function(t){return H(t,null,null)},isPC:t.isPC,dragOverHandler:N}),Object(o.jsx)("div",{})]})},q=function(t){return new Promise((function(e){return setTimeout(e,t)}))};var X=function(){var t=Object(i.useState)(!0),e=Object(l.a)(t,2),n=e[0],r=e[1],a=Object(i.useState)(window.innerHeight),s=Object(l.a)(a,2),c=s[0],d=s[1],u=function(t){window.innerWidth>760?r(!0):r(!1),d(window.innerHeight)};return Object(i.useEffect)((function(){return window.addEventListener("resize",u),window.innerWidth>760?r(!0):r(!1),function(){window.removeEventListener("resize",u)}}),[]),Object(o.jsx)("div",{className:"",children:Object(o.jsxs)(z.c,{children:[Object(o.jsx)(z.a,{path:"/board",render:function(){return Object(o.jsx)(W,{height:c,isPC:n})}}),Object(o.jsx)(z.a,{path:"*",render:function(){return Object(o.jsx)(V,{height:c,isPC:n})}})]})})},Y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),r(t),a(t),s(t)}))},Q=n(46),Z=Object(Q.a)({main:function(){var t,e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case S:return Object(f.a)(Object(f.a)({},i),{},{lists:Object(c.a)(r.lists)});case y:return Object(f.a)(Object(f.a)({},i),{},{lists:i.lists.map((function(t){var e;return(null===(e=i.openedList)||void 0===e?void 0:e.title)===t.title&&(t.boards=t.boards.map((function(t){return t.title===r.board.title?(t.tasks=r.board.tasks,t.title=r.board.title,t):t}))),t}))});case w:return Object(f.a)(Object(f.a)({},i),{},{lists:Object(c.a)(i.lists.map((function(t){var e;return t.title===(null===(e=i.openedList)||void 0===e?void 0:e.title)?{title:t.title,boards:Object(c.a)(r.boards)}:t}))),openedList:{title:null===(t=i.openedList)||void 0===t?void 0:t.title,boards:Object(c.a)(r.boards)}});case p:return Object(f.a)(Object(f.a)({},i),{},{openedList:r.list});case g:return Object(f.a)(Object(f.a)({},i),{},{openedBoard:r.board});case k:return Object(f.a)(Object(f.a)({},i),{},{openedTask:r.task});case x:return Object(f.a)(Object(f.a)({},i),{},{lists:[].concat(Object(c.a)(i.lists),[{title:r.title,boards:[]}])});case v:return Object(f.a)(Object(f.a)({},i),{},{lists:i.lists.map((function(t){return i.openedList&&i.openedList.title===t.title&&t.boards.push({title:r.title,tasks:[]}),t})),openedList:{title:null===(e=i.openedList)||void 0===e?void 0:e.title,boards:[].concat(Object(c.a)(null===(n=i.openedList)||void 0===n?void 0:n.boards),[{title:r.title,tasks:[]}])}});case m:return Object(f.a)(Object(f.a)({},i),{},{lists:i.lists.map((function(t){return i.openedList&&i.openedList.title===t.title&&(t.boards=t.boards.map((function(t){return i.openedBoard&&i.openedBoard.title===t.title&&t.tasks.push({title:r.title,description:""}),t}))),t}))});default:return i}}}),$=Object(Q.b)(Z);window.store=$;var tt=n(27);s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(E.a,{store:$,children:Object(o.jsx)(tt.a,{children:Object(o.jsx)(X,{})})})}),document.getElementById("root")),Y()}},[[69,1,2]]]);
//# sourceMappingURL=main.fc64de56.chunk.js.map