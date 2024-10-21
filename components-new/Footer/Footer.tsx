import React from 'react'
import Link from '../Link/Link'

interface FooterProps {
  siteTitle: string
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ siteTitle, className }) => {
  return (
    <footer className={className}>
      <div className="mt-8 flex w-full items-center justify-center border-t border-gray-300 py-10">
        <div>{`© ${new Date().getFullYear()} `}</div>
        {'\u00A0'}
        <Link
          href="/"
          className="font-bold inline-block hover:text-[var(--btg-color-primary-500)]"
          rel="noopener noreferrer"
        >
          {siteTitle}
        </Link>
      </div>
    </footer>
  )
}

export default Footer
