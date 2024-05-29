"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[120],{1903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(4848),r=n(8453),s=n(2130),l=n(9365);const i={id:"download",title:"1. Install AI Assistant",sidebar_position:11},o=void 0,u={id:"installation/download",title:"1. Install AI Assistant",description:"Supported Frameworks",source:"@site/docs/installation/1_download.md",sourceDirName:"installation",slug:"/installation/download",permalink:"/installation/download",draft:!1,unlisted:!1,editUrl:"https://github.com/sista-ai/docs/docs/installation/1_download.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"download",title:"1. Install AI Assistant",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/intro"},next:{title:"2. Setup UI Controller",permalink:"/installation/setup"}},c={},d=[{value:"Supported Frameworks",id:"supported-frameworks",level:2},{value:"Installation",id:"installation",level:2},{value:"Setup: AI Assistant",id:"setup-ai-assistant",level:2},{value:"1. Import Provider",id:"1-import-provider",level:3},{value:"2. Import Button",id:"2-import-button",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsx)(s.A,{children:(0,a.jsxs)(l.A,{value:"react",children:[(0,a.jsx)(t.h2,{id:"supported-frameworks",children:"Supported Frameworks"}),(0,a.jsxs)(t.p,{children:["This package integrates seamlessly with a wide range of React projects, including ",(0,a.jsx)(t.strong,{children:"NextJS"}),", ",(0,a.jsx)(t.strong,{children:"Electron"}),", ",(0,a.jsx)(t.strong,{children:"Gatsby"}),", ",(0,a.jsx)(t.strong,{children:"Meteor"}),", ",(0,a.jsx)(t.strong,{children:"React Native"}),", ",(0,a.jsx)(t.strong,{children:"Remix"}),", ",(0,a.jsx)(t.strong,{children:"RedwoodJS"}),", ",(0,a.jsx)(t.strong,{children:"Parcel"}),", ",(0,a.jsx)(t.strong,{children:"Expo"}),", and ",(0,a.jsx)(t.strong,{children:"BlitzJS"}),"."]}),(0,a.jsx)(t.p,{children:"... LIST ONLY REACT ICONS HERE..."}),(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),(0,a.jsxs)(t.p,{children:["Install ",(0,a.jsx)(t.code,{children:"@sista/ai-assistant-react"})," in your React App."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm install @sista/ai-assistant-react\n"})}),(0,a.jsx)(t.h2,{id:"setup-ai-assistant",children:"Setup: AI Assistant"}),(0,a.jsx)(t.h3,{id:"1-import-provider",children:"1. Import Provider"}),(0,a.jsxs)(t.p,{children:["Import ",(0,a.jsx)(t.code,{children:"AiAssistantProvider"})," and wrap your App at the root level."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'// ...\nimport { AiAssistantProvider } from "@sista/ai-assistant-react";\n\nReactDOM.render(\n  <AiAssistantProvider apiKey="YOUR_API_KEY">\n    {" "}\n    // Wrap your app with this provider\n    <App />\n  </AiAssistantProvider>\n  // ...\n);\n'})}),(0,a.jsxs)(t.p,{children:["Get your ",(0,a.jsx)(t.strong,{children:"free"})," ",(0,a.jsx)(t.code,{children:"API key"})," from the ",(0,a.jsx)(t.a,{href:"https://admin.sista.ai/applications",children:"Admin Panel"})," and replace ",(0,a.jsx)(t.code,{children:'"YOUR_API_KEY"'}),"."]}),(0,a.jsx)(t.h3,{id:"2-import-button",children:"2. Import Button"}),(0,a.jsxs)(t.p,{children:["Import ",(0,a.jsx)(t.code,{children:"AiAssistantButton"})," and add it wherever you want."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'// ...\nimport { AiAssistantButton } from "@sista/ai-assistant-react";\n\n// ...\nfunction MyComponent() {\n  return (\n    <div>\n      // ...\n      <AiAssistantButton /> // Add the magic button anywhere\n    </div>\n  );\n}\n'})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"\ud83c\udf89 Congrats! Press the button, start talking, and enjoy!"}),"\n"]})]})})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:t})}},2130:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),s=n(3104),l=n(6347),i=n(205),o=n(7485),u=n(1682),c=n(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:r}),[b,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=u??b;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==a&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function A(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function I(e){const t=(0,v.A)();return(0,x.jsx)(A,{...e,children:d(e.children)},String(t))}const w=e=>{let{children:t}=e;return(0,x.jsx)(I,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"iOS",value:"ios"},{label:"Android",value:"android"},{label:"Angular",value:"angular"},{label:"Ember",value:"ember"},{label:"Svelte",value:"svelte"},{label:"Gatsby",value:"gatsby"},{label:"Dart",value:"dart"},{label:"Ionic",value:"ionic"},{label:"Cordova",value:"cordova"},{label:"Flutter",value:"flutter"},{label:"Maui",value:"maui"},{label:"Xamarin",value:"xamarin"},{label:"JavaScript",value:"js"}],children:t})}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);