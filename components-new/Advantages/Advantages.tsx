import React from 'react'
import classNames from 'classnames'

import { Icon } from '../Icon/Icon'

interface AdvantageItem {
  icon: string
  title: string
  description: string
}

interface AdvantagesProps {
  backgroundColor?: string
  textColor?: string
  iconBackgroundColor?: string
  content: AdvantageItem[]
  title?: React.ReactNode
}

/**
 * Advantages component to display benefits in a structured layout.
 */
export const Advantages: React.FC<AdvantagesProps> = ({
  title,
  content,
  backgroundColor = 'var(--btg-color-accent-400)',
  textColor = 'var(--btg-color-neutral-1000)',
  iconBackgroundColor = 'var(--btg-color-accent-500)',
}) => {
  const containerClass = classNames(`bg-[${backgroundColor}] text-[${textColor}]`, 'p-10')
  const gridClass = classNames('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10')
  const iconClass = classNames(
    'rounded-full p-4',
    `bg-[${iconBackgroundColor}] text-[${textColor}]`
  )

  return (
    <div className={containerClass}>
      {title}
      <div className={gridClass}>
        {content.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Icon name={item.icon} className={iconClass} size={32} />
            <span className="font-2xl mb-4 mt-6 text-2xl">{item.title}</span>
            <span className="font-lg text-lg">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

Advantages.displayName = 'Advantages'

export default Advantages
