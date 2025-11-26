import {
  Blob,
  Card,
  CtaLink,
  Hero,
  Icon,
  LogosCloud,
  Outro,
  ProfileCard,
  Section,
  Testimonial,
  ThreeColumnLayout,
} from '@/components-new/index'

import { team } from '@/data/team'
import { TESTIMONIALS } from '@/data/testimonials'
import { EXPERTISE } from '@/data/services'
import { allCaseStudies } from 'contentlayer/generated'

const EXPERTISE_COLORS_AND_VARIANTS: Array<{
  color: string
  variant: '1' | '2' | '3' | '4' | '5' | '6'
}> = [
  { color: 'var(--btg-color-accent-500)', variant: '1' },
  { color: 'var(--btg-color-primary-500)', variant: '2' },
  { color: 'var(--btg-color-highlight-700)', variant: '3' },
  { color: 'var(--btg-color-highlight-1000)', variant: '4' },
  { color: 'var(--btg-color-accent-800)', variant: '5' },
  { color: 'var(--btg-color-primary-800)', variant: '6' },
]

const caseLogos = allCaseStudies
  .filter((post): post is typeof post & { logo: string } => !!post.logo)
  .map((post) => ({
    src: post.logo,
    alt: post.title,
    link: `/case-studies/${post.slug}`,
  }))

export default async function Page() {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-teal); }`}</style>
      <Hero backgroundColor="var(--btg-hero-background-teal)">
        <div className="text-center lg:mt-8">
          <h1 className="mx-auto mb-16 font-2xl text-4xl leading-hero lg:w-4/5 lg:text-6xl">
            We team up with designers and developers to build and scale design systems
          </h1>
          <CtaLink
            to="/contact"
            underline={true}
            className="text-xl"
            colorVar="var(--btg-hero-text-color)"
            colorHoverVar="var(--btg-hero-text-color)"
            borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
          >
            Start a conversation
          </CtaLink>
        </div>
      </Hero>

      {/* Upcoming Events & Workshops Section */}
      <Section className="pb-12">
        <h2 className="mb-10 text-center text-4xl">Our Events or Events with Us 👇</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            href="/workshops/cursor-for-design-systems"
            backgroundColorVar="--btg-color-highlight-600"
            backgroundColorVarHover="--btg-color-highlight-700"
            backgroundColorVarDark="--btg-color-highlight-600"
            backgroundColorVarHoverDark="--btg-color-highlight-700"
            textColorVar="--btg-color-neutral-1000"
            textColorVarDark="--btg-color-neutral-1000"
            className="bg-[var(--btg-color-primary-700)] hover:bg-[var(--btg-color-primary-600)]"
          >
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                <Icon name="Education" className="text-[var(--btg-color-highlight-500)]" size={40} />
                <h3 className="text-xl font-bold">Cursor for Design Systems</h3>
              </div>
              <p>
                Hands-on workshop on using Cursor AI to design and develop design system components,
                views, and pages.
              </p>
              <CtaLink
                to="/workshops/cursor-for-design-systems"
                arrow="end"
                colorVar="var(--btg-color-neutral-1000)"
                colorHoverVar="var(--btg-color-neutral-900)"
              >
                Learn more
              </CtaLink>
            </div>
          </Card>

          <Card
            href="/events/breakfasts"
            backgroundColorVar="--btg-color-accent-500"
            backgroundColorVarHover="--btg-color-accent-600"
            backgroundColorVarDark="--btg-color-accent-500"
            backgroundColorVarHoverDark="--btg-color-accent-600"
            textColorVar="--btg-color-neutral-1000"
            textColorVarDark="--btg-color-neutral-1000"
            className="bg-[var(--btg-color-primary-700)] hover:bg-[var(--btg-color-primary-600)]"
          >
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                <Icon name="Cafe" className="text-[var(--btg-color-highlight-500)]" size={40} />
                <h3 className="text-xl font-bold">Design Systems Breakfast</h3>
              </div>
              <p>
                Free casual morning meetups where UX designers and UI developers share coffee,
                ideas, and insights.
              </p>
              <CtaLink
                to="/events/breakfasts"
                arrow="end"
                colorVar="var(--btg-color-neutral-1000)"
                colorHoverVar="var(--btg-color-neutral-900)"
              >
                Join next breakfast
              </CtaLink>
            </div>
          </Card>

          <Card
            href="/contact"
            backgroundColorVar="--btg-color-primary-500"
            backgroundColorVarHover="--btg-color-primary-600"
            backgroundColorVarDark="--btg-color-primary-500"
            backgroundColorVarHoverDark="--btg-color-primary-600"
            textColorVar="--btg-color-neutral-1000"
            textColorVarDark="--btg-color-neutral-1000"
            className="bg-[var(--btg-color-primary-700)] hover:bg-[var(--btg-color-primary-600)]"
          >
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                <Icon name="Partnership" className="text-[var(--btg-color-highlight-500)]" size={40} />
                <h3 className="text-xl font-bold">Custom Workshops & Training</h3>
              </div>
              <p>
                We provide internal training on design systems for your team. Tailored content for
                your specific needs.
              </p>
              <CtaLink
                to="/contact"
                arrow="end"
                colorVar="var(--btg-color-neutral-1000)"
                colorHoverVar="var(--btg-color-neutral-900)"
              >
                Let's talk
              </CtaLink>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="pb-12">
        <h2 className="mb-6 text-center text-4xl">Our Design Systems Expertise</h2>
        <ThreeColumnLayout>
          {EXPERTISE.map((item, index) => (
            <ThreeColumnLayout.Column key={index}>
              <h3 className="flex items-center space-x-2 text-2xl font-bold">
                <Blob
                  animate={true}
                  size={100}
                  color={EXPERTISE_COLORS_AND_VARIANTS[index].color}
                  variant={EXPERTISE_COLORS_AND_VARIANTS[index].variant}
                />
                <span>{item.titleShort}</span>
              </h3>
              <p className="prose mb-6 px-3 text-lg">{item.descriptionShort}</p>
            </ThreeColumnLayout.Column>
          ))}
        </ThreeColumnLayout>
        <div className="mt-4 w-full text-center">
          <CtaLink
            to="/services"
            className="text-2xl"
            arrow="end"
            colorVar="var(--btg-hero-text-color)"
            colorHoverVar="var(--btg-hero-text-color)"
          >
            More about our services
          </CtaLink>
        </div>
      </Section>
      <Section className="mb-10 py-12">
        <h2 className="mb-6 text-center text-4xl">Meet the Team</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-col xl:grid xl:grid-cols-2">
          {Object.values(team).map((member) => (
            <ProfileCard
              key={member.name}
              photoUrl={member.photoUrl}
              name={member.name}
              role={member.role}
              twitter={member.twitter}
              linkedin={member.linkedin}
              github={member.github}
            />
          ))}
        </div>
      </Section>
      <Section className="mb-10 overflow-x-hidden">
        <div className="relative">
          <div className="relative overflow-x-visible">
            <Testimonial
              title={<h2 className="text-4xl">People Say</h2>}
              testimonials={TESTIMONIALS}
            />
          </div>
        </div>
      </Section>
      <Section className="py-12">
        <h2 className="mb-6 hidden text-4xl">Case Studies</h2>
        {/* <CaseStudiesTeaser casePosts={caseStudiesExamples} /> */}
        <LogosCloud logos={caseLogos} />
        <div className="mt-12 w-full text-center">
          <CtaLink
            to="/case-studies"
            className="text-2xl"
            arrow="end"
            colorVar="var(--btg-hero-text-color)"
            colorHoverVar="var(--btg-hero-text-color)"
          >
            Explore our case studies
          </CtaLink>
        </div>
      </Section>
      <Outro backgroundColor="var(--btg-hero-background-teal)">
        <div className="text-center">
          <h1 className="mx-auto mb-10 font-4xl text-4xl lg:w-4/5">
            Want to start your design system journey with us?
          </h1>
          <CtaLink
            to="/contact"
            underline={true}
            className="text-xl"
            colorVar="var(--btg-hero-text-color)"
            colorHoverVar="var(--btg-hero-text-color)"
            borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
          >
            Let's talk!
          </CtaLink>
        </div>
      </Outro>
    </>
  )
}
