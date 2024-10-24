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
    animate: { control: 'boolean' },
    variant: { control: { type: 'select' }, options: [1, 2, 3, 4, 5, 6] },
  },
}

export default meta

type Story = StoryObj<typeof Blob>

export const Variant1: Story = {
  args: {
    color: 'var(--btg-color-primary-500)',
    size: 300,
    variant: 1,
    animate: true,
  },
}

export const Variant2: Story = {
  args: {
    color: 'var(--btg-color-highlight-500)',
    size: 300,
    variant: 2,
    animate: true,
  },
}

export const Variant3: Story = {
  args: {
    color: 'var(--btg-color-neutral-500)',
    size: 300,
    variant: 3,
    animate: true,
  },
}

export const Variant4: Story = {
  args: {
    color: 'var(--btg-color-primary-500)',
    size: 300,
    variant: 4,
    animate: true,
  },
}

export const Variant5: Story = {
  args: {
    color: 'var(--btg-color-accent-500)',
    size: 300,
    variant: 5,
    animate: true,
  },
}

export const Variant6: Story = {
  args: {
    color: 'var(--btg-color-highlight-500)',
    size: 300,
    variant: 6,
    animate: true,
  },
}

export const Default: Story = {
  args: {
    size: 300,
    animate: false,
  },
}

export const CustomSize: Story = {
  args: {
    color: 'var(--btg-color-primary-500)',
    size: 500,
  },
}
