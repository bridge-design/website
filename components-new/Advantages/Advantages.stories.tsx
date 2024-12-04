import { Meta, StoryObj } from '@storybook/react'
import { Advantages } from './Advantages'

const CONTENT = [
  {
    icon: 'UserIdentification',
    title: '5× Faster',
    description:
      'Reusing the same design and development components and patterns from a design system library allows all organizational teams to create, test, and launch products more quickly.',
  },
  {
    icon: 'Rocket',
    title: 'Coherent',
    description:
      "Ensuring that your company's identity and the experience it provides for customers is consistent across the board for all of your digital products.",
  },
  {
    icon: 'TreeView',
    title: 'Scalability',
    description:
      'Maintain and scale your products more easily. The entire product line will be aligned, so each new release will work seamlessly with all previous versions and updates (and vice versa).',
  },
]

const meta: Meta<typeof Advantages> = {
  title: 'Components/Advantages',
  component: Advantages,
  tags: ['beta'],
  argTypes: {
    colorSchema: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Defines the color scheme of the component',
    },
    content: {
      control: false,
      description: 'Array of content items with icon, title, and description',
    },
  },
}

export default meta

type Story = StoryObj<typeof Advantages>

export const Dark: Story = {
  args: {
    colorSchema: 'dark',
    content: CONTENT,
  },
}

export const Light: Story = {
  args: {
    colorSchema: 'light',
    content: CONTENT,
  },
}
