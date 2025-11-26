import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { EventsBanner } from './EventsBanner'

const meta: Meta<typeof EventsBanner> = {
  title: 'Components/EventsBanner',
  component: EventsBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: 'Array of event items to display',
    },
    title: {
      description: 'Optional title/header content for the banner',
    },
    backgroundColor: {
      control: 'text',
      description: 'Background color CSS variable or value',
    },
    textColor: {
      control: 'text',
      description: 'Text color CSS variable or value',
    },
    iconBackgroundColor: {
      control: 'text',
      description: 'Icon background color CSS variable or value',
    },
    containerClasses: {
      control: 'text',
      description: 'Additional CSS classes for the container',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithoutTitle: Story = {
  args: {
    title: undefined,
  },
}

export const CustomTitle: Story = {
  args: {
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Join Our Community Events</h2>
        <p className="text-lg opacity-80">Connect with design systems professionals</p>
      </div>
    ),
  },
}

export const ThreeItems: Story = {
  args: {
    content: [
      {
        icon: 'Cafe',
        title: 'Design Systems Breakfast',
        description: 'Our casual morning meetups where UX designers and UI developers share coffee, ideas, and insights about design systems.',
      },
      {
        icon: 'UserSpeaker',
        title: 'Speaking Engagements',
        description: 'We speak at conferences, meetups, and company events sharing insights about design systems and team collaboration.',
      },
      {
        icon: 'UserMultiple',
        title: 'Community Events',
        description: 'Connect with the design systems community through workshops, panels, and networking opportunities.',
      },
    ],
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Join Our Events</h2>
        <p className="text-lg opacity-80">Click anywhere to explore our events page</p>
      </div>
    ),
  },
}

export const UpcomingEvents: Story = {
  args: {
    content: [
      {
        icon: 'Calendar',
        title: 'UnoCSS Workshop',
        description: 'Learn about the instant on-demand atomic CSS engine that nobody speaks about (but they should).',
      },
      {
        icon: 'Time',
        title: 'Design Systems Q&A',
        description: 'Monthly open session where we answer your design systems questions and share best practices.',
      },
    ],
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Upcoming Events</h2>
        <p className="text-lg opacity-80">September 2025</p>
      </div>
    ),
  },
}

export const ConferencePreview: Story = {
  args: {
    content: [
      {
        icon: 'Globe',
        title: 'International Speaking',
        description: 'We present at design and development conferences worldwide, sharing our expertise in design systems.',
      },
      {
        icon: 'UserMultiple',
        title: 'Workshop Hosting',
        description: 'Hands-on workshops for teams looking to implement or improve their design system processes.',
      },
    ],
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Conference & Workshop Highlights</h2>
      </div>
    ),
  },
}

export const Transparent: Story = {
  args: {
    content: [
      {
        icon: 'Events',
        title: 'Transparent Events',
        description: 'Perfect for overlaying on hero images or colored page backgrounds.',
      },
      {
        icon: 'Calendar',
        title: 'Flexible Integration',
        description: 'Seamlessly integrates with any page design without background interference.',
      },
    ],
    backgroundColor: 'transparent',
    textColor: 'var(--btg-color-neutral-100)',
    iconBackgroundColor: 'var(--btg-color-neutral-800)',
    containerClasses: 'p-0',
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Transparent Events Banner</h2>
        <p className="text-lg opacity-80">No background color, perfect for layering</p>
      </div>
    ),
  },
}
