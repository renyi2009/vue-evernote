webpackJsonp([1],{"+cR0":function(t,e){},"2uR/":function(t,e){},"8AbN":function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"https://note-server.hunger-valley.com"}},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"avatar"}},[e("span",{attrs:{title:this.user.username}},[this._v(this._s(this.slug))])])},staticRenderFns:[]};var i=s("VU/8")({name:"Avatar",data:function(){return{user:{username:"person1"},slug:"P"}}},o,!1,function(t){s("gqVR")},"data-v-67a967f2",null).exports,r=s("//Fk"),a=s.n(r),l=s("mtWM"),u=s.n(l),c=s("Jdfc"),d=s.n(c);function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(n,o){var i={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?i.params=s:i.data=s,console.log("option:",i),u()(i).then(function(t){200===t.status?n(t.data):o(t.data)}).catch(function(t){o({msg:"网络异常"})})})}console.log(d.a),u.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",u.a.defaults.baseURL=d.a.baseURL,u.a.defaults.withCredentials=!0;var g="auth/register",v="auth/login",p="auth/logout",m="auth",f=function(t){var e=t.username,s=t.password;return h(g,"POST",{username:e,password:s})},w=function(t){var e=t.username,s=t.password;return h(v,"POST",{username:e,password:s})},_=function(){return h(p)},k=function(){return h(m)},R={name:"Sidebar",components:{Avatar:i},methods:{onLogout:function(){_().then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("Avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note/1",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash/2",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout",on:{click:this.onLogout}},[e("i",{staticClass:"iconfont icon-logout"})])],1)},staticRenderFns:[]};var C={name:"App",components:{Sidebar:s("VU/8")(R,b,!1,function(t){s("2uR/")},null,null).exports}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var L=s("VU/8")(C,E,!1,function(t){s("YX6j")},null,null).exports,x=s("/ocq");k().then(function(t){console.log(t)});var y={data:function(){return{isShowLogin:!0,isShowRegister:!1,login:{username:"",password:"",notice:"输入用户名和密码",isError:!1},register:{username:"",password:"",notice:"输入用户名和密码",isError:!1}}},methods:{showLogin:function(){this.isShowLogin=!0,this.isShowRegister=!1},showRegister:function(){this.isShowLogin=!1,this.isShowRegister=!0},onRegister:function(){return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)?/^.{6,16}$/.test(this.register.password)?(this.register.isError=!1,this.register.notice="",console.log("start register..., username: "+this.register.username+" , password: "+this.register.password),void f({username:this.login.username,password:this.login.password}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})):(this.register.isError=!0,void(this.register.notice="密码长度为6~16个字符")):(this.register.isError=!0,void(this.register.notice="用户名3~15个字符，仅限于字母数字下划线中文"))},onLogin:function(){return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)?/^.{6,16}$/.test(this.login.password)?(this.login.isError=!1,this.login.notice="",console.log("start login..., username: "+this.login.username+" , password: "+this.login.password),void w({username:this.login.username,password:this.login.password}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})):(this.login.isError=!0,void(this.login.notice="密码长度为6~16个字符")):(this.login.isError=!0,void(this.login.notice="用户名3~15个字符，仅限于字母数字下划线中文"))}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"main"}),t._v(" "),s("div",{staticClass:"form"},[s("h3",{on:{click:t.showRegister}},[t._v("创建用户")]),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"reigster",class:{show:t.isShowRegister}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.register.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onRegister(e)},input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}}),t._v(" "),s("p",{class:{error:t.register.isError}},[t._v(t._s(t.register.notice))]),t._v(" "),s("div",{staticClass:"button",on:{click:t.onRegister}},[t._v("创建账号")])])]),t._v(" "),s("h3",{on:{click:t.showLogin}},[t._v("登录")]),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"login",class:{show:t.isShowLogin}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"输入用户名"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.login.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onLogin(e)},input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),s("div",{staticClass:"button",on:{click:t.onLogin}},[t._v("登录")])])])],1)])])])])},staticRenderFns:[]};var N=s("VU/8")(y,$,!1,function(t){s("z98N")},"data-v-1b1dba87",null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"notebook-list"}},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/note/1"}},[this._v("笔记本1")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/note/2"}},[this._v("笔记本2")])],1)])])},staticRenderFns:[]};var U=s("VU/8")({name:"NotebookList",data:function(){return{msg:"笔记本列表"}}},S,!1,function(t){s("+cR0")},"data-v-4c668ed8",null).exports,V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"note-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var A=s("VU/8")({name:"NoteDetail",data:function(){return{msg:"笔记详情页"}}},V,!1,function(t){s("8AbN")},"data-v-c8b882d2",null).exports,F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"trash-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var P=s("VU/8")({name:"TrashDetail",data:function(){return{msg:"回收站笔记详情页"}}},F,!1,function(t){s("fJ/2")},"data-v-744535b4",null).exports;n.a.use(x.a);var T=new x.a({routes:[{path:"/login",name:"Login",component:N},{path:"/notebooks",name:"NotebookList",component:U},{path:"/note/:noteId",name:"NoteDetail",component:A},{path:"/trash/:noteId",name:"TrashDetail",component:P}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:T,components:{App:L},template:"<App/>"})},YX6j:function(t,e){},"fJ/2":function(t,e){},gqVR:function(t,e){},z98N:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.55176841343bad336e23.js.map