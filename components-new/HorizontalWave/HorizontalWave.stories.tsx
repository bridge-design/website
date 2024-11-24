import { Meta, StoryObj } from '@storybook/react'
import { HorizontalWave } from './HorizontalWave'

const meta: Meta<typeof HorizontalWave> = {
  title: 'Components/HorizontalWave',
  component: HorizontalWave,
  tags: ['beta'],
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['down', 'top'],
      description: 'Direction of the wave (down or top).',
    },
    color: {
      control: 'color',
      description: 'Color of the wave.',
    },
  },
}

export default meta

type Story = StoryObj<typeof HorizontalWave>

export const Default: Story = {
  args: {
    direction: 'down',
    color: 'currentColor',
  },
}

export const TopDirection: Story = {
  args: {
    direction: 'top',
    color: 'var(--btg-color-primary-500)',
  },
}

export const CustomColor: Story = {
  args: {
    direction: 'down',
    color: 'var(--btg-color-accent-500)',
  },
}
