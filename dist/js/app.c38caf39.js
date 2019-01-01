(function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],p=0,u=[];p<r.length;p++)i=r[p],s[i]&&u.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,i=1;i<o.length;i++){var l=o[i];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=o[0]))}return t}var a={},s={app:0},n=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a956700f"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){var e=[],o=s[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,a){o=s[t]=[e,a]});e.push(o[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t),n=function(e){l.onerror=l.onload=null,clearTimeout(c);var o=s[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");i.type=a,i.request=n,o[1](i)}s[t]=void 0}};var c=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/manifesto/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"21bb":function(t,e,o){"use strict";var a=o("bcc9"),s=o.n(a);s.a},"24ca":function(t,e,o){},"2a7e":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var a=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},n=[],i=(o("5c0b"),o("2877")),r={},l=Object(i["a"])(r,s,n,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,p=o("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("NavBar"),o("div",{staticClass:"content"},[o("vs-row",[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"flex-start","vs-w":"4","vs-xs":"12"}},[o("div",{staticClass:"manifest-side-section"},[o("identification")],1)]),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"flex-start","vs-w":"4",id:"code-box","vs-xs":"12"}},[o("div",{staticClass:"manifest-section"},[o("manifest-code")],1)]),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"flex-start","vs-w":"4","vs-xs":"12"}},[o("div",{staticClass:"manifest-side-section"},[o("display-url")],1)])],1)],1)],1)},u=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"con-type-example"},[a("vs-navbar",{staticClass:"navbarx",attrs:{type:"gradient"},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[a("vs-navbar-title",[a("img",{attrs:{src:o("cf05"),alt:"logo"}})]),a("vs-spacer"),a("vs-navbar-item",[a("a",{attrs:{href:"https://www.w3.org/TR/appmanifest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3 Specs")])]),a("vs-navbar-item",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Documentation")])]),a("vs-navbar-item",[a("a",{attrs:{href:"#"}},[t._v("Github")])])],1)],1)},f=[],h={name:"nav-bar",data:function(){return{activeItem:0}}},m=h,b=(o("9551"),Object(i["a"])(m,v,f,!1,null,"95c9d0ce",null));b.options.__file="NavBar.vue";var y=b.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{attrs:{id:"first-t-first"}},[o("vs-row",[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"flex-start","vs-w":"10"}},[o("h2",[t._v("First Things First")])]),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"flex-end","vs-w":"2"}})],1),o("hr"),o("label",{staticClass:"section-info"},[t._v("Link the manifest to your app by adding this in your app's entry HTML file")]),o("div",{staticClass:"section-form"},[o("vs-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("vs-row",[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-w":"8"}}),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"center","vs-w":"4"}},[o("vs-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.htmlCode,expression:"htmlCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],attrs:{color:"success",type:"gradient"}},[t._v("Copy")])],1)],1)],1),o("div",[o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.htmlCode,expression:"htmlCode"}]},[o("code",{staticClass:"html"})])])])],1)],1),o("br"),o("br"),o("div",{attrs:{id:"app-id"}},[o("vs-row",[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"flex-start","vs-w":"10"}},[o("h2",[t._v("App Identification")])]),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"flex-end","vs-w":"2"}})],1),o("hr"),o("label",{staticClass:"section-info"},[t._v("Name, description and app's Language")]),o("div",{staticClass:"section-form"},[o("vs-tooltip",{attrs:{color:"#05668d",text:"Provides a human-readable name for the site when displayed to the user. For example, among a list of other applications or as a label for an icon.",position:"bottom",delay:".5s"}},[o("vs-input",{attrs:{label:"App Name",placeholder:"Manifesto"},on:{blur:function(e){t.addData()}},model:{value:t.appName,callback:function(e){t.appName=e},expression:"appName"}})],1),o("vs-tooltip",{attrs:{color:"#05668d",text:"Provides a short human-readable name for the application. This is intended for when there is insufficient space to display the full name of the web application, like device homescreens.",position:"bottom",delay:".5s"}},[o("vs-input",{attrs:{label:"Short Name",placeholder:"Manifesto"},on:{blur:function(e){t.addData()}},model:{value:t.shortName,callback:function(e){t.shortName=e},expression:"shortName"}})],1),o("vs-tooltip",{attrs:{color:"#05668d",text:"Provides a general description of what the pinned website does.",position:"bottom",delay:".5s"}},[o("vs-input",{attrs:{label:"Description",placeholder:"The app that helps you generate your manifest!"},on:{blur:function(e){t.addData()}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),o("vs-tooltip",{attrs:{color:"#05668d",text:"Specifies the primary text direction for the name, short_name, and description members. Together with the lang member, it helps the correct display of right-to-left languages.",position:"bottom",delay:".5s"}},[o("vs-input",{attrs:{label:"Dir",placeholder:"rtl"},on:{blur:function(e){t.addData()}},model:{value:t.dir,callback:function(e){t.dir=e},expression:"dir"}})],1),o("vs-tooltip",{attrs:{color:"#05668d",text:"Specifies the primary language for the values in the name and short_name members. This value is a string containing a single language tag.",position:"bottom",delay:".5s"}},[o("vs-input",{attrs:{label:"Language",placeholder:"en-US"},on:{blur:function(e){t.addData()}},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1)],1)],1),o("br"),o("br"),o("br"),o("div",{attrs:{id:"rel-apps"}},[o("vs-row",[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"flex-start","vs-w":"10"}},[o("h2",[t._v("Related Apps")])]),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"flex-end","vs-w":"2"}})],1),o("hr"),o("label",{staticClass:"section-info"},[t._v("Ability to grab the native app. This should only be used if the related native apps really do offer something that the website can't.")]),o("div",{staticClass:"section-form"},[o("vs-row",[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-w":"10"}},[o("h3",[t._v("Prefer Related Apps")])]),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"center","vs-w":"2"}},[o("vs-button",{attrs:{color:"primary",type:"line",icon:"add_circle_outline"},on:{click:t.addApp}}),o("vs-button",{attrs:{color:"danger",type:"line",icon:"remove_circle_outline"},on:{click:t.removeApp}})],1)],1),t._l(t.apps,function(e,a){return o("vs-row",{key:a,attrs:{"vs-justify":"space-around","vs-align":"space-around","vs-type":"flex"}},[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"flex-start","vs-w":"3"}},[o("vs-tooltip",{attrs:{color:"#05668d",text:"Platform of the related app",position:"bottom",delay:"1s"}},[o("vs-input",{attrs:{label:"platform",placeholder:"play"},on:{blur:function(e){t.addRelatedApp()}},model:{value:e.platform,callback:function(o){t.$set(e,"platform",o)},expression:"app.platform"}})],1)],1),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"4"}},[o("vs-tooltip",{attrs:{color:"#05668d",text:"The url of the related app.",position:"bottom",delay:"1s"}},[o("vs-input",{attrs:{label:"url",placeholder:"https://play.google.com/store/apps/details?id=com.example.app1"},on:{blur:function(e){t.addRelatedApp()}},model:{value:e.url,callback:function(o){t.$set(e,"url",o)},expression:"app.url"}})],1)],1),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"flex-end","vs-w":"3"}},[o("vs-tooltip",{attrs:{color:"#05668d",text:"App's package name",position:"bottom",delay:"1s"}},[o("vs-input",{attrs:{label:"id",placeholder:"com.example.app1"},on:{blur:function(e){t.addRelatedApp()}},model:{value:e.id,callback:function(o){t.$set(e,"id",o)},expression:"app.id"}})],1)],1)],1)})],2)],1)])},x=[],w={name:"identification",data:function(){return{appName:"",shortName:"",description:"",language:"",dir:"",preferRelatedApps:!1,htmlCode:'<head>\n    <link rel="manifest" href="manifest.json">\n\n    <meta name="mobile-web-app-capable" content="yes">\n    <meta name="apple-mobile-web-app-capable" content="yes">\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n</head>',apps:[{platform:"",id:"",url:""}]}},methods:{addApp:function(){var t={platform:"",id:"",url:""};this.apps.push(t)},removeApp:function(){this.apps.length>0&&this.apps.pop()},addData:function(){var t={appName:this.appName,shortName:this.shortName,description:this.description,language:this.language,dir:this.dir};this.$bus.emit("add-left-data",t),this.$bus.emit("once")},addRelatedApp:function(){this.$bus.emit("add-related-app",this.apps),this.$bus.emit("once")},onCopy:function(t){this.$vs.notify({text:"Copied to clipboard",color:"success"}),console.log("You just copied: "+t.text)},onCopyError:function(){this.$vs.notify({text:"Copy failed",color:"danger"}),console.log("Failed to copy texts")}}},C=w,_=(o("5ae6"),Object(i["a"])(C,g,x,!1,null,null,null));_.options.__file="Identification.vue";var A=_.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vs-card",[o("div",{attrs:{slot:"header"},slot:"header"},[o("vs-row",[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-w":"8"}},[o("h3",[t._v("\n          manifest.json\n        ")])]),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"center","vs-w":"4"}},[o("vs-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.manifestCode,expression:"manifestCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],attrs:{color:"success",type:"gradient"}},[t._v("Copy")])],1)],1)],1),o("div",[o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.manifestCode,expression:"manifestCode"}]},[o("code",{staticClass:"JSON"})])])])},j=[],N=(o("ac6a"),{name:"manifest-code",created:function(){this.$bus.on("add-left-data",this.addLeftColData),this.$bus.on("add-right-data",this.addRightColData),this.$bus.on("add-related-app",this.addRelatedApp),this.$bus.on("add-icons",this.addIcons)},data:function(){return{codeAttributes:{appName:"",shortName:"",description:"",language:"",dir:"",displayMode:"",orientation:"",themeColor:"",backgroundColor:"",startUrl:"",scope:"",apps:"",icons:"",tempIconsData:"",tempAppData:""}}},methods:{addLeftColData:function(t){console.log(t),t.appName&&""===this.codeAttributes.appName&&(this.codeAttributes.appName='  "name": "'.concat(t.appName,'",\n')),t.shortName&&""===this.codeAttributes.shortName&&(this.codeAttributes.shortName='  "short_name": "'.concat(t.shortName,'",\n')),t.description&&""===this.codeAttributes.description&&(this.codeAttributes.description='  "description": "'.concat(t.description,'",\n')),t.language&&""===this.codeAttributes.language&&(this.codeAttributes.language='  "language": "'.concat(t.language,'",\n')),t.dir&&""===this.codeAttributes.dir&&(this.codeAttributes.dir='  "dir": "'.concat(t.dir,'",\n'))},addRightColData:function(t){console.log(t),t.displayMode&&(this.codeAttributes.displayMode='  "display": "'.concat(t.displayMode,'",\n')),t.orientation&&(this.codeAttributes.orientation='  "orientation": "'.concat(t.orientation,'",\n')),t.themeColor&&(this.codeAttributes.themeColor='  "theme_color": "'.concat(t.themeColor,'",\n')),t.backgroundColor&&(this.codeAttributes.backgroundColor='  "background_color": "'.concat(t.backgroundColor,'",\n')),t.startUrl&&(this.codeAttributes.startUrl='  "start_url": "'.concat(t.startUrl,'",\n')),t.scope&&(this.codeAttributes.scope='  "scope": "'.concat(t.scope,'",\n'))},addRelatedApp:function(t){var e=this;this.tempAppData="",t.forEach(function(t){console.log("relatedApp",t),""!==t.id&&""!==t.platform&&""!==t.url&&(e.tempAppData='\n     {\n     "platform": "'.concat(t.platform,'",\n      "url": "').concat(t.url,"?id=").concat(t.id,'"\n     },\n')+e.tempAppData)}),this.codeAttributes.apps='  "related_applications": ['.concat(this.tempAppData,"   ],\n")},addIcons:function(t){var e=this;this.tempIconsData="",t.forEach(function(t){console.log("related_icon",t),""!==t.src&&""!==t.size&&""!==t.type&&(e.tempIconsData='\n    {\n     "src": "'.concat(t.src,'",\n     "sizes": "').concat(t.size,'",\n     "type": "').concat(t.type,'"\n    },\n')+e.tempIconsData)}),this.codeAttributes.icons='  "icons": ['.concat(this.tempIconsData,"  ]")},onCopy:function(t){this.$vs.notify({text:"Manifest code to clipboard",color:"success"}),console.log("You just copied: "+t.text)},onCopyError:function(){this.$vs.notify({text:"Copy failed",color:"danger"}),console.log("Failed to copy texts")}},computed:{manifestCode:function(){var t="{\n\n".concat(this.codeAttributes.appName).concat(this.codeAttributes.shortName).concat(this.codeAttributes.description).concat(this.codeAttributes.dir).concat(this.codeAttributes.language).concat(this.codeAttributes.displayMode).concat(this.codeAttributes.orientation).concat(this.codeAttributes.themeColor).concat(this.codeAttributes.backgroundColor).concat(this.codeAttributes.startUrl).concat(this.codeAttributes.scope).concat(this.codeAttributes.apps).concat(this.codeAttributes.icons,"\n}");return t}}}),D=N,$=(o("bff4"),Object(i["a"])(D,k,j,!1,null,null,null));$.options.__file="ManifestCode.vue";var I=$.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{attrs:{id:"display"}},[o("vs-row",[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"flex-start","vs-w":"10"}},[o("h2",[t._v("Display & Theme Color")])]),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"flex-end","vs-w":"2"}})],1),o("hr"),o("label",{staticClass:"section-info"},[t._v("Display mode, theming and icons")]),o("div",{staticClass:"section-form"},[o("vs-tooltip",{attrs:{color:"#05668d",text:"Defines the developers’ preferred display mode for the website.",position:"bottom",delay:".5s"}},[o("vs-select",{staticClass:"selectExample",attrs:{label:"Display Mode"},on:{change:function(e){t.addData()}},model:{value:t.displayMode,callback:function(e){t.displayMode=e},expression:"displayMode"}},t._l(t.displays,function(t){return o("vs-select-item",{key:t.value,attrs:{value:t.value,text:t.text}})}),1)],1),o("vs-tooltip",{attrs:{color:"#05668d",text:"Defines the default orientation for all the website's top level browsing contexts.",position:"bottom",delay:".5s"}},[o("vs-select",{staticClass:"selectExample",attrs:{label:"Orientation"},on:{change:function(e){t.addData()}},model:{value:t.orientation,callback:function(e){t.orientation=e},expression:"orientation"}},t._l(t.orientations,function(t){return o("vs-select-item",{key:t.value,attrs:{value:t.value,text:t.text}})}),1)],1),o("vs-tooltip",{attrs:{color:"#05668d",text:"Defines the default theme color for an application. This sometimes affects how the OS displays the site (e.g., on Android's task switcher, the theme color surrounds the site).  ",position:"bottom",delay:".5s"}},[o("vs-input",{attrs:{label:"Theme color",placeholder:"#0240fa"},on:{blur:function(e){t.addData()}},model:{value:t.themeColor,callback:function(e){t.themeColor=e},expression:"themeColor"}})],1),o("vs-tooltip",{attrs:{color:"#05668d",text:"Defines the expected “background color” for the website.",position:"bottom",delay:".5s"}},[o("vs-input",{attrs:{label:"Background color",placeholder:"#ffffff"},on:{blur:function(e){t.addData()}},model:{value:t.backgroundColor,callback:function(e){t.backgroundColor=e},expression:"backgroundColor"}})],1),o("br"),o("br"),o("vs-row",[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-w":"10"}},[o("h3",[t._v("Icons")])]),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"center","vs-w":"2"}},[o("vs-button",{attrs:{color:"primary",type:"line",icon:"add_circle_outline"},on:{click:t.addIcon}}),o("vs-button",{attrs:{color:"danger",type:"line",icon:"remove_circle_outline"},on:{click:t.removeIcon}})],1)],1),t._l(t.icons,function(e,a){return o("vs-row",{key:a,attrs:{"vs-type":"flex","vs-justify":"space-around"}},[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"flex-start","vs-w":"4"}},[o("vs-tooltip",{attrs:{color:"#05668d",text:"Image location.",position:"bottom",delay:"1s"}},[o("vs-input",{attrs:{label:"src",placeholder:"./icons/logo.png"},on:{blur:function(e){t.addIcons()}},model:{value:e.src,callback:function(o){t.$set(e,"src",o)},expression:"icon.src"}})],1)],1),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"3"}},[o("vs-tooltip",{attrs:{color:"#05668d",text:"The type of image choosen.",position:"bottom",delay:"1s"}},[o("vs-input",{attrs:{label:"type",placeholder:"image/png"},on:{blur:function(e){t.addIcons()}},model:{value:e.type,callback:function(o){t.$set(e,"type",o)},expression:"icon.type"}})],1)],1),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"flex-end","vs-w":"3"}},[o("vs-tooltip",{attrs:{color:"#05668d",text:"Size of the image.",position:"bottom",delay:"1s"}},[o("vs-input",{attrs:{label:"size",placeholder:"48x48"},on:{blur:function(e){t.addIcons()}},model:{value:e.size,callback:function(o){t.$set(e,"size",o)},expression:"icon.size"}})],1)],1)],1)})],2)],1),o("br"),o("br"),o("br"),o("div",{attrs:{id:"url"}},[o("vs-row",[o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"flex-start","vs-w":"10"}},[o("h2",[t._v("URL & Scopes")])]),o("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"flex-end","vs-w":"2"}})],1),o("hr"),o("label",{staticClass:"section-info"},[t._v("Manifest's scope throughout the app")]),o("div",{staticClass:"section-form"},[o("vs-tooltip",{attrs:{color:"#05668d",text:"The URL that loads when a user launches the application (e.g. when added to home screen), typically the index. Note that this has to be a relative URL, relative to the manifest url.",position:"bottom",delay:".5s"}},[o("vs-input",{attrs:{label:"Start URL",placeholder:"/index.html"},on:{blur:function(e){t.addData()}},model:{value:t.startUrl,callback:function(e){t.startUrl=e},expression:"startUrl"}})],1),o("vs-tooltip",{attrs:{color:"#05668d",text:"Defines the navigation scope of this website's context. This restricts what web pages can be viewed while the manifest is applied. If the user navigates outside the scope, it returns to a normal web page inside a browser tab/window.",position:"bottom",delay:".5s"}},[o("vs-input",{attrs:{label:"Scope",placeholder:"/myapp/"},on:{blur:function(e){t.addData()}},model:{value:t.scope,callback:function(e){t.scope=e},expression:"scope"}})],1)],1)],1)])},T=[],U={name:"display-url",data:function(){return{displayMode:"",orientation:"",themeColor:"",backgroundColor:"",startUrl:"",scope:"",displays:[{value:"standalone",text:"Standalone"},{value:"fullscreen",text:"Fullscreen"},{value:"minimal-ui",text:"Minimalistic UI"},{value:"browser",text:"Browser"}],orientations:[{value:"any",text:"Any"},{value:"landscape",text:"Landscape"},{value:"landscape-primary",text:"Landscape-primary"},{value:"landscape-secondary",text:"Landscape-secondary"},{value:"portrait",text:"Portrait"},{value:"portrait-primary",text:"Portrait-primary"},{value:"portrait-secondary",text:"Portrait-secondary"},{value:"natural",text:"Natural"}],icons:[{src:"",type:"",size:""},{src:"",type:"",size:""}]}},methods:{addIcon:function(){var t={src:"",type:"",size:""};this.icons.push(t)},removeIcon:function(){this.icons.length>0&&this.icons.pop()},addData:function(){var t={displayMode:this.displayMode,orientation:this.orientation,themeColor:this.themeColor,backgroundColor:this.backgroundColor,startUrl:this.startUrl,scope:this.scope};this.$bus.emit("add-right-data",t),this.$bus.emit("once")},addIcons:function(){this.$bus.emit("add-icons",this.icons),this.$bus.emit("once")}}},E=U,O=(o("94a7"),Object(i["a"])(E,M,T,!1,null,null,null));O.options.__file="DisplayUrl.vue";var S=O.exports,P={components:{NavBar:y,Identification:A,ManifestCode:I,DisplayUrl:S},data:function(){return{activeItem:0,appName:"",shortName:"",description:"",language:""}}},R=P,L=(o("21bb"),Object(i["a"])(R,d,u,!1,null,null,null));L.options.__file="Home.vue";var z=L.exports;a["default"].use(p["a"]);var F=new p["a"]({routes:[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),B=o("fb9a"),J=o.n(B),q=o("998c"),H=o.n(q),W=o("4eb5"),Y=o.n(W),G=o("b828"),K=o("9483");Object(K["a"])("".concat("/manifesto/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("04f2"),o("c789");a["default"].use(H.a),a["default"].use(Y.a),a["default"].use(J.a),a["default"].use(G["a"]),a["default"].config.productionTip=!1,new a["default"]({router:F,render:function(t){return t(c)}}).$mount("#app")},"58a9":function(t,e,o){},"5ae6":function(t,e,o){"use strict";var a=o("2a7e"),s=o.n(a);s.a},"5c0b":function(t,e,o){"use strict";var a=o("5e27"),s=o.n(a);s.a},"5e27":function(t,e,o){},"6ad2":function(t,e,o){},"94a7":function(t,e,o){"use strict";var a=o("58a9"),s=o.n(a);s.a},9551:function(t,e,o){"use strict";var a=o("24ca"),s=o.n(a);s.a},bcc9:function(t,e,o){},bff4:function(t,e,o){"use strict";var a=o("6ad2"),s=o.n(a);s.a},cf05:function(t,e,o){t.exports=o.p+"img/logo.96a443cb.png"}});
//# sourceMappingURL=app.c38caf39.js.map