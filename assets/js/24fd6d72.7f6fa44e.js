"use strict";(self.webpackChunkchatai_documentation=self.webpackChunkchatai_documentation||[]).push([[449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},l="Last Step",p={unversionedId:"tutorial-basics/last-step",id:"tutorial-basics/last-step",title:"Last Step",description:"Before Running the App",source:"@site/docs/tutorial-basics/last-step.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/last-step",permalink:"/ChatAIDocs/docs/tutorial-basics/last-step",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/last-step.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Languages & App Name",permalink:"/ChatAIDocs/docs/tutorial-basics/language-and-name"}},i={},u=[{value:"Before Running the App",id:"before-running-the-app",level:2},{value:"Running",id:"running",level:2},{value:"Deploying",id:"deploying",level:2},{value:"Development",id:"development",level:3},{value:"Production",id:"production",level:3}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"last-step"},"Last Step"),(0,a.kt)("h2",{id:"before-running-the-app"},"Before Running the App"),(0,a.kt)("p",null,"To ensure that your modifications take effect before running the app, it's important to build the native Android and iOS modules by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo prebuild\n")),(0,a.kt)("h2",{id:"running"},"Running"),(0,a.kt)("p",null,"To run the app, use the following commands:"),(0,a.kt)("p",null,"For iOS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo run:ios\n")),(0,a.kt)("p",null,"For Android:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo run:android\n")),(0,a.kt)("h2",{id:"deploying"},"Deploying"),(0,a.kt)("p",null,"To deploy the app, use the following commands:"),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("p",null,"For iOS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo prebuild && eas build --profile development --platform ios\n")),(0,a.kt)("p",null,"For Android:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo prebuild && eas build --profile development --platform android\n")),(0,a.kt)("p",null,"Alternatively, you can run a single command for both platforms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo prebuild && eas build --profile development\n")),(0,a.kt)("h3",{id:"production"},"Production"),(0,a.kt)("p",null,"For iOS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo prebuild && eas build --profile production --platform ios\n")),(0,a.kt)("p",null,"For Android:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo prebuild && eas build --profile production --platform android\n")),(0,a.kt)("p",null,"Alternatively, you can run a single command for both platforms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx expo prebuild && eas build --profile production\n")))}d.isMDXComponent=!0}}]);