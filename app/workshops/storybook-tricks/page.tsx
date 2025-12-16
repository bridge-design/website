import { genPageMetadata } from 'app/seo'

import {
  Card,
  CtaLink,
  Desk,
  HorizontalWave,
  Link,
  Outro,
  ProfileCard,
  Section,
  Testimonial,
} from '@/components-new/index'

import { TESTIMONIALS } from '@/data/testimonials'
import { team } from '@/data/team'

export const metadata = genPageMetadata({
  title: 'Workshop: Storybook Tricks',
  description:
    'A practical Storybook workshop packed with shortcuts, patterns, and workflows. Details coming soon.',
  image: '/images/workshops/storybook-tricks/thumb.png',
})

const WorkshopTiles = () => {
  return (
    <>
      <p className="mb-6 mt-8 text-center text-lg">Get your workshop spot 👇</p>
      <div className="mx-auto grid w-full max-w-[90%] grid-cols-1 gap-4 md:grid-cols-2">
        <Card
          rounded={false}
          className="h-full bg-[var(--btg-hero-background-blue)] text-[var(--btg-color-neutral-1000)] hover:bg-[var(--btg-color-highlight-700)]"
        >
          <div className="px-2 py-6">
            <p className="text-lg font-bold">Next dates: TBD</p>
            <p className="mb-2 text-lg font-bold">Timezones and slots announced soon</p>
            <p className="mt-8">Location: Remote (Zoom)</p>
            <p className="mb-4">Price: TBD</p>
            <p className="text-sm">Register link will appear here once the schedule is published.</p>
          </div>
        </Card>

        <Link href="/contact" className="block h-full">
          <Card
            rounded={false}
            className="h-full bg-[var(--btg-color-neutral-100)] text-[var(--btg-color-neutral-1000)] hover:bg-[var(--btg-color-neutral-200)]"
            footer={
              <CtaLink
                to="/contact"
                className="px-2 text-lg font-medium"
                colorVar="--btg-color-neutral-1000"
                colorHoverVar="--btg-color-neutral-900"
              >
                Join the waitlist →
              </CtaLink>
            }
          >
            <div className="px-2 py-6">
              <p className="text-lg font-bold">Want early access or a custom run?</p>
            </div>
          </Card>
        </Link>
      </div>
    </>
  )
}

const StorybookTricksPage = () => {
  // Filter testimonials by specific categories
  const filteredTestimonials = TESTIMONIALS.filter((testimonial) =>
    ['workshop', 'varya', 'sherif'].includes(testimonial.category)
  )

  // Workshop advantages/highlights
  const workshopAdvantages = [
    {
      title: 'Practical Recipes',
      description: 'Detailed agenda is on the way. Expect hands-on Storybook workflows.',
      icon: 'Tools',
    },
    {
      title: 'Real Projects',
      description: 'Examples and exercises will be published soon. Stay tuned.',
      icon: 'Partnership',
    },
    {
      title: 'Actionable Tips',
      description: 'We are collecting the best shortcuts to ship UI faster with Storybook.',
      icon: 'MagicWand',
    },
  ]

  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section narrow={true} className="mb-10">
        <p className="mb-4 text-center text-lg">👋 Storybook workshop</p>
        <h1 className="mb-8 text-center font-4xl text-4xl leading-[1.125]">
          <span className="md:block">Storybook Tricks</span>
        </h1>
        <h2 className="mb-8 text-center font-3xl text-3xl leading-[1.125]">
          Placeholder subtitle. Final copy is coming soon.
        </h2>
      </Section>

      <Section narrow={true} className="mb-20">
        <WorkshopTiles />
      </Section>

      <Section className="mb-20">
        <h2 className="mb-10 font-4xl text-4xl lg:font-5xl lg:text-5xl">What you will learn?</h2>
        <p className="font-lg text-xl lg:max-w-[1000px]">
          Placeholder intro about the learning outcomes. The detailed description of lessons and
          takeaways will be added here.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="mt-8">
            <p className="text-lg">
              Placeholder column with overview of the Storybook exercises and guidance participants
              will receive during the session.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-lg">
              Placeholder column describing how attendees will practice and what they will bring back
              to their teams after the workshop.
            </p>
          </div>
        </div>
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">Topics we'll cover</h2>
        <ul className="mt-8 list-disc space-y-4 pl-6 text-lg">
          <li>Placeholder topic list item one</li>
          <li>Placeholder topic list item two</li>
          <li>Placeholder topic list item three</li>
          <li>Placeholder topic list item four</li>
        </ul>
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">What you need to know</h2>
        <ul className="mt-8 list-disc space-y-3 pl-6 text-lg">
          <li>Placeholder prerequisites and expectations for participants.</li>
          <li>Placeholder note about prior Storybook or frontend knowledge.</li>
          <li>Placeholder info on required tools and setup.</li>
        </ul>
      </Section>

      <Section className="mb-20">
        <Desk
          title={
            <h2 className="mb-10 font-4xl text-4xl lg:font-5xl lg:text-5xl">Workshop Highlights</h2>
          }
          content={workshopAdvantages}
        />
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">Why Attend</h2>
        <p className="mt-6 font-lg text-lg leading-lg tracking-lg">
          Placeholder reasoning for joining this Storybook workshop. Final copy will outline who the
          workshop is for and what value they will get.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
          <div className="">
            <h2 className="font-3xl text-3xl leading-3xl tracking-2xl">for Designers</h2>
            <ul className="list mt-6 list-disc">
              <li>Placeholder bullet about design-oriented outcomes.</li>
              <li className="mt-3">Placeholder bullet about collaboration workflows.</li>
              <li className="mt-3">Placeholder bullet about documentation updates.</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-3xl text-3xl leading-3xl tracking-2xl">for Developers</h2>
            <ul className="list mt-6 list-disc">
              <li>Placeholder bullet about Storybook efficiency tips.</li>
              <li className="mt-3">Placeholder bullet about testing or controls.</li>
              <li className="mt-3">Placeholder bullet about team handoff.</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-3xl text-3xl leading-3xl tracking-2xl">for Product Teams</h2>
            <ul className="list mt-6 list-disc">
              <li>Placeholder bullet about faster reviews.</li>
              <li className="mt-3">Placeholder bullet about shared components.</li>
              <li className="mt-3">Placeholder bullet about communication.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">Questions?</h2>
        <p className="mt-4 font-lg text-lg leading-lg tracking-lg">
          Placeholder contact copy. A final call-to-action with links will appear here once we
          publish the detailed workshop plan.
        </p>
      </Section>

      <Section className="mb-20 overflow-x-hidden" narrow={true}>
        <div className="relative">
          <div className="relative overflow-x-visible">
            <Testimonial
              title={<h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">People Say</h2>}
              narrow={true}
              testimonials={filteredTestimonials}
            />
          </div>
        </div>
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="mb-10 font-4xl text-4xl lg:font-5xl lg:text-5xl">Who We Are</h2>
        {['varya', 'sherif'].map((key) => {
          const member = team[key]
          return (
            <ProfileCard
              key={member.name}
              photoUrl={member.photoUrl}
              name={member.name}
              role={member.role}
              twitter={member.twitter}
              linkedin={member.linkedin}
              github={member.github}
              description={member.description}
              className="mb-10"
              backgroundColorVar="var(--btg-color-neutral-1000)"
              textColorVar="var(--btg-color-neutral-100)"
              backgroundColorVarDark="var(--btg-color-neutral-100)"
              rounded={false}
            />
          )
        })}
      </Section>

      <Section narrow={true} className="mb-20">
        <WorkshopTiles />
      </Section>

      <Outro backgroundColor="var(--btg-hero-background-blue)" />
    </>
  )
}

export default StorybookTricksPage

