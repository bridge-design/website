import { Meta, StoryObj } from '@storybook/react'
// import '../tokens/colors.css'
// import '../tokens/gradients.css'

const meta: Meta = {
  title: 'Tokens/Typography',
}

export default meta

type Story = StoryObj

export const BrandColors: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Brand Colors</h2>

      <div className="text-5xl font-bold mb-4 text-[var(--btg-color-brand-dark)]">
        Brand Dark Text
      </div>
      <div className="text-5xl font-bold mb-4 text-[var(--btg-color-brand-green)]">
        Brand Green Text
      </div>
      <div className="text-5xl font-bold mb-4 text-[var(--btg-color-brand-pink)]">
        Brand Pink Text
      </div>
      <div className="text-5xl font-bold mb-4 text-[var(--btg-color-brand-yellow)]">
        Brand Yellow Text
      </div>
      <div className="text-5xl font-bold mb-4 text-[var(--btg-color-brand-light)]">
        Brand Light Text
      </div>
    </div>
  ),
}

export const NeutralColors: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Neutral Colors</h2>

      <div className="text-5xl font-bold mb-4 text-[var(--btg-color-neutral-100)]">
        Neutral 100 Text
      </div>
      <div className="text-5xl font-bold mb-4 text-[var(--btg-color-neutral-600)]">
        Neutral 600 Text
      </div>
      <div className="text-5xl font-bold mb-4 text-[var(--btg-color-neutral-1000)]">
        Neutral 1000 Text
      </div>
    </div>
  ),
}

export const GradientTexts: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gradient Texts</h2>

      <div className="text-gradient-green text-6xl font-bold mb-4">
        Gradient Green to Light Text
      </div>
      <div className="text-gradient-pink text-6xl font-bold mb-4">Gradient Pink to Light Text</div>
      <div className="text-gradient-yellow text-6xl font-bold mb-4">
        Gradient Yellow to Light Text
      </div>
    </div>
  ),
}
