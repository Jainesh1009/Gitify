(this.webpackJsonpreactproject=this.webpackJsonpreactproject||[]).push([[0],{49:function(e,t,a){},51:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(19),r=a.n(c),i=(a(49),a(10)),o=a.n(i),l=a(13),h=a(5),u=a(6),d=a(8),j=a(7),m=(a(51),a(22)),b=a(11),p=a(1),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).Logout=function(){s.props.Logout()},s.GoHome=function(){s.props.history.push({pathname:"/"})},s.state={isAuthentication:!1},s.state={},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.store.subscribe((function(){t.setState({isAuthentication:t.props.store.getState().Users.isAuthenticated})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsxs)("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm",children:[Object(p.jsx)("h5",{className:"my-0 mr-md-auto font-weight-normal",children:"React With Node"}),Object(p.jsxs)("nav",{className:"my-2 my-md-0 mr-md-3",children:[Object(p.jsxs)(m.b,{to:"/",className:"p-2 text-dark",children:[Object(p.jsx)("i",{className:"p-2 text-dark"})," Home"]}),Object(p.jsxs)(m.b,{to:"/Favorite",className:"p-2 text-dark",children:[Object(p.jsx)("i",{className:"fas fa-heart"})," Favorites"]})]}),this.state.isAuthentication?Object(p.jsxs)(m.b,{to:"/Profile",className:"p-2 text-dark",children:[Object(p.jsx)("i",{className:"fas fa-user",children:" "})," Profile"]}):"",this.state.isAuthentication?Object(p.jsx)("button",{onClick:this.Logout,className:"btn btn-outline-danger",children:"Logout"}):Object(p.jsx)(m.b,{to:"/LoginReigester",className:"p-2 text-dark",children:Object(p.jsx)("button",{className:"btn btn-outline-primary",href:"#",children:"Sign up"})})]})})}}]),a}(s.Component),f=Object(b.f)(O),v=a(15),g=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState((function(){return{checked:!s.state.checked}})),console.log(s.state.checked,"checked")},s.Search=function(e){if(console.log(s.state.Data),""===s.state.Data)return alert("Miss Type Search faild can Not be empty ..");s.state.checked?s.props.history.push({pathname:"/Specific/".concat(s.state.Data)}):s.props.history.push({pathname:"/Data/".concat(s.state.Data)})},s.state={Data:"",checked:!1},console.log(e),s}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("section",{className:"mainPage",children:Object(p.jsx)("center",{children:Object(p.jsx)("div",{className:"main",id:"main",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-lg-12 col-md-12",children:[Object(p.jsxs)("div",{className:"main__text-container",children:[Object(p.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",className:"GitLogo",alt:""}),Object(p.jsx)("h1",{className:"main__title",children:"GitFetch - Profile Finder for GitHub"}),Object(p.jsx)("p",{className:"main__subtitle",children:"Check out the repos, followers and more, just by entering a username!"})]}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"check",children:[Object(p.jsx)("input",{className:"",type:"checkbox",name:"checked",onChange:this.handleChange,value:this.state.checked}),"Go Direct to The user Profile"]}),Object(p.jsx)("input",{type:"text",id:"search",name:"Data",className:"btn btn-outline-primary",placeholder:this.state.checked?"Go Directely to user Profile":"Enter a username...",value:this.state.Data,onChange:function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))}}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{onClick:this.Search,className:"btn btn-outline-primary",children:"Search"})})]})]})})})})})})})}}]),a}(s.Component),x=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={user:[]},console.log("username",e.match.params.id),function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/search/users?q=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",{data:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e.match.params.id).then((function(e){s.setState({user:e.data.items}),console.log("the data",e.data.items)})),s}return Object(u.a)(a,[{key:"GoFetchOneUser",value:function(e){this.props.history.push({pathname:"/Specific/".concat(e)})}},{key:"render",value:function(){var e=this;return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("main",{role:"main",children:Object(p.jsx)("div",{className:"album py-5 bg-light",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:this.state.user.map((function(t){return Object(p.jsx)("div",{onClick:function(){e.GoFetchOneUser(t.login)},className:"col-md-3 cp",children:Object(p.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(p.jsx)("img",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",src:t.avatar_url,alt:""}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("p",{className:"card-text text-center",children:["Name : ",t.login]})})]})},t.id)}))})})})})})}}]),a}(s.Component),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={repos:[]},function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/repos"));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",{data:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e.user).then((function(e){if(e.data.length>0&!e.data.message)for(var t=[],a=0;a<5;a++)t.push(e.data[a]),4===a&&s.setState({repos:t})})),s}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"here Last 5 repo"}),Object(p.jsx)("div",{className:"lastfiveRepo",children:this.state.repos.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:e.html_url,children:e.name},e.id)},e.id)}))})]})})}}]),a}(s.Component),y=a(21),F="GET_FAVORITES",k="Add_TO_FAVORITES",w="DEL_FROM_FAVORITES",S="RE_USER_STATE";function C(){return{type:F}}function _(e){return{type:k,payload:e}}function D(e){return{type:w,payload:e}}function R(e){return{type:S,payload:e}}var E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).AddToFave=function(){s.props.addToFavorit(s.state.user.login),s.setState({is_Favorite:!0})},s.RemoveFromFave=function(){s.props.DelFromFavorit(s.state.user.login),s.setState({is_Favorite:!1})},s.state={user:[],is_Favorite:!1},s.props.GETFavoriteState(),function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",{data:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e.match.params.login).then((function(e){e.data.message||s.setState({user:e.data}),console.log(e)})),s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(console.log("spaecific",this.props.Favorite.Favoritedata),t=this.props.Favorite.Favoritedata,a=this.props.match.params.login,s=0;s<t.length;s++)t[s]===a&&this.setState({is_Favorite:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Data",value:function(){return 0===this.state.user.length?Object(p.jsx)("i",{children:"there is no user found with this username"}):Object(p.jsx)("center",{children:Object(p.jsx)("section",{className:"Specific",children:Object(p.jsx)("div",{className:"main",id:"main",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(p.jsxs)("div",{className:"SUsersData",children:[!1===this.state.is_Favorite?Object(p.jsx)("i",{onClick:this.AddToFave,className:"fas fa-heart  NotFave"}):Object(p.jsx)("i",{onClick:this.RemoveFromFave,className:"fas fa-heart  Fave "}),Object(p.jsxs)("h4",{children:["Name : ",Object(p.jsx)("i",{className:"bl",children:this.state.user.name})]}),Object(p.jsx)("img",{src:this.state.user.avatar_url,alt:""}),Object(p.jsxs)("h4",{children:["followers : ",Object(p.jsx)("i",{className:"bl",children:this.state.user.followers})]}),Object(p.jsxs)("h4",{children:["location : ",Object(p.jsx)("i",{className:"bl",children:this.state.user.location})]}),Object(p.jsx)(N,{user:this.props.match.params.login})]})})})})})})})}},{key:"render",value:function(){return Object(p.jsx)(n.a.Fragment,{children:this.Data()})}}]),a}(s.Component),U=Object(y.b)((function(e){return{Favorite:e.Favorite}}),{addToFavorit:_,DelFromFavorit:D,GETFavoriteState:C})(E),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={users:[]},s.props.GETFavoriteState(),console.log("store2",e),s.data(),s}return Object(u.a)(a,[{key:"data",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,s,n,c=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("store2",this.props),e.next=3,this.props.Favorite.Favoritedata;case 3:for(t=e.sent,a=[],s=0;s<t.length;s++)n=t[s],function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",{data:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(n).then((function(e){e.data.message||(e.data.is_User_in_Fafovirte=!0,a.push(e.data),c.setState({users:a}))}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"RemoveFromFave",value:function(e){console.log("user",e),this.props.DelFromFavorit(e);for(var t=this.state.users,a=[],s=0;s<t.length;s++){var n=t[s];n.login===e&&(n.is_User_in_Fafovirte=!1),a.push(n)}this.setState({users:a})}},{key:"ReAddToFave",value:function(e){console.log("user",e),this.props.addToFavorit(e);for(var t=this.state.users,a=[],s=0;s<t.length;s++){var n=t[s];n.login===e&&(n.is_User_in_Fafovirte=!0),a.push(n)}this.setState({users:a})}},{key:"GoFetchOneUser",value:function(e){console.log("worked",e),this.props.history.push({pathname:"/Specific/".concat(e)})}},{key:"render",value:function(){var e=this;return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("main",{role:"main",children:Object(p.jsx)("div",{className:"album py-5 bg-light",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:this.state.users.map((function(t){return Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(p.jsx)("img",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",src:t.avatar_url,alt:""}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsxs)("p",{className:"card-text text-center",children:["Name :  ",t.login]}),Object(p.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(p.jsx)("div",{className:"btn-group",children:Object(p.jsx)("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){e.GoFetchOneUser(t.login)},children:"View"},t.id)}),t.is_User_in_Fafovirte?Object(p.jsx)("button",{onClick:function(){e.RemoveFromFave(t.login)},type:"button",className:"btn btn-sm",children:Object(p.jsx)("i",{className:"fas fa-heart Fave"})}):Object(p.jsx)("button",{onClick:function(){e.ReAddToFave(t.login)},type:"button",className:"btn btn-sm",children:Object(p.jsx)("i",{className:"fas fa-heart NotFave"})})]})]})]},t.id)},t.id)}))})})})})})}}]),a}(s.Component),A=Object(y.b)((function(e){return{Favorite:e.Favorite}}),{addToFavorit:_,DelFromFavorit:D,GETFavoriteState:C})(T),L=a(23),P=a.n(L),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).onChange=function(e){s.setState(Object(v.a)({},e.target.name,e.target.value))},s.Login=function(e){e.preventDefault(),s.setState(Object(v.a)({},e.target.name,e.target.value));var t={password:s.state.password,email:s.state.email};P.a.post("".concat(s.props.URL_backend,"/Login"),{Data:t}).then((function(e){if(console.log(e),e.data&&(console.log(e.data),localStorage.setItem("token",e.data.token),s.props.ReUserState(!0),s.props.props.history.push("/Profile")),!e){var t=e.data;s.setState({erros:t})}})).catch((function(e){return s.setState({erros:"username or password is undefined"})}))},s.state={email:"",password:"",erros:""},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(n.a.Fragment,{children:[this.state.erros?Object(p.jsx)("i",{className:"alert alert-danger",role:"alert",children:this.state.erros}):"",Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{className:"form-signin",children:[Object(p.jsx)("h4",{className:"h3 mb-3 font-weight-normal grey",children:"Please sign in"}),Object(p.jsx)("input",{value:this.state.email,onChange:this.onChange,type:"email",name:"email",className:"form-control",placeholder:"Email address"}),Object(p.jsx)("input",{value:this.state.password,onChange:this.onChange,type:"password",name:"password",className:"form-control",placeholder:"Password"}),Object(p.jsx)("button",{onClick:this.Login,className:"btn btn-md btn-primary btn-block",type:"submit",children:"Sign in"})]})]})}}]),a}(s.Component),G=Object(y.b)((function(e){return{Users:e.Users}}),{ReUserState:R})(I),M=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).onChange=function(e){s.setState(Object(v.a)({},e.target.name,e.target.value))},s.Reigester=function(e){e.preventDefault(),s.setState(Object(v.a)({},e.target.name,e.target.value));var t={name:s.state.name,password:s.state.password,email:s.state.email};P.a.post("".concat(s.props.URL_backend,"/Register"),{Data:t}).then((function(e){console.log(e),console.log(e.data.message);var t=e.data.message;if(s.setState({erros:t}),!t){alert("successfully registered");var a=s.state.email,n=s.state.password;s.setState({email:a,password:n})}})).catch((function(e){console.log(e)}))},s.state={name:"",email:"",password:"",erros:""},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(n.a.Fragment,{children:[this.state.erros?Object(p.jsx)("i",{className:"alert alert-danger",role:"alert",children:this.state.erros}):"",Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{className:"form-Reigester",children:[Object(p.jsx)("h4",{className:"h3 mb-3 font-weight-normal grey",children:"Reigester"}),Object(p.jsx)("input",{value:this.state.name,onChange:this.onChange,name:"name",type:"text",className:"form-control",placeholder:"Name"}),Object(p.jsx)("input",{value:this.state.email,onChange:this.onChange,type:"email",name:"email",className:"form-control",placeholder:"Email address"}),Object(p.jsx)("input",{value:this.state.password,onChange:this.onChange,type:"password",name:"password",className:"form-control",placeholder:"Password"}),Object(p.jsx)("button",{onClick:this.Reigester,className:"btn btn-md btn-success btn-block",type:"submit",children:"Reigester"})]})]})}}]),a}(s.Component),V="https://react-giti.herokuapp.com/api/users",H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("center",{children:Object(p.jsx)("section",{className:"Specific",children:Object(p.jsx)("div",{className:"main",id:"main",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-lg-12 col-md-12",children:[Object(p.jsx)(G,{props:this.props,URL_backend:V}),Object(p.jsx)(M,{props:this.props,URL_backend:V})]})})})})})})})}}]),a}(s.Component),J=a(25),W=a(44),B=["component","Auth","Logout"];var X=function(e){var t=e.component,a=e.Auth,s=e.Logout,n=Object(W.a)(e,B);return Object(p.jsx)(b.b,Object(J.a)(Object(J.a)({},n),{},{render:function(e){return a?Object(p.jsx)(t,Object(J.a)(Object(J.a)({},e),{},{Logout:s})):Object(p.jsx)(b.a,{to:"/LoginReigester"})}}))},Y=a(27),q={Favoritedata:[]};var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var a=JSON.parse(localStorage.getItem("Fav"));return a&&(e.Favoritedata=a),e;case k:for(var s=!1,n=t.payload,c=0;c<e.Favoritedata.length;c++){var r=e.Favoritedata[c];r===n&&(s=!0)}if(!1===s){var i=e.Favoritedata;i.push(t.payload),e.Favoritedata=i,localStorage.setItem("Fav",JSON.stringify(i))}else console.log("false");return e;case w:var o=t.payload,l=e.Favoritedata;return l=l.filter((function(e){return e!==o})),e.Favoritedata=l,localStorage.setItem("Fav",JSON.stringify(l)),e;default:return e}},K={isAuthenticated:Boolean};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return console.log("pay",t.payload),e.isAuthenticated=t.payload,e;default:return e}},Z=Object(Y.a)({Favorite:z,Users:Q}),$=a(83),ee=a(84),te=a(85),ae=a(33),se=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={inPutData:""},e}return Object(u.a)(a,[{key:"handleOnClick",value:function(){var e=this,t=this.props.proceed;return function(){t({input:e.state.inPutData})}}},{key:"render",value:function(){var e=this,t=this.props,a=t.show,s=t.dismiss,n=t.cancel,c=t.message;return Object(p.jsx)("div",{className:"static-modal",children:Object(p.jsxs)($.a,{show:a,onHide:s,children:[Object(p.jsx)($.a.Header,{children:Object(p.jsx)($.a.Title,{})}),Object(p.jsx)($.a.Body,{children:c}),Object(p.jsxs)($.a.Footer,{children:[Object(p.jsx)(ee.a,{type:"password",value:this.state.inPutData,onChange:function(t){e.setState({inPutData:t.target.value})}}),Object(p.jsx)(te.a,{onClick:n,children:"Cancel"}),Object(p.jsx)(te.a,{className:"button-l",onClick:this.handleOnClick(),children:"Ok"})]})]})})}}]),a}(n.a.Component),ne=Object(ae.createConfirmation)(Object(ae.confirmable)(se)),ce="https://react-giti.herokuapp.com/api/users",re=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).mounted=!1,s.onChange=function(e){s.setState(Object(v.a)({},e.target.name,e.target.value))},s._handleImageChange=function(e){e.preventDefault();var t=new FileReader,a=e.target.files[0];t.onloadend=function(){s.setState({file:a,pic:t.result})},t.readAsDataURL(a)},s.Pic=function(){return"undefined"!==s.state.pic&&void 0!==s.state.pic&&null!==s.state.pic&&""!==s.state.pic},s.EditUserData=function(){console.log("edit"),s.setState({IsEdit:!0})},s.SaveUserData=function(e){console.log("save"),s.setState(Object(v.a)({},e.target.name,e.target.value)),s.setState({IsEdit:!1}),console.log(s.state);var t=s.state.file,a=new FormData;a.append("name",s.state.name),a.append("address",s.state.address),a.append("pic",s.state.pic),a.append("image",t),console.log("ourdata",a),P.a.put("".concat(ce,"/edit/").concat(s.state.id),a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},s.handleOnClickRemove=function(){ne({Password:"Enter Your Password To Complete The Opration"}).then((function(e){var t=e.input;s.setState({Password:t}),s.RequestToRemove()}),(function(){s.setState({Password:"canceled!"})}))},s.RequestToRemove=function(){var e=s.state.Password;P.a.delete("".concat(ce,"/delete/").concat(s.state.id,"/").concat(e)).then((function(e){console.log(e),console.log(e.data.message),s.props.Logout()})).catch((function(e){s.setWorngpassword(e)}))},s.setWorngpassword=function(e){console.log(e),s.setState({erros:"incorrect password please try again"})},s.state={id:"",name:"",address:"",email:"",pic:"",MailDomail:"",IsEdit:!1,file:"",Password:"",erros:""},s}return Object(u.a)(a,[{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentWillMount",value:function(){var e=this;this.mounted=!0;var t=localStorage.getItem("token");t&&P.a.get("".concat(ce,"/GetUserData"),{headers:{Authorization:t}}).then((function(t){if(console.log("rrrss",t.data.result[0]),e.mounted){var a=t.data.result[0],s="http://www."+a.email.replace(/.*@/,"").split(".")[0]+".com";e.setState({id:a.id,name:a.name,address:a.address,email:a.email,pic:a.pic,MailDomail:s})}}))}},{key:"render",value:function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsxs)("center",{children:[this.state.erros?Object(p.jsx)("i",{className:"alert alert-danger",role:"alert",children:this.state.erros}):"",Object(p.jsx)("hr",{}),Object(p.jsx)("section",{className:"Specific",children:Object(p.jsx)("div",{className:"main",id:"main",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-lg-12 col-md-12",children:[this.state.IsEdit?Object(p.jsxs)("div",{className:"SUsersData",children:[Object(p.jsxs)("button",{className:"edit btn btn-danger",children:[Object(p.jsx)("i",{className:"fas fa-edit"})," Edit"]}),Object(p.jsx)("h4",{children:Object(p.jsx)("i",{className:"bl",children:"Your Profile Data"})}),this.Pic()?Object(p.jsx)("img",{src:this.state.pic,alt:""}):Object(p.jsx)("img",{src:"https://university.cpanel.net/assets/img/user-profile-picture-default.png",alt:""}),Object(p.jsx)("div",{className:"clear"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"file-upload",className:"custom-file-upload",children:" Upload "}),Object(p.jsx)("input",{id:"file-upload",type:"file",onChange:this._handleImageChange})]}),Object(p.jsx)("input",{type:"text",name:"name",className:"form-control m-2",placeholder:"name",value:this.state.name?this.state.name:"",onChange:this.onChange}),Object(p.jsx)("input",{type:"text",name:"email",className:"form-control m-2 bl",placeholder:"email",value:this.state.email,onChange:this.onChange,disabled:!0}),Object(p.jsx)("input",{type:"text",name:"address",className:"form-control m-2 ",placeholder:"address",value:this.state.address?this.state.address:"",onChange:this.onChange}),Object(p.jsxs)("button",{onClick:this.SaveUserData,className:"edit btn btn-primary",children:[Object(p.jsx)("i",{className:"fas fa-edit"})," Save"]})]}):Object(p.jsxs)("div",{className:"SUsersData",children:[Object(p.jsxs)("button",{onClick:this.EditUserData,className:"edit btn btn-danger",children:[Object(p.jsx)("i",{className:"fas fa-edit"})," Edit"]}),Object(p.jsx)("h4",{children:Object(p.jsx)("i",{className:"bl",children:"Your Profile Data"})}),this.Pic()?Object(p.jsx)("img",{src:this.state.pic,alt:""}):Object(p.jsx)("img",{src:"https://university.cpanel.net/assets/img/user-profile-picture-default.png",alt:""}),Object(p.jsxs)("h4",{children:[" Name  : ",Object(p.jsxs)("i",{className:"bl",children:[this.state.name?this.state.name:""," "]})]}),Object(p.jsxs)("h4",{children:[" Email  : ",Object(p.jsxs)("i",{className:"bl",children:[this.state.email," "]})]}),Object(p.jsxs)("h4",{children:[" Address  : ",Object(p.jsxs)("i",{className:"bl",children:[this.state.address?this.state.address:""," "]})]})]}),Object(p.jsx)("div",{className:"REMOVEU",children:Object(p.jsx)("button",{className:"btn btn-danger m-2",onClick:this.handleOnClickRemove,children:"Delete Your Account"})})]})})})})})]})})}}]),a}(s.Component),ie=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).Logout=function(){localStorage.removeItem("Token"),s.store.dispatch(R(!1)),s.setState({isAuthentication:!1})},s.state={isAuthentication:!1},s.store=Object(Y.b)(Z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.getItem("token")?(this.store.dispatch(R(!0)),this.setState({isAuthentication:!0})):(this.store.dispatch(R(!1)),this.setState({isAuthentication:!1})),e.next=3,this.store.subscribe((function(){t.setState({isAuthentication:t.store.getState().Users.isAuthenticated})}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)(y.a,{store:this.store,children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)(f,{Logout:this.Logout,store:this.store}),Object(p.jsx)(b.b,{exact:!0,path:"/",component:g}),Object(p.jsx)(b.b,{exact:!0,path:"/Data/:id",component:x}),Object(p.jsx)(b.b,{exact:!0,path:"/Specific/:login",component:U}),Object(p.jsx)(b.b,{exact:!0,path:"/Favorite",component:A}),Object(p.jsx)(b.b,{exact:!0,path:"/LoginReigester",component:H}),Object(p.jsx)(X,{exact:!0,path:"/Profile",Logout:this.Logout,Auth:this.state.isAuthentication,component:re})]})})})}}]),a}(s.Component),oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[80,1,2]]]);
//# sourceMappingURL=main.5dc2acdf.chunk.js.map