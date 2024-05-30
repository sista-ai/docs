---
id: download
title: 1. Install AI Assistant
sidebar_position: 11
---

import FrameworksTabs from '@site/src/components/FrameworksTabs';
import TabItem from '@theme/TabItem';
import SupportedSDKs from '@site/src/components/SupportedSDKs';

---

<FrameworksTabs>
<TabItem value='react'>

---

<br/>
<br/>

## Supported React-based Frameworks

This package supports a diverse range of React-based frameworks:

<SupportedSDKs numPerRow={5} filter={['React', 'NextJS', 'Electron', 'Gatsby', 'Meteor', 'React Native', 'Remix', 'RedwoodJS', 'Expo', 'BlitzJS']} />


<br/>
<br/>

## 1. Install Package


Install  (**@sista/ai-assistant-react**)  in your React App.

```bash
npm install @sista/ai-assistant-react
```
If using Yarn: ` yarn add @sista/ai-assistant-react `


<br/>
<br/>

## 2. Import Provider

Import `AiAssistantProvider` and wrap your App at the root level, with the AI Assistant Provider.

```jsx
import { AiAssistantProvider } from "@sista/ai-assistant-react";

ReactDOM.render(
  <AiAssistantProvider apiKey="YOUR_API_KEY">
    <App />
  </AiAssistantProvider>
);
```

Get your **free** `API key` from the [Admin Panel](https://admin.sista.ai/applications) and replace `"YOUR_API_KEY"`.


<br/>
<br/>

## 3. Import Button

Import `AiAssistantButton` and inject it wherever you want.

```jsx
import { AiAssistantButton } from "@sista/ai-assistant-react";

function RandomComponent() {
  return (
    // ...
      <AiAssistantButton />
    // ...
  );
}
```

> 🎉 Congrats! Press the button, start talking, and enjoy!

</TabItem>

</FrameworksTabs>
