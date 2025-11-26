'use client'

import React from 'react'
import classNames from 'classnames'

import { Icon } from '../Icon/Icon'

export interface DeskItem {
  icon: string
  title?: string
  description?: string
  url?: string
}

export interface DeskProps {
  backgroundColor?: string
  textColor?: string
  iconBackgroundColor?: string
  content: DeskItem[]
  title?: React.ReactNode
  url?: string
  gridClasses?: string
  containerClasses?: string
  itemClasses?: string
  iconClasses?: string
  titleClasses?: string
  descriptionClasses?: string
}

/**
 * Desk component - a customizable grid layout for displaying content items with icons.
 * More flexible than Advantages with customizable grid layouts and styling.
 */
export const Desk: React.FC<DeskProps> = ({
  title,
  content,
  backgroundColor = 'var(--btg-color-accent-400)',
  textColor = 'var(--btg-color-neutral-1000)',
  iconBackgroundColor = 'var(--btg-color-accent-500)',
  url,
  gridClasses = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10',
  containerClasses,
  itemClasses,
  iconClasses,
  titleClasses = 'mb-4 mt-6 font-2xl text-2xl',
  descriptionClasses = 'font-lg text-lg',
}) => {
  const handleClick = () => {
    if (url) {
      window.location.href = url
    }
  }

  const defaultContainerClasses = classNames(
    backgroundColor !== 'transparent' ? `bg-[${backgroundColor}]` : 'bg-transparent',
    `text-[${textColor}]`,
    'p-10',
    url && 'cursor-pointer hover:opacity-90 transition-opacity duration-200',
    containerClasses
  )

  const defaultIconClasses = classNames(
    'rounded-full p-4',
    `bg-[${iconBackgroundColor}] text-[${textColor}]`,
    iconClasses
  )

  const defaultItemClasses = classNames(
    'flex flex-col',
    itemClasses
  )

  return (
    <div className={defaultContainerClasses} onClick={handleClick}>
      {title}
      <div className={gridClasses}>
        {content.map((item, index) => (
          <div key={index} className={defaultItemClasses}>
            <Icon name={item.icon} className={defaultIconClasses} size={32} />
            <h2 className={titleClasses}>{item.title}</h2>
            <span className={descriptionClasses}>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

Desk.displayName = 'Desk'

export default Desk
