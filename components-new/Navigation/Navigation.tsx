'use client'

import React, { useState, useEffect, ReactNode } from 'react'
import classnames from 'classnames'
import { Menu, Close } from '@carbon/icons-react'
import * as styles from './Navigation.module.css'

interface NavigationItem {
  name: string
  href: string
}

interface NavigationProps {
  items: NavigationItem[]
  linkComponent?: React.ElementType
  className?: string
  children?: ReactNode
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const Navigation: React.FC<NavigationProps> = ({
  items,
  linkComponent: LinkComponent = 'a',
  className,
  children,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscClose)
    return () => {
      document.removeEventListener('keydown', handleEscClose)
    }
  }, [])

  return (
    <nav className={className}>
      <button
        className="ml-auto block lg:hidden"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? (
          <Close size={24} className="m-6 fill-current" />
        ) : (
          <Menu size={24} className="m-6 fill-current" />
        )}
      </button>

      <div
        className={
          isMenuOpen
            ? `${styles.navigation__dropdown} absolute left-0 right-0 top-24 z-50 mx-4 flex flex-col bg-white p-10 dark:bg-black`
            : 'relative hidden lg:flex'
        }
      >
        <ul className="flex w-full list-none flex-col justify-end gap-10 text-center lg:inline-flex lg:flex-row">
          {items.map((item) => (
            <li
              key={item.href}
              className="px-2 py-0 text-lg"
              onClick={() => setTimeout(() => setMenuOpen(false), 600)} // Close menu with delay after item click
            >
              <LinkComponent
                href={`${basePath}${item.href}`}
                className={classnames(
                  styles.link,
                  'border-transparent transition-colors duration-200',
                  ''
                )}
              >
                {item.name}
              </LinkComponent>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </nav>
  )
}
