import { Meta, StoryObj } from '@storybook/react'
import { Testimonial } from './Testimonial'

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

const testimonials = [
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-[var(--btg-color-accent-800)] text-[var(--btg-color-neutral-100)]',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-[var(--btg-color-accent-500)] text-[var(--btg-color-neutral-1000)]',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-[var(--btg-color-accent-300)] text-[var(--btg-color-neutral-1000)]',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-[var(--btg-color-accent-800)] text-[var(--btg-color-neutral-100)]',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-[var(--btg-color-accent-500)] text-[var(--btg-color-neutral-1000)]',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I',
    colors: 'bg-[var(--btg-color-accent-300)] text-[var(--btg-color-neutral-1000)]',
  },
]

type Story = StoryObj<typeof Testimonial>

export const Default: Story = {
  args: {
    title: <h2 className="text-3xl">People Say</h2>,
    testimonials: testimonials,
  },
}
