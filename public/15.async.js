(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"8TWP":function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Glnk");var o=l(a("JkZJ"));a("vtGj");var r=l(a("Fqv6"));a("ml1M");var i=l(a("y9aw"));a("smxD");var u=l(a("x2Sk")),d=l(a("dnxz")),c=l(a("Sx57")),s=l(a("4zp0")),f=l(a("iVWQ")),p=l(a("lF+r")),m=l(a("PApH"));a("lI8P");var h=l(a("6CoE")),g=n(a("6cB7")),v=l(a("VUem")),y=l(a("iczh")),b=l(a("SlZz")),E=l(a("btmg")),M=h.default.TabPane,x=function(e){function t(){var e,a;(0,c.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,f.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(l))),a.onItemClick=function(e,t){var n=a.props.onItemClick,l=e.clickClose;n(e,t),l&&a.popover.click()},a.onClear=function(e){var t=a.props,n=t.onClear,l=t.clearClose;n(e),l&&a.popover.click()},a.onTabChange=function(e){var t=a.props.onTabChange;t(e)},a}return(0,m.default)(t,e),(0,s.default)(t,[{key:"getNotificationBox",value:function(){var e=this,t=this.props,a=t.children,n=t.loading,l=t.locale;if(!a)return null;var o=g.default.Children.map(a,function(t){var a=t.props,n=a.list,o=a.title,r=a.name,i=a.count,u=n&&n.length?n.length:0,c=i||0===i?i:u,s=c>0?"".concat(o," (").concat(c,")"):o;return g.default.createElement(M,{tab:s,key:r},g.default.createElement(b.default,(0,d.default)({},t.props,{data:n,onClick:function(a){return e.onItemClick(a,t.props)},onClear:function(){return e.onClear(r)},title:o,locale:l})))});return g.default.createElement(u.default,{spinning:n,delay:0},g.default.createElement(h.default,{className:E.default.tabs,onChange:this.onTabChange},o))}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.count,l=t.popupAlign,u=t.popupVisible,c=t.onPopupVisibleChange,s=t.bell,f=(0,y.default)(a,E.default.noticeButton),p=this.getNotificationBox(),m=s||g.default.createElement(i.default,{type:"bell",className:E.default.icon}),h=g.default.createElement("span",{className:f},g.default.createElement(r.default,{count:n,style:{boxShadow:"none"},className:E.default.badge},m));if(!p)return h;var b={};return"popupVisible"in this.props&&(b.visible=u),g.default.createElement(o.default,(0,d.default)({placement:"bottomRight",content:p,popupClassName:E.default.popover,trigger:"click",arrowPointAtCenter:!0,popupAlign:l,onVisibleChange:c},b,{ref:function(t){return e.popover=v.default.findDOMNode(t)}}),h)}}]),t}(g.PureComponent);t.default=x,x.Tab=M,x.defaultProps={onItemClick:function(){},onPopupVisibleChange:function(){},onTabChange:function(){},onClear:function(){},loading:!1,clearClose:!1,locale:{emptyText:"No notifications",clear:"Clear"},emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"}},AcjU:function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a("dnxz")),r=l(a("9bEj")),i=l(a("aG3W")),u=l(a("Sx57")),d=l(a("4zp0")),c=l(a("iVWQ")),s=l(a("lF+r")),f=l(a("PApH"));a("UVhT");var p=l(a("5XYQ")),m=n(a("6cB7")),h=l(a("iczh")),g=l(a("YTT5")),v=l(a("mR0u")),y=l(a("xqX8")),b=a("pMM0"),E=m.default.lazy(function(){return Promise.resolve().then(a.t.bind(null,"oFg3",7))}),M=p.default.Sider,x=function(e){function t(e){var a;return(0,u.default)(this,t),a=(0,c.default)(this,(0,s.default)(t).call(this,e)),a.isMainMenu=function(e){var t=a.props.menuData;return t.some(function(t){return!!e&&(t.key===e||t.path===e)})},a.handleOpenChange=function(e){var t=e.filter(function(e){return a.isMainMenu(e)}).length>1;a.setState({openKeys:t?[e.pop()]:(0,i.default)(e)})},a.state={openKeys:(0,b.getDefaultCollapsedSubMenus)(e)},a}return(0,f.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.logo,n=t.collapsed,l=t.onCollapse,i=t.fixSiderbar,u=t.theme,d=this.state.openKeys,c=n?{}:{openKeys:d},s=(0,h.default)(v.default.sider,(e={},(0,r.default)(e,v.default.fixSiderbar,i),(0,r.default)(e,v.default.light,"light"===u),e));return m.default.createElement(M,{trigger:null,collapsible:!0,collapsed:n,breakpoint:"lg",onCollapse:l,width:256,theme:u,className:s},m.default.createElement("div",{className:v.default.logo,id:"logo"},m.default.createElement(g.default,{to:"/"},m.default.createElement("img",{src:a,alt:"logo"}),m.default.createElement("h1",null,"Ant Design Pro"))),m.default.createElement(m.Suspense,{fallback:m.default.createElement(y.default,null)},m.default.createElement(E,(0,o.default)({},this.props,{mode:"inline",handleOpenChange:this.handleOpenChange,onOpenChange:this.handleOpenChange,style:{padding:"16px 0",width:"100%"}},c))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.pathname;return e.location.pathname!==a?{pathname:e.location.pathname,openKeys:(0,b.getDefaultCollapsedSubMenus)(e)}:null}}]),t}(m.PureComponent);t.default=x},BsfW:function(e,t,a){e.exports={list:"antd-pro\\components\\-notice-icon\\-notice-list-list",item:"antd-pro\\components\\-notice-icon\\-notice-list-item",meta:"antd-pro\\components\\-notice-icon\\-notice-list-meta",avatar:"antd-pro\\components\\-notice-icon\\-notice-list-avatar",iconElement:"antd-pro\\components\\-notice-icon\\-notice-list-iconElement",read:"antd-pro\\components\\-notice-icon\\-notice-list-read",title:"antd-pro\\components\\-notice-icon\\-notice-list-title",description:"antd-pro\\components\\-notice-icon\\-notice-list-description",datetime:"antd-pro\\components\\-notice-icon\\-notice-list-datetime",extra:"antd-pro\\components\\-notice-icon\\-notice-list-extra",notFound:"antd-pro\\components\\-notice-icon\\-notice-list-notFound",clear:"antd-pro\\components\\-notice-icon\\-notice-list-clear"}},G3lK:function(e,t,a){e.exports={headerSearch:"antd-pro\\components\\-header-search\\index-headerSearch",input:"antd-pro\\components\\-header-search\\index-input",show:"antd-pro\\components\\-header-search\\index-show"}},IGtV:function(e,t,a){e.exports={fixedHeader:"antd-pro\\layouts\\-header-fixedHeader"}},IamK:function(e,t,a){"use strict";var n=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("F23z");var l=n(a("6DBz")),o=n(a("dnxz")),r=n(a("6cB7")),i=n(a("AcjU")),u=a("pMM0"),d=r.default.memo(function(e){var t=e.isMobile,a=e.menuData,n=e.collapsed,d=e.onCollapse,c=(0,u.getFlatMenuKeys)(a);return t?r.default.createElement(l.default,{visible:!n,placement:"left",onClose:function(){return d(!0)},style:{padding:0,height:"100vh"}},r.default.createElement(i.default,(0,o.default)({},e,{flatMenuKeys:c,collapsed:!t&&n}))):r.default.createElement(i.default,(0,o.default)({},e,{flatMenuKeys:c}))}),c=d;t.default=c},JwhZ:function(e,t,a){e.exports={head:"antd-pro\\components\\-top-nav-header\\index-head",light:"antd-pro\\components\\-top-nav-header\\index-light",main:"antd-pro\\components\\-top-nav-header\\index-main",wide:"antd-pro\\components\\-top-nav-header\\index-wide",left:"antd-pro\\components\\-top-nav-header\\index-left",right:"antd-pro\\components\\-top-nav-header\\index-right",logo:"antd-pro\\components\\-top-nav-header\\index-logo"}},NtFa:function(e,t,a){"use strict";var n=a("xK3H"),l=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ml1M");var o,r,i=n(a("y9aw")),u=n(a("Sx57")),d=n(a("4zp0")),c=n(a("iVWQ")),s=n(a("lF+r")),f=n(a("PApH")),p=n(a("vjBd")),m=l(a("6cB7")),h=n(a("YTT5")),g=n(a("zZ0I")),v=n(a("h3zL")),y=n(a("X5mu")),b=(o=(0,g.default)(600),r=function(e){function t(){var e,a;(0,u.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,c.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(l))),a.toggle=function(){var e=a.props,t=e.collapsed,n=e.onCollapse;n(!t),a.triggerResizeEvent()},a}return(0,f.default)(t,e),(0,d.default)(t,[{key:"componentWillUnmount",value:function(){this.triggerResizeEvent.cancel()}},{key:"triggerResizeEvent",value:function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),window.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props,t=e.collapsed,a=e.isMobile,n=e.logo;return m.default.createElement("div",{className:v.default.header},a&&m.default.createElement(h.default,{to:"/",className:v.default.logo,key:"logo"},m.default.createElement("img",{src:n,alt:"logo",width:"32"})),m.default.createElement(i.default,{className:v.default.trigger,type:t?"menu-unfold":"menu-fold",onClick:this.toggle}),m.default.createElement(y.default,this.props))}}]),t}(m.PureComponent),(0,p.default)(r.prototype,"triggerResizeEvent",[o],Object.getOwnPropertyDescriptor(r.prototype,"triggerResizeEvent"),r.prototype),r);t.default=b},SlZz:function(e,t,a){"use strict";var n=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=c,a("a8wg");var l=n(a("piM7"));a("AJl0");var o=n(a("NCeX")),r=n(a("9bEj")),i=n(a("6cB7")),u=n(a("iczh")),d=n(a("BsfW"));function c(e){var t=e.data,a=void 0===t?[]:t,n=e.onClick,c=e.onClear,s=e.title,f=e.locale,p=e.emptyText,m=e.emptyImage,h=e.showClear,g=void 0===h||h;return 0===a.length?i.default.createElement("div",{className:d.default.notFound},m?i.default.createElement("img",{src:m,alt:"not found"}):null,i.default.createElement("div",null,p||f.emptyText)):i.default.createElement("div",null,i.default.createElement(l.default,{className:d.default.list},a.map(function(e,t){var a=(0,u.default)(d.default.item,(0,r.default)({},d.default.read,e.read)),c=e.avatar?"string"===typeof e.avatar?i.default.createElement(o.default,{className:d.default.avatar,src:e.avatar}):e.avatar:null;return i.default.createElement(l.default.Item,{className:a,key:e.key||t,onClick:function(){return n(e)}},i.default.createElement(l.default.Item.Meta,{className:d.default.meta,avatar:i.default.createElement("span",{className:d.default.iconElement},c),title:i.default.createElement("div",{className:d.default.title},e.title,i.default.createElement("div",{className:d.default.extra},e.extra)),description:i.default.createElement("div",null,i.default.createElement("div",{className:d.default.description,title:e.description},e.description),i.default.createElement("div",{className:d.default.datetime},e.datetime))}))})),g?i.default.createElement("div",{className:d.default.clear,onClick:c},f.clear," ",s):null)}},X5mu:function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("smxD");var o=l(a("x2Sk"));a("Xyr4");var r=l(a("HxG/"));a("AJl0");var i=l(a("NCeX"));a("XR1F");var u=l(a("BMWu"));a("1ami");var d=l(a("4CXy"));a("ml1M");var c=l(a("y9aw"));a("omwo");var s=l(a("XAdd")),f=l(a("SeLb")),p=l(a("p+YU")),m=l(a("Sx57")),h=l(a("4zp0")),g=l(a("iVWQ")),v=l(a("lF+r")),y=l(a("PApH")),b=n(a("6cB7")),E=a("0iMl"),M=l(a("I9Uw")),x=l(a("A2NP")),C=l(a("8TWP")),k=l(a("k5GS")),N=l(a("bfXr")),P=l(a("h3zL")),S=function(e){function t(){var e,a;(0,m.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,g.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(l))),a.getUnreadData=function(e){var t={};return Object.entries(e).forEach(function(e){var a=(0,p.default)(e,2),n=a[0],l=a[1];t[n]||(t[n]=0),Array.isArray(l)&&(t[n]=l.filter(function(e){return!e.read}).length)}),t},a.changeReadState=function(e){var t=e.id,n=a.props.dispatch;n({type:"global/changeNoticeReadState",payload:t})},a}return(0,y.default)(t,e),(0,h.default)(t,[{key:"getNoticeData",value:function(){var e=this.props.notices,t=void 0===e?[]:e;if(0===t.length)return{};var a=t.map(function(e){var t=(0,f.default)({},e);if(t.datetime&&(t.datetime=(0,M.default)(e.datetime).fromNow()),t.id&&(t.key=t.id),t.extra&&t.status){var a={todo:"",processing:"blue",urgent:"red",doing:"gold"}[t.status];t.extra=b.default.createElement(s.default,{color:a,style:{marginRight:0}},t.extra)}return t});return(0,x.default)(a,"type")}},{key:"render",value:function(){var e=this,t=this.props,a=t.currentUser,n=t.fetchingNotices,l=t.onNoticeVisibleChange,s=t.onMenuClick,f=t.onNoticeClear,p=t.theme,m=b.default.createElement(d.default,{className:P.default.menu,selectedKeys:[],onClick:s},b.default.createElement(d.default.Item,{key:"userCenter"},b.default.createElement(c.default,{type:"user"}),b.default.createElement(E.FormattedMessage,{id:"menu.account.center",defaultMessage:"account center"})),b.default.createElement(d.default.Item,{key:"userinfo"},b.default.createElement(c.default,{type:"setting"}),b.default.createElement(E.FormattedMessage,{id:"menu.account.settings",defaultMessage:"account settings"})),b.default.createElement(d.default.Item,{key:"triggerError"},b.default.createElement(c.default,{type:"close-circle"}),b.default.createElement(E.FormattedMessage,{id:"menu.account.trigger",defaultMessage:"Trigger Error"})),b.default.createElement(d.default.Divider,null),b.default.createElement(d.default.Item,{key:"logout"},b.default.createElement(c.default,{type:"logout"}),b.default.createElement(E.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"}))),h=this.getNoticeData(),g=this.getUnreadData(h),v=P.default.right;return"dark"===p&&(v="".concat(P.default.right,"  ").concat(P.default.dark)),b.default.createElement("div",{className:v},b.default.createElement(k.default,{className:"".concat(P.default.action," ").concat(P.default.search),placeholder:(0,E.formatMessage)({id:"component.globalHeader.search"}),dataSource:[(0,E.formatMessage)({id:"component.globalHeader.search.example1"}),(0,E.formatMessage)({id:"component.globalHeader.search.example2"}),(0,E.formatMessage)({id:"component.globalHeader.search.example3"})],onSearch:function(e){console.log("input",e)},onPressEnter:function(e){console.log("enter",e)}}),b.default.createElement(u.default,{title:(0,E.formatMessage)({id:"component.globalHeader.help"})},b.default.createElement("a",{target:"_blank",href:"https://pro.ant.design/docs/getting-started",rel:"noopener noreferrer",className:P.default.action},b.default.createElement(c.default,{type:"question-circle-o"}))),b.default.createElement(C.default,{className:P.default.action,count:a.unreadCount,onItemClick:function(t,a){console.log(t,a),e.changeReadState(t,a)},locale:{emptyText:(0,E.formatMessage)({id:"component.noticeIcon.empty"}),clear:(0,E.formatMessage)({id:"component.noticeIcon.clear"})},onClear:f,onPopupVisibleChange:l,loading:n,popupAlign:{offset:[20,-16]},clearClose:!0},b.default.createElement(C.default.Tab,{count:g.notification,list:h.notification,title:(0,E.formatMessage)({id:"component.globalHeader.notification"}),name:"notification",emptyText:(0,E.formatMessage)({id:"component.globalHeader.notification.empty"}),emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"}),b.default.createElement(C.default.Tab,{count:g.message,list:h.message,title:(0,E.formatMessage)({id:"component.globalHeader.message"}),name:"message",emptyText:(0,E.formatMessage)({id:"component.globalHeader.message.empty"}),emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"}),b.default.createElement(C.default.Tab,{count:g.event,list:h.event,title:(0,E.formatMessage)({id:"component.globalHeader.event"}),name:"event",emptyText:(0,E.formatMessage)({id:"component.globalHeader.event.empty"}),emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"})),a.name?b.default.createElement(r.default,{overlay:m},b.default.createElement("span",{className:"".concat(P.default.action," ").concat(P.default.account)},b.default.createElement(i.default,{size:"small",className:P.default.avatar,src:a.avatar,alt:"avatar"}),b.default.createElement("span",{className:P.default.name},a.name))):b.default.createElement(o.default,{size:"small",style:{marginLeft:8,marginRight:8}}),b.default.createElement(N.default,{className:P.default.action}))}}]),t}(b.PureComponent);t.default=S},btmg:function(e,t,a){e.exports={popover:"antd-pro\\components\\-notice-icon\\index-popover",noticeButton:"antd-pro\\components\\-notice-icon\\index-noticeButton",icon:"antd-pro\\components\\-notice-icon\\index-icon",tabs:"antd-pro\\components\\-notice-icon\\index-tabs"}},ctiy:function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a("dnxz"));a("GY4L");var r=l(a("hBQY")),i=l(a("Sx57")),u=l(a("4zp0")),d=l(a("iVWQ")),c=l(a("lF+r")),s=l(a("PApH"));a("UVhT");var f=l(a("5XYQ")),p=n(a("6cB7")),m=a("0iMl"),h=l(a("sVRC")),g=a("LneV"),v=l(a("cV6d")),y=l(a("NtFa")),b=l(a("wWO0")),E=l(a("IGtV")),M=f.default.Header,x=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,d.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(l))),a.state={visible:!0},a.getHeadWidth=function(){var e=a.props,t=e.isMobile,n=e.collapsed,l=e.setting,o=l.fixedHeader,r=l.layout;return t||!o||"topmenu"===r?"100%":n?"calc(100% - 80px)":"calc(100% - 256px)"},a.handleNoticeClear=function(e){r.default.success("".concat((0,m.formatMessage)({id:"component.noticeIcon.cleared"})," ").concat((0,m.formatMessage)({id:"component.globalHeader.".concat(e)})));var t=a.props.dispatch;t({type:"global/clearNotices",payload:e})},a.handleMenuClick=function(e){var t=e.key,n=a.props.dispatch;"userCenter"!==t?"triggerError"!==t?"userinfo"!==t?"logout"===t&&n({type:"login/logout"}):v.default.push("/account/settings/base"):v.default.push("/exception/trigger"):v.default.push("/account/center")},a.handleNoticeVisibleChange=function(e){if(e){var t=a.props.dispatch;t({type:"global/fetchNotices"})}},a.handScroll=function(){var e=a.props.autoHideHeader,t=a.state.visible;if(e){var n=document.body.scrollTop+document.documentElement.scrollTop;a.ticking||(a.ticking=!0,requestAnimationFrame(function(){a.oldScrollTop>n&&a.setState({visible:!0}),n>300&&t&&a.setState({visible:!1}),n<300&&!t&&a.setState({visible:!0}),a.oldScrollTop=n,a.ticking=!1}))}},a}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handScroll)}},{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.handleMenuCollapse,n=e.setting,l=n.navTheme,r=n.layout,i=n.fixedHeader,u=this.state.visible,d="topmenu"===r,c=this.getHeadWidth(),s=u?p.default.createElement(M,{style:{padding:0,width:c},className:i?E.default.fixedHeader:""},d&&!t?p.default.createElement(b.default,(0,o.default)({theme:l,mode:"horizontal",onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props)):p.default.createElement(y.default,(0,o.default)({onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props))):null;return p.default.createElement(h.default,{component:"",transitionName:"fade"},s)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.autoHideHeader||t.visible?null:{visible:!0}}}]),t}(p.PureComponent),C=(0,g.connect)(function(e){var t=e.user,a=e.global,n=e.setting,l=e.loading;return{currentUser:t.currentUser,collapsed:a.collapsed,fetchingNotices:l.effects["global/fetchNotices"],notices:a.notices,setting:n}})(x);t.default=C},gJ0l:function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ml1M");var o=l(a("y9aw"));a("UVhT");var r=l(a("5XYQ")),i=n(a("6cB7")),u=l(a("ggcP")),d=r.default.Footer,c=function(){return i.default.createElement(d,{style:{padding:0}},i.default.createElement(u.default,{links:[{key:"Pro \u9996\u9875",title:"Pro \u9996\u9875",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:i.default.createElement(o.default,{type:"github"}),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"https://ant.design",blankTarget:!0}],copyright:i.default.createElement(i.Fragment,null,"Copyright ",i.default.createElement(o.default,{type:"copyright"})," 2018 \u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1")}))},s=c;t.default=s},h3zL:function(e,t,a){e.exports={header:"antd-pro\\components\\-global-header\\index-header",logo:"antd-pro\\components\\-global-header\\index-logo",menu:"antd-pro\\components\\-global-header\\index-menu",trigger:"antd-pro\\components\\-global-header\\index-trigger",right:"antd-pro\\components\\-global-header\\index-right",action:"antd-pro\\components\\-global-header\\index-action",search:"antd-pro\\components\\-global-header\\index-search",account:"antd-pro\\components\\-global-header\\index-account",avatar:"antd-pro\\components\\-global-header\\index-avatar",dark:"antd-pro\\components\\-global-header\\index-dark",name:"antd-pro\\components\\-global-header\\index-name"}},k5GS:function(e,t,a){"use strict";var n=a("xK3H"),l=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("2T8h");var o=n(a("LSgK")),r=n(a("dnxz"));a("w+sc");var i=n(a("IwyX"));a("ml1M");var u,d,c,s,f,p=n(a("y9aw")),m=n(a("9bEj")),h=n(a("+S5U")),g=n(a("Sx57")),v=n(a("iVWQ")),y=n(a("lF+r")),b=n(a("4zp0")),E=n(a("PApH")),M=n(a("vjBd")),x=l(a("6cB7")),C=(n(a("T9cD")),n(a("iczh"))),k=n(a("zZ0I")),N=n(a("Ipho")),P=n(a("G3lK")),S=(u=(0,N.default)(),d=(0,k.default)(500,{leading:!0,trailing:!1}),f=s=function(e){function t(e){var a;return(0,g.default)(this,t),a=(0,v.default)(this,(0,y.default)(t).call(this,e)),a.onKeyDown=function(e){if("Enter"===e.key){var t=a.props.onPressEnter,n=a.state.value;a.timeout=setTimeout(function(){t(n)},0)}},a.onChange=function(e){var t=a.props.onChange;a.setState({value:e}),t&&t(e)},a.enterSearchMode=function(){var e=a.props.onVisibleChange;e(!0),a.setState({searchMode:!0},function(){var e=a.state.searchMode;e&&a.input.focus()})},a.leaveSearchMode=function(){a.setState({searchMode:!1,value:""})},a.state={searchMode:e.defaultOpen,value:""},a}return(0,E.default)(t,e),(0,b.default)(t,null,[{key:"getDerivedStateFromProps",value:function(e){return"open"in e?{searchMode:e.open}:null}}]),(0,b.default)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"debouncePressEnter",value:function(){var e=this.props.onPressEnter,t=this.state.value;e(t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.placeholder,l=(t.open,(0,h.default)(t,["className","placeholder","open"])),u=this.state,d=u.searchMode,c=u.value;delete l.defaultOpen;var s=(0,C.default)(P.default.input,(0,m.default)({},P.default.show,d));return x.default.createElement("span",{className:(0,C.default)(a,P.default.headerSearch),onClick:this.enterSearchMode,onTransitionEnd:function(t){var a=t.propertyName;if("width"===a&&!d){var n=e.props.onVisibleChange;n(d)}}},x.default.createElement(p.default,{type:"search",key:"Icon"}),x.default.createElement(o.default,(0,r.default)({key:"AutoComplete"},l,{className:s,value:c,onChange:this.onChange}),x.default.createElement(i.default,{ref:function(t){e.input=t},"aria-label":n,placeholder:n,onKeyDown:this.onKeyDown,onBlur:this.leaveSearchMode})))}}]),t}(x.PureComponent),s.defaultProps={defaultActiveFirstOption:!1,onPressEnter:function(){},onSearch:function(){},className:"",placeholder:"",dataSource:[],defaultOpen:!1,onVisibleChange:function(){}},c=f,(0,M.default)(c.prototype,"debouncePressEnter",[u,d],Object.getOwnPropertyDescriptor(c.prototype,"debouncePressEnter"),c.prototype),c);t.default=S},m8Tn:function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a("SeLb")),r=l(a("dnxz")),i=l(a("Sx57")),u=l(a("4zp0")),d=l(a("iVWQ")),c=l(a("lF+r")),s=l(a("PApH"));a("UVhT");var f=l(a("5XYQ")),p=n(a("6cB7")),m=l(a("Cjad")),h=l(a("yKc7")),g=l(a("pkaF")),v=a("LneV"),y=a("RVbP"),b=l(a("iczh")),E=l(a("UaMt")),M=l(a("y2sv")),x=a("0iMl"),C=l(a("HZnN")),k=l(a("mxmt")),N=l(a("gJ0l")),P=l(a("ctiy")),S=l(a("R1Dz")),w=l(a("wOmh")),H=l(a("xqX8")),T=l(a("IamK")),z=(p.default.lazy(function(){return Promise.all([a.e(0),a.e(52)]).then(a.t.bind(null,"PceP",7))}),f.default.Content),K={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},D=function(e){function t(e){var a;return(0,i.default)(this,t),a=(0,d.default)(this,(0,c.default)(t).call(this,e)),a.matchParamsPath=function(e,t){var a=Object.keys(t).find(function(t){return(0,E.default)(t).test(e)});return t[a]},a.getPageTitle=function(e,t){var n=a.matchParamsPath(e,t);if(!n)return"Ant Design Pro";var l=(0,x.formatMessage)({id:n.locale||n.name,defaultMessage:n.name});return"".concat(l," - Ant Design Pro")},a.getLayoutStyle=function(){var e=a.props,t=e.fixSiderbar,n=e.isMobile,l=e.collapsed,o=e.layout;return t&&"topmenu"!==o&&!n?{paddingLeft:l?"80px":"256px"}:null},a.getContentStyle=function(){var e=a.props.fixedHeader;return{margin:"24px 24px 0",paddingTop:e?64:0}},a.handleMenuCollapse=function(e){var t=a.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})},a.renderSettingDrawer=function(){return null},a.getPageTitle=(0,g.default)(a.getPageTitle),a.matchParamsPath=(0,g.default)(a.matchParamsPath,h.default),a}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,a=e.route,n=a.routes,l=a.authority;t({type:"user/fetchCurrent"}),t({type:"setting/getSetting"}),t({type:"menu/getMenuData",payload:{routes:n,authority:l}})}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.collapsed,n=t.isMobile;!n||e.isMobile||a||this.handleMenuCollapse(!1)}},{key:"getContext",value:function(){var e=this.props,t=e.location,a=e.breadcrumbNameMap;return{location:t,breadcrumbNameMap:a}}},{key:"getBreadcrumbNameMap",value:function(){var e={},t=this.props.menuData,a=function t(a){a.forEach(function(a){a.children&&t(a.children),e[a.path]=a})};return a(t),e}},{key:"render",value:function(){var e=this,t=this.props,a=t.navTheme,n=t.layout,l=t.children,i=t.location.pathname,u=t.isMobile,d=t.menuData,c=t.breadcrumbNameMap,s="topmenu"===n,h=this.matchParamsPath(i,c),g=p.default.createElement(f.default,null,s&&!u?null:p.default.createElement(T.default,(0,r.default)({logo:k.default,theme:a,onCollapse:this.handleMenuCollapse,menuData:d,isMobile:u},this.props)),p.default.createElement(f.default,{style:(0,o.default)({},this.getLayoutStyle(),{minHeight:"100vh"})},p.default.createElement(P.default,(0,r.default)({menuData:d,handleMenuCollapse:this.handleMenuCollapse,logo:k.default,isMobile:u},this.props)),p.default.createElement(z,{style:this.getContentStyle()},p.default.createElement(C.default,{authority:h&&h.authority,noMatch:p.default.createElement(w.default,null)},l)),p.default.createElement(N.default,null)));return p.default.createElement(p.default.Fragment,null,p.default.createElement(m.default,{title:this.getPageTitle(i,c)},p.default.createElement(y.ContainerQuery,{query:K},function(t){return p.default.createElement(S.default.Provider,{value:e.getContext()},p.default.createElement("div",{className:(0,b.default)(t)},g))})),p.default.createElement(p.Suspense,{fallback:p.default.createElement(H.default,null)},this.renderSettingDrawer()))}}]),t}(p.default.PureComponent),I=(0,v.connect)(function(e){var t=e.global,a=e.setting,n=e.menu;return(0,o.default)({collapsed:t.collapsed,layout:a.layout,menuData:n.menuData,breadcrumbNameMap:n.breadcrumbNameMap},a)})(function(e){return p.default.createElement(M.default,{query:"(max-width: 599px)"},function(t){return p.default.createElement(D,(0,r.default)({},e,{isMobile:t}))})});t.default=I},mR0u:function(e,t,a){e.exports={logo:"antd-pro\\components\\-sider-menu\\index-logo",sider:"antd-pro\\components\\-sider-menu\\index-sider",fixSiderbar:"antd-pro\\components\\-sider-menu\\index-fixSiderbar",light:"antd-pro\\components\\-sider-menu\\index-light",icon:"antd-pro\\components\\-sider-menu\\index-icon"}},oFg3:function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a("dnxz")),r=l(a("Sx57")),i=l(a("4zp0")),u=l(a("iVWQ")),d=l(a("lF+r")),c=l(a("PApH"));a("ml1M");var s=l(a("y9aw"));a("1ami");var f=l(a("4CXy")),p=n(a("6cB7")),m=l(a("YTT5")),h=l(a("yKc7")),g=l(a("pkaF")),v=a("S/9j"),y=a("pMM0"),b=a("+n12"),E=l(a("mR0u")),M=f.default.SubMenu,x=function(e){return"string"===typeof e&&(0,b.isUrl)(e)?p.default.createElement("img",{src:e,alt:"icon",className:E.default.icon}):"string"===typeof e?p.default.createElement(s.default,{type:e}):e},C=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,u.default)(this,(0,d.default)(t).call(this,e)),a.getNavMenuItems=function(e,t){return e?e.filter(function(e){return e.name&&!e.hideInMenu}).map(function(e){return a.getSubMenuOrItem(e,t)}).filter(function(e){return e}):[]},a.getSelectedMenuKeys=function(e){var t=a.props.flatMenuKeys;return(0,v.urlToList)(e).map(function(e){return(0,y.getMenuMatches)(t,e).pop()})},a.getSubMenuOrItem=function(e){if(e.children&&!e.hideChildrenInMenu&&e.children.some(function(e){return e.name})){var t=e.name;return p.default.createElement(M,{title:e.icon?p.default.createElement("span",null,x(e.icon),p.default.createElement("span",null,t)):t,key:e.path},a.getNavMenuItems(e.children))}return p.default.createElement(f.default.Item,{key:e.path},a.getMenuItemPath(e))},a.getMenuItemPath=function(e){var t=e.name,n=a.conversionPath(e.path),l=x(e.icon),o=e.target;if(/^https?:\/\//.test(n))return p.default.createElement("a",{href:n,target:o},l,p.default.createElement("span",null,t));var r=a.props,i=r.location,u=r.isMobile,d=r.onCollapse;return p.default.createElement(m.default,{to:n,target:o,replace:n===i.pathname,onClick:u?function(){d(!0)}:void 0},l,p.default.createElement("span",null,t))},a.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},a.getSelectedMenuKeys=(0,g.default)(a.getSelectedMenuKeys,h.default),a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.openKeys,a=e.theme,n=e.mode,l=e.location.pathname,r=this.getSelectedMenuKeys(l);!r.length&&t&&(r=[t[t.length-1]]);var i={};t&&(i={openKeys:t});var u=this.props,d=u.handleOpenChange,c=u.style,s=u.menuData;return p.default.createElement(f.default,(0,o.default)({key:"Menu",mode:n,theme:a,onOpenChange:d,selectedKeys:r,style:c,className:"horizontal"===n?"top-nav-menu":""},i),this.getNavMenuItems(s))}}]),t}(p.PureComponent);t.default=C},pMM0:function(e,t,a){"use strict";var n=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultCollapsedSubMenus=t.getMenuMatches=t.getFlatMenuKeys=void 0;var l=n(a("UaMt")),o=a("S/9j"),r=function e(t){var a=[];return t.forEach(function(t){a.push(t.path),t.children&&(a=a.concat(e(t.children)))}),a};t.getFlatMenuKeys=r;var i=function(e,t){return e.filter(function(e){return!!e&&(0,l.default)(e).test(t)})};t.getMenuMatches=i;var u=function(e){var t=e.location.pathname,a=e.flatMenuKeys;return(0,o.urlToList)(t).map(function(e){return i(a,e)[0]}).filter(function(e){return e})};t.getDefaultCollapsedSubMenus=u},wWO0:function(e,t,a){"use strict";var n=a("3rQ3"),l=a("xK3H");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a("dnxz")),r=l(a("Sx57")),i=l(a("4zp0")),u=l(a("iVWQ")),d=l(a("lF+r")),c=l(a("PApH")),s=n(a("6cB7")),f=l(a("YTT5")),p=l(a("X5mu")),m=l(a("oFg3")),h=a("pMM0"),g=l(a("JwhZ")),v=function(e){function t(){var e,a;(0,r.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,u.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(l))),a.state={maxWidth:void 0},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=t.contentWidth,l=t.menuData,r=t.logo,i=this.state.maxWidth,u=(0,h.getFlatMenuKeys)(l);return s.default.createElement("div",{className:"".concat(g.default.head," ").concat("light"===a?g.default.light:"")},s.default.createElement("div",{ref:function(t){e.maim=t},className:"".concat(g.default.main," ").concat("Fixed"===n?g.default.wide:"")},s.default.createElement("div",{className:g.default.left},s.default.createElement("div",{className:g.default.logo,key:"logo",id:"logo"},s.default.createElement(f.default,{to:"/"},s.default.createElement("img",{src:r,alt:"logo"}),s.default.createElement("h1",null,"Ant Design Pro"))),s.default.createElement("div",{style:{maxWidth:i}},s.default.createElement(m.default,(0,o.default)({},this.props,{flatMenuKeys:u,style:{border:"none",height:64}})))),s.default.createElement(p.default,this.props)))}}],[{key:"getDerivedStateFromProps",value:function(e){return{maxWidth:("Fixed"===e.contentWidth?1200:window.innerWidth)-280-165-40}}}]),t}(s.PureComponent);t.default=v}}]);