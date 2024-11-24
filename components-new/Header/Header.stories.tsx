import { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    navigationItems: {
      control: 'object',
      description: 'List of navigation items with name and href properties.',
    },
    linkComponent: {
      control: false,
      description: 'Optional custom link component for navigation items.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    navigationItems: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Services', href: '/services' },
      { name: 'Blog', href: '/blog' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
}

export const WithCustomLinkComponent: Story = {
  args: {
    navigationItems: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
    linkComponent: ({ href, children }: { href: string; children: React.ReactNode }) => (
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
  },
}
