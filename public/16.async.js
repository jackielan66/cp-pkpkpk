(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{JKFo:function(e,t,a){e.exports=a.p+"static/flumpool - OAOA (Instrumental) - instrumental.26feb74a.mp3"},"azl/":function(e,t,a){"use strict";var r=a("xK3H"),s=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("1eg1");var n=r(a("P1QG"));a("WyXx");var o=r(a("ELQk"));a("uFI8");var i=r(a("D2Nv")),l=r(a("SeLb")),u=r(a("Sx57")),c=r(a("4zp0")),d=r(a("iVWQ")),f=r(a("lF+r")),p=r(a("PApH"));a("w+sc");var g=r(a("IwyX"));a("Ouj0");var m=r(a("gB3Y"));a("guZL");var v,h,y,w=r(a("y2Hr")),b=s(a("6cB7")),k=a("LneV"),E=a("0iMl"),D=(r(a("YTT5")),r(a("cV6d")),a("dCQc"),r(a("lnIN"))),F=(w.default.Item,m.default.Option,g.default.Group,b.default.createElement("div",{className:D.default.success},b.default.createElement(E.FormattedMessage,{id:"validation.password.strength.strong"})),b.default.createElement("div",{className:D.default.warning},b.default.createElement(E.FormattedMessage,{id:"validation.password.strength.medium"})),b.default.createElement("div",{className:D.default.error},b.default.createElement(E.FormattedMessage,{id:"validation.password.strength.short"})),{ok:"success",pass:"normal",poor:"exception"}),S=(v=(0,k.connect)(function(e){var t=e.register,a=e.loading,r=e.pk;return{yuceData:r.yuceData,yuceList:r.yuceList,register:t,submitting:a.effects["register/submit"]}}),h=w.default.create(),v(y=h(y=function(e){function t(){var e,a;(0,u.default)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return a=(0,d.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(s))),a.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86",yuce:[],data:{},section:"",isCan:!1},a.onGetCaptcha=function(){var e=59;a.setState({count:e}),a.interval=setInterval(function(){e-=1,a.setState({count:e}),0===e&&clearInterval(a.interval)},1e3)},a.getPasswordStatus=function(){var e=a.props.form,t=e.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},a.handleSubmit=function(e){e.preventDefault();var t=a.props,r=t.form,s=t.dispatch;r.validateFields({force:!0},function(e,t){if(!e){var r=a.state.prefix;s({type:"register/submit",payload:(0,l.default)({},t,{prefix:r})})}})},a.handleConfirmBlur=function(e){var t=e.target.value,r=a.state.confirmDirty;a.setState({confirmDirty:r||!!t})},a.checkConfirm=function(e,t,r){var s=a.props.form;t&&t!==s.getFieldValue("password")?r((0,E.formatMessage)({id:"validation.password.twice"})):r()},a.checkPassword=function(e,t,r){var s=a.state,n=s.visible,o=s.confirmDirty;if(t)if(a.setState({help:""}),n||a.setState({visible:!!t}),t.length<6)r("error");else{var i=a.props.form;t&&o&&i.validateFields(["confirm"],{force:!0}),r()}else a.setState({help:(0,E.formatMessage)({id:"validation.password.required"}),visible:!!t}),r("error")},a.changePrefix=function(e){a.setState({prefix:e})},a.renderPasswordProgress=function(){var e=a.props.form,t=e.getFieldValue("password"),r=a.getPasswordStatus();return t&&t.length?b.default.createElement("div",{className:D.default["progress-".concat(r)]},b.default.createElement(i.default,{status:F[r],className:D.default.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},a}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){this.fetchData(),this.autoFetch()}},{key:"autoFetch",value:function(){var e=this;window.setInterval(function(){e.fetchData()},6e4)}},{key:"fetchData",value:function(){this.state.num=window.localStorage.getItem("num");var e=this.props.dispatch;e({type:"pk/fetchYuce"})}},{key:"render",value:function(){var e=this.props,t=e.form,a=(e.submitting,e.yuceList),r=(t.getFieldDecorator,this.state);r.count,r.prefix,r.help,r.visible;return console.log(a,"yuceList"),b.default.createElement(n.default,null,b.default.createElement(o.default,{style:{marginBottom:20},onClick:this.fetchData.bind(this),type:"primary"},"\u83b7\u53d6"),this.renderYuce(a))}},{key:"renderYuce",value:function(e){var t=this.state.num;console.log(t,"num");var r=!1,s=null;return 0==e.length?b.default.createElement("div",null,"\u672c\u671f\u4e0d\u63a8\u8350\u54e6\uff01"):(e.forEach(function(e){Number(e.num)==Number(t)&&(r=!0,s=b.default.createElement(n.default,null,e.msg))}),s||(s=e.map(function(e,t){var a={};return 1==e.tj&&(a.background="red"),1==e.btj&&(a.background="green"),b.default.createElement(n.default,{key:t},b.default.createElement("div",{style:a},e.msg))})),b.default.createElement(n.default,null,s,r&&b.default.createElement("audio",{autoPlay:!0,src:a("JKFo"),controls:"controls"})))}}]),t}(b.Component))||y)||y),x=S;t.default=x},lnIN:function(e,t,a){e.exports={main:"antd-pro\\pages\\-yuce\\-register-main",getCaptcha:"antd-pro\\pages\\-yuce\\-register-getCaptcha",submit:"antd-pro\\pages\\-yuce\\-register-submit",login:"antd-pro\\pages\\-yuce\\-register-login",error:"antd-pro\\pages\\-yuce\\-register-error",success:"antd-pro\\pages\\-yuce\\-register-success",warning:"antd-pro\\pages\\-yuce\\-register-warning","progress-pass":"antd-pro\\pages\\-yuce\\-register-progress-pass",progress:"antd-pro\\pages\\-yuce\\-register-progress"}}}]);