'use client'

import React from 'react'
import { Desk } from '../Desk/Desk'

export interface EventsBannerItem {
  icon: string
  title: string
  description: string
}

export interface EventsBannerProps {
  content: EventsBannerItem[]
  title?: React.ReactNode
}

/**
 * EventsBanner component - displays events-related content in a 2-column layout
 * with highlight color theme and automatic navigation to /events page.
 */
export const EventsBanner: React.FC<EventsBannerProps> = ({
  title,
  content,
}) => {
  const titleContainer = title ? (
    <div className="mb-10 text-center">
      <h2 className="mb-6 font-4xl text-4xl">{title}</h2>
    </div>
  ) : null
  return (
    <Desk
      title={titleContainer}
      content={content}
      backgroundColor="var(--btg-color-highlight-600)"
      textColor="var(--btg-color-neutral-1000)"
      iconBackgroundColor="var(--btg-color-highlight-400)"
      url="/events"
      gridClasses="grid grid-cols-1 lg:grid-cols-2 gap-10"
    />
  )
}

EventsBanner.displayName = 'EventsBanner'

export default EventsBanner
