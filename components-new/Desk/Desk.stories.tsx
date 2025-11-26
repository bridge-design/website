import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Desk } from './Desk'

const meta: Meta<typeof Desk> = {
  title: 'Components/Desk',
  component: Desk,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'text',
      description: 'Background color CSS variable or value',
    },
    textColor: {
      control: 'text',
      description: 'Text color CSS variable or value',
    },
    iconBackgroundColor: {
      control: 'text',
      description: 'Icon background color CSS variable or value',
    },
    gridClasses: {
      control: 'text',
      description: 'CSS classes for the grid layout',
    },
    containerClasses: {
      control: 'text',
      description: 'Additional CSS classes for the container',
    },
    itemClasses: {
      control: 'text',
      description: 'CSS classes for each item',
    },
    iconClasses: {
      control: 'text',
      description: 'Additional CSS classes for icons',
    },
    titleClasses: {
      control: 'text',
      description: 'CSS classes for item titles',
    },
    descriptionClasses: {
      control: 'text',
      description: 'CSS classes for item descriptions',
    },
    url: {
      control: 'text',
      description: 'URL to navigate to when clicked (makes entire component clickable)',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const defaultContent = [
  {
    icon: 'Idea',
    title: 'Innovation',
    description: 'Drive innovation with cutting-edge solutions and creative thinking.',
  },
  {
    icon: 'ImproveRelevance',
    title: 'Precision',
    description: 'Achieve precise results with focused attention to detail.',
  },
  {
    icon: 'Growth',
    title: 'Growth',
    description: 'Scale your business with sustainable growth strategies.',
  },
]

export const Default: Story = {
  args: {
    content: defaultContent,
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Our Approach</h2>
      </div>
    ),
  },
}

export const TwoColumns: Story = {
  args: {
    content: defaultContent.slice(0, 2),
    gridClasses: 'grid grid-cols-1 md:grid-cols-2 gap-12',
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Two Column Layout</h2>
      </div>
    ),
  },
}

export const FourColumns: Story = {
  args: {
    content: [
      ...defaultContent,
      {
        icon: 'Shield',
        title: 'Security',
        description: 'Protect your assets with enterprise-grade security measures.',
      },
    ],
    gridClasses: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8',
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Four Column Layout</h2>
      </div>
    ),
  },
}

export const ResponsiveBreakpoints: Story = {
  args: {
    content: [
      ...defaultContent,
      {
        icon: 'Settings',
        title: 'Optimization',
        description: 'Optimize performance for maximum efficiency.',
      },
      {
        icon: 'Users',
        title: 'Collaboration',
        description: 'Foster teamwork and collaborative innovation.',
      },
      {
        icon: 'Chart',
        title: 'Analytics',
        description: 'Data-driven insights for informed decision making.',
      },
    ],
    gridClasses: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 gap-6',
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Complex Responsive Layout</h2>
        <p className="text-lg opacity-80">1 col → 2 cols → 3 cols → 6 cols → 3 cols</p>
      </div>
    ),
  },
}

export const CustomColors: Story = {
  args: {
    content: defaultContent,
    backgroundColor: 'var(--btg-color-primary-500)',
    textColor: 'var(--btg-color-neutral-1000)',
    iconBackgroundColor: 'var(--btg-color-primary-700)',
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Custom Primary Colors</h2>
      </div>
    ),
  },
}

export const HighlightTheme: Story = {
  args: {
    content: defaultContent,
    backgroundColor: 'var(--btg-color-highlight-400)',
    textColor: 'var(--btg-color-neutral-1000)',
    iconBackgroundColor: 'var(--btg-color-highlight-600)',
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Highlight Theme</h2>
      </div>
    ),
  },
}

export const DarkTheme: Story = {
  args: {
    content: defaultContent,
    backgroundColor: 'var(--btg-color-neutral-200)',
    textColor: 'var(--btg-color-neutral-900)',
    iconBackgroundColor: 'var(--btg-color-neutral-400)',
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Dark Theme</h2>
      </div>
    ),
  },
}

export const Clickable: Story = {
  args: {
    content: defaultContent,
    url: '/services',
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Clickable Component</h2>
        <p className="text-lg opacity-80">Click anywhere to navigate!</p>
      </div>
    ),
  },
}

export const CustomStyling: Story = {
  args: {
    content: defaultContent,
    gridClasses: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
    containerClasses: 'rounded-xl shadow-lg',
    itemClasses: 'text-center',
    iconClasses: 'mx-auto shadow-md',
    titleClasses: 'mb-3 mt-4 font-3xlBold text-3xl text-center',
    descriptionClasses: 'font-base text-base text-center leading-relaxed',
    title: (
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-5xl text-5xl">Custom Styling</h2>
        <p className="text-xl opacity-80">Center-aligned with custom classes</p>
      </div>
    ),
  },
}

export const MinimalGrid: Story = {
  args: {
    content: [
      {
        icon: 'Check',
        title: 'Simple',
        description: 'Clean and minimal design.',
      },
      {
        icon: 'Lightning',
        title: 'Fast',
        description: 'Lightning fast performance.',
      },
    ],
    gridClasses: 'flex flex-col md:flex-row gap-16',
    itemClasses: 'flex-1',
    backgroundColor: 'var(--btg-color-neutral-900)',
    textColor: 'var(--btg-color-neutral-200)',
    iconBackgroundColor: 'var(--btg-color-accent-500)',
    title: (
      <div className="mb-12 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Minimal Flex Layout</h2>
      </div>
    ),
  },
}

export const Transparent: Story = {
  args: {
    content: [
      {
        icon: 'CloudApp',
        title: 'Transparent Background',
        description: 'Perfect for overlaying on images or colored backgrounds.',
      },
      {
        icon: 'Layers',
        title: 'Layered Design',
        description: 'Seamlessly integrates with existing page layouts.',
      },
      {
        icon: 'Opacity',
        title: 'Clean Integration',
        description: 'No background interference with your design system.',
      },
    ],
    backgroundColor: 'transparent',
    textColor: 'var(--btg-color-neutral-100)',
    iconBackgroundColor: 'var(--btg-color-neutral-800)',
    containerClasses: 'border border-dashed border-gray-300 bg-transparent',
    title: (
      <div className="mb-10 text-center">
        <h2 className="mb-6 font-4xl text-4xl">Transparent Version</h2>
        <p className="text-lg opacity-80">No background color, perfect for layering</p>
      </div>
    ),
  },
}
