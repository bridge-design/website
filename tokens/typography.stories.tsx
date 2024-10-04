import { Meta, StoryObj } from '@storybook/react'
// import '../tokens/colors.css'
// import '../tokens/gradients.css'

const meta: Meta = {
  title: 'Tokens/Typography',
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

export const FontFamilyExample: Story = {
  render: () => (
    <div className="prose">
      <h1 className="font-9Xl">Heading 1 with 9Xl Font (Inter)</h1>
      <h2 className="font-8Xl">Heading 2 with 8Xl Font (Inter)</h2>
      <h3 className="font-7Xl">Heading 3 with 7Xl Font (Inter)</h3>
      <h4 className="font-6Xl">Heading 4 with 6Xl Font (Inter)</h4>
      <h5 className="font-5Xl">Heading 5 with 5Xl Font (Inter)</h5>
      <h6 className="font-4Xl">Heading 6 with 4Xl Font (Inter)</h6>

      <p className="font-3Xl">Paragraph with 3Xl Font (Inter)</p>
      <p className="font-2Xl">Paragraph with 2Xl Font (Inter)</p>
      <p className="font-xl">Paragraph with xl Font (Roboto)</p>
      <p className="font-lg">Paragraph with lg Font (Roboto)</p>
      <p className="font-base">Paragraph with base Font (Roboto)</p>
      <p className="font-sm">Paragraph with sm Font (Roboto)</p>
      <p className="font-xs">Paragraph with xs Font (Roboto)</p>

      <h3>Medium and Italic Examples:</h3>
      <p className="font-3XlBold">Paragraph with 3XlBold Font (Inter Bold)</p>
      <p className="font-2XlMedium">Paragraph with 2XlMedium Font (Inter Medium)</p>
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
      <h2 className="font-bold mb-4 text-2xl">Brand Colors</h2>

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
      <h2 className="font-bold mb-4 text-2xl">Neutral Colors</h2>

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
      <h2 className="font-bold mb-4 text-2xl">Gradient Texts</h2>

      <div className="btg-text-gradient-green font-bold mb-4 text-6xl">
        Gradient Green to Light Text
      </div>
      <div className="btg-text-gradient-pink font-bold mb-4 text-6xl">
        Gradient Pink to Light Text
      </div>
      <div className="btg-text-gradient-yellow font-bold mb-4 text-6xl">
        Gradient Yellow to Light Text
      </div>
    </div>
  ),
}
