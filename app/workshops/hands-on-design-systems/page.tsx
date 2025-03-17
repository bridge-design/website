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
      <Section narrow={true}>
        <p className="text-center text-2xl">👋 Hands-on workshop</p>
        <h1 className="font-4xl mb-16 text-center text-4xl">
          Building <span className="md:block">a design system</span>
          <span className="md:block">with Figma, React, and Storybook</span>
        </h1>
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

      <Section className="mb-20" narrow={true}>
        <Card>
          <div className="mt-16 font-lg text-lg leading-lg tracking-lg md:mt-0">
            <p className="mb-6">
              This workshop helps you learn and practice design systems on a real project. You can
              join as a designer or developer, engaging in multidisciplinary work.
            </p>
            <p className="mb-6">
              Participants will work on a design system example, simulating a real project
              environment. Designers create a <b>tokens system</b> and{' '}
              <b>themeable Figma components</b>, while developers build a{' '}
              <b>component library with React</b> and <b>Storybook</b>. You'll contribute to a
              shared result, gaining hands-on experience in collaborative design and development. .
            </p>
            <p className="mb-6">
              By the end of the workshop, you'll have contributed to a design system with real tasks
              that touch token system, components, and documentation. You'll also receive{' '}
              <b>one hour of individual consultation</b> within the next two months to address
              specific questions and deepen your understanding.
            </p>
          </div>
        </Card>
      </Section>

      {/* Workshop Highlights Section */}
      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl mb-10 text-center text-4xl">Workshop Highlights</h2>
        <Advantages content={workshopAdvantages} />
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-center text-4xl">Workshop content</h2>
        <Timetable items={timetableItems} />
      </Section>
      {/* <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-center text-4xl">Deliverables</h2>
        <p className="font-lg text-lg leading-lg tracking-lg">
          By the end of the workshop, each team has a ready-to-use component library, an end product
          built out of that, and a tuned process to ensure smooth updates.
        </p>
        <figure className="mt-10">
          <div className="relative mx-auto w-full max-w-4xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              title="Deliverables"
              width="888"
              src="https://www.youtube.com/embed/RWECCt6rDPU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              className="absolute inset-0 h-full w-full"
            ></iframe>
          </div>
          <figcaption className="text-light-on-background-500 mt-2 text-center font-sm text-sm leading-sm tracking-sm">
            Sneak peek: Changes in Figma design tokens are automatically reflected in the components
            and exported to code.
          </figcaption>
        </figure>
      </Section> */}
      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-center text-4xl">Why Attend</h2>
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
        <h2 className="font-4xl text-center text-4xl">Book a Call</h2>
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
      <Section className="mb-20" narrow={true} expandRight={true}>
        <div className="container flex flex-col justify-between overflow-hidden">
          <Testimonial
            narrow={true}
            title={<h2 className="text-4xl">People Say</h2>}
            testimonials={filteredTestimonials}
          />
        </div>
      </Section>
      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl mb-10 text-center text-4xl">Who We Are</h2>
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
            />
          )
        })}
      </Section>
      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl mb-10 text-center text-4xl">
          Want a custom workshop for your team?
        </h2>
        <p className="mb-10 font-lg text-lg leading-lg tracking-lg">
          Need a custom version? We can tailor a design system workshop for your company. We'll walk
          through the design system process, how to get started and how to fit it into your existing
          design processes. There will be an opportunity for the team to discuss questions they
          might have about implementing a design system.
        </p>
        <div className="text-center">
          <CtaLink to="/contact" className="text-2xl" arrow="end" underline={true}>
            Let's talk
          </CtaLink>
        </div>
      </Section>
      <Outro backgroundColor="var(--btg-hero-background-blue)" />
    </>
  )
}

export default HandsOnDesignSystemsPage
