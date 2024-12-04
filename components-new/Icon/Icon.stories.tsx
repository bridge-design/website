import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['beta'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Name of the Carbon Design icon to render.',
      defaultValue: 'UserIdentification',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the icon container.',
    },
    size: {
      control: { type: 'number', min: 16, max: 64, step: 1 },
      description: 'Size of the icon.',
      defaultValue: 32,
    },
  },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    name: 'UserIdentification',
  },
}

export const CustomSize: Story = {
  args: {
    name: 'Rocket',
    size: 48,
  },
}

export const CustomStyle: Story = {
  args: {
    name: 'TreeView',
    size: 32,
    className: 'bg-gray-100 text-gray-800',
  },
}
