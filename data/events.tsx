import type { EventsBannerItem } from '@/components-new/EventsBanner/EventsBanner'

export const EVENTS_BANNER_ITEMS: EventsBannerItem[] = [
  {
    icon: 'Education',
    title: 'Cursor for Design Systems',
    description: 'Hands-on workshop on using Cursor AI to design and develop design system components, views, and pages.',
    href: '/workshops/cursor-for-design-systems',
    ctaText: 'Learn more',
  },
  {
    icon: 'Cafe',
    title: 'Design Systems Breakfast',
    description: 'Free casual morning meetups where UX designers and UI developers share coffee, ideas, and insights.',
    href: '/events/breakfasts',
    ctaText: 'Join next breakfast',
  },
  {
    icon: 'Partnership',
    title: 'Custom Workshops & Training',
    description: 'We provide internal training on design systems for your team. Tailored content for your specific needs.',
    href: '/contact',
    ctaText: "Let's talk",
  },
]

export const EVENTS_BANNER_TITLE = 'Our Events or Events with Us 👇'

export default {}
