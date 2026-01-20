import { genPageMetadata } from 'app/seo'

import {
  Desk,
  Card,
  CtaLink,
  HorizontalWave,
  Link,
  Outro,
  ProfileCard,
  Section,
  Testimonial,
  TimeDisplay,
} from '@/components-new/index'

import { TESTIMONIALS } from '@/data/testimonials'
import { team } from '@/data/team'

export const metadata = genPageMetadata({
  title: 'Workshop: Design, Develop, Document & Build with Cursor AI',
  description:
    'Hands-on remote workshop on using Cursor to design and develop design system components. Learn Figma MCP, Chrome DevTools MCP, avoid coding traps, and get production-ready code systematically. For designers, product owners, and developers. No coding or Cursor experience required, only basic design systems knowledge.',
  image: '/images/workshops/curor-for-design-systems/thumb.png',
})

const WorkshopTiles = () => {
  return (
    <>
      <p className="mb-6 mt-8 text-center text-lg">Get your workshop spot 👇</p>
      <div className="mx-auto grid w-full max-w-[90%] grid-cols-1 gap-4 md:grid-cols-2">
        {/* January 27, 2026 Workshop */}
        <Card
          rounded={false}
          className="relative h-full bg-[var(--btg-hero-background-blue)] text-[var(--btg-color-neutral-1000)] hover:bg-[var(--btg-color-highlight-700)]"
        >
          <div className="absolute right-2 top-2 rounded bg-[var(--btg-color-highlight-1000)] px-2 py-1 text-xs font-bold text-[var(--btg-color-neutral-100)]">
            FINAL SPOTS
          </div>
          <div className="px-2 py-6">
            <p className="text-lg font-bold">27th of January, 2026</p>
            <p className="text-m mb-2 font-bold">
              9am — 11am (PST)
              <br />
              6pm — 8pm (CET)
            </p>
            <p className="mt-8">Location: Remote (Zoom)</p>
            <p className="mb-4">Price: $40</p>
            <p className="text-sm">
              Only 20 spots:
              {` `}
              <a
                href="https://luma.com/bx46lust"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--btg-color-neutral-1000)] underline hover:text-[var(--btg-color-neutral-900)] hover:no-underline"
              >
                Register on Luma →
              </a>
            </p>
          </div>
        </Card>

        {/* February 25, 2026 Workshop */}
        <Card
          rounded={false}
          className="relative h-full bg-[var(--btg-hero-background-blue)] text-[var(--btg-color-neutral-1000)] hover:bg-[var(--btg-color-highlight-700)]"
        >
          <div className="px-2 py-6">
            <p className="text-lg font-bold">25th of February, 2026</p>
            <p className="text-m mb-2 font-bold">
              9am — 11am (PST)
              <br />
              6pm — 8pm (CET)
            </p>
            <p className="mt-8">Location: Remote (Zoom)</p>
            <p className="mb-4">Price: $40</p>
            <p className="text-sm">
              Only 20 spots:
              {` `}
              <a
                href="https://luma.com/y5tx56is"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--btg-color-neutral-1000)] underline hover:text-[var(--btg-color-neutral-900)] hover:no-underline"
              >
                Register on Luma →
              </a>
            </p>
          </div>
        </Card>

        {/* Internal Training Card */}
        <Link href="/contact" className="block h-full md:col-span-2">
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
                Let's talk →
              </CtaLink>
            }
          >
            <div className="px-2 py-6">
              <p className="text-lg font-bold">
                We can provide internal training on these topics for your team
              </p>
            </div>
          </Card>
        </Link>
      </div>

      {/* Past Sessions */}
      <div className="mx-auto mt-10 w-full max-w-[90%]">
        <p className="tracking-wide mb-4 text-sm font-medium uppercase text-[var(--btg-color-neutral-600)]">
          Past Sessions
        </p>
        <ul className="space-y-2 text-sm text-[var(--btg-color-neutral-600)]">
          <li>
            5th of December, 2025 —{' '}
            <a
              href="https://luma.com/89xuqqwy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              View on Luma
            </a>
          </li>
          <li>
            9th of December, 2025 —{' '}
            <a
              href="https://luma.com/u5aiko87"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              View on Luma
            </a>
          </li>
        </ul>
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
        "Hands-on 'vibe coding' during the workshop. Code yourself with guidance and get practical, production-ready results you can reuse on your projects.",
      icon: 'Tools',
    },
    {
      title: 'Production-Ready Code',
      description:
        'Learn a systematic way to get meaningful, production-ready code from Cursor, making your handoff to developers smoother.',
      icon: 'MagicWand',
    },
    {
      title: 'Real Workflows',
      description:
        'See workflows from real projects: spec-driven development, documentation, and collaboration between coding designers and engineering teams.',
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
        <h2 className="mb-8 text-center font-3xl text-3xl leading-[1.125]">
          Design, Develop, Document & Build with AI
        </h2>
      </Section>

      <Section narrow={true} className="mb-20">
        <WorkshopTiles />
      </Section>

      <Section className="mb-20">
        <h2 className="mb-10 font-4xl text-4xl lg:font-5xl lg:text-5xl">What you will learn?</h2>
        <p className="font-lg text-xl lg:max-w-[1000px]">
          Learn how to use Cursor as a tool to design and develop design system components, document
          them, and bring them to pages. We'll look at Figma MCP, Chrome DevTools MCP, typical AI
          coding traps (especially if you're not a coder), and a systematic way to get
          production-ready code with one prompt.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* First column */}
          <div className="mt-8">
            <p className="text-lg">
              You'll learn how to build components, maintain them, document them, and build pages
              and views out of these components. This hands-on workshop will guide you through
              setting up Cursor, understanding workflows, and mastering iteration when creating
              code.
            </p>
          </div>

          {/* Second column */}
          <div className="mt-8">
            <p className="text-lg">
              By the end of the workshop, you'll have practical experience with spec-driven
              development, using MCPs, polishing design system documentation, creating application
              pages, and understanding workflows between coding designers and engineering teams.
            </p>
          </div>
        </div>
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">Topics we'll cover</h2>
        <ul className="mt-8 list-disc space-y-4 pl-6 text-lg">
          <li>Cursor: set up, basic of interface and workflows</li>
          <li>How to iterate when creating code</li>
          <li>MCP (Model Context Protocol) tools</li>
          <li>
            Spec-driven development:
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

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">
          What you need to know in advance
        </h2>
        <ul className="mt-8 list-disc space-y-3 pl-6 text-lg">
          <li>
            You should be familiar with design systems as a concept. Basic knowledge is more than
            enough.
          </li>
          <li>Do you need to know how to code? No.</li>
          <li>Do you need to know Cursor? No.</li>
          <li>Do you need to know Storybook? No.</li>
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
          This workshop is for designers, product people, and developers who want to work with
          design systems in Cursor. If you're not sure if this workshop is right for you, we
          recommend{' '}
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
            <h2 className="font-3xl text-3xl leading-3xl tracking-2xl">for Designers</h2>
            <ul className="list mt-6 list-disc">
              <li>Learn how to code and create living prototypes</li>
              <li className="mt-3">Provide better outputs that are closer to production-ready</li>
              <li className="mt-3">Smooth the workflow between design and engineering</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-3xl text-3xl leading-3xl tracking-2xl">for Product Owners</h2>
            <ul className="list mt-6 list-disc">
              <li>Deliver product ideas fast and hand them off smoothly to design and dev teams</li>
              <li className="mt-3">
                Create clear, AI-ready specs that accelerate development cycles
              </li>
              <li className="mt-3">
                Bridge the gap between product vision and technical implementation
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-3xl text-3xl leading-3xl tracking-2xl">for Developers</h2>
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
          <a href="mailto:mail@varya.me" className="underline hover:no-underline">
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
