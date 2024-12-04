import { Meta, StoryObj } from '@storybook/react'
import { DsPartsExercise } from './DsPartsExercise'

const meta: Meta<typeof DsPartsExercise> = {
  title: 'Components/DsPartsExercise',
  component: DsPartsExercise,
  tags: ['draft'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof DsPartsExercise>

export const Default: Story = {}
