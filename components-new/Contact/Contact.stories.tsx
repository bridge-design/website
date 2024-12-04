import { Meta, StoryObj } from '@storybook/react'
import { Contact } from './Contact'

const meta: Meta<typeof Contact> = {
  title: 'Components/Contact',
  tags: ['beta'],
  component: Contact,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Contact>

/**
 * Default story for the Contact component.
 */
export const Default: Story = {}
