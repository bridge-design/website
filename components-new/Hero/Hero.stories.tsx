import { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'
import { Button } from '../Button/Button'
import { Image } from '../Image/Image'

const heroImage = require('./hero-image.jpg')

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    buttons: { control: 'object' },
    backgroundColor: {
      control: 'select',
      options: [
        'var(--btg-hero-background-teal)',
        'var(--btg-hero-background-pink)',
        'var(--btg-hero-background-blue)',
        'var(--btg-hero-background-sand)',
      ],
      defaultValue: 'var(--btg-hero-background-teal)',
    },
  },
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    title: 'Welcome to Our Platform',
    description: 'Explore our services and products designed to improve your business.',
    buttons: (
      <>
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
    visual: <Image src={heroImage} alt="Hero Image" />,
  },
}

export const Pink: Story = {
  args: {
    ...Default.args,
    backgroundColor: 'var(--btg-hero-background-pink)',
  },
}

export const Blue: Story = {
  args: {
    ...Default.args,
    backgroundColor: 'var(--btg-hero-background-blue)',
  },
}

export const Sand: Story = {
  args: {
    ...Default.args,
    backgroundColor: 'var(--btg-hero-background-sand)',
  },
}
