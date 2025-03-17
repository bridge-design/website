import { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'
import { CtaLink } from '../CtaLink/CtaLink'

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['beta'],
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: [
        'var(--btg-hero-background-teal)',
        'var(--btg-hero-background-pink)',
        'var(--btg-hero-background-blue)',
        'var(--btg-hero-background-sand)',
      ],
      defaultValue: 'var(--btg-hero-background-teal)',
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>{`:root { --btg-hero-background: var(--btg-hero-background-teal); }`}</style>
        <Story />
      </>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    title: 'Welcome to Our Platform',
    children: (
      <div className="mt-8 text-center">
        <h1 className="font-6xl mx-auto mb-16 text-6xl leading-hero lg:w-4/5">
          We team up with designers and developers to build and scale design systems
        </h1>
        <CtaLink
          to="/contact"
          underline={true}
          className="text-xl"
          colorVar="var(--btg-hero-text-color)"
          colorHoverVar="var(--btg-hero-text-color)"
          borderClassName="border-[var(--btg-hero-text-color)] hover:border-[var(--btg-hero-text-color)]"
        >
          Start a conversation
        </CtaLink>
      </div>
    ),
  },
}

export const Pink: Story = {
  args: {
    ...Default.args,
    backgroundColor: 'var(--btg-hero-background-pink)',
  },
}

export const Blue: Story = {
  args: {
    ...Default.args,
    backgroundColor: 'var(--btg-hero-background-blue)',
  },
}

export const Sand: Story = {
  args: {
    ...Default.args,
    backgroundColor: 'var(--btg-hero-background-sand)',
  },
}
