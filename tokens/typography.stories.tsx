import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
// import '../tokens/colors.css'
// import '../tokens/gradients.css'

const meta: Meta = {
  title: 'Tokens/Typography',
  component: React.Fragment,
  tags: ['!autodocs'],
  parameters: {
    showPanel: false,
  },
}

export default meta

type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="prose">
      <h1>Heading 1 (h1)</h1>
      <p>
        This is a paragraph following an <strong>h1</strong> heading.
      </p>

      <h2>Heading 2 (h2)</h2>
      <p>
        This is a paragraph following an <strong>h2</strong> heading.
      </p>

      <h3>Heading 3 (h3)</h3>
      <p>
        This is a paragraph following an <strong>h3</strong> heading. You can also include{' '}
        <em>italic</em> text, or <strong>bold</strong> text.
      </p>

      <h4>Heading 4 (h4)</h4>
      <p>
        This is a paragraph following an <strong>h4</strong> heading.
      </p>

      <h5>Heading 5 (h5)</h5>
      <p>
        This is a paragraph following an <strong>h5</strong> heading.
      </p>

      <h6>Heading 6 (h6)</h6>
      <p>
        This is a paragraph following an <strong>h6</strong> heading.
      </p>

      <blockquote>
        This is a blockquote. Use this to highlight quotations or significant text.
      </blockquote>

      <p>
        Here is some more text, and you can <strong>bold</strong> or <em>italicize</em> words. There
        are also inline elements like <a href="#">links</a>.
      </p>

      <ul>
        <li>This is an unordered list item</li>
        <li>Another unordered list item</li>
      </ul>

      <ol>
        <li>This is an ordered list item</li>
        <li>Another ordered list item</li>
      </ol>

      <pre>
        <code>{`// This is some preformatted code
const hello = "world";
console.log(hello);`}</code>
      </pre>
    </div>
  ),
}

export const BrandColors: Story = {
  render: () => (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Brand Colors</h2>

      <div className="font-bold mb-4 text-5xl text-[var(--btg-color-brand-dark)]">
        Brand Dark Text
      </div>
      <div className="font-bold mb-4 text-5xl text-[var(--btg-color-brand-green)]">
        Brand Green Text
      </div>
      <div className="font-bold mb-4 text-5xl text-[var(--btg-color-brand-pink)]">
        Brand Pink Text
      </div>
      <div className="font-bold mb-4 text-5xl text-[var(--btg-color-brand-yellow)]">
        Brand Yellow Text
      </div>
      <div className="font-bold mb-4 text-5xl text-[var(--btg-color-brand-light)]">
        Brand Light Text
      </div>
    </div>
  ),
}

export const NeutralColors: Story = {
  render: () => (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Neutral Colors</h2>

      <div className="font-bold mb-4 text-5xl text-[var(--btg-color-neutral-100)]">
        Neutral 100 Text
      </div>
      <div className="font-bold mb-4 text-5xl text-[var(--btg-color-neutral-600)]">
        Neutral 600 Text
      </div>
      <div className="font-bold mb-4 text-5xl text-[var(--btg-color-neutral-1000)]">
        Neutral 1000 Text
      </div>
    </div>
  ),
}

export const GradientTexts: Story = {
  render: () => (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Gradient Texts</h2>

      <div className="mb-4 text-6xl font-bold btg-text-gradient-green">
        Gradient Green to Light Text
      </div>
      <div className="mb-4 text-6xl font-bold btg-text-gradient-pink">
        Gradient Pink to Light Text
      </div>
      <div className="mb-4 text-6xl font-bold btg-text-gradient-yellow">
        Gradient Yellow to Light Text
      </div>
    </div>
  ),
}
