import { Meta, StoryObj } from '@storybook/react'
import { Outro } from './Outro'

const meta: Meta<typeof Outro> = {
  title: 'Components/Outro',
  component: Outro,
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color for the Outro section',
      defaultValue: 'var(--btg-hero-background-teal)',
    },
    children: {
      control: false,
      description: 'Content to display inside the Outro component',
    },
  },
}

export default meta

type Story = StoryObj<typeof Outro>

export const Default: Story = {
  args: {
    backgroundColor: 'var(--btg-hero-background-teal)',
    children: (
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold">Thank you for visiting!</h2>
        <p className="text-lg">
          Want to learn more? Check out our{' '}
          <a href="/contact" className="text-[var(--btg-color-link)] hover:underline">
            contact page
          </a>
          .
        </p>
      </div>
    ),
  },
}

export const CustomContent: Story = {
  args: {
    backgroundColor: 'var(--btg-hero-background-pink)',
    children: (
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-bold">Let's Stay in Touch</h2>
        <p className="mb-4 text-lg">
          We’re excited to collaborate with you. Get in touch with us today!
        </p>
        <a
          href="/contact"
          className="rounded bg-[var(--btg-color-link)] px-4 py-2 text-white hover:bg-opacity-80"
        >
          Contact Us
        </a>
      </div>
    ),
  },
}
