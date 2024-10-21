import { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    siteTitle: {
      control: 'text',
      description: 'The title of the site displayed in the footer.',
    },
    className: {
      control: 'text',
      description: 'Additional classes for styling the footer.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    siteTitle: 'Bridge the Gap',
  },
}

export const CustomStyle: Story = {
  args: {
    siteTitle: 'Bridge the Gap',
    className: 'bg-[var(--btg-color-grey-100)] text-white',
  },
}
