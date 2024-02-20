import { Divider, MantineProvider, Text } from '@mantine/core';
import React from 'react';
import { Hero } from './components/Hero';
// import { Companies } from './components/Companies/Companies';
// import ProgressBar from './components/ProgressBar/ProgressBar';
// import { DataScience } from './components/DataScience/DataScience';
import { useKonami } from 'react-konami-code';

const easterEgg = () => {
  alert('El secretazo.');
}

export default function App() {
  useKonami(easterEgg);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS 
    theme={{
      colors: {
        'royal-blue': [
          "#4D7CC2",
          "#3A6CB8",
          "#3160A7",
          "#295598",
          "#224C8A",
          "#1C437E",
          "#1B3B6D",
          "#19355E",
          "#182F51",
          "#162946"
        ]
      },
      primaryColor: 'royal-blue',
      fontFamily: "Pridi, serif",
      headings: {
        fontFamily: "Protest Strike, sans-serif",
        fontWeight: 400
      },
      fontFamilyMonospace: "Noto Sans Mono, monospace"
    }}>
      {/* <ProgressBar/> */}
      <Hero/>
      {/* <Companies/>
      <DataScience/> */}
      {/* <DataScience/> */}

    </MantineProvider>
  );
}