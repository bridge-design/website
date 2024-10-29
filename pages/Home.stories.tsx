import { Meta, StoryObj } from '@storybook/react'

import { Header } from '../components-new/Header/Header'
import { Section } from '../components-new/Section/Section'
import { Hero } from '../components-new/Hero/Hero'
import { CtaLink } from '../components-new/CtaLink/CtaLink'
import { Footer } from '../components-new/Footer/Footer'
import { ThreeColumnLayout } from '../components-new/ThreeColumnLayout/ThreeColumnLayout'
import { Card } from '../components-new/Card/Card'
import { Blob } from '../components-new/Blob/Blob'
import { Testimonial } from '../components-new/Testimonial/Testimonial'

import { TESTIMONIALS } from './data'

const meta: Meta = {
  title: 'Pages/Home',
  component: () => null,
  tags: ['autodocs', 'dev'],
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
        <div className="mt-8 text-center">
          <h1 className="font-6xl leading-hero mx-auto mb-16 text-6xl lg:w-4/5">
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
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} color="var(--btg-color-accent-500)" />
              <span>Audit & Strategy</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              We assess your current workflows, libraries, and team setups to analyse and craft
              strategy and roadmap to achive your next goals
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} variant="2" color="var(--btg-color-primary-500)" />
              <span>Implementation</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              We collaborate with your team to build scalable components and ensure seamless
              integration with your existing technology stack
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} variant="3" color="var(--btg-color-highlight-700)" />
              <span>Architecture</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              Drawing from our extensive experience with diverse design systems, we find flexible
              and scalable solutions for your architecture.
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} variant="4" color="var(--btg-color-highlight-1000)" />
              <span>Workflows</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              We ensure efficient workflows with design&development streamline, automated testing,
              tuned CI, and data-based decision making.
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} variant="5" color="var(--btg-color-accent-800)" />
              <span>Business value</span>
            </h3>
            <p className="prose mb-6 px-3 text-lg">
              We transform design systems into measurable assets to ensure that their impact is
              aligned with core business objectives.
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
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
      <Section backgroundColor="--btg-color-highlight-700">
        <p>
          <b>Help for busy teams</b>
        </p>
        <ul>
          <li>
            Added skillset Bring in specialized expertise without extensive training or recruitment.
          </li>
          <li>Additional expertise Access knowledge beyond your in-house capabilities.</li>
          <li>
            Continuous integration Seamlessly incorporate the design system into your workflow.
          </li>
        </ul>
        <p>Source: draft #3</p>
      </Section>
      <Section className="py-12">
        <Testimonial title={<h2 className="text-3xl">People Say</h2>} testimonials={TESTIMONIALS} />
      </Section>
      <Section backgroundColor="--btg-color-primary-700">
        <p>Meet the team</p>
        <p>Source: draft #3</p>
      </Section>
      <Section backgroundColor="--btg-color-accent-700">
        <p>Case studies</p>
      </Section>
      <Section backgroundColor="--btg-color-highlight-700">
        <p>Start Your Design System Journey</p>
        <p>Source: draft #3</p>
      </Section>
      <Footer siteTitle="Bridge-The-Gap - design systems consulting and workshops" />
    </>
  ),
}
