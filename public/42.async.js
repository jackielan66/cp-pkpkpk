(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{YiZ1:function(e,t,a){e.exports={avatarHolder:"antd-pro\\pages\\-account\\-center\\-center-avatarHolder",name:"antd-pro\\pages\\-account\\-center\\-center-name",detail:"antd-pro\\pages\\-account\\-center\\-center-detail",title:"antd-pro\\pages\\-account\\-center\\-center-title",group:"antd-pro\\pages\\-account\\-center\\-center-group",address:"antd-pro\\pages\\-account\\-center\\-center-address",tagsTitle:"antd-pro\\pages\\-account\\-center\\-center-tagsTitle",teamTitle:"antd-pro\\pages\\-account\\-center\\-center-teamTitle",tags:"antd-pro\\pages\\-account\\-center\\-center-tags",team:"antd-pro\\pages\\-account\\-center\\-center-team",tabsCard:"antd-pro\\pages\\-account\\-center\\-center-tabsCard"}},zMb4:function(e,t,a){"use strict";var n=a("xK3H"),l=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("f1fJ");var r=n(a("oQ5n"));a("smxD");var c=n(a("x2Sk"));a("1eg1");var u=n(a("P1QG"));a("hCtM");var d=n(a("HfpZ"));a("AJl0");var s=n(a("NCeX"));a("ml1M");var i=n(a("y9aw"));a("w+sc");var o=n(a("IwyX"));a("omwo");var f=n(a("XAdd"));a("zXiG");var p,m,g=n(a("Q5g5")),h=n(a("aG3W")),v=n(a("Sx57")),E=n(a("4zp0")),b=n(a("iVWQ")),y=n(a("lF+r")),w=n(a("PApH")),k=n(a("8g53")),C=l(a("6cB7")),T=a("LneV"),N=n(a("YTT5")),j=n(a("cV6d")),V=n(a("v99g")),I=n(a("YiZ1")),S=(p=(0,T.connect)(function(e){var t=e.loading,a=e.user,n=e.project;return{listLoading:t.effects["list/fetch"],currentUser:a.currentUser,currentUserLoading:t.effects["user/fetchCurrent"],project:n,projectLoading:t.effects["project/fetchNotice"]}}),p(m=function(e){function t(){var e,a;(0,v.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,b.default)(this,(e=(0,y.default)(t)).call.apply(e,[this].concat(l))),a.state={newTags:[],inputVisible:!1,inputValue:""},a.onTabChange=function(e){var t=a.props.match;switch(e){case"articles":j.default.push("".concat(t.url,"/articles"));break;case"applications":j.default.push("".concat(t.url,"/applications"));break;case"projects":j.default.push("".concat(t.url,"/projects"));break;default:break}},a.showInput=function(){a.setState({inputVisible:!0},function(){return a.input.focus()})},a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=(0,k.default)((0,k.default)(a)),t=e.state,n=t.inputValue,l=t.newTags;n&&0===l.filter(function(e){return e.label===n}).length&&(l=(0,h.default)(l).concat([{key:"new-".concat(l.length),label:n}])),a.setState({newTags:l,inputVisible:!1,inputValue:""})},a}return(0,w.default)(t,e),(0,E.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"user/fetchCurrent"}),e({type:"list/fetch",payload:{count:8}}),e({type:"project/fetchNotice"})}},{key:"render",value:function(){var e=this.state,t=e.newTags,a=e.inputVisible,n=e.inputValue,l=this.props,p=l.listLoading,m=l.currentUser,h=l.currentUserLoading,v=l.project.notice,E=l.projectLoading,b=l.match,y=l.location,w=l.children,k=[{key:"articles",tab:C.default.createElement("span",null,"\u6587\u7ae0 ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"applications",tab:C.default.createElement("span",null,"\u5e94\u7528 ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"projects",tab:C.default.createElement("span",null,"\u9879\u76ee ",C.default.createElement("span",{style:{fontSize:14}},"(8)"))}];return C.default.createElement(V.default,{className:I.default.userCenter},C.default.createElement(u.default,{gutter:24},C.default.createElement(d.default,{lg:7,md:24},C.default.createElement(r.default,{bordered:!1,style:{marginBottom:24},loading:h},m&&Object.keys(m).length?C.default.createElement("div",null,C.default.createElement("div",{className:I.default.avatarHolder},C.default.createElement("img",{alt:"",src:m.avatar}),C.default.createElement("div",{className:I.default.name},m.name),C.default.createElement("div",null,m.signature)),C.default.createElement("div",{className:I.default.detail},C.default.createElement("p",null,C.default.createElement("i",{className:I.default.title}),m.title),C.default.createElement("p",null,C.default.createElement("i",{className:I.default.group}),m.group),C.default.createElement("p",null,C.default.createElement("i",{className:I.default.address}),m.geographic.province.label,m.geographic.city.label)),C.default.createElement(g.default,{dashed:!0}),C.default.createElement("div",{className:I.default.tags},C.default.createElement("div",{className:I.default.tagsTitle},"\u6807\u7b7e"),m.tags.concat(t).map(function(e){return C.default.createElement(f.default,{key:e.key},e.label)}),a&&C.default.createElement(o.default,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:n,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!a&&C.default.createElement(f.default,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},C.default.createElement(i.default,{type:"plus"}))),C.default.createElement(g.default,{style:{marginTop:16},dashed:!0}),C.default.createElement("div",{className:I.default.team},C.default.createElement("div",{className:I.default.teamTitle},"\u56e2\u961f"),C.default.createElement(c.default,{spinning:E},C.default.createElement(u.default,{gutter:36},v.map(function(e){return C.default.createElement(d.default,{key:e.id,lg:24,xl:12},C.default.createElement(N.default,{to:e.href},C.default.createElement(s.default,{size:"small",src:e.logo}),e.member))}))))):"loading...")),C.default.createElement(d.default,{lg:17,md:24},C.default.createElement(r.default,{className:I.default.tabsCard,bordered:!1,tabList:k,activeTabKey:y.pathname.replace("".concat(b.path,"/"),""),onTabChange:this.onTabChange,loading:p},w))))}}]),t}(C.PureComponent))||m),z=S;t.default=z}}]);