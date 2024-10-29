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
    colors: 'bg-primary-100 text-light-on-background-900',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-primary-500 text-light-on-background-100',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-light-background-50 text-light-on-background-100',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-primary-100 text-light-on-background-900',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I found her very intellectual and hardworking individual. She has sounds technical background and deep understanding of web applications development. She leans into solving a problem not just defining it well. I would gladly recommend Varya to anyone who is looking for a Design System expert.',
    colors: 'bg-primary-500 text-light-on-background-100',
  },
  {
    name: 'Junaid Rasheed',
    avatar: '/sampleImages/rasheed_avatar.png',
    text: 'Varya is an expert in Design System domain. I have had chance to work with her in past and I',
    colors: 'bg-light-background-50 text-light-on-background-50',
  },
]

type Story = StoryObj<typeof Testimonial>

export const Default: Story = {
  args: {
    title: (
      <h2 className="font-bold text-3xl text-[var(--btg-color-primary-500)]">
        What Our Clients Say
      </h2>
    ),
    testimonials: testimonials,
  },
}

export const CustomColors: Story = {
  args: {
    title: (
      <h2 className="font-bold text-3xl text-[var(--btg-color-accent-500)]">Client Testimonials</h2>
    ),
    testimonials: [
      {
        name: 'Alice Johnson',
        text: 'Wonderful experience, truly professional service.',
        avatar: '/path-to-avatar/alicejohnson.jpg',
        colors: 'bg-[var(--btg-color-accent-50)] text-[var(--btg-color-accent-500)]',
      },
      {
        name: 'Bob Martin',
        text: 'Top-notch from start to finish!',
        avatar: '/path-to-avatar/bobmartin.jpg',
        colors: 'bg-[var(--btg-color-grey-50)] text-[var(--btg-color-grey-500)]',
      },
    ],
  },
}

export const WithTitleOnly: Story = {
  args: {
    title: <h2 className="font-bold text-3xl text-[var(--btg-color-primary-700)]">Feedback</h2>,
    testimonials: [],
  },
}
