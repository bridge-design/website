import React from 'react'
import { CtaLink } from '@/components-new/index'

export interface OutroContentItem {
  id: string
  title: string
  description: React.ReactNode
  ctaText: string
  ctaUrl: string
}

export const outroContent: Record<string, OutroContentItem> = {
  'general-speaking': {
    id: 'general-speaking',
    title: 'Want to have us speak at your event?',
    description: (
      <>
        Our team shares insights about design systems, team collaboration, and frontend
        development. We'd love to contribute to your conference, meetup, or company event.
      </>
    ),
    ctaText: 'Get in touch',
    ctaUrl: '/contact',
  },
  'breakfast-speaking': {
    id: 'breakfast-speaking',
    title: 'Want to speak at Design Systems Breakfast?',
    description: (
      <>
        Share your insights about design systems, frontend development, UI design and team
        collaboration at our casual morning meetups.{' '}
        <CtaLink
          to="/contact"
          underline={true}
          className="text-xl"
          colorVar="var(--btg-hero-text-color)"
          colorHoverVar="var(--btg-hero-text-color)"
          borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
        >
          Contact Varya
        </CtaLink>{' '}
        to discuss your talk idea.
      </>
    ),
    ctaText: '',
    ctaUrl: '',
  },
}
