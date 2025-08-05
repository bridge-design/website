import { Meta, StoryObj } from '@storybook/react'
import { PageListItem } from './PageListItem'

const meta: Meta<typeof PageListItem> = {
  title: 'Components/Lists/PageListItem',
  component: PageListItem,
  tags: ['beta'],
  argTypes: {
    path: {
      control: 'text',
      description: 'Path to the page.',
    },
    title: {
      control: 'text',
      description: 'Title of the page.',
    },
    description: {
      control: 'text',
      description: 'Optional description of the page.',
    },
    date: {
      control: 'text',
      description: 'Optional publication date.',
    },
  },
}

export default meta

type Story = StoryObj<typeof PageListItem>

export const Default: Story = {
  args: {
    path: 'page-1',
    title: 'Understanding Design Systems',
    description: 'A deep dive into design systems and how they improve efficiency.',
    date: '2023-10-01',
  },
}

export const WithoutDate: Story = {
  args: {
    path: 'page-2',
    title: 'Design System Components',
    description: 'A comprehensive guide to design system components.',
  },
}

export const WithoutDescription: Story = {
  args: {
    path: 'page-3',
    title: 'Design System Patterns',
  },
} 