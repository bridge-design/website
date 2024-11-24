import { Meta, StoryObj } from '@storybook/react'
import { Navigation } from './Navigation'

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of navigation items with name and href properties.',
    },
    linkComponent: {
      control: false,
      description: 'Optional custom link component for navigation items.',
    },
    className: {
      control: 'text',
      description: 'Additional classes for the navigation container.',
    },
    children: {
      control: false,
      description: 'Optional children to render inside the navigation container.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Navigation>

export const Default: Story = {
  args: {
    items: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
  },
}

export const WithCustomLinkComponent: Story = {
  args: {
    items: [
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

export const WithChildren: Story = {
  args: {
    items: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
    children: <div className="mt-4">Additional content below the menu</div>,
  },
}
