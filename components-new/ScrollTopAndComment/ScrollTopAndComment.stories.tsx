import { Meta, StoryObj } from '@storybook/react'
import { ScrollTopAndComment } from './ScrollTopAndComment'

const meta: Meta<typeof ScrollTopAndComment> = {
  title: 'Components/ScrollTopAndComment',
  component: ScrollTopAndComment,
  tags: ['draft'],
  argTypes: {
    commentId: {
      control: 'text',
      description: 'The ID of the comment section to scroll to.',
      defaultValue: 'comment',
    },
  },
}

export default meta

type Story = StoryObj<typeof ScrollTopAndComment>

export const Default: Story = {
  args: {
    commentId: 'comment',
  },
}

export const WithoutComment: Story = {
  args: {
    commentId: '',
  },
}
