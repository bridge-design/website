import React from 'react'
import classnames from 'classnames'

interface SectionProps {
  children: React.ReactNode
  backgroundColor?: string
  color?: string
  className?: string
}

export const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor = '',
  color = '',
  className,
}) => {
  return (
    <section
      className={classnames('w-full', className)}
      style={{ backgroundColor: `var(${backgroundColor})`, color: `var(${color})` }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-8 sm:min-w-full lg:min-w-[1024px]">
        {children}
      </div>
    </section>
  )
}
