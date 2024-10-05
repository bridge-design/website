import React from 'react'

export const stepperVariants = ['arrow', 'circle'] as const
export const stepperColors = ['primary', 'accent', 'highlight', 'neutral'] as const
export const stepperTitleTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const

type Step = { title: string; description: string }
export interface StepperProps {
  /** An array of steps, which include `title` and `description` */
  steps: Step[]
  /** Shape variant */
  variant?: (typeof stepperVariants)[number]
  /** Color theme */
  color?: (typeof stepperColors)[number]
  /** HTML tag used for the title */
  titleTag?: (typeof stepperTitleTags)[number]
}

const colorClasses = {
  primary: {
    shapeBg: 'bg-[var(--btg-color-primary-400)]',
    numberText: 'text-[var(--btg-color-neutral-1000)]', // Using --btg-color-neutral-1000 for number text
    titleText: 'text-[var(--btg-color-primary-300)]',
    descriptionText: 'text-[var(--btg-color-primary-100)]',
  },
  accent: {
    shapeBg: 'bg-[var(--btg-color-accent-400)]',
    numberText: 'text-[var(--btg-color-neutral-1000)]', // Using --btg-color-neutral-1000 for number text
    titleText: 'text-[var(--btg-color-accent-300)]',
    descriptionText: 'text-[var(--btg-color-accent-100)]',
  },
  highlight: {
    shapeBg: 'bg-[var(--btg-color-highlight-400)]',
    numberText: 'text-[var(--btg-color-neutral-1000)]', // Using --btg-color-neutral-1000 for number text
    titleText: 'text-[var(--btg-color-highlight-300)]',
    descriptionText: 'text-[var(--btg-color-highlight-100)]',
  },
  neutral: {
    shapeBg: 'bg-[var(--btg-color-neutral-400)]',
    numberText: 'text-[var(--btg-color-neutral-1000)]', // Using --btg-color-neutral-1000 for number text
    titleText: 'text-[var(--btg-color-neutral-300)]',
    descriptionText: 'text-[var(--btg-color-neutral-100)]',
  },
}

const circleClasses = `z-10 h-12 w-12 flex-shrink-0 rounded-full font-bold text-xl`
const arrowClasses = `h-24 w-24 pt-2`
export const Stepper: React.FC<StepperProps> = ({
  steps,
  color = 'neutral',
  variant = 'arrow',
  titleTag: TitleTag = 'h3',
}) => {
  // Define the color shades based on the selected color option

  const selectedColor = colorClasses[color]

  return (
    <div className="relative flex flex-col gap-2 space-y-0">
      {steps.map((step, index) => (
        <div
          key={`${step.title}-${index}`}
          className={`relative flex items-start ${variant === 'arrow' ? 'pt-2' : ''}`} //visually align with arrow variant
        >
          {/* Arrow Shape */}
          <div className="relative z-10">
            <div
              className={`arrow font-bold flex items-center justify-center text-xl ${selectedColor.numberText} ${selectedColor.shapeBg} ${variant === 'circle' ? circleClasses : arrowClasses}`}
              style={
                variant === 'arrow'
                  ? {
                      clipPath: 'polygon(100% 80%, 50% 100%, 0 80%, 0 0, 50% 20%, 100% 0)', // Downward-pointing chevron shape
                    }
                  : undefined
              }
            >
              {index + 1}
            </div>
          </div>

          {/* Step Content */}
          <div className="ml-4">
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
