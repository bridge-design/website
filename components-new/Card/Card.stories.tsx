import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Cards/Card',
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    href: '/',
    children: (
      <p>
        Content <a href="/">Link</a>
      </p>
    ),
  },
}
