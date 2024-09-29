import React from 'react'
import classnames from 'classnames'

interface SectionProps {
  children: React.ReactNode
  backgroundColor?: string
  className?: string
}

export const Section: React.FC<SectionProps> = ({ children, backgroundColor = '', className }) => {
  return (
    <section
      className={classnames('w-full', className)}
      style={{ backgroundColor: `var(${backgroundColor})` }} // Using the CSS variable for background color
    >
      <div className="mx-auto min-h-screen w-full max-w-[1280px] sm:min-w-full lg:min-w-[1024px]">
        {children}
      </div>
    </section>
  )
}
