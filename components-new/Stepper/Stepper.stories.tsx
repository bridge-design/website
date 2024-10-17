import { Meta, StoryObj } from '@storybook/react'
import { Stepper, StepperProps, stepperVariants, stepperColors, stepperTitleTags } from './Stepper'

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['draft'],
  argTypes: {
    steps: {
      control: 'object',
    },
    color: {
      control: { type: 'select' },
      options: stepperColors,
    },
    variant: {
      control: { type: 'select' },
      options: stepperVariants,
    },
    showLines: {
      control: 'boolean',
    },
    titleTag: {
      control: { type: 'select' },
      options: stepperTitleTags,
    },
  },
  parameters: {
    storyGridColumns: 1,
  },
}

export default meta

type Story = StoryObj<typeof Stepper>

const defaultArgs: StepperProps = {
  steps: [
    {
      title: 'Analyze',
      description: 'Assess current design and development practices',
    },
    {
      title: 'Strategize',
      description:
        'Develop tailored design system plan. Be sure to include all stakeholders! That means you, too. Usually, the plan includes a timeline, budget, and resources.',
    },
    { title: 'Implement', description: 'Build and integrate the design system' },
  ],
  color: 'neutral', // Default color
  titleTag: 'h3', // Default title tag
  variant: 'arrow',
}

export const Default: Story = {
  args: defaultArgs,
}

export const PrimaryColor: Story = {
  args: {
    ...defaultArgs,
    color: 'primary',
  },
}

export const AccentColor: Story = {
  args: {
    ...defaultArgs,
    color: 'accent',
    titleTag: 'h4',
  },
}

export const HighlightColor: Story = {
  args: {
    ...defaultArgs,
    color: 'highlight',
  },
}

export const CircleShape = {
  args: {
    ...defaultArgs,
    variant: 'circle',
  },
}

export const CircleAndLines = {
  args: {
    ...defaultArgs,
    variant: 'circle',
    showLines: true,
  },
}
