import { Meta, StoryObj } from '@storybook/react'

import { Header } from '../components-new/Header/Header'
import { Section } from '../components-new/Section/Section'
import { HorizontalWave } from '../components-new/HorizontalWave/HorizontalWave'
import { Footer } from '../components-new/Footer/Footer'
import { Testimonial } from '../components-new/Testimonial/Testimonial'
import { ProfileCard } from '../components-new/ProfileCard/ProfileCard'

import { TESTIMONIALS } from '../data/testimonials'
import { team } from '../data/team'

const meta: Meta = {
  title: 'Templates/Team',
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
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-pink); }`}</style>
      <Header navigationItems={navigationItems} />
      <HorizontalWave color="var(--btg-hero-background-pink)" />
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
      <Footer siteTitle="Bridge-The-Gap - design systems consulting and workshops" />
    </>
  ),
}
