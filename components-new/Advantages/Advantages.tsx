'use client'

import React from 'react'
import { Desk } from '../Desk/Desk'

interface AdvantageItem {
  icon: string
  title: string
  description: string
}

interface AdvantagesProps {
  content: AdvantageItem[]
  title?: React.ReactNode
}

/**
 * Advantages component to display benefits in a structured layout.
 * Now uses the Desk component internally for consistency.
 */
export const Advantages: React.FC<AdvantagesProps> = ({
  title,
  content,
}) => {
  return (
    <Desk
      title={title}
      content={content}
      backgroundColor="var(--btg-color-accent-400)"
      textColor="var(--btg-color-neutral-1000)"
      iconBackgroundColor="var(--btg-color-accent-500)"
      gridClasses="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    />
  )
}

Advantages.displayName = 'Advantages'

export default Advantages
