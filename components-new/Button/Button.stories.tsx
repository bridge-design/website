import { Meta, StoryObj } from '@storybook/react'
import { Button, buttonVariants, ButtonProps } from './Button'
import { fn } from '@storybook/test'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: buttonVariants,
      },
    },
    children: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

const defaultArgs: ButtonProps = {
  variant: 'primary',
  children: 'Button',
  onClick: fn(),
  size: 'md',
  fullWidth: false,
  disabled: false,
}

export const Demo: Story = {
  args: defaultArgs,
  parameters: {
    docs: {
      excludeFromStoryGrid: true,
    },
  },
}
export const Primary: Story = {
  args: defaultArgs,
}

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    variant: 'secondary',
  },
}

export const Ghost: Story = {
  args: {
    ...defaultArgs,
    variant: 'ghost',
  },
}

export const Small: Story = {
  args: {
    ...defaultArgs,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    ...defaultArgs,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    ...defaultArgs,
    size: 'lg',
  },
}

export const FullWidth: Story = {
  args: {
    ...defaultArgs,
    fullWidth: true,
  },
}

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
}
