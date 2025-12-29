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
  TimeDisplay,
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
          className="relative h-full bg-[var(--btg-hero-background-blue)] text-[var(--btg-color-neutral-1000)] hover:bg-[var(--btg-color-highlight-700)]"
        >
          <div className="px-2 pt-6">
            <p className="text-lg font-bold">3rd of February, 2026</p>
            <p className="mb-2 text-lg font-bold">
              <TimeDisplay time="6pm — 8pm" date="2025-12-05" defaultTimezone="CET" />
            </p>
            <p className="mt-8">Location: Remote (Zoom)</p>
            <p className="mb-4">Price: €30</p>
            <p className="text-sm">
              Only 20 spots:
              {` `}
              <a
                href="https://luma.com/3k7cattq"
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
      title: 'Practical & Applicable',
      description:
        'All examples are practical. We curated a list of atomic recipes that are easy to grasp and immediately apply to your project.',
      icon: 'Tools',
    },
    {
      title: 'Industry References',
      description:
        'We provide numerous references to real-world industry examples, showing how leading companies solve similar challenges.',
      icon: 'Partnership',
    },
    {
      title: 'Flexible Participation',
      description:
        'Choose your style: code along hands-on or just listen. You get comprehensive materials suitable for self-study at your own pace.',
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
          Practical Recipes for Documentation, Testing, and Automation
        </h2>
      </Section>

      <Section narrow={true} className="mb-20">
        <WorkshopTiles />
      </Section>

      <Section className="mb-20">
        <h2 className="mb-10 font-4xl text-4xl lg:font-5xl lg:text-5xl">What you will learn?</h2>
        <p className="font-lg text-xl lg:max-w-[1000px]">
          Unlock the full potential of Storybook as a comprehensive platform for your design system.
          This workshop goes beyond basic component rendering to teach you advanced customization,
          documentation strategies, and automated testing workflows.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="mt-8">
            <p className="text-lg">
              You'll learn how to structure and style your Storybook to act as a complete
              documentation site. We'll cover organizing the sidebar, creating custom pages, and
              building bespoke documentation blocks. You will practice documenting design tokens a
              way that bridges the gap between design and code.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-lg">
              We will also dive into the ecosystem's advanced features. You'll set up automated
              interaction tests, reuse stories in unit tests, and create custom addons to enhance
              the developer experience. We will touch RTL support, LLM-ready documentation, version
              switchers and many more. You'll master the techniques to make your design system
              robust and user-friendly.
            </p>
          </div>
        </div>
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">Topics we'll cover</h2>
        <ul className="mt-8 list-disc space-y-4 pl-6 text-lg">
          <li>
            <strong>Storybook Organization:</strong> Sidebar structure, grouping, tags, and custom
            pages
          </li>
          <li>
            <strong>Design Tokens:</strong> Automating documentation for diffrent types of tokens
            and CSS utilities available in the library
          </li>
          <li>
            <strong>Custom Documentation:</strong> Creating custom Docs Page templates, styled
            blocks, and property tables
          </li>
          <li>
            <strong>Developer Experience:</strong> Type-based documentation for props with automated
            and semi-automated enhancements
          </li>
          <li>
            <strong>Testing Strategies:</strong> Interaction tests and reusing stories in unit tests
            (Vitest/Jest)
          </li>
          <li>
            <strong>Advanced Customization:</strong> Custom addons, decorators, LLM-ready
            documentation and many more
          </li>
        </ul>
      </Section>

      <Section className="mb-20" narrow={true}>
        <h2 className="font-4xl text-4xl lg:font-5xl lg:text-5xl">What you need to know</h2>
        <ul className="mt-8 list-disc space-y-3 pl-6 text-lg">
          <li>
            <strong>Environment:</strong> You will need Node.js (version 22 or higher) and NPM
            installed on your machine.
          </li>
          <li>
            <strong>Repository:</strong> We will work with a provided public workshop repository.
            Basic familiarity with the file structure is helpful.
          </li>
          <li>
            <strong>Experience:</strong> Basic knowledge of React and Storybook is assumed, but you
            don't need to be an expert.
          </li>
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
          This workshop is designed for those who want to get more out of Storybook than just
          component rendering. You'll learn actionable techniques to make your Storybook a powerful,
          automated platform.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols-2">
          <div className="">
            <h2 className="font-xl text-xl leading-xl tracking-xl">for Developers</h2>
            <ul className="list mt-6 list-disc">
              <li>
                Master advanced configuration, custom addons, and automated workflows to tailor
                Storybook to your needs.
              </li>
              <li className="mt-3">
                Implement robust testing strategies (interaction & unit) to ensure component quality
                and prevent regressions.
              </li>
              <li className="mt-3">
                Learn recipes for efficient, automated documentation that stays in sync with your
                codebase.
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-xl text-xl leading-xl tracking-xl">for Designers who Code</h2>
            <ul className="list mt-6 list-disc">
              <li>
                Take ownership of the documentation structure and layout without relying heavily on
                engineering resources.
              </li>
              <li className="mt-3">
                Visualize design tokens and bridge the gap between Figma and the code library
                effectively.
              </li>
              <li className="mt-3">
                Create bespoke documentation pages and custom blocks that truly reflect your design
                system's brand and guidelines.
              </li>
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
        {['varya', 'irina'].map((key) => {
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
