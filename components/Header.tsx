'use client'
import { Logo, Nav } from '@bridge-the-gap/design-system'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'

const Header = () => {
  return (
    <header className="flex w-full items-center pt-11">
      <Link href="/">
        <Logo className="r-auto max-w-[250px]" />
      </Link>
      <Nav items={headerNavLinks} className="ml-auto" linkComponent={Link} />
    </header>
  )
}

export default Header
