import { Meta, StoryObj } from '@storybook/react'

import { Header } from '../components-new/Header/Header'
import { Section } from '../components-new/Section/Section'
import { Hero } from '../components-new/Hero/Hero'
import { CtaLink } from '../components-new/CtaLink/CtaLink'
import { Footer } from '../components-new/Footer/Footer'
import { ThreeColumnLayout } from '../components-new/ThreeColumnLayout/ThreeColumnLayout'
import { Blob } from '../components-new/Blob/Blob'
import { Testimonial } from '../components-new/Testimonial/Testimonial'
import { ProfileCard } from '../components-new/ProfileCard/ProfileCard'
import { LogosCloud } from '../components-new/LogosCloud/LogosCloud'
import { Outro } from '../components-new/Outro/Outro'

import { TESTIMONIALS } from '../data/testimonials'
import { team } from '../data/team'
import { caseStudiesExamples } from '../data/case-studies-examples'

const caseLogos = caseStudiesExamples.map((post) => ({
  src: post.logo,
  alt: post.title,
  link: `/case-studies/${post.slug}`,
}))

const meta: Meta = {
  title: 'Templates/Home',
  component: () => null,
  tags: ['autodocs', 'dev', 'stable'],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const navigationItems = [
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const Default: Story = {
  render: () => (
    <>
      <Header backgroundColor="var(--btg-hero-background-teal)" navigationItems={navigationItems} />
      <Hero backgroundColor="var(--btg-hero-background-teal)">
        <div className="text-center lg:mt-8">
          <h1 className="font-6xl mx-auto mb-16 text-4xl leading-hero lg:w-4/5 lg:text-6xl">
            We team up with designers and developers to build and scale design systems
          </h1>
          <CtaLink
            to="/contact"
            underline={true}
            className="text-xl"
            borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
          >
            Start a conversation
          </CtaLink>
        </div>
      </Hero>
      <Section className="pb-12">
        <h2 className="mb-6 text-center text-4xl">Our Design Systems Expertise</h2>
        <ThreeColumnLayout>
          <ThreeColumnLayout.Column>
            <h3 className="flex items-center space-x-2 text-2xl font-bold">
              <Blob animate={true} size={100} color="var(--btg-color-accent-500)" />
              <span>Audit & Strategy</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              We assess your current workflows, libraries, and team setups to analyse and craft
              strategy and roadmap to achive your next goals
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="flex items-center space-x-2 text-2xl font-bold">
              <Blob animate={true} size={100} variant="2" color="var(--btg-color-primary-500)" />
              <span>Implementation</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              We collaborate with your team to build scalable components and ensure seamless
              integration with your existing technology stack
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="flex items-center space-x-2 text-2xl font-bold">
              <Blob animate={true} size={100} variant="3" color="var(--btg-color-highlight-700)" />
              <span>Architecture</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              Drawing from our extensive experience with diverse design systems, we find flexible
              and scalable solutions for your architecture.
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="flex items-center space-x-2 text-2xl font-bold">
              <Blob animate={true} size={100} variant="4" color="var(--btg-color-highlight-1000)" />
              <span>Workflows</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              We ensure efficient workflows with design&development streamline, automated testing,
              tuned CI, and data-based decision making.
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="flex items-center space-x-2 text-2xl font-bold">
              <Blob animate={true} size={100} variant="5" color="var(--btg-color-accent-800)" />
              <span>Business value</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              We transform design systems into measurable assets to ensure that their impact is
              aligned with core business objectives.
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="flex items-center space-x-2 text-2xl font-bold">
              <Blob animate={true} size={100} variant="6" color="var(--btg-color-primary-800)" />
              <span>Trainings</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              Our workshops and tranings cover core principles, component building, and governance
              to empower teams for long-term success and autonomy.
            </p>
          </ThreeColumnLayout.Column>
        </ThreeColumnLayout>
        <div className="mt-4 w-full text-center">
          <CtaLink to="/services" className="text-2xl" arrow="end">
            More about our services
          </CtaLink>
        </div>
      </Section>
      <Section className="py-12">
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
      <Section className="py-12">
        <div className="container flex min-h-screen flex-col justify-between overflow-hidden">
          <Testimonial
            title={<h2 className="text-4xl">People Say</h2>}
            testimonials={TESTIMONIALS}
          />
        </div>
      </Section>
      <Section className="py-12">
        <h2 className="mb-6 hidden text-4xl">Case Studies</h2>
        {/* <CaseStudiesTeaser casePosts={caseStudiesExamples} /> */}
        <LogosCloud logos={caseLogos} />
        <div className="mt-12 w-full text-center">
          <CtaLink to="/case-studies" className="text-2xl" arrow="end">
            Explore our case studies
          </CtaLink>
        </div>
      </Section>
      <Outro backgroundColor="var(--btg-hero-background-teal)">
        <div className="text-center">
          <h1 className="font-4xl mx-auto mb-10 text-4xl lg:w-4/5">
            Want to start your design system journey with us?
          </h1>
          <CtaLink
            to="/contact"
            underline={true}
            className="text-xl"
            borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
          >
            Let's talk!
          </CtaLink>
        </div>
      </Outro>
      <Footer siteTitle="Bridge-The-Gap - design systems consulting and workshops" />
    </>
  ),
}
