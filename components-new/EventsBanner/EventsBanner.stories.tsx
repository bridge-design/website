import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { EventsBanner } from './EventsBanner'
import { EVENTS_BANNER_ITEMS, EVENTS_BANNER_TITLE } from '@/data/events'

const meta: Meta<typeof EventsBanner> = {
  title: 'Components/EventsBanner',
  component: EventsBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of event items to display',
    },
    title: {
      control: 'text',
      description: 'Title text for the banner section',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: EVENTS_BANNER_ITEMS,
    title: EVENTS_BANNER_TITLE,
  },
}

export const CustomTitle: Story = {
  args: {
    items: EVENTS_BANNER_ITEMS,
    title: 'Join Our Community Events',
  },
}

export const TwoItems: Story = {
  args: {
    title: 'Upcoming Events',
    items: [
      {
        icon: 'Calendar',
        title: 'Design Systems Workshop',
        description: 'Learn the fundamentals of building and maintaining design systems.',
        href: '/workshops',
        ctaText: 'Register now',
      },
      {
        icon: 'Cafe',
        title: 'Monthly Breakfast',
        description: 'Join us for coffee and conversation about design systems.',
        href: '/events/breakfasts',
        ctaText: 'Join us',
      },
    ],
  },
}

export const SingleItem: Story = {
  args: {
    title: 'Featured Event',
    items: [
      {
        icon: 'Education',
        title: 'Cursor for Design Systems',
        description: 'Hands-on workshop on using Cursor AI to design and develop design system components.',
        href: '/workshops/cursor-for-design-systems',
        ctaText: 'Learn more',
      },
    ],
  },
}
