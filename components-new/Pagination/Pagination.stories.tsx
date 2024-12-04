import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['beta'],
  argTypes: {
    totalPages: {
      control: { type: 'number' },
      description: 'Total number of pages available.',
    },
    currentPage: {
      control: { type: 'number' },
      description: 'The current page being viewed.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
  },
}

export const MiddlePage: Story = {
  args: {
    totalPages: 10,
    currentPage: 5,
  },
}

export const LastPage: Story = {
  args: {
    totalPages: 10,
    currentPage: 10,
  },
}
