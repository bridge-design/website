import { Meta, StoryObj } from '@storybook/react'
import { BlogList } from './BlogList'

const meta: Meta<typeof BlogList> = {
  title: 'Components/Lists/BlogList',
  component: BlogList,
  tags: ['beta'],
  argTypes: {
    posts: {
      control: 'object',
      description: 'An array of blog post data to display in the list.',
    },
  },
}

export default meta

type Story = StoryObj<typeof BlogList>

export const Default: Story = {
  args: {
    posts: [
      {
        path: 'post-1',
        date: '2023-10-01',
        title: 'Understanding Design Systems',
        description: 'A deep dive into design systems and how they improve efficiency.',
      },
      {
        path: 'post-2',
        date: '2023-11-01',
        title: 'React Performance Tips',
        description: 'Learn how to optimize React applications for better performance.',
      },
    ],
  },
}
