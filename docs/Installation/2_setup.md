---
id: setup
title: 2. Setup UI Controller
sidebar_position: 12
---

import FrameworksTabs from '@site/src/components/FrameworksTabs';
import TabItem from '@theme/TabItem';

---

<FrameworksTabs>
<TabItem value='react'>

---

<br/>
<br/>

## Register Voice-Interactive Functions

To allow AI to control your UI:

1. Inform the model which functions it can call by registering an `array` of `function signatures`.

```jsx
const sayHelloWorld = () => {
  console.log("Hello, World!");
};

// Define the functions to be voice-controlled
const aiFunctions = [
  {
    function: {
      handler: sayHelloWorld, // (required) pass a refference to your function
      description: "Greets the user with Hello World :)", // (required) its important to include clear description (our smart AI automatically handles different variations.)
    },
  },
  // ... register additional functions here
];
```

2. Register the functions using `registerFunctions([...]);` inside a `useEffect` hook.

```jsx
const { registerFunctions } = useAiAssistant();

useEffect(() => {

  if (registerFunctions) {
    registerFunctions(aiFunctions);
  }
  
}, [registerFunctions]);
```

> Just like that, your app is voice-interactive. Magic! :sparkles:

<br/>
<br/>

## Functions With Parameters:

For functions that accepts parameters: simply describe the parameters.

```jsx
const sayHello = (name) => {
  console.log(`Hello ${name}!`);
};

const navigateToPage = (page) => {
  console.log(`Navigating to ${page}`);
};

// Define the functions to be voice-controlled
const aiFunctions = [
  {
    function: {
      handler: sayHello,
      description: "Greets the user with their name.",
      parameters: {
        type: "object",
        properties: {
          name: {
            type: "string", // set parameter type
            description: "The user's name.", // add parameter description
          },
        },
      },
    },
  },
  {
    function: {
      handler: navigateToPage,
      description: "Go to a specific page.",
      parameters: {
        type: "object",
        properties: {
          page: {
            type: "string", // set parameter type
            description: "The page to navigate to.", // add parameter description
            enum: ["Page 1", "Page 2", "Page 3"], // list acceptable values
          },
        },
        required: ["page"], // list required parameters
      },
    },
  },
];
```

---

<br/>
<br/>

## Full Example: (Todo App)

For a voice-interactive todo app to `add` or `remove` tasks, the setup looks like this:

```jsx
import React, { useEffect } from "react";
import { useAiAssistant, AiAssistantButton } from "@sista/ai-assistant-react";

function TodoApp() {
  const addTask = (task) => {
    console.log(`Task added: ${task}`);
  };

  const removeTask = (task) => {
    console.log(`Task removed: ${task}`);
  };

  // ...

  // Initialize the aiAssistant instance
  const { registerFunctions } = useAiAssistant();

  useEffect(() => {
    // Define the voice-controlled functions
    const aiFunctions = [
      {
        function: {
          handler: addTask,
          description: "Adds a new task.",
          parameters: {
            type: "object",
            properties: {
              task: {
                type: "string",
                description: "Description of the task.",
              },
            },
            required: ["task"],
          },
        },
      },
      {
        function: {
          handler: removeTask,
          description: "Removes an existing task.",
          parameters: {
            type: "object",
            properties: {
              task: {
                type: "string",
                description: "Description of the task.",
              },
            },
            required: ["task"],
          },
        },
      },
    ];

    // Register the AI controlled functions
    if (registerFunctions) {
      registerFunctions(aiFunctions);
    }
  }, [registerFunctions]);

  // ...

  return (
    <div>
      // ...
      <AiAssistantButton />
    </div>
  );
}

export default TodoApp;
```


<br/>
<br/>

## Tip! Auto-Generate Signatures

Use ChatGPT or GitHub Copilot to auto-generate function signatures. 

Simply copy this documentation page into your model, along with your component code and a list of the functions you would like to voice-enable.



</TabItem>

</FrameworksTabs>
