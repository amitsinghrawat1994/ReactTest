(this.webpackJsonpreactdemo=this.webpackJsonpreactdemo||[]).push([[0],{146:function(e,t,n){},147:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),r=n.n(a),i=n(9),s=n.n(i),d=(n(146),n(154)),o=n(211),j=n(16),l=(n(147),function(){return Object(c.jsx)(d.a,{variant:"outlined",square:!0,children:Object(c.jsx)("div",{children:Object(c.jsx)("p",{})})})}),u=n(73),b=n(194),h=n(195),m=n(196),O=n(156),x=n(128),p=n(214),f=n(119),g=n.n(f),v=n(118),y=n.n(v),S=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},menuRight:{marginLeft:"auto"}}})),N=function(){var e=S(),t=r.a.useState(null),n=Object(u.a)(t,2),a=n[0],i=n[1],s=Object(j.g)(),d=function(e){"teacher"===e?s.push("/teacher"):"student"===e&&s.push("/student"),i(null)};return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(h.a,{position:"static",children:Object(c.jsx)(m.a,{children:Object(c.jsxs)("div",{className:e.menuRight,children:[Object(c.jsx)(O.a,{title:"Home",onClick:function(){s.push("/")},children:Object(c.jsx)(y.a,{})}),Object(c.jsx)(O.a,{title:"Choose option","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},children:Object(c.jsx)(g.a,{})}),Object(c.jsxs)(x.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){d("")},children:[Object(c.jsx)(p.a,{onClick:function(){d("student")},children:"Student"}),Object(c.jsx)(p.a,{onClick:function(){d("teacher")},children:"Teacher"})]})]})})})})},T=function(){return Object(c.jsx)(N,{})},C=n(197),A=n(198),E=n(120),w=n.n(E),k=n(121),B=n.n(k),D=function(){var e={root:{flexGrow:1,backgroundColor:"white",overflow:"hidden",backgroundSize:"cover",backgroundPosition:"0 400px",paddingBottom:200},grid:{width:1200,marginTop:40},paper:{padding:3,textAlign:"left","&:hover":{cursor:"pointer"}},rangeLabel:{display:"flex",justifyContent:"space-between",paddingTop:2},topBar:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:32},outlinedButtom:{textTransform:"uppercase",margin:1},actionButtom:{textTransform:"uppercase",margin:1,width:152},blockCenter:{padding:2,textAlign:"center"},block:{padding:2},box:{marginBottom:40,height:65}},t=Object(j.g)(),n=function(e){"teacher"===e?t.push("/teacher"):"student"===e&&t.push("/student")};return Object(c.jsx)(C.a,{container:!0,justify:"center",style:{height:"500px"},children:Object(c.jsxs)(C.a,{spacing:4,alignItems:"center",justify:"center",container:!0,className:e.grid,children:[Object(c.jsx)(C.a,{item:!0,xs:12,md:4,children:Object(c.jsxs)(d.a,{style:{padding:"20px",background:"#FFBF55"},className:e.paper,onClick:function(){n("student")},children:[Object(c.jsxs)("div",{className:e.box,children:[Object(c.jsx)(w.a,{fontSize:"large"}),Object(c.jsx)(A.a,{variant:"body1",gutterBottom:!0,children:"Student"})]}),Object(c.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"}})]})}),Object(c.jsx)(C.a,{item:!0,xs:12,md:4,children:Object(c.jsxs)(d.a,{style:{padding:"20px",background:"#FFBF55"},className:e.paper,onClick:function(){n("teacher")},children:[Object(c.jsxs)("div",{className:e.box,children:[Object(c.jsx)(B.a,{fontSize:"large"}),Object(c.jsx)(A.a,{variant:"body1",gutterBottom:!0,children:"Teacher"})]}),Object(c.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"}})]})})]})})},F=n(15),R=n(213),_=n(199),W=n(200),I=n(215),q=n(216),L=n(74),H=n(11),U=n(39),G=n(100),J=n.n(G);var M={getAllStudent:function(){return[{id:"6b2f729a-6a3b-4c38-b58e-2dd2ae946c82",name:"Alisa Fuentes",address:"985 Karweg Place, Coleville, Northern Mariana Islands, 619",subject:[3,4,5]},{id:"43be0939-9a0d-4537-afa6-bbcf22230c02",name:"Ortega Bentley",address:"651 Devon Avenue, Dunlo, Indiana, 1824",subject:[1,2,5]},{id:"90c82b79-15c6-4100-91da-610da233399e",name:"Gretchen Donaldson",address:"938 Pershing Loop, Chilton, Arizona, 5161",subject:[1,3]},{id:"715c7d3c-98a8-469c-bc91-8d18a17c77f8",name:"Edith Sullivan",address:"555 Beadel Street, Iola, Washington, 5943",subject:[3,4,5,7]}]}},V=n(58),z=n(126),P=n(127),K="STUDENT_ADD",Q="STUDENT_GET_ALL",X="STUDENT_GET",Y="STUDENT_NOTFOUND",Z="STUDENT_DELETE",$={students:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(F.a)(Object(F.a)({},e),{},{students:t.data});case K:return Object(F.a)(Object(F.a)({},e),{},{students:e.students.concat([t.data])});case Z:return Object(F.a)(Object(F.a)({},e),{},{students:e.students.filter((function(e){return e.id!==t.data}))});case Y:return Object(F.a)({},e);default:return e}},te="SUBJECT_ALL",ne={subjects:[]},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(F.a)(Object(F.a)({},e),{},{subjects:t.data});default:return e}},ae="TEACHER_ALL",re="TEACHER_ADD_SUBJECT",ie="TEACHER_NOTFOUND",se="TEACHER_DELETE",de="TEACHER_ADD",oe={teachers:[]},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(F.a)(Object(F.a)({},e),{},{teachers:t.data});case de:return Object(F.a)(Object(F.a)({},e),{},{teachers:e.teachers.concat([t.data])});case re:return Object(F.a)(Object(F.a)({},e),{},{teachers:e.teachers.concat([])});case se:return Object(F.a)(Object(F.a)({},e),{},{teachers:e.teachers.filter((function(e){return e.id!==t.data}))});default:return e}},le=Object(V.combineReducers)({student:ee,subject:ce,teacher:je}),ue=Object(V.createStore)(le,Object(P.composeWithDevTools)(Object(V.applyMiddleware)(z.a)));var be={getAllStudent:function(){var e=ue.getState().student.students;if(e&&e.length)return{type:Q,data:e};var t=M.getAllStudent();return t&&t.length?{type:Q,data:t}:{type:Y}},addStudent:function(e){return e?{type:K,data:e}:{type:Y,data:void 0}},getStudent:function(e){var t=ue.getState().student.students;if(t&&t.count){var n=t.find((function(t){return t.id===e}));return{type:X,data:n}}return{type:X,data:void 0}},deleteStudent:function(e){return{type:Z,data:e}}};var he={getAllSubject:function(){return[{id:1,name:"Accounting"},{id:2,name:"Anthropology"},{id:3,name:"Art and Design"},{id:4,name:"Applied Science"},{id:5,name:"Design and Technology"},{id:6,name:"Digital Technology"},{id:7,name:"Economics"},{id:8,name:"Food Technology"},{id:9,name:"Geography"},{id:10,name:"History"},{id:11,name:"Philosophy"}]}};var me={getAllSubject:function(){var e=he.getAllSubject();if(e&&e.length)return{type:te,data:e}}},Oe=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),xe=function(e){var t=e.history,n=e.match.params.id,r=!n,i=Oe(),s=Object(a.useState)([]),d=Object(u.a)(s,2),o=d[0],j=d[1];o=Object(H.c)((function(e){return e.subject.subjects}));var l=Object(H.b)();Object(a.useEffect)((function(){return l(me.getAllSubject())}),[]);var b=U.a().shape({name:U.b().required("Required"),address:U.b().required("Required")});var h=function(e){o.forEach((function(t){t.id===+e.target.value&&(t.ischecked=e.target.checked)})),j(o)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(C.a,{container:!0,children:Object(c.jsx)(C.a,{item:!0,children:Object(c.jsxs)(_.a,{component:"main",maxWidth:"xs",children:[Object(c.jsx)(W.a,{}),Object(c.jsxs)("div",{className:i.paper,children:[Object(c.jsx)(I.a,{className:i.avatar,children:Object(c.jsx)(J.a,{})}),Object(c.jsx)(A.a,{component:"h1",variant:"h5",children:"Add Student"}),Object(c.jsx)(L.a,{initialValues:{name:"",address:"",subjects:[]},onSubmit:function(e,n){var c=n.setStatus;n.setSubmitting,c(),console.log(JSON.stringify(e,null,2)),r&&function(e,n){var c=o.filter((function(e){return e.ischecked})),a={id:Object(R.a)(),name:e.name,address:e.address,subject:c?c.map((function(e){return e.id})):[]};l(be.addStudent(a)),t.push("/student")}(e)},validationSchema:b,children:function(e){var n=e.values,a=e.touched,r=e.errors,s=e.handleChange,d=e.handleBlur,j=e.handleSubmit;return Object(c.jsxs)("form",{className:i.form,noValidate:!0,onSubmit:j,children:[Object(c.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"Name",value:n.name,onChange:s,onBlur:d,helperText:r.name&&a.name&&r.name,autoFocus:!0}),Object(c.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"address",label:"Address",name:"address",autoComplete:"Address",value:n.address,onChange:s,onBlur:d,helperText:r.name&&a.name&&r.name,autoFocus:!0}),Object(c.jsx)("br",{}),Object(c.jsx)(A.a,{variant:"h6",children:"Add / Modify Subject"}),Object(c.jsx)("ul",{className:"subject",children:o.map((function(e){return Object(c.jsx)(pe,Object(F.a)({handleCheckBoxClick:h},e),e.id)}))}),Object(c.jsx)(O.a,{style:{marginRight:"10px"},type:"button",variant:"contained",color:"primary",className:i.submit,onClick:function(){return t.push("/student")},children:"Cancel"}),Object(c.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",className:i.submit,children:"Save"})]})}})]})]})})})})},pe=function(e){return Object(c.jsxs)("li",{children:[Object(c.jsx)("input",{onClick:e.handleCheckBoxClick,type:"checkbox",checked:e.ischecked,value:e.id},e.id)," ",e.name]})},fe=n(204),ge=n(205),ve=n(206),ye=n(207),Se=n(208),Ne=n(209),Te=function(){return[{id:1,name:"Doreen Raymond",subject:[1]},{id:2,name:"Best Hawkins",subject:[2]},{id:3,name:"Estela Townsend",subject:[3]},{id:4,name:"Avery Mosley",subject:[4]},{id:5,name:"Eva Hendrix",subject:[5]}]},Ce={id:0,name:"",subject:[]},Ae=function(){var e=ue.getState().teacher.teachers;if(e&&e.length)return{type:ae,data:e};var t=Te();return{type:ae,data:t||[]}},Ee=function(e){var t=e.teacherId,n=e.subjectId,c=ue.getState().teacher.teachers.find((function(e){return e.id===t}));return c?(c.subject.push(n),{type:re,data:c}):{type:ie,data:"Can not find a teacher"}},we=function(e){return{type:se,data:e}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;return 0!==e.id?{type:de,data:e}:{type:ie,data:e}},Be=Object(b.a)({table:{minWidth:650}}),De=function(e){var t=e.student,n=e.teachers,a=e.subjects,r=Be(),i=function(e){var t=n.find((function(t){return t.subject.find((function(t){return t===e}))}));return t?t.name:"Teacher Not Found."},s=function(e){var t=a.find((function(t){return t.id===e}));return t?t.name:"Subject Not Found."};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(_.a,{maxWidth:!1,children:Object(c.jsxs)(C.a,{container:!0,spacing:3,children:[Object(c.jsx)(C.a,{item:!0,xs:12,children:Object(c.jsx)(A.a,{variant:"h4",gutterBottom:!0,children:"Student Detail"})}),Object(c.jsx)(C.a,{item:!0,xs:12,children:Object(c.jsx)(fe.a,{component:d.a,children:Object(c.jsx)(ge.a,{className:r.table,"aria-label":"simple table",children:Object(c.jsxs)(ve.a,{children:[Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{component:"th",scope:"row",children:"Name"}),Object(c.jsx)(Se.a,{align:"left",children:t.name})]}),Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{component:"th",scope:"row",children:"Teachers Info"}),Object(c.jsx)(Se.a,{children:Object(c.jsx)(fe.a,{component:d.a,children:Object(c.jsxs)(ge.a,{children:[Object(c.jsx)(Ne.a,{children:Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{children:"Subject"}),Object(c.jsx)(Se.a,{children:"Teacher"})]})}),Object(c.jsx)(ve.a,{children:t.subject.map((function(e,t){return Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{children:s(e)}),Object(c.jsx)(Se.a,{children:i(e)})]},t)}))})]})})})]})]})})})})]})})})},Fe=function(){var e=Be();return Object(c.jsx)(fe.a,{component:d.a,children:Object(c.jsx)(ge.a,{className:e.table,"aria-label":"simple table",children:Object(c.jsx)(ve.a,{children:Object(c.jsx)(ye.a,{children:Object(c.jsx)(Se.a,{component:"th",scope:"row",align:"center",children:Object(c.jsx)("p",{children:"No student found."})})})})})})},Re=function(e){e.match;var t,n,r,i=Object(j.i)().id,s=Object(H.b)();t=Object(H.c)((function(e){var t,n;if(null===(t=!(null===(n=e.student)||void 0===n?void 0:n.students))||void 0===t||t)return null;var c=e.student.students.find((function(e){return e.id===i}));return c||null})),n=Object(H.c)((function(e){var t,n;return null!==(t=null===(n=e.teacher)||void 0===n?void 0:n.teachers)&&void 0!==t?t:[]})),r=Object(H.c)((function(e){var t,n;return null!==(t=null===(n=e.subject)||void 0===n?void 0:n.subjects)&&void 0!==t?t:[]}));return Object(a.useEffect)((function(){s(Ae()),s(me.getAllSubject())}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(d.a,{elevation:1,children:t?Object(c.jsx)(De,{student:t,teachers:n,subjects:r}):Object(c.jsx)(Fe,{})})})},_e=n(210),We=n(23),Ie=Object(b.a)((function(e){return{table:{minWidth:650},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}})),qe=function(e){var t=e.match.path,n=Object(H.c)((function(e){var t,n;return null!==(t=null===(n=e.student)||void 0===n?void 0:n.students)&&void 0!==t?t:void 0})),a=Ie(),i=Object(H.b)();r.a.useEffect((function(){return i(be.getAllStudent())}),[]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(_.a,{maxWidth:!1,className:a.container,"data-test":"studentListComponent",children:[Object(c.jsx)("div",{className:"center",children:Object(c.jsx)(A.a,{"data-test":"studentTopHeader",variant:"h4",children:"Students"})}),Object(c.jsxs)(C.a,{container:!0,spacing:3,children:[Object(c.jsx)(C.a,{item:!0,md:12,children:Object(c.jsx)(C.a,{item:!0,children:Object(c.jsx)(O.a,{id:"btnAddStudent",color:"primary",children:Object(c.jsx)(We.b,{to:"".concat(t,"/add"),children:"Add Student"})})})}),Object(c.jsx)(C.a,{item:!0,md:12,children:Object(c.jsx)(fe.a,{className:a.table,"aria-label":"simple table",children:Object(c.jsxs)(ge.a,{children:[Object(c.jsx)(Ne.a,{children:Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{children:"Name"}),Object(c.jsx)(Se.a,{children:"Address"}),Object(c.jsx)(Se.a,{align:"center",children:"Action"})]})}),Object(c.jsx)(ve.a,{children:n&&n.map((function(e,t){return Object(c.jsxs)(ye.a,{className:"_stuRow",id:"_stuRowId_"+t,"data-test":"_stuRow",children:[Object(c.jsx)(Se.a,{component:"th",scope:"row",children:Object(c.jsx)(A.a,{className:a.root,children:Object(c.jsx)(We.b,{to:"/student/".concat(e.id),children:e.name})})}),Object(c.jsx)(Se.a,{children:e.address}),Object(c.jsx)(Se.a,{align:"right",children:Object(c.jsx)(_e.a,{variant:"text",color:"primary","aria-label":"text primary button group",children:Object(c.jsx)(O.a,{"data-test":"btn_delete_"+t,id:"_stuDeleteBtn"+t,onClick:function(){return t=e.id,void(window.confirm("Are you sure you wish to delete ?")&&i(be.deleteStudent(t)));var t},children:"Delete"},e.id)})})]},e.name)}))})]})})})]})]})})},Le=function(e){var t=e.match.path;return Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{path:"".concat(t,"/add"),component:xe}),Object(c.jsx)(j.b,{path:"".concat(t,"/edit/:id"),component:xe}),Object(c.jsx)(j.b,{exact:!0,path:t,component:qe}),Object(c.jsx)(j.b,{path:"".concat(t,"/:id"),component:Re})]})},He=Object(b.a)((function(e){return{table:{minWidth:650},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}})),Ue=function(e){var t=e.match.path,n=He(),r=Object(H.b)(),i=[];i=Object(H.c)((function(e){var t,n;return null!==(t=null===(n=e.teacher)||void 0===n?void 0:n.teachers)&&void 0!==t?t:[]})),Object(a.useEffect)((function(){return r(Ae())}),[]);return Object(c.jsx)(_.a,{maxWidth:!1,className:n.container,children:Object(c.jsxs)(C.a,{container:!0,spacing:3,children:[Object(c.jsx)(C.a,{item:!0,md:12,children:Object(c.jsx)(C.a,{item:!0,children:Object(c.jsx)(O.a,{color:"primary",children:Object(c.jsx)(We.b,{to:"".concat(t,"/add"),children:"Add Teacher"})})})}),Object(c.jsx)(C.a,{item:!0,xs:12,children:Object(c.jsx)(fe.a,{component:d.a,children:Object(c.jsxs)(fe.a,{className:n.table,"aria-label":"simple table",children:[Object(c.jsx)(Ne.a,{children:Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{children:"Teacher Name"}),Object(c.jsx)(Se.a,{align:"center",children:"Action"})]})}),Object(c.jsx)(ve.a,{children:i.map((function(e){return Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{component:"th",scope:"row",children:Object(c.jsx)(A.a,{className:n.root,children:Object(c.jsx)(We.b,{to:"/teacher/".concat(e.id),children:e.name})})}),Object(c.jsx)(Se.a,{align:"right",children:Object(c.jsx)(_e.a,{variant:"text",color:"primary","aria-label":"text primary button group",children:Object(c.jsx)(O.a,{onClick:function(){return t=e.id,void(window.confirm("Are you sure you wish to delete ?")&&r(we(+t)));var t},children:"Delete"})})})]},e.name)}))})]})})})]})})},Ge=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Je=function(e){var t=e.history,n=Ge(),a=Object(H.b)(),r=Object(H.c)((function(e){return e.teacher.teachers}));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(C.a,{container:!0,children:Object(c.jsx)(C.a,{item:!0,children:Object(c.jsxs)(_.a,{component:"main",maxWidth:"xs",children:[Object(c.jsx)(W.a,{}),Object(c.jsxs)("div",{className:n.paper,children:[Object(c.jsx)(I.a,{className:n.avatar,children:Object(c.jsx)(J.a,{})}),Object(c.jsx)(A.a,{component:"h1",variant:"h5",children:"Add Teacher"}),Object(c.jsx)(L.a,{initialValues:{name:""},onSubmit:function(e,n){(0,n.setSubmitting)(!0),function(e){var n={id:0,name:e,subject:[]};r&&r.length&&(n.id=r[r.length-1].id+1),a(ke(n)),t.push("/teacher")}(e.name),console.log(e)},validationSchema:U.a().shape({name:U.b().required("Required")}),children:function(e){var a=e.values,r=e.touched,i=e.errors,s=e.handleChange,d=e.handleBlur,o=e.handleSubmit;return Object(c.jsxs)("form",{className:n.form,noValidate:!0,onSubmit:o,children:[Object(c.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"Name",value:a.name,onChange:s,onBlur:d,helperText:i.name&&r.name&&i.name,autoFocus:!0}),Object(c.jsx)(O.a,{style:{marginRight:"10px"},type:"button",variant:"contained",color:"primary",className:n.submit,onClick:function(){return t.push("/teacher")},children:"Cancel"}),Object(c.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",className:n.submit,children:"Save"})]})}})]})]})})})})},Me=n(203),Ve=n(218),ze=n(212),Pe=Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),Ke=function(e){var t=e.teacher,n=e.students,r=e.subjects,i=Pe(),s=Object(H.b)(),o=Object(a.useState)([]),j=Object(u.a)(o,2),l=j[0],b=j[1],h=function(e){var t=r.find((function(t){return t.id==e}));return t?t.name:"No Subject Found"},m=function(e){var t=n.filter((function(t){return t.subject.find((function(t){return t===e}))}));return t?t.map((function(e,t){return Object(c.jsx)(A.a,{children:Object(c.jsx)(We.b,{to:"/student/".concat(e.id),children:e.name})},t)})):"No student found"},x=function(){var e;null===(e=!(null===t||void 0===t?void 0:t.subject))||void 0===e||e?b([]):b(r.filter((function(e){return!t.subject.includes(e.id)})))};return Object(a.useEffect)((function(){x()}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(_.a,{maxWidth:!1,children:[Object(c.jsxs)(C.a,{container:!0,spacing:3,children:[Object(c.jsx)(C.a,{item:!0,xs:12,children:Object(c.jsx)(A.a,{variant:"h4",gutterBottom:!0,children:"Teacher Detail"})}),Object(c.jsx)(C.a,{item:!0,xs:12,children:Object(c.jsx)(fe.a,{component:d.a,children:Object(c.jsx)(ge.a,{"aria-label":"simple table",children:Object(c.jsxs)(ve.a,{children:[Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{component:"th",scope:"row",children:"Name"}),Object(c.jsx)(Se.a,{align:"left",children:t.name})]}),Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{component:"th",scope:"row",children:"Student Info"}),Object(c.jsx)(Se.a,{children:Object(c.jsx)(fe.a,{component:d.a,children:Object(c.jsxs)(ge.a,{children:[Object(c.jsx)(Ne.a,{children:Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{children:"Subject"}),Object(c.jsx)(Se.a,{children:"Students"})]})}),Object(c.jsx)(ve.a,{children:t.subject.map((function(e,t){return Object(c.jsxs)(ye.a,{children:[Object(c.jsx)(Se.a,{children:h(e)}),Object(c.jsx)(Se.a,{children:m(e)})]},t)}))})]})})})]})]})})})})]}),Object(c.jsx)(C.a,{container:!0,spacing:1,children:Object(c.jsxs)(_.a,{component:"main",maxWidth:"xs",children:[Object(c.jsx)(C.a,{item:!0,xs:12,children:Object(c.jsx)(A.a,{variant:"h4",gutterBottom:!0,children:"Add subject"})}),Object(c.jsx)(C.a,{item:!0,xs:12,children:l&&l.length?Object(c.jsx)(L.a,{initialValues:{subject:""},onSubmit:function(e,n){var c=n.setSubmitting,a=n.resetForm;c(!0),s(Ee({teacherId:t.id,subjectId:+e.subject})),x(),a({values:""})},validationSchema:U.a().shape({subject:U.b().required("Required")}),children:function(e){var t=e.values,n=e.handleChange,a=e.handleSubmit,r=e.handleReset;return Object(c.jsxs)("form",{onSubmit:a,children:[Object(c.jsxs)(Me.a,{className:i.formControl,children:[Object(c.jsx)(Ve.a,{htmlFor:"subject-native-simple",children:"Subject"}),Object(c.jsxs)(ze.a,{native:!0,name:"subject",value:t.subject,onChange:n,children:[Object(c.jsx)("option",{"aria-label":"None",value:""}),l.map((function(e,t){return Object(c.jsx)("option",{value:e.id,children:e.name},t)}))]})]}),Object(c.jsx)("br",{}),Object(c.jsx)(O.a,{type:"button",className:"outline",onClick:r,children:"Reset"}),Object(c.jsx)(O.a,{type:"submit",children:"Submit"})]})}}):Object(c.jsx)("p",{children:"No subject found"})})]})})]})})},Qe=function(){var e,t,n,r=Object(j.i)().id,i=Object(H.b)();e=Object(H.c)((function(e){var t,n;if(null===(t=!(null===(n=e.teacher)||void 0===n?void 0:n.teachers))||void 0===t||t)return null;var c=e.teacher.teachers.find((function(e){return e.id==r}));return c||null})),t=Object(H.c)((function(e){var t,n;return null!==(t=null===(n=e.student)||void 0===n?void 0:n.students)&&void 0!==t?t:[]})),n=Object(H.c)((function(e){var t,n;return null!==(t=null===(n=e.subject)||void 0===n?void 0:n.subjects)&&void 0!==t?t:[]}));return Object(a.useEffect)((function(){return i(Ae()),i(be.getAllStudent()),void i(me.getAllSubject())}),[]),Object(c.jsx)(c.Fragment,{children:e?Object(c.jsx)(Ke,{teacher:e,students:t,subjects:n}):Object(c.jsx)("p",{children:"Teacher not found"})})},Xe=function(e){var t=e.match.path;return Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{path:"".concat(t,"/add"),component:Je}),Object(c.jsx)(j.b,{path:"".concat(t,"/edit/:id"),component:Je}),Object(c.jsx)(j.b,{exact:!0,path:t,component:Ue}),Object(c.jsx)(j.b,{path:"".concat(t,"/:id"),component:Qe})]})};var Ye=function(){var e=Object(j.h)().pathname;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(T,{}),Object(c.jsx)(d.a,{elevation:3,children:Object(c.jsx)(o.a,{m:2,children:Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.a,{from:"/:url*(/+)",to:e.slice(0,-1)}),Object(c.jsx)(j.b,{exact:!0,path:"/",component:D}),Object(c.jsx)(j.b,{path:"/student",component:Le}),Object(c.jsx)(j.b,{path:"/teacher",component:Xe}),Object(c.jsx)(j.a,{from:"*",to:"/"})]})})}),Object(c.jsx)(l,{})]})};s.a.render(Object(c.jsx)(We.a,{children:Object(c.jsx)(H.a,{store:ue,children:Object(c.jsx)(Ye,{})})}),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.b4349656.chunk.js.map