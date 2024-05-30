---
id: customize
title: 4. Customize Your AI
sidebar_position: 14
---

import FrameworksTabs from '@site/src/components/FrameworksTabs';
import TabItem from '@theme/TabItem';

<FrameworksTabs>
<TabItem value='react'>

## 1. AI Characteristics

Customize the assistant behavior via the [Admin Panel](https://admin.sista.ai/applications) by providing your `custom prompt` and `training data`.

> By default, `AiAssistantProvider` supplies the AI model with the current screen content. To disable, set `scrapeContent` to false. Scraped content supplements your custom prompts added from the admin panel.

## 2. Assistant Voice

Change AI assistant's voice via the [Admin Panel](https://admin.sista.ai/applications) by selecting your preferred voice in the application settings.

## 3 Button Design

### 3.1 Button Color

Modify the colors of the `AiAssistantButton` at different states:

```jsx
const customStateColors = {
    STATE_IDLE: '#4a6cf6', // Bright Blue
    STATE_LISTENING_START: '#F64A7B', // Bright Pink
    STATE_THINKING_START: '#4ac2f6', // Sky Blue
    STATE_SPEAKING_START: '#4af67f', // Light Green
};

<AiAssistantButton stateColors={customStateColors} />;
```

### 3.2 Button Style & Position

Pass a `style` object to adjust dimensions, position, and appearance:

```jsx
const customStyle = {
    // Positioning and layout properties
    position: 'relative', // Positioning of the button, 'absolute' or 'relative' to its normal position
    bottom: 'auto', // Distance from the bottom of its container (use with 'position: absolute')
    right: 'auto', // Distance from the right of its container (use with 'position: absolute')
    zIndex: 999, // Z-index for layering controls

    // Dimension properties
    width: '100px', // Button width
    height: '100px', // Button height

    // Font and color properties
    fontSize: '50px', // Font size of the icon/text inside the button
    color: '#FFF', // Color of the text/icon inside the button

    // Border properties
    border: 'none', // Border properties
    borderRadius: '20%', // Border radius to control the curvature of the button corners

    // Box model properties
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)', // Box shadow properties
    transition: 'background-color 0.3s ease-in-out', // Transition effect for hover or click events

    // Flexbox properties
    display: 'flex', // CSS display property
    justifyContent: 'center', // Aligns children (e.g., icon) horizontally
    alignItems: 'center', // Aligns children (e.g., icon) vertically
};

<AiAssistantButton style={customStyle} />;
```

For example: To override default positioning, set `position: 'relative'` and `bottom/right: 'auto'`. This allows custom placement within your container.

### 3.3 Button Advanced Styling

Apply CSS classes for complex styling:

```jsx
.my-custom-button {
    padding: 10px 20px;
    transition: all 0.5s ease;

    /* Hover effect */
    &:hover {
        background-color: #365f8c;
        transform: scale(1.1);
    }

    /* Responsive adjustments */
    @media (max-width: 600px) {
        width: 100%;
        font-size: 14px;
    }
}

<AiAssistantButton className="my-custom-button" />
```

Use the `style` prop for inline adjustments or `className` for stylesheet-based customizations.

## 4 Button Click Event Tracking

To track button click events, you can pass a function to the onClick prop of the button.

```jsx
const trackAiAssistantButtonClick = () => {
  console.log("AiAssistantButton Clicked!");
};

<AiAssistantButton onClick={trackAiAssistantButtonClick} />
```

</TabItem>

</FrameworksTabs>
