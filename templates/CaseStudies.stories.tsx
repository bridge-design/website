import { Meta, StoryObj } from '@storybook/react'

import { CaseCard } from '../components-new/CaseCard/CaseCard'
import { Header } from '../components-new/Header/Header'
import { HorizontalWave } from '../components-new/HorizontalWave/HorizontalWave'
import { CtaLink } from '../components-new/CtaLink/CtaLink'
import { Footer } from '../components-new/Footer/Footer'
import { Outro } from '../components-new/Outro/Outro'
import { Section } from '../components-new/Section/Section'

import { caseStudiesExamples } from '../data/case-studies-examples'

const meta: Meta = {
  title: 'Templates/Case Studies',
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
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const Default: Story = {
  render: () => (
    <>
      <Header backgroundColor="var(--btg-hero-background-pink)" navigationItems={navigationItems} />
      <HorizontalWave color="var(--btg-hero-background-pink)" />
      <Section>
        <h1 className="font-5xl mb-16 text-center text-5xl">Case Studies</h1>
        <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:px-10 lg:py-11">
          {caseStudiesExamples.map((casePost) => (
            <CaseCard key={casePost.slug} casePost={casePost} />
          ))}
        </div>
      </Section>
      <Outro backgroundColor="var(--btg-hero-background-pink)">
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
      <Footer
        backgroundColor="var(--btg-hero-background-pink)"
        siteTitle="Bridge-The-Gap - design systems consulting and workshops"
      />
    </>
  ),
}
