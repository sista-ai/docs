"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[106],{5934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=r(4848),n=r(8453),l=r(2130),o=r(9365);const s={id:"configure",title:"Configure Your App",sidebar_position:5},i=void 0,u={id:"configure",title:"Configure Your App",description:"1. Access Control",source:"@site/docs/configure.md",sourceDirName:".",slug:"/configure",permalink:"/docs/docs/configure",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configure.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"configure",title:"Configure Your App",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Customize Your AI",permalink:"/docs/docs/customize"}},c={},d=[{value:"1. Access Control",id:"1-access-control",level:2},{value:"1.1 Domain / IP Whitelisting",id:"11-domain--ip-whitelisting",level:3},{value:"1.2 Rate Limit Control",id:"12-rate-limit-control",level:3},{value:"2. Props Reference",id:"2-props-reference",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsx)(l.A,{children:(0,a.jsxs)(o.A,{value:"react",children:[(0,a.jsx)(t.h2,{id:"1-access-control",children:"1. Access Control"}),(0,a.jsx)(t.p,{children:"Access control is a critical security measure that ensures only authorized users can interact with your system."}),(0,a.jsx)(t.h3,{id:"11-domain--ip-whitelisting",children:"1.1 Domain / IP Whitelisting"}),(0,a.jsxs)(t.p,{children:["To secure your production environment, you must whitelist your domains / IPs through the ",(0,a.jsx)(t.a,{href:"https://admin.sista.ai/applications",children:"Admin Panel"}),"."]}),(0,a.jsx)(t.h3,{id:"12-rate-limit-control",children:"1.2 Rate Limit Control"}),(0,a.jsxs)(t.p,{children:["To prevent abuse, configure request limits per user within a specified timeframe via the ",(0,a.jsx)(t.a,{href:"https://admin.sista.ai/applications",children:"Admin Panel"}),"."]}),(0,a.jsx)(t.h2,{id:"2-props-reference",children:"2. Props Reference"}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"AiAssistantProvider"})," accepts the following props:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'<AiAssistantProvider\n    apiKey="api-key" // (required): Your API key.\n    userId="user-id" // (optional): Your end user ID (for analytics tracking).\n    scrapeContent={true} // (optional): Automatic page content scraping (Enabled by default).\n    debug={false} // (optional): Debug mode. (Disabled by default)\n    apiUrl="api-url" // (optional): For testing purposes.\n>\n    // ...\n</AiAssistantProvider>\n'})})]})})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var a=r(4164);const n={tabItem:"tabItem_Ymn6"};var l=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:r,children:t})}},2130:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(6540),n=r(4164),l=r(3104),o=r(6347),s=r(205),i=r(7485),u=r(1682),c=r(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=f({queryString:r,groupId:n}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),v=(()=>{const e=u??b;return h({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function y(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),n=s[r].value;n!==a&&(u(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,n.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function A(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,g.jsx)(A,{...e,children:d(e.children)},String(t))}const w=e=>{let{children:t}=e;return(0,g.jsx)(j,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"iOS",value:"ios"},{label:"Android",value:"android"},{label:"Angular",value:"angular"},{label:"Ember",value:"ember"},{label:"Svelte",value:"svelte"},{label:"Gatsby",value:"gatsby"},{label:"Dart",value:"dart"},{label:"Ionic",value:"ionic"},{label:"Cordova",value:"cordova"},{label:"Flutter",value:"flutter"},{label:"Maui",value:"maui"},{label:"Xamarin",value:"xamarin"},{label:"JavaScript",value:"js"}],children:t})}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var a=r(6540);const n={},l=a.createContext(n);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);