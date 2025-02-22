import React from 'react'
import Link from '../Link/Link'
import * as styles from './Card.module.css'

interface CardProps {
  href?: string
  className?: string
  children?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ href, className, children }) => {
  const cardContent = (
    <div
      className={`rounded-lg bg-[var(--btg-card-background)] p-4 text-center shadow-sm transition hover:bg-[var(--btg-card-background--hover)] sm:flex-row sm:text-left ${className}`}
    >
      {children}
    </div>
  )

  return (
    <>
      <style>{`
      :root {
        --btg-card-background: var(--btg-color-neutral-900);
        --btg-card-background--hover: var(--btg-color-neutral-800);
        --btg-card-text: var(--btg-color-neutral-100);
      }

      .dark-theme:root {
        --btg-card-background: var(--btg-color-neutral-400);
        --btg-card-background--hover: var(--btg-color-neutral-500);
        --btg-card-text: var(--btg-color-neutral-1000);
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --btg-card-background: var(--btg-color-neutral-400);
          --btg-card-background--hover: var(--btg-color-neutral-500);
          --btg-card-text: var(--btg-color-neutral-1000);
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
