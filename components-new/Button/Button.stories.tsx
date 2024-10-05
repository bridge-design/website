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
