import { HorizontalWave, Section, PageList, Outro, CtaLink } from '@/components-new/index'
import { genPageMetadata } from 'app/seo'
import { allEvents } from 'contentlayer/generated'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { outroContent } from '@/data/outro-content'

export const metadata = genPageMetadata({
  title: 'Bridge the Gap Events',
  description: `Workshops, conferences, and other events by Bridge the Gap`,
  keywords: `design systems, events, workshops, conferences`,
})

// Events with individual pages
const individualEvents = [
  {
    path: 'events/future-frontend-2024',
    title: 'Future Frontend 2024',
    description: 'From Survival to Growth: Enhancing Design Systems via Seamless Collaboration',
    date: '2024-10-01',
  },
]

export default async function EventsPage() {
  // Get all events from MDX files and sort them by date
  const sortedMdxEvents = allCoreContent(sortPosts(allEvents))

  // Transform MDX events data to match PageList format
  const mdxEventPages = sortedMdxEvents.map((event) => ({
    path: `events/${event.slug}`,
    title: event.title,
    description: event.description || event.summary,
    date: event.date,
  }))

  // Combine and sort all events by date
  const allEventPages = [...mdxEventPages, ...individualEvents].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-pink); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        <h1 className="mb-16 text-center font-5xl text-5xl">Events</h1>
        <PageList pages={allEventPages} />
      </Section>
      <Outro backgroundColor="var(--btg-hero-background-pink)">
        <div className="text-center">
          <h2 className="mx-auto mb-10 font-4xl text-4xl lg:w-4/5">
            {outroContent['general-speaking'].title}
          </h2>
          <p className="mx-auto mb-10 text-xl lg:w-3/4">
            {outroContent['general-speaking'].description}
          </p>
          <CtaLink
            to={outroContent['general-speaking'].ctaUrl}
            underline={true}
            className="text-xl"
            colorVar="var(--btg-hero-text-color)"
            colorHoverVar="var(--btg-hero-text-color)"
            borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
          >
            {outroContent['general-speaking'].ctaText}
          </CtaLink>
        </div>
      </Outro>
    </>
  )
}
