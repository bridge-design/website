import { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['brand-dark', 'brand-green', 'brand-pink', 'brand-yellow', 'brand-light'],
      },
    },
    className: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const BrandDark: Story = {
  args: {
    variant: 'dark',
    className: '',
  },
}

export const BrandGreen: Story = {
  args: {
    variant: 'green',
    className: '',
  },
}

export const BrandPink: Story = {
  args: {
    variant: 'pink',
    className: '',
  },
}

export const BrandYellow: Story = {
  args: {
    variant: 'yellow',
    className: '',
  },
}

export const BrandLight: Story = {
  args: {
    variant: 'light',
    className: '',
  },
}
