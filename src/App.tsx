import { MantineProvider, Text } from '@mantine/core';
import React from 'react';
import { Companies } from './components/Companies/Companies';
import { Hero } from './components/Hero';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Hero/>
      <Companies/>
    </MantineProvider>
  );
}