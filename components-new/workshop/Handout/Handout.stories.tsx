import type { Meta, StoryObj } from '@storybook/react'
import { Handout } from '.'
import { handoutBlocks } from '@/data/workshops/hands-on-design-systems/handout'

const meta = {
  title: 'Components/Workshop/Handout',
  component: Handout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Handout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    blocks: handoutBlocks,
  },
}
