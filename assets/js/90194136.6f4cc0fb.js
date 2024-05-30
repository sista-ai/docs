"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[120],{1903:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=s(4848),r=s(8453),i=s(2130),n=s(9365),o=s(7850);const l={id:"download",title:"1. Install AI Assistant",sidebar_position:11},c=void 0,u={id:"installation/download",title:"1. Install AI Assistant",description:"Supported React Projects",source:"@site/docs/installation/1_download.md",sourceDirName:"installation",slug:"/installation/download",permalink:"/installation/download",draft:!1,unlisted:!1,editUrl:"https://github.com/sista-ai/docs/docs/installation/1_download.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"download",title:"1. Install AI Assistant",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/intro"},next:{title:"2. Setup UI Controller",permalink:"/installation/setup"}},d={},p=[{value:"Supported React Projects",id:"supported-react-projects",level:2},{value:"Installation (React)",id:"installation-react",level:2},{value:"Setup: AI Assistant",id:"setup-ai-assistant",level:2},{value:"1. Import Provider",id:"1-import-provider",level:3},{value:"2. Import Button",id:"2-import-button",level:3}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsx)(i.A,{children:(0,a.jsxs)(n.A,{value:"react",children:[(0,a.jsx)(t.h2,{id:"supported-react-projects",children:"Supported React Projects"}),(0,a.jsx)(t.p,{children:"This package supports a diverse range of React-based projects:"}),(0,a.jsx)(o.A,{filter:["NextJS","Electron","Gatsby","Meteor","React Native","Remix","RedwoodJS","Expo","BlitzJS"]}),(0,a.jsx)(t.h2,{id:"installation-react",children:"Installation (React)"}),(0,a.jsxs)(t.p,{children:["Install ",(0,a.jsx)(t.code,{children:"@sista/ai-assistant-react"})," in your React App."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install @sista/ai-assistant-react\n"})}),(0,a.jsx)(t.h2,{id:"setup-ai-assistant",children:"Setup: AI Assistant"}),(0,a.jsx)(t.h3,{id:"1-import-provider",children:"1. Import Provider"}),(0,a.jsxs)(t.p,{children:["Import ",(0,a.jsx)(t.code,{children:"AiAssistantProvider"})," and wrap your App at the root level."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'// ...\nimport { AiAssistantProvider } from "@sista/ai-assistant-react";\n\nReactDOM.render(\n  <AiAssistantProvider apiKey="YOUR_API_KEY">\n    {" "}\n    // Wrap your app with this provider\n    <App />\n  </AiAssistantProvider>\n  // ...\n);\n'})}),(0,a.jsxs)(t.p,{children:["Get your ",(0,a.jsx)(t.strong,{children:"free"})," ",(0,a.jsx)(t.code,{children:"API key"})," from the ",(0,a.jsx)(t.a,{href:"https://admin.sista.ai/applications",children:"Admin Panel"})," and replace ",(0,a.jsx)(t.code,{children:'"YOUR_API_KEY"'}),"."]}),(0,a.jsx)(t.h3,{id:"2-import-button",children:"2. Import Button"}),(0,a.jsxs)(t.p,{children:["Import ",(0,a.jsx)(t.code,{children:"AiAssistantButton"})," and add it wherever you want."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'// ...\nimport { AiAssistantButton } from "@sista/ai-assistant-react";\n\n// ...\nfunction MyComponent() {\n  return (\n    <div>\n      // ...\n      <AiAssistantButton /> // Add the magic button anywhere\n    </div>\n  );\n}\n'})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"\ud83c\udf89 Congrats! Press the button, start talking, and enjoy!"}),"\n"]})]})})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9365:(e,t,s)=>{s.d(t,{A:()=>n});s(6540);var a=s(4164);const r={tabItem:"tabItem_Ymn6"};var i=s(4848);function n(e){let{children:t,hidden:s,className:n}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,n),hidden:s,children:t})}},2130:(e,t,s)=>{s.d(t,{A:()=>I});var a=s(6540),r=s(4164),i=s(3104),n=s(6347),o=s(205),l=s(7485),c=s(1682),u=s(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:a,default:r}}=e;return{value:t,label:s,attributes:a,default:r}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function m(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:s}=e;const r=(0,n.W6)(),i=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,i=p(e),[n,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=h({queryString:s,groupId:r}),[g,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Dv)(s);return[r,(0,a.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),v=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:n,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=s(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function k(e){let{className:t,block:s,selectedValue:a,selectValue:n,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,s=l.indexOf(t),r=o[s].value;r!==a&&(c(t),n(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===t}),children:s??t},t)}))})}function A(e){let{lazy:t,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,f.jsx)(k,{...t,...e}),(0,f.jsx)(A,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,f.jsx)(x,{...e,children:d(e.children)},String(t))}const I=e=>{let{children:t}=e;return(0,f.jsx)(j,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"iOS",value:"ios"},{label:"Android",value:"android"},{label:"Angular",value:"angular"},{label:"Ember",value:"ember"},{label:"Svelte",value:"svelte"},{label:"Gatsby",value:"gatsby"},{label:"Dart",value:"dart"},{label:"Ionic",value:"ionic"},{label:"Cordova",value:"cordova"},{label:"Flutter",value:"flutter"},{label:"Maui",value:"maui"},{label:"Xamarin",value:"xamarin"},{label:"JavaScript",value:"js"}],children:t})}},7850:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var a=s(4848);const r=[{src:"/img/sdks/REACT.svg",alt:"React",name:"React",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/NEXT.svg",alt:"Next",name:"NextJS",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/ELECTRON.svg",alt:"Electron",name:"Electron",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/GATSBY.svg",alt:"Gatsby",name:"Gatsby",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/METEOR.svg",alt:"Meteor",name:"Meteor",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/REACT-NATIVE.svg",alt:"React Native",name:"React Native",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/REMIX.svg",alt:"Remix",name:"Remix",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/REDWOODJS.svg",alt:"RedwoodJS",name:"RedwoodJS",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/EXPO.svg",alt:"Expo",name:"Expo",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/BLITZJS.svg",alt:"BlitzJS",name:"BlitzJS",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/VUE.svg",alt:"Vue",name:"Vue",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/IOS.svg",alt:"iOS",name:"iOS",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/ANDROID.svg",alt:"Android",name:"Android",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/DART.svg",alt:"Dart",name:"Dart",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/JS.svg",alt:"JavaScript",name:"JavaScript",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/EMBER.svg",alt:"Ember",name:"Ember",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/SVELTE.svg",alt:"Svelte",name:"Svelte",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/IONIC.svg",alt:"Ionic",name:"Ionic",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/CORDOVA.svg",alt:"Cordova",name:"Cordova",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/FLUTTER.svg",alt:"Flutter",name:"Flutter",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/MAUI.svg",alt:"MAUI",name:"MAUI",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/XAMARIN.svg",alt:"Xamarin",name:"Xamarin",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/ASTRO.svg",alt:"Astro",name:"Astro",link:"https://github.com/orgs/sista-ai/repositories"},{src:"/img/sdks/ANGULAR.svg",alt:"Angular",name:"Angular",link:"https://github.com/orgs/sista-ai/repositories"}],i=e=>{let{filter:t}=e;const s=t?r.filter((e=>t.includes(e.name))):r,i=[];for(let r=0;r<s.length;r+=8){const e=s.slice(r,r+8).map(((e,t)=>(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("img",{src:e.src,alt:e.alt,width:"100",height:"100"})})},t)));i.push((0,a.jsx)("tr",{children:e},r))}return(0,a.jsx)("table",{className:"frameworks-table",children:(0,a.jsx)("tbody",{children:i})})}},8453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>o});var a=s(6540);const r={},i=a.createContext(r);function n(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);