import { Meta, StoryObj } from '@storybook/react'
import { Blob } from './Blob'

const meta: Meta<typeof Blob> = {
  title: 'Components/Blob',
  component: Blob,
  argTypes: {
    color: {
      control: 'color',
      description: 'Color of the blob.',
      defaultValue: '#4a90e2',
    },
    size: {
      control: 'number',
      description: 'Size of the blob (width and height).',
      defaultValue: 300,
    },
  },
}

export default meta

type Story = StoryObj<typeof Blob>

export const Default: Story = {
  args: {
    size: 300,
  },
}

export const CustomSize: Story = {
  args: {
    color: 'var(--btg-color-primary-500)',
    size: 500,
  },
}
