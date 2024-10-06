import React from 'react'
import '../css/tailwind.css'
import { Title, Subtitle, Description, Primary, Controls, Heading } from '@storybook/blocks'
import { StoryGrid } from './storybook-components/story-grid'
import { themes } from '@storybook/theming'
import { ComponentLinks } from './storybook-components/component-links'
import { ComponentDescription } from './storybook-components/component-description'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    backgrounds: {
      values: [
        { name: 'Light', value: '#FFF' },
        { name: 'Dark', value: '#000' },
        { name: 'Gray', value: '#F8F8F8' },
      ],
    },

    tags: ['autodocs'],
    docs: {
      theme: {
        ...themes.light,
        fontBase: 'InterVariable, Helvetica, Arial,sans-serif',
      },
      toc: {
        headingSelector: 'h2, [data-include-toc]',
        ignoreSelector: '[data-skip-toc]',
      },
      page: () => {
        return (
          <>
            <Title />
            <ComponentLinks />
            <Subtitle />
            <ComponentDescription />
            <Heading>Live Demo</Heading>
            <Primary />
            <Controls />
            <StoryGrid />
          </>
        )
      },
    },
  },
}

export default preview
