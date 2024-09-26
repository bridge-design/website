import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'secondary', onClick }) => {
  let baseStyles = `px-4 py-2 rounded transition-colors duration-200 ease-in-out font-semibold`
  let variantStyles = ''

  switch (variant) {
    case 'primary':
      variantStyles = `bg-[var(--btg-color-primary-500)] text-white hover:bg-[var(--btg-color-primary-400)]`
      break
    case 'secondary':
    default:
      variantStyles = `bg-[var(--btg-color-neutral-600)] text-[var(--btg-color-neutral-200)] hover:bg-[var(--btg-color-neutral-500)]`
      break
  }

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {children}
    </button>
  )
}
