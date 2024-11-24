import React from 'react'

import { HorizontalWave } from '../HorizontalWave/HorizontalWave'

import * as styles from './Hero.module.css'

interface HeroProps {
  backgroundColor?: string
  children?: React.ReactNode
}

export const Hero: React.FC<HeroProps> = ({
  backgroundColor = 'var(--btg-hero-background-teal)',
  children,
}) => {
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
      <HorizontalWave color={backgroundColor} direction="down" />
    </>
  )
}
