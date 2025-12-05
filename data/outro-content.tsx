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
        <p>
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
        </p>
        <p className="mt-4">
          To learn about new breakfast sessions, follow{' '}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          {' '}
          <a
            href="https://www.linkedin.com/company/bridge-the-gap-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
            style={{ color: 'var(--btg-hero-text-color)' }}
          >
            our LinkedIn page
          </a>
          .
        </p>
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
