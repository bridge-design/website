import React from 'react'
import { Link } from '../Link/Link'
import * as styles from './Footer.module.css'

interface FooterProps {
  siteTitle: string
  backgroundColor?: string
  className?: string
}

export const Footer: React.FC<FooterProps> = ({
  siteTitle,
  backgroundColor = 'var(--btg-hero-background-teal)',
  className = '',
}) => {
  return (
    <footer
      className={`${styles.footer} ${className}`}
      style={
        {
          '--footer-color': backgroundColor,
        } as React.CSSProperties
      }
    >
      <div className="mx-auto flex w-full max-w-[1280px] px-8 py-6 sm:min-w-full lg:min-w-[1024px]">
        <div className="mt-8 w-full justify-center text-center">
          <span>{`© ${new Date().getFullYear()} `}</span>
          {'\u00A0'}
          <Link
            href="/"
            className="inline-block font-bold hover:text-[var(--btg-color-primary-500)]"
            rel="noopener noreferrer"
          >
            {siteTitle}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
