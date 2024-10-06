import { Meta, StoryObj } from '@storybook/react'
import { Hero } from './Hero'
import { Button } from '../Button/Button'
import { Image } from '../Image/Image'

const heroImage = require('./hero-image.jpg')

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['!autodocs', '!dev'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    buttons: { control: 'object' },
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
