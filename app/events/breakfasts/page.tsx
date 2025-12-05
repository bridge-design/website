import { HorizontalWave, Section, PageList, Outro, CtaLink } from '@/components-new/index'
import { genPageMetadata } from 'app/seo'
import { allEvents } from 'contentlayer/generated'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { outroContent } from '@/data/outro-content'

export const metadata = genPageMetadata({
  title: 'Design Systems Breakfast',
  description: `Casual morning gatherings for design system professionals to network, learn, and exchange experiences over coffee`,
  keywords: `design systems breakfast, networking, meetup, design systems community`,
  image: '/images/events/breakfasts/thumb.jpg',
})

export default async function BreakfastsPage() {
  // Get all events from MDX files and sort them by date
  const sortedMdxEvents = allCoreContent(sortPosts(allEvents))

  // Filter only breakfast events and transform to match PageList format
  const breakfastEventPages = sortedMdxEvents
    .filter((event) => event?.slug?.startsWith('breakfast-'))
    .map((event) => ({
      path: `events/${event.slug}`,
      title: event.title,
      description: event.description || event.summary,
      date: event.date,
    }))
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-pink); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        <div className="mx-auto max-w-[80ch]">
          <CtaLink
            to="/events"
            arrow="start"
            className="text-xl"
            colorVar="var(--btg-hero-text-color)"
            colorHoverVar="var(--btg-hero-text-color)"
          >
            Back to all events
          </CtaLink>
        </div>
        <article className="grow">
          <h1 className="mb-16 text-center font-5xl text-5xl">Casual Design Systems Breakfast</h1>
          <div className="prose mx-auto my-12 text-justify dark:prose-invert">
            <p className="text-xl leading-relaxed">
              Looking for a casual way to connect with design system people (both designers and
              engineers!), learn cutting-edge ideas, and network over coffee?
            </p>
            <p className="text-xl leading-relaxed">
              Enter <strong>Design Systems Breakfast!</strong> This is a relaxed morning gathering
              where you can discuss early-stage topics, exchange experiences, and build connections
              in a friendly setting. It's like catching up with colleagues over breakfast, but with
              fresh insights on design systems.
            </p>

            <p>
              It started during COVID when everything went digital but we missed the friendly
              atmosphere of in-person gatherings. While there were (and still are) many online
              meetups, many felt too formal and structured. That's why we created something
              different.
            </p>

            <p>
              COVID has passed, but the design system community is now worldwide, so this event
              keeps living. Here's what makes it special:
            </p>

            <ul className="space-y-3 text-lg">
              <li>
                <strong>🍳 It's breakfast time</strong>
              </li>
              <li>
                <strong>☕ It's casual</strong> (People actually eat and drink coffee during the
                session! Join us with your breakfast. Or without, as you wish :-)
              </li>
              <li>
                <strong>
                  💬 We focus on networking and exchanging experiences while learning.
                </strong>{' '}
                This means a lot of discussion.
              </li>
              <li>
                <strong>🚀 It's often early-stage content</strong> (Topics that aren't YET at
                conferences, because people bring ideas for early feedback. You can learn them
                first!)
              </li>
              <li>
                <strong>🙀 We don't record</strong> (That's a feature)
              </li>
            </ul>
            <p className="text-xl leading-relaxed">
              To learn about new breakfast sessions, follow{' '}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>{' '}
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
          </div>
          <div className="my-16">
            <PageList pages={breakfastEventPages} />
          </div>
        </article>
      </Section>
      <Outro backgroundColor="var(--btg-hero-background-pink)">
        <div className="text-center">
          <h2 className="mx-auto mb-10 font-4xl text-4xl lg:w-4/5">
            {outroContent['breakfast-speaking'].title}
          </h2>
          <p className="mx-auto mb-10 text-xl lg:w-3/4">
            {outroContent['breakfast-speaking'].description}
          </p>
        </div>
      </Outro>
    </>
  )
}
