(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0274":function(e,t,s){},"02e6":function(e,t,s){e.exports=s.p+"img/member5B.909a28b9.png"},"034f":function(e,t,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},"0474":function(e,t,s){e.exports=s.p+"img/member1.2e2b4123.png"},"0ac5":function(e,t,s){e.exports=s.p+"img/member4.4354b32b.png"},"1f4b":function(e,t,s){e.exports=s.p+"img/member3.2a812cfd.png"},2290:function(e,t,s){"use strict";var a=s("b87d"),n=s.n(a);n.a},"2ae8":function(e,t,s){e.exports=s.p+"img/LinkedIn.082fab82.svg"},"30a8":function(e,t,s){e.exports=s.p+"img/step2.12635c82.svg"},"3b72":function(e,t,s){e.exports=s.p+"img/step1.0b3dff5e.svg"},"3d6c":function(e,t,s){"use strict";var a=s("0274"),n=s.n(a);n.a},"3f10":function(e,t,s){e.exports=s.p+"img/webDecorAbout.3438ba0a.svg"},"54c6":function(e,t,s){e.exports=s.p+"img/member5.909a28b9.png"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"body"},[s("navBar"),s("router-view")],1)},i=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("nav",{staticClass:"navigation container"},[s("header",[s("router-link",{attrs:{to:{name:"Home"}}},[s("img",{staticClass:"logo",attrs:{src:e.logo,alt:"6ixplore - Discover locally, instantly"}})])],1),s("router-link",{staticClass:"skip-nav",attrs:{to:"#skip-content"}},[s("p",[e._v("Skip navigation")])]),e._l(e.navLinks,(function(t){return[s("router-link",{key:t,attrs:{to:{name:t}}},[e._v(e._s(t))])]})),s("navModal")],2)])},o=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"nav-menu"},[s("button",{on:{click:e.toggleModal}},[s("img",{staticClass:"nav-burger",attrs:{src:e.isOpen?e.closeIcon:e.burgerIcon,alt:e.isOpen?"Close Navigation":"Open Navigation",role:"navigation"}})]),e.isOpen?s("div",{staticClass:"nav-modal"},[e._l(e.navLinks,(function(t){return[s("router-link",{key:t,attrs:{to:{name:t}}},[e._v(e._s(t))])]}))],2):e._e()])])},l=[],u=s("6860"),d=s.n(u),m=s("ceb4"),p=s.n(m),v={data:function(){return{navLinks:["Home","About","Join"],burgerIcon:d.a,closeIcon:p.a,isOpen:!1}},methods:{toggleModal:function(){this.isOpen=!this.isOpen}}},h=v,f=(s("b314"),s("2877")),g=Object(f["a"])(h,c,l,!1,null,"1a7b4ddb",null),b=g.exports,_=s("ef6c"),y=s.n(_),C=s("9b19"),w=s.n(C),k={data:function(){return{webDecorHome:y.a,logo:w.a,navLinks:["Home","About","Join"],browserBreakPoint:"".concat(768,"px")}},components:{navModal:b}},x=k,O=(s("2290"),Object(f["a"])(x,r,o,!1,null,"ae78aa0a",null)),E=O.exports,I={components:{navBar:E}},j=I,$=(s("034f"),Object(f["a"])(j,n,i,!1,null,null,null)),S=$.exports,T=s("8c4f"),A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("img",{staticClass:"decor-home",attrs:{src:e.webDecorHome,alt:""}}),s("main",{staticClass:"hero"},[s("div",{staticClass:"content"},[s("h1",[e._v("Discover locally, instantly")]),s("p",{staticClass:"secondary-text"},[e._v(" We will help you discover experiences that you’ve missed at places perfectly suited to your mood, palate and pocket. ")]),s("img",{staticClass:"illustration-person",attrs:{src:e.illustrationPerson,alt:""}}),s("div",{staticClass:"CTA"},[e._m(0),s("router-link",{attrs:{to:{name:"About"}}},[s("button",{attrs:{role:"button"}},[e._v("Find Out More")])])],1)])]),e._m(1),s("Features"),e._m(2),s("p",{staticClass:"credits"},[s("img",{attrs:{src:e.copyrightIcon,alt:""}}),e._v(" Copyright 6ixplore 2020 ")])],1)},D=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("strong",[e._v("Curious About Our Team?")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{attrs:{id:"skip-content"}},[s("h3",[e._v("An experience led to an idea")]),s("p",{staticClass:"secondary-text"},[e._v(" It all started when a university student began looking for taste experiences that matched the pocket. ")]),s("p",{staticClass:"story-text"},[e._v(" What started off as an individual quest to discover the hidden gems of Toronto, turned into a mission to create a platform designed to support our local businesses. Toronto - the “6ix” - has a wealth of spots that serve up food or beverage or cultural or entertainment experiences that one would easily overlook and walk past, simply because it was not in plain sight or one did not know about it. This little bit of technology connects your tastes with an experience that matches your pocket, instantly. ")]),s("p",{staticClass:"story-text"},[e._v(" While interacting with several unique independent establishments around the city, we learned about their struggles to stay open with soaring rent prices and competition from franchises offering cut-price deals. We decided to create an equalizer on a platform where local restaurateurs can overcome these obstacles and be discovered by foodies that might have overlooked them. ")]),s("p",{staticClass:"story-text"},[e._v(" Discover experiences that you’ve missed, and pick places that are perfectly suited to your pocket, mood and your taste-buds. ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h3",[e._v("Milestones")]),s("p",{staticClass:"secondary-text"},[e._v("A tour of our progress!")]),s("h4",[e._v("Currently Incubating... Stay tuned!")])])}],L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("h3",[e._v("Our Features")]),s("div",{staticClass:"modal"},[s("img",{staticClass:"img-1",attrs:{src:e.step1,alt:"Benefit for Customers"}}),s("h3",{staticClass:"heading-1"},[e._v(" For our customers, we want to highlight our core benefits: ")]),s("div",{staticClass:"list-1"},e._l(e.customerBenefitsList,(function(t){return s("ul",{key:t},[s("li",[e._v(e._s(t))])])})),0),s("img",{staticClass:"img-2",attrs:{src:e.step2,alt:"Benefit for Businesses"}}),s("h3",{staticClass:"heading-2"},[e._v("For businesses, this means:")]),s("div",{staticClass:"list-2"},e._l(e.businessBenefitsList,(function(t){return s("ul",{key:t},[s("li",[e._v(e._s(t))])])})),0)])])},M=[],B=s("3b72"),P=s.n(B),W=s("30a8"),H=s.n(W),F={name:"Features",data:function(){return{step1:P.a,step2:H.a,customerBenefitsList:["Discover more in the city you knew","Get better deals for every repeat visit","Plan and share experiences with friends"],businessBenefitsList:["Getting new clients / customers","Keeping your clients / customers","No upfront charges, only commitment"]}}},J=F,U=(s("d632"),Object(f["a"])(J,L,M,!1,null,"71b2d5d1",null)),q=U.exports,K=s("c1b9"),N=s.n(K),X=s("7b06"),V=s.n(X),z={name:"Home",data:function(){return{webDecorHome:y.a,illustrationPerson:N.a,copyrightIcon:V.a}},components:{Features:q}},G=z,R=(s("a00f"),Object(f["a"])(G,A,D,!1,null,"956e1624",null)),Y=R.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("img",{staticClass:"decor-about",attrs:{src:e.webDecorAbout,alt:""}}),e._m(0),s("section",[s("h3",[e._v("Meet Our Team")]),s("div",{staticClass:"gallery"},[s("div",{staticClass:"member1"},[s("div",{staticClass:"info"},[s("img",{staticClass:"headshot",attrs:{src:e.member1,alt:""}}),e._m(1)]),s("p",[e._v(" Saideep is a budding student entrepreneur who is taking his venture live in 2020. He has nurtured his idea for over 2 and a half years since when he came to the beautiful city of Toronto from India. The team, assembled from scratch, has readied the delivery platform for launch. Equal importance is given to team chemistry and to team productivity. The values of empathy and diversity are as dear to Saideep as are his ambition and commitment. ")])]),s("div",{staticClass:"member2"},[s("div",{staticClass:"info"},[s("img",{staticClass:"headshot",attrs:{src:e.member2,alt:""}}),e._m(2)]),s("p",[e._v(" Clayon is a recent UofT graduate whose passion lies in enhancing the student experience. Using the knowledge he gained from his B.Comm degree in Accounting, Clayon is responsible for the design and implementation of the accounting, legal, and charity frameworks of the organization. Having come to Canada within the last few years, he hopes everyone is able to explore the diverse cuisines available just as much as he has! ")])]),s("div",{staticClass:"member3"},[s("div",{staticClass:"info"},[s("img",{staticClass:"headshot",attrs:{src:e.member3,alt:""}}),e._m(3)]),s("p",[e._v(" A lifelong learner at heart, Maureen is a Kinesiology-student turned front-end developer and UI/UX designer. She is responsible for the interface design, as well as this website! From her degree, she uses her soft-skills, ethical considerations, and understanding of the way people learn to enhance digital experiences. She is interested in responsive web design, accessibility, SEO, and graphic design. ")])]),s("div",{staticClass:"member4"},[s("div",{staticClass:"info"},[s("img",{staticClass:"headshot",attrs:{src:e.member4,alt:""}}),e._m(4)]),s("p",[e._v(" With her master’s degree in psychology and knowledge in UX, Kay brings a genuine curiosity and keen eye for detail in the research and design of our product to ensure it meets our user’s needs. As the lead researcher, she meticulously ensures that our users come first while achieving our business’ objectives. With her versatile skills, she is a true team player as she also lends a hand to our social media and HR as we actively grow our company. ")])]),s("div",{staticClass:"member5"},[s("div",{staticClass:"info"},[s("img",{staticClass:"headshot",attrs:{src:e.member5,alt:""}}),e._m(5)]),s("p",[e._v(" Minh is a Minimum Viable Product (MVP) developer with a passion for good code, focused on efficiency, and a love for new projects. ")])]),s("div",{staticClass:"member5B"},[s("div",{staticClass:"info"},[s("img",{staticClass:"headshot",attrs:{src:e.member5B,alt:""}}),e._m(6)]),s("p",[e._v("N/A")])]),s("div",{staticClass:"member5C"},[s("div",{staticClass:"info"},[s("img",{staticClass:"headshot",attrs:{src:e.member5C,alt:""}}),e._m(7)]),s("p",[e._v(" Shirley is a skilled and versatile software developer with more than two years of professional experience in working with business owners owners and clients to deliver high-quality, well-tested software applications. She is always learning and looking to use her skills to contribute to the community. ")])])])]),e._m(8),s("p",{staticClass:"credits"},[s("img",{attrs:{src:e.copyrightIcon,alt:""}}),e._v(" Copyright 6ixplore 2020 ")])])},Z=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{staticClass:"body-text",attrs:{id:"skip-nav"}},[s("h1",[e._v("About Us")]),s("p",{staticClass:"secondary-text"},[e._v(" We are a team full of dynamic individuals determined to make a positive impact for our local restaurants. ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"name-and-title"},[s("h4",[e._v("Saideep Kumar")]),s("p",{staticClass:"title"},[e._v("Founder and CEO")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"name-and-title"},[s("h4",[e._v("Clayon Levy")]),s("p",{staticClass:"title"},[e._v("Operations Coordinator")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"name-and-title"},[s("h4",[e._v("Maureen T'o")]),s("p",{staticClass:"title"},[e._v("UI/UX Designer")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"name-and-title"},[s("h4",[e._v("Kay Otsubo")]),s("p",{staticClass:"title"},[e._v("UX Researcher")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"name-and-title"},[s("h4",[e._v("Minh Huynh")]),s("p",{staticClass:"title"},[e._v("iOS Developer")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"name-and-title"},[s("h4",[e._v("Timothy Samson")]),s("p",{staticClass:"title"},[e._v("Strategy")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"name-and-title"},[s("h4",[e._v("Shirley Xia")]),s("p",{staticClass:"title"},[e._v("Full-stack Developer")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h3",[e._v("Our Values")]),s("div",{staticClass:"value-grid"},[s("div",{staticClass:"speed"},[s("h4",[e._v("Speed")]),s("p",[e._v(" The foundation for the work we do lies in looking for novel and disruptive solutions, ")])]),s("div",{staticClass:"adaptable"},[s("h4",[e._v("Adaptable")]),s("p",[e._v(" One of our biggest strengths is our ability to adapt to a rapidly changing climate and stay ahead of the curve, ")])]),s("div",{staticClass:"commitment"},[s("h4",[e._v("Commitment")]),s("p",[e._v(" Our team is transparent and we will always stand by our word with our customers, partners and each other, ")])]),s("div",{staticClass:"innovation"},[s("h4",[e._v("Innovation")]),s("p",[e._v(" The foundation for the work we do lies in looking for novel and disruptive solutions, ")])]),s("div",{staticClass:"community"},[s("h4",[e._v("Community")]),s("p",[e._v(" We are committed to making a positive impact in our community and giving back every step of the way ")])])])])}],ee=s("3f10"),te=s.n(ee),se=s("0474"),ae=s.n(se),ne=s("9547"),ie=s.n(ne),re=s("1f4b"),oe=s.n(re),ce=s("0ac5"),le=s.n(ce),ue=s("54c6"),de=s.n(ue),me=s("02e6"),pe=s.n(me),ve=s("80b7"),he=s.n(ve),fe={name:"About",data:function(){return{webDecorAbout:te.a,member1:ae.a,member2:ie.a,member3:oe.a,member4:le.a,member5:de.a,member5B:pe.a,member5C:he.a,copyrightIcon:V.a}}},ge=fe,be=(s("3d6c"),Object(f["a"])(ge,Q,Z,!1,null,"b2ddfe98",null)),_e=be.exports,ye=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("img",{staticClass:"decor-join",attrs:{src:e.webDecorJoin,alt:""}}),e._m(0),s("section",{staticClass:"container"},[s("h3",[e._v("We're Looking For:")]),s("div",{staticClass:"list-1"},e._l(e.criteriaList,(function(t){return s("ul",{key:t},[s("li",[e._v(e._s(t))])])})),0),s("p",{staticClass:"secondary-text"},[e._v(" For specific job positions, visit our LinkedIn first ")]),s("a",{attrs:{href:"https://www.linkedin.com/company/6ixplore/about/",target:"_blank",alt:"Open new window"}},[s("img",{staticClass:"linkedin-profile",attrs:{src:e.LinkedIn,alt:"Visit 6ixplore LinkedIn"}})])]),e._m(1),s("p",{staticClass:"credits"},[s("img",{attrs:{src:e.copyrightIcon,alt:""}}),e._v(" Copyright 6ixplore 2020 ")])])},Ce=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{staticClass:"body-text",attrs:{id:"skip-nav"}},[s("h1",[e._v("Join Us")]),s("p",{staticClass:"secondary-text"},[e._v(" Do you want to "),s("strong",[e._v("create a new customer experience")]),e._v(" and "),s("strong",[e._v("give back to your community")]),e._v(" at the same time? Join us to make an impact and enhance your skill-set, whether it's in tech, human resources, networking, or user experience research, "),s("strong",[e._v("you'll find a place here!")])]),s("blockquote",[s("p",[e._v("We are ambitious & empathetic.")]),s("p",[e._v("We are friendly & committed.")]),s("p",[e._v("We are are diverse & united.")]),s("p",[e._v("We are all about teamwork.")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"container"},[s("h3",[e._v("How To Apply")]),s("p",{staticClass:"secondary-text"},[e._v(" Please send a copy of your resume to apply! Do add a short description of the "),s("strong",[e._v("experience you'd like to gain")]),e._v(", "),s("strong",[e._v("what you'll provide")]),e._v(", and "),s("strong",[e._v("role you're interested in")]),e._v("! ")]),s("p",{staticClass:"secondary-text"},[e._v("General Address: ---")]),s("p",{staticClass:"secondary-text"},[s("strong",[e._v("NOTE:")]),e._v(" We do not discriminate based on age, gender, sex, or any religious or cultural values. We strive to be and have always been a team of diverse individuals from various backgrounds, and we carry that forward into our hiring process. ")]),s("p",{staticClass:"secondary-text"},[e._v(" Thank you for applying! You’ll hear back from us in a couple days. ")])])}],we=s("b2d4"),ke=s.n(we),xe=s("2ae8"),Oe=s.n(xe),Ee={name:"Join",data:function(){return{webDecorJoin:ke.a,criteriaList:["Self-starters","Those who have the ability to adapt to change","Individuals with amazing interpersonal skills!"],LinkedIn:Oe.a,copyrightIcon:V.a}}},Ie=Ee,je=(s("fe9a"),Object(f["a"])(Ie,ye,Ce,!1,null,"66445b3e",null)),$e=je.exports;a["a"].use(T["a"]);var Se=[{path:"/",name:"Home",component:Y},{path:"/about-us",name:"About",component:_e},{path:"/join-us",name:"Join",component:$e}],Te=new T["a"]({routes:Se}),Ae=Te;a["a"].config.productionTip=!1,new a["a"]({router:Ae,render:function(e){return e(S)}}).$mount("#app")},6860:function(e,t,s){e.exports=s.p+"img/burgerIcon.88a06c9a.svg"},"68cb":function(e,t,s){},"750e":function(e,t,s){},"7b06":function(e,t,s){e.exports=s.p+"img/copyrightIcon.e7486f0a.svg"},"7cc7":function(e,t,s){},"80b7":function(e,t,s){e.exports=s.p+"img/member5C.909a28b9.png"},"85ec":function(e,t,s){},9547:function(e,t,s){e.exports=s.p+"img/member2.f567b5ec.png"},"9b19":function(e,t,s){e.exports=s.p+"img/logo.f30de1cc.svg"},a00f:function(e,t,s){"use strict";var a=s("7cc7"),n=s.n(a);n.a},a3fc:function(e,t,s){},b2d4:function(e,t,s){e.exports=s.p+"img/webDecorJoin.457a3c5b.svg"},b314:function(e,t,s){"use strict";var a=s("750e"),n=s.n(a);n.a},b87d:function(e,t,s){},c1b9:function(e,t,s){e.exports=s.p+"img/illustrationPerson.86427eee.svg"},ceb4:function(e,t,s){e.exports=s.p+"img/closeIcon.e5ec86eb.svg"},d632:function(e,t,s){"use strict";var a=s("a3fc"),n=s.n(a);n.a},ef6c:function(e,t,s){e.exports=s.p+"img/webDecorHome.f6923838.svg"},fe9a:function(e,t,s){"use strict";var a=s("68cb"),n=s.n(a);n.a}});
//# sourceMappingURL=app.06ac7294.js.map