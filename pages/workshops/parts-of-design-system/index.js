import React from 'react';
import PartsExercise from '@components/ds-parts';
import { ThemeProvider } from 'theme-ui'
import theme from '../../../components/theme-ui-object/index';

const PartsOfDesignSystem = () => {
    return (
        <ThemeProvider theme={theme} >
            <PartsExercise />
        </ThemeProvider>
    )
}

export default PartsOfDesignSystem;