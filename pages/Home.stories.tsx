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
      <Section backgroundColor="--btg-color-primary-400">
        <p>
          <b>Our services</b>
        </p>
        <ul>
          <li>Design system audits</li>
          <li>Design system implementation</li>
          <li>Design system maintenance</li>
          <li>Design system training</li>
        </ul>
      </Section>
      <Section backgroundColor="--btg-color-highlight-400">
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
      <Section backgroundColor="--btg-color-accent-400">
        <p>People say</p>
        <p>Source: draft #3</p>
      </Section>
      <Section backgroundColor="--btg-color-primary-400">
        <p>Meet the team</p>
        <p>Source: draft #3</p>
      </Section>
      <Section backgroundColor="--btg-color-accent-400">
        <p>Case studies</p>
      </Section>
      <Section backgroundColor="--btg-color-highlight-400">
        <p>Start Your Design System Journey</p>
        <p>Source: draft #3</p>
      </Section>
      <Footer siteTitle="Bridge-The-Gap - design systems consulting and workshops" />
    </>
  ),
}