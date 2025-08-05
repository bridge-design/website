import { Meta, StoryObj } from '@storybook/react'
import { DefaultPageList, Page } from './PageList'

const meta: Meta<typeof DefaultPageList> = {
  title: 'Components/Lists/PageList',
  component: DefaultPageList,
  tags: ['beta'],
  argTypes: {
    pages: {
      control: 'object',
      description: 'An array of page data to display in the list.',
    },
  },
}

export default meta

type Story = StoryObj<typeof DefaultPageList>

export const Default: Story = {
  args: {
    pages: [
      {
        path: 'page-1',
        title: 'Understanding Design Systems',
        description: 'A deep dive into design systems and how they improve efficiency.',
        date: '2023-10-01',
      },
      {
        path: 'page-2',
        title: 'React Performance Tips',
        description: 'Learn how to optimize React applications for better performance.',
      },
      {
        path: 'page-3',
        title: 'Design System Patterns',
      },
    ] as Page[],
  },
}

export const Empty: Story = {
  args: {
    pages: [],
  },
} 