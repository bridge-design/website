import { Meta, StoryObj } from '@storybook/react'

import { Header } from '../components-new/Header/Header'
import { Section } from '../components-new/Section/Section'
import { Hero } from '../components-new/Hero/Hero'

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
      <Section backgroundColor="--btg-color-accent-400">
        <p>This is the Home page.</p>
      </Section>
      <Section backgroundColor="--btg-color-primary-400">
        <p>It has two sections.</p>
      </Section>
    </>
  ),
}
