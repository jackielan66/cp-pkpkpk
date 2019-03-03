(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"6p3G":function(e,t,a){"use strict";var l=a("xK3H"),n=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("f1fJ");var r=l(a("oQ5n"));a("XR1F");var i=l(a("BMWu"));a("1eg1");var o=l(a("P1QG"));a("hCtM");var d,u,s,f=l(a("HfpZ")),c=l(a("Sx57")),m=l(a("4zp0")),p=l(a("iVWQ")),g=l(a("lF+r")),h=l(a("PApH")),v=n(a("6cB7")),E=a("LneV"),y=a("0iMl"),M=a("KTCi"),T=l(a("LOQS")),x=l(a("Yaqk")),b=l(a("U2E3")),F=l(a("BS6i")),C=l(a("v99g")),S=l(a("HZnN")),k=l(a("XFmb")),D=S.default.Secured,w=(new Date).getTime()+39e5,P=new Promise(function(e){setTimeout(function(){return e()},300)}),W=(d=D(P),u=(0,E.connect)(function(e){var t=e.monitor,a=e.loading;return{monitor:t,loading:a.models.monitor}}),d(s=u(s=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(0,g.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"monitor/fetchTags"})}},{key:"render",value:function(){var e=this.props,t=e.monitor,a=e.loading,l=t.tags;return v.default.createElement(C.default,null,v.default.createElement(o.default,{gutter:24},v.default.createElement(f.default,{xl:18,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24}},v.default.createElement(r.default,{title:v.default.createElement(y.FormattedMessage,{id:"app.monitor.trading-activity",defaultMessage:"Real-Time Trading Activity"}),bordered:!1},v.default.createElement(o.default,null,v.default.createElement(f.default,{md:6,sm:12,xs:24},v.default.createElement(T.default,{subTitle:v.default.createElement(y.FormattedMessage,{id:"app.monitor.total-transactions",defaultMessage:"Total transactions today"}),suffix:"\u5143",total:(0,F.default)(124543233).format("0,0")})),v.default.createElement(f.default,{md:6,sm:12,xs:24},v.default.createElement(T.default,{subTitle:v.default.createElement(y.FormattedMessage,{id:"app.monitor.sales-target",defaultMessage:"Sales target completion rate"}),total:"92%"})),v.default.createElement(f.default,{md:6,sm:12,xs:24},v.default.createElement(T.default,{subTitle:v.default.createElement(y.FormattedMessage,{id:"app.monitor.remaining-time",defaultMessage:"Remaining time of activity"}),total:v.default.createElement(x.default,{target:w})})),v.default.createElement(f.default,{md:6,sm:12,xs:24},v.default.createElement(T.default,{subTitle:v.default.createElement(y.FormattedMessage,{id:"app.monitor.total-transactions-per-second",defaultMessage:"Total transactions per second"}),suffix:"\u5143",total:(0,F.default)(234).format("0,0")}))),v.default.createElement("div",{className:k.default.mapChart},v.default.createElement(i.default,{title:v.default.createElement(y.FormattedMessage,{id:"app.monitor.waiting-for-implementation",defaultMessage:"Waiting for implementation"})},v.default.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png",alt:"map"}))))),v.default.createElement(f.default,{xl:6,lg:24,md:24,sm:24,xs:24},v.default.createElement(r.default,{title:v.default.createElement(y.FormattedMessage,{id:"app.monitor.activity-forecast",defaultMessage:"Activity forecast"}),style:{marginBottom:24},bordered:!1},v.default.createElement(b.default,null)),v.default.createElement(r.default,{title:v.default.createElement(y.FormattedMessage,{id:"app.monitor.efficiency",defaultMessage:"Efficiency"}),style:{marginBottom:24},bodyStyle:{textAlign:"center"},bordered:!1},v.default.createElement(M.Gauge,{title:(0,y.formatMessage)({id:"app.monitor.ratio",defaultMessage:"Ratio"}),height:180,percent:87})))),v.default.createElement(o.default,{gutter:24},v.default.createElement(f.default,{xl:12,lg:24,sm:24,xs:24,style:{marginBottom:24}},v.default.createElement(r.default,{title:v.default.createElement(y.FormattedMessage,{id:"app.monitor.proportion-per-category",defaultMessage:"Proportion Per Category"}),bordered:!1,className:k.default.pieCard},v.default.createElement(o.default,{style:{padding:"16px 0"}},v.default.createElement(f.default,{span:8},v.default.createElement(M.Pie,{animate:!1,percent:28,subTitle:v.default.createElement(y.FormattedMessage,{id:"app.monitor.fast-food",defaultMessage:"Fast food"}),total:"28%",height:128,lineWidth:2})),v.default.createElement(f.default,{span:8},v.default.createElement(M.Pie,{animate:!1,color:"#5DDECF",percent:22,subTitle:v.default.createElement(y.FormattedMessage,{id:"app.monitor.western-food",defaultMessage:"Western food"}),total:"22%",height:128,lineWidth:2})),v.default.createElement(f.default,{span:8},v.default.createElement(M.Pie,{animate:!1,color:"#2FC25B",percent:32,subTitle:v.default.createElement(y.FormattedMessage,{id:"app.monitor.hot-pot",defaultMessage:"Hot pot"}),total:"32%",height:128,lineWidth:2}))))),v.default.createElement(f.default,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},v.default.createElement(r.default,{title:v.default.createElement(y.FormattedMessage,{id:"app.monitor.popular-searches",defaultMessage:"Popular Searches"}),loading:a,bordered:!1,bodyStyle:{overflow:"hidden"}},v.default.createElement(M.TagCloud,{data:l,height:161}))),v.default.createElement(f.default,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},v.default.createElement(r.default,{title:v.default.createElement(y.FormattedMessage,{id:"app.monitor.resource-surplus",defaultMessage:"Resource Surplus"}),bodyStyle:{textAlign:"center",fontSize:0},bordered:!1},v.default.createElement(M.WaterWave,{height:161,title:v.default.createElement(y.FormattedMessage,{id:"app.monitor.fund-surplus",defaultMessage:"Fund Surplus"}),percent:34})))))}}]),t}(v.PureComponent))||s)||s),B=W;t.default=B},U2E3:function(e,t,a){"use strict";var l=a("3rQ3"),n=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("aG3W")),i=n(a("Sx57")),o=n(a("4zp0")),d=n(a("iVWQ")),u=n(a("lF+r")),s=n(a("PApH")),f=l(a("6cB7")),c=a("KTCi"),m=n(a("LOQS")),p=n(a("cHiq"));function g(e){return 1*e<10?"0".concat(e):e}function h(){for(var e=[],t=0;t<24;t+=1)e.push({x:"".concat(g(t),":00"),y:Math.floor(200*Math.random())+50*t});return e}var v=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,d.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(n))),a.state={activeData:h()},a.loopData=function(){a.requestRef=requestAnimationFrame(function(){a.timer=setTimeout(function(){a.setState({activeData:h()},function(){a.loopData()})},1e3)})},a}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var e=this.state.activeData,t=void 0===e?[]:e;return f.default.createElement("div",{className:p.default.activeChart},f.default.createElement(m.default,{subTitle:"\u76ee\u6807\u8bc4\u4f30",total:"\u6709\u671b\u8fbe\u5230\u9884\u671f"}),f.default.createElement("div",{style:{marginTop:32}},f.default.createElement(c.MiniArea,{animate:!1,line:!0,borderWidth:2,height:84,scale:{y:{tickCount:3}},yAxis:{tickLine:!1,label:!1,title:!1,line:!1},data:t})),t&&f.default.createElement("div",null,f.default.createElement("div",{className:p.default.activeChartGrid},f.default.createElement("p",null,(0,r.default)(t).sort()[t.length-1].y+200," \u4ebf\u5143"),f.default.createElement("p",null,(0,r.default)(t).sort()[Math.floor(t.length/2)].y," \u4ebf\u5143")),f.default.createElement("div",{className:p.default.dashedLine},f.default.createElement("div",{className:p.default.line})),f.default.createElement("div",{className:p.default.dashedLine},f.default.createElement("div",{className:p.default.line}))),t&&f.default.createElement("div",{className:p.default.activeChartLegend},f.default.createElement("span",null,"00:00"),f.default.createElement("span",null,t[Math.floor(t.length/2)].x),f.default.createElement("span",null,t[t.length-1].x)))}}]),t}(f.Component);t.default=v},XFmb:function(e,t,a){e.exports={mapChart:"antd-pro\\pages\\-dashboard\\-monitor-mapChart",pieCard:"antd-pro\\pages\\-dashboard\\-monitor-pieCard"}},Yaqk:function(e,t,a){"use strict";var l=a("3rQ3"),n=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("+S5U")),i=n(a("Sx57")),o=n(a("4zp0")),d=n(a("iVWQ")),u=n(a("lF+r")),s=n(a("PApH")),f=l(a("6cB7"));function c(e){return 1*e<10?"0".concat(e):e}var m=function(e){var t=0,a=0;try{a="[object Date]"===Object.prototype.toString.call(e.target)?e.target.getTime():new Date(e.target).getTime()}catch(e){throw new Error("invalid target prop",e)}return t=a-(new Date).getTime(),{lastTime:t<0?0:t}},p=function(e){function t(e){var a;(0,i.default)(this,t),a=(0,d.default)(this,(0,u.default)(t).call(this,e)),a.timer=0,a.interval=1e3,a.defaultFormat=function(e){var t=36e5,a=6e4,l=Math.floor(e/t),n=Math.floor((e-l*t)/a),r=Math.floor((e-l*t-n*a)/1e3);return f.default.createElement("span",null,c(l),":",c(n),":",c(r))},a.tick=function(){var e=a.props.onEnd,t=a.state.lastTime;a.timer=setTimeout(function(){t<a.interval?(clearTimeout(a.timer),a.setState({lastTime:0},function(){e&&e()})):(t-=a.interval,a.setState({lastTime:t},function(){a.tick()}))},a.interval)};var l=m(e),n=l.lastTime;return a.state={lastTime:n},a}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.tick()}},{key:"componentDidUpdate",value:function(e){var t=this.props.target;t!==e.target&&(clearTimeout(this.timer),this.tick())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.format,a=void 0===t?this.defaultFormat:t,l=(e.onEnd,(0,r.default)(e,["format","onEnd"])),n=this.state.lastTime,i=a(n);return f.default.createElement("span",l,i)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=m(e),l=a.lastTime;return t.lastTime!==l?{lastTime:l}:null}}]),t}(f.Component),g=p;t.default=g},cHiq:function(e,t,a){e.exports={activeChart:"antd-pro\\components\\-active-chart\\index-activeChart",activeChartGrid:"antd-pro\\components\\-active-chart\\index-activeChartGrid",activeChartLegend:"antd-pro\\components\\-active-chart\\index-activeChartLegend",dashedLine:"antd-pro\\components\\-active-chart\\index-dashedLine",line:"antd-pro\\components\\-active-chart\\index-line"}}}]);