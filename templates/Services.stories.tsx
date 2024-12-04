import { Meta, StoryObj } from '@storybook/react'

import { Advantages } from '../components-new/Advantages/Advantages'
import { Blob } from '../components-new/Blob/Blob'
import { CtaLink } from '../components-new/CtaLink/CtaLink'
import { Header } from '../components-new/Header/Header'
import { Outro } from '../components-new/Outro/Outro'
import { Section } from '../components-new/Section/Section'
import { HorizontalWave } from '../components-new/HorizontalWave/HorizontalWave'
import { Footer } from '../components-new/Footer/Footer'

import { EXPERTISE, HOW_IT_WORKS } from '../data/services'

const EXPERTISE_COLORS_AND_VARIANTS: Array<{
  color: string
  variant: '1' | '2' | '3' | '4' | '5' | '6'
}> = [
  { color: 'var(--btg-color-primary-500)', variant: '1' },
  { color: 'var(--btg-color-highlight-700)', variant: '2' },
  { color: 'var(--btg-color-highlight-1000)', variant: '3' },
  { color: 'var(--btg-color-accent-800)', variant: '4' },
  { color: 'var(--btg-color-primary-800)', variant: '5' },
  { color: 'var(--btg-color-accent-500)', variant: '6' },
]

const meta: Meta = {
  title: 'Templates/Services',
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
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-blue); }`}</style>
      <Header navigationItems={navigationItems} />
      <HorizontalWave color="var(--btg-hero-background-blue)" />
      <Section className="py-12">
        <div className="text-center lg:mt-8">
          <h1 className="font-6xl animate-reveal mx-auto text-center text-6xl">
            Design system speeds building digital products and time to market
          </h1>
          <h3 className="font-2xl animate-reveal mx-auto mt-10 text-center text-2xl">
            A reusable components library enabling organization teams to build products efficiently.
          </h3>
          <CtaLink
            to="/contact"
            underline={true}
            className="mt-10 text-xl"
            borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
          >
            Start a conversation
          </CtaLink>
        </div>
      </Section>
      <Section className="py-12">
        <Advantages content={HOW_IT_WORKS} />
      </Section>
      <Section className="py-12">
        <h2 className="mb-6 text-center text-4xl">What we Do</h2>
        <div className="space-y-12">
          {EXPERTISE.map((item, index) => (
            <div
              key={index}
              className={`lg:grid lg:gap-8 ${
                index % 2 === 1 ? 'lg:grid-cols-[1fr_250px]' : 'lg:grid-cols-[250px_1fr]'
              }`}
            >
              <div
                className={`flex justify-center lg:block ${index % 2 === 1 ? 'lg:order-last' : ''}`}
              >
                <Blob
                  animate={true}
                  size={250}
                  color={EXPERTISE_COLORS_AND_VARIANTS[index].color}
                  variant={EXPERTISE_COLORS_AND_VARIANTS[index].variant}
                />
              </div>

              <div>
                <h3 className="mb-4 text-center text-2xl font-bold lg:text-left">{item.title}</h3>
                <p className="prose max-w-none text-justify dark:prose-invert">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Outro backgroundColor="var(--btg-hero-background)">
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
