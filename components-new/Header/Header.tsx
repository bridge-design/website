import React from 'react'
import { Navigation } from '../Navigation/Navigation'
import { Logo } from '../Logo/Logo'
import { Link } from '../Link/Link'

interface HeaderProps {
  navigationItems: { name: string; href: string }[]
  linkComponent?: React.ElementType
}

export const Header: React.FC<HeaderProps> = ({ navigationItems, linkComponent }) => {
  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-[1280px] py-6 sm:min-w-full lg:min-w-[1024px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Logo className="h-8 w-auto text-black dark:text-white" />
          </Link>
        </div>

        {/* Navigation */}
        <Navigation className="ml-auto" items={navigationItems} linkComponent={linkComponent} />
      </div>
    </header>
  )
}
