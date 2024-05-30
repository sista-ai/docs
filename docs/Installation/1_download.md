---
id: download
title: 1. Install AI Assistant
sidebar_position: 11
---

import FrameworksTabs from '@site/src/components/FrameworksTabs';
import TabItem from '@theme/TabItem';
import SupportedSDKs from '@site/src/components/SupportedSDKs';


<FrameworksTabs>
<TabItem value='react'>

## Supported React Projects

This package supports a diverse range of React-based projects:

<SupportedSDKs numPerRow={5} filter={['React', 'NextJS', 'Electron', 'Gatsby', 'Meteor', 'React Native', 'Remix', 'RedwoodJS', 'Expo', 'BlitzJS']} />

## Installation (React)

Install `@sista/ai-assistant-react` in your React App.

```bash
npm install @sista/ai-assistant-react
```

## Setup: AI Assistant

### 1. Import Provider

Import `AiAssistantProvider` and wrap your App at the root level.

```jsx
// ...
import { AiAssistantProvider } from "@sista/ai-assistant-react";

ReactDOM.render(
  <AiAssistantProvider apiKey="YOUR_API_KEY">
    {" "}
    // Wrap your app with this provider
    <App />
  </AiAssistantProvider>
  // ...
);
```

Get your **free** `API key` from the [Admin Panel](https://admin.sista.ai/applications) and replace `"YOUR_API_KEY"`.

### 2. Import Button

Import `AiAssistantButton` and add it wherever you want.

```jsx
// ...
import { AiAssistantButton } from "@sista/ai-assistant-react";

// ...
function MyComponent() {
  return (
    <div>
      // ...
      <AiAssistantButton /> // Add the magic button anywhere
    </div>
  );
}
```

> 🎉 Congrats! Press the button, start talking, and enjoy!

</TabItem>

</FrameworksTabs>
