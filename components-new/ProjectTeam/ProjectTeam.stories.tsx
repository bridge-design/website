import { Meta, StoryObj } from '@storybook/react'
import { ProjectTeam } from './ProjectTeam'
import { team as teamData } from '@/data/team'

const meta: Meta<typeof ProjectTeam> = {
  title: 'Components/ProjectTeam',
  component: ProjectTeam,
  tags: ['beta'],
  argTypes: {
    team: {
      control: 'array',
      description: 'Array of team member IDs.',
    },
  },
}

export default meta

type Story = StoryObj<typeof ProjectTeam>

export const Default: Story = {
  args: {
    team: ['varya', 'irina', 'alexandra'],
  },
}

export const FullTeam: Story = {
  args: {
    team: Object.keys(teamData),
  },
}

export const CustomSubset: Story = {
  args: {
    team: ['irina', 'andriy'],
  },
}
