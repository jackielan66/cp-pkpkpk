(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{JE8d:function(e,t,a){"use strict";var n=a("3rQ3"),i=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a8wg");var d=i(a("piM7"));a("ml1M");var l=i(a("y9aw")),s=i(a("Sx57")),r=i(a("4zp0")),o=i(a("iVWQ")),u=i(a("lF+r")),p=i(a("PApH")),c=n(a("6cB7")),f=a("0iMl"),g=function(e){function t(){var e,a;(0,s.default)(this,t);for(var n=arguments.length,i=new Array(n),d=0;d<n;d++)i[d]=arguments[d];return a=(0,o.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(i))),a.getData=function(){return[{title:(0,f.formatMessage)({id:"app.settings.binding.taobao"},{}),description:(0,f.formatMessage)({id:"app.settings.binding.taobao-description"},{}),actions:[c.default.createElement("a",null,c.default.createElement(f.FormattedMessage,{id:"app.settings.binding.bind",defaultMessage:"Bind"}))],avatar:c.default.createElement(l.default,{type:"taobao",className:"taobao"})},{title:(0,f.formatMessage)({id:"app.settings.binding.alipay"},{}),description:(0,f.formatMessage)({id:"app.settings.binding.alipay-description"},{}),actions:[c.default.createElement("a",null,c.default.createElement(f.FormattedMessage,{id:"app.settings.binding.bind",defaultMessage:"Bind"}))],avatar:c.default.createElement(l.default,{type:"alipay",className:"alipay"})},{title:(0,f.formatMessage)({id:"app.settings.binding.dingding"},{}),description:(0,f.formatMessage)({id:"app.settings.binding.dingding-description"},{}),actions:[c.default.createElement("a",null,c.default.createElement(f.FormattedMessage,{id:"app.settings.binding.bind",defaultMessage:"Bind"}))],avatar:c.default.createElement(l.default,{type:"dingding",className:"dingding"})}]},a}return(0,p.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return c.default.createElement(c.Fragment,null,c.default.createElement(d.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return c.default.createElement(d.default.Item,{actions:e.actions},c.default.createElement(d.default.Item.Meta,{avatar:e.avatar,title:e.title,description:e.description}))}}))}}]),t}(c.Component),m=g;t.default=m}}]);