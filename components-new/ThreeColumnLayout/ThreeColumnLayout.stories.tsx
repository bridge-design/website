import { Meta, StoryObj } from '@storybook/react'
import { ThreeColumnLayout } from './ThreeColumnLayout'

const meta: Meta<typeof ThreeColumnLayout> = {
  title: 'Layouts/ThreeColumnLayout',
  component: ThreeColumnLayout,
  tags: ['beta'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof ThreeColumnLayout>

export const Default: Story = {
  render: (args) => (
    <ThreeColumnLayout color={args.color}>
      <ThreeColumnLayout.Column>
        <p>This is the content for column 1.</p>
      </ThreeColumnLayout.Column>
      <ThreeColumnLayout.Column>
        <p>This is the content for column 2.</p>
      </ThreeColumnLayout.Column>
      <ThreeColumnLayout.Column>
        <p>This is the content for column 3.</p>
      </ThreeColumnLayout.Column>
    </ThreeColumnLayout>
  ),
  args: {},
}

export const WithProse: Story = {
  render: (args) => (
    <ThreeColumnLayout color={args.color} className="prose">
      <ThreeColumnLayout.Column>
        <h3>Column 1</h3>
        <p>This is the content for column 1.</p>
      </ThreeColumnLayout.Column>
      <ThreeColumnLayout.Column>
        <h3>Column 2</h3>
        <p>This is the content for column 2.</p>
      </ThreeColumnLayout.Column>
      <ThreeColumnLayout.Column>
        <h3>Column 3</h3>
        <p>This is the content for column 3.</p>
      </ThreeColumnLayout.Column>
    </ThreeColumnLayout>
  ),
  args: {},
}
