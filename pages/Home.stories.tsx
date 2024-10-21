import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Pages/Home',
  component: () => null,
  tags: ['autodocs', '!dev'],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div>
      <h1 className="font-bold text-2xl">Home</h1>
      <p className="mt-2">Welcome to the home page.</p>
    </div>
  ),
}
