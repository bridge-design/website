import React from 'react'
import Link from '../Link/Link'
import * as styles from './Card.module.css'

interface CardProps {
  href?: string
  className?: string
  children?: React.ReactNode
  to?: string
  rounded?: boolean
  footer?: React.ReactNode
  textColorVar?: string
  textColorVarDark?: string
  backgroundColorVar?: string
  backgroundColorVarDark?: string
  backgroundColorVarHover?: string
  backgroundColorVarHoverDark?: string
}

export const Card: React.FC<CardProps> = ({
  href,
  className,
  children,
  rounded = true,
  footer,
  textColorVar = '--btg-color-neutral-100',
  textColorVarDark = '--btg-color-neutral-1000',
  backgroundColorVar = '--btg-color-neutral-900',
  backgroundColorVarDark = '--btg-color-neutral-400',
  backgroundColorVarHover = '--btg-color-neutral-800',
  backgroundColorVarHoverDark = '--btg-color-neutral-500',
}) => {
  const cardContent = (
    <div
      className={`${rounded ? 'rounded-lg' : ''} bg-[var(--btg-card-background)] p-4 shadow-sm transition hover:bg-[var(--btg-card-background--hover)] ${className}`}
    >
      <div className="flex h-full flex-col justify-between">
        {children}
        {footer}
      </div>
    </div>
  )

  return (
    <>
      <style>{`
      :root {
        --btg-card-background: var(${backgroundColorVar});
        --btg-card-background--hover: var(${backgroundColorVarHover});
        --btg-card-text: var(${textColorVar});
      }

      .dark-theme:root {
        --btg-card-background: var(${backgroundColorVarDark});
        --btg-card-background--hover: var(${backgroundColorVarHoverDark});
        --btg-card-text: var(${textColorVarDark});
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --btg-card-background: var(${backgroundColorVarDark});
          --btg-card-background--hover: var(${backgroundColorVarHoverDark});
          --btg-card-text: var(${textColorVarDark});
        }
      }

      `}</style>
      {href ? (
        <Link
          href={href}
          className={`${styles.card} group block transition-transform hover:translate-x-0`}
        >
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </>
  )
}
