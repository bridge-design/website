import { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['beta'],
  argTypes: {
    href: {
      control: 'text',
      description: 'The destination URL of the link.',
    },
    children: {
      control: 'text',
      description: 'Content inside the link (text or other elements).',
    },
  },
}

export default meta

type Story = StoryObj<typeof Link>

export const InternalLink: Story = {
  args: {
    href: '/about',
    children: 'Internal Link',
  },
}

export const AnchorLink: Story = {
  args: {
    href: '#section',
    children: 'Anchor Link',
  },
}

export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
  },
}
