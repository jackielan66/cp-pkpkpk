(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{JeqK:function(t,e,a){"use strict";var i=a("3rQ3"),n=a("xK3H");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a8wg");var s=n(a("piM7"));a("4cbN");var o=n(a("jOtL")),r=n(a("Sx57")),d=n(a("4zp0")),c=n(a("iVWQ")),l=n(a("lF+r")),f=n(a("PApH")),p=i(a("6cB7")),u=a("0iMl"),g=function(t){function e(){var t,a;(0,r.default)(this,e);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return a=(0,c.default)(this,(t=(0,l.default)(e)).call.apply(t,[this].concat(n))),a.getData=function(){var t=p.default.createElement(o.default,{checkedChildren:(0,u.formatMessage)({id:"app.settings.open"}),unCheckedChildren:(0,u.formatMessage)({id:"app.settings.close"}),defaultChecked:!0});return[{title:(0,u.formatMessage)({id:"app.settings.notification.password"},{}),description:(0,u.formatMessage)({id:"app.settings.notification.password-description"},{}),actions:[t]},{title:(0,u.formatMessage)({id:"app.settings.notification.messages"},{}),description:(0,u.formatMessage)({id:"app.settings.notification.messages-description"},{}),actions:[t]},{title:(0,u.formatMessage)({id:"app.settings.notification.todo"},{}),description:(0,u.formatMessage)({id:"app.settings.notification.todo-description"},{}),actions:[t]}]},a}return(0,f.default)(e,t),(0,d.default)(e,[{key:"render",value:function(){return p.default.createElement(p.Fragment,null,p.default.createElement(s.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(t){return p.default.createElement(s.default.Item,{actions:t.actions},p.default.createElement(s.default.Item.Meta,{title:t.title,description:t.description}))}}))}}]),e}(p.Component),m=g;e.default=m}}]);