import { Card, Emoji, Text, Icon } from '@bridge-the-gap/design-system'
import { Link, HorizontalWave, Section } from '@/components-new/index'
import classnames from 'classnames'

export const metadata = {
  title: 'Future Frontend October 2024 - Design System Event',
  description: 'Join the upcoming remote casual breakfast event for design system enthusiasts.',
  keywords: 'design systems, casual breakfast, event, frontend, developers, designers, remote',
}

function SectionTitle({ className, iconClassName, children }) {
  return (
    <div className={classnames('flex items-start', className)}>
      <Icon
        aria-hidden="true"
        name="Education32"
        className={classnames('mr-6 hidden md:block', iconClassName)}
      />
      <Text variant="3Xl" responsive={{ sm: '6Xl' }} as="h2">
        {children}
      </Text>
    </div>
  )
}

export default function FutureFrontendEvent() {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-pink); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section>
        {/* Page Content */}
        <div className="tracking-normal text-light-on-background-900 dark:text-light-on-background-100 text-center leading-normal">
          <p className="mt-24 font-xl text-xl">
            <Emoji symbol="👋 " label="hand" />
            talk materials
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-4xl text-4xl">From Survival to Growth</h1>
          <h2 className="mx-auto mt-4 max-w-3xl font-3xl text-3xl">
            Enhancing Design Systems via Seamless Collaboration
          </h2>

          {/* Cards Section */}
          <div className="mt-24 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            <Card
              className="dark:text-light-on-background-100 min-h-[240px] bg-white dark:bg-gray-800"
              heading="ORIGINAL SLIDES"
              link={{
                text: 'Slides in PDF',
                href: 'https://bridge-the-gap.dev/static/talks/ff-october-2024/from-survival-to-growth-design-systems-collaboration.pdf',
              }}
              linkComponent={Link}
            >
              <div className="mb-8">
                <Text variant="smMedium" className="dark:text-light-on-background-300 mb-3">
                  Evolution of workflows, transforming a design system into a real product by
                  enhancing communication with high-level stakeholders, engaging peers, and
                  streamlining collaboration.
                </Text>
              </div>
            </Card>

            <Card
              className="dark:text-light-on-background-100 min-h-[240px] bg-white dark:bg-gray-800"
              heading="DIRECTOR'S CUT"
              link={{
                text: `Even more slides`,
                href: 'https://bridge-the-gap.dev/static/talks/ff-october-2024/from-survival-to-growth-design-systems-collaboration-directors-cut.pdf',
              }}
              linkComponent={Link}
            >
              <div className="mb-8">
                <Text variant="smMedium" className="dark:text-light-on-background-300 mb-3">
                  More detailed insights into engaging peers, streamlining collaboration and working
                  with the in-house design and development community.
                </Text>
              </div>
            </Card>

            <Card
              className="dark:text-light-on-background-100 min-h-[240px] bg-white dark:bg-gray-800"
              heading="COMPLETE DESIGN SYSTEM"
              link={{
                text: `Miro Board`,
                href: 'https://miro.com/app/board/uXjVLWJrBcQ=/',
              }}
              linkComponent={Link}
            >
              <div className="mb-8">
                <Text variant="smMedium" className="dark:text-light-on-background-300 mb-3">
                  Compilation of existing design systems, highlighting their features and linking
                  examples.
                </Text>
              </div>
            </Card>
          </div>
        </div>

        {/* Event Description Section */}
        <div className="text-light-on-background-900 dark:text-light-on-background-100 mx-auto mb-20 mt-28 flex max-w-4xl flex-col md:flex-row">
          <SectionTitle
            icon="Education32"
            className="w-full flex-shrink-0 justify-start font-3xl text-3xl md:w-2/5 md:flex-col"
            iconClassName="pr-4 mb-4 md:mr-0"
          >
            More about design systems?
          </SectionTitle>

          <Text variant="xlMedium" as="div" className="mt-16 md:mt-0">
            <p className="mb-6">
              Missing those informal chats about design systems? So are we! Join us for a cozy
              remote breakfast.
            </p>
            <p className="mb-6">
              Casual remote breakfast for design systems' people — designers and developers.
            </p>
            <p></p>
            <Link
              href="https://www.linkedin.com/events/casualbreakfastfordesignsystems7249054983411691520/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Date: October 30th, 2023 | Time: 9:30 CET (8:30 GMT / 10:30 EET) @ your laptop
            </Link>

            <h3 className="text-3Xl dark:text-light-on-background-100 mb-4 mt-8 font-bold">
              What to Expect?
            </h3>
            <ul className="list-inside list-disc">
              <li className="mb-3">
                A relaxed atmosphere where you can brew your morning coffee during the event
              </li>
              <li className="mb-3">Presentation on "How to build a strategy, not a roadmap"</li>
              <li className="mb-3">Open discussions for sharing ideas and experiences</li>
            </ul>

            <h3 className="text-3Xl dark:text-light-on-background-100 mb-4 mt-8 font-bold">
              Why Join?
            </h3>
            <p>
              This breakfast is for connecting with the global design system community in a casual,
              fun way. Whether you're experienced or new to design systems, it's the perfect space
              for relaxed conversations with your fellow designers and developers.
            </p>
          </Text>
        </div>
      </Section>
    </>
  )
}
