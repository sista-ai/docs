"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[311],{3147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(4848),a=n(8453),s=n(2130),r=n(9365);const i={id:"customize",title:"4. Customize Your AI",sidebar_position:14},l=void 0,c={id:"Installation/customize",title:"4. Customize Your AI",description:"1. AI Characteristics",source:"@site/docs/Installation/4_customize.md",sourceDirName:"Installation",slug:"/Installation/customize",permalink:"/Installation/customize",draft:!1,unlisted:!1,editUrl:"https://github.com/sista-ai/docs/docs/Installation/4_customize.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{id:"customize",title:"4. Customize Your AI",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"3. Configure Your App",permalink:"/Installation/configure"}},u={},d=[{value:"1. AI Characteristics",id:"1-ai-characteristics",level:2},{value:"2. Assistant Voice",id:"2-assistant-voice",level:2},{value:"3 Button Design",id:"3-button-design",level:2},{value:"3.1 Button Color",id:"31-button-color",level:3},{value:"3.2 Button Style &amp; Position",id:"32-button-style--position",level:3},{value:"3.3 Button Advanced Styling",id:"33-button-advanced-styling",level:3},{value:"4 Button Click Event Tracking",id:"4-button-click-event-tracking",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsx)(s.A,{children:(0,o.jsxs)(r.A,{value:"react",children:[(0,o.jsx)(t.h2,{id:"1-ai-characteristics",children:"1. AI Characteristics"}),(0,o.jsxs)(t.p,{children:["Customize the assistant behavior via the ",(0,o.jsx)(t.a,{href:"https://admin.sista.ai/applications",children:"Admin Panel"})," by providing your ",(0,o.jsx)(t.code,{children:"custom prompt"})," and ",(0,o.jsx)(t.code,{children:"training data"}),"."]}),(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["By default, ",(0,o.jsx)(t.code,{children:"AiAssistantProvider"})," supplies the AI model with the current screen content. To disable, set ",(0,o.jsx)(t.code,{children:"scrapeContent"})," to false. Scraped content supplements your custom prompts added from the admin panel."]}),"\n"]}),(0,o.jsx)(t.h2,{id:"2-assistant-voice",children:"2. Assistant Voice"}),(0,o.jsxs)(t.p,{children:["Change AI assistant's voice via the ",(0,o.jsx)(t.a,{href:"https://admin.sista.ai/applications",children:"Admin Panel"})," by selecting your preferred voice in the application settings."]}),(0,o.jsx)(t.h2,{id:"3-button-design",children:"3 Button Design"}),(0,o.jsx)(t.h3,{id:"31-button-color",children:"3.1 Button Color"}),(0,o.jsxs)(t.p,{children:["Modify the colors of the ",(0,o.jsx)(t.code,{children:"AiAssistantButton"})," at different states:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"const customStateColors = {\n    STATE_IDLE: '#4a6cf6', // Bright Blue\n    STATE_LISTENING_START: '#F64A7B', // Bright Pink\n    STATE_THINKING_START: '#4ac2f6', // Sky Blue\n    STATE_SPEAKING_START: '#4af67f', // Light Green\n};\n\n<AiAssistantButton stateColors={customStateColors} />;\n"})}),(0,o.jsx)(t.h3,{id:"32-button-style--position",children:"3.2 Button Style & Position"}),(0,o.jsxs)(t.p,{children:["Pass a ",(0,o.jsx)(t.code,{children:"style"})," object to adjust dimensions, position, and appearance:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"const customStyle = {\n    // Positioning and layout properties\n    position: 'relative', // Positioning of the button, 'absolute' or 'relative' to its normal position\n    bottom: 'auto', // Distance from the bottom of its container (use with 'position: absolute')\n    right: 'auto', // Distance from the right of its container (use with 'position: absolute')\n    zIndex: 999, // Z-index for layering controls\n\n    // Dimension properties\n    width: '100px', // Button width\n    height: '100px', // Button height\n\n    // Font and color properties\n    fontSize: '50px', // Font size of the icon/text inside the button\n    color: '#FFF', // Color of the text/icon inside the button\n\n    // Border properties\n    border: 'none', // Border properties\n    borderRadius: '20%', // Border radius to control the curvature of the button corners\n\n    // Box model properties\n    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', // Box shadow properties\n    transition: 'background-color 0.3s ease-in-out', // Transition effect for hover or click events\n\n    // Flexbox properties\n    display: 'flex', // CSS display property\n    justifyContent: 'center', // Aligns children (e.g., icon) horizontally\n    alignItems: 'center', // Aligns children (e.g., icon) vertically\n};\n\n<AiAssistantButton style={customStyle} />;\n"})}),(0,o.jsxs)(t.p,{children:["For example: To override default positioning, set ",(0,o.jsx)(t.code,{children:"position: 'relative'"})," and ",(0,o.jsx)(t.code,{children:"bottom/right: 'auto'"}),". This allows custom placement within your container."]}),(0,o.jsx)(t.h3,{id:"33-button-advanced-styling",children:"3.3 Button Advanced Styling"}),(0,o.jsx)(t.p,{children:"Apply CSS classes for complex styling:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'.my-custom-button {\n    padding: 10px 20px;\n    transition: all 0.5s ease;\n\n    /* Hover effect */\n    &:hover {\n        background-color: #365f8c;\n        transform: scale(1.1);\n    }\n\n    /* Responsive adjustments */\n    @media (max-width: 600px) {\n        width: 100%;\n        font-size: 14px;\n    }\n}\n\n<AiAssistantButton className="my-custom-button" />\n'})}),(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"style"})," prop for inline adjustments or ",(0,o.jsx)(t.code,{children:"className"})," for stylesheet-based customizations."]}),(0,o.jsx)(t.h2,{id:"4-button-click-event-tracking",children:"4 Button Click Event Tracking"}),(0,o.jsx)(t.p,{children:"To track button click events, you can pass a function to the onClick prop of the button."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'const trackAiAssistantButtonClick = () => {\n  console.log("AiAssistantButton Clicked!");\n};\n\n<AiAssistantButton onClick={trackAiAssistantButtonClick} />\n'})})]})})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var o=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,r),hidden:n,children:t})}},2130:(e,t,n)=>{n.d(t,{A:()=>k});var o=n(6540),a=n(4164),s=n(3104),r=n(6347),i=n(205),l=n(7485),c=n(1682),u=n(9466);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[c,d]=b({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function g(e){let{className:t,block:n,selectedValue:o,selectValue:r,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==o&&(c(t),r(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function A(e){const t=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}const k=e=>{let{children:t}=e;return(0,x.jsx)(A,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"iOS",value:"ios"},{label:"Android",value:"android"},{label:"Angular",value:"angular"},{label:"Ember",value:"ember"},{label:"Svelte",value:"svelte"},{label:"Gatsby",value:"gatsby"},{label:"Dart",value:"dart"},{label:"Ionic",value:"ionic"},{label:"Cordova",value:"cordova"},{label:"Flutter",value:"flutter"},{label:"Maui",value:"maui"},{label:"Xamarin",value:"xamarin"},{label:"JavaScript",value:"js"}],children:t})}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(6540);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);