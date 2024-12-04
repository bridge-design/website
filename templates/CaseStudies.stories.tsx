import { Meta, StoryObj } from '@storybook/react'

import { CaseCard } from '../components-new/CaseCard/CaseCard'
import { CtaLink } from '../components-new/CtaLink/CtaLink'
import { Header } from '../components-new/Header/Header'
import { HorizontalWave } from '../components-new/HorizontalWave/HorizontalWave'
import { Footer } from '../components-new/Footer/Footer'
import { Outro } from '../components-new/Outro/Outro'
import { ProjectTeam } from '../components-new/ProjectTeam/ProjectTeam'
import { ScrollTopAndComment } from '../components-new/ScrollTopAndComment/ScrollTopAndComment'
import { Section } from '../components-new/Section/Section'

import { caseStudiesExamples } from '../data/case-studies-examples'

const meta: Meta = {
  title: 'Templates/Case Studies',
  component: () => null,
  tags: ['autodocs', 'dev', 'stable'],
  parameters: {
    controls: { hideNoControlsWarning: true },
    layout: 'fullscreen',
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

export const ACase = () => (
  <>
    <Header backgroundColor="var(--btg-hero-background-pink)" navigationItems={navigationItems} />
    <HorizontalWave color="var(--btg-hero-background-pink)" />
    <ScrollTopAndComment />
    <Section>
      <CtaLink to="/case-studies" arrow="start" className="text-xl">
        Back to all case studies
      </CtaLink>
      <article className="grow">
        <h1 className="font-5xl mb-16 text-center text-5xl">One Case</h1>
        <ProjectTeam team={caseStudiesExamples[0].team} />
        <div className="prose mx-auto my-12 text-justify dark:prose-invert">
          {caseStudiesExamples[0].description}
        </div>
      </article>
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
)
