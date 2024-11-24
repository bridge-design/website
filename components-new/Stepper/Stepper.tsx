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
  /** Toggle to show or hide lines in the list */
  showLines?: boolean
  /** HTML tag used for the title */
  titleTag?: (typeof stepperTitleTags)[number]
}

const colorClasses = {
  primary: {
    shapeBg: 'bg-[var(--btg-color-primary-400)]',
    numberText: 'text-[var(--btg-color-neutral-1000)]',
    lineColor: 'bg-[var(--btg-color-primary-400)]',
    titleText: 'text-[var(--btg-color-primary-300)]',
    descriptionText: 'text-[var(--btg-color-primary-100)]',
  },
  accent: {
    shapeBg: 'bg-[var(--btg-color-accent-400)]',
    numberText: 'text-[var(--btg-color-neutral-1000)]',
    lineColor: 'bg-[var(--btg-color-accent-400)]',
    titleText: 'text-[var(--btg-color-accent-300)]',
    descriptionText: 'text-[var(--btg-color-accent-100)]',
  },
  highlight: {
    shapeBg: 'bg-[var(--btg-color-highlight-400)]',
    numberText: 'text-[var(--btg-color-neutral-1000)]',
    lineColor: 'bg-[var(--btg-color-highlight-400)]',
    titleText: 'text-[var(--btg-color-highlight-300)]',
    descriptionText: 'text-[var(--btg-color-highlight-100)]',
  },
  neutral: {
    shapeBg: 'bg-[var(--btg-color-neutral-400)]',
    numberText: 'text-[var(--btg-color-neutral-1000)]',
    lineColor: 'bg-[var(--btg-color-neutral-400)]',
    titleText: 'text-[var(--btg-color-neutral-300)]',
    descriptionText: 'text-[var(--btg-color-neutral-100)]',
  },
}

const circleClasses = `z-10 h-12 w-12 flex-shrink-0 rounded-full font-bold text-xl`
const arrowClasses = `h-24 w-24 pt-2`

/**
 *  The Stepper component displays progress through a sequence of logical and numbered steps.
 *  It is best used when presenting instructional content that must be conducted in a particular order.
 *  It requires a title and description to be present and will automatically provide numbers to the steps
 *
 * [Figma Design](https://www.figma.com)
 * [Github](https://github.com/bridge-design/website/blob/main/components/Stepper/Stepper.tsx)
 */
export const Stepper: React.FC<StepperProps> = ({
  steps,
  color = 'neutral',
  variant = 'arrow',
  showLines = false,
  titleTag: TitleTag = 'h3',
}) => {
  // Define the color shades based on the selected color option

  const selectedColor = colorClasses[color]

  return (
    <div className="relative flex flex-col space-y-8 pb-4">
      {/* Vertical Line */}
      {showLines && (
        <div
          className={`absolute left-6 top-0 z-0 ${variant === 'arrow' ? 'ml-6' : ''} h-full w-px ${selectedColor.lineColor}`}
        ></div>
      )}
      {steps.map((step, index) => (
        <div
          key={`${step.title}-${index}`}
          className={`relative flex items-start ${variant === 'arrow' ? 'pt-2' : ''}`} //visually align with arrow variant
        >
          {/* Arrow Shape */}
          <div className="relative z-10">
            <div
              className={`arrow flex items-center justify-center text-xl font-bold ${selectedColor.numberText} ${selectedColor.shapeBg} ${variant === 'circle' ? circleClasses : arrowClasses}`}
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

          {/* Divider Line */}
          {showLines && variant === 'circle' && (
            <div className={`mt-6 h-px w-8 flex-shrink-0 ${selectedColor.lineColor}`}></div>
          )}

          {/* Step Content */}
          <div className="ml-4">
            {/* Customizable Title Tag */}
            <TitleTag className={`text-xl font-bold ${selectedColor.titleText}`}>
              {step.title}
            </TitleTag>
            <p className={`text-lg ${selectedColor.descriptionText}`}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
