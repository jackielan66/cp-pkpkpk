(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"B+Dq":function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("1eg1");var r=l(a("P1QG"));a("WyXx");var o=l(a("ELQk"));a("hCtM");var u=l(a("HfpZ"));a("w+sc");var i=l(a("IwyX")),s=l(a("dnxz")),c=l(a("+S5U")),d=l(a("Sx57")),f=l(a("4zp0")),p=l(a("iVWQ")),m=l(a("lF+r")),g=l(a("PApH"));a("guZL");var h=l(a("y2Hr")),v=n(a("6cB7")),b=l(a("k8Vd")),y=l(a("JAxp")),C=l(a("dQek")),E=l(a("s+z6")),x=h.default.Item,w=function(e){function t(e){var a;return(0,d.default)(this,t),a=(0,p.default)(this,(0,m.default)(t).call(this,e)),a.onGetCaptcha=function(){var e=a.props.onGetCaptcha,t=e?e():null;!1!==t&&(t instanceof Promise?t.then(a.runGetCaptchaCountDown):a.runGetCaptchaCountDown())},a.getFormItemOptions=function(e){var t=e.onChange,a=e.defaultValue,n=e.customprops,l=e.rules,r={rules:l||n.rules};return t&&(r.onChange=t),a&&(r.initialValue=a),r},a.runGetCaptchaCountDown=function(){var e=a.props.countDown,t=e||59;a.setState({count:t}),a.interval=setInterval(function(){t-=1,a.setState({count:t}),0===t&&clearInterval(a.interval)},1e3)},a.state={count:0},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateActive,a=e.name;t&&t(a)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.count,t=this.props.form.getFieldDecorator,a=this.props,n=(a.onChange,a.customprops),l=(a.defaultValue,a.rules,a.name),d=a.getCaptchaButtonText,f=a.getCaptchaSecondText,p=(a.updateActive,a.type),m=(0,c.default)(a,["onChange","customprops","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type"]),g=this.getFormItemOptions(this.props),h=m||{};if("Captcha"===p){var C=(0,b.default)(h,["onGetCaptcha","countDown"]);return v.default.createElement(x,null,v.default.createElement(r.default,{gutter:8},v.default.createElement(u.default,{span:16},t(l,g)(v.default.createElement(i.default,(0,s.default)({},n,C)))),v.default.createElement(u.default,{span:8},v.default.createElement(o.default,{disabled:e,className:y.default.getCaptcha,size:"large",onClick:this.onGetCaptcha},e?"".concat(e," ").concat(f):d))))}return v.default.createElement(x,null,t(l,g)(v.default.createElement(i.default,(0,s.default)({},n,h))))}}]),t}(v.Component);w.defaultProps={getCaptchaButtonText:"captcha",getCaptchaSecondText:"second"};var S={};Object.keys(C.default).forEach(function(e){var t=C.default[e];S[e]=function(a){return v.default.createElement(E.default.Consumer,null,function(n){return v.default.createElement(w,(0,s.default)({customprops:t.props,rules:t.rules},a,{type:e,updateActive:n.updateActive,form:n.form}))})}});var M=S;t.default=M},JAxp:function(e,t,a){e.exports={login:"antd-pro\\components\\-login\\index-login",getCaptcha:"antd-pro\\components\\-login\\index-getCaptcha",icon:"antd-pro\\components\\-login\\index-icon",other:"antd-pro\\components\\-login\\index-other",register:"antd-pro\\components\\-login\\index-register",prefixIcon:"antd-pro\\components\\-login\\index-prefixIcon",submit:"antd-pro\\components\\-login\\index-submit"}},"M+k9":function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a("dnxz")),o=l(a("Sx57")),u=l(a("4zp0")),i=l(a("iVWQ")),s=l(a("lF+r")),c=l(a("PApH"));a("lI8P");var d=l(a("6CoE")),f=n(a("6cB7")),p=l(a("s+z6")),m=d.default.TabPane,g=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),h=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,i.default)(this,(0,s.default)(t).call(this,e)),a.uniqueId=g("login-tab-"),a}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.tabUtil;e.addTab(this.uniqueId)}},{key:"render",value:function(){var e=this.props.children;return f.default.createElement(m,this.props,e)}}]),t}(f.Component),v=function(e){return f.default.createElement(p.default.Consumer,null,function(t){return f.default.createElement(h,(0,r.default)({tabUtil:t.tabUtil},e))})};v.typeName="LoginTab";var b=v;t.default=b},QBZU:function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("guZL");var r=l(a("y2Hr"));a("lI8P");var o=l(a("6CoE")),u=l(a("aG3W")),i=l(a("Sx57")),s=l(a("4zp0")),c=l(a("iVWQ")),d=l(a("lF+r")),f=l(a("PApH")),p=n(a("6cB7")),m=(l(a("T9cD")),l(a("iczh"))),g=l(a("B+Dq")),h=l(a("M+k9")),v=l(a("Yrmy")),b=l(a("JAxp")),y=l(a("s+z6")),C=function(e){function t(e){var a;return(0,i.default)(this,t),a=(0,c.default)(this,(0,d.default)(t).call(this,e)),a.onSwitch=function(e){a.setState({type:e});var t=a.props.onTabChange;t(e)},a.getContext=function(){var e=a.state.tabs,t=a.props.form;return{tabUtil:{addTab:function(t){a.setState({tabs:(0,u.default)(e).concat([t])})},removeTab:function(t){a.setState({tabs:e.filter(function(e){return e!==t})})}},form:t,updateActive:function(e){var t=a.state,n=t.type,l=t.active;l[n]?l[n].push(e):l[n]=[e],a.setState({active:l})}}},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.active,l=t.type,r=a.props,o=r.form,u=r.onSubmit,i=n[l];o.validateFields(i,{force:!0},function(e,t){u(e,t)})},a.state={type:e.defaultActiveKey,tabs:[],active:{}},a}return(0,f.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,n=this.state,l=n.type,u=n.tabs,i=[],s=[];return p.default.Children.forEach(a,function(e){e&&("LoginTab"===e.type.typeName?i.push(e):s.push(e))}),p.default.createElement(y.default.Provider,{value:this.getContext()},p.default.createElement("div",{className:(0,m.default)(t,b.default.login)},p.default.createElement(r.default,{onSubmit:this.handleSubmit},u.length?p.default.createElement(p.default.Fragment,null,p.default.createElement(o.default,{animated:!1,className:b.default.tabs,activeKey:l,onChange:this.onSwitch},i),s):a)))}}]),t}(p.Component);C.defaultProps={className:"",defaultActiveKey:"",onTabChange:function(){},onSubmit:function(){}},C.Tab=h.default,C.Submit=v.default,Object.keys(g.default).forEach(function(e){C[e]=g.default[e]});var E=r.default.create()(C);t.default=E},Y5yc:function(e,t,a){"use strict";var n=a("xK3H"),l=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ml1M");var r=n(a("y9aw"));a("fCSc");var o=n(a("tU1L"));a("dOHC");var u,i,s=n(a("sKgc")),c=n(a("SeLb")),d=n(a("Sx57")),f=n(a("4zp0")),p=n(a("iVWQ")),m=n(a("lF+r")),g=n(a("PApH")),h=l(a("6cB7")),v=a("LneV"),b=a("0iMl"),y=n(a("YTT5")),C=n(a("QBZU")),E=n(a("w2qy")),x=C.default.Tab,w=C.default.UserName,S=C.default.Password,M=C.default.Mobile,P=C.default.Captcha,T=C.default.Submit,k=(u=(0,v.connect)(function(e){var t=e.login,a=e.loading;return{login:t,submitting:a.effects["login/login"]}}),u(i=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,p.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(l))),a.state={type:"account",autoLogin:!0},a.onTabChange=function(e){a.setState({type:e})},a.onGetCaptcha=function(){return new Promise(function(e,t){a.loginForm.validateFields(["mobile"],{},function(n,l){if(n)t(n);else{var r=a.props.dispatch;r({type:"login/getCaptcha",payload:l.mobile}).then(e).catch(t)}})})},a.handleSubmit=function(e,t){var n=a.state.type;if(!e){var l=a.props.dispatch;l({type:"login/login",payload:(0,c.default)({},t,{type:n})})}},a.changeAutoLogin=function(e){a.setState({autoLogin:e.target.checked})},a.renderMessage=function(e){return h.default.createElement(s.default,{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.login,n=t.submitting,l=this.state,u=l.type,i=l.autoLogin;return h.default.createElement("div",{className:E.default.main},h.default.createElement(C.default,{defaultActiveKey:u,onTabChange:this.onTabChange,onSubmit:this.handleSubmit,ref:function(t){e.loginForm=t}},h.default.createElement(x,{key:"account",tab:(0,b.formatMessage)({id:"app.login.tab-login-credentials"})},"error"===a.status&&"account"===a.type&&!n&&this.renderMessage((0,b.formatMessage)({id:"app.login.message-invalid-credentials"})),h.default.createElement(w,{name:"userName",placeholder:"username: admin or user"}),h.default.createElement(S,{name:"password",placeholder:"password: ant.design",onPressEnter:function(){return e.loginForm.validateFields(e.handleSubmit)}})),h.default.createElement(x,{key:"mobile",tab:(0,b.formatMessage)({id:"app.login.tab-login-mobile"})},"error"===a.status&&"mobile"===a.type&&!n&&this.renderMessage((0,b.formatMessage)({id:"app.login.message-invalid-verification-code"})),h.default.createElement(M,{name:"mobile"}),h.default.createElement(P,{name:"captcha",countDown:120,onGetCaptcha:this.onGetCaptcha,getCaptchaButtonText:(0,b.formatMessage)({id:"form.captcha"}),getCaptchaSecondText:(0,b.formatMessage)({id:"form.captcha.second"})})),h.default.createElement("div",null,h.default.createElement(o.default,{checked:i,onChange:this.changeAutoLogin},h.default.createElement(b.FormattedMessage,{id:"app.login.remember-me"})),h.default.createElement("a",{style:{float:"right"},href:""},h.default.createElement(b.FormattedMessage,{id:"app.login.forgot-password"}))),h.default.createElement(T,{loading:n},h.default.createElement(b.FormattedMessage,{id:"app.login.login"})),h.default.createElement("div",{className:E.default.other},h.default.createElement(b.FormattedMessage,{id:"app.login.sign-in-with"}),h.default.createElement(r.default,{type:"alipay-circle",className:E.default.icon,theme:"outlined"}),h.default.createElement(r.default,{type:"taobao-circle",className:E.default.icon,theme:"outlined"}),h.default.createElement(r.default,{type:"weibo-circle",className:E.default.icon,theme:"outlined"}),h.default.createElement(y.default,{className:E.default.register,to:"/user/register"},h.default.createElement(b.FormattedMessage,{id:"app.login.signup"})))))}}]),t}(h.Component))||i),N=k;t.default=N},Yrmy:function(e,t,a){"use strict";var n=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("WyXx");var l=n(a("ELQk")),r=n(a("dnxz")),o=n(a("+S5U"));a("guZL");var u=n(a("y2Hr")),i=n(a("6cB7")),s=n(a("iczh")),c=n(a("JAxp")),d=u.default.Item,f=function(e){var t=e.className,a=(0,o.default)(e,["className"]),n=(0,s.default)(c.default.submit,t);return i.default.createElement(d,null,i.default.createElement(l.default,(0,r.default)({size:"large",className:n,type:"primary",htmlType:"submit"},a)))},p=f;t.default=p},dQek:function(e,t,a){"use strict";var n=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ml1M");var l=n(a("y9aw")),r=n(a("6cB7")),o=n(a("JAxp")),u={UserName:{props:{size:"large",id:"userName",prefix:r.default.createElement(l.default,{type:"user",className:o.default.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:r.default.createElement(l.default,{type:"lock",className:o.default.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:r.default.createElement(l.default,{type:"mobile",className:o.default.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:r.default.createElement(l.default,{type:"mail",className:o.default.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}};t.default=u},"s+z6":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("6cB7"),l=(0,n.createContext)(),r=l;t.default=r},w2qy:function(e,t,a){e.exports={main:"antd-pro\\pages\\-user\\-login-main",icon:"antd-pro\\pages\\-user\\-login-icon",other:"antd-pro\\pages\\-user\\-login-other",register:"antd-pro\\pages\\-user\\-login-register"}}}]);