import type { Meta, StoryObj } from '@storybook/react'
import { Timetable } from './Timetable'
import { timetableItems } from '@/data/workshops/hands-on-design-systems/timetable'

const meta = {
  title: 'Components/Timetable',
  component: Timetable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Timetable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: timetableItems,
  },
} 