"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[120],{1903:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=s(4848),r=s(8453),i=s(2130),n=s(9365),l=s(7850);const o={id:"download",title:"1. Install AI Assistant",sidebar_position:11},c=void 0,u={id:"installation/download",title:"1. Install AI Assistant",description:"---",source:"@site/docs/installation/1_download.md",sourceDirName:"installation",slug:"/installation/download",permalink:"/installation/download",draft:!1,unlisted:!1,editUrl:"https://github.com/sista-ai/docs/blob/main/docs/installation/1_download.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"download",title:"1. Install AI Assistant",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/intro"},next:{title:"2. Setup UI Controller",permalink:"/installation/setup"}},d={},m=[{value:"Supported React-based Frameworks",id:"supported-react-based-frameworks",level:2},{value:"1. Install Package",id:"1-install-package",level:2},{value:"2. Import Provider",id:"2-import-provider",level:2},{value:"3. Import Button",id:"3-import-button",level:2}];function p(t){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(i.A,{children:(0,a.jsxs)(n.A,{value:"react",children:[(0,a.jsx)(e.hr,{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(e.h2,{id:"supported-react-based-frameworks",children:"Supported React-based Frameworks"}),(0,a.jsx)(e.p,{children:"This package supports a diverse range of React-based frameworks:"}),(0,a.jsx)(l.A,{numPerRow:5,filter:["React","NextJS","Electron","Gatsby","Meteor","React Native","Remix","RedwoodJS","Expo","BlitzJS"]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(e.h2,{id:"1-install-package",children:"1. Install Package"}),(0,a.jsxs)(e.p,{children:["Install  (",(0,a.jsx)(e.strong,{children:"@sista/ai-assistant-react"}),")  in your React App."]}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"npm install @sista/ai-assistant-react\n"})}),(0,a.jsxs)(e.p,{children:["If using Yarn: ",(0,a.jsx)(e.code,{children:"yarn add @sista/ai-assistant-react"})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(e.h2,{id:"2-import-provider",children:"2. Import Provider"}),(0,a.jsxs)(e.p,{children:["Import ",(0,a.jsx)(e.code,{children:"AiAssistantProvider"})," and wrap your App at the root level, with the AI Assistant Provider."]}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'import { AiAssistantProvider } from "@sista/ai-assistant-react";\n\nReactDOM.render(\n  <AiAssistantProvider apiKey="YOUR_API_KEY">\n    <App />\n  </AiAssistantProvider>\n);\n'})}),(0,a.jsxs)(e.p,{children:["Get your ",(0,a.jsx)(e.strong,{children:"free"})," ",(0,a.jsx)(e.code,{children:"API key"})," from the ",(0,a.jsx)(e.a,{href:"https://admin.sista.ai/applications",children:"Admin Panel"})," and replace ",(0,a.jsx)(e.code,{children:'"YOUR_API_KEY"'}),"."]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(e.h2,{id:"3-import-button",children:"3. Import Button"}),(0,a.jsxs)(e.p,{children:["Import ",(0,a.jsx)(e.code,{children:"AiAssistantButton"})," and inject it wherever you want."]}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:'import { AiAssistantButton } from "@sista/ai-assistant-react";\n\nfunction RandomComponent() {\n  return (\n    // ...\n      <AiAssistantButton />\n    // ...\n  );\n}\n'})}),(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"\ud83c\udf89 Congrats! Press the button, start talking, and enjoy!"}),"\n"]})]})})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(p,{...t})}):p(t)}},9365:(t,e,s)=>{s.d(e,{A:()=>n});s(6540);var a=s(4164);const r={tabItem:"tabItem_Ymn6"};var i=s(4848);function n(t){let{children:e,hidden:s,className:n}=t;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,n),hidden:s,children:e})}},2130:(t,e,s)=>{s.d(e,{A:()=>I});var a=s(6540),r=s(4164),i=s(3104),n=s(6347),l=s(205),o=s(7485),c=s(1682),u=s(9466);function d(t){return a.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,a.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(t){const{values:e,children:s}=t;return(0,a.useMemo)((()=>{const t=e??function(t){return d(t).map((t=>{let{props:{value:e,label:s,attributes:a,default:r}}=t;return{value:e,label:s,attributes:a,default:r}}))}(s);return function(t){const e=(0,c.X)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,s])}function p(t){let{value:e,tabValues:s}=t;return s.some((t=>t.value===e))}function h(t){let{queryString:e=!1,groupId:s}=t;const r=(0,n.W6)(),i=function(t){let{queryString:e=!1,groupId:s}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:e,groupId:s});return[(0,o.aZ)(i),(0,a.useCallback)((t=>{if(!i)return;const e=new URLSearchParams(r.location.search);e.set(i,t),r.replace({...r.location,search:e.toString()})}),[i,r])]}function g(t){const{defaultValue:e,queryString:s=!1,groupId:r}=t,i=m(t),[n,o]=(0,a.useState)((()=>function(t){let{defaultValue:e,tabValues:s}=t;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${s.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=s.find((t=>t.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:i}))),[c,d]=h({queryString:s,groupId:r}),[g,b]=function(t){let{groupId:e}=t;const s=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,i]=(0,u.Dv)(s);return[r,(0,a.useCallback)((t=>{s&&i.set(t)}),[s,i])]}({groupId:r}),v=(()=>{const t=c??g;return p({value:t,tabValues:i})?t:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:n,selectValue:(0,a.useCallback)((t=>{if(!p({value:t,tabValues:i}))throw new Error(`Can't select invalid tab value=${t}`);o(t),d(t),b(t)}),[d,b,i]),tabValues:i}}var b=s(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function k(t){let{className:e,block:s,selectedValue:a,selectValue:n,tabValues:l}=t;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=t=>{const e=t.currentTarget,s=o.indexOf(e),r=l[s].value;r!==a&&(c(e),n(r))},d=t=>{let e=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":{const s=o.indexOf(t.currentTarget)+1;e=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(t.currentTarget)-1;e=o[s]??o[o.length-1];break}}e?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},e),children:l.map((t=>{let{value:e,label:s,attributes:i}=t;return(0,f.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:t=>o.push(t),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===e}),children:s??e},e)}))})}function x(t){let{lazy:e,children:s,selectedValue:r}=t;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(e){const t=i.find((t=>t.props.value===r));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==r})))})}function A(t){const e=g(t);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,f.jsx)(k,{...e,...t}),(0,f.jsx)(x,{...e,...t})]})}function j(t){const e=(0,b.A)();return(0,f.jsx)(A,{...t,children:d(t.children)},String(e))}const I=t=>{let{children:e}=t;return(0,f.jsx)(j,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"iOS",value:"ios"},{label:"Android",value:"android"},{label:"Angular",value:"angular"},{label:"Ember",value:"ember"},{label:"Svelte",value:"svelte"},{label:"Gatsby",value:"gatsby"},{label:"Dart",value:"dart"},{label:"Ionic",value:"ionic"},{label:"Cordova",value:"cordova"},{label:"Flutter",value:"flutter"},{label:"Maui",value:"maui"},{label:"Xamarin",value:"xamarin"},{label:"JavaScript",value:"js"}],children:e})}},7850:(t,e,s)=>{s.d(e,{A:()=>i});s(6540);var a=s(4848);const r=[{src:"/img/sdks/REACT.svg",alt:"React",name:"React",link:"https://github.com/sista-ai/ai-assistant-react"},{src:"/img/sdks/NEXT.svg",alt:"Next",name:"NextJS",link:"https://github.com/sista-ai/ai-assistant-react"},{src:"/img/sdks/ELECTRON.svg",alt:"Electron",name:"Electron",link:"https://github.com/sista-ai/ai-assistant-react"},{src:"/img/sdks/GATSBY.svg",alt:"Gatsby",name:"Gatsby",link:"https://github.com/sista-ai/ai-assistant-react"},{src:"/img/sdks/METEOR.svg",alt:"Meteor",name:"Meteor",link:"https://github.com/sista-ai/ai-assistant-react"},{src:"/img/sdks/REACT-NATIVE.svg",alt:"React Native",name:"React Native",link:"https://github.com/sista-ai/ai-assistant-react"},{src:"/img/sdks/REMIX.svg",alt:"Remix",name:"Remix",link:"https://github.com/sista-ai/ai-assistant-react"},{src:"/img/sdks/REDWOODJS.svg",alt:"RedwoodJS",name:"RedwoodJS",link:"https://github.com/sista-ai/ai-assistant-react"},{src:"/img/sdks/EXPO.svg",alt:"Expo",name:"Expo",link:"https://github.com/sista-ai/ai-assistant-react"},{src:"/img/sdks/BLITZJS.svg",alt:"BlitzJS",name:"BlitzJS",link:"https://github.com/sista-ai/ai-assistant-react"},{src:"/img/sdks/IOS.svg",alt:"iOS",name:"iOS",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/ANDROID.svg",alt:"Android",name:"Android",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/VUE.svg",alt:"Vue",name:"Vue",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/DART.svg",alt:"Dart",name:"Dart",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/JS.svg",alt:"JavaScript",name:"JavaScript",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/EMBER.svg",alt:"Ember",name:"Ember",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/SVELTE.svg",alt:"Svelte",name:"Svelte",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/IONIC.svg",alt:"Ionic",name:"Ionic",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/CORDOVA.svg",alt:"Cordova",name:"Cordova",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/FLUTTER.svg",alt:"Flutter",name:"Flutter",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/MAUI.svg",alt:"MAUI",name:"MAUI",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/XAMARIN.svg",alt:"Xamarin",name:"Xamarin",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/ASTRO.svg",alt:"Astro",name:"Astro",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/ANGULAR.svg",alt:"Angular",name:"Angular",link:"https://github.com/orgs/sista-ai/repositories"}],i=t=>{let{numPerRow:e,filter:s}=t;const i=e||8,n=s?r.filter((t=>s.includes(t.name))):r,l=[];for(let r=0;r<n.length;r+=i){const t=n.slice(r,r+i).map(((t,e)=>(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("img",{src:t.src,alt:t.alt,width:"100",height:"100"})})},e)));l.push((0,a.jsx)("tr",{children:t},r))}return(0,a.jsx)("table",{className:"frameworks-table",children:(0,a.jsx)("tbody",{children:l})})}},8453:(t,e,s)=>{s.d(e,{R:()=>n,x:()=>l});var a=s(6540);const r={},i=a.createContext(r);function n(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:n(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);