import { Card, HorizontalWave, Section } from '@/components-new/index'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Bridge the Gap Hub',
  description: `Design Systems Knowledge Hub`,
  keywords: `design systems, knowledge base, resources`,
})

const hubPages = [
  {
    title: 'Design Systems Topics Cheat Sheet',
    description: `Quick reference guide for design systems topics and concepts.`,
    href: '/hub/ds-topics-cheat-sheet',
  },
  {
    title: 'Parts of Design System Exercise',
    description: `Interactive exercise to explore and understand different parts of a design system.`,
    href: '/hub/parts-of-design-system',
  },
]

export default function HubPage() {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        <h1 className="mb-16 text-center font-5xl text-5xl">Knowledge Hub</h1>
        <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:px-10 lg:py-11">
          {hubPages.map((page) => (
            <Card key={page.href} href={page.href}>
              <h2 className="mb-2 font-3xl text-3xl">{page.title}</h2>
              <p className="font-lg text-lg">{page.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
