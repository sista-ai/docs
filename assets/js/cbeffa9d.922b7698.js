"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13],{8947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(4848),r=t(8453),s=t(2130),i=t(9365);const o={id:"setup",title:"2. Setup Voice UI",sidebar_position:12},l=void 0,c={id:"installation/setup",title:"2. Setup Voice UI",description:"---",source:"@site/docs/installation/2_setup.md",sourceDirName:"installation",slug:"/installation/setup",permalink:"/installation/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/sista-ai/docs/blob/main/docs/installation/2_setup.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"setup",title:"2. Setup Voice UI",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"1. Install AI Assistant",permalink:"/installation/download"},next:{title:"3. Configuration",permalink:"/installation/configure"}},u={},d=[{value:"Intro",id:"intro",level:2},{value:"Register Voice-Controlled Functions",id:"register-voice-controlled-functions",level:2},{value:"Functions With Parameters:",id:"functions-with-parameters",level:2},{value:"Full Example: (Todo App)",id:"full-example-todo-app",level:2},{value:"Pro Tip: Auto-Generate Signatures with AI",id:"pro-tip-auto-generate-signatures-with-ai",level:2},{value:"Code Examples",id:"code-examples",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsxs)(i.A,{value:"react",children:[(0,a.jsx)(n.hr,{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.h2,{id:"intro",children:"Intro"}),(0,a.jsx)(n.p,{children:"To give your AI assistant control over the user interface, you need to specify the functions it can call, along with clear descriptions of their purposes. In this guide, we\u2019ll demonstrate how to easily set up voice UI, allowing your users to interact with your app through simple voice commands."}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.h2,{id:"register-voice-controlled-functions",children:"Register Voice-Controlled Functions"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Inform the model which functions it can call by registering an ",(0,a.jsx)(n.code,{children:"array"})," of ",(0,a.jsx)(n.code,{children:"function signatures"}),"."]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'const sayHelloWorld = () => {\n  console.log("Hello, World!");\n};\n\n// define functions for AI to call\nconst aiFunctions = [\n  {\n    function: {\n      handler: sayHelloWorld, // (required) pass a refference to your function\n      description: "Greets the user with Hello World :)", // (required) its important to include clear description (our smart AI automatically handles different variations.)\n    },\n  },\n  // ... register additional functions here\n];\n'})}),(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Register the functions using ",(0,a.jsx)(n.code,{children:"registerFunctions([...]);"})," inside a ",(0,a.jsx)(n.code,{children:"useEffect"})," hook."]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"// register the AI functions\nconst { registerFunctions } = useAiAssistant();\n\nuseEffect(() => {\n  if (registerFunctions) {\n    registerFunctions(aiFunctions); // pass the AI functions array to the Assistant\n  }\n}, [registerFunctions]);\n"})}),(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Just like that, your app is voice-interactive. Magic! ","\u2728"]}),"\n"]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.h2,{id:"functions-with-parameters",children:"Functions With Parameters:"}),(0,a.jsx)(n.p,{children:"For functions that accepts parameters: simply describe the parameters."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'const sayHello = (name) => {\n  console.log(`Hello ${name}!`);\n};\n\nconst navigateToPage = (page) => {\n  console.log(`Navigating to ${page}`);\n};\n\n// Define functions for AI to call\nconst aiFunctions = [\n  {\n    function: {\n      handler: sayHello,\n      description: "Greets the user with their name.",\n      parameters: {\n        type: "object",\n        properties: {\n          name: {\n            type: "string", // set parameter type\n            description: "The user\'s name.", // add parameter description\n          },\n        },\n      },\n    },\n  },\n  {\n    function: {\n      handler: navigateToPage,\n      description: "Go to a specific page.",\n      parameters: {\n        type: "object",\n        properties: {\n          page: {\n            type: "string", // set parameter type\n            description: "The page to navigate to.", // add parameter description\n            enum: ["Page 1", "Page 2", "Page 3"], // list acceptable values\n          },\n        },\n        required: ["page"], // list required parameters\n      },\n    },\n  },\n];\n'})}),(0,a.jsx)(n.hr,{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.h2,{id:"full-example-todo-app",children:"Full Example: (Todo App)"}),(0,a.jsxs)(n.p,{children:["For a voice-interactive todo app to ",(0,a.jsx)(n.code,{children:"add"})," or ",(0,a.jsx)(n.code,{children:"remove"})," tasks, the setup looks like this:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'import React, { useEffect } from "react";\nimport { useAiAssistant, AiAssistantButton } from "@sista/ai-assistant-react";\n// ...\n\nfunction TodoApp() {\n  const addTask = (task) => {\n    console.log(`Task added: ${task}`);\n  };\n\n  const removeTask = (task) => {\n    console.log(`Task removed: ${task}`);\n  };\n\n  // ...\n\n  // 1) Initialize the aiAssistant instance\n  const { registerFunctions } = useAiAssistant();\n\n  useEffect(() => {\n    // 2) Define the voice-controlled functions\n    const aiFunctions = [\n      {\n        function: {\n          handler: addTask,\n          description: "Adds a new task.",\n          parameters: {\n            type: "object",\n            properties: {\n              task: {\n                type: "string",\n                description: "Description of the task.",\n              },\n            },\n            required: ["task"],\n          },\n        },\n      },\n      {\n        function: {\n          handler: removeTask,\n          description: "Removes an existing task.",\n          parameters: {\n            type: "object",\n            properties: {\n              task: {\n                type: "string",\n                description: "Description of the task.",\n              },\n            },\n            required: ["task"],\n          },\n        },\n      },\n      // ...\n    ];\n\n    // 3) Register the voice-controlled functions\n    if (registerFunctions) {\n      registerFunctions(aiFunctions);\n    }\n  }, [registerFunctions]);\n\n  // ...\n\n  // 4) Inject the AI button\n  return (\n    <div>\n      <AiAssistantButton />\n    </div>\n  );\n}\n\nexport default TodoApp;\n'})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.h2,{id:"pro-tip-auto-generate-signatures-with-ai",children:"Pro Tip: Auto-Generate Signatures with AI"}),(0,a.jsx)(n.p,{children:"Use ChatGPT or GitHub Copilot to auto-generate function signatures. Simply copy this documentation page into your model, along with your component code and a list of the functions you would like to voice-enable."}),(0,a.jsx)(n.h2,{id:"code-examples",children:"Code Examples"}),(0,a.jsxs)(n.p,{children:["For practical implementation code samples, check out ",(0,a.jsx)(n.a,{href:"/intro/#real-world-implementations",children:"Sista AI Real World Implementations"}),"."]})]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},2130:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(6540),r=t(4164),s=t(3104),i=t(6347),o=t(205),l=t(7485),c=t(1682),u=t(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),v=(()=>{const e=c??m;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function A(e){const n=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}const k=e=>{let{children:n}=e;return(0,g.jsx)(A,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"JavaScript",value:"js"},{label:"iOS",value:"ios"},{label:"Android",value:"android"},{label:"Ionic",value:"ionic"},{label:"Vue",value:"vue"},{label:"Angular",value:"angular"},{label:"Gatsby",value:"gatsby"},{label:"Cordova",value:"cordova"},{label:"Flutter",value:"flutter"},{label:"Maui",value:"maui"},{label:"Xamarin",value:"xamarin"},{label:"Dart",value:"dart"},{label:"Ember",value:"ember"},{label:"Svelte",value:"svelte"}],children:n})}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(6540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);