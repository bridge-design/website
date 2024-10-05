import React from 'react'

interface ArrowListProps {
  steps: { number: number; title: string; description: string }[]
  color?: 'primary' | 'accent' | 'highlight' | 'neutral'
  titleTag?: keyof JSX.IntrinsicElements
}

/**
 * @deprecated
 * Use [Stepper](/?path=/docs/components-stepper--docs) component
 */
export const ArrowList: React.FC<ArrowListProps> = ({
  steps,
  color = 'neutral',
  titleTag: TitleTag = 'h3',
}) => {
  // Define the color shades based on the selected color option
  const colorClasses = {
    primary: {
      arrowBg: 'bg-[var(--btg-color-primary-400)]',
      numberText: 'text-[var(--btg-color-neutral-1000)]', // Using --btg-color-neutral-1000 for number text
      titleText: 'text-[var(--btg-color-primary-300)]',
      descriptionText: 'text-[var(--btg-color-primary-100)]',
    },
    accent: {
      arrowBg: 'bg-[var(--btg-color-accent-400)]',
      numberText: 'text-[var(--btg-color-neutral-1000)]', // Using --btg-color-neutral-1000 for number text
      titleText: 'text-[var(--btg-color-accent-300)]',
      descriptionText: 'text-[var(--btg-color-accent-100)]',
    },
    highlight: {
      arrowBg: 'bg-[var(--btg-color-highlight-400)]',
      numberText: 'text-[var(--btg-color-neutral-1000)]', // Using --btg-color-neutral-1000 for number text
      titleText: 'text-[var(--btg-color-highlight-300)]',
      descriptionText: 'text-[var(--btg-color-highlight-100)]',
    },
    neutral: {
      arrowBg: 'bg-[var(--btg-color-neutral-400)]',
      numberText: 'text-[var(--btg-color-neutral-1000)]', // Using --btg-color-neutral-1000 for number text
      titleText: 'text-[var(--btg-color-neutral-300)]',
      descriptionText: 'text-[var(--btg-color-neutral-100)]',
    },
  }

  const selectedColor = colorClasses[color]

  return (
    <div className="relative flex flex-col space-y-0">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className={`relative flex items-start ${index !== 0 ? '-mt-6' : ''}`} // Overlap with negative margin
        >
          {/* Arrow Shape */}
          <div className="relative z-10">
            <div
              className={`font-bold flex h-24 w-24 items-center justify-center pt-2 text-xl ${selectedColor.numberText} ${selectedColor.arrowBg}`}
              style={{
                clipPath: 'polygon(100% 80%, 50% 100%, 0 80%, 0 0, 50% 20%, 100% 0)', // Downward-pointing chevron shape
              }}
            >
              {step.number}
            </div>
          </div>

          {/* Step Content */}
          <div className="mt-4 ml-4">
            {/* Customizable Title Tag */}
            <TitleTag className={`font-bold text-xl ${selectedColor.titleText}`}>
              {step.title}
            </TitleTag>
            <p className={`text-lg ${selectedColor.descriptionText}`}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
