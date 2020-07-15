(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/profile.b52b3817.jpg"},27:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(24),c=a.n(o),r=a(12),l=a(13),s=a(15),m=a(14),d=a(10),u=a(2),h=a(7),p=a(9),E=(a(36),a(16)),v=[{title:"Cone Peak via Highway 1",location:"Big Sur, CA",route:"/backpacking/cone-peak"},{title:"Yosemite National Park via Chiquito Trailhead",location:"Bass Lake, CA",route:"/backpacking/yosemite"},{title:"Death Valley & Telescope Peak",location:"Inyo County, CA",route:"/backpacking/telescope"},{title:"Humboldt Peak via South Colony Lakes Trailhead",location:"Westcliffe, CO",route:"/backpacking/humboldt"},{title:"Franconia Ridge & Thirteen Falls",location:"Lincon, NH",route:"/backpacking/franconia-ridge"}],f=[{title:"Project 1",route:"/projects/project-1"}],b=(a(37),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={opened:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.opened?"opened":"";return i.a.createElement("div",{className:"nav-header-container"},i.a.createElement("span",{className:"nav-header"},this.props.children?i.a.createElement(h.a,{className:"nav-header-icon ".concat(t),icon:p.b,onClick:function(){return e.setState({opened:!e.state.opened})}}):i.a.createElement("span",null),i.a.createElement(d.b,{to:this.props.to},this.props.title)),this.props.children?i.a.createElement("div",{className:"nav-content ".concat(t)},this.props.children):i.a.createElement("div",null))}}]),a}(i.a.Component));function k(e){return i.a.createElement("div",{className:"nav-item"},i.a.createElement(d.b,{className:"no-underline hover",to:e.to},e.children))}function w(e,t){return e.sort((function(e,t){return e.title.localeCompare(t.title)})),e.map((function(e){return i.a.createElement(k,{to:e.route},e.title)}))}var g=function(e){return i.a.createElement("nav",{className:e.show?" show":"",id:"site-nav"},i.a.createElement("div",{id:"nav-container",className:e.mobile?"mobile":""},i.a.createElement(b,{to:"/",title:"Home"}),i.a.createElement(b,{to:"/projects",title:"Projects"},w(f)),i.a.createElement(b,{to:"/backpacking",title:"Backpacking"},w(v))),i.a.createElement("div",{id:"contact-container"},i.a.createElement("a",{href:"https://linkedin.com/in/jack-rademacher",className:"icon-link social-media-link"},i.a.createElement(h.a,{icon:E.c})),i.a.createElement("a",{href:"mailto:jackradema@gmail.com",className:"icon-link social-media-link"},i.a.createElement(h.a,{icon:p.c})),i.a.createElement("a",{href:"https://www.instagram.com/jrad66/?hl=en",className:"icon-link social-media-link"},i.a.createElement(h.a,{icon:E.b})),i.a.createElement("a",{href:"https://github.com/jcrademacher",className:"icon-link social-media-link"},i.a.createElement(h.a,{icon:E.a}))))},y=(a(40),a(26)),N=a.n(y);var j=function(){return i.a.createElement("div",{id:"home"},i.a.createElement("img",{id:"profile",src:N.a}),i.a.createElement("br",null),i.a.createElement("h3",null,"Hi, my name is Jack Rademacher and I'm a student at the University of Michigan studying Electrical Engineering."),i.a.createElement("p",null,"I built this site to showcase my projects and backpacking trips. My electronics interests include RF & microwave, mixed signal processing, and IC design, although I don't have many builds in those fields yet. During my free time I design hardware & software to do cool stuff, often times with those awesome ",i.a.createElement("a",{href:"https://cdn-shop.adafruit.com/datasheets/WS2812.pdf"},"WS2812 RGB LEDs")," and",i.a.createElement("a",{href:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html"}," STM32 microcontrollers"),". Many of my projects are printed circuit board (PCB) based, as it is an easy, affordable, and reliable way to consolidate circuitry and buttons or dials."))};var C=function(){return i.a.createElement("div",null,"Coming soon!")};var S=function(){return i.a.createElement("div",null,"Coming soon!")},O=(a(41),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).updateDimensions=function(){var e=n.state.showNav,t=n.state.mobile;window.innerWidth>800?(t=!1,e=!0):(t=!0,e=!1),n.setState({mobile:t,showNav:e,width:window.innerWidth,height:window.innerHeight})},n.state={mobile:window.innerWidth<800,showNav:window.innerWidth>800,width:window.innerWidth,height:window.innerHeight},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this;return i.a.createElement(d.a,null,i.a.createElement("div",{id:"site-container"},i.a.createElement("div",{id:"site-header",className:this.state.mobile?"mobile":""},i.a.createElement("a",{onClick:function(){return e.setState({showNav:!e.state.showNav})},className:"icon-link"},i.a.createElement(h.a,{icon:p.a,className:"burger ".concat(this.state.showNav?"rotate":"")}))),i.a.createElement(g,{show:this.state.showNav,mobile:this.state.mobile}),i.a.createElement("div",{onClick:function(){return e.setState({showNav:!e.state.mobile||!1})},id:"site-content",className:this.state.mobile?"mobile":""},i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/projects"},i.a.createElement(C,null)),i.a.createElement(u.a,{path:"/backpacking"},i.a.createElement(S,null)),i.a.createElement(u.a,{path:"/"},i.a.createElement(j,null))))))}}]),a}(i.a.Component));a(42);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6fb999dc.chunk.js.map