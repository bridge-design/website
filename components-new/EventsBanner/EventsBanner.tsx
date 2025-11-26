'use client'

import React from 'react'
import { Card } from '../Card/Card'
import { Icon } from '../Icon/Icon'
import { CtaLink } from '../CtaLink/CtaLink'

export interface EventsBannerItem {
  icon: string
  title: string
  description: string
  href: string
  ctaText: string
}

export interface EventsBannerProps {
  items: EventsBannerItem[]
  title?: string
}

/**
 * EventsBanner component - displays events-related content in a responsive card grid
 * with icons, descriptions, and call-to-action links.
 */
export const EventsBanner: React.FC<EventsBannerProps> = ({
  items = [],
  title,
}) => {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <>
      {title && <h2 className="mb-10 text-center text-4xl">{title}</h2>}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <Card
            key={index}
            href={item.href}
            backgroundColorVar="--btg-color-primary-700"
            backgroundColorVarHover="--btg-color-primary-600"
            backgroundColorVarDark="--btg-color-primary-700"
            backgroundColorVarHoverDark="--btg-color-primary-600"
            textColorVar="--btg-color-neutral-1000"
            textColorVarDark="--btg-color-neutral-1000"
          >
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                <Icon name={item.icon} className="text-[var(--btg-color-highlight-500)]" size={40} />
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p>{item.description}</p>
              <CtaLink
                to={item.href}
                arrow="end"
                colorVar="var(--btg-color-neutral-1000)"
                colorHoverVar="var(--btg-color-neutral-900)"
              >
                {item.ctaText}
              </CtaLink>
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}

EventsBanner.displayName = 'EventsBanner'

export default EventsBanner
