import { Meta, StoryObj } from '@storybook/react'
import { Testimonial } from './Testimonial'

import { TESTIMONIALS } from '../../data/testimonials'

const meta: Meta<typeof Testimonial> = {
  title: 'Components/Testimonial',
  component: Testimonial,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title displayed above the testimonials.',
    },
    testimonials: {
      control: 'object',
      description: 'Array of testimonial items, each with name, text, avatar, and colors.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Testimonial>

export const Default: Story = {
  args: {
    title: <h2 className="text-3xl">People Say</h2>,
    testimonials: TESTIMONIALS,
  },
}
