import { Card, HorizontalWave, Section } from '@/components-new/index'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Bridge the Gap Workshops',
  description: `TODO`,
  keywords: `TODO`,
})

const workshops = [
  {
    title: 'Hands-On with Design Systems',
    description: `Full-day workshop about building a design system and a pattern library (React) in a multidisciplinary team.`,
    href: '/workshops/hands-on-design-systems',
    date: new Date('2025-05-23'),
  },
  {
    title: 'Cursor for Design Systems',
    description: `Workshop on using Cursor for design systems development.`,
    href: '/workshops/cursor-for-design-systems',
    date: new Date('2025-11-18'),
  },
]

// Sort workshops by date (latest first)
const sortedWorkshops = [...workshops].sort((a, b) => b.date.getTime() - a.date.getTime())

export default function WorkshopsPage() {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        <h1 className="mb-16 text-center font-5xl text-5xl">Workshops</h1>
        <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:px-10 lg:py-11">
          {sortedWorkshops.map((workshop) => (
            <Card key={workshop.href} href={workshop.href}>
              <h2 className="mb-2 font-3xl text-3xl">{workshop.title}</h2>
              <p className="font-lg text-lg">{workshop.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
