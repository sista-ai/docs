---
id: configure
title: 3. Configuration
sidebar_position: 13
---

import FrameworksTabs from '@site/src/components/FrameworksTabs';
import TabItem from '@theme/TabItem';

---

<FrameworksTabs>
<TabItem value='react'>

---

<br/>
<br/>


## Intro

Gain full control over your AI assistant with our powerful admin panel. While most settings are optional, whitelisting your domains is required for production deployment. These settings give you complete oversight of user interactions, helping you manage usage and control costs effectively.

<br/>
<br/>


## 1. Access Control

Access control is a critical security measure that ensures only authorized users can access.

<br/>

### 1.1 Domain / IP Whitelisting   (Required)

In production, **you must** whitelist your domains / IPs through the [Admin Panel](https://admin.sista.ai/applications?tab=access-control).

<br/>

### 1.2 Rate Limit Control

To prevent abuse, configure request limits per user within a timeframe via the [Admin Panel](https://admin.sista.ai/applications?tab=access-control).


<br/>
<br/>

## 2. Button Click Event Tracking

To track button click events, you can pass a function to the onClick prop of the button.

```jsx
const trackAiAssistantButtonClick = () => {
  console.log("AiAssistantButton Clicked!");
};

<AiAssistantButton onClick={trackAiAssistantButtonClick} />
```

<br/>
<br/>

## 3. Props Reference

`AiAssistantProvider` accepts the following props:

```jsx
<AiAssistantProvider
    apiKey="api-key" // (required): Your API key.
    userId="user-id" // (optional): Your end user ID (for analytics tracking).
    scrapeContent={true} // (optional): Automatic page content scraping (Enabled by default).
    debug={false} // (optional): Debug mode. (Disabled by default)
    apiUrl="api-url" // (optional): For testing purposes.
>
    // ...
</AiAssistantProvider>
```



</TabItem>

</FrameworksTabs>
