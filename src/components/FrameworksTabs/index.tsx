// src/components/FrameworkTabs.jsx
import React from 'react';
import Tabs from '@theme/Tabs';

const FrameworksTabs = ({ children }) => (
  <Tabs
    defaultValue="react"
    values={[
      {label: 'React', value: 'react'},
      {label: 'Vue', value: 'vue'},
      {label: 'iOS', value: 'ios'},
      {label: 'Android', value: 'android'},
      {label: 'Angular', value: 'angular'},
      {label: 'Ember', value: 'ember'},
      {label: 'Svelte', value: 'svelte'},
      {label: 'Gatsby', value: 'gatsby'},
      {label: 'Dart', value: 'dart'},
      {label: 'Ionic', value: 'ionic'},
      {label: 'Cordova', value: 'cordova'},
      {label: 'Flutter', value: 'flutter'},
      {label: 'Maui', value: 'maui'},
      {label: 'Xamarin', value: 'xamarin'},
      {label: 'JavaScript', value: 'js'},
    ]}
  >
    {children}
  </Tabs>
);

export default FrameworksTabs;
