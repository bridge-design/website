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
          <div key={index} className="flex flex-col">
            <Icon name={item.icon} className={iconClass} size={32} />
            <h2 className="mb-4 mt-6 font-2xl text-2xl">{item.title}</h2>
            <span className="font-lg text-lg">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

Advantages.displayName = 'Advantages'

export default Advantages
