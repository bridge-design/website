import type { Meta, StoryObj } from '@storybook/react'
import { TimeDisplay } from './TimeDisplay'

const meta = {
  title: 'Components/TimeDisplay',
  component: TimeDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    time: {
      control: 'text',
      description: 'Time in format "9am", "9:30am", "9pm", or range "9am — 11am"',
    },
    date: {
      control: 'text',
      description: 'Date in YYYY-MM-DD format',
    },
    defaultTimezone: {
      control: 'text',
      description: 'Default timezone (default: "CET")',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof TimeDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const SingleTime: Story = {
  args: {
    time: '9am',
    date: '2025-11-21',
    defaultTimezone: 'CET',
  },
}

export const SingleTimeWithMinutes: Story = {
  args: {
    time: '9:30am',
    date: '2025-11-21',
    defaultTimezone: 'CET',
  },
}

export const TimeRange: Story = {
  args: {
    time: '9am — 11am',
    date: '2025-11-21',
    defaultTimezone: 'CET',
  },
}

export const TimeRangeWithMinutes: Story = {
  args: {
    time: '9:30am — 11:30am',
    date: '2025-12-05',
    defaultTimezone: 'CET',
  },
}

export const EveningTime: Story = {
  args: {
    time: '2pm',
    date: '2025-11-21',
    defaultTimezone: 'CET',
  },
}

export const WithCustomClassName: Story = {
  args: {
    time: '9am — 11am',
    date: '2025-11-21',
    defaultTimezone: 'CET',
    className: 'font-bold text-lg',
  },
}

