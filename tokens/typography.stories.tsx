import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

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

export const ShoutOuts: Story = {
  render: () => (
    <>
      <h1 className="text-9xl font-black">Shout Out to the World</h1>
      <h1 className="text-8xl font-black">Shout Out to the World</h1>
      <h1 className="text-7xl font-black">Shout Out to the World</h1>
      <h1 className="text-6xl font-black">Shout Out to the World</h1>
      <h2 className="text-9xl font-bold">Shout Out to the World</h2>
      <h2 className="text-8xl font-bold">Shout Out to the World</h2>
      <h2 className="text-7xl font-bold">Shout Out to the World</h2>
      <h2 className="text-6xl font-bold">Shout Out to the World</h2>
      <h3 className="text-9xl">Shout Out to the World</h3>
      <h3 className="text-8xl">Shout Out to the World</h3>
      <h3 className="text-7xl">Shout Out to the World</h3>
      <h3 className="text-6xl">Shout Out to the World</h3>
    </>
  ),
}

export const FontFamilyExample: Story = {
  render: () => (
    <div className="prose">
      <h1 className="font-9xl">Heading 1 with 9xl Font (Inter)</h1>
      <h2 className="font-8xl">Heading 2 with 8xl Font (Inter)</h2>
      <h3 className="font-7xl">Heading 3 with 7xl Font (Inter)</h3>
      <h4 className="font-6xl">Heading 4 with 6xl Font (Inter)</h4>
      <h5 className="font-5xl">Heading 5 with 5xl Font (Inter)</h5>
      <h6 className="font-4xl">Heading 6 with 4xl Font (Inter)</h6>

      <p className="font-3xl">Paragraph with 3xl Font (Inter)</p>
      <p className="font-2xl">Paragraph with 2xl Font (Inter)</p>
      <p className="font-xl">Paragraph with xl Font (Roboto)</p>
      <p className="font-lg">Paragraph with lg Font (Roboto)</p>
      <p className="font-base">Paragraph with base Font (Roboto)</p>
      <p className="font-sm">Paragraph with sm Font (Roboto)</p>
      <p className="font-xs">Paragraph with xs Font (Roboto)</p>

      <h3>Medium and Italic Examples:</h3>
      <p className="font-3xlBold">Paragraph with 3xlBold Font (Inter Bold)</p>
      <p className="font-2xlMedium">Paragraph with 2xlMedium Font (Inter Medium)</p>
      <p className="font-xlMedium">Paragraph with xlMedium Font (Roboto Medium)</p>
      <p className="font-lgItalic italic">Paragraph with lgItalic Font (Roboto Italic)</p>
      <p className="font-lgMediumItalic italic">
        Paragraph with lgMediumItalic Font (Roboto Medium Italic)
      </p>
    </div>
  ),
}

export const BrandColors: Story = {
  render: () => (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Brand Colors</h2>

      <div className="mb-4 text-5xl font-bold text-[var(--btg-color-brand-dark)]">
        Brand Dark Text
      </div>
      <div className="mb-4 text-5xl font-bold text-[var(--btg-color-brand-green)]">
        Brand Green Text
      </div>
      <div className="mb-4 text-5xl font-bold text-[var(--btg-color-brand-pink)]">
        Brand Pink Text
      </div>
      <div className="mb-4 text-5xl font-bold text-[var(--btg-color-brand-yellow)]">
        Brand Yellow Text
      </div>
      <div className="mb-4 text-5xl font-bold text-[var(--btg-color-brand-light)]">
        Brand Light Text
      </div>
    </div>
  ),
}

export const NeutralColors: Story = {
  render: () => (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Neutral Colors</h2>

      <div className="mb-4 text-5xl font-bold text-[var(--btg-color-neutral-100)]">
        Neutral 100 Text
      </div>
      <div className="mb-4 text-5xl font-bold text-[var(--btg-color-neutral-600)]">
        Neutral 600 Text
      </div>
      <div className="mb-4 text-5xl font-bold text-[var(--btg-color-neutral-1000)]">
        Neutral 1000 Text
      </div>
    </div>
  ),
}

export const GradientTexts: Story = {
  render: () => (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Gradient Texts</h2>

      <div className="btg-text-gradient-primary-accent mb-4 text-6xl font-bold">
        Gradient Primary to Accent Text
      </div>
      <div className="btg-text-gradient-accent-highlight mb-4 text-6xl font-bold">
        Gradient Accent to Highlight Text
      </div>
      <div className="btg-text-gradient-neutral-primary mb-4 text-6xl font-bold">
        Gradient Neutral to Primary Text
      </div>
    </div>
  ),
}
