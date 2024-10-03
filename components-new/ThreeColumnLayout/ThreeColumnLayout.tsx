import React, { ReactNode } from 'react'
import classnames from 'classnames'

interface ThreeColumnLayoutProps {
  children: ReactNode
  className?: string
  color?: 'primary' | 'accent' | 'highlight' | 'neutral'
}

interface ColumnProps {
  children: ReactNode
}

export const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> & {
  Column: React.FC<ColumnProps>
} = ({ children, className, color = 'neutral' }) => {
  // Define the color classes for the h* tags
  const colorClasses = {
    primary: 'text-[var(--btg-color-primary-400)]',
    accent: 'text-[var(--btg-color-accent-400)]',
    highlight: 'text-[var(--btg-color-highlight-400)]',
    neutral: 'text-[var(--btg-color-neutral-400)]',
  }

  const selectedColor = colorClasses[color]

  return (
    <div
      className={classnames(className, 'grid w-full max-w-none grid-cols-1 gap-6 md:grid-cols-3')}
    >
      {/* Ensure the color is only applied to the h3 tags */}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, { selectedColor })
      })}
    </div>
  )
}

// Sub-component for a Column
ThreeColumnLayout.Column = ({
  children,
  selectedColor,
}: ColumnProps & { selectedColor?: string }) => {
  return (
    <div className="flex flex-col items-start">
      {/* Apply the selected color to h3 tags only */}
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && ['h2', 'h3', 'h4', 'h5', 'h6'].includes(child.type)
          ? React.cloneElement(child, {
              className: `${child.props.className || ''} ${selectedColor}`,
            })
          : child
      )}
    </div>
  )
}
