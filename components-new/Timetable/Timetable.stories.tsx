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

export const WithCaption: Story = {
  args: {
    items: timetableItems,
    caption: 'Day 1',
  },
}

export const WithReactNodeCaption: Story = {
  args: {
    items: timetableItems,
    caption: <span className="font-bold text-blue-600">Workshop Day 1</span>,
  },
} 