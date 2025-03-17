import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { CtaLink } from '../CtaLink/CtaLink'

const meta: Meta<typeof Card> = {
  title: 'Components/Cards/Card',
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: (
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">Default Card</h3>
        <p>This is a default card with rounded corners.</p>
      </div>
    ),
  },
}

export const WithoutRounding: Story = {
  args: {
    rounded: false,
    children: (
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">Square Card</h3>
        <p>This card has no rounded corners.</p>
      </div>
    ),
  },
}

export const ClickableCard: Story = {
  args: {
    to: '/example-page',
    children: (
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">Clickable Card</h3>
        <p>This entire card is clickable and will navigate to the specified URL.</p>
        <div className="mt-4 text-[var(--btg-color-primary-500)]">Learn more →</div>
      </div>
    ),
  },
}

export const WithCustomStyling: Story = {
  args: {
    className:
      'bg-[var(--btg-hero-background-blue)] hover:bg-[var(--btg-color-highlight-700)] text-[var(--btg-color-neutral-1000)]',
    rounded: false,
    children: (
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">Custom Styled Card</h3>
        <p>This card has custom background and border styling applied through className.</p>
      </div>
    ),
  },
}

export const WithFooter: Story = {
  args: {
    children: (
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">Card with Footer</h3>
        <p>This card has a footer section that's separated from the main content.</p>
      </div>
    ),
    footer: (
      <CtaLink to="/example" className="text-lg" arrow="end">
        Learn more
      </CtaLink>
    ),
  },
}
