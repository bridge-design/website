import { genPageMetadata } from 'app/seo'

import {
  Advantages,
  Card,
  Contact,
  CtaLink,
  HorizontalWave,
  Icon,
  Outro,
  ProfileCard,
  Section,
  Testimonial,
  Timetable,
} from '@/components-new/index'

import { TESTIMONIALS } from '@/data/testimonials'
import { team } from '@/data/team'
import { timetableItems } from '@/data/workshops/hands-on-design-systems/timetable'

export const metadata = genPageMetadata({
  title: 'Hands-on workshop on building a design system with Figma, React, and Storybook',
  description:
    'Join our interactive workshop and learn how to create a design system from scratch. Gain practical experience with Figma, React, and Storybook while collaborating in a multidisciplinary team. Includes 1-hour individual consultation.',
  openGraph: {
    images: ['/images/workshops/hands-on-design-systems/cover.jpg'],
  },
})

const HandsOnDesignSystemsPage = () => {
  // Filter testimonials by specific categories
  const filteredTestimonials = TESTIMONIALS.filter((testimonial) =>
    ['workshop', 'varya', 'sherif', 'irina'].includes(testimonial.category)
  )

  // Workshop advantages/highlights
  const workshopAdvantages = [
    {
      title: 'Real-World Experience',
      description:
        'Work on a realistic design system project with practical challenges and solutions that translate directly to your daily work.',
      icon: 'Tools',
    },
    {
      title: 'Cross-Disciplinary',
      description:
        'Experience the power of designers and developers working together to create a cohesive design system that works for everyone.',
      icon: 'Partnership',
    },
    {
      title: 'Personalized Follow-Up',
      description:
        'Includes a 1-hour individual consultation within two months after the workshop to address your specific questions.',
      icon: 'MagicWand',
    },
  ]

  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section narrow={true} className="mb-4">
        <p className="mb-4 text-center text-lg">👋 Hands-on workshop</p>
        <h1 className="font-4xl mb-8 text-center text-4xl leading-[1.125]">
          <span className="md:block">Building a design system</span>
          <span className="md:block">with Figma, React, and Storybook</span>
        </h1>
        <p className="mt-8 text-center text-lg">Get your spot workshops 👇</p>
      </Section>

      <Section narrow={true} className="mb-20">
        {/* Two cards side by side with equal height */}
        <div className="mx-auto grid w-full max-w-[80%] grid-cols-1 md:grid-cols-2">
          <Card
            rounded={false}
            className="h-full bg-[var(--btg-hero-background-blue)] text-[var(--btg-color-neutral-1000)] hover:bg-[var(--btg-color-highlight-700)]"
            href="https://www.eventbrite.fi/e/hands-on-workshop-on-building-a-design-system-tickets-1289513131489"
            footer={
              <CtaLink
                to="https://www.eventbrite.fi/e/hands-on-workshop-on-building-a-design-system-tickets-1289513131489"
                className="px-2 text-lg font-medium"
                colorVar="--btg-color-neutral-1000"
                colorHoverVar="--btg-color-neutral-900"
              >
                Book your spot →
              </CtaLink>
            }
          >
            <div className="px-2 py-6">
              <p className="text-lg font-bold">9th of April, 2025</p>
              <p className="mb-2 text-lg font-bold">9:00 AM - 5:00 PM CEST</p>
              <p className="mt-16">Location: on Zoom</p>
              <p className="mb-12">Secure payment: Eventbrite</p>
            </div>
          </Card>

          <Card
            rounded={false}
            className="h-full bg-[var(--btg-color-neutral-100)] text-[var(--btg-color-neutral-1000)] hover:bg-[var(--btg-color-neutral-200)]"
            href="/contact"
            footer={
              <CtaLink
                to="/contact"
                className="px-2 text-lg font-medium"
                colorVar="--btg-color-neutral-1000"
                colorHoverVar="--btg-color-neutral-900"
              >
                Let's talk →
              </CtaLink>
            }
          >
            <div className="px-2 py-6">
              <p className="text-lg font-bold">Need a custom workshop for your team?</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="mb-20">
        <h2 className="font-4xl mb-10 text-4xl">What you will learn?</h2>
        <p className="font-lg text-xl">
          Learn and practice design systems on a real project. You can join as a designer or
          developer, engaging in multidisciplinary work.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* First column */}
          <div className="mt-8">
            <p className="text-lg">
              Participants will work on a design system example, simulating a real project
              environment. Designers create a tokens system and themeable Figma components, while
              developers build a component library with React and Storybook. You'll contribute to a
              shared result, gaining hands-on experience in collaborative design and development.
            </p>
          </div>

          {/* Second column */}
          <div className="mt-8">
            <p className="text-lg">
              By the end of the workshop, you'll have contributed to a design system with real tasks
              that touch token system, components, and documentation. You'll also receive one hour
              of individual consultation within the next two months to address specific questions
              and deepen your understanding.
            </p>
          </div>
        </div>
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-center text-4xl">Workshop content</h2>
        <Timetable items={timetableItems} />
      </Section>

      {/* Workshop Highlights Section */}
      <Section className="mb-20">
        <Advantages
          title={<h2 className="font-4xl mb-10 text-4xl">Workshop Highlights</h2>}
          content={workshopAdvantages}
        />
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl">Why Attend</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
          <div className="">
            <h3 className="text-2Xl font-2Xl leading-2Xl tracking-2Xl">As a Designer</h3>
            <ul className="list mt-6 list-inside list-disc">
              <li>Practice UI inventory</li>
              <li className="mt-3">Learn how to create a scalable tokens system</li>
              <li className="mt-3">Organize components in Figma</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2Xl font-2Xl leading-2Xl tracking-2Xl">As a Developer</h3>
            <ul className="list mt-6 list-inside list-disc">
              <li>Engage in component-driven development</li>
              <li className="mt-3">Document components in Storybook</li>
              <li className="mt-3">Improve design&development workflows</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2Xl font-2Xl leading-2Xl tracking-2Xl">As a Team</h3>
            <ul className="list mt-6 list-inside list-disc">
              <li>Collaborate on a shared project with real-life tasks</li>
              <li className="mt-3">Experience a full design system lifecycle</li>
              <li className="mt-3">Enhance team communication and collaboration</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl">Book a Call</h2>
        <Contact
          header={
            <p className="mt-4 text-center font-lg text-lg leading-lg tracking-lg">
              Have questions about the workshop? Book a free 30-minute call with Varya to discuss
              your expectations and how this workshop can benefit your team.
            </p>
          }
          footer={' '}
        />
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl mb-10 text-4xl">Who We Are</h2>
        {['varya', 'sherif', 'irina'].map((key) => {
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

      <Section className="mb-20" narrow={true} expandRight={true}>
        <div className="container flex flex-col justify-between overflow-hidden">
          <Testimonial
            narrow={true}
            title={<h2 className="text-4xl">People Say</h2>}
            testimonials={filteredTestimonials}
          />
        </div>
      </Section>

      <Outro backgroundColor="var(--btg-hero-background-blue)" />
    </>
  )
}

export default HandsOnDesignSystemsPage
