import React from 'react'

interface StepListProps {
  steps: { number: number; title: string; description: string }[]
  color?: 'primary' | 'accent' | 'highlight' | 'neutral'
  titleTag?: keyof JSX.IntrinsicElements
  showLines?: boolean
}

export const StepList: React.FC<StepListProps> = ({
  steps,
  color = 'neutral',
  titleTag: TitleTag = 'h3',
  showLines = true,
}) => {
  // Define the color shades based on the selected color option
  const colorClasses = {
    primary: {
      numberBg: 'bg-[var(--btg-color-primary-400)]',
      numberText: 'text-[var(--btg-color-neutral-1000)]',
      lineColor: 'bg-[var(--btg-color-primary-400)]',
      titleText: 'text-[var(--btg-color-primary-300)]',
      descriptionText: 'text-[var(--btg-color-primary-100)]',
    },
    accent: {
      numberBg: 'bg-[var(--btg-color-accent-400)]',
      numberText: 'text-[var(--btg-color-neutral-1000)]',
      lineColor: 'bg-[var(--btg-color-accent-400)]',
      titleText: 'text-[var(--btg-color-accent-300)]',
      descriptionText: 'text-[var(--btg-color-accent-100)]',
    },
    highlight: {
      numberBg: 'bg-[var(--btg-color-highlight-400)]',
      numberText: 'text-[var(--btg-color-neutral-1000)]',
      lineColor: 'bg-[var(--btg-color-highlight-400)]',
      titleText: 'text-[var(--btg-color-highlight-300)]',
      descriptionText: 'text-[var(--btg-color-highlight-100)]',
    },
    neutral: {
      numberBg: 'bg-[var(--btg-color-neutral-400)]',
      numberText: 'text-[var(--btg-color-neutral-1000)]',
      lineColor: 'bg-[var(--btg-color-neutral-400)]',
      titleText: 'text-[var(--btg-color-neutral-300)]',
      descriptionText: 'text-[var(--btg-color-neutral-100)]',
    },
  }

  const selectedColor = colorClasses[color]

  return (
    <div className="relative flex flex-col space-y-8 pb-4">
      {/* Vertical Line */}
      {showLines && (
        <div className={`absolute left-6 top-0 z-0 h-full w-px ${selectedColor.lineColor}`}></div>
      )}

      {steps.map((step) => (
        <div key={step.number} className="flex items-start">
          {/* Step Number */}
          <div
            className={`z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${selectedColor.numberBg} ${selectedColor.numberText} font-bold text-xl`}
          >
            {step.number}
          </div>

          {/* Divider Line */}
          {showLines && (
            <div className={`mt-6 h-px w-8 flex-shrink-0 ${selectedColor.lineColor}`}></div>
          )}

          {/* Step Content */}
          <div className="pl-4">
            {/* Customizable Title Tag */}
            <TitleTag
              className={`font-bold ${showLines && 'mt-2'} text-xl ${selectedColor.titleText}`}
            >
              {step.title}
            </TitleTag>
            <p className={`text-lg ${selectedColor.descriptionText}`}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
