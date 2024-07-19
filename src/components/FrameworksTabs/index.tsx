// src/components/FrameworkTabs.jsx
import React from 'react';
import Tabs from '@theme/Tabs';

const FrameworksTabs = ({ children }) => (
  <Tabs
    defaultValue="react"
    values={[
      {label: 'React', value: 'react'},
			{label: 'JavaScript', value: 'js'},
      {label: 'iOS', value: 'ios'},
      {label: 'Android', value: 'android'},
			{label: 'Ionic', value: 'ionic'},
			{label: 'Vue', value: 'vue'},
      {label: 'Angular', value: 'angular'},
      {label: 'Gatsby', value: 'gatsby'},
      {label: 'Cordova', value: 'cordova'},
      {label: 'Flutter', value: 'flutter'},
      {label: 'Maui', value: 'maui'},
      {label: 'Xamarin', value: 'xamarin'},
			{label: 'Dart', value: 'dart'},
			{label: 'Ember', value: 'ember'},
      {label: 'Svelte', value: 'svelte'},

    ]}
  >
    {children}
  </Tabs>
);

export default FrameworksTabs;
