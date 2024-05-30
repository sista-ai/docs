// src/components/SupportedSDKs.js
import React from "react";
import "./sdks.css"; // Make sure to style the table as needed


const frameworks = [
  // React Based --------------------------------------------------------------
  { src: '/img/sdks/REACT.svg', alt: 'React', name: 'React', link: 'https://github.com/sista-ai/ai-assistant-react' },
  { src: '/img/sdks/NEXT.svg', alt: 'Next', name: 'NextJS', link: 'https://github.com/sista-ai/ai-assistant-react' },
  { src: '/img/sdks/ELECTRON.svg', alt: 'Electron', name: 'Electron', link: 'https://github.com/sista-ai/ai-assistant-react' },
  { src: '/img/sdks/GATSBY.svg', alt: 'Gatsby', name: 'Gatsby', link: 'https://github.com/sista-ai/ai-assistant-react' },
  { src: '/img/sdks/METEOR.svg', alt: 'Meteor', name: 'Meteor', link: 'https://github.com/sista-ai/ai-assistant-react' },
  { src: '/img/sdks/REACT-NATIVE.svg', alt: 'React Native', name: 'React Native', link: 'https://github.com/sista-ai/ai-assistant-react' },
  { src: '/img/sdks/REMIX.svg', alt: 'Remix', name: 'Remix', link: 'https://github.com/sista-ai/ai-assistant-react' },
  { src: '/img/sdks/REDWOODJS.svg', alt: 'RedwoodJS', name: 'RedwoodJS', link: 'https://github.com/sista-ai/ai-assistant-react' },
  { src: '/img/sdks/EXPO.svg', alt: 'Expo', name: 'Expo', link: 'https://github.com/sista-ai/ai-assistant-react' },
  { src: '/img/sdks/BLITZJS.svg', alt: 'BlitzJS', name: 'BlitzJS', link: 'https://github.com/sista-ai/ai-assistant-react' },
  // Rest --------------------------------------------------------------
  { src: '/img/sdks/IOS.svg', alt: 'iOS', name: 'iOS', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/ANDROID.svg', alt: 'Android', name: 'Android', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/VUE.svg', alt: 'Vue', name: 'Vue', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/DART.svg', alt: 'Dart', name: 'Dart', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/JS.svg', alt: 'JavaScript', name: 'JavaScript', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/EMBER.svg', alt: 'Ember', name: 'Ember', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/SVELTE.svg', alt: 'Svelte', name: 'Svelte', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/IONIC.svg', alt: 'Ionic', name: 'Ionic', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/CORDOVA.svg', alt: 'Cordova', name: 'Cordova', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/FLUTTER.svg', alt: 'Flutter', name: 'Flutter', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/MAUI.svg', alt: 'MAUI', name: 'MAUI', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/XAMARIN.svg', alt: 'Xamarin', name: 'Xamarin', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/ASTRO.svg', alt: 'Astro', name: 'Astro', link: 'https://github.com/orgs/sista-ai/repositories' },
  { src: '/img/sdks/ANGULAR.svg', alt: 'Angular', name: 'Angular', link: 'https://github.com/orgs/sista-ai/repositories' }
];


const SupportedSDKs = ({ numPerRow, filter }) => {
  const numCols = numPerRow || 8; // Number of columns in the table, default is 8
  const filteredFrameworks = filter
    ? frameworks.filter((f) => filter.includes(f.name))
    : frameworks;

  const rows = [];
  for (let i = 0; i < filteredFrameworks.length; i += numCols) {
    const cols = filteredFrameworks
      .slice(i, i + numCols)
      .map((framework, index) => (
        <td key={index}>
          <a href={framework.link} target="_blank" rel="noopener noreferrer">
            <img
              src={framework.src}
              alt={framework.alt}
              width="100"
              height="100"
            />
          </a>
        </td>
      ));
    rows.push(<tr key={i}>{cols}</tr>);
  }

  return (
    <table className="frameworks-table">
      <tbody>{rows}</tbody>
    </table>
  );
};

export default SupportedSDKs;
