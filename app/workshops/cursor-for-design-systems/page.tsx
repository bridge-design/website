import { genPageMetadata } from 'app/seo'

import {
  Desk,
  Card,
  CtaLink,
  HorizontalWave,
  Outro,
  ProfileCard,
  Section,
  Testimonial,
} from '@/components-new/index'

import { TESTIMONIALS } from '@/data/testimonials'
import { team } from '@/data/team'

export const metadata = genPageMetadata({
  title: 'Workshop: Cursor for Design Systems, Views and Pages',
  description:
    'Learn how to develop design system components in Cursor, document them, and build pages. Hands-on remote workshop for designers learning to code and junior to mid-level developers. Master production-ready code generation with AI.',
})

const WorkshopTiles = () => {
  return (
    <>
      <p className="mb-6 mt-8 text-center text-lg">Get your workshop spot 👇</p>
      <div className="mx-auto grid w-full max-w-[80%] grid-cols-1 md:grid-cols-2">
        <Card
          rounded={false}
          className="h-full bg-[var(--btg-hero-background-blue)] text-[var(--btg-color-neutral-1000)] hover:bg-[var(--btg-color-highlight-700)]"
        >
          <div className="px-2 py-6">
            <p className="text-lg font-bold">18th of November, 2025</p>
            <p className="mb-2 text-lg font-bold">2 hours</p>
            <p className="mt-16">Location: Remote (Zoom)</p>
            <p className="mb-12">Price: TBD</p>
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
            <p className="text-lg font-bold">We can provide internal training on these topics for your team</p>
          </div>
        </Card>
      </div>
    </>
  )
}

const CursorForDesignSystemsPage = () => {
  // Filter testimonials by specific categories
  const filteredTestimonials = TESTIMONIALS.filter((testimonial) =>
    ['workshop', 'varya', 'sherif'].includes(testimonial.category)
  )

  // Workshop advantages/highlights
  const workshopAdvantages = [
    {
      title: 'Hands-On Experience',
      description:
        'Code yourself during the workshop. Get practical, production-ready results with guidance and support throughout.',
      icon: 'Tools',
    },
    {
      title: 'Production-Ready Code',
      description:
        'Learn to master meaningful code generation that is close to production quality, making your handoff to developers smoother.',
      icon: 'MagicWand',
    },
    {
      title: 'Real Workflows',
      description:
        'Understand how to work effectively with Cursor, including spec-driven development, documentation, and collaboration with engineering teams.',
      icon: 'Partnership',
    },
  ]

  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Section narrow={true} className="mb-10">
        <p className="mb-4 text-center text-lg">👋 Hands-on workshop</p>
        <h1 className="mb-8 text-center font-4xl text-4xl leading-[1.125]">
          <span className="md:block">Cursor for Design System Components, Views and Pages</span>
        </h1>
        <h2 className="mb-8 text-center font-3xl text-3xl leading-[1.125]">Develop, Document & Build with AI</h2>
      </Section>

      <Section narrow={true} className="mb-20">
        <WorkshopTiles />
      </Section>

      <Section className="mb-20">
        <h2 className="mb-10 font-4xl text-4xl lg:font-5xl lg:text-5xl">What you will learn?</h2>
        <p className="font-lg text-xl lg:max-w-[1000px]">
          Learn how to develop design system components in Cursor, document them, and bring them to pages. While you can do some things via Figma AI tools, we offer Cursor because we've had better results with it on our projects.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* First column */}
          <div className="mt-8">
            <p className="text-lg">
              You'll learn how to build components, maintain them, document them, and build pages and views out of these components. This hands-on workshop will guide you through setting up Cursor, understanding workflows, and mastering iteration when creating code.
            </p>
          </div>

          {/* Second column */}
          <div className="mt-8">
            <p className="text-lg">
              By the end of the workshop, you'll have practical experience with spec-driven development, using MCPs, polishing design system documentation, creating application pages, and understanding workflows between coding designers and engineering teams.
            </p>
          </div>
        </div>
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">Topics we'll cover</h2>
        <ul className="mt-8 list-disc space-y-4 text-lg pl-6">
          <li>Cursor: set up, basic of interface and workflows</li>
          <li>How to iterate when creating code</li>
          <li>MCP (Model Context Protocol) tools</li>
          <li>Spec-driven development:
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Gathering requirements</li>
              <li>Creating specs</li>
              <li>Creating code by spec</li>
              <li>Documenting</li>
              <li>Testing components</li>
            </ul>
          </li>
          <li>Polishing design system documentation with Cursor</li>
          <li>Creating application pages and views with Cursor</li>
          <li>Updating existing applications</li>
          <li>Workflows between "coding designer" and engineering team</li>
        </ul>
      </Section>

      {/* Workshop Highlights Section */}
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
          This workshop is designed for designers and some developers. If you're not sure if this workshop is right for you, we recommend{' '}
          <a
            href="https://www.linkedin.com/in/varyastepanova/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            reaching out
          </a>{' '}
          to discuss your needs.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
          <div className="">
            <h2 className="font-3xl text-3xl leading-3xl tracking-2xl">For Designers</h2>
            <ul className="list mt-6 list-disc">
              <li>Learn how to code and create living prototypes</li>
              <li className="mt-3">Provide better outputs that are closer to production-ready</li>
              <li className="mt-3">Smooth the workflow between design and engineering</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-3xl text-3xl leading-3xl tracking-2xl">For Developers</h2>
            <ul className="list mt-6 list-disc">
              <li>Level up in meaningful code generation with AI</li>
              <li className="mt-3">Master spec-driven development workflows</li>
              <li className="mt-3">Improve collaboration with design team members who code</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">Questions?</h2>
        <p className="mt-4 font-lg text-lg leading-lg tracking-lg">
          Have questions about the workshop? Connect with Varya on{' '}
          <a
            href="https://www.linkedin.com/in/varyastepanova/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            LinkedIn
          </a>{' '}
          and send a message, or email at{' '}
          <a
            href="mailto:mail@varya.me"
            className="underline hover:no-underline"
          >
            mail@varya.me
          </a>
          .
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

export default CursorForDesignSystemsPage
