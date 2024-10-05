import { Meta, StoryObj } from '@storybook/react'
import { ArrowList } from './ArrowList'

const meta: Meta<typeof ArrowList> = {
  title: 'Components/ArrowList',
  component: ArrowList,
  tags: ['deprecated'],
  argTypes: {
    steps: {
      control: 'object',
      description: 'List of steps to display with number, title, and description.',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'accent', 'highlight', 'neutral'],
      description: 'Color theme for the ArrowList',
    },
    titleTag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Tag used for the step title. Defaults to h3.',
    },
  },
}

export default meta

type Story = StoryObj<typeof ArrowList>

export const Default: Story = {
  args: {
    steps: [
      {
        number: 1,
        title: 'Analyze',
        description: 'Assess current design and development practices',
      },
      {
        number: 2,
        title: 'Strategize',
        description: 'Develop tailored design system plan',
      },
      { number: 3, title: 'Implement', description: 'Build and integrate the design system' },
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
        title: 'Analyze',
        description:
          'Assess current design and development practices. Assess current design and development practices. Assess current design and development practices. Assess current design and development practices. Assess current design and development practices. Assess current design and development practices.',
      },
      {
        number: 2,
        title: 'Strategize',
        description: 'Develop tailored design system plan',
      },
      { number: 3, title: 'Implement', description: 'Build and integrate the design system' },
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
        title: 'Analyze',
        description: 'Assess current design and development practices',
      },
      {
        number: 2,
        title: 'Strategize',
        description: 'Develop tailored design system plan',
      },
      { number: 3, title: 'Implement', description: 'Build and integrate the design system' },
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
        title: 'Analyze',
        description: 'Assess current design and development practices',
      },
      {
        number: 2,
        title: 'Strategize',
        description: 'Develop tailored design system plan',
      },
      { number: 3, title: 'Implement', description: 'Build and integrate the design system' },
    ],
    color: 'highlight',
    titleTag: 'h3',
  },
}
