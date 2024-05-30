---
id: configure
title: 3. Configure Your App
sidebar_position: 13
---

import FrameworksTabs from '@site/src/components/FrameworksTabs';
import TabItem from '@theme/TabItem';

<FrameworksTabs>
<TabItem value='react'>

## 1. Access Control

Access control is a critical security measure that ensures only authorized users can interact with your system.

### 1.1 Domain / IP Whitelisting

To secure your production environment, you must whitelist your domains / IPs through the [Admin Panel](https://admin.sista.ai/applications).

### 1.2 Rate Limit Control

To prevent abuse, configure request limits per user within a specified timeframe via the [Admin Panel](https://admin.sista.ai/applications).

## 2. Props Reference

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