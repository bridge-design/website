import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import { Logo } from '../Logo/Logo'

interface HeaderProps {
  navigationItems: { name: string; href: string }[]
  linkComponent?: React.ElementType
}

export const Header: React.FC<HeaderProps> = ({ navigationItems, linkComponent }) => {
  return (
    <header className="w-full bg-white shadow-md dark:bg-black">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Logo className="h-8 w-auto text-black dark:text-white" />
        </div>

        {/* Navigation */}
        <Navigation items={navigationItems} linkComponent={linkComponent} />
      </div>
    </header>
  )
}
