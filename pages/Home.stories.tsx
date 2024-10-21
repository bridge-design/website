import { Meta, StoryObj } from '@storybook/react'

import { Header } from '../components-new/Header/Header'
import { Section } from '../components-new/Section/Section'
import { Hero } from '../components-new/Hero/Hero'
import { Footer } from '../components-new/Footer/Footer'

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
      <Header navigationItems={navigationItems} />
      <Section>
        <Hero>
          <p>
            <b>Hero</b>
          </p>

          <p>Text: We team up with designers and developers to build and scale design systems</p>
          <p>Action button: "Start a conversation", link to "/contact".</p>
        </Hero>
      </Section>
      <Section backgroundColor="--btg-color-primary-700">
        <p>
          <b>Our Expertise</b>
        </p>
        <p>
          Design System Implementation Brief description: "We build scalable design systems that
          unify your brand and accelerate development." Technical Consulting Brief description:
          "Expert advice on integrating design and development processes for optimal efficiency."
          Process Optimization Brief description: "Streamlining workflows to enhance team
          collaboration and productivity." Training & Workshops Brief description: "Empowering your
          team with the knowledge and tools for sustained success."
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
