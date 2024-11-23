import React from 'react'
import BridgeLogo from './bridge_logo.svg'

console.log(222, BridgeLogo)

interface LogoProps {
  className?: string
  variant?: 'dark' | 'green' | 'pink' | 'yellow' | 'light'
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'dark' }) => {
  const baseStyles = 'flex'
  let variantStyles = ''

  switch (variant) {
    case 'dark':
      variantStyles = 'text-[var(--btg-color-brand-dark)]'
      break
    case 'green':
      variantStyles = 'text-[var(--btg-color-brand-green)]'
      break
    case 'pink':
      variantStyles = 'text-[var(--btg-color-brand-pink)]'
      break
    case 'yellow':
      variantStyles = 'text-[var(--btg-color-brand-yellow)]'
      break
    case 'light':
    default:
      variantStyles = 'text-[var(--btg-color-brand-light)]'
      break
  }

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`}>
      <BridgeLogo className="fill-current" style={{ width: '100%' }} />
    </div>
  )
}
