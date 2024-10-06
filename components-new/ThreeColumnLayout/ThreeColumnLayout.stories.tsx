import { Meta, StoryObj } from '@storybook/react'
import { ThreeColumnLayout } from './ThreeColumnLayout'

const meta: Meta<typeof ThreeColumnLayout> = {
  title: 'Components/ThreeColumnLayout',
  component: ThreeColumnLayout,
  tags: ['!autodocs', '!dev'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'accent', 'highlight', 'neutral'],
      description: 'Color theme for the h* tags in the layout',
    },
  },
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
  args: {
    color: 'neutral', // Default color
  },
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
  args: {
    color: 'neutral', // Default color
  },
}

export const PrimaryColor: Story = {
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
  args: {
    color: 'primary',
  },
}

export const AccentColor: Story = {
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
  args: {
    color: 'accent',
  },
}

export const HighlightColor: Story = {
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
  args: {
    color: 'highlight',
  },
}
