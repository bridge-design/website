import React, { useState, useEffect, ReactNode } from 'react'
import { Menu, Close } from '@carbon/icons-react'

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
          <Close size={24} className="m-6 fill-current text-black dark:text-white" />
        ) : (
          <Menu size={24} className="m-6 fill-current text-black dark:text-white" />
        )}
      </button>

      <div
        className={
          isMenuOpen
            ? 'absolute left-0 right-0 top-24 z-50 flex flex-col bg-white p-20 dark:bg-black'
            : 'relative hidden lg:flex'
        }
      >
        <ul className="flex w-full list-none flex-col justify-end gap-10 text-center text-black lg:inline-flex lg:flex-row dark:text-white">
          {items.map((item) => (
            <li
              key={item.href}
              className="px-2 py-2 lg:py-0"
              onClick={() => setTimeout(() => setMenuOpen(false), 600)} // Close menu with delay after item click
            >
              <LinkComponent
                href={item.href}
                className="border-b-2 border-transparent transition-colors duration-200 hover:border-black dark:hover:border-white"
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