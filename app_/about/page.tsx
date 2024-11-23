import { team } from '@/data/team'

import { People } from '@/components/People'

export const metadata = {
  title: 'Meet Our Expert Team',
  description: `
    Discover the talented professionals at Bridge the Gap who specialize in UI
    engineering, design systems, and frontend development. Our team combines
    extensive experience with innovative solutions to help businesses succeed.
  `,
  keywords: `
    UI engineering, design systems, frontend development, UX design, consultancy experts,
    React, TypeScript, UI/UX, user-friendly interfaces
  `,
}

export default function About() {
  const people = Object.values(team)

  return <People people={people} />
}
