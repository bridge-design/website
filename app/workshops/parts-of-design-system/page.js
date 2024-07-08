"use client";
import { ThemeUIProvider } from 'theme-ui'

import PartsExercise from '@/components/ds-parts'

import theme from '../../../components/theme-ui-object/index'

const PartsOfDesignSystem = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <PartsExercise />
    </ThemeUIProvider>
  );
};

export default PartsOfDesignSystem;
