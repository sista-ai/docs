import React from "react";
import OriginalLayout from "@theme-original/Layout";
import AiAssistant from "../components/AiAssistant";
import { AiAssistantProvider } from "@sista/ai-assistant-react";
const config = require("../config");

const Layout = (props) => {
  return (
    <OriginalLayout {...props}>
      {props.children}
      <AiAssistant />
    </OriginalLayout>
  );
};

const Providers = (props) => {
  // For debugging, temporarily force the dev API key and add detailed logging
  const apiKey = config.SISTA_AI_API_KEY_DEV;
  const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const apiUrl = isDevelopment ? "http://localhost:3077" : undefined;

  // console.log('Debug Info:');
  // console.log('Current hostname:', window.location.hostname);
  // console.log('Is development:', isDevelopment);
  // console.log('Using API Key:', apiKey);
  // console.log('Using API URL:', apiUrl);
  // console.log('Full config:', JSON.stringify(config, null, 2));

  return (
    <AiAssistantProvider
      debug={true}
      apiKey={apiKey}
      apiUrl={apiUrl}
    >
      <Layout {...props} />
    </AiAssistantProvider>
  );
};

export default Providers;
