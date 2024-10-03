import React from 'react'

interface StepListProps {
  steps: { number: number; title: string; description: string }[]
  color?: 'primary' | 'accent' | 'highlight' | 'neutral'
  titleTag?: keyof JSX.IntrinsicElements
}

export const StepList: React.FC<StepListProps> = ({
  steps,
  color = 'neutral',
  titleTag: TitleTag = 'h3',
}) => {
  // Define the color shades based on the selected color option
  const colors = {
    primary: {
      background: 'bg-[var(--btg-color-primary-400)]',
      number: 'text-[var(--btg-color-neutral-1000)]',
      title: 'text-[var(--btg-color-primary-300)]',
      description: 'text-[var(--btg-color-primary-100)]',
    },
    accent: {
      background: 'bg-[var(--btg-color-accent-400)]',
      number: 'text-[var(--btg-color-neutral-1000)]',
      title: 'text-[var(--btg-color-accent-300)]',
      description: 'text-[var(--btg-color-accent-100)]',
    },
    highlight: {
      background: 'bg-[var(--btg-color-highlight-400)]',
      number: 'text-[var(--btg-color-neutral-1000)]',
      title: 'text-[var(--btg-color-highlight-300)]',
      description: 'text-[var(--btg-color-highlight-100)]',
    },
    neutral: {
      background: 'bg-[var(--btg-color-neutral-400)]',
      number: 'text-[var(--btg-color-neutral-1000)]',
      title: 'text-[var(--btg-color-neutral-300)]',
      description: 'text-[var(--btg-color-neutral-100)]',
    },
  }

  const selectedColor = colors[color]

  return (
    <div className="flex flex-col space-y-8">
      {steps.map((step) => (
        <div key={step.number} className="flex items-start">
          {/* Step Number */}
          <div
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${selectedColor.background} ${selectedColor.number} font-bold text-xl`}
          >
            {step.number}
          </div>

          {/* Divider Line */}
          <div className="mx-4 mt-6 h-px w-8 flex-shrink-0 bg-[var(--btg-color-neutral-400)]"></div>

          {/* Step Content */}
          <div>
            {/* Customizable Title Tag */}
            <TitleTag className={`font-bold text-xl ${selectedColor.title}`}>{step.title}</TitleTag>
            <p className={`text-lg ${selectedColor.description}`}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
