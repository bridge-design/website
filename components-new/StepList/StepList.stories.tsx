import { Meta, StoryObj } from '@storybook/react'
import { StepList } from './StepList'

const meta: Meta<typeof StepList> = {
  title: 'Components/StepList',
  component: StepList,
  argTypes: {
    steps: {
      control: 'object',
      description: 'List of steps to display with number, title, and description.',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'accent', 'highlight', 'neutral'],
      description: 'Color theme for the StepList',
    },
    titleTag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Tag used for the step title. Defaults to h3.',
    },
  },
}

export default meta

type Story = StoryObj<typeof StepList>

export const Default: Story = {
  args: {
    steps: [
      {
        number: 1,
        title: 'Foundation',
        description: 'Establish core design principles and components',
      },
      {
        number: 2,
        title: 'Expansion',
        description:
          'Add new components and refine existing ones. Add new components and refine existing ones. Add new components and refine existing ones. Add new components and refine existing ones. Add new components and refine existing ones. Add new components and refine existing ones.',
      },
      { number: 3, title: 'Integration', description: 'Implement across products and teams' },
    ],
    color: 'neutral', // Default color
    titleTag: 'h3', // Default title tag
  },
}

export const PrimaryColor: Story = {
  args: {
    steps: [
      {
        number: 1,
        title: 'Foundation',
        description: 'Establish core design principles and components',
      },
      { number: 2, title: 'Expansion', description: 'Add new components and refine existing ones' },
      { number: 3, title: 'Integration', description: 'Implement across products and teams' },
    ],
    color: 'primary',
    titleTag: 'h2',
  },
}

export const AccentColor: Story = {
  args: {
    steps: [
      {
        number: 1,
        title: 'Foundation',
        description: 'Establish core design principles and components',
      },
      { number: 2, title: 'Expansion', description: 'Add new components and refine existing ones' },
      { number: 3, title: 'Integration', description: 'Implement across products and teams' },
    ],
    color: 'accent',
    titleTag: 'h4',
  },
}

export const HighlightColor: Story = {
  args: {
    steps: [
      {
        number: 1,
        title: 'Foundation',
        description: 'Establish core design principles and components',
      },
      { number: 2, title: 'Expansion', description: 'Add new components and refine existing ones' },
      { number: 3, title: 'Integration', description: 'Implement across products and teams' },
    ],
    color: 'highlight',
    titleTag: 'h3',
  },
}
