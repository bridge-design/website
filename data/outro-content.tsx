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
  'case-studies': {
    id: 'case-studies',
    title: 'Ready to create your own success story?',
    description: (
      <>
        We'd love to help you achieve exceptional results with your design systems, UI engineering,
        and frontend development projects. Let's discuss how we can bring your vision to life.
      </>
    ),
    ctaText: 'Discuss with us how to start your project',
    ctaUrl: '/contact',
  },
}
