import { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    heading: {
      control: 'text',
      description: 'The heading of the card',
    },
    link: {
      control: 'object',
      description: 'An optional link for the card',
    },
    children: {
      control: 'text',
      description: 'Content inside the card',
    },
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    heading: 'Default Card',
    link: {
      text: 'Learn More',
      href: '#',
    },
    children: (
      <p className="text-base">This is a default card with a heading, text content, and a link.</p>
    ),
  },
}

export const WithoutLink: Story = {
  args: {
    heading: 'Card without Link',
    children: (
      <p className="text-base">
        This card does not have any link, just a heading and some content.
      </p>
    ),
  },
}

export const CustomClass: Story = {
  args: {
    heading: 'Custom Styled Card',
    className:
      'bg-[var(--btg-color-highlight-900)] hover:bg-[var(--btg-color-highlight-1000)] border-[var(--btg-color-highlight-700)] ',
    link: {
      text: 'Check this out',
      href: '#',
    },
    children: (
      <p className="text-base">
        This card uses a custom background color and inherits all other styles.
      </p>
    ),
  },
}
