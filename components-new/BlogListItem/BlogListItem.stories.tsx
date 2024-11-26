import { Meta, StoryObj } from '@storybook/react'
import { BlogListItem } from './BlogListItem'

const meta: Meta<typeof BlogListItem> = {
  title: 'Components/BlogListItem',
  component: BlogListItem,
  tags: ['draft'],
  argTypes: {
    post: {
      control: 'object',
      description: 'Data for a single blog post.',
    },
  },
}

export default meta

type Story = StoryObj<typeof BlogListItem>

export const Default: Story = {
  args: {
    post: {
      path: 'post-1',
      date: '2023-10-01',
      title: 'Understanding Design Systems',
      description: 'A deep dive into design systems and how they improve efficiency.',
    },
  },
}
