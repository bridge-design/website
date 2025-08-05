import { HorizontalWave, Section, PageList } from '@/components-new/index'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Bridge the Gap Hub',
  description: `Design Systems Knowledge Hub`,
  keywords: `design systems, knowledge base, resources`,
})

const hubPages = [
  {
    path: 'hub/ds-topics-cheat-sheet',
    title: 'Design Systems Topics Cheat Sheet',
    description: `Quick reference guide for design systems topics and concepts.`,
  },
  {
    path: 'hub/parts-of-design-system',
    title: 'Parts of Design System Exercise',
    description: `Interactive exercise to explore and understand different parts of a design system.`,
  },
]

export default function HubPage() {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        <h1 className="mb-16 text-center font-5xl text-5xl">Knowledge Hub</h1>
        <PageList pages={hubPages} />
      </Section>
    </>
  )
}
