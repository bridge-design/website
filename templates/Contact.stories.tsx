import { Meta, StoryObj } from '@storybook/react'

import { Contact } from '../components-new/Contact/Contact'
import { Header } from '../components-new/Header/Header'
import { Section } from '../components-new/Section/Section'
import { HorizontalWave } from '../components-new/HorizontalWave/HorizontalWave'
import { Footer } from '../components-new/Footer/Footer'
import { Testimonial } from '../components-new/Testimonial/Testimonial'
import { ProfileCard } from '../components-new/ProfileCard/ProfileCard'

import { TESTIMONIALS } from '../data/testimonials'
import { team } from '../data/team'

const meta: Meta = {
  title: 'Templates/Contact',
  component: () => null,
  tags: ['autodocs', 'dev', 'draft'],
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
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
]

export const Default: Story = {
  render: () => (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <Header navigationItems={navigationItems} />
      <HorizontalWave color="var(--btg-hero-background-blue)" />
      <Section className="py-12">
        <Contact />
      </Section>
      <Footer siteTitle="Bridge-The-Gap - design systems consulting and workshops" />
    </>
  ),
}
