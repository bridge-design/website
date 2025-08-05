import { Meta, StoryObj } from '@storybook/react'
import PartsExercise from '.'

const meta: Meta<typeof PartsExercise> = {
  title: 'Apps/PartsExercise',
  component: PartsExercise,
  tags: ['draft'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof PartsExercise>

export const Default: Story = {}
