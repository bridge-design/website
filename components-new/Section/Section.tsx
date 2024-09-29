import React from 'react'

interface SectionProps {
  children: React.ReactNode
  backgroundColor?: string
}

export const Section: React.FC<SectionProps> = ({ children, backgroundColor = '' }) => {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: `var(${backgroundColor})` }} // Using the CSS variable for background color
    >
      <div className="mx-auto min-h-screen w-full max-w-[1280px] sm:min-w-full lg:min-w-[1024px]">
        {children}
      </div>
    </section>
  )
}
