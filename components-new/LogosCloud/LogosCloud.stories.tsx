import { Meta, StoryObj } from '@storybook/react'
import { LogosCloud } from './LogosCloud'

const meta: Meta<typeof LogosCloud> = {
  title: 'Components/LogosCloud',
  component: LogosCloud,
  argTypes: {
    logos: {
      control: 'object',
      description: 'List of logos with source, alt text, and link.',
    },
  },
}

export default meta

type Story = StoryObj<typeof LogosCloud>

export const Default: Story = {
  args: {
    logos: [
      { src: '/logo/appomni-logo.svg', alt: 'Logo 1', link: '#' },
      { src: '/logo/yara-logo.svg', alt: 'Logo 2', link: '#' },
      { src: '/logo/f-secure-logo.svg', alt: 'Logo 3', link: '#' },
      { src: '/logo/metro-logo.svg', alt: 'Logo 4', link: '#' },
      { src: '/logo/elisa-logo.svg', alt: 'Logo 5', link: '#' },
    ],
  },
}
