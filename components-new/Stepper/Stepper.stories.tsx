import { Meta, StoryObj } from '@storybook/react'
import { Stepper, StepperProps, stepperVariants, stepperColors, stepperTitleTags } from './Stepper'

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
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
    titleTag: {
      control: { type: 'select' },
      options: stepperTitleTags,
    },
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
      description: 'Develop tailored design system plan',
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
