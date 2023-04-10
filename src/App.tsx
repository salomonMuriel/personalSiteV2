import { MantineProvider, Text } from '@mantine/core';
import React from 'react';
import { Companies } from './components/Companies/Companies';
import { Hero } from './components/Hero';
import ProgressBar from './components/ProgressBar/ProgressBar';
import { News } from './components/News/News';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ProgressBar/>
      <Hero/>
      <Companies/>
      <News/>
      {/* <DataScience/> */}

    </MantineProvider>
  );
}