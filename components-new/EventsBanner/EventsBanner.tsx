'use client'

import React from 'react'
import { Desk } from '../Desk/Desk'

export interface EventsBannerItem {
  icon: string
  title: string
  description: string
}

export interface EventsBannerProps {
  content?: EventsBannerItem[]
  title?: React.ReactNode
  backgroundColor?: string
  textColor?: string
  iconBackgroundColor?: string
  containerClasses?: string
}

/**
 * EventsBanner component - displays events-related content in a 2-column layout
 * with highlight color theme and automatic navigation to /events page.
 */
const defaultContent: EventsBannerItem[] = [
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
]

const defaultTitle = 'Our events and events with us'

export const EventsBanner: React.FC<EventsBannerProps> = ({
  title = defaultTitle,
  content = defaultContent,
  backgroundColor = "var(--btg-color-highlight-600)",
  textColor = "var(--btg-color-neutral-1000)",
  iconBackgroundColor = "var(--btg-color-highlight-400)",
  containerClasses,
}) => {
  const titleContainer = (
    <div className="mb-10 text-center">
      <h2 className="mb-6 font-4xl text-4xl">{title}</h2>
    </div>
  )
  return (
    <Desk
      title={titleContainer}
      content={content}
      backgroundColor={backgroundColor}
      textColor={textColor}
      iconBackgroundColor={iconBackgroundColor}
      containerClasses={containerClasses}
      url="/events"
      gridClasses="grid grid-cols-1 lg:grid-cols-2 gap-10"
    />
  )
}

EventsBanner.displayName = 'EventsBanner'

export default EventsBanner
