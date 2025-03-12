import React from 'react'
import classnames from 'classnames'

interface SectionProps {
  children: React.ReactNode
  backgroundColor?: string
  color?: string
  className?: string
  narrow?: boolean
}

export const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor = '',
  color = '',
  className,
  narrow = false,
}) => {
  return (
    <section
      className={classnames('w-full', className)}
      style={{ backgroundColor: `var(${backgroundColor})`, color: `var(${color})` }}
    >
      <div
        className={classnames(
          'mx-auto w-full px-8',
          narrow ? 'max-w-[768px]' : 'max-w-[1280px] sm:min-w-full lg:min-w-[1024px]'
        )}
      >
        {children}
      </div>
    </section>
  )
}
