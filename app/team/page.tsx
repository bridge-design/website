import { genPageMetadata } from 'app/seo'

import { team } from '@/data/team'
import { TESTIMONIALS } from '@/data/testimonials'

import { HorizontalWave, ProfileCard, Section, Testimonial } from '@/components-new/index'

export const metadata = genPageMetadata({
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
})

export default async function TeamPage() {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-pink); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section className="py-12">
        <h2 className="mb-6 text-center text-4xl">Meet the Team</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-col xl:grid xl:grid-cols-2">
          {Object.values(team).map((member) => (
            <ProfileCard
              key={member.name}
              photoUrl={member.photoUrl}
              name={member.name}
              role={member.role}
              twitter={member.twitter}
              linkedin={member.linkedin}
              github={member.github}
            />
          ))}
        </div>
      </Section>
      <Section className="py-12">
        <div className="container flex min-h-screen flex-col justify-between overflow-hidden">
          <Testimonial
            title={<h2 className="text-4xl">People Say</h2>}
            testimonials={TESTIMONIALS}
          />
        </div>
      </Section>
    </>
  )
}
