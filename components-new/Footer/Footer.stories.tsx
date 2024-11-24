// Footer.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['beta'],
  argTypes: {
    siteTitle: {
      control: 'text',
      description: 'The title of the site displayed in the footer.',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the footer.',
      defaultValue: 'var(--btg-hero-background-teal)',
    },
    className: {
      control: 'text',
      description: 'Additional classes for styling the footer.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    siteTitle: 'Bridge the Gap',
    backgroundColor: 'var(--btg-hero-background-teal)',
  },
}

export const CustomColor: Story = {
  args: {
    siteTitle: 'Bridge the Gap',
    backgroundColor: 'var(--btg-color-primary-500)',
  },
}
