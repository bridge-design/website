import React from 'react'

interface HeroProps {
  title: string
  description: string
  buttons: React.ReactNode
  visual: React.ReactNode
  children?: React.ReactNode
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttons,
  visual = null,
  children,
}) => {
  return (
    <section className="flex flex-col items-center justify-between px-4 py-8 lg:flex-row lg:items-start lg:px-16">
      {/* Image on mobile goes above the text */}
      <div className="mb-4 w-full lg:order-last lg:mb-0 lg:w-1/2">{visual}</div>

      {/* Text Content */}
      <div className="flex w-full flex-col justify-center lg:w-1/2">
        <h1 className="font-bold mb-4 text-3xl lg:text-5xl">{title}</h1>
        <p className="mb-6 text-lg lg:text-xl">{description}</p>

        {/* Buttons */}
        <div className="flex space-x-4">{buttons}</div>
      </div>
      {children}
    </section>
  )
}
