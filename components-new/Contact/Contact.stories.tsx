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

/**
 * Contact with custom header
 */
export const WithCustomHeader: Story = {
  args: {
    header: <h2 className="mb-8 text-center text-2xl font-bold">Schedule a consultation</h2>,
  },
}

/**
 * Contact with custom footer
 */
export const WithCustomFooter: Story = {
  args: {
    footer: (
      <div className="mt-8 text-center">
        <p className="mb-4 text-xl">Prefer email?</p>
        <a href="mailto:contact@example.com" className="text-blue-600 underline">
          contact@example.com
        </a>
      </div>
    ),
  },
}

/**
 * Contact with both custom header and footer
 */
export const WithCustomHeaderAndFooter: Story = {
  args: {
    header: <h2 className="mb-8 text-center text-2xl font-bold">Book your session now</h2>,
    footer: (
      <div className="mt-8 text-center">
        <p className="mb-4 text-lg">Need immediate assistance?</p>
        <p className="text-lg">Call us at +1 (555) 123-4567</p>
      </div>
    ),
  },
}
