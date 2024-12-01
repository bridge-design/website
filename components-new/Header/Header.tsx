import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import { Logo } from '../Logo/Logo'
import { Link } from '../Link/Link'
import * as styles from './Header.module.css'

interface HeaderProps {
  backgroundColor?: string
  navigationItems: { name: string; href: string }[]
  linkComponent?: React.ElementType
}

export const Header: React.FC<HeaderProps> = ({
  backgroundColor = 'var(--btg-hero-background)',
  navigationItems,
  linkComponent,
}) => {
  return (
    <header
      className={`${styles.header} w-full`}
      style={
        {
          '--header-color': backgroundColor,
        } as React.CSSProperties
      }
    >
      <div className="mx-auto flex w-full max-w-[1280px] px-8 py-6 sm:min-w-full sm:max-w-[100px] lg:min-w-[1024px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Logo className="h-8 w-auto" />
          </Link>
        </div>

        {/* Navigation */}
        <Navigation className="ml-auto" items={navigationItems} linkComponent={linkComponent} />
      </div>
    </header>
  )
}
