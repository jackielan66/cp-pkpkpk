(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{WN3O:function(e,t,a){e.exports={standardList:"antd-pro\\pages\\-list\\-basic-list-standardList",headerInfo:"antd-pro\\pages\\-list\\-basic-list-headerInfo",listContent:"antd-pro\\pages\\-list\\-basic-list-listContent",listContentItem:"antd-pro\\pages\\-list\\-basic-list-listContentItem",extraContentSearch:"antd-pro\\pages\\-list\\-basic-list-extraContentSearch",listCard:"antd-pro\\pages\\-list\\-basic-list-listCard",standardListForm:"antd-pro\\pages\\-list\\-basic-list-standardListForm",formResult:"antd-pro\\pages\\-list\\-basic-list-formResult"}},w9uU:function(e,t,a){"use strict";var l=a("xK3H"),n=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a8wg");var r=l(a("piM7"));a("AJl0");var d=l(a("NCeX"));a("f1fJ");var u=l(a("oQ5n"));a("1eg1");var i=l(a("P1QG"));a("hCtM");var s=l(a("HfpZ"));a("D3Dd");var o=l(a("0z3b")),f=l(a("dnxz"));a("WyXx");var c=l(a("ELQk"));a("Xyr4");var m=l(a("HxG/"));a("ml1M");var p=l(a("y9aw"));a("1ami");var E=l(a("4CXy"));a("uFI8");var v=l(a("D2Nv"));a("jmSW");var h=l(a("qJhD")),b=l(a("SeLb")),y=l(a("Sx57")),g=l(a("4zp0")),w=l(a("iVWQ")),C=l(a("lF+r")),x=l(a("PApH"));a("w+sc");var S=l(a("IwyX"));a("Ouj0");var I=l(a("gB3Y"));a("Zlro");var D=l(a("AIdN"));a("guZL");var k,N,L,M=l(a("y2Hr")),A=n(a("6cB7")),H=a("VUem"),O=l(a("I9Uw")),T=a("LneV"),Y=l(a("zHco")),z=l(a("ALo4")),B=l(a("WN3O")),V=M.default.Item,F=D.default.Button,J=D.default.Group,Q=I.default.Option,W=S.default.Search,q=S.default.TextArea,X=(k=(0,T.connect)(function(e){var t=e.list,a=e.loading;return{list:t,loading:a.models.list}}),N=M.default.create(),k(L=N(L=function(e){function t(){var e,a;(0,y.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,w.default)(this,(e=(0,C.default)(t)).call.apply(e,[this].concat(n))),a.state={visible:!1,done:!1},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0})},a.showEditModal=function(e){a.setState({visible:!0,current:e})},a.handleDone=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({done:!1,visible:!1})},a.handleCancel=function(){setTimeout(function(){return a.addBtn.blur()},0),a.setState({visible:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,l=t.dispatch,n=t.form,r=a.state.current,d=r?r.id:"";setTimeout(function(){return a.addBtn.blur()},0),n.validateFields(function(e,t){e||(a.setState({done:!0}),l({type:"list/submit",payload:(0,b.default)({id:d},t)}))})},a.deleteItem=function(e){var t=a.props.dispatch;t({type:"list/submit",payload:{id:e}})},a}return(0,x.default)(t,e),(0,g.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"list/fetch",payload:{count:5}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.list.list,l=t.loading,n=this.props.form.getFieldDecorator,b=this.state,y=b.visible,g=b.done,w=b.current,C=void 0===w?{}:w,x=function(t,a){"edit"===t?e.showEditModal(a):"delete"===t&&h.default.confirm({title:"\u5220\u9664\u4efb\u52a1",content:"\u786e\u5b9a\u5220\u9664\u8be5\u4efb\u52a1\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return e.deleteItem(a.id)}})},D=g?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},k=function(e){var t=e.title,a=e.value,l=e.bordered;return A.default.createElement("div",{className:B.default.headerInfo},A.default.createElement("span",null,t),A.default.createElement("p",null,a),l&&A.default.createElement("em",null))},N=A.default.createElement("div",{className:B.default.extraContent},A.default.createElement(J,{defaultValue:"all"},A.default.createElement(F,{value:"all"},"\u5168\u90e8"),A.default.createElement(F,{value:"progress"},"\u8fdb\u884c\u4e2d"),A.default.createElement(F,{value:"waiting"},"\u7b49\u5f85\u4e2d")),A.default.createElement(W,{className:B.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),L={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},T=function(e){var t=e.data,a=t.owner,l=t.createdAt,n=t.percent,r=t.status;return A.default.createElement("div",{className:B.default.listContent},A.default.createElement("div",{className:B.default.listContentItem},A.default.createElement("span",null,"Owner"),A.default.createElement("p",null,a)),A.default.createElement("div",{className:B.default.listContentItem},A.default.createElement("span",null,"\u5f00\u59cb\u65f6\u95f4"),A.default.createElement("p",null,(0,O.default)(l).format("YYYY-MM-DD HH:mm"))),A.default.createElement("div",{className:B.default.listContentItem},A.default.createElement(v.default,{percent:n,status:r,strokeWidth:6,style:{width:180}})))},X=function(e){return A.default.createElement(m.default,{overlay:A.default.createElement(E.default,{onClick:function(t){var a=t.key;return x(a,e.current)}},A.default.createElement(E.default.Item,{key:"edit"},"\u7f16\u8f91"),A.default.createElement(E.default.Item,{key:"delete"},"\u5220\u9664"))},A.default.createElement("a",null,"\u66f4\u591a ",A.default.createElement(p.default,{type:"down"})))},P=function(){return g?A.default.createElement(z.default,{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:A.default.createElement(c.default,{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:B.default.formResult}):A.default.createElement(M.default,{onSubmit:e.handleSubmit},A.default.createElement(V,(0,f.default)({label:"\u4efb\u52a1\u540d\u79f0"},e.formLayout),n("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}],initialValue:C.title})(A.default.createElement(S.default,{placeholder:"\u8bf7\u8f93\u5165"}))),A.default.createElement(V,(0,f.default)({label:"\u5f00\u59cb\u65f6\u95f4"},e.formLayout),n("createdAt",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4"}],initialValue:C.createdAt?(0,O.default)(C.createdAt):null})(A.default.createElement(o.default,{showTime:!0,placeholder:"\u8bf7\u9009\u62e9",format:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}}))),A.default.createElement(V,(0,f.default)({label:"\u4efb\u52a1\u8d1f\u8d23\u4eba"},e.formLayout),n("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4efb\u52a1\u8d1f\u8d23\u4eba"}],initialValue:C.owner})(A.default.createElement(I.default,{placeholder:"\u8bf7\u9009\u62e9"},A.default.createElement(Q,{value:"\u4ed8\u6653\u6653"},"\u4ed8\u6653\u6653"),A.default.createElement(Q,{value:"\u5468\u6bdb\u6bdb"},"\u5468\u6bdb\u6bdb")))),A.default.createElement(V,(0,f.default)({},e.formLayout,{label:"\u4ea7\u54c1\u63cf\u8ff0"}),n("subDescription",{rules:[{message:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26\u7684\u4ea7\u54c1\u63cf\u8ff0\uff01",min:5}],initialValue:C.subDescription})(A.default.createElement(q,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"}))))};return A.default.createElement(Y.default,null,A.default.createElement("div",{className:B.default.standardList},A.default.createElement(u.default,{bordered:!1},A.default.createElement(i.default,null,A.default.createElement(s.default,{sm:8,xs:24},A.default.createElement(k,{title:"\u6211\u7684\u5f85\u529e",value:"8\u4e2a\u4efb\u52a1",bordered:!0})),A.default.createElement(s.default,{sm:8,xs:24},A.default.createElement(k,{title:"\u672c\u5468\u4efb\u52a1\u5e73\u5747\u5904\u7406\u65f6\u95f4",value:"32\u5206\u949f",bordered:!0})),A.default.createElement(s.default,{sm:8,xs:24},A.default.createElement(k,{title:"\u672c\u5468\u5b8c\u6210\u4efb\u52a1\u6570",value:"24\u4e2a\u4efb\u52a1"})))),A.default.createElement(u.default,{className:B.default.listCard,bordered:!1,title:"\u6807\u51c6\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:N},A.default.createElement(c.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus",onClick:this.showModal,ref:function(t){e.addBtn=(0,H.findDOMNode)(t)}},"\u6dfb\u52a0"),A.default.createElement(r.default,{size:"large",rowKey:"id",loading:l,pagination:L,dataSource:a,renderItem:function(t){return A.default.createElement(r.default.Item,{actions:[A.default.createElement("a",{onClick:function(a){a.preventDefault(),e.showEditModal(t)}},"\u7f16\u8f91"),A.default.createElement(X,{current:t})]},A.default.createElement(r.default.Item.Meta,{avatar:A.default.createElement(d.default,{src:t.logo,shape:"square",size:"large"}),title:A.default.createElement("a",{href:t.href},t.title),description:t.subDescription}),A.default.createElement(T,{data:t}))}}))),A.default.createElement(h.default,(0,f.default)({title:g?null:"\u4efb\u52a1".concat(C?"\u7f16\u8f91":"\u6dfb\u52a0"),className:B.default.standardListForm,width:640,bodyStyle:g?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:y},D),P()))}}]),t}(A.PureComponent))||L)||L),P=X;t.default=P}}]);