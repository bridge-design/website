import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { RotatingText } from './RotatingText'

const meta: Meta<typeof RotatingText> = {
  title: 'Components/RotatingText',
  component: RotatingText,
  tags: ['beta'],
  argTypes: {
    texts: {
      control: 'object',
      description: 'Array of strings to cycle through',
    },
    duration: {
      control: { type: 'number', min: 500, max: 10000, step: 100 },
      description: 'Duration in milliseconds to show each text',
    },
    transitionDuration: {
      control: { type: 'number', min: 100, max: 1000, step: 50 },
      description: 'Duration in milliseconds for the transition animation',
    },
    animation: {
      control: 'radio',
      options: ['fade', 'slide'],
      description: 'Animation type: fade or slide',
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Whether to pause animation on hover',
    },
    autoStart: {
      control: 'boolean',
      description: 'Whether to start animation immediately',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta

type Story = StoryObj<typeof RotatingText>

export const Default: Story = {
  args: {
    texts: ['design systems', 'frontend development', 'UI engineering', 'team collaboration'],
    duration: 2000,
    transitionDuration: 300,
    animation: 'fade',
    autoStart: true,
    pauseOnHover: false,
  },
  render: (args) => (
    <div className="p-4">
      <p className="text-lg">
        We specialize in <RotatingText {...args} className="font-semibold text-blue-600" />.
      </p>
    </div>
  ),
}

export const SlideAnimation: Story = {
  args: {
    texts: ['within your Budget', 'on your Schedule', 'ready for your Big Day'],
    duration: 3000,
    transitionDuration: 300,
    animation: 'slide',
    autoStart: true,
    pauseOnHover: false,
  },
  render: (args) => (
    <div className="p-4">
      <p className="text-lg">
        We deliver projects <RotatingText {...args} className="font-semibold text-purple-600" />.
      </p>
    </div>
  ),
}

export const FastTransition: Story = {
  args: {
    texts: ['React', 'Vue', 'Angular', 'Svelte'],
    duration: 1000,
    transitionDuration: 150,
    animation: 'fade',
    autoStart: true,
    pauseOnHover: false,
  },
  render: (args) => (
    <div className="p-4">
      <p className="text-lg">
        Build with <RotatingText {...args} className="font-bold text-green-600" /> components.
      </p>
    </div>
  ),
}

export const SlowTransition: Story = {
  args: {
    texts: ['beautiful', 'scalable', 'maintainable', 'accessible'],
    duration: 3000,
    transitionDuration: 500,
    animation: 'fade',
    autoStart: true,
    pauseOnHover: false,
  },
  render: (args) => (
    <div className="p-4">
      <p className="text-lg">
        Create <RotatingText {...args} className="font-semibold text-purple-600" /> interfaces.
      </p>
    </div>
  ),
}

export const PauseOnHover: Story = {
  args: {
    texts: ['hover me', 'to pause', 'the animation', 'try it out!'],
    duration: 1500,
    transitionDuration: 300,
    animation: 'slide',
    autoStart: true,
    pauseOnHover: true,
  },
  render: (args) => (
    <div className="p-4">
      <p className="text-lg">
        <RotatingText {...args} className="font-semibold text-red-600 cursor-pointer" /> - Hover to pause!
      </p>
    </div>
  ),
}

export const SingleText: Story = {
  args: {
    texts: ['static text'],
    duration: 2000,
    transitionDuration: 300,
    autoStart: true,
  },
  render: (args) => (
    <div className="p-4">
      <p className="text-lg">
        This is <RotatingText {...args} className="font-semibold" /> (no animation with single text).
      </p>
    </div>
  ),
}

export const CustomStyling: Story = {
  args: {
    texts: ['🎨 creative', '⚡ fast', '🚀 innovative', '💎 premium'],
    duration: 2000,
    transitionDuration: 400,
    animation: 'slide',
    autoStart: true,
    pauseOnHover: true,
  },
  render: (args) => (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold">
        We deliver <RotatingText {...args} className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" /> solutions.
      </h2>
    </div>
  ),
}

export const InlineUsage: Story = {
  args: {
    texts: ['designers', 'developers', 'product managers', 'stakeholders'],
    duration: 2500,
    transitionDuration: 300,
    animation: 'fade',
    autoStart: true,
    pauseOnHover: false,
  },
  render: (args) => (
    <div className="p-4 max-w-2xl">
      <p className="text-base leading-relaxed">
        Our workshops are designed for <RotatingText {...args} className="font-medium text-blue-600" /> who want to 
        improve their design system skills. Whether you're just starting out or looking to level up your expertise, 
        we have something for everyone in the design and development community.
      </p>
    </div>
  ),
}
