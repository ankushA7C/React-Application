(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{350:function(e,a,t){e.exports=t.p+"static/media/noLocation.ea3e66a1.png"},359:function(e,a,t){e.exports=t(437)},364:function(e,a,t){},365:function(e,a,t){},367:function(e,a,t){},372:function(e,a,t){},376:function(e,a,t){},396:function(e,a,t){},397:function(e,a,t){},437:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),o=(t(364),t(116)),m=t(117),s=t(205),i=t(204),d=(t(365),t(27)),u=t(66),h=t.n(u),f=t(107),p=t(129),y=(Object(p.a)("Location-Data",2,{upgrade:function(e){e.createObjectStore("location")}}),function(){function e(){Object(o.a)(this,e)}return Object(m.a)(e,[{key:"insertValues",value:function(){var e=Object(f.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)("Location-Data",2);case 2:return t=e.sent,e.abrupt("return",t.add("location",a,a.key).then((function(e){return e})));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=Object(f.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)("Location-Data",2);case 2:return a=e.sent,e.abrupt("return",a.getAll("location").then((function(e){return e})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"updateData",value:function(){var e=Object(f.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)("Location-Data",2);case 2:(t=e.sent).put("location",a,a.key).then((function(e){console.log("Updated Data",e)})).catch((function(e){console.error("Failed to Update data: ",e)})),t.close();case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"deleteData",value:function(){var e=Object(f.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)("Location-Data",2);case 2:(t=e.sent).delete("location",a.key).then((function(e){console.log("Data Deleted",e)})).catch((function(e){console.error("Failed to Delte data: ",e)})),t.close();case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}]),e}()),E=(t(367),Object(d.f)((function(e){return l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"row margin-0"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("div",{className:"locationTitle"},"Location")),l.a.createElement("div",{className:"col-md-3 pd-40"},l.a.createElement("div",{className:"addLocation",onClick:function(){return e.history.push("/addLocation")}},"+Add Location"))))}))),g=t(108),b=(t(372),t(439)),v=t(245),N=t.n(v),C=(t(376),t(456)),k=t(89),D=t(313),T=t(315),M=t(241),A=t(314),P=t(235),w=t(236),x=t(346),S=t.n(x),H=Object(b.a)((function(e){return{fz:{fontSize:12},timeZone:{fontSize:12,width:220,paddingTop:4},state:{fontSize:12,width:95,paddingTop:2},appointment:{height:55,marginTop:-10}}}))((function(e){var a=e.classes;return l.a.createElement("div",{className:"col-md-12"},l.a.createElement("div",{className:"form-container"},l.a.createElement("div",{className:"locationForm"},l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{gutterBottom:!0},"Add Locations"),l.a.createElement(C.a,{container:!0,spacing:3},l.a.createElement(C.a,{item:!0,xs:12,sm:12},l.a.createElement(D.a,{required:!0,id:"locationName",name:"locationName",label:"Location Name",fullWidth:!0,autoComplete:"given-name",value:e.locationName,InputLabelProps:{style:{fontSize:12}},inputProps:{style:{fontSize:14}},onChange:e.onChange})),l.a.createElement(C.a,{item:!0,xs:6},l.a.createElement(D.a,{id:"address1",name:"address1",label:"Address line 1",fullWidth:!0,value:e.address1,InputLabelProps:{style:{fontSize:12}},inputProps:{style:{fontSize:14}},onChange:e.onChange})),l.a.createElement(C.a,{item:!0,xs:6},l.a.createElement(D.a,{id:"suitNo",name:"suitNo",label:"Suit No.",fullWidth:!0,value:e.suitNo,InputLabelProps:{style:{fontSize:12}},inputProps:{style:{fontSize:14}},onChange:e.onChange})),l.a.createElement(C.a,{item:!0,xs:6},l.a.createElement(D.a,{id:"address2",name:"address2",label:"Address line 2",fullWidth:!0,value:e.address2,autoComplete:"shipping address-line2",InputLabelProps:{style:{fontSize:12}},inputProps:{style:{fontSize:14}},onChange:e.onChange})),l.a.createElement(C.a,{item:!0,xs:12,sm:3},l.a.createElement(D.a,{id:"city",name:"city",label:"City",fullWidth:!0,value:e.city,InputLabelProps:{style:{fontSize:12}},inputProps:{style:{fontSize:14}},onChange:e.onChange})),l.a.createElement(C.a,{item:!0,xs:12,sm:3},l.a.createElement(w.a,null,l.a.createElement(P.a,{id:"state",className:a.fz},"State"),l.a.createElement(M.a,{filled:!0,labelId:"state",id:"state",name:"state",className:a.state,value:e.state,onChange:e.onChange},l.a.createElement(A.a,{value:"Andhra Pradesh"},"Andhra Pradesh"),l.a.createElement(A.a,{value:"Arunachal Pradesh"},"Arunachal Pradesh"),l.a.createElement(A.a,{value:"Assam"},"Assam"),l.a.createElement(A.a,{value:"Bihar"},"Bihar"),l.a.createElement(A.a,{value:"Chhattisgarh"},"Chhattisgarh"),l.a.createElement(A.a,{value:"Delhi"},"Delhi"),l.a.createElement(A.a,{value:"Goa"},"Goa"),l.a.createElement(A.a,{value:"Gujarat"},"Gujarat"),l.a.createElement(A.a,{value:"Haryana"},"Haryana"),l.a.createElement(A.a,{value:"Himachal Pradesh"},"Himachal Pradesh"),l.a.createElement(A.a,{value:"Jharkhand"},"Jharkhand"),l.a.createElement(A.a,{value:"Karnataka"},"Karnataka"),l.a.createElement(A.a,{value:"Kerala"},"Kerala"),l.a.createElement(A.a,{value:"Madhya Pradesh"},"Madhya Pradesh"),l.a.createElement(A.a,{value:"Maharashtra"},"Maharashtra"),l.a.createElement(A.a,{value:"Manipur"},"Manipur"),l.a.createElement(A.a,{value:"Meghalaya"},"Meghalaya"),l.a.createElement(A.a,{value:"Mizoram"},"Mizoram"),l.a.createElement(A.a,{value:"Nagaland"},"Nagaland"),l.a.createElement(A.a,{value:"Odisha"},"Odisha"),l.a.createElement(A.a,{value:"Punjab"},"Punjab"),l.a.createElement(A.a,{value:"Rajasthan"},"Rajasthan"),l.a.createElement(A.a,{value:"Sikkim"},"Sikkim"),l.a.createElement(A.a,{value:"Tamil Nadu"},"Tamil Nadu"),l.a.createElement(A.a,{value:"Telangana"},"Telangana"),l.a.createElement(A.a,{value:"Tripura"},"Tripura"),l.a.createElement(A.a,{value:"Uttar Pradesh"},"Uttar Pradesh"),l.a.createElement(A.a,{value:"Uttarakhand"},"Uttarakhand"),l.a.createElement(A.a,{value:"West Bengal"},"West Bengal")))),l.a.createElement(C.a,{item:!0,xs:12,sm:3},l.a.createElement(D.a,{id:"zipCode",name:"zipCode",label:"Zip Code",fullWidth:!0,value:e.zipCode,InputLabelProps:{style:{fontSize:12}},inputProps:{maxLength:10},onChange:e.onChange})),l.a.createElement(C.a,{item:!0,xs:12,sm:3},l.a.createElement(D.a,{id:"phoneNumber",name:"phoneNumber",label:"Phone Number",fullWidth:!0,value:e.phoneNumber,InputLabelProps:{style:{fontSize:12}},inputProps:{maxLength:10},onChange:e.onChangeForPhoneNumber})),l.a.createElement(C.a,{item:!0,xs:12,sm:6},l.a.createElement(w.a,null,l.a.createElement(P.a,{id:"timeZone",className:a.fz},"Time Zone"),l.a.createElement(M.a,{filled:!0,labelId:"timeZone",id:"timeZone",name:"timeZone",value:e.timeZone,className:a.timeZone,onChange:e.onChange},e.timeZoneList&&e.timeZoneList.map((function(e,a){return l.a.createElement(A.a,{key:a,value:e},e)}))))),l.a.createElement(C.a,{item:!0,xs:12,sm:6},l.a.createElement(D.a,{id:"facilityTime",name:"facilityTime",label:"Facility Times",fullWidth:!0,value:e.facilityTime,InputLabelProps:{style:{fontSize:12}},inputProps:{style:{fontSize:14}},onChange:e.onChange,onClick:e.handleDialog})),l.a.createElement(C.a,{item:!0,xs:12,sm:6},l.a.createElement(S.a,{label:"Appointment Pool",id:"appPool",name:"appPool",value:e.appPool,className:a.appointment,onChange:function(a){return e.addChipItems(a)}})),l.a.createElement(C.a,{item:!0,xs:12,sm:12},l.a.createElement("div",{className:"buttons"},l.a.createElement("div",{className:"margin-5"},l.a.createElement(T.a,{variant:"contained",color:"secondary",onClick:e.onCancel},"Cancel")),l.a.createElement("div",{className:"margin-5"},l.a.createElement(T.a,{variant:"contained",color:"primary",onClick:e.onSubmit},"Save")))))))))})),j=(t(396),t(458)),O=t(461),z=t(460),_=t(459),L=t(53),B=Object(b.a)((function(e){return{fz:{fontSize:12},timeZone:{fontSize:12,width:220,paddingTop:4},state:{fontSize:12,width:95,paddingTop:2},appointment:{height:55,marginTop:-10}}}))((function(e){e.classes;return l.a.createElement(j.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:e.open,onClose:e.handleDialog},l.a.createElement(_.a,null,"Facility Times"),l.a.createElement(z.a,null,l.a.createElement("div",{className:"facility-Container"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",{className:"table-row"},l.a.createElement("td",{className:"day-Column"}),l.a.createElement("td",{className:"from-Date header-table"},"From"),l.a.createElement("td",{className:"to-Date header-table"},"To"),l.a.createElement("td",{className:"apply-btn"})),l.a.createElement("tr",{className:"table-row",ref:e.ref_sunday},l.a.createElement("td",{className:"day-Column"},l.a.createElement("input",{className:"checkBox-Day",type:"checkbox",id:"sun",name:"check_sunday",value:"Sunday",onClick:e.onCheckBoxClick}),l.a.createElement("label",{className:"dayName"},"Sun")),l.a.createElement("td",{className:"from-Date"},l.a.createElement(L.a,{id:"fromDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(0)},value:e.sunday.fromDate}),l.a.createElement("div",{className:"from-Date-img"},l.a.createElement("div",{className:"am-Time bgc-blue"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-grey"},"PM"))),l.a.createElement("td",{className:"to-Date"},l.a.createElement(L.a,{id:"toDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(0)},value:e.sunday.toDate}),l.a.createElement("div",{className:"to-Date-img"},l.a.createElement("div",{className:"am-Time bgc-grey"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-blue"},"PM"))),l.a.createElement("td",{className:"apply-btn"},l.a.createElement("div",{className:"button-Apply",onClick:function(){return e.onApplyToAll(0)}},"Apply To All Checked"))),l.a.createElement("tr",{className:"table-row margin-25",ref:e.ref_monday},l.a.createElement("td",{className:"day-Column"},l.a.createElement("input",{className:"checkBox-Day",type:"checkbox",id:"mon",name:"check_monday",value:"Monday",onChange:e.onCheckBoxClick}),l.a.createElement("label",{className:"dayName"},"Mon")),l.a.createElement("td",{className:"from-Date"},l.a.createElement(L.a,{id:"fromDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(1)},value:e.monday.fromDate}),l.a.createElement("div",{className:"from-Date-img"},l.a.createElement("div",{className:"am-Time bgc-blue"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-grey"},"PM"))),l.a.createElement("td",{className:"to-Date"},l.a.createElement(L.a,{id:"toDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(1)},value:e.monday.toDate}),l.a.createElement("div",{className:"to-Date-img"},l.a.createElement("div",{className:"am-Time bgc-grey"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-blue"},"PM"))),l.a.createElement("td",{className:"apply-btn"},l.a.createElement("div",{className:"button-Apply",onClick:function(){return e.onApplyToAll(1)}},"Apply To All Checked"))),l.a.createElement("tr",{className:"table-row margin-25",ref:e.ref_tuesday},l.a.createElement("td",{className:"day-Column"},l.a.createElement("input",{className:"checkBox-Day",type:"checkbox",id:"tue",name:"check_tuesday",value:"Tuesday",onChange:e.onCheckBoxClick}),l.a.createElement("label",{className:"dayName"},"Tue")),l.a.createElement("td",{className:"from-Date"},l.a.createElement(L.a,{id:"fromDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(2)},value:e.tuesday.fromDate}),l.a.createElement("div",{className:"from-Date-img"},l.a.createElement("div",{className:"am-Time bgc-blue"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-grey"},"PM"))),l.a.createElement("td",{className:"to-Date"},l.a.createElement(L.a,{id:"toDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(2)},value:e.tuesday.toDate}),l.a.createElement("div",{className:"to-Date-img"},l.a.createElement("div",{className:"am-Time bgc-grey"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-blue"},"PM"))),l.a.createElement("td",{className:"apply-btn"},l.a.createElement("div",{className:"button-Apply",onClick:function(){return e.onApplyToAll(2)}},"Apply To All Checked"))),l.a.createElement("tr",{className:"table-row margin-25",ref:e.ref_wednesday},l.a.createElement("td",{className:"day-Column"},l.a.createElement("input",{className:"checkBox-Day",type:"checkbox",id:"wed",name:"check_wednesday",value:"Wednesday",onChange:e.onCheckBoxClick}),l.a.createElement("label",{className:"dayName"},"Wed")),l.a.createElement("td",{className:"from-Date"},l.a.createElement(L.a,{id:"fromDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(3)},value:e.wednesday.fromDate}),l.a.createElement("div",{className:"from-Date-img"},l.a.createElement("div",{className:"am-Time bgc-blue"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-grey"},"PM"))),l.a.createElement("td",{className:"to-Date"},l.a.createElement(L.a,{id:"toDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(3)},value:e.wednesday.toDate}),l.a.createElement("div",{className:"to-Date-img"},l.a.createElement("div",{className:"am-Time bgc-grey"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-blue"},"PM"))),l.a.createElement("td",{className:"apply-btn"},l.a.createElement("div",{className:"button-Apply",onClick:function(){return e.onApplyToAll(3)}},"Apply To All Checked"))),l.a.createElement("tr",{className:"table-row margin-25",ref:e.ref_thursday},l.a.createElement("td",{className:"day-Column"},l.a.createElement("input",{className:"checkBox-Day",type:"checkbox",id:"thu",name:"check_thursday",value:"Thursday",onChange:e.onCheckBoxClick}),l.a.createElement("label",{className:"dayName"},"Thu")),l.a.createElement("td",{className:"from-Date"},l.a.createElement(L.a,{id:"fromDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(4)},value:e.thursday.fromDate}),l.a.createElement("div",{className:"from-Date-img"},l.a.createElement("div",{className:"am-Time bgc-blue"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-grey"},"PM"))),l.a.createElement("td",{className:"to-Date"},l.a.createElement(L.a,{id:"toDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(4)},value:e.thursday.toDate}),l.a.createElement("div",{className:"to-Date-img"},l.a.createElement("div",{className:"am-Time bgc-grey"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-blue"},"PM"))),l.a.createElement("td",{className:"apply-btn"},l.a.createElement("div",{className:"button-Apply",onClick:function(){return e.onApplyToAll(4)}},"Apply To All Checked"))),l.a.createElement("tr",{className:"table-row margin-25",ref:e.ref_friday},l.a.createElement("td",{className:"day-Column"},l.a.createElement("input",{className:"checkBox-Day",type:"checkbox",id:"fri",name:"check_friday",value:"Friday",onChange:e.onCheckBoxClick}),l.a.createElement("label",{className:"dayName"},"Fir")),l.a.createElement("td",{className:"from-Date"},l.a.createElement(L.a,{id:"fromDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(5)},value:e.friday.fromDate}),l.a.createElement("div",{className:"from-Date-img"},l.a.createElement("div",{className:"am-Time bgc-blue"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-grey"},"PM"))),l.a.createElement("td",{className:"to-Date"},l.a.createElement(L.a,{id:"toDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(5)},value:e.friday.toDate}),l.a.createElement("div",{className:"to-Date-img"},l.a.createElement("div",{className:"am-Time bgc-grey"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-blue"},"PM"))),l.a.createElement("td",{className:"apply-btn"},l.a.createElement("div",{className:"button-Apply",onClick:function(){return e.onApplyToAll(5)}},"Apply To All Checked"))),l.a.createElement("tr",{className:"table-row margin-25",ref:e.ref_saturday},l.a.createElement("td",{className:"day-Column"},l.a.createElement("input",{className:"checkBox-Day",type:"checkbox",id:"sat",name:"check_saturday",value:"Saturday",onChange:e.onCheckBoxClick}),l.a.createElement("label",{className:"dayName"},"Sat")),l.a.createElement("td",{className:"from-Date"},l.a.createElement(L.a,{id:"sat-fromDate",className:"fromDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(6)},value:e.saturday.fromDate}),l.a.createElement("div",{className:"from-Date-img"},l.a.createElement("div",{className:"am-Time bgc-blue"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-grey"},"PM"))),l.a.createElement("td",{className:"to-Date"},l.a.createElement(L.a,{id:"sat-toDate",className:"toDate",format:"##:##",mask:["H","H","M","M"],onChange:function(){return e.onChangeHandler(6)},value:e.saturday.toDate}),l.a.createElement("div",{className:"to-Date-img"},l.a.createElement("div",{className:"am-Time bgc-grey"},"AM"),l.a.createElement("div",{className:"pm-Time bgc-blue"},"PM"))),l.a.createElement("td",{className:"apply-btn"},l.a.createElement("div",{className:"button-Apply",id:"sat",onClick:function(){return e.onApplyToAll(6)}},"Apply To All Checked"))))))),l.a.createElement(O.a,{style:{padding:"20px 28px"}},l.a.createElement(T.a,{variant:"contained",color:"secondary",onClick:e.handleDialog},"Cancel"),l.a.createElement(T.a,{variant:"contained",color:"primary",onClick:e.handleDialog},"Save")))})),Z={locationName:"",address1:"",address2:"",suitNo:"",city:"",state:"",zipCode:"",phoneNumber:"",timeZone:"",facilityTime:"",appPool:[],open:!1,check_sunday:!1,check_monday:!1,check_tuesday:!1,check_wednesday:!1,check_thursday:!1,check_friday:!1,check_saturday:!1,sunday:{fromDate:"",toDate:""},monday:{fromDate:"",toDate:""},tuesday:{fromDate:"",toDate:""},wednesday:{fromDate:"",toDate:""},thursday:{fromDate:"",toDate:""},friday:{fromDate:"",toDate:""},saturday:{fromDate:"",toDate:""},key:(new Date).getTime(),timeZoneList:[]},I=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.onSubmit=function(){""==n.state.locationName?alert("Please fill the form details."):n._db.insertValues(n.state).then((function(e){n.props.history.push("/")}))},n.onCancel=function(){n.setState(Z);var e=N.a.tz.names();n.setState({timeZoneList:e})},n.handleDialog=function(){n.setState({open:!n.state.open})},n.addChipItems=function(e){n.setState({appPool:e})},n.componentDidMount=function(){var e=N.a.tz.names();n.setState({timeZoneList:e,key:n.props.dbKey})},n.onChangeForPhoneNumber=function(e){var a=e.target.value.replace(/[^0-9]/g,"");if(a.length<10)n.setState({phoneNumber:a});else if(10===a.length){var t=a.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3");n.setState({phoneNumber:t})}},n.onApplyToAll=function(e){var a=[n.sunday,n.monday,n.tuesday,n.wednesday,n.thursday,n.friday,n.saturday],t=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];t.map((function(l,r){var c="check_"+l;n.state[c]&&n.setState(Object(g.a)({},t[r],{fromDate:a[e].current.childNodes[1].firstChild.value,toDate:a[e].current.childNodes[2].firstChild.value}))}))},n.onChangeHandler=function(e){var a=[n.sunday,n.monday,n.tuesday,n.wednesday,n.thursday,n.friday,n.saturday],t=a[e].current.childNodes[1].firstChild.value,l=a[e].current.childNodes[2].firstChild.value;t.substring(0,2)>24||t.substring(3)>60||l.substring(0,2)>24||l.substring(3)>60?alert("Please Enter Valid Time"):n.setState(Object(g.a)({},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][e],{fromDate:t,toData:l}))},n.onCheckBoxClick=function(e){n.setState(Object(g.a)({},e.target.name,!n.state[e.target.name]))},n._db=new y,n.state=Z,n.sunday=l.a.createRef(),n.monday=l.a.createRef(),n.tuesday=l.a.createRef(),n.wednesday=l.a.createRef(),n.thursday=l.a.createRef(),n.friday=l.a.createRef(),n.saturday=l.a.createRef(),n}return Object(m.a)(t,[{key:"render",value:function(){this.props.classes;return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,Object.assign({},this.state,{key:"1",onChange:this.onChange,onSubmit:this.onSubmit,onCancel:this.onCancel,handleDialog:this.handleDialog,onChangeForPhoneNumber:this.onChangeForPhoneNumber,addChipItems:this.addChipItems})),l.a.createElement(B,Object.assign({},this.state,{key:"2",handleDialog:this.handleDialog,onCheckBoxClick:this.onCheckBoxClick,onChangeHandler:this.onChangeHandler,onApplyToAll:this.onApplyToAll,ref_sunday:this.sunday,ref_monday:this.monday,ref_tuesday:this.tuesday,ref_wednesday:this.wednesday,ref_thursday:this.thursday,ref_friday:this.friday,ref_saturday:this.saturday})))}}]),t}(l.a.Component),W=Object(b.a)((function(e){return{fz:{fontSize:12},timeZone:{fontSize:12,width:220,paddingTop:4},state:{fontSize:12,width:95,paddingTop:2},appointment:{height:55,marginTop:-10}}}))(I),F=t(247),R=t(83),K=t(351),U=(t(397),t(238)),G=t.n(U),J=t(350),$=t.n(J);var V=function(e){var a=l.a.useState({columns:[{title:"Location Name",field:"locationName"},{title:"Address",field:"address1"},{title:"Phone No",field:"phoneNumber"}],data:[]}),t=Object(K.a)(a,2),r=t[0],c=t[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){e.idb.getData().then((function(e){c(Object(R.a)(Object(R.a)({},r),{},{data:e}))}))};return l.a.createElement("div",{className:"col-md-12"},!r.data.length&&l.a.createElement("div",{className:"noLocation"},l.a.createElement("img",{src:$.a,className:"noLocation-img"})),r.data.length>0&&l.a.createElement(G.a,{title:"Location",options:{search:!1,actionsColumnIndex:-1,headerStyle:{fontSize:"14px",fontWeight:"700"},tbodyStyle:{backgroundColor:"black"},rowStyle:{backgroundColor:"#EEE"}},columns:r.columns,data:r.data,editable:{onRowUpdate:function(a,t){return new Promise((function(n){setTimeout((function(){var l;t.tableData.id;n(),t&&(c((function(e){var n=Object(F.a)(e.data);return n[n.indexOf(t)]=a,Object(R.a)(Object(R.a)({},e),{},{data:n})})),l=a,e.idb.updateData(l))}),600)}))},onRowDelete:function(a){return new Promise((function(t){setTimeout((function(){var n=a.tableData.id;t(),c((function(e){var t=Object(F.a)(e.data);return t.splice(t.indexOf(a),1),Object(R.a)(Object(R.a)({},e),{},{data:t})})),function(a){e.idb.deleteData(r.data[a])}(n)}),600)}))}}}))},q=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e))._db=new y,n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row bg-grey margin-0 main-Containerr"},l.a.createElement(E,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",render:function(a){return l.a.createElement(V,Object.assign({idb:e._db},a))}}),l.a.createElement(d.a,{exact:!0,path:"/addLocation",render:function(e){return l.a.createElement(W,Object.assign({dbKey:(new Date).getTime()},e))}})))}}]),t}(l.a.Component),Q=t(183);var X=function(){return l.a.createElement(Q.a,null,l.a.createElement(d.a,{path:"/",component:q}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[359,1,2]]]);
//# sourceMappingURL=main.370ce780.chunk.js.map