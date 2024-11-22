import React from 'react'

import { HorizontalWave } from '../HorizontalWave/HorizontalWave'

import * as styles from './Outro.module.css'

interface OutroProps {
  backgroundColor?: string
  children?: React.ReactNode
}

export const Outro: React.FC<OutroProps> = ({
  backgroundColor = 'var(--btg-hero-background-teal)',
  children,
}) => {
  return (
    <>
      <HorizontalWave color={backgroundColor} direction="top" />
      <section
        className={`${styles.outro} justify-between px-4 py-8 pt-12 lg:flex-row lg:items-start lg:px-16`}
        style={
          {
            '--outro-background-color': backgroundColor,
          } as React.CSSProperties
        }
      >
        {children}
      </section>
    </>
  )
}
