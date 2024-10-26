import { Meta, StoryObj } from '@storybook/react'

import { Header } from '../components-new/Header/Header'
import { Section } from '../components-new/Section/Section'
import { Hero } from '../components-new/Hero/Hero'
import { Footer } from '../components-new/Footer/Footer'
import { ThreeColumnLayout } from '../components-new/ThreeColumnLayout/ThreeColumnLayout'
import { Card } from '../components-new/Card/Card'
import { Blob } from '../components-new/Blob/Blob'

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
          <a href="/contact" className="text-xl underline">
            Start a conversation
          </a>
        </div>
      </Hero>
      <Section>
        <h2 className="mb-6 text-center text-3xl">Our Services</h2>
        <ThreeColumnLayout>
          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} color="var(--btg-color-accent-500)" />
              <span>Audit & Strategy</span>
            </h3>
            <p className="prose mb-6 px-3">
              This is a default card with a heading, text content, and a link.
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} variant="2" color="var(--btg-color-primary-500)" />
              <span>Implementation</span>
            </h3>
            <p className="prose mb-6 px-3">
              This is a default card with a heading, text content, and a link.
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} variant="3" color="var(--btg-color-highlight-700)" />
              <span>Architecture</span>
            </h3>
            <p className="prose mb-6 px-3">
              This is a default card with a heading, text content, and a link.
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} variant="4" color="var(--btg-color-highlight-1000)" />
              <span>Streamline</span>
            </h3>
            <p className="prose mb-6 px-3">
              Streamlined workflows to enhance team collaboration and productivity.
            </p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} variant="5" color="var(--btg-color-accent-800)" />
              <span>Business value</span>
            </h3>
            <p className="prose mb-6 px-3">Data driven management etc</p>
          </ThreeColumnLayout.Column>

          <ThreeColumnLayout.Column>
            <h3 className="font-bold flex items-center space-x-2 text-2xl">
              <Blob animate={true} size={100} variant="6" color="var(--btg-color-primary-800)" />
              <span>Trainings</span>
            </h3>
            <p className="prose mb-6 px-3">
              This is a default card with a heading, text content, and a link.
            </p>
          </ThreeColumnLayout.Column>
        </ThreeColumnLayout>

        <p>
          <b>Our Expertise</b>
        </p>
        <p>
          - Design System Implementation Brief description: "We build scalable design systems that
          unify your brand and accelerate development." - Technical Consulting Brief description:
          "Expert advice on integrating design and development processes for optimal efficiency." -
          Process Optimization Brief description: "Streamlining workflows to enhance team
          collaboration and productivity." - Training & Workshops Brief description: "Empowering
          your team with the knowledge and tools for sustained success."
        </p>
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
      <Section backgroundColor="--btg-color-accent-700">
        <p>People say</p>
        <p>Source: draft #3</p>
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
