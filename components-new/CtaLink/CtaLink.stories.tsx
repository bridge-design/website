import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { CtaLink } from './CtaLink'

const meta: Meta<typeof CtaLink> = {
  title: 'Components/CtaLink',
  component: CtaLink,
  tags: ['beta'],
  argTypes: {
    to: { control: 'text', description: 'Link destination URL' },
    arrow: {
      control: 'radio',
      options: ['start', 'end', 'no'],
      description: 'Arrow position relative to link text',
    },
    underline: { control: 'boolean', description: 'Underline the link text' },
  },
}

export default meta

type Story = StoryObj<typeof CtaLink>

export const Default: Story = {
  args: {
    to: '#',
    children: 'Default CTA Link',
    arrow: 'no',
    underline: false,
  },
}

export const WithUnderline: Story = {
  args: {
    to: '#',
    children: 'CTA Link with Underline',
    underline: true,
  },
}

export const WithStartArrow: Story = {
  args: {
    to: '#',
    children: 'CTA Link with Start Arrow',
    arrow: 'start',
  },
}

export const WithEndArrow: Story = {
  args: {
    to: '#',
    children: 'CTA Link with End Arrow',
    arrow: 'end',
  },
}
