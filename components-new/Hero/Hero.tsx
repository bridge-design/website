import React from 'react'
import * as styles from './Hero.module.css'

interface HeroProps {
  title: string
  description: string
  buttons: React.ReactNode
  visual: React.ReactNode
  backgroundColor?: string
  children?: React.ReactNode
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttons,
  visual = null,
  backgroundColor = 'var(--btg-hero-background-teal)',
  children,
}) => {
  console.log(111, backgroundColor)
  return (
    <>
      <section
        className={`${styles.hero} flex flex-col items-center justify-between px-4 py-8 pb-20 lg:flex-row lg:items-start lg:px-16`}
        style={
          {
            '--hero-background-color': backgroundColor,
          } as React.CSSProperties
        }
      >
        {children}
      </section>
      <div
        className={`${styles.wave} h-48`}
        style={{
          color: backgroundColor,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none">
          <path
            d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z"
            fill="currentColor"
          />
          <path
            d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z"
            opacity=".5"
            fill="currentColor"
          />
        </svg>
      </div>
    </>
  )
}
