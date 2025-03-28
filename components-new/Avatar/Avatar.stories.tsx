import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['beta'],
  argTypes: {
    member: {
      control: 'object',
      description: 'The team member object containing `photoUrl` and `name` properties.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    member: {
      photoUrl: 'https://i.pravatar.cc/150',
      name: 'Alice Doe',
      role: 'UI engineer',
    },
  },
}
